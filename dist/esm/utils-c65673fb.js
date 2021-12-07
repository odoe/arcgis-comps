import { bK as e, A as r$1, af as t } from './messageBundle-f75b4090.js';
import { e as e$1, n, h, o } from './mat4-f34c6460.js';
import { e as e$2 } from './mat4f64-677a419d.js';
import { E } from './Util-68fde664.js';
import { o as o$1 } from './doublePrecisionUtils-68dc07e3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this.id=e();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f(r,n){return t(r)&&(r=[]),r.push(n),r}function u(r,n){if(t(r))return null;const o=r.filter((t=>t!==n));return 0===o.length?null:o}function c(t){return !!r$1(t)&&!t.visible}function l(t,i,m){const f=t.origin.vec3;E(j,-f[0],-f[1],-f[2]),r$1(t.transformation)?e$1(i,j,t.transformation):n(i,j),m&&(h(m,i),o(m,m));}function p(t,r,n,o,s){b[0]=t.get(r,0),b[1]=t.get(r,1),b[2]=t.get(r,2),o$1(b,g,3),n.set(s,0,g[0]),o.set(s,0,g[1]),n.set(s,1,g[2]),o.set(s,1,g[3]),n.set(s,2,g[4]),o.set(s,2,g[5]);}const b=new Float64Array(3),g=new Float32Array(6),j=e$2();

export { c, f, l, p, r, u };
