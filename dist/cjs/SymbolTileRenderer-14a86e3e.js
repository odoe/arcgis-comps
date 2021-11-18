'use strict';

const request = require('./messageBundle-312ceb47.js');
const aaBoundingRect = require('./aaBoundingRect-7e7e678f.js');
const CircularArray = require('./CircularArray-4d4e5b26.js');
const mat2df32 = require('./mat2df32-f2b5b52d.js');
const vec2 = require('./vec2-65c4309d.js');
const vec2f32 = require('./vec2f32-29a5eecf.js');
const Utils = require('./Utils-b188baf8.js');
const FeatureContainer = require('./FeatureContainer-ac143752.js');
const VertexArrayObject = require('./VertexArrayObject-543b2920.js');
require('./Texture-272da42e.js');
const schemaUtils = require('./schemaUtils-f3e2baa9.js');
const BaseTileRenderer = require('./BaseTileRenderer-6d226b6f.js');
const visualVariablesUtils = require('./visualVariablesUtils-3b9ebc9d.js');
const WGLContainer = require('./WGLContainer-c7ef30ce.js');
require('./index-57f2cfbb.js');
require('./unitUtils-61d611e2.js');
require('./JSONSupport-53c01d03.js');
require('./mat3-1bc0ab17.js');
require('./MapView-dbdeb77b.js');
require('./CollectionFlattener-3dadfe6b.js');
require('./HandleOwner-f254dc86.js');
require('./reactiveUtils-9e33ad73.js');
require('./workers-1668d5a8.js');
require('./executeQueryJSON-d0e52ec5.js');
require('./utils-f7ec83ae.js');
require('./query-89593027.js');
require('./normalizeUtils-b6002011.js');
require('./pbfQueryUtils-7b4746bb.js');
require('./pbf-758dd66b.js');
require('./OptimizedFeature-cf019b37.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./queryZScale-f443a9ba.js');
require('./zscale-fda0b32f.js');
require('./Query-35be2e91.js');
require('./TimeExtent-cdfe048b.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./FeatureSet-2e9b97a5.js');
require('./TopFeaturesQuery-2241be7c.js');
require('./symbolUtils-65bd4d7e.js');
require('./utils-08a64a75.js');
require('./asyncUtils-9f974032.js');
require('./ItemCache-c32783d3.js');
require('./MemCache-1ae72e1e.js');
require('./utils-fb318f28.js');
require('./widget-41a1462e.js');
require('./QueryTask-f73be2a3.js');
require('./featureConversionUtils-e6cca372.js');
require('./Task-0c2f1790.js');
require('./FeatureLayer-47713b0f.js');
require('./UniqueValueRenderer-cac6e88d.js');
require('./VisualVariablesMixin-fd7d8973.js');
require('./colorRamps-c066f1f7.js');
require('./ColorStop-c5f3f911.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-4df768a8.js');
require('./lengthUtils-3475e67e.js');
require('./diffUtils-467572e8.js');
require('./jsonUtils-1999c7ae.js');
require('./styleUtils-10128dd7.js');
require('./DictionaryRenderer-7157833a.js');
require('./LRUCache-b38a7907.js');
require('./jsonUtils-fa6e9edd.js');
require('./Layer-849337e0.js');
require('./HeightModelInfo-3363f0e0.js');
require('./APIKeyMixin-f99c03a8.js');
require('./ArcGISService-a170c777.js');
require('./arcgisLayerUrl-b24ae301.js');
require('./BlendLayer-7e864068.js');
require('./jsonUtils-4461cf25.js');
require('./mat4-1439266d.js');
require('./CustomParametersMixin-8fc5bf2f.js');
require('./labelingInfo-b4dde768.js');
require('./commonProperties-75b954b3.js');
require('./LabelClass-21df7ce2.js');
require('./labelUtils-7677c2d3.js');
require('./defaultsJSON-01ae5a1a.js');
require('./OperationalLayer-f89b9d70.js');
require('./OrderedLayer-1ea23e5d.js');
require('./PortalLayer-19d79370.js');
require('./PortalItem-42e06deb.js');
require('./RefreshableLayer-22c5fbbd.js');
require('./ScaleRangeLayer-52589af6.js');
require('./TemporalLayer-0201042a.js');
require('./TimeInfo-e2561319.js');
require('./FeatureType-5a860566.js');
require('./fieldProperties-f6acb896.js');
require('./FieldsIndex-8c8f3ac6.js');
require('./LayerFloorInfo-154885ea.js');
require('./styleUtils-2856ad11.js');
require('./popupUtils-180c3a12.js');
require('./TileStore-3be4ace6.js');
require('./TileKey-b425207e.js');
require('./quickselect-d3f68f5a.js');
require('./GoTo-9e48be05.js');
require('./mathUtils-ff0a3d04.js');
require('./TileInfo-363ea532.js');
require('./Basemap-0c094028.js');
require('./loadAll-57962b35.js');
require('./writeUtils-efed1c82.js');
require('./compilerUtils-54d3d3a9.js');
require('./TablesMixin-bdd488ef.js');
require('./GraphicsCollection-761d7a93.js');
require('./Scheduler-940b6f3b.js');
require('./unitBezier-5ab0945f.js');
require('./vec2f64-c36614be.js');
require('./projection-e04cb9d0.js');
require('./TileStrategy-d5289194.js');
require('./screenshotUtils-33e2013d.js');
require('./capabilities-ef851f65.js');
require('./definitions-b4888cc6.js');
require('./TileContainer-146f8112.js');
require('./Container-cb837708.js');
require('./EffectList-66a02fd6.js');
require('./MaterialKey-0f043067.js');
require('./visualVariablesUtils-77c3c121.js');
require('./CIMSymbolHelper-e1208fc4.js');
require('./BidiEngine-e033e7c0.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./cimSymbolUtils-3f93bd5c.js');
require('./cimAnalyzer-a91407a6.js');
require('./quantizationUtils-7dfad3c7.js');
require('./devEnvironmentUtils-98ac846b.js');
require('./MD5-e5fc0526.js');
require('./ShaderCompiler-c137d774.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./pixelUtils-57d906f9.js');
require('./earcut-d5562923.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$1=6,r=4294967296;class o$1{constructor(t){this._head=t,this._cursor=t;}static from(t){const s=i.from(new Float32Array(t));return new o$1(s)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,s){return this._cursor.setBoundsComputedAnchorX(t,s)}setBoundsComputedAnchorY(t,s){return this._cursor.setBoundsComputedAnchorY(t,s)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(s){if(request.r(s._head))return this._cursor.link(s._head)}getCursor(){return this.copy()}copy(){var t;const s=new o$1(null==(t=this._head)?void 0:t.copy());if(!s._head)return s;let e=s._head,r=s._head._link;for(;r;)e._link=r.copy(),e=r,r=e._link;return s}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return !1;return !0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset;}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset;}next(){if(!this._cursor)return !1;if(!this._cursor.next()){if(!this._cursor._link)return !1;this._cursor=this._cursor._link,this._cursor._offset=0;}return !0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return !1;this._cursor=this._cursor._link;}return !!this._cursor}delete(s){let e=this._head,r=null;for(;e;){if(e.delete(s))return e.isEmpty()&&request.r(r)&&(r._link=e._link),!0;r=e,e=e._link;}return !1}}class i{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t;}static from(t){return new i(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t;}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t;}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+t*e$1+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+t*e$1+1]}setBoundsComputedAnchorX(t,s){this._buffer[this._offset+10+t*e$1+0]=s;}setBoundsComputedAnchorY(t,s){this._buffer[this._offset+10+t*e$1+1]=s;}boundsX(t){return this._buffer[this._offset+10+t*e$1+2]}boundsY(t){return this._buffer[this._offset+10+t*e$1+3]}boundsWidth(t){return this._buffer[this._offset+10+t*e$1+4]}boundsHeight(t){return this._buffer[this._offset+10+t*e$1+5]}link(t){let s=this;for(;s._link;)s=s._link;s._link=t;}getCursor(){return this.copy()}copy(){const t=new i(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+this.boundsCount*e$1+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+this.boundsCount*e$1,this.id===r););return this.id!==r&&this._offset<this._buffer.length}delete(t){const s=this._offset,e=this.lookup(t);if(e)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=s,e}lookup(t){const e=this._offset;if(request.t(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let s=0;for(;t.next();)t.id!==s&&(this._offsets.instance.set(t.id,t._offset),s=t.id);}return !!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),this.id!==r||(this._offset=e,!1))}_computeCount(){const t=this._offset;let s=0;for(this._offset=-1;this.next();)s++;return this._offset=t,s}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(t){if(!Array.isArray(t))return void(this.data=t);this.data=t[0];let a=this;for(let n=1;n<t.length;n++)a.next=new e([t[n]]),a=a.next;}*values(){let t=this;for(;t;)yield t.data,t=t.next;}forEach(t){let e=this;for(;e;)t(e.data),e=e.next;}find(t){var e;return t(this.data)?this:null==(e=this.next)?void 0:e.find(t)}max(t,e=this){const a=t(this.data)>t(e.data)?this:e;return this.next?this.next.max(t,a):a}remove(t,e=null){return this===t?e?(e.next=this.next,e):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class a$2{constructor(a){this._head=null,request.t(a)||(this._head=new e(a));}get head(){return this._head}maxAvailableSpace(){if(request.t(this._head))return 0;const e=this._head.max((t=>t.end-t.start));return e.data.end-e.data.start}firstFit(e){if(request.t(this._head))return null;let a=null,n=this._head;for(;n;){const t=n.data.end-n.data.start;if(t===e)return a?a.next=n.next:this._head=n.next,n.data.start;if(t>e){const t=n.data.start;return n.data.start+=e,t}a=n,n=n.next;}return null}free(a,n){const r=a+n;if(request.t(this._head)){const t=new e({start:a,end:r});return void(this._head=t)}if(r<=this._head.data.start){if(r===this._head.data.start)return void(this._head.data.start-=n);const t=new e({start:a,end:r});return t.next=this._head,void(this._head=t)}let s=this._head,i=s.next;for(;i;){if(i.data.start>=r){if(s.data.end===a)return void(s.data.end+=n);if(i.data.start===r)return void(i.data.start-=n);const t=new e({start:a,end:r});return t.next=s.next,void(s.next=t)}s=i,i=i.next;}if(a===s.data.end)return void(s.data.end+=n);const d=new e({start:a,end:r});s.next=d;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n$1{constructor(t,e,i,n,a){this.target=t,this.geometryType=e,this.materialKey=i,this.indexFrom=n,this.indexCount=a;}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t;}draw(t,e,i){this.target.draw(t,e,i,this.indexFrom,this.indexCount);}}class a$1{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e;}static from(e,i,n,d){const s=new a$1(e,i);if(request.r(d))for(const t of d)n.seekIndex(t),s.addRecord(n);else for(;n.next();)s.addRecord(n);return s}addRecord(t){const a=this._target,d=this.geometryType,s=t.materialKey,r=t.indexFrom,o=t.indexCount;if(request.t(this._head)){const t=new n$1(a,d,s,r,o);return void(this._head=new e(t))}let h=null,x=this._head;for(;x;){if(r<x.data.indexFrom)return this._insert(s,r,o,h,x);h=x,x=x.next;}this._insert(s,r,o,h,null);}forEach(e){request.r(this._head)&&this._head.forEach(e);}*infos(){if(request.r(this._head))for(const t of this._head.values())yield t;}_insert(a,d,s,r,o){if(request.t(r)&&request.t(o)){const t=new n$1(this._target,this.geometryType,a,d,s);this._head=new e(t);}return request.t(r)&&request.r(o)?this._insertAtHead(a,d,s,o):request.r(r)&&request.t(o)?this._insertAtEnd(a,d,s,r):request.r(r)&&request.r(o)?this._insertAtMiddle(a,d,s,r,o):void 0}_insertAtHead(t,e$1,a,d){const s=e$1+a;if(t===d.data.materialKey&&s===d.data.indexFrom)d.data.indexFrom=e$1,d.data.indexCount+=a;else {const s=new n$1(this._target,this.geometryType,t,e$1,a);this._head=new e(s),this._head.next=d;}}_insertAtEnd(t,e$1,a,d){if(d.data.materialKey===t&&d.data.indexEnd===e$1)d.data.indexCount+=a;else {const s=new n$1(this._target,this.geometryType,t,e$1,a),r=new e(s);d.next=r;}}_insertAtMiddle(t,e$1,a,d,s){const r=e$1+a;if(d.data.materialKey===t&&d.data.indexEnd===e$1)d.data.indexCount+=a,d.data.materialKey===s.data.materialKey&&d.data.indexEnd===s.data.indexFrom&&(d.data.indexCount+=s.data.indexCount,d.next=s.next);else if(t===s.data.materialKey&&r===s.data.indexFrom)s.data.indexFrom=e$1,s.data.indexCount+=a;else {const r=new n$1(this._target,this.geometryType,t,e$1,a),o=new e(r);d.next=o,o.next=s;}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=32767,d=n<<16|n;class u{constructor(t,i,s){const e=new Uint32Array(i*s);this.strideInt=s,this.bufferType=t,this.dirty={start:1/0,end:0},this.gpu=null,this._cpu=e,this.clear();}get elementSize(){return this._cpu.length/this.strideInt}destroy(){request.E$4(this.gpu,(t=>t.dispose()));}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new a$2({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0;}ensure(t){if(this.maxAvailableSpace()>=t)return;const s=t*this.strideInt;if(s>this._cpu.length-this.fillPointer){request.r(this.gpu)&&(this.gpu=null);const t=Math.round(1.5*(this._cpu.length+s)),e=new Uint32Array(t),r=this._cpu.length/this.strideInt,h=t/this.strideInt;this.freeList.free(r,h-r),e.set(this._cpu),this._cpu=e;}}set(t,i){this._cpu[t]!==i&&(this._cpu[t]=i,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end));}getBuffer(){if(!this._cpu2||this._cpu2.length!==this._cpu.length){const t=this._cpu.slice();this._cpu2=t;}return this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,i,e,r){const h=e*this.strideInt,n=i*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,d=new Uint32Array(t,n,h),u=request.f$3(this.freeList.firstFit(e),"First fit region must be defined")*this.strideInt,a=h,c=u/this.strideInt-i;if(0!==r)for(let s=0;s<d.length;s++)d[s]+=r;return this._cpu.set(d,u),this.dirty.start=Math.min(this.dirty.start,u),this.dirty.end=Math.max(this.dirty.end,u+a),this.fillPointer=Math.max(this.fillPointer,u+a),c}free(t,i,s){const e=t*this.strideInt,r=(t+i)*this.strideInt;if(!0===s)for(let h=t;h!==t+i;h++)this._cpu[h*this.strideInt]=d;this.dirty.start=Math.min(this.dirty.start,e),this.dirty.end=Math.max(this.dirty.end,r),this.freeList.free(t,i);}upload(t){if(this.dirty.end){if(request.t(this.gpu))return this.gpu=this._createBuffer(t),this.dirty.start=1/0,void(this.dirty.end=0);this.gpu.setSubData(this._cpu,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0;}}_createBuffer(t){const i=35048;return "index"===this.bufferType?VertexArrayObject.h.createIndex(t,i,this._cpu):VertexArrayObject.h.createVertex(t,i,this._cpu)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{constructor(e,t){this._indicesInvalid=!1,this.geometryType=e;}destroy(){this._vao&&(this._vao.dispose(),this._vao=null);}insert(t,r,n){if(!t.records.byteLength)return;const o=t.stride;if(this._vertexBuffer&&this._indexBuffer){const i=4*t.indices.byteLength,n=t.vertices.byteLength/o;this._indexBuffer.ensure(i),this._vertexBuffer.ensure(n);const{vertices:f,indices:d}=t,h=FeatureContainer.i.from(t.records),u=this._vertexBuffer.insert(f,0,f.byteLength/o,0),c=this._indexBuffer.insert(d,0,d.byteLength/4,u);if(h.forEach((e=>{e.indexFrom+=c,e.vertexFrom+=u;})),request.f$3(this._records,"Expected records to be defined").link(h),r)this._indicesInvalid=!0;else if(this._displayList){const e=h.getCursor();for(;e.next();)this._displayList.addRecord(e);}}else {const e=4*t.indices.byteLength,n=t.vertices.byteLength/o,f=o/Uint32Array.BYTES_PER_ELEMENT;this._records=FeatureContainer.i.from(t.records),this._indexBuffer=new u("index",e,1),this._vertexBuffer=new u("vertex",n,f),this._indexBuffer.insert(t.indices,0,t.indices.byteLength/4,0),this._vertexBuffer.insert(t.vertices,0,t.vertices.byteLength/o,0),r&&(this._indicesInvalid=!0);}}remove(e){if(!request.t(this._records))for(const t of e){const e=this._records.getCursor();if(!e.lookup(t))continue;const r=e.indexFrom,i=e.vertexFrom;let s=e.indexCount,n=e.vertexCount;for(;e.next()&&e.id===t;)s+=e.indexCount,n+=e.vertexCount;this._indexBuffer.free(r,s),this._vertexBuffer.free(i,n,!0),this._records.delete(t);}}draw(e,r,i,s,o){if(!this._vertexBuffer||!this._indexBuffer||request.t(this._records))return;if((request.t(this._vertexBuffer.gpu)||request.t(this._indexBuffer.gpu))&&(this._vao&&(this._vao.dispose(),this._vao=null),this._vertexBuffer.gpu=null,this._indexBuffer.gpu=null),this._vertexBuffer.upload(e),this._indexBuffer.upload(e),!this._vao){const t=this._vertexBuffer.gpu,s=this._indexBuffer.gpu;if(!s||!t)return;this._vao=new VertexArrayObject.f(e,i,r,{geometry:t},s);}const f=this._vao,d=s*Uint32Array.BYTES_PER_ELEMENT;e.bindVAO(f),e.drawElements(4,o,5125,d);}forEachCommand(e){if(!request.t(this._records)){if(this._sortIndices(this._records),!this._displayList){const e=this._cursorIndexOrder;this._displayList=a$1.from(this,this.geometryType,this._records.getCursor(),e);}this._displayList.forEach(e);}}_sortIndices(e){if(!this._indicesInvalid)return;this._indicesInvalid=!1;let t=0;const r=e.getCursor(),i=this._indexBuffer.getBuffer(),s=[],n=[],o=[];for(;r.next();)n.push(r.index),o.push(r.sortKey),s.push(r.id);n.sort(((e,t)=>{const r=o[t],i=o[e];return i===r?s[t]-s[e]:r-i}));const f=e.getCursor();for(const d of n){if(!f.seekIndex(d))throw new Error("Expected to find index");const{indexFrom:e,indexCount:r}=f;f.indexFrom=t;for(let s=0;s<r;s++)this._indexBuffer.set(t++,i[e+s]);}this._cursorIndexOrder=n,this._displayList=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=50,l$1=4,S=8,y=100;let w=0;class g extends FeatureContainer.f{constructor(t,r,s,i){super(t,r,s),this.instanceId=w++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new CircularArray.s(y),this._bufferPatches=new CircularArray.s(y),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=mat2df32.n$1(),this._store=i;}destroy(){super.destroy(),this._renderState.current.geometry.forEach((e=>e.destroy()));}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return !!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}setTransform(e,t){super.setTransform(e,t);const r=this.transforms.labelMat2d,s=e.getScreenTransform(r,t),h=vec2f32.n();vec2.D(h,[this.x,this.y],s),mat2df32.n(r),mat2df32.i(r,r,h),mat2df32.o(r,e.viewMat2d,r);}patch(e,t){if(this.patchCount++,e.clear&&this._lastMessageWasClear)return;this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=f&&this._dropPatches();const r=e,s=r.addOrUpdate&&this.key.id!==r.addOrUpdate.tileKeyOrigin;t&&s?this._bufferPatches.enqueue(r):(r.sort=r.sort&&!t,this._patches.enqueue(r)),this.requestRender();}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<l$1;e++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender());}}lock(){this._renderState.locked=!0;}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap();}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=S,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender();}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,request.r(this._renderState.next)&&(this._renderState.current.geometry.forEach((e=>e.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null));}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap();}_updateBufferMesh(){const e=this._bufferPatches.peek();if(!request.r(e)||!e.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const e=this._bufferPatches.dequeue();request.r(e)&&this._patchBuffer(e);}}_updateMesh(){const e=this._patches.peek();if(request.r(e)&&e.clear&&null!==this._renderState.next)return;const r=this._patches.dequeue();if(request.r(r)){if(!0===r.clear){if(!this.isReady)return;return void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(r),r.end&&(this.ready(),this._swapRenderStates());}}_patch(e){Utils.re((t=>{this._remove(t,e.remove),this._insert(t,e,!1);}));}_patchBuffer(e){Utils.re((t=>{this._insert(t,e,!0);}));}_insert(e,t,i){try{var a;const n=request.c$2(this._renderState.next,this._renderState.current),h=null==(a=t.addOrUpdate)?void 0:a.data[e],c=n.geometry;if(request.t(h))return;c.has(e)||c.set(e,new o(e,this.stage)),c.get(e).insert(h,t.sort,i),e===Utils.E.LABEL&&this._insertLabelMetrics(t.type,h.metrics,t.clear);}catch(n){}}_insertLabelMetrics(e,t,i){const a=request.c$2(this._renderState.next,this._renderState.current);if(request.t(t))return;const n=o$1.from(t);if(request.t(a.metrics))a.metrics=n;else {if("update"===e){const e=n.getCursor();for(;e.next();)a.metrics.delete(e.id);}a.metrics.link(n);}}_remove(e,t){const s=request.c$2(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&s&&(s.remove(t),this._removeLabelMetrics(t));}_removeLabelMetrics(e){const{metrics:t}=request.c$2(this._renderState.next,this._renderState.current);if(!request.t(t)&&e.length)for(const r of e)for(;t.delete(r););}_dropPatches(){const e=new Array;let t=!1;for(;this._patches.size;){const r=this._patches.dequeue();if(request.t(r))break;if(r.clear){if(t)break;t=!0;}e.push(r);}this._patches.clear(),e.forEach((e=>this._patches.enqueue(e)));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=request.s$3("featurelayer-order-by-server-enabled");class l extends FeatureContainer.o{constructor(e,s,t,i){super(e),this._pointToCallbacks=new Map,this._layer=t,this._layerView=s,this._onUpdate=i;}renderChildren(e){if(this.attributeView.update(),this.hasAnimation){e.painter.effects.integrate.draw(e,e.attributeView);}super.renderChildren(e);}isUpdating(){return this.attributeView.isUpdating()}hitTest(e,t){const i=[e,t],r=request.B();return this._pointToCallbacks.set(i,r),this.requestRender(),r.promise}onTileData(e,s){const t=a&&"orderBy"in this._layer&&this._layer.orderBy,i=(null==t?void 0:t.length)&&!t[0].valueExpression&&t[0].field,r=t&&this._layerView.orderByFields===i;e.patch(s,r),this.contains(e)||this.addChild(e),this.requestRender();}onTileError(e){this.contains(e)||this.addChild(e);}doRender(e){const{minScale:s,maxScale:t}=this._layer,i=e.state.scale;i<=(s||1/0)&&i>=t&&super.doRender(e);}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate();}get hasAnimation(){return this.hasLabels}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some((e=>e.labelingInfo&&e.labelingInfo.length&&e.labelsVisible));const e=this._layer.featureReduction,s=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!s}prepareRenderPasses(e){const s=e.registerRenderPass({name:"label",brushes:[WGLContainer.G.label],target:()=>this.hasLabels?this.children:null,drawPhase:Utils.I.LABEL|Utils.I.LABEL_ALPHA}),i=e.registerRenderPass({name:"geometry",brushes:[WGLContainer.G.fill,WGLContainer.G.line,WGLContainer.G.marker,WGLContainer.G.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.excluded},{apply:e.effects.insideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.included},{apply:e.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),a=e.registerRenderPass({name:"highlight",brushes:[WGLContainer.G.fill,WGLContainer.G.line,WGLContainer.G.marker,WGLContainer.G.text],target:()=>this.children,drawPhase:Utils.I.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return [...super.prepareRenderPasses(e),i,a,s]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends BaseTileRenderer.o{install(e){const t=()=>this.notifyChange("updating"),i=new l(this.tileInfoView,this.layerView,this.layer,t);this.featuresView=i,e.addChild(i);}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy();}fetchResource(e,t){const{url:s}=e,r=this.featuresView.stage;try{return r.resourceManager.fetchResource(s,{signal:t.signal})}catch(a){return request.d$2(a)?Promise.resolve({width:0,height:0}):Promise.reject(a)}}isUpdating(){const e=super.isUpdating(),i=!this.featuresView||this.featuresView.isUpdating(),s=e||i;return request.s$3("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${s}\n  -> updatingTiles ${e}\n  -> updatingFeaturesView ${i}`),s}hitTest(e,t){return this.featuresView.hitTest(e,t)}supportsRenderer(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}onConfigUpdate(e){let t=null;if("visualVariables"in e){const i=(schemaUtils.s(e).visualVariables||[]).map((e=>{const t=e.clone();return "normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=visualVariablesUtils.m(i);}this.featuresView.setRendererInfo(e,t,this.layerView.featureEffect);}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate();}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t);}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload();}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()));}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()));}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate();}createTile(e){const t=this.tileInfoView.getTileBounds(aaBoundingRect.u(),e);return new g(e,t[0],t[3],this.featuresView.attributeView)}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate();}};p=request.e([request.i("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],p);const c=p;

exports.default = c;
