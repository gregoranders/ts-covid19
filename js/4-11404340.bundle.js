(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{45:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n=a(12),r=a(7),l=a(0),o=a.n(l),s=a(6),c=(a(2),a(1)),i=a(4),d=a(5);o.a.Component;o.a.Component;var E=function(e,t){return"function"==typeof e?e(t):e},u=function(e,t){return"string"==typeof e?Object(s.c)(e,null,null,t):e},m=function(e){return e},C=o.a.forwardRef;void 0===C&&(C=m);var h=C((function(e,t){var a=e.innerRef,n=e.navigate,r=e.onClick,l=Object(i.a)(e,["innerRef","navigate","onClick"]),s=l.target,d=Object(c.a)({},l,{onClick:function(e){try{r&&r(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return d.ref=m!==C&&t||a,o.a.createElement("a",d)}));var f=C((function(e,t){var a=e.component,r=void 0===a?h:a,l=e.replace,s=e.to,f=e.innerRef,R=Object(i.a)(e,["component","replace","to","innerRef"]);return o.a.createElement(n.e.Consumer,null,(function(e){e||Object(d.a)(!1);var a=e.history,n=u(E(s,e.location),e.location),i=n?a.createHref(n):"",h=Object(c.a)({},R,{href:i,navigate:function(){var t=E(s,e.location);(l?a.replace:a.push)(t)}});return m!==C?h.ref=t||f:h.innerRef=f,o.a.createElement(r,h)}))})),R=function(e){return e},p=o.a.forwardRef;void 0===p&&(p=R);var _=p((function(e,t){var a=e["aria-current"],r=void 0===a?"page":a,l=e.activeClassName,s=void 0===l?"active":l,m=e.activeStyle,C=e.className,h=e.exact,_=e.isActive,S=e.location,A=e.strict,D=e.style,O=e.to,T=e.innerRef,v=Object(i.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return o.a.createElement(n.e.Consumer,null,(function(e){e||Object(d.a)(!1);var a=S||e.location,l=u(E(O,a),a),i=l.pathname,I=i&&i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),y=I?Object(n.f)(a.pathname,{path:I,exact:h,strict:A}):null,g=!!(_?_(y,a):y),N=g?function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return e})).join(" ")}(C,s):C,V=g?Object(c.a)({},D,{},m):D,b=Object(c.a)({"aria-current":g&&r||null,className:N,style:V,to:l},v);return R!==p?b.ref=t||T:b.innerRef=T,o.a.createElement(f,b)}))}))},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(2),r=a.n(n);const l=r.a.shape({confirmed:r.a.number.isRequired,deaths:r.a.number.isRequired,recovered:r.a.number.isRequired,timestamp:r.a.number.isRequired}).isRequired,o=r.a.shape({country:r.a.string.isRequired,state:r.a.string.isRequired,lat:r.a.number.isRequired,lon:r.a.number.isRequired,values:r.a.arrayOf(l).isRequired}).isRequired},47:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));const n={undefined:!1,fieldSeparator:",",lineSeparator:"\n",quote:'"'},r=(e,t)=>{if(!t.undefined||e.length)return e},l=(e,t,a)=>{t.push(e),a.field++,a.fieldOffset=-1,a.appendField=!1},o=(e,t,a)=>{t.push(e),a.field=0,a.line++,a.lineOffset=-1,a.appendRow=!1},s=(e,t=n)=>new Promise(a=>{((e,t=n)=>{const a=Object.assign({},n,t),s={field:0,fieldOffset:0,line:0,lineOffset:0,quoted:!1,appendCell:!1,appendField:!1,appendRow:!1};return new Promise((t,n)=>{if(e.length){const c=[];let i=[],d="";for(let t=0;t<e.length;t++)s.appendCell=!0,e[t]===a.quote?t&&"\\"!==e[t-1]?(!d.length||s.quoted?s.quoted=!s.quoted:n(Error(`Invalid CSV text at offset ${s.line}:${s.lineOffset}`)),s.appendCell=!1):d=d.substr(0,d.length-1):e[t]===a.fieldSeparator?s.quoted||(s.appendCell=!1,s.appendField=!0):e[t]===a.lineSeparator&&(s.quoted||(s.appendCell=!1,s.appendField=!0,s.appendRow=!0)),s.appendCell&&(d+=e[t]),s.appendField&&(l(r(d,a),i,s),d=""),s.appendRow&&(o(i,c,s),i=[]),s.lineOffset++,s.fieldOffset++;i.length&&(l(r(d,a),i,s),o(i,c,s)),t(c)}else n(Error("Empty CSV text"))})})(e,t).then(e=>{const t=e[0].filter(e=>"string"==typeof e);a(e.filter((e,t)=>t>0).map(e=>{const a={};return t.forEach((t,n)=>{a[t]=e[n]}),a}))})});class c{map(e){return e.map(e=>this._map(e)).sort((e,t)=>{const a=e.country.localeCompare(t.country);return 0===a?e.state.localeCompare(t.state):a})}_map(e){const t={values:[]};return Object.keys(e).forEach(a=>{if(a.match(/State/))t.state=e[a];else if(a.match(/Country/))t.country=e[a];else if(a.match(/Lat/))t.lat=parseFloat(e[a]);else if(a.match(/Long/))t.lon=parseFloat(e[a]);else{const n=parseInt(e[a],10),r=new Date(a),l=Date.UTC(r.getFullYear(),r.getMonth(),r.getDate());t.values.push({timestamp:l,value:n})}}),t.values.sort((e,t)=>e.timestamp-t.timestamp),Object.freeze(t)}}var i;!function(e){e.CONFIRMED="confirmed",e.DEATHS="deaths",e.RECOVERED="recovered"}(i||(i={}));class d{constructor(e=new c){this._mapper=e}async collect(){const e=await this._fetchModel(i.CONFIRMED),t=await this._fetchModel(i.DEATHS),a=await this._fetchModel(i.RECOVERED);return this.merge(e,t,a)}findSeries(e,t){const a=t.find(t=>t.timestamp===e);return a?a.value:0}async merge(e,t,a){return new Promise(n=>{const r=e.map(e=>{const n=t.find(t=>t.country===e.country&&t.state===e.state),r=a.find(t=>t.country===e.country&&t.state===e.state),l=e.values.map(e=>Object.freeze({confirmed:e.value,deaths:this.findSeries(e.timestamp,n?n.values:[]),recovered:this.findSeries(e.timestamp,r?r.values:[]),timestamp:e.timestamp}));return Object.freeze({country:e.country,lat:e.lat,lon:e.lon,state:e.state,values:Object.freeze(l)})});n(Object.freeze(r))})}async _fetchModel(e){return this._fetch(e).then(e=>s(e)).then(e=>this._mapper.map(e))}async _fetch(e){return fetch(this._fetchUrl(e),{headers:this._fetchHeaders(),method:"GET"}).then(e=>e.text())}_fetchHeaders(){return{"Accept-Encoding":"gzip, deflate, br"}}_fetchUrl(e){return`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_${e}_global.csv`}}},48:function(e,t,a){"use strict";a.d(t,"b",(function(){return n.a})),a.d(t,"a",(function(){return r}));var n=a(46);a(47);class r{constructor(e){this._model=[],this._model=e.map(e=>({...e,values:e.values.map(e=>({...e}))}))}get model(){return this._model}name(e){return e.state&&e.state.length?`${e.country} - ${e.state}`:e.country}find(e,t){return this._model.find(a=>t&&t.length?a.country===e&&a.state===t:a.country===e)}sort(e){return this._model.sort(e)}}},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return I}));var n=a(0),r=a.n(n),l=a(2),o=a.n(l),s="_3KxrVgLSYRSAbdatw-1rt9",c="_V96JD3PEs1VXevJsy4V5",i="_2NyXajw3HWRS22N9-62SV0",d="_3calS0aV2eqbdFM551AfnX",E="WDuQNtbOBUtMUFonGoy_z",u=a(45);const m=({to:e,children:t})=>r.a.createElement(u.a,{className:d,activeClassName:E,to:e},t);m.displayName="NavLink",m.propTypes={to:o.a.string.isRequired,children:o.a.string.isRequired};var C=a(10),h="NaptN3rjGenMgLZRBODV3",f="iVnnRdgIpyjErxSYM6z_6",R=a(18),p=a(47);const _=Object(C.c)(e=>({model:e.model}),e=>({update:()=>(e=>((new p.a).collect().then(t=>{e({type:R.b,payload:t})}).catch(e=>{console.error(e)}),e({type:R.a})))(e)}));class S extends n.Component{componentDidMount(){this.props.model&&this.props.model.length||this.updateModel()}updateModel(){this.props.update()}render(){const e=this.props.model.length?h:f;return r.a.createElement("span",{className:e,onClick:()=>{this.updateModel()}},r.a.createElement("i",{className:"fas fa-cloud-download-alt"}))}}S.displayName="UpdateButtonComponent";var A=_(S);const D=()=>r.a.createElement("nav",{className:i},r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement(m,{to:"/"},"ts-covid19")),r.a.createElement("li",null,r.a.createElement(m,{to:"/Germany"},"Germany")),r.a.createElement("li",null,r.a.createElement(m,{to:"/US"},"US")),r.a.createElement("li",null,r.a.createElement(m,{to:"/Poland"},"Poland")),r.a.createElement("li",null,r.a.createElement(m,{to:"/Russia"},"Russia")),r.a.createElement("li",null,r.a.createElement(m,{to:"/United%20Kingdom"},"United Kingdom"))),r.a.createElement(A,null));D.displayName="Navigation";const O=()=>r.a.createElement("header",{className:c},r.a.createElement(D,null));O.displayName="Header";var T="_1PDbAeZ0pxuBdfDNhaQjo7";const v=e=>r.a.createElement("footer",{className:T},r.a.createElement("p",null,"© ",e.year," by ",e.author));v.displayName="Footer",v.propTypes={author:o.a.string,year:o.a.number},v.defaultProps={author:"Gregor Anders",year:(new Date).getFullYear()};const I=({children:e})=>r.a.createElement("div",{className:s},r.a.createElement(O,null),r.a.createElement("section",null,e),r.a.createElement(v,null));I.displayName="DefaultTemplate",I.defaultProps={children:r.a.createElement("h1",null,"Missing Template Content")},I.propTypes={children:o.a.element.isRequired}},50:function(e,t,a){"use strict";a.r(t),a.d(t,"IndexPageComponent",(function(){return _})),a.d(t,"IndexPage",(function(){return S}));var n=a(0),r=a.n(n),l=a(2),o=a.n(l),s=a(10),c="_3yT6nn0dWAHek2N6SF5QXD",i=a(49),d=a(46),E="_2KFXQkdnZwRv9T_ry8v-wV",u=a(48),m=a(45);const C=({model:e,index:t})=>{const a=e.values[e.values.length-2],n=e.values[e.values.length-1],l=a.confirmed-a.deaths-a.recovered,o=n.confirmed-n.deaths-n.recovered,s=n.confirmed?n.deaths/n.confirmed*100:0,c=n.confirmed?n.recovered/n.confirmed*100:0,i=n.confirmed?o/n.confirmed*100:0,d=o-l;let E=""+e.country,u=""+e.country;return e.state&&e.state.length&&(E+="/"+e.state,u+=" - "+e.state),r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement(m.a,{to:E},u)),r.a.createElement("td",null,n.confirmed.toLocaleString(),r.a.createElement("span",null,"(",(n.confirmed-a.confirmed).toLocaleString(),")")),r.a.createElement("td",null,n.deaths.toLocaleString(),r.a.createElement("span",null,"(",(n.deaths-a.deaths).toLocaleString(),")")),r.a.createElement("td",null,s.toFixed(2),"%"),r.a.createElement("td",null,n.recovered.toLocaleString(),r.a.createElement("span",null,"(",(n.recovered-a.recovered).toLocaleString(),")")),r.a.createElement("td",null,c.toFixed(2),"%"),r.a.createElement("td",null,o.toLocaleString(),r.a.createElement("span",null,"(",d.toLocaleString(),")")),r.a.createElement("td",null,i.toFixed(2),"%"))};C.displayName="CountryRow",C.propTypes={index:o.a.number.isRequired,model:u.b};var h,f;!function(e){e[e.COUNTRY_ASC=0]="COUNTRY_ASC",e[e.COUNTRY_DESC=1]="COUNTRY_DESC",e[e.CONFIRMED_ASC=2]="CONFIRMED_ASC",e[e.CONFIRMED_DESC=3]="CONFIRMED_DESC",e[e.DEATHS_ASC=4]="DEATHS_ASC",e[e.DEATHS_DESC=5]="DEATHS_DESC",e[e.DEATHS_RATIO_ASC=6]="DEATHS_RATIO_ASC",e[e.DEATHS_RATIO_DESC=7]="DEATHS_RATIO_DESC",e[e.RECOVERED_ASC=8]="RECOVERED_ASC",e[e.RECOVERED_DESC=9]="RECOVERED_DESC",e[e.RECOVERED_RATIO_ASC=10]="RECOVERED_RATIO_ASC",e[e.RECOVERED_RATIO_DESC=11]="RECOVERED_RATIO_DESC",e[e.ACTIVE_ASC=12]="ACTIVE_ASC",e[e.ACTIVE_DESC=13]="ACTIVE_DESC",e[e.ACTIVE_RATIO_ASC=14]="ACTIVE_RATIO_ASC",e[e.ACTIVE_RATIO_DESC=15]="ACTIVE_RATIO_DESC"}(h||(h={})),function(e){e[e.COUNTRY=0]="COUNTRY",e[e.CONFIRMED=1]="CONFIRMED",e[e.DEATHS=2]="DEATHS",e[e.DEATHS_RATIO=3]="DEATHS_RATIO",e[e.RECOVERED=4]="RECOVERED",e[e.RECOVERED_RATIO=5]="RECOVERED_RATIO",e[e.ACTIVE=6]="ACTIVE",e[e.ACTIVE_RATIO=7]="ACTIVE_RATIO"}(f||(f={}));class R extends n.Component{constructor(e){super(e),this.state={width:window.innerWidth,sort:h.CONFIRMED_DESC},this.resizeListener=this.resizeListener.bind(this)}resizeListener(){this.setState({...this.state,width:window.innerWidth})}componentDidMount(){window.addEventListener("resize",this.resizeListener)}componentWillUnmount(){window.removeEventListener("resize",this.resizeListener)}sort(e,t){const a=e.values[e.values.length-1],n=t.values[t.values.length-1],r=a.confirmed-a.deaths-a.recovered,l=n.confirmed-n.deaths-n.recovered;"Canada"!==e.country&&"Canada"!==t.country||"Recovered"===e.state||t.state;const o=a.confirmed?a.deaths/a.confirmed*100:0,s=a.confirmed?a.recovered/a.confirmed*100:0,c=a.confirmed?r/a.confirmed*100:0,i=n.confirmed?n.deaths/n.confirmed*100:0,d=n.confirmed?n.recovered/n.confirmed*100:0,E=n.confirmed?l/n.confirmed*100:0;switch(this.state.sort){case h.ACTIVE_ASC:return r-l;case h.ACTIVE_DESC:return l-r;case h.ACTIVE_RATIO_ASC:return c-E;case h.ACTIVE_RATIO_DESC:return E-c;case h.CONFIRMED_ASC:return a.confirmed-n.confirmed;case h.CONFIRMED_DESC:return n.confirmed-a.confirmed;case h.DEATHS_ASC:return a.deaths-n.deaths;case h.DEATHS_DESC:return n.deaths-a.deaths;case h.DEATHS_RATIO_ASC:return o-i;case h.DEATHS_RATIO_DESC:return i-o;case h.RECOVERED_ASC:return a.recovered-n.recovered;case h.RECOVERED_DESC:return n.recovered-a.recovered;case h.RECOVERED_RATIO_ASC:return s-d;case h.RECOVERED_RATIO_DESC:return d-s;case h.COUNTRY_DESC:return t.country.localeCompare(e.country);case h.COUNTRY_ASC:default:return e.country.localeCompare(t.country)}}changeSort(e){let t=h.CONFIRMED_DESC;switch(e){case f.COUNTRY:t=this.state.sort===h.COUNTRY_ASC?h.COUNTRY_DESC:h.COUNTRY_ASC;break;case f.CONFIRMED:t=this.state.sort===h.CONFIRMED_DESC?h.CONFIRMED_ASC:h.CONFIRMED_DESC;break;case f.DEATHS:t=this.state.sort===h.DEATHS_DESC?h.DEATHS_ASC:h.DEATHS_DESC;break;case f.DEATHS_RATIO:t=this.state.sort===h.DEATHS_RATIO_DESC?h.DEATHS_RATIO_ASC:h.DEATHS_RATIO_DESC;break;case f.RECOVERED:t=this.state.sort===h.RECOVERED_DESC?h.RECOVERED_ASC:h.RECOVERED_DESC;break;case f.RECOVERED_RATIO:t=this.state.sort===h.RECOVERED_RATIO_DESC?h.RECOVERED_RATIO_ASC:h.RECOVERED_RATIO_DESC;break;case f.ACTIVE:t=this.state.sort===h.ACTIVE_DESC?h.ACTIVE_ASC:h.ACTIVE_DESC;break;case f.ACTIVE_RATIO:t=this.state.sort===h.ACTIVE_RATIO_DESC?h.ACTIVE_RATIO_ASC:h.ACTIVE_RATIO_DESC;break;default:t=this.state.sort===h.CONFIRMED_DESC?h.CONFIRMED_ASC:h.CONFIRMED_DESC}this.setState({...this.state,sort:t})}get header(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",{onClick:()=>{this.changeSort(f.COUNTRY)}},"Country/Region"),r.a.createElement("th",{onClick:()=>{this.changeSort(f.CONFIRMED)}},"Confirmed"),r.a.createElement("th",{onClick:()=>{this.changeSort(f.DEATHS)}},"Deaths"),r.a.createElement("th",{onClick:()=>{this.changeSort(f.DEATHS_RATIO)}},"%"),r.a.createElement("th",{onClick:()=>{this.changeSort(f.RECOVERED)}},"Recovered"),r.a.createElement("th",{onClick:()=>{this.changeSort(f.RECOVERED_RATIO)}},"%"),r.a.createElement("th",{onClick:()=>{this.changeSort(f.ACTIVE)}},"Active"),r.a.createElement("th",{onClick:()=>{this.changeSort(f.ACTIVE_RATIO)}},"%")))}get body(){const e=new u.a(this.props.model).sort((e,t)=>this.sort(e,t)).map((e,t)=>r.a.createElement(C,{model:e,key:t,index:t+1}));return r.a.createElement("tbody",null,e)}get footer(){return r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"Country/Region"),r.a.createElement("td",null,"Confirmed"),r.a.createElement("td",null,"Deaths"),r.a.createElement("td",null,"%"),r.a.createElement("td",null,"Recovered"),r.a.createElement("td",null,"%"),r.a.createElement("td",null,"Active"),r.a.createElement("td",null,"%")))}render(){return this.props.model&&this.props.model.length?r.a.createElement("div",{className:E},r.a.createElement("h1",null,"World"),r.a.createElement("table",null,this.header,this.body,this.footer)):r.a.createElement(r.a.Fragment,null)}}R.displayName="Countries",R.propTypes={model:o.a.arrayOf(u.b).isRequired};const p=Object(s.c)(e=>({model:e.model})),_=({model:e})=>{const t=e.length?r.a.createElement(R,{model:e}):r.a.createElement("h1",null,"Loading...");return r.a.createElement(i.a,null,r.a.createElement("div",{className:c},t))};_.displayName="IndexPageComponent",_.propTypes={model:o.a.arrayOf(d.a).isRequired};const S=p(_);t.default=S}}]);