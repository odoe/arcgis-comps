/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i,t="screenUtils.toPt: input not recognized!",r=96;function u(n){return n?n/72*r:0}function e(n){return n?72*n/r:0}function o(r){if("string"==typeof r){const u=r.match(n);if(u){const n=Number(u[1]),t=u[3]&&u[3].toLowerCase(),o="-"===r.charAt(0),c="px"===t?e(n):n;return o?-c:c}return console.warn(t),null}return r}function c(n=0,t=0){return {x:n,y:t}}function i(n=0,t=0){return [n,t]}function s(n=0,t=0){return y([n,t])}function x(n=0,t=0,r=0){return p([n,t,r])}function y(n){return n}function p(n){return n}function l(n){return n}function d(n,t){return t?(t[0]=n.x,t[1]=n.y,t.length>2&&(t[2]=0),t):[n.x,n.y]}

export { c, d, e, i, l, o, p, s, u, x, y };
