import { W as e, X as d, Y as i$1, g5 as $, h as d$1, s } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add($(this,"layer","refresh",(r=>{r.dataChanged&&this.doRefresh().catch((r=>{d$1(r)||s.getLogger(this.declaredClass).error(r);}));})),"RefreshableLayerView");}};return e([d()],c.prototype,"layer",void 0),c=e([i$1("esri.layers.mixins.RefreshableLayerView")],c),c};

export { i };
