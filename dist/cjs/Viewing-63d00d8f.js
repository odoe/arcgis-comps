'use strict';

const request = require('./messageBundle-8be88d04.js');
const Util = require('./Util-5c6af8a4.js');
const Scheduler = require('./Scheduler-72cbcf2a.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const common = require('./common-41a349f2.js');
const projection = require('./projection-b19710fa.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const unitUtils = require('./unitUtils-083cb8d0.js');
const TileInfo = require('./TileInfo-83a1d8a2.js');
const enumeration = require('./enumeration-f235fe07.js');
const fieldType = require('./fieldType-32f95259.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$2(e){return e&&"base-tile"===e.type||"tile"===e.type||"elevation"===e.type||"imagery-tile"===e.type||"base-elevation"===e.type||"open-street-map"===e.type||"wcs"===e.type||"web-tile"===e.type||"wmts"===e.type||"vector-tile"===e.type}function t$2(e){return e.parent&&"esri.Basemap"===e.parent.declaredClass&&e.parent.baseLayers.indexOf(e)>-1}function a$7(e){return !0===e.labelsVisible&&null!=e.labelingInfo&&e.labelingInfo.length>0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$6{constructor(t){this.client=t,this._cancelled=!1,this.size=0,this.duration=0;}}class e$1{constructor(t){this.typeWorkerQuota=t,this.tasks=new Array,this.numWorkers=0,this.statistics=new r$2;}}class r$2{constructor(){this.requests=0,this.size=0,this.duration=0,this.speed=0;}}class i$8{constructor(t,s,r,i){this._workerFunc=t,this._callbackFunc=s,this._maxTotalNumWorkers=r,this._totalNumWorkers=0,this._clients=i.map((t=>new e$1(t)));}hasQuota(t){const s=this._clients[t];return !!s&&(this._totalNumWorkers<this._maxTotalNumWorkers||s.numWorkers+s.tasks.length<s.typeWorkerQuota)}push(t){const s=this._clients[t.client];s&&(this._totalNumWorkers<this._maxTotalNumWorkers?(s.numWorkers++,this._totalNumWorkers++,this._workerFunc(t,((t,s)=>this._taskCallback(t,s)))):s.tasks.push(t));}cancel(t){this._taskFinished(t),t._cancelled=!0;}destroy(){this._clients.length=0;}_taskFinished(s){const e=this._clients[s.client];this._totalNumWorkers--,e.numWorkers--,e.statistics.requests++,e.statistics.size+=s.size||0,e.statistics.duration+=s.duration||0,e.statistics.speed=e.statistics.duration>0?e.statistics.size/e.statistics.duration:0,Util.i(e.numWorkers>=0),this._next();}_next(){for(const t of this._clients)if(t&&t.numWorkers<t.typeWorkerQuota&&this._processQueue(t))return;for(const t of this._clients)if(t&&this._processQueue(t))return}_processQueue(t){for(;t.tasks.length>0;)if(this._workerFunc(t.tasks.shift(),((t,s)=>this._taskCallback(t,s))))return t.numWorkers++,this._totalNumWorkers++,!0;return !1}_taskCallback(t,s){t._cancelled||(this._callbackFunc(t,s),this._taskFinished(t));}getStatsForType(t){const s=this._clients[t];return s?{quota:s.typeWorkerQuota,workers:s.numWorkers,queueSize:s.tasks.length,requestStats:s.statistics}:null}get test(){const t=this;return {set workerFunc(s){t._workerFunc=s;}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$1 extends s$6{constructor(s,t,r,e,i){super(e),this.url=s,this.options=t,this.docType=r,this.key=i,this.result=null,this.status=1,this.request=null,this.abortController=null,this.resolvers=new Array,this.startTime=0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let y$3=class extends request.p{constructor(){super(...arguments),this.tasks=new Map,this.onLoadQueue=new Array,this.doneQueue=new Array,this.updating=!1;}setup(e,t,s){this.loadQueue=new i$8(((e,t)=>this.startLoading(e,t)),((e,t)=>this.doneLoadingCallback(e,t)),e,t),s&&(this.taskHandle=s.registerTask(Scheduler.f.STREAM_DATA_LOADER,this));}destroy(){this.taskHandle=request.s$7(this.taskHandle),this.tasks.forEach((e=>{e.abortController&&e.abortController.abort();})),this.loadQueue.destroy(),this.loadQueue=null,this.onLoadQueue=null,this.doneQueue=null,this.tasks=null;}hasDownloadSlots(e){return this.loadQueue.hasQuota(e)}request(e,t,s,r={}){const o=request.B();o.__signal=request.r(r)?r.signal:null;const a=this.createOrUpdateTask(e,t,s,r,o);return request.j$1(r,(()=>this.cancelRequest(a,o))),o.promise}createTask(e,t,s,r,o,a){const n=new t$1(e,t,s,r,o);return this.updateTask(n,a),this.tasks.set(o,n),1===this.tasks.size&&this._set("updating",!0),this.loadQueue.push(n),n}cancelRequest(e,t){request.v$3(e.resolvers,t),t.reject(request.m$2()),0===e.resolvers.length&&(2===e.status&&(e.status=4,this.loadQueue.cancel(e),e.abortController.abort(),e.request=null,e.abortController=null),e.status=4,this.tasks.delete(e.key),0===this.tasks.size&&this._set("updating",!1));}taskKey(e,t,s){return `${e}:${t}:${s}`}updateTask(e,t){e.resolvers.push(t);}createOrUpdateTask(e,t,s,r,o){const a=request.r(r)&&r.uid||e,n=this.taskKey(a,t,s),u=this.tasks.get(n);return u?(this.updateTask(u,o),u):this.createTask(e,r,t,s,n,o)}doneLoadingCallback(e,t){this.loadQueue&&(Util.i(2===e.status),e.status=3,this.taskHandle?this.doneQueue.push({task:e,err:t}):this.doneLoading(e,t));}get running(){return this.doneQueue.length>0||this.onLoadQueue.length>0}runTask(e){for(;!e.done&&this.onLoadQueue.length>0;){const t=this.onLoadQueue.shift();request.h(t.task.abortController),t.task.abortController=null,t.callback(t.task),e.madeProgress();}for(;!e.done&&this.doneQueue.length>0;){const t=this.doneQueue.shift();3!==t.task.status&&(t.err=t.err||request.m$2()),this.doneLoading(t.task,t.err),e.madeProgress();}}doneLoading(e,t){let s=e.result instanceof HTMLImageElement?0:e.resolvers.length;for(const r of e.resolvers)if(t)request.d$1(t)?r.reject(t):r.reject(new request.s("stream-data-loader:request-error",`Failed to request resource at '${e.url}'. ${t}`,{url:e.url,error:t}));else {--s;const t=s<=0?e.result:request.l$1(e.result);r.resolve(t);}this.tasks.delete(e.key),0===this.tasks.size&&this._set("updating",!1);}startLoading(e,s){if(4===e.status)return !1;let r,o;switch(e.startTime=performance.now(),e.status=2,e.docType){case"binary":o="array-buffer",r=0;break;case"image":o="image";break;case"image+type":o="array-buffer";break;default:o="json";}e.abortController=new AbortController;const a=e.abortController.signal;e.request=request.E(e.url,{...e.options,responseType:o,timeout:r,signal:a});let n=()=>{};const i=t=>{e.duration=performance.now()-e.startTime,e.size=t instanceof ArrayBuffer?t.byteLength:e.size||0,e.result=t,this.taskHandle?this.onLoadQueue.push({callback:s,task:e}):(e.abortController=null,s(e));},u=t=>{2===e.status&&s(e,t),n();};return "image+type"!==e.docType?(e.request.then((e=>i(e.data)),u),!0):(e.request.then((s=>{const l=s.data,d=L$1(l);if(o="image",e.size=l.byteLength,"unknown"===d)return e.request=request.E(e.url,{responseType:o,timeout:r,signal:a}),void e.request.then((e=>i(e.data)),u);const h=new Blob([l],{type:d}),c=window.URL.createObjectURL(h);n=()=>window.URL.revokeObjectURL(c),e.request=request.E(c,{responseType:o,timeout:r,signal:a}),e.request.then((e=>i(new j$2(e.data,d,n))),u);}),u),!0)}get test(){return {loadQueue:this.loadQueue}}};function L$1(e){if(e.byteLength<2)return "unknown";const t=new Uint8Array(e,0,e.byteLength);return 137===t[0]&&80===t[1]?"image/png":71===t[0]&&73===t[1]?"image/gif":66===t[0]&&77===t[1]?"image/bmp":255===t[0]&&216===t[1]?"image/jpeg":"unknown"}request.e([request.d({readOnly:!0})],y$3.prototype,"updating",void 0),y$3=request.e([request.i("esri.views.3d.support.StreamDataLoader")],y$3);class j$2{constructor(e,t,s){this.image=e,this.type=t,this.release=s;}get isOpaque(){return "image/jpeg"===this.type}}const w$2=y$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v$2=12;class M$2{constructor(e){const t=M$2.checkUnsupported(e);if(request.r(t))throw t;const i=request.e$2(e);this.spatialReference=i.spatialReference,this._isWebMercator=this.spatialReference.isWebMercator,this._isGCS=projection.$n(this.spatialReference)||request.G$1(this.spatialReference)||request.C$1(this.spatialReference),this.origin=[i.origin.x,i.origin.y],this.pixelSize=i.size[0],this.dpi=i.dpi;const s=i.lods.reduce((function(e,t,i){return t.level<e.min&&(e.min=t.level,e.minIndex=i),e.max=Math.max(e.max,t.level),e}),{min:1/0,minIndex:0,max:-1/0}),l=i.lods[s.minIndex],n=2**l.level;let a=l.resolution*n,h=l.scale*n;this.levels=new Array(s.max+1);for(let r=0;r<this.levels.length;r++)this.levels[r]={resolution:a,scale:h,tileSize:[a*i.size[0],a*i.size[1]]},a/=2,h/=2;}clone(){return new M$2(this.toTileInfo())}toTileInfo(){return new TileInfo.j({dpi:this.dpi,origin:{x:this.origin[0],y:this.origin[1],spatialReference:this.spatialReference},size:[this.pixelSize,this.pixelSize],spatialReference:this.spatialReference,lods:this.levels.map(((e,t)=>({level:t,scale:e.scale,resolution:e.resolution})))})}getExtent(e,t,i,s){const r=this.levels[e],l=r.tileSize[0],o=r.tileSize[1];s[0]=this.origin[0]+i*l,s[2]=s[0]+l,s[3]=this.origin[1]-t*o,s[1]=s[3]-o;}convertExtentToRadians(e,i){this._isWebMercator?(i[0]=request.f$1(e[0]),i[1]=request.c$4(e[1]),i[2]=request.f$1(e[2]),i[3]=request.c$4(e[3])):this._isGCS&&(i[0]=mathUtils.M(e[0]),i[1]=mathUtils.M(e[1]),i[2]=mathUtils.M(e[2]),i[3]=mathUtils.M(e[3]));}getExtentGeometry(e,t,i,s=new request.M){return this.getExtent(e,t,i,d$2),s.spatialReference=this.spatialReference,s.xmin=d$2[0],s.ymin=d$2[1],s.xmax=d$2[2],s.ymax=d$2[3],s.zmin=void 0,s.zmax=void 0,s}ensureMaxLod(e){if(null==e)return !1;let t=!1;for(;this.levels.length<=e;){const e=this.levels[this.levels.length-1],i=e.resolution/2;this.levels.push({resolution:i,scale:e.scale/2,tileSize:[i*this.pixelSize,i*this.pixelSize]}),t=!0;}return t}capMaxLod(e){this.levels.length>e+1&&(this.levels.length=e+1);}getMaxLod(){return this.levels.length-1}scaleAtLevel(e){return this.levels[0].scale/2**e}levelAtScale(e){const t=this.levels[0].scale;return e>=t?0:Math.log(t/e)*Math.LOG2E}resolutionAtLevel(e){return this.levels[0].resolution/2**e}compatibleWith(e){if(!(e instanceof M$2)){if(M$2.checkUnsupported(e))return !1;e=new M$2(e);}if(!e.spatialReference.equals(this.spatialReference))return !1;if(e.pixelSize!==this.pixelSize)return !1;const t=Math.min(this.levels.length,e.levels.length)-1,s=this.levels[t].resolution;let r=.5*s;if(!mathUtils.p(e.origin[0],this.origin[0],r)||!mathUtils.p(e.origin[1],this.origin[1],r))return !1;return r=.5*s/2**t/this.pixelSize*v$2,mathUtils.p(s,e.levels[t].resolution,r)}rootTilesInExtent(e,t=null,i=1/0){const s=new Array,o=this.levels[0].tileSize;if(request.t$1(e)||0===o[0]||0===o[1])return s;M$2.computeRowColExtent(e,o,this.origin,d$2);let n=d$2[1],a=d$2[3],c=d$2[0],h=d$2[2];const u=h-c,m=a-n;if(u*m>i){const e=Math.floor(Math.sqrt(i));m>e&&(n=n+Math.floor(.5*m)-Math.floor(.5*e),a=n+e),u>e&&(c=c+Math.floor(.5*u)-Math.floor(.5*e),h=c+e);}for(let r=n;r<a;r++)for(let e=c;e<h;e++)s.push([0,r,e]);return request.r(t)&&(t[0]=this.origin[0]+c*o[0],t[1]=this.origin[1]-a*o[1],t[2]=this.origin[0]+h*o[0],t[3]=this.origin[1]-n*o[1]),s}static computeRowColExtent(e,t,i,s){const r=.001*(e[2]-e[0]+(e[3]-e[1]));s[0]=Math.max(0,Math.floor((e[0]+r-i[0])/t[0])),s[2]=Math.max(0,Math.ceil((e[2]-r-i[0])/t[0])),s[1]=Math.max(0,Math.floor((i[1]-e[3]+r)/t[1])),s[3]=Math.max(0,Math.ceil((i[1]-e[1]-r)/t[1]));}static isPowerOfTwo(e){const t=e.lods,i=t[0].resolution*2**t[0].level;return !t.some((function(e){return !mathUtils.x(e.resolution,i/2**e.level)}))}static hasGapInLevels(e){const t=e.lods.map((function(e){return e.level}));t.sort((function(e,t){return e-t}));for(let i=1;i<t.length;i++)if(t[i]!==t[0]+i)return !0;return !1}static tileSizeSupported(e){const t=e.size[1];return t===e.size[0]&&0==(t&t-1)&&t>=128&&t<=512}static checkUnsupported(t){return request.t$1(t)?new request.s("tilingscheme:tile-info-missing","Tiling scheme must have tiling information"):t.lods.length<1?new request.s("tilingscheme:generic","Tiling scheme must have at least one level"):M$2.isPowerOfTwo(t)?M$2.hasGapInLevels(t)?new request.s("tilingscheme:gaps","Tiling scheme levels must not have gaps between min and max level"):M$2.tileSizeSupported(t)?null:new request.s("tilingscheme:tile-size","Tiles must be square and size must be one of [128, 256, 512]"):new request.s("tilingscheme:power-of-two","Tiling scheme must be power of two")}static fromExtent(e,t){const i=e[2]-e[0],s=e[3]-e[1],r=unitUtils.H(t),l=1.2*Math.max(i,s),o=256,a=96,c=.0254,h=new M$2(new TileInfo.j({size:[o,o],origin:{x:e[0]-.5*(l-i),y:e[3]+.5*(l-s)},lods:[{level:0,resolution:l/o,scale:1/(o/a*c/(l*r))}],spatialReference:t}));return h.ensureMaxLod(20),h}static makeWebMercatorAuxiliarySphere(e){const t=new M$2(M$2.WebMercatorAuxiliarySphereTileInfo);return t.ensureMaxLod(e),t}static makeGCSWithTileSize(e,t=256,i=16){const s=256/t,r=new M$2(new TileInfo.j({size:[t,t],origin:{x:-180,y:90,spatialReference:e},spatialReference:e,lods:[{level:0,resolution:.703125*s,scale:295497598.570834*s}]}));return r.ensureMaxLod(i),r}get test(){return {isWebMercator:this._isWebMercator,isGCS:this._isGCS}}}M$2.WebMercatorAuxiliarySphereTileInfo=new TileInfo.j({size:[256,256],origin:{x:-20037508.342787,y:20037508.342787,spatialReference:request.k.WebMercator},spatialReference:request.k.WebMercator,lods:[{level:0,resolution:156543.03392800014,scale:591657527.591555}]}),M$2.WebMercatorAuxiliarySphere=M$2.makeWebMercatorAuxiliarySphere(19);const d$2=aaBoundingRect.u();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$2=[0,1],I$1=64,e=512,C=2.5,n$1=mathUtils.j(mathUtils.w/10),r$1=4,E$1=4,s$5=aaBoundingRect.u();M$2.WebMercatorAuxiliarySphere.getExtent(0,0,0,s$5);const T$2=aaBoundingRect.u([-180,-90,180,90]),a$6="Cannot extend surface to encompass all layers because it would result in too many root tiles.",u$3="Surface extent is too large for tile resolution at level 0.",H="data:image/png;base64,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",V=5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d$1=common.n(),M$1=common.n(),j$1=common.n(),v$1=common.n();function x$1(e,o,r=0){const n=e.extent;if(request.t$1(n))return !1;if(0===r)return aaBoundingRect.b(n,o);const s=Math.min(n[2]-n[0],n[3]-n[1]);return aaBoundingRect.w(n,o,r*s)}function S$1(e,t,o,l){mathUtils.r(d$1,o),d$1[l]=t[l];const c=mathUtils.c(d$1,d$1,t),f=mathUtils.c(M$1,e,t),m=mathUtils.z(f,c),u=mathUtils.z(c,c);let p;p=m<=0?t:u<=m?o:mathUtils.u(d$1,t,mathUtils.d(c,c,m/u));const h=mathUtils.c(d$1,e,p);return Math.PI/2-Math.atan(h[2]/Math.sqrt(h[0]*h[0]+h[1]*h[1]))}function w$1(e,o,r){const n=e.extent;if(request.t$1(n))return 0;j$1[0]=n[0],j$1[1]=n[1],j$1[2]=r,v$1[0]=n[2],v$1[1]=n[3],v$1[2]=r;let s=1/0,i=1/0;return o[0]<j$1[0]?s=S$1(o,j$1,v$1,0):o[0]>v$1[0]&&(s=S$1(o,v$1,j$1,0)),o[1]<j$1[1]?i=S$1(o,j$1,v$1,1):o[1]>v$1[1]&&(i=S$1(o,v$1,j$1,1)),Math.min(s,i)}function R(t,r,n){if(t.spatialReference.isGeographic&&!projection.$n(t.spatialReference))return new request.s("tilingscheme:local-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in local scenes");const s=M$2.checkUnsupported(t);if(request.r(s))return s;const i=T$1(t,n);return i||(r&&!t.spatialReference.equals(r)?new request.s("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null)}function T$1(t,o){const r=t.lods,n=r[0].resolution*2**r[0].level,s=[n*t.size[0],n*t.size[1]],i=[t.origin.x,t.origin.y],a=aaBoundingRect.c(o),l=aaBoundingRect.u();M$2.computeRowColExtent(a,s,i,l);const c=(l[2]-l[0])*(l[3]-l[1]);if(c>I$1){const o=r[0].scale*2**r[0].level;let s=Math.max((a[3]-a[1])/t.size[1],(a[2]-a[0])/t.size[0])*o/n;const i=Math.floor(Math.log(s)/Math.log(10));return s=Math.ceil(s/10**i)*10**i,new request.s("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(o).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+s.toLocaleString()+".",{level0Scale:o,suggestedLevel0Scale:s,requiredNumRootTiles:c,allowedNumRootTiles:I$1})}return null}const y$2=Object.freeze({__proto__:null,isInsideExtent:x$1,tiltToExtentEdge:w$1,checkIfTileInfoSupportedForViewSR:R});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$2(){return !0}function o$1(){return 0}function s$4(l,o){const s=l.lods.length-1,c=l.spatialReference,a=projection.$n(c)||request.G$1(c)||request.C$1(c);if(c.isWebMercator){if(!M$2.makeWebMercatorAuxiliarySphere(s).compatibleWith(l))return new request.s("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else {if(!a)return new request.s("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!M$2.makeGCSWithTileSize(l.spatialReference,l.size[0],s).compatibleWith(l))return l.spatialReference.isWGS84?new request.s("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme"):new request.s("tilingscheme:incompatible-global","The tiling scheme is not compatible with the ArcGIS Online tiling scheme")}if(o&&!l.spatialReference.equals(o))return new request.s("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}const c$5=Object.freeze({__proto__:null,isInsideExtent:l$2,tiltToExtentEdge:o$1,checkIfTileInfoSupportedForViewSR:s$4});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o={1:c$5,2:y$2};function r(t,e){t||console.warn("Terrain: "+e);}const u$2=1.2,a$5=80/180*Math.PI,c$4=110/180*Math.PI;function f(n,l,i){const r=o[n.viewingMode];let f;if(r.isInsideExtent(n,l))f=request.c$2(n.getElevation(l[0],l[1],l[1],n.spatialReference),0);else {if(!r.isInsideExtent(n,l,u$2))return 0;const t=n.getTileWithElevation(l[0],l[1],l[1],n.spatialReference);f=.5*((request.r(t)?t.elevationBounds[0]:n.elevationBounds.min)+(request.r(t)?t.elevationBounds[1]:n.elevationBounds.max));const i=r.tiltToExtentEdge(n,l,f);if(i>a$5&&i<c$4)return 0}const s=l[2]-f;return Math.abs(s)<i?0:s<0?-1:1}function s$3(t){return v(t)?{fullExtent:t.fullExtent,minScale:t.layer.minScale,maxScale:t.layer.maxScale,tilemapCache:null}:t.layer}function d(t){return "vector-tile"===(null==t?void 0:t.type)}function p$3(t){return "imagery-tile"===(null==t?void 0:t.type)||"wcs"===(null==t?void 0:t.type)}function v(t){return "imagery-tile-3d"===(null==t?void 0:t.type)}function m(t){return "tile-3d"===(null==t?void 0:t.type)}function y$1(t){return "vector-tile-3d"===(null==t?void 0:t.type)}function I(t){return "wmts-3d"===(null==t?void 0:t.type)}function x(t){return "elevation-3d"===(null==t?void 0:t.type)}function E(t){return t&&(m(t)||v(t)||x(t)||y$1(t)||I(t))}function h$2(t){var n;const l=null==t||null==(n=t.sourceLayerInfo)?void 0:n.data;return request.r(l)&&"type"in l&&"raster-tile"===l.type}function T(t){var n;const l=null==t||null==(n=t.sourceLayerInfo)?void 0:n.data;return request.r(l)&&"type"in l&&"vector-tile"===l.type}function g(t){var n;const l=null==t||null==(n=t.sourceLayerInfo)?void 0:n.data;return request.r(l)&&"type"in l&&"tile-texture"===l.type}function L(t){var e;const l=null==t||null==(e=t.sourceLayerInfo)?void 0:e.data;return l instanceof HTMLImageElement||l instanceof j$2||l instanceof HTMLCanvasElement||l instanceof ImageData}function S(t){return request.r(t)&&"release"in t&&t.release(),null}function M(t){return t.fetchTile&&!1!==t.hasOverriddenFetchTile}function w(t,e,n,l){return o[l].checkIfTileInfoSupportedForViewSR(t,n,e)}function b$1(t,n,l){let i=null,o=null;if("wmts"===t.type){const e=t.activeLayer;if(e){const t=e.tileMatrixSet;if(t)i=t.tileInfo,o=t.fullExtent;else {const t=e.tileMatrixSets;if(t){const e=t.find((t=>null==w(t.tileInfo,t.fullExtent,n,l)));if(e)return {tileInfo:e.tileInfo,fullExtent:e.fullExtent}}}}}else o=p$3(t)?t.getCompatibleFullExtent(n):t.fullExtent,i=d(t)&&!j.force512VTL?t.compatibleTileInfo256:p$3(t)?t.getCompatibleTileInfo(n,o,2===l):t.tileInfo;return request.r(i)&&request.r(o)&&null==w(i,o,n,l)?{tileInfo:i,fullExtent:o}:{tileInfo:null,fullExtent:null}}const j={force512VTL:!1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i$7(i,d){return null!=i&&("2d"===d||("local"===d?!i.isGeographic||(i.isWGS84||4490===i.wkid):i.isWebMercator||i.isWGS84||4490===i.wkid||104971===i.wkid||104905===i.wkid||104903===i.wkid))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$2=class extends request.a$2{constructor(r){super(r),this.facilityIdField=null,this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null;}};request.e([request.d({type:String,json:{write:!0}})],s$2.prototype,"facilityIdField",void 0),request.e([request.d({type:String,json:{write:!0}})],s$2.prototype,"layerId",void 0),request.e([request.d({type:String,json:{write:!0}})],s$2.prototype,"nameField",void 0),request.e([request.d({type:String,json:{write:!0}})],s$2.prototype,"siteIdField",void 0),request.e([request.d({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],s$2.prototype,"sublayerId",void 0),s$2=request.e([request.i("esri.layers.support.FacilityLayerInfo")],s$2);const i$6=s$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i$5=class extends request.a$2{constructor(e){super(e),this.facilityIdField=null,this.layerId=null,this.levelIdField=null,this.levelNumberField=null,this.longNameField=null,this.shortNameField=null,this.sublayerId=null,this.verticalOrderField=null;}};request.e([request.d({type:String,json:{write:!0}})],i$5.prototype,"facilityIdField",void 0),request.e([request.d({type:String,json:{write:!0}})],i$5.prototype,"layerId",void 0),request.e([request.d({type:String,json:{write:!0}})],i$5.prototype,"levelIdField",void 0),request.e([request.d({type:String,json:{write:!0}})],i$5.prototype,"levelNumberField",void 0),request.e([request.d({type:String,json:{write:!0}})],i$5.prototype,"longNameField",void 0),request.e([request.d({type:String,json:{write:!0}})],i$5.prototype,"shortNameField",void 0),request.e([request.d({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],i$5.prototype,"sublayerId",void 0),request.e([request.d({type:String,json:{write:!0}})],i$5.prototype,"verticalOrderField",void 0),i$5=request.e([request.i("esri.layers.support.LevelLayerInfo")],i$5);const s$1=i$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends request.a$2{constructor(r){super(r),this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null;}};request.e([request.d({type:String,json:{write:!0}})],s.prototype,"layerId",void 0),request.e([request.d({type:String,json:{write:!0}})],s.prototype,"nameField",void 0),request.e([request.d({type:String,json:{write:!0}})],s.prototype,"siteIdField",void 0),request.e([request.d({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"sublayerId",void 0),s=request.e([request.i("esri.layers.support.SiteLayerInfo")],s);const i$4=s;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a$4=class extends request.a$2{constructor(r){super(r),this.levelLayer=null,this.facilityLayer=null,this.siteLayer=null;}};request.e([request.d({type:s$1,json:{write:!0}})],a$4.prototype,"levelLayer",void 0),request.e([request.d({type:i$6,json:{write:!0}})],a$4.prototype,"facilityLayer",void 0),request.e([request.d({type:i$4,json:{write:!0}})],a$4.prototype,"siteLayer",void 0),a$4=request.e([request.i("esri.support.MapFloorInfo")],a$4);const l$1=a$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h$1={width:600,height:400},t=1.5;function i$3(i,e){e=e||h$1;let{width:d,height:n}=e;const g=d/n;return g<t?n=d/t:g>t&&(d=n*t),d>i.width&&(n*=i.width/d,d=i.width),n>i.height&&(d*=i.height/n,n=i.height),{width:Math.round(d),height:Math.round(n)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return {enabled:!(null==n||!n.length)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$3;let a$3=c$3=class extends request.a$2{constructor(r){super(r),this.exactMatch=!1,this.name=null,this.type=null;}clone(){return new c$3({exactMatch:this.exactMatch,type:this.type,name:this.name})}};request.e([request.d({type:Boolean,json:{write:!0}})],a$3.prototype,"exactMatch",void 0),request.e([request.d({type:String,json:{write:!0}})],a$3.prototype,"name",void 0),request.e([enumeration.r(fieldType.i)],a$3.prototype,"type",void 0),a$3=c$3=request.e([request.i("esri.webdoc.applicationProperties.SearchLayerField")],a$3);const i$2=a$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$2;let a$2=c$2=class extends request.a$2{constructor(r){super(r),this.field=null,this.id=null,this.subLayer=null;}clone(){return new c$2(request.l$1({field:this.field,id:this.id,subLayer:this.subLayer}))}};request.e([request.d({type:i$2,json:{write:{isRequired:!0}}})],a$2.prototype,"field",void 0),request.e([request.d({type:String,json:{write:{isRequired:!0}}})],a$2.prototype,"id",void 0),request.e([request.d({type:request.S$2,json:{write:!0}})],a$2.prototype,"subLayer",void 0),a$2=c$2=request.e([request.i("esri.webdoc.applicationProperties.SearchLayer")],a$2);const u$1=a$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$1;let a$1=c$1=class extends request.a$2{constructor(r){super(r),this.exactMatch=!1,this.name=null,this.type=null;}clone(){return new c$1({exactMatch:this.exactMatch,type:this.type,name:this.name})}};request.e([request.d({type:Boolean,json:{write:!0}})],a$1.prototype,"exactMatch",void 0),request.e([request.d({type:String,json:{write:!0}})],a$1.prototype,"name",void 0),request.e([enumeration.r(fieldType.i)],a$1.prototype,"type",void 0),a$1=c$1=request.e([request.i("esri.webdoc.applicationProperties.SearchTableField")],a$1);const i$1=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$2;let c=p$2=class extends request.a$2{constructor(r){super(r),this.field=null,this.id=null;}clone(){return new p$2(request.l$1({field:this.field,id:this.id}))}};request.e([request.d({type:i$1,json:{write:{isRequired:!0}}})],c.prototype,"field",void 0),request.e([request.d({type:String,json:{write:{isRequired:!0}}})],c.prototype,"id",void 0),c=p$2=request.e([request.i("esri.webdoc.applicationProperties.SearchTable")],c);const l=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$1;const b=request.S.ofType(u$1),h=request.S.ofType(l);let u=p$1=class extends request.a$2{constructor(e){super(e),this.addressSearchEnabled=!0,this.enabled=!0,this.hintText=null,this.layers=new b,this.tables=new h;}readAddressSearchEnabled(e){return !e}writeAddressSearchEnabled(e,r,o){r[o]=!e;}clone(){return new p$1(request.l$1({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers,tables:this.tables}))}};request.e([request.d({type:Boolean,nonNullable:!0,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder",isRequired:!0},origins:{"web-scene":{read:!1,write:!1}}}})],u.prototype,"addressSearchEnabled",void 0),request.e([request.o$2("addressSearchEnabled")],u.prototype,"readAddressSearchEnabled",null),request.e([request.r$2("addressSearchEnabled")],u.prototype,"writeAddressSearchEnabled",null),request.e([request.d({type:Boolean,nonNullable:!0,json:{write:!0,origins:{"web-map":{write:{isRequired:!0}},"web-scene":{default:!0,write:!0}}}})],u.prototype,"enabled",void 0),request.e([request.d({type:String,json:{write:!0}})],u.prototype,"hintText",void 0),request.e([request.d({type:b,json:{write:{overridePolicy:n},origins:{"web-scene":{write:{isRequired:!0}}}}})],u.prototype,"layers",void 0),request.e([request.d({type:h,json:{read:!0,write:{overridePolicy:n}}})],u.prototype,"tables",void 0),u=p$1=request.e([request.i("esri.webdoc.applicationProperties.Search")],u);const y=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let a=p=class extends request.a$2{constructor(r){super(r),this.search=null;}clone(){return new p(request.l$1({search:this.search}))}};request.e([request.d({type:y,json:{write:!0}})],a.prototype,"search",void 0),a=p=request.e([request.i("esri.webdoc.applicationProperties.Viewing")],a);const i=a;

exports.C = C;
exports.E = E;
exports.E$1 = E$1;
exports.H = H;
exports.I = I$1;
exports.L = L;
exports.M = M$2;
exports.M$1 = M;
exports.S = S;
exports.T = T$2;
exports.T$1 = T;
exports.V = V;
exports.a = a$7;
exports.a$1 = a$6;
exports.b = b$1;
exports.d = d;
exports.e = e$2;
exports.e$1 = e;
exports.f = f;
exports.g = g;
exports.h = h$2;
exports.i = i$7;
exports.i$1 = i;
exports.i$2 = i$3;
exports.j = j$2;
exports.l = l$1;
exports.m = m;
exports.n = n$1;
exports.o = o$2;
exports.p = p$3;
exports.r = r$1;
exports.r$1 = r;
exports.s = s$5;
exports.s$1 = s$3;
exports.t = t$2;
exports.u = u$3;
exports.v = v;
exports.w = w;
exports.w$1 = w$2;
exports.x = x;
exports.y = y$1;
