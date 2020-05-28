import React, { createContext, memo, useState } from 'react';
import { string as IsString } from 'prop-types';
const defaultContext = {
    basename: '/',
};
export const Context = createContext(defaultContext);
export const ContextProvider = ({ basename, children }) => {
    const state = useState({
        context: {
            basename: basename,
        },
    })[0];
    return React.createElement(Context.Provider, { value: state.context }, children);
};
ContextProvider.displayName = 'ContextProvider';
ContextProvider.propTypes = {
    basename: IsString.isRequired,
};
export default memo(ContextProvider);
