import { b as d, c as s, e, i, K as s$1, h, a0 as k, c9 as E, af as t$1, A as r, bT as s$2, dX as f, V as e$1 } from './messageBundle-f75b4090.js';
import { n } from './CIMSymbolHelper-4df91506.js';
import { m, a } from './diffUtils-849b3672.js';
import { o, l, b as E$1, t as t$2, E as E$2 } from './Matcher-8d34bc06.js';
import { p } from './BaseProcessor-cad6985a.js';
import { B } from './ComputedAttributeStorage-a268633c.js';
import './index-b157fcf2.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './BidiEngine-8e81e59c.js';
import './floatRGBA-7e1629d8.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingRect-9468599b.js';
import './geometry-7e07b1ba.js';
import './jsonUtils-13b1f6fd.js';
import './definitions-6a5ca2d9.js';
import './mat2d-13076132.js';
import './mat2df32-93736424.js';
import './vec2-5672471e.js';
import './vec2f32-29d55de5.js';
import './number-851eb983.js';
import './GeometryUtils-d5113f23.js';
import './TileStrategy-e8f4a676.js';
import './TileStore-53d2d3f6.js';
import './Queue-a7e7a3e5.js';
import './TileKey-284eee69.js';
import './quickselect-ccfd8cff.js';
import './Query-d6335b3a.js';
import './TimeExtent-a024c0d8.js';
import './enumeration-d3301938.js';
import './Field-bfaa8af9.js';
import './fieldType-66a19d8a.js';
import './Utils-e4b23428.js';
import './Texture-f0375c04.js';
import './tileUtils-0e5508e9.js';
import './TileClipper-e23eb0f2.js';
import './GeometryUtils-491632d8.js';
import './visualVariablesUtils-7de7bc4d.js';
import './visualVariablesUtils-6a0305f7.js';
import './MaterialKey-853b7040.js';
import './featureConversionUtils-cbd79ea2.js';
import './OptimizedFeature-44d5df5b.js';
import './OptimizedFeatureSet-27736f1f.js';
import './defaultsJSON-0b68054b.js';
import './earcut-05cd758b.js';
import './cimAnalyzer-d76cb5c0.js';
import './opacityUtils-5e864561.js';
import './utils-f8425723.js';
import './callExpressionWithFeature-e06d2f0b.js';
import './quantizationUtils-e08f723c.js';
import './cimSymbolUtils-853b7c71.js';
import './devEnvironmentUtils-9331429c.js';
import './Portal-c5cfa317.js';
import './persistableUrlUtils-40bbec67.js';
import './styleUtils-cb28c5ef.js';
import './LRUCache-d5842b88.js';
import './MemCache-78a9f000.js';
import './HandleOwner-88326c19.js';
import './reactiveUtils-8f9c3a3d.js';
import './FeatureSetReader-56d48eaa.js';
import './centroid-a2430753.js';
import './FieldsIndex-2a111e7e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map;}destroy(){}async fetchResource(t,r){const s=this._resourceMap,i=s.get(t);if(i)return i;let n=this._inFlightResourceMap.get(t);if(n)return n;try{n=this._remoteClient.invoke("tileRenderer.fetchResource",{url:t},{...r}),this._inFlightResourceMap.set(t,n),n.then((e=>(this._inFlightResourceMap.delete(t),s.set(t,e),e)));}catch(o){return d(o)?null:{width:0,height:0}}return n}getResource(e){var t;return null!=(t=this._resourceMap.get(e))?t:null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function M(e,t){return (!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function j(e){const t=e.message,s={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin},transferList:new Array};for(const r$1 in t.data){const e=t.data[r$1];if(s.message.data[r$1]=null,r(e)){const t=e.stride,a=e.indices.slice(0),o=e.vertices.slice(0),n=e.records.slice(0),l={stride:t,indices:a,vertices:o,records:n,metrics:E(e.metrics,(e=>e.slice(0)))};s.transferList.push(a,o,n),s.message.data[r$1]=l;}}return s}s.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let x=class extends p{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new t(this.remoteClient);}destroy(){this._resourceManagerProxy.destroy();}get supportsTileUpdates(){return !0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e);}));}async update(e,t){const r=t.schema.processors[0];if("symbol"!==r.type)return;const i=m(this._schema,r);a(i,"mesh")&&(s$1("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",i),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo));}onTileMessage(e,t,s,r){return h(r),this._onTileData(e,t,s,r)}onTileClear(e){const t={clear:!0};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}onTileError(e,t,s){const r=s.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const s of e)s.message.tileKey===t.id&&this._updateTileMesh("append",t,j(s),[],!1,!1,null);}));}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(j(t));}_createFactory(e){const{geometryType:t,objectIdField:s,fields:r}=this.service,a=(e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t),o$1={geometryType:t,fields:r,spatialReference:k.fromJSON(this.spatialReference)},n=new E$2(a,this.tileStore.tileScheme.tileInfo),{matcher:l$1,aggregateMatcher:c}=e.mesh;return this._store=n,this._matchers.feature=o(l$1,n,o$1,this._resourceManagerProxy),this._matchers.aggregate=E(c,(e=>o(e,n,o$1,this._resourceManagerProxy))),new l(t,s,n)}async _onTileData(e,t,s,r$1){h(r$1);const{type:i,addOrUpdate:n,remove:l}=t,h$1=t.end,f=!!this._schema.mesh.sortKey;if(!n){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:h$1,sort:f};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r$1)}const m=this._processFeatures(e,n,s,r$1);try{const s=await m;if(t$1(s)){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:h$1,sort:f};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r$1)}const n=[];for(const t of s){let s=!1;const r$1=t.message.bufferIds,i=e.key.id,a=t.message.tileKey;if(i!==a&&r(r$1)){if(!this.tileStore.get(a)){this._addBufferData(i,t),n.push(t);continue}let e=this._bufferIds.get(a);e||(e=new Set,this._bufferIds.set(a,e));const o=Array.from(r$1);for(const t of o){if(e.has(t)){s=!0;break}e.add(t);}}s||(this._addBufferData(i,t),n.push(t));}await s$2(n.map((s=>{const a=e.key.id===s.message.tileKey,o=a?t.remove:[],n=a&&t.end;return this._updateTileMesh(i,e,s,o,n,t.clear,r$1.signal)})));}catch(u){this._handleError(e,u,r$1);}}async _updateTileMesh(e,t,s,r,a,o,n){const d=e,h$1=s.message.tileKey,f=!!this._schema.mesh.sortKey;h$1!==t.key.id&&(a=!1);const m=E(s,(e=>e.message)),u=E(s,(e=>e.transferList))||[],p={type:d,addOrUpdate:m,remove:r,clear:!1,end:a,sort:f},g={transferList:e$1(u)||[],signal:n};return h(g),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:h$1,data:p},g)}async _processFeatures(e,t,s,r){if(t$1(t)||!t.hasFeatures)return null;const i={transform:e.transform,hasZ:!1,hasM:!1},o=this._factory,n={viewingMode:"",scale:e.scale},l=await this._matchers.feature,d=await this._matchers.aggregate;h(r);const h$1=this._getLabelInfos(e,t);return await o.analyze(t.getCursor(),this._resourceManagerProxy,l,d,i,n),h(r),this._writeFeatureSet(e,t,i,h$1,o,s)}_writeFeatureSet(e,t,s,r$1,i,a){const n=t.getSize(),l="simple"===this._schema.mesh.matcher.type&&this._schema.mesh.matcher.isDotDensity,c=new E$1(e.key.id,{features:n,records:n,metrics:0},l,a,!0),d={viewingMode:"",scale:e.scale},h=t.getCursor();for(;h.next();)try{const t=h.getDisplayId(),a=r(r$1)?r$1.get(t):null;i.writeCursor(c,h,s,d,e.level,a);}catch(m){}const f=e.tileInfoView.tileInfo.isWrappable;return c.serialize(f)}_handleError(e,t,s){if(!d(t)){const r={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if(t$1(t))return null;if("subtype"===t.type){const s={type:"subtype",classes:{}};let r=!1;for(const i in t.classes){const a=t.classes[i].filter((t=>M(t,e.scale)));r=r||!!a.length,s.classes[i]=a;}return r?s:null}const s=t.classes.filter((t=>M(t,e.scale)));return s.length?{type:"simple",classes:s}:null}_getLabels(e,t){if("subtype"===t.type){var s;const r=this.service.subtypeField,i=f(r,"Expected to find subtype Field"),a=e.readAttribute(i);return null==a?[]:null!=(s=t.classes[a])?s:[]}return t.classes}_getLabelInfos(e,s){const r=this._getLabelingSchemaForScale(e);if(t$1(r))return null;const i=new Map,o=s.getCursor();for(;o.next();){const e=o.getDisplayId(),s=[],a=B(e),n$1=a&&1!==o.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(o,r);for(const r of l){if(r.target!==n$1)continue;const i=o.getStorage(),l=a&&"feature"===n$1?i.getComputedStringAtIndex(o.readAttribute("referenceId"),r.fieldIndex):i.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const c=n(l.toString()),d=c[0],h=c[1];this._store.getMosaicItem(r.symbol,t$2(d)).then((e=>{s[r.index]={glyphs:e.glyphMosaicItems,rtl:h,index:r.index};}));}i.set(e,s);}return i}};x=e([i("esri.views.2d.layers.features.processors.SymbolProcessor")],x);const D=x;

export default D;
