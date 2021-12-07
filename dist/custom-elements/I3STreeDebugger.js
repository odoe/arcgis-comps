import { t, hg as P, ec as r, eV as xn, gY as I, bX as v, e, d, i, gz as e$1, am as n } from './index.js';
import { b } from './TileTreeDebugger.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends b{constructor(e){super(e);}getTiles(){const e=this.lv.getVisibleNodes(),r=this.view.renderSpatialReference,s=this.nodeSR;return e.map((e=>h(e,r,s))).sort(((e,r)=>e.lij[0]===r.lij[0]?e.label>r.label?-1:1:e.lij[0]-r.lij[0]))}};function h(e,s,o){const i=e.serviceObb;if(t(i)||t(s))return null;P(f,i.quaternion),r(j,i.center),xn(j,o,0,j,s,0,1),f[12]=j[0],f[13]=j[1],f[14]=j[2];const l=[[],[],[]];r(j,i.halfSize),I(j,j,f),xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),r(j,i.halfSize),j[0]=-j[0],I(j,j,f),xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),r(j,i.halfSize),j[0]=-j[0],j[1]=-j[1],I(j,j,f),xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),r(j,i.halfSize),j[1]=-j[1],I(j,j,f),xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),l[1].push(l[0][0]),l[1].push(l[0][1]),r(j,i.halfSize),j[0]=-j[0],j[2]=-j[2],I(j,j,f),xn(j,s,0,j,o,0,1),l[1].push([j[0],j[1]]),r(j,i.halfSize),j[2]=-j[2],I(j,j,f),xn(j,s,0,j,o,0,1),l[1].push([j[0],j[1]]),l[2].push(l[0][0]),l[2].push(l[0][3]),r(j,i.halfSize),j[1]=-j[1],j[2]=-j[2],I(j,j,f),xn(j,s,0,j,o,0,1),l[2].push([j[0],j[1]]),l[2].push(l[1][3]);const a=new v({rings:l,spatialReference:o});return {lij:[e.level,e.childCount,0],label:e.id,geometry:a}}e([d({constructOnly:!0})],m.prototype,"lv",void 0),e([d({constructOnly:!0})],m.prototype,"nodeSR",void 0),m=e([i("esri.views.3d.layers.support.I3STreeDebugger")],m);const f=e$1(),j=n();

export { m as I3STreeDebugger };
