'use strict';

const request = require('./MapView-922b9f1e.js');
const BitmapContainer = require('./BitmapContainer-16118c48.js');
const LayerView = require('./LayerView-fac949a9.js');
const ExportStrategy = require('./ExportStrategy-933176a6.js');
const RefreshableLayerView = require('./RefreshableLayerView-e3888316.js');
require('./index-57f2cfbb.js');
require('./WGLContainer-ee8dfeda.js');
require('./definitions-b4888cc6.js');
require('./VertexArrayObject-f7735e8a.js');
require('./Texture-1414de91.js');
require('./Utils-b513a4f3.js');
require('./ShaderCompiler-147fe73a.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-c11630fb.js');
require('./pixelUtils-c061d98b.js');
require('./Container-2db43b58.js');
require('./EffectList-f75e6e29.js');
require('./earcut-d5562923.js');
require('./Bitmap-b7a48c7c.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=request.s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(RefreshableLayerView.i(LayerView.l(LayerView.u))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{request.d$2(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new BitmapContainer.t,this.container.addChild(this._bitmapContainer),this.strategy=new ExportStrategy.S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};request.e([request.d()],c.prototype,"strategy",void 0),request.e([request.d()],c.prototype,"updating",void 0),c=request.e([request.i("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;

exports.default = d;
