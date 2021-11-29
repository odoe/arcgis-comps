'use strict';

const deduplicate = require('./deduplicate-d781c13a.js');
const BufferView = require('./BufferView-89753425.js');
const request = require('./MapView-1726f571.js');
const InterleavedLayout = require('./InterleavedLayout-c6e561d6.js');
require('./index-fde8502c.js');
require('./types-122ed12c.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$1(t,o,n){const r=o/3,c=new Uint32Array(n+1),e=new Uint32Array(n+1),s=(t,o)=>{t<o?c[t+1]++:e[o+1]++;};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];s(o,n),s(n,r),s(r,o);}let f=0,l=0;for(let x=0;x<n;x++){const t=c[x+1],o=e[x+1];c[x+1]=f,e[x+1]=l,f+=t,l+=o;}const i=new Uint32Array(6*r),a=c[n],w=(t,o,n)=>{if(t<o){const r=c[t+1]++;i[2*r]=o,i[2*r+1]=n;}else {const r=e[o+1]++;i[2*a+2*r]=t,i[2*a+2*r+1]=n;}};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];w(o,n,x),w(n,r,x),w(r,o,x);}const y=(t,o)=>{const n=2*t,r=o-t;for(let c=1;c<r;c++){const t=i[n+2*c],o=i[n+2*c+1];let r=c-1;for(;r>=0&&i[n+2*r]>t;r--)i[n+2*r+2]=i[n+2*r],i[n+2*r+3]=i[n+2*r+1];i[n+2*r+2]=t,i[n+2*r+3]=o;}};for(let x=0;x<n;x++)y(c[x],c[x+1]),y(a+e[x],a+e[x+1]);const A=new Int32Array(3*r),U=(o,n)=>o===t[3*n]?0:o===t[3*n+1]?1:o===t[3*n+2]?2:-1,u=(t,o)=>{const n=U(t,o);A[3*o+n]=-1;},p=(t,o,n,r)=>{const c=U(t,o);A[3*o+c]=r;const e=U(n,r);A[3*r+e]=o;};for(let x=0;x<n;x++){let t=c[x];const o=c[x+1];let n=e[x];const r=e[x+1];for(;t<o&&n<r;){const o=i[2*t],r=i[2*a+2*n];o===r?(p(x,i[2*t+1],r,i[2*a+2*n+1]),t++,n++):o<r?(u(x,i[2*t+1]),t++):(u(r,i[2*a+2*n+1]),n++);}for(;t<o;)u(x,i[2*t+1]),t++;for(;n<r;){u(i[2*a+2*n],i[2*a+2*n+1]),n++;}}return A}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function z(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:F(e.layout)}}function F(e){const t=new Array;return e.fields.forEach(((e,r)=>{const o={...e,constructor:J(e.constructor)};t.push([r,o]);})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}const H=[BufferView.y,BufferView.u,BufferView.i,BufferView.c,BufferView.l,BufferView.p,BufferView.o,BufferView.m,BufferView.T,BufferView.h,BufferView.a,BufferView.b,BufferView.d,BufferView.A,BufferView.O,BufferView.x,BufferView.g,BufferView.w,BufferView.E,BufferView.L,BufferView.B,BufferView.F,BufferView.I,BufferView.U,BufferView.j,BufferView.V,BufferView.M,BufferView.S,BufferView.k,BufferView.q,BufferView.v,BufferView.z,BufferView.C,BufferView.D,BufferView.G,BufferView.H];function J(e){return `${e.ElementType}_${e.ElementCount}`}const O=new Map;H.forEach((e=>O.set(J(e),e)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,o=0){const n=t.stride;return t.fieldNames.filter((e=>{const o=t.fields.get(e).optional;return !(o&&o.glPadding)})).map((r=>{const i=t.fields.get(r),s=i.constructor.ElementCount,u=e$1(i.constructor.ElementType),f=i.offset,l=!(!i.optional||!i.optional.glNormalized);return {name:r,stride:n,count:s,type:u,offset:f,normalized:l,divisor:o}}))}function e$1(t){const e=o[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const o={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=InterleavedLayout.A().vec3f("position").u16("componentIndex").u16("u16padding"),i=InterleavedLayout.A().vec2u8("sideness");t(i);const a$2=InterleavedLayout.A().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0}),r=a$2.clone().vec3f("normal"),s=a$2.clone().vec3f("normalA").vec3f("normalB");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a$1{updateSettings(t){this.settings=t,this.edgeHashFunction=t.reducedPrecision?f$1:p$1;}write(t,o,e){const n=this.edgeHashFunction(e);W.seed=n;const i=W.getIntRange(0,255),r=W.getIntRange(0,this.settings.variants-1),s=.7,a=W.getFloat(),c=255*(.5*g$1(-(1-Math.min(a/s,1))+Math.max(0,a-s)/(1-s),1.2)+.5);t.position0.setVec(o,e.position0),t.position1.setVec(o,e.position1),t.componentIndex.set(o,e.componentIndex),t.variantOffset.set(o,i),t.variantStroke.set(o,r),t.variantExtension.set(o,c);}trim(t,o){return t.slice(0,o)}}const c$1=new Float32Array(6),m=new Uint32Array(c$1.buffer),u$2=new Uint32Array(1);function p$1(t){const o=c$1;o[0]=t.position0[0],o[1]=t.position0[1],o[2]=t.position0[2],o[3]=t.position1[0],o[4]=t.position1[1],o[5]=t.position1[2],u$2[0]=5381;for(let e=0;e<m.length;e++)u$2[0]=31*u$2[0]+m[e];return u$2[0]}function f$1(t){const o=c$1;o[0]=h$1(t.position0[0]),o[1]=h$1(t.position0[1]),o[2]=h$1(t.position0[2]),o[3]=h$1(t.position1[0]),o[4]=h$1(t.position1[1]),o[5]=h$1(t.position1[2]),u$2[0]=5381;for(let e=0;e<m.length;e++)u$2[0]=31*u$2[0]+m[e];return u$2[0]}const l$1=1e4;function h$1(t){return Math.round(t*l$1)/l$1}function g$1(t,o){const e=t<0?-1:1;return Math.abs(t)**o*e}class d$2{constructor(){this.commonWriter=new a$1;}updateSettings(t){this.commonWriter.updateSettings(t);}allocate(t){return r.createBuffer(t)}write(t,n,i){this.commonWriter.write(t,n,i),request.u$1(y$1,i.faceNormal0,i.faceNormal1),request.j$9(y$1,y$1),t.normal.setVec(n,y$1);}trim(t,o){return this.commonWriter.trim(t,o)}}d$2.Layout=r,d$2.glLayout=t(r,1);class w$1{constructor(){this.commonWriter=new a$1;}updateSettings(t){this.commonWriter.updateSettings(t);}allocate(t){return s.createBuffer(t)}write(t,o,e){this.commonWriter.write(t,o,e),t.normalA.setVec(o,e.faceNormal0),t.normalB.setVec(o,e.faceNormal1);}trim(t,o){return this.commonWriter.trim(t,o)}}w$1.Layout=s,w$1.glLayout=t(s,1);const y$1=request.n(),W=new request.t$12;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=-1;function u$1(n,i,l,g=V){const f=n.vertices.position,m=n.vertices.componentIndex,u=request.M(g.anglePlanar),I=request.M(g.angleSignificantEdge),N=Math.cos(I),j=Math.cos(u),x=y.edge,F=x.position0,E=x.position1,U=x.faceNormal0,k=x.faceNormal1,D=w(n),M=v(n),P=M.length/4,S=i.allocate(P);let b=0;const L=P,q=l.allocate(L);let z=0,B=0,C=0;const G=request.m$16(0,P),H=new Float32Array(P);request.n$19(H,((e,t,n)=>{f.getVec(M[4*t+0],F),f.getVec(M[4*t+1],E),n[t]=request.q$2(F,E);})),G.sort(((e,t)=>H[t]-H[e]));const J=new Array,K=new Array;for(let e=0;e<P;e++){const t=G[e],n=H[t],o=M[4*t+0],r=M[4*t+1],g=M[4*t+2],v=M[4*t+3],w=v===p;if(f.getVec(o,F),f.getVec(r,E),w)request.o$8(U,D[3*g+0],D[3*g+1],D[3*g+2]),request.r$1(k,U),x.componentIndex=m.get(o),x.cosAngle=request.z(U,k);else {if(request.o$8(U,D[3*g+0],D[3*g+1],D[3*g+2]),request.o$8(k,D[3*v+0],D[3*v+1],D[3*v+2]),x.componentIndex=m.get(o),x.cosAngle=request.z(U,k),d$1(x,j))continue;x.cosAngle<-.9999&&request.r$1(k,U);}B+=n,C++,w||h(x,N)?(i.write(S,b++,x),J.push(n)):A(x,u)&&(l.write(q,z++,x),K.push(n));}const O=new Float32Array(J.reverse()),Q=new Float32Array(K.reverse());return {regular:{instancesData:i.trim(S,b),lodInfo:{lengths:O}},silhouette:{instancesData:l.trim(q,z),lodInfo:{lengths:Q}},averageEdgeLength:B/C}}function h(e,t){return e.cosAngle<t}function d$1(e,t){return e.cosAngle>t}function A(e,t){const o=request.l$17(e.cosAngle),r=y.fwd,s=y.ortho;request.H$3(r,e.position1,e.position0);return o*(request.z(request._$1(s,e.faceNormal0,e.faceNormal1),r)>0?-1:1)>t}function v(e){const t=e.faces.length/3,n=e.faces,o=e.neighbors;let r=0;for(let a=0;a<t;a++){const e=o[3*a+0],t=o[3*a+1],s=o[3*a+2],c=n[3*a+0],i=n[3*a+1],l=n[3*a+2];r+=e===p||c<i?1:0,r+=t===p||i<l?1:0,r+=s===p||l<c?1:0;}const s=new Int32Array(4*r);let c=0;for(let a=0;a<t;a++){const e=o[3*a+0],t=o[3*a+1],r=o[3*a+2],i=n[3*a+0],l=n[3*a+1],g=n[3*a+2];(e===p||i<l)&&(s[c++]=i,s[c++]=l,s[c++]=a,s[c++]=e),(t===p||l<g)&&(s[c++]=l,s[c++]=g,s[c++]=a,s[c++]=t),(r===p||g<i)&&(s[c++]=g,s[c++]=i,s[c++]=a,s[c++]=r);}return s}function w(e){const t=e.faces.length/3,n=e.vertices.position,o=e.faces,r=I.v0,s=I.v1,c=I.v2,a=new Float32Array(3*t);for(let i=0;i<t;i++){const e=o[3*i+0],t=o[3*i+1],m=o[3*i+2];n.getVec(e,r),n.getVec(t,s),n.getVec(m,c),request.c$2(s,s,r),request.c$2(c,c,r),request._$1(r,s,c),request.j$9(r,r),a[3*i+0]=r[0],a[3*i+1]=r[1],a[3*i+2]=r[2];}return a}const y={edge:{position0:request.n(),position1:request.n(),faceNormal0:request.n(),faceNormal1:request.n(),componentIndex:0,cosAngle:0},ortho:request.n(),fwd:request.n()},I={v0:request.n(),v1:request.n(),v2:request.n()},V={anglePlanar:4,angleSignificantEdge:35};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function a(e){const t=u(e),n=f(t),r=[t.data.buffer];return {result:c(n,r),transferList:r}}function f(e){const t=g(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return d.updateSettings(e.writerSettings),l.updateSettings(e.writerSettings),u$1(t,d,l)}function u(e$1){return {data:e.createView(e$1.dataBuffer),indices:"Uint32Array"===e$1.indicesType?new Uint32Array(e$1.indicesBuffer):"Uint16Array"===e$1.indicesType?new Uint16Array(e$1.indicesBuffer):void 0,indicesLength:e$1.indicesLength,writerSettings:e$1.writerSettings,skipDeduplicate:e$1.skipDeduplicate}}function c(e,t){t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer);return {regular:{instancesData:z(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:z(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}function g(n,i,s,o){if(i){return {faces:s,facesLength:o,neighbors:t$1(s,o,n.count),vertices:n}}const a=deduplicate.n(n.buffer,n.stride/4,{originalIndices:s,originalIndicesLength:o}),f=t$1(a.indices,o,a.uniqueCount);return {faces:a.indices,facesLength:a.indices.length,neighbors:f,vertices:e.createView(a.buffer)}}const d=new d$2,l=new w$1;

exports.work = f;
exports.wrappedWork = a;
