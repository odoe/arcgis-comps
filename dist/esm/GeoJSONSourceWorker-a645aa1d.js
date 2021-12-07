import { s, cu as F, b as d$1, c as s$1, br as E, dl as c, A as r, Q as E$1 } from './messageBundle-f75b4090.js';
import { v } from './jsonUtils-13b1f6fd.js';
import { e as et, n as nt, W, t as tt, Q } from './featureConversionUtils-cbd79ea2.js';
import { m } from './FeatureStore-72363bc6.js';
import { f, g } from './projectionSupport-1a26f2e9.js';
import { V } from './QueryEngine-5866832d.js';
import { T, L, O as O$1 } from './geojson-5a4ac292.js';
import { i as i$1, n, u as u$1 } from './clientSideDefaults-1417a571.js';
import { y, d as d$2, c as c$1, u, h } from './sourceUtils-536cf595.js';
import { d } from './FieldsIndex-2a111e7e.js';
import { i } from './fieldType-66a19d8a.js';
import { P } from './opacityUtils-5e864561.js';
import './index-b157fcf2.js';
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
import './Scheduler-3464f717.js';
import './reactiveUtils-8f9c3a3d.js';
import './debugFlags-e9d86cce.js';
import './defaultsJSON-0b68054b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const C={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class O{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null;}async load(e,s$1={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const i$2=[];await this._checkProjection(e.spatialReference);let r=null;e.url&&(r=await this._fetch(null==s$1?void 0:s$1.signal));const n$1=T(r,{geometryType:e.geometryType}),a=e.fields||n$1.fields||[],l=null!=e.hasZ?e.hasZ:n$1.hasZ,u=n$1.geometryType,d$1=e.objectIdField||n$1.objectIdFieldName||"__OBJECTID",p=e.spatialReference||c;let c$1=e.timeInfo;a===n$1.fields&&n$1.unknownFields.length>0&&i$2.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n$1.unknownFields}});let y=a.find((e=>e.name===d$1));y?("esriFieldTypeString"!==y.type&&(y.type="esriFieldTypeOID"),y.editable=!1,y.nullable=!1):(y={alias:d$1,name:d$1,type:"string"===n$1.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},a.unshift(y));const m$1={};for(const o of a){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),!o.name)throw new s("geojson-layer:invalid-field-name","field name is missing",{field:o});if(!i.jsonValues.includes(o.type))throw new s("geojson-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o});if(o.name!==y.name){const e=P(o);void 0!==e&&(m$1[o.name]=e);}}if(this._fieldsIndex=new d(a),c$1){if(c$1.startTimeField){const e=this._fieldsIndex.get(c$1.startTimeField);e?(c$1.startTimeField=e.name,e.type="esriFieldTypeDate"):c$1.startTimeField=null;}if(c$1.endTimeField){const e=this._fieldsIndex.get(c$1.endTimeField);e?(c$1.endTimeField=e.name,e.type="esriFieldTypeDate"):c$1.endTimeField=null;}if(c$1.trackIdField){const e=this._fieldsIndex.get(c$1.trackIdField);e?c$1.trackIdField=e.name:(c$1.trackIdField=null,i$2.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:c$1}}));}c$1.startTimeField||c$1.endTimeField||(i$2.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:c$1}}),c$1=null);}const f=u?u$1(u):null,I={warnings:i$2,featureErrors:[],layerDefinition:{...C,drawingInfo:f,templates:i$1(m$1),extent:null,geometryType:u,objectIdField:d$1,fields:a,hasZ:!!l,timeInfo:c$1}};this._queryEngine=new V({fields:a,geometryType:u,hasM:!1,hasZ:l,objectIdField:d$1,spatialReference:p,timeInfo:c$1,featureStore:new m({geometryType:u,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=n(m$1,d$1);const j=await this._createFeatures(r);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const T$1=this._normalizeFeatures(j,I.warnings,I.featureErrors);if(this._queryEngine.featureStore.addMany(T$1),I.layerDefinition.extent=this._queryEngine.fullExtent,I.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;I.layerDefinition.timeInfo.timeExtent=[e,t];}return I}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([y(t,s),f(e.adds,t),f(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var i;return this.loadOptions.customParameters=e,null==(i=this._snapshotTask)||i.abort(),this._snapshotTask=F(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t);}),(e=>{this._queryEngine.featureStore.clear(),d$1(e)||s$1.getLogger("esri.layers.GeoJSONLayer").error(new s("geojson-layer:refresh","An error occurred during refresh",{error:e}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:s,objectIdField:r$1}=this._queryEngine,n=L(e,{geometryType:t,hasZ:s,objectIdField:r$1});if(!E(this._queryEngine.spatialReference,c))for(const a of n)r(a.geometry)&&(a.geometry=et(g(nt(a.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),c,this._queryEngine.spatialReference)));return n}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:s,customParameters:i}=this.loadOptions,r=(await E$1(s,{responseType:"json",query:{...i},signal:t})).data;return await O$1(r),r}_normalizeFeatures(e,t,s){const{objectIdField:i}=this._queryEngine,r=[];for(const n of e){const e=this._createDefaultAttributes(),a=d$2(this._fieldsIndex,e,n.attributes,!0,t);a?null==s||s.push(a):(this._assignObjectId(e,n.attributes,!0),n.attributes=e,n.objectId=e[i],r.push(n));}return r}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),s&&s.length&&this._applyUpdateEdits(r,s),i&&i.length){for(const e of i)r.deleteResults.push(c$1(e));this._queryEngine.featureStore.removeManyById(i);}return {extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:r$1,hasM:n,hasZ:o,objectIdField:l,spatialReference:u$1,featureStore:d}=this._queryEngine,c=[];for(const p of t){if(p.geometry&&r$1!==v(p.geometry)){s.push(u("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=d$2(this._fieldsIndex,t,p.attributes);if(n)s.push(n);else {if(this._assignObjectId(t,p.attributes),p.attributes=t,null!=p.uid){const t=p.attributes[l];e.uidToObjectId[p.uid]=t;}r(p.geometry)&&(p.geometry=g(h(p.geometry,u$1),p.geometry.spatialReference,u$1)),c.push(p),s.push(c$1(p.attributes[l]));}}d.addMany(W([],c,r$1,o,n,l));}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:r$1,hasZ:n,objectIdField:o,spatialReference:l,featureStore:u$1}=this._queryEngine;for(const d of t){const{attributes:t,geometry:p}=d,h$1=t&&t[o];if(null==h$1){e.push(u(`Identifier field ${o} missing`));continue}if(!u$1.has(h$1)){e.push(u(`Feature with object id ${h$1} missing`));continue}const m=tt(u$1.getFeature(h$1),s,n,r$1);if(r(p)){if(s!==v(p)){e.push(u("Incorrect geometry type."));continue}m.geometry=g(h(p,l),p.spatialReference,l);}if(t){const s=d$2(this._fieldsIndex,m.attributes,t);if(s){e.push(s);continue}}u$1.add(Q(m,s,n,r$1,o)),e.push(c$1(h$1));}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===s.type)return ()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator();}async _checkProjection(e){try{await f(c,e);}catch{throw new s("geojson-layer","Projection not supported")}}}

export default O;
