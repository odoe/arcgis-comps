'use strict';

const request = require('./MapView-1195e7f1.js');
const BitmapContainer = require('./BitmapContainer-0b6021ad.js');
const LayerView = require('./LayerView-870ab467.js');
const ExportStrategy = require('./ExportStrategy-7abb1b08.js');
const RefreshableLayerView = require('./RefreshableLayerView-fe90cf84.js');
require('./index-b630e408.js');
require('./WGLContainer-d1dbdedc.js');
require('./definitions-b4888cc6.js');
require('./VertexArrayObject-02afb047.js');
require('./Texture-51894e1f.js');
require('./Utils-cf62b8df.js');
require('./ShaderCompiler-7b6d74e7.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-a9d25bbc.js');
require('./pixelUtils-dcef9151.js');
require('./Container-7c02556c.js');
require('./EffectList-c2e3d9b4.js');
require('./earcut-d5562923.js');
require('./Bitmap-0ce1bf83.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=request.s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(RefreshableLayerView.i(LayerView.l(LayerView.u))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{request.d$2(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new BitmapContainer.t,this.container.addChild(this._bitmapContainer),this.strategy=new ExportStrategy.S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};request.e([request.d()],c.prototype,"strategy",void 0),request.e([request.d()],c.prototype,"updating",void 0),c=request.e([request.i("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;

exports.default = d;
