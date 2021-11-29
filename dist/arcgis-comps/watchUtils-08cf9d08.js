import { u as m$1, w as e, x as r, A as A$1, j as j$1, m as m$2 } from './cast-e5ea2533.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=/\?(\.|$)/g;function i(n,t,r,e){const o=Array.isArray(t)?t:t.indexOf(",")>-1?t.split(","):[t],u=f(n,t,r,e);for(const i of o){const t=i.trim().replace(c,"$1"),e=n.get(t);r.call(n,e,e,t,n);}return u}function f(n,t,r,e){return n.watch(t,r,e)}function l(n,t,r,e){return N(n,t,null,r,e)}function s(n,t,r,e){return z(n,t,U,r,e)}function a(n,t,r,e){return N(n,t,U,r,e)}function m(n,t,r,e){return z(n,t,V,r,e)}function p(n,t,r,e){return N(n,t,V,r,e)}function v(n,t,r,e){return z(n,t,k,r,e)}function d(n,t,r,e){return N(n,t,k,r,e)}function h(n,t,r,e){return z(n,t,q,r,e)}function g(n,t,r,e){return N(n,t,q,r,e)}function y(n,t,r,e){return z(n,t,B,r,e)}function j(n,t,r,e){return N(n,t,B,r,e)}function b(n,t,r,e){return z(n,t,C,r,e)}function A(n,t,r,e){return N(n,t,C,r,e)}function w(n,t,e,o,u){return z(n,t,(n=>m$1(e,n)),o,u)}function x(n,t,e,o,u){return N(n,t,(n=>m$1(e,n)),o,u)}function O(n,t,r,e){let o=!1;const u=n.watch(t,((t,e,u,c)=>{o||r.call(n,t,e,u,c);}),e);return {remove(){u.remove();},pause(){o=!0;},resume(){o=!1;}}}function $(r$1,e$1,o,u,c,f,l){const s={};function a(n){const t=s[n];t&&(f&&f(t.target,n,r$1,o),t.handle.remove(),delete s[n]);}const m=i(r$1,e$1,((e$1,i,f)=>{a(f),e(e$1)&&(s[f]={handle:r(e$1,o,u),target:e$1},c&&c(e$1,f,r$1,o));}),l);return {remove(){m.remove();for(const n in s)a(n);}}}function z(n,t,r,e,o){const u=n.watch(t,((t,o,u,c)=>{r&&!r(t)||null==e||e.call(n,t,o,u,c);}),o);if(Array.isArray(t))for(const c of t){const o=n.get(c);r&&r(o)&&(null==e||e.call(n,o,o,t,n));}else {const o=n.get(t);r&&r(o)&&(null==e||e.call(n,o,o,t,n));}return u}function N(n,t,r,c,i){const f="function"==typeof c?c:null,l="object"==typeof c?c:null;"boolean"==typeof c&&(i=c);let s,a=!1;function m(){s&&(s.remove(),s=null);}const p=A$1();j$1(l,(()=>{m(),p.reject(m$2());}));const v={then:p.promise.then.bind(p.promise),catch:p.promise.catch.bind(p.promise),remove:m};return Object.freeze(v),s=z(n,t,r,((t,r,e,o)=>{a=!0,m(),f&&f.call(n,t,r,e,o),p.resolve({value:t,oldValue:r,propertyName:e,target:o});}),i),a&&m(),v}function U(n){return !!n}function V(n){return !n}function k(n){return !0===n}function q(n){return !1===n}function B(n){return void 0!==n}function C(n){return void 0===n}

export { $, N, O, a, d, f, g, h, i, m, p, s, v };
