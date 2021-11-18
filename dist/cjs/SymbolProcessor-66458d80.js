'use strict';

const request = require('./messageBundle-312ceb47.js');
const CIMSymbolHelper = require('./CIMSymbolHelper-e1208fc4.js');
const diffUtils = require('./diffUtils-467572e8.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const Matcher = require('./Matcher-88f6470a.js');
const BaseProcessor = require('./BaseProcessor-9ab4368a.js');
const ComputedAttributeStorage = require('./ComputedAttributeStorage-cc01d874.js');
require('./index-57f2cfbb.js');
require('./BidiEngine-e033e7c0.js');
require('./aaBoundingRect-7e7e678f.js');
require('./definitions-b4888cc6.js');
require('./mat2df32-f2b5b52d.js');
require('./vec2-65c4309d.js');
require('./vec2f32-29a5eecf.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./JSONSupport-53c01d03.js');
require('./TileStrategy-d5289194.js');
require('./TileStore-3be4ace6.js');
require('./TileKey-b425207e.js');
require('./quickselect-d3f68f5a.js');
require('./Query-35be2e91.js');
require('./TimeExtent-cdfe048b.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./Utils-b188baf8.js');
require('./Texture-272da42e.js');
require('./tileUtils-01a55805.js');
require('./TileClipper-b1e23799.js');
require('./GeometryUtils-e13b3219.js');
require('./visualVariablesUtils-3b9ebc9d.js');
require('./visualVariablesUtils-77c3c121.js');
require('./MaterialKey-0f043067.js');
require('./featureConversionUtils-e6cca372.js');
require('./OptimizedFeature-cf019b37.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./defaultsJSON-01ae5a1a.js');
require('./earcut-d5562923.js');
require('./cimAnalyzer-a91407a6.js');
require('./utils-fb318f28.js');
require('./quantizationUtils-7dfad3c7.js');
require('./cimSymbolUtils-3f93bd5c.js');
require('./devEnvironmentUtils-98ac846b.js');
require('./styleUtils-10128dd7.js');
require('./LRUCache-b38a7907.js');
require('./MemCache-1ae72e1e.js');
require('./HandleOwner-f254dc86.js');
require('./reactiveUtils-9e33ad73.js');
require('./FeatureSetReader-56da5c2b.js');
require('./centroid-fbe1334b.js');
require('./FieldsIndex-8c8f3ac6.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map;}destroy(){}async fetchResource(t,r){const s=this._resourceMap,i=s.get(t);if(i)return i;let n=this._inFlightResourceMap.get(t);if(n)return n;try{n=this._remoteClient.invoke("tileRenderer.fetchResource",{url:t},{...r}),this._inFlightResourceMap.set(t,n),n.then((e=>(this._inFlightResourceMap.delete(t),s.set(t,e),e)));}catch(o){return request.d$2(o)?null:{width:0,height:0}}return n}getResource(e){var t;return null!=(t=this._resourceMap.get(e))?t:null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function M(e,t){return (!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function j(e){const t=e.message,s={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin},transferList:new Array};for(const r in t.data){const e=t.data[r];if(s.message.data[r]=null,request.r(e)){const t=e.stride,a=e.indices.slice(0),o=e.vertices.slice(0),n=e.records.slice(0),l={stride:t,indices:a,vertices:o,records:n,metrics:request.E$4(e.metrics,(e=>e.slice(0)))};s.transferList.push(a,o,n),s.message.data[r]=l;}}return s}request.s$2.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let x=class extends BaseProcessor.p{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new t(this.remoteClient);}destroy(){this._resourceManagerProxy.destroy();}get supportsTileUpdates(){return !0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e);}));}async update(e,t){const r=t.schema.processors[0];if("symbol"!==r.type)return;const i=diffUtils.m(this._schema,r);diffUtils.a(i,"mesh")&&(request.s$3("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",i),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo));}onTileMessage(e,t,s,r){return request.h(r),this._onTileData(e,t,s,r)}onTileClear(e){const t={clear:!0};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}onTileError(e,t,s){const r=s.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const s of e)s.message.tileKey===t.id&&this._updateTileMesh("append",t,j(s),[],!1,!1,null);}));}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(j(t));}_createFactory(e){const{geometryType:t,objectIdField:s,fields:r}=this.service,a=(e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t),o={geometryType:t,fields:r,spatialReference:unitUtils.k.fromJSON(this.spatialReference)},n=new Matcher.E(a,this.tileStore.tileScheme.tileInfo),{matcher:l,aggregateMatcher:c}=e.mesh;return this._store=n,this._matchers.feature=Matcher.o(l,n,o,this._resourceManagerProxy),this._matchers.aggregate=request.E$4(c,(e=>Matcher.o(e,n,o,this._resourceManagerProxy))),new Matcher.l(t,s,n)}async _onTileData(e,t,s,r){request.h(r);const{type:i,addOrUpdate:n,remove:l}=t,h=t.end,f=!!this._schema.mesh.sortKey;if(!n){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:h,sort:f};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const m=this._processFeatures(e,n,s,r);try{const s=await m;if(request.t(s)){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:h,sort:f};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const n=[];for(const t of s){let s=!1;const r=t.message.bufferIds,i=e.key.id,a=t.message.tileKey;if(i!==a&&request.r(r)){if(!this.tileStore.get(a)){this._addBufferData(i,t),n.push(t);continue}let e=this._bufferIds.get(a);e||(e=new Set,this._bufferIds.set(a,e));const o=Array.from(r);for(const t of o){if(e.has(t)){s=!0;break}e.add(t);}}s||(this._addBufferData(i,t),n.push(t));}await request.s$4(n.map((s=>{const a=e.key.id===s.message.tileKey,o=a?t.remove:[],n=a&&t.end;return this._updateTileMesh(i,e,s,o,n,t.clear,r.signal)})));}catch(u){this._handleError(e,u,r);}}async _updateTileMesh(e,t,s,r,a,o,n){const d=e,h=s.message.tileKey,f=!!this._schema.mesh.sortKey;h!==t.key.id&&(a=!1);const m=request.E$4(s,(e=>e.message)),u=request.E$4(s,(e=>e.transferList))||[],p={type:d,addOrUpdate:m,remove:r,clear:!1,end:a,sort:f},g={transferList:request.e$3(u)||[],signal:n};return request.h(g),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:h,data:p},g)}async _processFeatures(e,t,s,r){if(request.t(t)||!t.hasFeatures)return null;const i={transform:e.transform,hasZ:!1,hasM:!1},o=this._factory,n={viewingMode:"",scale:e.scale},l=await this._matchers.feature,d=await this._matchers.aggregate;request.h(r);const h=this._getLabelInfos(e,t);return await o.analyze(t.getCursor(),this._resourceManagerProxy,l,d,i,n),request.h(r),this._writeFeatureSet(e,t,i,h,o,s)}_writeFeatureSet(e,t,s,r,i,a){const n=t.getSize(),l="simple"===this._schema.mesh.matcher.type&&this._schema.mesh.matcher.isDotDensity,c=new Matcher.E$1(e.key.id,{features:n,records:n,metrics:0},l,a,!0),d={viewingMode:"",scale:e.scale},h=t.getCursor();for(;h.next();)try{const t=h.getDisplayId(),a=request.r(r)?r.get(t):null;i.writeCursor(c,h,s,d,e.level,a);}catch(m){}const f=e.tileInfoView.tileInfo.isWrappable;return c.serialize(f)}_handleError(e,t,s){if(!request.d$2(t)){const r={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if(request.t(t))return null;if("subtype"===t.type){const s={type:"subtype",classes:{}};let r=!1;for(const i in t.classes){const a=t.classes[i].filter((t=>M(t,e.scale)));r=r||!!a.length,s.classes[i]=a;}return r?s:null}const s=t.classes.filter((t=>M(t,e.scale)));return s.length?{type:"simple",classes:s}:null}_getLabels(e,t){if("subtype"===t.type){var s;const r=this.service.subtypeField,i=request.f$3(r,"Expected to find subtype Field"),a=e.readAttribute(i);return null==a?[]:null!=(s=t.classes[a])?s:[]}return t.classes}_getLabelInfos(e,s){const r=this._getLabelingSchemaForScale(e);if(request.t(r))return null;const i=new Map,o=s.getCursor();for(;o.next();){const e=o.getDisplayId(),s=[],a=ComputedAttributeStorage.B(e),n=a&&1!==o.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(o,r);for(const r of l){if(r.target!==n)continue;const i=o.getStorage(),l=a&&"feature"===n?i.getComputedStringAtIndex(o.readAttribute("referenceId"),r.fieldIndex):i.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const c=CIMSymbolHelper.n(l.toString()),d=c[0],h=c[1];this._store.getMosaicItem(r.symbol,Matcher.t(d)).then((e=>{s[r.index]={glyphs:e.glyphMosaicItems,rtl:h,index:r.index};}));}i.set(e,s);}return i}};x=request.e([request.i("esri.views.2d.layers.features.processors.SymbolProcessor")],x);const D=x;

exports.default = D;
