'use strict';

const request = require('./messageBundle-8be88d04.js');
const PooledRBush = require('./PooledRBush-793d5c9f.js');
const georeference = require('./georeference-1b2d8c01.js');
require('./index-fde8502c.js');
require('./quickselect-d3f68f5a.js');
require('./unitUtils-083cb8d0.js');
require('./quatf64-e7a7f39e.js');
require('./mat4-f68486bc.js');
require('./common-41a349f2.js');
require('./mat4f64-fc3339e5.js');
require('./mat3-1d3e0d51.js');
require('./projection-b19710fa.js');
require('./mathUtils-af6066f0.js');
require('./geometry-ef17530a.js');
require('./aaBoundingRect-56648c00.js');
require('./geodesicConstants-047d586a.js');
require('./axisAngleDegrees-e1bd0682.js');
require('./quat-17613ceb.js');
require('./BufferView-b78db189.js');
require('./vec2-d000a8cb.js');
require('./vec33-1fc512be.js');
require('./projection-ea955486.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{async createIndex(e,n){const o=new Array;if(!e.vertexAttributes||!e.vertexAttributes.position)return new PooledRBush.h;const s=this.createMeshData(e),a=request.r(n)?await n.invoke("createIndexThread",s,{transferList:o}):this.createIndexThread(s).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(e){const t=new Float64Array(e.position),r=this.createPooledRBush();return e.components?this.createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this.createIndexAllThread(r,t)}createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let o=0;o<t.length;o+=9)r[n++]=s(t,o+0,o+3,o+6);return e.load(r),{result:e.toJSON()}}createIndexComponentsThread(e,t,r){let n=0;for(const s of r)n+=s.length/3;const o=new Array(n);let a=0;for(const i of r)for(let e=0;e<i.length;e+=3)o[a++]=s(t,3*i[e+0],3*i[e+1],3*i[e+2]);return e.load(o),{result:e.toJSON()}}createMeshData(e){const t=(e.transform?georeference._({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return !e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}createPooledRBush(){return new PooledRBush.h(9,request.s$3("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function s(e,t,r,n){return {minX:Math.min(e[t+0],e[r+0],e[n+0]),maxX:Math.max(e[t+0],e[r+0],e[n+0]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[r+0],e[r+1],e[r+2]],p2:[e[n+0],e[n+1],e[n+2]]}}

exports.ElevationSamplerWorker = o;
exports.default = o;
