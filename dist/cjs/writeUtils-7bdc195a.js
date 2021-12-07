'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),l=new Set(["csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","map-image","map-notes","ogc-feature","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"]);function c(e){return "basemap"===e.layerContainerType?o:"operational-layers"===e.layerContainerType?l:null}function m(e){return !("feature"!==e.type||e.url||!e.source||"memory"!==e.source.type)}function p(e,t){if(t.restrictedWebMapWriting){const r=c(t);return !request.r(r)||r.has(e.type)&&!m(e)}return !0}function u(e,t){if(m(e)){const n=request.t$5("featureCollection.layers",t),i=n&&n[0]&&n[0].layerDefinition;i&&d(e,i);}else if("stream"===e.type){d(e,t.layerDefinition=t.layerDefinition||{});}else "group"!==e.type&&d(e,t);}function d(e,t){"maxScale"in e&&(t.maxScale=request.y$2(e.maxScale)),"minScale"in e&&(t.minScale=request.y$2(e.minScale));}function f(e,t){if(u(e,t),"blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=request.y$2(e.opacity),t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type)if(m(e)){const n=t.featureCollection;n&&(n.showLegend=e.legendEnabled);}else t.showLegend=e.legendEnabled;}function y(r,i,o){if(!("write"in r)||!r.write)return o&&o.messages&&o.messages.push(new request.s("layer:unsupported",`Layers (${r.title}, ${r.id}) of type '${r.declaredClass}' cannot be persisted`,{layer:r})),null;if(p(r,o)){const e={};return r.write(e,o)?e:null}return request.r(i)&&f(r,i=request.l$1(i)),i}

exports.y = y;
