'use strict';

const request = require('./messageBundle-8be88d04.js');
const loadAll = require('./loadAll-e25ec3d0.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const Layer = require('./Layer-31cde361.js');
const BlendLayer = require('./BlendLayer-6a2ab430.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const TablesMixin = require('./TablesMixin-d3e0d4c7.js');
const writeUtils = require('./writeUtils-7bdc195a.js');
require('./index-fde8502c.js');
require('./asyncUtils-cd78b718.js');
require('./Portal-8d16604d.js');
require('./geometry-ef17530a.js');
require('./Identifiable-a4f50f85.js');
require('./colorUtils-e70dbab5.js');
require('./screenUtils-d911ae62.js');
require('./mat4-f68486bc.js');
require('./common-41a349f2.js');
require('./TimeExtent-8b558884.js');
require('./persistableUrlUtils-c611d652.js');
require('./ElevationInfo-d3e3d64f.js');
require('./opacityUtils-f2e4b347.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./PortalItem-8bcd02f8.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(BlendLayer.i(ScaleRangeLayer.s(OperationalLayer.y(PortalLayer.w(TablesMixin.c(TablesMixin.p(MultiOriginJSONSupport.l(Layer.b)))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this);}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0);}_writeLayers(i,e,s,r){const o=[];if(!i)return o;i.forEach((i=>{const e=writeUtils.y(i,r.webmap?r.webmap.getLayerJSONFromResourceInfo(i):null,r);request.r(e)&&e.layerType&&o.push(e);})),e.layers=o;}set portalItem(i){this._set("portalItem",i);}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible);}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return loadAll.n(this,(i=>{i(this.layers);}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0);}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1);}));}_enforceVisibility(i,e){if(!request.e$3(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e;}));}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i;}));}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};request.e([request.d()],m.prototype,"fullExtent",void 0),request.e([request.d({json:{read:!1,write:{ignoreOrigin:!0}}})],m.prototype,"layers",void 0),request.e([request.r$2("layers")],m.prototype,"_writeLayers",null),request.e([request.d({type:["GroupLayer"]})],m.prototype,"operationalLayerType",void 0),request.e([request.d({json:{origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",null),request.e([request.d()],m.prototype,"spatialReference",void 0),request.e([request.d({json:{read:!1},readOnly:!0,value:"group"})],m.prototype,"type",void 0),request.e([request.d({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],m.prototype,"visibilityMode",null),m=request.e([request.i("esri.layers.GroupLayer")],m);const u=m;

exports.default = u;
