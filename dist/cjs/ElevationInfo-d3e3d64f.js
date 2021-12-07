'use strict';

const request = require('./messageBundle-8be88d04.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const lengthUtils = require('./lengthUtils-179eaf12.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let i=p=class extends request.a$2{async collectRequiredFields(r,s){return opacityUtils.b(r,s,this.expression)}clone(){return new p({expression:this.expression,title:this.title})}};request.e([request.d({type:String,json:{write:!0}})],i.prototype,"expression",void 0),request.e([request.d({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=p=request.e([request.i("esri.layers.support.FeatureExpressionInfo")],i);const c$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return null!=lengthUtils.m[n]}function r(n){return 1/(lengthUtils.m[n]||1)}function e(){const n=Object.keys(lengthUtils.m);return n.sort(),n}const o=e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;const m=request.s$5()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new request.o$1({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let c=l=class extends request.a$2{constructor(){super(...arguments),this.offset=null;}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,o,t){r[o]=e.write({},t),"0"===e.expression&&(r.featureExpression={value:0});}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):request.r(e)||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e);}set unit(e){this._set("unit",e);}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new l({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};request.e([request.d({type:c$1,json:{write:!0}})],c.prototype,"featureExpressionInfo",void 0),request.e([request.o$2("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],c.prototype,"readFeatureExpressionInfo",null),request.e([request.r$2("featureExpressionInfo",{featureExpressionInfo:{type:c$1},"featureExpression.value":{type:[0]}})],c.prototype,"writeFeatureExpressionInfo",null),request.e([request.d({type:m.apiValues,nonNullable:!0,json:{type:m.jsonValues,read:m.read,write:{writer:m.write,isRequired:!0}}})],c.prototype,"mode",null),request.e([request.d({type:Number,json:{write:!0}})],c.prototype,"offset",void 0),request.e([request.d({type:o,json:{type:String,read:d.read,write:d.write}})],c.prototype,"unit",null),c=l=request.e([request.i("esri.layers.support.ElevationInfo")],c);const x=c;

exports.n = n;
exports.r = r;
exports.x = x;
