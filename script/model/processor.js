import PropTypes from 'prop-types';
import Population from "./population.js";
export var Sort;
(function (Sort) {
    Sort[Sort["COUNTRY_ASC"] = 0] = "COUNTRY_ASC";
    Sort[Sort["COUNTRY_DESC"] = 1] = "COUNTRY_DESC";
    Sort[Sort["CONFIRMED_ASC"] = 2] = "CONFIRMED_ASC";
    Sort[Sort["CONFIRMED_DESC"] = 3] = "CONFIRMED_DESC";
    Sort[Sort["DEATHS_ASC"] = 4] = "DEATHS_ASC";
    Sort[Sort["DEATHS_DESC"] = 5] = "DEATHS_DESC";
    Sort[Sort["RECOVERED_ASC"] = 6] = "RECOVERED_ASC";
    Sort[Sort["RECOVERED_DESC"] = 7] = "RECOVERED_DESC";
    Sort[Sort["ACTIVE_ASC"] = 8] = "ACTIVE_ASC";
    Sort[Sort["ACTIVE_DESC"] = 9] = "ACTIVE_DESC";
    Sort[Sort["POPULATION_ASC"] = 10] = "POPULATION_ASC";
    Sort[Sort["POPULATION_DESC"] = 11] = "POPULATION_DESC";
    Sort[Sort["CONFIRMED_NORMALIZED_ASC"] = 12] = "CONFIRMED_NORMALIZED_ASC";
    Sort[Sort["CONFIRMED_NORMALIZED_DESC"] = 13] = "CONFIRMED_NORMALIZED_DESC";
    Sort[Sort["DEATHS_NORMALIZED_ASC"] = 14] = "DEATHS_NORMALIZED_ASC";
    Sort[Sort["DEATHS_NORMALIZED_DESC"] = 15] = "DEATHS_NORMALIZED_DESC";
    Sort[Sort["RECOVERED_NORMALIZED_ASC"] = 16] = "RECOVERED_NORMALIZED_ASC";
    Sort[Sort["RECOVERED_NORMALIZED_DESC"] = 17] = "RECOVERED_NORMALIZED_DESC";
})(Sort || (Sort = {}));
const sortByNameAsc = (a, b) => {
    const val = a.country.localeCompare(b.country);
    if (val === 0) {
        return a.state.localeCompare(b.state);
    }
    return val;
};
const sortByNameDesc = (a, b) => {
    const val = b.country.localeCompare(a.country);
    if (val === 0) {
        return b.state.localeCompare(a.state);
    }
    return val;
};
const sortByFieldAsc = (a, b, field) => {
    return a.values[a.values.length - 1][field] - b.values[b.values.length - 1][field];
};
const sortByFieldDesc = (a, b, field) => {
    return b.values[b.values.length - 1][field] - a.values[a.values.length - 1][field];
};
const sortByFieldNormalizedAsc = (a, b, field) => {
    const valueA = a.values[a.values.length - 1][field];
    const valueB = b.values[b.values.length - 1][field];
    const factorA = a.population / 100000;
    const factorB = b.population / 100000;
    return Math.round(valueA / factorA) - Math.round(valueB / factorB);
};
const sortByFieldNormalizedDesc = (a, b, field) => {
    const valueA = a.values[a.values.length - 1][field];
    const valueB = b.values[b.values.length - 1][field];
    const factorA = a.population / 100000;
    const factorB = b.population / 100000;
    return Math.round(valueB / factorB) - Math.round(valueA / factorA);
};
const sortByConfirmedAsc = (a, b) => {
    return sortByFieldAsc(a, b, 'confirmed');
};
const sortByConfirmedDesc = (a, b) => {
    return sortByFieldDesc(a, b, 'confirmed');
};
const sortByConfirmedNormalizedAsc = (a, b) => {
    return sortByFieldNormalizedAsc(a, b, 'confirmed');
};
const sortByConfirmedNormalizedDesc = (a, b) => {
    return sortByFieldNormalizedDesc(a, b, 'confirmed');
};
const sortByDeathsAsc = (a, b) => {
    return sortByFieldAsc(a, b, 'deaths');
};
const sortByDeathsDesc = (a, b) => {
    return sortByFieldDesc(a, b, 'deaths');
};
const sortByDeathsNormalizedAsc = (a, b) => {
    return sortByFieldNormalizedAsc(a, b, 'deaths');
};
const sortByDeathsNormalizedDesc = (a, b) => {
    return sortByFieldNormalizedDesc(a, b, 'deaths');
};
const sortByRecoveredAsc = (a, b) => {
    return sortByFieldAsc(a, b, 'recovered');
};
const sortByRecoveredDesc = (a, b) => {
    return sortByFieldDesc(a, b, 'recovered');
};
const sortByRecoveredNormalizedAsc = (a, b) => {
    return sortByFieldNormalizedAsc(a, b, 'recovered');
};
const sortByRecoveredNormalizedDesc = (a, b) => {
    return sortByFieldNormalizedDesc(a, b, 'recovered');
};
const sortByActiveAsc = (a, b) => {
    const latestA = a.values[a.values.length - 1];
    const latestB = b.values[b.values.length - 1];
    const activeA = latestA.confirmed - latestA.deaths - latestA.recovered;
    const activeB = latestB.confirmed - latestB.deaths - latestB.recovered;
    return activeA - activeB;
};
const sortByActiveDesc = (a, b) => {
    const latestA = a.values[a.values.length - 1];
    const latestB = b.values[b.values.length - 1];
    const activeA = latestA.confirmed - latestA.deaths - latestA.recovered;
    const activeB = latestB.confirmed - latestB.deaths - latestB.recovered;
    return activeB - activeA;
};
const sortByPopulationAsc = (a, b) => {
    return a.population - b.population;
};
const sortByPopulationDesc = (a, b) => {
    return b.population - a.population;
};
export class ModelProcessor {
    constructor(_model) {
        this._model = [];
        this._model = _model.map((model) => {
            const population = model.population ? model.population : this.population(model);
            return {
                ...model,
                population,
                values: model.values.map((value) => {
                    return {
                        ...value,
                    };
                }),
            };
        });
    }
    get model() {
        return this._model;
    }
    name(model) {
        if (model.state && model.state.length) {
            return `${model.country} - ${model.state}`;
        }
        return model.country;
    }
    url(model) {
        if (model.state && model.state.length) {
            return `${model.country}/${model.state}`;
        }
        return model.country;
    }
    find(country, state) {
        return this._model.find((model) => {
            if (state && state.length) {
                return model.country === country && model.state === state;
            }
            else {
                return model.country === country;
            }
        });
    }
    sort(sortBy) {
        switch (sortBy) {
            case Sort.COUNTRY_ASC:
                return this._sort(sortByNameAsc);
            case Sort.COUNTRY_DESC:
                return this._sort(sortByNameDesc);
            case Sort.CONFIRMED_ASC:
                return this._sort(sortByConfirmedAsc);
            case Sort.CONFIRMED_DESC:
                return this._sort(sortByConfirmedDesc);
            case Sort.CONFIRMED_NORMALIZED_ASC:
                return this._sort(sortByConfirmedNormalizedAsc);
            case Sort.CONFIRMED_NORMALIZED_DESC:
                return this._sort(sortByConfirmedNormalizedDesc);
            case Sort.DEATHS_ASC:
                return this._sort(sortByDeathsAsc);
            case Sort.DEATHS_DESC:
                return this._sort(sortByDeathsDesc);
            case Sort.DEATHS_NORMALIZED_ASC:
                return this._sort(sortByDeathsNormalizedAsc);
            case Sort.DEATHS_NORMALIZED_DESC:
                return this._sort(sortByDeathsNormalizedDesc);
            case Sort.RECOVERED_ASC:
                return this._sort(sortByRecoveredAsc);
            case Sort.RECOVERED_DESC:
                return this._sort(sortByRecoveredDesc);
            case Sort.RECOVERED_NORMALIZED_ASC:
                return this._sort(sortByRecoveredNormalizedAsc);
            case Sort.RECOVERED_NORMALIZED_DESC:
                return this._sort(sortByRecoveredNormalizedDesc);
            case Sort.ACTIVE_ASC:
                return this._sort(sortByActiveAsc);
            case Sort.ACTIVE_DESC:
                return this._sort(sortByActiveDesc);
            case Sort.POPULATION_ASC:
                return this._sort(sortByPopulationAsc);
            case Sort.POPULATION_DESC:
                return this._sort(sortByPopulationDesc);
            default:
                return this._sort(sortByNameAsc);
        }
    }
    get aggregated() {
        return this.model
            .map((model) => model.values)
            .reduce((prev, current) => {
            return current.map((temp, index) => {
                if (temp.timestamp !== prev[index].timestamp)
                    throw new Error();
                return {
                    confirmed: temp.confirmed + prev[index].confirmed,
                    deaths: temp.deaths + prev[index].deaths,
                    recovered: temp.recovered + prev[index].recovered,
                    timestamp: temp.timestamp,
                };
            });
        });
    }
    utc(date) {
        return date.toUTCString().replace(/\s00:00:00.*/, '');
    }
    population(model) {
        const found = Population.find((population) => {
            if (population.country === model.country) {
                if (model.state === population.state) {
                    return true;
                }
            }
            return false;
        });
        if (found) {
            return found.count;
        }
        console.error(this.name(model));
        return 0;
    }
    ratio(a, b) {
        if (!b) {
            return a;
        }
        return (a / b) * 100.0;
    }
    get latestUpdateDate() {
        if (this._model && this._model.length) {
            return this._model[0].values[this._model[0].values.length - 1].timestamp;
        }
        return null;
    }
    _sort(sortFn) {
        return this._model.sort(sortFn);
    }
}
export const ModelProcessorPropTypes = PropTypes.instanceOf(ModelProcessor).isRequired;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjcmlwdC9tb2RlbC9wcm9jZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBR25DLE9BQU8sVUFBVSx3QkFBcUI7QUFFdEMsTUFBTSxDQUFOLElBQVksSUEyQlg7QUEzQkQsV0FBWSxJQUFJO0lBQ2QsNkNBQWUsQ0FBQTtJQUNmLCtDQUFnQixDQUFBO0lBRWhCLGlEQUFpQixDQUFBO0lBQ2pCLG1EQUFrQixDQUFBO0lBRWxCLDJDQUFjLENBQUE7SUFDZCw2Q0FBZSxDQUFBO0lBRWYsaURBQWlCLENBQUE7SUFDakIsbURBQWtCLENBQUE7SUFFbEIsMkNBQWMsQ0FBQTtJQUNkLDZDQUFlLENBQUE7SUFFZixvREFBbUIsQ0FBQTtJQUNuQixzREFBb0IsQ0FBQTtJQUVwQix3RUFBNkIsQ0FBQTtJQUM3QiwwRUFBOEIsQ0FBQTtJQUU5QixrRUFBMEIsQ0FBQTtJQUMxQixvRUFBMkIsQ0FBQTtJQUUzQix3RUFBNkIsQ0FBQTtJQUM3QiwwRUFBOEIsQ0FBQTtBQUNoQyxDQUFDLEVBM0JXLElBQUksS0FBSixJQUFJLFFBMkJmO0FBRUQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFRLEVBQUUsQ0FBUSxFQUFFLEVBQUU7SUFDM0MsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtRQUNiLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZDO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQVEsRUFBRSxDQUFRLEVBQUUsRUFBRTtJQUM1QyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1FBQ2IsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkM7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBUSxFQUFFLENBQVEsRUFBRSxLQUF1QixFQUFFLEVBQUU7SUFDckUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckYsQ0FBQyxDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFRLEVBQUUsQ0FBUSxFQUFFLEtBQXVCLEVBQUUsRUFBRTtJQUN0RSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyRixDQUFDLENBQUM7QUFFRixNQUFNLHdCQUF3QixHQUFHLENBQUMsQ0FBUSxFQUFFLENBQVEsRUFBRSxLQUF1QixFQUFFLEVBQUU7SUFDL0UsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFD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QUNELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFXLGdCQUFnQjtRQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1NBQzFFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sS0FBSyxDQUFDLE1BQXNDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBRUQsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBNb2RlbCwgTW9kZWxWYWx1ZSB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IFBvcHVsYXRpb24gZnJvbSAnLi9wb3B1bGF0aW9uJztcblxuZXhwb3J0IGVudW0gU29ydCB7XG4gIENPVU5UUllfQVNDID0gMCxcbiAgQ09VTlRSWV9ERVNDID0gMSxcblxuICBDT05GSVJNRURfQVNDID0gMixcbiAgQ09ORklSTUVEX0RFU0MgPSAzLFxuXG4gIERFQVRIU19BU0MgPSA0LFxuICBERUFUSFNfREVTQyA9IDUsXG5cbiAgUkVDT1ZFUkVEX0FTQyA9IDYsXG4gIFJFQ09WRVJFRF9ERVNDID0gNyxcblxuICBBQ1RJVkVfQVNDID0gOCxcbiAgQUNUSVZFX0RFU0MgPSA5LFxuXG4gIFBPUFVMQVRJT05fQVNDID0gMTAsXG4gIFBPUFVMQVRJT05fREVTQyA9IDExLFxuXG4gIENPTkZJUk1FRF9OT1JNQUxJWkVEX0FTQyA9IDEyLFxuICBDT05GSVJNRURfTk9STUFMSVpFRF9ERVNDID0gMTMsXG5cbiAgREVBVEhTX05PUk1BTElaRURfQVNDID0gMTQsXG4gIERFQVRIU19OT1JNQUxJWkVEX0RFU0MgPSAxNSxcblxuICBSRUNPVkVSRURfTk9STUFMSVpFRF9BU0MgPSAxNixcbiAgUkVDT1ZFUkVEX05PUk1BTElaRURfREVTQyA9IDE3LFxufVxuXG5jb25zdCBzb3J0QnlOYW1lQXNjID0gKGE6IE1vZGVsLCBiOiBNb2RlbCkgPT4ge1xuICBjb25zdCB2YWwgPSBhLmNvdW50cnkubG9jYWxlQ29tcGFyZShiLmNvdW50cnkpO1xuICBpZiAodmFsID09PSAwKSB7XG4gICAgcmV0dXJuIGEuc3RhdGUubG9jYWxlQ29tcGFyZShiLnN0YXRlKTtcbiAgfVxuICByZXR1cm4gdmFsO1xufTtcblxuY29uc3Qgc29ydEJ5TmFtZURlc2MgPSAoYTogTW9kZWwsIGI6IE1vZGVsKSA9PiB7XG4gIGNvbnN0IHZhbCA9IGIuY291bnRyeS5sb2NhbGVDb21wYXJlKGEuY291bnRyeSk7XG4gIGlmICh2YWwgPT09IDApIHtcbiAgICByZXR1cm4gYi5zdGF0ZS5sb2NhbGVDb21wYXJlKGEuc3RhdGUpO1xuICB9XG4gIHJldHVybiB2YWw7XG59O1xuXG5jb25zdCBzb3J0QnlGaWVsZEFzYyA9IChhOiBNb2RlbCwgYjogTW9kZWwsIGZpZWxkOiBrZXlvZiBNb2RlbFZhbHVlKSA9PiB7XG4gIHJldHVybiBhLnZhbHVlc1thLnZhbHVlcy5sZW5ndGggLSAxXVtmaWVsZF0gLSBiLnZhbHVlc1tiLnZhbHVlcy5sZW5ndGggLSAxXVtmaWVsZF07XG59O1xuXG5jb25zdCBzb3J0QnlGaWVsZERlc2MgPSAoYTogTW9kZWwsIGI6IE1vZGVsLCBmaWVsZDoga2V5b2YgTW9kZWxWYWx1ZSkgPT4ge1xuICByZXR1cm4gYi52YWx1ZXNbYi52YWx1ZXMubGVuZ3RoIC0gMV1bZmllbGRdIC0gYS52YWx1ZXNbYS52YWx1ZXMubGVuZ3RoIC0gMV1bZmllbGRdO1xufTtcblxuY29uc3Qgc29ydEJ5RmllbGROb3JtYWxpemVkQXNjID0gKGE6IE1vZGVsLCBiOiBNb2RlbCwgZmllbGQ6IGtleW9mIE1vZGVsVmFsdWUpID0+IHtcbiAgY29uc3QgdmFsdWVBID0gYS52YWx1ZXNbYS52YWx1ZXMubGVuZ3RoIC0gMV1bZmllbGRdO1xuICBjb25zdCB2YWx1ZUIgPSBiLnZhbHVlc1tiLnZhbHVlcy5sZW5ndGggLSAxXVtmaWVsZF07XG4gIGNvbnN0IGZhY3RvckEgPSBhLnBvcHVsYXRpb24gLyAxMDAwMDA7XG4gIGNvbnN0IGZhY3RvckIgPSBiLnBvcHVsYXRpb24gLyAxMDAwMDA7XG5cbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWVBIC8gZmFjdG9yQSkgLSBNYXRoLnJvdW5kKHZhbHVlQiAvIGZhY3RvckIpO1xufTtcblxuY29uc3Qgc29ydEJ5RmllbGROb3JtYWxpemVkRGVzYyA9IChhOiBNb2RlbCwgYjogTW9kZWwsIGZpZWxkOiBrZXlvZiBNb2RlbFZhbHVlKSA9PiB7XG4gIGNvbnN0IHZhbHVlQSA9IGEudmFsdWVzW2EudmFsdWVzLmxlbmd0aCAtIDFdW2ZpZWxkXTtcbiAgY29uc3QgdmFsdWVCID0gYi52YWx1ZXNbYi52YWx1ZXMubGVuZ3RoIC0gMV1bZmllbGRdO1xuICBjb25zdCBmYWN0b3JBID0gYS5wb3B1bGF0aW9uIC8gMTAwMDAwO1xuICBjb25zdCBmYWN0b3JCID0gYi5wb3B1bGF0aW9uIC8gMTAwMDAwO1xuXG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlQiAvIGZhY3RvckIpIC0gTWF0aC5yb3VuZCh2YWx1ZUEgLyBmYWN0b3JBKTtcbn07XG5cbmNvbnN0IHNvcnRCeUNvbmZpcm1lZEFzYyA9IChhOiBNb2RlbCwgYjogTW9kZWwpID0+IHtcbiAgcmV0dXJuIHNvcnRCeUZpZWxkQXNjKGEsIGIsICdjb25maXJtZWQnKTtcbn07XG5cbmNvbnN0IHNvcnRCeUNvbmZpcm1lZERlc2MgPSAoYTogTW9kZWwsIGI6IE1vZGVsKSA9PiB7XG4gIHJldHVybiBzb3J0QnlGaWVsZERlc2MoYSwgYiwgJ2NvbmZpcm1lZCcpO1xufTtcblxuY29uc3Qgc29ydEJ5Q29uZmlybWVkTm9ybWFsaXplZEFzYyA9IChhOiBNb2RlbCwgYjogTW9kZWwpID0+IHtcbiAgcmV0dXJuIHNvcnRCeUZpZWxkTm9ybWFsaXplZEFzYyhhLCBiLCAnY29uZmlybWVkJyk7XG59O1xuXG5jb25zdCBzb3J0QnlDb25maXJtZWROb3JtYWxpemVkRGVzYyA9IChhOiBNb2RlbCwgYjogTW9kZWwpID0+IHtcbiAgcmV0dXJuIHNvcnRCeUZpZWxkTm9ybWFsaXplZERlc2MoYSwgYiwgJ2NvbmZpcm1lZCcpO1xufTtcblxuY29uc3Qgc29ydEJ5RGVhdGhzQXNjID0gKGE6IE1vZGVsLCBiOiBNb2RlbCkgPT4ge1xuICByZXR1cm4gc29ydEJ5RmllbGRBc2MoYSwgYiwgJ2RlYXRocycpO1xufTtcblxuY29uc3Qgc29ydEJ5RGVhdGhzRGVzYyA9IChhOiBNb2RlbCwgYjogTW9kZWwpID0+IHtcbiAgcmV0dXJuIHNvcnRCeUZpZWxkRGVzYyhhLCBiLCAnZGVhdGhzJyk7XG59O1xuXG5jb25zdCBzb3J0QnlEZWF0aHNOb3JtYWxpemVkQXNjID0gKGE6IE1vZGVsLCBiOiBNb2RlbCkgPT4ge1xuICByZXR1cm4gc29ydEJ5RmllbGROb3JtYWxpemVkQXNjKGEsIGIsICdkZWF0aHMnKTtcbn07XG5cbmNvbnN0IHNvcnRCeURlYXRoc05vcm1hbGl6ZWREZXNjID0gKGE6IE1vZGVsLCBiOiBNb2RlbCkgPT4ge1xuICByZXR1cm4gc29ydEJ5RmllbGROb3JtYWxpemVkRGVzYyhhLCBiLCAnZGVhdGhzJyk7XG59O1xuXG5jb25zdCBzb3J0QnlSZWNvdmVyZWRBc2MgPSAoYTogTW9kZWwsIGI6IE1vZGVsKSA9PiB7XG4gIHJldHVybiBzb3J0QnlGaWVsZEFzYyhhLCBiLCAncmVjb3ZlcmVkJyk7XG59O1xuXG5jb25zdCBzb3J0QnlSZWNvdmVyZWREZXNjID0gKGE6IE1vZGVsLCBiOiBNb2RlbCkgPT4ge1xuICByZXR1cm4gc29ydEJ5RmllbGREZXNjKGEsIGIsICdyZWNvdmVyZWQnKTtcbn07XG5cbmNvbnN0IHNvcnRCeVJlY292ZXJlZE5vcm1hbGl6ZWRBc2MgPSAoYTogTW9kZWwsIGI6IE1vZGVsKSA9PiB7XG4gIHJldHVybiBzb3J0QnlGaWVsZE5vcm1hbGl6ZWRBc2MoYSwgYiwgJ3JlY292ZXJlZCcpO1xufTtcblxuY29uc3Qgc29ydEJ5UmVjb3ZlcmVkTm9ybWFsaXplZERlc2MgPSAoYTogTW9kZWwsIGI6IE1vZGVsKSA9PiB7XG4gIHJldHVybiBzb3J0QnlGaWVsZE5vcm1hbGl6ZWREZXNjKGEsIGIsICdyZWNvdmVyZWQnKTtcbn07XG5cbmNvbnN0IHNvcnRCeUFjdGl2ZUFzYyA9IChhOiBNb2RlbCwgYjogTW9kZWwpID0+IHtcbiAgY29uc3QgbGF0ZXN0QSA9IGEudmFsdWVzW2EudmFsdWVzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBsYXRlc3RCID0gYi52YWx1ZXNbYi52YWx1ZXMubGVuZ3RoIC0gMV07XG4gIGNvbnN0IGFjdGl2ZUEgPSBsYXRlc3RBLmNvbmZpcm1lZCAtIGxhdGVzdEEuZGVhdGhzIC0gbGF0ZXN0QS5yZWNvdmVyZWQ7XG4gIGNvbnN0IGFjdGl2ZUIgPSBsYXRlc3RCLmNvbmZpcm1lZCAtIGxhdGVzdEIuZGVhdGhzIC0gbGF0ZXN0Qi5yZWNvdmVyZWQ7XG5cbiAgcmV0dXJuIGFjdGl2ZUEgLSBhY3RpdmVCO1xufTtcblxuY29uc3Qgc29ydEJ5QWN0aXZlRGVzYyA9IChhOiBNb2RlbCwgYjogTW9kZWwpID0+IHtcbiAgY29uc3QgbGF0ZXN0QSA9IGEudmFsdWVzW2EudmFsdWVzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBsYXRlc3RCID0gYi52YWx1ZXNbYi52YWx1ZXMubGVuZ3RoIC0gMV07XG4gIGNvbnN0IGFjdGl2ZUEgPSBsYXRlc3RBLmNvbmZpcm1lZCAtIGxhdGVzdEEuZGVhdGhzIC0gbGF0ZXN0QS5yZWNvdmVyZWQ7XG4gIGNvbnN0IGFjdGl2ZUIgPSBsYXRlc3RCLmNvbmZpcm1lZCAtIGxhdGVzdEIuZGVhdGhzIC0gbGF0ZXN0Qi5yZWNvdmVyZWQ7XG5cbiAgcmV0dXJuIGFjdGl2ZUIgLSBhY3RpdmVBO1xufTtcblxuY29uc3Qgc29ydEJ5UG9wdWxhdGlvbkFzYyA9IChhOiBNb2RlbCwgYjogTW9kZWwpID0+IHtcbiAgcmV0dXJuIGEucG9wdWxhdGlvbiAtIGIucG9wdWxhdGlvbjtcbn07XG5cbmNvbnN0IHNvcnRCeVBvcHVsYXRpb25EZXNjID0gKGE6IE1vZGVsLCBiOiBNb2RlbCkgPT4ge1xuICByZXR1cm4gYi5wb3B1bGF0aW9uIC0gYS5wb3B1bGF0aW9uO1xufTtcblxuZXhwb3J0IGNsYXNzIE1vZGVsUHJvY2Vzc29yIHtcbiAgcHJpdmF0ZSBfbW9kZWw6IE1vZGVsW10gPSBbXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoX21vZGVsOiByZWFkb25seSBNb2RlbFtdKSB7XG4gICAgdGhpcy5fbW9kZWwgPSBfbW9kZWwubWFwKChtb2RlbCkgPT4ge1xuICAgICAgY29uc3QgcG9wdWxhdGlvbiA9IG1vZGVsLnBvcHVsYXRpb24gPyBtb2RlbC5wb3B1bGF0aW9uIDogdGhpcy5wb3B1bGF0aW9uKG1vZGVsKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm1vZGVsLFxuICAgICAgICBwb3B1bGF0aW9uLFxuICAgICAgICB2YWx1ZXM6IG1vZGVsLnZhbHVlcy5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsO1xuICB9XG5cbiAgcHVibGljIG5hbWUobW9kZWw6IHsgY291bnRyeTogc3RyaW5nOyBzdGF0ZT86IHN0cmluZyB9KSB7XG4gICAgaWYgKG1vZGVsLnN0YXRlICYmIG1vZGVsLnN0YXRlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGAke21vZGVsLmNvdW50cnl9IC0gJHttb2RlbC5zdGF0ZX1gO1xuICAgIH1cbiAgICByZXR1cm4gbW9kZWwuY291bnRyeTtcbiAgfVxuXG4gIHB1YmxpYyB1cmwobW9kZWw6IHsgY291bnRyeTogc3RyaW5nOyBzdGF0ZT86IHN0cmluZyB9KSB7XG4gICAgaWYgKG1vZGVsLnN0YXRlICYmIG1vZGVsLnN0YXRlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGAke21vZGVsLmNvdW50cnl9LyR7bW9kZWwuc3RhdGV9YDtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGVsLmNvdW50cnk7XG4gIH1cblxuICBwdWJsaWMgZmluZChjb3VudHJ5OiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsLmZpbmQoKG1vZGVsKSA9PiB7XG4gICAgICBpZiAoc3RhdGUgJiYgc3RhdGUubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtb2RlbC5jb3VudHJ5ID09PSBjb3VudHJ5ICYmIG1vZGVsLnN0YXRlID09PSBzdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtb2RlbC5jb3VudHJ5ID09PSBjb3VudHJ5O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNvcnQoc29ydEJ5OiBTb3J0KSB7XG4gICAgc3dpdGNoIChzb3J0QnkpIHtcbiAgICAgIGNhc2UgU29ydC5DT1VOVFJZX0FTQzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQoc29ydEJ5TmFtZUFzYyk7XG4gICAgICBjYXNlIFNvcnQuQ09VTlRSWV9ERVNDOlxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChzb3J0QnlOYW1lRGVzYyk7XG4gICAgICBjYXNlIFNvcnQuQ09ORklSTUVEX0FTQzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQoc29ydEJ5Q29uZmlybWVkQXNjKTtcbiAgICAgIGNhc2UgU29ydC5DT05GSVJNRURfREVTQzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQoc29ydEJ5Q29uZmlybWVkRGVzYyk7XG4gICAgICBjYXNlIFNvcnQuQ09ORklSTUVEX05PUk1BTElaRURfQVNDOlxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChzb3J0QnlDb25maXJtZWROb3JtYWxpemVkQXNjKTtcbiAgICAgIGNhc2UgU29ydC5DT05GSVJNRURfTk9STUFMSVpFRF9ERVNDOlxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChzb3J0QnlDb25maXJtZWROb3JtYWxpemVkRGVzYyk7XG4gICAgICBjYXNlIFNvcnQuREVBVEhTX0FTQzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQoc29ydEJ5RGVhdGhzQXNjKTtcbiAgICAgIGNhc2UgU29ydC5ERUFUSFNfREVTQzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQoc29ydEJ5RGVhdGhzRGVzYyk7XG4gICAgICBjYXNlIFNvcnQuREVBVEhTX05PUk1BTElaRURfQVNDOlxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChzb3J0QnlEZWF0aHNOb3JtYWxpemVkQXNjKTtcbiAgICAgIGNhc2UgU29ydC5ERUFUSFNfTk9STUFMSVpFRF9ERVNDOlxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChzb3J0QnlEZWF0aHNOb3JtYWxpemVkRGVzYyk7XG4gICAgICBjYXNlIFNvcnQuUkVDT1ZFUkVEX0FTQzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQoc29ydEJ5UmVjb3ZlcmVkQXNjKTtcbiAgICAgIGNhc2UgU29ydC5SRUNPVkVSRURfREVTQzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQoc29ydEJ5UmVjb3ZlcmVkRGVzYyk7XG4gICAgICBjYXNlIFNvcnQuUkVDT1ZFUkVEX05PUk1BTElaRURfQVNDOlxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChzb3J0QnlSZWNvdmVyZWROb3JtYWxpemVkQXNjKTtcbiAgICAgIGNhc2UgU29ydC5SRUNPVkVSRURfTk9STUFMSVpFRF9ERVNDOlxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChzb3J0QnlSZWNvdmVyZWROb3JtYWxpemVkRGVzYyk7XG4gICAgICBjYXNlIFNvcnQuQUNUSVZFX0FTQzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQoc29ydEJ5QWN0aXZlQXNjKTtcbiAgICAgIGNhc2UgU29ydC5BQ1RJVkVfREVTQzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQoc29ydEJ5QWN0aXZlRGVzYyk7XG4gICAgICBjYXNlIFNvcnQuUE9QVUxBVElPTl9BU0M6XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KHNvcnRCeVBvcHVsYXRpb25Bc2MpO1xuICAgICAgY2FzZSBTb3J0LlBPUFVMQVRJT05fREVTQzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQoc29ydEJ5UG9wdWxhdGlvbkRlc2MpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQoc29ydEJ5TmFtZUFzYyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBhZ2dyZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsXG4gICAgICAubWFwKChtb2RlbCkgPT4gbW9kZWwudmFsdWVzKVxuICAgICAgLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICByZXR1cm4gY3VycmVudC5tYXAoKHRlbXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKHRlbXAudGltZXN0YW1wICE9PSBwcmV2W2luZGV4XS50aW1lc3RhbXApIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb25maXJtZWQ6IHRlbXAuY29uZmlybWVkICsgcHJldltpbmRleF0uY29uZmlybWVkLFxuICAgICAgICAgICAgZGVhdGhzOiB0ZW1wLmRlYXRocyArIHByZXZbaW5kZXhdLmRlYXRocyxcbiAgICAgICAgICAgIHJlY292ZXJlZDogdGVtcC5yZWNvdmVyZWQgKyBwcmV2W2luZGV4XS5yZWNvdmVyZWQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRlbXAudGltZXN0YW1wLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXRjKGRhdGU6IERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS50b1VUQ1N0cmluZygpLnJlcGxhY2UoL1xcczAwOjAwOjAwLiovLCAnJyk7XG4gIH1cblxuICBwdWJsaWMgcG9wdWxhdGlvbihtb2RlbDogTW9kZWwpIHtcbiAgICBjb25zdCBmb3VuZCA9IFBvcHVsYXRpb24uZmluZCgocG9wdWxhdGlvbikgPT4ge1xuICAgICAgaWYgKHBvcHVsYXRpb24uY291bnRyeSA9PT0gbW9kZWwuY291bnRyeSkge1xuICAgICAgICBpZiAobW9kZWwuc3RhdGUgPT09IHBvcHVsYXRpb24uc3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICByZXR1cm4gZm91bmQuY291bnQ7XG4gICAgfVxuXG4gICAgY29uc29sZS5lcnJvcih0aGlzLm5hbWUobW9kZWwpKTtcblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcHVibGljIHJhdGlvKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgaWYgKCFiKSB7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgcmV0dXJuIChhIC8gYikgKiAxMDAuMDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGF0ZXN0VXBkYXRlRGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fbW9kZWwgJiYgdGhpcy5fbW9kZWwubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9kZWxbMF0udmFsdWVzW3RoaXMuX21vZGVsWzBdLnZhbHVlcy5sZW5ndGggLSAxXS50aW1lc3RhbXA7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfc29ydChzb3J0Rm46IChhOiBNb2RlbCwgYjogTW9kZWwpID0+IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbC5zb3J0KHNvcnRGbik7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE1vZGVsUHJvY2Vzc29yUHJvcFR5cGVzID0gUHJvcFR5cGVzLmluc3RhbmNlT2YoTW9kZWxQcm9jZXNzb3IpLmlzUmVxdWlyZWQ7XG4iXX0=