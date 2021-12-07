'use strict';

const mathUtils = require('./mathUtils-af6066f0.js');
const vec2 = require('./vec2-d000a8cb.js');
const vec2f64 = require('./vec2f64-60b3c97e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function h(t,n){return t[0]*n[1]-t[1]*n[0]}function m(t,s,r){const e=(s[0]-t[0])*(r[1]-t[1])-(s[1]-t[1])*(r[0]-t[0]);return Math.abs(e)/vec2.d(s,r)}function y(t,n,o){const u=vec2.j(o,n)/vec2.p(o);return vec2.l(t,o,u)}function d(t,n,s,r,e=s){return vec2.o(x,r,s),vec2.o(g,n,e),y(w,g,x),vec2.s(t,e,w)}function b(t,n,e,u){vec2.o(x,u,e),vec2.o(g,n,e);const f=vec2.j(x,g)/vec2.p(x);return f>0?vec2.m(t,e,x,f):vec2.a(t,e)}function j(t,n,s,r){vec2.o(x,n,s);const e=r/vec2.b(x);return vec2.m(t,s,x,e)}function l(n,s){return d(g,s,n.start,n.end),mathUtils.p(g[0],s[0])&&mathUtils.p(g[1],s[1])?[vec2f64.r(s)]:[]}function k(n,s,r){return j(g,r,n,s),mathUtils.p(g[0],r[0])&&mathUtils.p(g[1],r[1])?[vec2f64.r(r)]:[]}function M(t,n){const s=t.start,r=t.end,e=n.start,u=n.end,a=vec2.o(x,r,s),f=vec2.o(U,u,e),i=h(a,f);if(Math.abs(i)<=v)return [];const p=vec2.o(g,s,e),m=h(f,p)/i,y=h(a,p)/i;if(m>=0){if(y>=0||1===n.type)return [vec2.m(w,s,a,m)]}else if(1===t.type&&(y>=0||1===n.type))return [vec2.m(w,s,a,m)];return []}function q(t,n,e){const u=[],a=vec2.o(x,t.end,t.start),f=vec2.o(U,t.start,n),i=vec2.p(a),p=2*vec2.j(a,f),h=p*p-4*i*(vec2.p(f)-e*e);if(0===h){const n=-p/(2*i);(1===t.type||n>=0)&&u.push(vec2.m(w,t.start,a,n));}else if(h>0){const n=Math.sqrt(h),s=(-p+n)/(2*i);(1===t.type||s>=0)&&u.push(vec2.m(w,t.start,a,s));const r=(-p-n)/(2*i);(1===t.type||r>=0)&&u.push(vec2.m(g,t.start,a,r));}return u}const v=1e-6,x=vec2f64.n(),U=vec2f64.n(),g=vec2f64.n(),w=vec2f64.n();

exports.M = M;
exports.b = b;
exports.d = d;
exports.j = j;
exports.k = k;
exports.l = l;
exports.m = m;
exports.q = q;
