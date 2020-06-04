import React, { memo } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ModelsSelector } from 'states/models';
import { modelFind, nameFormatter } from 'model';
import { default as Latest } from 'components/organisms/latest';
import { default as Plot } from 'components/organisms/plot';
import { default as Series } from 'components/organisms/series';
export const DetailPage = () => {
    const { country, state } = useParams();
    const models = useRecoilValue(ModelsSelector);
    const model = modelFind(models, country, state);
    if (!model) {
        return React.createElement(Redirect, { to: "/" });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Link, { to: "/" }, "World"),
        " - ",
        nameFormatter(model),
        React.createElement(Latest, { model: model }),
        React.createElement(Plot, { model: model }),
        React.createElement(Series, { model: model })));
};
DetailPage.displayName = 'DetailPage';
export default memo(DetailPage);
