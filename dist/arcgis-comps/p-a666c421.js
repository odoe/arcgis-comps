import{f5 as t,f6 as s,f7 as e,ab as r,al as p}from"./p-7b6f6c18.js";import{t as o}from"./p-06d309e6.js";function u(r){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===r||"esriGeometryMultipoint"===r?t:"esriGeometryPolyline"===r?s:e}}}function n(t,s){if(p("esri-csp-restrictions"))return()=>({[s]:null,...t});try{let e=`this.${s} = null;`;for(const s in t)e+=`this${s.includes(".")?`["${s}"]`:`.${s}`} = ${JSON.stringify(t[s])};`;const r=new Function(e);return()=>new r}catch(e){return()=>({[s]:null,...t})}}function i(t={}){return[{name:"New Feature",description:"",prototype:{attributes:r(t)}}]}function a(t,s){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:o,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}export{a,i,n,u}