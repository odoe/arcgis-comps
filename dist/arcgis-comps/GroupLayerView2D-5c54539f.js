import { k as S, e, a as d, i as i$1 } from './jsxFactory-a3b6abde.js';
import { l } from './VertexArrayObject-c9bc61ab.js';
import './Texture-87b2db4d.js';
import { a as a$1 } from './WGLContainer-f22a8645.js';
import { u, l as l$1 } from './LayerView-056f08df.js';
import { a6 as n, aL as t } from './Graphic-08cda9ca.js';
import './index-8dec7690.js';
import './MapView-fd6af8ef.js';
import './CollectionFlattener-6fc74400.js';
import './HandleOwner-a0b41b75.js';
import './reactiveUtils-aa11596b.js';
import './workers-82dadb41.js';
import './executeQueryJSON-21f02626.js';
import './JSONSupport-4f0a3248.js';
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
import './commonProperties-ad8badbd.js';
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
