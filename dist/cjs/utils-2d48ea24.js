'use strict';

const request = require('./messageBundle-8be88d04.js');
const mat4 = require('./mat4-f68486bc.js');
const mat4f64 = require('./mat4f64-fc3339e5.js');
const Util = require('./Util-5c6af8a4.js');
const doublePrecisionUtils = require('./doublePrecisionUtils-26ddcbaf.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this.id=request.e$5();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f(r,n){return request.t$1(r)&&(r=[]),r.push(n),r}function u(r,n){if(request.t$1(r))return null;const o=r.filter((t=>t!==n));return 0===o.length?null:o}function c(t){return !!request.r(t)&&!t.visible}function l(t,i,m){const f=t.origin.vec3;Util.E(j,-f[0],-f[1],-f[2]),request.r(t.transformation)?mat4.e(i,j,t.transformation):mat4.n(i,j),m&&(mat4.h(m,i),mat4.o(m,m));}function p(t,r,n,o,s){b[0]=t.get(r,0),b[1]=t.get(r,1),b[2]=t.get(r,2),doublePrecisionUtils.o(b,g,3),n.set(s,0,g[0]),o.set(s,0,g[1]),n.set(s,1,g[2]),o.set(s,1,g[3]),n.set(s,2,g[4]),o.set(s,2,g[5]);}const b=new Float64Array(3),g=new Float32Array(6),j=mat4f64.e();

exports.c = c;
exports.f = f;
exports.l = l;
exports.p = p;
exports.r = r;
exports.u = u;
