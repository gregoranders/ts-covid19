import { selector } from 'recoil';
import { aggregate } from 'model';
const MODELS_SELECTOR_KEY = 'modelsAsyncSelector';
export const ModelsSelector = selector({
    key: MODELS_SELECTOR_KEY,
    get: () => {
        return new Promise((resolve, reject) => {
            if (navigator.serviceWorker) {
                navigator.serviceWorker.ready
                    .then((registration) => {
                    const worker = registration.active || registration.installing || registration.waiting;
                    if (!worker) {
                        console.error('Missing serviceWorker');
                        return;
                    }
                    const channel = new MessageChannel();
                    channel.port1.onmessage = (e) => {
                        resolve(e.data);
                    };
                    channel.port1.onmessageerror = (e) => {
                        reject(e);
                    };
                    worker.postMessage({ type: 'GET_MODELS' }, { transfer: [channel.port2] });
                })
                    .catch(console.error);
            }
            else {
                reject();
            }
        });
    },
});
const AGGREGATE_SELECTOR_KEY = 'modelsAggregateSelector';
export const AggregateSelector = selector({
    key: AGGREGATE_SELECTOR_KEY,
    get: async ({ get }) => {
        const models = get(ModelsSelector);
        return aggregate(models);
    },
});
