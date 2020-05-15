import React from"react";import PropTypes from"prop-types";import{BrowserRouter,Redirect,Route,Switch}from"react-router-dom";const About=React.lazy(()=>import("components/pages/about")),Home=React.lazy(()=>import("components/pages/home"));export const Routes=({basename})=>React.createElement(BrowserRouter,{basename},React.createElement(Switch,null,React.createElement(Route,{path:"/",exact:!0,component:Home}),React.createElement(Route,{path:"/about",component:About}),React.createElement(Redirect,{to:"/"})));Routes.displayName="Routes",Routes.propTypes={basename:PropTypes.string.isRequired},Routes.defaultProps={basename:"/"};export default Routes;