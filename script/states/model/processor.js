export class ModelProcessor {
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
