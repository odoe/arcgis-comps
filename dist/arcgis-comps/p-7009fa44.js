import{U as s,dZ as t,B as i,ay as p,D as o,dB as e,e as r,i as m}from"./p-7b6f6c18.js";import{l as h,u as a}from"./p-0b691897.js";import{i as j}from"./p-5448dec1.js";import{r as d}from"./p-2d5d1985.js";import"./p-227a5838.js";import"./p-a4a5967b.js";import"./p-033339b0.js";import"./p-804725e3.js";import"./p-1dd7027e.js";import"./p-cede17c2.js";import"./p-ea65d9c9.js";import"./p-47e1bd73.js";import"./p-b392deaf.js";import"./p-9790d1b4.js";import"./p-51e4508b.js";import"./p-50ff864e.js";import"./p-54e8960f.js";import"./p-fb136006.js";import"./p-1088d11f.js";import"./p-e53f77c2.js";import"./p-5bfd1d7e.js";import"./p-4414d64f.js";import"./p-a617738c.js";import"./p-a16c2b1d.js";import"./p-167d094f.js";import"./p-97ec6ae5.js";import"./p-10e211d9.js";import"./p-df9635e1.js";import"./p-7d065686.js";import"./p-94807627.js";import"./p-3e28396b.js";import"./p-f78de11d.js";import"./p-269bd937.js";import"./p-dfd2d479.js";import"./p-9f705d18.js";import"./p-ec834938.js";import"./p-55e3d31e.js";import"./p-dede18bd.js";import"./p-5c077b4e.js";import"./p-e991a11e.js";import"./p-b1c9647c.js";let n=class extends(h(a)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(s,t){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const i=this.graphicsViews.reverse().map((i=>i.hitTest(s,t)));return Promise.all(i).then((s=>s.filter(((s,t)=>(s&&(s.popupTemplate=this._popupTemplates.get(this.graphicsViews[t]),s.layer=this.layer,s.sourceLayer=this.layer),!!s)))[0]||null))}update(s){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(s)}attach(){this.handles.add([s(this.layer,"featureCollections",(s=>{this._clear();for(const{popupInfo:e,featureSet:r,layerDefinition:m}of s){const s=t.fromJSON(r),h=new i(s.features),a=m.drawingInfo,n=e?p.fromJSON(e):null,f=o(a.renderer),c=new d({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:h,renderer:f,container:new j(this.view.featuresTilingScheme)});this._graphicsViewMap[s.geometryType]=c,this._popupTemplates.set(c,n),"polygon"!==s.geometryType||this.layer.polygonSymbol?"polyline"!==s.geometryType||this.layer.lineSymbol?"point"!==s.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=f.symbol):this.layer.lineSymbol=f.symbol:this.layer.polygonSymbol=f.symbol,this.graphicsViews.push(c),this.container.addChild(c.container)}})),s(this.layer,"polygonSymbol",(s=>{this._graphicsViewMap.polygon.renderer=new e({symbol:s})})),s(this.layer,"lineSymbol",(s=>{this._graphicsViewMap.polyline.renderer=new e({symbol:s})})),s(this.layer,"pointSymbol",(s=>{this._graphicsViewMap.point.renderer=new e({symbol:s})}))],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const s of this.graphicsViews)s.viewChange()}_clear(){this.container.removeAllChildren();for(const s of this.graphicsViews)s.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};n=r([m("esri.views.2d.layers.GeoRSSLayerView2D")],n);const f=n;export default f;