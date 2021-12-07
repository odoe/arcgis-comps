'use strict';

const request = require('./messageBundle-8be88d04.js');
const GraphicsCollection = require('./GraphicsCollection-d70ae8cb.js');
const BitmapContainer = require('./BitmapContainer-e8669b75.js');
const LayerView2D = require('./LayerView2D-6de7adcc.js');
const BaseGraphicContainer = require('./BaseGraphicContainer-81db4a24.js');
const Utils = require('./Utils-a77299a6.js');
const ExportStrategy = require('./ExportStrategy-13670136.js');
const LayerView = require('./LayerView-2bc30c9f.js');
const MapImageLayerView = require('./MapImageLayerView-85535df7.js');
const RefreshableLayerView = require('./RefreshableLayerView-a72efa88.js');
const drapedUtils = require('./drapedUtils-2fa2770f.js');
require('./index-fde8502c.js');
require('./Graphic-0aff6059.js');
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
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./jsonUtils-b6068079.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./brushes-09287871.js');
require('./definitions-b4888cc6.js');
require('./FramebufferObject-435e1736.js');
require('./Texture-95d9d662.js');
require('./vec4f32-284fd490.js');
require('./ShaderCompiler-3202ad3f.js');
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
require('./unitUtils-083cb8d0.js');
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
require('./mat3-1d3e0d51.js');
require('./vec2-d000a8cb.js');
require('./vec2f32-29a5eecf.js');
require('./vec2f64-60b3c97e.js');
require('./capabilities-76889198.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-b68d4c0b.js');
require('./pixelUtils-d620590d.js');
require('./DisplayObject-573912c8.js');
require('./rasterUtils-a4c646c4.js');
require('./WGLContainer-1a8439fd.js');
require('./Container-afc09537.js');
require('./EffectList-9ac19b5e.js');
require('./earcut-d5562923.js');
require('./CIMSymbolHelper-79a17067.js');
require('./BidiEngine-e033e7c0.js');
require('./floatRGBA-aa45f7cb.js');
require('./GeometryUtils-062a82b8.js');
require('./normalizeUtilsSync-7d195a4d.js');
require('./projectionSupport-7159f0ef.js');
require('./projection-b19710fa.js');
require('./geodesicConstants-047d586a.js');
require('./json-2c41fbe0.js');
require('./FeatureContainer-7083ff74.js');
require('./TiledDisplayObject-0701494f.js');
require('./TileKey-d800cfb2.js');
require('./visualVariablesUtils-432fa686.js');
require('./visualVariablesUtils-2a522774.js');
require('./TileContainer-1c8142b6.js');
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
require('./Bitmap-668e0fbf.js');
require('./ExportImageParameters-c9c5796e.js');
require('./sublayerUtils-a9071b30.js');
require('./floorFilterUtils-a9b30733.js');
require('./popupUtils-454e6531.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends BaseGraphicContainer.t{renderChildren(r){if(r.drawPhase!==Utils.I.HIGHLIGHT)return;if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,t=e.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(16384),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind();}};o=request.e([request.i("esri.views.2d.layers.support.HighlightGraphicContainer")],o);const i=o;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=request.s$1.getLogger("esri.views.2d.layers.MapImageLayerView2D");let f=class extends(MapImageLayerView.c(RefreshableLayerView.i(LayerView2D.l(LayerView.u)))){constructor(){super(...arguments),this._highlightGraphics=new GraphicsCollection.c;}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{request.d$1(e)||u.error(e);}));}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i$1=r>=10.3,s=r>=10;this._bitmapContainer=new BitmapContainer.t,this.container.addChild(this._bitmapContainer);const a=new BaseGraphicContainer.rt({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)});this.container.addChild(a.container),this.strategy=new ExportStrategy.S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i$1,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(this.watch("view.floors",(()=>this.requestUpdate())),"view.floors"),this.requestUpdate();}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e);}}}createFetchPopupFeaturesQueryGeometry(e,t){return drapedUtils.a(e,t,this.view)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};request.e([request.d()],f.prototype,"strategy",void 0),request.e([request.d()],f.prototype,"updating",void 0),f=request.e([request.i("esri.views.2d.layers.MapImageLayerView2D")],f);const y=f;

exports.default = y;
