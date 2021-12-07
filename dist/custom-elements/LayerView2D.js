import { e as e$2, i as i$1, cS as a$1, d, g as d$1, kt as p$2, M, bX as v, S, jl as n$1, a4 as i$2 } from './index.js';
import { n as n$2 } from './Container.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e$1=class extends a$1{};e$1=e$2([i$1("esri.views.layers.support.ClipArea")],e$1);const t=e$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var s;let i=s=class extends t{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null;}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return (this._get("version")||0)+1}};e$2([d({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),e$2([d({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),e$2([d({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),e$2([d({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),e$2([d({readOnly:!0})],i.prototype,"version",null),i=s=e$2([i$1("esri.views.layers.support.ClipRect")],i);const p$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var y;const n={base:p$2,key:"type",typeMap:{extent:M,polygon:v}};let c$1=y=class extends t{constructor(){super(...arguments),this.type="geometry",this.geometry=null;}get version(){return (this._get("version")||0)+1}clone(){return new y({geometry:this.geometry.clone()})}};e$2([d({types:n,json:{read:d$1,write:!0}})],c$1.prototype,"geometry",void 0),e$2([d({readOnly:!0})],c$1.prototype,"version",null),c$1=y=e$2([i$1("esri.views.layers.support.Geometry")],c$1);const a=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends t{constructor(){super(...arguments),this.type="path",this.path=[];}get version(){return (this._get("version")||0)+1}};e$2([d({type:[[[Number]]],json:{write:!0}})],e.prototype,"path",void 0),e$2([d({readOnly:!0})],e.prototype,"version",null),e=e$2([i$1("esri.views.layers.support.Path")],e);const p=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=S.ofType({key:"type",base:t,typeMap:{rect:p$1,path:p,geometry:a}}),l=e=>{let p=class extends e{constructor(){super(...arguments),this.clips=new c,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1;}initialize(){var t;this.container||(this.container=new n$2),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([i$2(this,"suspended",(t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate();}),!0),i$2(this,["layer.opacity","container"],(()=>{var t,e;this.container&&(this.container.opacity=null!=(t=null==(e=this.layer)?void 0:e.opacity)?t:1);}),!0),i$2(this,["layer.blendMode"],(t=>{this.container&&(this.container.blendMode=t);}),!0),i$2(this,["layer.effect"],(t=>{this.container&&(this.container.effect=t);}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips");}))]),null!=(t=this.view)&&t.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0);}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0);}),(()=>{}));}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1;}get updating(){return !this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(t){let e=!0;const s=this.layer,i=s.minScale,r=s.maxScale;if(null!=i&&null!=r){let s=!i,a=!r;!s&&t<=i&&(s=!0),!a&&t>=r&&(a=!0),e=s&&a;}return e}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate());}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1;}isUpdating(){return !1}isRendering(){return !1}canResume(){return !!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return e$2([d({type:c,set(t){const e=n$1(t,this._get("clips"),c);this._set("clips",e);}})],p.prototype,"clips",void 0),e$2([d()],p.prototype,"moving",void 0),e$2([d()],p.prototype,"attached",void 0),e$2([d()],p.prototype,"container",void 0),e$2([d()],p.prototype,"suspended",void 0),e$2([d({readOnly:!0})],p.prototype,"updateParameters",void 0),e$2([d()],p.prototype,"updateRequested",void 0),e$2([d()],p.prototype,"updating",null),e$2([d()],p.prototype,"view",void 0),p=e$2([i$1("esri.views.2d.layers.LayerView2D")],p),p};

export { l };
