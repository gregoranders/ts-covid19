import{path as _i}from"d3-path";function Ht(t){return function(){return t}}var sh=Math.abs,oh=Math.atan2,hh=Math.cos,Yt=Math.max,Zt=Math.min,_h=Math.sin,Wf=Math.sqrt,ti=Math.PI,lh=ti/2,ii=2*ti;function ch(t){return t>1?0:t<-1?ti:Math.acos(t)}function fh(t){return t>=1?lh:t<=-1?-lh:Math.asin(t)}function yh(t){return t.innerRadius}function xh(t){return t.outerRadius}function ph(t){return t.startAngle}function vh(t){return t.endAngle}function dh(t){return t&&t.padAngle}function Th(t,n,i,e,s,o,h,r){var a=i-t,_=e-n,l=h-s,c=r-o,u=c*a-l*_;if(!(u*u<1e-12))return[t+(u=(l*(n-o)-c*(t-s))/u)*a,n+u*_]}function gh(t,n,i,e,s,o,h){var r=t-i,a=n-e,_=(h?o:-o)/Wf(r*r+a*a),l=_*a,c=-_*r,u=t+l,f=n+c,y=i+l,x=e+c,p=(u+y)/2,v=(f+x)/2,d=y-u,T=x-f,g=d*d+T*T,b=s-o,m=u*x-y*f,k=(T<0?-1:1)*Wf(Yt(0,b*b*g-m*m)),w=(m*T-d*k)/g,N=(-m*d-T*k)/g,S=(m*T+d*k)/g,M=(-m*d+T*k)/g,E=w-p,A=N-v,C=S-p,O=M-v;return E*E+A*A>C*C+O*O&&(w=S,N=M),{cx:w,cy:N,x01:-l,y01:-c,x11:w*(s/b-1),y11:N*(s/b-1)}}function bh(){var t=yh,n=xh,i=Ht(0),e=null,s=ph,o=vh,h=dh,r=null;function a(){var a,_,l=+t.apply(this,arguments),c=+n.apply(this,arguments),u=s.apply(this,arguments)-lh,f=o.apply(this,arguments)-lh,y=sh(f-u),x=f>u;if(r||(r=a=_i()),c<l&&(_=c,c=l,l=_),c>1e-12)if(y>ii-1e-12)r.moveTo(c*hh(u),c*_h(u)),r.arc(0,0,c,u,f,!x),l>1e-12&&(r.moveTo(l*hh(f),l*_h(f)),r.arc(0,0,l,f,u,x));else{var p,v,d=u,T=f,g=u,b=f,m=y,k=y,w=h.apply(this,arguments)/2,N=w>1e-12&&(e?+e.apply(this,arguments):Wf(l*l+c*c)),S=Zt(sh(c-l)/2,+i.apply(this,arguments)),M=S,E=S;if(N>1e-12){var A=fh(N/l*_h(w)),C=fh(N/c*_h(w));(m-=2*A)>1e-12?(g+=A*=x?1:-1,b-=A):(m=0,g=b=(u+f)/2),(k-=2*C)>1e-12?(d+=C*=x?1:-1,T-=C):(k=0,d=T=(u+f)/2)}var O=c*hh(d),P=c*_h(d),R=l*hh(b),q=l*_h(b);if(S>1e-12){var z,B=c*hh(T),X=c*_h(T),Y=l*hh(g),D=l*_h(g);if(y<ti&&(z=Th(O,P,Y,D,B,X,R,q))){var L=O-z[0],I=P-z[1],W=B-z[0],V=X-z[1],j=1/_h(ch((L*W+I*V)/(Wf(L*L+I*I)*Wf(W*W+V*V)))/2),H=Wf(z[0]*z[0]+z[1]*z[1]);M=Zt(S,(l-H)/(j-1)),E=Zt(S,(c-H)/(j+1))}}k>1e-12?E>1e-12?(p=gh(Y,D,O,P,c,E,x),v=gh(B,X,R,q,c,E,x),r.moveTo(p.cx+p.x01,p.cy+p.y01),E<S?r.arc(p.cx,p.cy,E,oh(p.y01,p.x01),oh(v.y01,v.x01),!x):(r.arc(p.cx,p.cy,E,oh(p.y01,p.x01),oh(p.y11,p.x11),!x),r.arc(0,0,c,oh(p.cy+p.y11,p.cx+p.x11),oh(v.cy+v.y11,v.cx+v.x11),!x),r.arc(v.cx,v.cy,E,oh(v.y11,v.x11),oh(v.y01,v.x01),!x))):(r.moveTo(O,P),r.arc(0,0,c,d,T,!x)):r.moveTo(O,P),l>1e-12&&m>1e-12?M>1e-12?(p=gh(R,q,B,X,l,-M,x),v=gh(O,P,Y,D,l,-M,x),r.lineTo(p.cx+p.x01,p.cy+p.y01),M<S?r.arc(p.cx,p.cy,M,oh(p.y01,p.x01),oh(v.y01,v.x01),!x):(r.arc(p.cx,p.cy,M,oh(p.y01,p.x01),oh(p.y11,p.x11),!x),r.arc(0,0,l,oh(p.cy+p.y11,p.cx+p.x11),oh(v.cy+v.y11,v.cx+v.x11),x),r.arc(v.cx,v.cy,M,oh(v.y11,v.x11),oh(v.y01,v.x01),!x))):r.arc(0,0,l,b,g,x):r.lineTo(R,q)}else r.moveTo(0,0);if(r.closePath(),a)return r=null,a+""||null}return a.centroid=function(){var i=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,e=(+s.apply(this,arguments)+ +o.apply(this,arguments))/2-ti/2;return[hh(e)*i,_h(e)*i]},a.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:Ht(+n),a):t},a.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:Ht(+t),a):n},a.cornerRadius=function(t){return arguments.length?(i="function"==typeof t?t:Ht(+t),a):i},a.padRadius=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:Ht(+t),a):e},a.startAngle=function(t){return arguments.length?(s="function"==typeof t?t:Ht(+t),a):s},a.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:Ht(+t),a):o},a.padAngle=function(t){return arguments.length?(h="function"==typeof t?t:Ht(+t),a):h},a.context=function(t){return arguments.length?(r=null==t?null:t,a):r},a}function mh(t){this._context=t}function kh(t){return new mh(t)}function Bs(t){return t[0]}function Gs(t){return t[1]}function wh(){var t=Bs,n=Gs,i=Ht(!0),e=null,s=kh,o=null;function h(h){var r,a,_,l=h.length,c=!1;for(null==e&&(o=s(_=_i())),r=0;r<=l;++r)!(r<l&&i(a=h[r],r,h))===c&&((c=!c)?o.lineStart():o.lineEnd()),c&&o.point(+t(a,r,h),+n(a,r,h));if(_)return o=null,_+""||null}return h.x=function(n){return arguments.length?(t="function"==typeof n?n:Ht(+n),h):t},h.y=function(t){return arguments.length?(n="function"==typeof t?t:Ht(+t),h):n},h.defined=function(t){return arguments.length?(i="function"==typeof t?t:Ht(!!t),h):i},h.curve=function(t){return arguments.length?(s=t,null!=e&&(o=s(e)),h):s},h.context=function(t){return arguments.length?(null==t?e=o=null:o=s(e=t),h):e},h}function Nh(){var t=Bs,n=null,i=Ht(0),e=Gs,s=Ht(!0),o=null,h=kh,r=null;function a(a){var _,l,c,u,f,y=a.length,x=!1,p=new Array(y),v=new Array(y);for(null==o&&(r=h(f=_i())),_=0;_<=y;++_){if(!(_<y&&s(u=a[_],_,a))===x)if(x=!x)l=_,r.areaStart(),r.lineStart();else{for(r.lineEnd(),r.lineStart(),c=_-1;c>=l;--c)r.point(p[c],v[c]);r.lineEnd(),r.areaEnd()}x&&(p[_]=+t(u,_,a),v[_]=+i(u,_,a),r.point(n?+n(u,_,a):p[_],e?+e(u,_,a):v[_]))}if(f)return r=null,f+""||null}function _(){return wh().defined(s).curve(h).context(o)}return a.x=function(i){return arguments.length?(t="function"==typeof i?i:Ht(+i),n=null,a):t},a.x0=function(n){return arguments.length?(t="function"==typeof n?n:Ht(+n),a):t},a.x1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:Ht(+t),a):n},a.y=function(t){return arguments.length?(i="function"==typeof t?t:Ht(+t),e=null,a):i},a.y0=function(t){return arguments.length?(i="function"==typeof t?t:Ht(+t),a):i},a.y1=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:Ht(+t),a):e},a.lineX0=a.lineY0=function(){return _().x(t).y(i)},a.lineY1=function(){return _().x(t).y(e)},a.lineX1=function(){return _().x(n).y(i)},a.defined=function(t){return arguments.length?(s="function"==typeof t?t:Ht(!!t),a):s},a.curve=function(t){return arguments.length?(h=t,null!=o&&(r=h(o)),a):h},a.context=function(t){return arguments.length?(null==t?o=r=null:r=h(o=t),a):o},a}function Ft(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function jt(t){return t}function Sh(){var t=jt,n=Ft,i=null,e=Ht(0),s=Ht(ii),o=Ht(0);function h(h){var r,a,_,l,c,u=h.length,f=0,y=new Array(u),x=new Array(u),p=+e.apply(this,arguments),v=Math.min(ii,Math.max(-ii,s.apply(this,arguments)-p)),d=Math.min(Math.abs(v)/u,o.apply(this,arguments)),T=d*(v<0?-1:1);for(r=0;r<u;++r)(c=x[y[r]=r]=+t(h[r],r,h))>0&&(f+=c);for(null!=n?y.sort((function(t,i){return n(x[t],x[i])})):null!=i&&y.sort((function(t,n){return i(h[t],h[n])})),r=0,_=f?(v-u*T)/f:0;r<u;++r,p=l)a=y[r],l=p+((c=x[a])>0?c*_:0)+T,x[a]={data:h[a],index:r,value:c,startAngle:p,endAngle:l,padAngle:d};return x}return h.value=function(n){return arguments.length?(t="function"==typeof n?n:Ht(+n),h):t},h.sortValues=function(t){return arguments.length?(n=t,i=null,h):n},h.sort=function(t){return arguments.length?(i=t,n=null,h):i},h.startAngle=function(t){return arguments.length?(e="function"==typeof t?t:Ht(+t),h):e},h.endAngle=function(t){return arguments.length?(s="function"==typeof t?t:Ht(+t),h):s},h.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:Ht(+t),h):o},h}mh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var Mh=Ah(kh);function Eh(t){this._curve=t}function Ah(t){function n(n){return new Eh(t(n))}return n._curve=t,n}function Ch(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Ah(t)):n()._curve},t}function Oh(){return Ch(wh().curve(Mh))}function Ph(){var t=Nh().curve(Mh),n=t.curve,i=t.lineX0,e=t.lineX1,s=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return Ch(i())},delete t.lineX0,t.lineEndAngle=function(){return Ch(e())},delete t.lineX1,t.lineInnerRadius=function(){return Ch(s())},delete t.lineY0,t.lineOuterRadius=function(){return Ch(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(Ah(t)):n()._curve},t}function Rh(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}Eh.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var Gt=Array.prototype.slice;function qh(t){return t.source}function zh(t){return t.target}function Bh(t){var n=qh,i=zh,e=Bs,s=Gs,o=null;function h(){var h,r=Gt.call(arguments),a=n.apply(this,r),_=i.apply(this,r);if(o||(o=h=_i()),t(o,+e.apply(this,(r[0]=a,r)),+s.apply(this,r),+e.apply(this,(r[0]=_,r)),+s.apply(this,r)),h)return o=null,h+""||null}return h.source=function(t){return arguments.length?(n=t,h):n},h.target=function(t){return arguments.length?(i=t,h):i},h.x=function(t){return arguments.length?(e="function"==typeof t?t:Ht(+t),h):e},h.y=function(t){return arguments.length?(s="function"==typeof t?t:Ht(+t),h):s},h.context=function(t){return arguments.length?(o=null==t?null:t,h):o},h}function Xh(t,n,i,e,s){t.moveTo(n,i),t.bezierCurveTo(n=(n+e)/2,i,n,s,e,s)}function Yh(t,n,i,e,s){t.moveTo(n,i),t.bezierCurveTo(n,i=(i+s)/2,e,i,e,s)}function Dh(t,n,i,e,s){var o=Rh(n,i),h=Rh(n,i=(i+s)/2),r=Rh(e,i),a=Rh(e,s);t.moveTo(o[0],o[1]),t.bezierCurveTo(h[0],h[1],r[0],r[1],a[0],a[1])}function Lh(){return Bh(Xh)}function Ih(){return Bh(Yh)}function Wh(){var t=Bh(Dh);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}var Vh={draw:function(t,n){var i=Math.sqrt(n/ti);t.moveTo(i,0),t.arc(0,0,i,0,ii)}},kt={draw:function(t,n){var i=Math.sqrt(n/5)/2;t.moveTo(-3*i,-i),t.lineTo(-i,-i),t.lineTo(-i,-3*i),t.lineTo(i,-3*i),t.lineTo(i,-i),t.lineTo(3*i,-i),t.lineTo(3*i,i),t.lineTo(i,i),t.lineTo(i,3*i),t.lineTo(-i,3*i),t.lineTo(-i,i),t.lineTo(-3*i,i),t.closePath()}},jh=Math.sqrt(1/3),Hh=2*jh,Fh={draw:function(t,n){var i=Math.sqrt(n/Hh),e=i*jh;t.moveTo(0,-i),t.lineTo(e,0),t.lineTo(0,i),t.lineTo(-e,0),t.closePath()}},Gh=Math.sin(ti/10)/Math.sin(7*ti/10),Jh=Math.sin(ii/10)*Gh,Kh=-Math.cos(ii/10)*Gh,Qh={draw:function(t,n){var i=Math.sqrt(.8908130915292852*n),e=Jh*i,s=Kh*i;t.moveTo(0,-i),t.lineTo(e,s);for(var o=1;o<5;++o){var h=ii*o/5,r=Math.cos(h),a=Math.sin(h);t.lineTo(a*i,-r*i),t.lineTo(r*e-a*s,a*e+r*s)}t.closePath()}},jf={draw:function(t,n){var i=Math.sqrt(n),e=-i/2;t.rect(e,e,i,i)}},Uh=Math.sqrt(3),Zh={draw:function(t,n){var i=-Math.sqrt(n/(3*Uh));t.moveTo(0,2*i),t.lineTo(-Uh*i,-i),t.lineTo(Uh*i,-i),t.closePath()}},Cs=-.5,$h=Math.sqrt(3)/2,zs=1/Math.sqrt(12),Gc=3*(zs/2+1),t_={draw:function(t,n){var i=Math.sqrt(n/Gc),e=i/2,s=i*zs,o=e,h=i*zs+i,r=-o,a=h;t.moveTo(e,s),t.lineTo(o,h),t.lineTo(r,a),t.lineTo(Cs*e-$h*s,$h*e+Cs*s),t.lineTo(Cs*o-$h*h,$h*o+Cs*h),t.lineTo(Cs*r-$h*a,$h*r+Cs*a),t.lineTo(Cs*e+$h*s,Cs*s-$h*e),t.lineTo(Cs*o+$h*h,Cs*h-$h*o),t.lineTo(Cs*r+$h*a,Cs*a-$h*r),t.closePath()}},n_=[Vh,kt,Fh,jf,Qh,Zh,t_];function _s(){var t=Ht(Vh),n=Ht(64),i=null;function e(){var e;if(i||(i=e=_i()),t.apply(this,arguments).draw(i,+n.apply(this,arguments)),e)return i=null,e+""||null}return e.type=function(n){return arguments.length?(t="function"==typeof n?n:Ht(n),e):t},e.size=function(t){return arguments.length?(n="function"==typeof t?t:Ht(+t),e):n},e.context=function(t){return arguments.length?(i=null==t?null:t,e):i},e}function ul(){}function df(t,n,i){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+i)/6)}function i_(t){this._context=t}function Qn(t){return new i_(t)}function e_(t){this._context=t}function Jn(t){return new e_(t)}function s_(t){this._context=t}function o_(t){return new s_(t)}function h_(t,n){this._basis=new i_(t),this._beta=n}i_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:df(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:df(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},e_.prototype={areaStart:ul,areaEnd:ul,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:df(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},s_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var i=(this._x0+4*this._x1+t)/6,e=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(i,e):this._context.moveTo(i,e);break;case 3:this._point=4;default:df(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},h_.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,i=t.length-1;if(i>0)for(var e,s=t[0],o=n[0],h=t[i]-s,r=n[i]-o,a=-1;++a<=i;)e=a/i,this._basis.point(this._beta*t[a]+(1-this._beta)*(s+e*h),this._beta*n[a]+(1-this._beta)*(o+e*r));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var r_=function t(n){function i(t){return 1===n?new i_(t):new h_(t,n)}return i.beta=function(n){return t(+n)},i}(.85);function a_(t,n,i){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-i),t._x2,t._y2)}function __(t,n){this._context=t,this._k=(1-n)/6}__.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:a_(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:a_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var l_=function t(n){function i(t){return new __(t,n)}return i.tension=function(n){return t(+n)},i}(0);function c_(t,n){this._context=t,this._k=(1-n)/6}c_.prototype={areaStart:ul,areaEnd:ul,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:a_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var u_=function t(n){function i(t){return new c_(t,n)}return i.tension=function(n){return t(+n)},i}(0);function f_(t,n){this._context=t,this._k=(1-n)/6}f_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:a_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var y_=function t(n){function i(t){return new f_(t,n)}return i.tension=function(n){return t(+n)},i}(0);function x_(t,n,i){var e=t._x1,s=t._y1,o=t._x2,h=t._y2;if(t._l01_a>1e-12){var r=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,a=3*t._l01_a*(t._l01_a+t._l12_a);e=(e*r-t._x0*t._l12_2a+t._x2*t._l01_2a)/a,s=(s*r-t._y0*t._l12_2a+t._y2*t._l01_2a)/a}if(t._l23_a>1e-12){var _=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,l=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*_+t._x1*t._l23_2a-n*t._l12_2a)/l,h=(h*_+t._y1*t._l23_2a-i*t._l12_2a)/l}t._context.bezierCurveTo(e,s,o,h,t._x2,t._y2)}function p_(t,n){this._context=t,this._alpha=n}p_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:x_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var v_=function t(n){function i(t){return n?new p_(t,n):new __(t,0)}return i.alpha=function(n){return t(+n)},i}(.5);function d_(t,n){this._context=t,this._alpha=n}d_.prototype={areaStart:ul,areaEnd:ul,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:x_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var T_=function t(n){function i(t){return n?new d_(t,n):new c_(t,0)}return i.alpha=function(n){return t(+n)},i}(.5);function g_(t,n){this._context=t,this._alpha=n}g_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:x_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var b_=function t(n){function i(t){return n?new g_(t,n):new f_(t,0)}return i.alpha=function(n){return t(+n)},i}(.5);function m_(t){this._context=t}function k_(t){return new m_(t)}function w_(t){return t<0?-1:1}function N_(t,n,i){var e=t._x1-t._x0,s=n-t._x1,o=(t._y1-t._y0)/(e||s<0&&-0),h=(i-t._y1)/(s||e<0&&-0),r=(o*s+h*e)/(e+s);return(w_(o)+w_(h))*Math.min(Math.abs(o),Math.abs(h),.5*Math.abs(r))||0}function S_(t,n){var i=t._x1-t._x0;return i?(3*(t._y1-t._y0)/i-n)/2:n}function M_(t,n,i){var e=t._x0,s=t._y0,o=t._x1,h=t._y1,r=(o-e)/3;t._context.bezierCurveTo(e+r,s+r*n,o-r,h-r*i,o,h)}function E_(t){this._context=t}function A_(t){this._context=new C_(t)}function C_(t){this._context=t}function O_(t){return new E_(t)}function P_(t){return new A_(t)}function R_(t){this._context=t}function q_(t){var n,i,e=t.length-1,s=new Array(e),o=new Array(e),h=new Array(e);for(s[0]=0,o[0]=2,h[0]=t[0]+2*t[1],n=1;n<e-1;++n)s[n]=1,o[n]=4,h[n]=4*t[n]+2*t[n+1];for(s[e-1]=2,o[e-1]=7,h[e-1]=8*t[e-1]+t[e],n=1;n<e;++n)i=s[n]/o[n-1],o[n]-=i,h[n]-=i*h[n-1];for(s[e-1]=h[e-1]/o[e-1],n=e-2;n>=0;--n)s[n]=(h[n]-s[n+1])/o[n];for(o[e-1]=(t[e]+s[e-1])/2,n=0;n<e-1;++n)o[n]=2*t[n+1]-s[n+1];return[s,o]}function z_(t){return new R_(t)}function B_(t,n){this._context=t,this._t=n}function X_(t){return new B_(t,.5)}function Y_(t){return new B_(t,0)}function D_(t){return new B_(t,1)}function L_(t,n){if((s=t.length)>1)for(var i,e,s,o=1,h=t[n[0]],r=h.length;o<s;++o)for(e=h,h=t[n[o]],i=0;i<r;++i)h[i][1]+=h[i][0]=isNaN(e[i][1])?e[i][0]:e[i][1]}function I_(t){for(var n=t.length,i=new Array(n);--n>=0;)i[n]=n;return i}function W_(t,n){return t[n]}function V_(){var t=Ht([]),n=I_,i=L_,e=W_;function s(s){var o,h,r=t.apply(this,arguments),a=s.length,_=r.length,l=new Array(_);for(o=0;o<_;++o){for(var c,u=r[o],f=l[o]=new Array(a),y=0;y<a;++y)f[y]=c=[0,+e(s[y],u,y,s)],c.data=s[y];f.key=u}for(o=0,h=n(l);o<_;++o)l[h[o]].index=o;return i(l,h),l}return s.keys=function(n){return arguments.length?(t="function"==typeof n?n:Ht(Gt.call(n)),s):t},s.value=function(t){return arguments.length?(e="function"==typeof t?t:Ht(+t),s):e},s.order=function(t){return arguments.length?(n=null==t?I_:"function"==typeof t?t:Ht(Gt.call(t)),s):n},s.offset=function(t){return arguments.length?(i=null==t?L_:t,s):i},s}function j_(t,n){if((e=t.length)>0){for(var i,e,s,o=0,h=t[0].length;o<h;++o){for(s=i=0;i<e;++i)s+=t[i][o][1]||0;if(s)for(i=0;i<e;++i)t[i][o][1]/=s}L_(t,n)}}function ah(t,n){if((r=t.length)>0)for(var i,e,s,o,h,r,a=0,_=t[n[0]].length;a<_;++a)for(o=h=0,i=0;i<r;++i)(s=(e=t[n[i]][a])[1]-e[0])>0?(e[0]=o,e[1]=o+=s):s<0?(e[1]=h,e[0]=h+=s):(e[0]=0,e[1]=s)}function H_(t,n){if((i=t.length)>0){for(var i,e=0,s=t[n[0]],o=s.length;e<o;++e){for(var h=0,r=0;h<i;++h)r+=t[h][e][1]||0;s[e][1]+=s[e][0]=-r/2}L_(t,n)}}function F_(t,n){if((s=t.length)>0&&(e=(i=t[n[0]]).length)>0){for(var i,e,s,o=0,h=1;h<e;++h){for(var r=0,a=0,_=0;r<s;++r){for(var l=t[n[r]],c=l[h][1]||0,u=(c-(l[h-1][1]||0))/2,f=0;f<r;++f){var y=t[n[f]];u+=(y[h][1]||0)-(y[h-1][1]||0)}a+=c,_+=u*c}i[h-1][1]+=i[h-1][0]=o,a&&(o-=_/a)}i[h-1][1]+=i[h-1][0]=o,L_(t,n)}}function G_(t){var n=t.map(J_);return I_(t).sort((function(t,i){return n[t]-n[i]}))}function J_(t){for(var n,i=-1,e=0,s=t.length,o=-1/0;++i<s;)(n=+t[i][1])>o&&(o=n,e=i);return e}function ht(t){var n=t.map(xn);return I_(t).sort((function(t,i){return n[t]-n[i]}))}function xn(t){for(var n,i=0,e=-1,s=t.length;++e<s;)(n=+t[e][1])&&(i+=n);return i}function K_(t){return ht(t).reverse()}function Q_(t){var n,i,e=t.length,s=t.map(xn),o=G_(t),h=0,r=0,a=[],_=[];for(n=0;n<e;++n)i=o[n],h<r?(h+=s[i],a.push(i)):(r+=s[i],_.push(i));return _.reverse().concat(a)}function U_(t){return I_(t).reverse()}m_.prototype={areaStart:ul,areaEnd:ul,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},E_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:M_(this,this._t0,S_(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var i=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,M_(this,S_(this,i=N_(this,t,n)),i);break;default:M_(this,this._t0,i=N_(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=i}}},(A_.prototype=Object.create(E_.prototype)).point=function(t,n){E_.prototype.point.call(this,n,t)},C_.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,i,e,s,o){this._context.bezierCurveTo(n,t,e,i,o,s)}},R_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,i=t.length;if(i)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===i)this._context.lineTo(t[1],n[1]);else for(var e=q_(t),s=q_(n),o=0,h=1;h<i;++o,++h)this._context.bezierCurveTo(e[0][o],s[0][o],e[1][o],s[1][o],t[h],n[h]);(this._line||0!==this._line&&1===i)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},B_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var i=this._x*(1-this._t)+t*this._t;this._context.lineTo(i,this._y),this._context.lineTo(i,n)}}this._x=t,this._y=n}};var Z_=Object.freeze({__proto__:null,arc:bh,area:Nh,line:wh,pie:Sh,areaRadial:Ph,radialArea:Ph,lineRadial:Oh,radialLine:Oh,pointRadial:Rh,linkHorizontal:Lh,linkVertical:Ih,linkRadial:Wh,symbol:_s,symbols:n_,symbolCircle:Vh,symbolCross:kt,symbolDiamond:Fh,symbolSquare:jf,symbolStar:Qh,symbolTriangle:Zh,symbolWye:t_,curveBasisClosed:Jn,curveBasisOpen:o_,curveBasis:Qn,curveBundle:r_,curveCardinalClosed:u_,curveCardinalOpen:y_,curveCardinal:l_,curveCatmullRomClosed:T_,curveCatmullRomOpen:b_,curveCatmullRom:v_,curveLinearClosed:k_,curveLinear:kh,curveMonotoneX:O_,curveMonotoneY:P_,curveNatural:z_,curveStep:X_,curveStepAfter:D_,curveStepBefore:Y_,stack:V_,stackOffsetExpand:j_,stackOffsetDiverging:ah,stackOffsetNone:L_,stackOffsetSilhouette:H_,stackOffsetWiggle:F_,stackOrderAppearance:G_,stackOrderAscending:ht,stackOrderDescending:K_,stackOrderInsideOut:Q_,stackOrderNone:I_,stackOrderReverse:U_});export default Z_;export{bh as arc,Nh as area,Ph as areaRadial,Qn as curveBasis,Jn as curveBasisClosed,o_ as curveBasisOpen,r_ as curveBundle,l_ as curveCardinal,u_ as curveCardinalClosed,y_ as curveCardinalOpen,v_ as curveCatmullRom,T_ as curveCatmullRomClosed,b_ as curveCatmullRomOpen,kh as curveLinear,k_ as curveLinearClosed,O_ as curveMonotoneX,P_ as curveMonotoneY,z_ as curveNatural,X_ as curveStep,D_ as curveStepAfter,Y_ as curveStepBefore,Z_ as d3Shape,wh as line,Oh as lineRadial,Lh as linkHorizontal,Wh as linkRadial,Ih as linkVertical,Sh as pie,Rh as pointRadial,Ph as radialArea,Oh as radialLine,V_ as stack,ah as stackOffsetDiverging,j_ as stackOffsetExpand,L_ as stackOffsetNone,H_ as stackOffsetSilhouette,F_ as stackOffsetWiggle,G_ as stackOrderAppearance,ht as stackOrderAscending,K_ as stackOrderDescending,Q_ as stackOrderInsideOut,I_ as stackOrderNone,U_ as stackOrderReverse,_s as symbol,Vh as symbolCircle,kt as symbolCross,Fh as symbolDiamond,jf as symbolSquare,Qh as symbolStar,Zh as symbolTriangle,t_ as symbolWye,n_ as symbols};