import{f as t,H as s,d as i,M as e,C as r,D as h,P as o}from"./p-01e5a461.js";import{l as n,o as a,q as l,F as c,r as u,s as d}from"./p-612a2c14.js";import{e as p,d as f,i as m,p as g,u as x,A as b,V as v}from"./p-e58503d5.js";import{x as y,s as w,i as $}from"./p-fb38a9d0.js";import{o as j,v as k,s as M,r as A,l as P,x as S,b as B}from"./p-e6fe5d89.js";import{o as _,u as z,d as C,y as R,c as E,a as q,r as F}from"./p-2f398ed1.js";import{n as I}from"./p-d3105731.js";import"./p-ccdb8e80.js";import{t as L}from"./p-c96ccdbf.js";import{t as O,b as X}from"./p-c93d2280.js";import{c as Y}from"./p-3c70d22f.js";import{j as N,q as U}from"./p-6ded4c02.js";const G={readOnly:!0,get(){const s="metric",{view:i}=this;if(!i)return s;const e=i.get("map.portalItem.portal");if(e)switch(e.get("user.units")||e.units){case s:return s;case"english":return"imperial"}return t(i.spatialReference)||s}};class T{constructor(t=null){this.spatialReference=t}get spatialReference(){return this._spatialReference}set spatialReference(t){t!==this._spatialReference&&(this._spatialReference=t,this._updateNormalizationFactors())}normalizeDistance(t){return t*this._metersPerDistanceUnit}normalizeElevation(t){return t*this._metersPerElevationUnit}normalizeArea(t){return t*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=s(this._spatialReference,1),this._metersPerElevationUnit=s(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}function V(t,s,i,e=2,r="abbr"){return n(t,s.toUnit(i).value,i,e,r)}function D(t,s,i=2,e="abbr"){if("length"!==s.measure)throw new Error("quantity is not a length");return u(t,s.value,s.unit,i,e)}function H(t,s,i=2,e="abbr"){if("length"!==s.measure)throw new Error("quantity is not a length");return d(t,s.value,s.unit,i,e)}function J(t,s,i=2,e="abbr"){if("length"!==s.measure)throw new Error("quantity is not a length");return l(t,s.value,s.unit,i,e)}function K(t,s,i=2,e="abbr"){if("length"!==s.measure)throw new Error("quantity is not a length");return c(t,s.value,s.unit,i,e)}function Q(t){if("angle"!==t.measure)throw new Error("quantity is not an angle");return a(t.value,t.unit)}function W(t,s){if(_(s,0,0,0),t.length>0){for(let i=0;i<t.length;++i)z(s,s,t[i]);C(s,s,1/t.length)}}const Z=y(),tt=Z,st=y(),it=st;let et=t=>({vnodeSelector:"",properties:void 0,children:void 0,text:t.toString(),domNode:null}),rt=(t,s,i)=>{for(let e=0,r=s.length;e<r;e++){let r=s[e];Array.isArray(r)?rt(t,r,i):null!=r&&!1!==r&&("string"==typeof r&&(r=et(r)),i.push(r))}};function ht(t,s,i){if(Array.isArray(s))i=s,s=void 0;else if(s&&("string"==typeof s||s.hasOwnProperty("vnodeSelector"))||i&&("string"==typeof i||i.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let e,r;return i&&1===i.length&&"string"==typeof i[0]?e=i[0]:i&&(r=[],rt(t,i,r),0===r.length&&(r=void 0)),{vnodeSelector:t,properties:s,children:r,text:""===e?void 0:e,domNode:null}}let ot=class extends g{constructor(t){super(t),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0}get startPosition(){return[this.startX,this.startY]}set startPosition(t){this._set("startX",t[0]),this._set("startY",t[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(t){this._set("endX",t[0]),this._set("endY",t[1])}get strokeStyle(){const t=this.color;return`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}get lineCap(){return"round"}render(){const{height:t,left:s,top:i,width:e,x1:r,x2:h,y1:o,y2:n}=this.calculateCoordinates(nt);return ht("div",{classes:{"esri-line-overlay-item":!0},styles:{left:s+"px",top:i+"px",width:e+"px",height:t+"px",visibility:this.visible?"visible":"hidden"}},[ht("svg",{width:e,height:t},[ht("line",{x1:r,y1:o,x2:h,y2:n,style:`stroke: ${this.strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this.lineCap};`})])])}renderCanvas(t){if(!this.visible)return;t.strokeStyle=this.strokeStyle,t.lineWidth=this.width,t.lineCap=this.lineCap;const s=this.calculateCoordinates(nt);t.beginPath(),t.moveTo(s.left+s.x1,s.top+s.y1),t.lineTo(s.left+s.x2,s.top+s.y2),t.stroke()}calculateCoordinates(t){const s=Math.min(this.startX,this.endX),i=Math.max(this.startX,this.endX),e=Math.min(this.startY,this.endY),r=Math.max(this.startY,this.endY),h=this.width;return t.left=s-h,t.top=e-h,t.width=i-s+2*h,t.height=Math.max(20,r-e+2*h),t.x1=this.startX-s+h,t.y1=this.startY-e+h,t.x2=this.endX-s+h,t.y2=this.endY-e+h,t}};p([f()],ot.prototype,"startX",void 0),p([f()],ot.prototype,"startY",void 0),p([f()],ot.prototype,"endX",void 0),p([f()],ot.prototype,"endY",void 0),p([f()],ot.prototype,"startPosition",null),p([f()],ot.prototype,"endPosition",null),p([f()],ot.prototype,"width",void 0),p([f()],ot.prototype,"color",void 0),p([f()],ot.prototype,"visible",void 0),p([f({readOnly:!0})],ot.prototype,"strokeStyle",null),ot=p([m("esri.views.overlay.LineOverlayItem")],ot);const nt={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},at=ot,lt={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let ct=class extends g{constructor(t){super(t),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.backgroundColor="rgba(0, 0, 0, 0.6)",this.textColor="white",this.textShadowColor=[0,0,0],this.textShadowSize=1}get position(){return[this.x,this.y]}set position(t){this._set("x",t[0]),this._set("y",t[1])}get padding(){return.5*this.fontSize}render(){return ht("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",backgroundColor:this.backgroundColor,color:this.textColor,padding:this.padding+"px",borderRadius:this.padding+"px",textShadow:`0 0 ${this.textShadowSize}px rgb(${this.textShadowColor[0]}, ${this.textShadowColor[1]}, ${this.textShadowColor[2]})`}},[this.text])}renderCanvas(t){if(!this.visible)return;const s=t.font.replace(/^(.*?)px/,"");t.font=`${this.fontSize}px ${s}`;const i=this.padding,e=this.padding,r=t.measureText(this.text).width,h=this.fontSize,o=ut[this.anchor];t.textAlign="center",t.textBaseline="middle";const n=r+2*i,a=h+2*i;this.roundedRect(t,this.x+o.x*n,this.y+o.y*a,n,a,e),t.fillStyle=this.backgroundColor,t.fill();const l=this.x+(o.x+.5)*n,c=this.y+(o.y+.5)*a;this._renderTextShadow(t,this.text,l,c),t.fillStyle=this.textColor,t.fillText(this.text,l,c)}_renderTextShadow(t,s,i,e){t.lineJoin="miter",t.fillStyle=`rgba(${this.textShadowColor[0]}, ${this.textShadowColor[1]}, ${this.textShadowColor[2]}, ${1/dt.length})`;const r=this.textShadowSize;for(const[h,o]of dt)t.fillText(s,i+r*h,e+r*o)}roundedRect(t,s,i,e,r,h){t.beginPath(),t.moveTo(s,i+h),t.arcTo(s,i,s+h,i,h),t.lineTo(s+e-h,i),t.arcTo(s+e,i,s+e,i+h,h),t.lineTo(s+e,i+r-h),t.arcTo(s+e,i+r,s+e-h,i+r,h),t.lineTo(s+h,i+r),t.arcTo(s,i+r,s,i+r-h,h),t.closePath()}_cssClasses(){const t={"esri-text-overlay-item":!0};for(const s in lt)t[lt[s]]=this.anchor===s;return t}};p([f()],ct.prototype,"x",void 0),p([f()],ct.prototype,"y",void 0),p([f()],ct.prototype,"position",null),p([f()],ct.prototype,"text",void 0),p([f()],ct.prototype,"fontSize",void 0),p([f()],ct.prototype,"anchor",void 0),p([f()],ct.prototype,"visible",void 0),p([f()],ct.prototype,"padding",null),ct=p([m("esri.views.overlay.TextOverlayItem")],ct);const ut={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},dt=[];{const t=16;for(let s=0;s<360;s+=360/t)dt.push([Math.cos(Math.PI*s/180),Math.sin(Math.PI*s/180)])}const pt=ct;class ft extends L{constructor(t){super(t.view),this._handles=new x,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text=null,this._fontSize=14,this._distance=25,this._anchor="right",this.applyProps(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this._updateLabelPosition()}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this._updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this._updateLabelPosition())}overlaps(t){return!!this.attached&&this.textItem.visible&&t.textItem.visible&&this.view.overlay.overlaps(this._textItem,t.textItem)}_updateLabelPosition(){if(this.attached){if(this._showText=!1,this._showCallout=!1,b(this.geometry)&&this.view._stage)switch(this.geometry.type){case"point":if(this._computeLabelPositionFromPoint(this.geometry.point,Mt)){if(this.geometry.callout){const t=this.view.state.camera,s=this.geometry.callout.distance;M(kt,kt,[0,this.geometry.callout.offset]),t.renderToScreen(kt,Mt),A($t,0,1),P($t,$t,s*t.pixelRatio),M($t,$t,kt),t.renderToScreen($t,At),this._showCallout=this._updatePosition(Mt,At)}else this._textItem.position=[Mt[0],Mt[1]],this._textItem.anchor="center";this._showText=!0}break;case"corner":this._computeLabelPositionFromCorner(this.geometry,this._distance,Mt,At)&&(this._showCallout=this._updatePosition(Mt,At),this._showText=!0);break;case"segment":this._computeLabelPositionFromSegment(this.geometry,this._distance,this._anchor,Mt,At)&&(this._showText=!0,this._showCallout=this._updatePosition(Mt,At))}this.updateVisibility(this.visible)}}_computeLabelPositionFromPoint(t,s){const i=this.view.state.camera;return i.projectToRenderScreen(t,kt),!(kt[2]<0||kt[2]>1||(i.renderToScreen(kt,s),0))}_computeLabelPositionFromCorner(t,s,i,e){if(!t)return!1;const r=this.view.state.camera;return mt(t.left,1,r,yt),S(yt,yt),mt(t.right,0,r,wt),M($t,yt,wt),S($t,$t),k($t,$t),r.projectToRenderScreen(t.left.endRenderSpace,kt),!(kt[2]<0||kt[2]>1||(r.renderToScreen(kt,i),P($t,$t,s*r.pixelRatio),M($t,$t,kt),r.renderToScreen($t,e),0))}_computeLabelPositionFromSegment(t,s,i,e,r){if(!t)return!1;const h=t.segment,o=this.view.state.camera;(function(t,s,i,e){e.projectToRenderScreen(t,Z),e.projectToRenderScreen(s,st),j(i,it,tt),k(i,i)})(h.startRenderSpace,h.endRenderSpace,yt,o),A($t,-yt[1],yt[0]);let n=!1;switch(i){case"top":n=$t[1]<0;break;case"bottom":n=$t[1]>0;break;case"left":n=$t[0]>0;break;case"right":n=$t[0]<0}if(n&&S($t,$t),0===B($t))switch(i){case"top":$t[1]=1;break;case"bottom":$t[1]=-1;break;case"left":$t[0]=-1;break;case"right":$t[0]=1}return h.eval(zt[t.sampleLocation],jt),o.projectToRenderScreen(jt,kt),!(kt[2]<0||kt[2]>1||(o.renderToScreen(kt,e),P($t,$t,s*o.pixelRatio),M($t,$t,kt),o.renderToScreen($t,r),0))}_updatePosition(t,s){if(s){const i=s[0]-t[0],e=s[1]-t[1];return this._textItem.position=[s[0],s[1]],this._textItem.anchor=Math.abs(i)>Math.abs(e)?i>0?"left":"right":e>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[s[0],s[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){this._textItem=new pt({visible:!0}),this._textItem.text=v(this._text),this._textItem.fontSize=this._fontSize,this._calloutItem=new at({visible:!0,width:2}),this._updateLabelPosition(),this.view.overlay.items.addMany([this._textItem,this._calloutItem]),this._handles.add(this.view.state.watch("camera",(()=>this._updateLabelPosition())))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function mt(t,s,i,e){t.eval(s,xt,vt),z(bt,xt,vt),i.projectToRenderScreen(xt,Pt),i.projectToRenderScreen(bt,Bt),j(e,_t,St),k(e,e)}function gt(t){switch(t){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const xt=I(),bt=I(),vt=I(),yt=w(),wt=w(),$t=w(),jt=I(),kt=y(),Mt=$(),At=$(),Pt=y(),St=Pt,Bt=y(),_t=Bt,zt={start:0,center:.5,end:1};class Ct{constructor(t=I(),s=I()){this.startRenderSpace=t,this.endRenderSpace=s,this.type="euclidean"}eval(t,s,i){return R(s,this.startRenderSpace,this.endRenderSpace,t),i&&(E(i,this.endRenderSpace,this.startRenderSpace),q(i,i)),s}createRenderGeometry(t,s){const i=[],e=[],r=(s,r)=>{const h=qt;E(h,s,t),i.push([h[0],h[1],h[2]]),e.push([r[0],r[1],r[2]])},h=s.worldUpAtPosition(this.eval(.5,Et),Y.get());return r(this.startRenderSpace,h),r(this.endRenderSpace,h),{points:i,normals:e}}}class Rt{constructor(t,s,e){this.startRenderSpace=t,this.endRenderSpace=s,this.renderSpatialReference=e,this.type="geodesic",this._start=I(),this._end=I(),this._pcpf=i(e),this._project=O(e,this._pcpf),this._projectIn(t,this._start),this._projectIn(s,this._end)}_projectIn(t,s){this._project?X(t,this.renderSpatialReference,s,this._pcpf):F(s,t)}eval(t,s,i){if(this._project)if(i){const e=qt;N(this._start,this._end,t,s,e),z(Ft,s,e),X(s,this._pcpf,s,this.renderSpatialReference),X(Ft,this._pcpf,Ft,this.renderSpatialReference),E(i,Ft,s),q(i,i)}else U(this._start,this._end,t,s),X(s,this._pcpf,s,this.renderSpatialReference);else R(s,this._start,this._end,t),i&&(E(i,this._end,this._start),q(i,i));return s}createRenderGeometry(t,s){const i=[],e=[],r=(s,r)=>{const h=Ft;E(h,s,t),i.push([h[0],h[1],h[2]]),e.push([r[0],r[1],r[2]])};for(let t=0;t<128;++t){const i=Et,e=qt;this.eval(t/127,i),s.worldUpAtPosition(i,e),r(i,e)}return{points:i,normals:e}}}const Et=I(),qt=I(),Ft=I();class It{constructor(t,s){this.measure=e(s),this.value=t,this.unit=s}get isBaseUnit(){return r(this.unit)}toUnit(t){return new It(h(this.value,this.unit,t),t)}toBaseUnit(){return this.toUnit(o(this.unit))}}function Lt(t,s){if(_(s,0,0,0),t.length>0){for(let i=0;i<t.length;++i)z(s,s,t[i]);C(s,s,1/t.length)}}function Ot(t,s,i,e){e.projectToRenderScreen(t,Xt),e.projectToRenderScreen(s,Nt),j(i,Ut,Yt),k(i,i)}const Xt=y(),Yt=Xt,Nt=y(),Ut=Nt;export{Ct as _,Lt as a,G as b,Q as c,K as d,It as e,Rt as f,W as g,J as h,D as i,gt as j,Ot as k,V as l,H as s,T as t,ft as v}