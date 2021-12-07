'use strict';

const request = require('./messageBundle-8be88d04.js');
const HandleOwner = require('./HandleOwner-9c4c158c.js');
const AnalysisView3D = require('./AnalysisView3D-8420fe96.js');
require('./geometry-ef17530a.js');
const reactiveUtils = require('./reactiveUtils-ef5dccea.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const common = require('./common-41a349f2.js');
const projection = require('./projection-b19710fa.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const sphere = require('./sphere-ef7f801f.js');
const screenUtils = require('./screenUtils-d911ae62.js');
const vectorStacks = require('./vectorStacks-f48a010a.js');
const dehydratedFeatures = require('./dehydratedFeatures-a58f1b86.js');
const CameraSpace_glsl = require('./CameraSpace.glsl-44d7b3f4.js');
const arcgisWebscene_entry = require('./arcgis-webscene-5e838aea.js');
const ColorMaterial = require('./ColorMaterial-61b9182b.js');
const Scheduler = require('./Scheduler-72cbcf2a.js');
const Color = require('./Color-7d915caa.js');
const mat4f64 = require('./mat4f64-fc3339e5.js');
const LineVisualElement = require('./LineVisualElement-62f61931.js');
require('./index-fde8502c.js');
require('./unitUtils-083cb8d0.js');
require('./mat4-f68486bc.js');
require('./geodesicConstants-047d586a.js');
require('./vec4f64-d3fa6cd2.js');
require('./quatf64-e7a7f39e.js');
require('./vec2f64-60b3c97e.js');
require('./byteSizeEstimations-d2f2ce40.js');
require('./aaBoundingBox-c372701a.js');
require('./quantizationUtils-d1d9c03e.js');
require('./jsonUtils-b6068079.js');
require('./Field-b92c6f4a.js');
require('./enumeration-f235fe07.js');
require('./fieldType-32f95259.js');
require('./vec2-d000a8cb.js');
require('./Texture-16b1a373.js');
require('./mat3-1d3e0d51.js');
require('./quat-17613ceb.js');
require('./vec3f32-5485293e.js');
require('./Texture-95d9d662.js');
require('./FramebufferObject-435e1736.js');
require('./BlendLayer-6a2ab430.js');
require('./colorUtils-e70dbab5.js');
require('./Util-5c6af8a4.js');
require('./utils-2d48ea24.js');
require('./doublePrecisionUtils-26ddcbaf.js');
require('./geometryDataUtils-0be35629.js');
require('./lineSegment-a86bf7bd.js');
require('./BufferView-b78db189.js');
require('./OrderIndependentTransparency-866eb67c.js');
require('./DefaultUI-75d05512.js');
require('./Basemap-81280554.js');
require('./Portal-8d16604d.js');
require('./loadAll-e25ec3d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./writeUtils-7bdc195a.js');
require('./compilerUtils-56e51ed2.js');
require('./opacityUtils-f2e4b347.js');
require('./CollectionFlattener-bc4cde45.js');
require('./basemapUtils-dc86a6ad.js');
require('./TablesMixin-d3e0d4c7.js');
require('./Layer-31cde361.js');
require('./Identifiable-a4f50f85.js');
require('./TimeExtent-8b558884.js');
require('./GraphicsCollection-d70ae8cb.js');
require('./Graphic-0aff6059.js');
require('./PopupTemplate-a0b855f8.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./persistableUrlUtils-c611d652.js');
require('./HeightModelInfo-06fd3d80.js');
require('./screenUtils-e9e44bb6.js');
require('./executeQueryJSON-3f84e897.js');
require('./utils-8a0a0870.js');
require('./query-0e394548.js');
require('./normalizeUtils-a793b472.js');
require('./pbfQueryUtils-49e071a8.js');
require('./pbf-dc87045b.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./queryZScale-d48be112.js');
require('./zscale-25ef55f0.js');
require('./Query-354911d3.js');
require('./FeatureSet-8efc5965.js');
require('./TopFeaturesQuery-92caa731.js');
require('./Heading-d7c5e432.js');
require('./widget-b8f4aeaf.js');
require('./QueryTask-3b24eec5.js');
require('./featureConversionUtils-df21e951.js');
require('./Task-95a3fa39.js');
require('./FeatureLayer-68e51b64.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./ColorStop-ce63948c.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./lengthUtils-179eaf12.js');
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./jsonUtils-fc4080da.js');
require('./MultiOriginJSONSupport-77ac451b.js');
require('./workers-bde9fe32.js');
require('./APIKeyMixin-77c99036.js');
require('./ArcGISService-56d7a630.js');
require('./arcgisLayerUrl-5174d661.js');
require('./CustomParametersMixin-996a5732.js');
require('./labelingInfo-594911d5.js');
require('./OperationalLayer-853649aa.js');
require('./ElevationInfo-d3e3d64f.js');
require('./LabelClass-4b91d60e.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');
require('./OrderedLayer-8690aaf5.js');
require('./PortalLayer-7556e594.js');
require('./RefreshableLayer-487bd7b3.js');
require('./ScaleRangeLayer-5320a5ba.js');
require('./TemporalLayer-06f08bdd.js');
require('./TimeInfo-050c5617.js');
require('./FeatureType-d8b81062.js');
require('./fieldProperties-c9dd6469.js');
require('./FieldsIndex-664af19b.js');
require('./LayerFloorInfo-c56fa764.js');
require('./styleUtils-536b017f.js');
require('./popupUtils-7a76fb7d.js');
require('./utils-71e85012.js');
require('./ItemCache-149fdb6e.js');
require('./utils-fb318f28.js');
require('./Queue-1713f2e9.js');
require('./layerViewUtils-96bae70b.js');
require('./GoTo-be01affb.js');
require('./accessibleHandler-652e5d90.js');
require('./vmEvent-9b257013.js');
require('./heightModelInfoUtils-9cedab45.js');
require('./Viewpoint-bbe11330.js');
require('./mathUtils-87b1f941.js');
require('./mat2d-2d5fae3e.js');
require('./mat2df32-85bf8b84.js');
require('./mat2df64-e9760778.js');
require('./vec2f32-29a5eecf.js');
require('./capabilities-76889198.js');
require('./originUtils-fc18d7d8.js');
require('./multiOriginJSONSupportUtils-13e8b6cf.js');
require('./Viewing-63d00d8f.js');
require('./TileInfo-83a1d8a2.js');
require('./saveUtils-a37d456e.js');
require('./resourceUtils-c2de819b.js');
require('./scaleUtils-5c377ab3.js');
require('./Thumbnail-7b462034.js');
require('./Version-55b8a4e7.js');
require('./boundedPlane-f1094694.js');
require('./plane-0816c6c9.js');
require('./ElevationSampler-dbeef858.js');
require('./objectResourceUtils-58283911.js');
require('./devEnvironmentUtils-aafb5541.js');
require('./vec33-1fc512be.js');
require('./DefaultMaterial_COLOR_GAMMA-1f86519d.js');
require('./types-bcd9caf5.js');
require('./InterleavedLayout-4132788d.js');
require('./glUtil-9df223c0.js');
require('./LayerView3D-d92910a3.js');
require('./earcut-d5562923.js');
require('./triangulationUtils-15ab4328.js');
require('./deduplicate-91c52f8d.js');
require('./intersectorUtils-0e8a6b4b.js');
require('./callExpressionWithFeature-7cea2968.js');
require('./MeshComponent-0dd8a7d1.js');
require('./screenshotUtils-176d2414.js');
require('./projection-ea955486.js');
require('./RenderingContext-237f69ae.js');
require('./floatRGBA-aa45f7cb.js');
require('./labelFormatUtils-c70b3fbf.js');
require('./vec4f32-284fd490.js');
require('./geometryServiceUtils-8e2c66dc.js');
require('./project-dab29fc8.js');
require('./LercDecoder-b90fa97a.js');
require('./WorkerHandle-fc87c5d8.js');
require('./VectorTile-5dc9d0a7.js');
require('./config-1b750faa.js');
require('./TiledDisplayObject-0701494f.js');
require('./DisplayObject-573912c8.js');
require('./TileKey-d800cfb2.js');
require('./LayerView-2bc30c9f.js');
require('./rasterUtils-a4c646c4.js');
require('./quatf32-43352942.js');
require('./EdgeProcessingWorker-c3368d81.js');
require('./hitTestSelectUtils-9a744d46.js');
require('./debugFlags-5e6b0151.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends request.p{constructor(t){super(t),this.elevationAlignedTargetLocation=null,this.inputPoints={isValid:!1,observer:common.n(),observerSurfaceNormal:null,target:common.n(),targetSurfaceNormal:null,observerAdjusted:common.n(),targetAdjusted:common.n()},this.computationResult={start:common.n(),end:common.n(),intersection:common.n(),isValid:!1,isTargetVisible:!1},this.result=null;}updateComputationResults(){this.notifyChange("computationResult");}updateInputPoints(){this.notifyChange("inputPoints");}onElevationChange(){this.notifyChange("elevationAlignedTargetLocation");}};request.e([request.d()],i.prototype,"target",void 0),request.e([request.d()],i.prototype,"elevationAlignedTargetLocation",void 0),request.e([request.d()],i.prototype,"inputPoints",void 0),request.e([request.d()],i.prototype,"computationResult",void 0),request.e([request.d()],i.prototype,"result",void 0),i=request.e([request.i("esri.views.3d.analysis.LineOfSight.LineOfSightAnalysis")],i);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m$1;let n$1=m$1=class extends request.p{clone(){return new m$1({type:this.type,id:request.l$1(this.id),point:request.l$1(this.point),normal:request.l$1(this.normal),ray:request.l$1(this.ray)})}equals(o){return this.type===o.type&&this.id===o.id&&request.p$7(this.point,o.point)&&request.l(this.normal,o.normal)&&sphere.m(this.ray,o.ray)}};request.e([request.d()],n$1.prototype,"type",void 0),request.e([request.d()],n$1.prototype,"id",void 0),request.e([request.d()],n$1.prototype,"point",void 0),request.e([request.d()],n$1.prototype,"normal",void 0),request.e([request.d()],n$1.prototype,"ray",void 0),n$1=m$1=request.e([request.i("esri.views.3d.analysis.LineOfSight.LineOfSightIntersectionResult")],n$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let R=class extends request.p{constructor(e){super(e);}initialize(){this.intersector=new ColorMaterial.y(this.view.state.viewingMode),this.intersector.options.hud=!1,this.intersector.options.store=0;}getScreenPointIntersection(e){const t=screenUtils.d(e,vectorStacks.t.get()),r=CameraSpace_glsl.s(this.view.state.camera,t,T);return this._getRayIntersection(r)}_getRayIntersection(e){if(request.t$1(e))return null;this.view.sceneIntersectionHelper.intersectToolIntersectorRay(e,this.intersector);const t=this.intersector.results.min,o=S;if(!t||!t.getIntersectionPoint(o))return null;const i=this.view.renderCoordsHelper.fromRenderCoords(o,this.view.spatialReference),n=common.n();mathUtils.r(n,t.normal);const m=mathUtils.z(n,e.direction)>0?-1:1;mathUtils.d(n,n,m);const l=arcgisWebscene_entry.n$3(t,this.view);if(request.r(l)){const r=l.layer,s=l.sourceLayer;let o;if(s)switch(s.type){case"scene":o=dehydratedFeatures.O(l,s.objectIdField);break;case"integrated-mesh":{const e=t.target;o=`${e.metadata.nodeIndex}/${e.metadata.componentIndex}`;break}default:o=l.uid;}else o=l.uid;return new n$1({type:"Graphic",id:`${r.uid}/${o}`,ray:sphere.l(e),normal:n,point:i})}if("TerrainRenderer"===t.intersector){const r=t.target.metadata.tile.lij.slice();return new n$1({type:"Terrain",id:r,ray:sphere.l(e),normal:n,point:i})}return null}_canUpdateFromIntersectionResult(e,t){if(request.t$1(e)||!t||e.type!==t.type)return !1;switch(e.type){case"Terrain":{const r=e.id,s=t.id;return r[0]===s[0]&&r[1]===s[1]&&r[2]===s[2]||arcgisWebscene_entry.m(r,s)}case"Graphic":case"I3S":return e.id===t.id}}updateFromIntersectionResult(e){let t;if("Terrain"===e.type&&request.r(e.point)){const r=S,s=U$1,o=C$1;this.view.renderCoordsHelper.toRenderCoords(e.point,s),this.view.renderCoordsHelper.worldUpAtPosition(s,o);const i=this.view.basemapTerrain.elevationBounds,n=this.view.renderCoordsHelper.getAltitude(s),a=i?Math.abs(i.max-i.min)/Math.abs(n):100,c=n>0?1:-1;mathUtils.j$1(o,o),mathUtils.d(o,o,c*a),mathUtils.u(r,s,o),sphere.p(r,s,T),t=this._getRayIntersection(T);}else t=this._getRayIntersection(e.ray);return this._canUpdateFromIntersectionResult(t,e)?t.point:null}};request.e([request.d()],R.prototype,"view",void 0),request.e([request.d()],R.prototype,"intersector",void 0),R=request.e([request.i("esri.views.3d.analysis.LineOfSight.LineOfSightRayIntersector")],R);const S=common.n(),U$1=common.n(),C$1=common.n(),T=sphere.d();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$1=class extends request.p{constructor(o){super(o),this.target=null,this.intersectedGraphic=null,this.intersectedLocation=null,this.elevationAlignedTargetLocation=null;}};request.e([request.d()],s$1.prototype,"target",void 0),request.e([request.d()],s$1.prototype,"intersectedGraphic",void 0),request.e([request.d()],s$1.prototype,"intersectedLocation",void 0),request.e([request.d()],s$1.prototype,"elevationAlignedTargetLocation",void 0),request.e([request.d()],s$1.prototype,"visible",void 0),s$1=request.e([request.i("esri.views.3d.analysis.LineOfSight.LineOfSightResult")],s$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let U=class extends(request.n$2.EventedMixin(request.p)){constructor(e){super(e),this._updatingHandles=new HandleOwner.l,this._frameTask=Scheduler.D,this._handles=new request.u,this._analysisHandles=new request.u;}initialize(){var e;const t=null==(e=this.view.resourceController)?void 0:e.scheduler;t&&(this._frameTask=t.registerTask(Scheduler.f.LINE_OF_SIGHT_TOOL)),this._handles.add([this._connectObserver(),this._connectAnalyses(),this._connectTargets()]),this._intersector=new R({view:this.view});}destroy(){this._handles.destroy(),this._analysisHandles.destroy(),this._analyses.removeAll(),this._updatingHandles.destroy();}get updating(){return this._frameTask.updating||this._updatingHandles.updating}get priority(){return this._frameTask.priority}set priority(e){this._frameTask.priority=e;}get _analyses(){return this.analysisViewData.analyses}get _observerEngineLocation(){return this.analysisViewData.observerEngineLocation}set _observerEngineLocation(e){this.analysisViewData.observerEngineLocation=e;}get _screenPixelSize(){return this.view.state.camera.computeScreenPixelSizeAt(this._observerEngineLocation)}getLineOfSightComputationDependencies(e){const{inputPoints:t}=e;return {inputPoints:t}}computeAnalysis(e){const t=e.analysis,{inputPoints:s,computationResult:n}=t,{observerAdjusted:i,targetAdjusted:r}=s,{start:o,end:a}=n;mathUtils.r(o,i),mathUtils.r(a,r);this._canComputeAnalysis(t)?this._computeAnalysisIntersection(e):this._interpolateAnalysisIntersection(e),t.updateComputationResults(),this.emit("result-changed",{target:e.analysis.target,result:t.result});}_adjustStartEndPositions(e){const t=this._screenPixelSize,s=this.view,{inputPoints:n}=e,{observer:i,observerSurfaceNormal:r,target:a,targetSurfaceNormal:l,observerAdjusted:c,targetAdjusted:h}=n,p=W;request.r(r)?mathUtils.r(p,r):mathUtils.c(p,a,i);const d=t;mathUtils.j$1(p,p),mathUtils.d(p,p,Math.min(d,1)),mathUtils.u(c,i,p),request.r(l)?mathUtils.r(p,l):mathUtils.c(p,i,a);const g=s.state.camera.computeScreenPixelSizeAt(a);mathUtils.j$1(p,p),mathUtils.d(p,p,Math.min(g,1)),mathUtils.u(h,a,p);}_computeAnalysisIntersection({analysis:e,interpolationInfo:t}){const{view:s}=this,{sceneIntersectionHelper:n,renderCoordsHelper:i}=s;if(request.t$1(n))return;const r=this._intersector.intersector,{computationResult:l,inputPoints:c}=e,{observer:h,target:p}=c,{start:d,end:g}=l,u=sphere.p(d,g,Z);n.intersectToolIntersectorRay(u,r);const y=l.intersection,m=W,_=!!r.results.min&&r.results.min.getIntersectionPoint(y);let v=!0;if(_){mathUtils.r(t.originalIntersection,y),mathUtils.r(t.originalObserver,d),mathUtils.r(t.originalTarget,g),i.fromRenderCoords(y,m,s.spatialReference);const e=1-mathUtils.S(g,p)/mathUtils.S(d,p);v=mathUtils.S(h,y)>=e*mathUtils.S(h,p);}const A=new request.b$2(m,s.spatialReference);{const{result:t,target:n}=e;request.r(t)?(t.target=n,t.intersectedGraphic=v?null:arcgisWebscene_entry.n$3(r.results.min,s),t.intersectedLocation=v?null:A,t.visible=!!_&&v):e.result=new s$1({target:n,elevationAlignedTargetLocation:e.elevationAlignedTargetLocation,intersectedGraphic:v?null:arcgisWebscene_entry.n$3(r.results.min,s),intersectedLocation:v?null:A,visible:!!_&&v});}l.isValid=c.isValid=!0,l.isTargetVisible=v;}_interpolateAnalysisIntersection({analysis:e,interpolationInfo:t}){const{computationResult:s,inputPoints:n}=e,{start:i,end:r,intersection:o}=s,{originalIntersection:a,originalObserver:l,originalTarget:c}=t;if(mathUtils.r(o,a),n.isValid){const e=W,t=mathUtils.S(l,a)/mathUtils.S(l,c);mathUtils.J(e,i,l),mathUtils.d(e,e,1-t),mathUtils.u(o,o,e),mathUtils.J(e,r,c),mathUtils.d(e,e,t),mathUtils.u(o,o,e),s.isValid=!0;}else e.result=new s$1,s.isValid=!1,s.isTargetVisible=!1;}_canComputeAnalysis(e){const t=this.analysisViewData.elevationAlignedObserver,s=this.view.frustum;if(request.t$1(t)||request.t$1(e.target)||request.t$1(s))return !1;const{observerAdjusted:n,targetAdjusted:i}=e.inputPoints,r=s.intersectsPoint(n),o=s.intersectsPoint(i);return r&&o}_onObserverChange(e){if(request.t$1(e))return this.analysis.targets.removeAll(),void(this.analysisViewData.elevationAlignedObserver=null);this.analysisViewData.elevationAlignedObserver=this._applyElevationAlignment(e,this.analysis.intersection);const t=common.n();this.view.renderCoordsHelper.toRenderCoords(this.analysisViewData.elevationAlignedObserver,t),this._observerEngineLocation=t,this.priority=Scheduler.f.LINE_OF_SIGHT_TOOL_INTERACTIVE;}_applyElevationAlignment(e,t){if(e.hasZ&&(request.t$1(t)||"Graphic"===t.type))return e;const s=e.clone();return s.z=request.c$2(ColorMaterial.i(this.view.elevationProvider,s),0),s}_onObserverChangeForAnalysis(e){e.inputPoints.isValid=!1;}_onObserverEngineForAnalysis(e,t,s){const{inputPoints:n}=e;if(mathUtils.r(n.observer,t),request.r(s)){const e=this._intersector.updateFromIntersectionResult(s);request.r(e)&&this.view.renderCoordsHelper.toRenderCoords(e,n.observer),n.observerSurfaceNormal=common.t$1(s.normal);}else n.observerSurfaceNormal=null;this._adjustStartEndPositions(e),e.updateInputPoints(),this.priority=Scheduler.f.LINE_OF_SIGHT_TOOL_INTERACTIVE;}_onTargetLocationChange(e,t,s){const n=e.inputPoints;if(n.isValid=!1,request.r(t)){if(e.elevationAlignedTargetLocation=this._applyElevationAlignment(t,s),this.view.renderCoordsHelper.toRenderCoords(e.elevationAlignedTargetLocation,n.target),request.r(s)){const e=this._intersector.updateFromIntersectionResult(s);request.r(e)&&this.view.renderCoordsHelper.toRenderCoords(e,n.target),n.targetSurfaceNormal=common.t$1(s.normal);}else n.targetSurfaceNormal=null;this._adjustStartEndPositions(e),e.updateInputPoints();}this.priority=Scheduler.f.LINE_OF_SIGHT_TOOL_INTERACTIVE;}_connectAnalysisToTarget(e){return reactiveUtils.i((()=>({analysis:e,targetLocation:e.target.location,targetIntersection:e.target.intersection})),(({analysis:e,targetLocation:t,targetIntersection:s})=>{request.r(t)&&this._onTargetLocationChange(e,t,s);}),reactiveUtils.p)}_connectAnalysisToObserver(e){return reactiveUtils.i((()=>({analysis:e,observer:this.analysisViewData.elevationAlignedObserver})),(({analysis:e})=>{this._onObserverChangeForAnalysis(e);}),reactiveUtils.p)}_connectAnalysisToObserverEngine(e){return reactiveUtils.i((()=>({analysis:e,observer:this._observerEngineLocation,observerIntersection:this.analysis.intersection})),(({analysis:e,observer:t,observerIntersection:s})=>{this._onObserverEngineForAnalysis(e,t,s);}),reactiveUtils.p)}_connectAnalysisToCamera(e){return reactiveUtils.i((()=>({camera:this.view.state.camera,isDirty:this._isCameraDirty})),(({isDirty:t})=>{e.inputPoints.isValid&&!t||e.updateInputPoints();}),reactiveUtils.m)}_connectAnalysisToElevation(e){return this.view.elevationProvider.on("elevation-change",(t=>{if(!this._canComputeAnalysis(e))return;const s=this.analysis.observer;M(t.extent,t.spatialReference,s)&&this._onObserverChange(s);const n=e.target;request.r(n)&&M(t.extent,t.spatialReference,n.location)&&e.onElevationChange();}))}_connectAnalysisForCompute(e){let t=request.n$15;const s={analysis:e,interpolationInfo:{originalIntersection:common.n(),originalObserver:common.n(),originalTarget:common.n()}};return request.r$7([reactiveUtils.i((()=>this.getLineOfSightComputationDependencies(e)),(()=>{t=request.a$5(t),t=request.F$1((async e=>{await request.g$5(this._frameTask.schedule((()=>this.computeAnalysis(s)),e));}));}),reactiveUtils.p),request.n$11((()=>t=request.a$5(t)))])}_connectAnalysis(e){const t=this._analysisHandles;t.has(e)||t.add([this._connectAnalysisToTarget(e),this._connectAnalysisToObserver(e),this._connectAnalysisToObserverEngine(e),this._connectAnalysisToCamera(e),this._connectAnalysisToElevation(e),this._connectAnalysisForCompute(e)]);}_disconnectAnalysis(e){this._analysisHandles.remove(e);}_onAnalysesCollectionChange(e){e.added.forEach((e=>this._connectAnalysis(e))),e.removed.forEach((e=>this._disconnectAnalysis(e)));}_onTargetsChange(){return this._analyses.removeAll(),this.analysis.targets.forEach((e=>this._addTarget(e))),this._updatingHandles.addOnCollectionPropertyChange(this.analysis,"targets",(e=>this._onTargetCollectionChange(e)))}_onTargetCollectionChange(e){e.added.forEach((e=>this._addTarget(e))),e.removed.forEach((e=>this._removeTarget(e)));}_onCursorTargetChange(e,t){request.r(t)&&this._removeTarget(t),request.r(e)&&this._addTarget(e);}_addTarget(e){this._analyses.some((t=>t.target===e))||this._analyses.add(new i({target:e}));}_removeTarget(e){const t=this._analyses.find((t=>t.target===e));this._analyses.remove(t);}_connectObserver(){return request.r$7([reactiveUtils.i((()=>this.analysis.observer),(e=>this._onObserverChange(e)),reactiveUtils.p)])}_connectAnalyses(){let e=null;return request.r$7([reactiveUtils.i((()=>this._analyses),(()=>{request.s$7(e),e=this._updatingHandles.addOnCollectionPropertyChange(this,"_analyses",(e=>this._onAnalysesCollectionChange(e))),this._analyses.forEach((e=>this._connectAnalysis(e)));}),reactiveUtils.p),request.n$11((()=>e=request.s$7(e)))])}_connectTargets(){let e=null;return request.r$7([reactiveUtils.i((()=>this.analysis.targets),(()=>{e=request.s$7(e),e=this._onTargetsChange();}),reactiveUtils.p),reactiveUtils.i((()=>this.analysisViewData.cursorTarget),((e,t)=>{this._onCursorTargetChange(e,t);})),request.n$11((()=>{e=request.s$7(e);}))])}get _isCameraDirty(){const e=this.analysisViewData.elevationAlignedObserver,{view:t}=this,{renderCoordsHelper:s}=t;if(request.t$1(e)||request.t$1(s))return !1;const n=W;s.toRenderCoords(e,n);const i=t.state.camera.computeScreenPixelSizeAt(n);return Math.abs((i-this._screenPixelSize)/this._screenPixelSize)>B}};function M(e,t,s){return !request.t$1(s)&&(projection.bn(e,t,q,s.spatialReference),aaBoundingRect.j(q,s))}request.e([request.d({constructOnly:!0})],U.prototype,"analysis",void 0),request.e([request.d({constructOnly:!0})],U.prototype,"analysisViewData",void 0),request.e([request.d({constructOnly:!0})],U.prototype,"view",void 0),request.e([request.d()],U.prototype,"updating",null),request.e([request.d()],U.prototype,"priority",null),request.e([request.d()],U.prototype,"_analyses",null),request.e([request.d()],U.prototype,"_observerEngineLocation",null),request.e([request.d()],U.prototype,"_screenPixelSize",null),request.e([request.d({readOnly:!0})],U.prototype,"_updatingHandles",void 0),request.e([request.d()],U.prototype,"_frameTask",void 0),request.e([request.d()],U.prototype,"_isCameraDirty",null),U=request.e([request.i("esri.views.3d.analysis.LineOfSight.LineOfSightController")],U);const B=.1,W=common.n(),Z=sphere.d(),q=aaBoundingRect.B();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends request.p{constructor(o){super(o),this.innerWidth=2,this.outerWidth=8,this.visibleInnerColor=new Color.h([3,252,111,1]),this.visibleOuterColor=new Color.h([3,252,111,.15]),this.occludedInnerColor=new Color.h([252,3,69,1]),this.occludedOuterColor=new Color.h([252,3,69,.1]),this.undefinedInnerColor=new Color.h([255,255,255,1]),this.undefinedOuterColor=new Color.h([127,127,127,.2]);}};request.e([request.d({type:Number})],s.prototype,"innerWidth",void 0),request.e([request.d({type:Number})],s.prototype,"outerWidth",void 0),request.e([request.d({type:Color.h})],s.prototype,"visibleInnerColor",void 0),request.e([request.d({type:Color.h})],s.prototype,"visibleOuterColor",void 0),request.e([request.d({type:Color.h})],s.prototype,"occludedInnerColor",void 0),request.e([request.d({type:Color.h})],s.prototype,"occludedOuterColor",void 0),request.e([request.d({type:Color.h})],s.prototype,"undefinedInnerColor",void 0),request.e([request.d({type:Color.h})],s.prototype,"undefinedOuterColor",void 0),s=request.e([request.i("esri.views.3d.analysis.LineOfSight.LineOfSightConfiguration")],s);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends request.p{constructor(){super(...arguments),this.analyses=new request.S,this.elevationAlignedObserver=null,this.configuration=new s,this.observerEngineLocation=common.n(),this.cursorTarget=null;}};request.e([request.d()],n.prototype,"analyses",void 0),request.e([request.d()],n.prototype,"elevationAlignedObserver",void 0),request.e([request.d({type:s})],n.prototype,"configuration",void 0),request.e([request.d()],n.prototype,"observerEngineLocation",void 0),request.e([request.d()],n.prototype,"cursorTarget",void 0),n=request.e([request.i("esri.views.3d.analysis.LineOfSight.LineOfSightLayerViewData")],n);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let g=class extends request.p{constructor(i){super(i),this._handle=null,this._analysisHandles=new request.u;}initialize(){this._handle=this._connectAnalyses();}destroy(){this._handle=request.s$7(this._handle),this._analysisHandles=request.l$3(this._analysisHandles);}get visible(){return this.analysisView.visible&&!this.analysisView.suspended}get _analyses(){return this.analysisView.analysisViewData.analyses}get _configuration(){return this.analysisView.analysisViewData.configuration}get _opacity(){return this.analysisView.fullOpacity}createLineOfSightVisualization(){const i=this._configuration,t=this._opacity,n={view:this.view,attached:!0,width:i.outerWidth,innerWidth:i.innerWidth},o=Color.h.toUnitRGBA(i.visibleOuterColor);mathUtils.g$1(o,o,t);const s=Color.h.toUnitRGBA(i.visibleInnerColor);mathUtils.g$1(s,s,t);const r=Color.h.toUnitRGBA(i.occludedOuterColor);mathUtils.g$1(r,r,t);const a=Color.h.toUnitRGBA(i.occludedInnerColor);mathUtils.g$1(a,a,t);const c=Color.h.toUnitRGBA(i.undefinedOuterColor);mathUtils.g$1(c,c,t);const u=Color.h.toUnitRGBA(i.undefinedInnerColor);mathUtils.g$1(u,u,t);return {visibleLineVisualElement:new LineVisualElement.m({...n,color:o,innerColor:s}),occludedLineVisualElement:new LineVisualElement.m({...n,color:r,innerColor:a}),undefinedLineVisualElement:new LineVisualElement.m({...n,color:c,innerColor:u})}}destroyLineOfSightVisualization(i){i.visibleLineVisualElement=request.l$3(i.visibleLineVisualElement),i.occludedLineVisualElement=request.l$3(i.occludedLineVisualElement),i.undefinedLineVisualElement=request.l$3(i.undefinedLineVisualElement);}updateLineOfSightVisualization(i,t){const n=this.visible,o=this._configuration,{computationResult:s,inputPoints:r}=i,{start:a,end:c,intersection:u,isValid:d,isTargetVisible:m}=s,{observer:h}=r,p=L;p[12]=h[0],p[13]=h[1],p[14]=h[2];const v=mathUtils.c(_,a,h),V=mathUtils.c(b,c,h),g=mathUtils.c(C,u,h),{visibleLineVisualElement:O,occludedLineVisualElement:A,undefinedLineVisualElement:E}=t;if(!n)return O.visible=!1,A.visible=!1,void(E.visible=!1);if(O.visible=!0,A.visible=!0,E.visible=!0,O.geometry=null,A.geometry=null,E.geometry=null,d)if(m){O.geometry=[[common.e(v),common.e(V)]],O.transform=p;const i=Color.h.toUnitRGBA(o.visibleOuterColor);O.color=mathUtils.g$1(i,i,this._opacity);}else {O.geometry=[[common.e(v),common.e(g)]],O.transform=p;const i=Color.h.toUnitRGBA(o.occludedOuterColor);O.color=mathUtils.g$1(i,i,this._opacity),A.geometry=[[common.e(g),common.e(V)]],A.transform=p;}else E.geometry=[[common.e(v),common.e(V)]],E.transform=p;}updateVisualizationOpacity(i,t){const n=this._configuration,o=this._opacity,s=Color.h.toUnitRGBA(n.visibleOuterColor);mathUtils.g$1(s,s,o);const r=Color.h.toUnitRGBA(n.visibleInnerColor);mathUtils.g$1(r,r,o);const a=Color.h.toUnitRGBA(n.occludedOuterColor);mathUtils.g$1(a,a,o);const c=Color.h.toUnitRGBA(n.occludedInnerColor);mathUtils.g$1(c,c,o);const u=Color.h.toUnitRGBA(n.undefinedOuterColor);mathUtils.g$1(u,u,o);const d=Color.h.toUnitRGBA(n.undefinedInnerColor);mathUtils.g$1(d,d,o),t.visibleLineVisualElement.color=i.computationResult.isTargetVisible?s:a,t.visibleLineVisualElement.innerColor=r,t.occludedLineVisualElement.color=a,t.occludedLineVisualElement.innerColor=c,t.undefinedLineVisualElement.color=u,t.undefinedLineVisualElement.innerColor=d;}getLineOfSightVisualizationDependencies(i){const{computationResult:e}=i,{occludedOuterColor:t,visibleOuterColor:n}=this._configuration;return {computationResult:e,occludedOuterColor:t,visibleOuterColor:n,visible:this.visible}}_connectAnalysis(i){const e=this._analysisHandles;if(e.has(i))return;const t=this.createLineOfSightVisualization();e.add([reactiveUtils.i((()=>this.getLineOfSightVisualizationDependencies(i)),(()=>this.updateLineOfSightVisualization(i,t)),reactiveUtils.p),reactiveUtils.i((()=>this._opacity),(()=>this.updateVisualizationOpacity(i,t)),reactiveUtils.m),request.n$11((()=>this.destroyLineOfSightVisualization(t)))],i);}_disconnectAnalysis(i){this._analysisHandles.remove(i);}_connectAnalyses(){let i=null;return request.r$7([reactiveUtils.i((()=>this._analyses),(e=>{i=request.s$7(i),i=e.on("change",(i=>this._onAnalysesCollectionChange(i))),this._onAnalysesCollectionChange({target:e,added:e.items,removed:[],moved:[]});}),reactiveUtils.p),request.n$11((()=>i=request.s$7(i)))])}_onAnalysesCollectionChange(i){i.added.forEach((i=>this._connectAnalysis(i))),i.removed.forEach((i=>this._disconnectAnalysis(i)));}};request.e([request.d({constructOnly:!0})],g.prototype,"analysis",void 0),request.e([request.d({constructOnly:!0})],g.prototype,"analysisView",void 0),request.e([request.d({constructOnly:!0})],g.prototype,"view",void 0),request.e([request.d({readOnly:!0})],g.prototype,"visible",null),request.e([request.d()],g.prototype,"_analyses",null),request.e([request.d()],g.prototype,"_configuration",null),request.e([request.d()],g.prototype,"_opacity",null),g=request.e([request.i("esri.views.3d.analysis.LineOfSight.LineOfSightVisualization")],g);const _=common.n(),b=common.n(),C=common.n(),L=mat4f64.e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let d=class extends(AnalysisView3D.e(HandleOwner.a(request.n$2.EventedMixin(request.p)))){constructor(s){super(s),this.type="line-of-sight-view",this.suspended=!1,this.fullOpacity=1,this.analysisViewData=new n;}initialize(){const s=this.view,t=this.analysis;this._analysisController=new U({analysis:t,analysisViewData:this.analysisViewData,view:s}),this._analysisVisualization=new g({analysis:t,analysisView:this,view:s}),this.handles.add([this._analysisController.on("result-changed",(s=>{s.target!==this.analysisViewData.cursorTarget&&this.emit("result-changed",s);}))]);}destroy(){this._analysisController=request.l$3(this._analysisController),this._analysisVisualization=request.l$3(this._analysisVisualization);}get results(){return this.analysisViewData.analyses.map((s=>s.result))}get priority(){return this._analysisController.priority}set priority(s){this._analysisController.priority=s;}get updating(){return request.r(this._analysisController)&&this._analysisController.updating}getResultForTarget(s){const t=this.analysisViewData.analyses.find((t=>t.target===s)),i=request.o$6(t,(s=>s.result));return request.c$2(i,null)}get test(){return {visualization:this._analysisVisualization,controller:this._analysisController}}};request.e([request.d()],d.prototype,"type",void 0),request.e([request.d()],d.prototype,"analysis",void 0),request.e([request.d({readOnly:!0})],d.prototype,"results",null),request.e([request.d()],d.prototype,"priority",null),request.e([request.d()],d.prototype,"suspended",void 0),request.e([request.d()],d.prototype,"fullOpacity",void 0),request.e([request.d()],d.prototype,"analysisViewData",void 0),request.e([request.d()],d.prototype,"updating",null),request.e([request.d()],d.prototype,"_analysisController",void 0),request.e([request.d()],d.prototype,"_analysisVisualization",void 0),d=request.e([request.i("esri.views.3d.analysis.LineOfSight.LineOfSightView")],d);const m=d;

exports.default = m;
