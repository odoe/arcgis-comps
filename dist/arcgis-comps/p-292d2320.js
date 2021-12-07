import{l as e}from"./p-8bcb4bb3.js";function t(e,t){return Number(e.toFixed(t))}function n(e){const n=e.definition,{classificationMethod:o,breakCount:u,normalizationType:i,definedInterval:s}=n,c=[];let f=e.values;if(0===f.length)return[];f=f.sort(((e,t)=>e-t));const m=f[0],d=f[f.length-1];if("equal-interval"===o)if(f.length>=u){const e=(d-m)/u;let n=m;for(let r=1;r<u;r++){const a=t(m+r*e,6);c.push({minValue:n,maxValue:a,label:l(n,a,i)}),n=a}c.push({minValue:n,maxValue:d,label:l(n,d,i)})}else f.forEach((e=>{c.push({minValue:e,maxValue:e,label:l(e,e,i)})}));else if("natural-breaks"===o){const n=function(e){const t=[],n=[];let l=Number.MIN_VALUE,r=1,a=-1;for(let o=0;o<e.length;o++){const u=e[o];u===l?(r++,n[a]=r):null!==u&&(t.push(u),l=u,r=1,n.push(r),a++)}return{uniqueValues:t,valueFrequency:n}}(f),o=function(e,t,n){const l=e.length,o=[];n>l&&(n=l);for(let e=0;e<n;e++)o.push(Math.round(e*l/n-1));o.push(l-1);let u=r(o,e,t,n);return function(e,t,n,l,r,o){let u=0,i=0,s=0,c=0,f=!0;for(let m=0;m<2&&f;m++){0===m&&(f=!1);for(let m=0;m<o-1;m++)for(;n[m+1]+1!==n[m+2];){n[m+1]=n[m+1]+1;const o=a(m,n,l,r);s=o.sbMean,u=o.sbSdcm;const d=a(m+1,n,l,r);if(c=d.sbMean,i=d.sbSdcm,!(u+i<t[m]+t[m+1])){n[m+1]=n[m+1]-1;break}t[m]=u,t[m+1]=i,e[m]=s,e[m+1]=c,f=!0}for(let m=o-1;m>0;m--)for(;n[m]!==n[m-1]+1;){n[m]=n[m]-1;const o=a(m-1,n,l,r);s=o.sbMean,u=o.sbSdcm;const d=a(m,n,l,r);if(c=d.sbMean,i=d.sbSdcm,!(u+i<t[m-1]+t[m])){n[m]=n[m]+1;break}t[m-1]=u,t[m]=i,e[m-1]=s,e[m]=c,f=!0}}return f}(u.mean,u.sdcm,o,e,t,n)&&(u=r(o,e,t,n)),o}(n.uniqueValues,e.valueFrequency||n.valueFrequency,u);let s=m;for(let e=1;e<u;e++)if(n.uniqueValues.length>e){const r=t(n.uniqueValues[o[e]],6);c.push({minValue:s,maxValue:r,label:l(s,r,i)}),s=r}c.push({minValue:s,maxValue:d,label:l(s,d,i)})}else if("quantile"===o)if(f.length>=u&&m!==d){let e=m,t=Math.ceil(f.length/u),n=0;for(let r=1;r<u;r++){let a=t+n-1;a>f.length&&(a=f.length-1),a<0&&(a=0),c.push({minValue:e,maxValue:f[a],label:l(e,f[a],i)}),e=f[a],n+=t,t=Math.ceil((f.length-n)/(u-r))}c.push({minValue:e,maxValue:d,label:l(e,d,i)})}else{let e=-1;for(let t=0;t<f.length;t++){const n=f[t];n!==e&&(e=n,c.push({minValue:e,maxValue:n,label:l(e,n,i)}),e=n)}}else if("standard-deviation"===o){const e=function(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t/=e.length,t}(f),n=function(e,t){let n=0;for(let l=0;l<e.length;l++){const r=e[l];n+=(r-t)*(r-t)}return n/=e.length,Math.sqrt(n)}(f,e);if(0===n)c.push({minValue:f[0],maxValue:f[0],label:l(f[0],f[0],i)});else{const r=function(e,t,n,l,r){let a=Math.max(l-e,t-l)/r/n;return a=a>=1?1:a>=.5?.5:.25,a}(m,d,u,e,n)*n;let a=0,o=m;for(let n=u;n>=1;n--){const u=t(e-(n-.5)*r,6);c.push({minValue:o,maxValue:u,label:l(o,u,i)}),o=u,a++}let s=t(e+.5*r,6);c.push({minValue:o,maxValue:s,label:l(o,s,i)}),o=s,a++;for(let n=1;n<=u;n++)s=a===2*u?d:t(e+(n+.5)*r,6),c.push({minValue:o,maxValue:s,label:l(o,s,i)}),o=s,a++}}else if("defined-interval"===o){if(!s)return c;const e=f[0],n=f[f.length-1],r=Math.ceil((n-e)/s);let a=e;for(let n=1;n<r;n++){const r=t(e+n*s,6);c.push({minValue:a,maxValue:r,label:l(a,r,i)}),a=r}c.push({minValue:a,maxValue:n,label:l(a,n,i)})}return c}function l(e,t,n){let l=null;return l=e===t?n&&"percent-of-total"===n?e+"%":e.toString():n&&"percent-of-total"===n?e+"% - "+t+"%":e+" - "+t,l}function r(e,t,n,l){let r=[],o=[],u=[],i=0;const s=[],c=[];for(let r=0;r<l;r++){const l=a(r,e,t,n);s.push(l.sbMean),c.push(l.sbSdcm),i+=c[r]}let f,m=i,d=!0;for(;d||i<m;){d=!1,r=[];for(let t=0;t<l;t++)r.push(e[t]);for(let n=0;n<l;n++)for(let r=e[n]+1;r<=e[n+1];r++)if(f=t[r],n>0&&r!==e[n+1]&&Math.abs(f-s[n])>Math.abs(f-s[n-1]))e[n]=r;else if(n<l-1&&e[n]!==r-1&&Math.abs(f-s[n])>Math.abs(f-s[n+1])){e[n+1]=r-1;break}m=i,i=0,o=[],u=[];for(let r=0;r<l;r++){o.push(s[r]),u.push(c[r]);const l=a(r,e,t,n);s[r]=l.sbMean,c[r]=l.sbSdcm,i+=c[r]}}if(i>m){for(let t=0;t<l;t++)e[t]=r[t],s[t]=o[t],c[t]=u[t];i=m}return{mean:s,sdcm:c}}function a(e,t,n,l){let r=0,a=0;for(let o=t[e]+1;o<=t[e+1];o++){const e=l[o];r+=n[o]*e,a+=e}a<=0&&console.log("Exception in Natural Breaks calculation");const o=r/a;let u=0;for(let r=t[e]+1;r<=t[e+1];r++)u+=l[r]*(n[r]-o)**2;return{sbMean:o,sbSdcm:u}}const o=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,u=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function i(e){return!(null!=e.normalizationField||null!=e.normalizationType||null!=e.minValue||null!=e.maxValue||e.sqlExpression&&e.supportsSQLExpression)}function s(e){const t=e.returnDistinct?[...new Set(e.values)]:e.values,n=t.filter((e=>null!=e)).length,l={count:n};return e.supportsNullCount&&(l.nullcount=t.length-n),e.percentileParams&&(l.median=f(t,e.percentileParams)),l}function c(e){const{values:t,useSampleStdDev:n,supportsNullCount:l}=e;let r=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=null,u=null,i=null,s=null,c=0;const m=null==e.minValue?-1/0:e.minValue,d=null==e.maxValue?1/0:e.maxValue;for(const e of t)Number.isFinite(e)?e>=m&&e<=d&&(o+=e,r=Math.min(r,e),a=Math.max(a,e),c++):"string"==typeof e&&c++;if(c&&null!=o){u=o/c;let e=0;for(const n of t)Number.isFinite(n)&&n>=m&&n<=d&&(e+=(n-u)**2);s=n?c>1?e/(c-1):0:c>0?e/c:0,i=Math.sqrt(s)}else r=null,a=null;const b={avg:u,count:c,max:a,min:r,stddev:i,sum:o,variance:s};return l&&(b.nullcount=t.length-c),e.percentileParams&&(b.median=f(t,e.percentileParams)),b}function f(e,t){const{fieldType:n,value:l,orderBy:r,isDiscrete:a}=t,o=m(n,"desc"===r);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,t)=>o(e,t)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const u=(e.length-1)*l,i=Math.floor(u),s=i+1,c=u%1,f=e[i],d=e[s];return s>=e.length||a||"string"==typeof f||"string"==typeof d?f:f*(1-c)+d*c}function m(e,t){const n=t?1:-1,l=function(e){return e?(e,t)=>t-e:(e,t)=>e-t}(t),r=d(t);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...u].includes(e))return(e,t)=>"number"==typeof e&&"number"==typeof t?l(e,t):"string"==typeof e&&"string"==typeof t?r(e,t):n;if("esriFieldTypeDate"===e)return(e,t)=>{const r=new Date(e).getTime(),a=new Date(t).getTime();return isNaN(r)||isNaN(a)?n:l(r,a)};if(u.has(e))return(e,t)=>l(e,t);if("esriFieldTypeString"===e)return(e,t)=>r(e,t);if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){const e=d(t);return(t,n)=>e(b(t),b(n))}return t?()=>1:()=>-1}function d(e){return e?(e,t)=>(e=e.toUpperCase())>(t=t.toUpperCase())?-1:e<t?1:0:(e,t)=>(e=e.toUpperCase())<(t=t.toUpperCase())?-1:e>t?1:0}function b(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function V(e,t){return t?(["avg","stddev","variance"].forEach((t=>{null!=e[t]&&(e[t]=Math.ceil(e[t]))})),e):e}function p(e){const t={};for(let n of e)(null==n||"string"==typeof n&&""===n.trim())&&(n=null),null==t[n]?t[n]={count:1,data:n}:t[n].count++;return{count:t}}function y(e,t,n){const l=e.count,r=[];n&&t&&"coded-value"===t.type&&t.codedValues.forEach((e=>{const t=e.code;l.hasOwnProperty(t)||(l[t]={data:t,count:0})}));for(const e in l){const t=l[e];r.push({value:t.data,count:t.count,label:t.label})}return{uniqueValueInfos:r}}function v(e,t,n,l){let r=null;switch(t){case"log":0!==e&&(r=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(r=e/l*100);break;case"field":Number.isFinite(n)&&0!==n&&(r=e/n);break;case"natural-log":e>0&&(r=Math.log(e));break;case"square-root":e>0&&(r=e**.5)}return r}function h(e,t){return function(e){const{normalizationTotal:t}=e;return{classBreaks:n(e),normalizationTotal:t}}({definition:M({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||5}),values:e=function(e,t,n){return t=null==t?-1/0:t,n=null==n?1/0:n,e.filter((e=>Number.isFinite(e)&&e>=t&&e<=n))}(e,t.minValue,t.maxValue),normalizationTotal:t.normalizationTotal})}function M(t){const n=t.field,l=t.classificationMethod||"equal-interval",r=t.normalizationType,a=t.normalizationField,o=new e;return o.classificationField=n,o.breakCount=t.breakCount,o.classificationMethod=l,o.standardDeviationInterval="standard-deviation"===l?t.standardDeviationInterval||1:void 0,o.normalizationType=r,o.normalizationField="field"===r?a:void 0,o}function x(e,t){let n=e.classBreaks;const l=n[0].minValue,r=n[n.length-1].maxValue,a="standard-deviation"===t,u=o;return n=n.map((e=>{const t=e.label,n={minValue:e.minValue,maxValue:e.maxValue,label:t};if(a&&t){const e=t.match(u).map((e=>+e.trim()));2===e.length?(n.minStdDev=e[0],n.maxStdDev=e[1],e[0]<0&&e[1]>0&&(n.hasAvg=!0)):1===e.length&&(t.includes("<")?(n.minStdDev=null,n.maxStdDev=e[0]):t.includes(">")&&(n.minStdDev=e[0],n.maxStdDev=null))}return n})),{minValue:l,maxValue:r,classBreakInfos:n,normalizationTotal:e.normalizationTotal}}export{x as D,p as b,f as c,m as d,y as g,v as h,i as o,s,c as u,V as v,h as y}