import { e as e$1, d as d$1, a3 as r, i as i$1, ah as b, a1 as a$1, D as l$1, a0 as k, N as o } from './messageBundle-f75b4090.js';
import { i as i$2 } from './geometry-7e07b1ba.js';
import { K } from './Query-d6335b3a.js';
import { y as y$1 } from './TimeExtent-a024c0d8.js';
import { d as d$2 } from './jsonUtils-13b1f6fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a;let p$1=a=class extends a$1{constructor(t){super(t),this.attachmentTypes=null,this.attachmentsWhere=null,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null;}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10;}clone(){return new a(l$1({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};e$1([d$1({type:[String],json:{write:!0}})],p$1.prototype,"attachmentTypes",void 0),e$1([d$1({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],p$1.prototype,"attachmentsWhere",void 0),e$1([d$1({type:[String],json:{write:!0}})],p$1.prototype,"keywords",void 0),e$1([d$1({type:[Number],json:{write:!0}})],p$1.prototype,"globalIds",void 0),e$1([d$1({json:{write:!0}})],p$1.prototype,"name",void 0),e$1([d$1({type:Number,json:{read:{source:"resultRecordCount"}}})],p$1.prototype,"num",void 0),e$1([d$1({type:[Number],json:{write:!0}})],p$1.prototype,"objectIds",void 0),e$1([d$1({type:Boolean,json:{default:!1,write:!0}})],p$1.prototype,"returnMetadata",void 0),e$1([d$1({type:[Number],json:{write:!0}})],p$1.prototype,"size",void 0),e$1([d$1({type:Number,json:{read:{source:"resultOffset"}}})],p$1.prototype,"start",void 0),e$1([r("start"),r("num")],p$1.prototype,"writeStart",null),e$1([d$1({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],p$1.prototype,"where",void 0),p$1=a=e$1([i$1("esri.rest.support.AttachmentQuery")],p$1),p$1.from=b(p$1);const u$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u;let d=u=class extends a$1{constructor(t){super(t),this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null;}_writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime();}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(e.definitionExpression="1=1");}clone(){return new u(l$1({dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};e$1([d$1({type:K,json:{write:!0}})],d.prototype,"dynamicDataSource",void 0),e$1([d$1({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),e$1([d$1({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),e$1([d$1({type:Date})],d.prototype,"historicMoment",void 0),e$1([r("historicMoment")],d.prototype,"_writeHistoricMoment",null),e$1([d$1({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),e$1([d$1({type:[Number],json:{write:!0}})],d.prototype,"objectIds",void 0),e$1([d$1({type:[String],json:{write:!0}})],d.prototype,"orderByFields",void 0),e$1([d$1({type:[String],json:{write:!0}})],d.prototype,"outFields",void 0),e$1([d$1({type:k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],d.prototype,"outSpatialReference",void 0),e$1([d$1({json:{write:!0}})],d.prototype,"relationshipId",void 0),e$1([d$1({type:Number,json:{read:{source:"resultOffset"}}})],d.prototype,"start",void 0),e$1([r("start"),r("num")],d.prototype,"writeStart",null),e$1([d$1({type:Number,json:{read:{source:"resultRecordCount"}}})],d.prototype,"num",void 0),e$1([d$1({json:{write:!0}})],d.prototype,"returnGeometry",void 0),e$1([d$1({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],d.prototype,"returnM",void 0),e$1([d$1({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],d.prototype,"returnZ",void 0),e$1([d$1({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],d.prototype,"where",void 0),d=u=e$1([i$1("esri.rest.support.RelationshipQuery")],d),d.from=b(d);const l=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e;let p=e=class extends a$1{constructor(o){super(o),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0;}clone(){return new e({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};e$1([d$1({type:[String],json:{write:!0}})],p.prototype,"groupByFields",void 0),e$1([d$1({type:Number,json:{write:!0}})],p.prototype,"topCount",void 0),e$1([d$1({type:[String],json:{write:!0}})],p.prototype,"orderByFields",void 0),p=e=e$1([i$1("esri.rest.support.TopFilter")],p);const i=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var y;const m=new o({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),h=new o({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let j=y=class extends a$1{constructor(e){super(e),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1";}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10;}clone(){return new y(l$1({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};e$1([d$1({type:Boolean,json:{write:!0}})],j.prototype,"cacheHint",void 0),e$1([d$1({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],j.prototype,"distance",void 0),e$1([d$1({types:i$2,json:{read:d$2,write:!0}})],j.prototype,"geometry",void 0),e$1([d$1({type:Number,json:{write:!0}})],j.prototype,"geometryPrecision",void 0),e$1([d$1({type:Number,json:{write:!0}})],j.prototype,"maxAllowableOffset",void 0),e$1([d$1({type:Number,json:{read:{source:"resultRecordCount"}}})],j.prototype,"num",void 0),e$1([d$1({json:{write:!0}})],j.prototype,"objectIds",void 0),e$1([d$1({type:[String],json:{write:!0}})],j.prototype,"orderByFields",void 0),e$1([d$1({type:[String],json:{write:!0}})],j.prototype,"outFields",void 0),e$1([d$1({type:k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],j.prototype,"outSpatialReference",void 0),e$1([d$1({type:String,json:{write:!0}})],j.prototype,"resultType",void 0),e$1([d$1({json:{write:!0}})],j.prototype,"returnGeometry",void 0),e$1([d$1({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"returnM",void 0),e$1([d$1({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"returnZ",void 0),e$1([d$1({type:Number,json:{read:{source:"resultOffset"}}})],j.prototype,"start",void 0),e$1([r("start"),r("num")],j.prototype,"writeStart",null),e$1([d$1({type:String,json:{read:{source:"spatialRel",reader:m.read},write:{target:"spatialRel",writer:m.write}}})],j.prototype,"spatialRelationship",void 0),e$1([d$1({type:y$1,json:{write:!0}})],j.prototype,"timeExtent",void 0),e$1([d$1({type:i,json:{write:!0}})],j.prototype,"topFilter",void 0),e$1([d$1({type:String,json:{read:h.read,write:{writer:h.write,overridePolicy(e){return {enabled:e&&this.distance>0}}}}})],j.prototype,"units",void 0),e$1([d$1({type:String,json:{write:!0}})],j.prototype,"where",void 0),j=y=e$1([i$1("esri.rest.support.TopFeaturesQuery")],j),j.from=b(j);const S=j;

export { S, l, u$1 as u };
