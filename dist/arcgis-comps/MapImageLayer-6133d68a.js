import { A as r, ak as b$1, aC as t, h as s$1, E, aK as d, e as e$1, a as d$1, M as S, i as i$2 } from './jsxFactory-b8b7429b.js';
import { y as y$2 } from './TimeExtent-11f1925b.js';
import { a as a$1 } from './HandleOwner-89177892.js';
import { n as n$1 } from './loadAll-78f2a3b0.js';
import { l, b } from './MultiOriginJSONSupport-409caa57.js';
import { M, g as o$1, k as r$2 } from './Graphic-75d1efd2.js';
import { r as r$1 } from './scaleUtils-b9284685.js';
import { i as i$1 } from './APIKeyMixin-e6f88474.js';
import { f, y, K } from './SublayersOwner-a17f8699.js';
import { p } from './ArcGISService-78aba528.js';
import { i } from './BlendLayer-8a19cb4c.js';
import { o } from './CustomParametersMixin-65dc0d22.js';
import { y as y$1 } from './OperationalLayer-7b6946f0.js';
import { w } from './PortalLayer-c699b91c.js';
import { n } from './RefreshableLayer-eff019c1.js';
import { s } from './ScaleRangeLayer-fd3df739.js';
import { a } from './TemporalLayer-1525e917.js';
import { f as f$1 } from './commonProperties-c39cb6e7.js';
import { c } from './ExportImageParameters-4a5ebe48.js';
import { e } from './sublayerUtils-c6a17833.js';
import './index-921bd636.js';
import './JSONSupport-15eefdaf.js';
import './reactiveUtils-37eae8e4.js';
import './asyncUtils-4aacff64.js';
import './Version-015e56ba.js';
import './CollectionFlattener-011440e6.js';
import './UniqueValueRenderer-c001e8b8.js';
import './VisualVariablesMixin-a733e60f.js';
import './colorRamps-564a1b52.js';
import './ColorStop-6bbf8625.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-d30b1042.js';
import './compilerUtils-fd4d1928.js';
import './lengthUtils-c1fc84e6.js';
import './diffUtils-7afe88f2.js';
import './jsonUtils-904bd6e1.js';
import './styleUtils-2aef643e.js';
import './DictionaryRenderer-5a73e1dd.js';
import './LRUCache-4697cf73.js';
import './MemCache-ba22e87a.js';
import './jsonUtils-5413cd65.js';
import './FeatureType-f5fde895.js';
import './Field-3662c57d.js';
import './fieldType-1c6ed2e9.js';
import './FieldsIndex-b4d96270.js';
import './LabelClass-37380caa.js';
import './labelUtils-27593fd8.js';
import './defaultsJSON-53258912.js';
import './LayerFloorInfo-35df5ab8.js';
import './Query-d6a1dd36.js';
import './popupUtils-62f80c9e.js';
import './floorFilterUtils-a09da11b.js';
import './arcgisLayerUrl-f16875e5.js';
import './jsonUtils-9b8c4071.js';
import './mat4-7dc89e3f.js';
import './_commonjsHelpers-020ca939.js';
import './PortalItem-86be48d7.js';
import './TimeInfo-1e2583f2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let q=class extends(i(a(s(f(y(p(y$1(w(l(n(i$1(o(a$1(b)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e$1,r,t$1,o){if(!this.loaded||!e$1)return;const i=e$1.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e$1=t(o.origin);if(3===e$1){const e$1=this.createSublayersForOrigin("service").sublayers;s=e(i,e$1,2);}else if(e$1>3){const e$1=this.createSublayersForOrigin("portal-item");s=e(i,e$1.sublayers,t(e$1.origin));}}const a=[],p={writeSublayerStructure:s,...o};let n=s;i.forEach((e=>{const r=e.write({},p);a.push(r),n=n||"user"===e.originOf("visible");}));a.some((e=>Object.keys(e).length>1))&&(r.layers=a),n&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)));}createExportImageParameters(e,r,t,o){const i=o&&o.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const s=new c({layer:this,floors:null==o?void 0:o.floors,scale:r$1({extent:e,width:r})*i}),a=s.toJSON();s.destroy();const p=!o||!o.rotation||this.version<10.3?{}:{rotation:-o.rotation},n=e&&e.spatialReference,m=n.wkid||JSON.stringify(n.toJSON());a.dpi*=i;const l={};if(null!=o&&o.timeExtent){const{start:e,end:r}=o.timeExtent.toJSON();l.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`;}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return {bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:m,imageSR:m,size:r+","+t,...a,...p,...l}}async fetchImage(e,t,i,s){var a;const p={responseType:"image",signal:null!=(a=null==s?void 0:s.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,i,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(null!=p.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return Promise.reject(new s$1("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query}));return E(n,p).then((e=>e.data)).catch((e=>{if(d(e))throw e;throw new s$1("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})}))}async fetchRecomputedExtents(e={}){const o={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:i}=await E(this.url,o),{extent:s,fullExtent:a,timeExtent:p}=i,n=s||a;return {fullExtent:n&&M.fromJSON(n),timeExtent:p&&y$2.fromJSON({start:p[0],end:p[1]})}}loadAll(){return n$1(this,(e=>{e(this.allSublayers);}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:o}=await E(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});o&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl});}};e$1([d$1({type:Boolean})],q.prototype,"datesInUnknownTimezone",void 0),e$1([d$1()],q.prototype,"dpi",void 0),e$1([d$1()],q.prototype,"gdbVersion",void 0),e$1([d$1()],q.prototype,"imageFormat",void 0),e$1([o$1("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),e$1([d$1({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),e$1([d$1({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),e$1([d$1()],q.prototype,"imageTransparency",void 0),e$1([d$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),e$1([d$1({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),e$1([d$1({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),e$1([d$1({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),e$1([d$1()],q.prototype,"sourceJSON",void 0),e$1([d$1({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),e$1([r$2("sublayers",{layers:{type:[K]},visibleLayers:{type:[S]}})],q.prototype,"writeSublayers",null),e$1([d$1({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),e$1([d$1({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),e$1([d$1(f$1)],q.prototype,"url",void 0),q=e$1([i$2("esri.layers.MapImageLayer")],q);const A=q;

export default A;
