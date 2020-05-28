import React, { memo, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { Selector } from 'states/model';
import Loading from 'loading';
import Countries from 'components/organisms/countries';
export const World = () => {
    const models = useRecoilValue(Selector);
    return (React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
        React.createElement(Countries, { models: models })));
};
World.displayName = 'World';
export default memo(World);
