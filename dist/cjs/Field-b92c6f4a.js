'use strict';

const request = require('./messageBundle-8be88d04.js');
const enumeration = require('./enumeration-f235fe07.js');
const fieldType = require('./fieldType-32f95259.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t$2;let p$2=t$2=class extends request.a$2{constructor(r){super(r),this.name=null,this.code=null;}clone(){return new t$2({name:this.name,code:this.code})}};request.e([request.d({type:String,json:{write:!0}})],p$2.prototype,"name",void 0),request.e([request.d({type:[String,Number],json:{write:!0}})],p$2.prototype,"code",void 0),p$2=t$2=request.e([request.i("esri.layers.support.CodedValue")],p$2);const c$3=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c$2=new request.o$1({inherited:"inherited",codedValue:"coded-value",range:"range"});let a=class extends request.a$2{constructor(r){super(r),this.name=null,this.type=null;}};request.e([request.d({type:String,json:{write:!0}})],a.prototype,"name",void 0),request.e([enumeration.r(c$2)],a.prototype,"type",void 0),a=request.e([request.i("esri.layers.support.Domain")],a);const i$1=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;let p$1=d=class extends i$1{constructor(e){super(e),this.codedValues=null,this.type="coded-value";}getName(e){let o=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(o=e.name),!!o)));}return o}clone(){return new d({codedValues:request.l$1(this.codedValues),name:this.name})}};request.e([request.d({type:[c$3],json:{write:!0}})],p$1.prototype,"codedValues",void 0),request.e([enumeration.r({codedValue:"coded-value"})],p$1.prototype,"type",void 0),p$1=d=request.e([request.i("esri.layers.support.CodedValueDomain")],p$1);const u$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t$1;let p=t$1=class extends i$1{constructor(r){super(r),this.type="inherited";}clone(){return new t$1}};request.e([enumeration.r({inherited:"inherited"})],p.prototype,"type",void 0),p=t$1=request.e([request.i("esri.layers.support.InheritedDomain")],p);const c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var s;let n$1=s=class extends i$1{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range";}clone(){return new s({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};request.e([request.d({type:Number,json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range&&r.range[1]},write:{enabled:!1,overridePolicy(){return {enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,r,a){r[a]=[this.minValue||0,e];}}}})],n$1.prototype,"maxValue",void 0),request.e([request.d({type:Number,json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range&&r.range[0]},write:{target:"range",writer(e,r,a){r[a]=[e,this.maxValue||0];}}}})],n$1.prototype,"minValue",void 0),request.e([enumeration.r({range:"range"})],n$1.prototype,"type",void 0),n$1=s=request.e([request.i("esri.layers.support.RangeDomain")],n$1);const i=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n={key:"type",base:i$1,typeMap:{range:i,"coded-value":u$1,inherited:c$1}};function t(o){if(!o||!o.type)return null;switch(o.type){case"range":return i.fromJSON(o);case"codedValue":return u$1.fromJSON(o);case"inherited":return c$1.fromJSON(o)}return null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u;const c=new request.o$1({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=u=class extends request.a$2{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null;}readDescription(e,{description:t}){let o;try{o=JSON.parse(t);}catch(r){}return o?o.value:null}readValueType(e,{description:t}){let o;try{o=JSON.parse(t);}catch(r){}return o?c.fromJSON(o.fieldValueType):null}clone(){return new u({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};request.e([request.d({type:String,json:{write:!0}})],m.prototype,"alias",void 0),request.e([request.d({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),request.e([request.d()],m.prototype,"description",void 0),request.e([request.o$2("description")],m.prototype,"readDescription",null),request.e([request.d({types:n,json:{read:{reader:t},write:!0}})],m.prototype,"domain",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),request.e([request.d({type:request.S$2,json:{write:!0}})],m.prototype,"length",void 0),request.e([request.d({type:String,json:{write:!0}})],m.prototype,"name",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),request.e([enumeration.r(fieldType.i)],m.prototype,"type",void 0),request.e([request.d()],m.prototype,"valueType",void 0),request.e([request.o$2("valueType",["description"])],m.prototype,"readValueType",null),m=u=request.e([request.i("esri.layers.support.Field")],m);const y=m;

exports.c = c$3;
exports.i = i;
exports.n = n;
exports.t = t;
exports.u = u$1;
exports.y = y;
