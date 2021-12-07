import { e, d, a2 as o, i } from './messageBundle-f75b4090.js';
import { y } from './TimeExtent-a024c0d8.js';
import { l, v, e as e$1 } from './TimeInfo-44dec2e0.js';
import { m } from './opacityUtils-5e864561.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=f=>{let a=class extends f{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0;}readOffset(e,t){const o=t.timeInfo.exportOptions;if(!o)return null;const i=o.timeOffset,s=e$1.fromJSON(o.timeOffsetUnits);return i&&s?new l({value:i,unit:s}):null}set timeInfo(e){m(e,this.fieldsIndex),this._set("timeInfo",e);}};return e([d({type:y,json:{write:!1}})],a.prototype,"timeExtent",void 0),e([d({type:l})],a.prototype,"timeOffset",void 0),e([o("service","timeOffset",["timeInfo.exportOptions"])],a.prototype,"readOffset",null),e([d({value:null,type:v,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"timeInfo",null),e([d({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"useViewTime",void 0),a=e([i("esri.layers.mixins.TemporalLayer")],a),a};

export { a };
