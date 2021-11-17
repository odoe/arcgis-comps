import { I as S, e, a as d, i as i$1 } from './jsxFactory-ef3e403e.js';
import { l } from './VertexArrayObject-b1cec3ed.js';
import './Texture-02338d74.js';
import { a as a$1 } from './WGLContainer-bc4e3a84.js';
import { u, l as l$1 } from './LayerView-f5bf178a.js';
import { aK as n, be as t } from './unitUtils-8a2b838a.js';
import './index-5b4f4de1.js';
import './MapView-324b0776.js';
import './CollectionFlattener-70fb34fc.js';
import './HandleOwner-ebad91ab.js';
import './reactiveUtils-2b52b231.js';
import './workers-f3905e14.js';
import './executeQueryJSON-26bfb9ee.js';
import './JSONSupport-a5eb98e7.js';
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
import './commonProperties-e22a7011.js';
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
