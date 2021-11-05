import{a7 as e,aS as t,eN as s,dM as i,g as r,bb as n,W as a,dC as o,dE as l,gs as u,cv as d,eP as p}from"./p-7b6f6c18.js";import{t as f,n as c}from"./p-3d6e66b1.js";import{m}from"./p-43312c08.js";import{f as y,g as h}from"./p-51e4508b.js";import{V as g}from"./p-4f06073a.js";import{n as j,u as I,i as b}from"./p-a666c421.js";import{y as F,u as T,d as R,c as w,h as v}from"./p-d9126ea8.js";import"./p-227a5838.js";import"./p-80871512.js";import"./p-f78de11d.js";import"./p-50ff864e.js";import"./p-8ec48dc4.js";import"./p-06d309e6.js";import"./p-ec834938.js";import"./p-06787bff.js";import"./p-2c47064f.js";import"./p-a4c129b5.js";const S=p,D={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:p},E={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function x(e){return d(e)?null!=e.z:!!e.hasZ}function O(e){return d(e)?null!=e.m:!!e.hasM}export default class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(r){const n=[],{features:a}=r,o=this._inferLayerProperties(a,r.fields),l=r.fields||[],u=null!=r.hasM?r.hasM:o.hasM,d=null!=r.hasZ?r.hasZ:o.hasZ,p=!r.spatialReference&&!o.spatialReference,h=p?S:r.spatialReference||o.spatialReference,F=p?D:null,T=r.geometryType||o.geometryType;let R=r.objectIdField||o.objectIdField,w=r.timeInfo;if(T&&(p&&n.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!T))throw new e("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!R)throw new e("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(o.objectIdField&&R!==o.objectIdField&&(n.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${R}" doesn't match the field name "${o.objectIdField}", found in the provided fields`}),R=o.objectIdField),R&&!o.objectIdField){let e=null;l.some((t=>t.name===R&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):l.unshift({alias:R,name:R,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of l){if(null==s.name&&(s.name=s.alias),null==s.alias&&(s.alias=s.name),!s.name)throw new e("feature-layer:invalid-field-name","field name is missing",{field:s});if(s.name===R&&(s.type="esriFieldTypeOID"),-1===t.jsonValues.indexOf(s.type))throw new e("feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s})}const v={};for(const e of l)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=s(e);void 0!==t&&(v[e.name]=t)}if(this._fieldsIndex=new i(l),this._createDefaultAttributes=j(v,R),w){if(w.startTimeField){const e=this._fieldsIndex.get(w.startTimeField);e?(w.startTimeField=e.name,e.type="esriFieldTypeDate"):w.startTimeField=null}if(w.endTimeField){const e=this._fieldsIndex.get(w.endTimeField);e?(w.endTimeField=e.name,e.type="esriFieldTypeDate"):w.endTimeField=null}if(w.trackIdField){const e=this._fieldsIndex.get(w.trackIdField);e?w.trackIdField=e.name:(w.trackIdField=null,n.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:w}}))}w.startTimeField||w.endTimeField||(n.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:w}}),w=null)}const x={warnings:n,featureErrors:[],layerDefinition:{...E,drawingInfo:I(T),templates:b(v),extent:F,geometryType:T,objectIdField:R,fields:l,hasZ:!!d,hasM:!!u,timeInfo:w},assignedObjectIds:{}};if(this._queryEngine=new g({fields:l,geometryType:T,hasM:u,hasZ:d,objectIdField:R,spatialReference:h,featureStore:new m({geometryType:T,hasM:u,hasZ:d}),timeInfo:w,cacheSpatialQueries:!0}),!a||!a.length)return this._nextObjectId=f,x;const O=c(R,a);return this._nextObjectId=O+1,await y(a,h),this._loadInitialFeatures(x,a)}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([F(t,s),y(e.adds,t),y(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let s,i,a=null,o=null,l=null;for(const t of e){const e=t.geometry;if(!r(e)&&(a||(a=n(e)),o||(o=e.spatialReference),null==s&&(s=x(e)),null==i&&(i=O(e)),a&&o&&null!=s&&null!=i))break}if(t&&t.length){let e=null;t.some((t=>{const s="esriFieldTypeOID"===t.type,i=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,s||i}))&&(l=e.name)}return{geometryType:a,spatialReference:o,objectIdField:l,hasM:i,hasZ:s}}_loadInitialFeatures(e,t){const{geometryType:s,hasM:i,hasZ:r,objectIdField:l,spatialReference:u,featureStore:d}=this._queryEngine,p=[];for(const i of t){if(null!=i.uid&&(e.assignedObjectIds[i.uid]=-1),i.geometry&&s!==n(i.geometry)){e.featureErrors.push(T("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=R(this._fieldsIndex,t,i.attributes,!0,e.warnings);r?e.featureErrors.push(r):(this._assignObjectId(t,i.attributes,!0),i.attributes=t,null!=i.uid&&(e.assignedObjectIds[i.uid]=i.attributes[l]),a(i.geometry)&&(i.geometry=h(i.geometry,i.geometry.spatialReference,u)),p.push(i))}if(d.addMany(o([],p,s,r,i,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:s}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),s&&s.length&&this._applyUpdateEdits(r,s),i&&i.length){for(const e of i)r.deleteResults.push(w(e));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:r,hasZ:l,objectIdField:u,spatialReference:d,featureStore:p}=this._queryEngine,f=[];for(const r of t){if(r.geometry&&i!==n(r.geometry)){s.push(T("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),o=R(this._fieldsIndex,t,r.attributes);o?s.push(o):(this._assignObjectId(t,r.attributes),r.attributes=t,null!=r.uid&&(e.uidToObjectId[r.uid]=r.attributes[u]),a(r.geometry)&&(r.geometry=h(v(r.geometry,d),r.geometry.spatialReference,d)),f.push(r),s.push(w(r.attributes[u])))}p.addMany(o([],f,i,l,r,u))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:r,objectIdField:o,spatialReference:d,featureStore:p}=this._queryEngine;for(const f of t){const{attributes:t,geometry:c}=f,m=t&&t[o];if(null==m){e.push(T(`Identifier field ${o} missing`));continue}if(!p.has(m)){e.push(T(`Feature with object id ${m} missing`));continue}const y=l(p.getFeature(m),s,r,i);if(a(c)){if(s!==n(c)){e.push(T("Incorrect geometry type."));continue}y.geometry=h(v(c,d),c.spatialReference,d)}if(t){const s=R(this._fieldsIndex,y.attributes,t);if(s){e.push(s);continue}}p.add(u(y,s,r,i,o)),e.push(w(m))}}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&t&&isFinite(t[i])?t[i]:this._nextObjectId++}}