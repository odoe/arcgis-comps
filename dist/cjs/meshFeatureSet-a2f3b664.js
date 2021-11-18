'use strict';

const unitUtils = require('./unitUtils-61d611e2.js');
const request = require('./messageBundle-312ceb47.js');
const georeference = require('./georeference-cf83b2d2.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const screenshotUtils = require('./screenshotUtils-33e2013d.js');
const earcut = require('./earcut-d5562923.js');
const deduplicate = require('./deduplicate-f0696937.js');
const projection = require('./projection-e04cb9d0.js');
const mat3 = require('./mat3-1bc0ab17.js');
const quatf64 = require('./quatf64-755c8047.js');
const mat4f64 = require('./mat4f64-f8b0b0f1.js');
const mat4 = require('./mat4-1439266d.js');
const FeatureSet = require('./FeatureSet-2e9b97a5.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$6;const d$2=new WeakMap;let h$2=0,u$7=p$6=class extends JSONSupport.a{constructor(t){super(t),this.wrap="repeat";}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null);}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null);}writeData(t,e,a,r){if(t instanceof HTMLImageElement){const s={type:"image-element",src:unitUtils.i$2(t.src,r),crossOrigin:t.crossOrigin};e[a]=s;}else if(t instanceof HTMLCanvasElement){const r=t.getContext("2d").getImageData(0,0,t.width,t.height),s={type:"canvas-element",imageData:this.encodeImageData(r)};e[a]=s;}else if(t instanceof HTMLVideoElement){const s={type:"video-element",src:unitUtils.i$2(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[a]=s;}else {const r={type:"image-data",imageData:this.encodeImageData(t)};e[a]=r;}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this.decodeImageData(t.imageData),a=document.createElement("canvas");return a.width=e.width,a.height=e.height,a.getContext("2d").putImageData(e,0,0),a}case"image-data":return this.decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this.imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this.imageDataContainsTransparent(t);if(e){const t=e.substr(e.length-4,4).toLowerCase(),a=e.substr(0,15).toLocaleLowerCase();if(".png"===t||"data:image/png;"===a)return !0}return !1}set transparent(t){null!=t?this._override("transparent",t):this._clearOverride("transparent");}get contentHash(){const t="string"==typeof this.wrap?this.wrap:"object"==typeof this.wrap?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(e="")=>`d:${e},t:${this.transparent},w:${t}`;return null!=this.url?e(this.url):null!=this.data?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(d$2.has(this.data)||d$2.set(this.data,++h$2),e(d$2.get(this.data))):e()}clone(){const t={url:this.url,data:this.data,wrap:this.cloneWrap()};return new p$6(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const a=this.clone();return t.set(this,a),a}cloneWrap(){return "string"==typeof this.wrap?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}encodeImageData(t){let e="";for(let a=0;a<t.data.length;a++)e+=String.fromCharCode(t.data[a]);return {data:btoa(e),width:t.width,height:t.height}}decodeImageData(t){const e=atob(t.data),a=new Uint8ClampedArray(e.length);for(let r=0;r<e.length;r++)a[r]=e.charCodeAt(r);return screenshotUtils.u(a,t.width,t.height)}imageDataContainsTransparent(t){for(let e=3;e<t.data.length;e+=4)if(255!==t.data[e])return !0;return !1}static from(t){return "string"==typeof t?new p$6({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new p$6({data:t}):request.v$4(p$6,t)}};request.e([request.d({type:String,json:{write:unitUtils.p$2}})],u$7.prototype,"url",null),request.e([request.d({json:{write:{overridePolicy(){return {enabled:!this.url}}}}}),request.d()],u$7.prototype,"data",null),request.e([unitUtils.r$1("data")],u$7.prototype,"writeData",null),request.e([unitUtils.o("data")],u$7.prototype,"readData",null),request.e([request.d({type:Boolean,json:{write:{overridePolicy(){return {enabled:this._isOverridden("transparent")}}}}})],u$7.prototype,"transparent",null),request.e([request.d({json:{write:!0}})],u$7.prototype,"wrap",void 0),request.e([request.d({readOnly:!0})],u$7.prototype,"contentHash",null),u$7=p$6=request.e([request.i("esri.geometry.support.MeshTexture")],u$7);const m$6=u$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$5;let n$1=p$5=class extends JSONSupport.a{constructor(o){super(o),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0;}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(o,e){const t=request.r(o)?o.get(this):null;if(t)return t;const l=new p$5(this.clonePropertiesWithDeduplication(e));return request.r(o)&&o.set(this,l),l}clonePropertiesWithDeduplication(o){return {color:request.r(this.color)?this.color.clone():null,colorTexture:request.r(this.colorTexture)?this.colorTexture.cloneWithDeduplication(o):null,normalTexture:request.r(this.normalTexture)?this.normalTexture.cloneWithDeduplication(o):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}}};request.e([request.d({type:unitUtils.h$1,json:{write:!0}})],n$1.prototype,"color",void 0),request.e([request.d({type:m$6,json:{write:!0}})],n$1.prototype,"colorTexture",void 0),request.e([request.d({type:m$6,json:{write:!0}})],n$1.prototype,"normalTexture",void 0),request.e([request.d({nonNullable:!0,json:{write:!0}})],n$1.prototype,"alphaMode",void 0),request.e([request.d({nonNullable:!0,json:{write:!0}})],n$1.prototype,"alphaCutoff",void 0),request.e([request.d({nonNullable:!0,json:{write:!0}})],n$1.prototype,"doubleSided",void 0),n$1=p$5=request.e([request.i("esri.geometry.support.MeshMaterial")],n$1);const u$6=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n;let u$5=n=class extends u$6{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null;}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const s=request.r(e)?e.get(this):null;if(s)return s;const i=new n(this.clonePropertiesWithDeduplication(t));return request.r(e)&&e.set(this,i),i}clonePropertiesWithDeduplication(e){return {...super.clonePropertiesWithDeduplication(e),emissiveColor:request.r(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:request.r(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(e):null,occlusionTexture:request.r(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(e):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:request.r(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(e):null}}};request.e([request.d({type:unitUtils.h$1,json:{write:!0}})],u$5.prototype,"emissiveColor",void 0),request.e([request.d({type:m$6,json:{write:!0}})],u$5.prototype,"emissiveTexture",void 0),request.e([request.d({type:m$6,json:{write:!0}})],u$5.prototype,"occlusionTexture",void 0),request.e([request.d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u$5.prototype,"metallic",void 0),request.e([request.d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u$5.prototype,"roughness",void 0),request.e([request.d({type:m$6,json:{write:!0}})],u$5.prototype,"metallicRoughnessTexture",void 0),u$5=n=request.e([request.i("esri.geometry.support.MeshMaterialMetallicRoughness")],u$5);const c$4=u$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i$1;const l$4=request.s$2.getLogger("esri.geometry.support.MeshVertexAttributes");let c$3=i$1=class extends JSONSupport.a{constructor(r){super(r),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null;}castColor(r){return u$4(r,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},l$4)}castPosition(r){r&&r instanceof Float32Array&&l$4.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return u$4(r,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},l$4)}castUv(r){return u$4(r,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},l$4)}castNormal(r){return u$4(r,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},l$4)}castTangent(r){return u$4(r,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},l$4)}clone(){const r={position:request.l$1(this.position),uv:request.l$1(this.uv),normal:request.l$1(this.normal),tangent:request.l$1(this.tangent),color:request.l$1(this.color)};return new i$1(r)}clonePositional(){const r={position:request.l$1(this.position),normal:request.l$1(this.normal),tangent:request.l$1(this.tangent),uv:this.uv,color:this.color};return new i$1(r)}};function p$4(r,t,o,e){const{loggerTag:n,stride:s}=t;return r.length%s!=0?(e.error(n,`Invalid array length, expected a multiple of ${s}`),new o([])):r}function u$4(r,t,o,e,n){if(!r)return r;if(r instanceof t)return p$4(r,e,t,n);for(const s of o)if(r instanceof s)return p$4(new t(r),e,t,n);if(Array.isArray(r))return p$4(new t(r),e,t,n);{const e=o.map((r=>`'${r.name}'`));return n.error(`Failed to set property, expected one of ${e}, but got ${r.constructor.name}`),new t([])}}function g$3(r,t,o){t[o]=m$5(r);}function m$5(r){const t=new Array(r.length);for(let o=0;o<r.length;o++)t[o]=r[o];return t}request.e([request.d({json:{write:g$3}})],c$3.prototype,"color",void 0),request.e([request.c("color")],c$3.prototype,"castColor",null),request.e([request.d({nonNullable:!0,json:{write:g$3}})],c$3.prototype,"position",void 0),request.e([request.c("position")],c$3.prototype,"castPosition",null),request.e([request.d({json:{write:g$3}})],c$3.prototype,"uv",void 0),request.e([request.c("uv")],c$3.prototype,"castUv",null),request.e([request.d({json:{write:g$3}})],c$3.prototype,"normal",void 0),request.e([request.c("normal")],c$3.prototype,"castNormal",null),request.e([request.d({json:{write:g$3}})],c$3.prototype,"tangent",void 0),request.e([request.c("tangent")],c$3.prototype,"castTangent",null),c$3=i$1=request.e([request.i("esri.geometry.support.MeshVertexAttributes")],c$3);const y$4=c$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m$4;const u$3=request.s$2.getLogger("esri.geometry.support.MeshComponent");let h$1=m$4=class extends JSONSupport.a{constructor(r){super(r),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1;}static from(r){return request.v$4(m$4,r)}castFaces(r){return u$4(r,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},u$3)}castMaterial(r){return request.v$4(r&&"object"==typeof r&&("metallic"in r||"roughness"in r||"metallicRoughnessTexture"in r)?c$4:u$6,r)}clone(){return new m$4({faces:request.l$1(this.faces),shading:this.shading,material:request.l$1(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(r,t){const o={faces:request.l$1(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(r,t):null,trustSourceNormals:this.trustSourceNormals};return new m$4(o)}};request.e([request.d({json:{write:!0}})],h$1.prototype,"faces",void 0),request.e([request.c("faces")],h$1.prototype,"castFaces",null),request.e([request.d({type:u$6,json:{write:!0}})],h$1.prototype,"material",void 0),request.e([request.c("material")],h$1.prototype,"castMaterial",null),request.e([request.d({type:String,json:{write:!0}})],h$1.prototype,"shading",void 0),request.e([request.d({type:Boolean})],h$1.prototype,"trustSourceNormals",void 0),h$1=m$4=request.e([request.i("esri.geometry.support.MeshComponent")],h$1);const f$4=h$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(t){const o=l$3(t.rings,t.hasZ,1),s=[];let i=0,c=0;for(const e of o.polygons){const t=e.count,r=e.index,l=new Float64Array(o.position.buffer,3*r*o.position.BYTES_PER_ELEMENT,3*t),h=e.holeIndices.map((n=>n-r)),f=new Uint32Array(earcut.x(l,h,3));s.push({position:l,faces:f}),i+=l.length,c+=f.length;}const h=r(s,i,c),f=deduplicate.n(h.position.buffer,6,{originalIndices:h.faces});return h.position=new Float64Array(f.buffer),h.faces=f.indices,h}function r(n,t,e){if(1===n.length)return n[0];const o=new Float64Array(t),r=new Uint32Array(e);let l=0,s=0,i=0;for(const c of n){for(let n=0;n<c.position.length;n++)o[l++]=c.position[n];for(let n=0;n<c.faces.length;n++)r[s++]=c.faces[n]+i;i=l/3;}return {position:o,faces:r}}function l$3(n,t,e){const o=n.length,r=new Array(o),l=new Array(o),c=new Array(o);let h=0,f=0,g=0,a=0;for(let s=0;s<o;++s)a+=n[s].length;const u=new Float64Array(3*a);let p=0;for(let d=o-1;d>=0;d--){const a=n[d],y=1===e&&i(a);if(y&&1!==o)r[h++]=a;else {let n=a.length;for(let t=0;t<h;++t)n+=r[t].length;const e={index:p,pathLengths:new Array(h+1),count:n,holeIndices:new Array(h)};e.pathLengths[0]=a.length,a.length>0&&(c[g++]={index:p,count:a.length}),p=y?s(a,a.length-1,-1,u,p,a.length,t):s(a,0,1,u,p,a.length,t);for(let o=0;o<h;++o){const n=r[o];e.holeIndices[o]=p,e.pathLengths[o+1]=n.length,n.length>0&&(c[g++]={index:p,count:n.length}),p=s(n,0,1,u,p,n.length,t);}h=0,e.count>0&&(l[f++]=e);}}for(let i=0;i<h;++i){const n=r[i];n.length>0&&(c[g++]={index:p,count:n.length}),p=s(n,0,1,u,p,n.length,t);}return f<o&&(l.length=f),g<o&&(c.length=g),{position:u,polygons:l,outlines:c}}function s(n,t,e,o,r,l,s){r*=3;for(let i=0;i<l;++i){const l=n[t];o[r++]=l[0],o[r++]=l[1],o[r++]=s?l[2]:0,t+=e;}return r/3}function i(n){return !unitUtils.f$1(n,!1,!1)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=request.s$2.getLogger("esri.geometry.support.meshUtils.centerAt");function c$2(e,r,i){var n;if(!e.vertexAttributes||!e.vertexAttributes.position)return;const s=null!=(n=null==i?void 0:i.origin)?n:e.origin;if(request.r(e.transform))null!=(null==i?void 0:i.geographic)&&i.geographic!==e.transform.geographic&&a.warn(`Specifying the 'geographic' parameter (${i.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),f$3(e.transform,r,s);else {georeference.r(e.spatialReference,i)?p$3(e,r,s):g$2(e,r,s);}}function f$3(e,t,r){const i=t.x-r.x,o=t.y-r.y,n=t.hasZ&&r.hasZ?t.z-r.z:0,s=e.origin;e.origin=[s[0]+i,s[1]+o,s[2]+n];}function p$3(e,t,r){const i=georeference.k(e.vertexAttributes,r,{geographic:!0}),{position:o,normal:a,tangent:c}=georeference.x(i,t,{geographic:!0});e.vertexAttributes.position=o,e.vertexAttributes.normal=a,e.vertexAttributes.tangent=c,e.vertexAttributesChanged();}function g$2(e,t,r){const o=u$2,n=m$3;if(projection.wn(t,n,e.spatialReference)){if(!projection.wn(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,a.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`);}l$2(e.vertexAttributes.position,n,o),e.vertexAttributesChanged();}else a.error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid})`);}function l$2(e,t,r){if(e)for(let i=0;i<e.length;i+=3)for(let o=0;o<3;o++)e[i+o]+=t[o]-r[o];}const m$3=unitUtils.n$4(),u$2=unitUtils.n$4();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function u$1(e,s,o){const{loadGLTFMesh:n}=await request.P(Promise.resolve().then(function () { return require('./loadGLTFMesh-79fe6242.js'); }),o),a=await m$2(s,o),i=n(new unitUtils.b({x:0,y:0,z:0,spatialReference:e.spatialReference}),a.url,{resolveFile:f$2(a),useTransform:!0,signal:request.r(o)?o.signal:null});i.then((()=>a.dispose()),(()=>a.dispose()));const{vertexAttributes:l,components:u}=await i;e.vertexAttributes=l,e.components=u;}function f$2(e){const t=request.ht(e.url);return s=>{var r;const o=request.W(s,t,t),n=o?o.replace(/^ *\.\//,""):null;return null!=(r=e.files.get(n))?r:s}}async function m$2(e,t){return e instanceof Blob?y$3.fromBlob(e):"string"==typeof e?new y$3(e):Array.isArray(e)?p$2(e,t):w$3(e,t)}async function p$2(t,r){const i=new Map;let l=null;const c=await request.E$2(t.map((async e=>({name:e.name,source:await m$2(e instanceof Blob?e:e.source,r)})))),u=[];for(const e of c)e&&(request.p$2(r)?e.source.dispose():u.push(e));request.h(r);for(const{name:e,source:o}of u)(request.t(l)||/\.(gltf|glb)/i.test(e))&&(l=o.url),i.set(e,o.url),o.files&&o.files.forEach(((e,t)=>i.set(t,e)));if(request.t(l))throw new request.s$1("mesh-load-external:missing-files","Missing files to load external mesh source");return new y$3(l,(()=>u.forEach((({source:e})=>e.dispose()))),i)}async function w$3(e,t){const{default:s}=await request.P(Promise.resolve().then(function () { return require('./messageBundle-312ceb47.js'); }).then(function (n) { return n.request; }),t),o="string"==typeof e.multipart[0]?await Promise.all(e.multipart.map((async e=>(await s(e,{responseType:"array-buffer"})).data))):e.multipart;return y$3.fromBlob(new Blob(o))}class y$3{constructor(e,t=(()=>{}),s=new Map){this.url=e,this.dispose=t,this.files=s;}static fromBlob(e){const t=URL.createObjectURL(e);return new y$3(t,(()=>URL.revokeObjectURL(t)))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v$1=request.s$2.getLogger("esri.geometry.support.meshUtils.offset");function x$2(t,e,o){if(t.vertexAttributes&&t.vertexAttributes.position)if(request.r(t.transform))null!=(null==o?void 0:o.geographic)&&o.geographic!==t.transform.geographic&&v$1.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),A$2(t.transform,e);else {georeference.r(t.spatialReference,o)?b$1(t,e):y$2(t,e);}}function A$2(t,r){const e=t.origin;t.origin=unitUtils.u$3(unitUtils.n$4(),e,r);}function b$1(t,o){const i=t.spatialReference,n=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,v=new Float64Array(n.length),x=request.r(a)?new Float32Array(a.length):null,A=request.r(c)?new Float32Array(c.length):null,b=t.extent.center,y=k$2;projection.vn(i,[b.x,b.y,b.z],w$2,unitUtils.O$2(i)),mat3.a(F$1,w$2),unitUtils.L$2(y,o,F$1),georeference.v(n,i,v),request.r(a)&&georeference.F(a,n,v,i,x),request.r(c)&&georeference.B(c,n,v,i,A),d$1(v,y),georeference.M(v,n,i),request.r(a)&&georeference._$1(x,n,v,i,a),request.r(c)&&georeference.R(A,n,v,i,c),t.vertexAttributesChanged();}function y$2(t,r){d$1(t.vertexAttributes.position,r),t.vertexAttributesChanged();}function d$1(t,r){if(t)for(let e=0;e<t.length;e+=3)for(let o=0;o<3;o++)t[e+o]+=r[o];}const k$2=unitUtils.n$4(),w$2=mat4f64.e(),F$1=quatf64.e$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$1(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:r}=x$1,n=4*t.length,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(2*t.length*3);let l=0,c=0,f=0,u=0;for(let h=0;h<t.length;h++){const n=t[h],m=l/3;for(const t of e)i[u++]=m+t;const p=n.corners;for(let t=0;t<4;t++){const e=p[t];let i=0;a[f++]=.25*r[t][0]+n.uvOrigin[0],a[f++]=n.uvOrigin[1]-.25*r[t][1];for(let t=0;t<3;t++)0!==n.axis[t]?(o[l++]=.5*n.axis[t],s[c++]=n.axis[t]):(o[l++]=.5*e[i++],s[c++]=0);}}return {position:o,normal:s,uv:a,faces:i}}function c$1(e,r){const n=e.components[0],o=n.faces,a=M$1[r],i=6*a,l=new Uint32Array(6),c=new Uint32Array(o.length-6);let f=0,u=0;for(let t=0;t<o.length;t++)t>=i&&t<i+6?l[f++]=o[t]:c[u++]=o[t];if(request.r(e.vertexAttributes.uv)){const t=new Float32Array(e.vertexAttributes.uv),r=4*a*2,n=[0,1,1,1,1,0,0,0];for(let e=0;e<n.length;e++)t[r+e]=n[e];e.vertexAttributes.uv=t;}return e.components=[new f$4({faces:l,material:n.material}),new f$4({faces:c})],e}function f$1(t=0){const e=Math.round(8*2**t),r=2*e,n=(e-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*((e-1)*r*2));let l=0,c=0,f=0,u=0;for(let h=0;h<=e;h++){const t=h/e*Math.PI+.5*Math.PI,n=Math.cos(t),m=Math.sin(t);F[2]=m;const p=0===h||h===e,w=p?r-1:r;for(let v=0;v<=w;v++){const t=v/w*2*Math.PI;F[0]=-Math.sin(t)*n,F[1]=Math.cos(t)*n;for(let e=0;e<3;e++)o[l]=.5*F[e],s[l]=F[e],++l;a[c++]=(v+(p?.5:0))/r,a[c++]=h/e,0!==h&&v!==r&&(h!==e&&(i[f++]=u,i[f++]=u+1,i[f++]=u-r),1!==h&&(i[f++]=u,i[f++]=u-r,i[f++]=u-r-1)),u++;}}return {position:o,normal:s,uv:a,faces:i}}function u(t=0){const e=5,r=Math.round(16*2**t),n=(e-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*(4*r));let l=0,c=0,f=0,u=0,h=0;for(let m=0;m<=e;m++){const t=0===m||m===e,n=m<=1||m>=e-1,p=2===m||4===m,w=t?r-1:r;for(let v=0;v<=w;v++){const A=v/w*2*Math.PI,g=t?0:.5;F[0]=g*Math.sin(A),F[1]=g*-Math.cos(A),F[2]=m<=2?.5:-.5;for(let t=0;t<3;t++)o[l++]=F[t],s[c++]=n?2===t?m<=1?1:-1:0:2===t?0:F[t]/g;a[f++]=(v+(t?.5:0))/r,a[f++]=m<=1?1*m/3:m<=3?1*(m-2)/3+1/3:1*(m-4)/3+2/3,p||0===m||v===r||(m!==e&&(i[u++]=h,i[u++]=h+1,i[u++]=h-r),1!==m&&(i[u++]=h,i[u++]=h-r,i[u++]=h-r-1)),h++;}}return {position:o,normal:s,uv:a,faces:i}}function h(t){const e=v.facingAxisOrderSwap[t],r=v.position,n=v.normal,o=new Float64Array(r.length),s=new Float32Array(n.length);let a=0;for(let i=0;i<4;i++){const t=a;for(let i=0;i<3;i++){const l=e[i],c=Math.abs(l)-1,f=l>=0?1:-1;o[a]=r[t+c]*f,s[a]=n[t+c]*f,a++;}}return {position:o,normal:s,uv:new Float32Array(v.uv),faces:new Uint32Array(v.faces)}}const m$1=1,p$1=2,w$1=3,v={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[w$1,m$1,p$1],west:[-w$1,-m$1,p$1],north:[-m$1,w$1,p$1],south:[m$1,-w$1,p$1],up:[m$1,p$1,w$1],down:[m$1,-p$1,-w$1]}};function A$1(t,e,r){g$1(t),y$1(t,r&&r.size);const{vertexAttributes:n,transform:o}=georeference.b(t,e,r);return {vertexAttributes:new y$4({...n,uv:t.uv}),transform:o,components:[new f$4({faces:t.faces,material:r&&r.material||null})],spatialReference:e.spatialReference}}function g$1(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5;}function y$1(t,e){if(null==e)return;const o="number"==typeof e?[e,e,e]:[null!=e.width?e.width:1,null!=e.depth?e.depth:1,null!=e.height?e.height:1];O$1[0]=o[0],O$1[4]=o[1],O$1[8]=o[2];for(let n=0;n<t.position.length;n+=3){for(let e=0;e<3;e++)F[e]=t.position[n+e];unitUtils.L$2(F,F,O$1);for(let e=0;e<3;e++)t.position[n+e]=F[e];}if(o[0]!==o[1]||o[1]!==o[2]){O$1[0]=1/o[0],O$1[4]=1/o[1],O$1[8]=1/o[2];for(let e=0;e<t.normal.length;e+=3){for(let r=0;r<3;r++)F[r]=t.normal[e+r];unitUtils.L$2(F,F,O$1),unitUtils.j$3(F,F);for(let r=0;r<3;r++)t.normal[e+r]=F[r];}}}const x$1={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},M$1={south:0,east:1,north:2,west:3,up:4,down:5},F=unitUtils.n$4(),O$1=quatf64.e$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const z=request.s$2.getLogger("esri.geometry.support.meshUtils.rotate");function C(t,e,o){if(!t.vertexAttributes||!t.vertexAttributes.position||0===e[3])return;const i=t.spatialReference;if(request.r(t.transform)){var n;null!=(null==o?void 0:o.geographic)&&o.geographic!==t.transform.geographic&&z.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const r=null!=(n=null==o?void 0:o.origin)?n:t.transform.getOriginPoint(i);I$1(t.transform,e,r);}else {var s;const r=null!=(s=null==o?void 0:o.origin)?s:t.origin;georeference.r(t.spatialReference,o)?U(t,e,r):D$1(t,e,r);}}function I$1(t,r,e){const o=unitUtils.o$6(M,e.x,e.y,e.z),i=unitUtils.c$16(M,o,t.origin);t.applyLocalInverse(i,O),t.rotation=georeference.q(t.rotation,r,georeference.a()),t.applyLocalInverse(i,i),unitUtils.c$16(i,i,O),t.translation=unitUtils.u$3(unitUtils.n$4(),t.translation,i);}function U(t,e,i){const n=t.spatialReference,s=unitUtils.O$2(n),a=q;projection.wn(i,a,s)||projection.wn(t.origin,a,s);const c=t.vertexAttributes.position,f=t.vertexAttributes.normal,l=t.vertexAttributes.tangent,m=new Float64Array(c.length),g=request.r(f)?new Float32Array(f.length):null,u=request.r(l)?new Float32Array(l.length):null;projection.vn(s,a,S$1,s),mat3.a(Z$1,S$1);const d=P;unitUtils.L$2(georeference.l(P),georeference.l(e),Z$1),d[3]=e[3],georeference.v(c,n,m),request.r(f)&&georeference.F(f,c,m,n,g),request.r(l)&&georeference.B(l,c,m,n,u),E$1(m,d,3,a),georeference.M(m,c,n),request.r(f)&&(E$1(g,d,3),georeference._$1(g,c,m,n,f)),request.r(l)&&(E$1(u,d,4),georeference.R(u,c,m,n,l)),t.vertexAttributesChanged();}function D$1(t,r,e){const o=q;if(!projection.wn(e,o,t.spatialReference)){const r=t.origin;o[0]=r.x,o[1]=r.y,o[2]=r.z,z.error(`Failed to project specified origin (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`);}E$1(t.vertexAttributes.position,r,3,o),E$1(t.vertexAttributes.normal,r,3),E$1(t.vertexAttributes.tangent,r,4),t.vertexAttributesChanged();}function E$1(t,r,o,i=unitUtils.f$4){if(!request.t(t)){mat4.r(S$1),mat4.f(S$1,S$1,georeference.x$1(r),georeference.l(r));for(let r=0;r<t.length;r+=o){for(let e=0;e<3;e++)M[e]=t[r+e]-i[e];unitUtils.I$2(M,M,S$1);for(let e=0;e<3;e++)t[r+e]=M[e]+i[e];}}}const M=unitUtils.n$4(),O=unitUtils.n$4(),P=georeference.a(),S$1=mat4f64.e(),Z$1=quatf64.e$1(),q=unitUtils.n$4();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d=request.s$2.getLogger("esri.geometry.support.meshUtils.scale");function j(e,r,o){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const i=e.spatialReference;if(request.r(e.transform)){var n;null!=(null==o?void 0:o.geographic)&&o.geographic!==e.transform.geographic&&d.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const t=null!=(n=null==o?void 0:o.origin)?n:e.transform.getOriginPoint(i);x(e.transform,r,t);}else {const t=georeference.r(e.spatialReference,o),i=o&&o.origin||e.origin;t?A(e,r,i):b(e,r,i);}}function x(e,t,a){const c=unitUtils.o$6(w,a.x,a.y,a.z),l=unitUtils.c$16(w,c,e.origin);e.applyLocalInverse(l,k$1);const p=unitUtils.d$2(unitUtils.n$4(),e.scale,t);e.scale=p,e.applyLocalInverse(l,l),unitUtils.c$16(l,l,k$1),e.translation=unitUtils.u$3(unitUtils.n$4(),e.translation,l);}function A(e,r,o){const i=e.spatialReference,n=unitUtils.O$2(i),s=R;projection.wn(o,s,n)||projection.wn(e.origin,s,n);const a=e.vertexAttributes.position,p=e.vertexAttributes.normal,d=e.vertexAttributes.tangent,j=new Float64Array(a.length),x=request.r(p)?new Float32Array(p.length):null,A=request.r(d)?new Float32Array(d.length):null;georeference.v(a,i,j),request.r(p)&&georeference.F(p,a,j,i,x),request.r(d)&&georeference.B(d,a,j,i,A),y(j,r,s),georeference.M(j,a,i),request.r(p)&&georeference._$1(x,a,j,i,p),request.r(d)&&georeference.R(A,a,j,i,d),e.vertexAttributesChanged();}function b(e,t,r){const o=R;if(!projection.wn(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,d.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`);}y(e.vertexAttributes.position,t,o),e.vertexAttributesChanged();}function y(e,t,r=unitUtils.f$4){if(e)for(let o=0;o<e.length;o+=3){for(let t=0;t<3;t++)w[t]=e[o+t]-r[t];unitUtils.d$2(w,w,t);for(let t=0;t<3;t++)e[o+t]=w[t]+r[t];}}const w=unitUtils.n$4(),k$1=unitUtils.n$4(),R=unitUtils.n$4();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var E;const G=request.s$2.getLogger("esri.geometry.Mesh");let S=E=class extends(unitUtils.m.LoadableMixin(request.n$3(unitUtils.p))){constructor(e){super(e),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new c$3,this.type="mesh";}initialize(){(request.t(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded");}get hasExtent(){return !this.loaded&&request.r(this.external)&&request.r(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const e=this.vertexAttributes.position,t=this.spatialReference;if(0===e.length||this.components&&0===this.components.length)return {extent:new unitUtils.M({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t}),center:new unitUtils.b({x:0,y:0,z:0,spatialReference:t})};const o=request.r(this.transform)?this.transform.project(e,t):e;let r=1/0,n=1/0,i=1/0,a=-1/0,l=-1/0,p=-1/0,c=0,m=0,u=0;const d=o.length,x=1/(d/3);let y=0;for(;y<d;){const e=o[y++],t=o[y++],s=o[y++];r=Math.min(r,e),n=Math.min(n,t),i=Math.min(i,s),a=Math.max(a,e),l=Math.max(l,t),p=Math.max(p,s),c+=x*e,m+=x*t,u+=x*s;}return {extent:new unitUtils.M({xmin:r,ymin:n,zmin:i,xmax:a,ymax:l,zmax:p,spatialReference:t}),center:new unitUtils.b({x:c,y:m,z:u,spatialReference:t})}}get anchor(){if(request.r(this.transform))return this.transform.getOriginPoint(this.spatialReference);const e=this.boundingInfo;return new unitUtils.b({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}get origin(){return request.r(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return !this.loaded&&request.r(this.external)&&request.r(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(e){this.loaded?(this.components||(this.components=[]),this.components.push(f$4.from(e)),this.notifyChange("components")):G.error("addComponent()","Mesh must be loaded before applying operations");}removeComponent(e){if(this.loaded){if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}G.error("removeComponent()","Provided component is not part of the list of components");}else G.error("removeComponent()","Mesh must be loaded before applying operations");}rotate(e,t,o,r){return georeference.k$1(I.x,e,B),georeference.k$1(I.y,t,k),georeference.k$1(I.z,o,D),georeference.q(B,k,B),georeference.q(B,D,B),C(this,B,r),this}offset(e,t,o,r){return this.loaded?(W[0]=e,W[1]=t,W[2]=o,x$2(this,W,r),this):(G.error("offset()","Mesh must be loaded before applying operations"),this)}scale(e,t){return this.loaded?(j(this,e,t),this):(G.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(e,t){return this.loaded?(c$2(this,e,t),this):(G.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(e){return request.r(this.external)&&this.addResolvingPromise(u$1(this,this.external.source,e)),Promise.resolve(this)}clone(){const e=this.components?new Map:null,t=this.components?new Map:null,o={components:this.components?this.components.map((o=>o.cloneWithDeduplication(e,t))):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:request.r(this.transform)?this.transform.clone():null,external:request.r(this.external)?{source:this.external.source,extent:request.r(this.external.extent)?this.external.extent.clone():null}:null};return new E(o)}vertexAttributesChanged(){this.notifyChange("vertexAttributes");}async toBinaryGLTF(e){const{toBinaryGLTF:t}=await Promise.resolve().then(function () { return require('./gltfexport-34bdf827.js'); });return t(this,e)}static createBox(e,t){if(!(e instanceof unitUtils.b))return G.error(".createBox()","expected location to be a Point instance"),null;const o=new E(A$1(l$1(),e,t));return t&&t.imageFace&&"all"!==t.imageFace?c$1(o,t.imageFace):o}static createSphere(e,t){return e instanceof unitUtils.b?new E(A$1(f$1(t&&t.densificationFactor||0),e,t)):(G.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(e,t){return e instanceof unitUtils.b?new E(A$1(u(t&&t.densificationFactor||0),e,t)):(G.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(e,t){return e instanceof unitUtils.b?new E(A$1(h(t&&t.facing||"up"),e,t)):(G.error(".createPlane()","expected location to be a Point instance"),null)}static createFromPolygon(e,t){if(!(e instanceof unitUtils.v))return G.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const o$1=o(e);return new E({vertexAttributes:new c$3({position:o$1.position}),components:[new f$4({faces:o$1.faces,shading:"flat",material:t&&t.material||null})],spatialReference:e.spatialReference})}static async createFromGLTF(e,o,r){if(!(e instanceof unitUtils.b))throw G.error(".createfromGLTF()","expected location to be a Point instance"),new request.s$1("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:n}=await request.P(Promise.resolve().then(function () { return require('./loadGLTFMesh-79fe6242.js'); }),r);return new E(await n(e,o,r))}static createWithExternalSource(e,t,o){var r,n,s;const i=null!=(r=null==o?void 0:o.extent)?r:null,a=null!=(n=null==o?void 0:o.transform.clone())?n:new georeference.O;a.origin=[e.x,e.y,null!=(s=e.z)?s:0];const l=e.spatialReference;return new E({external:{source:t,extent:i},transform:a,spatialReference:l})}static createIncomplete(e,o){var r,n;const s=null!=(r=null==o?void 0:o.transform.clone())?r:new georeference.O;s.origin=[e.x,e.y,null!=(n=e.z)?n:0];const i=e.spatialReference,a=new E({transform:s,spatialReference:i});return a.addResolvingPromise(Promise.reject(new request.s$1("mesh-incomplete","Mesh resources are not complete"))),a}};request.e([request.d({type:[f$4],json:{write:!0}})],S.prototype,"components",void 0),request.e([request.d({type:georeference.O,json:{write:!0}})],S.prototype,"transform",void 0),request.e([request.d({constructOnly:!0})],S.prototype,"external",void 0),request.e([request.d({readOnly:!0})],S.prototype,"hasExtent",null),request.e([request.d({readOnly:!0})],S.prototype,"boundingInfo",null),request.e([request.d({readOnly:!0})],S.prototype,"anchor",null),request.e([request.d({readOnly:!0})],S.prototype,"origin",null),request.e([request.d({readOnly:!0,json:{read:!1}})],S.prototype,"extent",null),request.e([request.d({readOnly:!0,json:{read:!1,write:!0,default:!0}})],S.prototype,"hasZ",void 0),request.e([request.d({readOnly:!0,json:{read:!1,write:!0,default:!1}})],S.prototype,"hasM",void 0),request.e([request.d({type:c$3,nonNullable:!0,json:{write:!0}})],S.prototype,"vertexAttributes",void 0),S=E=request.e([request.i("esri.geometry.Mesh")],S);const I={x:unitUtils.r$7(1,0,0),y:unitUtils.r$7(0,1,0),z:unitUtils.r$7(0,0,1)},B=georeference.a(),k=georeference.a(),D=georeference.a(),W=unitUtils.n$4(),Z=S;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(s,o,n){const a=n.features;n.features=[],delete n.geometryType;const i=FeatureSet['default'].fromJSON(n);i.geometryType="mesh";const l=i.spatialReference,f=request.t(s.outFields)||!s.outFields.length?()=>({}):m(s.outFields.includes("*")?null:new Set(s.outFields));for(const e of a){const s=c(e,l,o);request.r(s)&&i.features.push(new unitUtils.h({geometry:s,attributes:f(e)}));}return i}function m(t){return ({attributes:e})=>{if(!e)return {};if(!t)return e;for(const r in e)t.has(r)||delete e[r];return e}}function c(t,e,r){const{status:n,source:a}=g(t);if(0===n)return null;const i=f(t,e,r),u=unitUtils.M.fromJSON(t.geometry);u.spatialReference=e;const l=p(t,r);return 1===n?Z.createIncomplete(i,{extent:u,transform:l}):Z.createWithExternalSource(i,a,{extent:u,transform:l})}function f({attributes:t},e,{transformFieldRoles:r}){return new unitUtils.b({x:t[r.originX],y:t[r.originY],z:t[r.originZ],spatialReference:e})}function p({attributes:t,assetMappings:e},{transformFieldRoles:r}){var s;return new georeference.O({translation:[t[r.translationX],t[r.translationY],t[r.translationZ]],rotation:georeference.k$1([t[r.rotationX],t[r.rotationY],t[r.rotationZ]],t[r.rotationDeg]),scale:[t[r.scaleX],t[r.scaleY],t[r.scaleZ]],geographic:!(null!=(s=e.flags)&&s.includes("PROJECT_VERTICES"))})}function g(t){if(!t.assetMappings)return {status:0};const e=[],r=new Map;for(const s of t.assetMappings){const t=s.seqNo,o=s.assetName,n=s.assetURL,a=s.conversionStatus;if("FAILED"===a)return {status:0};if("COMPLETED"!==a)return {status:1};if(null==t)e.push({name:o,source:n});else {const s=r.get(o);let a;s?a=s.multipart:(a=[],e.push({name:o,source:{multipart:a}}),r.set(o,{multipart:a})),a[t]=n;}}return {status:2,source:e}}

const meshFeatureSet = /*#__PURE__*/Object.freeze({
	__proto__: null,
	meshFeatureSetFromJSON: l
});

exports.c = c$4;
exports.f = f$4;
exports.m = m$6;
exports.meshFeatureSet = meshFeatureSet;
exports.y = y$4;