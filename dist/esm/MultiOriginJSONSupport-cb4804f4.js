import { b2 as r$1, D as l$1, b3 as q, e, i, b4 as u$2, b5 as n, b6 as e$1, p as p$1, b7 as t, b8 as p$2 } from './messageBundle-f75b4090.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(r$1),this._values=new Map;}clone(s){const i=new r,o=this._originStores[0];o&&o.forEach(((s,e)=>{i.set(e,l$1(s),0);}));for(let r=2;r<r$1;r++){const e=this._originStores[r];e&&e.forEach(((e,o)=>{s&&s.has(o)||i.set(o,l$1(e),r);}));}return i}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,e,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||q(this._propertyOriginMap.get(t))<=r){const s=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),s!==e}return !1}delete(t,s=6){const e=this._originStores[s];if(!e)return;const r=e.get(t);if(e.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return r}has(t,s){const e=void 0===s?this._values:this._originStores[s];return !!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e&&e.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||0}forEach(t){this._values.forEach(t);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=t$1=>{let a=class extends t$1{constructor(...r$1){super(...r$1);const t=q(e$1(this)),o=t.metadatas,i=t.store,n=new r;t.store=n,i.keys().forEach((r=>{n.set(r,i.get(r),0);})),Object.keys(o).forEach((r=>{t.internalGet(r)&&n.set(r,t.internalGet(r),0);}));}read(r,t){u$2(this,r,t);}getAtOrigin(r,t$1){const s=u$1(this),e=t(t$1);if("string"==typeof r)return s.get(r,e);const o={};return r.forEach((r=>{o[r]=s.get(r,e);})),o}originOf(r){return n(this.originIdOf(r))}originIdOf(r){return u$1(this).originOf(r)}revert(r,t$1){const s=u$1(this),e=t(t$1),o=e$1(this);let n;n="string"==typeof r?"*"===r?s.keys(e):[r]:r,n.forEach((r=>{o.invalidate(r),s.revert(r,e),o.commit(r);}));}};return a=e([i("esri.core.ReadOnlyMultiOriginJSONSupport")],a),a};function u$1(r){return e$1(r).store}let f=class extends(a(p$1)){};f=e([i("esri.core.ReadOnlyMultiOriginJSONSupport")],f);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=t$1=>{let s=class extends t$1{constructor(...r){super(...r);}clear(r,t$1="user"){return u(this).delete(r,t(t$1))}write(r={},t){return p$2(this,r=r||{},t),r}setAtOrigin(r,t$1,s){e$1(this).setAtOrigin(r,t$1,t(s));}removeOrigin(r){const t$1=u(this),s=t(r),o=t$1.keys(s);for(const e of o)t$1.originOf(e)===s&&t$1.set(e,t$1.get(e,s),6);}updateOrigin(r,t$1){const s=u(this),i=t(t$1),c=this.get(r);for(let e=i+1;e<r$1;++e)s.delete(r,e);s.set(r,c,i);}toJSON(r){return this.write({},r)}};return s=e([i("esri.core.WriteableMultiOriginJSONSupport")],s),s.prototype.toJSON.isDefaultToJSON=!0,s};function u(r){return e$1(r).store}const l=t=>{let e$1=class extends(p(a(t))){constructor(...r){super(...r);}};return e$1=e([i("esri.core.MultiOriginJSONSupport")],e$1),e$1};let O=class extends(l(p$1)){};O=e([i("esri.core.MultiOriginJSONSupport")],O);

export { O, l };
