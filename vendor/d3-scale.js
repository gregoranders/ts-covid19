import{range as Jt,bisect as Qc,tickStep as Vt,ticks as Tt,tickIncrement as Ut,ascending as ht,quantile as Yc,bisector as vt}from"d3-array";import{interpolate as Jc,interpolateNumber as Xc,interpolateRound as Zc,piecewise as $r}from"d3-interpolate";import{formatSpecifier as or,precisionFixed as gr,precisionRound as Mr,precisionPrefix as vr,formatPrefix as lr,format as fr}from"d3-format";import{timeMillisecond as nf,timeSecond as tf,timeMinute as rf,timeHour as ef,timeDay as ru,timeWeek as af,timeMonth as uf,timeYear as cu,utcMillisecond as of,utcSecond as cf,utcMinute as xa,utcHour as ba,utcDay as tu,utcWeek as lf,utcMonth as Xa,utcYear as uu}from"d3-time";import{timeFormat as hu,utcFormat as mu}from"d3-time-format";function ff(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n)}return this}function sf(n,t){switch(arguments.length){case 0:break;case 1:"function"==typeof n?this.interpolator(n):this.range(n);break;default:this.domain(n),"function"==typeof t?this.interpolator(t):this.range(t)}return this}const hf=Symbol("implicit");function pf(){var n=new Map,t=[],r=[],e=hf;function a(a){var u=a+"",i=n.get(u);if(!i){if(e!==hf)return e;n.set(u,i=t.push(a))}return r[(i-1)%r.length]}return a.domain=function(r){if(!arguments.length)return t.slice();t=[],n=new Map;for(const e of r){const r=e+"";n.has(r)||n.set(r,t.push(e))}return a},a.range=function(n){return arguments.length?(r=Array.from(n),a):r.slice()},a.unknown=function(n){return arguments.length?(e=n,a):e},a.copy=function(){return pf(t,r).unknown(e)},ff.apply(a,arguments),a}function gf(){var n,t,r=pf().unknown(void 0),e=r.domain,a=r.range,u=0,i=1,o=!1,c=0,l=0,f=.5;function s(){var r=e().length,s=i<u,h=s?i:u,p=s?u:i;n=(p-h)/Math.max(1,r-c+2*l),o&&(n=Math.floor(n)),h+=(p-h-n*(r-c))*f,t=n*(1-c),o&&(h=Math.round(h),t=Math.round(t));var g=Jt(r).map((function(t){return h+n*t}));return a(s?g.reverse():g)}return delete r.unknown,r.domain=function(n){return arguments.length?(e(n),s()):e()},r.range=function(n){return arguments.length?([u,i]=n,u=+u,i=+i,s()):[u,i]},r.rangeRound=function(n){return[u,i]=n,u=+u,i=+i,o=!0,s()},r.bandwidth=function(){return t},r.step=function(){return n},r.round=function(n){return arguments.length?(o=!!n,s()):o},r.padding=function(n){return arguments.length?(c=Math.min(1,l=+n),s()):c},r.paddingInner=function(n){return arguments.length?(c=Math.min(1,n),s()):c},r.paddingOuter=function(n){return arguments.length?(l=+n,s()):l},r.align=function(n){return arguments.length?(f=Math.max(0,Math.min(1,n)),s()):f},r.copy=function(){return gf(e(),[u,i]).round(o).paddingInner(c).paddingOuter(l).align(f)},ff.apply(s(),arguments)}function mf(n){var t=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return mf(t())},n}function df(){return mf(gf.apply(null,arguments).paddingInner(1))}function nn(n){return+n}var yf=[0,1];function jt(n){return n}function vf(n,t){return(t-=n=+n)?function(r){return(r-n)/t}:(r=isNaN(t)?NaN:.5,function(){return r});var r}function Mf(n,t,r){var e=n[0],a=n[1],u=t[0],i=t[1];return a<e?(e=vf(a,e),u=r(i,u)):(e=vf(e,a),u=r(u,i)),function(n){return u(e(n))}}function wf(n,t,r){var e=Math.min(n.length,t.length)-1,a=new Array(e),u=new Array(e),i=-1;for(n[e]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++i<e;)a[i]=vf(n[i],n[i+1]),u[i]=r(t[i],t[i+1]);return function(t){var r=Qc(n,t,1,e)-1;return u[r](a[r](t))}}function kf(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function Nf(){var n,t,r,e,a,u,i=yf,o=yf,c=Jc,l=jt;function f(){var n,t,r,c=Math.min(i.length,o.length);return l!==jt&&(n=i[0],t=i[c-1],n>t&&(r=n,n=t,t=r),l=function(r){return Math.max(n,Math.min(t,r))}),e=c>2?wf:Mf,a=u=null,s}function s(t){return isNaN(t=+t)?r:(a||(a=e(i.map(n),o,c)))(n(l(t)))}return s.invert=function(r){return l(t((u||(u=e(o,i.map(n),Xc)))(r)))},s.domain=function(n){return arguments.length?(i=Array.from(n,nn),f()):i.slice()},s.range=function(n){return arguments.length?(o=Array.from(n),f()):o.slice()},s.rangeRound=function(n){return o=Array.from(n),c=Zc,f()},s.clamp=function(n){return arguments.length?(l=!!n||jt,f()):l!==jt},s.interpolate=function(n){return arguments.length?(c=n,f()):c},s.unknown=function(n){return arguments.length?(r=n,s):r},function(r,e){return n=r,t=e,f()}}function xf(){return Nf()(jt,jt)}function bf(n,t,r,e){var a,u=Vt(n,t,r);switch((e=or(null==e?",f":e)).type){case"s":var i=Math.max(Math.abs(n),Math.abs(t));return null!=e.precision||isNaN(a=vr(u,i))||(e.precision=a),lr(e,i);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN(a=Mr(u,Math.max(Math.abs(n),Math.abs(t))))||(e.precision=a-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(a=gr(u))||(e.precision=a-2*("%"===e.type))}return fr(e)}function Sf(n){var t=n.domain;return n.ticks=function(n){var r=t();return Tt(r[0],r[r.length-1],null==n?10:n)},n.tickFormat=function(n,r){var e=t();return bf(e[0],e[e.length-1],null==n?10:n,r)},n.nice=function(r){null==r&&(r=10);var e,a=t(),u=0,i=a.length-1,o=a[u],c=a[i];return c<o&&(e=o,o=c,c=e,e=u,u=i,i=e),(e=Ut(o,c,r))>0?(o=Math.floor(o/e)*e,c=Math.ceil(c/e)*e,e=Ut(o,c,r)):e<0&&(o=Math.ceil(o*e)/e,c=Math.floor(c*e)/e,e=Ut(o,c,r)),e>0?(a[u]=Math.floor(o/e)*e,a[i]=Math.ceil(c/e)*e,t(a)):e<0&&(a[u]=Math.ceil(o*e)/e,a[i]=Math.floor(c*e)/e,t(a)),n},n}function Jn(){var n=xf();return n.copy=function(){return kf(n,Jn())},ff.apply(n,arguments),Sf(n)}function qf(n){var t;function r(n){return isNaN(n=+n)?t:n}return r.invert=r,r.domain=r.range=function(t){return arguments.length?(n=Array.from(t,nn),r):n.slice()},r.unknown=function(n){return arguments.length?(t=n,r):t},r.copy=function(){return qf(n).unknown(t)},n=arguments.length?Array.from(n,nn):[0,1],Sf(r)}function Af(n,t){var r,e=0,a=(n=n.slice()).length-1,u=n[e],i=n[a];return i<u&&(r=e,e=a,a=r,r=u,u=i,i=r),n[e]=t.floor(u),n[a]=t.ceil(i),n}function Df(n){return Math.log(n)}function If(n){return Math.exp(n)}function Of(n){return-Math.log(-n)}function Ff(n){return-Math.exp(-n)}function Pf(n){return isFinite(n)?+("1e"+n):n<0?0:n}function Rf(n){return function(t){return-n(-t)}}function Lf(n){var t,r,e=n(Df,If),a=e.domain,u=10;function i(){return t=function(n){return n===Math.E?Math.log:10===n&&Math.log10||2===n&&Math.log2||(n=Math.log(n),function(t){return Math.log(t)/n})}(u),r=function(n){return 10===n?Pf:n===Math.E?Math.exp:function(t){return Math.pow(n,t)}}(u),a()[0]<0?(t=Rf(t),r=Rf(r),n(Of,Ff)):n(Df,If),e}return e.base=function(n){return arguments.length?(u=+n,i()):u},e.domain=function(n){return arguments.length?(a(n),i()):a()},e.ticks=function(n){var e,i=a(),o=i[0],c=i[i.length-1];(e=c<o)&&(h=o,o=c,c=h);var l,f,s,h=t(o),p=t(c),g=null==n?10:+n,m=[];if(!(u%1)&&p-h<g){if(h=Math.floor(h),p=Math.ceil(p),o>0){for(;h<=p;++h)for(f=1,l=r(h);f<u;++f)if(!((s=l*f)<o)){if(s>c)break;m.push(s)}}else for(;h<=p;++h)for(f=u-1,l=r(h);f>=1;--f)if(!((s=l*f)<o)){if(s>c)break;m.push(s)}2*m.length<g&&(m=Tt(o,c,g))}else m=Tt(h,p,Math.min(p-h,g)).map(r);return e?m.reverse():m},e.tickFormat=function(n,a){if(null==a&&(a=10===u?".0e":","),"function"!=typeof a&&(a=fr(a)),n===1/0)return a;null==n&&(n=10);var i=Math.max(1,u*n/e.ticks().length);return function(n){var e=n/r(Math.round(t(n)));return e*u<u-.5&&(e*=u),e<=i?a(n):""}},e.nice=function(){return a(Af(a(),{floor:function(n){return r(Math.floor(t(n)))},ceil:function(n){return r(Math.ceil(t(n)))}}))},e}function Tf(){var n=Lf(Nf()).domain([1,10]);return n.copy=function(){return kf(n,Tf()).base(n.base())},ff.apply(n,arguments),n}function Ef(n){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/n))}}function Qf(n){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*n}}function Uf(n){var t=1,r=n(Ef(t),Qf(t));return r.constant=function(r){return arguments.length?n(Ef(t=+r),Qf(t)):t},Sf(r)}function _f(){var n=Uf(Nf());return n.copy=function(){return kf(n,_f()).constant(n.constant())},ff.apply(n,arguments)}function zf(n){return function(t){return t<0?-Math.pow(-t,n):Math.pow(t,n)}}function Bf(n){return n<0?-Math.sqrt(-n):Math.sqrt(n)}function Yf(n){return n<0?-n*n:n*n}function Cf(n){var t=n(jt,jt),r=1;function e(){return 1===r?n(jt,jt):.5===r?n(Bf,Yf):n(zf(r),zf(1/r))}return t.exponent=function(n){return arguments.length?(r=+n,e()):r},Sf(t)}function Hf(){var n=Cf(Nf());return n.copy=function(){return kf(n,Hf()).exponent(n.exponent())},ff.apply(n,arguments),n}function Wf(){return Hf.apply(null,arguments).exponent(.5)}function jf(n){return Math.sign(n)*n*n}function Gf(n){return Math.sign(n)*Math.sqrt(Math.abs(n))}function rn(){var n,t=[],r=[],e=[];function a(){var n=0,a=Math.max(1,r.length);for(e=new Array(a-1);++n<a;)e[n-1]=Yc(t,n/a);return u}function u(t){return isNaN(t=+t)?n:r[Qc(e,t)]}return u.invertExtent=function(n){var a=r.indexOf(n);return a<0?[NaN,NaN]:[a>0?e[a-1]:t[0],a<e.length?e[a]:t[t.length-1]]},u.domain=function(n){if(!arguments.length)return t.slice();t=[];for(let r of n)null==r||isNaN(r=+r)||t.push(r);return t.sort(ht),a()},u.range=function(n){return arguments.length?(r=Array.from(n),a()):r.slice()},u.unknown=function(t){return arguments.length?(n=t,u):n},u.quantiles=function(){return e.slice()},u.copy=function(){return rn().domain(t).range(r).unknown(n)},ff.apply(u,arguments)}function ta(){var n,t=0,r=1,e=1,a=[.5],u=[0,1];function i(t){return t<=t?u[Qc(a,t,0,e)]:n}function o(){var n=-1;for(a=new Array(e);++n<e;)a[n]=((n+1)*r-(n-e)*t)/(e+1);return i}return i.domain=function(n){return arguments.length?([t,r]=n,t=+t,r=+r,o()):[t,r]},i.range=function(n){return arguments.length?(e=(u=Array.from(n)).length-1,o()):u.slice()},i.invertExtent=function(n){var i=u.indexOf(n);return i<0?[NaN,NaN]:i<1?[t,a[0]]:i>=e?[a[e-1],r]:[a[i-1],a[i]]},i.unknown=function(t){return arguments.length?(n=t,i):i},i.thresholds=function(){return a.slice()},i.copy=function(){return ta().domain([t,r]).range(u).unknown(n)},ff.apply(Sf(i),arguments)}function Jf(){var n,t=[.5],r=[0,1],e=1;function a(a){return a<=a?r[Qc(t,a,0,e)]:n}return a.domain=function(n){return arguments.length?(t=Array.from(n),e=Math.min(t.length,r.length-1),a):t.slice()},a.range=function(n){return arguments.length?(r=Array.from(n),e=Math.min(t.length,r.length-1),a):r.slice()},a.invertExtent=function(n){var e=r.indexOf(n);return[t[e-1],t[e]]},a.unknown=function(t){return arguments.length?(n=t,a):n},a.copy=function(){return Jf().domain(t).range(r).unknown(n)},ff.apply(a,arguments)}function Nr(n){return new Date(n)}function Kf(n){return n instanceof Date?+n:+new Date(+n)}function Vf(n,t,r,e,a,u,i,o,c){var l=xf(),f=l.invert,s=l.domain,h=c(".%L"),p=c(":%S"),g=c("%I:%M"),m=c("%I %p"),d=c("%a %d"),y=c("%b %d"),v=c("%B"),M=c("%Y"),w=[[i,1,1e3],[i,5,5e3],[i,15,15e3],[i,30,3e4],[u,1,6e4],[u,5,3e5],[u,15,9e5],[u,30,18e5],[a,1,36e5],[a,3,108e5],[a,6,216e5],[a,12,432e5],[e,1,864e5],[e,2,1728e5],[r,1,6048e5],[t,1,2592e6],[t,3,7776e6],[n,1,31536e6]];function k(o){return(i(o)<o?h:u(o)<o?p:a(o)<o?g:e(o)<o?m:t(o)<o?r(o)<o?d:y:n(o)<o?v:M)(o)}function N(t,r,e){if(null==t&&(t=10),"number"==typeof t){var a,u=Math.abs(e-r)/t,i=vt((function(n){return n[2]})).right(w,u);return i===w.length?(a=Vt(r/31536e6,e/31536e6,t),t=n):i?(a=(i=w[u/w[i-1][2]<w[i][2]/u?i-1:i])[1],t=i[0]):(a=Math.max(Vt(r,e,t),1),t=o),t.every(a)}return t}return l.invert=function(n){return new Date(f(n))},l.domain=function(n){return arguments.length?s(Array.from(n,Kf)):s().map(Nr)},l.ticks=function(n){var t,r=s(),e=r[0],a=r[r.length-1],u=a<e;return u&&(t=e,e=a,a=t),t=(t=N(n,e,a))?t.range(e,a+1):[],u?t.reverse():t},l.tickFormat=function(n,t){return null==t?k:c(t)},l.nice=function(n){var t=s();return(n=N(n,t[0],t[t.length-1]))?s(Af(t,n)):l},l.copy=function(){return kf(l,Vf(n,t,r,e,a,u,i,o,c))},l}function Xf(){return ff.apply(Vf(cu,uf,af,ru,ef,rf,tf,nf,hu).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function Zf(){return ff.apply(Vf(uu,Xa,lf,tu,ba,xa,cf,of,mu).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function $f(){var n,t,r,e,a,u=0,i=1,o=jt,c=!1;function l(t){return isNaN(t=+t)?a:o(0===r?.5:(t=(e(t)-n)*r,c?Math.max(0,Math.min(1,t)):t))}function f(n){return function(t){var r,e;return arguments.length?([r,e]=t,o=n(r,e),l):[o(0),o(1)]}}return l.domain=function(a){return arguments.length?([u,i]=a,n=e(u=+u),t=e(i=+i),r=n===t?0:1/(t-n),l):[u,i]},l.clamp=function(n){return arguments.length?(c=!!n,l):c},l.interpolator=function(n){return arguments.length?(o=n,l):o},l.range=f(Jc),l.rangeRound=f(Zc),l.unknown=function(n){return arguments.length?(a=n,l):a},function(a){return e=a,n=a(u),t=a(i),r=n===t?0:1/(t-n),l}}function nh(n,t){return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown())}function th(){var n=Sf($f()(jt));return n.copy=function(){return nh(n,th())},sf.apply(n,arguments)}function rh(){var n=Cf($f());return n.copy=function(){return nh(n,rh()).exponent(n.exponent())},sf.apply(n,arguments)}function eh(){var n,t,r,e,a,u,i,o=0,c=.5,l=1,f=1,s=jt,h=!1;function p(n){return isNaN(n=+n)?i:(n=.5+((n=+u(n))-t)*(f*n<f*t?e:a),s(h?Math.max(0,Math.min(1,n)):n))}function g(n){return function(t){var r,e,a;return arguments.length?([r,e,a]=t,s=$r(n,[r,e,a]),p):[s(0),s(.5),s(1)]}}return p.domain=function(i){return arguments.length?([o,c,l]=i,n=u(o=+o),t=u(c=+c),r=u(l=+l),e=n===t?0:.5/(t-n),a=t===r?0:.5/(r-t),f=t<n?-1:1,p):[o,c,l]},p.clamp=function(n){return arguments.length?(h=!!n,p):h},p.interpolator=function(n){return arguments.length?(s=n,p):s},p.range=g(Jc),p.rangeRound=g(Zc),p.unknown=function(n){return arguments.length?(i=n,p):i},function(i){return u=i,n=i(o),t=i(c),r=i(l),e=n===t?0:.5/(t-n),a=t===r?0:.5/(r-t),f=t<n?-1:1,p}}function ah(){var n=Sf(eh()(jt));return n.copy=function(){return nh(n,ah())},sf.apply(n,arguments)}function uh(){var n=Cf(eh());return n.copy=function(){return nh(n,uh()).exponent(n.exponent())},sf.apply(n,arguments)}var ih=Object.freeze({__proto__:null,scaleBand:gf,scalePoint:df,scaleIdentity:qf,scaleLinear:Jn,scaleLog:Tf,scaleSymlog:_f,scaleOrdinal:pf,scaleImplicit:hf,scalePow:Hf,scaleSqrt:Wf,scaleRadial:function n(){var t,r=xf(),e=[0,1],a=!1;function u(n){var e=Gf(r(n));return isNaN(e)?t:a?Math.round(e):e}return u.invert=function(n){return r.invert(jf(n))},u.domain=function(n){return arguments.length?(r.domain(n),u):r.domain()},u.range=function(n){return arguments.length?(r.range((e=Array.from(n,nn)).map(jf)),u):e.slice()},u.rangeRound=function(n){return u.range(n).round(!0)},u.round=function(n){return arguments.length?(a=!!n,u):a},u.clamp=function(n){return arguments.length?(r.clamp(n),u):r.clamp()},u.unknown=function(n){return arguments.length?(t=n,u):t},u.copy=function(){return n(r.domain(),e).round(a).clamp(r.clamp()).unknown(t)},ff.apply(u,arguments),Sf(u)},scaleQuantile:rn,scaleQuantize:ta,scaleThreshold:Jf,scaleTime:Xf,scaleUtc:Zf,scaleSequential:th,scaleSequentialLog:function n(){var t=Lf($f()).domain([1,10]);return t.copy=function(){return nh(t,n()).base(t.base())},sf.apply(t,arguments)},scaleSequentialPow:rh,scaleSequentialSqrt:function(){return rh.apply(null,arguments).exponent(.5)},scaleSequentialSymlog:function n(){var t=Uf($f());return t.copy=function(){return nh(t,n()).constant(t.constant())},sf.apply(t,arguments)},scaleSequentialQuantile:function n(){var t=[],r=jt;function e(n){if(!isNaN(n=+n))return r((Qc(t,n,1)-1)/(t.length-1))}return e.domain=function(n){if(!arguments.length)return t.slice();t=[];for(let r of n)null==r||isNaN(r=+r)||t.push(r);return t.sort(ht),e},e.interpolator=function(n){return arguments.length?(r=n,e):r},e.range=function(){return t.map((n,e)=>r(e/(t.length-1)))},e.quantiles=function(n){return Array.from({length:n+1},(r,e)=>Yc(t,e/n))},e.copy=function(){return n(r).domain(t)},sf.apply(e,arguments)},scaleDiverging:ah,scaleDivergingLog:function n(){var t=Lf(eh()).domain([.1,1,10]);return t.copy=function(){return nh(t,n()).base(t.base())},sf.apply(t,arguments)},scaleDivergingPow:uh,scaleDivergingSqrt:function(){return uh.apply(null,arguments).exponent(.5)},scaleDivergingSymlog:function n(){var t=Uf(eh());return t.copy=function(){return nh(t,n()).constant(t.constant())},sf.apply(t,arguments)},tickFormat:bf});export default ih;export{ih as d3Scale,gf as scaleBand,ah as scaleDiverging,qf as scaleIdentity,hf as scaleImplicit,Jn as scaleLinear,Tf as scaleLog,pf as scaleOrdinal,df as scalePoint,Hf as scalePow,rn as scaleQuantile,ta as scaleQuantize,th as scaleSequential,Wf as scaleSqrt,_f as scaleSymlog,Jf as scaleThreshold,Xf as scaleTime,Zf as scaleUtc};