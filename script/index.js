import React from 'react';
import { render } from 'react-dom';
import { Workbox } from 'workbox-window';
import Application from 'application';
const basename = (() => {
    const el = document.head.querySelector('base');
    if (el) {
        const attr = el.getAttribute('href');
        if (attr) {
            return attr.replace(/(.*)\/$/, '$1');
        }
    }
    return '/';
})();
export const bootstrap = async (sw = true) => {
    const el = document.querySelector('#app');
    if (!el) {
        throw Error('Missing element `#app`');
    }
    render(React.createElement(Application, { basename: basename }), el);
    if (sw && navigator.serviceWorker) {
        const worker = new Workbox(`${basename}/serviceWorker.js?base=${basename}`);
        worker.register();
    }
};
export default bootstrap;
