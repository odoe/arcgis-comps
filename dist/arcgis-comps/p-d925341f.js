import{a_ as t,a$ as n}from"./p-566b0715.js";function r(t,n){return t[0]=n[0],t[1]=n[1],t}function u(t,n,r){return t[0]=n,t[1]=r,t}function o(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t}function e(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t}function c(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t}function a(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t}function i(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t}function s(t,n){const r=n[0]-t[0],u=n[1]-t[1];return Math.sqrt(r*r+u*u)}function f(t,n){const r=n[0]-t[0],u=n[1]-t[1];return r*r+u*u}function M(t){const n=t[0],r=t[1];return Math.sqrt(n*n+r*r)}function h(t){const n=t[0],r=t[1];return n*n+r*r}function l(t,n){return t[0]=-n[0],t[1]=-n[1],t}function d(t,n){const r=n[0],u=n[1];let o=r*r+u*u;return o>0&&(o=1/Math.sqrt(o),t[0]=n[0]*o,t[1]=n[1]*o),t}function m(t,n){return t[0]*n[0]+t[1]*n[1]}function p(t,n,r){const u=n[0]*r[1]-n[1]*r[0];return t[0]=t[1]=0,t[2]=u,t}function q(t,n,r){const u=n[0],o=n[1];return t[0]=r[0]*u+r[2]*o+r[4],t[1]=r[1]*u+r[3]*o+r[5],t}const _=e;Object.freeze({__proto__:null,copy:r,set:u,add:o,subtract:e,multiply:c,divide:a,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t},min:function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t},max:function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t},scale:i,scaleAndAdd:function(t,n,r,u){return t[0]=n[0]+r[0]*u,t[1]=n[1]+r[1]*u,t},distance:s,squaredDistance:f,length:M,squaredLength:h,negate:l,inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t},normalize:d,dot:m,cross:p,lerp:function(t,n,r,u){const o=n[0],e=n[1];return t[0]=o+u*(r[0]-o),t[1]=e+u*(r[1]-e),t},random:function(t,r){r=r||1;const u=2*n()*Math.PI;return t[0]=Math.cos(u)*r,t[1]=Math.sin(u)*r,t},transformMat2:function(t,n,r){const u=n[0],o=n[1];return t[0]=r[0]*u+r[2]*o,t[1]=r[1]*u+r[3]*o,t},transformMat2d:q,transformMat3:function(t,n,r){const u=n[0],o=n[1];return t[0]=r[0]*u+r[3]*o+r[6],t[1]=r[1]*u+r[4]*o+r[7],t},transformMat4:function(t,n,r){const u=n[0],o=n[1];return t[0]=r[0]*u+r[4]*o+r[12],t[1]=r[1]*u+r[5]*o+r[13],t},rotate:function(t,n,r,u){const o=n[0]-r[0],e=n[1]-r[1],c=Math.sin(u),a=Math.cos(u);return t[0]=o*a-e*c+r[0],t[1]=o*c+e*a+r[1],t},angle:function(t,n){const r=t[0],u=t[1],o=n[0],e=n[1];let c=r*r+u*u;c>0&&(c=1/Math.sqrt(c));let a=o*o+e*e;a>0&&(a=1/Math.sqrt(a));const i=(r*o+u*e)*c*a;return i>1?0:i<-1?Math.PI:Math.acos(i)},str:function(t){return"vec2("+t[0]+", "+t[1]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]},equals:function(n,r){const u=n[0],o=n[1],e=r[0],c=r[1];return Math.abs(u-e)<=t*Math.max(1,Math.abs(u),Math.abs(e))&&Math.abs(o-c)<=t*Math.max(1,Math.abs(o),Math.abs(c))},projectAndScale:function(t,n,r,u,o){let e=n[0]-r[0],c=n[1]-r[1];const a=(u[0]*e+u[1]*c)*(o-1);return e=u[0]*a,c=u[1]*a,t[0]=n[0]+e,t[1]=n[1]+c,t},len:M,sub:_,mul:c,div:a,dist:s,sqrDist:f,sqrLen:h});export{p as A,q as D,_ as F,r as a,M as b,s as d,m as j,i as l,e as o,f as q,u as r,o as s,d as v,l as x}