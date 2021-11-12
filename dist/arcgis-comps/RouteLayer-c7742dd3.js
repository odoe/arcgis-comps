import { g as t, A as r, e, a as d, k as S, i } from './jsxFactory-b8b7429b.js';
import { l, b } from './MultiOriginJSONSupport-409caa57.js';
import { g as o } from './Graphic-75d1efd2.js';
import Ge from './FeatureLayer-f6c171eb.js';
import { y as y$1 } from './OperationalLayer-7b6946f0.js';
import { w } from './PortalLayer-c699b91c.js';
import './index-921bd636.js';
import './JSONSupport-15eefdaf.js';
import './UniqueValueRenderer-c001e8b8.js';
import './VisualVariablesMixin-a733e60f.js';
import './colorRamps-564a1b52.js';
import './ColorStop-6bbf8625.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-d30b1042.js';
import './compilerUtils-fd4d1928.js';
import './lengthUtils-c1fc84e6.js';
import './diffUtils-7afe88f2.js';
import './jsonUtils-904bd6e1.js';
import './styleUtils-2aef643e.js';
import './DictionaryRenderer-5a73e1dd.js';
import './LRUCache-4697cf73.js';
import './MemCache-ba22e87a.js';
import './jsonUtils-5413cd65.js';
import './Field-3662c57d.js';
import './fieldType-1c6ed2e9.js';
import './HeightModelInfo-6673666d.js';
import './HandleOwner-89177892.js';
import './reactiveUtils-37eae8e4.js';
import './workers-abd4af5a.js';
import './queryZScale-ca210e89.js';
import './zscale-aa683312.js';
import './FeatureSet-ac01aefd.js';
import './APIKeyMixin-e6f88474.js';
import './ArcGISService-78aba528.js';
import './arcgisLayerUrl-f16875e5.js';
import './BlendLayer-8a19cb4c.js';
import './jsonUtils-9b8c4071.js';
import './mat4-7dc89e3f.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-65dc0d22.js';
import './labelingInfo-7446840d.js';
import './TimeExtent-11f1925b.js';
import './Query-d6a1dd36.js';
import './commonProperties-c39cb6e7.js';
import './LabelClass-37380caa.js';
import './labelUtils-27593fd8.js';
import './defaultsJSON-53258912.js';
import './OrderedLayer-d05dde4e.js';
import './RefreshableLayer-eff019c1.js';
import './ScaleRangeLayer-fd3df739.js';
import './TemporalLayer-1525e917.js';
import './TimeInfo-1e2583f2.js';
import './FeatureType-f5fde895.js';
import './fieldProperties-666e1160.js';
import './FieldsIndex-b4d96270.js';
import './LayerFloorInfo-35df5ab8.js';
import './styleUtils-ccdf1dd0.js';
import './asyncUtils-4aacff64.js';
import './TopFeaturesQuery-cb0fdf83.js';
import './popupUtils-62f80c9e.js';
import './PortalItem-86be48d7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(y$1(w(l(b)))){constructor(...e){super(...e),this.type="route";}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}get fullExtent(){if(t(this.featureCollections))return null;const e=null;return this.featureCollections.reduce(((e,t$1)=>t(t$1.fullExtent)?e:t(e)?t$1.fullExtent.clone():e.union(t$1.fullExtent)),e)}get maxScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),e)}set maxScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.maxScale=e;})),this._set("maxScale",e);}get minScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),e)}set minScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.minScale=e;})),this._set("minScale",e);}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(!t(this.featureCollections))return this.featureCollections.find((t=>t.title===e))}};e([d()],m.prototype,"barrierLines",null),e([d()],m.prototype,"barrierPoints",null),e([d()],m.prototype,"barrierPolygons",null),e([d()],m.prototype,"directionLines",null),e([d()],m.prototype,"directionPoints",null),e([d({type:S.ofType(Ge)})],m.prototype,"featureCollections",void 0),e([o("portal-item","featureCollections",["layers"])],m.prototype,"readFeatureCollectionsFromItem",null),e([o("web-map","featureCollections",["featureCollection.layers"])],m.prototype,"readFeatureCollectionsFromWebMap",null),e([d({readOnly:!0})],m.prototype,"fullExtent",null),e([d({type:["show","hide"]})],m.prototype,"listMode",void 0),e([d()],m.prototype,"minScale",null),e([d()],m.prototype,"routeInfo",null),e([d()],m.prototype,"stops",null),e([d({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),m=e([i("esri.layers.RouteLayer")],m);const y=m;

export default y;
