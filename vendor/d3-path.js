var ii=Math.PI,hi=2*ii,si=hi-1e-6;function _i(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function ni(){return new _i}_i.prototype=ni.prototype={constructor:_i,moveTo:function(t,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,i){this._+="L"+(this._x1=+t)+","+(this._y1=+i)},quadraticCurveTo:function(t,i,h,s){this._+="Q"+ +t+","+ +i+","+(this._x1=+h)+","+(this._y1=+s)},bezierCurveTo:function(t,i,h,s,_,n){this._+="C"+ +t+","+ +i+","+ +h+","+ +s+","+(this._x1=+_)+","+(this._y1=+n)},arcTo:function(t,i,h,s,_){t=+t,i=+i,h=+h,s=+s,_=+_;var n=this._x1,a=this._y1,e=h-t,r=s-i,o=n-t,u=a-i,x=o*o+u*u;if(_<0)throw new Error("negative radius: "+_);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=i);else if(x>1e-6)if(Math.abs(u*e-r*o)>1e-6&&_){var c=h-n,y=s-a,f=e*e+r*r,M=c*c+y*y,l=Math.sqrt(f),v=Math.sqrt(x),p=_*Math.tan((ii-Math.acos((f+x-M)/(2*l*v)))/2),b=p/v,d=p/l;Math.abs(b-1)>1e-6&&(this._+="L"+(t+b*o)+","+(i+b*u)),this._+="A"+_+","+_+",0,0,"+ +(u*c>o*y)+","+(this._x1=t+d*e)+","+(this._y1=i+d*r)}else this._+="L"+(this._x1=t)+","+(this._y1=i)},arc:function(t,i,h,s,_,n){t=+t,i=+i,n=!!n;var a=(h=+h)*Math.cos(s),e=h*Math.sin(s),r=t+a,o=i+e,u=1^n,x=n?s-_:_-s;if(h<0)throw new Error("negative radius: "+h);null===this._x1?this._+="M"+r+","+o:(Math.abs(this._x1-r)>1e-6||Math.abs(this._y1-o)>1e-6)&&(this._+="L"+r+","+o),h&&(x<0&&(x=x%hi+hi),x>si?this._+="A"+h+","+h+",0,1,"+u+","+(t-a)+","+(i-e)+"A"+h+","+h+",0,1,"+u+","+(this._x1=r)+","+(this._y1=o):x>1e-6&&(this._+="A"+h+","+h+",0,"+ +(x>=ii)+","+u+","+(this._x1=t+h*Math.cos(_))+","+(this._y1=i+h*Math.sin(_))))},rect:function(t,i,h,s){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)+"h"+ +h+"v"+ +s+"h"+-h+"Z"},toString:function(){return this._}};var ai=Object.freeze({__proto__:null,path:ni});export default ai;export{ai as d3Path,ni as path};