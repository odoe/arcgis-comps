import{be as t,H as r,bf as e,e as i,i as s,bg as n,bh as o,p as a,bi as l,v as h,k as u,N as c,U as p,O as d,m as y,d as f,a5 as b}from"./p-9ae46e68.js";import{u as g,p as v}from"./p-fe01b82b.js";import{g as m,M as O,k as w,m as S}from"./p-566b0715.js";class N{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(t),this._values=new Map}clone(e){const i=new N,s=this._originStores[0];s&&s.forEach(((t,e)=>{i.set(e,r(t),0)}));for(let s=2;s<t;s++){const t=this._originStores[s];t&&t.forEach(((t,n)=>{e&&e.has(n)||i.set(n,r(t),s)}))}return i}get(t,r){const e=void 0===r?this._values:this._originStores[r];return e?e.get(t):void 0}keys(t){const r=null==t?this._values:this._originStores[t];return r?[...r.keys()]:[]}set(t,r,i=6){let s=this._originStores[i];if(s||(s=new Map,this._originStores[i]=s),s.set(t,r),!this._values.has(t)||e(this._propertyOriginMap.get(t))<=i){const e=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,i),e!==r}return!1}delete(t,r=6){const e=this._originStores[r];if(!e)return;const i=e.get(t);if(e.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===r){this._values.delete(t);for(let e=r-1;e>=0;e--){const r=this._originStores[e];if(r&&r.has(t)){this._values.set(t,r.get(t)),this._propertyOriginMap.set(t,e);break}}}return i}has(t,r){const e=void 0===r?this._values:this._originStores[r];return!!e&&e.has(t)}revert(t,r){for(;r>0&&!this.has(t,r);)--r;const e=this._originStores[r],i=e&&e.get(t),s=this._values.get(t);return this._values.set(t,i),this._propertyOriginMap.set(t,r),s!==i}originOf(t){return this._propertyOriginMap.get(t)||0}forEach(t){this._values.forEach(t)}}const j=t=>{let r=class extends t{constructor(...t){super(...t);const r=e(o(this)),i=r.metadatas,s=r.store,n=new N;r.store=n,s.keys().forEach((t=>{n.set(t,s.get(t),0)})),Object.keys(i).forEach((t=>{r.internalGet(t)&&n.set(t,r.internalGet(t),0)}))}read(t,r){g(this,t,r)}getAtOrigin(t,r){const e=x(this),i=l(r);if("string"==typeof t)return e.get(t,i);const s={};return t.forEach((t=>{s[t]=e.get(t,i)})),s}originOf(t){return n(this.originIdOf(t))}originIdOf(t){return x(this).originOf(t)}revert(t,r){const e=x(this),i=l(r),s=o(this);let n;n="string"==typeof t?"*"===t?e.keys(i):[t]:t,n.forEach((t=>{s.invalidate(t),e.revert(t,i),s.commit(t)}))}};return r=i([s("esri.core.ReadOnlyMultiOriginJSONSupport")],r),r};function x(t){return o(t).store}let M=class extends(j(a)){};M=i([s("esri.core.ReadOnlyMultiOriginJSONSupport")],M);const A=r=>{let e=class extends r{constructor(...t){super(...t)}clear(t,r="user"){return I(this).delete(t,l(r))}write(t={},r){return v(this,t=t||{},r),t}setAtOrigin(t,r,e){o(this).setAtOrigin(t,r,l(e))}removeOrigin(t){const r=I(this),e=l(t),i=r.keys(e);for(const t of i)r.originOf(t)===e&&r.set(t,r.get(t,e),6)}updateOrigin(r,e){const i=I(this),s=l(e),n=this.get(r);for(let e=s+1;e<t;++e)i.delete(r,e);i.set(r,n,s)}toJSON(t){return this.write({},t)}};return e=i([s("esri.core.WriteableMultiOriginJSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e};function I(t){return o(t).store}const J=t=>{let r=class extends(A(j(t))){constructor(...t){super(...t)}};return r=i([s("esri.core.MultiOriginJSONSupport")],r),r};let D=class extends(J(a)){};D=i([s("esri.core.MultiOriginJSONSupport")],D);let L=0;const U=h.getLogger("esri.layers.Layer");let B=class extends(u.EventedMixin(m(S))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new O(-180,-90,180,90,w.WGS84),this.id=Date.now().toString(16)+"-layer-"+L++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=w.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const r="string"==typeof t?{url:t}:t,e=await import("./p-9f1fd647.js");try{return await e.fromUrl(r)}catch(t){throw U.error("#fromArcGISServerUrl({ url: '"+r.url+"'})","Failed to create layer from arcgis server url",t),t}}static async fromPortalItem(t){const r="portalItem"in t?t:{portalItem:t},e=await import("./p-1140c5db.js");try{return await e.fromItem(r)}catch(t){const e=r&&r.portalItem;throw U.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+(e&&e.portal&&e.portal.url||b.portalUrl)+"', id: '"+(e&&e.id||"unset")+"')",t),t}}initialize(){this.when().catch((t=>{var r,e;c(t)||h.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(r=this.title)?r:"no title"}', id: '${null!=(e=this.id)?e:"no id"}')`,{error:t})}))}destroy(){if(this.parent){const t=this,r=this.parent;"layers"in r&&r.layers.includes(t)?r.layers.remove(t):"tables"in r&&r.tables.includes(t)?r.tables.remove(t):"baseLayers"in r&&r.baseLayers.includes(t)?r.baseLayers.remove(t):"baseLayers"in r&&r.referenceLayers.includes(t)&&r.referenceLayers.remove(t)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const t=this.url;return t?p(t):null}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await d(t,{query:{f:"json"},responseType:"json"})).data;throw new y("layer:no-attribution-data","Layer does not have attribution data")}};i([f({type:String})],B.prototype,"attributionDataUrl",void 0),i([f({type:O})],B.prototype,"fullExtent",void 0),i([f({readOnly:!0})],B.prototype,"hasAttributionData",null),i([f({type:String})],B.prototype,"id",void 0),i([f({type:Boolean,nonNullable:!0})],B.prototype,"legendEnabled",void 0),i([f({type:["show","hide","hide-children"]})],B.prototype,"listMode",void 0),i([f({type:Number,range:{min:0,max:1},nonNullable:!0})],B.prototype,"opacity",void 0),i([f()],B.prototype,"parent",void 0),i([f({readOnly:!0})],B.prototype,"parsedUrl",null),i([f({type:Boolean})],B.prototype,"popupEnabled",void 0),i([f({type:Boolean})],B.prototype,"attributionVisible",void 0),i([f({type:w})],B.prototype,"spatialReference",void 0),i([f({type:String})],B.prototype,"title",void 0),i([f({type:String,readOnly:!0,json:{read:!1}})],B.prototype,"type",void 0),i([f()],B.prototype,"url",void 0),i([f({type:Boolean,nonNullable:!0})],B.prototype,"visible",void 0),B=i([s("esri.layers.Layer")],B);const E=B;export{D as O,E as b,J as l}