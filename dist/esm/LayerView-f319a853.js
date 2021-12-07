import { n, r as n$1, p, c as s, aW as c, e, d as d$1, i } from './messageBundle-f75b4090.js';
import { a } from './HandleOwner-88326c19.js';
import { r } from './Identifiable-da047c47.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let d=class extends(a(r(n(n$1.EventedMixin(p))))){constructor(e){super(e),this.layer=null,this.parent=null;}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer&&this.layer.title||"no title";throw s.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e),e}}));}get fullOpacity(){return c(this.get("layer.opacity"),1)*c(this.get("parent.fullOpacity"),1)}get suspended(){return !this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return !this.suspended&&!0===this.layer.legendEnabled}get updating(){return !!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return !0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible");}canResume(){return !this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return !1}};e([d$1()],d.prototype,"fullOpacity",null),e([d$1()],d.prototype,"layer",void 0),e([d$1()],d.prototype,"parent",void 0),e([d$1({readOnly:!0})],d.prototype,"suspended",null),e([d$1({readOnly:!0})],d.prototype,"suspendInfo",null),e([d$1({readOnly:!0})],d.prototype,"legendEnabled",null),e([d$1({type:Boolean,readOnly:!0})],d.prototype,"updating",null),e([d$1({readOnly:!0})],d.prototype,"updatingProgress",null),e([d$1()],d.prototype,"visible",null),d=e([i("esri.views.layers.LayerView")],d);const u=d;

export { u };
