'use strict';

const request = require('./messageBundle-312ceb47.js');
require('./unitUtils-61d611e2.js');
require('./Texture-272da42e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
exports.E = void 0;var T$1;exports.I = void 0;var L$1;exports.A = void 0;exports._ = void 0;exports.O = void 0;!function(E){E[E.FILL=0]="FILL",E[E.LINE=1]="LINE",E[E.MARKER=2]="MARKER",E[E.TEXT=3]="TEXT",E[E.LABEL=4]="LABEL";}(exports.E||(exports.E={})),function(E){E[E.SUCCEEDED=0]="SUCCEEDED",E[E.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY";}(T$1||(T$1={})),function(E){E[E.NONE=0]="NONE",E[E.MAP=1]="MAP",E[E.LABEL=2]="LABEL",E[E.LABEL_ALPHA=4]="LABEL_ALPHA",E[E.HITTEST=8]="HITTEST",E[E.HIGHLIGHT=16]="HIGHLIGHT",E[E.CLIP=32]="CLIP",E[E.DEBUG=64]="DEBUG",E[E.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES";}(exports.I||(exports.I={})),function(E){E[E.SIZE=0]="SIZE",E[E.COLOR=1]="COLOR",E[E.OPACITY=2]="OPACITY",E[E.ROTATION=3]="ROTATION";}(L$1||(L$1={})),function(E){E[E.NONE=0]="NONE",E[E.OPACITY=1]="OPACITY",E[E.COLOR=2]="COLOR",E[E.ROTATION=4]="ROTATION",E[E.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",E[E.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",E[E.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",E[E.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE";}(exports.A||(exports.A={})),function(E){E[E.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",E[E.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",E[E.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",E[E.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE";}(exports._||(exports._={})),function(E){E[E.SPRITE=0]="SPRITE",E[E.GLYPH=1]="GLYPH";}(exports.O||(exports.O={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h$1{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0;}acquire(o,h,s,t,i,l,r,e,c){this.color=o,this.haloColor=h,this.haloSize=s,this.size=t,this.angle=i,this.offsetX=l,this.offsetY=r,this.hAnchor=e,this.vAnchor=c;}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0;}}h$1.pool=new request.e$8(h$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=request.s$2.getLogger("esri.views.2d.engine.webgl.Utils"),l="geometry",d=[{name:l,strideInBytes:36,divisor:0}],p=[{name:l,strideInBytes:36,divisor:0}],g=[{name:l,strideInBytes:12,divisor:0}],y=[{name:l,strideInBytes:40,divisor:0}],h=[{name:l,strideInBytes:36,divisor:0}],w=[{name:l,strideInBytes:36,divisor:0}];function v(e){const t={};for(const r of e)t[r.name]=r.strideInBytes;return t}const S=v(d),L=v(p),M=v(g),A=v(y),I=v(h),T=v(w);function C(e,t){switch(e){case exports.E.MARKER:return S;case exports.E.FILL:return t?M:L;case exports.E.LINE:return A;case exports.E.TEXT:return I;case exports.E.LABEL:return T}}const b=[l],z=[l],x=[l],E=[l],F=[l];function D(e){switch(e){case exports.E.MARKER:return b;case exports.E.FILL:return z;case exports.E.LINE:return x;case exports.E.TEXT:return E;case exports.E.LABEL:return F}}function U(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function B(e,t){switch(t%4){case 0:case 2:return new Uint32Array(Math.floor(e*t/4));case 1:case 3:return new Uint8Array(e*t)}}function j(e,t){switch(t%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function $(e){return null!=e}function N(e){return "number"==typeof e}function O(t){switch(t){case"butt":return 0;case"round":return 1;case"square":return 2;default:return u.error(new request.s$1("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),1}}function P(t){switch(t){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return u.error(new request.s$1("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),1}}function V(e){switch(e){case"opacity":return L$1.OPACITY;case"color":return L$1.COLOR;case"rotation":return L$1.ROTATION;case"size":return L$1.SIZE;default:return u.error(`Cannot interpret unknown vv: ${e}`),null}}function k(e,t,r,n,i,o,a){for(const c in o){const t=o[c].stride,n=U(t),a=o[c].data,s=r[c].data,u=t*i.vertexCount/n,l=t*e/n,f=t*i.vertexFrom/n;for(let e=0;e<u;++e)s[e+l]=a[e+f];}const s=i.indexCount;for(let c=0;c<s;++c)n[c+t]=a[c+i.indexFrom]-i.vertexFrom+e;}const q={[l]:35044};function K(e,t){const r=[];for(let n=0;n<5;++n){const i=D(n),o={};for(const e of i)o[e]={data:t(n,e)};r.push({data:e(n),buffers:o});}return r}function H(e){switch(e){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function J(t){switch(t){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void u.error(new request.s$1("webgl-utils",`Unable to handle type ${t}`))}}function Q(t){switch(t){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void u.error(new request.s$1("webgl-utils",`Unable to handle type ${t}`))}}function Y(e){const t={};for(const r in e){const n=e[r];let i=0;t[r]=n.map((e=>{const t={...e,normalized:e.normalized||!1,divisor:e.divisor||0,offset:i,stride:0};return i+=e.count*H(e.type),t})),t[r].forEach((e=>e.stride=i));}return t}const G=e=>{const t=new Map;for(const r in e)for(const n of e[r])t.set(n.name,n.location);return t},W=e=>{const t={};for(const r in e){const n=e[r];t[r]=n.length?n[0].stride:0;}return t},ee=new Map,te=(e,t)=>{if(!ee.has(e)){const r=Y(t),n={strides:W(r),bufferLayouts:r,attributes:G(t)};ee.set(e,n);}return ee.get(e)};function re(e){e(exports.E.FILL),e(exports.E.LINE),e(exports.E.MARKER),e(exports.E.TEXT),e(exports.E.LABEL);}const ne=e=>"path"in e&&pe(e.path),ie=e=>"url"in e&&e.url||"imageData"in e&&e.imageData,oe=e=>"imageData"in e&&e.imageData&&"contentType"in e&&e.contentType?`data:${e.contentType};base64,${e.imageData}`:"url"in e?e.url:null,ae=e=>"url"in e&&e.url&&e.url.includes(".gif")||"contentType"in e&&"image/gif"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/gif"),se=e=>"url"in e&&e.url&&e.url.includes(".png")||"contentType"in e&&"image/png"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/png"),ce=e=>e.type&&-1!==e.type.toLowerCase().indexOf("3d");function ue(e){switch(e.type){case"line":{const t=e;return "CIMSolidStroke"===t.cim.type&&!t.dashTemplate}case"fill":return "CIMSolidFill"===e.cim.type;case"esriSFS":return "esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return "esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return !1}}const le=e=>e.includes("data:image/svg+xml");function fe(e){switch("cim"in e?e.cim.type:e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return !1;default:return !0}}function me(e){const t="maxVVSize"in e&&e.maxVVSize,r="width"in e&&e.width||"size"in e&&e.size||0;return t||r}function de(e){const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}const pe=e=>{if(!e)return !1;const t=/[MmZzLlHhVvCcSsQqTtAa0-9-,.\s]/g,r=!e.replace(t,"").length,n=!/[a-zA-Z][a-zA-Z]/.test(e),i=!/^[0-9-,.]/.test(e),o=!/.*[-,.]$/.test(e.trim());return r&&n&&i&&o};

exports.$ = $;
exports.B = B;
exports.C = C;
exports.J = J;
exports.K = K;
exports.N = N;
exports.O$1 = O;
exports.P = P;
exports.Q = Q;
exports.U = U;
exports.V = V;
exports.ae = ae;
exports.ce = ce;
exports.de = de;
exports.fe = fe;
exports.ie = ie;
exports.j = j;
exports.k = k;
exports.le = le;
exports.me = me;
exports.ne = ne;
exports.oe = oe;
exports.q = q;
exports.re = re;
exports.se = se;
exports.te = te;
exports.ue = ue;
