import { P as o, e, d, i as i$1, Q as o$1 } from './messageBundle-8a146a9b.js';
import { a } from './JSONSupport-4e29e63d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;const p$1=new o({asc:"ascending",desc:"descending"});let n$1=i=class extends a{constructor(r){super(r),this.field=null,this.valueExpression=null,this.order="ascending";}clone(){return new i({field:this.field,valueExpression:this.valueExpression,order:this.order})}};e([d({type:String,json:{write:!0}})],n$1.prototype,"field",void 0),e([d({type:String,json:{write:!0}})],n$1.prototype,"valueExpression",void 0),e([d({type:p$1.apiValues,json:{read:p$1.read,write:p$1.write}})],n$1.prototype,"order",void 0),n$1=i=e([i$1("esri.layers.support.OrderByInfo")],n$1);const c$1=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(r,e,o){if(!r)return null;const t=r.find((r=>!!r.field));if(!t)return null;const i=new c$1;return i.read(t,o),[i]}function c(r,o,t,s){const i=r.find((r=>!!r.field));i&&o$1(t,[i.toJSON()],o);}const p=e$1=>{let i=class extends e$1{constructor(){super(...arguments),this.orderBy=null;}};return e([d({type:[c$1],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:n},write:{target:"layerDefinition.orderBy",writer:c}}})],i.prototype,"orderBy",void 0),i=e([i$1("esri.layers.mixins.OrderedLayer")],i),i};

export { p };
