'use strict';

const request = require('./messageBundle-8be88d04.js');
const UniqueValueRenderer = require('./UniqueValueRenderer-1c485e9f.js');
const DictionaryRenderer = require('./DictionaryRenderer-a0dce499.js');
const Color = require('./Color-7d915caa.js');
const enumeration = require('./enumeration-f235fe07.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const VisualVariablesMixin = require('./VisualVariablesMixin-a105fcfa.js');
const SimpleLineSymbol = require('./symbols-29b793e5.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n$2;const u=request.s$1.getLogger("esri.renderers.support.AttributeColorInfo");let c$4=n$2=class extends request.a$2{constructor(r){super(r),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null;}castField(r){return null==r?r:"function"==typeof r?(u.error(".field: field must be a string value"),null):request.u$5(r)}getAttributeHash(){return `${this.field}-${this.valueExpression}`}clone(){return new n$2({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};request.e([request.d({type:Color.h,json:{type:[Number],write:!0}})],c$4.prototype,"color",void 0),request.e([request.d({type:String,json:{write:!0}})],c$4.prototype,"field",void 0),request.e([request.c("field")],c$4.prototype,"castField",null),request.e([request.d({type:String,json:{write:!0}})],c$4.prototype,"label",void 0),request.e([request.d({type:String,json:{write:!0}})],c$4.prototype,"valueExpression",void 0),request.e([request.d({type:String,json:{write:!0}})],c$4.prototype,"valueExpressionTitle",void 0),c$4=n$2=request.e([request.i("esri.renderers.support.AttributeColorInfo")],c$4);const a$1=c$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e;let p$2=e=class extends request.a$2{constructor(){super(...arguments),this.unit=null;}clone(){return new e({unit:this.unit})}};request.e([request.d({type:String,json:{write:!0}})],p$2.prototype,"unit",void 0),p$2=e=request.e([request.i("esri.renderers.support.DotDensityLegendOptions")],p$2);const c$3=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var y;let m$2=y=class extends(VisualVariablesMixin.v(VisualVariablesMixin.p)){constructor(e){super(e),this.attributes=null,this.backgroundColor=new Color.h([0,0,0,0]),this.blendDots=!0,this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new SimpleLineSymbol.m,this.dotValue=null,this.referenceDotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density";}calculateDotValue(e){if(null==this.referenceScale)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new SimpleLineSymbol.S({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return [this.getSymbol()]}getAttributeHash(){return this.attributes&&this.attributes.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new y({attributes:request.l$1(this.attributes),backgroundColor:request.l$1(this.backgroundColor),dotBlendingEnabled:request.l$1(this.dotBlendingEnabled),dotShape:request.l$1(this.dotShape),dotSize:request.l$1(this.dotSize),dotValue:request.l$1(this.dotValue),legendOptions:request.l$1(this.legendOptions),outline:request.l$1(this.outline),referenceScale:request.l$1(this.referenceScale),visualVariables:request.l$1(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){return `${this.attributes.map((e=>e.field||e.valueExpression||""))}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const o of this.attributes)o.valueExpression&&await opacityUtils.b(e,t,o.valueExpression),o.field&&e.add(o.field);}};request.e([request.d({type:[a$1],json:{write:!0}})],m$2.prototype,"attributes",void 0),request.e([request.d({type:Color.h,json:{write:!0}})],m$2.prototype,"backgroundColor",void 0),request.e([request.d({type:Boolean}),request.o("dotBlendingEnabled")],m$2.prototype,"blendDots",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],m$2.prototype,"dotBlendingEnabled",void 0),request.e([request.d({type:String,json:{write:!1}})],m$2.prototype,"dotShape",void 0),request.e([request.d({type:Number,json:{write:!1}})],m$2.prototype,"dotSize",void 0),request.e([request.d({type:c$3,json:{write:!0}})],m$2.prototype,"legendOptions",void 0),request.e([request.d({type:SimpleLineSymbol.m,json:{default:null,write:!0}})],m$2.prototype,"outline",void 0),request.e([request.d({type:Number,json:{write:!0}})],m$2.prototype,"dotValue",void 0),request.e([request.d({type:Number}),request.o("dotValue")],m$2.prototype,"referenceDotValue",void 0),request.e([request.d({type:Number,json:{write:!0}})],m$2.prototype,"referenceScale",void 0),request.e([request.d({type:Number,json:{write:!0}})],m$2.prototype,"seed",void 0),request.e([enumeration.r({dotDensity:"dot-density"})],m$2.prototype,"type",void 0),m$2=y=request.e([request.i("esri.renderers.DotDensityRenderer")],m$2);const b=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$1;let c$2=p$1=class extends request.a$2{constructor(o){super(o),this.color=null,this.ratio=null;}clone(){return new p$1({color:this.color,ratio:this.ratio})}};request.e([request.d({type:Color.h,json:{write:!0}})],c$2.prototype,"color",void 0),request.e([request.d({type:Number,json:{write:!0}})],c$2.prototype,"ratio",void 0),c$2=p$1=request.e([request.i("esri.renderers.support.HeatmapColorStop")],c$2);const i=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a;let m$1=a=class extends VisualVariablesMixin.p{constructor(t){super(t),this.blurRadius=10,this.colorStops=[new i({ratio:0,color:new Color.h("rgba(255, 140, 0, 0)")}),new i({ratio:.75,color:new Color.h("rgba(255, 140, 0, 1)")}),new i({ratio:.9,color:new Color.h("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.maxPixelIntensity=100,this.minPixelIntensity=0,this.type="heatmap";}async collectRequiredFields(t,e){const r=this.field;r&&"string"==typeof r&&opacityUtils.F(t,e,r);}getAttributeHash(){return null}getMeshHash(){return `${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new a({blurRadius:this.blurRadius,colorStops:request.l$1(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})}};request.e([request.d({type:Number,json:{write:!0}})],m$1.prototype,"blurRadius",void 0),request.e([request.d({type:[i],json:{write:!0}})],m$1.prototype,"colorStops",void 0),request.e([request.d({type:String,json:{write:!0}})],m$1.prototype,"field",void 0),request.e([request.d({type:Number,json:{write:{overridePolicy:(t,e,r)=>({enabled:null==r})}}})],m$1.prototype,"fieldOffset",void 0),request.e([request.d({type:Number,json:{write:!0}})],m$1.prototype,"maxPixelIntensity",void 0),request.e([request.d({type:Number,json:{write:!0}})],m$1.prototype,"minPixelIntensity",void 0),request.e([enumeration.r({heatmap:"heatmap"})],m$1.prototype,"type",void 0),m$1=a=request.e([request.i("esri.renderers.HeatmapRenderer")],m$1);const c$1=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c;let n$1=c=class extends(VisualVariablesMixin.v(VisualVariablesMixin.p)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple";}async collectRequiredFields(e,s){await Promise.all([this.collectSymbolFields(e,s),this.collectVVRequiredFields(e,s)]);}async collectSymbolFields(e,s){await Promise.all(this.getSymbols().map((r=>r.collectRequiredFields(e,s))));}getSymbol(e,s){return this.symbol}async getSymbolAsync(e,s){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,s)=>e+JSON.stringify(s)),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new c({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:request.l$1(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};request.e([request.d({type:String,json:{write:!0}})],n$1.prototype,"description",void 0),request.e([request.d({type:String,json:{write:!0}})],n$1.prototype,"label",void 0),request.e([request.d(UniqueValueRenderer.l)],n$1.prototype,"symbol",void 0),request.e([enumeration.r({simple:"simple"})],n$1.prototype,"type",void 0),n$1=c=request.e([request.i("esri.renderers.SimpleRenderer")],n$1);const p=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={key:"type",base:VisualVariablesMixin.p,typeMap:{heatmap:c$1,simple:p,"unique-value":UniqueValueRenderer.P,"class-breaks":UniqueValueRenderer.N,"dot-density":b,dictionary:DictionaryRenderer['default']},errorContext:"renderer"},n={key:"type",base:VisualVariablesMixin.p,typeMap:{simple:p,"unique-value":UniqueValueRenderer.P,"class-breaks":UniqueValueRenderer.N},errorContext:"renderer"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(e,r){return o(e,null,r)}const s=request.u$3({types:m});function o(r,n,t){return r?r&&(r.styleName||r.styleUrl)&&"uniqueValue"!==r.type?(t&&t.messages&&t.messages.push(new request.t$2("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+r.type+"'",{definition:r,context:t})),null):s(r,n,t):null}

exports.i = i;
exports.m = m;
exports.n = n;
exports.o = o;
exports.p = p;
exports.t = t;
