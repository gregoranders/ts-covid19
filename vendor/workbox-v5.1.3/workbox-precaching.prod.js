this.workbox=this.workbox||{},this.workbox.precaching=function(e,t,r,n,a,c){try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}const s=[],i={get:()=>s,add(e){s.push(...e)}};function o(e){if(!e)throw new a.WorkboxError("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:r}=e;if(!r)throw new a.WorkboxError("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(r,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(r,location.href),c=new URL(r,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:c.href}}class h{constructor(e){this.t=t.cacheNames.getPrecacheName(e),this.i=new Map,this.s=new Map,this.o=new Map}addToCacheList(e){const t=[];for(const r of e){"string"==typeof r?t.push(r):r&&void 0===r.revision&&t.push(r.url);const{cacheKey:e,url:n}=o(r),c="string"!=typeof r&&r.revision?"reload":"default";if(this.i.has(n)&&this.i.get(n)!==e)throw new a.WorkboxError("add-to-cache-list-conflicting-entries",{firstEntry:this.i.get(n),secondEntry:e});if("string"!=typeof r&&r.integrity){if(this.o.has(e)&&this.o.get(e)!==r.integrity)throw new a.WorkboxError("add-to-cache-list-conflicting-integrities",{url:n});this.o.set(e,r.integrity)}if(this.i.set(n,e),this.s.set(n,c),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const r=[],n=[],a=await self.caches.open(this.t),c=await a.keys(),s=new Set(c.map(e=>e.url));for(const[e,t]of this.i)s.has(t)?n.push(e):r.push({cacheKey:t,url:e});const i=r.map(({cacheKey:r,url:n})=>{const a=this.o.get(r),c=this.s.get(n);return this.h({cacheKey:r,cacheMode:c,event:e,integrity:a,plugins:t,url:n})});return await Promise.all(i),{updatedURLs:r.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.t),t=await e.keys(),r=new Set(this.i.values()),n=[];for(const a of t)r.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}async h({cacheKey:e,url:t,cacheMode:s,event:i,plugins:o,integrity:h}){const l=new Request(t,{integrity:h,cache:s,credentials:"same-origin"});let u,f=await n.fetchWrapper.fetch({event:i,plugins:o,request:l});for(const e of o||[])"cacheWillUpdate"in e&&(u=e);if(!(u?await u.cacheWillUpdate({event:i,request:l,response:f}):f.status<400))throw new a.WorkboxError("bad-precaching-response",{url:t,status:f.status});f.redirected&&(f=await c.copyResponse(f)),await r.cacheWrapper.put({event:i,plugins:o,response:f,request:e===t?l:new Request(e),cacheName:this.t,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.i}getCachedURLs(){return[...this.i.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.i.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r)return(await self.caches.open(this.t)).match(r)}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new a.WorkboxError("missing-precache-entry",{cacheName:this.t,url:t instanceof Request?t.url:t})}catch(r){if(e)return fetch(t);throw r}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new a.WorkboxError("non-precached-url",{url:e});const r=this.createHandler(t),n=new Request(e);return()=>r({request:n})}}let l;const u=()=>(l||(l=new h),l);let f=!1;function d(e){f||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:r="index.html",cleanURLs:n=!0,urlManipulation:a}={})=>{const c=t.cacheNames.getPrecacheName();self.addEventListener("fetch",t=>{const s=((e,t)=>{const r=u().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:r,cleanURLs:n,urlManipulation:a}={}){const c=new URL(e,location.href);c.hash="",yield c.href;const s=function(e,t=[]){for(const r of[...e.searchParams.keys()])t.some(e=>e.test(r))&&e.searchParams.delete(r);return e}(c,t);if(yield s.href,r&&s.pathname.endsWith("/")){const e=new URL(s.href);e.pathname+=r,yield e.href}if(n){const e=new URL(s.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:c});for(const t of e)yield t.href}}(e,t)){const e=r.get(n);if(e)return e}})(t.request.url,{cleanURLs:n,directoryIndex:r,ignoreURLParametersMatching:e,urlManipulation:a});if(!s)return;let i=self.caches.open(c).then(e=>e.match(s)).then(e=>e||fetch(s));t.respondWith(i)})})(e),f=!0)}const p=e=>{const t=u(),r=i.get();e.waitUntil(t.install({event:e,plugins:r}).catch(e=>{throw e}))},w=e=>{const t=u();e.waitUntil(t.activate())};function g(e){u().addToCacheList(e),e.length>0&&(self.addEventListener("install",p),self.addEventListener("activate",w))}return e.PrecacheController=h,e.addPlugins=function(e){i.add(e)},e.addRoute=d,e.cleanupOutdatedCaches=function(){self.addEventListener("activate",e=>{const r=t.cacheNames.getPrecacheName();e.waitUntil((async(e,t="-precache-")=>{const r=(await self.caches.keys()).filter(r=>r.includes(t)&&r.includes(self.registration.scope)&&r!==e);return await Promise.all(r.map(e=>self.caches.delete(e))),r})(r).then(e=>{}))})},e.createHandler=function(e=!0){return u().createHandler(e)},e.createHandlerBoundToURL=function(e){return u().createHandlerBoundToURL(e)},e.getCacheKeyForURL=function(e){return u().getCacheKeyForURL(e)},e.matchPrecache=function(e){return u().matchPrecache(e)},e.precache=g,e.precacheAndRoute=function(e,t){g(e),d(t)},e}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core);