import { bs as s, ak as n$1, t, B, dw as n$2 } from './MapView-ac75aae8.js';
import { r as r$2 } from './EffectList-bba3153e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$1=1/s("mapview-transitions-duration");class a extends n$1{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0;}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender();}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender());}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e.trashDisplayObject(this);}get transforms(){return this._getTransforms()}_getTransforms(){return t(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender());}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=B(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=B(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale);}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null);}remove(){var t;null==(t=this.parent)||t.removeChild(this);}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t);}requestRender(){this.stage&&this.stage.requestRender();}processDetach(){this.onDetach(),this.emit("detach");}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,s=this.computedOpacity;if(s===e)this.computedVisible=this.visible;else {const i=t*r$1;this.computedOpacity=s>e?Math.max(e,s-i):Math.min(e,s+i),this.computedVisible=this.computedOpacity>0;const a=e===this.computedOpacity;this.inFadeTransition=!a,a||this.requestRender();}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible;}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender());}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=s("mapview-transitions-duration");class n extends a{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectList=null;}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender();}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e));}get computedEffects(){var e,t;return null!=(e=null==(t=this._effectList)?void 0:t.effects)?e:null}get effect(){var e,t;return null!=(e=null==(t=this._effectList)?void 0:t.effect)?e:""}set effect(e){(this._effectList||e)&&(this._effectList||(this._effectList=new r$2(r)),this._effectList.effect=e,this.requestRender());}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectList&&(this._effectList.transitionStep(e,t),this._effectList.transitioning&&this.requestRender());}doRender(e){const t=this.createRenderParams(e);this.renderChildren(t);}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;const s=e.parent;return s&&s!==this&&s.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0;}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1);}_createTransforms(){return {dvs:n$2()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e;}onDetach(){super.onDetach();for(const e of this.children)e.stage=null;}renderChildren(e){for(const t of this.children)t.beforeRender(e);for(const t of this.children)t.processRender(e);for(const t of this.children)t.afterRender(e);}createRenderParams(e){return {...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}

export { a, n };
