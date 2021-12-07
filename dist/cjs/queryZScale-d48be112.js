'use strict';

const request = require('./messageBundle-8be88d04.js');
const zscale = require('./zscale-25ef55f0.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,t,f){if(!f||!f.features||!f.hasZ)return;const s=zscale.t(f.geometryType,t,r.outSpatialReference);if(!request.t$1(s))for(const e of f.features)s(e.geometry);}

exports.r = r;
