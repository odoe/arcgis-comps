import { c as s, cs as h, s as s$2, aj as b, A as r, Q as E, d4 as C, h as h$1, e, d, a2 as o, i } from './messageBundle-f75b4090.js';
import { l } from './MultiOriginJSONSupport-cb4804f4.js';
import { v } from './HeightModelInfo-1a6d7a08.js';
import { b as b$1 } from './Layer-b50ea610.js';
import { s as s$1 } from './ArcGISCachedService-d72b2bb5.js';
import { p } from './ArcGISService-49a9bda6.js';
import { y, f } from './OperationalLayer-d609e521.js';
import { w as w$1 } from './PortalLayer-290979fa.js';
import { n } from './LercDecoder-35d1826d.js';
import './index-b157fcf2.js';
import './unitUtils-38774114.js';
import './geometry-7e07b1ba.js';
import './Identifiable-da047c47.js';
import './Portal-c5cfa317.js';
import './TilemapCache-997608ad.js';
import './TileInfo-052b02b9.js';
import './aaBoundingRect-9468599b.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './HandleOwner-88326c19.js';
import './reactiveUtils-8f9c3a3d.js';
import './LRUCache-d5842b88.js';
import './MemCache-78a9f000.js';
import './arcgisLayerUrl-49ef2818.js';
import './persistableUrlUtils-40bbec67.js';
import './TimeExtent-a024c0d8.js';
import './ElevationInfo-be94499b.js';
import './opacityUtils-5e864561.js';
import './lengthUtils-f033d4fe.js';
import './asyncUtils-fe35d349.js';
import './PortalItem-155284f3.js';
import './WorkerHandle-a0a39e87.js';
import './workers-c4ad1958.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const w=s.getLogger("esri.layers.ElevationLayer");let T=class extends(s$1(p(y(w$1(l(b$1)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=n();}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=h(this._lercDecoder);}set minScale(e){this.constructed&&w.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`);}get minScale(){}set maxScale(e){this.constructed&&w.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`);}get maxScale(){}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return !0;throw new s$2("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(b).then((()=>this._fetchImageService(r$1)))),Promise.resolve(this)}fetchTile(e,t,o,i){const a=r((i=i||{signal:null}).signal)?i.signal:i.signal=(new AbortController).signal,l={responseType:"array-buffer",signal:a},n={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,o,i))).then((()=>E(this.getTileUrl(e,t,o),l))).then((e=>this._lercDecoder.decode(e.data,n,a))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,r,t){const o=!this.tilemapCache&&this.supportsBlankTile,i=C({...this.parsedUrl.query,blankTile:!o&&null});return `${this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-52d9bb1f.js');h$1(r);return (new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-52d9bb1f.js');h$1(r);return (new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},o=await E(this.parsedUrl.path,t);o.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl});}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};e([d({json:{read:{source:"copyrightText"}}})],T.prototype,"copyright",void 0),e([d({readOnly:!0,type:v})],T.prototype,"heightModelInfo",void 0),e([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],T.prototype,"path",void 0),e([d({type:["show","hide"]})],T.prototype,"listMode",void 0),e([d({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],T.prototype,"minScale",null),e([d({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],T.prototype,"maxScale",null),e([d({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],T.prototype,"opacity",void 0),e([d({type:["ArcGISTiledElevationServiceLayer"]})],T.prototype,"operationalLayerType",void 0),e([d()],T.prototype,"sourceJSON",void 0),e([d({json:{read:!1},value:"elevation",readOnly:!0})],T.prototype,"type",void 0),e([d(f)],T.prototype,"url",void 0),e([d()],T.prototype,"version",void 0),e([o("version",["currentVersion"])],T.prototype,"readVersion",null),T=e([i("esri.layers.ElevationLayer")],T),T.prototype.fetchTile.__isDefault__=!0;const x=T;

export default x;
