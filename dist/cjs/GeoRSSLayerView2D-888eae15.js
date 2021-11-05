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
let m=class extends(LayerView.l(LayerView.u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return Promise.all(s).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([request.i$3(this.layer,"featureCollections",(e=>{this._clear();for(const{popupInfo:i,featureSet:t,layerDefinition:o}of e){const e=request.g$5.fromJSON(t),l=new request.S$2(e.features),c=o.drawingInfo,m=i?request.M$1.fromJSON(i):null,y=request.t$3(c.renderer),g=new BaseGraphicContainer.rt({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:l,renderer:y,container:new GraphicContainer.i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}})),request.i$3(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new request.p$4({symbol:e});})),request.i$3(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new request.p$4({symbol:e});})),request.i$3(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new request.p$4({symbol:e});}))],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};m=request.e([request.i("esri.views.2d.layers.GeoRSSLayerView2D")],m);const y=m;

exports.default = y;
