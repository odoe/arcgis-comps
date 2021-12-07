import { h } from './Color-d1b9b54f.js';
import { V as e, bp as o, A as r$1, cZ as r$2, af as t$2, Q as E$1 } from './messageBundle-f75b4090.js';
import { j } from './mat3-6a23d9ad.js';
import { e as e$2 } from './quatf64-b9feea68.js';
import { r as r$4 } from './common-d5b993de.js';
import { r as r$3 } from './vec4f64-2ec4ac08.js';
import { m, c, y, f } from './MeshComponent-3b6a4fdf.js';
import { T, i, c as c$1, x, u, L, O, E } from './BufferView-35ef10d7.js';
import { a as e$1, f as f$1, t, r as r$7, e as e$4, n } from './vec33-df10f43c.js';
import { l, r, o as o$1, a as r$5, t as t$1, b as r$6, g as d, f as f$2, e as e$3, h as o$2, i as i$1, c as o$3, d as n$1, n as n$2 } from './DefaultMaterial_COLOR_GAMMA-f230b01e.js';
import { b } from './georeference-566cede5.js';
import { a } from './geometryDataUtils-7e4c8d4a.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './index-b157fcf2.js';
import './persistableUrlUtils-40bbec67.js';
import './screenshotUtils-f9728729.js';
import './vec2-5672471e.js';
import './types-c8f64c05.js';
import './asyncUtils-fe35d349.js';
import './mat4f64-677a419d.js';
import './compilerUtils-848c8917.js';
import './Version-9295fea2.js';
import './mat4-f34c6460.js';
import './quat-2d7a417b.js';
import './unitUtils-38774114.js';
import './projection-f3d8779d.js';
import './geometry-7e07b1ba.js';
import './aaBoundingRect-9468599b.js';
import './geodesicConstants-54cb88d4.js';
import './axisAngleDegrees-8d7a62d6.js';
import './projection-5f2268ed.js';
import './vectorStacks-9205ea46.js';
import './vec2f64-35868783.js';
import './lineSegment-4881dbd9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function K(t,e,r){const o=new n$2(P(r)),n=(await l(o,e,r,!0)).model,i=n.lods.shift(),a=new Map,c=new Map;n.textures.forEach(((t,e)=>a.set(e,W(t)))),n.materials.forEach(((t,e)=>c.set(e,X(t,a))));const l$1=J(i);for(const s of l$1.parts)Y(l$1,s,c);const{position:u,normal:f,tangent:m,color:p,texCoord0:g}=l$1.vertexAttributes,x={position:u.typedBuffer,normal:r$1(f)?f.typedBuffer:null,tangent:r$1(m)?m.typedBuffer:null,uv:r$1(g)?g.typedBuffer:null,color:r$1(p)?p.typedBuffer:null},h=b(x,t,r);return {transform:h.transform,components:l$1.components,spatialReference:t.spatialReference,vertexAttributes:new y({position:h.vertexAttributes.position,normal:h.vertexAttributes.normal,tangent:h.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function P(t){return null!=t&&t.resolveFile?{busy:!1,request:async(r,o,n)=>{const i=t.resolveFile(r),a="image"===o?"image":"binary"===o?"array-buffer":"json";return (await E$1(i,{responseType:a,signal:r$1(n)?n.signal:null})).data}}:null}function Q(t,e){if(t$2(t))return "-";const o=t.typedBuffer;return `${r$2(e,o.buffer,(()=>e.size))}/${o.byteOffset}/${o.byteLength}`}function H(t){return r$1(t)?t.toString():"-"}function J(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},n=new Map,s=new Map,i$1=[];for(const a of t.parts){const{attributes:{position:t,normal:c,color:l,tangent:u,texCoord0:f}}=a,m=`\n      ${Q(t,n)}/\n      ${Q(c,n)}/\n      ${Q(l,n)}/\n      ${Q(u,n)}/\n      ${Q(f,n)}/\n      ${H(a.transform)}\n    `;let p=!1;const d=r$2(s,m,(()=>(p=!0,{start:e,length:t.count})));p&&(e+=t.count),c&&(o.normal=!0),l&&(o.color=!0),u&&(o.tangent=!0),f&&(o.texCoord0=!0),i$1.push({gltf:a,writeVertices:p,region:d});}return {vertexAttributes:{position:r(T,e),normal:o.normal?r(i,e):null,tangent:o.tangent?r(c$1,e):null,color:o.color?r(x,e):null,texCoord0:o.texCoord0?r(u,e):null},parts:i$1,components:[]}}function W(t){return new m({data:t.data,wrap:rt(t.parameters.wrap)})}function X(e$1,r){const s=new h(st(e$1.color,e$1.opacity)),i=e$1.emissiveFactor?new h(it(e$1.emissiveFactor)):null;return new c({color:s,colorTexture:e(o(e$1.textureColor,(t=>r.get(t)))),normalTexture:e(o(e$1.textureNormal,(t=>r.get(t)))),emissiveColor:i,emissiveTexture:e(o(e$1.textureEmissive,(t=>r.get(t)))),occlusionTexture:e(o(e$1.textureOcclusion,(t=>r.get(t)))),alphaMode:et(e$1.alphaMode),alphaCutoff:e$1.alphaCutoff,doubleSided:e$1.doubleSided,metallic:e$1.metallicFactor,roughness:e$1.roughnessFactor,metallicRoughnessTexture:e(o(e$1.textureMetallicRoughness,(t=>r.get(t))))})}function Y(t,e,r){e.writeVertices&&Z(t,e);const o=e.gltf,n=tt(o.indices||o.attributes.position.count,o.primitiveType),s=e.region.start;if(s)for(let i=0;i<n.length;i++)n[i]+=s;t.components.push(new f({faces:n,material:r.get(o.material),trustSourceNormals:!0}));}function Z(t$2,e){const{position:r,normal:o,tangent:n$1,color:i$1,texCoord0:l}=t$2.vertexAttributes,u=e.region.start,{attributes:f,transform:m}=e.gltf,p=f.position.count;if(e$1(r.slice(u,p),f.position,m),r$1(f.normal)&&r$1(o)){const t=j(e$2(),m);f$1(o.slice(u,p),f.normal,t);}else r$1(o)&&t(o,0,0,1,{dstIndex:u,count:p});if(r$1(f.tangent)&&r$1(n$1)){const t=j(e$2(),m);r$5(n$1.slice(u,p),f.tangent,t);}else r$1(n$1)&&t$1(n$1,0,0,1,1,{dstIndex:u,count:p});if(r$1(f.texCoord0)&&r$1(l)?r$6(l.slice(u,p),f.texCoord0):r$1(l)&&d(l,0,0,{dstIndex:u,count:p}),r$1(f.color)&&r$1(i$1)){const t=f.color,e=i$1.slice(u,p);if(4===t.elementCount)t instanceof c$1?f$2(e,t,255):t instanceof x?e$3(e,t):t instanceof L&&o$2(e,t,8);else {t$1(e,255,255,255,255);const r=O.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof i?r$7(r,t,255):t instanceof O?e$4(r,t):t instanceof E&&n(r,t,8);}}else r$1(i$1)&&t$1(i$1.slice(u,p),255,255,255,255);}function tt(t,e){switch(e){case 4:return n$1(t,a);case 5:return o$3(t);case 6:return i$1(t)}}function et(t){switch(t){case"OPAQUE":return "opaque";case"MASK":return "mask";case"BLEND":return "blend"}}function rt(t){return {horizontal:ot(t.s),vertical:ot(t.t)}}function ot(t){switch(t){case 33071:return "clamp";case 33648:return "mirror";case 10497:return "repeat"}}function nt(t){return t**(1/o$1)*255}function st(t,e){return r$3(nt(t[0]),nt(t[1]),nt(t[2]),e)}function it(t){return r$4(nt(t[0]),nt(t[1]),nt(t[2]))}

export { K as loadGLTFMesh };
