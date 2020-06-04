import React, { memo, useEffect, useState } from 'react';
import { number as IsNumber } from 'prop-types';
export const Spinner = ({ timeout }) => {
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
    return (React.createElement("div", { className: "centered spinner" },
        React.createElement("div", null,
            React.createElement("h1", { className: "dots", dangerouslySetInnerHTML: { __html: dots } }))));
};
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
    timeout: 300,
};
Spinner.propTypes = {
    timeout: IsNumber.isRequired,
};
export default memo(Spinner);
