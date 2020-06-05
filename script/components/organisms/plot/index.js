import e,{memo as o}from"react";import{useRecoilState as K}from"recoil";import{ModelPropTypes as N}from"model";import{ComposedChart as P,XAxis as w,YAxis as z,CartesianGrid as G,Bar as U,Line as $,ResponsiveContainer as j,Tooltip as B,Legend as J}from"recharts";import{default as M}from"states/avrg";import{default as Q}from"states/type";const S=e=>e.toLocaleString();export const Plot=({model:t})=>{const[a,r]=K(Q),[l,o]=K(M),n=e=>new Date(e).toUTCString().replace(/\s00:.*/,""),m=t.values.filter(e=>e[a]>0).map(e=>({value:e[a],diff:e.diff[a],avrg:e.avrg[l][a],timestamp:e.timestamp})),i=["auto",1.2*m[m.length-1].value],c=["auto",1.2*m[m.length-1].diff],s=[m[0].timestamp-1296e5,m[m.length-1].timestamp+1296e5];return e.createElement("div",{className:"plot"},e.createElement("div",{className:"actions"},e.createElement("div",null),e.createElement("label",{htmlFor:"plotType"},"Type"),e.createElement("select",{id:"plotType",onChange:e=>{r(e.target.value)}},e.createElement("option",{value:"confirmed"},"Confirmed"),e.createElement("option",{value:"dead"},"Deaths"),e.createElement("option",{value:"recovered"},"Recovered"),e.createElement("option",{value:"active"},"Active")),e.createElement("label",{htmlFor:"plotAvrg"},"Average"),e.createElement("select",{id:"plotAvrg",onChange:e=>{o(parseInt(e.target.value))}},e.createElement("option",{value:"5"},"5"),e.createElement("option",{value:"7"},"7"),e.createElement("option",{value:"14"},"14"),e.createElement("option",{value:"21"},"21"),e.createElement("option",{value:"28"},"28"))),e.createElement(j,{aspect:21/9},e.createElement(P,{data:m,margin:{top:5,right:50,left:50,bottom:5}},e.createElement(G,{stroke:"#eee",strokeDasharray:"3 3"}),e.createElement(w,{type:"number",name:"Date",dataKey:"timestamp",scale:"time",domain:s,minTickGap:30,tickFormatter:n}),e.createElement(z,{yAxisId:"log",scale:"log",orientation:"left",domain:i,tickFormatter:S}),e.createElement(z,{yAxisId:"linear",scale:"linear",orientation:"right",hide:!0,tickFormatter:S}),e.createElement(z,{yAxisId:"diff",scale:"sequential",orientation:"left",domain:c,mirror:!0,tickFormatter:S}),e.createElement($,{name:"Logarithmic",yAxisId:"log",type:"monotone",dataKey:"value",stroke:"#888",dot:!1}),e.createElement($,{name:"Linear",yAxisId:"linear",type:"monotone",dataKey:"value",stroke:"#888",dot:!1}),e.createElement($,{name:`Average (${l} days)`,yAxisId:"diff",type:"monotone",dataKey:"avrg",stroke:"#bbb",strokeDasharray:"5 5",dot:!1}),e.createElement(U,{name:"Daily",barSize:2,yAxisId:"diff",dataKey:"diff",stroke:"#bbb"}),e.createElement(B,{labelFormatter:t=>e.createElement("h3",null,n(t)),formatter:t=>e.createElement(e.Fragment,null,S(t))}),e.createElement(J,null))))};Plot.displayName="Plot",Plot.propTypes={model:N};export default o(Plot);