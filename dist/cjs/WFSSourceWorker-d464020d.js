'use strict';

const request = require('./MapView-1726f571.js');
const FeatureStore = require('./FeatureStore-2be9a989.js');
const projectionSupport = require('./projectionSupport-34535cf1.js');
const QueryEngine = require('./QueryEngine-943f89c4.js');
const geojson = require('./geojson-4c195237.js');
const sourceUtils = require('./sourceUtils-180f8d59.js');
const wfsUtils = require('./wfsUtils-a62490ef.js');
require('./index-fde8502c.js');
require('./PooledRBush-3cd5927c.js');
require('./centroid-07923388.js');
require('./json-2c41fbe0.js');
require('./WhereClause-ff555802.js');
require('./QueryEngineCapabilities-15e8d907.js');
require('./quantizationUtils-67099620.js');
require('./utils-c0fc50fd.js');
require('./ClassBreaksDefinition-842e0f6a.js');
require('./spatialQuerySupport-4bb13219.js');
require('./xmlUtils-8481ca21.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await wfsUtils.B(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await geojson.O(s),request.h(e);const i=geojson.L(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!request.E$1(this._queryEngine.spatialReference,request.c$15))for(const a of i)request.r(a.geometry)&&(a.geometry=request.et(projectionSupport.g(request.nt(a.geometry,this._queryEngine.geometryType,!1,!1),request.c$15,this._queryEngine.spatialReference)));let n=1;for(const r of i){const e={};sourceUtils.d(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=n++);}return i};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null;}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:n,fields:o,geometryType:u,featureType:p,objectIdField:h,customParameters:l}=e;this._featureType=p,this._customParameters=l,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new request.d$16(o),await this._checkProjection(n),request.h(t),this._queryEngine=new QueryEngine.V({fields:o,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:n,timeInfo:null,featureStore:new FeatureStore.m({geometryType:u,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(request.e$1(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new request.s$1("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){var s;return this._customParameters=r,null==(s=this._snapshotTask)||s.abort(),this._snapshotTask=request.F(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(r=>{this._queryEngine.featureStore.clear(),request.d$1(r)||request.s$2.getLogger("esri.layers.WFSLayer").error(new request.s$1("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await projectionSupport.f(request.c$15,t);}catch{throw new request.s$1("unsupported-projection","Projection not supported",{spatialReference:t})}}}

exports.default = E;
