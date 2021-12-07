'use strict';

const unitUtils = require('./unitUtils-083cb8d0.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=96;function r(r,i){const o=i||r.extent,c=r.width,u=unitUtils.H(o&&o.spatialReference);return o&&c?o.width/c*u*unitUtils.m*e:0}function i(r,i){return r/(unitUtils.H(i)*unitUtils.m*e)}function c(t,n){const e=t.extent,r=t.width,o=i(n,e.spatialReference);return e.clone().expand(o*r/e.width)}

exports.c = c;
exports.i = i;
exports.r = r;
