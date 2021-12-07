'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(request.r$6),this._values=new Map;}clone(s){const i=new r,o=this._originStores[0];o&&o.forEach(((s,e)=>{i.set(e,request.l$1(s),0);}));for(let r=2;r<request.r$6;r++){const e=this._originStores[r];e&&e.forEach(((e,o)=>{s&&s.has(o)||i.set(o,request.l$1(e),r);}));}return i}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,e,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||request.q(this._propertyOriginMap.get(t))<=r){const s=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),s!==e}return !1}delete(t,s=6){const e=this._originStores[s];if(!e)return;const r=e.get(t);if(e.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return r}has(t,s){const e=void 0===s?this._values:this._originStores[s];return !!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e&&e.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||0}forEach(t){this._values.forEach(t);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=t=>{let a=class extends t{constructor(...r$1){super(...r$1);const t=request.q(request.e$3(this)),o=t.metadatas,i=t.store,n=new r;t.store=n,i.keys().forEach((r=>{n.set(r,i.get(r),0);})),Object.keys(o).forEach((r=>{t.internalGet(r)&&n.set(r,t.internalGet(r),0);}));}read(r,t){request.u$6(this,r,t);}getAtOrigin(r,t){const s=u$1(this),e=request.t$4(t);if("string"==typeof r)return s.get(r,e);const o={};return r.forEach((r=>{o[r]=s.get(r,e);})),o}originOf(r){return request.n$8(this.originIdOf(r))}originIdOf(r){return u$1(this).originOf(r)}revert(r,t){const s=u$1(this),e=request.t$4(t),o=request.e$3(this);let n;n="string"==typeof r?"*"===r?s.keys(e):[r]:r,n.forEach((r=>{o.invalidate(r),s.revert(r,e),o.commit(r);}));}};return a=request.e([request.i("esri.core.ReadOnlyMultiOriginJSONSupport")],a),a};function u$1(r){return request.e$3(r).store}let f=class extends(a(request.p)){};f=request.e([request.i("esri.core.ReadOnlyMultiOriginJSONSupport")],f);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=t=>{let s=class extends t{constructor(...r){super(...r);}clear(r,t="user"){return u(this).delete(r,request.t$4(t))}write(r={},t){return request.p$2(this,r=r||{},t),r}setAtOrigin(r,t,s){request.e$3(this).setAtOrigin(r,t,request.t$4(s));}removeOrigin(r){const t=u(this),s=request.t$4(r),o=t.keys(s);for(const e of o)t.originOf(e)===s&&t.set(e,t.get(e,s),6);}updateOrigin(r,t){const s=u(this),i=request.t$4(t),c=this.get(r);for(let e=i+1;e<request.r$6;++e)s.delete(r,e);s.set(r,c,i);}toJSON(r){return this.write({},r)}};return s=request.e([request.i("esri.core.WriteableMultiOriginJSONSupport")],s),s.prototype.toJSON.isDefaultToJSON=!0,s};function u(r){return request.e$3(r).store}const l=t=>{let e=class extends(p(a(t))){constructor(...r){super(...r);}};return e=request.e([request.i("esri.core.MultiOriginJSONSupport")],e),e};exports.O=class extends(l(request.p)){};exports.O=request.e([request.i("esri.core.MultiOriginJSONSupport")],exports.O);

exports.l = l;
