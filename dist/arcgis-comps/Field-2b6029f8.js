import { a2 as o, e, a as d, X as S, i as i$3 } from './jsxFactory-c96bb45c.js';
import { a } from './JSONSupport-5a9f556a.js';
import { v as o$1, d as r } from './Graphic-6c72131a.js';
import { i, a as i$1, u as u$1, c as c$1 } from './RangeDomain-de3132b0.js';
import { i as i$2 } from './fieldType-b9f9365f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n={key:"type",base:i,typeMap:{range:i$1,"coded-value":u$1,inherited:c$1}};function t(o){if(!o||!o.type)return null;switch(o.type){case"range":return i$1.fromJSON(o);case"codedValue":return u$1.fromJSON(o);case"inherited":return c$1.fromJSON(o)}return null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u;const c=new o({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=u=class extends a{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null;}readDescription(e,{description:t}){let o;try{o=JSON.parse(t);}catch(r){}return o?o.value:null}readValueType(e,{description:t}){let o;try{o=JSON.parse(t);}catch(r){}return o?c.fromJSON(o.fieldValueType):null}clone(){return new u({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};e([d({type:String,json:{write:!0}})],m.prototype,"alias",void 0),e([d({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),e([d()],m.prototype,"description",void 0),e([o$1("description")],m.prototype,"readDescription",null),e([d({types:n,json:{read:{reader:t},write:!0}})],m.prototype,"domain",void 0),e([d({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),e([d({type:S,json:{write:!0}})],m.prototype,"length",void 0),e([d({type:String,json:{write:!0}})],m.prototype,"name",void 0),e([d({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),e([r(i$2)],m.prototype,"type",void 0),e([d()],m.prototype,"valueType",void 0),e([o$1("valueType",["description"])],m.prototype,"readValueType",null),m=u=e([i$3("esri.layers.support.Field")],m);const y=m;

export { n, t, y };
