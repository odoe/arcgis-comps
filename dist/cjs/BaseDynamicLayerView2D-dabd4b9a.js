'use strict';

const request = require('./MapView-1726f571.js');
const BitmapContainer = require('./BitmapContainer-54c3cd83.js');
const LayerView = require('./LayerView-ab44860f.js');
const ExportStrategy = require('./ExportStrategy-23dd28a8.js');
const RefreshableLayerView = require('./RefreshableLayerView-bf1c1d9d.js');
require('./index-fde8502c.js');
require('./WGLContainer-5f61b6fe.js');
require('./definitions-b4888cc6.js');
require('./VertexArrayObject-79d493bc.js');
require('./Texture-81e2ece6.js');
require('./Utils-e5a61fef.js');
require('./ShaderCompiler-c2546df1.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-7ad63f3d.js');
require('./pixelUtils-d4b82358.js');
require('./Container-16ae77e1.js');
require('./EffectList-c8b0929b.js');
require('./earcut-d5562923.js');
require('./Bitmap-30fbdf88.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=request.s$2.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(RefreshableLayerView.i(LayerView.l(LayerView.u))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{request.d$1(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new BitmapContainer.t,this.container.addChild(this._bitmapContainer),this.strategy=new ExportStrategy.S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};request.e([request.d()],c.prototype,"strategy",void 0),request.e([request.d()],c.prototype,"updating",void 0),c=request.e([request.i("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;

exports.default = d;
