this.workbox=this.workbox||{},this.workbox.streams=function(e,n,t){try{self["workbox:streams:5.1.3"]&&Re()}catch(e){}function r(e){const t=e.map(e=>Promise.resolve(e).then(e=>function(e){return e instanceof Response?e.body.getReader():e instanceof ReadableStream?e.getReader():new Response(e).body.getReader()}(e))),r=new n.Deferred;let o=0;const s=new ReadableStream({pull(e){return t[o].then(e=>e.read()).then(n=>{if(n.done)return o++,o>=t.length?(e.close(),void r.resolve()):this.pull(e);e.enqueue(n.value)}).catch(e=>{throw r.reject(e),e})},cancel(){r.resolve()}});return{done:r.promise,stream:s}}function o(e={}){const n=new Headers(e);return n.has("content-type")||n.set("content-type","text/html"),n}function s(e,n){const{done:t,stream:s}=r(e),a=o(n);return{done:t,response:new Response(s,{headers:a})}}function a(){return t.canConstructReadableStream()}return e.concatenate=r,e.concatenateToResponse=s,e.isSupported=a,e.strategy=function(e,n){return async({event:t,request:r,url:c,params:u})=>{const i=e.map(e=>Promise.resolve(e({event:t,request:r,url:c,params:u})));if(a()){const{done:e,response:r}=s(i,n);return t&&t.waitUntil(e),r}const l=i.map(async e=>{const n=await e;return n instanceof Response?n.blob():new Response(n).blob()}),p=await Promise.all(l),d=o(n);return new Response(new Blob(p),{headers:d})}},e}({},workbox.core._private,workbox.core._private);