import { ae as h, r, _ as e, m as s, b_ as F, N as d$2, v as s$1 } from './messageBundle-8a146a9b.js';
import { a2 as E$1, bL as c } from './unitUtils-c707ba3c.js';
import { e as et, n as nt } from './featureConversionUtils-e2de20bf.js';
import { m } from './FeatureStore-8643de6a.js';
import { g, f } from './projectionSupport-fef98a1d.js';
import { V } from './QueryEngine-8543a4c7.js';
import { O, L } from './geojson-c1a19a97.js';
import { d } from './sourceUtils-bbb849c1.js';
import { B } from './wfsUtils-5bc212d8.js';
import { d as d$1 } from './FieldsIndex-041474f9.js';
import './index-41925fe8.js';
import './JSONSupport-4e29e63d.js';
import './OptimizedFeature-d5cd2d1c.js';
import './OptimizedFeatureSet-27736f1f.js';
import './aaBoundingRect-6f84e6b7.js';
import './PooledRBush-e90d4648.js';
import './quickselect-ccfd8cff.js';
import './centroid-8cfd4f76.js';
import './projection-b812ba08.js';
import './mat4-1ee7ce2f.js';
import './json-cfa039ad.js';
import './MemCache-73bb45e2.js';
import './normalizeUtils-c91b4ce9.js';
import './ItemCache-fb7de9d2.js';
import './WhereClause-cbc08992.js';
import './QueryEngineCapabilities-d289cd19.js';
import './quantizationUtils-af5d2b53.js';
import './utils-1621b36a.js';
import './ClassBreaksDefinition-ca9f64ab.js';
import './colorRamps-b0e37c54.js';
import './spatialQuerySupport-dacdfdec.js';
import './Scheduler-9fe99f02.js';
import './reactiveUtils-a5f838c7.js';
import './xmlUtils-ed1df04b.js';
import './Field-fbfaf20d.js';
import './fieldType-f80f0b3d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await B(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await O(s),h(e);const i=L(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!E$1(this._queryEngine.spatialReference,c))for(const a of i)r(a.geometry)&&(a.geometry=et(g(nt(a.geometry,this._queryEngine.geometryType,!1,!1),c,this._queryEngine.spatialReference)));let n=1;for(const r of i){const e={};d(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=n++);}return i};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null;}async load(e$1,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:n,fields:o,geometryType:u,featureType:p,objectIdField:h$1,customParameters:l}=e$1;this._featureType=p,this._customParameters=l,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new d$1(o),await this._checkProjection(n),h(t),this._queryEngine=new V({fields:o,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h$1,spatialReference:n,timeInfo:null,featureStore:new m({geometryType:u,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(e(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){var s$2;return this._customParameters=r,null==(s$2=this._snapshotTask)||s$2.abort(),this._snapshotTask=F(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(r=>{this._queryEngine.featureStore.clear(),d$2(r)||s$1.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await f(c,t);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:t})}}}

export default E;
