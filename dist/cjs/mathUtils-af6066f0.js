'use strict';

const common = require('./common-41a349f2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s$2(t){const n=t[0],a=t[1],s=t[2];return Math.sqrt(n*n+a*a+s*s)}function r$1(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function o$2(t,n,a,s){return t[0]=n,t[1]=a,t[2]=s,t}function u$2(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t}function c$2(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function e$2(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function i$1(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function h$1(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function M$2(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function f$2(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t}function l$2(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t}function m$2(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function d$1(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t}function b$2(t,n,a,s){return t[0]=n[0]+a[0]*s,t[1]=n[1]+a[1]*s,t[2]=n[2]+a[2]*s,t}function q$1(t,n){const a=n[0]-t[0],s=n[1]-t[1],r=n[2]-t[2];return Math.sqrt(a*a+s*s+r*r)}function x$2(t,n){const a=n[0]-t[0],s=n[1]-t[1],r=n[2]-t[2];return a*a+s*s+r*r}function p$2(t){const n=t[0],a=t[1],s=t[2];return n*n+a*a+s*s}function v$1(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function g$2(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function j$2(t,n){const a=n[0],s=n[1],r=n[2];let o=a*a+s*s+r*r;return o>0&&(o=1/Math.sqrt(o),t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o),t}function z$1(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function _$1(t,n,a){const s=n[0],r=n[1],o=n[2],u=a[0],c=a[1],e=a[2];return t[0]=r*e-o*c,t[1]=o*u-s*e,t[2]=s*c-r*u,t}function y$1(t,n,a,s){const r=n[0],o=n[1],u=n[2];return t[0]=r+s*(a[0]-r),t[1]=o+s*(a[1]-o),t[2]=u+s*(a[2]-u),t}function A$1(t,n,a,s,r,o){const u=o*o,c=u*(2*o-3)+1,e=u*(o-2)+o,i=u*(o-1),h=u*(3-2*o);return t[0]=n[0]*c+a[0]*e+s[0]*i+r[0]*h,t[1]=n[1]*c+a[1]*e+s[1]*i+r[1]*h,t[2]=n[2]*c+a[2]*e+s[2]*i+r[2]*h,t}function D$1(t,n,a,s,r,o){const u=1-o,c=u*u,e=o*o,i=c*u,h=3*o*c,M=3*e*u,f=e*o;return t[0]=n[0]*i+a[0]*h+s[0]*M+r[0]*f,t[1]=n[1]*i+a[1]*h+s[1]*M+r[1]*f,t[2]=n[2]*i+a[2]*h+s[2]*M+r[2]*f,t}function E$1(t,n){n=n||1;const s=2*common.t()*Math.PI,r=2*common.t()-1,o=Math.sqrt(1-r*r)*n;return t[0]=Math.cos(s)*o,t[1]=Math.sin(s)*o,t[2]=r*n,t}function I$2(t,n,a){const s=n[0],r=n[1],o=n[2];return t[0]=a[0]*s+a[4]*r+a[8]*o+a[12],t[1]=a[1]*s+a[5]*r+a[9]*o+a[13],t[2]=a[2]*s+a[6]*r+a[10]*o+a[14],t}function L$1(t,n,a){const s=n[0],r=n[1],o=n[2];return t[0]=s*a[0]+r*a[3]+o*a[6],t[1]=s*a[1]+r*a[4]+o*a[7],t[2]=s*a[2]+r*a[5]+o*a[8],t}function P$1(t,n,a){const s=a[0],r=a[1],o=a[2],u=a[3],c=n[0],e=n[1],i=n[2];let h=r*i-o*e,M=o*c-s*i,f=s*e-r*c,l=r*f-o*M,m=o*h-s*f,d=s*M-r*h;const b=2*u;return h*=b,M*=b,f*=b,l*=2,m*=2,d*=2,t[0]=c+h+l,t[1]=e+M+m,t[2]=i+f+d,t}function O(t,n,a,s){const r=[],o=[];return r[0]=n[0]-a[0],r[1]=n[1]-a[1],r[2]=n[2]-a[2],o[0]=r[0],o[1]=r[1]*Math.cos(s)-r[2]*Math.sin(s),o[2]=r[1]*Math.sin(s)+r[2]*Math.cos(s),t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function Q(t,n,a,s){const r=[],o=[];return r[0]=n[0]-a[0],r[1]=n[1]-a[1],r[2]=n[2]-a[2],o[0]=r[2]*Math.sin(s)+r[0]*Math.cos(s),o[1]=r[1],o[2]=r[2]*Math.cos(s)-r[0]*Math.sin(s),t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function R(t,n,a,s){const r=[],o=[];return r[0]=n[0]-a[0],r[1]=n[1]-a[1],r[2]=n[2]-a[2],o[0]=r[0]*Math.cos(s)-r[1]*Math.sin(s),o[1]=r[0]*Math.sin(s)+r[1]*Math.cos(s),o[2]=r[2],t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function k$2(t,n){r$1(w$2,t),r$1(B$1,n),j$2(w$2,w$2),j$2(B$1,B$1);const a=z$1(w$2,B$1);return a>1?0:a<-1?Math.PI:Math.acos(a)}const w$2=common.n(),B$1=common.n();function C$1(t){return "vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function F$1(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function G$1(t,a){if(t===a)return !0;const s=t[0],r=t[1],o=t[2],u=a[0],c=a[1],e=a[2];return Math.abs(s-u)<=common.a*Math.max(1,Math.abs(s),Math.abs(u))&&Math.abs(r-c)<=common.a*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(o-e)<=common.a*Math.max(1,Math.abs(o),Math.abs(e))}function H$1(t,n,a){const s=a[0]-n[0],r=a[1]-n[1],o=a[2]-n[2];let u=s*s+r*r+o*o;return u>0?(u=1/Math.sqrt(u),t[0]=s*u,t[1]=r*u,t[2]=o*u,t):(t[0]=0,t[1]=0,t[2]=0,t)}const J=c$2,K=e$2,N$1=i$1,S=q$1,X=x$2,Y=s$2,Z=p$2,T=Object.freeze({__proto__:null,length:s$2,copy:r$1,set:o$2,add:u$2,subtract:c$2,multiply:e$2,divide:i$1,ceil:h$1,floor:M$2,min:f$2,max:l$2,round:m$2,scale:d$1,scaleAndAdd:b$2,distance:q$1,squaredDistance:x$2,squaredLength:p$2,negate:v$1,inverse:g$2,normalize:j$2,dot:z$1,cross:_$1,lerp:y$1,hermite:A$1,bezier:D$1,random:E$1,transformMat4:I$2,transformMat3:L$1,transformQuat:P$1,rotateX:O,rotateY:Q,rotateZ:R,angle:k$2,str:C$1,exactEquals:F$1,equals:G$1,direction:H$1,sub:J,mul:K,div:N$1,dist:S,sqrDist:X,len:Y,sqrLen:Z});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a$1(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function r(t,n,a,r,s){return t[0]=n,t[1]=a,t[2]=r,t[3]=s,t}function s$1(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function u$1(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function o$1(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function e$1(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function c$1(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function i(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function h(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t}function M$1(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t}function f$1(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function l$1(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function m$1(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}function d(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2],u=n[3]-t[3];return Math.sqrt(a*a+r*r+s*s+u*u)}function b$1(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2],u=n[3]-t[3];return a*a+r*r+s*s+u*u}function x$1(t){const n=t[0],a=t[1],r=t[2],s=t[3];return Math.sqrt(n*n+a*a+r*r+s*s)}function q(t){const n=t[0],a=t[1],r=t[2],s=t[3];return n*n+a*a+r*r+s*s}function p$1(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function v(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function g$1(t,n){const a=n[0],r=n[1],s=n[2],u=n[3];let o=a*a+r*r+s*s+u*u;return o>0&&(o=1/Math.sqrt(o),t[0]=a*o,t[1]=r*o,t[2]=s*o,t[3]=u*o),t}function _(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function j$1(t,n,a,r){const s=n[0],u=n[1],o=n[2],e=n[3];return t[0]=s+r*(a[0]-s),t[1]=u+r*(a[1]-u),t[2]=o+r*(a[2]-o),t[3]=e+r*(a[3]-e),t}function w$1(t,a){let r,s,u,o,e,c;a=a||1;do{r=2*common.t()-1,s=2*common.t()-1,e=r*r+s*s;}while(e>=1);do{u=2*common.t()-1,o=2*common.t()-1,c=u*u+o*o;}while(c>=1);const i=Math.sqrt((1-e)/c);return t[0]=a*r,t[1]=a*s,t[2]=a*u*i,t[3]=a*o*i,t}function y(t,n,a){const r=n[0],s=n[1],u=n[2],o=n[3];return t[0]=a[0]*r+a[4]*s+a[8]*u+a[12]*o,t[1]=a[1]*r+a[5]*s+a[9]*u+a[13]*o,t[2]=a[2]*r+a[6]*s+a[10]*u+a[14]*o,t[3]=a[3]*r+a[7]*s+a[11]*u+a[15]*o,t}function z(t,n,a){const r=n[0],s=n[1],u=n[2],o=a[0],e=a[1],c=a[2],i=a[3],h=i*r+e*u-c*s,M=i*s+c*r-o*u,f=i*u+o*s-e*r,l=-o*r-e*s-c*u;return t[0]=h*i+l*-o+M*-c-f*-e,t[1]=M*i+l*-e+f*-o-h*-c,t[2]=f*i+l*-c+h*-e-M*-o,t[3]=n[3],t}function A(t){return "vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function D(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function E(n,a){const r=n[0],s=n[1],u=n[2],o=n[3],e=a[0],c=a[1],i=a[2],h=a[3];return Math.abs(r-e)<=common.a*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(s-c)<=common.a*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(u-i)<=common.a*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(o-h)<=common.a*Math.max(1,Math.abs(o),Math.abs(h))}const L=u$1,k$1=o$1,B=e$1,C=d,F=b$1,G=x$1,H=q,I$1=Object.freeze({__proto__:null,copy:a$1,set:r,add:s$1,subtract:u$1,multiply:o$1,divide:e$1,ceil:c$1,floor:i,min:h,max:M$1,round:f$1,scale:l$1,scaleAndAdd:m$1,distance:d,squaredDistance:b$1,length:x$1,squaredLength:q,negate:p$1,inverse:v,normalize:g$1,dot:_,lerp:j$1,random:w$1,transformMat4:y,transformQuat:z,str:A,exactEquals:D,equals:E,sub:L,mul:k$1,div:B,dist:C,sqrDist:F,len:G,sqrLen:H});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=new Float32Array(1);function a(n){--n;for(let t=1;t<32;t<<=1)n|=n>>t;return n+1}function e(n,t,r){return Math.min(Math.max(n,t),r)}function o(n){return 0==(n&n-1)}function c(n){return n--,n|=n>>1,n|=n>>2,n|=n>>4,n|=n>>8,n|=n>>16,++n}function f(n){return 10**Math.ceil(Math.LOG10E*Math.log(n))}function s(n,t,r){return n+(t-n)*r}function M(n){return n*Math.PI/180}function m(n){return 180*n/Math.PI}function N(n,t=1e-6){return (n<0?-1:1)/Math.max(Math.abs(n),t)}function l(n){return Math.acos(e(n,-1,1))}function b(n){return Math.asin(e(n,-1,1))}function x(n,t,r=1e-6){if(isNaN(n)||isNaN(t))return !1;if(n===t)return !0;const u=Math.abs(n-t),a=Math.abs(n),e=Math.abs(t);if(0===n||0===t||a<1e-12&&e<1e-12){if(u>.01*r)return !1}else if(u/(a+e)>r)return !1;return !0}function p(n,t,r=1e-6){if(isNaN(n)||isNaN(t))return !1;return (n>t?n-t:t-n)<=r}function j(n){return k(Math.max(-w,Math.min(n,w)))}function k(n){return u[0]=n,u[0]}function I(n,t,r){const u=e((r-n)/(t-n),0,1);return u*u*(3-2*u)}function P(r,u){const a=s$2(r),e=b(r[2]/a),i=Math.atan2(r[1]/a,r[0]/a);return o$2(u,a,e,i),u}function g(n,t,u){return r(n,t[0],t[1],t[2],t[3]*u)}const w=k(34028234663852886e22);

exports.D = D;
exports.E = E;
exports.F = F$1;
exports.G = G$1;
exports.H = H$1;
exports.I = I$2;
exports.I$1 = I$1;
exports.I$2 = I;
exports.J = J;
exports.L = L$1;
exports.M = M;
exports.N = N;
exports.P = P$1;
exports.P$1 = P;
exports.R = R;
exports.S = S;
exports.T = T;
exports.X = X;
exports.Y = Y;
exports.Z = Z;
exports._ = _$1;
exports._$1 = _;
exports.a = a;
exports.a$1 = a$1;
exports.b = b;
exports.b$1 = b$1;
exports.b$2 = b$2;
exports.c = c$2;
exports.c$1 = c;
exports.d = d$1;
exports.e = e;
exports.e$1 = e$2;
exports.f = f$2;
exports.f$1 = f;
exports.g = g$1;
exports.g$1 = g;
exports.i = i$1;
exports.j = j;
exports.j$1 = j$2;
exports.j$2 = j$1;
exports.l = l;
exports.l$1 = l$1;
exports.l$2 = l$2;
exports.m = m;
exports.o = o$2;
exports.o$1 = o;
exports.p = p;
exports.p$1 = p$2;
exports.q = q$1;
exports.q$1 = q;
exports.r = r$1;
exports.r$1 = r;
exports.s = s$2;
exports.s$1 = s;
exports.s$2 = s$1;
exports.u = u$2;
exports.v = v$1;
exports.w = w;
exports.x = x;
exports.x$1 = x$2;
exports.x$2 = x$1;
exports.y = y$1;
exports.y$1 = y;
exports.z = z$1;
