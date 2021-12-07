import{S as e,bc as r,e as t,d as s,i as n,I as a,bd as i,c as h}from"./p-e58503d5.js";const o=new e,f=new WeakMap;function c(e){return e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function u(e,r){return Number.isFinite(e)&&Number.isFinite(r)?r<=0?e:u(r,e%r):0}let l=0,m=0;function d(){const e=Date.now();for(const t of o)if(t.refreshInterval){var r;e-(null!=(r=f.get(t))?r:0)+5>=6e4*t.refreshInterval&&(f.set(t,e),t.refresh(e))}}function p(e){return e&&"object"==typeof e&&"refreshTimestamp"in e&&"refresh"in e}r((()=>{const e=Date.now();let r=0;for(const t of o)r=u(Math.round(6e4*t.refreshInterval),r),t.refreshInterval?f.get(t)||f.set(t,e):f.delete(t);if(r!==m){if(m=r,clearInterval(l),0===m)return void(l=0);l=setInterval(d,m)}}));const b=e=>{let r=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=a((()=>this.hasDataChanged())),this.when().then((()=>{!function(e){c(e)&&o.push(e)}(this)}),(()=>{}))}destroy(){!function(e){c(e)&&o.includes(e)&&o.remove(e)}(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){i(this._debounceHasDataChanged()).then((r=>{r&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:r})}),(e=>{h.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}};return t([s({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],r.prototype,"refreshInterval",void 0),t([s({readOnly:!0})],r.prototype,"refreshTimestamp",void 0),t([s()],r.prototype,"refreshParameters",null),r=t([n("esri.layers.mixins.RefreshableLayer")],r),r};export{b as n,p}