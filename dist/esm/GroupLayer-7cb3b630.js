import { bh as e, e as e$1, d, i as i$1, r as r$1 } from './messageBundle-8a146a9b.js';
import { n } from './loadAll-446fc3cf.js';
import { l, b } from './Layer-455faab4.js';
import { d as r } from './unitUtils-c707ba3c.js';
import { i } from './BlendLayer-286c847c.js';
import { y } from './OperationalLayer-52601c7c.js';
import { w } from './PortalLayer-faa3179f.js';
import { s } from './ScaleRangeLayer-aeac5429.js';
import { c, p } from './TablesMixin-8c331347.js';
import { y as y$1 } from './writeUtils-a3943f03.js';
import './index-41925fe8.js';
import './asyncUtils-c98101f9.js';
import './JSONSupport-4e29e63d.js';
import './jsonUtils-433a912a.js';
import './mat4-1ee7ce2f.js';
import './commonProperties-0e370622.js';
import './TimeExtent-16986fe0.js';
import './lengthUtils-a6878787.js';
import './PortalItem-3f93baa8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(i(s(y(w(c(p(l(b)))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this);}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0);}_writeLayers(i,e,s,r){const o=[];if(!i)return o;i.forEach((i=>{const e=y$1(i,r.webmap?r.webmap.getLayerJSONFromResourceInfo(i):null,r);r$1(e)&&e.layerType&&o.push(e);})),e.layers=o;}set portalItem(i){this._set("portalItem",i);}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible);}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return n(this,(i=>{i(this.layers);}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0);}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1);}));}_enforceVisibility(i,e$1){if(!e(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e$1;}));}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i;}));}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};e$1([d()],m.prototype,"fullExtent",void 0),e$1([d({json:{read:!1,write:{ignoreOrigin:!0}}})],m.prototype,"layers",void 0),e$1([r("layers")],m.prototype,"_writeLayers",null),e$1([d({type:["GroupLayer"]})],m.prototype,"operationalLayerType",void 0),e$1([d({json:{origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",null),e$1([d()],m.prototype,"spatialReference",void 0),e$1([d({json:{read:!1},readOnly:!0,value:"group"})],m.prototype,"type",void 0),e$1([d({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],m.prototype,"visibilityMode",null),m=e$1([i$1("esri.layers.GroupLayer")],m);const u=m;

export default u;
