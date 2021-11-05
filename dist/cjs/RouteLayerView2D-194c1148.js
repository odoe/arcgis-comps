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
let h=class extends(LayerView.l(LayerView.u)){constructor(){super(...arguments),this._handles=new request.u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const r=this.graphicsViews.map((r=>r.hitTest(e,s)));return Promise.all(r).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){request.t$2(this.layer.featureCollections)||this.layer.featureCollections.forEach((e=>{const s=new BaseGraphicContainer.rt({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer.i(this.view.featuresTilingScheme)});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=request.e([request.i("esri.views.2d.layers.RouteLayerView2D")],h);const c=h;

exports.default = c;
