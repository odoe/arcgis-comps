import { U as i, dZ as g, B as S, ay as M, D as t, dB as p, e, i as i$2 } from './MapView-a31458ed.js';
import { l, u } from './LayerView-4f2ac95c.js';
import { i as i$1 } from './GraphicContainer-9f25b41c.js';
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
let m=class extends(l(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return Promise.all(s).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([i(this.layer,"featureCollections",(e=>{this._clear();for(const{popupInfo:i,featureSet:t$1,layerDefinition:o}of e){const e=g.fromJSON(t$1),l=new S(e.features),c=o.drawingInfo,m=i?M.fromJSON(i):null,y=t(c.renderer),g$1=new rt({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:l,renderer:y,container:new i$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g$1,this._popupTemplates.set(g$1,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g$1),this.container.addChild(g$1.container);}})),i(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});})),i(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});})),i(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}))],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};m=e([i$2("esri.views.2d.layers.GeoRSSLayerView2D")],m);const y=m;

export default y;
