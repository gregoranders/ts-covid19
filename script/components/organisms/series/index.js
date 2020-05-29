import e,{memo as t}from"react";import{numberFormatter as d,timeFormatter as I}from"states/model";import{ModelPropTypes as E}from"states/model/model";export const Series=({model:t})=>e.createElement("table",{className:"series"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null),e.createElement("th",{colSpan:3},"Confirmed"),e.createElement("th",{colSpan:3},"Dead"),e.createElement("th",{colSpan:3},"Recovered"),e.createElement("th",{colSpan:3},"Active")),e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null),e.createElement("th",null,"Total"),e.createElement("th",null,"/100k"),e.createElement("th",null,"Daily"),e.createElement("th",null,"Total"),e.createElement("th",null,"/100k"),e.createElement("th",null,"Daily"),e.createElement("th",null,"Total"),e.createElement("th",null,"/100k"),e.createElement("th",null,"Daily"),e.createElement("th",null,"Total"),e.createElement("th",null,"/100k"),e.createElement("th",null,"Daily"))),e.createElement("tbody",null,[...t.values].reverse().map((t,l)=>e.createElement("tr",{key:l},e.createElement("td",null),e.createElement("td",null,I(t.timestamp)),e.createElement("td",null,d(t.confirmed)),e.createElement("td",null,d(t.ratio.confirmed)),e.createElement("td",null,d(t.diff.confirmed)),e.createElement("td",null,d(t.dead)),e.createElement("td",null,d(t.ratio.dead)),e.createElement("td",null,d(t.diff.dead)),e.createElement("td",null,d(t.recovered)),e.createElement("td",null,d(t.ratio.recovered)),e.createElement("td",null,d(t.diff.recovered)),e.createElement("td",null,d(t.active)),e.createElement("td",null,d(t.ratio.active)),e.createElement("td",null,d(t.diff.active))))),e.createElement("tfoot",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null),e.createElement("th",{colSpan:3},"Confirmed"),e.createElement("th",{colSpan:3},"Dead"),e.createElement("th",{colSpan:3},"Recovered"),e.createElement("th",{colSpan:3},"Active")),e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null),e.createElement("th",null,"Total"),e.createElement("th",null,"/100k"),e.createElement("th",null,"Daily"),e.createElement("th",null,"Total"),e.createElement("th",null,"/100k"),e.createElement("th",null,"Daily"),e.createElement("th",null,"Total"),e.createElement("th",null,"/100k"),e.createElement("th",null,"Daily"),e.createElement("th",null,"Total"),e.createElement("th",null,"/100k"),e.createElement("th",null,"Daily"))));Series.displayName="Series",Series.propTypes={model:E};export default t(Series);