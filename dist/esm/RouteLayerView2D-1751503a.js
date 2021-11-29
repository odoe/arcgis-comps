import { P as u, t, e, i as i$1 } from './MapView-ac75aae8.js';
import { l, u as u$1 } from './LayerView-bca25100.js';
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
let h=class extends(l(u$1)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const r=this.graphicsViews.map((r=>r.hitTest(e,s)));return Promise.all(r).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){t(this.layer.featureCollections)||this.layer.featureCollections.forEach((e=>{const s=new rt({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i$1("esri.views.2d.layers.RouteLayerView2D")],h);const c=h;

export default c;
