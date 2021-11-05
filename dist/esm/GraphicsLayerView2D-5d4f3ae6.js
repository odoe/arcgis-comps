import { aj as h, B as S, e, d, i as i$1 } from './MapView-a31458ed.js';
import { l as l$1, u } from './LayerView-4f2ac95c.js';
import { i } from './GraphicContainer-9f25b41c.js';
import { r as rt } from './BaseGraphicContainer-1b8815a3.js';
import './index-3067d8ff.js';
import './Container-b142640e.js';
import './EffectList-edbd1525.js';
import './Utils-f78b5dcf.js';
import './Texture-a7a0b3dd.js';
import './CIMSymbolHelper-6a493992.js';
import './Rect-988189d5.js';
import './definitions-6a5ca2d9.js';
import './number-851eb983.js';
import './GeometryUtils-d5113f23.js';
import './projectionSupport-232446bc.js';
import './json-cfa039ad.js';
import './VertexArrayObject-f53fdf9c.js';
import './FeatureContainer-a7e045ec.js';
import './TileContainer-20c09af5.js';
import './WGLContainer-5366718c.js';
import './ShaderCompiler-9d72a5ed.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-860012b2.js';
import './pixelUtils-6a5b76e5.js';
import './earcut-05cd758b.js';
import './visualVariablesUtils-51cc57d5.js';
import './visualVariablesUtils-0abb8484.js';
import './Matcher-b4b89a0a.js';
import './ComputedAttributeStorage-30f59bfa.js';
import './FeatureSetReader-60cc3946.js';
import './centroid-f69dc2c5.js';
import './tileUtils-056973f6.js';
import './TileClipper-7e0687d5.js';
import './cimAnalyzer-f1fe5194.js';
import './quantizationUtils-76be0161.js';
import './cimSymbolUtils-3a328c8b.js';
import './devEnvironmentUtils-6390a260.js';
import './schemaUtils-151a2403.js';
import './MD5-6027098a.js';
import './vec3f32-f584608e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(u)){initialize(){this.graphicsView=new rt({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let s;return "number"==typeof e?s=[e]:e instanceof h?s=[e.uid]:Array.isArray(e)&&e.length>0?s="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):S.isCollection(e)&&(s=e.map((e=>e&&e.uid)).toArray()),s=s.filter((e=>null!=e)),s.length?(this.graphicsView.addHighlight(s),{remove:()=>this.graphicsView.removeHighlight(s)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};e([d()],n.prototype,"graphicsView",void 0),e([d()],n.prototype,"updating",void 0),n=e([i$1("esri.views.2d.layers.GraphicsLayerView2D")],n);const l=n;

export default l;
