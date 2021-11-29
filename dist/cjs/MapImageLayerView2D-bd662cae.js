'use strict';

const request = require('./MapView-1726f571.js');
const BitmapContainer = require('./BitmapContainer-54c3cd83.js');
const LayerView = require('./LayerView-ab44860f.js');
const BaseGraphicContainer = require('./BaseGraphicContainer-4a839d2a.js');
const Utils = require('./Utils-e5a61fef.js');
const ExportStrategy = require('./ExportStrategy-23dd28a8.js');
const ExportImageParameters = require('./ExportImageParameters-26cf82e8.js');
const clickToleranceUtils = require('./clickToleranceUtils-ad2eeda8.js');
const popupUtils = require('./popupUtils-720b99f0.js');
const RefreshableLayerView = require('./RefreshableLayerView-bf1c1d9d.js');
const drapedUtils = require('./drapedUtils-268b2272.js');
require('./index-fde8502c.js');
require('./WGLContainer-5f61b6fe.js');
require('./definitions-b4888cc6.js');
require('./VertexArrayObject-79d493bc.js');
require('./Texture-81e2ece6.js');
require('./ShaderCompiler-c2546df1.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-7ad63f3d.js');
require('./pixelUtils-d4b82358.js');
require('./Container-16ae77e1.js');
require('./EffectList-c8b0929b.js');
require('./earcut-d5562923.js');
require('./CIMSymbolHelper-11b13154.js');
require('./BidiEngine-e033e7c0.js');
require('./GeometryUtils-062a82b8.js');
require('./projectionSupport-34535cf1.js');
require('./json-2c41fbe0.js');
require('./FeatureContainer-814e6d5b.js');
require('./TileContainer-16404663.js');
require('./visualVariablesUtils-cec97964.js');
require('./visualVariablesUtils-567175e3.js');
require('./Matcher-fbcfa0ff.js');
require('./ComputedAttributeStorage-a776fa0f.js');
require('./FeatureSetReader-69300d2f.js');
require('./centroid-07923388.js');
require('./tileUtils-4f5520e1.js');
require('./TileClipper-7623926c.js');
require('./cimAnalyzer-f3efd46b.js');
require('./quantizationUtils-67099620.js');
require('./cimSymbolUtils-a5d3a92a.js');
require('./devEnvironmentUtils-a59d6ef8.js');
require('./schemaUtils-9bd21a56.js');
require('./MD5-e5fc0526.js');
require('./vec3f32-7c156128.js');
require('./Bitmap-30fbdf88.js');
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
const c=c=>{let y=class extends c{initialize(){this.exportImageParameters=new ExportImageParameters.c({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,s){const{layer:a}=this;if(!e)return Promise.reject(new request.s$1("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const p=this.get("view.scale"),i=[],l=async e=>{const r=0===e.minScale||p<=e.minScale,o=0===e.maxScale||p>=e.maxScale;if(e.visible&&r&&o)if(e.sublayers)e.sublayers.forEach(l);else if(e.popupEnabled){const r=popupUtils.d(e,{...s,defaultPopupTemplateEnabled:!1});request.r(r)&&i.unshift({sublayer:e,popupTemplate:r});}},c=a.sublayers.toArray().reverse().map(l);await Promise.all(c);const y=i.map((async({sublayer:r,popupTemplate:o})=>{await r.load().catch((()=>{}));const a=r.createQuery(),p=request.r(s)?s.event:null,i=clickToleranceUtils.s({renderer:r.renderer,event:p}),l=this.createFetchPopupFeaturesQueryGeometry(e,i);a.geometry=l,a.outFields=await popupUtils.t(r,o);const u=await this._loadArcadeModules(o);u&&u.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=l.width/i);return (await r.queryFeatures(a)).features}));return (await request.T$1(y)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return request.a$16()}};return request.e([request.d()],y.prototype,"exportImageParameters",void 0),request.e([request.d({readOnly:!0})],y.prototype,"exportImageVersion",null),request.e([request.d()],y.prototype,"layer",void 0),request.e([request.d()],y.prototype,"suspended",void 0),request.e([request.d(request.g$3)],y.prototype,"timeExtent",void 0),y=request.e([request.i("esri.views.layers.MapImageLayerView")],y),y};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=request.s$2.getLogger("esri.views.2d.layers.MapImageLayerView2D");let f=class extends(c(RefreshableLayerView.i(LayerView.l(LayerView.u)))){constructor(){super(...arguments),this._highlightGraphics=new request.c$20;}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{request.d$1(e)||u.error(e);}));}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i$1=r>=10.3,s=r>=10;this._bitmapContainer=new BitmapContainer.t,this.container.addChild(this._bitmapContainer);const a=new BaseGraphicContainer.rt({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)});this.container.addChild(a.container),this.strategy=new ExportStrategy.S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i$1,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(this.watch("view.floors",(()=>this.requestUpdate())),"view.floors"),this.requestUpdate();}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e);}}}createFetchPopupFeaturesQueryGeometry(e,t){return drapedUtils.a(e,t,this.view)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};request.e([request.d()],f.prototype,"strategy",void 0),request.e([request.d()],f.prototype,"updating",void 0),f=request.e([request.i("esri.views.2d.layers.MapImageLayerView2D")],f);const y=f;

exports.default = y;
