const ee={undefined:!1,fieldSeparator:",",lineSeparator:"\n",quote:'"'},te=(e,t)=>{if(!t.undefined||e.length)return e},ae=(e,t,a)=>{t.push(e),a.field++,a.fieldOffset=-1,a.appendField=!1},ne=(e,t,a)=>{t.push(e),a.field=0,a.line++,a.lineOffset=-1,a.appendRow=!1},oe=(e,t=ee)=>new Promise(a=>{((e,t=ee)=>{const a=Object.assign({},ee,t),n={field:0,fieldOffset:0,line:0,lineOffset:0,quoted:!1,appendCell:!1,appendField:!1,appendRow:!1};return new Promise((t,o)=>{if(e.length){const r=[];let s=[],l="";for(let t=0;t<e.length;t++)n.appendCell=!0,e[t]===a.quote?t&&"\\"!==e[t-1]?(!l.length||n.quoted?n.quoted=!n.quoted:o(Error(`Invalid CSV text at offset ${n.line}:${n.lineOffset}`)),n.appendCell=!1):l=l.substr(0,l.length-1):e[t]===a.fieldSeparator?n.quoted||(n.appendCell=!1,n.appendField=!0):e[t]===a.lineSeparator&&(n.quoted||(n.appendCell=!1,n.appendField=!0,n.appendRow=!0)),n.appendCell&&(l+=e[t]),n.appendField&&(ae(te(l,a),s,n),l=""),n.appendRow&&(ne(s,r,n),s=[]),n.lineOffset++,n.fieldOffset++;s.length&&(ae(te(l,a),s,n),ne(s,r,n)),t(r)}else o(Error("Empty CSV text"))})})(e,t).then(e=>{const t=e[0].filter(e=>"string"==typeof e);a(e.filter((e,t)=>t>0).map(e=>{const a={};return t.forEach((t,n)=>{a[t]=e[n]}),a}))})});class re{map(e){return e.map(e=>this._map(e)).sort((e,t)=>{const a=e.country.localeCompare(t.country);return 0===a?e.state.localeCompare(t.state):a})}_map(e){const t={values:[]};return Object.keys(e).forEach(a=>{if(a.match(/State/))t.state=e[a];else if(a.match(/Country/))t.country=e[a].replace(/\*/,"");else if(a.match(/Lat/))t.lat=parseFloat(e[a]);else if(a.match(/Long/))t.lon=parseFloat(e[a]);else{const n=parseInt(e[a],10),o=new Date(a),r=Date.UTC(o.getFullYear(),o.getMonth(),o.getDate());t.values.push({timestamp:r,value:n})}}),t.values.sort((e,t)=>e.timestamp-t.timestamp),Object.freeze(t)}}class se{map(e){return e.map(e=>this._map(e)).sort((e,t)=>{const a=e.country.localeCompare(t.country);return 0===a?e.state.localeCompare(t.state):a})}_map(e){const t={};return Object.keys(e).forEach(a=>{a.match(/State/)?t.state=e[a]:a.match(/Country/)?t.country=e[a].replace(/\*/,""):a.match(/Lat/)?t.lat=parseFloat(e[a]):a.match(/Long/)?t.lon=parseFloat(e[a]):a.match(/Population/)?t.population=parseInt(e[a]):a.match(/UID/)?t.uid=parseInt(e[a]):a.match(/iso2/)?t.iso2=e[a]:a.match(/iso3/)?t.iso3=e[a]:a.match(/code3/)?t.code3=parseInt(e[a]):a.match(/FIPS/)?t.fips=parseInt(e[a]):a.match(/Admin2/)&&(t.admin2=e[a])}),Object.freeze(t)}}var le;!function(e){e.CONFIRMED="confirmed",e.DEATHS="deaths",e.RECOVERED="recovered",e.LOOKUP="lookup"}(le||(le={}));export class ModelCollector{constructor(e=new re,t=new se){this._modelMapper=e,this._lookupMapper=t}async collect(){const e=await this._fetchLookup(),t=await this._fetchModel(le.CONFIRMED),a=await this._fetchModel(le.DEATHS),n=await this._fetchModel(le.RECOVERED);return this.merge(t,a,n,e)}findSeries(e,t){const a=t.find(t=>t.timestamp===e);return a?a.value:0}async merge(e,t,a,n){return new Promise(o=>{o(e.filter(e=>"Canada"!==e.country||"Recovered"!==e.state).map(e=>{const o=n.find(t=>{let a=t.country.localeCompare(e.country);return 0===a&&(a=t.state.localeCompare(e.state)),0===a}),r=t.find(t=>t.country===e.country&&t.state===e.state),s=a.find(t=>t.country===e.country&&t.state===e.state),l=e.values.map(e=>Object.freeze({confirmed:e.value,deaths:this.findSeries(e.timestamp,r?r.values:[]),recovered:this.findSeries(e.timestamp,s?s.values:[]),timestamp:e.timestamp}));return Object.freeze({country:e.country,lat:e.lat,lon:e.lon,state:e.state,population:o&&o.population||0,values:Object.freeze(l)})}))})}async _fetchModel(e){return this._fetch(e).then(e=>oe(e)).then(e=>this._modelMapper.map(e))}async _fetchLookup(){return this._fetch(le.LOOKUP).then(e=>oe(e)).then(e=>this._lookupMapper.map(e))}async _fetch(e){const t=new Request(this._fetchUrl(e),{headers:this._fetchHeaders(),method:"GET"});return fetch(t,{credentials:"same-origin"}).then(e=>e.text())}_fetchHeaders(){return{"Accept-Encoding":"gzip, deflate, br"}}_fetchUrl(e){const t="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/";return e===le.LOOKUP?t+"UID_ISO_FIPS_LookUp_Table.csv":`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_${e}_global.csv`}}export default ModelCollector;