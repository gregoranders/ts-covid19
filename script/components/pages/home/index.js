import e,{memo as o}from"react";import{useRecoilValue as W}from"recoil";import{timeFormatter as I}from"model";import ee from"components/organisms/countries";import Q from"components/organisms/latest";import Y from"components/organisms/plot";import{AsyncSelector as J,AggregateSelector as te}from"states/models";export const HomePage=()=>{const t=W(J),m=W(te);return e.createElement(e.Fragment,null,e.createElement("div",{className:"header"},e.createElement("h1",null,I(m.values[m.values.length-1].timestamp)),e.createElement(Q,{model:m})),e.createElement(Y,{model:m}),e.createElement(ee,{models:t}))};HomePage.displayName="HomePage";export default o(HomePage);