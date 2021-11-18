import{r as t,O as e,ab as n,U as r}from"./p-9ae46e68.js";import{aH as o}from"./p-566b0715.js";import{v as u}from"./p-8031c809.js";import{t as s}from"./p-3048cc18.js";import{r as c}from"./p-22c8d854.js";function l(t){const e={};for(const n in t){if("declaredClass"===n)continue;const r=t[n];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){e[n]=[];for(let t=0;t<r.length;t++)e[n][t]=l(r[t])}else"object"==typeof r?r.toJSON&&(e[n]=JSON.stringify(r)):e[n]=r}return e}const a="Layer does not support extent calculation.";function f(e,n){const r=e.geometry,u=e.toJSON(),s=u;if(t(r)&&(s.geometry=JSON.stringify(r),s.geometryType=o(r),s.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),u.groupByFieldsForStatistics&&(s.groupByFieldsForStatistics=u.groupByFieldsForStatistics.join(",")),u.objectIds&&(s.objectIds=u.objectIds.join(",")),u.orderByFields&&(s.orderByFields=u.orderByFields.join(",")),!u.outFields||!u.returnDistinctValues&&(null!=n&&n.returnCountOnly||null!=n&&n.returnExtentOnly||null!=n&&n.returnIdsOnly)?delete s.outFields:s.outFields=-1!==u.outFields.indexOf("*")?"*":u.outFields.join(","),u.outSR?s.outSR=u.outSR.wkid||JSON.stringify(u.outSR):r&&(u.returnGeometry||u.returnCentroid)&&(s.outSR=s.inSR),u.returnGeometry&&delete u.returnGeometry,u.outStatistics&&(s.outStatistics=JSON.stringify(u.outStatistics)),u.pixelSize&&(s.pixelSize=JSON.stringify(u.pixelSize)),u.quantizationParameters&&(s.quantizationParameters=JSON.stringify(u.quantizationParameters)),u.parameterValues&&(s.parameterValues=JSON.stringify(u.parameterValues)),u.rangeValues&&(s.rangeValues=JSON.stringify(u.rangeValues)),u.dynamicDataSource&&(s.layer=JSON.stringify({source:u.dynamicDataSource}),delete u.dynamicDataSource),u.timeExtent){const t=u.timeExtent,{start:e,end:n}=t;null==e&&null==n||(s.time=e===n?e:`${null==e?"null":e},${null==n?"null":n}`),delete u.timeExtent}return s}async function i(e,n,r,o){const u=t(n.timeExtent)&&n.timeExtent.isEmpty?{data:{features:[]}}:await j(e,n,"json",o);return c(n,r,u.data),u}async function y(e,n,r,o){if(t(n.timeExtent)&&n.timeExtent.isEmpty)return Promise.resolve({data:r.createFeatureResult()});const u=await p(e,n,o),c=u;return c.data=s(u.data,r),c}function p(t,e,n){return j(t,e,"pbf",n)}function d(e,n,r){return t(n.timeExtent)&&n.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):j(e,n,"json",r,{returnIdsOnly:!0})}function O(e,n,r){return t(n.timeExtent)&&n.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):j(e,n,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function m(e,n,r){return t(n.timeExtent)&&n.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):j(e,n,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t}))}function j(o,s,c,a={},i={}){const y="string"==typeof o?r(o):o,p=s.geometry?[s.geometry]:[];return a.responseType="pbf"===c?"array-buffer":"json",u(p,null,a).then((r=>{const o=r&&r[0];t(o)&&((s=s.clone()).geometry=o);const u=l({...y.query,f:c,...i,...f(s,i)});return e(n(y.path,"query"),{...a,query:{...u,...a.query}})}))}const x=Object.freeze({__proto__:null,executeQuery:i,executeQueryForCount:O,executeQueryForExtent:m,executeQueryForIds:d,executeQueryPBF:y,executeQueryPBFBuffer:p,queryToQueryStringParameters:f,runQuery:j});export{m as S,y as c,p as d,d as f,O as p,x as q,l as t,i as y}