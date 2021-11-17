'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const Container = require('./Container-cb837708.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const HandleOwner = require('./HandleOwner-f254dc86.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e$1=class extends JSONSupport.a{};e$1=request.e([request.i("esri.views.layers.support.ClipArea")],e$1);const t=e$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var s;let i=s=class extends t{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null;}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return (this._get("version")||0)+1}};request.e([request.d({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),request.e([request.d({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),request.e([request.d({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),request.e([request.d({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),request.e([request.d({readOnly:!0})],i.prototype,"version",null),i=s=request.e([request.i("esri.views.layers.support.ClipRect")],i);const p$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var y;const n={base:unitUtils.p,key:"type",typeMap:{extent:unitUtils.M,polygon:unitUtils.v}};let c$1=y=class extends t{constructor(){super(...arguments),this.type="geometry",this.geometry=null;}get version(){return (this._get("version")||0)+1}clone(){return new y({geometry:this.geometry.clone()})}};request.e([request.d({types:n,json:{read:unitUtils.d$1,write:!0}})],c$1.prototype,"geometry",void 0),request.e([request.d({readOnly:!0})],c$1.prototype,"version",null),c$1=y=request.e([request.i("esri.views.layers.support.Geometry")],c$1);const a=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends t{constructor(){super(...arguments),this.type="path",this.path=[];}get version(){return (this._get("version")||0)+1}};request.e([request.d({type:[[[Number]]],json:{write:!0}})],e.prototype,"path",void 0),request.e([request.d({readOnly:!0})],e.prototype,"version",null),e=request.e([request.i("esri.views.layers.support.Path")],e);const p=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=request.S$1.ofType({key:"type",base:t,typeMap:{rect:p$1,path:p,geometry:a}}),l=e=>{let p=class extends e{constructor(){super(...arguments),this.clips=new c,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1;}initialize(){var t;this.container||(this.container=new Container.n),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([request.i$1(this,"suspended",(t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate();}),!0),request.i$1(this,["layer.opacity","container"],(()=>{var t,e;this.container&&(this.container.opacity=null!=(t=null==(e=this.layer)?void 0:e.opacity)?t:1);}),!0),request.i$1(this,["layer.blendMode"],(t=>{this.container&&(this.container.blendMode=t);}),!0),request.i$1(this,["layer.effect"],(t=>{this.container&&(this.container.effect=t);}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips");}))]),null!=(t=this.view)&&t.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0);}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0);}),(()=>{}));}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1;}get updating(){return !this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(t){let e=!0;const s=this.layer,i=s.minScale,r=s.maxScale;if(null!=i&&null!=r){let s=!i,a=!r;!s&&t<=i&&(s=!0),!a&&t>=r&&(a=!0),e=s&&a;}return e}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate());}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1;}isUpdating(){return !1}isRendering(){return !1}canResume(){return !!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return request.e([request.d({type:c,set(t){const e=unitUtils.n(t,this._get("clips"),c);this._set("clips",e);}})],p.prototype,"clips",void 0),request.e([request.d()],p.prototype,"moving",void 0),request.e([request.d()],p.prototype,"attached",void 0),request.e([request.d()],p.prototype,"container",void 0),request.e([request.d()],p.prototype,"suspended",void 0),request.e([request.d({readOnly:!0})],p.prototype,"updateParameters",void 0),request.e([request.d()],p.prototype,"updateRequested",void 0),request.e([request.d()],p.prototype,"updating",null),request.e([request.d()],p.prototype,"view",void 0),p=request.e([request.i("esri.views.2d.layers.LayerView2D")],p),p};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let d=class extends(HandleOwner.a(unitUtils.r$3(request.n$3(request.n$1.EventedMixin(request.p))))){constructor(e){super(e),this.layer=null,this.parent=null;}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer&&this.layer.title||"no title";throw request.s$2.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e),e}}));}get fullOpacity(){return request.c$2(this.get("layer.opacity"),1)*request.c$2(this.get("parent.fullOpacity"),1)}get suspended(){return !this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return !this.suspended&&!0===this.layer.legendEnabled}get updating(){return !!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return !0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible");}canResume(){return !this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return !1}};request.e([request.d()],d.prototype,"fullOpacity",null),request.e([request.d()],d.prototype,"layer",void 0),request.e([request.d()],d.prototype,"parent",void 0),request.e([request.d({readOnly:!0})],d.prototype,"suspended",null),request.e([request.d({readOnly:!0})],d.prototype,"suspendInfo",null),request.e([request.d({readOnly:!0})],d.prototype,"legendEnabled",null),request.e([request.d({type:Boolean,readOnly:!0})],d.prototype,"updating",null),request.e([request.d({readOnly:!0})],d.prototype,"updatingProgress",null),request.e([request.d()],d.prototype,"visible",null),d=request.e([request.i("esri.views.layers.LayerView")],d);const u=d;

exports.l = l;
exports.u = u;
