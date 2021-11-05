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
let h=class extends(LayerView.l(LayerView.u)){constructor(){super(...arguments),this._handles=new request.u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const r=this.graphicsViews.map((r=>r.hitTest(e,s)));return Promise.all(r).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){request.t$2(this.layer.featureCollections)||this.layer.featureCollections.forEach((e=>{const s=new BaseGraphicContainer.rt({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer.i(this.view.featuresTilingScheme)});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=request.e([request.i("esri.views.2d.layers.RouteLayerView2D")],h);const c=h;

exports.default = c;
