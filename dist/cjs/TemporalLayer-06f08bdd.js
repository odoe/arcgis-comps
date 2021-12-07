'use strict';

const request = require('./messageBundle-8be88d04.js');
const TimeExtent = require('./TimeExtent-8b558884.js');
const TimeInfo = require('./TimeInfo-050c5617.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=f=>{let a=class extends f{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0;}readOffset(e,t){const o=t.timeInfo.exportOptions;if(!o)return null;const i=o.timeOffset,s=TimeInfo.e.fromJSON(o.timeOffsetUnits);return i&&s?new TimeInfo.l({value:i,unit:s}):null}set timeInfo(e){opacityUtils.m(e,this.fieldsIndex),this._set("timeInfo",e);}};return request.e([request.d({type:TimeExtent.y,json:{write:!1}})],a.prototype,"timeExtent",void 0),request.e([request.d({type:TimeInfo.l})],a.prototype,"timeOffset",void 0),request.e([request.o$2("service","timeOffset",["timeInfo.exportOptions"])],a.prototype,"readOffset",null),request.e([request.d({value:null,type:TimeInfo.v,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"timeInfo",null),request.e([request.d({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"useViewTime",void 0),a=request.e([request.i("esri.layers.mixins.TemporalLayer")],a),a};

exports.a = a;
