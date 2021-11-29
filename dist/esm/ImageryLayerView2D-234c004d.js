import { T as s, e, d as d$1, bN as r, i, p as p$1, i3 as c, b5 as z, o as M, r as r$1, a as d$2, d8 as c$1, aL as h, E, ch as g$1, b as s$1, g$ as b, bl as b$1, Q as i$4, Y as f } from './MapView-ac75aae8.js';
import { l, u as u$1 } from './LayerView-bca25100.js';
import { j as j$1 } from './rasterProjectionHelper-511e2cd2.js';
import { m } from './vectorFieldUtils-07944778.js';
import { n } from './Container-8507ec1d.js';
import { i as i$1 } from './GraphicContainer-de8a0e3b.js';
import { r as rt } from './BaseGraphicContainer-0d1c5310.js';
import { d as d$3 } from './pixelUtils-9079607d.js';
import { t } from './BitmapContainer-252a49d1.js';
import { i as i$2 } from './Bitmap-e8888c96.js';
import { S } from './ExportStrategy-305beff3.js';
import { d as d$4 } from './popupUtils-a92c8aa2.js';
import { i as i$3 } from './RefreshableLayerView-5bf49ef7.js';
import './index-b157fcf2.js';
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
const _=s.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let w=class extends p$1{constructor(){super(...arguments),this.attached=!1,this.container=new n,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._dataParameters={exportParametersVersion:0,extents:[],tileResolution:0,time:""},this.type="Graphics",this._graphics=new c,this._updateGraphics=z((async(e,t)=>{if(!e.stationary)return;const r=e.state,i=new M({xmin:r.extent.xmin,ymin:r.extent.ymin,xmax:r.extent.xmax,ymax:r.extent.ymax,spatialReference:r.spatialReference}),[s,o]=e.state.size,n={};n.timeExtent=this.timeExtent,n.requestAsImageElement=!1,n.signal=t,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(i.spatialReference));const p="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,c=await this._projectFullExtentPromise,{extent:h,resolution:l,width:u,height:y}=m(i,s,o,p,c),g=await this.layer.fetchImage(h,u,y,n),x=this.layer.renderer;if("vector-field"===x.type){const t=g.pixelData.pixelBlock,r=x.sizeVariables[0];!r$1(t)||r.minDataValue&&r.maxDataValue||(r.minDataValue=t.statistics[0].minValue,r.maxDataValue=t.statistics[0].maxValue),this._pixelData={extent:h,pixelBlock:t};const i=h.clone().normalize(),s={exportParametersVersion:this.layer.exportImageServiceParameters.version,extents:i,tileResolution:l,time:JSON.stringify(this.timeExtent||"")},o=this._canReuseVectorFieldData(s)?this._dataParameters.extents:[],n=await x.getGraphicsFromPixelData(g.pixelData,"vector-uv"===this.layer.rasterInfo.dataType,o);if(o.length){const e=this._graphics.items.filter((e=>r$1(e.geometry)&&o.some((t=>t.intersects(e.geometry)))&&!i.some((t=>t.intersects(e.geometry)))));this._graphics.removeMany(e),this._graphics.addMany(n);}else this._graphics.set("items",n);this._graphicsView.update(e),this._dataParameters=s;}}));}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch((e=>{d$2(e)||_.error(e);}));}hitTest(e,r){const i=this.view.toMap(c$1(e,r));return Promise.resolve(new h({attributes:{},geometry:i,layer:this.layer}))}attach(){this._graphicsView=new rt({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.attached=!0;}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null;}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container);}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}async _getProjectedFullExtent(e){try{return await j$1(this.layer.fullExtent,e)}catch(t){try{const t=(await E(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?M.fromJSON(t):null}catch{return null}}}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=Math.abs(this._dataParameters.tileResolution-e.tileResolution)/e.tileResolution<.01,s=this._dataParameters.extents.some((t=>e.extents.some((e=>t.intersects(e)))));return t&&r&&i&&s}};e([d$1()],w.prototype,"attached",void 0),e([d$1()],w.prototype,"container",void 0),e([d$1()],w.prototype,"layer",void 0),e([d$1()],w.prototype,"timeExtent",void 0),e([d$1()],w.prototype,"view",void 0),e([d$1()],w.prototype,"updateRequested",void 0),e([d$1()],w.prototype,"updating",null),e([r({graphics:"Graphics"})],w.prototype,"type",void 0),w=e([i("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],w);const j=w;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=s.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let g=class extends p$1{constructor(){super(...arguments),this.attached=!1,this.container=new n,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{d$2(e)||y.error(e);}));}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren();}hitTest(e,r){const i=this.view.toMap(c$1(e,r));return Promise.resolve(new h({attributes:{},geometry:i,layer:this.layer}))}attach(){const e=this.layer.version>=10,t$1=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new t,this.strategy=new S({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t$1,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0;}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container);}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender();}));}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=d$3(r,t);return r$1(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return (i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new i$2(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};e([d$1()],g.prototype,"attached",void 0),e([d$1()],g.prototype,"container",void 0),e([d$1()],g.prototype,"layer",void 0),e([d$1()],g.prototype,"strategy",void 0),e([d$1()],g.prototype,"timeExtent",void 0),e([d$1()],g.prototype,"view",void 0),e([d$1()],g.prototype,"updateRequested",void 0),e([d$1()],g.prototype,"updating",null),e([r({imagery:"Imagery"})],g.prototype,"type",void 0),g=e([i("esri.views.2d.layers.imagery.ImageryView2D")],g);const x=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)throw new s$1("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:i}=s,u=d$4(s,o);if(!i||!r$1(u))throw new s$1("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:u});const m=await u.getRequiredFields(),c=new b;c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=m,c.outSpatialReference=e.spatialReference;const l=this.view.resolution,y="2d"===this.view.type?new b$1(l,l,this.view.spatialReference):new b$1(.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:w}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},d={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:y,showNoDataRecords:w,signal:r$1(o)?o.signal:null};return s.queryVisibleRasters(c,d).then((e=>e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return e([d$1()],m.prototype,"layer",void 0),e([d$1()],m.prototype,"suspended",void 0),e([d$1(g$1)],m.prototype,"timeExtent",void 0),e([d$1()],m.prototype,"view",void 0),m=e([i("esri.views.layers.ImageryLayerView")],m),m};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends(u(i$3(l(u$1)))){constructor(){super(...arguments),this._exportImageVersion=-1;}initialize(){this.handles.add([i$4(this,["layer.blendMode","layer.effects"],(e=>{this.subview&&(this.subview.container.blendMode=e);}),!0),i$4(this,"layer.effect",(e=>{this.subview&&(this.subview.container.effect=e);}),!0)]);}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return !(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?Promise.resolve(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([i$4(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate();})),this.layer.on("redraw",(()=>this.subview.redraw())),f(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||!this.suspended&&this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var s,i;("vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t)||(null==(s=this.subview)||s.uninstall(this.container),null==(i=this.subview)||i.destroy(),this.subview="Imagery"===t?new x({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new j({layer:this.layer,view:this.view,timeExtent:this.timeExtent}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode,this.subview.container.effect=this.layer.effect);this.requestUpdate();}};e([d$1()],p.prototype,"pixelData",null),e([d$1({readOnly:!0})],p.prototype,"updating",null),e([d$1()],p.prototype,"subview",void 0),p=e([i("esri.views.2d.layers.ImageryLayerView2D")],p);const d=p;

export default d;
