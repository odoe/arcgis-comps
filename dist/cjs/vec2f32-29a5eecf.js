'use strict';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return new Float32Array(2)}function r(n){const r=new Float32Array(2);return r[0]=n[0],r[1]=n[1],r}function t(n,r){const t=new Float32Array(2);return t[0]=n,t[1]=r,t}function e(n,r){return new Float32Array(n,r,2)}function a(){return n()}function o(){return t(1,1)}function u(){return t(1,0)}function s(){return t(0,1)}const c=a(),f=o(),i=u(),l=s();Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:e,zeros:a,ones:o,unitX:u,unitY:s,ZEROS:c,ONES:f,UNIT_X:i,UNIT_Y:l});

exports.n = n;
exports.t = t;
