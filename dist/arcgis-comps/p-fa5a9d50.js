import{m as e,t,r as i}from"./p-9ae46e68.js";import{aQ as s,aH as r,bm as n,bL as o}from"./p-566b0715.js";import{W as a,t as p,Q as l}from"./p-4003c7ae.js";import{t as d,n as u}from"./p-3d6e66b1.js";import{m as f}from"./p-dc35ec83.js";import{f as c,g as m}from"./p-47f143cb.js";import{V as y}from"./p-574af054.js";import{n as h,u as j,i as b}from"./p-f8afda5b.js";import{y as g,u as I,d as F,c as T,h as R}from"./p-a19e89a5.js";import{d as w}from"./p-5a0fe1d0.js";import{i as v}from"./p-32462343.js";import"./p-84bf99cb.js";import"./p-fe01b82b.js";import"./p-b2d0e2de.js";import"./p-db87794e.js";import"./p-81e5b36e.js";import"./p-cb4bfb58.js";import"./p-285c6a34.js";import"./p-2a252a78.js";import"./p-bae36c84.js";import"./p-138c2b2c.js";import"./p-50ff864e.js";import"./p-3a2e88bf.js";import"./p-8031c809.js";import"./p-27ef204b.js";import"./p-b74f39e0.js";import"./p-06d309e6.js";import"./p-685003b3.js";import"./p-007111db.js";import"./p-0659cf81.js";import"./p-8ac97b63.js";import"./p-5ee2f7e2.js";import"./p-8d03d70f.js";import"./p-4fd6e394.js";import"./p-e5429b9e.js";const D=o,S={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:o},x={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function E(e){return n(e)?null!=e.z:!!e.hasZ}function O(e){return n(e)?null!=e.m:!!e.hasM}export default class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(t){const i=[],{features:r}=t,n=this._inferLayerProperties(r,t.fields),o=t.fields||[],a=null!=t.hasM?t.hasM:n.hasM,p=null!=t.hasZ?t.hasZ:n.hasZ,l=!t.spatialReference&&!n.spatialReference,m=l?D:t.spatialReference||n.spatialReference,g=l?S:null,I=t.geometryType||n.geometryType;let F=t.objectIdField||n.objectIdField,T=t.timeInfo;if(I&&(l&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!I))throw new e("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!F)throw new e("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&F!==n.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${F}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),F=n.objectIdField),F&&!n.objectIdField){let e=null;o.some((t=>t.name===F&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):o.unshift({alias:F,name:F,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const t of o){if(null==t.name&&(t.name=t.alias),null==t.alias&&(t.alias=t.name),!t.name)throw new e("feature-layer:invalid-field-name","field name is missing",{field:t});if(t.name===F&&(t.type="esriFieldTypeOID"),-1===v.jsonValues.indexOf(t.type))throw new e("feature-layer:invalid-field-type",`invalid type for field "${t.name}"`,{field:t})}const R={};for(const e of o)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=s(e);void 0!==t&&(R[e.name]=t)}if(this._fieldsIndex=new w(o),this._createDefaultAttributes=h(R,F),T){if(T.startTimeField){const e=this._fieldsIndex.get(T.startTimeField);e?(T.startTimeField=e.name,e.type="esriFieldTypeDate"):T.startTimeField=null}if(T.endTimeField){const e=this._fieldsIndex.get(T.endTimeField);e?(T.endTimeField=e.name,e.type="esriFieldTypeDate"):T.endTimeField=null}if(T.trackIdField){const e=this._fieldsIndex.get(T.trackIdField);e?T.trackIdField=e.name:(T.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T}}))}T.startTimeField||T.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:T}}),T=null)}const E={warnings:i,featureErrors:[],layerDefinition:{...x,drawingInfo:j(I),templates:b(R),extent:g,geometryType:I,objectIdField:F,fields:o,hasZ:!!p,hasM:!!a,timeInfo:T},assignedObjectIds:{}};if(this._queryEngine=new y({fields:o,geometryType:I,hasM:a,hasZ:p,objectIdField:F,spatialReference:m,featureStore:new f({geometryType:I,hasM:a,hasZ:p}),timeInfo:T,cacheSpatialQueries:!0}),!r||!r.length)return this._nextObjectId=d,E;const O=u(F,r);return this._nextObjectId=O+1,await c(r,m),this._loadInitialFeatures(E,r)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([g(t,i),c(e.adds,t),c(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,i){let s,n,o=null,a=null,p=null;for(const i of e){const e=i.geometry;if(!t(e)&&(o||(o=r(e)),a||(a=e.spatialReference),null==s&&(s=E(e)),null==n&&(n=O(e)),o&&a&&null!=s&&null!=n))break}if(i&&i.length){let e=null;i.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(p=e.name)}return{geometryType:o,spatialReference:a,objectIdField:p,hasM:n,hasZ:s}}_loadInitialFeatures(e,t){const{geometryType:s,hasM:n,hasZ:o,objectIdField:p,spatialReference:l,featureStore:d}=this._queryEngine,u=[];for(const n of t){if(null!=n.uid&&(e.assignedObjectIds[n.uid]=-1),n.geometry&&s!==r(n.geometry)){e.featureErrors.push(I("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),o=F(this._fieldsIndex,t,n.attributes,!0,e.warnings);o?e.featureErrors.push(o):(this._assignObjectId(t,n.attributes,!0),n.attributes=t,null!=n.uid&&(e.assignedObjectIds[n.uid]=n.attributes[p]),i(n.geometry)&&(n.geometry=m(n.geometry,n.geometry.spatialReference,l)),u.push(n))}if(d.addMany(a([],u,s,o,n,p)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(T(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:n,hasM:o,hasZ:p,objectIdField:l,spatialReference:d,featureStore:u}=this._queryEngine,f=[];for(const o of t){if(o.geometry&&n!==r(o.geometry)){s.push(I("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=F(this._fieldsIndex,t,o.attributes);a?s.push(a):(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid&&(e.uidToObjectId[o.uid]=o.attributes[l]),i(o.geometry)&&(o.geometry=m(R(o.geometry,d),o.geometry.spatialReference,d)),f.push(o),s.push(T(o.attributes[l])))}u.addMany(a([],f,n,p,o,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:n,hasZ:o,objectIdField:a,spatialReference:d,featureStore:u}=this._queryEngine;for(const f of t){const{attributes:t,geometry:c}=f,y=t&&t[a];if(null==y){e.push(I(`Identifier field ${a} missing`));continue}if(!u.has(y)){e.push(I(`Feature with object id ${y} missing`));continue}const h=p(u.getFeature(y),s,o,n);if(i(c)){if(s!==r(c)){e.push(I("Incorrect geometry type."));continue}h.geometry=m(R(c,d),c.spatialReference,d)}if(t){const i=F(this._fieldsIndex,h.attributes,t);if(i){e.push(i);continue}}u.add(l(h,s,o,n,a)),e.push(T(y))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;e[s]=i&&t&&isFinite(t[s])?t[s]:this._nextObjectId++}}