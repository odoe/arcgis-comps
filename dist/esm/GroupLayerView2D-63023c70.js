import { e, d, i as i$1, E as S } from './messageBundle-8a146a9b.js';
import { l } from './VertexArrayObject-fe436e16.js';
import './Texture-2c5b5ae1.js';
import { a as a$1 } from './WGLContainer-fb6cd8ae.js';
import { u, l as l$1 } from './LayerView-755bba7e.js';
import { aZ as t, z as n } from './unitUtils-c707ba3c.js';
import './index-41925fe8.js';
import './MapView-6cbca3ba.js';
import './CollectionFlattener-2797ca68.js';
import './HandleOwner-6cdc634d.js';
import './reactiveUtils-a5f838c7.js';
import './workers-c79250a3.js';
import './executeQueryJSON-4dc0a2fa.js';
import './JSONSupport-4e29e63d.js';
import './utils-3a45351e.js';
import './query-70db7072.js';
import './normalizeUtils-c91b4ce9.js';
import './pbfQueryUtils-861d8d5b.js';
import './pbf-bb65af95.js';
import './OptimizedFeature-d5cd2d1c.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-f92acabb.js';
import './zscale-5703857d.js';
import './Query-71270a43.js';
import './TimeExtent-16986fe0.js';
import './Field-fbfaf20d.js';
import './fieldType-f80f0b3d.js';
import './FeatureSet-e481fbb3.js';
import './TopFeaturesQuery-5a679b50.js';
import './symbolUtils-d248a142.js';
import './utils-94a817af.js';
import './asyncUtils-c98101f9.js';
import './ItemCache-fb7de9d2.js';
import './MemCache-73bb45e2.js';
import './utils-f8425723.js';
import './widget-6ffe6c9e.js';
import './QueryTask-dd4aeb97.js';
import './featureConversionUtils-e2de20bf.js';
import './Task-3d644895.js';
import './FeatureLayer-52da5e2e.js';
import './UniqueValueRenderer-75e84d49.js';
import './VisualVariablesMixin-66f084f4.js';
import './colorRamps-b0e37c54.js';
import './ColorStop-ff4a3943.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-3ac464e8.js';
import './lengthUtils-a6878787.js';
import './diffUtils-14ca3884.js';
import './jsonUtils-7105a0de.js';
import './styleUtils-5fe9231e.js';
import './DictionaryRenderer-4a77ed62.js';
import './LRUCache-b68d19e5.js';
import './jsonUtils-f2130780.js';
import './Layer-455faab4.js';
import './HeightModelInfo-899d5d07.js';
import './APIKeyMixin-f2be3dfc.js';
import './ArcGISService-adf08a63.js';
import './arcgisLayerUrl-30839db3.js';
import './BlendLayer-286c847c.js';
import './jsonUtils-433a912a.js';
import './mat4-1ee7ce2f.js';
import './CustomParametersMixin-05dda462.js';
import './labelingInfo-136b2123.js';
import './commonProperties-0e370622.js';
import './LabelClass-080f9590.js';
import './labelUtils-17428bb2.js';
import './defaultsJSON-f90363d8.js';
import './OperationalLayer-52601c7c.js';
import './OrderedLayer-1aa033f7.js';
import './PortalLayer-faa3179f.js';
import './PortalItem-3f93baa8.js';
import './RefreshableLayer-f326088d.js';
import './ScaleRangeLayer-aeac5429.js';
import './TemporalLayer-f8f255e9.js';
import './TimeInfo-3ee9ad62.js';
import './FeatureType-30442694.js';
import './fieldProperties-530951df.js';
import './FieldsIndex-041474f9.js';
import './LayerFloorInfo-e1a08643.js';
import './styleUtils-32c9f97f.js';
import './popupUtils-b5ee0759.js';
import './TileStore-21b1bb99.js';
import './TileKey-761e63f3.js';
import './quickselect-ccfd8cff.js';
import './aaBoundingRect-6f84e6b7.js';
import './GoTo-759476d4.js';
import './mathUtils-056ec719.js';
import './TileInfo-9ceca7da.js';
import './Basemap-4d7f7799.js';
import './loadAll-446fc3cf.js';
import './writeUtils-a3943f03.js';
import './compilerUtils-844f852c.js';
import './TablesMixin-8c331347.js';
import './GraphicsCollection-d1498daf.js';
import './Scheduler-9fe99f02.js';
import './unitBezier-0f2e6a45.js';
import './mat2df32-1cb93af7.js';
import './vec2-3a86c352.js';
import './vec2f64-7f47d8e4.js';
import './projection-b812ba08.js';
import './mat3-315ee4cf.js';
import './vec2f32-29d55de5.js';
import './TileStrategy-d2661b3c.js';
import './screenshotUtils-d9738486.js';
import './capabilities-d8a3b872.js';
import './definitions-6a5ca2d9.js';
import './Utils-d0125060.js';
import './ShaderCompiler-4e39b343.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-319bd7d7.js';
import './pixelUtils-fc1bd760.js';
import './Container-0b6d10e4.js';
import './EffectList-96b1a6dd.js';
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
