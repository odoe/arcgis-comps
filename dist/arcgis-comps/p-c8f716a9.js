import{D as e,bi as t,aR as r,bj as n,aK as c,bk as a,bl as o}from"./p-566b0715.js";import{n as s}from"./p-57ae469d.js";import{O as i,al as l,t as f,r as u,a7 as M,aJ as k}from"./p-9ae46e68.js";import{e as b}from"./p-27ef204b.js";import{u as m,c as C,s as I,M as p,o as d,l as y}from"./p-9e860e7b.js";function w(e){const t=d(e);if("CIMTextSymbol"===t.type)return t.height;let r=0;if(t.symbolLayers)for(const e of t.symbolLayers)C(e)&&e.size>r?r=e.size:m(e)&&e.width>r?r=e.width:p(e);return r}function h(e,t,r){const n=d(e),c=w(e);0!==c?P(n,t/c,!1,r):function(e,t){if("CIMTextSymbol"!==e.type){if(e.symbolLayers)for(const r of e.symbolLayers)switch(r.type){case"CIMPictureMarker":case"CIMVectorMarker":r.size=t;break;case"CIMPictureStroke":case"CIMSolidStroke":r.width=t}}else e.height=t}(n,t)}function P(e,t,r,n){if("CIMTextSymbol"!==e.type){if(r&&e.effects)for(const r of e.effects)g(r,t);if(e.symbolLayers)for(const r of e.symbolLayers)switch(r.type){case"CIMPictureMarker":case"CIMVectorMarker":S(r,t,n);break;case"CIMPictureStroke":case"CIMSolidStroke":null!=n&&n.preserveOutlineWidth||(r.width*=t);break;case"CIMPictureFill":r.height*=t,r.offsetX*=t,r.offsetY*=t;break;case"CIMHatchFill":P(r.lineSymbol,t,!0,{...n,preserveOutlineWidth:!1}),r.offsetX*=t,r.offsetY*=t,r.separation*=t}}else e.height*=t}function S(e,t,r){if(e.markerPlacement&&function(e,t){switch(I(e)&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset*=t,e.offsetAlongLine*=t,e.placementTemplate&&e.placementTemplate.length){const r=e.placementTemplate.map((e=>e*t));e.placementTemplate=r}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset*=t,e.placementTemplate&&e.placementTemplate.length){const r=e.placementTemplate.map((e=>e*t));e.placementTemplate=r}break;case"CIMMarkerPlacementOnLine":e.startPointOffset*=t;break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine*=t;break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition*=t,e.endPosition*=t;break;case"CIMMarkerPlacementPolygonCenter":e.offsetX*=t,e.offsetY*=t;break;case"CIMMarkerPlacementInsidePolygon":e.offsetX*=t,e.offsetY*=t,e.stepX*=t,e.stepY*=t}}(e.markerPlacement,t),e.offsetX*=t,e.offsetY*=t,e.anchorPoint&&"Absolute"===e.anchorPointUnits&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size*=t,"CIMVectorMarker"===e.type&&e.markerGraphics)for(const n of e.markerGraphics)e.scaleSymbolsProportionally||P(n.symbol,t,!0,r)}function g(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width*=t;break;case"CIMGeometricEffectBuffer":e.size*=t;break;case"CIMGeometricEffectCut":e.beginCut*=t,e.endCut*=t,e.middleCut*=t;break;case"CIMGeometricEffectDashes":if(e.customEndingOffset*=t,e.offsetAlongLine*=t,e.dashTemplate&&e.dashTemplate.length){const r=e.dashTemplate.map((e=>e*t));e.dashTemplate=r}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length*=t;break;case"CIMGeometricEffectMove":e.offsetX*=t,e.offsetY*=t;break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset*=t;break;case"CIMGeometricEffectRegularPolygon":e.radius*=t;break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth*=t,e.length*=t,e.toWidth*=t;break;case"CIMGeometricEffectWave":e.amplitude*=t,e.period*=t}}function x(t){const r=[];return E(d(t),r),r.length?new e(y(r[0])):null}function E(e,t){let r;r="CIMTextSymbol"===e.type?e.symbol:e;const n="CIMPolygonSymbol"===e.type;if(r.symbolLayers)for(const e of r.symbolLayers)if(!(e.colorLocked||n&&(m(e)||C(e)&&e.markerPlacement&&I(e.markerPlacement))))switch(e.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":break;case"CIMVectorMarker":e.markerGraphics.forEach((e=>{E(e.symbol,t)}));break;case"CIMSolidStroke":case"CIMSolidFill":G(t,e.color);break;case"CIMHatchFill":E(e.lineSymbol,t)}}function G(e,t){for(const r of e)if(r.join(".")===t.join("."))return;e.push(t)}function j(t,r){r instanceof e||(r=new e(r)),v(d(t),r)}function v(e,t){let r;r="CIMTextSymbol"===e.type?e.symbol:e;const n="CIMPolygonSymbol"===e.type;if(r.symbolLayers)for(const e of r.symbolLayers){if(e.colorLocked)continue;if(n&&(m(e)||C(e)&&e.markerPlacement&&I(e.markerPlacement)))continue;const r=t.toArray(0);switch(e.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":break;case"CIMVectorMarker":e.markerGraphics.forEach((e=>{v(e.symbol,t)}));break;case"CIMSolidStroke":case"CIMSolidFill":e.color=r;break;case"CIMHatchFill":v(e.lineSymbol,t)}}}const z="picture-fill",A="simple-fill",F="simple-marker",T=new b(1e3);function V(e){const r=e.style;let n=null;if(e)switch(e.type){case F:"cross"!==r&&"x"!==r&&(n=e.color);break;case A:"solid"===r?n=e.color:"none"!==r&&(n={type:"pattern",x:0,y:0,src:l(`esri/symbols/patterns/${r}.png`),width:5,height:5});break;case z:n={type:"pattern",src:e.url,width:t(e.width)*e.xscale,height:t(e.height)*e.yscale,x:t(e.xoffset),y:t(e.yoffset)};break;case"text":n=e.color;break;case"cim":n=x(e)}return n}function O(e,t){const r=e+"-"+t;return void 0!==T.get(r)?Promise.resolve(T.get(r)):i(e,{responseType:"image"}).then((e=>{const n=e.data,c=n.naturalWidth,a=n.naturalHeight,o=document.createElement("canvas");o.width=c,o.height=a;const s=o.getContext("2d");s.fillStyle=t,s.fillRect(0,0,c,a),s.globalCompositeOperation="destination-in",s.drawImage(n,0,0);const i=o.toDataURL();return T.put(r,i),i}))}function L(e){if(!e)return null;let r;switch(e.type){case A:case z:case F:r=L(e.outline);break;case"simple-line":{const n=t(e.width);"none"!==e.style&&0!==n&&(r={color:e.color,style:R(e.style),width:n,cap:e.cap,join:"miter"===e.join?t(e.miterLimit):e.join});break}default:r=null}return r}const R=function(){const e={};return function(t){if(e[t])return e[t];const r=t.replace(/-/g,"");return e[t]=r,r}}(),D=new e([128,128,128]),H=/\/resource\/(.*?)\.svg$/,$=new e("white");function J(e){if(!e)return 0;if(r(e)){const t=function(e){const t=e.symbolLayers&&e.symbolLayers.length;if(!t)return;const r=e.symbolLayers.getItemAt(t-1);return"outline"in r?k(r,"outline","size"):void 0}(e);return u(t)?t:0}const t=L(e);return t&&c(t.width)||0}function W(e){if(f(e)||!("symbolLayers"in e)||f(e.symbolLayers))return!1;switch(e.type){case"point-3d":return e.symbolLayers.some((e=>"object"===e.type));case"line-3d":return e.symbolLayers.some((e=>"path"===e.type));case"polygon-3d":return e.symbolLayers.some((e=>"object"===e.type||"extrude"===e.type));default:return!1}}function B(e,t){const r=t.resource.href;return!M("esri-canvas-svg-support")&&e.styleOrigin&&H.test(r)?r.replace(H,"/resource/png/$1.png"):r}function K(t,r){if(null==r)return t;const n=t.toRgba();return n[3]=n[3]*r,new e(n)}function U(t,c,o){t&&(c||null!=o)&&(c&&(c=new e(c)),r(t)?function(e,t,r){const n=e.symbolLayers;if(!n)return;const c=e=>{const n=u(e)?e:null;return K(t=t||n||null!=r&&$,r)};n.forEach((e=>{if("object"!==e.type||null==e.resource.href||t)if("water"===e.type)e.color=c(e.color);else{const t=u(e.material)?e.material.color:null,n=c(t);f(e.material)?e.material=new a({color:n}):e.material.color=n,null!=r&&"outline"in e&&u(e.outline)&&u(e.outline.color)&&(e.outline.color=K(e.outline.color,r))}}))}(t,c,o):n(t)&&function(e,t,r){(t=t||e.color)&&(e.color=K(t,r)),null!=r&&"outline"in e&&e.outline&&e.outline.color&&(e.outline.color=K(e.outline.color,r))}(t,c,o))}function q(e,t){const r=N(t);u(r)&&(e.size=r)}function N(e){for(const t of e)if("number"==typeof t)return t;return null}function Q(e,t,r){for(let n=0;n<3;n++){const c=e[n];switch(c){case"symbol-value":return null!=r[n]?r[n]/t[n]:1;case"proportional":break;default:if(c&&t[n])return c/t[n]}}return 1}function X(e,t,r,n){switch(e){case"proportional":return r*n;case"symbol-value":return null!=t?t:r;default:return e}}async function Y(e,t){if(e&&t)return r(e)?async function(e,t){const r=e.symbolLayers;r&&await s(r,(async e=>async function(e,t){switch(e.type){case"extrude":!function(e,t){e.size="number"==typeof t[2]?t[2]:0}(e,t);break;case"icon":case"line":case"text":q(e,t);break;case"path":!function(e,t){const r=Q(t,o,[e.width,void 0,e.height]);e.width=X(t[0],e.width,1,r),e.height=X(t[2],e.height,1,r)}(e,t);break;case"object":await async function(e,t){const{resourceSize:r,symbolSize:n}=await async function(e){const t=await import("./p-3a7aa59e.js"),r=await t.computeObjectLayerResourceSize(e,10),{width:n,height:c,depth:a}=e,o=[n,a,c];let s=1;for(let e=0;e<3;e++)if(null!=o[e]){s=o[e]/r[e];break}for(let e=0;e<3;e++)null==o[e]&&(o[e]=r[e]*s);return{resourceSize:r,symbolSize:o}}(e),c=Q(t,r,n);e.width=X(t[0],n[0],r[0],c),e.depth=X(t[1],n[1],r[1],c),e.height=X(t[2],n[2],r[2],c)}(e,t)}}(e,t)))}(e,t):void(n(e)&&function(e,t){const r=N(t);if(!f(r))switch(e.type){case"simple-marker":e.size=r;break;case"picture-marker":{const t=e.width/e.height;t>1?(e.width=r,e.height=r*t):(e.width=r*t,e.height=r);break}case"simple-line":e.width=r;break;case"text":e.font.size=r}}(e,t))}function Z(e,t,c){if(e&&null!=t)if(r(e)){const r=e.symbolLayers;r&&r.forEach((e=>{if(e&&"object"===e.type)switch(c){case"tilt":e.tilt=t;break;case"roll":e.roll=t;break;default:e.heading=t}}))}else n(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle=t))}export{j as I,Y as M,J as a,V as b,O as c,B as d,h as i,L as j,D as k,S as m,w as n,Z as q,U as v,W as w,R as x}