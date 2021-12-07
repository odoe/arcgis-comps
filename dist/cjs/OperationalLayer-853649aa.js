'use strict';

const request = require('./messageBundle-8be88d04.js');
const TimeExtent = require('./TimeExtent-8b558884.js');
const persistableUrlUtils = require('./persistableUrlUtils-c611d652.js');
const ElevationInfo = require('./ElevationInfo-d3e3d64f.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,OGCFeatureLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(e){if(!e)return e;const{start:i,end:o}=e;return new TimeExtent.y({start:request.r(i)?TimeExtent.s(i,-i.getTimezoneOffset(),"minutes"):i,end:request.r(o)?TimeExtent.s(o,-o.getTimezoneOffset(),"minutes"):o})}function l$1(e){if(!e)return e;const{start:i,end:o}=e;return new TimeExtent.y({start:request.r(i)?TimeExtent.s(i,i.getTimezoneOffset(),"minutes"):i,end:request.r(o)?TimeExtent.s(o,o.getTimezoneOffset(),"minutes"):o})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},p={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,i){r[i]=!e;}}}},m={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},f={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:persistableUrlUtils.p}}},c={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},d={value:null,type:ElevationInfo.x,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function y$1(e){return {type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const u$1={type:Number,json:{origins:{"web-document":{write:!0,read:!0},"portal-item":{write:!0}}}},w={...u$1,json:{...u$1.json,origins:{"web-document":{...u$1.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,i)=>i&&"service"!==i.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?opacityUtils.r(r.layerDefinition.drawingInfo.transparency):void 0:opacityUtils.r(r.drawingInfo.transparency)}}},g={type:TimeExtent.y,readOnly:!0,get(){var e,r;if(null==(e=this.layer)||!e.timeInfo)return null;const{datesInUnknownTimezone:i,timeOffset:n,useViewTime:a$1}=this.layer,s=null==(r=this.view)?void 0:r.timeExtent;let l=this.layer.timeExtent;i&&(l=l$1(l));let p=a$1?s&&l?s.intersection(l):s||l:l;if(!p||p.isEmpty||p.isAllTime)return p;n&&(p=p.offset(-n.value,n.unit)),i&&(p=a(p));const m=this._get("timeExtent");return p.equals(m)?m:p}},v={type:request.M,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,n)=>{const t=request.M.fromJSON(e);return null!=n.spatialReference&&"object"==typeof n.spatialReference&&(t.spatialReference=request.k.fromJSON(n.spatialReference)),t}}}},read:!1}},j={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},b={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},I={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=y=>{let u=class extends y{constructor(){super(...arguments),this.title=null;}writeListMode(e,r,i,t){(t&&"ground"===t.layerContainerType||e&&request.g$4(this,i,{},t))&&(r[i]=e);}writeOperationalLayerType(e,r,i,t){!e||t&&"tables"===t.layerContainerType||(r.layerType=e);}writeTitle(e,r){r.title=e||"Layer";}read(e,r){r&&(r.layer=this),request.d$4(this,e,(r=>super.read(e,r)),r);}write(e$1,t){if(null!=t&&t.origin){const e$1=`${t.origin}/${t.layerContainerType||"operational-layers"}`,i=e[e$1];let s=i&&i[this.operationalLayerType];var o;if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e$1&&(s=!1),!s)return null==(o=t.messages)||o.push(new request.s("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e$1}'`,{layer:this})),null}const s=super.write(e$1,{...t,layer:this}),a=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof request.s&&"web-document-write:property-required"===e.name)).length;var n;return request.F(null==s?void 0:s.url)?(null==t||null==(n=t.messages)||n.push(new request.s("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&a?null:s}beforeSave(){}};return request.e([request.d({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],u.prototype,"id",void 0),request.e([request.d({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],u.prototype,"listMode",void 0),request.e([request.r$2("listMode")],u.prototype,"writeListMode",null),request.e([request.d({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],u.prototype,"operationalLayerType",void 0),request.e([request.r$2("operationalLayerType")],u.prototype,"writeOperationalLayerType",null),request.e([request.d(u$1)],u.prototype,"opacity",void 0),request.e([request.d({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],u.prototype,"title",void 0),request.e([request.r$2("title")],u.prototype,"writeTitle",null),request.e([request.d({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],u.prototype,"visible",void 0),u=request.e([request.i("esri.layers.mixins.OperationalLayer")],u),u};function u(e){return "operationalLayerType"in e}

exports.I = I;
exports.b = b;
exports.c = c;
exports.d = d;
exports.f = f;
exports.g = g;
exports.j = j;
exports.l = l;
exports.m = m;
exports.p = p;
exports.u = u;
exports.u$1 = u$1;
exports.v = v;
exports.w = w;
exports.y = y;
exports.y$1 = y$1;
