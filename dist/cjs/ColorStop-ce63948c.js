'use strict';

const request = require('./messageBundle-8be88d04.js');
const Color = require('./Color-7d915caa.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e;let p=e=class extends request.a$2{constructor(){super(...arguments),this.title=null;}clone(){return new e({title:this.title})}};request.e([request.d({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=e=request.e([request.i("esri.renderers.support.LegendOptions")],p);const c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;let c=i=class extends request.a$2{constructor(r){super(r),this.color=null,this.label=null,this.value=null;}writeValue(r,o,e){o[e]=null==r?0:r;}clone(){return new i({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};request.e([request.d({type:Color.h,json:{type:[request.S$2],write:!0}})],c.prototype,"color",void 0),request.e([request.d({type:String,json:{write:!0}})],c.prototype,"label",void 0),request.e([request.d({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],c.prototype,"value",void 0),request.e([request.r$2("value")],c.prototype,"writeValue",null),c=i=request.e([request.i("esri.renderers.visualVariables.support.ColorStop")],c);const a=c;

exports.a = a;
exports.c = c$1;
