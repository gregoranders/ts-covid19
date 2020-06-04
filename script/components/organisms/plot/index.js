import React, { memo, useState } from 'react';
import { ModelPropTypes } from 'model';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Bar, Line, ResponsiveContainer, Tooltip, Legend, } from 'recharts';
const numberFormatter = (tick) => tick.toLocaleString();
export const Plot = ({ model }) => {
    const [field, setField] = useState('confirmed');
    const [average, setAverage] = useState(5);
    const timeFormatter = (tick) => {
        return new Date(tick).toUTCString().replace(/\s00:.*/, '');
    };
    const plotData = model.values
        .filter((value) => value[field] > 0)
        .map((value) => {
        return {
            value: value[field],
            diff: value.diff[field],
            avrg: value.avrg[average][field],
            timestamp: value.timestamp,
        };
    });
    const timeOffset = 24 * 60 * 60 * 1000 * 1.5;
    const domainLog = ['auto', plotData[plotData.length - 1].value * 1.2];
    const domainDiff = ['auto', plotData[plotData.length - 1].diff * 1.2];
    const domainTime = [
        plotData[0].timestamp - timeOffset,
        plotData[plotData.length - 1].timestamp + timeOffset,
    ];
    const handleTypeChange = (e) => {
        setField(e.target.value);
    };
    const handleAverageChange = (e) => {
        setAverage(parseInt(e.target.value));
    };
    return (React.createElement("div", { className: "plot" },
        React.createElement("div", { className: "actions" },
            React.createElement("div", null),
            React.createElement("label", { htmlFor: "plotType" }, "Type"),
            React.createElement("select", { id: "plotType", onChange: handleTypeChange },
                React.createElement("option", { value: "confirmed" }, "Confirmed"),
                React.createElement("option", { value: "dead" }, "Deaths"),
                React.createElement("option", { value: "recovered" }, "Recovered"),
                React.createElement("option", { value: "active" }, "Active")),
            React.createElement("label", { htmlFor: "plotAvrg" }, "Average"),
            React.createElement("select", { id: "plotAvrg", onChange: handleAverageChange },
                React.createElement("option", { value: "5" }, "5"),
                React.createElement("option", { value: "7" }, "7"),
                React.createElement("option", { value: "14" }, "14"),
                React.createElement("option", { value: "21" }, "21"),
                React.createElement("option", { value: "28" }, "28"))),
        React.createElement(ResponsiveContainer, { aspect: 21 / 9 },
            React.createElement(ComposedChart, { data: plotData, margin: { top: 5, right: 50, left: 50, bottom: 5 } },
                React.createElement(CartesianGrid, { stroke: "#eee", strokeDasharray: "3 3" }),
                React.createElement(XAxis, { type: "number", name: "Date", dataKey: "timestamp", scale: "time", domain: domainTime, minTickGap: 30, tickFormatter: timeFormatter }),
                React.createElement(YAxis, { yAxisId: "log", scale: "log", orientation: "left", domain: domainLog, tickFormatter: numberFormatter }),
                React.createElement(YAxis, { yAxisId: "linear", scale: "linear", orientation: "right", hide: true, tickFormatter: numberFormatter }),
                React.createElement(YAxis, { yAxisId: "diff", scale: "sequential", orientation: "left", domain: domainDiff, mirror: true, tickFormatter: numberFormatter }),
                React.createElement(Line, { name: "Logarithmic", yAxisId: "log", type: "monotone", dataKey: "value", stroke: "#888", dot: false }),
                React.createElement(Line, { name: "Linear", yAxisId: "linear", type: "monotone", dataKey: "value", stroke: "#888", dot: false }),
                React.createElement(Line, { name: `Average (${average} days)`, yAxisId: "diff", type: "monotone", dataKey: "avrg", stroke: "#bbb", strokeDasharray: "5 5", dot: false }),
                React.createElement(Bar, { name: "Daily", barSize: 2, yAxisId: "diff", dataKey: "diff", stroke: "#bbb" }),
                React.createElement(Tooltip, { labelFormatter: (value) => React.createElement("h3", null, timeFormatter(value)), formatter: (value) => React.createElement(React.Fragment, null, numberFormatter(value)) }),
                React.createElement(Legend, null)))));
};
Plot.displayName = 'Plot';
Plot.propTypes = {
    model: ModelPropTypes,
};
export default memo(Plot);
