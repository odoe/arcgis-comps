import { f5 as l, f6 as o, f7 as S, ab as l$1, al as s } from './MapView-a31458ed.js';
import { t } from './QueryEngineCapabilities-d289cd19.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(t){return {renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?l:"esriGeometryPolyline"===t?o:S}}}function n(s$1,e){if(s("esri-csp-restrictions"))return ()=>({[e]:null,...s$1});try{let t=`this.${e} = null;`;for(const e in s$1){t+=`this${e.includes(".")?`["${e}"]`:`.${e}`} = ${JSON.stringify(s$1[e])};`;}const r=new Function(t);return ()=>new r}catch(r){return ()=>({[e]:null,...s$1})}}function i(t={}){return [{name:"New Feature",description:"",prototype:{attributes:l$1(t)}}]}function a(t$1,s){return {attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t$1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:t,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}

export { a, i, n, u };
