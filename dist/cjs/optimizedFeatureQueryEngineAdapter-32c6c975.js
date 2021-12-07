'use strict';

const centroid = require('./centroid-d874c2ee.js');
const OptimizedFeature = require('./OptimizedFeature-cd4fe3c6.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,r)=>new OptimizedFeature.s(r,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(e,o)=>(e.centroid||(e.centroid=centroid.e(new OptimizedFeature.t,e.geometry,o.hasZ,o.hasM)),e.centroid)};

exports.o = o;
