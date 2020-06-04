import React, { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { AggregateSelector, ModelsSelector } from 'states/models';
import { timeFormatter } from 'model';
import { default as Countries } from 'components/organisms/countries';
import { default as Latest } from 'components/organisms/latest';
import { default as Plot } from 'components/organisms/plot';
export const HomePage = () => {
    const models = useRecoilValue(ModelsSelector);
    const model = useRecoilValue(AggregateSelector);
    return (React.createElement(React.Fragment, null,
        timeFormatter(model.values[model.values.length - 1].timestamp),
        React.createElement(Latest, { model: model }),
        React.createElement(Plot, { model: model }),
        React.createElement(Countries, { models: models })));
};
HomePage.displayName = 'HomePage';
export default memo(HomePage);
