import { aR as x, am as h, aS as L, ap as m$1, aT as b, ax as y, aU as n, Y as S, ag as h$1, ay as c, aV as b$1, aW as A, aX as k } from './unitUtils-c707ba3c.js';
import { m as s, r } from './messageBundle-8a146a9b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function a(a,S$1=p){if(!a)return {symbol:null};const{retainId:c$1=p.retainId,ignoreDrivers:u=p.ignoreDrivers,hasLabelingContext:d=p.hasLabelingContext,retainCIM:j=p.retainCIM}=S$1;let D;if(x(a)||a instanceof h)D=a.clone();else if("cim"===a.type){var g,C;const o=null==(g=a.data)||null==(C=g.symbol)?void 0:C.type;if("CIMPointSymbol"!==o)return {error:new s("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${o||"unknown"}' is unsupported in 3D`,{symbol:a})};D=j?a.clone():L.fromCIMSymbol(a);}else if(a instanceof m$1)D=b.fromSimpleLineSymbol(a);else if(a instanceof y)D=L.fromSimpleMarkerSymbol(a);else if(a instanceof n)D=L.fromPictureMarkerSymbol(a);else if(a instanceof S)D=h$1.fromSimpleFillSymbol(a);else {if(!(a instanceof c))return {error:new s("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${a.type||a.declaredClass}' is unsupported in 3D`,{symbol:a})};D=d?b$1.fromTextSymbol(a):L.fromTextSymbol(a);}if(c$1&&"cim"!==D.type&&(D.id=a.id),u&&x(D))for(let o=0;o<D.symbolLayers.length;++o)D.symbolLayers.getItemAt(o)._ignoreDrivers=!0;return {symbol:D}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function m(e,o,s,r){const n=i(e,{},r);n&&(o[s]=n);}function i(e,m,i){if(!e)return null;if(i&&"web-scene"===i.origin&&!(e instanceof A)&&!(e instanceof h)){const r$1=a(e,{retainCIM:!0});return r(r$1.symbol)?r$1.symbol.write(m,i):(i.messages&&i.messages.push(new s("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:i,error:r$1.error})),null)}return i&&"web-map"===i.origin&&"web-style"===e.type?(i.messages&&i.messages.push(new s("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:e,context:i})),null):e.write(m,i)}function l(o,s){return k(o,null,s)}

export { l, m };
