'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new unitUtils.m$4({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:unitUtils.k.WebMercator}),minus180Line:new unitUtils.m$4({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:unitUtils.k.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new unitUtils.m$4({paths:[[[180,-180],[180,180]]],spatialReference:unitUtils.k.WGS84}),minus180Line:new unitUtils.m$4({paths:[[[-180,-180],[-180,180]]],spatialReference:unitUtils.k.WGS84})}};function i$1(e,n){return Math.ceil((e-n)/(2*n))}function o$1(e,n){const t=s$1(e);for(const r of t)for(const e of r)e[0]+=n;return e}function s$1(e){return unitUtils.c$9(e)?e.rings:e.paths}function a(e){const n=(null==e?void 0:e.isWebMercator)?102100:4326;return [r[n].minX,r[n].maxX]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function o(o,i,n,m){const p="string"==typeof o?request.U(o):o,a=i[0].spatialReference,u={...m,query:{...p.query,f:"json",sr:JSON.stringify(a),target:JSON.stringify({geometryType:unitUtils.v$1(i[0]),geometries:i}),cutter:JSON.stringify(n)}},c=await request.E(p.path+"/cut",u),{cutIndexes:f,geometries:g=[]}=c.data;return {cutIndexes:f,geometries:g.map((e=>{const t=unitUtils.d$1(e);return t.spatialReference=a,t}))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i(o,i,f){const m="string"==typeof o?request.U(o):o,p=i[0].spatialReference,a=unitUtils.v$1(i[0]),u={...f,query:{...m.query,f:"json",sr:p.wkid?p.wkid:JSON.stringify(p),geometries:JSON.stringify(s(i))}};return n((await request.E(m.path+"/simplify",u)).data,a,p)}function s(r){return {geometryType:unitUtils.v$1(r[0]),geometries:r.map((r=>r.toJSON()))}}function n(r,t,e){const i=unitUtils.a$5(t);return r.map((r=>{const t=i.fromJSON(r);return t.spatialReference=e,t}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=request.s$2.getLogger("esri.geometry.support.normalizeUtils");function x(t){return "polygon"===t.type}function d(t){return "polygon"===t[0].type}function w(t){return "polyline"===t[0].type}function R(t,n){if(!(t instanceof unitUtils.m$4||t instanceof unitUtils.v)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw y.error(t),new request.s$1(t)}const o=s$1(t),s=[];for(const e of o){const t=[];s.push(t),t.push([e[0][0],e[0][1]]);for(let o=0;o<e.length-1;o++){const s=e[o][0],r=e[o][1],i=e[o+1][0],l=e[o+1][1],f=Math.sqrt((i-s)*(i-s)+(l-r)*(l-r)),c=(l-r)/f,p=(i-s)/f,u=f/n;if(u>1){for(let l=1;l<=u-1;l++){const e=l*n,o=p*e+s,i=c*e+r;t.push([o,i]);}const e=(f+Math.floor(u-1)*n)/2,o=p*e+s,i=c*e+r;t.push([o,i]);}t.push([i,l]);}}return x(t)?new unitUtils.v({rings:s,spatialReference:t.spatialReference}):new unitUtils.m$4({paths:s,spatialReference:t.spatialReference})}function M(t,e,n){if(e){const e=R(t,1e6);t=unitUtils.j(e,!0);}return n&&(t=o$1(t,n)),t}function P(t,e,n){if(Array.isArray(t)){const o=t[0];if(o>e){const n=i$1(o,e);t[0]=o+n*(-2*e);}else if(o<n){const e=i$1(o,n);t[0]=o+e*(-2*n);}}else {const o=t.x;if(o>e){const n=i$1(o,e);t=t.clone().offset(n*(-2*e),0);}else if(o<n){const e=i$1(o,n);t=t.clone().offset(e*(-2*n),0);}}return t}function b(t,e){let n=-1;for(let o=0;o<e.cutIndexes.length;o++){const s=e.cutIndexes[o],r=e.geometries[o],i=s$1(r);for(let t=0;t<i.length;t++){const e=i[t];e.some((n=>{if(n[0]<180)return !0;{let n=0;for(let t=0;t<e.length;t++){const o=e[t][0];n=o>n?o:n;}n=Number(n.toFixed(9));const o=-360*i$1(n,180);for(let s=0;s<e.length;s++){const e=r.getPoint(t,s);r.setPoint(t,s,e.clone().offset(o,0));}return !0}}));}if(s===n){if(d(t))for(const e of s$1(r))t[s]=t[s].addRing(e);else if(w(t))for(const e of s$1(r))t[s]=t[s].addPath(e);}else n=s,t[s]=r;}return t}async function v(e,n,l){var h;if(!Array.isArray(e))return v([e],n);const y=null!=(h=null==n?void 0:n.url)?h:request.t$2.geometryServiceUrl;let x,d,w,j,R,L,U,k,A=0;const z=[],I=[];for(const t of e)if(request.t(t))I.push(t);else if(x||(x=t.spatialReference,d=unitUtils.S$1(x),w=x.isWebMercator,L=w?102100:4326,j=r[L].maxX,R=r[L].minX,U=r[L].plus180Line,k=r[L].minus180Line),d)if("mesh"===t.type)I.push(t);else if("point"===t.type)I.push(P(t.clone(),j,R));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((t=>P(t,j,R))),I.push(e);}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,d);I.push(e.rings?new unitUtils.v(e):e);}else if(t.extent){const e=t.extent,n=i$1(e.xmin,R)*(2*j);let o=0===n?t.clone():o$1(t.clone(),n);e.offset(n,0),e.intersects(U)&&e.xmax!==j?(A=e.xmax>A?e.xmax:A,o=M(o,w),z.push(o),I.push("cut")):e.intersects(k)&&e.xmin!==R?(A=e.xmax*(2*j)>A?e.xmax*(2*j):A,o=M(o,w,360),z.push(o),I.push("cut")):I.push(o);}else I.push(t.clone());else I.push(t);let X=i$1(A,j),q=-90;const C=X,D=new unitUtils.m$4;for(;X>0;){const t=360*X-180;D.addPath([[t,q],[t,-1*q]]),q*=-1,X--;}if(z.length>0&&C>0){const t=b(z,await o(y,z,D,l)),n=[],o$1=[];for(let l=0;l<I.length;l++){const r=I[l];if("cut"!==r)o$1.push(r);else {const r=t.shift(),i=e[l];request.r(i)&&"polygon"===i.type&&i.rings&&i.rings.length>1&&r.rings.length>=i.rings.length?(n.push(r),o$1.push("simplify")):o$1.push(w?unitUtils.R(r):r);}}if(!n.length)return o$1;const r=await i(y,n,l),i$1=[];for(let e=0;e<o$1.length;e++){const t=o$1[e];"simplify"!==t?i$1.push(t):i$1.push(w?unitUtils.R(r.shift()):r.shift());}return i$1}const E=[];for(let t=0;t<I.length;t++){const e=I[t];if("cut"!==e)E.push(e);else {const t=z.shift();E.push(!0===w?unitUtils.R(t):t);}}return Promise.resolve(E)}function U(t,e){const n=unitUtils.S$1(e);if(n){const[e,o]=n.valid,s=o-e;if(t<e)for(;t<e;)t+=s;if(t>o)for(;t>o;)t-=s;}return t}

exports.U = U;
exports.a = a;
exports.i = i$1;
exports.r = r;
exports.s = s$1;
exports.v = v;
