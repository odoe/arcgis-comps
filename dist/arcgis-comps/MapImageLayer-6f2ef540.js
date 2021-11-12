import { A as r, ak as b$1, aC as t, h as s$1, E, aK as d, e as e$1, a as d$1, M as S, i as i$2 } from './jsxFactory-a3b6abde.js';
import { y as y$2 } from './TimeExtent-a92e5996.js';
import { a as a$1 } from './HandleOwner-a0b41b75.js';
import { n as n$1 } from './loadAll-b50c1134.js';
import { l, b } from './MultiOriginJSONSupport-22dd2d29.js';
import { M, g as o$1, k as r$2 } from './Graphic-08cda9ca.js';
import { r as r$1 } from './scaleUtils-f329ad4b.js';
import { i as i$1 } from './APIKeyMixin-d87deecc.js';
import { f, y, K } from './SublayersOwner-793dd450.js';
import { p } from './ArcGISService-88c76264.js';
import { i } from './BlendLayer-1d9f1c9a.js';
import { o } from './CustomParametersMixin-92abdfc3.js';
import { y as y$1 } from './OperationalLayer-26aa2ff7.js';
import { w } from './PortalLayer-8e73039a.js';
import { n } from './RefreshableLayer-5b977e98.js';
import { s } from './ScaleRangeLayer-2f975321.js';
import { a } from './TemporalLayer-f3b14395.js';
import { f as f$1 } from './commonProperties-ad8badbd.js';
import { c } from './ExportImageParameters-f07c4385.js';
import { e } from './sublayerUtils-c6a17833.js';
import './index-8dec7690.js';
import './JSONSupport-4f0a3248.js';
import './reactiveUtils-aa11596b.js';
import './asyncUtils-9a49e799.js';
import './Version-6b31ee09.js';
import './CollectionFlattener-6fc74400.js';
import './UniqueValueRenderer-8dbcac2c.js';
import './VisualVariablesMixin-b52a2c87.js';
import './colorRamps-270af342.js';
import './ColorStop-e7cb8b17.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-21378141.js';
import './compilerUtils-a5ae094d.js';
import './lengthUtils-e1fe9a45.js';
import './diffUtils-a2ab1186.js';
import './jsonUtils-43243fe0.js';
import './styleUtils-91b1203b.js';
import './DictionaryRenderer-80042e03.js';
import './LRUCache-d4f192fd.js';
import './MemCache-dfacc658.js';
import './jsonUtils-66ddb072.js';
import './FeatureType-ba8f07c3.js';
import './Field-416cada2.js';
import './fieldType-7f2a820b.js';
import './FieldsIndex-87a4d86b.js';
import './LabelClass-a0793742.js';
import './labelUtils-434b8348.js';
import './defaultsJSON-53258912.js';
import './LayerFloorInfo-a2a78182.js';
import './Query-a20a7572.js';
import './popupUtils-9dc503ca.js';
import './floorFilterUtils-a09da11b.js';
import './arcgisLayerUrl-a1acfaeb.js';
import './jsonUtils-efaaa503.js';
import './mat4-3acd3594.js';
import './_commonjsHelpers-020ca939.js';
import './PortalItem-4dd070a8.js';
import './TimeInfo-8ecf4da2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let q=class extends(i(a(s(f(y(p(y$1(w(l(n(i$1(o(a$1(b)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e$1,r,t$1,o){if(!this.loaded||!e$1)return;const i=e$1.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e$1=t(o.origin);if(3===e$1){const e$1=this.createSublayersForOrigin("service").sublayers;s=e(i,e$1,2);}else if(e$1>3){const e$1=this.createSublayersForOrigin("portal-item");s=e(i,e$1.sublayers,t(e$1.origin));}}const a=[],p={writeSublayerStructure:s,...o};let n=s;i.forEach((e=>{const r=e.write({},p);a.push(r),n=n||"user"===e.originOf("visible");}));a.some((e=>Object.keys(e).length>1))&&(r.layers=a),n&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)));}createExportImageParameters(e,r,t,o){const i=o&&o.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const s=new c({layer:this,floors:null==o?void 0:o.floors,scale:r$1({extent:e,width:r})*i}),a=s.toJSON();s.destroy();const p=!o||!o.rotation||this.version<10.3?{}:{rotation:-o.rotation},n=e&&e.spatialReference,m=n.wkid||JSON.stringify(n.toJSON());a.dpi*=i;const l={};if(null!=o&&o.timeExtent){const{start:e,end:r}=o.timeExtent.toJSON();l.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`;}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return {bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:m,imageSR:m,size:r+","+t,...a,...p,...l}}async fetchImage(e,t,i,s){var a;const p={responseType:"image",signal:null!=(a=null==s?void 0:s.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,i,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(null!=p.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return Promise.reject(new s$1("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query}));return E(n,p).then((e=>e.data)).catch((e=>{if(d(e))throw e;throw new s$1("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})}))}async fetchRecomputedExtents(e={}){const o={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:i}=await E(this.url,o),{extent:s,fullExtent:a,timeExtent:p}=i,n=s||a;return {fullExtent:n&&M.fromJSON(n),timeExtent:p&&y$2.fromJSON({start:p[0],end:p[1]})}}loadAll(){return n$1(this,(e=>{e(this.allSublayers);}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:o}=await E(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});o&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl});}};e$1([d$1({type:Boolean})],q.prototype,"datesInUnknownTimezone",void 0),e$1([d$1()],q.prototype,"dpi",void 0),e$1([d$1()],q.prototype,"gdbVersion",void 0),e$1([d$1()],q.prototype,"imageFormat",void 0),e$1([o$1("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),e$1([d$1({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),e$1([d$1({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),e$1([d$1()],q.prototype,"imageTransparency",void 0),e$1([d$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),e$1([d$1({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),e$1([d$1({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),e$1([d$1({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),e$1([d$1()],q.prototype,"sourceJSON",void 0),e$1([d$1({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),e$1([r$2("sublayers",{layers:{type:[K]},visibleLayers:{type:[S]}})],q.prototype,"writeSublayers",null),e$1([d$1({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),e$1([d$1({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),e$1([d$1(f$1)],q.prototype,"url",void 0),q=e$1([i$2("esri.layers.MapImageLayer")],q);const A=q;

export default A;
