/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return new Float32Array(4)}function t(n){const t=new Float32Array(4);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function r(n,t,r,a){const e=new Float32Array(4);return e[0]=n,e[1]=t,e[2]=r,e[3]=a,e}function a(n,t){return new Float32Array(n,t,4)}function e(){return n()}function u(){return r(1,1,1,1)}function o(){return r(1,0,0,0)}function s(){return r(0,1,0,0)}function c(){return r(0,0,1,0)}function i(){return r(0,0,0,1)}const f=e(),l=u(),_=o(),w=s(),N=c(),U=i();Object.freeze({__proto__:null,create:n,clone:t,fromValues:r,createView:a,zeros:e,ones:u,unitX:o,unitY:s,unitZ:c,unitW:i,ZEROS:f,ONES:l,UNIT_X:_,UNIT_Y:w,UNIT_Z:N,UNIT_W:U});

export { n, r, t };
