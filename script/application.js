import React, { lazy, memo, StrictMode, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { string as IsString } from 'prop-types';
import Loading from 'loading';
import Layout from 'components/layouts/default';
const AboutPage = lazy(() => import('components/pages/about'));
const DetailPage = lazy(() => import('components/pages/detail'));
const FontPage = lazy(() => import('components/pages/font'));
const HomePage = lazy(() => import('components/pages/home'));
const Application = ({ basename }) => {
    return (React.createElement(StrictMode, null,
        React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
            React.createElement(RecoilRoot, null,
                React.createElement(BrowserRouter, { basename: basename },
                    React.createElement(Layout, null,
                        React.createElement(Switch, null,
                            React.createElement(Route, { path: "/", exact: true, component: HomePage }),
                            React.createElement(Route, { path: "/about", component: AboutPage }),
                            React.createElement(Route, { path: "/font", component: FontPage }),
                            React.createElement(Route, { path: "/:country/:state", component: DetailPage }),
                            React.createElement(Route, { path: "/:country", component: DetailPage }),
                            React.createElement(Redirect, { to: "/" }))))))));
};
Application.displayName = 'Application';
Application.propTypes = {
    basename: IsString.isRequired,
};
export default memo(Application);
