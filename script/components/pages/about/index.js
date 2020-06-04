import React, { memo } from 'react';
export const AboutPage = () => {
    return React.createElement("h2", null, AboutPage.displayName);
};
AboutPage.displayName = 'AboutPage';
export default memo(AboutPage);
