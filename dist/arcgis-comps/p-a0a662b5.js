import{a as e}from"./p-b79fcce3.js";import{a0 as t,Q as n,s as r,dt as a,b_ as o,du as s,af as i,_ as l,br as u,dl as c,T as p,A as f}from"./p-e58503d5.js";import{r as y,O as d}from"./p-c93d2280.js";import{i as m}from"./p-48c5edb1.js";import{n as w,o as g}from"./p-9a8fa752.js";import{y as b}from"./p-a131049b.js";function T(e,t){for(const n of e)if(null!=n&&t(n))return n}function S(e){var t;return null!=(t=v(e))?t:function(e){const t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}function v(e){var t,n,r,a;const o=h.exec(e);if(!o)return null;const s=o.groups,i=+s.year,l=+s.month-1,u=+s.day,c=+(null!=(t=s.hours)?t:"0"),p=+(null!=(n=s.minutes)?n:"0"),f=+(null!=(r=s.seconds)?r:"0");if(c>23)return null;if(p>59)return null;if(f>59)return null;const y=null!=(a=s.ms)?a:"0",d=y?+y.padEnd(3,"0").substring(0,3):0;let m;return m=s.isUTC?Date.UTC(i,l,u,c,p,f,d):s.offsetSign?6e4*("+"===s.offsetSign?-1:1)*(60*+s.offsetHours+ +s.offsetMinutes)+Date.UTC(i,l,u,c,p,f,d):new Date(i,l,u,c,p,f,d).getTime(),Number.isNaN(m)?null:m}const h=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,x="xlink:href",F="2.0.0",E="__esri_wfs_id__",k="wfs-layer:feature-type-not-found",P="wfs-layer:unknown-geometry-type";async function R(e,t){const i=function(e){const t=X(e);(function(e){const t=e.firstElementChild.getAttribute("version");if(t&&t!==F)throw new r("wfs-layer:unsupported-wfs-version",`Unsupported WFS version ${t}. Supported version: ${F}`)})(t),q(t);const n=t.firstElementChild,a=new Map;return{operations:N(n),get featureTypes(){return Array.from(j(n,a))},readFeatureTypes:()=>j(n,a)}}((await n(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:F,...null==t?void 0:t.customParameters},signal:null==t?void 0:t.signal})).data);return function(e,t){a(e)&&(o(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=s(t.operations.DescribeFeatureType.url)),o(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=s(t.operations.GetFeature.url)))}(e,i),i}const C=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function N(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(g(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(x)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(x)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(x)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{const t=e.textContent;C.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new r("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if(i(n.GetFeature.outputFormat))throw new r("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return n}function j(e,t){return w(e,{FeatureTypeList:{FeatureType:e=>{if(t.has(e))return t.get(e);const n={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},r=new Set([4326]),a=e=>{var t,n;const a=parseInt(null==(t=e.textContent.match(/(?<wkid>\d+$)/i))||null==(n=t.groups)?void 0:n.wkid,10);Number.isNaN(a)||r.add(a)};return g(e,{Name:e=>{const{name:t,prefix:r}=_(e.textContent);n.typeName=`${r}:${t}`,n.name=t,n.namespacePrefix=r,n.namespaceUri=e.lookupNamespaceURI(r)},Abstract:e=>{n.description=e.textContent},Title:e=>{n.title=e.textContent},WGS84BoundingBox:e=>{n.extent=function(e){let t,n,r,a;for(const o of e.children)switch(o.localName){case"LowerCorner":[t,n]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[r,a]=o.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:r,ymax:a,spatialReference:c}}(e)},DefaultSRS:a,DefaultCRS:a,OtherSRS:a,OtherCRS:a}),n.title||(n.title=n.name),n.supportedSpatialReferences.push(...r),t.set(e,n),n}}})}function D(e,t,n){return T(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function $(e,n,a,o={}){var s;const{featureType:l,extent:u}=await O(e,n,a,o),{fields:c,geometryType:f,swapXY:y,objectIdField:d,geometryField:m}=await async function(e,t,n={}){const[a,o]=await p([G(e.operations.DescribeFeatureType.url,t,n),I(e,t,n)]);if(a.error||o.error)throw new r("wfs-layer:getWFSLayerTypeInfo-error",`An error occurred while getting info about the feature type '${t}'`,{error:a.error||o.error});const{fields:s,errors:l}=a.value,u=a.value.geometryType||o.value.geometryType,c=o.value.swapXY;if(i(u))throw new r(P,`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:u,fields:s,errors:l});return{...M(s),geometryType:u,swapXY:c}}(e,l.typeName,o);return{url:e.operations.GetCapabilities.url,name:l.name,namespaceUri:l.namespaceUri,fields:c,geometryField:m,geometryType:f,objectIdField:d,spatialReference:null!=(s=o.spatialReference)?s:t.WGS84,extent:u,swapXY:y,wfsCapabilities:e,customParameters:o.customParameters}}async function O(e,n,a,o={}){const{spatialReference:s=t.WGS84}=o,p=e.readFeatureTypes(),f=n?D(p,n,a):p.next().value;if(i(f))throw n?new r(k,`The type '${n}' could not be found in the service`):new r("wfs-layer:empty-service","The service is empty");let m=new l({...f.extent,spatialReference:s});if(!u(s,c))try{await y(c,s,void 0,o),m=d(m,c)}catch{throw new r("wfs-layer:unsupported-spatial-reference","Projection not supported")}return{extent:m,spatialReference:s,featureType:f}}function M(e){var t;const n=e.find((e=>"geometry"===e.type));let r=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),r||(r=new b({name:E,type:"oid",alias:E}),e.unshift(r)),{geometryField:null!=(t=null==n?void 0:n.name)?t:null,objectIdField:r.name,fields:e}}async function I(t,r,a={}){var o;let s,i=!1;const[l,u]=await Promise.all([L(t.operations.GetFeature.url,r,t.operations.GetFeature.outputFormat,{...a,count:1}),n(t.operations.GetFeature.url,{responseType:"text",query:W(r,void 0,{...a,count:1}),signal:null==a?void 0:a.signal})]),c="FeatureCollection"===l.type&&(null==(o=l.features[0])?void 0:o.geometry);if(c){let t;switch(s=e.fromJSON(m(c.type)),c.type){case"Point":t=c.coordinates;break;case"LineString":case"MultiPoint":t=c.coordinates[0];break;case"MultiLineString":case"Polygon":t=c.coordinates[0][0];break;case"MultiPolygon":t=c.coordinates[0][0][0]}const n=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(n){const e=t[0].toFixed(3),r=t[1].toFixed(3),a=parseFloat(n[1]).toFixed(3);e===parseFloat(n[2]).toFixed(3)&&r===a&&(i=!0)}}return{geometryType:s,swapXY:i}}async function G(e,t,r){return U(t,(await n(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:F,TYPENAME:t,...null==r?void 0:r.customParameters},signal:null==r?void 0:r.signal})).data)}function U(e,t){const{name:n}=_(e),a=X(t);q(a);const o=T(w(a.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:_(e.getAttribute("type")).name})}),(({name:e})=>e===n));if(f(o)){const e=T(w(a.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===o.typeName));if(f(e))return A(e)}throw new r(k,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(a)})}const V=new Set(["objectid","fid"]);function A(e){var t,n;const a=[],o=[];let s;const i=w(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const l of i){const i=l.getAttribute("name");if(!i)continue;let u,c;if(l.hasAttribute("type")?u=_(l.getAttribute("type")).name:g(l,{simpleType:{restriction:e=>(u=_(e.getAttribute("base")).name,{maxLength:e=>{c=+e.getAttribute("value")}})}}),!u)continue;const p="true"===l.getAttribute("nillable");let f=!1;switch(u.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":o.push(new b({name:i,alias:i,type:"integer",nullable:p}));break;case"float":case"double":case"decimal":o.push(new b({name:i,alias:i,type:"double",nullable:p}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":o.push(new b({name:i,alias:i,type:"string",nullable:p,length:null!=(t=c)?t:255}));break;case"datetime":case"date":o.push(new b({name:i,alias:i,type:"date",nullable:p,length:null!=(n=c)?n:36}));break;case"pointpropertytype":s="point",f=!0;break;case"multipointpropertytype":s="multipoint",f=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":s="polyline",f=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":s="polygon",f=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":f=!0,a.push(new r(P,`geometry type '${u}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:a.push(new r("wfs-layer:unknown-field-type",`Unknown field type '${u}'`,{type:(new XMLSerializer).serializeToString(e)}))}f&&o.push(new b({name:i,alias:i,type:"geometry",nullable:p}))}for(const e of o)if("integer"===e.type&&!e.nullable&&V.has(e.name.toLowerCase())){e.type="oid";break}return{geometryType:s,fields:o,errors:a}}async function L(e,t,a,o){let{data:s}=await n(e,{responseType:"text",query:W(t,a,o),signal:null==o?void 0:o.signal});s=s.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{var i;if(null!=o&&null!=(i=o.dateFields)&&i.length){const e=new Set(o.dateFields);return JSON.parse(s,((t,n)=>e.has(t)?S(n):n))}return JSON.parse(s)}catch(e){throw new r("wfs-layer:malformed-json","Error while parsing the response",{response:s,error:e})}}function W(e,t,n){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:F,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null==n?void 0:n.startIndex,COUNT:null==n?void 0:n.count,...null==n?void 0:n.customParameters}}function X(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function _(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:null!=n?n:t}}function q(e){let t,n;if(g(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new r(`wfs-layer:${t}`,n)}export{L as B,R as U,D as V,$ as W,M as q,E as x}