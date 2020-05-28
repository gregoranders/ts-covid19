const registerValidSW = (swUrl, basename) => {
    return new Promise((resolve, reject) => {
        navigator.serviceWorker
            .register(swUrl, { scope: basename, type: 'classic' })
            .then((registration) => {
            if (registration.installing) {
                resolve(registration.installing);
            }
            else if (registration.active) {
                resolve(registration.active);
            }
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker) {
                    installingWorker.onerror = console.error;
                    installingWorker.onstatechange = () => {
                        if (installingWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
                                installingWorker.postMessage({ type: 'CONTENT_UPDATED' });
                            }
                            else {
                                installingWorker.postMessage({ type: 'CONTENT_CACHED' });
                            }
                        }
                        else if (installingWorker.state === 'activated') {
                            installingWorker.postMessage({ type: 'CLIENTS_CLAIM' });
                        }
                    };
                }
            };
        })
            .catch(reject);
    });
};
const checkValidServiceWorker = (swUrl, basename) => {
    return new Promise((resolve, reject) => {
        fetch(swUrl)
            .then((response) => {
            if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            }
            else {
                resolve(registerValidSW(swUrl, basename));
            }
        })
            .catch(reject);
    });
};
const createUrl = (basename) => {
    const worker = 'serviceWorker.js';
    if (!basename || !basename.length || basename === '/') {
        return worker;
    }
    return `${basename}${worker}?base=${basename}`;
};
export const registerServiceWorker = (basename = '/') => {
    return new Promise((resolve, reject) => {
        if (navigator.serviceWorker) {
            const publicUrl = new URL(window.location.toString());
            if (publicUrl.origin !== window.location.origin) {
                return;
            }
            const swUrl = createUrl(basename);
            resolve(checkValidServiceWorker(swUrl, basename));
        }
        else {
            reject(new Error(`Missing navigator.serviceWorker`));
        }
    });
};
export const unregister = () => {
    return new Promise((resolve, reject) => {
        if (navigator.serviceWorker) {
            navigator.serviceWorker.ready.then((registration) => {
                resolve(registration.unregister());
            });
        }
        else {
            reject(new Error(`Missing navigator.serviceWorker`));
        }
    });
};
export default registerServiceWorker;
