import React, { memo } from 'react';
import { arrayOf as ArrayOf, element as IsElement } from 'prop-types';
export const Main = ({ children }) => {
    return React.createElement("main", null, children);
};
Main.displayName = 'Main';
Main.propTypes = {
    children: ArrayOf(IsElement.isRequired).isRequired,
};
export default memo(Main);
