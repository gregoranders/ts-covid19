try{self["workbox:window:5.1.3"]&&at()}catch(Rs){}function Rs(e,t){return new Promise((function(r){var n=new MessageChannel;n.port1.onmessage=function(e){r(e.data)},e.postMessage(t,[n.port2])}))}try{self["workbox:core:5.1.3"]&&at()}catch(Rs){}var _s=function(){var e=this;this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))};function Wc(e,t){var r=location.href;return new URL(e,r).href===new URL(t,r).href}var $s=function(e,t){this.type=e,Object.assign(this,t)};function Uc(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function _l(){}var Bc=function(e){var t,r;function n(t,r){var n,o;return void 0===r&&(r={}),(n=e.call(this)||this).t={},n.i=0,n.o=new _s,n.u=new _s,n.s=new _s,n.v=0,n.h=new Set,n.l=function(){var e=n.g,t=e.installing;n.i>0||!Wc(t.scriptURL,n.m)||performance.now()>n.v+6e4?(n.P=t,e.removeEventListener("updatefound",n.l)):(n.p=t,n.h.add(t),n.o.resolve(t)),++n.i,t.addEventListener("statechange",n.k)},n.k=function(e){var t=n.g,r=e.target,o=r.state,i=r===n.P,a=i?"external":"",s={sw:r,originalEvent:e};!i&&n.j&&(s.isUpdate=!0),n.dispatchEvent(new $s(a+o,s)),"installed"===o?n.O=self.setTimeout((function(){"installed"===o&&t.waiting===r&&n.dispatchEvent(new $s(a+"waiting",s))}),200):"activating"===o&&(clearTimeout(n.O),i||n.u.resolve(r))},n.R=function(e){var t=n.p;t===navigator.serviceWorker.controller&&(n.dispatchEvent(new $s("controlling",{sw:t,originalEvent:e,isUpdate:n.j})),n.s.resolve(t))},n.S=(o=function(e){var t=e.data,r=e.source;return Uc(n.getSW(),(function(){n.h.has(r)&&n.dispatchEvent(new $s("message",{data:t,sw:r,originalEvent:e}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(o.apply(this,e))}catch(e){return Promise.reject(e)}}),n.m=t,n.t=r,navigator.serviceWorker.addEventListener("message",n.S),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o,i=n.prototype;return i.register=function(e){var t=(void 0===e?{}:e).immediate,r=void 0!==t&&t;try{var n=this;return function(e,t){var r=e();return r&&r.then?r.then(t):t()}((function(){if(!r&&"complete"!==document.readyState)return Cs(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return n.j=Boolean(navigator.serviceWorker.controller),n.U=n.B(),Uc(n.L(),(function(e){n.g=e,n.U&&(n.p=n.U,n.u.resolve(n.U),n.s.resolve(n.U),n.U.addEventListener("statechange",n.k,{once:!0}));var t=n.g.waiting;return t&&Wc(t.scriptURL,n.m)&&(n.p=t,Promise.resolve().then((function(){n.dispatchEvent(new $s("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),n.p&&(n.o.resolve(n.p),n.h.add(n.p)),n.g.addEventListener("updatefound",n.l),navigator.serviceWorker.addEventListener("controllerchange",n.R,{once:!0}),n.g}))}))}catch(e){return Promise.reject(e)}},i.update=function(){try{return this.g?Cs(this.g.update()):void 0}catch(e){return Promise.reject(e)}},i.getSW=function(){try{return void 0!==this.p?this.p:this.o.promise}catch(e){return Promise.reject(e)}},i.messageSW=function(e){try{return Uc(this.getSW(),(function(t){return Rs(t,e)}))}catch(e){return Promise.reject(e)}},i.B=function(){var e=navigator.serviceWorker.controller;return e&&Wc(e.scriptURL,this.m)?e:void 0},i.L=function(){try{var e=this;return function(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}((function(){return Uc(navigator.serviceWorker.register(e.m,e.t),(function(t){return e.v=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},(o=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(n.prototype,o),n}(function(){function e(){this.M=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this._(e).add(t)},t.removeEventListener=function(e,t){this._(e).delete(t)},t.dispatchEvent=function(e){e.target=this;var t=this._(e.type),r=Array.isArray(t),n=0;for(t=r?t:t[Symbol.iterator]();;){var o;if(r){if(n>=t.length)break;o=t[n++]}else{if((n=t.next()).done)break;o=n.value}o(e)}},t._=function(e){return this.M.has(e)||this.M.set(e,new Set),this.M.get(e)},e}());function Cs(e,t){if(!t)return e&&e.then?e.then(_l):Promise.resolve()}var zc=Object.freeze({__proto__:null,Workbox:Bc,messageSW:Rs});export default zc;export{Bc as Workbox,zc as WorkboxWindow,Rs as messageSW};