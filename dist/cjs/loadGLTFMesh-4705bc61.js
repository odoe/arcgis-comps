'use strict';

const Color = require('./Color-7d915caa.js');
const request = require('./messageBundle-8be88d04.js');
const mat3 = require('./mat3-1d3e0d51.js');
const quatf64 = require('./quatf64-e7a7f39e.js');
const common = require('./common-41a349f2.js');
const vec4f64 = require('./vec4f64-d3fa6cd2.js');
const MeshComponent = require('./MeshComponent-0dd8a7d1.js');
const BufferView = require('./BufferView-b78db189.js');
const vec33 = require('./vec33-1fc512be.js');
const DefaultMaterial_COLOR_GAMMA = require('./DefaultMaterial_COLOR_GAMMA-1f86519d.js');
const georeference = require('./georeference-1b2d8c01.js');
const geometryDataUtils = require('./geometryDataUtils-0be35629.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./index-fde8502c.js');
require('./persistableUrlUtils-c611d652.js');
require('./screenshotUtils-176d2414.js');
require('./vec2-d000a8cb.js');
require('./types-bcd9caf5.js');
require('./asyncUtils-cd78b718.js');
require('./mat4f64-fc3339e5.js');
require('./compilerUtils-56e51ed2.js');
require('./Version-55b8a4e7.js');
require('./mat4-f68486bc.js');
require('./quat-17613ceb.js');
require('./unitUtils-083cb8d0.js');
require('./projection-b19710fa.js');
require('./geometry-ef17530a.js');
require('./aaBoundingRect-56648c00.js');
require('./geodesicConstants-047d586a.js');
require('./axisAngleDegrees-e1bd0682.js');
require('./projection-ea955486.js');
require('./vectorStacks-f48a010a.js');
require('./vec2f64-60b3c97e.js');
require('./lineSegment-a86bf7bd.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function K(t,e,r){const o=new DefaultMaterial_COLOR_GAMMA.n(P(r)),n=(await DefaultMaterial_COLOR_GAMMA.l(o,e,r,!0)).model,i=n.lods.shift(),a=new Map,c=new Map;n.textures.forEach(((t,e)=>a.set(e,W(t)))),n.materials.forEach(((t,e)=>c.set(e,X(t,a))));const l=J(i);for(const s of l.parts)Y(l,s,c);const{position:u,normal:f,tangent:m,color:p,texCoord0:g}=l.vertexAttributes,x={position:u.typedBuffer,normal:request.r(f)?f.typedBuffer:null,tangent:request.r(m)?m.typedBuffer:null,uv:request.r(g)?g.typedBuffer:null,color:request.r(p)?p.typedBuffer:null},h=georeference.b(x,t,r);return {transform:h.transform,components:l.components,spatialReference:t.spatialReference,vertexAttributes:new MeshComponent.y({position:h.vertexAttributes.position,normal:h.vertexAttributes.normal,tangent:h.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function P(t){return null!=t&&t.resolveFile?{busy:!1,request:async(r,o,n)=>{const i=t.resolveFile(r),a="image"===o?"image":"binary"===o?"array-buffer":"json";return (await request.E(i,{responseType:a,signal:request.r(n)?n.signal:null})).data}}:null}function Q(t,e){if(request.t$1(t))return "-";const o=t.typedBuffer;return `${request.r$13(e,o.buffer,(()=>e.size))}/${o.byteOffset}/${o.byteLength}`}function H(t){return request.r(t)?t.toString():"-"}function J(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},n=new Map,s=new Map,i=[];for(const a of t.parts){const{attributes:{position:t,normal:c,color:l,tangent:u,texCoord0:f}}=a,m=`\n      ${Q(t,n)}/\n      ${Q(c,n)}/\n      ${Q(l,n)}/\n      ${Q(u,n)}/\n      ${Q(f,n)}/\n      ${H(a.transform)}\n    `;let p=!1;const d=request.r$13(s,m,(()=>(p=!0,{start:e,length:t.count})));p&&(e+=t.count),c&&(o.normal=!0),l&&(o.color=!0),u&&(o.tangent=!0),f&&(o.texCoord0=!0),i.push({gltf:a,writeVertices:p,region:d});}return {vertexAttributes:{position:DefaultMaterial_COLOR_GAMMA.r(BufferView.T,e),normal:o.normal?DefaultMaterial_COLOR_GAMMA.r(BufferView.i,e):null,tangent:o.tangent?DefaultMaterial_COLOR_GAMMA.r(BufferView.c,e):null,color:o.color?DefaultMaterial_COLOR_GAMMA.r(BufferView.x,e):null,texCoord0:o.texCoord0?DefaultMaterial_COLOR_GAMMA.r(BufferView.u,e):null},parts:i,components:[]}}function W(t){return new MeshComponent.m({data:t.data,wrap:rt(t.parameters.wrap)})}function X(e,r){const s=new Color.h(st(e.color,e.opacity)),i=e.emissiveFactor?new Color.h(it(e.emissiveFactor)):null;return new MeshComponent.c({color:s,colorTexture:request.e$2(request.o$6(e.textureColor,(t=>r.get(t)))),normalTexture:request.e$2(request.o$6(e.textureNormal,(t=>r.get(t)))),emissiveColor:i,emissiveTexture:request.e$2(request.o$6(e.textureEmissive,(t=>r.get(t)))),occlusionTexture:request.e$2(request.o$6(e.textureOcclusion,(t=>r.get(t)))),alphaMode:et(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:request.e$2(request.o$6(e.textureMetallicRoughness,(t=>r.get(t))))})}function Y(t,e,r){e.writeVertices&&Z(t,e);const o=e.gltf,n=tt(o.indices||o.attributes.position.count,o.primitiveType),s=e.region.start;if(s)for(let i=0;i<n.length;i++)n[i]+=s;t.components.push(new MeshComponent.f({faces:n,material:r.get(o.material),trustSourceNormals:!0}));}function Z(t,e){const{position:r,normal:o,tangent:n,color:i,texCoord0:l}=t.vertexAttributes,u=e.region.start,{attributes:f,transform:m}=e.gltf,p=f.position.count;if(vec33.e$1(r.slice(u,p),f.position,m),request.r(f.normal)&&request.r(o)){const t=mat3.j(quatf64.e(),m);vec33.f(o.slice(u,p),f.normal,t);}else request.r(o)&&vec33.t(o,0,0,1,{dstIndex:u,count:p});if(request.r(f.tangent)&&request.r(n)){const t=mat3.j(quatf64.e(),m);DefaultMaterial_COLOR_GAMMA.r$1(n.slice(u,p),f.tangent,t);}else request.r(n)&&DefaultMaterial_COLOR_GAMMA.t(n,0,0,1,1,{dstIndex:u,count:p});if(request.r(f.texCoord0)&&request.r(l)?DefaultMaterial_COLOR_GAMMA.r$2(l.slice(u,p),f.texCoord0):request.r(l)&&DefaultMaterial_COLOR_GAMMA.d(l,0,0,{dstIndex:u,count:p}),request.r(f.color)&&request.r(i)){const t=f.color,e=i.slice(u,p);if(4===t.elementCount)t instanceof BufferView.c?DefaultMaterial_COLOR_GAMMA.f(e,t,255):t instanceof BufferView.x?DefaultMaterial_COLOR_GAMMA.e(e,t):t instanceof BufferView.L&&DefaultMaterial_COLOR_GAMMA.o$2(e,t,8);else {DefaultMaterial_COLOR_GAMMA.t(e,255,255,255,255);const r=BufferView.O.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof BufferView.i?vec33.r(r,t,255):t instanceof BufferView.O?vec33.e(r,t):t instanceof BufferView.E&&vec33.n(r,t,8);}}else request.r(i)&&DefaultMaterial_COLOR_GAMMA.t(i.slice(u,p),255,255,255,255);}function tt(t,e){switch(e){case 4:return DefaultMaterial_COLOR_GAMMA.n$1(t,geometryDataUtils.a);case 5:return DefaultMaterial_COLOR_GAMMA.o$1(t);case 6:return DefaultMaterial_COLOR_GAMMA.i(t)}}function et(t){switch(t){case"OPAQUE":return "opaque";case"MASK":return "mask";case"BLEND":return "blend"}}function rt(t){return {horizontal:ot(t.s),vertical:ot(t.t)}}function ot(t){switch(t){case 33071:return "clamp";case 33648:return "mirror";case 10497:return "repeat"}}function nt(t){return t**(1/DefaultMaterial_COLOR_GAMMA.o)*255}function st(t,e){return vec4f64.r(nt(t[0]),nt(t[1]),nt(t[2]),e)}function it(t){return common.r(nt(t[0]),nt(t[1]),nt(t[2]))}

exports.loadGLTFMesh = K;
