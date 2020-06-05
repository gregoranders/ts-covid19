import e,{memo as o,useState as C}from"react";import{Link as D}from"react-router-dom";import i from"loading";import{ModelArrayPropTypes as _,nameFormatter as S,numberFormatter as F,urlFormatter as I,timeFormatter as R}from"model";import A,{Sort as T}from"model/sorter";const O=new A;export const Countries=({models:t})=>{const[l,r]=C(T.CONFIRMED_DESC);O.by=l;const a=e=>{r(l===e?l%2==0?e-1:e+1:e)};if(!t.length)return e.createElement(i,null);O.idx=t[0].values.length-1;const n=t.map(e=>({population:e.population,confirmed:e.values[O.idx].confirmed,dead:e.values[O.idx].dead,recovered:e.values[O.idx].recovered,active:e.values[O.idx].active,diff:{confirmed:e.values[O.idx].diff.confirmed,dead:e.values[O.idx].diff.dead,recovered:e.values[O.idx].diff.recovered,active:e.values[O.idx].diff.active},ratio:{confirmed:e.values[O.idx].ratio.confirmed,dead:e.values[O.idx].ratio.dead,recovered:e.values[O.idx].ratio.recovered,active:e.values[O.idx].ratio.active}})).reduce((e,t)=>({population:e.population+t.population,confirmed:e.confirmed+t.confirmed,dead:e.dead+t.dead,recovered:e.recovered+t.recovered,active:e.active+t.active,diff:{confirmed:e.diff.confirmed+t.diff.confirmed,dead:e.diff.dead+t.diff.dead,recovered:e.diff.recovered+t.diff.recovered,active:e.diff.active+t.diff.active},ratio:{confirmed:e.ratio.confirmed+t.ratio.confirmed,dead:e.ratio.dead+t.ratio.dead,recovered:e.ratio.recovered+t.ratio.recovered,active:e.ratio.active+t.ratio.active}})),c=(t[0].values[O.idx].timestamp-t[0].values[0].timestamp)/864e5;return e.createElement("table",{className:"countries"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,R(t[0].values[0].timestamp)," - ",R(t[0].values[O.idx].timestamp)),e.createElement("th",null),e.createElement("th",{colSpan:3},"Confirmed"),e.createElement("th",{colSpan:3},"Dead"),e.createElement("th",{colSpan:3},"Recovered"),e.createElement("th",{colSpan:3},"Active")),e.createElement("tr",null,e.createElement("th",null),e.createElement("th",{onClick:()=>a(T.NAME_ASC)},"Country/Region"),e.createElement("th",{onClick:()=>a(T.POPULATION_DESC)},"Population"),e.createElement("th",{onClick:()=>a(T.CONFIRMED_DESC)},"Total"),e.createElement("th",{onClick:()=>a(T.CONFIRMED_RATIO_DESC)},"/100k"),e.createElement("th",{onClick:()=>a(T.CONFIRMED_DIFF_DESC)},"Daily"),e.createElement("th",{onClick:()=>a(T.DEAD_DESC)},"Total"),e.createElement("th",{onClick:()=>a(T.DEAD_RATIO_DESC)},"/100k"),e.createElement("th",{onClick:()=>a(T.DEAD_DIFF_DESC)},"Daily"),e.createElement("th",{onClick:()=>a(T.RECOVERED_DESC)},"Total"),e.createElement("th",{onClick:()=>a(T.RECOVERED_RATIO_DESC)},"/100k"),e.createElement("th",{onClick:()=>a(T.RECOVERED_DIFF_DESC)},"Daily"),e.createElement("th",{onClick:()=>a(T.ACTIVE_DESC)},"Total"),e.createElement("th",{onClick:()=>a(T.ACTIVE_RATIO_DESC)},"/100k"),e.createElement("th",{onClick:()=>a(T.ACTIVE_DIFF_DESC)},"Daily"))),e.createElement("tbody",null,[...t].sort(O.sort).slice(0).map((t,l)=>{const r=t.values[O.idx];return e.createElement("tr",{key:l},e.createElement("td",null,l+1),e.createElement("td",null,e.createElement(D,{to:I(t)},S(t))),e.createElement("td",null,F(t.population)),e.createElement("td",null,F(r.confirmed)),e.createElement("td",null,F(r.ratio.confirmed)),e.createElement("td",null,F(r.diff.confirmed)),e.createElement("td",null,F(r.dead)),e.createElement("td",null,F(r.ratio.dead)),e.createElement("td",null,F(r.diff.dead)),e.createElement("td",null,F(r.recovered)),e.createElement("td",null,F(r.ratio.recovered)),e.createElement("td",null,F(r.diff.recovered)),e.createElement("td",null,F(r.active)),e.createElement("td",null,F(r.ratio.active)),e.createElement("td",null,F(r.diff.active)))})),e.createElement("tfoot",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,F(c+1)," days [",((c+1)/30).toFixed(1)," months]"),e.createElement("th",null,F(n.population)),e.createElement("th",null,F(n.confirmed)),e.createElement("th",null,F(n.ratio.confirmed)),e.createElement("th",null,F(n.diff.confirmed)),e.createElement("th",null,F(n.dead)),e.createElement("th",null,F(n.ratio.dead)),e.createElement("th",null,F(n.diff.dead)),e.createElement("th",null,F(n.recovered)),e.createElement("th",null,F(n.ratio.recovered)),e.createElement("th",null,F(n.diff.recovered)),e.createElement("th",null,F(n.active)),e.createElement("th",null,F(n.ratio.active)),e.createElement("th",null,F(n.diff.active)))))};Countries.displayName="Countries",Countries.propTypes={models:_};export default o(Countries);