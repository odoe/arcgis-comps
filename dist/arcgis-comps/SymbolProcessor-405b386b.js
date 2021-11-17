import { aI as d, r, bd as E, f as s, s as s$1, av as h, l as t$1, bt as s$2, aG as e, cJ as f, e as e$1, i } from './jsxFactory-ef3e403e.js';
import { n } from './CIMSymbolHelper-dd6f9392.js';
import { m, a } from './diffUtils-1f52a3dd.js';
import { k } from './unitUtils-8a2b838a.js';
import { E as E$1, o, l, b as E$2, t as t$2 } from './Matcher-f96cf707.js';
import { p } from './BaseProcessor-5bc5d8cd.js';
import { B } from './ComputedAttributeStorage-0b04b34e.js';
import './index-5b4f4de1.js';
import './BidiEngine-8e81e59c.js';
import './definitions-a1bd4630.js';
import './mat2d-9870c32e.js';
import './vec2-c76b9984.js';
import './vec2f32-7c7b1123.js';
import './number-888f4898.js';
import './GeometryUtils-93aa6536.js';
import './JSONSupport-a5eb98e7.js';
import './TileStrategy-2047ff7a.js';
import './TileStore-a3382c75.js';
import './TileKey-56deb206.js';
import './quickselect-ccfd8cff.js';
import './Query-fd5e1b7b.js';
import './TimeExtent-fb7ed3e3.js';
import './Field-c395cfbd.js';
import './fieldType-d6b0953a.js';
import './Utils-8509bfb9.js';
import './Texture-02338d74.js';
import './tileUtils-d76656f2.js';
import './TileClipper-80c441d0.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-7a78d364.js';
import './featureConversionUtils-a454d4b2.js';
import './OptimizedFeature-20e2f9bb.js';
import './OptimizedFeatureSet-27736f1f.js';
import './defaultsJSON-53258912.js';
import './earcut-05cd758b.js';
import './cimAnalyzer-39e96fe6.js';
import './utils-f8425723.js';
import './quantizationUtils-f8b2b60e.js';
import './cimSymbolUtils-5cbc87eb.js';
import './devEnvironmentUtils-930ae782.js';
import './styleUtils-f18fb225.js';
import './LRUCache-59f5b25d.js';
import './MemCache-bf2be364.js';
import './HandleOwner-ebad91ab.js';
import './reactiveUtils-2b52b231.js';
import './FeatureSetReader-c6dabf46.js';
import './centroid-f41fa1a8.js';
import './FieldsIndex-d76382ca.js';
import './visualVariablesUtils-9e8853e9.js';
import './visualVariablesUtils-a1d2ce42.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map;}destroy(){}async fetchResource(t,r){const s=this._resourceMap,i=s.get(t);if(i)return i;let n=this._inFlightResourceMap.get(t);if(n)return n;try{n=this._remoteClient.invoke("tileRenderer.fetchResource",{url:t},{...r}),this._inFlightResourceMap.set(t,n),n.then((e=>(this._inFlightResourceMap.delete(t),s.set(t,e),e)));}catch(o){return d(o)?null:{width:0,height:0}}return n}getResource(e){var t;return null!=(t=this._resourceMap.get(e))?t:null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function M(e,t){return (!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function j(e){const t=e.message,s={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin},transferList:new Array};for(const r$1 in t.data){const e=t.data[r$1];if(s.message.data[r$1]=null,r(e)){const t=e.stride,a=e.indices.slice(0),o=e.vertices.slice(0),n=e.records.slice(0),l={stride:t,indices:a,vertices:o,records:n,metrics:E(e.metrics,(e=>e.slice(0)))};s.transferList.push(a,o,n),s.message.data[r$1]=l;}}return s}s.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let x=class extends p{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new t(this.remoteClient);}destroy(){this._resourceManagerProxy.destroy();}get supportsTileUpdates(){return !0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e);}));}async update(e,t){const r=t.schema.processors[0];if("symbol"!==r.type)return;const i=m(this._schema,r);a(i,"mesh")&&(s$1("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",i),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo));}onTileMessage(e,t,s,r){return h(r),this._onTileData(e,t,s,r)}onTileClear(e){const t={clear:!0};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}onTileError(e,t,s){const r=s.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const s of e)s.message.tileKey===t.id&&this._updateTileMesh("append",t,j(s),[],!1,!1,null);}));}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(j(t));}_createFactory(e){const{geometryType:t,objectIdField:s,fields:r}=this.service,a=(e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t),o$1={geometryType:t,fields:r,spatialReference:k.fromJSON(this.spatialReference)},n=new E$1(a,this.tileStore.tileScheme.tileInfo),{matcher:l$1,aggregateMatcher:c}=e.mesh;return this._store=n,this._matchers.feature=o(l$1,n,o$1,this._resourceManagerProxy),this._matchers.aggregate=E(c,(e=>o(e,n,o$1,this._resourceManagerProxy))),new l(t,s,n)}async _onTileData(e,t,s,r$1){h(r$1);const{type:i,addOrUpdate:n,remove:l}=t,h$1=t.end,f=!!this._schema.mesh.sortKey;if(!n){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:h$1,sort:f};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r$1)}const m=this._processFeatures(e,n,s,r$1);try{const s=await m;if(t$1(s)){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:h$1,sort:f};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r$1)}const n=[];for(const t of s){let s=!1;const r$1=t.message.bufferIds,i=e.key.id,a=t.message.tileKey;if(i!==a&&r(r$1)){if(!this.tileStore.get(a)){this._addBufferData(i,t),n.push(t);continue}let e=this._bufferIds.get(a);e||(e=new Set,this._bufferIds.set(a,e));const o=Array.from(r$1);for(const t of o){if(e.has(t)){s=!0;break}e.add(t);}}s||(this._addBufferData(i,t),n.push(t));}await s$2(n.map((s=>{const a=e.key.id===s.message.tileKey,o=a?t.remove:[],n=a&&t.end;return this._updateTileMesh(i,e,s,o,n,t.clear,r$1.signal)})));}catch(u){this._handleError(e,u,r$1);}}async _updateTileMesh(e$1,t,s,r,a,o,n){const d=e$1,h$1=s.message.tileKey,f=!!this._schema.mesh.sortKey;h$1!==t.key.id&&(a=!1);const m=E(s,(e=>e.message)),u=E(s,(e=>e.transferList))||[],p={type:d,addOrUpdate:m,remove:r,clear:!1,end:a,sort:f},g={transferList:e(u)||[],signal:n};return h(g),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:h$1,data:p},g)}async _processFeatures(e,t,s,r){if(t$1(t)||!t.hasFeatures)return null;const i={transform:e.transform,hasZ:!1,hasM:!1},o=this._factory,n={viewingMode:"",scale:e.scale},l=await this._matchers.feature,d=await this._matchers.aggregate;h(r);const h$1=this._getLabelInfos(e,t);return await o.analyze(t.getCursor(),this._resourceManagerProxy,l,d,i,n),h(r),this._writeFeatureSet(e,t,i,h$1,o,s)}_writeFeatureSet(e,t,s,r$1,i,a){const n=t.getSize(),l="simple"===this._schema.mesh.matcher.type&&this._schema.mesh.matcher.isDotDensity,c=new E$2(e.key.id,{features:n,records:n,metrics:0},l,a,!0),d={viewingMode:"",scale:e.scale},h=t.getCursor();for(;h.next();)try{const t=h.getDisplayId(),a=r(r$1)?r$1.get(t):null;i.writeCursor(c,h,s,d,e.level,a);}catch(m){}const f=e.tileInfoView.tileInfo.isWrappable;return c.serialize(f)}_handleError(e,t,s){if(!d(t)){const r={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if(t$1(t))return null;if("subtype"===t.type){const s={type:"subtype",classes:{}};let r=!1;for(const i in t.classes){const a=t.classes[i].filter((t=>M(t,e.scale)));r=r||!!a.length,s.classes[i]=a;}return r?s:null}const s=t.classes.filter((t=>M(t,e.scale)));return s.length?{type:"simple",classes:s}:null}_getLabels(e,t){if("subtype"===t.type){var s;const r=this.service.subtypeField,i=f(r,"Expected to find subtype Field"),a=e.readAttribute(i);return null==a?[]:null!=(s=t.classes[a])?s:[]}return t.classes}_getLabelInfos(e,s){const r=this._getLabelingSchemaForScale(e);if(t$1(r))return null;const i=new Map,o=s.getCursor();for(;o.next();){const e=o.getDisplayId(),s=[],a=B(e),n$1=a&&1!==o.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(o,r);for(const r of l){if(r.target!==n$1)continue;const i=o.getStorage(),l=a&&"feature"===n$1?i.getComputedStringAtIndex(o.readAttribute("referenceId"),r.fieldIndex):i.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const c=n(l.toString()),d=c[0],h=c[1];this._store.getMosaicItem(r.symbol,t$2(d)).then((e=>{s[r.index]={glyphs:e.glyphMosaicItems,rtl:h,index:r.index};}));}i.set(e,s);}return i}};x=e$1([i("esri.views.2d.layers.features.processors.SymbolProcessor")],x);const D=x;

export default D;
