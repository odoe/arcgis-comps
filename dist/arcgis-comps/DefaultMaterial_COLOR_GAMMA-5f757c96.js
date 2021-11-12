import { b as e$5 } from './vec33-f51ed597.js';
import { c as c$3, u as u$2, r as r$5, e as e$6 } from './types-749f7dad.js';
import { a2 as G$1, ad as h$2, cx as H$1, g as t$9, E, ak as b$1, h as s$2, f as s$3, an as V$2, cy as r$6, Y as T, A as r$8, c1 as i$5, cv as e$a } from './jsxFactory-a3b6abde.js';
import { a as a$2 } from './asyncUtils-9a49e799.js';
import { e as e$8, n as n$6 } from './mat4f64-f06bdb4b.js';
import { n as n$5 } from './compilerUtils-a5ae094d.js';
import { r as r$7 } from './Version-6b31ee09.js';
import { e as e$7, c as c$5, f as f$4, i as i$4, g as g$2 } from './mat4-3acd3594.js';
import { P as P$1 } from './quat-09acf431.js';
import { e as e$9 } from './quatf64-f945f11e.js';
import { B, g as g$1, d as d$3, i as i$3, c as c$4, u as u$3, x as x$2, L, O as O$1, E as E$1, F as F$1, w as w$2, q as q$2, A as A$1, V as V$3 } from './BufferView-f82aeb44.js';
import { cq as t$a, a4 as n$7, b9 as r$9, aW as c$6, aS as _$1, aQ as z, aG as d$4, aU as u$4, aT as s$4, aP as o$6, d9 as S$1 } from './Graphic-08cda9ca.js';
import { c as c$7, b as b$2, m as m$1, s as s$5, v as v$1 } from './lineSegment-a640b054.js';
import { d as d$5 } from './vec2-42a7347f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$8(t,r,f){if(t.count!==r.count)return void e$5.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],m=f[9],B=f[10],h=f[11],l=f[12],S=f[13],b=f[14],v=f[15],M=t.typedBuffer,_=t.typedBufferStride,g=r.typedBuffer,j=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*_,r=e*j,f=g[r],o=g[r+1],x=g[r+2],z=g[r+3];M[t]=n*f+c*o+y*x+l*z,M[t+1]=u*f+i*o+m*x+S*z,M[t+2]=d*f+a*o+B*x+b*z,M[t+3]=s*f+p*o+h*x+v*z;}}function r$4(t,r,f){if(t.count!==r.count)return void e$5.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],m=t.typedBuffer,B=t.typedBufferStride,h=r.typedBuffer,l=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*B,r=e*l,f=h[r],o=h[r+1],S=h[r+2],b=h[r+3];m[t]=n*f+s*o+a*S,m[t+1]=u*f+c*o+p*S,m[t+2]=d*f+i*o+y*S,m[t+3]=b;}}function f$3(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=r*u[t],o[e+1]=r*u[t+1],o[e+2]=r*u[t+2],o[e+3]=r*u[t+3];}}function o$5(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=u[t]>>r,o[e+1]=u[t+1]>>r,o[e+2]=u[t+2]>>r,o[e+3]=u[t+3]>>r;}}const n$4=Object.freeze({__proto__:null,transformMat4:t$8,transformMat3:r$4,scale:f$3,shiftRight:o$5});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$4(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*f,u=(r&&r.srcIndex?r.srcIndex:0)*o;for(let p=0;p<c;++p){for(let e=0;e<9;++e)d[s+e]=n[u+e];s+=f,u+=o;}}const t$7=Object.freeze({__proto__:null,copy:e$4});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$3(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*f,u=(r&&r.srcIndex?r.srcIndex:0)*o;for(let p=0;p<c;++p){for(let e=0;e<16;++e)d[s+e]=n[u+e];s+=f,u+=o;}}const t$6=Object.freeze({__proto__:null,copy:e$3});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$2(e,t,n){const r=e.typedBuffer,o=e.typedBufferStride,c=t.typedBuffer,d=t.typedBufferStride,f=n?n.count:t.count;let s=(n&&n.dstIndex?n.dstIndex:0)*o,u=(n&&n.srcIndex?n.srcIndex:0)*d;for(let p=0;p<f;++p)r[s]=c[u],s+=o,u+=d;}function t$5(e,t){const n=e.count;t||(t=new e.TypedArrayConstructor(n));for(let r=0;r<n;r++)t[r]=e.get(r);return t}const n$3=Object.freeze({__proto__:null,copy:e$2,makeDense:t$5});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f$2(e,t,n){const f=e.typedBuffer,r=e.typedBufferStride,d=t.typedBuffer,o=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*r,s=(n&&n.srcIndex?n.srcIndex:0)*o;for(let c=0;c<u;++c)f[l]=d[s],f[l+1]=d[s+1],l+=r,s+=o;}function r$3(r,d,o){const u=r.typedBuffer,l=r.typedBufferStride,s=d.typedBuffer,c=d.typedBufferStride,p=o?o.count:d.count;let y=(o&&o.dstIndex?o.dstIndex:0)*l,i=(o&&o.srcIndex?o.srcIndex:0)*c;if(c$3(d.elementType)){const e=u$2(d.elementType);if(r$5(d.elementType))for(let t=0;t<p;++t)u[y]=Math.max(s[i]/e,-1),u[y+1]=Math.max(s[i+1]/e,-1),y+=l,i+=c;else for(let t=0;t<p;++t)u[y]=s[i]/e,u[y+1]=s[i+1]/e,y+=l,i+=c;}else f$2(r,d,o);return r}function d$2(e,t,n,f){var r,d;const o=e.typedBuffer,u=e.typedBufferStride,l=null!=(r=null==f?void 0:f.count)?r:e.count;let s=(null!=(d=null==f?void 0:f.dstIndex)?d:0)*u;for(let c=0;c<l;++c)o[s]=t,o[s+1]=n,s+=u;}const o$4=Object.freeze({__proto__:null,copy:f$2,normalizeIntegerBuffer:r$3,fill:d$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$1(e,t,n){const d=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,r=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*f,c=(n&&n.srcIndex?n.srcIndex:0)*r;for(let s=0;s<u;++s)d[l]=o[c],d[l+1]=o[c+1],d[l+2]=o[c+2],d[l+3]=o[c+3],l+=f,c+=r;}function t$4(e,t,n,d,f,o){var r,u;const l=e.typedBuffer,c=e.typedBufferStride,s=null!=(r=null==o?void 0:o.count)?r:e.count;let p=(null!=(u=null==o?void 0:o.dstIndex)?u:0)*c;for(let i=0;i<s;++i)l[p]=t,l[p+1]=n,l[p+2]=d,l[p+3]=f,p+=c;}const n$2=Object.freeze({__proto__:null,copy:e$1,fill:t$4});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$2(s,r){return new s(new ArrayBuffer(r*s.ElementCount*e$6(s.ElementType)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n$1{constructor(r){this.streamDataRequester=r;}async loadJSON(r,e){return this.load("json",r,e)}async loadBinary(r,e){return G$1(r)?(h$2(e),H$1(r)):this.load("binary",r,e)}async loadImage(r,e){return this.load("image",r,e)}async load(t,i,m){if(t$9(this.streamDataRequester))return (await E(i,{responseType:c$2[t]})).data;const n=await a$2(this.streamDataRequester.request(i,t,m));if(!0===n.ok)return n.value;throw b$1(n.error),new s$2("",`Request for resource failed: ${n.error}`)}}const c$2={image:"image",binary:"array-buffer",json:"json"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$3=s$3.getLogger("esri.views.3d.glTF");class t$3{error(e){throw new s$2("gltf-loader-error",e)}errorUnsupported(e){throw new s$2("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(r,e){r&&this.errorUnsupported(e);}assert(r,e){r||this.error(e);}warn(r){o$3.warn(r);}warnUnsupported(r){this.warn("[Unsupported Feature] "+r);}warnUnsupportedIf(r,e){r&&this.warnUnsupported(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e={}){return {color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function t$2(e,t={}){return {data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$1{constructor(t){this.data=t,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4));}readUint32(){const t=this.offset4;return this.offset4+=1,this.dataUint32[t]}readUint8Array(t){const s=4*this.offset4;return this.offset4+=t/4,new Uint8Array(this.data,s,t)}remainingBytes(){return this.data.byteLength-4*this.offset4}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$2={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},r$1={pbrMetallicRoughness:o$2,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},t={ESRI_externalColorMixMode:"tint"},a$1=(e={})=>{const a={...o$2,...e.pbrMetallicRoughness},i=l$2({...t,...e.extras});return {...r$1,...e,pbrMetallicRoughness:a,extras:i}};function l$2(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:n$5(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint";}return o}const i$2={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},s$1=e=>({...i$2,...e});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const D={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class G{constructor(e,t,r$1,n,s){this.context=e,this.errorContext=t,this.uri=r$1,this.json=n,this.glbBuffer=s,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=r(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents();}static async load(e,t,o,a){if(G$1(o)){const r=V$2(o);if("model/gltf-binary"!==r.mediaType)try{const n=JSON.parse(r.isBase64?atob(r.data):r.data);return new G(e,t,o,n)}catch{}const a=H$1(o);if(G.isGLBData(a))return this.fromGLBData(e,t,o,a)}if(o.endsWith(".gltf")){const r=await e.loadJSON(o,a);return new G(e,t,o,r)}const i=await e.loadBinary(o,a);if(G.isGLBData(i))return this.fromGLBData(e,t,o,i);const u=await e.loadJSON(o,a);return new G(e,t,o,u)}static isGLBData(e){const t=new t$1(e);return t.remainingBytes()>=4&&t.readUint32()===D.MAGIC}static async fromGLBData(e,t,r,n){const s=await G.parseGLBData(t,n);return new G(e,t,r,s.json,s.binaryData)}static async parseGLBData(e,t){const r=new t$1(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),s=r.readUint32(),o=r.readUint32();e.assert(n===D.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==s,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,i,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(n===D.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await q$1(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(n!==D.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),i=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1;}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:i}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;const s=await this.getBufferLoader(e,t);return n.assert(s.byteLength===r.byteLength,"Buffer byte lengths should match."),s}async getBufferLoader(e,t){const r=this.bufferLoaders.get(e);if(r)return r;const n=this.json.buffers[e],s=this.context.loadBinary(this.resolveUri(n.uri),t).then((e=>new Uint8Array(e)));return this.bufferLoaders.set(e,s),s}async getAccessor(e,t){const r=this.errorContext;r.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const n=this.json.accessors[e];r.errorUnsupportedIf(null==(null==n?void 0:n.bufferView),"Some accessor does not specify a bufferView."),r.errorUnsupportedIf(n.type in["MAT2","MAT3","MAT4"],`AttributeType ${n.type} is not supported`);const s=this.json.bufferViews[n.bufferView],o=await this.getBuffer(s.buffer,t),a=k$1[n.type],i=V$1[n.componentType],u=a*i,c=s.byteStride||u;return {raw:o.buffer,byteStride:c,byteOffset:o.byteOffset+(s.byteOffset||0)+(n.byteOffset||0),entryCount:n.count,isDenselyPacked:c===u,componentCount:a,componentByteSize:i,componentType:n.componentType,min:n.min,max:n.max,normalized:!!n.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return t$5(this.wrapAccessor(d$3,r));case 5123:return t$5(this.wrapAccessor(g$1,r));case 5125:return t$5(this.wrapAccessor(B,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+X[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(i$3,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+X[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(i$3,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+X[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new c$4(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(u$3,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),J(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(c$4,n);if(5121===n.componentType)return this.wrapAccessor(x$2,n);if(5123===n.componentType)return this.wrapAccessor(L,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(i$3,n);if(5121===n.componentType)return this.wrapAccessor(O$1,n);if(5123===n.componentType)return this.wrapAccessor(E$1,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+X[n.componentType]);}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let n=this.materialCache.get(e.material);if(!n){const s=null!=e.material?a$1(this.json.materials[e.material]):a$1(),o=s.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(o.baseColorTexture,t),u=this.getTexture(s.normalTexture,t),c=r?this.getTexture(s.occlusionTexture,t):null,p=r?this.getTexture(s.emissiveTexture,t):null,f=r?this.getTexture(o.metallicRoughnessTexture,t):null,d=null!=e.material?e.material:-1;n={alphaMode:s.alphaMode,alphaCutoff:s.alphaCutoff,color:o.baseColorFactor,doubleSided:!!s.doubleSided,colorTexture:await i,normalTexture:await u,name:s.name,id:d,occlusionTexture:await c,emissiveTexture:await p,emissiveFactor:s.emissiveFactor,metallicFactor:o.metallicFactor,roughnessFactor:o.roughnessFactor,metallicRoughnessTexture:await f,vertexColors:a,ESRI_externalColorMixMode:s.extras.ESRI_externalColorMixMode};}return n}async getTexture(e,r){if(!e)return null;this.errorContext.errorUnsupportedIf(0!==(e.texCoord||0),"Only TEXCOORD with index 0 is supported.");const n=e.index,s=this.errorContext,o=this.json.textures[n],a=s$1(null!=o.sampler?this.json.samplers[o.sampler]:{});s.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const i=this.json.images[o.source],u=await this.loadTextureImageData(n,o,r);return r$6(this.textureCache,n,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>(s.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);return {data:u,wrapS:e(a.wrapS)?a.wrapS:t(a.wrapS),wrapT:e(a.wrapT)?a.wrapT:t(a.wrapT),minFilter:a.minFilter,name:i.name,id:n}}))}getNodeTransform(e){if(void 0===e)return P;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=e$7(e$8(),r,n.matrix):n.translation||n.rotation||n.scale?(t=n$6(r),n.translation&&c$5(t,t,n.translation),n.rotation&&(F[3]=P$1(F,n.rotation),f$4(t,t,F[3],F)),n.scale&&i$4(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t);}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return T(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=r$7.parse(this.json.asset.version,"glTF");_.validate(e);}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "));}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t);}));}));}async loadTextureImageData(e,t,r){const n=this.textureLoaders.get(e);if(n)return n;const s=this.createTextureLoader(t,r);return this.textureLoaders.set(e,s),s}async createTextureLoader(e,t){const r=this.json.images[e.source];if(r.uri)return this.context.loadImage(this.resolveUri(r.uri),t);const n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Image bufferView must be defined."),n.errorUnsupportedIf(null==r.mimeType,"Image mimeType must be defined.");const s=this.json.bufferViews[r.bufferView],o=await this.getBuffer(s.buffer,t);return n.errorUnsupportedIf(null!=s.byteStride,"byteStride not supported for image buffer"),H(new Uint8Array(o.buffer,o.byteOffset+(s.byteOffset||0),s.byteLength),r.mimeType)}}const _=new r$7(2,0,"glTF"),P=g$2(e$8(),Math.PI/2),F=e$9(),k$1={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},V$1={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};function J(t){switch(t.componentType){case 5120:return new V$3(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5121:return new A$1(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5122:return new q$2(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5123:return new w$2(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5125:return new F$1(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5126:return new u$3(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);default:return void n$5(t.componentType)}}async function q$1(e){return new Promise(((t,r)=>{const n=new Blob([e]),s=new FileReader;s.onload=()=>{const e=s.result;t(JSON.parse(e));},s.onerror=e=>{r(e);},s.readAsText(n);}))}async function H(e,t){return new Promise(((r,n)=>{const s=new Blob([e],{type:t}),o=URL.createObjectURL(s),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(o),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a);})),a.addEventListener("error",(e=>{URL.revokeObjectURL(o),n(e);})),a.src=o;}))}const X={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i$1=0;async function l$1(s,r,a={},l=!0){const m=await G.load(s,p,r,a),x="gltf_"+i$1++,h={lods:[],materials:new Map,textures:new Map,meta:u$1(m)},T=!(!m.json.asset.extras||"symbolResource"!==m.json.asset.extras.ESRI_type),g=new Map;await c$1(m,(async(s,r,n,i)=>{var u;const c=null!=(u=g.get(n))?u:0;g.set(n,c+1);const T=void 0!==s.mode?s.mode:4,S=4===T||5===T||6===T?T:null;if(t$9(S))return void p.warnUnsupported("Unsupported primitive mode ("+f$1[T]+"). Skipping primitive.");if(!m.hasPositions(s))return void p.warn("Skipping primitive without POSITION vertex attribute.");const v=m.getPositionData(s,a),w=m.getMaterial(s,a,l),_=m.hasNormals(s)?m.getNormalData(s,a):null,I=m.hasTangents(s)?m.getTangentData(s,a):null,R=m.hasTextureCoordinates(s)?m.getTextureCoordinates(s,a):null,E=m.hasVertexColors(s)?m.getVertexColors(s,a):null,M=m.getIndexData(s,a),F={transform:n$6(r),attributes:{position:await v,normal:_?await _:null,texCoord0:R?await R:null,color:E?await E:null,tangent:I?await I:null},indices:await M,primitiveType:S,material:d$1(h,await w,x)};let y=null;r$8(h.meta)&&r$8(h.meta.ESRI_lod)&&"screenSpaceRadius"===h.meta.ESRI_lod.metric&&(y=h.meta.ESRI_lod.thresholds[n]),h.lods[n]=h.lods[n]||{parts:[],name:i,lodThreshold:y},h.lods[n].parts[c]=F;}));for(const e of h.lods)e.parts=e.parts.filter((e=>!!e));return {model:h,meta:{isEsriSymbolResource:T,uri:m.uri},customMeta:{}}}function u$1(t){const o=t.json;let s=null;return o.nodes.forEach((t=>{const o=t.extras;r$8(o)&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(s=o);})),s}async function c$1(e,t){const o=e.json,s=o.scenes[o.scene||0].nodes,r=s.length>1,a=[];for(const i of s){const e=o.nodes[i];if(a.push(n(i,0)),m(e)&&!r){e.extensions.MSFT_lod.ids.forEach(((e,t)=>n(e,t+1)));}}async function n(s,r){const i=o.nodes[s],l=e.getNodeTransform(s);if(p.warnUnsupportedIf(null!=i.weights,"Morph targets are not supported."),null!=i.mesh){const e=o.meshes[i.mesh];for(const o of e.primitives)a.push(t(o,l,r,e.name));}for(const e of i.children||[])a.push(n(e,r));}await Promise.all(a);}function m(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function d$1(e$1,t,o){const s=t=>{const s=`${o}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e$1.textures.has(s)){const o=t$2(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:x$1.some((e=>e===t.minFilter)),noUnpackFlip:!0});e$1.textures.set(s,o);}return s},n=`${o}_mat_${t.id}_${t.name}`;if(!e$1.materials.has(n)){const o=e({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?s(t.colorTexture):void 0,textureNormal:t.normalTexture?s(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?s(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?s(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?s(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e$1.materials.set(n,o);}return n}const p=new t$3,x$1=[9987,9985],f$1=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function j(t){return t?{p0:t$a(t.p0),p1:t$a(t.p1),p2:t$a(t.p2)}:{p0:n$7(),p1:n$7(),p2:n$7()}}function h$1(t,n,r){const e=x.get();return e.p0=t,e.p1=n,e.p2=r,e}function k(t,n=j()){return d(t.p0,t.p1,t.p2,n)}function d(t,n,e,p=j()){return r$9(p.p0,t),r$9(p.p1,n),r$9(p.p2,e),p}function v(t,n){const r=t.p0,s=t.p1,c=t.p2,u=c$6(c$7.get(),s,r),i=c$6(c$7.get(),c,s),f=c$6(c$7.get(),r,c),a=c$6(c$7.get(),n,r),j=c$6(c$7.get(),n,s),h=c$6(c$7.get(),n,c),k=_$1(u,u,f),d=z(_$1(c$7.get(),u,k),a),v=z(_$1(c$7.get(),i,k),j),S=z(_$1(c$7.get(),f,k),h);if(d>0&&v>0&&S>0){const t=z(k,a);return t*t/z(k,k)}const b=b$2(m$1(r,u,q.get()),n),w=b$2(m$1(s,i,q.get()),n),M=b$2(m$1(c,f,q.get()),n);return Math.min(b,w,M)}function S(t,n,r){const e=1e-5,{direction:p,origin:o}=n,{p0:u,p1:i,p2:f}=t,a=i[0]-u[0],g=i[1]-u[1],m=i[2]-u[2],l=f[0]-u[0],j=f[1]-u[1],h=f[2]-u[2],k=p[1]*h-j*p[2],d=p[2]*l-h*p[0],v=p[0]*j-l*p[1],S=a*k+g*d+m*v;if(S>-e&&S<e)return !1;const b=1/S,w=o[0]-u[0],M=o[1]-u[1],q=o[2]-u[2],x=b*(w*k+M*d+q*v);if(x<0||x>1)return !1;const O=M*m-g*q,V=q*a-m*w,y=w*g-a*M,z=b*(p[0]*O+p[1]*V+p[2]*y);if(z<0||x+z>1)return !1;if(r){d$4(r,p,b*(l*O+j*V+h*y)),u$4(r,o,r);}return !0}function b(t,r,e){const p=d$5(t,r),o=d$5(r,e),s=d$5(e,t),c=(p+o+s)/2,u=c*(c-p)*(c-o)*(c-s);return u<=0?0:Math.sqrt(u)}function w$1(t){return b(t.p0,t.p1,t.p2)}function M(t,n,r){return c$6(O,n,t),c$6(V,r,t),s$4(_$1(O,O,V))/2}const q=new s$5(v$1),x=new s$5((()=>({p0:null,p1:null,p2:null}))),O=n$7(),V=n$7();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=(()=>{const t=new Uint32Array(131072);for(let n=0;n<t.length;++n)t[n]=n;return t})();const f=new Uint16Array([0]),c=(()=>{const t=new Uint16Array(65536);for(let n=0;n<t.length;++n)t[n]=n;return t})();function l(t){if(1===t)return f;if(t<c.length)return new Uint16Array(c.buffer,0,t);if(t>s.length){const n=Math.max(2*s.length,t);s=new Uint32Array(n);for(let t=0;t<s.length;t++)s[t]=t;}return new Uint32Array(s.buffer,0,t)}function a(t){if(1===t)return new Uint16Array(f);if(t<c.length)return new Uint16Array(c.slice(0,t));if(t>s.length){const n=new Uint32Array(t);for(let t=0;t<n.length;t++)n[t]=t;return n}return new Uint32Array(s.slice(0,t))}function u(e,o,s){if(!e)return !1;const{size:f,data:c}=e;o$6(s,0,0,0),o$6(U,0,0,0);let l=0,a=0;for(let u=0;u<o.length-2;u+=3){const e=o[u+0]*f,h=o[u+1]*f,g=o[u+2]*f;o$6(y,c[e+0],c[e+1],c[e+2]),o$6(w,c[h+0],c[h+1],c[h+2]),o$6(A,c[g+0],c[g+1],c[g+2]);const m=M(y,w,A);m?(u$4(y,y,w),u$4(y,y,A),d$4(y,y,1/3*m),u$4(s,s,y),l+=m):(u$4(U,U,y),u$4(U,U,w),u$4(U,U,A),a+=3);}return (0!==a||0!==l)&&(0!==l?(d$4(s,s,1/l),!0):0!==a&&(d$4(s,U,1/a),!0))}function h(n,e,o){if(!n||!e)return !1;const{size:i,data:s}=n;o$6(o,0,0,0);let f=-1,c=0;for(let t=0;t<e.length;t++){const n=e[t]*i;f!==n&&(o[0]+=s[n+0],o[1]+=s[n+1],o[2]+=s[n+2],c++),f=n;}return c>1&&d$4(o,o,1/c),c>0}function g(o,i,s,f){if(!o)return !1;const{size:c,data:l}=o;o$6(f,0,0,0),o$6(U,0,0,0);let a=0,u=0;const h=i?i.length-1:l.length/c-1,g=h+(s?2:0);for(let t=0;t<g;t+=2){const o=t<h?t:h,s=t<h?t+1:0,g=(i?i[o]:o)*c,A=(i?i[s]:s)*c;y[0]=l[g+0],y[1]=l[g+1],y[2]=l[g+2],w[0]=l[A+0],w[1]=l[A+1],w[2]=l[A+2],d$4(y,u$4(y,y,w),.5);const m=S$1(y,w);m>0?(u$4(f,f,d$4(y,y,m)),a+=m):(u$4(U,U,y),u++);}return 0!==a?(d$4(f,f,1/a),!0):0!==u&&(d$4(f,U,1/u),!0)}const y=n$7(),w=n$7(),A=n$7(),U=n$7();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,o=l){return "number"==typeof n?o(n):i$5(n)||e$a(n)?new Uint32Array(n):n}function o$1(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;e+=1)e%2==0?(n[t++]=e,n[t++]=e+1,n[t++]=e+2):(n[t++]=e+1,n[t++]=e,n[t++]=e+2);}else {let e=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=t[o],i=t[o+1],f=t[o+2];n[e++]=r,n[e++]=i,n[e++]=f;}else {const r=t[o+1],i=t[o],f=t[o+2];n[e++]=r,n[e++]=i,n[e++]=f;}}return n}function i(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;++e)n[t++]=0,n[t++]=e+1,n[t++]=e+2;return n}{const e=t[0];let o=t[1],i=0;for(let f=0;f<r;++f){const r=t[f+2];n[i++]=e,n[i++]=o,n[i++]=r,o=r;}return n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=2.1;

export { l$1 as a, r$4 as b, r$3 as c, o$1 as d, e$1 as e, f$3 as f, n as g, h, i, d$2 as j, o$5 as k, l, a as m, n$1 as n, o, r$2 as r, t$4 as t, u };
