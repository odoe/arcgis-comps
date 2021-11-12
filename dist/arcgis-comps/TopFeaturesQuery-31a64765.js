import { M as l$1, e as e$1, a as d$1, i as i$1, aj as b, a2 as o } from './jsxFactory-c96bb45c.js';
import { f as r, J as k, az as i$2, aA as d$2 } from './Graphic-6c72131a.js';
import { a } from './JSONSupport-5a9f556a.js';
import { K } from './Query-792b142d.js';
import { y as y$1 } from './TimeExtent-1bc95591.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u;let d=u=class extends a{constructor(t){super(t),this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null;}_writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime();}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(e.definitionExpression="1=1");}clone(){return new u(l$1({dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};e$1([d$1({type:K,json:{write:!0}})],d.prototype,"dynamicDataSource",void 0),e$1([d$1({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),e$1([d$1({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),e$1([d$1({type:Date})],d.prototype,"historicMoment",void 0),e$1([r("historicMoment")],d.prototype,"_writeHistoricMoment",null),e$1([d$1({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),e$1([d$1({type:[Number],json:{write:!0}})],d.prototype,"objectIds",void 0),e$1([d$1({type:[String],json:{write:!0}})],d.prototype,"orderByFields",void 0),e$1([d$1({type:[String],json:{write:!0}})],d.prototype,"outFields",void 0),e$1([d$1({type:k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],d.prototype,"outSpatialReference",void 0),e$1([d$1({json:{write:!0}})],d.prototype,"relationshipId",void 0),e$1([d$1({type:Number,json:{read:{source:"resultOffset"}}})],d.prototype,"start",void 0),e$1([r("start"),r("num")],d.prototype,"writeStart",null),e$1([d$1({type:Number,json:{read:{source:"resultRecordCount"}}})],d.prototype,"num",void 0),e$1([d$1({json:{write:!0}})],d.prototype,"returnGeometry",void 0),e$1([d$1({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],d.prototype,"returnM",void 0),e$1([d$1({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],d.prototype,"returnZ",void 0),e$1([d$1({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],d.prototype,"where",void 0),d=u=e$1([i$1("esri.rest.support.RelationshipQuery")],d),d.from=b(d);const l=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e;let p=e=class extends a{constructor(o){super(o),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0;}clone(){return new e({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};e$1([d$1({type:[String],json:{write:!0}})],p.prototype,"groupByFields",void 0),e$1([d$1({type:Number,json:{write:!0}})],p.prototype,"topCount",void 0),e$1([d$1({type:[String],json:{write:!0}})],p.prototype,"orderByFields",void 0),p=e=e$1([i$1("esri.rest.support.TopFilter")],p);const i=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var y;const m=new o({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),h=new o({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let j=y=class extends a{constructor(e){super(e),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1";}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10;}clone(){return new y(l$1({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};e$1([d$1({type:Boolean,json:{write:!0}})],j.prototype,"cacheHint",void 0),e$1([d$1({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],j.prototype,"distance",void 0),e$1([d$1({types:i$2,json:{read:d$2,write:!0}})],j.prototype,"geometry",void 0),e$1([d$1({type:Number,json:{write:!0}})],j.prototype,"geometryPrecision",void 0),e$1([d$1({type:Number,json:{write:!0}})],j.prototype,"maxAllowableOffset",void 0),e$1([d$1({type:Number,json:{read:{source:"resultRecordCount"}}})],j.prototype,"num",void 0),e$1([d$1({json:{write:!0}})],j.prototype,"objectIds",void 0),e$1([d$1({type:[String],json:{write:!0}})],j.prototype,"orderByFields",void 0),e$1([d$1({type:[String],json:{write:!0}})],j.prototype,"outFields",void 0),e$1([d$1({type:k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],j.prototype,"outSpatialReference",void 0),e$1([d$1({type:String,json:{write:!0}})],j.prototype,"resultType",void 0),e$1([d$1({json:{write:!0}})],j.prototype,"returnGeometry",void 0),e$1([d$1({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"returnM",void 0),e$1([d$1({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"returnZ",void 0),e$1([d$1({type:Number,json:{read:{source:"resultOffset"}}})],j.prototype,"start",void 0),e$1([r("start"),r("num")],j.prototype,"writeStart",null),e$1([d$1({type:String,json:{read:{source:"spatialRel",reader:m.read},write:{target:"spatialRel",writer:m.write}}})],j.prototype,"spatialRelationship",void 0),e$1([d$1({type:y$1,json:{write:!0}})],j.prototype,"timeExtent",void 0),e$1([d$1({type:i,json:{write:!0}})],j.prototype,"topFilter",void 0),e$1([d$1({type:String,json:{read:h.read,write:{writer:h.write,overridePolicy(e){return {enabled:e&&this.distance>0}}}}})],j.prototype,"units",void 0),e$1([d$1({type:String,json:{write:!0}})],j.prototype,"where",void 0),j=y=e$1([i$1("esri.rest.support.TopFeaturesQuery")],j),j.from=b(j);const S=j;

export { S, l };
