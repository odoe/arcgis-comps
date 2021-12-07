import { d4 as y$1, d5 as w, d6 as l, dc as b, h0 as Ge, t, r, e, d, S, cU as o, i } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(y$1(w(l(b)))){constructor(...e){super(...e),this.type="route";}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}get fullExtent(){if(t(this.featureCollections))return null;const e=null;return this.featureCollections.reduce(((e,t$1)=>t(t$1.fullExtent)?e:t(e)?t$1.fullExtent.clone():e.union(t$1.fullExtent)),e)}get maxScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),e)}set maxScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.maxScale=e;})),this._set("maxScale",e);}get minScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),e)}set minScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.minScale=e;})),this._set("minScale",e);}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(!t(this.featureCollections))return this.featureCollections.find((t=>t.title===e))}};e([d()],m.prototype,"barrierLines",null),e([d()],m.prototype,"barrierPoints",null),e([d()],m.prototype,"barrierPolygons",null),e([d()],m.prototype,"directionLines",null),e([d()],m.prototype,"directionPoints",null),e([d({type:S.ofType(Ge)})],m.prototype,"featureCollections",void 0),e([o("portal-item","featureCollections",["layers"])],m.prototype,"readFeatureCollectionsFromItem",null),e([o("web-map","featureCollections",["featureCollection.layers"])],m.prototype,"readFeatureCollectionsFromWebMap",null),e([d({readOnly:!0})],m.prototype,"fullExtent",null),e([d({type:["show","hide"]})],m.prototype,"listMode",void 0),e([d()],m.prototype,"minScale",null),e([d()],m.prototype,"routeInfo",null),e([d()],m.prototype,"stops",null),e([d({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),m=e([i("esri.layers.RouteLayer")],m);const y=m;

export default y;
