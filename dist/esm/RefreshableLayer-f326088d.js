import { E as S, bl as l$1, e, d, i as i$1, bm as z, aQ as g, v as s$1 } from './messageBundle-8a146a9b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=new S,n$1=new WeakMap;function o(e){c(e)&&t.push(e);}function s(e){c(e)&&t.includes(e)&&t.remove(e);}function c(e){return e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function f(e,r){return Number.isFinite(e)&&Number.isFinite(r)?r<=0?e:f(r,e%r):0}let i=0,a=0;function l(){const e=Date.now();for(const o of t)if(o.refreshInterval){var r;e-(null!=(r=n$1.get(o))?r:0)+5>=6e4*o.refreshInterval&&(n$1.set(o,e),o.refresh(e));}}l$1((()=>{const e=Date.now();let r=0;for(const o of t)r=f(Math.round(6e4*o.refreshInterval),r),o.refreshInterval?n$1.get(o)||n$1.set(o,e):n$1.delete(o);if(r!==a){if(a=r,clearInterval(i),0===a)return void(i=0);i=setInterval(l,a);}}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=p=>{let n=class extends p{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=z((()=>this.hasDataChanged())),this.when().then((()=>{o(this);}),(()=>{}));}destroy(){s(this);}get refreshParameters(){return {_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){g(this._debounceHasDataChanged()).then((r=>{r&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:r});}),(e=>{s$1.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e});}));}async hasDataChanged(){return !0}};return e([d({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],n.prototype,"refreshInterval",void 0),e([d({readOnly:!0})],n.prototype,"refreshTimestamp",void 0),e([d()],n.prototype,"refreshParameters",null),n=e([i$1("esri.layers.mixins.RefreshableLayer")],n),n};

export { n };
