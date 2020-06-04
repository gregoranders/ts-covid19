import React, { memo, Suspense } from 'react';
import { arrayOf as ArrayOf, element as IsElement } from 'prop-types';
import Spinner from 'components/organisms/spinner';
import Main from 'components/organisms/main';
export const Layout = ({ children }) => {
    return (React.createElement(Main, null,
        React.createElement(Suspense, { fallback: React.createElement(Spinner, null) }, children)));
};
Layout.displayName = 'Layout';
Layout.propTypes = {
    children: ArrayOf(IsElement).isRequired,
};
export default memo(Layout);
