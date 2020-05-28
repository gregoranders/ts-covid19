import React, { memo } from 'react';
import { element as IsElement } from 'prop-types';
export const Layout = ({ children }) => {
    return React.createElement("main", null, children);
};
Layout.displayName = 'Layout';
Layout.propTypes = {
    children: IsElement.isRequired,
};
export default memo(Layout);
