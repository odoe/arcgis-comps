import{a7 as t,a0 as s,t as e,r as i,m as r,a2 as n,a3 as o,cK as h}from"./p-9ae46e68.js";import{bw as a,c1 as c,b_ as f,bX as u,E as l,bd as w,c6 as d,cH as p,c8 as m,bl as y}from"./p-566b0715.js";import{N as b,C as g}from"./p-e49afbb8.js";import{c as A,n as E,e as T}from"./p-2794293b.js";import{c as N}from"./p-6fe3e430.js";import{f as O}from"./p-4ece03e9.js";import"./p-84bf99cb.js";import"./p-fe01b82b.js";import"./p-b62a8a4f.js";import"./p-97ec6ae5.js";import"./p-e3f0e7de.js";import"./p-bae36c84.js";import"./p-138c2b2c.js";import"./p-39da60a5.js";import"./p-01158f1c.js";import"./p-98a14d68.js";import"./p-8e03c038.js";import"./p-32462343.js";import"./p-19c767c2.js";import"./p-d925341f.js";import"./p-76b2eeb3.js";class B{constructor(t,s){if(!t)throw new Error("GLB requires a JSON gltf chunk");this.length=B.HEADER_SIZE,this.length+=B.CHUNK_HEADER_SIZE;const e=this.textToArrayBuffer(t);if(this.length+=this.alignTo(e.byteLength,4),s&&(this.length+=B.CHUNK_HEADER_SIZE,this.length+=s.byteLength,s.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this.writeHeader();const i=this.writeChunk(e,12,1313821514,32);s&&this.writeChunk(s,i,5130562)}writeHeader(){this.outView.setUint32(0,B.MAGIC,!0),this.outView.setUint32(4,B.VERSION,!0),this.outView.setUint32(8,this.length,!0)}writeChunk(t,s,e,i=0){const r=this.alignTo(t.byteLength,4);for(this.outView.setUint32(s,r,!0),this.outView.setUint32(s+=4,e,!0),this.writeArrayBuffer(this.outView.buffer,t,s+=4,0,t.byteLength),s+=t.byteLength;s%4;)i&&this.outView.setUint8(s,i),s++;return s}writeArrayBuffer(t,s,e,i,r){new Uint8Array(t,e,r).set(new Uint8Array(s,i,r),0)}textToArrayBuffer(s){if(t("esri-text-encoder"))return(new TextEncoder).encode(s).buffer;const e=new Uint8Array(s.length);for(let t=0;t<e.length;++t)e[t]=s.charCodeAt(t);return e.buffer}alignTo(t,s){return s*Math.ceil(t/s)}}var S,I,j,x,L,C,R;B.HEADER_SIZE=12,B.CHUNK_HEADER_SIZE=8,B.MAGIC=1179937895,B.VERSION=2,function(t){t[t.External=0]="External",t[t.DataURI=1]="DataURI",t[t.GLB=2]="GLB"}(S||(S={})),function(t){t[t.External=0]="External",t[t.DataURI=1]="DataURI",t[t.GLB=2]="GLB"}(I||(I={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(j||(j={})),function(t){t.SCALAR="SCALAR",t.VEC2="VEC2",t.VEC3="VEC3",t.VEC4="VEC4",t.MAT2="MAT2",t.MAT3="MAT3",t.MAT4="MAT4"}(x||(x={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(L||(L={})),function(t){t.OPAQUE="OPAQUE",t.MASK="MASK",t.BLEND="BLEND"}(C||(C={})),function(t){t[t.NoColor=0]="NoColor",t[t.FaceColor=1]="FaceColor",t[t.VertexColor=2]="VertexColor"}(R||(R={}));class M{constructor(t,s,e,i,r){this.buffer=t,this.componentType=e,this.dataType=i,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,s.bufferViews||(s.bufferViews=[]),this.index=s.bufferViews.length,this.bufferView={buffer:t.index,byteLength:-1,target:r};const n=this.getElementSize();n>=4&&r!==j.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=n),s.bufferViews.push(this.bufferView),this.numComponentsForDataType=this.calculateNumComponentsForDataType()}push(t){const s=this.data.length;if(this.data.push(t),this.accessorIndex>=0){const e=s%this.numComponentsForDataType,i=this.accessorMin[e];this.accessorMin[e]="number"!=typeof i?t:Math.min(i,t);const r=this.accessorMax[e];this.accessorMax[e]="number"!=typeof r?t:Math.max(r,t)}}get dataSize(){return this.data.length*this.sizeComponentType()}get byteSize(){return function(t){return 4*Math.ceil(t/4)}(this.dataSize)}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}createTypedArray(t,s){switch(this.componentType){case 5120:return new Int8Array(t,s);case 5126:return new Float32Array(t,s);case 5122:return new Int16Array(t,s);case 5121:return new Uint8Array(t,s);case 5125:return new Uint32Array(t,s);case 5123:return new Uint16Array(t,s)}}writeOutToBuffer(t,s){this.createTypedArray(t,s).set(this.data)}writeAsync(t){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=t.then((t=>{const s=new Uint8Array(t);for(let t=0;t<s.length;++t)this.data.push(s[t]);delete this.asyncWritePromise})),this.asyncWritePromise}startAccessor(t){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=t;const s=this.numComponentsForDataType;this.accessorMin=new Array(s),this.accessorMax=new Array(s)}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const t=this.getElementSize(),s=this.numComponentsForDataType,e=(this.data.length-this.accessorIndex)/s;if(e%1)throw new Error("An accessor was ended with missing component values");for(let t=0;t<this.accessorMin.length;++t)"number"!=typeof this.accessorMin[t]&&(this.accessorMin[t]=0),"number"!=typeof this.accessorMax[t]&&(this.accessorMax[t]=0);const i={byteOffset:t*(this.accessorIndex/s),componentType:this.componentType,count:e,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case 5121:case 5123:i.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,i}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.finalizedPromise=this.isFinalized?Promise.resolve():new Promise((t=>this.finalizedPromiseResolve=t))}finalize(){const t=this.bufferView;return new Promise((t=>{const e=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&e.push(this.asyncWritePromise),t(s(e))})).then((()=>{this.isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve()}))}getElementSize(){return this.sizeComponentType()*this.numComponentsForDataType}sizeComponentType(){switch(this.componentType){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5125:case 5126:return 4}}calculateNumComponentsForDataType(){switch(this.dataType){case x.SCALAR:return 1;case x.VEC2:return 2;case x.VEC3:return 3;case x.VEC4:case x.MAT2:return 4;case x.MAT3:return 9;case x.MAT4:return 16}}}class z{constructor(t){this.gltf=t,this.bufferViews=[],this.isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;const s={byteLength:-1};t.buffers.push(s),this.buffer=s}addBufferView(t,s,e){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const i=new M(this,this.gltf,t,s,e);return this.bufferViews.push(i),i}getByteOffset(t){let s=0;for(const e of this.bufferViews){if(e===t)return s;s+=e.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(t){const s=[];for(const e of this.bufferViews){if(t&&e===t)return s;s.push(e.finalized)}return s}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const t=this.getTotalSize(),s=new ArrayBuffer(t);let e=0;for(const t of this.bufferViews)t.writeOutToBuffer(s,e),e+=t.byteSize;return s}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise((t=>{t(s(this.getViewFinalizePromises()))})).then((()=>{this.isFinalized=!0;const t=this.getArrayBuffer();this.buffer.byteLength=t.byteLength,this.buffer.uri=t})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}getTotalSize(){let t=0;for(const s of this.bufferViews)t+=s.byteSize;return t}}function P(t,s){e(s.normal)&&(s.normal=new Float32Array(s.position.length));const i=t.faces,{position:r,normal:n}=s,o=i.length/3;for(let t=0;t<o;++t){const s=3*i[3*t+0],e=3*i[3*t+1],o=3*i[3*t+2],h=a(V,r[s+0],r[s+1],r[s+2]),u=a(v,r[e+0],r[e+1],r[e+2]),l=a(_,r[o+0],r[o+1],r[o+2]),w=c(u,u,h),d=c(l,l,h),p=f(w,w,d);n[s+0]+=p[0],n[s+1]+=p[1],n[s+2]+=p[2],n[e+0]+=p[0],n[e+1]+=p[1],n[e+2]+=p[2],n[o+0]+=p[0],n[o+1]+=p[1],n[o+2]+=p[2]}for(let t=0;t<n.length;t+=3)a(k,n[t],n[t+1],n[t+2]),u(k,k),n[t+0]=k[0],n[t+1]=k[1],n[t+2]=k[2]}function U(t){return i(t.transform)?t.transform.getOriginPoint(t.spatialReference):new l({x:t.extent.xmax-t.extent.width/2,y:t.extent.ymax-t.extent.height/2,z:t.extent.zmin,spatialReference:t.extent.spatialReference})}const V=w(),v=w(),_=w(),k=w();async function F(t){const s=G(t);if(e(s))throw new r("imageToArrayBuffer","Unsupported image type");const i=await async function(t){if(!(t instanceof HTMLImageElement))return"image/png";const s=t.src;if(n(s)){const{mediaType:t}=o(s);return"image/jpeg"===t?t:"image/png"}return/\.png$/i.test(s)?"image/png":/\.(jpg|jpeg)$/i.test(s)?"image/jpeg":"image/png"}(t),h=await new Promise((t=>s.toBlob(t,i)));if(!h)throw new r("imageToArrayBuffer","Failed to encode image");return{data:await h.arrayBuffer(),type:i}}function G(t){if(t instanceof HTMLCanvasElement)return t;if(t instanceof HTMLVideoElement)return null;const s=document.createElement("canvas");s.width=t.width,s.height=t.height;const e=s.getContext("2d");return t instanceof HTMLImageElement?e.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&e.putImageData(t,t.width,t.height),s}class D{constructor(t,s,e){this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:s,binChunkBuffer:null,promises:[]}},e&&(this.params=e),this.addScenes(t)}addScenes(t){this.gltf.scene=t.defaultScene;const s=this.gltf.extras.options.bufferOutputType===S.GLB||this.gltf.extras.options.imageOutputType===I.GLB;s&&(this.gltf.extras.binChunkBuffer=new z(this.gltf)),t.forEachScene((t=>{this.addScene(t)})),s&&this.gltf.extras.binChunkBuffer.finalize()}addScene(t){this.gltf.scenes||(this.gltf.scenes=[]);const s={};t.name&&(s.name=t.name),t.forEachNode((t=>{s.nodes||(s.nodes=[]);const e=this.addNode(t);s.nodes.push(e)})),this.gltf.scenes.push(s)}addNode(t){this.gltf.nodes||(this.gltf.nodes=[]);const s={};t.name&&(s.name=t.name);const e=t.translation;d(e,p)||(s.translation=m(e));const i=t.rotation;b(i,A)||(s.rotation=E(i));const r=t.scale;d(r,y)||(s.scale=m(r)),t.mesh&&t.mesh.vertexAttributes.position?s.mesh=this.addMesh(t.mesh):t.forEachNode((t=>{s.children||(s.children=[]);const e=this.addNode(t);s.children.push(e)}));const n=this.gltf.nodes.length;return this.gltf.nodes.push(s),n}addMesh(t){this.gltf.meshes||(this.gltf.meshes=[]);const s={primitives:[]},e=this.gltf.extras.options.bufferOutputType===S.GLB;let r;r=e?this.gltf.extras.binChunkBuffer:new z(this.gltf),this.params.origin||(this.params.origin=U(t));const n=O(t.vertexAttributes,t.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});(function(t,s){if(t.components)for(const e of t.components)e.faces&&"smooth"===e.shading&&P(e,s)})(t,n),this.flipYZAxis(n);const o=r.addBufferView(5126,x.VEC3,j.ARRAY_BUFFER);let h,a,c,f;n.normal&&(h=r.addBufferView(5126,x.VEC3,j.ARRAY_BUFFER)),t.vertexAttributes.uv&&(a=r.addBufferView(5126,x.VEC2,j.ARRAY_BUFFER)),n.tangent&&(c=r.addBufferView(5126,x.VEC4,j.ARRAY_BUFFER)),t.vertexAttributes.color&&(f=r.addBufferView(5121,x.VEC4,j.ARRAY_BUFFER)),o.startAccessor("POSITION"),h&&h.startAccessor("NORMAL"),a&&a.startAccessor("TEXCOORD_0"),c&&c.startAccessor("TANGENT"),f&&f.startAccessor("COLOR_0");const u=n.position.length/3,{position:l,normal:w,tangent:d}=n,{color:p,uv:m}=t.vertexAttributes;for(let t=0;t<u;++t)o.push(l[3*t+0]),o.push(l[3*t+1]),o.push(l[3*t+2]),h&&i(w)&&(h.push(w[3*t+0]),h.push(w[3*t+1]),h.push(w[3*t+2])),a&&i(m)&&(a.push(m[2*t+0]),a.push(m[2*t+1])),c&&i(d)&&(c.push(d[4*t+0]),c.push(d[4*t+1]),c.push(d[4*t+2]),c.push(d[4*t+3])),f&&i(p)&&(f.push(p[4*t+0]),f.push(p[4*t+1]),f.push(p[4*t+2]),f.push(p[4*t+3]));const y=o.endAccessor(),b=this.addAccessor(o.index,y);let g,A,E,T,N;if(h){const t=h.endAccessor();g=this.addAccessor(h.index,t)}if(a){const t=a.endAccessor();A=this.addAccessor(a.index,t)}if(c){const t=c.endAccessor();E=this.addAccessor(c.index,t)}if(f){const t=f.endAccessor();T=this.addAccessor(f.index,t)}t.components&&t.components.length>0&&t.components[0].faces?(N=r.addBufferView(5125,x.SCALAR,j.ELEMENT_ARRAY_BUFFER),this.addMeshVertexIndexed(N,t.components,s,b,g,A,E,T)):this.addMeshVertexNonIndexed(t.components,s,b,g,A,E,T),o.finalize(),h&&h.finalize(),a&&a.finalize(),c&&c.finalize(),N&&N.finalize(),f&&f.finalize(),e||r.finalize();const B=this.gltf.meshes.length;return this.gltf.meshes.push(s),B}flipYZAxis({position:t,normal:s,tangent:e}){this.flipYZBuffer(t,3),this.flipYZBuffer(s,3),this.flipYZBuffer(e,4)}flipYZBuffer(t,s){if(!e(t))for(let e=1,i=2;e<t.length;e+=s,i+=s){const s=t[e];t[e]=t[i],t[i]=-s}}addMaterial(t){if(null===t)return;const s=this.materialMap.indexOf(t);if(-1!==s)return s;this.gltf.materials||(this.gltf.materials=[]);const e={};switch(t.alphaMode){case"mask":e.alphaMode=C.MASK;break;case"auto":case"blend":e.alphaMode=C.BLEND}.5!==t.alphaCutoff&&(e.alphaCutoff=t.alphaCutoff),t.doubleSided&&(e.doubleSided=t.doubleSided),e.pbrMetallicRoughness={};const r=t=>t**2.1,n=t=>{const s=t.toRgba();return s[0]=r(s[0]/255),s[1]=r(s[1]/255),s[2]=r(s[2]/255),s};if(i(t.color)&&(e.pbrMetallicRoughness.baseColorFactor=n(t.color)),i(t.colorTexture)&&(e.pbrMetallicRoughness.baseColorTexture={index:this.addTexture(t.colorTexture)}),i(t.normalTexture)&&(e.normalTexture={index:this.addTexture(t.normalTexture)}),t instanceof N){if(i(t.emissiveTexture)&&(e.emissiveTexture={index:this.addTexture(t.emissiveTexture)}),i(t.emissiveColor)){const s=n(t.emissiveColor);e.emissiveFactor=[s[0],s[1],s[2]]}i(t.occlusionTexture)&&(e.occlusionTexture={index:this.addTexture(t.occlusionTexture)}),i(t.metallicRoughnessTexture)&&(e.pbrMetallicRoughness.metallicRoughnessTexture={index:this.addTexture(t.metallicRoughnessTexture)}),e.pbrMetallicRoughness.metallicFactor=t.metallic,e.pbrMetallicRoughness.roughnessFactor=t.roughness}else e.pbrMetallicRoughness.metallicFactor=1,e.pbrMetallicRoughness.roughnessFactor=1;const o=this.gltf.materials.length;return this.gltf.materials.push(e),this.materialMap.push(t),o}addTexture(t){return this.gltf.textures||(this.gltf.textures=[]),h(this.textureMap,t,(()=>{const s={sampler:this.addSampler(t),source:this.addImage(t)},e=this.gltf.textures.length;return this.gltf.textures.push(s),e}))}addImage(t){const s=this.imageMap.get(t);if(null!=s)return s;this.gltf.images||(this.gltf.images=[]);const e={};if(t.url)e.uri=t.url;else{e.extras=t.data;for(let s=0;s<this.gltf.images.length;++s)if(t.data===this.gltf.images[s].extras)return s;switch(this.gltf.extras.options.imageOutputType){case I.GLB:{const s=this.gltf.extras.binChunkBuffer.addBufferView(5121,x.SCALAR),i=F(t.data).then((({data:t,type:s})=>(e.mimeType=s,t)));s.writeAsync(i).then((()=>{s.finalize()})),e.bufferView=s.index;break}case I.DataURI:e.uri=function(t){const s=G(t);return i(s)?s.toDataURL():""}(t.data);break;default:this.gltf.extras.promises.push(F(t.data).then((({data:t,type:s})=>{e.uri=t,e.mimeType=s})))}}const r=this.gltf.images.length;return this.gltf.images.push(e),this.imageMap.set(t,r),r}addSampler(t){this.gltf.samplers||(this.gltf.samplers=[]);let s=10497,e=10497;if("string"==typeof t.wrap)switch(t.wrap){case"clamp":s=33071,e=33071;break;case"mirror":s=33648,e=33648}else{switch(t.wrap.vertical){case"clamp":e=33071;break;case"mirror":e=33648}switch(t.wrap.horizontal){case"clamp":s=33071;break;case"mirror":s=33648}}const i={wrapS:s,wrapT:e};for(let t=0;t<this.gltf.samplers.length;++t)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[t]))return t;const r=this.gltf.samplers.length;return this.gltf.samplers.push(i),r}addAccessor(t,s){this.gltf.accessors||(this.gltf.accessors=[]);const e={bufferView:t,byteOffset:s.byteOffset,componentType:s.componentType,count:s.count,type:s.type,min:s.min,max:s.max,name:s.name};s.normalized&&(e.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(e),i}addMeshVertexIndexed(t,s,e,i,r,n,o,h){for(const a of s){t.startAccessor("INDICES");for(let s=0;s<a.faces.length;++s)t.push(a.faces[s]);const s=t.endAccessor(),c={attributes:{POSITION:i},indices:this.addAccessor(t.index,s),material:this.addMaterial(a.material)};r&&"flat"!==a.shading&&(c.attributes.NORMAL=r),n&&(c.attributes.TEXCOORD_0=n),o&&"flat"!==a.shading&&(c.attributes.TANGENT=o),h&&(c.attributes.COLOR_0=h),e.primitives.push(c)}}addMeshVertexNonIndexed(t,s,e,i,r,n,o){const h={attributes:{POSITION:e}};i&&(h.attributes.NORMAL=i),r&&(h.attributes.TEXCOORD_0=r),n&&(h.attributes.TANGENT=n),o&&(h.attributes.COLOR_0=o),t&&(h.material=this.addMaterial(t[0].material)),s.primitives.push(h)}}class H{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(t){if(this._scenes.indexOf(t)>=0)throw new Error("Scene already added");this._scenes.push(t)}removeScene(t){const s=this._scenes.indexOf(t);s>=0&&this._scenes.splice(s,1)}forEachScene(t){this._scenes.forEach(t)}}class ${constructor(){this.name="",this.nodes=[]}addNode(t){if(this.nodes.indexOf(t)>=0)throw new Error("Node already added");this.nodes.push(t)}forEachNode(t){this.nodes.forEach(t)}}class J{constructor(t){this.mesh=t,this.name="",this.translation=w(),this.rotation=T(),this.scale=m(y),this.nodes=[]}addNode(t){if(this.nodes.indexOf(t)>=0)throw new Error("Node already added");this.nodes.push(t)}forEachNode(t){this.nodes.forEach(t)}set rotationAngles(t){g(this.rotation,t[0],t[1],t[2])}}const X="model.glb";function Y(t,e){return function(t,e,i){const r=new D(t,e=e||{},i);let n=r.params;n?n.origin||(n.origin=new l({x:-1,y:-1,z:-1})):n={origin:new l({x:-1,y:-1,z:-1})};const o=n.origin,h=r.gltf;let a=1,c=1,f=null;return s(h.extras.promises).then((()=>{const t={origin:o};delete h.extras;const s=JSON.stringify(h,((s,i)=>{if("extras"!==s){if(i instanceof ArrayBuffer){if(function(t){if(t.byteLength<8)return!1;const s=new Uint8Array(t);return 137===s[0]&&80===s[1]&&78===s[2]&&71===s[3]&&13===s[4]&&10===s[5]&&26===s[6]&&10===s[7]}(i))switch(e.imageOutputType){case I.DataURI:case I.GLB:break;case I.External:default:{const s=`img${c}.png`;return c++,t[s]=i,s}}switch(e.bufferOutputType){case S.DataURI:return function(t){const s=[],e=new Uint8Array(t);for(let t=0;t<e.length;t++)s.push(String.fromCharCode(e[t]));return"data:application/octet-stream;base64,"+btoa(s.join(""))}(i);case S.GLB:if(f)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(f=i);case S.External:default:{const s=`data${a}.bin`;return a++,t[s]=i,s}}}return i}}),"number"==typeof e.jsonSpacing?e.jsonSpacing:4);return e.bufferOutputType===S.GLB||e.imageOutputType===I.GLB?t[X]=new B(s,f).buffer:t["model.gltf"]=s,t}))}(t,{bufferOutputType:S.GLB,imageOutputType:I.GLB,jsonSpacing:0},e)}class K{constructor(t,s){this.file={type:"model/gltf-binary",data:t},this.origin=s}buffer(){return Promise.resolve(this.file)}download(t){return new Promise((()=>{const s=new Blob([this.file.data],{type:this.file.type});let e=t;if(e||(e="model.glb"),"glb"!==e.split(".").pop()&&(e+=".glb"),window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(s,e);else{const t=document.createElement("a"),i=URL.createObjectURL(s);t.href=i,t.download=e,document.body.appendChild(t),t.click(),setTimeout((function(){document.body.removeChild(t),window.URL.revokeObjectURL(i)}),0)}}))}}function Z(t,s){const e=new H,i=new $;e.addScene(i);const r=new J(t);return i.addNode(r),Y(e,s).then((t=>new K(t[X],t.origin)))}export{Z as toBinaryGLTF}