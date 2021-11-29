'use strict';

const request = require('./MapView-1726f571.js');
const LayerView = require('./LayerView-ab44860f.js');
const GraphicContainer = require('./GraphicContainer-91220c11.js');
const BaseGraphicContainer = require('./BaseGraphicContainer-4a839d2a.js');
require('./index-fde8502c.js');
require('./Container-16ae77e1.js');
require('./EffectList-c8b0929b.js');
require('./Utils-e5a61fef.js');
require('./Texture-81e2ece6.js');
require('./CIMSymbolHelper-11b13154.js');
require('./BidiEngine-e033e7c0.js');
require('./definitions-b4888cc6.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./projectionSupport-34535cf1.js');
require('./json-2c41fbe0.js');
require('./VertexArrayObject-79d493bc.js');
require('./FeatureContainer-814e6d5b.js');
require('./TileContainer-16404663.js');
require('./WGLContainer-5f61b6fe.js');
require('./ShaderCompiler-c2546df1.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-7ad63f3d.js');
require('./pixelUtils-d4b82358.js');
require('./earcut-d5562923.js');
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

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u="sublayers",d="layerView",f=Object.freeze({remove(){},pause(){},resume(){}});let g=class extends(LayerView.l(LayerView.u)){async fetchPopupFeatures(e){return (await Promise.all(Array.from(this.graphicsViews(),(s=>s.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate)))))))).flat()}*graphicsViews(){request.r(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():request.r(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,s){if(this.suspended)return null;const i=Array.from(this.graphicsViews(),(async i=>{const t=await i.hitTest(e,s);if(t){if(request.r(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate);}return t}return null}));return (await Promise.all(i)).filter((e=>!!e))[0]||null}highlight(e){let r;if("number"==typeof e?r=[e]:e instanceof request.h$1?r=[e.uid]:Array.isArray(e)&&e.length>0?r="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):request.S.isCollection(e)&&(r=e.map((e=>e&&e.uid)).toArray()),r=r.filter((e=>null!=e)),!r.length)return f;for(const s of this.graphicsViews())s.addHighlight(r);return {remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(r);}}}update(e){for(const s of this.graphicsViews())s.processUpdate(e);}attach(){const e=this.view,s=()=>this.requestUpdate(),i=this.layer.featureCollections;if(request.r(i)&&i.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of i){const i=new GraphicContainer.i(this.view.featuresTilingScheme);i.fadeTransitionEnabled=!0;const t=new BaseGraphicContainer.rt({view:e,graphics:r.source,renderer:r.renderer,requestUpdateCallback:s,container:i});this._graphicsViewsFeatureCollectionMap.set(t,r),this.container.addChild(t.container),this.handles.add([request.i$1(r,"visible",(e=>t.container.visible=e)),request.i$1(t,"updating",(()=>this.notifyChange("updating")))],d);}}else request.r(this.layer.sublayers)&&this.handles.add(request.$(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),u);}detach(){this._destroyGraphicsViews(),this.handles.remove(u);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(d);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),request.t(this.layer.sublayers))return;const e=[],s=this.view,i=()=>this.requestUpdate();for(const r of this.layer.sublayers){const t=new GraphicContainer.i(this.view.featuresTilingScheme);t.fadeTransitionEnabled=!0;const o=new BaseGraphicContainer.rt({view:s,graphics:r.graphics,requestUpdateCallback:i,container:t});this.handles.add([r.on("graphic-update",o.graphicUpdateHandler),request.i$1(r,"visible",(e=>o.container.visible=e)),request.i$1(o,"updating",(()=>this.notifyChange("updating")))],d),this.container.addChild(o.container),e.push(o);}this._graphicsViews=e;}};g=request.e([request.i("esri.views.2d.layers.MapNotesLayerView2D")],g);const m=g;

exports.default = m;
