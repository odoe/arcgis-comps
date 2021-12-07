import { L as s, J as d$1, e, d as d$2, i as i$1, fz as u } from './index.js';
import { t } from './BitmapContainer.js';
import { l } from './LayerView2D.js';
import { S } from './ExportStrategy.js';
import { i } from './RefreshableLayerView.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(i(l(u))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{d$1(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([d$2()],c.prototype,"strategy",void 0),e([d$2()],c.prototype,"updating",void 0),c=e([i$1("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;

export default d;
