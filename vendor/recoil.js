import Kl from"react";import Sd from"react-dom";function Jc(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}var Us,Rd=Jc((function(e,t){function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var o=n(Kl),r=n(Sd),a={setByAddingToSet:function(e,t){const n=new Set(e);return n.add(t),n},setByDeletingFromSet:function(e,t){const n=new Set(e);return n.delete(t),n},mapBySettingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n),o},mapByUpdatingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n(o.get(t))),o},mapByDeletingFromMap:function(e,t){const n=new Map(e);return n.delete(t),n}};class s{constructor(e){this.key=e}}var i={AbstractRecoilValue:s,RecoilState:class extends s{},RecoilValueReadOnly:class extends s{}};class l{}const u=new l;class c extends Error{constructor(e){super(`Tried to set the value of Recoil selector ${e} using an updater function, but it is an async selector in a pending or error state; this is not supported.`)}}const d=new Map;class f extends Error{}var p={nodes:d,registerNode:function(e){return d.has(e.key)&&e.key,d.set(e.key,e),null==e.set?new i.RecoilValueReadOnly(e.key):new i.RecoilState(e.key)},getNode:function(e){const t=d.get(e);if(null==t)throw new f(`Missing definition for RecoilValue: "${e}""`);return t},NodeMissingError:f,DefaultValue:l,DEFAULT_VALUE:u,RecoilValueNotReady:c},S=function(e,t,n){return n()};const{mapByDeletingFromMap:y,mapBySettingInMap:m,mapByUpdatingInMap:b,setByAddingToSet:h}=a,{getNode:w}=p,R=Object.freeze(new Map),A=Object.freeze(new Set);class g extends Error{}function v(e,t,n){return w(n).get(e,t)}let T=0;var V={getNodeLoadable:v,peekNodeLoadable:function(e,t,n){return v(e,t,n)[1]},setNodeValue:function(e,t,n,o){const r=w(n);if(null==r.set)throw new g("Attempt to set read-only RecoilValue: "+n);const[a,s]=r.set(e,t,o);return[a,s]},setUnvalidatedAtomValue:function(e,t,n){return{...e,atomValues:y(e.atomValues,t),nonvalidatedAtoms:m(e.nonvalidatedAtoms,t,n),dirtyAtoms:h(e.dirtyAtoms,t)}},subscribeComponentToNode:function(e,t,n){const o=T++;return[{...e,nodeToComponentSubscriptions:b(e.nodeToComponentSubscriptions,t,e=>m(null!=e?e:R,o,["TODO debug name",n]))},function(e){return{...e,nodeToComponentSubscriptions:b(e.nodeToComponentSubscriptions,t,e=>y(null!=e?e:R,o))}}]},fireNodeSubscriptions:function(e,t,n){var o;const r="enqueue"===n&&null!==(o=e.getState().nextTree)&&void 0!==o?o:e.getState().currentTree,a=function(e,t){const n=new Set,o=new Set,r=Array.from(t);for(let t=r.pop();t;t=r.pop()){var a;n.add(t),o.add(t);const s=null!==(a=e.nodeToNodeSubscriptions.get(t))&&void 0!==a?a:A;for(const e of s)o.has(e)||r.push(e)}return n}(r,t);for(const t of a){var s;(null!==(s=r.nodeToComponentSubscriptions.get(t))&&void 0!==s?s:[]).forEach(([t,o])=>{"enqueue"===n?e.getState().queuedComponentCallbacks.push(o):o(r)})}S(0,Array.from(t).join(", "),()=>{const t=e.getState().suspendedComponentResolvers;t.forEach(e=>e()),t.clear()})},detectCircularDependencies:function e(t,n){if(!n.length)return;const o=n[n.length-1],r=t.nodeToNodeSubscriptions.get(o);if(!(null==r?void 0:r.size))return;const a=n[0];if(r.has(a))throw new Error("Recoil selector has circular dependencies: "+[...n,a].reverse().join(" → "));for(const o of r)e(t,[...n,o])}},E=function(e,t){if(null!=e)return e;throw new Error(null!=t?t:"Got unexpected null or undefined")};const{useContext:_,useEffect:N,useRef:L,useState:M}=o,{fireNodeSubscriptions:k,setNodeValue:U,setUnvalidatedAtomValue:B}=V;function O(){throw new Error("This component must be used inside a <RecoilRoot> component.")}const F=Object.freeze({getState:O,replaceState:O,subscribeToTransactions:O,addTransactionMetadata:O,fireNodeSubscriptions:O});function D(e){null===e.nextTree&&(e.nextTree={...e.currentTree,dirtyAtoms:new Set,transactionMetadata:{}})}const C=o.createContext({current:F}),x=()=>_(C);function j(e){const t=x(),[n,o]=M([]);return e.setNotifyBatcherOfChange(()=>o({})),N(()=>{!function(e,t){t()}(0,()=>{const e=t.current.getState(),{currentTree:n,nextTree:o}=e;null!==o&&(o.dirtyAtoms.size&&e.transactionSubscriptions.forEach(e=>e(t.current,n)),e.queuedComponentCallbacks.forEach(e=>e(o)),e.queuedComponentCallbacks.splice(0,e.queuedComponentCallbacks.length),e.currentTree=o,e.nextTree=null)})}),null}let I=0;var P={useStoreRef:x,RecoilRoot:function({initializeState:e,children:t}){let n;const r=L(null),a={getState:()=>n.current,replaceState:e=>{const t=s.current.getState();D(t);const n=E(t.nextTree),o=e(n);o!==n&&(t.nextTree=o,E(r.current)())},subscribeToTransactions:e=>{const t=I++;return s.current.getState().transactionSubscriptions.set(t,e),{release:()=>{s.current.getState().transactionSubscriptions.delete(t)}}},addTransactionMetadata:e=>{D(s.current.getState());for(const t of Object.keys(e))E(s.current.getState().nextTree).transactionMetadata[t]=e[t]},fireNodeSubscriptions:function(e,t){k(s.current,e,t)}},s=L(a);return n=L(function(e,t){const n={currentTree:{isSnapshot:!1,transactionMetadata:{},atomValues:new Map,nonvalidatedAtoms:new Map,dirtyAtoms:new Set,nodeDeps:new Map,nodeToNodeSubscriptions:new Map,nodeToComponentSubscriptions:new Map},nextTree:null,transactionSubscriptions:new Map,queuedComponentCallbacks:[],suspendedComponentResolvers:new Set};return t&&t({set:(t,o)=>{n.currentTree=U(e,n.currentTree,t.key,o)[0]},setUnvalidatedAtomValues:e=>{e.forEach((e,t)=>{n.currentTree=B(n.currentTree,t,e)})}}),n}(a,e)),o.createElement(C.Provider,{value:s},o.createElement(j,{setNotifyBatcherOfChange:function(e){r.current=e}}),t)}};const{getNodeLoadable:$,peekNodeLoadable:z,setNodeValue:W,setUnvalidatedAtomValue:q,subscribeComponentToNode:J}=V,{AbstractRecoilValue:Y,RecoilState:G,RecoilValueReadOnly:H}=i;var K={RecoilValueReadOnly:H,AbstractRecoilValue:Y,RecoilState:G,peekRecoilValueAsLoadable:function(e,{key:t}){const n=e.getState().currentTree;return z(e,n,t)},getRecoilValueAsLoadable:function(e,{key:t}){let n;return S(0,0,()=>e.replaceState(o=>{const[r,a]=$(e,o,t);return n=a,r})),n},setRecoilValue:function(e,{key:t},n){S(0,0,()=>e.replaceState(o=>{const[r,a]=W(e,o,t,n);return e.fireNodeSubscriptions(a,"enqueue"),r}))},setUnvalidatedRecoilValue:function(e,{key:t},n){S(0,0,()=>e.replaceState(o=>{const r=q(o,t,n);return e.fireNodeSubscriptions(new Set([t]),"enqueue"),r}))},subscribeToRecoilValue:function(e,{key:t},n){let o,r;return S(0,0,()=>e.replaceState(e=>([o,r]=J(e,t,n),o))),{release:e=>e.replaceState(r)}},isRecoilValue:function(e){return e instanceof G||e instanceof H}},X=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(e.has(o))continue e;n.add(o)}return n},Q=function(e,t){const n=new Map;return e.forEach((e,o)=>{n.set(o,t(e,o))}),n};const{useCallback:Z,useEffect:ee,useMemo:te,useRef:ne,useState:oe}=o,{setByAddingToSet:re}=a,{getNodeLoadable:ae,peekNodeLoadable:se,setNodeValue:ie}=V,{DEFAULT_VALUE:le,RecoilValueNotReady:ue,getNode:ce,nodes:de}=p,{useStoreRef:fe}=P,{AbstractRecoilValue:pe,getRecoilValueAsLoadable:Se,setRecoilValue:ye,setUnvalidatedRecoilValue:me,subscribeToRecoilValue:be}=K;function he(e,t){return{isSnapshot:t.isSnapshot,transactionMetadata:{...e.transactionMetadata},atomValues:new Map(e.atomValues),nonvalidatedAtoms:new Map(e.nonvalidatedAtoms),dirtyAtoms:new Set(e.dirtyAtoms),nodeDeps:new Map(e.nodeDeps),nodeToNodeSubscriptions:Q(e.nodeToNodeSubscriptions,e=>new Set(e)),nodeToComponentSubscriptions:Q(e.nodeToComponentSubscriptions,e=>new Map(e))}}function we(e,t,n,o){if("function"==typeof o){const r=se(e,t,n.key);if("loading"===r.state)throw new ue(n.key);if("hasError"===r.state)throw r.contents;return o(r.contents)}return o}function Re(){const e=fe(),[t,n]=oe([]),o=ne(new Set);o.current=new Set;const r=ne(new Set),a=ne(new Map),s=Z(t=>{const n=a.current.get(t);n&&(n.release(e.current),a.current.delete(t))},[e,a]);return ee(()=>{const t=e.current;function i(e,t){a.current.has(t)&&n([])}X(o.current,r.current).forEach(e=>{if(a.current.has(e))return;const n=be(t,new pe(e),t=>{S(0,0,()=>{i(0,e)})});a.current.set(e,n),S(0,0,()=>{i(t.getState(),e)})}),X(r.current,o.current).forEach(e=>{s(e)}),r.current=o.current}),ee(()=>{const e=a.current;return()=>e.forEach((e,t)=>s(t))},[s]),te(()=>{function t(t){return n=>{var o;const r=e.current.getState(),a=we(e.current,null!==(o=r.nextTree)&&void 0!==o?o:r.currentTree,t,n);ye(e.current,t,a)}}function n(t){return o.current.has(t.key)||(o.current=re(o.current,t.key)),Se(e.current,t)}function r(t){return function(e,t,n){if("hasValue"===e.state)return e.contents;if("loading"===e.state)throw new Promise(e=>{n.current.getState().suspendedComponentResolvers.add(e)});throw"hasError"===e.state?e.contents:new Error(`Invalid value of loadable atom "${t.key}"`)}(n(t),t,e)}return{getRecoilValue:r,getRecoilValueLoadable:n,getRecoilState:function(e){return[r(e),t(e)]},getRecoilStateLoadable:function(e){return[n(e),t(e)]},getSetRecoilState:t,getResetRecoilState:function(t){return()=>ye(e.current,t,le)}}},[o,e])}function Ae(e){const t=fe();ee(()=>t.current.subscribeToTransactions(e).release,[e,t])}function ge(e){const t=e.atomValues,n=Q(function(e,t){const n=new Map;for(const[o,r]of e)t(r,o)&&n.set(o,r);return n}(t,(e,t)=>{var n;const o=null===(n=ce(t).options)||void 0===n?void 0:n.persistence_UNSTABLE;return null!=o&&"none"!==o.type&&"hasValue"===e.state}),e=>e.contents);return function(...e){const t=new Map;for(let n=0;n<e.length;n++){const o=e[n].keys();let r;for(;!(r=o.next()).done;)t.set(r.value,e[n].get(r.value))}return t}(e.nonvalidatedAtoms,n)}class ve{}const Te=new ve;var Ve={useRecoilCallback:function(e,t){const n=fe();return Z((...t)=>{let o=he(n.current.getState().currentTree,{isSnapshot:!0});function a(e){let t;return[o,t]=ae(n.current,o,e.key),t}function s(e){return a(e).toPromise()}function i(e,t){const r=we(n.current,o,e,t);ye(n.current,e,r)}function l(e){ye(n.current,e,le)}let u=Te;return r.unstable_batchedUpdates(()=>{u=e({getPromise:s,getLoadable:a,set:i,reset:l},...t)}),function(e,t){if(!e)throw new Error("unstable_batchedUpdates should return immediately")}(!(u instanceof ve)),u},null!=t?[...t,n]:void 0)},useRecoilValue:function(e){return Re().getRecoilValue(e)},useRecoilValueLoadable:function(e){return Re().getRecoilValueLoadable(e)},useRecoilState:function(e){const t=Re(),[n]=t.getRecoilState(e);return[n,Z(t.getSetRecoilState(e),[e])]},useRecoilStateLoadable:function(e){const t=Re(),[n]=t.getRecoilStateLoadable(e);return[n,Z(t.getSetRecoilState(e),[e])]},useSetRecoilState:function(e){return Z(Re().getSetRecoilState(e),[e])},useResetRecoilState:function(e){return Z(Re().getResetRecoilState(e),[e])},useRecoilInterface:Re,useTransactionSubscription:Ae,useSnapshotWithStateChange:function(e){const t=fe();let n=function(){const[e,t]=oe(0);return Ae(Z(()=>t(e=>e+1),[])),he(fe().current.getState().currentTree,{isSnapshot:!0})}();e(({key:e},o)=>{[n]=ie(t.current,n,e,se(t.current,n,e).map(o))});const o=Q(n.atomValues,e=>e.contents),r=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(!e.has(o))continue e;n.add(o)}return n}(n.dirtyAtoms,new Set(o.keys()));return{atomValues:o,updatedAtoms:r}},useTransactionObservation:function(e){Ae(Z((t,n)=>{let o=t.getState().nextTree;o||(o=t.getState().currentTree);const r=ge(o),a=ge(n),s=Q(de,e=>{var t,n,o,r,a,s;return{persistence_UNSTABLE:{type:null!==(t=null===(n=e.options)||void 0===n||null===(o=n.persistence_UNSTABLE)||void 0===o?void 0:o.type)&&void 0!==t?t:"none",backButton:null!==(r=null===(a=e.options)||void 0===a||null===(s=a.persistence_UNSTABLE)||void 0===s?void 0:s.backButton)&&void 0!==r&&r}}}),i=new Set(o.dirtyAtoms);e({atomValues:r,previousAtomValues:a,atomInfo:s,modifiedAtoms:i,transactionMetadata:{...o.transactionMetadata}})},[e]))},useGoToSnapshot:function(){const e=fe();return t=>{r.unstable_batchedUpdates(()=>{t.updatedAtoms.forEach(n=>{ye(e.current,new pe(n),t.atomValues.get(n))})})}},useSetUnvalidatedAtomValues:function(){const e=fe();return(t,n={})=>{r.unstable_batchedUpdates(()=>{e.current.addTransactionMetadata(n),t.forEach((t,n)=>me(e.current,new pe(n),t))})}}},Ee=function(e){return!!e&&"function"==typeof e.then};const _e={getValue(){if("hasValue"!==this.state)throw this.contents;return this.contents},toPromise(){return"hasValue"===this.state?Promise.resolve(this.contents):"hasError"===this.state?Promise.reject(this.contents):this.contents},valueMaybe(){return"hasValue"===this.state?this.contents:void 0},valueOrThrow(){if("hasValue"!==this.state)throw new Error(`Loadable expected value, but in "${this.state}" state`);return this.contents},errorMaybe(){return"hasError"===this.state?this.contents:void 0},errorOrThrow(){if("hasError"!==this.state)throw new Error(`Loadable expected error, but in "${this.state}" state`);return this.contents},promiseMaybe(){return"loading"===this.state?this.contents:void 0},promiseOrThrow(){if("loading"!==this.state)throw new Error(`Loadable expected promise, but in "${this.state}" state`);return this.contents},map(e){if("hasError"===this.state)return this;if("hasValue"===this.state)try{const t=e(this.contents);return Ee(t)?Me(t):Ne(t)}catch(t){return Ee(t)?Me(t.next(()=>e(this.contents))):Le(t)}if("loading"===this.state)return Me(this.contents.then(e).catch(t=>{if(Ee(t))return t.then(()=>e(this.contents));throw t}));throw new Error("Invalid Loadable state")}};function Ne(e){return Object.freeze({state:"hasValue",contents:e,..._e})}function Le(e){return Object.freeze({state:"hasError",contents:e,..._e})}function Me(e){return Object.freeze({state:"loading",contents:e,..._e})}var ke={loadableWithValue:Ne,loadableWithError:Le,loadableWithPromise:Me,loadableLoading:function(){return Me(new Promise(()=>{}))},loadableAll:function(e){return e.every(e=>"hasValue"===e.state)?Ne(e.map(e=>e.contents)):e.some(e=>"hasError"===e.state)?Le(E(e.find(e=>"hasError"===e.state),"Invalid loadable passed to loadableAll").contents):Me(Promise.all(e.map(e=>e.contents)))}},Ue=function e(t){if("object"==typeof t&&!function(e){if(null===e||"object"!=typeof e)return!0;switch(typeof e.$$typeof){case"symbol":case"number":return!0}return null!=e["@@__IMMUTABLE_ITERABLE__@@"]||null!=e["@@__IMMUTABLE_KEYED__@@"]||null!=e["@@__IMMUTABLE_INDEXED__@@"]||null!=e["@@__IMMUTABLE_ORDERED__@@"]||null!=e["@@__IMMUTABLE_RECORD__@@"]||!!function(e){var t,n;if("undefined"==typeof window)return!1;const o=null!==(n=(null!=e?null!==(t=e.ownerDocument)&&void 0!==t?t:e:document).defaultView)&&void 0!==n?n:window;return!(null==e||!("function"==typeof o.Node?e instanceof o.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}(e)||!!Ee(e)}(t)){Object.freeze(t);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const o=t[n];"object"!=typeof o||null==o||Object.isFrozen(o)||e(o)}Object.seal(t)}};const Be=Symbol("ArrayKeyedMap"),Oe=new Map;class Fe{constructor(e){if(this._base=new Map,e instanceof Fe)for(const[t,n]of e.entries())this.set(t,n);else if(e)for(const[t,n]of e)this.set(t,n);return this}get(e){const t=Array.isArray(e)?e:[e];let n=this._base;return t.forEach(e=>{var t;n=null!==(t=n.get(e))&&void 0!==t?t:Oe}),void 0===n?void 0:n.get(Be)}set(e,t){const n=Array.isArray(e)?e:[e];let o=this._base,r=o;return n.forEach(e=>{r=o.get(e),r||(r=new Map,o.set(e,r)),o=r}),r.set(Be,t),this}delete(e){const t=Array.isArray(e)?e:[e];let n=this._base,o=n;return t.forEach(e=>{o=n.get(e),o||(o=new Map,n.set(e,o)),n=o}),o.delete(Be),this}entries(){const e=[];return function t(n,o){n.forEach((n,r)=>{r===Be?e.push([o,n]):t(n,o.concat(r))})}(this._base,[]),e.values()}toBuiltInMap(){return new Map(this.entries())}}var De=Fe,Ce=function(){return new De},xe=function(e,t,n){const o=e.entries();let r=o.next();for(;!r.done;){const a=r.value;if(!t.call(n,a[1],a[0],e))return!1;r=o.next()}return!0};Object.freeze(new Set);const{mapBySettingInMap:je,mapByUpdatingInMap:Ie,setByAddingToSet:Pe,setByDeletingFromSet:$e}=a,{detectCircularDependencies:ze,getNodeLoadable:We,setNodeValue:qe}=V,{loadableWithError:Je,loadableWithPromise:Ye,loadableWithValue:Ge}=ke,{DEFAULT_VALUE:He,RecoilValueNotReady:Ke,registerNode:Xe}=p,{startPerfBlock:Qe}={startPerfBlock:function(e){return()=>null}},{isRecoilValue:Ze}=K,et=Object.freeze(new Set);function tt(e){const t=[];for(const n of Array.from(e.keys()).sort()){const o=E(e.get(n));t.push(n),t.push(o.contents)}return t}var nt=function(e){const{key:t,get:n,cacheImplementation_UNSTABLE:o}=e,r=null!=e.set?e.set:void 0;let a=null!=o?o:Ce();function s(o,r){var i;let l=r;const u=null!==(i=r.nodeDeps.get(t))&&void 0!==i?i:et,c=tt(new Map(Array.from(u).sort().map(e=>{const[t,n]=We(o,l,e);return l=t,[e,n]}))),d=a.get(c);if(null!=d)return[l,d];const[f,p,S]=function(e,o){var r;const[a,i,l]=function(e,o){const r=Qe(t);let a=o;const i=new Map;function l({key:t}){let n;if([a,n]=We(e,o,t),i.set(t,n),"hasValue"===n.state)return n.contents;throw n.contents}try{const e=n({get:l}),t=Ze(e)?l(e):e,o=Ee(t)?Ye(t.finally(r)):(r(),Ge(t));return[a,o,i]}catch(t){const n=Ee(t)?Ye(t.then(()=>{let t=Je(new Error("Internal Recoil Selector Error"));if(e.replaceState(n=>{let o;return[o,t]=s(e,n),o}),"hasError"===t.state)throw t.contents;return t.contents}).finally(r)):(r(),Je(t));return[a,n,i]}}(e,o);let u=a;const c=null!==(r=o.nodeDeps.get(t))&&void 0!==r?r:et,d=new Set(l.keys());var f,p;p=d,u=(f=c).size===p.size&&xe(f,e=>p.has(e))?u:{...u,nodeDeps:je(u.nodeDeps,t,d)};const S=X(d,c),y=X(c,d);for(const e of S)u={...u,nodeToNodeSubscriptions:Ie(u.nodeToNodeSubscriptions,e,e=>Pe(null!=e?e:et,t))};for(const e of y)u={...u,nodeToNodeSubscriptions:Ie(u.nodeToNodeSubscriptions,e,e=>$e(null!=e?e:et,t))};return[u,i,l]}(o,l);l=f;const y=tt(S);return function(n,o,r){"loading"!==r.state?1==!e.dangerouslyAllowMutability&&Ue(r.contents):r.contents.then(r=>(1==!e.dangerouslyAllowMutability&&Ue(r),a=a.set(o,Ge(r)),n.fireNodeSubscriptions(new Set([t]),"now"),r)).catch(r=>(Ee(r)||(1==!e.dangerouslyAllowMutability&&Ue(r),a=a.set(o,Je(r)),n.fireNodeSubscriptions(new Set([t]),"now")),r)),a=a.set(o,r)}(o,y,p),[l,p]}function i(e,t){return s(e,t)}return Xe(null!=r?{key:t,options:e,get:i,set:function(e,t,n){let o=t;const a=new Set;function s({key:t}){const[n,r]=We(e,o,t);if(o=n,"hasValue"===r.state)return r.contents;throw"loading"===r.state?new Ke(t):r.contents}function i(t,n){const r="function"==typeof n?n(s(t)):n;let i;[o,i]=qe(e,o,t.key,r),i.forEach(e=>a.add(e))}return r({set:i,get:s,reset:function(e){i(e,He)}},n),[o,a]}}:{key:t,options:e,get:i})};const{loadableWithValue:ot}=ke,{DEFAULT_VALUE:rt,DefaultValue:at,registerNode:st}=p,{isRecoilValue:it}=K,{mapByDeletingFromMap:lt,mapBySettingInMap:ut,setByAddingToSet:ct}=a;var dt=function e(t){const{default:n,...o}=t;return it(n)||Ee(n)?function(t){const n=e({...t,default:rt,persistence_UNSTABLE:void 0===t.persistence_UNSTABLE?void 0:{...t.persistence_UNSTABLE,validator:e=>e instanceof at?e:E(t.persistence_UNSTABLE).validator(e,rt)}});return nt({key:t.key+"__withFallback",get:({get:e})=>{const o=e(n);return o instanceof at?t.default:o},set:({set:e},t)=>e(n,t),dangerouslyAllowMutability:t.dangerouslyAllowMutability})}({...o,default:n}):function(e){const{key:t,persistence_UNSTABLE:n}=e;return st({key:t,options:e,get:(o,r)=>{if(r.atomValues.has(t))return[r,E(r.atomValues.get(t))];if(r.nonvalidatedAtoms.has(t)){if(null==n)return[r,ot(e.default)];const o=r.nonvalidatedAtoms.get(t),a=n.validator(o,rt);return a instanceof at?[{...r,nonvalidatedAtoms:lt(r.nonvalidatedAtoms,t)},ot(e.default)]:[{...r,atomValues:ut(r.atomValues,t,ot(a)),nonvalidatedAtoms:lt(r.nonvalidatedAtoms,t)},ot(a)]}return[r,ot(e.default)]},set:(n,o,r)=>(!0!==e.dangerouslyAllowMutability&&Ue(r),[{...o,dirtyAtoms:ct(o.dirtyAtoms,t),atomValues:r instanceof at?lt(o.atomValues,t):ut(o.atomValues,t,ot(r)),nonvalidatedAtoms:lt(o.nonvalidatedAtoms,t)},new Set([t])])})}({...o,default:n})},ft=class{constructor(e){this.value=e}},pt=function(e,t){window.performance&&window.performance.now();const n=function e(t,n,o){if("string"==typeof t&&!t.includes('"')&&!t.includes("\\"))return`"${t}"`;switch(typeof t){case"undefined":return"";case"boolean":return t?"true":"false";case"number":case"symbol":return String(t);case"string":return JSON.stringify(t);case"function":if(!0!==(null==n?void 0:n.allowFunctions))throw new Error("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${t.name})__`}return null===t?"null":"object"!=typeof t?null!==(r=JSON.stringify(t))&&void 0!==r?r:"":Ee(t)?"__PROMISE__":Array.isArray(t)?`[${t.map((t,o)=>e(t,n,o.toString()))}]`:"function"==typeof t.toJSON?e(t.toJSON(o),n,o):t instanceof Map?e(Array.from(t).reduce((t,[o,r])=>({...t,["string"==typeof o?o:e(o,n)]:r}),{}),n,o):t instanceof Set?e(Array.from(t).sort((t,o)=>e(t,n).localeCompare(e(o,n))),n,o):null!=t[Symbol.iterator]&&"function"==typeof t[Symbol.iterator]?e(Array.from(t),n,o):`{${Object.keys(t).filter(e=>void 0!==t[e]).sort().map(o=>`${e(o,n)}:${e(t[o],n,o)}`).join(",")}}`;var r}(e,null!=t?t:{allowFunctions:void 0});return window.performance&&window.performance.now(),n},St=function(){const e=new Map,t={get:t=>e.get(pt(t)),set:(n,o)=>(e.set(pt(n),o),t),map:e};return t};let yt=0;var mt=function(e){var t,n;let o=null!==(t=null===(n=e.cacheImplementationForParams_UNSTABLE)||void 0===n?void 0:n.call(e))&&void 0!==t?t:St();return t=>{var n,r;const a=o.get(t);if(null!=a)return a;const s=`${e.key}__selectorFamily/${null!==(n=pt(t,{allowFunctions:!0}))&&void 0!==n?n:"void"}/${yt++}`,i=n=>e.get(t)(n),l=null===(r=e.cacheImplementation_UNSTABLE)||void 0===r?void 0:r.call(e);let u;if(null!=e.set){const n=e.set;u=nt({key:s,get:i,set:(e,o)=>n(t)(e,o),cacheImplementation_UNSTABLE:l,dangerouslyAllowMutability:e.dangerouslyAllowMutability})}else u=nt({key:s,get:i,cacheImplementation_UNSTABLE:l,dangerouslyAllowMutability:e.dangerouslyAllowMutability});return o=o.set(t,u),u}};const{DEFAULT_VALUE:bt,DefaultValue:ht}=p;function wt(e,t){return xe(t,t=>e.has(t))}const Rt=(e,t)=>Array.from(t).reduce((t,n)=>({...t,[n]:e[n]}),{});function At(e){if(null==e)return;const{...t}=e;return{...t,validator:e=>e instanceof ft?new ft(e.value.filter(([e,t])=>e instanceof Set&&t instanceof Map).map(([e,n])=>[e,Array.from(n.entries()).reduce((e,[n,o])=>{const r=t.validator(o,bt);return r instanceof ht||e.set(n,r),e},new Map)])):t.validator(e,bt)}}const gt=mt({key:"__constant",get:e=>()=>e,cacheImplementationForParams_UNSTABLE:Ce}),vt=mt({key:"__error",get:e=>()=>{throw new Error(e)},cacheImplementationForParams_UNSTABLE:Ce}),{loadableWithError:Tt,loadableWithPromise:Vt,loadableWithValue:Et}=ke;function _t(e,t){const n=Array(t.length).fill(void 0),o=Array(t.length).fill(void 0);for(const[r,a]of t.entries())try{n[r]=e(a)}catch(e){o[r]=e}return[n,o]}function Nt(e){return null!=e&&!Ee(e)}function Lt(e){return Array.isArray(e)?e:Object.getOwnPropertyNames(e).map(t=>e[t])}function Mt(e,t){return Array.isArray(e)?t:Object.getOwnPropertyNames(e).reduce((e,n,o)=>({...e,[n]:t[o]}),{})}function kt(e,t,n){return Mt(e,n.map((e,n)=>null==e?Et(t[n]):Ee(e)?Vt(e):Tt(e)))}var Ut={waitForNone:mt({key:"__waitForNone",get:e=>({get:t})=>{const n=Lt(e),[o,r]=_t(t,n);return kt(e,o,r)}}),waitForAny:mt({key:"__waitForAny",get:e=>({get:t})=>{const n=Lt(e),[o,r]=_t(t,n);if(r.some(e=>null==e))return kt(e,o,r);if(r.every(Nt))throw r.find(Nt);throw new Promise((t,n)=>{for(const[a,s]of r.entries())Ee(s)&&s.then(n=>{o[a]=n,r[a]=null,t(kt(e,o,r))}).catch(e=>{r[a]=e,r.every(Nt)&&n(r[0])})})}}),waitForAll:mt({key:"__waitForAll",get:e=>({get:t})=>{const n=Lt(e),[o,r]=_t(t,n);if(r.every(e=>null==e))return Mt(e,o);const a=r.find(Nt);if(null!=a)throw a;throw Promise.all(r).then(t=>Mt(e,t))}}),noWait:mt({key:"__noWait",get:e=>({get:t})=>{try{return Et(t(e))}catch(e){return Ee(e)?Vt(e):Tt(e)}}})};const{RecoilRoot:Bt}=P,{DefaultValue:Ot}=p,{isRecoilValue:Ft}=K,{useRecoilCallback:Dt,useRecoilState:Ct,useRecoilStateLoadable:xt,useRecoilValue:jt,useRecoilValueLoadable:It,useResetRecoilState:Pt,useSetRecoilState:$t,useSetUnvalidatedAtomValues:zt,useTransactionObservation:Wt,useTransactionSubscription:qt}=Ve,{noWait:Jt,waitForAll:Yt,waitForAny:Gt,waitForNone:Ht}=Ut;var Kt={DefaultValue:Ot,RecoilRoot:Bt,atom:dt,selector:nt,atomFamily:function(e){let t=St();const n={key:e.key,default:bt,persistence_UNSTABLE:At(e.persistence_UNSTABLE)};let o;o=dt(n);const r=mt({key:e.key+"__atomFamily/Default",get:t=>({get:n})=>{const r=n("function"==typeof o?o(t):o);if(!(r instanceof ht)){const e=function(e,t){if(!(e instanceof ft))return e;if("object"!=typeof t||null==t||Array.isArray(t))return bt;const n=e.value,o=new Set(Object.keys(t));for(const[e,r]of n)if(wt(o,e)){const n=o.size===e.size?t:Rt(t,e),a=r.get(pt(n));if(void 0!==a)return a}return bt}(r,t);if(!(e instanceof ht))return e}return"function"==typeof e.default?e.default(t):e.default},dangerouslyAllowMutability:e.dangerouslyAllowMutability});return n=>{var o;const a=t.get(n);if(null!=a)return a;const s=dt({key:`${e.key}__${null!==(o=pt(n))&&void 0!==o?o:"void"}`,default:r(n),scopeRules_APPEND_ONLY_READ_THE_DOCS:(i=e.scopeRules_APPEND_ONLY_READ_THE_DOCS,l=n,null==i?void 0:i.map(e=>Array.isArray(e)?e.map(e=>"function"==typeof e?e(l):e):e)),persistence_UNSTABLE:e.persistence_UNSTABLE,dangerouslyAllowMutability:e.dangerouslyAllowMutability});var i,l;return t=t.set(n,s),s}},selectorFamily:mt,constSelector:function(e){return gt(e)},errorSelector:function(e){return vt(e)},readOnlySelector:function(e){return e},useRecoilValue:jt,useRecoilValueLoadable:It,useRecoilState:Ct,useRecoilStateLoadable:xt,useSetRecoilState:$t,useResetRecoilState:Pt,useRecoilCallback:Dt,useTransactionObservation_UNSTABLE:Wt,useTransactionSubscription_UNSTABLE:qt,useSetUnvalidatedAtomValues_UNSTABLE:zt,noWait:Jt,waitForNone:Ht,waitForAny:Gt,waitForAll:Yt,isRecoilValue:Ft},Xt=Kt.DefaultValue,Qt=Kt.RecoilRoot,Zt=Kt.atom,en=Kt.selector,tn=Kt.atomFamily,nn=Kt.selectorFamily,on=Kt.constSelector,rn=Kt.errorSelector,an=Kt.readOnlySelector,sn=Kt.useRecoilValue,ln=Kt.useRecoilValueLoadable,un=Kt.useRecoilState,cn=Kt.useRecoilStateLoadable,dn=Kt.useSetRecoilState,fn=Kt.useResetRecoilState,pn=Kt.useRecoilCallback,Sn=Kt.useTransactionObservation_UNSTABLE,yn=Kt.useTransactionSubscription_UNSTABLE,mn=Kt.useSetUnvalidatedAtomValues_UNSTABLE,bn=Kt.noWait,hn=Kt.waitForNone,wn=Kt.waitForAny,Rn=Kt.waitForAll,An=Kt.isRecoilValue;t.DefaultValue=Xt,t.RecoilRoot=Qt,t.atom=Zt,t.atomFamily=tn,t.constSelector=on,t.default=Kt,t.errorSelector=rn,t.isRecoilValue=An,t.noWait=bn,t.readOnlySelector=an,t.selector=en,t.selectorFamily=nn,t.useRecoilCallback=pn,t.useRecoilState=un,t.useRecoilStateLoadable=cn,t.useRecoilValue=sn,t.useRecoilValueLoadable=ln,t.useResetRecoilState=fn,t.useSetRecoilState=dn,t.useSetUnvalidatedAtomValues_UNSTABLE=mn,t.useTransactionObservation_UNSTABLE=Sn,t.useTransactionSubscription_UNSTABLE=yn,t.waitForAll=Rn,t.waitForAny=wn,t.waitForNone=hn}));(Us=Rd)&&Us.__esModule&&Object.prototype.hasOwnProperty.call(Us,"default")&&Us.default,Rd.DefaultValue,Rd.RecoilRoot,Rd.atom,Rd.atomFamily,Rd.constSelector,Rd.errorSelector,Rd.isRecoilValue,Rd.noWait,Rd.readOnlySelector,Rd.selector,Rd.selectorFamily,Rd.useRecoilCallback,Rd.useRecoilState,Rd.useRecoilStateLoadable,Rd.useRecoilValue,Rd.useRecoilValueLoadable,Rd.useResetRecoilState,Rd.useSetRecoilState,Rd.useSetUnvalidatedAtomValues_UNSTABLE,Rd.useTransactionObservation_UNSTABLE,Rd.useTransactionSubscription_UNSTABLE,Rd.waitForAll,Rd.waitForAny,Rd.waitForNone;var Ud=Jc((function(e){e.exports=Rd})),Bd=Ud.DefaultValue,Cd=Ud.RecoilRoot,Id=Ud.atom;export default Ud;var $d=Ud.isRecoilValue,zd=Ud.selector,Wd=Ud.useRecoilCallback,Jd=Ud.useRecoilState,Yd=Ud.useRecoilStateLoadable,Gd=Ud.useRecoilValue,Hd=Ud.useRecoilValueLoadable,Kd=Ud.useResetRecoilState,Xd=Ud.useSetRecoilState;export{Bd as DefaultValue,Ud as Recoil,Cd as RecoilRoot,Id as atom,$d as isRecoilValue,zd as selector,Wd as useRecoilCallback,Jd as useRecoilState,Yd as useRecoilStateLoadable,Gd as useRecoilValue,Hd as useRecoilValueLoadable,Kd as useResetRecoilState,Xd as useSetRecoilState};