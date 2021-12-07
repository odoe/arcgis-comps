'use strict';

const request = require('./messageBundle-8be88d04.js');
const AnalysisView3D = require('./AnalysisView3D-8420fe96.js');
const reactiveUtils = require('./reactiveUtils-ef5dccea.js');
const boundedPlane = require('./boundedPlane-f1094694.js');
const Layer = require('./Layer-31cde361.js');
const BuildingComponentSublayer = require('./BuildingComponentSublayer-0ed854cd.js');
const sliceToolUtils = require('./sliceToolUtils-01ea8348.js');
const mat4 = require('./mat4-f68486bc.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const vectorStacks = require('./vectorStacks-f48a010a.js');
const ColorMaterial = require('./ColorMaterial-61b9182b.js');
require('./index-fde8502c.js');
require('./mat4f64-fc3339e5.js');
require('./common-41a349f2.js');
require('./lineSegment-a86bf7bd.js');
require('./plane-0816c6c9.js');
require('./sphere-ef7f801f.js');
require('./vec4f64-d3fa6cd2.js');
require('./geometry-ef17530a.js');
require('./Identifiable-a4f50f85.js');
require('./Portal-8d16604d.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./enumeration-f235fe07.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./ColorStop-ce63948c.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./Graphic-0aff6059.js');
require('./jsonUtils-b6068079.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./jsonUtils-fc4080da.js');
require('./FeatureLayer-68e51b64.js');
require('./MultiOriginJSONSupport-77ac451b.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./HeightModelInfo-06fd3d80.js');
require('./HandleOwner-9c4c158c.js');
require('./workers-bde9fe32.js');
require('./queryZScale-d48be112.js');
require('./zscale-25ef55f0.js');
require('./FeatureSet-8efc5965.js');
require('./APIKeyMixin-77c99036.js');
require('./ArcGISService-56d7a630.js');
require('./arcgisLayerUrl-5174d661.js');
require('./BlendLayer-6a2ab430.js');
require('./CustomParametersMixin-996a5732.js');
require('./labelingInfo-594911d5.js');
require('./TimeExtent-8b558884.js');
require('./Query-354911d3.js');
require('./OperationalLayer-853649aa.js');
require('./ElevationInfo-d3e3d64f.js');
require('./LabelClass-4b91d60e.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');
require('./OrderedLayer-8690aaf5.js');
require('./PortalLayer-7556e594.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./RefreshableLayer-487bd7b3.js');
require('./ScaleRangeLayer-5320a5ba.js');
require('./TemporalLayer-06f08bdd.js');
require('./TimeInfo-050c5617.js');
require('./FeatureType-d8b81062.js');
require('./fieldProperties-c9dd6469.js');
require('./FieldsIndex-664af19b.js');
require('./LayerFloorInfo-c56fa764.js');
require('./styleUtils-536b017f.js');
require('./TopFeaturesQuery-92caa731.js');
require('./popupUtils-7a76fb7d.js');
require('./capabilities-61a37c22.js');
require('./I3SIndexInfo-7e127a6f.js');
require('./I3SLayerDefinitions-b8d36b66.js');
require('./quat-17613ceb.js');
require('./quatf64-e7a7f39e.js');
require('./mat3-1d3e0d51.js');
require('./vec2-d000a8cb.js');
require('./projection-b19710fa.js');
require('./geodesicConstants-047d586a.js');
require('./CameraSpace.glsl-44d7b3f4.js');
require('./Texture-16b1a373.js');
require('./vec3f32-5485293e.js');
require('./Texture-95d9d662.js');
require('./FramebufferObject-435e1736.js');
require('./Util-5c6af8a4.js');
require('./vec2f64-60b3c97e.js');
require('./utils-2d48ea24.js');
require('./doublePrecisionUtils-26ddcbaf.js');
require('./geometryDataUtils-0be35629.js');
require('./BufferView-b78db189.js');
require('./OrderIndependentTransparency-866eb67c.js');
require('./intersectorUtils-0e8a6b4b.js');
require('./mathUtils-87b1f941.js');
require('./InterleavedLayout-4132788d.js');
require('./types-bcd9caf5.js');
require('./LineVisualElement-62f61931.js');
require('./vec4f32-284fd490.js');
require('./ImageMaterial-c3952697.js');
require('./persistable-288135cc.js');
require('./multiOriginJSONSupportUtils-13e8b6cf.js');
require('./dehydratedFeatures-a58f1b86.js');
require('./byteSizeEstimations-d2f2ce40.js');
require('./quantizationUtils-d1d9c03e.js');
require('./floatRGBA-aa45f7cb.js');
require('./triangulationUtils-15ab4328.js');
require('./earcut-d5562923.js');
require('./deduplicate-91c52f8d.js');
require('./vec2f32-29a5eecf.js');
require('./glUtil-9df223c0.js');
require('./Scheduler-72cbcf2a.js');
require('./debugFlags-5e6b0151.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends request.p{constructor(){super(...arguments),this.plane=null;}};request.e([request.d()],t.prototype,"plane",void 0),t=request.e([request.i("esri.views.3d.analysis.Slice.SliceAnalysisViewData")],t);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m=request.s$1.getLogger("esri.views.3d.interactive.graphics.Slice.SliceController");let _=class extends request.p{constructor(e){super(e),this._handles=new request.u,this._internalChange=!1,this._currentSlicePlane=null,this.state="pending";}get ready(){return "ready"===this.state}initialize(){this._handles.add(this.analysis.excludedLayers.on("before-add",(e=>{const i=e.item;null!=i&&(i instanceof Layer.b||i instanceof BuildingComponentSublayer.U)?i instanceof Layer.b&&sliceToolUtils.yt(i)?(m.error("excludedLayers",`Layer '${i.title}, id:${i.id}' of type '${i.type}' can not be individually excluded from slicing. Use 'excludeGroundSurface' instead.`),e.preventDefault()):this.analysis.excludedLayers.includes(i)&&e.preventDefault():(m.error("excludedLayers","Invalid layer type, layer must derive from Layer or BuildingComponentSublayer"),e.preventDefault());}))),this._handles.add(request.a(this.view,"ready",(()=>this._initialize()),!0));}_initialize(){switch(this.state){case"pending":break;case"destroyed":return;case"ready":throw new Error("state error")}S(this.view,this),this._handles.add([reactiveUtils.i((()=>this.analysisView.analysisViewData.plane),(()=>{this._internalChange||this._updateSlicePlaneFromBoundedPlane(),this._updateLayerViews();}),{sync:!0}),reactiveUtils.i((()=>this.analysis.excludeGroundSurface),(()=>this._updateLayerViews()),{sync:!0}),this.analysis.excludedLayers.on("change",(()=>this._updateLayerViews())),reactiveUtils.i((()=>[this.analysisView.active,this.analysisView.visible]),(()=>{this._updateActiveController(),this._updateViewSlicePlane();}),{sync:!0}),this.view.allLayerViews.on("change",(()=>this._updateLayerViews()))]),this._handles.add([reactiveUtils.i((()=>this.analysis.shape),(()=>{this._internalChange||(this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane());}),{sync:!0})],"analysis"),this._set("state","ready"),this._updateActiveController(),this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane();}destroy(){switch(this.state){case"destroyed":case"pending":return}this.analysisView.active=!1,b(this.view,this),this._handles.destroy(),this.view.slicePlane=null,this.set("view",null),this._set("state","destroyed");}async whenReady(){return await request.a(this,"ready"),this}_updateBoundedPlaneFromSlicePlane(){const e=this.analysis.shape,i=this._currentSlicePlane;if(request.t$1(i)&&request.t$1(e)||request.r(i)&&request.r(e)&&e.equals(i))return;let t=null,s=null;request.r(e)&&(t=sliceToolUtils.ht(e,this.view,boundedPlane.G()),request.r(t)?s={heading:e.heading,tilt:e.tilt,position:e.position,width:e.width,height:e.height}:console.warn("Failed slice plane conversion.")),this._currentSlicePlane=s,request.r(t)&&!this.analysis.tiltEnabled&&sliceToolUtils.Ve(t,this.view.renderCoordsHelper,t),this._internalChange=!0,this.analysisView.analysisViewData.plane=t,this._internalChange=!1;}_updateSlicePlaneFromBoundedPlane(){const e=this.analysisView.analysisViewData.plane,i=sliceToolUtils.dt(e,this.view.renderCoordsHelper,this.view.spatialReference,new sliceToolUtils.d$1);let t=null;request.r(i)&&(t={heading:i.heading,tilt:i.tilt,position:i.position,width:i.width,height:i.height}),this._currentSlicePlane=t,this._internalChange=!0,this.analysis.shape=i,this._internalChange=!1,this._updateViewSlicePlane();}_updateActiveController(){if(V)return;const e=P(this.view);if(this.analysisView.active)request.r(e.activeController)&&e.activeController!==this?(V=!0,e.activeController.analysisView.active=!1,V=!1):request.r(e.activeController)&&e.activeController,this._updateLayerViews(),e.activeController=this;else {if(request.r(e.activeController)&&e.activeController!==this)return;request.r(e.activeController)&&e.activeController===this&&(e.activeController=null,this._updateLayerViews());}}_updateViewSlicePlane(){"ready"===this.state&&C(this.view);}_updateLayerViews(){const e=request.r(this.analysisView.analysisViewData.plane)&&this.analysisView.visible&&this.analysisView.active,i=[],t=e=>{"layers"in e?e.layers.forEach(t):i.push(e);};this.analysis.excludedLayers.forEach(t),this.view.allLayerViews.forEach((t=>{"slicePlaneEnabled"in t&&(t.slicePlaneEnabled=e&&i.indexOf(t.layer)<0),"sublayerViews"in t&&t.sublayerViews.forEach((t=>{t.slicePlaneEnabled=e&&i.indexOf(t.sublayer)<0;}));})),null!=this.view.basemapTerrain&&(this.view.basemapTerrain.slicePlaneEnabled=e&&!this.analysis.excludeGroundSurface);}};request.e([request.d({readOnly:!0})],_.prototype,"state",void 0),request.e([request.d()],_.prototype,"view",void 0),request.e([request.d()],_.prototype,"analysis",void 0),request.e([request.d()],_.prototype,"analysisView",void 0),request.e([request.d()],_.prototype,"ready",null),_=request.e([request.i("esri.views.3d.interactive.graphics.Slice.SliceController")],_);const g=new Map;let V=!1;function C(e){const i=P(e).activeController;request.r(i)&&request.r(i.analysisView.analysisViewData.plane)&&i.analysisView.visible?e.slicePlane=i.analysisView.analysisViewData.plane:e.slicePlane=null;}function S(e,i){g.has(e)||g.set(e,{all:[],activeController:null}),g.get(e).all.push(i);}function P(e){return g.get(e)}function b(e,i){if(!g.has(e))throw new Error("view expected in global slice register");const t=g.get(e),s=t.all.lastIndexOf(i);if(-1===s)throw new Error("controller expected in global slice register");t.all.splice(s,1),0===t.all.length&&g.delete(e);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let k=class extends request.p{constructor(e){super(e),this._handles=new request.u,this._gridVisualElement=null,this._outlineVisualElement=null,this.state="pending",this.showGrid=!1,this.editable=!0;}get ready(){return "ready"===this.state}initialize(){this._initialize();}async _initialize(){switch(this.state){case"pending":break;case"destroyed":return;case"ready":throw new Error("state error")}if(await request.a(this.view,"ready",!0),request.t$1(this.analysisView.analysisViewData))throw new Error("expected internal object to be valid");this._gridVisualElement=sliceToolUtils.nt(this.view),this._outlineVisualElement=sliceToolUtils.rt(this.view),this._handles.add([reactiveUtils.i((()=>({visible:request.r(this.analysisView.analysisViewData.plane)&&this.analysisView.visible,active:this.analysisView.active,editable:this.editable,showGrid:this.showGrid})),(e=>this._updateMaterials(e)),reactiveUtils.p),reactiveUtils.i((()=>this.analysisView.analysisViewData.plane),(e=>this._updatePlane(e)),reactiveUtils.p)],"internal"),this._set("state","ready");}destroy(){switch(this.state){case"destroyed":case"pending":return}this._handles.destroy(),this._gridVisualElement=request.l$3(this._gridVisualElement),this._outlineVisualElement=request.l$3(this._outlineVisualElement),this.set("view",null),this._set("state","destroyed");}async whenReady(){return await request.a(this,"ready"),this}_updatePlane(e){if(request.t$1(e))return;const i=mathUtils.o(vectorStacks.c.get(),mathUtils.s(e.basis1),mathUtils.s(e.basis2),1),t=mat4.q(vectorStacks.f.get(),i),a=sliceToolUtils.We(e,vectorStacks.f.get()),r=mat4.e(t,a,t);this._outlineVisualElement.transform=r,this._gridVisualElement.transform=r;}_updateMaterials({visible:e,active:i,editable:t,showGrid:s}){this._outlineVisualElement.color=sliceToolUtils.S,this._outlineVisualElement.width=t?sliceToolUtils.C:sliceToolUtils.x,this._outlineVisualElement.stipplePattern=i?null:ColorMaterial.a$4(5);const a=s?sliceToolUtils.b:[0,0,0,0];this._gridVisualElement.backgroundColor=sliceToolUtils.U,this._gridVisualElement.gridColor=a,this._gridVisualElement.visible=e,this._outlineVisualElement.visible=e;}};request.e([request.d({readOnly:!0})],k.prototype,"state",void 0),request.e([request.d()],k.prototype,"view",void 0),request.e([request.d()],k.prototype,"analysis",void 0),request.e([request.d()],k.prototype,"analysisView",void 0),request.e([request.d()],k.prototype,"ready",null),request.e([request.d()],k.prototype,"showGrid",void 0),request.e([request.d()],k.prototype,"editable",void 0),k=request.e([request.i("esri.views.3d.interactive.graphics.Slice.SliceVisualization")],k);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let y=class extends(AnalysisView3D.e(request.p)){constructor(i){super(i),this.type="slice-view",this.analysisVisualization=null,this.analysisController=null,this.analysisViewData=new t,this.active=!0,this.showGrid=!1,this.editable=!1;}initialize(){this.analysisVisualization=new k({view:this.view,analysis:this.analysis,analysisView:this}),this.analysisController=new _({view:this.view,analysis:this.analysis,analysisView:this});}destroy(){this.analysisVisualization=request.l$3(this.analysisVisualization),this.analysisController=request.l$3(this.analysisController);}async when(){return await this.analysisVisualization.whenReady(),await this.analysisController.whenReady(),this}get testData(){return {visualization:this.analysisVisualization,controller:this.analysisController}}};request.e([request.d()],y.prototype,"type",void 0),request.e([request.d()],y.prototype,"analysis",void 0),request.e([request.d()],y.prototype,"analysisViewData",void 0),request.e([request.d()],y.prototype,"active",void 0),request.e([request.d({aliasOf:"analysisVisualization.showGrid"})],y.prototype,"showGrid",void 0),request.e([request.d({aliasOf:"analysisVisualization.editable"})],y.prototype,"editable",void 0),y=request.e([request.i("esri.views.3d.analysis.Slice.SliceView")],y);const c=y;

exports.default = c;
