import { e as e$1, d, i as i$1, r as n$1, u, g as f, k as a$1, ai as l, D as l$1, af as t$2, A as r$2 } from './messageBundle-f75b4090.js';
import { y, m, S } from './symbols-b414aa72.js';
import { h as h$1 } from './GraphicsLayer-86475574.js';
import { s as s$1 } from './drawUtils-b1c3abcd.js';
import { q as r$1 } from './arcgis-editor-c0835cea.js';
import { u as u$1, t as t$1 } from './screenUtils-49015526.js';
import { v } from './GraphicManipulator-3b7bea3e.js';
import './index-b157fcf2.js';
import './enumeration-d3301938.js';
import './opacityUtils-5e864561.js';
import './geometry-7e07b1ba.js';
import './Symbol-cad56b52.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './persistableUrlUtils-40bbec67.js';
import './Portal-c5cfa317.js';
import './GraphicsCollection-58a35288.js';
import './Graphic-3961df6c.js';
import './PopupTemplate-6e5ecad2.js';
import './Identifiable-da047c47.js';
import './jsonUtils-13b1f6fd.js';
import './HandleOwner-88326c19.js';
import './reactiveUtils-8f9c3a3d.js';
import './Layer-b50ea610.js';
import './BlendLayer-38b8abf7.js';
import './mat4-f34c6460.js';
import './ScaleRangeLayer-584ce37b.js';
import './ElevationInfo-be94499b.js';
import './lengthUtils-f033d4fe.js';
import './unitUtils-38774114.js';
import './FeatureLayer-91daf6b1.js';
import './UniqueValueRenderer-3c55992d.js';
import './VisualVariablesMixin-0befdf7b.js';
import './colorRamps-22c88e98.js';
import './ColorStop-d4fc22fe.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-26c41ea6.js';
import './diffUtils-849b3672.js';
import './jsonUtils-ade233cd.js';
import './styleUtils-cb28c5ef.js';
import './DictionaryRenderer-bea76550.js';
import './LRUCache-d5842b88.js';
import './MemCache-78a9f000.js';
import './jsonUtils-aa645e92.js';
import './MultiOriginJSONSupport-cb4804f4.js';
import './Field-bfaa8af9.js';
import './fieldType-66a19d8a.js';
import './HeightModelInfo-1a6d7a08.js';
import './workers-c4ad1958.js';
import './queryZScale-f42386f8.js';
import './zscale-faf9ffc2.js';
import './FeatureSet-58481609.js';
import './APIKeyMixin-d7a9a0ad.js';
import './ArcGISService-49a9bda6.js';
import './arcgisLayerUrl-49ef2818.js';
import './CustomParametersMixin-758e21ed.js';
import './labelingInfo-1bb19962.js';
import './TimeExtent-a024c0d8.js';
import './Query-d6335b3a.js';
import './OperationalLayer-d609e521.js';
import './LabelClass-47fb4a25.js';
import './labelUtils-8999bd11.js';
import './defaultsJSON-0b68054b.js';
import './OrderedLayer-7fa2fd9d.js';
import './PortalLayer-290979fa.js';
import './asyncUtils-fe35d349.js';
import './PortalItem-155284f3.js';
import './RefreshableLayer-f4d1c27c.js';
import './TemporalLayer-5a7f466a.js';
import './TimeInfo-44dec2e0.js';
import './FeatureType-aa59abbf.js';
import './fieldProperties-d7b323c6.js';
import './FieldsIndex-2a111e7e.js';
import './LayerFloorInfo-c2959bac.js';
import './styleUtils-61c488eb.js';
import './TopFeaturesQuery-cc717439.js';
import './popupUtils-c3247ec1.js';
import './InputField-3a8ab041.js';
import './Heading-960a88b2.js';
import './vmEvent-6b909beb.js';
import './luxon-ec6026e9.js';
import './_commonjsHelpers-80e09147.js';
import './drapedUtils-4802ed0b.js';
import './hitTestSelectUtils-779b69ca.js';
import './layerViewUtils-4127a8cf.js';
import './geodesicUtils-32a18b56.js';
import './geodesicConstants-54cb88d4.js';
import './vec2-5672471e.js';
import './vec2f64-35868783.js';
import './geometry2dUtils-4e41c21e.js';
import './accessibleHandler-feb312a0.js';
import './executeQueryJSON-97747696.js';
import './utils-ab350511.js';
import './query-87b92407.js';
import './normalizeUtils-25a1ce55.js';
import './pbfQueryUtils-18f884ce.js';
import './pbf-6bd45926.js';
import './OptimizedFeature-44d5df5b.js';
import './OptimizedFeatureSet-27736f1f.js';
import './widget-c014d189.js';
import './QueryTask-23c14fd1.js';
import './featureConversionUtils-cbd79ea2.js';
import './Task-21abc82a.js';
import './utils-c84cc443.js';
import './ItemCache-5d2cf877.js';
import './utils-f8425723.js';
import './Queue-a7e7a3e5.js';
import './GoTo-148cc420.js';
import './projection-f3d8779d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-click";}}class i{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-double-click";}}class s{constructor(t,i,s,h,e,r,c,a,n,p){this.graphic=t,this.allGraphics=i,this.index=s,this.x=h,this.y=e,this.dx=r,this.dy=c,this.totalDx=a,this.totalDy=n,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-start";}preventDefault(){this.defaultPrevented=!0;}}class h{constructor(t,i,s,h,e,r,c,a,n,p){this.graphic=t,this.allGraphics=i,this.index=s,this.x=h,this.y=e,this.dx=r,this.dy=c,this.totalDx=a,this.totalDy=n,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move";}preventDefault(){this.defaultPrevented=!0;}}class e{constructor(t,i,s,h,e,r,c,a,n,p){this.graphic=t,this.allGraphics=i,this.index=s,this.x=h,this.y=e,this.dx=r,this.dy=c,this.totalDx=a,this.totalDy=n,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-stop";}preventDefault(){this.defaultPrevented=!0;}}class r{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-pointer-over";}}class c{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-pointer-out";}}class a{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-pointer-down";}}class n{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-pointer-up";}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let H=class extends n$1.EventedAccessor{constructor(i){super(i),this._activeGraphic=null,this._indicators=[],this._dragEvent=null,this._handles=new u,this._hoverGraphic=null,this._initialDragGeometry=null,this._viewHandles=new u,this._manipulators=[],this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!0,this.layer=new h$1({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null;}initialize(){r$1(this.view,this.layer),this.refresh(),this._handles.add([f(this,["graphics","graphics.length"],(()=>this.refresh())),a$1(this,"view.ready",(()=>{this._viewHandles.add([this.view.on("immediate-click",(i=>this._clickHandler(i)),u$1.TOOL),this.view.on("double-click",(i=>this._doubleClickHandler(i)),u$1.TOOL),this.view.on("pointer-down",(i=>this._pointerDownHandler(i)),u$1.TOOL),this.view.on("pointer-move",(i=>this._pointerMoveHandler(i)),u$1.TOOL),this.view.on("pointer-up",(i=>this._pointerUpHandler(i)),u$1.TOOL),this.view.on("drag",(i=>this._dragHandler(i)),u$1.TOOL),this.view.on("key-down",(i=>this._keyDownHandler(i)),u$1.TOOL)]);}))]);}destroy(){var i;this._removeIndicators(),null==(i=this.view.map)||i.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((i=>i.destroy())),this._manipulators=null,this._handles=l(this._handles),this._viewHandles=l(this._viewHandles);}get state(){const i=!!this.get("view.ready"),t=!!this.get("graphics.length"),e=this._activeGraphic;return i&&t?e?"moving":"active":i?"ready":"disabled"}refresh(){this._setUpIndicators(),this._setUpManipulators();}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null;}updateGeometry(i,t){const e=this.graphics[i];e&&(e.set("geometry",t),this._setUpIndicators());}_clickHandler(i){const t$2=this._findTargetGraphic(t$1(i));if(t$2){const e=new t(t$2,this.graphics.indexOf(t$2),i.x,i.y,i);this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e);}}_doubleClickHandler(i$1){const t=this._findTargetGraphic(t$1(i$1));if(t){const e=new i(t,this.graphics.indexOf(t),i$1.x,i$1.y,i$1);this.emit("graphic-double-click",e),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(e);}}_pointerDownHandler(i){const t=this._findTargetGraphic(t$1(i));if(t){this._activeGraphic=t;const{x:e,y:r}=i,s=new a(t,this.graphics.indexOf(t),e,r,i);this.emit("graphic-pointer-down",s),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(s);}else this._activeGraphic=null;}_pointerUpHandler(i){if(this._activeGraphic){const{x:t,y:e}=i,r=this.graphics.indexOf(this._activeGraphic),s=new n(this._activeGraphic,r,t,e,i);this.emit("graphic-pointer-up",s),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(s);}}_pointerMoveHandler(i){if(this._dragEvent)return;const t=this._findTargetGraphic(t$1(i));if(t){const{x:e,y:r$1}=i;if(this._hoverGraphic){if(this._hoverGraphic===t)return;const s=this.graphics.indexOf(this._hoverGraphic),o=new c(this.graphics[s],s,e,r$1,i);this._hoverGraphic=null,this.emit("graphic-pointer-out",o),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(o);}const s=this.graphics.indexOf(t),o=new r(t,s,e,r$1,i);return this._hoverGraphic=t,this.emit("graphic-pointer-over",o),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(o))}if(this._hoverGraphic){const{x:t,y:e}=i,r=this.graphics.indexOf(this._hoverGraphic),s=new c(this.graphics[r],r,t,e,i);this._hoverGraphic=null,this.emit("graphic-pointer-out",s),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(s);}}_dragHandler(i){if("start"!==i.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;"start"===i.action&&this._removeIndicators(),i.stopPropagation();const{action:t,x:e$1,y:s$2}=i,o=this.graphics.indexOf(this._activeGraphic),a=this._activeGraphic.geometry,h$1=this._dragEvent?e$1-this._dragEvent.x:0,c=this._dragEvent?s$2-this._dragEvent.y:0,n=e$1-i.origin.x,l=s$2-i.origin.y,p=s$1(a,h$1,c,this.view);if(this._activeGraphic.geometry=p,this.enableMoveAllGraphics&&this.graphics.forEach((i=>{i!==this._activeGraphic&&(i.geometry=s$1(i.geometry,h$1,c,this.view));})),this._dragEvent=i,"start"===t){this._initialDragGeometry=l$1(a);const t=new s(this._activeGraphic,this.graphics,o,e$1,s$2,h$1,c,n,l,i);this.emit("graphic-move-start",t),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(t),t.defaultPrevented&&this._activeGraphic.set("geometry",a);}else if("update"===t){const t=new h(this._activeGraphic,this.graphics,o,e$1,s$2,h$1,c,n,l,i);this.emit("graphic-move",t),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(t),t.defaultPrevented&&(this._activeGraphic.geometry=a);}else {const t=new e(this._activeGraphic,this.graphics,o,e$1,s$2,h$1,c,n,l,i);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",t),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(t),t.defaultPrevented&&(this.graphics[o].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null;}}_keyDownHandler(i){"a"!==i.key&&"d"!==i.key&&"n"!==i.key||"moving"!==this.state||i.stopPropagation();}_findTargetGraphic(i){let t=null,e=Number.MAX_VALUE;return this._manipulators.forEach((r=>{const s=r.intersectionDistance(i);r$2(s)&&s<e&&(e=s,t=r.graphic);})),t}_setUpManipulators(){const{graphics:i,view:t}=this;this._manipulators.forEach((i=>i.destroy())),this._manipulators=null!=i&&i.length?i.map((i=>new v({graphic:i,view:t}))):[];}_setUpIndicators(){var i;this._removeIndicators(),this.indicatorsEnabled&&(this._indicators=(null==(i=this.graphics)?void 0:i.map((i=>{const t=i.clone();return t.symbol=this._getSymbolForIndicator(i),t})))||[],this.layer.addMany(this._indicators));}_removeIndicators(){this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((i=>i.destroy())),this._indicators=[]);}_getSymbolForIndicator(i){const t=12;if(t$2(i.symbol))return null;switch(i.symbol.type){case"cim":return new y({style:"circle",size:t,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:t,yoffset:e,height:r,width:s}=i.symbol,o=r===s?s:Math.max(r,s);return new y({xoffset:t,yoffset:e,size:o,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:t,yoffset:e,size:r,style:s}=i.symbol;return new y({xoffset:t,yoffset:e,style:"circle"===s?"circle":"square",size:r+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new S({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new m({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:e,yoffset:r}=i.symbol;return new y({xoffset:e,yoffset:r,size:t,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}};e$1([d()],H.prototype,"_activeGraphic",void 0),e$1([d({readOnly:!0})],H.prototype,"type",void 0),e$1([d()],H.prototype,"callbacks",void 0),e$1([d()],H.prototype,"enableMoveAllGraphics",void 0),e$1([d()],H.prototype,"graphics",void 0),e$1([d()],H.prototype,"indicatorsEnabled",void 0),e$1([d()],H.prototype,"layer",void 0),e$1([d({readOnly:!0})],H.prototype,"state",null),e$1([d()],H.prototype,"view",void 0),H=e$1([i$1("esri.views.draw.support.GraphicMover")],H);const P=H;

export default P;
