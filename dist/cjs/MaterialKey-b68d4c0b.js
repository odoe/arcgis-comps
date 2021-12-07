'use strict';

const request = require('./messageBundle-8be88d04.js');
const Utils = require('./Utils-a77299a6.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return !0;default:return !1}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t,s){const a=Utils.A.SIZE_FIELD_STOPS|Utils.A.SIZE_MINMAX_VALUE|Utils.A.SIZE_SCALE_STOPS|Utils.A.SIZE_UNIT_VALUE,r=(t&(Utils._.FIELD_TARGETS_OUTLINE|Utils._.MINMAX_TARGETS_OUTLINE|Utils._.SCALE_TARGETS_OUTLINE|Utils._.UNIT_TARGETS_OUTLINE))>>>4;return null!=s&&s.isOutline||null!=s&&s.isOutlinedFill?a&r:a&~r}const n=0,v=8,o=7,l=8,h=11,u=11,S=12,d=13,V=14,c=15,p=15,z=16,g=17,y=18,E=19,T=20,m=21;function M(t,e,i){switch(t){case Utils.E.FILL:return F.from(e,i);case Utils.E.LINE:return f.from(e,i);case Utils.E.MARKER:return U.from(e,i);case Utils.E.TEXT:return B.from(e,i);case Utils.E.LABEL:return R.from(e,i);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function L(t){switch(_.load(t).geometryType){case Utils.E.MARKER:return new U(t);case Utils.E.FILL:return new F(t);case Utils.E.LINE:return new f(t);case Utils.E.TEXT:return new B(t);case Utils.E.LABEL:return new R(t)}}class _{constructor(t){this._data=0,this._data=t;}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t;}get data(){return this._data}get geometryType(){return this.bits(l,h)}set geometryType(t){this.setBits(t,l,h);}get mapAligned(){return !!this.bit(T)}set mapAligned(t){this.setBit(T,t);}get sdf(){return !!this.bit(u)}set sdf(t){this.setBit(u,t);}get pattern(){return !!this.bit(S)}set pattern(t){this.setBit(S,t);}get textureBinding(){return this.bits(n,v)}set textureBinding(t){this.setBits(t,n,v);}get geometryTypeString(){switch(this.geometryType){case Utils.E.FILL:return "fill";case Utils.E.MARKER:return "marker";case Utils.E.LINE:return "line";case Utils.E.TEXT:return "text";case Utils.E.LABEL:return "label";default:throw new request.s(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i;}bit(t){return (this._data&1<<t)>>t}setBits(t,e,i){for(let s=e,a=0;s<i;s++,a++)this.setBit(s,0!=(t&1<<a));}bits(t,e){let i=0;for(let s=t,a=0;s<e;s++,a++)i|=this.bit(s)<<a;return i}hasVV(){return !1}setVV(t,e){}getVariation(){return {mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(o&this.textureBinding)}}_.shared=new _(0);const I=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(z)}set vvSizeMinMaxValue(t){this.setBit(z,t);}get vvSizeScaleStops(){return 0!==this.bit(g)}set vvSizeScaleStops(t){this.setBit(g,t);}get vvSizeFieldStops(){return 0!==this.bit(y)}set vvSizeFieldStops(t){this.setBit(y,t);}get vvSizeUnitValue(){return 0!==this.bit(E)}set vvSizeUnitValue(t){this.setBit(E,t);}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,i){super.setVV(t,i);const s=r(t,i)&t;this.vvSizeMinMaxValue=!!(s&Utils.A.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&Utils.A.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&Utils.A.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&Utils.A.SIZE_SCALE_STOPS);}},O=t=>class extends t{get vvRotation(){return 0!==this.bit(c)}set vvRotation(t){this.setBit(c,t);}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,i){super.setVV(t,i),this.vvRotation=!(null!=i&&i.isOutline||!(t&Utils.A.ROTATION));}},A=t=>class extends t{get vvColor(){return 0!==this.bit(d)}set vvColor(t){this.setBit(d,t);}hasVV(){return super.hasVV()||this.vvColor}setVV(t,i){super.setVV(t,i),this.vvColor=!(null!=i&&i.isOutline||!(t&Utils.A.COLOR));}},x=t=>class extends t{get vvOpacity(){return 0!==this.bit(V)}set vvOpacity(t){this.setBit(V,t);}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,i){super.setVV(t,i),this.vvOpacity=!(null!=i&&i.isOutline||!(t&Utils.A.OPACITY));}};class F extends(A(x(I(_)))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=Utils.E.FILL,null!=e&&e.isDD?i.dotDensity=!0:(i.setVV(t,e),null!=e&&e.isOutlinedFill&&(i.outlinedFill=!0)),i.data}getVariation(){return {...super.getVariation(),dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}get dotDensity(){return !!this.bit(p)}set dotDensity(t){this.setBit(p,t);}get outlinedFill(){return !!this.bit(m)}set outlinedFill(t){this.setBit(m,t);}}F.shared=new F(0);class U extends(A(x(O(I(_))))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=Utils.E.MARKER,i.setVV(t,e),i.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}U.shared=new U(0);class f extends(A(x(I(_)))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=Utils.E.LINE,i.setVV(t,e),i.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}f.shared=new f(0);class B extends(A(x(O(I(_))))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(t);return i.geometryType=Utils.E.TEXT,i.setVV(t,e),i.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}B.shared=new B(0);class R extends(I(_)){static load(t){const e=this.shared;return e.data=t,e}static from(t,e$1){const i=this.load(0);return i.geometryType=Utils.E.LABEL,i.setVV(t,e$1),i.mapAligned=e(null==e$1?void 0:e$1.placement),i.data}getVariation(){return {...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}R.shared=new R(0);

exports.B = B;
exports.F = F;
exports.L = L;
exports.M = M;
exports.R = R;
exports.U = U;
exports._ = _;
exports.e = e;
exports.f = f;
