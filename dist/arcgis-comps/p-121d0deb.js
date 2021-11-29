import{e as t,d as e,i as s,aL as i,p as r,dm as n,hQ as a,B as h,ht as o,cN as u,dk as l,eF as c,hR as d,r as f,T as p,hS as y,hT as m,ch as g,Q as w,Z as b,hU as v,hV as F,br as _,g$ as q,fH as E,b4 as x,hW as S,hX as I,hY as R,hZ as j,h_ as O,h$ as P,i0 as C,t as T,b as V,i1 as N,b5 as A,eG as $,w as U,S as L,cJ as M,o as H,hn as D,bV as k,bs as B,l as J,a as z,ef as Q,b6 as G,bz as K}from"./p-5420851c.js";import{r as W}from"./p-4c6040da.js";import{s as Z}from"./p-bdb8e9d6.js";import{N as X}from"./p-47e1bd73.js";import{l as Y,u as tt}from"./p-e4db8bd2.js";import{e as et,a as st,b as it,f as rt,m as nt,i as at,M as ht}from"./p-baad017f.js";import{d as ot,t as ut}from"./p-cc74fdc8.js";import{o as lt}from"./p-03d6250d.js";import{i as ct}from"./p-8dd46af5.js";import{a as dt}from"./p-4dafedac.js";import"./p-53bb6ab4.js";import"./p-e2fe661c.js";import"./p-54db165f.js";import"./p-4d140ee3.js";import"./p-13d3a443.js";import"./p-6189adb6.js";import"./p-ba8c567b.js";import"./p-2d0c34e5.js";import"./p-b392deaf.js";import"./p-9790d1b4.js";import"./p-7e5e535f.js";import"./p-9047f753.js";import"./p-8bf8e457.js";import"./p-4d0ba4c4.js";import"./p-e991a11e.js";var ft;let pt=ft=class extends i{constructor(){super(...arguments),this.isAggregate=!0}getEffectivePopupTemplate(t=!1){if(this.popupTemplate)return this.popupTemplate;const e=this.sourceLayer&&this.sourceLayer.featureReduction;return e&&"popupTemplate"in e&&e.popupEnabled?e.popupTemplate:null}getObjectId(){return this.objectId}clone(){return new ft({objectId:this.objectId,...this.cloneProperties()})}};t([e({type:Boolean})],pt.prototype,"isAggregate",void 0),t([e({type:Number,json:{read:!0}})],pt.prototype,"objectId",void 0),pt=ft=t([s("esri.AggregateGraphic")],pt);const yt=pt;function mt(t){return t.some((t=>t.globalId))}function gt(t){return t.filter((t=>!t.error)).map((t=>{var e;return null!=(e=t.objectId)?e:t.globalId}))}function wt(t,e){const s=new Set(t);for(const t of e.values())s.add(t);return s}function bt(t,e){const s=new Set(t);for(const t of e.values())s.delete(t);return s}let vt=class extends r{constructor(t){super(),this._hasGlobalIds=!1,this._queueProcessor=new n({concurrency:1,process:t.process})}destroy(){this._queueProcessor.clear()}get updating(){return this._queueProcessor.length>0}push(t){const e=this._queueProcessor,s=e.last();switch(t.type){case"update":case"refresh":if((null==s?void 0:s.type)===t.type)return;e.push(t).finally((()=>this.notifyChange("updating")));break;case"edit":{const i="processed-edit"===(null==s?void 0:s.type)?s:null;i&&e.popLast();const r=this._mergeEdits(i,t);for(const t of r)e.push(t).finally((()=>this.notifyChange("updating")));break}}this.notifyChange("updating")}_mergeEdits(t,e){var s,i;const{addedFeatures:r,deletedFeatures:n,updatedFeatures:a}=e.edits;if(this._hasGlobalIds=this._hasGlobalIds||mt(r)||mt(a)||mt(n),this._hasGlobalIds)return[t,{type:"processed-edit",edits:{addOrModified:[...r,...a],removed:n}}];const h=new Set(gt(null!=(s=null==t?void 0:t.edits.addOrModified)?s:[])),o=new Set(gt(null!=(i=null==t?void 0:t.edits.removed)?i:[])),u=new Set([...gt(r),...gt(a)]),l=new Set(gt(n));return[{type:"processed-edit",edits:{addOrModified:Array.from(wt(bt(h,l),u)).map((t=>({objectId:t}))),removed:Array.from(wt(bt(o,u),l)).map((t=>({objectId:t})))}}]}};t([e({readOnly:!0})],vt.prototype,"updating",null),vt=t([s("esri.views.2d.layers.support.FeatureCommandQueue")],vt);const Ft=vt;let _t=class extends a{constructor(t){super(t),this._startupResolver=h(),this.isReady=!1}initialize(){this._controller=new AbortController,this.addResolvingPromise(this._startWorker(this._controller.signal))}destroy(){this._controller.abort(),this._connection&&this._connection.close()}set tileRenderer(t){this.client.tileRenderer=t}get closed(){return this._connection.closed}async startup(t,e,s,i){await this.when();const r=this._controller.signal,n=function(t){return Array.isArray(t)}(s.source)?{transferList:s.source,signal:r}:void 0,a={service:s,config:e,tileInfo:t.tileInfo.toJSON(),tiles:i};await this._connection.invoke("startup",a,n),this._startupResolver.resolve(),this._set("isReady",!0)}async updateTiles(t){return await this._startupResolver.promise,o(this._connection.invoke("updateTiles",t))}async update(t){const e={config:t};return await this._startupResolver.promise,this._connection.invoke("update",e)}async applyUpdate(t){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",t)}async setHighlight(t){return await this._startupResolver.promise,o(this._connection.invoke("controller.setHighlight",t))}async refresh(){return await this._startupResolver.promise,o(this._connection.invoke("controller.refresh"))}async querySummaryStatistics(t,e,s){return await this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:t.toJSON(),params:e},s)}async queryUniqueValues(t,e,s){return await this._startupResolver.promise,this._connection.invoke("controller.queryUniqueValues",{query:t.toJSON(),params:e},s)}async queryClassBreaks(t,e,s){return await this._startupResolver.promise,this._connection.invoke("controller.queryClassBreaks",{query:t.toJSON(),params:e},s)}async queryFeatures(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",t.toJSON(),e)}async queryObjectIds(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",t.toJSON(),e)}async queryFeatureCount(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",t.toJSON(),e)}async queryExtent(t,e){return this._connection.invoke("controller.queryExtent",t.toJSON(),e)}async queryLatestObservations(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",t.toJSON(),e)}async queryStatistics(t){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",t)}async getObjectId(t){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",t)}async getDisplayId(t){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",t)}async getFeature(t){return await this._startupResolver.promise,this._connection.invoke("controller.getFeature",t)}async getAggregate(t){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregate",t)}async getAggregates(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregates")}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(t){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",t)}async onEdits(t){return await this._startupResolver.promise,o(this._connection.invoke("controller.onEdits",t))}async enableEvent(t,e){return await this._startupResolver.promise,o(this._connection.invoke("controller.enableEvent",{name:t,value:e}))}async _startWorker(t){try{this._connection=await u("Pipeline",{client:this.client,strategy:"dedicated",signal:t})}catch(t){l(t)}}};t([e()],_t.prototype,"isReady",void 0),t([e()],_t.prototype,"client",void 0),t([e()],_t.prototype,"tileRenderer",null),_t=t([s("esri.views.2d.layers.support.FeatureLayerProxy")],_t);const qt=_t;class Et{constructor(t){this._tiles=new Map,this.buffer=0,this.acquireTile=t.acquireTile,this.releaseTile=t.releaseTile,this.tileInfoView=t.tileInfoView,this.buffer=t.buffer}destroy(){}clear(){this._tiles.forEach((t=>this._releaseTile(t)))}tileKeys(){const t=[];return this._tiles.forEach(((e,s)=>t.push(s))),t}update(t){const e=this.tileInfoView.getTileCoverage(t.state,this.buffer,"closest"),{spans:s,lodInfo:i}=e,{level:r}=i,n=[],a=[],h=new Set,o=new Set;for(const{row:t,colFrom:e,colTo:a}of s)for(let s=e;s<=a;s++){const e=c.getId(r,t,i.normalizeCol(s),i.getWorldForColumn(s)),a=this._getOrAcquireTile(n,e);h.add(e),a.isReady?a.visible=!0:o.add(a.key)}return o.forEach((t=>this._addPlaceholders(h,t))),this._tiles.forEach((t=>{h.has(t.key.id)||(a.push(t.key.id),this._releaseTile(t))})),d.pool.release(e),{hasMissingTiles:o.size>0,added:n,removed:a}}_getOrAcquireTile(t,e){if(!this._tiles.has(e)){const s=this.acquireTile(new c(e));t.push(e),this._tiles.set(e,s),s.visible=!1}return this._tiles.get(e)}_getTile(t){return this._tiles.get(t)}_releaseTile(t){this._tiles.delete(t.key.id),this.releaseTile(t)}_addPlaceholders(t,e){const s=this._addPlaceholderChildren(t,e);Math.abs(1-s)<1e-6||this._addPlaceholderParent(t,e)||(this._getTile(e.id).visible=!0)}_addPlaceholderChildren(t,e){let s=0;return this._tiles.forEach((i=>{s+=this._addPlaceholderChild(t,i,e)})),s}_addPlaceholderChild(t,e,s){return e.key.level<=s.level||!e.hasData||!s.contains(e.key)?0:(e.visible=!0,t.add(e.key.id),1/(1<<2*(e.key.level-s.level)))}_addPlaceholderParent(t,e){let s=e.getParentKey(),i=0,r=null;for(;f(s);){if(t.has(s.id))return!0;const e=this._getTile(s.id);if(null!=e&&e.isReady)return e.visible=!0,t.add(e.key.id),!0;null!=e&&e.hasData&&e.patchCount>i&&(i=e.patchCount,r=e),s=s.getParentKey()}return!!r&&(r.visible=!0,t.add(r.key.id),!0)}}const xt=p.getLogger("esri.views.layers.FeatureLayerView"),St=i=>{let r=class extends i{constructor(...t){super(...t),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){w(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","featureEffect","layer.timeInfo","layer.floorInfo","timeExtent"],(()=>this._handleRequiredFieldsChange()),!0),b(this,"view.floors","change",(()=>this._handleRequiredFieldsChange())),b(this,"layer.sublayer","change",(()=>this._handleRequiredFieldsChange()))}get availableFields(){const{layer:t,layer:{fieldsIndex:e},requiredFields:s}=this;return v(e,"outFields"in t&&t.outFields?[...F(e,t.outFields),...s]:s)}set effect(t){_(xt,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect=t}get effect(){return _(xt,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(t){void 0!==t?this._override("featureEffect",t):this._clearOverride("featureEffect")}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(t){xt.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(t){throw new Error("missing implementation")}createQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},e=f(this.filter)?this.filter.createQuery(t):new q(t);if("feature"===this.layer.type){const t=lt(this);f(t)&&(e.where=e.where?`(${e.where}) AND (${t})`:t)}return f(this.timeExtent)&&(e.timeExtent=f(e.timeExtent)?e.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),e}queryFeatures(t,e){throw new Error("missing implementation")}queryObjectIds(t,e){throw new Error("missing implementation")}queryFeatureCount(t,e){throw new Error("missing implementation")}queryExtent(t,e){throw new Error("missing implementation")}_loadArcadeModules(t){if(t.get("expressionInfos.length"))return E()}_handleRequiredFieldsChange(){const t=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",t),t.then((()=>{this._updatingRequiredFieldsPromise===t&&this._set("_updatingRequiredFieldsPromise",null)}))}async _updateRequiredFields(){if(!this.layer||!this.view)return;const t="3d"===this.view.type,{layer:e,layer:{fieldsIndex:s,objectIdField:i}}=this,r="renderer"in e&&e.renderer,n="orderBy"in e&&e.orderBy,a=e.featureReduction,h=new Set,o=await x([r?r.collectRequiredFields(h,s):null,S(h,e),t?I(h,e):null,f(this.filter)?R(h,e,this.filter):null,f(this.featureEffect)?R(h,e,this.featureEffect.filter):null,a?j(h,e,a):null,n?O(h,e,n):null]);if(e.timeInfo&&this.timeExtent&&P(h,e.fieldsIndex,[e.timeInfo.startField,e.timeInfo.endField]),"feature"===e.type&&e.floorInfo&&P(h,e.fieldsIndex,[e.floorInfo.floorField]),"subtype-group"===e.type){C(h,s,e.subtypeField);const t=e.sublayers.map((t=>{var e;return Promise.all([null==(e=t.renderer)?void 0:e.collectRequiredFields(h,s),S(h,t)])}));await x(t)}for(const t of o)t.error&&xt.error(t.error);C(h,s,i),t&&"displayField"in e&&e.displayField&&C(h,s,e.displayField);const u=Array.from(h).sort();this._set("requiredFields",u)}validateFetchPopupFeatures(t){if(T(t))return null;for(const e of t.clientGraphics){const s=e.layer;if("popupEnabled"in s&&!s.popupEnabled)return new V("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:s});if("popupTemplate"in s&&!ot(s,t))return new V("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:s})}}async fetchClientPopupFeatures(t){const e=f(t)?t.clientGraphics:null;if(!e||0===e.length)return Promise.resolve([]);const s=[],i=[],r=await this.createPopupQuery(t);for(const n of e){const{layer:e}=n;if(!("popupEnabled"in e))continue;const a=F(this.layer.fieldsIndex,r.outFields),h=ot(e,t);if(!f(h))continue;const o=await this._loadArcadeModules(h);o&&o.arcadeUtils.hasGeometryOperations(h)||!N(a,n)?i.push(n):s.push(n)}return"stream"===this.layer.type||0===i.length?Promise.resolve(s):(r.objectIds=i.map((t=>t.attributes[this.layer.objectIdField])),this.layer.queryFeatures(r).then((t=>s.concat(t.features))).catch((()=>i)))}async createPopupQuery(t){const e=this.layer.createQuery(),s=new Set;let i=!1;const r=f(t)&&t.clientGraphics?t.clientGraphics.map((t=>t.layer)):[this.layer];for(const e of r){if(!("popupEnabled"in e))continue;const r=ot(e,t);if(!f(r))continue;const n=await this._loadArcadeModules(r),a=n&&n.arcadeUtils.hasGeometryOperations(r);i=!("point"!==this.layer.geometryType&&!a);const h=await ut(this.layer,r);for(const t of h)s.add(t)}if(e.returnGeometry=i,e.returnZ=i,e.returnM=i,e.outFields=Array.from(s),e.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const t=lt(this);f(t)&&(e.where=e.where?`(${e.where}) AND (${t})`:t)}return e}canResume(){return!(!super.canResume()||f(this.timeExtent)&&this.timeExtent.isEmpty)}};return t([e()],r.prototype,"_updatingRequiredFieldsPromise",void 0),t([e({readOnly:!0})],r.prototype,"availableFields",null),t([e()],r.prototype,"effect",null),t([e({type:y})],r.prototype,"featureEffect",null),t([e({type:m})],r.prototype,"filter",void 0),t([e(g)],r.prototype,"timeExtent",void 0),t([e()],r.prototype,"layer",void 0),t([e({type:Number})],r.prototype,"maximumNumberOfFeatures",null),t([e({readOnly:!0,type:Boolean})],r.prototype,"maximumNumberOfFeaturesExceeded",null),t([e({readOnly:!0})],r.prototype,"requiredFields",void 0),t([e()],r.prototype,"suspended",void 0),t([e()],r.prototype,"view",void 0),r=t([s("esri.views.layers.FeatureLayerView")],r),r};function It(t){return t&&"openPorts"in t}const Rt=p.getLogger("esri.views.2d.layers.FeatureLayerView2D");let jt=class extends(St(ct(Y(tt)))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._commandsQueue=new Ft({process:t=>{switch(t.type){case"processed-edit":return this._doEdit(t);case"refresh":return this._doRefresh();case"update":return this._doUpdate()}}}),this._visibilityOverrides=new Set,this._highlightIds=new Map,this._lastPixelBuffer=0,this._updateHighlight=A((async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys())))),this._uploadsLocked=!1,this._needsClusterSizeUpdate=!1,this.effectLists={included:new W,excluded:new W}}destroy(){var t,e;$(this._updateClusterSizeTask,(t=>t.remove())),null==(t=this._proxy)||t.destroy(),null==(e=this.tileRenderer)||e.destroy(),this._commandsQueue.destroy()}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",(t=>{this._set("_aggregateValueRanges",t.valueRanges)})),w(this,"featureEffect",(t=>{var e,s;this.effectLists.included.effect=U(null==(e=U(t))?void 0:e.includedEffect),this.effectLists.excluded.effect=U(null==(s=U(t))?void 0:s.excludedEffect)}))])}async _initProxy(){if("isTable"in this.layer&&this.layer.isTable)throw new V("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});this._proxy&&this._proxy.destroy();const t=this._createClientOptions();return this._set("_proxy",new qt({client:t})),this._proxy.when()}async _initServiceOptions(){this._set("_serviceOptions",await this._createServiceOptions())}get orderByFields(){return"stream"!==this._serviceOptions.type&&this._serviceOptions.orderByFields}get labelsVisible(){return!this.suspended&&("subtype-group"===this.layer.type?this.layer.sublayers.items:[this.layer]).some((t=>t.labelingInfo&&t.labelsVisible))}get queryMode(){return this._serviceOptions.type}get renderingConfigHash(){if(!this.layer)return null;const t=this.availableFields,e=this.layer,s=this.view.floors,{definitionExpression:i}=e,r="subtype-group"!==this.layer.type&&this.layer.labelsVisible&&this.layer.labelingInfo,n="renderer"in e&&e.renderer,a="feature"===e.type?e.gdbVersion:void 0,h="feature"===e.type&&e.historicMoment?e.historicMoment.getTime():void 0,{timeExtent:o}=this,u="customParameters"in e?JSON.stringify(e.customParameters):void 0,l="apiKey"in e?e.apiKey:void 0,c="stream"===e.type?`${JSON.stringify(e.geometryDefinition)}${e.definitionExpression}`:null,d=JSON.stringify(this.clips),p=e.featureReduction&&e.featureReduction.toJSON(),y="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),m="sublayers"in this.layer&&this.layer.sublayers.items.reduce(((t,e)=>t+`${e.visible?1:0}.${JSON.stringify(e.renderer)}.${e.labelsVisible}\n.${JSON.stringify(e.labelingInfo)}`),"");return JSON.stringify({orderBy:y,sublayerHash:m,filterHash:f(this.filter)&&this.filter.toJSON(),effectHash:f(this.featureEffect)&&this.featureEffect.toJSON(),streamFilter:c,gdbVersion:a,definitionExpression:i,historicMoment:h,availableFields:t,renderer:n,labelingInfo:r,timeExtent:o,floors:s,clipsHash:d,featureReduction:p,customParameters:u,apiKey:l})}get hasEffects(){return this.effectLists.included.hasEffects||this.effectLists.excluded.hasEffects}highlight(t){let e;return t instanceof i?e=[t.getObjectId()]:"number"==typeof t||"string"==typeof t?e=[t]:L.isCollection(t)?e=t.map((t=>t&&t.getAttribute(this.layer.objectIdField))).toArray():Array.isArray(t)&&t.length>0&&(e="number"==typeof t[0]||"string"==typeof t[0]?t:t.map((t=>t&&t.getAttribute(this.layer.objectIdField)))),e&&e.length?(e=e.filter((t=>null!=t)),this._addHighlight(e),{remove:()=>this._removeHighlight(e)}):{remove:()=>{}}}hasHighlight(){return!!this._highlightIds.size}hitTest(t,e){return this._hitTest(t,e)}async queryAggregates(){return(await this._proxy.getAggregates()).map((t=>yt.fromJSON(t)))}queryStatistics(){return this._proxy.queryStatistics()}async querySummaryStatistics(t,e,s){const i={...e,scale:this.view.scale};return this._proxy.querySummaryStatistics(this._cleanUpQuery(t),i,s)}async queryUniqueValues(t,e,s){const i={...e,scale:this.view.scale};return this._proxy.queryUniqueValues(this._cleanUpQuery(t),i,s)}async queryClassBreaks(t,e,s){const i={...e,scale:this.view.scale};return this._proxy.queryClassBreaks(this._cleanUpQuery(t),i,s)}queryFeatures(t,e){return this.queryFeaturesJSON(t,e).then((t=>{const e=M.fromJSON(t);return e.features.forEach((t=>this._setLayersForFeature(t))),e}))}queryFeaturesJSON(t,e){return this._proxy.queryFeatures(this._cleanUpQuery(t),e)}queryObjectIds(t,e){return this._proxy.queryObjectIds(this._cleanUpQuery(t),e)}queryFeatureCount(t,e){return this._proxy.queryFeatureCount(this._cleanUpQuery(t),e)}queryExtent(t,e){return this._proxy.queryExtent(this._cleanUpQuery(t),e).then((t=>({count:t.count,extent:H.fromJSON(t.extent)})))}setVisibility(t,e){e?this._visibilityOverrides.delete(t):this._visibilityOverrides.add(t),this._update()}update(t){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:e,added:s,removed:i}=this._tileStrategy.update(t);(s.length||i.length)&&this._proxy.updateTiles({added:s,removed:i}),e&&this.requestUpdate(),this.notifyChange("updating")}attach(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new Et({acquireTile:t=>this._acquireTile(t),releaseTile:t=>this._releaseTile(t),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add(w(this,"renderingConfigHash",(()=>this._update())),"attach"),"stream"!==this.layer.type&&this.handles.add(this.layer.on("edits",(t=>this._edit(t))),"attach")}detach(){this.container.removeAllChildren(),this.handles.remove("attach"),this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}async fetchPopupFeatures(t,e){if(f(e)&&e.clientGraphics.length){const t=e.clientGraphics[0];if(t instanceof yt)return[t];e.clientGraphics=e.clientGraphics.filter((t=>{const{layer:e}=t;return"popupEnabled"in e&&e.popupEnabled&&("popupTemplate"in e&&e.popupTemplate||this.view.popup.defaultPopupTemplateEnabled)}))}const s=this.validateFetchPopupFeatures(e);if(s)throw s;if(f(e)&&0===e.clientGraphics.length)return[];const i=this.fetchClientPopupFeatures(e);if(!t)return i;const r=this._fetchServicePopupFeatures(t,e);return D([i,r]).then(k)}async _fetchServicePopupFeatures(t,e){if("stream"===this.layer.type||"ogc-feature"===this.layer.type)return[];const s=await this.createPopupQuery(e),{layer:i}=this,r="renderer"in i&&i.renderer,n=f(e)?e.event:null,a=Z({renderer:r,event:n});s.geometry=this.createFetchPopupFeaturesQueryGeometry(t,a);const h=new Set,{objectIdField:o}=i,u=f(e)?e.clientGraphics:null;if(u)for(const t of u)h.add(t.attributes[o]);return i.queryFeatures(s).then((t=>t.features.filter((t=>!h.has(t.attributes[o])))))}createFetchPopupFeaturesQueryGeometry(t,e){return dt(t,e,this.view)}isUpdating(){var t;const e="renderer"in this.layer&&null!=this.layer.renderer,s=this._commandsQueue.updating,i=null!=this._updatingRequiredFieldsPromise,r=!this._proxy||!this._proxy.isReady,n=this._pipelineIsUpdating,a=null===this.tileRenderer||(null==(t=this.tileRenderer)?void 0:t.updating),h=e&&(s||i||r||n||a);return B("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${h}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${s}\n  -> updatingRequiredFields ${i}\n  -> updatingProxy ${r}\n  -> updatingPipeline ${n}\n  -> updatingTileRenderer ${a}\n`),h}_createClientOptions(){return{setUpdating:t=>{this._set("_pipelineIsUpdating",t)},emitEvent:t=>{this.emit(t.name,t.event)}}}async _detectQueryMode(t){if("path"in t&&("feature"===this.layer.type||"subtype-group"===this.layer.type)&&"point"===this.layer.geometryType&&this.layer.capabilities.query.supportsPagination&&!this.layer.capabilities.operations.supportsEditing&&B("featurelayer-snapshot-enabled"))try{const t=await this.layer.queryFeatureCount();if(t<=B("featurelayer-snapshot-point-min-threshold"))return{mode:"snapshot",featureCount:t};const e=B("featurelayer-snapshot-point-max-threshold"),s=B("featurelayer-snapshot-point-coverage"),i=this.view.extent,r=U(this.layer.fullExtent),n=null==r?void 0:r.clone().intersection(i),a=f(n)?n.width*n.height:0,h=(null==r?void 0:r.width)*(null==r?void 0:r.height),o=0===h?0:a/h;if(t<=e&&o>=s)return{mode:"snapshot",featureCount:t}}catch(t){Rt.warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:t})}return{mode:"on-demand"}}async _createServiceOptions(){var t;const e=this.layer;if("stream"===e.type)return null;const{capabilities:s,objectIdField:i}=e,r=e.fields.map((t=>t.toJSON())),n=f(e.fullExtent)&&e.fullExtent.toJSON(),a=et(e.geometryType),h=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null,u="feature"===e.type?e.globalIdField:null;let l;"ogc-feature"===e.type?l=e.source.getFeatureDefinition():It(e.source)?l=await e.source.openPorts():e.parsedUrl&&(l=J(e.parsedUrl),"dynamicDataSource"in e&&e.dynamicDataSource&&(l.query={layer:JSON.stringify({source:e.dynamicDataSource})}));const c="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,d=null!=(t="subtypeField"in this.layer&&this.layer.subtypeField)?t:null,{mode:p,featureCount:y}=await this._detectQueryMode(l);let m=this.layer.objectIdField;if("feature"===this.layer.type&&f(this.layer.orderBy)&&this.layer.orderBy.length){const t=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field;t&&(m=t)}return{type:p,timeReferenceUnknownClient:c,subtypeField:d,featureCount:y,globalIdField:u,maxRecordCount:s.query.maxRecordCount,tileMaxRecordCount:s.query.tileMaxRecordCount,capabilities:s,fields:r,fullExtent:n,geometryType:a,objectIdField:i,source:l,timeInfo:h,spatialReference:o,orderByFields:m}}async _createMemoryServiceOptions(t){const e=await t.openPorts();return{...this._createServiceOptions(),type:"memory",source:e}}_cleanUpQuery(t){const e=q.from(t)||this.createQuery();return e.outSpatialReference||(e.outSpatialReference=this.view.spatialReference),e}async _update(){return this._commandsQueue.push({type:"update"})}async _edit(t){if(this._validateEdit(t))return this._commandsQueue.push({type:"edit",edits:t})}async doRefresh(){return this._commandsQueue.push({type:"refresh"})}_validateEdit(t){const e="globalIdField"in this.layer&&this.layer.globalIdField,s=t.deletedFeatures.some((t=>-1===t.objectId||!t.objectId)),i=e&&this.availableFields.includes(e);return s&&!i?(Rt.error(new V("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${e} to be included the layer's outFields for updates to be reflected on the map`)),null):t}async _doUpdate(){try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return;const{featureEffect:t,filter:e}=this;await this._updateRequiredFields();const{renderer:s}=this._getEffectiveRenderer();this._set("_effectiveRenderer",s);const i=this._createSchemaConfig(),r=et(this.layer.geometryType),n=await st(s,r,this.container.stage.resourceManager,this.layer.fields,this.layer.spatialReference,this.layer.featureReduction),a=this._createConfiguration(i,e,t);this._lastPixelBuffer=0===n?0:Math.max(n,this._lastPixelBuffer),a.schema.source.pixelBuffer=this._lastPixelBuffer;const h=this._createTileRendererHash(s);if(h!==this._tileRendererHash){await this._initTileRenderer(s);const t=this._serviceOptions;this.tileRenderer.onConfigUpdate(s);const e={added:this._tileStrategy.tileKeys(),removed:[]},i=this.layer;"stream"!==i.type&&It(i.source)&&(t.source=await i.source.openPorts()),"stream"===i.type&&await this._initServiceOptions(),await this._proxy.startup(this.view.featuresTilingScheme,a,t,e),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(s)}else{const t=await this._proxy.update(a);(t.mesh||t.targets.aggregate)&&this._lockGPUUploads();try{await this._proxy.applyUpdate(t)}catch(t){z(t)||Rt.error(t)}(t.mesh||t.targets.aggregate)&&this._unlockGPUUploads(),this.tileRenderer.onConfigUpdate(s),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload()}this._tileRendererHash=h,this.tileRenderer.invalidateLabels(),this.requestUpdate()}catch(t){}}async _doEdit(t){try{await this._proxy.onEdits(t)}catch(t){}}async _doRefresh(){this._lockGPUUploads();try{await this._proxy.refresh()}catch(t){}this._unlockGPUUploads()}_updateClusterSizeVariable(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1)}_createUpdateClusterSizeTask(t,e){return this.watch("_aggregateValueRanges",(async s=>{this._updateClusterEffectiveRendererSizeVariable(t,e,s),this._needsClusterSizeUpdate=!0,this._uploadsLocked||this._updateClusterSizeVariable()}))}async _updateClusterEffectiveRendererSizeVariable(t,e,s){if(t.dynamicClusterSize&&"visualVariables"in t&&t.visualVariables){const i=it(t.visualVariables);if(f(i)&&"cluster_count"===i.field){const r=t.visualVariables.indexOf(i);t.visualVariables[r]=rt(e,s);const n=t.clone();n.dynamicClusterSize=!0,this._set("_effectiveRenderer",n)}}}_getEffectiveRenderer(){const t="renderer"in this.layer&&this.layer.renderer,e=this.layer.featureReduction;if(f(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),e&&"cluster"===e.type&&nt(t)){const s=e,i=[],r=at(i,t,s,this._aggregateValueRanges);return $(this._updateClusterSizeTask,(t=>t.remove())),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(r,s),{renderer:r,aggregateFields:i,featureReduction:e}}return{renderer:t,aggregateFields:[],featureReduction:null}}_acquireTile(t){const e=this.tileRenderer.acquireTile(t);return e.once("attach",(()=>{this.requestUpdate()})),e}_releaseTile(t){this.tileRenderer.releaseTile(t)}async _initTileRenderer(t){const e=await async function(t,e){if(!t)return null;switch(t.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return new((await import("./p-7a034a69.js")).default)(e);case"heatmap":return new((await import("./p-ab58d22b.js")).default)(e)}}(t,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=e,this._set("tileRenderer",e),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(t),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(t){return`${"heatmap"===t.type?"heatmap":"symbol"}.${"dot-density"===t.type}`}_createFeatureDataHash(t,e,s){const i=t.getAttributeHash(),r=JSON.stringify(e),n=f(s)&&JSON.stringify(s.filter),a=JSON.stringify(this.timeExtent);let h="";return this._visibilityOverrides.forEach((t=>h+=t)),`${i}.${r}.${n}.${a}.${h}`}get hasFilter(){return!!(this.filter||"floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length||this._visibilityOverrides.size||this.timeExtent)}_injectOverrides(t){const e=f(t)?t.timeExtent:null,s=f(this.timeExtent)&&f(e)?this.timeExtent.intersection(e):this.timeExtent||e;let i=null;const r="floorInfo"in this.layer&&this.layer.floorInfo;if(r){const e=f(t)&&t.where;i=this._addFloorFilterClause(e)}if(!this._visibilityOverrides.size&&!s&&!r)return f(t)?t.toJSON():null;(t=f(t)&&t.clone()||new m).timeExtent=s,i&&(t.where=i);const n=t.toJSON();return n.hiddenIds=Array.from(this._visibilityOverrides),n}_addFloorFilterClause(t){const e=this.layer;let s=t||"";if("floorInfo"in e&&e.floorInfo){var i;let t=this.view.floors;if(!t||!t.length)return s;null!=(i=e.floorInfo.viewAllLevelIds)&&i.length&&(t=e.floorInfo.viewAllLevelIds);const r=t.filter((t=>""!==t)).map((t=>"'"+t+"'"));r.push("''");const n=e.floorInfo.floorField;let a="("+n+" IN ({ids}) OR "+n+" IS NULL)";if(a=a.replace("{ids}",r.join(", ")),f(s)&&s.includes(n)){let t=new RegExp("AND \\("+n+".*NULL\\)","g");s=s.replace(t,""),t=new RegExp("\\("+n+".*NULL\\)","g"),s=s.replace(t,""),s=s.replace(/\s+/g," ").trim()}s=""!==s?"("+s+") AND "+a:a}return""!==s?s:null}_createConfiguration(t,e,s){const i="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,r="feature"===this.layer.type?this.layer.gdbVersion:void 0,n=new Array(X),a=this._injectOverrides(e);n[0]=a,n[1]=f(s)&&f(s.filter)?s.filter.toJSON():null;const h=ht(t);if(T(h))return null;const o=Q();return{definitionExpression:this.layer.definitionExpression,availableFields:this.availableFields,gdbVersion:r,historicMoment:i,devicePixelRatio:window.devicePixelRatio||1,filters:n,schema:h,supportsTextureFloat:o.supportsTextureFloat,maxTextureSize:o.maxTextureSize}}_hasRequiredSupport(t){var e;return!("renderer"in t&&"dot-density"===(null==(e=t.renderer)?void 0:e.type)&&!Q().supportsTextureFloat&&(Rt.error(new V("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),1))}_onceTilesUpdated(){return this.requestUpdate(),G(this,"_pipelineIsUpdating",!1)}_lockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads())}_unlockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads())}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload()}_createSchemaConfig(){return{renderer:"renderer"in this.layer&&this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:"feature"===this.layer.type?this.layer.historicMoment:null,labelsVisible:"labelsVisible"in this.layer&&this.layer.labelsVisible,labelingInfo:"labelingInfo"in this.layer&&this.layer.labelingInfo,availableFields:this.availableFields,featureEffect:this.featureEffect,filter:this.filter,gdbVersion:"feature"===this.layer.type?this.layer.gdbVersion:null,pixelBuffer:0,orderBy:"orderBy"in this.layer&&this.layer.orderBy?this.layer.orderBy:null,customParameters:{..."customParameters"in this.layer?this.layer.customParameters:void 0,token:"apiKey"in this.layer?this.layer.apiKey:void 0}}}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e);this._highlightIds.set(e,t+1)}else this._highlightIds.set(e,1);this._updateHighlight().catch((t=>{z(t)||Rt.error(t)}))}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e)-1;0===t?this._highlightIds.delete(e):this._highlightIds.set(e,t)}this._updateHighlight().catch((t=>{z(t)||Rt.error(t)}))}_setLayersForFeature(t){const e=this.layer;t.layer=e,t.sourceLayer=e}_createHittestResult(t){return this._setLayersForFeature(t),f(t.geometry)&&(t.geometry.spatialReference=this.view.spatialReference),t}async _hitTest(t,e){if(this.suspended||!this.tileRenderer)return null;const s=await this.tileRenderer.hitTest(t,e);if(0===s.length)return await K(1),null;const r=s[0];if(!(t=>(2147483648&t)>>>31==1)(r)){const t=await this._proxy.getFeature(r);return $(t,(t=>this._createHittestResult(i.fromJSON(t))))}const n=await this._proxy.getAggregate(r);if(T(n))return null;if(f(n.referenceId)){const t=await this._proxy.getFeature(n.referenceId);return $(t,(t=>this._createHittestResult(i.fromJSON(t))))}return this._createHittestResult(yt.fromJSON(n))}};t([e()],jt.prototype,"_serviceOptions",void 0),t([e()],jt.prototype,"_proxy",void 0),t([e()],jt.prototype,"_pipelineIsUpdating",void 0),t([e()],jt.prototype,"_effectiveRenderer",void 0),t([e()],jt.prototype,"_aggregateValueRanges",void 0),t([e()],jt.prototype,"_commandsQueue",void 0),t([e()],jt.prototype,"labelsVisible",null),t([e({readOnly:!0})],jt.prototype,"queryMode",null),t([e()],jt.prototype,"renderingConfigHash",null),t([e()],jt.prototype,"tileRenderer",void 0),t([e()],jt.prototype,"updating",void 0),jt=t([s("esri.views.2d.layers.FeatureLayerView2D")],jt);const Ot=jt;export default Ot;