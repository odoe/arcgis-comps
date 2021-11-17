import { r, Z as b$1, aM as t, C as s$1, a3 as E, aI as d, e as e$1, a as d$1, a9 as S, i as i$2 } from './jsxFactory-ef3e403e.js';
import { y as y$2 } from './TimeExtent-fb7ed3e3.js';
import { a as a$1 } from './HandleOwner-ebad91ab.js';
import { n as n$1 } from './loadAll-5f59a7da.js';
import { l, b } from './Layer-5a380094.js';
import { M, o as o$1, d as r$2 } from './unitUtils-8a2b838a.js';
import { r as r$1 } from './scaleUtils-15889448.js';
import { i as i$1 } from './APIKeyMixin-a3a0d40c.js';
import { f, y, K } from './SublayersOwner-97dc18c3.js';
import { p } from './ArcGISService-30368d07.js';
import { i } from './BlendLayer-81c24642.js';
import { o } from './CustomParametersMixin-ca53bbdf.js';
import { y as y$1 } from './OperationalLayer-63ec0fa5.js';
import { w } from './PortalLayer-2d4eca15.js';
import { n } from './RefreshableLayer-079cea19.js';
import { s } from './ScaleRangeLayer-cb457ce8.js';
import { a } from './TemporalLayer-64ff2afe.js';
import { f as f$1 } from './commonProperties-e22a7011.js';
import { c } from './ExportImageParameters-b1c6f328.js';
import { e } from './sublayerUtils-c6a17833.js';
import './index-5b4f4de1.js';
import './JSONSupport-a5eb98e7.js';
import './reactiveUtils-2b52b231.js';
import './asyncUtils-968a02e9.js';
import './Version-38dfe388.js';
import './CollectionFlattener-70fb34fc.js';
import './UniqueValueRenderer-1e1c8bf1.js';
import './VisualVariablesMixin-0776df0b.js';
import './colorRamps-a6280e46.js';
import './ColorStop-d3744592.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-5b3d6d65.js';
import './compilerUtils-be3a2322.js';
import './lengthUtils-26f6142e.js';
import './diffUtils-1f52a3dd.js';
import './jsonUtils-9c0d7442.js';
import './styleUtils-f18fb225.js';
import './DictionaryRenderer-b0e19146.js';
import './LRUCache-59f5b25d.js';
import './MemCache-bf2be364.js';
import './jsonUtils-595f52d3.js';
import './FeatureType-6da2d9f8.js';
import './Field-c395cfbd.js';
import './fieldType-d6b0953a.js';
import './FieldsIndex-d76382ca.js';
import './LabelClass-5f15d30f.js';
import './labelUtils-ad1dc3a0.js';
import './defaultsJSON-53258912.js';
import './LayerFloorInfo-c765d601.js';
import './Query-fd5e1b7b.js';
import './popupUtils-5accf1e0.js';
import './floorFilterUtils-a09da11b.js';
import './arcgisLayerUrl-06668ce7.js';
import './jsonUtils-7ed7a510.js';
import './mat4-fe6f4784.js';
import './_commonjsHelpers-020ca939.js';
import './PortalItem-496c46b9.js';
import './TimeInfo-e0d5d311.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let q=class extends(i(a(s(f(y(p(y$1(w(l(n(i$1(o(a$1(b)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e$1,r,t$1,o){if(!this.loaded||!e$1)return;const i=e$1.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e$1=t(o.origin);if(3===e$1){const e$1=this.createSublayersForOrigin("service").sublayers;s=e(i,e$1,2);}else if(e$1>3){const e$1=this.createSublayersForOrigin("portal-item");s=e(i,e$1.sublayers,t(e$1.origin));}}const a=[],p={writeSublayerStructure:s,...o};let n=s;i.forEach((e=>{const r=e.write({},p);a.push(r),n=n||"user"===e.originOf("visible");}));a.some((e=>Object.keys(e).length>1))&&(r.layers=a),n&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)));}createExportImageParameters(e,r,t,o){const i=o&&o.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const s=new c({layer:this,floors:null==o?void 0:o.floors,scale:r$1({extent:e,width:r})*i}),a=s.toJSON();s.destroy();const p=!o||!o.rotation||this.version<10.3?{}:{rotation:-o.rotation},n=e&&e.spatialReference,m=n.wkid||JSON.stringify(n.toJSON());a.dpi*=i;const l={};if(null!=o&&o.timeExtent){const{start:e,end:r}=o.timeExtent.toJSON();l.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`;}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return {bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:m,imageSR:m,size:r+","+t,...a,...p,...l}}async fetchImage(e,t,i,s){var a;const p={responseType:"image",signal:null!=(a=null==s?void 0:s.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,i,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(null!=p.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return Promise.reject(new s$1("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query}));return E(n,p).then((e=>e.data)).catch((e=>{if(d(e))throw e;throw new s$1("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})}))}async fetchRecomputedExtents(e={}){const o={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:i}=await E(this.url,o),{extent:s,fullExtent:a,timeExtent:p}=i,n=s||a;return {fullExtent:n&&M.fromJSON(n),timeExtent:p&&y$2.fromJSON({start:p[0],end:p[1]})}}loadAll(){return n$1(this,(e=>{e(this.allSublayers);}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:o}=await E(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});o&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl});}};e$1([d$1({type:Boolean})],q.prototype,"datesInUnknownTimezone",void 0),e$1([d$1()],q.prototype,"dpi",void 0),e$1([d$1()],q.prototype,"gdbVersion",void 0),e$1([d$1()],q.prototype,"imageFormat",void 0),e$1([o$1("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),e$1([d$1({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),e$1([d$1({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),e$1([d$1()],q.prototype,"imageTransparency",void 0),e$1([d$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),e$1([d$1({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),e$1([d$1({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),e$1([d$1({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),e$1([d$1()],q.prototype,"sourceJSON",void 0),e$1([d$1({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),e$1([r$2("sublayers",{layers:{type:[K]},visibleLayers:{type:[S]}})],q.prototype,"writeSublayers",null),e$1([d$1({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),e$1([d$1({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),e$1([d$1(f$1)],q.prototype,"url",void 0),q=e$1([i$2("esri.layers.MapImageLayer")],q);const A=q;

export default A;
