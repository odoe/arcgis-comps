'use strict';

const request = require('./messageBundle-8be88d04.js');
const Color = require('./Color-7d915caa.js');
const LRUCache = require('./LRUCache-38fdf18d.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const VisualVariablesMixin = require('./VisualVariablesMixin-a105fcfa.js');
const SimpleLineSymbol = require('./symbols-29b793e5.js');
require('./index-fde8502c.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./MemCache-7f5503ec.js');
require('./geometry-ef17530a.js');
require('./colorRamps-d0c2cb9d.js');
require('./enumeration-f235fe07.js');
require('./ColorStop-ce63948c.js');
require('./screenUtils-d911ae62.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./Graphic-0aff6059.js');
require('./PopupTemplate-a0b855f8.js');
require('./Identifiable-a4f50f85.js');
require('./jsonUtils-b6068079.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./Symbol-f0556e23.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var _;const j=request.s$1.getLogger("esri.renderers.DictionaryRenderer"),w={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};let S=_=class extends(VisualVariablesMixin.v(VisualVariablesMixin.p)){constructor(e){super(e),this._ongoingRequests=new Map,this._symbolCache=new LRUCache.e(100),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary";}writeData(e,s){e&&(s.scalingExpressionInfo={expression:e,returnType:"number"});}writeVisualVariables(e,s,t,r){null!=r&&r.origin||super.writeVisualVariables(e,s,t,r);}clone(){return new _({config:request.l$1(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:request.l$1(this.fieldMap),url:request.l$1(this.url),visualVariables:request.l$1(this.visualVariables)})}async getSymbolAsync(e,t){let r;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t));try{r=await this._dictionaryPromise;}catch(d){if(request.d$1(d))return this._dictionaryPromise=null,null}const i={};if(this.fieldMap)for(const s of this._symbolFields){const t=this.fieldMap[s];if(t&&null!==e.attributes[t]&&void 0!==e.attributes[t]){const r=""+e.attributes[t];i[s]=r;}else i[s]="";}const o=r(i,t);if(!o||"string"!=typeof o)return null;const n=request.c$3(o).toString(),p=this._symbolCache.get(n);if(p)return p.catch((()=>{this._symbolCache.pop(n);})),p;const m=o.split(";"),u=[],f=[];for(const a of m)if(a&&0!==a.length)if(-1===a.indexOf("po:"))if(-1!==a.indexOf("|")){for(const e of a.split("|"))if(this._itemNames.has(e)){u.push(e);break}}else this._itemNames.has(a)&&u.push(a);else {const e=a.substr(3).split("|");if(3===e.length){const t=e[0],r=e[1];let i=e[2];if("DashTemplate"===r)i=i.split(" ").map((e=>Number(e)));else if("Color"===r){const e=new Color.h(i).toRgba();i=[e[0],e[1],e[2],255*e[3]];}else i=Number(i);f.push({primitiveName:t,propertyName:r,value:i});}}const h=!request.r(e.geometry)||!e.geometry.hasZ&&"point"===e.geometry.type,y=this._cimPartsToCIMSymbol(u,f,h,t);return this._symbolCache.put(n,y,1),y}async collectRequiredFields(e,s){await this.collectVVRequiredFields(e,s),this.scaleExpression&&await opacityUtils.b(e,s,this.scaleExpression);for(const t in this.fieldMap){const r=this.fieldMap[t];s.has(r)&&e.add(r);}}get arcadeRequired(){return !0}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void j.error("no valid URL!");const s=request.r(e)?e.abortOptions:null,i=request.E(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},...s}),[{data:o}]=await Promise.all([i,opacityUtils.a()]);if(!o)throw this._dictionaryPromise=null,new request.s("esri.renderers.DictionaryRenderer","Bad dictionary data!");const n=o.expression,l=o.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=new Set(o.itemsNames),this._symbolFields=l.symbol;const c={};if(this.config){const e=this.config;for(const s in e)c[s]=e[s];}if(l.configuration)for(const t of l.configuration)c.hasOwnProperty(t.name)||(c[t.name]=t.value);const p=[];if(request.r(e)&&e.fields&&this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t],r=e.fields.filter((e=>e.name===s));r.length>0&&p.push({...r[0],name:t});}return this._dictionaryPromise=opacityUtils.n(n,request.r(e)?e.spatialReference:null,p,c).then((e=>{const s={scale:0};return (t,r)=>{const i=e.repurposeFeature({geometry:null,attributes:t});return s.scale=request.r(r)?r.scale:void 0,e.evaluate({$feature:i,$view:s})}})).catch((e=>(j.error("Creating dictinoary expression failed:",e),null))),this._dictionaryPromise}getSymbol(){return null}getSymbols(){return []}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){return `${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._symbolFields}async _getSymbolPart(e,s){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const r=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),i=request.E(r,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(e,i);try{return (await i).data}catch(o){return this._ongoingRequests.delete(e),Promise.reject(o)}}_combineSymbolParts(e,s,t){if(!e||0===e.length)return null;const r={...e[0]};if(e.length>1){r.symbolLayers=[];for(const s of e){const e=s;r.symbolLayers.unshift(...e.symbolLayers);}}return t&&(r.callout=w),{type:"CIMSymbolReference",symbol:r,primitiveOverrides:s}}async _cimPartsToCIMSymbol(e,s,t,r){const i=new Array(e.length);for(let n=0;n<e.length;n++)i[n]=this._getSymbolPart(e[n],r);const o=await Promise.all(i);return new SimpleLineSymbol.d({data:this._combineSymbolParts(o,s,t)})}};request.e([request.d({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],S.prototype,"config",void 0),request.e([request.d({type:Object,json:{write:!0}})],S.prototype,"fieldMap",void 0),request.e([request.d({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],S.prototype,"scaleExpression",void 0),request.e([request.r$2("scaleExpression")],S.prototype,"writeData",null),request.e([request.d({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return {enabled:!!e&&!!this.scaleExpression}}}}})],S.prototype,"scaleExpressionTitle",void 0),request.e([request.d({type:String,json:{write:!0}})],S.prototype,"url",void 0),request.e([request.r$2("visualVariables")],S.prototype,"writeVisualVariables",null),S=_=request.e([request.i("esri.renderers.DictionaryRenderer")],S);const x=S;

exports.default = x;
