import { aa as b$1, m as s$1, O as E, N as d, e as e$1, d as d$1, R as S, i as i$2, r as r$2, bi as t } from './messageBundle-8a146a9b.js';
import { y as y$2 } from './TimeExtent-16986fe0.js';
import { a as a$1 } from './HandleOwner-6cdc634d.js';
import { n as n$1 } from './loadAll-446fc3cf.js';
import { l, b } from './Layer-455faab4.js';
import { M, o as o$1, d as r$1 } from './unitUtils-c707ba3c.js';
import { r } from './scaleUtils-0757e32b.js';
import { i as i$1 } from './APIKeyMixin-f2be3dfc.js';
import { f, y, K } from './SublayersOwner-f6dd75df.js';
import { p } from './ArcGISService-adf08a63.js';
import { i } from './BlendLayer-286c847c.js';
import { o } from './CustomParametersMixin-05dda462.js';
import { y as y$1 } from './OperationalLayer-52601c7c.js';
import { w } from './PortalLayer-faa3179f.js';
import { n } from './RefreshableLayer-f326088d.js';
import { s } from './ScaleRangeLayer-aeac5429.js';
import { a } from './TemporalLayer-f8f255e9.js';
import { f as f$1 } from './commonProperties-0e370622.js';
import { c } from './ExportImageParameters-5de682be.js';
import { e } from './sublayerUtils-c6a17833.js';
import './index-41925fe8.js';
import './JSONSupport-4e29e63d.js';
import './reactiveUtils-a5f838c7.js';
import './asyncUtils-c98101f9.js';
import './Version-e3d62f63.js';
import './CollectionFlattener-2797ca68.js';
import './UniqueValueRenderer-75e84d49.js';
import './VisualVariablesMixin-66f084f4.js';
import './colorRamps-b0e37c54.js';
import './ColorStop-ff4a3943.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-3ac464e8.js';
import './lengthUtils-a6878787.js';
import './diffUtils-14ca3884.js';
import './jsonUtils-7105a0de.js';
import './styleUtils-5fe9231e.js';
import './DictionaryRenderer-4a77ed62.js';
import './LRUCache-b68d19e5.js';
import './MemCache-73bb45e2.js';
import './jsonUtils-f2130780.js';
import './FeatureType-30442694.js';
import './Field-fbfaf20d.js';
import './fieldType-f80f0b3d.js';
import './FieldsIndex-041474f9.js';
import './LabelClass-080f9590.js';
import './labelUtils-17428bb2.js';
import './defaultsJSON-f90363d8.js';
import './LayerFloorInfo-e1a08643.js';
import './Query-71270a43.js';
import './popupUtils-b5ee0759.js';
import './floorFilterUtils-a09da11b.js';
import './arcgisLayerUrl-30839db3.js';
import './jsonUtils-433a912a.js';
import './mat4-1ee7ce2f.js';
import './PortalItem-3f93baa8.js';
import './TimeInfo-3ee9ad62.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let q=class extends(i(a(s(f(y(p(y$1(w(l(n(i$1(o(a$1(b)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r=r$2(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b$1).then((()=>this._fetchService(r)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e$1,r,t$1,o){if(!this.loaded||!e$1)return;const i=e$1.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e$1=t(o.origin);if(3===e$1){const e$1=this.createSublayersForOrigin("service").sublayers;s=e(i,e$1,2);}else if(e$1>3){const e$1=this.createSublayersForOrigin("portal-item");s=e(i,e$1.sublayers,t(e$1.origin));}}const a=[],p={writeSublayerStructure:s,...o};let n=s;i.forEach((e=>{const r=e.write({},p);a.push(r),n=n||"user"===e.originOf("visible");}));a.some((e=>Object.keys(e).length>1))&&(r.layers=a),n&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)));}createExportImageParameters(e,r$1,t,o){const i=o&&o.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const s=new c({layer:this,floors:null==o?void 0:o.floors,scale:r({extent:e,width:r$1})*i}),a=s.toJSON();s.destroy();const p=!o||!o.rotation||this.version<10.3?{}:{rotation:-o.rotation},n=e&&e.spatialReference,m=n.wkid||JSON.stringify(n.toJSON());a.dpi*=i;const l={};if(null!=o&&o.timeExtent){const{start:e,end:r}=o.timeExtent.toJSON();l.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`;}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return {bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:m,imageSR:m,size:r$1+","+t,...a,...p,...l}}async fetchImage(e,t,i,s){var a;const p={responseType:"image",signal:null!=(a=null==s?void 0:s.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,i,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(null!=p.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return Promise.reject(new s$1("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query}));return E(n,p).then((e=>e.data)).catch((e=>{if(d(e))throw e;throw new s$1("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})}))}async fetchRecomputedExtents(e={}){const o={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:i}=await E(this.url,o),{extent:s,fullExtent:a,timeExtent:p}=i,n=s||a;return {fullExtent:n&&M.fromJSON(n),timeExtent:p&&y$2.fromJSON({start:p[0],end:p[1]})}}loadAll(){return n$1(this,(e=>{e(this.allSublayers);}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:o}=await E(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});o&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl});}};e$1([d$1({type:Boolean})],q.prototype,"datesInUnknownTimezone",void 0),e$1([d$1()],q.prototype,"dpi",void 0),e$1([d$1()],q.prototype,"gdbVersion",void 0),e$1([d$1()],q.prototype,"imageFormat",void 0),e$1([o$1("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),e$1([d$1({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),e$1([d$1({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),e$1([d$1()],q.prototype,"imageTransparency",void 0),e$1([d$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),e$1([d$1({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),e$1([d$1({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),e$1([d$1({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),e$1([d$1()],q.prototype,"sourceJSON",void 0),e$1([d$1({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),e$1([r$1("sublayers",{layers:{type:[K]},visibleLayers:{type:[S]}})],q.prototype,"writeSublayers",null),e$1([d$1({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),e$1([d$1({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),e$1([d$1(f$1)],q.prototype,"url",void 0),q=e$1([i$2("esri.layers.MapImageLayer")],q);const A=q;

export default A;
