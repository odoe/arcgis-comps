import{e as i,d as t,i as s,E as p}from"./p-9ae46e68.js";import{l as r}from"./p-81abd5fc.js";import"./p-7c7c5507.js";import{a as e}from"./p-d40c97c9.js";import{u as o,l as a}from"./p-ebe5e529.js";import{aZ as m,z as h}from"./p-566b0715.js";import"./p-84bf99cb.js";import"./p-7a648ea5.js";import"./p-b2a0fae5.js";import"./p-6ebb24ba.js";import"./p-4fd6e394.js";import"./p-4681e856.js";import"./p-a0e42f29.js";import"./p-fe01b82b.js";import"./p-41655335.js";import"./p-3ffd0931.js";import"./p-8031c809.js";import"./p-3048cc18.js";import"./p-c7a0a732.js";import"./p-b2d0e2de.js";import"./p-db87794e.js";import"./p-22c8d854.js";import"./p-3d1b25b6.js";import"./p-f42060e0.js";import"./p-79553c8d.js";import"./p-8e03c038.js";import"./p-32462343.js";import"./p-98a14d68.js";import"./p-32824614.js";import"./p-40d3b500.js";import"./p-c8f716a9.js";import"./p-57ae469d.js";import"./p-27ef204b.js";import"./p-3a2e88bf.js";import"./p-9e860e7b.js";import"./p-ada83011.js";import"./p-98ce0cca.js";import"./p-4003c7ae.js";import"./p-a7080451.js";import"./p-7e9d2371.js";import"./p-94f8dc11.js";import"./p-bb07d873.js";import"./p-8ac97b63.js";import"./p-a0a931f0.js";import"./p-dfc6337f.js";import"./p-77e6a663.js";import"./p-c5b7f7c3.js";import"./p-30ddb3a0.js";import"./p-74fc1b7f.js";import"./p-b3024dec.js";import"./p-4fcbc3c5.js";import"./p-4b3ae2cf.js";import"./p-6443bfb4.js";import"./p-8e6daf54.js";import"./p-c0757461.js";import"./p-93d9099f.js";import"./p-d3898fd7.js";import"./p-844dad6c.js";import"./p-c59d0a4d.js";import"./p-3a5fe179.js";import"./p-138c2b2c.js";import"./p-ae0b06e3.js";import"./p-a293872e.js";import"./p-f271906a.js";import"./p-cf2267f9.js";import"./p-d2e19070.js";import"./p-e5429b9e.js";import"./p-cf8dc9be.js";import"./p-f17028ec.js";import"./p-5c89c68e.js";import"./p-725fd184.js";import"./p-0c91ebaf.js";import"./p-72355290.js";import"./p-d68829c1.js";import"./p-81102839.js";import"./p-2f7c985e.js";import"./p-00b9ea57.js";import"./p-5a0fe1d0.js";import"./p-7818def0.js";import"./p-da143060.js";import"./p-15bb2887.js";import"./p-1f10277d.js";import"./p-2b250922.js";import"./p-285c6a34.js";import"./p-81e5b36e.js";import"./p-1d6f3ddb.js";import"./p-789e71c1.js";import"./p-523f37cd.js";import"./p-a198d6d0.js";import"./p-15515b8a.js";import"./p-264c75ac.js";import"./p-c431b12a.js";import"./p-b0f556d6.js";import"./p-8b767e6c.js";import"./p-8d03d70f.js";import"./p-9658240e.js";import"./p-d6725707.js";import"./p-d925341f.js";import"./p-c3efb223.js";import"./p-bae36c84.js";import"./p-39da60a5.js";import"./p-56ed1c7a.js";import"./p-d18723b0.js";import"./p-b62a8a4f.js";import"./p-f614dce4.js";import"./p-47e1bd73.js";import"./p-16def889.js";import"./p-eb19a862.js";import"./p-b392deaf.js";import"./p-4414d64f.js";import"./p-a617738c.js";import"./p-ffe0d3ad.js";import"./p-9dbf3f05.js";import"./p-6ab16fcc.js";import"./p-0c60bcc4.js";import"./p-97ec6ae5.js";class j extends e{constructor(){super(...arguments),this._lastWidth=0,this._lastHeight=0,this.requiresDedicatedFBO=!1}dispose(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null)}doRender(i){const t=this.createRenderParams(i),{context:s,painter:p,profiler:r}=t;this._prevFBO=s.getBoundFramebufferObject(),r.recordContainerStart(this.name);const e=this._getFbo(t),o=p.getRenderTarget();s.bindFramebuffer(e),p.setRenderTarget(e),s.setDepthWriteEnabled(!0),s.setColorMask(!0,!0,!0,!0),s.setClearColor(0,0,0,0),s.setClearDepth(1),s.clear(s.gl.COLOR_BUFFER_BIT|s.gl.DEPTH_BUFFER_BIT),s.setDepthWriteEnabled(!1);for(const t of this.children)t.beforeRender(i);for(const i of this.children)i.processRender(t);for(const t of this.children)t.afterRender(i);p.setRenderTarget(o),s.bindFramebuffer(this._prevFBO),p.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),s.setStencilTestEnabled(!1),s.setStencilWriteMask(0),p.blitTexture(s,e.colorTexture,9728),p.compositeLayer(t,this.computedOpacity),r.recordContainerEnd()}createRenderParams(i){return{...super.createRenderParams(i),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(i){const{context:t,painter:s}=i,{width:p,height:e}=t.getViewport();return p===this._lastWidth&&e===this._lastHeight||(this._lastWidth=p,this._lastHeight=e,this._renderTarget?this._renderTarget.resize(p,e):this._renderTarget=new r(t,{colorTarget:0,depthStencilTarget:3},{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:p,height:e},s.getSharedStencilBuffer())),this._renderTarget}}let d=class extends o{constructor(i){super(i),this.type="group",this.layerViews=new p}initialize(){this.handles.add([this.layerViews.on("change",(i=>this._layerViewsChangeHandler(i))),this.layerViews.on("after-changes",(()=>this._layerViewsAfterChangesHandler())),this.layer.watch("visibilityMode",(()=>this._visibilityModeHandler()),!0),this.watch("visible",(()=>this._visibleHandler()),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()}set layerViews(i){this._set("layerViews",h(i,this._get("layerViews")))}isUpdating(){return this.layerViews.some((i=>i.updating))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((i,t)=>i+t.updatingProgress),0)/this.layerViews.length}_hasLayerViewVisibleOverrides(){return this.layerViews.some((i=>i._isOverridden("visible")))}_findLayerViewForLayer(i){return i&&this.layerViews.find((t=>t.layer===i))}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find((i=>{const t=this._findLayerViewForLayer(i);return t&&t.visible}));return i&&this._findLayerViewForLayer(i)}_enforceExclusiveVisibility(i){this._hasLayerViewVisibleOverrides()&&(i||!(i=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((t=>{t.visible=t===i})))}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((i=>i.watch("visible",(t=>this._layerViewVisibleHandler(t,i)),!0))).toArray(),"grouplayerview:visible");const t=i.added[i.added.length-1];let s=null;t&&t.visible&&(s=t),this._enforceVisibility(s)}_layerViewsAfterChangesHandler(){this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map((i=>i.watch("updating",(()=>this._updateUpdating()),!0))).toArray(),"grouplayerview:updating"),this._updateUpdating()}_enforceVisibility(i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const i=this.visible;this.layerViews.forEach((t=>{t.visible=i}));break}case"exclusive":this._enforceExclusiveVisibility(i)}}_visibilityModeHandler(){this._enforceVisibility()}_layerViewVisibleHandler(i,t){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":i!==this.visible&&(t.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(i&&t)}}_visibleHandler(){var i;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(i=this.layer)?void 0:i.visibilityMode)&&this._enforceVisibility()}_updateUpdating(){this.notifyChange("updating")}};i([t({cast:m})],d.prototype,"layerViews",null),i([t()],d.prototype,"view",void 0),i([t({readOnly:!0})],d.prototype,"updatingProgress",null),d=i([s("esri.views.layers.GroupLayerView")],d);const c=d;let f=class extends(a(c)){constructor(){super(...arguments),this.container=new j}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(()=>this._updateStageChildren())),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}hitTest(i,t){return null}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((i,t)=>this.container.addChildAt(i.container,t)))}};f=i([s("esri.views.2d.layers.GroupLayerView2D")],f);const n=f;export default n;