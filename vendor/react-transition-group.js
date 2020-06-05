import"prop-types";import nt,{Children as el,isValidElement as tl,cloneElement as nl}from"react";import rl from"react-dom";function Di(){return(Di=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function fc(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function Fi(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function il(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var ol={disabled:!1},al=nt.createContext(null),sl="entering",ll="entered",cl=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var i,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(i="exited",r.appearStatus=sl):i=ll:i=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:i},r.nextCallback=null,r}Fi(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==sl&&n!==ll&&(t=sl):n!==sl&&n!==ll||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===sl?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[rl.findDOMNode(this),r],o=i[0],a=i[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!e&&!n||ol.disabled?this.safeSetState({status:ll},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,a),this.safeSetState({status:sl},(function(){t.props.onEntering(o,a),t.onTransitionEnd(l,(function(){t.safeSetState({status:ll},(function(){t.props.onEntered(o,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:rl.findDOMNode(this);t&&!ol.disabled?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:rl.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,fc(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return nt.createElement(al.Provider,{value:null},"function"==typeof n?n(e,r):nt.cloneElement(nt.Children.only(n),r))},t}(nt.Component);function ul(){}cl.contextType=al,cl.propTypes={},cl.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ul,onEntering:ul,onEntered:ul,onExit:ul,onExiting:ul,onExited:ul},cl.UNMOUNTED="unmounted",cl.EXITED="exited",cl.ENTERING=sl,cl.ENTERED=ll,cl.EXITING="exiting";var pl=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=il(n.className,r):n.setAttribute("class",il(n.className&&n.className.baseVal||"",r)));var n,r}))},dl=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),i=r[0],o=r[1];t.removeClasses(i,"exit"),t.addClass(i,o?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),i=r[0],o=r[1]?"appear":"enter";t.addClass(i,o,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),i=r[0],o=r[1]?"appear":"enter";t.removeClasses(i,o),t.addClass(i,o,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,i=r?(r&&n?n+"-":"")+e:n[e];return{baseClassName:i,activeClassName:r?i+"-active":n[e+"Active"],doneClassName:r?i+"-done":n[e+"Done"]}},t}Fi(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&i&&(r+=" "+i),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,i=n.active,o=n.done;this.appliedClasses[t]={},r&&pl(e,r),i&&pl(e,i),o&&pl(e,o)},n.render=function(){var e=this.props,t=(e.classNames,fc(e,["classNames"]));return nt.createElement(cl,Di({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(nt.Component);function hl(e,t){var n=Object.create(null);return e&&el.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&tl(e)?t(e):e}(e)})),n}function fl(e,t,n){return null!=n[t]?n[t]:e.props[t]}function El(e,t,n){var r=hl(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var a in e)a in t?o.length&&(i[a]=o,o=[]):o.push(a);var s={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var c=i[l][r];s[i[l][r]]=n(c)}s[l]=n(l)}for(r=0;r<o.length;r++)s[o[r]]=n(o[r]);return s}(t,r);return Object.keys(i).forEach((function(o){var a=i[o];if(tl(a)){var s=o in t,l=o in r,c=t[o],u=tl(c)&&!c.props.in;!l||s&&!u?l||!s||u?l&&s&&tl(c)&&(i[o]=nl(a,{onExited:n.bind(null,a),in:c.props.in,exit:fl(a,"exit",e),enter:fl(a,"enter",e)})):i[o]=nl(a,{in:!1}):i[o]=nl(a,{onExited:n.bind(null,a),in:!0,exit:fl(a,"exit",e),enter:fl(a,"enter",e)})}})),i}dl.defaultProps={classNames:""},dl.propTypes={};var xl=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},ml=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}Fi(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,o=t.handleExited;return{children:t.firstRender?(n=e,r=o,hl(n.children,(function(e){return nl(e,{onExited:r.bind(null,e),in:!0,appear:fl(e,"appear",n),enter:fl(e,"enter",n),exit:fl(e,"exit",n)})}))):El(e,i,o),firstRender:!1}},n.handleExited=function(e,t){var n=hl(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Di({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=fc(e,["component","childFactory"]),i=this.state.contextValue,o=xl(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?nt.createElement(al.Provider,{value:i},o):nt.createElement(al.Provider,{value:i},nt.createElement(t,r,o))},t}(nt.Component);ml.propTypes={},ml.defaultProps={component:"div",childFactory:function(e){return e}};var vl,gl,yl=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExited",1,n)},t}Fi(t,e);var n=t.prototype;return n.handleLifecycle=function(e,t,n){var r,i=this.props.children,o=nt.Children.toArray(i)[t];if(o.props[e]&&(r=o.props)[e].apply(r,n),this.props[e]){var a=o.props.nodeRef?void 0:rl.findDOMNode(this);this.props[e](a)}},n.render=function(){var e=this.props,t=e.children,n=e.in,r=fc(e,["children","in"]),i=nt.Children.toArray(t),o=i[0],a=i[1];return delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,nt.createElement(ml,r,n?nt.cloneElement(o,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):nt.cloneElement(a,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},t}(nt.Component);yl.propTypes={};var Cl="out-in",bl="in-out",Sl=function(e,t,n){return function(){var r;e.props[t]&&(r=e.props)[t].apply(r,arguments),n()}},Nl=((vl={})[Cl]=function(e){var t=e.current,n=e.changeState;return nt.cloneElement(t,{in:!1,onExited:Sl(t,"onExited",(function(){n(sl,null)}))})},vl[bl]=function(e){var t=e.current,n=e.changeState,r=e.children;return[t,nt.cloneElement(r,{in:!0,onEntered:Sl(r,"onEntered",(function(){n(sl)}))})]},vl),kl=((gl={})[Cl]=function(e){var t=e.children,n=e.changeState;return nt.cloneElement(t,{in:!0,onEntered:Sl(t,"onEntered",(function(){n(ll,nt.cloneElement(t,{in:!0}))}))})},gl[bl]=function(e){var t=e.current,n=e.children,r=e.changeState;return[nt.cloneElement(t,{in:!1,onExited:Sl(t,"onExited",(function(){r(ll,nt.cloneElement(n,{in:!0}))}))}),nt.cloneElement(n,{in:!0})]},gl),Tl=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={status:ll,current:null},t.appeared=!1,t.changeState=function(e,n){void 0===n&&(n=t.state.current),t.setState({status:e,current:n})},t}Fi(t,e);var n=t.prototype;return n.componentDidMount=function(){this.appeared=!0},t.getDerivedStateFromProps=function(e,t){return null==e.children?{current:null}:t.status===sl&&e.mode===bl?{status:sl}:!t.current||(n=t.current)===(r=e.children)||nt.isValidElement(n)&&nt.isValidElement(r)&&null!=n.key&&n.key===r.key?{current:nt.cloneElement(e.children,{in:!0})}:{status:"exiting"};var n,r},n.render=function(){var e,t=this.props,n=t.children,r=t.mode,i=this.state,o=i.status,a=i.current,s={children:n,current:a,changeState:this.changeState,status:o};switch(o){case sl:e=kl[r](s);break;case"exiting":e=Nl[r](s);break;case ll:e=a}return nt.createElement(al.Provider,{value:{isMounting:!this.appeared}},e)},t}(nt.Component);Tl.propTypes={},Tl.defaultProps={mode:Cl};var Ol=Object.freeze({__proto__:null,CSSTransition:dl,ReplaceTransition:yl,SwitchTransition:Tl,TransitionGroup:ml,Transition:cl,config:ol});export default Ol;export{dl as CSSTransition,Ol as ReactTransitionGroup,Tl as SwitchTransition,cl as Transition,ml as TransitionGroup};