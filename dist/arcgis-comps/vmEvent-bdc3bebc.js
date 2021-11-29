/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return n.split(",").map((n=>n.trim()))}function t$1(n,t){return n.map((n=>r(n,t)))}function r(n,t){return 0===n.indexOf(t)?n:`${t}.${n}`}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){return a=>{a.hasOwnProperty("_delegatedEventNames")||(a._delegatedEventNames=a._delegatedEventNames?a._delegatedEventNames.slice():[]);const r=a._delegatedEventNames,s=Array.isArray(t)?t:n(t);r.push(...s);}}

export { t };
