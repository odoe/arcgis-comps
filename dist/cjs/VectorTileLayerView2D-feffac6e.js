'use strict';

const request = require('./messageBundle-8be88d04.js');
const Graphic = require('./Graphic-0aff6059.js');
const diffUtils = require('./diffUtils-df69757f.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const SymbolRepository = require('./SymbolRepository-5ebd4faa.js');
const LRUCache = require('./LRUCache-38fdf18d.js');
const TileStore = require('./TileStore-1f212ad3.js');
const TileKey = require('./TileKey-d800cfb2.js');
const VectorTile = require('./VectorTile-5dc9d0a7.js');
const config = require('./config-1b750faa.js');
const Utils = require('./Utils-a77299a6.js');
const DefaultUI = require('./DefaultUI-75d05512.js');
const TiledDisplayObject = require('./TiledDisplayObject-0701494f.js');
const TileContainer = require('./TileContainer-1c8142b6.js');
const StyleRepository = require('./StyleRepository-9b2b4493.js');
const LayerView2D = require('./LayerView2D-6de7adcc.js');
const Bitmap = require('./Bitmap-668e0fbf.js');
const BitmapContainer = require('./BitmapContainer-e8669b75.js');
const TileInfo = require('./TileInfo-83a1d8a2.js');
const TileStrategy = require('./TileStrategy-58dbe4b8.js');
const LayerView = require('./LayerView-2bc30c9f.js');
require('./index-fde8502c.js');
require('./geometry-ef17530a.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./jsonUtils-b6068079.js');
require('./workers-bde9fe32.js');
require('./FramebufferObject-435e1736.js');
require('./Texture-95d9d662.js');
require('./BidiEngine-e033e7c0.js');
require('./pbf-dc87045b.js');
require('./CIMSymbolHelper-79a17067.js');
require('./floatRGBA-aa45f7cb.js');
require('./definitions-b4888cc6.js');
require('./mat2d-2d5fae3e.js');
require('./mat2df32-85bf8b84.js');
require('./vec2-d000a8cb.js');
require('./vec2f32-29a5eecf.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./MemCache-7f5503ec.js');
require('./Queue-1713f2e9.js');
require('./quickselect-d3f68f5a.js');
require('./Query-354911d3.js');
require('./TimeExtent-8b558884.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./mat3-1d3e0d51.js');
require('./Basemap-81280554.js');
require('./loadAll-e25ec3d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./writeUtils-7bdc195a.js');
require('./compilerUtils-56e51ed2.js');
require('./CollectionFlattener-bc4cde45.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./basemapUtils-dc86a6ad.js');
require('./TablesMixin-d3e0d4c7.js');
require('./Layer-31cde361.js');
require('./GraphicsCollection-d70ae8cb.js');
require('./HeightModelInfo-06fd3d80.js');
require('./unitUtils-083cb8d0.js');
require('./Scheduler-72cbcf2a.js');
require('./debugFlags-5e6b0151.js');
require('./screenUtils-e9e44bb6.js');
require('./executeQueryJSON-3f84e897.js');
require('./utils-8a0a0870.js');
require('./query-0e394548.js');
require('./normalizeUtils-a793b472.js');
require('./pbfQueryUtils-49e071a8.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./queryZScale-d48be112.js');
require('./zscale-25ef55f0.js');
require('./FeatureSet-8efc5965.js');
require('./TopFeaturesQuery-92caa731.js');
require('./Heading-d7c5e432.js');
require('./widget-b8f4aeaf.js');
require('./QueryTask-3b24eec5.js');
require('./featureConversionUtils-df21e951.js');
require('./Task-95a3fa39.js');
require('./FeatureLayer-68e51b64.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./ColorStop-ce63948c.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./lengthUtils-179eaf12.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./jsonUtils-fc4080da.js');
require('./MultiOriginJSONSupport-77ac451b.js');
require('./APIKeyMixin-77c99036.js');
require('./ArcGISService-56d7a630.js');
require('./arcgisLayerUrl-5174d661.js');
require('./BlendLayer-6a2ab430.js');
require('./mat4-f68486bc.js');
require('./CustomParametersMixin-996a5732.js');
require('./labelingInfo-594911d5.js');
require('./OperationalLayer-853649aa.js');
require('./ElevationInfo-d3e3d64f.js');
require('./LabelClass-4b91d60e.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');
require('./OrderedLayer-8690aaf5.js');
require('./PortalLayer-7556e594.js');
require('./RefreshableLayer-487bd7b3.js');
require('./ScaleRangeLayer-5320a5ba.js');
require('./TemporalLayer-06f08bdd.js');
require('./TimeInfo-050c5617.js');
require('./FeatureType-d8b81062.js');
require('./fieldProperties-c9dd6469.js');
require('./FieldsIndex-664af19b.js');
require('./LayerFloorInfo-c56fa764.js');
require('./styleUtils-536b017f.js');
require('./popupUtils-7a76fb7d.js');
require('./utils-71e85012.js');
require('./ItemCache-149fdb6e.js');
require('./utils-fb318f28.js');
require('./layerViewUtils-96bae70b.js');
require('./GoTo-be01affb.js');
require('./accessibleHandler-652e5d90.js');
require('./vmEvent-9b257013.js');
require('./heightModelInfoUtils-9cedab45.js');
require('./Viewpoint-bbe11330.js');
require('./mathUtils-87b1f941.js');
require('./mat2df64-e9760778.js');
require('./vec2f64-60b3c97e.js');
require('./capabilities-76889198.js');
require('./DisplayObject-573912c8.js');
require('./WGLContainer-1a8439fd.js');
require('./brushes-09287871.js');
require('./vec4f32-284fd490.js');
require('./ShaderCompiler-3202ad3f.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-b68d4c0b.js');
require('./pixelUtils-d620590d.js');
require('./rasterUtils-a4c646c4.js');
require('./Container-afc09537.js');
require('./EffectList-9ac19b5e.js');
require('./earcut-d5562923.js');
require('./colorUtils-c4f258fa.js');
require('./unitBezier-5ab0945f.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=512,o=1e-6,n$1=(e,i)=>e+1/(1<<2*i);class a{constructor(i,t){this._tiles=new Map,this._tileCache=new LRUCache.e(40,(e=>e.dispose())),this._viewSize=[0,0],this._visibleTiles=new Map,this.acquireTile=i.acquireTile,this.releaseTile=i.releaseTile,this.tileInfoView=i.tileInfoView,this._container=t;}destroy(){for(const[e,i]of this._tiles)i.dispose();this._tiles=null,this._tileCache.clear(),this._tileCache=null;}update(e){this._updateCacheSize(e);const i=this.tileInfoView,t=i.getTileCoverage(e.state,0,"smallest"),{spans:r,lodInfo:o}=t,{level:n}=o,a=this._tiles,c=new Set,h=new Set;for(const{row:s,colFrom:_,colTo:f}of r)for(let e=_;e<=f;e++){const i=TileKey.e.getId(n,s,o.normalizeCol(e),o.getWorldForColumn(e)),t=this._getOrAcquireTile(i);c.add(i),t.processed()?this._addToContainer(t):h.add(new TileKey.e(i));}for(const[s,l]of a)l.isCoverage=c.has(s);for(const s of h)this._findPlaceholdersForMissingTiles(s,c);let d=!1;for(const[s,l]of a)l.neededForCoverage=c.has(s),l.neededForCoverage||l.isHoldingForFade&&i.intersects(t,l.key)&&c.add(s),l.isFading&&(d=!0);for(const[s,l]of this._tiles)c.has(s)||this._releaseTile(s);return TileStore.l$2.pool.release(t),!d}clear(){this._tiles.clear(),this._tileCache.clear(),this._visibleTiles.clear();}clearCache(){this._tileCache.clear();}_findPlaceholdersForMissingTiles(e,i){const t=[];for(const[l,r]of this._tiles)this._addPlaceholderChild(t,r,e,i);const s=t.reduce(n$1,0);Math.abs(1-s)<o||this._addPlaceholderParent(e.id,i);}_addPlaceholderChild(e,i,t,s){i.key.level<=t.level||!i.hasData()||h(t,i.key)&&(this._addToContainer(i),s.add(i.id),e.push(i.key.level-t.level));}_addPlaceholderParent(e,i){const t=this._tiles;let s=e;for(;;){if(s=c$2(s),!s||i.has(s))return;const e=t.get(s);if(e&&e.hasData())return this._addToContainer(e),void i.add(e.id)}}_getOrAcquireTile(e){let i=this._tiles.get(e);return i||(i=this._tileCache.pop(e),i||(i=this.acquireTile(new TileKey.e(e))),this._tiles.set(e,i),i)}_releaseTile(e){const i=this._tiles.get(e);this.releaseTile(i),this._removeFromContainer(i),this._tiles.delete(e),i.hasData()?this._tileCache.put(e,i,1):i.dispose();}_addToContainer(e){let s;const l=[],r=this._container;if(r.contains(e))return;const o=this._visibleTiles;for(const[t,n]of o)this._canConnectDirectly(e,n)&&l.push(n),request.t$1(s)&&this._canConnectDirectly(n,e)&&(s=n);if(request.r(s)){for(const i of l)s.childrenTiles.delete(i),e.childrenTiles.add(i),i.parentTile=e;s.childrenTiles.add(e),e.parentTile=s;}else for(const i of l)e.childrenTiles.add(i),i.parentTile=e;o.set(e.id,e),r.addChild(e);}_removeFromContainer(e){if(this._visibleTiles.delete(e.id),this._container.removeChild(e),request.r(e.parentTile)){e.parentTile.childrenTiles.delete(e);for(const i of e.childrenTiles)request.r(e.parentTile)&&e.parentTile.childrenTiles.add(i);}for(const i of e.childrenTiles)i.parentTile=e.parentTile;e.parentTile=null,e.childrenTiles.clear();}_canConnectDirectly(e,i){const t=e.key;let{level:s,row:l,col:r,world:o}=i.key;const n=this._visibleTiles;for(;s>0;){if(s--,l>>=1,r>>=1,t.level===s&&t.row===l&&t.col===r&&t.world===o)return !0;if(n.has(`${s}/${l}/${r}/${o}`))return !1}return !1}_updateCacheSize(e){const i=e.state.size;if(i[0]===this._viewSize[0]&&i[1]===this._viewSize[1])return;const t=Math.ceil(i[0]/r)+1,s=Math.ceil(i[1]/r)+1;this._viewSize[0]=i[0],this._viewSize[1]=i[1],this._tileCache.maxSize=5*t*s;}}function c$2(e){const[i,t,s,l]=e.split("/"),r=parseInt(i,10);return 0===r?null:`${r-1}/${parseInt(t,10)>>1}/${parseInt(s,10)>>1}/${parseInt(l,10)}`}function h(e,i){const t=i.level-e.level;return e.row===i.row>>t&&e.col===i.col>>t&&e.world===i.world}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c$1=.5,n=1e-6;class _ extends request.n$2{constructor(t,e){super(),this.styleRepository=t,this._tileToHandle=new Map,this._viewState={scale:0,rotation:0,center:[0,0],size:[0,0]},this._declutterViewState={scale:0,rotation:0,center:[0,0],size:[0,0]},this._completed=!1,this._symbolRepository=new SymbolRepository.r(4096,e,(()=>new VectorTile.s)),this._symbolDeclutterer=new SymbolRepository.i(e,this._symbolRepository,((t,e,i)=>new SymbolRepository.r$1(t,e,i,this.styleRepository,this._zoom,this._viewState.rotation)),((t,e)=>{t.allSymbolsFadingOut=!0,t.lastOpacityUpdate=e,VectorTile.h(t,e,!0),t.decluttered=!0,t.requestRender();}),((t,e)=>this.styleRepository.getStyleLayerByUID(t.styleLayerUID).z-this.styleRepository.getStyleLayerByUID(e.styleLayerUID).z),(t=>{const e=this.styleRepository.getStyleLayerByUID(t);if(this._zoom+n<e.minzoom||this._zoom-n>=e.maxzoom)return !1;const i=e.getLayoutProperty("visibility");return !i||1!==i.getValue()}));}addTile(t){t.decluttered=!1,this._tileToHandle.set(t,t.on("symbols-changed",(()=>{this._symbolRepository.add(t),this.restartDeclutter();}))),this._symbolRepository.add(t),this.restartDeclutter();}removeTile(t){const e=this._tileToHandle.get(t);e&&(this._symbolRepository.removeTile(t),this.restartDeclutter(),e.remove(),this._tileToHandle.delete(t));}update(t,e){return this._zoom=t,this._viewState={scale:e.scale,rotation:e.rotation,center:[e.center[0],e.center[1]],size:[e.size[0],e.size[1]]},this._continueDeclutter(),this._completed}restartDeclutter(){this._completed=!1,this._symbolDeclutterer.restart(),this._notifyUnstable();}clear(){this._completed=!1,this._symbolRepository=null,this._symbolDeclutterer.restart(),this._tileToHandle.forEach((t=>t.remove())),this._tileToHandle.clear();}get stale(){return this._zoom!==this._declutterZoom||this._viewState.size[0]!==this._declutterViewState.size[0]||this._viewState.size[1]!==this._declutterViewState.size[1]||this._viewState.scale!==this._declutterViewState.scale||this._viewState.rotation!==this._declutterViewState.rotation}deleteStyleLayers(t){this._symbolRepository.deleteStyleLayers(t);}_continueDeclutter(){this._completed&&!this.stale||(this._symbolDeclutterer.running||(this._declutterZoom=this._zoom,this._declutterViewState.center[0]=this._viewState.center[0],this._declutterViewState.center[1]=this._viewState.center[1],this._declutterViewState.rotation=this._viewState.rotation,this._declutterViewState.scale=this._viewState.scale,this._declutterViewState.size[0]=this._viewState.size[0],this._declutterViewState.size[1]=this._viewState.size[1],this._symbolDeclutterer.restart()),this._symbolDeclutterer.setScreenSize(this._viewState.size[0],this._viewState.size[1]),this._completed=this._symbolDeclutterer.continue(config.c),this._completed&&this._scheduleNotifyStable());}_scheduleNotifyStable(){request.r(this._stableNotificationHandle)&&clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=setTimeout((()=>{this._stableNotificationHandle=null,this.emit("fade-complete");}),(1+c$1)*config.e);}_notifyUnstable(){request.r(this._stableNotificationHandle)&&(clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=null),this.emit("fade-start");}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$1 extends TiledDisplayObject.r{_createTransforms(){return {dvs:DefaultUI.n$2(),tileMat3:DefaultUI.n$2()}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=1e-6;function y(e,t){if(e){const s=e.getLayoutProperty("visibility");if(!s||1!==s.getValue()&&(void 0===e.minzoom||e.minzoom<t+c)&&(void 0===e.maxzoom||e.maxzoom>=t-c))return !0}return !1}class p extends TileContainer.o{constructor(e){super(e),this._backgroundTiles=[],this._pointToCallbacks=new Map;}destroy(){this.removeAllChildren(),this._spriteMosaic&&(this._spriteMosaic.dispose(),this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic.dispose(),this._glyphMosaic=null),request.r(this._symbolFader)&&(this._symbolFader.clear(),this._symbolFader=null),this._styleRepository=null,this._backgroundTiles=[],this._pointToCallbacks.clear();}setStyleResources(e,r,i){if(this._spriteMosaic=e,this._glyphMosaic=r,this._styleRepository=i,request.t$1(this._symbolFader)){const e=new _(this._styleRepository,this.children);e.on("fade-start",(()=>{this.emit("fade-start"),this.requestRender();})),e.on("fade-complete",(()=>{this.emit("fade-complete"),this.requestRender();})),this._symbolFader=e;}request.e$2(this._symbolFader).styleRepository=i;}deleteStyleLayers(t){request.r(this._symbolFader)&&this._symbolFader.deleteStyleLayers(t);}async hitTest(e,t){const s=[e,t],i=request.B();return this._pointToCallbacks.set(s,i),this.requestRender(),i.promise}enterTileInvalidation(){for(const e of this.children)e.invalidating=!0;}createRenderParams(e){return {...super.createRenderParams(e),renderPass:null,styleLayer:null,styleLayerUID:-1,glyphMosaic:this._glyphMosaic,spriteMosaic:this._spriteMosaic,hasClipping:!!this._clippingInfos}}doRender(e){!this.visible||e.drawPhase!==Utils.I.MAP&&e.drawPhase!==Utils.I.DEBUG||void 0===this._spriteMosaic||super.doRender(e);}addChild(t){return super.addChild(t),request.r(this._symbolFader)?this._symbolFader.addTile(t):t.decluttered=!0,this.requestRender(),t}removeChild(t){return request.r(this._symbolFader)&&this._symbolFader.removeTile(t),this.requestRender(),super.removeChild(t)}renderChildren(e){const{drawPhase:t}=e;if(t!==Utils.I.DEBUG){if(this._doRender(e),this._pointToCallbacks.size>0){e.drawPhase=Utils.I.HITTEST;const s=e.painter.effects.hittest;s.bind(e),this._doRender(e),s.draw(e,this._pointToCallbacks),s.unbind(e),e.drawPhase=t;}}else super.renderChildren(e);}removeAllChildren(){for(let t=0;t<this.children.length;t++){const s=this.children[t];request.r(this._symbolFader)&&this._symbolFader.removeTile(s),s.dispose();}super.removeAllChildren();}getStencilTarget(){return this.children.filter((e=>e.neededForCoverage&&e.hasData()))}restartDeclutter(){request.r(this._symbolFader)&&this._symbolFader.restartDeclutter();}_doRender(e){const{context:t}=e,s=this._styleRepository;if(!s)return;const r=s.layers;let i=!0;e.drawPhase===Utils.I.HITTEST&&(i=!1),s.backgroundBucketIds.length>0&&(e.renderPass="background",this._renderBackgroundLayers(e,s.backgroundBucketIds)),super.renderChildren(e),e.drawPhase===Utils.I.MAP&&this._fade(e.displayLevel,e.state);const o=this.children.filter((e=>e.visible&&e.hasData()));if(!o||0===o.length)return t.bindVAO(),t.setStencilTestEnabled(!0),void t.setBlendingEnabled(!0);for(const l of o)l.triangleCount=0;t.setStencilWriteMask(0),t.setColorMask(!0,!0,!0,!0),t.setStencilOp(7680,7680,7681),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!1),t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(!0),t.setDepthFunction(515),t.setClearDepth(1),t.clear(t.gl.DEPTH_BUFFER_BIT),e.renderPass="opaque";for(let l=r.length-1;l>=0;l--)this._renderStyleLayer(r[l],e,o);t.setDepthWriteEnabled(!1),t.setBlendingEnabled(i),t.setBlendFunctionSeparate(1,771,1,771),e.renderPass="translucent";for(let l=0;l<r.length;l++)this._renderStyleLayer(r[l],e,o);t.setDepthTestEnabled(!1),e.renderPass="symbol";for(let l=0;l<r.length;l++)this._renderStyleLayer(r[l],e,o);t.bindVAO(),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!0);}_fade(t,s){request.r(this._symbolFader)&&(this._symbolFader.update(t,s)||this.requestRender());}_renderStyleLayer(e,t,s){const{painter:r,renderPass:i}=t;if(void 0===e)return;const o=e.getLayoutProperty("visibility");if(o&&1===o.getValue())return;let l;switch(e.type){case 0:return;case 1:if("opaque"!==i&&"translucent"!==t.renderPass)return;l="vtlFill";break;case 2:if("translucent"!==i)return;l="vtlLine";break;case 4:if("symbol"!==i)return;l="vtlCircle";break;case 3:if("symbol"!==i)return;l="vtlSymbol";}if(s=3===e.type?s.filter((e=>e.decluttered)):s.filter((e=>e.neededForCoverage)),"vtlSymbol"!==l){const r=t.displayLevel;if(0===s.length||void 0!==e.minzoom&&e.minzoom>=r+c||void 0!==e.maxzoom&&e.maxzoom<r-c)return}const n=e.uid;t.styleLayerUID=n,t.styleLayer=e;for(const a of s)if(a.layerData.has(n)){r.renderObjects(t,s,l);break}}_renderBackgroundLayers(t,s){const{context:r,displayLevel:o,painter:a,state:c}=t,p=this._styleRepository;let u=!1;for(const e of s){if(0===p.getLayerById(e).type&&y(p.getLayerById(e),o)){u=!0;break}}if(!u)return;const m=this._tileInfoView.getTileCoverage(t.state,0,"smallest"),{spans:b,lodInfo:f}=m,{level:_}=f,g=aaBoundingRect.u(),T=[];if(this._renderPasses){const s=this._renderPasses[0];request.r(this._clippingInfos)&&(s.brushes[0].prepareState(t,this._clippingInfos[0]),s.brushes[0].drawMany(t,this._clippingInfos));}const v=this._backgroundTiles;let C,F=0;for(const{row:e,colFrom:l,colTo:d}of b)for(let t=l;t<=d;t++){if(F<v.length)C=v[F],C.key.set(_,e,f.normalizeCol(t),f.getWorldForColumn(t)),this._tileInfoView.getTileBounds(g,C.key,!1),C.x=g[0],C.y=g[3];else {const s=new TileKey.e(_,e,f.normalizeCol(t),f.getWorldForColumn(t)),r=this._tileInfoView.getTileBounds(aaBoundingRect.u(),s);C=new t$1(s,r[0],r[3],512,512,4096,4096),v.push(C);}C.setTransform(c,this._tileInfoView.getTileResolution(C.key)),T.push(C),F++;}r.setStencilWriteMask(0),r.setColorMask(!0,!0,!0,!0),r.setStencilOp(7680,7680,7681),r.setStencilFunction(514,0,255);let k=!0;t.drawPhase===Utils.I.HITTEST&&(k=!1),r.setStencilTestEnabled(k);for(const e of s){const s=p.getLayerById(e);0===s.type&&y(s,o)&&(t.styleLayerUID=s.uid,t.styleLayer=s,a.renderObjects(t,T,"vtlBackground"));}TileStore.l$2.pool.release(m);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends BitmapContainer.t{constructor(e){super(),this.requestRender=this.requestRender.bind(this),this._layerView=e,this._canvas=document.createElement("canvas"),this._context=this._canvas.getContext("2d"),this._bitmap=new Bitmap.g(null,"standard",!1),this.addChild(this._bitmap);}doRender(t){const e=t.state,i=this._createCustomRenderParams(t),a=i.pixelRatio,s=this._canvas,n=this._bitmap;s.width=e.size[0]*a,s.height=e.size[1]*a,n.resolution=e.resolution,n.pixelRatio=a,n.x=e.viewpoint.targetGeometry.x-Math.abs(e.extent.xmax-e.extent.xmin)/2,n.y=e.viewpoint.targetGeometry.y+Math.abs(e.extent.ymax-e.extent.ymin)/2,this._layerView.render(i),n.source=s,n.rotation=e.rotation,super.doRender(t);}_createCustomRenderParams(t){const e=window.devicePixelRatio,i={...t.state,pixelRatio:e};return {...t,pixelRatio:e,context:this._context,state:i}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends TileStore.h{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={};}getTileParentId(e){const l=TileKey.e.pool.acquire(e),t=0===l.level?null:TileKey.e.getId(l.level-1,l.row>>1,l.col>>1,l.world);return TileKey.e.pool.release(l),t}getTileCoverage(e,l,s){const t=super.getTileCoverage(e,l,s);if(!t)return t;const o=1<<t.lodInfo.level;return t.spans=t.spans.filter((e=>e.row>=0&&e.row<o)),t}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const l=this._fullCacheLodInfos;if(e>l[0].scale)return l[0].level;let s,t;for(let o=0;o<l.length-1;o++)if(t=l[o+1],e>t.scale)return s=l[o],s.level+(s.scale-e)/(s.scale-t.scale);return l[l.length-1].level}}_initializeFullCacheLODs(l){let s;if(0===l[0].level)s=l.map((e=>({level:e.level,resolution:e.resolution,scale:e.scale})));else {const l=this.tileInfo.size[0],t=this.tileInfo.spatialReference;s=TileInfo.j.create({size:l,spatialReference:t}).lods.map((e=>({level:e.level,resolution:e.resolution,scale:e.scale})));}for(let e=0;e<s.length;e++)this._levelByScale[s[e].scale]=s[e].level;this._fullCacheLodInfos=s;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const H=request.s$1.getLogger("esri.views.2d.layers.VectorTileLayerView2D");let R=class extends(LayerView2D.l(LayerView.u)){constructor(){super(...arguments),this._styleChanges=[],this._fetchQueue=null,this._parseQueue=null,this._isTileHandlerReady=!1,this.fading=!1;}initialize(){const e=this.layer.tileInfo;if(!(e&&e.spatialReference).equals(this.view.spatialReference))return void this.addResolvingPromise(Promise.reject(new request.s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})));const{style:t$1,spriteUrl:s,glyphsUrl:r}=this.layer.currentStyleInfo;this._styleRepository=new StyleRepository.a(t$1,{spriteUrl:s,glyphsUrl:r}),this._tileInfoView=new t(this.layer.tileInfo,this.layer.fullExtent),this._vectorTileContainer=new p(this._tileInfoView),this._tileHandler=new SymbolRepository.h(this.layer,this._styleRepository,window.devicePixelRatio||1),this.container.addChild(this._vectorTileContainer),this.handles.add([this._vectorTileContainer.on("fade-start",(()=>{this.fading=!0,this.notifyChange("updating"),this.requestUpdate();})),this._vectorTileContainer.on("fade-complete",(()=>{this._collisionBoxesDisplay&&this._collisionBoxesDisplay.requestRender(),this.fading=!1,this.notifyChange("updating"),this.requestUpdate();})),request.i$1(this.layer,"symbolCollisionBoxesVisible",(e=>{e?(this._collisionBoxesDisplay=new i({render:e=>this._renderCollisionBoxes(e.context)}),this.container.addChild(this._collisionBoxesDisplay)):(this.container.removeChild(this._collisionBoxesDisplay),this._collisionBoxesDisplay=null);}))]);}destroy(){var e;this._stop(),this.container.removeAllChildren(),this._vectorTileContainer&&(this._vectorTileContainer.destroy(),this._vectorTileContainer=null),null==(e=this._tileHandler)||e.destroy(),this._tileHandler=null;}async hitTest(e,i){if(this.suspended||!this._tileHandlerPromise)return null;await this._tileHandlerPromise;const s=await this._vectorTileContainer.hitTest(e,i);if(!s||0===s.length)return null;const r=s[0]-1,a=this._styleRepository,l=a.getStyleLayerByUID(r);if(!l)return null;const o=a.getStyleLayerIndex(l.id),n=new Graphic.h({attributes:{layerId:o,layerName:l.id,layerUID:r}});return n.layer=this.layer,n.sourceLayer=this.layer,n}update(e){if(this._tileHandlerPromise&&this._isTileHandlerReady)return e.pixelRatio!==this._tileHandler.devicePixelRatio?(this._start(),void(this._tileHandler.devicePixelRatio=e.pixelRatio)):void(this._styleChanges.length>0?this._tileHandlerPromise=this._applyStyleChanges():(this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.state=e.state,this._parseQueue.state=e.state,this._tileManager.update(e)||this.requestUpdate(),this._parseQueue.resume(),this._fetchQueue.resume()))}attach(){this._start(),this.handles.add([this.layer.on("paint-change",(e=>{if(e.isDataDriven)this._styleChanges.push({type:0,data:e}),this.notifyChange("updating"),this.requestUpdate();else {const t=this._styleRepository,i=t.getLayerById(e.layer);if(!i)return;const s=3===i.type;t.setPaintProperties(e.layer,e.paint),s&&this._vectorTileContainer.restartDeclutter(),this._vectorTileContainer.requestRender();}})),this.layer.on("layout-change",(e=>{const t=this._styleRepository,i=t.getLayerById(e.layer);if(!i)return;const s=diffUtils.m(i.layout,e.layout);if(!request.t$1(s)){if(diffUtils.a(s,"visibility")&&1===b(s))return t.setLayoutProperties(e.layer,e.layout),3===i.type&&this._vectorTileContainer.restartDeclutter(),void this._vectorTileContainer.requestRender();this._styleChanges.push({type:1,data:e}),this.notifyChange("updating"),this.requestUpdate();}})),this.layer.on("style-layer-visibility-change",(e=>{const t=this._styleRepository,i=t.getLayerById(e.layer);i&&(t.setStyleLayerVisibility(e.layer,e.visibility),3===i.type&&this._vectorTileContainer.restartDeclutter(),this._vectorTileContainer.requestRender());})),this.layer.on("style-layer-change",(e=>{this._styleChanges.push({type:2,data:e}),this.notifyChange("updating"),this.requestUpdate();})),this.layer.on("delete-style-layer",(e=>{this._styleChanges.push({type:3,data:e}),this.notifyChange("updating"),this.requestUpdate();})),this.layer.on("load-style",(()=>this._loadStyle()))],this.declaredClass);}detach(){this._stop(),this.handles.remove(this.declaredClass);}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this._collisionBoxesDisplay&&this._vectorTileContainer.restartDeclutter(),this.requestUpdate();}canResume(){let e=super.canResume();const t=this.layer;if(e&&t.currentStyleInfo){const i=this.view.scale,s=t.currentStyleInfo;if(s&&s.layerDefinition){const t=s.layerDefinition;t.minScale&&t.minScale<i&&(e=!1),t.maxScale&&t.maxScale>i&&(e=!1);}}return e}isUpdating(){const e=this._vectorTileContainer.children;return !this._isTileHandlerReady||!this._fetchQueue||!this._parseQueue||this._fetchQueue.updating||this._parseQueue.updating||e.length>0&&e.filter((e=>e.invalidating)).length>0||this.fading}acquireTile(e){const t=this._createVectorTile(e);return this._tileHandlerPromise.then((()=>{this._fetchQueue.push(t.key).then((e=>this._parseQueue.push({key:t.key,data:e}))).then((e=>{t.once("attach",(()=>this.requestUpdate())),e&&(t.setData(e.tileData),this.requestUpdate(),this.notifyChange("updating"));})).catch((e=>{this.notifyChange("updating"),request.d$1(e)||H.error(e);}));})),t}releaseTile(e){const t=e.key.id;this._fetchQueue.abort(t),this._parseQueue.abort(t),this.requestUpdate();}_start(){if(this._stop(),this._tileManager=new a({acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView},this._vectorTileContainer),!this.layer.currentStyleInfo)return;const e=new AbortController,t=this._tileHandler.start({signal:e.signal}).then((()=>{this._fetchQueue=new TileStrategy.p({tileInfoView:this._tileInfoView,process:(e,t)=>this._getTileData(e,t),concurrency:15}),this._parseQueue=new TileStrategy.p({tileInfoView:this._tileInfoView,process:(e,t)=>this._parseTileData(e,t),concurrency:8}),this.requestUpdate(),this._isTileHandlerReady=!0;}));this._tileHandler.spriteMosaic.then((e=>{this._vectorTileContainer.setStyleResources(e,this._tileHandler.glyphMosaic,this._styleRepository),this.requestUpdate();})),this._tileHandlerAbortController=e,this._tileHandlerPromise=t;}_stop(){if(!this._tileHandlerAbortController||!this._vectorTileContainer)return;const e=this._tileHandlerAbortController;e&&e.abort(),this._tileHandlerPromise=null,this._isTileHandlerReady=!1,this._fetchQueue&&(this._fetchQueue.destroy(),this._fetchQueue=null),this._parseQueue&&(this._parseQueue.destroy(),this._parseQueue=null),this._tileManager&&(this._tileManager.destroy(),this._tileManager=null),this._vectorTileContainer.removeAllChildren();}async _getTileData(e,t){const i=await this._tileHandler.fetchTileData(e,t);return this.notifyChange("updating"),i}async _parseTileData(e,t){return this._tileHandler.parseTileData(e,t)}async _applyStyleChanges(){this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this._tileManager.clearCache();const e=this._styleChanges;try{await this._tileHandler.updateStyle(e);}catch(l){H.error("error applying vector-tiles style update",l.message),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0;}const t=this._styleRepository,i=[];e.forEach((e=>{if(3!==e.type)return;const s=e.data,r=t.getLayerById(s.layer);r&&i.push(r.uid);}));const s=[];let r;e.forEach((e=>{const i=e.type,a=e.data;switch(i){case 0:t.setPaintProperties(a.layer,a.paint),r=a.layer;break;case 1:t.setLayoutProperties(a.layer,a.layout),r=a.layer;break;case 3:return void t.deleteStyleLayer(a.layer);case 2:t.setStyleLayer(a.layer,a.index),r=a.layer.id;}const l=t.getLayerById(r);l&&s.push(l.uid);}));const a=this._vectorTileContainer.children;if(i.length>0){this._vectorTileContainer.deleteStyleLayers(i);for(const e of a)e.deleteLayerData(i);}if(this._fetchQueue.resume(),this._parseQueue.resume(),s.length>0){const e=[];for(const t of a){const i=this._fetchQueue.push(t.key).then((e=>this._parseQueue.push({key:t.key,data:e,styleLayerUIDs:s}))).then((e=>t.setData(e.tileData)));e.push(i);}await Promise.all(e);}this._styleChanges=[],this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate();}async _loadStyle(){const{style:e,spriteUrl:t,glyphsUrl:i}=this.layer.currentStyleInfo,r=request.l$1(e);this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this.notifyChange("updating"),this._styleRepository=new StyleRepository.a(r,{spriteUrl:t,glyphsUrl:i}),this._vectorTileContainer.destroy(),this._tileManager.clear(),this._tileHandlerAbortController.abort(),this._tileHandlerAbortController=new AbortController;const{signal:a}=this._tileHandlerAbortController;try{this._tileHandlerPromise=this._tileHandler.setStyle(this._styleRepository,r),await this._tileHandlerPromise;}catch(n){if(!request.d$1(n))throw n}if(a.aborted)return this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),void this.requestUpdate();const o=await this._tileHandler.spriteMosaic;this._vectorTileContainer.setStyleResources(o,this._tileHandler.glyphMosaic,this._styleRepository),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate();}_createVectorTile(e){const t=this._tileInfoView.getTileBounds(aaBoundingRect.u(),e);return new VectorTile.d(e,t[0],t[3],512,512,this._styleRepository)}_renderCollisionBoxes(e){for(const t of this._vectorTileContainer.children)if(t.symbols){const i=[];for(const[e,s]of t.symbols)i.push(...s);SymbolRepository.o(e,i);}}};function b(e){if(request.t$1(e))return 0;switch(e.type){case"partial":return Object.keys(e.diff).length;case"complete":return Math.max(Object.keys(e.oldValue).length,Object.keys(e.newValue).length);case"collection":return Object.keys(e.added).length+Object.keys(e.changed).length+Object.keys(e.removed).length}}request.e([request.d()],R.prototype,"_fetchQueue",void 0),request.e([request.d()],R.prototype,"_parseQueue",void 0),request.e([request.d()],R.prototype,"_isTileHandlerReady",void 0),request.e([request.d()],R.prototype,"fading",void 0),R=request.e([request.i("esri.views.2d.layers.VectorTileLayerView2D")],R);const D=R;

exports.default = D;
