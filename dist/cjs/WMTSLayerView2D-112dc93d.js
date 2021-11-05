'use strict';

const request = require('./MapView-1195e7f1.js');
const BitmapTileLayerView2D = require('./BitmapTileLayerView2D-16f812e1.js');
const LayerView = require('./LayerView-870ab467.js');
const RefreshableLayerView = require('./RefreshableLayerView-fe90cf84.js');
require('./index-b630e408.js');
require('./BitmapTileContainer-69e7e715.js');
require('./Bitmap-0ce1bf83.js');
require('./Container-7c02556c.js');
require('./EffectList-c2e3d9b4.js');
require('./Texture-51894e1f.js');
require('./TileContainer-023b8a90.js');
require('./Utils-cf62b8df.js');
require('./WGLContainer-d1dbdedc.js');
require('./definitions-b4888cc6.js');
require('./VertexArrayObject-02afb047.js');
require('./ShaderCompiler-7b6d74e7.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-a9d25bbc.js');
require('./pixelUtils-dcef9151.js');
require('./earcut-d5562923.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=[102113,102100,3857,3785,900913];let p=class extends(RefreshableLayerView.i(BitmapTileLayerView2D.r(LayerView.l(LayerView.u)))){constructor(){super(...arguments),this._handles=new request.u,this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null;}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating");}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new request.h$9(e),this._fetchQueue=new request.p$11({tileInfoView:this._tileInfoView,process:e=>this.fetchTile(e)}),this._tileStrategy=new request.r$16({cachePolicy:"keep",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this._handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh()))),super.attach();}detach(){super.detach(),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}async doRefresh(){this.updateRequested||this.suspended||this._refresh();}isUpdating(){return this._fetchQueue.length>0}acquireTile(e){const t=this._bitmapView.createTile(e),s=t.bitmap;[s.x,s.y]=this._tileInfoView.getTileCoords([0,0],t.key),s.resolution=this._tileInfoView.getTileResolution(t.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._tileInfoView.getTileCoords(s,t.key);const r={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(t.key).then((e=>{t.bitmap.source=e,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t);})).catch((e=>{request.d$2(e)||(t.bitmap.source=null,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t));}))};return r.promise.finally((()=>r.fulfilled=!0)),this._tileRequests.set(t,r),this.requestUpdate(),t}releaseTile(e){const t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e){return this.layer.fetchTile(e.level,e.row,e.col)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t;})).catch((t=>{request.d$2(t)||(e.bitmap.source=null);})).finally((()=>{e.requestRender(),this.notifyChange("updating"),t.fulfilled=!0;}))};this._tileRequests.set(e,t);})),this.notifyChange("updating");}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>e.tileInfo.spatialReference.wkid===t.wkid));return !i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>f.indexOf(e.tileInfo.spatialReference.wkid)>-1))),i}};request.e([request.d()],p.prototype,"suspended",void 0),request.e([request.d({readOnly:!0})],p.prototype,"tileMatrixSet",null),p=request.e([request.i("esri.views.2d.layers.WMTSLayerView2D")],p);const d=p;

exports.default = d;
