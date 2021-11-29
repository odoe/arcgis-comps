import { r, ai as e, e as e$1, b as d, i as i$1 } from './cast-e5ea2533.js';
import { n } from './loadAll-a2448ab4.js';
import { l, b } from './Layer-663fafaf.js';
import { r as r$1 } from './Portal-f1457cb4.js';
import { i } from './BlendLayer-34bd1b5b.js';
import { y } from './OperationalLayer-0f16c161.js';
import { w } from './PortalLayer-0ef8a2d2.js';
import { s } from './ScaleRangeLayer-f5a96945.js';
import { c, p } from './TablesMixin-f9d42d97.js';
import { y as y$1 } from './writeUtils-f98d31f7.js';
import './asyncUtils-847ae6e6.js';
import './Collection-ac20f1a1.js';
import './JSONSupport-8dda8bae.js';
import './geometry-160ffbb5.js';
import './Polyline-56152656.js';
import './Identifiable-0fb3fc58.js';
import './jsonUtils-687db5e9.js';
import './colorUtils-37750ea3.js';
import './screenUtils-9ed89fa7.js';
import './mat4-0196b8fc.js';
import './common-e2a70efa.js';
import './_commonjsHelpers-020ca939.js';
import './commonProperties-4c10a963.js';
import './TimeExtent-ecf7e6f2.js';
import './persistableUrlUtils-a9da326c.js';
import './opacityUtils-5755cb64.js';
import './lengthUtils-2084b777.js';
import './unitUtils-5dcccb3c.js';
import './PortalItem-85b3bb14.js';
import './assets-1ab0ccbe.js';
import './collectionUtils-b35b097b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(i(s(y(w(c(p(l(b)))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this);}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0);}_writeLayers(i,e,s,r$1){const o=[];if(!i)return o;i.forEach((i=>{const e=y$1(i,r$1.webmap?r$1.webmap.getLayerJSONFromResourceInfo(i):null,r$1);r(e)&&e.layerType&&o.push(e);})),e.layers=o;}set portalItem(i){this._set("portalItem",i);}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible);}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return n(this,(i=>{i(this.layers);}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0);}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1);}));}_enforceVisibility(i,e$1){if(!e(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e$1;}));}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i;}));}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};e$1([d()],m.prototype,"fullExtent",void 0),e$1([d({json:{read:!1,write:{ignoreOrigin:!0}}})],m.prototype,"layers",void 0),e$1([r$1("layers")],m.prototype,"_writeLayers",null),e$1([d({type:["GroupLayer"]})],m.prototype,"operationalLayerType",void 0),e$1([d({json:{origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",null),e$1([d()],m.prototype,"spatialReference",void 0),e$1([d({json:{read:!1},readOnly:!0,value:"group"})],m.prototype,"type",void 0),e$1([d({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],m.prototype,"visibilityMode",null),m=e$1([i$1("esri.layers.GroupLayer")],m);const u=m;

export default u;
