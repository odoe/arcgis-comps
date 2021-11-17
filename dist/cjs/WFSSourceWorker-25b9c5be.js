'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const featureConversionUtils = require('./featureConversionUtils-e6cca372.js');
const FeatureStore = require('./FeatureStore-5620a7aa.js');
const projectionSupport = require('./projectionSupport-0d87fa93.js');
const QueryEngine = require('./QueryEngine-0457e03d.js');
const geojson = require('./geojson-4f6a3c1a.js');
const sourceUtils = require('./sourceUtils-7787078b.js');
const wfsUtils = require('./wfsUtils-0c161133.js');
const FieldsIndex = require('./FieldsIndex-8c8f3ac6.js');
require('./index-57f2cfbb.js');
require('./JSONSupport-53c01d03.js');
require('./OptimizedFeature-cf019b37.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./aaBoundingRect-7e7e678f.js');
require('./PooledRBush-a8f47c18.js');
require('./quickselect-d3f68f5a.js');
require('./centroid-fbe1334b.js');
require('./projection-e04cb9d0.js');
require('./mat4-1439266d.js');
require('./json-2c41fbe0.js');
require('./MemCache-1ae72e1e.js');
require('./normalizeUtils-b6002011.js');
require('./ItemCache-c32783d3.js');
require('./WhereClause-f18f6e56.js');
require('./QueryEngineCapabilities-15e8d907.js');
require('./quantizationUtils-7dfad3c7.js');
require('./utils-82b753c8.js');
require('./ClassBreaksDefinition-d3f3f8af.js');
require('./colorRamps-c066f1f7.js');
require('./spatialQuerySupport-3ae725d8.js');
require('./Scheduler-940b6f3b.js');
require('./reactiveUtils-9e33ad73.js');
require('./xmlUtils-8481ca21.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await wfsUtils.B(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await geojson.O(s),request.h(e);const i=geojson.L(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!unitUtils.E(this._queryEngine.spatialReference,unitUtils.c$15))for(const a of i)request.r(a.geometry)&&(a.geometry=featureConversionUtils.et(projectionSupport.g(featureConversionUtils.nt(a.geometry,this._queryEngine.geometryType,!1,!1),unitUtils.c$15,this._queryEngine.spatialReference)));let n=1;for(const r of i){const e={};sourceUtils.d(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=n++);}return i};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null;}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:n,fields:o,geometryType:u,featureType:p,objectIdField:h,customParameters:l}=e;this._featureType=p,this._customParameters=l,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new FieldsIndex.d(o),await this._checkProjection(n),request.h(t),this._queryEngine=new QueryEngine.V({fields:o,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:n,timeInfo:null,featureStore:new FeatureStore.m({geometryType:u,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(request.e$3(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new request.s$1("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){var s;return this._customParameters=r,null==(s=this._snapshotTask)||s.abort(),this._snapshotTask=request.F$1(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(r=>{this._queryEngine.featureStore.clear(),request.d$2(r)||request.s$2.getLogger("esri.layers.WFSLayer").error(new request.s$1("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await projectionSupport.f(unitUtils.c$15,t);}catch{throw new request.s$1("unsupported-projection","Projection not supported",{spatialReference:t})}}}

exports.default = E;
