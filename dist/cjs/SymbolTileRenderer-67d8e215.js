'use strict';

const request = require('./messageBundle-8be88d04.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const CircularArray = require('./CircularArray-cacb6ae0.js');
const mat2d = require('./mat2d-2d5fae3e.js');
const mat2df32 = require('./mat2df32-85bf8b84.js');
const vec2 = require('./vec2-d000a8cb.js');
const vec2f32 = require('./vec2f32-29a5eecf.js');
const Utils = require('./Utils-a77299a6.js');
const FeatureContainer = require('./FeatureContainer-7083ff74.js');
const FramebufferObject = require('./FramebufferObject-435e1736.js');
require('./Texture-95d9d662.js');
const schemaUtils = require('./schemaUtils-f703d6cd.js');
const BaseTileRenderer = require('./BaseTileRenderer-c9092ac3.js');
const visualVariablesUtils = require('./visualVariablesUtils-432fa686.js');
const brushes = require('./brushes-09287871.js');
require('./index-fde8502c.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./mat3-1d3e0d51.js');
require('./DefaultUI-75d05512.js');
require('./Basemap-81280554.js');
require('./Portal-8d16604d.js');
require('./loadAll-e25ec3d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./writeUtils-7bdc195a.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./compilerUtils-56e51ed2.js');
require('./enumeration-f235fe07.js');
require('./opacityUtils-f2e4b347.js');
require('./geometry-ef17530a.js');
require('./CollectionFlattener-bc4cde45.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./basemapUtils-dc86a6ad.js');
require('./TablesMixin-d3e0d4c7.js');
require('./Layer-31cde361.js');
require('./Identifiable-a4f50f85.js');
require('./TimeExtent-8b558884.js');
require('./GraphicsCollection-d70ae8cb.js');
require('./Graphic-0aff6059.js');
require('./PopupTemplate-a0b855f8.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./persistableUrlUtils-c611d652.js');
require('./jsonUtils-b6068079.js');
require('./HeightModelInfo-06fd3d80.js');
require('./unitUtils-083cb8d0.js');
require('./Scheduler-72cbcf2a.js');
require('./debugFlags-5e6b0151.js');
require('./screenUtils-e9e44bb6.js');
require('./executeQueryJSON-3f84e897.js');
require('./utils-8a0a0870.js');
require('./query-0e394548.js');
require('./normalizeUtils-a793b472.js');
require('./pbfQueryUtils-49e071a8.js');
require('./pbf-dc87045b.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./queryZScale-d48be112.js');
require('./zscale-25ef55f0.js');
require('./Query-354911d3.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./FeatureSet-8efc5965.js');
require('./TopFeaturesQuery-92caa731.js');
require('./Heading-d7c5e432.js');
require('./widget-b8f4aeaf.js');
require('./QueryTask-3b24eec5.js');
require('./featureConversionUtils-df21e951.js');
require('./Task-95a3fa39.js');
require('./FeatureLayer-68e51b64.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./ColorStop-ce63948c.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./lengthUtils-179eaf12.js');
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./jsonUtils-fc4080da.js');
require('./MultiOriginJSONSupport-77ac451b.js');
require('./workers-bde9fe32.js');
require('./APIKeyMixin-77c99036.js');
require('./ArcGISService-56d7a630.js');
require('./arcgisLayerUrl-5174d661.js');
require('./BlendLayer-6a2ab430.js');
require('./mat4-f68486bc.js');
require('./CustomParametersMixin-996a5732.js');
require('./labelingInfo-594911d5.js');
require('./OperationalLayer-853649aa.js');
require('./ElevationInfo-d3e3d64f.js');
require('./LabelClass-4b91d60e.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');
require('./OrderedLayer-8690aaf5.js');
require('./PortalLayer-7556e594.js');
require('./RefreshableLayer-487bd7b3.js');
require('./ScaleRangeLayer-5320a5ba.js');
require('./TemporalLayer-06f08bdd.js');
require('./TimeInfo-050c5617.js');
require('./FeatureType-d8b81062.js');
require('./fieldProperties-c9dd6469.js');
require('./FieldsIndex-664af19b.js');
require('./LayerFloorInfo-c56fa764.js');
require('./styleUtils-536b017f.js');
require('./popupUtils-7a76fb7d.js');
require('./utils-71e85012.js');
require('./ItemCache-149fdb6e.js');
require('./utils-fb318f28.js');
require('./Queue-1713f2e9.js');
require('./layerViewUtils-96bae70b.js');
require('./GoTo-be01affb.js');
require('./accessibleHandler-652e5d90.js');
require('./vmEvent-9b257013.js');
require('./heightModelInfoUtils-9cedab45.js');
require('./Viewpoint-bbe11330.js');
require('./mathUtils-87b1f941.js');
require('./mat2df64-e9760778.js');
require('./vec2f64-60b3c97e.js');
require('./capabilities-76889198.js');
require('./definitions-b4888cc6.js');
require('./TiledDisplayObject-0701494f.js');
require('./DisplayObject-573912c8.js');
require('./TileKey-d800cfb2.js');
require('./TileContainer-1c8142b6.js');
require('./WGLContainer-1a8439fd.js');
require('./Container-afc09537.js');
require('./EffectList-9ac19b5e.js');
require('./earcut-d5562923.js');
require('./number-d65aefed.js');
require('./MaterialKey-b68d4c0b.js');
require('./visualVariablesUtils-2a522774.js');
require('./CIMSymbolHelper-79a17067.js');
require('./BidiEngine-e033e7c0.js');
require('./floatRGBA-aa45f7cb.js');
require('./GeometryUtils-062a82b8.js');
require('./cimSymbolUtils-7a21888c.js');
require('./cimAnalyzer-eb6fa5b4.js');
require('./callExpressionWithFeature-7cea2968.js');
require('./quantizationUtils-d1d9c03e.js');
require('./devEnvironmentUtils-aafb5541.js');
require('./MD5-e5fc0526.js');
require('./vec4f32-284fd490.js');
require('./ShaderCompiler-3202ad3f.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./pixelUtils-d620590d.js');
require('./rasterUtils-a4c646c4.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$1=6,r=4294967296;class o$1{constructor(t){this._head=t,this._cursor=t;}static from(t){const s=i.from(new Float32Array(t));return new o$1(s)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,s){return this._cursor.setBoundsComputedAnchorX(t,s)}setBoundsComputedAnchorY(t,s){return this._cursor.setBoundsComputedAnchorY(t,s)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(s){if(request.r(s._head))return this._cursor.link(s._head)}getCursor(){return this.copy()}copy(){var t;const s=new o$1(null==(t=this._head)?void 0:t.copy());if(!s._head)return s;let e=s._head,r=s._head._link;for(;r;)e._link=r.copy(),e=r,r=e._link;return s}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return !1;return !0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset;}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset;}next(){if(!this._cursor)return !1;if(!this._cursor.next()){if(!this._cursor._link)return !1;this._cursor=this._cursor._link,this._cursor._offset=0;}return !0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return !1;this._cursor=this._cursor._link;}return !!this._cursor}delete(s){let e=this._head,r=null;for(;e;){if(e.delete(s))return e.isEmpty()&&request.r(r)&&(r._link=e._link),!0;r=e,e=e._link;}return !1}}class i{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t;}static from(t){return new i(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t;}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t;}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+t*e$1+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+t*e$1+1]}setBoundsComputedAnchorX(t,s){this._buffer[this._offset+10+t*e$1+0]=s;}setBoundsComputedAnchorY(t,s){this._buffer[this._offset+10+t*e$1+1]=s;}boundsX(t){return this._buffer[this._offset+10+t*e$1+2]}boundsY(t){return this._buffer[this._offset+10+t*e$1+3]}boundsWidth(t){return this._buffer[this._offset+10+t*e$1+4]}boundsHeight(t){return this._buffer[this._offset+10+t*e$1+5]}link(t){let s=this;for(;s._link;)s=s._link;s._link=t;}getCursor(){return this.copy()}copy(){const t=new i(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+this.boundsCount*e$1+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+this.boundsCount*e$1,this.id===r););return this.id!==r&&this._offset<this._buffer.length}delete(t){const s=this._offset,e=this.lookup(t);if(e)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=s,e}lookup(t){const e=this._offset;if(request.t$1(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let s=0;for(;t.next();)t.id!==s&&(this._offsets.instance.set(t.id,t._offset),s=t.id);}return !!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),this.id!==r||(this._offset=e,!1))}_computeCount(){const t=this._offset;let s=0;for(this._offset=-1;this.next();)s++;return this._offset=t,s}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(t){if(!Array.isArray(t))return void(this.data=t);this.data=t[0];let a=this;for(let n=1;n<t.length;n++)a.next=new e([t[n]]),a=a.next;}*values(){let t=this;for(;t;)yield t.data,t=t.next;}forEach(t){let e=this;for(;e;)t(e.data),e=e.next;}find(t){var e;return t(this.data)?this:null==(e=this.next)?void 0:e.find(t)}max(t,e=this){const a=t(this.data)>t(e.data)?this:e;return this.next?this.next.max(t,a):a}remove(t,e=null){return this===t?e?(e.next=this.next,e):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class a$2{constructor(a){this._head=null,request.t$1(a)||(this._head=new e(a));}get head(){return this._head}maxAvailableSpace(){if(request.t$1(this._head))return 0;const e=this._head.max((t=>t.end-t.start));return e.data.end-e.data.start}firstFit(e){if(request.t$1(this._head))return null;let a=null,n=this._head;for(;n;){const t=n.data.end-n.data.start;if(t===e)return a?a.next=n.next:this._head=n.next,n.data.start;if(t>e){const t=n.data.start;return n.data.start+=e,t}a=n,n=n.next;}return null}free(a,n){const r=a+n;if(request.t$1(this._head)){const t=new e({start:a,end:r});return void(this._head=t)}if(r<=this._head.data.start){if(r===this._head.data.start)return void(this._head.data.start-=n);const t=new e({start:a,end:r});return t.next=this._head,void(this._head=t)}let s=this._head,i=s.next;for(;i;){if(i.data.start>=r){if(s.data.end===a)return void(s.data.end+=n);if(i.data.start===r)return void(i.data.start-=n);const t=new e({start:a,end:r});return t.next=s.next,void(s.next=t)}s=i,i=i.next;}if(a===s.data.end)return void(s.data.end+=n);const d=new e({start:a,end:r});s.next=d;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n$1{constructor(t,e,i,n,a){this.target=t,this.geometryType=e,this.materialKey=i,this.indexFrom=n,this.indexCount=a;}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t;}draw(t,e,i){this.target.draw(t,e,i,this.indexFrom,this.indexCount);}}class a$1{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e;}static from(e,i,n,d){const s=new a$1(e,i);if(request.r(d))for(const t of d)n.seekIndex(t),s.addRecord(n);else for(;n.next();)s.addRecord(n);return s}addRecord(t){const a=this._target,d=this.geometryType,s=t.materialKey,r=t.indexFrom,o=t.indexCount;if(request.t$1(this._head)){const t=new n$1(a,d,s,r,o);return void(this._head=new e(t))}let h=null,x=this._head;for(;x;){if(r<x.data.indexFrom)return this._insert(s,r,o,h,x);h=x,x=x.next;}this._insert(s,r,o,h,null);}forEach(e){request.r(this._head)&&this._head.forEach(e);}*infos(){if(request.r(this._head))for(const t of this._head.values())yield t;}_insert(a,d,s,r,o){if(request.t$1(r)&&request.t$1(o)){const t=new n$1(this._target,this.geometryType,a,d,s);this._head=new e(t);}return request.t$1(r)&&request.r(o)?this._insertAtHead(a,d,s,o):request.r(r)&&request.t$1(o)?this._insertAtEnd(a,d,s,r):request.r(r)&&request.r(o)?this._insertAtMiddle(a,d,s,r,o):void 0}_insertAtHead(t,e$1,a,d){const s=e$1+a;if(t===d.data.materialKey&&s===d.data.indexFrom)d.data.indexFrom=e$1,d.data.indexCount+=a;else {const s=new n$1(this._target,this.geometryType,t,e$1,a);this._head=new e(s),this._head.next=d;}}_insertAtEnd(t,e$1,a,d){if(d.data.materialKey===t&&d.data.indexEnd===e$1)d.data.indexCount+=a;else {const s=new n$1(this._target,this.geometryType,t,e$1,a),r=new e(s);d.next=r;}}_insertAtMiddle(t,e$1,a,d,s){const r=e$1+a;if(d.data.materialKey===t&&d.data.indexEnd===e$1)d.data.indexCount+=a,d.data.materialKey===s.data.materialKey&&d.data.indexEnd===s.data.indexFrom&&(d.data.indexCount+=s.data.indexCount,d.next=s.next);else if(t===s.data.materialKey&&r===s.data.indexFrom)s.data.indexFrom=e$1,s.data.indexCount+=a;else {const r=new n$1(this._target,this.geometryType,t,e$1,a),o=new e(r);d.next=o,o.next=s;}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=32767,d=n<<16|n;class u{constructor(t,i,s){const e=new Uint32Array(i*s);this.strideInt=s,this.bufferType=t,this.dirty={start:1/0,end:0},this.gpu=null,this._cpu=e,this.clear();}get elementSize(){return this._cpu.length/this.strideInt}destroy(){request.E$5(this.gpu,(t=>t.dispose()));}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new a$2({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0;}ensure(t){if(this.maxAvailableSpace()>=t)return;const s=t*this.strideInt;if(s>this._cpu.length-this.fillPointer){request.r(this.gpu)&&(this.gpu=null);const t=Math.round(1.5*(this._cpu.length+s)),e=new Uint32Array(t),r=this._cpu.length/this.strideInt,h=t/this.strideInt;this.freeList.free(r,h-r),e.set(this._cpu),this._cpu=e;}}set(t,i){this._cpu[t]!==i&&(this._cpu[t]=i,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end));}getBuffer(){if(!this._cpu2||this._cpu2.length!==this._cpu.length){const t=this._cpu.slice();this._cpu2=t;}return this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,i,e,r){const h=e*this.strideInt,n=i*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,d=new Uint32Array(t,n,h),u=request.f$5(this.freeList.firstFit(e),"First fit region must be defined")*this.strideInt,a=h,c=u/this.strideInt-i;if(0!==r)for(let s=0;s<d.length;s++)d[s]+=r;return this._cpu.set(d,u),this.dirty.start=Math.min(this.dirty.start,u),this.dirty.end=Math.max(this.dirty.end,u+a),this.fillPointer=Math.max(this.fillPointer,u+a),c}free(t,i,s){const e=t*this.strideInt,r=(t+i)*this.strideInt;if(!0===s)for(let h=t;h!==t+i;h++)this._cpu[h*this.strideInt]=d;this.dirty.start=Math.min(this.dirty.start,e),this.dirty.end=Math.max(this.dirty.end,r),this.freeList.free(t,i);}upload(t){if(this.dirty.end){if(request.t$1(this.gpu))return this.gpu=this._createBuffer(t),this.dirty.start=1/0,void(this.dirty.end=0);this.gpu.setSubData(this._cpu,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0;}}_createBuffer(t){const i=35048;return "index"===this.bufferType?FramebufferObject.h.createIndex(t,i,this._cpu):FramebufferObject.h.createVertex(t,i,this._cpu)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{constructor(e,t){this._indicesInvalid=!1,this.geometryType=e;}destroy(){this._vao&&(this._vao.dispose(),this._vao=null);}insert(t,r,n){if(!t.records.byteLength)return;const o=t.stride;if(this._vertexBuffer&&this._indexBuffer){const i=4*t.indices.byteLength,n=t.vertices.byteLength/o;this._indexBuffer.ensure(i),this._vertexBuffer.ensure(n);const{vertices:f,indices:d}=t,h=FeatureContainer.i.from(t.records),u=this._vertexBuffer.insert(f,0,f.byteLength/o,0),c=this._indexBuffer.insert(d,0,d.byteLength/4,u);if(h.forEach((e=>{e.indexFrom+=c,e.vertexFrom+=u;})),request.f$5(this._records,"Expected records to be defined").link(h),r)this._indicesInvalid=!0;else if(this._displayList){const e=h.getCursor();for(;e.next();)this._displayList.addRecord(e);}}else {const e=4*t.indices.byteLength,n=t.vertices.byteLength/o,f=o/Uint32Array.BYTES_PER_ELEMENT;this._records=FeatureContainer.i.from(t.records),this._indexBuffer=new u("index",e,1),this._vertexBuffer=new u("vertex",n,f),this._indexBuffer.insert(t.indices,0,t.indices.byteLength/4,0),this._vertexBuffer.insert(t.vertices,0,t.vertices.byteLength/o,0),r&&(this._indicesInvalid=!0);}}remove(e){if(!request.t$1(this._records))for(const t of e){const e=this._records.getCursor();if(!e.lookup(t))continue;const r=e.indexFrom,i=e.vertexFrom;let s=e.indexCount,n=e.vertexCount;for(;e.next()&&e.id===t;)s+=e.indexCount,n+=e.vertexCount;this._indexBuffer.free(r,s),this._vertexBuffer.free(i,n,!0),this._records.delete(t);}}draw(e,r,i,s,o){if(!this._vertexBuffer||!this._indexBuffer||request.t$1(this._records))return;if((request.t$1(this._vertexBuffer.gpu)||request.t$1(this._indexBuffer.gpu))&&(this._vao&&(this._vao.dispose(),this._vao=null),this._vertexBuffer.gpu=null,this._indexBuffer.gpu=null),this._vertexBuffer.upload(e),this._indexBuffer.upload(e),!this._vao){const t=this._vertexBuffer.gpu,s=this._indexBuffer.gpu;if(!s||!t)return;this._vao=new FramebufferObject.f(e,i,r,{geometry:t},s);}const f=this._vao,d=s*Uint32Array.BYTES_PER_ELEMENT;e.bindVAO(f),e.drawElements(4,o,5125,d);}forEachCommand(e){if(!request.t$1(this._records)){if(this._sortIndices(this._records),!this._displayList){const e=this._cursorIndexOrder;this._displayList=a$1.from(this,this.geometryType,this._records.getCursor(),e);}this._displayList.forEach(e);}}_sortIndices(e){if(!this._indicesInvalid)return;this._indicesInvalid=!1;let t=0;const r=e.getCursor(),i=this._indexBuffer.getBuffer(),s=[],n=[],o=[];for(;r.next();)n.push(r.index),o.push(r.sortKey),s.push(r.id);n.sort(((e,t)=>{const r=o[t],i=o[e];return i===r?s[t]-s[e]:r-i}));const f=e.getCursor();for(const d of n){if(!f.seekIndex(d))throw new Error("Expected to find index");const{indexFrom:e,indexCount:r}=f;f.indexFrom=t;for(let s=0;s<r;s++)this._indexBuffer.set(t++,i[e+s]);}this._cursorIndexOrder=n,this._displayList=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=50,l$1=4,S=8,y=100;let w=0;class g extends FeatureContainer.f{constructor(t,r,s,i){super(t,r,s),this.instanceId=w++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new CircularArray.s(y),this._bufferPatches=new CircularArray.s(y),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=mat2df32.n(),this._store=i;}destroy(){super.destroy(),this._renderState.current.geometry.forEach((e=>e.destroy()));}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return !!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}setTransform(e,t){super.setTransform(e,t);const r=this.transforms.labelMat2d,s=e.getScreenTransform(r,t),h=vec2f32.n();vec2.D(h,[this.x,this.y],s),mat2d.n(r),mat2d.i(r,r,h),mat2d.o(r,e.viewMat2d,r);}patch(e,t){if(this.patchCount++,e.clear&&this._lastMessageWasClear)return;this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=f&&this._dropPatches();const r=e,s=r.addOrUpdate&&this.key.id!==r.addOrUpdate.tileKeyOrigin;t&&s?this._bufferPatches.enqueue(r):(r.sort=r.sort&&!t,this._patches.enqueue(r)),this.requestRender();}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<l$1;e++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender());}}lock(){this._renderState.locked=!0;}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap();}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=S,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender();}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,request.r(this._renderState.next)&&(this._renderState.current.geometry.forEach((e=>e.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null));}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap();}_updateBufferMesh(){const e=this._bufferPatches.peek();if(!request.r(e)||!e.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const e=this._bufferPatches.dequeue();request.r(e)&&this._patchBuffer(e);}}_updateMesh(){const e=this._patches.peek();if(request.r(e)&&e.clear&&null!==this._renderState.next)return;const r=this._patches.dequeue();if(request.r(r)){if(!0===r.clear){if(!this.isReady)return;return void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(r),r.end&&(this.ready(),this._swapRenderStates());}}_patch(e){Utils.re((t=>{this._remove(t,e.remove),this._insert(t,e,!1);}));}_patchBuffer(e){Utils.re((t=>{this._insert(t,e,!0);}));}_insert(e,t,i){try{var a;const n=request.c$2(this._renderState.next,this._renderState.current),h=null==(a=t.addOrUpdate)?void 0:a.data[e],c=n.geometry;if(request.t$1(h))return;c.has(e)||c.set(e,new o(e,this.stage)),c.get(e).insert(h,t.sort,i),e===Utils.E.LABEL&&this._insertLabelMetrics(t.type,h.metrics,t.clear);}catch(n){}}_insertLabelMetrics(e,t,i){const a=request.c$2(this._renderState.next,this._renderState.current);if(request.t$1(t))return;const n=o$1.from(t);if(request.t$1(a.metrics))a.metrics=n;else {if("update"===e){const e=n.getCursor();for(;e.next();)a.metrics.delete(e.id);}a.metrics.link(n);}}_remove(e,t){const s=request.c$2(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&s&&(s.remove(t),this._removeLabelMetrics(t));}_removeLabelMetrics(e){const{metrics:t}=request.c$2(this._renderState.next,this._renderState.current);if(!request.t$1(t)&&e.length)for(const r of e)for(;t.delete(r););}_dropPatches(){const e=new Array;let t=!1;for(;this._patches.size;){const r=this._patches.dequeue();if(request.t$1(r))break;if(r.clear){if(t)break;t=!0;}e.push(r);}this._patches.clear(),e.forEach((e=>this._patches.enqueue(e)));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=request.s$3("featurelayer-order-by-server-enabled");class l extends FeatureContainer.o{constructor(e,s,t,i){super(e),this._pointToCallbacks=new Map,this._layer=t,this._layerView=s,this._onUpdate=i;}renderChildren(e){if(this.attributeView.update(),this.hasAnimation){e.painter.effects.integrate.draw(e,e.attributeView);}super.renderChildren(e);}isUpdating(){return this.attributeView.isUpdating()}hitTest(e,t){const i=[e,t],r=request.B();return this._pointToCallbacks.set(i,r),this.requestRender(),r.promise}onTileData(e,s){const t=a&&"orderBy"in this._layer&&this._layer.orderBy,i=(null==t?void 0:t.length)&&!t[0].valueExpression&&t[0].field,r=t&&this._layerView.orderByFields===i;e.patch(s,r),this.contains(e)||this.addChild(e),this.requestRender();}onTileError(e){this.contains(e)||this.addChild(e);}doRender(e){const{minScale:s,maxScale:t}=this._layer,i=e.state.scale;i<=(s||1/0)&&i>=t&&super.doRender(e);}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate();}get hasAnimation(){return this.hasLabels}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some((e=>e.labelingInfo&&e.labelingInfo.length&&e.labelsVisible));const e=this._layer.featureReduction,s=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!s}prepareRenderPasses(e){const s=e.registerRenderPass({name:"label",brushes:[brushes.G.label],target:()=>this.hasLabels?this.children:null,drawPhase:Utils.I.LABEL|Utils.I.LABEL_ALPHA}),i=e.registerRenderPass({name:"geometry",brushes:[brushes.G.fill,brushes.G.line,brushes.G.marker,brushes.G.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.excluded},{apply:e.effects.insideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.included},{apply:e.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),a=e.registerRenderPass({name:"highlight",brushes:[brushes.G.fill,brushes.G.line,brushes.G.marker,brushes.G.text],target:()=>this.children,drawPhase:Utils.I.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return [...super.prepareRenderPasses(e),i,a,s]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends BaseTileRenderer.o{install(e){const t=()=>this.notifyChange("updating"),i=new l(this.tileInfoView,this.layerView,this.layer,t);this.featuresView=i,e.addChild(i);}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy();}fetchResource(e,t){const{url:s}=e,r=this.featuresView.stage;try{return r.resourceManager.fetchResource(s,{signal:t.signal})}catch(a){return request.d$1(a)?Promise.resolve({width:0,height:0}):Promise.reject(a)}}isUpdating(){const e=super.isUpdating(),i=!this.featuresView||this.featuresView.isUpdating(),s=e||i;return request.s$3("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${s}\n  -> updatingTiles ${e}\n  -> updatingFeaturesView ${i}`),s}hitTest(e,t){return this.featuresView.hitTest(e,t)}supportsRenderer(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}onConfigUpdate(e){let t=null;if("visualVariables"in e){const i=(schemaUtils.s(e).visualVariables||[]).map((e=>{const t=e.clone();return "normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=visualVariablesUtils.m(i);}this.featuresView.setRendererInfo(e,t,this.layerView.featureEffect);}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate();}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t);}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload();}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()));}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()));}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate();}createTile(e){const t=this.tileInfoView.getTileBounds(aaBoundingRect.u(),e);return new g(e,t[0],t[3],this.featuresView.attributeView)}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate();}};p=request.e([request.i("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],p);const c=p;

exports.default = c;
