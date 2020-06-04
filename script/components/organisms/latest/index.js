import React, { memo } from 'react';
import { ModelPropTypes, numberFormatter } from 'model';
export const Latest = ({ model }) => {
    const latest = model.values[model.values.length - 1];
    return (React.createElement("table", { className: "latest" },
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", null, "Population"),
                React.createElement("th", null, "Confirmed"),
                React.createElement("th", null, "Dead"),
                React.createElement("th", null, "Recovered"),
                React.createElement("th", null, "Active"))),
        React.createElement("tbody", null,
            React.createElement("tr", null,
                React.createElement("td", null, numberFormatter(model.population)),
                React.createElement("td", null, numberFormatter(latest.confirmed)),
                React.createElement("td", null, numberFormatter(latest.dead)),
                React.createElement("td", null, numberFormatter(latest.recovered)),
                React.createElement("td", null, numberFormatter(latest.active))),
            React.createElement("tr", null,
                React.createElement("td", null, "Daily"),
                React.createElement("td", null, numberFormatter(latest.diff.confirmed)),
                React.createElement("td", null, numberFormatter(latest.diff.dead)),
                React.createElement("td", null, numberFormatter(latest.diff.recovered)),
                React.createElement("td", null, numberFormatter(latest.diff.active)))),
        React.createElement("tfoot", null,
            React.createElement("tr", null,
                React.createElement("th", { colSpan: 5 })))));
};
Latest.displayName = 'Latest';
Latest.propTypes = {
    model: ModelPropTypes,
};
export default memo(Latest);
