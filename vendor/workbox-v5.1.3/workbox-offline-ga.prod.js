this.workbox=this.workbox||{},this.workbox.googleAnalytics=function(e,t,o,r,a,n,s,c,i){try{self["workbox:google-analytics:5.1.3"]&&_()}catch(e){}const w=/^\/(\w+\/)?collect/,l=e=>{const t=({url:e})=>"www.google-analytics.com"===e.hostname&&w.test(e.pathname),o=new i.NetworkOnly({plugins:[e]});return[new n.Route(t,o,"GET"),new n.Route(t,o,"POST")]},g=e=>{const t=new c.NetworkFirst({cacheName:e});return new n.Route(({url:e})=>"www.google-analytics.com"===e.hostname&&"/analytics.js"===e.pathname,t,"GET")},m=e=>{const t=new c.NetworkFirst({cacheName:e});return new n.Route(({url:e})=>"www.googletagmanager.com"===e.hostname&&"/gtag/js"===e.pathname,t,"GET")},u=e=>{const t=new c.NetworkFirst({cacheName:e});return new n.Route(({url:e})=>"www.googletagmanager.com"===e.hostname&&"/gtm.js"===e.pathname,t,"GET")};return e.initialize=(e={})=>{const r=o.cacheNames.getGoogleAnalyticsName(e.cacheName),a=new t.BackgroundSyncPlugin("workbox-google-analytics",{maxRetentionTime:2880,onSync:(n=e,async({queue:e})=>{let t;for(;t=await e.shiftRequest();){const{request:o,timestamp:r}=t,a=new URL(o.url);try{const e="POST"===o.method?new URLSearchParams(await o.clone().text()):a.searchParams,t=r-(Number(e.get("qt"))||0),s=Date.now()-t;if(e.set("qt",String(s)),n.parameterOverrides)for(const t of Object.keys(n.parameterOverrides)){const o=n.parameterOverrides[t];e.set(t,o)}"function"==typeof n.hitFilter&&n.hitFilter.call(null,e),await fetch(new Request(a.origin+a.pathname,{body:e.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}}))}catch(o){throw await e.unshiftRequest(t),o}}})});var n;const c=[u(r),g(r),m(r),...l(a)],i=new s.Router;for(const e of c)i.registerRoute(e);i.addFetchListener()},e}({},workbox.backgroundSync,workbox.core._private,workbox.core._private,workbox.core._private,workbox.routing,workbox.routing,workbox.strategies,workbox.strategies);