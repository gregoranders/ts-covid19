import e,{memo as o}from"react";import{number as T}from"prop-types";export const Footer=({year:o})=>e.createElement("footer",null,"© ",o);Footer.displayName="Footer",Footer.defaultProps={year:(new Date).getUTCFullYear()},Footer.propTypes={year:T.isRequired};export default o(Footer);