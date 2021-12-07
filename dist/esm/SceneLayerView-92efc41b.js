import { D as l$1, af as t, A as r, e, d as d$1, i as i$3, c as s$1, dO as a$1, dP as s$2, p as p$2, aW as c$2 } from './messageBundle-f75b4090.js';
import { n } from './attributeUtils-dacaf44c.js';
import { y as y$1, I, v as j, V } from './opacityUtils-5e864561.js';
import { d as d$2 } from './HandleOwner-88326c19.js';
import { u as u$1 } from './LayerView-f319a853.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$2={setAttribute(){},rollback(){},commit(){}};function s(e,r){const s=r.attributes[e.objectIdField],i=e.sessions.get(s);if(i)return i;const a=l$1(r.attributes),u=new Set;if(null==s)return o$2;const c=e.attributeOverrides.createInteractiveEditSession(s),f=new Map,l=(t,e)=>{const n=f.get(t);if(null==n){const n=e.indexOf(s);return f.set(t,n),n}return n};let d=0;const b={setAttribute(t$1,o){if(0!==d)return;const s=e.fieldsIndex.get(t$1);if(t(s))return;const i=e.attributeStorageInfo.findIndex((t=>t.name===s.name));if(i<0)return;c.set(i,o);const a=e.attributeStorageInfo[i];let f=!1;u.add(t$1),e.forEachNode(((t,n)=>{const s=l(t,n);if(-1===s)return;const i=e.getAttributeData(t.index);if(i){const n=i[a.name];n&&(n[s]=o,e.setAttributeData(t.index,i,r),f=!0);}})),f&&e.clearMemCache();},rollback(){if(0===d){for(const t of u)this.setAttribute(t,a[t]);c.rollback(),d=1,e.sessions.delete(s);}},commit(){0===d&&(c.commit(),d=2,e.sessions.delete(s));}};return e.sessions.set(s,b),b}function i$2(t,n){const r$1=a(t,n);if(0===r$1.size)return;const o=new Map;for(let e=0;e<t.attributeStorageInfo.length;e++)o.set(t.attributeStorageInfo[e].name,e);let s=!1;r$1.forEach(((n,r$1)=>{const i=t.getAttributeData(r$1);let a=!1;n.forEach(((n,r$1)=>{const u=r(i)?i[r$1]:null,c=o.get(r$1);for(const{featureIndex:e,value:o,featureId:i}of n)u&&(u[e]=o,a=!0,s=!0),t.attributeOverrides.updateValue(i,c,o);})),a&&t.setAttributeData(r$1,i,null);})),s&&t.clearMemCache();}function a(t,e){const n$1=e.edits.updateFeatures;if(!n$1||0===n$1.length)return new d;const o=f(e),s=new d,i=new Map;for(let r=0;r<t.attributeStorageInfo.length;r++)i.set(t.attributeStorageInfo[r].name,r);const a=t.fieldsIndex,c=t.objectIdField,l=n$1.filter((t=>{const e=n(a,t.attributes,c);return o.has(e)}));return t.forEachNode(((e,n$1)=>{const o=new Set(n$1);for(const i of l){const f=n(a,i.attributes,c);if(!o.has(f))continue;const l=n$1.indexOf(f);for(const n in i.attributes){const r=t.fieldsIndex.normalizeFieldName(n),o=u(s,e.index,r),a=i.attributes[n];o.push({featureIndex:l,featureId:f,value:a});}}})),s}function u(t,e,n){const r=c$1(t,e),o=r.get(n);if(o)return o;const s=new Array;return r.set(n,s),s}function c$1(t,e){const n=t.get(e);if(n)return n;const r=new l;return t.set(e,r),r}function f(t){const e=new Set;if(!t.updatedFeatures)return e;for(const n of t.updatedFeatures)null!=n.objectId&&null==n.error&&e.add(n.objectId);return e}const l=Map,d=Map;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i$1(){return {requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:i,layer:{fieldsIndex:t},requiredFields:l}=this;return i.outFields?y$1(t,[...I(t,i.outFields),...l]):y$1(t,l)}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$1=s=>{let r=class extends s{constructor(){super(...arguments),this._numUpdating=0,this.asyncUpdateState=new Map;}get updating(){return this._numUpdating>0}autoUpdateAsync(t,s){return p$1((s=>this.updateAsync(t,s)),s)}async updateAsync(t,s){if(!this.startAsyncUpdate(t)){try{const e=await s();this._set(t,e);}catch(r){s$1.getLogger(this.declaredClass).warn(`Async update of "${t}" failed. Async update functions should not throw exceptions.`);}this.endAsyncUpdate(t)&&this.updateAsync(t,s);}}startAsyncUpdate(t){var s;const e=null!=(s=this.asyncUpdateState.get(t))?s:0;return 1&e?(this.asyncUpdateState.set(t,2|e),!0):(++this._numUpdating,this.asyncUpdateState.set(t,1|e),!1)}endAsyncUpdate(t){var s;--this._numUpdating;const e=-2&(null!=(s=this.asyncUpdateState.get(t))?s:0);return 2&e?(this.asyncUpdateState.set(t,-3&e),!0):(this.asyncUpdateState.set(t,e),!1)}};return e([d$1({readOnly:!0})],r.prototype,"updating",null),e([d$1()],r.prototype,"_numUpdating",void 0),r=e([i$3("esri.core.AsyncUpdate")],r),r};function p$1(t,s){const e=()=>{o&&!p&&t(a);},a=()=>{if(!o||p)return s();o.clear(),p=!0;const t=a$1(o,s);return p=!1,t},n=()=>{o&&(o.destroy(),o=null);};let o=new s$2(e),p=!1;return t(a),{remove:n}}let i=class extends(o$1(p$2)){};i=e([i$3("esri.core.AsyncUpdate")],i);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=s$1.getLogger("esri.views.3d.layers.support.SceneLayerViewRequiredFields");let c=class extends(o$1(d$2)){constructor(e){super(e);}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:r},rendererFields:s,labelingFields:t,viewFilterFields:o}=this;return y$1(e,[...c$2(r,[]),...c$2(s,[]),...c$2(t,[]),...c$2(o,[])])}initialize(){const e=this.layerView.layer;this.layer=e,this.handles.add([this.autoUpdateAsync("rendererFields",(()=>{const{fieldsIndex:e,renderer:r}=this.layer;return r?y((s=>r.collectRequiredFields(s,e))):null})),this.autoUpdateAsync("labelingFields",(()=>{const{layer:e}=this;return e.labelsVisible?y((r=>j(r,e))):null})),this.autoUpdateAsync("viewFilterFields",(()=>{const{layer:e,filter:r}=this.layerView;return y((s=>V(s,e,r)))}))]);}};async function y(e){const r=new Set;try{return await e(r),Array.from(r).sort()}catch(s){return p.error(s),null}}e([d$1()],c.prototype,"layerView",void 0),e([d$1()],c.prototype,"layer",void 0),e([d$1()],c.prototype,"requiredFields",null),e([d$1()],c.prototype,"rendererFields",void 0),e([d$1()],c.prototype,"labelingFields",void 0),e([d$1()],c.prototype,"viewFilterFields",void 0),c=e([i$3("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],c);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends u$1{constructor(){super(...arguments),this.layer=null,this.filter=null;}get availableFields(){return []}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return !1}highlight(e){throw new Error("Not implemented")}queryFeatures(e,r){throw new Error("Not implemented")}queryObjectIds(e,r){throw new Error("Not implemented")}queryFeatureCount(e,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,r){throw new Error("Not implemented")}}e([d$1()],o.prototype,"layer",void 0),e([d$1()],o.prototype,"availableFields",null),e([d$1()],o.prototype,"maximumNumberOfFeatures",null),e([d$1({readOnly:!0})],o.prototype,"maximumNumberOfFeaturesExceeded",null),e([d$1()],o.prototype,"filter",void 0);

export { i$1 as a, c, i$2 as i, o, s };
