import e,{memo as t,useEffect as Y,useState as s}from"react";import{number as Z}from"prop-types";export const importWithDelay=(e,t=1e3)=>new Promise((o,r)=>{import(e).then(e=>{setTimeout(()=>{o(e)},t)}).catch(r)});export const Loading=({timeout:t})=>{const[o,r]=s(0),[a,n]=s(1),i=()=>{-1===a&&1===o&&n(1),1===a&&4===o&&n(-1),r(o+a)};Y(()=>{const e=setInterval(i,t);return()=>{clearInterval(e)}});let m="";for(let e=0;e<o;e++)m+="&middot;";return e.createElement("div",{className:"centered loading"},e.createElement("div",null,e.createElement("h1",{className:"dots",dangerouslySetInnerHTML:{__html:m}})))};Loading.displayName="Loading",Loading.defaultProps={timeout:300},Loading.propTypes={timeout:Z.isRequired};export default t(Loading);