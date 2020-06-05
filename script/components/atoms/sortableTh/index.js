import e,{memo as o}from"react";import b from"clsx";import{FontAwesomeIcon as T}from"@fortawesome/react-fontawesome";import{any as w,bool as S,string as s,element as q,oneOfType as R}from"prop-types";export const SortableTh=({alpha:o,by:r,asc:a,desc:t,sort:s,children:l})=>{const i=r===a?t:a,n=o?"alpha":"numeric",m=r===a||r===t?r===a?`sort-${n}-down`:`sort-${n}-down-alt`:"sort",p=b({sortable:!0,"w3-left-align":o,"w3-right-align":!o});return e.createElement("th",{className:p},l,e.createElement(T,{icon:m,onClick:()=>s(i)}))};SortableTh.displayName="SortableTh",SortableTh.defaultProps={alpha:!1},SortableTh.propTypes={alpha:S,children:R([s,q]).isRequired,by:w.isRequired,asc:w.isRequired,desc:w.isRequired,sort:w.isRequired};export default o(SortableTh);