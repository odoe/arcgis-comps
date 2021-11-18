import { t, r, e, d, E as S, i } from './messageBundle-8a146a9b.js';
import { l, b } from './Layer-455faab4.js';
import { o } from './unitUtils-c707ba3c.js';
import Ge from './FeatureLayer-52da5e2e.js';
import { y as y$1 } from './OperationalLayer-52601c7c.js';
import { w } from './PortalLayer-faa3179f.js';
import './index-41925fe8.js';
import './JSONSupport-4e29e63d.js';
import './UniqueValueRenderer-75e84d49.js';
import './VisualVariablesMixin-66f084f4.js';
import './colorRamps-b0e37c54.js';
import './ColorStop-ff4a3943.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-3ac464e8.js';
import './lengthUtils-a6878787.js';
import './diffUtils-14ca3884.js';
import './jsonUtils-7105a0de.js';
import './styleUtils-5fe9231e.js';
import './DictionaryRenderer-4a77ed62.js';
import './LRUCache-b68d19e5.js';
import './MemCache-73bb45e2.js';
import './jsonUtils-f2130780.js';
import './Field-fbfaf20d.js';
import './fieldType-f80f0b3d.js';
import './HeightModelInfo-899d5d07.js';
import './HandleOwner-6cdc634d.js';
import './reactiveUtils-a5f838c7.js';
import './workers-c79250a3.js';
import './queryZScale-f92acabb.js';
import './zscale-5703857d.js';
import './FeatureSet-e481fbb3.js';
import './APIKeyMixin-f2be3dfc.js';
import './ArcGISService-adf08a63.js';
import './arcgisLayerUrl-30839db3.js';
import './BlendLayer-286c847c.js';
import './jsonUtils-433a912a.js';
import './mat4-1ee7ce2f.js';
import './CustomParametersMixin-05dda462.js';
import './labelingInfo-136b2123.js';
import './TimeExtent-16986fe0.js';
import './Query-71270a43.js';
import './commonProperties-0e370622.js';
import './LabelClass-080f9590.js';
import './labelUtils-17428bb2.js';
import './defaultsJSON-f90363d8.js';
import './OrderedLayer-1aa033f7.js';
import './RefreshableLayer-f326088d.js';
import './ScaleRangeLayer-aeac5429.js';
import './TemporalLayer-f8f255e9.js';
import './TimeInfo-3ee9ad62.js';
import './FeatureType-30442694.js';
import './fieldProperties-530951df.js';
import './FieldsIndex-041474f9.js';
import './LayerFloorInfo-e1a08643.js';
import './styleUtils-32c9f97f.js';
import './asyncUtils-c98101f9.js';
import './TopFeaturesQuery-5a679b50.js';
import './popupUtils-b5ee0759.js';
import './PortalItem-3f93baa8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(y$1(w(l(b)))){constructor(...e){super(...e),this.type="route";}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}get fullExtent(){if(t(this.featureCollections))return null;const e=null;return this.featureCollections.reduce(((e,t$1)=>t(t$1.fullExtent)?e:t(e)?t$1.fullExtent.clone():e.union(t$1.fullExtent)),e)}get maxScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),e)}set maxScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.maxScale=e;})),this._set("maxScale",e);}get minScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),e)}set minScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.minScale=e;})),this._set("minScale",e);}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(!t(this.featureCollections))return this.featureCollections.find((t=>t.title===e))}};e([d()],m.prototype,"barrierLines",null),e([d()],m.prototype,"barrierPoints",null),e([d()],m.prototype,"barrierPolygons",null),e([d()],m.prototype,"directionLines",null),e([d()],m.prototype,"directionPoints",null),e([d({type:S.ofType(Ge)})],m.prototype,"featureCollections",void 0),e([o("portal-item","featureCollections",["layers"])],m.prototype,"readFeatureCollectionsFromItem",null),e([o("web-map","featureCollections",["featureCollection.layers"])],m.prototype,"readFeatureCollectionsFromWebMap",null),e([d({readOnly:!0})],m.prototype,"fullExtent",null),e([d({type:["show","hide"]})],m.prototype,"listMode",void 0),e([d()],m.prototype,"minScale",null),e([d()],m.prototype,"routeInfo",null),e([d()],m.prototype,"stops",null),e([d({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),m=e([i("esri.layers.RouteLayer")],m);const y=m;

export default y;
