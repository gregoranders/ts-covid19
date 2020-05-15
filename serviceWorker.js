"use strict";
const service = self;
const componentName = 'Service Worker';
const SERVICE_WORKER_VERSION = '0.0.1';
const INSTALL_CACHE_ID = `install-cache-v${SERVICE_WORKER_VERSION}`;
const FETCH_CACHE_ID = `fetch-cache-v${SERVICE_WORKER_VERSION}`;
const DEBUG_MODE = location.hostname.endsWith('.app.local') || location.hostname === 'localhost' || location.hostname.match('fritz.box');
if (DEBUG_MODE) {
    self.console.debug(`${componentName} version ${SERVICE_WORKER_VERSION} loading...`);
}
service.addEventListener('install', (event) => {
    console.log('INSTALL', event);
    const urls = [
        '/',
        '/es-module-shims.js',
        '/es-modules-shims.json',
        '/favicon.ico',
        '/index.html',
        '/manifest.json',
        '/robots.txt',
        '/serviceWorker.js',
        '/favicon/android-chrome-144x144.png',
        '/favicon/android-chrome-192x192.png',
        '/favicon/android-chrome-256x256.png',
        '/favicon/android-chrome-36x36.png',
        '/favicon/android-chrome-384x384.png',
        '/favicon/android-chrome-48x48.png',
        '/favicon/android-chrome-512x512.png',
        '/favicon/android-chrome-72x72.png',
        '/favicon/android-chrome-96x96.png',
        '/favicon/apple-touch-icon-1024x1024.png',
        '/favicon/apple-touch-icon-114x114.png',
        '/favicon/apple-touch-icon-120x120.png',
        '/favicon/apple-touch-icon-144x144.png',
        '/favicon/apple-touch-icon-152x152.png',
        '/favicon/apple-touch-icon-167x167.png',
        '/favicon/apple-touch-icon-180x180.png',
        '/favicon/apple-touch-icon-57x57.png',
        '/favicon/apple-touch-icon-60x60.png',
        '/favicon/apple-touch-icon-72x72.png',
        '/favicon/apple-touch-icon-76x76.png',
        '/favicon/apple-touch-icon-precomposed.png',
        '/favicon/apple-touch-icon.png',
        '/favicon/favicon-16x16.png',
        '/favicon/favicon-32x32.png',
        '/favicon/favicon-48x48.png',
        '/script/application.js',
        '/script/context.js',
        '/script/index.js',
        '/script/routes.js',
        '/script/components/organisms/countries/countries.js',
        '/script/components/organisms/countries/index.js',
        '/script/components/organisms/world/index.js',
        '/script/components/organisms/world/world.js',
        '/script/components/pages/about/about.js',
        '/script/components/pages/about/index.js',
        '/script/components/pages/home/home.js',
        '/script/components/pages/home/index.js',
        '/script/components/templates/default/index.js',
        '/script/components/templates/default/layout.js',
        '/script/model/index.js',
        '/script/model/model.js',
        '/script/model/population.js',
        '/script/model/processor.js',
        '/script/model/worker.js',
        '/vendor/@material-ui/core.js',
        '/vendor/@material-ui/icons.js',
        '/vendor/@material-ui/styles.js',
        '/vendor/clsx/clsx.js',
        '/vendor/prop-types/prop-types.js',
        '/vendor/react/react.js',
        '/vendor/react-dom/react-dom.js',
        '/vendor/react-is/react-is.js',
        '/vendor/react-router/react-router.js',
        '/vendor/react-router-dom/react-router-dom.js',
        '/vendor/react-virtualized/react-virtualized.js',
        '/vendor/recharts/recharts.js',
    ];
    event.waitUntil(caches
        .open(INSTALL_CACHE_ID)
        .then((cache) => {
        return cache.addAll(urls);
    })
        .then(() => {
        return service.skipWaiting();
    })
        .catch((error) => {
        console.error(error);
    }));
});
service.addEventListener('fetch', (event) => {
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
        return;
    }
    event.respondWith(caches.match(event.request).then((response) => {
        if (response) {
            return response;
        }
        return service.fetch(event.request, { credentials: 'same-origin' }).then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }
            const responseToCache = response.clone();
            caches
                .open(FETCH_CACHE_ID)
                .then((cache) => {
                cache.put(event.request, responseToCache);
            })
                .catch(() => {
            });
            return response;
        });
    }));
});
service.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    event.waitUntil(caches.keys().then((cacheNames) => {
        return Promise.all(cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
            }
            return Promise.resolve(false);
        }));
    }));
});
service.addEventListener('message', (event) => {
    if (event && event.data && event.data.type) {
        switch (event.data.type) {
            case 'GET_VERSION':
                event.ports[0].postMessage(SERVICE_WORKER_VERSION);
                break;
            case 'CLIENTS_CLAIM':
                service.clients.claim();
                break;
            case 'SKIP_WAITING':
                service.skipWaiting();
                break;
        }
    }
});
