import { P as u, hu as h, hN as p$1, hO as r$1, a as d$1, e, d as d$2, i as i$1 } from './MapView-ac75aae8.js';
import { r } from './BitmapTileLayerView2D-2b86a84c.js';
import { l, u as u$1 } from './LayerView-bca25100.js';
import { i } from './RefreshableLayerView-5bf49ef7.js';
import './index-b157fcf2.js';
import './BitmapTileContainer-fad3775a.js';
import './Bitmap-e8888c96.js';
import './Container-8507ec1d.js';
import './EffectList-bba3153e.js';
import './Texture-73a4a34c.js';
import './TileContainer-05fc793f.js';
import './Utils-7fb1778c.js';
import './WGLContainer-42105821.js';
import './definitions-6a5ca2d9.js';
import './VertexArrayObject-78033d70.js';
import './ShaderCompiler-93f6243b.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-a9776b0a.js';
import './pixelUtils-9079607d.js';
import './earcut-05cd758b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=[102113,102100,3857,3785,900913];let p=class extends(i(r(l(u$1)))){constructor(){super(...arguments),this._handles=new u,this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null;}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating");}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new h(e),this._fetchQueue=new p$1({tileInfoView:this._tileInfoView,process:e=>this.fetchTile(e)}),this._tileStrategy=new r$1({cachePolicy:"keep",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this._handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh()))),super.attach();}detach(){super.detach(),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}async doRefresh(){this.updateRequested||this.suspended||this._refresh();}isUpdating(){return this._fetchQueue.length>0}acquireTile(e){const t=this._bitmapView.createTile(e),s=t.bitmap;[s.x,s.y]=this._tileInfoView.getTileCoords([0,0],t.key),s.resolution=this._tileInfoView.getTileResolution(t.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._tileInfoView.getTileCoords(s,t.key);const r={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(t.key).then((e=>{t.bitmap.source=e,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t);})).catch((e=>{d$1(e)||(t.bitmap.source=null,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t));}))};return r.promise.finally((()=>r.fulfilled=!0)),this._tileRequests.set(t,r),this.requestUpdate(),t}releaseTile(e){const t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e){return this.layer.fetchTile(e.level,e.row,e.col)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t;})).catch((t=>{d$1(t)||(e.bitmap.source=null);})).finally((()=>{e.requestRender(),this.notifyChange("updating"),t.fulfilled=!0;}))};this._tileRequests.set(e,t);})),this.notifyChange("updating");}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>e.tileInfo.spatialReference.wkid===t.wkid));return !i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>f.indexOf(e.tileInfo.spatialReference.wkid)>-1))),i}};e([d$2()],p.prototype,"suspended",void 0),e([d$2({readOnly:!0})],p.prototype,"tileMatrixSet",null),p=e([i$1("esri.views.2d.layers.WMTSLayerView2D")],p);const d=p;

export default d;
