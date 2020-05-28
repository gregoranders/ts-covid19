import React, { memo } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { string as IsString } from 'prop-types';
import { ContextProvider } from 'context';
import { routes } from 'routes';
import { Layout } from 'components/layout';
export const Application = ({ basename }) => {
    return (React.createElement(RecoilRoot, null,
        React.createElement(ContextProvider, { basename: basename },
            React.createElement(BrowserRouter, { basename: basename },
                React.createElement(Route, { render: ({ location }) => {
                        return (React.createElement(Layout, null,
                            React.createElement(Switch, { location: location },
                                routes.map((route) => {
                                    return (React.createElement(Route, { key: route.path, exact: route.exact, path: route.path, component: route.component }));
                                }),
                                React.createElement(Redirect, { to: "/" }))));
                    } })))));
};
Application.displayName = 'Application';
Application.propTypes = {
    basename: IsString.isRequired,
};
export default memo(Application);
