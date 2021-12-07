import { as as i, S, Z as U, Q as E, bv as m$1, e, d, i as i$1, u, $, aj as b$1, A as r, af as t, s as s$1, a2 as o } from './messageBundle-f75b4090.js';
import { l as l$1 } from './MultiOriginJSONSupport-cb4804f4.js';
import { g } from './persistable-f1fade31.js';
import { b } from './Layer-b50ea610.js';
import { i as i$2 } from './APIKeyMixin-d7a9a0ad.js';
import { p } from './ArcGISService-49a9bda6.js';
import { y, d as d$1 } from './OperationalLayer-d609e521.js';
import { w } from './PortalLayer-290979fa.js';
import { s } from './ScaleRangeLayer-584ce37b.js';
import { N } from './SceneService-104706e9.js';
import { s as s$2, l as l$2, u as u$1, m as m$2 } from './I3SLayerDefinitions-6c55f2c0.js';
import { f } from './SceneModification-74882e7e.js';
import { c } from './persistableUrlUtils-40bbec67.js';
import './index-b157fcf2.js';
import './multiOriginJSONSupportUtils-984fb5af.js';
import './geometry-7e07b1ba.js';
import './Identifiable-da047c47.js';
import './Portal-c5cfa317.js';
import './arcgisLayerUrl-49ef2818.js';
import './TimeExtent-a024c0d8.js';
import './ElevationInfo-be94499b.js';
import './opacityUtils-5e864561.js';
import './lengthUtils-f033d4fe.js';
import './unitUtils-38774114.js';
import './asyncUtils-fe35d349.js';
import './PortalItem-155284f3.js';
import './originUtils-a479af22.js';
import './HeightModelInfo-1a6d7a08.js';
import './I3SIndexInfo-49500ed9.js';
import './saveUtils-503e6a55.js';
import './resourceUtils-ff309ca6.js';
import './enumeration-d3301938.js';
import './projection-f3d8779d.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './mat4-f34c6460.js';
import './aaBoundingRect-9468599b.js';
import './geodesicConstants-54cb88d4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let n=m=class extends(i(S.ofType(f))){constructor(r){super(r),this.url=null;}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}clone(){return new m({url:this.url,items:this.items.map((r=>r.clone()))})}_readModifications(r,o){for(const t of r)this.add(f.fromJSON(t,o));}static fromJSON(r,o){const t=new m;return t._readModifications(r,o),t}static async fromUrl(r,t,e){const c={url:U(r),origin:"service"},a=await E(r,{responseType:"json",signal:m$1(e,"signal")}),n=t.toJSON(),l=[];for(const o of a.data)l.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},c));return new m({url:r,items:l})}};e([d({type:String})],n.prototype,"url",void 0),n=m=e([i$1("esri.layers.support.SceneModifications")],n);const l=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let O=class extends(N(p(y(w(s(l$1(i$2(b)))))))){constructor(...e){super(...e),this.handles=new u,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null;}destroy(){this.handles.destroy();}initialize(){this.handles.add($(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:c(e,r),context:r};}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=m$1(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e);}catch(r){b$1(r);}if(await this._fetchService(t),r(this._modificationsSource)){const t=await l.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null;}await this._fetchIndexAndUpdateExtent(this.nodePages,t);}beforeSave(){if(!t(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s$1("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$1("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s$1("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return ["IntegratedMeshLayer"]}};e([d({type:String,readOnly:!0})],O.prototype,"geometryType",void 0),e([d({type:["show","hide"]})],O.prototype,"listMode",void 0),e([d({type:["IntegratedMeshLayer"]})],O.prototype,"operationalLayerType",void 0),e([d({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),e([d({type:s$2,readOnly:!0})],O.prototype,"nodePages",void 0),e([d({type:[l$2],readOnly:!0})],O.prototype,"materialDefinitions",void 0),e([d({type:[u$1],readOnly:!0})],O.prototype,"textureSetDefinitions",void 0),e([d({type:[m$2],readOnly:!0})],O.prototype,"geometryDefinitions",void 0),e([d({readOnly:!0})],O.prototype,"serviceUpdateTimeStamp",void 0),e([d({type:l}),g({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],O.prototype,"modifications",void 0),e([o(["web-scene","portal-item"],"modifications")],O.prototype,"readModifications",null),e([d(d$1)],O.prototype,"elevationInfo",void 0),e([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),O=e([i$1("esri.layers.IntegratedMeshLayer")],O);const M=O;

export default M;
