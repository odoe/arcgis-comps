import { A as r, K as s$1 } from './messageBundle-f75b4090.js';
import { h } from './PooledRBush-f64ccc4a.js';
import { _ } from './georeference-566cede5.js';
import './index-b157fcf2.js';
import './quickselect-ccfd8cff.js';
import './unitUtils-38774114.js';
import './quatf64-b9feea68.js';
import './mat4-f34c6460.js';
import './common-d5b993de.js';
import './mat4f64-677a419d.js';
import './mat3-6a23d9ad.js';
import './projection-f3d8779d.js';
import './mathUtils-e16f9389.js';
import './geometry-7e07b1ba.js';
import './aaBoundingRect-9468599b.js';
import './geodesicConstants-54cb88d4.js';
import './axisAngleDegrees-8d7a62d6.js';
import './quat-2d7a417b.js';
import './BufferView-35ef10d7.js';
import './vec2-5672471e.js';
import './vec33-df10f43c.js';
import './projection-5f2268ed.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{async createIndex(e,n){const o=new Array;if(!e.vertexAttributes||!e.vertexAttributes.position)return new h;const s=this.createMeshData(e),a=r(n)?await n.invoke("createIndexThread",s,{transferList:o}):this.createIndexThread(s).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(e){const t=new Float64Array(e.position),r=this.createPooledRBush();return e.components?this.createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this.createIndexAllThread(r,t)}createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let o=0;o<t.length;o+=9)r[n++]=s(t,o+0,o+3,o+6);return e.load(r),{result:e.toJSON()}}createIndexComponentsThread(e,t,r){let n=0;for(const s of r)n+=s.length/3;const o=new Array(n);let a=0;for(const i of r)for(let e=0;e<i.length;e+=3)o[a++]=s(t,3*i[e+0],3*i[e+1],3*i[e+2]);return e.load(o),{result:e.toJSON()}}createMeshData(e){const t=(e.transform?_({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return !e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}createPooledRBush(){return new h(9,s$1("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function s(e,t,r,n){return {minX:Math.min(e[t+0],e[r+0],e[n+0]),maxX:Math.max(e[t+0],e[r+0],e[n+0]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[r+0],e[r+1],e[r+2]],p2:[e[n+0],e[n+1],e[n+2]]}}

export default o;
export { o as ElevationSamplerWorker };
