try{self["workbox:core:5.1.3"]&&at()}catch(e){}class U_ extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s})(e,t)),this.name=e,this.details=t}}const K_=new Set;function Q_(e){K_.add(e)}const $_={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},J_=e=>[$_.prefix,e,$_.suffix].filter(e=>e&&e.length>0).join("-"),Z_={updateDetails:e=>{(e=>{for(const t of Object.keys($_))e(t)})(t=>{"string"==typeof e[t]&&($_[t]=e[t])})},getGoogleAnalyticsName:e=>e||J_($_.googleAnalytics),getPrecacheName:e=>e||J_($_.precache),getPrefix:()=>$_.prefix,getRuntimeName:e=>e||J_($_.runtime),getSuffix:()=>$_.suffix};async function ew(){for(const e of K_)await e()}const tw=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),sw=(e,t)=>e.filter(e=>t in e),nw=async({request:e,mode:t,plugins:s=[]})=>{const n=sw(s,"cacheKeyWillBeUsed");let a=e;for(const e of n)a=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:a}),"string"==typeof a&&(a=new Request(a));return a},aw=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:a=[]})=>{const r=await self.caches.open(e),i=await nw({plugins:a,request:t,mode:"read"});let o=await r.match(i,n);for(const t of a)if("cachedResponseWillBeUsed"in t){const a=t.cachedResponseWillBeUsed;o=await a.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:o,request:i})}return o},rw={put:async({cacheName:e,request:t,response:s,event:n,plugins:a=[],matchOptions:r})=>{const i=await nw({plugins:a,request:t,mode:"write"});if(!s)throw new U_("cache-put-with-no-response",{url:tw(i.url)});const o=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let a=t,r=!1;for(const t of n)if("cacheWillUpdate"in t){r=!0;const n=t.cacheWillUpdate;if(a=await n.call(t,{request:e,response:a,event:s}),!a)break}return r||(a=a&&200===a.status?a:void 0),a||null})({event:n,plugins:a,response:s,request:i});if(!o)return;const c=await self.caches.open(e),h=sw(a,"cacheDidUpdate"),u=h.length>0?await aw({cacheName:e,matchOptions:r,request:i}):null;try{await c.put(i,o)}catch(e){throw"QuotaExceededError"===e.name&&await ew(),e}for(const t of h)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:u,newResponse:o,request:i})},match:aw};let iw,ow;function cw(){if(void 0===iw)try{new ReadableStream({start(){}}),iw=!0}catch(e){iw=!1}return iw}function hw(){if(void 0===ow){const e=new Response("");if("body"in e)try{new Response(e.body),ow=!0}catch(e){ow=!1}ow=!1}return ow}function uw(e){e.then(()=>{})}class lw{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:a,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",(i,o)=>{const c=i.objectStore(e),h=t?c.index(t):c,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(u.push(r?e:e.value),a&&u.length>=a?o(u):e.continue()):o(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,a)=>{const r=this._db.transaction(e,t);r.onabort=()=>a(r.error),r.oncomplete=()=>n(),s(r,e=>n(e))})}async _call(e,t,s,...n){return await this.transaction([t],s,(s,a)=>{const r=s.objectStore(t),i=r[e].apply(r,n);i.onsuccess=()=>a(i.result)})}close(){this._db&&(this._db.close(),this._db=null)}}lw.prototype.OPEN_TIMEOUT=2e3;const dw={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(dw))for(const s of t)s in IDBObjectStore.prototype&&(lw.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});class pw{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const fw=async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})},gw={fetch:async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=sw(n,"fetchDidFail"),r=a.length>0?e.clone():null;try{for(const t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,a=e.clone();e=await n.call(t,{request:a,event:s})}}catch(e){throw new U_("plugin-error-request-will-fetch",{thrownError:e})}const i=e.clone();try{let a;a="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(a=await e.fetchDidSucceed.call(e,{event:s,request:i,response:a}));return a}catch(e){for(const t of a)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:r.clone(),request:i.clone()});throw e}}};function mw(e){return new Promise(t=>setTimeout(t,e))}async function _w(e){if(!e)return;let t=await self.clients.matchAll({type:"window"});const s=new Set(t.map(e=>e.id));let n;const a=performance.now();for(;performance.now()-a<2e3&&(t=await self.clients.matchAll({type:"window"}),n=t.find(t=>e?t.id===e:!s.has(t.id)),!n);)await mw(100);return n}var ww=Object.freeze({__proto__:null,assert:null,cacheNames:Z_,cacheWrapper:rw,canConstructReadableStream:cw,canConstructResponseFromBodyStream:hw,dontWaitFor:uw,DBWrapper:lw,Deferred:pw,deleteDatabase:fw,executeQuotaErrorCallbacks:ew,fetchWrapper:gw,getFriendlyURL:tw,logger:null,resultingClientExists:_w,timeout:mw,WorkboxError:U_});const yw={get googleAnalytics(){return Z_.getGoogleAnalyticsName()},get precache(){return Z_.getPrecacheName()},get prefix(){return Z_.getPrefix()},get runtime(){return Z_.getRuntimeName()},get suffix(){return Z_.getSuffix()}};async function Rw(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=t?t(n):n,r=hw()?s.body:await s.blob();return new Response(r,a)}var qw=Object.freeze({__proto__:null,_private:ww,cacheNames:yw,clientsClaim:function(){self.addEventListener("activate",()=>self.clients.claim())},copyResponse:Rw,registerQuotaErrorCallback:Q_,setCacheNameDetails:function(e){Z_.updateDetails(e)},skipWaiting:function(){self.addEventListener("install",()=>self.skipWaiting())}});try{self["workbox:precaching:5.1.3"]&&at()}catch(e){}const vw=[],bw={get:()=>vw,add(e){vw.push(...e)}};function xw(e){if(!e)throw new U_("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new U_("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),a=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:a.href}}class Nw{constructor(e){this._cacheName=Z_.getPrecacheName(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=xw(s),a="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new U_("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new U_("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,a),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],a=await self.caches.open(this._cacheName),r=await a.keys(),i=new Set(r.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)i.has(t)?n.push(e):s.push({cacheKey:t,url:e});const o=s.map(({cacheKey:s,url:n})=>{const a=this._cacheKeysToIntegrities.get(s),r=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:r,event:e,integrity:a,plugins:t,url:n})});return await Promise.all(o),{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:e,url:t,cacheMode:s,event:n,plugins:a,integrity:r}){const i=new Request(t,{integrity:r,cache:s,credentials:"same-origin"});let o,c=await gw.fetch({event:n,plugins:a,request:i});for(const e of a||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:n,request:i,response:c}):c.status<400))throw new U_("bad-precaching-response",{url:t,status:c.status});c.redirected&&(c=await Rw(c)),await rw.put({event:n,plugins:a,response:c,request:e===t?i:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this._cacheName)).match(s)}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new U_("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(s){if(e)return fetch(t);throw s}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new U_("non-precached-url",{url:e});const s=this.createHandler(t),n=new Request(e);return()=>s({request:n})}}let Uw;const Ow=()=>(Uw||(Uw=new Nw),Uw);let Cw=!1;function Ew(e){Cw||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const a=Z_.getPrecacheName();self.addEventListener("fetch",r=>{const i=((e,t)=>{const s=Ow().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}})(r.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return;let o=self.caches.open(a).then(e=>e.match(i)).then(e=>e||fetch(i));r.respondWith(o)})})(e),Cw=!0)}const Sw=e=>{const t=Ow(),s=bw.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},Tw=e=>{const t=Ow();e.waitUntil(t.activate())};function Pw(e){Ow().addToCacheList(e),e.length>0&&(self.addEventListener("install",Sw),self.addEventListener("activate",Tw))}var kw=Object.freeze({__proto__:null,addPlugins:function(e){bw.add(e)},addRoute:Ew,cleanupOutdatedCaches:function(){self.addEventListener("activate",e=>{const t=Z_.getPrecacheName();e.waitUntil((async(e,t="-precache-")=>{const s=(await self.caches.keys()).filter(s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e);return await Promise.all(s.map(e=>self.caches.delete(e))),s})(t).then(e=>{}))})},createHandler:function(e=!0){return Ow().createHandler(e)},createHandlerBoundToURL:function(e){return Ow().createHandlerBoundToURL(e)},getCacheKeyForURL:function(e){return Ow().getCacheKeyForURL(e)},matchPrecache:function(e){return Ow().matchPrecache(e)},precache:Pw,precacheAndRoute:function(e,t){Pw(e),Ew(t)},PrecacheController:Nw});try{self["workbox:background-sync:5.1.3"]&&at()}catch(e){}class Lw{constructor(e){this._queueName=e,this._db=new lw("workbox-background-sync",3,{onupgradeneeded:this._upgradeDb})}async pushEntry(e){delete e.id,e.queueName=this._queueName,await this._db.add("requests",e)}async unshiftEntry(e){const[t]=await this._db.getAllMatching("requests",{count:1});t?e.id=t.id-1:delete e.id,e.queueName=this._queueName,await this._db.add("requests",e)}async popEntry(){return this._removeEntry({direction:"prev"})}async shiftEntry(){return this._removeEntry({direction:"next"})}async getAll(){return await this._db.getAllMatching("requests",{index:"queueName",query:IDBKeyRange.only(this._queueName)})}async deleteEntry(e){await this._db.delete("requests",e)}async _removeEntry({direction:e}){const[t]=await this._db.getAllMatching("requests",{direction:e,index:"queueName",query:IDBKeyRange.only(this._queueName),count:1});if(t)return await this.deleteEntry(t.id),t}_upgradeDb(e){const t=e.target.result;e.oldVersion>0&&e.oldVersion<3&&t.objectStoreNames.contains("requests")&&t.deleteObjectStore("requests"),t.createObjectStore("requests",{autoIncrement:!0,keyPath:"id"}).createIndex("queueName","queueName",{unique:!1})}}const Dw=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class Aw{constructor(e){"navigate"===e.mode&&(e.mode="same-origin"),this._requestData=e}static async fromRequest(e){const t={url:e.url,headers:{}};"GET"!==e.method&&(t.body=await e.clone().arrayBuffer());for(const[s,n]of e.headers.entries())t.headers[s]=n;for(const s of Dw)void 0!==e[s]&&(t[s]=e[s]);return new Aw(t)}toObject(){const e=Object.assign({},this._requestData);return e.headers=Object.assign({},this._requestData.headers),e.body&&(e.body=e.body.slice(0)),e}toRequest(){return new Request(this._requestData.url,this._requestData)}clone(){return new Aw(this.toObject())}}const Kw=new Set,jw=e=>{const t={request:new Aw(e.requestData).toRequest(),timestamp:e.timestamp};return e.metadata&&(t.metadata=e.metadata),t};class Mw{constructor(e,{onSync:t,maxRetentionTime:s}={}){if(this._syncInProgress=!1,this._requestsAddedDuringSync=!1,Kw.has(e))throw new U_("duplicate-queue-name",{name:e});Kw.add(e),this._name=e,this._onSync=t||this.replayRequests,this._maxRetentionTime=s||10080,this._queueStore=new Lw(this._name),this._addSyncListener()}get name(){return this._name}async pushRequest(e){await this._addRequest(e,"push")}async unshiftRequest(e){await this._addRequest(e,"unshift")}async popRequest(){return this._removeRequest("pop")}async shiftRequest(){return this._removeRequest("shift")}async getAll(){const e=await this._queueStore.getAll(),t=Date.now(),s=[];for(const n of e){const e=60*this._maxRetentionTime*1e3;t-n.timestamp>e?await this._queueStore.deleteEntry(n.id):s.push(jw(n))}return s}async _addRequest({request:e,metadata:t,timestamp:s=Date.now()},n){const a={requestData:(await Aw.fromRequest(e.clone())).toObject(),timestamp:s};t&&(a.metadata=t),await this._queueStore[n+"Entry"](a),this._syncInProgress?this._requestsAddedDuringSync=!0:await this.registerSync()}async _removeRequest(e){const t=Date.now(),s=await this._queueStore[e+"Entry"]();if(s){const n=60*this._maxRetentionTime*1e3;return t-s.timestamp>n?this._removeRequest(e):jw(s)}}async replayRequests(){let e;for(;e=await this.shiftRequest();)try{await fetch(e.request.clone())}catch(t){throw await this.unshiftRequest(e),new U_("queue-replay-failed",{name:this._name})}}async registerSync(){if("sync"in self.registration)try{await self.registration.sync.register("workbox-background-sync:"+this._name)}catch(e){}}_addSyncListener(){"sync"in self.registration?self.addEventListener("sync",e=>{if(e.tag==="workbox-background-sync:"+this._name){const t=async()=>{let t;this._syncInProgress=!0;try{await this._onSync({queue:this})}catch(e){throw t=e,t}finally{!this._requestsAddedDuringSync||t&&!e.lastChance||await this.registerSync(),this._syncInProgress=!1,this._requestsAddedDuringSync=!1}};e.waitUntil(t())}}):this._onSync({queue:this})}static get _queueNames(){return Kw}}var Iw=Object.freeze({__proto__:null,Queue:Mw,BackgroundSyncPlugin:class{constructor(e,t){this.fetchDidFail=async({request:e})=>{await this._queue.pushRequest({request:e})},this._queue=new Mw(e,t)}}});try{self["workbox:broadcast-update:5.1.3"]&&at()}catch(e){}const Ww=(e,t,s)=>!s.some(s=>e.headers.has(s)&&t.headers.has(s))||s.every(s=>{const n=e.headers.has(s)===t.headers.has(s),a=e.headers.get(s)===t.headers.get(s);return n&&a}),Hw=["content-length","etag","last-modified"],Fw=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function Bw(e){return{cacheName:e.cacheName,updatedURL:e.request.url}}class zw{constructor({headersToCheck:e,generatePayload:t}={}){this._headersToCheck=e||Hw,this._generatePayload=t||Bw}async notifyIfUpdated(e){if(e.oldResponse&&!Ww(e.oldResponse,e.newResponse,this._headersToCheck)){const t={type:"CACHE_UPDATED",meta:"workbox-broadcast-update",payload:this._generatePayload(e)};if("navigate"===e.request.mode){let t;e.event instanceof FetchEvent&&(t=e.event.resultingClientId),await _w(t)&&!Fw||await mw(3500)}const s=await self.clients.matchAll({type:"window"});for(const e of s)e.postMessage(t)}}}var Qw=Object.freeze({__proto__:null,BroadcastCacheUpdate:zw,BroadcastUpdatePlugin:class{constructor(e){this.cacheDidUpdate=async e=>{uw(this._broadcastUpdate.notifyIfUpdated(e))},this._broadcastUpdate=new zw(e)}},responsesAreSame:Ww});try{self["workbox:cacheable-response:5.1.3"]&&at()}catch(e){}class Gw{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(t=>e.headers.get(t)===this._headers[t])),t}}var Vw=Object.freeze({__proto__:null,CacheableResponse:Gw,CacheableResponsePlugin:class{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new Gw(e)}}});try{self["workbox:expiration:5.1.3"]&&at()}catch(e){}const $w=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class Jw{constructor(e){this._cacheName=e,this._db=new lw("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),fw(this._cacheName)}async setTimestamp(e,t){const s={url:e=$w(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put("cache-entries",s)}async getTimestamp(e){return(await this._db.get("cache-entries",this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction("cache-entries","readwrite",(s,n)=>{const a=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let i=0;a.onsuccess=()=>{const s=a.result;if(s){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&i>=t?r.push(s.value):i++),s.continue()}else n(r)}}),n=[];for(const e of s)await this._db.delete("cache-entries",e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+$w(e)}}class Xw{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new Jw(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,uw(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){return!!this._maxAgeSeconds&&await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}var Yw=Object.freeze({__proto__:null,CacheExpiration:Xw,ExpirationPlugin:class{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);uw(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&Q_(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===Z_.getRuntimeName())throw new U_("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new Xw(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}});try{self["workbox:navigation-preload:5.1.3"]&&at()}catch(e){}function Zw(){return Boolean(self.registration&&self.registration.navigationPreload)}var eR=Object.freeze({__proto__:null,disable:function(){Zw()&&self.addEventListener("activate",e=>{e.waitUntil(self.registration.navigationPreload.disable().then(()=>{}))})},enable:function(e){Zw()&&self.addEventListener("activate",t=>{t.waitUntil(self.registration.navigationPreload.enable().then(()=>{e&&self.registration.navigationPreload.setHeaderValue(e)}))})},isSupported:Zw});try{self["workbox:range-requests:5.1.3"]&&at()}catch(e){}async function tR(e,t){try{if(206===t.status)return t;const s=e.headers.get("range");if(!s)throw new U_("no-range-header");const n=function(e){const t=e.trim().toLowerCase();if(!t.startsWith("bytes="))throw new U_("unit-must-be-bytes",{normalizedRangeHeader:t});if(t.includes(","))throw new U_("single-range-only",{normalizedRangeHeader:t});const s=/(\d*)-(\d*)/.exec(t);if(!s||!s[1]&&!s[2])throw new U_("invalid-range-values",{normalizedRangeHeader:t});return{start:""===s[1]?void 0:Number(s[1]),end:""===s[2]?void 0:Number(s[2])}}(s),a=await t.blob(),r=function(e,t,s){const n=e.size;if(s&&s>n||t&&t<0)throw new U_("range-not-satisfiable",{size:n,end:s,start:t});let a,r;return void 0!==t&&void 0!==s?(a=t,r=s+1):void 0!==t&&void 0===s?(a=t,r=n):void 0!==s&&void 0===t&&(a=n-s,r=n),{start:a,end:r}}(a,n.start,n.end),i=a.slice(r.start,r.end),o=i.size,c=new Response(i,{status:206,statusText:"Partial Content",headers:t.headers});return c.headers.set("Content-Length",String(o)),c.headers.set("Content-Range",`bytes ${r.start}-${r.end-1}/`+a.size),c}catch(e){return new Response("",{status:416,statusText:"Range Not Satisfiable"})}}var sR=Object.freeze({__proto__:null,createPartialResponse:tR,RangeRequestsPlugin:class{constructor(){this.cachedResponseWillBeUsed=async({request:e,cachedResponse:t})=>t&&e.headers.has("range")?await tR(e,t):t}}});try{self["workbox:routing:5.1.3"]&&at()}catch(e){}const nR=e=>e&&"object"==typeof e?e:{handle:e};class Ai{constructor(e,t,s="GET"){this.handler=nR(t),this.match=e,this.method=s}}class aR extends Ai{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class vi{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:a}=this.findMatchingRoute({url:s,request:e,event:t});let r,i=a&&a.handler;if(!i&&this._defaultHandler&&(i=this._defaultHandler),i){try{r=i.handle({url:s,request:e,event:t,params:n})}catch(e){r=Promise.reject(e)}return r instanceof Promise&&this._catchHandler&&(r=r.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),r}}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const a of n){let n;const r=a.match({url:e,request:t,event:s});if(r)return n=r,(Array.isArray(r)&&0===r.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"==typeof r)&&(n=void 0),{route:a,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=nR(e)}setCatchHandler(e){this._catchHandler=nR(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new U_("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new U_("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let rR;const iR=()=>(rR||(rR=new vi,rR.addFetchListener(),rR.addCacheListener()),rR);var oR=Object.freeze({__proto__:null,NavigationRoute:class extends Ai{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super(e=>this._match(e),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const s=e.pathname+e.search;for(const e of this._denylist)if(e.test(s))return!1;return!!this._allowlist.some(e=>e.test(s))}},RegExpRoute:aR,registerRoute:function(e,t,s){let n;if("string"==typeof e){const a=new URL(e,location.href);n=new Ai(({url:e})=>e.href===a.href,t,s)}else if(e instanceof RegExp)n=new aR(e,t,s);else if("function"==typeof e)n=new Ai(e,t,s);else{if(!(e instanceof Ai))throw new U_("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return iR().registerRoute(n),n},Route:Ai,Router:vi,setCatchHandler:function(e){iR().setCatchHandler(e)},setDefaultHandler:function(e){iR().setDefaultHandler(e)}});try{self["workbox:strategies:5.1.3"]&&at()}catch(e){}const cR={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};var hR=Object.freeze({__proto__:null,CacheFirst:class{constructor(e={}){this._cacheName=Z_.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));let s,n=await rw.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(!n)try{n=await this._getFromNetwork(t,e)}catch(e){s=e}if(!n)throw new U_("no-response",{url:t.url,error:s});return n}async _getFromNetwork(e,t){const s=await gw.fetch({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=s.clone(),a=rw.put({cacheName:this._cacheName,request:e,response:n,event:t,plugins:this._plugins});if(t)try{t.waitUntil(a)}catch(e){}return s}},CacheOnly:class{constructor(e={}){this._cacheName=Z_.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const s=await rw.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(!s)throw new U_("no-response",{url:t.url});return s}},NetworkFirst:class{constructor(e={}){if(this._cacheName=Z_.getRuntimeName(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[cR,...e.plugins]}else this._plugins=[cR];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){const s=[];"string"==typeof t&&(t=new Request(t));const n=[];let a;if(this._networkTimeoutSeconds){const{id:r,promise:i}=this._getTimeoutPromise({request:t,event:e,logs:s});a=r,n.push(i)}const r=this._getNetworkPromise({timeoutId:a,request:t,event:e,logs:s});n.push(r);let i=await Promise.race(n);if(i||(i=await r),!i)throw new U_("no-response",{url:t.url});return i}_getTimeoutPromise({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:s}))},1e3*this._networkTimeoutSeconds)}),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,event:n}){let a,r;try{r=await gw.fetch({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){a=e}if(e&&clearTimeout(e),a||!r)r=await this._respondFromCache({request:t,event:n});else{const s=r.clone(),a=rw.put({cacheName:this._cacheName,request:t,response:s,event:n,plugins:this._plugins});if(n)try{n.waitUntil(a)}catch(e){}}return r}_respondFromCache({event:e,request:t}){return rw.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}},NetworkOnly:class{constructor(e={}){this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions}async handle({event:e,request:t}){let s,n;"string"==typeof t&&(t=new Request(t));try{n=await gw.fetch({request:t,event:e,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){s=e}if(!n)throw new U_("no-response",{url:t.url,error:s});return n}},StaleWhileRevalidate:class{constructor(e={}){if(this._cacheName=Z_.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[cR,...e.plugins]}else this._plugins=[cR];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const s=this._getFromNetwork({request:t,event:e});let n,a=await rw.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(a){if(e)try{e.waitUntil(s)}catch(n){}}else try{a=await s}catch(e){n=e}if(!a)throw new U_("no-response",{url:t.url,error:n});return a}async _getFromNetwork({request:e,event:t}){const s=await gw.fetch({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=rw.put({cacheName:this._cacheName,request:e,response:s.clone(),event:t,plugins:this._plugins});if(t)try{t.waitUntil(n)}catch(e){}return s}}});try{self["workbox:streams:5.1.3"]&&at()}catch(e){}function uR(e){const t=e.map(e=>Promise.resolve(e).then(e=>function(e){return e instanceof Response?e.body.getReader():e instanceof ReadableStream?e.getReader():new Response(e).body.getReader()}(e))),s=new pw;let n=0;const a=new ReadableStream({pull(e){return t[n].then(e=>e.read()).then(a=>{if(a.done)return n++,n>=t.length?(e.close(),void s.resolve()):this.pull(e);e.enqueue(a.value)}).catch(e=>{throw s.reject(e),e})},cancel(){s.resolve()}});return{done:s.promise,stream:a}}function lR(e={}){const t=new Headers(e);return t.has("content-type")||t.set("content-type","text/html"),t}function dR(e,t){const{done:s,stream:n}=uR(e),a=lR(t);return{done:s,response:new Response(n,{headers:a})}}function pR(){return cw()}var fR=Object.freeze({__proto__:null,concatenate:uR,concatenateToResponse:dR,isSupported:pR,strategy:function(e,t){return async({event:s,request:n,url:a,params:r})=>{const i=e.map(e=>Promise.resolve(e({event:s,request:n,url:a,params:r})));if(pR()){const{done:e,response:n}=dR(i,t);return s&&s.waitUntil(e),n}const o=i.map(async e=>{const t=await e;return t instanceof Response?t.blob():new Response(t).blob()}),c=await Promise.all(o),h=lR(t);return new Response(new Blob(c),{headers:h})}}}),gt={Core:qw,Precaching:kw,BackgroundSync:Iw,BroadcastUpdate:Qw,CacheableResponse:Vw,Expiration:Yw,NavigationPreload:eR,RangeRequests:sR,Routing:oR,Strategies:hR,Streams:fR};export default gt;export{Iw as BackgroundSync,Qw as BroadcastUpdate,Vw as CacheableResponse,qw as Core,Yw as Expiration,eR as NavigationPreload,kw as Precaching,sR as RangeRequests,oR as Routing,hR as Strategies,fR as Streams};