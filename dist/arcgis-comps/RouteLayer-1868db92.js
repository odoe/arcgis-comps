import { t, r, e, b as d, i } from './cast-e5ea2533.js';
import { S } from './Collection-ac20f1a1.js';
import { l, b } from './Layer-663fafaf.js';
import { o } from './Portal-f1457cb4.js';
import Ge from './FeatureLayer-1e313d3a.js';
import { y as y$1 } from './OperationalLayer-0f16c161.js';
import { w } from './PortalLayer-0ef8a2d2.js';
import './JSONSupport-8dda8bae.js';
import './geometry-160ffbb5.js';
import './Polyline-56152656.js';
import './Identifiable-0fb3fc58.js';
import './PopupTemplate-87ca9924.js';
import './opacityUtils-5755cb64.js';
import './enumeration-da141e85.js';
import './number-2da43364.js';
import './UniqueValueRenderer-b8a9ac2d.js';
import './symbols-dc010d3b.js';
import './Symbol-ac21e497.js';
import './Color-ed0bfbe9.js';
import './colorUtils-37750ea3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './screenUtils-9ed89fa7.js';
import './aaBoundingBox-e0a84875.js';
import './aaBoundingRect-2a187de3.js';
import './persistableUrlUtils-a9da326c.js';
import './collectionUtils-b35b097b.js';
import './VisualVariablesMixin-a8b13e1b.js';
import './colorRamps-fcb1175a.js';
import './ColorStop-0035d362.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-ed2b64ac.js';
import './Graphic-79de2095.js';
import './compilerUtils-2d7ddb00.js';
import './lengthUtils-2084b777.js';
import './unitUtils-5dcccb3c.js';
import './diffUtils-4072cef0.js';
import './jsonUtils-528e9eda.js';
import './styleUtils-5c87d3a9.js';
import './DictionaryRenderer-09505309.js';
import './LRUCache-65fcdebd.js';
import './MemCache-d4727626.js';
import './jsonUtils-efd42703.js';
import './aliasOf-e543e228.js';
import './Handles-24a27aa9.js';
import './Field-67832b5b.js';
import './fieldType-7f6b02ef.js';
import './HeightModelInfo-5cd6d5f2.js';
import './HandleOwner-0793ecee.js';
import './reactiveUtils-ab0efcb1.js';
import './watchUtils-08cf9d08.js';
import './workers-a7d3d5f6.js';
import './assets-1ab0ccbe.js';
import './intl-0d87e9f4.js';
import './messages-1d31e380.js';
import './queryZScale-f05f6be9.js';
import './zscale-8c9c7156.js';
import './FeatureSet-c6e91f97.js';
import './APIKeyMixin-5ecbc947.js';
import './ArcGISService-00a30f8e.js';
import './arcgisLayerUrl-4273e4b3.js';
import './BlendLayer-34bd1b5b.js';
import './jsonUtils-687db5e9.js';
import './mat4-0196b8fc.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-171b3366.js';
import './labelingInfo-4e582940.js';
import './TimeExtent-ecf7e6f2.js';
import './Query-b8b0a5e8.js';
import './commonProperties-4c10a963.js';
import './LabelClass-a646d1d3.js';
import './labelUtils-a20584ac.js';
import './defaultsJSON-53258912.js';
import './OrderedLayer-5c55613e.js';
import './RefreshableLayer-0c4b9daf.js';
import './ScaleRangeLayer-f5a96945.js';
import './TemporalLayer-b9cacecc.js';
import './TimeInfo-5f646e9b.js';
import './FeatureType-1c489c5b.js';
import './fieldProperties-dc649a5f.js';
import './FieldsIndex-e09edd96.js';
import './LayerFloorInfo-8df7be66.js';
import './styleUtils-545def82.js';
import './asyncUtils-847ae6e6.js';
import './TopFeaturesQuery-25265c27.js';
import './popupUtils-71e7198e.js';
import './PortalItem-85b3bb14.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(y$1(w(l(b)))){constructor(...e){super(...e),this.type="route";}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}get fullExtent(){if(t(this.featureCollections))return null;const e=null;return this.featureCollections.reduce(((e,t$1)=>t(t$1.fullExtent)?e:t(e)?t$1.fullExtent.clone():e.union(t$1.fullExtent)),e)}get maxScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),e)}set maxScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.maxScale=e;})),this._set("maxScale",e);}get minScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),e)}set minScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.minScale=e;})),this._set("minScale",e);}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(!t(this.featureCollections))return this.featureCollections.find((t=>t.title===e))}};e([d()],m.prototype,"barrierLines",null),e([d()],m.prototype,"barrierPoints",null),e([d()],m.prototype,"barrierPolygons",null),e([d()],m.prototype,"directionLines",null),e([d()],m.prototype,"directionPoints",null),e([d({type:S.ofType(Ge)})],m.prototype,"featureCollections",void 0),e([o("portal-item","featureCollections",["layers"])],m.prototype,"readFeatureCollectionsFromItem",null),e([o("web-map","featureCollections",["featureCollection.layers"])],m.prototype,"readFeatureCollectionsFromWebMap",null),e([d({readOnly:!0})],m.prototype,"fullExtent",null),e([d({type:["show","hide"]})],m.prototype,"listMode",void 0),e([d()],m.prototype,"minScale",null),e([d()],m.prototype,"routeInfo",null),e([d()],m.prototype,"stops",null),e([d({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),m=e([i("esri.layers.RouteLayer")],m);const y=m;

export default y;