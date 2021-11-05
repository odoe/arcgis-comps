import { aj as h, B as S, e, d, i as i$1 } from './MapView-2c43b6d4.js';
import { l as l$1, u } from './LayerView-a385f1f9.js';
import { i } from './GraphicContainer-3f6f61ff.js';
import { r as rt } from './BaseGraphicContainer-6861087a.js';
import './index-41925fe8.js';
import './Container-1cf746dd.js';
import './EffectList-02a3200c.js';
import './Utils-c57a8ada.js';
import './Texture-521e6007.js';
import './CIMSymbolHelper-56f84ff0.js';
import './Rect-988189d5.js';
import './definitions-6a5ca2d9.js';
import './number-851eb983.js';
import './GeometryUtils-d5113f23.js';
import './projectionSupport-f20aba5e.js';
import './json-cfa039ad.js';
import './VertexArrayObject-30b0d262.js';
import './FeatureContainer-7f3c00f0.js';
import './TileContainer-989dc987.js';
import './WGLContainer-222ab03f.js';
import './ShaderCompiler-99aad823.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-baaa6a67.js';
import './pixelUtils-9059d737.js';
import './earcut-05cd758b.js';
import './visualVariablesUtils-fa57f610.js';
import './visualVariablesUtils-dedba3c5.js';
import './Matcher-04a8271a.js';
import './ComputedAttributeStorage-d5244a14.js';
import './FeatureSetReader-11309705.js';
import './centroid-fe97e9cc.js';
import './tileUtils-dca70228.js';
import './TileClipper-3ecb7399.js';
import './cimAnalyzer-452c2270.js';
import './quantizationUtils-3a07a999.js';
import './cimSymbolUtils-6202203c.js';
import './devEnvironmentUtils-872cccb2.js';
import './schemaUtils-57c391a2.js';
import './MD5-6027098a.js';
import './vec3f32-f584608e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(u)){initialize(){this.graphicsView=new rt({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let s;return "number"==typeof e?s=[e]:e instanceof h?s=[e.uid]:Array.isArray(e)&&e.length>0?s="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):S.isCollection(e)&&(s=e.map((e=>e&&e.uid)).toArray()),s=s.filter((e=>null!=e)),s.length?(this.graphicsView.addHighlight(s),{remove:()=>this.graphicsView.removeHighlight(s)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};e([d()],n.prototype,"graphicsView",void 0),e([d()],n.prototype,"updating",void 0),n=e([i$1("esri.views.2d.layers.GraphicsLayerView2D")],n);const l=n;

export default l;
