import { I as S, e, a as d, i as i$1 } from './jsxFactory-c96bb45c.js';
import { l } from './VertexArrayObject-1f343ba6.js';
import './Texture-167b44f1.js';
import { a as a$1 } from './WGLContainer-39960109.js';
import { u, l as l$1 } from './LayerView-7c0fe9c4.js';
import { an as n, aU as t } from './Graphic-6c72131a.js';
import './index-921bd636.js';
import './MapView-e30b3dee.js';
import './CollectionFlattener-567ea124.js';
import './HandleOwner-6fdf8ee8.js';
import './reactiveUtils-4ba1fb4b.js';
import './workers-5ad649f9.js';
import './unitUtils-b25ae8cb.js';
import './executeQueryJSON-165e5051.js';
import './JSONSupport-5a9f556a.js';
import './utils-8991f658.js';
import './query-0da4fa5c.js';
import './normalizeUtils-1fd7c0f1.js';
import './pbfQueryUtils-e36554ac.js';
import './pbf-1b9dc626.js';
import './OptimizedFeature-6034ce0f.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-0ff40b9b.js';
import './zscale-cec9b507.js';
import './Query-792b142d.js';
import './TimeExtent-1bc95591.js';
import './Field-2b6029f8.js';
import './RangeDomain-de3132b0.js';
import './fieldType-b9f9365f.js';
import './FeatureSet-22102ca4.js';
import './AttachmentQuery-42d07544.js';
import './Heading-7763ec3e.js';
import './utils-ce0d30fb.js';
import './asyncUtils-dc4bd819.js';
import './ItemCache-2d2e76a8.js';
import './MemCache-e219bcfb.js';
import './utils-f8425723.js';
import './widget-13824d6e.js';
import './vmEvent-bdc3bebc.js';
import './TopFeaturesQuery-31a64765.js';
import './QueryTask-f5ad3db8.js';
import './compilerUtils-128fda14.js';
import './featureConversionUtils-0aaeda4b.js';
import './Task-87780f0a.js';
import './FeatureLayer-9672bbd9.js';
import './UniqueValueRenderer-f2af8ece.js';
import './VisualVariablesMixin-bafacb39.js';
import './colorRamps-693d6433.js';
import './ColorStop-fb26d745.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-506efb2b.js';
import './lengthUtils-7a485aa7.js';
import './diffUtils-491d81df.js';
import './jsonUtils-a31b4632.js';
import './styleUtils-8fedca21.js';
import './DictionaryRenderer-78308a28.js';
import './LRUCache-81490262.js';
import './jsonUtils-580ae154.js';
import './MultiOriginJSONSupport-f6506b2f.js';
import './HeightModelInfo-a87824be.js';
import './APIKeyMixin-4866fda4.js';
import './ArcGISService-4cc51fbf.js';
import './arcgisLayerUrl-2aeded02.js';
import './BlendLayer-70766503.js';
import './jsonUtils-352e8eb7.js';
import './mat4-ef633c62.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-89544c0d.js';
import './labelingInfo-683f3119.js';
import './commonProperties-fa43a2ed.js';
import './LabelClass-65776e47.js';
import './labelUtils-45e9126f.js';
import './defaultsJSON-53258912.js';
import './OperationalLayer-b04e38aa.js';
import './OrderedLayer-8b694b55.js';
import './PortalLayer-df690c5a.js';
import './PortalItem-209a51a1.js';
import './RefreshableLayer-702beb88.js';
import './ScaleRangeLayer-99043c54.js';
import './TemporalLayer-b41e8e6e.js';
import './TimeInfo-9a5e9434.js';
import './FeatureType-8cae0f8f.js';
import './fieldProperties-b0c243c7.js';
import './FieldsIndex-56cf15de.js';
import './LayerFloorInfo-2c65601c.js';
import './styleUtils-e2196c57.js';
import './popupUtils-4957d444.js';
import './TileStore-39bbbf67.js';
import './TileKey-c678a190.js';
import './quickselect-ccfd8cff.js';
import './layerViewUtils-9cf85499.js';
import './GoTo-7624d206.js';
import './mathUtils-91a58478.js';
import './TileInfo-1fc37c81.js';
import './Basemap-37cadf63.js';
import './loadAll-85b9593d.js';
import './writeUtils-4d88cd58.js';
import './TablesMixin-93b17242.js';
import './GraphicsCollection-f199ec2b.js';
import './Scheduler-fb8ceb54.js';
import './unitBezier-0f2e6a45.js';
import './mat2d-b05e5a52.js';
import './vec2-f635f36f.js';
import './vec2f64-503345b4.js';
import './projection-32646abc.js';
import './mat3-351ead7a.js';
import './vec2f32-7c7b1123.js';
import './TileStrategy-8fcd9a8c.js';
import './screenshotUtils-6f247196.js';
import './capabilities-eb3cc9c1.js';
import './definitions-a1bd4630.js';
import './Utils-0dd7fa3e.js';
import './number-888f4898.js';
import './ShaderCompiler-08617240.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-b9f33132.js';
import './pixelUtils-1d6f5ad9.js';
import './Container-aead67d5.js';
import './EffectList-21c65dc8.js';
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