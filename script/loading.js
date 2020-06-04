import React, { memo, useEffect, useState } from 'react';
import { number as IsNumber } from 'prop-types';
export const importWithDelay = (name, timeout = 1) => {
    return new Promise((resolve, reject) => {
        import(name)
            .then((mod) => {
            setTimeout(() => {
                resolve(mod);
            }, timeout);
        })
            .catch(reject);
    });
};
export const Loading = ({ timeout }) => {
    const [stage, setStage] = useState(0);
    const [mode, setMode] = useState(1);
    const processStage = () => {
        if (mode === -1 && stage === 1) {
            setMode(1);
        }
        if (mode === 1 && stage === 4) {
            setMode(-1);
        }
        setStage(stage + mode);
    };
    useEffect(() => {
        const handle = setInterval(processStage, timeout);
        return () => {
            clearInterval(handle);
        };
    });
    let dots = '';
    for (let idx = 0; idx < stage; idx++) {
        dots += '&middot;';
    }
    return (React.createElement("div", { className: "centered loading" },
        React.createElement("div", null,
            React.createElement("h1", { className: "dots", dangerouslySetInnerHTML: { __html: dots } }))));
};
Loading.displayName = 'Loading';
Loading.defaultProps = {
    timeout: 300,
};
Loading.propTypes = {
    timeout: IsNumber.isRequired,
};
export default memo(Loading);
