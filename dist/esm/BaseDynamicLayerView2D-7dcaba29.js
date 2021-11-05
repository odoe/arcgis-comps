import { s, aH as d$1, e, d as d$2, i as i$1 } from './MapView-a31458ed.js';
import { t } from './BitmapContainer-d9540b04.js';
import { l, u } from './LayerView-4f2ac95c.js';
import { S } from './ExportStrategy-cbda89fd.js';
import { i } from './RefreshableLayerView-37b95d4f.js';
import './index-3067d8ff.js';
import './WGLContainer-5366718c.js';
import './definitions-6a5ca2d9.js';
import './VertexArrayObject-f53fdf9c.js';
import './Texture-a7a0b3dd.js';
import './Utils-f78b5dcf.js';
import './ShaderCompiler-9d72a5ed.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-860012b2.js';
import './pixelUtils-6a5b76e5.js';
import './Container-b142640e.js';
import './EffectList-edbd1525.js';
import './earcut-05cd758b.js';
import './Bitmap-86f313fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(i(l(u))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{d$1(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([d$2()],c.prototype,"strategy",void 0),e([d$2()],c.prototype,"updating",void 0),c=e([i$1("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;

export default d;
