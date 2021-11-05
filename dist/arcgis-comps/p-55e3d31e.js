import{C as t}from"./p-9f705d18.js";import{E as e}from"./p-804725e3.js";import{M as n}from"./p-a16c2b1d.js";import{a as r,t as s}from"./p-dede18bd.js";import{a7 as a,bA as i,bX as l,bF as o,bx as c,bG as u,ao as m,aI as f,bB as y,bC as b}from"./p-7b6f6c18.js";const p={marker:e.MARKER,fill:e.FILL,line:e.LINE,text:e.TEXT};class h{constructor(t,e,r,s){const a={minScale:null==e?void 0:e.minScale,maxScale:null==e?void 0:e.maxScale},i=function(t){return t.minScale||t.maxScale?t.minScale+"-"+t.maxScale:""}(a);this.layers=t,this.data=e,this.hash=this._createHash()+i,this.rendererKey=r;for(const e of t)e.materialKey=n(p[e.type],this.rendererKey),e.maxVVSize=s,e.scaleInfo=a,e.templateHash+=i}get type(){return"expanded-cim"}_createHash(){let t="";for(const e of this.layers)t+=e.templateHash;return t}}async function d(t,e,n){if(!t.name)return Promise.reject(new a("style-symbol-reference-name-missing","Missing name in style symbol reference"));if(t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName)return async function(t,e){const n=o.replace(/\{SymbolName\}/gi,t.name);try{const t=await c(n,e);return u(t.data)}catch(t){return l(t),null}}(t,n);try{return w(await i(t,e,n),t.name,e,n)}catch(t){return l(t),null}}async function w(t,e,n,i){const o=t.data,p={portal:n&&n.portal||m.getDefault(),url:f(t.baseUrl),origin:"portal-item"},h=o.items.find((t=>t.name===e));if(!h)throw new a("symbolstyleutils:symbol-name-not-found",`The symbol name '${e}' could not be found`,{symbolName:e});let d=y(b(h,"cimRef"),p);r()&&(d=s(d));try{const t=await c(d,i);return u(t.data)}catch(t){return l(t),null}}const x=async(e,n,r)=>new h(await t(e.data,n,r),e.data,e.rendererKey,e.maxVVSize),S=async(t,e,n,r)=>{if(!t)return null;if("cim"===t.type)return x(t,e,n);if("web-style"===t.type){const s={type:"cim",data:await d(t,null,r),rendererKey:t.rendererKey,maxVVSize:t.maxVVSize};return x(s,e,n)}return t};function g(t){if(!t)return null;const{type:e,cim:n,url:r,materialHash:s}=t,a={cim:n,type:e,mosaicHash:s,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(e){case"marker":a.size=t.size,a.path=t.path;break;case"line":a.dashTemplate=t.dashTemplate;break;case"text":a.text=t.text,a.fontName=t.fontName}return a}export{g as i,S as l}