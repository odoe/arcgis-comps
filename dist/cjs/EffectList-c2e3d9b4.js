'use strict';

const request = require('./MapView-1195e7f1.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=-1;class r{constructor(t=200){this.duration=t,this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this._effect="",this._effects=[],this._scale=0;}get effect(){return this._effect}set effect(t){if(t=t||"",this._effect!==t){this._effect=t;try{this._transitionTo(c(t));}catch(s){this._transitionTo([]),request.s.getLogger("esri.views.layers.effects.EffectList").warn("Invalid Effect",{effect:t,error:s});}}}get hasEffects(){return this.transitioning||!!this._effects.length}get effects(){return this._effects}get scale(){return this._scale}get transitioning(){return null!==this._to}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e);}_transitionTo(e){this.scale>0&&l(this._current,e,this.scale)?(this._final=e,this._to=request.l$1(e),h(this._current,this._to,this.scale),this._from=request.l$1(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=e),this._effects=this._current[0]?request.l$1(this._current[0].effects):[];}_applyTimeTransition(e){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=e;const s=Math.min(1,this._time/this.duration);for(let t=0;t<this._current.length;t++){const e=this._current[t],i=this._from[t],n=this._to[t];e.scale=o(i.scale,n.scale,s);for(let t=0;t<e.effects.length;t++){const f=e.effects[t],r=i.effects[t],c=n.effects[t];f.interpolate(r,c,s);}}1===s&&(this._current=this._final,this._effects=this._current[0]?request.l$1(this._current[0].effects):[],this._from=this._to=this._final=null);}_updateForScale(t){if(0===this._current.length)return;this._scale=t;const e=this._current,s=this._current.length-1;let i,n,f=1;if(1===e.length||t>=e[0].scale)n=i=e[0].effects;else if(t<=e[s].scale)n=i=e[s].effects;else for(let r=0;r<s;r++){const s=e[r],c=e[r+1];if(s.scale>=t&&c.scale<=t){f=(t-s.scale)/(c.scale-s.scale),i=s.effects,n=c.effects;break}}for(let r=0;r<this._effects.length;r++){this._effects[r].interpolate(i[r],n[r],f);}}}function c(t){const e=request.d$6(t)||[];return a(e)?[{scale:f,effects:e}]:e}function l(t,e,s){var n,r,c,l;if(null==(n=t[0])||!n.effects||null==(r=e[0])||!r.effects)return !0;return !(((null==(c=t[0])?void 0:c.scale)===f||(null==(l=e[0])?void 0:l.scale)===f)&&(t.length>1||e.length>1)&&s<=0)&&request.n$9(t[0].effects,e[0].effects)}function h(t,e,s){var i,r;const c=t.length>e.length?t:e,l=t.length>e.length?e:t,h=l[l.length-1],o=null!=(i=null==h?void 0:h.scale)?i:s,a=null!=(r=null==h?void 0:h.effects)?r:[];for(let n=l.length;n<c.length;n++)l.push({scale:o,effects:[...a]});for(let _=0;_<c.length;_++)l[_].scale=l[_].scale===f?s:l[_].scale,c[_].scale=c[_].scale===f?s:c[_].scale,request.e$9(l[_].effects,c[_].effects);}function o(t,e,s){return t+(e-t)*s}function a(t){const e=t[0];return !!e&&"type"in e}

exports.r = r;
