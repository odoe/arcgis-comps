import { p as p$9, e as e$2, a as d$2, i as i$4, aa as b$1, j as o$4, E, a7 as j$1, ai as m$3, h as s$3, A as r$1, a1 as z$1, an as V$2, ae as n$4, ab as t$1, ag as r$2 } from './jsxFactory-b8b7429b.js';
import { z as k$1, M as M$1, e as e$4, aF as v$3, ar as c$2, u as u$3 } from './Graphic-75d1efd2.js';
import { getSize as V$1, getColor as d$3, getOpacity as v$2, getRotationAngle as b$2, getSizeRangeAtScale as U$1 } from './visualVariableUtils-d30b1042.js';
import { v as v$1 } from './normalizeUtils-097054a0.js';
import { y as y$2 } from './Field-3662c57d.js';
import { a as a$1 } from './JSONSupport-15eefdaf.js';
import { e as e$3, n as n$3 } from './utils-5cb95ff2.js';
import g$2 from './FeatureSet-ac01aefd.js';
import { a as a$2 } from './GPMessage-2d7fd1d9.js';
import { o as o$5 } from './floorFilterUtils-a09da11b.js';
import { l as l$1 } from './Task-04425ab7.js';
import './index-921bd636.js';
import './compilerUtils-fd4d1928.js';
import './lengthUtils-c1fc84e6.js';
import './sizeVariableUtils-4d3662df.js';
import './fieldType-1c6ed2e9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i$3=class extends p$9{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1;}};e$2([d$2({type:k$1})],i$3.prototype,"outSpatialReference",void 0),e$2([d$2({type:M$1})],i$3.prototype,"processExtent",void 0),e$2([d$2({type:k$1})],i$3.prototype,"processSpatialReference",void 0),e$2([d$2({nonNullable:!0})],i$3.prototype,"returnFeatureCollection",void 0),e$2([d$2({nonNullable:!0})],i$3.prototype,"returnM",void 0),e$2([d$2({nonNullable:!0})],i$3.prototype,"returnZ",void 0),i$3=e$2([i$4("esri/rest/geoprocessor/GPOptions")],i$3),i$3.from=b$1(i$3);const n$2=i$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p$8=class extends a$1{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null;}};e$2([d$2({type:M$1})],p$8.prototype,"extent",void 0),e$2([d$2()],p$8.prototype,"height",void 0),e$2([d$2()],p$8.prototype,"href",void 0),e$2([d$2()],p$8.prototype,"opacity",void 0),e$2([d$2()],p$8.prototype,"rotation",void 0),e$2([d$2()],p$8.prototype,"scale",void 0),e$2([d$2()],p$8.prototype,"visible",void 0),e$2([d$2()],p$8.prototype,"width",void 0),p$8=e$2([i$4("esri.layer.support.MapImage")],p$8);const i$2=p$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e$1=class extends a$1{constructor(r){super(r),this.itemId=null,this.url=null;}};e$2([d$2({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],e$1.prototype,"itemId",void 0),e$2([d$2({type:String,json:{write:!0}})],e$1.prototype,"url",void 0),e$1=e$2([i$4("esri.rest.support.DataFile")],e$1);const p$7=e$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$1=new o$4({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let p$6=class extends a$1{constructor(r){super(r),this.distance=0,this.units=null;}};e$2([d$2({json:{write:!0}})],p$6.prototype,"distance",void 0),e$2([d$2({json:{read:i$1.read,write:i$1.write}})],p$6.prototype,"units",void 0),p$6=e$2([i$4("esri/rest/support/LinearUnit")],p$6);const c$1=p$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u$2=new o$4({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let o$3=class extends a$1{constructor(e){super(e),this.dataType=null,this.value=null;}};e$2([d$2({json:{read:u$2.read,write:u$2.write}})],o$3.prototype,"dataType",void 0),e$2([d$2()],o$3.prototype,"value",void 0),o$3=e$2([i$4("esri.rest.support.ParameterValue")],o$3);const i=o$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends a$1{constructor(r){super(r),this.format=null,this.itemId=null,this.url=null;}};e$2([d$2()],e.prototype,"format",void 0),e$2([d$2({json:{read:{source:"itemID"},write:{target:"itemID"}}})],e.prototype,"itemId",void 0),e$2([d$2()],e.prototype,"url",void 0),e=e$2([i$4("esri/rest/support/RasterData")],e);const p$5=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function m$2(t,r,u,l,s){const n={},i={},c=[];return p$4(l,c,n),v$1(c).then((a=>{const{outSpatialReference:c,processExtent:m,processSpatialReference:p,returnFeatureCollection:f,returnM:G,returnZ:v}=u,{path:S}=e$3(t);for(const e in n){const t=n[e];i[e]=a.slice(t[0],t[1]);}const y=c?c.wkid||c:null,D=p?p.wkid||p:null,J="execute"===r?{returnFeatureCollection:f||void 0,returnM:G||void 0,returnZ:v||void 0}:null,M=P$1({...m?{context:{extent:m,outSR:y,processSR:D}}:{"env:outSR":y,"env:processSR":D},...l,...J,f:"json"},null,i),N={...s,query:M};return E(`${S}/${r}`,N)}))}function p$4(e,a,t){for(const r in e){const o=e[r];if(o&&"object"==typeof o&&o instanceof g$2){const{features:e}=o;t[r]=[a.length,a.length+e.length],e.forEach((e=>{a.push(e.geometry);}));}}}function f$1(e){const a=e.dataType,o=i.fromJSON(e);switch(a){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return o;case"GPDate":o.value=new Date(o.value);break;case"GPDataFile":o.value=p$7.fromJSON(o.value);break;case"GPLinearUnit":o.value=c$1.fromJSON(o.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const a=e.value.url;o.value=a?p$7.fromJSON(o.value):g$2.fromJSON(o.value);break}case"GPRasterData":case"GPRasterDataLayer":{const a=e.value.mapImage;o.value=a?i$2.fromJSON(a):p$5.fromJSON(o.value);break}case"GPField":o.value=y$2.fromJSON(o.value);break;case"GPMultiValue:GPDate":{const e=o.value;o.value=e.map((e=>new Date(e)));break}case"GPMultiValue:GPDataFile":o.value=o.value.map((e=>p$7.fromJSON(e)));break;case"GPMultiValue:GPLinearUnit":o.value=o.value.map((e=>c$1.fromJSON(e)));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":o.value=o.value.map((e=>g$2.fromJSON(e)));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":o.value=o.value.map((e=>e?i$2.fromJSON(e):p$5.fromJSON(o.value)));break;case"GPMultiValue:GPField":o.value=o.value.map((e=>y$2.fromJSON(e)));}return o}function P$1(e,a,t){for(const r in e){const a=e[r];Array.isArray(a)?e[r]=JSON.stringify(a.map((e=>P$1({item:e},!0).item))):a instanceof Date&&(e[r]=a.getTime());}return n$3(e,a,t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function o$2(o,m,a,p){return a=n$2.from(a||{}),m$2(o,"execute",a,m,p).then((s=>{const t=s.data.results||[],o=s.data.messages||[];return {results:t.map(f$1),messages:o.map((s=>a$2.fromJSON(s)))}}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$3;const h$1=new o$4({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let m$1=p$3=class extends a$1{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null;}cancelJob(e){const{jobId:s,sourceUrl:r}=this,{path:o}=e$3(r),i={...this.requestOptions,...e,query:{f:"json"}};this._clearTimer();return E(`${o}/jobs/${s}/cancel`,i).then((e=>{const t=p$3.fromJSON(e.data);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}destroy(){clearInterval(this._timer);}checkJobStatus(e){const{path:s}=e$3(this.sourceUrl),r={...this.requestOptions,...e,query:{f:"json"}},o=`${s}/jobs/${this.jobId}`;return E(o,r).then((({data:e})=>{const t=p$3.fromJSON(e);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}fetchResultData(e,s,r){s=n$2.from(s||{});const{returnFeatureCollection:o,returnM:i,returnZ:a,outSpatialReference:c}=s,{path:j}=e$3(this.sourceUrl),p=P$1({returnFeatureCollection:o,returnM:i,returnZ:a,outSR:c,returnType:"data",f:"json"},null),h={...this.requestOptions,...r,query:p},m=`${j}/jobs/${this.jobId}/results/${e}`;return E(m,h).then((e=>f$1(e.data)))}fetchResultImage(e,s,r){const{path:o}=e$3(this.sourceUrl),i={...s.toJSON(),f:"json"},a=P$1(i),c={...this.requestOptions,...r,query:a},u=`${o}/jobs/${this.jobId}/results/${e}`;return E(u,c).then((e=>f$1(e.data)))}async fetchResultMapImageLayer(){const{path:e}=e$3(this.sourceUrl),t=e.indexOf("/GPServer/"),s=`${e.substring(0,t)}/MapServer/jobs/${this.jobId}`;return new(0,(await import('./MapImageLayer-6133d68a.js')).default)({url:s})}async waitForJobCompletion(e={}){const{interval:t=1e3,signal:s,statusCallback:r}=e;return new Promise(((e,a)=>{j$1(s,(()=>{this._clearTimer(),a(m$3());})),this._clearTimer();const c=setInterval((()=>{this._timer||a(m$3()),this.checkJobStatus(this.requestOptions).then((t=>{const{jobStatus:s}=t;switch(this.jobStatus=s,s){case"job-succeeded":this._clearTimer(),e(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":r&&r(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),a(this);}}));}),t);this._timer=c;}))}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null);}};e$2([d$2()],m$1.prototype,"jobId",void 0),e$2([d$2({json:{read:h$1.read}})],m$1.prototype,"jobStatus",void 0),e$2([d$2({type:[a$2]})],m$1.prototype,"messages",void 0),e$2([d$2()],m$1.prototype,"requestOptions",void 0),e$2([d$2({json:{write:!0}})],m$1.prototype,"sourceUrl",void 0),m$1=p$3=e$2([i$4("esri.rest.support.JobInfo")],m$1);const d$1=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s$2(s,m,n,f){return n=n$2.from(n||{}),m$2(s,"submitJob",n,m,f).then((o=>{const r=d$1.fromJSON(o.data);return r.sourceUrl=s,r}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p$2=new o$4({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"}),n$1=p$2.fromJSON.bind(p$2),g$1=p$2.toJSON.bind(p$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=new o$4({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"}),r=t.fromJSON.bind(t),o$1=t.toJSON.bind(t);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o="simple-marker",a="picture-marker",u$1="simple-line",l="simple-fill",s$1="shield-label-symbol",y$1="text";function f(f,p){const{graphic:c,renderer:m,symbol:g}=p,d=g.type;if(d===y$1||d===s$1||!("visualVariables"in m)||!m.visualVariables)return;const b=m.getVisualVariablesForType("size"),h=m.getVisualVariablesForType("color"),w=m.getVisualVariablesForType("opacity"),V=m.getVisualVariablesForType("rotation"),T=b[0],v=h[0],G=w[0],k=V[0];if(T){const t=d===o?g.style:null,n=V$1(T,c,{shape:t});null!=n&&(d===o?f.size=e$4(n):d===a?(f.width=e$4(n),f.height=e$4(n)):d===u$1?f.width=e$4(n):f.outline&&(f.outline.width=e$4(n)));}if(v){const e=d$3(v,c);(e&&d===o||d===u$1||d===l)&&(f.color=e?e.toJSON():void 0);}if(G){const e=v$2(G,c);null!=e&&f.color&&(f.color[3]=Math.round(255*e));}k&&(f.angle=-b$2(m,c));}function p$1(){return {layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function c(){return {layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function m(){return {layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function g(){return {layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function d(e,r=15){const t=e.canvas.width,n=e.canvas.height,i=e.getImageData(0,0,t,n).data;let o,a,u,l,s,y;e:for(a=n;a--;)for(o=t;o--;)if(i[4*(t*a+o)+3]>r){y=a;break e}if(!y)return null;e:for(o=t;o--;)for(a=y+1;a--;)if(i[4*(t*a+o)+3]>r){s=o;break e}e:for(o=0;o<=s;++o)for(a=y+1;a--;)if(i[4*(t*a+o)+3]>r){u=o;break e}e:for(a=0;a<=y;++a)for(o=u;o<=s;++o)if(i[4*(t*a+o)+3]>r){l=a;break e}return {x:u,y:l,width:s-u,height:y-l}}function b(e,r){const t=e.allLayerViews.items;if(r===e.scale)return t.filter((e=>!e.suspended));const n=new Array;for(const i of t)k(i.parent)&&!n.includes(i.parent)||!i.visible||r&&"isVisibleAtScale"in i&&!i.isVisibleAtScale(r)||n.push(i);return n}function h(e){return e&&"bing-maps"===e.type}function w(e){return e&&"csv"===e.type}function V(e){return e&&"feature"===e.type}function T(e){return e&&"geojson"===e.type}function v(e){return e&&"graphics"===e.type}function G$1(e){return e&&"group"===e.type}function k(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function S(e){return e&&"imagery"===e.type}function D(e){return e&&"imagery-tile"===e.type}function L(e){return e&&"kml"===e.type}function P(e){return e&&"map-image"===e.type}function I(e){return e&&"map-notes"===e.type}function F(e){return e&&"open-street-map"===e.type}function j(e){return e&&"stream"===e.type}function x(e){return e&&"tile"===e.type}function A(e){return e&&"vector-tile"===e.type}function M(e){return e&&"web-tile"===e.type}function z(e){return e&&"wms"===e.type}function U(e){return e&&"wmts"===e.type}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends p$9{constructor(t){super(t),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0;}};e$2([d$2()],s.prototype,"attributionVisible",void 0),e$2([d$2()],s.prototype,"exportOptions",void 0),e$2([d$2()],s.prototype,"forceFeatureAttributes",void 0),e$2([d$2()],s.prototype,"format",void 0),e$2([d$2()],s.prototype,"label",void 0),e$2([d$2()],s.prototype,"layout",void 0),e$2([d$2()],s.prototype,"layoutOptions",void 0),e$2([d$2()],s.prototype,"outScale",void 0),e$2([d$2()],s.prototype,"scalePreserved",void 0),e$2([d$2()],s.prototype,"showLabels",void 0),s=e$2([i$4("esri.rest.support.PrintTemplate")],s);const p=s;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const q={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},W=new o$4({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),B=new o$4({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),G=new Map;async function Q(e,t,r){const a=Z(e);let n=G.get(a);return Promise.resolve().then((()=>n?{data:n.gpMetadata}:(n={gpServerUrl:a,is11xService:!1,legendLayerNameMap:{},legendLayers:[]},E(a,{query:{f:"json"}})))).then((e=>(n.gpMetadata=e.data,n.cimVersion=n.gpMetadata.cimVersion,n.is11xService=!!n.cimVersion,G.set(a,n),X(t,n)))).then((i=>{const a=Ie(n);let s;const l=e=>"sync"===a?e.results&&e.results[0]&&e.results[0].value:s.fetchResultData("Output_File",null,r).then((e=>e.value));return "async"===a?s$2(e,i,null,r).then((e=>(s=e,e.waitForJobCompletion({interval:t.updateDelay}).then(l)))):o$2(e,i,null,r).then(l)}))}async function H(e){const t=Z(e);return Ie(G.get(t))}async function X(e,t){t=t||{is11xService:!1,legendLayerNameMap:{},legendLayers:[]};const i=e.template||new p;null==i.showLabels&&(i.showLabels=!0);const a=i.exportOptions;let n;const s=o$1(i.layout);if(a){if(n={dpi:a.dpi},"map_only"===s.toLowerCase()||""===s){const e=a.width,t=a.height;n.outputSize=[e,t];}}const l=i.layoutOptions;let o;if(l){let e,t;"Miles"===l.scalebarUnit||"Kilometers"===l.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==l.scalebarUnit&&"Feet"!==l.scalebarUnit||(e="Meters",t="Feet"),o={titleText:l.titleText,authorText:l.authorText,copyrightText:l.copyrightText,customTextElements:l.customTextElements,scaleBarOptions:{metricUnit:W.toJSON(e),metricLabel:q[e],nonMetricUnit:W.toJSON(t),nonMetricLabel:q[t]}};}let c=null;null!=l&&l.legendLayers&&(c=l.legendLayers.map((e=>{t.legendLayerNameMap[e.layerId]=e.title;const i={id:e.layerId};return e.subLayerIds&&(i.subLayerIds=e.subLayerIds),i})));const u=await Y(e,i,t);if(u.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),i=/[\u0600-\u06FF]/,a=t=>{const r=t.text,a=t.font,n=a&&a.family&&a.family.toLowerCase();r&&a&&("arial"===n||"arial unicode ms"===n)&&(a.family=e.test(r)?"Arial Unicode MS":"Arial","normal"!==a.style&&i.test(r)&&(a.family="Arial Unicode MS"));},n=()=>{throw new s$3("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};u.operationalLayers.forEach((e=>{var i,r,s;null!=(i=e.featureCollection)&&i.layers?e.featureCollection.layers.forEach((e=>{var i,r,s,l;if(null!=(i=e.layerDefinition)&&null!=(r=i.drawingInfo)&&null!=(s=r.renderer)&&s.symbol){const i=e.layerDefinition.drawingInfo.renderer;"esriTS"===i.symbol.type?a(i.symbol):"CIMSymbolReference"!==i.symbol.type||t.is11xService||n();}null!=(l=e.featureSet)&&l.features&&e.featureSet.features.forEach((e=>{e.symbol&&("esriTS"===e.symbol.type?a(e.symbol):"CIMSymbolReference"!==e.symbol.type||t.is11xService||n());}));})):!t.is11xService&&null!=(r=e.layerDefinition)&&null!=(s=r.drawingInfo)&&s.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&n();}));}e.outSpatialReference&&(u.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(u,{exportOptions:n,layoutOptions:o||{}}),Object.assign(u.layoutOptions,{legendOptions:{operationalLayers:null!=c?c:t.legendLayers.slice()}}),t.legendLayers.length=0,G.set(t.gpServerUrl,t);const y={Web_Map_as_JSON:JSON.stringify(u),Format:g$1(i.format),Layout_Template:s};return e.extraParameters&&Object.assign(y,e.extraParameters),y}async function Y(e,t,i){const r=e.view;let a=r.spatialReference;const s={operationalLayers:await ee(r,t,i)};let l=i.ssExtent||e.extent||r.extent;if(a&&a.isWrappable&&(l=l.clone()._normalize(!0),a=l.spatialReference),s.mapOptions={extent:l&&l.toJSON(),spatialReference:a&&a.toJSON(),showAttribution:t.attributionVisible},i.ssExtent=null,r.background&&(s.background=r.background.toJSON()),r.rotation&&(s.mapOptions.rotation=-r.rotation),t.scalePreserved&&(s.mapOptions.scale=t.outScale||r.scale),r.timeExtent){const e=r$1(r.timeExtent.start)?r.timeExtent.start.getTime():null,t=r$1(r.timeExtent.end)?r.timeExtent.end.getTime():null;s.mapOptions.time=[e,t];}return s}function Z(e){let t=e;const i=t.lastIndexOf("/GPServer/");return i>0&&(t=t.slice(0,i+9)),t}async function ee(e,t,i){const r=[],a={layerView:null,printTemplate:t,view:e};let n=0;t.scalePreserved&&(n=t.outScale||e.scale);const s=b(e,n);for(const l of s){const e=l.layer;if(!e.loaded||G$1(e))continue;let t;a.layerView=l,t=h(e)?te(e):w(e)?await ie(e,a,i):V(e)?await ae(e,a,i):T(e)?await ne(e,a,i):v(e)?await se(e,a,i):S(e)?le(e,i):D(e)?oe(e,i):L(e)?await ce(e,a,i):P(e)?ue(e,a,i):I(e)?await ye(a,i):F(e)?fe():j(e)?await de(e,a,i):x(e)?pe(e):A(e)?await ge(e,a,i):M(e)?he(e):z(e)?be(e):U(e)?we(e):await me(e,a,i),t&&(Array.isArray(t)?r.push(...t):(t.id=e.id,t.title=i.legendLayerNameMap[e.id]||e.title,t.opacity=e.opacity,t.minScale=e.minScale||0,t.maxScale=e.maxScale||0,r.push(t)));}if(n&&r.forEach((e=>{e.minScale=0,e.maxScale=0;})),e.graphics&&e.graphics.length){const a=await re(null,e.graphics,t,i);a&&r.push(a);}return r}function te(e){return {culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async function ie(e,t,i){e.legendEnabled&&i.legendLayers.push({id:e.id});const r=t.layerView,a=t.printTemplate;let n;if(!i.is11xService||r.filter){return re(e,await De(r),a,i)}return n={type:"CSV"},e.write(n,{origin:"web-map"}),delete n.popupInfo,delete n.layerType,n.showLabels=a.showLabels&&e.labelsVisible,n}async function re(e,t,i,r){let a;const n=c(),s=g(),l=m(),o=p$1(),c$1=m();if(c$1.layerDefinition.name="textLayer",delete c$1.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?n.layerDefinition.name=s.layerDefinition.name=l.layerDefinition.name=o.layerDefinition.name=r.legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON();n.layerDefinition.drawingInfo.renderer=t,s.layerDefinition.drawingInfo.renderer=t,l.layerDefinition.drawingInfo.renderer=t,o.layerDefinition.drawingInfo.renderer=t;}if(i.showLabels&&e.labelsVisible&&"function"==typeof e.write){var u,f$1;const t=null==(u=e.write({},{origin:"web-map"}).layerDefinition)||null==(f$1=u.drawingInfo)?void 0:f$1.labelingInfo;t&&(a=!0,n.layerDefinition.drawingInfo.labelingInfo=t,s.layerDefinition.drawingInfo.labelingInfo=t,l.layerDefinition.drawingInfo.labelingInfo=t,o.layerDefinition.drawingInfo.labelingInfo=t);}}let m$1;null!=e&&e.renderer||a||(delete n.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo);const d=null==e?void 0:e.fieldsIndex,p=null==e?void 0:e.renderer;if(d){if(p&&"function"==typeof p.collectRequiredFields){const e=new Set;await p.collectRequiredFields(e,d),m$1=Array.from(e);}const e=d.fields.map((e=>e.toJSON()));n.layerDefinition.fields=e,s.layerDefinition.fields=e,l.layerDefinition.fields=e,o.layerDefinition.fields=e;}const g$1=t&&t.length;let h;for(let w=0;w<g$1;w++){const a=t[w]||t.getItemAt(w);if(!1===a.visible||!a.geometry)continue;if(h=a.toJSON(),h.hasOwnProperty("popupTemplate")&&delete h.popupTemplate,h.geometry&&h.geometry.z&&delete h.geometry.z,h.symbol&&h.symbol.outline&&"esriCLS"===h.symbol.outline.type&&!r.is11xService)continue;!r.is11xService&&h.symbol&&h.symbol.outline&&h.symbol.outline.color&&h.symbol.outline.color[3]&&(h.symbol.outline.color[3]=255);const u=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!h.symbol&&e&&e.renderer&&u&&!r.is11xService){const t=e.renderer,i=await t.getSymbolAsync(a);if(!i)continue;h.symbol=i.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&f(h.symbol,{renderer:t,graphic:a,symbol:i});}if(h.symbol&&(h.symbol.angle||delete h.symbol.angle,Le(h.symbol)?h.symbol=await xe(h.symbol,r):h.symbol.text&&delete h.attributes),(!i||!i.forceFeatureAttributes)&&m$1&&m$1.length){const e={};m$1.forEach((t=>{h.attributes&&h.attributes.hasOwnProperty(t)&&(e[t]=h.attributes[t]);})),h.attributes=e;}"polygon"===a.geometry.type?n.featureSet.features.push(h):"polyline"===a.geometry.type?s.featureSet.features.push(h):"point"===a.geometry.type?h.symbol&&h.symbol.text?c$1.featureSet.features.push(h):l.featureSet.features.push(h):"multipoint"===a.geometry.type?o.featureSet.features.push(h):"extent"===a.geometry.type&&(h.geometry=v$3.fromExtent(a.geometry).toJSON(),n.featureSet.features.push(h));}const b=[n,s,o,l,c$1].filter((e=>e.featureSet.features.length>0));for(const y of b){const e=y.featureSet.features.every((e=>e.symbol));!e||i&&i.forceFeatureAttributes||y.featureSet.features.forEach((e=>{delete e.attributes;})),e&&delete y.layerDefinition.drawingInfo,y.layerDefinition.drawingInfo&&y.layerDefinition.drawingInfo.renderer&&await ve(y.layerDefinition.drawingInfo.renderer,r);}return b.length?{featureCollection:{layers:b},showLabels:a}:null}async function ae(e,t,i){var r,a;let n;e.legendEnabled&&i.legendLayers.push({id:e.id});const s=e.renderer,l=parseFloat(i.cimVersion);if(e.featureReduction&&(!i.is11xService||l<2.9)||"dot-density"===(null==s?void 0:s.type)&&(!i.is11xService||l<2.6))return me(e,t,i);const o=t.layerView,{printTemplate:c,view:u}=t,y=s&&("valueExpression"in s&&s.valueExpression||"hasVisualVariables"in s&&s.hasVisualVariables()),m="feature-layer"!==(null==(r=e.source)?void 0:r.type)&&"ogc-feature"!==(null==(a=e.source)?void 0:a.type);if(!i.is11xService&&y||o.filter||m||!s||"field"in s&&null!=s.field&&("string"!=typeof s.field||!e.getField(s.field))){const t=await De(o);n=await re(e,t,c,i);}else {var d,p;if(n={id:(g=e.write()).id,title:g.title,opacity:g.opacity,minScale:g.minScale,maxScale:g.maxScale,url:g.url,layerType:g.layerType,customParameters:g.customParameters,layerDefinition:g.layerDefinition},n.showLabels=c.showLabels&&e.labelsVisible,Se(n,e),null!=(d=n.layerDefinition)&&null!=(p=d.drawingInfo)&&p.renderer&&(delete n.layerDefinition.minScale,delete n.layerDefinition.maxScale,await ve(n.layerDefinition.drawingInfo.renderer,i),"visualVariables"in s&&s.visualVariables&&s.visualVariables[0])){const e=s.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=U$1(e,u.scale);n.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,n.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize;}}const t=o$5(o);t&&(n.layerDefinition||(n.layerDefinition={}),n.layerDefinition.definitionExpression=n.layerDefinition.definitionExpression?`(${n.layerDefinition.definitionExpression}) AND (${t})`:t);}var g;return n}async function ne(e,{layerView:t,printTemplate:i},r){e.legendEnabled&&r.legendLayers.push({id:e.id});return re(e,await De(t),i,r)}async function se(e,{printTemplate:t},i){return re(e,null,t,i)}function le(e,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const i={layerType:(r=e.write()).layerType,customParameters:r.customParameters};var r;if(i.bandIds=e.bandIds,i.compressionQuality=e.compressionQuality,i.format=e.format,i.interpolation=e.interpolation,(e.mosaicRule||e.definitionExpression)&&(i.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(t.is11xService)e.renderingRule&&(i.renderingRule=e.renderingRule.toJSON()),e.renderer&&(i.layerDefinition=i.layerDefinition||{},i.layerDefinition.drawingInfo=i.layerDefinition.drawingInfo||{},i.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else {const t=e.exportImageServiceParameters.combineRendererWithRenderingRule();t&&(i.renderingRule=t.toJSON());}return Se(i,e),i}function oe(e,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const i={bandIds:(r=e.write()||{}).bandIds,customParameters:r.customParameters,interpolation:r.interpolation,layerDefinition:r.layerDefinition};var r;return i.layerType="ArcGISImageServiceLayer",Se(i,e),i}async function ce(e,t,i){const r=t.printTemplate;if(i.is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=z$1(e.url),t}{const a=[],n=t.layerView;n.allVisibleMapImages.forEach(((t,i)=>{const r={id:`${e.id}_image${i}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?r.imageData=t.href.substr(22):r.url=t.href,a.push(r);}));const s=[...n.allVisiblePoints.items,...n.allVisiblePolylines.items,...n.allVisiblePolygons.items],l={id:e.id,...await re(null,s,r,i)};return a.push(l),a}}function ue(e,{view:t},i){let r;const a={id:e.id,subLayerIds:[]};let n=[];const s=t.scale,l=e=>{const t=0===s,i=0===e.minScale||s<=e.minScale,r=0===e.maxScale||s>=e.maxScale;if(e.visible&&(t||i&&r))if(e.sublayers)e.sublayers.forEach(l);else {const t=e.toExportImageJSON(),i={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};n.unshift(i),a.subLayerIds.push(e.id);}};var o;return e.sublayers&&e.sublayers.forEach(l),n.length&&(n=n.map((({id:e,name:t,layerDefinition:i})=>({id:e,name:t,layerDefinition:i}))),r={layerType:(o=e.write()).layerType,customParameters:o.customParameters},r.layers=n,r.visibleLayers=e.capabilities.exportMap.supportsDynamicLayers?void 0:a.subLayerIds,Se(r,e),e.legendEnabled&&i.legendLayers.push(a)),r}async function ye({layerView:e,printTemplate:t},i){const r=[],a=e.layer;if(r$1(a.featureCollections))for(const n of a.featureCollections){const e=await re(n,n.source,t,i);e&&r.push(...e.featureCollection.layers);}else if(r$1(a.sublayers))for(const n of a.sublayers){const e=await re(null,n.graphics,t,i);e&&r.push(...e.featureCollection.layers);}return {featureCollection:{layers:r}}}function fe(){return {type:"OpenStreetMap"}}async function me(e,{printTemplate:t,view:i},r){const a={type:"image"},n={format:"png",ignoreBackground:!0,layers:[e],rotation:0},l=r.ssExtent||i.extent.clone();let o=96,c=!0,y=!0;if(t.exportOptions){const e=t.exportOptions;e.dpi>0&&(o=e.dpi),e.width>0&&(c=e.width%2==i.width%2),e.height>0&&(y=e.height%2==i.height%2);}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===i.scale)&&96===o&&(!c||!y)&&(n.area={x:0,y:0,width:i.width,height:i.height},c||(n.area.width-=1),y||(n.area.height-=1),!r.ssExtent)){const e=i.toMap(c$2(n.area.width,n.area.height));l.ymin=e.y,l.xmax=e.x,r.ssExtent=l;}a.extent=l.clone()._normalize(!0).toJSON();const f=await i.takeScreenshot(n),{data:m}=V$2(f.dataUrl);return a.imageData=m,a}async function de(e,{layerView:t,printTemplate:i},r){e.legendEnabled&&r.legendLayers.push({id:e.id});return re(e,await De(t),i,r)}function pe(e){const t={layerType:(i=e.write()).layerType,customParameters:i.customParameters};var i;return Se(t,e),t}async function ge(e,i,r){if(r.is11xService&&e.serviceUrl&&e.styleUrl){const i=n$4&&n$4.findCredential(e.styleUrl),a=n$4&&n$4.findCredential(e.serviceUrl);if(!i&&!a||"2.1.0"!==r.cimVersion){const t={type:"VectorTileLayer"};return t.styleUrl=z$1(e.styleUrl),i&&(t.token=i.token),a&&a.token!==t.token&&(t.additionalTokens=[{url:e.serviceUrl,token:a.token}]),t}}return me(e,i,r)}function he(e){const t={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(t.subDomains=e.subDomains),t}function be(e){let t;const i=[],r=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(r):e.name&&i.unshift(e.name));};return e.sublayers&&e.sublayers.forEach(r),i.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:i,url:z$1(e.url),version:e.version}),t}function we(e){const t=e.activeLayer;return {type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:z$1(e.url)}}function Se(i,r){if(r.url)if(i.url=z$1(i.url||r.url),"apiKey"in r&&r.apiKey)i.token=r.apiKey;else if(t$1.apiKey&&r$2(r.url))i.token=t$1.apiKey;else {var a,n;i.token=null==(a=n$4)||null==(n=a.findCredential(r.url))?void 0:n.token;}}async function xe(e,t){t.canvas||(t.canvas=document.createElement("canvas"));const r=1024;t.canvas.width=r,t.canvas.height=r;const a=t.canvas.getContext("2d");let n,s;if(e.path){var c;const t=new Path2D(e.path);t.closePath(),a.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",a.fill(t);const i=d(a);if(!i)return null;a.clearRect(0,0,r,r);const o=u$3(e.size)/Math.max(i.width,i.height);a.scale(o,o);const u=r/o,y=u/2-i.width/2-i.x,f=u/2-i.height/2-i.y;if(a.translate(y,f),Array.isArray(e.color)&&a.fill(t),null!=(c=e.outline)&&c.width&&Array.isArray(e.outline.color)){const r=e.outline;a.lineWidth=u$3(r.width)/o,a.lineJoin="round",a.strokeStyle=`rgba(${r.color[0]},${r.color[1]},${r.color[2]},${r.color[3]/255})`,a.stroke(t),i.width+=a.lineWidth,i.height+=a.lineWidth;}i.width*=o,i.height*=o;const m=a.getImageData(r/2-i.width/2,r/2-i.height/2,Math.ceil(i.width),Math.ceil(i.height));n=m.width,s=m.height,a.canvas.width=n,a.canvas.height=s,a.putImageData(m,0,0);}else {const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,r=(await E(t,{responseType:"image"})).data;n=u$3(e.width),s=u$3(e.height),a.canvas.width=n,a.canvas.height=s,a.drawImage(r,0,0,a.canvas.width,a.canvas.height);}return {type:"esriPMS",imageData:a.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:e$4(s),width:e$4(n),xoffset:e.xoffset,yoffset:e.yoffset}}async function ve(e,t){const i=e.type;if("simple"===i&&Le(e.symbol))e.symbol=await xe(e.symbol,t);else if("uniqueValue"===i||"classBreaks"===i){Le(e.defaultSymbol)&&(e.defaultSymbol=await xe(e.defaultSymbol,t));const r=e["uniqueValue"===i?"uniqueValueInfos":"classBreakInfos"];if(r)for(const e of r)Le(e.symbol)&&(e.symbol=await xe(e.symbol,t));}}async function De(e){return e.queryFeatures(e.createQuery()).then((e=>e.features))}function Ie(e){return e.gpMetadata&&e.gpMetadata.executionType?B.fromJSON(e.gpMetadata.executionType):"sync"}function Le(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=new o$4({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let u=class extends l$1{constructor(...t){super(...t),this._gpMetadata=null,this.updateDelay=1e3;}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?n.fromJSON(this._gpMetadata.executionType):"sync"}execute(t,e){return t&&(t.updateDelay=this.updateDelay),Q(this.url,t,{...this.requestOptions,...e})}async _getGpPrintParams(t){const e=Z(this.url),r=G.get(e);return X(t,r)}};e$2([d$2()],u.prototype,"_gpMetadata",void 0),e$2([d$2({readOnly:!0})],u.prototype,"mode",null),e$2([d$2()],u.prototype,"updateDelay",void 0),u=e$2([i$4("esri.tasks.PrintTask")],u);const y=u;

export default y;