'use strict';

const request = require('./messageBundle-8be88d04.js');
const geometry = require('./geometry-ef17530a.js');
const Graphic = require('./Graphic-0aff6059.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const SimpleLineSymbol = require('./symbols-29b793e5.js');
const drawUtils = require('./drawUtils-75b2078c.js');
const GraphicMover = require('./GraphicMover-3c510be7.js');
const arcgisEditor_entry = require('./arcgis-editor-90a28e34.js');
const settings = require('./settings-dc1b8ceb.js');
require('./index-fde8502c.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./jsonUtils-b6068079.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./GraphicsLayer-5076fd9b.js');
require('./GraphicsCollection-d70ae8cb.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./Layer-31cde361.js');
require('./BlendLayer-6a2ab430.js');
require('./mat4-f68486bc.js');
require('./ScaleRangeLayer-5320a5ba.js');
require('./ElevationInfo-d3e3d64f.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./screenUtils-e9e44bb6.js');
require('./executeQueryJSON-3f84e897.js');
require('./utils-8a0a0870.js');
require('./query-0e394548.js');
require('./normalizeUtils-a793b472.js');
require('./pbfQueryUtils-49e071a8.js');
require('./pbf-dc87045b.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./queryZScale-d48be112.js');
require('./zscale-25ef55f0.js');
require('./Query-354911d3.js');
require('./TimeExtent-8b558884.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
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
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./jsonUtils-fc4080da.js');
require('./MultiOriginJSONSupport-77ac451b.js');
require('./HeightModelInfo-06fd3d80.js');
require('./workers-bde9fe32.js');
require('./APIKeyMixin-77c99036.js');
require('./ArcGISService-56d7a630.js');
require('./arcgisLayerUrl-5174d661.js');
require('./CustomParametersMixin-996a5732.js');
require('./labelingInfo-594911d5.js');
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
require('./popupUtils-7a76fb7d.js');
require('./utils-71e85012.js');
require('./ItemCache-149fdb6e.js');
require('./utils-fb318f28.js');
require('./Queue-1713f2e9.js');
require('./layerViewUtils-96bae70b.js');
require('./GoTo-be01affb.js');
require('./accessibleHandler-652e5d90.js');
require('./vmEvent-9b257013.js');
require('./GraphicManipulator-bf3071c5.js');
require('./vec2-d000a8cb.js');
require('./projection-b19710fa.js');
require('./geodesicConstants-047d586a.js');
require('./drapedUtils-2fa2770f.js');
require('./InputField-f3d341ce.js');
require('./luxon-b6474344.js');
require('./_commonjsHelpers-1fbbf0eb.js');
require('./hitTestSelectUtils-9a744d46.js');
require('./geodesicUtils-4d3dae6f.js');
require('./vec2f64-60b3c97e.js');
require('./geometry2dUtils-65eda69d.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(n){let e=0,t=0;const r=n.length;let i,o=n[t];for(t=0;t<r-1;t++)i=n[t+1],e+=(i[0]-o[0])*(i[1]+o[1]),o=i;return e>=0}function o(n,e,t,r){const i=[];for(const o of n){const n=o.slice(0);i.push(n);const s=e*(o[0]-r.x)-t*(o[1]-r.y)+r.x,l=t*(o[0]-r.x)+e*(o[1]-r.y)+r.y;n[0]=s,n[1]=l;}return i}function s(s,l,a){const c=s.spatialReference,f=l*Math.PI/180,m=Math.cos(f),x=Math.sin(f);var p,u;"xmin"in s&&(a=null!=(p=a)?p:s.center,s=new geometry.v({spatialReference:c,rings:[[[s.xmin,s.ymin],[s.xmin,s.ymax],[s.xmax,s.ymax],[s.xmax,s.ymin],[s.xmin,s.ymin]]]}));if("paths"in s){var y;a=null!=(y=a)?y:s.extent.center;const n=[];for(const e of s.paths)n.push(o(e,m,x,a));return new geometry.m({spatialReference:c,paths:n})}if("rings"in s){var h;a=null!=(h=a)?h:s.extent.center;const e=[];for(const n of s.rings){const t=i(n),r=o(n,m,x,a);i(r)!==t&&r.reverse(),e.push(r);}return new geometry.v({spatialReference:c,rings:e})}if("x"in s){var g;a=null!=(g=a)?g:s;const n=new request.b$2({x:m*(s.x-a.x)-x*(s.y-a.y)+a.x,y:x*(s.x-a.x)+m*(s.y-a.y)+a.y,spatialReference:c});return null!=s.z&&(n.z=s.z),null!=s.m&&(n.m=s.m),n}return "points"in s?(a=null!=(u=a)?u:s.extent.center,new geometry.m$1({points:o(s.points,m,x,a),spatialReference:c})):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class M{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-start";}}class I{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move";}}class C{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-stop";}}class E{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-start";}}class O{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate";}}class j{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-stop";}}class L{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-start";}}class B{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale";}}class Y{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-stop";}}const z=settings.h.transformGraphics,N={centerIndicator:new SimpleLineSymbol.y({style:"cross",size:z.center.size,color:z.center.color}),fill:{default:new SimpleLineSymbol.S({color:z.fill.color,outline:{color:z.fill.outlineColor,join:"round",width:1}}),active:new SimpleLineSymbol.S({color:z.fill.stagedColor,outline:{color:z.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new SimpleLineSymbol.y({style:"square",size:z.vertex.size,color:z.vertex.color,outline:{color:z.vertex.outlineColor,width:1}}),hover:new SimpleLineSymbol.y({style:"square",size:z.vertex.hoverSize,color:z.vertex.hoverColor,outline:{color:z.vertex.hoverOutlineColor,width:1}})},rotator:{default:new SimpleLineSymbol.y({style:"circle",size:z.vertex.size,color:z.vertex.color,outline:{color:z.vertex.outlineColor,width:1}}),hover:new SimpleLineSymbol.y({style:"circle",size:z.vertex.hoverSize,color:z.vertex.hoverColor,outline:{color:z.vertex.hoverOutlineColor,width:1}})},rotatorLine:new SimpleLineSymbol.m({color:z.line.color,width:1})};let P=class extends request.n$2.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._handles=new request.u,this._mover=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.centerGraphic=null,this.backgroundGraphic=null,this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.handleGraphics=[],this.layer=null,this.preserveAspectRatio=!1,this.rotateGraphic=null,this.showCenterGraphic=!0,this.view=null,this._getBounds=(()=>{const t=aaBoundingRect.u();return (e,i)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const s of i){if(!s)continue;let i,r,a,o;if("point"===s.type)i=a=s.x,r=o=s.y;else if("multipoint"===s.type){const e=geometry.t$1(s);[i,r,a,o]=geometry.h(t,[e]);}else if("extent"===s.type)[i,r,a,o]=[s.xmin,s.ymin,s.xmax,s.ymax];else {const e=geometry.t$1(s);[i,r,a,o]=geometry.h(t,e);}e[0]=Math.min(i,e[0]),e[1]=Math.min(r,e[1]),e[2]=Math.max(a,e[2]),e[3]=Math.max(o,e[3]);}return e}})();}initialize(){this._setup(),this._handles.add([request.a(this,"view.ready",(()=>{const{layer:t,view:e}=this;arcgisEditor_entry.r$1(e,t);})),request.O(this,"preserveAspectRatio",(()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics());})),request.O(this,"view.scale",(()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic();})),request.O(this,"graphics",(()=>this.refresh())),request.O(this,"layer",((t,e)=>{e&&this._resetGraphics(e),this.refresh();}))]);}destroy(){this._reset(),this._handles=request.l$3(this._handles);}get state(){const t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}set symbols(t){const{centerIndicator:e=N.centerIndicator,fill:i=N.fill,handles:s=N.handles,rotator:r=N.rotator,rotatorLine:a=N.rotatorLine}=t||{};this._set("symbols",{centerIndicator:e,fill:i,handles:s,rotator:r,rotatorLine:a});}isUIGraphic(t){let e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.includes(t)}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,r=drawUtils.s(s,t,e,this.view);i.geometry=r;}this.refresh(),this._emitMoveStopEvent(t,e,null);}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,r=drawUtils.i(s,t,e);i.geometry=r;}this.refresh(),this._emitScaleStopEvent(t,e,null);}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const t=this.handleGraphics[1].geometry.x,i=this.handleGraphics[3].geometry.y;e=new request.b$2(t,i,this.view.spatialReference);}for(const i of this.graphics){const s$1=i.geometry,r=s(s$1,t,e);i.geometry=r;}this.refresh(),this._emitRotateStopEvent(t,null);}}refresh(){this._reset(),this._setup();}reset(){this.graphics=[];}_setup(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics());}_reset(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default";}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0;}_resetGraphics(t){const e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));for(const i of this.handleGraphics)i.destroy();this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null);}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this.handleGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&t.push(this.rotateGraphic),this.showCenterGraphic&&t.push(this.centerGraphic),this._mover=new GraphicMover['default']({enableMoveAllGraphics:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:t=>this._onGraphicClickCallback(t),onGraphicMoveStart:t=>this._onGraphicMoveStartCallback(t),onGraphicMove:t=>this._onGraphicMoveCallback(t),onGraphicMoveStop:t=>this._onGraphicMoveStopCallback(t),onGraphicPointerOver:t=>this._onGraphicPointerOverCallback(t),onGraphicPointerOut:t=>this._onGraphicPointerOutCallback(t)}});}_getStartInfo(t){const[e,i,s,r]=this._getBoxBounds(aaBoundingRect.u()),a=Math.abs(s-e),o=Math.abs(r-i),h=(s+e)/2,c=(r+i)/2,{x:n,y:p}=t.geometry;return {width:a,height:o,centerX:h,centerY:c,startX:n,startY:p,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}}_getGraphicInfos(){return this.graphics.map((t=>this._getGraphicInfo(t)))}_getGraphicInfo(t){const e=t.geometry,[i,s,r,a]=this._getBounds(aaBoundingRect.u(),[e]);return {width:Math.abs(r-i),height:Math.abs(a-s),centerX:(r+i)/2,centerY:(a+s)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t);}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:s,backgroundGraphic:r,handleGraphics:a,rotateGraphic:o,symbols:h}=this,c=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),r.symbol=h.fill.active,this._startInfo=this._getStartInfo(c),c===o?(this.view.cursor="grabbing",this._emitRotateStartEvent(e,c)):a.includes(c)?(this._activeHandleGraphic=c,this._emitScaleStartEvent(i,s,c)):this._emitMoveStartEvent(t.dx,t.dy,c);}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this.handleGraphics.includes(e))this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._angleOfRotation,e);else {const i=t.dx,s=t.dy;this._totalDx+=i,this._totalDy+=s,this._moveGraphic(e,i,s),this._emitMoveEvent(i,s,e);}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:s,_totalDy:r,_xScale:a,_yScale:o,handleGraphics:h,rotateGraphic:c}=this;this.refresh(),e===c?(this.view.cursor="pointer",this._emitRotateStopEvent(i,e)):h.includes(e)?this._emitScaleStopEvent(a,o,e):this._emitMoveStopEvent(s,r,e);}_onGraphicPointerOverCallback(t){const{backgroundGraphic:e,handleGraphics:i,graphics:s,rotateGraphic:r,symbols:a,view:o}=this,h=t.graphic;if(h===r)return r.symbol=a.rotator.hover,void(o.cursor="pointer");if(s.includes(h)||h===e)return void(o.cursor="move");if(!i.includes(h))return void(o.cursor="pointer");t.graphic.symbol=a.handles.hover;const c=o.rotation;let n,l=t.index;switch(l<8&&(c>=0&&c<45?l%=8:l=c>=45&&c<90?(l+1)%8:c>=90&&c<135?(l+2)%8:c>=135&&c<180?(l+3)%8:c>=180&&c<225?(l+4)%8:c>=225&&c<270?(l+5)%8:c>=270&&c<315?(l+6)%8:(l+7)%8),l){case 0:case 4:n="nwse-resize";break;case 1:case 5:n="ns-resize";break;case 2:case 6:n="nesw-resize";break;case 3:case 7:n="ew-resize";break;default:n="pointer";}o.cursor=n;}_onGraphicPointerOutCallback(t){const{handleGraphics:e,rotateGraphic:i,symbols:s,view:r}=this;t.graphic===i?i.symbol=s.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),r.cursor="default";}_scaleGraphic(t){const{_startInfo:e,handleGraphics:i,preserveAspectRatio:s,view:r}=this,{centerX:a,centerY:o,startX:h,startY:c}=e,{resolution:n,transform:l}=r.state,p=i.indexOf(t);1!==p&&5!==p||this._updateX(t,a),3!==p&&7!==p||this._updateY(t,o);const{x:d,y:m}=t.geometry,u=l[0]*d+l[2]*m+l[4],g=l[1]*d+l[3]*m+l[5],_=e.graphicInfos.map((t=>t.geometry));if(s){const t=l[0]*a+l[2]*o+l[4],e=l[1]*a+l[3]*o+l[5],i=l[0]*h+l[2]*c+l[4],s=l[1]*h+l[3]*c+l[5];this._xScale=this._yScale=drawUtils.a(t,e,i,s,u,g);for(const r of _){const t=_.indexOf(r);this.graphics[t].geometry=drawUtils.i(r,this._xScale,this._yScale,[a,o]);}this._updateBackgroundGraphic();}else {const{width:t,height:i}=e;let s=d-h,l=c-m;if(1===p||5===p?s=0:3!==p&&7!==p||(l=0),0===s&&0===l)return;const u=t+(h>a?s:-1*s),g=i+(c<o?l:-1*l),G=a+s/2,f=o+l/2;this._xScale=u/t||1,this._yScale=g/i||1,1===p||5===p?this._xScale=1:3!==p&&7!==p||(this._yScale=1);const b=(G-a)/n,S=(f-o)/n,w=drawUtils.i(e.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=drawUtils.s(w,b,S,r,!0);const{centerX:x,centerY:R}=this._getGraphicInfo(this.backgroundGraphic),M=(x-a)/n,I=-1*(R-o)/n;for(const e of _){const t=_.indexOf(e),i=drawUtils.i(e,this._xScale,this._yScale,[a,o]);this.graphics[t].geometry=drawUtils.s(i,M,I,r,!0);}this.centerGraphic.geometry=new request.b$2(x,R,r.spatialReference);}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:s$1,startY:r,box:a,rotate:o}=this._startInfo,h=new request.b$2(s$1,r,this.view.spatialReference),c=new request.b$2(e,i,this.view.spatialReference),n=t.geometry;this._angleOfRotation=drawUtils.m(h,n,c);const l=this._startInfo.graphicInfos.map((t=>t.geometry));for(const p of l){const t=l.indexOf(p),e=s(p,this._angleOfRotation,c);this.graphics[t].geometry=e;}this.backgroundGraphic.geometry=s(a,this._angleOfRotation,c),this.rotateGraphic.geometry=s(o,this._angleOfRotation,c);}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const s=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=drawUtils.s(s,e,i,this.view);for(const r of this.graphics)r!==t&&(r.geometry=drawUtils.s(r.geometry,e,i,this.view));}else if(t===this.centerGraphic){const t=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=drawUtils.s(t,e,i,this.view);}if(t===this.backgroundGraphic||t===this.centerGraphic)for(const s of this.graphics)s.geometry=drawUtils.s(s.geometry,e,i,this.view);}_setupGraphics(){const{_graphicAttributes:t,symbols:i}=this;this._set("centerGraphic",new Graphic.h(null,i.centerIndicator,t)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new Graphic.h(null,i.fill.default,t)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new Graphic.h(null,i.rotatorLine,t),this._set("rotateGraphic",new Graphic.h(null,i.rotator.default,t)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(let s=0;s<8;s++)this.handleGraphics.push(new Graphic.h(null,i.handles.default,t));this.enableScaling&&this.layer.addMany(this.handleGraphics);}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic();}_hideGraphicsBeforeUpdate(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach((t=>t.visible=!1));}_updateHandleGraphics(){const t=this._getCoordinates(!0);this.handleGraphics.forEach(((e,i)=>{const[s,r]=t[i];this._updateXY(e,s,r);}));}_updateBackgroundGraphic(){const t=this._getCoordinates();this.backgroundGraphic.geometry=new geometry.v({rings:t,spatialReference:this.view.spatialReference});}_updateCenterGraphic(){const[t,e,i,s]=this._getBoxBounds(aaBoundingRect.u()),r=(i+t)/2,a=(s+e)/2;this.centerGraphic.geometry=new request.b$2(r,a,this.view.spatialReference);}_updateRotateGraphic(){if(!this.handleGraphics.length)return;const{x:t,y:e}=this.handleGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this.rotateGraphic.geometry=new request.b$2(t,i,this.view.spatialReference);}_updateRotateLineGraphic(){if(!this.handleGraphics.length||!this.rotateGraphic||!this.rotateGraphic.geometry)return;const t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new geometry.m({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference});}_updateXY(t,e,i){t.geometry=new request.b$2(e,i,this.view.spatialReference);}_updateX(t,e){const i=t.geometry.y;t.geometry=new request.b$2(e,i,this.view.spatialReference);}_updateY(t,e){const i=t.geometry.x;t.geometry=new request.b$2(i,e,this.view.spatialReference);}_hasExtentGraphic(){return this.graphics.some((t=>t&&request.r(t.geometry)&&"extent"===t.geometry.type))}_getBoxBounds(t){const e=this.graphics.map((t=>t.geometry));return this._getBounds(t,e)}_getCoordinates(t){const[e,i,s,r]=this._getBoxBounds(aaBoundingRect.u());if(t){const t=(e+s)/2,a=(r+i)/2;return [[e,r],[t,r],[s,r],[s,a],[s,i],[t,i],[e,i],[e,a]]}return [[e,r],[s,r],[s,i],[e,i]]}_emitMoveStartEvent(t,e,i){const s=new M(this.graphics,i,t,e);this.emit("move-start",s),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(s);}_emitMoveEvent(t,e,i){const s=new I(this.graphics,i,t,e);this.emit("move",s),this.callbacks.onMove&&this.callbacks.onMove(s);}_emitMoveStopEvent(t,e,i){const s=new C(this.graphics,i,t,e);this.emit("move-stop",s),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(s);}_emitRotateStartEvent(t,e){const i=new E(this.graphics,e,t);this.emit("rotate-start",i),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(i);}_emitRotateEvent(t,e){const i=new O(this.graphics,e,t);this.emit("rotate",i),this.callbacks.onRotate&&this.callbacks.onRotate(i);}_emitRotateStopEvent(t,e){const i=new j(this.graphics,e,t);this.emit("rotate-stop",i),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(i);}_emitScaleStartEvent(t,e,i){const s=new L(this.graphics,i,t,e);this.emit("scale-start",s),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(s);}_emitScaleEvent(t,e,i){const s=new B(this.graphics,i,t,e);this.emit("scale",s),this.callbacks.onScale&&this.callbacks.onScale(s);}_emitScaleStopEvent(t,e,i){const s=new Y(this.graphics,i,t,e);this.emit("scale-stop",s),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(s);}};request.e([request.d()],P.prototype,"_rotateLineGraphic",void 0),request.e([request.d({readOnly:!0})],P.prototype,"type",void 0),request.e([request.d()],P.prototype,"callbacks",void 0),request.e([request.d({readOnly:!0})],P.prototype,"centerGraphic",void 0),request.e([request.d({readOnly:!0})],P.prototype,"backgroundGraphic",void 0),request.e([request.d()],P.prototype,"enableMovement",void 0),request.e([request.d()],P.prototype,"enableRotation",void 0),request.e([request.d()],P.prototype,"enableScaling",void 0),request.e([request.d()],P.prototype,"graphics",void 0),request.e([request.d({readOnly:!0})],P.prototype,"handleGraphics",void 0),request.e([request.d()],P.prototype,"layer",void 0),request.e([request.d()],P.prototype,"preserveAspectRatio",void 0),request.e([request.d({readOnly:!0})],P.prototype,"rotateGraphic",void 0),request.e([request.d()],P.prototype,"showCenterGraphic",void 0),request.e([request.d({readOnly:!0})],P.prototype,"state",null),request.e([request.d({value:N})],P.prototype,"symbols",null),request.e([request.d()],P.prototype,"view",void 0),P=request.e([request.i("esri.views.draw.support.Box")],P);const X=P;

exports.default = X;
