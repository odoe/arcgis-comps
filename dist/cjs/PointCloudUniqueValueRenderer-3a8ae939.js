'use strict';

const request = require('./messageBundle-8be88d04.js');
const enumeration = require('./enumeration-f235fe07.js');
const ColorStop = require('./ColorStop-ce63948c.js');
const Color = require('./Color-7d915caa.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var s;let i$2=s=class extends request.a$2{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255;}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};request.e([request.d({type:String,json:{write:!0}})],i$2.prototype,"field",void 0),request.e([request.d({type:Number,nonNullable:!0,json:{write:!0}})],i$2.prototype,"minValue",void 0),request.e([request.d({type:Number,nonNullable:!0,json:{write:!0}})],i$2.prototype,"maxValue",void 0),i$2=s=request.e([request.i("esri.renderers.support.pointCloud.ColorModulation")],i$2);const p$4=i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p$3=new request.o$1({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let i$1=class extends request.a$2{};request.e([request.d({type:p$3.apiValues,readOnly:!0,nonNullable:!0,json:{type:p$3.jsonValues,read:!1,write:p$3.write}})],i$1.prototype,"type",void 0),i$1=request.e([request.i("esri.renderers.support.pointCloud.PointSizeAlgorithm")],i$1);const a$6=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;let p$2=i=class extends a$6{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null;}clone(){return new i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};request.e([enumeration.r({pointCloudFixedSizeAlgorithm:"fixed-size"})],p$2.prototype,"type",void 0),request.e([request.d({type:Number,nonNullable:!0,json:{write:!0}})],p$2.prototype,"size",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],p$2.prototype,"useRealWorldSymbolSizes",void 0),p$2=i=request.e([request.i("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],p$2);const l$4=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$1;let c$3=p$1=class extends a$6{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1;}clone(){return new p$1({scaleFactor:this.scaleFactor})}};request.e([enumeration.r({pointCloudSplatAlgorithm:"splat"})],c$3.prototype,"type",void 0),request.e([request.d({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c$3.prototype,"scaleFactor",void 0),c$3=p$1=request.e([request.i("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c$3);const a$5=c$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e={key:"type",base:a$6,typeMap:{"fixed-size":l$4,splat:a$5}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u$1=request.s$5()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let c$2=class extends request.a$2{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return {pointSizeAlgorithm:request.l$1(this.pointSizeAlgorithm),colorModulation:request.l$1(this.colorModulation),pointsPerInch:request.l$1(this.pointsPerInch)}}};request.e([request.d({type:u$1.apiValues,readOnly:!0,nonNullable:!0,json:{type:u$1.jsonValues,read:!1,write:u$1.write}})],c$2.prototype,"type",void 0),request.e([request.d({types:e,json:{write:!0}})],c$2.prototype,"pointSizeAlgorithm",void 0),request.e([request.d({type:p$4,json:{write:!0}})],c$2.prototype,"colorModulation",void 0),request.e([request.d({json:{write:!0},nonNullable:!0,type:Number})],c$2.prototype,"pointsPerInch",void 0),c$2=request.e([request.i("esri.renderers.PointCloudRenderer")],c$2),function(o){o.fieldTransformTypeKebabDict=new request.o$1({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});}(c$2||(c$2={}));const a$4=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$3;let p=a$3=class extends request.a$2{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null;}clone(){return new a$3({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:request.l$1(this.color)})}};request.e([request.d({type:String,json:{write:!0}})],p.prototype,"description",void 0),request.e([request.d({type:String,json:{write:!0}})],p.prototype,"label",void 0),request.e([request.d({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),request.e([request.d({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),request.e([request.d({type:Color.h,json:{type:[request.S$2],write:!0}})],p.prototype,"color",void 0),p=a$3=request.e([request.i("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);const c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l$3;let a$2=l$3=class extends a$4{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null;}clone(){return new l$3({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:request.l$1(this.colorClassBreakInfos),legendOptions:request.l$1(this.legendOptions)})}};request.e([enumeration.r({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],a$2.prototype,"type",void 0),request.e([request.d({json:{write:!0},type:String})],a$2.prototype,"field",void 0),request.e([request.d({type:ColorStop.c,json:{write:!0}})],a$2.prototype,"legendOptions",void 0),request.e([request.d({type:a$4.fieldTransformTypeKebabDict.apiValues,json:{type:a$4.fieldTransformTypeKebabDict.jsonValues,read:a$4.fieldTransformTypeKebabDict.read,write:a$4.fieldTransformTypeKebabDict.write}})],a$2.prototype,"fieldTransformType",void 0),request.e([request.d({type:[c$1],json:{write:!0}})],a$2.prototype,"colorClassBreakInfos",void 0),a$2=l$3=request.e([request.i("esri.renderers.PointCloudClassBreaksRenderer")],a$2);const d$1=a$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l$2;let d=l$2=class extends a$4{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null;}clone(){return new l$2({...this.cloneProperties(),field:request.l$1(this.field),fieldTransformType:request.l$1(this.fieldTransformType),stops:request.l$1(this.stops),legendOptions:request.l$1(this.legendOptions)})}};request.e([enumeration.r({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),request.e([request.d({json:{write:!0},type:String})],d.prototype,"field",void 0),request.e([request.d({type:ColorStop.c,json:{write:!0}})],d.prototype,"legendOptions",void 0),request.e([request.d({type:a$4.fieldTransformTypeKebabDict.apiValues,json:{type:a$4.fieldTransformTypeKebabDict.jsonValues,read:a$4.fieldTransformTypeKebabDict.read,write:a$4.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),request.e([request.d({type:[ColorStop.a],json:{write:!0}})],d.prototype,"stops",void 0),d=l$2=request.e([request.i("esri.renderers.PointCloudStretchRenderer")],d);const a$1=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l$1;let c=l$1=class extends request.a$2{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null;}clone(){return new l$1({description:this.description,label:this.label,values:request.l$1(this.values),color:request.l$1(this.color)})}};request.e([request.d({type:String,json:{write:!0}})],c.prototype,"description",void 0),request.e([request.d({type:String,json:{write:!0}})],c.prototype,"label",void 0),request.e([request.d({type:[String],json:{write:!0}})],c.prototype,"values",void 0),request.e([request.d({type:Color.h,json:{type:[request.S$2],write:!0}})],c.prototype,"color",void 0),c=l$1=request.e([request.i("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);const n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let u=l=class extends a$4{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null;}clone(){return new l({...this.cloneProperties(),field:request.l$1(this.field),fieldTransformType:request.l$1(this.fieldTransformType),colorUniqueValueInfos:request.l$1(this.colorUniqueValueInfos),legendOptions:request.l$1(this.legendOptions)})}};request.e([enumeration.r({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),request.e([request.d({json:{write:!0},type:String})],u.prototype,"field",void 0),request.e([request.d({type:a$4.fieldTransformTypeKebabDict.apiValues,json:{type:a$4.fieldTransformTypeKebabDict.jsonValues,read:a$4.fieldTransformTypeKebabDict.read,write:a$4.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),request.e([request.d({type:[n],json:{write:!0}})],u.prototype,"colorUniqueValueInfos",void 0),request.e([request.d({type:ColorStop.c,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=l=request.e([request.i("esri.renderers.PointCloudUniqueValueRenderer")],u);const a=u;

exports.a = a;
exports.a$1 = a$1;
exports.a$2 = a$4;
exports.d = d$1;
