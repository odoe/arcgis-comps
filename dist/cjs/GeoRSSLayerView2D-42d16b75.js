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
let m=class extends(LayerView.l(LayerView.u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return Promise.all(s).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([request.i$3(this.layer,"featureCollections",(e=>{this._clear();for(const{popupInfo:i,featureSet:t,layerDefinition:o}of e){const e=request.g$5.fromJSON(t),l=new request.S$2(e.features),c=o.drawingInfo,m=i?request.M$1.fromJSON(i):null,y=request.t$3(c.renderer),g=new BaseGraphicContainer.rt({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:l,renderer:y,container:new GraphicContainer.i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}})),request.i$3(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new request.p$4({symbol:e});})),request.i$3(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new request.p$4({symbol:e});})),request.i$3(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new request.p$4({symbol:e});}))],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};m=request.e([request.i("esri.views.2d.layers.GeoRSSLayerView2D")],m);const y=m;

exports.default = y;
