import{utcMonday as nu,utcDay as tu,timeMonday as eu,timeDay as ru,utcYear as uu,utcSunday as ou,utcThursday as iu,timeYear as cu,timeSunday as au,timeThursday as fu}from"d3-time";function lu(n){if(0<=n.y&&n.y<100){var t=new Date(-1,n.m,n.d,n.H,n.M,n.S,n.L);return t.setFullYear(n.y),t}return new Date(n.y,n.m,n.d,n.H,n.M,n.S,n.L)}function su(n){if(0<=n.y&&n.y<100){var t=new Date(Date.UTC(-1,n.m,n.d,n.H,n.M,n.S,n.L));return t.setUTCFullYear(n.y),t}return new Date(Date.UTC(n.y,n.m,n.d,n.H,n.M,n.S,n.L))}function gu(n,t,e){return{y:n,m:t,d:e,H:0,M:0,S:0,L:0}}function dr(n){var t=n.dateTime,e=n.date,r=n.time,u=n.periods,o=n.days,i=n.shortDays,c=n.months,a=n.shortMonths,f=Uu(u),l=wu(u),s=Uu(o),g=wu(o),h=Uu(i),y=wu(i),m=Uu(c),d=wu(c),v=Uu(a),D=wu(a),M={a:function(n){return i[n.getDay()]},A:function(n){return o[n.getDay()]},b:function(n){return a[n.getMonth()]},B:function(n){return c[n.getMonth()]},c:null,d:Nu,e:Nu,f:Ru,H:Bu,I:zu,j:$u,L:Eu,m:ku,M:Gu,p:function(n){return u[+(n.getHours()>=12)]},q:function(n){return 1+~~(n.getMonth()/3)},Q:Lo,s:Ho,S:Ku,u:no,U:to,V:eo,w:ro,W:uo,x:null,X:null,y:io,Y:co,Z:ao,"%":Fo},T={a:function(n){return i[n.getUTCDay()]},A:function(n){return o[n.getUTCDay()]},b:function(n){return a[n.getUTCMonth()]},B:function(n){return c[n.getUTCMonth()]},c:null,d:fo,e:fo,f:yo,H:lo,I:so,j:go,L:ho,m:mo,M:vo,p:function(n){return u[+(n.getUTCHours()>=12)]},q:function(n){return 1+~~(n.getUTCMonth()/3)},Q:Lo,s:Ho,S:Do,u:Mo,U:To,V:Co,w:xo,W:Uo,x:null,X:null,y:wo,Y:So,Z:po,"%":Fo},C={a:function(n,t,e){var r=h.exec(t.slice(e));return r?(n.w=y[r[0].toLowerCase()],e+r[0].length):-1},A:function(n,t,e){var r=s.exec(t.slice(e));return r?(n.w=g[r[0].toLowerCase()],e+r[0].length):-1},b:function(n,t,e){var r=v.exec(t.slice(e));return r?(n.m=D[r[0].toLowerCase()],e+r[0].length):-1},B:function(n,t,e){var r=m.exec(t.slice(e));return r?(n.m=d[r[0].toLowerCase()],e+r[0].length):-1},c:function(n,e,r){return w(n,t,e,r)},d:Pu,e:Pu,f:Ou,H:ju,I:ju,j:Vu,L:Ju,m:Wu,M:qu,p:function(n,t,e){var r=f.exec(t.slice(e));return r?(n.p=l[r[0].toLowerCase()],e+r[0].length):-1},q:bu,Q:Xu,s:_u,S:Iu,u:pu,U:Fu,V:Lu,w:Su,W:Hu,x:function(n,t,r){return w(n,e,t,r)},X:function(n,t,e){return w(n,r,t,e)},y:Yu,Y:Au,Z:Zu,"%":Qu};function x(n,t){return function(e){var r,u,o,i=[],c=-1,a=0,f=n.length;for(e instanceof Date||(e=new Date(+e));++c<f;)37===n.charCodeAt(c)&&(i.push(n.slice(a,c)),null!=(u=vu[r=n.charAt(++c)])?r=n.charAt(++c):u="e"===r?" ":"0",(o=t[r])&&(r=o(e,u)),i.push(r),a=c+1);return i.push(n.slice(a,c)),i.join("")}}function U(n,t){return function(e){var r,u,o=gu(1900,void 0,1);if(w(o,n,e+="",0)!=e.length)return null;if("Q"in o)return new Date(o.Q);if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0));if(t&&!("Z"in o)&&(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(u=(r=su(gu(o.y,0,1))).getUTCDay(),r=u>4||0===u?nu.ceil(r):nu(r),r=tu.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(u=(r=lu(gu(o.y,0,1))).getDay(),r=u>4||0===u?eu.ceil(r):eu(r),r=ru.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),u="Z"in o?su(gu(o.y,0,1)).getUTCDay():lu(gu(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(u+5)%7:o.w+7*o.U-(u+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,su(o)):lu(o)}}function w(n,t,e,r){for(var u,o,i=0,c=t.length,a=e.length;i<c;){if(r>=a)return-1;if(37===(u=t.charCodeAt(i++))){if(u=t.charAt(i++),!(o=C[u in vu?t.charAt(i++):u])||(r=o(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}return M.x=x(e,M),M.X=x(r,M),M.c=x(t,M),T.x=x(e,T),T.X=x(r,T),T.c=x(t,T),{format:function(n){var t=x(n+="",M);return t.toString=function(){return n},t},parse:function(n){var t=U(n+="",!1);return t.toString=function(){return n},t},utcFormat:function(n){var t=x(n+="",T);return t.toString=function(){return n},t},utcParse:function(n){var t=U(n+="",!0);return t.toString=function(){return n},t}}}var ur,hu,yu,mu,du,vu={"-":"",_:" ",0:"0"},Du=/^\s*\d+/,Mu=/^%/,Tu=/[\\^$*+?|[\]().{}]/g;function Cu(n,t,e){var r=n<0?"-":"",u=(r?-n:n)+"",o=u.length;return r+(o<e?new Array(e-o+1).join(t)+u:u)}function xu(n){return n.replace(Tu,"\\$&")}function Uu(n){return new RegExp("^(?:"+n.map(xu).join("|")+")","i")}function wu(n){for(var t={},e=-1,r=n.length;++e<r;)t[n[e].toLowerCase()]=e;return t}function Su(n,t,e){var r=Du.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function pu(n,t,e){var r=Du.exec(t.slice(e,e+1));return r?(n.u=+r[0],e+r[0].length):-1}function Fu(n,t,e){var r=Du.exec(t.slice(e,e+2));return r?(n.U=+r[0],e+r[0].length):-1}function Lu(n,t,e){var r=Du.exec(t.slice(e,e+2));return r?(n.V=+r[0],e+r[0].length):-1}function Hu(n,t,e){var r=Du.exec(t.slice(e,e+2));return r?(n.W=+r[0],e+r[0].length):-1}function Au(n,t,e){var r=Du.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Yu(n,t,e){var r=Du.exec(t.slice(e,e+2));return r?(n.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function Zu(n,t,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e,e+6));return r?(n.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function bu(n,t,e){var r=Du.exec(t.slice(e,e+1));return r?(n.q=3*r[0]-3,e+r[0].length):-1}function Wu(n,t,e){var r=Du.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Pu(n,t,e){var r=Du.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function Vu(n,t,e){var r=Du.exec(t.slice(e,e+3));return r?(n.m=0,n.d=+r[0],e+r[0].length):-1}function ju(n,t,e){var r=Du.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function qu(n,t,e){var r=Du.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function Iu(n,t,e){var r=Du.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function Ju(n,t,e){var r=Du.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function Ou(n,t,e){var r=Du.exec(t.slice(e,e+6));return r?(n.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function Qu(n,t,e){var r=Mu.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function Xu(n,t,e){var r=Du.exec(t.slice(e));return r?(n.Q=+r[0],e+r[0].length):-1}function _u(n,t,e){var r=Du.exec(t.slice(e));return r?(n.s=+r[0],e+r[0].length):-1}function Nu(n,t){return Cu(n.getDate(),t,2)}function Bu(n,t){return Cu(n.getHours(),t,2)}function zu(n,t){return Cu(n.getHours()%12||12,t,2)}function $u(n,t){return Cu(1+ru.count(cu(n),n),t,3)}function Eu(n,t){return Cu(n.getMilliseconds(),t,3)}function Ru(n,t){return Eu(n,t)+"000"}function ku(n,t){return Cu(n.getMonth()+1,t,2)}function Gu(n,t){return Cu(n.getMinutes(),t,2)}function Ku(n,t){return Cu(n.getSeconds(),t,2)}function no(n){var t=n.getDay();return 0===t?7:t}function to(n,t){return Cu(au.count(cu(n)-1,n),t,2)}function eo(n,t){var e=n.getDay();return n=e>=4||0===e?fu(n):fu.ceil(n),Cu(fu.count(cu(n),n)+(4===cu(n).getDay()),t,2)}function ro(n){return n.getDay()}function uo(n,t){return Cu(eu.count(cu(n)-1,n),t,2)}function io(n,t){return Cu(n.getFullYear()%100,t,2)}function co(n,t){return Cu(n.getFullYear()%1e4,t,4)}function ao(n){var t=n.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Cu(t/60|0,"0",2)+Cu(t%60,"0",2)}function fo(n,t){return Cu(n.getUTCDate(),t,2)}function lo(n,t){return Cu(n.getUTCHours(),t,2)}function so(n,t){return Cu(n.getUTCHours()%12||12,t,2)}function go(n,t){return Cu(1+tu.count(uu(n),n),t,3)}function ho(n,t){return Cu(n.getUTCMilliseconds(),t,3)}function yo(n,t){return ho(n,t)+"000"}function mo(n,t){return Cu(n.getUTCMonth()+1,t,2)}function vo(n,t){return Cu(n.getUTCMinutes(),t,2)}function Do(n,t){return Cu(n.getUTCSeconds(),t,2)}function Mo(n){var t=n.getUTCDay();return 0===t?7:t}function To(n,t){return Cu(ou.count(uu(n)-1,n),t,2)}function Co(n,t){var e=n.getUTCDay();return n=e>=4||0===e?iu(n):iu.ceil(n),Cu(iu.count(uu(n),n)+(4===uu(n).getUTCDay()),t,2)}function xo(n){return n.getUTCDay()}function Uo(n,t){return Cu(nu.count(uu(n)-1,n),t,2)}function wo(n,t){return Cu(n.getUTCFullYear()%100,t,2)}function So(n,t){return Cu(n.getUTCFullYear()%1e4,t,4)}function po(){return"+0000"}function Fo(){return"%"}function Lo(n){return+n}function Ho(n){return Math.floor(+n/1e3)}function pr(n){return ur=dr(n),hu=ur.format,yu=ur.parse,mu=ur.utcFormat,du=ur.utcParse,ur}pr({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Ao=Date.prototype.toISOString?function(n){return n.toISOString()}:mu("%Y-%m-%dT%H:%M:%S.%LZ"),Yo=+new Date("2000-01-01T00:00:00.000Z")?function(n){var t=new Date(n);return isNaN(t)?null:t}:du("%Y-%m-%dT%H:%M:%S.%LZ"),In=Object.freeze({__proto__:null,timeFormatDefaultLocale:pr,get timeFormat(){return hu},get timeParse(){return yu},get utcFormat(){return mu},get utcParse(){return du},timeFormatLocale:dr,isoFormat:Ao,isoParse:Yo});export default In;export{In as d3Array,Ao as isoFormat,Yo as isoParse,hu as timeFormat,pr as timeFormatDefaultLocale,dr as timeFormatLocale,yu as timeParse,mu as utcFormat,du as utcParse};