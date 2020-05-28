import e,{memo as t,useState as s}from"react";import{any as d}from"prop-types";import{ComposedChart as E,XAxis as v,YAxis as f,CartesianGrid as y,Bar as g,Line as h,ResponsiveContainer as k,Tooltip as b,Legend as x}from"recharts";const A=e=>e.toLocaleString();export const Plot=({model:t})=>{const[a,r]=s("confirmed"),[o,n]=s(5),l=e=>new Date(e).toUTCString().replace(/\s00:.*/,""),m=t.values.filter(e=>e[a]>0).map(e=>({value:e[a],diff:e.diff[a],avrg:e.avrg[o][a],timestamp:e.timestamp})),i=["auto",1.2*m[m.length-1].value],c=["auto",1.2*m[m.length-1].diff],d=[m[0].timestamp-1296e5,m[m.length-1].timestamp+1296e5];return e.createElement("div",{className:"plot"},e.createElement("div",{className:"actions"},e.createElement("div",null),e.createElement("select",{onChange:e=>{r(e.target.value)}},e.createElement("option",{value:"confirmed"},"Confirmed"),e.createElement("option",{value:"dead"},"Deaths"),e.createElement("option",{value:"recovered"},"Recovered"),e.createElement("option",{value:"active"},"Active")),e.createElement("select",{onChange:e=>{n(parseInt(e.target.value))}},e.createElement("option",{value:"5"},"5"),e.createElement("option",{value:"7"},"7"),e.createElement("option",{value:"14"},"14"),e.createElement("option",{value:"21"},"21"),e.createElement("option",{value:"28"},"28"))),e.createElement(k,{aspect:21/9},e.createElement(E,{data:m,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(y,{stroke:"#eee",strokeDasharray:"3 3"}),e.createElement(v,{type:"number",name:"Date",dataKey:"timestamp",scale:"time",domain:d,minTickGap:30,tickFormatter:l}),e.createElement(f,{yAxisId:"log",scale:"log",orientation:"left",domain:i,tickFormatter:A}),e.createElement(f,{yAxisId:"linear",scale:"linear",orientation:"right",hide:!0,tickFormatter:A}),e.createElement(f,{yAxisId:"diff",scale:"sequential",orientation:"left",domain:c,mirror:!0,tickFormatter:A}),e.createElement(h,{name:"Logarithmic",yAxisId:"log",type:"monotone",dataKey:"value",stroke:"#888",dot:!1}),e.createElement(h,{name:"Linear",yAxisId:"linear",type:"monotone",dataKey:"value",stroke:"#888",dot:!1}),e.createElement(h,{name:`Average (${o} days)`,yAxisId:"diff",type:"monotone",dataKey:"avrg",stroke:"#bbb",strokeDasharray:"5 5",dot:!1}),e.createElement(g,{name:"Daily",barSize:2,yAxisId:"diff",dataKey:"diff",stroke:"#bbb"}),e.createElement(b,{labelFormatter:t=>e.createElement("h3",null,l(t)),formatter:t=>e.createElement(e.Fragment,null,A(t))}),e.createElement(x,null))))};Plot.displayName="Plot",Plot.propTypes={model:d};export default t(Plot);