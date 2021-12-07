'use strict';

const request = require('./messageBundle-8be88d04.js');
const HandleOwner = require('./HandleOwner-9c4c158c.js');
const reactiveUtils = require('./reactiveUtils-ef5dccea.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const vec4f64 = require('./vec4f64-d3fa6cd2.js');
const boundedPlane = require('./boundedPlane-f1094694.js');
const layerViewUtils = require('./layerViewUtils-96bae70b.js');
const queryEngineUtils = require('./queryEngineUtils-ab8dee31.js');
const geometry = require('./geometry-ef17530a.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const TileTreeDebugger = require('./TileTreeDebugger-1eb2539f.js');
const WorkerHandle = require('./WorkerHandle-fc87c5d8.js');
const TileInfo = require('./TileInfo-83a1d8a2.js');
const debugFlags = require('./debugFlags-5e6b0151.js');
require('./index-fde8502c.js');
require('./common-41a349f2.js');
require('./vectorStacks-f48a010a.js');
require('./quatf64-e7a7f39e.js');
require('./mat4f64-fc3339e5.js');
require('./vec2f64-60b3c97e.js');
require('./mat4-f68486bc.js');
require('./lineSegment-a86bf7bd.js');
require('./plane-0816c6c9.js');
require('./sphere-ef7f801f.js');
require('./arcgis-editor-90a28e34.js');
require('./opacityUtils-f2e4b347.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./screenUtils-e9e44bb6.js');
require('./unitUtils-083cb8d0.js');
require('./Graphic-0aff6059.js');
require('./PopupTemplate-a0b855f8.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./jsonUtils-b6068079.js');
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
require('./TimeExtent-8b558884.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
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
require('./HeightModelInfo-06fd3d80.js');
require('./Layer-31cde361.js');
require('./workers-bde9fe32.js');
require('./APIKeyMixin-77c99036.js');
require('./ArcGISService-56d7a630.js');
require('./arcgisLayerUrl-5174d661.js');
require('./BlendLayer-6a2ab430.js');
require('./CustomParametersMixin-996a5732.js');
require('./labelingInfo-594911d5.js');
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
require('./popupUtils-7a76fb7d.js');
require('./utils-71e85012.js');
require('./ItemCache-149fdb6e.js');
require('./utils-fb318f28.js');
require('./Queue-1713f2e9.js');
require('./GoTo-be01affb.js');
require('./accessibleHandler-652e5d90.js');
require('./vmEvent-9b257013.js');
require('./InputField-f3d341ce.js');
require('./luxon-b6474344.js');
require('./_commonjsHelpers-1fbbf0eb.js');
require('./GraphicsLayer-5076fd9b.js');
require('./GraphicsCollection-d70ae8cb.js');
require('./drapedUtils-2fa2770f.js');
require('./hitTestSelectUtils-9a744d46.js');
require('./geodesicUtils-4d3dae6f.js');
require('./geodesicConstants-047d586a.js');
require('./vec2-d000a8cb.js');
require('./geometry2dUtils-65eda69d.js');
require('./PointSnappingHint-f5c433ac.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(n,o){return boundedPlane.Z(o.extent,e),boundedPlane.rs(e,mathUtils.o(a$1,n.x,n.y,0))}const e=boundedPlane.G(),a$1=vec4f64.n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c$1=class extends(HandleOwner.a(request.p)){constructor(e){super(e),this.pointOfInterest=null;}get tiles(){const e=this.tilesCoveringView,t$1=request.r(this.pointOfInterest)?this.pointOfInterest:this.view.center;return e.sort(((e,r)=>t(t$1,e)-t(t$1,r))),e}scaleEnabled(){return layerViewUtils.c(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||request.t$1(this.tileInfo))return [];if(!this.scaleEnabled)return [];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:r}=t,i=[];for(const{row:o,colFrom:s,colTo:l}of e)for(let e=s;e<=l;e++){const s={id:null,level:r,row:o,col:t.normalizeCol(e)};this.tileInfo.updateTileInfo(s),i.push(s);}return i}get tileInfo(){var e,t;return null!=(e=null==(t=this.view.featuresTilingScheme)?void 0:t.tileInfo)?e:null}get tileSize(){return request.r(this.tileInfo)?this.tileInfo.size[0]:256}initialize(){this.handles.add(this.watch("view.state.viewpoint",(()=>this.notifyChange("tilesCoveringView")),!0));}};request.e([request.d({readOnly:!0})],c$1.prototype,"tiles",null),request.e([request.d({readOnly:!0})],c$1.prototype,"scaleEnabled",null),request.e([request.d({readOnly:!0})],c$1.prototype,"tilesCoveringView",null),request.e([request.d({readOnly:!0})],c$1.prototype,"tileInfo",null),request.e([request.d({readOnly:!0})],c$1.prototype,"tileSize",null),request.e([request.d({constructOnly:!0})],c$1.prototype,"view",void 0),request.e([request.d({constructOnly:!0})],c$1.prototype,"layer",void 0),request.e([request.d()],c$1.prototype,"pointOfInterest",void 0),c$1=request.e([request.i("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],c$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends HandleOwner.d{constructor(e){super(e),this.pointOfInterest=null;}get tiles(){const e=this.tilesCoveringView,t$1=this.effectivePointOfInterest;if(request.r(t$1)){const r=e.map((e=>t(t$1,e)));for(let i=1;i<r.length;i++)if(r[i-1]>r[i])return e.sort(((e,r)=>t(t$1,e)-t(t$1,r))),e.slice()}return e}get tilesCoveringView(){var e,t;return this.filterTiles(null==(e=this.view.featureTiles)||null==(t=e.tiles)?void 0:t.toArray()).map(u)}get tileInfo(){var e,t;return null!=(e=null==(t=this.view.featureTiles)?void 0:t.tilingScheme.toTileInfo())?e:null}get tileSize(){var e,t;return null!=(e=null==(t=this.view.featureTiles)?void 0:t.tileSize)?e:256}get effectivePointOfInterest(){var e;const t=this.pointOfInterest;return request.r(t)?t:null==(e=this.view.pointsOfInterest)?void 0:e.focus.location}initialize(){this.handles.add(request.i$1(this.view,"featureTiles",(e=>{this.handles.remove(p$1),e&&this.handles.add(e.addClient(),p$1);})));}filterTiles(e){if(request.t$1(e))return [];return e.filter((e=>Math.abs(e.measures.screenRect[3]-e.measures.screenRect[1])>c&&2===e.measures.visibility))}};function u({lij:[e,t,r],extent:i}){return {id:`${e}/${t}/${r}`,level:e,row:t,col:r,extent:i}}request.e([request.d({readOnly:!0})],a.prototype,"tiles",null),request.e([request.d({readOnly:!0})],a.prototype,"tilesCoveringView",null),request.e([request.d({readOnly:!0})],a.prototype,"tileInfo",null),request.e([request.d({readOnly:!0})],a.prototype,"tileSize",null),request.e([request.d({constructOnly:!0})],a.prototype,"view",void 0),request.e([request.d()],a.prototype,"pointOfInterest",void 0),request.e([request.d()],a.prototype,"effectivePointOfInterest",null),a=request.e([request.i("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],a);const c=50,p$1="feature-tiles";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let d=class extends TileTreeDebugger.b{constructor(e){super(e),this.handles=new request.u;}initialize(){const e=setInterval((()=>this.fetchDebugInfo()),2e3);this.handles.add(request.n$11((()=>clearInterval(e))));}destroy(){this.handles.destroy();}getTiles(){if(!this.debugInfo)return [];const e=new Map,t=new Map;this.debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount);})),this.debugInfo.pendingTiles.forEach((r=>{e.set(r.data.id,r.featureCount),t.set(r.data.id,r.state);}));const r=r=>{var o;const s=t.get(r),a=null!=(o=e.get(r))?o:"?";return s?`${s}:${a}\n${r}`:`store:${a}\n${r}`},o=new Map;return this.debugInfo.storedTiles.forEach((e=>{o.set(e.data.id,e.data);})),this.debugInfo.pendingTiles.forEach((e=>{o.set(e.data.id,e.data);})),Array.from(o.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:geometry.v.fromExtent(aaBoundingRect.m(e.extent,this.view.spatialReference)),label:r(e.id)})))}fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this.debugInfo=e,this.update();}));}};request.e([request.d({constructOnly:!0})],d.prototype,"handle",void 0),d=request.e([request.i("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],d);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends HandleOwner.d{constructor(e){super(e),this.availability=0,this.workerHandleUpdating=!0,this.editId=0;}get updating(){return this.updatingHandles.updating||this.workerHandleUpdating}destroy(){this.workerHandle.destroy();}initialize(){this.workerHandle=new p(this.schedule),this.handles.add([this.workerHandle.on("notify-updating",(({updating:e})=>this.workerHandleUpdating=e)),this.workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))]);}async setup(e,t){const r=this.serviceInfoFromLayer(e.layer);if(request.t$1(r))return;const o={configuration:this.convertConfiguration(e.configuration),serviceInfo:r,spatialReference:e.spatialReference.toJSON()};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("setup",o,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));}async configure(e,t){const i=this.convertConfiguration(e);await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("configure",i,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));}async refresh(e){await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("refresh",{},e)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},e));}async fetchCandidates(e,t){const i={distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,filter:request.r(e.filter)?e.filter.createQuery().toJSON():null};return this.workerHandle.invoke(i,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:request.r(e.tileInfo)?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("updateTiles",i,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));}async applyEdits(e,t){var i,r,a,n,s,d;const l=this.editId++,p={id:l};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("beginApplyEdits",p,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));const u=await this.updatingHandles.addPromise(request.P(e.result,t)),c={id:l,edits:{addedFeatures:null!=(i=null==(r=u.addedFeatures)?void 0:r.map((({objectId:e})=>e)))?i:[],deletedFeatures:null!=(a=null==(n=u.deletedFeatures)?void 0:n.map((({objectId:e,globalId:t})=>({objectId:e,globalId:t}))))?a:[],updatedFeatures:null!=(s=null==(d=u.updatedFeatures)?void 0:d.map((({objectId:e})=>e)))?s:[]}};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("endApplyEdits",c,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));}getDebugInfo(e){return this.workerHandle.invokeMethod("getDebugInfo",{},e)}convertConfiguration(e){return {filter:request.r(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters}}serviceInfoFromLayer(e){var t;return "multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl.path,fields:e.fields.map((e=>e.toJSON())),geometryType:geometry.i$1.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:null==(t=e.timeInfo)?void 0:t.toJSON()}}};request.e([request.d({constructOnly:!0})],l.prototype,"schedule",void 0),request.e([request.d({readOnly:!0})],l.prototype,"updating",null),request.e([request.d({readOnly:!0})],l.prototype,"availability",void 0),request.e([request.d()],l.prototype,"workerHandleUpdating",void 0),l=request.e([request.i("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],l);class p extends WorkerHandle.n{constructor(e){super("FeatureServiceSnappingSourceWorker","fetchCandidates",e,{strategy:"dedicated"});}getTransferList(){return []}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends request.p{constructor(e){super(e),this.pointOfInterest=null;}get tiles(){return [{id:"0/0/0",level:0,row:0,col:0,extent:aaBoundingRect.o(-1e8,-1e8,1e8,1e8)}]}get tileInfo(){return new TileInfo.j({origin:new request.b$2({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new TileInfo.p({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}};request.e([request.d({readOnly:!0})],n.prototype,"tiles",null),request.e([request.d({readOnly:!0})],n.prototype,"tileInfo",null),request.e([request.d({readOnly:!0})],n.prototype,"tileSize",null),request.e([request.d({constructOnly:!0})],n.prototype,"layer",void 0),request.e([request.d()],n.prototype,"pointOfInterest",void 0),n=request.e([request.i("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],n);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
exports.FeatureServiceSnappingSource=class extends(HandleOwner.a(request.p)){constructor(e){super(e);}get updateTilesParameters(){return {tiles:this.tilesOfInterest.tiles,tileInfo:this.tilesOfInterest.tileInfo,tileSize:this.tilesOfInterest.tileSize}}get updating(){return this.workerHandle.updating||this.updatingHandles.updating}get configuration(){return {filter:this.layer.createQuery(),customParameters:this.layer.customParameters}}get availability(){return this.workerHandle.availability}get layer(){return this.layerSource.layer}initialize(){const e=this.view;if(request.r(e))switch(e.type){case"2d":this.tilesOfInterest=new c$1({view:e,layer:this.layer}),this.workerHandle=new l;break;case"3d":{const r=e.resourceController;this.tilesOfInterest=new a({view:e}),this.workerHandle=new l({schedule:e=>r.schedule(e)});break}}else this.tilesOfInterest=new n({layer:this.layer}),this.workerHandle=new l;this.handles.add([request.t$14(this.workerHandle)]),this.workerHandle.setup({layer:this.layer,spatialReference:this.spatialReference,configuration:this.configuration},null),this.updatingHandles.add(this,"updateTilesParameters",(()=>this.workerHandle.updateTiles(this.updateTilesParameters,null)),2),this.handles.add([reactiveUtils.i((()=>this.configuration),(e=>this.workerHandle.configure(e,null)),reactiveUtils.m)]),request.r(e)&&this.handles.add(reactiveUtils.i((()=>debugFlags.p.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(r=>{r&&!this.debug?(this.debug=new d({view:e,handle:this.workerHandle}),this.handles.add(request.t$14(this.debug),"debug")):!r&&this.debug&&this.handles.remove("debug");}),reactiveUtils.a)),this.handles.add(this.layerSource.layer.on("apply-edits",(e=>{this.workerHandle.applyEdits(e,null);})));}refresh(){this.workerHandle.refresh(null);}async fetchCandidates(e,r){return this.tilesOfInterest.pointOfInterest=e.coordinateHelper.vectorToPoint(e.point),(await this.workerHandle.fetchCandidates({...e,filter:null},r)).candidates.map((r=>queryEngineUtils.o(r,e.coordinateHelper)))}getDebugInfo(e){return this.workerHandle.getDebugInfo(e)}};request.e([request.d({constructOnly:!0})],exports.FeatureServiceSnappingSource.prototype,"spatialReference",void 0),request.e([request.d({constructOnly:!0})],exports.FeatureServiceSnappingSource.prototype,"layerSource",void 0),request.e([request.d({constructOnly:!0})],exports.FeatureServiceSnappingSource.prototype,"view",void 0),request.e([request.d()],exports.FeatureServiceSnappingSource.prototype,"tilesOfInterest",void 0),request.e([request.d({readOnly:!0})],exports.FeatureServiceSnappingSource.prototype,"updateTilesParameters",null),request.e([request.d({readOnly:!0})],exports.FeatureServiceSnappingSource.prototype,"updating",null),request.e([request.d({readOnly:!0})],exports.FeatureServiceSnappingSource.prototype,"configuration",null),request.e([request.d({readOnly:!0})],exports.FeatureServiceSnappingSource.prototype,"availability",null),exports.FeatureServiceSnappingSource=request.e([request.i("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],exports.FeatureServiceSnappingSource);
