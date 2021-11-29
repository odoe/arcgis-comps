import{e as t,d as s,i as e,p as i,dR as r,gY as n,t as h,F as a,ec as o,u as c,T as u,gZ as l,r as f,aK as d,g_ as p,g$ as y,o as g,cT as m,cO as w,w as v,h0 as S,h1 as b,h2 as F,h3 as I,eV as T,fA as O,fP as C,h4 as M,h5 as P,ak as j,h6 as x,P as R,h7 as A,h8 as E,k,h as q,c as z,fE as N,h9 as J}from"./p-5420851c.js";import{e as B,m as V}from"./p-e11b9b52.js";import{V as $}from"./p-21acbbae.js";import"./p-53bb6ab4.js";import"./p-ff251557.js";import"./p-c3fd4463.js";import"./p-c0f8009d.js";import"./p-6df976c7.js";import"./p-50ff864e.js";import"./p-06d309e6.js";import"./p-8bf8e457.js";import"./p-c3449e4f.js";import"./p-0a5ba773.js";import"./p-03389806.js";let G=class extends i{constructor(){super(...arguments),this.updating=!1,this.pending=[]}push(t,s){this.pending.push({promise:t,callback:s}),1===this.pending.length&&this.process()}process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const t=this.pending[0];t.promise.then((s=>t.callback(s))).catch((()=>{})).then((()=>{this.pending.shift(),this.process()}))}};t([s()],G.prototype,"updating",void 0),G=t([e("esri.core.AsyncSequence")],G);class Z{constructor(t,s){this.data=t,this.resolution=s,this.state={type:0},this.alive=!0}process(t){switch(this.state.type){case 0:return this.state=this.gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case 1:case 3:break;case 2:return this.state=this.gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case 4:this.state=this.goToDone(this.state,t)}return null}get debugInfo(){return{data:this.data,featureCount:this.featureCount,state:this.stateToString}}get featureCount(){switch(this.state.type){case 0:case 1:return 0;case 2:return this.state.featureCount;case 3:return this.state.previous.featureCount;case 4:return this.state.features.length;case 5:return this.state.previous.features.length}}get stateToString(){switch(this.state.type){case 0:return"created";case 1:return"fetch-count";case 2:return"fetched-count";case 3:return"fetch-features";case 4:return"fetched-features";case 5:return"done"}}gotoFetchCount(t,s){return{type:1,previous:t,task:r((async t=>{const e=await n(s.fetchCount(this,t));1===this.state.type&&(this.state=this.gotoFetchedCount(this.state,e.ok?e.value:1/0))}))}}gotoFetchedCount(t,s){return{type:2,featureCount:s,previous:t}}gotoFetchFeatures(t,s){return{type:3,previous:t,task:r((async e=>{const i=await n(s.fetchFeatures(this,t.featureCount,e));3===this.state.type&&(this.state=this.gotoFetchedFeatures(this.state,i.ok?i.value:[]))}))}}gotoFetchedFeatures(t,s){return{type:4,previous:t,features:s}}goToDone(t,s){return s.finish(this,t.features),{type:5,previous:t}}reset(){const t=this.state;switch(this.state={type:0},t.type){case 0:case 2:case 4:case 5:break;case 1:case 3:t.task.abort()}}intersects(t){return!(!h(t)&&this.data.extent)||(a(t,D),o(this.data.extent,D))}}const D=c(),L=u.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");let Q=class extends l{constructor(t){super(t),this.tilesOfInterest=[],this.availability=0,this.pendingTiles=new Map,this.pendingEdits=new G,this.pendingEditsAbortController=new AbortController}get minimumVerticesPerFeature(){var t;switch(null==(t=this.store)?void 0:t.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(t){const s=this._get("filter"),e=this.filterProperties(t);JSON.stringify(s)!==JSON.stringify(e)&&this._set("filter",e)}set customParameters(t){const s=this._get("customParameters");JSON.stringify(s)!==JSON.stringify(t)&&this._set("customParameters",t)}get configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(t){const s=this._get("tileInfo");s!==t&&(f(t)&&f(s)&&JSON.stringify(t)===JSON.stringify(s)||(this._set("tileInfo",t),this.store.tileInfo=t))}set tileSize(t){this._get("tileSize")!==t&&this._set("tileSize",t)}get updating(){return this.updatingHandles.updating||this.pendingEdits.updating}initialize(){this.initializeFetchExtent(),this.updatingHandles.add(this,"configuration",(()=>this.refresh())),this.updatingHandles.add(this,"tilesOfInterest",((t,s)=>{d(t,s,(({id:t},{id:s})=>t===s))||this.process()}),1)}destroy(){this.pendingTiles.forEach((t=>this.deletePendingTile(t))),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null}refresh(){this.store.refresh(),this.pendingTiles.forEach((t=>this.deletePendingTile(t))),this.process()}applyEdits(t){this.pendingEdits.push(t,(async t=>{if(0===t.addedFeatures.length&&0===t.updatedFeatures.length&&0===t.deletedFeatures.length)return;for(const[,t]of this.pendingTiles)t.reset();const s={...t,deletedFeatures:t.deletedFeatures.map((({objectId:t,globalId:s})=>t&&-1!==t?t:this.lookupObjectIdByGlobalId(s)))};await this.updatingHandles.addPromise(this.store.processEdits(s,((t,s)=>this.queryFeaturesById(t,s)),this.pendingEditsAbortController.signal)),this.processPendingTiles()}))}initializeFetchExtent(){if(!this.capabilities.query.supportsExtent)return;const t=r((async t=>{try{var s;const e=await p(this.url,new y({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this.configuration.customParameters,signal:t});this.store.extent=g.fromJSON(null==(s=e.data)?void 0:s.extent)}catch(t){m(t),L.warn("Failed to fetch data extent",t)}}));this.updatingHandles.addPromise(t.promise.then((()=>this.process()))),this.handles.add(w((()=>t.abort())))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map((t=>t.debugInfo)),storedTiles:this.store.debugInfo}}process(){this.markTilesNotAlive(),this.createPendingTiles(),this.deletePendingTiles(),this.processPendingTiles()}markTilesNotAlive(){for(const[,t]of this.pendingTiles)t.alive=!1}createPendingTiles(){const t=this.collectMissingTilesInfo();if(this.setAvailability(h(t)?1:t.coveredArea/t.fullArea),!h(t))for(const{data:s,resolution:e}of t.missingTiles){const t=this.pendingTiles.get(s.id);t?(t.resolution=e,t.alive=!0):this.createPendingTile(s,e)}}collectMissingTilesInfo(){let t=null;for(let s=this.tilesOfInterest.length-1;s>=0;s--){const e=this.store.process(this.tilesOfInterest[s],((t,s)=>this.verifyTileComplexity(t,s)));h(t)?t=e:t.prepend(e)}return t}deletePendingTiles(){for(const[,t]of this.pendingTiles)t.alive||this.deletePendingTile(t)}processPendingTiles(){const t={fetchCount:(t,s)=>this.fetchCount(t,s),fetchFeatures:(t,s,e)=>this.fetchFeatures(t,s,e),finish:(t,s)=>this.finishPendingTile(t,s),resume:()=>this.processPendingTiles()};if(this.ensureFetchAllCounts(t))for(const[,s]of this.pendingTiles)this.verifyTileComplexity(this.store.getFeatureCount(s.data),s.resolution)&&this.updatingHandles.addPromise(s.process(t))}verifyTileComplexity(t,s){return this.verifyVertexComplexity(t)&&this.verifyFeatureDensity(t,s)}verifyVertexComplexity(t){return t*this.minimumVerticesPerFeature<W}verifyFeatureDensity(t,s){if(h(this.tileInfo))return!1;const e=this.tileSize*s;return t*(K/(e*e))<Y}ensureFetchAllCounts(t){let s=!0;for(const[,e]of this.pendingTiles)e.state.type<2&&this.updatingHandles.addPromise(e.process(t)),e.state.type<=1&&(s=!1);return s}finishPendingTile(t,s){this.store.add(t.data,s),this.deletePendingTile(t),this.updateAvailability()}updateAvailability(){const t=this.collectMissingTilesInfo();this.setAvailability(h(t)?1:t.coveredArea/t.fullArea)}setAvailability(t){this._set("availability",t)}createPendingTile(t,s){const e=new Z(t,s);return this.pendingTiles.set(t.id,e),e}deletePendingTile(t){t.reset(),this.pendingTiles.delete(t.data.id)}async fetchCount(t,s){return this.store.fetchCount(t.data,this.url,this.createCountQuery(t),{query:this.customParameters,timeout:U,signal:s})}async fetchFeatures(t,s,e){let i,r=0,n=0,h=s;for(;;){const a=this.createFeaturesQuery(t),o=this.setPagingParameters(a,r,h),{features:c,exceededTransferLimit:u}=await this.queryFeatures(a,e);if(o&&(r+=v(a.num)),n+=c.length,i=i?i.concat(c):c,h=s-n,!o||!u||h<=0)return i}}filterProperties(t){return h(t)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:t.where||"1=1",timeExtent:t.timeExtent,gdbVersion:t.gdbVersion}}lookupObjectIdByGlobalId(t){const s=this.globalIdField,e=this.objectIdField;if(h(s))throw new Error("Expected globalIdField to be defined");let i=null;if(this.store.featureStore.forEach((r=>{var n;t===r.attributes[s]&&(i=null!=(n=r.objectId)?n:r.attributes[e])})),h(i))throw new Error(`Expected to find a feature with globalId ${t}`);return i}queryFeaturesById(t,s){const e=this.createFeaturesQuery(null);return e.objectIds=t,this.queryFeatures(e,s)}queryFeatures(t,s){return this.capabilities.query.supportsFormatPBF?this.queryFeaturesPBF(t,s):this.queryFeaturesJSON(t,s)}async queryFeaturesPBF(t,s){const{sourceSpatialReference:e}=this,{data:i}=await S(this.url,t,new b({sourceSpatialReference:e}),{query:this.configuration.customParameters,timeout:U,signal:s});return F(i)}async queryFeaturesJSON(t,s){const{sourceSpatialReference:e}=this,{data:i}=await I(this.url,t,e,{query:this.configuration.customParameters,timeout:U,signal:s});return T(i,this.objectIdField)}createCountQuery(t){const s=this.createBaseQuery(t);return this.capabilities.query.supportsCacheHint&&(s.cacheHint=!0),s}createFeaturesQuery(t){const s=this.createBaseQuery(t);return s.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],s.returnGeometry=!0,f(t)&&(this.capabilities.query.supportsResultType?s.resultType="tile":this.capabilities.query.supportsCacheHint&&(s.cacheHint=!0)),s}createBaseQuery(t){const s=new y({returnZ:!1,returnM:!1,geometry:f(this.tileInfo)&&f(t)?O(t.data.extent,this.tileInfo.spatialReference):void 0}),e=this.configuration.filter;return f(e)&&(s.where=e.where,s.gdbVersion=e.gdbVersion,s.timeExtent=e.timeExtent),s.outSpatialReference=this.spatialReference,s}setPagingParameters(t,s,e){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:i,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:h,supportsResultType:a}=this.capabilities.query,o=i?y.MAX_MAX_RECORD_COUNT_FACTOR:1,c=o*((a||r)&&n?n:h||H);return t.start=s,i?(t.maxRecordCountFactor=Math.min(o,Math.ceil(e/c)),t.num=Math.min(e,t.maxRecordCountFactor*c)):t.num=Math.min(e,c),!0}};t([s({constructOnly:!0})],Q.prototype,"url",void 0),t([s({constructOnly:!0})],Q.prototype,"objectIdField",void 0),t([s({constructOnly:!0})],Q.prototype,"globalIdField",void 0),t([s({constructOnly:!0})],Q.prototype,"capabilities",void 0),t([s({constructOnly:!0})],Q.prototype,"sourceSpatialReference",void 0),t([s({constructOnly:!0})],Q.prototype,"spatialReference",void 0),t([s({constructOnly:!0})],Q.prototype,"store",void 0),t([s({readOnly:!0})],Q.prototype,"minimumVerticesPerFeature",null),t([s()],Q.prototype,"filter",null),t([s()],Q.prototype,"customParameters",null),t([s({readOnly:!0})],Q.prototype,"configuration",null),t([s()],Q.prototype,"tileInfo",null),t([s()],Q.prototype,"tileSize",null),t([s()],Q.prototype,"tilesOfInterest",void 0),t([s({readOnly:!0})],Q.prototype,"updating",null),t([s({readOnly:!0})],Q.prototype,"availability",void 0),Q=t([e("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],Q);const H=2e3,U=6e5,W=1e6,K=25,Y=1;function _(t){return 32+t.length}function X(t,s){return 32+t.length*s}class tt{constructor(){this._store=new Map,this._byteSize=0}set(t,s){this.delete(t),this._store.set(t,s),this._byteSize+=s.byteSize}delete(t){const s=this._store.get(t);return!!this._store.delete(t)&&(this._byteSize-=s.byteSize,!0)}get(t){return this.used(t),this._store.get(t)}has(t){return this.used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,s){for(const[e,i]of this._store){if(this._byteSize<=t)break;this.delete(e),s(i)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}used(t){const s=this._store.get(t);s&&(this._store.delete(t),this._store.set(t,s))}}let st=class extends i{constructor(t){super(t),this.tileInfo=null,this.extent=null,this.maximumByteSize=10485760,this.tileBounds=new B,this.tiles=new tt,this.refCounts=new Map,this.tileFeatureCounts=new Map,this.tmpBoundingRect=c()}add(t,s){const e=[];for(const t of s)0===this.referenceFeature(t.objectId)&&e.push(t);this.addTileStorage(t,new Set(s.map((({objectId:t})=>t))),function(t){return t.reduce(((t,s)=>t+function(t){return 32+function(t){if(h(t))return 0;const s=X(t.lengths,4);return 32+X(t.coords,8)+s}(t.geometry)+function(t){if(!t)return 0;let s=32;for(const e in t)if(t.hasOwnProperty(e)){const i=t[e];switch(typeof i){case"string":s+=_(i);break;case"number":s+=16;break;case"boolean":s+=4}}return s}(t.attributes)}(s)),0)}(s)),this.featureStore.addMany(e),this.tiles.applyByteSizeLimit(this.maximumByteSize,(t=>this.removeTileStorage(t)))}destroy(){this.clear(),this.tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear()}refresh(){this.clear(),this.tileFeatureCounts.clear()}processEdits(t,s,e){return this.processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)),this.processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures),s,e)}addTileStorage(t,s,e){this.tiles.set(t.id,new et(t,s,e)),this.tileBounds.set(t.id,t.extent),this.tileFeatureCounts.set(t.id,s.size)}remove({id:t}){const s=this.tiles.get(t);s&&this.removeTileStorage(s)}removeTileStorage(t){const s=[];for(const e of t.objectIds)1===this.unreferenceFeature(e)&&s.push(e);this.featureStore.removeManyById(s);const e=t.data.id;this.tiles.delete(e),this.tileBounds.delete(e)}processEditsDelete(t){this.featureStore.removeManyById(t);for(const[,s]of this.tiles){for(const e of t)s.objectIds.delete(e);this.tileFeatureCounts.set(s.data.id,s.objectIds.size)}for(const s of t)this.refCounts.delete(s)}async processEditsRefetch(t,s,e){const i=(await s(t,e)).features,{hasZ:r,hasM:n}=this.featureStore;for(const t of i){const s=C(this.tmpBoundingRect,t.geometry,r,n);h(s)||this.tileBounds.forEachInBounds(s,(s=>{const e=this.tiles.get(s);this.featureStore.add(t),e.objectIds.has(t.objectId)||(e.objectIds.add(t.objectId),this.referenceFeature(t.objectId),this.tileFeatureCounts.set(e.data.id,e.objectIds.size))}))}}process(t,s=(()=>!0)){if(h(this.tileInfo)||!t.extent||f(this.extent)&&!o(a(this.extent,this.tmpBoundingRect),t.extent))return new rt(t);if(this.tiles.has(t.id))return new rt(t);const e=this.createTileTree(t,this.tileInfo);return this.simplify(e,s,null,0,1),this.collectMissingTiles(t,e,this.tileInfo)}get debugInfo(){return Array.from(this.tiles.values()).map((({data:t})=>({data:t,featureCount:this.tileFeatureCounts.get(t.id)||0})))}getFeatureCount(t){const s=this.tileFeatureCounts.get(t.id);return null!=s?s:0}async fetchCount(t,s,e,i){const r=this.tileFeatureCounts.get(t.id);if(null!=r)return r;const n=await M(s,e,i);return this.tileFeatureCounts.set(t.id,n.data.count),n.data.count}createTileTree(t,s){const e=new it(t.level,t.row,t.col);return s.updateTileInfo(e,1),this.tileBounds.forEachInBounds(t.extent,(i=>{const r=this.tiles.get(i).data;this.tilesAreRelated(t,r)&&this.populateChildren(e,r,s,this.tileFeatureCounts.get(r.id)||0)})),e}tilesAreRelated(t,s){if(!t||!s)return!1;if(t.level===s.level)return t.row===s.row&&t.col===s.col;const e=t.level<s.level,i=e?t:s,r=e?s:t,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}populateChildren(t,s,e,i){const r=s.level-t.level-1;if(r<0)return void(t.isLeaf=!0);const n=s.row>>r,h=s.col>>r,a=h-(t.col<<1)+(n-(t.row<<1)<<1),o=t.children[a];if(f(o))this.populateChildren(o,s,e,i);else{const r=new it(t.level+1,n,h);e.updateTileInfo(r,1),t.children[a]=r,this.populateChildren(r,s,e,i)}}simplify(t,s,e,i,r){const n=r*r;if(t.isLeaf)return s(this.getFeatureCount(t),r)?0:(this.remove(t),f(e)&&(e.children[i]=null),n);const h=r/2,a=h*h;let o=0;for(let e=0;e<t.children.length;e++){const i=t.children[e];o+=f(i)?this.simplify(i,s,t,e,h):a}return 0===o?this.mergeChildren(t):1-o/n<ht&&(this.purge(t),f(e)&&(e.children[i]=null),o=n),o}mergeChildren(t){const s=new Set;let e=0;this.forEachLeaf(t,(t=>{const i=this.tiles.get(t.id);if(i){e+=i.byteSize;for(const t of i.objectIds)s.has(t)||(s.add(t),this.referenceFeature(t));this.remove(t)}})),this.addTileStorage(t,s,e),t.isLeaf=!0,t.children[0]=t.children[1]=t.children[2]=t.children[3]=null,this.tileFeatureCounts.set(t.id,s.size)}forEachLeaf(t,s){for(const e of t.children)h(e)||(e.isLeaf?s(e):this.forEachLeaf(e,s))}purge(t){if(!h(t))if(t.isLeaf)this.remove(t);else for(let s=0;s<t.children.length;s++)this.purge(t.children[s]),t.children[s]=null}collectMissingTiles(t,s,e){const i=new nt(e,t,this.extent);return this.collectMissingTilesRecurse(s,i,1),i.info}collectMissingTilesRecurse(t,s,e){if(t.isLeaf)return;if(!t.hasChildren)return void s.addMissing(t.level,t.row,t.col,e);const i=e/2;for(let e=0;e<t.children.length;e++){const r=t.children[e];h(r)?s.addMissing(t.level+1,(t.row<<1)+((2&e)>>1),(t.col<<1)+(1&e),i):this.collectMissingTilesRecurse(r,s,i)}}referenceFeature(t){const s=(this.refCounts.get(t)||0)+1;return this.refCounts.set(t,s),1===s?0:2}unreferenceFeature(t){const s=(this.refCounts.get(t)||0)-1;return 0===s?(this.refCounts.delete(t),1):(s>0&&this.refCounts.set(t,s),2)}get test(){return{tiles:Array.from(this.tiles.values()).map((t=>`${t.data.id}:[${Array.from(t.objectIds)}]`)),featureReferences:Array.from(this.refCounts.keys()).map((t=>`${t}:${this.refCounts.get(t)}`))}}};t([s({constructOnly:!0})],st.prototype,"featureStore",void 0),t([s()],st.prototype,"tileInfo",void 0),t([s()],st.prototype,"extent",void 0),t([s()],st.prototype,"maximumByteSize",void 0),st=t([e("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],st);class et{constructor(t,s,e){this.data=t,this.objectIds=s,this.byteSize=e}}class it{constructor(t,s,e){this.level=t,this.row=s,this.col=e,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(f(this.children[0])||f(this.children[1])||f(this.children[2])||f(this.children[3]))}}class rt{constructor(t,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=P(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class nt{constructor(t,s,e){this.tileInfo=t,this.extent=null,this.info=new rt(s),f(e)&&(this.extent=a(e))}addMissing(t,s,e,i){const r={id:null,level:t,row:s,col:e};this.tileInfo.updateTileInfo(r,1),!f(r.extent)||f(this.extent)&&!o(this.extent,r.extent)||(this.info.missingTiles.push({data:r,resolution:i}),this.info.coveredArea-=P(r.extent))}}const ht=.18751;let at=class extends j.EventedAccessor{constructor(){super(...arguments),this.isInitializing=!0,this.whenSetup=x(),this.handles=new R,this.updatingHandles=new A,this.pendingApplyEdits=new Map}get updating(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}destroy(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy()}async setup(t){const{geometryType:s,objectIdField:e,timeInfo:i,fields:r}=t.serviceInfo;return this.featureStore=new V({...t.serviceInfo,hasZ:!1,hasM:!1}),this.queryEngine=new $({spatialReference:t.spatialReference,featureStore:this.featureStore,geometryType:s,fields:r,hasZ:!1,hasM:!1,objectIdField:e,timeInfo:i?E.fromJSON(i):null}),this.featureFetcher=new Q({store:new st({featureStore:this.featureStore}),url:t.serviceInfo.url,objectIdField:t.serviceInfo.objectIdField,globalIdField:t.serviceInfo.globalIdField,capabilities:t.serviceInfo.capabilities,spatialReference:k.fromJSON(t.spatialReference),sourceSpatialReference:k.fromJSON(t.serviceInfo.spatialReference)}),this.handles.add([this.featureFetcher.watch("availability",(t=>this.emit("notify-availability",{availability:t})),!0),this.watch("updating",(()=>this.notifyUpdating()))]),this.whenSetup.resolve(),this.isInitializing=!1,this.configure(t.configuration)}async configure(t){return await this.updatingHandles.addPromise(this.whenSetup.promise),this.updateFeatureFetcherConfiguration(t),{result:{}}}async fetchCandidates(t,s){return await this.whenSetup.promise,q(s),{result:await this.queryEngine.executeQueryForSnapping({point:t.point,distance:t.distance,types:t.types,query:f(t.filter)?t.filter:{where:"1=1"}},f(s)?s.signal:null)}}async updateTiles(t,s){return await this.updatingHandles.addPromise(this.whenSetup.promise),q(s),this.featureFetcher.tileSize=t.tileSize,this.featureFetcher.tilesOfInterest=t.tiles,this.featureFetcher.tileInfo=f(t.tileInfo)?z.fromJSON(t.tileInfo):null,{result:{}}}async refresh(t,s){return await this.updatingHandles.addPromise(this.whenSetup.promise),q(s),this.featureFetcher.refresh(),{result:{}}}async whenNotUpdating(t,s){return await this.updatingHandles.addPromise(this.whenSetup.promise),q(s),await N(J(this,"updating"),s),{result:{}}}async getDebugInfo(t,s){return q(s),{result:this.featureFetcher.debugInfo}}async beginApplyEdits(t,s){this.updatingHandles.addPromise(this.whenSetup.promise),q(s);const e=x();return this.pendingApplyEdits.set(t.id,e),this.featureFetcher.applyEdits(e.promise),this.updatingHandles.addPromise(e.promise),{result:{}}}async endApplyEdits(t,s){const e=this.pendingApplyEdits.get(t.id);return e&&e.resolve(t.edits),q(s),{result:{}}}updateFeatureFetcherConfiguration(t){this.featureFetcher.filter=f(t.filter)?y.fromJSON(t.filter):null,this.featureFetcher.customParameters=t.customParameters}notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};function ot(){return new at}t([s({readOnly:!0})],at.prototype,"updating",null),t([s()],at.prototype,"isInitializing",void 0),at=t([e("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],at);export default ot;export{at as FeatureServiceSnappingSourceWorker}