import { g as s$1, z as n$2, aG as C, r, h as h$1, c as e, bq as h$2, a as s$3, a9 as b$1, E, bo as C$1, e as e$1, b as d, i } from './cast-e5ea2533.js';
import { l, b } from './Layer-663fafaf.js';
import { o as o$1 } from './Portal-f1457cb4.js';
import { v } from './HeightModelInfo-5cd6d5f2.js';
import { s as s$2 } from './ArcGISCachedService-698c0959.js';
import { p } from './ArcGISService-00a30f8e.js';
import { y } from './OperationalLayer-0f16c161.js';
import { w as w$1 } from './PortalLayer-0ef8a2d2.js';
import { f } from './commonProperties-4c10a963.js';
import { u } from './workers-a7d3d5f6.js';
import './JSONSupport-8dda8bae.js';
import './geometry-160ffbb5.js';
import './Polyline-56152656.js';
import './Collection-ac20f1a1.js';
import './Identifiable-0fb3fc58.js';
import './unitUtils-5dcccb3c.js';
import './TilemapCache-16e250d2.js';
import './TileInfo-a7d4b50d.js';
import './aaBoundingRect-2a187de3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './HandleOwner-0793ecee.js';
import './Handles-24a27aa9.js';
import './reactiveUtils-ab0efcb1.js';
import './watchUtils-08cf9d08.js';
import './LRUCache-65fcdebd.js';
import './MemCache-d4727626.js';
import './arcgisLayerUrl-4273e4b3.js';
import './persistableUrlUtils-a9da326c.js';
import './asyncUtils-847ae6e6.js';
import './PortalItem-85b3bb14.js';
import './assets-1ab0ccbe.js';
import './TimeExtent-ecf7e6f2.js';
import './opacityUtils-5755cb64.js';
import './lengthUtils-2084b777.js';
import './intl-0d87e9f4.js';
import './number-2da43364.js';
import './messages-1d31e380.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=s$1.getLogger("esri.core.workers.WorkerHandle");class n$1{constructor(e,t,r,s={}){this._mainMethod=t,this._listeners=[],this._promise=u(e,{...s,schedule:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e);}else e.close();})),this._promise.catch((t=>h.error(`Failed to initialize ${e} worker: ${t}`)));}on(r$1,i){const o={removed:!1,eventName:r$1,callback:i,threadHandle:null};return this._listeners.push(o),this._connectListener(o),n$2((()=>{o.removed=!0,C(this._listeners,o),this._thread&&r(o.threadHandle)&&o.threadHandle.remove();}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null;}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const s=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:s,signal:r})}return this._promise?this._promise.then((()=>(h$1(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s extends n$1{constructor(e=null){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.schedule=e,this.ref=0;}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}getTransferList(e){return [e.buffer]}release(){--this.ref<=0&&(o.forEach(((e,r)=>{e===this&&o.delete(r);})),this.destroy());}}const o=new Map;function n(t=null){let n=o.get(e(t));return n||(r(t)?(n=new s((e=>t.schedule(e))),o.set(t,n)):(n=new s,o.set(null,n))),++n.ref,n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const w=s$1.getLogger("esri.layers.ElevationLayer");let T=class extends(s$2(p(y(w$1(l(b)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=n();}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=h$2(this._lercDecoder);}set minScale(e){this.constructed&&w.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`);}get minScale(){}set maxScale(e){this.constructed&&w.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`);}get maxScale(){}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return !0;throw new s$3("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(b$1).then((()=>this._fetchImageService(r$1)))),Promise.resolve(this)}fetchTile(e,t,o,i){const a=r((i=i||{signal:null}).signal)?i.signal:i.signal=(new AbortController).signal,l={responseType:"array-buffer",signal:a},n={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,o,i))).then((()=>E(this.getTileUrl(e,t,o),l))).then((e=>this._lercDecoder.decode(e.data,n,a))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,r,t){const o=!this.tilemapCache&&this.supportsBlankTile,i=C$1({...this.parsedUrl.query,blankTile:!o&&null});return `${this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-b13bc289.js');h$1(r);return (new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-b13bc289.js');h$1(r);return (new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},o=await E(this.parsedUrl.path,t);o.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl});}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};e$1([d({json:{read:{source:"copyrightText"}}})],T.prototype,"copyright",void 0),e$1([d({readOnly:!0,type:v})],T.prototype,"heightModelInfo",void 0),e$1([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],T.prototype,"path",void 0),e$1([d({type:["show","hide"]})],T.prototype,"listMode",void 0),e$1([d({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],T.prototype,"minScale",null),e$1([d({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],T.prototype,"maxScale",null),e$1([d({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],T.prototype,"opacity",void 0),e$1([d({type:["ArcGISTiledElevationServiceLayer"]})],T.prototype,"operationalLayerType",void 0),e$1([d()],T.prototype,"sourceJSON",void 0),e$1([d({json:{read:!1},value:"elevation",readOnly:!0})],T.prototype,"type",void 0),e$1([d(f)],T.prototype,"url",void 0),e$1([d()],T.prototype,"version",void 0),e$1([o$1("version",["currentVersion"])],T.prototype,"readVersion",null),T=e$1([i("esri.layers.ElevationLayer")],T),T.prototype.fetchTile.__isDefault__=!0;const x=T;

export default x;
