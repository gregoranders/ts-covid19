import React, { memo } from 'react';
import { number as IsNumber } from 'prop-types';
export const Footer = ({ year }) => {
    return React.createElement("footer", null,
        "\u00A9 ",
        year);
};
Footer.displayName = 'Footer';
Footer.defaultProps = {
    year: new Date().getUTCFullYear(),
};
Footer.propTypes = {
    year: IsNumber.isRequired,
};
export default memo(Footer);
