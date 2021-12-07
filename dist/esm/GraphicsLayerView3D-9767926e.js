import { q as d, A as r, a as i, g as f, e, d as d$1, i as i$1 } from './messageBundle-f75b4090.js';
import { p } from './LayerView3D-ad87e12d.js';
import { c } from './Graphics3DFrustumVisibility-21a7207c.js';
import { E } from './Graphics3DGraphicLikeLayerView-9d4ffe1d.js';
import { aX as F } from './ColorMaterial-cf44e08d.js';
import { l as l$1 } from './projectExtentUtils-613dce26.js';
import { u } from './LayerView-f319a853.js';
import './index-b157fcf2.js';
import './symbols-b414aa72.js';
import './enumeration-d3301938.js';
import './opacityUtils-5e864561.js';
import './geometry-7e07b1ba.js';
import './Symbol-cad56b52.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './persistableUrlUtils-40bbec67.js';
import './Portal-c5cfa317.js';
import './Texture-1e5e4be2.js';
import './mat3-6a23d9ad.js';
import './quatf64-b9feea68.js';
import './mat4-f34c6460.js';
import './mat4f64-677a419d.js';
import './quat-2d7a417b.js';
import './vec3f32-109cf143.js';
import './vec4f64-2ec4ac08.js';
import './sphere-c3d60863.js';
import './vectorStacks-9205ea46.js';
import './vec2f64-35868783.js';
import './Texture-f0375c04.js';
import './FramebufferObject-3d2e79da.js';
import './BlendLayer-38b8abf7.js';
import './Util-68fde664.js';
import './vec2-5672471e.js';
import './utils-c65673fb.js';
import './doublePrecisionUtils-68dc07e3.js';
import './geometryDataUtils-7e4c8d4a.js';
import './lineSegment-4881dbd9.js';
import './BufferView-35ef10d7.js';
import './OrderIndependentTransparency-3e6c26be.js';
import './vec2f32-29d55de5.js';
import './InterleavedLayout-4358b016.js';
import './types-c8f64c05.js';
import './asyncUtils-fe35d349.js';
import './byteSizeEstimations-b3396570.js';
import './projection-f3d8779d.js';
import './unitUtils-38774114.js';
import './geodesicConstants-54cb88d4.js';
import './dehydratedFeatures-7a1dd0b3.js';
import './quantizationUtils-e08f723c.js';
import './jsonUtils-13b1f6fd.js';
import './Field-bfaa8af9.js';
import './fieldType-66a19d8a.js';
import './featureConversionUtils-cbd79ea2.js';
import './OptimizedFeature-44d5df5b.js';
import './OptimizedFeatureSet-27736f1f.js';
import './earcut-05cd758b.js';
import './vec33-df10f43c.js';
import './visualVariableUtils-26c41ea6.js';
import './Graphic-3961df6c.js';
import './PopupTemplate-6e5ecad2.js';
import './Identifiable-da047c47.js';
import './lengthUtils-f033d4fe.js';
import './sizeVariableUtils-4d3662df.js';
import './triangulationUtils-501cc2c4.js';
import './deduplicate-c3c4ee02.js';
import './intersectorUtils-8d04b3d1.js';
import './boundedPlane-030abe8d.js';
import './plane-f3c19202.js';
import './mathUtils-8e5ad7fe.js';
import './objectResourceUtils-46d77106.js';
import './devEnvironmentUtils-9331429c.js';
import './DefaultMaterial_COLOR_GAMMA-f230b01e.js';
import './compilerUtils-848c8917.js';
import './Version-9295fea2.js';
import './utils-c84cc443.js';
import './ItemCache-5d2cf877.js';
import './MemCache-78a9f000.js';
import './utils-f8425723.js';
import './callExpressionWithFeature-e06d2f0b.js';
import './MeshComponent-3b6a4fdf.js';
import './screenshotUtils-f9728729.js';
import './projection-5f2268ed.js';
import './glUtil-240efd97.js';
import './Scheduler-3464f717.js';
import './reactiveUtils-8f9c3a3d.js';
import './debugFlags-e9d86cce.js';
import './heightModelInfoUtils-b573abf5.js';
import './HeightModelInfo-1a6d7a08.js';
import './arcgisLayerUrl-49ef2818.js';
import './diffUtils-849b3672.js';
import './Layer-b50ea610.js';
import './Query-d6335b3a.js';
import './TimeExtent-a024c0d8.js';
import './Graphics3DScaleVisibility-ba173ead.js';
import './UniqueValueRenderer-3c55992d.js';
import './VisualVariablesMixin-0befdf7b.js';
import './colorRamps-22c88e98.js';
import './ColorStop-d4fc22fe.js';
import './jsonUtils-ade233cd.js';
import './styleUtils-cb28c5ef.js';
import './DictionaryRenderer-bea76550.js';
import './LRUCache-d5842b88.js';
import './jsonUtils-aa645e92.js';
import './rendererConversion-300d3add.js';
import './LabelClass-47fb4a25.js';
import './labelUtils-8999bd11.js';
import './defaultsJSON-0b68054b.js';
import './optimizedFeatureQueryEngineAdapter-4f73f201.js';
import './centroid-a2430753.js';
import './PooledRBush-f64ccc4a.js';
import './quickselect-ccfd8cff.js';
import './ElevationInfo-be94499b.js';
import './layerViewUtils-4127a8cf.js';
import './Graphics3DObjectStates-3b2e9122.js';
import './HandleOwner-88326c19.js';
import './floatRGBA-7e1629d8.js';
import './geometryServiceUtils-ba2d6c3e.js';
import './project-a5d2456b.js';
import './utils-ab350511.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=1.2;let g=class extends(p(u)){constructor(){super(...arguments),this.type="graphics-3d",this.frustumVisibility=new c,this.slicePlaneEnabled=!1,this.drapeSourceType=1,this.suspendResumeExtent=null,this.fullExtentInLocalViewSpatialReference=null;}initialize(){this._set("graphics3d",new E({owner:this,layer:this.layer,scaleVisibilityEnabled:!0})),this.graphics3d.setup(),this.frustumVisibility.setup(this),this.setupSuspendResumeExtent(),this.updatingHandles.add(this,"fullOpacity",(()=>this.graphics3d.graphicsCore.opacityChange())),this.handles.add(this.layer.on("graphic-update",(i=>this.graphics3d.graphicsCore.graphicUpdateHandler(i)))),this.addResolvingPromise(l$1(this).then((i=>this.fullExtentInLocalViewSpatialReference=i))),this.layer.internal?this.notifyChange("updating"):this.handles.add(d(this.view,"basemapTerrain.ready",(()=>this.notifyChange("updating"))));}destroy(){this.frustumVisibility&&(this.frustumVisibility.destroy(),this._set("frustumVisibility",null)),this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null));}get legendEnabled(){return this.canResume()&&!this.frustumVisibility.suspended}get suspendInfo(){var i;const e={};return r(this.graphics3d.scaleVisibility)&&this.graphics3d.scaleVisibility.suspended&&(e.outsideScaleRange=!0),e.outsideOfView=!(null==(i=this.frustumVisibility)||!i.suspended),e}async fetchPopupFeatures(i,e){return r(e)?e.clientGraphics:null}notifyGraphicGeometryChanged(i){this.graphics3d.graphicsCore.notifyGraphicGeometryChanged(i);}notifyGraphicVisibilityChanged(i){this.graphics3d.graphicsCore.notifyGraphicVisibilityChanged(i);}get graphics3DGraphics(){return this.graphics3d.graphicsCore.graphics3DGraphics}get graphics3DGraphicsByObjectID(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID:null}get symbolUpdateType(){return this.graphics3d.graphicsCore.symbolUpdateType}getGraphicFromGraphicUid(i){return this.graphics3d.getGraphicFromGraphicUid(i)}whenGraphicBounds(i,s){return this.graphics3d.whenGraphicBounds(i,s)}computeAttachmentOrigin(i,s){return this.graphics3d?this.graphics3d.graphicsCore.computeAttachmentOrigin(i,s):null}getSymbolLayerSize(i,s){return this.graphics3d.getSymbolLayerSize(i,s)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(i){return this.graphics3d.maskOccludee(i)}highlight(i){return this.graphics3d.highlight(i)}get updatePolicy(){var i;return (null==(i=this.graphics3d)?void 0:i.graphicsCore.effectiveUpdatePolicy)||1}canResume(){var i;return super.canResume()&&!(null!=(i=this.graphics3d)&&i.suspended)}isUpdating(){var i,s;return !(!(this.graphics3d&&this.graphics3d.updating||this.frustumVisibility&&this.frustumVisibility.updating)&&(this.layer.internal||null!=(i=this.view)&&null!=(s=i.basemapTerrain)&&s.ready))}setupSuspendResumeExtent(){const i$1=()=>{this.suspendResumeExtent=F(this.graphics3d.graphicsCore.computedExtent,this.suspendResumeExtent,l,this.graphics3d.graphicsCore.extentPadding),this.frustumVisibility.setExtent(this.suspendResumeExtent);};i(this.graphics3d.graphicsCore,"computedExtent",(()=>i$1()),!0),f(this.graphics3d.graphicsCore,"extentPadding",(()=>i$1()),!0);}get performanceInfo(){return {displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:this.graphics3d.elevationAlignment.updating,visibilityFrustum:!this.frustumVisibility.suspended}}};e([d$1({aliasOf:"layer.graphics"})],g.prototype,"loadedGraphics",void 0),e([d$1({readOnly:!0})],g.prototype,"suspended",void 0),e([d$1({readOnly:!0})],g.prototype,"legendEnabled",null),e([d$1({readOnly:!0})],g.prototype,"updating",void 0),e([d$1()],g.prototype,"layer",void 0),e([d$1({readOnly:!0})],g.prototype,"frustumVisibility",void 0),e([d$1({readOnly:!0})],g.prototype,"graphics3d",void 0),e([d$1({type:Boolean})],g.prototype,"slicePlaneEnabled",void 0),e([d$1({readOnly:!0})],g.prototype,"suspendInfo",null),g=e([i$1("esri.views.3d.layers.GraphicsLayerView3D")],g);const y=g;

export default y;
