'use strict';

const SimpleLineSymbol = require('./symbols-29b793e5.js');
const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function a(a,S=p){if(!a)return {symbol:null};const{retainId:c=p.retainId,ignoreDrivers:u=p.ignoreDrivers,hasLabelingContext:d=p.hasLabelingContext,retainCIM:j=p.retainCIM}=S;let D;if(SimpleLineSymbol.x(a)||a instanceof SimpleLineSymbol.h$2)D=a.clone();else if("cim"===a.type){var g,C;const o=null==(g=a.data)||null==(C=g.symbol)?void 0:C.type;if("CIMPointSymbol"!==o)return {error:new request.s("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${o||"unknown"}' is unsupported in 3D`,{symbol:a})};D=j?a.clone():SimpleLineSymbol.L.fromCIMSymbol(a);}else if(a instanceof SimpleLineSymbol.m)D=SimpleLineSymbol.b.fromSimpleLineSymbol(a);else if(a instanceof SimpleLineSymbol.y)D=SimpleLineSymbol.L.fromSimpleMarkerSymbol(a);else if(a instanceof SimpleLineSymbol.n)D=SimpleLineSymbol.L.fromPictureMarkerSymbol(a);else if(a instanceof SimpleLineSymbol.S)D=SimpleLineSymbol.h$1.fromSimpleFillSymbol(a);else {if(!(a instanceof SimpleLineSymbol.c))return {error:new request.s("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${a.type||a.declaredClass}' is unsupported in 3D`,{symbol:a})};D=d?SimpleLineSymbol.b$1.fromTextSymbol(a):SimpleLineSymbol.L.fromTextSymbol(a);}if(c&&"cim"!==D.type&&(D.id=a.id),u&&SimpleLineSymbol.x(D))for(let o=0;o<D.symbolLayers.length;++o)D.symbolLayers.getItemAt(o)._ignoreDrivers=!0;return {symbol:D}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function m(e,o,s,r){const n=i(e,{},r);n&&(o[s]=n);}function i(e,m,i){if(!e)return null;if(i&&"web-scene"===i.origin&&!(e instanceof SimpleLineSymbol.A)&&!(e instanceof SimpleLineSymbol.h$2)){const r=a(e,{retainCIM:!0});return request.r(r.symbol)?r.symbol.write(m,i):(i.messages&&i.messages.push(new request.s("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:i,error:r.error})),null)}return i&&"web-map"===i.origin&&"web-style"===e.type?(i.messages&&i.messages.push(new request.s("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:e,context:i})),null):e.write(m,i)}function l(o,s){return SimpleLineSymbol.k(o,null,s)}

exports.a = a;
exports.l = l;
exports.m = m;
