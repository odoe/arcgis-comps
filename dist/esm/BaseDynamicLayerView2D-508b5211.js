import { T as s, a as d$1, e, d as d$2, i as i$1 } from './MapView-ac75aae8.js';
import { t } from './BitmapContainer-252a49d1.js';
import { l, u } from './LayerView-bca25100.js';
import { S } from './ExportStrategy-305beff3.js';
import { i } from './RefreshableLayerView-5bf49ef7.js';
import './index-b157fcf2.js';
import './WGLContainer-42105821.js';
import './definitions-6a5ca2d9.js';
import './VertexArrayObject-78033d70.js';
import './Texture-73a4a34c.js';
import './Utils-7fb1778c.js';
import './ShaderCompiler-93f6243b.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-a9776b0a.js';
import './pixelUtils-9079607d.js';
import './Container-8507ec1d.js';
import './EffectList-bba3153e.js';
import './earcut-05cd758b.js';
import './Bitmap-e8888c96.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(i(l(u))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{d$1(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([d$2()],c.prototype,"strategy",void 0),e([d$2()],c.prototype,"updating",void 0),c=e([i$1("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;

export default d;
