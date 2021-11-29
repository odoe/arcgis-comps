import { e as e$1, d as d$1, i as i$1, h, ae as p$1, N as l$2, gx as m, bp as B, g2 as g, cC as u$2, G as w, by as e$2, gy as l$3, r, u as s$2, gz as a$1, gA as y, gB as g$1, a2 as i$2, gw as $$1, gC as y$1, gD as I, gE as r$1, fu as b, dd as o, d$ as a$2, dk as T, gF as j, gG as A, gH as V, gI as N, gJ as _, gK as g$2, gL as F, t, s as s$3, gM as ce, z, bq as r$2, bz as E, bC as e$3, S, cu as g$3, M as M$1, fW as E$1, gN as M$2, a as s$5, l as l$5, K as d$3, b1 as o$1, g3 as g$4, fY as L } from './index.js';
import { s as s$4 } from './clickToleranceUtils.js';
import { N as N$1 } from './definitions.js';
import { l as l$4, u as u$3 } from './LayerView.js';
import { e as e$4, a as c$3, b as d$4, f, m as m$1, i as c$4, M as M$3 } from './schemaUtils.js';
import { d as d$2, t as t$1 } from './popupUtils.js';
import { i as i$3 } from './RefreshableLayerView.js';
import { a as a$3 } from './drapedUtils.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let s$1=p=class extends h{constructor(){super(...arguments),this.isAggregate=!0;}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;const r=this.sourceLayer&&this.sourceLayer.featureReduction;return r&&"popupTemplate"in r&&r.popupEnabled?r.popupTemplate:null}getObjectId(){return this.objectId}clone(){return new p({objectId:this.objectId,...this.cloneProperties()})}};e$1([d$1({type:Boolean})],s$1.prototype,"isAggregate",void 0),e$1([d$1({type:Number,json:{read:!0}})],s$1.prototype,"objectId",void 0),s$1=p=e$1([i$1("esri.AggregateGraphic")],s$1);const c$2=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function e(e,a){if(!e)return null;switch(e.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return new((await import('./SymbolTileRenderer.js')).default)(a);case"heatmap":return new((await import('./HeatmapTileRenderer.js')).default)(a)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(e){return e.some((e=>e.globalId))}function n(e){return e.filter((e=>!e.error)).map((e=>{var s;return null!=(s=e.objectId)?s:e.globalId}))}function a(e,s){const r=new Set(e);for(const t of s.values())r.add(t);return r}function i(e,s){const r=new Set(e);for(const t of s.values())r.delete(t);return r}let u$1=class extends p$1{constructor(e){super(),this._hasGlobalIds=!1,this._queueProcessor=new l$2({concurrency:1,process:e.process});}destroy(){this._queueProcessor.clear();}get updating(){return this._queueProcessor.length>0}push(e){const s=this._queueProcessor,r=s.last();switch(e.type){case"update":case"refresh":if((null==r?void 0:r.type)===e.type)return;s.push(e).finally((()=>this.notifyChange("updating")));break;case"edit":{const t="processed-edit"===(null==r?void 0:r.type)?r:null;t&&s.popLast();const o=this._mergeEdits(t,e);for(const e of o)s.push(e).finally((()=>this.notifyChange("updating")));break}}this.notifyChange("updating");}_mergeEdits(e,s){var r,t;const{addedFeatures:o,deletedFeatures:u,updatedFeatures:c}=s.edits;if(this._hasGlobalIds=this._hasGlobalIds||d(o)||d(c)||d(u),this._hasGlobalIds){return [e,{type:"processed-edit",edits:{addOrModified:[...o,...c],removed:u}}]}const p=new Set(n(null!=(r=null==e?void 0:e.edits.addOrModified)?r:[])),l=new Set(n(null!=(t=null==e?void 0:e.edits.removed)?t:[])),f=new Set([...n(o),...n(c)]),h=new Set(n(u));return [{type:"processed-edit",edits:{addOrModified:Array.from(a(i(p,h),f)).map((e=>({objectId:e}))),removed:Array.from(a(i(l,f),h)).map((e=>({objectId:e})))}}]}};e$1([d$1({readOnly:!0})],u$1.prototype,"updating",null),u$1=e$1([i$1("esri.views.2d.layers.support.FeatureCommandQueue")],u$1);const c$1=u$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(t){return Array.isArray(t)}let l$1=class extends m{constructor(t){super(t),this._startupResolver=B(),this.isReady=!1;}initialize(){this._controller=new AbortController,this.addResolvingPromise(this._startWorker(this._controller.signal));}destroy(){this._controller.abort(),this._connection&&this._connection.close();}set tileRenderer(t){this.client.tileRenderer=t;}get closed(){return this._connection.closed}async startup(t,e,r,s){await this.when();const o=this._controller.signal,i=c(r.source)?{transferList:r.source,signal:o}:void 0,n={service:r,config:e,tileInfo:t.tileInfo.toJSON(),tiles:s};await this._connection.invoke("startup",n,i),this._startupResolver.resolve(),this._set("isReady",!0);}async updateTiles(t){return await this._startupResolver.promise,g(this._connection.invoke("updateTiles",t))}async update(t){const e={config:t};return await this._startupResolver.promise,this._connection.invoke("update",e)}async applyUpdate(t){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",t)}async setHighlight(t){return await this._startupResolver.promise,g(this._connection.invoke("controller.setHighlight",t))}async refresh(){return await this._startupResolver.promise,g(this._connection.invoke("controller.refresh"))}async querySummaryStatistics(t,e,r){return await this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:t.toJSON(),params:e},r)}async queryUniqueValues(t,e,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryUniqueValues",{query:t.toJSON(),params:e},r)}async queryClassBreaks(t,e,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryClassBreaks",{query:t.toJSON(),params:e},r)}async queryFeatures(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",t.toJSON(),e)}async queryObjectIds(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",t.toJSON(),e)}async queryFeatureCount(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",t.toJSON(),e)}async queryExtent(t,e){return this._connection.invoke("controller.queryExtent",t.toJSON(),e)}async queryLatestObservations(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",t.toJSON(),e)}async queryStatistics(t){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",t)}async getObjectId(t){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",t)}async getDisplayId(t){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",t)}async getFeature(t){return await this._startupResolver.promise,this._connection.invoke("controller.getFeature",t)}async getAggregate(t){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregate",t)}async getAggregates(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregates")}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(t){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",t)}async onEdits(t){return await this._startupResolver.promise,g(this._connection.invoke("controller.onEdits",t))}async enableEvent(t,e){return await this._startupResolver.promise,g(this._connection.invoke("controller.enableEvent",{name:t,value:e}))}async _startWorker(t){try{this._connection=await u$2("Pipeline",{client:this.client,strategy:"dedicated",signal:t});}catch(e){w(e);}}};e$1([d$1()],l$1.prototype,"isReady",void 0),e$1([d$1()],l$1.prototype,"client",void 0),e$1([d$1()],l$1.prototype,"tileRenderer",null),l$1=e$1([i$1("esri.views.2d.layers.support.FeatureLayerProxy")],l$1);const u=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=1e-6;class s{constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer;}destroy(){}clear(){this._tiles.forEach((e=>this._releaseTile(e)));}tileKeys(){const e=[];return this._tiles.forEach(((i,t)=>e.push(t))),e}update(e){const l=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:s,lodInfo:r}=l,{level:a}=r,o=[],d=[],h=new Set,n=new Set;for(const{row:i,colFrom:c,colTo:f}of s)for(let e=c;e<=f;e++){const l=e$2.getId(a,i,r.normalizeCol(e),r.getWorldForColumn(e)),s=this._getOrAcquireTile(o,l);h.add(l),s.isReady?s.visible=!0:n.add(s.key);}n.forEach((e=>this._addPlaceholders(h,e))),this._tiles.forEach((e=>{h.has(e.key.id)||(d.push(e.key.id),this._releaseTile(e));})),l$3.pool.release(l);return {hasMissingTiles:n.size>0,added:o,removed:d}}_getOrAcquireTile(e,i){if(!this._tiles.has(i)){const l=this.acquireTile(new e$2(i));e.push(i),this._tiles.set(i,l),l.visible=!1;}return this._tiles.get(i)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e);}_addPlaceholders(e,i){const t=this._addPlaceholderChildren(e,i);if(!(Math.abs(1-t)<l)){if(!this._addPlaceholderParent(e,i)){this._getTile(i.id).visible=!0;}}}_addPlaceholderChildren(e,i){let t=0;return this._tiles.forEach((l=>{t+=this._addPlaceholderChild(e,l,i);})),t}_addPlaceholderChild(e,i,t){if(i.key.level<=t.level||!i.hasData||!t.contains(i.key))return 0;i.visible=!0,e.add(i.key.id);return 1/(1<<2*(i.key.level-t.level))}_addPlaceholderParent(i,t){let l=t.getParentKey(),s=0,r$1=null;for(;r(l);){if(i.has(l.id))return !0;const e=this._getTile(l.id);if(null!=e&&e.isReady)return e.visible=!0,i.add(e.key.id),!0;null!=e&&e.hasData&&e.patchCount>s&&(s=e.patchCount,r$1=e),l=l.getParentKey();}return !!r$1&&(r$1.visible=!0,i.add(r$1.key.id),!0)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const P=s$2.getLogger("esri.views.layers.FeatureLayerView"),O=i=>{let O=class extends i{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null;}initialize(){i$2(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","featureEffect","layer.timeInfo","layer.floorInfo","timeExtent"],(()=>this._handleRequiredFieldsChange()),!0),$$1(this,"view.floors","change",(()=>this._handleRequiredFieldsChange())),$$1(this,"layer.sublayer","change",(()=>this._handleRequiredFieldsChange()));}get availableFields(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return "outFields"in e&&e.outFields?y$1(t,[...I(t,e.outFields),...r]):y$1(t,r)}set effect(e){r$1(P,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect=e;}get effect(){return r$1(P,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){void 0!==e?this._override("featureEffect",e):this._clearOverride("featureEffect");}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){P.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported");}get maximumNumberOfFeaturesExceeded(){return !1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=r(this.filter)?this.filter.createQuery(e):new b(e);if("feature"===this.layer.type){const e=o(this);r(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e);}return r(this.timeExtent)&&(t.timeExtent=r(t.timeExtent)?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return a$2()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null);}));}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r$1,objectIdField:i}}=this,o="renderer"in t&&t.renderer,l="orderBy"in t&&t.orderBy,n=t.featureReduction,u=new Set,p=await T([o?o.collectRequiredFields(u,r$1):null,j(u,t),e?A(u,t):null,r(this.filter)?V(u,t,this.filter):null,r(this.featureEffect)?V(u,t,this.featureEffect.filter):null,n?N(u,t,n):null,l?_(u,t,l):null]);if(t.timeInfo&&this.timeExtent&&g$2(u,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&t.floorInfo&&g$2(u,t.fieldsIndex,[t.floorInfo.floorField]),"subtype-group"===t.type){F(u,r$1,t.subtypeField);const e=t.sublayers.map((e=>{var t;return Promise.all([null==(t=e.renderer)?void 0:t.collectRequiredFields(u,r$1),j(u,e)])}));await T(e);}for(const s of p)s.error&&P.error(s.error);F(u,r$1,i),e&&"displayField"in t&&t.displayField&&F(u,r$1,t.displayField);const f=Array.from(u).sort();this._set("requiredFields",f);}validateFetchPopupFeatures(e){if(t(e))return null;for(const t of e.clientGraphics){const i=t.layer;if("popupEnabled"in i&&!i.popupEnabled)return new s$3("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i});if("popupTemplate"in i){if(!d$2(i,e))return new s$3("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i})}}}async fetchClientPopupFeatures(e){const t=r(e)?e.clientGraphics:null;if(!t||0===t.length)return Promise.resolve([]);const r$1=[],i=[],o=await this.createPopupQuery(e);for(const a of t){const{layer:t}=a;if(!("popupEnabled"in t))continue;const l=I(this.layer.fieldsIndex,o.outFields),n=d$2(t,e);if(!r(n))continue;const u=await this._loadArcadeModules(n);u&&u.arcadeUtils.hasGeometryOperations(n)||!ce(l,a)?i.push(a):r$1.push(a);}return "stream"===this.layer.type||0===i.length?Promise.resolve(r$1):(o.objectIds=i.map((e=>e.attributes[this.layer.objectIdField])),this.layer.queryFeatures(o).then((e=>r$1.concat(e.features))).catch((()=>i)))}async createPopupQuery(e){const t=this.layer.createQuery(),r$1=new Set;let i=!1;const o$1=r(e)&&e.clientGraphics?e.clientGraphics.map((e=>e.layer)):[this.layer];for(const a of o$1){if(!("popupEnabled"in a))continue;const t=d$2(a,e);if(!r(t))continue;const o=await this._loadArcadeModules(t),l=o&&o.arcadeUtils.hasGeometryOperations(t);i=!("point"!==this.layer.geometryType&&!l);const n=await t$1(this.layer,t);for(const e of n)r$1.add(e);}if(t.returnGeometry=i,t.returnZ=i,t.returnM=i,t.outFields=Array.from(r$1),t.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const e=o(this);r(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e);}return t}canResume(){return !!super.canResume()&&(!r(this.timeExtent)||!this.timeExtent.isEmpty)}};return e$1([d$1()],O.prototype,"_updatingRequiredFieldsPromise",void 0),e$1([d$1({readOnly:!0})],O.prototype,"availableFields",null),e$1([d$1()],O.prototype,"effect",null),e$1([d$1({type:a$1})],O.prototype,"featureEffect",null),e$1([d$1({type:y})],O.prototype,"filter",void 0),e$1([d$1(g$1)],O.prototype,"timeExtent",void 0),e$1([d$1()],O.prototype,"layer",void 0),e$1([d$1({type:Number})],O.prototype,"maximumNumberOfFeatures",null),e$1([d$1({readOnly:!0,type:Boolean})],O.prototype,"maximumNumberOfFeaturesExceeded",null),e$1([d$1({readOnly:!0})],O.prototype,"requiredFields",void 0),e$1([d$1()],O.prototype,"suspended",void 0),e$1([d$1()],O.prototype,"view",void 0),O=e$1([i$1("esri.views.layers.FeatureLayerView")],O),O};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const $=2147483648,M=1,G=e=>(e&$)>>>31===M;function D(e){return e&&"openPorts"in e}const K=s$2.getLogger("esri.views.2d.layers.FeatureLayerView2D");let W=class extends(O(i$3(l$4(u$3)))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._commandsQueue=new c$1({process:e=>{switch(e.type){case"processed-edit":return this._doEdit(e);case"refresh":return this._doRefresh();case"update":return this._doUpdate()}}}),this._visibilityOverrides=new Set,this._highlightIds=new Map,this._lastPixelBuffer=0,this._updateHighlight=z((async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys())))),this._uploadsLocked=!1,this._needsClusterSizeUpdate=!1,this.effectLists={included:new r$2,excluded:new r$2};}destroy(){var e,t;E(this._updateClusterSizeTask,(e=>e.remove())),null==(e=this._proxy)||e.destroy(),null==(t=this.tileRenderer)||t.destroy(),this._commandsQueue.destroy();}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",(e=>{this._set("_aggregateValueRanges",e.valueRanges);})),i$2(this,"featureEffect",(e=>{var t,i;this.effectLists.included.effect=e$3(null==(t=e$3(e))?void 0:t.includedEffect),this.effectLists.excluded.effect=e$3(null==(i=e$3(e))?void 0:i.excludedEffect);}))]);}async _initProxy(){if("isTable"in this.layer&&this.layer.isTable)throw new s$3("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});this._proxy&&this._proxy.destroy();const e=this._createClientOptions();return this._set("_proxy",new u({client:e})),this._proxy.when()}async _initServiceOptions(){this._set("_serviceOptions",await this._createServiceOptions());}get orderByFields(){return "stream"!==this._serviceOptions.type&&this._serviceOptions.orderByFields}get labelsVisible(){const e="subtype-group"===this.layer.type?this.layer.sublayers.items:[this.layer];return !this.suspended&&e.some((e=>e.labelingInfo&&e.labelsVisible))}get queryMode(){return this._serviceOptions.type}get renderingConfigHash(){if(!this.layer)return null;const e=this.availableFields,t=this.layer,i=this.view.floors,{definitionExpression:r$1}=t,s="subtype-group"!==this.layer.type&&this.layer.labelsVisible&&this.layer.labelingInfo,a="renderer"in t&&t.renderer,n="feature"===t.type?t.gdbVersion:void 0,l="feature"===t.type&&t.historicMoment?t.historicMoment.getTime():void 0,{timeExtent:o}=this,h="customParameters"in t?JSON.stringify(t.customParameters):void 0,d="apiKey"in t?t.apiKey:void 0,p="stream"===t.type?`${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`:null,c=JSON.stringify(this.clips),y=t.featureReduction&&t.featureReduction.toJSON(),f="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),g="sublayers"in this.layer&&this.layer.sublayers.items.reduce(((e,t)=>e+`${t.visible?1:0}.${JSON.stringify(t.renderer)}.${t.labelsVisible}\n.${JSON.stringify(t.labelingInfo)}`),"");return JSON.stringify({orderBy:f,sublayerHash:g,filterHash:r(this.filter)&&this.filter.toJSON(),effectHash:r(this.featureEffect)&&this.featureEffect.toJSON(),streamFilter:p,gdbVersion:n,definitionExpression:r$1,historicMoment:l,availableFields:e,renderer:a,labelingInfo:s,timeExtent:o,floors:i,clipsHash:c,featureReduction:y,customParameters:h,apiKey:d})}get hasEffects(){return this.effectLists.included.hasEffects||this.effectLists.excluded.hasEffects}highlight(e){let t;return e instanceof h?t=[e.getObjectId()]:"number"==typeof e||"string"==typeof e?t=[e]:S.isCollection(e)?t=e.map((e=>e&&e.getAttribute(this.layer.objectIdField))).toArray():Array.isArray(e)&&e.length>0&&(t="number"==typeof e[0]||"string"==typeof e[0]?e:e.map((e=>e&&e.getAttribute(this.layer.objectIdField)))),t&&t.length?(t=t.filter((e=>null!=e)),this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):{remove:()=>{}}}hasHighlight(){return !!this._highlightIds.size}hitTest(e,t){return this._hitTest(e,t)}async queryAggregates(){return (await this._proxy.getAggregates()).map((e=>c$2.fromJSON(e)))}queryStatistics(){return this._proxy.queryStatistics()}async querySummaryStatistics(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.querySummaryStatistics(this._cleanUpQuery(e),r,i)}async queryUniqueValues(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryUniqueValues(this._cleanUpQuery(e),r,i)}async queryClassBreaks(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryClassBreaks(this._cleanUpQuery(e),r,i)}queryFeatures(e,t){return this.queryFeaturesJSON(e,t).then((e=>{const t=g$3.fromJSON(e);return t.features.forEach((e=>this._setLayersForFeature(e))),t}))}queryFeaturesJSON(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)}queryObjectIds(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)}queryFeatureCount(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)}queryExtent(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then((e=>({count:e.count,extent:M$1.fromJSON(e.extent)})))}setVisibility(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update();}update(e){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:t,added:i,removed:r}=this._tileStrategy.update(e);(i.length||r.length)&&this._proxy.updateTiles({added:i,removed:r}),t&&this.requestUpdate(),this.notifyChange("updating");}attach(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new s({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add(i$2(this,"renderingConfigHash",(()=>this._update())),"attach"),"stream"!==this.layer.type&&this.handles.add(this.layer.on("edits",(e=>this._edit(e))),"attach");}detach(){this.container.removeAllChildren(),this.handles.remove("attach"),this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}async fetchPopupFeatures(e,i){if(r(i)&&i.clientGraphics.length){const e=i.clientGraphics[0];if(e instanceof c$2)return [e];i.clientGraphics=i.clientGraphics.filter((e=>{const{layer:t}=e,i="popupEnabled"in t&&t.popupEnabled,r="popupTemplate"in t&&t.popupTemplate,s=this.view.popup.defaultPopupTemplateEnabled;return i&&(r||s)}));}const s=this.validateFetchPopupFeatures(i);if(s)throw s;if(r(i)&&0===i.clientGraphics.length)return [];const a=this.fetchClientPopupFeatures(i);if(!e)return a;const n=this._fetchServicePopupFeatures(e,i);return E$1([a,n]).then(M$2)}async _fetchServicePopupFeatures(e,t){if("stream"===this.layer.type||"ogc-feature"===this.layer.type)return [];const i=await this.createPopupQuery(t),{layer:r$1}=this,s="renderer"in r$1&&r$1.renderer,a=r(t)?t.event:null,n=s$4({renderer:s,event:a});i.geometry=this.createFetchPopupFeaturesQueryGeometry(e,n);const l=new Set,{objectIdField:o}=r$1,h=r(t)?t.clientGraphics:null;if(h)for(const u of h)l.add(u.attributes[o]);return r$1.queryFeatures(i).then((e=>e.features.filter((e=>!l.has(e.attributes[o])))))}createFetchPopupFeaturesQueryGeometry(e,t){return a$3(e,t,this.view)}isUpdating(){var e;const t="renderer"in this.layer&&null!=this.layer.renderer,i=this._commandsQueue.updating,r=null!=this._updatingRequiredFieldsPromise,s=!this._proxy||!this._proxy.isReady,a=this._pipelineIsUpdating,l=null===this.tileRenderer||(null==(e=this.tileRenderer)?void 0:e.updating),o=t&&(i||r||s||a||l);return s$5("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${t}\n  -> hasPendingCommand ${i}\n  -> updatingRequiredFields ${r}\n  -> updatingProxy ${s}\n  -> updatingPipeline ${a}\n  -> updatingTileRenderer ${l}\n`),o}_createClientOptions(){return {setUpdating:e=>{this._set("_pipelineIsUpdating",e);},emitEvent:e=>{this.emit(e.name,e.event);}}}async _detectQueryMode(e){if("path"in e&&("feature"===this.layer.type||"subtype-group"===this.layer.type)&&"point"===this.layer.geometryType&&this.layer.capabilities.query.supportsPagination&&!this.layer.capabilities.operations.supportsEditing&&s$5("featurelayer-snapshot-enabled"))try{const e=await this.layer.queryFeatureCount();if(e<=s$5("featurelayer-snapshot-point-min-threshold"))return {mode:"snapshot",featureCount:e};const t=s$5("featurelayer-snapshot-point-max-threshold"),i=s$5("featurelayer-snapshot-point-coverage"),r$1=this.view.extent,s=e$3(this.layer.fullExtent),a=null==s?void 0:s.clone().intersection(r$1),l=r(a)?a.width*a.height:0,o=(null==s?void 0:s.width)*(null==s?void 0:s.height),h=0===o?0:l/o;if(e<=t&&h>=i)return {mode:"snapshot",featureCount:e}}catch(t){K.warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:t});}return {mode:"on-demand"}}async _createServiceOptions(){var e;const t=this.layer;if("stream"===t.type)return null;const{capabilities:i,objectIdField:r$1}=t,s=t.fields.map((e=>e.toJSON())),a=r(t.fullExtent)&&t.fullExtent.toJSON(),n=e$4(t.geometryType),o=t.timeInfo&&t.timeInfo.toJSON()||null,h=t.spatialReference?t.spatialReference.toJSON():null,d="feature"===t.type?t.globalIdField:null;let p;"ogc-feature"===t.type?p=t.source.getFeatureDefinition():D(t.source)?p=await t.source.openPorts():t.parsedUrl&&(p=l$5(t.parsedUrl),"dynamicDataSource"in t&&t.dynamicDataSource&&(p.query={layer:JSON.stringify({source:t.dynamicDataSource})}));const c="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,y=null!=(e="subtypeField"in this.layer&&this.layer.subtypeField)?e:null,{mode:f,featureCount:g}=await this._detectQueryMode(p);let m=this.layer.objectIdField;if("feature"===this.layer.type&&r(this.layer.orderBy)&&this.layer.orderBy.length){const e=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field;e&&(m=e);}return {type:f,timeReferenceUnknownClient:c,subtypeField:y,featureCount:g,globalIdField:d,maxRecordCount:i.query.maxRecordCount,tileMaxRecordCount:i.query.tileMaxRecordCount,capabilities:i,fields:s,fullExtent:a,geometryType:n,objectIdField:r$1,source:p,timeInfo:o,spatialReference:h,orderByFields:m}}async _createMemoryServiceOptions(e){const t=await e.openPorts();return {...this._createServiceOptions(),type:"memory",source:t}}_cleanUpQuery(e){const t=b.from(e)||this.createQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}async _update(){return this._commandsQueue.push({type:"update"})}async _edit(e){if(this._validateEdit(e))return this._commandsQueue.push({type:"edit",edits:e})}async doRefresh(){return this._commandsQueue.push({type:"refresh"})}_validateEdit(e){const t="globalIdField"in this.layer&&this.layer.globalIdField,i=e.deletedFeatures.some((e=>-1===e.objectId||!e.objectId)),r=t&&this.availableFields.includes(t);return i&&!r?(K.error(new s$3("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`)),null):e}async _doUpdate(){try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return;const{featureEffect:t,filter:i}=this;await this._updateRequiredFields();const{renderer:r}=this._getEffectiveRenderer();this._set("_effectiveRenderer",r);const s=this._createSchemaConfig(),a=e$4(this.layer.geometryType),n=await c$3(r,a,this.container.stage.resourceManager,this.layer.fields,this.layer.spatialReference,this.layer.featureReduction),l=this._createConfiguration(s,i,t);this._lastPixelBuffer=0===n?0:Math.max(n,this._lastPixelBuffer),l.schema.source.pixelBuffer=this._lastPixelBuffer;const o=this._createTileRendererHash(r);if(o!==this._tileRendererHash){await this._initTileRenderer(r);const e=this._serviceOptions;this.tileRenderer.onConfigUpdate(r);const t={added:this._tileStrategy.tileKeys(),removed:[]},i=this.layer;"stream"!==i.type&&D(i.source)&&(e.source=await i.source.openPorts()),"stream"===i.type&&await this._initServiceOptions(),await this._proxy.startup(this.view.featuresTilingScheme,l,e,t),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(r);}else {const t=await this._proxy.update(l);(t.mesh||t.targets.aggregate)&&this._lockGPUUploads();try{await this._proxy.applyUpdate(t);}catch(e){d$3(e)||K.error(e);}(t.mesh||t.targets.aggregate)&&this._unlockGPUUploads(),this.tileRenderer.onConfigUpdate(r),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload();}this._tileRendererHash=o,this.tileRenderer.invalidateLabels(),this.requestUpdate();}catch(e){}}async _doEdit(e){try{await this._proxy.onEdits(e);}catch(t){}}async _doRefresh(){this._lockGPUUploads();try{await this._proxy.refresh();}catch(e){}this._unlockGPUUploads();}_updateClusterSizeVariable(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1);}_createUpdateClusterSizeTask(e,t){return this.watch("_aggregateValueRanges",(async i=>{this._updateClusterEffectiveRendererSizeVariable(e,t,i),this._needsClusterSizeUpdate=!0,this._uploadsLocked||this._updateClusterSizeVariable();}))}async _updateClusterEffectiveRendererSizeVariable(e,t,i){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const r$1=d$4(e.visualVariables);if(r(r$1)&&"cluster_count"===r$1.field){const s=e.visualVariables.indexOf(r$1);e.visualVariables[s]=f(t,i);const a=e.clone();a.dynamicClusterSize=!0,this._set("_effectiveRenderer",a);}}}_getEffectiveRenderer(){const e="renderer"in this.layer&&this.layer.renderer,t=this.layer.featureReduction;if(r(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),t&&"cluster"===t.type&&m$1(e)){const i=t,r=[],s=c$4(r,e,i,this._aggregateValueRanges);return E(this._updateClusterSizeTask,(e=>e.remove())),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(s,i),{renderer:s,aggregateFields:r,featureReduction:t}}return {renderer:e,aggregateFields:[],featureReduction:null}}_acquireTile(e){const t=this.tileRenderer.acquireTile(e);return t.once("attach",(()=>{this.requestUpdate();})),t}_releaseTile(e){this.tileRenderer.releaseTile(e);}async _initTileRenderer(e$1){const t=await e(e$1,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=t,this._set("tileRenderer",t),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(e$1),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(e){return `${"heatmap"===e.type?"heatmap":"symbol"}.${"dot-density"===e.type}`}_createFeatureDataHash(e,t,i){const r$1=e.getAttributeHash(),s=JSON.stringify(t),a=r(i)&&JSON.stringify(i.filter),n=JSON.stringify(this.timeExtent);let l="";return this._visibilityOverrides.forEach((e=>l+=e)),`${r$1}.${s}.${a}.${n}.${l}`}get hasFilter(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length);return !!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(e){const t=r(e)?e.timeExtent:null,i=r(this.timeExtent)&&r(t)?this.timeExtent.intersection(t):this.timeExtent||t;let r$1=null;const s="floorInfo"in this.layer&&this.layer.floorInfo;if(s){const t=r(e)&&e.where;r$1=this._addFloorFilterClause(t);}if(!this._visibilityOverrides.size&&!i&&!s)return r(e)?e.toJSON():null;(e=r(e)&&e.clone()||new y).timeExtent=i,r$1&&(e.where=r$1);const a=e.toJSON();return a.hiddenIds=Array.from(this._visibilityOverrides),a}_addFloorFilterClause(e){const t=this.layer;let i=e||"";if("floorInfo"in t&&t.floorInfo){var r$1;let e=this.view.floors;if(!e||!e.length)return i;null!=(r$1=t.floorInfo.viewAllLevelIds)&&r$1.length&&(e=t.floorInfo.viewAllLevelIds);const s=e.filter((e=>""!==e)).map((e=>"'"+e+"'"));s.push("''");const a=t.floorInfo.floorField;let n="("+a+" IN ({ids}) OR "+a+" IS NULL)";if(n=n.replace("{ids}",s.join(", ")),r(i)&&i.includes(a)){let e=new RegExp("AND \\("+a+".*NULL\\)","g");i=i.replace(e,""),e=new RegExp("\\("+a+".*NULL\\)","g"),i=i.replace(e,""),i=i.replace(/\s+/g," ").trim();}i=""!==i?"("+i+") AND "+n:n;}return ""!==i?i:null}_createConfiguration(e,t$1,i){const r$1="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s="feature"===this.layer.type?this.layer.gdbVersion:void 0,a=new Array(N$1),n=this._injectOverrides(t$1);a[0]=n,a[1]=r(i)&&r(i.filter)?i.filter.toJSON():null;const l=M$3(e);if(t(l))return null;const o=o$1();return {definitionExpression:this.layer.definitionExpression,availableFields:this.availableFields,gdbVersion:s,historicMoment:r$1,devicePixelRatio:window.devicePixelRatio||1,filters:a,schema:l,supportsTextureFloat:o.supportsTextureFloat,maxTextureSize:o.maxTextureSize}}_hasRequiredSupport(e){var t;return !("renderer"in e&&"dot-density"===(null==(t=e.renderer)?void 0:t.type)&&!o$1().supportsTextureFloat)||(K.error(new s$3("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1)}_onceTilesUpdated(){return this.requestUpdate(),g$4(this,"_pipelineIsUpdating",!1)}_lockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads());}_unlockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads());}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload();}_createSchemaConfig(){const e="feature"===this.layer.type?this.layer.historicMoment:null,t="feature"===this.layer.type?this.layer.gdbVersion:null;return {renderer:"renderer"in this.layer&&this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:e,labelsVisible:"labelsVisible"in this.layer&&this.layer.labelsVisible,labelingInfo:"labelingInfo"in this.layer&&this.layer.labelingInfo,availableFields:this.availableFields,featureEffect:this.featureEffect,filter:this.filter,gdbVersion:t,pixelBuffer:0,orderBy:"orderBy"in this.layer&&this.layer.orderBy?this.layer.orderBy:null,customParameters:{..."customParameters"in this.layer?this.layer.customParameters:void 0,token:"apiKey"in this.layer?this.layer.apiKey:void 0}}}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1);}else this._highlightIds.set(t,1);this._updateHighlight().catch((e=>{d$3(e)||K.error(e);}));}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e);}this._updateHighlight().catch((e=>{d$3(e)||K.error(e);}));}_setLayersForFeature(e){const t=this.layer;e.layer=t,e.sourceLayer=t;}_createHittestResult(e){return this._setLayersForFeature(e),r(e.geometry)&&(e.geometry.spatialReference=this.view.spatialReference),e}async _hitTest(e,r$1){if(this.suspended||!this.tileRenderer)return null;const s=await this.tileRenderer.hitTest(e,r$1);if(0===s.length)return await L(1),null;const a=s[0];if(!G(a)){const e=await this._proxy.getFeature(a);return E(e,(e=>this._createHittestResult(h.fromJSON(e))))}const n=await this._proxy.getAggregate(a);if(t(n))return null;if(r(n.referenceId)){const e=await this._proxy.getFeature(n.referenceId);return E(e,(e=>this._createHittestResult(h.fromJSON(e))))}return this._createHittestResult(c$2.fromJSON(n))}};e$1([d$1()],W.prototype,"_serviceOptions",void 0),e$1([d$1()],W.prototype,"_proxy",void 0),e$1([d$1()],W.prototype,"_pipelineIsUpdating",void 0),e$1([d$1()],W.prototype,"_effectiveRenderer",void 0),e$1([d$1()],W.prototype,"_aggregateValueRanges",void 0),e$1([d$1()],W.prototype,"_commandsQueue",void 0),e$1([d$1()],W.prototype,"labelsVisible",null),e$1([d$1({readOnly:!0})],W.prototype,"queryMode",null),e$1([d$1()],W.prototype,"renderingConfigHash",null),e$1([d$1()],W.prototype,"tileRenderer",void 0),e$1([d$1()],W.prototype,"updating",void 0),W=e$1([i$1("esri.views.2d.layers.FeatureLayerView2D")],W);const X=W;

export default X;
