import{T as t,a as s,e as i,d as e,i as p}from"./p-5420851c.js";import{t as r}from"./p-9161a423.js";import{l as a,u as o}from"./p-e4db8bd2.js";import{S as m}from"./p-f567bae9.js";import{i as d}from"./p-8dd46af5.js";import"./p-53bb6ab4.js";import"./p-81f41410.js";import"./p-47e1bd73.js";import"./p-def8d692.js";import"./p-4d140ee3.js";import"./p-54db165f.js";import"./p-4b2b4a33.js";import"./p-b392deaf.js";import"./p-4414d64f.js";import"./p-a617738c.js";import"./p-13d3a443.js";import"./p-8d730a3d.js";import"./p-e2fe661c.js";import"./p-4c6040da.js";import"./p-97ec6ae5.js";import"./p-b3b13eb5.js";const h=t.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let j=class extends(d(a(o))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{s(t)||h.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new r,this.container.addChild(this._bitmapContainer),this.strategy=new m({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,s,i){return this.layer.fetchImage(t,s,i)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};i([e()],j.prototype,"strategy",void 0),i([e()],j.prototype,"updating",void 0),j=i([p("esri.views.2d.layers.BaseDynamicLayerView2D")],j);const n=j;export default n;