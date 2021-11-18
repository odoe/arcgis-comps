'use strict';

const unitUtils = require('./unitUtils-61d611e2.js');
const request = require('./messageBundle-312ceb47.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function a(a,S=p){if(!a)return {symbol:null};const{retainId:c=p.retainId,ignoreDrivers:u=p.ignoreDrivers,hasLabelingContext:d=p.hasLabelingContext,retainCIM:j=p.retainCIM}=S;let D;if(unitUtils.x(a)||a instanceof unitUtils.h$4)D=a.clone();else if("cim"===a.type){var g,C;const o=null==(g=a.data)||null==(C=g.symbol)?void 0:C.type;if("CIMPointSymbol"!==o)return {error:new request.s$1("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${o||"unknown"}' is unsupported in 3D`,{symbol:a})};D=j?a.clone():unitUtils.L$1.fromCIMSymbol(a);}else if(a instanceof unitUtils.m$3)D=unitUtils.b$2.fromSimpleLineSymbol(a);else if(a instanceof unitUtils.y$1)D=unitUtils.L$1.fromSimpleMarkerSymbol(a);else if(a instanceof unitUtils.n$3)D=unitUtils.L$1.fromPictureMarkerSymbol(a);else if(a instanceof unitUtils.S)D=unitUtils.h$3.fromSimpleFillSymbol(a);else {if(!(a instanceof unitUtils.c$8))return {error:new request.s$1("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${a.type||a.declaredClass}' is unsupported in 3D`,{symbol:a})};D=d?unitUtils.b$3.fromTextSymbol(a):unitUtils.L$1.fromTextSymbol(a);}if(c&&"cim"!==D.type&&(D.id=a.id),u&&unitUtils.x(D))for(let o=0;o<D.symbolLayers.length;++o)D.symbolLayers.getItemAt(o)._ignoreDrivers=!0;return {symbol:D}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function m(e,o,s,r){const n=i(e,{},r);n&&(o[s]=n);}function i(e,m,i){if(!e)return null;if(i&&"web-scene"===i.origin&&!(e instanceof unitUtils.A$1)&&!(e instanceof unitUtils.h$4)){const r=a(e,{retainCIM:!0});return request.r(r.symbol)?r.symbol.write(m,i):(i.messages&&i.messages.push(new request.s$1("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:i,error:r.error})),null)}return i&&"web-map"===i.origin&&"web-style"===e.type?(i.messages&&i.messages.push(new request.s$1("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:e,context:i})),null):e.write(m,i)}function l(o,s){return unitUtils.k$1(o,null,s)}

exports.l = l;
exports.m = m;
