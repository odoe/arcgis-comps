import { s, aH as d$1, e, d as d$2, i as i$1 } from './MapView-2c43b6d4.js';
import { t } from './BitmapContainer-116800de.js';
import { l, u } from './LayerView-a385f1f9.js';
import { S } from './ExportStrategy-605311be.js';
import { i } from './RefreshableLayerView-15cc8635.js';
import './index-41925fe8.js';
import './WGLContainer-222ab03f.js';
import './definitions-6a5ca2d9.js';
import './VertexArrayObject-30b0d262.js';
import './Texture-521e6007.js';
import './Utils-c57a8ada.js';
import './ShaderCompiler-99aad823.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-baaa6a67.js';
import './pixelUtils-9059d737.js';
import './Container-1cf746dd.js';
import './EffectList-02a3200c.js';
import './earcut-05cd758b.js';
import './Bitmap-623711f5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(i(l(u))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{d$1(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([d$2()],c.prototype,"strategy",void 0),e([d$2()],c.prototype,"updating",void 0),c=e([i$1("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;

export default d;
