import { A as r, Q as E, ak as D, Z as U } from './messageBundle-f75b4090.js';
import { v as v$1 } from './jsonUtils-13b1f6fd.js';
import { v } from './normalizeUtils-25a1ce55.js';
import { t as t$1 } from './pbfQueryUtils-18f884ce.js';
import { r as r$1 } from './queryZScale-f42386f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(n){const o={};for(const e in n){if("declaredClass"===e)continue;const r=n[e];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){o[e]=[];for(let n=0;n<r.length;n++)o[e][n]=t(r[n]);}else "object"==typeof r?r.toJSON&&(o[e]=JSON.stringify(r)):o[e]=r;}return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l="Layer does not support extent calculation.";function m(t,r$1){const n=t.geometry,o=t.toJSON(),s=o;if(r(n)&&(s.geometry=JSON.stringify(n),s.geometryType=v$1(n),s.inSR=n.spatialReference.wkid||JSON.stringify(n.spatialReference)),o.groupByFieldsForStatistics&&(s.groupByFieldsForStatistics=o.groupByFieldsForStatistics.join(",")),o.objectIds&&(s.objectIds=o.objectIds.join(",")),o.orderByFields&&(s.orderByFields=o.orderByFields.join(",")),!o.outFields||!o.returnDistinctValues&&(null!=r$1&&r$1.returnCountOnly||null!=r$1&&r$1.returnExtentOnly||null!=r$1&&r$1.returnIdsOnly)?delete s.outFields:-1!==o.outFields.indexOf("*")?s.outFields="*":s.outFields=o.outFields.join(","),o.outSR?s.outSR=o.outSR.wkid||JSON.stringify(o.outSR):n&&(o.returnGeometry||o.returnCentroid)&&(s.outSR=s.inSR),o.returnGeometry&&delete o.returnGeometry,o.outStatistics&&(s.outStatistics=JSON.stringify(o.outStatistics)),o.pixelSize&&(s.pixelSize=JSON.stringify(o.pixelSize)),o.quantizationParameters&&(s.quantizationParameters=JSON.stringify(o.quantizationParameters)),o.parameterValues&&(s.parameterValues=JSON.stringify(o.parameterValues)),o.rangeValues&&(s.rangeValues=JSON.stringify(o.rangeValues)),o.dynamicDataSource&&(s.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o.timeExtent){const t=o.timeExtent,{start:e,end:r}=t;null==e&&null==r||(s.time=e===r?e:`${null==e?"null":e},${null==r?"null":r}`),delete o.timeExtent;}return s}async function y(t,r$2,n,i){const o=r(r$2.timeExtent)&&r$2.timeExtent.isEmpty?{data:{features:[]}}:await g(t,r$2,"json",i);return r$1(r$2,n,o.data),o}async function c(t,r$1,n,i){if(r(r$1.timeExtent)&&r$1.timeExtent.isEmpty)return Promise.resolve({data:n.createFeatureResult()});const o=await d(t,r$1,i),u=o;return u.data=t$1(o.data,n),u}function d(t,e,r){return g(t,e,"pbf",r)}function f(t,r$1,n){return r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):g(t,r$1,"json",n,{returnIdsOnly:!0})}function p(t,r$1,n){return r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):g(t,r$1,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function S(t,r$1,n){return r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):g(t,r$1,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(l);if(e.hasOwnProperty("count"))throw new Error(l);return t}))}function g(i,s,u,l={},y={}){const c="string"==typeof i?U(i):i,d=s.geometry?[s.geometry]:[];return l.responseType="pbf"===u?"array-buffer":"json",v(d,null,l).then((n=>{const i=n&&n[0];r(i)&&((s=s.clone()).geometry=i);const o=t({...c.query,f:u,...y,...m(s,y)});return E(D(c.path,"query"),{...l,query:{...o,...l.query}})}))}

const query = /*#__PURE__*/Object.freeze({
	__proto__: null,
	executeQuery: y,
	executeQueryForCount: p,
	executeQueryForExtent: S,
	executeQueryForIds: f,
	executeQueryPBF: c,
	executeQueryPBFBuffer: d,
	queryToQueryStringParameters: m,
	runQuery: g
});

export { S, c, d, f, g, p, query as q, t, y };
