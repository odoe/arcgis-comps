import { e as e$1, a as d, i } from './jsxFactory-c96bb45c.js';
import { y } from './TimeExtent-1bc95591.js';
import { e, l, v } from './TimeInfo-9a5e9434.js';
import { bg as m, v as o } from './Graphic-6c72131a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f(e){return void 0!==e.timeInfo}const a=f=>{let a=class extends f{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0;}readOffset(e$1,t){const o=t.timeInfo.exportOptions;if(!o)return null;const i=o.timeOffset,s=e.fromJSON(o.timeOffsetUnits);return i&&s?new l({value:i,unit:s}):null}set timeInfo(e){m(e,this.fieldsIndex),this._set("timeInfo",e);}};return e$1([d({type:y,json:{write:!1}})],a.prototype,"timeExtent",void 0),e$1([d({type:l})],a.prototype,"timeOffset",void 0),e$1([o("service","timeOffset",["timeInfo.exportOptions"])],a.prototype,"readOffset",null),e$1([d({value:null,type:v,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"timeInfo",null),e$1([d({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"useViewTime",void 0),a=e$1([i("esri.layers.mixins.TemporalLayer")],a),a};

export { a };
