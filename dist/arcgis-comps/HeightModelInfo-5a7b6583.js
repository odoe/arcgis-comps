import { Q as s, bE as v$1, a8 as t, e, a as d$1, i } from './jsxFactory-a3b6abde.js';
import { a } from './JSONSupport-4f0a3248.js';
import { aM as A, aN as G, k as r, g as o } from './Graphic-08cda9ca.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;const p=s()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),u=p.jsonValues.slice();v$1(u,"orthometric");const g=s()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let m=d=class extends a{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null;}writeHeightModel(e,t,r){return p.write(e,t,r)}readHeightModel(e,t,r){const o=p.read(e);return o||(r&&r.messages&&r.messages.push(f(e,{context:r})),null)}readHeightUnit(e,t,r){const o=g.read(e);return o||(r&&r.messages&&r.messages.push(y(e,{context:r})),null)}readHeightUnitService(e,t,r){const o=A(e)||g.read(e);return o||(r&&r.messages&&r.messages.push(y(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new d({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return !!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=G(t);return new d({heightModel:e.heightModel,heightUnit:r,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new d;return t.read(e,{origin:"web-scene"}),t}};function y(e,t$1){return new t("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t$1)}function f(e,t$1){return new t("height-model:unsupported",`Height model of value '${e}' is not supported`,t$1)}e([d$1({type:p.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:u,default:"ellipsoidal"}}}})],m.prototype,"heightModel",void 0),e([r("web-scene","heightModel")],m.prototype,"writeHeightModel",null),e([o(["web-scene","service"],"heightModel")],m.prototype,"readHeightModel",null),e([d$1({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:g.write}}}})],m.prototype,"heightUnit",void 0),e([o("web-scene","heightUnit")],m.prototype,"readHeightUnit",null),e([o("service","heightUnit")],m.prototype,"readHeightUnitService",null),e([d$1({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],m.prototype,"vertCRS",void 0),e([o("service","vertCRS",["vertCRS","ellipsoid","geoid"])],m.prototype,"readVertCRS",null),m=d=e([i("esri.geometry.HeightModelInfo")],m);const v=m;

export { v };
