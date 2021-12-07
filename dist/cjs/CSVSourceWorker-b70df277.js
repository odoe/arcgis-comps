'use strict';

require('./geometry-ef17530a.js');
const request = require('./messageBundle-8be88d04.js');
const number = require('./number-5cee27f2.js');
const projection = require('./projection-b19710fa.js');
const json = require('./json-2c41fbe0.js');
const OptimizedFeature = require('./OptimizedFeature-cd4fe3c6.js');
const FeatureStore = require('./FeatureStore-bb1fc704.js');
const projectionSupport = require('./projectionSupport-7159f0ef.js');
const QueryEngine = require('./QueryEngine-d6177b5a.js');
const clientSideDefaults = require('./clientSideDefaults-65642e53.js');
const FieldsIndex = require('./FieldsIndex-664af19b.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
require('./index-fde8502c.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./unitUtils-083cb8d0.js');
require('./mat4-f68486bc.js');
require('./aaBoundingRect-56648c00.js');
require('./geodesicConstants-047d586a.js');
require('./aaBoundingBox-c372701a.js');
require('./featureConversionUtils-df21e951.js');
require('./jsonUtils-b6068079.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./PooledRBush-793d5c9f.js');
require('./quickselect-d3f68f5a.js');
require('./optimizedFeatureQueryEngineAdapter-32c6c975.js');
require('./centroid-d874c2ee.js');
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
const n=/^\s*"([\S\s]*)"\s*$/,t=/""/g,e="\n",o=[","," ",";","|","\t"];function*c(n,t,e){let o=0;for(;o<=n.length;){const c=n.indexOf(t,o),i=n.substring(o,c>-1?c:void 0);o+=i.length+t.length,e&&!i.trim()||(yield i);}}function i(n){const t=n.includes("\r\n")?"\r\n":e;return c(n,t,!0)}function r(n,t){return c(n,t,!1)}function f(n){const t=n.trim();let e=0,c="";for(const i of o){const n=t.split(i).length;n>e&&(e=n,c=i);}return ""===c?null:c}function*l(o,c,i,f=(()=>Object.create(null))){let l="",u="",d=0,g=f(),x=0;n:for(const h of o){const o=r(h,i);for(const e of o)if(l+=u+e,u="",d+=s(e),d%2==0){if(d>0){const e=n.exec(l);if(!e){g=f(),x=0,l="",d=0;continue n}g[c[x]]=e[1].replace(t,'"'),x++;}else g[c[x]]=l,x++;l="",d=0;}else u=i;0===d?(yield g,g=f(),x=0):u=e;}}function s(n){let t=0,e=0;for(e=n.indexOf('"',e);e>=0;)t++,e=n.indexOf('"',e+1);return t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const j=clientSideDefaults.u("esriGeometryPoint"),S=["csv"],q=[0,0];class v{constructor(e,t){this.x=e,this.y=t;}}class C{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null;}async load(e,t={}){var i;this.loadOptions=e;const[n]=await Promise.all([this._fetch(t.signal),this._checkProjection(null==e||null==(i=e.parsingOptions)?void 0:i.spatialReference)]),r=D(n,e);this.locationInfo=r.locationInfo,this.delimiter=r.delimiter,this._queryEngine=this._createQueryEngine(r);const s=await this._createFeatures(n);if(this._queryEngine.featureStore.addMany(s),r.layerDefinition.extent=this._queryEngine.fullExtent,r.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;r.layerDefinition.timeInfo.timeExtent=[e,t];}return r}async applyEdits(){throw new request.s("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var n;return this.loadOptions.customParameters=e,null==(n=this._snapshotTask)||n.abort(),this._snapshotTask=request.F$1(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(e=>{this._queryEngine.featureStore.clear(),request.d$1(e)||request.s$1.getLogger("esri.layers.CSVLayer").error(new request.s("csv-layer:refresh","An error occurred during refresh",{error:e}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _fetch(i){const{url:n,customParameters:r}=this.loadOptions;if(!n)throw new request.s("csv-layer:invalid-source","url not defined");const s=request.U(n);return (await request.E(s.path,{query:{...s.query,...r},responseType:"text",signal:i})).data}_createQueryEngine(e){const{objectIdField:t,fields:i,extent:n,timeInfo:r}=e.layerDefinition,s=new FeatureStore.m({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new QueryEngine.V({fields:i,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:r,objectIdField:t,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:s})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:i$1}=this.locationInfo,{objectIdField:n,fieldsIndex:r,spatialReference:s}=this._queryEngine;let o=[];const a=[],m=r.fields.filter((e=>e.name!==n)).map((e=>e.name));let h=0;const g=i(e);g.next();const F={};for(const l of r.fields)if("esriFieldTypeOID"!==l.type&&"esriFieldTypeGlobalID"!==l.type){const e=opacityUtils.P(l);void 0!==e&&(F[l.name]=e);}const N=l(g,m,this.delimiter,clientSideDefaults.n(F,n));for(const l of N){const e=this._parseCoordinateValue(l[t]),s=this._parseCoordinateValue(l[i$1]);if(null!=s&&null!=e&&!isNaN(e)&&!isNaN(s)){l[t]=e,l[i$1]=s;for(const e in l)if(e!==t&&e!==i$1)if(r.isDateField(e)){const t=new Date(l[e]);l[e]=L(t,l[e])?t.getTime():null;}else if(r.isNumericField(e)){const t=M(l[e]);isNaN(t)?l[e]=null:l[e]=t;}l[n]=h,h++,o.push(new v(s,e)),a.push(l);}}if(!request.E$2({wkid:4326},s))if(request.T$3(s))for(const l of o)[l.x,l.y]=request.y$7(l.x,l.y,q);else o=projection.Q(json.t,o,request.k.WGS84,s,null);const b=[];for(let l=0;l<o.length;l++){const{x:e,y:t}=o[l],i=a[l];i[n]=l+1,b.push(new OptimizedFeature.s(new OptimizedFeature.t([],[e,t]),i,null,i[n]));}return b}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=M(e);return (isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await projectionSupport.f(request.c$6,e);}catch{throw new request.s("csv-layer:projection-not-supported","Projection not supported")}}}function D(e,i$1){const n=i$1.parsingOptions||{},r={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},s=i(e);let{value:o}=s.next();if(!o)throw new request.s("csv-layer:empty-csv","CSV is empty",{csv:e});if(o=o.trim(),!n.delimiter){const e=f(o);if(!e)throw new request.s("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");r.delimiter=e;}const l=o.split(r.delimiter),u=r.layerDefinition={name:request.pt(i$1.url,S)||"csv",drawingInfo:j,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const e=P(l);if(!n.longitudeField&&!e.longitudeFieldName||!n.latitudeField&&!e.latitudeFieldName)throw new request.s("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");r.locationInfo={longitudeFieldName:n.longitudeField||e.longitudeFieldName,latitudeFieldName:n.latitudeField||e.latitudeFieldName};}const d=V(s,r.delimiter,l,r.locationInfo);if(n.fields&&n.fields.length){const e=new Map;for(const t of n.fields)e.set(t.name.toLowerCase(),t);for(const t of d){const i=e.get(t.name.toLowerCase());if(i){const e=t.name;Object.assign(t,i),t.name=e;}}}u.fields=d;if(!u.fields.some((e=>"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};u.objectIdField=e.name,u.fields.unshift(e);}if(u.timeInfo){const e=new FieldsIndex.d(u.fields),t=u.timeInfo;if(t.startTimeField){const i=e.get(t.startTimeField);i?(t.startTimeField=i.name,i.type="esriFieldTypeDate"):t.startTimeField=null;}if(t.endTimeField){const i=e.get(t.endTimeField);i?(t.endTimeField=i.name,i.type="esriFieldTypeDate"):t.endTimeField=null;}if(t.trackIdField){const i=e.get(t.trackIdField);t.trackIdField=i?i.name:null;}t.startTimeField||t.endTimeField||(u.timeInfo=null);}return r}const O=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],k=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"];function P(e){const t=e.map((e=>e.toLowerCase()));return {longitudeFieldName:e[t.indexOf(k.find((e=>t.includes(e))))],latitudeFieldName:e[t.indexOf(O.find((e=>t.includes(e))))]}}function V(e,t,i,n){const r=[],s=l(e,i,t),o=[];e:for(;o.length<10;){const{value:e,done:t}=s.next();if(t)break e;o.push(e);}for(const a of i)if(a===n.longitudeFieldName||a===n.latitudeFieldName)r.push({name:a,type:"esriFieldTypeDouble",alias:a});else {const e=R(o.map((e=>e[a]))),t={name:a,type:null,alias:a};switch(e){case"integer":t.type="esriFieldTypeInteger";break;case"double":t.type="esriFieldTypeDouble";break;case"date":t.type="esriFieldTypeDate",t.length=36;break;default:t.type="esriFieldTypeString",t.length=255;}r.push(t);}return r}function R(e){if(!e.length)return "string";const t=/[^+-.,0-9]/;return e.map((e=>{let i=!1;if(""!==e){if(t.test(e))i=!0;else {let t=M(e);if(!isNaN(t))return /[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else {if(t=Number(e),!isNaN(t))return "double";if(-1===e.indexOf(","))i=!0;else {if(e=e.replace(",","."),t=Number(e),!isNaN(t))return "double";i=!0;}}}if(i){if(!/^[-]?\d*[.,]?\d*$/.test(e)){return L(new Date(e),e)?"date":"string"}return "string"}return "string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}const G=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,Q=Number.isNaN(new Date("technology 10").getTime());function L(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return !1;let i=!0;if(!Q&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,n=0;for(;!t&&n<=e.length;)t=!G.test(e[n]),n++;i=!t;}}return i}const M=function(){const e=number.a(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),r=e.factor;return function(n){const s=t.exec(n);if(e.factor=r,!s)return NaN;let o=s[1];if(!s[1]){if(!s[2])return NaN;o=s[2],e.factor*=-1;}return o=o.replace(i,"").replace(e.decimal,"."),+o*e.factor}}();

exports.default = C;
exports.inferFieldType = R;
exports.inferFields = V;
exports.inferLocationInfo = P;
