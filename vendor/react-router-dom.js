import{Router as ai,__RouterContext as ci,matchPath as ui,MemoryRouter as fi,Prompt as li,Redirect as di,Route as vi,StaticRouter as pi,Switch as mi,generatePath as wi,useHistory as yi,useLocation as gi,useParams as Pi,useRouteMatch as Ri,withRouter as Oi}from"react-router";export{MemoryRouter,Prompt,Redirect,Route,Router,StaticRouter,Switch,generatePath,matchPath,useHistory,useLocation,useParams,useRouteMatch,withRouter}from"react-router";import xi from"react";import"prop-types";function Ai(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function bi(){return(bi=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function ki(t){return"/"===t.charAt(0)}function Ei(t,n){for(var e=n,r=e+1,o=t.length;r<o;e+=1,r+=1)t[e]=t[r];t.pop()}function Li(t,n){if(!t)throw new Error("Invariant failed")}function Ci(t){return"/"===t.charAt(0)?t:"/"+t}function Si(t){return"/"===t.charAt(0)?t.substr(1):t}function Ti(t,n){return function(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}(t,n)?t.substr(n.length):t}function Hi(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function Ui(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function Mi(t,n,e,r){var o;"string"==typeof t?(o=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var a=n.indexOf("?");return-1!==a&&(e=n.substr(a),n=n.substr(0,a)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t)).state=n:(void 0===(o=bi({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==n&&void 0===o.state&&(o.state=n));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(t,n){void 0===n&&(n="");var e,r=t&&t.split("/")||[],o=n&&n.split("/")||[],a=t&&ki(t),i=n&&ki(n),c=a||i;if(t&&ki(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];e="."===u||".."===u||""===u}else e=!1;for(var s=0,f=o.length;f>=0;f--){var h=o[f];"."===h?Ei(o,f):".."===h?(Ei(o,f),s++):s&&(Ei(o,f),s--)}if(!c)for(;s--;s)o.unshift("..");!c||""===o[0]||o[0]&&ki(o[0])||o.unshift("");var l=o.join("/");return e&&"/"!==l.substr(-1)&&(l+="/"),l}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function Ii(){var t=null,n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,r,o){if(null!=t){var a="function"==typeof t?t(n,e):t;"string"==typeof a?"function"==typeof r?r(a,o):o(!0):o(!1!==a)}else o(!0)},appendListener:function(t){var e=!0;function r(){e&&t.apply(void 0,arguments)}return n.push(r),function(){e=!1,n=n.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach((function(t){return t.apply(void 0,e)}))}}}var Ni=!("undefined"==typeof window||!window.document||!window.document.createElement);function ji(t,n){n(window.confirm(t))}function Bi(){try{return window.history.state||{}}catch(t){return{}}}function Ki(t){void 0===t&&(t={}),Ni||Li(!1);var n,e=window.history,r=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),a=t,i=a.forceRefresh,c=void 0!==i&&i,u=a.getUserConfirmation,s=void 0===u?ji:u,f=a.keyLength,h=void 0===f?6:f,l=t.basename?Hi(Ci(t.basename)):"";function d(t){var n=t||{},e=n.key,r=n.state,o=window.location,a=o.pathname+o.search+o.hash;return l&&(a=Ti(a,l)),Mi(a,r,e)}function v(){return Math.random().toString(36).substr(2,h)}var p=Ii();function m(t){bi(L,t),L.length=e.length,p.notifyListeners(L.location,L.action)}function w(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||P(d(t.state))}function y(){P(d(Bi()))}var g=!1;function P(t){g?(g=!1,m()):p.confirmTransitionTo(t,"POP",s,(function(n){n?m({action:"POP",location:t}):function(t){var n=L.location,e=O.indexOf(n.key);-1===e&&(e=0);var r=O.indexOf(t.key);-1===r&&(r=0);var o=e-r;o&&(g=!0,A(o))}(t)}))}var R=d(Bi()),O=[R.key];function x(t){return l+Ui(t)}function A(t){e.go(t)}var b=0;function k(t){1===(b+=t)&&1===t?(window.addEventListener("popstate",w),o&&window.addEventListener("hashchange",y)):0===b&&(window.removeEventListener("popstate",w),o&&window.removeEventListener("hashchange",y))}var E=!1,L={length:e.length,action:"POP",location:R,createHref:x,push:function(t,n){var o=Mi(t,n,v(),L.location);p.confirmTransitionTo(o,"PUSH",s,(function(t){if(t){var n=x(o),a=o.key,i=o.state;if(r)if(e.pushState({key:a,state:i},null,n),c)window.location.href=n;else{var u=O.indexOf(L.location.key),s=O.slice(0,u+1);s.push(o.key),O=s,m({action:"PUSH",location:o})}else window.location.href=n}}))},replace:function(t,n){var o=Mi(t,n,v(),L.location);p.confirmTransitionTo(o,"REPLACE",s,(function(t){if(t){var n=x(o),a=o.key,i=o.state;if(r)if(e.replaceState({key:a,state:i},null,n),c)window.location.replace(n);else{var u=O.indexOf(L.location.key);-1!==u&&(O[u]=o.key),m({action:"REPLACE",location:o})}else window.location.replace(n)}}))},go:A,goBack:function(){A(-1)},goForward:function(){A(1)},block:function(t){void 0===t&&(t=!1);var n=p.setPrompt(t);return E||(k(1),E=!0),function(){return E&&(E=!1,k(-1)),n()}},listen:function(t){var n=p.appendListener(t);return k(1),function(){k(-1),n()}}};return L}var Fi={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+Si(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:Si,decodePath:Ci},slash:{encodePath:Ci,decodePath:Ci}};function Di(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function $i(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function qi(t){window.location.replace(Di(window.location.href)+"#"+t)}function Wi(t){void 0===t&&(t={}),Ni||Li(!1);var n=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),t),r=e.getUserConfirmation,o=void 0===r?ji:r,a=e.hashType,i=void 0===a?"slash":a,c=t.basename?Hi(Ci(t.basename)):"",u=Fi[i],s=u.encodePath,f=u.decodePath;function h(){var t=f($i());return c&&(t=Ti(t,c)),Mi(t)}var l=Ii();function d(t){bi(b,t),b.length=n.length,l.notifyListeners(b.location,b.action)}var v=!1,p=null;function m(){var t,n,e=$i(),r=s(e);if(e!==r)qi(r);else{var a=h(),i=b.location;if(!v&&(n=a,(t=i).pathname===n.pathname&&t.search===n.search&&t.hash===n.hash))return;if(p===Ui(a))return;p=null,function(t){v?(v=!1,d()):l.confirmTransitionTo(t,"POP",o,(function(n){n?d({action:"POP",location:t}):function(t){var n=b.location,e=P.lastIndexOf(Ui(n));-1===e&&(e=0);var r=P.lastIndexOf(Ui(t));-1===r&&(r=0);var o=e-r;o&&(v=!0,R(o))}(t)}))}(a)}}var w=$i(),y=s(w);w!==y&&qi(y);var g=h(),P=[Ui(g)];function R(t){n.go(t)}var O=0;function x(t){1===(O+=t)&&1===t?window.addEventListener("hashchange",m):0===O&&window.removeEventListener("hashchange",m)}var A=!1,b={length:n.length,action:"POP",location:g,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=Di(window.location.href)),e+"#"+s(c+Ui(t))},push:function(t,n){var e=Mi(t,void 0,void 0,b.location);l.confirmTransitionTo(e,"PUSH",o,(function(t){if(t){var n=Ui(e),r=s(c+n);if($i()!==r){p=n,function(t){window.location.hash=t}(r);var o=P.lastIndexOf(Ui(b.location)),a=P.slice(0,o+1);a.push(n),P=a,d({action:"PUSH",location:e})}else d()}}))},replace:function(t,n){var e=Mi(t,void 0,void 0,b.location);l.confirmTransitionTo(e,"REPLACE",o,(function(t){if(t){var n=Ui(e),r=s(c+n);$i()!==r&&(p=n,qi(r));var o=P.indexOf(Ui(b.location));-1!==o&&(P[o]=n),d({action:"REPLACE",location:e})}}))},go:R,goBack:function(){R(-1)},goForward:function(){R(1)},block:function(t){void 0===t&&(t=!1);var n=l.setPrompt(t);return A||(x(1),A=!0),function(){return A&&(A=!1,x(-1)),n()}},listen:function(t){var n=l.appendListener(t);return x(1),function(){x(-1),n()}}};return b}function zi(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}var Gi=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=Ki(n.props),n}return Ai(n,t),n.prototype.render=function(){return xi.createElement(ai,{history:this.history,children:this.props.children})},n}(xi.Component),Ji=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=Wi(n.props),n}return Ai(n,t),n.prototype.render=function(){return xi.createElement(ai,{history:this.history,children:this.props.children})},n}(xi.Component),Qi=function(t,n){return"function"==typeof t?t(n):t},Vi=function(t,n){return"string"==typeof t?Mi(t,null,null,n):t},Xi=function(t){return t},Yi=xi.forwardRef;void 0===Yi&&(Yi=Xi);var Zi=Yi((function(t,n){var e=t.innerRef,r=t.navigate,o=t.onClick,a=zi(t,["innerRef","navigate","onClick"]),i=a.target,c=bi({},a,{onClick:function(t){try{o&&o(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||i&&"_self"!==i||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return c.ref=Xi!==Yi&&n||e,xi.createElement("a",c)})),tc=Yi((function(t,n){var e=t.component,r=void 0===e?Zi:e,o=t.replace,a=t.to,i=t.innerRef,c=zi(t,["component","replace","to","innerRef"]);return xi.createElement(ci.Consumer,null,(function(t){t||Li(!1);var e=t.history,u=Vi(Qi(a,t.location),t.location),s=u?e.createHref(u):"",f=bi({},c,{href:s,navigate:function(){var n=Qi(a,t.location);(o?e.replace:e.push)(n)}});return Xi!==Yi?f.ref=n||i:f.innerRef=i,xi.createElement(r,f)}))})),nc=function(t){return t},ec=xi.forwardRef;void 0===ec&&(ec=nc);var rc=ec((function(t,n){var e=t["aria-current"],r=void 0===e?"page":e,o=t.activeClassName,a=void 0===o?"active":o,i=t.activeStyle,c=t.className,u=t.exact,s=t.isActive,f=t.location,h=t.sensitive,l=t.strict,d=t.style,v=t.to,p=t.innerRef,m=zi(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return xi.createElement(ci.Consumer,null,(function(t){t||Li(!1);var e=f||t.location,o=Vi(Qi(v,e),e),w=o.pathname,y=w&&w.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),g=y?ui(e.pathname,{path:y,exact:u,sensitive:h,strict:l}):null,P=!!(s?s(g,e):g),R=P?function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t})).join(" ")}(c,a):c,O=P?bi({},d,{},i):d,x=bi({"aria-current":P&&r||null,className:R,style:O,to:o},m);return nc!==ec?x.ref=n||p:x.innerRef=p,xi.createElement(tc,x)}))})),oc={MemoryRouter:fi,Prompt:li,Redirect:di,Route:vi,Router:ai,StaticRouter:pi,Switch:mi,generatePath:wi,matchPath:ui,useHistory:yi,useLocation:gi,useParams:Pi,useRouteMatch:Ri,withRouter:Oi,BrowserRouter:Gi,HashRouter:Ji,Link:tc,NavLink:rc};export default oc;export{Gi as BrowserRouter,Ji as HashRouter,tc as Link,rc as NavLink};