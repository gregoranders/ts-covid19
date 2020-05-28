"use strict";
var ServiceWorkerModule;
(function (ServiceWorkerModule) {
    ServiceWorkerModule.cacheFiles = [
        '',
        'favicon.ico',
        'favicon/android-chrome-144x144.png',
        'favicon/android-chrome-192x192.png',
        'favicon/android-chrome-256x256.png',
        'favicon/android-chrome-36x36.png',
        'favicon/android-chrome-384x384.png',
        'favicon/android-chrome-48x48.png',
        'favicon/android-chrome-512x512.png',
        'favicon/android-chrome-72x72.png',
        'favicon/android-chrome-96x96.png',
        'favicon/apple-touch-icon-1024x1024.png',
        'favicon/apple-touch-icon-114x114.png',
        'favicon/apple-touch-icon-120x120.png',
        'favicon/apple-touch-icon-144x144.png',
        'favicon/apple-touch-icon-152x152.png',
        'favicon/apple-touch-icon-167x167.png',
        'favicon/apple-touch-icon-180x180.png',
        'favicon/apple-touch-icon-57x57.png',
        'favicon/apple-touch-icon-60x60.png',
        'favicon/apple-touch-icon-72x72.png',
        'favicon/apple-touch-icon-76x76.png',
        'favicon/apple-touch-icon-precomposed.png',
        'favicon/apple-touch-icon.png',
        'favicon/favicon-16x16.png',
        'favicon/favicon-32x32.png',
        'favicon/favicon-48x48.png',
        'index.html',
        'manifest.json',
        'robots.txt',
        'script/application.js',
        'script/components/layout/index.js',
        'script/components/organisms/countries/index.js',
        'script/components/organisms/series/index.js',
        'script/components/pages/country/index.js',
        'script/components/pages/world/index.js',
        'script/context.js',
        'script/index.js',
        'script/loading.js',
        'script/registerServiceWorker.js',
        'script/routes.js',
        'script/states/model/collector.js',
        'script/states/model/index.js',
        'script/states/model/model.js',
        'script/states/model/processor.js',
        'styles.css',
        'vendor/@fortawesome/fontawesome-svg-core.js',
        'vendor/@fortawesome/free-brands-svg-icons.js',
        'vendor/@fortawesome/free-regular-svg-icons.js',
        'vendor/@fortawesome/free-solid-svg-icons.js',
        'vendor/clsx.js',
        'vendor/d3-array.js',
        'vendor/d3-color.js',
        'vendor/d3-format.js',
        'vendor/d3-interpolate.js',
        'vendor/d3-path.js',
        'vendor/d3-scale.js',
        'vendor/d3-shape.js',
        'vendor/d3-time-format.js',
        'vendor/d3-time.js',
        'vendor/es-module-shims.js',
        'vendor/idb.js',
        'vendor/object-assign.js',
        'vendor/prop-types.js',
        'vendor/react-dom.js',
        'vendor/react-is.js',
        'vendor/react-router-dom.js',
        'vendor/react-router.js',
        'vendor/react-smooth.js',
        'vendor/react-transition-group.js',
        'vendor/react-virtualized.js',
        'vendor/react.js',
        'vendor/recharts-scale.js',
        'vendor/recharts.js',
        'vendor/recoil.js',
        'vendor/scheduler.js',
    ];
})(ServiceWorkerModule || (ServiceWorkerModule = {}));
var ServiceWorkerModule;
(function (ServiceWorkerModule) {
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
    let Type;
    (function (Type) {
        Type["CONFIRMED"] = "confirmed";
        Type["DEATHS"] = "deaths";
        Type["RECOVERED"] = "recovered";
        Type["LOOKUP"] = "lookup";
    })(Type || (Type = {}));
    class ModelCollector {
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
    ServiceWorkerModule.ModelCollector = ModelCollector;
    class ModelProcessor {
        constructor(model) {
            this._model = [];
            if (model && model.length) {
                this._model = this.process(model);
            }
        }
        get model() {
            return this._model;
        }
        process(models) {
            return models.map((model) => {
                const factor = model.population ? model.population / 100000 : 1;
                const mapped = {
                    country: model.country,
                    population: model.population,
                };
                if (model.state && model.state.length) {
                    mapped.state = model.state;
                }
                mapped.values = model.values.map((value, index, all) => {
                    const avrg = {
                        5: this.avrg(5, index, all),
                        7: this.avrg(7, index, all),
                        14: this.avrg(14, index, all),
                        21: this.avrg(21, index, all),
                        28: this.avrg(28, index, all),
                    };
                    const diff = this.diff(value, index, all);
                    const base = {
                        confirmed: value.confirmed,
                        dead: value.deaths,
                        recovered: value.recovered,
                        active: this.active(value),
                    };
                    return {
                        ...base,
                        diff,
                        avrg,
                        ratio: {
                            ...this.ratio(base, factor),
                            diff: this.ratio(diff, factor),
                            avrg: {
                                5: this.ratio(avrg[5], factor),
                                7: this.ratio(avrg[7], factor),
                                14: this.ratio(avrg[14], factor),
                                21: this.ratio(avrg[21], factor),
                                28: this.ratio(avrg[28], factor),
                            },
                        },
                        timestamp: value.timestamp,
                    };
                });
                return mapped;
            });
        }
        diff(value, index, all) {
            if (!index) {
                return {
                    confirmed: 0,
                    dead: 0,
                    recovered: 0,
                    active: 0,
                };
            }
            else {
                return {
                    confirmed: value.confirmed - all[index - 1].confirmed,
                    dead: value.deaths - all[index - 1].deaths,
                    recovered: value.recovered - all[index - 1].recovered,
                    active: this.active(value) - this.active(all[index - 1]),
                };
            }
        }
        avrg(back, index, all) {
            if (!index) {
                return {
                    confirmed: all[index].confirmed,
                    dead: all[index].deaths,
                    recovered: all[index].recovered,
                    active: this.active(all[index]),
                };
            }
            else {
                const sum = {
                    confirmed: 0,
                    dead: 0,
                    recovered: 0,
                    active: 0,
                };
                let iter = 0;
                for (let idx = index; idx > index - back && idx > 0; idx--) {
                    const diff = this.diff(all[idx], idx, all);
                    sum.confirmed += diff.confirmed;
                    sum.dead += diff.dead;
                    sum.recovered += diff.recovered;
                    sum.active += diff.active;
                    iter++;
                }
                if (!iter) {
                    return sum;
                }
                return {
                    confirmed: sum.confirmed / iter,
                    dead: sum.dead / iter,
                    recovered: sum.recovered / iter,
                    active: sum.active / iter,
                };
            }
        }
        active(value) {
            return value.confirmed - value.deaths - value.recovered;
        }
        ratio(value, factor) {
            return {
                confirmed: value.confirmed / factor,
                dead: value.dead / factor,
                recovered: value.recovered / factor,
                active: value.active / factor,
            };
        }
    }
    ServiceWorkerModule.ModelProcessor = ModelProcessor;
})(ServiceWorkerModule || (ServiceWorkerModule = {}));
var ServiceWorkerModule;
(function (ServiceWorkerModule) {
    const baseHref = (() => {
        const url = new URL(location.toString());
        return url.searchParams.get('base') || '/';
    })();
    let CustomServiceWorker = (() => {
        class CustomServiceWorker {
            constructor(service = self, base = '/', cacheUrls = []) {
                this.service = service;
                this.base = base;
                this.cacheUrls = cacheUrls;
                service.customServiceWorker = this;
            }
            register() {
                if (!this.service) {
                    throw new Error('Invalid service [ServiceWorkerGlobalScope]');
                }
                this.service.onsync = this.onSync.bind(this);
                this.service.onactivate = this.onActivate.bind(this);
                this.service.oninstall = this.onInstall.bind(this);
                this.service.onmessage = this.onMessage.bind(this);
            }
            onInstall(event) {
                event.waitUntil(new Promise((resolve) => {
                    this.initializeCache().then(() => {
                        resolve(this.service.skipWaiting());
                    });
                }));
            }
            async onActivate(event) {
                event.waitUntil(new Promise((resolve) => {
                    this.flushCache().then(() => {
                        resolve(this.service.skipWaiting());
                    });
                }));
            }
            onFetch(event) {
                if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
                    return;
                }
                event.respondWith(caches.match(event.request).then((response) => {
                    if (response) {
                        return response;
                    }
                    return this.service.fetch(event.request, { credentials: 'same-origin' }).then((response) => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        const responseToCache = response.clone();
                        caches
                            .open(this.cacheId('fetch'))
                            .then((cache) => {
                            cache.put(event.request, responseToCache);
                        })
                            .catch((error) => {
                            throw error;
                        });
                        return response;
                    });
                }));
            }
            onMessage(event) {
                this.log('message', event);
                if (event && event.data && event.data.type) {
                    switch (event.data.type) {
                        case 'GET_VERSION':
                            event.ports[0].postMessage(CustomServiceWorker.version);
                            break;
                        case 'CONTENT_CACHED':
                            this.service.clients.matchAll().then((clients) => {
                                clients.forEach((client) => {
                                    client.postMessage('CONTENT_CACHED');
                                });
                            });
                            break;
                        case 'CONTENT_UPDATED':
                            this.service.clients.matchAll().then((clients) => {
                                clients.forEach((client) => {
                                    client.postMessage('CONTENT_UPDATED');
                                });
                            });
                            break;
                        case 'CLIENTS_CLAIM':
                            this.service.clients.claim();
                            break;
                        case 'SKIP_WAITING':
                            this.service.skipWaiting();
                            break;
                        case 'REDUNDANT':
                            this.log('REDUNDANT');
                            break;
                    }
                }
                else {
                    this.log('message raw', event);
                }
            }
            async onSync(event) {
                switch (event.tag) {
                    case 'UPDATE_MODEL':
                        const collector = new ServiceWorkerModule.ModelCollector();
                        const data = await collector.collect();
                        const processor = new ServiceWorkerModule.ModelProcessor(data);
                        const models = processor.model;
                        this.service.clients.matchAll().then((clients) => {
                            clients.forEach((client) => {
                                client.postMessage(models);
                            });
                        });
                }
            }
            log(...parameters) {
                const styles = [
                    `background: #000080`,
                    `border-radius: 0.5em`,
                    `color: white`,
                    `font-weight: bold`,
                    `padding: 2px 0.em`,
                ];
                console.log(...[`%c${CustomServiceWorker.id}-${CustomServiceWorker.version}`, styles.join(';')], parameters);
            }
            cacheId(id) {
                return `${id}-${CustomServiceWorker.version}`;
            }
            initializeCache() {
                return new Promise((resolve, reject) => {
                    caches
                        .open(this.cacheId('install'))
                        .then((cache) => {
                        return cache.addAll(this.cacheUrls.map((url) => {
                            return `${this.base}${url}`;
                        }));
                    })
                        .then(resolve)
                        .catch(reject);
                });
            }
            flushCache() {
                const cacheWhitelist = [this.cacheId('install'), this.cacheId('fetch'), this.cacheId('data')];
                return new Promise((resolve, reject) => {
                    caches
                        .keys()
                        .then((cacheNames) => {
                        resolve(Promise.all(cacheNames.map((cacheName) => {
                            if (cacheWhitelist.indexOf(cacheName) === -1) {
                                return caches.delete(cacheName);
                            }
                            return Promise.resolve(true);
                        })));
                    })
                        .catch(reject);
                });
            }
        }
        CustomServiceWorker.id = 'ServiceWorker';
        CustomServiceWorker.version = '0.0.1';
        return CustomServiceWorker;
    })();
    const serviceWorker = new CustomServiceWorker(self, baseHref, []);
    serviceWorker.register();
})(ServiceWorkerModule || (ServiceWorkerModule = {}));
