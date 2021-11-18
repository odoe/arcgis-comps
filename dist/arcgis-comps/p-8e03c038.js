import{e,d as t,i as r,P as n,H as i,R as s}from"./p-9ae46e68.js";import{a as o}from"./p-fe01b82b.js";import{f as a,o as l}from"./p-566b0715.js";import{i as d}from"./p-32462343.js";var u;let c=u=class extends o{constructor(e){super(e),this.name=null,this.code=null}clone(){return new u({name:this.name,code:this.code})}};e([t({type:String,json:{write:!0}})],c.prototype,"name",void 0),e([t({type:[String,Number],json:{write:!0}})],c.prototype,"code",void 0),c=u=e([r("esri.layers.support.CodedValue")],c);const p=c,h=new n({inherited:"inherited",codedValue:"coded-value",range:"range"});let m=class extends o{constructor(e){super(e),this.name=null,this.type=null}};e([t({type:String,json:{write:!0}})],m.prototype,"name",void 0),e([a(h)],m.prototype,"type",void 0),m=e([r("esri.layers.support.Domain")],m);const y=m;var v;let g=v=class extends y{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(t=e.name),!!t)))}return t}clone(){return new v({codedValues:i(this.codedValues),name:this.name})}};e([t({type:[p],json:{write:!0}})],g.prototype,"codedValues",void 0),e([a({codedValue:"coded-value"})],g.prototype,"type",void 0),g=v=e([r("esri.layers.support.CodedValueDomain")],g);const w=g;var b;let j=b=class extends y{constructor(e){super(e),this.type="inherited"}clone(){return new b}};e([a({inherited:"inherited"})],j.prototype,"type",void 0),j=b=e([r("esri.layers.support.InheritedDomain")],j);const V=j;var f;let N=f=class extends y{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new f({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};e([t({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,r){t[r]=[this.minValue||0,e]}}}})],N.prototype,"maxValue",void 0),e([t({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,r){t[r]=[e,this.maxValue||0]}}}})],N.prototype,"minValue",void 0),e([a({range:"range"})],N.prototype,"type",void 0),N=f=e([r("esri.layers.support.RangeDomain")],N);const S=N,x={key:"type",base:y,typeMap:{range:S,"coded-value":w,inherited:V}};function O(e){if(!e||!e.type)return null;switch(e.type){case"range":return S.fromJSON(e);case"codedValue":return w.fromJSON(e);case"inherited":return V.fromJSON(e)}return null}var T;const D=new n({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let R=T=class extends o{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let r;try{r=JSON.parse(t)}catch(e){}return r?r.value:null}readValueType(e,{description:t}){let r;try{r=JSON.parse(t)}catch(e){}return r?D.fromJSON(r.fieldValueType):null}clone(){return new T({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};e([t({type:String,json:{write:!0}})],R.prototype,"alias",void 0),e([t({type:[String,Number],json:{write:{allowNull:!0}}})],R.prototype,"defaultValue",void 0),e([t()],R.prototype,"description",void 0),e([l("description")],R.prototype,"readDescription",null),e([t({types:x,json:{read:{reader:O},write:!0}})],R.prototype,"domain",void 0),e([t({type:Boolean,json:{write:!0}})],R.prototype,"editable",void 0),e([t({type:s,json:{write:!0}})],R.prototype,"length",void 0),e([t({type:String,json:{write:!0}})],R.prototype,"name",void 0),e([t({type:Boolean,json:{write:!0}})],R.prototype,"nullable",void 0),e([a(d)],R.prototype,"type",void 0),e([t()],R.prototype,"valueType",void 0),e([l("valueType",["description"])],R.prototype,"readValueType",null),R=T=e([r("esri.layers.support.Field")],R);const k=R;export{x as n,O as t,w as u,k as y}