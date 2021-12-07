import { af as t, e, d, i } from './messageBundle-f75b4090.js';
import { v } from './geometry-7e07b1ba.js';
import { P } from './mat4-f34c6460.js';
import { e as e$1 } from './mat4f64-677a419d.js';
import { r, I } from './mathUtils-e16f9389.js';
import { n } from './common-d5b993de.js';
import { x as xn } from './projection-f3d8779d.js';
import { b } from './TileTreeDebugger-f912b010.js';
import './index-b157fcf2.js';
import './unitUtils-38774114.js';
import './aaBoundingRect-9468599b.js';
import './geodesicConstants-54cb88d4.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './Graphic-3961df6c.js';
import './PopupTemplate-6e5ecad2.js';
import './opacityUtils-5e864561.js';
import './enumeration-d3301938.js';
import './Identifiable-da047c47.js';
import './symbols-b414aa72.js';
import './Symbol-cad56b52.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingBox-876621e6.js';
import './persistableUrlUtils-40bbec67.js';
import './Portal-c5cfa317.js';
import './jsonUtils-13b1f6fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends b{constructor(e){super(e);}getTiles(){const e=this.lv.getVisibleNodes(),r=this.view.renderSpatialReference,s=this.nodeSR;return e.map((e=>h(e,r,s))).sort(((e,r)=>e.lij[0]===r.lij[0]?e.label>r.label?-1:1:e.lij[0]-r.lij[0]))}};function h(e,s,o){const i=e.serviceObb;if(t(i)||t(s))return null;P(f,i.quaternion),r(j,i.center),xn(j,o,0,j,s,0,1),f[12]=j[0],f[13]=j[1],f[14]=j[2];const l=[[],[],[]];r(j,i.halfSize),I(j,j,f),xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),r(j,i.halfSize),j[0]=-j[0],I(j,j,f),xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),r(j,i.halfSize),j[0]=-j[0],j[1]=-j[1],I(j,j,f),xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),r(j,i.halfSize),j[1]=-j[1],I(j,j,f),xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),l[1].push(l[0][0]),l[1].push(l[0][1]),r(j,i.halfSize),j[0]=-j[0],j[2]=-j[2],I(j,j,f),xn(j,s,0,j,o,0,1),l[1].push([j[0],j[1]]),r(j,i.halfSize),j[2]=-j[2],I(j,j,f),xn(j,s,0,j,o,0,1),l[1].push([j[0],j[1]]),l[2].push(l[0][0]),l[2].push(l[0][3]),r(j,i.halfSize),j[1]=-j[1],j[2]=-j[2],I(j,j,f),xn(j,s,0,j,o,0,1),l[2].push([j[0],j[1]]),l[2].push(l[1][3]);const a=new v({rings:l,spatialReference:o});return {lij:[e.level,e.childCount,0],label:e.id,geometry:a}}e([d({constructOnly:!0})],m.prototype,"lv",void 0),e([d({constructOnly:!0})],m.prototype,"nodeSR",void 0),m=e([i("esri.views.3d.layers.support.I3STreeDebugger")],m);const f=e$1(),j=n();

export { m as I3STreeDebugger };
