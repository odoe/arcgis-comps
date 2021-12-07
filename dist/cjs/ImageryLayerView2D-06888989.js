'use strict';

const request = require('./messageBundle-8be88d04.js');
const LayerView2D = require('./LayerView2D-6de7adcc.js');
const Graphic = require('./Graphic-0aff6059.js');
const screenUtils = require('./screenUtils-d911ae62.js');
const enumeration = require('./enumeration-f235fe07.js');
const rasterProjectionHelper = require('./rasterProjectionHelper-1f385b64.js');
const vectorFieldUtils = require('./vectorFieldUtils-0944d243.js');
const GraphicsCollection = require('./GraphicsCollection-d70ae8cb.js');
const Container = require('./Container-afc09537.js');
const GraphicContainer = require('./GraphicContainer-0cf6df48.js');
const BaseGraphicContainer = require('./BaseGraphicContainer-81db4a24.js');
const pixelUtils = require('./pixelUtils-d620590d.js');
const BitmapContainer = require('./BitmapContainer-e8669b75.js');
const Bitmap = require('./Bitmap-668e0fbf.js');
const ExportStrategy = require('./ExportStrategy-13670136.js');
const ImageryLayerView = require('./ImageryLayerView-1ec5d15c.js');
const LayerView = require('./LayerView-2bc30c9f.js');
const RefreshableLayerView = require('./RefreshableLayerView-a72efa88.js');
require('./index-fde8502c.js');
require('./Portal-8d16604d.js');
require('./geometry-ef17530a.js');
require('./jsonUtils-b6068079.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./unitUtils-083cb8d0.js');
require('./projection-b19710fa.js');
require('./mat4-f68486bc.js');
require('./geodesicConstants-047d586a.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./DefaultUI-75d05512.js');
require('./Basemap-81280554.js');
require('./loadAll-e25ec3d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./writeUtils-7bdc195a.js');
require('./compilerUtils-56e51ed2.js');
require('./CollectionFlattener-bc4cde45.js');
require('./basemapUtils-dc86a6ad.js');
require('./TablesMixin-d3e0d4c7.js');
require('./Layer-31cde361.js');
require('./TimeExtent-8b558884.js');
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
require('./EffectList-9ac19b5e.js');
require('./DisplayObject-573912c8.js');
require('./Utils-a77299a6.js');
require('./Texture-95d9d662.js');
require('./CIMSymbolHelper-79a17067.js');
require('./BidiEngine-e033e7c0.js');
require('./floatRGBA-aa45f7cb.js');
require('./definitions-b4888cc6.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./normalizeUtilsSync-7d195a4d.js');
require('./projectionSupport-7159f0ef.js');
require('./json-2c41fbe0.js');
require('./FramebufferObject-435e1736.js');
require('./FeatureContainer-7083ff74.js');
require('./TiledDisplayObject-0701494f.js');
require('./TileKey-d800cfb2.js');
require('./visualVariablesUtils-432fa686.js');
require('./visualVariablesUtils-2a522774.js');
require('./TileContainer-1c8142b6.js');
require('./WGLContainer-1a8439fd.js');
require('./brushes-09287871.js');
require('./vec4f32-284fd490.js');
require('./ShaderCompiler-3202ad3f.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-b68d4c0b.js');
require('./rasterUtils-a4c646c4.js');
require('./earcut-d5562923.js');
require('./Matcher-392fb21f.js');
require('./TileStrategy-58dbe4b8.js');
require('./TileStore-1f212ad3.js');
require('./quickselect-d3f68f5a.js');
require('./ComputedAttributeStorage-c9a0d905.js');
require('./FeatureSetReader-ed625ea0.js');
require('./centroid-d874c2ee.js');
require('./tileUtils-18ed62be.js');
require('./TileClipper-85e4353a.js');
require('./cimAnalyzer-eb6fa5b4.js');
require('./callExpressionWithFeature-7cea2968.js');
require('./quantizationUtils-d1d9c03e.js');
require('./cimSymbolUtils-7a21888c.js');
require('./devEnvironmentUtils-aafb5541.js');
require('./schemaUtils-f703d6cd.js');
require('./MD5-e5fc0526.js');
require('./GraphicsView-4bba1b13.js');
require('./vec3f32-5485293e.js');
require('./TileInfo-83a1d8a2.js');
require('./popupUtils-454e6531.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const _=request.s$1.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let w=class extends request.p{constructor(){super(...arguments),this.attached=!1,this.container=new Container.n,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._dataParameters={exportParametersVersion:0,extents:[],tileResolution:0,time:""},this.type="Graphics",this._graphics=new GraphicsCollection.c,this._updateGraphics=request.z$1((async(e,t)=>{if(!e.stationary)return;const r=e.state,i=new request.M({xmin:r.extent.xmin,ymin:r.extent.ymin,xmax:r.extent.xmax,ymax:r.extent.ymax,spatialReference:r.spatialReference}),[s,o]=e.state.size,n={};n.timeExtent=this.timeExtent,n.requestAsImageElement=!1,n.signal=t,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(i.spatialReference));const p="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,c=await this._projectFullExtentPromise,{extent:h,resolution:l,width:u,height:y}=vectorFieldUtils.m(i,s,o,p,c),g=await this.layer.fetchImage(h,u,y,n),x=this.layer.renderer;if("vector-field"===x.type){const t=g.pixelData.pixelBlock,r=x.sizeVariables[0];!request.r(t)||r.minDataValue&&r.maxDataValue||(r.minDataValue=t.statistics[0].minValue,r.maxDataValue=t.statistics[0].maxValue),this._pixelData={extent:h,pixelBlock:t};const i=h.clone().normalize(),s={exportParametersVersion:this.layer.exportImageServiceParameters.version,extents:i,tileResolution:l,time:JSON.stringify(this.timeExtent||"")},o=this._canReuseVectorFieldData(s)?this._dataParameters.extents:[],n=await x.getGraphicsFromPixelData(g.pixelData,"vector-uv"===this.layer.rasterInfo.dataType,o);if(o.length){const e=this._graphics.items.filter((e=>request.r(e.geometry)&&o.some((t=>t.intersects(e.geometry)))&&!i.some((t=>t.intersects(e.geometry)))));this._graphics.removeMany(e),this._graphics.addMany(n);}else this._graphics.set("items",n);this._graphicsView.update(e),this._dataParameters=s;}}));}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch((e=>{request.d$1(e)||_.error(e);}));}hitTest(e,r){const i=this.view.toMap(screenUtils.c(e,r));return Promise.resolve(new Graphic.h({attributes:{},geometry:i,layer:this.layer}))}attach(){this._graphicsView=new BaseGraphicContainer.rt({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer.i(this.view.featuresTilingScheme)}),this.attached=!0;}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null;}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container);}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}async _getProjectedFullExtent(e){try{return await rasterProjectionHelper.j(this.layer.fullExtent,e)}catch(t){try{const t=(await request.E(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?request.M.fromJSON(t):null}catch{return null}}}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=Math.abs(this._dataParameters.tileResolution-e.tileResolution)/e.tileResolution<.01,s=this._dataParameters.extents.some((t=>e.extents.some((e=>t.intersects(e)))));return t&&r&&i&&s}};request.e([request.d()],w.prototype,"attached",void 0),request.e([request.d()],w.prototype,"container",void 0),request.e([request.d()],w.prototype,"layer",void 0),request.e([request.d()],w.prototype,"timeExtent",void 0),request.e([request.d()],w.prototype,"view",void 0),request.e([request.d()],w.prototype,"updateRequested",void 0),request.e([request.d()],w.prototype,"updating",null),request.e([enumeration.r({graphics:"Graphics"})],w.prototype,"type",void 0),w=request.e([request.i("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],w);const j=w;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=request.s$1.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let g=class extends request.p{constructor(){super(...arguments),this.attached=!1,this.container=new Container.n,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{request.d$1(e)||y.error(e);}));}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren();}hitTest(e,r){const i=this.view.toMap(screenUtils.c(e,r));return Promise.resolve(new Graphic.h({attributes:{},geometry:i,layer:this.layer}))}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new BitmapContainer.t,this.strategy=new ExportStrategy.S({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0;}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container);}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender();}));}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=pixelUtils.d(r,t);return request.r(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return (i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new Bitmap.i(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};request.e([request.d()],g.prototype,"attached",void 0),request.e([request.d()],g.prototype,"container",void 0),request.e([request.d()],g.prototype,"layer",void 0),request.e([request.d()],g.prototype,"strategy",void 0),request.e([request.d()],g.prototype,"timeExtent",void 0),request.e([request.d()],g.prototype,"view",void 0),request.e([request.d()],g.prototype,"updateRequested",void 0),request.e([request.d()],g.prototype,"updating",null),request.e([enumeration.r({imagery:"Imagery"})],g.prototype,"type",void 0),g=request.e([request.i("esri.views.2d.layers.imagery.ImageryView2D")],g);const x=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends(ImageryLayerView.u(RefreshableLayerView.i(LayerView2D.l(LayerView.u)))){constructor(){super(...arguments),this._exportImageVersion=-1;}initialize(){this.handles.add([request.i$1(this,["layer.blendMode","layer.effects"],(e=>{this.subview&&(this.subview.container.blendMode=e);}),!0),request.i$1(this,"layer.effect",(e=>{this.subview&&(this.subview.container.effect=e);}),!0)]);}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return !(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?Promise.resolve(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([request.i$1(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate();})),this.layer.on("redraw",(()=>this.subview.redraw())),request.f(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||!this.suspended&&this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var s,i;("vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t)||(null==(s=this.subview)||s.uninstall(this.container),null==(i=this.subview)||i.destroy(),this.subview="Imagery"===t?new x({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new j({layer:this.layer,view:this.view,timeExtent:this.timeExtent}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode,this.subview.container.effect=this.layer.effect);this.requestUpdate();}};request.e([request.d()],p.prototype,"pixelData",null),request.e([request.d({readOnly:!0})],p.prototype,"updating",null),request.e([request.d()],p.prototype,"subview",void 0),p=request.e([request.i("esri.views.2d.layers.ImageryLayerView2D")],p);const d=p;

exports.default = d;
