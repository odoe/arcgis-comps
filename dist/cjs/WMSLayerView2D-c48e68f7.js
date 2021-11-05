'use strict';

const request = require('./MapView-922b9f1e.js');
const BitmapContainer = require('./BitmapContainer-16118c48.js');
const LayerView = require('./LayerView-fac949a9.js');
const ExportStrategy = require('./ExportStrategy-933176a6.js');
const RefreshableLayerView = require('./RefreshableLayerView-e3888316.js');
const ExportWMSImageParameters = require('./ExportWMSImageParameters-8103f997.js');
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
const a=a=>{let i=class extends a{initialize(){this.exportImageParameters=new ExportWMSImageParameters.l({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new request.s$3("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new request.s$3("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s=this.createFetchPopupFeaturesQuery(e);if(!s)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s;if(!(p&&a&&i))throw new request.s$3("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});const u=t.fetchFeatureInfo(p,a,i,m,n);return Promise.resolve(u?[u]:[])}};return request.e([request.d()],i.prototype,"exportImageParameters",void 0),request.e([request.d({readOnly:!0})],i.prototype,"exportImageVersion",null),request.e([request.d()],i.prototype,"layer",void 0),request.e([request.d(request.g$3)],i.prototype,"timeExtent",void 0),i=request.e([request.i("esri.layers.mixins.WMSLayerView")],i),i};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=request.s.getLogger("esri.views.2d.layers.WMSLayerView2D");let u=class extends(a(RefreshableLayerView.i(LayerView.l(LayerView.u)))){initialize(){const{layer:e,view:r}=this;e.supportsSpatialReference(r.spatialReference)||this.addResolvingPromise(Promise.reject(new request.s$3("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})));}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{request.d$2(e)||l.error(e);}));}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this._bitmapContainer=new BitmapContainer.t,this.container.addChild(this._bitmapContainer),this.strategy=new ExportStrategy.S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion");}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:s}=e,{spatialReference:a}=t;let n=null,p=0,h=0;if(r.children.some((e=>{const{width:t,height:r,resolution:m,x:c,y:d}=e,l=c+m*t,u=d-m*r;return i>=c&&i<=l&&s<=d&&s>=u&&(n=new request.M({xmin:c,ymin:u,xmax:l,ymax:d,spatialReference:a}),p=t,h=r,!0)})),!n)return null;const m=n.width/p,c=Math.round((i-n.xmin)/m),d=Math.round((n.ymax-s)/m);return {extent:n,width:p,height:h,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,...i})}};request.e([request.d()],u.prototype,"strategy",void 0),request.e([request.d()],u.prototype,"updating",void 0),u=request.e([request.i("esri.views.2d.layers.WMSLayerView2D")],u);const y=u;

exports.default = y;
