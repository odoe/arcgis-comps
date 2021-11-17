'use strict';

const TimeExtent = require('./TimeExtent-cdfe048b.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const request = require('./messageBundle-312ceb47.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const lengthUtils = require('./lengthUtils-3475e67e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(e){if(!e)return e;const{start:i,end:o}=e;return new TimeExtent.y({start:request.r(i)?TimeExtent.s(i,-i.getTimezoneOffset(),"minutes"):i,end:request.r(o)?TimeExtent.s(o,-o.getTimezoneOffset(),"minutes"):o})}function l$2(e){if(!e)return e;const{start:i,end:o}=e;return new TimeExtent.y({start:request.r(i)?TimeExtent.s(i,i.getTimezoneOffset(),"minutes"):i,end:request.r(o)?TimeExtent.s(o,o.getTimezoneOffset(),"minutes"):o})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$1;let i=p$1=class extends JSONSupport.a{async collectRequiredFields(r,s){return unitUtils.b$1(r,s,this.expression)}clone(){return new p$1({expression:this.expression,title:this.title})}};request.e([request.d({type:String,json:{write:!0}})],i.prototype,"expression",void 0),request.e([request.d({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=p$1=request.e([request.i("esri.layers.support.FeatureExpressionInfo")],i);const c$2=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(){const n=Object.keys(lengthUtils.m);return n.sort(),n}const o=e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l$1;const m$1=request.s$8()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d$1=new request.o$1({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let c$1=l$1=class extends JSONSupport.a{constructor(){super(...arguments),this.offset=null;}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,o,t){r[o]=e.write({},t),"0"===e.expression&&(r.featureExpression={value:0});}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):request.r(e)||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e);}set unit(e){this._set("unit",e);}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new l$1({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};request.e([request.d({type:c$2,json:{write:!0}})],c$1.prototype,"featureExpressionInfo",void 0),request.e([unitUtils.o("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],c$1.prototype,"readFeatureExpressionInfo",null),request.e([unitUtils.r$1("featureExpressionInfo",{featureExpressionInfo:{type:c$2},"featureExpression.value":{type:[0]}})],c$1.prototype,"writeFeatureExpressionInfo",null),request.e([request.d({type:m$1.apiValues,nonNullable:!0,json:{type:m$1.jsonValues,read:m$1.read,write:{writer:m$1.write,isRequired:!0}}})],c$1.prototype,"mode",null),request.e([request.d({type:Number,json:{write:!0}})],c$1.prototype,"offset",void 0),request.e([request.d({type:o,json:{type:String,read:d$1.read,write:d$1.write}})],c$1.prototype,"unit",null),c$1=l$1=request.e([request.i("esri.layers.support.ElevationInfo")],c$1);const x=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},p={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,i){r[i]=!e;}}}},m={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},f={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:unitUtils.p$2}}},c={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},d={value:null,type:x,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function y(e){return {type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const u={type:Number,json:{origins:{"web-document":{write:!0,read:!0},"portal-item":{write:!0}}}},w={...u,json:{...u.json,origins:{"web-document":{...u.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,i)=>i&&"service"!==i.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?unitUtils.r$4(r.layerDefinition.drawingInfo.transparency):void 0:unitUtils.r$4(r.drawingInfo.transparency)}}},g={type:TimeExtent.y,readOnly:!0,get(){var e,r;if(null==(e=this.layer)||!e.timeInfo)return null;const{datesInUnknownTimezone:i,timeOffset:n,useViewTime:a$1}=this.layer,s=null==(r=this.view)?void 0:r.timeExtent;let l=this.layer.timeExtent;i&&(l=l$2(l));let p=a$1?s&&l?s.intersection(l):s||l:l;if(!p||p.isEmpty||p.isAllTime)return p;n&&(p=p.offset(-n.value,n.unit)),i&&(p=a(p));const m=this._get("timeExtent");return p.equals(m)?m:p}},v={type:unitUtils.M,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,n)=>{const t=unitUtils.M.fromJSON(e);return null!=n.spatialReference&&"object"==typeof n.spatialReference&&(t.spatialReference=unitUtils.k.fromJSON(n.spatialReference)),t}}}},read:!1}},j={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},b={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},I={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}};

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
exports.v = v;
exports.w = w;
exports.x = x;
exports.y = y;
