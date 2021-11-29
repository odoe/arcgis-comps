import { bC as e, jX as o, r as r$1, jU as r$2, bo as h, jl as r$3, Y as r$4, f8 as j, t as t$2, E as E$1 } from './index.js';
import { a as e$2 } from './quatf64.js';
import { m, c, y, f } from './meshFeatureSet.js';
import { T, i, c as c$1, x, u, L, O, E } from './BufferView.js';
import { e as e$1, f as f$1, t, r as r$7, a as e$4, n } from './vec33.js';
import { a as l, r, o as o$1, b as r$5, t as t$1, c as r$6, j as d, f as f$2, e as e$3, k as o$2, i as i$1, d as o$3, g as n$1, m as a, n as n$2 } from './DefaultMaterial_COLOR_GAMMA.js';
import { b } from './georeference.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function K(t,e,r){const o=new n$2(P(r)),n=(await l(o,e,r,!0)).model,i=n.lods.shift(),a=new Map,c=new Map;n.textures.forEach(((t,e)=>a.set(e,W(t)))),n.materials.forEach(((t,e)=>c.set(e,X(t,a))));const l$1=J(i);for(const s of l$1.parts)Y(l$1,s,c);const{position:u,normal:f,tangent:m,color:p,texCoord0:g}=l$1.vertexAttributes,x={position:u.typedBuffer,normal:r$1(f)?f.typedBuffer:null,tangent:r$1(m)?m.typedBuffer:null,uv:r$1(g)?g.typedBuffer:null,color:r$1(p)?p.typedBuffer:null},h=b(x,t,r);return {transform:h.transform,components:l$1.components,spatialReference:t.spatialReference,vertexAttributes:new y({position:h.vertexAttributes.position,normal:h.vertexAttributes.normal,tangent:h.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function P(t){return null!=t&&t.resolveFile?{busy:!1,request:async(r,o,n)=>{const i=t.resolveFile(r),a="image"===o?"image":"binary"===o?"array-buffer":"json";return (await E$1(i,{responseType:a,signal:r$1(n)?n.signal:null})).data}}:null}function Q(t,e){if(t$2(t))return "-";const o=t.typedBuffer;return `${r$2(e,o.buffer,(()=>e.size))}/${o.byteOffset}/${o.byteLength}`}function H(t){return r$1(t)?t.toString():"-"}function J(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},n=new Map,s=new Map,i$1=[];for(const a of t.parts){const{attributes:{position:t,normal:c,color:l,tangent:u,texCoord0:f}}=a,m=`\n      ${Q(t,n)}/\n      ${Q(c,n)}/\n      ${Q(l,n)}/\n      ${Q(u,n)}/\n      ${Q(f,n)}/\n      ${H(a.transform)}\n    `;let p=!1;const d=r$2(s,m,(()=>(p=!0,{start:e,length:t.count})));p&&(e+=t.count),c&&(o.normal=!0),l&&(o.color=!0),u&&(o.tangent=!0),f&&(o.texCoord0=!0),i$1.push({gltf:a,writeVertices:p,region:d});}return {vertexAttributes:{position:r(T,e),normal:o.normal?r(i,e):null,tangent:o.tangent?r(c$1,e):null,color:o.color?r(x,e):null,texCoord0:o.texCoord0?r(u,e):null},parts:i$1,components:[]}}function W(t){return new m({data:t.data,wrap:rt(t.parameters.wrap)})}function X(e$1,r){const s=new h(st(e$1.color,e$1.opacity)),i=e$1.emissiveFactor?new h(it(e$1.emissiveFactor)):null;return new c({color:s,colorTexture:e(o(e$1.textureColor,(t=>r.get(t)))),normalTexture:e(o(e$1.textureNormal,(t=>r.get(t)))),emissiveColor:i,emissiveTexture:e(o(e$1.textureEmissive,(t=>r.get(t)))),occlusionTexture:e(o(e$1.textureOcclusion,(t=>r.get(t)))),alphaMode:et(e$1.alphaMode),alphaCutoff:e$1.alphaCutoff,doubleSided:e$1.doubleSided,metallic:e$1.metallicFactor,roughness:e$1.roughnessFactor,metallicRoughnessTexture:e(o(e$1.textureMetallicRoughness,(t=>r.get(t))))})}function Y(t,e,r){e.writeVertices&&Z(t,e);const o=e.gltf,n=tt(o.indices||o.attributes.position.count,o.primitiveType),s=e.region.start;if(s)for(let i=0;i<n.length;i++)n[i]+=s;t.components.push(new f({faces:n,material:r.get(o.material),trustSourceNormals:!0}));}function Z(t$2,e){const{position:r,normal:o,tangent:n$1,color:i$1,texCoord0:l}=t$2.vertexAttributes,u=e.region.start,{attributes:f,transform:m}=e.gltf,p=f.position.count;if(e$1(r.slice(u,p),f.position,m),r$1(f.normal)&&r$1(o)){const t=j(e$2(),m);f$1(o.slice(u,p),f.normal,t);}else r$1(o)&&t(o,0,0,1,{dstIndex:u,count:p});if(r$1(f.tangent)&&r$1(n$1)){const t=j(e$2(),m);r$5(n$1.slice(u,p),f.tangent,t);}else r$1(n$1)&&t$1(n$1,0,0,1,1,{dstIndex:u,count:p});if(r$1(f.texCoord0)&&r$1(l)?r$6(l.slice(u,p),f.texCoord0):r$1(l)&&d(l,0,0,{dstIndex:u,count:p}),r$1(f.color)&&r$1(i$1)){const t=f.color,e=i$1.slice(u,p);if(4===t.elementCount)t instanceof c$1?f$2(e,t,255):t instanceof x?e$3(e,t):t instanceof L&&o$2(e,t,8);else {t$1(e,255,255,255,255);const r=O.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof i?r$7(r,t,255):t instanceof O?e$4(r,t):t instanceof E&&n(r,t,8);}}else r$1(i$1)&&t$1(i$1.slice(u,p),255,255,255,255);}function tt(t,e){switch(e){case 4:return n$1(t,a);case 5:return o$3(t);case 6:return i$1(t)}}function et(t){switch(t){case"OPAQUE":return "opaque";case"MASK":return "mask";case"BLEND":return "blend"}}function rt(t){return {horizontal:ot(t.s),vertical:ot(t.t)}}function ot(t){switch(t){case 33071:return "clamp";case 33648:return "mirror";case 10497:return "repeat"}}function nt(t){return t**(1/o$1)*255}function st(t,e){return r$3(nt(t[0]),nt(t[1]),nt(t[2]),e)}function it(t){return r$4(nt(t[0]),nt(t[1]),nt(t[2]))}

export { K as loadGLTFMesh };
