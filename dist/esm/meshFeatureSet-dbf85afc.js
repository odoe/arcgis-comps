import { h as h$2 } from './Graphic-3961df6c.js';
import { c as s, A as r, al as P$1, aE as b$2, bC as W$1, c0 as ht, bm as E$2, aw as p$4, h as h$1, af as t, s as s$1, n as n$1, bu as p$5, _ as M$3, e as e$2, d as d$3, i } from './messageBundle-f75b4090.js';
import { m as m$4 } from './Portal-c5cfa317.js';
import { n, f as f$5, r as r$3 } from './common-d5b993de.js';
import { v as v$3 } from './geometry-7e07b1ba.js';
import { q as q$1, a as a$2, l as l$3, x as x$4, k as k$4 } from './axisAngleDegrees-8d7a62d6.js';
import { y as y$4, f as f$4, a as c$4 } from './MeshComponent-3b6a4fdf.js';
import { r as r$1, k as k$3, x as x$3, b as b$3, O as O$3 } from './georeference-566cede5.js';
import { o as o$1 } from './triangulationUtils-501cc2c4.js';
import { w as wn, v as vn } from './projection-f3d8779d.js';
import { a as a$1 } from './mat3-6a23d9ad.js';
import { e as e$1 } from './quatf64-b9feea68.js';
import { e } from './mat4f64-677a419d.js';
import { u as u$3, L, a as j$1, o, c as c$3, I as I$2, d as d$2 } from './mathUtils-e16f9389.js';
import { d as O$2 } from './unitUtils-38774114.js';
import { v as v$2, F as F$2, B as B$1, M as M$2, _, R as R$1 } from './projection-5f2268ed.js';
import { r as r$2, f as f$6 } from './mat4-f34c6460.js';
import g$3 from './FeatureSet-58481609.js';
import './PopupTemplate-6e5ecad2.js';
import './opacityUtils-5e864561.js';
import './enumeration-d3301938.js';
import './Identifiable-da047c47.js';
import './symbols-b414aa72.js';
import './Symbol-cad56b52.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './persistableUrlUtils-40bbec67.js';
import './jsonUtils-13b1f6fd.js';
import './index-b157fcf2.js';
import './quat-2d7a417b.js';
import './screenshotUtils-f9728729.js';
import './BufferView-35ef10d7.js';
import './vec2-5672471e.js';
import './vec33-df10f43c.js';
import './earcut-05cd758b.js';
import './deduplicate-c3c4ee02.js';
import './geodesicConstants-54cb88d4.js';
import './Field-bfaa8af9.js';
import './fieldType-66a19d8a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=s.getLogger("esri.geometry.support.meshUtils.centerAt");function c$2(e,r$2,i){var n;if(!e.vertexAttributes||!e.vertexAttributes.position)return;const s=null!=(n=null==i?void 0:i.origin)?n:e.origin;if(r(e.transform))null!=(null==i?void 0:i.geographic)&&i.geographic!==e.transform.geographic&&a.warn(`Specifying the 'geographic' parameter (${i.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),f$3(e.transform,r$2,s);else {r$1(e.spatialReference,i)?p$3(e,r$2,s):g$2(e,r$2,s);}}function f$3(e,t,r){const i=t.x-r.x,o=t.y-r.y,n=t.hasZ&&r.hasZ?t.z-r.z:0,s=e.origin;e.origin=[s[0]+i,s[1]+o,s[2]+n];}function p$3(e,t,r){const i=k$3(e.vertexAttributes,r,{geographic:!0}),{position:o,normal:a,tangent:c}=x$3(i,t,{geographic:!0});e.vertexAttributes.position=o,e.vertexAttributes.normal=a,e.vertexAttributes.tangent=c,e.vertexAttributesChanged();}function g$2(e,t,r){const o=u$2,n=m$3;if(wn(t,n,e.spatialReference)){if(!wn(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,a.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`);}l$2(e.vertexAttributes.position,n,o),e.vertexAttributesChanged();}else a.error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid})`);}function l$2(e,t,r){if(e)for(let i=0;i<e.length;i+=3)for(let o=0;o<3;o++)e[i+o]+=t[o]-r[o];}const m$3=n(),u$2=n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function u$1(e,s,o){const{loadGLTFMesh:n}=await P$1(import('./loadGLTFMesh-7174e0b8.js'),o),a=await m$2(s,o),i=n(new b$2({x:0,y:0,z:0,spatialReference:e.spatialReference}),a.url,{resolveFile:f$2(a),useTransform:!0,signal:r(o)?o.signal:null});i.then((()=>a.dispose()),(()=>a.dispose()));const{vertexAttributes:l,components:u}=await i;e.vertexAttributes=l,e.components=u;}function f$2(e){const t=ht(e.url);return s=>{var r;const o=W$1(s,t,t),n=o?o.replace(/^ *\.\//,""):null;return null!=(r=e.files.get(n))?r:s}}async function m$2(e,t){return e instanceof Blob?y$3.fromBlob(e):"string"==typeof e?new y$3(e):Array.isArray(e)?p$2(e,t):w$3(e,t)}async function p$2(t$1,r){const i=new Map;let l=null;const c=await E$2(t$1.map((async e=>({name:e.name,source:await m$2(e instanceof Blob?e:e.source,r)})))),u=[];for(const e of c)e&&(p$4(r)?e.source.dispose():u.push(e));h$1(r);for(const{name:e,source:o}of u)(t(l)||/\.(gltf|glb)/i.test(e))&&(l=o.url),i.set(e,o.url),o.files&&o.files.forEach(((e,t)=>i.set(t,e)));if(t(l))throw new s$1("mesh-load-external:missing-files","Missing files to load external mesh source");return new y$3(l,(()=>u.forEach((({source:e})=>e.dispose()))),i)}async function w$3(e,t){const{default:s}=await P$1(import('./messageBundle-f75b4090.js').then(function (n) { return n.dY; }),t),o="string"==typeof e.multipart[0]?await Promise.all(e.multipart.map((async e=>(await s(e,{responseType:"array-buffer"})).data))):e.multipart;return y$3.fromBlob(new Blob(o))}class y$3{constructor(e,t=(()=>{}),s=new Map){this.url=e,this.dispose=t,this.files=s;}static fromBlob(e){const t=URL.createObjectURL(e);return new y$3(t,(()=>URL.revokeObjectURL(t)))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v$1=s.getLogger("esri.geometry.support.meshUtils.offset");function x$2(t,e,o){if(t.vertexAttributes&&t.vertexAttributes.position)if(r(t.transform))null!=(null==o?void 0:o.geographic)&&o.geographic!==t.transform.geographic&&v$1.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),A$2(t.transform,e);else {r$1(t.spatialReference,o)?b$1(t,e):y$2(t,e);}}function A$2(t,r){const e=t.origin;t.origin=u$3(n(),e,r);}function b$1(t,o){const i=t.spatialReference,n=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,v=new Float64Array(n.length),x=r(a)?new Float32Array(a.length):null,A=r(c)?new Float32Array(c.length):null,b=t.extent.center,y=k$2;vn(i,[b.x,b.y,b.z],w$2,O$2(i)),a$1(F$1,w$2),L(y,o,F$1),v$2(n,i,v),r(a)&&F$2(a,n,v,i,x),r(c)&&B$1(c,n,v,i,A),d$1(v,y),M$2(v,n,i),r(a)&&_(x,n,v,i,a),r(c)&&R$1(A,n,v,i,c),t.vertexAttributesChanged();}function y$2(t,r){d$1(t.vertexAttributes.position,r),t.vertexAttributesChanged();}function d$1(t,r){if(t)for(let e=0;e<t.length;e+=3)for(let o=0;o<3;o++)t[e+o]+=r[o];}const k$2=n(),w$2=e(),F$1=e$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$1(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:r}=x$1,n=4*t.length,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(2*t.length*3);let l=0,c=0,f=0,u=0;for(let h=0;h<t.length;h++){const n=t[h],m=l/3;for(const t of e)i[u++]=m+t;const p=n.corners;for(let t=0;t<4;t++){const e=p[t];let i=0;a[f++]=.25*r[t][0]+n.uvOrigin[0],a[f++]=n.uvOrigin[1]-.25*r[t][1];for(let t=0;t<3;t++)0!==n.axis[t]?(o[l++]=.5*n.axis[t],s[c++]=n.axis[t]):(o[l++]=.5*e[i++],s[c++]=0);}}return {position:o,normal:s,uv:a,faces:i}}function c$1(e,r$1){const n=e.components[0],o=n.faces,a=M$1[r$1],i=6*a,l=new Uint32Array(6),c=new Uint32Array(o.length-6);let f=0,u=0;for(let t=0;t<o.length;t++)t>=i&&t<i+6?l[f++]=o[t]:c[u++]=o[t];if(r(e.vertexAttributes.uv)){const t=new Float32Array(e.vertexAttributes.uv),r=4*a*2,n=[0,1,1,1,1,0,0,0];for(let e=0;e<n.length;e++)t[r+e]=n[e];e.vertexAttributes.uv=t;}return e.components=[new f$4({faces:l,material:n.material}),new f$4({faces:c})],e}function f$1(t=0){const e=Math.round(8*2**t),r=2*e,n=(e-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*((e-1)*r*2));let l=0,c=0,f=0,u=0;for(let h=0;h<=e;h++){const t=h/e*Math.PI+.5*Math.PI,n=Math.cos(t),m=Math.sin(t);F[2]=m;const p=0===h||h===e,w=p?r-1:r;for(let v=0;v<=w;v++){const t=v/w*2*Math.PI;F[0]=-Math.sin(t)*n,F[1]=Math.cos(t)*n;for(let e=0;e<3;e++)o[l]=.5*F[e],s[l]=F[e],++l;a[c++]=(v+(p?.5:0))/r,a[c++]=h/e,0!==h&&v!==r&&(h!==e&&(i[f++]=u,i[f++]=u+1,i[f++]=u-r),1!==h&&(i[f++]=u,i[f++]=u-r,i[f++]=u-r-1)),u++;}}return {position:o,normal:s,uv:a,faces:i}}function u(t=0){const e=5,r=Math.round(16*2**t),n=(e-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*(4*r));let l=0,c=0,f=0,u=0,h=0;for(let m=0;m<=e;m++){const t=0===m||m===e,n=m<=1||m>=e-1,p=2===m||4===m,w=t?r-1:r;for(let v=0;v<=w;v++){const A=v/w*2*Math.PI,g=t?0:.5;F[0]=g*Math.sin(A),F[1]=g*-Math.cos(A),F[2]=m<=2?.5:-.5;for(let t=0;t<3;t++)o[l++]=F[t],s[c++]=n?2===t?m<=1?1:-1:0:2===t?0:F[t]/g;a[f++]=(v+(t?.5:0))/r,a[f++]=m<=1?1*m/3:m<=3?1*(m-2)/3+1/3:1*(m-4)/3+2/3,p||0===m||v===r||(m!==e&&(i[u++]=h,i[u++]=h+1,i[u++]=h-r),1!==m&&(i[u++]=h,i[u++]=h-r,i[u++]=h-r-1)),h++;}}return {position:o,normal:s,uv:a,faces:i}}function h(t){const e=v.facingAxisOrderSwap[t],r=v.position,n=v.normal,o=new Float64Array(r.length),s=new Float32Array(n.length);let a=0;for(let i=0;i<4;i++){const t=a;for(let i=0;i<3;i++){const l=e[i],c=Math.abs(l)-1,f=l>=0?1:-1;o[a]=r[t+c]*f,s[a]=n[t+c]*f,a++;}}return {position:o,normal:s,uv:new Float32Array(v.uv),faces:new Uint32Array(v.faces)}}const m$1=1,p$1=2,w$1=3,v={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[w$1,m$1,p$1],west:[-w$1,-m$1,p$1],north:[-m$1,w$1,p$1],south:[m$1,-w$1,p$1],up:[m$1,p$1,w$1],down:[m$1,-p$1,-w$1]}};function A$1(t,e,r){g$1(t),y$1(t,r&&r.size);const{vertexAttributes:n,transform:o}=b$3(t,e,r);return {vertexAttributes:new y$4({...n,uv:t.uv}),transform:o,components:[new f$4({faces:t.faces,material:r&&r.material||null})],spatialReference:e.spatialReference}}function g$1(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5;}function y$1(t,e){if(null==e)return;const o="number"==typeof e?[e,e,e]:[null!=e.width?e.width:1,null!=e.depth?e.depth:1,null!=e.height?e.height:1];O$1[0]=o[0],O$1[4]=o[1],O$1[8]=o[2];for(let n=0;n<t.position.length;n+=3){for(let e=0;e<3;e++)F[e]=t.position[n+e];L(F,F,O$1);for(let e=0;e<3;e++)t.position[n+e]=F[e];}if(o[0]!==o[1]||o[1]!==o[2]){O$1[0]=1/o[0],O$1[4]=1/o[1],O$1[8]=1/o[2];for(let e=0;e<t.normal.length;e+=3){for(let r=0;r<3;r++)F[r]=t.normal[e+r];L(F,F,O$1),j$1(F,F);for(let r=0;r<3;r++)t.normal[e+r]=F[r];}}}const x$1={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},M$1={south:0,east:1,north:2,west:3,up:4,down:5},F=n(),O$1=e$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const z=s.getLogger("esri.geometry.support.meshUtils.rotate");function C(t,e,o){if(!t.vertexAttributes||!t.vertexAttributes.position||0===e[3])return;const i=t.spatialReference;if(r(t.transform)){var n;null!=(null==o?void 0:o.geographic)&&o.geographic!==t.transform.geographic&&z.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const r=null!=(n=null==o?void 0:o.origin)?n:t.transform.getOriginPoint(i);I$1(t.transform,e,r);}else {var s;const r=null!=(s=null==o?void 0:o.origin)?s:t.origin;r$1(t.spatialReference,o)?U(t,e,r):D$1(t,e,r);}}function I$1(t,r,e){const o$1=o(M,e.x,e.y,e.z),i=c$3(M,o$1,t.origin);t.applyLocalInverse(i,O),t.rotation=q$1(t.rotation,r,a$2()),t.applyLocalInverse(i,i),c$3(i,i,O),t.translation=u$3(n(),t.translation,i);}function U(t,e,i){const n=t.spatialReference,s=O$2(n),a=q;wn(i,a,s)||wn(t.origin,a,s);const c=t.vertexAttributes.position,f=t.vertexAttributes.normal,l=t.vertexAttributes.tangent,m=new Float64Array(c.length),g=r(f)?new Float32Array(f.length):null,u=r(l)?new Float32Array(l.length):null;vn(s,a,S$1,s),a$1(Z$1,S$1);const d=P;L(l$3(P),l$3(e),Z$1),d[3]=e[3],v$2(c,n,m),r(f)&&F$2(f,c,m,n,g),r(l)&&B$1(l,c,m,n,u),E$1(m,d,3,a),M$2(m,c,n),r(f)&&(E$1(g,d,3),_(g,c,m,n,f)),r(l)&&(E$1(u,d,4),R$1(u,c,m,n,l)),t.vertexAttributesChanged();}function D$1(t,r,e){const o=q;if(!wn(e,o,t.spatialReference)){const r=t.origin;o[0]=r.x,o[1]=r.y,o[2]=r.z,z.error(`Failed to project specified origin (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`);}E$1(t.vertexAttributes.position,r,3,o),E$1(t.vertexAttributes.normal,r,3),E$1(t.vertexAttributes.tangent,r,4),t.vertexAttributesChanged();}function E$1(t$1,r,o,i=f$5){if(!t(t$1)){r$2(S$1),f$6(S$1,S$1,x$4(r),l$3(r));for(let r=0;r<t$1.length;r+=o){for(let e=0;e<3;e++)M[e]=t$1[r+e]-i[e];I$2(M,M,S$1);for(let e=0;e<3;e++)t$1[r+e]=M[e]+i[e];}}}const M=n(),O=n(),P=a$2(),S$1=e(),Z$1=e$1(),q=n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d=s.getLogger("esri.geometry.support.meshUtils.scale");function j(e,r$2,o){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const i=e.spatialReference;if(r(e.transform)){var n;null!=(null==o?void 0:o.geographic)&&o.geographic!==e.transform.geographic&&d.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const t=null!=(n=null==o?void 0:o.origin)?n:e.transform.getOriginPoint(i);x(e.transform,r$2,t);}else {const t=r$1(e.spatialReference,o),i=o&&o.origin||e.origin;t?A(e,r$2,i):b(e,r$2,i);}}function x(e,t,a){const c=o(w,a.x,a.y,a.z),l=c$3(w,c,e.origin);e.applyLocalInverse(l,k$1);const p=d$2(n(),e.scale,t);e.scale=p,e.applyLocalInverse(l,l),c$3(l,l,k$1),e.translation=u$3(n(),e.translation,l);}function A(e,r$1,o){const i=e.spatialReference,n=O$2(i),s=R;wn(o,s,n)||wn(e.origin,s,n);const a=e.vertexAttributes.position,p=e.vertexAttributes.normal,d=e.vertexAttributes.tangent,j=new Float64Array(a.length),x=r(p)?new Float32Array(p.length):null,A=r(d)?new Float32Array(d.length):null;v$2(a,i,j),r(p)&&F$2(p,a,j,i,x),r(d)&&B$1(d,a,j,i,A),y(j,r$1,s),M$2(j,a,i),r(p)&&_(x,a,j,i,p),r(d)&&R$1(A,a,j,i,d),e.vertexAttributesChanged();}function b(e,t,r){const o=R;if(!wn(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,d.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`);}y(e.vertexAttributes.position,t,o),e.vertexAttributesChanged();}function y(e,t,r=f$5){if(e)for(let o=0;o<e.length;o+=3){for(let t=0;t<3;t++)w[t]=e[o+t]-r[t];d$2(w,w,t);for(let t=0;t<3;t++)e[o+t]=w[t]+r[t];}}const w=n(),k$1=n(),R=n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var E;const G=s.getLogger("esri.geometry.Mesh");let S=E=class extends(m$4.LoadableMixin(n$1(p$5))){constructor(e){super(e),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new c$4,this.type="mesh";}initialize(){(t(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded");}get hasExtent(){return !this.loaded&&r(this.external)&&r(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const e=this.vertexAttributes.position,t=this.spatialReference;if(0===e.length||this.components&&0===this.components.length)return {extent:new M$3({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t}),center:new b$2({x:0,y:0,z:0,spatialReference:t})};const o=r(this.transform)?this.transform.project(e,t):e;let r$1=1/0,n=1/0,i=1/0,a=-1/0,l=-1/0,p=-1/0,c=0,m=0,u=0;const d=o.length,x=1/(d/3);let y=0;for(;y<d;){const e=o[y++],t=o[y++],s=o[y++];r$1=Math.min(r$1,e),n=Math.min(n,t),i=Math.min(i,s),a=Math.max(a,e),l=Math.max(l,t),p=Math.max(p,s),c+=x*e,m+=x*t,u+=x*s;}return {extent:new M$3({xmin:r$1,ymin:n,zmin:i,xmax:a,ymax:l,zmax:p,spatialReference:t}),center:new b$2({x:c,y:m,z:u,spatialReference:t})}}get anchor(){if(r(this.transform))return this.transform.getOriginPoint(this.spatialReference);const e=this.boundingInfo;return new b$2({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}get origin(){return r(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return !this.loaded&&r(this.external)&&r(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(e){this.loaded?(this.components||(this.components=[]),this.components.push(f$4.from(e)),this.notifyChange("components")):G.error("addComponent()","Mesh must be loaded before applying operations");}removeComponent(e){if(this.loaded){if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}G.error("removeComponent()","Provided component is not part of the list of components");}else G.error("removeComponent()","Mesh must be loaded before applying operations");}rotate(e,t,o,r){return k$4(I.x,e,B),k$4(I.y,t,k),k$4(I.z,o,D),q$1(B,k,B),q$1(B,D,B),C(this,B,r),this}offset(e,t,o,r){return this.loaded?(W[0]=e,W[1]=t,W[2]=o,x$2(this,W,r),this):(G.error("offset()","Mesh must be loaded before applying operations"),this)}scale(e,t){return this.loaded?(j(this,e,t),this):(G.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(e,t){return this.loaded?(c$2(this,e,t),this):(G.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(e){return r(this.external)&&this.addResolvingPromise(u$1(this,this.external.source,e)),Promise.resolve(this)}clone(){const e=this.components?new Map:null,t=this.components?new Map:null,o={components:this.components?this.components.map((o=>o.cloneWithDeduplication(e,t))):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:r(this.transform)?this.transform.clone():null,external:r(this.external)?{source:this.external.source,extent:r(this.external.extent)?this.external.extent.clone():null}:null};return new E(o)}vertexAttributesChanged(){this.notifyChange("vertexAttributes");}async toBinaryGLTF(e){const{toBinaryGLTF:t}=await import('./gltfexport-e4c67e38.js');return t(this,e)}static createBox(e,t){if(!(e instanceof b$2))return G.error(".createBox()","expected location to be a Point instance"),null;const o=new E(A$1(l$1(),e,t));return t&&t.imageFace&&"all"!==t.imageFace?c$1(o,t.imageFace):o}static createSphere(e,t){return e instanceof b$2?new E(A$1(f$1(t&&t.densificationFactor||0),e,t)):(G.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(e,t){return e instanceof b$2?new E(A$1(u(t&&t.densificationFactor||0),e,t)):(G.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(e,t){return e instanceof b$2?new E(A$1(h(t&&t.facing||"up"),e,t)):(G.error(".createPlane()","expected location to be a Point instance"),null)}static createFromPolygon(e,t){if(!(e instanceof v$3))return G.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const o=o$1(e);return new E({vertexAttributes:new c$4({position:o.position}),components:[new f$4({faces:o.faces,shading:"flat",material:t&&t.material||null})],spatialReference:e.spatialReference})}static async createFromGLTF(e,o,r){if(!(e instanceof b$2))throw G.error(".createfromGLTF()","expected location to be a Point instance"),new s$1("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:n}=await P$1(import('./loadGLTFMesh-7174e0b8.js'),r);return new E(await n(e,o,r))}static createWithExternalSource(e,t,o){var r,n,s;const i=null!=(r=null==o?void 0:o.extent)?r:null,a=null!=(n=null==o?void 0:o.transform.clone())?n:new O$3;a.origin=[e.x,e.y,null!=(s=e.z)?s:0];const l=e.spatialReference;return new E({external:{source:t,extent:i},transform:a,spatialReference:l})}static createIncomplete(e,o){var r,n;const s=null!=(r=null==o?void 0:o.transform.clone())?r:new O$3;s.origin=[e.x,e.y,null!=(n=e.z)?n:0];const i=e.spatialReference,a=new E({transform:s,spatialReference:i});return a.addResolvingPromise(Promise.reject(new s$1("mesh-incomplete","Mesh resources are not complete"))),a}};e$2([d$3({type:[f$4],json:{write:!0}})],S.prototype,"components",void 0),e$2([d$3({type:O$3,json:{write:!0}})],S.prototype,"transform",void 0),e$2([d$3({constructOnly:!0})],S.prototype,"external",void 0),e$2([d$3({readOnly:!0})],S.prototype,"hasExtent",null),e$2([d$3({readOnly:!0})],S.prototype,"boundingInfo",null),e$2([d$3({readOnly:!0})],S.prototype,"anchor",null),e$2([d$3({readOnly:!0})],S.prototype,"origin",null),e$2([d$3({readOnly:!0,json:{read:!1}})],S.prototype,"extent",null),e$2([d$3({readOnly:!0,json:{read:!1,write:!0,default:!0}})],S.prototype,"hasZ",void 0),e$2([d$3({readOnly:!0,json:{read:!1,write:!0,default:!1}})],S.prototype,"hasM",void 0),e$2([d$3({type:c$4,nonNullable:!0,json:{write:!0}})],S.prototype,"vertexAttributes",void 0),S=E=e$2([i("esri.geometry.Mesh")],S);const I={x:r$3(1,0,0),y:r$3(0,1,0),z:r$3(0,0,1)},B=a$2(),k=a$2(),D=a$2(),W=n(),Z=S;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(s,o,n){const a=n.features;n.features=[],delete n.geometryType;const i=g$3.fromJSON(n);i.geometryType="mesh";const l=i.spatialReference,f=t(s.outFields)||!s.outFields.length?()=>({}):m(s.outFields.includes("*")?null:new Set(s.outFields));for(const e of a){const s=c(e,l,o);r(s)&&i.features.push(new h$2({geometry:s,attributes:f(e)}));}return i}function m(t){return ({attributes:e})=>{if(!e)return {};if(!t)return e;for(const r in e)t.has(r)||delete e[r];return e}}function c(t,e,r){const{status:n,source:a}=g(t);if(0===n)return null;const i=f(t,e,r),u=M$3.fromJSON(t.geometry);u.spatialReference=e;const l=p(t,r);return 1===n?Z.createIncomplete(i,{extent:u,transform:l}):Z.createWithExternalSource(i,a,{extent:u,transform:l})}function f({attributes:t},e,{transformFieldRoles:r}){return new b$2({x:t[r.originX],y:t[r.originY],z:t[r.originZ],spatialReference:e})}function p({attributes:t,assetMappings:e},{transformFieldRoles:r}){var s;return new O$3({translation:[t[r.translationX],t[r.translationY],t[r.translationZ]],rotation:k$4([t[r.rotationX],t[r.rotationY],t[r.rotationZ]],t[r.rotationDeg]),scale:[t[r.scaleX],t[r.scaleY],t[r.scaleZ]],geographic:!(null!=(s=e.flags)&&s.includes("PROJECT_VERTICES"))})}function g(t){if(!t.assetMappings)return {status:0};const e=[],r=new Map;for(const s of t.assetMappings){const t=s.seqNo,o=s.assetName,n=s.assetURL,a=s.conversionStatus;if("FAILED"===a)return {status:0};if("COMPLETED"!==a)return {status:1};if(null==t)e.push({name:o,source:n});else {const s=r.get(o);let a;s?a=s.multipart:(a=[],e.push({name:o,source:{multipart:a}}),r.set(o,{multipart:a})),a[t]=n;}}return {status:2,source:e}}

export { l as meshFeatureSetFromJSON };
