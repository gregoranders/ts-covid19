!function(){try{self["workbox:sw:5.1.3"]&&at()}catch(t){}const t={backgroundSync:"background-sync",broadcastUpdate:"broadcast-update",cacheableResponse:"cacheable-response",core:"core",expiration:"expiration",googleAnalytics:"offline-ga",navigationPreload:"navigation-preload",precaching:"precaching",rangeRequests:"range-requests",routing:"routing",strategies:"strategies",streams:"streams"};self.workbox=new class{constructor(){return this.v={},this.t={debug:"localhost"===self.location.hostname,modulePathPrefix:null,modulePathCb:null},this.s=this.t.debug?"dev":"prod",this.o=!1,new Proxy(this,{get(e,o){if(e[o])return e[o];const s=t[o];return s&&e.loadModule("workbox-"+s),e[o]}})}setConfig(t={}){if(this.o)throw new Error("Config must be set before accessing workbox.* modules");Object.assign(this.t,t),this.s=this.t.debug?"dev":"prod"}loadModule(t){const e=this.i(t);try{importScripts(e),this.o=!0}catch(o){throw console.error(`Unable to import module '${t}' from '${e}'.`),o}}i(t){if(this.t.modulePathCb)return this.t.modulePathCb(t,this.t.debug);let e=["https://storage.googleapis.com/workbox-cdn/releases/5.1.3"];const o=`${t}.${this.s}.js`,s=this.t.modulePathPrefix;return s&&(e=s.split("/"),""===e[e.length-1]&&e.splice(e.length-1,1)),e.push(o),e.join("/")}}}();