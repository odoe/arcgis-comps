'use strict';

const request = require('./MapView-1195e7f1.js');
const LayerView = require('./LayerView-870ab467.js');
const GraphicContainer = require('./GraphicContainer-7b84d423.js');
const BaseGraphicContainer = require('./BaseGraphicContainer-a6a0e9b3.js');
require('./index-b630e408.js');
require('./Container-7c02556c.js');
require('./EffectList-c2e3d9b4.js');
require('./Utils-cf62b8df.js');
require('./Texture-51894e1f.js');
require('./CIMSymbolHelper-5119d47d.js');
require('./Rect-8ca00bae.js');
require('./definitions-b4888cc6.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./projectionSupport-64f67848.js');
require('./json-2c41fbe0.js');
require('./VertexArrayObject-02afb047.js');
require('./FeatureContainer-cf8e056d.js');
require('./TileContainer-023b8a90.js');
require('./WGLContainer-d1dbdedc.js');
require('./ShaderCompiler-7b6d74e7.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-a9d25bbc.js');
require('./pixelUtils-dcef9151.js');
require('./earcut-d5562923.js');
require('./visualVariablesUtils-4c476b9b.js');
require('./visualVariablesUtils-35b3c097.js');
require('./Matcher-9692f12e.js');
require('./ComputedAttributeStorage-b5e92741.js');
require('./FeatureSetReader-1f650286.js');
require('./centroid-7cf9ad55.js');
require('./tileUtils-d0e4ff63.js');
require('./TileClipper-7ecbeeef.js');
require('./cimAnalyzer-a0ed6247.js');
require('./quantizationUtils-6e32af1f.js');
require('./cimSymbolUtils-34c12ff0.js');
require('./devEnvironmentUtils-2fe58900.js');
require('./schemaUtils-60fb47fc.js');
require('./MD5-e5fc0526.js');
require('./vec3f32-7c156128.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u="sublayers",d="layerView",f=Object.freeze({remove(){},pause(){},resume(){}});let g=class extends(LayerView.l(LayerView.u)){async fetchPopupFeatures(e){return (await Promise.all(Array.from(this.graphicsViews(),(s=>s.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate)))))))).flat()}*graphicsViews(){request.r(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():request.r(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,s){if(this.suspended)return null;const i=Array.from(this.graphicsViews(),(async i=>{const t=await i.hitTest(e,s);if(t){if(request.r(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate);}return t}return null}));return (await Promise.all(i)).filter((e=>!!e))[0]||null}highlight(e){let r;if("number"==typeof e?r=[e]:e instanceof request.h$2?r=[e.uid]:Array.isArray(e)&&e.length>0?r="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):request.S$2.isCollection(e)&&(r=e.map((e=>e&&e.uid)).toArray()),r=r.filter((e=>null!=e)),!r.length)return f;for(const s of this.graphicsViews())s.addHighlight(r);return {remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(r);}}}update(e){for(const s of this.graphicsViews())s.processUpdate(e);}attach(){const e=this.view,s=()=>this.requestUpdate(),i=this.layer.featureCollections;if(request.r(i)&&i.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of i){const i=new GraphicContainer.i(this.view.featuresTilingScheme);i.fadeTransitionEnabled=!0;const t=new BaseGraphicContainer.rt({view:e,graphics:r.source,renderer:r.renderer,requestUpdateCallback:s,container:i});this._graphicsViewsFeatureCollectionMap.set(t,r),this.container.addChild(t.container),this.handles.add([request.i$3(r,"visible",(e=>t.container.visible=e)),request.i$3(t,"updating",(()=>this.notifyChange("updating")))],d);}}else request.r(this.layer.sublayers)&&this.handles.add(request.$(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),u);}detach(){this._destroyGraphicsViews(),this.handles.remove(u);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(d);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),request.t$2(this.layer.sublayers))return;const e=[],s=this.view,i=()=>this.requestUpdate();for(const r of this.layer.sublayers){const t=new GraphicContainer.i(this.view.featuresTilingScheme);t.fadeTransitionEnabled=!0;const o=new BaseGraphicContainer.rt({view:s,graphics:r.graphics,requestUpdateCallback:i,container:t});this.handles.add([r.on("graphic-update",o.graphicUpdateHandler),request.i$3(r,"visible",(e=>o.container.visible=e)),request.i$3(o,"updating",(()=>this.notifyChange("updating")))],d),this.container.addChild(o.container),e.push(o);}this._graphicsViews=e;}};g=request.e([request.i("esri.views.2d.layers.MapNotesLayerView2D")],g);const m=g;

exports.default = m;
