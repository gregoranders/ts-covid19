import e,{memo as o}from"react";import{useRecoilValue as V}from"recoil";import{ModelsSelector as ee}from"states/models";import{WorldSelector as se}from"states/world";import{default as le}from"components/organisms/countries";import{default as ae}from"components/organisms/latest";import{default as oe}from"components/organisms/plot";export const HomePage=()=>{const o=V(ee),t=V(se);return e.createElement(e.Fragment,null,e.createElement(ae,{model:t}),e.createElement(oe,{model:t}),e.createElement(le,{models:o}))};HomePage.displayName="HomePage";export default o(HomePage);