import React, { memo, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const camelCaseToDash = (str) => {
    return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
};
export const FontPage = () => {
    const [icons, setIcons] = useState([]);
    const imports = [
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-brands-svg-icons',
    ].map((name) => {
        return import(name);
    });
    useEffect(() => {
        Promise.all(imports).then((modules) => {
            const list = [];
            modules.map((mod) => {
                Object.keys(mod).forEach((key) => {
                    if (key.startsWith('fa')) {
                        list.push(camelCaseToDash(key).replace('fa-', ''));
                    }
                });
            });
            setIcons(list.sort((a, b) => {
                return a.localeCompare(b);
            }));
        });
    });
    return (React.createElement("table", null, icons.map((icon, idx) => (React.createElement("tr", { key: idx },
        React.createElement("td", null, icon),
        React.createElement("td", null,
            React.createElement(FontAwesomeIcon, { size: '4x', icon: ['fas', icon] })),
        React.createElement("td", null,
            React.createElement(FontAwesomeIcon, { size: '4x', icon: ['far', icon] })),
        React.createElement("td", null,
            React.createElement(FontAwesomeIcon, { size: '4x', icon: ['fab', icon] })))))));
};
FontPage.displayName = 'FontPage';
export default memo(FontPage);
