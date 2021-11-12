import { e, a as d$1, i as i$2, a2 as o, M as l } from './jsxFactory-c96bb45c.js';
import { d as r } from './Graphic-6c72131a.js';
import { a as a$1 } from './JSONSupport-5a9f556a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t$1;let p$2=t$1=class extends a$1{constructor(r){super(r),this.name=null,this.code=null;}clone(){return new t$1({name:this.name,code:this.code})}};e([d$1({type:String,json:{write:!0}})],p$2.prototype,"name",void 0),e([d$1({type:[String,Number],json:{write:!0}})],p$2.prototype,"code",void 0),p$2=t$1=e([i$2("esri.layers.support.CodedValue")],p$2);const c$2=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c$1=new o({inherited:"inherited",codedValue:"coded-value",range:"range"});let a=class extends a$1{constructor(r){super(r),this.name=null,this.type=null;}};e([d$1({type:String,json:{write:!0}})],a.prototype,"name",void 0),e([r(c$1)],a.prototype,"type",void 0),a=e([i$2("esri.layers.support.Domain")],a);const i$1=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;let p$1=d=class extends i$1{constructor(e){super(e),this.codedValues=null,this.type="coded-value";}getName(e){let o=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(o=e.name),!!o)));}return o}clone(){return new d({codedValues:l(this.codedValues),name:this.name})}};e([d$1({type:[c$2],json:{write:!0}})],p$1.prototype,"codedValues",void 0),e([r({codedValue:"coded-value"})],p$1.prototype,"type",void 0),p$1=d=e([i$2("esri.layers.support.CodedValueDomain")],p$1);const u=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let p=t=class extends i$1{constructor(r){super(r),this.type="inherited";}clone(){return new t}};e([r({inherited:"inherited"})],p.prototype,"type",void 0),p=t=e([i$2("esri.layers.support.InheritedDomain")],p);const c=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var s;let n=s=class extends i$1{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range";}clone(){return new s({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};e([d$1({type:Number,json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range&&r.range[1]},write:{enabled:!1,overridePolicy(){return {enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,r,a){r[a]=[this.minValue||0,e];}}}})],n.prototype,"maxValue",void 0),e([d$1({type:Number,json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range&&r.range[0]},write:{target:"range",writer(e,r,a){r[a]=[e,this.maxValue||0];}}}})],n.prototype,"minValue",void 0),e([r({range:"range"})],n.prototype,"type",void 0),n=s=e([i$2("esri.layers.support.RangeDomain")],n);const i=n;

export { i as a, c, i$1 as i, u };
