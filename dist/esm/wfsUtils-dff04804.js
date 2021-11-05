import { ad as k$1, eh as y, H as E$1, a7 as s$1, h1 as rt, eE as E$2, h2 as ut, g as t$1, a8 as M$1, dh as E$3, eP as c, dk as rn, ew as O$1, T, h3 as i, W as r } from './MapView-a31458ed.js';
import { i as i$1 } from './geojson-faf341c1.js';
import { n as n$2, o } from './xmlUtils-ed1df04b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$1(n,o){for(const f of n)if(null!=f&&o(f))return f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){var s;return null!=(s=t(n))?s:e(n)}function e(n){const e=new Date(n).getTime();return Number.isNaN(e)?null:e}function t(n){var e,t,u,r;const o=s.exec(n);if(!o)return null;const l=o.groups,f=+l.year,i=+l.month-1,d=+l.day,a=+(null!=(e=l.hours)?e:"0"),c=+(null!=(t=l.minutes)?t:"0"),m=+(null!=(u=l.seconds)?u:"0");if(a>23)return null;if(c>59)return null;if(m>59)return null;const g=null!=(r=l.ms)?r:"0",T=g?+g.padEnd(3,"0").substring(0,3):0;let N;if(l.isUTC)N=Date.UTC(f,i,d,a,c,m,T);else if(l.offsetSign){const n=+l.offsetHours,e=+l.offsetMinutes;N=6e4*("+"===l.offsetSign?-1:1)*(60*n+e)+Date.UTC(f,i,d,a,c,m,T);}else N=new Date(f,i,d,a,c,m,T).getTime();return Number.isNaN(N)?null:N}const s=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const F="xlink:href",S="2.0.0",x="__esri_wfs_id__",v="wfs-layer:getWFSLayerTypeInfo-error",C="wfs-layer:empty-service",E="wfs-layer:feature-type-not-found",N="wfs-layer:geojson-not-supported",P="wfs-layer:kvp-encoding-not-supported",R="wfs-layer:malformed-json",j="wfs-layer:unknown-geometry-type",A="wfs-layer:unknown-field-type",G="wfs-layer:unsupported-spatial-reference",k="wfs-layer:unsupported-wfs-version";async function U(t,r){const n=D((await E$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:S,...null==r?void 0:r.customParameters},signal:null==r?void 0:r.signal})).data);return L(t,n),n}function D(e){const t=ee(e);re(t),ne(t);const r=t.firstElementChild,n=new Map;return {operations:O(r),get featureTypes(){return Array.from(M(r,n))},readFeatureTypes:()=>M(r,n)}}const I=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function O(e){let r=!1;const a={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(o(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return {DCP:{HTTP:{Get:e=>{a.GetCapabilities.url=e.getAttribute(F);}}}};case"DescribeFeatureType":return {DCP:{HTTP:{Get:e=>{a.DescribeFeatureType.url=e.getAttribute(F);}}}};case"GetFeature":return {DCP:{HTTP:{Get:e=>{a.GetFeature.url=e.getAttribute(F);}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return {AllowedValues:{Value:e=>{const t=e.textContent;I.has(t.toLowerCase())&&(a.GetFeature.outputFormat=t);}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return {DefaultValue:e=>{r="true"===e.textContent.toLowerCase();}};case"ImplementsResultPaging":return {DefaultValue:e=>{a.GetFeature.supportsPagination="true"===e.textContent.toLowerCase();}}}}}}),!r)throw new s$1(P,"WFS service doesn't support key/value pair (KVP) encoding");if(t$1(a.GetFeature.outputFormat))throw new s$1(N,"WFS service doesn't support GeoJSON output format");return a}function L(e,t){rt(e)&&(E$2(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=ut(t.operations.DescribeFeatureType.url)),E$2(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=ut(t.operations.GetFeature.url)));}function M(e,t){return n$2(e,{FeatureTypeList:{FeatureType:e=>{if(t.has(e))return t.get(e);const r={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},n=new Set([4326]),a=e=>{var t,r;const a=parseInt(null==(t=e.textContent.match(/(?<wkid>\d+$)/i))||null==(r=t.groups)?void 0:r.wkid,10);Number.isNaN(a)||n.add(a);};return o(e,{Name:e=>{const{name:t,prefix:n}=te(e.textContent);r.typeName=`${n}:${t}`,r.name=t,r.namespacePrefix=n,r.namespaceUri=e.lookupNamespaceURI(n);},Abstract:e=>{r.description=e.textContent;},Title:e=>{r.title=e.textContent;},WGS84BoundingBox:e=>{r.extent=$(e);},DefaultSRS:a,DefaultCRS:a,OtherSRS:a,OtherCRS:a}),r.title||(r.title=r.name),r.supportedSpatialReferences.push(...n),t.set(e,r),r}}})}function $(e){let t,r,n,a;for(const o of e.children)switch(o.localName){case"LowerCorner":[t,r]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[n,a]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));}return {xmin:t,ymin:r,xmax:n,ymax:a,spatialReference:c}}function V(e,t,n){return n$1(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function W(e,t,r,n={}){var a;const{featureType:o,extent:s}=await X(e,t,r,n),{fields:i,geometryType:u,swapXY:l,objectIdField:p,geometryField:c}=await Y(e,o.typeName,n);return {url:e.operations.GetCapabilities.url,name:o.name,namespaceUri:o.namespaceUri,fields:i,geometryField:c,geometryType:u,objectIdField:p,spatialReference:null!=(a=n.spatialReference)?a:k$1.WGS84,extent:s,swapXY:l,wfsCapabilities:e,customParameters:n.customParameters}}async function X(e,r,a,o={}){const{spatialReference:s=k$1.WGS84}=o,i=e.readFeatureTypes(),u=r?V(i,r,a):i.next().value;if(t$1(u))throw r?new s$1(E,`The type '${r}' could not be found in the service`):new s$1(C,"The service is empty");let y=new M$1({...u.extent,spatialReference:s});if(!E$3(s,c))try{await rn(c,s,void 0,o),y=O$1(y,c);}catch{throw new s$1(G,"Projection not supported")}return {extent:y,spatialReference:s,featureType:u}}async function Y(e,r,a={}){const[s,i]=await T([_(e.operations.DescribeFeatureType.url,r,a),z(e,r,a)]);if(s.error||i.error)throw new s$1(v,`An error occurred while getting info about the feature type '${r}'`,{error:s.error||i.error});const{fields:u,errors:l}=s.value,p=s.value.geometryType||i.value.geometryType,c=i.value.swapXY;if(t$1(p))throw new s$1(j,`The geometry type could not be determined for type '${r}`,{typeName:r,geometryType:p,fields:u,errors:l});return {...q(u),geometryType:p,swapXY:c}}function q(e){var t;const r=e.find((e=>"geometry"===e.type));let n=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),n||(n=new y({name:x,type:"oid",alias:x}),e.unshift(n)),{geometryField:null!=(t=null==r?void 0:r.name)?t:null,objectIdField:n.name,fields:e}}async function z(t,r,n={}){var a;let o,s=!1;const[i$2,u]=await Promise.all([B(t.operations.GetFeature.url,r,t.operations.GetFeature.outputFormat,{...n,count:1}),E$1(t.operations.GetFeature.url,{responseType:"text",query:K(r,void 0,{...n,count:1}),signal:null==n?void 0:n.signal})]),l="FeatureCollection"===i$2.type&&(null==(a=i$2.features[0])?void 0:a.geometry);if(l){let e;switch(o=i.fromJSON(i$1(l.type)),l.type){case"Point":e=l.coordinates;break;case"LineString":case"MultiPoint":e=l.coordinates[0];break;case"MultiLineString":case"Polygon":e=l.coordinates[0][0];break;case"MultiPolygon":e=l.coordinates[0][0][0];}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(t){const r=e[0].toFixed(3),n=e[1].toFixed(3),a=parseFloat(t[1]).toFixed(3);r===parseFloat(t[2]).toFixed(3)&&n===a&&(s=!0);}}return {geometryType:o,swapXY:s}}async function _(t,r,n){return J(r,(await E$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:S,TYPENAME:r,...null==n?void 0:n.customParameters},signal:null==n?void 0:n.signal})).data)}function J(e,n){const{name:o}=te(e),s=ee(n);ne(s);const i=n$1(n$2(s.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:te(e.getAttribute("type")).name})}),(({name:e})=>e===o));if(r(i)){const e=n$1(n$2(s.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===i.typeName));if(r(e))return H(e)}throw new s$1(E,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(s)})}const Q=new Set(["objectid","fid"]);function H(e){var r,n;const a=[],o$1=[];let s;const i=n$2(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const u of i){const i=u.getAttribute("name");if(!i)continue;let l,p;if(u.hasAttribute("type")?l=te(u.getAttribute("type")).name:o(u,{simpleType:{restriction:e=>(l=te(e.getAttribute("base")).name,{maxLength:e=>{p=+e.getAttribute("value");}})}}),!l)continue;const c="true"===u.getAttribute("nillable");let m=!1;switch(l.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":o$1.push(new y({name:i,alias:i,type:"integer",nullable:c}));break;case"float":case"double":case"decimal":o$1.push(new y({name:i,alias:i,type:"double",nullable:c}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":o$1.push(new y({name:i,alias:i,type:"string",nullable:c,length:null!=(r=p)?r:255}));break;case"datetime":case"date":o$1.push(new y({name:i,alias:i,type:"date",nullable:c,length:null!=(n=p)?n:36}));break;case"pointpropertytype":s="point",m=!0;break;case"multipointpropertytype":s="multipoint",m=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":s="polyline",m=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":s="polygon",m=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":m=!0,a.push(new s$1(j,`geometry type '${l}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:a.push(new s$1(A,`Unknown field type '${l}'`,{type:(new XMLSerializer).serializeToString(e)}));}m&&o$1.push(new y({name:i,alias:i,type:"geometry",nullable:c}));}for(const t of o$1)if("integer"===t.type&&!t.nullable&&Q.has(t.name.toLowerCase())){t.type="oid";break}return {geometryType:s,fields:o$1,errors:a}}async function B(r,n$1,a,o){let{data:s}=await E$1(r,{responseType:"text",query:K(n$1,a,o),signal:null==o?void 0:o.signal});s=s.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{var i;if(null!=o&&null!=(i=o.dateFields)&&i.length){const e=new Set(o.dateFields);return JSON.parse(s,((t,r)=>e.has(t)?n(r):r))}return JSON.parse(s)}catch(u){throw new s$1(R,"Error while parsing the response",{response:s,error:u})}}function K(e,t,r){return {SERVICE:"WFS",REQUEST:"GetFeature",VERSION:S,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null==r?void 0:r.startIndex,COUNT:null==r?void 0:r.count,...null==r?void 0:r.customParameters}}function ee(e){return (new DOMParser).parseFromString(e.trim(),"text/xml")}function te(e){const[t,r]=e.split(":");return {prefix:r?t:"",name:null!=r?r:t}}function re(e){const r=e.firstElementChild.getAttribute("version");if(r&&r!==S)throw new s$1(k,`Unsupported WFS version ${r}. Supported version: ${S}`)}function ne(e){let r,n;if(o(e.firstElementChild,{Exception:e=>(r=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent;}})}),r)throw new s$1(`wfs-layer:${r}`,n)}

export { B, U, V, W, q, x };
