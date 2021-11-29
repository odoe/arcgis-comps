import { r, aw as s$1 } from './cast-e5ea2533.js';
import { h } from './PooledRBush-ae56560b.js';
import { _ } from './georeference-514b3b89.js';
import './quickselect-ccfd8cff.js';
import './unitUtils-5dcccb3c.js';
import './Portal-f1457cb4.js';
import './JSONSupport-8dda8bae.js';
import './quatf64-f945f11e.js';
import './mat4-0196b8fc.js';
import './common-e2a70efa.js';
import './mat4f64-f06bdb4b.js';
import './mat3-a17f4d79.js';
import './projection-cca7ffa7.js';
import './mathUtils-cc1689ad.js';
import './Polyline-56152656.js';
import './assets-1ab0ccbe.js';
import './aaBoundingRect-2a187de3.js';
import './quat-350b47f0.js';
import './BufferView-9efd2fd0.js';
import './vec2-a8a62c12.js';
import './vec33-fa43135d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{async createIndex(e,n){const o=new Array;if(!e.vertexAttributes||!e.vertexAttributes.position)return new h;const s=this.createMeshData(e),a=r(n)?await n.invoke("createIndexThread",s,{transferList:o}):this.createIndexThread(s).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(e){const t=new Float64Array(e.position),r=this.createPooledRBush();return e.components?this.createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this.createIndexAllThread(r,t)}createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let o=0;o<t.length;o+=9)r[n++]=s(t,o+0,o+3,o+6);return e.load(r),{result:e.toJSON()}}createIndexComponentsThread(e,t,r){let n=0;for(const s of r)n+=s.length/3;const o=new Array(n);let a=0;for(const i of r)for(let e=0;e<i.length;e+=3)o[a++]=s(t,3*i[e+0],3*i[e+1],3*i[e+2]);return e.load(o),{result:e.toJSON()}}createMeshData(e){const t=(e.transform?_({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return !e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}createPooledRBush(){return new h(9,s$1("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function s(e,t,r,n){return {minX:Math.min(e[t+0],e[r+0],e[n+0]),maxX:Math.max(e[t+0],e[r+0],e[n+0]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[r+0],e[r+1],e[r+2]],p2:[e[n+0],e[n+1],e[n+2]]}}

export default o;
export { o as ElevationSamplerWorker };
