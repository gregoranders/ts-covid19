import w,{memo as G}from"react";import{number as P}from"prop-types";export const Footer=({year:e})=>w.createElement("footer",null,"© ",e," by Gregor Anders");Footer.displayName="Footer",Footer.defaultProps={year:(new Date).getUTCFullYear()},Footer.propTypes={year:P.isRequired};export default G(Footer);