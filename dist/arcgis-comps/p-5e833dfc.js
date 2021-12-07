import{e,d as t,aT as i,i as r,a1 as s,a0 as o,aS as n,a2 as a,f as l,ah as u,am as d,ae as c,N as p,_ as h,D as y,a3 as v,A as m,aE as w,bk as S}from"./p-e58503d5.js";import{a as j,i as b}from"./p-b79fcce3.js";import{y as g}from"./p-7a5bfd29.js";import{r as f}from"./p-a9a30646.js";import{d as T}from"./p-c048b814.js";import{y as R}from"./p-a131049b.js";var x;let P=x=class extends s{constructor(e){super(e),this.type="map-layer"}clone(){const{mapLayerId:e,gdbVersion:t}=this;return new x({mapLayerId:e,gdbVersion:t})}};var F;e([f({mapLayer:"map-layer"})],P.prototype,"type",void 0),e([t({type:i,json:{write:!0}})],P.prototype,"mapLayerId",void 0),e([t({type:String,json:{write:!0}})],P.prototype,"gdbVersion",void 0),P=x=e([r("esri.layers.support.source.MapLayerSource")],P);let I=F=class extends s{constructor(e){super(e),this.type="query-table"}clone(){var e;const{workspaceId:t,query:i,oidFields:r,spatialReference:s,geometryType:o}=this,n={workspaceId:t,query:i,oidFields:r,spatialReference:null!=(e=null==s?void 0:s.clone())?e:void 0,geometryType:o};return new F(n)}};var N;e([f({queryTable:"query-table"})],I.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],I.prototype,"workspaceId",void 0),e([t({type:String,json:{write:!0}})],I.prototype,"query",void 0),e([t({type:String,json:{write:!0}})],I.prototype,"oidFields",void 0),e([t({type:o,json:{write:!0}})],I.prototype,"spatialReference",void 0),e([f(j)],I.prototype,"geometryType",void 0),I=F=e([r("esri.layers.support.source.QueryTableDataSource")],I);let D=N=class extends s{constructor(e){super(e),this.type="raster"}clone(){const{workspaceId:e,dataSourceName:t}=this;return new N({workspaceId:e,dataSourceName:t})}};var V;e([f({raster:"raster"})],D.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],D.prototype,"dataSourceName",void 0),e([t({type:String,json:{write:!0}})],D.prototype,"workspaceId",void 0),D=N=e([r("esri.layers.support.source.RasterDataSource")],D);let k=V=class extends s{constructor(e){super(e),this.type="table"}clone(){const{workspaceId:e,gdbVersion:t,dataSourceName:i}=this;return new V({workspaceId:e,gdbVersion:t,dataSourceName:i})}};var L,C;e([f({table:"table"})],k.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],k.prototype,"workspaceId",void 0),e([t({type:String,json:{write:!0}})],k.prototype,"gdbVersion",void 0),e([t({type:String,json:{write:!0}})],k.prototype,"dataSourceName",void 0),k=V=e([r("esri.layers.support.source.TableDataSource")],k);const M=n()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let B=L=class extends s{constructor(e){super(e),this.type="join-table"}readLeftTableSource(e,t,i){return O()(e,t,i)}castLeftTableSource(e){return c(_(),e)}readRightTableSource(e,t,i){return O()(e,t,i)}castRightTableSource(e){return c(_(),e)}clone(){var e,t;const{leftTableKey:i,rightTableKey:r,leftTableSource:s,rightTableSource:o,joinType:n}=this,a={leftTableKey:i,rightTableKey:r,leftTableSource:null!=(e=null==s?void 0:s.clone())?e:void 0,rightTableSource:null!=(t=null==o?void 0:o.clone())?t:void 0,joinType:n};return new L(a)}};e([f({joinTable:"join-table"})],B.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],B.prototype,"leftTableKey",void 0),e([t({type:String,json:{write:!0}})],B.prototype,"rightTableKey",void 0),e([t({json:{write:!0}})],B.prototype,"leftTableSource",void 0),e([a("leftTableSource")],B.prototype,"readLeftTableSource",null),e([l("leftTableSource")],B.prototype,"castLeftTableSource",null),e([t({json:{write:!0}})],B.prototype,"rightTableSource",void 0),e([a("rightTableSource")],B.prototype,"readRightTableSource",null),e([l("rightTableSource")],B.prototype,"castRightTableSource",null),e([f(M)],B.prototype,"joinType",void 0),B=L=e([r("esri.layers.support.source.JoinTableDataSource")],B);let q=null;function O(){return q||(q=d({types:_()})),q}let U=null;function _(){return U||(U={key:"type",base:null,typeMap:{"data-layer":E,"map-layer":P}}),U}const K={key:"type",base:null,typeMap:{"join-table":B,"query-table":I,raster:D,table:k}};let E=C=class extends s{constructor(e){super(e),this.type="data-layer"}clone(){const{fields:e,dataSource:t}=this;return new C({fields:e,dataSource:t})}};var z;e([f({dataLayer:"data-layer"})],E.prototype,"type",void 0),e([t({type:[R],json:{write:!0}})],E.prototype,"fields",void 0),e([t({types:K,json:{write:!0}})],E.prototype,"dataSource",void 0),E=C=e([r("esri.layers.support.source.DataLayerSource")],E),E.from=u(E);const Q=new p({upperLeft:"upper-left",lowerLeft:"lower-left"});let A=z=class extends s{constructor(e){super(e),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new z(y({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};e([t({type:h,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],A.prototype,"extent",void 0),e([t({type:["view","edit"],json:{write:!0}})],A.prototype,"mode",void 0),e([t({type:String,json:{read:Q.read,write:Q.write}})],A.prototype,"originPosition",void 0),e([t({type:Number,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],A.prototype,"tolerance",void 0),A=z=e([r("esri.rest.support.QuantizationParameters")],A);const G=A;var H;const J=new p({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete"});let W=H=class extends s{constructor(e){super(e),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(e,t){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(t.statisticParameters=y(e))}clone(){return new H({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:y(this.statisticParameters)})}};e([t({type:Number,json:{write:!0}})],W.prototype,"maxPointCount",void 0),e([t({type:Number,json:{write:!0}})],W.prototype,"maxRecordCount",void 0),e([t({type:Number,json:{write:!0}})],W.prototype,"maxVertexCount",void 0),e([t({type:String,json:{write:!0}})],W.prototype,"onStatisticField",void 0),e([t({type:String,json:{write:!0}})],W.prototype,"outStatisticFieldName",void 0),e([t({type:String,json:{read:{source:"statisticType",reader:J.read},write:{target:"statisticType",writer:J.write}}})],W.prototype,"statisticType",void 0),e([t({type:Object})],W.prototype,"statisticParameters",void 0),e([v("statisticParameters")],W.prototype,"writeStatisticParameters",null),W=H=e([r("esri.rest.support.StatisticDefinition")],W);const Z=W;var X;const Y=new p({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),$=new p({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let ee=X=class extends s{constructor(e){super(e),this.aggregateIds=null,this.cacheHint=void 0,this.datumTransformation=null,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}static from(e){return S(X,e)}castDatumTransformation(e){return"number"==typeof e||"object"==typeof e?e:null}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeParameterValues(e,t){if(e){const i={};for(const t in e){const r=e[t];i[t]=Array.isArray(r)?r.map((e=>e instanceof Date?e.getTime():e)):r instanceof Date?r.getTime():r}t.parameterValues=i}}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"}writeWhere(e,t){t.where=e||"1=1"}clone(){return new X(y({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:m(this.historicMoment)?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};ee.MAX_MAX_RECORD_COUNT_FACTOR=5,e([t({json:{write:!0}})],ee.prototype,"aggregateIds",void 0),e([t({type:Boolean,json:{write:!0}})],ee.prototype,"cacheHint",void 0),e([t({json:{write:!0}})],ee.prototype,"datumTransformation",void 0),e([l("datumTransformation")],ee.prototype,"castDatumTransformation",null),e([t({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],ee.prototype,"distance",void 0),e([t({type:E,json:{write:!0}})],ee.prototype,"dynamicDataSource",void 0),e([t({type:String,json:{write:!0}})],ee.prototype,"formatOf3DObjects",void 0),e([t({type:String,json:{write:!0}})],ee.prototype,"gdbVersion",void 0),e([t({types:b,json:{read:T,write:!0}})],ee.prototype,"geometry",void 0),e([t({type:Number,json:{write:!0}})],ee.prototype,"geometryPrecision",void 0),e([t({type:[String],json:{write:!0}})],ee.prototype,"groupByFieldsForStatistics",void 0),e([t({type:String,json:{write:!0}})],ee.prototype,"having",void 0),e([t({type:Date})],ee.prototype,"historicMoment",void 0),e([v("historicMoment")],ee.prototype,"writeHistoricMoment",null),e([t({type:Number,json:{write:!0}})],ee.prototype,"maxAllowableOffset",void 0),e([t({type:Number,cast:e=>e<1?1:e>X.MAX_MAX_RECORD_COUNT_FACTOR?X.MAX_MAX_RECORD_COUNT_FACTOR:e,json:{write:{overridePolicy:e=>({enabled:e>1})}}})],ee.prototype,"maxRecordCountFactor",void 0),e([t({type:["xyFootprint"],json:{write:!0}})],ee.prototype,"multipatchOption",void 0),e([t({type:Number,json:{read:{source:"resultRecordCount"}}})],ee.prototype,"num",void 0),e([t({json:{write:!0}})],ee.prototype,"objectIds",void 0),e([t({type:[String],json:{write:!0}})],ee.prototype,"orderByFields",void 0),e([t({type:[String],json:{write:!0}})],ee.prototype,"outFields",void 0),e([t({type:o,json:{name:"outSR",write:!0}})],ee.prototype,"outSpatialReference",void 0),e([t({type:[Z],json:{write:{enabled:!0,overridePolicy(){return{enabled:m(this.outStatistics)&&this.outStatistics.length>0}}}}})],ee.prototype,"outStatistics",void 0),e([t({json:{write:!0}})],ee.prototype,"parameterValues",void 0),e([v("parameterValues")],ee.prototype,"writeParameterValues",null),e([t({type:w,json:{write:!0}})],ee.prototype,"pixelSize",void 0),e([t({type:G,json:{write:!0}})],ee.prototype,"quantizationParameters",void 0),e([t({type:[Object],json:{write:!0}})],ee.prototype,"rangeValues",void 0),e([t({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],ee.prototype,"relationParameter",void 0),e([t({type:String,json:{write:!0}})],ee.prototype,"resultType",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],ee.prototype,"returnCentroid",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],ee.prototype,"returnDistinctValues",void 0),e([t({type:Boolean,json:{default:!0,write:!0}})],ee.prototype,"returnExceededLimitFeatures",void 0),e([t({type:Boolean,json:{write:!0}})],ee.prototype,"returnGeometry",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],ee.prototype,"returnQueryGeometry",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],ee.prototype,"returnM",void 0),e([t({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],ee.prototype,"returnZ",void 0),e([t({type:o,json:{write:!0}})],ee.prototype,"sourceSpatialReference",void 0),e([f(Y,{ignoreUnknown:!1,name:"spatialRel"})],ee.prototype,"spatialRelationship",void 0),e([t({type:Number,json:{read:{source:"resultOffset"}}})],ee.prototype,"start",void 0),e([v("start"),v("num")],ee.prototype,"writeStart",null),e([t({type:String,json:{write:!0}})],ee.prototype,"sqlFormat",void 0),e([t({type:String,json:{write:!0}})],ee.prototype,"text",void 0),e([t({type:g,json:{write:!0}})],ee.prototype,"timeExtent",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],ee.prototype,"timeReferenceUnknownClient",void 0),e([f($,{ignoreUnknown:!1}),t({json:{write:{overridePolicy(e){return{enabled:e&&this.distance>0}}}}})],ee.prototype,"units",void 0),e([t({type:String,json:{write:{overridePolicy(e){return{enabled:null!=e||this.start>0}}}}})],ee.prototype,"where",void 0),e([v("where")],ee.prototype,"writeWhere",null),ee=X=e([r("esri.rest.support.Query")],ee);const te=ee;export{E as K,G as a,te as b,P as c,Z as m}