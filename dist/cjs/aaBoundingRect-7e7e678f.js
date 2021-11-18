'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(n){return n}function u(n=J){return i([n[0],n[1],n[2],n[3]])}function e(n){return i([n[0],n[1],n[2],n[3]])}function o(n,t,r,i,e=u()){return e[0]=n,e[1]=t,e[2]=r,e[3]=i,e}function c(n,t=u()){return t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax,t}function m(n,t){return new unitUtils.M({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:t})}function f(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1]);}function s(n){return request.t(n)||n[0]>=n[2]?0:n[2]-n[0]}function l(n){return n[1]>=n[3]?0:n[3]-n[1]}function y(n){return s(n)*l(n)}function w(n,t,r){return t[0]>=n[0]-r&&t[1]>=n[1]-r&&t[0]<=n[2]+r&&t[1]<=n[3]+r}function k(n,t){return Math.max(t[0],n[0])<=Math.min(t[2],n[2])&&Math.max(t[1],n[1])<=Math.min(t[3],n[3])}function q(n,t){return t[0]>=n[0]&&t[2]<=n[2]&&t[1]>=n[1]&&t[3]<=n[3]}const I=i([1/0,1/0,-1/0,-1/0]),J=i([0,0,0,0]);

exports.I = I;
exports.c = c;
exports.e = e;
exports.f = f;
exports.k = k;
exports.l = l;
exports.m = m;
exports.o = o;
exports.q = q;
exports.s = s;
exports.u = u;
exports.w = w;
exports.y = y;
