import { bX as v$2, aL as u$4, aY as a$2, T as u$5, bL as e$2, L as s$2, bM as o$5, e as e$3, d as d$3, bY as r$2, i as i$1, bZ as b$2, b_ as n$4, l as l$3, a as s$3, t as t$2, b$ as l$4, s as s$4, o as o$6, r as r$3, c0 as p$4, bN as c$4, c1 as l$5 } from './index.js';
import { A as A$1, E as E$2, V as V$1 } from './Utils.js';
import { L as L$1, M as M$2 } from './MaterialKey.js';
import { o as o$4 } from './visualVariablesUtils2.js';
import { n as n$2, A as A$2, d as r$1, e as n$3, E as E$1, t as t$1 } from './CIMSymbolHelper.js';
import { b as b$1, s as s$1, k as k$1 } from './definitions.js';
import { l as l$2 } from './cimSymbolUtils.js';
import { x as x$3 } from './MD5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$1(e){if(!e)return A$1.NONE;let r=0;for(const i of e)if("size"===i.type){const t=o$4(i);r|=t,"outline"===i.target&&(r|=t<<4);}else "color"===i.type?r|=A$1.COLOR:"opacity"===i.type?r|=A$1.OPACITY:"rotation"===i.type&&(r|=A$1.ROTATION);return r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c$3=512,u$3=50;function g$1(e,t){if(!t.isWrappable)return null;const[n,i]=a$2(t);return e[2]>i?[u$4([e[0],e[1],i,e[3]]),u$4([n,e[1],n+e[2]-i,e[3]])]:e[0]<n?[u$4([n,e[1],e[2],e[3]]),u$4([i-(n-e[0]),e[1],i,e[3]])]:null}function p$3(e){return "text"===e||"esriTS"===e}function h$1(e){return "simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function y$2(e){switch(e$2(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function x$2(t,i,r){var o,c,u;if(!r||0===r.glyphMosaicItems.length)return t;const g=n$2(i.text)[1],p=r.glyphMosaicItems,h=A$2(p,g,{scale:u$5(i.font.size)/b$1,angle:null!=(o=i.angle)?o:0,xOffset:null!=(c=i.xoffset)?c:0,yOffset:null!=(u=i.yoffset)?u:0,hAlign:r$1(i.horizontalAlignment||"center"),vAlign:n$3(i.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(i.lineWidth||512,512)),lineHeight:s$1*Math.max(.25,Math.min(i.lineHeight||1,4)),decoration:i.font.decoration||"none",isCIM:!1}).bounds;return t[0]=u$5(h.x-h.halfWidth),t[1]=u$5(h.y-h.halfHeight),t[2]=u$5(h.width),t[3]=u$5(h.height),t}function d$2(e){if(!e)return null;const{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:s}=e;return new v$2({rings:[[[t,n],[t,o],[r,o],[r,n],[t,n]]],spatialReference:s})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$1={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1},o$3=.707;function m$1(t){if(!("visualVariables"in t))return 0;if(!t.hasVisualVariables("size"))return 0;const e=t.getVisualVariablesForType("size");if(!e[0])return 0;const r=e[0];if("outline"===r.target)return 0;if("stops"===r.transformationType)return r.stops.map((t=>t.size)).reduce(g,0);if("clamped-linear"===r.transformationType){let t=-1/0,e=-1/0;return t="number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map((t=>t.size)).reduce(g,0),e="number"==typeof r.minSize?r.minSize:r.minSize.stops.map((t=>t.size)).reduce(g,0),Math.max(t,e)}return "real-world-size"===r.transformationType?30:void 0}function u$2(t){return t.type in a$1}async function c$2(e,r,i,n,s,a){if(!e||a&&"cluster"===a.type)return 0;if("heatmap"===e.type)return Math.round(3*e.blurRadius);if("dot-density"===e.type)return 0;if("dictionary"===e.type)return "esriGeometryPoint"===r||"esriGeometryMultipoint"===r?100:200;const o=e.getSymbols(),u=m$1(e),c=[];for(const t of o)c.push(x$1(t,u,i,r,n,s));const p=await Promise.all(c);return u$5(p.reduce(g,0))}const p$2=[0,0,0,0];function l$1(t,e){return null==t?e:t}function f$1(t,e){return null==t.outline?e:l$1(t.outline.width,e)}const h={sdf:!0,code:99,metrics:k$1.metrics,rect:new t$1(0,0,24,24),page:0,textureBinding:2};function y$1(t){const e=t.text&&t.text.length;if(!e)return {glyphMosaicItems:[h]};const r=[];for(let i=0;i<e;i++)r.push({...h,code:t.text.charCodeAt(i)});return {glyphMosaicItems:r}}async function d$1(t,r,i,a,m,u){if("simple-marker"===t.type){const e=Math.max(l$1(t.size,12),r);return M$1(t)+e*o$3}if("picture-marker"===t.type){const e=Math.max(l$1(t.height,12),r),i=l$1(t.width,12)*(e/l$1(t.height,12))/2,n=e/2;return M$1(t)+Math.sqrt(i*i+n*n)}if("text"===t.type){const e=y$1(t);x$2(p$2,t.toJSON(),e);const r=Math.abs(p$2[0]),i=Math.abs(p$2[1]),s=p$2[2],a=p$2[3];return Math.max(r,i)+Math.max(s,a)}if("simple-line"===t.type){const e=t,i=Math.max(l$1(e.width,.75),r)/2;return e.marker?Math.max(6*e.width,2*r):i}if("simple-fill"===t.type||"picture-fill"===t.type)return Math.max(f$1(t,0),r)/2;if("cim"===t.type){const n={geometryType:a,fields:m,spatialReference:u},o={type:"cim",rendererKey:0,data:t.data,maxVVSize:r};await l$2(o,n,i);const c=E$1.getEnvelope(t.data,i);return c?Math.sqrt(c.width*c.width+c.height*c.height):0}return "web-style"===t.type?d$1(await t.fetchCIMSymbol(),r,i,a,m,u):0}async function x$1(t,e,r,i,n,s){return u$2(t)?Math.min(await d$1(t,e,r,i,n,s),75):0}function M$1(t){const e=l$1(t.xoffset,0),r=l$1(t.yoffset,0);return Math.sqrt(e*e+r*r)}function g(t,e){return Math.max(t,e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$2=8,t=o$2-2,r=s$2.getLogger("esri.renderers.visualVariables.support.utils"),s=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const l=e.clone(),o=l.visualVariables.map((e=>n$1(e)?i(e):e));return l.visualVariables=o,l};function a(e){return e.map((e=>n$1(e)?i(e.clone()):e))}function n$1(e){return ("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function i(e){return e.stops=b(e.type,e.stops),e}function u$1(e,l,o){return (1-o)*e+o*l}function c$1(e,o){const[r,...s]=o,a=s.pop(),n=s[0].value,i=s[s.length-1].value,c=(i-n)/t,p=[];for(let t=n;t<i;t+=c){let r=0;for(;t>=s[r].value;)r++;const a=s[r],n=o[r-1],i=t-n.value,c=a.value===n.value?1:i/(a.value-n.value);if("color"===e){const e=s[r],l=o[r-1],a=e.color.clone();a.r=u$1(l.color.r,a.r,c),a.g=u$1(l.color.g,a.g,c),a.b=u$1(l.color.b,a.b,c),a.a=u$1(l.color.a,a.a,c),p.push({value:t,color:a,label:e.label});}else if("size"===e){const e=s[r],a=o[r-1],n=o$5(e.size),i=u$1(o$5(a.size),n,c);p.push({value:t,size:i,label:e.label});}else {const e=s[r],l=u$1(o[r-1].opacity,e.opacity,c);p.push({value:t,opacity:l,label:e.label});}}return [r,...p,a]}function p$1(e){const[l,...o]=e,r=o.pop();for(;o.length>t;){let e=0,l=0;for(let t=1;t<o.length;t++){const r=o[t-1],s=o[t],a=Math.abs(s.value-r.value);a>l&&(l=a,e=t);}o.splice(e,1);}return [l,...o,r]}function b(e,l){return l.length<=o$2?l:(r.warn(`Found ${l.length} Visual Variable stops, but MapView only supports ${o$2}. Displayed stops will be simplified.`),l.length>2*o$2?c$1(e,l):p$1(l))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let n=l=class extends b$2{writeLevels(e,s,i){for(const t in e){const e=this.levels[t];return void(s.stops=e)}}clone(){return new l({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:n$4(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:n$4(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:l$3(this.levels)})}};e$3([d$3()],n.prototype,"levels",void 0),e$3([r$2("levels")],n.prototype,"writeLevels",null),n=l=e$3([i$1("esri.views.2d.engine.LevelDependentSizeVariable")],n);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$1=s$2.getLogger("esri.views.2d.layers.support.clusterUtils");s$3.add("esri-cluster-arcade-enabled",!0);const u=s$3("esri-cluster-arcade-enabled"),c=(e,i,t,s)=>{const a=i.clone();if(!m(a))return a;if(t.fields)for(const r of t.fields)x(e,r);if("visualVariables"in a){const i=(a.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),n=d(i);i.forEach((i=>{"rotation"===i.type?i.field?i.field=y(e,i.field,"avg_angle"):i.valueExpression&&(i.field=S$1(e,i.valueExpression,"avg_angle"),i.valueExpression=null):i.normalizationField?(i.field=y(e,i.field,"norm",i.normalizationField),i.normalizationField=null):i.field?i.field=y(e,i.field,"avg"):(i.field=S$1(e,i.valueExpression,"avg"),i.valueExpression=null);})),t$2(n)&&!p(i)&&(i.push(f(t,s)),a.dynamicClusterSize=!0),a.visualVariables=i;}switch(a.type){case"simple":break;case"unique-value":a.field?a.field=y(e,a.field,"mode"):a.valueExpression&&(a.field=S$1(e,a.valueExpression,"mode"),a.valueExpression=null);break;case"class-breaks":a.normalizationField?(a.field=y(e,a.field,"norm",a.normalizationField),a.normalizationField=null):a.field?a.field=y(e,a.field,"avg"):(a.field=S$1(e,a.valueExpression,"avg"),a.valueExpression=null);}return a},d=e=>{for(const i of e)if("size"===i.type)return i;return null},p=e=>{for(const i of e)if("cluster_count"===i.field)return !0;return !1},f=(e,i)=>{const t=[new l$4({value:0,size:0}),new l$4({value:1})];if(t$2(i))return new b$2({field:"cluster_count",stops:[...t,new l$4({value:2,size:0})]});const s=Object.keys(i).reduce(((r,s)=>({...r,[s]:[...t,new l$4({value:Math.max(2,i[s].minValue),size:e.clusterMinSize}),new l$4({value:Math.max(3,i[s].maxValue),size:e.clusterMaxSize})]})),{});return new n({field:"cluster_count",levels:s})},m=i=>{const t=t=>o$1.error(new s$4("Unsupported-renderer",t,{renderer:i}));if("unique-value"===i.type){if(i.field2||i.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===i.type){if(i.normalizationField){const e=i.normalizationType;if("field"!==e)return t(`FeatureReductionCluster does not support a normalizationType of ${e}`),!1}}else if("simple"!==i.type)return t(`FeatureReductionCluster does not support renderers of type ${i.type}`),!1;if(!u){if("valueExpression"in i&&i.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in i&&i.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return !0};function v$1(e,i,t){switch(e){case"avg":case"avg_angle":return `cluster_avg_${i}`;case"mode":return `cluster_type_${i}`;case"norm":{const e=t,r="field",a=i.toLowerCase()+",norm:"+r+","+e.toLowerCase();return "cluster_avg_"+x$3(a)}}}function x(i,t){const{name:r,outStatistic:a}=t,{onStatisticField:n,onStatisticValueExpression:l,statisticType:u}=a;if(l){const e=x$3(l.toLowerCase());i.push({name:r,outStatistic:{onStatisticField:e,onStatisticValueExpression:l,statisticType:u}});}else n?i.push({name:r,outStatistic:{onStatisticField:n,statisticType:u}}):o$1.error(new s$4("mapview-unsupported-field","Unable to handle field",{field:t}));}function S$1(e,i,t){const r=x$3(i),a="mode"===t?`cluster_type_${r}`:`cluster_avg_${r}`;return e.some((e=>e.name===a))||e.push({name:a,outStatistic:{onStatisticField:r,onStatisticValueExpression:i,statisticType:t}}),a}function y(e,i,t,r){if("cluster_count"===i||e.some((e=>e.name===i)))return i;const s=v$1(t,i,r);return e.some((e=>e.name===s))||("norm"===t?e.push({name:s,outStatistic:{onStatisticField:i,onStatisticNormalizationField:r,statisticType:t}}):e.push({name:s,outStatistic:{onStatisticField:i,statisticType:t}})),s}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new o$6({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function e(t){return o.toJSON(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v=s$2.getLogger("esri.views.2d.layers.features.schemaUtils"),w="ValidationError",F={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function S(e){return L$1(e)}function V(e){return e}function E(e){if("line-marker"===e.type){var t;return {type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}}return l$5(e.toJSON()).toJSON()}function I(e){let t=0,r=0,i=!1,n=!1;if(r$3(e)&&(r=m$1(e),"visualVariables"in e&&(t=e$1(e.visualVariables||[]),i="dot-density"===e.type),!i)){const t=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol);for(const e of t)if(("simple-fill"===e.type||"picture-fill"===e.type)&&e.outline&&"none"!==e.outline.style){if("solid"!==e.outline.style){n=!1;break}n=!0;}}return {vvFlags:t,maxVVSize:r,isDD:i,isOutlinedFill:n}}function z(e,t,r){return j(e,I(t),r)}function j(e,t,r){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return R(e,t.vvFlags,r,{isDD:t.isDD,isOutlinedFill:t.isOutlinedFill});case"simple-marker":case"picture-marker":return N(e,t.vvFlags,t.maxVVSize,r);case"simple-line":return T(e,t.vvFlags,r);case"text":return O(e,t.vvFlags,t.maxVVSize,r);case"label":return D(e,t.vvFlags,r);case"cim":return {type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return {type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return {...E(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function R(e,t,r,i){const n=M$2(E$2.FILL,t,i),l=r?S(n):n,s=e.clone(),a=s.outline;i.isOutlinedFill||(s.outline=null);const o={materialKey:l,hash:s.hash(),isOutlinedFill:!!i.isOutlinedFill,...E(s)};if(i.isOutlinedFill)return o;const u=[];if(u.push(o),a){const e=M$2(E$2.LINE,t,{isOutline:!0}),i={materialKey:r?S(e):e,hash:a.hash(),...E(a)};u.push(i);}return {type:"composite-symbol",layers:u,hash:u.reduce(((e,t)=>t.hash+e),"")}}function T(e,t,r){const i=M$2(E$2.LINE,t),n=r?S(i):i,l=e.clone(),s=l.marker;l.marker=null;const a=[];if(a.push({materialKey:n,hash:l.hash(),...E(l)}),s){var o;const e=M$2(E$2.MARKER,t),i=r?S(e):e;s.color=null!=(o=s.color)?o:l.color,a.push({materialKey:i,hash:s.hash(),lineWidth:l.width,...E(s)});}return {type:"composite-symbol",layers:a,hash:a.reduce(((e,t)=>t.hash+e),"")}}function N(e,t,r,i){const n=M$2(E$2.MARKER,t),l=i?S(n):n,s=E(e);return {materialKey:l,hash:e.hash(),...s,angle:e.angle,maxVVSize:r}}function O(e,t,r,i){const n=M$2(E$2.TEXT,t),l=i?S(n):n,s=E(e);return {materialKey:l,hash:e.hash(),...s,angle:e.angle,maxVVSize:r}}function k(e,r){const i=e.labelPlacement,n=F[r];if(!e.symbol)return v.warn("No ILabelClass symbol specified."),!0;if(!n)return v.error(new s$4("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${r} is not supported`)),!0;if(!n.some((e=>e===i))){const t=n[0];i&&v.warn(`Found invalid label placement type ${i} for ${r}. Defaulting to ${t}`),e.labelPlacement=t;}return !1}function K(e,t){const r=l$3(e);return r.some((e=>k(e,t)))?[]:r}function D(e,t,r){const i=e.toJSON(),n=M$2(E$2.LABEL,t,{placement:i.labelPlacement});return {materialKey:r?S(n):n,hash:e.hash(),...i,labelPlacement:i.labelPlacement}}function M(e){return s$3("esri-2d-update-debug")&&console.debug("Created new schema",B(e,!0)),B(e)}function B(e,t=!1){try{var r,i;const n=A(e,t),l={};n.map((t=>L(l,e,t)));return {source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(r=e.historicMoment)?void 0:r.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(i=e.timeExtent)?void 0:i.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:n,targets:l}}catch(n){if(n.fieldName===w)return v.error(n),null;throw n}}function L(e,r,i){switch(i.target){case"feature":return void C(e,J(r),i);case"aggregate":{if(!("featureReduction"in r))return;const n=r.featureReduction;if("selection"===n.type)throw new s$4(w,"Mapview does not support `selection` reduction type",n);return C(e,J(r),i),void U(e,n,i)}}}function P(e,t){for(const r in t){const i=t[r];if(i.target!==e.name)continue;const n=e.attributes[r];n?(n.context.mesh=n.context.mesh||i.context.mesh,n.context.storage=n.context.storage||i.context.storage):e.attributes[r]=i;}return e}function J(e){var t,r,i,n,l;return [null!=(t=null==(r=e$2(e.filter))?void 0:r.toJSON())?t:null,null!=(i=null==(n=e$2(null==(l=e$2(e.featureEffect))?void 0:l.filter))?void 0:n.toJSON())?i:null]}function C(e,t,r){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),P(e.feature,r.attributes.fields),e}function U(e,t,r){return e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:u$5(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(u$5(t.clusterMaxSize)/64),fields:r.aggregateFields}}),P(e.aggregate,r.attributes.fields),e}function $(e,t){return t.field?q(e,{...t,type:"field",field:t.field}):t.valueExpression?q(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function q(e,t){switch(t.type){case"expression":{const r=V(t.valueExpression);if(!e.fields[r]){const i=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:i};}return {fieldIndex:e.fields[r].fieldIndex}}case"label-expression":{const r=V(JSON.stringify(t.label));if(!e.fields[r]){const i=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:i};}return {fieldIndex:e.fields[r].fieldIndex}}case"field":{const r=t.field;return "aggregate"===t.target&&e.fields[r]||(e.fields[r]={...t,name:r}),{field:r}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function A(e,t=!1){const r=new Array;let i=0;return r.push(H(e,i++,t)),r}function G(e,t,r,i,n,l=!1){const s=q(t,{type:"label-expression",target:i,context:{mesh:!0},resultType:"string",label:{labelExpression:r.labelExpression,labelExpressionInfo:r.labelExpressionInfo?{expression:r.labelExpressionInfo.expression}:null,symbol:!!r.symbol,where:r.where}}),{fieldIndex:a}=s;return {...z(r,e,l),fieldIndex:a,target:i,index:n}}function H(r,i,n=!1){const s={indexCount:0,fields:{}},a="featureReduction"in r&&r.featureReduction,o=a?"aggregate":"feature";if("sublayers"in r){const e={type:"subtype",subtypeField:r.subtypeField,renderers:{}},i={type:"subtype",mapping:{},target:"feature"},a={type:"subtype",classes:{}},u={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:i,mesh:{matcher:e,aggregateMatcher:null,labels:a,sortKey:null}},d=new Set;let f=0;for(const{renderer:c,subtypeCode:p,labelingInfo:m,labelsVisible:y}of r.sublayers){const r=_(s,o,c,n),u=Q(s,o,c),g=y&&m;if("visualVariables"in c&&c.visualVariables&&c.visualVariables.length)throw new s$4(w,"Visual variables are currently not supported for subtype layers");if("dictionary"===r.type)throw new s$4(w,"Dictionary renderer is not supported in subtype layers");if("subtype"===r.type)throw new s$4(w,"Nested subtype renderers is not supported");if(r$3(u)&&"subtype"===u.type)throw new s$4(w,"Nested subtype storage is not supported");if(r$3(u)&&"dot-density"===u.type)throw new s$4(w,"Dot density attributes are not supported in subtype layers");if(d.has(p))throw new s$4(w,"Subtype codes for sublayers must be unique");d.add(p),e.renderers[p]=r,i.mapping[p]=u,g&&(a.classes[p]=g.map((e=>G(c,s,e,"feature",f++,n))));}return u}if("heatmap"===r.renderer.type){const{blurRadius:e,fieldOffset:t,field:i}=r.renderer;return {type:"heatmap",aggregateFields:[],attributes:s,target:o,storage:null,mesh:{blurRadius:e,fieldOffset:t,field:$(s,{target:o,field:i,resultType:"numeric"}).field}}}{const i=[],l="aggregate"===o?c(i,r.renderer,a,null):r.renderer;X(s,i);const u=_(s,o,l,n);let d=null;const f=Q(s,o,l),c$1=e(r.geometryType);let p=r.labelsVisible&&r.labelingInfo||[],m=[];if(a){if("selection"===a.type)throw new s$4(w,"Mapview does not support `selection` reduction type",a);if(a.symbol){const t=new p$4({symbol:a.symbol,visualVariables:"visualVariables"in l?l.visualVariables:null});d=_(s,o,t,n);}m=a&&a.labelsVisible&&a.labelingInfo||[];}p=K(p,c$1),m=K(m,c$1);let y=0;const g=[...p.map((e=>G(l,s,e,"feature",y++,n))),...m.map((e=>G(l,s,e,"aggregate",y++,n)))],b=W(s,r.orderBy);return {type:"symbol",target:o,attributes:s,aggregateFields:i,storage:f,mesh:{matcher:u,labels:{type:"simple",classes:g},aggregateMatcher:d,sortKey:b}}}}function W(e,r){if(t$2(r)||!r.length)return null;r.length>1&&v.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${r.length}. All but the first will be discarded`);const i=r[0],n="ascending"===i.order?"asc":"desc";if(i.field)return {field:i.field,order:n};if(i.valueExpression){return {fieldIndex:q(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:n}}return v.error(new s$4(w,"Expected to find a field or valueExpression for OrderByInfo",i)),null}function X(e,t){const r={mesh:!0,storage:!0};for(const i of t){const{name:t,outStatistic:n}=i,{statisticType:l,onStatisticField:s}=n;let a=null,o=null,u=null;const d="numeric",f="feature";if("onStatisticValueExpression"in n){o=q(e,{type:"expression",target:f,valueExpression:n.onStatisticValueExpression,resultType:d}).fieldIndex;}else if("onStatisticNormalizationField"in n){a=q(e,{type:"field",target:f,field:s,resultType:d}).field,u=n.onStatisticNormalizationField;}else {a=q(e,{type:"field",target:f,field:s,resultType:d}).field;}q(e,{type:"statistic",target:"aggregate",name:t,context:r,inField:a,inNormalizationField:u,inFieldIndex:o,statisticType:l});}}function Q(e,t,r){switch(r.type){case"dot-density":return Y(e,t,r.attributes);case"simple":case"class-breaks":case"unique-value":case"dictionary":return Z(e,t,r.visualVariables);case"heatmap":return null}}function Y(e,t,r){if(!r||!r.length)return {type:"dot-density",mapping:[],target:t};return {type:"dot-density",mapping:r.map(((r,i)=>{const{field:n,fieldIndex:l}=$(e,{valueExpression:r.valueExpression,field:r.field,resultType:"numeric",target:t});return {binding:i,field:n,fieldIndex:l}})),target:t}}function Z(e,t,r){if(!r||!r.length)return {type:"visual-variable",mapping:[],target:t};const i={storage:!0},n="numeric";return {type:"visual-variable",mapping:a(r).map((r=>{var l;const s=V$1(r.type),{field:a,fieldIndex:o}=$(e,{target:t,valueExpression:r.valueExpression,field:r.field,context:i,resultType:n});switch(r.type){case"size":return "$view.scale"===r.valueExpression?null:{type:"size",binding:s,field:a,fieldIndex:o,normalizationField:$(e,{target:t,field:r.normalizationField,context:i,resultType:n}).field,valueRepresentation:null!=(l=r.valueRepresentation)?l:null};case"color":return {type:"color",binding:s,field:a,fieldIndex:o,normalizationField:$(e,{target:t,field:r.normalizationField,context:i,resultType:n}).field};case"opacity":return {type:"opacity",binding:s,field:a,fieldIndex:o,normalizationField:$(e,{target:t,field:r.normalizationField,context:i,resultType:n}).field};case"rotation":return {type:"rotation",binding:s,field:a,fieldIndex:o}}})).filter((e=>e)),target:t}}function _(e,t,r,i=!1){const n=c$4(e,{indexCount:0,fields:{}});switch(r.type){case"simple":case"dot-density":return ee(n,r,"dot-density"===r.type,i);case"class-breaks":return te(n,t,r,i);case"unique-value":return re(n,t,r,i);case"dictionary":return ie(n,r,i)}}function ee(e,t,r,i=!1){const n=t.getSymbols();return {type:"simple",symbol:z(n.length?n[0]:null,t,i),isDotDensity:r}}function te(e,t,r,i=!1){const n={mesh:!0,use:"renderer.field"},l=r.backgroundFillSymbol,{field:s,fieldIndex:a}=$(e,{target:t,field:r.field,valueExpression:r.valueExpression,resultType:"numeric",context:n}),o=r.normalizationType,u="log"===o?"esriNormalizeByLog":"percent-of-total"===o?"esriNormalizeByPercentOfTotal":"field"===o?"esriNormalizeByField":null,d=I(r),f=r.classBreakInfos.map((e=>({symbol:j(e.symbol,d,i),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return {type:"interval",attributes:e.fields,field:s,fieldIndex:a,backgroundFillSymbol:j(l,d,i),defaultSymbol:j(r.defaultSymbol,d,i),intervals:f,normalizationField:r.normalizationField,normalizationTotal:r.normalizationTotal,normalizationType:u,isMaxInclusive:r.isMaxInclusive}}function re(e,r,i,n=!1){const l=[],s=i.backgroundFillSymbol,a={target:r,context:{mesh:!0},resultType:"string"};if(i.field&&"string"!=typeof i.field)throw new s$4(w,"Expected renderer.field to be a string",i);const{field:o,fieldIndex:u}=$(e,{...a,field:i.field,valueExpression:i.valueExpression}),d=I(i);for(const t of i.uniqueValueInfos)l.push({value:""+t.value,symbol:j(t.symbol,d,n)});return {type:"map",attributes:e.fields,field:o,fieldIndex:u,field2:$(e,{...a,field:i.field2}).field,field3:$(e,{...a,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:j(s,d),defaultSymbol:j(i.defaultSymbol,d),map:l}}function ie(e,t,r=!1){return {type:"dictionary",renderer:t.toJSON()}}

const schemaUtils = /*#__PURE__*/Object.freeze({
	__proto__: null,
	addAggregateFields: X,
	createMatcherSchema: _,
	createSchema: M,
	createSymbolSchema: z,
	getSymbolSchemaOptsFromRenderer: I
});

export { M, _, c$2 as a, d as b, c$3 as c, d$2 as d, e, f, g$1 as g, h$1 as h, c as i, schemaUtils as j, m, p$3 as p, s, u$3 as u, y$2 as y, z };
