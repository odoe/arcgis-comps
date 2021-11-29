import { e as e$1, b as d, i } from './cast-e5ea2533.js';
import { y } from './TimeExtent-ecf7e6f2.js';
import { e, l, v } from './TimeInfo-5f646e9b.js';
import { o } from './Portal-f1457cb4.js';
import { m } from './opacityUtils-5755cb64.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f(e){return void 0!==e.timeInfo}const a=f=>{let a=class extends f{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0;}readOffset(e$1,t){const o=t.timeInfo.exportOptions;if(!o)return null;const i=o.timeOffset,s=e.fromJSON(o.timeOffsetUnits);return i&&s?new l({value:i,unit:s}):null}set timeInfo(e){m(e,this.fieldsIndex),this._set("timeInfo",e);}};return e$1([d({type:y,json:{write:!1}})],a.prototype,"timeExtent",void 0),e$1([d({type:l})],a.prototype,"timeOffset",void 0),e$1([o("service","timeOffset",["timeInfo.exportOptions"])],a.prototype,"readOffset",null),e$1([d({value:null,type:v,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"timeInfo",null),e$1([d({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"useViewTime",void 0),a=e$1([i("esri.layers.mixins.TemporalLayer")],a),a};

export { a };
