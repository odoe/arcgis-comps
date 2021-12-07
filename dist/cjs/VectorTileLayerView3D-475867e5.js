'use strict';

const request = require('./messageBundle-8be88d04.js');
const SchemaHelper = require('./SchemaHelper-35eae3c2.js');
const MemCache = require('./MemCache-7f5503ec.js');
const DefaultUI = require('./DefaultUI-75d05512.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const VectorTile = require('./VectorTile-5dc9d0a7.js');
const SymbolRepository = require('./SymbolRepository-5ebd4faa.js');
const TileKey = require('./TileKey-d800cfb2.js');
const brushes = require('./brushes-09287871.js');
const VTLMaterialManager = require('./VTLMaterialManager-117a09bc.js');
const StyleRepository = require('./StyleRepository-9b2b4493.js');
const LayerView3D = require('./LayerView3D-d92910a3.js');
const arcgisWebscene_entry = require('./arcgis-webscene-5e838aea.js');
require('./Viewing-63d00d8f.js');
const LayerView = require('./LayerView-2bc30c9f.js');
require('./index-fde8502c.js');
require('./TileInfo-83a1d8a2.js');
require('./unitUtils-083cb8d0.js');
require('./Basemap-81280554.js');
require('./Portal-8d16604d.js');
require('./loadAll-e25ec3d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./writeUtils-7bdc195a.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./compilerUtils-56e51ed2.js');
require('./enumeration-f235fe07.js');
require('./opacityUtils-f2e4b347.js');
require('./geometry-ef17530a.js');
require('./CollectionFlattener-bc4cde45.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./basemapUtils-dc86a6ad.js');
require('./TablesMixin-d3e0d4c7.js');
require('./Layer-31cde361.js');
require('./Identifiable-a4f50f85.js');
require('./TimeExtent-8b558884.js');
require('./GraphicsCollection-d70ae8cb.js');
require('./Graphic-0aff6059.js');
require('./PopupTemplate-a0b855f8.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./persistableUrlUtils-c611d652.js');
require('./jsonUtils-b6068079.js');
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
require('./mat3-1d3e0d51.js');
require('./vec2-d000a8cb.js');
require('./vec2f32-29a5eecf.js');
require('./vec2f64-60b3c97e.js');
require('./capabilities-76889198.js');
require('./FramebufferObject-435e1736.js');
require('./Texture-95d9d662.js');
require('./config-1b750faa.js');
require('./TiledDisplayObject-0701494f.js');
require('./DisplayObject-573912c8.js');
require('./BidiEngine-e033e7c0.js');
require('./CIMSymbolHelper-79a17067.js');
require('./floatRGBA-aa45f7cb.js');
require('./definitions-b4888cc6.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./vec4f32-284fd490.js');
require('./Utils-a77299a6.js');
require('./ShaderCompiler-3202ad3f.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-b68d4c0b.js');
require('./pixelUtils-d620590d.js');
require('./rasterUtils-a4c646c4.js');
require('./colorUtils-c4f258fa.js');
require('./unitBezier-5ab0945f.js');
require('./ColorMaterial-61b9182b.js');
require('./mat4f64-fc3339e5.js');
require('./sphere-ef7f801f.js');
require('./vec4f64-d3fa6cd2.js');
require('./vectorStacks-f48a010a.js');
require('./quatf64-e7a7f39e.js');
require('./intersectorUtils-0e8a6b4b.js');
require('./boundedPlane-f1094694.js');
require('./lineSegment-a86bf7bd.js');
require('./plane-0816c6c9.js');
require('./utils-2d48ea24.js');
require('./Util-5c6af8a4.js');
require('./doublePrecisionUtils-26ddcbaf.js');
require('./Texture-16b1a373.js');
require('./quat-17613ceb.js');
require('./vec3f32-5485293e.js');
require('./geometryDataUtils-0be35629.js');
require('./BufferView-b78db189.js');
require('./OrderIndependentTransparency-866eb67c.js');
require('./InterleavedLayout-4132788d.js');
require('./types-bcd9caf5.js');
require('./projection-b19710fa.js');
require('./geodesicConstants-047d586a.js');
require('./dehydratedFeatures-a58f1b86.js');
require('./byteSizeEstimations-d2f2ce40.js');
require('./quantizationUtils-d1d9c03e.js');
require('./triangulationUtils-15ab4328.js');
require('./earcut-d5562923.js');
require('./deduplicate-91c52f8d.js');
require('./glUtil-9df223c0.js');
require('./vec33-1fc512be.js');
require('./objectResourceUtils-58283911.js');
require('./devEnvironmentUtils-aafb5541.js');
require('./DefaultMaterial_COLOR_GAMMA-1f86519d.js');
require('./Version-55b8a4e7.js');
require('./callExpressionWithFeature-7cea2968.js');
require('./MeshComponent-0dd8a7d1.js');
require('./screenshotUtils-176d2414.js');
require('./projection-ea955486.js');
require('./originUtils-fc18d7d8.js');
require('./multiOriginJSONSupportUtils-13e8b6cf.js');
require('./saveUtils-a37d456e.js');
require('./resourceUtils-c2de819b.js');
require('./scaleUtils-5c377ab3.js');
require('./Thumbnail-7b462034.js');
require('./ElevationSampler-dbeef858.js');
require('./CameraSpace.glsl-44d7b3f4.js');
require('./RenderingContext-237f69ae.js');
require('./labelFormatUtils-c70b3fbf.js');
require('./geometryServiceUtils-8e2c66dc.js');
require('./project-dab29fc8.js');
require('./LercDecoder-b90fa97a.js');
require('./WorkerHandle-fc87c5d8.js');
require('./quatf32-43352942.js');
require('./EdgeProcessingWorker-c3368d81.js');
require('./hitTestSelectUtils-9a744d46.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(i,p){const a=[],y=new SymbolRepository.r(4096,a,(()=>{const e=new VectorTile.s;return e.show=!1,e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e})),m=new SymbolRepository.i(a,y,((t,r,o)=>new SymbolRepository.r$1(t,r,o,i.styleRepository,i.key.level,0)),((t,e)=>{VectorTile.h(t,e,!1);}),(()=>0),(t=>{const e=p.getStyleLayerByUID(t).getLayoutProperty("visibility");return !e||1!==e.getValue()}));a.push(i),y.add(i),m.setScreenSize(512,512),m.continue(1/0);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class g$1 extends SymbolRepository.h{constructor(e,t,o,i,s){super(e,t,o),this._memCache=i,this._loader=s,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map;}destroy(){this._ongoingRequestToController.forEach((e=>e.abort())),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear();}async getVectorTile(n,g,h,m){const u=new TileKey.e(n,g,h,0);let c=this._memCache.get(u.id);if(request.r(c))return c.retain(),c;const _=await this._getVectorTileData(u);if(request.h(m),!this._layer)return null;if(c=this._memCache.get(u.id),request.r(c))return c.retain(),c;const T=this._layer.tileInfo.getTileBounds(aaBoundingRect.u(),u);return c=new VectorTile.d(u,T[0],T[3],512,512,this._styleRepository,this._memCache),request.r(_)&&_.tileData?(c.setData(_.tileData),c.retain(),this._memCache.put(u.id,c,c.memoryUsage*c.referenced,MemCache.s)):c.setData(null),c.neededForCoverage=!0,c.transforms.tileUnitsToPixels=DefaultUI.t$2(1/8,0,0,0,1/8,0,0,0,1),i(c,this._styleRepository),c}_getVectorTileData(e){const t=e.id;if(this._ongoingTileRequests.has(t))return this._ongoingTileRequests.get(t);const o=new AbortController,i={signal:o.signal},s=this._getParsedVectorTileData(e,i).then((e=>(this._ongoingTileRequests.delete(t),this._ongoingRequestToController.delete(t),e))).catch((()=>(this._ongoingTileRequests.delete(t),this._ongoingRequestToController.delete(t),null)));return this._ongoingTileRequests.set(t,s),this._ongoingRequestToController.set(t,o),s}_getParsedVectorTileData(e,t){return this.fetchTileData(e,t).then((o=>this.parseTileData({key:e,data:o},t)))}request(e,t){return this._loader.request(e,"binary",t)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=1e-6;class a{constructor(e,t){this.spriteMosaic=e,this.glyphMosaic=t,this._brushCache=new Map,this._vtlMaterialManager=new VTLMaterialManager.c;}dispose(){this._brushCache&&(this._brushCache.forEach((e=>e.dispose())),this._brushCache=null),this._vtlMaterialManager=request.i$8(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose();}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawTile(e,t,r){const{context:s}=e,a=r.layers;r.backgroundBucketIds.length>0&&(e.renderPass="background",r.backgroundBucketIds.forEach((s=>this._renderStyleLayer(r.getLayerById(s),e,t,!0)))),s.setBlendingEnabled(!1),s.setDepthTestEnabled(!0),s.setDepthWriteEnabled(!0),s.setDepthFunction(515),e.renderPass="opaque";for(let i=a.length-1;i>=0;i--)this._renderStyleLayer(a[i],e,t,!1);s.setDepthWriteEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunctionSeparate(1,771,1,771),e.renderPass="translucent";for(let i=0;i<a.length;i++)this._renderStyleLayer(a[i],e,t,!1);s.setDepthTestEnabled(!1),e.renderPass="symbol";for(let i=0;i<a.length;i++)this._renderStyleLayer(a[i],e,t,!1);s.bindVAO();}_renderStyleLayer(e,t,r,a=!1){if(!(a||e&&r.layerData.has(e.uid)))return;const i=e.getLayoutProperty("visibility");if(i&&1===i.getValue())return;const{renderPass:n}=t;let l;switch(e.type){case 0:if("background"!==n)return;l="vtlBackground";break;case 1:if("opaque"!==n&&"translucent"!==t.renderPass)return;l="vtlFill";break;case 2:if("translucent"!==n)return;l="vtlLine";break;case 4:if("symbol"!==n)return;l="vtlCircle";break;case 3:if("symbol"!==n)return;l="vtlSymbol";}const h=t.displayLevel;void 0!==e.minzoom&&e.minzoom>h+s||void 0!==e.maxzoom&&e.maxzoom<=h-s||(t.styleLayerUID=e.uid,t.styleLayer=e,this.drawWithBrush(t,r,l));}drawWithBrush(e,r,s){if(!this._brushCache.has(s)){const e=brushes.j[s];this._brushCache.set(s,new e);}this._brushCache.get(s).drawMany(e,[r]);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let g=class extends(arcgisWebscene_entry.p(LayerView3D.p(LayerView.u))){constructor(){super(...arguments),this.type="vector-tile-3d";}initialize(){if(request.t$1(this.layer.fullExtent))return void this.addResolvingPromise(Promise.reject(new request.s("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const e=this.layer.compatibleTileInfo256,i=this._getTileInfoSupportError(e,this.layer.fullExtent);if(i)return this.addResolvingPromise(Promise.reject(i));const{basemapTerrain:l,spatialReference:n,pixelRatio:a$1}=this.view,m=request.d$2(this.view,"basemapTerrain.tilingSchemeLocked").then((()=>{const e=l.tilingScheme,t=e.pixelSize;let r;this.schemaHelper=new SchemaHelper.s(t,n.isGeographic),r=256===t?this.layer.compatibleTileInfo256:this.view.spatialReference.isGeographic?this.layer.compatibleTileInfo512:this.layer.tileInfo;const i=this._getTileInfoCompatibilityError(r,e);if(i)throw i;this._set("tileInfo",r);}));this._tileHandlerController=new AbortController;const y=this.view.resourceController;this._memCache=y.memoryController.newCache(this.layer.uid,(e=>{e.release();}));const{style:u,spriteUrl:g,glyphsUrl:_}=this.layer.currentStyleInfo,v=new StyleRepository.a(u,{spriteUrl:g,glyphsUrl:_}),H=l.mapTileRequester;this._tileHandler=new g$1(this.layer,v,a$1,this._memCache,H);const w=this._tileHandlerController.signal,C=e=>y.schedule(e),T=this._tileHandler.start({signal:w,schedule:C}),j$1=this._tileHandler.spriteMosaic;j$1.then((e=>{!request.p$1(w)&&this._tileHandler&&(this.painter=new a(e,this._tileHandler.glyphMosaic));})),T.then((()=>this._tileHandlerController=null));const I=()=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const{style:e,spriteUrl:t,glyphsUrl:r}=this.layer.currentStyleInfo,i=new StyleRepository.a(e,{spriteUrl:t,glyphsUrl:r}),l=new g$1(this.layer,i,a$1,this._memCache,H),s=l.start({signal:this._tileHandlerController.signal,schedule:C}),o=l.spriteMosaic;s.then((()=>this._tileHandlerController=null)),this.updatingHandles.addPromise(Promise.all([s,o]).then((([,e])=>{const t=this._tileHandler,r=this.painter;this.painter=new a(e,l.glyphMosaic),this._tileHandler=l,this.emit("data-changed"),t.destroy(),r&&r.dispose();})));};this.updatingHandles.add(this,"layer.currentStyleInfo",I),this.updatingHandles.add(this,"view.pixelRatio",I);const b=Promise.all([m,T,j$1]);this.addResolvingPromise(b);}destroy(){this.painter=request.i$8(this.painter),this._tileHandlerController&&(this._tileHandlerController.abort(),this._tileHandlerController=null),request.l$3(this._tileHandler),this._memCache=request.l$3(this._memCache),this._tileHandler=null;}get dataLevelRange(){const e=this.tileInfo.lods,t=e[0].scale,r=e[e.length-1].scale,i=this.levelRangeFromScaleRange(t,r);return 1===i.minLevel&&256===this.tileInfo.size[0]&&(i.minLevel=0),i}async fetchTile(e,t,r,i){return this._tileHandler.getVectorTile(e,t,r,i)}};request.e([request.d({aliasOf:"layer.fullExtent"})],g.prototype,"fullExtent",void 0),request.e([request.d()],g.prototype,"layer",void 0),request.e([request.d()],g.prototype,"tileInfo",void 0),request.e([request.d()],g.prototype,"dataLevelRange",null),request.e([request.d()],g.prototype,"updatingProgressValue",void 0),g=request.e([request.i("esri.views.3d.layers.VectorTileLayerView3D")],g);const _=g;

exports.default = _;
