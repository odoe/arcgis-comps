'use strict';

const request = require('./messageBundle-8be88d04.js');
const mat4f64 = require('./mat4f64-fc3339e5.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const common = require('./common-41a349f2.js');
const sphere = require('./sphere-ef7f801f.js');
const intersectorUtils = require('./intersectorUtils-0e8a6b4b.js');
const Texture = require('./Texture-16b1a373.js');
const utils = require('./utils-2d48ea24.js');
const vec3f32 = require('./vec3f32-5485293e.js');
const plane = require('./plane-0816c6c9.js');
const geometryDataUtils = require('./geometryDataUtils-0be35629.js');
const Util = require('./Util-5c6af8a4.js');
const screenUtils = require('./screenUtils-d911ae62.js');
const mat3 = require('./mat3-1d3e0d51.js');
const quatf64 = require('./quatf64-e7a7f39e.js');
const mat4 = require('./mat4-f68486bc.js');
const vec2 = require('./vec2-d000a8cb.js');
const vec2f64 = require('./vec2f64-60b3c97e.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const InterleavedLayout = require('./InterleavedLayout-4132788d.js');
const vec4f64 = require('./vec4f64-d3fa6cd2.js');
const OrderIndependentTransparency = require('./OrderIndependentTransparency-866eb67c.js');
const ElevationInfo = require('./ElevationInfo-d3e3d64f.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const projection = require('./projection-b19710fa.js');
const aaBoundingBox = require('./aaBoundingBox-c372701a.js');
const geometry = require('./geometry-ef17530a.js');
const dehydratedFeatures = require('./dehydratedFeatures-a58f1b86.js');
const floatRGBA = require('./floatRGBA-aa45f7cb.js');
const mathUtils$1 = require('./mathUtils-87b1f941.js');
const triangulationUtils = require('./triangulationUtils-15ab4328.js');
const Graphic = require('./Graphic-0aff6059.js');
const jsonUtils = require('./jsonUtils-b6068079.js');
const vec2f32 = require('./vec2f32-29a5eecf.js');
const FramebufferObject = require('./FramebufferObject-435e1736.js');
const Texture$1 = require('./Texture-95d9d662.js');
const vectorStacks = require('./vectorStacks-f48a010a.js');
const lineSegment = require('./lineSegment-a86bf7bd.js');
const glUtil = require('./glUtil-9df223c0.js');
const MemCache = require('./MemCache-7f5503ec.js');
const Scheduler = require('./Scheduler-72cbcf2a.js');
const BufferView = require('./BufferView-b78db189.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s$d(r){return r?{ray:sphere.d(r.ray),c0:r.c0,c1:r.c1}:{ray:sphere.d(),c0:0,c1:Number.MAX_VALUE}}function p$9(r,c=s$d()){return sphere.l(r,c.ray),c.c0=0,c.c1=Number.MAX_VALUE,c}function b$6(r,c,t=s$d()){const o=mathUtils.s(r.vector);return sphere.k$1(r.origin,c,t.ray),t.c0=0,t.c1=o,t}function g$8(r,c){return v$5(r,r.c0,c)}function l$9(r,c){return v$5(r,r.c1,c)}function v$5(r,c,n){return mathUtils.u(n,r.ray.origin,mathUtils.d(n,r.ray.direction,c))}new vectorStacks.s((()=>({c0:0,c1:0,ray:null})));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function b$5(t){return t?[plane.p(t[0]),plane.p(t[1]),plane.p(t[2]),plane.p(t[3]),plane.p(t[4]),plane.p(t[5])]:[plane.p(),plane.p(),plane.p(),plane.p(),plane.p(),plane.p()]}function y$6(){return [common.n(),common.n(),common.n(),common.n(),common.n(),common.n(),common.n(),common.n()]}function S$3(t,r=b$5()){for(let n=0;n<6;n++)plane.b(t[n],r[n]);}function w$6(t,e,c,u=F$6){const s=mat4.e(vectorStacks.f.get(),e,t);mat4.h(s,s);for(let r=0;r<8;++r){const t=mathUtils.y$1(vectorStacks.r.get(),D$7[r],s);mathUtils.o(u[r],t[0]/t[3],t[1]/t[3],t[2]/t[3]);}x$8(c,u);}function x$8(t,r){plane.y(r[4],r[0],r[3],t[0]),plane.y(r[1],r[5],r[6],t[1]),plane.y(r[4],r[5],r[1],t[2]),plane.y(r[3],r[2],r[6],t[3]),plane.y(r[0],r[1],r[2],t[4]),plane.y(r[5],r[4],r[7],t[5]);}function O$5(t,r){for(let n=0;n<6;n++){const o=t[n];if(o[0]*r[0]+o[1]*r[1]+o[2]*r[2]+o[3]>=r[3])return !1}return !0}function R$6(t,r){return B$5(t,p$9(r,E$5.get()))}function d$8(t,r){for(let n=0;n<6;n++){const o=t[n];if(!plane.N(o,r))return !1}return !0}function q$1(t,r,n){return B$5(t,b$6(r,n,E$5.get()))}function z$7(t,r){for(let n=0;n<6;n++){if(plane.R(t[n],r)>0)return !1}return !0}function A$6(t,r){for(let n=0;n<6;n++)if(plane.K(t[n],r))return !1;return !0}function B$5(t,r){for(let n=0;n<6;n++)if(!plane.L(t[n],r))return !1;return !0}const C$4={bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]},D$7=[vec4f64.r(-1,-1,-1,1),vec4f64.r(1,-1,-1,1),vec4f64.r(1,1,-1,1),vec4f64.r(-1,1,-1,1),vec4f64.r(-1,-1,1,1),vec4f64.r(1,-1,1,1),vec4f64.r(1,1,1,1),vec4f64.r(-1,1,1,1)],E$5=new vectorStacks.s(s$d),F$6=y$6();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i$9{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.store=2;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m$6=1e-5;class y$5{constructor(t){this.options=new i$9,this.results=new intersectorUtils.f,this.transform=new Texture.z,this.tolerance=m$6,this.verticalOffset=null,this._ray={origin:common.n(),direction:common.n()},this._rayEndPoint=common.n(),this._rayStartPointTransformed=common.n(),this._rayEndPointTransformed=common.n(),this.viewingMode=null==t?1:t;}get ray(){return this._ray}get rayBeginPoint(){return this._ray.origin}get rayEndPoint(){return this._rayEndPoint}reset(t,r){this.resetWithRay(sphere.p(t,r,this._ray));}resetWithRay(t){t!==this._ray&&sphere.l(t,this._ray),0!==this.options.verticalOffset?2===this.viewingMode?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,mathUtils.u(this._rayEndPoint,this._ray.origin,this._ray.direction),this.results.init(this._ray);}intersect(r=null,s,i,e,a,o){this.point=s,this.camera=i,this.filterPredicate=a,this.tolerance=null==e?m$6:e;const n=Texture._(this.verticalOffset);if(request.r(r)&&r.length>0){const s=o?t=>{o(t)&&this.intersectObject(t);}:t=>{this.intersectObject(t);};for(const i of r){const r=i.getSpatialQueryAccelerator&&i.getSpatialQueryAccelerator();request.r(r)?(request.r(n)?r.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,s,n):r.forEachAlongRay(this._ray.origin,this._ray.direction,s),this.options.selectionMode&&this.options.hud&&r.forEachDegenerateObject(s)):i.objects.forAll((t=>s(t)));}}this.sortResults();}intersectObject(s){const e=s.geometryRecords;if(!e)return;const a=s.id,o=s.transformation;let n;const h=Texture._(this.verticalOffset);for(const l of e){const{geometry:e,material:c,instanceParameters:m}=l;if(utils.c(m))continue;n=e.id,this.transform.setAndInvalidateLazyTransforms(o,l.getShaderTransformation()),mathUtils.I(this._rayStartPointTransformed,this._ray.origin,this.transform.inverse),mathUtils.I(this._rayEndPointTransformed,this._rayEndPoint,this.transform.inverse);const y=this.transform.transform;request.r(h)&&(h.objectTransform=this.transform),c.intersect(e,m,this.transform.transform,this,this._rayStartPointTransformed,this._rayEndPointTransformed,((i,e,o,h,l,c)=>{if(i>=0){if(request.r(this.filterPredicate)&&!this.filterPredicate(this._ray.origin,this._rayEndPoint,i))return;const f=`Object3D ${a}`;if(l)return void((null==this.results.hud.dist||i<this.results.hud.dist)&&this.results.hud.set(s,f,i,e,mat4f64.a,h,c,n,o));const m=t=>t.set(s,f,i,e,y,h,null,n,o);if((null==this.results.min.drapedLayerOrder||h>=this.results.min.drapedLayerOrder)&&(null==this.results.min.dist||i<this.results.min.dist)&&m(this.results.min),0!==this.options.store&&(null==this.results.max.drapedLayerOrder||h<this.results.max.drapedLayerOrder)&&(null==this.results.max.dist||i>this.results.max.dist)&&m(this.results.max),2===this.options.store){const t=new intersectorUtils.j(this._ray);m(t),this.results.all.push(t);}}}),l.shaderTransformation);}}sortResults(){this.results.all.sort(((t,r)=>t.dist!==r.dist?t.dist-r.dist:t.drapedLayerOrder!==r.drapedLayerOrder?(void 0!==t.drapedLayerOrder?t.drapedLayerOrder:Number.MAX_VALUE)-(void 0!==r.drapedLayerOrder?r.drapedLayerOrder:Number.MAX_VALUE):(void 0!==r.drapedLayerGraphicOrder?r.drapedLayerGraphicOrder:Number.MIN_VALUE)-(void 0!==t.drapedLayerGraphicOrder?t.drapedLayerGraphicOrder:Number.MIN_VALUE)));}}y$5.DEFAULT_TOLERANCE=m$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$c(t){return "point"===t.type}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$b{constructor(e,r=null,t=0){this.array=e,this.spatialReference=r,this.offset=t;}}function a$d(e){return "array"in e}function i$8(t,i,n="ground"){if(t$c(i))return t.getElevation(i.x,i.y,i.z||0,i.spatialReference,n);if(a$d(i)){let r=i.offset;return t.getElevation(i.array[r++],i.array[r++],i.array[r]||0,request.c$2(i.spatialReference,t.spatialReference),n)}return t.getElevation(i[0],i[1],i[2]||0,t.spatialReference,n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$9(e){e.fragment.code.add(Texture.t`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n$d;!function(n){function t(n,t){const c=n[t],o=n[t+1],r=n[t+2];return Math.sqrt(c*c+o*o+r*r)}function c(n,t){const c=n[t],o=n[t+1],r=n[t+2],u=1/Math.sqrt(c*c+o*o+r*r);n[t]*=u,n[t+1]*=u,n[t+2]*=u;}function o(n,t,c){n[t]*=c,n[t+1]*=c,n[t+2]*=c;}function r(n,t,c,o,r,u=t){(r=r||n)[u]=n[t]+c[o],r[u+1]=n[t+1]+c[o+1],r[u+2]=n[t+2]+c[o+2];}function u(n,t,c,o,r,u=t){(r=r||n)[u]=n[t]-c[o],r[u+1]=n[t+1]-c[o+1],r[u+2]=n[t+2]-c[o+2];}n.length=t,n.normalize=c,n.scale=o,n.add=r,n.subtract=u;}(n$d||(n$d={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const x$7=n$d;var z$6,M$6,U$5,b$4;!function(t){const e=.5,n=[[-e,-e,e],[e,-e,e],[e,e,e],[-e,e,e],[-e,-e,-e],[e,-e,-e],[e,e,-e],[-e,e,-e]],o=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],r=[0,0,1,0,1,1,0,1],a=new Uint16Array([0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5]),s=new Uint16Array(36);for(let c=0;c<6;c++)for(let t=0;t<6;t++)s[6*c+t]=c;const i=new Uint16Array(36);for(let c=0;c<6;c++)i[6*c+0]=0,i[6*c+1]=1,i[6*c+2]=2,i[6*c+3]=2,i[6*c+4]=3,i[6*c+5]=0;function l(t){Array.isArray(t)||(t=[t,t,t]);const e=new Array(24);for(let o=0;o<8;o++)e[3*o]=n[o][0]*t[0],e[3*o+1]=n[o][1]*t[1],e[3*o+2]=n[o][2]*t[2];return new Texture.u$1([["position",{size:3,data:e,exclusive:!0}],["normal",{size:3,data:o}],["uv0",{size:2,data:r}]],[["position",a],["normal",s],["uv0",i]])}t.createGeometry=l;}(z$6||(z$6={})),function(t){const e=.5,n=[[-e,0,-e],[e,0,-e],[e,0,e],[-e,0,e],[0,-e,0],[0,e,0]],o=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],r=new Uint16Array([5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0]),a=new Uint16Array([0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]);function s(t){Array.isArray(t)||(t=[t,t,t]);const e=new Array(18);for(let o=0;o<6;o++)e[3*o]=n[o][0]*t[0],e[3*o+1]=n[o][1]*t[1],e[3*o+2]=n[o][2]*t[2];return new Texture.u$1([["position",{size:3,data:e,exclusive:!0}],["normal",{size:3,data:o}]],[["position",r],["normal",a]])}t.createGeometry=s;}(M$6||(M$6={})),function(o){const r=.5,a=0,s=vec3f32.t(-r,a,-r),i=vec3f32.t(r,a,-r),l=vec3f32.t(0,a,r),f=vec3f32.t(0,a+r,0),h=vec3f32.n(),y=vec3f32.n(),m=vec3f32.n(),p=vec3f32.n(),g=vec3f32.n();mathUtils.c(h,s,f),mathUtils.c(y,s,i),mathUtils._(m,h,y),mathUtils.j$1(m,m),mathUtils.c(h,i,f),mathUtils.c(y,i,l),mathUtils._(p,h,y),mathUtils.j$1(p,p),mathUtils.c(h,l,f),mathUtils.c(y,l,s),mathUtils._(g,h,y),mathUtils.j$1(g,g);const A=[s,i,l,f],w=[0,-1,0,m[0],m[1],m[2],p[0],p[1],p[2],g[0],g[1],g[2]],v=[0,1,2,3,1,0,3,2,1,3,0,2],x=[0,0,0,1,1,1,2,2,2,3,3,3];function z(t){Array.isArray(t)||(t=[t,t,t]);const e=new Array(12);for(let n=0;n<4;n++)e[3*n]=A[n][0]*t[0],e[3*n+1]=A[n][1]*t[1],e[3*n+2]=A[n][2]*t[2];return new Texture.u$1([["position",{size:3,data:e,exclusive:!0}],["normal",{size:3,data:w}]],[["position",new Uint16Array(v)],["normal",new Uint16Array(x)]])}o.createGeometry=z;}(U$5||(U$5={})),function(A){function b(t,e,n,o={uv:!0}){const r=-Math.PI,a=2*Math.PI,s=-Math.PI/2,i=Math.PI,l=Math.max(3,Math.floor(e)),c=Math.max(2,Math.floor(n)),u=(l+1)*(c+1),f=new Float32Array(3*u),h=new Float32Array(3*u),y=new Float32Array(2*u),m=[];let p=0;for(let d=0;d<=c;d++){const e=[],n=d/c,o=s+n*i,u=Math.cos(o);for(let s=0;s<=l;s++){const i=s/l,c=r+i*a,m=Math.cos(c)*u,g=Math.sin(o),A=-Math.sin(c)*u;f[3*p]=m*t,f[3*p+1]=g*t,f[3*p+2]=A*t,h[3*p]=m,h[3*p+1]=g,h[3*p+2]=A,y[2*p]=i,y[2*p+1]=n,e.push(p),++p;}m.push(e);}const g=new Uint32Array(2*l*(c-1)*3);p=0;for(let d=0;d<c;d++)for(let t=0;t<l;t++){const e=m[d][t],n=m[d][t+1],o=m[d+1][t+1],r=m[d+1][t];0===d?(g[p++]=e,g[p++]=o,g[p++]=r):d===c-1?(g[p++]=e,g[p++]=n,g[p++]=o):(g[p++]=e,g[p++]=n,g[p++]=o,g[p++]=o,g[p++]=r,g[p++]=e);}const A=[["position",g],["normal",g]],w=[["position",{size:3,data:f,exclusive:!0}],["normal",{size:3,data:h,exclusive:!0}]];return o.uv&&(w.push(["uv0",{size:2,data:y,exclusive:!0}]),A.push(["uv0",g])),o.offset&&(A[0][0]="offset",w[0][0]="offset",A.push(["position",new Uint32Array(g.length)]),w.push(["position",{size:3,data:Float64Array.from(o.offset),exclusive:!0}])),new Texture.u$1(w,A)}function P(t,e,n){const o=t;let r,a;if(n)r=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=new Uint32Array([0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1]);else {const t=o*(1+Math.sqrt(5))/2;r=[-o,t,0,o,t,0,-o,-t,0,o,-t,0,0,-o,t,0,o,t,0,-o,-t,0,o,-t,t,0,-o,t,0,o,-t,0,-o,-t,0,o],a=new Uint32Array([0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]);}for(let f=0;f<r.length;f+=3)x$7.scale(r,f,t/x$7.length(r,f));let s={};function i(e,n){e>n&&([e,n]=[n,e]);const o=e.toString()+"."+n.toString();if(s[o])return s[o];let a=r.length;return r.length+=3,x$7.add(r,3*e,r,3*n,r,a),x$7.scale(r,a,t/x$7.length(r,a)),a/=3,s[o]=a,a}for(let f=0;f<e;f++){const t=a.length,e=new Uint32Array(4*t);for(let n=0;n<t;n+=3){const t=a[n],o=a[n+1],r=a[n+2],s=i(t,o),l=i(o,r),c=i(r,t),u=4*n;e[u]=t,e[u+1]=s,e[u+2]=c,e[u+3]=o,e[u+4]=l,e[u+5]=s,e[u+6]=r,e[u+7]=c,e[u+8]=l,e[u+9]=s,e[u+10]=l,e[u+11]=c;}a=e,s={};}const l=new Float32Array(r);for(let f=0;f<l.length;f+=3)x$7.normalize(l,f);const c=[["position",a],["normal",a]],u=[["position",{size:3,data:new Float32Array(r),exclusive:!0}],["normal",{size:3,data:l,exclusive:!0}]];return new Texture.u$1(u,c)}function I(t,e,n,o,r,a,s){const i=e?[e[0],e[1],e[2]]:[0,0,0],l=t?[t[0],t[1],t[2]]:[0,0,1];a=a||[0,0];const c=n?[255*n[0],255*n[1],255*n[2],n.length>3?255*n[3]:255]:[255,255,255,255],u=null!=o&&2===o.length?o:[1,1],f=[["position",{size:3,data:i,exclusive:!0}],["normal",{size:3,data:l,exclusive:!0}],["uv0",{size:a.length,data:a}],["color",{size:4,data:c,exclusive:!0}],["size",{size:2,data:u}]];if(null!=r){const t=new Float32Array([r[0],r[1],r[2],r[3]]);f.push(["auxpos1",{size:4,data:t}]);}if(null!=s){const t=new Float32Array([s[0],s[1],s[2],s[3]]);f.push(["auxpos2",{size:4,data:t}]);}return new Texture.u$1(f,null,1)}function j(t,e,n,o,r,a,s,i){if(null!=t){const{data:e}=i.getMutableAttribute("normal");e[0]=t[0],e[1]=t[1],e[2]=t[2];}if(null!=e){const{data:t}=i.getMutableAttribute("position");t[0]=e[0],t[1]=e[1],t[2]=e[2];}if(null!=n){const{data:t}=i.getMutableAttribute("color");t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3];}if(null!=o){const{data:t}=i.getMutableAttribute("size");t[0]=o[0],t[1]=o[1];}if(null!=r){const{data:t}=i.getMutableAttribute("auxpos1");t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3];}if(null!=a){const{data:t}=i.getMutableAttribute("uv0");t[0]=a[0],t[1]=a[1];}if(null!=s){const{data:t}=i.getMutableAttribute("auxpos2");t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3];}}function k(t,e){const n=new Float32Array(3*t.length),o=new Float32Array(e?3*t.length:3),r=new Uint32Array(t.length),a=new Uint32Array(t.length);for(let s=0;s<t.length;s++)n[3*s]=t[s][0],n[3*s+1]=t[s][1],n[3*s+2]=t[s][2],e&&(o[3*s]=e[s][0],o[3*s+1]=e[s][1],o[3*s+2]=e[s][2]),r[s]=s,a[s]=0;e||(o[0]=0,o[1]=1,o[2]=0);return new Texture.u$1([["position",{size:3,data:n,exclusive:!0}],["normal",{size:3,data:o,exclusive:!0}],["uv0",{size:2,data:[0,0],exclusive:!0}]],[["position",r],["normal",e?r:a],["uv0",a]],1)}function S(){const t=[0,0,0,0,0,100,100,0,0],e=new Uint16Array([0,1,2]),n=[0,1,0],o=new Uint16Array([0,0,0]),r=[0,0],a=new Uint16Array([0,0,0]);return new Texture.u$1([["position",{size:3,data:t,exclusive:!0}],["normal",{size:3,data:n,exclusive:!0}],["uv0",{size:2,data:r,exclusive:!0}]],[["position",e],["normal",o],["uv0",a]])}A.createBoxGeometry=z$6.createGeometry,A.createDiamondGeometry=M$6.createGeometry,A.createTetrahedronGeometry=U$5.createGeometry,A.createSphereGeometry=b,A.createPolySphereGeometry=P,A.createPointGeometry=I,A.updatePointGeometry=j,A.createPointArrayGeometry=k,A.createTriangleGeometry=S;const T=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]];function B(t=T){const e=new Array(12);for(let a=0;a<4;a++)for(let n=0;n<3;n++)e[3*a+n]=t[a][n];const n=new Uint32Array([0,1,2,2,3,0]),o=[0,0,1],r=new Uint32Array([0,0,0,0,0,0]);return new Texture.u$1([["position",{size:3,data:e,exclusive:!0}],["normal",{size:3,data:o,exclusive:!0}],["uv0",{size:2,data:[0,0,1,0,1,1,0,1],exclusive:!0}],["color",{size:4,data:[255,255,255,255],exclusive:!0}]],[["position",n],["normal",r],["uv0",n],["color",r]])}function D(t,e,n,o,r=!0,a=!0){let s=0;const i=e,l=t;let u=vec3f32.t(0,s,0),f=vec3f32.t(0,s+l,0),h=vec3f32.t(0,-1,0),y=vec3f32.t(0,1,0);o&&(s=l,f=vec3f32.t(0,0,0),u=vec3f32.t(0,s,0),h=vec3f32.t(0,1,0),y=vec3f32.t(0,-1,0));const m=[f,u],p=[h,y],g=n+2,A=Math.sqrt(l*l+i*i);if(o)for(let d=n-1;d>=0;d--){const t=d*(2*Math.PI/n),e=vec3f32.t(Math.cos(t)*i,s,Math.sin(t)*i);m.push(e);const o=vec3f32.t(l*Math.cos(t)/A,-i/A,l*Math.sin(t)/A);p.push(o);}else for(let d=0;d<n;d++){const t=d*(2*Math.PI/n),e=vec3f32.t(Math.cos(t)*i,s,Math.sin(t)*i);m.push(e);const o=vec3f32.t(l*Math.cos(t)/A,i/A,l*Math.sin(t)/A);p.push(o);}const w=new Uint32Array(2*(n+2)*3),v=new Uint32Array(2*(n+2)*3);let x=0,z=0;if(r){for(let t=3;t<m.length;t++)w[x++]=1,w[x++]=t-1,w[x++]=t,v[z++]=0,v[z++]=0,v[z++]=0;w[x++]=m.length-1,w[x++]=2,w[x++]=1,v[z++]=0,v[z++]=0,v[z++]=0;}if(a){for(let t=3;t<m.length;t++)w[x++]=t,w[x++]=t-1,w[x++]=0,v[z++]=t,v[z++]=t-1,v[z++]=1;w[x++]=0,w[x++]=2,w[x++]=m.length-1,v[z++]=1,v[z++]=2,v[z++]=p.length-1;}const M=new Float32Array(3*g);for(let c=0;c<g;c++)M[3*c]=m[c][0],M[3*c+1]=m[c][1],M[3*c+2]=m[c][2];const U=new Float32Array(3*g);for(let c=0;c<g;c++)U[3*c]=p[c][0],U[3*c+1]=p[c][1],U[3*c+2]=p[c][2];return new Texture.u$1([["position",{size:3,data:M,exclusive:!0}],["normal",{size:3,data:U,exclusive:!0}]],[["position",w],["normal",v]])}function q(t,i,l,h,y,m){const p=h?vec3f32.r(h):vec3f32.t(1,0,0),g=y?vec3f32.r(y):vec3f32.t(0,0,0);m=null==m||m;const A=vec3f32.n();mathUtils.j$1(A,p);const w=vec3f32.n();mathUtils.d(w,A,Math.abs(t));const v=vec3f32.n();mathUtils.d(v,w,-.5),mathUtils.u(v,v,g);const x=vec3f32.t(0,1,0);Math.abs(1-mathUtils.z(A,x))<.2&&mathUtils.o(x,0,0,1);const z=vec3f32.n();mathUtils._(z,A,x),mathUtils.j$1(z,z),mathUtils._(x,z,A);const M=2*l+(m?2:0),U=l+(m?2:0),b=new Float32Array(3*M),G=new Float32Array(3*U),F=new Float32Array(2*M),P=new Uint32Array(3*l*(m?4:2)),I=new Uint32Array(3*l*(m?4:2));m&&(b[3*(M-2)+0]=v[0],b[3*(M-2)+1]=v[1],b[3*(M-2)+2]=v[2],F[2*(M-2)]=0,F[2*(M-2)+1]=0,b[3*(M-1)+0]=b[3*(M-2)+0]+w[0],b[3*(M-1)+1]=b[3*(M-2)+1]+w[1],b[3*(M-1)+2]=b[3*(M-2)+2]+w[2],F[2*(M-1)]=1,F[2*(M-1)+1]=1,G[3*(U-2)+0]=-A[0],G[3*(U-2)+1]=-A[1],G[3*(U-2)+2]=-A[2],G[3*(U-1)+0]=A[0],G[3*(U-1)+1]=A[1],G[3*(U-1)+2]=A[2]);const j=function(t,e,n){P[t]=e,I[t]=n;};let k=0;const S=vec3f32.n(),T=vec3f32.n();for(let e=0;e<l;e++){const t=e*(2*Math.PI/l);mathUtils.d(S,x,Math.sin(t)),mathUtils.d(T,z,Math.cos(t)),mathUtils.u(S,S,T),G[3*e+0]=S[0],G[3*e+1]=S[1],G[3*e+2]=S[2],mathUtils.d(S,S,i),mathUtils.u(S,S,v),b[3*e+0]=S[0],b[3*e+1]=S[1],b[3*e+2]=S[2],F[2*e+0]=e/l,F[2*e+1]=0,b[3*(e+l)+0]=b[3*e+0]+w[0],b[3*(e+l)+1]=b[3*e+1]+w[1],b[3*(e+l)+2]=b[3*e+2]+w[2],F[2*(e+l)+0]=e/l,F[2*e+1]=1;const n=(e+1)%l;j(k++,e,e),j(k++,e+l,e),j(k++,n,n),j(k++,n,n),j(k++,e+l,e),j(k++,n+l,n);}if(m){for(let t=0;t<l;t++){const e=(t+1)%l;j(k++,M-2,U-2),j(k++,t,U-2),j(k++,e,U-2);}for(let t=0;t<l;t++){const e=(t+1)%l;j(k++,t+l,U-1),j(k++,M-1,U-1),j(k++,e+l,U-1);}}return new Texture.u$1([["position",{size:3,data:b,exclusive:!0}],["normal",{size:3,data:G,exclusive:!0}],["uv0",{size:2,data:F,exclusive:!0}]],[["position",P],["normal",I],["uv0",P]])}function E(t,e,n,o,r){n=n||10,o=null==o||o,Util.i(t.length>1);const a=[[0,0,0]],s=[],i=[];for(let l=0;l<n;l++){s.push([0,-l-1,-(l+1)%n-1]);const t=l/n*2*Math.PI;i.push([Math.cos(t)*e,Math.sin(t)*e]);}return A.createPathExtrusionGeometry(i,t,a,s,o,r)}function C(a,l,f,A,w,v=vec3f32.t(0,0,0)){const x=a.length,z=new Float32Array(l.length*x*3+(6*f.length||0)),M=new Float32Array(l.length*x*3+(f?6:0)),U=(l.length-1)*x*6+3*A.length*2,b=new Uint32Array(U),F=new Uint32Array(U);let P=0,I=0,j=0,k=0;const S=vec3f32.n(),T=vec3f32.n(),B=vec3f32.n(),D=vec3f32.n(),q=vec3f32.n(),E=vec3f32.n(),C=vec3f32.n(),O=common.n(),V=vec3f32.n(),H=vec3f32.n(),J=vec3f32.n(),K=vec3f32.n(),N=vec3f32.n(),Q=plane.p();mathUtils.o(V,0,1,0),mathUtils.c(T,l[1],l[0]),mathUtils.j$1(T,T),w?(mathUtils.u(O,l[0],v),mathUtils.j$1(B,O)):mathUtils.o(B,0,0,1),L(T,B,V,V,q,B,G$2),mathUtils.r(D,B),mathUtils.r(K,q);for(let t=0;t<f.length;t++)mathUtils.d(E,q,f[t][0]),mathUtils.d(O,B,f[t][2]),mathUtils.u(E,E,O),mathUtils.u(E,E,l[0]),z[P++]=E[0],z[P++]=E[1],z[P++]=E[2];M[I++]=-T[0],M[I++]=-T[1],M[I++]=-T[2];for(let t=0;t<A.length;t++)b[j++]=A[t][0]>0?A[t][0]:-A[t][0]-1+f.length,b[j++]=A[t][1]>0?A[t][1]:-A[t][1]-1+f.length,b[j++]=A[t][2]>0?A[t][2]:-A[t][2]-1+f.length,F[k++]=0,F[k++]=0,F[k++]=0;let R=f.length;const W=f.length-1;for(let s=0;s<l.length;s++){let c=!1;if(s>0){mathUtils.r(S,T),s<l.length-1?(mathUtils.c(T,l[s+1],l[s]),mathUtils.j$1(T,T)):c=!0,mathUtils.u(H,S,T),mathUtils.j$1(H,H),mathUtils.u(J,l[s-1],D),plane.v(l[s],H,Q);plane.D(Q,sphere.j(J,S),O)?(mathUtils.c(O,O,l[s]),mathUtils.j$1(B,O),mathUtils._(q,H,B),mathUtils.j$1(q,q)):L(H,D,K,V,q,B,G$2),mathUtils.r(D,B),mathUtils.r(K,q);}w&&(mathUtils.u(O,l[s],v),mathUtils.j$1(N,O));for(let t=0;t<x;t++)if(mathUtils.d(E,q,a[t][0]),mathUtils.d(O,B,a[t][1]),mathUtils.u(E,E,O),mathUtils.j$1(C,E),M[I++]=C[0],M[I++]=C[1],M[I++]=C[2],mathUtils.u(E,E,l[s]),z[P++]=E[0],z[P++]=E[1],z[P++]=E[2],!c){const e=(t+1)%x;b[j++]=R+t,b[j++]=R+x+t,b[j++]=R+e,b[j++]=R+e,b[j++]=R+x+t,b[j++]=R+x+e;for(let t=0;t<6;t++)F[k++]=b[j-6+t]-W;}R+=x;}const X=l[l.length-1];for(let t=0;t<f.length;t++)mathUtils.d(E,q,f[t][0]),mathUtils.d(O,B,f[t][1]),mathUtils.u(E,E,O),mathUtils.u(E,E,X),z[P++]=E[0],z[P++]=E[1],z[P++]=E[2];const Y=I/3;M[I++]=T[0],M[I++]=T[1],M[I++]=T[2];const Z=R-x;for(let t=0;t<A.length;t++)b[j++]=A[t][0]>=0?R+A[t][0]:-A[t][0]-1+Z,b[j++]=A[t][2]>=0?R+A[t][2]:-A[t][2]-1+Z,b[j++]=A[t][1]>=0?R+A[t][1]:-A[t][1]-1+Z,F[k++]=Y,F[k++]=Y,F[k++]=Y;return new Texture.u$1([["position",{size:3,data:z,exclusive:!0}],["normal",{size:3,data:M,exclusive:!0}]],[["position",b],["normal",F]])}function O(t,e,n){Util.i(t.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),Util.i(3===t[0].length,"createPolylineGeometry(): malformed vertex"),Util.i(null==e||e.length===t.length,"createPolylineGeometry: need same number of points and normals"),Util.i(null==e||3===e[0].length,"createPolylineGeometry(): malformed normal");const o=new Float64Array(3*t.length),r=new Uint32Array(2*(t.length-1));let a=0,s=0;for(let c=0;c<t.length;c++){for(let e=0;e<3;e++)o[a++]=t[c][e];c>0&&(r[s++]=c-1,r[s++]=c);}const i=[],l=[];if(i.push(["position",r]),l.push(["position",{size:3,data:o,exclusive:!0}]),e){const n=new Float32Array(3*e.length);let o=0;for(let r=0;r<t.length;r++)for(let t=0;t<3;t++)n[o++]=e[r][t];i.push(["normal",r]),l.push(["normal",{size:3,data:n,exclusive:!0}]);}return n&&(l.push(["color",{size:4,data:n}]),i.push(["color",geometryDataUtils.l(n.length/4)])),new Texture.u$1(l,i,2)}function V(t,e,n,o,r=0){const a=new Array(18),s=[[-e,r,o/2],[n,r,o/2],[0,t+r,o/2],[-e,r,-o/2],[n,r,-o/2],[0,t+r,-o/2]],i=new Uint16Array([0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5]);for(let l=0;l<6;l++)a[3*l]=s[l][0],a[3*l+1]=s[l][1],a[3*l+2]=s[l][2];return new Texture.u$1([["position",{size:3,data:a,exclusive:!0}]],[["position",i]])}function H(t,e){const n=t.getMutableAttribute("position").data;for(let o=0;o<n.length;o+=3){const t=n[o],r=n[o+1],a=n[o+2];mathUtils.o(F$5,t,r,a),mathUtils.I(F$5,F$5,e),n[o]=F$5[0],n[o+1]=F$5[1],n[o+2]=F$5[2];}}function J(t,e=t){const n=t.vertexAttributes,o=n.get("position").data,r=n.get("normal").data;if(r){const t=e.getMutableAttribute("normal").data;for(let e=0;e<r.length;e+=3){const n=r[e+1];t[e+1]=-r[e+2],t[e+2]=n;}}if(o){const t=e.getMutableAttribute("position").data;for(let e=0;e<o.length;e+=3){const n=o[e+1];t[e+1]=-o[e+2],t[e+2]=n;}}return e}function K(t,o,r,s,i){return !(Math.abs(mathUtils.z(o,t))>i)&&(mathUtils._(r,t,o),mathUtils.j$1(r,r),mathUtils._(s,r,t),mathUtils.j$1(s,s),!0)}function L(t,e,n,o,r,a,s){return K(t,e,r,a,s)||K(t,n,r,a,s)||K(t,o,r,a,s)}A.createSquareGeometry=B,A.createConeGeometry=D,A.createCylinderGeometry=q,A.createTubeGeometry=E,A.createPathExtrusionGeometry=C,A.createPolylineGeometry=O,A.createExtrudedTriangle=V,A.transformInPlace=H,A.cgToGIS=J,A.makeOrthoBasisDirUp=K,A.makeOrthoBasisDirUpFallback=L;}(b$4||(b$4={}));const G$2=.99619469809,F$5=vec3f32.n(),P$5=b$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c$9(c){const i=Texture.t`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`,o=Texture.t`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`;c.vertex.code.add(i),c.vertex.code.add(o),c.fragment.code.add(i),c.fragment.code.add(o);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i$7{constructor(t=common.n()){this.intensity=t;}}class c$8{constructor(i=common.n(),c=common.r(.57735,.57735,.57735)){this.intensity=i,this.direction=c;}}class o$e{constructor(i=common.n(),c=common.r(.57735,.57735,.57735),o=!0){this.intensity=i,this.direction=c,this.castShadows=o;}}class r$h{constructor(){this.r=[0],this.g=[0],this.b=[0];}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const B$4=request.s$1.getLogger("esri.views.3d.webgl-engine.lib.Camera");class J$4{constructor(t=null,i=null,r=null){this._viewUp=common.n(),this._viewForward=common.n(),this._viewRight=common.n(),this._ray=sphere.d(),this._viewport=vec4f64.r(0,0,1,1),this._padding=vec4f64.r(0,0,0,0),this._fov=55/180*Math.PI,this._nearFar=vec2f64.t(1,1e3),this._viewDirty=!0,this._viewMatrix=mat4f64.e(),this._projectionDirty=!0,this._projectionMatrix=mat4f64.e(),this._viewProjectionDirty=!0,this._viewProjectionMatrix=mat4f64.e(),this._viewInverseTransposeMatrixDirty=!0,this._viewInverseTransposeMatrix=mat4f64.e(),this._frustumDirty=!0,this._frustum=b$5(),this._fullViewport=vec4f64.n(),this.pixelRatio=1,this.relativeElevation=0,this.distanceFromSurface=0,request.r(t)&&mathUtils.r(this._ray.origin,t),this._center=request.r(i)?common.t$1(i):common.n(),this._up=request.r(r)?common.t$1(r):common.r(0,0,1);}get eye(){return this._ray.origin}set eye(t){this._compareAndSetView(t,this._ray.origin);}get center(){return this._center}set center(t){this._compareAndSetView(t,this._center);}get ray(){return mathUtils.c(this._ray.direction,this.center,this.eye),this._ray}get up(){return this._up}set up(t){this._compareAndSetView(t,this._up);}get viewMatrix(){return this._ensureViewClean(),this._viewMatrix}set viewMatrix(t){mat4.n(this._viewMatrix,t),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0;}get viewForward(){return this._ensureViewClean(),this._viewForward}get viewUp(){return this._ensureViewClean(),this._viewUp}get viewRight(){return this._ensureViewClean(),this._viewRight}get nearFar(){return this._nearFar}get near(){return this._nearFar[0]}set near(t){this._nearFar[0]!==t&&(this._nearFar[0]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0);}get far(){return this._nearFar[1]}set far(t){this._nearFar[1]!==t&&(this._nearFar[1]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0);}get viewport(){return this._viewport}set viewport(t){this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3];}get x(){return this._viewport[0]}set x(t){t+=this._padding[3],this._viewport[0]!==t&&(this._viewport[0]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0);}get y(){return this._viewport[1]}set y(t){t+=this._padding[2],this._viewport[1]!==t&&(this._viewport[1]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0);}get width(){return this._viewport[2]}set width(t){this._viewport[2]!==t&&(this._viewport[2]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0);}get height(){return this._viewport[3]}set height(t){this._viewport[3]!==t&&(this._viewport[3]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0);}get fullWidth(){return this._viewport[2]+this._padding[1]+this._padding[3]}set fullWidth(t){this.width=t-(this._padding[1]+this._padding[3]);}get fullHeight(){return this._viewport[3]+this._padding[0]+this._padding[2]}set fullHeight(t){this.height=t-(this._padding[0]+this._padding[2]);}get fullViewport(){return this._fullViewport[0]=this._viewport[0]-this._padding[3],this._fullViewport[1]=this._viewport[1]-this._padding[2],this._fullViewport[2]=this.fullWidth,this._fullViewport[3]=this.fullHeight,this._fullViewport}get aspect(){return this.width/this.height}get padding(){return this._padding}set padding(t){this._padding[0]===t[0]&&this._padding[1]===t[1]&&this._padding[2]===t[2]&&this._padding[3]===t[3]||(this._viewport[0]+=t[3]-this._padding[3],this._viewport[1]+=t[2]-this._padding[2],this._viewport[2]-=t[1]+t[3]-(this._padding[1]+this._padding[3]),this._viewport[3]-=t[0]+t[2]-(this._padding[0]+this._padding[2]),mathUtils.a$1(this._padding,t),this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0);}get viewProjectionMatrix(){return this._viewProjectionDirty&&(mat4.e(this._viewProjectionMatrix,this.projectionMatrix,this.viewMatrix),this._viewProjectionDirty=!1),this._viewProjectionMatrix}get projectionMatrix(){if(this._projectionDirty){const t=this.width,i=this.height,e=this.near*Math.tan(this.fovY/2),r=e*this.aspect;mat4.A(this._projectionMatrix,-r*(1+2*this._padding[3]/t),r*(1+2*this._padding[1]/t),-e*(1+2*this._padding[2]/i),e*(1+2*this._padding[0]/i),this.near,this.far),this._projectionDirty=!1;}return this._projectionMatrix}set projectionMatrix(t){mat4.n(this._projectionMatrix,t),this._projectionDirty=!1,this._viewProjectionDirty=!0,this._frustumDirty=!0;}get fov(){return this._fov}set fov(t){this._fov=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0;}get fovX(){return Util.B(this._fov,this.width,this.height)}set fovX(t){this._fov=Util.$(t,this.width,this.height),this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0;}get fovY(){return Util.C(this._fov,this.width,this.height)}set fovY(t){this._fov=Util.z(t,this.width,this.height),this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0;}get distance(){return mathUtils.q(this._center,this.eye)}get frustum(){return this._recomputeFrustum(),this._frustum}get viewInverseTransposeMatrix(){return (this._viewInverseTransposeMatrixDirty||this._viewDirty)&&(mat4.h(this._viewInverseTransposeMatrix,this.viewMatrix),mat4.o(this._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),this._viewInverseTransposeMatrix}depthNDCToWorld(t){const i=2*t-1;return 2*this.near*this.far/(this.far+this.near-i*(this.far-this.near))}get perRenderPixelRatio(){return Math.tan(this.fovX/2)/(this.width/2)}get perScreenPixelRatio(){return this.perRenderPixelRatio*this.pixelRatio}get aboveGround(){return this.relativeElevation&&this.relativeElevation>=0}copyFrom(t){mathUtils.r(this._ray.origin,t.eye),mathUtils.r(this._center,t.center),mathUtils.r(this._up,t.up),mathUtils.a$1(this._viewport,t.viewport),mathUtils.a$1(this._padding,t.padding),vec2.a(this._nearFar,t.nearFar),this._fov=t.fov,this.relativeElevation=t.relativeElevation,this.distanceFromSurface=t.distanceFromSurface;const i=t;return this._viewDirty=i._viewDirty,this._viewDirty||(mat4.n(this._viewMatrix,t.viewMatrix),mathUtils.r(this._viewRight,t.viewRight),mathUtils.r(this._viewUp,t.viewUp),mathUtils.r(this._viewForward,t.viewForward)),i._projectionDirty?this._projectionDirty=!0:(mat4.n(this._projectionMatrix,t.projectionMatrix),this._projectionDirty=!1),this._viewProjectionDirty=!0,this._frustumDirty=i._frustumDirty,this._frustumDirty||(S$3(t.frustum,this._frustum),this._frustumDirty=!1),i._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:(mat4.n(this._viewInverseTransposeMatrix,t.viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),mathUtils.a$1(this._fullViewport,t.fullViewport),this.pixelRatio=t.pixelRatio,this}copyViewFrom(t){this.eye=t.eye,this.center=t.center,this.up=t.up;}clone(){return (new J$4).copyFrom(this)}equals(t){return mathUtils.F(this.eye,t.eye)&&mathUtils.F(this._center,t.center)&&mathUtils.F(this._up,t.up)&&mathUtils.D(this._viewport,t.viewport)&&mathUtils.D(this._padding,t.padding)&&vec2.k(this._nearFar,t.nearFar)&&this._fov===t.fov&&this.pixelRatio===t.pixelRatio&&this.relativeElevation===t.relativeElevation}almostEquals(t){if(this.pixelRatio!==t.pixelRatio||Math.abs(t.fov-this._fov)>=.001)return !1;const i=5e-4,e=1-1e-10;mathUtils.J(Q$3,t.eye,t.center),mathUtils.J(Z$6,this.eye,this._center);const r=mathUtils.z(Q$3,Z$6),s=mathUtils.Z(Q$3),h=mathUtils.Z(Z$6);return r*r>=e*s*h&&mathUtils.X(t.eye,this.eye)<Math.max(s,h)*i*i&&mathUtils.b$1(t.padding,this._padding)<.5&&mathUtils.b$1(t.viewport,this._viewport)<.5}computeRenderPixelSizeAt(t){return this.computeRenderPixelSizeAtDist(this.viewDirectionDistance(t))}computeRenderPixelSizeAtDist(t){return t*this.perRenderPixelRatio}computeScreenPixelSizeAt(t){return this.computeScreenPixelSizeAtDist(this.viewDirectionDistance(t))}viewDirectionDistance(t){return Math.abs(sphere.e(this.viewForward,mathUtils.c(Q$3,t,this.eye)))}computeScreenPixelSizeAtDist(t){return t*this.perScreenPixelRatio}computeDistanceFromRadius(t,i){return t/Math.tan(Math.min(this.fovX,this.fovY)/(2*(i||1)))}getScreenCenter(t=screenUtils.i()){return t[0]=(this.padding[3]+this.width/2)/this.pixelRatio,t[1]=(this.padding[0]+this.height/2)/this.pixelRatio,t}getRenderCenter(t,i=.5,e=.5){return t[0]=this.padding[3]+this.width*i,t[1]=this.padding[2]+this.height*e,t[2]=.5,t}setGLViewport(t){const i=this.viewport,e=this.padding;t.setViewport(i[0]-e[3],i[1]-e[2],i[2]+e[1]+e[3],i[3]+e[0]+e[2]);}applyProjection(t,e,r=!1){t!==K$3&&mathUtils.r(K$3,t),K$3[3]=1,r&&(e[2]=-K$3[2]),mathUtils.y$1(K$3,K$3,this.projectionMatrix),mathUtils.d(K$3,K$3,1/Math.abs(K$3[3]));const s=this.fullViewport;return e[0]=mathUtils.s$1(0,s[0]+s[2],.5+.5*K$3[0]),e[1]=mathUtils.s$1(0,s[1]+s[3],.5+.5*K$3[1]),r||(e[2]=.5*(K$3[2]+1)),e}projectToScreen(t,i){this.projectToRenderScreen(t,$$4),this.renderToScreen($$4,i);}projectToRenderScreen(t,e){if(K$3[0]=t[0],K$3[1]=t[1],K$3[2]=t[2],K$3[3]=1,mathUtils.y$1(K$3,K$3,this.viewProjectionMatrix),0===K$3[3])return null;mathUtils.d(K$3,K$3,1/Math.abs(K$3[3]));const r=this.fullViewport;return "x"in e?(e.x=mathUtils.s$1(0,r[0]+r[2],.5+.5*K$3[0]),e.y=mathUtils.s$1(0,r[1]+r[3],.5+.5*K$3[1])):(e[0]=mathUtils.s$1(0,r[0]+r[2],.5+.5*K$3[0]),e[1]=mathUtils.s$1(0,r[1]+r[3],.5+.5*K$3[1]),e.length>2&&(e[2]=.5*(K$3[2]+1))),e}unprojectFromScreen(t,i){return this.unprojectFromRenderScreen(this.screenToRender(t,$$4),i)}unprojectFromRenderScreen(t,i){if(mat4.e(O$4,this.projectionMatrix,this.viewMatrix),!mat4.h(O$4,O$4))return null;const e=this.fullViewport;return K$3[0]=2*(t[0]-e[0])/e[2]-1,K$3[1]=2*(t[1]-e[1])/e[3]-1,K$3[2]=2*t[2]-1,K$3[3]=1,mathUtils.y$1(K$3,K$3,O$4),0===K$3[3]?null:(i[0]=K$3[0]/K$3[3],i[1]=K$3[1]/K$3[3],i[2]=K$3[2]/K$3[3],i)}constrainWindowSize(t,i,e,r=e){const s=t*this.pixelRatio,h=i*this.pixelRatio,n=Math.max(s-e/2,0),o=Math.max(this.fullHeight-h-r/2,0),a=-Math.min(s-e/2,0),_=-Math.min(this.fullHeight-h-r/2,0);return [n,o,e-a- -Math.min(this.fullWidth-s-e/2,0),r-_- -Math.min(h-r/2,0)]}computeUp(t){1===t?this.computeUpGlobal():this.computeUpLocal();}screenToRender(t,i){const e=t[0]*this.pixelRatio,r=this.fullHeight-t[1]*this.pixelRatio;return i[0]=e,i[1]=r,i}renderToScreen(t,i){const e=t[0]/this.pixelRatio,r=(this.fullHeight-t[1])/this.pixelRatio;i[0]=e,i[1]=r;}computeUpGlobal(){mathUtils.c(Q$3,this.center,this.eye);const t=mathUtils.s(this.center);t<1?(mathUtils.o(this._up,0,0,1),this._markViewDirty()):Math.abs(mathUtils.z(Q$3,this.center))>.9999*mathUtils.s(Q$3)*t||(mathUtils._(this._up,Q$3,this.center),mathUtils._(this._up,this._up,Q$3),mathUtils.j$1(this._up,this._up),this._markViewDirty());}computeUpLocal(){mathUtils.H(Q$3,this.eye,this.center),Math.abs(Q$3[2])<=.9999&&(mathUtils.d(Q$3,Q$3,Q$3[2]),mathUtils.o(this._up,-Q$3[0],-Q$3[1],1-Q$3[2]),mathUtils.j$1(this._up,this._up),this._markViewDirty());}_compareAndSetView(t,i){"number"==typeof t[0]&&isFinite(t[0])&&"number"==typeof t[1]&&isFinite(t[1])&&"number"==typeof t[2]&&isFinite(t[2])?mathUtils.F(t,i)||(mathUtils.r(i,t),this._markViewDirty()):B$4.warn("Camera vector contains invalid number, ignoring value");}_markViewDirty(){this._viewDirty=!0,this._frustumDirty=!0,this._viewProjectionDirty=!0;}_recomputeFrustum(){this._frustumDirty&&(w$6(this.viewMatrix,this.projectionMatrix,this._frustum),this._frustumDirty=!1);}_ensureViewClean(){this._viewDirty&&(mat4.F(this._viewMatrix,this.eye,this._center,this._up),mathUtils.o(this._viewForward,-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10]),mathUtils.o(this._viewUp,this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9]),mathUtils.o(this._viewRight,this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8]),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0);}}const K$3=vec4f64.n(),O$4=mat4f64.e(),Q$3=common.n(),Z$6=common.n(),$$4=screenUtils.x();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o$d=class extends request.p{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.SCENEVIEW_LOCKING_LOG=!1,this.HIGHLIGHTS_GRID_OPTIMIZATION_ENABLED=!0,this.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.ENABLE_CONTINUOUS_LINE_PATTERNS=!1,this.ENABLE_PER_SEGMENT_DISTANCE_LINE_PATTERNS=!1;}};request.e([request.d()],o$d.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),request.e([request.d()],o$d.prototype,"SCENEVIEW_LOCKING_LOG",void 0),request.e([request.d()],o$d.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_ENABLED",void 0),request.e([request.d()],o$d.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),request.e([request.d()],o$d.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),request.e([request.d()],o$d.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),request.e([request.d()],o$d.prototype,"DECONFLICTOR_SHOW_GRID",void 0),request.e([request.d()],o$d.prototype,"LABELS_SHOW_BORDER",void 0),request.e([request.d()],o$d.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),request.e([request.d()],o$d.prototype,"OVERLAY_SHOW_CENTER",void 0),request.e([request.d()],o$d.prototype,"SHOW_POI",void 0),request.e([request.d()],o$d.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),request.e([request.d()],o$d.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),request.e([request.d()],o$d.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),request.e([request.d()],o$d.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),request.e([request.d()],o$d.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),request.e([request.d()],o$d.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),request.e([request.d()],o$d.prototype,"I3S_TREE_SHOW_TILES",void 0),request.e([request.d()],o$d.prototype,"I3S_SHOW_MODIFICATIONS",void 0),request.e([request.d()],o$d.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),request.e([request.d()],o$d.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),request.e([request.d()],o$d.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),request.e([request.d()],o$d.prototype,"ENABLE_CONTINUOUS_LINE_PATTERNS",void 0),request.e([request.d()],o$d.prototype,"ENABLE_PER_SEGMENT_DISTANCE_LINE_PATTERNS",void 0),o$d=request.e([request.i("esri.views.3d.support.DebugFlags")],o$d);const I$6=new o$d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$c(n){return n instanceof Float32Array&&n.length>=16}function r$g(n){return Array.isArray(n)&&n.length>=16}function t$a(t){return n$c(t)||r$g(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r$f{constructor(e,r){this._material=e,this._repository=r,this._map=new Map;}destroy(){this._map.forEach(((r,s)=>{request.r(r)&&this._repository.release(this._material,t$9(s));}));}load(r,s){this._map.has(s)||this._map.set(s,this._repository.acquire(this._material,t$9(s)));const a=this._map.get(s);if(request.r(a)){if(2===a.ensureResources(r))return a;this._repository.requestRender();}return null}}function t$9(e){switch(e){default:return 0;case 1:return 7;case 4:case 7:case 6:return 3;case 3:return 2;case 2:return 1;case 5:return 4}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$c(o,a){const i=o;i.include(Texture.r$7),i.attributes.add("position","vec3"),i.attributes.add("normal","vec3"),i.attributes.add("auxpos1","vec4"),i.vertex.uniforms.add("proj","mat4"),i.vertex.uniforms.add("view","mat4"),i.vertex.uniforms.add("viewNormal","mat4"),i.vertex.uniforms.add("viewport","vec4"),i.vertex.uniforms.add("camPos","vec3"),i.vertex.uniforms.add("polygonOffset","float"),i.vertex.uniforms.add("cameraGroundRelative","float"),i.vertex.uniforms.add("pixelRatio","float"),i.vertex.uniforms.add("perDistancePixelRatio","float"),i.vertex.uniforms.add("uRenderTransparentlyOccludedHUD","float"),a.verticalOffsetEnabled&&i.vertex.uniforms.add("verticalOffset","vec4"),a.screenSizePerspectiveEnabled&&i.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4"),i.vertex.uniforms.add("hudVisibilityTexture","sampler2D"),i.vertex.constants.add("smallOffsetAngle","float",.984807753012208),i.vertex.code.add(Texture.t`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),i.vertex.code.add(Texture.t`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),a.isDraped||i.vertex.code.add(Texture.t`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`),i.vertex.code.add(Texture.t`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${a.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(camPos - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${a.screenSizePerspectiveEnabled&&(a.verticalOffsetEnabled||1===a.screenCenterOffsetUnitsEnabled)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${a.verticalOffsetEnabled?a.screenSizePerspectiveEnabled?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${a.verticalOffsetEnabled?Texture.t`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${1!==a.screenCenterOffsetUnitsEnabled?Texture.t`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${1===a.screenCenterOffsetUnitsEnabled?a.screenSizePerspectiveEnabled?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${1===a.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),i.vertex.code.add(Texture.t`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (uRenderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * uRenderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`);}function a$c(e,t){e.setUniform1f("uRenderTransparentlyOccludedHUD",0===t.renderTransparentlyOccludedHUD?1:1===t.renderTransparentlyOccludedHUD?0:.75);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$e(r){r.include(Texture.a),r.uniforms.add("geometryDepthTexture","sampler2D"),r.uniforms.add("cameraNearFar","vec2"),r.code.add(Texture.t`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, cameraNearFar);
return (elementDepth < (geometryDepth - 1.0));
}`);}function o$b(e,t){t.multipassGeometryEnabled&&t.geometryLinearDepthTexture&&e.bindTexture(t.geometryLinearDepthTexture,"geometryDepthTexture");}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a$b(a,i){i.multipassGeometryEnabled&&a.vertex.include(r$e),i.multipassTerrainEnabled&&a.varyings.add("depth","float"),a.vertex.code.add(Texture.t`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${i.multipassGeometryEnabled?Texture.t`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${i.multipassTerrainEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),i.multipassTerrainEnabled&&a.fragment.include(Texture.a),a.fragment.uniforms.add("terrainDepthTexture","sampler2D"),a.fragment.uniforms.add("cameraNearFar","vec2"),a.fragment.uniforms.add("inverseViewport","vec2"),a.fragment.include(Texture.a$1),a.fragment.code.add(Texture.t`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${i.multipassTerrainEnabled?Texture.t`

          vec2 uv = gl_FragCoord.xy * inverseViewport;

          //Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texture2D(terrainDepthTexture, uv);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), cameraNearFar);

          //If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          //Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function m$5(e){const o=new Texture.n,i=e.signedDistanceFieldEnabled;if(o.include(c$9),o.include(o$c,e),o.include(Texture.c,e),6===e.output)return o.include(a$b,e),o;o.include(Texture.r$7),o.fragment.include(Texture.a$1),o.fragment.include(Texture.e$1),o.include(Texture.e$3,e),o.varyings.add("vcolor","vec4"),o.varyings.add("vtc","vec2"),o.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&o.varyings.add("voccluded","float"),o.vertex.uniforms.add("screenOffset","vec2").add("anchorPos","vec2").add("textureCoordinateScaleFactor","vec2").add("materialColor","vec4"),i&&o.vertex.uniforms.add("outlineColor","vec4"),e.screenSizePerspectiveEnabled&&o.vertex.uniforms.add("screenSizePerspective","vec4"),(e.debugDrawBorder||e.binaryHighlightOcclusionEnabled)&&o.varyings.add("debugBorderCoords","vec4"),o.attributes.add("uv0","vec2"),o.attributes.add("color","vec4"),o.attributes.add("size","vec2"),o.attributes.add("auxpos2","vec4"),o.vertex.code.add(Texture.t`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.screenSizePerspectiveEnabled?Texture.t`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:Texture.t`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const m=Texture.t`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,b=e.pixelSnappingEnabled?i?Texture.t`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:Texture.t`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:Texture.t`posProj += quadOffset;`;o.vertex.code.add(Texture.t`
      ${e.occlusionTestEnabled?"if (visible) {":""}
      ${m}
      ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

      bool alphaDiscard = vcolor.a < ${Texture.t.float(Texture.o$1)};
      ${i?`alphaDiscard = alphaDiscard && outlineColor.a < ${Texture.t.float(Texture.o$1)};`:""}
      if (alphaDiscard) {
        // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      } else {
        ${b}
        gl_Position = posProj;
      }

      vtc = uv * textureCoordinateScaleFactor;

      ${e.debugDrawBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
      vsize = inputSize;
      ${e.occlusionTestEnabled?Texture.t`} else { vtc = vec2(0.0);
        ${e.debugDrawBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
    }
    `),o.fragment.uniforms.add("tex","sampler2D"),i&&(o.fragment.uniforms.add("outlineColor","vec4"),o.fragment.uniforms.add("outlineSize","float"));const x=e.debugDrawBorder?Texture.t`(isBorder > 0.0 ? 0.0 : ${Texture.t.float(Texture.d$1)})`:Texture.t.float(Texture.d$1),h=Texture.t`
    ${e.debugDrawBorder?Texture.t`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${i?Texture.t`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = 128.0;
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${x} ||
          fillPixelColor.a + outlinePixelColor.a < ${Texture.t.float(Texture.o$1)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${x}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:Texture.t`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${x}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    ${e.debugDrawBorder?Texture.t`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder);`:""}
  `;return 7===e.output&&o.fragment.code.add(Texture.t`
      void main() {
        ${h}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),0===e.output&&o.fragment.code.add(Texture.t`
    void main() {
      ${h}
      ${e.FrontFacePass?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),4===e.output&&(o.include(Texture.r$2),o.fragment.code.add(Texture.t`
    void main() {
      ${h}
      ${e.binaryHighlightOcclusionEnabled?Texture.t`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),o}function b$3(e,o,r){e.setUniform4fv("materialColor",o.color),o.textureIsSignedDistanceField&&(o.outlineColor[3]<=0||o.outlineSize<=0?(e.setUniform4fv("outlineColor",vec4f64._),e.setUniform1f("outlineSize",0)):(e.setUniform4fv("outlineColor",o.outlineColor),e.setUniform1f("outlineSize",o.outlineSize))),e.setUniform2f("screenOffset",2*o.screenOffset[0]*r,2*o.screenOffset[1]*r),e.setUniform2fv("anchorPos",x$6(o));}function x$6(o,i=C$3){return o.textureIsSignedDistanceField?h$7(o.anchorPos,o.distanceFieldBoundingBox,i):vec2.a(i,o.anchorPos),i}function h$7(e,o,i){i[0]=e[0]*(o[2]-o[0])+o[0],i[1]=e[1]*(o[3]-o[1])+o[1];}const C$3=vec2f64.n(),z$5=Object.freeze({__proto__:null,build:m$5,bindHUDMaterialUniforms:b$3,calculateAnchorPosForRendering:x$6});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class j$5 extends Texture.t$2{initializeProgram(e){const r=j$5.shader.get(),t=this.configuration,i=r.build({output:t.output,FrontFacePass:2===t.transparencyPassType,viewingMode:e.viewingMode,occlusionTestEnabled:t.occlusionTestEnabled,signedDistanceFieldEnabled:t.sdf,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,debugDrawBorder:t.debugDrawBorder,binaryHighlightOcclusionEnabled:t.binaryHighlightOcclusion,screenCenterOffsetUnitsEnabled:t.screenCenterOffsetUnitsEnabled,screenSizePerspectiveEnabled:t.screenSizePerspective,verticalOffsetEnabled:t.verticalOffset,pixelSnappingEnabled:t.pixelSnappingEnabled,vvSize:t.vvSize,vvColor:t.vvColor,vvInstancingEnabled:!1,isDraped:t.isDraped,multipassGeometryEnabled:t.multipassGeometryEnabled,multipassTerrainEnabled:t.multipassTerrainEnabled,cullAboveGround:t.cullAboveGround});return new Texture.n$1(e.rctx,i,Texture.o)}bindPass(e,r){Texture.t$5(this.program,r.camera.projectionMatrix),this.program.setUniform1f("cameraGroundRelative",r.camera.aboveGround?1:-1),this.program.setUniform1f("perDistancePixelRatio",Math.tan(r.camera.fovY/2)/(r.camera.fullViewport[2]/2)),this.program.setUniformMatrix4fv("viewNormal",r.camera.viewInverseTransposeMatrix),this.program.setUniform1f("polygonOffset",e.shaderPolygonOffset),Texture.l$1(this.program,e,r),Texture.c$2(this.program,e),this.program.setUniform1f("pixelRatio",r.camera.pixelRatio||1),Texture.m(this.program,r),6===this.configuration.output?(this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),this.program.setUniform2fv("inverseViewport",r.inverseViewport),o$b(this.program,r),Texture.t$7(this.program,r)):(a$c(this.program,r),b$3(this.program,e,r.camera.pixelRatio||1),Texture.o$4(this.program,e),this.configuration.occlusionTestEnabled&&this.program.bindTexture(r.hudVisibilityTexture,"hudVisibilityTexture")),4===this.configuration.output&&Texture.g(this.program,r);}bindDraw(e){Texture.a$4(this.program,e),Texture.o$5(this.program,e.origin,e.camera.viewInverseTransposeMatrix),Texture.l$2(this.program,this.configuration,e),this.program.rebindTextures();}setPipelineState(e){const r=this.configuration,t=3===e,i=2===e,o=515,s=this.configuration.polygonOffsetEnabled&&w$5,a=(t||i)&&4!==r.output?(r.depthEnabled||6===r.output)&&OrderIndependentTransparency.l:null;return OrderIndependentTransparency.g({blending:0===r.output||7===r.output||4===r.output?t?D$6:OrderIndependentTransparency.c(e):null,depthTest:{func:o},depthWrite:a,colorWrite:OrderIndependentTransparency.r,polygonOffset:s})}initializePipeline(){return this.setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return 6===this.configuration.output?0:4}}j$5.shader=new Texture.t$3(z$5,(()=>Promise.resolve().then(function () { return require('./HUDMaterial.glsl-55b634c5.js'); })));const w$5={factor:0,units:-4},D$6=OrderIndependentTransparency.t(1,771);class U$4 extends Texture.t$1{constructor(){super(...arguments),this.output=0,this.occlusionTestEnabled=!0,this.sdf=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.screenSizePerspective=!1,this.screenCenterOffsetUnitsEnabled=0,this.debugDrawBorder=!0,this.binaryHighlightOcclusion=!0,this.slicePlaneEnabled=!1,this.polygonOffsetEnabled=!1,this.depthEnabled=!0,this.transparencyPassType=3,this.pixelSnappingEnabled=!0,this.isDraped=!1,this.multipassGeometryEnabled=!1,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1;}}request.e([Texture.e({count:8})],U$4.prototype,"output",void 0),request.e([Texture.e()],U$4.prototype,"occlusionTestEnabled",void 0),request.e([Texture.e()],U$4.prototype,"sdf",void 0),request.e([Texture.e()],U$4.prototype,"vvSize",void 0),request.e([Texture.e()],U$4.prototype,"vvColor",void 0),request.e([Texture.e()],U$4.prototype,"verticalOffset",void 0),request.e([Texture.e()],U$4.prototype,"screenSizePerspective",void 0),request.e([Texture.e({count:2})],U$4.prototype,"screenCenterOffsetUnitsEnabled",void 0),request.e([Texture.e()],U$4.prototype,"debugDrawBorder",void 0),request.e([Texture.e()],U$4.prototype,"binaryHighlightOcclusion",void 0),request.e([Texture.e()],U$4.prototype,"slicePlaneEnabled",void 0),request.e([Texture.e()],U$4.prototype,"polygonOffsetEnabled",void 0),request.e([Texture.e()],U$4.prototype,"depthEnabled",void 0),request.e([Texture.e({count:4})],U$4.prototype,"transparencyPassType",void 0),request.e([Texture.e()],U$4.prototype,"pixelSnappingEnabled",void 0),request.e([Texture.e()],U$4.prototype,"isDraped",void 0),request.e([Texture.e()],U$4.prototype,"multipassGeometryEnabled",void 0),request.e([Texture.e()],U$4.prototype,"multipassTerrainEnabled",void 0),request.e([Texture.e()],U$4.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class W$3 extends Texture.a$5{constructor(e){super(e,me),this.techniqueConfig=new U$4;}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.verticalOffset=!!this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=!!this.parameters.screenSizePerspective,this.techniqueConfig.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits?1:0,this.techniqueConfig.polygonOffsetEnabled=this.parameters.polygonOffset,this.techniqueConfig.isDraped=this.parameters.isDraped,this.techniqueConfig.occlusionTestEnabled=this.parameters.occlusionTest,this.techniqueConfig.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this.techniqueConfig.sdf=this.parameters.textureIsSignedDistanceField,this.techniqueConfig.vvSize=!!this.parameters.vvSizeEnabled,this.techniqueConfig.vvColor=!!this.parameters.vvColorEnabled,0===e&&(this.techniqueConfig.debugDrawBorder=!!this.parameters.debugDrawBorder),4===e&&(this.techniqueConfig.binaryHighlightOcclusion=this.parameters.binaryHighlightOcclusion),this.techniqueConfig.depthEnabled=this.parameters.depthEnabled,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.multipassGeometryEnabled=t.multipassGeometryEnabled,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}intersect(e,t,s,r,i,n,a,o,c){c?this.intersectDrapedHudGeometry(e,n,a,o):this.intersectHudGeometry(e,t,s,r,a,o);}intersectDrapedHudGeometry(e,s,r,i){const n=e.vertexAttributes.get("position"),a=e.vertexAttributes.get("size"),o=this.parameters,c=x$6(o);let l=1,f=1;if(request.r(i)){const e=i(ce);l=e[0],f=e[5];}l*=e.screenToWorldRatio,f*=e.screenToWorldRatio;const u=fe*e.screenToWorldRatio;for(let t=0;t<n.data.length/n.size;t++){const i=t*n.size,p=n.data[i],m=n.data[i+1],d=t*a.size;let h;ue$1[0]=a.data[d]*l,ue$1[1]=a.data[d+1]*f,o.textureIsSignedDistanceField&&(h=o.outlineSize*e.screenToWorldRatio/2),Q$2(s,p,m,ue$1,u,h,o,c)&&r();}}intersectHudGeometry(e,s,i,a,o,c){if(!a.options.selectionMode||!a.options.hud)return;if(utils.c(s))return;const l=this.parameters;let x=1,b=1;if(mat3.a(re$3,i),request.r(c)){const e=c(ce);x=e[0],b=e[5],K$2(re$3);}const S=e.vertexAttributes.get("position"),z=e.vertexAttributes.get("size"),O=e.vertexAttributes.get("normal"),P=e.vertexAttributes.get("auxpos1");Util.i(S.size>=3);const A=a.point,C=a.camera,q=x$6(l);x*=C.pixelRatio,b*=C.pixelRatio;const w="screen"===this.parameters.centerOffsetUnits;for(let t=0;t<S.data.length/S.size;t++){const e=t*S.size;mathUtils.o(Z$5,S.data[e],S.data[e+1],S.data[e+2]),mathUtils.I(Z$5,Z$5,i);const s=t*z.size;ue$1[0]=z.data[s]*x,ue$1[1]=z.data[s+1]*b,mathUtils.I(Z$5,Z$5,C.viewMatrix);const r=t*P.size;if(mathUtils.o(ae$1,P.data[r+0],P.data[r+1],P.data[r+2]),!w&&(Z$5[0]+=ae$1[0],Z$5[1]+=ae$1[1],0!==ae$1[2])){const e=ae$1[2];mathUtils.j$1(ae$1,Z$5),mathUtils.c(Z$5,Z$5,mathUtils.d(ae$1,ae$1,e));}const c=t*O.size;if(mathUtils.o($$3,O.data[c],O.data[c+1],O.data[c+2]),this.normalAndViewAngle($$3,re$3,C,oe$2),this.applyVerticalOffsetTransformationView(Z$5,oe$2,C,X$2),C.applyProjection(Z$5,ee$3),ee$3[0]>-1){let e=Math.floor(ee$3[0])+this.parameters.screenOffset[0],t=Math.floor(ee$3[1])+this.parameters.screenOffset[1];w&&(e+=ae$1[0],0!==ae$1[1]&&(t+=Texture.c$4(ae$1[1],X$2.factorAlignment))),Texture.f(ue$1,X$2.factor,ue$1);const s=le$1*C.pixelRatio;let r;if(l.textureIsSignedDistanceField&&(r=l.outlineSize*C.pixelRatio/2),Q$2(A,e,t,ue$1,s,r,l,q)){const e=a.ray;if(mathUtils.I(se$3,Z$5,mat4.h(ne$2,C.viewMatrix)),ee$3[0]=A[0],ee$3[1]=A[1],C.unprojectFromRenderScreen(ee$3,Z$5)){const t=common.n();mathUtils.r(t,e.direction);const s=1/mathUtils.s(t);mathUtils.d(t,t,s);o(mathUtils.q(e.origin,Z$5)*s,t,-1,1,!0,se$3);}}}}}computeAttachmentOrigin(e,t){const s=e.vertexAttributes;if(!s)return !1;const r=s.get("position"),i=e.indices.get("position");return geometryDataUtils.h(r,i,t)}createBufferWriter(){return new he(this)}normalAndViewAngle(e,t,s,i){return t$a(t)&&(t=mat3.a(ie$2,t)),mathUtils.L(i.normal,e,t),mathUtils.I(i.normal,i.normal,s.viewInverseTransposeMatrix),i.cosAngle=mathUtils.z(te$3,pe),i}updateScaleInfo(e,t,s){const r=this.parameters;r.screenSizePerspective?Texture.d$2(s,t,r.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),r.screenSizePerspectiveAlignment?Texture.d$2(s,t,r.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels);}applyShaderOffsetsView(e,t,s,r,i,n,a){const o=this.normalAndViewAngle(t,s,i,oe$2);return this.applyVerticalGroundOffsetView(e,o,i,a),this.applyVerticalOffsetTransformationView(a,o,i,n),this.applyPolygonOffsetView(a,o,r[3],i,a),this.applyCenterOffsetView(a,r,a),a}applyShaderOffsetsNDC(e,s,r,i,n){return this.applyCenterOffsetNDC(e,s,r,i),request.r(n)&&mathUtils.r(n,i),this.applyPolygonOffsetNDC(i,s,r,i),i}applyPolygonOffsetView(t,s,r,i,n){const a=i.aboveGround?1:-1;let o=Math.sign(r);0===o&&(o=a);const c=a*o;if(this.parameters.shaderPolygonOffset<=0)return mathUtils.r(n,t);const l=mathUtils.e(Math.abs(s.cosAngle),.01,1),f=1-Math.sqrt(1-l*l)/l/i.viewport[2];return mathUtils.d(n,t,c>0?f:1/f),n}applyVerticalGroundOffsetView(e,t,s,r){const i=mathUtils.s(e),n=s.aboveGround?1:-1,a=.5*s.computeRenderPixelSizeAtDist(i),o=mathUtils.d(Z$5,t.normal,n*a);return mathUtils.u(r,e,o),r}applyVerticalOffsetTransformationView(e,t,s,r){const i=this.parameters;if(!i.verticalOffset||!i.verticalOffset.screenLength){if(i.screenSizePerspective||i.screenSizePerspectiveAlignment){const s=mathUtils.s(e);this.updateScaleInfo(r,s,t.cosAngle);}else r.factor.scale=1,r.factorAlignment.scale=1;return e}const n=mathUtils.s(e),a=i.screenSizePerspectiveAlignment||i.screenSizePerspective,o=Texture.V(s,n,i.verticalOffset,t.cosAngle,a);return this.updateScaleInfo(r,n,t.cosAngle),mathUtils.d(t.normal,t.normal,o),mathUtils.u(e,e,t.normal)}applyCenterOffsetView(e,t,s){const r="screen"!==this.parameters.centerOffsetUnits;return s!==e&&mathUtils.r(s,e),r&&(s[0]+=t[0],s[1]+=t[1],t[2]&&(mathUtils.j$1($$3,s),mathUtils.u(s,s,mathUtils.d($$3,$$3,t[2])))),s}applyCenterOffsetNDC(e,t,s,r){const i="screen"!==this.parameters.centerOffsetUnits;return r!==e&&mathUtils.r(r,e),i||(r[0]+=t[0]/s.fullWidth*2,r[1]+=t[1]/s.fullHeight*2),r}applyPolygonOffsetNDC(e,t,s,r){const i=this.parameters.shaderPolygonOffset;if(e!==r&&mathUtils.r(r,e),i){const e=s.aboveGround?1:-1,n=e*Math.sign(t[3]);r[2]-=(n||e)*i;}return r}requiresSlot(e,t){const s=t$9(t);if(0===s||7===s){if(20===e)return !0;const t=this.parameters.drawInSecondSlot?17:16;return this.parameters.occlusionTest&&11===e||e===t}return e===(this.parameters.drawInSecondSlot?17:16)||20===e}createGLMaterial(e){return 0===e.output||7===e.output?new N$4(e):4===e.output?new _$3(e):null}calculateRelativeScreenBounds(e,t,s=aaBoundingRect.u()){return J$3(this.parameters,e,t,s),s[2]=s[0]+e[0],s[3]=s[1]+e[1],s}}class _$3 extends Texture.r$8{constructor(e){super({...e,...e.material.parameters});}updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this.selectProgram(e)}selectProgram(e){return this.ensureTechnique(j$5,e)}beginSlot(e){return this.updateParameters(e)}bind(e,t){this.bindTextures(t.program),this.bindTextureScale(t.program),t.bindPass(this._material.parameters,e);}}class N$4 extends _$3{isOcclusionSlot(e){return 11===e.slot&&this._material.parameters.occlusionTest&&(0===this._output||7===this._output)}selectProgram(e){return this.ensureTechnique(j$5,e,this.isOcclusionSlot(e)?6:this._output)}bind(e,t){this.isOcclusionSlot(e)||(this.bindTextures(t.program),this.bindTextureScale(t.program)),t.bindPass(this._material.parameters,e);}}function J$3(e,t,s,r=Y$2){return vec2.a(r,e.anchorPos),r[0]*=-t[0],r[1]*=-t[1],r[0]+=e.screenOffset[0]*s,r[1]+=e.screenOffset[1]*s,r}function K$2(e){const t=e[0],s=e[1],r=e[2],i=e[3],n=e[4],a=e[5],o=e[6],c=e[7],l=e[8],f=1/Math.sqrt(t*t+s*s+r*r),u=1/Math.sqrt(i*i+n*n+a*a),p=1/Math.sqrt(o*o+c*c+l*l);return e[0]=t*f,e[1]=s*f,e[2]=r*f,e[3]=i*u,e[4]=n*u,e[5]=a*u,e[6]=o*p,e[7]=c*p,e[8]=l*p,e}function Q$2(e,t,s,r,i,n,a,o){let c=t-i-(o[0]>0?r[0]*o[0]:0),l=c+r[0]+2*i,f=s-i-(o[1]>0?r[1]*o[1]:0),u=f+r[1]+2*i;if(a.textureIsSignedDistanceField){const e=a.distanceFieldBoundingBox;c+=r[0]*e[0],f+=r[1]*e[1],l-=r[0]*(1-e[2]),u-=r[1]*(1-e[3]),c-=n,l+=n,f-=n,u+=n;}return e[0]>c&&e[0]<l&&e[1]>f&&e[1]<u}const X$2={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},Y$2=vec2f64.n(),Z$5=common.n(),$$3=common.n(),ee$3=screenUtils.x(),te$3=common.n(),se$3=common.n(),re$3=quatf64.e(),ie$2=quatf64.e(),ne$2=mat4f64.e(),ae$1=common.n(),oe$2={normal:te$3,cosAngle:0},ce=mat4f64.e(),le$1=1,fe=2,ue$1=[0,0],pe=common.r(0,0,1),me={texCoordScale:[1,1],occlusionTest:!0,binaryHighlightOcclusion:!0,drawInSecondSlot:!1,color:[1,1,1,1],outlineColor:[1,1,1,1],outlineSize:0,textureIsSignedDistanceField:!1,distanceFieldBoundingBox:null,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],screenOffset:[0,0],verticalOffset:null,screenSizePerspective:null,screenSizePerspectiveAlignment:null,slicePlaneEnabled:!1,anchorPos:vec2f64.t(.5,.5),shaderPolygonOffset:1e-5,polygonOffset:!1,textureId:null,centerOffsetUnits:"world",depthEnabled:!0,pixelSnappingEnabled:!0,debugDrawBorder:!1,isDraped:!1,...Texture.n$2},de=InterleavedLayout.A().vec3f("position").vec3f("normal").vec2f("uv0").vec4u8("color").vec2f("size").vec4f("auxpos1").vec4f("auxpos2");class he{constructor(e){this.material=e,this.vertexBufferLayout=de;}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 6*e.indices.get("position").length}write(e,t,s,r){Texture.u$2(t.indices.get("position"),t.vertexAttributes.get("position").data,e.transformation,s.position,r,6),Texture.a$6(t.indices.get("normal"),t.vertexAttributes.get("normal").data,e.invTranspTransformation,s.normal,r,6);{const e=t.vertexAttributes.get("uv0").data;let i,n,a,o;if(null==e||e.length<4){const e=this.material.parameters;i=0,n=0,a=e.texCoordScale[0],o=e.texCoordScale[1];}else i=e[0],n=e[1],a=e[2],o=e[3];a=Math.min(1.99999,a+1),o=Math.min(1.99999,o+1);const c=t.indices.get("position").length,l=s.uv0;let f=r;for(let t=0;t<c;++t)l.set(f,0,i),l.set(f,1,n),f+=1,l.set(f,0,a),l.set(f,1,n),f+=1,l.set(f,0,a),l.set(f,1,o),f+=1,l.set(f,0,a),l.set(f,1,o),f+=1,l.set(f,0,i),l.set(f,1,o),f+=1,l.set(f,0,i),l.set(f,1,n),f+=1;}Texture.y(t.indices.get("color"),t.vertexAttributes.get("color").data,4,s.color,r,6);{const e=t.indices.get("size"),i=t.vertexAttributes.get("size").data,n=e.length,a=s.size;let o=r;for(let t=0;t<n;++t){const s=i[2*e[t]],r=i[2*e[t]+1];for(let e=0;e<6;++e)a.set(o,0,s),a.set(o,1,r),o+=1;}}t.indices.get("auxpos1")&&t.vertexAttributes.get("auxpos1")&&Texture.c$3(t.indices.get("auxpos1"),t.vertexAttributes.get("auxpos1").data,s.auxpos1,r,6),t.indices.get("auxpos2")&&t.vertexAttributes.get("auxpos2")&&Texture.c$3(t.indices.get("auxpos2"),t.vertexAttributes.get("auxpos2").data,s.auxpos2,r,6);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function m$4(e){return "declaredClass"in e}function u$6(e){return "declaredClass"in e}function l$8(e){return "declaredClass"in e}function c$7(r,t){if(!r)return null;if(l$8(r))return r;const s=new Graphic.h({layer:t,sourceLayer:t});return s.visible=r.visible,s.symbol=request.l$1(r.symbol),s.attributes=request.l$1(r.attributes),s.geometry=f$7(r.geometry),s}function f$7(e){return request.t$1(e)?null:m$4(e)?e:jsonUtils.d(h$6(e))}function h$6(e){const n=e.spatialReference.toJSON();switch(e.type){case"point":{const{x:r,y:t,z:s,m:a}=e;return {x:r,y:t,z:s,m:a,spatialReference:n}}case"polygon":{const{rings:r,hasZ:t,hasM:s}=e;return {rings:p$8(r),hasZ:t,hasM:s,spatialReference:n}}case"polyline":{const{paths:r,hasZ:t,hasM:s}=e;return {paths:p$8(r),hasZ:t,hasM:s,spatialReference:n}}case"extent":{const{xmin:r,xmax:t,ymin:s,ymax:a,zmin:i,zmax:o,mmin:m,mmax:u,hasZ:l,hasM:c}=e;return {xmin:r,xmax:t,ymin:s,ymax:a,zmin:i,zmax:o,mmin:m,mmax:u,hasZ:l,hasM:c,spatialReference:n}}case"multipoint":{const{points:r,hasZ:t,hasM:s}=e;return {points:M$5(r)?y$4(r):r,hasZ:t,hasM:s,spatialReference:n}}default:return}}function p$8(e){return x$5(e)?e.map((e=>y$4(e))):e}function y$4(e){return e.map((e=>request.l$6(e)))}function x$5(e){for(const n of e)if(0!==n.length)return M$5(n);return !1}function M$5(e){return e.length&&(request.y$4(e[0])||request.A$5(e[0]))}function Z$4(e,n){if(!e)return null;let r;if(u$6(e)){if(null==n)return e.clone();if(u$6(n))return n.copy(e)}return null!=n?(r=n,r.x=e.x,r.y=e.y,r.spatialReference=e.spatialReference,e.hasZ?(r.z=e.z,r.hasZ=e.hasZ):(r.z=null,r.hasZ=!1),e.hasM?(r.m=e.m,r.hasM=!0):(r.m=null,r.hasM=!1)):(r=dehydratedFeatures.v(e.x,e.y,e.z,e.spatialReference),e.hasM&&(r.m=e.m,r.hasM=!0)),r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function R$5(t,e){if("point"===t.type)return A$5(t,e,!1);if(m$4(t))switch(t.type){case"extent":return A$5(t.center,e,!1);case"polygon":return A$5(t.centroid,e,!1);case"polyline":return A$5(w$4(t),e,!0);case"mesh":return A$5(t.origin,e,!1)}else switch(t.type){case"extent":return A$5(k$5(t),e,!0);case"polygon":return A$5(M$4(t),e,!0);case"polyline":return A$5(w$4(t),e,!0)}}function w$4(t){const e=t.paths[0];if(!e||0===e.length)return null;const r=geometry.l(e,geometry.s(e)/2);return dehydratedFeatures.v(r[0],r[1],r[2],t.spatialReference)}function k$5(t){const e=isFinite(t.zmin);return dehydratedFeatures.v(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),e?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function M$4(t){const e=t.rings[0];if(!e||0===e.length)return null;const r=geometry.o$1(t.rings,t.hasZ);return dehydratedFeatures.v(r[0],r[1],r[2],t.spatialReference)}function A$5(t,e,r){const n=r?t:Z$4(t);return e&&t?projection.on(t,n,e)?n:null:n}function F$4(t,e,r,n=0){if(t){e||(e=aaBoundingRect.u());const o=t;let i=.5*o.width*(r-1),s=.5*o.height*(r-1);return o.width<1e-7*o.height?i+=s/20:o.height<1e-7*o.width&&(s+=i/20),mathUtils.r$1(e,o.xmin-i-n,o.ymin-s-n,o.xmax+i+n,o.ymax+s+n),e}return null}function P$4(t,e){for(let r=0;r<t.geometries.length;++r){const n=t.geometries[r].getMutableAttribute("auxpos1");n&&n.data[3]!==e&&(n.data[3]=e,t.geometryVertexAttrsUpdated(t.geometryRecords[r]));}}function z$4(e,r){const n=vec4f64.t(vec4f64.l);return request.r(e)&&(n[0]=e[0],n[1]=e[1],n[2]=e[2]),request.r(r)?n[3]=r:request.r(e)&&e.length>3&&(n[3]=e[3]),n}function B$3(e,r,n,o,i,s=[0,0,0,0]){for(let u=0;u<3;++u)request.r(e)&&null!=e[u]?s[u]=e[u]:request.r(n)&&null!=n[u]?s[u]=n[u]:s[u]=i[u];return request.r(r)?s[3]=r:request.r(o)?s[3]=o:s[3]=i[3],s}function D$5(t=common.l,r,n,o=1){const i=new Array(3);if(request.t$1(r)||request.t$1(n))i[0]=1,i[1]=1,i[2]=1;else {let e,o=0;for(let s=2;s>=0;s--){const u=t[s];let a;const m=null!=u,c=0===s&&!e&&!m,l=n[s];"symbol-value"===u||c?a=0!==l?r[s]/l:1:m&&"proportional"!==u&&isFinite(u)&&(a=0!==l?u/l:1),null!=a&&(i[s]=a,e=a,o=Math.max(o,Math.abs(a)));}for(let t=2;t>=0;t--)null==i[t]?i[t]=e:0===i[t]&&(i[t]=.001*o);}for(let e=2;e>=0;e--)i[e]/=o;return common.e(i)}function I$5(t){return null!=t.isPrimitive}function O$3(t){return I$5(t)&&(t=[t.width,t.depth,t.height]),U$3(t)?null:"Symbol sizes may not be negative values"}function U$3(t){if(Array.isArray(t)){for(const e of t)if(!U$3(e))return !1;return !0}return null==t||t>=0}function S$2(t,e,s,u=mat4f64.e()){const a=t||0,m=e||0,c=s||0;return 0!==a&&mat4.m(u,u,-a/180*Math.PI),0!==m&&mat4.b(u,u,m/180*Math.PI),0!==c&&mat4.l(u,u,c/180*Math.PI),u}function V$2(t,e){return null!=e.minDemResolution?e.minDemResolution:aaBoundingBox.S(t)?e.minDemResolutionForPoints:.01*aaBoundingBox.z(t)}const Z$3={"bottom-left":vec2f64.t(0,0),bottom:vec2f64.t(.5,0),"bottom-right":vec2f64.t(1,0),left:vec2f64.t(0,.5),center:vec2f64.t(.5,.5),right:vec2f64.t(1,.5),"top-left":vec2f64.t(0,1),top:vec2f64.t(.5,1),"top-right":vec2f64.t(1,1)};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f$6(e,t,n,o,r,s,a,l,c,u,f){const d=O$2[f.mode];let m,p,g=0;if(projection.xn(e,t,n,o,c.spatialReference,r,l))return d.requiresAlignment(f)?(g=d.applyElevationAlignmentBuffer(o,r,s,a,l,c,u,f),m=s,p=a):(m=o,p=r),projection.xn(m,c.spatialReference,p,s,u.spatialReference,a,l)?g:void 0}function d$7(n,o,r,i,s){const l=(t$c(n)?n.z:a$d(n)?n.array[n.offset+2]:n[2])||0;switch(r.mode){case"on-the-ground":{const e=request.c$2(i$8(o,n,"ground"),0);return s.verticalDistanceToGround=0,s.sampledElevation=e,void(s.z=e)}case"relative-to-ground":{const e=request.c$2(i$8(o,n,"ground"),0),a=r.geometryZWithOffset(l,i);return s.verticalDistanceToGround=a,s.sampledElevation=e,void(s.z=a+e)}case"relative-to-scene":{const e=request.c$2(i$8(o,n,"scene"),0),a=r.geometryZWithOffset(l,i);return s.verticalDistanceToGround=a,s.sampledElevation=e,void(s.z=a+e)}case"absolute-height":{const e=r.geometryZWithOffset(l,i),a=request.c$2(i$8(o,n,"ground"),0);return s.verticalDistanceToGround=e-a,s.sampledElevation=a,void(s.z=e)}default:return void(s.z=0)}}function m$3(e,t,n,o){return d$7(e,t,n,o,z$3),z$3.z}function p$7(e,t,n){return null==t||null==n?e.definedChanged:"on-the-ground"===t&&"on-the-ground"===n?e.staysOnTheGround:t===n||"on-the-ground"!==t&&"on-the-ground"!==n?exports.x$1.UPDATE:e.onTheGroundChanged}function g$7(e){return "relative-to-ground"===e||"relative-to-scene"===e}function v$4(e){return "absolute-height"!==e}function h$5(e,t,o,r,i){d$7(t,o,i,r,z$3),P$4(e,z$3.verticalDistanceToGround);const a=z$3.sampledElevation,c=mat4.n(U$2,e.transformation);C$2[0]=t.x,C$2[1]=t.y,C$2[2]=z$3.z;return projection.vn(t.spatialReference,C$2,c,r.spatialReference)?e.transformation=c:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function E$4(e,n,o,r,i,s){let a=0;const l=s.spatialReference;n*=3,r*=3;for(let c=0;c<i;++c){const i=e[n+0],c=e[n+1],u=e[n+2],f=request.c$2(s.getElevation(i,c,u,l,"ground"),0);a+=f,o[r+0]=i,o[r+1]=c,o[r+2]=f,n+=3,r+=3;}return a/i}function y$3(e,n,o,r,i,s,a,l){let c=0;const u=l.calculateOffsetRenderUnits(a),f=l.featureExpressionInfoContext,d=s.spatialReference;n*=3,r*=3;for(let m=0;m<i;++m){const i=e[n+0],a=e[n+1],l=e[n+2],m=request.c$2(s.getElevation(i,a,l,d,"ground"),0);c+=m,o[r+0]=i,o[r+1]=a,o[r+2]=null==f?l+m+u:m+u,n+=3,r+=3;}return c/i}function A$4(e,n,o,r,i,s,a,l){let c=0;const u=l.calculateOffsetRenderUnits(a),f=l.featureExpressionInfoContext,d=s.spatialReference;n*=3,r*=3;for(let m=0;m<i;++m){const i=e[n+0],a=e[n+1],l=e[n+2],m=request.c$2(s.getElevation(i,a,l,d,"scene"),0);c+=m,o[r+0]=i,o[r+1]=a,o[r+2]=null==f?l+m+u:m+u,n+=3,r+=3;}return c/i}function R$4(e){const t=e.meterUnitOffset,n=e.featureExpressionInfoContext;return 0!==t||null!=n}function T$1(e,t,n,o,r,i,s,a){const l=a.calculateOffsetRenderUnits(s),c=a.featureExpressionInfoContext;t*=3,o*=3;for(let u=0;u<r;++u){const r=e[t+0],i=e[t+1],s=e[t+2];n[o+0]=r,n[o+1]=i,n[o+2]=null==c?s+l:l,t+=3,o+=3;}return 0}class j$4{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0;}}exports.x$1 = void 0;!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE";}(exports.x$1||(exports.x$1={}));const O$2={"absolute-height":{applyElevationAlignmentBuffer:T$1,requiresAlignment:R$4},"on-the-ground":{applyElevationAlignmentBuffer:E$4,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:y$3,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:A$4,requiresAlignment:()=>!0}},U$2=mat4f64.e(),z$3=new j$4,C$2=common.n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n$b=request.s$1.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function c$6(e){return {cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}function o$a(e){const t=e&&e.expression;if("string"==typeof t){const e=p$6(t);if(null!=e)return {cachedResult:e}}return null}async function a$a(e,t,n){const c=e&&e.expression;if("string"!=typeof c)return null;const o=p$6(c);if(null!=o)return {cachedResult:o};const a=await opacityUtils.a(),u=a.arcadeUtils,s=u.createSyntaxTree(c);return u.dependsOnView(s)?(null!=n&&n.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:u.createFunction(s),context:u.createExecContext(null,{sr:t}),modules:a}}}function u$5(e,t,r){return e.arcadeUtils.createFeature(t.attributes,t.geometry,r)}function s$c(e,r){if(null!=e&&!f$5(e)){if(!r||!e.arcade)return void n$b.errorOncePerTick("Arcade support required but not provided");const c=r;c._geometry&&(c._geometry=f$7(c._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,r);}}function l$7(e){if(null!=e){if(f$5(e))return e.cachedResult;const t=e.arcade;let r=e.arcade.modules.arcadeUtils.executeFunction(t.func,t.context);return "number"!=typeof r&&(e.cachedResult=0,r=0),r}return 0}function i$6(e,t=!1){let r=e&&e.featureExpressionInfo;const n=r&&r.expression;return t||"0"===n||(r=null),r}const d$6={cachedResult:0};function f$5(e){return null!=e.cachedResult}function p$6(e){return "0"===e?0:null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h$4{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null;}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(t){this._unit=t,this._metersPerElevationInfoUnit=ElevationInfo.r(t);}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters";}set offsetMeters(t){this._meterUnitOffset=t,this._renderUnitOffset=0;}set offsetElevationInfoUnits(t){this._meterUnitOffset=t*this._metersPerElevationInfoUnit,this._renderUnitOffset=0;}addOffsetRenderUnits(t){this._renderUnitOffset+=t;}geometryZWithOffset(t,e){const n=this.calculateOffsetRenderUnits(e);return null!=this.featureExpressionInfoContext?n:t+n}calculateOffsetRenderUnits(t){let e=this._meterUnitOffset;const n=this.featureExpressionInfoContext;return null!=n&&(e+=l$7(n)*this._metersPerElevationInfoUnit),e/t.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=ElevationInfo.n(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=request.c$2(e.offset,0);}updateFeatureExpressionInfoContext(t,s,i){if(request.t$1(t))return void(this._featureExpressionInfoContext=null);const r=t&&t.arcade;r&&request.r(s)&&request.r(i)?(this._featureExpressionInfoContext=c$6(t),s$c(this._featureExpressionInfoContext,u$5(r.modules,s,i))):this._featureExpressionInfoContext=t;}static fromElevationInfo(t){const e=new h$4;return request.r(t)&&e.setFromElevationInfo(t),e}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u$4=common.n();function f$4(r,i,s,a,l,p,f,g){const d=s?s.length:0,h=r.clippingExtent;if(projection.wn(i,u$4,r.elevationProvider.spatialReference),request.r(h)&&!aaBoundingBox.E(h,u$4))return null;const j=r.renderCoordsHelper.spatialReference;projection.wn(i,u$4,j);const y=r.localOriginFactory.getOrigin(u$4),v=new intersectorUtils.T({castShadow:!1,metadata:{layerUid:p,graphicUid:f,usesVerticalDistanceToGround:!0}});for(let e=0;e<d;e++){const r=mat4f64.a;v.addGeometry(s[e],a[e],r,y,g);}return {object:v,sampledElevation:h$5(v,i,r.elevationProvider,r.renderCoordsHelper,l)}}function g$6(e,t,r){const n=e.elevationContext,i=r.spatialReference;projection.wn(t,u$4,i),n.centerPointInElevationSR=dehydratedFeatures.v(u$4[0],u$4[1],t.hasZ?u$4[2]:0,i);}function d$5(e){switch(e.type){case"point":return e;case"polygon":case"extent":return R$5(e);case"polyline":{const t=e.paths[0];if(!t||0===t.length)return null;const r=geometry.l(t,geometry.s(t)/2);return dehydratedFeatures.v(r[0],r[1],r[2],e.spatialReference)}case"mesh":return e.origin}return null}function h$3(e,t,r,o,n){const i=new Float64Array(3*e.length),s=new Float64Array(i.length);e.forEach(((e,t)=>{i[3*t+0]=e[0],i[3*t+1]=e[1],i[3*t+2]=e.length>2?e[2]:0;}));const a=f$6(i,t,0,s,0,i,0,i.length/3,r,o,n),c=null!=a;return {numVertices:e.length,position:i,mapPosition:s,projectionSuccess:c,sampledElevation:a}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r$d{constructor(n,t){this.vec3=n,this.id=t;}}function c$5(n,s,c,e){return new r$d(common.r(n,s,c),e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a$9{constructor(e,r){this.index=e,this.renderTargets=r,this.extent=aaBoundingRect.u(),this.resolution=0,this.renderLocalOrigin=c$5(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries={extents:[aaBoundingRect.u(),aaBoundingRect.u(),aaBoundingRect.u()],numViews:0},this.validTargets=null,this.hasDrapedFeatureSource=!1,this.hasDrapedRasterSource=!1,this.hasTargetWithoutRasterImage=!1,this.index=e,this.validTargets=new Array(r.renderTargets.length).fill(!1);}getValidTarget(e){return this.validTargets[e]?this.renderTargets.getTarget(e):null}get needsColorWithoutRasterImage(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}getColorTexture(e){const t=1===e?this.renderTargets.getTarget(0):2===e?this.renderTargets.getTarget(2):this.renderTargets.getTarget(4);return t?t.getTexture():null}getNormalTexture(e){const t=1===e?this.renderTargets.getTarget(3):null;return t?t.getTexture():null}draw(e,t){const r=this.computeRenderTargetValidityBitfield(),s=this.needsColorWithoutRasterImage;for(const i of this.renderTargets.renderTargets)1===i.type&&!1===s?this.validTargets[i.type]=!1:this.validTargets[i.type]=e.drawTarget(this,i,t);return r^this.computeRenderTargetValidityBitfield()?0:1}computeRenderTargetValidityBitfield(){const e=this.validTargets;return +e[0]|+e[1]<<1|+e[2]<<2|+e[3]<<3|+e[4]<<4}setupGeometryViewsCyclical(e){this.setupGeometryViewsDirect();const t=.001*e.range;if(this.extent[0]-t<=e.min){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];aaBoundingRect.d(this.extent,e.range,0,t);}if(this.extent[2]+t>=e.max){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];aaBoundingRect.d(this.extent,-e.range,0,t);}}setupGeometryViewsDirect(){this.canvasGeometries.numViews=1,aaBoundingRect.a(this.canvasGeometries.extents[0],this.extent);}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return !0}return !1}applyViewport(e){e.setViewport(0===this.index?0:this.resolution,0,this.resolution,this.resolution);}}function n$a(t,r,s){return Math.min(mathUtils.a(Math.max(t,r)+256),s)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$b{constructor(e,s){this.size=vec2f32.n(),this._fbo=null,this._fbo=new FramebufferObject.l(e,{colorTarget:0,depthStencilTarget:0},{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9987,hasMipmap:s,maxAnisotropy:8,width:0,height:0});}dispose(){this._fbo=request.i$8(this._fbo);}getTexture(){return this._fbo?this._fbo.colorTexture:null}isValid(){return null!==this._fbo}resize(e,r){this.size[0]=e,this.size[1]=r,this._fbo.resize(this.size[0],this.size[1]);}bind(e){e.bindFramebuffer(this._fbo);}generateMipMap(){this._fbo.colorTexture.descriptor.hasMipmap&&this._fbo.colorTexture.generateMipmap();}disposeRenderTargetMemory(){var e;null==(e=this._fbo)||e.resize(0,0);}get gpuMemoryUsage(){var e,r;return null!=(e=null==(r=this._fbo)?void 0:r.gpuMemoryUsage)?e:0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r$c{constructor(r){const s=(s,t,o=!0)=>({type:t,fbo:new s$b(r,o),renderPass:s,valid:!1,lastUsed:1/0});this.renderTargets=[s(0,0),s(0,1),s(5,2,!1),s(3,3),s(0,4)];}getTarget(e){return this.renderTargets[e].fbo}dispose(){for(const e of this.renderTargets)e.fbo.dispose();}disposeRenderTargetMemory(){for(const e of this.renderTargets)e.fbo.disposeRenderTargetMemory();}validateUsageForTarget(e,r,t){if(e)r.lastUsed=t;else if(t-r.lastUsed>s$a)r.fbo.disposeRenderTargetMemory(),r.lastUsed=1/0;else if(r.lastUsed<1/0)return !0;return !1}get gpuMemoryUsage(){return this.renderTargets.reduce(((e,r)=>e+r.fbo.gpuMemoryUsage),0)}}const s$a=1e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$8{constructor(){this._outer=new Map;}clear(){this._outer.clear();}get empty(){return 0===this._outer.size}get(t,e){var r;return null==(r=this._outer.get(t))?void 0:r.get(e)}set(t,e,r){const s=this._outer.get(t);s?s.set(e,r):this._outer.set(t,new Map([[e,r]]));}delete(t,e){const r=this._outer.get(t);r&&(r.delete(e),0===r.size&&this._outer.delete(t));}forEach(t){this._outer.forEach(((e,r)=>t(e,r)));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$9{constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0;}}class n$9{constructor(e){this._context=e,this._perConstructorInstances=new t$8,this._frameCounter=0,this._keepAliveFrameCount=o$9;}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}dispose(){this._perConstructorInstances.forEach((e=>e.forEach((e=>e.technique.dispose())))),this._perConstructorInstances.clear();}acquire(t,r){const n=r.key;let o=this._perConstructorInstances.get(t,n);if(request.t$1(o)){const e=new t(this._context,r,(()=>this.release(e)));o=new s$9(e),this._perConstructorInstances.set(t,n,o);}return ++o.refCount,o.technique}releaseAndAcquire(e,r,s){if(request.r(s)){if(r.key===s.key)return s;s.release();}return this.acquire(e,r)}release(t){if(request.t$1(t)||this._perConstructorInstances.empty)return;const r=this._perConstructorInstances.get(t.constructor,t.key);request.t$1(r)||(--r.refCount,0===r.refCount&&(r.refZeroFrame=this._frameCounter));}frameUpdate(){this._frameCounter++,this._keepAliveFrameCount!==o$9&&this._perConstructorInstances.forEach(((e,t)=>{e.forEach(((e,r)=>{0===e.refCount&&e.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(e.technique.dispose(),this._perConstructorInstances.delete(t,r));}));}));}async reloadAll(){const e=new Array;this._perConstructorInstances.forEach(((t,r)=>{const s=async(e,t)=>{const r=t.shader;r&&(await r.reload(),e.forEach((e=>{e.technique.reload(this._context);})));};e.push(s(t,r));})),await Promise.all(e);}}const o$9=-1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s$8=s=>{class e extends s{constructor(){super(...arguments),this._isDisposed=!1;}dispose(){for(const e of null!=(s=this._managedDisposables)?s:[]){var s;const i=this[e];this[e]=null,i&&"function"==typeof i.dispose&&i.dispose();}this._isDisposed=!0;}get isDisposed(){return this._isDisposed}}return e};class e$8 extends(s$8(class{})){}function i$5(){return (s,e)=>{var i,o;s.hasOwnProperty("_managedDisposables")||(s._managedDisposables=null!=(i=null==(o=s._managedDisposables)?void 0:o.slice())?i:[]);s._managedDisposables.unshift(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$8=request.s$1.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository");class l$6{constructor(e){this._glMaterial=e,this.refCnt=0,this._glMaterial=e;}incRefCnt(){++this.refCnt;}decRefCnt(){--this.refCnt,Util.i(this.refCnt>=0);}getRefCnt(){return this.refCnt}get glMaterial(){return this._glMaterial}}class n$8{constructor(e,t,i,r){this._textureRepository=e,this._techniqueRepository=t,this.materialChanged=i,this.requestRender=r,this._id2glMaterialRef=new t$8;}dispose(){this._textureRepository.dispose();}acquire(e,i){this._ownMaterial(e);let r=this._id2glMaterialRef.get(i,e.id);if(request.t$1(r)){const t=e.createGLMaterial({material:e,techniqueRep:this._techniqueRepository,textureRep:this._textureRepository,output:i});r=new l$6(t),this._id2glMaterialRef.set(i,e.id,r);}return r.incRefCnt(),r.glMaterial}release(e,t){const s=this._id2glMaterialRef.get(t,e.id);request.r(s)&&(s.decRefCnt(),0===s.getRefCnt()&&(request.i$8(s.glMaterial),this._id2glMaterialRef.delete(t,e.id)));}_ownMaterial(e){request.r(e.repository)&&e.repository!==this&&o$8.error("Material is already owned by a different material repository"),e.repository=this;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$7=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","shaderTransformationChanged","objectTransformation","visibilityChanged","occlusionChanged","highlightChanged","objectGeometryAdded","objectGeometryRemoved","vertexAttrsUpdated"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class p$5{constructor(e,t){this._objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new b$2,this._objectCount=0,t&&(void 0!==t.maximumObjectsPerNode&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),void 0!==t.maximumDepth&&(this._maximumDepth=t.maximumDepth));}get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}destroy(){this._degenerateObjects.clear(),b$2.clearPool(),v$3[0]=null,B$2.prune(),C$1.prune();}add(e,t=e.length){this._objectCount+=t,this._grow(e,t);const n=b$2.acquire();for(let i=0;i<t;i++){const t=e[i];this._isDegenerate(t)?this._degenerateObjects.add(t):(n.init(this._root),this._add(t,n));}b$2.release(n);}remove(t,n=null){this._objectCount-=t.length;const i=b$2.acquire();for(const o of t){const t=request.r(n)?n:sphere._(this._objectToBoundingSphere(o),I$4);z$2(t[3])?(i.init(this._root),this._remove(o,t,i)):this._degenerateObjects.delete(o);}b$2.release(i),this._shrink();}update(e,t){if(!z$2(t[3])&&this._isDegenerate(e))return;const n=A$3(e);this.remove(n,t),this.add(n);}forEachAlongRay(e,t,n){const i=sphere.j(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNode(i,e))return !1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObject(i,e)&&n(e);})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObject(i,e)&&n(e);})),!0}));}forEachAlongRayWithVerticalOffset(e,t,n,i){const o=sphere.j(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNodeWithOffset(o,e,i))return !1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObjectWithOffset(o,e,i)&&n(e);})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObjectWithOffset(o,e,i)&&n(e);})),!0}));}forEach(e){this._forEachNode(this._root,(t=>{const n=t.node;return n.terminals.forAll(e),null!==n.residents&&n.residents.forAll(e),!0})),this._degenerateObjects.forEach(e);}forEachDegenerateObject(e){this._degenerateObjects.forEach(e);}findClosest(e,t,n,s=(()=>!0),r=1/0){let h=1/0,a=1/0,d=null;const c=N$3(e,t),u=i=>{if(--r,!s(i))return;const o=this._objectToBoundingSphere(i);if(!O$5(n,o))return;const c=M$3(e,t,sphere.L(o)),u=c-o[3],f=c+o[3];u<h&&(h=u,a=f,d=i);};return this._forEachNodeDepthOrdered(this._root,(s=>{if(r<=0||!O$5(n,s.bounds))return !1;mathUtils.d(k$4,c,s.halfSize),mathUtils.u(k$4,k$4,s.bounds);if(M$3(e,t,k$4)>a)return !1;const h=s.node;return h.terminals.forAll((e=>u(e))),null!==h.residents&&h.residents.forAll((e=>u(e))),!0}),e,t),d}forEachInDepthRange(e,t,n,s,r,h,a){let d=-1/0,c=1/0;const u={setRange:e=>{1===n?(d=Math.max(d,e.near),c=Math.min(c,e.far)):(d=Math.max(d,-e.far),c=Math.min(c,-e.near));}};u.setRange(s);const f=M$3(t,n,e),_=N$3(t,n),p=N$3(t,-n),b=e=>{if(!a(e))return;const i=this._objectToBoundingSphere(e),o=sphere.L(i),s=M$3(t,n,o)-f,_=s-i[3],p=s+i[3];_>c||p<d||!O$5(h,i)||r(e,u);};this._forEachNodeDepthOrdered(this._root,(e=>{if(!O$5(h,e.bounds))return !1;mathUtils.d(k$4,_,e.halfSize),mathUtils.u(k$4,k$4,e.bounds);if(M$3(t,n,k$4)-f>c)return !1;mathUtils.d(k$4,p,e.halfSize),mathUtils.u(k$4,k$4,e.bounds);if(M$3(t,n,k$4)-f<d)return !1;const s=e.node;return s.terminals.forAll((e=>b(e))),null!==s.residents&&s.residents.forAll((e=>b(e))),!0}),t,n);}forEachNode(e){this._forEachNode(this._root,(t=>e(t.node,t.bounds,t.halfSize)));}_intersectsNode(e,t){return S$1(t.bounds,2*-t.halfSize,q),S$1(t.bounds,2*t.halfSize,w$3),Util.j(e.origin,e.direction,q,w$3)}_intersectsNodeWithOffset(e,t,n){return S$1(t.bounds,2*-t.halfSize,q),S$1(t.bounds,2*t.halfSize,w$3),n.applyToMinMax(q,w$3),Util.j(e.origin,e.direction,q,w$3)}_intersectsObject(e,t){const n=this._objectToBoundingSphere(t);return !(n[3]>0)||sphere.B(n,e)}_intersectsObjectWithOffset(e,t,n){const i=this._objectToBoundingSphere(t);return !(i[3]>0)||sphere.B(n.applyToBoundingSphere(i),e)}_forEachNode(e,t){let n=b$2.acquire().init(e);const i=[n];for(;0!==i.length;){if(n=i.pop(),t(n)&&!n.isLeaf())for(let e=0;e<n.node.children.length;e++){n.node.children[e]&&i.push(b$2.acquire().init(n).advance(e));}b$2.release(n);}}_forEachNodeDepthOrdered(e,t,n,i=1){let o=b$2.acquire().init(e);const s=[o];for(O$1(n,i,W$2);0!==s.length;){if(o=s.pop(),t(o)&&!o.isLeaf())for(let e=7;e>=0;--e){const t=W$2[e];o.node.children[t]&&s.push(b$2.acquire().init(o).advance(t));}b$2.release(o);}}_remove(e,t,n){B$2.clear();const i=n.advanceTo(t,((e,t)=>{B$2.push(e.node),B$2.push(t);}))?n.node.terminals:n.node.residents;if(i.removeUnordered(e),0===i.length)for(let o=B$2.length-2;o>=0;o-=2){const e=B$2.data[o],t=B$2.data[o+1];if(!this._purge(e,t))break}}_nodeIsEmpty(e){if(0!==e.terminals.length)return !1;if(null!==e.residents)return 0===e.residents.length;for(let t=0;t<e.children.length;t++)if(e.children[t])return !1;return !0}_purge(e,t){return t>=0&&(e.children[t]=null),!!this._nodeIsEmpty(e)&&(null===e.residents&&(e.residents=new request.n$10({shrink:!0})),!0)}_add(e,t){t.advanceTo(this._objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t));}_split(e){const t=e.node.residents;e.node.residents=null;for(let n=0;n<t.length;n++){const i=b$2.acquire().init(e);this._add(t.getItemAt(n),i),b$2.release(i);}}_grow(e,t){if(0!==t&&(x$4(e,t,(e=>this._objectToBoundingSphere(e)),P$3),z$2(P$3[3])&&!this._fitsInsideTree(P$3)))if(this._nodeIsEmpty(this._root.node))sphere._(P$3,this._root.bounds),this._root.halfSize=1.25*P$3[3];else {const e=this._rootBoundsForRootAsSubNode(P$3);this._placingRootViolatesMaxDepth(e)?this._rebuildTree(P$3,e):this._growRootAsSubNode(e),b$2.release(e);}}_rebuildTree(e,t){mathUtils.r(R$3,t.bounds),R$3[3]=t.halfSize,x$4([e,R$3],2,(e=>e),F$3);const n=b$2.acquire().init(this._root);this._root.initFrom(null,F$3,1.25*F$3[3]),this._forEachNode(n,(e=>(this.add(e.node.terminals.data,e.node.terminals.length),null!==e.node.residents&&this.add(e.node.residents.data,e.node.residents.length),!0))),b$2.release(n);}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(e=>(n=Math.max(n,e.depth),n+t<=this._maximumDepth))),n+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],n=e;let i=-1/0;const o=this._root.bounds,s=this._root.halfSize;for(let r=0;r<3;r++){const e=o[r]-s-(n[r]-t),h=n[r]+t-(o[r]+s),a=Math.max(0,Math.ceil(e/(2*s))),l=Math.max(0,Math.ceil(h/(2*s)))+1,d=2**Math.ceil(Math.log(a+l)*Math.LOG2E);i=Math.max(i,d),L[r].min=a,L[r].max=l;}for(let r=0;r<3;r++){let e=L[r].min,t=L[r].max;const n=(i-(e+t))/2;e+=Math.ceil(n),t+=Math.floor(n);const h=o[r]-s-e*s*2;y$2[r]=h+(t+e)*s;}return y$2[3]=i*s*D$4,b$2.acquire().initFrom(null,y$2,i*s,0)}_growRootAsSubNode(e){const t=this._root.node;mathUtils.r(P$3,this._root.bounds),P$3[3]=this._root.halfSize,this._root.init(e),e.advanceTo(P$3,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals;}_shrink(){for(;;){const e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0;}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return -1;let e=null;const t=this._root.node.children;let n=0,i=0;for(;i<t.length&&null==e;)n=i++,e=t[n];for(;i<t.length;)if(t[i++])return -1;return n}_isDegenerate(e){return !z$2(this._objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,n=this._root.halfSize;return e[3]<=n&&e[0]>=t[0]-n&&e[0]<=t[0]+n&&e[1]>=t[1]-n&&e[1]<=t[1]+n&&e[2]>=t[2]-n&&e[2]<=t[2]+n}}class b$2{constructor(){this.bounds=sphere.P(),this.halfSize=0,this.initFrom(null,null,0,0);}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(t,n,i,o=this.depth){return this.node=request.r(t)?t:b$2.createEmptyNode(),request.r(n)&&sphere._(n,this.bounds),this.halfSize=i,this.depth=o,this}advance(e){let t=this.node.children[e];t||(t=b$2.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const n=E$3[e];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.bounds[3]=this.halfSize*D$4,this}advanceTo(e,t,n=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!n)return t&&t(this,-1),!1;this.node.residents=null;}const i=this._childIndex(e);t&&t(this,i),this.advance(i);}}isLeaf(){return null!=this.node.residents}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return (t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return {children:[null,null,null,null,null,null,null,null],terminals:new request.n$10({shrink:!0}),residents:new request.n$10({shrink:!0})}}static acquire(){return b$2._pool.acquire()}static release(e){b$2._pool.release(e);}static clearPool(){b$2._pool.prune();}}function g$5(e,t){e[0]=Math.min(e[0],t[0]-t[3]),e[1]=Math.min(e[1],t[1]-t[3]),e[2]=Math.min(e[2],t[2]-t[3]);}function j$3(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3]);}function S$1(e,t,n){n[0]=e[0]+t,n[1]=e[1]+t,n[2]=e[2]+t;}function x$4(e,t,n,i){if(1===t){const t=n(e[0]);sphere._(t,i);}else {q[0]=1/0,q[1]=1/0,q[2]=1/0,w$3[0]=-1/0,w$3[1]=-1/0,w$3[2]=-1/0;for(let i=0;i<t;i++){const t=n(e[i]);z$2(t[3])&&(g$5(q,t),j$3(w$3,t));}mathUtils.y(i,q,w$3,.5),i[3]=Math.max(w$3[0]-q[0],w$3[1]-q[1],w$3[2]-q[2])/2;}}function O$1(e,t,n){if(!C$1.length)for(let i=0;i<8;++i)C$1.push({index:0,distance:0});for(let i=0;i<8;++i){const n=E$3[i];C$1.data[i].index=i,C$1.data[i].distance=M$3(e,t,n);}C$1.sort(((e,t)=>e.distance-t.distance));for(let i=0;i<8;++i)n[i]=C$1.data[i].index;}function N$3(e,t){let n=1/0,i=null;for(let o=0;o<8;++o){const s=M$3(e,t,T[o]);s<n&&(n=s,i=T[o]);}return i}function M$3(e,t,n){return t*(e[0]*n[0]+e[1]*n[1]+e[2]*n[2])}function z$2(e){return !isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}b$2._pool=new request.e$9(b$2);const E$3=[common.r(-1,-1,-1),common.r(1,-1,-1),common.r(-1,1,-1),common.r(1,1,-1),common.r(-1,-1,1),common.r(1,-1,1),common.r(-1,1,1),common.r(1,1,1)],T=[common.r(-1,-1,-1),common.r(-1,-1,1),common.r(-1,1,-1),common.r(-1,1,1),common.r(1,-1,-1),common.r(1,-1,1),common.r(1,1,-1),common.r(1,1,1)],D$4=Math.sqrt(3),v$3=[null];function A$3(e){return v$3[0]=e,v$3}const y$2=sphere.P(),k$4=common.n(),q=common.n(),w$3=common.n(),B$2=new request.n$10,I$4=sphere.P(),P$3=sphere.P(),R$3=sphere.P(),F$3=sphere.P(),L=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],C$1=new request.n$10,W$2=[0,0,0,0,0,0,0,0];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n$7 extends utils.r{constructor(s,i=""){var r,a,h;super(),this.apiLayerUid=i,this.type=0,this.events=new request.n$2,this.isSliceable=!1,this._objects=new request.n$10,this._stageHandles=new request.u,this.apiLayerUid=i,this.isVisible=null==(r=null==s?void 0:s.isVisible)||r,this.isPickable=null==(a=null==s?void 0:s.isPickable)||a,this.updatePolicy=null!=(h=null==s?void 0:s.updatePolicy)?h:0;}get objects(){return this._objects}destroy(){this.detachStage(),this._stage=null;}attachStage(e){this.detachStage(),this._stage=e;for(const t of e$7)this._stageHandles.add(this.events.on(t,(s=>e.handleEvent(t,s))));}detachStage(){this._stageHandles.removeAll(),this.invalidateSpatialQueryAccelerator();}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),request.r(this._octree)&&this._octree.add([e]);}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),request.r(this._octree)&&this._octree.remove([e]));}addMany(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),request.r(this._octree)&&this._octree.add(e);}removeMany(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),0!==t.length){for(const e of t)e.parentLayer=null;this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),request.r(this._octree)&&this._octree.remove(t);}}sync(){request.r(this._stage)&&1!==this.updatePolicy&&this._stage.syncLayer(this.id);}notifyObjectBBChanged(e,t){request.r(this._octree)&&this._octree.update(e,t);}getSpatialQueryAccelerator(){return request.t$1(this._octree)&&this._objects.length>50&&this._createOctree(),this._octree}shaderTransformationChanged(){this.invalidateSpatialQueryAccelerator(),this.events.emit("shaderTransformationChanged",this);}invalidateSpatialQueryAccelerator(){this._octree=request.l$3(this._octree);}_createOctree(){this._octree=new p$5((e=>e.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.data,this._objects.length);}}function l$5(e){return request.r(e)&&0===e.type}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var o$7;!function(o){o.Default={vvSizeEnabled:!1,vvSizeMinSize:vec3f32.t(1,1,1),vvSizeMaxSize:vec3f32.t(100,100,100),vvSizeOffset:vec3f32.t(0,0,0),vvSizeFactor:vec3f32.t(1,1,1),vvSizeValue:vec3f32.t(1,1,1),vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvOpacityEnabled:!1,vvOpacityValues:[0,0,0,0,0,0,0,0],vvOpacityOpacities:[1,1,1,1,1,1,1,1],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:quatf64.e()};}(o$7||(o$7={}));const e$6=o$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$7(t,i){t.vertex.uniforms.add("intrinsicWidth","float"),i.vvSize?(t.attributes.add("sizeFeatureAttribute","float"),t.vertex.uniforms.add("vvSizeMinSize","vec3"),t.vertex.uniforms.add("vvSizeMaxSize","vec3"),t.vertex.uniforms.add("vvSizeOffset","vec3"),t.vertex.uniforms.add("vvSizeFactor","vec3"),t.vertex.code.add(Texture.t`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add("size","float"),t.vertex.code.add(Texture.t`float getSize(){
return intrinsicWidth * size;
}`)),i.vvOpacity?(t.attributes.add("opacityFeatureAttribute","float"),t.vertex.constants.add("vvOpacityNumber","int",8),t.vertex.code.add(Texture.t`uniform float vvOpacityValues[vvOpacityNumber];
uniform float vvOpacityOpacities[vvOpacityNumber];
float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):t.vertex.code.add(Texture.t`vec4 applyOpacity( vec4 color ){
return color;
}`),i.vvColor?(t.attributes.add("colorFeatureAttribute","float"),t.vertex.constants.add("vvColorNumber","int",8),t.vertex.code.add(Texture.t`uniform float vvColorValues[vvColorNumber];
uniform vec4 vvColorColors[vvColorNumber];
vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(t.attributes.add("color","vec4"),t.vertex.code.add(Texture.t`vec4 getColor(){
return applyOpacity(color);
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$b(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?l$4(e,t):i$4(e);}function l$4(r,l){r.fragment.include(Texture.a$1);const i=I$6.ENABLE_CONTINUOUS_LINE_PATTERNS;i?(r.vertex.uniforms.add("stipplePatternPixelSize","float"),l.draped?r.vertex.uniforms.add("worldToScreenRatio","float"):(r.vertex.uniforms.add("worldToScreenPerDistanceRatio","float"),r.vertex.uniforms.add("cameraDistanceToSurface","float"),r.vertex.uniforms.add("camPos","vec3"))):r.vertex.uniforms.add("stipplePatternPixelSizeInv","float"),l.stippleDistanceMaxEnabled&&r.varyings.add("stippleDistanceMax","float"),r.varyings.add("stippleDistance","float"),i&&(r.varyings.add("vStippleDistanceLimits","vec2"),l.draped||r.vertex.code.add(Texture.t`
      float computeWorldToScreenRatio(vec3 segmentCenter) {
        float segmentDistanceToCamera = length(segmentCenter - camPos);

        ${I$6.ENABLE_PER_SEGMENT_DISTANCE_LINE_PATTERNS?Texture.t`float distanceToCamera = segmentDistanceToCamera;`:Texture.t`float distanceToCamera = cameraDistanceToSurface < 0.0 ? segmentDistanceToCamera : cameraDistanceToSurface;`}

        return worldToScreenPerDistanceRatio / distanceToCamera;
      }
    `),r.vertex.code.add(Texture.t`float discretizeWorldToScreenRatio(float worldToScreenRatio) {
float step = 0.2;
float discreteWorldToScreenRatio = log(worldToScreenRatio);
discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
return discreteWorldToScreenRatio;
}`),r.vertex.code.add(Texture.t`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {
if (segmentLengthPseudoScreen < patternLength) {
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}
float segmentLengthScreenRounded = max(1.0, floor(segmentLengthScreen / patternLength + 0.5)) * patternLength;
return vec2(0.0, segmentLengthScreenRounded);
}`)),r.fragment.uniforms.add("stipplePatternTexture","sampler2D"),r.fragment.uniforms.add("stipplePatternSDFNormalizer","float"),r.fragment.uniforms.add("stipplePatternTextureSize","float"),i&&r.fragment.uniforms.add("stipplePatternPixelSizeInv","float"),l.stippleOffColorEnabled&&r.fragment.uniforms.add("stippleOffColor","vec4"),r.fragment.code.add(Texture.t`float padTexture(float u) {
return (u * stipplePatternTextureSize + 1.0)/(stipplePatternTextureSize + 2.0);
}`),i?r.fragment.code.add(Texture.t`
      float getStippleValue() {
        float stippleDistanceClamped = clamp(stippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y) * gl_FragCoord.w;
        ${l.scaleStippleWithLineWidth?Texture.t`float u = fract(stippleDistanceClamped * stipplePatternPixelSizeInv * vLineSizeInv);`:Texture.t`float u = fract(stippleDistanceClamped * stipplePatternPixelSizeInv);`}
        return rgba2float(texture2D(stipplePatternTexture, vec2(padTexture(u), 0.5)));
      }
    `):r.fragment.code.add(Texture.t`
      float getStippleValue() {
        float stippleDistanceClamped = stippleDistance * gl_FragCoord.w;
        ${l.stippleDistanceMaxEnabled?"stippleDistanceClamped = clamp(stippleDistanceClamped, 0.0, stippleDistanceMax);":""}
        ${l.scaleStippleWithLineWidth?Texture.t`float u = fract(stippleDistanceClamped * vLineSizeInv);`:Texture.t`float u = fract(stippleDistanceClamped);`}
        return rgba2float(texture2D(stipplePatternTexture, vec2(padTexture(u), 0.5)));
      }
    `),r.fragment.code.add(Texture.t`
    float getStippleSDF() {
      return (getStippleValue() * 2.0 - 1.0) * stipplePatternSDFNormalizer;
    }

    float getStippleAlpha() {
      ${l.scaleStippleWithLineWidth?Texture.t`return clamp(getStippleSDF() * vLineWidth + 0.5, 0.0, 1.0);`:Texture.t`return clamp(getStippleSDF() + 0.5, 0.0, 1.0);`}
    }
  `),l.stippleOffColorEnabled?r.fragment.code.add(Texture.t`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`):r.fragment.code.add(Texture.t`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`);}function i$4(e){e.fragment.code.add(Texture.t`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f$3(f){const m=new Texture.n;m.extensions.add("GL_OES_standard_derivatives"),m.include(Texture.t$4),m.include(t$7,f),m.include(r$b,f),1===f.output&&m.include(Texture.e$2,f),m.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraNearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2"),m.attributes.add("position","vec3"),m.attributes.add("subdivisionFactor","float"),m.attributes.add("uv0","vec2"),m.attributes.add("auxpos1","vec3"),m.attributes.add("auxpos2","vec3"),m.varyings.add("vColor","vec4"),m.varyings.add("vpos","vec3"),m.varyings.add("linearDepth","float"),f.multipassTerrainEnabled&&m.varyings.add("depth","float");const v=2===f.capType,g=I$6.ENABLE_CONTINUOUS_LINE_PATTERNS,h=g&&f.stippleEnabled&&v,u=f.falloffEnabled||h,D=f.innerColorEnabled,x=f.stippleEnabled&&f.scaleStippleWithLineWidth||v,b=f.stippleEnabled&&f.scaleStippleWithLineWidth,L=1===f.capType||2===f.capType;return x&&m.varyings.add("vLineWidth","float"),b&&m.varyings.add("vLineSizeInv","float"),D&&m.varyings.add("vLineDistance","float"),u&&m.varyings.add("vLineDistanceNorm","float"),f.falloffEnabled&&m.fragment.uniforms.add("falloff","float"),f.innerColorEnabled&&(m.fragment.uniforms.add("innerColor","vec4"),m.fragment.uniforms.add("innerWidth","float")),v&&m.varyings.add("vCapPosition","vec2"),m.vertex.code.add(Texture.t`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),m.vertex.code.add(Texture.t`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= screenSize / posNdc.w;
return posNdc;
}`),m.vertex.code.add(Texture.t`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = cameraNearFar[0] * 0.99;

      //current pos behind ncp --> we need to clip
      if(pos.z > -cameraNearFar[0]) {
        if (!isStartVertex) {
          //previous in front of ncp
          if(prev.z < -cameraNearFar[0]) {
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
        //next in front of ncp
        if(isStartVertex) {
          if(next.z < -cameraNearFar[0]) {
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        //previous behind ncp
        if (prev.z > -cameraNearFar[0]) {
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        //next behind ncp
        if (next.z > -cameraNearFar[0]) {
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${f.multipassTerrainEnabled?"depth = pos.z;":""}
      linearDepth = (-pos.z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
`),m.vertex.code.add(Texture.t`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;
    vpos = position;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;
      ${x?Texture.t`vLineWidth = lineWidth;`:""}
      ${b?Texture.t`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);

      clipAndTransform(pos, prev, next, isStartVertex);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);
  `),f.stippleEnabled&&m.vertex.code.add(Texture.t`float isEndVertex = float(!isStartVertex);
vec4 segmentInfo = mix(vec4(pos.xy, right), vec4(prev.xy, left), isEndVertex);
vec2 segmentOrigin = segmentInfo.xy;
vec2 segment = segmentInfo.zw;`),m.vertex.code.add(Texture.t`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),f.roundJoins?m.vertex.code.add(Texture.t`vec2 startDir;
vec2 endDir;
if (leftLen < 0.001) {
startDir = right;
}
else{
startDir = left;
}
startDir = normalize(startDir);
startDir = PERPENDICULAR(startDir);
if (rightLen < 0.001) {
endDir = left;
}
else{
endDir = right;
}
endDir = normalize(endDir);
endDir = PERPENDICULAR(endDir);
float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
joinDisplacementDir = rotate(startDir, -sign(uv0.y) * subdivisionFactor * rotationAngle);`):m.vertex.code.add(Texture.t`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = isStartVertex ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`),m.vertex.code.add(Texture.t`displacementLen = lineWidth;
}
} else {
if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = isStartVertex ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
displacementLen = lineWidth;
capDisplacementDir = isStartVertex ? -right : left;
capDisplacementDir *= subdivisionFactor;
}`),m.vertex.code.add(Texture.t`
  // Displacement (in pixels) caused by join/or cap
  vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

  ${u||D?Texture.t`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

  ${D?Texture.t`vLineDistance = lineWidth * lineDistNorm;`:""}
  ${u?Texture.t`vLineDistanceNorm = lineDistNorm;`:""}

  ${v?Texture.t`vCapPosition = isJoin ? vec2(0.0) : dpos;`:""}

  pos.xy += dpos;
  `),f.stippleEnabled&&(g?(f.draped||m.vertex.code.add(Texture.t`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),m.vertex.code.add(Texture.t`
        float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);

        float segmentLengthScreen = length(segment);
        float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
        float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
        float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;

        float patternLength = ${f.scaleStippleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

        // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
        // The 0.5 factor on the screen length is to correct for pixel ratio (it is calculated at double resolution)
        vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen * 0.5, patternLength);

        ${L?Texture.t`vStippleDistanceLimits += vec2(lineSize * 0.5);`:""}

        stippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

        // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
        if (segmentLengthScreen >= 0.001) {
          // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
          // original vertex positions, and slightly outside of that range at the displaced positions
          vec2 stippleDisplacement = pos.xy - segmentOrigin;
          float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreen * segmentLengthScreen);

          // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
          stippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
        }

        // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
        vStippleDistanceLimits *= pos.w;
        stippleDistance *= pos.w;
      `)):(m.vertex.code.add(Texture.t`vec2 posVec = pos.xy - segmentOrigin;
float segmentDirectionLength = length(segment);`),f.stippleIntegerRepeatsEnabled&&m.vertex.code.add(Texture.t`float numberOfPatternRepeats = segmentDirectionLength * 0.5 * stipplePatternPixelSizeInv;
float roundedNumberOfPatternRepeats = floor(numberOfPatternRepeats);
stippleDistanceMax = roundedNumberOfPatternRepeats;`),m.vertex.code.add(Texture.t`
        if (segmentDirectionLength >= 0.001) {
          // Project the vertex position onto the line segment.
          float projectedLength = dot(segment, posVec) / segmentDirectionLength * 0.5;
          ${f.stippleIntegerRepeatsEnabled?"float wholeNumberOfRepeatsScale = roundedNumberOfPatternRepeats / numberOfPatternRepeats;":"float wholeNumberOfRepeatsScale = 1.0;"}
          stippleDistance = projectedLength * wholeNumberOfRepeatsScale * stipplePatternPixelSizeInv * pos.w;
        } else {
          stippleDistance = 1.0;
        }
      `))),m.vertex.code.add(Texture.t`pos.xy = pos.xy / screenSize * pos.w;
vColor = getColor();
vColor.a *= coverage;
gl_Position = pos;
}
}`),f.multipassTerrainEnabled&&(m.fragment.include(Texture.a),m.include(Texture.r$6,f)),m.include(Texture.c,f),m.fragment.uniforms.add("intrinsicColor","vec4"),m.fragment.include(Texture.e$1),m.fragment.code.add(Texture.t`
  void main() {
    discardBySlice(vpos);
    ${f.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),v&&m.fragment.code.add(Texture.t`
    float fragmentRadius = length(vCapPosition);
    float fragmentSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
    float capCoverage = clamp(0.5 - fragmentSDF, 0.0, 1.0);
    if (capCoverage < ${Texture.t.float(Texture.o$1)}) {
      discard;
    }
  `),h?m.fragment.code.add(Texture.t`
      vec2 stipplePosition = vec2(
        max(1.0 - getStippleSDF() * 2.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${Texture.t.float(Texture.o$1)}, stippleCoverage);
    `):m.fragment.code.add(Texture.t`float stippleAlpha = getStippleAlpha();`),m.fragment.code.add(Texture.t`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),f.innerColorEnabled&&(m.fragment.uniforms.add("pixelRatio","float"),m.fragment.code.add(Texture.t`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),m.fragment.code.add(Texture.t`vec4 finalColor = blendStipple(color, stippleAlpha);`),f.falloffEnabled&&m.fragment.code.add(Texture.t`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`),m.fragment.code.add(Texture.t`
    if (finalColor.a < ${Texture.t.float(Texture.o$1)}) {
      discard;
    }

    ${7===f.output?Texture.t`gl_FragColor = vec4(finalColor.a);`:""}
    ${0===f.output?Texture.t`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${0===f.output&&f.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${4===f.output?Texture.t`gl_FragColor = vec4(1.0);`:""}
    ${1===f.output?Texture.t`outputDepth(linearDepth);`:""}
  }
  `),m}const m$2=Object.freeze({__proto__:null,build:f$3});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I$3=new Map([["position",0],["subdivisionFactor",1],["uv0",2],["auxpos1",3],["auxpos2",4],["size",6],["sizeFeatureAttribute",6],["color",5],["colorFeatureAttribute",5],["opacityFeatureAttribute",7]]);class _$2 extends Texture.t$2{constructor(e,t,i){super(e,t,i),this.stippleTextureRepository=e.stippleTextureRepository;}initializeProgram(e){const t=_$2.shader.get(),i=this.configuration,r=t.build({OITEnabled:0===i.transparencyPassType,output:i.output,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,draped:i.draped,stippleEnabled:i.stippleEnabled,stippleOffColorEnabled:i.stippleOffColorEnabled,stippleDistanceMaxEnabled:i.stippleIntegerRepeatsEnabled,stippleIntegerRepeatsEnabled:i.stippleIntegerRepeatsEnabled,scaleStippleWithLineWidth:i.scaleStippleWithLineWidth,capType:i.capType,roundJoins:i.roundJoins,vvColor:i.vvColor,vvSize:i.vvSize,vvInstancingEnabled:!0,vvOpacity:i.vvOpacity,falloffEnabled:i.falloffEnabled,innerColorEnabled:i.innerColorEnabled,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new Texture.n$1(e.rctx,r,I$3)}dispose(){super.dispose(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null;}bindPass(e,s){if(Texture.t$5(this.program,s.camera.projectionMatrix),4===this.configuration.output&&Texture.g(this.program,s),s.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",s.inverseViewport),Texture.t$7(this.program,s)),this.program.setUniform1f("intrinsicWidth",e.width),this.program.setUniform4fv("intrinsicColor",e.color),this.program.setUniform1f("miterLimit","miter"!==e.join?0:e.miterLimit),this.program.setUniform2fv("cameraNearFar",s.camera.nearFar),this.program.setUniform1f("pixelRatio",s.camera.pixelRatio),this.program.setUniform2f("screenSize",s.camera.fullViewport[2],s.camera.fullViewport[3]),Texture.r$9(this.program,e),this.stipplePattern!==e.stipplePattern){const t=e.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,t),this.stipplePattern=t;}if(this.configuration.stippleEnabled){const{pixelSize:r,sdfNormalizer:n,pixels:p}=request.r(this.stippleTextureBind)?this.stippleTextureBind(this.program):{pixelSize:1,sdfNormalizer:1,pixels:1};if(this.program.setUniform1f("stipplePatternSDFNormalizer",n),this.program.setUniform1f("stipplePatternTextureSize",p),I$6.ENABLE_CONTINUOUS_LINE_PATTERNS?(this.program.setUniform1f("stipplePatternPixelSize",r),this.program.setUniform1f("stipplePatternPixelSizeInv",1/r),this.configuration.draped?this.program.setUniform1f("worldToScreenRatio",1/s.screenToWorldRatio):(this.program.setUniform1f("worldToScreenPerDistanceRatio",1/s.camera.perScreenPixelRatio),this.program.setUniform1f("cameraDistanceToSurface",s.camera.distanceFromSurface))):this.program.setUniform1f("stipplePatternPixelSizeInv",1/(r*s.camera.pixelRatio)),this.configuration.stippleOffColorEnabled){const t=request.e$2(e.stippleOffColor);this.program.setUniform4f("stippleOffColor",t[0],t[1],t[2],t.length>3?t[3]:1);}}this.configuration.falloffEnabled&&this.program.setUniform1f("falloff",e.falloff),this.configuration.innerColorEnabled&&(this.program.setUniform4fv("innerColor",request.c$2(e.innerColor,e.color)),this.program.setUniform1f("innerWidth",e.innerWidth*s.camera.pixelRatio));}bindDraw(e){Texture.a$4(this.program,e),this.configuration.stippleEnabled&&I$6.ENABLE_CONTINUOUS_LINE_PATTERNS&&!this.configuration.draped&&Texture.o$5(this.program,e.origin,e.camera.viewInverseTransposeMatrix),Texture.l$2(this.program,this.configuration,e),this.program.rebindTextures();}makePipelineState(e,t){const i=this.configuration,r=3===e,o=2===e;return OrderIndependentTransparency.g({blending:0===i.output||7===i.output?r?OrderIndependentTransparency.u:OrderIndependentTransparency.c(e):null,depthTest:{func:OrderIndependentTransparency.a(e)},depthWrite:r?!i.transparent&&i.writeDepth&&OrderIndependentTransparency.l:OrderIndependentTransparency.l$1(e),colorWrite:OrderIndependentTransparency.r,stencilWrite:i.sceneHasOcludees?Texture.f$2:null,stencilTest:i.sceneHasOcludees?t?Texture.t$8:Texture.c$1:null,polygonOffset:r||o?i.polygonOffset&&N$2:OrderIndependentTransparency.i$1})}initializePipeline(){const e=this.configuration,t=e.polygonOffset&&N$2;return e.occluder&&(this._occluderPipelineTransparent=OrderIndependentTransparency.g({blending:OrderIndependentTransparency.u,polygonOffset:t,depthTest:Texture.n$3,depthWrite:null,colorWrite:OrderIndependentTransparency.r,stencilWrite:null,stencilTest:Texture.e$4}),this._occluderPipelineOpaque=OrderIndependentTransparency.g({blending:OrderIndependentTransparency.u,polygonOffset:t,depthTest:Texture.n$3,depthWrite:null,colorWrite:OrderIndependentTransparency.r,stencilWrite:Texture.i$3,stencilTest:Texture.u$3}),this._occluderPipelineMaskWrite=OrderIndependentTransparency.g({blending:null,polygonOffset:t,depthTest:Texture.a$7,depthWrite:null,colorWrite:null,stencilWrite:Texture.f$2,stencilTest:Texture.t$8})),this._occludeePipelineState=this.makePipelineState(this.configuration.transparencyPassType,!0),this.makePipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return 5}getPipelineState(e,t){return t?this._occludeePipelineState:this.configuration.occluder?10===e?this._occluderPipelineTransparent:9===e?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipelineState(e,t)}}_$2.shader=new Texture.t$3(m$2,(()=>Promise.resolve().then(function () { return require('./RibbonLine.glsl-e02a407f.js'); })));const N$2={factor:0,units:-4};class A$2 extends Texture.t$1{constructor(){super(...arguments),this.output=0,this.occluder=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.polygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleIntegerRepeatsEnabled=!1,this.scaleStippleWithLineWidth=!1,this.capType=0,this.roundJoins=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1;}}request.e([Texture.e({count:8})],A$2.prototype,"output",void 0),request.e([Texture.e()],A$2.prototype,"occluder",void 0),request.e([Texture.e()],A$2.prototype,"slicePlaneEnabled",void 0),request.e([Texture.e()],A$2.prototype,"transparent",void 0),request.e([Texture.e()],A$2.prototype,"polygonOffset",void 0),request.e([Texture.e()],A$2.prototype,"writeDepth",void 0),request.e([Texture.e()],A$2.prototype,"draped",void 0),request.e([Texture.e()],A$2.prototype,"stippleEnabled",void 0),request.e([Texture.e()],A$2.prototype,"stippleOffColorEnabled",void 0),request.e([Texture.e()],A$2.prototype,"stippleIntegerRepeatsEnabled",void 0),request.e([Texture.e()],A$2.prototype,"scaleStippleWithLineWidth",void 0),request.e([Texture.e({count:3})],A$2.prototype,"capType",void 0),request.e([Texture.e()],A$2.prototype,"roundJoins",void 0),request.e([Texture.e()],A$2.prototype,"vvSize",void 0),request.e([Texture.e()],A$2.prototype,"vvColor",void 0),request.e([Texture.e()],A$2.prototype,"vvOpacity",void 0),request.e([Texture.e()],A$2.prototype,"falloffEnabled",void 0),request.e([Texture.e()],A$2.prototype,"innerColorEnabled",void 0),request.e([Texture.e()],A$2.prototype,"sceneHasOcludees",void 0),request.e([Texture.e({count:4})],A$2.prototype,"transparencyPassType",void 0),request.e([Texture.e()],A$2.prototype,"multipassTerrainEnabled",void 0),request.e([Texture.e()],A$2.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const F$2=request.s$1.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial");class W$1 extends Texture.a$5{constructor(e){super(e,G$1),this._vertexAttributeLocations=I$3,this.techniqueConfig=new A$2,this.layout=this.createLayout();}isClosed(e,t){return J$2(this.parameters,e,t)}dispose(){}getPassParameters(){return this.parameters}getTechniqueConfig(e,t){this.techniqueConfig.output=e,this.techniqueConfig.draped=20===t.slot;const s=request.r(this.parameters.stipplePattern);return this.techniqueConfig.stippleEnabled=s,this.techniqueConfig.stippleIntegerRepeatsEnabled=s&&this.parameters.stippleIntegerRepeats,this.techniqueConfig.stippleOffColorEnabled=s&&request.r(this.parameters.stippleOffColor),this.techniqueConfig.scaleStippleWithLineWidth=s&&this.parameters.scaleStippleWithLineWidth,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.roundJoins="round"===this.parameters.join,this.techniqueConfig.capType=this.parameters.cap,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.polygonOffset=this.parameters.polygonOffset,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.vvOpacity=this.parameters.vvOpacityEnabled,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.innerColorEnabled=this.parameters.innerWidth>0&&request.r(this.parameters.innerColor),this.techniqueConfig.falloffEnabled=this.parameters.falloff>0,this.techniqueConfig.occluder=8===this.parameters.renderOccluded,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}intersect(e,t,i,s,r,n,a,o,l){l?this.intersectDrapedLineGeometry(e,s,n,a):this.intersectLineGeometry(e,t,i,s,a);}intersectDrapedLineGeometry(e,i,s,r){if(!i.options.selectionMode)return;const n=e.vertexAttributes.get("position").data,a=e.vertexAttributes.get("size");let o=this.parameters.width;if(this.parameters.vvSizeEnabled){const i=e.vertexAttributes.get("sizeFeatureAttribute").data[0];o*=mathUtils.e(this.parameters.vvSizeOffset[0]+i*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0]);}else a&&(o*=a.data[0]);const l=s[0],u=s[1],c=(o/2+4)*e.screenToWorldRatio;let p=Number.MAX_VALUE;for(let h=0;h<n.length-5;h+=3){const e=n[h],i=n[h+1],s=l-e,r=u-i,a=n[h+3]-e,o=n[h+4]-i,c=mathUtils.e((a*s+o*r)/(a*a+o*o),0,1),m=a*c-s,f=o*c-r,d=m*m+f*f;d<p&&(p=d);}p<c*c&&r();}intersectLineGeometry(e,i,s,m,f){if(!m.options.selectionMode||utils.c(i))return;if(!Util.A(s))return void F$2.error("intersection assumes a translation-only matrix");const d=e.vertexAttributes,C=d.get("position").data;let q=this.parameters.width;if(this.parameters.vvSizeEnabled){const e=d.get("sizeFeatureAttribute").data[0];q*=mathUtils.e(this.parameters.vvSizeOffset[0]+e*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0]);}else d.has("size")&&(q*=d.get("size").data[0]);const x=m.camera,z=X$1;vec2.a(z,m.point);const E=q*x.pixelRatio/2+4*x.pixelRatio;mathUtils.o(re$2[0],z[0]-E,z[1]+E,0),mathUtils.o(re$2[1],z[0]+E,z[1]+E,0),mathUtils.o(re$2[2],z[0]+E,z[1]-E,0),mathUtils.o(re$2[3],z[0]-E,z[1]-E,0);for(let t=0;t<4;t++)if(!x.unprojectFromRenderScreen(re$2[t],ne$1[t]))return;plane.y(x.eye,ne$1[0],ne$1[1],ae),plane.y(x.eye,ne$1[1],ne$1[2],oe$1),plane.y(x.eye,ne$1[2],ne$1[3],le),plane.y(x.eye,ne$1[3],ne$1[0],ue);let j=Number.MAX_VALUE;const L=B$1(this.parameters,d,e.indices)?C.length-2:C.length-5;for(let t=0;t<L;t+=3){V$1[0]=C[t]+s[12],V$1[1]=C[t+1]+s[13],V$1[2]=C[t+2]+s[14];const e=(t+3)%C.length;if(k$3[0]=C[e]+s[12],k$3[1]=C[e+1]+s[13],k$3[2]=C[e+2]+s[14],plane.R(ae,V$1)<0&&plane.R(ae,k$3)<0||plane.R(oe$1,V$1)<0&&plane.R(oe$1,k$3)<0||plane.R(le,V$1)<0&&plane.R(le,k$3)<0||plane.R(ue,V$1)<0&&plane.R(ue,k$3)<0)continue;if(x.projectToRenderScreen(V$1,K$1),x.projectToRenderScreen(k$3,Q$1),K$1[2]<0&&Q$1[2]>0){mathUtils.c(I$2,V$1,k$3);const e=x.frustum,t=-plane.R(e[4],V$1)/mathUtils.z(I$2,plane.W(e[4]));mathUtils.d(I$2,I$2,t),mathUtils.u(V$1,V$1,I$2),x.projectToRenderScreen(V$1,K$1);}else if(K$1[2]>0&&Q$1[2]<0){mathUtils.c(I$2,k$3,V$1);const e=x.frustum,t=-plane.R(e[4],k$3)/mathUtils.z(I$2,plane.W(e[4]));mathUtils.d(I$2,I$2,t),mathUtils.u(k$3,k$3,I$2),x.projectToRenderScreen(k$3,Q$1);}else if(K$1[2]<0&&Q$1[2]<0)continue;K$1[2]=0,Q$1[2]=0;const i=lineSegment.b(lineSegment.l(K$1,Q$1,$$2),z);i<j&&(j=i,mathUtils.r(Y$1,V$1),mathUtils.r(Z$2,k$3));}const P=m.rayBeginPoint,w=m.rayEndPoint;if(j<E*E){let e=Number.MAX_VALUE;if(lineSegment.k(lineSegment.l(Y$1,Z$2,$$2),lineSegment.l(P,w,ee$2),N$1)){mathUtils.c(N$1,N$1,P);const t=mathUtils.s(N$1);mathUtils.d(N$1,N$1,1/t),e=t/mathUtils.q(P,w);}f(e,N$1);}}computeAttachmentOrigin(e,t){const i=e.vertexAttributes;if(!i)return null;const s=e.indices,r=i.get("position");return geometryDataUtils.g(r,s?s.get("position"):null,s&&B$1(this.parameters,i,s),t)}createLayout(){const e=InterleavedLayout.A().vec3f("position").f32("subdivisionFactor").vec2f("uv0").vec3f("auxpos1").vec3f("auxpos2");return this.parameters.vvSizeEnabled?e.f32("sizeFeatureAttribute"):e.f32("size"),this.parameters.vvColorEnabled?e.f32("colorFeatureAttribute"):e.vec4f("color"),this.parameters.vvOpacityEnabled&&e.f32("opacityFeatureAttribute"),e}createBufferWriter(){return new D$3(this.layout,this.parameters)}requiresSlot(e,t){if(20===e)return !0;if(8===this.parameters.renderOccluded)return 2===e||9===e||10===e;const i=t$9(t);if(0===i||7===i){return e===(this.parameters.writeDepth?4:7)}return 2===e}createGLMaterial(e){return 0===e.output||7===e.output||4===e.output||1===e.output?new _$1(e):null}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0),this.requiresTransparent(e)&&(e.transparent=!0);}requiresTransparent(e){return !!((e.color&&e.color[3])<1||e.innerWidth>0&&this.colorRequiresTransparent(e.innerColor)||e.stipplePattern&&this.colorRequiresTransparent(e.stippleOffColor)||e.falloff>0)}colorRequiresTransparent(e){return request.r(e)&&e[3]<1&&e[3]>0}}class _$1 extends Texture.e$5{updateParameters(e){return this.ensureTechnique(_$2,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees});}beginSlot(e){return 0!==this._output&&7!==this._output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.getPassParameters(),e);}}const G$1={width:0,color:[1,1,1,1],join:"miter",cap:0,miterLimit:5,writeDepth:!0,polygonOffset:!1,stipplePattern:null,stippleIntegerRepeats:!1,stippleOffColor:null,scaleStippleWithLineWidth:!1,slicePlaneEnabled:!1,vvFastUpdate:!1,transparent:!1,isClosed:!1,falloff:0,innerWidth:0,innerColor:null,sceneHasOcludees:!1,...Texture.n$2,...e$6.Default};class D$3{constructor(e,t){switch(this.parameters=t,this.numJoinSubdivisions=0,this.vertexBufferLayout=e,this.parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=t.stipplePattern?1:0;break;case"round":this.numJoinSubdivisions=H$1;}}isClosed(e){return B$1(this.parameters,e.vertexAttributes,e.indices)}numCapSubdivisions(e){if(this.isClosed(e))return 0;switch(this.parameters.cap){case 1:case 2:return 1;default:return 0}}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=2*this.numCapSubdivisions(e)+2,i=e.indices.get("position").length/2+1,s=this.isClosed(e);let r=s?2:2*t;const n=s?0:1,a=s?i:i-1;if(e.vertexAttributes.has("subdivisions")){const t=e.vertexAttributes.get("subdivisions").data;for(let e=n;e<a;++e){r+=4+2*t[e];}}else {r+=(a-n)*(2*this.numJoinSubdivisions+4);}return r+=2,r}write(e,t,i,s){const r=te$2,a=ie$1,o=se$2,l=t.vertexAttributes.get("position").data,u=t.indices&&t.indices.get("position"),p=this.numCapSubdivisions(t);u&&u.length!==2*(l.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let f=null;t.vertexAttributes.has("subdivisions")&&(f=t.vertexAttributes.get("subdivisions").data);let d=1,v=0;this.parameters.vvSizeEnabled?v=t.vertexAttributes.get("sizeFeatureAttribute").data[0]:t.vertexAttributes.has("size")&&(d=t.vertexAttributes.get("size").data[0]);let b=[1,1,1,1],g=0;this.parameters.vvColorEnabled?g=t.vertexAttributes.get("colorFeatureAttribute").data[0]:t.vertexAttributes.has("color")&&(b=t.vertexAttributes.get("color").data);let C=0;this.parameters.vvOpacityEnabled&&(C=t.vertexAttributes.get("opacityFeatureAttribute").data[0]);const S=l.length/3,y=e.transformation,A=new Float32Array(i.buffer),q=this.vertexBufferLayout.stride/4;let x=s*q;const z=x;let E=0;const j=(e,t,i,s,r,n,a)=>{if(A[x++]=t[0],A[x++]=t[1],A[x++]=t[2],A[x++]=s,A[x++]=a,A[x++]=r,A[x++]=e[0],A[x++]=e[1],A[x++]=e[2],A[x++]=i[0],A[x++]=i[1],A[x++]=i[2],this.parameters.vvSizeEnabled?A[x++]=v:A[x++]=d,this.parameters.vvColorEnabled)A[x++]=g;else {const e=Math.min(4*n,b.length-4);A[x++]=b[e+0],A[x++]=b[e+1],A[x++]=b[e+2],A[x++]=b[e+3];}this.parameters.vvOpacityEnabled&&(A[x++]=C);};x+=q,mathUtils.o(a,l[0],l[1],l[2]),y&&mathUtils.I(a,a,y);const L=this.isClosed(t);if(L){const e=l.length-3;mathUtils.o(r,l[e],l[e+1],l[e+2]),y&&mathUtils.I(r,r,y);}else {mathUtils.r(r,a),mathUtils.o(o,l[3],l[4],l[5]),y&&mathUtils.I(o,o,y);for(let e=0;e<p;++e){const t=1-e/p;j(r,a,o,t,-4,0,E),j(r,a,o,t,4,0,E);}j(r,a,o,0,-4,0,E),j(r,a,o,0,4,0,E),mathUtils.r(r,a),mathUtils.r(a,o);}const O=L?0:1,P=L?S:S-1;for(let T=O;T<P;T++){const e=(T+1)%S*3;mathUtils.o(o,l[e+0],l[e+1],l[e+2]),y&&mathUtils.I(o,o,y),E+=mathUtils.q(r,a),j(r,a,o,0,-1,T,E),j(r,a,o,0,1,T,E);const t=f?f[T]:this.numJoinSubdivisions;for(let i=0;i<t;++i){const e=(i+1)/(t+1);j(r,a,o,e,-2,T,E),j(r,a,o,e,2,T,E);}j(r,a,o,1,-2,T,E),j(r,a,o,1,2,T,E),mathUtils.r(r,a),mathUtils.r(a,o);}if(L)mathUtils.o(o,l[3],l[4],l[5]),y&&mathUtils.I(o,o,y),E+=mathUtils.q(r,a),j(r,a,o,0,-1,O,E),j(r,a,o,0,1,O,E);else {E+=mathUtils.q(r,a),j(r,a,o,0,-5,P,E),j(r,a,o,0,5,P,E);for(let e=0;e<p;++e){const t=(e+1)/p;j(r,a,o,t,-5,P,E),j(r,a,o,t,5,P,E);}}U$1(A,z+q,A,z,q);x=U$1(A,x-q,A,x,q);}}function U$1(e,t,i,s,r){for(let n=0;n<r;n++)i[s++]=e[t++];return s}function B$1(e,t,i){return J$2(e,t.get("position").data,i?i.get("position"):null)}function J$2(e,t,i){return !!e.isClosed&&(i?i.length>2:t.length>6)}const H$1=1,V$1=common.n(),k$3=common.n(),I$2=common.n(),N$1=common.n(),X$1=common.n(),K$1=screenUtils.x(),Q$1=screenUtils.x(),Y$1=common.n(),Z$2=common.n(),$$2=lineSegment.v(),ee$2=lineSegment.v(),te$2=common.n(),ie$1=common.n(),se$2=common.n(),re$2=[screenUtils.x(),screenUtils.x(),screenUtils.x(),screenUtils.x()],ne$1=[common.n(),common.n(),common.n(),common.n()],ae=plane.p(),oe$1=plane.p(),le=plane.p(),ue=plane.p();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class d$4{constructor(t,r=125e4){this._originSR=t,this._gridSize=r,this._origins=new Map,this._objects=new Map,this._rootOriginId="root/"+request.e$5();}getOrigin(i){const r=this._origins.get(this._rootOriginId);if(null==r){if(request.r(g$4))return this._origins.set(this._rootOriginId,c$5(g$4[0],g$4[1],g$4[2],this._rootOriginId)),this.getOrigin(i);const r=c$5(i[0]+Math.random()-.5,i[1]+Math.random()-.5,i[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,r),r}const s=this._gridSize,e=Math.round(i[0]/s),n=Math.round(i[1]/s),h=Math.round(i[2]/s),c=`${e}/${n}/${h}`;let m=this._origins.get(c);const d=.5*s;if(mathUtils.c(f$2,i,r.vec3),f$2[0]=Math.abs(f$2[0]),f$2[1]=Math.abs(f$2[1]),f$2[2]=Math.abs(f$2[2]),f$2[0]<d&&f$2[1]<d&&f$2[2]<d){if(m){const t=Math.max(...f$2);mathUtils.c(f$2,i,m.vec3),f$2[0]=Math.abs(f$2[0]),f$2[1]=Math.abs(f$2[1]),f$2[2]=Math.abs(f$2[2]);if(Math.max(...f$2)<t)return m}return r}return m||(m=c$5(e*s,n*s,h*s,c),this._origins.set(c,m)),m}_drawOriginBox(t,i=[1,1,0,1]){const o=window.view,s=o._stage,a=i.toString();if(!this._objects.has(a)){this._material=new W$1({width:2,color:i}),s.add(this._material);const t=new n$7({isPickable:!1}),r=new intersectorUtils.T({castShadow:!1});s.add(r),t.add(r),s.add(t),this._objects.set(a,r);}const d=this._objects.get(a),g=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],_=g.length,f=new Array(3*_),l=new Uint16Array(2*(_-1)),p=.5*this._gridSize;for(let r=0;r<_;r++)f[3*r+0]=t[0]+(1&g[r]?p:-p),f[3*r+1]=t[1]+(2&g[r]?p:-p),f[3*r+2]=t[2]+(4&g[r]?p:-p),r>0&&(l[2*r+0]=r-1,l[2*r+1]=r);projection.xn(f,this._originSR,0,f,o.renderSpatialReference,0,_);const u=new Texture.u$1([["position",{size:3,data:f,exclusive:!0}]],[["position",l]],2);s.add(u),d.addGeometry(u,this._material,mat4f64.a);}}let g$4=null;const f$2=common.n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e$5{constructor(e){this.rctx=e,this.camera=null,this.lastFrameCamera=new J$4,this.pass=0,this.slot=2,this.highlightDepthTexture=null,this.renderOccludedMask=r$a,this.hasOccludees=!1;}resetRenderOccludedMask(){this.renderOccludedMask=r$a;}get isHighlightPass(){return 5===this.pass}}class t$6 extends e$5{constructor(s,e,t,r,i,h){super(s),this.offscreenRenderingHelper=e,this.scenelightingData=t,this.shadowMap=r,this.ssaoHelper=i,this.sliceHelper=h;}}const r$a=13;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r$9{constructor(){this.adds=new request.n$10,this.removes=new request.n$10,this.updates=new request.n$10({allocator:e=>e||new s$7,deallocator:e=>(e.renderGeometry=null,e)});}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear();}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune();}}class s$7{}class t$5{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$8(r){const n=new Map,a=r=>{let t=n.get(r);return t||(t=new t$5,n.set(r,t)),t};return r.adds.forAll((e=>{t$4(e)&&a(e.material).adds.push(e);})),r.removes.forAll((e=>{t$4(e)&&a(e.material).removes.push(e);})),r.updates.forAll((e=>{t$4(e.renderGeometry)&&a(e.renderGeometry.material).updates.push(e);})),n}function t$4(e){return e.data.indexCount>=1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i$3{constructor(){this.enabled=!0,this._time=0;}get time(){return request.n$9(this._time)}advance(t){return request.r(t.forcedTime)?this._time!==t.forcedTime&&(this._time=t.forcedTime,!0):!(!this.enabled||0===t.dt)&&(this._time+=t.dt,!0)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$6(o){o.fragment.uniforms.add("lastFrameColorMap","sampler2D"),o.fragment.uniforms.add("reprojectionMat","mat4"),o.fragment.uniforms.add("rpProjectionMat","mat4"),o.fragment.code.add(Texture.t`vec2 reprojectionCoordinate(vec3 projectionCoordinate)
{
vec4 zw = rpProjectionMat * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
vec4 reprojectedCoord = reprojectionMat * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
reprojectedCoord.xy /= reprojectedCoord.w;
return reprojectedCoord.xy * 0.5 + 0.5;
}`);}function e$4(r,o){r.bindTexture(o.lastFrameColorTexture,"lastFrameColorMap"),r.setUniformMatrix4fv("reprojectionMat",o.reprojectionMatrix),r.setUniformMatrix4fv("rpProjectionMat",o.camera.projectionMatrix);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a$8(o,a){o.fragment.uniforms.add("nearFar","vec2"),o.fragment.uniforms.add("depthMapView","sampler2D"),o.fragment.uniforms.add("ssrViewMat","mat4"),o.fragment.uniforms.add("invResolutionHeight","float"),o.fragment.include(Texture.a),o.include(o$6),o.fragment.code.add(Texture.t`
  const int maxSteps = ${a.highStepCount?"150;":"75;"}

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(rpProjectionMat, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(rpProjectionMat, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(rpProjectionMat, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMapView, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
          return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `);}function i$2(e,t){t.ssrEnabled&&(e.bindTexture(t.linearDepthTexture,"depthMapView"),e.setUniform2fv("nearFar",t.camera.nearFar),e.setUniformMatrix4fv("ssrViewMat",t.camera.viewMatrix),e.setUniform1f("invResolutionHeight",1/t.camera.height),e$4(e,t));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$5(o){o.fragment.code.add(Texture.t`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`);}function n$6(o){o.fragment.code.add(Texture.t`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$7(r){r.fragment.uniforms.add("texWaveNormal","sampler2D"),r.fragment.uniforms.add("texWavePerturbation","sampler2D"),r.fragment.uniforms.add("waveParams","vec4"),r.fragment.uniforms.add("waveDirection","vec2"),r.include(o$5),r.fragment.code.add(Texture.t`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture2D(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`);}function a$7(e,t){e.setUniform4f("waveParams",t.waveStrength,t.waveTextureRepeat,t.flowStrength,t.flowOffset),e.setUniform2f("waveDirection",t.waveDirection[0]*t.waveVelocity,t.waveDirection[1]*t.waveVelocity);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$5(n,r){1===r.viewingMode?n.vertex.code.add(Texture.t`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):n.vertex.code.add(Texture.t`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),1===r.viewingMode?n.vertex.code.add(Texture.t`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):n.vertex.code.add(Texture.t`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a$6(a,n){a.include(Texture.a$8,n),a.include(e$9),a.include(n$6),n.ssrEnabled&&a.include(a$8,n),a.fragment.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.775).add("waterSeeColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]),a.fragment.code.add(Texture.t`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),a.fragment.code.add(Texture.t`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 positionView) {
float reflectionHit = 0.;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}`),n.ssrEnabled?a.fragment.code.add(Texture.t`vec4 viewPosition = vec4(positionView.xyz, 1.0);
vec3 viewDir = normalize(viewPosition.xyz);
vec4 viewNormalVectorCoordinate = ssrViewMat *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = ssrViewMat *vec4(localUp, 0.0);
float correctionViewingFactor = pow(max(dot(-viewDir, viewUp.xyz), 0.0), correctionViewingPowerFactor);
vec3 viewNormalCorrected = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrected));
vec3 hitCoordinate = screenSpaceIntersection( normalize(reflected), viewPosition.xyz, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -positionView.z);
reflectionHit = waterDiffusion * clamp(1.0 - (1.3*dCoords.y), 0.0, 1.0) * heightMod;
reflectedColor = linearizeGamma(texture2D(lastFrameColorMap, reprojectedCoordinate).xyz)* reflectionHit * fresnelModifier.y * ssrIntensity;
}
float seeColorMod =  mix(waterSeeColorMod, waterSeeColorMod*0.5, reflectionHit);
return tonemapACES((1. - reflectionHit) * reflSky + reflectedColor + reflSea * seeColorMod + specular + foam);
}`):a.fragment.code.add(Texture.t`return tonemapACES(reflSky + reflSea * waterSeeColorMod + specular + foam);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p$4(p){const u=new Texture.n;return u.include(Texture.r,{linearDepth:!1}),u.attributes.add("position","vec3"),u.attributes.add("uv0","vec2"),u.vertex.uniforms.add("proj","mat4").add("view","mat4").add("localOrigin","vec3"),u.vertex.uniforms.add("waterColor","vec4"),0!==p.output&&7!==p.output||(u.include(n$5,p),u.include(Texture.a$2,p),u.varyings.add("vuv","vec2"),u.varyings.add("vpos","vec3"),u.varyings.add("vnormal","vec3"),u.varyings.add("vtbnMatrix","mat3"),p.multipassTerrainEnabled&&u.varyings.add("depth","float"),u.vertex.code.add(Texture.t`
      void main(void) {
        if (waterColor.a < ${Texture.t.float(Texture.o$1)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${p.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${0===p.output?"forwardLinearDepth();":""}
      }
    `)),p.multipassTerrainEnabled&&(u.fragment.include(Texture.a),u.include(Texture.r$6,p)),7===p.output&&(u.include(Texture.c,p),u.fragment.uniforms.add("waterColor","vec4"),u.fragment.code.add(Texture.t`
        void main() {
          discardBySlice(vpos);
          ${p.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `)),0===p.output&&(u.include(r$7,p),u.include(Texture.c,p),p.receiveShadows&&u.include(Texture.t$6,p),u.include(a$6,p),u.fragment.uniforms.add("waterColor","vec4").add("lightingMainDirection","vec3").add("lightingMainIntensity","vec3").add("camPos","vec3").add("timeElapsed","float").add("view","mat4"),u.fragment.include(Texture.e$1),u.fragment.code.add(Texture.t`
      void main() {
        discardBySlice(vpos);
        ${p.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - camPos);
        float shadow = ${p.receiveShadows?Texture.t`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, lightingMainDirection, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${p.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),2===p.output&&(u.include(n$5,p),u.include(r$7,p),u.include(Texture.c,p),u.varyings.add("vpos","vec3"),u.varyings.add("vuv","vec2"),u.vertex.code.add(Texture.t`
        void main(void) {
          if (waterColor.a < ${Texture.t.float(Texture.o$1)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),u.fragment.uniforms.add("timeElapsed","float"),u.fragment.code.add(Texture.t`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`)),5===p.output&&(u.varyings.add("vpos","vec3"),u.vertex.code.add(Texture.t`
        void main(void) {
          if (waterColor.a < ${Texture.t.float(Texture.o$1)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),u.fragment.uniforms.add("waterColor","vec4"),u.fragment.code.add(Texture.t`void main() {
gl_FragColor = waterColor;
}`)),4===p.output&&(u.include(Texture.r$2),u.varyings.add("vpos","vec3"),u.vertex.code.add(Texture.t`
      void main(void) {
        if (waterColor.a < ${Texture.t.float(Texture.o$1)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),u.include(Texture.c,p),u.fragment.code.add(Texture.t`void main() {
discardBySlice(vpos);
outputHighlight();
}`)),u}const u$3=Object.freeze({__proto__:null,build:p$4});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class x$3 extends Texture.t$2{constructor(r,t,e){super(r,t,e),this._textureRepository=r.waterTextureRepository;}initializeProgram(r){const t=x$3.shader.get(),e=this.configuration,i=t.build({OITEnabled:0===e.transparencyPassType,output:e.output,viewingMode:r.viewingMode,slicePlaneEnabled:e.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:e.receiveShadows,pbrMode:3,useCustomDTRExponentForWater:!0,ssrEnabled:e.useSSR,highStepCount:!0,multipassTerrainEnabled:e.multipassTerrainEnabled,cullAboveGround:e.cullAboveGround});return new Texture.n$1(r.rctx,i,Texture.o)}bindPass(r,t){Texture.t$5(this.program,t.camera.projectionMatrix),t.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),Texture.t$7(this.program,t)),0===this.configuration.output&&(t.lighting.setUniforms(this.program,!1),i$2(this.program,t)),0!==this.configuration.output&&2!==this.configuration.output||(a$7(this.program,r),this._textureRepository.bind(this.program)),this.program.setUniform4fv("waterColor",r.color),4===this.configuration.output&&Texture.g(this.program,t);}bindDraw(r){Texture.a$4(this.program,r),this.program.rebindTextures(),0!==this.configuration.output&&7!==this.configuration.output||Texture.o$5(this.program,r.origin,r.camera.viewInverseTransposeMatrix),0===this.configuration.output&&Texture.o$6(this.program,r),0!==this.configuration.output&&7!==this.configuration.output&&4!==this.configuration.output||Texture.l$2(this.program,this.configuration,r);}setPipelineState(r){const t=this.configuration,e=3===r,i=2===r;return OrderIndependentTransparency.g({blending:2!==t.output&&4!==t.output&&t.transparent?e?OrderIndependentTransparency.u:OrderIndependentTransparency.c(r):null,depthTest:{func:OrderIndependentTransparency.a(r)},depthWrite:e?t.writeDepth&&OrderIndependentTransparency.l:OrderIndependentTransparency.l$1(r),colorWrite:OrderIndependentTransparency.r,polygonOffset:e||i?null:OrderIndependentTransparency.s$1(t.enableOffset)})}initializePipeline(){return this.setPipelineState(this.configuration.transparencyPassType)}}x$3.shader=new Texture.t$3(u$3,(()=>Promise.resolve().then(function () { return require('./WaterSurface.glsl-c5b0b9e4.js'); })));class E$2 extends Texture.t$1{constructor(){super(...arguments),this.output=0,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.useSSR=!1,this.isDraped=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1;}}request.e([Texture.e({count:8})],E$2.prototype,"output",void 0),request.e([Texture.e()],E$2.prototype,"receiveShadows",void 0),request.e([Texture.e()],E$2.prototype,"slicePlaneEnabled",void 0),request.e([Texture.e()],E$2.prototype,"transparent",void 0),request.e([Texture.e()],E$2.prototype,"enableOffset",void 0),request.e([Texture.e()],E$2.prototype,"writeDepth",void 0),request.e([Texture.e()],E$2.prototype,"useSSR",void 0),request.e([Texture.e()],E$2.prototype,"isDraped",void 0),request.e([Texture.e({count:4})],E$2.prototype,"transparencyPassType",void 0),request.e([Texture.e()],E$2.prototype,"multipassTerrainEnabled",void 0),request.e([Texture.e()],E$2.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a$5 extends Texture.e$5{updateParameters(e){return this.ensureTechnique(x$3,e)}setElapsedTimeUniform(e){const t=.001*this._material.animation.time;e.setUniform1f("timeElapsed",t*this._material.parameters.animationSpeed);}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:e.shadowMappingEnabled});}_updateSSRState(e){e.ssrEnabled!==this._material.parameters.ssrEnabled&&this._material.setParameters({ssrEnabled:e.ssrEnabled});}ensureResources(e){const t=this._techniqueRep.constructionContext.waterTextureRepository;return t.ready||t.updating||t.loadTextures(e),t.ready?2:1}beginSlot(e){return 0===this._output&&(this._updateShadowState(e),this._updateSSRState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),2!==this._output&&0!==this._output||this.setElapsedTimeUniform(t.program);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$6=InterleavedLayout.A().vec3f("position"),o$4=InterleavedLayout.A().vec3f("position").vec2f("uv0"),i$1=InterleavedLayout.A().vec3f("position").vec4u8("color");class f$1{constructor(t){this.vertexBufferLayout=t;}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){return t.indices.get("position").length}write(t,r,o,i){Texture.g$2(r,this.vertexBufferLayout,t.transformation,t.invTranspTransformation,o,i);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$5={waveStrength:.06,waveTextureRepeat:32,waveDirection:vec2f64.t(1,0),waveVelocity:.05,flowStrength:.015,flowOffset:-.5,animationSpeed:.35,color:[0,0,0,0],transparent:!0,writeDepth:!0,slicePlaneEnabled:!1,isDraped:!1,receiveShadows:!0,ssrEnabled:!1,...Texture.n$2},a$4={"calm-small":{waveStrength:.005,perturbationStrength:.02,textureRepeat:12,waveVelocity:.01},"rippled-small":{waveStrength:.02,perturbationStrength:.09,textureRepeat:32,waveVelocity:.07},"slight-small":{waveStrength:.05,perturbationStrength:.07,textureRepeat:28,waveVelocity:.1},"moderate-small":{waveStrength:.075,perturbationStrength:.07,textureRepeat:24,waveVelocity:.1},"calm-medium":{waveStrength:.003125,perturbationStrength:.01,textureRepeat:8,waveVelocity:.02},"rippled-medium":{waveStrength:.035,perturbationStrength:.015,textureRepeat:12,waveVelocity:.07},"slight-medium":{waveStrength:.06,perturbationStrength:.015,textureRepeat:8,waveVelocity:.12},"moderate-medium":{waveStrength:.09,perturbationStrength:.03,textureRepeat:4,waveVelocity:.12},"calm-large":{waveStrength:.01,perturbationStrength:0,textureRepeat:4,waveVelocity:.05},"rippled-large":{waveStrength:.025,perturbationStrength:.01,textureRepeat:8,waveVelocity:.11},"slight-large":{waveStrength:.06,perturbationStrength:.02,textureRepeat:3,waveVelocity:.13},"moderate-large":{waveStrength:.14,perturbationStrength:.03,textureRepeat:2,waveVelocity:.15}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c$4 extends Texture.a$5{constructor(t){super(t,r$5),this._techniqueConfig=new E$2,this.animation=new i$3;}getTechniqueConfig(e,t){return this._techniqueConfig.output=e,this._techniqueConfig.writeDepth=this.parameters.writeDepth,this._techniqueConfig.receiveShadows=this.parameters.receiveShadows,this._techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this._techniqueConfig.transparent=this.parameters.transparent,this._techniqueConfig.useSSR=this.parameters.ssrEnabled,this._techniqueConfig.isDraped=this.parameters.isDraped,this._techniqueConfig.transparencyPassType=t.transparencyPassType,this._techniqueConfig.enableOffset=t.camera.relativeElevation<OrderIndependentTransparency.f,this._techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this._techniqueConfig.cullAboveGround=t.cullAboveGround,this._techniqueConfig}update(e){const t=Math.min(e.camera.relativeElevation,e.camera.distance);this.animation.enabled=Math.sqrt(this.parameters.waveTextureRepeat/this.parameters.waveStrength)*t<p$3;const r=this.animation.advance(e);return this.animation.enabled&&r}intersect(e,t,r,i,a,n,s){Texture.h(e,t,i,a,n,void 0,s);}requiresSlot(e,r){switch(t$9(r)){case 2:return 21===e;case 0:if(this.parameters.isDraped)return 20===e;break;case 4:return 2===e||20===e}let i=2;return this.parameters.transparent&&(i=this.parameters.writeDepth?4:7),e===i}createGLMaterial(e){if(0===e.output&&this.parameters.isDraped)return e.output=5,new a$5(e);switch(e.output){case 0:case 2:case 4:case 7:return new a$5(e)}return null}createBufferWriter(){return new f$1(o$4)}}const p$3=35e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$3{constructor(t){this.first=t.from,this.count=t.to-t.from;}}class s$6{constructor(t=0,s=0){this.from=t,this.to=s;}}class o$3 extends s$6{constructor(t,s,o,r,n,i){super(s,o),this.id=t,this.isVisible=r,this.hasHighlights=n,this.hasOccludees=i;}}function r$4(t){return Array.from(t.values()).sort(n$4)}function n$4(t,s){return t.from===s.from?t.to-s.to:t.from-s.from}function i(s,o){if(0===s.length)return void s.push(new t$3(o));const r=s[s.length-1];if(c$3(r,o)){const t=o.from-r.first+o.to-o.from;r.count=t;}else s.push(new t$3(o));}function c$3(t,s){return t.first+t.count>=s.from}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e$3{constructor(e,r){this._pool=e,this._size=0,this._buffer=e.newBuffer(s$5(r));}dispose(){this._buffer=this._pool.deleteBuffer(this._buffer),this._size=0;}release(){this.erase(0,this._size),this.dispose();}get vao(){return this._buffer.vao}get array(){return this._buffer.array}get size(){return this._size}grow(e){this._resize(this._size+e,!0).dispose();}alloc(e){return this._resize(e,!1)}_resize(e,r){let s;const i=t$2(this._buffer.length,this._size,e);if(this._buffer.length!==i){const e=this._pool.newBuffer(i);r&&(e.array.set(this._buffer.array.subarray(0,Math.min(this._size,i))),e.vao.vertexBuffers.geometry.setSubData(e.array,0,0,e.array.byteLength)),s=this._buffer,this._buffer=e;}const f=this._size;return this._size=e,s?{dispose:()=>{s.array.fill(0,0,f),this._pool.deleteBuffer(s);},copy:(e,r,t)=>this._buffer.array.set(s.array.subarray(r,t),e),hasNewBuffer:!0}:{dispose:()=>{},copy:(e,r,s)=>{e!==r&&this._buffer.array.copyWithin(e,r,s);},hasNewBuffer:!1}}erase(e,r){this._buffer.array.fill(0,e,r);}}const r$3=65536;function s$5(e){return Math.ceil(e/r$3)*r$3}function t$2(e,r,t){return r<=t?e>=t?e:s$5(Math.max(2*e,t)):e<=2*t?e:s$5(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$1{constructor(t,s,o,a){this.vao=new FramebufferObject.f(t,s,{geometry:o},{geometry:FramebufferObject.h.createVertex(t,35044)}),this.array=new Float32Array(a),this.vao.vertexBuffers.geometry.setData(this.array);}dispose(){this.vao.dispose(!0);}get length(){return this.array.length}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c$2=MemCache.s+1;class s$4{constructor(t,e,o){this._rctx=t,this._locations=e,this._layout=o,this._cache=t.newCache(`MergedRenderer pool ${request.e$5()}`,h$2);}dispose(){this._cache.destroy();}newBuffer(e){const r=e.toString(),s=this._cache.pop(r);if(request.r(s)){const t=s.pop();return s.length>0&&this._cache.put(r,s,t.array.byteLength*s.length,c$2),t}return new t$1(this._rctx,this._locations,this._layout,e)}deleteBuffer(e){const r=e.array.byteLength,o=e.array.length.toString(),c=this._cache.pop(o);return request.r(c)?(c.push(e),this._cache.put(o,c,r*c.length,-1)):this._cache.put(o,[e],r,-1),null}}function h$2(t,e){if(0===e)return void t.forEach((t=>t.dispose()));const r=t.pop(),o=t.length*r.array.byteLength;return r.dispose(),o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class _{constructor(e,t,s){this._rctx=e,this._materialRepository=t,this._material=s,this.type="MergedRenderer",this._dataByOrigin=new Map,this._renderCommandData=new request.n$10,this._hasHighlights=!1,this._hasOccludees=!1,this._glMaterials=new r$f(this._material,this._materialRepository),this._bufferWriter=s.createBufferWriter(),this._bufferPool=new s$4(e,s.vertexAttributeLocations,glUtil.t(this._bufferWriter.vertexBufferLayout));}dispose(){this._glMaterials.destroy(),this._dataByOrigin.forEach((e=>e.buffer.dispose())),this._dataByOrigin.clear(),this._bufferPool.dispose();}get isEmpty(){return 0===this._dataByOrigin.size}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return !this.isEmpty&&this._material instanceof c$4}get rendersOccluded(){return !this.isEmpty&&1!==this._material.renderOccluded}modify(e){this.updateGeometries(e.updates),this.addAndRemoveGeometries(e.adds,e.removes),this.updateRenderCommands();}addAndRemoveGeometries(e,t){const s=this._bufferWriter,r=s.vertexBufferLayout.stride/4,i=this._dataByOrigin,a=v$2(e,t);a.forEach(((e,t)=>{a.delete(t);const o=e.toAdd.reduce(((e,t)=>e+s.elementCount(t.data)),0);let n=i.get(t);if(null==n)Util.i(0===e.toRemove.length),n=new A$1(e.origin,new e$3(this._bufferPool,o*r)),i.set(t,n);else if(0===e.toAdd.length&&n.instances.size===e.toRemove.length)return n.buffer.dispose(),void i.delete(t);let d=0;n.instances.forEach((e=>d+=e.to-e.from));const h=e.toRemove.reduce(((e,t)=>e+s.elementCount(t.data)),0),m=n.buffer.size,c=(d+o-h)*r,u=P$2;if(c<m/2?this.removeAndRebuild(n,e.toRemove,r,c,u):e.toRemove.length>0&&this.remove(n,e.toRemove,r,u),e.toAdd.length>0){const t=M$2;Util.E(t,-e.origin[0],-e.origin[1],-e.origin[2]),this.add(n,e.toAdd,r,t,u);}const g=n.buffer.vao.vertexBuffers.geometry;R$2(u),u.forAll((({from:e,to:t})=>{if(e<t){const s=n.buffer.array,r=4,i=e*r,a=t*r;g.setSubData(s,i,i,a);}})),u.clear(),n.drawCommandsDirty=!0;}));}updateGeometries(e){const t=this._bufferWriter,s=t.vertexBufferLayout.stride/4;for(const r of e){const e=r.renderGeometry,i=this._dataByOrigin.get(e.origin.id),a=i&&i.instances.get(e.id);if(!a)return;const o=r.updateType;if(1&o&&(a.isVisible=e.instanceParameters.visible),9&o){const t=e.instanceParameters.visible;a.hasHighlights=!!e.instanceParameters.highlights&&t;}if(16&o&&(a.hasOccludees=!!e.instanceParameters.occludees),6&o){const{array:r,vao:o}=i.buffer;utils.l(e,j$2,x$2),t.write({transformation:j$2,invTranspTransformation:x$2},e.data,t.vertexBufferLayout.createView(r.buffer),a.from),Util.i(a.from+t.elementCount(e.data)===a.to,"material VBO layout has changed"),o.vertexBuffers.geometry.setSubData(r,a.from*s*4,a.from*s*4,a.to*s*4);}i.drawCommandsDirty=!0;}}updateRenderCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach((t=>{t.hasHiddenInstances=!1,t.hasHighlights=!1,t.hasOccludees=!1,request.n$6(t.instances,(e=>(e.isVisible?(e.hasHighlights&&(this._hasHighlights=!0,t.hasHighlights=!0),e.hasOccludees&&(this._hasOccludees=!0,t.hasOccludees=!0)):t.hasHiddenInstances=!0,t.hasHiddenInstances&&t.hasHighlights&&t.hasOccludees)));}));const t=e=>{if(e.drawCommandsDefault=null,e.drawCommandsHighlight=null,e.drawCommandsOccludees=null,e.drawCommandsShadowHighlightRest=null,0===e.instances.size)return;if(!H(e)){const t=this._bufferWriter.vertexBufferLayout.stride,s=4*e.buffer.size/t;return void(e.drawCommandsDefault=[{first:0,count:s}])}const t=r$4(e.instances);e.drawCommandsDefault=[],e.drawCommandsHighlight=[],e.drawCommandsOccludees=[],e.drawCommandsShadowHighlightRest=[];for(const s of t)s.isVisible&&(s.hasOccludees?i(e.drawCommandsOccludees,s):i(e.drawCommandsDefault,s),s.hasHighlights?i(e.drawCommandsHighlight,s):i(e.drawCommandsShadowHighlightRest,s));};this._dataByOrigin.forEach((e=>{e.drawCommandsDirty&&(t(e),e.drawCommandsDirty=!1);}));}updateLogic(e){return this._material.update(e)}render(e,r,i){if(null!=e&&!this._material.requiresSlot(e,r))return !1;const a=5===r||7===r;if(a&&!this._hasHighlights)return !1;const o=6===r,n=!(a||o);if(this._dataByOrigin.forEach((e=>{if(a&&!e.hasHighlights)return;const s=(a?e.drawCommandsHighlight:o&&H(e)?e.drawCommandsShadowHighlightRest:e.drawCommandsDefault)||null,r=n&&e.drawCommandsOccludees||null;(request.r(s)||request.r(r))&&this._renderCommandData.push(new D$2(e.origin,e.buffer,s,r));})),0===this._renderCommandData.length)return !1;const d=this._rctx,h=this._glMaterials.load(d,r);if(request.t$1(h))return this._renderCommandData.clear(),!1;const f=h.beginSlot(i);return f.bindPipelineState(d,e,!1),d.useProgram(f.program),h.bind(i,f),this._renderCommandData.forAll((({origin:s,buffer:r,renderCommands:a,occludeeCommands:o})=>{i.origin=s,f.bindDraw(i),f.ensureAttributeLocations(r.vao),d.bindVAO(r.vao);const n=f.primitiveType;request.r(a)&&this.renderCommands(d,n,a),request.r(o)&&(f.bindPipelineState(d,e,!0),this.renderCommands(d,n,o),f.bindPipelineState(d,e,!1));})),this._renderCommandData.clear(),!0}renderCommands(e,t,s){for(let r=0;r<s.length;r++)e.drawArrays(t,s[r].first,s[r].count);}removeAndRebuild(e,t,s,r,i){for(const h of t)e.instances.delete(h.id);const a=r$4(e.instances);e.instances.clear();const o=e.buffer.size,n=e.buffer.alloc(r);let d=0;for(const h of a){const t=h.from*s,r=h.to*s;n.copy(d,t,r),h.from=d/s,d+=r-t,h.to=d/s,e.instances.set(h.id,h);}i.push(new s$6(0,n.hasNewBuffer?e.buffer.array.length:o)),n.dispose(),e.buffer.erase(d,i.back().to),e.holes.clear();}remove(e,t,s,r){for(const i of t){const t=i.id,a=e.instances.get(t),o=a.from*s,n=a.to*s;e.buffer.erase(o,n),e.holes.push(new s$6(a.from,a.to)),e.instances.delete(t),r.push(new s$6(o,n));}R$2(e.holes);}add(e,r,n,d,h){const l=this._bufferWriter;let m=l.vertexBufferLayout.createView(e.buffer.array.buffer);for(const c of r){const r=request.r(c.transformation)?mat4.e(j$2,d,c.transformation):d;mat4.h(x$2,r);const b=mat4.o(x$2,x$2),p=l.elementCount(c.data),w=p*n;let y=B(e.holes,p);request.t$1(y)&&(y=e.buffer.size/n,e.buffer.grow(w),m=l.vertexBufferLayout.createView(e.buffer.array.buffer)),l.write({transformation:r,invTranspTransformation:b},c.data,m,y);const _=c.instanceParameters.visible,C=!!c.instanceParameters.highlights&&_,v=!!c.instanceParameters.occludees,O=new o$3(c.id,y,y+p,_,C,v);Util.i(null==e.instances.get(c.id)),e.instances.set(c.id,O),h.push(new s$6(O.from*n,O.to*n));}}get test(){return {material:this._material,glMaterials:this._glMaterials}}}class C{constructor(e){this.origin=e,this.toAdd=new Array,this.toRemove=new Array;}}function v$2(e,t){const s=new Map;for(const r of e)O(s,r,!0);for(const r of t)O(s,r,!1);return s}function O(e,t,r){const i=t.origin;if(request.t$1(i))return;let a=e.get(i.id);null==a&&(a=new C(i.vec3),e.set(i.id,a)),r?a.toAdd.push(t):a.toRemove.push(t);}function H(e){return e.hasOccludees||e.hasHighlights||e.hasHiddenInstances}function B(e,t){let s;if(!e.some((e=>!(e.to-e.from<t)&&(s=e,!0))))return null;const r=s.from;return s.from+=t,s.from>=s.to&&e.removeUnordered(s),r}function R$2(e){const t=new Map;e.forAll((e=>t.set(e.from,e)));let s=!0;for(;s;)s=!1,e.forEach((r=>{const i=t.get(r.to);i&&(r.to=i.to,t.delete(i.from),e.removeUnordered(i),s=!0);}));}class A$1{constructor(e,t){this.origin=e,this.buffer=t,this.instances=new Map,this.holes=new request.n$10({deallocator:null}),this.hasHiddenInstances=!1,this.hasHighlights=!1,this.hasOccludees=!1,this.drawCommandsDirty=!1;}}class D$2{constructor(e,t,s,r){this.origin=e,this.buffer=t,this.renderCommands=s,this.occludeeCommands=r;}}const P$2=new request.n$10({deallocator:null}),M$2=mat4f64.e(),j$2=mat4f64.e(),x$2=mat4f64.e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o$2=class extends request.p{constructor(){super(...arguments),this._pending=new l$3,this._changes=new r$9,this._materialRenderers=new Map,this._sortedMaterialRenderers=new request.n$10,this._hasHighlights=!1,this._hasWater=!1;}dispose(){this._changes.prune(),this._materialRenderers.forEach((e=>e.dispose())),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear();}get updating(){return !this._pending.empty||this._changes.updates.length>0}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return request.n$6(this._materialRenderers,(e=>e.rendersOccluded))}get isEmpty(){return !this.updating&&0===this._materialRenderers.size}commitChanges(){if(!this.updating)return !1;this._processAddsRemoves();const e=r$8(this._changes);let r=!1,s=!1,i=!1;return e.forEach(((e,t)=>{let a=this._materialRenderers.get(t);if(!a&&e.adds.length>0&&(a=new _(this.rctx,this.materialRepository,t),this._materialRenderers.set(t,a),r=!0,s=!0,i=!0),!a)return;const n=s||a.hasHighlights,d=i||a.hasWater;a.modify(e),s=s||n!==a.hasHighlights,i=i||d!==a.hasWater,a.isEmpty&&(this._materialRenderers.delete(t),a.dispose(),r=!0);})),this._changes.clear(),r&&this.updateSortedMaterialRenderers(),s&&(this._hasHighlights=request.n$6(this._materialRenderers,(e=>e.hasHighlights))),i&&(this._hasWater=request.n$6(this._materialRenderers,(e=>e.hasWater))),this.notifyChange("updating"),!0}add(e){if(0===e.length)return;const r=this._pending.empty;for(const t of e)this._pending.adds.add(t);r&&this.notifyChange("updating");}remove(e){const r=this._pending.empty;for(const t of e)this._pending.adds.has(t)?(this._pending.removed.add(t),this._pending.adds.delete(t)):this._pending.removed.has(t)||this._pending.removes.add(t);r&&!this._pending.empty&&this.notifyChange("updating");}modify(e,r){const t=0===this._changes.updates.length;for(const s of e){const e=this._changes.updates.pushNew();e.renderGeometry=s,e.updateType=r;}t&&this._changes.updates.length>0&&this.notifyChange("updating");}updateLogic(e){let r=!1;return this._sortedMaterialRenderers.forAll((({materialRenderer:t})=>r=t.updateLogic(e)||r)),r}render(e,r){for(let t=0;t<this._sortedMaterialRenderers.length;t++){const s=this._sortedMaterialRenderers.data[t];s.material.shouldRender(e)&&s.materialRenderer.render(r.slot,e.pass,r);}}updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let e=0;this._materialRenderers.forEach(((r,t)=>{t.insertOrder=e++,this._sortedMaterialRenderers.push({material:t,materialRenderer:r});})),this._sortedMaterialRenderers.sort(((e,r)=>{const t=r.material.renderPriority-e.material.renderPriority;return 0!==t?t:e.material.insertOrder-r.material.insertOrder}));}_processAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._changes.adds.pushArray(Array.from(this._pending.adds)),this._changes.removes.pushArray(Array.from(this._pending.removes));for(let e=0;e<this._changes.updates.length;){const r=this._changes.updates.data[e];this._pending.has(r.renderGeometry)?this._changes.updates.removeUnorderedIndex(e):e++;}this._pending.clear();}get test(){return {sortedMaterialRenderers:this._sortedMaterialRenderers}}};request.e([request.d()],o$2.prototype,"rctx",void 0),request.e([request.d()],o$2.prototype,"materialRepository",void 0),request.e([request.d()],o$2.prototype,"updating",null),o$2=request.e([request.i("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],o$2);class l$3{constructor(){this.adds=new Set,this.removes=new Set,this.removed=new Set;}get empty(){return 0===this.adds.size&&0===this.removes.size&&0===this.removed.size}has(e){return this.adds.has(e)||this.removes.has(e)||this.removed.has(e)}clear(){this.adds.clear(),this.removes.clear(),this.removed.clear();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$1(o){o.attributes.add("position","vec2"),o.varyings.add("uv","vec2"),o.vertex.code.add(Texture.t`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      uv = position * 0.5 + vec2(0.5);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$3(){const n=new Texture.n;return n.include(o$1),n.fragment.uniforms.add("tex","sampler2D"),n.fragment.uniforms.add("color","vec4"),n.fragment.code.add(Texture.t`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * color;
}`),n}const s$3=Object.freeze({__proto__:null,build:n$3});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class u$2 extends Texture.t$2{initializeProgram(e){const r=u$2.shader.get().build();return new Texture.n$1(e.rctx,r,Texture.o)}initializePipeline(){return this.configuration.hasAlpha?OrderIndependentTransparency.g({blending:OrderIndependentTransparency.e(770,1,771,771),colorWrite:OrderIndependentTransparency.r}):OrderIndependentTransparency.g({colorWrite:OrderIndependentTransparency.r})}}u$2.shader=new Texture.t$3(s$3,(()=>Promise.resolve().then(function () { return require('./TextureOnly.glsl-723db44a.js'); })));class m$1 extends Texture.t$1{constructor(){super(...arguments),this.hasAlpha=!1;}}request.e([Texture.e()],m$1.prototype,"hasAlpha",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$2(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n[l];return e}function e$2(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n;return e}function l$2(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]+n[l];return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g$3(t){return (t+1)*(t+1)}function l$1(n){return mathUtils.e(Math.floor(Math.sqrt(n)-1),0,2)}function y$1(t,n,o){const i=t[0],s=t[1],r=t[2],e=o||[];return e.length=g$3(n),n>=0&&(e[0]=.28209479177),n>=1&&(e[1]=.4886025119*i,e[2]=.4886025119*r,e[3]=.4886025119*s),n>=2&&(e[4]=1.09254843059*i*s,e[5]=1.09254843059*s*r,e[6]=.31539156525*(3*r*r-1),e[7]=1.09254843059*i*r,e[8]=.54627421529*(i*i-s*s)),e}function m(t,n){const o=g$3(t),i=n||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=o;for(let s=0;s<o;s++)i.r[s]=i.g[s]=i.b[s]=0;return i}function p$2(t,o){const i=l$1(o.r.length);for(const s of t)mathUtils.v(v$1,s.direction),y$1(v$1,i,P$1),n$2(P$1,w$2),e$2(P$1,s.intensity[0],k$2),l$2(o.r,k$2),e$2(P$1,s.intensity[1],k$2),l$2(o.g,k$2),e$2(P$1,s.intensity[2],k$2),l$2(o.b,k$2);return o}function b$1(t,n){y$1(v$1,0,P$1);for(const o of t)n.r[0]+=P$1[0]*w$2[0]*o.intensity[0]*4*Math.PI,n.g[0]+=P$1[0]*w$2[0]*o.intensity[1]*4*Math.PI,n.b[0]+=P$1[0]*w$2[0]*o.intensity[2]*4*Math.PI;return n}function M$1(t,n,s,r){m(n,r),mathUtils.o(s.intensity,0,0,0);let e=!1;const g=d$3,l=j$1,y=I$1;g.length=0,l.length=0,y.length=0;for(const o of t)o instanceof o$e&&!e?(mathUtils.r(s.direction,o.direction),s.intensity[0]=o.intensity[0],s.intensity[1]=o.intensity[1],s.intensity[2]=o.intensity[2],s.castShadows=o.castShadows,e=!0):o instanceof o$e||o instanceof c$8?g.push(o):o instanceof i$7?l.push(o):o instanceof r$h&&y.push(o);p$2(g,r),b$1(l,r);for(const o of y)l$2(r.r,o.r),l$2(r.g,o.g),l$2(r.b,o.b);}const d$3=[],j$1=[],I$1=[],P$1=[0],k$2=[0],v$1=common.n(),w$2=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e$1{constructor(){this._shOrder=2,this._ambientBoost=.4,this._oldSunlight={direction:common.n(),ambient:{color:common.n(),intensity:1},diffuse:{color:common.n(),intensity:1}},this.globalFactor=.5,this.groundLightingFactor=.5,this._sphericalHarmonics=new r$h,this._mainLight={intensity:common.n(),direction:common.r(1,0,0),castShadows:!1};}get lightingMainDirection(){return this._mainLight.direction}setLightDirectionUniform(i){i.setUniform3fv("lightingMainDirection",this._mainLight.direction);}setUniforms(i,t=!1){const n=t?(1-this.groundLightingFactor)*(1-this.globalFactor):0;i.setUniform1f("lightingFixedFactor",n),i.setUniform1f("lightingGlobalFactor",this.globalFactor),this.setLightDirectionUniform(i),i.setUniform3fv("lightingMainIntensity",this._mainLight.intensity),i.setUniform1f("ambientBoostFactor",this._ambientBoost);const s=this._sphericalHarmonics;0===this._shOrder?i.setUniform3f("lightingAmbientSH0",s.r[0],s.g[0],s.b[0]):1===this._shOrder?(i.setUniform4f("lightingAmbientSH_R",s.r[0],s.r[1],s.r[2],s.r[3]),i.setUniform4f("lightingAmbientSH_G",s.g[0],s.g[1],s.g[2],s.g[3]),i.setUniform4f("lightingAmbientSH_B",s.b[0],s.b[1],s.b[2],s.b[3])):2===this._shOrder&&(i.setUniform3f("lightingAmbientSH0",s.r[0],s.g[0],s.b[0]),i.setUniform4f("lightingAmbientSH_R1",s.r[1],s.r[2],s.r[3],s.r[4]),i.setUniform4f("lightingAmbientSH_G1",s.g[1],s.g[2],s.g[3],s.g[4]),i.setUniform4f("lightingAmbientSH_B1",s.b[1],s.b[2],s.b[3],s.b[4]),i.setUniform4f("lightingAmbientSH_R2",s.r[5],s.r[6],s.r[7],s.r[8]),i.setUniform4f("lightingAmbientSH_G2",s.g[5],s.g[6],s.g[7],s.g[8]),i.setUniform4f("lightingAmbientSH_B2",s.b[5],s.b[6],s.b[7],s.b[8]));}set(s){M$1(s,this._shOrder,this._mainLight,this._sphericalHarmonics),mathUtils.r(this._oldSunlight.direction,this._mainLight.direction);const o=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*o,this._oldSunlight.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*o,this._oldSunlight.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*o,mathUtils.d(this._oldSunlight.diffuse.color,this._mainLight.intensity,o),mathUtils.r(g$2,this._oldSunlight.diffuse.color),mathUtils.d(g$2,g$2,this._ambientBoost*this.globalFactor),mathUtils.u(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,g$2);}get old(){return this._oldSunlight}}const g$2=common.n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$2{constructor(e){this._rctx=e,this.cache=new Map;}dispose(){this.cache.forEach((e=>e.texture=request.i$8(e.texture))),this.cache.clear();}acquire(e){if(request.t$1(e))return null;const t=this.patternId(e),i=this.cache.get(t);if(i)return i.refCount++,i.bind;const s=e.pixelRatio,{encodedData:n,sdfNormalizer:c,pixels:p,paddedPixels:u}=a$3(e.pattern,s),l=p/s,h={refCount:1,texture:null,bind:e=>(request.t$1(h.texture)&&(h.texture=new Texture$1.o(this._rctx,{width:u,height:1,internalFormat:6408,pixelFormat:6408,dataType:5121,wrapMode:33071},n)),e.bindTexture(h.texture,"stipplePatternTexture"),{pixelSize:l,sdfNormalizer:c,pixels:p})};return this.cache.set(t,h),h.bind}release(e){if(request.t$1(e))return;const t=this.patternId(e),o=this.cache.get(t);o&&(o.refCount--,0===o.refCount&&(request.r(o.texture)&&o.texture.dispose(),this.cache.delete(t)));}swap(e,t){const r=this.acquire(t);return this.release(e),r}patternId(e){return `${e.pattern.join(",")}-r${e.pixelRatio}`}}function a$3(t,r){const i=t.map((e=>Math.round(e*r))),o=1/r,s=Math.floor(i.reduce(((e,t)=>e+t))),a=s+2,n=i.reduce(((e,t)=>Math.max(e,t))),c=(Math.floor(.5*(n-1))+.5)*o,p=new Uint8Array(4*a);let u=1,l=4;for(const h of i){for(let t=0;t<h;t++){const r=u*(Math.min(t,h-1-t)+.5)*o;floatRGBA.o(r/c*.5+.5,p,l),l+=4;}u=-u;}return p.copyWithin(0,l-4,l),p.copyWithin(l,4,8),{encodedData:p,sdfNormalizer:c,paddedPixels:a,pixels:s}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const J$1=request.s$1.getLogger("esri.views.3d.webgl-engine.lib.OverlayRenderer");exports.K=class extends(s$8(request.p)){constructor(e){super(e),this._overlays=null,this._overlayRenderTarget=null,this._hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._lighting=new e$1,this._handles=new request.u,this._frameTask=Scheduler.D,this._layerRenderers=new Map,this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers=new request.n$10,this._geometries=new Map,this.worldToPCSRatio=1,this.events=new request.n$2,this.longitudeCyclical=null;}initialize(){const e=this.view._stage.renderView;this._rctx=e.renderingContext,this._renderContext=new e$5(this._rctx);const r=e.waterTextureRepository;this._stippleTextureRepository=new s$2(e.renderingContext),this._shaderTechniqueRepository=new n$9({rctx:this._rctx,viewingMode:2,stippleTextureRepository:this._stippleTextureRepository,waterTextureRepository:r}),this._handles.add([request.i$1(r,"loadingState",(()=>this.events.emit("content-changed"))),request.i$1(this,"spatialReference",(e=>this._localOrigins=new d$4(e)))]),this._materialRepository=new n$8(e.textureRepository,this._shaderTechniqueRepository,(e=>{(e.renderOccluded&se$1)>0!==this._rendersOccluded&&this.updateRendersOccluded(),this.events.emit("content-changed"),this.notifyChange("updating");}),(()=>this.events.emit("content-changed"))),this._lighting.groundLightingFactor=1,this._lighting.globalFactor=0,this._lighting.set([new i$7(common.r(1,1,1))]),this._bindParameters={slot:20,highlightDepthTexture:Texture.g$1(this._rctx),camera:$$1,inverseViewport:vec2f64.n(),origin:null,screenToWorldRatio:null,screenToPCSRatio:null,shadowMappingEnabled:!1,slicePlane:null,ssaoEnabled:!1,hasOccludees:!1,linearDepthTexture:null,lastFrameColorTexture:null,reprojectionMatrix:mat4f64.a,ssrEnabled:!1,lighting:this._lighting,transparencyPassType:3,terrainLinearDepthTexture:null,geometryLinearDepthTexture:null,multipassTerrainEnabled:!1,cullAboveGround:!1,multipassGeometryEnabled:!1,highlightColorTexture:null},this._frameTask=this.view.resourceController.scheduler.registerTask(Scheduler.f.STAGE,this),this._handles.add(this._frameTask);}dispose(){this._handles.destroy(),this._layerRenderers.forEach((e=>e.dispose())),this._layerRenderers.clear(),this._debugTextureTechnique=request.h$2(this._debugTextureTechnique),this._debugPatternTexture=request.i$8(this._debugPatternTexture),this._bindParameters.highlightDepthTexture=request.i$8(this._bindParameters.highlightDepthTexture),this._shaderTechniqueRepository=request.i$8(this._shaderTechniqueRepository),this._temporaryFBO=request.i$8(this._temporaryFBO),this._quadVAO=request.i$8(this._quadVAO),this.disposeOverlays();}get updating(){return this._sortedLayerRenderersDirty||this._frameTask.updating||request.n$6(this._layerRenderers,(e=>e.updating))}get hasOverlays(){return request.r(this._overlays)&&request.r(this._overlayRenderTarget)}get gpuMemoryUsage(){return request.r(this._overlayRenderTarget)?this._overlayRenderTarget.gpuMemoryUsage:0}collectUnusedRenderTargetMemory(e){let r=!1;if(request.r(this._overlayRenderTarget))for(const t of this._overlayRenderTarget.renderTargets){const s=this.overlays[0].validTargets[t.type]||!this.overlays[1].validTargets[t.type];r=this._overlayRenderTarget.validateUsageForTarget(s,t,e)||r;}return r}get overlays(){return request.c$2(this._overlays,[])}ensureDrapeTargets(e){request.r(this._overlays)&&this._overlays.forEach((r=>{r.hasTargetWithoutRasterImage=request.n$14(e,(e=>1===e.drapeTargetType));}));}ensureDrapeSources(e){request.r(this._overlays)&&this._overlays.forEach((r=>{r.hasDrapedFeatureSource=request.n$6(e,((e,r)=>1===r.drapeSourceType)),r.hasDrapedRasterSource=request.n$6(e,((e,r)=>0===r.drapeSourceType));}));}ensureOverlays(e,r){request.t$1(this._overlays)&&(this._overlayRenderTarget=new r$c(this._rctx),this._overlays=[new a$9(0,this._overlayRenderTarget),new a$9(1,this._overlayRenderTarget)]),this.ensureDrapeTargets(e),this.ensureDrapeSources(r);}disposeOverlays(){this._overlays=null,this._overlayRenderTarget=request.i$8(this._overlayRenderTarget),this.events.emit("textures-disposed");}get running(){return this.updating}runTask(e,r=(()=>!0)){this._frameTask.processQueue(e),e.done||this._processLayers(e,r);}_processLayers(e,r){let t=!1;for(const[s,i]of this._layerRenderers){if(e.done)break;r(s)&&(i.commitChanges()&&(t=!0,e.madeProgress()),i.isEmpty&&(t=!0,this._sortedLayerRenderersDirty=!0,this._layerRenderers.delete(s),this._handles.remove(s)));}this.updateSortedLayerRenderers(),t&&(request.r(this._overlays)&&0===this._layerRenderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.events.emit("content-changed"),this.updateHasHighlights(),this.updateRendersOccluded(),this.updateHasWater());}processSyncLayers(){this._processLayers(Scheduler.C,(e=>1===e.updatePolicy));}addGeometries(e,r,t){for(const s of e)request.t$1(s.origin)&&(s.origin=this._localOrigins.getOrigin(s.boundingSphere)),this._geometries.set(s.id,s);this.ensureLayerRenderer(r).add(e),2===t&&this.notifyGraphicGeometryChanged(e,r);}removeGeometries(e,r,t){for(const i of e)this._geometries.delete(request.e$2(i.id));const s=this._layerRenderers.get(r);s&&(s.remove(e),2===t&&this.notifyGraphicGeometryChanged(e,r));}updateGeometries(e,r,t){const s=this._layerRenderers.get(r);if(s)switch(s.modify(e,t),t){case 4:case 2:return this.notifyGraphicGeometryChanged(e,r);case 1:return this.notifyGraphicVisibilityChanged(e,r)}else J$1.warn("Attempted to update geometry for nonexistent layer");}notifyGraphicGeometryChanged(e,r){if(request.t$1(r.notifyGraphicGeometryChanged))return;let t;for(const s of e){const e=s.graphicUid;request.r(e)&&e!==t&&(r.notifyGraphicGeometryChanged(e),t=e);}}notifyGraphicVisibilityChanged(e,r){if(request.t$1(r.notifyGraphicVisibilityChanged))return;let t;for(const s of e){const e=s.graphicUid;request.r(e)&&e!==t&&(r.notifyGraphicVisibilityChanged(e),t=e);}}updateHighlights(e,r){const t=this._layerRenderers.get(r);t?t.modify(e,8):J$1.warn("Attempted to update highlights for nonexistent layer");}isEmpty(){return 0===this._geometries.size&&!I$6.OVERLAY_DRAW_DEBUG_TEXTURE}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}updateLogic(e){let r=!1;return this._layerRenderers.forEach((t=>r=t.updateLogic(e)||r)),r}updateLayerOrder(){this._sortedLayerRenderersDirty=!0;}drawTarget(e,r,t){const s=e.canvasGeometries;if(0===s.numViews)return !1;this._screenToWorldRatio=t*e.mapUnitsPerPixel;const i=r.renderPass;if(this.isEmpty()||5===i&&!this.hasHighlights||3===i&&!this.hasWater||!e.hasSomeSizedView())return !1;const a=r.fbo;if(!a.isValid())return !1;const o=2*e.resolution,n=e.resolution;a.resize(o,n);const d=this._rctx;$$1.pixelRatio=e.pixelRatio*t,this._renderContext.pass=i,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToPCSRatio=this._screenToWorldRatio*this.worldToPCSRatio,this._bindParameters.slot=3===i?21:20,e.applyViewport(this._rctx),a.bind(d),0===e.index&&(d.setClearColor(0,0,0,0),d.clearSafe(16384));const l=1===r.type?2:4===r.type?1:0;if(1===l&&(this._renderContext.renderOccludedMask=se$1),I$6.OVERLAY_DRAW_DEBUG_TEXTURE&&1!==l)for(let h=0;h<s.numViews;h++)this.setViewParameters(s.extents[h],e,$$1),this.drawDebugTexture(e.resolution,Z$1[e.index]);return this._layerRenderers.size>0&&this._sortedLayerRenderers.forAll((({layerView:r,renderer:t})=>{if(2===l&&request.r(r)&&0===r.drapeSourceType)return;const c=request.r(r)&&request.r(r.fullOpacity)&&r.fullOpacity<1&&0===i;c&&(this.bindTemporaryFramebuffer(this._rctx,o,n),d.clearSafe(16384));for(let i=0;i<s.numViews;i++)this.setViewParameters(s.extents[i],e,$$1),t.render(this._renderContext,this._bindParameters);c&&request.r(this._temporaryFBO)&&(a.bind(d),this.view._stage.renderView.compositingHelper.composite(this._temporaryFBO.getTexture(),2,request.e$2(request.e$2(r).fullOpacity),3,e.index));})),d.bindFramebuffer(null),a.generateMipMap(),this._renderContext.resetRenderOccludedMask(),!0}bindTemporaryFramebuffer(e,r,t){request.t$1(this._temporaryFBO)&&(this._temporaryFBO=new s$b(e,!1)),this._temporaryFBO.resize(r,t),this._temporaryFBO.bind(e);}async reloadShaders(){await this._shaderTechniqueRepository.reloadAll();}intersect(e,r,t){let s=0;this._geometries.forEach((i=>{if(t&&!t(i))return;this.intersectRenderGeometry(i,r,0,e,s);const a=this.longitudeCyclical;a&&(i.boundingSphere[0]-i.boundingSphere[3]<a.min&&this.intersectRenderGeometry(i,r,a.range,e,s),i.boundingSphere[0]+i.boundingSphere[3]>a.max&&this.intersectRenderGeometry(i,r,-a.range,e,s)),s++;}));}intersectRenderGeometry(e,r,t,s,i){if(!e.instanceParameters.visible)return;let a=0;request.r(e.transformation)&&(t+=e.transformation[12],a=e.transformation[13]),ee$1[0]=r[0]-t,ee$1[1]=r[1]-a,ee$1[2]=1,re$1[0]=r[0]-t,re$1[1]=r[1]-a,re$1[2]=0,e.screenToWorldRatio=this._screenToWorldRatio,e.material.intersect(e,null,e.getShaderTransformation(),s,ee$1,re$1,((r,t,a)=>{this.addIntersectionResult(a,e.material.renderPriority,i,s,e.layerUid,e.graphicUid);}),e.calculateShaderTransformation,!0);}addIntersectionResult(e,r,t,s,i,a){const o={type:"external",metadata:{layerUid:i,graphicUid:a}},n=i=>{i.set(o,null,s.results.ground.dist,s.results.ground.normal,s.results.ground.transformation,r,null,null,e,t),i.intersector="OverlayRenderer";};if((null==s.results.min.drapedLayerOrder||r>=s.results.min.drapedLayerOrder)&&(null==s.results.min.dist||s.results.ground.dist<=s.results.min.dist)&&n(s.results.min),0!==s.options.store&&(null==s.results.max.drapedLayerOrder||r<s.results.max.drapedLayerOrder)&&(null==s.results.max.dist||s.results.ground.dist>s.results.max.dist)&&n(s.results.max),2===s.options.store){const e=new intersectorUtils.j(s.ray);n(e),s.results.all.push(e);}}ensureLayerRenderer(e){let r=this._layerRenderers.get(e);return r||(r=new o$2({rctx:this._rctx,materialRepository:this._materialRepository}),this._layerRenderers.set(e,r),this._sortedLayerRenderersDirty=!0,"fullOpacity"in e&&this._handles.add(e.watch("fullOpacity",(()=>this.events.emit("content-changed"))),e),this._handles.add(request.i$1(r,"updating",(()=>this.notifyChange("updating"))),e)),r}updateSortedLayerRenderers(){if(!this._sortedLayerRenderersDirty)return;if(this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers.clear(),0===this._layerRenderers.size)return;const e=new Set(this._layerRenderers.values());this.view.allLayerViews.forEach((r=>{const t=r,s=this._layerRenderers.get(t);s&&(this._sortedLayerRenderers.push(new N(t,s)),e.delete(s));})),e.forEach((e=>this._sortedLayerRenderers.push(new N(null,e))));}setViewParameters(e,r,t){t.viewport[0]=t.viewport[1]=0,t.viewport[2]=t.viewport[3]=r.resolution,mat4.E(t.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],t.near,t.far),mat4.r(t.viewMatrix),mat4.c(t.viewMatrix,t.viewMatrix,[-e[0],-e[1],0]),this._renderContext.camera=t,this._bindParameters.camera=t,this._bindParameters.inverseViewport[0]=1/t.fullViewport[2],this._bindParameters.inverseViewport[1]=1/t.fullViewport[3];}updateHasWater(){const e=request.n$6(this._layerRenderers,(e=>e.hasWater));e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water",e));}updateHasHighlights(){const e=request.n$6(this._layerRenderers,(e=>e.hasHighlights));e!==this._hasHighlights&&(this._hasHighlights=e,this.events.emit("has-highlights",e));}updateRendersOccluded(){const e=request.n$6(this._layerRenderers,(e=>e.rendersOccluded));e!==this._rendersOccluded&&(this._rendersOccluded=e,this.events.emit("renders-occluded",e));}drawDebugTexture(e,r){const t=this._rctx;this.ensureDebugPatternResources(e,e);const s=this._debugTextureTechnique.program;t.useProgram(s),this._debugTextureTechnique.bindPipelineState(t),s.setUniform4f("color",r[0],r[1],r[2],1),s.bindTexture(this._debugPatternTexture,"tex"),t.bindVAO(this._quadVAO),t.drawArrays(5,0,FramebufferObject.r(this._quadVAO,"geometry"));}ensureDebugPatternResources(e,r){if(this._debugPatternTexture)return;const t=new Uint8Array(e*r*4);let s=0;for(let a=0;a<r;a++)for(let i=0;i<e;i++){const o=Math.floor(i/10),n=Math.floor(a/10);o<2||n<2||10*o>e-20||10*n>r-20?(t[s++]=255,t[s++]=255,t[s++]=255,t[s++]=255):(t[s++]=255,t[s++]=255,t[s++]=255,t[s++]=1&o&&1&n?1&i^1&a?0:255:1&o^1&n?0:128);}this._debugPatternTexture=new Texture$1.o(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:e,height:r},t);const i=new m$1;i.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquire(u$2,i),this._quadVAO=Texture.i(this._rctx);}get test(){return {layerRenderers:this._layerRenderers}}};request.e([request.d()],exports.K.prototype,"_frameTask",void 0),request.e([request.d()],exports.K.prototype,"_sortedLayerRenderersDirty",void 0),request.e([i$5()],exports.K.prototype,"_shaderTechniqueRepository",void 0),request.e([i$5()],exports.K.prototype,"_stippleTextureRepository",void 0),request.e([request.d({constructOnly:!0})],exports.K.prototype,"view",void 0),request.e([request.d()],exports.K.prototype,"worldToPCSRatio",void 0),request.e([request.d()],exports.K.prototype,"spatialReference",void 0),request.e([request.d({type:Boolean,readOnly:!0})],exports.K.prototype,"updating",null),exports.K=request.e([request.i("esri.views.3d.terrain.OverlayRenderer")],exports.K);class N{constructor(e,r){this.layerView=e,this.renderer=r;}}const Z$1=[[1,.5,.5],[.5,.5,1]],$$1=new J$4;$$1.near=1,$$1.far=1e4,$$1.relativeElevation=null;const ee$1=common.n(),re$1=common.n(),te$1=-2,se$1=4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$2=1.2,t=vec4f64._,a$2=vec4f64.l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$1(t,r,u){switch(t){default:return n$1(r,u);case"square":return e(r,u);case"cross":return o(r,u);case"x":return s$1(r,u);case"kite":return a$1(r,u);case"triangle":return c$1(r,u)}}function n$1(r,n){const e=r,a=new Uint8Array(4*e*e),o=e/2-.5,s=n/2;for(let c=0;c<e;c++)for(let n=0;n<e;n++){const u=n+e*c,f=n-o,i=c-o;let h=Math.sqrt(f*f+i*i)-s;h=h/r+.5,floatRGBA.o(h,a,4*u);}return a}function e(t,r){return u$1(t,r,!1)}function a$1(t,r){return u$1(t,r,!0)}function o(t,r){return f(t,r,!1)}function s$1(t,r){return f(t,r,!0)}function c$1(r,n){const e=new Uint8Array(4*r*r),a=1,o=-.5,s=Math.sqrt(a*a+o*o),c=(r-n)/2;for(let u=0;u<r;u++)for(let f=0;f<r;f++){const i=u*r+f,h=(f-c)/n,l=(u-c+.75)/n,M=-(a*h+o*l)/s,R=(a*(h-1)+o*-l)/s,Q=-l,S=Math.max(M,R,Q);floatRGBA.o(S*n/r+.5,e,4*i);}return e}function u$1(r,n,e){e&&(n/=Math.SQRT2);const a=new Uint8Array(4*r*r);for(let o=0;o<r;o++)for(let s=0;s<r;s++){let c=s-.5*r+.25,u=.5*r-o-.75;const f=o*r+s;if(e){const t=(c+u)/Math.SQRT2;u=(u-c)/Math.SQRT2,c=t;}let i=Math.max(Math.abs(c),Math.abs(u))-.5*n;i=i/r+.5,floatRGBA.o(i,a,4*f);}return a}function f(r,n,e){e&&(n*=Math.SQRT2);const a=.5*n,o=new Uint8Array(4*r*r);for(let s=0;s<r;s++)for(let n=0;n<r;n++){let c=n-.5*r,u=.5*r-s-1;const f=s*r+n;if(e){const t=(c+u)/Math.SQRT2;u=(u-c)/Math.SQRT2,c=t;}let i;c=Math.abs(c),u=Math.abs(u),i=c>u?c>a?Math.sqrt((c-a)*(c-a)+u*u):u:u>a?Math.sqrt(c*c+(u-a)*(u-a)):c,i=i/r+.5,floatRGBA.o(i,o,4*f);}return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class l{constructor(t,i,r=null,a=null,e=request.e$5(),o=null,m=null,u=!1){this.data=t,this.material=i,this.layerUid=r,this.graphicUid=a,this.id=e,this.boundingInfo=o,this.calculateShaderTransformation=m,this.castShadow=u,this.boundingSphere=vec4f64.n(),this.instanceParameters={highlights:null,occludees:null,visible:!0},this._transformation=mat4f64.e(),this._shaderTransformationDirty=!0;}get transformation(){return this._transformation}updateTransformation(t){t(this._transformation),this._shaderTransformationDirty=!0,this.computeBoundingSphere(this._transformation,this.boundingSphere);}shaderTransformationChanged(){this._shaderTransformationDirty=!0;}computeBoundingSphere(i,r,s=mathUtils$1.d(i)){request.t$1(this.boundingInfo)||(mathUtils.I(r,this.boundingInfo.getCenter(),i),r[3]=this.boundingInfo.getBSRadius()*s);}get hasShaderTransformation(){return request.r(this.calculateShaderTransformation)}get primitiveType(){return this.data.primitiveType}getShaderTransformation(){return request.t$1(this.calculateShaderTransformation)?request.c$2(this.transformation,mat4f64.a):(this._shaderTransformationDirty&&(this._shaderTransformation||(this._shaderTransformation=mat4f64.e()),mat4.n(this._shaderTransformation,this.calculateShaderTransformation(request.c$2(this.transformation,mat4f64.a))),this._shaderTransformationDirty=!1),this._shaderTransformation)}computeAttachmentOrigin(t){if(this.material.computeAttachmentOrigin)return !!this.material.computeAttachmentOrigin(this,t)&&(request.r(this._transformation)&&mathUtils.I(t,t,this._transformation),!0);const r=this.indices.get("position"),s=this.vertexAttributes.get("position");return !!geometryDataUtils.u(s,r,t)&&(request.r(this._transformation)&&mathUtils.I(t,t,this._transformation),!0)}get indices(){return this.data.indices}get vertexAttributes(){return this.data.vertexAttributes}addHighlight(){const t=new intersectorUtils.r(0),i=this.instanceParameters;return i.highlights=utils.f(i.highlights,t),t}removeHighlight(t){const i=this.instanceParameters;i.highlights=utils.u(i.highlights,t);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function b(t){const e=[],o=[];z$1(t,o,e);const r=o[0][1].data,n=e[0][1].length,i=new Uint16Array(n);return A(t,o,e),F$1(t,o,e,i),v(t,o,e,i),w$1(t,o,e,i),D$1(t,o,e,i),P(t,o,e,i),U(t,o,e,r),new Texture.u$1(o,e,2)}function d$2(t,e,o,r){const n="polygon"===t.type?1:0,i="polygon"===t.type?t.rings:t.paths,{position:s,outlines:a}=triangulationUtils.l(i,t.hasZ,n),u=new Float64Array(s.length),c=f$6(s,t.spatialReference,0,u,0,s,0,s.length/3,e,o,r),p=null!=c;return {lines:p?g$1(a,s,u):[],projectionSuccess:p,sampledElevation:c}}function g$1(t,e,o){const r=new Array;for(const{index:n,count:i}of t){if(i<=1)continue;const t=3*n,s=t+3*i;r.push({position:e.subarray(t,s),mapPosition:o?o.subarray(t,s):void 0});}return r}function j(t,e){const o="polygon"===t.type?1:0,r="polygon"===t.type?t.rings:t.paths,{position:n,outlines:i}=triangulationUtils.l(r,!1,o),s=projection.xn(n,t.spatialReference,0,n,e,0,n.length/3);for(let a=2;a<n.length;a+=3)n[a]=te$1;return {lines:s?g$1(i,n):[],projectionSuccess:s}}function z$1(t,e,o){const{attributeData:{position:r},removeDuplicateStartEnd:i}=t,s=M(r)&&1===i,a=r.length/3-(s?1:0),u=new Uint32Array(2*(a-1)),c=s?request.t$11(r,0,r.length-3):r;let p=0;for(let n=0;n<a-1;n++)u[p++]=n,u[p++]=n+1;e.push(["position",{size:3,data:c,exclusive:s}]),o.push(["position",u]);}function A(t,o,r){const n=t.attributeData.mapPosition;request.t$1(n)||(r.push(["mapPos",r[0][1]]),o.push(["mapPos",{size:3,data:n}]));}function F$1(t,e,n,i){if(request.r(t.attributeData.colorFeature))return;const s=t.attributeData.color;e.push(["color",{size:4,data:request.c$2(s,a$2)}]),n.push(["color",i]);}function w$1(t,o,r,n){const i=t.attributeData.colorFeature;request.t$1(i)||(o.push(["colorFeatureAttribute",{size:1,data:new Float32Array([i])}]),r.push(["color",n]));}function v(t,e,n,i){if(request.r(t.attributeData.sizeFeature))return;const s=t.attributeData.size;e.push(["size",{size:1,data:[request.c$2(s,1)]}]),n.push(["size",i]);}function D$1(t,o,r,n){const i=t.attributeData.sizeFeature;request.t$1(i)||(o.push(["sizeFeatureAttribute",{size:1,data:new Float32Array([i])}]),r.push(["sizeFeatureAttribute",n]));}function P(t,o,r,n){const i=t.attributeData.opacityFeature;request.t$1(i)||(o.push(["opacityFeatureAttribute",{size:1,data:new Float32Array([i])}]),r.push(["opacityFeatureAttribute",n]));}function U(e,o,n,c){if("round"!==e.join)return;const p=c.length/3,l=new Float32Array(p),f=S,h=R$1;mathUtils.o(f,0,0,0);const m=request.c$2(e.uniformSize,1);for(let r=-1;r<p;++r){const e=r<0?p+r:r,o=(r+1)%p;if(mathUtils.o(h,c[3*o+0]-c[3*e+0],c[3*o+1]-c[3*e+1],c[3*o+2]-c[3*e+2]),mathUtils.j$1(h,h),r>=0){const e=1*((Math.PI-mathUtils.l(mathUtils.z(f,h)))*k$1)*x$1(m);l[r]=Math.max(Math.floor(e),0);}mathUtils.d(f,h,-1);}o.push(["subdivisions",{size:1,data:l}]),n.push(["subdivisions",n[0][1]]);}function x$1(t){return 1.863798+-2.0062872/(1+t/18.2313)**.8856294}function M(t){const e=t.length;return t[0]===t[e-3]&&t[1]===t[e-2]&&t[2]===t[e-1]}const S=common.n(),R$1=common.n(),k$1=4/Math.PI;function E$1(t){switch(t){case"butt":return 0;case"square":return 1;case"round":return 2;default:return null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d$1={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},s={dash:d$1.dash,"dash-dot":[...d$1.dash,...d$1.dot],dot:d$1.dot,"long-dash":d$1["long-dash"],"long-dash-dot":[...d$1["long-dash"],...d$1.dot],"long-dash-dot-dot":[...d$1["long-dash"],...d$1.dot,...d$1.dot],none:null,"short-dash":d$1["short-dash"],"short-dash-dot":[...d$1["short-dash"],...d$1["short-dot"]],"short-dash-dot-dot":[...d$1["short-dash"],...d$1["short-dot"],...d$1["short-dot"]],"short-dot":d$1["short-dot"],solid:null},h$1=8;function r(t,d=2){return request.t$1(t)?t:{pattern:t.slice(),pixelRatio:d}}function a(o,t=2){return {pattern:[o,o],pixelRatio:t}}function n(o){return request.r(o)&&"style"===o.type?r(s[o.style],h$1):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(d){const p=new Texture.n;p.include(Texture.r,{linearDepth:!1}),p.include(Texture.r$4,d),p.include(r$b,d),p.vertex.uniforms.add("proj","mat4").add("view","mat4"),p.attributes.add("position","vec3"),p.varyings.add("vpos","vec3");const c=I$6.ENABLE_CONTINUOUS_LINE_PATTERNS;return p.vertex.code.add(Texture.t`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),d.stippleEnabled&&(p.attributes.add("auxpos1","vec3"),p.vertex.uniforms.add("ndcToPixel","vec2"),p.vertex.code.add(Texture.t`vec4 vpos2 = transformPosition(proj, view, auxpos1);
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),c?(p.attributes.add("uv0","vec2"),d.draped||p.vertex.code.add(Texture.t`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),p.vertex.code.add(Texture.t`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
stippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, uv0.x);
vStippleDistanceLimits *= gl_Position.w;`)):p.vertex.code.add(Texture.t`
      stippleDistance = lineSegmentPixelSize * stipplePatternPixelSizeInv;
      ${d.stippleIntegerRepeatsEnabled?"stippleDistance = floor(stippleDistance + 0.5);":""}
      `),p.vertex.code.add(Texture.t`stippleDistance *= gl_Position.w;`)),p.vertex.code.add(Texture.t`}`),4===d.output&&p.include(Texture.r$2),p.include(Texture.c,d),p.fragment.uniforms.add("constantColor","vec4").add("alphaCoverage","float"),p.fragment.code.add(Texture.t`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${d.attributeColor?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${Texture.t.float(Texture.o$1)}) {
      discard;
    }

    ${0===d.output?Texture.t`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${4===d.output?Texture.t`outputHighlight();`:""}
  }
  `),p}const p$1=Object.freeze({__proto__:null,build:d});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class y extends Texture.t$2{constructor(e,t,i){super(e,t,i),this.stipplePattern=null,this.stippleTextureBind=null,this.stippleTextureRepository=e.stippleTextureRepository;}initializeProgram(e){const t=y.shader.get(),i=this.configuration,r=t.build({output:i.output,attributeColor:i.vertexColors,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,draped:i.draped,stippleEnabled:i.stippleEnabled,stippleOffColorEnabled:i.stippleOffColorEnabled,stippleDistanceMaxEnabled:!1,stippleIntegerRepeatsEnabled:i.stippleIntegerRepeatsEnabled,scaleStippleWithLineWidth:!1});return new Texture.n$1(e.rctx,r,Texture.o)}dispose(){super.dispose(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null;}bindPass(e,s){if(Texture.t$5(this.program,s.camera.projectionMatrix),this.stipplePattern!==e.stipplePattern){const t=e.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,t),this.stipplePattern=t;}if(this.configuration.stippleEnabled){const{pixelSize:e,sdfNormalizer:i,pixels:o}=request.r(this.stippleTextureBind)?this.stippleTextureBind(this.program):{pixelSize:1,sdfNormalizer:1,pixels:1};this.program.setUniform1f("stipplePatternSDFNormalizer",i),this.program.setUniform1f("stipplePatternTextureSize",o),I$6.ENABLE_CONTINUOUS_LINE_PATTERNS?(this.program.setUniform1f("stipplePatternPixelSize",e),this.program.setUniform1f("stipplePatternPixelSizeInv",1/e),this.configuration.draped?this.program.setUniform1f("worldToScreenRatio",1/s.screenToWorldRatio):(this.program.setUniform1f("worldToScreenPerDistanceRatio",1/s.camera.perScreenPixelRatio),this.program.setUniform1f("cameraDistanceToSurface",s.camera.distanceFromSurface))):this.program.setUniform1f("stipplePatternPixelSizeInv",1/(e*s.camera.pixelRatio)),this.program.setUniform2f("ndcToPixel",s.camera.fullViewport[2]/2,s.camera.fullViewport[3]/2);}if(this.program.setUniform4fv("constantColor",e.color),this.program.setUniform1f("alphaCoverage",Math.min(1,e.width*s.camera.pixelRatio)),this.configuration.stippleOffColorEnabled){const t=request.e$2(e.stippleOffColor);this.program.setUniform4f("stippleOffColor",t[0],t[1],t[2],t.length>3?t[3]:1);}4===this.configuration.output&&Texture.g(this.program,s);}bindDraw(e){Texture.a$4(this.program,e),this.configuration.stippleEnabled&&I$6.ENABLE_CONTINUOUS_LINE_PATTERNS&&!this.configuration.draped&&Texture.o$5(this.program,e.origin,e.camera.viewInverseTransposeMatrix),Texture.l$2(this.program,this.configuration,e),this.program.rebindTextures();}initializePipeline(){const e=this.configuration,t=OrderIndependentTransparency.e(770,1,771,771),i=(t,i=null,r=null)=>OrderIndependentTransparency.g({blending:i,depthTest:Texture.a$7,depthWrite:r,colorWrite:OrderIndependentTransparency.r,stencilWrite:e.sceneHasOcludees?Texture.f$2:null,stencilTest:e.sceneHasOcludees?t?Texture.t$8:Texture.c$1:null});return 0===e.output?(this._occludeePipelineState=i(!0,e.transparent||e.stippleEnabled?t:null,OrderIndependentTransparency.l),i(!1,e.transparent||e.stippleEnabled?t:null,OrderIndependentTransparency.l)):i(!1)}get primitiveType(){return 1}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}y.shader=new Texture.t$3(p$1,(()=>Promise.resolve().then(function () { return require('./NativeLine.glsl-e549a317.js'); })));class R extends Texture.t$1{constructor(){super(...arguments),this.output=0,this.slicePlaneEnabled=!1,this.vertexColors=!1,this.transparent=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleIntegerRepeatsEnabled=!1,this.sceneHasOcludees=!1;}}request.e([Texture.e({count:8})],R.prototype,"output",void 0),request.e([Texture.e()],R.prototype,"slicePlaneEnabled",void 0),request.e([Texture.e()],R.prototype,"vertexColors",void 0),request.e([Texture.e()],R.prototype,"transparent",void 0),request.e([Texture.e()],R.prototype,"draped",void 0),request.e([Texture.e()],R.prototype,"stippleEnabled",void 0),request.e([Texture.e()],R.prototype,"stippleOffColorEnabled",void 0),request.e([Texture.e()],R.prototype,"stippleIntegerRepeatsEnabled",void 0),request.e([Texture.e()],R.prototype,"sceneHasOcludees",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I=request.s$1.getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial");class V extends Texture.a$5{constructor(e){super(e,k),this._techniqueConfig=new R;}getTechniqueConfig(e,r){this._techniqueConfig.output=e,this._techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this._techniqueConfig.vertexColors=this.parameters.vertexColors,this._techniqueConfig.transparent=this.parameters.color[3]<1||this.parameters.width<1,this._techniqueConfig.draped=20===r.slot;const s=request.r(this.parameters.stipplePattern);return this._techniqueConfig.stippleEnabled=s,this._techniqueConfig.stippleOffColorEnabled=s&&request.r(this.parameters.stippleOffColor),this._techniqueConfig.stippleIntegerRepeatsEnabled=s&&this.parameters.stippleIntegerRepeats,this._techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this._techniqueConfig}getPassParameters(){return this.parameters}intersect(e,t,r,s,i,o,n,a,c){c?Texture.I(e,s,o,1,n):this.intersectLineGeometry(e,t,r,s,n);}intersectLineGeometry(e,t,r,s,m){if(!s.options.selectionMode||utils.c(t))return;if(!Util.A(r))return void I.error("intersection assumes a translation-only matrix");const h=e.vertexAttributes.get("position").data,d=s.camera,v=ee;vec2.a(v,s.point);const x=2;mathUtils.o(te[0],v[0]-x,v[1]+x,0),mathUtils.o(te[1],v[0]+x,v[1]+x,0),mathUtils.o(te[2],v[0]+x,v[1]-x,0),mathUtils.o(te[3],v[0]-x,v[1]-x,0);for(let i=0;i<4;i++)if(!d.unprojectFromRenderScreen(te[i],re[i]))return;plane.y(d.eye,re[0],re[1],se),plane.y(d.eye,re[1],re[2],ie),plane.y(d.eye,re[2],re[3],oe),plane.y(d.eye,re[3],re[0],ne);let P=Number.MAX_VALUE;for(let i=0;i<h.length-5;i+=3){if(W[0]=h[i]+r[12],W[1]=h[i+1]+r[13],W[2]=h[i+2]+r[14],D[0]=h[i+3]+r[12],D[1]=h[i+4]+r[13],D[2]=h[i+5]+r[14],plane.R(se,W)<0&&plane.R(se,D)<0||plane.R(ie,W)<0&&plane.R(ie,D)<0||plane.R(oe,W)<0&&plane.R(oe,D)<0||plane.R(ne,W)<0&&plane.R(ne,D)<0)continue;if(d.projectToRenderScreen(W,J),d.projectToRenderScreen(D,K),J[2]<0&&K[2]>0){mathUtils.c(X,W,D);const e=d.frustum,t=-plane.R(e[4],W)/mathUtils.z(X,plane.W(e[4]));mathUtils.d(X,X,t),mathUtils.u(W,W,X),d.projectToRenderScreen(W,J);}else if(J[2]>0&&K[2]<0){mathUtils.c(X,D,W);const e=d.frustum,t=-plane.R(e[4],D)/mathUtils.z(X,plane.W(e[4]));mathUtils.d(X,X,t),mathUtils.u(D,D,X),d.projectToRenderScreen(D,K);}else if(J[2]<0&&K[2]<0)continue;J[2]=0,K[2]=0;const e=lineSegment.b(lineSegment.l(J,K,Z),v);e<P&&(P=e,mathUtils.r(Q,W),mathUtils.r(Y,D));}const q=s.rayBeginPoint,L=s.rayEndPoint;if(P<x*x){let e=Number.MAX_VALUE;if(lineSegment.k(lineSegment.l(Q,Y,Z),lineSegment.l(q,L,$),z)){mathUtils.c(z,z,q);const t=mathUtils.s(z);mathUtils.d(z,z,1/t),e=t/mathUtils.q(q,L);}m(e,z);}}computeAttachmentOrigin(e,t){const r=e.vertexAttributes;if(!r)return !1;const s=r.get("position");return geometryDataUtils.g(s,null,!1,t)}requiresSlot(e){return 2===e||20===e}createGLMaterial(e){return 0===e.output||4===e.output?new F(e):null}createBufferWriter(){const e=this.parameters.vertexColors?i$1:r$6;return request.t$1(this.parameters.stipplePattern)?new f$1(e):new G(e.clone().vec3f("auxpos1").vec2f("uv0"))}}class F extends Texture.e$5{updateParameters(e){return this.ensureTechnique(y,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees});}beginSlot(e){return 0===this._output&&this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.getPassParameters(),e);}}class G{constructor(e){this.vertexBufferLayout=e;}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,s){Texture.g$2(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,s),this.writeAuxpos1(e,t,r,s),this.writeUV0(e,t,r,s);}writeAuxpos1(e,t,r,s){const i=r.getField("auxpos1",BufferView.i),o=t.indices.get("position"),n=t.vertexAttributes.get("position").data,a=e.transformation,c=i.typedBufferStride,u=i.typedBuffer;s*=c;const l=I$6.ENABLE_CONTINUOUS_LINE_PATTERNS?[1,0]:[0,0];for(let p=0;p<o.length-1;p+=2)for(const e of l){const t=3*o[p+e],r=n[t],i=n[t+1],l=n[t+2],f=a[0]*r+a[4]*i+a[8]*l+a[12],m=a[1]*r+a[5]*i+a[9]*l+a[13],h=a[2]*r+a[6]*i+a[10]*l+a[14];u[s]=f,u[s+1]=m,u[s+2]=h,s+=c;}}writeUV0(e,t,r,s){const i=r.getField("uv0",BufferView.u),n=t.indices.get("position"),a=t.vertexAttributes.get("position").data,c=e.transformation,u=i.typedBufferStride,p=i.typedBuffer;let h=0;p[s*=u]=0,p[s+1]=h,s+=u;const d=3*n[0],g=mathUtils.o(W,a[d],a[d+1],a[d+2]);c&&mathUtils.I(g,g,c);const b=D,j=n.length-1;for(let _=1;_<j;_+=2){const e=3*n[_];mathUtils.o(b,a[e],a[e+1],a[e+2]),c&&mathUtils.I(b,b,c),h+=mathUtils.q(g,b);for(let t=0;t<2;++t)p[s]=1-t,p[s+1]=h,s+=u;mathUtils.r(g,b);}const v=3*n[j];mathUtils.o(b,a[v],a[v+1],a[v+2]),c&&mathUtils.I(b,b,c),h+=mathUtils.q(g,b),p[s]=1,p[s+1]=h;}}const k={color:[1,1,1,1],vertexColors:!1,slicePlaneEnabled:!1,width:1,stipplePattern:null,stippleIntegerRepeats:!1,stippleOffColor:null,sceneHasOcludees:!1,...Texture.n$2},W=common.n(),D=common.n(),X=common.n(),z=common.n(),J=screenUtils.x(),K=screenUtils.x(),Q=common.n(),Y=common.n(),Z=lineSegment.v(),$=lineSegment.v(),ee=common.n(),te=[screenUtils.x(),screenUtils.x(),screenUtils.x(),screenUtils.x()],re=[common.n(),common.n(),common.n(),common.n()],se=plane.p(),ie=plane.p(),oe=plane.p(),ne=plane.p();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(g){const u=new Texture.n,c=1===g.output;return u.include(Texture.r,{linearDepth:c}),u.include(Texture.r$4,g),u.vertex.uniforms.add("proj","mat4").add("view","mat4"),u.attributes.add("position","vec3"),u.varyings.add("vpos","vec3"),g.multipassTerrainEnabled&&u.varyings.add("depth","float"),c&&(u.include(Texture.e$2,g),u.vertex.uniforms.add("cameraNearFar","vec2"),u.varyings.add("linearDepth","float")),u.vertex.code.add(Texture.t`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      ${g.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${c?Texture.t`transformPositionWithDepth(proj, view, vpos, cameraNearFar, linearDepth);`:Texture.t`transformPosition(proj, view, vpos);`}
    }
  `),u.include(Texture.c,g),u.fragment.include(Texture.e$1),g.multipassTerrainEnabled&&(u.fragment.include(Texture.a),u.include(Texture.r$6,g)),u.fragment.uniforms.add("eColor","vec4"),4===g.output&&u.include(Texture.r$2),u.fragment.code.add(Texture.t`
  void main() {
    discardBySlice(vpos);
    ${g.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 color = ${g.attributeColor?"vColor * eColor;":"eColor;"}

    if (color.a < ${Texture.t.float(Texture.o$1)}) {
      discard;
    }

    ${7===g.output?Texture.t`gl_FragColor = vec4(color.a);`:""}

    ${0===g.output?Texture.t`gl_FragColor = highlightSlice(color, vpos); ${g.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${4===g.output?Texture.t`outputHighlight();`:""};
    ${1===g.output?Texture.t`outputDepth(linearDepth);`:""};
  }
  `),u}const u=Object.freeze({__proto__:null,build:g});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E extends Texture.t$2{initializeProgram(e){const t=E.shader.get(),r=this.configuration,i=t.build({output:r.output,OITEnabled:0===r.transparencyPassType,attributeColor:r.vertexColors,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new Texture.n$1(e.rctx,i,Texture.o)}bindPass(e,t){Texture.t$5(this.program,t.camera.projectionMatrix),this.program.setUniform4fv("eColor",e.color),4===this.configuration.output&&Texture.g(this.program,t),(1===this.configuration.output||t.multipassTerrainEnabled)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Texture.t$7(this.program,t));}bindDraw(e){Texture.a$4(this.program,e),this.program.rebindTextures(),Texture.l$2(this.program,this.configuration,e);}createPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return OrderIndependentTransparency.g({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?OrderIndependentTransparency.u:OrderIndependentTransparency.c(e),culling:OrderIndependentTransparency.s(r.cullFace),depthTest:{func:OrderIndependentTransparency.a(e)},depthWrite:i||o?r.writeDepth&&OrderIndependentTransparency.l:null,colorWrite:OrderIndependentTransparency.r,stencilWrite:r.sceneHasOcludees?Texture.f$2:null,stencilTest:r.sceneHasOcludees?t?Texture.t$8:Texture.c$1:null,polygonOffset:i||o?r.polygonOffset&&x:OrderIndependentTransparency.s$1(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.createPipeline(this.configuration.transparencyPassType,!0),this.createPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}E.shader=new Texture.t$3(u,(()=>Promise.resolve().then(function () { return require('./ColorMaterial.glsl-c80c704f.js'); })));const x={factor:1,units:1};class w extends Texture.t$1{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.vertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1;}}request.e([Texture.e({count:8})],w.prototype,"output",void 0),request.e([Texture.e({count:3})],w.prototype,"cullFace",void 0),request.e([Texture.e()],w.prototype,"slicePlaneEnabled",void 0),request.e([Texture.e()],w.prototype,"vertexColors",void 0),request.e([Texture.e()],w.prototype,"transparent",void 0),request.e([Texture.e()],w.prototype,"polygonOffset",void 0),request.e([Texture.e()],w.prototype,"enableOffset",void 0),request.e([Texture.e()],w.prototype,"writeDepth",void 0),request.e([Texture.e()],w.prototype,"sceneHasOcludees",void 0),request.e([Texture.e({count:4})],w.prototype,"transparencyPassType",void 0),request.e([Texture.e()],w.prototype,"multipassTerrainEnabled",void 0),request.e([Texture.e()],w.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h extends Texture.a$5{constructor(e){super(e,p),this.supportsEdges=!0,this.techniqueConfig=new w;}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.polygonOffset=this.parameters.polygonOffset,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<OrderIndependentTransparency.f,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}getPassParameters(){return this.parameters}intersect(e,t,r,s,i,a,n){Texture.h(e,t,s,i,a,void 0,n);}requiresSlot(e,r){if(20===e)return !0;if(4===t$9(r))return 2===e;return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)}createGLMaterial(e){return 0===e.output||7===e.output||4===e.output||1===e.output&&this.parameters.writeLinearDepth?new c(e):null}createBufferWriter(){return new f$1(i$1)}}class c extends Texture.e$5{updateParameters(e){return this.ensureTechnique(E,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees});}beginSlot(e){return 0!==this._output&&7!==this._output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.getPassParameters(),e);}}const p={color:[1,1,1,1],transparent:!1,writeDepth:!0,writeLinearDepth:!1,vertexColors:!1,polygonOffset:!1,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,...Texture.n$2};

exports.A = A$6;
exports.B = B$3;
exports.C = C$4;
exports.D = D$5;
exports.E = E$1;
exports.F = F$4;
exports.I = I$6;
exports.J = J$4;
exports.O = O$5;
exports.O$1 = O$3;
exports.P = P$5;
exports.P$1 = P$4;
exports.R = R$6;
exports.R$1 = R$5;
exports.S = S$3;
exports.S$1 = S$2;
exports.U = U$3;
exports.V = V$2;
exports.V$1 = V;
exports.W = W$3;
exports.W$1 = W$1;
exports.Z = Z$3;
exports.Z$1 = Z$4;
exports._ = _;
exports.a = a$6;
exports.a$1 = a$c;
exports.a$2 = a$1;
exports.a$3 = a$4;
exports.a$4 = a;
exports.a$5 = a$a;
exports.b = b$5;
exports.b$1 = b;
exports.b$2 = b$3;
exports.c = c$9;
exports.c$1 = c$8;
exports.c$2 = c$7;
exports.c$3 = c$5;
exports.c$4 = c$1;
exports.c$5 = c$4;
exports.d = d$4;
exports.d$1 = d$7;
exports.d$2 = d$6;
exports.d$3 = d$5;
exports.d$4 = d$2;
exports.d$5 = d$8;
exports.d$6 = d;
exports.e = e$9;
exports.e$1 = e$8;
exports.e$2 = e$1;
exports.e$3 = e;
exports.e$4 = e$6;
exports.f = f$4;
exports.f$1 = f$6;
exports.f$2 = f$1;
exports.f$3 = f$7;
exports.f$4 = f$3;
exports.g = g$7;
exports.g$1 = g$6;
exports.g$2 = g$8;
exports.g$3 = g;
exports.h = h$4;
exports.h$1 = h;
exports.h$2 = h$3;
exports.i = i$8;
exports.i$1 = i$7;
exports.i$2 = i$2;
exports.i$3 = i$5;
exports.i$4 = i$6;
exports.j = j$4;
exports.j$1 = j;
exports.l = l$5;
exports.l$1 = l;
exports.l$2 = l$9;
exports.m = m$1;
exports.m$1 = m$3;
exports.m$2 = m$5;
exports.n = n$7;
exports.n$1 = n$a;
exports.n$2 = n$5;
exports.n$3 = n$9;
exports.n$4 = n$8;
exports.n$5 = n$1;
exports.n$6 = n;
exports.n$7 = n$3;
exports.o = o$e;
exports.o$1 = o$1;
exports.o$2 = o$c;
exports.o$3 = o$b;
exports.o$4 = o;
exports.o$5 = o$4;
exports.o$6 = o$a;
exports.p = p$7;
exports.p$1 = p$5;
exports.p$2 = p$9;
exports.p$3 = p$4;
exports.q = q$1;
exports.r = r$8;
exports.r$1 = r$9;
exports.r$2 = r$e;
exports.r$3 = r$f;
exports.r$4 = r$5;
exports.r$5 = r$1;
exports.r$6 = r$2;
exports.s = s$8;
exports.s$1 = s$2;
exports.s$2 = s$c;
exports.s$3 = s$1;
exports.s$4 = s$d;
exports.se = se$1;
exports.t = t$c;
exports.t$1 = t$6;
exports.t$2 = t$b;
exports.t$3 = t;
exports.t$4 = t$9;
exports.te = te$1;
exports.u = u$2;
exports.u$1 = u$5;
exports.v = v$4;
exports.w = w$6;
exports.x = x$8;
exports.x$2 = x$6;
exports.y = y$5;
exports.y$1 = y$6;
exports.z = z$7;
exports.z$1 = z$4;
