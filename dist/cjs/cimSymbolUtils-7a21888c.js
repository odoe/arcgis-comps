'use strict';

const cimAnalyzer = require('./cimAnalyzer-eb6fa5b4.js');
const Utils = require('./Utils-a77299a6.js');
const MaterialKey = require('./MaterialKey-b68d4c0b.js');
const devEnvironmentUtils = require('./devEnvironmentUtils-aafb5541.js');
const request = require('./messageBundle-8be88d04.js');
const Portal = require('./Portal-8d16604d.js');
const persistableUrlUtils = require('./persistableUrlUtils-c611d652.js');
const styleUtils = require('./styleUtils-2b475600.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={marker:Utils.E.MARKER,fill:Utils.E.FILL,line:Utils.E.LINE,text:Utils.E.TEXT};class r{constructor(e,r,i,l){const n={minScale:null==r?void 0:r.minScale,maxScale:null==r?void 0:r.maxScale},c=s(n);this.layers=e,this.data=r,this.hash=this._createHash()+c,this.rendererKey=i;for(const s of e){const e=a[s.type];s.materialKey=MaterialKey.M(e,this.rendererKey),s.maxVVSize=l,s.scaleInfo=n,s.templateHash+=c;}}get type(){return "expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}function s(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function y(t,r,n){if(!t.name)return Promise.reject(new request.s("style-symbol-reference-name-missing","Missing name in style symbol reference"));if(t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName)return f(t,n);try{return p(await styleUtils.m(t,r,n),t.name,r,n)}catch(s){return request.h(s),null}}async function f(t,r){const e=styleUtils.j.replace(/\{SymbolName\}/gi,t.name);try{const t=await styleUtils.b(e,r);return styleUtils.c(t.data)}catch(n){return request.h(n),null}}async function p(m,a,y,f){const p=m.data,b={portal:y&&y.portal||Portal.B.getDefault(),url:request.U(m.baseUrl),origin:"portal-item"},d=p.items.find((t=>t.name===a));if(!d){throw new request.s("symbolstyleutils:symbol-name-not-found",`The symbol name '${a}' could not be found`,{symbolName:a})}let j=persistableUrlUtils.c(styleUtils.p(d,"cimRef"),b);devEnvironmentUtils.a()&&(j=devEnvironmentUtils.t(j));try{const t=await styleUtils.b(j,f);return styleUtils.c(t.data)}catch(U){return request.h(U),null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=async(a,r$1,n)=>new r(await cimAnalyzer.C(a.data,r$1,n),a.data,a.rendererKey,a.maxVVSize),l=async(e,t,r,l)=>{if(!e)return null;if("cim"===e.type)return n(e,t,r);if("web-style"===e.type){const i={type:"cim",data:await y(e,null,l),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return n(i,t,r)}return e};function i(e){if(!e)return null;const{type:t,cim:a,url:r,materialHash:n}=e,l={cim:a,type:t,mosaicHash:n,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(t){case"marker":l.size=e.size,l.path=e.path;break;case"line":l.dashTemplate=e.dashTemplate;break;case"text":l.text=e.text,l.fontName=e.fontName;}return l}

exports.i = i;
exports.l = l;
