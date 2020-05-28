const DefaultConfiguration = {
    undefined: false,
    fieldSeparator: ',',
    lineSeparator: '\n',
    quote: '"',
};
const fieldValue = (cell, options) => {
    if (options.undefined && !cell.length) {
        return undefined;
    }
    return cell;
};
const addField = (field, row, state) => {
    row.push(field);
    state.field++;
    state.fieldOffset = -1;
    state.appendField = false;
};
const addRow = (row, rows, state) => {
    rows.push(row);
    state.field = 0;
    state.line++;
    state.lineOffset = -1;
    state.appendRow = false;
};
const csv = (text, configuration = DefaultConfiguration) => {
    const options = Object.assign({}, DefaultConfiguration, configuration);
    const state = {
        field: 0,
        fieldOffset: 0,
        line: 0,
        lineOffset: 0,
        quoted: false,
        appendCell: false,
        appendField: false,
        appendRow: false,
    };
    return new Promise((resolve, reject) => {
        if (!text.length) {
            reject(Error('Empty CSV text'));
        }
        else {
            const rows = [];
            let row = [];
            let cell = '';
            for (let idx = 0; idx < text.length; idx++) {
                state.appendCell = true;
                if (text[idx] === options.quote) {
                    if (idx && text[idx - 1] !== '\\') {
                        if (!cell.length || state.quoted) {
                            state.quoted = !state.quoted;
                        }
                        else {
                            reject(Error(`Invalid CSV text at offset ${state.line}:${state.lineOffset}`));
                        }
                        state.appendCell = false;
                    }
                    else {
                        cell = cell.substr(0, cell.length - 1);
                    }
                }
                else if (text[idx] === options.fieldSeparator) {
                    if (!state.quoted) {
                        state.appendCell = false;
                        state.appendField = true;
                    }
                }
                else if (text[idx] === options.lineSeparator) {
                    if (!state.quoted) {
                        state.appendCell = false;
                        state.appendField = true;
                        state.appendRow = true;
                    }
                }
                if (state.appendCell) {
                    cell += text[idx];
                }
                if (state.appendField) {
                    addField(fieldValue(cell, options), row, state);
                    cell = '';
                }
                if (state.appendRow) {
                    addRow(row, rows, state);
                    row = [];
                }
                state.lineOffset++;
                state.fieldOffset++;
            }
            if (row.length) {
                addField(fieldValue(cell, options), row, state);
                addRow(row, rows, state);
            }
            resolve(rows);
        }
    });
};
const csv2json = (text, configuration = DefaultConfiguration) => {
    return new Promise((resolve) => {
        csv(text, configuration).then((rows) => {
            const keys = rows[0].filter((field) => typeof field === 'string');
            resolve(rows
                .filter((row, idx) => idx > 0)
                .map((row) => {
                const obj = {};
                keys.forEach((key, keyIdx) => {
                    obj[key] = row[keyIdx];
                });
                return obj;
            }));
        });
    });
};
class ModelMapper {
    map(rows) {
        return rows
            .map((row) => this._map(row))
            .sort((a, b) => {
            const diff = a.country.localeCompare(b.country);
            return diff === 0 ? a.state.localeCompare(b.state) : diff;
        });
    }
    _map(row) {
        const temp = {
            values: [],
        };
        Object.keys(row).forEach((key) => {
            if (key.match(/State/)) {
                temp.state = row[key];
            }
            else if (key.match(/Country/)) {
                temp.country = row[key].replace(/\*/, '');
            }
            else if (key.match(/Lat/)) {
                temp.lat = parseFloat(row[key]);
            }
            else if (key.match(/Long/)) {
                temp.lon = parseFloat(row[key]);
            }
            else {
                const value = parseInt(row[key], 10);
                const date = new Date(key);
                const timestamp = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
                temp.values.push({ timestamp, value });
            }
        });
        temp.values.sort((a, b) => {
            return a.timestamp - b.timestamp;
        });
        return Object.freeze(temp);
    }
}
class LookupMapper {
    map(rows) {
        return rows
            .map((row) => this._map(row))
            .sort((a, b) => {
            const diff = a.country.localeCompare(b.country);
            return diff === 0 ? a.state.localeCompare(b.state) : diff;
        });
    }
    _map(row) {
        const temp = {};
        Object.keys(row).forEach((key) => {
            if (key.match(/State/)) {
                temp.state = row[key];
            }
            else if (key.match(/Country/)) {
                temp.country = row[key].replace(/\*/, '');
            }
            else if (key.match(/Lat/)) {
                temp.lat = parseFloat(row[key]);
            }
            else if (key.match(/Long/)) {
                temp.lon = parseFloat(row[key]);
            }
            else if (key.match(/Population/)) {
                temp.population = parseInt(row[key]);
            }
            else if (key.match(/UID/)) {
                temp.uid = parseInt(row[key]);
            }
            else if (key.match(/iso2/)) {
                temp.iso2 = row[key];
            }
            else if (key.match(/iso3/)) {
                temp.iso3 = row[key];
            }
            else if (key.match(/code3/)) {
                temp.code3 = parseInt(row[key]);
            }
            else if (key.match(/FIPS/)) {
                temp.fips = parseInt(row[key]);
            }
            else if (key.match(/Admin2/)) {
                temp.admin2 = row[key];
            }
        });
        return Object.freeze(temp);
    }
}
var Type;
(function (Type) {
    Type["CONFIRMED"] = "confirmed";
    Type["DEATHS"] = "deaths";
    Type["RECOVERED"] = "recovered";
    Type["LOOKUP"] = "lookup";
})(Type || (Type = {}));
export class ModelCollector {
    constructor(_modelMapper = new ModelMapper(), _lookupMapper = new LookupMapper()) {
        this._modelMapper = _modelMapper;
        this._lookupMapper = _lookupMapper;
    }
    async collect() {
        const lookup = await this._fetchLookup();
        const confirmed = await this._fetchModel(Type.CONFIRMED);
        const deaths = await this._fetchModel(Type.DEATHS);
        const resolved = await this._fetchModel(Type.RECOVERED);
        return this.merge(confirmed, deaths, resolved, lookup);
    }
    findSeries(timestamp, series) {
        const found = series.find((temp) => temp.timestamp === timestamp);
        if (found) {
            return found.value;
        }
        return 0;
    }
    async merge(confirmed, deaths, recovered, lookups) {
        return new Promise((resolve) => {
            const models = confirmed
                .filter((dummy) => {
                if (dummy.country === 'Canada' && dummy.state === 'Recovered') {
                    return false;
                }
                return true;
            })
                .map((model) => {
                const lookup = lookups.find((dummy) => {
                    let ret = dummy.country.localeCompare(model.country);
                    if (ret === 0) {
                        ret = dummy.state.localeCompare(model.state);
                    }
                    return ret === 0 ? true : false;
                });
                const modelDeaths = deaths.find((dummy) => dummy.country === model.country && dummy.state === model.state);
                const modelRecovered = recovered.find((dummy) => dummy.country === model.country && dummy.state === model.state);
                const values = model.values.map((value) => {
                    return Object.freeze({
                        confirmed: value.value,
                        deaths: this.findSeries(value.timestamp, modelDeaths ? modelDeaths.values : []),
                        recovered: this.findSeries(value.timestamp, modelRecovered ? modelRecovered.values : []),
                        timestamp: value.timestamp,
                    });
                });
                return Object.freeze({
                    country: model.country,
                    lat: model.lat,
                    lon: model.lon,
                    state: model.state,
                    population: lookup ? lookup.population || 0 : 0,
                    values: Object.freeze(values),
                });
            });
            resolve(models);
        });
    }
    async _fetchModel(type) {
        return this._fetch(type)
            .then((text) => {
            return csv2json(text);
        })
            .then((models) => {
            return this._modelMapper.map(models);
        });
    }
    async _fetchLookup() {
        return this._fetch(Type.LOOKUP)
            .then((text) => {
            return csv2json(text);
        })
            .then((models) => {
            return this._lookupMapper.map(models);
        });
    }
    async _fetch(type) {
        const request = new Request(this._fetchUrl(type), {
            headers: this._fetchHeaders(),
            method: 'GET',
        });
        return fetch(request, { credentials: 'same-origin' }).then((response) => response.text());
    }
    _fetchHeaders() {
        return {
            'Accept-Encoding': 'gzip, deflate, br',
        };
    }
    _fetchUrl(type) {
        const base = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/';
        if (type === Type.LOOKUP) {
            return base + 'UID_ISO_FIPS_LookUp_Table.csv';
        }
        return base + 'csse_covid_19_time_series' + `/time_series_covid19_${type}_global.csv`;
    }
}
export default ModelCollector;
