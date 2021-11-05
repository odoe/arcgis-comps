import { e, i as i$1, d, bn as g, a7 as s, T, eJ as a, W as r, s as s$2, hq as c$2, aH as d$2 } from './MapView-a31458ed.js';
import { t as t$2 } from './BitmapContainer-d9540b04.js';
import { l, u as u$1 } from './LayerView-4f2ac95c.js';
import { t, r as rt } from './BaseGraphicContainer-1b8815a3.js';
import { I } from './Utils-f78b5dcf.js';
import { S } from './ExportStrategy-cbda89fd.js';
import { c as c$1 } from './ExportImageParameters-6f450e42.js';
import { s as s$1 } from './clickToleranceUtils-b5cfb431.js';
import { t as t$1, d as d$1 } from './popupUtils-bd9283a8.js';
import { i as i$2 } from './RefreshableLayerView-37b95d4f.js';
import { a as a$1 } from './drapedUtils-3d862ae9.js';
import './index-3067d8ff.js';
import './WGLContainer-5366718c.js';
import './definitions-6a5ca2d9.js';
import './VertexArrayObject-f53fdf9c.js';
import './Texture-a7a0b3dd.js';
import './ShaderCompiler-9d72a5ed.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-860012b2.js';
import './pixelUtils-6a5b76e5.js';
import './Container-b142640e.js';
import './EffectList-edbd1525.js';
import './earcut-05cd758b.js';
import './CIMSymbolHelper-6a493992.js';
import './Rect-988189d5.js';
import './GeometryUtils-d5113f23.js';
import './projectionSupport-232446bc.js';
import './json-cfa039ad.js';
import './FeatureContainer-a7e045ec.js';
import './TileContainer-20c09af5.js';
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
import './Bitmap-86f313fd.js';
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
