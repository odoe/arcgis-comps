import{e,d as s,i,$ as r,b as a,c as t}from"./p-e58503d5.js";const l=l=>{let h=class extends l{initialize(){this.handles.add(r(this,"layer","refresh",(e=>{e.dataChanged&&this.doRefresh().catch((e=>{a(e)||t.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return e([s()],h.prototype,"layer",void 0),h=e([i("esri.layers.mixins.RefreshableLayerView")],h),h};export{l as i}