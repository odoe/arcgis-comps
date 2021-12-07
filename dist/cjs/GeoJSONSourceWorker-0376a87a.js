'use strict';

const request = require('./messageBundle-8be88d04.js');
const jsonUtils = require('./jsonUtils-b6068079.js');
const featureConversionUtils = require('./featureConversionUtils-df21e951.js');
const FeatureStore = require('./FeatureStore-bb1fc704.js');
const projectionSupport = require('./projectionSupport-7159f0ef.js');
const QueryEngine = require('./QueryEngine-d6177b5a.js');
const geojson = require('./geojson-c71d572b.js');
const clientSideDefaults = require('./clientSideDefaults-65642e53.js');
const sourceUtils = require('./sourceUtils-4525ace4.js');
const FieldsIndex = require('./FieldsIndex-664af19b.js');
const fieldType = require('./fieldType-32f95259.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
require('./index-fde8502c.js');
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
require('./Scheduler-72cbcf2a.js');
require('./reactiveUtils-ef5dccea.js');
require('./debugFlags-5e6b0151.js');
require('./defaultsJSON-0cdf7a99.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const C={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class O{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null;}async load(e,s={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const i=[];await this._checkProjection(e.spatialReference);let r=null;e.url&&(r=await this._fetch(null==s?void 0:s.signal));const n=geojson.T(r,{geometryType:e.geometryType}),a=e.fields||n.fields||[],l=null!=e.hasZ?e.hasZ:n.hasZ,u=n.geometryType,d=e.objectIdField||n.objectIdFieldName||"__OBJECTID",p=e.spatialReference||request.c$6;let c=e.timeInfo;a===n.fields&&n.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n.unknownFields}});let y=a.find((e=>e.name===d));y?("esriFieldTypeString"!==y.type&&(y.type="esriFieldTypeOID"),y.editable=!1,y.nullable=!1):(y={alias:d,name:d,type:"string"===n.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},a.unshift(y));const m={};for(const o of a){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),!o.name)throw new request.s("geojson-layer:invalid-field-name","field name is missing",{field:o});if(!fieldType.i.jsonValues.includes(o.type))throw new request.s("geojson-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o});if(o.name!==y.name){const e=opacityUtils.P(o);void 0!==e&&(m[o.name]=e);}}if(this._fieldsIndex=new FieldsIndex.d(a),c){if(c.startTimeField){const e=this._fieldsIndex.get(c.startTimeField);e?(c.startTimeField=e.name,e.type="esriFieldTypeDate"):c.startTimeField=null;}if(c.endTimeField){const e=this._fieldsIndex.get(c.endTimeField);e?(c.endTimeField=e.name,e.type="esriFieldTypeDate"):c.endTimeField=null;}if(c.trackIdField){const e=this._fieldsIndex.get(c.trackIdField);e?c.trackIdField=e.name:(c.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:c}}));}c.startTimeField||c.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:c}}),c=null);}const f=u?clientSideDefaults.u(u):null,I={warnings:i,featureErrors:[],layerDefinition:{...C,drawingInfo:f,templates:clientSideDefaults.i(m),extent:null,geometryType:u,objectIdField:d,fields:a,hasZ:!!l,timeInfo:c}};this._queryEngine=new QueryEngine.V({fields:a,geometryType:u,hasM:!1,hasZ:l,objectIdField:d,spatialReference:p,timeInfo:c,featureStore:new FeatureStore.m({geometryType:u,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=clientSideDefaults.n(m,d);const j=await this._createFeatures(r);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const T=this._normalizeFeatures(j,I.warnings,I.featureErrors);if(this._queryEngine.featureStore.addMany(T),I.layerDefinition.extent=this._queryEngine.fullExtent,I.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;I.layerDefinition.timeInfo.timeExtent=[e,t];}return I}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([sourceUtils.y(t,s),projectionSupport.f(e.adds,t),projectionSupport.f(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var i;return this.loadOptions.customParameters=e,null==(i=this._snapshotTask)||i.abort(),this._snapshotTask=request.F$1(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t);}),(e=>{this._queryEngine.featureStore.clear(),request.d$1(e)||request.s$1.getLogger("esri.layers.GeoJSONLayer").error(new request.s("geojson-layer:refresh","An error occurred during refresh",{error:e}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:s,objectIdField:r}=this._queryEngine,n=geojson.L(e,{geometryType:t,hasZ:s,objectIdField:r});if(!request.E$2(this._queryEngine.spatialReference,request.c$6))for(const a of n)request.r(a.geometry)&&(a.geometry=featureConversionUtils.et(projectionSupport.g(featureConversionUtils.nt(a.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),request.c$6,this._queryEngine.spatialReference)));return n}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:s,customParameters:i}=this.loadOptions,r=(await request.E(s,{responseType:"json",query:{...i},signal:t})).data;return await geojson.O(r),r}_normalizeFeatures(e,t,s){const{objectIdField:i}=this._queryEngine,r=[];for(const n of e){const e=this._createDefaultAttributes(),a=sourceUtils.d(this._fieldsIndex,e,n.attributes,!0,t);a?null==s||s.push(a):(this._assignObjectId(e,n.attributes,!0),n.attributes=e,n.objectId=e[i],r.push(n));}return r}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),s&&s.length&&this._applyUpdateEdits(r,s),i&&i.length){for(const e of i)r.deleteResults.push(sourceUtils.c(e));this._queryEngine.featureStore.removeManyById(i);}return {extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:r,hasM:n,hasZ:o,objectIdField:l,spatialReference:u,featureStore:d}=this._queryEngine,c=[];for(const p of t){if(p.geometry&&r!==jsonUtils.v(p.geometry)){s.push(sourceUtils.u("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=sourceUtils.d(this._fieldsIndex,t,p.attributes);if(n)s.push(n);else {if(this._assignObjectId(t,p.attributes),p.attributes=t,null!=p.uid){const t=p.attributes[l];e.uidToObjectId[p.uid]=t;}request.r(p.geometry)&&(p.geometry=projectionSupport.g(sourceUtils.h(p.geometry,u),p.geometry.spatialReference,u)),c.push(p),s.push(sourceUtils.c(p.attributes[l]));}}d.addMany(featureConversionUtils.W([],c,r,o,n,l));}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:r,hasZ:n,objectIdField:o,spatialReference:l,featureStore:u}=this._queryEngine;for(const d of t){const{attributes:t,geometry:p}=d,h=t&&t[o];if(null==h){e.push(sourceUtils.u(`Identifier field ${o} missing`));continue}if(!u.has(h)){e.push(sourceUtils.u(`Feature with object id ${h} missing`));continue}const m=featureConversionUtils.tt(u.getFeature(h),s,n,r);if(request.r(p)){if(s!==jsonUtils.v(p)){e.push(sourceUtils.u("Incorrect geometry type."));continue}m.geometry=projectionSupport.g(sourceUtils.h(p,l),p.spatialReference,l);}if(t){const s=sourceUtils.d(this._fieldsIndex,m.attributes,t);if(s){e.push(s);continue}}u.add(featureConversionUtils.Q(m,s,n,r,o)),e.push(sourceUtils.c(h));}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===s.type)return ()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator();}async _checkProjection(e){try{await projectionSupport.f(request.c$6,e);}catch{throw new request.s("geojson-layer","Projection not supported")}}}

exports.default = O;
