import { p as p$1 } from './mathUtils-e16f9389.js';
import { d as d$1, m as m$1, a, o, l as l$1, s, j as j$1, p, b as b$1 } from './vec2-5672471e.js';
import { n, r } from './vec2f64-35868783.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function h(t,n){return t[0]*n[1]-t[1]*n[0]}function m(t,s,r){const e=(s[0]-t[0])*(r[1]-t[1])-(s[1]-t[1])*(r[0]-t[0]);return Math.abs(e)/d$1(s,r)}function y(t,n,o){const u=j$1(o,n)/p(o);return l$1(t,o,u)}function d(t,n,s$1,r,e=s$1){return o(x,r,s$1),o(g,n,e),y(w,g,x),s(t,e,w)}function b(t,n,e,u){o(x,u,e),o(g,n,e);const f=j$1(x,g)/p(x);return f>0?m$1(t,e,x,f):a(t,e)}function j(t,n,s,r){o(x,n,s);const e=r/b$1(x);return m$1(t,s,x,e)}function l(n,s){return d(g,s,n.start,n.end),p$1(g[0],s[0])&&p$1(g[1],s[1])?[r(s)]:[]}function k(n,s,r$1){return j(g,r$1,n,s),p$1(g[0],r$1[0])&&p$1(g[1],r$1[1])?[r(r$1)]:[]}function M(t,n){const s=t.start,r=t.end,e=n.start,u=n.end,a=o(x,r,s),f=o(U,u,e),i=h(a,f);if(Math.abs(i)<=v)return [];const p=o(g,s,e),m=h(f,p)/i,y=h(a,p)/i;if(m>=0){if(y>=0||1===n.type)return [m$1(w,s,a,m)]}else if(1===t.type&&(y>=0||1===n.type))return [m$1(w,s,a,m)];return []}function q(t,n,e){const u=[],a=o(x,t.end,t.start),f=o(U,t.start,n),i=p(a),p$1=2*j$1(a,f),h=p$1*p$1-4*i*(p(f)-e*e);if(0===h){const n=-p$1/(2*i);(1===t.type||n>=0)&&u.push(m$1(w,t.start,a,n));}else if(h>0){const n=Math.sqrt(h),s=(-p$1+n)/(2*i);(1===t.type||s>=0)&&u.push(m$1(w,t.start,a,s));const r=(-p$1-n)/(2*i);(1===t.type||r>=0)&&u.push(m$1(g,t.start,a,r));}return u}const v=1e-6,x=n(),U=n(),g=n(),w=n();

export { M, b, d, j, k, l, m, q };
