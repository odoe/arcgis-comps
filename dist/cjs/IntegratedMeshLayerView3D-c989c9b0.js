'use strict';

const request = require('./messageBundle-8be88d04.js');
const Graphic = require('./Graphic-0aff6059.js');
const vec4f64 = require('./vec4f64-d3fa6cd2.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const I3SMeshView3D = require('./I3SMeshView3D-a9516b3e.js');
const LayerView3D = require('./LayerView3D-d92910a3.js');
const arcgisWebscene_entry = require('./arcgis-webscene-5e838aea.js');
const LayerView = require('./LayerView-2bc30c9f.js');
require('./index-fde8502c.js');
require('./geometry-ef17530a.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./jsonUtils-b6068079.js');
require('./unitUtils-083cb8d0.js');
require('./mat3-1d3e0d51.js');
require('./DefaultUI-75d05512.js');
require('./Basemap-81280554.js');
require('./loadAll-e25ec3d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./writeUtils-7bdc195a.js');
require('./compilerUtils-56e51ed2.js');
require('./CollectionFlattener-bc4cde45.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./basemapUtils-dc86a6ad.js');
require('./TablesMixin-d3e0d4c7.js');
require('./Layer-31cde361.js');
require('./TimeExtent-8b558884.js');
require('./GraphicsCollection-d70ae8cb.js');
require('./HeightModelInfo-06fd3d80.js');
require('./Scheduler-72cbcf2a.js');
require('./debugFlags-5e6b0151.js');
require('./screenUtils-e9e44bb6.js');
require('./executeQueryJSON-3f84e897.js');
require('./utils-8a0a0870.js');
require('./query-0e394548.js');
require('./normalizeUtils-a793b472.js');
require('./pbfQueryUtils-49e071a8.js');
require('./pbf-dc87045b.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./queryZScale-d48be112.js');
require('./zscale-25ef55f0.js');
require('./Query-354911d3.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./FeatureSet-8efc5965.js');
require('./TopFeaturesQuery-92caa731.js');
require('./Heading-d7c5e432.js');
require('./widget-b8f4aeaf.js');
require('./QueryTask-3b24eec5.js');
require('./featureConversionUtils-df21e951.js');
require('./Task-95a3fa39.js');
require('./FeatureLayer-68e51b64.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./ColorStop-ce63948c.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./lengthUtils-179eaf12.js');
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./jsonUtils-fc4080da.js');
require('./MultiOriginJSONSupport-77ac451b.js');
require('./workers-bde9fe32.js');
require('./APIKeyMixin-77c99036.js');
require('./ArcGISService-56d7a630.js');
require('./arcgisLayerUrl-5174d661.js');
require('./BlendLayer-6a2ab430.js');
require('./mat4-f68486bc.js');
require('./CustomParametersMixin-996a5732.js');
require('./labelingInfo-594911d5.js');
require('./OperationalLayer-853649aa.js');
require('./ElevationInfo-d3e3d64f.js');
require('./LabelClass-4b91d60e.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');
require('./OrderedLayer-8690aaf5.js');
require('./PortalLayer-7556e594.js');
require('./RefreshableLayer-487bd7b3.js');
require('./ScaleRangeLayer-5320a5ba.js');
require('./TemporalLayer-06f08bdd.js');
require('./TimeInfo-050c5617.js');
require('./FeatureType-d8b81062.js');
require('./fieldProperties-c9dd6469.js');
require('./FieldsIndex-664af19b.js');
require('./LayerFloorInfo-c56fa764.js');
require('./styleUtils-536b017f.js');
require('./popupUtils-7a76fb7d.js');
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
require('./I3SUtil-25befd00.js');
require('./quatf64-e7a7f39e.js');
require('./quat-17613ceb.js');
require('./quatf32-43352942.js');
require('./I3SBinaryReader-a8426e2d.js');
require('./objectResourceUtils-58283911.js');
require('./devEnvironmentUtils-aafb5541.js');
require('./BufferView-b78db189.js');
require('./vec33-1fc512be.js');
require('./DefaultMaterial_COLOR_GAMMA-1f86519d.js');
require('./types-bcd9caf5.js');
require('./Version-55b8a4e7.js');
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
const g=.2;let v=class extends(I3SMeshView3D.$e(LayerView3D.p(LayerView.u))){constructor(){super(...arguments),this.type="integrated-mesh-3d",this.lodFactor=1,this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=1,this._overlayTexOffset=vec4f64.r(-1,-1,-1,-1),this._overlayTexScale=vec4f64.n(),this._overlayColor=null,this._overlayHighlight=null,this._overlayNormal=null;}get progressiveLoadFactor(){return this.lodFactor>=1?g:1}setDrapingTextures(e){this._clearDrapingTexture(0),this._clearDrapingTexture(1);for(const t of e){const e=t.index,o=t.extent,a=t.needsColorWithoutRasterImage?t.getValidTarget(1):t.hasDrapedFeatureSource?t.getValidTarget(0):null;if(request.r(a)&&aaBoundingRect.y(o)>0){this._overlayTexOffset[2*e]=-o[0]/aaBoundingRect.s(o),this._overlayTexOffset[2*e+1]=-o[1]/aaBoundingRect.l(o),this._overlayTexScale[2*e]=1/aaBoundingRect.s(o),this._overlayTexScale[2*e+1]=1/aaBoundingRect.l(o);const r=t.getValidTarget(2),i=t.getValidTarget(3);this._overlayColor=a.getTexture(),this._overlayHighlight=r?r.getTexture():null,this._overlayNormal=i?i.getTexture():null;}}this._forAllNodes((e=>request.r(e)&&this._collection.updateMaterial(e.objectHandle,(e=>this._updateMaterialOverlay(e)))));}_clearDrapingTexture(e){this._overlayTexOffset[2*e]=-1,this._overlayTexOffset[2*e+1]=-1,this._overlayTexScale[2*e]=0,this._overlayTexScale[2*e+1]=0,this._overlayColor=null,this._overlayHighlight=null,this._overlayNormal=null;}_updateMaterialOverlay(e){e.overlayColor=this._overlayColor,e.overlayHighlight=this._overlayHighlight,e.overlayNormal=this._overlayNormal,e.overlayTexOffset=this._overlayTexOffset,e.overlayTexScale=this._overlayTexScale;}initialize(){this.updatingHandles.add(this.layer,"modifications",(()=>this._loadModifications()),2);}_createLayerGraphic(){const e=new Graphic.h;return e.layer=this.layer,e.sourceLayer=this.layer,e}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.handles.remove("modifications"),request.t$1(this.layer.modifications))return void(this._modifications=[]);const e=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(e,(()=>this._modifications=e.toArray()),2),"modifications");}};request.e([request.d()],v.prototype,"layer",void 0),request.e([request.d({aliasOf:"layer"})],v.prototype,"i3slayer",void 0),request.e([request.d()],v.prototype,"suspended",void 0),request.e([request.d(arcgisWebscene_entry.t)],v.prototype,"updatingProgress",void 0),request.e([request.d({readOnly:!0,aliasOf:"_controller.updatingProgress"})],v.prototype,"updatingProgressValue",void 0),request.e([request.d({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.integratedMesh.lodFactor"})],v.prototype,"lodFactor",void 0),request.e([request.d({readOnly:!0})],v.prototype,"progressiveLoadFactor",null),v=request.e([request.i("esri.views.3d.layers.SceneLayerView3D")],v);const f=v;

exports.default = f;
