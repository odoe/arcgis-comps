'use strict';

const request = require('./messageBundle-8be88d04.js');
const geometryServiceUtils = require('./geometryServiceUtils-8e2c66dc.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(l){const s=l.view.spatialReference,i=l.layer.fullExtent,n=request.r(i)&&i.spatialReference;if(request.t$1(i)||!n)return Promise.resolve(null);if(n.equals(s))return Promise.resolve(i.clone());const a=request.M$2(i,s);return request.r(a)?Promise.resolve(a):l.view.state.isLocal?geometryServiceUtils.projectGeometry(i,s,l.layer.portalItem).then((e=>!l.destroyed&&e?e:void 0)).catch((()=>null)):Promise.resolve(null)}

exports.l = l;
