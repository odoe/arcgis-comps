import { e, d, i, p, u, A as r, b as d$2, ai as l$1, S, af as t, a as i$1 } from './messageBundle-f75b4090.js';
import { h } from './Graphic-3961df6c.js';
import { m } from './diffUtils-849b3672.js';
import { b as b$1 } from './Layer-b50ea610.js';
import { d as c, aX as F, aY as r$1 } from './ColorMaterial-cf44e08d.js';
import { b } from './Query-d6335b3a.js';
import { y, I as Ie } from './Graphics3DScaleVisibility-ba173ead.js';
import { d as d$1, s } from './Graphics3DObjectStates-3b2e9122.js';
import { l } from './HandleOwner-88326c19.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let v=class extends p{constructor(t){super(t),this.graphicsCore=null,this.elevationAlignment=new d$1,this.watchUpdatingTracking=new l,this.handles=new u,this.suspendResumeExtent=null;}normalizeCtorArgs(t){let e=null;t.scaleVisibilityEnabled&&(delete(t={...t}).scaleVisibilityEnabled,e=new y);const i=new Ie({owner:t.owner,layer:t.layer,preferredUpdatePolicy:1,graphicSymbolSupported:!0});return {...t,graphicsCore:i,scaleVisibility:e}}initialize(){const t=this.scaleVisibility;r(t)&&"minScale"in this.layer&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",(()=>t.layerMinMaxScaleChangeHandler())),"elevationInfo"in this.layer&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",((t,e)=>{m(t,e)&&this.watchUpdatingTracking.addPromise(this.graphicsCore.elevationInfoChange());}));}async setup(){const t=(t,e,i)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(t,e,i);if(this.elevationAlignment.setup(this.owner,t,this.graphicsCore,this.view.elevationProvider),r(this.scaleVisibility)&&"minScale"in this.layer){const e=this.owner.view.basemapTerrain;this.scaleVisibility.setup(this.owner,this.layer,t,this.graphicsCore,e);}this._set("objectStates",new s(this.graphicsCore));try{await this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates});}catch(e){if(d$2(e))return;throw e}this.destroyed||(this.handles.add(this.view.watch("clippingArea",(()=>this.updateClippingExtent()),!0)),this.updateClippingExtent(),this.setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics());}destroy(){this.handles=l$1(this.handles),this.watchUpdatingTracking.destroy(),this._set("elevationAlignment",l$1(this.elevationAlignment)),this._set("scaleVisibility",l$1(this.scaleVisibility)),this._set("objectStates",l$1(this.objectStates)),this._set("graphicsCore",l$1(this.graphicsCore));}get suspended(){return !(!r(this.scaleVisibility)||!this.scaleVisibility.suspended)}get updating(){var t,e;return !!(null!=(t=this.graphicsCore)&&t.updating||r(this.scaleVisibility)&&this.scaleVisibility.updating||null!=(e=this.watchUpdatingTracking)&&e.updating)}getGraphicFromGraphicUid(t){if(this.owner.loadedGraphics){const e=this.owner.loadedGraphics.find((e=>e.uid===t));if(e){const t=this.layer instanceof b$1?this.layer:null;return c(e,t)}}}whenGraphicBounds(t,e){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(t,e):Promise.reject()}computeAttachmentOrigin(t,e){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(t,e):null}getSymbolLayerSize(t,e){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(t,e):null}maskOccludee(t){const{set:e,handle:i}=this.objectStates.acquireSet(1,null);return this.objectStates.setUid(e,t.uid),i}highlight(t){if(t instanceof b)return x;if("number"==typeof t)return this.highlight([t]);if(t instanceof h)return this.highlight([t]);if(t instanceof S&&(t=t.toArray()),Array.isArray(t)&&t.length>0){if(t[0]instanceof h){const e=t.map((t=>t.uid)),{set:i,handle:s}=this.objectStates.acquireSet(0,null);return this.objectStates.setUids(i,e),s}if("number"==typeof t[0]){const e=t,{set:i,handle:s}=this.objectStates.acquireSet(0,null);return this.objectStates.setObjectIds(i,e),s}}return x}updateClippingExtent(){const t=this.view.clippingArea;this.graphicsCore.setClippingExtent(t,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics();}updateSuspendResumeExtent(){t(this.scaleVisibility)||(this.suspendResumeExtent=F(this.graphicsCore.computedExtent,this.suspendResumeExtent,r$1,this.graphicsCore.extentPadding),this.scaleVisibility.setExtent(this.suspendResumeExtent));}setupSuspendResumeExtent(){t(this.scaleVisibility)||(i$1(this.graphicsCore,"computedExtent",(t=>this.updateSuspendResumeExtent()),!0),this.graphicsCore.watch("extentPadding",(t=>this.updateSuspendResumeExtent())));}};e([d({constructOnly:!0})],v.prototype,"owner",void 0),e([d({constructOnly:!0})],v.prototype,"layer",void 0),e([d({readOnly:!0,aliasOf:"owner.view"})],v.prototype,"view",void 0),e([d({constructOnly:!0})],v.prototype,"graphicsCore",void 0),e([d({constructOnly:!0})],v.prototype,"scaleVisibility",void 0),e([d({readOnly:!0})],v.prototype,"elevationAlignment",void 0),e([d({readOnly:!0})],v.prototype,"objectStates",void 0),e([d({readOnly:!0})],v.prototype,"watchUpdatingTracking",void 0),e([d({readOnly:!0})],v.prototype,"suspended",null),e([d({readOnly:!0})],v.prototype,"updating",null),v=e([i("esri.views.3d.layers.graphics.Graphics3DGraphicLikeLayerView")],v);const x={remove(){},pause(){},resume(){}},E=v;

export { E };
