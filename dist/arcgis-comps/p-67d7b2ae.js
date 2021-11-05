import{W as t,aj as s,B as i,U as e,$ as r,g as p,e as o,i as a}from"./p-7b6f6c18.js";import{l as h,u as n}from"./p-0b691897.js";import{i as m}from"./p-5448dec1.js";import{r as c}from"./p-2d5d1985.js";import"./p-227a5838.js";import"./p-a4a5967b.js";import"./p-033339b0.js";import"./p-804725e3.js";import"./p-1dd7027e.js";import"./p-cede17c2.js";import"./p-ea65d9c9.js";import"./p-47e1bd73.js";import"./p-b392deaf.js";import"./p-9790d1b4.js";import"./p-51e4508b.js";import"./p-50ff864e.js";import"./p-54e8960f.js";import"./p-fb136006.js";import"./p-1088d11f.js";import"./p-e53f77c2.js";import"./p-5bfd1d7e.js";import"./p-4414d64f.js";import"./p-a617738c.js";import"./p-a16c2b1d.js";import"./p-167d094f.js";import"./p-97ec6ae5.js";import"./p-10e211d9.js";import"./p-df9635e1.js";import"./p-7d065686.js";import"./p-94807627.js";import"./p-3e28396b.js";import"./p-f78de11d.js";import"./p-269bd937.js";import"./p-dfd2d479.js";import"./p-9f705d18.js";import"./p-ec834938.js";import"./p-55e3d31e.js";import"./p-dede18bd.js";import"./p-5c077b4e.js";import"./p-e991a11e.js";import"./p-b1c9647c.js";const d="sublayers",f="layerView",j=Object.freeze({remove(){},pause(){},resume(){}});let u=class extends(h(n)){async fetchPopupFeatures(t){return(await Promise.all(Array.from(this.graphicsViews(),(s=>s.searchFeatures(t).then((t=>t.filter((t=>!!t.popupTemplate)))))))).flat()}*graphicsViews(){t(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():t(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(s,i){if(this.suspended)return null;const e=Array.from(this.graphicsViews(),(async e=>{const r=await e.hitTest(s,i);if(r){if(t(this._graphicsViewsFeatureCollectionMap)){const t=this._graphicsViewsFeatureCollectionMap.get(e);!r.popupTemplate&&t.popupTemplate&&(r.popupTemplate=t.popupTemplate)}return r}return null}));return(await Promise.all(e)).filter((t=>!!t))[0]||null}highlight(t){let e;if("number"==typeof t?e=[t]:t instanceof s?e=[t.uid]:Array.isArray(t)&&t.length>0?e="number"==typeof t[0]?t:t.map((t=>t&&t.uid)):i.isCollection(t)&&(e=t.map((t=>t&&t.uid)).toArray()),e=e.filter((t=>null!=t)),!e.length)return j;for(const t of this.graphicsViews())t.addHighlight(e);return{remove:()=>{for(const t of this.graphicsViews())t.removeHighlight(e)}}}update(t){for(const s of this.graphicsViews())s.processUpdate(t)}attach(){const s=this.view,i=()=>this.requestUpdate(),p=this.layer.featureCollections;if(t(p)&&p.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of p){const r=new m(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const p=new c({view:s,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i,container:r});this._graphicsViewsFeatureCollectionMap.set(p,t),this.container.addChild(p.container),this.handles.add([e(t,"visible",(t=>p.container.visible=t)),e(p,"updating",(()=>this.notifyChange("updating")))],f)}}else t(this.layer.sublayers)&&this.handles.add(r(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),d)}detach(){this._destroyGraphicsViews(),this.handles.remove(d)}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews())t.viewChange()}isUpdating(){for(const t of this.graphicsViews())if(t.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(f);for(const t of this.graphicsViews())t.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),p(this.layer.sublayers))return;const t=[],s=this.view,i=()=>this.requestUpdate();for(const r of this.layer.sublayers){const p=new m(this.view.featuresTilingScheme);p.fadeTransitionEnabled=!0;const o=new c({view:s,graphics:r.graphics,requestUpdateCallback:i,container:p});this.handles.add([r.on("graphic-update",o.graphicUpdateHandler),e(r,"visible",(t=>o.container.visible=t)),e(o,"updating",(()=>this.notifyChange("updating")))],f),this.container.addChild(o.container),t.push(o)}this._graphicsViews=t}};u=o([a("esri.views.2d.layers.MapNotesLayerView2D")],u);const l=u;export default l;