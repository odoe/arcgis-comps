import { W as r, aj as h, B as S, U as i$1, $, g as t, e, i as i$2 } from './MapView-2c43b6d4.js';
import { l, u as u$1 } from './LayerView-a385f1f9.js';
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
const u="sublayers",d="layerView",f=Object.freeze({remove(){},pause(){},resume(){}});let g=class extends(l(u$1)){async fetchPopupFeatures(e){return (await Promise.all(Array.from(this.graphicsViews(),(s=>s.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate)))))))).flat()}*graphicsViews(){r(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():r(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,s){if(this.suspended)return null;const i=Array.from(this.graphicsViews(),(async i=>{const t=await i.hitTest(e,s);if(t){if(r(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate);}return t}return null}));return (await Promise.all(i)).filter((e=>!!e))[0]||null}highlight(e){let r;if("number"==typeof e?r=[e]:e instanceof h?r=[e.uid]:Array.isArray(e)&&e.length>0?r="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):S.isCollection(e)&&(r=e.map((e=>e&&e.uid)).toArray()),r=r.filter((e=>null!=e)),!r.length)return f;for(const s of this.graphicsViews())s.addHighlight(r);return {remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(r);}}}update(e){for(const s of this.graphicsViews())s.processUpdate(e);}attach(){const e=this.view,s=()=>this.requestUpdate(),i$2=this.layer.featureCollections;if(r(i$2)&&i$2.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of i$2){const i$2=new i(this.view.featuresTilingScheme);i$2.fadeTransitionEnabled=!0;const t=new rt({view:e,graphics:r.source,renderer:r.renderer,requestUpdateCallback:s,container:i$2});this._graphicsViewsFeatureCollectionMap.set(t,r),this.container.addChild(t.container),this.handles.add([i$1(r,"visible",(e=>t.container.visible=e)),i$1(t,"updating",(()=>this.notifyChange("updating")))],d);}}else r(this.layer.sublayers)&&this.handles.add($(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),u);}detach(){this._destroyGraphicsViews(),this.handles.remove(u);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(d);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),t(this.layer.sublayers))return;const e=[],s=this.view,i$2=()=>this.requestUpdate();for(const r of this.layer.sublayers){const t=new i(this.view.featuresTilingScheme);t.fadeTransitionEnabled=!0;const o=new rt({view:s,graphics:r.graphics,requestUpdateCallback:i$2,container:t});this.handles.add([r.on("graphic-update",o.graphicUpdateHandler),i$1(r,"visible",(e=>o.container.visible=e)),i$1(o,"updating",(()=>this.notifyChange("updating")))],d),this.container.addChild(o.container),e.push(o);}this._graphicsViews=e;}};g=e([i$2("esri.views.2d.layers.MapNotesLayerView2D")],g);const m=g;

export default m;
