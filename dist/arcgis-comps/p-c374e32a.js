import{b as t}from"./p-b0deb17a.js";import{c as e,r as n,u as r,e as s}from"./p-0bbc1744.js";import{c0 as o,h as i,kz as a,t as u,E as c,fF as l,cT as f,b as d,T as h,kA as p,c1 as m,kB as w,gt as y,gp as b,go as g,gn as v,fk as x,kC as T,r as A,K as O,dG as N,gg as M,I as S,dF as U,L as _,N as R,dd as L,ko as E}from"./p-5420851c.js";import{e as I,n as F}from"./p-01158f1c.js";import{r as C}from"./p-9d3cbf73.js";import{P as B}from"./p-aa3586ef.js";import{e as G}from"./p-2794293b.js";import{B as P,g as k,d as j,i as D,c as $,u as V,x as z,L as J,O as q,E as X,F as H,w as Q,q as Y,A as K,V as W}from"./p-d4dbfa93.js";import{s as Z,v as tt}from"./p-74752c79.js";function et(e,n,r){if(e.count!==n.count)return void t.error("source and destination buffers need to have the same number of elements");const s=e.count,o=r[0],i=r[1],a=r[2],u=r[3],c=r[4],l=r[5],f=r[6],d=r[7],h=r[8],p=e.typedBuffer,m=e.typedBufferStride,w=n.typedBuffer,y=n.typedBufferStride;for(let t=0;t<s;t++){const e=t*m,n=t*y,r=w[n],s=w[n+1],b=w[n+2],g=w[n+3];p[e]=o*r+u*s+f*b,p[e+1]=i*r+c*s+d*b,p[e+2]=a*r+l*s+h*b,p[e+3]=g}}function nt(t,e,n){const r=Math.min(t.count,e.count),s=t.typedBuffer,o=t.typedBufferStride,i=e.typedBuffer,a=e.typedBufferStride;for(let t=0;t<r;t++){const e=t*o,r=t*a;s[e]=n*i[r],s[e+1]=n*i[r+1],s[e+2]=n*i[r+2],s[e+3]=n*i[r+3]}}function rt(t,e,n){const r=Math.min(t.count,e.count),s=t.typedBuffer,o=t.typedBufferStride,i=e.typedBuffer,a=e.typedBufferStride;for(let t=0;t<r;t++){const e=t*o,r=t*a;s[e]=i[r]>>n,s[e+1]=i[r+1]>>n,s[e+2]=i[r+2]>>n,s[e+3]=i[r+3]>>n}}function st(t,e){const n=t.count;e||(e=new t.TypedArrayConstructor(n));for(let r=0;r<n;r++)e[r]=t.get(r);return e}function ot(t,e,n){const r=t.typedBuffer,s=t.typedBufferStride,o=e.typedBuffer,i=e.typedBufferStride,a=n?n.count:e.count;let u=(n&&n.dstIndex?n.dstIndex:0)*s,c=(n&&n.srcIndex?n.srcIndex:0)*i;for(let t=0;t<a;++t)r[u]=o[c],r[u+1]=o[c+1],u+=s,c+=i}function it(t,s,o){const i=t.typedBuffer,a=t.typedBufferStride,u=s.typedBuffer,c=s.typedBufferStride,l=o?o.count:s.count;let f=(o&&o.dstIndex?o.dstIndex:0)*a,d=(o&&o.srcIndex?o.srcIndex:0)*c;if(e(s.elementType)){const t=r(s.elementType);if(n(s.elementType))for(let e=0;e<l;++e)i[f]=Math.max(u[d]/t,-1),i[f+1]=Math.max(u[d+1]/t,-1),f+=a,d+=c;else for(let e=0;e<l;++e)i[f]=u[d]/t,i[f+1]=u[d+1]/t,f+=a,d+=c}else ot(t,s,o);return t}function at(t,e,n,r){var s,o;const i=t.typedBuffer,a=t.typedBufferStride,u=null!=(s=null==r?void 0:r.count)?s:t.count;let c=(null!=(o=null==r?void 0:r.dstIndex)?o:0)*a;for(let t=0;t<u;++t)i[c]=e,i[c+1]=n,c+=a}function ut(t,e,n){const r=t.typedBuffer,s=t.typedBufferStride,o=e.typedBuffer,i=e.typedBufferStride,a=n?n.count:e.count;let u=(n&&n.dstIndex?n.dstIndex:0)*s,c=(n&&n.srcIndex?n.srcIndex:0)*i;for(let t=0;t<a;++t)r[u]=o[c],r[u+1]=o[c+1],r[u+2]=o[c+2],r[u+3]=o[c+3],u+=s,c+=i}function ct(t,e,n,r,s,o){var i,a;const u=t.typedBuffer,c=t.typedBufferStride,l=null!=(i=null==o?void 0:o.count)?i:t.count;let f=(null!=(a=null==o?void 0:o.dstIndex)?a:0)*c;for(let t=0;t<l;++t)u[f]=e,u[f+1]=n,u[f+2]=r,u[f+3]=s,f+=c}function lt(t,e){return new t(new ArrayBuffer(e*t.ElementCount*s(t.ElementType)))}Object.freeze({__proto__:null,transformMat4:function(e,n,r){if(e.count!==n.count)return void t.error("source and destination buffers need to have the same number of elements");const s=e.count,o=r[0],i=r[1],a=r[2],u=r[3],c=r[4],l=r[5],f=r[6],d=r[7],h=r[8],p=r[9],m=r[10],w=r[11],y=r[12],b=r[13],g=r[14],v=r[15],x=e.typedBuffer,T=e.typedBufferStride,A=n.typedBuffer,O=n.typedBufferStride;for(let t=0;t<s;t++){const e=t*T,n=t*O,r=A[n],s=A[n+1],N=A[n+2],M=A[n+3];x[e]=o*r+c*s+h*N+y*M,x[e+1]=i*r+l*s+p*N+b*M,x[e+2]=a*r+f*s+m*N+g*M,x[e+3]=u*r+d*s+w*N+v*M}},transformMat3:et,scale:nt,shiftRight:rt}),Object.freeze({__proto__:null,copy:function(t,e,n){const r=t.typedBuffer,s=t.typedBufferStride,o=e.typedBuffer,i=e.typedBufferStride,a=n?n.count:e.count;let u=(n&&n.dstIndex?n.dstIndex:0)*s,c=(n&&n.srcIndex?n.srcIndex:0)*i;for(let t=0;t<a;++t){for(let t=0;t<9;++t)r[u+t]=o[c+t];u+=s,c+=i}}}),Object.freeze({__proto__:null,copy:function(t,e,n){const r=t.typedBuffer,s=t.typedBufferStride,o=e.typedBuffer,i=e.typedBufferStride,a=n?n.count:e.count;let u=(n&&n.dstIndex?n.dstIndex:0)*s,c=(n&&n.srcIndex?n.srcIndex:0)*i;for(let t=0;t<a;++t){for(let t=0;t<16;++t)r[u+t]=o[c+t];u+=s,c+=i}}}),Object.freeze({__proto__:null,copy:function(t,e,n){const r=t.typedBuffer,s=t.typedBufferStride,o=e.typedBuffer,i=e.typedBufferStride,a=n?n.count:e.count;let u=(n&&n.dstIndex?n.dstIndex:0)*s,c=(n&&n.srcIndex?n.srcIndex:0)*i;for(let t=0;t<a;++t)r[u]=o[c],u+=s,c+=i},makeDense:st}),Object.freeze({__proto__:null,copy:ot,normalizeIntegerBuffer:it,fill:at}),Object.freeze({__proto__:null,copy:ut,fill:ct});class ft{constructor(t){this.streamDataRequester=t}async loadJSON(t,e){return this.load("json",t,e)}async loadBinary(t,e){return o(t)?(i(e),a(t)):this.load("binary",t,e)}async loadImage(t,e){return this.load("image",t,e)}async load(t,e,n){if(u(this.streamDataRequester))return(await c(e,{responseType:dt[t]})).data;const r=await l(this.streamDataRequester.request(e,t,n));if(!0===r.ok)return r.value;throw f(r.error),new d("",`Request for resource failed: ${r.error}`)}}const dt={image:"image",binary:"array-buffer",json:"json"},ht=h.getLogger("esri.views.3d.glTF");class pt{constructor(t){this.data=t,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const t=this.offset4;return this.offset4+=1,this.dataUint32[t]}readUint8Array(t){const e=4*this.offset4;return this.offset4+=t/4,new Uint8Array(this.data,e,t)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const mt={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},wt={pbrMetallicRoughness:mt,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},yt={ESRI_externalColorMixMode:"tint"},bt=(t={})=>{const e={...mt,...t.pbrMetallicRoughness},n=function(t){switch(t.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:t.ESRI_externalColorMixMode="tint"}return t}({...yt,...t.extras});return{...wt,...t,pbrMetallicRoughness:e,extras:n}},gt={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};class vt{constructor(t,e,n,r,s){this.context=t,this.errorContext=e,this.uri=n,this.json=r,this.glbBuffer=s,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(t){let e,n;return t.replace(/^(.*\/)?([^/]*)$/,((t,r,s)=>(e=r||"",n=s||"",""))),{dirPart:e,filePart:n}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),e.errorUnsupportedIf(null==r.scenes,"Scenes must be defined."),e.errorUnsupportedIf(null==r.meshes,"Meshes must be defined"),e.errorUnsupportedIf(null==r.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(t,e,n,r){if(o(n)){const r=m(n);if("model/gltf-binary"!==r.mediaType)try{const s=JSON.parse(r.isBase64?atob(r.data):r.data);return new vt(t,e,n,s)}catch{}const s=a(n);if(vt.isGLBData(s))return this.fromGLBData(t,e,n,s)}if(n.endsWith(".gltf")){const s=await t.loadJSON(n,r);return new vt(t,e,n,s)}const s=await t.loadBinary(n,r);if(vt.isGLBData(s))return this.fromGLBData(t,e,n,s);const i=await t.loadJSON(n,r);return new vt(t,e,n,i)}static isGLBData(t){const e=new pt(t);return e.remainingBytes()>=4&&1179937895===e.readUint32()}static async fromGLBData(t,e,n,r){const s=await vt.parseGLBData(e,r);return new vt(t,e,n,s.json,s.binaryData)}static async parseGLBData(t,e){const n=new pt(e);t.assert(n.remainingBytes()>=12,"GLB binary data is insufficiently large.");const r=n.readUint32(),s=n.readUint32(),o=n.readUint32();t.assert(1179937895===r,"Magic first 4 bytes do not fit to expected GLB value."),t.assert(e.byteLength>=o,"GLB binary data is smaller than header specifies."),t.errorUnsupportedIf(2!==s,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,a,u=0;for(;n.remainingBytes()>=8;){const e=n.readUint32(),r=n.readUint32();0===u?(t.assert(1313821514===r,"First GLB chunk must be JSON."),t.assert(e>=0,"No JSON data found."),i=await Mt(n.readUint8Array(e))):1===u?(t.errorUnsupportedIf(5130562!==r,"Second GLB chunk expected to be BIN."),a=n.readUint8Array(e)):t.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return i||t.error("No GLB JSON chunk detected."),{json:i,binaryData:a}}async getBuffer(t,e){const n=this.json.buffers[t],r=this.errorContext;if(null==n.uri)return r.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;const s=await this.getBufferLoader(t,e);return r.assert(s.byteLength===n.byteLength,"Buffer byte lengths should match."),s}async getBufferLoader(t,e){const n=this.bufferLoaders.get(t);if(n)return n;const r=this.context.loadBinary(this.resolveUri(this.json.buffers[t].uri),e).then((t=>new Uint8Array(t)));return this.bufferLoaders.set(t,r),r}async getAccessor(t,e){const n=this.errorContext;n.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const r=this.json.accessors[t];n.errorUnsupportedIf(null==(null==r?void 0:r.bufferView),"Some accessor does not specify a bufferView."),n.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const s=this.json.bufferViews[r.bufferView],o=await this.getBuffer(s.buffer,e),i=Ot[r.type],a=Nt[r.componentType],u=i*a,c=s.byteStride||u;return{raw:o.buffer,byteStride:c,byteOffset:o.byteOffset+(s.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===u,componentCount:i,componentByteSize:a,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(t,e){if(null==t.indices)return null;const n=await this.getAccessor(t.indices,e);if(n.isDenselyPacked)switch(n.componentType){case 5121:return new Uint8Array(n.raw,n.byteOffset,n.entryCount);case 5123:return new Uint16Array(n.raw,n.byteOffset,n.entryCount);case 5125:return new Uint32Array(n.raw,n.byteOffset,n.entryCount)}else switch(n.componentType){case 5121:return st(this.wrapAccessor(j,n));case 5123:return st(this.wrapAccessor(k,n));case 5125:return st(this.wrapAccessor(P,n))}}async getPositionData(t,e){const n=this.errorContext;n.errorUnsupportedIf(null==t.attributes.POSITION,"No POSITION vertex data found.");const r=await this.getAccessor(t.attributes.POSITION,e);return n.errorUnsupportedIf(5126!==r.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+St[r.componentType]),n.errorUnsupportedIf(3!==r.componentCount,"POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this.wrapAccessor(D,r)}async getNormalData(t,e){const n=this.errorContext;n.assert(null!=t.attributes.NORMAL,"No NORMAL vertex data found.");const r=await this.getAccessor(t.attributes.NORMAL,e);return n.errorUnsupportedIf(5126!==r.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+St[r.componentType]),n.errorUnsupportedIf(3!==r.componentCount,"NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this.wrapAccessor(D,r)}async getTangentData(t,e){const n=this.errorContext;n.assert(null!=t.attributes.TANGENT,"No TANGENT vertex data found.");const r=await this.getAccessor(t.attributes.TANGENT,e);return n.errorUnsupportedIf(5126!==r.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+St[r.componentType]),n.errorUnsupportedIf(4!==r.componentCount,"TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed()),new $(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(t,e){const n=this.errorContext;n.assert(null!=t.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(t.attributes.TEXCOORD_0,e);return n.errorUnsupportedIf(2!==r.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed()),5126===r.componentType?this.wrapAccessor(V,r):(n.errorUnsupportedIf(!r.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(t){switch(t.componentType){case 5120:return new W(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5121:return new K(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5122:return new Y(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5123:return new Q(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5125:return new H(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5126:return new V(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);default:return void T()}}(r))}async getVertexColors(t,e){const n=this.errorContext;n.assert(null!=t.attributes.COLOR_0,"No COLOR_0 vertex data found.");const r=await this.getAccessor(t.attributes.COLOR_0,e);if(n.errorUnsupportedIf(4!==r.componentCount&&3!==r.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed()),4===r.componentCount){if(5126===r.componentType)return this.wrapAccessor($,r);if(5121===r.componentType)return this.wrapAccessor(z,r);if(5123===r.componentType)return this.wrapAccessor(J,r)}else if(3===r.componentCount){if(5126===r.componentType)return this.wrapAccessor(D,r);if(5121===r.componentType)return this.wrapAccessor(q,r);if(5123===r.componentType)return this.wrapAccessor(X,r)}n.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+St[r.componentType])}hasPositions(t){return void 0!==t.attributes.POSITION}hasNormals(t){return void 0!==t.attributes.NORMAL}hasVertexColors(t){return void 0!==t.attributes.COLOR_0}hasTextureCoordinates(t){return void 0!==t.attributes.TEXCOORD_0}hasTangents(t){return void 0!==t.attributes.TANGENT}async getMaterial(t,e,n){let r=this.materialCache.get(t.material);if(!r){const s=null!=t.material?bt(this.json.materials[t.material]):bt(),o=s.pbrMetallicRoughness,i=this.hasVertexColors(t),a=this.getTexture(o.baseColorTexture,e),u=this.getTexture(s.normalTexture,e),c=n?this.getTexture(s.occlusionTexture,e):null,l=n?this.getTexture(s.emissiveTexture,e):null,f=n?this.getTexture(o.metallicRoughnessTexture,e):null,d=null!=t.material?t.material:-1;r={alphaMode:s.alphaMode,alphaCutoff:s.alphaCutoff,color:o.baseColorFactor,doubleSided:!!s.doubleSided,colorTexture:await a,normalTexture:await u,name:s.name,id:d,occlusionTexture:await c,emissiveTexture:await l,emissiveFactor:s.emissiveFactor,metallicFactor:o.metallicFactor,roughnessFactor:o.roughnessFactor,metallicRoughnessTexture:await f,vertexColors:i,ESRI_externalColorMixMode:s.extras.ESRI_externalColorMixMode}}return r}async getTexture(t,e){if(!t)return null;this.errorContext.errorUnsupportedIf(0!==(t.texCoord||0),"Only TEXCOORD with index 0 is supported.");const n=t.index,r=this.errorContext,s=this.json.textures[n],o=(t=>({...gt,...t}))(null!=s.sampler?this.json.samplers[s.sampler]:{});r.errorUnsupportedIf(null==s.source,"Source is expected to be defined for a texture.");const i=this.json.images[s.source],a=await this.loadTextureImageData(n,s,e);return w(this.textureCache,n,(()=>{const t=t=>33071===t||33648===t||10497===t,e=t=>(r.error(`Unexpected TextureSampler WrapMode: ${t}. Using default REPEAT(10497).`),10497);return{data:a,wrapS:t(o.wrapS)?o.wrapS:e(o.wrapS),wrapT:t(o.wrapT)?o.wrapT:e(o.wrapT),minFilter:o.minFilter,name:i.name,id:n}}))}getNodeTransform(t){if(void 0===t)return Tt;let e=this.nodeTransformCache.get(t);if(!e){const n=this.getNodeTransform(this.getNodeParent(t)),r=this.json.nodes[t];r.matrix?e=y(I(),n,r.matrix):r.translation||r.rotation||r.scale?(e=F(n),r.translation&&b(e,e,r.translation),r.rotation&&(At[3]=B(At,r.rotation),g(e,e,At[3],At)),r.scale&&v(e,e,r.scale)):e=n,this.nodeTransformCache.set(t,e)}return e}wrapAccessor(t,e){return new t(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}resolveUri(t){return x(t,this.baseUri)}getNodeParent(t){return this.nodeParentMap.get(t)}checkVersionSupported(){const t=C.parse(this.json.asset.version,"glTF");xt.validate(t)}checkRequiredExtensionsSupported(){const t=this.json;t.extensionsRequired&&0!==t.extensionsRequired.length&&this.errorContext.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+t.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((t,e)=>{t.children&&t.children.forEach((t=>{this.nodeParentMap.set(t,e)}))}))}async loadTextureImageData(t,e,n){const r=this.textureLoaders.get(t);if(r)return r;const s=this.createTextureLoader(e,n);return this.textureLoaders.set(t,s),s}async createTextureLoader(t,e){const n=this.json.images[t.source];if(n.uri)return this.context.loadImage(this.resolveUri(n.uri),e);const r=this.errorContext;r.errorUnsupportedIf(null==n.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==n.mimeType,"Image mimeType must be defined.");const s=this.json.bufferViews[n.bufferView],o=await this.getBuffer(s.buffer,e);return r.errorUnsupportedIf(null!=s.byteStride,"byteStride not supported for image buffer"),async function(t,e){return new Promise(((n,r)=>{const s=new Blob([t],{type:e}),o=URL.createObjectURL(s),i=new Image;i.addEventListener("load",(()=>{URL.revokeObjectURL(o),"decode"in i?i.decode().then((()=>n(i)),(()=>n(i))):n(i)})),i.addEventListener("error",(t=>{URL.revokeObjectURL(o),r(t)})),i.src=o}))}(new Uint8Array(o.buffer,o.byteOffset+(s.byteOffset||0),s.byteLength),n.mimeType)}}const xt=new C(2,0,"glTF"),Tt=p(I(),Math.PI/2),At=G(),Ot={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Nt={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function Mt(t){return new Promise(((e,n)=>{const r=new Blob([t]),s=new FileReader;s.onload=()=>{e(JSON.parse(s.result))},s.onerror=t=>{n(t)},s.readAsText(r)}))}const St={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let Ut=0;async function _t(t,e,n={},r=!0){const s=await vt.load(t,Ft,e,n),o="gltf_"+Ut++,i={lods:[],materials:new Map,textures:new Map,meta:Rt(s)},a=!(!s.json.asset.extras||"symbolResource"!==s.json.asset.extras.ESRI_type),c=new Map;await Lt(s,(async(t,e,a,l)=>{var f;const d=null!=(f=c.get(a))?f:0;c.set(a,d+1);const h=void 0!==t.mode?t.mode:4,p=4===h||5===h||6===h?h:null;if(u(p))return void Ft.warnUnsupported("Unsupported primitive mode ("+Bt[h]+"). Skipping primitive.");if(!s.hasPositions(t))return void Ft.warn("Skipping primitive without POSITION vertex attribute.");const m=s.getPositionData(t,n),w=s.getMaterial(t,n,r),y=s.hasNormals(t)?s.getNormalData(t,n):null,b=s.hasTangents(t)?s.getTangentData(t,n):null,g=s.hasTextureCoordinates(t)?s.getTextureCoordinates(t,n):null,v=s.hasVertexColors(t)?s.getVertexColors(t,n):null,x=s.getIndexData(t,n),T={transform:F(e),attributes:{position:await m,normal:y?await y:null,texCoord0:g?await g:null,color:v?await v:null,tangent:b?await b:null},indices:await x,primitiveType:p,material:It(i,await w,o)};let O=null;A(i.meta)&&A(i.meta.ESRI_lod)&&"screenSpaceRadius"===i.meta.ESRI_lod.metric&&(O=i.meta.ESRI_lod.thresholds[a]),i.lods[a]=i.lods[a]||{parts:[],name:l,lodThreshold:O},i.lods[a].parts[d]=T}));for(const t of i.lods)t.parts=t.parts.filter((t=>!!t));return{model:i,meta:{isEsriSymbolResource:a,uri:s.uri},customMeta:{}}}function Rt(t){let e=null;return t.json.nodes.forEach((t=>{const n=t.extras;A(n)&&(n.ESRI_proxyEllipsoid||n.ESRI_lod)&&(e=n)})),e}async function Lt(t,e){const n=t.json,r=n.scenes[n.scene||0].nodes,s=r.length>1,o=[];for(const t of r){const e=n.nodes[t];o.push(i(t,0)),Et(e)&&!s&&e.extensions.MSFT_lod.ids.forEach(((t,e)=>i(t,e+1)))}async function i(r,s){const a=n.nodes[r],u=t.getNodeTransform(r);if(Ft.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const t=n.meshes[a.mesh];for(const n of t.primitives)o.push(e(n,u,s,t.name))}for(const t of a.children||[])o.push(i(t,s))}await Promise.all(o)}function Et(t){return t.extensions&&t.extensions.MSFT_lod&&Array.isArray(t.extensions.MSFT_lod.ids)}function It(t,e,n){const r=e=>{const r=`${n}_tex_${e&&e.id}${e&&e.name?"_"+e.name:""}`;if(e&&!t.textures.has(r)){const n=function(t,e={}){return{data:t,parameters:{wrap:{s:10497,t:10497,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}(e.data,{wrap:{s:e.wrapS,t:e.wrapT},mipmap:Ct.some((t=>t===e.minFilter)),noUnpackFlip:!0});t.textures.set(r,n)}return r},s=`${n}_mat_${e.id}_${e.name}`;if(!t.materials.has(s)){const n=function(t={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...t}}({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?r(e.colorTexture):void 0,textureNormal:e.normalTexture?r(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?r(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?r(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?r(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor});t.materials.set(s,n)}return s}const Ft=new class{error(t){throw new d("gltf-loader-error",t)}errorUnsupported(t){throw new d("gltf-loader-unsupported-feature",t)}errorUnsupportedIf(t,e){t&&this.errorUnsupported(e)}assert(t,e){t||this.error(e)}warn(t){ht.warn(t)}warnUnsupported(t){this.warn("[Unsupported Feature] "+t)}warnUnsupportedIf(t,e){t&&this.warnUnsupported(e)}},Ct=[9987,9985],Bt=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];function Gt(t,e,n){return O(Pt,e,t),O(kt,n,t),N(M(Pt,Pt,kt))/2}new Z(tt),new Z((()=>({p0:null,p1:null,p2:null})));const Pt=S(),kt=S();let jt=(()=>{const t=new Uint32Array(131072);for(let e=0;e<t.length;++e)t[e]=e;return t})();const Dt=new Uint16Array([0]),$t=(()=>{const t=new Uint16Array(65536);for(let e=0;e<t.length;++e)t[e]=e;return t})();function Vt(t){if(1===t)return Dt;if(t<$t.length)return new Uint16Array($t.buffer,0,t);if(t>jt.length){const e=Math.max(2*jt.length,t);jt=new Uint32Array(e);for(let t=0;t<jt.length;t++)jt[t]=t}return new Uint32Array(jt.buffer,0,t)}function zt(t){if(1===t)return new Uint16Array(Dt);if(t<$t.length)return new Uint16Array($t.slice(0,t));if(t>jt.length){const e=new Uint32Array(t);for(let t=0;t<e.length;t++)e[t]=t;return e}return new Uint32Array(jt.slice(0,t))}function Jt(t,e,n){if(!t)return!1;const{size:r,data:s}=t;U(n,0,0,0),U(Yt,0,0,0);let o=0,i=0;for(let t=0;t<e.length-2;t+=3){const a=e[t+0]*r,u=e[t+1]*r,c=e[t+2]*r;U(Xt,s[a+0],s[a+1],s[a+2]),U(Ht,s[u+0],s[u+1],s[u+2]),U(Qt,s[c+0],s[c+1],s[c+2]);const l=Gt(Xt,Ht,Qt);l?(_(Xt,Xt,Ht),_(Xt,Xt,Qt),R(Xt,Xt,1/3*l),_(n,n,Xt),o+=l):(_(Yt,Yt,Xt),_(Yt,Yt,Ht),_(Yt,Yt,Qt),i+=3)}return!(0===i&&0===o||(0!==o?(R(n,n,1/o),0):0===i||(R(n,Yt,1/i),0)))}function qt(t,e,n){if(!t||!e)return!1;const{size:r,data:s}=t;U(n,0,0,0);let o=-1,i=0;for(let t=0;t<e.length;t++){const a=e[t]*r;o!==a&&(n[0]+=s[a+0],n[1]+=s[a+1],n[2]+=s[a+2],i++),o=a}return i>1&&R(n,n,1/i),i>0}const Xt=S(),Ht=S(),Qt=S(),Yt=S();function Kt(t,e=Vt){return"number"==typeof t?e(t):L(t)||E(t)?new Uint32Array(t):t}function Wt(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const n=e-2,r=n<=65536?new Uint16Array(3*n):new Uint32Array(3*n);if("number"==typeof t){let t=0;for(let e=0;e<n;e+=1)e%2==0?(r[t++]=e,r[t++]=e+1,r[t++]=e+2):(r[t++]=e+1,r[t++]=e,r[t++]=e+2)}else{let e=0;for(let s=0;s<n;s+=1)if(s%2==0){const n=t[s+1],o=t[s+2];r[e++]=t[s],r[e++]=n,r[e++]=o}else{const n=t[s],o=t[s+2];r[e++]=t[s+1],r[e++]=n,r[e++]=o}}return r}function Zt(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const n=e-2,r=n<=65536?new Uint16Array(3*n):new Uint32Array(3*n);if("number"==typeof t){let t=0;for(let e=0;e<n;++e)r[t++]=0,r[t++]=e+1,r[t++]=e+2;return r}{const e=t[0];let s=t[1],o=0;for(let i=0;i<n;++i){const n=t[i+2];r[o++]=e,r[o++]=s,r[o++]=n,s=n}return r}}const te=2.1;export{_t as a,et as b,it as c,Wt as d,ut as e,nt as f,Kt as g,qt as h,Zt as i,at as j,rt as k,Vt as l,zt as m,ft as n,te as o,lt as r,ct as t,Jt as u}