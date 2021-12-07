import './geometry-7e07b1ba.js';
import { c as s, aE as b, aK as r, af as t, ar as M, aW as c$1 } from './messageBundle-f75b4090.js';
import { H } from './unitUtils-38774114.js';
import { m as m$1, u as u$1 } from './aaBoundingRect-9468599b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=s.getLogger("esri.layers.support.ElevationSampler");class m{queryElevation(e){return h(e.clone(),this)}on(){return g}projectIfRequired(e,t){return f(e,t)}}class p extends m{constructor(e,t,n){super(),this.tile=e,this.noDataValue=n,this.extent=m$1(e.tile.extent,t.spatialReference);const o=H(t.spatialReference),r=t.lodAt(e.tile.level).resolution*o;this.demResolution={min:r,max:r};}get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return r(this.extent,t)}elevationAt(e){const n=this.projectIfRequired(e,this.spatialReference);if(t(n))return null;if(!this.contains(e)){const t=this.extent,n=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;return c.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${n})`),this.noDataValue}return this.tile.sample(n.x,n.y)}}class u extends m{constructor(e,t,n){let s;super(),"number"==typeof t?(this.noDataValue=t,s=null):(s=t,this.noDataValue=n),this.samplers=s?e.map((e=>new p(e,s,this.noDataValue))):e;const r=this.samplers[0];if(r){this.extent=r.extent.clone();const{min:e,max:t}=r.demResolution;this.demResolution={min:e,max:t};for(let n=1;n<this.samplers.length;n++){const e=this.samplers[n];this.extent.union(e.extent),this.demResolution.min=Math.min(this.demResolution.min,e.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,e.demResolution.max);}}else this.extent=m$1(u$1(),s.spatialReference),this.demResolution={min:0,max:0};}get spatialReference(){return this.extent.spatialReference}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const n of this.samplers)if(n.contains(t))return n.elevationAt(t);return c.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),this.noDataValue}}function h(e,t){const n=f(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":x(e,n,t);break;case"polyline":R(e,n,t);break;case"multipoint":d(e,n,t);}return e}function f(e,n){if(t(e))return null;const s=e.spatialReference;if(s.equals(n))return e;const i=M(e,n);return i||c.error(`Cannot project geometry spatial reference (wkid:${s.wkid}) to elevation sampler spatial reference (wkid:${n.wkid})`),i}function x(e,t,s){e.z=c$1(s.elevationAt(t),0);}function R(e,t,s){y.spatialReference=t.spatialReference;const i=e.hasM&&!e.hasZ;for(let o=0;o<e.paths.length;o++){const r=e.paths[o],a=t.paths[o];for(let e=0;e<r.length;e++){const t=r[e],o=a[e];y.x=o[0],y.y=o[1],i&&(t[3]=t[2]),t[2]=c$1(s.elevationAt(y),0);}}e.hasZ=!0;}function d(e,t,s){y.spatialReference=t.spatialReference;const i=e.hasM&&!e.hasZ;for(let o=0;o<e.points.length;o++){const r=e.points[o],a=t.points[o];y.x=a[0],y.y=a[1],i&&(r[3]=r[2]),r[2]=c$1(s.elevationAt(y),0);}e.hasZ=!0;}const y=new b,g={remove(){}};

export { h, u };
