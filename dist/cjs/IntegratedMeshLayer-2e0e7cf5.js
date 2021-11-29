'use strict';

const request = require('./MapView-1726f571.js');
const originUtils = require('./originUtils-be03c485.js');
const SceneService = require('./SceneService-5ab007b2.js');
const I3SLayerDefinitions = require('./I3SLayerDefinitions-ee245657.js');
require('./index-fde8502c.js');
require('./resourceUtils-7da629a5.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(i){return o[n$1(i)]||e}function n$1(i){return i instanceof Blob?i.type:t(i.url)}function t(p){const n=request.qt(p);return g$1[n]||a}const o={},a="text/plain",e=o[a],g$1={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const l in g$1)o[g$1[l]]=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(r){const e=request.r(r)&&r.origins?r.origins:[void 0];return (t,o)=>{const i=w(r,t,o);for(const r of e){const e=request.y$20(t,r,o);for(const t in i)e[t]=i[t];}}}function w(r,e,o){if(request.r(r)&&"resource"===r.type)return v(r,e,o);switch(request.r(r)&&r.type?r.type:"other"){case"other":return {read:!0,write:!0};case"url":{const{read:t,write:r}=request.R$2;return {read:t,write:r}}}}function v(e,s,u){const p=request.s$26(s,u);return {type:String,read:(t,r,e)=>{const o=request.m$22(t,r,e);return p.type===String?o:"function"==typeof p.type?new p.type({url:o}):void 0},write:{writer(s,a,l,f){if(!f||!f.resources)return "string"==typeof s?void(a[l]=request.i$24(s,f)):void(a[l]=s.write({},f));const m=P(s),d=m?request.i$24(m,{...f,verifyItemRelativeUrls:f&&f.verifyItemRelativeUrls?{writtenUrls:f.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,g=p.type!==String&&(!originUtils.i(this)||f&&f.origin&&this.originIdOf(u)>request.t$21(f.origin));f&&f.portalItem&&request.r(d)&&!request.Q$3(d)?g?j(this,u,s,d,a,l,f,e):I(d,a,l,f):f&&f.portalItem&&(request.t(d)||request.r(request.U$5(d))||request.F$4(d)||g)?U(this,u,s,d,a,l,f,e):a[l]=d;}}}}function U(t,r,o,i,u,a,c,l){const m=request.o$19(),y=S(o,i,c),h=request.D$2(request.m$12(l,"prefix"),m),d=`${h}.${p(y)}`,g=c.portalItem.resourceFromPath(d);request.F$4(i)&&c.resources.pendingOperations.push(b(i).then((t=>{g.path=`${h}.${p(t)}`,u[a]=g.itemRelativeUrl;})).catch((()=>{}))),O$1(t,r,g,y,c.resources.toAdd),u[a]=g.itemRelativeUrl;}function j(t,r,e,o,i,n,s,p$1){const a=s.portalItem.resourceFromPath(o),c=S(e,o,s);p(c)===request.qt(a.path)?(O$1(t,r,a,c,s.resources.toUpdate),i[n]=o):U(t,r,e,o,i,n,s,p$1);}function I(t,r,e,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(t)}),r[e]=t;}function O$1(t,r,e,o,i){i.push({resource:e,content:o,finish:e=>{R(t,r,e);}});}function S(t,r,e){return "string"==typeof t?{url:r}:new Blob([JSON.stringify(t.toJSON(e))],{type:"application/json"})}async function b(t){const r=(await Promise.resolve().then(function () { return require('./MapView-1726f571.js'); }).then(function (n) { return n.request; })).default,{data:e}=await r(t,{responseType:"blob"});return e}function P(t){return request.t(t)?null:"string"==typeof t?t:t.url}function R(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url;}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m$1;let y=m$1=class extends request.a$5{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!request.tn(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new request.t$22("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new request.v$2;request.hn(e,p,s.layer.spatialReference),r[o]=p.toJSON(s);}else r[o]=e.toJSON(s);delete r[o].spatialReference;}clone(){return new m$1({geometry:request.l(this.geometry),type:this.type})}};request.e([request.d({type:request.v$2}),g()],y.prototype,"geometry",void 0),request.e([request.r$7(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),request.e([request.d({type:["clip","mask","replace"],nonNullable:!0}),g()],y.prototype,"type",void 0),y=m$1=request.e([request.i("esri.layers.support.SceneModification")],y);const f=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let n=m=class extends(request.i$29(request.S.ofType(f))){constructor(r){super(r),this.url=null;}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}clone(){return new m({url:this.url,items:this.items.map((r=>r.clone()))})}_readModifications(r,o){for(const t of r)this.add(f.fromJSON(t,o));}static fromJSON(r,o){const t=new m;return t._readModifications(r,o),t}static async fromUrl(r,t,e){const c={url:request.U(r),origin:"service"},a=await request.E(r,{responseType:"json",signal:request.m$12(e,"signal")}),n=t.toJSON(),l=[];for(const o of a.data)l.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},c));return new m({url:r,items:l})}};request.e([request.d({type:String})],n.prototype,"url",void 0),n=m=request.e([request.i("esri.layers.support.SceneModifications")],n);const l=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let O=class extends(SceneService.N(request.p$4(request.y$5(request.w$5(request.s$21(request.l$4(request.i$26(request.b$10)))))))){constructor(...e){super(...e),this.handles=new request.u$2,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null;}destroy(){this.handles.destroy();}initialize(){this.handles.add(request.$(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:request.c$6(e,r),context:r};}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=request.m$12(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e);}catch(r){request.b$9(r);}if(await this._fetchService(t),request.r(this._modificationsSource)){const t=await l.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null;}await this._fetchIndexAndUpdateExtent(this.nodePages,t);}beforeSave(){if(!request.t(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new request.s$1("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new request.s$1("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new request.s$1("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return ["IntegratedMeshLayer"]}};request.e([request.d({type:String,readOnly:!0})],O.prototype,"geometryType",void 0),request.e([request.d({type:["show","hide"]})],O.prototype,"listMode",void 0),request.e([request.d({type:["IntegratedMeshLayer"]})],O.prototype,"operationalLayerType",void 0),request.e([request.d({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),request.e([request.d({type:I3SLayerDefinitions.s,readOnly:!0})],O.prototype,"nodePages",void 0),request.e([request.d({type:[I3SLayerDefinitions.l],readOnly:!0})],O.prototype,"materialDefinitions",void 0),request.e([request.d({type:[I3SLayerDefinitions.u],readOnly:!0})],O.prototype,"textureSetDefinitions",void 0),request.e([request.d({type:[I3SLayerDefinitions.m],readOnly:!0})],O.prototype,"geometryDefinitions",void 0),request.e([request.d({readOnly:!0})],O.prototype,"serviceUpdateTimeStamp",void 0),request.e([request.d({type:l}),g({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],O.prototype,"modifications",void 0),request.e([request.o$3(["web-scene","portal-item"],"modifications")],O.prototype,"readModifications",null),request.e([request.d(request.d$19)],O.prototype,"elevationInfo",void 0),request.e([request.d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),O=request.e([request.i("esri.layers.IntegratedMeshLayer")],O);const M=O;

exports.default = M;
