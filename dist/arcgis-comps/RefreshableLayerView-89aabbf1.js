import { $, b0 as d, f as s, e, a as d$1, i as i$1 } from './jsxFactory-c96bb45c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add($(this,"layer","refresh",(r=>{r.dataChanged&&this.doRefresh().catch((r=>{d(r)||s.getLogger(this.declaredClass).error(r);}));})),"RefreshableLayerView");}};return e([d$1()],c.prototype,"layer",void 0),c=e([i$1("esri.layers.mixins.RefreshableLayerView")],c),c};

export { i };
