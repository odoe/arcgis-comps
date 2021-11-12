import { k as S, e, a as d, i as i$1 } from './jsxFactory-b8b7429b.js';
import { l } from './VertexArrayObject-2da47f5b.js';
import './Texture-95288d63.js';
import { a as a$1 } from './WGLContainer-55b93482.js';
import { u, l as l$1 } from './LayerView-4c0164d7.js';
import { a6 as n, aL as t } from './Graphic-75d1efd2.js';
import './index-921bd636.js';
import './MapView-99a05548.js';
import './CollectionFlattener-011440e6.js';
import './HandleOwner-89177892.js';
import './reactiveUtils-37eae8e4.js';
import './workers-abd4af5a.js';
import './executeQueryJSON-c8bf8101.js';
import './JSONSupport-15eefdaf.js';
import './utils-5cb95ff2.js';
import './query-99f5f334.js';
import './normalizeUtils-097054a0.js';
import './pbfQueryUtils-fe0206b7.js';
import './pbf-ac00f72c.js';
import './OptimizedFeature-ac6d77d3.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-ca210e89.js';
import './zscale-aa683312.js';
import './Query-d6a1dd36.js';
import './TimeExtent-11f1925b.js';
import './Field-3662c57d.js';
import './fieldType-1c6ed2e9.js';
import './FeatureSet-ac01aefd.js';
import './TopFeaturesQuery-cb0fdf83.js';
import './Heading-d3c07d3f.js';
import './utils-64bd22f7.js';
import './asyncUtils-4aacff64.js';
import './ItemCache-4c9e4246.js';
import './MemCache-ba22e87a.js';
import './utils-f8425723.js';
import './widget-fd14b780.js';
import './vmEvent-bdc3bebc.js';
import './QueryTask-56cd56c4.js';
import './compilerUtils-fd4d1928.js';
import './featureConversionUtils-3b0788c3.js';
import './Task-04425ab7.js';
import './FeatureLayer-f6c171eb.js';
import './UniqueValueRenderer-c001e8b8.js';
import './VisualVariablesMixin-a733e60f.js';
import './colorRamps-564a1b52.js';
import './ColorStop-6bbf8625.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-d30b1042.js';
import './lengthUtils-c1fc84e6.js';
import './diffUtils-7afe88f2.js';
import './jsonUtils-904bd6e1.js';
import './styleUtils-2aef643e.js';
import './DictionaryRenderer-5a73e1dd.js';
import './LRUCache-4697cf73.js';
import './jsonUtils-5413cd65.js';
import './MultiOriginJSONSupport-409caa57.js';
import './HeightModelInfo-6673666d.js';
import './APIKeyMixin-e6f88474.js';
import './ArcGISService-78aba528.js';
import './arcgisLayerUrl-f16875e5.js';
import './BlendLayer-8a19cb4c.js';
import './jsonUtils-9b8c4071.js';
import './mat4-7dc89e3f.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-65dc0d22.js';
import './labelingInfo-7446840d.js';
import './commonProperties-c39cb6e7.js';
import './LabelClass-37380caa.js';
import './labelUtils-27593fd8.js';
import './defaultsJSON-53258912.js';
import './OperationalLayer-7b6946f0.js';
import './OrderedLayer-d05dde4e.js';
import './PortalLayer-c699b91c.js';
import './PortalItem-86be48d7.js';
import './RefreshableLayer-eff019c1.js';
import './ScaleRangeLayer-fd3df739.js';
import './TemporalLayer-1525e917.js';
import './TimeInfo-1e2583f2.js';
import './FeatureType-f5fde895.js';
import './fieldProperties-666e1160.js';
import './FieldsIndex-b4d96270.js';
import './LayerFloorInfo-35df5ab8.js';
import './styleUtils-ccdf1dd0.js';
import './popupUtils-62f80c9e.js';
import './TileStore-0849dbc4.js';
import './TileKey-ca920992.js';
import './quickselect-ccfd8cff.js';
import './GoTo-3a7bfc1d.js';
import './mathUtils-ed056359.js';
import './TileInfo-a600dd32.js';
import './Basemap-c5f20d06.js';
import './loadAll-78f2a3b0.js';
import './writeUtils-840b5f7a.js';
import './TablesMixin-4e7e4fb2.js';
import './GraphicsCollection-94ceaf9a.js';
import './Scheduler-f38cd3ae.js';
import './unitBezier-0f2e6a45.js';
import './mat2d-c0cd43b0.js';
import './vec2-81a18cb4.js';
import './vec2f64-503345b4.js';
import './projection-6b3ce748.js';
import './mat3-9ad554b9.js';
import './vec2f32-7c7b1123.js';
import './TileStrategy-34d0ce47.js';
import './screenshotUtils-61ccf49a.js';
import './capabilities-828d86c4.js';
import './definitions-a1bd4630.js';
import './Utils-0cbcb18a.js';
import './number-888f4898.js';
import './ShaderCompiler-f4762cde.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-35547bf1.js';
import './pixelUtils-b6fb0f03.js';
import './Container-86ac9c83.js';
import './EffectList-ad3aebe3.js';
import './earcut-05cd758b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends a$1{constructor(){super(...arguments),this._lastWidth=0,this._lastHeight=0,this.requiresDedicatedFBO=!1;}dispose(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null);}doRender(e){const t=this.createRenderParams(e),{context:r,painter:s,profiler:i}=t;this._prevFBO=r.getBoundFramebufferObject(),i.recordContainerStart(this.name);const o=this._getFbo(t),a=s.getRenderTarget();r.bindFramebuffer(o),s.setRenderTarget(o),r.setDepthWriteEnabled(!0),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);for(const n of this.children)n.beforeRender(e);for(const n of this.children)n.processRender(t);for(const n of this.children)n.afterRender(e);s.setRenderTarget(a),r.bindFramebuffer(this._prevFBO),s.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),r.setStencilTestEnabled(!1),r.setStencilWriteMask(0),s.blitTexture(r,o.colorTexture,9728),s.compositeLayer(t,this.computedOpacity),i.recordContainerEnd();}createRenderParams(e){return {...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(t){const{context:r,painter:s}=t,{width:i,height:o}=r.getViewport();if(i!==this._lastWidth||o!==this._lastHeight)if(this._lastWidth=i,this._lastHeight=o,this._renderTarget)this._renderTarget.resize(i,o);else {const t={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:i,height:o},a={colorTarget:0,depthStencilTarget:3};this._renderTarget=new l(r,a,t,s.getSharedStencilBuffer());}return this._renderTarget}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends u{constructor(e){super(e),this.type="group",this.layerViews=new S;}initialize(){this.handles.add([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),this.layerViews.on("after-changes",(()=>this._layerViewsAfterChangesHandler())),this.layer.watch("visibilityMode",(()=>this._visibilityModeHandler()),!0),this.watch("visible",(()=>this._visibleHandler()),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler();}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")));}isUpdating(){return this.layerViews.some((e=>e.updating))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,i)=>e+i.updatingProgress),0)/this.layerViews.length}_hasLayerViewVisibleOverrides(){return this.layerViews.some((e=>e._isOverridden("visible")))}_findLayerViewForLayer(e){return e&&this.layerViews.find((i=>i.layer===e))}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find((e=>{const i=this._findLayerViewForLayer(e);return i&&i.visible}));return e&&this._findLayerViewForLayer(e)}_enforceExclusiveVisibility(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((i=>{i.visible=i===e;})));}_layerViewsChangeHandler(e){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((e=>e.watch("visible",(i=>this._layerViewVisibleHandler(i,e)),!0))).toArray(),"grouplayerview:visible");const i=e.added[e.added.length-1];let s=null;i&&i.visible&&(s=i),this._enforceVisibility(s);}_layerViewsAfterChangesHandler(){this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map((e=>e.watch("updating",(()=>this._updateUpdating()),!0))).toArray(),"grouplayerview:updating"),this._updateUpdating();}_enforceVisibility(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const e=this.visible;this.layerViews.forEach((i=>{i.visible=e;}));break}case"exclusive":this._enforceExclusiveVisibility(e);}}_visibilityModeHandler(){this._enforceVisibility();}_layerViewVisibleHandler(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i);}}_visibleHandler(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(e=this.layer)?void 0:e.visibilityMode)&&this._enforceVisibility();}_updateUpdating(){this.notifyChange("updating");}};e([d({cast:t})],o.prototype,"layerViews",null),e([d()],o.prototype,"view",void 0),e([d({readOnly:!0})],o.prototype,"updatingProgress",null),o=e([i$1("esri.views.layers.GroupLayerView")],o);const h=o;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends(l$1(h)){constructor(){super(...arguments),this.container=new r;}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(()=>this._updateStageChildren())),"grouplayerview2d");}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren();}hitTest(e,r){return null}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};a=e([i$1("esri.views.2d.layers.GroupLayerView2D")],a);const i=a;

export default i;
