import { e as e$2, b as d, i } from './cast-e5ea2533.js';
import { r as r$1 } from './enumeration-da141e85.js';
import { a as a$2 } from './JSONSupport-8dda8bae.js';
import './geometry-160ffbb5.js';
import { M, d as b, o, r as r$2 } from './Portal-f1457cb4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$1=class extends a$2{get affectsPixelSize(){return !1}forwardTransform(r){return r}inverseTransform(r){return r}};e$2([d()],t$1.prototype,"affectsPixelSize",null),e$2([d({json:{write:!0}})],t$1.prototype,"spatialReference",void 0),t$1=e$2([i("esri.layers.support.rasterTransforms.BaseRasterTransform")],t$1);const a$1=t$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e$1=class extends a$1{constructor(){super(...arguments),this.type="identity";}};e$2([r$1({IdentityXform:"identity"})],e$1.prototype,"type",void 0),e$1=e$2([i("esri.layers.support.rasterTransforms.IdentityTransform")],e$1);const p$1=e$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(e,r,o){const{x:t,y:s}=r;if(o<2){return {x:e[0]+t*e[2]+s*e[4],y:e[1]+t*e[3]+s*e[5]}}if(2===o){const r=t*t,o=s*s,n=t*s;return {x:e[0]+t*e[2]+s*e[4]+r*e[6]+n*e[8]+o*e[10],y:e[1]+t*e[3]+s*e[5]+r*e[7]+n*e[9]+o*e[11]}}const n=t*t,i=s*s,f=t*s,l=n*t,p=n*s,a=t*i,c=s*i;return {x:e[0]+t*e[2]+s*e[4]+n*e[6]+f*e[8]+i*e[10]+l*e[12]+p*e[14]+a*e[16]+c*e[18],y:e[1]+t*e[3]+s*e[5]+n*e[7]+f*e[9]+i*e[11]+l*e[13]+p*e[15]+a*e[17]+c*e[19]}}function a(e,r,o){const{xmin:t,ymin:s,xmax:n,ymax:i,spatialReference:f}=r;let a=[];if(o<2)a.push({x:t,y:i}),a.push({x:n,y:i}),a.push({x:t,y:s}),a.push({x:n,y:s});else {let e=10;for(let r=0;r<e;r++)a.push({x:t,y:s+(i-s)*r/(e-1)}),a.push({x:n,y:s+(i-s)*r/(e-1)});e=8;for(let r=1;r<=e;r++)a.push({x:t+(n-t)*r/e,y:s}),a.push({x:t+(n-t)*r/e,y:i});}a=a.map((r=>p(e,r,o)));const c=a.map((e=>e.x)),u=a.map((e=>e.y));return new M({xmin:Math.min.apply(null,c),xmax:Math.max.apply(null,c),ymin:Math.min.apply(null,u),ymax:Math.max.apply(null,u),spatialReference:f})}function c(e){const[r,o,t,s,n,i]=e,f=t*i-n*s,l=n*s-t*i;return [(n*o-r*i)/f,(t*o-r*s)/l,i/f,s/l,-n/f,-t/l]}let u=class extends a$1{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial";}readForwardCoefficients(e,r){const{coeffX:o,coeffY:t}=r;if(null==o||!o.length||null==t||!t.length||o.length!==t.length)return null;const s=[];for(let n=0;n<o.length;n++)s.push(o[n]),s.push(t[n]);return s}writeForwardCoefficients(e,r,o){const t=[],s=[];for(let n=0;n<(null==e?void 0:e.length);n++)n%2==0?t.push(e[n]):s.push(e[n]);r.coeffX=t,r.coeffY=s;}get inverseCoefficients(){let e=this._get("inverseCoefficients");const r=this._get("forwardCoefficients");return !e&&r&&this.polynomialOrder<2&&(e=c(r)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e);}readInverseCoefficients(e,r){const{inverseCoeffX:o,inverseCoeffY:t}=r;if(null==o||!o.length||null==t||!t.length||o.length!==t.length)return null;const s=[];for(let n=0;n<o.length;n++)s.push(o[n]),s.push(t[n]);return s}writeInverseCoefficients(e,r,o){const t=[],s=[];for(let n=0;n<(null==e?void 0:e.length);n++)n%2==0?t.push(e[n]):s.push(e[n]);r.inverseCoeffX=t,r.inverseCoeffY=s;}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const r=p(this.forwardCoefficients,e,this.polynomialOrder);return new b({x:r.x,y:r.y,spatialReference:e.spatialReference})}return a(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const r=p(this.inverseCoefficients,e,this.polynomialOrder);return new b({x:r.x,y:r.y,spatialReference:e.spatialReference})}return a(this.inverseCoefficients,e,this.polynomialOrder)}};e$2([d({json:{write:!0}})],u.prototype,"polynomialOrder",void 0),e$2([d()],u.prototype,"forwardCoefficients",void 0),e$2([o("forwardCoefficients",["coeffX","coeffY"])],u.prototype,"readForwardCoefficients",null),e$2([r$2("forwardCoefficients")],u.prototype,"writeForwardCoefficients",null),e$2([d({json:{write:!0}})],u.prototype,"inverseCoefficients",null),e$2([o("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],u.prototype,"readInverseCoefficients",null),e$2([r$2("inverseCoefficients")],u.prototype,"writeInverseCoefficients",null),e$2([d()],u.prototype,"affectsPixelSize",null),e$2([r$1({PolynomialXform:"polynomial"})],u.prototype,"type",void 0),u=e$2([i("esri.layers.support.rasterTransforms.PolynomialTransform")],u);const m=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={PolynomialXform:m,IdentityXform:p$1},r=Object.keys(t);function e(n){const o=null==n?void 0:n.type;return !n||r.includes(o)}function l(n){if(!(null==n?void 0:n.type))return null;const o=t[null==n?void 0:n.type];if(o){const t=new o;return t.read(n),t}return null}

export { a$1 as a, e, l, m };