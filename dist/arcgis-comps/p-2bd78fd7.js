import{r as p,E as t,a as s,$ as i,t as r,e as o,i as e}from"./p-9ae46e68.js";import{h as m}from"./p-566b0715.js";import{l as j,u as a}from"./p-ebe5e529.js";import{i as c}from"./p-220bdae9.js";import{r as f}from"./p-798e3ebd.js";import"./p-84bf99cb.js";import"./p-fe01b82b.js";import"./p-6ab16fcc.js";import"./p-7a648ea5.js";import"./p-b2a0fae5.js";import"./p-6ebb24ba.js";import"./p-4fd6e394.js";import"./p-4681e856.js";import"./p-a0e42f29.js";import"./p-41655335.js";import"./p-3ffd0931.js";import"./p-8031c809.js";import"./p-3048cc18.js";import"./p-c7a0a732.js";import"./p-b2d0e2de.js";import"./p-db87794e.js";import"./p-22c8d854.js";import"./p-3d1b25b6.js";import"./p-f42060e0.js";import"./p-79553c8d.js";import"./p-8e03c038.js";import"./p-32462343.js";import"./p-98a14d68.js";import"./p-32824614.js";import"./p-40d3b500.js";import"./p-c8f716a9.js";import"./p-57ae469d.js";import"./p-27ef204b.js";import"./p-3a2e88bf.js";import"./p-9e860e7b.js";import"./p-ada83011.js";import"./p-98ce0cca.js";import"./p-4003c7ae.js";import"./p-a7080451.js";import"./p-7e9d2371.js";import"./p-94f8dc11.js";import"./p-bb07d873.js";import"./p-8ac97b63.js";import"./p-a0a931f0.js";import"./p-dfc6337f.js";import"./p-77e6a663.js";import"./p-c5b7f7c3.js";import"./p-30ddb3a0.js";import"./p-74fc1b7f.js";import"./p-b3024dec.js";import"./p-4fcbc3c5.js";import"./p-4b3ae2cf.js";import"./p-6443bfb4.js";import"./p-8e6daf54.js";import"./p-c0757461.js";import"./p-93d9099f.js";import"./p-d3898fd7.js";import"./p-844dad6c.js";import"./p-c59d0a4d.js";import"./p-3a5fe179.js";import"./p-138c2b2c.js";import"./p-ae0b06e3.js";import"./p-a293872e.js";import"./p-f271906a.js";import"./p-cf2267f9.js";import"./p-d2e19070.js";import"./p-e5429b9e.js";import"./p-cf8dc9be.js";import"./p-f17028ec.js";import"./p-5c89c68e.js";import"./p-725fd184.js";import"./p-0c91ebaf.js";import"./p-72355290.js";import"./p-d68829c1.js";import"./p-81102839.js";import"./p-2f7c985e.js";import"./p-00b9ea57.js";import"./p-5a0fe1d0.js";import"./p-7818def0.js";import"./p-da143060.js";import"./p-15bb2887.js";import"./p-1f10277d.js";import"./p-2b250922.js";import"./p-285c6a34.js";import"./p-81e5b36e.js";import"./p-1d6f3ddb.js";import"./p-789e71c1.js";import"./p-523f37cd.js";import"./p-a198d6d0.js";import"./p-15515b8a.js";import"./p-264c75ac.js";import"./p-c431b12a.js";import"./p-b0f556d6.js";import"./p-8b767e6c.js";import"./p-8d03d70f.js";import"./p-9658240e.js";import"./p-d6725707.js";import"./p-d925341f.js";import"./p-c3efb223.js";import"./p-bae36c84.js";import"./p-39da60a5.js";import"./p-56ed1c7a.js";import"./p-d18723b0.js";import"./p-b62a8a4f.js";import"./p-f614dce4.js";import"./p-0c60bcc4.js";import"./p-16def889.js";import"./p-7c7c5507.js";import"./p-128c292d.js";import"./p-2d0c34e5.js";import"./p-47e1bd73.js";import"./p-b392deaf.js";import"./p-9790d1b4.js";import"./p-47f143cb.js";import"./p-50ff864e.js";import"./p-81abd5fc.js";import"./p-da4ee59d.js";import"./p-dd4e6b8b.js";import"./p-d40c97c9.js";import"./p-eb19a862.js";import"./p-4414d64f.js";import"./p-a617738c.js";import"./p-ffe0d3ad.js";import"./p-9dbf3f05.js";import"./p-97ec6ae5.js";import"./p-0509f8e7.js";import"./p-9739c166.js";import"./p-1fb61ab0.js";import"./p-d778cb09.js";import"./p-9dcf03f7.js";import"./p-2a252a78.js";import"./p-5fb38925.js";import"./p-e6a400a0.js";import"./p-6c45ae96.js";import"./p-685003b3.js";import"./p-6e4caa55.js";import"./p-d30fd87a.js";import"./p-58fed22f.js";import"./p-e991a11e.js";import"./p-b1c9647c.js";const d="sublayers",b="layerView",h=Object.freeze({remove(){},pause(){},resume(){}});let n=class extends(j(a)){async fetchPopupFeatures(p){return(await Promise.all(Array.from(this.graphicsViews(),(t=>t.searchFeatures(p).then((p=>p.filter((p=>!!p.popupTemplate)))))))).flat()}*graphicsViews(){p(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():p(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(t,s){if(this.suspended)return null;const i=Array.from(this.graphicsViews(),(async i=>{const r=await i.hitTest(t,s);if(r){if(p(this._graphicsViewsFeatureCollectionMap)){const p=this._graphicsViewsFeatureCollectionMap.get(i);!r.popupTemplate&&p.popupTemplate&&(r.popupTemplate=p.popupTemplate)}return r}return null}));return(await Promise.all(i)).filter((p=>!!p))[0]||null}highlight(p){let s;if("number"==typeof p?s=[p]:p instanceof m?s=[p.uid]:Array.isArray(p)&&p.length>0?s="number"==typeof p[0]?p:p.map((p=>p&&p.uid)):t.isCollection(p)&&(s=p.map((p=>p&&p.uid)).toArray()),s=s.filter((p=>null!=p)),!s.length)return h;for(const p of this.graphicsViews())p.addHighlight(s);return{remove:()=>{for(const p of this.graphicsViews())p.removeHighlight(s)}}}update(p){for(const t of this.graphicsViews())t.processUpdate(p)}attach(){const t=this.view,r=()=>this.requestUpdate(),o=this.layer.featureCollections;if(p(o)&&o.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const p of o){const i=new c(this.view.featuresTilingScheme);i.fadeTransitionEnabled=!0;const o=new f({view:t,graphics:p.source,renderer:p.renderer,requestUpdateCallback:r,container:i});this._graphicsViewsFeatureCollectionMap.set(o,p),this.container.addChild(o.container),this.handles.add([s(p,"visible",(p=>o.container.visible=p)),s(o,"updating",(()=>this.notifyChange("updating")))],b)}}else p(this.layer.sublayers)&&this.handles.add(i(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),d)}detach(){this._destroyGraphicsViews(),this.handles.remove(d)}moveStart(){}moveEnd(){}viewChange(){for(const p of this.graphicsViews())p.viewChange()}isUpdating(){for(const p of this.graphicsViews())if(p.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(b);for(const p of this.graphicsViews())p.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),r(this.layer.sublayers))return;const p=[],t=this.view,i=()=>this.requestUpdate();for(const r of this.layer.sublayers){const o=new c(this.view.featuresTilingScheme);o.fadeTransitionEnabled=!0;const e=new f({view:t,graphics:r.graphics,requestUpdateCallback:i,container:o});this.handles.add([r.on("graphic-update",e.graphicUpdateHandler),s(r,"visible",(p=>e.container.visible=p)),s(e,"updating",(()=>this.notifyChange("updating")))],b),this.container.addChild(e.container),p.push(e)}this._graphicsViews=p}};n=o([e("esri.views.2d.layers.MapNotesLayerView2D")],n);const u=n;export default u;