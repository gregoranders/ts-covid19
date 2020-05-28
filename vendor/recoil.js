import Jl from"react";import Sd from"react-dom";var Rd=function(e){return!!e&&"function"==typeof e.then},Td=function(e,t){if(null!=e)return e;throw new Error(null!=t?t:"Got unexpected null or undefined")};const Vd={getValue(){if("hasValue"!==this.state)throw this.contents;return this.contents},toPromise(){return"hasValue"===this.state?Promise.resolve(this.contents):"hasError"===this.state?Promise.reject(this.contents):this.contents},valueMaybe(){return"hasValue"===this.state?this.contents:void 0},valueOrThrow(){if("hasValue"!==this.state)throw new Error(`Loadable expected value, but in "${this.state}" state`);return this.contents},errorMaybe(){return"hasError"===this.state?this.contents:void 0},errorOrThrow(){if("hasError"!==this.state)throw new Error(`Loadable expected error, but in "${this.state}" state`);return this.contents},promiseMaybe(){return"loading"===this.state?this.contents:void 0},promiseOrThrow(){if("loading"!==this.state)throw new Error(`Loadable expected promise, but in "${this.state}" state`);return this.contents},map(e){if("hasError"===this.state)return this;if("hasValue"===this.state)try{const t=e(this.contents);return Rd(t)?Ld(t):Ad(t)}catch(t){return Rd(t)?Ld(t.next(()=>e(this.contents))):_d(t)}if("loading"===this.state)return Ld(this.contents.then(e).catch(t=>{if(Rd(t))return t.then(()=>e(this.contents));throw t}));throw new Error("Invalid Loadable state")}};function Ad(e){return Object.freeze({state:"hasValue",contents:e,...Vd})}function _d(e){return Object.freeze({state:"hasError",contents:e,...Vd})}function Ld(e){return Object.freeze({state:"loading",contents:e,...Vd})}var kd={loadableWithValue:Ad,loadableWithError:_d,loadableWithPromise:Ld,loadableLoading:function(){return Ld(new Promise(()=>{}))},loadableAll:function(e){return e.every(e=>"hasValue"===e.state)?Ad(e.map(e=>e.contents)):e.some(e=>"hasError"===e.state)?_d(Td(e.find(e=>"hasError"===e.state),"Invalid loadable passed to loadableAll").contents):Ld(Promise.all(e.map(e=>e.contents)))}},Ud=function(e,...t){let n=0;return e.replace(/%s/g,()=>String(t[n++]))},Bd=function(e,...t){if(__DEV__){const n=Ud.call(null,e,...t),o=new Error(n);o.name="Expectation Violation",console.error(o)}};class Cd{constructor(e){"key"in this?Object.defineProperty(this,"key",{value:void 0,enumerable:!0,configurable:!0,writable:!0}):this.key=void 0,this.key=e}}var Qo,Dd=Cd,Od=(Qo=Object.freeze({__proto__:null,AbstractRecoilValue:Dd,RecoilState:class extends Cd{},RecoilValueReadOnly:class extends Cd{}}))&&Qo.default||Qo;class Id{}const jd=new Id;class zd extends Error{constructor(e){super(`Tried to set the value of Recoil selector ${e} using an updater function, but it is an async selector in a pending or error state; this is not supported.`)}}const Pd=new Map;class Fd extends Error{}var $d={nodes:Pd,registerNode:function(e){return Pd.has(e.key)&&e.key,Pd.set(e.key,e),null==e.set?new Od.RecoilValueReadOnly(e.key):new Od.RecoilState(e.key)},getNode:function(e){const t=Pd.get(e);if(null==t)throw new Fd(`Missing definition for RecoilValue: "${e}""`);return t},NodeMissingError:Fd,DefaultValue:Id,DEFAULT_VALUE:jd,RecoilValueNotReady:zd},qd=function(e,t,n){return n()},Wd={setByAddingToSet:function(e,t){const n=new Set(e);return n.add(t),n},setByDeletingFromSet:function(e,t){const n=new Set(e);return n.delete(t),n},mapBySettingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n),o},mapByUpdatingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n(o.get(t))),o},mapByDeletingFromMap:function(e,t){const n=new Map(e);return n.delete(t),n}};const{mapByDeletingFromMap:Gd,mapBySettingInMap:Kd,mapByUpdatingInMap:Xd,setByAddingToSet:Yd}=Wd,{getNode:Hd}=$d,Jd=Object.freeze(new Map),Qd=Object.freeze(new Set);class Zd extends Error{}function Vp(e,t,n){return Hd(n).get(e,t)}let zp=0;var qp={getNodeLoadable:Vp,peekNodeLoadable:function(e,t,n){return Vp(e,t,n)[1]},setNodeValue:function(e,t,n,o){const r=Hd(n);if(null==r.set)throw new Zd("Attempt to set read-only RecoilValue: "+n);const[a,s]=r.set(e,t,o);return[a,s]},setUnvalidatedAtomValue:function(e,t,n){return{...e,atomValues:Gd(e.atomValues,t),nonvalidatedAtoms:Kd(e.nonvalidatedAtoms,t,n),dirtyAtoms:Yd(e.dirtyAtoms,t)}},subscribeComponentToNode:function(e,t,n){const o=zp++;return[{...e,nodeToComponentSubscriptions:Xd(e.nodeToComponentSubscriptions,t,e=>Kd(null!=e?e:Jd,o,["TODO debug name",n]))},function(e){return{...e,nodeToComponentSubscriptions:Xd(e.nodeToComponentSubscriptions,t,e=>Gd(null!=e?e:Jd,o))}}]},fireNodeSubscriptions:function(e,t,n){var o;const r="enqueue"===n&&null!==(o=e.getState().nextTree)&&void 0!==o?o:e.getState().currentTree,a=function(e,t){const n=new Set,o=new Set,r=Array.from(t);for(let t=r.pop();t;t=r.pop()){var a;n.add(t),o.add(t);const s=null!==(a=e.nodeToNodeSubscriptions.get(t))&&void 0!==a?a:Qd;for(const e of s)o.has(e)||r.push(e)}return n}(r,t);for(const t of a){var s;(null!==(s=r.nodeToComponentSubscriptions.get(t))&&void 0!==s?s:[]).forEach(([t,o])=>{"enqueue"===n?e.getState().queuedComponentCallbacks.push(o):o(r)})}qd(0,Array.from(t).join(", "),()=>{const t=e.getState().suspendedComponentResolvers;t.forEach(e=>e()),t.clear()})},detectCircularDependencies:function e(t,n){if(!n.length)return;const o=n[n.length-1],r=t.nodeToNodeSubscriptions.get(o);if(!(null==r?void 0:r.size))return;const a=n[0];if(r.has(a))throw new Error("Recoil selector has circular dependencies: "+[...n,a].reverse().join(" → "));for(const o of r)e(t,[...n,o])}};const{getNodeLoadable:Gp,peekNodeLoadable:Kp,setNodeValue:Xp,setUnvalidatedAtomValue:Yp,subscribeComponentToNode:Jp}=qp,{AbstractRecoilValue:Qp,RecoilState:Zp,RecoilValueReadOnly:eS}=Od;var tS={RecoilValueReadOnly:eS,AbstractRecoilValue:Qp,RecoilState:Zp,peekRecoilValueAsLoadable:function(e,{key:t}){const n=e.getState().currentTree;return Kp(e,n,t)},getRecoilValueAsLoadable:function(e,{key:t}){let n;return qd(0,0,()=>e.replaceState(o=>{const[r,a]=Gp(e,o,t);return n=a,r})),n},setRecoilValue:function(e,{key:t},n){qd(0,0,()=>e.replaceState(o=>{const[r,a]=Xp(e,o,t,n);return e.fireNodeSubscriptions(a,"enqueue"),r}))},setUnvalidatedRecoilValue:function(e,{key:t},n){qd(0,0,()=>e.replaceState(o=>{const r=Yp(o,t,n);return e.fireNodeSubscriptions(new Set([t]),"enqueue"),r}))},subscribeToRecoilValue:function(e,{key:t},n){let o,r;return qd(0,0,()=>e.replaceState(e=>([o,r]=Jp(e,t,n),o))),{release:e=>e.replaceState(r)}},isRecoilValue:function(e){return e instanceof Zp||e instanceof eS}},nS=function e(t){if("object"==typeof t&&!function(e){if(null===e||"object"!=typeof e)return!0;switch(typeof e.$$typeof){case"symbol":case"number":return!0}return null!=e["@@__IMMUTABLE_ITERABLE__@@"]||null!=e["@@__IMMUTABLE_KEYED__@@"]||null!=e["@@__IMMUTABLE_INDEXED__@@"]||null!=e["@@__IMMUTABLE_ORDERED__@@"]||null!=e["@@__IMMUTABLE_RECORD__@@"]||!!function(e){var t,n;if("undefined"==typeof window)return!1;const o=null!==(n=(null!=e?null!==(t=e.ownerDocument)&&void 0!==t?t:e:document).defaultView)&&void 0!==n?n:window;return!(null==e||!("function"==typeof o.Node?e instanceof o.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}(e)||!!Rd(e)}(t)){Object.freeze(t);for(const n in t)if(t.hasOwnProperty(n)){const o=t[n];"object"!=typeof o||null==o||Object.isFrozen(o)||e(o)}Object.seal(t)}};const oS=Symbol("ArrayKeyedMap"),rS=new Map;class aS{constructor(e){if(this._base=new Map,e instanceof aS)for(const[t,n]of e.entries())this.set(t,n);else if(e)for(const[t,n]of e)this.set(t,n);return this}get(e){const t=Array.isArray(e)?e:[e];let n=this._base;return t.forEach(e=>{var t;n=null!==(t=n.get(e))&&void 0!==t?t:rS}),void 0===n?void 0:n.get(oS)}set(e,t){const n=Array.isArray(e)?e:[e];let o=this._base,r=o;return n.forEach(e=>{r=o.get(e),r||(r=new Map,o.set(e,r)),o=r}),r.set(oS,t),this}delete(e){const t=Array.isArray(e)?e:[e];let n=this._base,o=n;return t.forEach(e=>{o=n.get(e),o||(o=new Map,n.set(e,o)),n=o}),o.delete(oS),this}entries(){const e=[];return function t(n,o){n.forEach((n,r)=>{r===oS?e.push([o,n]):t(n,o.concat(r))})}(this._base,[]),e.values()}toBuiltInMap(){return new Map(this.entries())}}var sS=aS,iS=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(e.has(o))continue e;n.add(o)}return n};Object.freeze(new Set);const{mapBySettingInMap:uS,mapByUpdatingInMap:cS,setByAddingToSet:lS,setByDeletingFromSet:dS}=Wd,{detectCircularDependencies:fS,getNodeLoadable:pS,setNodeValue:SS}=qp,{loadableWithError:hS,loadableWithPromise:bS,loadableWithValue:mS}=kd,{DEFAULT_VALUE:yS,RecoilValueNotReady:gS,registerNode:RS}=$d,{startPerfBlock:wS}={startPerfBlock:function(e){return()=>null}},{isRecoilValue:vS}=tS,TS=Object.freeze(new Set);function VS(e){const t=[];for(const n of Array.from(e.keys()).sort()){const o=Td(e.get(n));t.push(n),t.push(o.contents)}return t}var AS=function(e){const{key:t,get:n,cacheImplementation_UNSTABLE:o}=e,r=null!=e.set?e.set:void 0;let a=null!=o?o:new sS;function s(o,r){return function o(r,s){var i;let u=s;const c=null!==(i=s.nodeDeps.get(t))&&void 0!==i?i:TS,l=VS(new Map(Array.from(c).sort().map(e=>{const[t,n]=pS(r,u,e);return u=t,[e,n]}))),d=a.get(l);if(null!=d)return[u,d];const[f,p,S]=function(e,r){var a;const[s,i,u]=function(e,r){const a=wS(t);let s=r;const i=new Map;function u({key:t}){let n;if([s,n]=pS(e,r,t),i.set(t,n),"hasValue"===n.state)return n.contents;throw n.contents}try{const e=n({get:u}),t=vS(e)?u(e):e,o=Rd(t)?bS(t.finally(a)):(a(),mS(t));return[s,o,i]}catch(t){const n=Rd(t)?bS(t.then(()=>{let t=hS(new Error("Internal Recoil Selector Error"));if(e.replaceState(n=>{let r;return[r,t]=o(e,n),r}),"hasError"===t.state)throw t.contents;return t.contents}).finally(a)):(a(),hS(t));return[s,n,i]}}(e,r);let c=s;const l=null!==(a=r.nodeDeps.get(t))&&void 0!==a?a:TS,d=new Set(u.keys());var f,p;p=d,c=(f=l).size===p.size&&function(e,t,n){const o=e.entries();let r=o.next();for(;!r.done;){const n=r.value;if(!t.call(void 0,n[1],n[0],e))return!1;r=o.next()}return!0}(f,e=>p.has(e))?c:{...c,nodeDeps:uS(c.nodeDeps,t,d)};const S=iS(d,l),h=iS(l,d);for(const e of S)c={...c,nodeToNodeSubscriptions:cS(c.nodeToNodeSubscriptions,e,e=>lS(null!=e?e:TS,t))};for(const e of h)c={...c,nodeToNodeSubscriptions:cS(c.nodeToNodeSubscriptions,e,e=>dS(null!=e?e:TS,t))};return[c,i,u]}(r,u);u=f;const h=VS(S);return function(n,o,r){"loading"!==r.state?1==!e.dangerouslyAllowMutability&&nS(r.contents):r.contents.then(r=>(1==!e.dangerouslyAllowMutability&&nS(r),a=a.set(o,mS(r)),n.fireNodeSubscriptions(new Set([t]),"now"),r)).catch(r=>(Rd(r)||(1==!e.dangerouslyAllowMutability&&nS(r),a=a.set(o,hS(r)),n.fireNodeSubscriptions(new Set([t]),"now")),r)),a=a.set(o,r)}(r,h,p),[u,p]}(o,r)}return RS(null!=r?{key:t,options:e,get:s,set:function(e,t,n){let o=t;const a=new Set;function s({key:t}){const[n,r]=pS(e,o,t);if(o=n,"hasValue"===r.state)return r.contents;throw"loading"===r.state?new gS(t):r.contents}function i(t,n){const r="function"==typeof n?n(s(t)):n;let i;[o,i]=SS(e,o,t.key,r),i.forEach(e=>a.add(e))}return r({set:i,get:s,reset:function(e){i(e,yS)}},n),[o,a]}}:{key:t,options:e,get:s})};const{loadableWithValue:ES}=kd,{DEFAULT_VALUE:MS,DefaultValue:_S,registerNode:NS}=$d,{isRecoilValue:LS}=tS,{mapByDeletingFromMap:kS,mapBySettingInMap:US,setByAddingToSet:BS}=Wd,{useContext:Ip,useEffect:CS,useRef:DS,useState:OS}=Jl,{fireNodeSubscriptions:xS,setNodeValue:IS,setUnvalidatedAtomValue:jS}=qp;function zS(){throw new Error("This component must be used inside a <RecoilRoot> component.")}const PS=Object.freeze({getState:zS,replaceState:zS,subscribeToTransactions:zS,addTransactionMetadata:zS,fireNodeSubscriptions:zS});function FS(e){null===e.nextTree&&(e.nextTree={...e.currentTree,dirtyAtoms:new Set,transactionMetadata:{}})}const $S=Jl.createContext({current:PS}),qS=()=>Ip($S);function WS(e){const t=qS(),[n,o]=OS([]);return e.setNotifyBatcherOfChange(()=>o({})),CS(()=>{!function(e,t){t()}(0,()=>{const e=t.current.getState(),{currentTree:n,nextTree:o}=e;null!==o&&(o.dirtyAtoms.size&&e.transactionSubscriptions.forEach(e=>e(t.current,n)),e.queuedComponentCallbacks.forEach(e=>e(o)),e.queuedComponentCallbacks.splice(0,e.queuedComponentCallbacks.length),e.currentTree=o,e.nextTree=null)})}),null}let GS=0;var KS={useStoreRef:qS,RecoilRoot:function({initializeState:e,children:t}){let n;const o=DS(null),r={getState:()=>n.current,replaceState:e=>{const t=a.current.getState();FS(t);const n=Td(t.nextTree),r=e(n);r!==n&&(t.nextTree=r,Td(o.current)())},subscribeToTransactions:e=>{const t=GS++;return a.current.getState().transactionSubscriptions.set(t,e),{release:()=>{a.current.getState().transactionSubscriptions.delete(t)}}},addTransactionMetadata:e=>{FS(a.current.getState());for(const t of Object.keys(e))Td(a.current.getState().nextTree).transactionMetadata[t]=e[t]},fireNodeSubscriptions:function(e,t){xS(a.current,e,t)}},a=DS(r);return n=DS(function(e,t){const n={currentTree:{isSnapshot:!1,transactionMetadata:{},atomValues:new Map,nonvalidatedAtoms:new Map,dirtyAtoms:new Set,nodeDeps:new Map,nodeToNodeSubscriptions:new Map,nodeToComponentSubscriptions:new Map},nextTree:null,transactionSubscriptions:new Map,queuedComponentCallbacks:[],suspendedComponentResolvers:new Set};return t&&t({set:(t,o)=>{n.currentTree=IS(e,n.currentTree,t.key,o)[0]},setUnvalidatedAtomValues:e=>{e.forEach((e,t)=>{n.currentTree=jS(n.currentTree,t,e)})}}),n}(r,e)),Jl.createElement($S.Provider,{value:a},Jl.createElement(WS,{setNotifyBatcherOfChange:function(e){o.current=e}}),t)}},XS=function(e,t){const n=new Map;return e.forEach((e,o)=>{n.set(o,t(e,o))}),n};const{useCallback:YS,useEffect:HS,useMemo:JS,useRef:QS,useState:ZS}=Jl,{setByAddingToSet:eb}=Wd,{getNodeLoadable:tb,peekNodeLoadable:nb,setNodeValue:ob}=qp,{DEFAULT_VALUE:rb,RecoilValueNotReady:ab,getNode:sb,nodes:ib}=$d,{useStoreRef:ub}=KS,{AbstractRecoilValue:cb,getRecoilValueAsLoadable:lb,setRecoilValue:db,setUnvalidatedRecoilValue:fb,subscribeToRecoilValue:pb}=tS;function Sb(e,t){return{isSnapshot:t.isSnapshot,transactionMetadata:{...e.transactionMetadata},atomValues:new Map(e.atomValues),nonvalidatedAtoms:new Map(e.nonvalidatedAtoms),dirtyAtoms:new Set(e.dirtyAtoms),nodeDeps:new Map(e.nodeDeps),nodeToNodeSubscriptions:XS(e.nodeToNodeSubscriptions,e=>new Set(e)),nodeToComponentSubscriptions:XS(e.nodeToComponentSubscriptions,e=>new Map(e))}}function hb(e,t,n,o){if("function"==typeof o){const r=nb(e,t,n.key);if("loading"===r.state)throw new ab(n.key);if("hasError"===r.state)throw r.contents;return o(r.contents)}return o}function bb(){const e=ub(),[t,n]=ZS([]),o=QS(new Set);o.current=new Set;const r=QS(new Set),a=QS(new Map),s=YS(t=>{const n=a.current.get(t);n&&(n.release(e.current),a.current.delete(t))},[e,a]);return HS(()=>{const t=e.current;function i(e,t){a.current.has(t)&&n([])}iS(o.current,r.current).forEach(e=>{if(a.current.has(e))return void Bd(`Double subscription to RecoilValue "${e}"`);const n=pb(t,new cb(e),t=>{qd(0,0,()=>{i(0,e)})});a.current.set(e,n),qd(0,0,()=>{i(t.getState(),e)})}),iS(r.current,o.current).forEach(e=>{s(e)}),r.current=o.current}),HS(()=>{const e=a.current;return()=>e.forEach((e,t)=>s(t))},[s]),JS(()=>{function t(t){return n=>{var o;const r=e.current.getState(),a=hb(e.current,null!==(o=r.nextTree)&&void 0!==o?o:r.currentTree,t,n);db(e.current,t,a)}}function n(t){return o.current.has(t.key)||(o.current=eb(o.current,t.key)),lb(e.current,t)}function r(t){return function(e,t,n){if("hasValue"===e.state)return e.contents;if("loading"===e.state)throw new Promise(e=>{n.current.getState().suspendedComponentResolvers.add(e)});throw"hasError"===e.state?e.contents:new Error(`Invalid value of loadable atom "${t.key}"`)}(n(t),t,e)}return{getRecoilValue:r,getRecoilValueLoadable:n,getRecoilState:function(e){return[r(e),t(e)]},getRecoilStateLoadable:function(e){return[n(e),t(e)]},getSetRecoilState:t,getResetRecoilState:function(t){return()=>db(e.current,t,rb)}}},[o,e])}function mb(e){const t=ub();HS(()=>t.current.subscribeToTransactions(e).release,[e,t])}function yb(e){const t=e.atomValues,n=XS(function(e,t){const n=new Map;for(const[o,r]of e)t(r,o)&&n.set(o,r);return n}(t,(e,t)=>{var n;const o=null===(n=sb(t).options)||void 0===n?void 0:n.persistence_UNSTABLE;return null!=o&&"none"!==o.type&&"hasValue"===e.state}),e=>e.contents);return function(...e){const t=new Map;for(let n=0;n<e.length;n++){const o=e[n].keys();let r;for(;!(r=o.next()).done;)t.set(r.value,e[n].get(r.value))}return t}(e.nonvalidatedAtoms,n)}class gb{}const Rb=new gb;var wb={useRecoilCallback:function(e,t){const n=ub();return YS((...t)=>{let o=Sb(n.current.getState().currentTree,{isSnapshot:!0});function r(e){let t;return[o,t]=tb(n.current,o,e.key),t}function a(e){return r(e).toPromise()}function s(e,t){const r=hb(n.current,o,e,t);db(n.current,e,r)}function i(e){db(n.current,e,rb)}let u=Rb;return Sd.unstable_batchedUpdates(()=>{u=e({getPromise:a,getLoadable:r,set:s,reset:i},...t)}),function(e,t){if(!e)throw new Error("unstable_batchedUpdates should return immediately")}(!(u instanceof gb)),u},null!=t?[...t,n]:void 0)},useRecoilValue:function(e){return bb().getRecoilValue(e)},useRecoilValueLoadable:function(e){return bb().getRecoilValueLoadable(e)},useRecoilState:function(e){const t=bb(),[n]=t.getRecoilState(e);return[n,YS(t.getSetRecoilState(e),[e])]},useRecoilStateLoadable:function(e){const t=bb(),[n]=t.getRecoilStateLoadable(e);return[n,YS(t.getSetRecoilState(e),[e])]},useSetRecoilState:function(e){return YS(bb().getSetRecoilState(e),[e])},useResetRecoilState:function(e){return YS(bb().getResetRecoilState(e),[e])},useRecoilInterface:bb,useTransactionSubscription:mb,useSnapshotWithStateChange:function(e){const t=ub();let n=function(){const[e,t]=ZS(0);return mb(YS(()=>t(e=>e+1),[])),Sb(ub().current.getState().currentTree,{isSnapshot:!0})}();e(({key:e},o)=>{[n]=ob(t.current,n,e,nb(t.current,n,e).map(o))});const o=XS(n.atomValues,e=>e.contents),r=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(!e.has(o))continue e;n.add(o)}return n}(n.dirtyAtoms,new Set(o.keys()));return{atomValues:o,updatedAtoms:r}},useTransactionObservation:function(e){mb(YS((t,n)=>{let o=t.getState().nextTree;o||(o=t.getState().currentTree);const r=yb(o),a=yb(n),s=XS(ib,e=>{var t,n,o,r,a,s;return{persistence_UNSTABLE:{type:null!==(t=null===(n=e.options)||void 0===n||null===(o=n.persistence_UNSTABLE)||void 0===o?void 0:o.type)&&void 0!==t?t:"none",backButton:null!==(r=null===(a=e.options)||void 0===a||null===(s=a.persistence_UNSTABLE)||void 0===s?void 0:s.backButton)&&void 0!==r&&r}}}),i=new Set(o.dirtyAtoms);e({atomValues:r,previousAtomValues:a,atomInfo:s,modifiedAtoms:i,transactionMetadata:{...o.transactionMetadata}})},[e]))},useGoToSnapshot:function(){const e=ub();return t=>{Sd.unstable_batchedUpdates(()=>{t.updatedAtoms.forEach(n=>{db(e.current,new cb(n),t.atomValues.get(n))})})}},useSetUnvalidatedAtomValues:function(){const e=ub();return(t,n={})=>{Sd.unstable_batchedUpdates(()=>{e.current.addTransactionMetadata(n),t.forEach((t,n)=>fb(e.current,new cb(n),t))})}}};const{useRecoilCallback:vb,useRecoilState:Tb,useRecoilStateLoadable:Vb,useRecoilValue:Ab,useRecoilValueLoadable:Eb,useResetRecoilState:Mb,useSetRecoilState:_b,useSetUnvalidatedAtomValues:Nb,useTransactionObservation:Lb,useTransactionSubscription:kb}=wb,{DefaultValue:Ub}=$d,{RecoilRoot:Bb}=KS,{isRecoilValue:Cb}=tS;var Db={DefaultValue:Ub,RecoilRoot:Bb,atom:function e(t){const{default:n,...o}=t;return LS(n)||Rd(n)?function(t){const n=e({...t,default:MS,persistence_UNSTABLE:void 0===t.persistence_UNSTABLE?void 0:{...t.persistence_UNSTABLE,validator:e=>e instanceof _S?e:Td(t.persistence_UNSTABLE).validator(e,MS)}});return AS({key:t.key+"__withFallback",get:({get:e})=>{const o=e(n);return o instanceof _S?t.default:o},set:({set:e},t)=>e(n,t),dangerouslyAllowMutability:t.dangerouslyAllowMutability})}({...o,default:n}):function(e){const{key:t,persistence_UNSTABLE:n}=e;return NS({key:t,options:e,get:(o,r)=>{if(r.atomValues.has(t))return[r,Td(r.atomValues.get(t))];if(r.nonvalidatedAtoms.has(t)){if(null==n)return Bd(`Tried to restore a persisted value for atom ${t} but it has no persistence settings.`),[r,ES(e.default)];const o=r.nonvalidatedAtoms.get(t),a=n.validator(o,MS);return a instanceof _S?[{...r,nonvalidatedAtoms:kS(r.nonvalidatedAtoms,t)},ES(e.default)]:[{...r,atomValues:US(r.atomValues,t,ES(a)),nonvalidatedAtoms:kS(r.nonvalidatedAtoms,t)},ES(a)]}return[r,ES(e.default)]},set:(n,o,r)=>(!0!==e.dangerouslyAllowMutability&&nS(r),[{...o,dirtyAtoms:BS(o.dirtyAtoms,t),atomValues:r instanceof _S?kS(o.atomValues,t):US(o.atomValues,t,ES(r)),nonvalidatedAtoms:kS(o.nonvalidatedAtoms,t)},new Set([t])])})}({...o,default:n})},selector:AS,useRecoilValue:Ab,useRecoilValueLoadable:Eb,useRecoilState:Tb,useRecoilStateLoadable:Vb,useSetRecoilState:_b,useResetRecoilState:Mb,useRecoilCallback:vb,useTransactionObservation_UNSTABLE:Lb,useTransactionSubscription_UNSTABLE:kb,useSetUnvalidatedAtomValues_UNSTABLE:Nb,isRecoilValue:Cb},Ob=Db.DefaultValue,xb=Db.RecoilRoot,Ib=Db.atom,jb=Db.selector,zb=Db.useRecoilValue,Pb=Db.useRecoilValueLoadable,Fb=Db.useRecoilState,$b=Db.useRecoilStateLoadable,qb=Db.useSetRecoilState,Wb=Db.useResetRecoilState,Gb=Db.useRecoilCallback,Kb=Db.useTransactionObservation_UNSTABLE,Xb=Db.useTransactionSubscription_UNSTABLE,Yb=Db.useSetUnvalidatedAtomValues_UNSTABLE,Hb=Db.isRecoilValue;export default Db;export{Ob as DefaultValue,xb as RecoilRoot,Ib as atom,Hb as isRecoilValue,jb as selector,Gb as useRecoilCallback,Fb as useRecoilState,$b as useRecoilStateLoadable,zb as useRecoilValue,Pb as useRecoilValueLoadable,Wb as useResetRecoilState,qb as useSetRecoilState,Yb as useSetUnvalidatedAtomValues_UNSTABLE,Kb as useTransactionObservation_UNSTABLE,Xb as useTransactionSubscription_UNSTABLE};