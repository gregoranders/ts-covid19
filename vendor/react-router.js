import nt,{Component as tp}from"react";import rt from"prop-types";import Js from"react-is";function Ki(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Fi(){return(Fi=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Di(t){return"/"===t.charAt(0)}function qi(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}function ep(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}function Wi(t,e){if(!t)throw new Error("Invariant failed")}function Vi(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function Xi(t,e,n,r){var o;"string"==typeof t?(o=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t)).state=e:(void 0===(o=Fi({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==e&&void 0===o.state&&(o.state=e));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(t,e){void 0===e&&(e="");var n,r=t&&t.split("/")||[],o=e&&e.split("/")||[],i=t&&Di(t),a=e&&Di(e),u=i||a;if(t&&Di(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var c=o[o.length-1];n="."===c||".."===c||""===c}else n=!1;for(var s=0,p=o.length;p>=0;p--){var l=o[p];"."===l?qi(o,p):".."===l?(qi(o,p),s++):s&&(qi(o,p),s--)}if(!u)for(;s--;s)o.unshift("..");!u||""===o[0]||o[0]&&Di(o[0])||o.unshift("");var h=o.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function np(t,e,n){return Math.min(Math.max(t,e),n)}function rp(t){void 0===t&&(t={});var e,n,r=t,o=r.getUserConfirmation,i=r.initialEntries,a=void 0===i?["/"]:i,u=r.initialIndex,c=void 0===u?0:u,s=r.keyLength,p=void 0===s?6:s,l=(e=null,n=[],{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var i="function"==typeof e?e(t,n):e;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var e=!0;function r(){e&&t.apply(void 0,arguments)}return n.push(r),function(){e=!1,n=n.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach((function(t){return t.apply(void 0,e)}))}});function h(t){Fi(g,t),g.length=g.entries.length,l.notifyListeners(g.location,g.action)}function f(){return Math.random().toString(36).substr(2,p)}var m=np(c,0,a.length-1),d=a.map((function(t){return Xi(t,void 0,"string"==typeof t?f():t.key||f())})),v=Vi;function y(t){var e=np(g.index+t,0,g.entries.length-1),n=g.entries[e];l.confirmTransitionTo(n,"POP",o,(function(t){t?h({action:"POP",location:n,index:e}):h()}))}var g={length:d.length,action:"POP",location:d[m],index:m,entries:d,createHref:v,push:function(t,e){var n=Xi(t,e,f(),g.location);l.confirmTransitionTo(n,"PUSH",o,(function(t){if(t){var e=g.index+1,r=g.entries.slice(0);r.length>e?r.splice(e,r.length-e,n):r.push(n),h({action:"PUSH",location:n,index:e,entries:r})}}))},replace:function(t,e){var n=Xi(t,e,f(),g.location);l.confirmTransitionTo(n,"REPLACE",o,(function(t){t&&(g.entries[g.index]=n,h({action:"REPLACE",location:n}))}))},go:y,goBack:function(){y(-1)},goForward:function(){y(1)},canGo:function(t){var e=g.index+t;return e>=0&&e<g.entries.length},block:function(t){return void 0===t&&(t=!1),l.setPrompt(t)},listen:function(t){return l.appendListener(t)}};return g}var op="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function ip(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}var gt=nt.createContext||function(t,e){var n,r,o="__create-react-context-"+(op.__global_unique_id__=(op.__global_unique_id__||0)+1)+"__",i=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=ip(e.props.value),e}Ki(n,t);var r=n.prototype;return r.getChildContext=function(){var t;return(t={})[o]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?n=0:(n="function"==typeof e?e(r,o):1073741823,0!=(n|=0)&&this.emitter.set(t.value,n))}var i,a},r.render=function(){return this.props.children},n}(tp);i.childContextTypes=((n={})[o]=rt.object.isRequired,n);var a=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}Ki(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},r.componentDidMount=function(){this.context[o]&&this.context[o].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},r.componentWillUnmount=function(){this.context[o]&&this.context[o].off(this.onUpdate)},r.getValue=function(){return this.context[o]?this.context[o].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(tp);return a.contextTypes=((r={})[o]=rt.object,r),{Provider:i,Consumer:a}},ap=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},up=function t(e,n,r){return ap(n)||(r=n||r,n=[]),r=r||{},e instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return vp(t,e)}(e,n):ap(e)?function(e,n,r){for(var o=[],i=0;i<e.length;i++)o.push(t(e[i],n,r).source);return vp(new RegExp("(?:"+o.join("|")+")",yp(r)),n)}(e,n,r):function(t,e,n){return gp(tt(t,n),e,n)}(e,n,r)},cp=tt,sp=fp,pp=gp,lp=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function tt(t,e){for(var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(n=lp.exec(t));){var c=n[0],s=n[1],p=n.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var l=t[i],h=n[2],f=n[3],m=n[4],d=n[5],v=n[6],y=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=l&&l!==h,x="+"===v||"*"===v,R="?"===v||"*"===v,b=n[2]||u,E=m||d;r.push({name:f||o++,prefix:h||"",delimiter:b,optional:R,repeat:x,partial:g,asterisk:!!y,pattern:E?dp(E):y?".*":"[^"+mp(b)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function hp(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function fp(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",yp(e)));return function(e,r){for(var o="",i=e||{},a=(r||{}).pretty?hp:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var s,p=i[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(ap(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var l=0;l<p.length;l++){if(s=a(p[l]),!n[u].test(s))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(s)+"`");o+=(0===l?c.prefix:c.delimiter)+s}}else{if(s=c.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!n[u].test(s))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+s+'"');o+=c.prefix+s}}else o+=c}return o}}function mp(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function dp(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function vp(t,e){return t.keys=e,t}function yp(t){return t&&t.sensitive?"":"i"}function gp(t,e,n){ap(e)||(n=e||n,e=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=mp(u);else{var c=mp(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),i+=s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")"}}var p=mp(n.delimiter||"/"),l=i.slice(-p.length)===p;return r||(i=(l?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&l?"":"(?="+p+"|$)",vp(new RegExp("^"+i,yp(n)),e)}function uc(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}up.parse=cp,up.compile=function(t,e){return fp(tt(t,e),e)},up.tokensToFunction=sp,up.tokensToRegExp=pp;var xp={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rp={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ep={};function Pp(t){return Js.isMemo(t)?bp:Ep[t.$$typeof]||xp}Ep[Js.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ep[Js.Memo]=bp;var wp,Cp,_p=Object.defineProperty,Op=Object.getOwnPropertyNames,Go=Object.getOwnPropertySymbols,Ap=Object.getOwnPropertyDescriptor,Tp=Object.getPrototypeOf,Mp=Object.prototype,Up=((wp=gt()).displayName="Router-History",wp),kp=((Cp=gt()).displayName="Router",Cp),wi=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}Ki(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return nt.createElement(kp.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},nt.createElement(Up.Provider,{children:this.props.children||null,value:this.props.history}))},e}(nt.Component),Oi=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=rp(e.props),e}return Ki(e,t),e.prototype.render=function(){return nt.createElement(wi,{history:this.history,children:this.props.children})},e}(nt.Component),jp=function(t){function e(){return t.apply(this,arguments)||this}Ki(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(nt.Component);function Ai(t){var e=t.message,n=t.when,r=void 0===n||n;return nt.createElement(kp.Consumer,null,(function(t){if(t||Wi(!1),!r||t.staticContext)return null;var n=t.history.block;return nt.createElement(jp,{onMount:function(t){t.release=n(e)},onUpdate:function(t,r){r.message!==e&&(t.release(),t.release=n(e))},onUnmount:function(t){t.release()},message:e})}))}var Sp={},Lp=0;function Hi(t,e){return void 0===t&&(t="/"),void 0===e&&(e={}),"/"===t?t:function(t){if(Sp[t])return Sp[t];var e=up.compile(t);return Lp<1e4&&(Sp[t]=e,Lp++),e}(t)(e,{pretty:!0})}function ki(t){var e=t.computedMatch,n=t.to,r=t.push,o=void 0!==r&&r;return nt.createElement(kp.Consumer,null,(function(t){t||Wi(!1);var r=t.history,i=t.staticContext,a=o?r.push:r.replace,u=Xi(e?"string"==typeof n?Hi(n,e.params):Fi({},n,{pathname:Hi(n.pathname,e.params)}):n);return i?(a(u),null):nt.createElement(jp,{onMount:function(){a(u)},onUpdate:function(t,e){var n=Xi(e.to);(function(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every((function(e,r){return t(e,n[r])}));if("object"==typeof e||"object"==typeof n){var r=ep(e),o=ep(n);return r!==e||o!==n?t(r,o):Object.keys(Object.assign({},e,n)).every((function(r){return t(e[r],n[r])}))}return!1}(t.state,e.state)})(n,Fi({},u,{key:n.key}))||a(u)},to:n})}))}var $p={},Hp=0;function Ri(t,e){void 0===e&&(e={}),("string"==typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,u=void 0!==a&&a,c=n.sensitive,s=void 0!==c&&c;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=$p[n]||($p[n]={});if(r[t])return r[t];var o=[],i={regexp:up(t,o,e),keys:o};return Hp<1e4&&(r[t]=i,Hp++),i}(n,{end:i,strict:u,sensitive:s}),o=r.regexp,a=r.keys,c=o.exec(t);if(!c)return null;var p=c[0],l=c.slice(1),h=t===p;return i&&!h?null:{path:n,url:"/"===n&&""===p?"/":p,isExact:h,params:a.reduce((function(t,e,n){return t[e.name]=l[n],t}),{})}}),null)}var Ei=function(t){function e(){return t.apply(this,arguments)||this}return Ki(e,t),e.prototype.render=function(){var t=this;return nt.createElement(kp.Consumer,null,(function(e){e||Wi(!1);var n=t.props.location||e.location,r=Fi({},e,{location:n,match:t.props.computedMatch?t.props.computedMatch:t.props.path?Ri(n.pathname,t.props):e.match}),o=t.props,i=o.children,a=o.component,u=o.render;return Array.isArray(i)&&0===i.length&&(i=null),nt.createElement(kp.Provider,{value:r},r.match?i?"function"==typeof i?i(r):i:a?nt.createElement(a,r):u?u(r):null:"function"==typeof i?i(r):null)}))},e}(nt.Component);function zi(t){return"/"===t.charAt(0)?t:"/"+t}function Ji(t,e){if(!t)return e;var n=zi(t);return 0!==e.pathname.indexOf(n)?e:Fi({},e,{pathname:e.pathname.substr(n.length)})}function Np(t){return"string"==typeof t?t:Vi(t)}function Bp(t){return function(){Wi(!1)}}function ul(){}var Li=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return e.navigateTo(t,"PUSH")},e.handleReplace=function(t){return e.navigateTo(t,"REPLACE")},e.handleListen=function(){return ul},e.handleBlock=function(){return ul},e}Ki(e,t);var n=e.prototype;return n.navigateTo=function(t,e){var n=this.props,r=n.basename,o=void 0===r?"":r,i=n.context,a=void 0===i?{}:i;a.action=e,a.location=function(t,e){return t?Fi({},e,{pathname:zi(t)+e.pathname}):e}(o,Xi(t)),a.url=Np(a.location)},n.render=function(){var t=this.props,e=t.basename,n=void 0===e?"":e,r=t.context,o=void 0===r?{}:r,i=t.location,a=void 0===i?"/":i,u=uc(t,["basename","context","location"]),c={createHref:function(t){return zi(n+Np(t))},action:"POP",location:Ji(n,Xi(a)),push:this.handlePush,replace:this.handleReplace,go:Bp(),goBack:Bp(),goForward:Bp(),listen:this.handleListen,block:this.handleBlock};return nt.createElement(wi,Fi({},u,{history:c,staticContext:o}))},e}(nt.Component),Ti=function(t){function e(){return t.apply(this,arguments)||this}return Ki(e,t),e.prototype.render=function(){var t=this;return nt.createElement(kp.Consumer,null,(function(e){e||Wi(!1);var n,r,o=t.props.location||e.location;return nt.Children.forEach(t.props.children,(function(t){if(null==r&&nt.isValidElement(t)){n=t;var i=t.props.path||t.props.from;r=i?Ri(o.pathname,Fi({},t.props,{path:i})):e.match}})),r?nt.cloneElement(n,{location:o,computedMatch:r}):null}))},e}(nt.Component);function Bi(t){var e="withRouter("+(t.displayName||t.name)+")",n=function(e){var n=e.wrappedComponentRef,r=uc(e,["wrappedComponentRef"]);return nt.createElement(kp.Consumer,null,(function(e){return e||Wi(!1),nt.createElement(t,Fi({},r,e,{ref:n}))}))};return n.displayName=e,n.WrappedComponent=t,function t(e,n,r){if("string"!=typeof n){if(Mp){var o=Tp(n);o&&o!==Mp&&t(e,o,r)}var i=Op(n);Go&&(i=i.concat(Go(n)));for(var a=Pp(e),u=Pp(n),c=0;c<i.length;++c){var s=i[c];if(!(Rp[s]||r&&r[s]||u&&u[s]||a&&a[s])){var p=Ap(n,s);try{_p(e,s,p)}catch(t){}}}}return e}(n,t)}var Dp=nt.useContext;function Ui(){return Dp(Up)}function Ii(){return Dp(kp).location}function Ni(){var t=Dp(kp).match;return t?t.params:{}}function ji(t){var e=Ii(),n=Dp(kp).match;return t?Ri(e.pathname,t):n}var Ip=Object.freeze({__proto__:null,MemoryRouter:Oi,Prompt:Ai,Redirect:ki,Route:Ei,Router:wi,StaticRouter:Li,Switch:Ti,__HistoryContext:Up,__RouterContext:kp,generatePath:Hi,matchPath:Ri,useHistory:Ui,useLocation:Ii,useParams:Ni,useRouteMatch:ji,withRouter:Bi}),Fp={ReactRouter:Ip,MemoryRouter:Oi,Prompt:Ai,Redirect:ki,Route:Ei,Router:wi,StaticRouter:Li,Switch:Ti,__HistoryContext:Up,__RouterContext:kp,generatePath:Hi,matchPath:Ri,useHistory:Ui,useLocation:Ii,useParams:Ni,useRouteMatch:ji,withRouter:Bi};export default Fp;export{Oi as MemoryRouter,Ai as Prompt,Ip as ReactRouter,ki as Redirect,Ei as Route,wi as Router,Li as StaticRouter,Ti as Switch,Up as __HistoryContext,kp as __RouterContext,Hi as generatePath,Ri as matchPath,Ui as useHistory,Ii as useLocation,Ni as useParams,ji as useRouteMatch,Bi as withRouter};