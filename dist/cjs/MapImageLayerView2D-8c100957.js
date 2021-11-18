'use strict';

const request = require('./messageBundle-312ceb47.js');
const GraphicsCollection = require('./GraphicsCollection-761d7a93.js');
const BitmapContainer = require('./BitmapContainer-18c55fc6.js');
const LayerView = require('./LayerView-46fb1e7b.js');
const BaseGraphicContainer = require('./BaseGraphicContainer-89b548d0.js');
const Utils = require('./Utils-b188baf8.js');
const ExportStrategy = require('./ExportStrategy-d2272081.js');
const commonProperties = require('./commonProperties-75b954b3.js');
const ExportImageParameters = require('./ExportImageParameters-b66a9aec.js');
const clickToleranceUtils = require('./clickToleranceUtils-ad2eeda8.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const popupUtils = require('./popupUtils-3b660ad3.js');
const RefreshableLayerView = require('./RefreshableLayerView-3293c339.js');
const drapedUtils = require('./drapedUtils-7b2ec8c1.js');
require('./index-57f2cfbb.js');
require('./HandleOwner-f254dc86.js');
require('./reactiveUtils-9e33ad73.js');
require('./WGLContainer-c7ef30ce.js');
require('./MapView-dbdeb77b.js');
require('./CollectionFlattener-3dadfe6b.js');
require('./workers-1668d5a8.js');
require('./executeQueryJSON-d0e52ec5.js');
require('./JSONSupport-53c01d03.js');
require('./utils-f7ec83ae.js');
require('./query-89593027.js');
require('./normalizeUtils-b6002011.js');
require('./pbfQueryUtils-7b4746bb.js');
require('./pbf-758dd66b.js');
require('./OptimizedFeature-cf019b37.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./queryZScale-f443a9ba.js');
require('./zscale-fda0b32f.js');
require('./Query-35be2e91.js');
require('./TimeExtent-cdfe048b.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./FeatureSet-2e9b97a5.js');
require('./TopFeaturesQuery-2241be7c.js');
require('./symbolUtils-65bd4d7e.js');
require('./utils-08a64a75.js');
require('./asyncUtils-9f974032.js');
require('./ItemCache-c32783d3.js');
require('./MemCache-1ae72e1e.js');
require('./utils-fb318f28.js');
require('./widget-41a1462e.js');
require('./QueryTask-f73be2a3.js');
require('./featureConversionUtils-e6cca372.js');
require('./Task-0c2f1790.js');
require('./FeatureLayer-47713b0f.js');
require('./UniqueValueRenderer-cac6e88d.js');
require('./VisualVariablesMixin-fd7d8973.js');
require('./colorRamps-c066f1f7.js');
require('./ColorStop-c5f3f911.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-4df768a8.js');
require('./lengthUtils-3475e67e.js');
require('./diffUtils-467572e8.js');
require('./jsonUtils-1999c7ae.js');
require('./styleUtils-10128dd7.js');
require('./DictionaryRenderer-7157833a.js');
require('./LRUCache-b38a7907.js');
require('./jsonUtils-fa6e9edd.js');
require('./Layer-849337e0.js');
require('./HeightModelInfo-3363f0e0.js');
require('./APIKeyMixin-f99c03a8.js');
require('./ArcGISService-a170c777.js');
require('./arcgisLayerUrl-b24ae301.js');
require('./BlendLayer-7e864068.js');
require('./jsonUtils-4461cf25.js');
require('./mat4-1439266d.js');
require('./CustomParametersMixin-8fc5bf2f.js');
require('./labelingInfo-b4dde768.js');
require('./LabelClass-21df7ce2.js');
require('./labelUtils-7677c2d3.js');
require('./defaultsJSON-01ae5a1a.js');
require('./OperationalLayer-f89b9d70.js');
require('./OrderedLayer-1ea23e5d.js');
require('./PortalLayer-19d79370.js');
require('./PortalItem-42e06deb.js');
require('./RefreshableLayer-22c5fbbd.js');
require('./ScaleRangeLayer-52589af6.js');
require('./TemporalLayer-0201042a.js');
require('./TimeInfo-e2561319.js');
require('./FeatureType-5a860566.js');
require('./fieldProperties-f6acb896.js');
require('./FieldsIndex-8c8f3ac6.js');
require('./LayerFloorInfo-154885ea.js');
require('./styleUtils-2856ad11.js');
require('./popupUtils-180c3a12.js');
require('./TileStore-3be4ace6.js');
require('./TileKey-b425207e.js');
require('./quickselect-d3f68f5a.js');
require('./aaBoundingRect-7e7e678f.js');
require('./GoTo-9e48be05.js');
require('./mathUtils-ff0a3d04.js');
require('./TileInfo-363ea532.js');
require('./Basemap-0c094028.js');
require('./loadAll-57962b35.js');
require('./writeUtils-efed1c82.js');
require('./compilerUtils-54d3d3a9.js');
require('./TablesMixin-bdd488ef.js');
require('./Scheduler-940b6f3b.js');
require('./unitBezier-5ab0945f.js');
require('./mat2df32-f2b5b52d.js');
require('./vec2-65c4309d.js');
require('./vec2f64-c36614be.js');
require('./projection-e04cb9d0.js');
require('./mat3-1bc0ab17.js');
require('./vec2f32-29a5eecf.js');
require('./TileStrategy-d5289194.js');
require('./screenshotUtils-33e2013d.js');
require('./capabilities-ef851f65.js');
require('./definitions-b4888cc6.js');
require('./VertexArrayObject-543b2920.js');
require('./Texture-272da42e.js');
require('./ShaderCompiler-c137d774.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-0f043067.js');
require('./pixelUtils-57d906f9.js');
require('./Container-cb837708.js');
require('./EffectList-66a02fd6.js');
require('./earcut-d5562923.js');
require('./CIMSymbolHelper-e1208fc4.js');
require('./BidiEngine-e033e7c0.js');
require('./GeometryUtils-062a82b8.js');
require('./projectionSupport-0d87fa93.js');
require('./json-2c41fbe0.js');
require('./FeatureContainer-ac143752.js');
require('./TileContainer-146f8112.js');
require('./visualVariablesUtils-3b9ebc9d.js');
require('./visualVariablesUtils-77c3c121.js');
require('./Matcher-88f6470a.js');
require('./ComputedAttributeStorage-cc01d874.js');
require('./FeatureSetReader-56da5c2b.js');
require('./centroid-fbe1334b.js');
require('./tileUtils-01a55805.js');
require('./TileClipper-b1e23799.js');
require('./cimAnalyzer-a91407a6.js');
require('./quantizationUtils-7dfad3c7.js');
require('./cimSymbolUtils-3f93bd5c.js');
require('./devEnvironmentUtils-98ac846b.js');
require('./schemaUtils-f3e2baa9.js');
require('./MD5-e5fc0526.js');
require('./vec3f32-7c156128.js');
require('./Bitmap-178632aa.js');
require('./sublayerUtils-a9071b30.js');
require('./floorFilterUtils-a9b30733.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends BaseGraphicContainer.t{renderChildren(r){if(r.drawPhase!==Utils.I.HIGHLIGHT)return;if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,t=e.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(16384),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind();}};o=request.e([request.i("esri.views.2d.layers.support.HighlightGraphicContainer")],o);const i=o;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=c=>{let y=class extends c{initialize(){this.exportImageParameters=new ExportImageParameters.c({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,s){const{layer:a}=this;if(!e)return Promise.reject(new request.s$1("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const p=this.get("view.scale"),i=[],l=async e=>{const r=0===e.minScale||p<=e.minScale,o=0===e.maxScale||p>=e.maxScale;if(e.visible&&r&&o)if(e.sublayers)e.sublayers.forEach(l);else if(e.popupEnabled){const r=popupUtils.d(e,{...s,defaultPopupTemplateEnabled:!1});request.r(r)&&i.unshift({sublayer:e,popupTemplate:r});}},c=a.sublayers.toArray().reverse().map(l);await Promise.all(c);const y=i.map((async({sublayer:r,popupTemplate:o})=>{await r.load().catch((()=>{}));const a=r.createQuery(),p=request.r(s)?s.event:null,i=clickToleranceUtils.s({renderer:r.renderer,event:p}),l=this.createFetchPopupFeaturesQueryGeometry(e,i);a.geometry=l,a.outFields=await popupUtils.t(r,o);const u=await this._loadArcadeModules(o);u&&u.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=l.width/i);return (await r.queryFeatures(a)).features}));return (await request.T$1(y)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return unitUtils.a$1()}};return request.e([request.d()],y.prototype,"exportImageParameters",void 0),request.e([request.d({readOnly:!0})],y.prototype,"exportImageVersion",null),request.e([request.d()],y.prototype,"layer",void 0),request.e([request.d()],y.prototype,"suspended",void 0),request.e([request.d(commonProperties.g)],y.prototype,"timeExtent",void 0),y=request.e([request.i("esri.views.layers.MapImageLayerView")],y),y};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=request.s$2.getLogger("esri.views.2d.layers.MapImageLayerView2D");let f=class extends(c(RefreshableLayerView.i(LayerView.l(LayerView.u)))){constructor(){super(...arguments),this._highlightGraphics=new GraphicsCollection.c;}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{request.d$2(e)||u.error(e);}));}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i$1=r>=10.3,s=r>=10;this._bitmapContainer=new BitmapContainer.t,this.container.addChild(this._bitmapContainer);const a=new BaseGraphicContainer.rt({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)});this.container.addChild(a.container),this.strategy=new ExportStrategy.S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i$1,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(this.watch("view.floors",(()=>this.requestUpdate())),"view.floors"),this.requestUpdate();}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e);}}}createFetchPopupFeaturesQueryGeometry(e,t){return drapedUtils.a(e,t,this.view)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};request.e([request.d()],f.prototype,"strategy",void 0),request.e([request.d()],f.prototype,"updating",void 0),f=request.e([request.i("esri.views.2d.layers.MapImageLayerView2D")],f);const y=f;

exports.default = y;
