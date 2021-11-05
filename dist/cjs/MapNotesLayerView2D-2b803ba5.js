'use strict';

const request = require('./MapView-922b9f1e.js');
const LayerView = require('./LayerView-fac949a9.js');
const GraphicContainer = require('./GraphicContainer-8676422e.js');
const BaseGraphicContainer = require('./BaseGraphicContainer-440ca112.js');
require('./index-57f2cfbb.js');
require('./Container-2db43b58.js');
require('./EffectList-f75e6e29.js');
require('./Utils-b513a4f3.js');
require('./Texture-1414de91.js');
require('./CIMSymbolHelper-755a0bb9.js');
require('./Rect-8ca00bae.js');
require('./definitions-b4888cc6.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./projectionSupport-4a0b34fb.js');
require('./json-2c41fbe0.js');
require('./VertexArrayObject-f7735e8a.js');
require('./FeatureContainer-a87edd6a.js');
require('./TileContainer-3b85eaa8.js');
require('./WGLContainer-ee8dfeda.js');
require('./ShaderCompiler-147fe73a.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-c11630fb.js');
require('./pixelUtils-c061d98b.js');
require('./earcut-d5562923.js');
require('./visualVariablesUtils-ffa75cb7.js');
require('./visualVariablesUtils-c1cf935c.js');
require('./Matcher-7a99dbed.js');
require('./ComputedAttributeStorage-937d576f.js');
require('./FeatureSetReader-301498e7.js');
require('./centroid-7dd35a3f.js');
require('./tileUtils-b8d82933.js');
require('./TileClipper-c1c88838.js');
require('./cimAnalyzer-0ebadbbe.js');
require('./quantizationUtils-f9fa2625.js');
require('./cimSymbolUtils-dd704063.js');
require('./devEnvironmentUtils-1743b65a.js');
require('./schemaUtils-55d8dba9.js');
require('./MD5-e5fc0526.js');
require('./vec3f32-7c156128.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u="sublayers",d="layerView",f=Object.freeze({remove(){},pause(){},resume(){}});let g=class extends(LayerView.l(LayerView.u)){async fetchPopupFeatures(e){return (await Promise.all(Array.from(this.graphicsViews(),(s=>s.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate)))))))).flat()}*graphicsViews(){request.r(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():request.r(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,s){if(this.suspended)return null;const i=Array.from(this.graphicsViews(),(async i=>{const t=await i.hitTest(e,s);if(t){if(request.r(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate);}return t}return null}));return (await Promise.all(i)).filter((e=>!!e))[0]||null}highlight(e){let r;if("number"==typeof e?r=[e]:e instanceof request.h$2?r=[e.uid]:Array.isArray(e)&&e.length>0?r="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):request.S$2.isCollection(e)&&(r=e.map((e=>e&&e.uid)).toArray()),r=r.filter((e=>null!=e)),!r.length)return f;for(const s of this.graphicsViews())s.addHighlight(r);return {remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(r);}}}update(e){for(const s of this.graphicsViews())s.processUpdate(e);}attach(){const e=this.view,s=()=>this.requestUpdate(),i=this.layer.featureCollections;if(request.r(i)&&i.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of i){const i=new GraphicContainer.i(this.view.featuresTilingScheme);i.fadeTransitionEnabled=!0;const t=new BaseGraphicContainer.rt({view:e,graphics:r.source,renderer:r.renderer,requestUpdateCallback:s,container:i});this._graphicsViewsFeatureCollectionMap.set(t,r),this.container.addChild(t.container),this.handles.add([request.i$3(r,"visible",(e=>t.container.visible=e)),request.i$3(t,"updating",(()=>this.notifyChange("updating")))],d);}}else request.r(this.layer.sublayers)&&this.handles.add(request.$(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),u);}detach(){this._destroyGraphicsViews(),this.handles.remove(u);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(d);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),request.t$2(this.layer.sublayers))return;const e=[],s=this.view,i=()=>this.requestUpdate();for(const r of this.layer.sublayers){const t=new GraphicContainer.i(this.view.featuresTilingScheme);t.fadeTransitionEnabled=!0;const o=new BaseGraphicContainer.rt({view:s,graphics:r.graphics,requestUpdateCallback:i,container:t});this.handles.add([r.on("graphic-update",o.graphicUpdateHandler),request.i$3(r,"visible",(e=>o.container.visible=e)),request.i$3(o,"updating",(()=>this.notifyChange("updating")))],d),this.container.addChild(o.container),e.push(o);}this._graphicsViews=e;}};g=request.e([request.i("esri.views.2d.layers.MapNotesLayerView2D")],g);const m=g;

exports.default = m;
