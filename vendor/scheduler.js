function wc(e,n){return e(n={exports:{}},n.exports),n.exports}var xc=wc((function(e,n){var t,r,a,l,o;if("undefined"==typeof window||"function"!=typeof MessageChannel){var i=null,u=null,s=function(){if(null!==i)try{var e=n.unstable_now();i(!0,e),i=null}catch(e){throw setTimeout(s,0),e}},c=Date.now();n.unstable_now=function(){return Date.now()-c},t=function(e){null!==i?setTimeout(t,0,e):(i=e,setTimeout(s,0))},r=function(e,n){u=setTimeout(e,n)},a=function(){clearTimeout(u)},l=function(){return!1},o=n.unstable_forceFrameRate=function(){}}else{var f=window.performance,b=window.Date,p=window.setTimeout,d=window.clearTimeout;if("undefined"!=typeof console){var _=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof _&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof f&&"function"==typeof f.now)n.unstable_now=function(){return f.now()};else{var v=b.now();n.unstable_now=function(){return b.now()-v}}var w=!1,m=null,y=-1,h=5,k=0;l=function(){return n.unstable_now()>=k},o=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):h=0<e?Math.floor(1e3/e):5};var x=new MessageChannel,T=x.port2;x.port1.onmessage=function(){if(null!==m){var e=n.unstable_now();k=e+h;try{m(!0,e)?T.postMessage(null):(w=!1,m=null)}catch(e){throw T.postMessage(null),e}}else w=!1},t=function(e){m=e,w||(w=!0,T.postMessage(null))},r=function(e,t){y=p((function(){e(n.unstable_now())}),t)},a=function(){d(y),y=-1}}function g(e,n){var t=e.length;e.push(n);e:for(;;){var r=t-1>>>1,a=e[r];if(!(void 0!==a&&0<F(a,n)))break e;e[r]=n,e[t]=a,t=r}}function P(e){return void 0===(e=e[0])?null:e}function C(e){var n=e[0];if(void 0!==n){var t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,a=e.length;r<a;){var l=2*(r+1)-1,o=e[l],i=l+1,u=e[i];if(void 0!==o&&0>F(o,t))void 0!==u&&0>F(u,o)?(e[r]=u,e[i]=t,r=i):(e[r]=o,e[l]=t,r=l);else{if(!(void 0!==u&&0>F(u,t)))break e;e[r]=u,e[i]=t,r=i}}}return n}return null}function F(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}var I=[],M=[],L=1,q=null,A=3,E=!1,N=!1,R=!1;function D(e){for(var n=P(M);null!==n;){if(null===n.callback)C(M);else{if(!(n.startTime<=e))break;C(M),n.sortIndex=n.expirationTime,g(I,n)}n=P(M)}}function j(e){if(R=!1,D(e),!N)if(null!==P(I))N=!0,t(B);else{var n=P(M);null!==n&&r(j,n.startTime-e)}}function B(e,t){N=!1,R&&(R=!1,a()),E=!0;var o=A;try{for(D(t),q=P(I);null!==q&&(!(q.expirationTime>t)||e&&!l());){var i=q.callback;if(null!==i){q.callback=null,A=q.priorityLevel;var u=i(q.expirationTime<=t);t=n.unstable_now(),"function"==typeof u?q.callback=u:q===P(I)&&C(I),D(t)}else C(I);q=P(I)}if(null!==q)var s=!0;else{var c=P(M);null!==c&&r(j,c.startTime-t),s=!1}return s}finally{q=null,A=o,E=!1}}function U(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var W=o;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){N||E||(N=!0,t(B))},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_getFirstCallbackNode=function(){return P(I)},n.unstable_next=function(e){switch(A){case 1:case 2:case 3:var n=3;break;default:n=A}var t=A;A=n;try{return e()}finally{A=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=W,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=A;A=e;try{return n()}finally{A=t}},n.unstable_scheduleCallback=function(e,l,o){var i=n.unstable_now();if("object"==typeof o&&null!==o){var u=o.delay;u="number"==typeof u&&0<u?i+u:i,o="number"==typeof o.timeout?o.timeout:U(e)}else o=U(e),u=i;return e={id:L++,callback:l,priorityLevel:e,startTime:u,expirationTime:o=u+o,sortIndex:-1},u>i?(e.sortIndex=u,g(M,e),null===P(I)&&e===P(M)&&(R?a():R=!0,r(j,u-i))):(e.sortIndex=o,g(I,e),N||E||(N=!0,t(B))),e},n.unstable_shouldYield=function(){var e=n.unstable_now();D(e);var t=P(I);return t!==q&&null!==q&&null!==t&&null!==t.callback&&t.startTime<=e&&t.expirationTime<q.expirationTime||l()},n.unstable_wrapCallback=function(e){var n=A;return function(){var t=A;A=n;try{return e.apply(this,arguments)}finally{A=t}}}})),Tc=(xc.unstable_now,xc.unstable_forceFrameRate,xc.unstable_IdlePriority,xc.unstable_ImmediatePriority,xc.unstable_LowPriority,xc.unstable_NormalPriority,xc.unstable_Profiling,xc.unstable_UserBlockingPriority,xc.unstable_cancelCallback,xc.unstable_continueExecution,xc.unstable_getCurrentPriorityLevel,xc.unstable_getFirstCallbackNode,xc.unstable_next,xc.unstable_pauseExecution,xc.unstable_requestPaint,xc.unstable_runWithPriority,xc.unstable_scheduleCallback,xc.unstable_shouldYield,xc.unstable_wrapCallback,wc((function(e){e.exports=xc})));export default Tc;export{Tc as Scheduler};