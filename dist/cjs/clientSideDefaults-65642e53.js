'use strict';

const request = require('./messageBundle-8be88d04.js');
const QueryEngineCapabilities = require('./QueryEngineCapabilities-15e8d907.js');
const defaultsJSON = require('./defaultsJSON-0cdf7a99.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(t){return {renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?defaultsJSON.l:"esriGeometryPolyline"===t?defaultsJSON.o:defaultsJSON.S}}}function n(s,e){if(request.s$3("esri-csp-restrictions"))return ()=>({[e]:null,...s});try{let t=`this.${e} = null;`;for(const e in s){t+=`this${e.includes(".")?`["${e}"]`:`.${e}`} = ${JSON.stringify(s[e])};`;}const r=new Function(t);return ()=>new r}catch(r){return ()=>({[e]:null,...s})}}function i(t={}){return [{name:"New Feature",description:"",prototype:{attributes:request.l$1(t)}}]}function a(t,s){return {attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:QueryEngineCapabilities.t,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}

exports.a = a;
exports.i = i;
exports.n = n;
exports.u = u;
