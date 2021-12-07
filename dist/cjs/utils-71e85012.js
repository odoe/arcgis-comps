'use strict';

const Color = require('./Color-7d915caa.js');
const SimpleLineSymbol = require('./symbols-29b793e5.js');
const asyncUtils = require('./asyncUtils-cd78b718.js');
const request = require('./messageBundle-8be88d04.js');
const screenUtils = require('./screenUtils-d911ae62.js');
const common = require('./common-41a349f2.js');
const ItemCache = require('./ItemCache-149fdb6e.js');
const utils = require('./utils-fb318f28.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(e){const c=utils.o(e);if("CIMTextSymbol"===c.type)return c.height;let s=0;if(c.symbolLayers)for(const t of c.symbolLayers)utils.c(t)&&t.size>s?s=t.size:utils.u(t)&&t.width>s?s=t.width:utils.M(t);return s}function i(e,o,a){const r=utils.o(e),c=n(e);if(0===c)return void l$1(r,o);f(r,o/c,!1,a);}function l$1(e,t){if("CIMTextSymbol"!==e.type){if(e.symbolLayers)for(const o of e.symbolLayers)switch(o.type){case"CIMPictureMarker":case"CIMVectorMarker":o.size=t;break;case"CIMPictureStroke":case"CIMSolidStroke":o.width=t;}}else e.height=t;}function f(e,t,o,a){if("CIMTextSymbol"!==e.type){if(o&&e.effects)for(const o of e.effects)y$1(o,t);if(e.symbolLayers)for(const o of e.symbolLayers)switch(o.type){case"CIMPictureMarker":case"CIMVectorMarker":m$1(o,t,a);break;case"CIMPictureStroke":case"CIMSolidStroke":null!=a&&a.preserveOutlineWidth||(o.width*=t);break;case"CIMPictureFill":o.height*=t,o.offsetX*=t,o.offsetY*=t;break;case"CIMHatchFill":f(o.lineSymbol,t,!0,{...a,preserveOutlineWidth:!1}),o.offsetX*=t,o.offsetY*=t,o.separation*=t;}}else e.height*=t;}function m$1(e,t,o){if(e.markerPlacement&&M$1(e.markerPlacement,t),e.offsetX*=t,e.offsetY*=t,e.anchorPoint&&"Absolute"===e.anchorPointUnits&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size*=t,"CIMVectorMarker"===e.type&&e.markerGraphics)for(const a of e.markerGraphics)e.scaleSymbolsProportionally||f(a.symbol,t,!0,o);}function M$1(e,t){switch(utils.s(e)&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset*=t,e.offsetAlongLine*=t,e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map((e=>e*t));e.placementTemplate=o;}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset*=t,e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map((e=>e*t));e.placementTemplate=o;}break;case"CIMMarkerPlacementOnLine":e.startPointOffset*=t;break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine*=t;break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition*=t,e.endPosition*=t;break;case"CIMMarkerPlacementPolygonCenter":e.offsetX*=t,e.offsetY*=t;break;case"CIMMarkerPlacementInsidePolygon":e.offsetX*=t,e.offsetY*=t,e.stepX*=t,e.stepY*=t;}}function y$1(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width*=t;break;case"CIMGeometricEffectBuffer":e.size*=t;break;case"CIMGeometricEffectCut":e.beginCut*=t,e.endCut*=t,e.middleCut*=t;break;case"CIMGeometricEffectDashes":if(e.customEndingOffset*=t,e.offsetAlongLine*=t,e.dashTemplate&&e.dashTemplate.length){const o=e.dashTemplate.map((e=>e*t));e.dashTemplate=o;}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length*=t;break;case"CIMGeometricEffectMove":e.offsetX*=t,e.offsetY*=t;break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset*=t;break;case"CIMGeometricEffectRegularPolygon":e.radius*=t;break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth*=t,e.length*=t,e.toWidth*=t;break;case"CIMGeometricEffectWave":e.amplitude*=t,e.period*=t;}}function C$1(o){const a=[];return k$2(utils.o(o),a),a.length?new Color.h(utils.l(a[0])):null}function k$2(e,t){let r;r="CIMTextSymbol"===e.type?e.symbol:e;const s="CIMPolygonSymbol"===e.type;if(r.symbolLayers)for(const n of r.symbolLayers)if(!(n.colorLocked||s&&(utils.u(n)||utils.c(n)&&n.markerPlacement&&utils.s(n.markerPlacement))))switch(n.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":break;case"CIMVectorMarker":n.markerGraphics.forEach((e=>{k$2(e.symbol,t);}));break;case"CIMSolidStroke":case"CIMSolidFill":b$2(t,n.color);break;case"CIMHatchFill":k$2(n.lineSymbol,t);}}function b$2(e,t){for(const o of e)if(o.join(".")===t.join("."))return;e.push(t);}function I$1(o,a){a instanceof Color.h||(a=new Color.h(a));p$1(utils.o(o),a);}function p$1(e,t){let r;r="CIMTextSymbol"===e.type?e.symbol:e;const s="CIMPolygonSymbol"===e.type;if(r.symbolLayers)for(const n of r.symbolLayers){if(n.colorLocked)continue;if(s&&(utils.u(n)||utils.c(n)&&n.markerPlacement&&utils.s(n.markerPlacement)))continue;const e=t.toArray(0);switch(n.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":break;case"CIMVectorMarker":n.markerGraphics.forEach((e=>{p$1(e.symbol,t);}));break;case"CIMSolidStroke":case"CIMSolidFill":n.color=e;break;case"CIMHatchFill":p$1(n.lineSymbol,t);}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s="picture-fill",l="simple-fill",c="simple-line",a="simple-marker",m="text",u="cim",d$1=new ItemCache.e(1e3);function b$1(e){const r=e.style;let o=null;if(e)switch(e.type){case a:"cross"!==r&&"x"!==r&&(o=e.color);break;case l:"solid"===r?o=e.color:"none"!==r&&(o={type:"pattern",x:0,y:0,src:request.a$1(`esri/symbols/patterns/${r}.png`),width:5,height:5});break;case s:o={type:"pattern",src:e.url,width:screenUtils.u(e.width)*e.xscale,height:screenUtils.u(e.height)*e.yscale,x:screenUtils.u(e.xoffset),y:screenUtils.u(e.yoffset)};break;case m:o=e.color;break;case u:o=C$1(e);}return o}function w$1(t,e){const o=t+"-"+e;return void 0!==d$1.get(o)?Promise.resolve(d$1.get(o)):request.E(t,{responseType:"image"}).then((t=>{const r=t.data,n=r.naturalWidth,i=r.naturalHeight,s=document.createElement("canvas");s.width=n,s.height=i;const l=s.getContext("2d");l.fillStyle=e,l.fillRect(0,0,n,i),l.globalCompositeOperation="destination-in",l.drawImage(r,0,0);const c=s.toDataURL();return d$1.put(o,c),c}))}function j(t){if(!t)return null;let e;switch(t.type){case l:case s:case a:e=j(t.outline);break;case c:{const r=screenUtils.u(t.width);"none"!==t.style&&0!==r&&(e={color:t.color,style:x$1(t.style),width:r,cap:t.cap,join:"miter"===t.join?screenUtils.u(t.miterLimit):t.join});break}default:e=null;}return e}const x$1=function(){const t={};return function(e){if(t[e])return t[e];const r=e.replace(/-/g,"");return t[e]=r,r}}(),k$1=new Color.h([128,128,128]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=/\/resource\/(.*?)\.svg$/,p=new Color.h("white");function h(e){const t=e.symbolLayers&&e.symbolLayers.length;if(!t)return;const r=e.symbolLayers.getItemAt(t-1);return "outline"in r?request.m$4(r,"outline","size"):void 0}function b(e){if(!e)return 0;if(SimpleLineSymbol.x(e)){const t=h(e);return request.r(t)?t:0}const r=j(e);return r&&screenUtils.e(r.width)||0}function w(e){if(request.t$1(e)||!("symbolLayers"in e)||request.t$1(e.symbolLayers))return !1;switch(e.type){case"point-3d":return e.symbolLayers.some((e=>"object"===e.type));case"line-3d":return e.symbolLayers.some((e=>"path"===e.type));case"polygon-3d":return e.symbolLayers.some((e=>"object"===e.type||"extrude"===e.type));default:return !1}}function d(e,t){const r=t.resource.href;return !request.s$3("esri-canvas-svg-support")&&e.styleOrigin&&y.test(r)?r.replace(y,"/resource/png/$1.png"):r}function k(t,r){if(null==r)return t;const o=t.toRgba();return o[3]=o[3]*r,new Color.h(o)}function L(e,t,r){const o=e.symbolLayers;if(!o)return;const n=e=>{const o=request.r(e)?e:null;return k(t=t||o||null!=r&&p,r)};o.forEach((e=>{if("object"!==e.type||null==e.resource.href||t)if("water"===e.type)e.color=n(e.color);else {const t=request.r(e.material)?e.material.color:null,o=n(t);request.t$1(e.material)?e.material=new SimpleLineSymbol.a({color:o}):e.material.color=o,null!=r&&"outline"in e&&request.r(e.outline)&&request.r(e.outline.color)&&(e.outline.color=k(e.outline.color,r));}}));}function z(e,t,r){(t=t||e.color)&&(e.color=k(t,r)),null!=r&&"outline"in e&&e.outline&&e.outline.color&&(e.outline.color=k(e.outline.color,r));}function v(o,n,i){o&&(n||null!=i)&&(n&&(n=new Color.h(n)),SimpleLineSymbol.x(o)?L(o,n,i):SimpleLineSymbol.c$1(o)&&z(o,n,i));}async function x(e,t){const r=e.symbolLayers;r&&await asyncUtils.n(r,(async e=>S(e,t)));}async function S(e,t){switch(e.type){case"extrude":O(e,t);break;case"icon":case"line":case"text":U(e,t);break;case"path":$(e,t);break;case"object":await R(e,t);}}function U(e,t){const r=E(t);request.r(r)&&(e.size=r);}function E(e){for(const t of e)if("number"==typeof t)return t;return null}function O(e,t){e.size="number"==typeof t[2]?t[2]:0;}async function R(e,t){const{resourceSize:r,symbolSize:o}=await C(e),n=A(t,r,o);e.width=D(t[0],o[0],r[0],n),e.depth=D(t[1],o[1],r[1],n),e.height=D(t[2],o[2],r[2],n);}function $(e,t){const r=A(t,common.l,[e.width,void 0,e.height]);e.width=D(t[0],e.width,1,r),e.height=D(t[2],e.height,1,r);}function A(e,t,r){for(let o=0;o<3;o++){const n=e[o];switch(n){case"symbol-value":return null!=r[o]?r[o]/t[o]:1;case"proportional":break;default:if(n&&t[o])return n/t[o]}}return 1}async function C(e){const t=await Promise.resolve().then(function () { return require('./symbolLayerUtils-76d62377.js'); }),r=await t.computeObjectLayerResourceSize(e,10),{width:o,height:n,depth:i}=e,l=[o,i,n];let s=1;for(let c=0;c<3;c++)if(null!=l[c]){s=l[c]/r[c];break}for(let c=0;c<3;c++)null==l[c]&&(l[c]=r[c]*s);return {resourceSize:r,symbolSize:l}}function D(e,t,r,o){switch(e){case"proportional":return r*o;case"symbol-value":return null!=t?t:r;default:return e}}function I(e,t){const r=E(t);if(!request.t$1(r))switch(e.type){case"simple-marker":e.size=r;break;case"picture-marker":{const t=e.width/e.height;t>1?(e.width=r,e.height=r*t):(e.width=r*t,e.height=r);break}case"simple-line":e.width=r;break;case"text":e.font.size=r;}}async function M(e,o){if(e&&o)return SimpleLineSymbol.x(e)?x(e,o):void(SimpleLineSymbol.c$1(e)&&I(e,o))}function q(e,o,n){if(e&&null!=o)if(SimpleLineSymbol.x(e)){const t=e.symbolLayers;t&&t.forEach((e=>{if(e&&"object"===e.type)switch(n){case"tilt":e.tilt=o;break;case"roll":e.roll=o;break;default:e.heading=o;}}));}else SimpleLineSymbol.c$1(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle=o));}

exports.I = I$1;
exports.M = M;
exports.b = b$1;
exports.b$1 = b;
exports.d = d;
exports.i = i;
exports.j = j;
exports.k = k$1;
exports.m = m$1;
exports.n = n;
exports.q = q;
exports.v = v;
exports.w = w;
exports.w$1 = w$1;
exports.x = x$1;
