'use strict';

const request = require('./messageBundle-312ceb47.js');
const TimeExtent = require('./TimeExtent-cdfe048b.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=request.s$8()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$1;let a$1=p$1=class extends JSONSupport.a{constructor(r){super(r),this.value=0,this.unit="milliseconds";}toMilliseconds(){return TimeExtent.o(this.value,this.unit,"milliseconds")}clone(){return new p$1({value:this.value,unit:this.unit})}};request.e([request.d({type:Number,json:{write:!0},nonNullable:!0})],a$1.prototype,"value",void 0),request.e([request.d({type:e.apiValues,json:{type:e.jsonValues,read:e.read,write:e.write},nonNullable:!0})],a$1.prototype,"unit",void 0),a$1=p$1=request.e([request.i("esri.TimeInterval")],a$1);const l=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;let a=i=class extends JSONSupport.a{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null;}readRespectsDaylightSaving(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:t}=this;return new i({respectsDaylightSaving:e,timezone:t})}};request.e([request.d({type:Boolean,json:{write:!0}})],a.prototype,"respectsDaylightSaving",void 0),request.e([unitUtils.o("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],a.prototype,"readRespectsDaylightSaving",null),request.e([request.d({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],a.prototype,"timezone",void 0),a=i=request.e([request.i("esri.layers.support.TimeReference")],a);const p=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;let c=d=class extends JSONSupport.a{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0;}readFullTimeExtent(e,r){if(!r.timeExtent||!Array.isArray(r.timeExtent)||2!==r.timeExtent.length)return null;const i=new Date(r.timeExtent[0]),l=new Date(r.timeExtent[1]);return new TimeExtent.y({start:i,end:l})}writeFullTimeExtent(e,t){e&&request.r(e.start)&&request.r(e.end)?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null;}readInterval(e$1,t){return t.timeInterval&&t.timeIntervalUnits?new l({value:t.timeInterval,unit:e.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new l({value:t.defaultTimeInterval,unit:e.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit;}else t.timeInterval=null,t.timeIntervalUnits=null;}clone(){const{cumulative:e,endField:t,hasLiveData:r,interval:i,startField:o,timeReference:n,fullTimeExtent:a,trackIdField:s,useTime:m}=this;return new d({cumulative:e,endField:t,hasLiveData:r,interval:i,startField:o,timeReference:request.l$1(n),fullTimeExtent:request.l$1(a),trackIdField:s,useTime:m})}};request.e([request.d({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],c.prototype,"cumulative",void 0),request.e([request.d({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],c.prototype,"endField",void 0),request.e([request.d({type:TimeExtent.y,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"fullTimeExtent",void 0),request.e([unitUtils.o("fullTimeExtent",["timeExtent"])],c.prototype,"readFullTimeExtent",null),request.e([unitUtils.r$1("fullTimeExtent")],c.prototype,"writeFullTimeExtent",null),request.e([request.d({type:Boolean,json:{write:!0}})],c.prototype,"hasLiveData",void 0),request.e([request.d({type:l,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"interval",void 0),request.e([unitUtils.o("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],c.prototype,"readInterval",null),request.e([unitUtils.r$1("interval")],c.prototype,"writeInterval",null),request.e([request.d({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],c.prototype,"startField",void 0),request.e([request.d({type:p,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"timeReference",void 0),request.e([request.d({type:String,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"trackIdField",void 0),request.e([request.d({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],c.prototype,"useTime",void 0),c=d=request.e([request.i("esri.layers.support.TimeInfo")],c);const v=c;

exports.e = e;
exports.l = l;
exports.v = v;
