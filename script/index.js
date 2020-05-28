import React, { memo, lazy, StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import { string as IsString } from 'prop-types';
import { registerServiceWorker } from 'registerServiceWorker';
import Loading, { importWithDelay } from 'loading';
const Application = lazy(() => importWithDelay('application', 1));
const basename = (() => {
    const element = document.head.querySelector('base');
    if (!element) {
        return '/';
    }
    return element.getAttribute('href') || '/';
})();
export const Bootstrap = memo(({ basename }) => {
    return (React.createElement(StrictMode, null,
        React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
            React.createElement(Application, { basename: basename }))));
});
Bootstrap.displayName = 'Bootstrap';
Bootstrap.propTypes = {
    basename: IsString.isRequired,
};
const serviceWorker = false;
export const bootstrap = async () => {
    try {
        render(React.createElement(Bootstrap, { basename: basename }), document.body);
        if (serviceWorker) {
            const worker = await registerServiceWorker(basename);
            worker.onstatechange = () => {
                location.reload();
            };
        }
    }
    catch (error) {
        console.error(error);
    }
};
export default bootstrap;
