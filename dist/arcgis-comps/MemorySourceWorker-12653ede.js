import { a as s, t as t$1, r } from './cast-e5ea2533.js';
import { l, v } from './geometry-160ffbb5.js';
import { D as c } from './Portal-f1457cb4.js';
import { W, t as tt, Q } from './featureConversionUtils-dd47b9b4.js';
import { t, n as n$1 } from './objectIdUtils-0db9c3c6.js';
import { m } from './FeatureStore-61606ad6.js';
import { f, g } from './projectionSupport-7faa25d0.js';
import { V } from './QueryEngine-933fe28f.js';
import { n, u, i as i$1 } from './clientSideDefaults-51baea5c.js';
import { y, u as u$1, d as d$1, c as c$1, h } from './sourceUtils-15fd5ebe.js';
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
const R=c,q={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:c},D={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function O(e){return l(e)?null!=e.z:!!e.hasZ}function w(e){return l(e)?null!=e.m:!!e.hasM}class S{constructor(){this._queryEngine=null,this._nextObjectId=null;}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null;}async load(t$1){const i$2=[],{features:s$1}=t$1,r=this._inferLayerProperties(s$1,t$1.fields),n$2=t$1.fields||[],a=null!=t$1.hasM?t$1.hasM:r.hasM,o=null!=t$1.hasZ?t$1.hasZ:r.hasZ,l=!t$1.spatialReference&&!r.spatialReference,y=l?R:t$1.spatialReference||r.spatialReference,I=l?q:null,b=t$1.geometryType||r.geometryType,F=!b;let j=t$1.objectIdField||r.objectIdField,_=t$1.timeInfo;if(!F&&(l&&i$2.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!b))throw new s("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!j)throw new s("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&j!==r.objectIdField&&(i$2.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${j}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),j=r.objectIdField),j&&!r.objectIdField){let e=null;n$2.some((t=>t.name===j&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):n$2.unshift({alias:j,name:j,type:"esriFieldTypeOID",editable:!1,nullable:!1});}for(const d of n$2){if(null==d.name&&(d.name=d.alias),null==d.alias&&(d.alias=d.name),!d.name)throw new s("feature-layer:invalid-field-name","field name is missing",{field:d});if(d.name===j&&(d.type="esriFieldTypeOID"),-1===i.jsonValues.indexOf(d.type))throw new s("feature-layer:invalid-field-type",`invalid type for field "${d.name}"`,{field:d})}const O={};for(const e of n$2)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=P(e);void 0!==t&&(O[e.name]=t);}if(this._fieldsIndex=new d(n$2),this._createDefaultAttributes=n(O,j),_){if(_.startTimeField){const e=this._fieldsIndex.get(_.startTimeField);e?(_.startTimeField=e.name,e.type="esriFieldTypeDate"):_.startTimeField=null;}if(_.endTimeField){const e=this._fieldsIndex.get(_.endTimeField);e?(_.endTimeField=e.name,e.type="esriFieldTypeDate"):_.endTimeField=null;}if(_.trackIdField){const e=this._fieldsIndex.get(_.trackIdField);e?_.trackIdField=e.name:(_.trackIdField=null,i$2.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:_}}));}_.startTimeField||_.endTimeField||(i$2.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:_}}),_=null);}const w={warnings:i$2,featureErrors:[],layerDefinition:{...D,drawingInfo:u(b),templates:i$1(O),extent:I,geometryType:b,objectIdField:j,fields:n$2,hasZ:!!o,hasM:!!a,timeInfo:_},assignedObjectIds:{}};if(this._queryEngine=new V({fields:n$2,geometryType:b,hasM:a,hasZ:o,objectIdField:j,spatialReference:y,featureStore:new m({geometryType:b,hasM:a,hasZ:o}),timeInfo:_,cacheSpatialQueries:!0}),!s$1||!s$1.length)return this._nextObjectId=t,w;const S=n$1(j,s$1);return this._nextObjectId=S+1,await f(s$1,y),this._loadInitialFeatures(w,s$1)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([y(t,i),f(e.adds,t),f(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,i){let r,n,a=null,o=null,l=null;for(const d of e){const e=d.geometry;if(!t$1(e)&&(a||(a=v(e)),o||(o=e.spatialReference),null==r&&(r=O(e)),null==n&&(n=w(e)),a&&o&&null!=r&&null!=n))break}if(i&&i.length){let e=null;i.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(l=e.name);}return {geometryType:a,spatialReference:o,objectIdField:l,hasM:n,hasZ:r}}_loadInitialFeatures(e,t){const{geometryType:r$1,hasM:n,hasZ:o,objectIdField:l,spatialReference:d,featureStore:u}=this._queryEngine,p=[];for(const a of t){if(null!=a.uid&&(e.assignedObjectIds[a.uid]=-1),a.geometry&&r$1!==v(a.geometry)){e.featureErrors.push(u$1("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=d$1(this._fieldsIndex,t,a.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,a.attributes,!0),a.attributes=t,null!=a.uid&&(e.assignedObjectIds[a.uid]=a.attributes[l]),r(a.geometry)&&(a.geometry=g(a.geometry,a.geometry.spatialReference,d)),p.push(a));}if(u.addMany(W([],p,r$1,o,n,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i];}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(c$1(e));this._queryEngine.featureStore.removeManyById(s);}return {fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:r$1}=e,{geometryType:n,hasM:o,hasZ:l,objectIdField:d,spatialReference:u,featureStore:p}=this._queryEngine,f=[];for(const a of t){if(a.geometry&&n!==v(a.geometry)){r$1.push(u$1("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),o=d$1(this._fieldsIndex,t,a.attributes);if(o)r$1.push(o);else {if(this._assignObjectId(t,a.attributes),a.attributes=t,null!=a.uid){const t=a.attributes[d];e.uidToObjectId[a.uid]=t;}r(a.geometry)&&(a.geometry=g(h(a.geometry,u),a.geometry.spatialReference,u)),f.push(a),r$1.push(c$1(a.attributes[d]));}}p.addMany(W([],f,n,l,o,d));}_applyUpdateEdits({updateResults:e},t){const{geometryType:r$1,hasM:n,hasZ:a,objectIdField:d,spatialReference:u,featureStore:p}=this._queryEngine;for(const f of t){const{attributes:t,geometry:c}=f,m=t&&t[d];if(null==m){e.push(u$1(`Identifier field ${d} missing`));continue}if(!p.has(m)){e.push(u$1(`Feature with object id ${m} missing`));continue}const h$1=tt(p.getFeature(m),r$1,a,n);if(r(c)){if(r$1!==v(c)){e.push(u$1("Incorrect geometry type."));continue}h$1.geometry=g(h(c,u),c.spatialReference,u);}if(t){const i=d$1(this._fieldsIndex,h$1.attributes,t);if(i){e.push(i);continue}}p.add(Q(h$1,r$1,a,n,d)),e.push(c$1(m));}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++;}}

export default S;
