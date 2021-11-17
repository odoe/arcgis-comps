'use strict';

const request = require('./messageBundle-312ceb47.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;const p$1=new request.o$1({asc:"ascending",desc:"descending"});let n$1=i=class extends JSONSupport.a{constructor(r){super(r),this.field=null,this.valueExpression=null,this.order="ascending";}clone(){return new i({field:this.field,valueExpression:this.valueExpression,order:this.order})}};request.e([request.d({type:String,json:{write:!0}})],n$1.prototype,"field",void 0),request.e([request.d({type:String,json:{write:!0}})],n$1.prototype,"valueExpression",void 0),request.e([request.d({type:p$1.apiValues,json:{read:p$1.read,write:p$1.write}})],n$1.prototype,"order",void 0),n$1=i=request.e([request.i("esri.layers.support.OrderByInfo")],n$1);const c$1=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(r,e,o){if(!r)return null;const t=r.find((r=>!!r.field));if(!t)return null;const i=new c$1;return i.read(t,o),[i]}function c(r,o,t,s){const i=r.find((r=>!!r.field));i&&request.o$2(t,[i.toJSON()],o);}const p=e=>{let i=class extends e{constructor(){super(...arguments),this.orderBy=null;}};return request.e([request.d({type:[c$1],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:n},write:{target:"layerDefinition.orderBy",writer:c}}})],i.prototype,"orderBy",void 0),i=request.e([request.i("esri.layers.mixins.OrderedLayer")],i),i};

exports.p = p;
