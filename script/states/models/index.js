import{selector as se}from"recoil";import{aggregate as ne}from"model";export const AsyncSelector=se({key:"modelsAsyncSelector",get:()=>new Promise((e,r)=>{navigator.serviceWorker?navigator.serviceWorker.ready.then(o=>{const t=o.active||o.installing||o.waiting;if(!t)return void console.error("Missing serviceWorker");const s=new MessageChannel;s.port1.onmessage=r=>{e(r.data)},s.port1.onmessageerror=e=>{r(e)},t.postMessage({type:"GET_MODELS"},{transfer:[s.port2]})}).catch(console.error):r()})});export const AggregateSelector=se({key:"modelsAggregateSelector",get:async({get:e})=>{const r=e(AsyncSelector);return ne(r)}});