'use strict';

const request = require('./messageBundle-8be88d04.js');
const SimpleLineSymbol = require('./symbols-29b793e5.js');
const GraphicsLayer = require('./GraphicsLayer-5076fd9b.js');
const drawUtils = require('./drawUtils-75b2078c.js');
const arcgisEditor_entry = require('./arcgis-editor-90a28e34.js');
const screenUtils = require('./screenUtils-e9e44bb6.js');
const GraphicManipulator = require('./GraphicManipulator-bf3071c5.js');
require('./index-fde8502c.js');
require('./enumeration-f235fe07.js');
require('./opacityUtils-f2e4b347.js');
require('./geometry-ef17530a.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./GraphicsCollection-d70ae8cb.js');
require('./Graphic-0aff6059.js');
require('./PopupTemplate-a0b855f8.js');
require('./Identifiable-a4f50f85.js');
require('./jsonUtils-b6068079.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./Layer-31cde361.js');
require('./BlendLayer-6a2ab430.js');
require('./mat4-f68486bc.js');
require('./ScaleRangeLayer-5320a5ba.js');
require('./ElevationInfo-d3e3d64f.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./FeatureLayer-68e51b64.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./ColorStop-ce63948c.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./jsonUtils-fc4080da.js');
require('./MultiOriginJSONSupport-77ac451b.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./HeightModelInfo-06fd3d80.js');
require('./workers-bde9fe32.js');
require('./queryZScale-d48be112.js');
require('./zscale-25ef55f0.js');
require('./FeatureSet-8efc5965.js');
require('./APIKeyMixin-77c99036.js');
require('./ArcGISService-56d7a630.js');
require('./arcgisLayerUrl-5174d661.js');
require('./CustomParametersMixin-996a5732.js');
require('./labelingInfo-594911d5.js');
require('./TimeExtent-8b558884.js');
require('./Query-354911d3.js');
require('./OperationalLayer-853649aa.js');
require('./LabelClass-4b91d60e.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');
require('./OrderedLayer-8690aaf5.js');
require('./PortalLayer-7556e594.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./RefreshableLayer-487bd7b3.js');
require('./TemporalLayer-06f08bdd.js');
require('./TimeInfo-050c5617.js');
require('./FeatureType-d8b81062.js');
require('./fieldProperties-c9dd6469.js');
require('./FieldsIndex-664af19b.js');
require('./LayerFloorInfo-c56fa764.js');
require('./styleUtils-536b017f.js');
require('./TopFeaturesQuery-92caa731.js');
require('./popupUtils-7a76fb7d.js');
require('./InputField-f3d341ce.js');
require('./Heading-d7c5e432.js');
require('./vmEvent-9b257013.js');
require('./luxon-b6474344.js');
require('./_commonjsHelpers-1fbbf0eb.js');
require('./drapedUtils-2fa2770f.js');
require('./hitTestSelectUtils-9a744d46.js');
require('./layerViewUtils-96bae70b.js');
require('./geodesicUtils-4d3dae6f.js');
require('./geodesicConstants-047d586a.js');
require('./vec2-d000a8cb.js');
require('./vec2f64-60b3c97e.js');
require('./geometry2dUtils-65eda69d.js');
require('./accessibleHandler-652e5d90.js');
require('./executeQueryJSON-3f84e897.js');
require('./utils-8a0a0870.js');
require('./query-0e394548.js');
require('./normalizeUtils-a793b472.js');
require('./pbfQueryUtils-49e071a8.js');
require('./pbf-dc87045b.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./widget-b8f4aeaf.js');
require('./QueryTask-3b24eec5.js');
require('./featureConversionUtils-df21e951.js');
require('./Task-95a3fa39.js');
require('./utils-71e85012.js');
require('./ItemCache-149fdb6e.js');
require('./utils-fb318f28.js');
require('./Queue-1713f2e9.js');
require('./GoTo-be01affb.js');
require('./projection-b19710fa.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-click";}}class i{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-double-click";}}class s{constructor(t,i,s,h,e,r,c,a,n,p){this.graphic=t,this.allGraphics=i,this.index=s,this.x=h,this.y=e,this.dx=r,this.dy=c,this.totalDx=a,this.totalDy=n,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-start";}preventDefault(){this.defaultPrevented=!0;}}class h{constructor(t,i,s,h,e,r,c,a,n,p){this.graphic=t,this.allGraphics=i,this.index=s,this.x=h,this.y=e,this.dx=r,this.dy=c,this.totalDx=a,this.totalDy=n,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move";}preventDefault(){this.defaultPrevented=!0;}}class e{constructor(t,i,s,h,e,r,c,a,n,p){this.graphic=t,this.allGraphics=i,this.index=s,this.x=h,this.y=e,this.dx=r,this.dy=c,this.totalDx=a,this.totalDy=n,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-stop";}preventDefault(){this.defaultPrevented=!0;}}class r{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-pointer-over";}}class c{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-pointer-out";}}class a{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-pointer-down";}}class n{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-pointer-up";}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let H=class extends request.n$2.EventedAccessor{constructor(i){super(i),this._activeGraphic=null,this._indicators=[],this._dragEvent=null,this._handles=new request.u,this._hoverGraphic=null,this._initialDragGeometry=null,this._viewHandles=new request.u,this._manipulators=[],this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!0,this.layer=new GraphicsLayer.h({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null;}initialize(){arcgisEditor_entry.r$1(this.view,this.layer),this.refresh(),this._handles.add([request.f(this,["graphics","graphics.length"],(()=>this.refresh())),request.a(this,"view.ready",(()=>{this._viewHandles.add([this.view.on("immediate-click",(i=>this._clickHandler(i)),screenUtils.u.TOOL),this.view.on("double-click",(i=>this._doubleClickHandler(i)),screenUtils.u.TOOL),this.view.on("pointer-down",(i=>this._pointerDownHandler(i)),screenUtils.u.TOOL),this.view.on("pointer-move",(i=>this._pointerMoveHandler(i)),screenUtils.u.TOOL),this.view.on("pointer-up",(i=>this._pointerUpHandler(i)),screenUtils.u.TOOL),this.view.on("drag",(i=>this._dragHandler(i)),screenUtils.u.TOOL),this.view.on("key-down",(i=>this._keyDownHandler(i)),screenUtils.u.TOOL)]);}))]);}destroy(){var i;this._removeIndicators(),null==(i=this.view.map)||i.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((i=>i.destroy())),this._manipulators=null,this._handles=request.l$3(this._handles),this._viewHandles=request.l$3(this._viewHandles);}get state(){const i=!!this.get("view.ready"),t=!!this.get("graphics.length"),e=this._activeGraphic;return i&&t?e?"moving":"active":i?"ready":"disabled"}refresh(){this._setUpIndicators(),this._setUpManipulators();}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null;}updateGeometry(i,t){const e=this.graphics[i];e&&(e.set("geometry",t),this._setUpIndicators());}_clickHandler(i){const t$1=this._findTargetGraphic(screenUtils.t(i));if(t$1){const e=new t(t$1,this.graphics.indexOf(t$1),i.x,i.y,i);this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e);}}_doubleClickHandler(i$1){const t=this._findTargetGraphic(screenUtils.t(i$1));if(t){const e=new i(t,this.graphics.indexOf(t),i$1.x,i$1.y,i$1);this.emit("graphic-double-click",e),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(e);}}_pointerDownHandler(i){const t=this._findTargetGraphic(screenUtils.t(i));if(t){this._activeGraphic=t;const{x:e,y:r}=i,s=new a(t,this.graphics.indexOf(t),e,r,i);this.emit("graphic-pointer-down",s),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(s);}else this._activeGraphic=null;}_pointerUpHandler(i){if(this._activeGraphic){const{x:t,y:e}=i,r=this.graphics.indexOf(this._activeGraphic),s=new n(this._activeGraphic,r,t,e,i);this.emit("graphic-pointer-up",s),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(s);}}_pointerMoveHandler(i){if(this._dragEvent)return;const t=this._findTargetGraphic(screenUtils.t(i));if(t){const{x:e,y:r$1}=i;if(this._hoverGraphic){if(this._hoverGraphic===t)return;const s=this.graphics.indexOf(this._hoverGraphic),o=new c(this.graphics[s],s,e,r$1,i);this._hoverGraphic=null,this.emit("graphic-pointer-out",o),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(o);}const s=this.graphics.indexOf(t),o=new r(t,s,e,r$1,i);return this._hoverGraphic=t,this.emit("graphic-pointer-over",o),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(o))}if(this._hoverGraphic){const{x:t,y:e}=i,r=this.graphics.indexOf(this._hoverGraphic),s=new c(this.graphics[r],r,t,e,i);this._hoverGraphic=null,this.emit("graphic-pointer-out",s),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(s);}}_dragHandler(i){if("start"!==i.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;"start"===i.action&&this._removeIndicators(),i.stopPropagation();const{action:t,x:e$1,y:s$1}=i,o=this.graphics.indexOf(this._activeGraphic),a=this._activeGraphic.geometry,h$1=this._dragEvent?e$1-this._dragEvent.x:0,c=this._dragEvent?s$1-this._dragEvent.y:0,n=e$1-i.origin.x,l=s$1-i.origin.y,p=drawUtils.s(a,h$1,c,this.view);if(this._activeGraphic.geometry=p,this.enableMoveAllGraphics&&this.graphics.forEach((i=>{i!==this._activeGraphic&&(i.geometry=drawUtils.s(i.geometry,h$1,c,this.view));})),this._dragEvent=i,"start"===t){this._initialDragGeometry=request.l$1(a);const t=new s(this._activeGraphic,this.graphics,o,e$1,s$1,h$1,c,n,l,i);this.emit("graphic-move-start",t),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(t),t.defaultPrevented&&this._activeGraphic.set("geometry",a);}else if("update"===t){const t=new h(this._activeGraphic,this.graphics,o,e$1,s$1,h$1,c,n,l,i);this.emit("graphic-move",t),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(t),t.defaultPrevented&&(this._activeGraphic.geometry=a);}else {const t=new e(this._activeGraphic,this.graphics,o,e$1,s$1,h$1,c,n,l,i);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",t),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(t),t.defaultPrevented&&(this.graphics[o].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null;}}_keyDownHandler(i){"a"!==i.key&&"d"!==i.key&&"n"!==i.key||"moving"!==this.state||i.stopPropagation();}_findTargetGraphic(i){let t=null,e=Number.MAX_VALUE;return this._manipulators.forEach((r=>{const s=r.intersectionDistance(i);request.r(s)&&s<e&&(e=s,t=r.graphic);})),t}_setUpManipulators(){const{graphics:i,view:t}=this;this._manipulators.forEach((i=>i.destroy())),this._manipulators=null!=i&&i.length?i.map((i=>new GraphicManipulator.v({graphic:i,view:t}))):[];}_setUpIndicators(){var i;this._removeIndicators(),this.indicatorsEnabled&&(this._indicators=(null==(i=this.graphics)?void 0:i.map((i=>{const t=i.clone();return t.symbol=this._getSymbolForIndicator(i),t})))||[],this.layer.addMany(this._indicators));}_removeIndicators(){this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((i=>i.destroy())),this._indicators=[]);}_getSymbolForIndicator(i){const t=12;if(request.t$1(i.symbol))return null;switch(i.symbol.type){case"cim":return new SimpleLineSymbol.y({style:"circle",size:t,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:t,yoffset:e,height:r,width:s}=i.symbol,o=r===s?s:Math.max(r,s);return new SimpleLineSymbol.y({xoffset:t,yoffset:e,size:o,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:t,yoffset:e,size:r,style:s}=i.symbol;return new SimpleLineSymbol.y({xoffset:t,yoffset:e,style:"circle"===s?"circle":"square",size:r+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new SimpleLineSymbol.S({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new SimpleLineSymbol.m({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:e,yoffset:r}=i.symbol;return new SimpleLineSymbol.y({xoffset:e,yoffset:r,size:t,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}};request.e([request.d()],H.prototype,"_activeGraphic",void 0),request.e([request.d({readOnly:!0})],H.prototype,"type",void 0),request.e([request.d()],H.prototype,"callbacks",void 0),request.e([request.d()],H.prototype,"enableMoveAllGraphics",void 0),request.e([request.d()],H.prototype,"graphics",void 0),request.e([request.d()],H.prototype,"indicatorsEnabled",void 0),request.e([request.d()],H.prototype,"layer",void 0),request.e([request.d({readOnly:!0})],H.prototype,"state",null),request.e([request.d()],H.prototype,"view",void 0),H=request.e([request.i("esri.views.draw.support.GraphicMover")],H);const P=H;

exports.default = P;
