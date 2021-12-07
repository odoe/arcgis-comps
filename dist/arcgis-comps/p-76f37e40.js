import{s as e,A as t}from"./p-e58503d5.js";import{v as n}from"./p-afac6fb2.js";import{d as a}from"./p-da33e926.js";function s(t,a){if(!t)return null;if(!c(t))return new e("webscene:unsupported-height-model-info","The vertical coordinate system of the scene is not supported",{heightModelInfo:t});const s=t.heightUnit,i=n.deriveUnitFromSR(t,a).heightUnit;return s!==i?new e("webscene:incompatible-height-unit",`The vertical units of the scene (${s}) must match the horizontal units of the scene (${i})`,{verticalUnit:s,horizontalUnit:i}):null}function i(t,a,s){const i=o(t),c=a,l=r(i,c,s);{let a=null;if(i){const r=n.deriveUnitFromSR(i,t.spatialReference).heightUnit;s||r===i.heightUnit||(a=new e("layerview:unmatched-height-unit",`The vertical units of the layer must match the horizontal units (${r})`,{horizontalUnit:r}))}if(!("heightModelInfo"in(u=t)&&null!=u.heightModelInfo||null!=u.spatialReference)&&h(u)||4===l||a)return new e("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:i,error:a})}var u;{let t=null;switch(l){case 1:{const n=i.heightUnit||"unknown",a=c.heightUnit||"unknown";t=new e("layerview:incompatible-height-unit",`The vertical units of the layer (${n}) must match the vertical units of the scene (${a})`,{layerUnit:n,sceneUnit:a});break}case 2:{const n=i.heightModel||"unknown",a=c.heightModel||"unknown";t=new e("layerview:incompatible-height-model",`The height model of the layer (${n}) must match the height model of the scene (${a})`,{layerHeightModel:n,sceneHeightModel:a});break}case 3:{const n=i.vertCRS||"unknown",a=c.vertCRS||"unknown";t=new e("layerview:incompatible-vertical-datum",`The vertical datum of the layer (${n}) must match the vertical datum of the scene (${a})`,{layerDatum:n,sceneDatum:a});break}}if(t)return new e("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:i,sceneHeightModelInfo:c,error:t})}return null}function r(e,t,n){if(!c(e)||!c(t))return 4;if(null==e||null==t)return 0;if(!n&&e.heightUnit!==t.heightUnit)return 1;if(e.heightModel!==t.heightModel)return 2;switch(e.heightModel){case"gravity-related-height":return 0;case"ellipsoidal":return e.vertCRS===t.vertCRS?0:3;default:return 4}}function c(e){return null==e||null!=e.heightModel&&null!=e.heightUnit}function o(e){const s=e.url&&a(e.url);return null==(e.spatialReference&&e.spatialReference.vcsWkid)&&t(s)&&"ImageServer"===s.serverType||!l(e)||!e.heightModelInfo?h(e)?n.deriveUnitFromSR(d,e.spatialReference):null:e.heightModelInfo}function l(e){return"heightModelInfo"in e}function u(e){if("unknown"===e.type||!("capabilities"in e))return!1;switch(e.type){case"csv":case"feature":case"geojson":case"subtype-group":case"ogc-feature":case"wfs":return!0;default:return!1}}function h(e){return u(e)?!!(e.capabilities&&e.capabilities.data&&e.capabilities.data.supportsZ):m(e)}function f(e){return null!=e.layers||m(e)||u(e)||l(e)}function m(e){switch(e.type){case"building-scene":case"elevation":case"integrated-mesh":case"point-cloud":case"scene":case"voxel":return!0;case"analysis":case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"csv":case"geojson":case"feature":case"subtype-group":case"geo-rss":case"graphics":case"group":case"imagery":case"imagery-tile":case"kml":case"map-image":case"map-notes":case"ogc-feature":case"open-street-map":case"route":case"stream":case"tile":case"unknown":case"unsupported":case"vector-tile":case"wcs":case"web-tile":case"wfs":case"wms":case"wmts":case null:return!1}return!1}const d=new n({heightModel:"gravity-related-height"});export{i as a,f as g,o as l,s as r}