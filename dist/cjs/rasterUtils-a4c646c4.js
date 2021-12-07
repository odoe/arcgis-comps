'use strict';

require('./FramebufferObject-435e1736.js');
const Texture = require('./Texture-95d9d662.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(e,n,a="nearest",i=!1){var r;const o=!(i&&"u8"===n.pixelType),s=o?5126:5121,u=null==n.pixels||0===n.pixels.length?null:o?n.getAsRGBAFloat():n.getAsRGBA(),l=null==(r=e.capabilities.textureFloat)?void 0:r.textureFloatLinear,f={width:n.width,height:n.height,target:3553,pixelFormat:6408,internalFormat:"webgl2"===e.webglVersion&&o?34836:6408,samplingMode:!l||"bilinear"!==a&&"cubic"!==a?9728:9729,dataType:s,wrapMode:33071,flipped:!1};return new Texture.o(e,f,u)}function i(e,n){const a=4*n.size[0],i=n.size[1],r={width:a,height:i,target:3553,pixelFormat:6408,internalFormat:"webgl2"===e.webglVersion?34836:6408,dataType:5126,samplingMode:9728,wrapMode:33071,flipped:!1},o=new Float32Array(a*i*4);let s=0;for(let t=0;t<n.coefficients.length;t++)o[s++]=n.coefficients[t],t%3==2&&(o[s++]=1);return new Texture.o(e,r,o)}function r(e,n){const a={width:n.length/4,height:1,target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,flipped:!1};return new Texture.o(e,a,n)}function o(e,t,n,a=1,i=!0,r=!1){return {u_flipY:i,u_isFloatTexture:r,u_applyTransform:!!e,u_opacity:a,u_transformSpacing:e?e.spacing:null,u_transformGridSize:e?e.size:null,u_targetImageSize:t,u_srcImageSize:n}}function s(e,t){return {u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:null}}function u(e,t){return {u_scale:e,u_offset:t}}function l(e){return {u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function f(e){return {u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function m(e,t){const n=e.gl,a=t.glName,i=n.getProgramParameter(a,n.ACTIVE_UNIFORMS),r=new Map;let o;for(let s=0;s<i;s++)o=n.getActiveUniform(a,s),o&&r.set(o.name,{location:n.getUniformLocation(a,o.name),info:o});return r}function c(e,t,n){Object.keys(n).forEach((a=>{const i=t.get(a)||t.get(a+"[0]");i&&p(e,a,n[a],i);}));}function g(e,t,n,a){n.length===a.length&&(a.some((e=>null==e))||n.some((e=>null==e))||n.forEach(((n,i)=>{t.setUniform1i(n,i),e.bindTexture(a[i],i);})));}function p(e,t,n,a){if(null===a||null==n)return !1;const{info:i}=a;switch(i.type){case 5126:i.size>1?e.setUniform1fv(t,n):e.setUniform1f(t,n);break;case 35664:e.setUniform2fv(t,n);break;case 35665:e.setUniform3fv(t,n);break;case 35666:e.setUniform4fv(t,n);break;case 35675:e.setUniformMatrix3fv(t,n);break;case 35676:e.setUniformMatrix4fv(t,n);break;case 5124:i.size>1?e.setUniform1iv(t,n):e.setUniform1i(t,n);break;case 35670:e.setUniform1i(t,n?1:0);break;case 35667:case 35671:e.setUniform2iv(t,n);break;case 35668:case 35672:e.setUniform3iv(t,n);break;case 35669:case 35673:e.setUniform4iv(t,n);break;default:return !1}return !0}

exports.c = c;
exports.f = f;
exports.g = g;
exports.i = i;
exports.l = l;
exports.m = m;
exports.n = n;
exports.o = o;
exports.r = r;
exports.s = s;
exports.u = u;
