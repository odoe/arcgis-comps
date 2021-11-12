import { aA as d } from './Graphic-6c72131a.js';
import { s, r, l as t$1, a_ as c$1 } from './jsxFactory-c96bb45c.js';
import { e } from './centroid-373eb2cf.js';
import { n as nt } from './featureConversionUtils-0aaeda4b.js';
import { t as t$2 } from './OptimizedFeature-6034ce0f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t,e){this._mask=0,this._buf=t,this._mask=e;}static fromBuffer(e,s){return new t(e,s)}static create(e,s=4294967295){const r=new Uint32Array(Math.ceil(e/32));return new t(r,s)}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return !!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,r=e;for(;s%32&&s!==r;){if(this.has(s))return !0;s++;}for(;r%32&&s!==r;){if(this.has(s))return !0;r--;}if(s===r)return !1;for(let h=s/32;h!==r/32;h++){if(this._buf[h])return !0}return !1}set(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]|=r;}setRange(t,e){let s=t,r=e;for(;s%32&&s!==r;)this.set(s++);for(;r%32&&s!==r;)this.set(r--);if(s!==r)for(let h=s/32;h!==r/32;h++)this._buf[h]=4294967295;}unset(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]&=4294967295^r;}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s;}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return !0;return !1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new t(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0;}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],r=32*e;if(s)for(;s;){1&s&&t(r),s>>>=1,r++;}}}countSet(){let t=0;return this.forEachSet((e=>{t++;})),t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var h,u;let l=0;const c=null!=(h=s("featurelayer-simplify-thresholds"))?h:[.5,.5,.5,.5],m=c[0],_=c[1],g=c[2],p=c[3],y=null!=(u=s("featurelayer-simplify-payload-size-factors"))?u:[1,2,4],f=y[0],I=y[1],x=y[2];class A{constructor(e){this.type="FeatureSetReader",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this.instance=e;}static createInstance(){return l++,l=l>65535?0:l,l}get isEmpty(){return r(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(e){this._level=e;}getAreaSimplificationThreshold(e,t){let r=1;t>4e6?r=x:t>1e6?r=I:t>5e5&&(r=f);let s=0;e>4e3?s=p*r:e>2e3?s=g*r:e>100?s=_:e>15&&(s=m);let i=8;return this._level<4?i=1:this._level<5?i=2:this._level<6&&(i=4),s*i}setArcadeSpatialReference(e){this._arcadeSpatialReference=e;}attachStorage(e){this._storage=e;}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(e){return this.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this.setComputedNumericAtIndex(t,0)}getComputedString(e){return this.getComputedStringAtIndex(0)}setComputedString(e,t){return this.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),e)}setComputedNumericAtIndex(e,t){this._storage.setComputedNumericAtIndex(this.getDisplayId(),e,t);}getComputedStringAtIndex(e){return this._storage.getComputedStringAtIndex(this.getDisplayId(),e)}setComputedStringAtIndex(e,t){return this._storage.setComputedStringAtIndex(this.getDisplayId(),e,t)}transform(e,t,r,s){const i=this.copy();return i._tx+=e,i._ty+=t,i._sx*=r,i._sy*=s,i}readAttribute(e,t=!1){const r=this._readAttribute(e,t);if(void 0!==r)return r;for(const s of this._joined){s.setIndex(this.getIndex());const r=s._readAttribute(e,t);if(void 0!==r)return r}}readAttributes(){const e=this._readAttributes();for(const t of this._joined){t.setIndex(this.getIndex());const r=t._readAttributes();for(const t of Object.keys(r))e[t]=r[t];}return e}joinAttributes(e){this._joined.push(e);}readArcadeFeature(){return this}geometry(){const e=this.readHydratedGeometry(),t=nt(e,this.geometryType,this.hasZ,this.hasM),r=d(t);return r&&(r.spatialReference=this._arcadeSpatialReference),r}field(e){return this.readAttribute(e,!0)}hasField(e){return !0}setField(e,t){}keys(){return []}castToText(){return ""}removeIds(e){if(t$1(this._objectIdToIndex)){const e=new Map,t=this.getCursor();for(;t.next();)e.set(t.getObjectId(),t.getIndex());this._objectIdToIndex=e;}const t=this._objectIdToIndex;for(const r of e)t.has(r)&&this.removeAtIndex(t.get(r));}removeAtIndex(e){t$1(this._deleted)&&(this._deleted=t.create(this.getSize())),this._deleted.set(e);}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const e=this.getCursor();for(;e.next();)yield e.readOptimizedFeature();}_getExists(){return t$1(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const e$1=this.readUnquantizedGeometry();if(!e$1||e$1.hasIndeterminateRingOrder)return null;const t=c$1(this.getQuantizationTransform(),null);return e(new t$2,e$1,this.hasM,this.hasZ,t)}copyInto(e){e.seen=this.seen,e._storage=this._storage,e._arcadeSpatialReference=this._arcadeSpatialReference,e._joined=this._joined,e._tx=this._tx,e._ty=this._ty,e._sx=this._sx,e._sy=this._sy,e._deleted=this._deleted,e._objectIdToIndex=this._objectIdToIndex;}}

export { A, t };
