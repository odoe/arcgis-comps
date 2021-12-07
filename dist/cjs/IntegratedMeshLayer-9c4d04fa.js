'use strict';

const request = require('./messageBundle-8be88d04.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const persistable = require('./persistable-288135cc.js');
const Layer = require('./Layer-31cde361.js');
const APIKeyMixin = require('./APIKeyMixin-77c99036.js');
const ArcGISService = require('./ArcGISService-56d7a630.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const SceneService = require('./SceneService-0beb7b88.js');
const I3SLayerDefinitions = require('./I3SLayerDefinitions-b8d36b66.js');
const SceneModification = require('./SceneModification-3ee9cfd2.js');
const persistableUrlUtils = require('./persistableUrlUtils-c611d652.js');
require('./index-fde8502c.js');
require('./multiOriginJSONSupportUtils-13e8b6cf.js');
require('./geometry-ef17530a.js');
require('./Identifiable-a4f50f85.js');
require('./Portal-8d16604d.js');
require('./arcgisLayerUrl-5174d661.js');
require('./TimeExtent-8b558884.js');
require('./ElevationInfo-d3e3d64f.js');
require('./opacityUtils-f2e4b347.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./originUtils-fc18d7d8.js');
require('./HeightModelInfo-06fd3d80.js');
require('./I3SIndexInfo-7e127a6f.js');
require('./saveUtils-a37d456e.js');
require('./resourceUtils-c2de819b.js');
require('./enumeration-f235fe07.js');
require('./projection-b19710fa.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./mat4-f68486bc.js');
require('./aaBoundingRect-56648c00.js');
require('./geodesicConstants-047d586a.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let n=m=class extends(request.i$5(request.S.ofType(SceneModification.f))){constructor(r){super(r),this.url=null;}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}clone(){return new m({url:this.url,items:this.items.map((r=>r.clone()))})}_readModifications(r,o){for(const t of r)this.add(SceneModification.f.fromJSON(t,o));}static fromJSON(r,o){const t=new m;return t._readModifications(r,o),t}static async fromUrl(r,t,e){const c={url:request.U(r),origin:"service"},a=await request.E(r,{responseType:"json",signal:request.m$4(e,"signal")}),n=t.toJSON(),l=[];for(const o of a.data)l.push(SceneModification.f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},c));return new m({url:r,items:l})}};request.e([request.d({type:String})],n.prototype,"url",void 0),n=m=request.e([request.i("esri.layers.support.SceneModifications")],n);const l=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let O=class extends(SceneService.N(ArcGISService.p(OperationalLayer.y(PortalLayer.w(ScaleRangeLayer.s(MultiOriginJSONSupport.l(APIKeyMixin.i(Layer.b)))))))){constructor(...e){super(...e),this.handles=new request.u,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null;}destroy(){this.handles.destroy();}initialize(){this.handles.add(request.$(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:persistableUrlUtils.c(e,r),context:r};}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=request.m$4(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e);}catch(r){request.b$1(r);}if(await this._fetchService(t),request.r(this._modificationsSource)){const t=await l.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null;}await this._fetchIndexAndUpdateExtent(this.nodePages,t);}beforeSave(){if(!request.t$1(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new request.s("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new request.s("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new request.s("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return ["IntegratedMeshLayer"]}};request.e([request.d({type:String,readOnly:!0})],O.prototype,"geometryType",void 0),request.e([request.d({type:["show","hide"]})],O.prototype,"listMode",void 0),request.e([request.d({type:["IntegratedMeshLayer"]})],O.prototype,"operationalLayerType",void 0),request.e([request.d({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),request.e([request.d({type:I3SLayerDefinitions.s,readOnly:!0})],O.prototype,"nodePages",void 0),request.e([request.d({type:[I3SLayerDefinitions.l],readOnly:!0})],O.prototype,"materialDefinitions",void 0),request.e([request.d({type:[I3SLayerDefinitions.u],readOnly:!0})],O.prototype,"textureSetDefinitions",void 0),request.e([request.d({type:[I3SLayerDefinitions.m],readOnly:!0})],O.prototype,"geometryDefinitions",void 0),request.e([request.d({readOnly:!0})],O.prototype,"serviceUpdateTimeStamp",void 0),request.e([request.d({type:l}),persistable.g({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],O.prototype,"modifications",void 0),request.e([request.o$2(["web-scene","portal-item"],"modifications")],O.prototype,"readModifications",null),request.e([request.d(OperationalLayer.d)],O.prototype,"elevationInfo",void 0),request.e([request.d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),O=request.e([request.i("esri.layers.IntegratedMeshLayer")],O);const M=O;

exports.default = M;
