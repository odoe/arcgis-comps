'use strict';

const request = require('./MapView-922b9f1e.js');
const BitmapTileLayerView2D = require('./BitmapTileLayerView2D-cc2b4d35.js');
const LayerView = require('./LayerView-fac949a9.js');
const RefreshableLayerView = require('./RefreshableLayerView-e3888316.js');
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
const f=[102113,102100,3857,3785,900913];let p=class extends(RefreshableLayerView.i(BitmapTileLayerView2D.r(LayerView.l(LayerView.u)))){constructor(){super(...arguments),this._handles=new request.u,this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null;}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating");}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new request.h$9(e),this._fetchQueue=new request.p$11({tileInfoView:this._tileInfoView,process:e=>this.fetchTile(e)}),this._tileStrategy=new request.r$16({cachePolicy:"keep",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this._handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh()))),super.attach();}detach(){super.detach(),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}async doRefresh(){this.updateRequested||this.suspended||this._refresh();}isUpdating(){return this._fetchQueue.length>0}acquireTile(e){const t=this._bitmapView.createTile(e),s=t.bitmap;[s.x,s.y]=this._tileInfoView.getTileCoords([0,0],t.key),s.resolution=this._tileInfoView.getTileResolution(t.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._tileInfoView.getTileCoords(s,t.key);const r={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(t.key).then((e=>{t.bitmap.source=e,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t);})).catch((e=>{request.d$2(e)||(t.bitmap.source=null,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t));}))};return r.promise.finally((()=>r.fulfilled=!0)),this._tileRequests.set(t,r),this.requestUpdate(),t}releaseTile(e){const t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e){return this.layer.fetchTile(e.level,e.row,e.col)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t;})).catch((t=>{request.d$2(t)||(e.bitmap.source=null);})).finally((()=>{e.requestRender(),this.notifyChange("updating"),t.fulfilled=!0;}))};this._tileRequests.set(e,t);})),this.notifyChange("updating");}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>e.tileInfo.spatialReference.wkid===t.wkid));return !i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>f.indexOf(e.tileInfo.spatialReference.wkid)>-1))),i}};request.e([request.d()],p.prototype,"suspended",void 0),request.e([request.d({readOnly:!0})],p.prototype,"tileMatrixSet",null),p=request.e([request.i("esri.views.2d.layers.WMTSLayerView2D")],p);const d=p;

exports.default = d;
