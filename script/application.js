import e,{lazy as t,memo as o,StrictMode as n,Suspense as a}from"react";import{HashRouter as m,Redirect as r,Route as p,Switch as l}from"react-router-dom";import{RecoilRoot as c}from"recoil";import{string as s}from"prop-types";import{default as i}from"loading";const u=t(()=>import("components/layouts/default")),E=t(()=>import("components/pages/about")),f=t(()=>import("components/pages/detail")),d=t(()=>import("components/pages/font")),g=t(()=>import("components/pages/home")),h=({basename:t})=>e.createElement(n,null,e.createElement(a,{fallback:e.createElement(i,null)},e.createElement(c,null,e.createElement(m,null,e.createElement(u,null,e.createElement(l,null,e.createElement(p,{path:"/",exact:!0,component:g}),e.createElement(p,{path:"/about",component:E}),e.createElement(p,{path:"/font",component:d}),e.createElement(p,{path:"/:country/:state",component:f}),e.createElement(p,{path:"/:country",component:f}),e.createElement(r,{to:"/"})))))));h.displayName="Application",h.propTypes={basename:s.isRequired};export default o(h);