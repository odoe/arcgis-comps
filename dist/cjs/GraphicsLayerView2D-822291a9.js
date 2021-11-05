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
const c={remove(){},pause(){},resume(){}};let n=class extends(LayerView.l(LayerView.u)){initialize(){this.graphicsView=new BaseGraphicContainer.rt({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new GraphicContainer.i(this.view.featuresTilingScheme)});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let s;return "number"==typeof e?s=[e]:e instanceof request.h$2?s=[e.uid]:Array.isArray(e)&&e.length>0?s="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):request.S$2.isCollection(e)&&(s=e.map((e=>e&&e.uid)).toArray()),s=s.filter((e=>null!=e)),s.length?(this.graphicsView.addHighlight(s),{remove:()=>this.graphicsView.removeHighlight(s)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};request.e([request.d()],n.prototype,"graphicsView",void 0),request.e([request.d()],n.prototype,"updating",void 0),n=request.e([request.i("esri.views.2d.layers.GraphicsLayerView2D")],n);const l=n;

exports.default = l;
