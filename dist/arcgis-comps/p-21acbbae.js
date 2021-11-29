import{fR as t,b as i,t as s,eA as e,eB as n,r as a,eI as r,an as o,fH as h,fS as l,fT as u,f2 as c,s as f,fU as d,l as m,fV as p,fW as y,fX as w,H as x,cC as g,cj as F,fY as S,fZ as v,dV as T,eu as b,dW as z,dY as _,u as R,f_ as P}from"./p-5420851c.js";import{WhereClause as I}from"./p-c0f8009d.js";import{g as V,M,f as E}from"./p-6df976c7.js";import{t as Q}from"./p-06d309e6.js";import{s as A}from"./p-8bf8e457.js";import{h as q,s as C,u as D,v as j,b as B,g as N,y as k,D as L,d as O,c as U,o as Z}from"./p-c3449e4f.js";import{z as $,J as G,O as W,n as J,t as X,P as H,U as Y,v as K,I as tt,a as it}from"./p-03389806.js";const st=new class{constructor(i,s){this._cache=new t(i),this._invalidCache=new t(s)}get(t,i){const s=`${i.uid}:${t}`,e=this._cache.get(s);if(e)return e;if(void 0!==this._invalidCache.get(s))return null;try{const e=I.create(t,i);return this._cache.put(s,e),e}catch{return this._invalidCache.put(s,null),null}}}(50,500),et="feature-store:unsupported-query",nt=" as ",at=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function rt(t,s){if(!s)return!0;const e=st.get(s,t);if(!e)throw new i(et,"invalid SQL expression",{where:s});if(!e.isStandardized)throw new i(et,"where clause is not standard",{where:s});return lt(t,e.fieldNames,"where clause contains missing fields"),!0}function ot(t,s,e){if(!s)return!0;const n=st.get(s,t);if(!n)throw new i(et,"invalid SQL expression",{having:s});if(!n.isAggregate)throw new i(et,"having does not contain a valid aggregate function",{having:s});if(lt(t,n.fieldNames,"having contains missing fields"),!n.getExpressions().every((i=>{const{aggregateType:s,field:n}=i,a=t.has(n)&&t.get(n).name;return e.some((i=>{const{onStatisticField:e,statisticType:n}=i;return(t.has(e)&&t.get(e).name)===a&&n.toLowerCase().trim()===s}))})))throw new i(et,"expressions in having should also exist in outStatistics",{having:s});return!0}function ht(t,i){return t?st.get(t,i):null}function lt(t,s,e,n=!0){const a=[];for(const e of s)if("*"!==e&&!t.has(e))if(n){const s=ut(e);try{const e=ht(s,t);if(!e)throw new i(et,"invalid SQL expression",{where:s});if(!e.isStandardized)throw new i(et,"expression is not standard",{clause:e});lt(t,e.fieldNames,"expression contains missing fields")}catch(t){const i=t&&t.details;if(i&&(i.clause||i.where))throw t;i&&i.missingFields?a.push(...i.missingFields):a.push(e)}}else a.push(e);if(a.length)throw new i(et,e,{missingFields:a})}function ut(t){return t.split(nt)[0]}function ct(t){return t.split(nt)[1]}function ft(t,i){const s=i.get(t);return!!s&&!at.has(s.type)}class dt{constructor(t,i,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=t.returnDistinctValues,this.fieldsIndex=s,this.featureAdapter=i;const e=t.outFields;if(e&&-1===e.indexOf("*")){this.outFields=e;let t=0;for(const i of e){const e=ut(i),n=this.fieldsIndex.get(e),a=n?null:ht(e,s),r=n?n.name:ct(i)||"FIELD_EXP_"+t++;this._fieldDataCache.set(i,{alias:r,clause:a})}}}countDistinctValues(t){return this.returnDistinctValues?(t.forEach((t=>this.getAttributes(t))),this._returnDistinctMap.size):t.length}getAttributes(t){const i=this._processAttributesForOutFields(t);return this._processAttributesForDistinctValues(i)}getFieldValue(t,i,s){const e=s?s.name:i;let n=null;return this._fieldDataCache.has(e)?n=this._fieldDataCache.get(e).clause:s||(n=ht(i,this.fieldsIndex),this._fieldDataCache.set(e,{alias:e,clause:n})),s?this.featureAdapter.getAttribute(t,e):n.calculateValue(t,this.featureAdapter)}getNormalizedValue(t,i){const s=i.normalizationType,e=i.normalizationTotal;let n=this.getFieldValue(t,i.field,i.fieldInfo);if(s&&Number.isFinite(n)){const a=this.getFieldValue(t,i.normalizationField,i.normalizationFieldInfo);n=q(n,s,a,e)}return n}getExpressionValue(t,i,s){const e={attributes:this.featureAdapter.getAttributes(t)},n=s.createExecContext(e,i.viewInfo);return s.executeFunction(i.compiledFunc,n)}validateItem(t,i){return this._fieldDataCache.has(i)||this._fieldDataCache.set(i,{alias:i,clause:ht(i,this.fieldsIndex)}),this._fieldDataCache.get(i).clause.testFeature(t,this.featureAdapter)}validateItems(t,i){return this._fieldDataCache.has(i)||this._fieldDataCache.set(i,{alias:i,clause:ht(i,this.fieldsIndex)}),this._fieldDataCache.get(i).clause.testSet(t,this.featureAdapter)}_processAttributesForOutFields(t){const i=this.outFields;if(!i||!i.length)return this.featureAdapter.getAttributes(t);const s={};for(const e of i){const{alias:i,clause:n}=this._fieldDataCache.get(e);s[i]=n?n.calculateValue(t,this.featureAdapter):this.featureAdapter.getAttribute(t,i)}return s}_processAttributesForDistinctValues(t){if(s(t)||!this.returnDistinctValues)return t;const i=this.outFields,e=[];if(i)for(const s of i){const{alias:i}=this._fieldDataCache.get(s);e.push(t[i])}else for(const i in t)e.push(t[i]);const n=`${(i||["*"]).join(",")}=${e.join(",")}`;let a=this._returnDistinctMap.get(n)||0;return this._returnDistinctMap.set(n,++a),a>1?null:t}}class mt{constructor(t,i,s){this.items=t,this.queryGeometry=i,this.definitionExpression=s.definitionExpression,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.fieldsIndex=s.fieldsIndex,this.timeInfo=s.timeInfo,this.featureAdapter=s.featureAdapter,this.aggregateAdapter=s.aggregateAdapter}get size(){return this.items.length}createQueryResponseForCount(t){const i=new dt(t,this.featureAdapter,this.fieldsIndex);if(!t.outStatistics)return i.countDistinctValues(this.items);const{groupByFieldsForStatistics:s,having:e}=t;if(!(null==s?void 0:s.length))return 1;const n=new Map,a=new Map,r=new Set,o=t.outStatistics;for(const t of o){const{statisticType:o}=t,h="exceedslimit"!==o?t.onStatisticField:void 0;if(!a.has(h)){const t=[];for(const e of s){const s=this._getAttributeValues(i,e,n);t.push(s)}a.set(h,this._calculateUniqueValues(t,i.returnDistinctValues))}const l=a.get(h);for(const t in l){const{data:s,items:n}=l[t],a=s.join(",");e&&!i.validateItems(n,e)||r.add(a)}}return r.size}createQueryResponse(t){let i;return i=t.outStatistics?t.outStatistics.some((t=>"exceedslimit"===t.statisticType))?this._createExceedsLimitQueryResponse(t):this._createStatisticsQueryResponse(t):this._createFeatureQueryResponse(t),t.returnQueryGeometry&&(i.queryGeometry=e(t.outSR)&&!n(this.queryGeometry.spatialReference,t.outSR)?$({spatialReference:t.outSR,...V(this.queryGeometry,this.queryGeometry.spatialReference,t.outSR)}):$({spatialReference:t.outSR,...this.queryGeometry})),i}createSnappingResponse(t,i){const e=this.featureAdapter,n=function(t,i){return t?i?4:3:i?3:2}(this.hasZ,this.hasM),{x:a,y:r}=t.point,o="number"==typeof t.distance?t.distance:t.distance.x,h="number"==typeof t.distance?t.distance:t.distance.y,l={candidates:[]},u="esriGeometryPolygon"===this.geometryType,c=this.getPointCreator(t.point,this.spatialReference,i);for(const i of this.items){const f=e.getGeometry(i);if(s(f))continue;const{coords:d,lengths:m}=f;if(1&t.types){let t=0;for(let s=0;s<m.length;s++){const u=m[s];for(let s=0;s<u;s++,t+=n){const f=d[t],m=d[t+1];if(s!==u-1){const s=d[t+n],u=d[t+n+1],{x:p,y}=pt(a,r,f,m,s,u),w=(a-p)/o,x=(r-y)/h,g=w*w+x*x;g<=1&&l.candidates.push({type:"edge",objectId:e.getObjectId(i),distance:Math.sqrt(g),target:c(p,y),start:c(f,m),end:c(s,u)})}}}}if(2&t.types){const t=u?d.length-n:d.length;for(let s=0;s<t;s+=n){const t=d[s],n=d[s+1],u=(a-t)/o,f=(r-n)/h,m=u*u+f*f;m<=1&&l.candidates.push({type:"vertex",objectId:e.getObjectId(i),distance:Math.sqrt(m),target:c(t,n)})}}}return l.candidates.sort(((t,i)=>t.distance-i.distance)),l}getPointCreator(t,i,s){const e=a(s)&&!n(i,s)?t=>V(t,i,s):t=>t;return null!=t.z&&null!=t.m?(i,s)=>e({x:i,y:s,z:t.z,m:t.m}):null!=t.z?(i,s)=>e({x:i,y:s,z:t.z}):null!=t.m?(i,s)=>e({x:i,y:s,m:t.m}):(t,i)=>e({x:t,y:i})}executeAttributesQuery(t){const i=ht(t.where,this.fieldsIndex);if(!i)return Promise.resolve(this);if(i.isStandardized){let s=0;const e=[];for(const t of this.items)i.testFeature(t,this.featureAdapter)&&(e[s++]=t);const n=new mt(e,this.queryGeometry,this);return n.definitionExpression=t.where,Promise.resolve(n)}return Promise.reject(new TypeError("Where clause is not standardized"))}executeAggregateIdsQuery(t){if(!t.aggregateIds||!t.aggregateIds.length||s(this.aggregateAdapter))return Promise.resolve(this);const i=new Set;for(const s of t.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(s).forEach((t=>i.add(t)));const e=this.featureAdapter.getObjectId;return Promise.resolve(new mt(this.items.filter((t=>i.has(e(t)))),this.queryGeometry,this))}executeObjectIdsQuery(t){if(!t.objectIds||!t.objectIds.length)return Promise.resolve(this);const i=new Set(t.objectIds),s=this.featureAdapter.getObjectId;return Promise.resolve(new mt(this.items.filter((t=>i.has(s(t)))),this.queryGeometry,this))}executeTimeQuery(t){const i=J(this.timeInfo,t.timeExtent,this.featureAdapter);if(!a(i))return Promise.resolve(this);const s=this.items.filter(i);return Promise.resolve(new mt(s,this.queryGeometry,this))}filterLatest(){const{trackIdField:t,startTimeField:i,endTimeField:s}=this.timeInfo,e=s||i,n=new Map,a=this.featureAdapter.getAttribute;for(const i of this.items){const s=a(i,t),r=a(i,e),o=n.get(s);(!o||r>a(o,e))&&n.set(s,i)}const r=Array.from(n.values());return Promise.resolve(new mt(r,this.queryGeometry,this))}async project(t){if(!t||n(this.spatialReference,t))return this;const i=this.featureAdapter,s=(await M(this.items.map((t=>G(this.geometryType,this.hasZ,this.hasM,i.getGeometry(t)))),this.spatialReference,t)).map(((t,s)=>i.cloneWithGeometry(this.items[s],r(t,this.hasZ,this.hasM))));return new mt(s,this.queryGeometry,{definitionExpression:this.definitionExpression,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:t,fieldsIndex:this.fieldsIndex,timeInfo:this.timeInfo,featureAdapter:this.featureAdapter})}async createSummaryStatisticsResponse(t,i){const{field:s,valueExpression:e,normalizationField:n,normalizationType:a,normalizationTotal:r,minValue:h,maxValue:l,scale:u}=i,c=this.fieldsIndex.isDateField(s),f=await this._getDataValues(t,{field:s,valueExpression:e,normalizationField:n,normalizationType:a,normalizationTotal:r,scale:u}),d=Z({normalizationType:a,normalizationField:n,minValue:h,maxValue:l}),m=this.fieldsIndex.get(s),p={value:.5,fieldType:null==m?void 0:m.type},y=o(m)?C({values:f,supportsNullCount:d,percentileParams:p}):D({values:f,minValue:h,maxValue:l,useSampleStdDev:!a,supportsNullCount:d,percentileParams:p});return j(y,c)}async createUniqueValuesResponse(t,i){const{field:s,valueExpression:e,domain:n,returnAllCodedValues:a,scale:r}=i,o=await this._getDataValues(t,{field:s,valueExpression:e,scale:r}),h=B(o);return N(h,n,a)}async createClassBreaksResponse(t,i){const{field:s,valueExpression:e,normalizationField:n,normalizationType:a,normalizationTotal:r,classificationMethod:o,standardDeviationInterval:h,minValue:l,maxValue:u,numClasses:c,scale:f}=i,d=await this._getDataValues(t,{field:s,valueExpression:e,normalizationField:n,normalizationType:a,normalizationTotal:r,scale:f}),m=k(d,{field:s,normalizationField:n,normalizationType:a,normalizationTotal:r,classificationMethod:o,standardDeviationInterval:h,minValue:l,maxValue:u,numClasses:c});return L(m,o)}_sortFeatures(t,i,s){if(t.length>1&&i&&i.length)for(const e of i.reverse()){const i=e.split(" "),n=i[0],a=this.fieldsIndex.get(n),r=i[1]&&"desc"===i[1].toLowerCase(),o=O(null==a?void 0:a.type,r);t.sort(((t,i)=>{const e=s(t,n,a),r=s(i,n,a);return o(e,r)}))}}_createFeatureQueryResponse(t){const i=this.items,{geometryType:s,hasM:e,hasZ:n,objectIdField:a,spatialReference:r}=this,{outFields:o,outSR:h,quantizationParameters:l,resultRecordCount:u,resultOffset:c,returnZ:f,returnM:d}=t,m=null!=u&&i.length>(c||0)+u,p=o&&(o.indexOf("*")>-1?[...this.fieldsIndex.fields]:o.map((t=>this.fieldsIndex.get(t))));return{exceededTransferLimit:m,features:this._createFeatures(t,i),fields:p,geometryType:s,hasM:e&&d,hasZ:n&&f,objectIdFieldName:a,spatialReference:$(h||r),transform:l&&A(l)||null}}_createFeatures(t,i){const s=new dt(t,this.featureAdapter,this.fieldsIndex),{hasM:e,hasZ:n}=this,{orderByFields:a,quantizationParameters:r,returnGeometry:o,returnCentroid:h,maxAllowableOffset:l,resultOffset:u,resultRecordCount:c,returnZ:f=!1,returnM:d=!1}=t,m=n&&f,p=e&&d;let y=[],w=0;const x=[...i];if(this._sortFeatures(x,a,((t,i,e)=>s.getFieldValue(t,i,e))),o||h){const t=A(r);if(o&&!h)for(const i of x)y[w++]={attributes:s.getAttributes(i),geometry:G(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(i),l,t,m,p)};else if(!o&&h)for(const i of x)y[w++]={attributes:s.getAttributes(i),centroid:W(this,this.featureAdapter.getCentroid(i,this),t)};else for(const i of x)y[w++]={attributes:s.getAttributes(i),centroid:W(this,this.featureAdapter.getCentroid(i,this),t),geometry:G(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(i),l,t,m,p)}}else for(const t of x){const i=s.getAttributes(t);i&&(y[w++]={attributes:i})}const g=u||0;return null!=c&&(y=y.slice(g,Math.min(y.length,g+c))),y}_createExceedsLimitQueryResponse(t){let i=!1,s=Number.POSITIVE_INFINITY,e=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY;for(const i of t.outStatistics)if("exceedslimit"===i.statisticType){s=null!=i.maxPointCount?i.maxPointCount:Number.POSITIVE_INFINITY,e=null!=i.maxRecordCount?i.maxRecordCount:Number.POSITIVE_INFINITY,n=null!=i.maxVertexCount?i.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)i=this.items.length>s;else if(this.items.length>e)i=!0;else{const t=this.hasZ?this.hasM?4:3:this.hasM?3:2,s=this.featureAdapter;i=this.items.reduce(((t,i)=>{const e=s.getGeometry(i);return t+(a(e)&&e.coords.length||0)}),0)/t>n}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(i)}}]}}_createStatisticsQueryResponse(t){const i={attributes:{}},s=[],e=new Map,n=new Map,a=new Map,r=new Map,o=new dt(t,this.featureAdapter,this.fieldsIndex),h=t.outStatistics,{groupByFieldsForStatistics:l,having:u,orderByFields:c}=t,f=l&&l.length,d=!!f,m=d&&l[0],p=d&&!this.fieldsIndex.get(m);for(const t of h){const{outStatisticFieldName:h,statisticType:c}=t,y=t,w="exceedslimit"!==c?t.onStatisticField:void 0,x="percentile_disc"===c||"percentile_cont"===c,g=d&&1===f&&(w===m||p)&&"count"===c;if(d){if(!a.has(w)){const t=[];for(const i of l){const s=this._getAttributeValues(o,i,e);t.push(s)}a.set(w,this._calculateUniqueValues(t,o.returnDistinctValues))}const t=a.get(w);for(const i in t){const{count:s,data:n,items:a,itemPositions:c}=t[i],f=n.join(",");if(!u||o.validateItems(a,u)){const t=r.get(f)||{attributes:{}};let i=null;if(g)i=s;else{const t=this._getAttributeValues(o,w,e),s=c.map((i=>t[i]));i=x&&"statisticParameters"in y?this._getPercentileValue(y,s):this._getStatisticValue(y,s,null,o.returnDistinctValues)}t.attributes[h]=i,l.forEach(((i,s)=>t.attributes[this.fieldsIndex.get(i)?i:`EXPR_${s+1}`]=n[s])),r.set(f,t)}}}else{const t=this._getAttributeValues(o,w,e);i.attributes[h]=x&&"statisticParameters"in y?this._getPercentileValue(y,t):this._getStatisticValue(y,t,n,o.returnDistinctValues)}s.push({name:h,alias:h,type:"esriFieldTypeDouble"})}const y=d?Array.from(r.values()):[i];return this._sortFeatures(y,c,((t,i)=>t.attributes[i])),{fields:s,features:y}}_getStatisticValue(t,i,s,e){const{onStatisticField:n,statisticType:a}=t;let r=null;return r=null!=s&&s.has(n)?s.get(n):o(this.fieldsIndex.get(n))?C({values:i,returnDistinct:e}):D({values:i,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(n,r),r["var"===a?"variance":a]}_getPercentileValue(t,i){const{onStatisticField:s,statisticParameters:e,statisticType:n}=t,{value:a,orderBy:r}=e,o=this.fieldsIndex.get(s);return U(i,{value:a,orderBy:r,fieldType:null==o?void 0:o.type,isDiscrete:"percentile_disc"===n})}_getAttributeValues(t,i,s){if(s.has(i))return s.get(i);const e=this.fieldsIndex.get(i),n=this.items.map((s=>t.getFieldValue(s,i,e)));return s.set(i,n),n}_getAttributeNormalizedValues(t,i){return this.items.map((s=>t.getNormalizedValue(s,{field:i.field,fieldInfo:this.fieldsIndex.get(i.field),normalizationField:i.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(i.normalizationField),normalizationType:i.normalizationType,normalizationTotal:i.normalizationTotal})))}async _getAttributeExpressionValues(t,i,s){const{arcadeUtils:e}=await h(),n=e.createFunction(i),a=s&&e.getViewInfo(s);return this.items.map((i=>t.getExpressionValue(i,{compiledFunc:n,viewInfo:a},e)))}_calculateUniqueValues(t,i){const s={},e=this.items,n=e.length;for(let a=0;a<n;a++){const n=e[a],r=[];for(const i of t)r.push(i[a]);const o=r.join(",");i?null==s[o]&&(s[o]={count:1,data:r,items:[n],itemPositions:[a]}):null==s[o]?s[o]={count:1,data:r,items:[n],itemPositions:[a]}:(s[o].count++,s[o].items.push(n),s[o].itemPositions.push(a))}return s}async _getDataValues(t,i){const s=new dt(t,this.featureAdapter,this.fieldsIndex),{valueExpression:e,field:n,normalizationField:a,normalizationType:r,normalizationTotal:o,scale:h}=i;return e?this._getAttributeExpressionValues(s,e,e?{viewingMode:"map",scale:h,spatialReference:t.outSR||this.spatialReference}:null):this._getAttributeNormalizedValues(s,{field:n,normalizationField:a,normalizationType:r,normalizationTotal:o})}}function pt(t,i,s,e,n,a){const r=n-s,o=a-e,h=Math.min(1,Math.max(0,((t-s)*r+(i-e)*o)/(r*r+o*o)));return{x:s+r*h,y:e+o*h}}const yt="feature-store:unsupported-query",wt=new Set,xt=new l(2e6);let gt=0;class Ft{constructor(t){this.capabilities={query:Q},this.geometryType=t.geometryType,this.hasM=t.hasM,this.hasZ=t.hasZ,this.objectIdField=t.objectIdField,this.spatialReference=t.spatialReference,this.definitionExpression=t.definitionExpression,this.featureStore=t.featureStore,this.aggregateAdapter=t.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(()=>this.clearCache())),this.timeInfo=t.timeInfo,t.cacheSpatialQueries&&(this._geometryQueryCache=new u(gt+++"$$",xt)),this.fieldsIndex=new c(t.fields),t.scheduler&&t.priority&&(this._frameTask=t.scheduler.registerTask(t.priority))}destroy(){this._frameTask=f(this._frameTask),this.clearCache(),d(this._geometryQueryCache),this._changeHandle=f(this._changeHandle),d(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const t=this.featureStore.fullBounds;return t?{xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:$(this.spatialReference)}:null}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=X(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){this._geometryQueryCache&&this._geometryQueryCache.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(t={},i){let s,e=m(t);try{e=await this._schedule((()=>H(e,this.definitionExpression,this.spatialReference)),i),e=await this._reschedule((()=>this._checkQuerySupport(e)),i),s=await this._reschedule((()=>this._executeGeometryQuery(e,i)),i),s=await this._reschedule((()=>s.executeAggregateIdsQuery(e)),i),s=await this._reschedule((()=>s.executeObjectIdsQuery(e)),i),s=await this._reschedule((()=>s.executeTimeQuery(e)),i),s=await this._reschedule((()=>s.executeAttributesQuery(e)),i)}catch(t){if(t!==Y)throw t;s=new mt([],null,this)}return s.createQueryResponse(e)}async executeQueryForCount(t={},i){let s=m(t);s.returnGeometry=!1,s.returnCentroid=!1,s.outSR=null;try{s=await this._schedule((()=>H(s,this.definitionExpression,this.spatialReference)),i),s=await this._reschedule((()=>this._checkQuerySupport(s)),i);let t=await this._reschedule((()=>this._executeGeometryQuery(s,i)),i);return t=await this._reschedule((()=>t.executeAggregateIdsQuery(s)),i),t=await this._reschedule((()=>t.executeObjectIdsQuery(s)),i),t=await this._reschedule((()=>t.executeTimeQuery(s)),i),t=await this._reschedule((()=>t.executeAttributesQuery(s)),i),t.createQueryResponseForCount(s)}catch(t){if(t!==Y)throw t;return 0}}async executeQueryForExtent(t={},i){let s,e=m(t);const n=e.outSR;try{e=await this._schedule((()=>H(e,this.definitionExpression,this.spatialReference)),i),e=await this._reschedule((()=>this._checkQuerySupport(e)),i),e.returnGeometry=!0,e.returnCentroid=!1,e.outSR=null,s=await this._reschedule((()=>this._executeGeometryQuery(e,i)),i),s=await this._reschedule((()=>s.executeAggregateIdsQuery(e)),i),s=await this._reschedule((()=>s.executeObjectIdsQuery(e)),i),s=await this._reschedule((()=>s.executeTimeQuery(e)),i),s=await this._reschedule((()=>s.executeAttributesQuery(e)),i);const t=s.size;if(!t)return{count:t,extent:null};p(vt,y),this.featureStore.forEachBounds(s.items,(t=>w(vt,t)),St);const a={xmin:vt[0],ymin:vt[1],xmax:vt[3],ymax:vt[4],spatialReference:$(this.spatialReference)};this.hasZ&&isFinite(vt[2])&&isFinite(vt[5])&&(a.zmin=vt[2],a.zmax=vt[5]);const r=V(a,s.spatialReference,n);if(r.spatialReference=$(n||this.spatialReference),r.xmax-r.xmin==0){const t=x(r.spatialReference);r.xmin-=t,r.xmax+=t}if(r.ymax-r.ymin==0){const t=x(r.spatialReference);r.ymin-=t,r.ymax+=t}if(this.hasZ&&null!=r.zmin&&null!=r.zmax&&r.zmax-r.zmin==0){const t=x(r.spatialReference);r.zmin-=t,r.zmax+=t}return{count:t,extent:r}}catch(t){if(t===Y)return{count:0,extent:null};throw t}}async executeQueryForIds(t={},i){return this.executeQueryForIdSet(t,i).then((t=>Array.from(t)))}async executeQueryForIdSet(t={},i){let s,e=m(t);e.returnGeometry=!1,e.returnCentroid=!1,e.outSR=null;try{e=await this._schedule((()=>H(e,this.definitionExpression,this.spatialReference)),i),e=await this._reschedule((()=>this._checkQuerySupport(e)),i),s=await this._reschedule((()=>this._executeGeometryQuery(e,i)),i),s=await this._reschedule((()=>s.executeAggregateIdsQuery(e)),i),s=await this._reschedule((()=>s.executeObjectIdsQuery(e)),i),s=await this._reschedule((()=>s.executeTimeQuery(e)),i),s=await this._reschedule((()=>s.executeAttributesQuery(e)),i);const t=s.items,n=new Set;return await this._reschedule((()=>{for(const i of t)n.add(s.featureAdapter.getObjectId(i))}),i),n}catch(t){if(t===Y)return new Set;throw t}}async executeQueryForSnapping(t,i){const{point:e,distance:a,types:r}=t;if(0===r)return{candidates:[]};const o=await this._reschedule((()=>this._checkQuerySupport(t.query)),i),h=!n(e.spatialReference,this.spatialReference);h&&await E(e.spatialReference,this.spatialReference);const l="number"==typeof a?a:a.x,u="number"==typeof a?a:a.y,c={xmin:e.x-l,xmax:e.x+l,ymin:e.y-u,ymax:e.y+u,spatialReference:e.spatialReference},f=h?V(c,this.spatialReference):c;if(!f)return{candidates:[]};const d=(await g(F(e),null,{signal:i}))[0],m=(await g(F(f),null,{signal:i}))[0];if(s(d)||s(m))return{candidates:[]};let p=new mt(this._searchFeatures(this._getQueryBBoxes(m.toJSON())),null,this);p=await this._reschedule((()=>p.executeObjectIdsQuery(o)),i),p=await this._reschedule((()=>p.executeTimeQuery(o)),i),p=await this._reschedule((()=>p.executeAttributesQuery(o)),i);const y=d.toJSON(),w=h?V(y,this.spatialReference):y,x=h?Math.max(f.xmax-f.xmin,f.ymax-f.ymin)/2:a;return p.createSnappingResponse({...t,point:w,distance:x},e.spatialReference)}async executeQueryForLatestObservations(t={},s){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new i(yt,"Missing timeInfo or timeInfo.trackIdField",{query:t,timeInfo:this.timeInfo});let e,n=m(t);try{n=await this._schedule((()=>H(n,this.definitionExpression,this.spatialReference)),s),n=await this._reschedule((()=>this._checkQuerySupport(n)),s),e=await this._reschedule((()=>this._executeGeometryQuery(n,s)),s),e=await this._reschedule((()=>e.executeAggregateIdsQuery(n)),s),e=await this._reschedule((()=>e.executeObjectIdsQuery(n)),s),e=await this._reschedule((()=>e.executeTimeQuery(n)),s),e=await this._reschedule((()=>e.executeAttributesQuery(n)),s),e=await this._reschedule((()=>e.filterLatest()),s)}catch(t){if(t!==Y)throw t;e=new mt([],null,this)}return e.createQueryResponse(n)}async executeQueryForSummaryStatistics(t={},i,s){const{field:e,normalizationField:n,valueExpression:a}=i;return(await this._getQueryEngineResultForStats(t,{field:e,normalizationField:n,valueExpression:a},s)).createSummaryStatisticsResponse(t,i)}async executeQueryForUniqueValues(t={},i,s){const{field:e,valueExpression:n}=i;return(await this._getQueryEngineResultForStats(t,{field:e,valueExpression:n},s)).createUniqueValuesResponse(t,i)}async executeQueryForClassBreaks(t={},i,s){const{field:e,normalizationField:n,valueExpression:a}=i;return(await this._getQueryEngineResultForStats(t,{field:e,normalizationField:n,valueExpression:a},s)).createClassBreaksResponse(t,i)}async _schedule(t,i){return a(this._frameTask)?this._frameTask.schedule(t,i):t(S)}async _reschedule(t,i){return a(this._frameTask)?this._frameTask.reschedule(t,i):t(S)}_getAll(){if(!this._allItems){const t=[];this.featureStore.forEach((i=>t.push(i))),this._allItems=new mt(t,null,this)}return this._allItems}async _executeGeometryQuery(t,i){const{geometry:s,outSR:a,spatialRel:r,returnGeometry:o,returnCentroid:h}=t,l=o||h,u=e(a)&&!n(this.spatialReference,a),c=this._geometryQueryCache?u&&l?JSON.stringify({geometry:s,spatialRelationship:r,outSpatialReference:a}):JSON.stringify({geometry:s,spatialRelationship:r}):null;if(c){const t=this._geometryQueryCache.get(c);if(!v(t))return t}const f=async t=>{if(u&&l){const i=await t.project(a);return c&&this._geometryQueryCache.put(c,i,i.size||1),i}return c&&this._geometryQueryCache.put(c,t,t.size||1),t};if(!s)return f(this._getAll());const d=this.featureAdapter;if("esriSpatialRelDisjoint"===r){const t=this._searchFeatures(this._getQueryBBoxes(s));if(!t.length)return f(this._getAll());let e,n;const a=new Set;for(const i of t)a.add(d.getObjectId(i));return await this._reschedule((()=>{let t=0;e=new Array(a.size),this.featureStore.forEach((i=>e[t++]=i)),n=a}),i),f(await this._reschedule((async()=>{const t=await K(r,s,this.geometryType,this.hasZ,this.hasM);return new mt(await this._runSpatialFilter(e,(i=>!n.has(d.getObjectId(i))||t(d.getGeometry(i))),i),s,this)}),i))}const m=this._searchFeatures(this._getQueryBBoxes(s));if(!m.length){const t=new mt([],s,this);return c&&this._geometryQueryCache.put(c,t,t.size||1),t}if(this._canExecuteSoloPass(s,t))return f(new mt(m,s,this));const p=await K(r,s,this.geometryType,this.hasZ,this.hasM),y=await this._runSpatialFilter(m,(t=>p(d.getGeometry(t))),i);return f(new mt(y,s,this))}async _runSpatialFilter(t,i,e){if(!i)return t;if(s(this._frameTask))return t.filter((t=>i(t)));let n=0;const a=new Array,r=async s=>{for(;n<t.length;){const o=t[n++];i(o)&&(a.push(o),s.madeProgress()),s.done&&await this._reschedule((t=>r(t)),e)}};return this._reschedule((t=>r(t)),e).then((()=>a))}_canExecuteSoloPass(t,i){const{geometryType:s}=this,{spatialRel:e}=i;return tt(t)&&("esriSpatialRelEnvelopeIntersects"===e||"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e||"esriSpatialRelWithin"===e))}_getQueryBBoxes(t){if(tt(t)){if(T(t))return[b(t.xmin,t.ymin,t.xmax,t.ymax)];if(z(t))return t.rings.map((t=>b(Math.min(t[0][0],t[2][0]),Math.min(t[0][1],t[2][1]),Math.max(t[0][0],t[2][0]),Math.max(t[0][1],t[2][1]))))}return[_(R(),t)]}_searchFeatures(t){for(const i of t)this.featureStore.forEachInBounds(i,(t=>{wt.add(t)}));const i=new Array(wt.size);let s=0;return wt.forEach((t=>i[s++]=t)),wt.clear(),i}async _checkStatisticsSupport(t,s){if(t.distance<0||null!=t.geometryPrecision||t.multipatchOption||t.pixelSize||t.relationParam||t.text||t.outStatistics||t.groupByFieldsForStatistics||t.having||t.orderByFields)throw new i(yt,"Unsupported query options",{query:t});return Promise.all([this._checkAttributesQuerySupport(t),this._checkStatisticsParamsSupport(s),it(t,this.geometryType,this.spatialReference),E(this.spatialReference,t.outSR)]).then((()=>t))}async _checkStatisticsParamsSupport(t){let s=[];if(t.valueExpression){const{arcadeUtils:i}=await h();s=i.extractFieldNames(t.valueExpression)}if(t.field&&s.push(t.field),t.normalizationField&&s.push(t.normalizationField),!s.length)throw new i(yt,"params should have at least a field or valueExpression",{params:t});lt(this.fieldsIndex,s,"params contains missing fields")}async _checkQuerySupport(t){if(t.distance<0||null!=t.geometryPrecision||t.multipatchOption||t.pixelSize||t.relationParam||t.text)throw new i(yt,"Unsupported query options",{query:t});return Promise.all([this._checkAttributesQuerySupport(t),this._checkStatisticsQuerySupport(t),it(t,this.geometryType,this.spatialReference),E(this.spatialReference,t.outSR)]).then((()=>t))}_checkAttributesQuerySupport(t){const{outFields:s,orderByFields:e,returnDistinctValues:n,outStatistics:a}=t,r=a?a.map((t=>t.outStatisticFieldName&&t.outStatisticFieldName.toLowerCase())):[];if(e&&e.length>0){const t=" asc",i=" desc",s=e.map((s=>{const e=s.toLowerCase();return e.indexOf(t)>-1?e.split(t)[0]:e.indexOf(i)>-1?e.split(i)[0]:s})).filter((t=>-1===r.indexOf(t)));lt(this.fieldsIndex,s,"orderByFields contains missing fields")}if(s&&s.length>0)lt(this.fieldsIndex,s,"outFields contains missing fields");else if(n)throw new i(yt,"outFields should be specified for returnDistinctValues",{query:t});rt(this.fieldsIndex,t.where)}async _checkStatisticsQuerySupport(t){const{outStatistics:s,groupByFieldsForStatistics:e,having:n}=t,a=e&&e.length,r=s&&s.length;if(n){if(!a||!r)throw new i(yt,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:t});ot(this.fieldsIndex,n,s)}if(r){if(!function(t){return t.every((t=>"exceedslimit"!==t.statisticType))}(s))return;const n=s.map((t=>t.onStatisticField));lt(this.fieldsIndex,n,"onStatisticFields contains missing fields"),a&&lt(this.fieldsIndex,e,"groupByFieldsForStatistics contains missing fields");for(const e of s){const{onStatisticField:s,statisticType:n}=e;if("percentile_disc"!==n&&"percentile_cont"!==n||!("statisticParameters"in e)){if("count"!==n&&s&&ft(s,this.fieldsIndex))throw new i(yt,"outStatistics contains non-numeric fields",{definition:e,query:t})}else{const{statisticParameters:s}=e;if(!s)throw new i(yt,"statisticParamters should be set for percentile type",{definition:e,query:t})}}}}async _getQueryEngineResultForStats(t={},i,s){let e;t=m(t);try{t=await this._schedule((()=>H(t,this.definitionExpression,this.spatialReference)),s),t=await this._reschedule((()=>this._checkStatisticsSupport(t,i)),s),e=await this._reschedule((()=>this._executeGeometryQuery(t,s)),s),e=await this._reschedule((()=>e.executeAggregateIdsQuery(t)),s),e=await this._reschedule((()=>e.executeObjectIdsQuery(t)),s),e=await this._reschedule((()=>e.executeTimeQuery(t)),s),e=await this._reschedule((()=>e.executeAttributesQuery(t)),s)}catch(t){if(t!==Y)throw t;e=new mt([],null,this)}return e}}const St=P(),vt=P();export{Ft as V}