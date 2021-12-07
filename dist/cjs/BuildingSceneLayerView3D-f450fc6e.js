'use strict';

const request = require('./messageBundle-8be88d04.js');
const Graphic = require('./Graphic-0aff6059.js');
require('./BuildingGroupSublayer-cd5d028e.js');
const WhereClause = require('./WhereClause-f1cc2353.js');
require('./BuildingComponentSublayer-0ed854cd.js');
const labelingInfo = require('./labelingInfo-594911d5.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const Query = require('./Query-354911d3.js');
const HandleOwner = require('./HandleOwner-9c4c158c.js');
const Identifiable = require('./Identifiable-a4f50f85.js');
const I3SMeshView3D = require('./I3SMeshView3D-a9516b3e.js');
const vec4f64 = require('./vec4f64-d3fa6cd2.js');
const LayerView3D = require('./LayerView3D-d92910a3.js');
const I3SQueryFeatureStore = require('./I3SQueryFeatureStore-ccdf68c4.js');
const I3SUtil = require('./I3SUtil-25befd00.js');
const DefinitionExpressionSceneLayerView = require('./DefinitionExpressionSceneLayerView-342d7621.js');
const popupUtils = require('./popupUtils-454e6531.js');
const Scheduler = require('./Scheduler-72cbcf2a.js');
const arcgisWebscene_entry = require('./arcgis-webscene-5e838aea.js');
const LayerView = require('./LayerView-2bc30c9f.js');
require('./index-fde8502c.js');
require('./geometry-ef17530a.js');
require('./PopupTemplate-a0b855f8.js');
require('./enumeration-f235fe07.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./jsonUtils-b6068079.js');
require('./loadAll-e25ec3d0.js');
require('./asyncUtils-cd78b718.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./ColorStop-ce63948c.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./jsonUtils-fc4080da.js');
require('./FeatureLayer-68e51b64.js');
require('./MultiOriginJSONSupport-77ac451b.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./HeightModelInfo-06fd3d80.js');
require('./Layer-31cde361.js');
require('./workers-bde9fe32.js');
require('./queryZScale-d48be112.js');
require('./zscale-25ef55f0.js');
require('./FeatureSet-8efc5965.js');
require('./APIKeyMixin-77c99036.js');
require('./ArcGISService-56d7a630.js');
require('./arcgisLayerUrl-5174d661.js');
require('./BlendLayer-6a2ab430.js');
require('./mat4-f68486bc.js');
require('./CustomParametersMixin-996a5732.js');
require('./OperationalLayer-853649aa.js');
require('./TimeExtent-8b558884.js');
require('./ElevationInfo-d3e3d64f.js');
require('./OrderedLayer-8690aaf5.js');
require('./PortalLayer-7556e594.js');
require('./PortalItem-8bcd02f8.js');
require('./RefreshableLayer-487bd7b3.js');
require('./ScaleRangeLayer-5320a5ba.js');
require('./TemporalLayer-06f08bdd.js');
require('./TimeInfo-050c5617.js');
require('./FeatureType-d8b81062.js');
require('./fieldProperties-c9dd6469.js');
require('./FieldsIndex-664af19b.js');
require('./LabelClass-4b91d60e.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');
require('./LayerFloorInfo-c56fa764.js');
require('./styleUtils-536b017f.js');
require('./TopFeaturesQuery-92caa731.js');
require('./popupUtils-7a76fb7d.js');
require('./capabilities-61a37c22.js');
require('./I3SIndexInfo-7e127a6f.js');
require('./I3SLayerDefinitions-b8d36b66.js');
require('./reactiveUtils-ef5dccea.js');
require('./mat3-1d3e0d51.js');
require('./DefaultUI-75d05512.js');
require('./Basemap-81280554.js');
require('./writeUtils-7bdc195a.js');
require('./compilerUtils-56e51ed2.js');
require('./CollectionFlattener-bc4cde45.js');
require('./basemapUtils-dc86a6ad.js');
require('./TablesMixin-d3e0d4c7.js');
require('./GraphicsCollection-d70ae8cb.js');
require('./screenUtils-e9e44bb6.js');
require('./executeQueryJSON-3f84e897.js');
require('./utils-8a0a0870.js');
require('./query-0e394548.js');
require('./normalizeUtils-a793b472.js');
require('./pbfQueryUtils-49e071a8.js');
require('./pbf-dc87045b.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./Heading-d7c5e432.js');
require('./widget-b8f4aeaf.js');
require('./QueryTask-3b24eec5.js');
require('./featureConversionUtils-df21e951.js');
require('./Task-95a3fa39.js');
require('./utils-71e85012.js');
require('./ItemCache-149fdb6e.js');
require('./utils-fb318f28.js');
require('./Queue-1713f2e9.js');
require('./layerViewUtils-96bae70b.js');
require('./GoTo-be01affb.js');
require('./accessibleHandler-652e5d90.js');
require('./vmEvent-9b257013.js');
require('./heightModelInfoUtils-9cedab45.js');
require('./Viewpoint-bbe11330.js');
require('./mathUtils-87b1f941.js');
require('./mat2d-2d5fae3e.js');
require('./mat2df32-85bf8b84.js');
require('./mat2df64-e9760778.js');
require('./vec2-d000a8cb.js');
require('./vec2f32-29a5eecf.js');
require('./vec2f64-60b3c97e.js');
require('./capabilities-76889198.js');
require('./mat4f64-fc3339e5.js');
require('./projection-b19710fa.js');
require('./geodesicConstants-047d586a.js');
require('./I3SAttributeOverrides-6eecd9fc.js');
require('./dehydratedFeatures-a58f1b86.js');
require('./byteSizeEstimations-d2f2ce40.js');
require('./quantizationUtils-d1d9c03e.js');
require('./I3SBinaryReader-a8426e2d.js');
require('./objectResourceUtils-58283911.js');
require('./devEnvironmentUtils-aafb5541.js');
require('./quatf64-e7a7f39e.js');
require('./BufferView-b78db189.js');
require('./vec33-1fc512be.js');
require('./DefaultMaterial_COLOR_GAMMA-1f86519d.js');
require('./types-bcd9caf5.js');
require('./Version-55b8a4e7.js');
require('./quat-17613ceb.js');
require('./geometryDataUtils-0be35629.js');
require('./vectorStacks-f48a010a.js');
require('./lineSegment-a86bf7bd.js');
require('./OrderIndependentTransparency-866eb67c.js');
require('./Texture-16b1a373.js');
require('./vec3f32-5485293e.js');
require('./sphere-ef7f801f.js');
require('./Texture-95d9d662.js');
require('./FramebufferObject-435e1736.js');
require('./Util-5c6af8a4.js');
require('./utils-2d48ea24.js');
require('./doublePrecisionUtils-26ddcbaf.js');
require('./InterleavedLayout-4132788d.js');
require('./ColorMaterial-61b9182b.js');
require('./intersectorUtils-0e8a6b4b.js');
require('./boundedPlane-f1094694.js');
require('./plane-0816c6c9.js');
require('./floatRGBA-aa45f7cb.js');
require('./triangulationUtils-15ab4328.js');
require('./earcut-d5562923.js');
require('./deduplicate-91c52f8d.js');
require('./glUtil-9df223c0.js');
require('./Viewing-63d00d8f.js');
require('./TileInfo-83a1d8a2.js');
require('./SceneModification-3ee9cfd2.js');
require('./persistable-288135cc.js');
require('./multiOriginJSONSupportUtils-13e8b6cf.js');
require('./Graphics3DScaleVisibility-7783d850.js');
require('./rendererConversion-536e1699.js');
require('./optimizedFeatureQueryEngineAdapter-32c6c975.js');
require('./centroid-d874c2ee.js');
require('./PooledRBush-793d5c9f.js');
require('./quickselect-d3f68f5a.js');
require('./WorkerHandle-fc87c5d8.js');
require('./SceneLayerWorker-e6ca03e3.js');
require('./attributeUtils-1a80ac17.js');
require('./callExpressionWithFeature-7cea2968.js');
require('./MeshComponent-0dd8a7d1.js');
require('./screenshotUtils-176d2414.js');
require('./projection-ea955486.js');
require('./QueryEngine-d6177b5a.js');
require('./projectionSupport-7159f0ef.js');
require('./json-2c41fbe0.js');
require('./QueryEngineCapabilities-15e8d907.js');
require('./utils-16feefb0.js');
require('./ClassBreaksDefinition-fc75df48.js');
require('./spatialQuerySupport-16372b87.js');
require('./quatf32-43352942.js');
require('./debugFlags-5e6b0151.js');
require('./originUtils-fc18d7d8.js');
require('./saveUtils-a37d456e.js');
require('./resourceUtils-c2de819b.js');
require('./scaleUtils-5c377ab3.js');
require('./Thumbnail-7b462034.js');
require('./ElevationSampler-dbeef858.js');
require('./CameraSpace.glsl-44d7b3f4.js');
require('./RenderingContext-237f69ae.js');
require('./labelFormatUtils-c70b3fbf.js');
require('./vec4f32-284fd490.js');
require('./geometryServiceUtils-8e2c66dc.js');
require('./project-dab29fc8.js');
require('./LercDecoder-b90fa97a.js');
require('./VectorTile-5dc9d0a7.js');
require('./config-1b750faa.js');
require('./TiledDisplayObject-0701494f.js');
require('./DisplayObject-573912c8.js');
require('./TileKey-d800cfb2.js');
require('./rasterUtils-a4c646c4.js');
require('./EdgeProcessingWorker-c3368d81.js');
require('./hitTestSelectUtils-9a744d46.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l$1=(l,n)=>{let u=class extends(request.n(HandleOwner.a(Identifiable.r(request.n$2.EventedMixin(l))))){constructor(e){super(e),this.sublayer=null,this.parent=null,this.view=null;}initialize(){}get suspended(){return !this.canResume()}get updating(){return !this.suspended&&this.isUpdating()}get visible(){return !0===this.get("sublayer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible");}get fullOpacity(){const e=e=>null!=e?e:1;return e(this.get("sublayer.opacity"))*e(this.get("parent.fullOpacity"))}canResume(){return !this.get("parent.suspended")&&this.get("view.ready")&&this.visible||!1}isUpdating(){return !1}};return request.e([request.d()],u.prototype,"sublayer",void 0),request.e([request.d()],u.prototype,"parent",void 0),request.e([request.d({readOnly:!0})],u.prototype,"suspended",null),request.e([request.d({type:Boolean,readOnly:!0})],u.prototype,"updating",null),request.e([request.d()],u.prototype,"view",void 0),request.e([request.d()],u.prototype,"visible",null),request.e([request.d()],u.prototype,"fullOpacity",null),u=request.e([request.i("esri.views.3d.layers.BuildingSublayerView3D")],u),u};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=.15,t=.5*a;function l(e){switch(e.filterMode.type){case"solid":return {mode:0};case"wire-frame":return {mode:1,edgeMaterial:LayerView3D.f(e.filterMode.edges,{})};case"x-ray":return {mode:2}}}function c(r,o){if(request.t$1(o))return r.color[3]=0,r.edgeMaterial=null,void(r.pickable=!1);switch(o.mode){case 0:return;case 1:return r.color[3]=0,r.edgeMaterial=o.edgeMaterial,void(r.pickable=!1);case 2:return r.color[0]=1,r.color[1]=1,r.color[2]=1,r.color[3]*=a,r.colorMixMode=3,r.castShadows=!1,r.pickable=!1,void(r.edgeMaterial=i(r.edgeMaterial))}}function i(r){return request.t$1(r)?null:(s$1.lastMaterial!==r&&(s$1.cachedMaterial=n(r),s$1.lastMaterial=r),s$1.cachedMaterial)}function n(e){const o=vec4f64.t(e.color);return o[3]*=t,{...e,color:o}}const s$1={cachedMaterial:null,lastMaterial:null};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends request.p{constructor(){super(...arguments),this.sublayer=null;}get updating(){return !1}get suspended(){return !1}get availableFields(){return []}get filter(){return null}set filter(r){throw new Error("Not implemented")}queryFeatures(r,e){throw new Error("Not implemented")}queryObjectIds(r,e){throw new Error("Not implemented")}queryFeatureCount(r,e){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(r,e){throw new Error("Not implemented")}highlight(r){throw new Error("Not implemented")}}request.e([request.d()],o.prototype,"sublayer",void 0),request.e([request.d()],o.prototype,"availableFields",null),request.e([request.d()],o.prototype,"filter",null);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const q=request.s$1.getLogger("esri.views.3d.layers.BuildingComponentSublayerView3D");let R=class extends(DefinitionExpressionSceneLayerView.p(I3SMeshView3D.$e(l$1(o)))){constructor(){super(...arguments),this.type="building-component-sublayer-3d",this.layerView=null,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!1,this.lodFactor=1,this.progressiveLoadFactor=1,this._queryEngine=null;}get layerUid(){return this.sublayer.layer.uid}get sublayerUid(){return this.sublayer.uid}initialize(){this.updatingHandles.add(this,"sublayer.renderer,definitionExpressionFields,filterExpressionFields",(()=>this._updateRequiredFields())),this.updatingHandles.add(this.sublayer,"renderer",(e=>this._rendererChange(e)),2);for(const e of ["parsedDefinitionExpression","filter","viewFilter.parsedWhereClause","viewFilter.parsedGeometry","viewFilter.sortedObjectIds"])this.updatingHandles.add(this,e,(()=>this._filterChange()));this.updatingHandles.add(this,"parsedFilterExpressions",(()=>this._updateSymbologyOverride()),2),this.addResolvingPromise(this._updateRequiredFields());}get parsedFilterExpressions(){return "Overview"===this.sublayer.modelName?[]:this.layerView.filterExpressions.map((([e,r])=>{let t;try{t=WhereClause.WhereClause.create(e,this.sublayer.fieldsIndex);}catch(l){return q.error("Failed to parse filterExpression: "+l),null}if(!t.isStandardized)return q.error("filterExpression is using non standard function"),null;const i=[],s=t.fieldNames;return I3SUtil.se(s,this.sublayer.fields,{missingFields:i}),i.length>0?(q.error(`filterExpression references unknown fields: ${i.join(", ")}`),null):[t,r]})).filter((e=>null!=e))}get filter(){return request.r(this.viewFilter)?this.viewFilter.filter:null}set filter(e){!request.t$1(e)&&I3SQueryFeatureStore.O.checkSupport(e)?request.r(this.viewFilter)?this.viewFilter.filter=e:this.viewFilter=new I3SQueryFeatureStore.O({filter:e,layerFieldsIndex:this.sublayer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),applyFilters:()=>this._applyFilters(!0),addSqlFilter:(e,r)=>this.addSqlFilter(e,r,this.logError)}):this.viewFilter=null;}_updateSymbologyOverride(){const e=this.parsedFilterExpressions;e.length>0?this._setSymbologyOverride(((r,t)=>{for(const[s,l]of e)try{if(s.testFeature(r))return c(t,l)}catch(i){this.logError(i);}return c(t,null)}),this.filterExpressionFields):this._setSymbologyOverride(null,null);}get filterExpressionFields(){return opacityUtils.y(this.sublayer.fieldsIndex,this.parsedFilterExpressions.reduce(((e,[r])=>e.concat(r.fieldNames)),[]))}get availableFields(){const e=this.sublayer,r=e.fieldsIndex;let t=this.requiredFields;if(e.outFields||e.layer.outFields){const i=[...e.outFields||[],...e.layer.outFields||[]];t=[...opacityUtils.I(r,i),...t];}return opacityUtils.y(r,t)}_createLayerGraphic(e){const t=new Graphic.h(null,null,e);return t.layer=this.sublayer.layer,t.sourceLayer=this.sublayer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}async fetchPopupFeatures(e,r){const t=this._validateFetchPopupFeatures(r);if(t)return Promise.reject(t);if(!request.r(r)||!r.clientGraphics||0===r.clientGraphics.length)return [];const i=[],l=[],o=request.r(this.sublayer.associatedLayer)?await this.sublayer.associatedLayer.load():this.sublayer,n=opacityUtils.I(this.sublayer.fieldsIndex,await popupUtils.t(o,popupUtils.d(this.sublayer,r))),a=new Set;for(const s of r.clientGraphics)opacityUtils.me(n,s,a)?l.push(s):i.push(s);return 0===l.length?Promise.resolve(i):(request.r(this.sublayer.associatedLayer)&&await this.sublayer.associatedLayer.load().catch((()=>q.warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes."))),this.whenGraphicAttributes(l,Array.from(a)).catch((()=>l)).then((e=>i.concat(e))))}async _updateRequiredFields(){const e=opacityUtils.y(this.sublayer.fieldsIndex,[...this.sublayer.renderer?await this.sublayer.renderer.getRequiredFields(this.sublayer.fieldsIndex):[],...this.definitionExpressionFields||[],...this.filterExpressionFields||[]]);this._set("requiredFields",e);}_validateFetchPopupFeatures(e){const{sublayer:r}=this,{popupEnabled:i}=r;return i?popupUtils.d(r,e)?void 0:new request.s("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{sublayer:r}):new request.s("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{sublayer:r})}getFilters(){const e=super.getFilters();return this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),request.r(this.viewFilter)&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return request.r(this.filter)?this.filter.createQuery(e):new Query.b(e)}queryExtent(e,r){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),null==r?void 0:r.signal)}queryFeatureCount(e,r){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),null==r?void 0:r.signal)}queryFeatures(e,r){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),null==r?void 0:r.signal).then((e=>{if(null==e||!e.features)return e;const r=this.sublayer,t=r.layer;for(const i of e.features)i.layer=t,i.sourceLayer=r;return e}))}queryObjectIds(e,r){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),null==r?void 0:r.signal)}_ensureQueryEngine(){return request.t$1(this._queryEngine)&&(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=I3SMeshView3D.u(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new I3SQueryFeatureStore.d({layerView:this,priority:Scheduler.f.FEATURE_QUERY_ENGINE,spatialIndex:new I3SQueryFeatureStore.d$1({featureAdapter:new I3SQueryFeatureStore.n({objectIdField:this.sublayer.objectIdField,attributeStorageInfo:this.sublayer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(e,r)=>this._forAllFeatures(((r,t,i)=>e({id:r,index:t,meta:i})),r,2),getFeatureExtent:e,sourceSpatialReference:I3SUtil.de(this.sublayer),viewSpatialReference:this.view.spatialReference})})}_ensureQuery(e){return this._addDefinitionExpressionToQuery(request.t$1(e)?this.createQuery():Query.b.from(e))}};request.e([request.d({aliasOf:"sublayer"})],R.prototype,"i3slayer",void 0),request.e([request.d()],R.prototype,"layerView",void 0),request.e([request.d()],R.prototype,"suspended",void 0),request.e([request.d({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],R.prototype,"lodFactor",void 0),request.e([request.d({readOnly:!0})],R.prototype,"parsedFilterExpressions",null),request.e([request.d({type:labelingInfo.y})],R.prototype,"filter",null),request.e([request.d()],R.prototype,"viewFilter",void 0),request.e([request.d({type:[String],readOnly:!0})],R.prototype,"filterExpressionFields",null),request.e([request.d({type:[String],readOnly:!0})],R.prototype,"requiredFields",void 0),request.e([request.d({type:[String],readOnly:!0})],R.prototype,"availableFields",null),R=request.e([request.i("esri.views.3d.layers.BuildingComponentSublayerView3D")],R);const O=R;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s extends LayerView.u{constructor(){super(...arguments),this.layer=null,this.sublayerViews=null;}highlight(r){throw new Error("Not implemented")}}request.e([request.d()],s.prototype,"layer",void 0),request.e([request.d()],s.prototype,"sublayerViews",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const w=request.s$1.getLogger("esri.views.3d.layers.BuildingSceneLayerView3D"),V=l$1(request.p);let j=class extends(LayerView3D.p(s)){constructor(){super(...arguments),this.type="building-scene-3d",this.sublayerViews=new request.S,this._abortController=new AbortController,this._loadingComponents=0;}get filterExpression(){const e=this.layer.activeFilterId,r=null!=e?this.layer.filters.find((r=>r.id===e)):null,i=null!=r?r.filterBlocks.find((e=>"solid"===e.filterMode.type)):null;return i?i.filterExpression:null}get filterExpressions(){const e=this.layer.activeFilterId,r=null!=e?this.layer.filters.find((r=>r.id===e)):null;return r&&r.filterBlocks?r.filterBlocks.toArray().map((e=>[e.filterExpression,l(e)])):[]}get updatingProgressValue(){const e=this.sublayerViews,r=this._loadingComponents+(e?e.length:0);return e.reduce(((e,r)=>e+r.updatingProgress),0)/r}isUpdating(){return this._loadingComponents>0||this.sublayerViews&&this.sublayerViews.some((e=>e.updating))}initialize(){I3SUtil.ge(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this.initializeSubLayerViews(this.layer.sublayers,this);}destroy(){this.sublayerViews&&(this.sublayerViews.forEach((e=>e.destroy())),this.sublayerViews=null),this._abortController.abort(),this._abortController=null;}initializeSubLayerViews(e,r){const i=this,s=this.view;e.forEach((e=>{if(!e.isEmpty)if("building-group"===e.type){const i=new V({sublayer:e,view:s,parent:r});this.initializeSubLayerViews(e.sublayers,i);}else "mesh"===e.geometryType&&(this._loadingComponents++,e.load({signal:this._abortController.signal}).then((()=>{const t=new O({sublayer:e,layerView:i,view:s,parent:r});this.sublayerViews.push(t),this.handles.add([request.i$1(t,"updating",(()=>this.notifyChange("updating")),!0),request.i$1(t,"updatingProgress",(()=>this.notifyChange("updatingProgressValue")),!0)]);})).catch((r=>{request.d$1(r)||w.error(`Error while creating view for sublayer ${e.id}\nLayer: ${this.layer.url}\n`,r);})).then((()=>{this._loadingComponents--,this.notifyChange("updating"),this.notifyChange("updatingProgressValue");})));}));}getGraphicFromIntersectorMetadata(e){for(const r of this.sublayerViews.items)if(r.sublayer.uid===e.sublayerUid)return r.getGraphicFromIntersectorMetadata(e);return null}async fetchPopupFeatures(e,r){if(!request.r(r)||!r.clientGraphics||0===r.clientGraphics.length)return;const i=this._findComponent(r.clientGraphics[0].sourceLayer);return request.t$1(i)?void 0:i.fetchPopupFeatures(e,r)}whenGraphicBounds(e){const r=this._findComponent(e.sourceLayer);return request.t$1(r)?Promise.reject():r.whenGraphicBounds(e)}_findComponent(e){return this.sublayerViews.find((r=>e===r.sublayer))}highlight(e){e instanceof Graphic.h?e=[e]:e instanceof request.S&&(e=e.toArray());const i=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof Graphic.h){const r=e,s=new Map;for(const e of r){let r=s.get(e.sourceLayer);null==r&&(r=[],s.set(e.sourceLayer,r)),r.push(e);}this.sublayerViews.forEach((e=>{const r=s.get(e.sublayer);r&&i.push(e.highlight(r));}));}return request.r$7(i)}getUsedMemory(){return this.sublayerViews.reduce(((e,r)=>e+r.getUsedMemory()),0)}getUnloadedMemory(){return this.sublayerViews.reduce(((e,r)=>e+r.getUnloadedMemory()),0)}ignoresMemoryFactor(){return !1}};request.e([request.d()],j.prototype,"sublayerViews",void 0),request.e([request.d({readOnly:!0})],j.prototype,"filterExpression",null),request.e([request.d({readOnly:!0})],j.prototype,"filterExpressions",null),request.e([request.d(arcgisWebscene_entry.t)],j.prototype,"updatingProgress",void 0),request.e([request.d({readOnly:!0,dependsOn:[]})],j.prototype,"updatingProgressValue",null),j=request.e([request.i("esri.views.3d.layers.BuildingSceneLayerView3D")],j);const C=j;

exports.default = C;
