import { a as s, by as F, d as d$1, g as s$1, r, E as E$1 } from './cast-e5ea2533.js';
import { v } from './geometry-160ffbb5.js';
import { D as c, E } from './Portal-f1457cb4.js';
import { e as et, n as nt, W, t as tt, Q } from './featureConversionUtils-dd47b9b4.js';
import { m } from './FeatureStore-61606ad6.js';
import { f, g } from './projectionSupport-7faa25d0.js';
import { V } from './QueryEngine-933fe28f.js';
import { T, L, O as O$1 } from './geojson-d8377ab2.js';
import { u, i as i$1, n } from './clientSideDefaults-51baea5c.js';
import { y, d as d$2, c as c$1, u as u$1, h } from './sourceUtils-15fd5ebe.js';
import { d } from './FieldsIndex-e09edd96.js';
import { i } from './fieldType-7f6b02ef.js';
import { P } from './opacityUtils-5755cb64.js';
import './Polyline-56152656.js';
import './JSONSupport-8dda8bae.js';
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
import './Scheduler-a964a3e2.js';
import './Handles-24a27aa9.js';
import './reactiveUtils-ab0efcb1.js';
import './watchUtils-08cf9d08.js';
import './defaultsJSON-53258912.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const C={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class O{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null;}async load(e,s$1={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const i$2=[];await this._checkProjection(e.spatialReference);let r=null;e.url&&(r=await this._fetch(null==s$1?void 0:s$1.signal));const n$1=T(r,{geometryType:e.geometryType}),a=e.fields||n$1.fields||[],l=null!=e.hasZ?e.hasZ:n$1.hasZ,u$1=n$1.geometryType,d$1=e.objectIdField||n$1.objectIdFieldName||"__OBJECTID",p=e.spatialReference||c;let c$1=e.timeInfo;a===n$1.fields&&n$1.unknownFields.length>0&&i$2.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n$1.unknownFields}});let y=a.find((e=>e.name===d$1));y?("esriFieldTypeString"!==y.type&&(y.type="esriFieldTypeOID"),y.editable=!1,y.nullable=!1):(y={alias:d$1,name:d$1,type:"string"===n$1.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},a.unshift(y));const m$1={};for(const o of a){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),!o.name)throw new s("geojson-layer:invalid-field-name","field name is missing",{field:o});if(!i.jsonValues.includes(o.type))throw new s("geojson-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o});if(o.name!==y.name){const e=P(o);void 0!==e&&(m$1[o.name]=e);}}if(this._fieldsIndex=new d(a),c$1){if(c$1.startTimeField){const e=this._fieldsIndex.get(c$1.startTimeField);e?(c$1.startTimeField=e.name,e.type="esriFieldTypeDate"):c$1.startTimeField=null;}if(c$1.endTimeField){const e=this._fieldsIndex.get(c$1.endTimeField);e?(c$1.endTimeField=e.name,e.type="esriFieldTypeDate"):c$1.endTimeField=null;}if(c$1.trackIdField){const e=this._fieldsIndex.get(c$1.trackIdField);e?c$1.trackIdField=e.name:(c$1.trackIdField=null,i$2.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:c$1}}));}c$1.startTimeField||c$1.endTimeField||(i$2.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:c$1}}),c$1=null);}const f=u$1?u(u$1):null,I={warnings:i$2,featureErrors:[],layerDefinition:{...C,drawingInfo:f,templates:i$1(m$1),extent:null,geometryType:u$1,objectIdField:d$1,fields:a,hasZ:!!l,timeInfo:c$1}};this._queryEngine=new V({fields:a,geometryType:u$1,hasM:!1,hasZ:l,objectIdField:d$1,spatialReference:p,timeInfo:c$1,featureStore:new m({geometryType:u$1,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=n(m$1,d$1);const j=await this._createFeatures(r);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const T$1=this._normalizeFeatures(j,I.warnings,I.featureErrors);if(this._queryEngine.featureStore.addMany(T$1),I.layerDefinition.extent=this._queryEngine.fullExtent,I.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;I.layerDefinition.timeInfo.timeExtent=[e,t];}return I}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([y(t,s),f(e.adds,t),f(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var i;return this.loadOptions.customParameters=e,null==(i=this._snapshotTask)||i.abort(),this._snapshotTask=F(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t);}),(e=>{this._queryEngine.featureStore.clear(),d$1(e)||s$1.getLogger("esri.layers.GeoJSONLayer").error(new s("geojson-layer:refresh","An error occurred during refresh",{error:e}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:s,objectIdField:r$1}=this._queryEngine,n=L(e,{geometryType:t,hasZ:s,objectIdField:r$1});if(!E(this._queryEngine.spatialReference,c))for(const a of n)r(a.geometry)&&(a.geometry=et(g(nt(a.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),c,this._queryEngine.spatialReference)));return n}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:s,customParameters:i}=this.loadOptions,r=(await E$1(s,{responseType:"json",query:{...i},signal:t})).data;return await O$1(r),r}_normalizeFeatures(e,t,s){const{objectIdField:i}=this._queryEngine,r=[];for(const n of e){const e=this._createDefaultAttributes(),a=d$2(this._fieldsIndex,e,n.attributes,!0,t);a?null==s||s.push(a):(this._assignObjectId(e,n.attributes,!0),n.attributes=e,n.objectId=e[i],r.push(n));}return r}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),s&&s.length&&this._applyUpdateEdits(r,s),i&&i.length){for(const e of i)r.deleteResults.push(c$1(e));this._queryEngine.featureStore.removeManyById(i);}return {extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:r$1,hasM:n,hasZ:o,objectIdField:l,spatialReference:u,featureStore:d}=this._queryEngine,c=[];for(const p of t){if(p.geometry&&r$1!==v(p.geometry)){s.push(u$1("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=d$2(this._fieldsIndex,t,p.attributes);if(n)s.push(n);else {if(this._assignObjectId(t,p.attributes),p.attributes=t,null!=p.uid){const t=p.attributes[l];e.uidToObjectId[p.uid]=t;}r(p.geometry)&&(p.geometry=g(h(p.geometry,u),p.geometry.spatialReference,u)),c.push(p),s.push(c$1(p.attributes[l]));}}d.addMany(W([],c,r$1,o,n,l));}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:r$1,hasZ:n,objectIdField:o,spatialReference:l,featureStore:u}=this._queryEngine;for(const d of t){const{attributes:t,geometry:p}=d,h$1=t&&t[o];if(null==h$1){e.push(u$1(`Identifier field ${o} missing`));continue}if(!u.has(h$1)){e.push(u$1(`Feature with object id ${h$1} missing`));continue}const m=tt(u.getFeature(h$1),s,n,r$1);if(r(p)){if(s!==v(p)){e.push(u$1("Incorrect geometry type."));continue}m.geometry=g(h(p,l),p.spatialReference,l);}if(t){const s=d$2(this._fieldsIndex,m.attributes,t);if(s){e.push(s);continue}}u.add(Q(m,s,n,r$1,o)),e.push(c$1(h$1));}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===s.type)return ()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator();}async _checkProjection(e){try{await f(c,e);}catch{throw new s("geojson-layer","Projection not supported")}}}

export default O;
