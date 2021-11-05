import { e, d, bn as g, i, a7 as s, s as s$1, aH as d$1, a8 as M } from './MapView-a31458ed.js';
import { t } from './BitmapContainer-d9540b04.js';
import { l as l$2, u as u$1 } from './LayerView-4f2ac95c.js';
import { S } from './ExportStrategy-cbda89fd.js';
import { i as i$1 } from './RefreshableLayerView-37b95d4f.js';
import { l as l$1 } from './ExportWMSImageParameters-98676e3f.js';
import './index-3067d8ff.js';
import './WGLContainer-5366718c.js';
import './definitions-6a5ca2d9.js';
import './VertexArrayObject-f53fdf9c.js';
import './Texture-a7a0b3dd.js';
import './Utils-f78b5dcf.js';
import './ShaderCompiler-9d72a5ed.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-860012b2.js';
import './pixelUtils-6a5b76e5.js';
import './Container-b142640e.js';
import './EffectList-edbd1525.js';
import './earcut-05cd758b.js';
import './Bitmap-86f313fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=a=>{let i$1=class extends a{initialize(){this.exportImageParameters=new l$1({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s$1=this.createFetchPopupFeaturesQuery(e);if(!s$1)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s$1;if(!(p&&a&&i))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});const u=t.fetchFeatureInfo(p,a,i,m,n);return Promise.resolve(u?[u]:[])}};return e([d()],i$1.prototype,"exportImageParameters",void 0),e([d({readOnly:!0})],i$1.prototype,"exportImageVersion",null),e([d()],i$1.prototype,"layer",void 0),e([d(g)],i$1.prototype,"timeExtent",void 0),i$1=e([i("esri.layers.mixins.WMSLayerView")],i$1),i$1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=s$1.getLogger("esri.views.2d.layers.WMSLayerView2D");let u=class extends(a(i$1(l$2(u$1)))){initialize(){const{layer:e,view:r}=this;e.supportsSpatialReference(r.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})));}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{d$1(e)||l.error(e);}));}attach(){const{layer:e}=this,{imageMaxHeight:t$1,imageMaxWidth:r}=e;this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t$1,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion");}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:s}=e,{spatialReference:a}=t;let n=null,p=0,h=0;if(r.children.some((e=>{const{width:t,height:r,resolution:m,x:c,y:d}=e,l=c+m*t,u=d-m*r;return i>=c&&i<=l&&s<=d&&s>=u&&(n=new M({xmin:c,ymin:u,xmax:l,ymax:d,spatialReference:a}),p=t,h=r,!0)})),!n)return null;const m=n.width/p,c=Math.round((i-n.xmin)/m),d=Math.round((n.ymax-s)/m);return {extent:n,width:p,height:h,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,...i})}};e([d()],u.prototype,"strategy",void 0),e([d()],u.prototype,"updating",void 0),u=e([i("esri.views.2d.layers.WMSLayerView2D")],u);const y=u;

export default y;
