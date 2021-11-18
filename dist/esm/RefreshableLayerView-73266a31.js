import { e, d, i as i$1, $, N as d$1, v as s } from './messageBundle-8a146a9b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add($(this,"layer","refresh",(r=>{r.dataChanged&&this.doRefresh().catch((r=>{d$1(r)||s.getLogger(this.declaredClass).error(r);}));})),"RefreshableLayerView");}};return e([d()],c.prototype,"layer",void 0),c=e([i$1("esri.layers.mixins.RefreshableLayerView")],c),c};

export { i };
