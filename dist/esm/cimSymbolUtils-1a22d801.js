import { C } from './cimAnalyzer-bee7a9ff.js';
import { E } from './Utils-7fb1778c.js';
import { M } from './MaterialKey-a9776b0a.js';
import { a as a$1, t } from './devEnvironmentUtils-8a6821b7.js';
import { b as s$1, cu as m, h, cz as j, cr as b, cA as c, W as B, bF as U, cv as c$1, cw as p$1 } from './MapView-ac75aae8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={marker:E.MARKER,fill:E.FILL,line:E.LINE,text:E.TEXT};class r{constructor(e,r,i,l){const n={minScale:null==r?void 0:r.minScale,maxScale:null==r?void 0:r.maxScale},c=s(n);this.layers=e,this.data=r,this.hash=this._createHash()+c,this.rendererKey=i;for(const s of e){const e=a[s.type];s.materialKey=M(e,this.rendererKey),s.maxVVSize=l,s.scaleInfo=n,s.templateHash+=c;}}get type(){return "expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}function s(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function y(t,r,n){if(!t.name)return Promise.reject(new s$1("style-symbol-reference-name-missing","Missing name in style symbol reference"));if(t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName)return f(t,n);try{return p(await m(t,r,n),t.name,r,n)}catch(s){return h(s),null}}async function f(t,r){const e=j.replace(/\{SymbolName\}/gi,t.name);try{const t=await b(e,r);return c(t.data)}catch(n){return h(n),null}}async function p(m,a,y,f){const p=m.data,b$1={portal:y&&y.portal||B.getDefault(),url:U(m.baseUrl),origin:"portal-item"},d=p.items.find((t=>t.name===a));if(!d){throw new s$1("symbolstyleutils:symbol-name-not-found",`The symbol name '${a}' could not be found`,{symbolName:a})}let j=c$1(p$1(d,"cimRef"),b$1);a$1()&&(j=t(j));try{const t=await b(j,f);return c(t.data)}catch(U){return h(U),null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=async(a,r$1,n)=>new r(await C(a.data,r$1,n),a.data,a.rendererKey,a.maxVVSize),l=async(e,t,r,l)=>{if(!e)return null;if("cim"===e.type)return n(e,t,r);if("web-style"===e.type){const i={type:"cim",data:await y(e,null,l),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return n(i,t,r)}return e};function i(e){if(!e)return null;const{type:t,cim:a,url:r,materialHash:n}=e,l={cim:a,type:t,mosaicHash:n,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(t){case"marker":l.size=e.size,l.path=e.path;break;case"line":l.dashTemplate=e.dashTemplate;break;case"text":l.text=e.text,l.fontName=e.fontName;}return l}

export { i, l };
