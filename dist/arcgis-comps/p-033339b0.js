import{s as t,ab as s,bj as i,bk as h,bl as e}from"./p-7b6f6c18.js";class n{constructor(t=200){this.duration=t,this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this._effect="",this._effects=[],this._scale=0}get effect(){return this._effect}set effect(s){if(this._effect!==(s=s||"")){this._effect=s;try{this._transitionTo(function(t){const s=i(t)||[];return function(t){const s=t[0];return!!s&&"type"in s}(s)?[{scale:-1,effects:s}]:s}(s))}catch(i){this._transitionTo([]),t.getLogger("esri.views.layers.effects.EffectList").warn("Invalid Effect",{effect:s,error:i})}}}get hasEffects(){return this.transitioning||!!this._effects.length}get effects(){return this._effects}get scale(){return this._scale}get transitioning(){return null!==this._to}transitionStep(t,s){this._applyTimeTransition(t),this._updateForScale(s)}_transitionTo(t){this.scale>0&&function(t,s,i){var e,n,r,l;return null==(e=t[0])||!e.effects||null==(n=s[0])||!n.effects||!((-1===(null==(r=t[0])?void 0:r.scale)||-1===(null==(l=s[0])?void 0:l.scale))&&(t.length>1||s.length>1)&&i<=0)&&h(t[0].effects,s[0].effects)}(this._current,t,this.scale)?(this._final=t,this._to=s(t),r(this._current,this._to,this.scale),this._from=s(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._effects=this._current[0]?s(this._current[0].effects):[]}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const i=Math.min(1,this._time/this.duration);for(let t=0;t<this._current.length;t++){const s=this._current[t],h=this._from[t],e=this._to[t];s.scale=l(h.scale,e.scale,i);for(let t=0;t<s.effects.length;t++)s.effects[t].interpolate(h.effects[t],e.effects[t],i)}1===i&&(this._current=this._final,this._effects=this._current[0]?s(this._current[0].effects):[],this._from=this._to=this._final=null)}_updateForScale(t){if(0===this._current.length)return;this._scale=t;const s=this._current,i=this._current.length-1;let h,e,n=1;if(1===s.length||t>=s[0].scale)e=h=s[0].effects;else if(t<=s[i].scale)e=h=s[i].effects;else for(let r=0;r<i;r++){const i=s[r],l=s[r+1];if(i.scale>=t&&l.scale<=t){n=(t-i.scale)/(l.scale-i.scale),h=i.effects,e=l.effects;break}}for(let t=0;t<this._effects.length;t++)this._effects[t].interpolate(h[t],e[t],n)}}function r(t,s,i){var h,n;const r=t.length>s.length?t:s,l=t.length>s.length?s:t,f=l[l.length-1],o=null!=(h=null==f?void 0:f.scale)?h:i,c=null!=(n=null==f?void 0:f.effects)?n:[];for(let t=l.length;t<r.length;t++)l.push({scale:o,effects:[...c]});for(let t=0;t<r.length;t++)l[t].scale=-1===l[t].scale?i:l[t].scale,r[t].scale=-1===r[t].scale?i:r[t].scale,e(l[t].effects,r[t].effects)}function l(t,s,i){return t+(s-t)*i}export{n as r}