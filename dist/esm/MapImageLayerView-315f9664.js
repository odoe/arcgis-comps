import { e, d, i, s, T, A as r } from './messageBundle-f75b4090.js';
import { g } from './OperationalLayer-d609e521.js';
import { c as c$1 } from './ExportImageParameters-bf735613.js';
import { s as s$1 } from './drapedUtils-4802ed0b.js';
import { a } from './opacityUtils-5e864561.js';
import { t, d as d$1 } from './popupUtils-a43f7eb9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=c=>{let y=class extends c{initialize(){this.exportImageParameters=new c$1({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,s$2){const{layer:a}=this;if(!e)return Promise.reject(new s("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const p=this.get("view.scale"),i=[],l=async e=>{const r$1=0===e.minScale||p<=e.minScale,o=0===e.maxScale||p>=e.maxScale;if(e.visible&&r$1&&o)if(e.sublayers)e.sublayers.forEach(l);else if(e.popupEnabled){const r$1=d$1(e,{...s$2,defaultPopupTemplateEnabled:!1});r(r$1)&&i.unshift({sublayer:e,popupTemplate:r$1});}},c=a.sublayers.toArray().reverse().map(l);await Promise.all(c);const y=i.map((async({sublayer:r$1,popupTemplate:o})=>{await r$1.load().catch((()=>{}));const a=r$1.createQuery(),p=r(s$2)?s$2.event:null,i=s$1({renderer:r$1.renderer,event:p}),l=this.createFetchPopupFeaturesQueryGeometry(e,i);a.geometry=l,a.outFields=await t(r$1,o);const u=await this._loadArcadeModules(o);u&&u.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=l.width/i);return (await r$1.queryFeatures(a)).features}));return (await T(y)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return a()}};return e([d()],y.prototype,"exportImageParameters",void 0),e([d({readOnly:!0})],y.prototype,"exportImageVersion",null),e([d()],y.prototype,"layer",void 0),e([d()],y.prototype,"suspended",void 0),e([d(g)],y.prototype,"timeExtent",void 0),y=e([i("esri.views.layers.MapImageLayerView")],y),y};

export { c };
