'use strict';

const request = require('./messageBundle-8be88d04.js');
const attributeUtils = require('./attributeUtils-1a80ac17.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const HandleOwner = require('./HandleOwner-9c4c158c.js');
const LayerView = require('./LayerView-2bc30c9f.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$2={setAttribute(){},rollback(){},commit(){}};function s(e,r){const s=r.attributes[e.objectIdField],i=e.sessions.get(s);if(i)return i;const a=request.l$1(r.attributes),u=new Set;if(null==s)return o$2;const c=e.attributeOverrides.createInteractiveEditSession(s),f=new Map,l=(t,e)=>{const n=f.get(t);if(null==n){const n=e.indexOf(s);return f.set(t,n),n}return n};let d=0;const b={setAttribute(t,o){if(0!==d)return;const s=e.fieldsIndex.get(t);if(request.t$1(s))return;const i=e.attributeStorageInfo.findIndex((t=>t.name===s.name));if(i<0)return;c.set(i,o);const a=e.attributeStorageInfo[i];let f=!1;u.add(t),e.forEachNode(((t,n)=>{const s=l(t,n);if(-1===s)return;const i=e.getAttributeData(t.index);if(i){const n=i[a.name];n&&(n[s]=o,e.setAttributeData(t.index,i,r),f=!0);}})),f&&e.clearMemCache();},rollback(){if(0===d){for(const t of u)this.setAttribute(t,a[t]);c.rollback(),d=1,e.sessions.delete(s);}},commit(){0===d&&(c.commit(),d=2,e.sessions.delete(s));}};return e.sessions.set(s,b),b}function i$2(t,n){const r=a(t,n);if(0===r.size)return;const o=new Map;for(let e=0;e<t.attributeStorageInfo.length;e++)o.set(t.attributeStorageInfo[e].name,e);let s=!1;r.forEach(((n,r)=>{const i=t.getAttributeData(r);let a=!1;n.forEach(((n,r)=>{const u=request.r(i)?i[r]:null,c=o.get(r);for(const{featureIndex:e,value:o,featureId:i}of n)u&&(u[e]=o,a=!0,s=!0),t.attributeOverrides.updateValue(i,c,o);})),a&&t.setAttributeData(r,i,null);})),s&&t.clearMemCache();}function a(t,e){const n=e.edits.updateFeatures;if(!n||0===n.length)return new d;const o=f(e),s=new d,i=new Map;for(let r=0;r<t.attributeStorageInfo.length;r++)i.set(t.attributeStorageInfo[r].name,r);const a=t.fieldsIndex,c=t.objectIdField,l=n.filter((t=>{const e=attributeUtils.n(a,t.attributes,c);return o.has(e)}));return t.forEachNode(((e,n)=>{const o=new Set(n);for(const i of l){const f=attributeUtils.n(a,i.attributes,c);if(!o.has(f))continue;const l=n.indexOf(f);for(const n in i.attributes){const r=t.fieldsIndex.normalizeFieldName(n),o=u(s,e.index,r),a=i.attributes[n];o.push({featureIndex:l,featureId:f,value:a});}}})),s}function u(t,e,n){const r=c(t,e),o=r.get(n);if(o)return o;const s=new Array;return r.set(n,s),s}function c(t,e){const n=t.get(e);if(n)return n;const r=new l;return t.set(e,r),r}function f(t){const e=new Set;if(!t.updatedFeatures)return e;for(const n of t.updatedFeatures)null!=n.objectId&&null==n.error&&e.add(n.objectId);return e}const l=Map,d=Map;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i$1(){return {requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:i,layer:{fieldsIndex:t},requiredFields:l}=this;return i.outFields?opacityUtils.y(t,[...opacityUtils.I(t,i.outFields),...l]):opacityUtils.y(t,l)}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$1=s=>{let r=class extends s{constructor(){super(...arguments),this._numUpdating=0,this.asyncUpdateState=new Map;}get updating(){return this._numUpdating>0}autoUpdateAsync(t,s){return p$1((s=>this.updateAsync(t,s)),s)}async updateAsync(t,s){if(!this.startAsyncUpdate(t)){try{const e=await s();this._set(t,e);}catch(r){request.s$1.getLogger(this.declaredClass).warn(`Async update of "${t}" failed. Async update functions should not throw exceptions.`);}this.endAsyncUpdate(t)&&this.updateAsync(t,s);}}startAsyncUpdate(t){var s;const e=null!=(s=this.asyncUpdateState.get(t))?s:0;return 1&e?(this.asyncUpdateState.set(t,2|e),!0):(++this._numUpdating,this.asyncUpdateState.set(t,1|e),!1)}endAsyncUpdate(t){var s;--this._numUpdating;const e=-2&(null!=(s=this.asyncUpdateState.get(t))?s:0);return 2&e?(this.asyncUpdateState.set(t,-3&e),!0):(this.asyncUpdateState.set(t,e),!1)}};return request.e([request.d({readOnly:!0})],r.prototype,"updating",null),request.e([request.d()],r.prototype,"_numUpdating",void 0),r=request.e([request.i("esri.core.AsyncUpdate")],r),r};function p$1(t,s){const e=()=>{o&&!p&&t(a);},a=()=>{if(!o||p)return s();o.clear(),p=!0;const t=request.a$7(o,s);return p=!1,t},n=()=>{o&&(o.destroy(),o=null);};let o=new request.s$15(e),p=!1;return t(a),{remove:n}}let i=class extends(o$1(request.p)){};i=request.e([request.i("esri.core.AsyncUpdate")],i);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=request.s$1.getLogger("esri.views.3d.layers.support.SceneLayerViewRequiredFields");exports.c=class extends(o$1(HandleOwner.d)){constructor(e){super(e);}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:r},rendererFields:s,labelingFields:t,viewFilterFields:o}=this;return opacityUtils.y(e,[...request.c$2(r,[]),...request.c$2(s,[]),...request.c$2(t,[]),...request.c$2(o,[])])}initialize(){const e=this.layerView.layer;this.layer=e,this.handles.add([this.autoUpdateAsync("rendererFields",(()=>{const{fieldsIndex:e,renderer:r}=this.layer;return r?y((s=>r.collectRequiredFields(s,e))):null})),this.autoUpdateAsync("labelingFields",(()=>{const{layer:e}=this;return e.labelsVisible?y((r=>opacityUtils.j(r,e))):null})),this.autoUpdateAsync("viewFilterFields",(()=>{const{layer:e,filter:r}=this.layerView;return y((s=>opacityUtils.V(s,e,r)))}))]);}};async function y(e){const r=new Set;try{return await e(r),Array.from(r).sort()}catch(s){return p.error(s),null}}request.e([request.d()],exports.c.prototype,"layerView",void 0),request.e([request.d()],exports.c.prototype,"layer",void 0),request.e([request.d()],exports.c.prototype,"requiredFields",null),request.e([request.d()],exports.c.prototype,"rendererFields",void 0),request.e([request.d()],exports.c.prototype,"labelingFields",void 0),request.e([request.d()],exports.c.prototype,"viewFilterFields",void 0),exports.c=request.e([request.i("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],exports.c);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends LayerView.u{constructor(){super(...arguments),this.layer=null,this.filter=null;}get availableFields(){return []}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return !1}highlight(e){throw new Error("Not implemented")}queryFeatures(e,r){throw new Error("Not implemented")}queryObjectIds(e,r){throw new Error("Not implemented")}queryFeatureCount(e,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,r){throw new Error("Not implemented")}}request.e([request.d()],o.prototype,"layer",void 0),request.e([request.d()],o.prototype,"availableFields",null),request.e([request.d()],o.prototype,"maximumNumberOfFeatures",null),request.e([request.d({readOnly:!0})],o.prototype,"maximumNumberOfFeaturesExceeded",null),request.e([request.d()],o.prototype,"filter",void 0);

exports.i = i$2;
exports.i$1 = i$1;
exports.o = o;
exports.s = s;
