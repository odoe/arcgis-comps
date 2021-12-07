import { am as u, e, d, i as i$2, a1 as a$2, c as s, N as o, ah as b, aV as u$1, D as l$3, af as t, aW as c, a2 as o$1, a3 as r, f as c$1, aX as a$4, V as e$1, s as s$1, aY as n } from './messageBundle-f75b4090.js';
import { M as M$1, h, j as j$1, a as h$1, g, b as h$2 } from './symbols-b414aa72.js';
import { r as r$1 } from './enumeration-d3301938.js';
import { a as a$3, b as b$1, F as F$1 } from './opacityUtils-5e864561.js';
import { v, p as p$1 } from './VisualVariablesMixin-0befdf7b.js';
import { c as c$2 } from './ColorStop-d4fc22fe.js';
import { m as m$1 } from './diffUtils-849b3672.js';
import { B } from './Portal-c5cfa317.js';
import { m } from './jsonUtils-ade233cd.js';
import { a as a$1 } from './Symbol-cad56b52.js';
import { c as c$3, i as i$3 } from './persistableUrlUtils-40bbec67.js';
import { m as m$2 } from './styleUtils-cb28c5ef.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l$2={types:M$1,json:{write:{writer:m},origins:{"web-scene":{types:h,write:{writer:m},read:{reader:u({types:h})}}}}},y={types:{base:a$1,key:"type",typeMap:{"simple-fill":j$1.typeMap["simple-fill"],"picture-fill":j$1.typeMap["picture-fill"],"polygon-3d":j$1.typeMap["polygon-3d"]}},json:{write:{writer:m},origins:{"web-scene":{type:h$1,write:{writer:m}}}}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i$1;let l$1=i$1=class extends a$2{constructor(s){super(s),this.description=null,this.label=null,this.minValue=null,this.maxValue=0,this.symbol=null;}clone(){return new i$1({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const s=JSON.stringify(this.symbol);return `${this.minValue}.${this.maxValue}.${s}`}};e([d({type:String,json:{write:!0}})],l$1.prototype,"description",void 0),e([d({type:String,json:{write:!0}})],l$1.prototype,"label",void 0),e([d({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],l$1.prototype,"minValue",void 0),e([d({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],l$1.prototype,"maxValue",void 0),e([d(l$2)],l$1.prototype,"symbol",void 0),l$1=i$1=e([i$2("esri.renderers.support.ClassBreakInfo")],l$1);const a=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var F;const E$1=s.getLogger("esri.renderers.ClassBreaksRenderer"),j="log",w="percent-of-total",z="field",T=new o({esriNormalizeByLog:j,esriNormalizeByPercentOfTotal:w,esriNormalizeByField:z}),_=b(a);let C=F=class extends(v(p$1)){constructor(e){super(e),this._compiledValueExpression={valueExpression:null,compiledFunction:null},this.backgroundFillSymbol=null,this.classBreakInfos=null,this.defaultLabel=null,this.defaultSymbol=null,this.field=null,this.isMaxInclusive=!0,this.legendOptions=null,this.normalizationField=null,this.normalizationTotal=null,this.type="class-breaks",this.valueExpression=null,this.valueExpressionTitle=null,this._set("classBreakInfos",[]);}readClassBreakInfos(e,s,t){if(!Array.isArray(e))return;let o=s.minValue;return e.map((e=>{const s=new a;return s.read(e,t),null==s.minValue&&(s.minValue=o),null==s.maxValue&&(s.maxValue=s.minValue),o=s.maxValue,s}))}writeClassBreakInfos(e,s,t,o){const r=e.map((e=>e.write({},o)));this._areClassBreaksConsecutive()&&r.forEach((e=>delete e.classMinValue)),s[t]=r;}castField(e){return null==e?e:"function"==typeof e?(E$1.error(".field: field must be a string value"),null):u$1(e)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let e=this._get("normalizationType");const s=!!this.normalizationField,t=null!=this.normalizationTotal;return s||t?(e=s&&z||t&&w||null,s&&t&&E$1.warn("warning: both normalizationField and normalizationTotal are set!")):e!==z&&e!==w||(e=null),e}set normalizationType(e){this._set("normalizationType",e);}addClassBreakInfo(e,t,r){let i=null;i="number"==typeof e?new a({minValue:e,maxValue:t,symbol:g(r)}):_(l$3(e)),this.classBreakInfos.push(i),1===this.classBreakInfos.length&&this.notifyChange("minValue");}removeClassBreakInfo(e,s){const t=this.classBreakInfos.length;for(let o=0;o<t;o++){const t=[this.classBreakInfos[o].minValue,this.classBreakInfos[o].maxValue];if(t[0]===e&&t[1]===s){this.classBreakInfos.splice(o,1);break}}}getBreakIndex(e,s){return this.valueExpression&&(t(s)||t(s.arcade))&&E$1.warn(""),this.valueExpression?this._getBreakIndexForExpression(e,s):this._getBreakIndexForField(e)}async getClassBreakInfo(e,s){let t$1=s;this.valueExpression&&(t(s)||t(s.arcade))&&(t$1={...t$1,arcade:await a$3()});const o=this.getBreakIndex(e,t$1);return -1!==o?this.classBreakInfos[o]:null}getSymbol(e,s){if(this.valueExpression&&(t(s)||t(s.arcade)))return void E$1.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const t$1=this.getBreakIndex(e,s);return t$1>-1?this.classBreakInfos[t$1].symbol:this.defaultSymbol}async getSymbolAsync(e,s){let t$1=s;if(this.valueExpression&&(t(s)||t(s.arcade))){const e=await a$3(),{arcadeUtils:s}=e;s.hasGeometryOperations(this.valueExpression)&&await s.enableGeometryOperations(),t$1={...t$1,arcade:e};}const o=this.getBreakIndex(e,t$1);return o>-1?this.classBreakInfos[o].symbol:this.defaultSymbol}getSymbols(){const e=[];return this.classBreakInfos.forEach((s=>{s.symbol&&e.push(s.symbol);})),this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),s=JSON.stringify(this.defaultSymbol),t=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;return `${e}.${s}.${this.classBreakInfos.reduce(((e,s)=>e+s.getMeshHash()),"")}.${t}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}clone(){return new F({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol&&this.backgroundFillSymbol.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:l$3(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:l$3(this.visualVariables),legendOptions:l$3(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}async collectRequiredFields(e,s){const t=[this.collectVVRequiredFields(e,s),this.collectSymbolFields(e,s)];await Promise.all(t);}async collectSymbolFields(e,s){const t=[...this.getSymbols().map((t=>t.collectRequiredFields(e,s))),b$1(e,s,this.valueExpression)];F$1(e,s,this.field),F$1(e,s,this.normalizationField),await Promise.all(t);}_getBreakIndexForExpression(e,s){const{viewingMode:t,scale:o,spatialReference:r,arcade:i}=c(s,{});let n=this._compiledValueExpression.valueExpression===this.valueExpression?this._compiledValueExpression.compiledFunction:null;const u=e$1(i).arcadeUtils;if(!n){const e=u.createSyntaxTree(this.valueExpression);n=u.createFunction(e),this._compiledValueExpression.compiledFunction=n;}this._compiledValueExpression.valueExpression=this.valueExpression;const c$1=u.executeFunction(n,u.createExecContext(e,u.getViewInfo({viewingMode:t,scale:o,spatialReference:r})));return this._getBreakIndexfromInfos(c$1)}_getBreakIndexForField(e){const s=this.field,t=e.attributes,o=this.normalizationType;let r=parseFloat(t[s]);if(o){const e=this.normalizationTotal,s=parseFloat(t[this.normalizationField]);if(o===j)r=Math.log(r)*Math.LOG10E;else if(o!==w||isNaN(e)){if(o===z&&!isNaN(s)){if(isNaN(r)||isNaN(s))return -1;r/=s;}}else r=r/e*100;}return this._getBreakIndexfromInfos(r)}_getBreakIndexfromInfos(e){const s=this.isMaxInclusive;if(null!=e&&"number"==typeof e&&!isNaN(e))for(let t=0;t<this.classBreakInfos.length;t++){const o=[this.classBreakInfos[t].minValue,this.classBreakInfos[t].maxValue];if(o[0]<=e&&(s?e<=o[1]:e<o[1]))return t}return -1}_areClassBreaksConsecutive(){const e=this.classBreakInfos,s=e.length;for(let t=1;t<s;t++)if(e[t-1].maxValue!==e[t].minValue)return !1;return !0}};e([d(y)],C.prototype,"backgroundFillSymbol",void 0),e([d({type:[a]})],C.prototype,"classBreakInfos",void 0),e([o$1("classBreakInfos")],C.prototype,"readClassBreakInfos",null),e([r("classBreakInfos")],C.prototype,"writeClassBreakInfos",null),e([d({type:String,json:{write:!0}})],C.prototype,"defaultLabel",void 0),e([d(l$2)],C.prototype,"defaultSymbol",void 0),e([d({type:String,json:{write:!0}})],C.prototype,"field",void 0),e([c$1("field")],C.prototype,"castField",null),e([d({type:Boolean})],C.prototype,"isMaxInclusive",void 0),e([d({type:c$2,json:{write:!0}})],C.prototype,"legendOptions",void 0),e([d({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],C.prototype,"minValue",null),e([d({type:String,json:{write:!0}})],C.prototype,"normalizationField",void 0),e([d({type:Number,cast:e=>a$4(e),json:{write:!0}})],C.prototype,"normalizationTotal",void 0),e([d({type:T.apiValues,value:null,json:{type:T.jsonValues,read:T.read,write:T.write}})],C.prototype,"normalizationType",null),e([r$1({classBreaks:"class-breaks"})],C.prototype,"type",void 0),e([d({type:String,json:{write:!0}})],C.prototype,"valueExpression",void 0),e([d({type:String,json:{write:!0}})],C.prototype,"valueExpressionTitle",void 0),C=F=e([i$2("esri.renderers.ClassBreaksRenderer")],C);const N$1=C;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;let l=i=class extends a$2{constructor(o){super(o),this.description=null,this.label=null,this.symbol=null,this.value=null;}clone(){return new i({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const o=JSON.stringify(this.symbol&&this.symbol.toJSON());return `${this.value}.${o}`}};e([d({type:String,json:{write:!0}})],l.prototype,"description",void 0),e([d({type:String,json:{write:!0}})],l.prototype,"label",void 0),e([d(l$2)],l.prototype,"symbol",void 0),e([d({type:[String,Number],json:{type:String,write:{writer:(o,r)=>{r.value=null==o?void 0:o.toString();}}}})],l.prototype,"value",void 0),l=i=e([i$2("esri.renderers.support.UniqueValueInfo")],l);const p=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var E;const M=s.getLogger("esri.renderers.UniqueValueRenderer"),N=b(p);let R=E=class extends(v(p$1)){constructor(e){super(e),this._valueInfoMap={},this._isDefaultSymbolDerived=!1,this.type="unique-value",this.backgroundFillSymbol=null,this.field=null,this.field2=null,this.field3=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null,this.defaultLabel=null,this.fieldDelimiter=null,this.portal=null,this.styleOrigin=null,this.diff={uniqueValueInfos(e,t){if(!e&&!t)return;if(!e||!t)return {type:"complete",oldValue:e,newValue:t};let i=!1;const r={type:"collection",added:[],removed:[],changed:[],unchanged:[]};for(let s=0;s<t.length;s++){const l=e.find((e=>e.value===t[s].value));l?m$1(l,t[s])?(r.changed.push({type:"complete",oldValue:l,newValue:t[s]}),i=!0):r.unchanged.push({oldValue:l,newValue:t[s]}):(r.added.push(t[s]),i=!0);}for(let s=0;s<e.length;s++){t.find((t=>t.value===e[s].value))||(r.removed.push(e[s]),i=!0);}return i?r:void 0}},this._set("uniqueValueInfos",[]);}get _cache(){return {compiledFunc:null}}castField(e){return null==e||"function"==typeof e?e:u$1(e)}writeField(e,t,r,s){"string"==typeof e?t[r]=e:s&&s.messages?s.messages.push(new s$1("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):M.error(".field: cannot write field to JSON since it's not a string value");}set defaultSymbol(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e);}readPortal(e,t,i){return i.portal||B.getDefault()}readStyleOrigin(e,t,i){if(t.styleName)return Object.freeze({styleName:t.styleName});if(t.styleUrl){const e=c$3(t.styleUrl,i);return Object.freeze({styleUrl:e})}}writeStyleOrigin(e,t,i,r){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=i$3(e.styleUrl,r));}set uniqueValueInfos(e){this.styleOrigin?M.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap());}addUniqueValueInfo(e,i){if(this.styleOrigin)return void M.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");let r;r="object"==typeof e?N(e):new p({value:e,symbol:g(i)}),this.uniqueValueInfos.push(r),this._valueInfoMap[r.value]=r;}removeUniqueValueInfo(e){if(this.styleOrigin)M.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");else for(let t=0;t<this.uniqueValueInfos.length;t++){if(this.uniqueValueInfos[t].value===e+""){delete this._valueInfoMap[e],this.uniqueValueInfos.splice(t,1);break}}}async getUniqueValueInfo(e,t$1){let i=t$1;return this.valueExpression&&(t(t$1)||t(t$1.arcade))&&(i={...i,arcade:await a$3()}),this._getUniqueValueInfo(e,i)}getSymbol(e,t$1){if(this.valueExpression&&(t(t$1)||t(t$1.arcade)))return void M.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const i=this._getUniqueValueInfo(e,t$1);return i&&i.symbol||this.defaultSymbol}async getSymbolAsync(e,t$1){let i=t$1;if(this.valueExpression&&(t(i)||t(i.arcade))){const e=await a$3(),{arcadeUtils:t}=e;t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),i={...i,arcade:e};}const r=this._getUniqueValueInfo(e,i);return r&&r.symbol||this.defaultSymbol}getSymbols(){const e=[];for(const t of this.uniqueValueInfos)t.symbol&&e.push(t.symbol);return this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return `${JSON.stringify(this.backgroundFillSymbol)}.${JSON.stringify(this.defaultSymbol)}.${this.uniqueValueInfos.reduce(((e,t)=>e+t.getMeshHash()),"")}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`}clone(){const e=new E({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:l$3(this.defaultSymbol),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:l$3(this.visualVariables),legendOptions:l$3(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:l$3(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal);const t=l$3(this.uniqueValueInfos);return this.styleOrigin&&(e._set("styleOrigin",Object.freeze(l$3(this.styleOrigin))),Object.freeze(t)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(e,t){const i=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)];await Promise.all(i);}async collectSymbolFields(e,t){const i=[...this.getSymbols().map((i=>i.collectRequiredFields(e,t))),b$1(e,t,this.valueExpression)];F$1(e,t,this.field),F$1(e,t,this.field2),F$1(e,t,this.field3),await Promise.all(i);}populateFromStyle(){return m$2(this.styleOrigin,{portal:this.portal}).then((e=>{const t=[];return this._valueInfoMap={},e&&e.data&&Array.isArray(e.data.items)&&e.data.items.forEach((i=>{const r=new h$2({styleUrl:e.styleUrl,styleName:e.styleName,portal:this.portal,name:i.name});this.defaultSymbol||i.name!==e.data.defaultItem||(this.defaultSymbol=r,this._isDefaultSymbolDerived=!0);const s=new p({value:i.name,symbol:r});t.push(s),this._valueInfoMap[i.name]=s;})),this._set("uniqueValueInfos",Object.freeze(t)),!this.defaultSymbol&&this.uniqueValueInfos.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0),this}))}_updateValueInfoMap(){this._valueInfoMap={},this.uniqueValueInfos.forEach((e=>this._valueInfoMap[e.value+""]=e));}_getUniqueValueInfo(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)}_getUnqiueValueInfoForExpression(e,t){const{viewingMode:i,scale:r,spatialReference:s,arcade:l}=c(t,{});let a=this._cache.compiledFunc;const u=e$1(l).arcadeUtils;if(!a){const e=u.createSyntaxTree(this.valueExpression);a=u.createFunction(e),this._cache.compiledFunc=a;}const p=u.executeFunction(a,u.createExecContext(e,u.getViewInfo({viewingMode:i,scale:r,spatialReference:s})));return this._valueInfoMap[p+""]}_getUnqiueValueInfoForFields(e){const t=this.field,i=e.attributes;let r;if("function"!=typeof t&&this.field2){const e=this.field2,s=this.field3,l=[];t&&l.push(i[t]),e&&l.push(i[e]),s&&l.push(i[s]),r=l.join(this.fieldDelimiter||"");}else "function"==typeof t?r=t(e):t&&(r=i[t]);return this._valueInfoMap[r+""]}static fromPortalStyle(e,t){const i=new E(t&&t.properties);i._set("styleOrigin",Object.freeze({styleName:e})),i._set("portal",t&&t.portal||B.getDefault());const r=i.populateFromStyle();return r.catch((t=>{M.error(`#fromPortalStyle('${e}'[, ...])`,"Failed to create unique value renderer from style name",t);})),r}static fromStyleUrl(e,t){const i=new E(t&&t.properties);i._set("styleOrigin",Object.freeze({styleUrl:e}));const r=i.populateFromStyle();return r.catch((t=>{M.error(`#fromStyleUrl('${e}'[, ...])`,"Failed to create unique value renderer from style URL",t);})),r}};e([d({readOnly:!0})],R.prototype,"_cache",null),e([r$1({uniqueValue:"unique-value"})],R.prototype,"type",void 0),e([d(y)],R.prototype,"backgroundFillSymbol",void 0),e([d({json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],R.prototype,"field",void 0),e([c$1("field")],R.prototype,"castField",null),e([r("field")],R.prototype,"writeField",null),e([d({type:String,json:{write:!0}})],R.prototype,"field2",void 0),e([d({type:String,json:{write:!0}})],R.prototype,"field3",void 0),e([d({type:String,json:{write:!0}})],R.prototype,"valueExpression",void 0),e([d({type:String,json:{write:!0}})],R.prototype,"valueExpressionTitle",void 0),e([d({type:c$2,json:{write:!0}})],R.prototype,"legendOptions",void 0),e([d({type:String,json:{write:!0}})],R.prototype,"defaultLabel",void 0),e([d(n({...l$2},{json:{write:{overridePolicy(){return {enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return {enabled:!this._isDefaultSymbolDerived}}}}}}}))],R.prototype,"defaultSymbol",null),e([d({type:String,json:{write:!0}})],R.prototype,"fieldDelimiter",void 0),e([d({type:B,readOnly:!0})],R.prototype,"portal",void 0),e([o$1("portal",["styleName"])],R.prototype,"readPortal",null),e([d({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],R.prototype,"styleOrigin",void 0),e([o$1("styleOrigin",["styleName","styleUrl"])],R.prototype,"readStyleOrigin",null),e([r("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],R.prototype,"writeStyleOrigin",null),e([d({type:[p],json:{write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],R.prototype,"uniqueValueInfos",null),R=E=e([i$2("esri.renderers.UniqueValueRenderer")],R);const P=R;

export { N$1 as N, P, a, l$2 as l, p };
