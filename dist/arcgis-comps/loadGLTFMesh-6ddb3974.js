import { h } from './Color-ed0bfbe9.js';
import { E, r, c as e, bg as o, t, c0 as r$2 } from './cast-e5ea2533.js';
import { j } from './mat3-a17f4d79.js';
import { a as e$2 } from './quatf64-f945f11e.js';
import { r as r$4 } from './common-e2a70efa.js';
import { r as r$3 } from './vec4f64-42a71444.js';
import { m, c, y, f } from './meshFeatureSet-a9d175f0.js';
import { T, i, c as c$1, x, u, L, O, E as E$1 } from './BufferView-9efd2fd0.js';
import { e as e$1, f as f$1, t as t$1, r as r$7, a as e$4, n as n$1 } from './vec33-fa43135d.js';
import { n, a as l, r as r$1, o as o$1, b as r$5, t as t$2, c as r$6, j as d, f as f$2, e as e$3, k as o$2, i as i$1, d as o$3, g as n$2, m as a } from './DefaultMaterial_COLOR_GAMMA-05ea34e5.js';
import { b } from './georeference-514b3b89.js';
import './colorUtils-37750ea3.js';
import './mathUtils-cc1689ad.js';
import './Graphic-79de2095.js';
import './geometry-160ffbb5.js';
import './Portal-f1457cb4.js';
import './JSONSupport-8dda8bae.js';
import './Polyline-56152656.js';
import './PopupTemplate-87ca9924.js';
import './Collection-ac20f1a1.js';
import './opacityUtils-5755cb64.js';
import './enumeration-da141e85.js';
import './number-2da43364.js';
import './Identifiable-0fb3fc58.js';
import './symbols-dc010d3b.js';
import './Symbol-ac21e497.js';
import './screenUtils-9ed89fa7.js';
import './aaBoundingBox-e0a84875.js';
import './aaBoundingRect-2a187de3.js';
import './persistableUrlUtils-a9da326c.js';
import './collectionUtils-b35b097b.js';
import './screenshotUtils-35d11065.js';
import './earcut-05cd758b.js';
import './deduplicate-fd163946.js';
import './projection-cca7ffa7.js';
import './unitUtils-5dcccb3c.js';
import './mat4-0196b8fc.js';
import './assets-1ab0ccbe.js';
import './mat4f64-f06bdb4b.js';
import './FeatureSet-c6e91f97.js';
import './Field-67832b5b.js';
import './fieldType-7f6b02ef.js';
import './vec2-a8a62c12.js';
import './types-0d4888e0.js';
import './asyncUtils-847ae6e6.js';
import './compilerUtils-2d7ddb00.js';
import './Version-f16e65fc.js';
import './quat-350b47f0.js';
import './lineSegment-7f6c09cf.js';
import './vec2f64-503345b4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function K(t,e,r$1){const o=new n(P(r$1)),n$1=(await l(o,e,r$1,!0)).model,i=n$1.lods.shift(),a=new Map,c=new Map;n$1.textures.forEach(((t,e)=>a.set(e,W(t)))),n$1.materials.forEach(((t,e)=>c.set(e,X(t,a))));const l$1=J(i);for(const s of l$1.parts)Y(l$1,s,c);const{position:u,normal:f,tangent:m,color:p,texCoord0:g}=l$1.vertexAttributes,x={position:u.typedBuffer,normal:r(f)?f.typedBuffer:null,tangent:r(m)?m.typedBuffer:null,uv:r(g)?g.typedBuffer:null,color:r(p)?p.typedBuffer:null},h=b(x,t,r$1);return {transform:h.transform,components:l$1.components,spatialReference:t.spatialReference,vertexAttributes:new y({position:h.vertexAttributes.position,normal:h.vertexAttributes.normal,tangent:h.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function P(t){return null!=t&&t.resolveFile?{busy:!1,request:async(r$1,o,n)=>{const i=t.resolveFile(r$1),a="image"===o?"image":"binary"===o?"array-buffer":"json";return (await E(i,{responseType:a,signal:r(n)?n.signal:null})).data}}:null}function Q(t$1,e){if(t(t$1))return "-";const o=t$1.typedBuffer;return `${r$2(e,o.buffer,(()=>e.size))}/${o.byteOffset}/${o.byteLength}`}function H(t){return r(t)?t.toString():"-"}function J(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},n=new Map,s=new Map,i$1=[];for(const a of t.parts){const{attributes:{position:t,normal:c,color:l,tangent:u,texCoord0:f}}=a,m=`\n      ${Q(t,n)}/\n      ${Q(c,n)}/\n      ${Q(l,n)}/\n      ${Q(u,n)}/\n      ${Q(f,n)}/\n      ${H(a.transform)}\n    `;let p=!1;const d=r$2(s,m,(()=>(p=!0,{start:e,length:t.count})));p&&(e+=t.count),c&&(o.normal=!0),l&&(o.color=!0),u&&(o.tangent=!0),f&&(o.texCoord0=!0),i$1.push({gltf:a,writeVertices:p,region:d});}return {vertexAttributes:{position:r$1(T,e),normal:o.normal?r$1(i,e):null,tangent:o.tangent?r$1(c$1,e):null,color:o.color?r$1(x,e):null,texCoord0:o.texCoord0?r$1(u,e):null},parts:i$1,components:[]}}function W(t){return new m({data:t.data,wrap:rt(t.parameters.wrap)})}function X(e$1,r){const s=new h(st(e$1.color,e$1.opacity)),i=e$1.emissiveFactor?new h(it(e$1.emissiveFactor)):null;return new c({color:s,colorTexture:e(o(e$1.textureColor,(t=>r.get(t)))),normalTexture:e(o(e$1.textureNormal,(t=>r.get(t)))),emissiveColor:i,emissiveTexture:e(o(e$1.textureEmissive,(t=>r.get(t)))),occlusionTexture:e(o(e$1.textureOcclusion,(t=>r.get(t)))),alphaMode:et(e$1.alphaMode),alphaCutoff:e$1.alphaCutoff,doubleSided:e$1.doubleSided,metallic:e$1.metallicFactor,roughness:e$1.roughnessFactor,metallicRoughnessTexture:e(o(e$1.textureMetallicRoughness,(t=>r.get(t))))})}function Y(t,e,r){e.writeVertices&&Z(t,e);const o=e.gltf,n=tt(o.indices||o.attributes.position.count,o.primitiveType),s=e.region.start;if(s)for(let i=0;i<n.length;i++)n[i]+=s;t.components.push(new f({faces:n,material:r.get(o.material),trustSourceNormals:!0}));}function Z(t,e){const{position:r$1,normal:o,tangent:n,color:i$1,texCoord0:l}=t.vertexAttributes,u=e.region.start,{attributes:f,transform:m}=e.gltf,p=f.position.count;if(e$1(r$1.slice(u,p),f.position,m),r(f.normal)&&r(o)){const t=j(e$2(),m);f$1(o.slice(u,p),f.normal,t);}else r(o)&&t$1(o,0,0,1,{dstIndex:u,count:p});if(r(f.tangent)&&r(n)){const t=j(e$2(),m);r$5(n.slice(u,p),f.tangent,t);}else r(n)&&t$2(n,0,0,1,1,{dstIndex:u,count:p});if(r(f.texCoord0)&&r(l)?r$6(l.slice(u,p),f.texCoord0):r(l)&&d(l,0,0,{dstIndex:u,count:p}),r(f.color)&&r(i$1)){const t=f.color,e=i$1.slice(u,p);if(4===t.elementCount)t instanceof c$1?f$2(e,t,255):t instanceof x?e$3(e,t):t instanceof L&&o$2(e,t,8);else {t$2(e,255,255,255,255);const r=O.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof i?r$7(r,t,255):t instanceof O?e$4(r,t):t instanceof E$1&&n$1(r,t,8);}}else r(i$1)&&t$2(i$1.slice(u,p),255,255,255,255);}function tt(t,e){switch(e){case 4:return n$2(t,a);case 5:return o$3(t);case 6:return i$1(t)}}function et(t){switch(t){case"OPAQUE":return "opaque";case"MASK":return "mask";case"BLEND":return "blend"}}function rt(t){return {horizontal:ot(t.s),vertical:ot(t.t)}}function ot(t){switch(t){case 33071:return "clamp";case 33648:return "mirror";case 10497:return "repeat"}}function nt(t){return t**(1/o$1)*255}function st(t,e){return r$3(nt(t[0]),nt(t[1]),nt(t[2]),e)}function it(t){return r$4(nt(t[0]),nt(t[1]),nt(t[2]))}

export { K as loadGLTFMesh };
