'use strict';

const request = require('./messageBundle-8be88d04.js');
const featureConversionUtils = require('./featureConversionUtils-df21e951.js');
const FeatureStore = require('./FeatureStore-bb1fc704.js');
const projectionSupport = require('./projectionSupport-7159f0ef.js');
const QueryEngine = require('./QueryEngine-d6177b5a.js');
const geojson = require('./geojson-c71d572b.js');
const sourceUtils = require('./sourceUtils-4525ace4.js');
const wfsUtils = require('./wfsUtils-99b7b121.js');
const FieldsIndex = require('./FieldsIndex-664af19b.js');
require('./index-fde8502c.js');
require('./jsonUtils-b6068079.js');
require('./geometry-ef17530a.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./PooledRBush-793d5c9f.js');
require('./quickselect-d3f68f5a.js');
require('./optimizedFeatureQueryEngineAdapter-32c6c975.js');
require('./centroid-d874c2ee.js');
require('./projection-b19710fa.js');
require('./unitUtils-083cb8d0.js');
require('./mat4-f68486bc.js');
require('./geodesicConstants-047d586a.js');
require('./json-2c41fbe0.js');
require('./MemCache-7f5503ec.js');
require('./normalizeUtils-a793b472.js');
require('./ItemCache-149fdb6e.js');
require('./WhereClause-f1cc2353.js');
require('./QueryEngineCapabilities-15e8d907.js');
require('./quantizationUtils-d1d9c03e.js');
require('./utils-16feefb0.js');
require('./ClassBreaksDefinition-fc75df48.js');
require('./colorRamps-d0c2cb9d.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./enumeration-f235fe07.js');
require('./Symbol-f0556e23.js');
require('./spatialQuerySupport-16372b87.js');
require('./opacityUtils-f2e4b347.js');
require('./Scheduler-72cbcf2a.js');
require('./reactiveUtils-ef5dccea.js');
require('./debugFlags-5e6b0151.js');
require('./xmlUtils-8481ca21.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await wfsUtils.B(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await geojson.O(s),request.h(e);const i=geojson.L(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!request.E$2(this._queryEngine.spatialReference,request.c$6))for(const a of i)request.r(a.geometry)&&(a.geometry=featureConversionUtils.et(projectionSupport.g(featureConversionUtils.nt(a.geometry,this._queryEngine.geometryType,!1,!1),request.c$6,this._queryEngine.spatialReference)));let n=1;for(const r of i){const e={};sourceUtils.d(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=n++);}return i};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null;}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:n,fields:o,geometryType:u,featureType:p,objectIdField:h,customParameters:l}=e;this._featureType=p,this._customParameters=l,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new FieldsIndex.d(o),await this._checkProjection(n),request.h(t),this._queryEngine=new QueryEngine.V({fields:o,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:n,timeInfo:null,featureStore:new FeatureStore.m({geometryType:u,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(request.e$2(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new request.s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){var s;return this._customParameters=r,null==(s=this._snapshotTask)||s.abort(),this._snapshotTask=request.F$1(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(r=>{this._queryEngine.featureStore.clear(),request.d$1(r)||request.s$1.getLogger("esri.layers.WFSLayer").error(new request.s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await projectionSupport.f(request.c$6,t);}catch{throw new request.s("unsupported-projection","Projection not supported",{spatialReference:t})}}}

exports.default = E;
