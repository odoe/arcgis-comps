import{t as e,r as t}from"./p-9ae46e68.js";function r(t,r,s={}){if(!window.WebGLRenderingContext)return o(t,a),null;const i=n(t,r,s);return e(i)&&o(t,l),i}function n(e,t,r={}){const n=1===t?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];let o=null;for(const t of n){try{o=e.getContext(t,r)}catch(e){}if(o)break}return o}function o(e,t){const r=e.parentNode;r&&(r.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+t+"</div></div></td></tr></table>")}const a='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',l='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';let s;function i(){return s||(s=function(){const r={available:!1,version:0,majorPerformanceCaveat:!1,maxTextureSize:0,supportsHighPrecisionFragment:!1,supportsVertexShaderSamplers:!1,supportsElementIndexUint:!1,supportsStandardDerivatives:!1,supportsInstancedArrays:!1,supportsTextureFloat:!1,supportsColorBufferFloat:!1};if(void 0===typeof WebGLRenderingContext)return r;const o=document.createElement("canvas");if(!o)return r;let a=n(o,1,{failIfMajorPerformanceCaveat:!0});if(e(a)&&(a=n(o,1),t(a)&&(r.majorPerformanceCaveat=!0)),e(a))return r;const l=a.getParameter(a.VERSION);if(!l)return r;const s=l.match(/^WebGL\s+([\d.]*)/);if(s){const e=parseFloat(s[1]);r.available=e>=.94;const t=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT);t&&(r.supportsHighPrecisionFragment=t.precision>0),r.supportsVertexShaderSamplers=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0,r.supportsElementIndexUint=null!==a.getExtension("OES_element_index_uint"),r.supportsStandardDerivatives=null!==a.getExtension("OES_standard_derivatives"),r.supportsInstancedArrays=null!==a.getExtension("ANGLE_instanced_arrays"),r.supportsTextureFloat=null!==a.getExtension("OES_texture_float"),r.supportsColorBufferFloat=null!==a.getExtension("WEBGL_color_buffer_float")&&null!==a.getExtension("EXT_float_blend")}return r.maxTextureSize=a.getParameter(a.MAX_TEXTURE_SIZE),r.version=function(){if(void 0===typeof WebGL2RenderingContext)return!1;const e=document.createElement("canvas");if(!e)return!1;const r=n(e,2);return!!t(r)}()?2:1,r}()),s}export{i as o,r as t}