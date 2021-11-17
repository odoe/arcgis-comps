import { C as s, e, a as d, i, f as s$1, aI as d$1 } from './jsxFactory-ef3e403e.js';
import { M } from './unitUtils-8a2b838a.js';
import { t } from './BitmapContainer-ba3f0cfc.js';
import { l as l$2, u as u$1 } from './LayerView-f5bf178a.js';
import { S } from './ExportStrategy-fc4a35e4.js';
import { i as i$1 } from './RefreshableLayerView-c316d72e.js';
import { g } from './commonProperties-e22a7011.js';
import { l as l$1 } from './ExportWMSImageParameters-bcee9cc8.js';
import './index-5b4f4de1.js';
import './JSONSupport-a5eb98e7.js';
import './WGLContainer-bc4e3a84.js';
import './MapView-324b0776.js';
import './CollectionFlattener-70fb34fc.js';
import './HandleOwner-ebad91ab.js';
import './reactiveUtils-2b52b231.js';
import './workers-f3905e14.js';
import './executeQueryJSON-26bfb9ee.js';
import './utils-33abd62d.js';
import './query-c4cbba7e.js';
import './normalizeUtils-9f7b714c.js';
import './pbfQueryUtils-8cea6afc.js';
import './pbf-4154bf24.js';
import './OptimizedFeature-20e2f9bb.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-69ba1f2b.js';
import './zscale-5759f488.js';
import './Query-fd5e1b7b.js';
import './TimeExtent-fb7ed3e3.js';
import './Field-c395cfbd.js';
import './fieldType-d6b0953a.js';
import './FeatureSet-2b04e61f.js';
import './TopFeaturesQuery-10871c16.js';
import './Heading-88f80afd.js';
import './utils-51d0d46b.js';
import './asyncUtils-968a02e9.js';
import './ItemCache-3713f352.js';
import './MemCache-bf2be364.js';
import './utils-f8425723.js';
import './widget-e93f25c6.js';
import './vmEvent-bdc3bebc.js';
import './QueryTask-f49291d6.js';
import './compilerUtils-be3a2322.js';
import './featureConversionUtils-a454d4b2.js';
import './Task-b0dd0710.js';
import './FeatureLayer-0ee96f86.js';
import './UniqueValueRenderer-1e1c8bf1.js';
import './VisualVariablesMixin-0776df0b.js';
import './colorRamps-a6280e46.js';
import './ColorStop-d3744592.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-5b3d6d65.js';
import './lengthUtils-26f6142e.js';
import './diffUtils-1f52a3dd.js';
import './jsonUtils-9c0d7442.js';
import './styleUtils-f18fb225.js';
import './DictionaryRenderer-b0e19146.js';
import './LRUCache-59f5b25d.js';
import './jsonUtils-595f52d3.js';
import './Layer-5a380094.js';
import './HeightModelInfo-2bd39a29.js';
import './APIKeyMixin-a3a0d40c.js';
import './ArcGISService-30368d07.js';
import './arcgisLayerUrl-06668ce7.js';
import './BlendLayer-81c24642.js';
import './jsonUtils-7ed7a510.js';
import './mat4-fe6f4784.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-ca53bbdf.js';
import './labelingInfo-1b49455f.js';
import './LabelClass-5f15d30f.js';
import './labelUtils-ad1dc3a0.js';
import './defaultsJSON-53258912.js';
import './OperationalLayer-63ec0fa5.js';
import './OrderedLayer-d40ec16a.js';
import './PortalLayer-2d4eca15.js';
import './PortalItem-496c46b9.js';
import './RefreshableLayer-079cea19.js';
import './ScaleRangeLayer-cb457ce8.js';
import './TemporalLayer-64ff2afe.js';
import './TimeInfo-e0d5d311.js';
import './FeatureType-6da2d9f8.js';
import './fieldProperties-cc8fc820.js';
import './FieldsIndex-d76382ca.js';
import './LayerFloorInfo-c765d601.js';
import './styleUtils-305b69b7.js';
import './popupUtils-5accf1e0.js';
import './TileStore-a3382c75.js';
import './TileKey-56deb206.js';
import './quickselect-ccfd8cff.js';
import './layerViewUtils-881ca26c.js';
import './GoTo-c7503168.js';
import './mathUtils-16c0d833.js';
import './TileInfo-8df7de31.js';
import './Basemap-5d7d3914.js';
import './loadAll-5f59a7da.js';
import './writeUtils-86a1a968.js';
import './TablesMixin-f3bfd686.js';
import './GraphicsCollection-93be4d65.js';
import './Scheduler-bf4dcdbd.js';
import './unitBezier-0f2e6a45.js';
import './mat2d-9870c32e.js';
import './vec2-c76b9984.js';
import './vec2f64-503345b4.js';
import './projection-0d4d5278.js';
import './mat3-37a7c443.js';
import './vec2f32-7c7b1123.js';
import './TileStrategy-2047ff7a.js';
import './screenshotUtils-779cdb1c.js';
import './capabilities-07025a00.js';
import './definitions-a1bd4630.js';
import './VertexArrayObject-b1cec3ed.js';
import './Texture-02338d74.js';
import './Utils-8509bfb9.js';
import './number-888f4898.js';
import './ShaderCompiler-1ba0e7b6.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-7a78d364.js';
import './pixelUtils-14370fa4.js';
import './Container-b4c3ae6f.js';
import './EffectList-1cdcf1eb.js';
import './earcut-05cd758b.js';
import './Bitmap-fd5d376a.js';

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
