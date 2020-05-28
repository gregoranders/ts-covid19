import React, { memo, Suspense } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Selector, modelFind } from 'states/model';
import Loading from 'loading';
import Plot from 'components/molecules/plot';
import Series from 'components/organisms/series';
export const Country = () => {
    const { country, state } = useParams();
    const models = useRecoilValue(Selector);
    const model = modelFind(models, country, state);
    if (!model) {
        return React.createElement(Redirect, { to: "/" });
    }
    return (React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
        React.createElement(Plot, { model: model }),
        React.createElement(Series, { model: model })));
};
Country.displayName = 'Country';
export default memo(Country);
