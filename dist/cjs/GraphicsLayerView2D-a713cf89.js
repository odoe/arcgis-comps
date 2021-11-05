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
const c={remove(){},pause(){},resume(){}};let n=class extends(LayerView.l(LayerView.u)){initialize(){this.graphicsView=new BaseGraphicContainer.rt({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new GraphicContainer.i(this.view.featuresTilingScheme)});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let s;return "number"==typeof e?s=[e]:e instanceof request.h$2?s=[e.uid]:Array.isArray(e)&&e.length>0?s="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):request.S$2.isCollection(e)&&(s=e.map((e=>e&&e.uid)).toArray()),s=s.filter((e=>null!=e)),s.length?(this.graphicsView.addHighlight(s),{remove:()=>this.graphicsView.removeHighlight(s)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};request.e([request.d()],n.prototype,"graphicsView",void 0),request.e([request.d()],n.prototype,"updating",void 0),n=request.e([request.i("esri.views.2d.layers.GraphicsLayerView2D")],n);const l=n;

exports.default = l;
