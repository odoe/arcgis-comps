import { e as e$1, d, i as i$1, p, b_ as F$2, t as t$2, v as s, r as r$2, G as l, aa as b$1, c4 as n$1, _ as e$2, k as n$2, ax as A, J as u$2, ae as h, ac as P, cm as p$3 } from './messageBundle-8a146a9b.js';
import { M, k as k$1 } from './unitUtils-c707ba3c.js';
import { e as e$3, m as m$1 } from './FeatureStore-8643de6a.js';
import { V } from './QueryEngine-8543a4c7.js';
import { j as j$2 } from './TileInfo-9ceca7da.js';
import { v as v$1 } from './TimeInfo-3ee9ad62.js';
import { b } from './Query-71270a43.js';
import { d as d$1, l as l$1 } from './HandleOwner-6cdc634d.js';
import { c, k, u as u$1, m, y as y$2 } from './aaBoundingRect-6f84e6b7.js';
import { l as lt, c as ct, g as gt } from './featureConversionUtils-e2de20bf.js';
import { a } from './pbfQueryUtils-861d8d5b.js';
import { S as S$2, c as c$1, y as y$1, p as p$2 } from './query-70db7072.js';
import { p as p$1 } from './asyncUtils-c98101f9.js';
import './index-41925fe8.js';
import './JSONSupport-4e29e63d.js';
import './PooledRBush-e90d4648.js';
import './quickselect-ccfd8cff.js';
import './centroid-8cfd4f76.js';
import './OptimizedFeature-d5cd2d1c.js';
import './MemCache-73bb45e2.js';
import './normalizeUtils-c91b4ce9.js';
import './ItemCache-fb7de9d2.js';
import './WhereClause-cbc08992.js';
import './projectionSupport-fef98a1d.js';
import './projection-b812ba08.js';
import './mat4-1ee7ce2f.js';
import './json-cfa039ad.js';
import './QueryEngineCapabilities-d289cd19.js';
import './quantizationUtils-af5d2b53.js';
import './utils-1621b36a.js';
import './ClassBreaksDefinition-ca9f64ab.js';
import './colorRamps-b0e37c54.js';
import './spatialQuerySupport-dacdfdec.js';
import './FieldsIndex-041474f9.js';
import './Scheduler-9fe99f02.js';
import './reactiveUtils-a5f838c7.js';
import './TimeExtent-16986fe0.js';
import './Field-fbfaf20d.js';
import './fieldType-f80f0b3d.js';
import './OptimizedFeatureSet-27736f1f.js';
import './pbf-bb65af95.js';
import './queryZScale-f92acabb.js';
import './zscale-5703857d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let r$1=class extends p{constructor(){super(...arguments),this.updating=!1,this.pending=[];}push(s,t){this.pending.push({promise:s,callback:t}),1===this.pending.length&&this.process();}process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const s=this.pending[0];s.promise.then((t=>s.callback(t))).catch((()=>{})).then((()=>{this.pending.shift(),this.process();}));}};e$1([d()],r$1.prototype,"updating",void 0),r$1=e$1([i$1("esri.core.AsyncSequence")],r$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class u{constructor(t,e){this.data=t,this.resolution=e,this.state={type:0},this.alive=!0;}process(t){switch(this.state.type){case 0:return this.state=this.gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case 1:case 3:break;case 2:return this.state=this.gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case 4:this.state=this.goToDone(this.state,t);}return null}get debugInfo(){return {data:this.data,featureCount:this.featureCount,state:this.stateToString}}get featureCount(){switch(this.state.type){case 0:case 1:return 0;case 2:return this.state.featureCount;case 3:return this.state.previous.featureCount;case 4:return this.state.features.length;case 5:return this.state.previous.features.length}}get stateToString(){switch(this.state.type){case 0:return "created";case 1:return "fetch-count";case 2:return "fetched-count";case 3:return "fetch-features";case 4:return "fetched-features";case 5:return "done"}}gotoFetchCount(e,a){return {type:1,previous:e,task:F$2((async e=>{const s=await p$1(a.fetchCount(this,e));1===this.state.type&&(this.state=this.gotoFetchedCount(this.state,s.ok?s.value:1/0));}))}}gotoFetchedCount(t,e){return {type:2,featureCount:e,previous:t}}gotoFetchFeatures(e,a){return {type:3,previous:e,task:F$2((async s=>{const r=await p$1(a.fetchFeatures(this,e.featureCount,s));3===this.state.type&&(this.state=this.gotoFetchedFeatures(this.state,r.ok?r.value:[]));}))}}gotoFetchedFeatures(t,e){return {type:4,previous:t,features:e}}goToDone(t,e){return e.finish(this,t.features),{type:5,previous:t}}reset(){const t=this.state;switch(this.state={type:0},t.type){case 0:case 2:case 4:case 5:break;case 1:case 3:t.task.abort();}}intersects(t){return !(!t$2(t)&&this.data.extent)||(c(t,i),k(this.data.extent,i))}}const i=u$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I$1=s.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");let S$1=class extends d$1{constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this.pendingTiles=new Map,this.pendingEdits=new r$1,this.pendingEditsAbortController=new AbortController;}get minimumVerticesPerFeature(){var e;switch(null==(e=this.store)?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),i=this.filterProperties(e);JSON.stringify(t)!==JSON.stringify(i)&&this._set("filter",i);}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e);}get configuration(){return {filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&(r$2(e)&&r$2(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e));}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e);}get updating(){return this.updatingHandles.updating||this.pendingEdits.updating}initialize(){this.initializeFetchExtent(),this.updatingHandles.add(this,"configuration",(()=>this.refresh())),this.updatingHandles.add(this,"tilesOfInterest",((e,i)=>{l(e,i,(({id:e},{id:t})=>e===t))||this.process();}),1);}destroy(){this.pendingTiles.forEach((e=>this.deletePendingTile(e))),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null;}refresh(){this.store.refresh(),this.pendingTiles.forEach((e=>this.deletePendingTile(e))),this.process();}applyEdits(e){this.pendingEdits.push(e,(async e=>{if(0===e.addedFeatures.length&&0===e.updatedFeatures.length&&0===e.deletedFeatures.length)return;for(const[,i]of this.pendingTiles)i.reset();const t={...e,deletedFeatures:e.deletedFeatures.map((({objectId:e,globalId:t})=>e&&-1!==e?e:this.lookupObjectIdByGlobalId(t)))};await this.updatingHandles.addPromise(this.store.processEdits(t,((e,t)=>this.queryFeaturesById(e,t)),this.pendingEditsAbortController.signal)),this.processPendingTiles();}));}initializeFetchExtent(){if(!this.capabilities.query.supportsExtent)return;const e=F$2((async e=>{try{var t;const i=await S$2(this.url,new b({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this.configuration.customParameters,signal:e});this.store.extent=M.fromJSON(null==(t=i.data)?void 0:t.extent);}catch(i){b$1(i),I$1.warn("Failed to fetch data extent",i);}}));this.updatingHandles.addPromise(e.promise.then((()=>this.process()))),this.handles.add(n$1((()=>e.abort())));}get debugInfo(){return {numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map((e=>e.debugInfo)),storedTiles:this.store.debugInfo}}process(){this.markTilesNotAlive(),this.createPendingTiles(),this.deletePendingTiles(),this.processPendingTiles();}markTilesNotAlive(){for(const[,e]of this.pendingTiles)e.alive=!1;}createPendingTiles(){const e=this.collectMissingTilesInfo();if(this.setAvailability(t$2(e)?1:e.coveredArea/e.fullArea),!t$2(e))for(const{data:t,resolution:i}of e.missingTiles){const e=this.pendingTiles.get(t.id);e?(e.resolution=i,e.alive=!0):this.createPendingTile(t,i);}}collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const i=this.tilesOfInterest[t],s=this.store.process(i,((e,t)=>this.verifyTileComplexity(e,t)));t$2(e)?e=s:e.prepend(s);}return e}deletePendingTiles(){for(const[,e]of this.pendingTiles)e.alive||this.deletePendingTile(e);}processPendingTiles(){const e={fetchCount:(e,t)=>this.fetchCount(e,t),fetchFeatures:(e,t,i)=>this.fetchFeatures(e,t,i),finish:(e,t)=>this.finishPendingTile(e,t),resume:()=>this.processPendingTiles()};if(this.ensureFetchAllCounts(e))for(const[,t]of this.pendingTiles)this.verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e));}verifyTileComplexity(e,t){return this.verifyVertexComplexity(e)&&this.verifyFeatureDensity(e,t)}verifyVertexComplexity(e){return e*this.minimumVerticesPerFeature<x}verifyFeatureDensity(e,t){if(t$2(this.tileInfo))return !1;const i=this.tileSize*t;return e*(j$1/(i*i))<w$2}ensureFetchAllCounts(e){let t=!0;for(const[,i]of this.pendingTiles)i.state.type<2&&this.updatingHandles.addPromise(i.process(e)),i.state.type<=1&&(t=!1);return t}finishPendingTile(e,t){this.store.add(e.data,t),this.deletePendingTile(e),this.updateAvailability();}updateAvailability(){const e=this.collectMissingTilesInfo();this.setAvailability(t$2(e)?1:e.coveredArea/e.fullArea);}setAvailability(e){this._set("availability",e);}createPendingTile(e,t){const i=new u(e,t);return this.pendingTiles.set(e.id,i),i}deletePendingTile(e){e.reset(),this.pendingTiles.delete(e.data.id);}async fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this.createCountQuery(e),{query:this.customParameters,timeout:C$1,signal:t})}async fetchFeatures(e,t,i){let s,r=0,o=0,n=t;for(;;){const a=this.createFeaturesQuery(e),u=this.setPagingParameters(a,r,n),{features:c,exceededTransferLimit:d}=await this.queryFeatures(a,i);if(u&&(r+=e$2(a.num)),o+=c.length,s=s?s.concat(c):c,n=t-o,!u||!d||n<=0)return s}}filterProperties(e){return t$2(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}lookupObjectIdByGlobalId(e){const t=this.globalIdField,i=this.objectIdField;if(t$2(t))throw new Error("Expected globalIdField to be defined");let s=null;if(this.store.featureStore.forEach((r=>{var o;e===r.attributes[t]&&(s=null!=(o=r.objectId)?o:r.attributes[i]);})),t$2(s))throw new Error(`Expected to find a feature with globalId ${e}`);return s}queryFeaturesById(e,t){const i=this.createFeaturesQuery(null);return i.objectIds=e,this.queryFeatures(i,t)}queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this.queryFeaturesPBF(e,t):this.queryFeaturesJSON(e,t)}async queryFeaturesPBF(e,t){const{sourceSpatialReference:i}=this,{data:s}=await c$1(this.url,e,new a({sourceSpatialReference:i}),{query:this.configuration.customParameters,timeout:C$1,signal:t});return lt(s)}async queryFeaturesJSON(e,t){const{sourceSpatialReference:i}=this,{data:s}=await y$1(this.url,e,i,{query:this.configuration.customParameters,timeout:C$1,signal:t});return ct(s,this.objectIdField)}createCountQuery(e){const t=this.createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}createFeaturesQuery(e){const t=this.createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,r$2(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}createBaseQuery(e){const t=new b({returnZ:!1,returnM:!1,geometry:r$2(this.tileInfo)&&r$2(e)?m(e.data.extent,this.tileInfo.spatialReference):void 0}),i=this.configuration.filter;return r$2(i)&&(t.where=i.where,t.gdbVersion=i.gdbVersion,t.timeExtent=i.timeExtent),t.outSpatialReference=this.spatialReference,t}setPagingParameters(e,t,i){if(!this.capabilities.query.supportsPagination)return !1;const{supportsMaxRecordCountFactor:s,supportsCacheHint:r,tileMaxRecordCount:o,maxRecordCount:n,supportsResultType:a}=this.capabilities.query,l=s?b.MAX_MAX_RECORD_COUNT_FACTOR:1,u=l*((a||r)&&o?o:n||O);return e.start=t,s?(e.maxRecordCountFactor=Math.min(l,Math.ceil(i/u)),e.num=Math.min(i,e.maxRecordCountFactor*u)):e.num=Math.min(i,u),!0}};e$1([d({constructOnly:!0})],S$1.prototype,"url",void 0),e$1([d({constructOnly:!0})],S$1.prototype,"objectIdField",void 0),e$1([d({constructOnly:!0})],S$1.prototype,"globalIdField",void 0),e$1([d({constructOnly:!0})],S$1.prototype,"capabilities",void 0),e$1([d({constructOnly:!0})],S$1.prototype,"sourceSpatialReference",void 0),e$1([d({constructOnly:!0})],S$1.prototype,"spatialReference",void 0),e$1([d({constructOnly:!0})],S$1.prototype,"store",void 0),e$1([d({readOnly:!0})],S$1.prototype,"minimumVerticesPerFeature",null),e$1([d()],S$1.prototype,"filter",null),e$1([d()],S$1.prototype,"customParameters",null),e$1([d({readOnly:!0})],S$1.prototype,"configuration",null),e$1([d()],S$1.prototype,"tileInfo",null),e$1([d()],S$1.prototype,"tileSize",null),e$1([d()],S$1.prototype,"tilesOfInterest",void 0),e$1([d({readOnly:!0})],S$1.prototype,"updating",null),e$1([d({readOnly:!0})],S$1.prototype,"availability",void 0),S$1=e$1([i$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],S$1);const O=2e3,C$1=6e5,x=1e6,j$1=25,w$2=1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return 32+n.length}function t$1(){return 16}function e(e){if(!e)return 0;let r=32;for(const o in e)if(e.hasOwnProperty(o)){const c=e[o];switch(typeof c){case"string":r+=n(c);break;case"number":r+=t$1();break;case"boolean":r+=4;}}return r}function r(n,t){return 32+n.length*t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(){this._store=new Map,this._byteSize=0;}set(t,e){this.delete(t),this._store.set(t,e),this._byteSize+=e.byteSize;}delete(t){const e=this._store.get(t);return !!this._store.delete(t)&&(this._byteSize-=e.byteSize,!0)}get(t){return this.used(t),this._store.get(t)}has(t){return this.used(t),this._store.has(t)}clear(){this._store.clear();}applyByteSizeLimit(t,e){for(const[s,r]of this._store){if(this._byteSize<=t)break;this.delete(s),e(r);}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}used(t){const e=this._store.get(t);e&&(this._store.delete(t),this._store.set(t,e));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let g=class extends p{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10485760,this.tileBounds=new e$3,this.tiles=new t,this.refCounts=new Map,this.tileFeatureCounts=new Map,this.tmpBoundingRect=u$1();}add(e,t){const s=[];for(const i of t)0===this.referenceFeature(i.objectId)&&s.push(i);this.addTileStorage(e,new Set(t.map((({objectId:e})=>e))),v(t)),this.featureStore.addMany(s),this.tiles.applyByteSizeLimit(this.maximumByteSize,(e=>this.removeTileStorage(e)));}destroy(){this.clear(),this.tileFeatureCounts.clear();}clear(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear();}refresh(){this.clear(),this.tileFeatureCounts.clear();}processEdits(e,t,s){return this.processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this.processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}addTileStorage(e,t,s){this.tiles.set(e.id,new S(e,t,s)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size);}remove({id:e}){const t=this.tiles.get(e);t&&this.removeTileStorage(t);}removeTileStorage(e){const t=[];for(const i of e.objectIds)1===this.unreferenceFeature(i)&&t.push(i);this.featureStore.removeManyById(t);const s=e.data.id;this.tiles.delete(s),this.tileBounds.delete(s);}processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this.tiles){for(const s of e)t.objectIds.delete(s);this.tileFeatureCounts.set(t.data.id,t.objectIds.size);}for(const t of e)this.refCounts.delete(t);}async processEditsRefetch(e,t,s){const i=(await t(e,s)).features,{hasZ:o,hasM:n}=this.featureStore;for(const l of i){const e=gt(this.tmpBoundingRect,l.geometry,o,n);t$2(e)||this.tileBounds.forEachInBounds(e,(e=>{const t=this.tiles.get(e);this.featureStore.add(l),t.objectIds.has(l.objectId)||(t.objectIds.add(l.objectId),this.referenceFeature(l.objectId),this.tileFeatureCounts.set(t.data.id,t.objectIds.size));}));}}process(e,t=(()=>!0)){if(t$2(this.tileInfo)||!e.extent||r$2(this.extent)&&!k(c(this.extent,this.tmpBoundingRect),e.extent))return new j(e);if(this.tiles.has(e.id))return new j(e);const s=this.createTileTree(e,this.tileInfo);return this.simplify(s,t,null,0,1),this.collectMissingTiles(e,s,this.tileInfo)}get debugInfo(){return Array.from(this.tiles.values()).map((({data:e})=>({data:e,featureCount:this.tileFeatureCounts.get(e.id)||0})))}getFeatureCount(e){const t=this.tileFeatureCounts.get(e.id);return null!=t?t:0}async fetchCount(e,t,s,i){const r=this.tileFeatureCounts.get(e.id);if(null!=r)return r;const o=await p$2(t,s,i);return this.tileFeatureCounts.set(e.id,o.data.count),o.data.count}createTileTree(e,t){const s=new I(e.level,e.row,e.col);return t.updateTileInfo(s,1),this.tileBounds.forEachInBounds(e.extent,(i=>{const r=this.tiles.get(i).data;this.tilesAreRelated(e,r)&&this.populateChildren(s,r,t,this.tileFeatureCounts.get(r.id)||0);})),s}tilesAreRelated(e,t){if(!e||!t)return !1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,i=s?e:t,r=s?t:e,o=1<<r.level-i.level;return Math.floor(r.row/o)===i.row&&Math.floor(r.col/o)===i.col}populateChildren(e,t,s,i){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,l=t.col>>r,c=e.row<<1,a=l-(e.col<<1)+(n-c<<1),h=e.children[a];if(r$2(h))this.populateChildren(h,t,s,i);else {const r=new I(e.level+1,n,l);s.updateTileInfo(r,1),e.children[a]=r,this.populateChildren(r,t,s,i);}}simplify(e,t,s,i,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this.remove(e),r$2(s)&&(s.children[i]=null),n);const l=r/2,c=l*l;let a=0;for(let h=0;h<e.children.length;h++){const s=e.children[h];a+=r$2(s)?this.simplify(s,t,e,h,l):c;}return 0===a?this.mergeChildren(e):1-a/n<F$1&&(this.purge(e),r$2(s)&&(s.children[i]=null),a=n),a}mergeChildren(e){const t=new Set;let s=0;this.forEachLeaf(e,(e=>{const i=this.tiles.get(e.id);if(i){s+=i.byteSize;for(const e of i.objectIds)t.has(e)||(t.add(e),this.referenceFeature(e));this.remove(e);}})),this.addTileStorage(e,t,s),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,t.size);}forEachLeaf(e,t){for(const s of e.children)t$2(s)||(s.isLeaf?t(s):this.forEachLeaf(s,t));}purge(e){if(!t$2(e))if(e.isLeaf)this.remove(e);else for(let t=0;t<e.children.length;t++){const s=e.children[t];this.purge(s),e.children[t]=null;}}collectMissingTiles(e,t,s){const i=new w$1(s,e,this.extent);return this.collectMissingTilesRecurse(t,i,1),i.info}collectMissingTilesRecurse(e,t,s){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,s);const i=s/2;for(let o=0;o<e.children.length;o++){const s=e.children[o];t$2(s)?t.addMissing(e.level+1,(e.row<<1)+((2&o)>>1),(e.col<<1)+(1&o),i):this.collectMissingTilesRecurse(s,t,i);}}referenceFeature(e){const t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),1===t?0:2}unreferenceFeature(e){const t=(this.refCounts.get(e)||0)-1;return 0===t?(this.refCounts.delete(e),1):(t>0&&this.refCounts.set(e,t),2)}get test(){return {tiles:Array.from(this.tiles.values()).map((e=>`${e.data.id}:[${Array.from(e.objectIds)}]`)),featureReferences:Array.from(this.refCounts.keys()).map((e=>`${e}:${this.refCounts.get(e)}`))}}};function v(e){return e.reduce(((e,t)=>e+y(t)),0)}function y(e$1){return 32+C(e$1.geometry)+e(e$1.attributes)}function C(e){if(t$2(e))return 0;const t=r(e.lengths,4);return 32+r(e.coords,8)+t}e$1([d({constructOnly:!0})],g.prototype,"featureStore",void 0),e$1([d()],g.prototype,"tileInfo",void 0),e$1([d()],g.prototype,"extent",void 0),e$1([d()],g.prototype,"maximumByteSize",void 0),g=e$1([i$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],g);class S{constructor(e,t,s){this.data=e,this.objectIds=t,this.byteSize=s;}}class I{constructor(e,t,s){this.level=e,this.row=t,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null];}get hasChildren(){return !this.isLeaf&&(r$2(this.children[0])||r$2(this.children[1])||r$2(this.children[2])||r$2(this.children[3]))}}class j{constructor(e,t=[]){this.missingTiles=t,this.fullArea=0,this.coveredArea=0,this.fullArea=y$2(e.extent),this.coveredArea=this.fullArea;}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea;}}class w$1{constructor(e,t,s){this.tileInfo=e,this.extent=null,this.info=new j(t),r$2(s)&&(this.extent=c(s));}addMissing(e,t,s,i){const r={id:null,level:e,row:t,col:s};this.tileInfo.updateTileInfo(r,1),!r$2(r.extent)||r$2(this.extent)&&!k(this.extent,r.extent)||(this.info.missingTiles.push({data:r,resolution:i}),this.info.coveredArea-=y$2(r.extent));}}const F$1=.18751;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let w=class extends n$2.EventedAccessor{constructor(){super(...arguments),this.isInitializing=!0,this.whenSetup=A(),this.handles=new u$2,this.updatingHandles=new l$1,this.pendingApplyEdits=new Map;}get updating(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}destroy(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy();}async setup(e){const{geometryType:t,objectIdField:i,timeInfo:r,fields:s}=e.serviceInfo;return this.featureStore=new m$1({...e.serviceInfo,hasZ:!1,hasM:!1}),this.queryEngine=new V({spatialReference:e.spatialReference,featureStore:this.featureStore,geometryType:t,fields:s,hasZ:!1,hasM:!1,objectIdField:i,timeInfo:r?v$1.fromJSON(r):null}),this.featureFetcher=new S$1({store:new g({featureStore:this.featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:k$1.fromJSON(e.spatialReference),sourceSpatialReference:k$1.fromJSON(e.serviceInfo.spatialReference)}),this.handles.add([this.featureFetcher.watch("availability",(e=>this.emit("notify-availability",{availability:e})),!0),this.watch("updating",(()=>this.notifyUpdating()))]),this.whenSetup.resolve(),this.isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this.updatingHandles.addPromise(this.whenSetup.promise),this.updateFeatureFetcherConfiguration(e),{result:{}}}async fetchCandidates(e,t){await this.whenSetup.promise,h(t);return {result:await this.queryEngine.executeQueryForSnapping({point:e.point,distance:e.distance,types:e.types,query:r$2(e.filter)?e.filter:{where:"1=1"}},r$2(t)?t.signal:null)}}async updateTiles(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),h(t),this.featureFetcher.tileSize=e.tileSize,this.featureFetcher.tilesOfInterest=e.tiles,this.featureFetcher.tileInfo=r$2(e.tileInfo)?j$2.fromJSON(e.tileInfo):null,{result:{}}}async refresh(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),h(t),this.featureFetcher.refresh(),{result:{}}}async whenNotUpdating(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),h(t),await P(p$3(this,"updating"),t),{result:{}}}async getDebugInfo(e,t){return h(t),{result:this.featureFetcher.debugInfo}}async beginApplyEdits(e,t){this.updatingHandles.addPromise(this.whenSetup.promise),h(t);const i=A();return this.pendingApplyEdits.set(e.id,i),this.featureFetcher.applyEdits(i.promise),this.updatingHandles.addPromise(i.promise),{result:{}}}async endApplyEdits(e,t){const i=this.pendingApplyEdits.get(e.id);return i&&i.resolve(e.edits),h(t),{result:{}}}updateFeatureFetcherConfiguration(e){this.featureFetcher.filter=r$2(e.filter)?b.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters;}notifyUpdating(){this.emit("notify-updating",{updating:this.updating});}};function F(){return new w}e$1([d({readOnly:!0})],w.prototype,"updating",null),e$1([d()],w.prototype,"isInitializing",void 0),w=e$1([i$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],w);

export default F;
export { w as FeatureServiceSnappingSourceWorker };
