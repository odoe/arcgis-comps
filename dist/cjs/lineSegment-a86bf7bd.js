'use strict';

const mathUtils = require('./mathUtils-af6066f0.js');
const vectorStacks = require('./vectorStacks-f48a010a.js');
const common = require('./common-41a349f2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function v(t){return t?{origin:common.t$1(t.origin),vector:common.t$1(t.vector)}:{origin:common.n(),vector:common.n()}}function p(t,r){const n=x.get();return n.origin=t,n.vector=r,n}function h(t,r=v()){return m(t.origin,t.vector,r)}function m(t,r,o=v()){return mathUtils.r(o.origin,t),mathUtils.r(o.vector,r),o}function l(t,r,i=v()){return mathUtils.r(i.origin,t),mathUtils.c(i.vector,r,t),i}function b(r,n){const c=mathUtils.c(vectorStacks.c.get(),n,r.origin),u=mathUtils.z(r.vector,c),s=mathUtils.z(r.vector,r.vector),a=mathUtils.e(u/s,0,1),g=mathUtils.c(vectorStacks.c.get(),mathUtils.d(vectorStacks.c.get(),r.vector,a),c);return mathUtils.z(g,g)}function j(t,r,n){return mathUtils.u(n,t.origin,mathUtils.d(n,t.vector,r))}function A(r,n,s,a,g){const{vector:v,origin:p}=r,h=mathUtils.c(vectorStacks.c.get(),n,p),m=mathUtils.z(v,h)/mathUtils.p$1(v);return mathUtils.d(g,v,mathUtils.e(m,s,a)),mathUtils.u(g,g,r.origin)}function B(t,r){if(q(t,p(r.origin,r.direction),!1,w)){const{tA:r,pB:n,distance2:o}=w;if(r>=0&&r<=1)return o;if(r<0)return mathUtils.x$1(t.origin,n);if(r>1)return mathUtils.x$1(mathUtils.u(vectorStacks.c.get(),t.origin,t.vector),n)}return null}function k(t,r,o){return !!q(t,r,!0,w)&&(mathUtils.r(o,w.pA),!0)}function q(r,n,o,i){const e=1e-6,u=r.origin,a=mathUtils.u(vectorStacks.c.get(),u,r.vector),g=n.origin,v=mathUtils.u(vectorStacks.c.get(),g,n.vector),p=vectorStacks.c.get(),h=vectorStacks.c.get();if(p[0]=u[0]-g[0],p[1]=u[1]-g[1],p[2]=u[2]-g[2],h[0]=v[0]-g[0],h[1]=v[1]-g[1],h[2]=v[2]-g[2],Math.abs(h[0])<e&&Math.abs(h[1])<e&&Math.abs(h[2])<e)return !1;const m=vectorStacks.c.get();if(m[0]=a[0]-u[0],m[1]=a[1]-u[1],m[2]=a[2]-u[2],Math.abs(m[0])<e&&Math.abs(m[1])<e&&Math.abs(m[2])<e)return !1;const l=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],b=h[0]*m[0]+h[1]*m[1]+h[2]*m[2],M=p[0]*m[0]+p[1]*m[1]+p[2]*m[2],d=h[0]*h[0]+h[1]*h[1]+h[2]*h[2],j=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*d-b*b;if(Math.abs(j)<e)return !1;let A=(l*b-M*d)/j,B=(l+b*A)/d;o&&(A=mathUtils.e(A,0,1),B=mathUtils.e(B,0,1));const k=vectorStacks.c.get(),S=vectorStacks.c.get();return k[0]=u[0]+A*m[0],k[1]=u[1]+A*m[1],k[2]=u[2]+A*m[2],S[0]=g[0]+B*h[0],S[1]=g[1]+B*h[1],S[2]=g[2]+B*h[2],i.tA=A,i.tB=B,i.pA=k,i.pB=S,i.distance2=mathUtils.x$1(k,S),!0}const w={tA:0,tB:0,pA:common.n(),pB:common.n(),distance2:0},x=new vectorStacks.s((()=>({origin:null,vector:null})));

exports.A = A;
exports.B = B;
exports.b = b;
exports.h = h;
exports.j = j;
exports.k = k;
exports.l = l;
exports.m = m;
exports.v = v;
