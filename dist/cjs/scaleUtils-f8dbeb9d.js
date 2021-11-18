'use strict';

const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=96;function r(r,i){const o=i||r.extent,c=r.width,u=unitUtils.H$1(o&&o.spatialReference);return o&&c?o.width/c*u*unitUtils.m$6*e:0}function i(r,i){return r/(unitUtils.H$1(i)*unitUtils.m$6*e)}function c(t,n){const e=t.extent,r=t.width,o=i(n,e.spatialReference);return e.clone().expand(o*r/e.width)}

exports.c = c;
exports.r = r;
