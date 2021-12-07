import { A as r$c, c as s$7, ct as i$b, cg as n$b, af as t$f, cs as h$9, m as a$d, r as n$d, bb as F, aa as G$1, cT as o$f, cU as e$c, cV as t$i, ap as j$3, ax as m$6, s as s$9, bo as s$a } from './messageBundle-f75b4090.js';
import { y as y$3 } from './mat3-6a23d9ad.js';
import { e as e$7, a as e$9 } from './quatf64-b9feea68.js';
import { h as h$6, o as o$a, n as n$7, e as e$8, c as c$b, G } from './mat4-f34c6460.js';
import { e as e$6 } from './mat4f64-677a419d.js';
import { w as w$1 } from './quat-2d7a417b.js';
import { P as P$3, u as u$8, c as c$a, y as y$4, g as x$4, k as s$8, M as M$2, e as e$b, o as o$c, _ as _$1, a as j$2, W as o$e, t as a$e } from './mathUtils-e16f9389.js';
import { n as n$a } from './vec3f32-109cf143.js';
import { n as n$8, r as r$d, b as t$g, f as f$6 } from './common-d5b993de.js';
import { n as n$9, r as r$f } from './vec4f64-2ec4ac08.js';
import { P as P$2 } from './sphere-c3d60863.js';
import { u as u$9, o as o$b, n as n$e } from './Texture-f0375c04.js';
import { a as e$a, f as f$5, h as h$7, o as o$d, l as l$9, r as r$g } from './FramebufferObject-3d2e79da.js';
import { c as n$c } from './BlendLayer-38b8abf7.js';
import { i as i$c } from './Util-68fde664.js';
import { r as r$e, c as c$c } from './utils-c65673fb.js';
import { l as l$8, u as u$a, h as h$8 } from './geometryDataUtils-7e4c8d4a.js';
import { c as c$d, x as x$5, u as u$b, i as i$d } from './BufferView-35ef10d7.js';
import { q as q$1, w as w$2, a as a$c } from './aaBoundingBox-876621e6.js';
import { a as t$h } from './OrderIndependentTransparency-3e6c26be.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class z$1{constructor(){this._transform=e$6(),this._transformInverse=new g$8({value:this._transform},h$6,e$6),this._transformInverseTranspose=new g$8(this._transformInverse,o$a,e$6),this._transformTranspose=new g$8({value:this._transform},o$a,e$6),this._transformInverseRotation=new g$8({value:this._transform},y$3,e$7);}invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate();}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){n$7(this._transform,t);}multiplyTransform(t){e$8(this._transform,this._transform,t);}set(t){n$7(this._transform,t),this.invalidateLazyTransforms();}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this.invalidateLazyTransforms();}}class g$8{constructor(t,s,i){this.original=t,this.update=s,this.dirty=!0,this.transform=i();}invalidate(){this.dirty=!0;}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}class S{constructor(t=0){this.offset=t,this.tmpVertex=n$8();}applyToVertex(t,s,i){const r=t+this.localOrigin[0],e=s+this.localOrigin[1],o=i+this.localOrigin[2],n=this.offset/Math.sqrt(r*r+e*e+o*o);return this.tmpVertex[0]=t+r*n,this.tmpVertex[1]=s+e*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(t){const s=t[0]+this.localOrigin[0],i=t[1]+this.localOrigin[1],r=t[2]+this.localOrigin[2],e=t[3]+this.localOrigin[0],o=t[4]+this.localOrigin[1],n=t[5]+this.localOrigin[2],h=this.offset/Math.sqrt(s*s+i*i+r*r);t[0]+=s*h,t[1]+=i*h,t[2]+=r*h;const a=this.offset/Math.sqrt(e*e+o*o+n*n);return t[3]+=e*a,t[4]+=o*a,t[5]+=n*a,t}}class T$1{constructor(t=0){this.offset=t,this.componentLocalOriginLength=0,this.tmpVertex=n$8(),this.mbs=n$9(),this.obb={center:n$8(),halfSize:n$a(),quaternion:null};}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);}applyToVertex(t,s,i){const r=t,e=s,o=i+this.componentLocalOriginLength,n=this.offset/Math.sqrt(r*r+e*e+o*o);return this.tmpVertex[0]=t+r*n,this.tmpVertex[1]=s+e*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(t){const s=t[0],i=t[1],r=t[2]+this.componentLocalOriginLength,e=t[3],o=t[4],n=t[5]+this.componentLocalOriginLength,h=this.offset/Math.sqrt(s*s+i*i+r*r);t[0]+=s*h,t[1]+=i*h,t[2]+=r*h;const a=this.offset/Math.sqrt(e*e+o*o+n*n);return t[3]+=e*a,t[4]+=o*a,t[5]+=n*a,t}applyToMbs(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/s;return this.mbs[0]=t[0]+t[0]*i,this.mbs[1]=t[1]+t[1]*i,this.mbs[2]=t[2]+t[2]*i,this.mbs[3]=t[3]+t[3]*this.offset/s,this.mbs}applyToObb(t){const s=t.center,i=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.obb.center[0]=s[0]+s[0]*i,this.obb.center[1]=s[1]+s[1]*i,this.obb.center[2]=s[2]+s[2]*i,P$3(this.obb.halfSize,t.halfSize,t.quaternion),u$8(this.obb.halfSize,this.obb.halfSize,t.center);const r=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*r,this.obb.halfSize[1]+=this.obb.halfSize[1]*r,this.obb.halfSize[2]+=this.obb.halfSize[2]*r,c$a(this.obb.halfSize,this.obb.halfSize,t.center),w$1(j$1,t.quaternion),P$3(this.obb.halfSize,this.obb.halfSize,j$1),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=t.quaternion,this.obb}}class q{constructor(t=0){this.offset=t,this.sphere=P$2(),this.tmpVertex=n$8();}applyToVertex(t,s,i){const r=this.objectTransform.transform;let e=r[0]*t+r[4]*s+r[8]*i+r[12],o=r[1]*t+r[5]*s+r[9]*i+r[13],n=r[2]*t+r[6]*s+r[10]*i+r[14];const h=this.offset/Math.sqrt(e*e+o*o+n*n);e+=e*h,o+=o*h,n+=n*h;const a=this.objectTransform.inverse;return this.tmpVertex[0]=a[0]*e+a[4]*o+a[8]*n+a[12],this.tmpVertex[1]=a[1]*e+a[5]*o+a[9]*n+a[13],this.tmpVertex[2]=a[2]*e+a[6]*o+a[10]*n+a[14],this.tmpVertex}applyToMinMax(t,s){const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i;const r=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*r,s[1]+=s[1]*r,s[2]+=s[2]*r;}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const i=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*i,t[4]+=t[4]*i,t[5]+=t[5]*i,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/s;return this.sphere[0]=t[0]+t[0]*i,this.sphere[1]=t[1]+t[1]*i,this.sphere[2]=t[2]+t[2]*i,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const x$3=new q;function _(s){return r$c(s)?(x$3.offset=s,x$3):null}const y$2=new T$1;function M$1(s){return r$c(s)?(y$2.offset=s,y$2):null}const V$1=new S;function d$5(s){return r$c(s)?(V$1.offset=s,V$1):null}const O="terrain",j$1=e$9();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$e(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){function n(t){return Math.round(t).toString()}function o(t){return t.toPrecision(8)}t.int=n,t.float=o;}(t$e||(t$e={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a$b(a){a.code.add(t$e`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a$a(a){a.include(a$b),a.code.add(t$e`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$d=s$7.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class r$b{constructor(){this.includedModules=new Map;}include(e,r){this.includedModules.has(e)?this.includedModules.get(e)!==r&&t$d.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,r),e(this.builder,r));}}class n$6 extends r$b{constructor(){super(...arguments),this.vertex=new o$9,this.fragment=new o$9,this.attributes=new a$9,this.varyings=new c$9,this.extensions=new u$7,this.constants=new h$5;}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?l$7:m$5,c=this.constants.generateSource().concat(s.constants.generateSource());return `\n${t.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}}class s$6{constructor(){this._entries=new Map;}add(e,t,r){const n=`${e}_${t}_${r}`;return this._entries.set(n,{name:e,type:t,arraySize:r}),this}generateSource(){const e=e=>e?`[${e}]`:"";return Array.from(this._entries.values()).map((t=>`uniform ${t.type} ${t.name}${e(t.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class i$a{constructor(){this._entries=new Array;}add(e){this._entries.push(e);}generateSource(){return this._entries}}class o$9 extends r$b{constructor(){super(...arguments),this.uniforms=new s$6,this.code=new i$a,this.constants=new h$5;}get builder(){return this}}class a$9{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(e){return "fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class c$9{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class u$7{constructor(){this._entries=new Set;}add(e){this._entries.add(e);}generateSource(e){const t="vertex"===e?u$7.ALLOWLIST_VERTEX:u$7.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}u$7.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u$7.ALLOWLIST_VERTEX=[];class h$5{constructor(){this._entries=[];}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=h$5.numberToFloatStr(r);break;case"int":n=h$5.numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${h$5.numberToFloatStr(r[0])},                            ${h$5.numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${h$5.numberToFloatStr(r[0])},                            ${h$5.numberToFloatStr(r[1])},                            ${h$5.numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${h$5.numberToFloatStr(r[0])},                            ${h$5.numberToFloatStr(r[1])},                            ${h$5.numberToFloatStr(r[2])},                            ${h$5.numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${h$5.numberToIntStr(r[0])},                             ${h$5.numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${h$5.numberToIntStr(r[0])},                             ${h$5.numberToIntStr(r[1])},                             ${h$5.numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${h$5.numberToIntStr(r[0])},                             ${h$5.numberToIntStr(r[1])},                             ${h$5.numberToIntStr(r[2])},                             ${h$5.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>h$5.numberToFloatStr(e))).join(", ")})`;}return this._entries.push(`const ${t} ${e} = ${n};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const m$5="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",l$7="precision highp float;\nprecision highp sampler2D;";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$c{constructor(t,o){this._module=t,this._loadModule=o;}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$b{constructor(i,t,e=(()=>this.dispose())){this.release=e,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i);}dispose(){this._program=i$b(this._program),this._pipeline=this._config=null;}reload(t){i$b(this._program),this._program=this.initializeProgram(t);}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(i,t){}bindMaterial(i,t){}bindDraw(i){}bindPipelineState(i,t=null,e){i.setPipelineState(this.getPipelineState(t,e));}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i);}get primitiveType(){return 4}getPipelineState(i,t){return this._pipeline}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$a{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[]);}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const r of t)e[r]=this[r];return e}}function e$5(t={}){return (e,r)=>{var a,s;e._parameterNames=null!=(a=e._parameterNames)?a:[],e._parameterNames.push(r);const i=e._parameterNames.length-1,h=t.count||2,o=Math.ceil(Math.log2(h)),m=null!=(s=e._parameterBits)?s:[0];let n=0;for(;m[n]+o>16;)n++,n>=m.length&&m.push(0);e._parameterBits=m;const p=m[n],_=(1<<o)-1<<p;m[n]+=o,Object.defineProperty(e,r,{get(){return this[i]},set(t){if(this[i]!==t&&(this[i]=t,this._keyDirty=!0,this._parameterBits[n]=this._parameterBits[n]&~_|+t<<p&_,"number"!=typeof t&&"boolean"!=typeof t))throw "Configuration value for "+r+" must be boolean or number, got "+typeof t}});}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$8=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n$5 extends e$a{constructor(e,t,i){super(e,t.generateSource("vertex"),t.generateSource("fragment"),i),this._textures=new Map,this._freeTextureUnits=new n$b({deallocator:null}),this._fragmentUniforms=u$9()?t.fragmentUniforms.entries:null;}stop(){this._textures.clear(),this._freeTextureUnits.clear();}bindTexture(t,r){if(t$f(t)||null==t.glName){const e=this._textures.get(r);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(r)),null}let s=this._textures.get(r);return null==s?(s=this._allocTextureUnit(t),this._textures.set(r,s)):s.texture=t,this._context.useProgram(this),this.setUniform1i(r,s.unit),this._context.bindTexture(t,s.unit),s.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit);})),r$c(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}));}_allocTextureUnit(e){return {texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$9=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],s$5=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i$8(o,i=i$9,l=o$8,m=-1,f=1){let u=null;if(i===s$5)u=new Float32Array([m,m,0,0,f,m,1,0,m,f,0,1,f,f,1,1]);else u=new Float32Array([m,m,f,m,m,f,f,f]);return new f$5(o,l,{geometry:i},{geometry:h$7.createVertex(o,35044,u)})}function l$6(r,o=i$9,i=o$8){const l=new Float32Array([-1,-1,3,-1,-1,3]);return new f$5(r,i,{geometry:o},{geometry:h$7.createVertex(r,35044,l)})}const m$4=4;function f$4(e,t=m$4){return new o$b(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:t,height:t})}function u$6(e,t,r=m$4){const n=new Uint8Array(r*r*4);for(let o=0;o<n.length;o+=4)n[o+0]=255*t[0],n[o+1]=255*t[1],n[o+2]=255*t[2],n[o+3]=255*t[3];return new o$b(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:r,height:r},n)}function g$7(e){return new o$b(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([255,255,255,255]))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$9(t){t.vertex.code.add(t$e`const float PI = 3.141592653589793;`),t.fragment.code.add(t$e`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$4(e){e.code.add(t$e`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$a(r,o){o.linearDepth?r.vertex.code.add(t$e`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):r.vertex.code.add(t$e`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$7(i,n,o){i.setUniform3f("camPos",o[3]-n[0],o[7]-n[1],o[11]-n[2]);}function t$8(i,n){i.setUniformMatrix4fv("proj",n);}function r$9(i,n){i.setUniform2fv("nearFar",n);}function f$3(n,o,t){c$b(c$8,t,o),n.setUniform3fv("localOrigin",o),n.setUniformMatrix4fv("view",c$8);}function a$8(i,n){f$3(i,n.origin,n.camera.viewMatrix);}function m$3(i,n){i.setUniform4fv("viewport",n.camera.fullViewport);}const c$8=n$c();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a$7{constructor(i,s,a,c){this.primitiveIndices=i,this._numIndexPerPrimitive=s,this.indices=a,this.position=c,this.center=n$8(),i$c(i.length>=1),i$c(a.length%this._numIndexPerPrimitive==0),i$c(a.length>=i.length*this._numIndexPerPrimitive),i$c(3===c.size||4===c.size);const{data:o,size:M}=c,d=i.length;let l=M*a[this._numIndexPerPrimitive*i[0]];b$3.clear(),b$3.push(l),this.bbMin=r$d(o[l],o[l+1],o[l+2]),this.bbMax=t$g(this.bbMin);for(let t=0;t<d;++t){const s=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){l=M*a[s+i],b$3.push(l);let t=o[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2]);}}y$4(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let m=this.radius*this.radius;for(let t=0;t<b$3.length;++t){l=b$3.getItemAt(t);const i=o[l]-this.center[0],s=o[l+1]-this.center[1],e=o[l+2]-this.center[2],n=i*i+s*s+e*e;if(n<=m)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,m=this.radius*this.radius;const a=h/r;this.center[0]+=i*a,this.center[1]+=s*a,this.center[2]+=e*a;}b$3.clear();}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(x$4(this.bbMin,this.bbMax)>1){const i=y$4(n$8(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,n=new Uint8Array(s),r=new Array(8);for(let t=0;t<8;++t)r[t]=0;const{data:h,size:b}=this.position;for(let t=0;t<s;++t){let s=0;const e=this._numIndexPerPrimitive*this.primitiveIndices[t];let a=b*this.indices[e],c=h[a],o=h[a+1],M=h[a+2];for(let i=1;i<this._numIndexPerPrimitive;++i){a=b*this.indices[e+i];const t=h[a],s=h[a+1],n=h[a+2];t<c&&(c=t),s<o&&(o=s),n<M&&(M=n);}c<i[0]&&(s|=1),o<i[1]&&(s|=2),M<i[2]&&(s|=4),n[t]=s,++r[s];}let c=0;for(let t=0;t<8;++t)r[t]>0&&++c;if(c<2)return;const o=new Array(8);for(let t=0;t<8;++t)o[t]=r[t]>0?new Uint32Array(r[t]):void 0;for(let t=0;t<8;++t)r[t]=0;for(let t=0;t<s;++t){const i=n[t];o[i][r[i]++]=this.primitiveIndices[t];}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==o[t]&&(this._children[t]=new a$7(o[t],this._numIndexPerPrimitive,this.indices,this.position));}return this._children}static prune(){b$3.prune();}}const b$3=new n$b({deallocator:null});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class u$5 extends r$e{constructor(t,e=[],i=0,s=-1){super(),this._primitiveType=i,this.edgeIndicesLength=s,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,r]of t)r&&this._vertexAttributes.set(n,{...r});if(null==e||0===e.length){const t=h$4(this._vertexAttributes),e=l$8(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e);}else for(const[n,r]of e)r&&(this._indices.set(n,g$6(r)),"position"===n&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength));}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){const e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e.data=Array.from(e.data),e.exclusive=!0),e}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return t$f(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(t):this.computeAttachmentOriginPoints(t)}computeAttachmentOriginTriangles(t){const e=this.indices.get("position"),i=this.vertexAttributes.get("position");return u$a(i,e,t)}computeAttachmentOriginPoints(t){const e=this.indices.get("position"),i=this.vertexAttributes.get("position");return h$8(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null;}_calculateBoundingInfo(){const t=this.indices.get("position");if(0===t.length)return null;const i=0===this.primitiveType?3:1;i$c(t.length%i==0,"Indexing error: "+t.length+" not divisible by "+i);const s=l$8(t.length/i),r=this.vertexAttributes.get("position");return new a$7(s,i,t,r)}}function h$4(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function g$6(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i$7(e,t){return new p$3(e,h$3,t)}function r$8(e,t){const{curvatureDependent:a,scaleStart:i,scaleFallOffRange:r}=h$3;return new p$3(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:v$1.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:v$1.curvatureDependent.max.scaleFallOffFactor}},scaleStart:i,scaleFallOffRange:r,minPixelSize:v$1.minPixelSize},t)}function n$4(e){return Math.abs(e*e*e)}function l$5(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x$2.scale=Math.min(i.divisor/(t-i.offset),1),x$2.factor=n$4(e),x$2.minPixelSize=i.minPixelSize,x$2.paddingPixels=r,x$2}function s$4(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function c$7(t,a){return Math.max(s$8(t*a.scale,t,a.factor),s$4(t,a))}function u$4(e,t,a){const i=l$5(e,t,a);return i.minPixelSize=0,i.paddingPixels=0,c$7(1,i)}function d$4(e,t,a,i){i.scale=u$4(e,t,a),i.factor=0,i.minPixelSize=a.parameters.minPixelSize,i.paddingPixels=a.paddingPixelsOverride;}function f$2(e,t,a=[0,0]){const i=Math.min(Math.max(t.scale,s$4(e[1],t)/e[1]),1);return a[0]=e[0]*i,a[1]=e[1]*i,a}function m$2(e,t,a,i){return c$7(e,l$5(t,a,i))}class p$3{constructor(e,t,a,i=g$5(),r){this.viewingMode=e,this.description=t,this.ellipsoidRadius=a,this.parameters=i,this._paddingPixelsOverride=r,2===this.viewingMode?(this.coverageCompensation=this.surfaceCoverageCompensationLocal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersLocal):(this.coverageCompensation=this.surfaceCoverageCompensationGlobal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersGlobal);}get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}update(e){return (!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this.calculateParameters(e,this.ellipsoidRadius,this.parameters),!0)}overridePadding(e){return e!==this.paddingPixelsOverride?new p$3(this.viewingMode,this.description,this.ellipsoidRadius,this.parameters,e):this}calculateParameters(e,t,a){const{scaleStart:i,scaleFallOffRange:r,minPixelSize:n}=this.description,{fovY:l,distance:s}=e,c=this.calculateCurvatureDependentParameters(e,t),o=this.coverageCompensation(e,t,c),{tiltAngle:u,scaleFallOffFactor:d}=c,f=Math.sin(u)*s,m=.5*Math.PI-u-l*(.5-i*o),p=f/Math.cos(m),h=m+l*r*o,v=(p-d*(f/Math.cos(h)))/(1-d);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=v,a.divisor=p-v,a.minPixelSize=n,a}calculateCurvatureDependentParametersLocal(e,t,a=P$1){return a.tiltAngle=this.description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this.description.curvatureDependent.min.scaleFallOffFactor,a}calculateCurvatureDependentParametersGlobal(t,i,r=P$1){const n=this.description.curvatureDependent,l=1+t.distance/i,s=Math.sqrt(l*l-1),[c,o]=[n.min.curvature,n.max.curvature],u=e$b((s-c)/(o-c),0,1),[d,f]=[n.min,n.max];return r.tiltAngle=s$8(d.tiltAngle,f.tiltAngle,u),r.scaleFallOffFactor=s$8(d.scaleFallOffFactor,f.scaleFallOffFactor,u),r}surfaceCoverageCompensationLocal(e,t,a){return (e.fovY-a.tiltAngle)/e.fovY}surfaceCoverageCompensationGlobal(e,t,a){const i=t*t,r=a.tiltAngle+.5*Math.PI,{fovY:n,distance:l}=e,s=l*l+i-2*Math.cos(r)*l*t,c=Math.sqrt(s),o=Math.sqrt(s-i);return (Math.acos(o/c)-Math.asin(t/(c/Math.sin(r)))+.5*n)/n}}const h$3={curvatureDependent:{min:{curvature:M$2(10),tiltAngle:M$2(12),scaleFallOffFactor:.5},max:{curvature:M$2(70),tiltAngle:M$2(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},v$1={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function g$5(){return {camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0}}const x$2={scale:0,factor:0,minPixelSize:0,paddingPixels:0},P$1={tiltAngle:0,scaleFallOffFactor:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e$3{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output;}dispose(){this._techniqueRep.release(this._technique);}get technique(){return this._technique}ensureTechnique(e,t,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,t),this._technique),this._technique}ensureResources(e){return 2}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r$7 extends e$3{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId).then((e=>this._texture=e)),this._acquire(e.normalTextureId).then((e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId).then((e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId).then((e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId).then((e=>this._textureMetallicRoughness=e));}dispose(){this._texture=h$9(this._texture),this._textureNormal=h$9(this._textureNormal),this._textureEmissive=h$9(this._textureEmissive),this._textureOcclusion=h$9(this._textureOcclusion),this._textureMetallicRoughness=h$9(this._textureMetallicRoughness),this._disposed=!0;}ensureResources(e){return 0===this._numLoading?2:1}updateTexture(i){(t$f(this._texture)||i!==this._texture.id)&&(this._texture=h$9(this._texture),this._textureId=i,this._acquire(this._textureId).then((e=>this._texture=e)));}bindTextures(e){r$c(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),r$c(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),r$c(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),r$c(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),r$c(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness");}bindTextureScale(e){const t=r$c(this._texture)?this._texture.glTexture:null;r$c(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1);}_acquire(i){return t$f(i)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(i).then((t=>this._disposed?(h$9(t),null):t)).finally((()=>--this._numLoading)))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p$2=a$c();function h$2(t,n,e,i,o,r,s){if(!c$c(n))if(t.boundingInfo){i$c(0===t.primitiveType);const n=e.tolerance;g$4(t.boundingInfo,i,o,n,r,s);}else {const n=t.indices.get("position"),e=t.vertexAttributes.get("position");M(i,o,0,n.length/3,n,e,void 0,r,s);}}const d$3=n$8();function g$4(t,i,o,r,s,c){if(t$f(t))return;const l=j(i,o,d$3);if(q$1(p$2,t.getBBMin()),w$2(p$2,t.getBBMax()),r$c(s)&&s.applyToAabb(p$2),A$1(p$2,i,l,r)){const{primitiveIndices:n,indices:e,position:f}=t,a=n?n.length:e.length/3;if(a>U){const n=t.getChildren();if(void 0!==n){for(let t=0;t<8;++t)void 0!==n[t]&&g$4(n[t],i,o,r,s,c);return}}M(i,o,0,a,e,f,n,s,c);}}const x$1=n$8();function M(t,n,i,o,r,s,c,f,a){if(c)return b$2(t,n,i,o,r,s,c,f,a);const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,M=n[2]-h;for(let b=i,v=3*i;b<o;++b){let t=u*r[v++],n=l[t++],i=l[t++],o=l[t];t=u*r[v++];let s=l[t++],c=l[t++],y=l[t];t=u*r[v++];let j=l[t++],A=l[t++],L=l[t];r$c(f)&&([n,i,o]=f.applyToVertex(n,i,o,b),[s,c,y]=f.applyToVertex(s,c,y,b),[j,A,L]=f.applyToVertex(j,A,L,b));const V=s-n,B=c-i,z=y-o,E=j-n,I=A-i,N=L-o,P=g*N-I*M,U=M*E-N*d,S=d*I-E*g,W=V*P+B*U+z*S;if(Math.abs(W)<=Number.EPSILON)continue;const O=m-n,k=p-i,R=h-o,C=O*P+k*U+R*S;if(W>0){if(C<0||C>W)continue}else if(C>0||C<W)continue;const H=k*z-B*R,X=R*V-z*O,Y=O*B-V*k,_=d*H+g*X+M*Y;if(W>0){if(_<0||C+_>W)continue}else if(_>0||C+_<W)continue;const q=(E*H+I*X+N*Y)/W;if(q>=0){a(q,T(V,B,z,E,I,N,x$1),b);}}}function b$2(t,n,i,o,r,s,c,f,a){const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,M=n[2]-h;for(let b=i;b<o;++b){const t=c[b];let n=3*t,i=u*r[n++],o=l[i++],s=l[i++],v=l[i];i=u*r[n++];let y=l[i++],j=l[i++],A=l[i];i=u*r[n];let L=l[i++],V=l[i++],B=l[i];r$c(f)&&([o,s,v]=f.applyToVertex(o,s,v,b),[y,j,A]=f.applyToVertex(y,j,A,b),[L,V,B]=f.applyToVertex(L,V,B,b));const z=y-o,E=j-s,I=A-v,N=L-o,P=V-s,U=B-v,S=g*U-P*M,W=M*N-U*d,O=d*P-N*g,k=z*S+E*W+I*O;if(Math.abs(k)<=Number.EPSILON)continue;const R=m-o,C=p-s,H=h-v,X=R*S+C*W+H*O;if(k>0){if(X<0||X>k)continue}else if(X>0||X<k)continue;const Y=C*I-E*H,_=H*z-I*R,q=R*E-z*C,w=d*Y+g*_+M*q;if(k>0){if(w<0||X+w>k)continue}else if(w>0||X+w<k)continue;const D=(N*Y+P*_+U*q)/k;if(D>=0){a(D,T(z,E,I,N,P,U,x$1),t);}}}const v=n$8(),y$1=n$8();function T(t,n,e,s,c,f,a){return o$c(v,t,n,e),o$c(y$1,s,c,f),_$1(a,v,y$1),j$2(a,a),a}function j(t,n,e){return o$c(e,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function A$1(t,n,e,i){return L(t,n,e,i,1/0)}function L(t,n,e,i,o){const r=(t[0]-i-n[0])*e[0],s=(t[3]+i-n[0])*e[0];let c=Math.min(r,s),f=Math.max(r,s);const a=(t[1]-i-n[1])*e[1],l=(t[4]+i-n[1])*e[1];if(f=Math.min(f,Math.max(a,l)),f<0)return !1;if(c=Math.max(c,Math.min(a,l)),c>f)return !1;const u=(t[2]-i-n[2])*e[2],m=(t[5]+i-n[2])*e[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<o)}function V(n,e,i,o,r){let s=(i.screenLength||0)*n.pixelRatio;r&&(s=m$2(s,o,e,r));const c=s*Math.tan(.5*n.fovY)/(.5*n.fullHeight);return e$b(c*e,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function B(t,n,e){if(!t)return;const i=t.parameters,o=t.paddingPixelsOverride;n.setUniform4f(e,i.divisor,i.offset,i.minPixelSize,o);}function z(t,n){const e=n?z(n):{};for(const i in t){let n=t[i];n&&n.forEach&&(n=N(n)),null==n&&i in e||(e[i]=n);}return e}function E(t,n){let e=!1;for(const i in n){const o=n[i];void 0!==o&&(e=!0,Array.isArray(o)?t[i]=o.slice():t[i]=o);}return e}function I(n,e,i,o,r){if(!e.options.selectionMode)return;const s=n.vertexAttributes.get("position").data,c=n.vertexAttributes.get("size"),f=c&&c.data[0],a=i[0],l=i[1],u=((f+o)/2+4)*n.screenToWorldRatio;let m=Number.MAX_VALUE;for(let p=0;p<s.length-5;p+=3){const n=s[p],e=s[p+1],i=a-n,o=l-e,r=s[p+3]-n,c=s[p+4]-e,f=e$b((r*i+c*o)/(r*r+c*c),0,1),u=r*f-i,h=c*f-o,d=u*u+h*h;d<m&&(m=d);}m<u*u&&r();}function N(t){const n=[];return t.forEach((t=>n.push(t))),n}const P={multiply:1,ignore:2,replace:3,tint:4},U=1e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a$6 extends r$e{constructor(e,r){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=o$8,this._parameters=z(e,r),this.validateParameters(this._parameters);}dispose(){}get parameters(){return this._parameters}update(e){return !1}setParameters(e){E(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged());}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged());}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return !0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged());}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged());}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){r$c(this.repository)&&this.repository.materialChanged(this);}}const n$3={renderOccluded:1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$2(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=2*t[i];r[o]=e[f],r[o+1]=e[f+1],o+=s;}}function i$6(t,e,f,o,r){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,null==r||1===r)for(let c=0;c<i;++c){const f=3*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n;}else for(let c=0;c<i;++c){const f=3*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n;}}function c$6(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c){const f=4*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n;}else for(let c=0;c<i;++c){const f=4*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n;}}function u$3(t,e,f,o,r,s=1){if(!f)return void i$6(t,e,o,r,s);const n=o.typedBuffer,c=o.typedBufferStride,l=t.length,d=f[0],u=f[1],a=f[2],p=f[4],y=f[5],g=f[6],B=f[8],h=f[9],m=f[10],b=f[12],z=f[13],S=f[14];if(r*=c,1===s)for(let i=0;i<l;++i){const f=3*t[i],o=e[f],s=e[f+1],l=e[f+2];n[r]=d*o+p*s+B*l+b,n[r+1]=u*o+y*s+h*l+z,n[r+2]=a*o+g*s+m*l+S,r+=c;}else for(let i=0;i<l;++i){const f=3*t[i],o=e[f],l=e[f+1],k=e[f+2],F=d*o+p*l+B*k+b,v=u*o+y*l+h*k+z,q=a*o+g*l+m*k+S;for(let t=0;t<s;++t)n[r]=F,n[r+1]=v,n[r+2]=q,r+=c;}}function a$5(e,f,o,r,s,n=1){if(!o)return void i$6(e,f,r,s,n);const c=o,l=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=c[0],p=c[1],y=c[2],g=c[4],B=c[5],h=c[6],m=c[8],b=c[9],z=c[10],S=!G(c),k=1e-6,F=1-k;if(s*=d,1===n)for(let t=0;t<u;++t){const o=3*e[t],r=f[o],n=f[o+1],i=f[o+2];let c=a*r+g*n+m*i,u=p*r+B*n+b*i,v=y*r+h*n+z*i;if(S){const t=c*c+u*u+v*v;if(t<F&&t>k){const e=1/Math.sqrt(t);c*=e,u*=e,v*=e;}}l[s+0]=c,l[s+1]=u,l[s+2]=v,s+=d;}else for(let t=0;t<u;++t){const o=3*e[t],r=f[o],i=f[o+1],c=f[o+2];let u=a*r+g*i+m*c,v=p*r+B*i+b*c,q=y*r+h*i+z*c;if(S){const t=u*u+v*v+q*q;if(t<F&&t>k){const e=1/Math.sqrt(t);u*=e,v*=e,q*=e;}}for(let t=0;t<n;++t)l[s+0]=u,l[s+1]=v,l[s+2]=q,s+=d;}}function p$1(e,f,o,r,s,n=1){if(!o)return void c$6(e,f,r,s,n);const i=o,l=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=i[0],p=i[1],y=i[2],g=i[4],B=i[5],h=i[6],m=i[8],b=i[9],z=i[10],S=!G(i),k=1e-6,F=1-k;if(s*=d,1===n)for(let t=0;t<u;++t){const o=4*e[t],r=f[o],n=f[o+1],i=f[o+2],c=f[o+3];let u=a*r+g*n+m*i,v=p*r+B*n+b*i,q=y*r+h*n+z*i;if(S){const t=u*u+v*v+q*q;if(t<F&&t>k){const e=1/Math.sqrt(t);u*=e,v*=e,q*=e;}}l[s+0]=u,l[s+1]=v,l[s+2]=q,l[s+3]=c,s+=d;}else for(let t=0;t<u;++t){const o=4*e[t],r=f[o],i=f[o+1],c=f[o+2],u=f[o+3];let v=a*r+g*i+m*c,q=p*r+B*i+b*c,M=y*r+h*i+z*c;if(S){const t=v*v+q*q+M*M;if(t<F&&t>k){const e=1/Math.sqrt(t);v*=e,q*=e,M*=e;}}for(let t=0;t<n;++t)l[s+0]=v,l[s+1]=q,l[s+2]=M,l[s+3]=u,s+=d;}}function y(t,e,f,o,r,s=1){const n=o.typedBuffer,i=o.typedBufferStride,c=t.length;if(r*=i,1===s){if(4===f)for(let l=0;l<c;++l){const f=4*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i;}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i;}}else if(4===f)for(let l=0;l<c;++l){const f=4*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i;}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i;}}function g$3(t,i,c,l,d,g){for(const B of i.fieldNames){const i=t.vertexAttributes.get(B),h=t.indices.get(B);if(i&&h)switch(B){case"position":{i$c(3===i.size);const t=d.getField(B,i$d);t&&u$3(h,i.data,c,t,g);break}case"normal":{i$c(3===i.size);const t=d.getField(B,i$d);t&&a$5(h,i.data,l,t,g);break}case"uv0":{i$c(2===i.size);const t=d.getField(B,u$b);t&&n$2(h,i.data,t,g);break}case"color":{i$c(3===i.size||4===i.size);const t=d.getField(B,x$5);t&&y(h,i.data,i.size,t,g);break}case"symbolColor":{i$c(3===i.size||4===i.size);const t=d.getField(B,x$5);t&&y(h,i.data,i.size,t,g);break}case"tangent":{i$c(4===i.size);const t=d.getField(B,c$d);t&&p$1(h,i.data,l,t,g);break}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c$5(e,s){if(s.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),s.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=t$e`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=t$e`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,c=s.sliceHighlightDisabled?t$e`#define highlightSlice(_color_, _pos_) (_color_)`:t$e`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(c);}else {const i=t$e`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i);}}function l$4(e,s,i){r$6(e,s,i.slicePlane,i.origin);}function r$6(a,o,c,l){o.slicePlaneEnabled&&(r$c(c)?(l?(c$a(t$7,c.origin,l),a.setUniform3fv("slicePlaneOrigin",t$7)):a.setUniform3fv("slicePlaneOrigin",c.origin),a.setUniform3fv("slicePlaneBasis1",c.basis1),a.setUniform3fv("slicePlaneBasis2",c.basis2)):(a.setUniform3fv("slicePlaneBasis1",f$6),a.setUniform3fv("slicePlaneBasis2",f$6),a.setUniform3fv("slicePlaneOrigin",f$6)));}const t$7=n$8();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$5(a){a.vertex.code.add(t$e`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),a.vertex.code.add(t$e`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),a.vertex.code.add(t$e`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),a.vertex.code.add(t$e`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),a.vertex.code.add(t$e`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),a.vertex.code.add(t$e`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),a.vertex.code.add(t$e`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);}function c$4(e,r){if(r.screenSizePerspective){B(r.screenSizePerspective,e,"screenSizePerspective");const c=r.screenSizePerspectiveAlignment||r.screenSizePerspective;B(c,e,"screenSizePerspectiveAlignment");}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$6=r$f(1,1,0,1),o$6=r$f(1,0,1,1);function r$4(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",t$6).add("unoccludedHighlightFlag","vec4",o$6),e.fragment.code.add(t$e`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`);}function g$2(e,i){e.bindTexture(i.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,i.inverseViewport[0],i.inverseViewport[1]);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$2(e,o){o.vvInstancingEnabled&&(o.vvSize||o.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),o.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(t$e`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(t$e`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${o.vvInstancingEnabled?t$e`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(t$e`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),o.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(t$e`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${o.vvInstancingEnabled?t$e`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(t$e`vec4 vvColor() { return vec4(1.0); }`);}function o$5(v,e){e.vvSizeEnabled&&(v.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),v.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),v.setUniform3fv("vvSizeOffset",e.vvSizeOffset),v.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(v.setUniform1fv("vvColorValues",e.vvColorValues),v.setUniform4fv("vvColorColors",e.vvColorColors));}function r$3(v,e){o$5(v,e),e.vvOpacityEnabled&&(v.setUniform1fv("vvOpacityValues",e.vvOpacityValues),v.setUniform1fv("vvOpacityOpacities",e.vvOpacityOpacities));}function t$5(v,e){o$5(v,e),e.vvSizeEnabled&&(v.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),v.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d$2=.1,o$4=.001;function r$2(d,r){const e=d.fragment;switch(r.alphaDiscardMode){case 0:e.code.add(t$e`
        #define discardOrAdjustAlpha(color) { if (color.a < ${t$e.float(o$4)}) { discard; } }
      `);break;case 1:e.code.add(t$e`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:e.uniforms.add("textureAlphaCutoff","float"),e.code.add(t$e`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:d.fragment.uniforms.add("textureAlphaCutoff","float"),d.fragment.code.add(t$e`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$4(t,l){const c=t.vertex.code;l.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),l.screenSizePerspectiveEnabled&&(t.include(r$5),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),c.add(t$e`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===l.viewingMode?t$e`vec3 worldNormal = normalize(worldPos + localOrigin);`:t$e`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${l.screenSizePerspectiveEnabled?t$e`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:t$e`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):c.add(t$e`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);}function l$3(e,r,t){if(!r.verticalOffset)return;const l=c$3(r.verticalOffset,t.camera.fovY,t.camera.fullViewport[3]),i=t.camera.pixelRatio||1;e.setUniform4f("verticalOffset",l.screenLength*i,l.perDistance,l.minWorldLength,l.maxWorldLength);}function c$3(e,r,t,l=i$5){return l.screenLength=e.screenLength,l.perDistance=Math.tan(.5*r)/(.5*t),l.minWorldLength=e.minWorldLength,l.maxWorldLength=e.maxWorldLength,l}const i$5={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$1(r,t){r.fragment.uniforms.add("terrainDepthTexture","sampler2D"),r.fragment.uniforms.add("cameraNearFar","vec2"),r.fragment.uniforms.add("inverseViewport","vec2"),r.fragment.code.add(t$e`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `);}function t$3(e,r){r.multipassTerrainEnabled&&r.terrainLinearDepthTexture&&e.bindTexture(r.terrainLinearDepthTexture,"terrainDepthTexture");}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$4={func:513},n$1={func:519},f$1={mask:255},i$4={mask:0},s$3=a=>({function:{func:517,ref:a,mask:a},operation:{fail:7680,zFail:7680,zPass:7680}}),o$3=a=>({function:{func:519,ref:a,mask:a},operation:{fail:7680,zFail:7680,zPass:7681}}),c$2={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},t$2={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}},u$2={function:{func:514,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}},e$1={function:{func:517,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,o){e.fragment.include(a$b),3===o.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(t$e`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===o.output&&e.fragment.code.add(t$e`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$1(t){t.fragment.include(a$b),t.fragment.uniforms.add("uShadowMapTex","sampler2D"),t.fragment.uniforms.add("uShadowMapNum","int"),t.fragment.uniforms.add("uShadowMapDistance","vec4"),t.fragment.uniforms.add("uShadowMapMatrix","mat4",4),t.fragment.uniforms.add("uDepthHalfPixelSz","float"),t.fragment.code.add(t$e`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`);}function o$2(a,e){e.shadowMappingEnabled&&(e.shadowMap.bind(a),e.shadowMap.bindView(a,e.origin));}function i$3(a,e,t){e.shadowMappingEnabled&&e.shadowMap.bindView(a,t);}function l$2(a,e){e.shadowMappingEnabled&&e.shadowMap.bindView(a,e.origin);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a$3(a,r){0===r.output&&r.receiveShadows?(a.varyings.add("linearDepth","float"),a.vertex.code.add(t$e`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===r.output||3===r.output?(a.varyings.add("linearDepth","float"),a.vertex.uniforms.add("cameraNearFar","vec2"),a.vertex.code.add(t$e`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):a.vertex.code.add(t$e`void forwardLinearDepth() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){const a=t.fragment.code;a.add(t$e`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(t$e`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(t$e`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a$2(a,n){const r=a.fragment.code;a.include(t$9),3===n.pbrMode||4===n.pbrMode?(r.add(t$e`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${n.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(t$e`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(t$e`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(t$e`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(t$e`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==n.pbrMode&&2!==n.pbrMode||(a.include(t),r.add(t$e`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(t$e`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(t$e`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(t$e`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(t$e`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(t$e`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,e){e.attributeColor?(r.attributes.add("color","vec4"),r.varyings.add("vColor","vec4"),r.vertex.code.add(t$e`void forwardVertexColor() { vColor = color; }`),r.vertex.code.add(t$e`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):r.vertex.code.add(t$e`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s$2(){if(t$f(i$2)){const t=t=>a$d(`esri/libs/basisu/${t}`);i$2=import('./basis_transcoder-b08b7fac.js').then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))));}return i$2}let i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$1=null,i$1=null;async function a$1(){return t$f(i$1)&&(i$1=s$2(),s$1=await i$1),i$1}function o$1(t,n){if(t$f(s$1))return t.byteLength;const r=new s$1.BasisFile(new Uint8Array(t)),i=c$1(r)?l$1(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),n):0;return r.close(),r.delete(),i}function g$1(t,n){if(t$f(s$1))return t.byteLength;const r=new s$1.KTX2File(new Uint8Array(t)),i=u$1(r)?l$1(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),n):0;return r.close(),r.delete(),i}function l$1(e,t,n,s,i){const a=o$d(t?37496:37492),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(n*s*a*o)}function c$1(e){return e.getNumImages()>=1&&!e.isUASTC()}function u$1(e){return e.getFaces()>=1&&e.isETC1S()}async function m$1(t,n,r){t$f(s$1)&&(s$1=await a$1());const i=new s$1.BasisFile(new Uint8Array(r));if(!c$1(i))return null;i.startTranscoding();const o=d$1(t,n,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>i.transcodeImage(n,0,e,t,0,0)));return i.close(),i.delete(),o}async function h$1(t,n,r){t$f(s$1)&&(s$1=await a$1());const i=new s$1.KTX2File(new Uint8Array(r));if(!u$1(i))return null;i.startTranscoding();const o=d$1(t,n,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>i.transcodeImage(n,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}function d$1(e,t,r,s,i,a,o,g){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,m]=l?s?[1,37496]:[0,37492]:c?s?[3,33779]:[2,33776]:[13,6408],h=t.hasMipmap?r:Math.min(1,r),d=[];for(let n=0;n<h;n++)d.push(new Uint8Array(o(n,u))),g(n,u,d[n]);const p=d.length>1,f=p?9987:9729,w={...t,samplingMode:f,hasMipmap:p,internalFormat:m,width:i,height:a};return new o$b(e,w,{type:"compressed",levels:d})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=s$7.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),o=542327876,a=131072,i=4;function s(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function l(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const u=s("DXT1"),c=s("DXT3"),m=s("DXT5"),h=31,p=0,d=1,g=2,f=3,w=4,C=7,x=20,D=21;function b$1(e,t,n){const{textureData:o,internalFormat:a,width:i,height:s}=A(n,t.hasMipmap);return t.samplingMode=o.levels.length>1?9987:9729,t.hasMipmap=o.levels.length>1,t.internalFormat=a,t.width=i,t.height=s,new o$b(e,t,o)}function A(e,r){const s=new Int32Array(e,0,h);if(s[p]!==o)return n.error("Invalid magic number in DDS header"),null;if(!(s[x]&i))return n.error("Unsupported format, must contain a FourCC code"),null;const b=s[D];let A,M;switch(b){case u:A=8,M=33776;break;case c:A=16,M=33778;break;case m:A=16,M=33779;break;default:return n.error("Unsupported FourCC code:",l(b)),null}let v=1,F=s[w],U=s[f];0==(3&F)&&0==(3&U)||(n.warn("Rounding up compressed texture size to nearest multiple of 4."),F=F+3&-4,U=U+3&-4);const T=F,j=U;let k,y;s[g]&a&&!1!==r&&(v=Math.max(1,s[C])),1===v||o$e(F)&&o$e(U)||(n.warn("Ignoring mipmaps of non power of two sized compressed texture."),v=1);let I=s[d]+4;const S=[];for(let t=0;t<v;++t)y=(F+3>>2)*(U+3>>2)*A,k=new Uint8Array(e,I,y),S.push(k),I+=y,F=Math.max(1,F>>1),U=Math.max(1,U>>1);return {textureData:{type:"compressed",levels:S},internalFormat:M,width:T,height:j}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class b extends r$e{constructor(t,e){super(),this.data=t,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new n$d,this.params=e||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=b.estimateTexMemRequired(this.data,this.params),this.startPreload();}startPreload(){const t=this.data;t$f(t)||(t instanceof HTMLVideoElement?this.startPreloadVideoElement(t):t instanceof HTMLImageElement&&this.startPreloadImageElement(t));}startPreloadVideoElement(t){F(t.src)||"auto"===t.preload&&t.crossOrigin||(t.preload="auto",t.crossOrigin="anonymous",t.src=t.src);}startPreloadImageElement(t){G$1(t.src)||F(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src);}static getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static estimateTexMemRequired(t,e){if(t$f(t))return 0;if(o$f(t)||e$c(t))return e.encoding===b.KTX2_ENCODING?g$1(t,e.mipmap):e.encoding===b.BASIS_ENCODING?o$1(t,e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?b.getDataDimensions(t):e;return (e.mipmap?4/3:1)*r*i*(e.components||4)||0}dispose(){this.data=void 0;}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(t){var e;return {target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(e=this.params.maxAnisotropy)?e:this.params.mipmap?t.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(t,e){if(r$c(this._glTexture))return this._glTexture;if(r$c(this._loadingPromise))return this._loadingPromise;const r=this.data;return t$f(r)?(this._glTexture=new o$b(t,this.createDescriptor(t),null),this._glTexture):"string"==typeof r?this.loadFromURL(t,e,r):r instanceof Image?this.loadFromImageElement(t,e,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(t,e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(t,r,e):(o$f(r)||e$c(r))&&this.params.encoding===b.DDS_ENCODING?this.loadFromDDSData(t,r):(o$f(r)||e$c(r))&&this.params.encoding===b.KTX2_ENCODING?this.loadFromKTX2(t,r):(o$f(r)||e$c(r))&&this.params.encoding===b.BASIS_ENCODING?this.loadFromBasis(t,r):e$c(r)?this.loadFromPixelData(t,r):o$f(r)?this.loadFromPixelData(t,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(t,e,r){if(!(this.data instanceof HTMLVideoElement)||t$f(this._glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(r$c(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:s}=this._powerOfTwoStretchInfo;s.setData(this.data),this.drawStretchedTexture(t,e,r,i,s,this._glTexture);}else {const{width:t,height:e}=this.data,{width:r,height:i}=this._glTexture.descriptor;t!==r||e!==i?this._glTexture.updateData(0,0,0,Math.min(t,r),Math.min(e,i),this.data):this._glTexture.setData(this.data);}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(t,e){return this._glTexture=b$1(t,this.createDescriptor(t),e),this._glTexture}loadFromKTX2(t,e){return this.loadAsync((()=>h$1(t,this.createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}loadFromBasis(t,e){return this.loadAsync((()=>m$1(t,this.createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}loadFromPixelData(t,e){i$c(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(t);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this._glTexture=new o$b(t,r,e),this._glTexture}loadFromURL(t,e,r){return this.loadAsync((async i=>{const s=await t$h(r,{signal:i});return this.loadFromImage(t,s,e)}))}loadFromImageElement(t,e,r){return r.complete?this.loadFromImage(t,r,e):this.loadAsync((async i=>{const s=await t$i(r,r.src,!1,i);return this.loadFromImage(t,s,e)}))}loadFromVideoElement(t,e,r){return r.readyState>=2?this.loadFromImage(t,r,e):this.loadFromVideoElementAsync(t,e,r)}loadFromVideoElementAsync(t,r,i){return this.loadAsync((s=>new Promise(((a,o)=>{const l=()=>{i.removeEventListener("loadeddata",p),i.removeEventListener("error",d),s$a(c);},p=()=>{i.readyState>=2&&(l(),a(this.loadFromImage(t,i,r)));},d=t=>{l(),o(t||new s$9("Failed to load video"));};i.addEventListener("loadeddata",p),i.addEventListener("error",d);const c=j$3(s,(()=>d(m$6())));}))))}loadFromImage(t,e,r){const s=b.getDataDimensions(e);this.params.width=s.width,this.params.height=s.height;const a=this.createDescriptor(t);return a.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(t,a)||o$e(s.width)&&o$e(s.height)?(a.width=s.width,a.height=s.height,this._glTexture=new o$b(t,a,e),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(t,e,s,a,r),this._glTexture)}loadAsync(t){const e=new AbortController;this._loadingController=e;const r=t(e.signal);this._loadingPromise=r;const i=()=>{this._loadingController===e&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null);};return r.then(i,i),r}requiresPowerOfTwo(t,e){const r=33071,i="number"==typeof e.wrapMode?e.wrapMode===r:e.wrapMode.s===r&&e.wrapMode.t===r;return !n$e(t.gl)&&(e.hasMipmap||!i)}makePowerOfTwoTexture(e,r,i,a,o){const{width:n,height:h}=i,m=a$e(n),l=a$e(h);let p;switch(a.width=m,a.height=l,this.params.powerOfTwoResizeMode){case 2:a.textureCoordinateScaleFactor=[n/m,h/l],p=new o$b(e,a),p.updateData(0,0,0,n,h,r);break;case 1:case null:case void 0:p=this.stretchToPowerOfTwo(e,r,a,o());break;}return a.hasMipmap&&p.generateMipmap(),p}stretchToPowerOfTwo(t,e,r,i){const s=new o$b(t,r),a=new l$9(t,{colorTarget:0,depthStencilTarget:0},s),o=new o$b(t,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},e),n=i$8(t),h=t.getBoundFramebufferObject();return this.drawStretchedTexture(t,i,a,n,o,s),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),a.dispose()),t.bindFramebuffer(h),s}drawStretchedTexture(t,e,r,i,s,a){t.bindFramebuffer(r);const o=t.getViewport();t.setViewport(0,0,a.descriptor.width,a.descriptor.height);const n=e.program;t.useProgram(n),n.setUniform4f("color",1,1,1,1),n.bindTexture(s,"tex"),t.bindVAO(i),e.bindPipelineState(t),t.drawArrays(5,0,r$g(i,"geometry")),t.bindFramebuffer(null),t.setViewport(o.x,o.y,o.width,o.height);}unload(){if(r$c(this._powerOfTwoStretchInfo)){const{framebuffer:t,vao:e,sourceTexture:r}=this._powerOfTwoStretchInfo;e.dispose(!0),r.dispose(),t.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null;}if(r$c(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),r$c(this._loadingController)){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort();}this.events.emit("unloaded");}}b.DDS_ENCODING="image/vnd-ms.dds",b.KTX2_ENCODING="image/ktx2",b.BASIS_ENCODING="image/x.basis";

export { _ as $, d$5 as A, B, r$6 as C, j as D, A$1 as E, r as F, a$3 as G, r$2 as H, o$4 as I, r$1 as J, t$1 as K, L, M, g$2 as N, O, f$1 as P, o$3 as Q, c$2 as R, d$2 as S, T, i$9 as U, o$6 as V, l$6 as W, t$3 as X, a$7 as Y, g$7 as Z, z$1 as _, a$a as a, u$5 as a0, r$5 as a1, e$2 as a2, l$3 as a3, c$4 as a4, m$3 as a5, o$5 as a6, a$8 as a7, o$7 as a8, l$4 as a9, t$4 as aA, t$5 as aB, f$3 as aC, i$3 as aD, z as aE, E as aF, M$1 as aG, a$1 as aH, a$6 as aa, d$4 as ab, r$7 as ac, n$3 as ad, u$3 as ae, a$5 as af, y as ag, c$6 as ah, V as ai, c$7 as aj, r$3 as ak, t$2 as al, n$1 as am, e$1 as an, i$4 as ao, u$2 as ap, a$4 as aq, e$3 as ar, a$2 as as, o$2 as at, g$3 as au, h$2 as av, I as aw, P as ax, r$9 as ay, l$2 as az, t$a as b, t$b as c, n$5 as d, e$5 as e, t$c as f, t$9 as g, e$4 as h, i$8 as i, a$b as j, t$8 as k, f$2 as l, b as m, n$6 as n, o$8 as o, i$7 as p, r$8 as q, r$a as r, s$5 as s, t$e as t, u$6 as u, f$4 as v, c$5 as w, e as x, r$4 as y, s$3 as z };
