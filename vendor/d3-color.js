function ie(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function he(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function ue(){}var ce="\\s*([+-]?\\d+)\\s*",ge="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",fe="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",pe=/^#([0-9a-f]{3,8})$/,be=new RegExp("^rgb\\("+[ce,ce,ce]+"\\)$"),we=new RegExp("^rgb\\("+[fe,fe,fe]+"\\)$"),ye=new RegExp("^rgba\\("+[ce,ce,ce,ge]+"\\)$"),me=new RegExp("^rgba\\("+[fe,fe,fe,ge]+"\\)$"),Ne=new RegExp("^hsl\\("+[ge,fe,fe]+"\\)$"),ke=new RegExp("^hsla\\("+[ge,fe,fe,ge]+"\\)$"),Me={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function ve(){return this.rgb().formatHex()}function xe(){return this.rgb().formatRgb()}function qe(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=pe.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?Re(e):3===n?new je(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?Ee(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?Ee(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=be.exec(t))?new je(e[1],e[2],e[3],1):(e=we.exec(t))?new je(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=ye.exec(t))?Ee(e[1],e[2],e[3],e[4]):(e=me.exec(t))?Ee(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=Ne.exec(t))?Pe(e[1],e[2]/100,e[3]/100,1):(e=ke.exec(t))?Pe(e[1],e[2]/100,e[3]/100,e[4]):Me.hasOwnProperty(t)?Re(Me[t]):"transparent"===t?new je(NaN,NaN,NaN,0):null}function Re(t){return new je(t>>16&255,t>>8&255,255&t,1)}function Ee(t,e,n,i){return i<=0&&(t=e=n=NaN),new je(t,e,n,i)}function $e(t){return t instanceof ue||(t=qe(t)),t?new je((t=t.rgb()).r,t.g,t.b,t.opacity):new je}function He(t,e,n,i){return 1===arguments.length?$e(t):new je(t,e,n,null==i?1:i)}function je(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}function Oe(){return"#"+Ie(this.r)+Ie(this.g)+Ie(this.b)}function _e(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function Ie(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Pe(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Ce(t,e,n,i)}function Se(t){if(t instanceof Ce)return new Ce(t.h,t.s,t.l,t.opacity);if(t instanceof ue||(t=qe(t)),!t)return new Ce;if(t instanceof Ce)return t;var e=(t=t.rgb()).r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),a=Math.max(e,n,i),s=NaN,h=a-r,o=(a+r)/2;return h?(s=e===a?(n-i)/h+6*(n<i):n===a?(i-e)/h+2:(e-n)/h+4,h/=o<.5?a+r:2-a-r,s*=60):h=o>0&&o<1?0:s,new Ce(s,h,o,t.opacity)}function ze(t,e,n,i){return 1===arguments.length?Se(t):new Ce(t,e,n,null==i?1:i)}function Ce(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}function Le(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}ie(ue,qe,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:ve,formatHex:ve,formatHsl:function(){return Se(this).formatHsl()},formatRgb:xe,toString:xe}),ie(je,He,he(ue,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new je(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new je(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Oe,formatHex:Oe,formatRgb:_e,toString:_e})),ie(Ce,ze,he(ue,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Ce(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Ce(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new je(Le(t>=240?t-240:t+120,r,i),Le(t,r,i),Le(t<120?t+240:t-120,r,i),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var Ae=Math.PI/180,Be=180/Math.PI,De=6/29*3*(6/29);function Fe(t){if(t instanceof Ke)return new Ke(t.l,t.a,t.b,t.opacity);if(t instanceof Ze)return Nn(t);t instanceof je||(t=$e(t));var e,n,i=Ve(t.r),r=Ve(t.g),a=Ve(t.b),s=Qe((.2225045*i+.7168786*r+.0606169*a)/1);return i===r&&r===a?e=n=s:(e=Qe((.4360747*i+.3850649*r+.1430804*a)/.96422),n=Qe((.0139322*i+.0971045*r+.7141733*a)/.82521)),new Ke(116*s-16,500*(e-s),200*(s-n),t.opacity)}function Ge(t,e){return new Ke(t,0,0,null==e?1:e)}function Je(t,e,n,i){return 1===arguments.length?Fe(t):new Ke(t,e,n,null==i?1:i)}function Ke(t,e,n,i){this.l=+t,this.a=+e,this.b=+n,this.opacity=+i}function Qe(t){return t>.008856451679035631?Math.pow(t,1/3):t/De+4/29}function Te(t){return t>6/29?t*t*t:De*(t-4/29)}function Ue(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Ve(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function We(t){if(t instanceof Ze)return new Ze(t.h,t.c,t.l,t.opacity);if(t instanceof Ke||(t=Fe(t)),0===t.a&&0===t.b)return new Ze(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*Be;return new Ze(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Xe(t,e,n,i){return 1===arguments.length?We(t):new Ze(n,e,t,null==i?1:i)}function Ye(t,e,n,i){return 1===arguments.length?We(t):new Ze(t,e,n,null==i?1:i)}function Ze(t,e,n,i){this.h=+t,this.c=+e,this.l=+n,this.opacity=+i}function Nn(t){if(isNaN(t.h))return new Ke(t.l,0,0,t.opacity);var e=t.h*Ae;return new Ke(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}ie(Ke,Je,he(ue,{brighter:function(t){return new Ke(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Ke(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return new je(Ue(3.1338561*(e=.96422*Te(e))-1.6168667*(t=1*Te(t))-.4906146*(n=.82521*Te(n))),Ue(-.9787684*e+1.9161415*t+.033454*n),Ue(.0719453*e-.2289914*t+1.4052427*n),this.opacity)}})),ie(Ze,Ye,he(ue,{brighter:function(t){return new Ze(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Ze(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Nn(this).rgb()}}));var kn=1.78277,Rn=-.29227,En=-.90649,$n=1.97294,Hn=$n*En,jn=$n*kn,On=kn*Rn- -.14861*En;function _n(t){if(t instanceof Sn)return new Sn(t.h,t.s,t.l,t.opacity);t instanceof je||(t=$e(t));var e=t.r/255,n=t.g/255,i=t.b/255,r=(On*i+Hn*e-jn*n)/(On+Hn-jn),a=i-r,s=($n*(n-r)-Rn*a)/En,h=Math.sqrt(s*s+a*a)/($n*r*(1-r)),o=h?Math.atan2(s,a)*Be-120:NaN;return new Sn(o<0?o+360:o,h,r,t.opacity)}function Pn(t,e,n,i){return 1===arguments.length?_n(t):new Sn(t,e,n,null==i?1:i)}function Sn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}ie(Sn,Pn,he(ue,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Sn(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Sn(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*Ae,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),i=Math.cos(t),r=Math.sin(t);return new je(255*(e+n*(-.14861*i+kn*r)),255*(e+n*(Rn*i+En*r)),255*(e+n*($n*i)),this.opacity)}}));var zn=Object.freeze({__proto__:null,color:qe,rgb:He,hsl:ze,lab:Je,hcl:Ye,lch:Xe,gray:Ge,cubehelix:Pn});export default zn;export{qe as color,Pn as cubehelix,zn as d3Color,Ge as gray,Ye as hcl,ze as hsl,Je as lab,Xe as lch,He as rgb};