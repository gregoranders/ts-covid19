import{rgb as Yn,color as Ae,hsl as Zn,lab as yr,hcl as br,cubehelix as wr}from"d3-color";function Ar(t,n,r,e,a){var o=t*t,i=o*t;return((1-3*t+3*o-i)*n+(4-6*o+3*i)*r+(1+3*t+3*o-3*i)*e+i*a)/6}function Xr(t){var n=t.length-1;return function(r){var e=r<=0?r=0:r>=1?(r=1,n-1):Math.floor(r*n),a=t[e],o=t[e+1],i=e>0?t[e-1]:2*a-o,u=e<n-1?t[e+2]:2*o-a;return Ar((r-e/n)*n,i,a,o,u)}}function Cr(t){var n=t.length;return function(r){var e=Math.floor(((r%=1)<0?++r:r)*n),a=t[(e+n-1)%n],o=t[e%n],i=t[(e+1)%n],u=t[(e+2)%n];return Ar((r-e/n)*n,a,o,i,u)}}function Ht(t){return function(){return t}}function Nr(t,n){return function(r){return t+r*n}}function Hr(t,n){var r=n-t;return r?Nr(t,r>180||r<-180?r-360*Math.round(r/360):r):Ht(isNaN(t)?n:t)}function Rr(t,n){var r=n-t;return r?Nr(t,r):Ht(isNaN(t)?n:t)}var Ge=function t(n){var r=function(t){return 1==(t=+t)?Rr:function(n,r){return r-n?function(t,n,r){return t=Math.pow(t,r),n=Math.pow(n,r)-t,r=1/r,function(e){return Math.pow(t+e*n,r)}}(n,r,t):Ht(isNaN(n)?r:n)}}(n);function e(t,n){var e=r((t=Yn(t)).r,(n=Yn(n)).r),a=r(t.g,n.g),o=r(t.b,n.b),i=Rr(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=a(n),t.b=o(n),t.opacity=i(n),t+""}}return e.gamma=t,e}(1);function Br(t){return function(n){var r,e,a=n.length,o=new Array(a),i=new Array(a),u=new Array(a);for(r=0;r<a;++r)e=Yn(n[r]),o[r]=e.r||0,i[r]=e.g||0,u[r]=e.b||0;return o=t(o),i=t(i),u=t(u),e.opacity=1,function(t){return e.r=o(t),e.g=i(t),e.b=u(t),e+""}}}var Dr=Br(Xr),Lr=Br(Cr);function Sr(t,n){n||(n=[]);var r,e=t?Math.min(n.length,t.length):0,a=n.slice();return function(o){for(r=0;r<e;++r)a[r]=t[r]*(1-o)+n[r]*o;return a}}function Yr(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function jr(t,n){return(Yr(n)?Sr:qr)(t,n)}function qr(t,n){var r,e=n?n.length:0,a=t?Math.min(e,t.length):0,o=new Array(a),i=new Array(e);for(r=0;r<a;++r)o[r]=Or(t[r],n[r]);for(;r<e;++r)i[r]=n[r];return function(t){for(r=0;r<a;++r)i[r]=o[r](t);return i}}function kr(t,n){var r=new Date;return t=+t,n=+n,function(e){return r.setTime(t*(1-e)+n*e),r}}function nn(t,n){return t=+t,n=+n,function(r){return t*(1-r)+n*r}}function Ir(t,n){var r,e={},a={};for(r in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)r in t?e[r]=Or(t[r],n[r]):a[r]=n[r];return function(t){for(r in e)a[r]=e[r](t);return a}}var Tr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Vr=new RegExp(Tr.source,"g");function Er(t,n){var r,e,a,o=Tr.lastIndex=Vr.lastIndex=0,i=-1,u=[],l=[];for(t+="",n+="";(r=Tr.exec(t))&&(e=Vr.exec(n));)(a=e.index)>o&&(a=n.slice(o,a),u[i]?u[i]+=a:u[++i]=a),(r=r[0])===(e=e[0])?u[i]?u[i]+=e:u[++i]=e:(u[++i]=null,l.push({i,x:nn(r,e)})),o=Vr.lastIndex;return o<n.length&&(a=n.slice(o),u[i]?u[i]+=a:u[++i]=a),u.length<2?l[0]?function(t){return function(n){return t(n)+""}}(l[0].x):function(t){return function(){return t}}(n):(n=l.length,function(t){for(var r,e=0;e<n;++e)u[(r=l[e]).i]=r.x(t);return u.join("")})}function Or(t,n){var r,e=typeof n;return null==n||"boolean"===e?Ht(n):("number"===e?nn:"string"===e?(r=Ae(n))?(n=r,Ge):Er:n instanceof Ae?Ge:n instanceof Date?kr:Yr(n)?Sr:Array.isArray(n)?qr:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?Ir:nn)(t,n)}function _r(t){var n=t.length;return function(r){return t[Math.max(0,Math.min(n-1,Math.floor(r*n)))]}}function zr(t,n){var r=Hr(+t,+n);return function(t){var n=r(t);return n-360*Math.floor(n/360)}}function Pr(t,n){return t=+t,n=+n,function(r){return Math.round(t*(1-r)+n*r)}}var Zr,Qr,Fr,Gr,Jr=180/Math.PI,jt={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Kr(t,n,r,e,a,o){var i,u,l;return(i=Math.sqrt(t*t+n*n))&&(t/=i,n/=i),(l=t*r+n*e)&&(r-=t*l,e-=n*l),(u=Math.sqrt(r*r+e*e))&&(r/=u,e/=u,l/=u),t*e<n*r&&(t=-t,n=-n,l=-l,i=-i),{translateX:a,translateY:o,rotate:Math.atan2(n,t)*Jr,skewX:Math.atan(l)*Jr,scaleX:i,scaleY:u}}function Ur(t,n,r,e){function a(t){return t.length?t.pop()+" ":""}return function(o,i){var u=[],l=[];return o=t(o),i=t(i),function(t,e,a,o,i,u){if(t!==a||e!==o){var l=i.push("translate(",null,n,null,r);u.push({i:l-4,x:nn(t,a)},{i:l-2,x:nn(e,o)})}else(a||o)&&i.push("translate("+a+n+o+r)}(o.translateX,o.translateY,i.translateX,i.translateY,u,l),function(t,n,r,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:r.push(a(r)+"rotate(",null,e)-2,x:nn(t,n)})):n&&r.push(a(r)+"rotate("+n+e)}(o.rotate,i.rotate,u,l),function(t,n,r,o){t!==n?o.push({i:r.push(a(r)+"skewX(",null,e)-2,x:nn(t,n)}):n&&r.push(a(r)+"skewX("+n+e)}(o.skewX,i.skewX,u,l),function(t,n,r,e,o,i){if(t!==r||n!==e){var u=o.push(a(o)+"scale(",null,",",null,")");i.push({i:u-4,x:nn(t,r)},{i:u-2,x:nn(n,e)})}else 1===r&&1===e||o.push(a(o)+"scale("+r+","+e+")")}(o.scaleX,o.scaleY,i.scaleX,i.scaleY,u,l),o=i=null,function(t){for(var n,r=-1,e=l.length;++r<e;)u[(n=l[r]).i]=n.x(t);return u.join("")}}}var Wr=Ur((function(t){return"none"===t?jt:(Zr||(Zr=document.createElement("DIV"),Qr=document.documentElement,Fr=document.defaultView),Zr.style.transform=t,t=Fr.getComputedStyle(Qr.appendChild(Zr),null).getPropertyValue("transform"),Qr.removeChild(Zr),Kr(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}),"px, ","px)","deg)"),$r=Ur((function(t){return null==t?jt:(Gr||(Gr=document.createElementNS("http://www.w3.org/2000/svg","g")),Gr.setAttribute("transform",t),(t=Gr.transform.baseVal.consolidate())?Kr((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):jt)}),", ",")",")"),ta=Math.SQRT2;function na(t){return((t=Math.exp(t))+1/t)/2}function ra(t,n){var r,e,a=t[0],o=t[1],i=t[2],u=n[0],l=n[1],s=n[2],c=u-a,f=l-o,p=c*c+f*f;if(p<1e-12)e=Math.log(s/i)/ta,r=function(t){return[a+t*c,o+t*f,i*Math.exp(ta*t*e)]};else{var h=Math.sqrt(p),g=(s*s-i*i+4*p)/(2*i*2*h),v=(s*s-i*i-4*p)/(2*s*2*h),m=Math.log(Math.sqrt(g*g+1)-g),y=Math.log(Math.sqrt(v*v+1)-v);e=(y-m)/ta,r=function(t){var n,r=t*e,u=na(m),l=i/(2*h)*(u*(n=ta*r+m,((n=Math.exp(2*n))-1)/(n+1))-function(t){return((t=Math.exp(t))-1/t)/2}(m));return[a+l*c,o+l*f,i*u/na(ta*r+m)]}}return r.duration=1e3*e,r}function We(t){return function(n,r){var e=t((n=Zn(n)).h,(r=Zn(r)).h),a=Rr(n.s,r.s),o=Rr(n.l,r.l),i=Rr(n.opacity,r.opacity);return function(t){return n.h=e(t),n.s=a(t),n.l=o(t),n.opacity=i(t),n+""}}}var ea=We(Hr),aa=We(Rr);function $n(t,n){var r=Rr((t=yr(t)).l,(n=yr(n)).l),e=Rr(t.a,n.a),a=Rr(t.b,n.b),o=Rr(t.opacity,n.opacity);return function(n){return t.l=r(n),t.a=e(n),t.b=a(n),t.opacity=o(n),t+""}}function Cn(t){return function(n,r){var e=t((n=br(n)).h,(r=br(r)).h),a=Rr(n.c,r.c),o=Rr(n.l,r.l),i=Rr(n.opacity,r.opacity);return function(t){return n.h=e(t),n.c=a(t),n.l=o(t),n.opacity=i(t),n+""}}}var oa=Cn(Hr),ia=Cn(Rr);function Vn(t){return function n(r){function e(n,e){var a=t((n=wr(n)).h,(e=wr(e)).h),o=Rr(n.s,e.s),i=Rr(n.l,e.l),u=Rr(n.opacity,e.opacity);return function(t){return n.h=a(t),n.s=o(t),n.l=i(Math.pow(t,r)),n.opacity=u(t),n+""}}return r=+r,e.gamma=n,e}(1)}var ua=Vn(Hr),la=Vn(Rr);function sa(t,n){for(var r=0,e=n.length-1,a=n[0],o=new Array(e<0?0:e);r<e;)o[r]=t(a,a=n[++r]);return function(t){var n=Math.max(0,Math.min(e-1,Math.floor(t*=e)));return o[n](t-n)}}function ca(t,n){for(var r=new Array(n),e=0;e<n;++e)r[e]=t(e/(n-1));return r}var fa=Object.freeze({__proto__:null,interpolate:Or,interpolateArray:jr,interpolateBasis:Xr,interpolateBasisClosed:Cr,interpolateDate:kr,interpolateDiscrete:_r,interpolateHue:zr,interpolateNumber:nn,interpolateNumberArray:Sr,interpolateObject:Ir,interpolateRound:Pr,interpolateString:Er,interpolateTransformCss:Wr,interpolateTransformSvg:$r,interpolateZoom:ra,interpolateRgb:Ge,interpolateRgbBasis:Dr,interpolateRgbBasisClosed:Lr,interpolateHsl:ea,interpolateHslLong:aa,interpolateLab:$n,interpolateHcl:oa,interpolateHclLong:ia,interpolateCubehelix:ua,interpolateCubehelixLong:la,piecewise:sa,quantize:ca});export default fa;export{fa as d3Interpolate,Or as interpolate,jr as interpolateArray,Xr as interpolateBasis,Cr as interpolateBasisClosed,ua as interpolateCubehelix,la as interpolateCubehelixLong,kr as interpolateDate,_r as interpolateDiscrete,oa as interpolateHcl,ia as interpolateHclLong,ea as interpolateHsl,aa as interpolateHslLong,zr as interpolateHue,$n as interpolateLab,nn as interpolateNumber,Ir as interpolateObject,Ge as interpolateRgb,Dr as interpolateRgbBasis,Lr as interpolateRgbBasisClosed,Pr as interpolateRound,Er as interpolateString,Wr as interpolateTransformCss,$r as interpolateTransformSvg,ra as interpolateZoom,sa as piecewise,ca as quantize};