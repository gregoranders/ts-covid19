var ea=new Date,ua=new Date;function aa(e,t,n,u){function a(t){return e(t=0===arguments.length?new Date:new Date(+t)),t}return a.floor=function(t){return e(t=new Date(+t)),t},a.ceil=function(n){return e(n=new Date(n-1)),t(n,1),e(n),n},a.round=function(e){var t=a(e),n=a.ceil(e);return e-t<n-e?t:n},a.offset=function(e,n){return t(e=new Date(+e),null==n?1:Math.floor(n)),e},a.range=function(n,u,s){var r,i=[];if(n=a.ceil(n),s=null==s?1:Math.floor(s),!(n<u&&s>0))return i;do{i.push(r=new Date(+n)),t(n,s),e(n)}while(r<n&&n<u);return i},a.filter=function(n){return aa((function(t){if(t>=t)for(;e(t),!n(t);)t.setTime(t-1)}),(function(e,u){if(e>=e)if(u<0)for(;++u<=0;)for(;t(e,-1),!n(e););else for(;--u>=0;)for(;t(e,1),!n(e););}))},n&&(a.count=function(t,u){return ea.setTime(+t),ua.setTime(+u),e(ea),e(ua),Math.floor(n(ea,ua))},a.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?a.filter(u?function(t){return u(t)%e==0}:function(t){return a.count(0,t)%e==0}):a:null}),a}var sa=aa((function(){}),(function(e,t){e.setTime(+e+t)}),(function(e,t){return t-e}));sa.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?aa((function(t){t.setTime(Math.floor(t/e)*e)}),(function(t,n){t.setTime(+t+n*e)}),(function(t,n){return(n-t)/e})):sa:null};var ra=sa.range,ia=aa((function(e){e.setTime(e-e.getMilliseconds())}),(function(e,t){e.setTime(+e+1e3*t)}),(function(e,t){return(t-e)/1e3}),(function(e){return e.getUTCSeconds()})),oa=ia.range,ca=aa((function(e){e.setTime(e-e.getMilliseconds()-1e3*e.getSeconds())}),(function(e,t){e.setTime(+e+6e4*t)}),(function(e,t){return(t-e)/6e4}),(function(e){return e.getMinutes()})),fa=ca.range,la=aa((function(e){e.setTime(e-e.getMilliseconds()-1e3*e.getSeconds()-6e4*e.getMinutes())}),(function(e,t){e.setTime(+e+36e5*t)}),(function(e,t){return(t-e)/36e5}),(function(e){return e.getHours()})),da=la.range,ma=aa((function(e){e.setHours(0,0,0,0)}),(function(e,t){e.setDate(e.getDate()+t)}),(function(e,t){return(t-e-6e4*(t.getTimezoneOffset()-e.getTimezoneOffset()))/864e5}),(function(e){return e.getDate()-1})),ga=ma.range;function Ta(e){return aa((function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)}),(function(e,t){e.setDate(e.getDate()+7*t)}),(function(e,t){return(t-e-6e4*(t.getTimezoneOffset()-e.getTimezoneOffset()))/6048e5}))}var ya=Ta(0),Ma=Ta(1),ha=Ta(2),Ca=Ta(3),Ua=Ta(4),Da=Ta(5),Fa=Ta(6),Ya=ya.range,Sa=Ma.range,Ha=ha.range,Wa=Ca.range,va=Ua.range,wa=Da.range,ka=Fa.range,za=aa((function(e){e.setDate(1),e.setHours(0,0,0,0)}),(function(e,t){e.setMonth(e.getMonth()+t)}),(function(e,t){return t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear())}),(function(e){return e.getMonth()})),Oa=za.range,pa=aa((function(e){e.setMonth(0,1),e.setHours(0,0,0,0)}),(function(e,t){e.setFullYear(e.getFullYear()+t)}),(function(e,t){return t.getFullYear()-e.getFullYear()}),(function(e){return e.getFullYear()}));pa.every=function(e){return isFinite(e=Math.floor(e))&&e>0?aa((function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n*e)})):null};var _a=pa.range,xa=aa((function(e){e.setUTCSeconds(0,0)}),(function(e,t){e.setTime(+e+6e4*t)}),(function(e,t){return(t-e)/6e4}),(function(e){return e.getUTCMinutes()})),Ia=xa.range,ba=aa((function(e){e.setUTCMinutes(0,0,0)}),(function(e,t){e.setTime(+e+36e5*t)}),(function(e,t){return(t-e)/36e5}),(function(e){return e.getUTCHours()})),ja=ba.range,tu=aa((function(e){e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCDate(e.getUTCDate()+t)}),(function(e,t){return(t-e)/864e5}),(function(e){return e.getUTCDate()-1})),qa=tu.range;function Aa(e){return aa((function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCDate(e.getUTCDate()+7*t)}),(function(e,t){return(t-e)/6048e5}))}var ou=Aa(0),nu=Aa(1),Ba=Aa(2),Ea=Aa(3),iu=Aa(4),Ga=Aa(5),Ja=Aa(6),Ka=ou.range,La=nu.range,Na=Ba.range,Pa=Ea.range,Qa=iu.range,Ra=Ga.range,Va=Ja.range,Xa=aa((function(e){e.setUTCDate(1),e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCMonth(e.getUTCMonth()+t)}),(function(e,t){return t.getUTCMonth()-e.getUTCMonth()+12*(t.getUTCFullYear()-e.getUTCFullYear())}),(function(e){return e.getUTCMonth()})),Za=Xa.range,uu=aa((function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)}),(function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()}),(function(e){return e.getUTCFullYear()}));uu.every=function(e){return isFinite(e=Math.floor(e))&&e>0?aa((function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n*e)})):null};var $a=uu.range,es=Object.freeze({__proto__:null,timeInterval:aa,timeMillisecond:sa,timeMilliseconds:ra,utcMillisecond:sa,utcMilliseconds:ra,timeSecond:ia,timeSeconds:oa,utcSecond:ia,utcSeconds:oa,timeMinute:ca,timeMinutes:fa,timeHour:la,timeHours:da,timeDay:ma,timeDays:ga,timeWeek:ya,timeWeeks:Ya,timeSunday:ya,timeSundays:Ya,timeMonday:Ma,timeMondays:Sa,timeTuesday:ha,timeTuesdays:Ha,timeWednesday:Ca,timeWednesdays:Wa,timeThursday:Ua,timeThursdays:va,timeFriday:Da,timeFridays:wa,timeSaturday:Fa,timeSaturdays:ka,timeMonth:za,timeMonths:Oa,timeYear:pa,timeYears:_a,utcMinute:xa,utcMinutes:Ia,utcHour:ba,utcHours:ja,utcDay:tu,utcDays:qa,utcWeek:ou,utcWeeks:Ka,utcSunday:ou,utcSundays:Ka,utcMonday:nu,utcMondays:La,utcTuesday:Ba,utcTuesdays:Na,utcWednesday:Ea,utcWednesdays:Pa,utcThursday:iu,utcThursdays:Qa,utcFriday:Ga,utcFridays:Ra,utcSaturday:Ja,utcSaturdays:Va,utcMonth:Xa,utcMonths:Za,utcYear:uu,utcYears:$a});export default es;export{es as d3Time,ma as timeDay,ga as timeDays,Da as timeFriday,wa as timeFridays,la as timeHour,da as timeHours,aa as timeInterval,sa as timeMillisecond,ra as timeMilliseconds,ca as timeMinute,fa as timeMinutes,Ma as timeMonday,Sa as timeMondays,za as timeMonth,Oa as timeMonths,Fa as timeSaturday,ka as timeSaturdays,ia as timeSecond,oa as timeSeconds,ya as timeSunday,Ya as timeSundays,Ua as timeThursday,va as timeThursdays,ha as timeTuesday,Ha as timeTuesdays,Ca as timeWednesday,Wa as timeWednesdays,ya as timeWeek,Ya as timeWeeks,pa as timeYear,_a as timeYears,tu as utcDay,qa as utcDays,Ga as utcFriday,Ra as utcFridays,ba as utcHour,ja as utcHours,sa as utcMillisecond,ra as utcMilliseconds,xa as utcMinute,Ia as utcMinutes,nu as utcMonday,La as utcMondays,Xa as utcMonth,Za as utcMonths,Ja as utcSaturday,Va as utcSaturdays,ia as utcSecond,oa as utcSeconds,ou as utcSunday,Ka as utcSundays,iu as utcThursday,Qa as utcThursdays,Ba as utcTuesday,Na as utcTuesdays,Ea as utcWednesday,Pa as utcWednesdays,ou as utcWeek,Ka as utcWeeks,uu as utcYear,$a as utcYears};