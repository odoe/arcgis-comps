import{P as t,t as s,e as p,i}from"./p-5420851c.js";import{l as o,u as r}from"./p-e4db8bd2.js";import{i as e}from"./p-2eec0ad8.js";import{r as m}from"./p-95c8b60a.js";import"./p-53bb6ab4.js";import"./p-e2fe661c.js";import"./p-4c6040da.js";import"./p-54db165f.js";import"./p-4d140ee3.js";import"./p-ba8c567b.js";import"./p-2d0c34e5.js";import"./p-47e1bd73.js";import"./p-b392deaf.js";import"./p-9790d1b4.js";import"./p-6df976c7.js";import"./p-50ff864e.js";import"./p-def8d692.js";import"./p-297addf1.js";import"./p-27418da2.js";import"./p-81f41410.js";import"./p-4b2b4a33.js";import"./p-4414d64f.js";import"./p-a617738c.js";import"./p-13d3a443.js";import"./p-8d730a3d.js";import"./p-97ec6ae5.js";import"./p-ad5a0ac5.js";import"./p-6189adb6.js";import"./p-78327456.js";import"./p-9315e4d7.js";import"./p-dcac8868.js";import"./p-c3fd4463.js";import"./p-97540775.js";import"./p-6e6d0422.js";import"./p-9047f753.js";import"./p-8bf8e457.js";import"./p-7e5e535f.js";import"./p-4d0ba4c4.js";import"./p-baad017f.js";import"./p-e991a11e.js";import"./p-b1c9647c.js";let a=class extends(o(r)){constructor(){super(...arguments),this._handles=new t,this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(t,s){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const p=this.graphicsViews.map((p=>p.hitTest(t,s)));return Promise.all(p).then((t=>t.filter(((t,s)=>(t&&(t.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),t.layer=this.layer,t.sourceLayer=this.layer),!!t)))[0]||null))}update(t){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(t)}attach(){s(this.layer.featureCollections)||this.layer.featureCollections.forEach((t=>{const s=new m({view:this.view,graphics:t.source,requestUpdateCallback:()=>this.requestUpdate(),container:new e(this.view.featuresTilingScheme)});s.renderer=t.renderer,this._popupTemplates.set(s,t.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container)}))}detach(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}};a=p([i("esri.views.2d.layers.RouteLayerView2D")],a);const j=a;export default j;