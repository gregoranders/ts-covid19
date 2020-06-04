import nt,{Children as el,PureComponent as ty,cloneElement as nl,Component as tp}from"react";import rt from"prop-types";import{Transition as cl,TransitionGroup as ml}from"react-transition-group";var ny=function(t,n){return t===n||t!=t&&n!=n},ey=function(t,n){for(var e=t.length;e--;)if(ny(t[e][0],n))return e;return-1},ry=Array.prototype.splice;function oy(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}oy.prototype.clear=function(){this.__data__=[],this.size=0},oy.prototype.delete=function(t){var n=this.__data__,e=ey(n,t);return!(e<0||(e==n.length-1?n.pop():ry.call(n,e,1),--this.size,0))},oy.prototype.get=function(t){var n=this.__data__,e=ey(n,t);return e<0?void 0:n[e][1]},oy.prototype.has=function(t){return ey(this.__data__,t)>-1},oy.prototype.set=function(t,n){var e=this.__data__,r=ey(e,t);return r<0?(++this.size,e.push([t,n])):e[r][1]=n,this};var iy=oy,op="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Tc(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}var uy,ay="object"==typeof op&&op&&op.Object===Object&&op,cy="object"==typeof self&&self&&self.Object===Object&&self,fy=ay||cy||Function("return this")(),sy=fy.Symbol,ly=Object.prototype,Jo=ly.hasOwnProperty,py=ly.toString,yy=sy?sy.toStringTag:void 0,by=Object.prototype.toString,hy=sy?sy.toStringTag:void 0,vy=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":hy&&hy in Object(t)?function(t){var n=Jo.call(t,yy),e=t[yy];try{t[yy]=void 0;var r=!0}catch(t){}var o=py.call(t);return r&&(n?t[yy]=e:delete t[yy]),o}(t):function(t){return by.call(t)}(t)},dy=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)},my=function(t){if(!dy(t))return!1;var n=vy(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n},gy=fy["__core-js_shared__"],jy=(uy=/[^.]+$/.exec(gy&&gy.keys&&gy.keys.IE_PROTO||""))?"Symbol(src)_1."+uy:"",Oy=Function.prototype.toString,_y=function(t){if(null!=t){try{return Oy.call(t)}catch(t){}try{return t+""}catch(t){}}return""},wy=/^\[object .+?Constructor\]$/,Ay=Function.prototype,Sy=Object.prototype,Ey=Ay.toString,Py=Sy.hasOwnProperty,ky=RegExp("^"+Ey.call(Py).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ty=function(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return function(t){return!(!dy(t)||function(t){return!!jy&&jy in t}(t))&&(my(t)?ky:wy).test(_y(t))}(e)?e:void 0},xy=Ty(fy,"Map"),zy=Ty(Object,"create"),Dy=Object.prototype.hasOwnProperty,My=Object.prototype.hasOwnProperty;function Ry(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}Ry.prototype.clear=function(){this.__data__=zy?zy(null):{},this.size=0},Ry.prototype.delete=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},Ry.prototype.get=function(t){var n=this.__data__;if(zy){var e=n[t];return"__lodash_hash_undefined__"===e?void 0:e}return Dy.call(n,t)?n[t]:void 0},Ry.prototype.has=function(t){var n=this.__data__;return zy?void 0!==n[t]:My.call(n,t)},Ry.prototype.set=function(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=zy&&void 0===n?"__lodash_hash_undefined__":n,this};var Cy=Ry,By=function(t,n){var e=t.__data__;return function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}(n)?e["string"==typeof n?"string":"hash"]:e.map};function Iy(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}Iy.prototype.clear=function(){this.size=0,this.__data__={hash:new Cy,map:new(xy||iy),string:new Cy}},Iy.prototype.delete=function(t){var n=By(this,t).delete(t);return this.size-=n?1:0,n},Iy.prototype.get=function(t){return By(this,t).get(t)},Iy.prototype.has=function(t){return By(this,t).has(t)},Iy.prototype.set=function(t,n){var e=By(this,t),r=e.size;return e.set(t,n),this.size+=e.size==r?0:1,this};var Ny=Iy;function Fy(t){var n=this.__data__=new iy(t);this.size=n.size}Fy.prototype.clear=function(){this.__data__=new iy,this.size=0},Fy.prototype.delete=function(t){var n=this.__data__,e=n.delete(t);return this.size=n.size,e},Fy.prototype.get=function(t){return this.__data__.get(t)},Fy.prototype.has=function(t){return this.__data__.has(t)},Fy.prototype.set=function(t,n){var e=this.__data__;if(e instanceof iy){var r=e.__data__;if(!xy||r.length<199)return r.push([t,n]),this.size=++e.size,this;e=this.__data__=new Ny(r)}return e.set(t,n),this.size=e.size,this};var qy=Fy;function $y(t){var n=-1,e=null==t?0:t.length;for(this.__data__=new Ny;++n<e;)this.add(t[n])}$y.prototype.add=$y.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},$y.prototype.has=function(t){return this.__data__.has(t)};var Uy=$y,Jy=function(t,n){for(var e=-1,r=null==t?0:t.length;++e<r;)if(n(t[e],e,t))return!0;return!1},Ly=function(t,n){return t.has(n)},Wy=function(t,n,e,r,o,i){var u=1&e,a=t.length,c=n.length;if(a!=c&&!(u&&c>a))return!1;var f=i.get(t);if(f&&i.get(n))return f==n;var s=-1,l=!0,p=2&e?new Uy:void 0;for(i.set(t,n),i.set(n,t);++s<a;){var y=t[s],b=n[s];if(r)var h=u?r(b,y,s,n,t,i):r(y,b,s,t,n,i);if(void 0!==h){if(h)continue;l=!1;break}if(p){if(!Jy(n,(function(t,n){if(!Ly(p,n)&&(y===t||o(y,t,e,r,i)))return p.push(n)}))){l=!1;break}}else if(y!==b&&!o(y,b,e,r,i)){l=!1;break}}return i.delete(t),i.delete(n),l},Vy=fy.Uint8Array,Gy=function(t){var n=-1,e=Array(t.size);return t.forEach((function(t,r){e[++n]=[r,t]})),e},Zy=function(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=t})),e},Hy=sy?sy.prototype:void 0,Ky=Hy?Hy.valueOf:void 0,Qy=Array.isArray,Xy=function(t,n){for(var e=-1,r=null==t?0:t.length,o=0,i=[];++e<r;){var u=t[e];n(u,e,t)&&(i[o++]=u)}return i},Yy=Object.prototype.propertyIsEnumerable,tb=Object.getOwnPropertySymbols,nb=tb?function(t){return null==t?[]:(t=Object(t),Xy(tb(t),(function(n){return Yy.call(t,n)})))}:function(){return[]},eb=function(t){return null!=t&&"object"==typeof t},rb=function(t){return eb(t)&&"[object Arguments]"==vy(t)},ob=Object.prototype,ib=ob.hasOwnProperty,ub=ob.propertyIsEnumerable,ab=rb(function(){return arguments}())?rb:function(t){return eb(t)&&ib.call(t,"callee")&&!ub.call(t,"callee")},cb=function(){return!1},fb=Tc((function(t,n){var e=n&&!n.nodeType&&n,r=e&&t&&!t.nodeType&&t,o=r&&r.exports===e?fy.Buffer:void 0,i=(o?o.isBuffer:void 0)||cb;t.exports=i})),sb=/^(?:0|[1-9]\d*)$/,lb=function(t,n){var e=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==e||"symbol"!=e&&sb.test(t))&&t>-1&&t%1==0&&t<n},pb=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},yb={};yb["[object Float32Array]"]=yb["[object Float64Array]"]=yb["[object Int8Array]"]=yb["[object Int16Array]"]=yb["[object Int32Array]"]=yb["[object Uint8Array]"]=yb["[object Uint8ClampedArray]"]=yb["[object Uint16Array]"]=yb["[object Uint32Array]"]=!0,yb["[object Arguments]"]=yb["[object Array]"]=yb["[object ArrayBuffer]"]=yb["[object Boolean]"]=yb["[object DataView]"]=yb["[object Date]"]=yb["[object Error]"]=yb["[object Function]"]=yb["[object Map]"]=yb["[object Number]"]=yb["[object Object]"]=yb["[object RegExp]"]=yb["[object Set]"]=yb["[object String]"]=yb["[object WeakMap]"]=!1;var bb,es,hb,vb=Tc((function(t,n){var e=n&&!n.nodeType&&n,r=e&&t&&!t.nodeType&&t,o=r&&r.exports===e&&ay.process,i=function(){try{return r&&r.require&&r.require("util").types||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),db=vb&&vb.isTypedArray,mb=db?(hb=db,function(t){return hb(t)}):function(t){return eb(t)&&pb(t.length)&&!!yb[vy(t)]},gb=Object.prototype.hasOwnProperty,jb=Object.prototype,Ob=(bb=Object.keys,es=Object,function(t){return bb(es(t))}),_b=Object.prototype.hasOwnProperty,wb=function(t){return null!=t&&pb(t.length)&&!my(t)},Ab=function(t){return wb(t)?function(t,n){var e=Qy(t),r=!e&&ab(t),o=!e&&!r&&fb(t),i=!e&&!r&&!o&&mb(t),u=e||r||o||i,a=u?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}(t.length,String):[],c=a.length;for(var f in t)!gb.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||lb(f,c))||a.push(f);return a}(t):function(t){if(!function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||jb)}(t))return Ob(t);var n=[];for(var e in Object(t))_b.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)},Sb=function(t){return function(t,n,e){var r=Ab(t);return Qy(t)?r:function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}(r,e(t))}(t,0,nb)},Eb=Object.prototype.hasOwnProperty,Pb=Ty(fy,"DataView"),kb=Ty(fy,"Promise"),Tb=Ty(fy,"Set"),xb=Ty(fy,"WeakMap"),zb=_y(Pb),Db=_y(xy),Mb=_y(kb),Rb=_y(Tb),Cb=_y(xb),Bb=vy;(Pb&&"[object DataView]"!=Bb(new Pb(new ArrayBuffer(1)))||xy&&"[object Map]"!=Bb(new xy)||kb&&"[object Promise]"!=Bb(kb.resolve())||Tb&&"[object Set]"!=Bb(new Tb)||xb&&"[object WeakMap]"!=Bb(new xb))&&(Bb=function(t){var n=vy(t),e="[object Object]"==n?t.constructor:void 0,r=e?_y(e):"";if(r)switch(r){case zb:return"[object DataView]";case Db:return"[object Map]";case Mb:return"[object Promise]";case Rb:return"[object Set]";case Cb:return"[object WeakMap]"}return n});for(var Ib=Bb,Nb=Object.prototype.hasOwnProperty,Fb=function t(n,e,r,o,i){return n===e||(null==n||null==e||!eb(n)&&!eb(e)?n!=n&&e!=e:function(t,n,e,r,o,i){var u=Qy(t),a=Qy(n),c=u?"[object Array]":Ib(t),f=a?"[object Array]":Ib(n),s="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),l="[object Object]"==(f="[object Arguments]"==f?"[object Object]":f),p=c==f;if(p&&fb(t)){if(!fb(n))return!1;u=!0,s=!1}if(p&&!s)return i||(i=new qy),u||mb(t)?Wy(t,n,e,r,o,i):function(t,n,e,r,o,i,u){switch(e){case"[object DataView]":if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=n.byteLength||!i(new Vy(t),new Vy(n)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ny(+t,+n);case"[object Error]":return t.name==n.name&&t.message==n.message;case"[object RegExp]":case"[object String]":return t==n+"";case"[object Map]":var a=Gy;case"[object Set]":var c=1&r;if(a||(a=Zy),t.size!=n.size&&!c)return!1;var f=u.get(t);if(f)return f==n;r|=2,u.set(t,n);var s=Wy(a(t),a(n),r,o,i,u);return u.delete(t),s;case"[object Symbol]":if(Ky)return Ky.call(t)==Ky.call(n)}return!1}(t,n,c,e,r,o,i);if(!(1&e)){var y=s&&Nb.call(t,"__wrapped__"),b=l&&Nb.call(n,"__wrapped__");if(y||b){var h=y?t.value():t,v=b?n.value():n;return i||(i=new qy),o(h,v,e,r,i)}}return!!p&&(i||(i=new qy),function(t,n,e,r,o,i){var u=1&e,a=Sb(t),c=a.length;if(c!=Sb(n).length&&!u)return!1;for(var f=c;f--;){var s=a[f];if(!(u?s in n:Eb.call(n,s)))return!1}var l=i.get(t);if(l&&i.get(n))return l==n;var p=!0;i.set(t,n),i.set(n,t);for(var y=u;++f<c;){var b=t[s=a[f]],h=n[s];if(r)var v=u?r(h,b,s,n,t,i):r(b,h,s,t,n,i);if(!(void 0===v?b===h||o(b,h,e,r,i):v)){p=!1;break}y||(y="constructor"==s)}if(p&&!y){var d=t.constructor,m=n.constructor;d==m||!("constructor"in t)||!("constructor"in n)||"function"==typeof d&&d instanceof d&&"function"==typeof m&&m instanceof m||(p=!1)}return i.delete(t),i.delete(n),p}(t,n,e,r,o,i))}(n,e,r,o,t,i))},qb=Tc((function(t){(function(){var n,e,r,o,i,u;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(t.exports=function(){return(n()-i)/1e6},e=process.hrtime,o=(n=function(){var t;return 1e9*(t=e())[0]+t[1]})(),u=1e9*process.uptime(),i=o-u):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(op)})),$b="undefined"==typeof window?op:window,Ub=["moz","webkit"],Jb="AnimationFrame",Lb=$b["request"+Jb],Wb=$b["cancel"+Jb]||$b["cancelRequest"+Jb],Wc=0;!Lb&&Wc<Ub.length;Wc++)Lb=$b[Ub[Wc]+"Request"+Jb],Wb=$b[Ub[Wc]+"Cancel"+Jb]||$b[Ub[Wc]+"CancelRequest"+Jb];if(!Lb||!Wb){var Vb=0,Gb=0,Zb=[];Lb=function(t){if(0===Zb.length){var n=qb(),e=Math.max(0,1e3/60-(n-Vb));Vb=e+n,setTimeout((function(){var t=Zb.slice(0);Zb.length=0;for(var n=0;n<t.length;n++)if(!t[n].cancelled)try{t[n].callback(Vb)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(e))}return Zb.push({handle:++Gb,callback:t,cancelled:!1}),Gb},Wb=function(t){for(var n=0;n<Zb.length;n++)Zb[n].handle===t&&(Zb[n].cancelled=!0)}}var Hb=function(t){return Lb.call($b,t)},Kb=function(){Wb.apply($b,arguments)};function Qb(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=-1,r=function r(o){e<0&&(e=o),o-e>n?(t(o),e=-1):Hb(r)};Hb(r)}function ot(t){return(ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Hb.cancel=Kb,Hb.polyfill=function(t){t||(t=$b),t.requestAnimationFrame=Lb,t.cancelAnimationFrame=Wb};var Xb,Yb,wp,tv=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o},nv=function(t){return t!=t},ev=function(t,n){return!(null==t||!t.length)&&function(t,n,e){return n==n?function(t,n,e){for(var r=-1,o=t.length;++r<o;)if(t[r]===n)return r;return-1}(t,n):function(t,n,e,r){for(var o=t.length,i=-1;++i<o;)if(n(t[i],i,t))return i;return-1}(t,nv)}(t,n)>-1},rv=Math.min,ov=function(t){return t},iv=function(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)},uv=Math.max,av=function(t){return function(){return t}},at=function(){try{var t=Ty(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),cv=at?function(t,n){return at(t,"toString",{configurable:!0,enumerable:!1,value:av(n),writable:!0})}:ov,fv=Date.now,sv=(Xb=cv,Yb=0,wp=0,function(){var t=fv(),n=16-(t-wp);if(wp=t,n>0){if(++Yb>=800)return arguments[0]}else Yb=0;return Xb.apply(void 0,arguments)}),lv=function(t){return function(t){return eb(t)&&wb(t)}(t)?t:[]},pv=function(t,n){return sv(function(t,n,e){return n=uv(void 0===n?t.length-1:n,0),function(){for(var r=arguments,o=-1,i=uv(r.length-n,0),u=Array(i);++o<i;)u[o]=r[n+o];o=-1;for(var a=Array(n+1);++o<n;)a[o]=r[o];return a[n]=e(u),iv(t,this,a)}}(t,void 0,ov),t+"")}((function(t){var n=tv(t,lv);return n.length&&n[0]===t[0]?function(t,n,e){for(var r=ev,o=t[0].length,i=t.length,u=i,a=Array(i),c=1/0,f=[];u--;){var s=t[u];c=rv(s.length,c),a[u]=o>=120&&s.length>=120?new Uy(u&&s):void 0}s=t[0];var l=-1,p=a[0];t:for(;++l<o&&f.length<c;){var y=s[l],b=y;if(y=0!==y?y:0,!(p?Ly(p,b):r(f,b,e))){for(u=i;--u;){var h=a[u];if(!(h?Ly(h,b):r(t[u],b,e)))continue t}p&&p.push(b),f.push(y)}}return f}(n):[]}));function Xd(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){yv(t,n,e[n])}))}return t}function yv(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var bv=["Webkit","Moz","O","ms"],hv=["-webkit-","-moz-","-o-","-ms-"],vv=["transform","transformOrigin","transition"],bf=function(t){return t},dv=function(t,n){return Object.keys(n).reduce((function(e,r){return Xd({},e,yv({},r,t(r,n[r])))}),{})},mv=function(t){return Object.keys(t).reduce((function(t,n){return Xd({},t,function(t,n){if(-1===vv.indexOf(t))return yv({},t,n);var e="transition"===t,r=t.replace(/(\w)/,(function(t){return t.toUpperCase()})),o=n;return bv.reduce((function(t,i,u){return e&&(o=n.replace(/(transform|transform-origin)/gim,"".concat(hv[u],"$1"))),Xd({},t,yv({},i+r,o))}),{})}(n,t[n]))}),t)},gv=function(t,n,e){return t.map((function(t){return"".concat((r=t,r.replace(/([A-Z])/g,(function(t){return"-".concat(t.toLowerCase())})))," ").concat(n,"ms ").concat(e);var r})).join(",")};function Qd(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var jv=function(t,n){return[0,3*t,3*n-6*t,3*t-3*n+1]},Ov=function(t,n){return t.map((function(t,e){return t*Math.pow(n,e)})).reduce((function(t,n){return t+n}))},_v=function(t,n){return function(e){var r=jv(t,n);return Ov(r,e)}},wv=function(t,n){return function(e){var r=function(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(jv(t,n).map((function(t,n){return t*n})).slice(1)).concat([0]);return Ov(r,e)}},Av=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=n[0],o=n[1],i=n[2],u=n[3];if(1===n.length)switch(n[0]){case"linear":r=0,o=0,i=1,u=1;break;case"ease":r=.25,o=.1,i=.25,u=1;break;case"ease-in":r=.42,o=0,i=1,u=1;break;case"ease-out":r=.42,o=0,i=.58,u=1;break;case"ease-in-out":r=0,o=0,i=.58,u=1;break;default:var a=n[0].split("(");if("cubic-bezier"===a[0]&&4===a[1].split(")")[0].split(",").length){var c=a[1].split(")")[0].split(",").map((function(t){return parseFloat(t)})),f=Qd(c,4);r=f[0],o=f[1],i=f[2],u=f[3]}}var s=_v(r,i),l=_v(o,u),p=wv(r,i),y=function(t){return t>1?1:t<0?0:t},b=function(t){for(var n=t>1?1:t,e=n,r=0;r<8;++r){var o=s(e)-n,i=p(e);if(Math.abs(o-n)<1e-4||i<1e-4)return l(e);e=y(e-o/i)}return l(e)};return b.isStepper=!1,b},Sv=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.stiff,e=void 0===n?100:n,r=t.damping,o=void 0===r?8:r,i=t.dt,u=void 0===i?17:i,a=function(t,n,r){var i=r+(-(t-n)*e-r*o)*u/1e3,a=r*u/1e3+t;return Math.abs(a-n)<1e-4&&Math.abs(i)<1e-4?[n,0]:[a,i]};return a.isStepper=!0,a.dt=u,a},Ev=function(t,n){var e=[];return function(t,n){if(null==t)return t;if(!wb(t))return function(t,n){return t&&function(t,n,e){for(var r=-1,o=Object(t),i=e(t),u=i.length;u--;){var a=i[++r];if(!1===n(o[a],a,o))break}return t}(t,n,Ab)}(t,n);for(var e=t.length,r=-1,o=Object(t);++r<e&&!1!==n(o[r],r,o););}(t,(function(t,r,o){n(t,r,o)&&e.push(t)})),e},Pv=function(t){return t==t&&!dy(t)},kv=function(t,n){return function(e){return null!=e&&e[t]===n&&(void 0!==n||t in Object(e))}},Tv=function(t){return"symbol"==typeof t||eb(t)&&"[object Symbol]"==vy(t)},xv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zv=/^\w*$/,Dv=function(t,n){if(Qy(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!Tv(t))||zv.test(t)||!xv.test(t)||null!=n&&t in Object(n)};function Mv(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var e=function(){var r=arguments,o=n?n.apply(this,r):r[0],i=e.cache;if(i.has(o))return i.get(o);var u=t.apply(this,r);return e.cache=i.set(o,u)||i,u};return e.cache=new(Mv.Cache||Ny),e}Mv.Cache=Ny;var Rv,Cp,Cv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bv=/\\(\\)?/g,Iv=(Rv=Mv((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(Cv,(function(t,e,r,o){n.push(r?o.replace(Bv,"$1"):e||t)})),n}),(function(t){return 500===Cp.size&&Cp.clear(),t})),Cp=Rv.cache,Rv),Nv=sy?sy.prototype:void 0,Fv=Nv?Nv.toString:void 0,qv=function(t,n){return Qy(t)?t:Dv(t,n)?[t]:Iv(function(t){return null==t?"":function t(n){if("string"==typeof n)return n;if(Qy(n))return tv(n,t)+"";if(Tv(n))return Fv?Fv.call(n):"";var e=n+"";return"0"==e&&1/n==-1/0?"-0":e}(t)}(t))},$v=function(t){if("string"==typeof t||Tv(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Uv=function(t,n){for(var e=0,r=(n=qv(n,t)).length;null!=t&&e<r;)t=t[$v(n[e++])];return e&&e==r?t:void 0},Jv=function(t,n){return null!=t&&n in Object(t)},Lv=function(t,n){return(Qy(t)?Xy:Ev)(t,function(t){return"function"==typeof t?t:null==t?ov:"object"==typeof t?Qy(t)?function(t,n){return Dv(t)&&Pv(n)?kv($v(t),n):function(e){var r=function(t,n,e){var r=null==t?void 0:Uv(t,n);return void 0===r?void 0:r}(e,t);return void 0===r&&r===n?function(t,n){return null!=t&&function(t,n,e){for(var r=-1,o=(n=qv(n,t)).length,i=!1;++r<o;){var u=$v(n[r]);if(!(i=null!=t&&e(t,u)))break;t=t[u]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&pb(o)&&lb(u,o)&&(Qy(t)||ab(t))}(t,n,Jv)}(e,t):Fb(n,r,3)}}(t[0],t[1]):function(t){var n=function(t){for(var n=Ab(t),e=n.length;e--;){var r=n[e],o=t[r];n[e]=[r,o,Pv(o)]}return n}(t);return 1==n.length&&n[0][2]?kv(n[0][0],n[0][1]):function(e){return e===t||function(t,n,e,r){var o=e.length,i=o;if(null==t)return!i;for(t=Object(t);o--;){var u=e[o];if(u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var a=(u=e[o])[0],c=t[a],f=u[1];if(u[2]){if(void 0===c&&!(a in t))return!1}else{var s=new qy;if(!Fb(f,c,3,void 0,s))return!1}}return!0}(e,0,n)}}(t):function(t){return Dv(t)?function(t){return function(n){return null==n?void 0:n[t]}}($v(t)):function(t){return function(n){return Uv(n,t)}}(t)}(t)}(n))};function Wv(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Vv(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){Gv(t,n,e[n])}))}return t}function Gv(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var Zv=function(t,n,e){return t+(n-t)*e},Hv=function(t){return t.from!==t.to};function Kv(t){return(Kv="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Qv(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Xv(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){Yv(t,n,e[n])}))}return t}function Yv(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function $g(t,n){return!n||"object"!==Kv(n)&&"function"!=typeof n?nj(t):n}function Zg(t){return(Zg=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function tj(t,n){return(tj=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function nj(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var ej=function(t){function n(t,e){var r;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var o=(r=$g(this,Zg(n).call(this,t,e))).props,i=o.isActive,u=o.attributeName,a=o.from,c=o.to,f=o.steps,s=o.children;if(r.handleStyleChange=r.handleStyleChange.bind(nj(nj(r))),r.changeStyle=r.changeStyle.bind(nj(nj(r))),!i)return r.state={style:{}},"function"==typeof s&&(r.state={style:c}),$g(r);if(f&&f.length)r.state={style:f[0].style};else if(a){if("function"==typeof s)return r.state={style:a},$g(r);r.state={style:u?Yv({},u,a):a}}else r.state={style:{}};return r}var e;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&tj(t,n)}(n,ty),(e=[{key:"componentDidMount",value:function(){var t=this.props,n=t.isActive,e=t.canBegin;this.mounted=!0,n&&e&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(t){var n=this.props,e=n.isActive,r=n.canBegin,o=n.attributeName,i=n.shouldReAnimate;if(r)if(e){if(!(function(t,n){return Fb(t,n)}(t.to,this.props.to)&&t.canBegin&&t.isActive)){var u=!t.canBegin||!t.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var a=u||i?this.props.from:t.to;this.setState({style:o?Yv({},o,a):a}),this.runAnimation(Xv({},this.props,{from:a,begin:0}))}}else this.setState({style:o?Yv({},o,this.props.to):this.props.to})}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation()}},{key:"runJSAnimation",value:function(t){var n=this,e=t.from,r=t.to,o=t.duration,i=t.easing,u=t.begin,a=t.onAnimationEnd,c=t.onAnimationStart,f=function(t,n,e,r,o){var i,u,a,c,f=(i=t,u=n,pv(Object.keys(i),Object.keys(u))),s=f.reduce((function(e,r){return Vv({},e,Gv({},r,[t[r],n[r]]))}),{}),l=f.reduce((function(e,r){return Vv({},e,Gv({},r,{from:t[r],velocity:0,to:n[r]}))}),{}),p=-1,y=function(){return null};return y=e.isStepper?function(r){a||(a=r);var i=(r-a)/e.dt;l=function t(n,e,r){var o=dv((function(t,e){if(Hv(e)){var r=function(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),2!==e.length);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(n(e.from,e.to,e.velocity));return Vv({},e,{from:r[0],velocity:r[1]})}return e}),e);return r<1?dv((function(t,n){return Hv(n)?Vv({},n,{velocity:Zv(n.velocity,o[t].velocity,r),from:Zv(n.from,o[t].from,r)}):n}),e):t(n,o,r-1)}(e,l,i),o(Vv({},t,n,dv((function(t,n){return n.from}),l))),a=r,Lv(l,Hv).length&&(p=Hb(y))}:function(i){c||(c=i);var u=(i-c)/r,a=dv((function(t,n){return Zv.apply(void 0,Wv(n).concat([e(u)]))}),s);if(o(Vv({},t,n,a)),u<1)p=Hb(y);else{var f=dv((function(t,n){return Zv.apply(void 0,Wv(n).concat([e(1)]))}),s);o(Vv({},t,n,f))}},function(){return Hb(y),function(){Kb(p)}}}(e,r,function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=n[0];if("string"==typeof r)switch(r){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return Av(r);case"spring":return Sv();default:if("cubic-bezier"===r.split("(")[0])return Av(r)}return"function"==typeof r?r:null}(i),o,this.changeStyle);this.manager.start([c,u,function(){n.stopJSAnimation=f()},o,a])}},{key:"runStepAnimation",value:function(t){var n=this,e=t.steps,r=t.begin,o=t.onAnimationStart,i=e[0],u=i.style,a=i.duration,c=void 0===a?0:a;return this.manager.start([o].concat(Qv(e.reduce((function(t,r,o){if(0===o)return t;var i=r.duration,u=r.easing,a=void 0===u?"ease":u,c=r.style,f=r.properties,s=r.onAnimationEnd,l=o>0?e[o-1]:r,p=f||Object.keys(c);if("function"==typeof a||"spring"===a)return Qv(t).concat([n.runJSAnimation.bind(n,{from:l.style,to:c,duration:i,easing:a}),i]);var y=gv(p,i,a),b=Xv({},l.style,c,{transition:y});return Qv(t).concat([b,i,s]).filter(bf)}),[u,Math.max(c,r)])),[t.onAnimationEnd]))}},{key:"runAnimation",value:function(t){this.manager||(this.manager=function(){var t=function(){return null},n=!1;return{stop:function(){n=!0},start:function(e){n=!1,function e(r){if(!n){if(Array.isArray(r)){if(!r.length)return;var o=function(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r),i=o[0],u=o.slice(1);return"number"==typeof i?void Qb(e.bind(null,u),i):(e(i),void Qb(e.bind(null,u)))}"object"===ot(r)&&t(r),"function"==typeof r&&r()}}(e)},subscribe:function(n){return t=n,function(){t=function(){return null}}}}}());var n=t.begin,e=t.duration,r=t.attributeName,o=t.to,i=t.easing,u=t.onAnimationStart,a=t.onAnimationEnd,c=t.steps,f=t.children,s=this.manager;if(this.unSubscribe=s.subscribe(this.handleStyleChange),"function"!=typeof i&&"function"!=typeof f&&"spring"!==i)if(c.length>1)this.runStepAnimation(t);else{var l=r?Yv({},r,o):o,p=gv(Object.keys(l),e,i);s.start([u,n,Xv({},l,{transition:p}),e,a])}else this.runJSAnimation(t)}},{key:"handleStyleChange",value:function(t){this.changeStyle(t)}},{key:"changeStyle",value:function(t){this.mounted&&this.setState({style:t})}},{key:"render",value:function(){var t=this.props,n=t.children,e=(t.begin,t.duration,t.attributeName,t.easing,t.isActive),r=(t.steps,t.from,t.to,t.canBegin,t.onAnimationEnd,t.shouldReAnimate,t.onAnimationReStart,function(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}(t,["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"])),o=el.count(n),i=mv(this.state.style);if("function"==typeof n)return n(i);if(!e||0===o)return n;var u=function(t){var n=t.props,e=n.style,o=void 0===e?{}:e,u=n.className;return nl(t,Xv({},r,{style:Xv({},o,i),className:u}))};return 1===o?u(el.only(n)):nt.createElement("div",null,el.map(n,(function(t){return u(t)})))}}])&&function(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(n.prototype,e),n}();ej.displayName="Animate",ej.propTypes={from:rt.oneOfType([rt.object,rt.string]),to:rt.oneOfType([rt.object,rt.string]),attributeName:rt.string,duration:rt.number,begin:rt.number,easing:rt.oneOfType([rt.string,rt.func]),steps:rt.arrayOf(rt.shape({duration:rt.number.isRequired,style:rt.object.isRequired,easing:rt.oneOfType([rt.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),rt.func]),properties:rt.arrayOf("string"),onAnimationEnd:rt.func})),children:rt.oneOfType([rt.node,rt.func]),isActive:rt.bool,canBegin:rt.bool,onAnimationEnd:rt.func,shouldReAnimate:rt.bool,onAnimationStart:rt.func,onAnimationReStart:rt.func},ej.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};var rj=function(t){return"number"==typeof t||eb(t)&&"[object Number]"==vy(t)};function oj(t){return(oj="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Fi(){return(Fi=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function ij(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function uj(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function aj(t,n){return!n||"object"!==oj(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function cj(t){return(cj=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function fj(t,n){return(fj=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var sj=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.steps,e=t.duration;return n&&n.length?n.reduce((function(t,n){return t+(rj(n.duration)&&n.duration>0?n.duration:0)}),0):rj(e)?e:0},lj=function(t){function n(){var t,e;uj(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=aj(this,(t=cj(n)).call.apply(t,[this].concat(o)))).state={isActive:!1},e.handleEnter=function(t,n){var r=e.props,o=r.appearOptions,i=r.enterOptions;e.handleStyleActive(n?o:i)},e.handleExit=function(){e.handleStyleActive(e.props.leaveOptions)},e}var e;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&fj(t,n)}(n,tp),(e=[{key:"handleStyleActive",value:function(t){if(t){var n=t.onAnimationEnd?function(){t.onAnimationEnd()}:null;this.setState(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){ij(t,n,e[n])}))}return t}({},t,{onAnimationEnd:n,isActive:!0}))}}},{key:"parseTimeout",value:function(){var t=this.props,n=t.appearOptions,e=t.enterOptions,r=t.leaveOptions;return sj(n)+sj(e)+sj(r)}},{key:"render",value:function(){var t=this,n=this.props,e=n.children,r=(n.appearOptions,n.enterOptions,n.leaveOptions,function(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}(n,["children","appearOptions","enterOptions","leaveOptions"]));return nt.createElement(cl,Fi({},r,{onEnter:this.handleEnter,onExit:this.handleExit,timeout:this.parseTimeout()}),(function(){return nt.createElement(ej,t.state,el.only(e))}))}}])&&function(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(n.prototype,e),n}();function pj(t){var n=t.component,e=t.children,r=t.appear,o=t.enter,i=t.leave;return nt.createElement(ml,{component:n},el.map(e,(function(t,n){return nt.createElement(lj,{appearOptions:r,enterOptions:o,leaveOptions:i,key:"child-".concat(n)},t)})))}lj.propTypes={appearOptions:rt.object,enterOptions:rt.object,leaveOptions:rt.object,children:rt.element},pj.propTypes={appear:rt.object,enter:rt.object,leave:rt.object,children:rt.oneOfType([rt.array,rt.element]),component:rt.any},pj.defaultProps={component:"span"};export default ej;export{pj as AnimateGroup,ej as ReactSmooth,Av as configBezier,Sv as configSpring,mv as translateStyle};