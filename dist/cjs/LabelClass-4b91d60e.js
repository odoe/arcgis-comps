'use strict';

const request = require('./messageBundle-8be88d04.js');
const SimpleLineSymbol = require('./symbols-29b793e5.js');
const labelUtils = require('./labelUtils-73814dda.js');
const defaultsJSON = require('./defaultsJSON-0cdf7a99.js');
const jsonUtils = require('./jsonUtils-62d28b73.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let n=l=class extends request.a$2{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null;}readExpression(r,e){return e.value?labelUtils.w(e.value):r}writeExpression(r,e,s){null!=this.value&&(r=labelUtils.w(this.value)),null!=r&&(e[s]=r);}clone(){return new l({expression:this.expression,title:this.title,value:this.value})}};request.e([request.d({type:String,json:{write:{writerEnsuresNonNull:!0}}})],n.prototype,"expression",void 0),request.e([request.o$2("expression",["expression","value"])],n.prototype,"readExpression",null),request.e([request.r$2("expression")],n.prototype,"writeExpression",null),request.e([request.d({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],n.prototype,"title",void 0),request.e([request.d({json:{read:!1,write:!1}})],n.prototype,"value",void 0),n=l=request.e([request.i("esri.layers.support.LabelExpressionInfo")],n);const a$1=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=SimpleLineSymbol.y.fromJSON(defaultsJSON.l),u=SimpleLineSymbol.m.fromJSON(defaultsJSON.o),a=SimpleLineSymbol.S.fromJSON(defaultsJSON.S),y$1=SimpleLineSymbol.c.fromJSON(defaultsJSON.t);function J(o){if(request.t$1(o))return null;switch(o.type){case"mesh":return null;case"point":case"multipoint":return c;case"polyline":return u;case"polygon":case"extent":return a}return null}const N=SimpleLineSymbol.y.fromJSON(defaultsJSON.r),O=SimpleLineSymbol.m.fromJSON(defaultsJSON.s),j=SimpleLineSymbol.S.fromJSON(defaultsJSON.y);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;const y=new request.o$1({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function w(e){return !e||"service"!==e.origin&&!x(e.layer)}function x(e){return "map-image"===(null==e?void 0:e.type)}function P(e){var r,t;return !!x(e)&&!(null==(r=e.capabilities)||null==(t=r.exportMap)||!t.supportsArcadeExpressionForLabeling)}function L(e){return w(e)||P(e.layer)}let g=d=class extends request.a$2{constructor(e){super(e),this.type="label",this.name=null,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.maxScale=0,this.minScale=0,this.symbol=y$1,this.useCodedValues=void 0,this.where=null;}static evaluateWhere(e,r){const t=function(e,r,t){switch(r){case"=":return e==t;case"<>":return e!=t;case">":return e>t;case">=":return e>=t;case"<":return e<t;case"<=":return e<=t}return !1};try{if(null==e)return !0;const o=e.split(" ");if(3===o.length)return t(r[o[0]],o[1],o[2]);if(7===o.length){const e=t(r[o[0]],o[1],o[2]),n=o[3],s=t(r[o[4]],o[5],o[6]);switch(n){case"AND":return e&&s;case"OR":return e||s}}return !1}catch(o){console.log("Error.: can't parse = "+e);}}readLabelExpression(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e}writeLabelExpression(e,r,t){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=labelUtils.u(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const r=labelUtils._(this.labelExpressionInfo.expression);r&&(e="["+r+"]");}null!=e&&(r[t]=e);}writeLabelExpressionInfo(e,r,t,o){if(null==e&&null!=this.labelExpression&&w(o))e=new a$1({expression:this.getLabelExpressionArcade()});else if(!e)return;const n=e.toJSON(o);n.expression&&(r[t]=n);}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e);}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e);}getLabelExpression(){return labelUtils.x(this)}getLabelExpressionArcade(){return labelUtils.f(this)}getLabelExpressionSingleField(){return labelUtils.g(this)}hash(){return JSON.stringify(this)}clone(){return new d({deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:request.l$1(this.labelExpressionInfo),labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,symbol:request.l$1(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};request.e([request.d({type:String,json:{write:!0}})],g.prototype,"name",void 0),request.e([request.d({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1}}}})],g.prototype,"deconflictionStrategy",void 0),request.e([request.d({type:String,json:{write:{overridePolicy(e,r,t){return this.labelExpressionInfo&&"service"===(null==t?void 0:t.origin)&&P(t.layer)?{enabled:!1}:{allowNull:!0}}}}})],g.prototype,"labelExpression",void 0),request.e([request.o$2("labelExpression")],g.prototype,"readLabelExpression",null),request.e([request.r$2("labelExpression")],g.prototype,"writeLabelExpression",null),request.e([request.d({type:a$1,json:{write:{overridePolicy:(e,r,t)=>L(t)?{allowNull:!0}:{enabled:!1}}}})],g.prototype,"labelExpressionInfo",void 0),request.e([request.r$2("labelExpressionInfo")],g.prototype,"writeLabelExpressionInfo",null),request.e([request.d({type:y.apiValues,json:{type:y.jsonValues,read:y.read,write:y.write}})],g.prototype,"labelPlacement",void 0),request.e([request.d({type:Number})],g.prototype,"maxScale",void 0),request.e([request.r$2("maxScale")],g.prototype,"writeMaxScale",null),request.e([request.d({type:Number})],g.prototype,"minScale",void 0),request.e([request.r$2("minScale")],g.prototype,"writeMinScale",null),request.e([request.d({types:SimpleLineSymbol.P,json:{origins:{"web-scene":{types:SimpleLineSymbol.F,write:jsonUtils.m,default:null}},write:jsonUtils.m,default:null}})],g.prototype,"symbol",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],g.prototype,"useCodedValues",void 0),request.e([request.d({type:String,json:{write:!0}})],g.prototype,"where",void 0),g=d=request.e([request.i("esri.layers.support.LabelClass")],g);const E=g;

exports.E = E;
exports.J = J;
exports.N = N;
exports.O = O;
exports.a = a;
exports.c = c;
exports.j = j;
exports.u = u;
