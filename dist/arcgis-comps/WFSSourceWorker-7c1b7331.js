import { h, r, c as e, a as s, by as F, d as d$2, g as s$1 } from './cast-e5ea2533.js';
import { E as E$1, D as c } from './Portal-f1457cb4.js';
import { e as et, n as nt } from './featureConversionUtils-dd47b9b4.js';
import { m } from './FeatureStore-61606ad6.js';
import { g, f } from './projectionSupport-7faa25d0.js';
import { V } from './QueryEngine-933fe28f.js';
import { O, L } from './geojson-d8377ab2.js';
import { d } from './sourceUtils-15fd5ebe.js';
import { B } from './wfsUtils-7f4fbe94.js';
import { d as d$1 } from './FieldsIndex-e09edd96.js';
import './JSONSupport-8dda8bae.js';
import './geometry-160ffbb5.js';
import './Polyline-56152656.js';
import './OptimizedFeature-53745eb6.js';
import './OptimizedFeatureSet-27736f1f.js';
import './Collection-ac20f1a1.js';
import './aaBoundingBox-e0a84875.js';
import './aaBoundingRect-2a187de3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './PooledRBush-ae56560b.js';
import './quickselect-ccfd8cff.js';
import './centroid-5b845b7c.js';
import './projection-cca7ffa7.js';
import './unitUtils-5dcccb3c.js';
import './mat4-0196b8fc.js';
import './assets-1ab0ccbe.js';
import './json-cfa039ad.js';
import './MemCache-d4727626.js';
import './normalizeUtils-eb3efd47.js';
import './ItemCache-58898df0.js';
import './WhereClause-e7087be7.js';
import './_commonjsHelpers-020ca939.js';
import './QueryEngineCapabilities-d289cd19.js';
import './quantizationUtils-97c07266.js';
import './utils-39ee8a5d.js';
import './generateRendererUtils-8e5bff36.js';
import './colorRamps-fcb1175a.js';
import './Color-ed0bfbe9.js';
import './colorUtils-37750ea3.js';
import './enumeration-da141e85.js';
import './Symbol-ac21e497.js';
import './spatialQuerySupport-8d141d72.js';
import './opacityUtils-5755cb64.js';
import './Scheduler-a964a3e2.js';
import './Handles-24a27aa9.js';
import './reactiveUtils-ab0efcb1.js';
import './watchUtils-08cf9d08.js';
import './xmlUtils-ed1df04b.js';
import './Field-67832b5b.js';
import './fieldType-7f6b02ef.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await B(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await O(s),h(e);const i=L(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!E$1(this._queryEngine.spatialReference,c))for(const a of i)r(a.geometry)&&(a.geometry=et(g(nt(a.geometry,this._queryEngine.geometryType,!1,!1),c,this._queryEngine.spatialReference)));let n=1;for(const r of i){const e={};d(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=n++);}return i};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null;}async load(e$1,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:n,fields:o,geometryType:u,featureType:p,objectIdField:h$1,customParameters:l}=e$1;this._featureType=p,this._customParameters=l,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new d$1(o),await this._checkProjection(n),h(t),this._queryEngine=new V({fields:o,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h$1,spatialReference:n,timeInfo:null,featureStore:new m({geometryType:u,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(e(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){var s$2;return this._customParameters=r,null==(s$2=this._snapshotTask)||s$2.abort(),this._snapshotTask=F(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(r=>{this._queryEngine.featureStore.clear(),d$2(r)||s$1.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await f(c,t);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:t})}}}

export default E;
