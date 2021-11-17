import { av as h, r, aG as e, C as s, c8 as F, aI as d$2, f as s$1 } from './jsxFactory-ef3e403e.js';
import { ag as E$1, bR as c } from './unitUtils-8a2b838a.js';
import { e as et, n as nt } from './featureConversionUtils-a454d4b2.js';
import { m } from './FeatureStore-b436eda0.js';
import { g, f } from './projectionSupport-dc77c53c.js';
import { V } from './QueryEngine-f283c8cb.js';
import { O, L } from './geojson-74a8d8cd.js';
import { d } from './sourceUtils-c80ff89f.js';
import { B } from './wfsUtils-2c002da2.js';
import { d as d$1 } from './FieldsIndex-d76382ca.js';
import './index-5b4f4de1.js';
import './JSONSupport-a5eb98e7.js';
import './OptimizedFeature-20e2f9bb.js';
import './OptimizedFeatureSet-27736f1f.js';
import './PooledRBush-df0fc319.js';
import './quickselect-ccfd8cff.js';
import './centroid-f41fa1a8.js';
import './projection-0d4d5278.js';
import './mat4-fe6f4784.js';
import './json-cfa039ad.js';
import './MemCache-bf2be364.js';
import './normalizeUtils-9f7b714c.js';
import './ItemCache-3713f352.js';
import './WhereClause-3c12cf30.js';
import './_commonjsHelpers-020ca939.js';
import './QueryEngineCapabilities-d289cd19.js';
import './quantizationUtils-f8b2b60e.js';
import './utils-40c37ba2.js';
import './generateRendererUtils-b7d21cae.js';
import './colorRamps-a6280e46.js';
import './spatialQuerySupport-743081b3.js';
import './Scheduler-bf4dcdbd.js';
import './reactiveUtils-2b52b231.js';
import './xmlUtils-ed1df04b.js';
import './Field-c395cfbd.js';
import './fieldType-d6b0953a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await B(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await O(s),h(e);const i=L(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!E$1(this._queryEngine.spatialReference,c))for(const a of i)r(a.geometry)&&(a.geometry=et(g(nt(a.geometry,this._queryEngine.geometryType,!1,!1),c,this._queryEngine.spatialReference)));let n=1;for(const r of i){const e={};d(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=n++);}return i};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null;}async load(e$1,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:n,fields:o,geometryType:u,featureType:p,objectIdField:h$1,customParameters:l}=e$1;this._featureType=p,this._customParameters=l,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new d$1(o),await this._checkProjection(n),h(t),this._queryEngine=new V({fields:o,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h$1,spatialReference:n,timeInfo:null,featureStore:new m({geometryType:u,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(e(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){var s$2;return this._customParameters=r,null==(s$2=this._snapshotTask)||s$2.abort(),this._snapshotTask=F(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(r=>{this._queryEngine.featureStore.clear(),d$2(r)||s$1.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await f(c,t);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:t})}}}

export default E;
