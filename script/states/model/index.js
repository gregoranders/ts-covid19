import PropTypes from 'prop-types';
import { atom, selector } from 'recoil';
import { ModelArrayPropTypes } from 'states/model/model';
import { ModelCollector } from 'states/model/collector';
import { ModelProcessor } from 'states/model/processor';
export const nameFormatter = (model) => {
    if (model.state && model.state.length) {
        return `${model.country} - ${model.state}`;
    }
    return model.country;
};
export const urlFormatter = (model) => {
    if (model.state && model.state.length) {
        return `${model.country}/${model.state}`;
    }
    return model.country;
};
export const numberFormatter = (nb) => {
    if (Number.isInteger(nb)) {
        return nb.toLocaleString();
    }
    else {
        return Math.round(nb).toLocaleString();
    }
};
export const timeFormatter = (timestamp) => {
    return new Date(timestamp).toUTCString().replace(/\s00:.*/, '');
};
export const modelFind = (models, country, state) => {
    return models.find((model) => {
        if (state) {
            if (model.state) {
                return model.country === country && model.state === state;
            }
            return false;
        }
        return model.country === country;
    });
};
const STATE_KEY = 'modelState';
const SELECTOR_KEY = 'modelStateSelector';
export const State = atom({
    key: STATE_KEY,
    default: [],
});
export const Selector = selector({
    key: SELECTOR_KEY,
    get: () => {
        return new Promise((resolve, reject) => {
            const frontFetch = () => {
                const collector = new ModelCollector();
                collector
                    .collect()
                    .then((data) => {
                    const processor = new ModelProcessor(data);
                    setTimeout(() => {
                        const models = processor.model;
                        PropTypes.checkPropTypes(ModelArrayPropTypes, models, 'get', 'Selector');
                        PropTypes.resetWarningCache();
                        resolve(models);
                    }, 1);
                })
                    .catch(reject);
            };
            if (navigator.serviceWorker && navigator.serviceWorker.controller) {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.sync
                        .register('UPDATE_MODEL')
                        .then(() => {
                        navigator.serviceWorker.onmessage = (e) => {
                            PropTypes.checkPropTypes(ModelArrayPropTypes, e.data, 'get', 'Selector');
                            PropTypes.resetWarningCache();
                            resolve(e.data);
                        };
                    })
                        .catch(() => {
                        frontFetch();
                    });
                });
            }
            else {
                frontFetch();
            }
        });
    },
});
export default State;
