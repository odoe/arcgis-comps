'use strict';

const unitUtils = require('./unitUtils-61d611e2.js');
const request = require('./messageBundle-312ceb47.js');
const mat3 = require('./mat3-1bc0ab17.js');
const quatf64 = require('./quatf64-755c8047.js');
const lineSegment = require('./lineSegment-25e194bd.js');
const meshFeatureSet = require('./meshFeatureSet-a2f3b664.js');
const BufferView = require('./BufferView-e93c0848.js');
const vec33 = require('./vec33-b2dc30c9.js');
const DefaultMaterial_COLOR_GAMMA = require('./DefaultMaterial_COLOR_GAMMA-b1f9831d.js');
const georeference = require('./georeference-cf83b2d2.js');
require('./JSONSupport-53c01d03.js');
require('./index-57f2cfbb.js');
require('./mat4f64-f8b0b0f1.js');
require('./vec2f64-c36614be.js');
require('./screenshotUtils-33e2013d.js');
require('./earcut-d5562923.js');
require('./deduplicate-f0696937.js');
require('./projection-e04cb9d0.js');
require('./mat4-1439266d.js');
require('./FeatureSet-2e9b97a5.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./vec2-65c4309d.js');
require('./types-b2f3d6c1.js');
require('./asyncUtils-9f974032.js');
require('./compilerUtils-54d3d3a9.js');
require('./Version-3676e068.js');
require('./quat-e40325e0.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function K(t,e,r){const o=new DefaultMaterial_COLOR_GAMMA.n(P(r)),n=(await DefaultMaterial_COLOR_GAMMA.l$1(o,e,r,!0)).model,i=n.lods.shift(),a=new Map,c=new Map;n.textures.forEach(((t,e)=>a.set(e,W(t)))),n.materials.forEach(((t,e)=>c.set(e,X(t,a))));const l=J(i);for(const s of l.parts)Y(l,s,c);const{position:u,normal:f,tangent:m,color:p,texCoord0:g}=l.vertexAttributes,x={position:u.typedBuffer,normal:request.r(f)?f.typedBuffer:null,tangent:request.r(m)?m.typedBuffer:null,uv:request.r(g)?g.typedBuffer:null,color:request.r(p)?p.typedBuffer:null},h=georeference.b(x,t,r);return {transform:h.transform,components:l.components,spatialReference:t.spatialReference,vertexAttributes:new meshFeatureSet.y({position:h.vertexAttributes.position,normal:h.vertexAttributes.normal,tangent:h.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function P(t){return null!=t&&t.resolveFile?{busy:!1,request:async(r,o,n)=>{const i=t.resolveFile(r),a="image"===o?"image":"binary"===o?"array-buffer":"json";return (await request.E(i,{responseType:a,signal:request.r(n)?n.signal:null})).data}}:null}function Q(t,e){if(request.t(t))return "-";const o=t.typedBuffer;return `${request.r$9(e,o.buffer,(()=>e.size))}/${o.byteOffset}/${o.byteLength}`}function H(t){return request.r(t)?t.toString():"-"}function J(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},n=new Map,s=new Map,i=[];for(const a of t.parts){const{attributes:{position:t,normal:c,color:l,tangent:u,texCoord0:f}}=a,m=`\n      ${Q(t,n)}/\n      ${Q(c,n)}/\n      ${Q(l,n)}/\n      ${Q(u,n)}/\n      ${Q(f,n)}/\n      ${H(a.transform)}\n    `;let p=!1;const d=request.r$9(s,m,(()=>(p=!0,{start:e,length:t.count})));p&&(e+=t.count),c&&(o.normal=!0),l&&(o.color=!0),u&&(o.tangent=!0),f&&(o.texCoord0=!0),i.push({gltf:a,writeVertices:p,region:d});}return {vertexAttributes:{position:DefaultMaterial_COLOR_GAMMA.r(BufferView.T,e),normal:o.normal?DefaultMaterial_COLOR_GAMMA.r(BufferView.i,e):null,tangent:o.tangent?DefaultMaterial_COLOR_GAMMA.r(BufferView.c,e):null,color:o.color?DefaultMaterial_COLOR_GAMMA.r(BufferView.x,e):null,texCoord0:o.texCoord0?DefaultMaterial_COLOR_GAMMA.r(BufferView.u,e):null},parts:i,components:[]}}function W(t){return new meshFeatureSet.m({data:t.data,wrap:rt(t.parameters.wrap)})}function X(e,r){const s=new unitUtils.h$1(st(e.color,e.opacity)),i=e.emissiveFactor?new unitUtils.h$1(it(e.emissiveFactor)):null;return new meshFeatureSet.c({color:s,colorTexture:request.e$3(request.o$3(e.textureColor,(t=>r.get(t)))),normalTexture:request.e$3(request.o$3(e.textureNormal,(t=>r.get(t)))),emissiveColor:i,emissiveTexture:request.e$3(request.o$3(e.textureEmissive,(t=>r.get(t)))),occlusionTexture:request.e$3(request.o$3(e.textureOcclusion,(t=>r.get(t)))),alphaMode:et(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:request.e$3(request.o$3(e.textureMetallicRoughness,(t=>r.get(t))))})}function Y(t,e,r){e.writeVertices&&Z(t,e);const o=e.gltf,n=tt(o.indices||o.attributes.position.count,o.primitiveType),s=e.region.start;if(s)for(let i=0;i<n.length;i++)n[i]+=s;t.components.push(new meshFeatureSet.f({faces:n,material:r.get(o.material),trustSourceNormals:!0}));}function Z(t,e){const{position:r,normal:o,tangent:n,color:i,texCoord0:l}=t.vertexAttributes,u=e.region.start,{attributes:f,transform:m}=e.gltf,p=f.position.count;if(vec33.e(r.slice(u,p),f.position,m),request.r(f.normal)&&request.r(o)){const t=mat3.j(quatf64.e$1(),m);vec33.f(o.slice(u,p),f.normal,t);}else request.r(o)&&vec33.t(o,0,0,1,{dstIndex:u,count:p});if(request.r(f.tangent)&&request.r(n)){const t=mat3.j(quatf64.e$1(),m);DefaultMaterial_COLOR_GAMMA.r$1(n.slice(u,p),f.tangent,t);}else request.r(n)&&DefaultMaterial_COLOR_GAMMA.t(n,0,0,1,1,{dstIndex:u,count:p});if(request.r(f.texCoord0)&&request.r(l)?DefaultMaterial_COLOR_GAMMA.r$2(l.slice(u,p),f.texCoord0):request.r(l)&&DefaultMaterial_COLOR_GAMMA.d(l,0,0,{dstIndex:u,count:p}),request.r(f.color)&&request.r(i)){const t=f.color,e=i.slice(u,p);if(4===t.elementCount)t instanceof BufferView.c?DefaultMaterial_COLOR_GAMMA.f(e,t,255):t instanceof BufferView.x?DefaultMaterial_COLOR_GAMMA.e(e,t):t instanceof BufferView.L&&DefaultMaterial_COLOR_GAMMA.o$2(e,t,8);else {DefaultMaterial_COLOR_GAMMA.t(e,255,255,255,255);const r=BufferView.O.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof BufferView.i?vec33.r(r,t,255):t instanceof BufferView.O?vec33.e$1(r,t):t instanceof BufferView.E&&vec33.n(r,t,8);}}else request.r(i)&&DefaultMaterial_COLOR_GAMMA.t(i.slice(u,p),255,255,255,255);}function tt(t,e){switch(e){case 4:return DefaultMaterial_COLOR_GAMMA.n$1(t,DefaultMaterial_COLOR_GAMMA.a);case 5:return DefaultMaterial_COLOR_GAMMA.o$1(t);case 6:return DefaultMaterial_COLOR_GAMMA.i(t)}}function et(t){switch(t){case"OPAQUE":return "opaque";case"MASK":return "mask";case"BLEND":return "blend"}}function rt(t){return {horizontal:ot(t.s),vertical:ot(t.t)}}function ot(t){switch(t){case 33071:return "clamp";case 33648:return "mirror";case 10497:return "repeat"}}function nt(t){return t**(1/DefaultMaterial_COLOR_GAMMA.o)*255}function st(t,e){return lineSegment.r$1(nt(t[0]),nt(t[1]),nt(t[2]),e)}function it(t){return unitUtils.r$7(nt(t[0]),nt(t[1]),nt(t[2]))}

exports.loadGLTFMesh = K;