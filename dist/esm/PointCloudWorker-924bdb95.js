import { cT as o, A as r, a0 as k } from './messageBundle-f75b4090.js';
import { w } from './quat-2d7a417b.js';
import { n } from './quatf32-a39c89f4.js';
import { P } from './mathUtils-e16f9389.js';
import { t, n as n$1 } from './vec3f32-109cf143.js';
import { x as xn } from './projection-f3d8779d.js';
import { c as c$1, a, u, m } from './PointCloudWorkerUtil-878a9bce.js';
import './index-b157fcf2.js';
import './quatf64-b9feea68.js';
import './common-d5b993de.js';
import './unitUtils-38774114.js';
import './mat4-f34c6460.js';
import './geometry-7e07b1ba.js';
import './aaBoundingRect-9468599b.js';
import './geodesicConstants-54cb88d4.js';
import './PointCloudUniqueValueRenderer-e333fb2f.js';
import './enumeration-d3301938.js';
import './ColorStop-d4fc22fe.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './I3SBinaryReader-79b58caf.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class p{transform(e){const a=this._transform(e),o$1=[a.points.buffer,a.rgb.buffer];r(a.pointIdFilterMap)&&o$1.push(a.pointIdFilterMap.buffer);for(const t of a.attributes)"buffer"in t.values&&o(t.values.buffer)&&t.values.buffer!==a.rgb.buffer&&o$1.push(t.values.buffer);return Promise.resolve({result:a,transferList:o$1})}_transform(r$1){const e=c$1(r$1.schema,r$1.geometryBuffer);let a$1=e.length/3,o=null;const f=[],s=a(r$1.primaryAttributeData,e,a$1);r(r$1.primaryAttributeData)&&s&&f.push({attributeInfo:r$1.primaryAttributeData.attributeInfo,values:s});const i=a(r$1.modulationAttributeData,e,a$1);r(r$1.modulationAttributeData)&&i&&f.push({attributeInfo:r$1.modulationAttributeData.attributeInfo,values:i});let p=u(r$1.rendererInfo,s,i,a$1);if(r$1.filterInfo&&r$1.filterInfo.length>0&&r(r$1.filterAttributesData)){const t=r$1.filterAttributesData.map((t=>{const r=a(t,e,a$1),o={attributeInfo:t.attributeInfo,values:r};return f.push(o),o}));o=new Uint32Array(a$1),a$1=m(e,p,o,r$1.filterInfo,t);}for(const t of r$1.userAttributesData){const r=a(t,e,a$1);f.push({attributeInfo:t.attributeInfo,values:r});}3*a$1<p.length&&(p=new Uint8Array(p.buffer.slice(0,3*a$1))),this._applyElevationOffsetInPlace(e,a$1,r$1.elevationOffset);const c=this._transformCoordinates(e,a$1,r$1.obb,k.fromJSON(r$1.inSR),k.fromJSON(r$1.outSR));return {obb:r$1.obb,points:c,rgb:p,attributes:f,pointIdFilterMap:o}}_transformCoordinates(t$1,r,a,n,u){if(!xn(t$1,n,0,t$1,u,0,r))throw Error("Can't reproject");const l=t(a.center[0],a.center[1],a.center[2]),b=n$1(),m=n$1();w(c,a.quaternion);const p=new Float32Array(3*r);for(let e=0;e<r;e++)b[0]=t$1[3*e]-l[0],b[1]=t$1[3*e+1]-l[1],b[2]=t$1[3*e+2]-l[2],P(m,b,c),a.halfSize[0]=Math.max(a.halfSize[0],Math.abs(m[0])),a.halfSize[1]=Math.max(a.halfSize[1],Math.abs(m[1])),a.halfSize[2]=Math.max(a.halfSize[2],Math.abs(m[2])),p[3*e]=b[0],p[3*e+1]=b[1],p[3*e+2]=b[2];return p}_applyElevationOffsetInPlace(t,r,e){if(0!==e)for(let a=0;a<r;a++)t[3*a+2]+=e;}}const c=n();function h(){return new p}

export default h;
