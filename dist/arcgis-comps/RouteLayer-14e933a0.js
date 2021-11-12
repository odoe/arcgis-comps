import { l as t, r, e, a as d, I as S, i } from './jsxFactory-c96bb45c.js';
import { l, b } from './MultiOriginJSONSupport-f6506b2f.js';
import { v as o } from './Graphic-6c72131a.js';
import Ge from './FeatureLayer-9672bbd9.js';
import { y as y$1 } from './OperationalLayer-b04e38aa.js';
import { w } from './PortalLayer-df690c5a.js';
import './index-921bd636.js';
import './JSONSupport-5a9f556a.js';
import './UniqueValueRenderer-f2af8ece.js';
import './VisualVariablesMixin-bafacb39.js';
import './colorRamps-693d6433.js';
import './ColorStop-fb26d745.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-506efb2b.js';
import './compilerUtils-128fda14.js';
import './lengthUtils-7a485aa7.js';
import './unitUtils-b25ae8cb.js';
import './diffUtils-491d81df.js';
import './jsonUtils-a31b4632.js';
import './styleUtils-8fedca21.js';
import './DictionaryRenderer-78308a28.js';
import './LRUCache-81490262.js';
import './MemCache-e219bcfb.js';
import './jsonUtils-580ae154.js';
import './Field-2b6029f8.js';
import './RangeDomain-de3132b0.js';
import './fieldType-b9f9365f.js';
import './HeightModelInfo-a87824be.js';
import './HandleOwner-6fdf8ee8.js';
import './reactiveUtils-4ba1fb4b.js';
import './workers-5ad649f9.js';
import './queryZScale-0ff40b9b.js';
import './zscale-cec9b507.js';
import './FeatureSet-22102ca4.js';
import './APIKeyMixin-4866fda4.js';
import './ArcGISService-4cc51fbf.js';
import './arcgisLayerUrl-2aeded02.js';
import './BlendLayer-70766503.js';
import './jsonUtils-352e8eb7.js';
import './mat4-ef633c62.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-89544c0d.js';
import './labelingInfo-683f3119.js';
import './TimeExtent-1bc95591.js';
import './Query-792b142d.js';
import './commonProperties-fa43a2ed.js';
import './LabelClass-65776e47.js';
import './labelUtils-45e9126f.js';
import './defaultsJSON-53258912.js';
import './OrderedLayer-8b694b55.js';
import './RefreshableLayer-702beb88.js';
import './ScaleRangeLayer-99043c54.js';
import './TemporalLayer-b41e8e6e.js';
import './TimeInfo-9a5e9434.js';
import './FeatureType-8cae0f8f.js';
import './fieldProperties-b0c243c7.js';
import './FieldsIndex-56cf15de.js';
import './LayerFloorInfo-2c65601c.js';
import './styleUtils-e2196c57.js';
import './asyncUtils-dc4bd819.js';
import './AttachmentQuery-42d07544.js';
import './TopFeaturesQuery-31a64765.js';
import './popupUtils-4957d444.js';
import './PortalItem-209a51a1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(y$1(w(l(b)))){constructor(...e){super(...e),this.type="route";}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}get fullExtent(){if(t(this.featureCollections))return null;const e=null;return this.featureCollections.reduce(((e,t$1)=>t(t$1.fullExtent)?e:t(e)?t$1.fullExtent.clone():e.union(t$1.fullExtent)),e)}get maxScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),e)}set maxScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.maxScale=e;})),this._set("maxScale",e);}get minScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),e)}set minScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.minScale=e;})),this._set("minScale",e);}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(!t(this.featureCollections))return this.featureCollections.find((t=>t.title===e))}};e([d()],m.prototype,"barrierLines",null),e([d()],m.prototype,"barrierPoints",null),e([d()],m.prototype,"barrierPolygons",null),e([d()],m.prototype,"directionLines",null),e([d()],m.prototype,"directionPoints",null),e([d({type:S.ofType(Ge)})],m.prototype,"featureCollections",void 0),e([o("portal-item","featureCollections",["layers"])],m.prototype,"readFeatureCollectionsFromItem",null),e([o("web-map","featureCollections",["featureCollection.layers"])],m.prototype,"readFeatureCollectionsFromWebMap",null),e([d({readOnly:!0})],m.prototype,"fullExtent",null),e([d({type:["show","hide"]})],m.prototype,"listMode",void 0),e([d()],m.prototype,"minScale",null),e([d()],m.prototype,"routeInfo",null),e([d()],m.prototype,"stops",null),e([d({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),m=e([i("esri.layers.RouteLayer")],m);const y=m;

export default y;
