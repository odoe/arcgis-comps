import { I, aj as l, J as J$1, z as z$1, F as O, $, s as s$1, h, A, _ as ie, a as b, Z, e as ee, ak as ye, al as _$2, a4 as s$2 } from './arcadeUtils-ebc53175.js';
import { D, q as q$1, r, P, G, y, _ as _$1, e, a, b as a$1, g, w, T, j, c as T$1, C, v, E, d as w$1 } from './featureSetUtils-95e16c3c.js';
import { c as n, E as E$1 } from './SpatialFilter-f6366258.js';
import { b0 as s, ax as k } from './jsxFactory-a3b6abde.js';
import { WhereClause as m } from './WhereClause-f0afbbff.js';
import Ge from './FeatureLayer-6179c233.js';
import { y as y$1 } from './Field-416cada2.js';
import './Graphic-08cda9ca.js';
import './JSONSupport-4f0a3248.js';
import './number-46c4ff94.js';
import './featureConversionUtils-ef2563e9.js';
import './OptimizedFeature-3d0408e5.js';
import './OptimizedFeatureSet-27736f1f.js';
import './FeatureSetReader-cae104b7.js';
import './centroid-9f9f8aa3.js';
import './sizeVariableUtils-4d3662df.js';
import './MD5-6027098a.js';
import './FieldsIndex-87a4d86b.js';
import './pbfQueryUtils-8da18556.js';
import './pbf-a77a8e4c.js';
import './FeatureSet-d7537daf.js';
import './index-8dec7690.js';
import './fieldType-7f2a820b.js';
import './Query-a20a7572.js';
import './TimeExtent-a92e5996.js';
import './QueryTask-74d4023b.js';
import './utils-6b47d93a.js';
import './executeQueryJSON-21f02626.js';
import './query-0985d8b5.js';
import './normalizeUtils-359d2c6f.js';
import './queryZScale-407bfc75.js';
import './zscale-6af4ef9a.js';
import './TopFeaturesQuery-4aea53d6.js';
import './compilerUtils-a5ae094d.js';
import './Task-5476576b.js';
import './FeatureType-ba8f07c3.js';
import './PortalItem-4dd070a8.js';
import './geometryEngineAsync-e14ca18d.js';
import './workers-82dadb41.js';
import './_commonjsHelpers-020ca939.js';
import './UniqueValueRenderer-8dbcac2c.js';
import './VisualVariablesMixin-b52a2c87.js';
import './colorRamps-270af342.js';
import './ColorStop-e7cb8b17.js';
import './visualVariableUtils-21378141.js';
import './lengthUtils-e1fe9a45.js';
import './diffUtils-a2ab1186.js';
import './jsonUtils-43243fe0.js';
import './styleUtils-91b1203b.js';
import './DictionaryRenderer-80042e03.js';
import './LRUCache-d4f192fd.js';
import './MemCache-dfacc658.js';
import './jsonUtils-66ddb072.js';
import './MultiOriginJSONSupport-22dd2d29.js';
import './HeightModelInfo-5a7b6583.js';
import './HandleOwner-a0b41b75.js';
import './reactiveUtils-aa11596b.js';
import './APIKeyMixin-d87deecc.js';
import './ArcGISService-88c76264.js';
import './arcgisLayerUrl-a1acfaeb.js';
import './BlendLayer-1d9f1c9a.js';
import './jsonUtils-efaaa503.js';
import './mat4-3acd3594.js';
import './CustomParametersMixin-92abdfc3.js';
import './labelingInfo-af47848f.js';
import './commonProperties-ad8badbd.js';
import './LabelClass-a0793742.js';
import './labelUtils-434b8348.js';
import './defaultsJSON-53258912.js';
import './OperationalLayer-26aa2ff7.js';
import './OrderedLayer-2f7497c3.js';
import './PortalLayer-8e73039a.js';
import './asyncUtils-9a49e799.js';
import './RefreshableLayer-5b977e98.js';
import './ScaleRangeLayer-2f975321.js';
import './TemporalLayer-f3b14395.js';
import './TimeInfo-8ecf4da2.js';
import './fieldProperties-f216bcfb.js';
import './LayerFloorInfo-a2a78182.js';
import './styleUtils-22872348.js';
import './popupUtils-9dc503ca.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function H(e,t,n,r){if(1===r.length){if(I(r[0]))return l(e,r[0],-1);if(J$1(r[0]))return l(e,r[0].toArray(),-1)}return l(e,r,-1)}function z(e,t,n){const r=e.getVariables();if(r.length>0){const i=[];for(let e=0;e<r.length;e++){const a={name:r[e]};i.push(t.evaluateIdentifier(n,a));}return s(i).then((t=>{const n={};for(let e=0;e<r.length;e++)n[r[e]]=t[e];return e.parameters=n,e}))}return k(e)}function _(e,t,n=null){for(const r in e)if(r.toLowerCase()===t.toLowerCase())return e[r];return n}function U(e){if(null===e)return null;const t={type:_(e,"type",""),name:_(e,"name","")};if("range"===t.type)t.range=_(e,"range",[]);else {t.codedValues=[];for(const n of _(e,"codedValues",[]))t.codedValues.push({name:_(n,"name",""),code:_(n,"code",null)});}return t}function W(e){if(null===e)return null;const t={},n=_(e,"wkt",null);null!==n&&(t.wkt=n);const r=_(e,"wkid",null);return null!==r&&(t.wkid=r),t}function J(e){if(null===e)return null;const t={hasZ:_(e,"hasz",!1),hasM:_(e,"hasm",!1)},n=_(e,"spatialreference",null);n&&(t.spatialReference=W(n));const r=_(e,"x",null);if(null!==r)return t.x=r,t.y=_(e,"y",null),t;const i=_(e,"rings",null);if(null!==i)return t.rings=i,t;const a=_(e,"paths",null);if(null!==a)return t.paths=a,t;const s=_(e,"points",null);if(null!==s)return t.points=s,t;for(const l of ["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=_(e,l,null);null!==n&&(t[l]=n);}return t}function q(e,t){for(const n of t)if(n===e)return !0;return !1}function K(e){return !!e.layerDefinition&&(!!e.featureSet&&(!1!==q(e.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&(null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&(!1!==I(e.layerDefinition.fields)&&!1!==I(e.featureSet.features)))))}function Y(M){"async"===M.mode&&(M.functions.getuser=function(n,r){return M.standardFunctionAsync(n,r,((r,s,l)=>{z$1(l,1,2);let o=O(l[1],""),f=!0===o;if(o=!0===o||!1===o?"":$(o),l[0]instanceof s$1){let e=null;return n.services&&n.services.portal&&(e=n.services.portal),e=D(l[0],e),q$1(e,o,f).then((e=>{if(e){const n=JSON.parse(JSON.stringify(e));for(const e of ["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return h.convertObjectToArcadeDictionary(n)}return null}))}let u=null;if(A(l[0])&&(u=l[0]),u)return f=!1,o?null:u.load().then((()=>u.getOwningSystemUrl())).then((r=>{if(!r)return o?null:u.getIdentityUser().then((e=>e?h.convertObjectToArcadeDictionary({username:e}):null));let s=null;return n.services&&n.services.portal&&(s=n.services.portal),s=D(new s$1(r),s),q$1(s,o,f).then((e=>{if(e){const n=JSON.parse(JSON.stringify(e));for(const e of ["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return h.convertObjectToArcadeDictionary(n)}return null}))}));throw new Error("Invalid Parameter")}))},M.signatures.push({name:"getuser",min:"1",max:"2"}),M.functions.featuresetbyid=function(e,t){return M.standardFunctionAsync(e,t,((e,t,n)=>{if(z$1(n,2,4),n[0]instanceof r){const e=$(n[1]);let t=O(n[2],null);const r=ie(O(n[3],!0));if(null===t&&(t=["*"]),!1===I(t))throw new Error("Invalid Parameter");return n[0].featureSetById(e,r,t)}throw new Error("Invalid Parameter")}))},M.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),M.functions.getfeatureset=function(e,t){return M.standardFunctionAsync(e,t,((t,r,i)=>{if(z$1(i,1,2),i[0]instanceof b){let t=O(i[1],"datasource");return null===t&&(t="datasource"),t=$(t).toLowerCase(),P(i[0]._layer,t,e.lrucache,e.interceptor,e.spatialReference)}throw new Error("Invalid Parameter")}))},M.signatures.push({name:"getfeatureset",min:"1",max:"2"}),M.functions.featuresetbyportalitem=function(t,n){return M.standardFunctionAsync(t,n,((n,r,a)=>{if(z$1(a,2,5),null===a[0])throw new Error("Portal is required");if(a[0]instanceof s$1){const e=$(a[1]),n=$(a[2]);let r=O(a[3],null);const s=ie(O(a[4],!0));if(null===r&&(r=["*"]),!1===I(r))throw new Error("Invalid Parameter");let o=null;return t.services&&t.services.portal&&(o=t.services.portal),o=D(a[0],o),G(e,n,t.spatialReference,r,s,o,t.lrucache,t.interceptor)}if(!1===Z(a[0]))throw new Error("Portal is required");const s=$(a[0]),o=$(a[1]);let f=O(a[2],null);const u=ie(O(a[3],!0));if(null===f&&(f=["*"]),!1===I(f))throw new Error("Invalid Parameter");if(t.services&&t.services.portal)return G(s,o,t.spatialReference,f,u,t.services.portal,t.lrucache,t.interceptor);throw new Error("Portal is required")}))},M.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),M.functions.featuresetbyname=function(e,t){return M.standardFunctionAsync(e,t,((e,t,n)=>{if(z$1(n,2,4),n[0]instanceof r){const e=$(n[1]);let t=O(n[2],null);const r=ie(O(n[3],!0));if(null===t&&(t=["*"]),!1===I(t))throw new Error("Invalid Parameter");return n[0].featureSetByName(e,r,t)}throw new Error("Invalid Parameter")}))},M.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),M.functions.featureset=function(e,n){return M.standardFunction(e,n,((n,r,i)=>{z$1(i,1,1);let a=i[0];const s={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(Z(a))a=JSON.parse(a),void 0!==a.layerDefinition?(s.layerDefinition=a.layerDefinition,s.featureSet=a.featureSet,a.layerDefinition.spatialReference&&(s.layerDefinition.spatialReference=a.layerDefinition.spatialReference)):(s.featureSet.features=a.features,s.featureSet.geometryType=a.geometryType,s.layerDefinition.geometryType=s.featureSet.geometryType,s.layerDefinition.objectIdField=a.objectIdFieldName,s.layerDefinition.typeIdField=a.typeIdFieldName,s.layerDefinition.globalIdField=a.globalIdFieldName,s.layerDefinition.fields=a.fields,a.spatialReference&&(s.layerDefinition.spatialReference=a.spatialReference));else {if(!(i[0]instanceof h))throw new Error("Invalid Parameter");{a=JSON.parse(i[0].castToText());const e=_(a,"layerdefinition");if(null!==e){s.layerDefinition.geometryType=_(e,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.globalIdField=_(e,"globalidfield",""),s.layerDefinition.objectIdField=_(e,"objectidfield",""),s.layerDefinition.typeIdField=_(e,"typeidfield","");const t=_(e,"spatialreference",null);t&&(s.layerDefinition.spatialReference=W(t));for(const r of _(e,"fields",[])){const e={name:_(r,"name",""),alias:_(r,"alias",""),type:_(r,"type",""),nullable:_(r,"nullable",!0),editable:_(r,"editable",!0),length:_(r,"length",null),domain:U(_(r,"domain"))};s.layerDefinition.fields.push(e);}const n=_(a,"featureset",null);if(n){const e={};for(const t of s.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of _(n,"features",[])){const n={},r=_(t,"attributes",{});for(const t in r)n[e[t.toLowerCase()]]=r[t];s.featureSet.features.push({attributes:n,geometry:J(_(t,"geometry",null))});}}}else {s.layerDefinition.geometryType=_(a,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.objectIdField=_(a,"objectidfieldname",""),s.layerDefinition.typeIdField=_(a,"typeidfieldname","");const e=_(a,"spatialreference",null);e&&(s.layerDefinition.spatialReference=W(e));for(const n of _(a,"fields",[])){const e={name:_(n,"name",""),alias:_(n,"alias",""),type:_(n,"type",""),nullable:_(n,"nullable",!0),editable:_(n,"editable",!0),length:_(n,"length",null),domain:U(_(n,"domain"))};s.layerDefinition.fields.push(e);}const t={};for(const n of s.layerDefinition.fields)t[n.name.toLowerCase()]=n.name;for(const n of _(a,"features",[])){const e={},r=_(n,"attributes",{});for(const n in r)e[t[n.toLowerCase()]]=r[n];s.featureSet.features.push({attributes:e,geometry:J(_(n,"geometry",null))});}}}}if(!1===K(s))throw new Error("Invalid Parameter");return y.create(s,e.spatialReference)}))},M.signatures.push({name:"featureset",min:"1",max:"1"}),M.functions.filter=function(e,t){return M.standardFunctionAsync(e,t,((t,n,r)=>(z$1(r,2,2),A(r[0])?r[0].load().then((t=>{const n=m.create(r[1],t.getFieldsIndex()),i=n.getVariables();if(i.length>0){const t=[];for(let n=0;n<i.length;n++){const r={name:i[n]};t.push(M.evaluateIdentifier(e,r));}return s(t).then((e=>{const t={};for(let n=0;n<i.length;n++)t[i[n]]=e[n];return n.parameters=t,new _$1({parentfeatureset:r[0],whereclause:n})}))}return k(new _$1({parentfeatureset:r[0],whereclause:n}))})):M.failDefferred("Filter cannot accept this parameter type"))))},M.signatures.push({name:"filter",min:"2",max:"2"}),M.functions.orderby=function(e$1,t){return M.standardFunctionAsync(e$1,t,((e$1,t,n)=>{if(z$1(n,2,2),A(n[0])){const e$1=new e(n[1]);return k(new a({parentfeatureset:n[0],orderbyclause:e$1}))}return M.failDefferred("Order cannot accept this parameter type")}))},M.signatures.push({name:"orderby",min:"2",max:"2"}),M.functions.top=function(e,t){return M.standardFunctionAsync(e,t,((e,t,n)=>(z$1(n,2,2),A(n[0])?k(new a$1({parentfeatureset:n[0],topnum:n[1]})):I(n[0])?ee(n[1])>=n[0].length?n[0].slice(0):n[0].slice(0,ee(n[1])):J$1(n[0])?ee(n[1])>=n[0].length()?n[0].slice(0):n[0].slice(0,ee(n[1])):M.failDefferred("Top cannot accept this parameter type"))))},M.signatures.push({name:"top",min:"2",max:"2"}),M.functions.first=function(e,t){return M.standardFunctionAsync(e,t,((e,t,r)=>(z$1(r,1,1),A(r[0])?r[0].first(e.abortSignal).then((e=>{if(null!==e){const t=b.createFromGraphicLikeObject(e.geometry,e.attributes,r[0]);t._underlyingGraphic=e,e=t;}return e})):I(r[0])?0===r[0].length?k(null):k(r[0][0]):J$1(r[0])?0===r[0].length()?k(null):k(r[0].get(0)):null)))},M.signatures.push({name:"first",min:"1",max:"1"}),M.functions.attachments=function(e,r){return M.standardFunctionAsync(e,r,((r,i,a)=>{z$1(a,1,2);const s={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(a.length>1)if(a[1]instanceof h){if(a[1].hasField("minsize")&&(s.minsize=ee(a[1].field("minsize"))),a[1].hasField("metadata")&&(s.returnMetadata=ie(a[1].field("metadata"))),a[1].hasField("maxsize")&&(s.maxsize=ee(a[1].field("maxsize"))),a[1].hasField("types")){const e=ye(a[1].field("types"),!1);e.length>0&&(s.types=e);}}else if(null!==a[1])throw new Error("Invalid Parameter");if(a[0]instanceof b){let t=a[0]._layer;return t instanceof Ge&&(t=g(t,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===t||!1===A(t)?[]:t.load().then((()=>t.queryAttachments(a[0].field(t.objectIdField),s.minsize,s.maxsize,s.types,s.returnMetadata)))}if(null===a[0])return [];throw new Error("Invalid Parameter")}))},M.signatures.push({name:"attachments",min:"1",max:"2"}),M.functions.featuresetbyrelationshipname=function(e,t){return M.standardFunctionAsync(e,t,((t,r,i)=>{z$1(i,2,4);const a=i[0],s=$(i[1]);let l=O(i[2],null);const c=ie(O(i[3],!0));if(null===l&&(l=["*"]),!1===I(l))throw new Error("Invalid Parameter");if(null===i[0])return null;if(!(i[0]instanceof b))throw new Error("Invalid Parameter");let F=a._layer;return F instanceof Ge&&(F=g(F,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===F||!1===A(F)?null:F.load().then((t=>{const n$1=t.relationshipMetaData().filter((e=>e.name===s));if(0===n$1.length)return null;if(void 0!==n$1[0].relationshipTableId&&null!==n$1[0].relationshipTableId&&n$1[0].relationshipTableId>-1)return w(t,n$1[0],a.field(t.objectIdField),t.spatialReference,l,c,e.lrucache,e.interceptor);let r=t.serviceUrl();return r?(r="/"===r.charAt(r.length-1)?r+n$1[0].relatedTableId.toString():r+"/"+n$1[0].relatedTableId.toString(),T(r,t.spatialReference,l,c,e.lrucache,e.interceptor).then((e=>e.load().then((()=>e.relationshipMetaData())).then((r=>{if(r=r.filter((e=>e.id===n$1[0].id)),!1===a.hasField(n$1[0].keyField)||null===a.field(n$1[0].keyField))return t.getFeatureByObjectId(a.field(t.objectIdField),[n$1[0].keyField]).then((t=>{if(t){const i=m.create(r[0].keyField+"= @id",e.getFieldsIndex());return i.parameters={id:t.attributes[n$1[0].keyField]},e.filter(i)}return new n({parentfeatureset:e})}));const i=m.create(r[0].keyField+"= @id",e.getFieldsIndex());return i.parameters={id:a.field(n$1[0].keyField)},e.filter(i)}))))):null}))}))},M.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),M.functions.featuresetbyassociation=function(e,t){return M.standardFunctionAsync(e,t,((t,r,i)=>{z$1(i,2,3);const a=i[0],s=$(O(i[1],"")).toLowerCase(),l=Z(i[2])?$(i[2]):null;if(null===i[0])return null;if(!(i[0]instanceof b))throw new Error("Invalid Parameter");let f=a._layer;return f instanceof Ge&&(f=g(f,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===f||!1===A(f)?null:f.load().then((()=>{const t=f.serviceUrl();return j(t,e.spatialReference)})).then((e=>{let t=null,n=null,r=!1;if(null!==l&&""!==l&&void 0!==l){for(const t of e.terminals)t.terminalName===l&&(n=t.terminalId);null===n&&(r=!0);}const i=e.associations.getFieldsIndex(),o=i.get("TOGLOBALID").name,u=i.get("FROMGLOBALID").name,c=i.get("TOTERMINALID").name,d=i.get("FROMTERMINALID").name,m$1=i.get("FROMNETWORKSOURCEID").name,p=i.get("TONETWORKSOURCEID").name,y=i.get("ASSOCIATIONTYPE").name,g=i.get("ISCONTENTVISIBLE").name,h=i.get("OBJECTID").name;for(const s of f.fields)if("global-id"===s.type){t=a.field(s.name);break}let F=null,I=new T$1(new y$1({name:"percentalong",alias:"percentalong",type:"double"}),m.create("0",e.associations.getFieldsIndex())),E$1=new T$1(new y$1({name:"side",alias:"side",type:"string"}),m.create("''",e.associations.getFieldsIndex()));const D="globalid",$="globalId",T={};for(const a in e.lkp)T[a]=e.lkp[a].sourceId;const L=new C(new y$1({name:"classname",alias:"classname",type:"string"}),null,T);let v$1="";switch(s){case"midspan":{v$1=`((${o}='${t}') OR ( ${u}='${t}')) AND (${y} IN (5))`,L.codefield=m.create(`CASE WHEN (${o}='${t}') THEN ${m$1} ELSE ${p} END`,e.associations.getFieldsIndex());const n=s$2(E.findField(e.associations.fields,u));n.name=D,n.alias=D,F=new T$1(n,m.create(`CASE WHEN (${u}='${t}') THEN ${o} ELSE ${u} END`,e.associations.getFieldsIndex())),I=e.unVersion>=4?new w$1(E.findField(e.associations.fields,i.get("PERCENTALONG").name)):new T$1(new y$1({name:"percentalong",alias:"percentalong",type:"double"}),m.create("0",e.associations.getFieldsIndex()));break}case"junctionedge":{v$1=`((${o}='${t}') OR ( ${u}='${t}')) AND (${y} IN (4,6))`,L.codefield=m.create(`CASE WHEN (${o}='${t}') THEN ${m$1} ELSE ${p} END`,e.associations.getFieldsIndex());const n=s$2(E.findField(e.associations.fields,u));n.name=D,n.alias=D,F=new T$1(n,m.create(`CASE WHEN (${u}='${t}') THEN ${o} ELSE ${u} END`,e.associations.getFieldsIndex())),E$1=new T$1(new y$1({name:"side",alias:"side",type:"string"}),m.create(`CASE WHEN (${y}=4) THEN 'from' ELSE 'to' END`,e.associations.getFieldsIndex()));break}case"connected":{let r=`${o}='@T'`,i=`${u}='@T'`;null!==n&&(r+=` AND ${c}=@A`,i+=` AND ${d}=@A`),v$1="(("+r+") OR ("+i+"))",v$1=_$2(v$1,"@T",t),r=_$2(r,"@T",t),null!==n&&(r=_$2(r,"@A",n.toString()),v$1=_$2(v$1,"@A",n.toString())),L.codefield=m.create("CASE WHEN "+r+` THEN ${m$1} ELSE ${p} END`,e.associations.getFieldsIndex());const a=s$2(E.findField(e.associations.fields,u));a.name=D,a.alias=D,F=new T$1(a,m.create("CASE WHEN "+r+` THEN ${u} ELSE ${o} END`,e.associations.getFieldsIndex()));break}case"container":v$1=`${o}='${t}' AND ${y} = 2`,null!==n&&(v$1+=` AND ${c} = `+n.toString()),L.codefield=m$1,v$1="( "+v$1+" )",F=new v(E.findField(e.associations.fields,u),D,D);case"content":v$1=`(${u}='${t}' AND ${y} = 2)`,null!==n&&(v$1+=` AND ${d} = `+n.toString()),L.codefield=p,v$1="( "+v$1+" )",F=new v(E.findField(e.associations.fields,o),D,D);break;case"structure":v$1=`(${o}='${t}' AND ${y} = 3)`,null!==n&&(v$1+=` AND ${c} = `+n.toString()),L.codefield=m$1,v$1="( "+v$1+" )",F=new v(E.findField(e.associations.fields,u),D,$);break;case"attached":v$1=`(${u}='${t}' AND ${y} = 3)`,null!==n&&(v$1+=` AND ${d} = `+n.toString()),L.codefield=p,v$1="( "+v$1+" )",F=new v(E.findField(e.associations.fields,o),D,$);break;default:throw new Error("Invalid Parameter")}r&&(v$1="1 <> 1");return new E({parentfeatureset:e.associations,adaptedFields:[new w$1(E.findField(e.associations.fields,h)),new w$1(E.findField(e.associations.fields,g)),F,E$1,L,I],extraFilter:v$1?m.create(v$1,e.associations.getFieldsIndex()):null})}))}))},M.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),M.functions.groupby=function(e,n){return M.standardFunctionAsync(e,n,((n,r,i)=>(z$1(i,3,3),A(i[0])?i[0].load().then((n=>{const r=[],a=[];let s$1=!1,l=[];if(Z(i[1]))l.push(i[1]);else if(i[1]instanceof h)l.push(i[1]);else if(I(i[1]))l=i[1];else {if(!J$1(i[1]))return M.failDefferred("Illegal Value: GroupBy");l=i[1].toArray();}for(const e of l)if(Z(e)){const t=m.create($(e),n.getFieldsIndex()),i=!0===E$1(t)?$(e):"%%%%FIELDNAME";r.push({name:i,expression:t}),"%%%%FIELDNAME"===i&&(s$1=!0);}else {if(!(e instanceof h))return M.failDefferred("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(s$1=!0),!t)return M.failDefferred("Illegal Value: GroupBy");r.push({name:t,expression:m.create(i||t,n.getFieldsIndex())});}}if(l=[],Z(i[2]))l.push(i[2]);else if(I(i[2]))l=i[2];else if(J$1(i[2]))l=i[2].toArray();else {if(!(i[2]instanceof h))return M.failDefferred("Illegal Value: GroupBy");l.push(i[2]);}for(const e of l){if(!(e instanceof h))return M.failDefferred("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"",r=e.hasField("statistic")?e.field("statistic"):"",i=e.hasField("expression")?e.field("expression"):"";if(!t||!r||!i)return M.failDefferred("Illegal Value: GroupBy");a.push({name:t,statistic:r.toLowerCase(),expression:m.create(i,n.getFieldsIndex())});}}if(s$1){const e={};for(const r of n.fields)e[r.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of a)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString();}}const o=[];for(const t of r)o.push(z(t.expression,M,e));for(const t of a)o.push(z(t.expression,M,e));return o.length>0?s(o).then((()=>k(i[0].groupby(r,a)))):k(i[0].groupby(r,a))})):M.failDefferred("Illegal Value: GroupBy"))))},M.signatures.push({name:"groupby",min:"3",max:"3"}),M.functions.distinct=function(e,n){return M.standardFunctionAsync(e,n,((n,r,i)=>A(i[0])?(z$1(i,2,2),i[0].load().then((n=>{const r=[];let a=[];if(Z(i[1]))a.push(i[1]);else if(i[1]instanceof h)a.push(i[1]);else if(I(i[1]))a=i[1];else {if(!J$1(i[1]))return M.failDefferred("Illegal Value: GroupBy");a=i[1].toArray();}let s$1=!1;for(const e of a)if(Z(e)){const t=m.create($(e),n.getFieldsIndex()),i=!0===E$1(t)?$(e):"%%%%FIELDNAME";r.push({name:i,expression:t}),"%%%%FIELDNAME"===i&&(s$1=!0);}else {if(!(e instanceof h))return M.failDefferred("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(s$1=!0),!t)return M.failDefferred("Illegal Value: GroupBy");r.push({name:t,expression:m.create(i||t,n.getFieldsIndex())});}}if(s$1){const e={};for(const r of n.fields)e[r.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString();}}const l=[];for(const t of r)l.push(z(t.expression,M,e));return l.length>0?s(l).then((()=>k(i[0].groupby(r,[])))):k(i[0].groupby(r,[]))}))):H("distinct",n,r,i)))});}

export { Y as registerFunctions };
