'use strict';

const request = require('./messageBundle-8be88d04.js');
const HandleOwner = require('./HandleOwner-9c4c158c.js');
const Identifiable = require('./Identifiable-a4f50f85.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let d=class extends(HandleOwner.a(Identifiable.r(request.n(request.n$2.EventedMixin(request.p))))){constructor(e){super(e),this.layer=null,this.parent=null;}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer&&this.layer.title||"no title";throw request.s$1.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e),e}}));}get fullOpacity(){return request.c$2(this.get("layer.opacity"),1)*request.c$2(this.get("parent.fullOpacity"),1)}get suspended(){return !this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return !this.suspended&&!0===this.layer.legendEnabled}get updating(){return !!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return !0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible");}canResume(){return !this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return !1}};request.e([request.d()],d.prototype,"fullOpacity",null),request.e([request.d()],d.prototype,"layer",void 0),request.e([request.d()],d.prototype,"parent",void 0),request.e([request.d({readOnly:!0})],d.prototype,"suspended",null),request.e([request.d({readOnly:!0})],d.prototype,"suspendInfo",null),request.e([request.d({readOnly:!0})],d.prototype,"legendEnabled",null),request.e([request.d({type:Boolean,readOnly:!0})],d.prototype,"updating",null),request.e([request.d({readOnly:!0})],d.prototype,"updatingProgress",null),request.e([request.d()],d.prototype,"visible",null),d=request.e([request.i("esri.views.layers.LayerView")],d);const u=d;

exports.u = u;
