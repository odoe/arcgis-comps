'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=new request.S,n$1=new WeakMap;function o(e){c(e)&&t.push(e);}function s(e){c(e)&&t.includes(e)&&t.remove(e);}function c(e){return e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function f(e,r){return Number.isFinite(e)&&Number.isFinite(r)?r<=0?e:f(r,e%r):0}let i=0,a=0;function l(){const e=Date.now();for(const o of t)if(o.refreshInterval){var r;e-(null!=(r=n$1.get(o))?r:0)+5>=6e4*o.refreshInterval&&(n$1.set(o,e),o.refresh(e));}}request.l$4((()=>{const e=Date.now();let r=0;for(const o of t)r=f(Math.round(6e4*o.refreshInterval),r),o.refreshInterval?n$1.get(o)||n$1.set(o,e):n$1.delete(o);if(r!==a){if(a=r,clearInterval(i),0===a)return void(i=0);i=setInterval(l,a);}}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(e){return e&&"object"==typeof e&&"refreshTimestamp"in e&&"refresh"in e}const n=p=>{let n=class extends p{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=request.z$1((()=>this.hasDataChanged())),this.when().then((()=>{o(this);}),(()=>{}));}destroy(){s(this);}get refreshParameters(){return {_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){request.g$5(this._debounceHasDataChanged()).then((r=>{r&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:r});}),(e=>{request.s$1.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e});}));}async hasDataChanged(){return !0}};return request.e([request.d({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],n.prototype,"refreshInterval",void 0),request.e([request.d({readOnly:!0})],n.prototype,"refreshTimestamp",void 0),request.e([request.d()],n.prototype,"refreshParameters",null),n=request.e([request.i("esri.layers.mixins.RefreshableLayer")],n),n};

exports.n = n;
exports.p = p;
