import { h as s, e, a as d, i, f as s$1, aK as d$1 } from './jsxFactory-a3b6abde.js';
import { M } from './Graphic-08cda9ca.js';
import { t } from './BitmapContainer-50d8431a.js';
import { l as l$2, u as u$1 } from './LayerView-056f08df.js';
import { S } from './ExportStrategy-b449a652.js';
import { i as i$1 } from './RefreshableLayerView-0a229f4d.js';
import { g } from './commonProperties-ad8badbd.js';
import { l as l$1 } from './ExportWMSImageParameters-17ea29a1.js';
import './index-8dec7690.js';
import './JSONSupport-4f0a3248.js';
import './WGLContainer-f22a8645.js';
import './MapView-fd6af8ef.js';
import './CollectionFlattener-6fc74400.js';
import './HandleOwner-a0b41b75.js';
import './reactiveUtils-aa11596b.js';
import './workers-82dadb41.js';
import './executeQueryJSON-21f02626.js';
import './utils-6b47d93a.js';
import './query-0985d8b5.js';
import './normalizeUtils-359d2c6f.js';
import './pbfQueryUtils-8da18556.js';
import './pbf-a77a8e4c.js';
import './OptimizedFeature-3d0408e5.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-407bfc75.js';
import './zscale-6af4ef9a.js';
import './Query-a20a7572.js';
import './TimeExtent-a92e5996.js';
import './Field-416cada2.js';
import './fieldType-7f2a820b.js';
import './FeatureSet-d7537daf.js';
import './TopFeaturesQuery-4aea53d6.js';
import './Heading-312c4ffe.js';
import './utils-01c563d8.js';
import './asyncUtils-9a49e799.js';
import './ItemCache-f80eba0b.js';
import './MemCache-dfacc658.js';
import './utils-f8425723.js';
import './widget-7d4c291e.js';
import './vmEvent-bdc3bebc.js';
import './QueryTask-74d4023b.js';
import './compilerUtils-a5ae094d.js';
import './featureConversionUtils-ef2563e9.js';
import './Task-5476576b.js';
import './FeatureLayer-6179c233.js';
import './UniqueValueRenderer-8dbcac2c.js';
import './VisualVariablesMixin-b52a2c87.js';
import './colorRamps-270af342.js';
import './ColorStop-e7cb8b17.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-21378141.js';
import './lengthUtils-e1fe9a45.js';
import './diffUtils-a2ab1186.js';
import './jsonUtils-43243fe0.js';
import './styleUtils-91b1203b.js';
import './DictionaryRenderer-80042e03.js';
import './LRUCache-d4f192fd.js';
import './jsonUtils-66ddb072.js';
import './MultiOriginJSONSupport-22dd2d29.js';
import './HeightModelInfo-5a7b6583.js';
import './APIKeyMixin-d87deecc.js';
import './ArcGISService-88c76264.js';
import './arcgisLayerUrl-a1acfaeb.js';
import './BlendLayer-1d9f1c9a.js';
import './jsonUtils-efaaa503.js';
import './mat4-3acd3594.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-92abdfc3.js';
import './labelingInfo-af47848f.js';
import './LabelClass-a0793742.js';
import './labelUtils-434b8348.js';
import './defaultsJSON-53258912.js';
import './OperationalLayer-26aa2ff7.js';
import './OrderedLayer-2f7497c3.js';
import './PortalLayer-8e73039a.js';
import './PortalItem-4dd070a8.js';
import './RefreshableLayer-5b977e98.js';
import './ScaleRangeLayer-2f975321.js';
import './TemporalLayer-f3b14395.js';
import './TimeInfo-8ecf4da2.js';
import './FeatureType-ba8f07c3.js';
import './fieldProperties-f216bcfb.js';
import './FieldsIndex-87a4d86b.js';
import './LayerFloorInfo-a2a78182.js';
import './styleUtils-22872348.js';
import './popupUtils-9dc503ca.js';
import './TileStore-f74dddba.js';
import './TileKey-6190320d.js';
import './quickselect-ccfd8cff.js';
import './GoTo-5947d15d.js';
import './mathUtils-6ae1ce0d.js';
import './TileInfo-11d4e5af.js';
import './Basemap-726ae687.js';
import './loadAll-b50c1134.js';
import './writeUtils-043189c3.js';
import './TablesMixin-92eb787e.js';
import './GraphicsCollection-bd1f8010.js';
import './Scheduler-1618ba8f.js';
import './unitBezier-0f2e6a45.js';
import './mat2d-c1b9a27f.js';
import './vec2-42a7347f.js';
import './vec2f64-503345b4.js';
import './projection-0b5fc15a.js';
import './mat3-1b3794e5.js';
import './vec2f32-7c7b1123.js';
import './TileStrategy-813150bb.js';
import './screenshotUtils-f5f99bb9.js';
import './capabilities-2d1bcd77.js';
import './definitions-a1bd4630.js';
import './VertexArrayObject-c9bc61ab.js';
import './Texture-87b2db4d.js';
import './Utils-44b2954a.js';
import './number-888f4898.js';
import './ShaderCompiler-ec0c1f66.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-3186eef7.js';
import './pixelUtils-c05dd2ad.js';
import './Container-ce32194d.js';
import './EffectList-a40f7f6a.js';
import './earcut-05cd758b.js';
import './Bitmap-09b28623.js';

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