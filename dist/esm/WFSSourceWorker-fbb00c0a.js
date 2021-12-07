import { h, br as E$1, dl as c, A as r, V as e, s, cu as F, b as d$2, c as s$1 } from './messageBundle-f75b4090.js';
import { e as et, n as nt } from './featureConversionUtils-cbd79ea2.js';
import { m } from './FeatureStore-72363bc6.js';
import { g, f } from './projectionSupport-1a26f2e9.js';
import { V } from './QueryEngine-5866832d.js';
import { O, L } from './geojson-5a4ac292.js';
import { d } from './sourceUtils-536cf595.js';
import { B } from './wfsUtils-40c8ed95.js';
import { d as d$1 } from './FieldsIndex-2a111e7e.js';
import './index-b157fcf2.js';
import './jsonUtils-13b1f6fd.js';
import './geometry-7e07b1ba.js';
import './OptimizedFeature-44d5df5b.js';
import './OptimizedFeatureSet-27736f1f.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './PooledRBush-f64ccc4a.js';
import './quickselect-ccfd8cff.js';
import './optimizedFeatureQueryEngineAdapter-4f73f201.js';
import './centroid-a2430753.js';
import './projection-f3d8779d.js';
import './unitUtils-38774114.js';
import './mat4-f34c6460.js';
import './geodesicConstants-54cb88d4.js';
import './json-cfa039ad.js';
import './MemCache-78a9f000.js';
import './normalizeUtils-25a1ce55.js';
import './ItemCache-5d2cf877.js';
import './WhereClause-a0e7b548.js';
import './QueryEngineCapabilities-d289cd19.js';
import './quantizationUtils-e08f723c.js';
import './utils-cd454be4.js';
import './ClassBreaksDefinition-14276201.js';
import './colorRamps-22c88e98.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './enumeration-d3301938.js';
import './Symbol-cad56b52.js';
import './spatialQuerySupport-8e60e1e7.js';
import './opacityUtils-5e864561.js';
import './Scheduler-3464f717.js';
import './reactiveUtils-8f9c3a3d.js';
import './debugFlags-e9d86cce.js';
import './xmlUtils-ed1df04b.js';
import './Field-bfaa8af9.js';
import './fieldType-66a19d8a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await B(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await O(s),h(e);const i=L(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!E$1(this._queryEngine.spatialReference,c))for(const a of i)r(a.geometry)&&(a.geometry=et(g(nt(a.geometry,this._queryEngine.geometryType,!1,!1),c,this._queryEngine.spatialReference)));let n=1;for(const r of i){const e={};d(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=n++);}return i};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null;}async load(e$1,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:n,fields:o,geometryType:u,featureType:p,objectIdField:h$1,customParameters:l}=e$1;this._featureType=p,this._customParameters=l,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new d$1(o),await this._checkProjection(n),h(t),this._queryEngine=new V({fields:o,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h$1,spatialReference:n,timeInfo:null,featureStore:new m({geometryType:u,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(e(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){var s$2;return this._customParameters=r,null==(s$2=this._snapshotTask)||s$2.abort(),this._snapshotTask=F(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(r=>{this._queryEngine.featureStore.clear(),d$2(r)||s$1.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await f(c,t);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:t})}}}

export default E;
