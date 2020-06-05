import Zo from"object-assign";var Ls="function"==typeof Symbol&&Symbol.for,js=Ls?Symbol.for("react.element"):60103,Vs=Ls?Symbol.for("react.portal"):60106,qs=Ls?Symbol.for("react.fragment"):60107,ks=Ls?Symbol.for("react.strict_mode"):60108,_l=Ls?Symbol.for("react.profiler"):60114,Ds=Ls?Symbol.for("react.provider"):60109,Is=Ls?Symbol.for("react.context"):60110,Bs=Ls?Symbol.for("react.forward_ref"):60112,Gs=Ls?Symbol.for("react.suspense"):60113,Hs=Ls?Symbol.for("react.memo"):60115,Js=Ls?Symbol.for("react.lazy"):60116,jn="function"==typeof Symbol&&Symbol.iterator;function On(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _n={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pn={};function Rl(e,t,r){this.props=e,this.context=t,this.refs=Pn,this.updater=r||_n}function wl(){}function $l(e,t,r){this.props=e,this.context=t,this.refs=Pn,this.updater=r||_n}Rl.prototype.isReactComponent={},Rl.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(On(85));this.updater.enqueueSetState(this,e,t,"setState")},Rl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},wl.prototype=Rl.prototype;var Pl=$l.prototype=new wl;Pl.constructor=$l,Zo(Pl,Rl.prototype),Pl.isPureReactComponent=!0;var jl={current:null},Al=Object.prototype.hasOwnProperty,Fl={key:!0,ref:!0,__self:!0,__source:!0};function Il(e,t,r){var n,o={},u=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)Al.call(t,n)&&!Fl.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:js,type:e,key:u,ref:a,props:o,_owner:jl.current}}function Ml(e){return"object"==typeof e&&null!==e&&e.$$typeof===js}var Vl=/\/+/g,ql=[];function Dl(e,t,r,n){if(ql.length){var o=ql.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function Ll(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>ql.length&&ql.push(e)}function Ul(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var a=!1;if(null===t)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case js:case Vs:a=!0}}if(a)return n(o,t,""===r?"."+zl(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var c=r+zl(u=t[l],l);a+=e(u,c,n,o)}else if("function"==typeof(c=null===t||"object"!=typeof t?null:"function"==typeof(c=jn&&t[jn]||t["@@iterator"])?c:null))for(t=c.call(t),l=0;!(u=t.next()).done;)a+=e(u=u.value,c=r+zl(u,l++),n,o);else if("object"===u)throw n=""+t,Error(On(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return a}(e,"",t,r)}function zl(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function Hl(e,t){e.func.call(e.context,t,e.count++)}function Bl(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?Wl(e,n,r,(function(e){return e})):null!=e&&(Ml(e)&&(e=function(e,t){return{$$typeof:js,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(Vl,"$&/")+"/")+r)),n.push(e))}function Wl(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(Vl,"$&/")+"/"),Ul(e,Bl,t=Dl(t,u,n,o)),Ll(t)}var Yl={current:null};function Gl(){var e=Yl.current;if(null===e)throw Error(On(321));return e}var rt,et,Jl={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return Wl(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;Ul(e,Hl,t=Dl(null,null,t,r)),Ll(t)},count:function(e){return Ul(e,(function(){return null}),null)},toArray:function(e){var t=[];return Wl(e,t,null,(function(e){return e})),t},only:function(e){if(!Ml(e))throw Error(On(143));return e}},Component:Rl,Fragment:qs,Profiler:_l,PureComponent:$l,StrictMode:ks,Suspense:Gs,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:Yl,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:jl,IsSomeRendererActing:{current:!1},assign:Zo},cloneElement:function(e,t,r){if(null==e)throw Error(On(267,e));var n=Zo({},e.props),o=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=jl.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Al.call(t,c)&&!Fl.hasOwnProperty(c)&&(n[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)n.children=r;else if(1<c){l=Array(c);for(var f=0;f<c;f++)l[f]=arguments[f+2];n.children=l}return{$$typeof:js,type:e.type,key:o,ref:u,props:n,_owner:a}},createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:Is,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:Ds,_context:e},e.Consumer=e},createElement:Il,createFactory:function(e){var t=Il.bind(null,e);return t.type=e,t},createRef:function(){return{current:null}},forwardRef:function(e){return{$$typeof:Bs,render:e}},isValidElement:Ml,lazy:function(e){return{$$typeof:Js,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:Hs,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return Gl().useCallback(e,t)},useContext:function(e,t){return Gl().useContext(e,t)},useDebugValue:function(){},useEffect:function(e,t){return Gl().useEffect(e,t)},useImperativeHandle:function(e,t,r){return Gl().useImperativeHandle(e,t,r)},useLayoutEffect:function(e,t){return Gl().useLayoutEffect(e,t)},useMemo:function(e,t){return Gl().useMemo(e,t)},useReducer:function(e,t,r){return Gl().useReducer(e,t,r)},useRef:function(e){return Gl().useRef(e)},useState:function(e){return Gl().useState(e)},version:"16.13.1"},Kl=(rt=et={path:void 0,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&et.path)}},et.exports,rt.exports=Jl,et.exports),Ql=Kl.Children,Xl=Kl.Component,ei=Kl.Fragment,ci=Kl.Profiler,Zl=Kl.PureComponent,fi=Kl.StrictMode,ui=Kl.Suspense,bc=Kl.cloneElement,Sc=Kl.createContext,Cc=Kl.createElement,Ec=Kl.createFactory,_c=Kl.createRef;export default Kl;var Pc=Kl.forwardRef,xc=Kl.isValidElement,kc=Kl.lazy,$c=Kl.memo,jc=Kl.useCallback,Oc=Kl.useContext,Ac=Kl.useDebugValue,Fc=Kl.useEffect,Ic=Kl.useImperativeHandle,Mc=Kl.useLayoutEffect,Vc=Kl.useMemo,qc=Kl.useReducer,Dc=Kl.useRef,Lc=Kl.useState,Uc=Kl.version;export{Ql as Children,Xl as Component,ei as Fragment,ci as Profiler,Zl as PureComponent,Kl as React,fi as StrictMode,ui as Suspense,bc as cloneElement,Sc as createContext,Cc as createElement,Ec as createFactory,_c as createRef,Pc as forwardRef,xc as isValidElement,kc as lazy,$c as memo,jc as useCallback,Oc as useContext,Ac as useDebugValue,Fc as useEffect,Ic as useImperativeHandle,Mc as useLayoutEffect,Vc as useMemo,qc as useReducer,Dc as useRef,Lc as useState,Uc as version};