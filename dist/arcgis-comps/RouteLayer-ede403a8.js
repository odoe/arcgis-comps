import { l as t, r, e, a as d, I as S, i } from './jsxFactory-ef3e403e.js';
import { l, b } from './Layer-5a380094.js';
import { o } from './unitUtils-8a2b838a.js';
import Ge from './FeatureLayer-0ee96f86.js';
import { y as y$1 } from './OperationalLayer-63ec0fa5.js';
import { w } from './PortalLayer-2d4eca15.js';
import './index-5b4f4de1.js';
import './JSONSupport-a5eb98e7.js';
import './UniqueValueRenderer-1e1c8bf1.js';
import './VisualVariablesMixin-0776df0b.js';
import './colorRamps-a6280e46.js';
import './ColorStop-d3744592.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-5b3d6d65.js';
import './compilerUtils-be3a2322.js';
import './lengthUtils-26f6142e.js';
import './diffUtils-1f52a3dd.js';
import './jsonUtils-9c0d7442.js';
import './styleUtils-f18fb225.js';
import './DictionaryRenderer-b0e19146.js';
import './LRUCache-59f5b25d.js';
import './MemCache-bf2be364.js';
import './jsonUtils-595f52d3.js';
import './Field-c395cfbd.js';
import './fieldType-d6b0953a.js';
import './HeightModelInfo-2bd39a29.js';
import './HandleOwner-ebad91ab.js';
import './reactiveUtils-2b52b231.js';
import './workers-f3905e14.js';
import './queryZScale-69ba1f2b.js';
import './zscale-5759f488.js';
import './FeatureSet-2b04e61f.js';
import './APIKeyMixin-a3a0d40c.js';
import './ArcGISService-30368d07.js';
import './arcgisLayerUrl-06668ce7.js';
import './BlendLayer-81c24642.js';
import './jsonUtils-7ed7a510.js';
import './mat4-fe6f4784.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-ca53bbdf.js';
import './labelingInfo-1b49455f.js';
import './TimeExtent-fb7ed3e3.js';
import './Query-fd5e1b7b.js';
import './commonProperties-e22a7011.js';
import './LabelClass-5f15d30f.js';
import './labelUtils-ad1dc3a0.js';
import './defaultsJSON-53258912.js';
import './OrderedLayer-d40ec16a.js';
import './RefreshableLayer-079cea19.js';
import './ScaleRangeLayer-cb457ce8.js';
import './TemporalLayer-64ff2afe.js';
import './TimeInfo-e0d5d311.js';
import './FeatureType-6da2d9f8.js';
import './fieldProperties-cc8fc820.js';
import './FieldsIndex-d76382ca.js';
import './LayerFloorInfo-c765d601.js';
import './styleUtils-305b69b7.js';
import './asyncUtils-968a02e9.js';
import './TopFeaturesQuery-10871c16.js';
import './popupUtils-5accf1e0.js';
import './PortalItem-496c46b9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(y$1(w(l(b)))){constructor(...e){super(...e),this.type="route";}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}get fullExtent(){if(t(this.featureCollections))return null;const e=null;return this.featureCollections.reduce(((e,t$1)=>t(t$1.fullExtent)?e:t(e)?t$1.fullExtent.clone():e.union(t$1.fullExtent)),e)}get maxScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),e)}set maxScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.maxScale=e;})),this._set("maxScale",e);}get minScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),e)}set minScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.minScale=e;})),this._set("minScale",e);}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(!t(this.featureCollections))return this.featureCollections.find((t=>t.title===e))}};e([d()],m.prototype,"barrierLines",null),e([d()],m.prototype,"barrierPoints",null),e([d()],m.prototype,"barrierPolygons",null),e([d()],m.prototype,"directionLines",null),e([d()],m.prototype,"directionPoints",null),e([d({type:S.ofType(Ge)})],m.prototype,"featureCollections",void 0),e([o("portal-item","featureCollections",["layers"])],m.prototype,"readFeatureCollectionsFromItem",null),e([o("web-map","featureCollections",["featureCollection.layers"])],m.prototype,"readFeatureCollectionsFromWebMap",null),e([d({readOnly:!0})],m.prototype,"fullExtent",null),e([d({type:["show","hide"]})],m.prototype,"listMode",void 0),e([d()],m.prototype,"minScale",null),e([d()],m.prototype,"routeInfo",null),e([d()],m.prototype,"stops",null),e([d({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),m=e([i("esri.layers.RouteLayer")],m);const y=m;

export default y;
