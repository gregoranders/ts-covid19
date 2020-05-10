!function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=6)}([function(e,t,s){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:routing:5.1.3"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:strategies:5.1.3"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:expiration:5.1.3"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:cacheable-response:5.1.3"]&&_()}catch(e){}},function(e,t,s){"use strict";s.r(t);s(1);const n=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class a extends Error{constructor(e,t){super(n(e,t)),this.name=e,this.details=t}}const r=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");s(5);class i{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(t=>e.headers.get(t)===this._headers[t])),t}}class c{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new i(e)}}function o(e){e.then(()=>{})}class h{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:a,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",(i,c)=>{const o=i.objectStore(e),h=t?o.index(t):o,l=[],u=h.openCursor(s,n);u.onsuccess=()=>{const e=u.result;e?(l.push(r?e:e.value),a&&l.length>=a?c(l):e.continue()):c(l)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,a)=>{const r=this._db.transaction(e,t);r.onabort=()=>a(r.error),r.oncomplete=()=>n(),s(r,e=>n(e))})}async _call(e,t,s,...n){return await this.transaction([t],s,(s,a)=>{const r=s.objectStore(t),i=r[e].apply(r,n);i.onsuccess=()=>a(i.result)})}close(){this._db&&(this._db.close(),this._db=null)}}h.prototype.OPEN_TIMEOUT=2e3;const l={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(l))for(const s of t)s in IDBObjectStore.prototype&&(h.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});s(4);const u=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class d{constructor(e){this._cacheName=e,this._db=new h("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this._cacheName)}async setTimestamp(e,t){const s={url:e=u(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put("cache-entries",s)}async getTimestamp(e){return(await this._db.get("cache-entries",this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction("cache-entries","readwrite",(s,n)=>{const a=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let i=0;a.onsuccess=()=>{const s=a.result;if(s){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&i>=t?r.push(s.value):i++),s.continue()}else n(r)}}),n=[];for(const e of s)await this._db.delete("cache-entries",e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+u(e)}}class p{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new d(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,o(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}const f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},g=e=>[f.prefix,e,f.suffix].filter(e=>e&&e.length>0).join("-"),m=e=>e||g(f.precache),w=e=>e||g(f.runtime),_=new Set;class y{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);o(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){0}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),_.add(t))}_getCacheExpiration(e){if(e===w())throw new a("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new p(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}s(0);const v=[],R={get:()=>v,add(e){v.push(...e)}};const x=(e,t)=>e.filter(e=>t in e),b=async({request:e,mode:t,plugins:s=[]})=>{const n=x(s,"cacheKeyWillBeUsed");let a=e;for(const e of n)a=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:a}),"string"==typeof a&&(a=new Request(a));return a},q=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:a=[]})=>{const r=await self.caches.open(e),i=await b({plugins:a,request:t,mode:"read"});let c=await r.match(i,n);for(const t of a)if("cachedResponseWillBeUsed"in t){const a=t.cachedResponseWillBeUsed;c=await a.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:c,request:i})}return c},U=async({cacheName:e,request:t,response:s,event:n,plugins:i=[],matchOptions:c})=>{const o=await b({plugins:i,request:t,mode:"write"});if(!s)throw new a("cache-put-with-no-response",{url:r(o.url)});const h=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let a=t,r=!1;for(const t of n)if("cacheWillUpdate"in t){r=!0;const n=t.cacheWillUpdate;if(a=await n.call(t,{request:e,response:a,event:s}),!a)break}return r||(a=a&&200===a.status?a:void 0),a||null})({event:n,plugins:i,response:s,request:o});if(!h)return void 0;const l=await self.caches.open(e),u=x(i,"cacheDidUpdate"),d=u.length>0?await q({cacheName:e,matchOptions:c,request:o}):null;try{await l.put(o,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of _)await e()}(),e}for(const t of u)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:d,newResponse:h,request:o})},N=q,E=async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const r=x(n,"fetchDidFail"),i=r.length>0?e.clone():null;try{for(const t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,a=e.clone();e=await n.call(t,{request:a,event:s})}}catch(e){throw new a("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let a;a="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(a=await e.fetchDidSucceed.call(e,{event:s,request:c,response:a}));return a}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:i.clone(),request:c.clone()});throw e}};let T;async function L(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=t?t(n):n,r=function(){if(void 0===T){const e=new Response("");if("body"in e)try{new Response(e.body),T=!0}catch(e){T=!1}T=!1}return T}()?s.body:await s.blob();return new Response(r,a)}function O(e){if(!e)throw new a("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new a("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}class S{constructor(e){this._cacheName=m(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=O(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new a("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new a("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],a=await self.caches.open(this._cacheName),r=await a.keys(),i=new Set(r.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)i.has(t)?n.push(e):s.push({cacheKey:t,url:e});const c=s.map(({cacheKey:s,url:n})=>{const a=this._cacheKeysToIntegrities.get(s),r=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:r,event:e,integrity:a,plugins:t,url:n})});return await Promise.all(c),{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:e,url:t,cacheMode:s,event:n,plugins:r,integrity:i}){const c=new Request(t,{integrity:i,cache:s,credentials:"same-origin"});let o,h=await E({event:n,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:n,request:c,response:h}):h.status<400))throw new a("bad-precaching-response",{url:t,status:h.status});h.redirected&&(h=await L(h)),await U({event:n,plugins:r,response:h,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this._cacheName)).match(s)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new a("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(s){if(e)return fetch(t);throw s}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new a("non-precached-url",{url:e});const s=this.createHandler(t),n=new Request(e);return()=>s({request:n})}}let C;const M=()=>(C||(C=new S),C);const K=(e,t)=>{const s=M().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let k=!1;function A(e){k||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const a=m();self.addEventListener("fetch",r=>{const i=K(r.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return void 0;let c=self.caches.open(a).then(e=>e.match(i)).then(e=>e||fetch(i));r.respondWith(c)})})(e),k=!0)}const W=e=>{const t=M(),s=R.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},I=e=>{const t=M();e.waitUntil(t.activate())};s(2);const P=e=>e&&"object"==typeof e?e:{handle:e};class j{constructor(e,t,s="GET"){this.handler=P(t),this.match=e,this.method=s}}class D extends j{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class F{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const{params:n,route:a}=this.findMatchingRoute({url:s,request:e,event:t});let r=a&&a.handler;if(!r&&this._defaultHandler&&(r=this._defaultHandler),!r)return void 0;let i;try{i=r.handle({url:s,request:e,event:t,params:n})}catch(e){i=Promise.reject(e)}return i instanceof Promise&&this._catchHandler&&(i=i.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),i}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const a of n){let n;const r=a.match({url:e,request:t,event:s});if(r)return n=r,(Array.isArray(r)&&0===r.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"==typeof r)&&(n=void 0),{route:a,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=P(e)}setCatchHandler(e){this._catchHandler=P(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new a("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new a("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let H;const B=()=>(H||(H=new F,H.addFetchListener(),H.addCacheListener()),H);function Q(e,t,s){let n;if("string"==typeof e){const a=new URL(e,location.href);0,n=new j(({url:e})=>e.href===a.href,t,s)}else if(e instanceof RegExp)n=new D(e,t,s);else if("function"==typeof e)n=new j(e,t,s);else{if(!(e instanceof j))throw new a("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return B().registerRoute(n),n}s(3);class G{constructor(e={}){this._cacheName=w(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));let s,n=await N({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(n)0;else{0;try{n=await this._getFromNetwork(t,e)}catch(e){s=e}0}if(!n)throw new a("no-response",{url:t.url,error:s});return n}async _getFromNetwork(e,t){const s=await E({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=s.clone(),a=U({cacheName:this._cacheName,request:e,response:n,event:t,plugins:this._plugins});if(t)try{t.waitUntil(a)}catch(e){0}return s}}const $={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class V{constructor(e={}){if(this._cacheName=w(e.cacheName),this._plugins=e.plugins||[],e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[$,...e.plugins]}else this._plugins=[$];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const s=this._getFromNetwork({request:t,event:e});let n,r=await N({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(r){if(e)try{e.waitUntil(s)}catch(n){0}}else{0;try{r=await s}catch(e){n=e}}if(!r)throw new a("no-response",{url:t.url,error:n});return r}async _getFromNetwork({request:e,event:t}){const s=await E({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=U({cacheName:this._cacheName,request:e,response:s.clone(),event:t,plugins:this._plugins});if(t)try{t.waitUntil(n)}catch(e){0}return s}}const J=location.hostname.endsWith(".app.local")||"localhost"===location.hostname;J&&console.debug("Service worker version 1.0.0 loading..."),self.addEventListener("activate",e=>{const t=m();e.waitUntil((async(e,t="-precache-")=>{const s=(await self.caches.keys()).filter(s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e);return await Promise.all(s.map(e=>self.caches.delete(e))),s})(t).then(e=>{}))});const z=[{'revision':'92963933d27c2e84edf9fc8ca5a2a25f','url':'assets/favicon/android-chrome-144x144.png'},{'revision':'9777c9df9a62d135bc2ae9432c04fae8','url':'assets/favicon/android-chrome-192x192.png'},{'revision':'f5323f831917c69aa159343c74083e2c','url':'assets/favicon/android-chrome-256x256.png'},{'revision':'172ce1875283a79ae0af8004f47bab49','url':'assets/favicon/android-chrome-36x36.png'},{'revision':'1976671274e62e6b175574c64117ecd1','url':'assets/favicon/android-chrome-384x384.png'},{'revision':'6eeed5a9fe79b5ca2623e6871a9278f5','url':'assets/favicon/android-chrome-48x48.png'},{'revision':'caabaae5a194d59c48b1474e0493a8ee','url':'assets/favicon/android-chrome-512x512.png'},{'revision':'afa7d3e0dc605f0127ea4ce4e68c2316','url':'assets/favicon/android-chrome-72x72.png'},{'revision':'ed22b2edfc9f0b9470c5dbbaf0fce155','url':'assets/favicon/android-chrome-96x96.png'},{'revision':'b12dcabbcc292742d1797577b8bc804a','url':'assets/favicon/apple-touch-icon-1024x1024.png'},{'revision':'56cedd5a4fb5281dc5db81f1634f58f8','url':'assets/favicon/apple-touch-icon-114x114.png'},{'revision':'9e058ada59e59855793e327c1b310e55','url':'assets/favicon/apple-touch-icon-120x120.png'},{'revision':'d4061951f3c0e03ce9ab1442c4ab7e28','url':'assets/favicon/apple-touch-icon-144x144.png'},{'revision':'8ee59a93c0329dc1b6108e42001f3e56','url':'assets/favicon/apple-touch-icon-152x152.png'},{'revision':'3680a43ebfc9f1afa4669ae80a3969ce','url':'assets/favicon/apple-touch-icon-167x167.png'},{'revision':'7694a314a778dd470d2be4658f8cc879','url':'assets/favicon/apple-touch-icon-180x180.png'},{'revision':'22df1fd6fdd24903692d0c4a43f6fd87','url':'assets/favicon/apple-touch-icon-57x57.png'},{'revision':'dfba8e05bedc5eacfa3a4e0242d447bb','url':'assets/favicon/apple-touch-icon-60x60.png'},{'revision':'2df3c9216eb35360e956d48e2c29c5d4','url':'assets/favicon/apple-touch-icon-72x72.png'},{'revision':'7684e01a2d0057de2ea5570e8968de38','url':'assets/favicon/apple-touch-icon-76x76.png'},{'revision':'7694a314a778dd470d2be4658f8cc879','url':'assets/favicon/apple-touch-icon-precomposed.png'},{'revision':'7694a314a778dd470d2be4658f8cc879','url':'assets/favicon/apple-touch-icon.png'},{'revision':'5986e58932aa21b0995e447d9e36e4d0','url':'assets/favicon/favicon-16x16.png'},{'revision':'184e641ca4e317be415af5170b8cc493','url':'assets/favicon/favicon-32x32.png'},{'revision':'6eeed5a9fe79b5ca2623e6871a9278f5','url':'assets/favicon/favicon-48x48.png'},{'revision':'ad1d435755d9f771a263a5bcebf64062','url':'assets/favicon/favicon.ico'},{'revision':'87069a6cc11ffbbd79456cd8251e6c7a','url':'assets/favicon/manifest.json'},{'revision':'fb0246378d5f575739e1fade2d42b3a0','url':'index.html'},{'revision':'5e0bd1c281a62a380d7a948085bfe2d1','url':'robots.txt'},{'revision':'dcd9ad1fb5e1bb1e3aac5a3994f3e174','url':'script/0-1e94a2e7.js'},{'revision':'7245f2bfebfd873879a568a6fd240ec4','url':'script/4-31bad04f.js'},{'revision':'8c1b523af4d079716debd45b2dc95b33','url':'script/5-4ad83c90.js'},{'revision':'d71551b0c2ef8d7a2989b4593817b501','url':'script/6-e936a7ec.js'},{'revision':'b231734c29b0b6b4a2e5141f76933fe0','url':'script/7-632a6037.js'},{'revision':'f9775fa28dec4069662b7ef0303f94e7','url':'script/main-4e9998c0.js'},{'revision':'372bcbd12b56e7616c59879def00dc05','url':'script/runtime-c75cc943.js'},{'revision':'b0e3ae8676b0b8ef842fe1ef816109d7','url':'script/vendor-5444a728.js'},{'revision':'151fa30c7d5f4855fa37dcd84c9d3b25','url':'styles/0-1e94a2e7.css'},{'revision':'96eb6a22d08e9e88fea09dbeb1b57127','url':'styles/5-4ad83c90.css'},{'revision':'3c7d2bf8136ad0016ff74b973819da5c','url':'styles/6-e936a7ec.css'},{'revision':'ad67887d139edfdeabccc5a6410107f7','url':'styles/main-4e9998c0.css'}];var X;J&&console.trace("Service Worker:: Assets that will be cached: ",z),function(e){M().addToCacheList(e),e.length>0&&(self.addEventListener("install",W),self.addEventListener("activate",I))}(z),A(X);const Y=(Z="/ts-covid19/index.html",M().createHandlerBoundToURL(Z));var Z;Q(new class extends j{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super(e=>this._match(e),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const s=e.pathname+e.search;for(const e of this._denylist)if(e.test(s))return!1;return!!this._allowlist.some(e=>e.test(s))}}(Y,{})),Q(/^https:\/\/fonts\.googleapis\.com/,new V({cacheName:"google-fonts-stylesheets"})),Q(/^https:\/\/fonts\.gstatic\.com/,new G({cacheName:"google-fonts-webfonts",plugins:[new c({statuses:[0,200]}),new y({maxAgeSeconds:31536e3,maxEntries:30,purgeOnQuotaError:!0})]})),Q(/^https:\/\/raw\.githubusercontent\.com/,new V({cacheName:"raw-githubusercontent-com"})),Q(/\.(?:js|css)$/,new V({cacheName:"app",plugins:[new c({statuses:[0,200]}),new y({maxAgeSeconds:86400,purgeOnQuotaError:!0})]})),Q(/\.(?:png|gif|jpg|jpeg|svg)$/,new G({cacheName:"images",plugins:[new y({maxEntries:250,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),self.addEventListener("message",e=>{e&&e.data&&e.data.type&&("GET_VERSION"===e.data.type&&(J&&console.debug("Service Worker:: Returning the service worker version: 1.0.0"),e.ports[0].postMessage("1.0.0")),"SKIP_WAITING"===e.data.type&&(J&&console.debug("Service Worker:: Skipping waiting..."),self.skipWaiting()),"CLIENTS_CLAIM"===e.data.type&&(J&&console.debug("Service Worker:: Claiming clients and cleaning old caches"),self.clients.claim()))})}]);