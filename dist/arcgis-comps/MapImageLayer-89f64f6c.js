import { r, a9 as b$1, ak as t, a as s$1, E, d, e as e$1, b as d$1, a1 as S, i as i$2 } from './cast-e5ea2533.js';
import { y as y$2 } from './TimeExtent-ecf7e6f2.js';
import { a as a$1 } from './HandleOwner-0793ecee.js';
import { n as n$1 } from './loadAll-a2448ab4.js';
import { l, b } from './Layer-663fafaf.js';
import { M, o as o$1, r as r$2 } from './Portal-f1457cb4.js';
import { r as r$1 } from './scaleUtils-ec0d71e3.js';
import { i as i$1 } from './APIKeyMixin-5ecbc947.js';
import { f, y, K } from './SublayersOwner-c1f95c9b.js';
import { p } from './ArcGISService-00a30f8e.js';
import { i } from './BlendLayer-34bd1b5b.js';
import { o } from './CustomParametersMixin-171b3366.js';
import { y as y$1 } from './OperationalLayer-0f16c161.js';
import { w } from './PortalLayer-0ef8a2d2.js';
import { n } from './RefreshableLayer-0c4b9daf.js';
import { s } from './ScaleRangeLayer-f5a96945.js';
import { a } from './TemporalLayer-b9cacecc.js';
import { f as f$1 } from './commonProperties-4c10a963.js';
import { c } from './ExportImageParameters-df0cf75b.js';
import { e } from './sublayerUtils-c6a17833.js';
import './JSONSupport-8dda8bae.js';
import './Handles-24a27aa9.js';
import './Collection-ac20f1a1.js';
import './reactiveUtils-ab0efcb1.js';
import './watchUtils-08cf9d08.js';
import './asyncUtils-847ae6e6.js';
import './geometry-160ffbb5.js';
import './Polyline-56152656.js';
import './Identifiable-0fb3fc58.js';
import './unitUtils-5dcccb3c.js';
import './Version-f16e65fc.js';
import './CollectionFlattener-4b03d02c.js';
import './PopupTemplate-87ca9924.js';
import './opacityUtils-5755cb64.js';
import './enumeration-da141e85.js';
import './number-2da43364.js';
import './UniqueValueRenderer-b8a9ac2d.js';
import './symbols-dc010d3b.js';
import './Symbol-ac21e497.js';
import './Color-ed0bfbe9.js';
import './colorUtils-37750ea3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './screenUtils-9ed89fa7.js';
import './aaBoundingBox-e0a84875.js';
import './aaBoundingRect-2a187de3.js';
import './persistableUrlUtils-a9da326c.js';
import './collectionUtils-b35b097b.js';
import './VisualVariablesMixin-a8b13e1b.js';
import './colorRamps-fcb1175a.js';
import './ColorStop-0035d362.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-ed2b64ac.js';
import './Graphic-79de2095.js';
import './compilerUtils-2d7ddb00.js';
import './lengthUtils-2084b777.js';
import './diffUtils-4072cef0.js';
import './jsonUtils-528e9eda.js';
import './styleUtils-5c87d3a9.js';
import './DictionaryRenderer-09505309.js';
import './LRUCache-65fcdebd.js';
import './MemCache-d4727626.js';
import './jsonUtils-efd42703.js';
import './aliasOf-e543e228.js';
import './FeatureType-1c489c5b.js';
import './Field-67832b5b.js';
import './fieldType-7f6b02ef.js';
import './FieldsIndex-e09edd96.js';
import './LabelClass-a646d1d3.js';
import './labelUtils-a20584ac.js';
import './defaultsJSON-53258912.js';
import './LayerFloorInfo-8df7be66.js';
import './Query-b8b0a5e8.js';
import './popupUtils-71e7198e.js';
import './floorFilterUtils-a09da11b.js';
import './arcgisLayerUrl-4273e4b3.js';
import './jsonUtils-687db5e9.js';
import './mat4-0196b8fc.js';
import './_commonjsHelpers-020ca939.js';
import './PortalItem-85b3bb14.js';
import './assets-1ab0ccbe.js';
import './TimeInfo-5f646e9b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let q=class extends(i(a(s(f(y(p(y$1(w(l(n(i$1(o(a$1(b)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e$1,r,t$1,o){if(!this.loaded||!e$1)return;const i=e$1.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e$1=t(o.origin);if(3===e$1){const e$1=this.createSublayersForOrigin("service").sublayers;s=e(i,e$1,2);}else if(e$1>3){const e$1=this.createSublayersForOrigin("portal-item");s=e(i,e$1.sublayers,t(e$1.origin));}}const a=[],p={writeSublayerStructure:s,...o};let n=s;i.forEach((e=>{const r=e.write({},p);a.push(r),n=n||"user"===e.originOf("visible");}));a.some((e=>Object.keys(e).length>1))&&(r.layers=a),n&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)));}createExportImageParameters(e,r,t,o){const i=o&&o.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const s=new c({layer:this,floors:null==o?void 0:o.floors,scale:r$1({extent:e,width:r})*i}),a=s.toJSON();s.destroy();const p=!o||!o.rotation||this.version<10.3?{}:{rotation:-o.rotation},n=e&&e.spatialReference,m=n.wkid||JSON.stringify(n.toJSON());a.dpi*=i;const l={};if(null!=o&&o.timeExtent){const{start:e,end:r}=o.timeExtent.toJSON();l.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`;}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return {bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:m,imageSR:m,size:r+","+t,...a,...p,...l}}async fetchImage(e,t,i,s){var a;const p={responseType:"image",signal:null!=(a=null==s?void 0:s.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,i,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(null!=p.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return Promise.reject(new s$1("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query}));return E(n,p).then((e=>e.data)).catch((e=>{if(d(e))throw e;throw new s$1("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})}))}async fetchRecomputedExtents(e={}){const o={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:i}=await E(this.url,o),{extent:s,fullExtent:a,timeExtent:p}=i,n=s||a;return {fullExtent:n&&M.fromJSON(n),timeExtent:p&&y$2.fromJSON({start:p[0],end:p[1]})}}loadAll(){return n$1(this,(e=>{e(this.allSublayers);}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:o}=await E(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});o&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl});}};e$1([d$1({type:Boolean})],q.prototype,"datesInUnknownTimezone",void 0),e$1([d$1()],q.prototype,"dpi",void 0),e$1([d$1()],q.prototype,"gdbVersion",void 0),e$1([d$1()],q.prototype,"imageFormat",void 0),e$1([o$1("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),e$1([d$1({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),e$1([d$1({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),e$1([d$1()],q.prototype,"imageTransparency",void 0),e$1([d$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),e$1([d$1({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),e$1([d$1({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),e$1([d$1({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),e$1([d$1()],q.prototype,"sourceJSON",void 0),e$1([d$1({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),e$1([r$2("sublayers",{layers:{type:[K]},visibleLayers:{type:[S]}})],q.prototype,"writeSublayers",null),e$1([d$1({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),e$1([d$1({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),e$1([d$1(f$1)],q.prototype,"url",void 0),q=e$1([i$2("esri.layers.MapImageLayer")],q);const A=q;

export default A;
