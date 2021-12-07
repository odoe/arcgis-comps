'use strict';

const request = require('./messageBundle-8be88d04.js');
const quat = require('./quat-17613ceb.js');
const quatf32 = require('./quatf32-43352942.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const vec3f32 = require('./vec3f32-5485293e.js');
const projection = require('./projection-b19710fa.js');
const PointCloudWorkerUtil = require('./PointCloudWorkerUtil-67f5bedc.js');
require('./index-fde8502c.js');
require('./quatf64-e7a7f39e.js');
require('./common-41a349f2.js');
require('./unitUtils-083cb8d0.js');
require('./mat4-f68486bc.js');
require('./geometry-ef17530a.js');
require('./aaBoundingRect-56648c00.js');
require('./geodesicConstants-047d586a.js');
require('./PointCloudUniqueValueRenderer-3a8ae939.js');
require('./enumeration-f235fe07.js');
require('./ColorStop-ce63948c.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./I3SBinaryReader-a8426e2d.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class p{transform(e){const a=this._transform(e),o=[a.points.buffer,a.rgb.buffer];request.r(a.pointIdFilterMap)&&o.push(a.pointIdFilterMap.buffer);for(const t of a.attributes)"buffer"in t.values&&request.o$10(t.values.buffer)&&t.values.buffer!==a.rgb.buffer&&o.push(t.values.buffer);return Promise.resolve({result:a,transferList:o})}_transform(r){const e=PointCloudWorkerUtil.c(r.schema,r.geometryBuffer);let a=e.length/3,o=null;const f=[],s=PointCloudWorkerUtil.a(r.primaryAttributeData,e,a);request.r(r.primaryAttributeData)&&s&&f.push({attributeInfo:r.primaryAttributeData.attributeInfo,values:s});const i=PointCloudWorkerUtil.a(r.modulationAttributeData,e,a);request.r(r.modulationAttributeData)&&i&&f.push({attributeInfo:r.modulationAttributeData.attributeInfo,values:i});let p=PointCloudWorkerUtil.u(r.rendererInfo,s,i,a);if(r.filterInfo&&r.filterInfo.length>0&&request.r(r.filterAttributesData)){const t=r.filterAttributesData.map((t=>{const r=PointCloudWorkerUtil.a(t,e,a),o={attributeInfo:t.attributeInfo,values:r};return f.push(o),o}));o=new Uint32Array(a),a=PointCloudWorkerUtil.m(e,p,o,r.filterInfo,t);}for(const t of r.userAttributesData){const r=PointCloudWorkerUtil.a(t,e,a);f.push({attributeInfo:t.attributeInfo,values:r});}3*a<p.length&&(p=new Uint8Array(p.buffer.slice(0,3*a))),this._applyElevationOffsetInPlace(e,a,r.elevationOffset);const c=this._transformCoordinates(e,a,r.obb,request.k.fromJSON(r.inSR),request.k.fromJSON(r.outSR));return {obb:r.obb,points:c,rgb:p,attributes:f,pointIdFilterMap:o}}_transformCoordinates(t,r,a,n,u){if(!projection.xn(t,n,0,t,u,0,r))throw Error("Can't reproject");const l=vec3f32.t(a.center[0],a.center[1],a.center[2]),b=vec3f32.n(),m=vec3f32.n();quat.w(c,a.quaternion);const p=new Float32Array(3*r);for(let e=0;e<r;e++)b[0]=t[3*e]-l[0],b[1]=t[3*e+1]-l[1],b[2]=t[3*e+2]-l[2],mathUtils.P(m,b,c),a.halfSize[0]=Math.max(a.halfSize[0],Math.abs(m[0])),a.halfSize[1]=Math.max(a.halfSize[1],Math.abs(m[1])),a.halfSize[2]=Math.max(a.halfSize[2],Math.abs(m[2])),p[3*e]=b[0],p[3*e+1]=b[1],p[3*e+2]=b[2];return p}_applyElevationOffsetInPlace(t,r,e){if(0!==e)for(let a=0;a<r;a++)t[3*a+2]+=e;}}const c=quatf32.n();function h(){return new p}

exports.default = h;
