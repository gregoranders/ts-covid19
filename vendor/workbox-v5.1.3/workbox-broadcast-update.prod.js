this.workbox=this.workbox||{},this.workbox.broadcastUpdate=function(e,t,a,s){try{self["workbox:broadcast-update:5.1.3"]&&_()}catch(e){}const o=(e,t,a)=>!a.some(a=>e.headers.has(a)&&t.headers.has(a))||a.every(a=>{const s=e.headers.has(a)===t.headers.has(a),o=e.headers.get(a)===t.headers.get(a);return s&&o}),r=["content-length","etag","last-modified"],n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function i(e){return{cacheName:e.cacheName,updatedURL:e.request.url}}class c{constructor({headersToCheck:e,generatePayload:t}={}){this.t=e||r,this.o=t||i}async notifyIfUpdated(e){if(e.oldResponse&&!o(e.oldResponse,e.newResponse,this.t)){const s={type:"CACHE_UPDATED",meta:"workbox-broadcast-update",payload:this.o(e)};if("navigate"===e.request.mode){let s;e.event instanceof FetchEvent&&(s=e.event.resultingClientId),await a.resultingClientExists(s)&&!n||await t.timeout(3500)}const o=await self.clients.matchAll({type:"window"});for(const e of o)e.postMessage(s)}}}return e.BroadcastCacheUpdate=c,e.BroadcastUpdatePlugin=class{constructor(e){this.cacheDidUpdate=async e=>{s.dontWaitFor(this.s.notifyIfUpdated(e))},this.s=new c(e)}},e.responsesAreSame=o,e}({},workbox.core._private,workbox.core._private,workbox.core._private);