(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(15),o="_526XW6oDzpRVVPr8y45K_",c=a(18),s=a(8),d=a(4),i=a(11),m=a(27),E=a(6),u=a(29),h=a(30),p=a(31);const C=[],f=Object(E.a)(),R=Object(i.c)({model:(e=C,t)=>{switch(t.type){case"MODEL_REQUEST":return[];case"MODEL_RESPONSE":return t.payload;default:return e}},router:Object(c.b)(f)});var _=a(1),v=a.n(_),S="_3yT6nn0dWAHek2N6SF5QXD",D="_3KxrVgLSYRSAbdatw-1rt9",O="_V96JD3PEs1VXevJsy4V5",A="_2NyXajw3HWRS22N9-62SV0",g="_3calS0aV2eqbdFM551AfnX",T="WDuQNtbOBUtMUFonGoy_z",y=a(12);const I=({to:e,children:t})=>n.a.createElement(y.a,{className:g,activeClassName:T,to:e},t);I.displayName="NavLink",I.propTypes={to:v.a.string.isRequired,children:v.a.string.isRequired};var N="NaptN3rjGenMgLZRBODV3",b="iVnnRdgIpyjErxSYM6z_6",V=a(14);const w={undefined:!1,fieldSeparator:",",lineSeparator:"\n",quote:'"'},M=(e,t)=>{if(!t.undefined||e.length)return e},F=(e,t,a)=>{t.push(e),a.field++,a.fieldOffset=-1,a.appendField=!1},j=(e,t,a)=>{t.push(e),a.field=0,a.line++,a.lineOffset=-1,a.appendRow=!1},H=(e,t=w)=>new Promise(a=>{((e,t=w)=>{const a=Object.assign({},w,t),r={field:0,fieldOffset:0,line:0,lineOffset:0,quoted:!1,appendCell:!1,appendField:!1,appendRow:!1};return new Promise((t,n)=>{if(e.length){const l=[];let o=[],c="";for(let t=0;t<e.length;t++)r.appendCell=!0,e[t]===a.quote?t&&"\\"!==e[t-1]?(!c.length||r.quoted?r.quoted=!r.quoted:n(Error(`Invalid CSV text at offset ${r.line}:${r.lineOffset}`)),r.appendCell=!1):c=c.substr(0,c.length-1):e[t]===a.fieldSeparator?r.quoted||(r.appendCell=!1,r.appendField=!0):e[t]===a.lineSeparator&&(r.quoted||(r.appendCell=!1,r.appendField=!0,r.appendRow=!0)),r.appendCell&&(c+=e[t]),r.appendField&&(F(M(c,a),o,r),c=""),r.appendRow&&(j(o,l,r),o=[]),r.lineOffset++,r.fieldOffset++;o.length&&(F(M(c,a),o,r),j(o,l,r)),t(l)}else n(Error("Empty CSV text"))})})(e,t).then(e=>{const t=e[0].filter(e=>"string"==typeof e);a(e.filter((e,t)=>t>0).map(e=>{const a={};return t.forEach((t,r)=>{a[t]=e[r]}),a}))})});class x{map(e){return e.map(e=>this._map(e)).sort((e,t)=>{const a=e.country.localeCompare(t.country);return 0===a?e.state.localeCompare(t.state):a})}_map(e){const t={values:[]};return Object.keys(e).forEach(a=>{if(a.match(/State/))t.state=e[a];else if(a.match(/Country/))t.country=e[a];else if(a.match(/Lat/))t.lat=parseFloat(e[a]);else if(a.match(/Long/))t.lon=parseFloat(e[a]);else{const r=parseInt(e[a],10),n=new Date(a),l=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate());t.values.push({timestamp:l,value:r})}}),t.values.sort((e,t)=>e.timestamp-t.timestamp),Object.freeze(t)}}var L;!function(e){e.CONFIRMED="confirmed",e.DEATHS="deaths",e.RECOVERED="recovered"}(L||(L={}));class q{constructor(e=new x){this._mapper=e}collect(){return Object(V.a)(this,void 0,void 0,(function*(){const e=yield this._fetchModel(L.CONFIRMED),t=yield this._fetchModel(L.DEATHS),a=yield this._fetchModel(L.RECOVERED);return this._merge(e,t,a)}))}_find(e,t){var a;return(null===(a=t.find(t=>t.timestamp===e))||void 0===a?void 0:a.value)||0}_merge(e,t,a){return Object(V.a)(this,void 0,void 0,(function*(){return new Promise(r=>{const n=e.map(e=>{const r=t.find(t=>t.country===e.country&&t.state===e.state),n=a.find(t=>t.country===e.country&&t.state===e.state),l=e.values.map(e=>Object.freeze({confirmed:e.value,deaths:this._find(e.timestamp,r?r.values:[]),recovered:this._find(e.timestamp,n?n.values:[]),timestamp:e.timestamp}));return Object.freeze({country:e.country,lat:e.lat,lon:e.lon,state:e.state,values:Object.freeze(l)})});r(Object.freeze(n))})}))}_fetchModel(e){return Object(V.a)(this,void 0,void 0,(function*(){return this._fetch(e).then(e=>H(e)).then(e=>this._mapper.map(e))}))}_fetch(e){return Object(V.a)(this,void 0,void 0,(function*(){return fetch(this._fetchUrl(e),{headers:this._fetchHeaders(),method:"GET"}).then(e=>e.text())}))}_fetchHeaders(){return{"Accept-Encoding":"gzip, deflate, br"}}_fetchUrl(e){return`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_${e}_global.csv`}}const k=Object(s.c)(e=>({model:e.model}),e=>({update:()=>(e=>((new q).collect().then(t=>{e({type:"MODEL_RESPONSE",payload:t})}).catch(e=>{console.error(e)}),e({type:"MODEL_REQUEST"})))(e)}));class U extends r.Component{componentDidMount(){this.props.model&&this.props.model.length||this.updateModel()}updateModel(){this.props.update()}render(){const e=this.props.model.length?N:b;return n.a.createElement("span",{className:e,onClick:()=>{this.updateModel()}},n.a.createElement("i",{className:"fas fa-cloud-download-alt"}))}}U.displayName="UpdateButtonComponent";var P=k(U);const Y=()=>n.a.createElement("nav",{className:A},n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement(I,{to:"/"},"ts-covid19")),n.a.createElement("li",null,n.a.createElement(I,{to:"/Germany"},"Germany")),n.a.createElement("li",null,n.a.createElement(I,{to:"/US"},"US")),n.a.createElement("li",null,n.a.createElement(I,{to:"/Poland"},"Poland")),n.a.createElement("li",null,n.a.createElement(I,{to:"/Russia"},"Russia")),n.a.createElement("li",null,n.a.createElement(I,{to:"/United%20Kingdom"},"United Kingdom"))),n.a.createElement(P,null));Y.displayName="Navigation";const W=()=>n.a.createElement("header",{className:O},n.a.createElement(Y,null));W.displayName="Header";var z="_1PDbAeZ0pxuBdfDNhaQjo7";const G=e=>n.a.createElement("footer",{className:z},n.a.createElement("p",null,"© ",e.year," by ",e.author));G.displayName="Footer",G.propTypes={author:v.a.string,year:v.a.number},G.defaultProps={author:"Gregor Anders",year:(new Date).getFullYear()};const Q=({children:e})=>n.a.createElement("div",{className:D},n.a.createElement(W,null),n.a.createElement("section",null,e),n.a.createElement(G,null));Q.displayName="DefaultTemplate",Q.defaultProps={children:n.a.createElement("h1",null,"Missing Template Content")},Q.propTypes={children:v.a.element.isRequired};const K=v.a.shape({confirmed:v.a.number.isRequired,deaths:v.a.number.isRequired,recovered:v.a.number.isRequired,timestamp:v.a.number.isRequired}).isRequired,X=v.a.shape({country:v.a.string.isRequired,state:v.a.string.isRequired,lat:v.a.number.isRequired,lon:v.a.number.isRequired,values:v.a.arrayOf(K).isRequired}).isRequired;var B=a(17),$=a.n(B),J="_2KFXQkdnZwRv9T_ry8v-wV",Z="_1LWq4WWdvUNY4borjnYVSx";class ee{constructor(e){this._model=[],this._model=e.map(e=>Object.assign(Object.assign({},e),{values:e.values.map(e=>Object.assign({},e))}))}get model(){return this._model}name(e){return e.state&&e.state.length?`${e.country} - ${e.state}`:e.country}find(e,t){return this._model.find(a=>t&&t.length?a.country===e&&a.state===t:a.country===e)}sort(e){return this._model.sort(e)}}const te=({model:e,index:t})=>{const a=e.values[e.values.length-2],r=e.values[e.values.length-1],l=a.confirmed-a.deaths-a.recovered,o=r.confirmed-r.deaths-r.recovered,c=r.confirmed?r.deaths/r.confirmed*100:0,s=r.confirmed?r.recovered/r.confirmed*100:0,d=r.confirmed?o/r.confirmed*100:0,i=o-l;let m=""+e.country,E=""+e.country;return e.state&&e.state.length&&(m+="/"+e.state,E+=" - "+e.state),n.a.createElement("tr",null,n.a.createElement("td",null,t),n.a.createElement("td",null,n.a.createElement(y.a,{to:m},E)),n.a.createElement("td",null,r.confirmed.toLocaleString(),n.a.createElement("span",null,"(",(r.confirmed-a.confirmed).toLocaleString(),")")),n.a.createElement("td",null,r.deaths.toLocaleString(),n.a.createElement("span",null,"(",(r.deaths-a.deaths).toLocaleString(),")")),n.a.createElement("td",null,c.toFixed(2),"%"),n.a.createElement("td",null,r.recovered.toLocaleString(),n.a.createElement("span",null,"(",(r.recovered-a.recovered).toLocaleString(),")")),n.a.createElement("td",null,s.toFixed(2),"%"),n.a.createElement("td",null,o.toLocaleString(),n.a.createElement("span",null,"(",i.toLocaleString(),")")),n.a.createElement("td",null,d.toFixed(2),"%"))};te.displayName="CountryRow",te.propTypes={index:v.a.number.isRequired,model:X};var ae,re;!function(e){e[e.COUNTRY_ASC=0]="COUNTRY_ASC",e[e.COUNTRY_DESC=1]="COUNTRY_DESC",e[e.CONFIRMED_ASC=2]="CONFIRMED_ASC",e[e.CONFIRMED_DESC=3]="CONFIRMED_DESC",e[e.DEATHS_ASC=4]="DEATHS_ASC",e[e.DEATHS_DESC=5]="DEATHS_DESC",e[e.DEATHS_RATIO_ASC=6]="DEATHS_RATIO_ASC",e[e.DEATHS_RATIO_DESC=7]="DEATHS_RATIO_DESC",e[e.RECOVERED_ASC=8]="RECOVERED_ASC",e[e.RECOVERED_DESC=9]="RECOVERED_DESC",e[e.RECOVERED_RATIO_ASC=10]="RECOVERED_RATIO_ASC",e[e.RECOVERED_RATIO_DESC=11]="RECOVERED_RATIO_DESC",e[e.ACTIVE_ASC=12]="ACTIVE_ASC",e[e.ACTIVE_DESC=13]="ACTIVE_DESC",e[e.ACTIVE_RATIO_ASC=14]="ACTIVE_RATIO_ASC",e[e.ACTIVE_RATIO_DESC=15]="ACTIVE_RATIO_DESC"}(ae||(ae={})),function(e){e[e.COUNTRY=0]="COUNTRY",e[e.CONFIRMED=1]="CONFIRMED",e[e.DEATHS=2]="DEATHS",e[e.DEATHS_RATIO=3]="DEATHS_RATIO",e[e.RECOVERED=4]="RECOVERED",e[e.RECOVERED_RATIO=5]="RECOVERED_RATIO",e[e.ACTIVE=6]="ACTIVE",e[e.ACTIVE_RATIO=7]="ACTIVE_RATIO"}(re||(re={}));const ne=(e,t,a,r,l="linear")=>n.a.createElement($.a,{data:[{mode:"lines+markers",type:"bar",y:t,x:a,marker:{color:"green"}}],layout:{title:{text:e},yaxis:{type:l,autorange:!0},xaxis:{type:"date",autorange:!0},width:r},config:{responsive:!1}});class le extends r.Component{constructor(){super(...arguments),this.state={width:window.innerWidth,sort:ae.CONFIRMED_DESC}}componentDidMount(){window.addEventListener("resize",()=>{this.setState(Object.assign(Object.assign({},this.state),{width:window.innerWidth}))})}sort(e,t){const a=e.values[e.values.length-1],r=t.values[t.values.length-1],n=a.confirmed-a.deaths-a.recovered,l=r.confirmed-r.deaths-r.recovered;"Canada"!==e.country&&"Canada"!==t.country||"Recovered"===e.state||t.state;const o=a.confirmed?a.deaths/a.confirmed*100:0,c=a.confirmed?a.recovered/a.confirmed*100:0,s=a.confirmed?n/a.confirmed*100:0,d=r.confirmed?r.deaths/r.confirmed*100:0,i=r.confirmed?r.recovered/r.confirmed*100:0,m=r.confirmed?l/r.confirmed*100:0;switch(this.state.sort){case ae.ACTIVE_ASC:return n-l;case ae.ACTIVE_DESC:return l-n;case ae.ACTIVE_RATIO_ASC:return s-m;case ae.ACTIVE_RATIO_DESC:return m-s;case ae.CONFIRMED_ASC:return a.confirmed-r.confirmed;case ae.CONFIRMED_DESC:return r.confirmed-a.confirmed;case ae.DEATHS_ASC:return a.deaths-r.deaths;case ae.DEATHS_DESC:return r.deaths-a.deaths;case ae.DEATHS_RATIO_ASC:return o-d;case ae.DEATHS_RATIO_DESC:return d-o;case ae.RECOVERED_ASC:return a.recovered-r.recovered;case ae.RECOVERED_DESC:return r.recovered-a.recovered;case ae.RECOVERED_RATIO_ASC:return c-i;case ae.RECOVERED_RATIO_DESC:return i-c;case ae.COUNTRY_DESC:return t.country.localeCompare(e.country);case ae.COUNTRY_ASC:default:return e.country.localeCompare(t.country)}}changeSort(e){let t=ae.CONFIRMED_DESC;switch(e){case re.COUNTRY:t=this.state.sort===ae.COUNTRY_ASC?ae.COUNTRY_DESC:ae.COUNTRY_ASC;break;case re.CONFIRMED:t=this.state.sort===ae.CONFIRMED_DESC?ae.CONFIRMED_ASC:ae.CONFIRMED_DESC;break;case re.DEATHS:t=this.state.sort===ae.DEATHS_DESC?ae.DEATHS_ASC:ae.DEATHS_DESC;break;case re.DEATHS_RATIO:t=this.state.sort===ae.DEATHS_RATIO_DESC?ae.DEATHS_RATIO_ASC:ae.DEATHS_RATIO_DESC;break;case re.RECOVERED:t=this.state.sort===ae.RECOVERED_DESC?ae.RECOVERED_ASC:ae.RECOVERED_DESC;break;case re.RECOVERED_RATIO:t=this.state.sort===ae.RECOVERED_RATIO_DESC?ae.RECOVERED_RATIO_ASC:ae.RECOVERED_RATIO_DESC;break;case re.ACTIVE:t=this.state.sort===ae.ACTIVE_DESC?ae.ACTIVE_ASC:ae.ACTIVE_DESC;break;case re.ACTIVE_RATIO:t=this.state.sort===ae.ACTIVE_RATIO_DESC?ae.ACTIVE_RATIO_ASC:ae.ACTIVE_RATIO_DESC;break;default:t=this.state.sort===ae.CONFIRMED_DESC?ae.CONFIRMED_ASC:ae.CONFIRMED_DESC}this.setState(Object.assign(Object.assign({},this.state),{sort:t}))}get header(){return n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",{onClick:()=>{this.changeSort(re.COUNTRY)}},"Country/Region"),n.a.createElement("th",{onClick:()=>{this.changeSort(re.CONFIRMED)}},"Confirmed"),n.a.createElement("th",{onClick:()=>{this.changeSort(re.DEATHS)}},"Deaths"),n.a.createElement("th",{onClick:()=>{this.changeSort(re.DEATHS_RATIO)}},"%"),n.a.createElement("th",{onClick:()=>{this.changeSort(re.RECOVERED)}},"Recovered"),n.a.createElement("th",{onClick:()=>{this.changeSort(re.RECOVERED_RATIO)}},"%"),n.a.createElement("th",{onClick:()=>{this.changeSort(re.ACTIVE)}},"Active"),n.a.createElement("th",{onClick:()=>{this.changeSort(re.ACTIVE_RATIO)}},"%")))}get body(){const e=new ee(this.props.model).sort((e,t)=>this.sort(e,t)).map((e,t)=>n.a.createElement(te,{model:e,key:t,index:t+1}));return n.a.createElement("tbody",null,e)}get footer(){return n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",null,"Country/Region"),n.a.createElement("td",null,"Confirmed"),n.a.createElement("td",null,"Deaths"),n.a.createElement("td",null,"%"),n.a.createElement("td",null,"Recovered"),n.a.createElement("td",null,"%"),n.a.createElement("td",null,"Active"),n.a.createElement("td",null,"%")))}render(){if(!this.props.model||!this.props.model.length)return n.a.createElement(n.a.Fragment,null);const e=[];this.props.model.forEach(t=>{t.values.forEach(t=>{const a=e.find(e=>e.timestamp===t.timestamp);a?(a.confirmed+=t.confirmed,a.deaths+=t.deaths,a.recovered+=t.recovered):e.push(Object.assign({},t))})});const t=e,a=t.map((e,t,a)=>{const r=t?a[t-1]:e,n=e,l=r.confirmed-r.deaths-r.recovered,o=n.confirmed-n.deaths-n.recovered,c=n.confirmed?n.deaths/n.confirmed*100:0,s=n.confirmed?n.recovered/n.confirmed*100:0,d=n.confirmed?o/n.confirmed*100:0,i=n.confirmed-r.confirmed,m=n.deaths-r.deaths,E=n.recovered-r.recovered,u=o-l;return{before:{confirmed:r.confirmed,deaths:r.deaths,recovered:r.recovered,active:l,timestamp:r.timestamp},current:{confirmed:n.confirmed,deaths:n.deaths,recovered:n.recovered,active:o,timestamp:n.timestamp},ratio:{deaths:c,recovered:s,active:d},diff:{confirmed:i,deaths:m,recovered:E,active:u}}}),r=a.map(e=>e.current.confirmed),l=a.map(e=>e.current.recovered),o=a.map(e=>e.current.active),c=a.map(e=>e.current.deaths),s=a.map(e=>e.diff.confirmed),d=a.map(e=>e.diff.recovered),i=a.map(e=>e.diff.active),m=a.map(e=>e.diff.deaths),E=a.map(e=>e.current.timestamp),u=new Date(t[t.length-1].timestamp).toUTCString().replace(/\s00:00:00.*/,""),h=Math.floor(this.state.width/3)-10,p=h<768?768:h;return n.a.createElement("div",{className:J},n.a.createElement("h1",null,"World"),n.a.createElement("div",{className:Z},ne("Confirmed - "+u,r,E,p),ne("Confirmed (log) - "+u,r,E,p,"log"),ne("Confirmed (per day) - "+u,s,E,p)),n.a.createElement("div",{className:Z},ne("Recovered - "+u,l,E,p),ne("Recovered (log) - "+u,l,E,p,"log"),ne("Recovered (per day) - "+u,d,E,p)),n.a.createElement("div",{className:Z},ne("Active - "+u,o,E,p),ne("Active (log) - "+u,o,E,p,"log"),ne("Active (per day) - "+u,i,E,p)),n.a.createElement("div",{className:Z},ne("Deaths - "+u,c,E,p),ne("Deaths (log) - "+u,c,E,p,"log"),ne("Deaths (per day) - "+u,m,E,p)),n.a.createElement("table",null,this.header,this.body,this.footer))}}le.displayName="Countries",le.propTypes={model:v.a.arrayOf(X).isRequired};const oe=Object(s.c)(e=>({model:e.model})),ce=({model:e})=>{const t=e.length?n.a.createElement(le,{model:e}):n.a.createElement("h1",null,"Loading...");return n.a.createElement(Q,null,n.a.createElement("div",{className:S},t))};ce.displayName="IndexPageComponent",ce.propTypes={model:v.a.arrayOf(X).isRequired};const se=oe(ce);var de="_2qg7IMpNfTZ-PI1-DsLvlj",ie="_3PvpfmC7da5HzPw4gCpBNd",me="_3iklKMrIFSCg3AQ1opmU4W";const Ee=(e,t,a,r,l="linear")=>n.a.createElement($.a,{data:[{mode:"lines+markers",type:"bar",y:t,x:a,marker:{color:"green"}}],layout:{title:{text:e},yaxis:{type:l,autorange:!0},xaxis:{type:"date",autorange:!0},width:r},config:{responsive:!1}}),ue=({model:e,width:t})=>{const a=e.values.map((e,t,a)=>{const r=t?a[t-1]:e,n=e,l=r.confirmed-r.deaths-r.recovered,o=n.confirmed-n.deaths-n.recovered,c=n.confirmed?n.deaths/n.confirmed*100:0,s=n.confirmed?n.recovered/n.confirmed*100:0,d=n.confirmed?o/n.confirmed*100:0,i=n.confirmed-r.confirmed,m=n.deaths-r.deaths,E=n.recovered-r.recovered,u=o-l;return{before:{confirmed:r.confirmed,deaths:r.deaths,recovered:r.recovered,active:l,timestamp:r.timestamp},current:{confirmed:n.confirmed,deaths:n.deaths,recovered:n.recovered,active:o,timestamp:n.timestamp,ratio:{deaths:c,recovered:s,active:d},diff:{confirmed:i,deaths:m,recovered:E,active:u}}}}),r=a.map(e=>e.current.confirmed),l=a.map(e=>e.current.recovered),o=a.map(e=>e.current.active),c=a.map(e=>e.current.deaths),s=a.map(e=>e.current.diff.confirmed),d=a.map(e=>e.current.diff.recovered),i=a.map(e=>e.current.diff.active),m=a.map(e=>e.current.diff.deaths),E=a.map(e=>e.current.timestamp),u=new Date(e.values[e.values.length-1].timestamp).toUTCString().replace(/\s00:00:00.*/,"");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:me},Ee("Confirmed - "+u,r,E,t),Ee("Confirmed (log) - "+u,r,E,t,"log"),Ee("Confirmed (per day) - "+u,s,E,t)),n.a.createElement("div",{className:me},Ee("Recovered - "+u,l,E,t),Ee("Recovered (log) - "+u,l,E,t,"log"),Ee("Recovered (per day) - "+u,d,E,t)),n.a.createElement("div",{className:me},Ee("Active - "+u,o,E,t),Ee("Active (log) - "+u,o,E,t,"log"),Ee("Active (per day) - "+u,i,E,t)),n.a.createElement("div",{className:me},Ee("Deaths - "+u,c,E,t),Ee("Deaths (log) - "+u,c,E,t,"log"),Ee("Deaths (per day) - "+u,m,E,t)))};ue.displayName="CountryPlot",ue.propTypes={model:X,width:v.a.number.isRequired};var he=ue;class pe extends r.PureComponent{constructor(){super(...arguments),this.state={width:window.innerWidth,height:window.innerHeight}}componentDidMount(){window.addEventListener("resize",()=>{this.setState(Object.assign(Object.assign({},this.state),{width:window.innerWidth,height:window.innerHeight}))})}get header(){return n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,"Confirmed"),n.a.createElement("th",null,"Deaths"),n.a.createElement("th",null,"%"),n.a.createElement("th",null,"Recovered"),n.a.createElement("th",null,"%"),n.a.createElement("th",null,"Active"),n.a.createElement("th",null,"%")))}get body(){const e=this.props.model.values.map((e,t,a)=>{const r=t?a[t-1]:e,l=e,o=r.confirmed-r.deaths-r.recovered,c=l.confirmed-l.deaths-l.recovered,s=l.confirmed?l.deaths/l.confirmed*100:0,d=l.confirmed?l.recovered/l.confirmed*100:0,i=l.confirmed?c/l.confirmed*100:0,m=l.confirmed-r.confirmed,E=l.deaths-r.deaths,u=l.recovered-r.recovered,h=c-o;return n.a.createElement("tr",{key:t},n.a.createElement("td",null,new Date(e.timestamp).toUTCString().replace(/\s00:00:00.*/,"")),n.a.createElement("td",null,e.confirmed.toLocaleString(),n.a.createElement("span",null,"(",m.toLocaleString(),")")),n.a.createElement("td",null,e.deaths.toLocaleString(),n.a.createElement("span",null,"(",E.toLocaleString(),")")),n.a.createElement("td",null,s.toFixed(2),"%"),n.a.createElement("td",null,e.recovered.toLocaleString(),n.a.createElement("span",null,"(",u.toLocaleString(),")")),n.a.createElement("td",null,d.toFixed(2),"%"),n.a.createElement("td",null,c.toLocaleString(),n.a.createElement("span",null,"(",h.toLocaleString(),")")),n.a.createElement("td",null,i.toFixed(2),"%"))});return n.a.createElement("tbody",null,e)}get footer(){return n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",null,"Confirmed"),n.a.createElement("td",null,"Deaths"),n.a.createElement("td",null,"%"),n.a.createElement("td",null,"Recovered"),n.a.createElement("td",null,"%"),n.a.createElement("td",null,"Active"),n.a.createElement("td",null,"%")))}render(){const e=new ee([]);return n.a.createElement("div",{className:ie},n.a.createElement("h1",null,e.name(this.props.model)),n.a.createElement(he,{model:this.props.model,width:this.state.width>500?500:this.state.width}),n.a.createElement("table",null,this.header,this.body,this.footer))}}pe.displayName="Country",pe.propTypes={model:X};const Ce=Object(s.c)(e=>({model:e.model}));class fe extends r.PureComponent{render(){const e=this.props.match.params.country,t=this.props.match.params.state,a=new ee(this.props.model).find(e,t);if(this.props.model&&this.props.model.length&&!a)return n.a.createElement(d.a,{to:"/"});const r=a?n.a.createElement(pe,{model:a}):n.a.createElement("h1",null,"Loading...");return n.a.createElement(Q,null,n.a.createElement("div",{className:de},r))}}fe.displayName="IndexPageComponent",fe.propTypes={model:v.a.arrayOf(X).isRequired};const Re=Ce(fe);const _e=()=>n.a.createElement(s.a,{store:Object(i.e)(R,Object(i.d)(Object(i.a)(Object(m.a)(f),Object(h.a)(),p.a,u.logger)))},n.a.createElement(c.a,{history:f},n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"/",exact:!0,component:se}),n.a.createElement(d.b,{path:"/:country/:state",component:Re}),n.a.createElement(d.b,{path:"/:country",component:Re}),n.a.createElement(d.a,{to:"/"}))));_e.displayName="Application";var ve=a(24),Se=a(33);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#app");e?(ve.b.add(Se.faCloudDownloadAlt),ve.a.watch(),e.className=o,Object(l.render)(n.a.createElement(_e,null),e)):console.error(Error("Element with selector '#app' not found"))})}},[[47,1,2]]]);