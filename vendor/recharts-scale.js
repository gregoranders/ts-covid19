function ed(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Tc(e,r,t){return e(t={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&t.path)}},t.exports),t.exports}var rd,td=!0,nd="[DecimalError] ",id=nd+"Invalid argument: ",od=nd+"Exponent out of range: ",ud=Math.floor,sd=Math.pow,ad=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,cd=1e7,fd=ud(1286742750677284.5),Vl={};function ld(e,r){var t,n,i,o,u,s,a,c,f=e.constructor,l=f.precision;if(!e.s||!r.s)return r.s||(r=new f(e)),td?qr(r,l):r;if(a=e.d,c=r.d,u=e.e,i=r.e,a=a.slice(),o=u-i){for(o<0?(n=a,o=-o,s=c.length):(n=c,i=u,s=a.length),o>(s=(u=Math.ceil(l/7))>s?u+1:s+1)&&(o=s,n.length=1),n.reverse();o--;)n.push(0);n.reverse()}for((s=a.length)-(o=c.length)<0&&(o=s,n=c,c=a,a=n),t=0;o;)t=(a[--o]=a[o]+c[o]+t)/cd|0,a[o]%=cd;for(t&&(a.unshift(t),++i),s=a.length;0==a[--s];)a.pop();return r.d=a,r.e=i,td?qr(r,l):r}function dd(e,r,t){if(e!==~~e||e<r||e>t)throw Error(id+e)}function hd(e){var r,t,n,i=e.length-1,o="",u=e[0];if(i>0){for(o+=u,r=1;r<i;r++)(t=7-(n=e[r]+"").length)&&(o+=wd(t)),o+=n;(t=7-(n=(u=e[r])+"").length)&&(o+=wd(t))}else if(0===u)return"0";for(;u%10==0;)u/=10;return o+u}Vl.absoluteValue=Vl.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e},Vl.comparedTo=Vl.cmp=function(e){var r,t,n,i,o=this;if(e=new o.constructor(e),o.s!==e.s)return o.s||-e.s;if(o.e!==e.e)return o.e>e.e^o.s<0?1:-1;for(r=0,t=(n=o.d.length)<(i=e.d.length)?n:i;r<t;++r)if(o.d[r]!==e.d[r])return o.d[r]>e.d[r]^o.s<0?1:-1;return n===i?0:n>i^o.s<0?1:-1},Vl.decimalPlaces=Vl.dp=function(){var e=this,r=e.d.length-1,t=7*(r-e.e);if(r=e.d[r])for(;r%10==0;r/=10)t--;return t<0?0:t},Vl.dividedBy=Vl.div=function(e){return gd(this,new this.constructor(e))},Vl.dividedToIntegerBy=Vl.idiv=function(e){var r=this.constructor;return qr(gd(this,new r(e),0,1),r.precision)},Vl.equals=Vl.eq=function(e){return!this.cmp(e)},Vl.exponent=function(){return pd(this)},Vl.greaterThan=Vl.gt=function(e){return this.cmp(e)>0},Vl.greaterThanOrEqualTo=Vl.gte=function(e){return this.cmp(e)>=0},Vl.isInteger=Vl.isint=function(){return this.e>this.d.length-2},Vl.isNegative=Vl.isneg=function(){return this.s<0},Vl.isPositive=Vl.ispos=function(){return this.s>0},Vl.isZero=function(){return 0===this.s},Vl.lessThan=Vl.lt=function(e){return this.cmp(e)<0},Vl.lessThanOrEqualTo=Vl.lte=function(e){return this.cmp(e)<1},Vl.logarithm=Vl.log=function(e){var r,t=this,n=t.constructor,i=n.precision,o=i+5;if(void 0===e)e=new n(10);else if((e=new n(e)).s<1||e.eq(rd))throw Error(nd+"NaN");if(t.s<1)throw Error(nd+(t.s?"NaN":"-Infinity"));return t.eq(rd)?new n(0):(td=!1,r=gd(bd(t,o),bd(e,o),o),td=!0,qr(r,i))},Vl.minus=Vl.sub=function(e){var r=this;return e=new r.constructor(e),r.s==e.s?Nd(r,e):ld(r,(e.s=-e.s,e))},Vl.modulo=Vl.mod=function(e){var r,t=this,n=t.constructor,i=n.precision;if(!(e=new n(e)).s)throw Error(nd+"NaN");return t.s?(td=!1,r=gd(t,e,0,1).times(e),td=!0,t.minus(r)):qr(new n(t),i)},Vl.naturalExponential=Vl.exp=function(){return vd(this)},Vl.naturalLogarithm=Vl.ln=function(){return bd(this)},Vl.negated=Vl.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e},Vl.plus=Vl.add=function(e){var r=this;return e=new r.constructor(e),r.s==e.s?ld(r,e):Nd(r,(e.s=-e.s,e))},Vl.precision=Vl.sd=function(e){var r,t,n,i=this;if(void 0!==e&&e!==!!e&&1!==e&&0!==e)throw Error(id+e);if(r=pd(i)+1,t=7*(n=i.d.length-1)+1,n=i.d[n]){for(;n%10==0;n/=10)t--;for(n=i.d[0];n>=10;n/=10)t++}return e&&r>t?r:t},Vl.squareRoot=Vl.sqrt=function(){var e,r,t,n,i,o,u,s=this,a=s.constructor;if(s.s<1){if(!s.s)return new a(0);throw Error(nd+"NaN")}for(e=pd(s),td=!1,0==(i=Math.sqrt(+s))||i==1/0?(((r=hd(s.d)).length+e)%2==0&&(r+="0"),i=Math.sqrt(r),e=ud((e+1)/2)-(e<0||e%2),n=new a(r=i==1/0?"1e"+e:(r=i.toExponential()).slice(0,r.indexOf("e")+1)+e)):n=new a(i.toString()),i=u=(t=a.precision)+3;;)if(n=(o=n).plus(gd(s,o,u+2)).times(.5),hd(o.d).slice(0,u)===(r=hd(n.d)).slice(0,u)){if(r=r.slice(u-3,u+1),i==u&&"4999"==r){if(qr(o,t+1,0),o.times(o).eq(s)){n=o;break}}else if("9999"!=r)break;u+=4}return td=!0,qr(n,t)},Vl.times=Vl.mul=function(e){var r,t,n,i,o,u,s,a,c,f=this,l=f.constructor,d=f.d,h=(e=new l(e)).d;if(!f.s||!e.s)return new l(0);for(e.s*=f.s,t=f.e+e.e,(a=d.length)<(c=h.length)&&(o=d,d=h,h=o,u=a,a=c,c=u),o=[],n=u=a+c;n--;)o.push(0);for(n=c;--n>=0;){for(r=0,i=a+n;i>n;)s=o[i]+h[n]*d[i-n-1]+r,o[i--]=s%cd|0,r=s/cd|0;o[i]=(o[i]+r)%cd|0}for(;!o[--u];)o.pop();return r?++t:o.shift(),e.d=o,e.e=t,td?qr(e,l.precision):e},Vl.toDecimalPlaces=Vl.todp=function(e,r){var t=this,n=t.constructor;return t=new n(t),void 0===e?t:(dd(e,0,1e9),void 0===r?r=n.rounding:dd(r,0,8),qr(t,e+pd(t)+1,r))},Vl.toExponential=function(e,r){var t,n=this,i=n.constructor;return void 0===e?t=Ed(n,!0):(dd(e,0,1e9),void 0===r?r=i.rounding:dd(r,0,8),t=Ed(n=qr(new i(n),e+1,r),!0,e+1)),t},Vl.toFixed=function(e,r){var t,n,i=this,o=i.constructor;return void 0===e?Ed(i):(dd(e,0,1e9),void 0===r?r=o.rounding:dd(r,0,8),t=Ed((n=qr(new o(i),e+pd(i)+1,r)).abs(),!1,e+pd(n)+1),i.isneg()&&!i.isZero()?"-"+t:t)},Vl.toInteger=Vl.toint=function(){var e=this,r=e.constructor;return qr(new r(e),pd(e)+1,r.rounding)},Vl.toNumber=function(){return+this},Vl.toPower=Vl.pow=function(e){var r,t,n,i,o,u,s=this,a=s.constructor,c=+(e=new a(e));if(!e.s)return new a(rd);if(!(s=new a(s)).s){if(e.s<1)throw Error(nd+"Infinity");return s}if(s.eq(rd))return s;if(n=a.precision,e.eq(rd))return qr(s,n);if(u=(r=e.e)>=(t=e.d.length-1),o=s.s,u){if((t=c<0?-c:c)<=9007199254740991){for(i=new a(rd),r=Math.ceil(n/7+4),td=!1;t%2&&xd((i=i.times(s)).d,r),0!==(t=ud(t/2));)xd((s=s.times(s)).d,r);return td=!0,e.s<0?new a(rd).div(i):qr(i,n)}}else if(o<0)throw Error(nd+"NaN");return o=o<0&&1&e.d[Math.max(r,t)]?-1:1,s.s=1,td=!1,i=e.times(bd(s,n+12)),td=!0,(i=vd(i)).s=o,i},Vl.toPrecision=function(e,r){var t,n,i=this,o=i.constructor;return void 0===e?n=Ed(i,(t=pd(i))<=o.toExpNeg||t>=o.toExpPos):(dd(e,1,1e9),void 0===r?r=o.rounding:dd(r,0,8),n=Ed(i=qr(new o(i),e,r),e<=(t=pd(i))||t<=o.toExpNeg,e)),n},Vl.toSignificantDigits=Vl.tosd=function(e,r){var t=this.constructor;return void 0===e?(e=t.precision,r=t.rounding):(dd(e,1,1e9),void 0===r?r=t.rounding:dd(r,0,8)),qr(new t(this),e,r)},Vl.toString=Vl.valueOf=Vl.val=Vl.toJSON=Vl[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,r=pd(e),t=e.constructor;return Ed(e,r<=t.toExpNeg||r>=t.toExpPos)};var gd=function(){function e(e,r){var t,n=0,i=e.length;for(e=e.slice();i--;)t=e[i]*r+n,e[i]=t%cd|0,n=t/cd|0;return n&&e.unshift(n),e}function r(e,r,t,n){var i,o;if(t!=n)o=t>n?1:-1;else for(i=o=0;i<t;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function t(e,r,t){for(var n=0;t--;)e[t]-=n,n=e[t]<r[t]?1:0,e[t]=n*cd+e[t]-r[t];for(;!e[0]&&e.length>1;)e.shift()}return function(n,i,o,u){var s,a,c,f,l,d,h,g,v,p,m,w,b,y,N,E,x,O,M=n.constructor,k=n.s==i.s?1:-1,_=n.d,A=i.d;if(!n.s)return new M(n);if(!i.s)throw Error(nd+"Division by zero");for(a=n.e-i.e,x=A.length,N=_.length,g=(h=new M(k)).d=[],c=0;A[c]==(_[c]||0);)++c;if(A[c]>(_[c]||0)&&--a,(w=null==o?o=M.precision:u?o+(pd(n)-pd(i))+1:o)<0)return new M(0);if(w=w/7+2|0,c=0,1==x)for(f=0,A=A[0],w++;(c<N||f)&&w--;c++)b=f*cd+(_[c]||0),g[c]=b/A|0,f=b%A|0;else{for((f=cd/(A[0]+1)|0)>1&&(A=e(A,f),_=e(_,f),x=A.length,N=_.length),y=x,p=(v=_.slice(0,x)).length;p<x;)v[p++]=0;(O=A.slice()).unshift(0),E=A[0],A[1]>=cd/2&&++E;do{f=0,(s=r(A,v,x,p))<0?(m=v[0],x!=p&&(m=m*cd+(v[1]||0)),(f=m/E|0)>1?(f>=cd&&(f=cd-1),1==(s=r(l=e(A,f),v,d=l.length,p=v.length))&&(f--,t(l,x<d?O:A,d))):(0==f&&(s=f=1),l=A.slice()),(d=l.length)<p&&l.unshift(0),t(v,l,p),-1==s&&(s=r(A,v,x,p=v.length))<1&&(f++,t(v,x<p?O:A,p)),p=v.length):0===s&&(f++,v=[0]),g[c++]=f,s&&v[0]?v[p++]=_[y]||0:(v=[_[y]],p=1)}while((y++<N||void 0!==v[0])&&w--)}return g[0]||g.shift(),h.e=a,qr(h,u?o+pd(h)+1:o)}}();function vd(e,r){var t,n,i,o,u,s=0,a=0,c=e.constructor,f=c.precision;if(pd(e)>16)throw Error(od+pd(e));if(!e.s)return new c(rd);for(null==r?(td=!1,u=f):u=r,o=new c(.03125);e.abs().gte(.1);)e=e.times(o),a+=5;for(u+=Math.log(sd(2,a))/Math.LN10*2+5|0,t=n=i=new c(rd),c.precision=u;;){if(n=qr(n.times(e),u),t=t.times(++s),hd((o=i.plus(gd(n,t,u))).d).slice(0,u)===hd(i.d).slice(0,u)){for(;a--;)i=qr(i.times(i),u);return c.precision=f,null==r?(td=!0,qr(i,f)):i}i=o}}function pd(e){for(var r=7*e.e,t=e.d[0];t>=10;t/=10)r++;return r}function md(e,r,t){if(r>e.LN10.sd())throw td=!0,t&&(e.precision=t),Error(nd+"LN10 precision limit exceeded");return qr(new e(e.LN10),r)}function wd(e){for(var r="";e--;)r+="0";return r}function bd(e,r){var t,n,i,o,u,s,a,c,f,l=1,d=e,h=d.d,g=d.constructor,v=g.precision;if(d.s<1)throw Error(nd+(d.s?"NaN":"-Infinity"));if(d.eq(rd))return new g(0);if(null==r?(td=!1,c=v):c=r,d.eq(10))return null==r&&(td=!0),md(g,c);if(c+=10,g.precision=c,n=(t=hd(h)).charAt(0),o=pd(d),!(Math.abs(o)<15e14))return a=md(g,c+2,v).times(o+""),d=bd(new g(n+"."+t.slice(1)),c-10).plus(a),g.precision=v,null==r?(td=!0,qr(d,v)):d;for(;n<7&&1!=n||1==n&&t.charAt(1)>3;)n=(t=hd((d=d.times(e)).d)).charAt(0),l++;for(o=pd(d),n>1?(d=new g("0."+t),o++):d=new g(n+"."+t.slice(1)),s=u=d=gd(d.minus(rd),d.plus(rd),c),f=qr(d.times(d),c),i=3;;){if(u=qr(u.times(f),c),hd((a=s.plus(gd(u,new g(i),c))).d).slice(0,c)===hd(s.d).slice(0,c))return s=s.times(2),0!==o&&(s=s.plus(md(g,c+2,v).times(o+""))),s=gd(s,new g(l),c),g.precision=v,null==r?(td=!0,qr(s,v)):s;s=a,i+=2}}function yd(e,r){var t,n,i;for((t=r.indexOf("."))>-1&&(r=r.replace(".","")),(n=r.search(/e/i))>0?(t<0&&(t=n),t+=+r.slice(n+1),r=r.substring(0,n)):t<0&&(t=r.length),n=0;48===r.charCodeAt(n);)++n;for(i=r.length;48===r.charCodeAt(i-1);)--i;if(r=r.slice(n,i)){if(i-=n,t=t-n-1,e.e=ud(t/7),e.d=[],n=(t+1)%7,t<0&&(n+=7),n<i){for(n&&e.d.push(+r.slice(0,n)),i-=7;n<i;)e.d.push(+r.slice(n,n+=7));n=7-(r=r.slice(n)).length}else n-=i;for(;n--;)r+="0";if(e.d.push(+r),td&&(e.e>fd||e.e<-fd))throw Error(od+t)}else e.s=0,e.e=0,e.d=[0];return e}function qr(e,r,t){var n,i,o,u,s,a,c,f,l=e.d;for(u=1,o=l[0];o>=10;o/=10)u++;if((n=r-u)<0)n+=7,i=r,c=l[f=0];else{if((f=Math.ceil((n+1)/7))>=(o=l.length))return e;for(c=o=l[f],u=1;o>=10;o/=10)u++;i=(n%=7)-7+u}if(void 0!==t&&(s=c/(o=sd(10,u-i-1))%10|0,a=r<0||void 0!==l[f+1]||c%o,a=t<4?(s||a)&&(0==t||t==(e.s<0?3:2)):s>5||5==s&&(4==t||a||6==t&&(n>0?i>0?c/sd(10,u-i):0:l[f-1])%10&1||t==(e.s<0?8:7))),r<1||!l[0])return a?(o=pd(e),l.length=1,r=r-o-1,l[0]=sd(10,(7-r%7)%7),e.e=ud(-r/7)||0):(l.length=1,l[0]=e.e=e.s=0),e;if(0==n?(l.length=f,o=1,f--):(l.length=f+1,o=sd(10,7-n),l[f]=i>0?(c/sd(10,u-i)%sd(10,i)|0)*o:0),a)for(;;){if(0==f){(l[0]+=o)==cd&&(l[0]=1,++e.e);break}if(l[f]+=o,l[f]!=cd)break;l[f--]=0,o=1}for(n=l.length;0===l[--n];)l.pop();if(td&&(e.e>fd||e.e<-fd))throw Error(od+pd(e));return e}function Nd(e,r){var t,n,i,o,u,s,a,c,f,l,d=e.constructor,h=d.precision;if(!e.s||!r.s)return r.s?r.s=-r.s:r=new d(e),td?qr(r,h):r;if(a=e.d,l=r.d,n=r.e,c=e.e,a=a.slice(),u=c-n){for((f=u<0)?(t=a,u=-u,s=l.length):(t=l,n=c,s=a.length),u>(i=Math.max(Math.ceil(h/7),s)+2)&&(u=i,t.length=1),t.reverse(),i=u;i--;)t.push(0);t.reverse()}else{for((f=(i=a.length)<(s=l.length))&&(s=i),i=0;i<s;i++)if(a[i]!=l[i]){f=a[i]<l[i];break}u=0}for(f&&(t=a,a=l,l=t,r.s=-r.s),s=a.length,i=l.length-s;i>0;--i)a[s++]=0;for(i=l.length;i>u;){if(a[--i]<l[i]){for(o=i;o&&0===a[--o];)a[o]=cd-1;--a[o],a[i]+=cd}a[i]-=l[i]}for(;0===a[--s];)a.pop();for(;0===a[0];a.shift())--n;return a[0]?(r.d=a,r.e=n,td?qr(r,h):r):new d(0)}function Ed(e,r,t){var n,i=pd(e),o=hd(e.d),u=o.length;return r?(t&&(n=t-u)>0?o=o.charAt(0)+"."+o.slice(1)+wd(n):u>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(i<0?"e":"e+")+i):i<0?(o="0."+wd(-i-1)+o,t&&(n=t-u)>0&&(o+=wd(n))):i>=u?(o+=wd(i+1-u),t&&(n=t-i-1)>0&&(o=o+"."+wd(n))):((n=i+1)<u&&(o=o.slice(0,n)+"."+o.slice(n)),t&&(n=t-u)>0&&(i+1===u&&(o+="."),o+=wd(n))),e.s<0?"-"+o:o}function xd(e,r){if(e.length>r)return e.length=r,!0}function ol(e){if(!e||"object"!=typeof e)throw Error(nd+"Object expected");var r,t,n,i=["precision",1,1e9,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(r=0;r<i.length;r+=3)if(void 0!==(n=e[t=i[r]])){if(!(ud(n)===n&&n>=i[r+1]&&n<=i[r+2]))throw Error(id+t+": "+n);this[t]=n}if(void 0!==(n=e[t="LN10"])){if(n!=Math.LN10)throw Error(id+t+": "+n);this[t]=new this(n)}return this}var Od=function e(r){var t,n,i;function o(e){var r=this;if(!(r instanceof o))return new o(e);if(r.constructor=o,e instanceof o)return r.s=e.s,r.e=e.e,void(r.d=(e=e.d)?e.slice():e);if("number"==typeof e){if(0*e!=0)throw Error(id+e);if(e>0)r.s=1;else{if(!(e<0))return r.s=0,r.e=0,void(r.d=[0]);e=-e,r.s=-1}return e===~~e&&e<1e7?(r.e=0,void(r.d=[e])):yd(r,e.toString())}if("string"!=typeof e)throw Error(id+e);if(45===e.charCodeAt(0)?(e=e.slice(1),r.s=-1):r.s=1,!ad.test(e))throw Error(id+e);yd(r,e)}if(o.prototype=Vl,o.ROUND_UP=0,o.ROUND_DOWN=1,o.ROUND_CEIL=2,o.ROUND_FLOOR=3,o.ROUND_HALF_UP=4,o.ROUND_HALF_DOWN=5,o.ROUND_HALF_EVEN=6,o.ROUND_HALF_CEIL=7,o.ROUND_HALF_FLOOR=8,o.clone=e,o.config=o.set=ol,void 0===r&&(r={}),r)for(i=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<i.length;)r.hasOwnProperty(n=i[t++])||(r[n]=this[n]);return o.config(r),o}({precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"});rd=new Od(1);var Md=Od,kd=Object.freeze({__proto__:null,get Decimal(){return Od},default:Md}),_d=Tc((function(e,r){function t(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.memoize=r.reverse=r.compose=r.map=r.range=r.curry=r.PLACE_HOLDER=void 0;var n=function(e){return e},i={"@@functional/placeholder":!0};r.PLACE_HOLDER=i;var o=function(e){return e===i},u=function(e){return function r(){return 0===arguments.length||1===arguments.length&&o(arguments.length<=0?void 0:arguments[0])?r:e.apply(void 0,arguments)}},s=function(e){return function e(r,n){return 1===r?n:u((function(){for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];var f=a.filter((function(e){return e!==i})).length;return f>=r?n.apply(void 0,a):e(r-f,u((function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var u=a.map((function(e){return o(e)?r.shift():e}));return n.apply(void 0,t(u).concat(r))})))}))}(e.length,e)};r.curry=s,r.range=function(e,r){for(var t=[],n=e;n<r;++n)t[n-e]=n;return t};var a=s((function(e,r){return Array.isArray(r)?r.map(e):Object.keys(r).map((function(e){return r[e]})).map(e)}));r.map=a,r.compose=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!r.length)return n;var i=r.reverse(),o=i[0],u=i.slice(1);return function(){return u.reduce((function(e,r){return r(e)}),o.apply(void 0,arguments))}},r.reverse=function(e){return Array.isArray(e)?e.reverse():e.split("").reverse.join("")},r.memoize=function(e){var r=null,t=null;return function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return r&&i.every((function(e,t){return e===r[t]}))?t:(r=i,t=e.apply(void 0,i))}}}));ed(_d),_d.memoize,_d.reverse,_d.compose,_d.map,_d.range,_d.curry,_d.PLACE_HOLDER;var Ls,Ad=(Ls=kd)&&Ls.default||Ls,Td=Tc((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t,n=(t=Ad)&&t.__esModule?t:{default:t},i={rangeStep:function(e,r,t){for(var i=new n.default(e),o=0,u=[];i.lt(r)&&o<1e5;)u.push(i.toNumber()),i=i.add(t),o++;return u},getDigitCount:function(e){return 0===e?1:Math.floor(new n.default(e).abs().log(10).toNumber())+1},interpolateNumber:(0,_d.curry)((function(e,r,t){var n=+e;return n+t*(+r-n)})),uninterpolateNumber:(0,_d.curry)((function(e,r,t){return(t-e)/(r-+e||1/0)})),uninterpolateTruncation:(0,_d.curry)((function(e,r,t){var n=r-+e;return n=n||1/0,Math.max(0,Math.min(1,(t-e)/n))}))};r.default=i}));ed(Td);var Dd=Tc((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.getTickValuesFixedDomain=r.getTickValues=r.getNiceTickValues=void 0;var t=i(Ad),n=i(Td);function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,i=!1,o=void 0;try{for(var u,s=e[Symbol.iterator]();!(n=(u=s.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e){var r=u(e,2),t=r[0],n=r[1],i=t,o=n;return t>n&&(i=n,o=t),[i,o]}function a(e,r,i){if(e.lte(0))return new t.default(0);var o=n.default.getDigitCount(e.toNumber()),u=new t.default(10).pow(o),s=e.div(u),a=1!==o?.05:.1,c=new t.default(Math.ceil(s.div(a).toNumber())).add(i).mul(a).mul(u);return r?c:new t.default(Math.ceil(c))}function c(e,r,i){var o=1,u=new t.default(e);if(!u.isint()&&i){var s=Math.abs(e);s<1?(o=new t.default(10).pow(n.default.getDigitCount(e)-1),u=new t.default(Math.floor(u.div(o).toNumber())).mul(o)):s>1&&(u=new t.default(Math.floor(e)))}else 0===e?u=new t.default(Math.floor((r-1)/2)):i||(u=new t.default(Math.floor(e)));var a=Math.floor((r-1)/2);return(0,_d.compose)((0,_d.map)((function(e){return u.add(new t.default(e-a).mul(o)).toNumber()})),_d.range)(0,r)}function f(e,r,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(!Number.isFinite((r-e)/(n-1)))return{step:new t.default(0),tickMin:new t.default(0),tickMax:new t.default(0)};var u,s=a(new t.default(r).sub(e).div(n-1),i,o);u=e<=0&&r>=0?new t.default(0):(u=new t.default(e).add(r).div(2)).sub(new t.default(u).mod(s));var c=Math.ceil(u.sub(e).div(s).toNumber()),l=Math.ceil(new t.default(r).sub(u).div(s).toNumber()),d=c+l+1;return d>n?f(e,r,n,i,o+1):(d<n&&(l=r>0?l+(n-d):l,c=r>0?c:c+(n-d)),{step:s,tickMin:u.sub(new t.default(c).mul(s)),tickMax:u.add(new t.default(l).mul(s))})}var l=(0,_d.memoize)((function(e){var r=u(e,2),i=r[0],a=r[1],l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,d=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],h=Math.max(l,2),g=s([i,a]),v=u(g,2),p=v[0],m=v[1];if(p===-1/0||m===1/0){var w=m===1/0?[p].concat(o((0,_d.range)(0,l-1).map((function(){return 1/0})))):o((0,_d.range)(0,l-1).map((function(){return-1/0}))).concat([m]);return i>a?(0,_d.reverse)(w):w}if(p===m)return c(p,l,d);var b=f(p,m,h,d),y=b.step,N=b.tickMin,E=b.tickMax,x=n.default.rangeStep(N,E.add(new t.default(.1).mul(y)),y);return i>a?(0,_d.reverse)(x):x}));r.getNiceTickValues=l;var d=(0,_d.memoize)((function(e){var r=u(e,2),n=r[0],i=r[1],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,f=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],l=Math.max(o,2),d=s([n,i]),h=u(d,2),g=h[0],v=h[1];if(g===-1/0||v===1/0)return[n,i];if(g===v)return c(g,o,f);var p=a(new t.default(v).sub(g).div(l-1),f,0),m=(0,_d.compose)((0,_d.map)((function(e){return new t.default(g).add(new t.default(e).mul(p)).toNumber()})),_d.range),w=m(0,l).filter((function(e){return e>=g&&e<=v}));return n>i?(0,_d.reverse)(w):w}));r.getTickValues=d;var h=(0,_d.memoize)((function(e,r){var i=u(e,2),c=i[0],f=i[1],l=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],d=s([c,f]),h=u(d,2),g=h[0],v=h[1];if(g===-1/0||v===1/0)return[c,f];if(g===v)return[g];var p=Math.max(r,2),m=a(new t.default(v).sub(g).div(p-1),l,0),w=o(n.default.rangeStep(new t.default(g),new t.default(v).sub(new t.default(.99).mul(m)),m)).concat([v]);return c>f?(0,_d.reverse)(w):w}));r.getTickValuesFixedDomain=h}));ed(Dd),Dd.getTickValuesFixedDomain,Dd.getTickValues,Dd.getNiceTickValues;var Vd=Tc((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getTickValues",{enumerable:!0,get:function(){return Dd.getTickValues}}),Object.defineProperty(r,"getNiceTickValues",{enumerable:!0,get:function(){return Dd.getNiceTickValues}}),Object.defineProperty(r,"getTickValuesFixedDomain",{enumerable:!0,get:function(){return Dd.getTickValuesFixedDomain}})})),gt=ed(Vd),jd=Vd.getTickValues,Ld=Vd.getNiceTickValues,Pd=Vd.getTickValuesFixedDomain,qd=Object.freeze(Object.assign(Object.create(null),gt,{default:gt,__moduleExports:Vd,getTickValues:jd,getNiceTickValues:Ld,getTickValuesFixedDomain:Pd}));export default qd;export{qd as RechartsScale,Ld as getNiceTickValues,jd as getTickValues,Pd as getTickValuesFixedDomain};