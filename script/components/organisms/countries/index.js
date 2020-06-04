import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from 'loading';
import { ModelArrayPropTypes, nameFormatter, numberFormatter, urlFormatter, timeFormatter } from 'model';
import Sorter, { Sort } from 'model/sorter';
const sorter = new Sorter();
export const Countries = ({ models }) => {
    const [by, setBy] = useState(Sort.CONFIRMED_DESC);
    sorter.by = by;
    const sort = (sortBy) => {
        if (by === sortBy) {
            if (by % 2 === 0) {
                setBy(sortBy - 1);
            }
            else {
                setBy(sortBy + 1);
            }
        }
        else {
            setBy(sortBy);
        }
    };
    if (!models.length) {
        return React.createElement(Loading, null);
    }
    sorter.idx = models[0].values.length - 1;
    const aggregated = models
        .map((model) => {
        return {
            population: model.population,
            confirmed: model.values[sorter.idx].confirmed,
            dead: model.values[sorter.idx].dead,
            recovered: model.values[sorter.idx].recovered,
            active: model.values[sorter.idx].active,
            diff: {
                confirmed: model.values[sorter.idx].diff.confirmed,
                dead: model.values[sorter.idx].diff.dead,
                recovered: model.values[sorter.idx].diff.recovered,
                active: model.values[sorter.idx].diff.active,
            },
            ratio: {
                confirmed: model.values[sorter.idx].ratio.confirmed,
                dead: model.values[sorter.idx].ratio.dead,
                recovered: model.values[sorter.idx].ratio.recovered,
                active: model.values[sorter.idx].ratio.active,
            },
        };
    })
        .reduce((prev, curr) => {
        return {
            population: prev.population + curr.population,
            confirmed: prev.confirmed + curr.confirmed,
            dead: prev.dead + curr.dead,
            recovered: prev.recovered + curr.recovered,
            active: prev.active + curr.active,
            diff: {
                confirmed: prev.diff.confirmed + curr.diff.confirmed,
                dead: prev.diff.dead + curr.diff.dead,
                recovered: prev.diff.recovered + curr.diff.recovered,
                active: prev.diff.active + curr.diff.active,
            },
            ratio: {
                confirmed: prev.ratio.confirmed + curr.ratio.confirmed,
                dead: prev.ratio.dead + curr.ratio.dead,
                recovered: prev.ratio.recovered + curr.ratio.recovered,
                active: prev.ratio.active + curr.ratio.active,
            },
        };
    });
    const timeDiff = models[0].values[sorter.idx].timestamp - models[0].values[0].timestamp;
    const day = timeDiff / (24 * 60 * 60 * 1000);
    return (React.createElement("table", null,
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", null),
                React.createElement("th", null, timeFormatter(models[0].values[sorter.idx].timestamp)),
                React.createElement("th", null),
                React.createElement("th", { colSpan: 3 }, "Confirmed"),
                React.createElement("th", { colSpan: 3 }, "Dead"),
                React.createElement("th", { colSpan: 3 }, "Recovered"),
                React.createElement("th", { colSpan: 3 }, "Active")),
            React.createElement("tr", null,
                React.createElement("th", null),
                React.createElement("th", { onClick: () => sort(Sort.NAME_ASC) }, "Country/Region"),
                React.createElement("th", { onClick: () => sort(Sort.POPULATION_DESC) }, "Population"),
                React.createElement("th", { onClick: () => sort(Sort.CONFIRMED_DESC) }, "Total"),
                React.createElement("th", { onClick: () => sort(Sort.CONFIRMED_RATIO_DESC) }, "/100k"),
                React.createElement("th", { onClick: () => sort(Sort.CONFIRMED_DIFF_DESC) }, "Daily"),
                React.createElement("th", { onClick: () => sort(Sort.DEAD_DESC) }, "Total"),
                React.createElement("th", { onClick: () => sort(Sort.DEAD_RATIO_DESC) }, "/100k"),
                React.createElement("th", { onClick: () => sort(Sort.DEAD_DIFF_DESC) }, "Daily"),
                React.createElement("th", { onClick: () => sort(Sort.RECOVERED_DESC) }, "Total"),
                React.createElement("th", { onClick: () => sort(Sort.RECOVERED_RATIO_DESC) }, "/100k"),
                React.createElement("th", { onClick: () => sort(Sort.RECOVERED_DIFF_DESC) }, "Daily"),
                React.createElement("th", { onClick: () => sort(Sort.ACTIVE_DESC) }, "Total"),
                React.createElement("th", { onClick: () => sort(Sort.ACTIVE_RATIO_DESC) }, "/100k"),
                React.createElement("th", { onClick: () => sort(Sort.ACTIVE_DIFF_DESC) }, "Daily"))),
        React.createElement("tbody", null, [...models]
            .sort(sorter.sort)
            .slice(0)
            .map((model, index) => {
            const latest = model.values[sorter.idx];
            return (React.createElement("tr", { key: index },
                React.createElement("td", null, index + 1),
                React.createElement("td", null,
                    React.createElement(Link, { to: urlFormatter(model) }, nameFormatter(model))),
                React.createElement("td", null, numberFormatter(model.population)),
                React.createElement("td", null, numberFormatter(latest.confirmed)),
                React.createElement("td", null, numberFormatter(latest.ratio.confirmed)),
                React.createElement("td", null, numberFormatter(latest.diff.confirmed)),
                React.createElement("td", null, numberFormatter(latest.dead)),
                React.createElement("td", null, numberFormatter(latest.ratio.dead)),
                React.createElement("td", null, numberFormatter(latest.diff.dead)),
                React.createElement("td", null, numberFormatter(latest.recovered)),
                React.createElement("td", null, numberFormatter(latest.ratio.recovered)),
                React.createElement("td", null, numberFormatter(latest.diff.recovered)),
                React.createElement("td", null, numberFormatter(latest.active)),
                React.createElement("td", null, numberFormatter(latest.ratio.active)),
                React.createElement("td", null, numberFormatter(latest.diff.active))));
        })),
        React.createElement("tfoot", null,
            React.createElement("tr", null,
                React.createElement("th", null),
                React.createElement("th", null,
                    "Day ",
                    numberFormatter(day + 1)),
                React.createElement("th", null, numberFormatter(aggregated.population)),
                React.createElement("th", null, numberFormatter(aggregated.confirmed)),
                React.createElement("th", null, numberFormatter(aggregated.ratio.confirmed)),
                React.createElement("th", null, numberFormatter(aggregated.diff.confirmed)),
                React.createElement("th", null, numberFormatter(aggregated.dead)),
                React.createElement("th", null, numberFormatter(aggregated.ratio.dead)),
                React.createElement("th", null, numberFormatter(aggregated.diff.dead)),
                React.createElement("th", null, numberFormatter(aggregated.recovered)),
                React.createElement("th", null, numberFormatter(aggregated.ratio.recovered)),
                React.createElement("th", null, numberFormatter(aggregated.diff.recovered)),
                React.createElement("th", null, numberFormatter(aggregated.active)),
                React.createElement("th", null, numberFormatter(aggregated.ratio.active)),
                React.createElement("th", null, numberFormatter(aggregated.diff.active))))));
};
Countries.displayName = 'Countries';
Countries.propTypes = {
    models: ModelArrayPropTypes,
};
export default memo(Countries);
