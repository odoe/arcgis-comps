import { I as S, e, a as d, i as i$1 } from './jsxFactory-ef3e403e.js';
import { a } from './JSONSupport-a5eb98e7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let i=l=class extends a{constructor(o){super(o),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new S;}clone(){return new l({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};e([d({type:String,json:{write:!0}})],i.prototype,"floorField",void 0),e([d({json:{read:!1,write:!1}})],i.prototype,"viewAllMode",void 0),e([d({json:{read:!1,write:!1}})],i.prototype,"viewAllLevelIds",void 0),i=l=e([i$1("esri.layers.support.LayerFloorInfo")],i);const p=i;

export { p };
