import { u, g as t, e, i as i$1 } from './MapView-a31458ed.js';
import { l, u as u$1 } from './LayerView-4f2ac95c.js';
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
let h=class extends(l(u$1)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const r=this.graphicsViews.map((r=>r.hitTest(e,s)));return Promise.all(r).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){t(this.layer.featureCollections)||this.layer.featureCollections.forEach((e=>{const s=new rt({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i$1("esri.views.2d.layers.RouteLayerView2D")],h);const c=h;

export default c;
