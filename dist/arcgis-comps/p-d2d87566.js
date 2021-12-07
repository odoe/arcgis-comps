import{e,d as t,i as s,p as i,bo as n,bE as r,A as o,ap as a,b9 as l,ax as A,h as c,b as u,s as h,D as d,Q as p,a0 as g,bF as f,bG as w,bH as m,bI as y,_ as v,af as b,V as I,aW as B,a1 as x,aT as T,S,a2 as j,a3 as E}from"./p-e58503d5.js";import{i as L}from"./p-7f47b970.js";import{f as Q}from"./p-ca295674.js";import{M as C,p as M,x as P,j as F,w as N,r as R,c as q,u as H,d as V,z as k}from"./p-2f398ed1.js";import{n as G}from"./p-d3105731.js";import{$ as D}from"./p-c93d2280.js";import{u as O,b as z,w as Y,c as K}from"./p-ea916a39.js";import{H as U}from"./p-01e5a461.js";import{j as Z}from"./p-db63fa0e.js";import{r as X}from"./p-a9a30646.js";import{i as W}from"./p-a2324023.js";function J(e){return e&&"base-tile"===e.type||"tile"===e.type||"elevation"===e.type||"imagery-tile"===e.type||"base-elevation"===e.type||"open-street-map"===e.type||"wcs"===e.type||"web-tile"===e.type||"wmts"===e.type||"vector-tile"===e.type}function _(e){return e.parent&&"esri.Basemap"===e.parent.declaredClass&&e.parent.baseLayers.indexOf(e)>-1}function $(e){return!0===e.labelsVisible&&null!=e.labelingInfo&&e.labelingInfo.length>0}class ee{constructor(e){this.typeWorkerQuota=e,this.tasks=new Array,this.numWorkers=0,this.statistics=new te}}class te{constructor(){this.requests=0,this.size=0,this.duration=0,this.speed=0}}class se{constructor(e,t,s,i){this._workerFunc=e,this._callbackFunc=t,this._maxTotalNumWorkers=s,this._totalNumWorkers=0,this._clients=i.map((e=>new ee(e)))}hasQuota(e){const t=this._clients[e];return!!t&&(this._totalNumWorkers<this._maxTotalNumWorkers||t.numWorkers+t.tasks.length<t.typeWorkerQuota)}push(e){const t=this._clients[e.client];t&&(this._totalNumWorkers<this._maxTotalNumWorkers?(t.numWorkers++,this._totalNumWorkers++,this._workerFunc(e,((e,t)=>this._taskCallback(e,t)))):t.tasks.push(e))}cancel(e){this._taskFinished(e),e._cancelled=!0}destroy(){this._clients.length=0}_taskFinished(e){const t=this._clients[e.client];this._totalNumWorkers--,t.numWorkers--,t.statistics.requests++,t.statistics.size+=e.size||0,t.statistics.duration+=e.duration||0,t.statistics.speed=t.statistics.duration>0?t.statistics.size/t.statistics.duration:0,L(t.numWorkers>=0),this._next()}_next(){for(const e of this._clients)if(e&&e.numWorkers<e.typeWorkerQuota&&this._processQueue(e))return;for(const e of this._clients)if(e&&this._processQueue(e))return}_processQueue(e){for(;e.tasks.length>0;)if(this._workerFunc(e.tasks.shift(),((e,t)=>this._taskCallback(e,t))))return e.numWorkers++,this._totalNumWorkers++,!0;return!1}_taskCallback(e,t){e._cancelled||(this._callbackFunc(e,t),this._taskFinished(e))}getStatsForType(e){const t=this._clients[e];return t?{quota:t.typeWorkerQuota,workers:t.numWorkers,queueSize:t.tasks.length,requestStats:t.statistics}:null}get test(){const e=this;return{set workerFunc(t){e._workerFunc=t}}}}class ie extends class{constructor(e){this.client=e,this._cancelled=!1,this.size=0,this.duration=0}}{constructor(e,t,s,i,n){super(i),this.url=e,this.options=t,this.docType=s,this.key=n,this.result=null,this.status=1,this.request=null,this.abortController=null,this.resolvers=new Array,this.startTime=0}}let ne=class extends i{constructor(){super(...arguments),this.tasks=new Map,this.onLoadQueue=new Array,this.doneQueue=new Array,this.updating=!1}setup(e,t,s){this.loadQueue=new se(((e,t)=>this.startLoading(e,t)),((e,t)=>this.doneLoadingCallback(e,t)),e,t),s&&(this.taskHandle=s.registerTask(Q.STREAM_DATA_LOADER,this))}destroy(){this.taskHandle=n(this.taskHandle),this.tasks.forEach((e=>{e.abortController&&e.abortController.abort()})),this.loadQueue.destroy(),this.loadQueue=null,this.onLoadQueue=null,this.doneQueue=null,this.tasks=null}hasDownloadSlots(e){return this.loadQueue.hasQuota(e)}request(e,t,s,i={}){const n=r();n.__signal=o(i)?i.signal:null;const l=this.createOrUpdateTask(e,t,s,i,n);return a(i,(()=>this.cancelRequest(l,n))),n.promise}createTask(e,t,s,i,n,r){const o=new ie(e,t,s,i,n);return this.updateTask(o,r),this.tasks.set(n,o),1===this.tasks.size&&this._set("updating",!0),this.loadQueue.push(o),o}cancelRequest(e,t){l(e.resolvers,t),t.reject(A()),0===e.resolvers.length&&(2===e.status&&(e.status=4,this.loadQueue.cancel(e),e.abortController.abort(),e.request=null,e.abortController=null),e.status=4,this.tasks.delete(e.key),0===this.tasks.size&&this._set("updating",!1))}taskKey(e,t,s){return`${e}:${t}:${s}`}updateTask(e,t){e.resolvers.push(t)}createOrUpdateTask(e,t,s,i,n){const r=o(i)&&i.uid||e,a=this.taskKey(r,t,s),l=this.tasks.get(a);return l?(this.updateTask(l,n),l):this.createTask(e,i,t,s,a,n)}doneLoadingCallback(e,t){this.loadQueue&&(L(2===e.status),e.status=3,this.taskHandle?this.doneQueue.push({task:e,err:t}):this.doneLoading(e,t))}get running(){return this.doneQueue.length>0||this.onLoadQueue.length>0}runTask(e){for(;!e.done&&this.onLoadQueue.length>0;){const t=this.onLoadQueue.shift();c(t.task.abortController),t.task.abortController=null,t.callback(t.task),e.madeProgress()}for(;!e.done&&this.doneQueue.length>0;){const t=this.doneQueue.shift();3!==t.task.status&&(t.err=t.err||A()),this.doneLoading(t.task,t.err),e.madeProgress()}}doneLoading(e,t){let s=e.result instanceof HTMLImageElement?0:e.resolvers.length;for(const i of e.resolvers)if(t)u(t)?i.reject(t):i.reject(new h("stream-data-loader:request-error",`Failed to request resource at '${e.url}'. ${t}`,{url:e.url,error:t}));else{--s;const t=s<=0?e.result:d(e.result);i.resolve(t)}this.tasks.delete(e.key),0===this.tasks.size&&this._set("updating",!1)}startLoading(e,t){if(4===e.status)return!1;let s,i;switch(e.startTime=performance.now(),e.status=2,e.docType){case"binary":i="array-buffer",s=0;break;case"image":i="image";break;case"image+type":i="array-buffer";break;default:i="json"}e.abortController=new AbortController;const n=e.abortController.signal;e.request=p(e.url,{...e.options,responseType:i,timeout:s,signal:n});let r=()=>{};const o=s=>{e.duration=performance.now()-e.startTime,e.size=s instanceof ArrayBuffer?s.byteLength:e.size||0,e.result=s,this.taskHandle?this.onLoadQueue.push({callback:t,task:e}):(e.abortController=null,t(e))},a=s=>{2===e.status&&t(e,s),r()};return"image+type"!==e.docType?(e.request.then((e=>o(e.data)),a),!0):(e.request.then((t=>{const l=t.data,A=function(e){if(e.byteLength<2)return"unknown";const t=new Uint8Array(e,0,e.byteLength);return 137===t[0]&&80===t[1]?"image/png":71===t[0]&&73===t[1]?"image/gif":66===t[0]&&77===t[1]?"image/bmp":255===t[0]&&216===t[1]?"image/jpeg":"unknown"}(l);if(i="image",e.size=l.byteLength,"unknown"===A)return e.request=p(e.url,{responseType:i,timeout:s,signal:n}),void e.request.then((e=>o(e.data)),a);const c=new Blob([l],{type:A}),u=window.URL.createObjectURL(c);r=()=>window.URL.revokeObjectURL(u),e.request=p(u,{responseType:i,timeout:s,signal:n}),e.request.then((e=>o(new re(e.data,A,r))),a)}),a),!0)}get test(){return{loadQueue:this.loadQueue}}};e([t({readOnly:!0})],ne.prototype,"updating",void 0),ne=e([s("esri.views.3d.support.StreamDataLoader")],ne);class re{constructor(e,t,s){this.image=e,this.type=t,this.release=s}get isOpaque(){return"image/jpeg"===this.type}}const oe=ne;class ae{constructor(e){const t=ae.checkUnsupported(e);if(o(t))throw t;const s=I(e);this.spatialReference=s.spatialReference,this._isWebMercator=this.spatialReference.isWebMercator,this._isGCS=D(this.spatialReference)||f(this.spatialReference)||w(this.spatialReference),this.origin=[s.origin.x,s.origin.y],this.pixelSize=s.size[0],this.dpi=s.dpi;const i=s.lods.reduce((function(e,t,s){return t.level<e.min&&(e.min=t.level,e.minIndex=s),e.max=Math.max(e.max,t.level),e}),{min:1/0,minIndex:0,max:-1/0}),n=s.lods[i.minIndex],r=2**n.level;let a=n.resolution*r,l=n.scale*r;this.levels=new Array(i.max+1);for(let e=0;e<this.levels.length;e++)this.levels[e]={resolution:a,scale:l,tileSize:[a*s.size[0],a*s.size[1]]},a/=2,l/=2}clone(){return new ae(this.toTileInfo())}toTileInfo(){return new Z({dpi:this.dpi,origin:{x:this.origin[0],y:this.origin[1],spatialReference:this.spatialReference},size:[this.pixelSize,this.pixelSize],spatialReference:this.spatialReference,lods:this.levels.map(((e,t)=>({level:t,scale:e.scale,resolution:e.resolution})))})}getExtent(e,t,s,i){const n=this.levels[e],r=n.tileSize[0],o=n.tileSize[1];i[0]=this.origin[0]+s*r,i[2]=i[0]+r,i[3]=this.origin[1]-t*o,i[1]=i[3]-o}convertExtentToRadians(e,t){this._isWebMercator?(t[0]=m(e[0]),t[1]=y(e[1]),t[2]=m(e[2]),t[3]=y(e[3])):this._isGCS&&(t[0]=C(e[0]),t[1]=C(e[1]),t[2]=C(e[2]),t[3]=C(e[3]))}getExtentGeometry(e,t,s,i=new v){return this.getExtent(e,t,s,le),i.spatialReference=this.spatialReference,i.xmin=le[0],i.ymin=le[1],i.xmax=le[2],i.ymax=le[3],i.zmin=void 0,i.zmax=void 0,i}ensureMaxLod(e){if(null==e)return!1;let t=!1;for(;this.levels.length<=e;){const e=this.levels[this.levels.length-1],s=e.resolution/2;this.levels.push({resolution:s,scale:e.scale/2,tileSize:[s*this.pixelSize,s*this.pixelSize]}),t=!0}return t}capMaxLod(e){this.levels.length>e+1&&(this.levels.length=e+1)}getMaxLod(){return this.levels.length-1}scaleAtLevel(e){return this.levels[0].scale/2**e}levelAtScale(e){const t=this.levels[0].scale;return e>=t?0:Math.log(t/e)*Math.LOG2E}resolutionAtLevel(e){return this.levels[0].resolution/2**e}compatibleWith(e){if(!(e instanceof ae)){if(ae.checkUnsupported(e))return!1;e=new ae(e)}if(!e.spatialReference.equals(this.spatialReference))return!1;if(e.pixelSize!==this.pixelSize)return!1;const t=Math.min(this.levels.length,e.levels.length)-1,s=this.levels[t].resolution;let i=.5*s;return!(!M(e.origin[0],this.origin[0],i)||!M(e.origin[1],this.origin[1],i))&&(i=.5*s/2**t/this.pixelSize*12,M(s,e.levels[t].resolution,i))}rootTilesInExtent(e,t=null,s=1/0){const i=new Array,n=this.levels[0].tileSize;if(b(e)||0===n[0]||0===n[1])return i;ae.computeRowColExtent(e,n,this.origin,le);let r=le[1],a=le[3],l=le[0],A=le[2];const c=A-l,u=a-r;if(c*u>s){const e=Math.floor(Math.sqrt(s));u>e&&(r=r+Math.floor(.5*u)-Math.floor(.5*e),a=r+e),c>e&&(l=l+Math.floor(.5*c)-Math.floor(.5*e),A=l+e)}for(let e=r;e<a;e++)for(let t=l;t<A;t++)i.push([0,e,t]);return o(t)&&(t[0]=this.origin[0]+l*n[0],t[1]=this.origin[1]-a*n[1],t[2]=this.origin[0]+A*n[0],t[3]=this.origin[1]-r*n[1]),i}static computeRowColExtent(e,t,s,i){const n=.001*(e[2]-e[0]+(e[3]-e[1]));i[0]=Math.max(0,Math.floor((e[0]+n-s[0])/t[0])),i[2]=Math.max(0,Math.ceil((e[2]-n-s[0])/t[0])),i[1]=Math.max(0,Math.floor((s[1]-e[3]+n)/t[1])),i[3]=Math.max(0,Math.ceil((s[1]-e[1]-n)/t[1]))}static isPowerOfTwo(e){const t=e.lods,s=t[0].resolution*2**t[0].level;return!t.some((function(e){return!P(e.resolution,s/2**e.level)}))}static hasGapInLevels(e){const t=e.lods.map((function(e){return e.level}));t.sort((function(e,t){return e-t}));for(let e=1;e<t.length;e++)if(t[e]!==t[0]+e)return!0;return!1}static tileSizeSupported(e){const t=e.size[1];return t===e.size[0]&&0==(t&t-1)&&t>=128&&t<=512}static checkUnsupported(e){return b(e)?new h("tilingscheme:tile-info-missing","Tiling scheme must have tiling information"):e.lods.length<1?new h("tilingscheme:generic","Tiling scheme must have at least one level"):ae.isPowerOfTwo(e)?ae.hasGapInLevels(e)?new h("tilingscheme:gaps","Tiling scheme levels must not have gaps between min and max level"):ae.tileSizeSupported(e)?null:new h("tilingscheme:tile-size","Tiles must be square and size must be one of [128, 256, 512]"):new h("tilingscheme:power-of-two","Tiling scheme must be power of two")}static fromExtent(e,t){const s=e[2]-e[0],i=e[3]-e[1],n=U(t),r=1.2*Math.max(s,i),o=256,a=new ae(new Z({size:[o,o],origin:{x:e[0]-.5*(r-s),y:e[3]+.5*(r-i)},lods:[{level:0,resolution:r/o,scale:1/(o/96*.0254/(r*n))}],spatialReference:t}));return a.ensureMaxLod(20),a}static makeWebMercatorAuxiliarySphere(e){const t=new ae(ae.WebMercatorAuxiliarySphereTileInfo);return t.ensureMaxLod(e),t}static makeGCSWithTileSize(e,t=256,s=16){const i=256/t,n=new ae(new Z({size:[t,t],origin:{x:-180,y:90,spatialReference:e},spatialReference:e,lods:[{level:0,resolution:.703125*i,scale:295497598.570834*i}]}));return n.ensureMaxLod(s),n}get test(){return{isWebMercator:this._isWebMercator,isGCS:this._isGCS}}}ae.WebMercatorAuxiliarySphereTileInfo=new Z({size:[256,256],origin:{x:-20037508.342787,y:20037508.342787,spatialReference:g.WebMercator},spatialReference:g.WebMercator,lods:[{level:0,resolution:156543.03392800014,scale:591657527.591555}]}),ae.WebMercatorAuxiliarySphere=ae.makeWebMercatorAuxiliarySphere(19);const le=O(),Ae=[0,1],ce=64,ue=512,he=2.5,de=F(N/10),pe=4,ge=4,fe=O();ae.WebMercatorAuxiliarySphere.getExtent(0,0,0,fe);const we=O([-180,-90,180,90]),me="Cannot extend surface to encompass all layers because it would result in too many root tiles.",ye="Surface extent is too large for tile resolution at level 0.",ve="data:image/png;base64,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",be=5,Ie=G(),Be=G(),xe=G(),Te=G();function Se(e,t,s,i){R(Ie,s),Ie[i]=t[i];const n=q(Ie,Ie,t),r=q(Be,e,t),o=k(r,n),a=k(n,n);let l;l=o<=0?t:a<=o?s:H(Ie,t,V(n,n,o/a));const A=q(Ie,e,l);return Math.PI/2-Math.atan(A[2]/Math.sqrt(A[0]*A[0]+A[1]*A[1]))}const je=Object.freeze({__proto__:null,isInsideExtent:function(e,t,s=0){const i=e.extent;if(b(i))return!1;if(0===s)return z(i,t);const n=Math.min(i[2]-i[0],i[3]-i[1]);return Y(i,t,s*n)},tiltToExtentEdge:function(e,t,s){const i=e.extent;if(b(i))return 0;xe[0]=i[0],xe[1]=i[1],xe[2]=s,Te[0]=i[2],Te[1]=i[3],Te[2]=s;let n=1/0,r=1/0;return t[0]<xe[0]?n=Se(t,xe,Te,0):t[0]>Te[0]&&(n=Se(t,Te,xe,0)),t[1]<xe[1]?r=Se(t,xe,Te,1):t[1]>Te[1]&&(r=Se(t,Te,xe,1)),Math.min(n,r)},checkIfTileInfoSupportedForViewSR:function(e,t,s){if(e.spatialReference.isGeographic&&!D(e.spatialReference))return new h("tilingscheme:local-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in local scenes");const i=ae.checkUnsupported(e);return o(i)?i:function(e,t){const s=e.lods,i=s[0].resolution*2**s[0].level,n=[i*e.size[0],i*e.size[1]],r=[e.origin.x,e.origin.y],o=K(t),a=O();ae.computeRowColExtent(o,n,r,a);const l=(a[2]-a[0])*(a[3]-a[1]);if(l>64){const t=s[0].scale*2**s[0].level;let n=Math.max((o[3]-o[1])/e.size[1],(o[2]-o[0])/e.size[0])*t/i;const r=Math.floor(Math.log(n)/Math.log(10));return n=Math.ceil(n/10**r)*10**r,new h("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(t).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+n.toLocaleString()+".",{level0Scale:t,suggestedLevel0Scale:n,requiredNumRootTiles:l,allowedNumRootTiles:64})}return null}(e,s)||(t&&!e.spatialReference.equals(t)?new h("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null)}}),Ee={1:Object.freeze({__proto__:null,isInsideExtent:function(){return!0},tiltToExtentEdge:function(){return 0},checkIfTileInfoSupportedForViewSR:function(e,t){const s=e.lods.length-1,i=e.spatialReference,n=D(i)||f(i)||w(i);if(i.isWebMercator){if(!ae.makeWebMercatorAuxiliarySphere(s).compatibleWith(e))return new h("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else{if(!n)return new h("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!ae.makeGCSWithTileSize(e.spatialReference,e.size[0],s).compatibleWith(e))return e.spatialReference.isWGS84?new h("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme"):new h("tilingscheme:incompatible-global","The tiling scheme is not compatible with the ArcGIS Online tiling scheme")}if(t&&!e.spatialReference.equals(t))return new h("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}}),2:je};function Le(e,t){e||console.warn("Terrain: "+t)}const Qe=80/180*Math.PI,Ce=110/180*Math.PI;function Me(e,t,s){const i=Ee[e.viewingMode];let n;if(i.isInsideExtent(e,t))n=B(e.getElevation(t[0],t[1],t[1],e.spatialReference),0);else{if(!i.isInsideExtent(e,t,1.2))return 0;const s=e.getTileWithElevation(t[0],t[1],t[1],e.spatialReference);n=.5*((o(s)?s.elevationBounds[0]:e.elevationBounds.min)+(o(s)?s.elevationBounds[1]:e.elevationBounds.max));const r=i.tiltToExtentEdge(e,t,n);if(r>Qe&&r<Ce)return 0}const r=t[2]-n;return Math.abs(r)<s?0:r<0?-1:1}function Pe(e){return Re(e)?{fullExtent:e.fullExtent,minScale:e.layer.minScale,maxScale:e.layer.maxScale,tilemapCache:null}:e.layer}function Fe(e){return"vector-tile"===(null==e?void 0:e.type)}function Ne(e){return"imagery-tile"===(null==e?void 0:e.type)||"wcs"===(null==e?void 0:e.type)}function Re(e){return"imagery-tile-3d"===(null==e?void 0:e.type)}function qe(e){return"tile-3d"===(null==e?void 0:e.type)}function He(e){return"vector-tile-3d"===(null==e?void 0:e.type)}function Ve(e){return"elevation-3d"===(null==e?void 0:e.type)}function ke(e){return e&&(qe(e)||Re(e)||Ve(e)||He(e)||function(e){return"wmts-3d"===(null==e?void 0:e.type)}(e))}function Ge(e){var t;const s=null==e||null==(t=e.sourceLayerInfo)?void 0:t.data;return o(s)&&"type"in s&&"raster-tile"===s.type}function De(e){var t;const s=null==e||null==(t=e.sourceLayerInfo)?void 0:t.data;return o(s)&&"type"in s&&"vector-tile"===s.type}function Oe(e){var t;const s=null==e||null==(t=e.sourceLayerInfo)?void 0:t.data;return o(s)&&"type"in s&&"tile-texture"===s.type}function ze(e){var t;const s=null==e||null==(t=e.sourceLayerInfo)?void 0:t.data;return s instanceof HTMLImageElement||s instanceof re||s instanceof HTMLCanvasElement||s instanceof ImageData}function Ye(e){return o(e)&&"release"in e&&e.release(),null}function Ke(e){return e.fetchTile&&!1!==e.hasOverriddenFetchTile}function Ue(e,t,s,i){return Ee[i].checkIfTileInfoSupportedForViewSR(e,s,t)}function Ze(e,t,s){let i=null,n=null;if("wmts"===e.type){const r=e.activeLayer;if(r){const e=r.tileMatrixSet;if(e)i=e.tileInfo,n=e.fullExtent;else{const e=r.tileMatrixSets;if(e){const i=e.find((e=>null==Ue(e.tileInfo,e.fullExtent,t,s)));if(i)return{tileInfo:i.tileInfo,fullExtent:i.fullExtent}}}}}else n=Ne(e)?e.getCompatibleFullExtent(t):e.fullExtent,i=Fe(e)&&!Xe.force512VTL?e.compatibleTileInfo256:Ne(e)?e.getCompatibleTileInfo(t,n,2===s):e.tileInfo;return o(i)&&o(n)&&null==Ue(i,n,t,s)?{tileInfo:i,fullExtent:n}:{tileInfo:null,fullExtent:null}}const Xe={force512VTL:!1};function We(e,t){return null!=e&&("2d"===t||("local"===t?!e.isGeographic||e.isWGS84||4490===e.wkid:e.isWebMercator||e.isWGS84||4490===e.wkid||104971===e.wkid||104905===e.wkid||104903===e.wkid))}let Je=class extends x{constructor(e){super(e),this.facilityIdField=null,this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null}};e([t({type:String,json:{write:!0}})],Je.prototype,"facilityIdField",void 0),e([t({type:String,json:{write:!0}})],Je.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],Je.prototype,"nameField",void 0),e([t({type:String,json:{write:!0}})],Je.prototype,"siteIdField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],Je.prototype,"sublayerId",void 0),Je=e([s("esri.layers.support.FacilityLayerInfo")],Je);const _e=Je;let $e=class extends x{constructor(e){super(e),this.facilityIdField=null,this.layerId=null,this.levelIdField=null,this.levelNumberField=null,this.longNameField=null,this.shortNameField=null,this.sublayerId=null,this.verticalOrderField=null}};e([t({type:String,json:{write:!0}})],$e.prototype,"facilityIdField",void 0),e([t({type:String,json:{write:!0}})],$e.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],$e.prototype,"levelIdField",void 0),e([t({type:String,json:{write:!0}})],$e.prototype,"levelNumberField",void 0),e([t({type:String,json:{write:!0}})],$e.prototype,"longNameField",void 0),e([t({type:String,json:{write:!0}})],$e.prototype,"shortNameField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],$e.prototype,"sublayerId",void 0),e([t({type:String,json:{write:!0}})],$e.prototype,"verticalOrderField",void 0),$e=e([s("esri.layers.support.LevelLayerInfo")],$e);const et=$e;let tt=class extends x{constructor(e){super(e),this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null}};e([t({type:String,json:{write:!0}})],tt.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],tt.prototype,"nameField",void 0),e([t({type:String,json:{write:!0}})],tt.prototype,"siteIdField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],tt.prototype,"sublayerId",void 0),tt=e([s("esri.layers.support.SiteLayerInfo")],tt);const st=tt;let it=class extends x{constructor(e){super(e),this.levelLayer=null,this.facilityLayer=null,this.siteLayer=null}};e([t({type:et,json:{write:!0}})],it.prototype,"levelLayer",void 0),e([t({type:_e,json:{write:!0}})],it.prototype,"facilityLayer",void 0),e([t({type:st,json:{write:!0}})],it.prototype,"siteLayer",void 0),it=e([s("esri.support.MapFloorInfo")],it);const nt=it,rt={width:600,height:400},ot=1.5;function at(e,t){t=t||rt;let{width:s,height:i}=t;const n=s/i;return n<ot?i=s/ot:n>ot&&(s=i*ot),s>e.width&&(i*=e.width/s,s=e.width),i>e.height&&(s*=e.height/i,i=e.height),{width:Math.round(s),height:Math.round(i)}}function lt(e){return{enabled:!(null==e||!e.length)}}var At;let ct=At=class extends x{constructor(e){super(e),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new At({exactMatch:this.exactMatch,type:this.type,name:this.name})}};e([t({type:Boolean,json:{write:!0}})],ct.prototype,"exactMatch",void 0),e([t({type:String,json:{write:!0}})],ct.prototype,"name",void 0),e([X(W)],ct.prototype,"type",void 0),ct=At=e([s("esri.webdoc.applicationProperties.SearchLayerField")],ct);const ut=ct;var ht;let dt=ht=class extends x{constructor(e){super(e),this.field=null,this.id=null,this.subLayer=null}clone(){return new ht(d({field:this.field,id:this.id,subLayer:this.subLayer}))}};e([t({type:ut,json:{write:{isRequired:!0}}})],dt.prototype,"field",void 0),e([t({type:String,json:{write:{isRequired:!0}}})],dt.prototype,"id",void 0),e([t({type:T,json:{write:!0}})],dt.prototype,"subLayer",void 0),dt=ht=e([s("esri.webdoc.applicationProperties.SearchLayer")],dt);const pt=dt;var gt;let ft=gt=class extends x{constructor(e){super(e),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new gt({exactMatch:this.exactMatch,type:this.type,name:this.name})}};e([t({type:Boolean,json:{write:!0}})],ft.prototype,"exactMatch",void 0),e([t({type:String,json:{write:!0}})],ft.prototype,"name",void 0),e([X(W)],ft.prototype,"type",void 0),ft=gt=e([s("esri.webdoc.applicationProperties.SearchTableField")],ft);const wt=ft;var mt;let yt=mt=class extends x{constructor(e){super(e),this.field=null,this.id=null}clone(){return new mt(d({field:this.field,id:this.id}))}};e([t({type:wt,json:{write:{isRequired:!0}}})],yt.prototype,"field",void 0),e([t({type:String,json:{write:{isRequired:!0}}})],yt.prototype,"id",void 0),yt=mt=e([s("esri.webdoc.applicationProperties.SearchTable")],yt);const vt=yt;var bt;const It=S.ofType(pt),Bt=S.ofType(vt);let xt=bt=class extends x{constructor(e){super(e),this.addressSearchEnabled=!0,this.enabled=!0,this.hintText=null,this.layers=new It,this.tables=new Bt}readAddressSearchEnabled(e){return!e}writeAddressSearchEnabled(e,t,s){t[s]=!e}clone(){return new bt(d({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers,tables:this.tables}))}};e([t({type:Boolean,nonNullable:!0,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder",isRequired:!0},origins:{"web-scene":{read:!1,write:!1}}}})],xt.prototype,"addressSearchEnabled",void 0),e([j("addressSearchEnabled")],xt.prototype,"readAddressSearchEnabled",null),e([E("addressSearchEnabled")],xt.prototype,"writeAddressSearchEnabled",null),e([t({type:Boolean,nonNullable:!0,json:{write:!0,origins:{"web-map":{write:{isRequired:!0}},"web-scene":{default:!0,write:!0}}}})],xt.prototype,"enabled",void 0),e([t({type:String,json:{write:!0}})],xt.prototype,"hintText",void 0),e([t({type:It,json:{write:{overridePolicy:lt},origins:{"web-scene":{write:{isRequired:!0}}}}})],xt.prototype,"layers",void 0),e([t({type:Bt,json:{read:!0,write:{overridePolicy:lt}}})],xt.prototype,"tables",void 0),xt=bt=e([s("esri.webdoc.applicationProperties.Search")],xt);const Tt=xt;var St;let jt=St=class extends x{constructor(e){super(e),this.search=null}clone(){return new St(d({search:this.search}))}};e([t({type:Tt,json:{write:!0}})],jt.prototype,"search",void 0),jt=St=e([s("esri.webdoc.applicationProperties.Viewing")],jt);const Et=jt;export{ye as A,Me as B,he as C,Ve as D,ke as E,Ke as F,Re as G,ve as H,ce as I,qe as J,ze as L,ae as M,Ye as S,we as T,be as V,Et as a,at as b,$ as c,oe as d,J as e,Ze as f,ue as g,Pe as h,We as i,ge as j,Le as k,nt as l,re as m,de as n,Ae as o,Ne as p,De as q,pe as r,fe as s,_ as t,Ge as u,Oe as v,Ue as w,Fe as x,He as y,me as z}