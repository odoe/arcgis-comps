import { e, i as i$1, L as s, ox as c$1, J as d, fA as a, d as d$1, fz as u$1 } from './index.js';
import { t as t$1 } from './BitmapContainer.js';
import { l } from './LayerView2D.js';
import { t, r as rt } from './BaseGraphicContainer.js';
import { I } from './Utils.js';
import { S } from './ExportStrategy.js';
import { c } from './MapImageLayerView.js';
import { i as i$2 } from './RefreshableLayerView.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends t{renderChildren(r){if(r.drawPhase!==I.HIGHLIGHT)return;if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,t=e.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(16384),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind();}};o=e([i$1("esri.views.2d.layers.support.HighlightGraphicContainer")],o);const i=o;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=s.getLogger("esri.views.2d.layers.MapImageLayerView2D");let f=class extends(c(i$2(l(u$1)))){constructor(){super(...arguments),this._highlightGraphics=new c$1;}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{d(e)||u.error(e);}));}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i$1=r>=10.3,s=r>=10;this._bitmapContainer=new t$1,this.container.addChild(this._bitmapContainer);const a=new rt({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)});this.container.addChild(a.container),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i$1,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(this.watch("view.floors",(()=>this.requestUpdate())),"view.floors"),this.requestUpdate();}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e);}}}createFetchPopupFeaturesQueryGeometry(e,t){return a(e,t,this.view)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};e([d$1()],f.prototype,"strategy",void 0),e([d$1()],f.prototype,"updating",void 0),f=e([i$1("esri.views.2d.layers.MapImageLayerView2D")],f);const y=f;

export default y;
