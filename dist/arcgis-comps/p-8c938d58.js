import{e,i as t,d as s,bn as i,a7 as r,T as p,eJ as a,W as o,s as m,hq as h,aH as n}from"./p-7b6f6c18.js";import{t as d}from"./p-9afeab98.js";import{l,u as c}from"./p-0b691897.js";import{t as u,r as f}from"./p-2d5d1985.js";import{I as j}from"./p-804725e3.js";import{S as g}from"./p-ce308849.js";import{c as w}from"./p-e80f3dac.js";import{s as b}from"./p-bdb8e9d6.js";import{t as v,d as y}from"./p-6bccadb6.js";import{i as x}from"./p-de5d9151.js";import{a as I}from"./p-06264f01.js";import"./p-227a5838.js";import"./p-e53f77c2.js";import"./p-47e1bd73.js";import"./p-54e8960f.js";import"./p-1dd7027e.js";import"./p-5bfd1d7e.js";import"./p-b392deaf.js";import"./p-4414d64f.js";import"./p-a617738c.js";import"./p-a16c2b1d.js";import"./p-167d094f.js";import"./p-a4a5967b.js";import"./p-033339b0.js";import"./p-97ec6ae5.js";import"./p-cede17c2.js";import"./p-ea65d9c9.js";import"./p-9790d1b4.js";import"./p-51e4508b.js";import"./p-50ff864e.js";import"./p-fb136006.js";import"./p-1088d11f.js";import"./p-10e211d9.js";import"./p-df9635e1.js";import"./p-7d065686.js";import"./p-94807627.js";import"./p-3e28396b.js";import"./p-f78de11d.js";import"./p-269bd937.js";import"./p-dfd2d479.js";import"./p-9f705d18.js";import"./p-ec834938.js";import"./p-55e3d31e.js";import"./p-dede18bd.js";import"./p-5c077b4e.js";import"./p-e991a11e.js";import"./p-b1c9647c.js";import"./p-cde787e2.js";import"./p-2f9d204e.js";import"./p-03d6250d.js";let V=class extends u{renderChildren(e){if(e.drawPhase!==j.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,s=t.effects.highlight;s.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,s.defines.concat(["highlightAll"])),s.draw(e),s.unbind()}};V=e([t("esri.views.2d.layers.support.HighlightGraphicContainer")],V);const M=V,P=m=>{let h=class extends m{initialize(){this.exportImageParameters=new w({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:s}=this;if(!e)return Promise.reject(new r("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s}));const i=this.get("view.scale"),a=[],m=async e=>{if(e.visible&&(0===e.minScale||i<=e.minScale)&&(0===e.maxScale||i>=e.maxScale))if(e.sublayers)e.sublayers.forEach(m);else if(e.popupEnabled){const s=y(e,{...t,defaultPopupTemplateEnabled:!1});o(s)&&a.unshift({sublayer:e,popupTemplate:s})}},h=s.sublayers.toArray().reverse().map(m);await Promise.all(h);const n=a.map((async({sublayer:s,popupTemplate:i})=>{await s.load().catch((()=>{}));const r=s.createQuery(),p=o(t)?t.event:null,a=b({renderer:s.renderer,event:p}),m=this.createFetchPopupFeaturesQueryGeometry(e,a);r.geometry=m,r.outFields=await v(s,i);const h=await this._loadArcadeModules(i);return h&&h.arcadeUtils.hasGeometryOperations(i)||(r.maxAllowableOffset=m.width/a),(await s.queryFeatures(r)).features}));return(await p(n)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return a()}};return e([s()],h.prototype,"exportImageParameters",void 0),e([s({readOnly:!0})],h.prototype,"exportImageVersion",null),e([s()],h.prototype,"layer",void 0),e([s()],h.prototype,"suspended",void 0),e([s(i)],h.prototype,"timeExtent",void 0),h=e([t("esri.views.layers.MapImageLayerView")],h),h},E=m.getLogger("esri.views.2d.layers.MapImageLayerView2D");let C=class extends(P(x(l(c)))){constructor(){super(...arguments),this._highlightGraphics=new h}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{n(e)||E.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:s}=this.layer,i=s>=10.3,r=s>=10;this._bitmapContainer=new d,this.container.addChild(this._bitmapContainer);const p=new f({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)});this.container.addChild(p.container),this.strategy=new g({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:r,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(this.watch("view.floors",(()=>this.requestUpdate())),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return I(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,s,i){return this.layer.fetchImage(e,t,s,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};e([s()],C.prototype,"strategy",void 0),e([s()],C.prototype,"updating",void 0),C=e([t("esri.views.2d.layers.MapImageLayerView2D")],C);const F=C;export default F;