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
const c={remove(){},pause(){},resume(){}};let n=class extends(LayerView.l(LayerView.u)){initialize(){this.graphicsView=new BaseGraphicContainer.rt({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new GraphicContainer.i(this.view.featuresTilingScheme)});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let s;return "number"==typeof e?s=[e]:e instanceof request.h$1?s=[e.uid]:Array.isArray(e)&&e.length>0?s="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):request.S.isCollection(e)&&(s=e.map((e=>e&&e.uid)).toArray()),s=s.filter((e=>null!=e)),s.length?(this.graphicsView.addHighlight(s),{remove:()=>this.graphicsView.removeHighlight(s)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};request.e([request.d()],n.prototype,"graphicsView",void 0),request.e([request.d()],n.prototype,"updating",void 0),n=request.e([request.i("esri.views.2d.layers.GraphicsLayerView2D")],n);const l=n;

exports.default = l;
