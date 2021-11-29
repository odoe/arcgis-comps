import { m, L } from './number-2da43364.js';
import { g as s$2, U as r, V as t, a as s$3, r as r$1, E, W as e } from './cast-e5ea2533.js';
import { h, l as l$1 } from './messages-1d31e380.js';
import { a as a$2 } from './assets-1ab0ccbe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$1=s$2.getLogger("esri.intl");function s$1(t,r$1,n={}){const{format:o={}}=n;return r(t,(t=>u(t,r$1,o)))}function u(t$1,e,n){let o,i;const s=t$1.indexOf(":");if(-1===s?o=t$1.trim():(o=t$1.slice(0,s).trim(),i=t$1.slice(s+1).trim()),!o)return "";const u=t(o,e);if(null==u)return "";const m=n[i]||n[o];return m?c$1(u,m):i?a$1(u,i):f(u)}function c$1(t,r){switch(r.type){case"date":return L(t,r.intlOptions);case"number":return m(t,r.intlOptions);default:return i$1.warn("missing format descriptor for key {key}"),f(t)}}function a$1(t,r){switch(r.toLowerCase()){case"dateformat":return L(t);case"numberformat":return m(t);default:return i$1.warn(`inline format is unsupported since 4.12: ${r}`),/^(dateformat|datestring)/i.test(r)?L(t):/^numberformat/i.test(r)?m(t):f(t)}}function f(t){switch(typeof t){case"string":return t;case"number":return m(t);case"boolean":return ""+t;default:return t instanceof Date?L(t):""}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s(e,n,r,s){const a=n.exec(r);if(!a)throw new s$3("esri-intl:invalid-bundle",`Bundle id "${r}" is not compatible with the pattern "${n}"`);const c=a[1]?`${a[1]}/`:"",l=a[2],h$1=h(s),u=`${c}${l}.json`,w=h$1?`${c}${l}_${h$1}.json`:u;let f;try{f=await i(e(w));}catch(d){if(w===u)throw new s$3("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:d});try{f=await i(e(u));}catch(d){throw new s$3("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:d})}}return f}async function i(t){if(r$1(l.fetchBundleAsset))return l.fetchBundleAsset(t);const n=await E(t,{responseType:"text"});return JSON.parse(n.data)}class a{constructor({base:e$1="",pattern:t,location:r=new URL(window.location.href)}){let o;o="string"==typeof r?e$1=>new URL(e$1,new URL(r,e.location)).href:r instanceof URL?e=>new URL(e,r).href:r,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=o,e$1=e$1?e$1.endsWith("/")?e$1:e$1+"/":"",this.matcher=new RegExp(`^${e$1}(?:(.*)/)?(.*)$`);}fetchMessageBundle(e,t){return s(this.getAssetUrl,this.matcher,e,t)}}function c(e){return new a(e)}const l={};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
l$1(c({pattern:"esri/",location:a$2}));

export { s$1 as s };
