'use strict';

const request = require('./MapView-1195e7f1.js');
const EffectList = require('./EffectList-c2e3d9b4.js');
const clickToleranceUtils = require('./clickToleranceUtils-ad2eeda8.js');
const definitions = require('./definitions-b4888cc6.js');
const LayerView = require('./LayerView-870ab467.js');
const schemaUtils = require('./schemaUtils-60fb47fc.js');
const popupUtils = require('./popupUtils-1e401adb.js');
const floorFilterUtils = require('./floorFilterUtils-a9b30733.js');
const RefreshableLayerView = require('./RefreshableLayerView-fe90cf84.js');
const drapedUtils = require('./drapedUtils-bc0642dd.js');
require('./index-b630e408.js');
require('./Container-7c02556c.js');
require('./Utils-cf62b8df.js');
require('./Texture-51894e1f.js');
require('./MaterialKey-a9d25bbc.js');
require('./visualVariablesUtils-35b3c097.js');
require('./CIMSymbolHelper-5119d47d.js');
require('./Rect-8ca00bae.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./cimSymbolUtils-34c12ff0.js');
require('./cimAnalyzer-a0ed6247.js');
require('./quantizationUtils-6e32af1f.js');
require('./devEnvironmentUtils-2fe58900.js');
require('./MD5-e5fc0526.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let s$1=p=class extends request.h$2{constructor(){super(...arguments),this.isAggregate=!0;}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;const r=this.sourceLayer&&this.sourceLayer.featureReduction;return r&&"popupTemplate"in r&&r.popupEnabled?r.popupTemplate:null}getObjectId(){return this.objectId}clone(){return new p({objectId:this.objectId,...this.cloneProperties()})}};request.e([request.d({type:Boolean})],s$1.prototype,"isAggregate",void 0),request.e([request.d({type:Number,json:{read:!0}})],s$1.prototype,"objectId",void 0),s$1=p=request.e([request.i("esri.AggregateGraphic")],s$1);const c$2=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function e(e,a){if(!e)return null;switch(e.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return new((await Promise.resolve().then(function () { return require('./SymbolTileRenderer-bbc44ef5.js'); })).default)(a);case"heatmap":return new((await Promise.resolve().then(function () { return require('./HeatmapTileRenderer-b4c9f961.js'); })).default)(a)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(e){return e.some((e=>e.globalId))}function n(e){return e.filter((e=>!e.error)).map((e=>{var s;return null!=(s=e.objectId)?s:e.globalId}))}function a(e,s){const r=new Set(e);for(const t of s.values())r.add(t);return r}function i(e,s){const r=new Set(e);for(const t of s.values())r.delete(t);return r}let u$1=class extends request.p{constructor(e){super(),this._hasGlobalIds=!1,this._queueProcessor=new request.l$7({concurrency:1,process:e.process});}destroy(){this._queueProcessor.clear();}get updating(){return this._queueProcessor.length>0}push(e){const s=this._queueProcessor,r=s.last();switch(e.type){case"update":case"refresh":if((null==r?void 0:r.type)===e.type)return;s.push(e).finally((()=>this.notifyChange("updating")));break;case"edit":{const t="processed-edit"===(null==r?void 0:r.type)?r:null;t&&s.popLast();const o=this._mergeEdits(t,e);for(const e of o)s.push(e).finally((()=>this.notifyChange("updating")));break}}this.notifyChange("updating");}_mergeEdits(e,s){var r,t;const{addedFeatures:o,deletedFeatures:u,updatedFeatures:c}=s.edits;if(this._hasGlobalIds=this._hasGlobalIds||d(o)||d(c)||d(u),this._hasGlobalIds){return [e,{type:"processed-edit",edits:{addOrModified:[...o,...c],removed:u}}]}const p=new Set(n(null!=(r=null==e?void 0:e.edits.addOrModified)?r:[])),l=new Set(n(null!=(t=null==e?void 0:e.edits.removed)?t:[])),f=new Set([...n(o),...n(c)]),h=new Set(n(u));return [{type:"processed-edit",edits:{addOrModified:Array.from(a(i(p,h),f)).map((e=>({objectId:e}))),removed:Array.from(a(i(l,f),h)).map((e=>({objectId:e})))}}]}};request.e([request.d({readOnly:!0})],u$1.prototype,"updating",null),u$1=request.e([request.i("esri.views.2d.layers.support.FeatureCommandQueue")],u$1);const c$1=u$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(t){return Array.isArray(t)}let l$1=class extends request.m$16{constructor(t){super(t),this._startupResolver=request.B$1(),this.isReady=!1;}initialize(){this._controller=new AbortController,this.addResolvingPromise(this._startWorker(this._controller.signal));}destroy(){this._controller.abort(),this._connection&&this._connection.close();}set tileRenderer(t){this.client.tileRenderer=t;}get closed(){return this._connection.closed}async startup(t,e,r,s){await this.when();const o=this._controller.signal,i=c(r.source)?{transferList:r.source,signal:o}:void 0,n={service:r,config:e,tileInfo:t.tileInfo.toJSON(),tiles:s};await this._connection.invoke("startup",n,i),this._startupResolver.resolve(),this._set("isReady",!0);}async updateTiles(t){return await this._startupResolver.promise,request.g$9(this._connection.invoke("updateTiles",t))}async update(t){const e={config:t};return await this._startupResolver.promise,this._connection.invoke("update",e)}async applyUpdate(t){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",t)}async setHighlight(t){return await this._startupResolver.promise,request.g$9(this._connection.invoke("controller.setHighlight",t))}async refresh(){return await this._startupResolver.promise,request.g$9(this._connection.invoke("controller.refresh"))}async querySummaryStatistics(t,e,r){return await this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:t.toJSON(),params:e},r)}async queryUniqueValues(t,e,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryUniqueValues",{query:t.toJSON(),params:e},r)}async queryClassBreaks(t,e,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryClassBreaks",{query:t.toJSON(),params:e},r)}async queryFeatures(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",t.toJSON(),e)}async queryObjectIds(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",t.toJSON(),e)}async queryFeatureCount(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",t.toJSON(),e)}async queryExtent(t,e){return this._connection.invoke("controller.queryExtent",t.toJSON(),e)}async queryLatestObservations(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",t.toJSON(),e)}async queryStatistics(t){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",t)}async getObjectId(t){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",t)}async getDisplayId(t){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",t)}async getFeature(t){return await this._startupResolver.promise,this._connection.invoke("controller.getFeature",t)}async getAggregate(t){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregate",t)}async getAggregates(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregates")}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(t){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",t)}async onEdits(t){return await this._startupResolver.promise,request.g$9(this._connection.invoke("controller.onEdits",t))}async enableEvent(t,e){return await this._startupResolver.promise,request.g$9(this._connection.invoke("controller.enableEvent",{name:t,value:e}))}async _startWorker(t){try{this._connection=await request.u$7("Pipeline",{client:this.client,strategy:"dedicated",signal:t});}catch(e){request.w$3(e);}}};request.e([request.d()],l$1.prototype,"isReady",void 0),request.e([request.d()],l$1.prototype,"client",void 0),request.e([request.d()],l$1.prototype,"tileRenderer",null),l$1=request.e([request.i("esri.views.2d.layers.support.FeatureLayerProxy")],l$1);const u=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=1e-6;class s{constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer;}destroy(){}clear(){this._tiles.forEach((e=>this._releaseTile(e)));}tileKeys(){const e=[];return this._tiles.forEach(((i,t)=>e.push(t))),e}update(e){const l=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:s,lodInfo:r}=l,{level:a}=r,o=[],d=[],h=new Set,n=new Set;for(const{row:i,colFrom:c,colTo:f}of s)for(let e=c;e<=f;e++){const l=request.e$19.getId(a,i,r.normalizeCol(e),r.getWorldForColumn(e)),s=this._getOrAcquireTile(o,l);h.add(l),s.isReady?s.visible=!0:n.add(s.key);}n.forEach((e=>this._addPlaceholders(h,e))),this._tiles.forEach((e=>{h.has(e.key.id)||(d.push(e.key.id),this._releaseTile(e));})),request.l$21.pool.release(l);return {hasMissingTiles:n.size>0,added:o,removed:d}}_getOrAcquireTile(e,i){if(!this._tiles.has(i)){const l=this.acquireTile(new request.e$19(i));e.push(i),this._tiles.set(i,l),l.visible=!1;}return this._tiles.get(i)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e);}_addPlaceholders(e,i){const t=this._addPlaceholderChildren(e,i);if(!(Math.abs(1-t)<l)){if(!this._addPlaceholderParent(e,i)){this._getTile(i.id).visible=!0;}}}_addPlaceholderChildren(e,i){let t=0;return this._tiles.forEach((l=>{t+=this._addPlaceholderChild(e,l,i);})),t}_addPlaceholderChild(e,i,t){if(i.key.level<=t.level||!i.hasData||!t.contains(i.key))return 0;i.visible=!0,e.add(i.key.id);return 1/(1<<2*(i.key.level-t.level))}_addPlaceholderParent(i,t){let l=t.getParentKey(),s=0,r=null;for(;request.r(l);){if(i.has(l.id))return !0;const e=this._getTile(l.id);if(null!=e&&e.isReady)return e.visible=!0,i.add(e.key.id),!0;null!=e&&e.hasData&&e.patchCount>s&&(s=e.patchCount,r=e),l=l.getParentKey();}return !!r&&(r.visible=!0,i.add(r.key.id),!0)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const P=request.s.getLogger("esri.views.layers.FeatureLayerView"),O=i=>{let O=class extends i{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null;}initialize(){request.i$3(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","featureEffect","layer.timeInfo","layer.floorInfo","timeExtent"],(()=>this._handleRequiredFieldsChange()),!0),request.$(this,"view.floors","change",(()=>this._handleRequiredFieldsChange())),request.$(this,"layer.sublayer","change",(()=>this._handleRequiredFieldsChange()));}get availableFields(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return "outFields"in e&&e.outFields?request.y$18(t,[...request.I$4(t,e.outFields),...r]):request.y$18(t,r)}set effect(e){request.r$3(P,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect=e;}get effect(){return request.r$3(P,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){void 0!==e?this._override("featureEffect",e):this._clearOverride("featureEffect");}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){P.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported");}get maximumNumberOfFeaturesExceeded(){return !1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=request.r(this.filter)?this.filter.createQuery(e):new request.b$13(e);if("feature"===this.layer.type){const e=floorFilterUtils.o(this);request.r(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e);}return request.r(this.timeExtent)&&(t.timeExtent=request.r(t.timeExtent)?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return request.a$14()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null);}));}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r,objectIdField:i}}=this,o="renderer"in t&&t.renderer,l="orderBy"in t&&t.orderBy,n=t.featureReduction,u=new Set,p=await request.T([o?o.collectRequiredFields(u,r):null,request.j$12(u,t),e?request.A$6(u,t):null,request.r(this.filter)?request.V$2(u,t,this.filter):null,request.r(this.featureEffect)?request.V$2(u,t,this.featureEffect.filter):null,n?request.N$1(u,t,n):null,l?request._$3(u,t,l):null]);if(t.timeInfo&&this.timeExtent&&request.g$10(u,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&t.floorInfo&&request.g$10(u,t.fieldsIndex,[t.floorInfo.floorField]),"subtype-group"===t.type){request.F$2(u,r,t.subtypeField);const e=t.sublayers.map((e=>{var t;return Promise.all([null==(t=e.renderer)?void 0:t.collectRequiredFields(u,r),request.j$12(u,e)])}));await request.T(e);}for(const s of p)s.error&&P.error(s.error);request.F$2(u,r,i),e&&"displayField"in t&&t.displayField&&request.F$2(u,r,t.displayField);const f=Array.from(u).sort();this._set("requiredFields",f);}validateFetchPopupFeatures(e){if(request.t$2(e))return null;for(const t of e.clientGraphics){const i=t.layer;if("popupEnabled"in i&&!i.popupEnabled)return new request.s$3("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i});if("popupTemplate"in i){if(!popupUtils.d(i,e))return new request.s$3("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i})}}}async fetchClientPopupFeatures(e){const t=request.r(e)?e.clientGraphics:null;if(!t||0===t.length)return Promise.resolve([]);const r=[],i=[],o=await this.createPopupQuery(e);for(const a of t){const{layer:t}=a;if(!("popupEnabled"in t))continue;const l=request.I$4(this.layer.fieldsIndex,o.outFields),n=popupUtils.d(t,e);if(!request.r(n))continue;const u=await this._loadArcadeModules(n);u&&u.arcadeUtils.hasGeometryOperations(n)||!request.ce(l,a)?i.push(a):r.push(a);}return "stream"===this.layer.type||0===i.length?Promise.resolve(r):(o.objectIds=i.map((e=>e.attributes[this.layer.objectIdField])),this.layer.queryFeatures(o).then((e=>r.concat(e.features))).catch((()=>i)))}async createPopupQuery(e){const t=this.layer.createQuery(),r=new Set;let i=!1;const o=request.r(e)&&e.clientGraphics?e.clientGraphics.map((e=>e.layer)):[this.layer];for(const a of o){if(!("popupEnabled"in a))continue;const t=popupUtils.d(a,e);if(!request.r(t))continue;const o=await this._loadArcadeModules(t),l=o&&o.arcadeUtils.hasGeometryOperations(t);i=!("point"!==this.layer.geometryType&&!l);const n=await popupUtils.t(this.layer,t);for(const e of n)r.add(e);}if(t.returnGeometry=i,t.returnZ=i,t.returnM=i,t.outFields=Array.from(r),t.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const e=floorFilterUtils.o(this);request.r(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e);}return t}canResume(){return !!super.canResume()&&(!request.r(this.timeExtent)||!this.timeExtent.isEmpty)}};return request.e([request.d()],O.prototype,"_updatingRequiredFieldsPromise",void 0),request.e([request.d({readOnly:!0})],O.prototype,"availableFields",null),request.e([request.d()],O.prototype,"effect",null),request.e([request.d({type:request.a$25})],O.prototype,"featureEffect",null),request.e([request.d({type:request.y$17})],O.prototype,"filter",void 0),request.e([request.d(request.g$3)],O.prototype,"timeExtent",void 0),request.e([request.d()],O.prototype,"layer",void 0),request.e([request.d({type:Number})],O.prototype,"maximumNumberOfFeatures",null),request.e([request.d({readOnly:!0,type:Boolean})],O.prototype,"maximumNumberOfFeaturesExceeded",null),request.e([request.d({readOnly:!0})],O.prototype,"requiredFields",void 0),request.e([request.d()],O.prototype,"suspended",void 0),request.e([request.d()],O.prototype,"view",void 0),O=request.e([request.i("esri.views.layers.FeatureLayerView")],O),O};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const $=2147483648,M=1,G=e=>(e&$)>>>31===M;function D(e){return e&&"openPorts"in e}const K=request.s.getLogger("esri.views.2d.layers.FeatureLayerView2D");let W=class extends(O(RefreshableLayerView.i(LayerView.l(LayerView.u)))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._commandsQueue=new c$1({process:e=>{switch(e.type){case"processed-edit":return this._doEdit(e);case"refresh":return this._doRefresh();case"update":return this._doUpdate()}}}),this._visibilityOverrides=new Set,this._highlightIds=new Map,this._lastPixelBuffer=0,this._updateHighlight=request.z$1((async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys())))),this._uploadsLocked=!1,this._needsClusterSizeUpdate=!1,this.effectLists={included:new EffectList.r,excluded:new EffectList.r};}destroy(){var e,t;request.E$2(this._updateClusterSizeTask,(e=>e.remove())),null==(e=this._proxy)||e.destroy(),null==(t=this.tileRenderer)||t.destroy(),this._commandsQueue.destroy();}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",(e=>{this._set("_aggregateValueRanges",e.valueRanges);})),request.i$3(this,"featureEffect",(e=>{var t,i;this.effectLists.included.effect=request.e$3(null==(t=request.e$3(e))?void 0:t.includedEffect),this.effectLists.excluded.effect=request.e$3(null==(i=request.e$3(e))?void 0:i.excludedEffect);}))]);}async _initProxy(){if("isTable"in this.layer&&this.layer.isTable)throw new request.s$3("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});this._proxy&&this._proxy.destroy();const e=this._createClientOptions();return this._set("_proxy",new u({client:e})),this._proxy.when()}async _initServiceOptions(){this._set("_serviceOptions",await this._createServiceOptions());}get orderByFields(){return "stream"!==this._serviceOptions.type&&this._serviceOptions.orderByFields}get labelsVisible(){const e="subtype-group"===this.layer.type?this.layer.sublayers.items:[this.layer];return !this.suspended&&e.some((e=>e.labelingInfo&&e.labelsVisible))}get queryMode(){return this._serviceOptions.type}get renderingConfigHash(){if(!this.layer)return null;const e=this.availableFields,t=this.layer,i=this.view.floors,{definitionExpression:r}=t,s="subtype-group"!==this.layer.type&&this.layer.labelsVisible&&this.layer.labelingInfo,a="renderer"in t&&t.renderer,n="feature"===t.type?t.gdbVersion:void 0,l="feature"===t.type&&t.historicMoment?t.historicMoment.getTime():void 0,{timeExtent:o}=this,h="customParameters"in t?JSON.stringify(t.customParameters):void 0,d="apiKey"in t?t.apiKey:void 0,p="stream"===t.type?`${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`:null,c=JSON.stringify(this.clips),y=t.featureReduction&&t.featureReduction.toJSON(),f="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),g="sublayers"in this.layer&&this.layer.sublayers.items.reduce(((e,t)=>e+`${t.visible?1:0}.${JSON.stringify(t.renderer)}.${t.labelsVisible}\n.${JSON.stringify(t.labelingInfo)}`),"");return JSON.stringify({orderBy:f,sublayerHash:g,filterHash:request.r(this.filter)&&this.filter.toJSON(),effectHash:request.r(this.featureEffect)&&this.featureEffect.toJSON(),streamFilter:p,gdbVersion:n,definitionExpression:r,historicMoment:l,availableFields:e,renderer:a,labelingInfo:s,timeExtent:o,floors:i,clipsHash:c,featureReduction:y,customParameters:h,apiKey:d})}get hasEffects(){return this.effectLists.included.hasEffects||this.effectLists.excluded.hasEffects}highlight(e){let t;return e instanceof request.h$2?t=[e.getObjectId()]:"number"==typeof e||"string"==typeof e?t=[e]:request.S$2.isCollection(e)?t=e.map((e=>e&&e.getAttribute(this.layer.objectIdField))).toArray():Array.isArray(e)&&e.length>0&&(t="number"==typeof e[0]||"string"==typeof e[0]?e:e.map((e=>e&&e.getAttribute(this.layer.objectIdField)))),t&&t.length?(t=t.filter((e=>null!=e)),this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):{remove:()=>{}}}hasHighlight(){return !!this._highlightIds.size}hitTest(e,t){return this._hitTest(e,t)}async queryAggregates(){return (await this._proxy.getAggregates()).map((e=>c$2.fromJSON(e)))}queryStatistics(){return this._proxy.queryStatistics()}async querySummaryStatistics(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.querySummaryStatistics(this._cleanUpQuery(e),r,i)}async queryUniqueValues(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryUniqueValues(this._cleanUpQuery(e),r,i)}async queryClassBreaks(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryClassBreaks(this._cleanUpQuery(e),r,i)}queryFeatures(e,t){return this.queryFeaturesJSON(e,t).then((e=>{const t=request.g$5.fromJSON(e);return t.features.forEach((e=>this._setLayersForFeature(e))),t}))}queryFeaturesJSON(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)}queryObjectIds(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)}queryFeatureCount(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)}queryExtent(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then((e=>({count:e.count,extent:request.M.fromJSON(e.extent)})))}setVisibility(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update();}update(e){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:t,added:i,removed:r}=this._tileStrategy.update(e);(i.length||r.length)&&this._proxy.updateTiles({added:i,removed:r}),t&&this.requestUpdate(),this.notifyChange("updating");}attach(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new s({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add(request.i$3(this,"renderingConfigHash",(()=>this._update())),"attach"),"stream"!==this.layer.type&&this.handles.add(this.layer.on("edits",(e=>this._edit(e))),"attach");}detach(){this.container.removeAllChildren(),this.handles.remove("attach"),this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}async fetchPopupFeatures(e,i){if(request.r(i)&&i.clientGraphics.length){const e=i.clientGraphics[0];if(e instanceof c$2)return [e];i.clientGraphics=i.clientGraphics.filter((e=>{const{layer:t}=e,i="popupEnabled"in t&&t.popupEnabled,r="popupTemplate"in t&&t.popupTemplate,s=this.view.popup.defaultPopupTemplateEnabled;return i&&(r||s)}));}const s=this.validateFetchPopupFeatures(i);if(s)throw s;if(request.r(i)&&0===i.clientGraphics.length)return [];const a=this.fetchClientPopupFeatures(i);if(!e)return a;const n=this._fetchServicePopupFeatures(e,i);return request.E$5([a,n]).then(request.M$2)}async _fetchServicePopupFeatures(e,t){if("stream"===this.layer.type||"ogc-feature"===this.layer.type)return [];const i=await this.createPopupQuery(t),{layer:r}=this,s="renderer"in r&&r.renderer,a=request.r(t)?t.event:null,n=clickToleranceUtils.s({renderer:s,event:a});i.geometry=this.createFetchPopupFeaturesQueryGeometry(e,n);const l=new Set,{objectIdField:o}=r,h=request.r(t)?t.clientGraphics:null;if(h)for(const u of h)l.add(u.attributes[o]);return r.queryFeatures(i).then((e=>e.features.filter((e=>!l.has(e.attributes[o])))))}createFetchPopupFeaturesQueryGeometry(e,t){return drapedUtils.a(e,t,this.view)}isUpdating(){var e;const t="renderer"in this.layer&&null!=this.layer.renderer,i=this._commandsQueue.updating,r=null!=this._updatingRequiredFieldsPromise,s=!this._proxy||!this._proxy.isReady,a=this._pipelineIsUpdating,l=null===this.tileRenderer||(null==(e=this.tileRenderer)?void 0:e.updating),o=t&&(i||r||s||a||l);return request.s$4("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${t}\n  -> hasPendingCommand ${i}\n  -> updatingRequiredFields ${r}\n  -> updatingProxy ${s}\n  -> updatingPipeline ${a}\n  -> updatingTileRenderer ${l}\n`),o}_createClientOptions(){return {setUpdating:e=>{this._set("_pipelineIsUpdating",e);},emitEvent:e=>{this.emit(e.name,e.event);}}}async _detectQueryMode(e){if("path"in e&&("feature"===this.layer.type||"subtype-group"===this.layer.type)&&"point"===this.layer.geometryType&&this.layer.capabilities.query.supportsPagination&&!this.layer.capabilities.operations.supportsEditing&&request.s$4("featurelayer-snapshot-enabled"))try{const e=await this.layer.queryFeatureCount();if(e<=request.s$4("featurelayer-snapshot-point-min-threshold"))return {mode:"snapshot",featureCount:e};const t=request.s$4("featurelayer-snapshot-point-max-threshold"),i=request.s$4("featurelayer-snapshot-point-coverage"),r=this.view.extent,s=request.e$3(this.layer.fullExtent),a=null==s?void 0:s.clone().intersection(r),l=request.r(a)?a.width*a.height:0,o=(null==s?void 0:s.width)*(null==s?void 0:s.height),h=0===o?0:l/o;if(e<=t&&h>=i)return {mode:"snapshot",featureCount:e}}catch(t){K.warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:t});}return {mode:"on-demand"}}async _createServiceOptions(){var e;const t=this.layer;if("stream"===t.type)return null;const{capabilities:i,objectIdField:r}=t,s=t.fields.map((e=>e.toJSON())),a=request.r(t.fullExtent)&&t.fullExtent.toJSON(),n=schemaUtils.e(t.geometryType),o=t.timeInfo&&t.timeInfo.toJSON()||null,h=t.spatialReference?t.spatialReference.toJSON():null,d="feature"===t.type?t.globalIdField:null;let p;"ogc-feature"===t.type?p=t.source.getFeatureDefinition():D(t.source)?p=await t.source.openPorts():t.parsedUrl&&(p=request.l$1(t.parsedUrl),"dynamicDataSource"in t&&t.dynamicDataSource&&(p.query={layer:JSON.stringify({source:t.dynamicDataSource})}));const c="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,y=null!=(e="subtypeField"in this.layer&&this.layer.subtypeField)?e:null,{mode:f,featureCount:g}=await this._detectQueryMode(p);let m=this.layer.objectIdField;if("feature"===this.layer.type&&request.r(this.layer.orderBy)&&this.layer.orderBy.length){const e=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field;e&&(m=e);}return {type:f,timeReferenceUnknownClient:c,subtypeField:y,featureCount:g,globalIdField:d,maxRecordCount:i.query.maxRecordCount,tileMaxRecordCount:i.query.tileMaxRecordCount,capabilities:i,fields:s,fullExtent:a,geometryType:n,objectIdField:r,source:p,timeInfo:o,spatialReference:h,orderByFields:m}}async _createMemoryServiceOptions(e){const t=await e.openPorts();return {...this._createServiceOptions(),type:"memory",source:t}}_cleanUpQuery(e){const t=request.b$13.from(e)||this.createQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}async _update(){return this._commandsQueue.push({type:"update"})}async _edit(e){if(this._validateEdit(e))return this._commandsQueue.push({type:"edit",edits:e})}async doRefresh(){return this._commandsQueue.push({type:"refresh"})}_validateEdit(e){const t="globalIdField"in this.layer&&this.layer.globalIdField,i=e.deletedFeatures.some((e=>-1===e.objectId||!e.objectId)),r=t&&this.availableFields.includes(t);return i&&!r?(K.error(new request.s$3("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`)),null):e}async _doUpdate(){try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return;const{featureEffect:t,filter:i}=this;await this._updateRequiredFields();const{renderer:r}=this._getEffectiveRenderer();this._set("_effectiveRenderer",r);const s=this._createSchemaConfig(),a=schemaUtils.e(this.layer.geometryType),n=await schemaUtils.c$1(r,a,this.container.stage.resourceManager,this.layer.fields,this.layer.spatialReference,this.layer.featureReduction),l=this._createConfiguration(s,i,t);this._lastPixelBuffer=0===n?0:Math.max(n,this._lastPixelBuffer),l.schema.source.pixelBuffer=this._lastPixelBuffer;const o=this._createTileRendererHash(r);if(o!==this._tileRendererHash){await this._initTileRenderer(r);const e=this._serviceOptions;this.tileRenderer.onConfigUpdate(r);const t={added:this._tileStrategy.tileKeys(),removed:[]},i=this.layer;"stream"!==i.type&&D(i.source)&&(e.source=await i.source.openPorts()),"stream"===i.type&&await this._initServiceOptions(),await this._proxy.startup(this.view.featuresTilingScheme,l,e,t),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(r);}else {const t=await this._proxy.update(l);(t.mesh||t.targets.aggregate)&&this._lockGPUUploads();try{await this._proxy.applyUpdate(t);}catch(e){request.d$2(e)||K.error(e);}(t.mesh||t.targets.aggregate)&&this._unlockGPUUploads(),this.tileRenderer.onConfigUpdate(r),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload();}this._tileRendererHash=o,this.tileRenderer.invalidateLabels(),this.requestUpdate();}catch(e){}}async _doEdit(e){try{await this._proxy.onEdits(e);}catch(t){}}async _doRefresh(){this._lockGPUUploads();try{await this._proxy.refresh();}catch(e){}this._unlockGPUUploads();}_updateClusterSizeVariable(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1);}_createUpdateClusterSizeTask(e,t){return this.watch("_aggregateValueRanges",(async i=>{this._updateClusterEffectiveRendererSizeVariable(e,t,i),this._needsClusterSizeUpdate=!0,this._uploadsLocked||this._updateClusterSizeVariable();}))}async _updateClusterEffectiveRendererSizeVariable(e,t,i){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const r=schemaUtils.d$1(e.visualVariables);if(request.r(r)&&"cluster_count"===r.field){const s=e.visualVariables.indexOf(r);e.visualVariables[s]=schemaUtils.f(t,i);const a=e.clone();a.dynamicClusterSize=!0,this._set("_effectiveRenderer",a);}}}_getEffectiveRenderer(){const e="renderer"in this.layer&&this.layer.renderer,t=this.layer.featureReduction;if(request.r(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),t&&"cluster"===t.type&&schemaUtils.m(e)){const i=t,r=[],s=schemaUtils.c$2(r,e,i,this._aggregateValueRanges);return request.E$2(this._updateClusterSizeTask,(e=>e.remove())),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(s,i),{renderer:s,aggregateFields:r,featureReduction:t}}return {renderer:e,aggregateFields:[],featureReduction:null}}_acquireTile(e){const t=this.tileRenderer.acquireTile(e);return t.once("attach",(()=>{this.requestUpdate();})),t}_releaseTile(e){this.tileRenderer.releaseTile(e);}async _initTileRenderer(e$1){const t=await e(e$1,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=t,this._set("tileRenderer",t),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(e$1),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(e){return `${"heatmap"===e.type?"heatmap":"symbol"}.${"dot-density"===e.type}`}_createFeatureDataHash(e,t,i){const r=e.getAttributeHash(),s=JSON.stringify(t),a=request.r(i)&&JSON.stringify(i.filter),n=JSON.stringify(this.timeExtent);let l="";return this._visibilityOverrides.forEach((e=>l+=e)),`${r}.${s}.${a}.${n}.${l}`}get hasFilter(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length);return !!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(e){const t=request.r(e)?e.timeExtent:null,i=request.r(this.timeExtent)&&request.r(t)?this.timeExtent.intersection(t):this.timeExtent||t;let r=null;const s="floorInfo"in this.layer&&this.layer.floorInfo;if(s){const t=request.r(e)&&e.where;r=this._addFloorFilterClause(t);}if(!this._visibilityOverrides.size&&!i&&!s)return request.r(e)?e.toJSON():null;(e=request.r(e)&&e.clone()||new request.y$17).timeExtent=i,r&&(e.where=r);const a=e.toJSON();return a.hiddenIds=Array.from(this._visibilityOverrides),a}_addFloorFilterClause(e){const t=this.layer;let i=e||"";if("floorInfo"in t&&t.floorInfo){var r;let e=this.view.floors;if(!e||!e.length)return i;null!=(r=t.floorInfo.viewAllLevelIds)&&r.length&&(e=t.floorInfo.viewAllLevelIds);const s=e.filter((e=>""!==e)).map((e=>"'"+e+"'"));s.push("''");const a=t.floorInfo.floorField;let n="("+a+" IN ({ids}) OR "+a+" IS NULL)";if(n=n.replace("{ids}",s.join(", ")),request.r(i)&&i.includes(a)){let e=new RegExp("AND \\("+a+".*NULL\\)","g");i=i.replace(e,""),e=new RegExp("\\("+a+".*NULL\\)","g"),i=i.replace(e,""),i=i.replace(/\s+/g," ").trim();}i=""!==i?"("+i+") AND "+n:n;}return ""!==i?i:null}_createConfiguration(e,t,i){const r="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s="feature"===this.layer.type?this.layer.gdbVersion:void 0,a=new Array(definitions.N),n=this._injectOverrides(t);a[0]=n,a[1]=request.r(i)&&request.r(i.filter)?i.filter.toJSON():null;const l=schemaUtils.M(e);if(request.t$2(l))return null;const o=request.o$8();return {definitionExpression:this.layer.definitionExpression,availableFields:this.availableFields,gdbVersion:s,historicMoment:r,devicePixelRatio:window.devicePixelRatio||1,filters:a,schema:l,supportsTextureFloat:o.supportsTextureFloat,maxTextureSize:o.maxTextureSize}}_hasRequiredSupport(e){var t;return !("renderer"in e&&"dot-density"===(null==(t=e.renderer)?void 0:t.type)&&!request.o$8().supportsTextureFloat)||(K.error(new request.s$3("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1)}_onceTilesUpdated(){return this.requestUpdate(),request.g(this,"_pipelineIsUpdating",!1)}_lockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads());}_unlockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads());}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload();}_createSchemaConfig(){const e="feature"===this.layer.type?this.layer.historicMoment:null,t="feature"===this.layer.type?this.layer.gdbVersion:null;return {renderer:"renderer"in this.layer&&this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:e,labelsVisible:"labelsVisible"in this.layer&&this.layer.labelsVisible,labelingInfo:"labelingInfo"in this.layer&&this.layer.labelingInfo,availableFields:this.availableFields,featureEffect:this.featureEffect,filter:this.filter,gdbVersion:t,pixelBuffer:0,orderBy:"orderBy"in this.layer&&this.layer.orderBy?this.layer.orderBy:null,customParameters:{..."customParameters"in this.layer?this.layer.customParameters:void 0,token:"apiKey"in this.layer?this.layer.apiKey:void 0}}}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1);}else this._highlightIds.set(t,1);this._updateHighlight().catch((e=>{request.d$2(e)||K.error(e);}));}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e);}this._updateHighlight().catch((e=>{request.d$2(e)||K.error(e);}));}_setLayersForFeature(e){const t=this.layer;e.layer=t,e.sourceLayer=t;}_createHittestResult(e){return this._setLayersForFeature(e),request.r(e.geometry)&&(e.geometry.spatialReference=this.view.spatialReference),e}async _hitTest(e,r){if(this.suspended||!this.tileRenderer)return null;const s=await this.tileRenderer.hitTest(e,r);if(0===s.length)return await request.L$1(1),null;const a=s[0];if(!G(a)){const e=await this._proxy.getFeature(a);return request.E$2(e,(e=>this._createHittestResult(request.h$2.fromJSON(e))))}const n=await this._proxy.getAggregate(a);if(request.t$2(n))return null;if(request.r(n.referenceId)){const e=await this._proxy.getFeature(n.referenceId);return request.E$2(e,(e=>this._createHittestResult(request.h$2.fromJSON(e))))}return this._createHittestResult(c$2.fromJSON(n))}};request.e([request.d()],W.prototype,"_serviceOptions",void 0),request.e([request.d()],W.prototype,"_proxy",void 0),request.e([request.d()],W.prototype,"_pipelineIsUpdating",void 0),request.e([request.d()],W.prototype,"_effectiveRenderer",void 0),request.e([request.d()],W.prototype,"_aggregateValueRanges",void 0),request.e([request.d()],W.prototype,"_commandsQueue",void 0),request.e([request.d()],W.prototype,"labelsVisible",null),request.e([request.d({readOnly:!0})],W.prototype,"queryMode",null),request.e([request.d()],W.prototype,"renderingConfigHash",null),request.e([request.d()],W.prototype,"tileRenderer",void 0),request.e([request.d()],W.prototype,"updating",void 0),W=request.e([request.i("esri.views.2d.layers.FeatureLayerView2D")],W);const X=W;

exports.default = X;
