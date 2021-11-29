import{e as t,a as n}from"./p-2794293b.js";import{gL as a,gM as r,gl as o,gN as s,gO as e,gP as u,gQ as c,gR as h,gS as M,gT as i,gU as l,gV as f,gg as g,gW as p,gd as m,I as d,dr as q,gX as x,O as A}from"./p-5420851c.js";function j(t,n,a){a*=.5;const r=Math.sin(a);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(a),t}function _(t,n){const r=2*Math.acos(n[3]),o=Math.sin(r/2);return o>a?(t[0]=n[0]/o,t[1]=n[1]/o,t[2]=n[2]/o):(t[0]=1,t[1]=0,t[2]=0),r}function y(t,n,a){const r=n[0],o=n[1],s=n[2],e=n[3],u=a[0],c=a[1],h=a[2],M=a[3];return t[0]=r*M+e*u+o*h-s*c,t[1]=o*M+e*c+s*u-r*h,t[2]=s*M+e*h+r*c-o*u,t[3]=e*M-r*u-o*c-s*h,t}function L(t,n,r,o){const s=n[0],e=n[1],u=n[2],c=n[3];let h,M,i,l,f,g=r[0],p=r[1],m=r[2],d=r[3];return M=s*g+e*p+u*m+c*d,M<0&&(M=-M,g=-g,p=-p,m=-m,d=-d),1-M>a?(h=Math.acos(M),i=Math.sin(h),l=Math.sin((1-o)*h)/i,f=Math.sin(o*h)/i):(l=1-o,f=o),t[0]=l*s+f*g,t[1]=l*e+f*p,t[2]=l*u+f*m,t[3]=l*c+f*d,t}function O(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function b(t,n){const a=n[0]+n[4]+n[8];let r;if(a>0)r=Math.sqrt(a+1),t[3]=.5*r,r=.5/r,t[0]=(n[5]-n[7])*r,t[1]=(n[6]-n[2])*r,t[2]=(n[1]-n[3])*r;else{let a=0;n[4]>n[0]&&(a=1),n[8]>n[3*a+a]&&(a=2);const o=(a+1)%3,s=(a+2)%3;r=Math.sqrt(n[3*a+a]-n[3*o+o]-n[3*s+s]+1),t[a]=.5*r,r=.5/r,t[3]=(n[3*o+s]-n[3*s+o])*r,t[o]=(n[3*o+a]+n[3*a+o])*r,t[s]=(n[3*s+a]+n[3*a+s])*r}return t}function E(t,n,a,r){const o=.5*Math.PI/180;n*=o,a*=o,r*=o;const s=Math.sin(n),e=Math.cos(n),u=Math.sin(a),c=Math.cos(a),h=Math.sin(r),M=Math.cos(r);return t[0]=s*c*M-e*u*h,t[1]=e*u*M+s*c*h,t[2]=e*c*h-s*u*M,t[3]=e*c*M+s*u*h,t}const T=r,W=o,X=s,v=y,z=e,I=u,N=c,P=h,Q=P,R=M,S=R,U=i,V=l,Y=f,Z=d(),k=q(1,0,0),w=q(0,1,0),B=t(),C=t(),D=n();Object.freeze({__proto__:null,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:j,getAxisAngle:_,multiply:y,rotateX:function(t,n,a){a*=.5;const r=n[0],o=n[1],s=n[2],e=n[3],u=Math.sin(a),c=Math.cos(a);return t[0]=r*c+e*u,t[1]=o*c+s*u,t[2]=s*c-o*u,t[3]=e*c-r*u,t},rotateY:function(t,n,a){a*=.5;const r=n[0],o=n[1],s=n[2],e=n[3],u=Math.sin(a),c=Math.cos(a);return t[0]=r*c-s*u,t[1]=o*c+e*u,t[2]=s*c+r*u,t[3]=e*c-o*u,t},rotateZ:function(t,n,a){a*=.5;const r=n[0],o=n[1],s=n[2],e=n[3],u=Math.sin(a),c=Math.cos(a);return t[0]=r*c+o*u,t[1]=o*c-r*u,t[2]=s*c+e*u,t[3]=e*c-s*u,t},calculateW:function(t,n){const a=n[0],r=n[1],o=n[2];return t[0]=a,t[1]=r,t[2]=o,t[3]=Math.sqrt(Math.abs(1-a*a-r*r-o*o)),t},slerp:L,random:function(t){const n=x(),a=x(),r=x(),o=Math.sqrt(1-n),s=Math.sqrt(n);return t[0]=o*Math.sin(2*Math.PI*a),t[1]=o*Math.cos(2*Math.PI*a),t[2]=s*Math.sin(2*Math.PI*r),t[3]=s*Math.cos(2*Math.PI*r),t},invert:function(t,n){const a=n[0],r=n[1],o=n[2],s=n[3],e=a*a+r*r+o*o+s*s,u=e?1/e:0;return t[0]=-a*u,t[1]=-r*u,t[2]=-o*u,t[3]=s*u,t},conjugate:O,fromMat3:b,fromEuler:E,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:T,set:W,add:X,mul:v,scale:z,dot:I,lerp:N,length:P,len:Q,squaredLength:R,sqrLen:S,normalize:U,exactEquals:V,equals:Y,rotationTo:function(t,n,a){const r=A(n,a);return r<-.999999?(g(Z,k,n),p(Z)<1e-6&&g(Z,w,n),m(Z,Z),j(t,Z,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(g(Z,n,a),t[0]=Z[0],t[1]=Z[1],t[2]=Z[2],t[3]=1+r,U(t,t))},sqlerp:function(t,n,a,r,o,s){return L(B,n,o,s),L(C,a,r,s),L(t,B,C,2*s*(1-s)),t},setAxes:function(t,n,a,r){const o=D;return o[0]=a[0],o[3]=a[1],o[6]=a[2],o[1]=r[0],o[4]=r[1],o[7]=r[2],o[2]=-n[0],o[5]=-n[1],o[8]=-n[2],U(t,b(t,o))}});export{E as C,j as I,V as N,_ as P,y as v,O as w}