import{t as e}from"./p-d30fd87a.js";import{bL as t,t as o,al as i,v as r,k as a,bk as n,a2 as s,cn as l,cH as c,r as u,cI as d,aA as h,b7 as v,m,aB as f,ca as p,a7 as g,bX as x,e as b,O as w,_ as y,aa as S,aJ as C}from"./p-9ae46e68.js";import{j as _}from"./p-39da60a5.js";import{a as M}from"./p-2794293b.js";import{G as T,c as A,h as P}from"./p-138c2b2c.js";import{e as z}from"./p-01158f1c.js";import{bd as F,bv as O,c8 as D,cN as L,cV as N,bu as R,c3 as I,cW as H,bw as V,cX as E,cY as $,b_ as G,bX as B,F as k,bQ as W,c1 as j,cH as U,bY as q,ad as X,cc as K,bx as Q,bZ as Z,cZ as Y,c_ as J,c$ as ee,c5 as te,d0 as oe}from"./p-566b0715.js";import{c as ie,x as re,u as ae,i as ne,L as se,O as le,E as ce}from"./p-19c767c2.js";import{e as ue,f as de,r as he,a as ve}from"./p-76b2eeb3.js";import{l as me,u as fe,h as pe,a as ge,n as xe,r as be,b as we,c as ye,f as Se,e as Ce,t as _e,o as Me,i as Te,d as Ae,g as Pe}from"./p-1184fb6f.js";import{a as ze}from"./p-57ae469d.js";import{r as Fe}from"./p-b1a3d539.js";import{t as Oe,r as De,g as Le,u as Ne,c as Re,s as Ie,b as He,l as Ve,d as Ee,e as $e,f as Ge}from"./p-90a5b22e.js";import{i as Be,r as ke,c as We,P as je}from"./p-2455867d.js";import{o as Ue,n as qe,u as Xe,c as Ke}from"./p-7c7c5507.js";import{o as Qe,f as Ze,h as Ye,l as Je,r as et,e as tt}from"./p-81abd5fc.js";import{A as ot}from"./p-aaefdd7f.js";import"./p-e49afbb8.js";import{t as it}from"./p-b1c9647c.js";import{a as rt}from"./p-7571af29.js";import"./p-d925341f.js";import"./p-c3efb223.js";import{c as at}from"./p-3a5fe179.js";class nt{constructor(e,t,o,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=o,this.position=i,this.center=F(),Be(e.length>=1),Be(o.length%this._numIndexPerPrimitive==0),Be(o.length>=e.length*this._numIndexPerPrimitive),Be(3===i.size||4===i.size);const{data:r,size:a}=i,n=e.length;let s=a*o[this._numIndexPerPrimitive*e[0]];st.clear(),st.push(s),this.bbMin=O(r[s],r[s+1],r[s+2]),this.bbMax=D(this.bbMin);for(let t=0;t<n;++t){const i=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=a*o[i+e],st.push(s);let t=r[s];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=r[s+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=r[s+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}L(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let e=0;e<st.length;++e){s=st.getItemAt(e);const t=r[s]-this.center[0],o=r[s+1]-this.center[1],i=r[s+2]-this.center[2],a=t*t+o*o+i*i;if(a<=l)continue;const n=Math.sqrt(a),c=.5*(n-this.radius);this.radius=this.radius+c,l=this.radius*this.radius;const u=c/n;this.center[0]+=t*u,this.center[1]+=o*u,this.center[2]+=i*u}st.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(N(this.bbMin,this.bbMax)>1){const e=L(F(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,o=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:r,size:a}=this.position;for(let n=0;n<t;++n){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[n];let l=a*this.indices[s],c=r[l],u=r[l+1],d=r[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=a*this.indices[s+e];const t=r[l],o=r[l+1],i=r[l+2];t<c&&(c=t),o<u&&(u=o),i<d&&(d=i)}c<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),o[n]=t,++i[t]}let n=0;for(let e=0;e<8;++e)i[e]>0&&++n;if(n<2)return;const s=new Array(8);for(let e=0;e<8;++e)s[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=o[e];s[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==s[e]&&(this._children[e]=new nt(s[e],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){st.prune()}}const st=new t({deallocator:null});class lt extends ke{constructor(e,t=[],o=0,i=-1){super(),this._primitiveType=o,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,o]of e)o&&this._vertexAttributes.set(t,{...o});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=me(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,o]of t)o&&(this._indices.set(e,ct(o)),"position"===e&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return o(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position"),o=this.vertexAttributes.get("position");return fe(o,t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position"),o=this.vertexAttributes.get("position");return pe(o,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;Be(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const o=me(e.length/t),i=this.vertexAttributes.get("position");return new nt(o,t,e,i)}}function ct(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}let ut,dt=null,ht=null;async function vt(){return o(ht)&&(ht=function(){if(o(ut)){const e=e=>i(`esri/libs/basisu/${e}`);ut=import("./p-f224bea9.js").then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return ut}(),dt=await ht),ht}function mt(e,t,o,i,r){const a=Qe(t?37496:37492);return Math.ceil(o*i*a*(r&&e>1?(4**e-1)/(3*4**(e-1)):1))}function ft(e){return e.getNumImages()>=1&&!e.isUASTC()}function pt(e){return e.getFaces()>=1&&e.isETC1S()}function gt(e,t,o,i,r,a,n,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,d]=l?i?[1,37496]:[0,37492]:c?i?[3,33779]:[2,33776]:[13,6408],h=t.hasMipmap?o:Math.min(1,o),v=[];for(let e=0;e<h;e++)v.push(new Uint8Array(n(e,u))),s(e,u,v[e]);const m=v.length>1,f=m?9987:9729,p={...t,samplingMode:f,hasMipmap:m,internalFormat:d,width:r,height:a};return new Ue(e,p,{type:"compressed",levels:v})}const xt=r.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function bt(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const wt=bt("DXT1"),yt=bt("DXT3"),St=bt("DXT5");const Ct=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),_t=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Mt=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];class Tt extends ke{constructor(e,t){super(),this.data=e,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new a,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Tt.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;o(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){n(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){s(e.src)||n(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(o(e))return 0;if(l(e)||c(e))return t.encoding===Tt.KTX2_ENCODING?function(e,t){if(o(dt))return e.byteLength;const i=new dt.KTX2File(new Uint8Array(e)),r=pt(i)?mt(i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),t):0;return i.close(),i.delete(),r}(e,t.mipmap):t.encoding===Tt.BASIS_ENCODING?function(e,t){if(o(dt))return e.byteLength;const i=new dt.BasisFile(new Uint8Array(e)),r=ft(i)?mt(i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),t):0;return i.close(),i.delete(),r}(e,t.mipmap):e.byteLength;const{width:i,height:r}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Tt.getDataDimensions(e):t;return(t.mipmap?4/3:1)*i*r*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var t;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,t){if(u(this._glTexture))return this._glTexture;if(u(this._loadingPromise))return this._loadingPromise;const i=this.data;return o(i)?(this._glTexture=new Ue(e,this.createDescriptor(e),null),this._glTexture):"string"==typeof i?this.loadFromURL(e,t,i):i instanceof Image?this.loadFromImageElement(e,t,i):i instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this.loadFromImage(e,i,t):(l(i)||c(i))&&this.params.encoding===Tt.DDS_ENCODING?this.loadFromDDSData(e,i):(l(i)||c(i))&&this.params.encoding===Tt.KTX2_ENCODING?this.loadFromKTX2(e,i):(l(i)||c(i))&&this.params.encoding===Tt.BASIS_ENCODING?this.loadFromBasis(e,i):c(i)?this.loadFromPixelData(e,i):l(i)?this.loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,i){if(!(this.data instanceof HTMLVideoElement)||o(this._glTexture))return i;if(this.data.readyState<2||i===this.data.currentTime)return i;if(u(this._powerOfTwoStretchInfo)){const{framebuffer:o,vao:i,sourceTexture:r}=this._powerOfTwoStretchInfo;r.setData(this.data),this.drawStretchedTexture(e,t,o,i,r,this._glTexture)}else{const{width:e,height:t}=this.data,{width:o,height:i}=this._glTexture.descriptor;e!==o||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,o),Math.min(t,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this._glTexture=function(e,t,o){const{textureData:i,internalFormat:r,width:a,height:n}=function(e,t){const o=new Int32Array(e,0,31);if(542327876!==o[0])return xt.error("Invalid magic number in DDS header"),null;if(!(4&o[20]))return xt.error("Unsupported format, must contain a FourCC code"),null;const i=o[21];let r,a;switch(i){case wt:r=8,a=33776;break;case yt:r=16,a=33778;break;case St:r=16,a=33779;break;default:return xt.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let n=1,s=o[4],l=o[3];0==(3&s)&&0==(3&l)||(xt.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,u=l;let d,h;131072&o[2]&&!1!==t&&(n=Math.max(1,o[7])),1===n||R(s)&&R(l)||(xt.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let v=o[1]+4;const m=[];for(let t=0;t<n;++t)h=(s+3>>2)*(l+3>>2)*r,d=new Uint8Array(e,v,h),m.push(d),v+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:m},internalFormat:a,width:c,height:u}}(o,t.hasMipmap);return t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=r,t.width=a,t.height=n,new Ue(e,t,i)}(e,this.createDescriptor(e),t),this._glTexture}loadFromKTX2(e,t){return this.loadAsync((()=>async function(e,t,i){o(dt)&&(dt=await vt());const r=new dt.KTX2File(new Uint8Array(i));if(!pt(r))return null;r.startTranscoding();const a=gt(e,t,r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),((e,t)=>r.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,o)=>r.transcodeImage(o,e,0,0,t,0,-1,-1)));return r.close(),r.delete(),a}(e,this.createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}loadFromBasis(e,t){return this.loadAsync((()=>async function(e,t,i){o(dt)&&(dt=await vt());const r=new dt.BasisFile(new Uint8Array(i));if(!ft(r))return null;r.startTranscoding();const a=gt(e,t,r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),((e,t)=>r.getImageTranscodedSizeInBytes(0,e,t)),((e,t,o)=>r.transcodeImage(o,0,e,t,0,0)));return r.close(),r.delete(),a}(e,this.createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}loadFromPixelData(e,t){Be(this.params.width>0&&this.params.height>0);const o=this.createDescriptor(e);return o.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,o.width=this.params.width,o.height=this.params.height,this._glTexture=new Ue(e,o,t),this._glTexture}loadFromURL(e,t,o){return this.loadAsync((async i=>{const r=await Oe(o,{signal:i});return this.loadFromImage(e,r,t)}))}loadFromImageElement(e,t,o){return o.complete?this.loadFromImage(e,o,t):this.loadAsync((async i=>{const r=await d(o,o.src,!1,i);return this.loadFromImage(e,r,t)}))}loadFromVideoElement(e,t,o){return o.readyState>=2?this.loadFromImage(e,o,t):this.loadFromVideoElementAsync(e,t,o)}loadFromVideoElementAsync(e,t,o){return this.loadAsync((i=>new Promise(((r,a)=>{const n=()=>{o.removeEventListener("loadeddata",s),o.removeEventListener("error",l),f(c)},s=()=>{o.readyState>=2&&(n(),r(this.loadFromImage(e,o,t)))},l=e=>{n(),a(e||new m("Failed to load video"))};o.addEventListener("loadeddata",s),o.addEventListener("error",l);const c=h(i,(()=>l(v())))}))))}loadFromImage(e,t,o){const i=Tt.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const r=this.createDescriptor(e);return r.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,r)||R(i.width)&&R(i.height)?(r.width=i.width,r.height=i.height,this._glTexture=new Ue(e,r,t),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(e,t,i,r,o),this._glTexture)}loadAsync(e){const t=new AbortController;this._loadingController=t;const o=e(t.signal);this._loadingPromise=o;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===o&&(this._loadingPromise=null)};return o.then(i,i),o}requiresPowerOfTwo(e,t){const o=33071,i="number"==typeof t.wrapMode?t.wrapMode===o:t.wrapMode.s===o&&t.wrapMode.t===o;return!qe(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,o,i,r){const{width:a,height:n}=o,s=I(a),l=I(n);let c;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[a/s,n/l],c=new Ue(e,i),c.updateData(0,0,0,a,n,t);break;case 1:case null:case void 0:c=this.stretchToPowerOfTwo(e,t,i,r())}return i.hasMipmap&&c.generateMipmap(),c}stretchToPowerOfTwo(e,t,o,i){const r=new Ue(e,o),a=new Je(e,{colorTarget:0,depthStencilTarget:0},r),n=new Ue(e,{target:3553,pixelFormat:o.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!o.flipped,maxAnisotropy:8,preMultiplyAlpha:o.preMultiplyAlpha},t),s=function(e,t=_t,o=Ct,i=-1,r=1){let a=null;return a=t===Mt?new Float32Array([i,i,0,0,r,i,1,0,i,r,0,1,r,r,1,1]):new Float32Array([i,i,r,i,i,r,r,r]),new Ze(e,o,{geometry:t},{geometry:Ye.createVertex(e,35044,a)})}(e),l=e.getBoundFramebufferObject();return this.drawStretchedTexture(e,i,a,s,n,r),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:a}:(s.dispose(!0),n.dispose(),a.detachColorTexture(),a.dispose()),e.bindFramebuffer(l),r}drawStretchedTexture(e,t,o,i,r,a){e.bindFramebuffer(o);const n=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const s=t.program;e.useProgram(s),s.setUniform4f("color",1,1,1,1),s.bindTexture(r,"tex"),e.bindVAO(i),t.bindPipelineState(e),e.drawArrays(5,0,et(i,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if(u(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:o}=this._powerOfTwoStretchInfo;t.dispose(!0),o.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(u(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),u(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function At(e,...t){let o="";for(let i=0;i<t.length;i++)o+=e[i]+t[i];return o+=e[e.length-1],o}function Pt(e,t){const o=e.fragment;switch(t.alphaDiscardMode){case 0:o.code.add(At`
        #define discardOrAdjustAlpha(color) { if (color.a < ${At.float(.001)}) { discard; } }
      `);break;case 1:o.code.add(At`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:o.uniforms.add("textureAlphaCutoff","float"),o.code.add(At`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(At`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function zt(e,t,o,i){return function(e,t){return Math.max(H(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,function(e,t,o){const i=o.parameters,r=o.paddingPixelsOverride;return Ft.scale=Math.min(i.divisor/(t-i.offset),1),Ft.factor=function(e){return Math.abs(e*e*e)}(e),Ft.minPixelSize=i.minPixelSize,Ft.paddingPixels=r,Ft}(t,o,i))}Tt.DDS_ENCODING="image/vnd-ms.dds",Tt.KTX2_ENCODING="image/ktx2",Tt.BASIS_ENCODING="image/x.basis",function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(At||(At={}));const Ft={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Ot=W();function Dt(e,t,o,i,r,a,n){if(!We(t))if(e.boundingInfo)Be(0===e.primitiveType),Nt(e.boundingInfo,i,r,o.tolerance,a,n);else{const t=e.indices.get("position"),o=e.vertexAttributes.get("position");It(i,r,0,t.length/3,t,o,void 0,a,n)}}const Lt=F();function Nt(e,t,i,r,a,n){if(o(e))return;const s=function(e,t){return V(Lt,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,i);if(E(Ot,e.getBBMin()),$(Ot,e.getBBMax()),u(a)&&a.applyToAabb(Ot),function(e,t,o,i){return function(e,t,o,i){const r=(e[0]-i-t[0])*o[0],a=(e[3]+i-t[0])*o[0];let n=Math.min(r,a),s=Math.max(r,a);const l=(e[1]-i-t[1])*o[1],c=(e[4]+i-t[1])*o[1];if(s=Math.min(s,Math.max(l,c)),s<0)return!1;if(n=Math.max(n,Math.min(l,c)),n>s)return!1;const u=(e[2]-i-t[2])*o[2],d=(e[5]+i-t[2])*o[2];return s=Math.min(s,Math.max(u,d)),!(s<0)&&(n=Math.max(n,Math.min(u,d)),!(n>s)&&n<1/0)}(Ot,t,o,i)}(0,t,s,r)){const{primitiveIndices:o,indices:s,position:l}=e,c=o?o.length:s.length/3;if(c>kt){const o=e.getChildren();if(void 0!==o){for(let e=0;e<8;++e)void 0!==o[e]&&Nt(o[e],t,i,r,a,n);return}}It(t,i,0,c,s,l,o,a,n)}}const Rt=F();function It(e,t,o,i,r,a,n,s,l){if(n)return function(e,t,o,i,r,a,n,s,l){const c=a.data,d=a.stride||a.size,h=e[0],v=e[1],m=e[2],f=t[0]-h,p=t[1]-v,g=t[2]-m;for(let e=o;e<i;++e){const t=n[e];let o=3*t,i=d*r[o++],a=c[i++],x=c[i++],b=c[i];i=d*r[o++];let w=c[i++],y=c[i++],S=c[i];i=d*r[o];let C=c[i++],_=c[i++],M=c[i];u(s)&&([a,x,b]=s.applyToVertex(a,x,b,e),[w,y,S]=s.applyToVertex(w,y,S,e),[C,_,M]=s.applyToVertex(C,_,M,e));const T=w-a,A=y-x,P=S-b,z=C-a,F=_-x,O=M-b,D=p*O-F*g,L=g*z-O*f,N=f*F-z*p,R=T*D+A*L+P*N;if(Math.abs(R)<=Number.EPSILON)continue;const I=h-a,H=v-x,V=m-b,E=I*D+H*L+V*N;if(R>0){if(E<0||E>R)continue}else if(E>0||E<R)continue;const $=H*P-A*V,G=V*T-P*I,B=I*A-T*H,k=f*$+p*G+g*B;if(R>0){if(k<0||E+k>R)continue}else if(k>0||E+k<R)continue;const W=(z*$+F*G+O*B)/R;W>=0&&l(W,Et(T,A,P,z,F,O,Rt),t)}}(e,t,o,i,r,a,n,s,l);const c=a.data,d=a.stride||a.size,h=e[0],v=e[1],m=e[2],f=t[0]-h,p=t[1]-v,g=t[2]-m;for(let e=o,t=3*o;e<i;++e){let o=d*r[t++],i=c[o++],a=c[o++],n=c[o];o=d*r[t++];let x=c[o++],b=c[o++],w=c[o];o=d*r[t++];let y=c[o++],S=c[o++],C=c[o];u(s)&&([i,a,n]=s.applyToVertex(i,a,n,e),[x,b,w]=s.applyToVertex(x,b,w,e),[y,S,C]=s.applyToVertex(y,S,C,e));const _=x-i,M=b-a,T=w-n,A=y-i,P=S-a,z=C-n,F=p*z-P*g,O=g*A-z*f,D=f*P-A*p,L=_*F+M*O+T*D;if(Math.abs(L)<=Number.EPSILON)continue;const N=h-i,R=v-a,I=m-n,H=N*F+R*O+I*D;if(L>0){if(H<0||H>L)continue}else if(H>0||H<L)continue;const V=R*T-M*I,E=I*_-T*N,$=N*M-_*R,G=f*V+p*E+g*$;if(L>0){if(G<0||H+G>L)continue}else if(G>0||H+G<L)continue;const B=(A*V+P*E+z*$)/L;B>=0&&l(B,Et(_,M,T,A,P,z,Rt),e)}}const Ht=F(),Vt=F();function Et(e,t,o,i,r,a,n){return V(Ht,e,t,o),V(Vt,i,r,a),G(n,Ht,Vt),B(n,n),n}function $t(e,t){const o=t?$t(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=Gt(i)),null==i&&t in o||(o[t]=i)}return o}function Gt(e){const t=[];return e.forEach((e=>t.push(e))),t}const Bt={multiply:1,ignore:2,replace:3,tint:4},kt=1e3;class Wt extends ke{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Ct,this._parameters=$t(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){(function(e,t){let o=!1;for(const i in t){const r=t[i];void 0!==r&&(o=!0,e[i]=Array.isArray(r)?r.slice():r)}return o})(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){u(this.repository)&&this.repository.materialChanged(this)}}const jt=new class{constructor(e=0){this.offset=e,this.sphere=je(),this.tmpVertex=F()}applyToVertex(e,t,o){const i=this.objectTransform.transform;let r=i[0]*e+i[4]*t+i[8]*o+i[12],a=i[1]*e+i[5]*t+i[9]*o+i[13],n=i[2]*e+i[6]*t+i[10]*o+i[14];const s=this.offset/Math.sqrt(r*r+a*a+n*n);r+=r*s,a+=a*s,n+=n*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*r+l[4]*a+l[8]*n+l[12],this.tmpVertex[1]=l[1]*r+l[5]*a+l[9]*n+l[13],this.tmpVertex[2]=l[2]*r+l[6]*a+l[10]*n+l[14],this.tmpVertex}applyToMinMax(e,t){const o=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*o,e[1]+=e[1]*o,e[2]+=e[2]*o;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const o=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*o,e[4]+=e[4]*o,e[5]+=e[5]*o,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),o=this.offset/t;return this.sphere[0]=e[0]+e[0]*o,this.sphere[1]=e[1]+e[1]*o,this.sphere[2]=e[2]+e[2]*o,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};function Ut(e,t,o,i){const r=o.typedBuffer,a=o.typedBufferStride,n=e.length;i*=a;for(let o=0;o<n;++o){const n=2*e[o];r[i]=t[n],r[i+1]=t[n+1],i+=a}}function qt(e,t,o,i,r){const a=o.typedBuffer,n=o.typedBufferStride,s=e.length;if(i*=n,null==r||1===r)for(let o=0;o<s;++o){const r=3*e[o];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],i+=n}else for(let o=0;o<s;++o){const s=3*e[o];for(let e=0;e<r;++e)a[i]=t[s],a[i+1]=t[s+1],a[i+2]=t[s+2],i+=n}}function Xt(e,t,o,i,r,a=1){if(!o)return void qt(e,t,i,r,a);const n=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=o[0],u=o[1],d=o[2],h=o[4],v=o[5],m=o[6],f=o[8],p=o[9],g=o[10],x=o[12],b=o[13],w=o[14];if(r*=s,1===a)for(let o=0;o<l;++o){const i=3*e[o],a=t[i],l=t[i+1],y=t[i+2];n[r]=c*a+h*l+f*y+x,n[r+1]=u*a+v*l+p*y+b,n[r+2]=d*a+m*l+g*y+w,r+=s}else for(let o=0;o<l;++o){const i=3*e[o],l=t[i],y=t[i+1],S=t[i+2],C=c*l+h*y+f*S+x,_=u*l+v*y+p*S+b,M=d*l+m*y+g*S+w;for(let e=0;e<a;++e)n[r]=C,n[r+1]=_,n[r+2]=M,r+=s}}function Kt(e,t,o,i,r,a=1){if(!o)return void qt(e,t,i,r,a);const n=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=o[0],u=o[1],d=o[2],h=o[4],v=o[5],m=o[6],f=o[8],p=o[9],g=o[10],x=!T(o),b=1e-6,w=1-b;if(r*=s,1===a)for(let o=0;o<l;++o){const i=3*e[o],a=t[i],l=t[i+1],y=t[i+2];let S=c*a+h*l+f*y,C=u*a+v*l+p*y,_=d*a+m*l+g*y;if(x){const e=S*S+C*C+_*_;if(e<w&&e>b){const t=1/Math.sqrt(e);S*=t,C*=t,_*=t}}n[r+0]=S,n[r+1]=C,n[r+2]=_,r+=s}else for(let o=0;o<l;++o){const i=3*e[o],l=t[i],y=t[i+1],S=t[i+2];let C=c*l+h*y+f*S,_=u*l+v*y+p*S,M=d*l+m*y+g*S;if(x){const e=C*C+_*_+M*M;if(e<w&&e>b){const t=1/Math.sqrt(e);C*=t,_*=t,M*=t}}for(let e=0;e<a;++e)n[r+0]=C,n[r+1]=_,n[r+2]=M,r+=s}}function Qt(e,t,o,i,r,a=1){if(!o)return void function(e,t,o,i,r=1){const a=o.typedBuffer,n=o.typedBufferStride,s=e.length;if(i*=n,1===r)for(let o=0;o<s;++o){const r=4*e[o];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=n}else for(let o=0;o<s;++o){const s=4*e[o];for(let e=0;e<r;++e)a[i]=t[s],a[i+1]=t[s+1],a[i+2]=t[s+2],a[i+3]=t[s+3],i+=n}}(e,t,i,r,a);const n=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=o[0],u=o[1],d=o[2],h=o[4],v=o[5],m=o[6],f=o[8],p=o[9],g=o[10],x=!T(o),b=1e-6,w=1-b;if(r*=s,1===a)for(let o=0;o<l;++o){const i=4*e[o],a=t[i],l=t[i+1],y=t[i+2],S=t[i+3];let C=c*a+h*l+f*y,_=u*a+v*l+p*y,M=d*a+m*l+g*y;if(x){const e=C*C+_*_+M*M;if(e<w&&e>b){const t=1/Math.sqrt(e);C*=t,_*=t,M*=t}}n[r+0]=C,n[r+1]=_,n[r+2]=M,n[r+3]=S,r+=s}else for(let o=0;o<l;++o){const i=4*e[o],l=t[i],y=t[i+1],S=t[i+2],C=t[i+3];let _=c*l+h*y+f*S,M=u*l+v*y+p*S,T=d*l+m*y+g*S;if(x){const e=_*_+M*M+T*T;if(e<w&&e>b){const t=1/Math.sqrt(e);_*=t,M*=t,T*=t}}for(let e=0;e<a;++e)n[r+0]=_,n[r+1]=M,n[r+2]=T,n[r+3]=C,r+=s}}function Zt(e,t,o,i,r,a=1){const n=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(r*=s,1===a){if(4===o)for(let o=0;o<l;++o){const i=4*e[o];n[r]=t[i],n[r+1]=t[i+1],n[r+2]=t[i+2],n[r+3]=t[i+3],r+=s}else if(3===o)for(let o=0;o<l;++o){const i=3*e[o];n[r]=t[i],n[r+1]=t[i+1],n[r+2]=t[i+2],n[r+3]=255,r+=s}}else if(4===o)for(let o=0;o<l;++o){const i=4*e[o];for(let e=0;e<a;++e)n[r]=t[i],n[r+1]=t[i+1],n[r+2]=t[i+2],n[r+3]=t[i+3],r+=s}else if(3===o)for(let o=0;o<l;++o){const i=3*e[o];for(let e=0;e<a;++e)n[r]=t[i],n[r+1]=t[i+1],n[r+2]=t[i+2],n[r+3]=255,r+=s}}function Yt(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const o=At`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=At`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,r=t.sliceHighlightDisabled?At`#define highlightSlice(_color_, _pos_) (_color_)`:At`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(o),e.fragment.code.add(o),e.fragment.code.add(r)}else{const o=At`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(o),e.fragment.code.add(o)}}const Jt=F();function eo({code:e},t){e.add(t.doublePrecisionRequiresObfuscation?At`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`:At`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function to(e){return!!g("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}function oo(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(eo,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[At`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,At`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?At`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,At`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,At`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?At`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:At``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===t.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4])}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,t){De(t,io,ro,3),e.setUniform3fv("viewOriginHi",io),e.setUniform3fv("viewOriginLo",ro)}}(oo||(oo={}));const io=F(),ro=F();function ao(e){e.vertex.code.add(At`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(At`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(At`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(At`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(At`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(At`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),e.vertex.code.add(At`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function no(e,t){const o=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(ao),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),o.add(At`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?At`vec3 worldNormal = normalize(worldPos + localOrigin);`:At`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?At`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:At`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):o.add(At`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const so={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},lo=rt(1,1,0,1),co=rt(1,0,1,1);function uo(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",lo).add("unoccludedHighlightFlag","vec4",co),e.fragment.code.add(At`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function ho(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(At`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function vo(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(At`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(At`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(At`void forwardTextureCoordinates() {}`)}function mo(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(At`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function fo(e,t){e.include(vo,t),e.fragment.code.add(At`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(At`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(mo),e.fragment.code.add(At`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}function po(e,t){const o=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(fo,t),2!==t.pbrMode?(0===t.pbrMode&&o.code.add(At`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(o.uniforms.add("emissionFactor","vec3"),o.uniforms.add("mrrFactors","vec3"),o.code.add(At`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(o.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texMetallicRoughnessSize","vec2"),o.code.add(At`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(o.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texEmissionSize","vec2"),o.code.add(At`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(o.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texOcclusionSize","vec2"),o.code.add(At`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):o.code.add(At`float getBakedOcclusion() { return 1.0; }`),o.code.add(At`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):o.code.add(At`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function go(e){e.code.add(At`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function xo(e){e.fragment.include(go),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(At`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function bo(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(At`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(At`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?At`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(At`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(At`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?At`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(At`vec4 vvColor() { return vec4(1.0); }`)}it(0,.6,.2);const wo=at();class yo{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function So(e={}){return(t,o)=>{var i,r;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(o);const a=t._parameterNames.length-1,n=Math.ceil(Math.log2(e.count||2)),s=null!=(r=t._parameterBits)?r:[0];let l=0;for(;s[l]+n>16;)l++,l>=s.length&&s.push(0);t._parameterBits=s;const c=s[l],u=(1<<n)-1<<c;s[l]+=n,Object.defineProperty(t,o,{get(){return this[a]},set(e){if(this[a]!==e&&(this[a]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~u|+e<<c&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+o+" must be boolean or number, got "+typeof e}})}}class Co extends tt{constructor(e,o,i){super(e,o.generateSource("vertex"),o.generateSource("fragment"),i),this._textures=new Map,this._freeTextureUnits=new t({deallocator:null}),this._fragmentUniforms=Xe()?o.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(o(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let i=this._textures.get(t);return null==i?(i=this._allocTextureUnit(e),this._textures.set(t,i)):i.texture=e,this._context.useProgram(this),this.setUniform1i(t,i.unit),this._context.bindTexture(e,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),u(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const _o={mask:255},Mo={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},To={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};function Ao(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(At`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(At`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):e.vertex.code.add(At`void forwardLinearDepth() {}`)}function Po(e){e.vertex.code.add(At`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function zo(e,t){e.vertex.code.add(t.linearDepth?At`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`:At`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Fo(e){const t=At`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function Oo(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(At`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(Fo),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(At`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(At`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}function Do(e){e.attributes.add("position","vec3"),e.vertex.code.add(At`vec3 positionModel() { return position; }`)}function Lo(e){e.vertex.code.add(At`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${At.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${At.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${At.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${At.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function No(e,t){t.symbolColor?(e.include(Lo),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),e.vertex.code.add(t.symbolColor?At`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`:At`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function Ro(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(At`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(At`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(At`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Io(e,t){e.include(Do),e.vertex.include(eo,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(At`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(At`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function Ho(e,t){0===t.normalType||1===t.normalType?(e.include(Oo,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(At`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(Io,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(At`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?At`normalize(vPositionWorldCameraRelative);`:At`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(At`void forwardNormal() {}`)}function Vo(e,t){e.fragment.include(go),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(At`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===t.output&&e.fragment.code.add(At`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}function Eo(e,t){const o=e.vertex.code,i=e.fragment.code;1!==t.output&&3!==t.output||(e.include(zo,{linearDepth:!0}),e.include(vo,t),e.include(bo,t),e.include(Vo,t),e.include(Yt,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(At`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(Pt,t),i.add(At`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?At`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(zo,{linearDepth:!1}),e.include(Oo,t),e.include(Ho,t),e.include(vo,t),e.include(bo,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),o.add(At`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?At`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(Yt,t),e.include(Pt,t),i.add(At`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?At`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?At`
            vec3 normal = screenDerivativeNormal(vPositionView);`:At`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(zo,{linearDepth:!1}),e.include(vo,t),e.include(bo,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(At`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(Yt,t),e.include(Pt,t),e.include(uo),i.add(At`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?At`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function $o(e){e.include(go),e.code.add(At`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function Go(e,t){const o=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),o.code.add(2===t.doubleSidedMode?At`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:At`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(At`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(fo,t),o.uniforms.add("normalTexture","sampler2D"),o.uniforms.add("normalTextureSize","vec2"),o.code.add(At`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function Bo(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add("ssaoTex","sampler2D"),o.uniforms.add("viewportPixelSz","vec4"),o.code.add(At`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):o.code.add(At`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function ko(e,t){const o=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(o.uniforms.add("lightingAmbientSH0","vec3"),o.code.add(At`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(o.uniforms.add("lightingAmbientSH_R","vec4"),o.uniforms.add("lightingAmbientSH_G","vec4"),o.uniforms.add("lightingAmbientSH_B","vec4"),o.code.add(At`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(o.uniforms.add("lightingAmbientSH0","vec3"),o.uniforms.add("lightingAmbientSH_R1","vec4"),o.uniforms.add("lightingAmbientSH_G1","vec4"),o.uniforms.add("lightingAmbientSH_B1","vec4"),o.uniforms.add("lightingAmbientSH_R2","vec4"),o.uniforms.add("lightingAmbientSH_G2","vec4"),o.uniforms.add("lightingAmbientSH_B2","vec4"),o.code.add(At`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||o.code.add(At`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function Wo(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(At`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function jo(e){const t=e.fragment.code;t.add(At`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(At`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(At`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Uo(e){e.vertex.code.add(At`const float PI = 3.141592653589793;`),e.fragment.code.add(At`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function qo(e,t){const o=e.fragment.code;e.include(Uo),3===t.pbrMode||4===t.pbrMode?(o.add(At`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),o.add(At`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),o.add(At`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),o.add(At`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),o.add(At`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(jo),o.add(At`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),o.add(At`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),o.add(At`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),o.add(At`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),o.add(At`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),o.add(At`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Xo(e,t){const o=e.fragment;e.include(Wo),e.include(Bo,t),0!==t.pbrMode&&e.include(qo,t),e.include(ko,t),t.receiveShadows&&e.include(xo,t),o.uniforms.add("lightingGlobalFactor","float"),o.uniforms.add("ambientBoostFactor","float"),e.include(Uo),o.code.add(At`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),o.code.add(At`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?At`normalize(vPosWorld)`:At`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),o.code.add(At`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?o.code.add(At`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(o.code.add(At`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(At`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),o.code.add(At`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.code.add(At`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(At`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?At`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:At`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function Ko(e,t){const o=e.fragment;o.code.add(At`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.code.add(1===t.doubleSidedMode?At`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`:2===t.doubleSidedMode?At`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`:At`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}function Qo(e,t){const o=At`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;Ke()&&(e.fragment.code.add(o),e.vertex.code.add(o))}function Zo(e){e.code.add(At`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Yo(e){e.include(Zo),e.code.add(At`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${At.int(1)}) {
        return allMixed;
      }
      else if (mode == ${At.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${At.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${At.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${At.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=M(),this.worldFromModel_TH=F(),this.worldFromModel_TL=F()}},e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=F(),this.worldFromView_TL=F(),this.viewFromCameraRelative_RS=M(),this.projFromView=z()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(Io||(Io={})),(Ho||(Ho={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)};const Jo=r.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class ei{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&Jo.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class ti extends ei{constructor(){super(...arguments),this.vertex=new ri,this.fragment=new ri,this.attributes=new ai,this.varyings=new ni,this.extensions=new si,this.constants=new li}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),o=this.attributes.generateSource(e),i=this.varyings.generateSource(),r="vertex"===e?this.vertex:this.fragment,a=r.uniforms.generateSource(),n=r.code.generateSource(),s="vertex"===e?ui:ci,l=this.constants.generateSource().concat(r.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${a.join("\n")}\n\n${o.join("\n")}\n\n${i.join("\n")}\n\n${n.join("\n")}`}}class oi{constructor(){this._entries=new Map}add(e,t,o){return this._entries.set(`${e}_${t}_${o}`,{name:e,type:t,arraySize:o}),this}generateSource(){return Array.from(this._entries.values()).map((e=>`uniform ${e.type} ${e.name}${(e=>e?`[${e}]`:"")(e.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class ii{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class ri extends ei{constructor(){super(...arguments),this.uniforms=new oi,this.code=new ii,this.constants=new li}get builder(){return this}}class ai{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class ni{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class si{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?si.ALLOWLIST_VERTEX:si.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}si.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],si.ALLOWLIST_VERTEX=[];class li{constructor(){this._entries=[]}add(e,t,o){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=li.numberToFloatStr(o);break;case"int":i=li.numberToIntStr(o);break;case"bool":i=o.toString();break;case"vec2":i=`vec2(${li.numberToFloatStr(o[0])},                            ${li.numberToFloatStr(o[1])})`;break;case"vec3":i=`vec3(${li.numberToFloatStr(o[0])},                            ${li.numberToFloatStr(o[1])},                            ${li.numberToFloatStr(o[2])})`;break;case"vec4":i=`vec4(${li.numberToFloatStr(o[0])},                            ${li.numberToFloatStr(o[1])},                            ${li.numberToFloatStr(o[2])},                            ${li.numberToFloatStr(o[3])})`;break;case"ivec2":i=`ivec2(${li.numberToIntStr(o[0])},                             ${li.numberToIntStr(o[1])})`;break;case"ivec3":i=`ivec3(${li.numberToIntStr(o[0])},                             ${li.numberToIntStr(o[1])},                             ${li.numberToIntStr(o[2])})`;break;case"ivec4":i=`ivec4(${li.numberToIntStr(o[0])},                             ${li.numberToIntStr(o[1])},                             ${li.numberToIntStr(o[2])},                             ${li.numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(o,(e=>li.numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const ci="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",ui="precision highp float;\nprecision highp sampler2D;";function di(e){const t=new ti,o=t.vertex.code,i=t.fragment.code;return t.include(Qo,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(Do),t.varyings.add("vpos","vec3"),t.include(bo,e),t.include(oo,e),t.include(no,e),0!==e.output&&7!==e.output||(t.include(Oo,e),t.include(zo,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(Po),t.include(Go,e),t.include(Ho,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(vo,e),t.include(Ao,e),t.include(No,e),t.include(Ro,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),o.add(At`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${At.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?At`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(Yt,e),t.include(Pt,e),e.multipassTerrainEnabled&&(t.fragment.include($o),t.include(ho,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(Yo),i.add(At`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?At`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:At`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?At`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:At`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(Yt,e),t.include(Xo,e),t.include(Bo,e),t.include(Pt,e),e.receiveShadows&&t.include(xo,e),e.multipassTerrainEnabled&&(t.fragment.include($o),t.include(ho,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(po,e),t.include(qo,e),t.fragment.include(Yo),t.include(Ko,e),i.add(At`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?At`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:At`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?At`
        vec3 normal = screenDerivativeNormal(localvpos);`:At`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?At`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:At`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?At`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?At`vec3 normalGround = normalize(vpos + localOrigin);`:At`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:At``}
        ${1===e.pbrMode||2===e.pbrMode?At`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(Eo,e),t}const hi=Object.freeze({__proto__:null,build:di});class vi extends class{constructor(e,t,o=(()=>this.dispose())){this.release=o,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=x(this._program),this._pipeline=this._config=null}reload(e){x(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e){}bindPipelineState(e,t=null,o){e.setPipelineState(this.getPipelineState(t,o))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}getPipelineState(e,t){return this._pipeline}}{initializeProgram(e){const t=vi.shader.get(),o=this.configuration,i=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?o.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:o.hasMetalnessAndRoughnessTexture,hasEmissionTexture:o.hasEmissionTexture,hasOcclusionTexture:o.hasOcclusionTexture,hasNormalTexture:o.hasNormalTexture,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:o.normalsTypeDerivate?3:0,doubleSidedMode:o.doubleSidedMode,vertexTangents:o.vertexTangents,attributeTextureCoordinates:o.hasMetalnessAndRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture||o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:to(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new Co(e.rctx,i,Ct)}bindPass(e,t){var o,i;!function(e,t){e.setUniformMatrix4fv("proj",t)}(this.program,t.camera.projectionMatrix);const r=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===r)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),function(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}(this.program,t)),7===r&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Bt[e.colorMixMode])),0===r?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Bt[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&function(e,t,o=!1){o||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}(this.program,e,this.configuration.isSchematic)):4===r&&function(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}(this.program,t),function(e,t){(function(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))})(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}(this.program,e),function(e,t,o){if(!t.verticalOffset)return;const i=function(e,t,o,i=so){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*o),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}(t.verticalOffset,o.camera.fovY,o.camera.fullViewport[3]);e.setUniform4f("verticalOffset",i.screenLength*(o.camera.pixelRatio||1),i.perDistance,i.minWorldLength,i.maxWorldLength)}(this.program,e,t),function(e,t){if(!e)return;const o=e.parameters;t.setUniform4f("screenSizePerspectiveAlignment",o.divisor,o.offset,o.minPixelSize,e.paddingPixelsOverride)}(e.screenSizePerspective,this.program),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(o=t.shadowMap)||o.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?O(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;(function(e,t,o){A(wo,o,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",wo)})(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&function(e,t,o){e.setUniform3f("camPos",o[3]-t[0],o[7]-t[1],o[11]-t[2])}(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&oo.bindCustomOrigin(this.program,t),function(e,t,o,i){t.slicePlaneEnabled&&(u(o)?(i?(j(Jt,o.origin,i),e.setUniform3fv("slicePlaneOrigin",Jt)):e.setUniform3fv("slicePlaneOrigin",o.origin),e.setUniform3fv("slicePlaneBasis1",o.basis1),e.setUniform3fv("slicePlaneBasis2",o.basis2)):(e.setUniform3fv("slicePlaneBasis1",U),e.setUniform3fv("slicePlaneBasis2",U),e.setUniform3fv("slicePlaneOrigin",U)))}(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&function(e,t,o){t.shadowMappingEnabled&&t.shadowMap.bindView(e,o)}(this.program,e,t)}setPipeline(e,t){const o=this.configuration,i=3===e,r=2===e;return Le({blending:0!==o.output&&7!==o.output||!o.transparent?null:i?Ne:Re(e),culling:mi(o)&&Ie(o.cullFace),depthTest:{func:He(e)},depthWrite:i||r?o.writeDepth&&Ve:null,colorWrite:Ee,stencilWrite:o.sceneHasOcludees?_o:null,stencilTest:o.sceneHasOcludees?t?To:Mo:null,polygonOffset:i||r?null:$e(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function mi(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}vi.shader=new yo(hi,(()=>import("./p-2d91bcb0.js")));class fi extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const o of e)t[o]=this[o];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}function pi(e){const t=new ti,o=t.vertex.code,i=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(Do),t.varyings.add("vpos","vec3"),t.include(bo,e),t.include(oo,e),t.include(no,e),0!==e.output&&7!==e.output||(t.include(Oo,e),t.include(zo,{linearDepth:!1}),e.offsetBackfaces&&t.include(Po),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(vo,e),t.include(Ao,e),t.include(No,e),t.include(Ro,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),o.add(At`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${At.float(.001)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?At`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(Yt,e),t.include(Pt,e),e.multipassTerrainEnabled&&(t.fragment.include($o),t.include(ho,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(Yo),i.add(At`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?At`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?At`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:At`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?At`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:At`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(Yt,e),t.include(Xo,e),t.include(Bo,e),t.include(Pt,e),e.receiveShadows&&t.include(xo,e),e.multipassTerrainEnabled&&(t.fragment.include($o),t.include(ho,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(po,e),t.include(qo,e),t.fragment.include(Yo),i.add(At`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?At`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?At`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:At`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?At`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:At`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${At`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?At`vec3 normalGround = normalize(vpos + localOrigin);`:At`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:At``}
        ${1===e.pbrMode||2===e.pbrMode?At`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(Eo,e),t}b([So({count:8})],fi.prototype,"output",void 0),b([So({count:4})],fi.prototype,"alphaDiscardMode",void 0),b([So({count:3})],fi.prototype,"doubleSidedMode",void 0),b([So()],fi.prototype,"isSchematic",void 0),b([So()],fi.prototype,"vertexColors",void 0),b([So()],fi.prototype,"offsetBackfaces",void 0),b([So()],fi.prototype,"symbolColors",void 0),b([So()],fi.prototype,"vvSize",void 0),b([So()],fi.prototype,"vvColor",void 0),b([So()],fi.prototype,"verticalOffset",void 0),b([So()],fi.prototype,"receiveShadows",void 0),b([So()],fi.prototype,"slicePlaneEnabled",void 0),b([So()],fi.prototype,"sliceHighlightDisabled",void 0),b([So()],fi.prototype,"receiveAmbientOcclusion",void 0),b([So()],fi.prototype,"screenSizePerspective",void 0),b([So()],fi.prototype,"textureAlphaPremultiplied",void 0),b([So()],fi.prototype,"hasColorTexture",void 0),b([So()],fi.prototype,"usePBR",void 0),b([So()],fi.prototype,"hasMetalnessAndRoughnessTexture",void 0),b([So()],fi.prototype,"hasEmissionTexture",void 0),b([So()],fi.prototype,"hasOcclusionTexture",void 0),b([So()],fi.prototype,"hasNormalTexture",void 0),b([So()],fi.prototype,"instanced",void 0),b([So()],fi.prototype,"instancedColor",void 0),b([So()],fi.prototype,"instancedDoublePrecision",void 0),b([So()],fi.prototype,"vertexTangents",void 0),b([So()],fi.prototype,"normalsTypeDerivate",void 0),b([So()],fi.prototype,"writeDepth",void 0),b([So()],fi.prototype,"sceneHasOcludees",void 0),b([So()],fi.prototype,"transparent",void 0),b([So()],fi.prototype,"enableOffset",void 0),b([So({count:3})],fi.prototype,"cullFace",void 0),b([So({count:4})],fi.prototype,"transparencyPassType",void 0),b([So()],fi.prototype,"multipassTerrainEnabled",void 0),b([So()],fi.prototype,"cullAboveGround",void 0);const gi=Object.freeze({__proto__:null,build:pi});class xi extends vi{initializeProgram(e){const t=xi.shader.get(),o=this.configuration,i=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:to(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new Co(e.rctx,i,Ct)}}xi.shader=new yo(gi,(()=>import("./p-c1022a11.js")));class bi extends Wt{constructor(e){super(e,yi),this.supportsEdges=!0,this.techniqueConfig=new fi,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=ot().vec3f("position").vec3f("normal");return e.vertexTangents&&o.vec4f("tangent"),t&&o.vec2f("uv0"),e.vertexColors&&o.vec4u8("color"),e.symbolColors&&o.vec4u8("symbolColor"),o}(this.parameters),this.instanceBufferLayout=e.instanced?function(e){let t=ot();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}(this.parameters):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,o=e.vertexColors,i=e.symbolColors,r=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return o&&(r||a||i)?!!n||s:o?n?l:s:r||a||i?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.techniqueConfig.doubleSidedMode=this.parameters.treeRendering?2:this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<Ge),this.techniqueConfig}intersect(e,t,o,i,r,a,n){if(null!==this.parameters.verticalOffset){const e=i.camera;V(Pi,o[12],o[13],o[14]);let t=null;switch(i.viewingMode){case 1:t=B(Ti,Pi);break;case 2:t=q(Ti,Mi)}let n=0;if(null!==this.parameters.verticalOffset){const o=j(zi,Pi,e.eye),i=Q(o),r=X(o,o,1/i);let a=null;this.parameters.screenSizePerspective&&(a=Z(t,r)),n+=function(e,t,o,i,r){let a=(o.screenLength||0)*e.pixelRatio;r&&(a=zt(a,i,t,r));const n=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return k(n*t,o.minWorldLength||0,null!=o.maxWorldLength?o.maxWorldLength:1/0)}(e,i,this.parameters.verticalOffset,a,this.parameters.screenSizePerspective)}X(t,t,n),K(Ai,t,i.transform.inverseRotation),r=j(Ci,r,Ai),a=j(_i,a,Ai)}Dt(e,t,i,r,a,function(e){return u(e)?(jt.offset=e,jt):null}(i.verticalOffset),n)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new wi(e):null}createBufferWriter(){return new Si(this.vertexBufferLayout,this.instanceBufferLayout)}}class wi extends class extends class{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,o=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(o,t),this._technique),this._technique}ensureResources(e){return 2}}{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId).then((e=>this._texture=e)),this._acquire(e.normalTextureId).then((e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId).then((e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId).then((e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId).then((e=>this._textureMetallicRoughness=e))}dispose(){this._texture=p(this._texture),this._textureNormal=p(this._textureNormal),this._textureEmissive=p(this._textureEmissive),this._textureOcclusion=p(this._textureOcclusion),this._textureMetallicRoughness=p(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?2:1}updateTexture(e){(o(this._texture)||e!==this._texture.id)&&(this._texture=p(this._texture),this._textureId=e,this._acquire(this._textureId).then((e=>this._texture=e)))}bindTextures(e){u(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),u(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),u(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),u(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),u(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=u(this._texture)?this._texture.glTexture:null;u(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){return o(e)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(e).then((e=>this._disposed?(p(e),null):e)).finally((()=>--this._numLoading)))}}{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?xi:vi,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const yi={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:M(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:.1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class Si{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,o,i){!function(e,t,o,i,r,a){for(const n of t.fieldNames){const t=e.vertexAttributes.get(n),s=e.indices.get(n);if(t&&s)switch(n){case"position":{Be(3===t.size);const e=r.getField(n,ne);e&&Xt(s,t.data,o,e,a);break}case"normal":{Be(3===t.size);const e=r.getField(n,ne);e&&Kt(s,t.data,i,e,a);break}case"uv0":{Be(2===t.size);const e=r.getField(n,ae);e&&Ut(s,t.data,e,a);break}case"color":{Be(3===t.size||4===t.size);const e=r.getField(n,re);e&&Zt(s,t.data,t.size,e,a);break}case"symbolColor":{Be(3===t.size||4===t.size);const e=r.getField(n,re);e&&Zt(s,t.data,t.size,e,a);break}case"tangent":{Be(4===t.size);const e=r.getField(n,ie);e&&Qt(s,t.data,i,e,a);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,o,i)}}const Ci=F(),_i=F(),Mi=O(0,0,1),Ti=F(),Ai=F(),Pi=F(),zi=F(),Fi=r.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Oi(e){throw new m("",`Request for object resource failed: ${e}`)}function Di(e){const t=e.params,o=t.topology;let i=!0;switch(t.vertexAttributes||(Fi.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Fi.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Fi.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Fi.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),i=!1)}}else Fi.warn("Indexed geometries must specify faces"),i=!1;break}default:Fi.warn(`Unsupported topology '${o}'`),i=!1}e.params.material||(Fi.warn("Geometry requires material"),i=!1);const r=e.params.vertexAttributes;for(const e in r)r[e].values||(Fi.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Li(e){const t=ee();return e.forEach((e=>{const o=e.boundingInfo;u(o)&&(Y(t,o.getBBMin()),Y(t,o.getBBMax()))})),t}async function Ni(e,t){const o=[];for(const i in e){const r=e[i],a=r.images[0].data;if(!a){Fi.warn("Externally referenced texture data is not yet supported");continue}const n=r.encoding+";base64,"+a,s="/textureDefinitions/"+i,l="rgba"===r.channels?r.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==Ri(l)},d=u(t)&&t.disableTextures?Promise.resolve(null):Oe(n,t);o.push(d.then((e=>({refId:s,image:e,params:c,alphaChannelUsage:l}))))}const i=await Promise.all(o),r={};for(const e of i)r[e.refId]=e;return r}function Ri(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function Ii(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Hi=new Fe(1,2,"wosr");function Vi(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Ei(e,t,o,i){const r=e.model,a=M(),n=new Array,s=new Map,l=new Map;return r.lods.forEach(((e,c)=>{if(void 0!==i&&c!==i)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:u(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:ee()};n.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=r.materials.get(e.material),c=u(e.attributes.texCoord0),h=u(e.attributes.normal),v=function(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(n.alphaMode);if(!s.has(i)){if(c){if(u(n.textureColor)&&!l.has(n.textureColor)){const e=r.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:1!==v};l.set(n.textureColor,new Tt(e.data,t))}if(u(n.textureNormal)&&!l.has(n.textureNormal)){const e=r.textures.get(n.textureNormal);l.set(n.textureNormal,new Tt(e.data,e.parameters))}if(u(n.textureOcclusion)&&!l.has(n.textureOcclusion)){const e=r.textures.get(n.textureOcclusion);l.set(n.textureOcclusion,new Tt(e.data,e.parameters))}if(u(n.textureEmissive)&&!l.has(n.textureEmissive)){const e=r.textures.get(n.textureEmissive);l.set(n.textureEmissive,new Tt(e.data,e.parameters))}if(u(n.textureMetallicRoughness)&&!l.has(n.textureMetallicRoughness)){const e=r.textures.get(n.textureMetallicRoughness);l.set(n.textureMetallicRoughness,new Tt(e.data,e.parameters))}}const a=n.color[0]**(1/Me),d=n.color[1]**(1/Me),m=n.color[2]**(1/Me),f=n.emissiveFactor[0]**(1/Me),p=n.emissiveFactor[1]**(1/Me),g=n.emissiveFactor[2]**(1/Me),x=u(n.textureColor)&&c?l.get(n.textureColor):null;s.set(i,new bi({...t,transparent:0===v,textureAlphaMode:v,textureAlphaCutoff:n.alphaCutoff,diffuse:[a,d,m],ambient:[a,d,m],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:h?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:u(x)?x.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:u(n.textureNormal)&&c?l.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:u(x)&&!!x.params.preMultiplyAlpha,occlusionTextureId:u(n.textureOcclusion)&&c?l.get(n.textureOcclusion).id:void 0,emissiveTextureId:u(n.textureEmissive)&&c?l.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:u(n.textureMetallicRoughness)&&c?l.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[f,p,g],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...o}))}const m=function(e,t){switch(t){case 4:return Pe(e);case 5:return Ae(e);case 6:return Te(e)}}(e.indices||e.attributes.position.count,e.primitiveType),f=e.attributes.position.count,p=be(ne,f);ue(p,e.attributes.position,e.transform);const g=[["position",{data:p.typedBuffer,size:p.elementCount,exclusive:!0}]],x=[["position",m]];if(u(e.attributes.normal)){const t=be(ne,f);_(a,e.transform),de(t,e.attributes.normal,a),g.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["normal",m])}if(u(e.attributes.tangent)){const t=be(ie,f);_(a,e.transform),we(t,e.attributes.tangent,a),g.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["tangent",m])}if(u(e.attributes.texCoord0)){const t=be(ae,f);ye(t,e.attributes.texCoord0),g.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["uv0",m])}if(u(e.attributes.color)){const t=be(re,f);if(4===e.attributes.color.elementCount)e.attributes.color instanceof ie?Se(t,e.attributes.color,255):e.attributes.color instanceof re?Ce(t,e.attributes.color):e.attributes.color instanceof se&&Se(t,e.attributes.color,1/256);else{_e(t,255,255,255,255);const o=new le(t.buffer,0,4);e.attributes.color instanceof ne?he(o,e.attributes.color,255):e.attributes.color instanceof le?ve(o,e.attributes.color):e.attributes.color instanceof ce&&he(o,e.attributes.color,1/256)}g.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["color",m])}const b=new lt(g,x);d.stageResources.geometries.push(b),d.stageResources.materials.push(s.get(i)),c&&(u(n.textureColor)&&d.stageResources.textures.push(l.get(n.textureColor)),u(n.textureNormal)&&d.stageResources.textures.push(l.get(n.textureNormal)),u(n.textureOcclusion)&&d.stageResources.textures.push(l.get(n.textureOcclusion)),u(n.textureEmissive)&&d.stageResources.textures.push(l.get(n.textureEmissive)),u(n.textureMetallicRoughness)&&d.stageResources.textures.push(l.get(n.textureMetallicRoughness))),d.numberOfVertices+=f;const w=b.boundingInfo;u(w)&&(Y(d.boundingBox,w.getBBMin()),Y(d.boundingBox,w.getBBMax()))}))})),n}const $i=Object.freeze({__proto__:null,fetch:async function(t,i){const r=Vi(e(t));if("wosr"===r.fileType){const e=await(i.cache?i.cache.loadWOSR(r.url,i):async function(e,t){const o=await async function(e,t){const o=u(t)&&t.streamDataRequester;if(o)return async function(e,t,o){const i=await ze(t.request(e,"json",o));if(!0===i.ok)return i.value;S(i.error),Oi(i.error.details.url)}(e,o,t);const i=await ze(w(e,y(t)));if(!0===i.ok)return i.value.data;S(i.error),Oi(i.error)}(e,t);return{resource:o,textures:await Ni(o.textureDefinitions,t)}}(r.url,i)),t=function(e,t){const o=[],i=[],r=[],a=[],n=e.resource,s=Fe.parse(n.version||"1.0","wosr");Hi.validate(s);const l=n.model.name,c=n.model.geometries,d=n.materialDefinitions,h=e.textures;let v=0;const m=new Map;for(let e=0;e<c.length;e++){const n=c[e];if(!Di(n))continue;const s=Ii(n),l=n.params.vertexAttributes,f=[];for(const e in l){const t=l[e];f.push([e,{data:t.values,size:t.valuesPerElement,exclusive:!0}])}const p=[];if("PerAttributeArray"!==n.params.topology){const e=n.params.faces;for(const t in e)p.push([t,new Uint32Array(e[t].values)])}const g=h&&h[s.texture];if(g&&!m.has(s.texture)){const{image:e,params:t}=g,o=new Tt(e,t);a.push(o),m.set(s.texture,o)}const x=m.get(s.texture),b=x?x.id:void 0;let w=r[s.material]?r[s.material][s.texture]:null;if(!w){const e=d[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=g&&g.alphaChannelUsage,i=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,a=g?Ri(g.alphaChannelUsage):void 0,n={ambient:J(e.diffuse),diffuse:J(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!g&&!!g.params.preMultiplyAlpha};u(t)&&t.materialParamsMixin&&Object.assign(n,t.materialParamsMixin),w=new bi(n),r[s.material]||(r[s.material]={}),r[s.material][s.texture]=w}i.push(w);const y=new lt(f,p);v+=p.position?p.position.length:0,o.push(y)}return{name:l,stageResources:{textures:a,materials:i,geometries:o},pivotOffset:n.model.pivotOffset,boundingBox:Li(o),numberOfVertices:v,lodThreshold:null}}(e,i);return{lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(i.cache?i.cache.loadGLTF(r.url,i,i.usePBR):ge(new xe(i.streamDataRequester),r.url,i,i.usePBR)),n=C(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&u(n)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let i=0;i<e.model.lods.length;++i){const r=e.model.lods[i];e.customMeta.esriTreeRendering=!0;for(const a of r.parts){const r=a.attributes.normal;if(o(r))return;const n=a.attributes.position,s=n.count,l=F(),c=F(),u=F(),d=be(re,s),h=be(ne,s),v=P(z(),a.transform);for(let o=0;o<s;o++){n.getVec(o,c),r.getVec(o,l),te(c,c,a.transform),j(u,c,t.center),oe(u,u,t.radius);const s=u[2],m=Q(u),f=Math.min(.45+.55*m*m,1);oe(u,u,t.radius),te(u,u,v),B(u,u),i+1!==e.model.lods.length&&e.model.lods.length>1&&L(u,u,l,s>-1?.2:Math.min(-4*s-3.8,1)),h.setVec(o,u),d.set(o,0,255*f),d.set(o,1,255*f),d.set(o,2,255*f),d.set(o,3,255)}a.attributes.normal=h,a.attributes.color=d}}}(a,n);const s=a.meta.isEsriSymbolResource?{usePBR:i.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:i.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},l={...i.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=Ei(a,s,l,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=Ei(a,s,l,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const c=Ei(a,s,l);return{lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}},gltfToEngineResources:Ei,parseUrl:Vi});export{di as P,pi as j,$i as o}