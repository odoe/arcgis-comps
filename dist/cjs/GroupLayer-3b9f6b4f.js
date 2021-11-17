'use strict';

const request = require('./messageBundle-312ceb47.js');
const loadAll = require('./loadAll-57962b35.js');
const Layer = require('./Layer-849337e0.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const BlendLayer = require('./BlendLayer-7e864068.js');
const OperationalLayer = require('./OperationalLayer-f89b9d70.js');
const PortalLayer = require('./PortalLayer-19d79370.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-52589af6.js');
const TablesMixin = require('./TablesMixin-bdd488ef.js');
const writeUtils = require('./writeUtils-efed1c82.js');
require('./index-57f2cfbb.js');
require('./asyncUtils-9f974032.js');
require('./JSONSupport-53c01d03.js');
require('./jsonUtils-4461cf25.js');
require('./mat4-1439266d.js');
require('./commonProperties-75b954b3.js');
require('./TimeExtent-cdfe048b.js');
require('./lengthUtils-3475e67e.js');
require('./PortalItem-42e06deb.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(BlendLayer.i(ScaleRangeLayer.s(OperationalLayer.y(PortalLayer.w(TablesMixin.c(TablesMixin.p(Layer.l(Layer.b)))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this);}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0);}_writeLayers(i,e,s,r){const o=[];if(!i)return o;i.forEach((i=>{const e=writeUtils.y(i,r.webmap?r.webmap.getLayerJSONFromResourceInfo(i):null,r);request.r(e)&&e.layerType&&o.push(e);})),e.layers=o;}set portalItem(i){this._set("portalItem",i);}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible);}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return loadAll.n(this,(i=>{i(this.layers);}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0);}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1);}));}_enforceVisibility(i,e){if(!request.e$5(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e;}));}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i;}));}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};request.e([request.d()],m.prototype,"fullExtent",void 0),request.e([request.d({json:{read:!1,write:{ignoreOrigin:!0}}})],m.prototype,"layers",void 0),request.e([unitUtils.r$1("layers")],m.prototype,"_writeLayers",null),request.e([request.d({type:["GroupLayer"]})],m.prototype,"operationalLayerType",void 0),request.e([request.d({json:{origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",null),request.e([request.d()],m.prototype,"spatialReference",void 0),request.e([request.d({json:{read:!1},readOnly:!0,value:"group"})],m.prototype,"type",void 0),request.e([request.d({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],m.prototype,"visibilityMode",null),m=request.e([request.i("esri.layers.GroupLayer")],m);const u=m;

exports.default = u;
