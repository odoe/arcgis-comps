import { e, d as d$1, i as i$1, a7 as s, T, W as r, s as s$2, gP as h, h6 as p, h7 as r$2, aH as d$2, dl as e$1, g as t } from './MapView-a31458ed.js';
import { r as r$1 } from './BitmapTileLayerView2D-773611d4.js';
import { l, u } from './LayerView-4f2ac95c.js';
import { i as i$2 } from './RefreshableLayerView-37b95d4f.js';
import { s as s$1 } from './clickToleranceUtils-b5cfb431.js';
import { a } from './drapedUtils-3d862ae9.js';
import './index-3067d8ff.js';
import './BitmapTileContainer-af175af9.js';
import './Bitmap-86f313fd.js';
import './Container-b142640e.js';
import './EffectList-edbd1525.js';
import './Texture-a7a0b3dd.js';
import './TileContainer-20c09af5.js';
import './Utils-f78b5dcf.js';
import './WGLContainer-5366718c.js';
import './definitions-6a5ca2d9.js';
import './VertexArrayObject-f53fdf9c.js';
import './ShaderCompiler-9d72a5ed.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-860012b2.js';
import './pixelUtils-6a5b76e5.js';
import './earcut-05cd758b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{async fetchPopupFeatures(e,s$2){const{layer:a}=this;if(!e)return Promise.reject(new s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));if("tile"!==a.type)return Promise.reject(new s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:a.type}));const i=this.get("view.scale"),c=a.allSublayers.toArray().filter((e=>{const r=0===e.minScale||i<=e.minScale,t=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t}));return T(c.map((async r$1=>{const o=r$1.createQuery(),a=r(s$2)?s$2.event:null,i=s$1({renderer:r$1.renderer,event:a});o.geometry=this.createFetchPopupFeaturesQueryGeometry(e,i),o.outFields=await r$1.popupTemplate.getRequiredFields();return (await r$1.queryFeatures(o)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return e([d$1()],c.prototype,"layer",void 0),c=e([i$1("esri.layers.mixins.TileLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const w=s$2.getLogger("esri.views.2d.layers.TileLayerView2D"),d=[0,0];let _=class extends(i(i$2(r$1(l(u))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null;}initialize(){const e=this.layer.tileInfo,i=e&&e.spatialReference;let r;i||(r=new s("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),i.equals(this.view.spatialReference)||(r=new s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.doRefresh();})),r&&this.addResolvingPromise(Promise.reject(r));}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating");}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new p({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r$2({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQueryGeometry(e,t){return a(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"));}isUpdating(){var e;return (null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(d,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e,t$1){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,a=!t(t$1)&&t$1.signal;if(!i)try{return await this._fetchImage(e,a)}catch(m){if(!d$2(m)&&!this.resampling)return this._createBlankImage();throw m}const l=new e$1(0,0,0,0);let o;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:a}),l.level!==e.level&&!this.resampling)return this._createBlankImage();o=await this._fetchImage(l,a);}catch(m){if(d$2(m))throw m;o=await this._fetchImage(e,a);}const{level:h,row:n,col:u}=l;return this.resampling&&h!==e.level?this._resampleImage(o,h,n,u,e.level,e.row,e.col):o}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(t){d$2(t)||w.error(t);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}_resampleImage(e,t,i,r,s,a,l){const o=this._tileInfoView.tileInfo.size,h=this._tileInfoView.getTileResolution(t),n=this._tileInfoView.getTileResolution(s);let c=this._tileInfoView.getLODInfoAt(s);const u=c.getXForColumn(l),m=c.getYForRow(a);c=this._tileInfoView.getLODInfoAt(t);const p=c.getXForColumn(r),f=c.getYForRow(i),g=Math.round((u-p)/h),y=Math.round(-(m-f)/h),w=Math.round(o[0]*(n/h)),d=Math.round(o[1]*(n/h)),_=this._createBlankImage();return _.getContext("2d").drawImage(e,g,y,w,d,0,0,o[0],o[1]),_}_createBlankImage(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return [t.width,t.height]=e,t}};e([d$1()],_.prototype,"resampling",null),_=e([i$1("esri.views.2d.layers.TileLayerView2D")],_);const I=_;

export default I;
