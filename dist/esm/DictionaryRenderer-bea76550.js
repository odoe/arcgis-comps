import { c as s, D as l, b as d, aZ as c, Q as E, s as s$1, A as r, e as e$1, d as d$2, a3 as r$1, i } from './messageBundle-f75b4090.js';
import { h } from './Color-d1b9b54f.js';
import { e } from './LRUCache-d5842b88.js';
import { b, a, n } from './opacityUtils-5e864561.js';
import { v, p } from './VisualVariablesMixin-0befdf7b.js';
import { d as d$1 } from './symbols-b414aa72.js';
import './index-b157fcf2.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './MemCache-78a9f000.js';
import './geometry-7e07b1ba.js';
import './colorRamps-22c88e98.js';
import './enumeration-d3301938.js';
import './ColorStop-d4fc22fe.js';
import './screenUtils-9bb7e30c.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-26c41ea6.js';
import './Graphic-3961df6c.js';
import './PopupTemplate-6e5ecad2.js';
import './Identifiable-da047c47.js';
import './jsonUtils-13b1f6fd.js';
import './lengthUtils-f033d4fe.js';
import './unitUtils-38774114.js';
import './Symbol-cad56b52.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './persistableUrlUtils-40bbec67.js';
import './Portal-c5cfa317.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var _;const j=s.getLogger("esri.renderers.DictionaryRenderer"),w={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};let S=_=class extends(v(p)){constructor(e$1){super(e$1),this._ongoingRequests=new Map,this._symbolCache=new e(100),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary";}writeData(e,s){e&&(s.scalingExpressionInfo={expression:e,returnType:"number"});}writeVisualVariables(e,s,t,r){null!=r&&r.origin||super.writeVisualVariables(e,s,t,r);}clone(){return new _({config:l(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:l(this.fieldMap),url:l(this.url),visualVariables:l(this.visualVariables)})}async getSymbolAsync(e,t){let r$1;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t));try{r$1=await this._dictionaryPromise;}catch(d$1){if(d(d$1))return this._dictionaryPromise=null,null}const i={};if(this.fieldMap)for(const s of this._symbolFields){const t=this.fieldMap[s];if(t&&null!==e.attributes[t]&&void 0!==e.attributes[t]){const r=""+e.attributes[t];i[s]=r;}else i[s]="";}const o=r$1(i,t);if(!o||"string"!=typeof o)return null;const n=c(o).toString(),p=this._symbolCache.get(n);if(p)return p.catch((()=>{this._symbolCache.pop(n);})),p;const m=o.split(";"),u=[],f=[];for(const a of m)if(a&&0!==a.length)if(-1===a.indexOf("po:"))if(-1!==a.indexOf("|")){for(const e of a.split("|"))if(this._itemNames.has(e)){u.push(e);break}}else this._itemNames.has(a)&&u.push(a);else {const e=a.substr(3).split("|");if(3===e.length){const t=e[0],r=e[1];let i=e[2];if("DashTemplate"===r)i=i.split(" ").map((e=>Number(e)));else if("Color"===r){const e=new h(i).toRgba();i=[e[0],e[1],e[2],255*e[3]];}else i=Number(i);f.push({primitiveName:t,propertyName:r,value:i});}}const h$1=!r(e.geometry)||!e.geometry.hasZ&&"point"===e.geometry.type,y=this._cimPartsToCIMSymbol(u,f,h$1,t);return this._symbolCache.put(n,y,1),y}async collectRequiredFields(e,s){await this.collectVVRequiredFields(e,s),this.scaleExpression&&await b(e,s,this.scaleExpression);for(const t in this.fieldMap){const r=this.fieldMap[t];s.has(r)&&e.add(r);}}get arcadeRequired(){return !0}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void j.error("no valid URL!");const s=r(e)?e.abortOptions:null,i=E(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},...s}),[{data:o}]=await Promise.all([i,a()]);if(!o)throw this._dictionaryPromise=null,new s$1("esri.renderers.DictionaryRenderer","Bad dictionary data!");const n$1=o.expression,l=o.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=new Set(o.itemsNames),this._symbolFields=l.symbol;const c={};if(this.config){const e=this.config;for(const s in e)c[s]=e[s];}if(l.configuration)for(const t of l.configuration)c.hasOwnProperty(t.name)||(c[t.name]=t.value);const p=[];if(r(e)&&e.fields&&this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t],r=e.fields.filter((e=>e.name===s));r.length>0&&p.push({...r[0],name:t});}return this._dictionaryPromise=n(n$1,r(e)?e.spatialReference:null,p,c).then((e=>{const s={scale:0};return (t,r$1)=>{const i=e.repurposeFeature({geometry:null,attributes:t});return s.scale=r(r$1)?r$1.scale:void 0,e.evaluate({$feature:i,$view:s})}})).catch((e=>(j.error("Creating dictinoary expression failed:",e),null))),this._dictionaryPromise}getSymbol(){return null}getSymbols(){return []}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){return `${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._symbolFields}async _getSymbolPart(e,s){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const r=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),i=E(r,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(e,i);try{return (await i).data}catch(o){return this._ongoingRequests.delete(e),Promise.reject(o)}}_combineSymbolParts(e,s,t){if(!e||0===e.length)return null;const r={...e[0]};if(e.length>1){r.symbolLayers=[];for(const s of e){const e=s;r.symbolLayers.unshift(...e.symbolLayers);}}return t&&(r.callout=w),{type:"CIMSymbolReference",symbol:r,primitiveOverrides:s}}async _cimPartsToCIMSymbol(e,s,t,r){const i=new Array(e.length);for(let n=0;n<e.length;n++)i[n]=this._getSymbolPart(e[n],r);const o=await Promise.all(i);return new d$1({data:this._combineSymbolParts(o,s,t)})}};e$1([d$2({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],S.prototype,"config",void 0),e$1([d$2({type:Object,json:{write:!0}})],S.prototype,"fieldMap",void 0),e$1([d$2({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],S.prototype,"scaleExpression",void 0),e$1([r$1("scaleExpression")],S.prototype,"writeData",null),e$1([d$2({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return {enabled:!!e&&!!this.scaleExpression}}}}})],S.prototype,"scaleExpressionTitle",void 0),e$1([d$2({type:String,json:{write:!0}})],S.prototype,"url",void 0),e$1([r$1("visualVariables")],S.prototype,"writeVisualVariables",null),S=_=e$1([i("esri.renderers.DictionaryRenderer")],S);const x=S;

export default x;
