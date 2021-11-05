import { s, fF as st, b as t, e as s$1, E, fb as i, bN as d, aN as k$1, bn as c, r, bG as nt, bk as et, cm as M$1, dy as c$1, fG as e } from './index.js';
import { O as O$1, T as T$1, L } from './geojson.js';
import { u } from './clientSideDefaults.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const b=s.getLogger("esri.layers.graphics.sources.ogcfeature"),j="http://www.opengis.net/def/crs/",F=`${j}OGC/1.3/CRS84`;async function I(i$1,r,a={},s=5){const{links:o}=i$1,l=G(o,"items","application/geo+json")||G(o,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(t(l))throw new s$1("ogc-feature-layer:missing-items-page","Missing items url");const{data:c}=await E(l.href,{signal:a.signal,query:{limit:s,...a.customParameters,token:a.apiKey},headers:{accept:"application/geo+json"}});await O$1(c);const d$1=T$1(c,{geometryType:r.geometryType}),u$1=r.fields||d$1.fields||[],f=null!=r.hasZ?r.hasZ:d$1.hasZ,h=d$1.geometryType,j=r.objectIdField||d$1.objectIdFieldName||"OBJECTID";let F=r.timeInfo;const I=u$1.find((e=>e.name===j));if(!I){if(!d$1.objectIdFieldType)throw new s$1("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");u$1.unshift({name:j,alias:j,type:"esriFieldTypeOID",editable:!1,nullable:!1});}else I.type="esriFieldTypeOID",I.editable=!1,I.nullable=!1;if(j!==d$1.objectIdFieldName){const e=u$1.find((e=>e.name===d$1.objectIdFieldName));e&&(e.type="esriFieldTypeInteger");}u$1===d$1.fields&&d$1.unknownFields.length>0&&b.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:d$1.unknownFields}});for(const e of u$1){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new s$1("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(-1===i.jsonValues.indexOf(e.type))throw new s$1("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(F){const e=new d(u$1);if(F.startTimeField){const t=e.get(F.startTimeField);t?(F.startTimeField=t.name,t.type="esriFieldTypeDate"):F.startTimeField=null;}if(F.endTimeField){const t=e.get(F.endTimeField);t?(F.endTimeField=t.name,t.type="esriFieldTypeDate"):F.endTimeField=null;}if(F.trackIdField){const t=e.get(F.trackIdField);t?F.trackIdField=t.name:(F.trackIdField=null,b.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:F}}));}F.startTimeField||F.endTimeField||(b.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:F}}),F=null);}return {drawingInfo:h?u(h):null,geometryType:h,fields:u$1,hasZ:!!f,objectIdField:j,timeInfo:F}}async function T(i,r={}){const{links:a}=i,s=G(a,"data","application/json")||G(a,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(t(s))throw new s$1("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:l,signal:c}=r,{data:d}=await E(s.href,{signal:c,headers:{accept:"application/json"},query:{...l,token:o}});return d}async function k(i,r={}){const{links:a}=i,s=G(a,"conformance","application/json")||G(a,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(t(s))throw new s$1("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:l,signal:c}=r,{data:d}=await E(s.href,{signal:c,headers:{accept:"application/json"},query:{...l,token:o}});return d}async function x(t,i={}){const{apiKey:n,customParameters:r,signal:a}=i,{data:s}=await E(t,{signal:a,headers:{accept:"application/json"},query:{...r,token:n}});return s}async function S(t$1,i={}){const r="application/vnd.oai.openapi+json;version=3.0",a=G(t$1.links,"service-desc",r);if(t(a))return b.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:s,customParameters:o,signal:l}=i,{data:c}=await E(a.href,{signal:l,headers:{accept:r},query:{...o,token:s}});return c}function v(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),i=null==t?void 0:t.groups;if(!i)return null;const{authority:n,code:r}=i;switch(n.toLowerCase()){case"ogc":switch(r.toLowerCase()){case"crs27":return k$1.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return k$1.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(r,10);return Number.isNaN(e)?null:e}default:return null}}async function N(e,t,i){const n=await q(e,t,i);return st(n)}async function q(i,l,p){const{capabilities:{query:{maxRecordCount:m}},collection:g,layerDefinition:y,queryParameters:{apiKey:w,customParameters:b},spatialReference:j,supportedCrs:F}=i,{links:I}=g,T=G(I,"items","application/geo+json")||G(I,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(t(T))throw new s$1("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:k,num:x,start:S,timeExtent:v,where:N}=l;if(l.objectIds)throw new s$1("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const q=k$1.fromJSON(j),M=c(l.outSpatialReference,q),C=M.isWGS84?null:O(M,F),P=D(k,F),W=R(v),Z=$(N),K=null!=x?x:null!=S&&void 0!==S?10:m,{data:L$1}=await E(T.href,{...p,query:{...b,...P,crs:C,datetime:W,query:Z,limit:K,startindex:S,token:w},headers:{accept:"application/geo+json"}});let A=!1;if(L$1.links){const e=L$1.links.find((e=>"next"===e.rel));A=!!e;}!A&&Number.isInteger(L$1.numberMatched)&&Number.isInteger(L$1.numberReturned)&&(A=L$1.numberReturned<L$1.numberMatched);const{fields:E$1,globalIdField:J,hasM:U,hasZ:_,objectIdField:z}=y,B=y.geometryType,Q=L(L$1,{geometryType:B,hasZ:_,objectIdField:z});if(!C&&M.isWebMercator)for(const e of Q)if(r(e.geometry)){const t=nt(e.geometry,B,_,!1);t.spatialReference=k$1.WGS84,e.geometry=et(M$1(t,M));}for(const e of Q)e.objectId=e.attributes[z];const V=C||!C&&M.isWebMercator?M.toJSON():c$1,H=new e;return H.exceededTransferLimit=A,H.features=Q,H.fields=E$1,H.geometryType=B,H.globalIdFieldName=J,H.hasM=U,H.hasZ=_,H.objectIdFieldName=z,H.spatialReference=V,H}function M(e){return r(e)&&"extent"===e.type}function O(e,t){var i,n,r;const{isWebMercator:a,wkid:s}=e;if(!s)return null;const o=a?null!=(i=null!=(n=null!=(r=t[3857])?r:t[102100])?n:t[102113])?i:t[900913]:t[e.wkid];return o?`${j}${o}`:null}function C(e){if(t(e))return "";const{xmin:t$1,ymin:i,xmax:r,ymax:a}=e;return `${t$1},${i},${r},${a}`}function R(e){if(t(e))return null;const{start:t$1,end:i}=e;return `${r(t$1)?t$1.toISOString():".."}/${r(i)?i.toISOString():".."}`}function $(e){return t(e)||!e||"1=1"===e?null:e}function D(e,t){if(!M(e))return null;const{spatialReference:i}=e;if(!i||i.isWGS84)return {bbox:C(e)};const n=O(i,t);return r(n)?{bbox:C(e),"bbox-crs":n}:i.isWebMercator?{bbox:C(M$1(e,k$1.WGS84))}:null}function G(e,t,i){return e.find((e=>e.rel===t&&e.type===i))||e.find((e=>e.rel===t&&!e.type))}

export { F, I, N, S, T, j, k, q, v, x };
