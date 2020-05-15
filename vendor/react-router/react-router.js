import React,{Component}from"react";import PropTypes from"prop-types";import reactIs from"react-is";function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,subClass.__proto__=superClass}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function isAbsolute(pathname){return"/"===pathname.charAt(0)}function spliceOne(list,index){for(var i=index,k=i+1,n=list.length;k<n;i+=1,k+=1)list[i]=list[k];list.pop()}function valueOf(obj){return obj.valueOf?obj.valueOf():Object.prototype.valueOf.call(obj)}function invariant(condition,message){if(!condition)throw new Error("Invariant failed")}function createPath(location){var pathname=location.pathname,search=location.search,hash=location.hash,path=pathname||"/";return search&&"?"!==search&&(path+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(path+="#"===hash.charAt(0)?hash:"#"+hash),path}function createLocation(path,state,key,currentLocation){var location;"string"==typeof path?(location=function(path){var pathname=path||"/",search="",hash="",hashIndex=pathname.indexOf("#");-1!==hashIndex&&(hash=pathname.substr(hashIndex),pathname=pathname.substr(0,hashIndex));var searchIndex=pathname.indexOf("?");return-1!==searchIndex&&(search=pathname.substr(searchIndex),pathname=pathname.substr(0,searchIndex)),{pathname,search:"?"===search?"":search,hash:"#"===hash?"":hash}}(path)).state=state:(void 0===(location=_extends({},path)).pathname&&(location.pathname=""),location.search?"?"!==location.search.charAt(0)&&(location.search="?"+location.search):location.search="",location.hash?"#"!==location.hash.charAt(0)&&(location.hash="#"+location.hash):location.hash="",void 0!==state&&void 0===location.state&&(location.state=state));try{location.pathname=decodeURI(location.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+location.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return key&&(location.key=key),currentLocation?location.pathname?"/"!==location.pathname.charAt(0)&&(location.pathname=function(to,from){void 0===from&&(from="");var hasTrailingSlash,toParts=to&&to.split("/")||[],fromParts=from&&from.split("/")||[],isToAbs=to&&isAbsolute(to),isFromAbs=from&&isAbsolute(from),mustEndAbs=isToAbs||isFromAbs;if(to&&isAbsolute(to)?fromParts=toParts:toParts.length&&(fromParts.pop(),fromParts=fromParts.concat(toParts)),!fromParts.length)return"/";if(fromParts.length){var last=fromParts[fromParts.length-1];hasTrailingSlash="."===last||".."===last||""===last}else hasTrailingSlash=!1;for(var up=0,i=fromParts.length;i>=0;i--){var part=fromParts[i];"."===part?spliceOne(fromParts,i):".."===part?(spliceOne(fromParts,i),up++):up&&(spliceOne(fromParts,i),up--)}if(!mustEndAbs)for(;up--;up)fromParts.unshift("..");!mustEndAbs||""===fromParts[0]||fromParts[0]&&isAbsolute(fromParts[0])||fromParts.unshift("");var result=fromParts.join("/");return hasTrailingSlash&&"/"!==result.substr(-1)&&(result+="/"),result}(location.pathname,currentLocation.pathname)):location.pathname=currentLocation.pathname:location.pathname||(location.pathname="/"),location}function locationsAreEqual(a,b){return a.pathname===b.pathname&&a.search===b.search&&a.hash===b.hash&&a.key===b.key&&function valueEqual(a,b){if(a===b)return!0;if(null==a||null==b)return!1;if(Array.isArray(a))return Array.isArray(b)&&a.length===b.length&&a.every((function(item,index){return valueEqual(item,b[index])}));if("object"==typeof a||"object"==typeof b){var aValue=valueOf(a),bValue=valueOf(b);return aValue!==a||bValue!==b?valueEqual(aValue,bValue):Object.keys(Object.assign({},a,b)).every((function(key){return valueEqual(a[key],b[key])}))}return!1}(a.state,b.state)}function clamp(n,lowerBound,upperBound){return Math.min(Math.max(n,lowerBound),upperBound)}function createMemoryHistory(props){void 0===props&&(props={});var prompt,listeners,_props=props,getUserConfirmation=_props.getUserConfirmation,_props$initialEntries=_props.initialEntries,initialEntries=void 0===_props$initialEntries?["/"]:_props$initialEntries,_props$initialIndex=_props.initialIndex,initialIndex=void 0===_props$initialIndex?0:_props$initialIndex,_props$keyLength=_props.keyLength,keyLength=void 0===_props$keyLength?6:_props$keyLength,transitionManager=(prompt=null,listeners=[],{setPrompt:function(nextPrompt){return prompt=nextPrompt,function(){prompt===nextPrompt&&(prompt=null)}},confirmTransitionTo:function(location,action,getUserConfirmation,callback){if(null!=prompt){var result="function"==typeof prompt?prompt(location,action):prompt;"string"==typeof result?"function"==typeof getUserConfirmation?getUserConfirmation(result,callback):callback(!0):callback(!1!==result)}else callback(!0)},appendListener:function(fn){var isActive=!0;function listener(){isActive&&fn.apply(void 0,arguments)}return listeners.push(listener),function(){isActive=!1,listeners=listeners.filter((function(item){return item!==listener}))}},notifyListeners:function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];listeners.forEach((function(listener){return listener.apply(void 0,args)}))}});function setState(nextState){_extends(history,nextState),history.length=history.entries.length,transitionManager.notifyListeners(history.location,history.action)}function createKey(){return Math.random().toString(36).substr(2,keyLength)}var index=clamp(initialIndex,0,initialEntries.length-1),entries=initialEntries.map((function(entry){return createLocation(entry,void 0,"string"==typeof entry?createKey():entry.key||createKey())})),createHref=createPath;function go(n){var nextIndex=clamp(history.index+n,0,history.entries.length-1),location=history.entries[nextIndex];transitionManager.confirmTransitionTo(location,"POP",getUserConfirmation,(function(ok){ok?setState({action:"POP",location,index:nextIndex}):setState()}))}var history={length:entries.length,action:"POP",location:entries[index],index,entries,createHref,push:function(path,state){var location=createLocation(path,state,createKey(),history.location);transitionManager.confirmTransitionTo(location,"PUSH",getUserConfirmation,(function(ok){if(ok){var nextIndex=history.index+1,nextEntries=history.entries.slice(0);nextEntries.length>nextIndex?nextEntries.splice(nextIndex,nextEntries.length-nextIndex,location):nextEntries.push(location),setState({action:"PUSH",location,index:nextIndex,entries:nextEntries})}}))},replace:function(path,state){var location=createLocation(path,state,createKey(),history.location);transitionManager.confirmTransitionTo(location,"REPLACE",getUserConfirmation,(function(ok){ok&&(history.entries[history.index]=location,setState({action:"REPLACE",location}))}))},go,goBack:function(){go(-1)},goForward:function(){go(1)},canGo:function(n){var nextIndex=history.index+n;return nextIndex>=0&&nextIndex<history.entries.length},block:function(prompt){return void 0===prompt&&(prompt=!1),transitionManager.setPrompt(prompt)},listen:function(listener){return transitionManager.appendListener(listener)}};return history}var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function createEventEmitter(value){var handlers=[];return{on:function(handler){handlers.push(handler)},off:function(handler){handlers=handlers.filter((function(h){return h!==handler}))},get:function(){return value},set:function(newValue,changedBits){value=newValue,handlers.forEach((function(handler){return handler(value,changedBits)}))}}}var index=React.createContext||function(defaultValue,calculateChangedBits){var _Provider$childContex,_Consumer$contextType,key,contextProp="__create-react-context-"+((commonjsGlobal[key="__global_unique_id__"]=(commonjsGlobal[key]||0)+1)+"__"),Provider=function(_Component){function Provider(){var _this;return(_this=_Component.apply(this,arguments)||this).emitter=createEventEmitter(_this.props.value),_this}_inheritsLoose(Provider,_Component);var _proto=Provider.prototype;return _proto.getChildContext=function(){var _ref;return(_ref={})[contextProp]=this.emitter,_ref},_proto.componentWillReceiveProps=function(nextProps){if(this.props.value!==nextProps.value){var changedBits,oldValue=this.props.value,newValue=nextProps.value;((x=oldValue)===(y=newValue)?0!==x||1/x==1/y:x!=x&&y!=y)?changedBits=0:(changedBits="function"==typeof calculateChangedBits?calculateChangedBits(oldValue,newValue):1073741823,0!==(changedBits|=0)&&this.emitter.set(nextProps.value,changedBits))}var x,y},_proto.render=function(){return this.props.children},Provider}(Component);Provider.childContextTypes=((_Provider$childContex={})[contextProp]=PropTypes.object.isRequired,_Provider$childContex);var Consumer=function(_Component2){function Consumer(){var _this2;return(_this2=_Component2.apply(this,arguments)||this).state={value:_this2.getValue()},_this2.onUpdate=function(newValue,changedBits){0!=((0|_this2.observedBits)&changedBits)&&_this2.setState({value:_this2.getValue()})},_this2}_inheritsLoose(Consumer,_Component2);var _proto2=Consumer.prototype;return _proto2.componentWillReceiveProps=function(nextProps){var observedBits=nextProps.observedBits;this.observedBits=null==observedBits?1073741823:observedBits},_proto2.componentDidMount=function(){this.context[contextProp]&&this.context[contextProp].on(this.onUpdate);var observedBits=this.props.observedBits;this.observedBits=null==observedBits?1073741823:observedBits},_proto2.componentWillUnmount=function(){this.context[contextProp]&&this.context[contextProp].off(this.onUpdate)},_proto2.getValue=function(){return this.context[contextProp]?this.context[contextProp].get():defaultValue},_proto2.render=function(){return(children=this.props.children,Array.isArray(children)?children[0]:children)(this.state.value);var children},Consumer}(Component);return Consumer.contextTypes=((_Consumer$contextType={})[contextProp]=PropTypes.object,_Consumer$contextType),{Provider,Consumer}},isarray=Array.isArray||function(arr){return"[object Array]"==Object.prototype.toString.call(arr)},pathToRegexp_1=pathToRegexp,parse_1=parse,compile_1=function(str,options){return tokensToFunction(parse(str,options),options)},tokensToFunction_1=tokensToFunction,tokensToRegExp_1=tokensToRegExp,PATH_REGEXP=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function parse(str,options){for(var res,tokens=[],key=0,index=0,path="",defaultDelimiter=options&&options.delimiter||"/";null!=(res=PATH_REGEXP.exec(str));){var m=res[0],escaped=res[1],offset=res.index;if(path+=str.slice(index,offset),index=offset+m.length,escaped)path+=escaped[1];else{var next=str[index],prefix=res[2],name=res[3],capture=res[4],group=res[5],modifier=res[6],asterisk=res[7];path&&(tokens.push(path),path="");var partial=null!=prefix&&null!=next&&next!==prefix,repeat="+"===modifier||"*"===modifier,optional="?"===modifier||"*"===modifier,delimiter=res[2]||defaultDelimiter,pattern=capture||group;tokens.push({name:name||key++,prefix:prefix||"",delimiter,optional,repeat,partial,asterisk:!!asterisk,pattern:pattern?escapeGroup(pattern):asterisk?".*":"[^"+escapeString(delimiter)+"]+?"})}}return index<str.length&&(path+=str.substr(index)),path&&tokens.push(path),tokens}function encodeURIComponentPretty(str){return encodeURI(str).replace(/[\/?#]/g,(function(c){return"%"+c.charCodeAt(0).toString(16).toUpperCase()}))}function tokensToFunction(tokens,options){for(var matches=new Array(tokens.length),i=0;i<tokens.length;i++)"object"==typeof tokens[i]&&(matches[i]=new RegExp("^(?:"+tokens[i].pattern+")$",flags(options)));return function(obj,opts){for(var path="",data=obj||{},encode=(opts||{}).pretty?encodeURIComponentPretty:encodeURIComponent,i=0;i<tokens.length;i++){var token=tokens[i];if("string"!=typeof token){var segment,value=data[token.name];if(null==value){if(token.optional){token.partial&&(path+=token.prefix);continue}throw new TypeError('Expected "'+token.name+'" to be defined')}if(isarray(value)){if(!token.repeat)throw new TypeError('Expected "'+token.name+'" to not repeat, but received `'+JSON.stringify(value)+"`");if(0===value.length){if(token.optional)continue;throw new TypeError('Expected "'+token.name+'" to not be empty')}for(var j=0;j<value.length;j++){if(segment=encode(value[j]),!matches[i].test(segment))throw new TypeError('Expected all "'+token.name+'" to match "'+token.pattern+'", but received `'+JSON.stringify(segment)+"`");path+=(0===j?token.prefix:token.delimiter)+segment}}else{if(segment=token.asterisk?encodeURI(value).replace(/[?#]/g,(function(c){return"%"+c.charCodeAt(0).toString(16).toUpperCase()})):encode(value),!matches[i].test(segment))throw new TypeError('Expected "'+token.name+'" to match "'+token.pattern+'", but received "'+segment+'"');path+=token.prefix+segment}}else path+=token}return path}}function escapeString(str){return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function escapeGroup(group){return group.replace(/([=!:$\/()])/g,"\\$1")}function attachKeys(re,keys){return re.keys=keys,re}function flags(options){return options&&options.sensitive?"":"i"}function tokensToRegExp(tokens,keys,options){isarray(keys)||(options=keys||options,keys=[]);for(var strict=(options=options||{}).strict,end=!1!==options.end,route="",i=0;i<tokens.length;i++){var token=tokens[i];if("string"==typeof token)route+=escapeString(token);else{var prefix=escapeString(token.prefix),capture="(?:"+token.pattern+")";keys.push(token),token.repeat&&(capture+="(?:"+prefix+capture+")*"),route+=capture=token.optional?token.partial?prefix+"("+capture+")?":"(?:"+prefix+"("+capture+"))?":prefix+"("+capture+")"}}var delimiter=escapeString(options.delimiter||"/"),endsWithDelimiter=route.slice(-delimiter.length)===delimiter;return strict||(route=(endsWithDelimiter?route.slice(0,-delimiter.length):route)+"(?:"+delimiter+"(?=$))?"),route+=end?"$":strict&&endsWithDelimiter?"":"(?="+delimiter+"|$)",attachKeys(new RegExp("^"+route,flags(options)),keys)}function pathToRegexp(path,keys,options){return isarray(keys)||(options=keys||options,keys=[]),options=options||{},path instanceof RegExp?function(path,keys){var groups=path.source.match(/\((?!\?)/g);if(groups)for(var i=0;i<groups.length;i++)keys.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return attachKeys(path,keys)}(path,keys):isarray(path)?function(path,keys,options){for(var parts=[],i=0;i<path.length;i++)parts.push(pathToRegexp(path[i],keys,options).source);return attachKeys(new RegExp("(?:"+parts.join("|")+")",flags(options)),keys)}(path,keys,options):function(path,keys,options){return tokensToRegExp(parse(path,options),keys,options)}(path,keys,options)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}pathToRegexp_1.parse=parse_1,pathToRegexp_1.compile=compile_1,pathToRegexp_1.tokensToFunction=tokensToFunction_1,pathToRegexp_1.tokensToRegExp=tokensToRegExp_1;var REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;var hoistNonReactStatics_cjs=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent},historyContext=function(name){var context=index();return context.displayName=name,context}("Router-History"),context=function(name){var context=index();return context.displayName=name,context}("Router"),Router=function(_React$Component){function Router(props){var _this;return(_this=_React$Component.call(this,props)||this).state={location:props.history.location},_this._isMounted=!1,_this._pendingLocation=null,props.staticContext||(_this.unlisten=props.history.listen((function(location){_this._isMounted?_this.setState({location}):_this._pendingLocation=location}))),_this}_inheritsLoose(Router,_React$Component),Router.computeRootMatch=function(pathname){return{path:"/",url:"/",params:{},isExact:"/"===pathname}};var _proto=Router.prototype;return _proto.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},_proto.componentWillUnmount=function(){this.unlisten&&this.unlisten()},_proto.render=function(){return React.createElement(context.Provider,{value:{history:this.props.history,location:this.state.location,match:Router.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},React.createElement(historyContext.Provider,{children:this.props.children||null,value:this.props.history}))},Router}(React.Component),MemoryRouter=function(_React$Component){function MemoryRouter(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this).history=createMemoryHistory(_this.props),_this}return _inheritsLoose(MemoryRouter,_React$Component),MemoryRouter.prototype.render=function(){return React.createElement(Router,{history:this.history,children:this.props.children})},MemoryRouter}(React.Component),Lifecycle=function(_React$Component){function Lifecycle(){return _React$Component.apply(this,arguments)||this}_inheritsLoose(Lifecycle,_React$Component);var _proto=Lifecycle.prototype;return _proto.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},_proto.componentDidUpdate=function(prevProps){this.props.onUpdate&&this.props.onUpdate.call(this,this,prevProps)},_proto.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},_proto.render=function(){return null},Lifecycle}(React.Component);function Prompt(_ref){var message=_ref.message,_ref$when=_ref.when,when=void 0===_ref$when||_ref$when;return React.createElement(context.Consumer,null,(function(context){if(context||invariant(!1),!when||context.staticContext)return null;var method=context.history.block;return React.createElement(Lifecycle,{onMount:function(self){self.release=method(message)},onUpdate:function(self,prevProps){prevProps.message!==message&&(self.release(),self.release=method(message))},onUnmount:function(self){self.release()},message})}))}var cache={},cacheCount=0;function generatePath(path,params){return void 0===path&&(path="/"),void 0===params&&(params={}),"/"===path?path:function(path){if(cache[path])return cache[path];var generator=pathToRegexp_1.compile(path);return cacheCount<1e4&&(cache[path]=generator,cacheCount++),generator}(path)(params,{pretty:!0})}function Redirect(_ref){var computedMatch=_ref.computedMatch,to=_ref.to,_ref$push=_ref.push,push=void 0!==_ref$push&&_ref$push;return React.createElement(context.Consumer,null,(function(context){context||invariant(!1);var history=context.history,staticContext=context.staticContext,method=push?history.push:history.replace,location=createLocation(computedMatch?"string"==typeof to?generatePath(to,computedMatch.params):_extends({},to,{pathname:generatePath(to.pathname,computedMatch.params)}):to);return staticContext?(method(location),null):React.createElement(Lifecycle,{onMount:function(){method(location)},onUpdate:function(self,prevProps){var prevLocation=createLocation(prevProps.to);locationsAreEqual(prevLocation,_extends({},location,{key:prevLocation.key}))||method(location)},to})}))}var cache$1={},cacheCount$1=0;function matchPath(pathname,options){void 0===options&&(options={}),("string"==typeof options||Array.isArray(options))&&(options={path:options});var _options=options,path=_options.path,_options$exact=_options.exact,exact=void 0!==_options$exact&&_options$exact,_options$strict=_options.strict,strict=void 0!==_options$strict&&_options$strict,_options$sensitive=_options.sensitive,sensitive=void 0!==_options$sensitive&&_options$sensitive;return[].concat(path).reduce((function(matched,path){if(!path&&""!==path)return null;if(matched)return matched;var _compilePath=function(path,options){var cacheKey=""+options.end+options.strict+options.sensitive,pathCache=cache$1[cacheKey]||(cache$1[cacheKey]={});if(pathCache[path])return pathCache[path];var keys=[],result={regexp:pathToRegexp_1(path,keys,options),keys};return cacheCount$1<1e4&&(pathCache[path]=result,cacheCount$1++),result}(path,{end:exact,strict,sensitive}),regexp=_compilePath.regexp,keys=_compilePath.keys,match=regexp.exec(pathname);if(!match)return null;var url=match[0],values=match.slice(1),isExact=pathname===url;return exact&&!isExact?null:{path,url:"/"===path&&""===url?"/":url,isExact,params:keys.reduce((function(memo,key,index){return memo[key.name]=values[index],memo}),{})}}),null)}var Route=function(_React$Component){function Route(){return _React$Component.apply(this,arguments)||this}return _inheritsLoose(Route,_React$Component),Route.prototype.render=function(){var _this=this;return React.createElement(context.Consumer,null,(function(context$1){context$1||invariant(!1);var location=_this.props.location||context$1.location,props=_extends({},context$1,{location,match:_this.props.computedMatch?_this.props.computedMatch:_this.props.path?matchPath(location.pathname,_this.props):context$1.match}),_this$props=_this.props,children=_this$props.children,component=_this$props.component,render=_this$props.render;return Array.isArray(children)&&0===children.length&&(children=null),React.createElement(context.Provider,{value:props},props.match?children?"function"==typeof children?children(props):children:component?React.createElement(component,props):render?render(props):null:"function"==typeof children?children(props):null)}))},Route}(React.Component);function addLeadingSlash(path){return"/"===path.charAt(0)?path:"/"+path}function stripBasename(basename,location){if(!basename)return location;var base=addLeadingSlash(basename);return 0!==location.pathname.indexOf(base)?location:_extends({},location,{pathname:location.pathname.substr(base.length)})}function createURL(location){return"string"==typeof location?location:createPath(location)}function staticHandler(methodName){return function(){invariant(!1)}}function noop(){}var StaticRouter=function(_React$Component){function StaticRouter(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this).handlePush=function(location){return _this.navigateTo(location,"PUSH")},_this.handleReplace=function(location){return _this.navigateTo(location,"REPLACE")},_this.handleListen=function(){return noop},_this.handleBlock=function(){return noop},_this}_inheritsLoose(StaticRouter,_React$Component);var _proto=StaticRouter.prototype;return _proto.navigateTo=function(location,action){var _this$props=this.props,_this$props$basename=_this$props.basename,basename=void 0===_this$props$basename?"":_this$props$basename,_this$props$context=_this$props.context,context=void 0===_this$props$context?{}:_this$props$context;context.action=action,context.location=function(basename,location){return basename?_extends({},location,{pathname:addLeadingSlash(basename)+location.pathname}):location}(basename,createLocation(location)),context.url=createURL(context.location)},_proto.render=function(){var _this$props2=this.props,_this$props2$basename=_this$props2.basename,basename=void 0===_this$props2$basename?"":_this$props2$basename,_this$props2$context=_this$props2.context,context=void 0===_this$props2$context?{}:_this$props2$context,_this$props2$location=_this$props2.location,location=void 0===_this$props2$location?"/":_this$props2$location,rest=_objectWithoutPropertiesLoose(_this$props2,["basename","context","location"]),history={createHref:function(path){return addLeadingSlash(basename+createURL(path))},action:"POP",location:stripBasename(basename,createLocation(location)),push:this.handlePush,replace:this.handleReplace,go:staticHandler(),goBack:staticHandler(),goForward:staticHandler(),listen:this.handleListen,block:this.handleBlock};return React.createElement(Router,_extends({},rest,{history,staticContext:context}))},StaticRouter}(React.Component),Switch=function(_React$Component){function Switch(){return _React$Component.apply(this,arguments)||this}return _inheritsLoose(Switch,_React$Component),Switch.prototype.render=function(){var _this=this;return React.createElement(context.Consumer,null,(function(context){context||invariant(!1);var element,match,location=_this.props.location||context.location;return React.Children.forEach(_this.props.children,(function(child){if(null==match&&React.isValidElement(child)){element=child;var path=child.props.path||child.props.from;match=path?matchPath(location.pathname,_extends({},child.props,{path})):context.match}})),match?React.cloneElement(element,{location,computedMatch:match}):null}))},Switch}(React.Component);function withRouter(Component){var displayName="withRouter("+(Component.displayName||Component.name)+")",C=function(props){var wrappedComponentRef=props.wrappedComponentRef,remainingProps=_objectWithoutPropertiesLoose(props,["wrappedComponentRef"]);return React.createElement(context.Consumer,null,(function(context){return context||invariant(!1),React.createElement(Component,_extends({},remainingProps,context,{ref:wrappedComponentRef}))}))};return C.displayName=displayName,C.WrappedComponent=Component,hoistNonReactStatics_cjs(C,Component)}var useContext=React.useContext;function useHistory(){return useContext(historyContext)}function useLocation(){return useContext(context).location}function useParams(){var match=useContext(context).match;return match?match.params:{}}function useRouteMatch(path){var location=useLocation(),match=useContext(context).match;return path?matchPath(location.pathname,path):match}var ReactRouter=Object.freeze({__proto__:null,MemoryRouter,Prompt,Redirect,Route,Router,StaticRouter,Switch,__HistoryContext:historyContext,__RouterContext:context,generatePath,matchPath,useHistory,useLocation,useParams,useRouteMatch,withRouter});export default ReactRouter;export{MemoryRouter,Prompt,ReactRouter,Redirect,Route,Router,StaticRouter,Switch,generatePath,matchPath,useHistory,useLocation,useParams,useRouteMatch,withRouter};