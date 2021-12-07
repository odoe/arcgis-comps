import { r, M, m } from './mathUtils-e16f9389.js';
import { I, v as v$1, P } from './quat-2d7a417b.js';
import { a as e } from './quatf64-b9feea68.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(n=U){return [n[0],n[1],n[2],n[3]]}function k(n,r$1,t=a()){return r(l(t),n),t[3]=r$1,t}function q(r,c,s=a()){return I(b,l(r),x(r)),I(d,l(c),x(c)),v$1(b,d,b),y(s,m(P(l(s),b)))}function l(n){return n}function v(n){return n[3]}function x(n){return M(n[3])}function y(n,r){return n[3]=r,n}const U=[0,0,1,0],b=e(),d=e();

export { a, k, l, q, v, x };
