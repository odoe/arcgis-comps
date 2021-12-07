import { K as s } from './messageBundle-f75b4090.js';
import { C as n$1 } from './DefaultUI-022795b8.js';
import { r as r$1 } from './EffectList-649b8e46.js';
import { a } from './DisplayObject-d9d14391.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=s("mapview-transitions-duration");class n extends a{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectList=null;}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender();}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e));}get computedEffects(){var e,t;return null!=(e=null==(t=this._effectList)?void 0:t.effects)?e:null}get effect(){var e,t;return null!=(e=null==(t=this._effectList)?void 0:t.effect)?e:""}set effect(e){(this._effectList||e)&&(this._effectList||(this._effectList=new r$1(r)),this._effectList.effect=e,this.requestRender());}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectList&&(this._effectList.transitionStep(e,t),this._effectList.transitioning&&this.requestRender());}doRender(e){const t=this.createRenderParams(e);this.renderChildren(t);}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;const s=e.parent;return s&&s!==this&&s.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0;}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1);}_createTransforms(){return {dvs:n$1()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e;}onDetach(){super.onDetach();for(const e of this.children)e.stage=null;}renderChildren(e){for(const t of this.children)t.beforeRender(e);for(const t of this.children)t.processRender(e);for(const t of this.children)t.afterRender(e);}createRenderParams(e){return {...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}

export { n };
