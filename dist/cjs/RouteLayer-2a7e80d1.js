'use strict';

const request = require('./messageBundle-312ceb47.js');
const Layer = require('./Layer-849337e0.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const FeatureLayer = require('./FeatureLayer-47713b0f.js');
const OperationalLayer = require('./OperationalLayer-f89b9d70.js');
const PortalLayer = require('./PortalLayer-19d79370.js');
require('./index-57f2cfbb.js');
require('./JSONSupport-53c01d03.js');
require('./UniqueValueRenderer-cac6e88d.js');
require('./VisualVariablesMixin-fd7d8973.js');
require('./colorRamps-c066f1f7.js');
require('./ColorStop-c5f3f911.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-4df768a8.js');
require('./lengthUtils-3475e67e.js');
require('./diffUtils-467572e8.js');
require('./jsonUtils-1999c7ae.js');
require('./styleUtils-10128dd7.js');
require('./DictionaryRenderer-7157833a.js');
require('./LRUCache-b38a7907.js');
require('./MemCache-1ae72e1e.js');
require('./jsonUtils-fa6e9edd.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./HeightModelInfo-3363f0e0.js');
require('./HandleOwner-f254dc86.js');
require('./reactiveUtils-9e33ad73.js');
require('./workers-1668d5a8.js');
require('./queryZScale-f443a9ba.js');
require('./zscale-fda0b32f.js');
require('./FeatureSet-2e9b97a5.js');
require('./APIKeyMixin-f99c03a8.js');
require('./ArcGISService-a170c777.js');
require('./arcgisLayerUrl-b24ae301.js');
require('./BlendLayer-7e864068.js');
require('./jsonUtils-4461cf25.js');
require('./mat4-1439266d.js');
require('./CustomParametersMixin-8fc5bf2f.js');
require('./labelingInfo-b4dde768.js');
require('./TimeExtent-cdfe048b.js');
require('./Query-35be2e91.js');
require('./commonProperties-75b954b3.js');
require('./LabelClass-21df7ce2.js');
require('./labelUtils-7677c2d3.js');
require('./defaultsJSON-01ae5a1a.js');
require('./OrderedLayer-1ea23e5d.js');
require('./RefreshableLayer-22c5fbbd.js');
require('./ScaleRangeLayer-52589af6.js');
require('./TemporalLayer-0201042a.js');
require('./TimeInfo-e2561319.js');
require('./FeatureType-5a860566.js');
require('./fieldProperties-f6acb896.js');
require('./FieldsIndex-8c8f3ac6.js');
require('./LayerFloorInfo-154885ea.js');
require('./styleUtils-2856ad11.js');
require('./asyncUtils-9f974032.js');
require('./TopFeaturesQuery-2241be7c.js');
require('./popupUtils-180c3a12.js');
require('./PortalItem-42e06deb.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(OperationalLayer.y(PortalLayer.w(Layer.l(Layer.b)))){constructor(...e){super(...e),this.type="route";}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new FeatureLayer['default'];return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new FeatureLayer['default'];return t.read(e,r),t}))}get fullExtent(){if(request.t(this.featureCollections))return null;const e=null;return this.featureCollections.reduce(((e,t)=>request.t(t.fullExtent)?e:request.t(e)?t.fullExtent.clone():e.union(t.fullExtent)),e)}get maxScale(){if(request.t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),e)}set maxScale(e){request.r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.maxScale=e;})),this._set("maxScale",e);}get minScale(){if(request.t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),e)}set minScale(e){request.r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.minScale=e;})),this._set("minScale",e);}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(!request.t(this.featureCollections))return this.featureCollections.find((t=>t.title===e))}};request.e([request.d()],m.prototype,"barrierLines",null),request.e([request.d()],m.prototype,"barrierPoints",null),request.e([request.d()],m.prototype,"barrierPolygons",null),request.e([request.d()],m.prototype,"directionLines",null),request.e([request.d()],m.prototype,"directionPoints",null),request.e([request.d({type:request.S$1.ofType(FeatureLayer['default'])})],m.prototype,"featureCollections",void 0),request.e([unitUtils.o("portal-item","featureCollections",["layers"])],m.prototype,"readFeatureCollectionsFromItem",null),request.e([unitUtils.o("web-map","featureCollections",["featureCollection.layers"])],m.prototype,"readFeatureCollectionsFromWebMap",null),request.e([request.d({readOnly:!0})],m.prototype,"fullExtent",null),request.e([request.d({type:["show","hide"]})],m.prototype,"listMode",void 0),request.e([request.d()],m.prototype,"minScale",null),request.e([request.d()],m.prototype,"routeInfo",null),request.e([request.d()],m.prototype,"stops",null),request.e([request.d({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),m=request.e([request.i("esri.layers.RouteLayer")],m);const y=m;

exports.default = y;
