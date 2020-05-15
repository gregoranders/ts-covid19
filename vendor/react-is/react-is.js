function createCommonjsModule(fn,module){return fn(module={exports:{}},module.exports),module.exports}var reactIs_development=createCommonjsModule((function(module,exports){!function(){var hasSymbol="function"==typeof Symbol&&Symbol.for,REACT_ELEMENT_TYPE=hasSymbol?Symbol.for("react.element"):60103,REACT_PORTAL_TYPE=hasSymbol?Symbol.for("react.portal"):60106,REACT_FRAGMENT_TYPE=hasSymbol?Symbol.for("react.fragment"):60107,REACT_STRICT_MODE_TYPE=hasSymbol?Symbol.for("react.strict_mode"):60108,REACT_PROFILER_TYPE=hasSymbol?Symbol.for("react.profiler"):60114,REACT_PROVIDER_TYPE=hasSymbol?Symbol.for("react.provider"):60109,REACT_CONTEXT_TYPE=hasSymbol?Symbol.for("react.context"):60110,REACT_ASYNC_MODE_TYPE=hasSymbol?Symbol.for("react.async_mode"):60111,REACT_CONCURRENT_MODE_TYPE=hasSymbol?Symbol.for("react.concurrent_mode"):60111,REACT_FORWARD_REF_TYPE=hasSymbol?Symbol.for("react.forward_ref"):60112,REACT_SUSPENSE_TYPE=hasSymbol?Symbol.for("react.suspense"):60113,REACT_SUSPENSE_LIST_TYPE=hasSymbol?Symbol.for("react.suspense_list"):60120,REACT_MEMO_TYPE=hasSymbol?Symbol.for("react.memo"):60115,REACT_LAZY_TYPE=hasSymbol?Symbol.for("react.lazy"):60116,REACT_BLOCK_TYPE=hasSymbol?Symbol.for("react.block"):60121,REACT_FUNDAMENTAL_TYPE=hasSymbol?Symbol.for("react.fundamental"):60117,REACT_RESPONDER_TYPE=hasSymbol?Symbol.for("react.responder"):60118,REACT_SCOPE_TYPE=hasSymbol?Symbol.for("react.scope"):60119;function typeOf(object){if("object"==typeof object&&null!==object){var $$typeof=object.$$typeof;switch($$typeof){case REACT_ELEMENT_TYPE:var type=object.type;switch(type){case REACT_ASYNC_MODE_TYPE:case REACT_CONCURRENT_MODE_TYPE:case REACT_FRAGMENT_TYPE:case REACT_PROFILER_TYPE:case REACT_STRICT_MODE_TYPE:case REACT_SUSPENSE_TYPE:return type;default:var $$typeofType=type&&type.$$typeof;switch($$typeofType){case REACT_CONTEXT_TYPE:case REACT_FORWARD_REF_TYPE:case REACT_LAZY_TYPE:case REACT_MEMO_TYPE:case REACT_PROVIDER_TYPE:return $$typeofType;default:return $$typeof}}case REACT_PORTAL_TYPE:return $$typeof}}}var AsyncMode=REACT_ASYNC_MODE_TYPE,ConcurrentMode=REACT_CONCURRENT_MODE_TYPE,ContextConsumer=REACT_CONTEXT_TYPE,ContextProvider=REACT_PROVIDER_TYPE,Element=REACT_ELEMENT_TYPE,ForwardRef=REACT_FORWARD_REF_TYPE,Fragment=REACT_FRAGMENT_TYPE,Lazy=REACT_LAZY_TYPE,Memo=REACT_MEMO_TYPE,Portal=REACT_PORTAL_TYPE,Profiler=REACT_PROFILER_TYPE,StrictMode=REACT_STRICT_MODE_TYPE,Suspense=REACT_SUSPENSE_TYPE,hasWarnedAboutDeprecatedIsAsyncMode=!1;function isConcurrentMode(object){return typeOf(object)===REACT_CONCURRENT_MODE_TYPE}exports.AsyncMode=AsyncMode,exports.ConcurrentMode=ConcurrentMode,exports.ContextConsumer=ContextConsumer,exports.ContextProvider=ContextProvider,exports.Element=Element,exports.ForwardRef=ForwardRef,exports.Fragment=Fragment,exports.Lazy=Lazy,exports.Memo=Memo,exports.Portal=Portal,exports.Profiler=Profiler,exports.StrictMode=StrictMode,exports.Suspense=Suspense,exports.isAsyncMode=function(object){return hasWarnedAboutDeprecatedIsAsyncMode||(hasWarnedAboutDeprecatedIsAsyncMode=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),isConcurrentMode(object)||typeOf(object)===REACT_ASYNC_MODE_TYPE},exports.isConcurrentMode=isConcurrentMode,exports.isContextConsumer=function(object){return typeOf(object)===REACT_CONTEXT_TYPE},exports.isContextProvider=function(object){return typeOf(object)===REACT_PROVIDER_TYPE},exports.isElement=function(object){return"object"==typeof object&&null!==object&&object.$$typeof===REACT_ELEMENT_TYPE},exports.isForwardRef=function(object){return typeOf(object)===REACT_FORWARD_REF_TYPE},exports.isFragment=function(object){return typeOf(object)===REACT_FRAGMENT_TYPE},exports.isLazy=function(object){return typeOf(object)===REACT_LAZY_TYPE},exports.isMemo=function(object){return typeOf(object)===REACT_MEMO_TYPE},exports.isPortal=function(object){return typeOf(object)===REACT_PORTAL_TYPE},exports.isProfiler=function(object){return typeOf(object)===REACT_PROFILER_TYPE},exports.isStrictMode=function(object){return typeOf(object)===REACT_STRICT_MODE_TYPE},exports.isSuspense=function(object){return typeOf(object)===REACT_SUSPENSE_TYPE},exports.isValidElementType=function(type){return"string"==typeof type||"function"==typeof type||type===REACT_FRAGMENT_TYPE||type===REACT_CONCURRENT_MODE_TYPE||type===REACT_PROFILER_TYPE||type===REACT_STRICT_MODE_TYPE||type===REACT_SUSPENSE_TYPE||type===REACT_SUSPENSE_LIST_TYPE||"object"==typeof type&&null!==type&&(type.$$typeof===REACT_LAZY_TYPE||type.$$typeof===REACT_MEMO_TYPE||type.$$typeof===REACT_PROVIDER_TYPE||type.$$typeof===REACT_CONTEXT_TYPE||type.$$typeof===REACT_FORWARD_REF_TYPE||type.$$typeof===REACT_FUNDAMENTAL_TYPE||type.$$typeof===REACT_RESPONDER_TYPE||type.$$typeof===REACT_SCOPE_TYPE||type.$$typeof===REACT_BLOCK_TYPE)},exports.typeOf=typeOf}()})),reactIs=(reactIs_development.AsyncMode,reactIs_development.ConcurrentMode,reactIs_development.ContextConsumer,reactIs_development.ContextProvider,reactIs_development.Element,reactIs_development.ForwardRef,reactIs_development.Fragment,reactIs_development.Lazy,reactIs_development.Memo,reactIs_development.Portal,reactIs_development.Profiler,reactIs_development.StrictMode,reactIs_development.Suspense,reactIs_development.isAsyncMode,reactIs_development.isConcurrentMode,reactIs_development.isContextConsumer,reactIs_development.isContextProvider,reactIs_development.isElement,reactIs_development.isForwardRef,reactIs_development.isFragment,reactIs_development.isLazy,reactIs_development.isMemo,reactIs_development.isPortal,reactIs_development.isProfiler,reactIs_development.isStrictMode,reactIs_development.isSuspense,reactIs_development.isValidElementType,reactIs_development.typeOf,createCommonjsModule((function(module){module.exports=reactIs_development}))),reactIs_1=reactIs.AsyncMode,reactIs_2=reactIs.ConcurrentMode,reactIs_3=reactIs.ContextConsumer,reactIs_4=reactIs.ContextProvider,reactIs_5=reactIs.Element,reactIs_6=reactIs.ForwardRef,reactIs_7=reactIs.Fragment,reactIs_8=reactIs.Lazy,reactIs_9=reactIs.Memo,reactIs_10=reactIs.Portal,reactIs_11=reactIs.Profiler,reactIs_12=reactIs.StrictMode,reactIs_13=reactIs.Suspense,reactIs_14=reactIs.isAsyncMode,reactIs_15=reactIs.isConcurrentMode,reactIs_16=reactIs.isContextConsumer,reactIs_17=reactIs.isContextProvider,reactIs_18=reactIs.isElement,reactIs_19=reactIs.isForwardRef,reactIs_20=reactIs.isFragment,reactIs_21=reactIs.isLazy,reactIs_22=reactIs.isMemo,reactIs_23=reactIs.isPortal,reactIs_24=reactIs.isProfiler,reactIs_25=reactIs.isStrictMode,reactIs_26=reactIs.isSuspense,reactIs_27=reactIs.isValidElementType,reactIs_28=reactIs.typeOf;export default reactIs;export{reactIs_1 as AsyncMode,reactIs_2 as ConcurrentMode,reactIs_3 as ContextConsumer,reactIs_4 as ContextProvider,reactIs_5 as Element,reactIs_6 as ForwardRef,reactIs_7 as Fragment,reactIs_8 as Lazy,reactIs_9 as Memo,reactIs_10 as Portal,reactIs_11 as Profiler,reactIs_12 as StrictMode,reactIs_13 as Suspense,reactIs as __moduleExports,reactIs_14 as isAsyncMode,reactIs_15 as isConcurrentMode,reactIs_16 as isContextConsumer,reactIs_17 as isContextProvider,reactIs_18 as isElement,reactIs_19 as isForwardRef,reactIs_20 as isFragment,reactIs_21 as isLazy,reactIs_22 as isMemo,reactIs_23 as isPortal,reactIs_24 as isProfiler,reactIs_25 as isStrictMode,reactIs_26 as isSuspense,reactIs_27 as isValidElementType,reactIs_28 as typeOf};