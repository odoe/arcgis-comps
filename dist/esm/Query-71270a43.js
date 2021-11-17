import { e, d, R as S$1, i, aT as s, c as c$4, W as b$1, ad as u, a6 as N, P as o$1, H as l, r as r$2, bp as v$2 } from './messageBundle-8a146a9b.js';
import { f as r, k, aB as i$1, o, M, d as r$1, G as i$2, I as d$1, E as b$2 } from './unitUtils-c707ba3c.js';
import { y as y$1 } from './TimeExtent-16986fe0.js';
import { a as a$5 } from './JSONSupport-4e29e63d.js';
import { y } from './Field-fbfaf20d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$4;let c$3=a$4=class extends a$5{constructor(r){super(r),this.type="map-layer";}clone(){const{mapLayerId:r,gdbVersion:o}=this;return new a$4({mapLayerId:r,gdbVersion:o})}};e([r({mapLayer:"map-layer"})],c$3.prototype,"type",void 0),e([d({type:S$1,json:{write:!0}})],c$3.prototype,"mapLayerId",void 0),e([d({type:String,json:{write:!0}})],c$3.prototype,"gdbVersion",void 0),c$3=a$4=e([i("esri.layers.support.source.MapLayerSource")],c$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$2;let a$3=c$2=class extends a$5{constructor(e){super(e),this.type="query-table";}clone(){var e;const{workspaceId:r,query:o,oidFields:t,spatialReference:p,geometryType:s}=this,i={workspaceId:r,query:o,oidFields:t,spatialReference:null!=(e=null==p?void 0:p.clone())?e:void 0,geometryType:s};return new c$2(i)}};e([r({queryTable:"query-table"})],a$3.prototype,"type",void 0),e([d({type:String,json:{write:!0}})],a$3.prototype,"workspaceId",void 0),e([d({type:String,json:{write:!0}})],a$3.prototype,"query",void 0),e([d({type:String,json:{write:!0}})],a$3.prototype,"oidFields",void 0),e([d({type:k,json:{write:!0}})],a$3.prototype,"spatialReference",void 0),e([r(i$1)],a$3.prototype,"geometryType",void 0),a$3=c$2=e([i("esri.layers.support.source.QueryTableDataSource")],a$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$2;let a$2=p$2=class extends a$5{constructor(r){super(r),this.type="raster";}clone(){const{workspaceId:r,dataSourceName:o}=this;return new p$2({workspaceId:r,dataSourceName:o})}};e([r({raster:"raster"})],a$2.prototype,"type",void 0),e([d({type:String,json:{write:!0}})],a$2.prototype,"dataSourceName",void 0),e([d({type:String,json:{write:!0}})],a$2.prototype,"workspaceId",void 0),a$2=p$2=e([i("esri.layers.support.source.RasterDataSource")],a$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$1;let a$1=p$1=class extends a$5{constructor(r){super(r),this.type="table";}clone(){const{workspaceId:r,gdbVersion:o,dataSourceName:e}=this;return new p$1({workspaceId:r,gdbVersion:o,dataSourceName:e})}};e([r({table:"table"})],a$1.prototype,"type",void 0),e([d({type:String,json:{write:!0}})],a$1.prototype,"workspaceId",void 0),e([d({type:String,json:{write:!0}})],a$1.prototype,"gdbVersion",void 0),e([d({type:String,json:{write:!0}})],a$1.prototype,"dataSourceName",void 0),a$1=p$1=e([i("esri.layers.support.source.TableDataSource")],a$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var f,m$2;const j=s()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let T=f=class extends a$5{constructor(e){super(e),this.type="join-table";}readLeftTableSource(e,r,o){return v$1()(e,r,o)}castLeftTableSource(e){return N(L(),e)}readRightTableSource(e,r,o){return v$1()(e,r,o)}castRightTableSource(e){return N(L(),e)}clone(){var e,r;const{leftTableKey:o,rightTableKey:t,leftTableSource:a,rightTableSource:s,joinType:l}=this,p={leftTableKey:o,rightTableKey:t,leftTableSource:null!=(e=null==a?void 0:a.clone())?e:void 0,rightTableSource:null!=(r=null==s?void 0:s.clone())?r:void 0,joinType:l};return new f(p)}};e([r({joinTable:"join-table"})],T.prototype,"type",void 0),e([d({type:String,json:{write:!0}})],T.prototype,"leftTableKey",void 0),e([d({type:String,json:{write:!0}})],T.prototype,"rightTableKey",void 0),e([d({json:{write:!0}})],T.prototype,"leftTableSource",void 0),e([o("leftTableSource")],T.prototype,"readLeftTableSource",null),e([c$4("leftTableSource")],T.prototype,"castLeftTableSource",null),e([d({json:{write:!0}})],T.prototype,"rightTableSource",void 0),e([o("rightTableSource")],T.prototype,"readRightTableSource",null),e([c$4("rightTableSource")],T.prototype,"castRightTableSource",null),e([r(j)],T.prototype,"joinType",void 0),T=f=e([i("esri.layers.support.source.JoinTableDataSource")],T);let h=null;function v$1(){return h||(h=u({types:L()})),h}let g$1=null;function L(){return g$1||(g$1={key:"type",base:null,typeMap:{"data-layer":K,"map-layer":c$3}}),g$1}const w={key:"type",base:null,typeMap:{"join-table":T,"query-table":a$3,raster:a$2,table:a$1}};let K=m$2=class extends a$5{constructor(e){super(e),this.type="data-layer";}clone(){const{fields:e,dataSource:r}=this;return new m$2({fields:e,dataSource:r})}};e([r({dataLayer:"data-layer"})],K.prototype,"type",void 0),e([d({type:[y],json:{write:!0}})],K.prototype,"fields",void 0),e([d({types:w,json:{write:!0}})],K.prototype,"dataSource",void 0),K=m$2=e([i("esri.layers.support.source.DataLayerSource")],K),K.from=b$1(K);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n$1;const c$1=new o$1({upperLeft:"upper-left",lowerLeft:"lower-left"});let m$1=n$1=class extends a$5{constructor(e){super(e),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1;}clone(){return new n$1(l({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};e([d({type:M,json:{write:{overridePolicy(){return {enabled:"view"===this.mode}}}}})],m$1.prototype,"extent",void 0),e([d({type:["view","edit"],json:{write:!0}})],m$1.prototype,"mode",void 0),e([d({type:String,json:{read:c$1.read,write:c$1.write}})],m$1.prototype,"originPosition",void 0),e([d({type:Number,json:{write:{overridePolicy(){return {enabled:"view"===this.mode}}}}})],m$1.prototype,"tolerance",void 0),m$1=n$1=e([i("esri.rest.support.QuantizationParameters")],m$1);const a=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c;const n=new o$1({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete"});let p=c=class extends a$5{constructor(t){super(t),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null;}writeStatisticParameters(t,e){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(e.statisticParameters=l(t));}clone(){return new c({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:l(this.statisticParameters)})}};e([d({type:Number,json:{write:!0}})],p.prototype,"maxPointCount",void 0),e([d({type:Number,json:{write:!0}})],p.prototype,"maxRecordCount",void 0),e([d({type:Number,json:{write:!0}})],p.prototype,"maxVertexCount",void 0),e([d({type:String,json:{write:!0}})],p.prototype,"onStatisticField",void 0),e([d({type:String,json:{write:!0}})],p.prototype,"outStatisticFieldName",void 0),e([d({type:String,json:{read:{source:"statisticType",reader:n.read},write:{target:"statisticType",writer:n.write}}})],p.prototype,"statisticType",void 0),e([d({type:Object})],p.prototype,"statisticParameters",void 0),e([r$1("statisticParameters")],p.prototype,"writeStatisticParameters",null),p=c=e([i("esri.rest.support.StatisticDefinition")],p);const m=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var S;const v=new o$1({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),g=new o$1({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let R=S=class extends a$5{constructor(t){super(t),this.aggregateIds=null,this.cacheHint=void 0,this.datumTransformation=null,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null;}static from(t){return v$2(S,t)}castDatumTransformation(t){return "number"==typeof t||"object"==typeof t?t:null}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime();}writeParameterValues(t,e){if(t){const r={};for(const e in t){const i=t[e];Array.isArray(i)?r[e]=i.map((t=>t instanceof Date?t.getTime():t)):i instanceof Date?r[e]=i.getTime():r[e]=i;}e.parameterValues=r;}}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,e.where="1=1";}writeWhere(t,e){e.where=t||"1=1";}clone(){return new S(l({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:r$2(this.historicMoment)?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};R.MAX_MAX_RECORD_COUNT_FACTOR=5,e([d({json:{write:!0}})],R.prototype,"aggregateIds",void 0),e([d({type:Boolean,json:{write:!0}})],R.prototype,"cacheHint",void 0),e([d({json:{write:!0}})],R.prototype,"datumTransformation",void 0),e([c$4("datumTransformation")],R.prototype,"castDatumTransformation",null),e([d({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],R.prototype,"distance",void 0),e([d({type:K,json:{write:!0}})],R.prototype,"dynamicDataSource",void 0),e([d({type:String,json:{write:!0}})],R.prototype,"formatOf3DObjects",void 0),e([d({type:String,json:{write:!0}})],R.prototype,"gdbVersion",void 0),e([d({types:i$2,json:{read:d$1,write:!0}})],R.prototype,"geometry",void 0),e([d({type:Number,json:{write:!0}})],R.prototype,"geometryPrecision",void 0),e([d({type:[String],json:{write:!0}})],R.prototype,"groupByFieldsForStatistics",void 0),e([d({type:String,json:{write:!0}})],R.prototype,"having",void 0),e([d({type:Date})],R.prototype,"historicMoment",void 0),e([r$1("historicMoment")],R.prototype,"writeHistoricMoment",null),e([d({type:Number,json:{write:!0}})],R.prototype,"maxAllowableOffset",void 0),e([d({type:Number,cast:t=>t<1?1:t>S.MAX_MAX_RECORD_COUNT_FACTOR?S.MAX_MAX_RECORD_COUNT_FACTOR:t,json:{write:{overridePolicy:t=>({enabled:t>1})}}})],R.prototype,"maxRecordCountFactor",void 0),e([d({type:["xyFootprint"],json:{write:!0}})],R.prototype,"multipatchOption",void 0),e([d({type:Number,json:{read:{source:"resultRecordCount"}}})],R.prototype,"num",void 0),e([d({json:{write:!0}})],R.prototype,"objectIds",void 0),e([d({type:[String],json:{write:!0}})],R.prototype,"orderByFields",void 0),e([d({type:[String],json:{write:!0}})],R.prototype,"outFields",void 0),e([d({type:k,json:{name:"outSR",write:!0}})],R.prototype,"outSpatialReference",void 0),e([d({type:[m],json:{write:{enabled:!0,overridePolicy(){return {enabled:r$2(this.outStatistics)&&this.outStatistics.length>0}}}}})],R.prototype,"outStatistics",void 0),e([d({json:{write:!0}})],R.prototype,"parameterValues",void 0),e([r$1("parameterValues")],R.prototype,"writeParameterValues",null),e([d({type:b$2,json:{write:!0}})],R.prototype,"pixelSize",void 0),e([d({type:a,json:{write:!0}})],R.prototype,"quantizationParameters",void 0),e([d({type:[Object],json:{write:!0}})],R.prototype,"rangeValues",void 0),e([d({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return {enabled:"relation"===this.spatialRelationship}}}}})],R.prototype,"relationParameter",void 0),e([d({type:String,json:{write:!0}})],R.prototype,"resultType",void 0),e([d({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnCentroid",void 0),e([d({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnDistinctValues",void 0),e([d({type:Boolean,json:{default:!0,write:!0}})],R.prototype,"returnExceededLimitFeatures",void 0),e([d({type:Boolean,json:{write:!0}})],R.prototype,"returnGeometry",void 0),e([d({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnQueryGeometry",void 0),e([d({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnM",void 0),e([d({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],R.prototype,"returnZ",void 0),e([d({type:k,json:{write:!0}})],R.prototype,"sourceSpatialReference",void 0),e([r(v,{ignoreUnknown:!1,name:"spatialRel"})],R.prototype,"spatialRelationship",void 0),e([d({type:Number,json:{read:{source:"resultOffset"}}})],R.prototype,"start",void 0),e([r$1("start"),r$1("num")],R.prototype,"writeStart",null),e([d({type:String,json:{write:!0}})],R.prototype,"sqlFormat",void 0),e([d({type:String,json:{write:!0}})],R.prototype,"text",void 0),e([d({type:y$1,json:{write:!0}})],R.prototype,"timeExtent",void 0),e([d({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"timeReferenceUnknownClient",void 0),e([r(g,{ignoreUnknown:!1}),d({json:{write:{overridePolicy(t){return {enabled:t&&this.distance>0}}}}})],R.prototype,"units",void 0),e([d({type:String,json:{write:{overridePolicy(t){return {enabled:null!=t||this.start>0}}}}})],R.prototype,"where",void 0),e([r$1("where")],R.prototype,"writeWhere",null),R=S=e([i("esri.rest.support.Query")],R);const b=R;

export { K, a, b, c$3 as c, m };
