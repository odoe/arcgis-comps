'use strict';

const unitUtils = require('./unitUtils-083cb8d0.js');
const screenUtils = require('./screenUtils-e9e44bb6.js');
const request = require('./messageBundle-8be88d04.js');
const screenUtils$1 = require('./screenUtils-d911ae62.js');
const vec2 = require('./vec2-d000a8cb.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const common = require('./common-41a349f2.js');
require('./mat4-f68486bc.js');
const LineVisualElement = require('./LineVisualElement-62f61931.js');
const projection = require('./projection-b19710fa.js');
const vectorStacks = require('./vectorStacks-f48a010a.js');
const mathUtils$1 = require('./mathUtils-87b1f941.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$2={readOnly:!0,get(){const e="metric",{view:r}=this;if(!r)return e;const i=r.get("map.portalItem.portal");if(i){switch(i.get("user.units")||i.units){case e:return e;case"english":return "imperial"}}return unitUtils.ee(r.spatialReference)||e}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$1{constructor(e=null){this.spatialReference=e;}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors());}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=unitUtils.H(this._spatialReference,1),this._metersPerElevationUnit=unitUtils.H(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$1(t,a,n,e=2,i="abbr"){return screenUtils.f$1(t,a.toUnit(n).value,n,e,i)}function f$1(r,a,n=2,e="abbr"){if("length"!==a.measure)throw new Error("quantity is not a length");return screenUtils.b(r,a.value,a.unit,n,e)}function s$1(r,t,n=2,e="abbr"){if("length"!==t.measure)throw new Error("quantity is not a length");return screenUtils.l(r,t.value,t.unit,n,e)}function h$2(r,t,a=2,n="abbr"){if("length"!==t.measure)throw new Error("quantity is not a length");return screenUtils.g$1(r,t.value,t.unit,a,n)}function b(r,t,a=2,n="abbr"){if("length"!==t.measure)throw new Error("quantity is not a length");return screenUtils.F(r,t.value,t.unit,a,n)}function g$3(r){if("angle"!==r.measure)throw new Error("quantity is not an angle");return screenUtils.d$1(r.value,r.unit)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g$2(e,r){if(mathUtils.o(r,0,0,0),e.length>0){for(let n=0;n<e.length;++n)mathUtils.u(r,r,e[n]);mathUtils.d(r,r,1/e.length);}}function k$2(e,r,n,o){o.projectToRenderScreen(e,C$2),o.projectToRenderScreen(r,H$1),vec2.o(n,U$1,x$1),vec2.v(n,n);}const C$2=screenUtils$1.x(),x$1=C$2,H$1=screenUtils$1.x(),U$1=H$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e$1=e=>({vnodeSelector:"",properties:void 0,children:void 0,text:e.toString(),domNode:null}),r$1=(t,o,n)=>{for(let l=0,i=o.length;l<i;l++){let i=o[l];Array.isArray(i)?r$1(t,i,n):null!=i&&!1!==i&&("string"==typeof i&&(i=e$1(i)),n.push(i));}};function t(e,t,o){if(Array.isArray(t))o=t,t=void 0;else if(t&&("string"==typeof t||t.hasOwnProperty("vnodeSelector"))||o&&("string"==typeof o||o.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let n,l;return o&&1===o.length&&"string"==typeof o[0]?n=o[0]:o&&(l=[],r$1(e,o,l),0===l.length&&(l=void 0)),{vnodeSelector:e,properties:t,children:l,text:""===n?void 0:n,domNode:null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let r=class extends request.p{constructor(t){super(t),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0;}get startPosition(){return [this.startX,this.startY]}set startPosition(t){this._set("startX",t[0]),this._set("startY",t[1]);}get endPosition(){return [this.endX,this.endY]}set endPosition(t){this._set("endX",t[0]),this._set("endY",t[1]);}get strokeStyle(){const t=this.color;return `rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}get lineCap(){return "round"}render(){const{height:t$1,left:s,top:e,width:i,x1:r,x2:n,y1:a,y2:p}=this.calculateCoordinates(h$1),l=`stroke: ${this.strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this.lineCap};`;return t("div",{classes:{"esri-line-overlay-item":!0},styles:{left:s+"px",top:e+"px",width:i+"px",height:t$1+"px",visibility:this.visible?"visible":"hidden"}},[t("svg",{width:i,height:t$1},[t("line",{x1:r,y1:a,x2:n,y2:p,style:l})])])}renderCanvas(t){if(!this.visible)return;t.strokeStyle=this.strokeStyle,t.lineWidth=this.width,t.lineCap=this.lineCap;const s=this.calculateCoordinates(h$1);t.beginPath(),t.moveTo(s.left+s.x1,s.top+s.y1),t.lineTo(s.left+s.x2,s.top+s.y2),t.stroke();}calculateCoordinates(t){const s=Math.min(this.startX,this.endX),e=Math.max(this.startX,this.endX),i=Math.min(this.startY,this.endY),o=Math.max(this.startY,this.endY),r=this.width;return t.left=s-r,t.top=i-r,t.width=e-s+2*r,t.height=Math.max(20,o-i+2*r),t.x1=this.startX-s+r,t.y1=this.startY-i+r,t.x2=this.endX-s+r,t.y2=this.endY-i+r,t}};request.e([request.d()],r.prototype,"startX",void 0),request.e([request.d()],r.prototype,"startY",void 0),request.e([request.d()],r.prototype,"endX",void 0),request.e([request.d()],r.prototype,"endY",void 0),request.e([request.d()],r.prototype,"startPosition",null),request.e([request.d()],r.prototype,"endPosition",null),request.e([request.d()],r.prototype,"width",void 0),request.e([request.d()],r.prototype,"color",void 0),request.e([request.d()],r.prototype,"visible",void 0),request.e([request.d({readOnly:!0})],r.prototype,"strokeStyle",null),r=request.e([request.i("esri.views.overlay.LineOverlayItem")],r);const h$1={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},n$1=r;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let l=class extends request.p{constructor(t){super(t),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.backgroundColor="rgba(0, 0, 0, 0.6)",this.textColor="white",this.textShadowColor=[0,0,0],this.textShadowSize=1;}get position(){return [this.x,this.y]}set position(t){this._set("x",t[0]),this._set("y",t[1]);}get padding(){return .5*this.fontSize}render(){return t("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",backgroundColor:this.backgroundColor,color:this.textColor,padding:this.padding+"px",borderRadius:this.padding+"px",textShadow:`0 0 ${this.textShadowSize}px rgb(${this.textShadowColor[0]}, ${this.textShadowColor[1]}, ${this.textShadowColor[2]})`}},[this.text])}renderCanvas(t){if(!this.visible)return;const e=t.font.replace(/^(.*?)px/,"");t.font=`${this.fontSize}px ${e}`;const o=this.padding,i=this.padding,r=t.measureText(this.text).width,s=this.fontSize,l=h[this.anchor];t.textAlign="center",t.textBaseline="middle";const n=r+2*o,a=s+2*o,x=this.x+l.x*n,c=this.y+l.y*a;this.roundedRect(t,x,c,n,a,i),t.fillStyle=this.backgroundColor,t.fill();const p=this.x+(l.x+.5)*n,d=this.y+(l.y+.5)*a;this._renderTextShadow(t,this.text,p,d),t.fillStyle=this.textColor,t.fillText(this.text,p,d);}_renderTextShadow(t,e,o,i){t.lineJoin="miter",t.fillStyle=`rgba(${this.textShadowColor[0]}, ${this.textShadowColor[1]}, ${this.textShadowColor[2]}, ${1/n.length})`;const r=this.textShadowSize;for(const[s,l]of n)t.fillText(e,o+r*s,i+r*l);}roundedRect(t,e,o,i,r,s){t.beginPath(),t.moveTo(e,o+s),t.arcTo(e,o,e+s,o,s),t.lineTo(e+i-s,o),t.arcTo(e+i,o,e+i,o+s,s),t.lineTo(e+i,o+r-s),t.arcTo(e+i,o+r,e+i-s,o+r,s),t.lineTo(e+s,o+r),t.arcTo(e,o+r,e,o+r-s,s),t.closePath();}_cssClasses(){const t={"esri-text-overlay-item":!0};for(const e in s)t[s[e]]=this.anchor===e;return t}};request.e([request.d()],l.prototype,"x",void 0),request.e([request.d()],l.prototype,"y",void 0),request.e([request.d()],l.prototype,"position",null),request.e([request.d()],l.prototype,"text",void 0),request.e([request.d()],l.prototype,"fontSize",void 0),request.e([request.d()],l.prototype,"anchor",void 0),request.e([request.d()],l.prototype,"visible",void 0),request.e([request.d()],l.prototype,"padding",null),l=request.e([request.i("esri.views.overlay.TextOverlayItem")],l);const h={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},n=[];{const t=16;for(let e=0;e<360;e+=360/t)n.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)]);}const a=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class v extends LineVisualElement.t{constructor(e){super(e.view),this._handles=new request.u,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text=null,this._fontSize=14,this._distance=25,this._anchor="right",this.applyProps(e);}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this._updateLabelPosition();}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text);}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize);}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this._updateLabelPosition());}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this._updateLabelPosition());}overlaps(t){return !!this.attached&&(this.textItem.visible&&t.textItem.visible&&this.view.overlay.overlaps(this._textItem,t.textItem))}_updateLabelPosition(){if(this.attached){if(this._showText=!1,this._showCallout=!1,request.r(this.geometry)&&this.view._stage)switch(this.geometry.type){case"point":if(this._computeLabelPositionFromPoint(this.geometry.point,k$1)){if(this.geometry.callout){const t=this.view.state.camera,e=this.geometry.callout.distance;vec2.s(R$1,R$1,[0,this.geometry.callout.offset]),t.renderToScreen(R$1,k$1),vec2.r(j,0,1),vec2.l(j,j,e*t.pixelRatio),vec2.s(j,j,R$1),t.renderToScreen(j,z),this._showCallout=this._updatePosition(k$1,z);}else this._textItem.position=[k$1[0],k$1[1]],this._textItem.anchor="center";this._showText=!0;}break;case"corner":this._computeLabelPositionFromCorner(this.geometry,this._distance,k$1,z)&&(this._showCallout=this._updatePosition(k$1,z),this._showText=!0);break;case"segment":this._computeLabelPositionFromSegment(this.geometry,this._distance,this._anchor,k$1,z)&&(this._showText=!0,this._showCallout=this._updatePosition(k$1,z));}this.updateVisibility(this.visible);}}_computeLabelPositionFromPoint(t,e){const s=this.view.state.camera;return s.projectToRenderScreen(t,R$1),!(R$1[2]<0||R$1[2]>1)&&(s.renderToScreen(R$1,e),!0)}_computeLabelPositionFromCorner(t,e,s,i){if(!t)return !1;const o=this.view.state.camera;return w(t.left,1,o,P),vec2.x(P,P),w(t.right,0,o,T),vec2.s(j,P,T),vec2.x(j,j),vec2.v(j,j),o.projectToRenderScreen(t.left.endRenderSpace,R$1),!(R$1[2]<0||R$1[2]>1)&&(o.renderToScreen(R$1,s),vec2.l(j,j,e*o.pixelRatio),vec2.s(j,j,R$1),o.renderToScreen(j,i),!0)}_computeLabelPositionFromSegment(t,e,s,i,o){if(!t)return !1;const r=t.segment,l=this.view.state.camera;k$2(r.startRenderSpace,r.endRenderSpace,P,l),vec2.r(j,-P[1],P[0]);let _=!1;switch(s){case"top":_=j[1]<0;break;case"bottom":_=j[1]>0;break;case"left":_=j[0]>0;break;case"right":_=j[0]<0;}if(_&&vec2.x(j,j),0===vec2.b(j))switch(s){case"top":j[1]=1;break;case"bottom":j[1]=-1;break;case"left":j[0]=-1;break;case"right":j[0]=1;}return r.eval(O[t.sampleLocation],L),l.projectToRenderScreen(L,R$1),!(R$1[2]<0||R$1[2]>1)&&(l.renderToScreen(R$1,i),vec2.l(j,j,e*l.pixelRatio),vec2.s(j,j,R$1),l.renderToScreen(j,o),!0)}_updatePosition(t,e){if(e){const s=e[0]-t[0],i=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(s)>Math.abs(i)?s>0?"left":"right":i>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){this._textItem=new a({visible:!0}),this._textItem.text=request.e$2(this._text),this._textItem.fontSize=this._fontSize,this._calloutItem=new n$1({visible:!0,width:2}),this._updateLabelPosition(),this.view.overlay.items.addMany([this._textItem,this._calloutItem]),this._handles.add(this.view.state.watch("camera",(()=>this._updateLabelPosition())));}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll();}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t;}}function w(t,e,s,i){t.eval(e,y,S),mathUtils.u(I,y,S),s.projectToRenderScreen(y,C$1),s.projectToRenderScreen(I,M),vec2.o(i,V,F),vec2.v(i,i);}function g$1(t){switch(t){case"top":return "bottom";case"right":return "left";case"bottom":return "top";case"left":return "right"}}const y=common.n(),I=common.n(),S=common.n(),P=screenUtils$1.s(),T=screenUtils$1.s(),j=screenUtils$1.s(),L=common.n(),R$1=screenUtils$1.x(),k$1=screenUtils$1.i(),z=screenUtils$1.i(),C$1=screenUtils$1.x(),F=C$1,M=screenUtils$1.x(),V=M,O={start:0,center:.5,end:1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class _{constructor(e=common.n(),t=common.n()){this.startRenderSpace=e,this.endRenderSpace=t,this.type="euclidean";}eval(r,i,n){return mathUtils.y(i,this.startRenderSpace,this.endRenderSpace,r),n&&(mathUtils.c(n,this.endRenderSpace,this.startRenderSpace),mathUtils.j$1(n,n)),i}createRenderGeometry(e,s){const r=[],i=[],n=(s,n)=>{const c=u;mathUtils.c(c,s,e),r.push([c[0],c[1],c[2]]),i.push([n[0],n[1],n[2]]);},c=s.worldUpAtPosition(this.eval(.5,m),vectorStacks.c.get());return n(this.startRenderSpace,c),n(this.endRenderSpace,c),{points:r,normals:i}}}class f{constructor(e,t,s){this.startRenderSpace=e,this.endRenderSpace=t,this.renderSpatialReference=s,this.type="geodesic",this._start=common.n(),this._end=common.n(),this._pcpf=unitUtils.O$1(s),this._project=projection.tn(s,this._pcpf),this._projectIn(e,this._start),this._projectIn(t,this._end);}_projectIn(e,t){this._project?projection.gn(e,this.renderSpatialReference,t,this._pcpf):mathUtils.r(t,e);}eval(r,n,c){if(this._project)if(c){const e=u;mathUtils$1.j(this._start,this._end,r,n,e),mathUtils.u(R,n,e),projection.gn(n,this._pcpf,n,this.renderSpatialReference),projection.gn(R,this._pcpf,R,this.renderSpatialReference),mathUtils.c(c,R,n),mathUtils.j$1(c,c);}else mathUtils$1.q(this._start,this._end,r,n),projection.gn(n,this._pcpf,n,this.renderSpatialReference);else mathUtils.y(n,this._start,this._end,r),c&&(mathUtils.c(c,this._end,this._start),mathUtils.j$1(c,c));return n}createRenderGeometry(e,s){const r=[],i=[],n=(s,n)=>{const c=R;mathUtils.c(c,s,e),r.push([c[0],c[1],c[2]]),i.push([n[0],n[1],n[2]]);},c=128+1&-2;for(let t=0;t<c;++t){const e=t/(c-1),r=m,i=u;this.eval(e,r),s.worldUpAtPosition(r,i),n(r,i);}return {points:r,normals:i}}}const m=common.n(),u=common.n(),R=common.n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(i,s){this.measure=unitUtils.M(s),this.value=i,this.unit=s;}get isBaseUnit(){return unitUtils.C(this.unit)}toUnit(t){return new e(unitUtils.D(this.value,this.unit,t),t)}toBaseUnit(){return this.toUnit(unitUtils.P(this.unit))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(e,r){if(mathUtils.o(r,0,0,0),e.length>0){for(let n=0;n<e.length;++n)mathUtils.u(r,r,e[n]);mathUtils.d(r,r,1/e.length);}}function k(e,r,n,o){o.projectToRenderScreen(e,C),o.projectToRenderScreen(r,H),vec2.o(n,U,x),vec2.v(n,n);}const C=screenUtils$1.x(),x=C,H=screenUtils$1.x(),U=H;

exports._ = _;
exports.b = b;
exports.e = e;
exports.e$1 = e$2;
exports.f = f;
exports.f$1 = f$1;
exports.g = g$2;
exports.g$1 = g;
exports.g$2 = g$3;
exports.g$3 = g$1;
exports.h = h$2;
exports.k = k;
exports.l = l$1;
exports.s = s$1;
exports.t = t$1;
exports.v = v;
