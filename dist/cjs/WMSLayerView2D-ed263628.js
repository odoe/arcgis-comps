'use strict';

const request = require('./MapView-1195e7f1.js');
const BitmapContainer = require('./BitmapContainer-0b6021ad.js');
const LayerView = require('./LayerView-870ab467.js');
const ExportStrategy = require('./ExportStrategy-7abb1b08.js');
const RefreshableLayerView = require('./RefreshableLayerView-fe90cf84.js');
const ExportWMSImageParameters = require('./ExportWMSImageParameters-c2b93e52.js');
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
const a=a=>{let i=class extends a{initialize(){this.exportImageParameters=new ExportWMSImageParameters.l({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new request.s$3("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new request.s$3("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s=this.createFetchPopupFeaturesQuery(e);if(!s)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s;if(!(p&&a&&i))throw new request.s$3("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});const u=t.fetchFeatureInfo(p,a,i,m,n);return Promise.resolve(u?[u]:[])}};return request.e([request.d()],i.prototype,"exportImageParameters",void 0),request.e([request.d({readOnly:!0})],i.prototype,"exportImageVersion",null),request.e([request.d()],i.prototype,"layer",void 0),request.e([request.d(request.g$3)],i.prototype,"timeExtent",void 0),i=request.e([request.i("esri.layers.mixins.WMSLayerView")],i),i};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=request.s.getLogger("esri.views.2d.layers.WMSLayerView2D");let u=class extends(a(RefreshableLayerView.i(LayerView.l(LayerView.u)))){initialize(){const{layer:e,view:r}=this;e.supportsSpatialReference(r.spatialReference)||this.addResolvingPromise(Promise.reject(new request.s$3("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})));}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{request.d$2(e)||l.error(e);}));}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this._bitmapContainer=new BitmapContainer.t,this.container.addChild(this._bitmapContainer),this.strategy=new ExportStrategy.S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion");}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:s}=e,{spatialReference:a}=t;let n=null,p=0,h=0;if(r.children.some((e=>{const{width:t,height:r,resolution:m,x:c,y:d}=e,l=c+m*t,u=d-m*r;return i>=c&&i<=l&&s<=d&&s>=u&&(n=new request.M({xmin:c,ymin:u,xmax:l,ymax:d,spatialReference:a}),p=t,h=r,!0)})),!n)return null;const m=n.width/p,c=Math.round((i-n.xmin)/m),d=Math.round((n.ymax-s)/m);return {extent:n,width:p,height:h,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,...i})}};request.e([request.d()],u.prototype,"strategy",void 0),request.e([request.d()],u.prototype,"updating",void 0),u=request.e([request.i("esri.views.2d.layers.WMSLayerView2D")],u);const y=u;

exports.default = y;
