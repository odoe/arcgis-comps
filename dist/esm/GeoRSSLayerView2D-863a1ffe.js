import { Q as i, cJ as g, S, bA as M, b3 as t, eT as p, e, i as i$2 } from './MapView-ac75aae8.js';
import { l, u } from './LayerView-bca25100.js';
import { i as i$1 } from './GraphicContainer-de8a0e3b.js';
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
let m=class extends(l(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return Promise.all(s).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([i(this.layer,"featureCollections",(e=>{this._clear();for(const{popupInfo:i,featureSet:t$1,layerDefinition:o}of e){const e=g.fromJSON(t$1),l=new S(e.features),c=o.drawingInfo,m=i?M.fromJSON(i):null,y=t(c.renderer),g$1=new rt({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:l,renderer:y,container:new i$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g$1,this._popupTemplates.set(g$1,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g$1),this.container.addChild(g$1.container);}})),i(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});})),i(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});})),i(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}))],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};m=e([i$2("esri.views.2d.layers.GeoRSSLayerView2D")],m);const y=m;

export default y;
