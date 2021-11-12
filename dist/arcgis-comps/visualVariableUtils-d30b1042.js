import { Z as h$1, h as h$2 } from './Graphic-75d1efd2.js';
import { n as n$1 } from './compilerUtils-fd4d1928.js';
import { f as s, A as r, g as t } from './jsxFactory-b8b7429b.js';
import { m as m$1 } from './lengthUtils-c1fc84e6.js';
import { e, n } from './sizeVariableUtils-4d3662df.js';
import './JSONSupport-15eefdaf.js';
import './index-921bd636.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=s.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),u=new h$1,f=Math.PI,p=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function d(a,r$1,i){const t="visualVariables"in a&&a.visualVariables?a.visualVariables.filter((e=>"color"===e.type))[0]:a;if(!t)return;if("esri.renderers.visualVariables.ColorVariable"!==t.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const s="number"==typeof r$1,o=s?null:r$1,l=o&&o.attributes;let u=s?r$1:null;const f=t.field,{ipData:p,hasExpression:d}=t.cache;let v=t.cache.compiledFunc;if(!f&&!d){const e=t.stops;return e&&e[0]&&e[0].color}if("number"!=typeof u)if(d){if(!r(i)||!r(i.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,r$1=a.getViewInfo(e),s=a.createExecContext(o,r$1);if(!v){const e=a.createSyntaxTree(t.valueExpression);v=a.createFunction(e),t.cache.compiledFunc=v;}u=a.executeFunction(v,s);}else l&&(u=l[f]);const b=t.normalizationField,h=l?parseFloat(l[b]):void 0;if(null!=u&&(!b||s||!isNaN(h)&&0!==h)){isNaN(h)||s||(u/=h);const a=C(u,p);if(a){const r$1=a[0],s=a[1],o=r$1===s?t.stops[r$1].color:h$2.blendColors(t.stops[r$1].color,t.stops[s].color,a[2],r(i)?i.color:void 0);return new h$2(o)}}}function v(e,a,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"opacity"===e.type))[0]:e;if(!i)return;if("esri.renderers.visualVariables.OpacityVariable"!==i.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const n="number"==typeof a,s=n?null:a,o=s&&s.attributes;let l=n?a:null;const u=i.field,{ipData:f,hasExpression:p}=i.cache;let d=i.cache.compiledFunc;if(!u&&!p){const e=i.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(p){if(t(r)||t(r.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},a=r.arcade.arcadeUtils,n=a.getViewInfo(e),o=a.createExecContext(s,n);if(!d){const e=a.createSyntaxTree(i.valueExpression);d=a.createFunction(e),i.cache.compiledFunc=d;}l=a.executeFunction(d,o);}else o&&(l=o[u]);const v=i.normalizationField,b=o?parseFloat(o[v]):void 0;if(null!=l&&(!v||n||!isNaN(b)&&0!==b)){isNaN(b)||n||(l/=b);const e=C(l,f);if(e){const a=e[0],r=e[1];if(a===r)return i.stops[a].opacity;{const n=i.stops[a].opacity;return n+(i.stops[r].opacity-n)*e[2]}}}}function b(e,a,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"rotation"===e.type))[0]:e;if(!i)return;if("esri.renderers.visualVariables.RotationVariable"!==i.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const n=i.axis||"heading",s="heading"===n&&"arithmetic"===i.rotationType?90:0,o="heading"===n&&"arithmetic"===i.rotationType?-1:1,l="number"==typeof a?null:a,u=l&&l.attributes,f=i.field,{hasExpression:p}=i.cache;let d=i.cache.compiledFunc,v=0;if(!f&&!p)return v;if(p){if(t(r)||t(r.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},a=r.arcade.arcadeUtils,n=a.getViewInfo(e),s=a.createExecContext(l,n);if(!d){const e=a.createSyntaxTree(i.valueExpression);d=a.createFunction(e),i.cache.compiledFunc=d;}v=a.executeFunction(d,s);}else u&&(v=u[f]||0);return v="number"!=typeof v||isNaN(v)?null:s+o*v,v}function h(e$1,a,r$1){const i="number"==typeof a,s=i?null:a,o=s&&s.attributes;let u=i?a:null;const{isScaleDriven:f}=e$1.cache;let p=e$1.cache.compiledFunc;if(f){const a=r(r$1)?r$1.scale:void 0,i=r(r$1)?r$1.view:void 0;u=null==a||"3d"===i?m(e$1):a;}else if(!i)switch(e$1.inputValueType){case"expression":{if(t(r$1)||t(r$1.arcade))return void c.error("Use of arcade expressions requires an arcade context");const a={viewingMode:r$1.viewingMode,scale:r$1.scale,spatialReference:r$1.spatialReference},i=r$1.arcade.arcadeUtils,n=i.getViewInfo(a),o=i.createExecContext(s,n);if(!p){const a=i.createSyntaxTree(e$1.valueExpression);p=i.createFunction(a),e$1.cache.compiledFunc=p;}u=i.executeFunction(p,o);break}case"field":o&&(u=o[e$1.field]);break;case"unknown":u=null;}if(!e(u))return null;if(i||!e$1.normalizationField)return u;const d=o?parseFloat(o[e$1.normalizationField]):null;return e(d)&&0!==d?u/d:null}function m(e){let a=null,r=null;const i=e.stops;return i?(a=i[0].value,r=i[i.length-1].value):(a=e.minDataValue||0,r=e.maxDataValue||0),(a+r)/2}function V(e,a,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"size"===e.type))[0]:e;if(!i)return;if("esri.renderers.visualVariables.SizeVariable"!==i.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const n=M(h(i,a,r),i,a,r,i.cache.ipData);return null==n||isNaN(n)?0:n}function x(e$1,a,r){return null==e$1?null:n(e$1)?V(e$1,a,r):e(e$1)?e$1:null}function y(e$1,a,r){return e(r)&&e$1>r?r:e(a)&&e$1<a?a:e$1}function w(e,a,r,i){return e+(x(a.minSize,r,i)||a.minDataValue)}function g(e,a,r){const i=e.stops;let n=i&&i.length&&i[0].size;return null==n&&(n=e.minSize),x(n,a,r)}function z(e,a,r$1,i){const t=(e-a.minDataValue)/(a.maxDataValue-a.minDataValue),s=x(a.minSize,r$1,i),o=x(a.maxSize,r$1,i),l=r(i)?i.shape:void 0;if(e<=a.minDataValue)return s;if(e>=a.maxDataValue)return o;if("area"===a.scaleBy&&l){const e="circle"===l,a=e?f*(s/2)**2:s*s,r=a+t*((e?f*(o/2)**2:o*o)-a);return e?2*Math.sqrt(r/f):Math.sqrt(r)}return s+t*(o-s)}function F(e,a,r$1,i){const t=r(i)?i.shape:void 0,s=e/a.minDataValue,o=x(a.minSize,r$1,i),l=x(a.maxSize,r$1,i);let c=null;return c="circle"===t?2*Math.sqrt(s*(o/2)**2):"square"===t||"diamond"===t||"image"===t?Math.sqrt(s*o**2):s*o,y(c,o,l)}function S(e,a,r,i,n){const[t,s,o]=C(e,n);if(t===s)return x(a.stops[t].size,r,i);{const e=x(a.stops[t].size,r,i);return e+(x(a.stops[s].size,r,i)-e)*o}}function E(e,a,r$1,i){const t=(r(i)&&i.resolution?i.resolution:1)*m$1[a.valueUnit],o=x(a.minSize,r$1,i),l=x(a.maxSize,r$1,i),{valueRepresentation:c}=a;let u=null;return u="area"===c?2*Math.sqrt(e/f)/t:"radius"===c||"distance"===c?2*e/t:e/t,y(u,o,l)}function D(e){return e}function M(e,a,r,i,n){switch(a.transformationType){case"additive":return w(e,a,r,i);case"constant":return g(a,r,i);case"clamped-linear":return z(e,a,r,i);case"proportional":return F(e,a,r,i);case"stops":return S(e,a,r,i,n);case"real-world-size":return E(e,a,r,i);case"identity":return D(e);case"unknown":return null}}function U(e,a,r){const{isScaleDriven:i}=e.cache;if(!(i&&"3d"===r||a))return null;const n={scale:a,view:r};let t=x(e.minSize,u,n),s=x(e.maxSize,u,n);if(null!=t||null!=s){if(t>s){const e=s;s=t,t=e;}return {minSize:t,maxSize:s}}}function k(e,a,r){if(!e.visualVariables)return;const i=[],n=[],t=[],s=[],o=[];for(const l of e.visualVariables)switch(l.type){case"color":n.push(l);break;case"opacity":t.push(l);break;case"rotation":o.push(l);break;case"size":s.push(l);}return n.forEach((e=>{const n=d(e,a,r);i.push({variable:e,value:n});})),t.forEach((e=>{const n=v(e,a,r);i.push({variable:e,value:n});})),o.forEach((e=>{const n=b(e,a,r);i.push({variable:e,value:n});})),s.forEach((e=>{const n=V(e,a,r);i.push({variable:e,value:n});})),i.filter((e=>null!=e.value))}function C(e,a){if(!a)return;let r=0,i=a.length-1;return a.some(((a,n)=>e<a?(i=n,!0):(r=n,!1))),[r,i,(e-a[r])/(a[i]-a[r])]}function N(e,a,i){const n=["proportional","proportional","proportional"];for(const t of e){const e=t.useSymbolValue?"symbol-value":V(t,a,i);switch(t.axis){case"width":n[0]=e;break;case"depth":n[1]=e;break;case"height":n[2]=e;break;case"width-and-depth":n[0]=e,n[1]=e;break;case"all":case void 0:case null:n[0]=e,n[1]=e,n[2]=e;break;default:n$1(t.axis);}}return n}

export { N as getAllSizes, d as getColor, v as getOpacity, b as getRotationAngle, V as getSize, M as getSizeForValue, x as getSizeFromNumberOrVariable, U as getSizeRangeAtScale, k as getVisualVariableValues, p as viewScaleRE };
