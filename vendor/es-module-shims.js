!function(){const A=Promise.resolve();let Q;function B(A){return URL.createObjectURL(new Blob([A],{type:"application/javascript"}))}const g="undefined"!=typeof document;let C,E;try{C=(0,eval)("u=>import(u)")}catch(A){g&&(self.addEventListener("error",A=>importShim.e=A.error),C=A=>{const g=B(`import*as m from'${A}';self.importShim.l=m;self.importShim.e=null`),C=document.createElement("script");return C.type="module",C.src=g,document.head.appendChild(C),new Promise((A,B)=>{C.addEventListener("load",()=>{document.head.removeChild(C),importShim.e?B(importShim.e):A(importShim.l,Q)})})})}if(g){const A=document.querySelector("base[href]");A&&(Q=A.href)}if(!Q&&"undefined"!=typeof location){Q=location.href.split("#")[0].split("?")[0];const A=Q.lastIndexOf("/");-1!==A&&(Q=Q.slice(0,A+1))}g&&(E=document.currentScript&&document.currentScript.src);const e=/\\/g;function t(A,Q){if(Q=Q&&Q.split("#")[0].split("?")[0],-1!==A.indexOf("\\")&&(A=A.replace(e,"/")),"/"===A[0]&&"/"===A[1])return Q.slice(0,Q.indexOf(":")+1)+A;if("."===A[0]&&("/"===A[1]||"."===A[1]&&("/"===A[2]||2===A.length&&(A+="/"))||1===A.length&&(A+="/"))||"/"===A[0]){const B=Q.slice(0,Q.indexOf(":")+1);let g;if("/"===Q[B.length+1]?"file:"!==B?(g=Q.slice(B.length+2),g=g.slice(g.indexOf("/")+1)):g=Q.slice(8):g=Q.slice(B.length+("/"===Q[B.length])),"/"===A[0])return Q.slice(0,Q.length-g.length-1)+A;const C=g.slice(0,g.lastIndexOf("/")+1)+A,E=[];let e=-1;for(let A=0;A<C.length;A++)-1!==e?"/"===C[A]&&(E.push(C.slice(e,A+1)),e=-1):"."===C[A]?"."!==C[A+1]||"/"!==C[A+2]&&A+2!==C.length?"/"===C[A+1]||A+1===C.length?A+=1:e=A:(E.pop(),A+=2):e=A;return-1!==e&&E.push(C.slice(e)),Q.slice(0,Q.length-g.length)+E.join("")}}const I={imports:{},scopes:{}};function i(A,Q){return t(A,Q)||(-1!==A.indexOf(":")?A:t("./"+A,Q))}async function o(A){try{return await C(A),!0}catch(A){return!1}}async function s(A,Q,B,g,C){A:for(let E in A){const e=t(E,B)||E;let I=A[E];if("string"==typeof I)I=[I];else if(!Array.isArray(I))continue;for(const A of I){if("string"!=typeof A)continue;const E=f(g,t(A,B)||A,C);if(E&&(!E.startsWith("std:")||await o(E))){Q[e]=E;continue A}}a(E,A[E],"bare specifier did not resolve")}}async function n(A,Q,B){const g={imports:Object.assign({},B.imports),scopes:Object.assign({},B.scopes)};if(A.imports&&await s(A.imports,g.imports,Q,B,null),A.scopes)for(let C in A.scopes){const E=i(C,Q);await s(A.scopes[C],g.scopes[E]||(g.scopes[E]={}),Q,B,E)}return g}function r(A,Q){if(Q[A])return A;let B=A.length;do{const g=A.slice(0,B+1);if(g in Q)return g}while(-1!==(B=A.lastIndexOf("/",B-1)))}function c(A,Q){const B=r(A,Q);if(B){const g=Q[B];if(null===g)return;if(!(A.length>B.length&&"/"!==g[g.length-1]))return g+A.slice(B.length);a(B,g,"should have a trailing '/'")}}function a(A,Q,B){console.warn("Package target "+B+", resolving target '"+Q+"' for "+A)}function f(A,Q,B){let g=B&&r(B,A.scopes);for(;g;){const B=c(Q,A.scopes[g]);if(B)return B;g=r(g.slice(0,g.lastIndexOf("/")),A.scopes)}return c(Q,A.imports)||-1!==Q.indexOf(":")&&Q}let l;const w=WebAssembly.compile((A=>"function"==typeof atob?Uint8Array.from(atob(A),A=>A.charCodeAt(0)):Buffer.from(A,"base64"))("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")).then(WebAssembly.instantiate).then(({exports:A})=>{l=A});let h=0;const p={};async function m(Q,g){await w;const E=function Q(B,g){let C=p[B];return C||(C=p[B]={u:B,r:void 0,f:void 0,S:void 0,L:void 0,a:void 0,d:void 0,b:void 0,s:void 0},B.startsWith("std:")?Object.assign(C,{r:B,f:A,L:A,b:B}):(C.f=(async()=>{if(!g){const A=await d.fetch(B);if(!A.ok)throw new Error(`${A.status} ${A.statusText} ${A.url}`);C.r=A.url;const Q=A.headers.get("content-type");if(Q.match(/^(text|application)\/(x-)?javascript(;|$)/))g=await A.text();else if(Q.match(/^application\/json(;|$)/))g=`export default JSON.parse(${JSON.stringify(await A.text())})`;else{if(!Q.match(/^text\/css(;|$)/)){if(Q.match(/^application\/wasm(;|$)/)){const Q=u[B]=await WebAssembly.compile(await A.arrayBuffer());let g=WebAssembly.Module.imports?WebAssembly.Module.imports(Q).map(A=>A.module):[];const E=[];C.a=[E,WebAssembly.Module.exports(Q).map(A=>A.name)];const e=g.map(A=>JSON.stringify(A));let t=0;return C.S=e.map((A,Q)=>{const B=Q.toString(),g=t+17+B.length,C=g+A.length-2;return E.push({s:g,e:C,d:-1}),t+=C+3,`import*as m${B} from${A};`}).join("")+`const module=importShim.w[${JSON.stringify(B)}],exports=new WebAssembly.Instance(module,{`+e.map((A,Q)=>`${A}:m${Q},`).join("")+"}).exports;"+C.a[1].map(A=>"default"===A?"export default exports."+A:`export const ${A}=exports.${A}`).join(";"),g}throw new Error(`Unknown Content-Type "${Q}"`)}g=`const s=new CSSStyleSheet();s.replaceSync(${JSON.stringify(await A.text())});export default s`}}try{C.a=function A(Q,B="@"){if(!l)return w.then(()=>A(Q));const g=(l.__heap_base.value||l.__heap_base)+4*Q.length+-l.memory.buffer.byteLength;if(g>0&&l.memory.grow(Math.ceil(g/65536)),function(A,Q){const B=A.length;let g=0;for(;g<B;)Q[g]=A.charCodeAt(g++)}(Q,new Uint16Array(l.memory.buffer,l.sa(Q.length),Q.length+1)),!l.parse())throw Object.assign(new Error(`Parse error ${B}:${Q.slice(0,l.e()).split("\n").length}:${l.e()-Q.lastIndexOf("\n",l.e()-1)}`),{idx:l.e()});const C=[],E=[];for(;l.ri();)C.push({s:l.is(),e:l.ie(),d:l.id()});for(;l.re();)E.push(Q.slice(l.es(),l.ee()));return[C,E]}(g,C.u)}catch(A){console.warn(A),C.a=[[],[]]}return C.S=g,C.a[0].filter(A=>-1===A.d).map(A=>g.slice(A.s,A.e))})(),C.L=C.f.then(async A=>{C.d=await Promise.all(A.map(async A=>{const B=Q(await N(A,C.r||C.u));return await B.f,B}))}),C))}(Q,g),e={};await async function A(Q,B){if(!Q.b&&!B[Q.u])return B[Q.u]=1,await Q.L,Promise.all(Q.d.map(Q=>A(Q,B)))}(E,e),U=void 0,function A(Q,g){if(Q.b||!g[Q.u])return;g[Q.u]=0;for(const B of Q.d)A(B,g);const C=Q.S;let E=D&&U?`import '${U}';`:"";const[e]=Q.a;if(e.length){let A=0,g=0;for(const{s:t,e:I,d:i}of e)if(-1===i){const e=Q.d[g++];let i=e.b;if(i){if(e.s){E+=C.slice(A,t-1)+"/*"+C.slice(t-1,I+1)+"*/"+C.slice(t-1,t)+i+C[I]+`;import*as m$_${g} from'${e.b}';import{u$_ as u$_${g}}from'${e.s}';u$_${g}(m$_${g})`,A=I+1,e.s=void 0;continue}}else(i=e.s)||(i=e.s=B(`export function u$_(m){${e.a[1].map(A=>"default"===A?"$_default=m.default":`${A}=m.${A}`).join(",")}}${e.a[1].map(A=>"default"===A?"let $_default;export{$_default as default}":"export let "+A).join(";")}\n//# sourceURL=${e.r}?cycle`));E+=C.slice(A,t-1)+"/*"+C.slice(t-1,I+1)+"*/"+C.slice(t-1,t)+i,A=I}else-2===i?(H[Q.r]={url:Q.r},E+=C.slice(A,t)+"importShim.m["+JSON.stringify(Q.r)+"]",A=I):(E+=C.slice(A,i+6)+"Shim("+C.slice(t,I)+", "+JSON.stringify(Q.r),A=I);E+=C.slice(A)}else E+=C;let t="";const I=E.lastIndexOf("//# sourceMappingURL=");if(I>-1){const A=E.indexOf("\n",I);t="\n//# sourceMappingURL="+i(E.slice(I,A>-1?A:void 0).slice(21),Q.r)}Q.b=U=B(E+t+"\n//# sourceURL="+Q.r),Q.S=void 0}(E,e);const t=await C(E.b);return E.s&&(await C(E.s)).u$_(t),t}async function d(A,B){return m(await N(A,B||Q))}self.importShim=d;const H={},u={},D=navigator.userAgent.match(/Edge\/\d\d\.\d+$/);let U,L;if(Object.defineProperties(d,{map:{value:I,writable:!0},m:{value:H},w:{value:u},l:{value:void 0,writable:!0},e:{value:void 0,writable:!0}}),d.fetch=A=>fetch(A),g){for(const A of document.querySelectorAll('script[type="importmap-shim"][src]'))A._f=fetch(A.src);for(const A of document.querySelectorAll('script[type="module-shim"]'))m(A.src||`${Q}?${h++}`,A.src?null:A.innerHTML)}async function N(B,C){if(!L&&(L=A,g))for(const A of document.querySelectorAll('script[type="importmap-shim"]'))L=L.then(async()=>{d.map=await n(A.src?await(await(A._f||fetch(A.src))).json():JSON.parse(A.innerHTML),A.src||Q,d.map)});return await L,f(d.map,t(B,C)||B,C)||function(A,Q){throw Error("Unable to resolve specifier '"+A+(Q?"' from "+Q:"'"))}(B,C)}self.WorkerShim=class{constructor(A,g={}){if("module"!==g.type)return new Worker(A,g);if(!E)throw new Error("es-module-shims.js must be loaded with a script tag for WorkerShim support.");g.importMap=g.importMap||I;const C=B(`importScripts('${E}');importShim.map=${JSON.stringify(g.importMap)};importShim('${new URL(A,Q).href}').catch(e=>setTimeout(()=>{throw e}))`);return new Worker(C,Object.assign({},g,{type:void 0}))}}}();