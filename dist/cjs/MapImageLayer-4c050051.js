'use strict';

const request = require('./messageBundle-312ceb47.js');
const TimeExtent = require('./TimeExtent-cdfe048b.js');
const HandleOwner = require('./HandleOwner-f254dc86.js');
const loadAll = require('./loadAll-57962b35.js');
const Layer = require('./Layer-849337e0.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const scaleUtils = require('./scaleUtils-f8dbeb9d.js');
const APIKeyMixin = require('./APIKeyMixin-f99c03a8.js');
const SublayersOwner = require('./SublayersOwner-479438db.js');
const ArcGISService = require('./ArcGISService-a170c777.js');
const BlendLayer = require('./BlendLayer-7e864068.js');
const CustomParametersMixin = require('./CustomParametersMixin-8fc5bf2f.js');
const OperationalLayer = require('./OperationalLayer-f89b9d70.js');
const PortalLayer = require('./PortalLayer-19d79370.js');
const RefreshableLayer = require('./RefreshableLayer-22c5fbbd.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-52589af6.js');
const TemporalLayer = require('./TemporalLayer-0201042a.js');
const commonProperties = require('./commonProperties-75b954b3.js');
const ExportImageParameters = require('./ExportImageParameters-b66a9aec.js');
const sublayerUtils = require('./sublayerUtils-a9071b30.js');
require('./index-57f2cfbb.js');
require('./JSONSupport-53c01d03.js');
require('./reactiveUtils-9e33ad73.js');
require('./asyncUtils-9f974032.js');
require('./Version-3676e068.js');
require('./CollectionFlattener-3dadfe6b.js');
require('./UniqueValueRenderer-cac6e88d.js');
require('./VisualVariablesMixin-fd7d8973.js');
require('./colorRamps-c066f1f7.js');
require('./ColorStop-c5f3f911.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-4df768a8.js');
require('./lengthUtils-3475e67e.js');
require('./diffUtils-467572e8.js');
require('./jsonUtils-1999c7ae.js');
require('./styleUtils-10128dd7.js');
require('./DictionaryRenderer-7157833a.js');
require('./LRUCache-b38a7907.js');
require('./MemCache-1ae72e1e.js');
require('./jsonUtils-fa6e9edd.js');
require('./FeatureType-5a860566.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./FieldsIndex-8c8f3ac6.js');
require('./LabelClass-21df7ce2.js');
require('./labelUtils-7677c2d3.js');
require('./defaultsJSON-01ae5a1a.js');
require('./LayerFloorInfo-154885ea.js');
require('./Query-35be2e91.js');
require('./popupUtils-180c3a12.js');
require('./floorFilterUtils-a9b30733.js');
require('./arcgisLayerUrl-b24ae301.js');
require('./jsonUtils-4461cf25.js');
require('./mat4-1439266d.js');
require('./PortalItem-42e06deb.js');
require('./TimeInfo-e2561319.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let q=class extends(BlendLayer.i(TemporalLayer.a(ScaleRangeLayer.s(SublayersOwner.f(SublayersOwner.y(ArcGISService.p(OperationalLayer.y(PortalLayer.w(Layer.l(RefreshableLayer.n(APIKeyMixin.i(CustomParametersMixin.o(HandleOwner.a(Layer.b)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(request.b$1).then((()=>this._fetchService(r)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,r,t,o){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=request.t$8(o.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;s=sublayerUtils.e(i,e,2);}else if(e>3){const e=this.createSublayersForOrigin("portal-item");s=sublayerUtils.e(i,e.sublayers,request.t$8(e.origin));}}const a=[],p={writeSublayerStructure:s,...o};let n=s;i.forEach((e=>{const r=e.write({},p);a.push(r),n=n||"user"===e.originOf("visible");}));a.some((e=>Object.keys(e).length>1))&&(r.layers=a),n&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)));}createExportImageParameters(e,r,t,o){const i=o&&o.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const s=new ExportImageParameters.c({layer:this,floors:null==o?void 0:o.floors,scale:scaleUtils.r({extent:e,width:r})*i}),a=s.toJSON();s.destroy();const p=!o||!o.rotation||this.version<10.3?{}:{rotation:-o.rotation},n=e&&e.spatialReference,m=n.wkid||JSON.stringify(n.toJSON());a.dpi*=i;const l={};if(null!=o&&o.timeExtent){const{start:e,end:r}=o.timeExtent.toJSON();l.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`;}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return {bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:m,imageSR:m,size:r+","+t,...a,...p,...l}}async fetchImage(e,t,i,s){var a;const p={responseType:"image",signal:null!=(a=null==s?void 0:s.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,i,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(null!=p.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return Promise.reject(new request.s$1("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query}));return request.E(n,p).then((e=>e.data)).catch((e=>{if(request.d$2(e))throw e;throw new request.s$1("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})}))}async fetchRecomputedExtents(e={}){const o={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:i}=await request.E(this.url,o),{extent:s,fullExtent:a,timeExtent:p}=i,n=s||a;return {fullExtent:n&&unitUtils.M.fromJSON(n),timeExtent:p&&TimeExtent.y.fromJSON({start:p[0],end:p[1]})}}loadAll(){return loadAll.n(this,(e=>{e(this.allSublayers);}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:o}=await request.E(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});o&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl});}};request.e([request.d({type:Boolean})],q.prototype,"datesInUnknownTimezone",void 0),request.e([request.d()],q.prototype,"dpi",void 0),request.e([request.d()],q.prototype,"gdbVersion",void 0),request.e([request.d()],q.prototype,"imageFormat",void 0),request.e([unitUtils.o("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),request.e([request.d({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),request.e([request.d({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),request.e([request.d()],q.prototype,"imageTransparency",void 0),request.e([request.d({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),request.e([request.d({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),request.e([request.d({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),request.e([request.d({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),request.e([request.d()],q.prototype,"sourceJSON",void 0),request.e([request.d({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),request.e([unitUtils.r$1("sublayers",{layers:{type:[SublayersOwner.K]},visibleLayers:{type:[request.S$2]}})],q.prototype,"writeSublayers",null),request.e([request.d({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),request.e([request.d({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),request.e([request.d(commonProperties.f)],q.prototype,"url",void 0),q=request.e([request.i("esri.layers.MapImageLayer")],q);const A=q;

exports.default = A;
