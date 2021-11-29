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
let h=class extends(LayerView.l(LayerView.u)){constructor(){super(...arguments),this._handles=new request.u$2,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const r=this.graphicsViews.map((r=>r.hitTest(e,s)));return Promise.all(r).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){request.t(this.layer.featureCollections)||this.layer.featureCollections.forEach((e=>{const s=new BaseGraphicContainer.rt({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer.i(this.view.featuresTilingScheme)});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=request.e([request.i("esri.views.2d.layers.RouteLayerView2D")],h);const c=h;

exports.default = c;
