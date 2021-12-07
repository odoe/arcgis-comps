'use strict';

const byteSizeEstimations = require('./byteSizeEstimations-d2f2ce40.js');
const request = require('./messageBundle-8be88d04.js');
const aaBoundingBox = require('./aaBoundingBox-c372701a.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const quantizationUtils = require('./quantizationUtils-d1d9c03e.js');
const geometry = require('./geometry-ef17530a.js');
const Field = require('./Field-b92c6f4a.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class j{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null;}}function M(e){return request.r(e.geometry)}class N{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null;}}function z(e){const s=geometry.i$1.fromJSON(e.geometryType),r=request.k.fromJSON(e.spatialReference),n=e.transform,a=e.features.map((o=>{const a=F(o,s,r,e.objectIdFieldName),i=a.geometry;if(request.r(i)&&n)switch(i.type){case"point":a.geometry=quantizationUtils.v(n,i,i,i.hasZ,i.hasM);break;case"multipoint":a.geometry=quantizationUtils.q(n,i,i,i.hasZ,i.hasM);break;case"polygon":a.geometry=quantizationUtils.B(n,i,i,i.hasZ,i.hasM);break;case"polyline":a.geometry=quantizationUtils.C(n,i,i,i.hasZ,i.hasM);break;case"extent":case"mesh":a.geometry=i;}return a}));return {geometryType:s,features:a,spatialReference:r,fields:e.fields?e.fields.map((e=>Field.y.fromJSON(e))):null,objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null}}function F(e,t,s,r){return {uid:request.e$5(),objectId:r&&e.attributes?e.attributes[r]:null,attributes:e.attributes,geometry:I(e.geometry,t,s),visible:!0}}function I(e,t,r){if(request.t$1(e))return null;switch(t){case"point":{const t=e;return {x:t.x,y:t.y,z:t.z,m:t.m,hasZ:null!=t.z,hasM:null!=t.m,type:"point",spatialReference:r}}case"polyline":{const t=e;return {paths:t.paths,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polyline",spatialReference:r}}case"polygon":{const t=e;return {rings:t.rings,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polygon",spatialReference:r}}case"multipoint":{const t=e;return {points:t.points,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"multipoint",spatialReference:r}}}}function v(e,t,s,r){return {x:e,y:t,z:s,hasZ:null!=s,hasM:!1,spatialReference:r,type:"point"}}function R(e){if(request.t$1(e))return 0;let t=32;switch(e.type){case"point":t+=42;break;case"polyline":case"polygon":{let s=0;const r=2+(e.hasZ?1:0)+(e.hasM?1:0),n="polyline"===e.type?e.paths:e.rings;for(const e of n)s+=e.length;t+=8*s*r+64,t+=128*s,t+=34,t+=32*(n.length+1);break}case"multipoint":{const s=2+(e.hasZ?1:0)+(e.hasM?1:0),r=e.points.length;t+=8*r*s+64,t+=128*r,t+=34,t+=32;break}case"extent":t+=98,e.hasM&&(t+=32),e.hasZ&&(t+=32);break;case"mesh":t+=request.m$5(e.vertexAttributes.position),t+=request.m$5(e.vertexAttributes.normal),t+=request.m$5(e.vertexAttributes.uv),t+=request.m$5(e.vertexAttributes.tangent);}return t}function A(t){let s=32;return s+=byteSizeEstimations.e(t.attributes),s+=3,s+=8+R(t.geometry),s}function w(e){if(request.t$1(e))return 0;switch(e.type){case"point":return 1;case"polyline":{let t=0;for(const s of e.paths)t+=s.length;return t}case"polygon":{let t=0;for(const s of e.rings)t+=s.length;return t}case"multipoint":return e.points.length;case"extent":return 2;case"mesh":{const t=e.vertexAttributes&&e.vertexAttributes.position;return t?t.length/3:0}default:return}}function S(e){if(request.t$1(e))return !1;switch(e.type){case"extent":case"point":return !0;case"polyline":for(const t of e.paths)if(t.length>0)return !0;return !1;case"polygon":for(const t of e.rings)if(t.length>0)return !0;return !1;case"multipoint":return e.points.length>0;case"mesh":return !e.loaded||e.vertexAttributes.position.length>0}}function T(e,t){switch(aaBoundingBox.B(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(let s=0;s<e.paths.length;s++)aaBoundingBox.s(t,e.paths[s],e.hasZ);break;case"polygon":for(let s=0;s<e.rings.length;s++)aaBoundingBox.s(t,e.rings[s],e.hasZ);break;case"multipoint":aaBoundingBox.s(t,e.points,e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax);}}function J(e,t){switch(aaBoundingRect.B(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(let s=0;s<e.paths.length;s++)aaBoundingRect.x(t,e.paths[s]);break;case"polygon":for(let s=0;s<e.rings.length;s++)aaBoundingRect.x(t,e.rings[s]);break;case"multipoint":aaBoundingRect.x(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax;}}function O(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}

exports.A = A;
exports.J = J;
exports.M = M;
exports.N = N;
exports.O = O;
exports.S = S;
exports.T = T;
exports.j = j;
exports.v = v;
exports.w = w;
exports.z = z;
