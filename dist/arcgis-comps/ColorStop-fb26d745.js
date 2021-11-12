import { e as e$1, a as d, i as i$1, X as S } from './jsxFactory-c96bb45c.js';
import { a as a$1 } from './JSONSupport-5a9f556a.js';
import { g as h, f as r } from './Graphic-6c72131a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e;let p=e=class extends a$1{constructor(){super(...arguments),this.title=null;}clone(){return new e({title:this.title})}};e$1([d({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=e=e$1([i$1("esri.renderers.support.LegendOptions")],p);const c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;let c=i=class extends a$1{constructor(r){super(r),this.color=null,this.label=null,this.value=null;}writeValue(r,o,e){o[e]=null==r?0:r;}clone(){return new i({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};e$1([d({type:h,json:{type:[S],write:!0}})],c.prototype,"color",void 0),e$1([d({type:String,json:{write:!0}})],c.prototype,"label",void 0),e$1([d({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],c.prototype,"value",void 0),e$1([r("value")],c.prototype,"writeValue",null),c=i=e$1([i$1("esri.renderers.visualVariables.support.ColorStop")],c);const a=c;

export { a, c$1 as c };
