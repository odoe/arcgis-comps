'use strict';

const request = require('./MapView-1726f571.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=96;function r(r,i){const o=i||r.extent,c=r.width,u=request.H(o&&o.spatialReference);return o&&c?o.width/c*u*request.m$6*e:0}function i(r,i){return r/(request.H(i)*request.m$6*e)}function c(t,n){const e=t.extent,r=t.width,o=i(n,e.spatialReference);return e.clone().expand(o*r/e.width)}

exports.c = c;
exports.r = r;
