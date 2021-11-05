'use strict';

const request = require('./MapView-922b9f1e.js');
const BitmapTileLayerView2D = require('./BitmapTileLayerView2D-cc2b4d35.js');
const LayerView = require('./LayerView-fac949a9.js');
const RefreshableLayerView = require('./RefreshableLayerView-e3888316.js');
const clickToleranceUtils = require('./clickToleranceUtils-ad2eeda8.js');
const drapedUtils = require('./drapedUtils-de28aa5f.js');
require('./index-57f2cfbb.js');
require('./BitmapTileContainer-c0c8e71e.js');
require('./Bitmap-b7a48c7c.js');
require('./Container-2db43b58.js');
require('./EffectList-f75e6e29.js');
require('./Texture-1414de91.js');
require('./TileContainer-3b85eaa8.js');
require('./Utils-b513a4f3.js');
require('./WGLContainer-ee8dfeda.js');
require('./definitions-b4888cc6.js');
require('./VertexArrayObject-f7735e8a.js');
require('./ShaderCompiler-147fe73a.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-c11630fb.js');
require('./pixelUtils-c061d98b.js');
require('./earcut-d5562923.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{async fetchPopupFeatures(e,s){const{layer:a}=this;if(!e)return Promise.reject(new request.s$3("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));if("tile"!==a.type)return Promise.reject(new request.s$3("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:a.type}));const i=this.get("view.scale"),c=a.allSublayers.toArray().filter((e=>{const r=0===e.minScale||i<=e.minScale,t=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t}));return request.T(c.map((async r=>{const o=r.createQuery(),a=request.r(s)?s.event:null,i=clickToleranceUtils.s({renderer:r.renderer,event:a});o.geometry=this.createFetchPopupFeaturesQueryGeometry(e,i),o.outFields=await r.popupTemplate.getRequiredFields();return (await r.queryFeatures(o)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return request.e([request.d()],c.prototype,"layer",void 0),c=request.e([request.i("esri.layers.mixins.TileLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const w=request.s.getLogger("esri.views.2d.layers.TileLayerView2D"),d=[0,0];let _=class extends(i(RefreshableLayerView.i(BitmapTileLayerView2D.r(LayerView.l(LayerView.u))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null;}initialize(){const e=this.layer.tileInfo,i=e&&e.spatialReference;let r;i||(r=new request.s$3("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),i.equals(this.view.spatialReference)||(r=new request.s$3("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.doRefresh();})),r&&this.addResolvingPromise(Promise.reject(r));}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating");}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new request.h$9(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new request.p$11({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new request.r$16({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQueryGeometry(e,t){return drapedUtils.a(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"));}isUpdating(){var e;return (null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(d,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e,t){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,a=!request.t$2(t)&&t.signal;if(!i)try{return await this._fetchImage(e,a)}catch(m){if(!request.d$2(m)&&!this.resampling)return this._createBlankImage();throw m}const l=new request.e$19(0,0,0,0);let o;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:a}),l.level!==e.level&&!this.resampling)return this._createBlankImage();o=await this._fetchImage(l,a);}catch(m){if(request.d$2(m))throw m;o=await this._fetchImage(e,a);}const{level:h,row:n,col:u}=l;return this.resampling&&h!==e.level?this._resampleImage(o,h,n,u,e.level,e.row,e.col):o}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(t){request.d$2(t)||w.error(t);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}_resampleImage(e,t,i,r,s,a,l){const o=this._tileInfoView.tileInfo.size,h=this._tileInfoView.getTileResolution(t),n=this._tileInfoView.getTileResolution(s);let c=this._tileInfoView.getLODInfoAt(s);const u=c.getXForColumn(l),m=c.getYForRow(a);c=this._tileInfoView.getLODInfoAt(t);const p=c.getXForColumn(r),f=c.getYForRow(i),g=Math.round((u-p)/h),y=Math.round(-(m-f)/h),w=Math.round(o[0]*(n/h)),d=Math.round(o[1]*(n/h)),_=this._createBlankImage();return _.getContext("2d").drawImage(e,g,y,w,d,0,0,o[0],o[1]),_}_createBlankImage(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return [t.width,t.height]=e,t}};request.e([request.d()],_.prototype,"resampling",null),_=request.e([request.i("esri.views.2d.layers.TileLayerView2D")],_);const I=_;

exports.default = I;
