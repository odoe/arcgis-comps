import { U as i, dZ as g, B as S, ay as M, D as t, dB as p, e, i as i$2 } from './MapView-2c43b6d4.js';
import { l, u } from './LayerView-a385f1f9.js';
import { i as i$1 } from './GraphicContainer-3f6f61ff.js';
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
let m=class extends(l(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return Promise.all(s).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([i(this.layer,"featureCollections",(e=>{this._clear();for(const{popupInfo:i,featureSet:t$1,layerDefinition:o}of e){const e=g.fromJSON(t$1),l=new S(e.features),c=o.drawingInfo,m=i?M.fromJSON(i):null,y=t(c.renderer),g$1=new rt({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:l,renderer:y,container:new i$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g$1,this._popupTemplates.set(g$1,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g$1),this.container.addChild(g$1.container);}})),i(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});})),i(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});})),i(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}))],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};m=e([i$2("esri.views.2d.layers.GeoRSSLayerView2D")],m);const y=m;

export default y;
