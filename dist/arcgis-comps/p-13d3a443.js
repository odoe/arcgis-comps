import{b as t}from"./p-5420851c.js";import{E as e,A as s,_ as i}from"./p-54db165f.js";function r(t){switch(t){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}function n(t,s,i){switch(t){case e.FILL:return c.from(s,i);case e.LINE:return p.from(s,i);case e.MARKER:return S.from(s,i);case e.TEXT:return d.from(s,i);case e.LABEL:return V.from(s,i);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function a(t){switch(h.load(t).geometryType){case e.MARKER:return new S(t);case e.FILL:return new c(t);case e.LINE:return new p(t);case e.TEXT:return new d(t);case e.LABEL:return new V(t)}}class h{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(t){this.setBits(t,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(t){this.setBit(20,t)}get sdf(){return!!this.bit(11)}set sdf(t){this.setBit(11,t)}get pattern(){return!!this.bit(12)}set pattern(t){this.setBit(12,t)}get textureBinding(){return this.bits(0,8)}set textureBinding(t){this.setBits(t,0,8)}get geometryTypeString(){switch(this.geometryType){case e.FILL:return"fill";case e.MARKER:return"marker";case e.LINE:return"line";case e.TEXT:return"text";case e.LABEL:return"label";default:throw new t(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const s=1<<t;e?this._data|=s:this._data&=~s}bit(t){return(this._data&1<<t)>>t}setBits(t,e,s){for(let i=e,r=0;i<s;i++,r++)this.setBit(i,0!=(t&1<<r))}bits(t,e){let s=0;for(let i=t,r=0;i<e;i++,r++)s|=this.bit(i)<<r;return s}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}h.shared=new h(0);const o=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(t){this.setBit(16,t)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(t){this.setBit(17,t)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(t){this.setBit(18,t)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(t){this.setBit(19,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const r=function(t,e){const r=s.SIZE_FIELD_STOPS|s.SIZE_MINMAX_VALUE|s.SIZE_SCALE_STOPS|s.SIZE_UNIT_VALUE,n=(t&(i.FIELD_TARGETS_OUTLINE|i.MINMAX_TARGETS_OUTLINE|i.SCALE_TARGETS_OUTLINE|i.UNIT_TARGETS_OUTLINE))>>>4;return null!=e&&e.isOutline||null!=e&&e.isOutlinedFill?r&n:r&~n}(t,e)&t;this.vvSizeMinMaxValue=!!(r&s.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(r&s.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(r&s.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(r&s.SIZE_SCALE_STOPS)}},u=t=>class extends t{get vvRotation(){return 0!==this.bit(15)}set vvRotation(t){this.setBit(15,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!(null!=e&&e.isOutline||!(t&s.ROTATION))}},l=t=>class extends t{get vvColor(){return 0!==this.bit(13)}set vvColor(t){this.setBit(13,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!(null!=e&&e.isOutline||!(t&s.COLOR))}},v=t=>class extends t{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(t){this.setBit(14,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!(null!=e&&e.isOutline||!(t&s.OPACITY))}};class c extends(l(v(o(h)))){static load(t){const e=this.shared;return e.data=t,e}static from(t,s){const i=this.load(0);return i.geometryType=e.FILL,null!=s&&s.isDD?i.dotDensity=!0:(i.setVV(t,s),null!=s&&s.isOutlinedFill&&(i.outlinedFill=!0)),i.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}get dotDensity(){return!!this.bit(15)}set dotDensity(t){this.setBit(15,t)}get outlinedFill(){return!!this.bit(21)}set outlinedFill(t){this.setBit(21,t)}}c.shared=new c(0);class S extends(l(v(u(o(h))))){static load(t){const e=this.shared;return e.data=t,e}static from(t,s){const i=this.load(0);return i.geometryType=e.MARKER,i.setVV(t,s),i.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}S.shared=new S(0);class p extends(l(v(o(h)))){static load(t){const e=this.shared;return e.data=t,e}static from(t,s){const i=this.load(0);return i.geometryType=e.LINE,i.setVV(t,s),i.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}p.shared=new p(0);class d extends(l(v(u(o(h))))){static load(t){const e=this.shared;return e.data=t,e}static from(t,s){const i=this.load(t);return i.geometryType=e.TEXT,i.setVV(t,s),i.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}d.shared=new d(0);class V extends(o(h)){static load(t){const e=this.shared;return e.data=t,e}static from(t,s){const i=this.load(0);return i.geometryType=e.LABEL,i.setVV(t,s),i.mapAligned=r(null==s?void 0:s.placement),i.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}V.shared=new V(0);export{d as B,c as F,a as L,n as M,V as R,S as U,h as _,r as e,p as f}