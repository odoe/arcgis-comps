import{J as p,N as t,e as i,d as s,i as r}from"./p-9ae46e68.js";import{r as e}from"./p-8be826d6.js";import{l as o,u as m}from"./p-ebe5e529.js";import{h as j}from"./p-1f10277d.js";import{p as a,r as c}from"./p-d18723b0.js";import{i as d}from"./p-9ca88c10.js";import"./p-84bf99cb.js";import"./p-69f28d91.js";import"./p-81e5b36e.js";import"./p-566b0715.js";import"./p-fe01b82b.js";import"./p-7a648ea5.js";import"./p-b2a0fae5.js";import"./p-6ebb24ba.js";import"./p-4fd6e394.js";import"./p-4681e856.js";import"./p-a0e42f29.js";import"./p-41655335.js";import"./p-3ffd0931.js";import"./p-8031c809.js";import"./p-3048cc18.js";import"./p-c7a0a732.js";import"./p-b2d0e2de.js";import"./p-db87794e.js";import"./p-22c8d854.js";import"./p-3d1b25b6.js";import"./p-f42060e0.js";import"./p-79553c8d.js";import"./p-8e03c038.js";import"./p-32462343.js";import"./p-98a14d68.js";import"./p-32824614.js";import"./p-40d3b500.js";import"./p-c8f716a9.js";import"./p-57ae469d.js";import"./p-27ef204b.js";import"./p-3a2e88bf.js";import"./p-9e860e7b.js";import"./p-ada83011.js";import"./p-98ce0cca.js";import"./p-4003c7ae.js";import"./p-a7080451.js";import"./p-7e9d2371.js";import"./p-94f8dc11.js";import"./p-bb07d873.js";import"./p-8ac97b63.js";import"./p-a0a931f0.js";import"./p-dfc6337f.js";import"./p-77e6a663.js";import"./p-c5b7f7c3.js";import"./p-30ddb3a0.js";import"./p-74fc1b7f.js";import"./p-b3024dec.js";import"./p-4fcbc3c5.js";import"./p-4b3ae2cf.js";import"./p-6443bfb4.js";import"./p-8e6daf54.js";import"./p-c0757461.js";import"./p-93d9099f.js";import"./p-d3898fd7.js";import"./p-844dad6c.js";import"./p-c59d0a4d.js";import"./p-3a5fe179.js";import"./p-138c2b2c.js";import"./p-ae0b06e3.js";import"./p-a293872e.js";import"./p-f271906a.js";import"./p-cf2267f9.js";import"./p-d2e19070.js";import"./p-e5429b9e.js";import"./p-cf8dc9be.js";import"./p-f17028ec.js";import"./p-5c89c68e.js";import"./p-725fd184.js";import"./p-0c91ebaf.js";import"./p-72355290.js";import"./p-d68829c1.js";import"./p-81102839.js";import"./p-2f7c985e.js";import"./p-00b9ea57.js";import"./p-5a0fe1d0.js";import"./p-7818def0.js";import"./p-da143060.js";import"./p-15bb2887.js";import"./p-1d6f3ddb.js";import"./p-789e71c1.js";import"./p-523f37cd.js";import"./p-a198d6d0.js";import"./p-15515b8a.js";import"./p-264c75ac.js";import"./p-c431b12a.js";import"./p-b0f556d6.js";import"./p-8b767e6c.js";import"./p-8d03d70f.js";import"./p-9658240e.js";import"./p-d6725707.js";import"./p-d925341f.js";import"./p-c3efb223.js";import"./p-bae36c84.js";import"./p-39da60a5.js";import"./p-56ed1c7a.js";import"./p-2b250922.js";import"./p-b62a8a4f.js";import"./p-f614dce4.js";import"./p-fe4caffe.js";import"./p-6ab16fcc.js";import"./p-0c60bcc4.js";import"./p-7c7c5507.js";import"./p-dd4e6b8b.js";import"./p-16def889.js";import"./p-d40c97c9.js";import"./p-47e1bd73.js";import"./p-81abd5fc.js";import"./p-eb19a862.js";import"./p-b392deaf.js";import"./p-4414d64f.js";import"./p-a617738c.js";import"./p-ffe0d3ad.js";import"./p-9dbf3f05.js";import"./p-97ec6ae5.js";import"./p-285c6a34.js";const f=[102113,102100,3857,3785,900913];let h=class extends(d(e(o(m)))){constructor(){super(...arguments),this._handles=new p,this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const p=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return p?(this.layer.activeLayer.tileMatrixSetId=p.id,p):null}hitTest(){return null}update(p){this._fetchQueue.pause(),this._fetchQueue.state=p.state,this._tileStrategy.update(p),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){if(!this.tileMatrixSet)return;const{tileInfo:p}=this.tileMatrixSet;this._tileInfoView=new j(p),this._fetchQueue=new a({tileInfoView:this._tileInfoView,process:p=>this.fetchTile(p)}),this._tileStrategy=new c({cachePolicy:"keep",acquireTile:p=>this.acquireTile(p),releaseTile:p=>this.releaseTile(p),tileInfoView:this._tileInfoView}),this._handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh()))),super.attach()}detach(){super.detach(),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){return this._fetchQueue.length>0}acquireTile(p){const i=this._bitmapView.createTile(p),s=i.bitmap;[s.x,s.y]=this._tileInfoView.getTileCoords([0,0],i.key),s.resolution=this._tileInfoView.getTileResolution(i.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._tileInfoView.getTileCoords(s,i.key);const r={id:p.id,fulfilled:!1,promise:this._fetchQueue.push(i.key).then((p=>{i.bitmap.source=p,i.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(i)})).catch((p=>{t(p)||(i.bitmap.source=null,i.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(i))}))};return r.promise.finally((()=>r.fulfilled=!0)),this._tileRequests.set(i,r),this.requestUpdate(),i}releaseTile(p){const t=this._tileRequests.get(p);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(p),this._bitmapView.removeChild(p),p.once("detach",(()=>p.destroy())),this.requestUpdate()}async fetchTile(p){return this.layer.fetchTile(p.level,p.row,p.col)}canResume(){const p=super.canResume();return p?null!==this.tileMatrixSet:p}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((p=>{if(!p.bitmap.source)return;const i={id:p.key.id,fulfilled:!1,promise:this._fetchQueue.push(p.key).then((t=>{p.bitmap.source=t})).catch((i=>{t(i)||(p.bitmap.source=null)})).finally((()=>{p.requestRender(),this.notifyChange("updating"),i.fulfilled=!0}))};this._tileRequests.set(p,i)})),this.notifyChange("updating")}_getTileMatrixSetBySpatialReference(p){const t=this.view.spatialReference;if(!p.tileMatrixSets)return null;let i=p.tileMatrixSets.find((p=>p.tileInfo.spatialReference.wkid===t.wkid));return!i&&t.isWebMercator&&(i=p.tileMatrixSets.find((p=>f.indexOf(p.tileInfo.spatialReference.wkid)>-1))),i}};i([s()],h.prototype,"suspended",void 0),i([s({readOnly:!0})],h.prototype,"tileMatrixSet",null),h=i([r("esri.views.2d.layers.WMTSLayerView2D")],h);const b=h;export default b;