import{aE as t,e as s,d as i,i as e,r as h,u as o,k as r,O as a,ai as p,A as n}from"./p-e58503d5.js";import{v as c,m as l,b as m,c as d,p as f}from"./p-b79fcce3.js";import{h as u}from"./p-54330161.js";import{u as j}from"./p-ea916a39.js";import{y as b,S as v,m as w}from"./p-8bc9b36a.js";import{s as G,i as _,a as y,m as g}from"./p-dd537345.js";import S from"./p-a76c7be2.js";import{q as M}from"./p-90239435.js";import{h as k}from"./p-6c3025fa.js";import"./p-53bb6ab4.js";import"./p-93765525.js";import"./p-765e6c28.js";import"./p-a9a30646.js";import"./p-8747982c.js";import"./p-c048b814.js";import"./p-2f398ed1.js";import"./p-d3105731.js";import"./p-7a658388.js";import"./p-e273719b.js";import"./p-74de0937.js";import"./p-fb38a9d0.js";import"./p-f94762ac.js";import"./p-8a919d07.js";import"./p-efbca0ca.js";import"./p-5f05b534.js";import"./p-7d081d01.js";import"./p-7731c620.js";import"./p-5d962998.js";import"./p-3e39c093.js";import"./p-a24f7752.js";import"./p-ccdb8e80.js";import"./p-c6970847.js";import"./p-a6c8fb32.js";import"./p-6b2eb7a7.js";import"./p-01e5a461.js";import"./p-612a2c14.js";import"./p-d443df87.js";import"./p-7ca40eac.js";import"./p-9087b4d3.js";import"./p-c1cd5521.js";import"./p-ca4492df.js";import"./p-9d34911e.js";import"./p-182bb5be.js";import"./p-db87794e.js";import"./p-2db4840f.js";import"./p-bba8b671.js";import"./p-5e833dfc.js";import"./p-7a5bfd29.js";import"./p-a131049b.js";import"./p-a2324023.js";import"./p-dc852195.js";import"./p-ff2962f5.js";import"./p-da9e7ba9.js";import"./p-a8f0aa27.js";import"./p-4a96de15.js";import"./p-5032dfbd.js";import"./p-a87cccba.js";import"./p-dae095dd.js";import"./p-0e784e4d.js";import"./p-dbdf15fc.js";import"./p-e0d9ff4c.js";import"./p-08e5f531.js";import"./p-dfc6337f.js";import"./p-9f1c2d50.js";import"./p-889f7a78.js";import"./p-1f81b35d.js";import"./p-81b9df84.js";import"./p-5ce39624.js";import"./p-e9bae5e9.js";import"./p-b0565d49.js";import"./p-51a17e75.js";import"./p-d208934e.js";import"./p-afac6fb2.js";import"./p-480e5606.js";import"./p-22c9f19c.js";import"./p-c096b5df.js";import"./p-da33e926.js";import"./p-4a6dc5e4.js";import"./p-6a92ecb9.js";import"./p-1ab449fc.js";import"./p-0edb3309.js";import"./p-e8160b60.js";import"./p-2e8ad983.js";import"./p-e3270d48.js";import"./p-e44bd0a6.js";import"./p-e654504b.js";import"./p-0eb619a6.js";import"./p-fe68aab5.js";import"./p-de86b3c9.js";import"./p-37d3434c.js";import"./p-120b7410.js";import"./p-b1eff69d.js";import"./p-612de336.js";import"./p-91fe06d4.js";import"./p-ab0e9273.js";import"./p-15a9486c.js";import"./p-2ae44317.js";import"./p-9f58a277.js";import"./p-9e860e7b.js";import"./p-f3659a34.js";import"./p-ca657fcf.js";import"./p-b312c1fd.js";import"./p-b8beb0d3.js";import"./p-2a99994a.js";import"./p-7ee74a78.js";import"./p-e6fe5d89.js";import"./p-c93d2280.js";import"./p-fea9512d.js";import"./p-b6fa3228.js";import"./p-22ccef7d.js";import"./p-6f4b0bc8.js";import"./p-a184d75f.js";import"./p-f70b836b.js";import"./p-df35b79d.js";import"./p-746a9d8f.js";import"./p-f16641e7.js";function R(t){let s=0,i=0;const e=t.length;let h,o=t[i];for(i=0;i<e-1;i++)h=t[i+1],s+=(h[0]-o[0])*(h[1]+o[1]),o=h;return s>=0}function x(t,s,i,e){const h=[];for(const o of t){const t=o.slice(0);h.push(t);const r=i*(o[0]-e.x)+s*(o[1]-e.y)+e.y;t[0]=s*(o[0]-e.x)-i*(o[1]-e.y)+e.x,t[1]=r}return h}function O(s,i,e){const h=s.spatialReference,o=i*Math.PI/180,r=Math.cos(o),a=Math.sin(o);var p,n;if("xmin"in s&&(e=null!=(p=e)?p:s.center,s=new c({spatialReference:h,rings:[[[s.xmin,s.ymin],[s.xmin,s.ymax],[s.xmax,s.ymax],[s.xmax,s.ymin],[s.xmin,s.ymin]]]})),"paths"in s){var d;e=null!=(d=e)?d:s.extent.center;const t=[];for(const i of s.paths)t.push(x(i,r,a,e));return new l({spatialReference:h,paths:t})}if("rings"in s){var f;e=null!=(f=e)?f:s.extent.center;const t=[];for(const i of s.rings){const s=R(i),h=x(i,r,a,e);R(h)!==s&&h.reverse(),t.push(h)}return new c({spatialReference:h,rings:t})}if("x"in s){var u;e=null!=(u=e)?u:s;const i=new t({x:r*(s.x-e.x)-a*(s.y-e.y)+e.x,y:a*(s.x-e.x)+r*(s.y-e.y)+e.y,spatialReference:h});return null!=s.z&&(i.z=s.z),null!=s.m&&(i.m=s.m),i}return"points"in s?(e=null!=(n=e)?n:s.extent.center,new m({points:x(s.points,r,a,e),spatialReference:h})):null}class C{constructor(t,s,i,e){this.graphics=t,this.mover=s,this.dx=i,this.dy=e,this.type="move-start"}}class E{constructor(t,s,i,e){this.graphics=t,this.mover=s,this.dx=i,this.dy=e,this.type="move"}}class z{constructor(t,s,i,e){this.graphics=t,this.mover=s,this.dx=i,this.dy=e,this.type="move-stop"}}class X{constructor(t,s,i){this.graphics=t,this.mover=s,this.angle=i,this.type="rotate-start"}}class Y{constructor(t,s,i){this.graphics=t,this.mover=s,this.angle=i,this.type="rotate"}}class I{constructor(t,s,i){this.graphics=t,this.mover=s,this.angle=i,this.type="rotate-stop"}}class A{constructor(t,s,i,e){this.graphics=t,this.mover=s,this.xScale=i,this.yScale=e,this.type="scale-start"}}class B{constructor(t,s,i,e){this.graphics=t,this.mover=s,this.xScale=i,this.yScale=e,this.type="scale"}}class L{constructor(t,s,i,e){this.graphics=t,this.mover=s,this.xScale=i,this.yScale=e,this.type="scale-stop"}}const N=k.transformGraphics,P={centerIndicator:new b({style:"cross",size:N.center.size,color:N.center.color}),fill:{default:new v({color:N.fill.color,outline:{color:N.fill.outlineColor,join:"round",width:1}}),active:new v({color:N.fill.stagedColor,outline:{color:N.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new b({style:"square",size:N.vertex.size,color:N.vertex.color,outline:{color:N.vertex.outlineColor,width:1}}),hover:new b({style:"square",size:N.vertex.hoverSize,color:N.vertex.hoverColor,outline:{color:N.vertex.hoverOutlineColor,width:1}})},rotator:{default:new b({style:"circle",size:N.vertex.size,color:N.vertex.color,outline:{color:N.vertex.outlineColor,width:1}}),hover:new b({style:"circle",size:N.vertex.hoverSize,color:N.vertex.hoverColor,outline:{color:N.vertex.hoverOutlineColor,width:1}})},rotatorLine:new w({color:N.line.color,width:1})};let q=class extends h.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._handles=new o,this._mover=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.centerGraphic=null,this.backgroundGraphic=null,this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.handleGraphics=[],this.layer=null,this.preserveAspectRatio=!1,this.rotateGraphic=null,this.showCenterGraphic=!0,this.view=null,this._getBounds=(()=>{const t=j();return(s,i)=>{s[0]=Number.POSITIVE_INFINITY,s[1]=Number.POSITIVE_INFINITY,s[2]=Number.NEGATIVE_INFINITY,s[3]=Number.NEGATIVE_INFINITY;for(const e of i){if(!e)continue;let i,h,o,r;if("point"===e.type)i=o=e.x,h=r=e.y;else if("multipoint"===e.type){const s=d(e);[i,h,o,r]=f(t,[s])}else if("extent"===e.type)[i,h,o,r]=[e.xmin,e.ymin,e.xmax,e.ymax];else{const s=d(e);[i,h,o,r]=f(t,s)}s[0]=Math.min(i,s[0]),s[1]=Math.min(h,s[1]),s[2]=Math.max(o,s[2]),s[3]=Math.max(r,s[3])}return s}})()}initialize(){this._setup(),this._handles.add([r(this,"view.ready",(()=>{const{layer:t,view:s}=this;M(s,t)})),a(this,"preserveAspectRatio",(()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics())})),a(this,"view.scale",(()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()})),a(this,"graphics",(()=>this.refresh())),a(this,"layer",((t,s)=>{s&&this._resetGraphics(s),this.refresh()}))])}destroy(){this._reset(),this._handles=p(this._handles)}get state(){const t=!!this.get("view.ready"),s=!(!this.get("graphics.length")||!this.get("layer"));return t&&s?"active":t?"ready":"disabled"}set symbols(t){const{centerIndicator:s=P.centerIndicator,fill:i=P.fill,handles:e=P.handles,rotator:h=P.rotator,rotatorLine:o=P.rotatorLine}=t||{};this._set("symbols",{centerIndicator:s,fill:i,handles:e,rotator:h,rotatorLine:o})}isUIGraphic(t){let s=[];return this.handleGraphics.length&&(s=s.concat(this.handleGraphics)),this.backgroundGraphic&&s.push(this.backgroundGraphic),this.centerGraphic&&s.push(this.centerGraphic),this.rotateGraphic&&s.push(this.rotateGraphic),this._rotateLineGraphic&&s.push(this._rotateLineGraphic),s.length&&s.includes(t)}move(t,s){if(this._mover&&this.graphics.length){for(const i of this.graphics){const e=G(i.geometry,t,s,this.view);i.geometry=e}this.refresh(),this._emitMoveStopEvent(t,s,null)}}scale(t,s){if(this._mover&&this.graphics.length){for(const i of this.graphics){const e=_(i.geometry,t,s);i.geometry=e}this.refresh(),this._emitScaleStopEvent(t,s,null)}}rotate(s,i){if(this._mover&&this.graphics.length){i||(i=new t(this.handleGraphics[1].geometry.x,this.handleGraphics[3].geometry.y,this.view.spatialReference));for(const t of this.graphics){const e=O(t.geometry,s,i);t.geometry=e}this.refresh(),this._emitRotateStopEvent(s,null)}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){const s=t||this.layer;s&&(s.removeMany(this.handleGraphics),s.remove(this.backgroundGraphic),s.remove(this.centerGraphic),s.remove(this.rotateGraphic),s.remove(this._rotateLineGraphic));for(const t of this.handleGraphics)t.destroy();this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this.handleGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&t.push(this.rotateGraphic),this.showCenterGraphic&&t.push(this.centerGraphic),this._mover=new S({enableMoveAllGraphics:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:t=>this._onGraphicClickCallback(t),onGraphicMoveStart:t=>this._onGraphicMoveStartCallback(t),onGraphicMove:t=>this._onGraphicMoveCallback(t),onGraphicMoveStop:t=>this._onGraphicMoveStopCallback(t),onGraphicPointerOver:t=>this._onGraphicPointerOverCallback(t),onGraphicPointerOut:t=>this._onGraphicPointerOutCallback(t)}})}_getStartInfo(t){const[s,i,e,h]=this._getBoxBounds(j()),o=Math.abs(e-s),r=Math.abs(h-i),a=(e+s)/2,p=(h+i)/2,{x:n,y:c}=t.geometry;return{width:o,height:r,centerX:a,centerY:p,startX:n,startY:c,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}}_getGraphicInfos(){return this.graphics.map((t=>this._getGraphicInfo(t)))}_getGraphicInfo(t){const s=t.geometry,[i,e,h,o]=this._getBounds(j(),[s]);return{width:Math.abs(h-i),height:Math.abs(o-e),centerX:(h+i)/2,centerY:(o+e)/2,geometry:s}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:s,_xScale:i,_yScale:e,backgroundGraphic:h,handleGraphics:o,rotateGraphic:r,symbols:a}=this,p=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),h.symbol=a.fill.active,this._startInfo=this._getStartInfo(p),p===r?(this.view.cursor="grabbing",this._emitRotateStartEvent(s,p)):o.includes(p)?(this._activeHandleGraphic=p,this._emitScaleStartEvent(i,e,p)):this._emitMoveStartEvent(t.dx,t.dy,p)}_onGraphicMoveCallback(t){const s=t.graphic;if(this._startInfo)if(this.handleGraphics.includes(s))this._scaleGraphic(s),this._emitScaleEvent(this._xScale,this._yScale,s);else if(s===this.rotateGraphic)this._rotateGraphic(s),this._emitRotateEvent(this._angleOfRotation,s);else{const i=t.dx,e=t.dy;this._totalDx+=i,this._totalDy+=e,this._moveGraphic(s,i,e),this._emitMoveEvent(i,e,s)}}_onGraphicMoveStopCallback(t){const s=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:e,_totalDy:h,_xScale:o,_yScale:r,handleGraphics:a,rotateGraphic:p}=this;this.refresh(),s===p?(this.view.cursor="pointer",this._emitRotateStopEvent(i,s)):a.includes(s)?this._emitScaleStopEvent(o,r,s):this._emitMoveStopEvent(e,h,s)}_onGraphicPointerOverCallback(t){const{backgroundGraphic:s,handleGraphics:i,graphics:e,rotateGraphic:h,symbols:o,view:r}=this,a=t.graphic;if(a===h)return h.symbol=o.rotator.hover,void(r.cursor="pointer");if(e.includes(a)||a===s)return void(r.cursor="move");if(!i.includes(a))return void(r.cursor="pointer");t.graphic.symbol=o.handles.hover;const p=r.rotation;let n,c=t.index;switch(c<8&&(p>=0&&p<45?c%=8:c=p>=45&&p<90?(c+1)%8:p>=90&&p<135?(c+2)%8:p>=135&&p<180?(c+3)%8:p>=180&&p<225?(c+4)%8:p>=225&&p<270?(c+5)%8:p>=270&&p<315?(c+6)%8:(c+7)%8),c){case 0:case 4:n="nwse-resize";break;case 1:case 5:n="ns-resize";break;case 2:case 6:n="nesw-resize";break;case 3:case 7:n="ew-resize";break;default:n="pointer"}r.cursor=n}_onGraphicPointerOutCallback(t){const{handleGraphics:s,rotateGraphic:i,symbols:e,view:h}=this;t.graphic===i?i.symbol=e.rotator.default:s.includes(t.graphic)&&(t.graphic.symbol=e.handles.default),h.cursor="default"}_scaleGraphic(s){const{_startInfo:i,handleGraphics:e,preserveAspectRatio:h,view:o}=this,{centerX:r,centerY:a,startX:p,startY:n}=i,{resolution:c,transform:l}=o.state,m=e.indexOf(s);1!==m&&5!==m||this._updateX(s,r),3!==m&&7!==m||this._updateY(s,a);const{x:d,y:f}=s.geometry,u=l[0]*d+l[2]*f+l[4],j=l[1]*d+l[3]*f+l[5],b=i.graphicInfos.map((t=>t.geometry));if(h){this._xScale=this._yScale=y(l[0]*r+l[2]*a+l[4],l[1]*r+l[3]*a+l[5],l[0]*p+l[2]*n+l[4],l[1]*p+l[3]*n+l[5],u,j);for(const t of b){const s=b.indexOf(t);this.graphics[s].geometry=_(t,this._xScale,this._yScale,[r,a])}this._updateBackgroundGraphic()}else{const{width:s,height:e}=i;let h=d-p,l=n-f;if(1===m||5===m?h=0:3!==m&&7!==m||(l=0),0===h&&0===l)return;const u=e+(n<a?l:-1*l),j=r+h/2,v=a+l/2;this._xScale=(s+(p>r?h:-1*h))/s||1,this._yScale=u/e||1,1===m||5===m?this._xScale=1:3!==m&&7!==m||(this._yScale=1);const w=(j-r)/c,y=(v-a)/c,g=_(i.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=G(g,w,y,o,!0);const{centerX:S,centerY:M}=this._getGraphicInfo(this.backgroundGraphic),k=(S-r)/c,R=-1*(M-a)/c;for(const t of b){const s=b.indexOf(t),i=_(t,this._xScale,this._yScale,[r,a]);this.graphics[s].geometry=G(i,k,R,o,!0)}this.centerGraphic.geometry=new t(S,M,o.spatialReference)}}_rotateGraphic(s){const{centerX:i,centerY:e,startX:h,startY:o,box:r,rotate:a}=this._startInfo,p=new t(h,o,this.view.spatialReference),n=new t(i,e,this.view.spatialReference);this._angleOfRotation=g(p,s.geometry,n);const c=this._startInfo.graphicInfos.map((t=>t.geometry));for(const t of c){const s=c.indexOf(t),i=O(t,this._angleOfRotation,n);this.graphics[s].geometry=i}this.backgroundGraphic.geometry=O(r,this._angleOfRotation,n),this.rotateGraphic.geometry=O(a,this._angleOfRotation,n)}_moveGraphic(t,s,i){if(this.graphics.includes(t)){this.backgroundGraphic.geometry=G(this.backgroundGraphic.geometry,s,i,this.view);for(const e of this.graphics)e!==t&&(e.geometry=G(e.geometry,s,i,this.view))}else t===this.centerGraphic&&(this.backgroundGraphic.geometry=G(this.backgroundGraphic.geometry,s,i,this.view));if(t===this.backgroundGraphic||t===this.centerGraphic)for(const t of this.graphics)t.geometry=G(t.geometry,s,i,this.view)}_setupGraphics(){const{_graphicAttributes:t,symbols:s}=this;this._set("centerGraphic",new u(null,s.centerIndicator,t)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new u(null,s.fill.default,t)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new u(null,s.rotatorLine,t),this._set("rotateGraphic",new u(null,s.rotator.default,t)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(let i=0;i<8;i++)this.handleGraphics.push(new u(null,s.handles.default,t));this.enableScaling&&this.layer.addMany(this.handleGraphics)}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach((t=>t.visible=!1))}_updateHandleGraphics(){const t=this._getCoordinates(!0);this.handleGraphics.forEach(((s,i)=>{const[e,h]=t[i];this._updateXY(s,e,h)}))}_updateBackgroundGraphic(){const t=this._getCoordinates();this.backgroundGraphic.geometry=new c({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[s,i,e,h]=this._getBoxBounds(j());this.centerGraphic.geometry=new t((e+s)/2,(h+i)/2,this.view.spatialReference)}_updateRotateGraphic(){if(!this.handleGraphics.length)return;const{x:s,y:i}=this.handleGraphics[1].geometry;this.rotateGraphic.geometry=new t(s,i+this.view.state.resolution*this._rotateGraphicOffset,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this.handleGraphics.length||!this.rotateGraphic||!this.rotateGraphic.geometry)return;const t=this.handleGraphics[1].geometry,s=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new l({paths:[[t.x,t.y],[s.x,s.y]],spatialReference:this.view.spatialReference})}_updateXY(s,i,e){s.geometry=new t(i,e,this.view.spatialReference)}_updateX(s,i){s.geometry=new t(i,s.geometry.y,this.view.spatialReference)}_updateY(s,i){s.geometry=new t(s.geometry.x,i,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some((t=>t&&n(t.geometry)&&"extent"===t.geometry.type))}_getBoxBounds(t){const s=this.graphics.map((t=>t.geometry));return this._getBounds(t,s)}_getCoordinates(t){const[s,i,e,h]=this._getBoxBounds(j());if(t){const t=(s+e)/2,o=(h+i)/2;return[[s,h],[t,h],[e,h],[e,o],[e,i],[t,i],[s,i],[s,o]]}return[[s,h],[e,h],[e,i],[s,i]]}_emitMoveStartEvent(t,s,i){const e=new C(this.graphics,i,t,s);this.emit("move-start",e),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(e)}_emitMoveEvent(t,s,i){const e=new E(this.graphics,i,t,s);this.emit("move",e),this.callbacks.onMove&&this.callbacks.onMove(e)}_emitMoveStopEvent(t,s,i){const e=new z(this.graphics,i,t,s);this.emit("move-stop",e),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(e)}_emitRotateStartEvent(t,s){const i=new X(this.graphics,s,t);this.emit("rotate-start",i),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(i)}_emitRotateEvent(t,s){const i=new Y(this.graphics,s,t);this.emit("rotate",i),this.callbacks.onRotate&&this.callbacks.onRotate(i)}_emitRotateStopEvent(t,s){const i=new I(this.graphics,s,t);this.emit("rotate-stop",i),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(i)}_emitScaleStartEvent(t,s,i){const e=new A(this.graphics,i,t,s);this.emit("scale-start",e),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(e)}_emitScaleEvent(t,s,i){const e=new B(this.graphics,i,t,s);this.emit("scale",e),this.callbacks.onScale&&this.callbacks.onScale(e)}_emitScaleStopEvent(t,s,i){const e=new L(this.graphics,i,t,s);this.emit("scale-stop",e),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(e)}};s([i()],q.prototype,"_rotateLineGraphic",void 0),s([i({readOnly:!0})],q.prototype,"type",void 0),s([i()],q.prototype,"callbacks",void 0),s([i({readOnly:!0})],q.prototype,"centerGraphic",void 0),s([i({readOnly:!0})],q.prototype,"backgroundGraphic",void 0),s([i()],q.prototype,"enableMovement",void 0),s([i()],q.prototype,"enableRotation",void 0),s([i()],q.prototype,"enableScaling",void 0),s([i()],q.prototype,"graphics",void 0),s([i({readOnly:!0})],q.prototype,"handleGraphics",void 0),s([i()],q.prototype,"layer",void 0),s([i()],q.prototype,"preserveAspectRatio",void 0),s([i({readOnly:!0})],q.prototype,"rotateGraphic",void 0),s([i()],q.prototype,"showCenterGraphic",void 0),s([i({readOnly:!0})],q.prototype,"state",null),s([i({value:P})],q.prototype,"symbols",null),s([i()],q.prototype,"view",void 0),q=s([e("esri.views.draw.support.Box")],q);const D=q;export default D;