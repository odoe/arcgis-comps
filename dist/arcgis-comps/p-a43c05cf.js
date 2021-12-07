import{s as e,af as t,A as i,dl as s}from"./p-e58503d5.js";import{v as r,l as o}from"./p-c048b814.js";import{W as n,t as p,Q as a}from"./p-5032dfbd.js";import{t as l,n as d}from"./p-3d6e66b1.js";import{m as u}from"./p-e06c6cf3.js";import{f,g as m}from"./p-e49308c6.js";import{V as c}from"./p-bfea9714.js";import{n as y,u as h,i as j}from"./p-ed18725d.js";import{y as b,u as g,d as I,c as F,h as T}from"./p-6ba45bbf.js";import{d as R}from"./p-612de336.js";import{i as w}from"./p-a2324023.js";import{P as v}from"./p-765e6c28.js";import"./p-53bb6ab4.js";import"./p-b79fcce3.js";import"./p-182bb5be.js";import"./p-db87794e.js";import"./p-f94762ac.js";import"./p-ea916a39.js";import"./p-2f398ed1.js";import"./p-d3105731.js";import"./p-58386239.js";import"./p-285c6a34.js";import"./p-f8414adc.js";import"./p-8925cd73.js";import"./p-c93d2280.js";import"./p-01e5a461.js";import"./p-ccdb8e80.js";import"./p-fea9512d.js";import"./p-50ff864e.js";import"./p-b0565d49.js";import"./p-c1cd5521.js";import"./p-9f58a277.js";import"./p-61f47d2b.js";import"./p-06d309e6.js";import"./p-4019eec3.js";import"./p-292d2320.js";import"./p-8bcb4bb3.js";import"./p-e0d9ff4c.js";import"./p-e273719b.js";import"./p-74de0937.js";import"./p-a9a30646.js";import"./p-7a658388.js";import"./p-85a6d41b.js";import"./p-ca295674.js";import"./p-5d962998.js";import"./p-41f2b2dd.js";import"./p-2e8ad983.js";const D=s,S={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:s},x={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function E(e){return o(e)?null!=e.z:!!e.hasZ}function O(e){return o(e)?null!=e.m:!!e.hasM}export default class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(t){const i=[],{features:s}=t,r=this._inferLayerProperties(s,t.fields),o=t.fields||[],n=null!=t.hasM?t.hasM:r.hasM,p=null!=t.hasZ?t.hasZ:r.hasZ,a=!t.spatialReference&&!r.spatialReference,m=a?D:t.spatialReference||r.spatialReference,b=a?S:null,g=t.geometryType||r.geometryType;let I=t.objectIdField||r.objectIdField,F=t.timeInfo;if(g&&(a&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!g))throw new e("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!I)throw new e("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&I!==r.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${I}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),I=r.objectIdField),I&&!r.objectIdField){let e=null;o.some((t=>t.name===I&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):o.unshift({alias:I,name:I,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const t of o){if(null==t.name&&(t.name=t.alias),null==t.alias&&(t.alias=t.name),!t.name)throw new e("feature-layer:invalid-field-name","field name is missing",{field:t});if(t.name===I&&(t.type="esriFieldTypeOID"),-1===w.jsonValues.indexOf(t.type))throw new e("feature-layer:invalid-field-type",`invalid type for field "${t.name}"`,{field:t})}const T={};for(const e of o)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=v(e);void 0!==t&&(T[e.name]=t)}if(this._fieldsIndex=new R(o),this._createDefaultAttributes=y(T,I),F){if(F.startTimeField){const e=this._fieldsIndex.get(F.startTimeField);e?(F.startTimeField=e.name,e.type="esriFieldTypeDate"):F.startTimeField=null}if(F.endTimeField){const e=this._fieldsIndex.get(F.endTimeField);e?(F.endTimeField=e.name,e.type="esriFieldTypeDate"):F.endTimeField=null}if(F.trackIdField){const e=this._fieldsIndex.get(F.trackIdField);e?F.trackIdField=e.name:(F.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:F}}))}F.startTimeField||F.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:F}}),F=null)}const E={warnings:i,featureErrors:[],layerDefinition:{...x,drawingInfo:h(g),templates:j(T),extent:b,geometryType:g,objectIdField:I,fields:o,hasZ:!!p,hasM:!!n,timeInfo:F},assignedObjectIds:{}};if(this._queryEngine=new c({fields:o,geometryType:g,hasM:n,hasZ:p,objectIdField:I,spatialReference:m,featureStore:new u({geometryType:g,hasM:n,hasZ:p}),timeInfo:F,cacheSpatialQueries:!0}),!s||!s.length)return this._nextObjectId=l,E;const O=d(I,s);return this._nextObjectId=O+1,await f(s,m),this._loadInitialFeatures(E,s)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([b(t,i),f(e.adds,t),f(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,i){let s,o,n=null,p=null,a=null;for(const i of e){const e=i.geometry;if(!t(e)&&(n||(n=r(e)),p||(p=e.spatialReference),null==s&&(s=E(e)),null==o&&(o=O(e)),n&&p&&null!=s&&null!=o))break}if(i&&i.length){let e=null;i.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(a=e.name)}return{geometryType:n,spatialReference:p,objectIdField:a,hasM:o,hasZ:s}}_loadInitialFeatures(e,t){const{geometryType:s,hasM:o,hasZ:p,objectIdField:a,spatialReference:l,featureStore:d}=this._queryEngine,u=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&s!==r(o.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=I(this._fieldsIndex,t,o.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[a]),i(o.geometry)&&(o.geometry=m(o.geometry,o.geometry.spatialReference,l)),u.push(o))}if(d.addMany(n([],u,s,p,o,a)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(F(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:o,hasM:p,hasZ:a,objectIdField:l,spatialReference:d,featureStore:u}=this._queryEngine,f=[];for(const n of t){if(n.geometry&&o!==r(n.geometry)){s.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),p=I(this._fieldsIndex,t,n.attributes);p?s.push(p):(this._assignObjectId(t,n.attributes),n.attributes=t,null!=n.uid&&(e.uidToObjectId[n.uid]=n.attributes[l]),i(n.geometry)&&(n.geometry=m(T(n.geometry,d),n.geometry.spatialReference,d)),f.push(n),s.push(F(n.attributes[l])))}u.addMany(n([],f,o,a,p,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:o,hasZ:n,objectIdField:l,spatialReference:d,featureStore:u}=this._queryEngine;for(const f of t){const{attributes:t,geometry:c}=f,y=t&&t[l];if(null==y){e.push(g(`Identifier field ${l} missing`));continue}if(!u.has(y)){e.push(g(`Feature with object id ${y} missing`));continue}const h=p(u.getFeature(y),s,n,o);if(i(c)){if(s!==r(c)){e.push(g("Incorrect geometry type."));continue}h.geometry=m(T(c,d),c.spatialReference,d)}if(t){const i=I(this._fieldsIndex,h.attributes,t);if(i){e.push(i);continue}}u.add(a(h,s,n,o,l)),e.push(F(y))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;e[s]=i&&t&&isFinite(t[s])?t[s]:this._nextObjectId++}}