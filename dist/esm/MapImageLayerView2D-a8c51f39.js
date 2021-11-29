import { e, i as i$1, d, ch as g, b as s, b4 as T, fH as a, r, T as s$2, i3 as c$2, a as d$2 } from './MapView-ac75aae8.js';
import { t as t$2 } from './BitmapContainer-252a49d1.js';
import { l, u as u$1 } from './LayerView-bca25100.js';
import { t, r as rt } from './BaseGraphicContainer-0d1c5310.js';
import { I } from './Utils-7fb1778c.js';
import { S } from './ExportStrategy-305beff3.js';
import { c as c$1 } from './ExportImageParameters-f3d3b7f3.js';
import { s as s$1 } from './clickToleranceUtils-b5cfb431.js';
import { t as t$1, d as d$1 } from './popupUtils-a92c8aa2.js';
import { i as i$2 } from './RefreshableLayerView-5bf49ef7.js';
import { a as a$1 } from './drapedUtils-320044d3.js';
import './index-b157fcf2.js';
import './WGLContainer-42105821.js';
import './definitions-6a5ca2d9.js';
import './VertexArrayObject-78033d70.js';
import './Texture-73a4a34c.js';
import './ShaderCompiler-93f6243b.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-a9776b0a.js';
import './pixelUtils-9079607d.js';
import './Container-8507ec1d.js';
import './EffectList-bba3153e.js';
import './earcut-05cd758b.js';
import './CIMSymbolHelper-da978676.js';
import './BidiEngine-8e81e59c.js';
import './GeometryUtils-d5113f23.js';
import './projectionSupport-629e27a5.js';
import './json-cfa039ad.js';
import './FeatureContainer-0e128f48.js';
import './TileContainer-05fc793f.js';
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
import './Bitmap-e8888c96.js';
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
