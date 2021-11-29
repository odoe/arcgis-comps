import { aL as h, S, e, d, i as i$1 } from './MapView-ac75aae8.js';
import { l as l$1, u } from './LayerView-bca25100.js';
import { i } from './GraphicContainer-de8a0e3b.js';
import { r as rt } from './BaseGraphicContainer-0d1c5310.js';
import './index-b157fcf2.js';
import './Container-8507ec1d.js';
import './EffectList-bba3153e.js';
import './Utils-7fb1778c.js';
import './Texture-73a4a34c.js';
import './CIMSymbolHelper-da978676.js';
import './BidiEngine-8e81e59c.js';
import './definitions-6a5ca2d9.js';
import './number-851eb983.js';
import './GeometryUtils-d5113f23.js';
import './projectionSupport-629e27a5.js';
import './json-cfa039ad.js';
import './VertexArrayObject-78033d70.js';
import './FeatureContainer-0e128f48.js';
import './TileContainer-05fc793f.js';
import './WGLContainer-42105821.js';
import './ShaderCompiler-93f6243b.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-a9776b0a.js';
import './pixelUtils-9079607d.js';
import './earcut-05cd758b.js';
import './visualVariablesUtils-b2848abb.js';
import './visualVariablesUtils-34651638.js';
import './Matcher-8ec548ca.js';
import './ComputedAttributeStorage-f051f302.js';
import './FeatureSetReader-42fa969a.js';
import './centroid-6e7cbbe1.js';
import './tileUtils-728f37bf.js';
import './TileClipper-a7144933.js';
import './cimAnalyzer-bee7a9ff.js';
import './quantizationUtils-9743f28d.js';
import './cimSymbolUtils-1a22d801.js';
import './devEnvironmentUtils-8a6821b7.js';
import './schemaUtils-a2e668a4.js';
import './MD5-6027098a.js';
import './vec3f32-f584608e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(u)){initialize(){this.graphicsView=new rt({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let s;return "number"==typeof e?s=[e]:e instanceof h?s=[e.uid]:Array.isArray(e)&&e.length>0?s="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):S.isCollection(e)&&(s=e.map((e=>e&&e.uid)).toArray()),s=s.filter((e=>null!=e)),s.length?(this.graphicsView.addHighlight(s),{remove:()=>this.graphicsView.removeHighlight(s)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};e([d()],n.prototype,"graphicsView",void 0),e([d()],n.prototype,"updating",void 0),n=e([i$1("esri.views.2d.layers.GraphicsLayerView2D")],n);const l=n;

export default l;
