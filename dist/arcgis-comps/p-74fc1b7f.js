import{aR as e,am as n,aS as s,ap as o,aT as t,ax as i,aU as r,Y as a,ag as l,ay as u,aV as f,aW as m,aX as p}from"./p-566b0715.js";import{m as b,r as c}from"./p-9ae46e68.js";const y={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function w(e,n,s,o){const t=d(e,{},o);t&&(n[s]=t)}function d(p,w,d){if(!p)return null;if(d&&"web-scene"===d.origin&&!(p instanceof m)&&!(p instanceof n)){const m=function(m,p=y){if(!m)return{symbol:null};const{retainId:c=y.retainId,ignoreDrivers:w=y.ignoreDrivers,hasLabelingContext:d=y.hasLabelingContext,retainCIM:g=y.retainCIM}=p;let C;if(e(m)||m instanceof n)C=m.clone();else if("cim"===m.type){var I,M;const e=null==(I=m.data)||null==(M=I.symbol)?void 0:M.type;if("CIMPointSymbol"!==e)return{error:new b("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${e||"unknown"}' is unsupported in 3D`,{symbol:m})};C=g?m.clone():s.fromCIMSymbol(m)}else if(m instanceof o)C=t.fromSimpleLineSymbol(m);else if(m instanceof i)C=s.fromSimpleMarkerSymbol(m);else if(m instanceof r)C=s.fromPictureMarkerSymbol(m);else if(m instanceof a)C=l.fromSimpleFillSymbol(m);else{if(!(m instanceof u))return{error:new b("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${m.type||m.declaredClass}' is unsupported in 3D`,{symbol:m})};C=d?f.fromTextSymbol(m):s.fromTextSymbol(m)}if(c&&"cim"!==C.type&&(C.id=m.id),w&&e(C))for(let e=0;e<C.symbolLayers.length;++e)C.symbolLayers.getItemAt(e)._ignoreDrivers=!0;return{symbol:C}}(p,{retainCIM:!0});return c(m.symbol)?m.symbol.write(w,d):(d.messages&&d.messages.push(new b("symbol:unsupported",`Symbols of type '${p.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:p,context:d,error:m.error})),null)}return d&&"web-map"===d.origin&&"web-style"===p.type?(d.messages&&d.messages.push(new b("symbol:unsupported",`Symbols of type '${p.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:p,context:d})),null):p.write(w,d)}function g(e,n){return p(e,null,n)}export{g as l,w as m}