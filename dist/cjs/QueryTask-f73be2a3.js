'use strict';

const request = require('./messageBundle-312ceb47.js');
const Query = require('./Query-35be2e91.js');
const utils = require('./utils-f7ec83ae.js');
const executeQueryJSON = require('./executeQueryJSON-d0e52ec5.js');
const query = require('./query-89593027.js');
const TopFeaturesQuery = require('./TopFeaturesQuery-2241be7c.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const featureConversionUtils = require('./featureConversionUtils-e6cca372.js');
const zscale = require('./zscale-fda0b32f.js');
const FeatureSet = require('./FeatureSet-2e9b97a5.js');
const normalizeUtils = require('./normalizeUtils-b6002011.js');
const queryZScale = require('./queryZScale-f443a9ba.js');
const Task = require('./Task-0c2f1790.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$4(t){const o=t.toJSON();return o.attachmentTypes&&(o.attachmentTypes=o.attachmentTypes.join(",")),o.keywords&&(o.keywords=o.keywords.join(",")),o.globalIds&&(o.globalIds=o.globalIds.join(",")),o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.size&&(o.size=o.size.join(",")),o}function a$3(o,s){const n={};for(const a of o){const{parentObjectId:o,parentGlobalId:c,attachmentInfos:i}=a;for(const a of i){const{id:i}=a,m=request.j$1(request.i$6(`${s}/${o}/attachments/${i}`)),p=executeQueryJSON.l.fromJSON(a);p.set({url:m,parentObjectId:o,parentGlobalId:c}),n[o]?n[o].push(p):n[o]=[p];}}return n}function c$2(t,e,r){let a={query:query.t({...t.query,f:"json",...n$4(e)})};return r&&(a={...r,...a,query:{...r.query,...a.query}}),request.E(t.path+"/queryAttachments",a)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function a$2(a,m,n){const s=utils.e(a);return c$2(s,TopFeaturesQuery.u.from(m),{...n}).then((t=>a$3(t.data.attachmentGroups,s.path)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function m$2(m,n,s){const p=utils.e(m);return query.S(p,Query.b.from(n),{...s}).then((t=>({count:t.data.count,extent:unitUtils.M.fromJSON(t.data.extent)})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(e,t){return t}function n$3(e,t,r,s){switch(r){case 0:return d$1(e,t+s,0);case 1:return "lowerLeft"===e.originPosition?d$1(e,t+s,1):l(e,t+s,1)}}function a$1(e,t,r,s){return 2===r?d$1(e,t,2):n$3(e,t,r,s)}function h(e,t,r,s){return 2===r?d$1(e,t,3):n$3(e,t,r,s)}function u$2(e,t,r,s){return 3===r?d$1(e,t,3):a$1(e,t,r,s)}function d$1({translate:e,scale:t},r,s){return e[s]+r*t[s]}function l({translate:e,scale:t},r,s){return e[s]-r*t[s]}class c$1{constructor(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=i,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){};}createFeatureResult(){return {fields:[],features:[]}}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const r=zscale.t(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!request.t(r))for(const t of e.features)r(t.geometry);}createSpatialReference(){return {}}addField(e,t){e.fields.push(t);const r=e.fields.map((e=>e.name));this.AttributesConstructor=function(){for(const e of r)this[e]=null;};}addFeature(e,t){e.features.push(t);}prepareFeatures(t){switch(this.transform=t.transform,this.options.applyTransform&&t.transform&&(this.applyTransform=this.deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this.addCoordinatePolygon(e,t,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this.addCoordinatePolyline(e,t,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this.addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this.createMultipointGeometry(e);break;}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this.AttributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t);}addQueryGeometry(e,t){const{queryGeometry:o,queryGeometryType:i}=t,n=featureConversionUtils.mt(o.clone(),o,!1,!1,this.transform),a=featureConversionUtils.nt(n,i,!1,!1);e.queryGeometryType=i,e.queryGeometry={...a};}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t;}}transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}addCoordinatePolyline(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r);}addCoordinatePolygon(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r);}addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(s);}createPolygonGeometry(e){return {rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createPolylineGeometry(e){return {paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createMultipointGeometry(e){return {points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(t,r),o=e[e.length-1];0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),o.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=s;}deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?u$2:t?a$1:r?h:n$3}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n$2(o,s,n){const p=utils.e(o),i={...n},u=Query.b.from(s),m=!u.quantizationParameters,{data:f}=await query.c(p,u,new c$1({sourceSpatialReference:u.sourceSpatialReference,applyTransform:m}),i);return f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),!o.outFields||null!=t&&t.returnCountOnly?delete o.outFields:-1!==o.outFields.indexOf("*")?o.outFields="*":o.outFields=o.outFields.join(","),o.outSpatialReference&&(o.outSR=o.outSR.wkid||JSON.stringify(o.outSR.toJSON()),delete o.outSpatialReference),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function r(e,t,o){const r=await s$3(e,t,o),n=r.data,a=n.geometryType,d=n.spatialReference,i={};for(const s of n.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:d,hasZ:!!n.hasZ,hasM:!!n.hasM,features:s.relatedRecords};if(null!=s.objectId)i[s.objectId]=e;else for(const t in s)s.hasOwnProperty(t)&&"relatedRecords"!==t&&(i[s[t]]=e);}return {...r,data:i}}async function n$1(e,t,o){const r=await s$3(e,t,o,{returnCountOnly:!0}),n=r.data,a={};for(const s of n.relatedRecordGroups)null!=s.objectId&&(a[s.objectId]=s.count);return {...r,data:a}}async function s$3(r,n,s={},a){const d=query.t({...r.query,f:"json",...a,...o(n,a)});return request.E(r.path+"/queryRelatedRecords",{...s,query:{...s.query,...d}})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(e,n,u){n=TopFeaturesQuery.l.from(n);const a=utils.e(e);return r(a,n,u).then((t=>{const r=t.data,e={};return Object.keys(r).forEach((t=>e[t]=FeatureSet['default'].fromJSON(r[t]))),e}))}async function u$1(r,o,n){o=TopFeaturesQuery.l.from(o);const u=utils.e(r);return n$1(u,o,{...n}).then((t=>t.data))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u="Layer does not support extent calculation.";function y(t,r){var n,i;const s=t.geometry,l=t.toJSON(),u=l;if(request.r(s)&&(u.geometry=JSON.stringify(s),u.geometryType=unitUtils.v$1(s),u.inSR=s.spatialReference.wkid||JSON.stringify(s.spatialReference)),null!=(n=l.topFilter)&&n.groupByFields&&(u.topFilter.groupByFields=l.topFilter.groupByFields.join(",")),null!=(i=l.topFilter)&&i.orderByFields&&(u.topFilter.orderByFields=l.topFilter.orderByFields.join(",")),l.topFilter&&(u.topFilter=JSON.stringify(u.topFilter)),l.objectIds&&(u.objectIds=l.objectIds.join(",")),l.orderByFields&&(u.orderByFields=l.orderByFields.join(",")),l.outFields&&!(null!=r&&r.returnCountOnly||null!=r&&r.returnExtentOnly||null!=r&&r.returnIdsOnly)?-1!==l.outFields.indexOf("*")?u.outFields="*":u.outFields=l.outFields.join(","):delete u.outFields,l.outSR?u.outSR=l.outSR.wkid||JSON.stringify(l.outSR):s&&l.returnGeometry&&(u.outSR=u.inSR),l.returnGeometry&&delete l.returnGeometry,l.timeExtent){const t=l.timeExtent,{start:e,end:r}=t;null==e&&null==r||(u.time=e===r?e:`${null==e?"null":e},${null==r?"null":r}`),delete l.timeExtent;}return u}async function m$1(t,e,r,n){const o=await c(t,e,"json",n);return queryZScale.r(e,r,o.data),o}async function d(t,r,n){return request.r(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):c(t,r,"json",n,{returnIdsOnly:!0})}async function p(t,r,n){return request.r(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):c(t,r,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(u);if(e.hasOwnProperty("count"))throw new Error(u);return t}))}function a(t,r,n){return request.r(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):c(t,r,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function c(o,s,u,m={},d={}){const p="string"==typeof o?request.U(o):o,a=s.geometry?[s.geometry]:[];return m.responseType="pbf"===u?"array-buffer":"json",normalizeUtils.v(a,null,m).then((n=>{const o=n&&n[0];request.r(o)&&((s=s.clone()).geometry=o);const i=query.t({...p.query,f:u,...d,...y(s,d)});return request.E(request.D(p.path,"queryTopFeatures"),{...m,query:{...i,...m.query}})}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s$2(s,p,u,a){const m=utils.e(s),i={...a},{data:f}=await m$1(m,TopFeaturesQuery.S.from(p),u,i);return FeatureSet['default'].fromJSON(f)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s$1(s,e,p){const a=utils.e(s);return (await d(a,TopFeaturesQuery.S.from(e),{...p})).data.objectIds}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function m(m,s,n){const p$1=utils.e(m),a=await p(p$1,TopFeaturesQuery.S.from(s),{...n});return {count:a.data.count,extent:unitUtils.M.fromJSON(a.data.extent)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s(s,e,p){const u=utils.e(s);return (await a(u,TopFeaturesQuery.S.from(e),{...p})).data.count}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let g=class extends Task.l{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null;}execute(e,t){return this.executeJSON(e,t).then((r=>this.featureSetFromJSON(e,r,t)))}async executeJSON(e,t){var o;const s={...this.requestOptions,...t},i=this._normalizeQuery(e),u=null!=(null==(o=e.outStatistics)?void 0:o[0]),n=request.s$3("featurelayer-pbf-statistics"),a=!u||n;let c;if("pbf"===this.format&&a)try{c=await n$2(this.url,i,s);}catch(p){if("query:parsing-pbf"!==p.name)throw p;this.format="json";}return "json"!==this.format&&a||(c=await executeQueryJSON.a(this.url,i,s)),this._normalizeFields(c.fields),c}async featureSetFromJSON(e,t,r){if(!(this._queryIs3DObjectFormat(e)&&request.r(this.infoFor3D)&&t.features&&t.features.length))return FeatureSet['default'].fromJSON(t);const{meshFeatureSetFromJSON:s}=await request.P(Promise.resolve().then(function () { return require('./meshFeatureSet-a2f3b664.js'); }).then(function (n) { return n.meshFeatureSet; }),r);return s(e,this.infoFor3D,t)}executeForCount(e,t){const r={...this.requestOptions,...t},o=this._normalizeQuery(e);return executeQueryJSON.n(this.url,o,r)}executeForExtent(e,t){const r={...this.requestOptions,...t},o=this._normalizeQuery(e);return m$2(this.url,o,r)}executeForIds(e,t){const r={...this.requestOptions,...t},o=this._normalizeQuery(e);return executeQueryJSON.s(this.url,o,r)}executeRelationshipQuery(e,t){e=TopFeaturesQuery.l.from(e);const r={...this.requestOptions,...t};return (this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),n(this.url,e,r)}executeRelationshipQueryForCount(e,t){e=TopFeaturesQuery.l.from(e);const r={...this.requestOptions,...t};return (this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),u$1(this.url,e,r)}executeAttachmentQuery(e,t){const r={...this.requestOptions,...t};return a$2(this.url,e,r)}executeTopFeaturesQuery(e,t){const r={...this.requestOptions,...t};return s$2(this.parsedUrl,e,this.sourceSpatialReference,r)}executeForTopIds(e,t){const r={...this.requestOptions,...t};return s$1(this.parsedUrl,e,r)}executeForTopExtents(e,t){const r={...this.requestOptions,...t};return m(this.parsedUrl,e,r)}executeForTopCount(e,t){const r={...this.requestOptions,...t};return s(this.parsedUrl,e,r)}_normalizeQuery(e){let r=Query.b.from(e);if(r.sourceSpatialReference=r.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(r=r===e?r.clone():r,r.gdbVersion=e.gdbVersion||this.gdbVersion,r.dynamicDataSource=e.dynamicDataSource?Query.K.from(e.dynamicDataSource):this.dynamicDataSource),request.r(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){r=r===e?r.clone():r,r.formatOf3DObjects=null;for(const e of this.infoFor3D.queryFormats){if("3D_glb"===e.id){r.formatOf3DObjects=e.id;break}"3D_gltf"!==e.id||r.formatOf3DObjects||(r.formatOf3DObjects=e.id);}if(!r.formatOf3DObjects)throw new request.s$1("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(request.t(r.outFields)||!r.outFields.includes("*")){r=r===e?r.clone():r,request.t(r.outFields)&&(r.outFields=[]);const{originX:t,originY:o,originZ:i,translationX:u,translationY:n,translationZ:a,scaleX:c,scaleY:p,scaleZ:m,rotationX:f,rotationY:l,rotationZ:h,rotationDeg:d}=this.infoFor3D.transformFieldRoles;r.outFields.push(t,o,i,u,n,a,c,p,m,f,l,h,d);}}return r}_normalizeFields(e){if(request.r(this.fieldsIndex)&&request.r(e))for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON());}}_queryIs3DObjectFormat(e){return request.r(this.infoFor3D)&&e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};request.e([request.d({type:Query.K})],g.prototype,"dynamicDataSource",void 0),request.e([request.d()],g.prototype,"fieldsIndex",void 0),request.e([request.d()],g.prototype,"format",void 0),request.e([request.d()],g.prototype,"gdbVersion",void 0),request.e([request.d()],g.prototype,"infoFor3D",void 0),request.e([request.d()],g.prototype,"sourceSpatialReference",void 0),g=request.e([request.i("esri.tasks.QueryTask")],g);const Q=g;

exports.Q = Q;
exports.a = a$3;
