import { e, i as i$1, d, bn as g, a7 as s, T, eJ as a, W as r, s as s$2, hq as c$2, aH as d$2 } from './MapView-2c43b6d4.js';
import { t as t$2 } from './BitmapContainer-116800de.js';
import { l, u as u$1 } from './LayerView-a385f1f9.js';
import { t, r as rt } from './BaseGraphicContainer-6861087a.js';
import { I } from './Utils-c57a8ada.js';
import { S } from './ExportStrategy-605311be.js';
import { c as c$1 } from './ExportImageParameters-c98a9cc7.js';
import { s as s$1 } from './clickToleranceUtils-b5cfb431.js';
import { t as t$1, d as d$1 } from './popupUtils-3d405c09.js';
import { i as i$2 } from './RefreshableLayerView-15cc8635.js';
import { a as a$1 } from './drapedUtils-2d6d5a46.js';
import './index-41925fe8.js';
import './WGLContainer-222ab03f.js';
import './definitions-6a5ca2d9.js';
import './VertexArrayObject-30b0d262.js';
import './Texture-521e6007.js';
import './ShaderCompiler-99aad823.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-baaa6a67.js';
import './pixelUtils-9059d737.js';
import './Container-1cf746dd.js';
import './EffectList-02a3200c.js';
import './earcut-05cd758b.js';
import './CIMSymbolHelper-56f84ff0.js';
import './Rect-988189d5.js';
import './GeometryUtils-d5113f23.js';
import './projectionSupport-f20aba5e.js';
import './json-cfa039ad.js';
import './FeatureContainer-7f3c00f0.js';
import './TileContainer-989dc987.js';
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
import './Bitmap-623711f5.js';
import './sublayerUtils-c6a17833.js';
import './floorFilterUtils-a09da11b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends t{renderChildren(r){if(r.drawPhase!==I.HIGHLIGHT)return;if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,t=e.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(16384),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind();}};o=e([i$1("esri.views.2d.layers.support.HighlightGraphicContainer")],o);const i=o;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=c=>{let y=class extends c{initialize(){this.exportImageParameters=new c$1({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,s$2){const{layer:a}=this;if(!e)return Promise.reject(new s("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const p=this.get("view.scale"),i=[],l=async e=>{const r$1=0===e.minScale||p<=e.minScale,o=0===e.maxScale||p>=e.maxScale;if(e.visible&&r$1&&o)if(e.sublayers)e.sublayers.forEach(l);else if(e.popupEnabled){const r$1=d$1(e,{...s$2,defaultPopupTemplateEnabled:!1});r(r$1)&&i.unshift({sublayer:e,popupTemplate:r$1});}},c=a.sublayers.toArray().reverse().map(l);await Promise.all(c);const y=i.map((async({sublayer:r$1,popupTemplate:o})=>{await r$1.load().catch((()=>{}));const a=r$1.createQuery(),p=r(s$2)?s$2.event:null,i=s$1({renderer:r$1.renderer,event:p}),l=this.createFetchPopupFeaturesQueryGeometry(e,i);a.geometry=l,a.outFields=await t$1(r$1,o);const u=await this._loadArcadeModules(o);u&&u.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=l.width/i);return (await r$1.queryFeatures(a)).features}));return (await T(y)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return a()}};return e([d()],y.prototype,"exportImageParameters",void 0),e([d({readOnly:!0})],y.prototype,"exportImageVersion",null),e([d()],y.prototype,"layer",void 0),e([d()],y.prototype,"suspended",void 0),e([d(g)],y.prototype,"timeExtent",void 0),y=e([i$1("esri.views.layers.MapImageLayerView")],y),y};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=s$2.getLogger("esri.views.2d.layers.MapImageLayerView2D");let f=class extends(c(i$2(l(u$1)))){constructor(){super(...arguments),this._highlightGraphics=new c$2;}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{d$2(e)||u.error(e);}));}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i$1=r>=10.3,s=r>=10;this._bitmapContainer=new t$2,this.container.addChild(this._bitmapContainer);const a=new rt({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)});this.container.addChild(a.container),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i$1,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(this.watch("view.floors",(()=>this.requestUpdate())),"view.floors"),this.requestUpdate();}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e);}}}createFetchPopupFeaturesQueryGeometry(e,t){return a$1(e,t,this.view)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};e([d()],f.prototype,"strategy",void 0),e([d()],f.prototype,"updating",void 0),f=e([i$1("esri.views.2d.layers.MapImageLayerView2D")],f);const y=f;

export default y;
