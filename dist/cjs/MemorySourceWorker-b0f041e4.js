'use strict';

const request = require('./messageBundle-8be88d04.js');
const jsonUtils = require('./jsonUtils-b6068079.js');
const featureConversionUtils = require('./featureConversionUtils-df21e951.js');
const objectIdUtils = require('./objectIdUtils-d5a9efb9.js');
const FeatureStore = require('./FeatureStore-bb1fc704.js');
const projectionSupport = require('./projectionSupport-7159f0ef.js');
const QueryEngine = require('./QueryEngine-d6177b5a.js');
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
const R=request.c$6,q={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:request.c$6},D={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function O(e){return jsonUtils.l(e)?null!=e.z:!!e.hasZ}function w(e){return jsonUtils.l(e)?null!=e.m:!!e.hasM}class S{constructor(){this._queryEngine=null,this._nextObjectId=null;}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null;}async load(t){const i=[],{features:s}=t,r=this._inferLayerProperties(s,t.fields),n=t.fields||[],a=null!=t.hasM?t.hasM:r.hasM,o=null!=t.hasZ?t.hasZ:r.hasZ,l=!t.spatialReference&&!r.spatialReference,y=l?R:t.spatialReference||r.spatialReference,I=l?q:null,b=t.geometryType||r.geometryType,F=!b;let j=t.objectIdField||r.objectIdField,_=t.timeInfo;if(!F&&(l&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!b))throw new request.s("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!j)throw new request.s("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&j!==r.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${j}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),j=r.objectIdField),j&&!r.objectIdField){let e=null;n.some((t=>t.name===j&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):n.unshift({alias:j,name:j,type:"esriFieldTypeOID",editable:!1,nullable:!1});}for(const d of n){if(null==d.name&&(d.name=d.alias),null==d.alias&&(d.alias=d.name),!d.name)throw new request.s("feature-layer:invalid-field-name","field name is missing",{field:d});if(d.name===j&&(d.type="esriFieldTypeOID"),-1===fieldType.i.jsonValues.indexOf(d.type))throw new request.s("feature-layer:invalid-field-type",`invalid type for field "${d.name}"`,{field:d})}const O={};for(const e of n)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=opacityUtils.P(e);void 0!==t&&(O[e.name]=t);}if(this._fieldsIndex=new FieldsIndex.d(n),this._createDefaultAttributes=clientSideDefaults.n(O,j),_){if(_.startTimeField){const e=this._fieldsIndex.get(_.startTimeField);e?(_.startTimeField=e.name,e.type="esriFieldTypeDate"):_.startTimeField=null;}if(_.endTimeField){const e=this._fieldsIndex.get(_.endTimeField);e?(_.endTimeField=e.name,e.type="esriFieldTypeDate"):_.endTimeField=null;}if(_.trackIdField){const e=this._fieldsIndex.get(_.trackIdField);e?_.trackIdField=e.name:(_.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:_}}));}_.startTimeField||_.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:_}}),_=null);}const w={warnings:i,featureErrors:[],layerDefinition:{...D,drawingInfo:clientSideDefaults.u(b),templates:clientSideDefaults.i(O),extent:I,geometryType:b,objectIdField:j,fields:n,hasZ:!!o,hasM:!!a,timeInfo:_},assignedObjectIds:{}};if(this._queryEngine=new QueryEngine.V({fields:n,geometryType:b,hasM:a,hasZ:o,objectIdField:j,spatialReference:y,featureStore:new FeatureStore.m({geometryType:b,hasM:a,hasZ:o}),timeInfo:_,cacheSpatialQueries:!0}),!s||!s.length)return this._nextObjectId=objectIdUtils.t,w;const S=objectIdUtils.n(j,s);return this._nextObjectId=S+1,await projectionSupport.f(s,y),this._loadInitialFeatures(w,s)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([sourceUtils.y(t,i),projectionSupport.f(e.adds,t),projectionSupport.f(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,i){let r,n,a=null,o=null,l=null;for(const d of e){const e=d.geometry;if(!request.t$1(e)&&(a||(a=jsonUtils.v(e)),o||(o=e.spatialReference),null==r&&(r=O(e)),null==n&&(n=w(e)),a&&o&&null!=r&&null!=n))break}if(i&&i.length){let e=null;i.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(l=e.name);}return {geometryType:a,spatialReference:o,objectIdField:l,hasM:n,hasZ:r}}_loadInitialFeatures(e,t){const{geometryType:r,hasM:n,hasZ:o,objectIdField:l,spatialReference:d,featureStore:u}=this._queryEngine,p=[];for(const a of t){if(null!=a.uid&&(e.assignedObjectIds[a.uid]=-1),a.geometry&&r!==jsonUtils.v(a.geometry)){e.featureErrors.push(sourceUtils.u("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=sourceUtils.d(this._fieldsIndex,t,a.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,a.attributes,!0),a.attributes=t,null!=a.uid&&(e.assignedObjectIds[a.uid]=a.attributes[l]),request.r(a.geometry)&&(a.geometry=projectionSupport.g(a.geometry,a.geometry.spatialReference,d)),p.push(a));}if(u.addMany(featureConversionUtils.W([],p,r,o,n,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i];}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(sourceUtils.c(e));this._queryEngine.featureStore.removeManyById(s);}return {fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:r}=e,{geometryType:n,hasM:o,hasZ:l,objectIdField:d,spatialReference:u,featureStore:p}=this._queryEngine,f=[];for(const a of t){if(a.geometry&&n!==jsonUtils.v(a.geometry)){r.push(sourceUtils.u("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),o=sourceUtils.d(this._fieldsIndex,t,a.attributes);if(o)r.push(o);else {if(this._assignObjectId(t,a.attributes),a.attributes=t,null!=a.uid){const t=a.attributes[d];e.uidToObjectId[a.uid]=t;}request.r(a.geometry)&&(a.geometry=projectionSupport.g(sourceUtils.h(a.geometry,u),a.geometry.spatialReference,u)),f.push(a),r.push(sourceUtils.c(a.attributes[d]));}}p.addMany(featureConversionUtils.W([],f,n,l,o,d));}_applyUpdateEdits({updateResults:e},t){const{geometryType:r,hasM:n,hasZ:a,objectIdField:d,spatialReference:u,featureStore:p}=this._queryEngine;for(const f of t){const{attributes:t,geometry:c}=f,m=t&&t[d];if(null==m){e.push(sourceUtils.u(`Identifier field ${d} missing`));continue}if(!p.has(m)){e.push(sourceUtils.u(`Feature with object id ${m} missing`));continue}const h=featureConversionUtils.tt(p.getFeature(m),r,a,n);if(request.r(c)){if(r!==jsonUtils.v(c)){e.push(sourceUtils.u("Incorrect geometry type."));continue}h.geometry=projectionSupport.g(sourceUtils.h(c,u),c.spatialReference,u);}if(t){const i=sourceUtils.d(this._fieldsIndex,h.attributes,t);if(i){e.push(i);continue}}p.add(featureConversionUtils.Q(h,r,a,n,d)),e.push(sourceUtils.c(m));}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++;}}

exports.default = S;
