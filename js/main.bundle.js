(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(16),s="_526XW6oDzpRVVPr8y45K_",o=a(18),i=a(8),c=a(4),m=a(12),d=a(27),u=a(6),p=a(29),h=a(30),E=a(31);const y=[],f=Object(u.b)(),v=Object(m.c)({model:(e=y,t)=>{switch(t.type){case"MODEL_REQUEST":return[];case"MODEL_RESPONSE":return t.payload;default:return e}},router:Object(o.b)(f)});var g="_2qg7IMpNfTZ-PI1-DsLvlj",C=a(1),S=a.n(C),D="_3KxrVgLSYRSAbdatw-1rt9",R="_V96JD3PEs1VXevJsy4V5",_="_2NyXajw3HWRS22N9-62SV0",b="_3calS0aV2eqbdFM551AfnX",O="WDuQNtbOBUtMUFonGoy_z",N=a(13);const x=({to:e,children:t})=>l.a.createElement(N.b,{className:b,activeClassName:O,to:e},t);x.displayName="NavLink",x.propTypes={to:S.a.string.isRequired,children:S.a.string.isRequired};const T=()=>l.a.createElement("nav",{className:_},l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement(x,{to:"/"},"ts-covid19")),l.a.createElement("li",null,l.a.createElement(x,{to:"/Germany"},"Germany")),l.a.createElement("li",null,l.a.createElement(x,{to:"/US"},"US")),l.a.createElement("li",null,l.a.createElement(x,{to:"/Poland"},"Poland")),l.a.createElement("li",null,l.a.createElement(x,{to:"/Russia"},"Russia")),l.a.createElement("li",null,l.a.createElement(x,{to:"/United%20Kingdom"},"United Kingdom")),l.a.createElement("li",null,l.a.createElement(x,{to:"/China/Hubei"},"China - Hubei")),l.a.createElement("li",null,l.a.createElement(x,{to:"/Korea, South"},"Korea - South"))));T.displayName="Navigation";const M=()=>l.a.createElement("header",{className:R},l.a.createElement(T,null));M.displayName="Header";var A="_1PDbAeZ0pxuBdfDNhaQjo7";const L=e=>l.a.createElement("footer",{className:A},l.a.createElement("p",null,"© ",e.year," by ",e.author));L.displayName="Footer",L.propTypes={author:S.a.string,year:S.a.number},L.defaultProps={author:"Gregor Anders",year:(new Date).getFullYear()};const q=({children:e})=>l.a.createElement("div",{className:D},l.a.createElement(M,null),l.a.createElement("section",null,e),l.a.createElement(L,null));q.displayName="DefaultTemplate",q.defaultProps={children:l.a.createElement("h1",null,"Missing Template Content")},q.propTypes={children:S.a.element.isRequired};const k=S.a.shape({confirmed:S.a.number.isRequired,deaths:S.a.number.isRequired,recovered:S.a.number.isRequired,timestamp:S.a.number.isRequired}).isRequired,w=S.a.shape({country:S.a.string.isRequired,state:S.a.string.isRequired,lat:S.a.number.isRequired,lon:S.a.number.isRequired,values:S.a.arrayOf(k).isRequired}).isRequired;var F=a(15);const U={undefined:!1,fieldSeparator:",",lineSeparator:"\n",quote:'"'},j=(e,t)=>{if(!t.undefined||e.length)return e},P=(e,t,a)=>{t.push(e),a.field++,a.fieldOffset=-1,a.appendField=!1},V=(e,t,a)=>{t.push(e),a.field=0,a.line++,a.lineOffset=-1,a.appendRow=!1},I=(e,t=U)=>new Promise(a=>{((e,t=U)=>{const a=Object.assign({},U,t),r={field:0,fieldOffset:0,line:0,lineOffset:0,quoted:!1,appendCell:!1,appendField:!1,appendRow:!1};return new Promise((t,l)=>{if(e.length){const n=[];let s=[],o="";for(let t=0;t<e.length;t++)r.appendCell=!0,e[t]===a.quote?t&&"\\"!==e[t-1]?(!o.length||r.quoted?r.quoted=!r.quoted:l(Error(`Invalid CSV text at offset ${r.line}:${r.lineOffset}`)),r.appendCell=!1):o=o.substr(0,o.length-1):e[t]===a.fieldSeparator?r.quoted||(r.appendCell=!1,r.appendField=!0):e[t]===a.lineSeparator&&(r.quoted||(r.appendCell=!1,r.appendField=!0,r.appendRow=!0)),r.appendCell&&(o+=e[t]),r.appendField&&(P(j(o,a),s,r),o=""),r.appendRow&&(V(s,n,r),s=[]),r.lineOffset++,r.fieldOffset++;s.length&&(P(j(o,a),s,r),V(s,n,r)),t(n)}else l(Error("Empty CSV text"))})})(e,t).then(e=>{const t=e[0].filter(e=>"string"==typeof e);a(e.filter((e,t)=>t>0).map(e=>{const a={};return t.forEach((t,r)=>{a[t]=e[r]}),a}))})});class G{map(e){return e.map(e=>this._map(e)).sort((e,t)=>{const a=e.country.localeCompare(t.country);return 0===a?e.state.localeCompare(t.state):a})}_map(e){const t={values:[]};return Object.keys(e).forEach(a=>{if(a.match(/State/))t.state=e[a];else if(a.match(/Country/))t.country=e[a];else if(a.match(/Lat/))t.lat=parseFloat(e[a]);else if(a.match(/Long/))t.lon=parseFloat(e[a]);else{const r=parseInt(e[a],10),l=new Date(a),n=Date.UTC(l.getFullYear(),l.getMonth(),l.getDate());t.values.push({timestamp:n,value:r})}}),t.values.sort((e,t)=>e.timestamp-t.timestamp),Object.freeze(t)}}var H;!function(e){e.CONFIRMED="confirmed",e.DEATHS="deaths",e.RECOVERED="recovered"}(H||(H={}));class Y{constructor(e=new G){this._mapper=e}collect(){return Object(F.a)(this,void 0,void 0,(function*(){const e=yield this._fetchModel(H.CONFIRMED),t=yield this._fetchModel(H.DEATHS),a=yield this._fetchModel(H.RECOVERED);return this._merge(e,t,a)}))}_find(e,t){var a;return(null===(a=t.find(t=>t.timestamp===e))||void 0===a?void 0:a.value)||0}_merge(e,t,a){return Object(F.a)(this,void 0,void 0,(function*(){return new Promise(r=>{r(e.map(e=>{const r=t.find(t=>t.country===e.country&&t.state===e.state),l=a.find(t=>t.country===e.country&&t.state===e.state),n=e.values.map(e=>({confirmed:e.value,deaths:this._find(e.timestamp,r?r.values:[]),recovered:this._find(e.timestamp,l?l.values:[]),timestamp:e.timestamp}));return{country:e.country,lat:e.lat,lon:e.lon,state:e.state,values:n}}))})}))}_fetchModel(e){return Object(F.a)(this,void 0,void 0,(function*(){return this._fetch(e).then(e=>I(e)).then(e=>this._mapper.map(e))}))}_fetch(e){return Object(F.a)(this,void 0,void 0,(function*(){return fetch(this._fetchUrl(e),{headers:this._fetchHeaders(),method:"GET"}).then(e=>e.text())}))}_fetchHeaders(){return{"Accept-Encoding":"gzip, deflate, br"}}_fetchUrl(e){return`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_${e}_global.csv`}}class B{constructor(e){this._model=e}get model(){return this._model}find(e,t){const a=this._model.filter(t=>t.country===e);return a&&t?a.filter(e=>e.state===t):a}name(e){return e.state&&e.state.length?`${e.country} - ${e.state}`:""+e.country}aggregated(){const e=[];return this._model.map(e=>e.values).map(t=>{t.forEach(t=>{const a=e.find(e=>e.timestamp===t.timestamp);a?(a.confirmed+=t.confirmed,a.deaths+=t.deaths,a.recovered+=t.recovered):e.push({confirmed:t.confirmed,deaths:t.deaths,recovered:t.recovered,timestamp:t.timestamp})})}),e}}const $=e=>((new Y).collect().then(t=>{e({type:"MODEL_RESPONSE",payload:t})}).catch(e=>{console.error(e)}),e({type:"MODEL_REQUEST"}));var Q="_2QTZVlNiUPLwkdRTh81lJ3";const J=(e,t,a,r=5)=>{const l=e.values.find(e=>e.timestamp===a);if(l&&l[t]){const n=((e,t,a,r=5)=>{const l=e.values.findIndex((e,t)=>{if(e.timestamp===a)return t});if(l>=0){let a=0;for(let n=l-r;n<l;n++)a+=e.values[n][t];return a/r}return 0})(e,t,a,r);return l[t]-n}return 0},K=({model:e})=>{const t=e.values.map(t=>l.a.createElement("tr",{key:t.timestamp},l.a.createElement("td",null),l.a.createElement("td",null,new Date(t.timestamp).toUTCString().replace(/\s00:00:00\sGMT$/,"")),l.a.createElement("td",null,t.confirmed.toLocaleString()),l.a.createElement("td",null,l.a.createElement("span",null,J(e,"confirmed",t.timestamp,1).toLocaleString())),l.a.createElement("td",null,t.deaths.toLocaleString()),l.a.createElement("td",null,l.a.createElement("span",null,J(e,"deaths",t.timestamp,1).toLocaleString())),l.a.createElement("td",null,t.recovered.toLocaleString()),l.a.createElement("td",null,l.a.createElement("span",null,J(e,"recovered",t.timestamp,1).toLocaleString())),l.a.createElement("td",null,(t.confirmed-t.deaths-t.recovered).toLocaleString())));return l.a.createElement("table",{className:Q},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Day"),l.a.createElement("th",null,"Confirmed"),l.a.createElement("th",null),l.a.createElement("th",null,"Deaths"),l.a.createElement("th",null),l.a.createElement("th",null,"Recovered"),l.a.createElement("th",null),l.a.createElement("th",null,"Active"),l.a.createElement("th",null))),l.a.createElement("tbody",null,t))};K.displayName="SeriesModelTable",K.propTypes={model:w};var z=a(10),X=a.n(z),W="_3mfPF7U1tL8shoQo_Ff8F9";class Z extends r.Component{constructor(){super(...arguments),this.state={days:7}}average(e,t,a,r=14){const l=e.findIndex(e=>e.timestamp===t);if(l>r){let t=0,n=0;for(let s=l-r;s<=l;s++)t+=e[s][a],n+=1;if(n)return Math.round(t/n)}return 0}back(e,t=14){const a=[];for(let r=e.length-1;r>t;r--){const l=e[r].timestamp,n={confirmed:this.average(e,l,"confirmed",t),deaths:this.average(e,l,"deaths",t),recovered:this.average(e,l,"recovered",t),timestamp:l};a.push(n)}return a.sort((e,t)=>e.timestamp-t.timestamp),a}diff(e){const t=[];for(let a=e.length-1;a>0;a--){const r=e[a].timestamp,l={confirmed:Math.abs(e[a].confirmed-e[a-1].confirmed),deaths:Math.abs(e[a].deaths-e[a-1].deaths),recovered:Math.abs(e[a].recovered-e[a-1].recovered),timestamp:r};t.push(l)}return t.sort((e,t)=>e.timestamp-t.timestamp),t}render(){const e=new Date(this.props.model.values[this.props.model.values.length-1].timestamp),t=this.props.model.values.map(e=>e.confirmed),a=this.props.model.values.map(e=>e.deaths),r=this.props.model.values.map(e=>e.recovered),n=t.map((e,t)=>e-a[t]-r[t]),s=this.props.model.values.map(e=>e.timestamp),o=this.back(this.props.model.values,this.state.days),i=o.map(e=>e.confirmed),c=o.map(e=>e.deaths),m=o.map(e=>e.recovered),d=i.map((e,t)=>e-c[t]-m[t]),u=o.map(e=>e.timestamp),p=this.diff(this.props.model.values),h=p.map(e=>e.confirmed),E=p.map(e=>e.timestamp),y=this.back(p,this.state.days),f=y.map(e=>e.confirmed),v=y.map(e=>e.timestamp);return l.a.createElement("div",{className:W},l.a.createElement("div",null,l.a.createElement("input",{type:"number",min:1,max:30,value:this.state.days,onChange:e=>{this.setState(Object.assign(Object.assign({},this.state),{days:parseInt(e.target.value)}))}}),l.a.createElement("label",null," days average")),l.a.createElement("div",null,l.a.createElement(X.a,{data:[{mode:"lines+markers",type:"scatter",y:t,x:s,name:"Confirmed",line:{color:"rgb(0, 255, 255)"}},{mode:"lines+markers",type:"scatter",y:a,x:s,name:"Deaths",line:{color:"rgb(255, 0, 0)"}},{mode:"lines+markers",type:"scatter",y:r,x:s,name:"Recovered",line:{color:"rgb(0, 255, 0)"}},{mode:"lines+markers",type:"scatter",y:n,x:s,name:"Active",line:{color:"rgb(0, 0, 255)"}}],layout:{title:{text:"Linear "+e.toUTCString().replace(/ 00:00:00 GMT/,"")},yaxis:{type:"linear",autorange:!0,title:"Cases"},xaxis:{type:"date",autorange:!0,title:"Date"}}}),l.a.createElement(X.a,{data:[{mode:"lines+markers",type:"scatter",y:t,x:s,name:"Confirmed",line:{color:"rgb(0, 255, 255)"}},{mode:"lines+markers",type:"scatter",y:a,x:s,name:"Deaths",line:{color:"rgb(255, 0, 0)"}},{mode:"lines+markers",type:"scatter",y:r,x:s,name:"Recovered",line:{color:"rgb(0, 255, 0)"}},{mode:"lines+markers",type:"scatter",y:n,x:s,name:"Active",line:{color:"rgb(0, 0, 255)"}}],layout:{title:{text:"Logarithmic "+e.toUTCString().replace(/ 00:00:00 GMT/,"")},yaxis:{type:"log",autorange:!0,title:"Cases"},xaxis:{type:"date",autorange:!0,title:"Date"}}}),l.a.createElement(X.a,{data:[{mode:"lines+markers",type:"scatter",y:i,x:u,name:"Confirmed",line:{color:"rgb(0, 0, 255)"}},{mode:"lines+markers",type:"scatter",y:c,x:u,name:"Deaths",line:{color:"rgb(255, 0, 0)"}},{mode:"lines+markers",type:"scatter",y:m,x:u,name:"Recovered",line:{color:"rgb(0, 255, 0)"}},{mode:"lines+markers",type:"scatter",y:d,x:u,name:"Active",line:{color:"rgb(0, 255, 255)"}}],layout:{title:{text:`Logarithmic (${this.state.days} days average) `+e.toUTCString().replace(/ 00:00:00 GMT/,"")},yaxis:{type:"log",autorange:!0,title:"Cases"},xaxis:{type:"date",autorange:!0,title:"Date"}}})),l.a.createElement("div",null,l.a.createElement(X.a,{data:[{mode:"lines+markers",type:"scatter",y:h,x:E,name:"Confirmed",line:{color:"rgb(0, 0, 255)"}}],layout:{title:{text:"Linear "+e.toUTCString().replace(/ 00:00:00 GMT/,"")},yaxis:{type:"linear",autorange:!0,title:"Cases"},xaxis:{type:"date",autorange:!0,title:"Date"}}}),l.a.createElement(X.a,{data:[{mode:"lines+markers",type:"scatter",y:h,x:E,name:"Confirmed",line:{color:"rgb(0, 0, 255)"}}],layout:{title:{text:"Logarithmic "+e.toUTCString().replace(/ 00:00:00 GMT/,"")},yaxis:{type:"log",autorange:!0,title:"Cases"},xaxis:{type:"date",autorange:!0,title:"Date"}}}),l.a.createElement(X.a,{data:[{mode:"lines+markers",type:"scatter",y:f,x:v,name:`Confirmed ${this.state.days} days average`,line:{color:"rgb(0, 0, 255)"}},{mode:"gauge+number+delta",type:"bar",y:h,x:E,name:"Confirmed",line:{color:"rgb(0, 0, 255)"}}],layout:{title:{text:`Logarithmic (${this.state.days} days average) `+e.toUTCString().replace(/ 00:00:00 GMT/,"")},yaxis:{type:"log",autorange:!0,title:"Cases"},xaxis:{type:"date",autorange:!0,title:"Date"}}})))}}Z.displayName="ModelDetail",Z.propTypes={model:w};var ee=Z;const te=Object(i.c)(e=>({model:e.model}),e=>({update:()=>$(e)}));class ae extends r.PureComponent{componentDidMount(){this.props.model&&this.props.model.length||this.props.update()}render(){const e=this.props.match.params.country,t=this.props.match.params.state;if(!this.props.model||!this.props.model.length)return l.a.createElement("h1",null,"Loading...");const a=new B(this.props.model),r=a.find(e,t);return r&&r.length?l.a.createElement(q,null,l.a.createElement("div",{className:g},l.a.createElement("h1",null,a.name(r[0])),l.a.createElement(ee,{model:r[0]}),l.a.createElement(K,{model:r[0]}))):l.a.createElement(c.a,{to:"/"})}}ae.displayName="DetailPageComponent";const re=te(ae);var le="_3yT6nn0dWAHek2N6SF5QXD",ne="_1fFqngKg8kYGgy2yCAGxGf",se="F-JY79vf21aeTIJ67AnMR";const oe=(e,t,a,r=5)=>{const l=e.values.find(e=>e.timestamp===a);if(l&&l[t]){const n=((e,t,a,r=5)=>{const l=e.values.findIndex((e,t)=>{if(e.timestamp===a)return t});if(l>=0){let a=0;for(let n=l-r;n<l;n++)a+=e.values[n][t];return a/r}return 0})(e,t,a,r);return l[t]-n}return 0},ie=({index:e,model:t})=>{const a=t.values[t.values.length-1],r=a.timestamp;let n=t.country,s="/"+n;return t.state&&t.state.length&&(n+=" - "+t.state,s+="/"+t.state),l.a.createElement("tr",{key:e,className:se},l.a.createElement("td",null,e+1,"."),l.a.createElement("td",null,l.a.createElement(N.a,{to:s},n)),l.a.createElement("td",null,a.confirmed.toLocaleString()),l.a.createElement("td",null,l.a.createElement("span",null,oe(t,"confirmed",r,1).toLocaleString())),l.a.createElement("td",null,a.deaths.toLocaleString()),l.a.createElement("td",null,l.a.createElement("span",null,oe(t,"deaths",r,1).toLocaleString())),l.a.createElement("td",null,a.recovered.toLocaleString()),l.a.createElement("td",null,l.a.createElement("span",null,oe(t,"recovered",r,1).toLocaleString())))};ie.displayName="ModelTableRow",ie.propTypes={index:S.a.number.isRequired,model:w};var ce;!function(e){e[e.COUNTRY_ASC=0]="COUNTRY_ASC",e[e.COUNTRY_DESC=1]="COUNTRY_DESC",e[e.CONFIRMED_ASC=2]="CONFIRMED_ASC",e[e.CONFIRMED_DESC=3]="CONFIRMED_DESC",e[e.DEATHS_ASC=4]="DEATHS_ASC",e[e.DEATHS_DESC=5]="DEATHS_DESC",e[e.RECOVERED_ASC=6]="RECOVERED_ASC",e[e.RECOVERED_DESC=7]="RECOVERED_DESC"}(ce||(ce={}));class me extends r.Component{constructor(){super(...arguments),this.state={sort:ce.COUNTRY_ASC}}render(){if(!this.props.model||!this.props.model.length)return l.a.createElement(l.a.Fragment,null);const e=this.props.model.sort((e,t)=>this.sort(e,t)).map((e,t)=>l.a.createElement(ie,{model:e,index:t,key:t}));return l.a.createElement("table",{className:ne},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",{onClick:()=>this.sortByCountry(),title:"Sort"},"Country"),l.a.createElement("th",{onClick:()=>this.sortByConfirmed(),title:"Sort"},"Confirmed"),l.a.createElement("th",null),l.a.createElement("th",{onClick:()=>this.sortByDeaths(),title:"Sort"},"Deaths"),l.a.createElement("th",null),l.a.createElement("th",{onClick:()=>this.sortByRecovered(),title:"Sort"},"Recovered"),l.a.createElement("th",null))),l.a.createElement("tbody",null,e))}sort(e,t){switch(this.state.sort){case ce.CONFIRMED_DESC:return t.values[t.values.length-1].confirmed-e.values[e.values.length-1].confirmed;case ce.CONFIRMED_ASC:return e.values[t.values.length-1].confirmed-t.values[e.values.length-1].confirmed;case ce.DEATHS_DESC:return t.values[t.values.length-1].deaths-e.values[e.values.length-1].deaths;case ce.DEATHS_ASC:return e.values[t.values.length-1].deaths-t.values[e.values.length-1].deaths;case ce.RECOVERED_DESC:return t.values[t.values.length-1].recovered-e.values[e.values.length-1].recovered;case ce.RECOVERED_ASC:return e.values[t.values.length-1].recovered-t.values[e.values.length-1].recovered;case ce.COUNTRY_DESC:return t.country.localeCompare(e.country);case ce.COUNTRY_ASC:return e.country.localeCompare(t.country);default:return 0}}sortByCountry(){this.setState({sort:this.state.sort===ce.COUNTRY_ASC?ce.COUNTRY_DESC:ce.COUNTRY_ASC})}sortByConfirmed(){this.setState({sort:this.state.sort===ce.CONFIRMED_DESC?ce.CONFIRMED_ASC:ce.CONFIRMED_DESC})}sortByDeaths(){this.setState({sort:this.state.sort===ce.DEATHS_DESC?ce.DEATHS_ASC:ce.DEATHS_DESC})}sortByRecovered(){this.setState({sort:this.state.sort===ce.RECOVERED_DESC?ce.RECOVERED_ASC:ce.RECOVERED_DESC})}}me.displayName="ModelTable",me.propTypes={model:S.a.arrayOf(w).isRequired},me.defaultProps={model:[]};var de="NaptN3rjGenMgLZRBODV3";const ue=Object(i.c)(null,e=>({update:()=>$(e)})),pe=({update:e})=>l.a.createElement("span",{className:de,onClick:()=>{e()}},l.a.createElement("i",{className:"fas fa-cloud-download-alt"}));pe.displayName="UpdateButtonComponent",pe.propTypes={update:S.a.func.isRequired};const he=ue(pe);var Ee={current:"_1xioxN0Pei3NuXOpEzQ9yz",plots:"_1VF0on4LsGsy82xP5Pip9F"};const ye=({caption:e,data:t,labels:a,type:r})=>l.a.createElement(X.a,{data:[{mode:"text+lines+markers",type:"scatter",y:t,x:a}],layout:{title:{text:e},yaxis:{type:r,autorange:!0},xaxis:{type:"date",autorange:!0}},config:{responsive:!0}});ye.displayName="Plot",ye.propTypes={caption:S.a.string.isRequired,data:S.a.array.isRequired,labels:S.a.array.isRequired,type:S.a.any.isRequired},ye.defaultProps={type:"linear"};class fe extends r.Component{constructor(){super(...arguments),this.state={confirmed:"log",deaths:"log",recovered:"log"}}render(){if(!this.props.model||!this.props.model.length)return l.a.createElement(l.a.Fragment,null);const e=new B(this.props.model).aggregated(),t=e[e.length-1],a=new Date(t.timestamp),r=e.map(e=>e.confirmed),n=e.map(e=>e.deaths),s=e.map(e=>e.recovered),o=e.map(e=>e.timestamp);return l.a.createElement("div",{className:Ee.current},l.a.createElement("div",null,l.a.createElement("h3",null,a.toUTCString())),l.a.createElement("div",null,l.a.createElement("dl",null,l.a.createElement("dt",null,"Confirmed"),l.a.createElement("dd",null,t.confirmed.toLocaleString()),l.a.createElement("dt",null,"Deaths"),l.a.createElement("dd",null,t.deaths.toLocaleString()),l.a.createElement("dt",null,"Recovered"),l.a.createElement("dd",null,t.recovered.toLocaleString()))),l.a.createElement("div",{className:Ee.plots},l.a.createElement("div",{className:Ee.plot},l.a.createElement(ye,{caption:"Confirmed",data:r,labels:o,type:this.state.confirmed})),l.a.createElement("div",{className:Ee.plot},l.a.createElement(ye,{caption:"Deaths",data:n,labels:o,type:this.state.deaths})),l.a.createElement("div",{className:Ee.plot},l.a.createElement(ye,{caption:"Recovered",data:s,labels:o,type:this.state.recovered}))))}}fe.displayName="ModelCurrent",fe.propTypes={model:S.a.arrayOf(w).isRequired};const ve=Object(i.c)(e=>({model:e.model}),e=>({update:()=>$(e)}));class ge extends r.PureComponent{componentDidMount(){this.props.model&&this.props.model.length||this.props.update()}render(){return l.a.createElement(q,null,l.a.createElement("div",{className:le},l.a.createElement(he,null),l.a.createElement(fe,{model:this.props.model}),l.a.createElement(me,{model:this.props.model})))}}ge.displayName="IndexPageComponent",ge.propTypes={model:S.a.arrayOf(w).isRequired,update:S.a.func.isRequired};const Ce=ve(ge);const Se=()=>l.a.createElement(i.a,{store:Object(m.e)(v,Object(m.d)(Object(m.a)(Object(d.a)(f),Object(h.a)(),E.a,p.logger)))},l.a.createElement(o.a,{history:f},l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"/",exact:!0,component:Ce}),l.a.createElement(c.b,{path:"/:country/:state",component:re}),l.a.createElement(c.b,{path:"/:country",component:re}),l.a.createElement(c.a,{to:"/"}))));Se.displayName="Application";var De=a(24),Re=a(33);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#app");e?(De.b.add(Re.faCloudDownloadAlt),De.a.watch(),e.className=s,Object(n.render)(l.a.createElement(Se,null),e)):console.error(Error("Element with selector '#app' not found"))})}},[[47,1,2]]]);