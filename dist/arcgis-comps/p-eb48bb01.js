import{A as t,c as e,ct as s,cg as i,af as r,cs as a,m as o,r as n,bb as c,aa as l,cT as h,cU as u,cV as f,ap as d,ax as p,s as v,bo as m}from"./p-e58503d5.js";import{y as g}from"./p-b9aa4901.js";import{e as x,a as S}from"./p-8f986f60.js";import{h as w,o as b,n as y,e as M,c as z,G as F}from"./p-ccdb8e80.js";import{e as P}from"./p-2c84c65f.js";import{w as T}from"./p-a3955219.js";import{P as A,u as _,c as C,y as D,g as O,k as H,M as I,e as N,o as L,_ as R,a as V,W as G,t as $}from"./p-2f398ed1.js";import{n as B}from"./p-c2152437.js";import{n as k,r as E,b as j,f as U}from"./p-d3105731.js";import{n as q,r as W}from"./p-4d38e149.js";import{P as K}from"./p-95909347.js";import{u as X,o as Z,n as Y}from"./p-0bb84768.js";import{a as J,f as Q,h as tt,o as et,l as st,r as it}from"./p-19bc1e3d.js";import{c as rt}from"./p-a24f7752.js";import{i as at}from"./p-7f47b970.js";import{r as ot,c as nt}from"./p-0d1e969a.js";import{l as ct,u as lt,h as ht}from"./p-37f005a2.js";import{c as ut,x as ft,u as dt,i as pt}from"./p-f06611ed.js";import{q as vt,w as mt,a as gt}from"./p-f94762ac.js";import{a as xt}from"./p-bdf9e611.js";class St{constructor(){this._transform=P(),this._transformInverse=new wt({value:this._transform},w,P),this._transformInverseTranspose=new wt(this._transformInverse,b,P),this._transformTranspose=new wt({value:this._transform},b,P),this._transformInverseRotation=new wt({value:this._transform},g,x)}invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){y(this._transform,t)}multiplyTransform(t){M(this._transform,this._transform,t)}set(t){y(this._transform,t),this.invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,e){this.setTransformMatrix(t),this.multiplyTransform(e),this.invalidateLazyTransforms()}}class wt{constructor(t,e,s){this.original=t,this.update=e,this.dirty=!0,this.transform=s()}invalidate(){this.dirty=!0}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}const bt=new class{constructor(t=0){this.offset=t,this.sphere=K(),this.tmpVertex=k()}applyToVertex(t,e,s){const i=this.objectTransform.transform;let r=i[0]*t+i[4]*e+i[8]*s+i[12],a=i[1]*t+i[5]*e+i[9]*s+i[13],o=i[2]*t+i[6]*e+i[10]*s+i[14];const n=this.offset/Math.sqrt(r*r+a*a+o*o);r+=r*n,a+=a*n,o+=o*n;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*r+c[4]*a+c[8]*o+c[12],this.tmpVertex[1]=c[1]*r+c[5]*a+c[9]*o+c[13],this.tmpVertex[2]=c[2]*r+c[6]*a+c[10]*o+c[14],this.tmpVertex}applyToMinMax(t,e){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i}applyToAabb(t){const e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;const s=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*s,t[4]+=t[4]*s,t[5]+=t[5]*s,t}applyToBoundingSphere(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),s=this.offset/e;return this.sphere[0]=t[0]+t[0]*s,this.sphere[1]=t[1]+t[1]*s,this.sphere[2]=t[2]+t[2]*s,this.sphere[3]=t[3]+t[3]*this.offset/e,this.sphere}};function yt(e){return t(e)?(bt.offset=e,bt):null}const Mt=new class{constructor(t=0){this.offset=t,this.componentLocalOriginLength=0,this.tmpVertex=k(),this.mbs=q(),this.obb={center:k(),halfSize:B(),quaternion:null}}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}applyToVertex(t,e,s){const i=t,r=e,a=s+this.componentLocalOriginLength,o=this.offset/Math.sqrt(i*i+r*r+a*a);return this.tmpVertex[0]=t+i*o,this.tmpVertex[1]=e+r*o,this.tmpVertex[2]=s+a*o,this.tmpVertex}applyToAabb(t){const e=t[0],s=t[1],i=t[2]+this.componentLocalOriginLength,r=t[3],a=t[4],o=t[5]+this.componentLocalOriginLength,n=this.offset/Math.sqrt(e*e+s*s+i*i);t[0]+=e*n,t[1]+=s*n,t[2]+=i*n;const c=this.offset/Math.sqrt(r*r+a*a+o*o);return t[3]+=r*c,t[4]+=a*c,t[5]+=o*c,t}applyToMbs(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),s=this.offset/e;return this.mbs[0]=t[0]+t[0]*s,this.mbs[1]=t[1]+t[1]*s,this.mbs[2]=t[2]+t[2]*s,this.mbs[3]=t[3]+t[3]*this.offset/e,this.mbs}applyToObb(t){const e=t.center,s=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);this.obb.center[0]=e[0]+e[0]*s,this.obb.center[1]=e[1]+e[1]*s,this.obb.center[2]=e[2]+e[2]*s,A(this.obb.halfSize,t.halfSize,t.quaternion),_(this.obb.halfSize,this.obb.halfSize,t.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,C(this.obb.halfSize,this.obb.halfSize,t.center),T(At,t.quaternion),A(this.obb.halfSize,this.obb.halfSize,At),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=t.quaternion,this.obb}};function zt(e){return t(e)?(Mt.offset=e,Mt):null}const Ft=new class{constructor(t=0){this.offset=t,this.tmpVertex=k()}applyToVertex(t,e,s){const i=t+this.localOrigin[0],r=e+this.localOrigin[1],a=s+this.localOrigin[2],o=this.offset/Math.sqrt(i*i+r*r+a*a);return this.tmpVertex[0]=t+i*o,this.tmpVertex[1]=e+r*o,this.tmpVertex[2]=s+a*o,this.tmpVertex}applyToAabb(t){const e=t[0]+this.localOrigin[0],s=t[1]+this.localOrigin[1],i=t[2]+this.localOrigin[2],r=t[3]+this.localOrigin[0],a=t[4]+this.localOrigin[1],o=t[5]+this.localOrigin[2],n=this.offset/Math.sqrt(e*e+s*s+i*i);t[0]+=e*n,t[1]+=s*n,t[2]+=i*n;const c=this.offset/Math.sqrt(r*r+a*a+o*o);return t[3]+=r*c,t[4]+=a*c,t[5]+=o*c,t}};function Pt(e){return t(e)?(Ft.offset=e,Ft):null}const Tt="terrain",At=S();function _t(t,...e){let s="";for(let i=0;i<e.length;i++)s+=t[i]+e[i];return s+=t[t.length-1],s}function Ct(t){t.code.add(_t`const float MAX_RGBA_FLOAT =
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
}`)}function Dt(t){t.include(Ct),t.code.add(_t`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}!function(t){t.int=function(t){return Math.round(t).toString()},t.float=function(t){return t.toPrecision(8)}}(_t||(_t={}));const Ot=e.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Ht{constructor(){this.includedModules=new Map}include(t,e){this.includedModules.has(t)?this.includedModules.get(t)!==e&&Ot.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(t,e),t(this.builder,e))}}class It extends Ht{constructor(){super(...arguments),this.vertex=new Rt,this.fragment=new Rt,this.attributes=new Vt,this.varyings=new Gt,this.extensions=new $t,this.constants=new Bt}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(t){const e=this.extensions.generateSource(t),s=this.attributes.generateSource(t),i=this.varyings.generateSource(),r="vertex"===t?this.vertex:this.fragment,a=r.uniforms.generateSource(),o=r.code.generateSource(),n="vertex"===t?Et:kt,c=this.constants.generateSource().concat(r.constants.generateSource());return`\n${e.join("\n")}\n\n${n}\n\n${c.join("\n")}\n\n${a.join("\n")}\n\n${s.join("\n")}\n\n${i.join("\n")}\n\n${o.join("\n")}`}}class Nt{constructor(){this._entries=new Map}add(t,e,s){return this._entries.set(`${t}_${e}_${s}`,{name:t,type:e,arraySize:s}),this}generateSource(){return Array.from(this._entries.values()).map((t=>`uniform ${t.type} ${t.name}${(t=>t?`[${t}]`:"")(t.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class Lt{constructor(){this._entries=new Array}add(t){this._entries.push(t)}generateSource(){return this._entries}}class Rt extends Ht{constructor(){super(...arguments),this.uniforms=new Nt,this.code=new Lt,this.constants=new Bt}get builder(){return this}}class Vt{constructor(){this._entries=new Array}add(t,e){this._entries.push([t,e])}generateSource(t){return"fragment"===t?[]:this._entries.map((t=>`attribute ${t[1]} ${t[0]};`))}}class Gt{constructor(){this._entries=new Array}add(t,e){this._entries.push([t,e])}generateSource(){return this._entries.map((t=>`varying ${t[1]} ${t[0]};`))}}class $t{constructor(){this._entries=new Set}add(t){this._entries.add(t)}generateSource(t){const e="vertex"===t?$t.ALLOWLIST_VERTEX:$t.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((t=>e.includes(t))).map((t=>`#extension ${t} : enable`))}}$t.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],$t.ALLOWLIST_VERTEX=[];class Bt{constructor(){this._entries=[]}add(t,e,s){let i="ERROR_CONSTRUCTOR_STRING";switch(e){case"float":i=Bt.numberToFloatStr(s);break;case"int":i=Bt.numberToIntStr(s);break;case"bool":i=s.toString();break;case"vec2":i=`vec2(${Bt.numberToFloatStr(s[0])},                            ${Bt.numberToFloatStr(s[1])})`;break;case"vec3":i=`vec3(${Bt.numberToFloatStr(s[0])},                            ${Bt.numberToFloatStr(s[1])},                            ${Bt.numberToFloatStr(s[2])})`;break;case"vec4":i=`vec4(${Bt.numberToFloatStr(s[0])},                            ${Bt.numberToFloatStr(s[1])},                            ${Bt.numberToFloatStr(s[2])},                            ${Bt.numberToFloatStr(s[3])})`;break;case"ivec2":i=`ivec2(${Bt.numberToIntStr(s[0])},                             ${Bt.numberToIntStr(s[1])})`;break;case"ivec3":i=`ivec3(${Bt.numberToIntStr(s[0])},                             ${Bt.numberToIntStr(s[1])},                             ${Bt.numberToIntStr(s[2])})`;break;case"ivec4":i=`ivec4(${Bt.numberToIntStr(s[0])},                             ${Bt.numberToIntStr(s[1])},                             ${Bt.numberToIntStr(s[2])},                             ${Bt.numberToIntStr(s[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${e}(${Array.prototype.map.call(s,(t=>Bt.numberToFloatStr(t))).join(", ")})`}return this._entries.push(`const ${e} ${t} = ${i};`),this}static numberToIntStr(t){return t.toFixed(0)}static numberToFloatStr(t){return Number.isInteger(t)?t.toFixed(1):t.toString()}generateSource(){return Array.from(this._entries)}}const kt="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",Et="precision highp float;\nprecision highp sampler2D;";class jt{constructor(t,e){this._module=t,this._loadModule=e}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class Ut{constructor(t,e,s=(()=>this.dispose())){this.release=s,e&&(this._config=e.snapshot()),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}dispose(){this._program=s(this._program),this._pipeline=this._config=null}reload(t){s(this._program),this._program=this.initializeProgram(t)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(t,e){}bindMaterial(t,e){}bindDraw(t){}bindPipelineState(t,e=null,s){t.setPipelineState(this.getPipelineState(e,s))}ensureAttributeLocations(t){this.program.assertCompatibleVertexAttributeLocations(t)}get primitiveType(){return 4}getPipelineState(t,e){return this._pipeline}}class qt{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const s of t)e[s]=this[s];return e}}function Wt(t={}){return(e,s)=>{var i,r;e._parameterNames=null!=(i=e._parameterNames)?i:[],e._parameterNames.push(s);const a=e._parameterNames.length-1,o=Math.ceil(Math.log2(t.count||2)),n=null!=(r=e._parameterBits)?r:[0];let c=0;for(;n[c]+o>16;)c++,c>=n.length&&n.push(0);e._parameterBits=n;const l=n[c],h=(1<<o)-1<<l;n[c]+=o,Object.defineProperty(e,s,{get(){return this[a]},set(t){if(this[a]!==t&&(this[a]=t,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~h|+t<<l&h,"number"!=typeof t&&"boolean"!=typeof t))throw"Configuration value for "+s+" must be boolean or number, got "+typeof t}})}}const Kt=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]);class Xt extends J{constructor(t,e,s){super(t,e.generateSource("vertex"),e.generateSource("fragment"),s),this._textures=new Map,this._freeTextureUnits=new i({deallocator:null}),this._fragmentUniforms=X()?e.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,e){if(r(t)||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let s=this._textures.get(e);return null==s?(s=this._allocTextureUnit(t),this._textures.set(e,s)):s.texture=t,this._context.useProgram(this),this.setUniform1i(e,s.unit),this._context.bindTexture(t,s.unit),s.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit)})),t(this._fragmentUniforms)&&this._fragmentUniforms.forEach((t=>{if(("sampler2D"===t.type||"samplerCube"===t.type)&&!this._textures.has(t.name))throw new Error(`Texture sampler ${t.name} has no bound texture`)}))}_allocTextureUnit(t){return{texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}}const Zt=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Yt=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];function Jt(t,e=Zt,s=Kt,i=-1,r=1){let a=null;return a=e===Yt?new Float32Array([i,i,0,0,r,i,1,0,i,r,0,1,r,r,1,1]):new Float32Array([i,i,r,i,i,r,r,r]),new Q(t,s,{geometry:e},{geometry:tt.createVertex(t,35044,a)})}function Qt(t,e=Zt,s=Kt){const i=new Float32Array([-1,-1,3,-1,-1,3]);return new Q(t,s,{geometry:e},{geometry:tt.createVertex(t,35044,i)})}function te(t,e=4){return new Z(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:e,height:e})}function ee(t,e,s=4){const i=new Uint8Array(s*s*4);for(let t=0;t<i.length;t+=4)i[t+0]=255*e[0],i[t+1]=255*e[1],i[t+2]=255*e[2],i[t+3]=255*e[3];return new Z(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:s,height:s},i)}function se(t){return new Z(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([255,255,255,255]))}function ie(t){t.vertex.code.add(_t`const float PI = 3.141592653589793;`),t.fragment.code.add(_t`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function re(t){t.code.add(_t`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function ae(t,e){t.vertex.code.add(e.linearDepth?_t`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`:_t`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function oe(t,e,s){t.setUniform3f("camPos",s[3]-e[0],s[7]-e[1],s[11]-e[2])}function ne(t,e){t.setUniformMatrix4fv("proj",e)}function ce(t,e){t.setUniform2fv("nearFar",e)}function le(t,e,s){z(fe,s,e),t.setUniform3fv("localOrigin",e),t.setUniformMatrix4fv("view",fe)}function he(t,e){le(t,e.origin,e.camera.viewMatrix)}function ue(t,e){t.setUniform4fv("viewport",e.camera.fullViewport)}const fe=rt();class de{constructor(t,e,s,i){this.primitiveIndices=t,this._numIndexPerPrimitive=e,this.indices=s,this.position=i,this.center=k(),at(t.length>=1),at(s.length%this._numIndexPerPrimitive==0),at(s.length>=t.length*this._numIndexPerPrimitive),at(3===i.size||4===i.size);const{data:r,size:a}=i,o=t.length;let n=a*s[this._numIndexPerPrimitive*t[0]];pe.clear(),pe.push(n),this.bbMin=E(r[n],r[n+1],r[n+2]),this.bbMax=j(this.bbMin);for(let e=0;e<o;++e){const i=this._numIndexPerPrimitive*t[e];for(let t=0;t<this._numIndexPerPrimitive;++t){n=a*s[i+t],pe.push(n);let e=r[n];this.bbMin[0]=Math.min(e,this.bbMin[0]),this.bbMax[0]=Math.max(e,this.bbMax[0]),e=r[n+1],this.bbMin[1]=Math.min(e,this.bbMin[1]),this.bbMax[1]=Math.max(e,this.bbMax[1]),e=r[n+2],this.bbMin[2]=Math.min(e,this.bbMin[2]),this.bbMax[2]=Math.max(e,this.bbMax[2])}}D(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let t=0;t<pe.length;++t){n=pe.getItemAt(t);const e=r[n]-this.center[0],s=r[n+1]-this.center[1],i=r[n+2]-this.center[2],a=e*e+s*s+i*i;if(a<=c)continue;const o=Math.sqrt(a),l=.5*(o-this.radius);this.radius=this.radius+l,c=this.radius*this.radius;const h=l/o;this.center[0]+=e*h,this.center[1]+=s*h,this.center[2]+=i*h}pe.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(O(this.bbMin,this.bbMax)>1){const t=D(k(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,s=new Uint8Array(e),i=new Array(8);for(let t=0;t<8;++t)i[t]=0;const{data:r,size:a}=this.position;for(let o=0;o<e;++o){let e=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[o];let c=a*this.indices[n],l=r[c],h=r[c+1],u=r[c+2];for(let t=1;t<this._numIndexPerPrimitive;++t){c=a*this.indices[n+t];const e=r[c],s=r[c+1],i=r[c+2];e<l&&(l=e),s<h&&(h=s),i<u&&(u=i)}l<t[0]&&(e|=1),h<t[1]&&(e|=2),u<t[2]&&(e|=4),s[o]=e,++i[e]}let o=0;for(let t=0;t<8;++t)i[t]>0&&++o;if(o<2)return;const n=new Array(8);for(let t=0;t<8;++t)n[t]=i[t]>0?new Uint32Array(i[t]):void 0;for(let t=0;t<8;++t)i[t]=0;for(let t=0;t<e;++t){const e=s[t];n[e][i[e]++]=this.primitiveIndices[t]}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==n[t]&&(this._children[t]=new de(n[t],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){pe.prune()}}const pe=new i({deallocator:null});class ve extends ot{constructor(t,e=[],s=0,i=-1){super(),this._primitiveType=s,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[e,s]of t)s&&this._vertexAttributes.set(e,{...s});if(null==e||0===e.length){const t=function(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}(this._vertexAttributes),e=ct(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const t of this._vertexAttributes.keys())this._indices.set(t,e)}else for(const[t,s]of e)s&&(this._indices.set(t,me(s)),"position"===t&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(t).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){const e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e.data=Array.from(e.data),e.exclusive=!0),e}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return r(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(t):this.computeAttachmentOriginPoints(t)}computeAttachmentOriginTriangles(t){const e=this.indices.get("position"),s=this.vertexAttributes.get("position");return lt(s,e,t)}computeAttachmentOriginPoints(t){const e=this.indices.get("position"),s=this.vertexAttributes.get("position");return ht(s,e,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.indices.get("position");if(0===t.length)return null;const e=0===this.primitiveType?3:1;at(t.length%e==0,"Indexing error: "+t.length+" not divisible by "+e);const s=ct(t.length/e),i=this.vertexAttributes.get("position");return new de(s,e,t,i)}}function me(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}function ge(t,e){return new ze(t,Fe,e)}function xe(t,e){const{curvatureDependent:s,scaleStart:i,scaleFallOffRange:r}=Fe;return new ze(t,{curvatureDependent:{min:{curvature:s.min.curvature,tiltAngle:s.min.tiltAngle,scaleFallOffFactor:Pe.curvatureDependent.min.scaleFallOffFactor},max:{curvature:s.max.curvature,tiltAngle:s.max.tiltAngle,scaleFallOffFactor:Pe.curvatureDependent.max.scaleFallOffFactor}},scaleStart:i,scaleFallOffRange:r,minPixelSize:Pe.minPixelSize},e)}function Se(t,e,s){const i=s.parameters,r=s.paddingPixelsOverride;return Te.scale=Math.min(i.divisor/(e-i.offset),1),Te.factor=function(t){return Math.abs(t*t*t)}(t),Te.minPixelSize=i.minPixelSize,Te.paddingPixels=r,Te}function we(t,e){return 0===t?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function be(t,e){return Math.max(H(t*e.scale,t,e.factor),we(t,e))}function ye(t,e,s,i){i.scale=function(t,e,s){const i=Se(t,e,s);return i.minPixelSize=0,i.paddingPixels=0,be(1,i)}(t,e,s),i.factor=0,i.minPixelSize=s.parameters.minPixelSize,i.paddingPixels=s.paddingPixelsOverride}function Me(t,e,s=[0,0]){const i=Math.min(Math.max(e.scale,we(t[1],e)/t[1]),1);return s[0]=t[0]*i,s[1]=t[1]*i,s}class ze{constructor(t,e,s,i={camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0},r){this.viewingMode=t,this.description=e,this.ellipsoidRadius=s,this.parameters=i,this._paddingPixelsOverride=r,2===this.viewingMode?(this.coverageCompensation=this.surfaceCoverageCompensationLocal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersLocal):(this.coverageCompensation=this.surfaceCoverageCompensationGlobal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersGlobal)}get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}update(t){return!(this.parameters&&this.parameters.camera.fovY===t.fovY&&this.parameters.camera.distance===t.distance||(this.calculateParameters(t,this.ellipsoidRadius,this.parameters),0))}overridePadding(t){return t!==this.paddingPixelsOverride?new ze(this.viewingMode,this.description,this.ellipsoidRadius,this.parameters,t):this}calculateParameters(t,e,s){const{scaleStart:i,scaleFallOffRange:r,minPixelSize:a}=this.description,{fovY:o,distance:n}=t,c=this.calculateCurvatureDependentParameters(t,e),l=this.coverageCompensation(t,e,c),{tiltAngle:h,scaleFallOffFactor:u}=c,f=Math.sin(h)*n,d=.5*Math.PI-h-o*(.5-i*l),p=f/Math.cos(d),v=(p-u*(f/Math.cos(d+o*r*l)))/(1-u);return s.camera.fovY=t.fovY,s.camera.distance=t.distance,s.offset=v,s.divisor=p-v,s.minPixelSize=a,s}calculateCurvatureDependentParametersLocal(t,e,s=Ae){return s.tiltAngle=this.description.curvatureDependent.min.tiltAngle,s.scaleFallOffFactor=this.description.curvatureDependent.min.scaleFallOffFactor,s}calculateCurvatureDependentParametersGlobal(t,e,s=Ae){const i=this.description.curvatureDependent,r=1+t.distance/e,a=Math.sqrt(r*r-1),[o,n]=[i.min.curvature,i.max.curvature],c=N((a-o)/(n-o),0,1),[l,h]=[i.min,i.max];return s.tiltAngle=H(l.tiltAngle,h.tiltAngle,c),s.scaleFallOffFactor=H(l.scaleFallOffFactor,h.scaleFallOffFactor,c),s}surfaceCoverageCompensationLocal(t,e,s){return(t.fovY-s.tiltAngle)/t.fovY}surfaceCoverageCompensationGlobal(t,e,s){const i=e*e,r=s.tiltAngle+.5*Math.PI,{fovY:a,distance:o}=t,n=o*o+i-2*Math.cos(r)*o*e,c=Math.sqrt(n),l=Math.sqrt(n-i);return(Math.acos(l/c)-Math.asin(e/(c/Math.sin(r)))+.5*a)/a}}const Fe={curvatureDependent:{min:{curvature:I(10),tiltAngle:I(12),scaleFallOffFactor:.5},max:{curvature:I(70),tiltAngle:I(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},Pe={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14},Te={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Ae={tiltAngle:0,scaleFallOffFactor:0};class _e{constructor(t){this._material=t.material,this._techniqueRep=t.techniqueRep,this._output=t.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(t,e,s=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(t,this._material.getTechniqueConfig(s,e),this._technique),this._technique}ensureResources(t){return 2}}class Ce extends _e{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRep,this._textureId=t.textureId,this._acquire(t.textureId).then((t=>this._texture=t)),this._acquire(t.normalTextureId).then((t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId).then((t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId).then((t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId).then((t=>this._textureMetallicRoughness=t))}dispose(){this._texture=a(this._texture),this._textureNormal=a(this._textureNormal),this._textureEmissive=a(this._textureEmissive),this._textureOcclusion=a(this._textureOcclusion),this._textureMetallicRoughness=a(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return 0===this._numLoading?2:1}updateTexture(t){(r(this._texture)||t!==this._texture.id)&&(this._texture=a(this._texture),this._textureId=t,this._acquire(this._textureId).then((t=>this._texture=t)))}bindTextures(e){t(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),t(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),t(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),t(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),t(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const s=t(this._texture)?this._texture.glTexture:null;t(s)&&s.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",s.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(t){return r(t)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(t).then((t=>this._disposed?(a(t),null):t)).finally((()=>--this._numLoading)))}}const De=gt();function Oe(t,e,s,i,r,a,o){if(!nt(e))if(t.boundingInfo)at(0===t.primitiveType),Ie(t.boundingInfo,i,r,s.tolerance,a,o);else{const e=t.indices.get("position"),s=t.vertexAttributes.get("position");Le(i,r,0,e.length/3,e,s,void 0,a,o)}}const He=k();function Ie(e,s,i,a,o,n){if(r(e))return;const c=$e(s,i,He);if(vt(De,e.getBBMin()),mt(De,e.getBBMax()),t(o)&&o.applyToAabb(De),Be(De,s,c,a)){const{primitiveIndices:t,indices:r,position:c}=e,l=t?t.length:r.length/3;if(l>Ze){const t=e.getChildren();if(void 0!==t){for(let e=0;e<8;++e)void 0!==t[e]&&Ie(t[e],s,i,a,o,n);return}}Le(s,i,0,l,r,c,t,o,n)}}const Ne=k();function Le(e,s,i,r,a,o,n,c,l){if(n)return function(e,s,i,r,a,o,n,c,l){const h=o.data,u=o.stride||o.size,f=e[0],d=e[1],p=e[2],v=s[0]-f,m=s[1]-d,g=s[2]-p;for(let e=i;e<r;++e){const s=n[e];let i=3*s,r=u*a[i++],o=h[r++],x=h[r++],S=h[r];r=u*a[i++];let w=h[r++],b=h[r++],y=h[r];r=u*a[i];let M=h[r++],z=h[r++],F=h[r];t(c)&&([o,x,S]=c.applyToVertex(o,x,S,e),[w,b,y]=c.applyToVertex(w,b,y,e),[M,z,F]=c.applyToVertex(M,z,F,e));const P=w-o,T=b-x,A=y-S,_=M-o,C=z-x,D=F-S,O=m*D-C*g,H=g*_-D*v,I=v*C-_*m,N=P*O+T*H+A*I;if(Math.abs(N)<=Number.EPSILON)continue;const L=f-o,R=d-x,V=p-S,G=L*O+R*H+V*I;if(N>0){if(G<0||G>N)continue}else if(G>0||G<N)continue;const $=R*A-T*V,B=V*P-A*L,k=L*T-P*R,E=v*$+m*B+g*k;if(N>0){if(E<0||G+E>N)continue}else if(E>0||G+E<N)continue;const j=(_*$+C*B+D*k)/N;j>=0&&l(j,Ge(P,T,A,_,C,D,Ne),s)}}(e,s,i,r,a,o,n,c,l);const h=o.data,u=o.stride||o.size,f=e[0],d=e[1],p=e[2],v=s[0]-f,m=s[1]-d,g=s[2]-p;for(let e=i,s=3*i;e<r;++e){let i=u*a[s++],r=h[i++],o=h[i++],n=h[i];i=u*a[s++];let x=h[i++],S=h[i++],w=h[i];i=u*a[s++];let b=h[i++],y=h[i++],M=h[i];t(c)&&([r,o,n]=c.applyToVertex(r,o,n,e),[x,S,w]=c.applyToVertex(x,S,w,e),[b,y,M]=c.applyToVertex(b,y,M,e));const z=x-r,F=S-o,P=w-n,T=b-r,A=y-o,_=M-n,C=m*_-A*g,D=g*T-_*v,O=v*A-T*m,H=z*C+F*D+P*O;if(Math.abs(H)<=Number.EPSILON)continue;const I=f-r,N=d-o,L=p-n,R=I*C+N*D+L*O;if(H>0){if(R<0||R>H)continue}else if(R>0||R<H)continue;const V=N*P-F*L,G=L*z-P*I,$=I*F-z*N,B=v*V+m*G+g*$;if(H>0){if(B<0||R+B>H)continue}else if(B>0||R+B<H)continue;const k=(T*V+A*G+_*$)/H;k>=0&&l(k,Ge(z,F,P,T,A,_,Ne),e)}}const Re=k(),Ve=k();function Ge(t,e,s,i,r,a,o){return L(Re,t,e,s),L(Ve,i,r,a),R(o,Re,Ve),V(o,o),o}function $e(t,e,s){return L(s,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function Be(t,e,s,i){return ke(t,e,s,i,1/0)}function ke(t,e,s,i,r){const a=(t[0]-i-e[0])*s[0],o=(t[3]+i-e[0])*s[0];let n=Math.min(a,o),c=Math.max(a,o);const l=(t[1]-i-e[1])*s[1],h=(t[4]+i-e[1])*s[1];if(c=Math.min(c,Math.max(l,h)),c<0)return!1;if(n=Math.max(n,Math.min(l,h)),n>c)return!1;const u=(t[2]-i-e[2])*s[2],f=(t[5]+i-e[2])*s[2];return c=Math.min(c,Math.max(u,f)),!(c<0)&&(n=Math.max(n,Math.min(u,f)),!(n>c)&&n<r)}function Ee(t,e,s,i,r){let a=(s.screenLength||0)*t.pixelRatio;r&&(a=function(t,e,s,i){return be(t,Se(e,s,i))}(a,i,e,r));const o=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return N(o*e,s.minWorldLength||0,null!=s.maxWorldLength?s.maxWorldLength:1/0)}function je(t,e,s){if(!t)return;const i=t.parameters;e.setUniform4f(s,i.divisor,i.offset,i.minPixelSize,t.paddingPixelsOverride)}function Ue(t,e){const s=e?Ue(e):{};for(const e in t){let i=t[e];i&&i.forEach&&(i=Ke(i)),null==i&&e in s||(s[e]=i)}return s}function qe(t,e){let s=!1;for(const i in e){const r=e[i];void 0!==r&&(s=!0,t[i]=Array.isArray(r)?r.slice():r)}return s}function We(t,e,s,i,r){if(!e.options.selectionMode)return;const a=t.vertexAttributes.get("position").data,o=t.vertexAttributes.get("size"),n=s[0],c=s[1],l=(((o&&o.data[0])+i)/2+4)*t.screenToWorldRatio;let h=Number.MAX_VALUE;for(let t=0;t<a.length-5;t+=3){const e=a[t],s=a[t+1],i=n-e,r=c-s,o=a[t+3]-e,l=a[t+4]-s,u=N((o*i+l*r)/(o*o+l*l),0,1),f=o*u-i,d=l*u-r,p=f*f+d*d;p<h&&(h=p)}h<l*l&&r()}function Ke(t){const e=[];return t.forEach((t=>e.push(t))),e}const Xe={multiply:1,ignore:2,replace:3,tint:4},Ze=1e3;class Ye extends ot{constructor(t,e){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Kt,this._parameters=Ue(t,e),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(t){return!1}setParameters(t){qe(this._parameters,t)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(t){}get visible(){return this._visible}set visible(t){t!==this._visible&&(this._visible=t,this.parametersChanged())}shouldRender(t){return this.isVisible()&&this.isVisibleInPass(t.pass)&&0!=(this.renderOccluded&t.renderOccludedMask)}isVisibleInPass(t){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(t){t!==this._renderPriority&&(this._renderPriority=t,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(t){t!==this._insertOrder&&(this._insertOrder=t,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){t(this.repository)&&this.repository.materialChanged(this)}}const Je={renderOccluded:1};function Qe(t,e,s,i){const r=s.typedBuffer,a=s.typedBufferStride,o=t.length;i*=a;for(let s=0;s<o;++s){const o=2*t[s];r[i]=e[o],r[i+1]=e[o+1],i+=a}}function ts(t,e,s,i,r){const a=s.typedBuffer,o=s.typedBufferStride,n=t.length;if(i*=o,null==r||1===r)for(let s=0;s<n;++s){const r=3*t[s];a[i]=e[r],a[i+1]=e[r+1],a[i+2]=e[r+2],i+=o}else for(let s=0;s<n;++s){const n=3*t[s];for(let t=0;t<r;++t)a[i]=e[n],a[i+1]=e[n+1],a[i+2]=e[n+2],i+=o}}function es(t,e,s,i,r=1){const a=s.typedBuffer,o=s.typedBufferStride,n=t.length;if(i*=o,1===r)for(let s=0;s<n;++s){const r=4*t[s];a[i]=e[r],a[i+1]=e[r+1],a[i+2]=e[r+2],a[i+3]=e[r+3],i+=o}else for(let s=0;s<n;++s){const n=4*t[s];for(let t=0;t<r;++t)a[i]=e[n],a[i+1]=e[n+1],a[i+2]=e[n+2],a[i+3]=e[n+3],i+=o}}function ss(t,e,s,i,r,a=1){if(!s)return void ts(t,e,i,r,a);const o=i.typedBuffer,n=i.typedBufferStride,c=t.length,l=s[0],h=s[1],u=s[2],f=s[4],d=s[5],p=s[6],v=s[8],m=s[9],g=s[10],x=s[12],S=s[13],w=s[14];if(r*=n,1===a)for(let s=0;s<c;++s){const i=3*t[s],a=e[i],c=e[i+1],b=e[i+2];o[r]=l*a+f*c+v*b+x,o[r+1]=h*a+d*c+m*b+S,o[r+2]=u*a+p*c+g*b+w,r+=n}else for(let s=0;s<c;++s){const i=3*t[s],c=e[i],b=e[i+1],y=e[i+2],M=l*c+f*b+v*y+x,z=h*c+d*b+m*y+S,F=u*c+p*b+g*y+w;for(let t=0;t<a;++t)o[r]=M,o[r+1]=z,o[r+2]=F,r+=n}}function is(t,e,s,i,r,a=1){if(!s)return void ts(t,e,i,r,a);const o=i.typedBuffer,n=i.typedBufferStride,c=t.length,l=s[0],h=s[1],u=s[2],f=s[4],d=s[5],p=s[6],v=s[8],m=s[9],g=s[10],x=!F(s),S=1e-6,w=1-S;if(r*=n,1===a)for(let s=0;s<c;++s){const i=3*t[s],a=e[i],c=e[i+1],b=e[i+2];let y=l*a+f*c+v*b,M=h*a+d*c+m*b,z=u*a+p*c+g*b;if(x){const t=y*y+M*M+z*z;if(t<w&&t>S){const e=1/Math.sqrt(t);y*=e,M*=e,z*=e}}o[r+0]=y,o[r+1]=M,o[r+2]=z,r+=n}else for(let s=0;s<c;++s){const i=3*t[s],c=e[i],b=e[i+1],y=e[i+2];let M=l*c+f*b+v*y,z=h*c+d*b+m*y,F=u*c+p*b+g*y;if(x){const t=M*M+z*z+F*F;if(t<w&&t>S){const e=1/Math.sqrt(t);M*=e,z*=e,F*=e}}for(let t=0;t<a;++t)o[r+0]=M,o[r+1]=z,o[r+2]=F,r+=n}}function rs(t,e,s,i,r,a=1){if(!s)return void es(t,e,i,r,a);const o=i.typedBuffer,n=i.typedBufferStride,c=t.length,l=s[0],h=s[1],u=s[2],f=s[4],d=s[5],p=s[6],v=s[8],m=s[9],g=s[10],x=!F(s),S=1e-6,w=1-S;if(r*=n,1===a)for(let s=0;s<c;++s){const i=4*t[s],a=e[i],c=e[i+1],b=e[i+2],y=e[i+3];let M=l*a+f*c+v*b,z=h*a+d*c+m*b,F=u*a+p*c+g*b;if(x){const t=M*M+z*z+F*F;if(t<w&&t>S){const e=1/Math.sqrt(t);M*=e,z*=e,F*=e}}o[r+0]=M,o[r+1]=z,o[r+2]=F,o[r+3]=y,r+=n}else for(let s=0;s<c;++s){const i=4*t[s],c=e[i],b=e[i+1],y=e[i+2],M=e[i+3];let z=l*c+f*b+v*y,F=h*c+d*b+m*y,P=u*c+p*b+g*y;if(x){const t=z*z+F*F+P*P;if(t<w&&t>S){const e=1/Math.sqrt(t);z*=e,F*=e,P*=e}}for(let t=0;t<a;++t)o[r+0]=z,o[r+1]=F,o[r+2]=P,o[r+3]=M,r+=n}}function as(t,e,s,i,r,a=1){const o=i.typedBuffer,n=i.typedBufferStride,c=t.length;if(r*=n,1===a){if(4===s)for(let s=0;s<c;++s){const i=4*t[s];o[r]=e[i],o[r+1]=e[i+1],o[r+2]=e[i+2],o[r+3]=e[i+3],r+=n}else if(3===s)for(let s=0;s<c;++s){const i=3*t[s];o[r]=e[i],o[r+1]=e[i+1],o[r+2]=e[i+2],o[r+3]=255,r+=n}}else if(4===s)for(let s=0;s<c;++s){const i=4*t[s];for(let t=0;t<a;++t)o[r]=e[i],o[r+1]=e[i+1],o[r+2]=e[i+2],o[r+3]=e[i+3],r+=n}else if(3===s)for(let s=0;s<c;++s){const i=3*t[s];for(let t=0;t<a;++t)o[r]=e[i],o[r+1]=e[i+1],o[r+2]=e[i+2],o[r+3]=255,r+=n}}function os(t,e,s,i,r,a){for(const o of e.fieldNames){const e=t.vertexAttributes.get(o),n=t.indices.get(o);if(e&&n)switch(o){case"position":{at(3===e.size);const t=r.getField(o,pt);t&&ss(n,e.data,s,t,a);break}case"normal":{at(3===e.size);const t=r.getField(o,pt);t&&is(n,e.data,i,t,a);break}case"uv0":{at(2===e.size);const t=r.getField(o,dt);t&&Qe(n,e.data,t,a);break}case"color":{at(3===e.size||4===e.size);const t=r.getField(o,ft);t&&as(n,e.data,e.size,t,a);break}case"symbolColor":{at(3===e.size||4===e.size);const t=r.getField(o,ft);t&&as(n,e.data,e.size,t,a);break}case"tangent":{at(4===e.size);const t=r.getField(o,ut);t&&rs(n,e.data,i,t,a);break}}}}function ns(t,e){if(e.slicePlaneEnabled){t.extensions.add("GL_OES_standard_derivatives"),e.sliceEnabledForVertexPrograms&&(t.vertex.uniforms.add("slicePlaneOrigin","vec3"),t.vertex.uniforms.add("slicePlaneBasis1","vec3"),t.vertex.uniforms.add("slicePlaneBasis2","vec3")),t.fragment.uniforms.add("slicePlaneOrigin","vec3"),t.fragment.uniforms.add("slicePlaneBasis1","vec3"),t.fragment.uniforms.add("slicePlaneBasis2","vec3");const s=_t`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=_t`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,r=e.sliceHighlightDisabled?_t`#define highlightSlice(_color_, _pos_) (_color_)`:_t`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(s),t.fragment.code.add(s),t.fragment.code.add(r)}else{const s=_t`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(s),t.fragment.code.add(s)}}function cs(t,e,s){ls(t,e,s.slicePlane,s.origin)}function ls(e,s,i,r){s.slicePlaneEnabled&&(t(i)?(r?(C(hs,i.origin,r),e.setUniform3fv("slicePlaneOrigin",hs)):e.setUniform3fv("slicePlaneOrigin",i.origin),e.setUniform3fv("slicePlaneBasis1",i.basis1),e.setUniform3fv("slicePlaneBasis2",i.basis2)):(e.setUniform3fv("slicePlaneBasis1",U),e.setUniform3fv("slicePlaneBasis2",U),e.setUniform3fv("slicePlaneOrigin",U)))}const hs=k();function us(t){t.vertex.code.add(_t`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`),t.vertex.code.add(_t`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(_t`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(_t`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(_t`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(_t`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),t.vertex.code.add(_t`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function fs(t,e){e.screenSizePerspective&&(je(e.screenSizePerspective,t,"screenSizePerspective"),je(e.screenSizePerspectiveAlignment||e.screenSizePerspective,t,"screenSizePerspectiveAlignment"))}const ds=W(1,1,0,1),ps=W(1,0,1,1);function vs(t){t.fragment.uniforms.add("depthTex","sampler2D"),t.fragment.uniforms.add("highlightViewportPixelSz","vec4"),t.fragment.constants.add("occludedHighlightFlag","vec4",ds).add("unoccludedHighlightFlag","vec4",ps),t.fragment.code.add(_t`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function ms(t,e){t.bindTexture(e.highlightDepthTexture,"depthTex"),t.setUniform4f("highlightViewportPixelSz",0,0,e.inverseViewport[0],e.inverseViewport[1])}function gs(t,e){e.vvInstancingEnabled&&(e.vvSize||e.vvColor)&&t.attributes.add("instanceFeatureAttribute","vec4"),e.vvSize?(t.vertex.uniforms.add("vvSizeMinSize","vec3"),t.vertex.uniforms.add("vvSizeMaxSize","vec3"),t.vertex.uniforms.add("vvSizeOffset","vec3"),t.vertex.uniforms.add("vvSizeFactor","vec3"),t.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),t.vertex.uniforms.add("vvSymbolAnchor","vec3"),t.vertex.code.add(_t`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),t.vertex.code.add(_t`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.vvInstancingEnabled?_t`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):t.vertex.code.add(_t`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(t.vertex.constants.add("vvColorNumber","int",8),t.vertex.code.add(_t`
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

      ${e.vvInstancingEnabled?_t`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):t.vertex.code.add(_t`vec4 vvColor() { return vec4(1.0); }`)}function xs(t,e){e.vvSizeEnabled&&(t.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),t.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),t.setUniform3fv("vvSizeOffset",e.vvSizeOffset),t.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(t.setUniform1fv("vvColorValues",e.vvColorValues),t.setUniform4fv("vvColorColors",e.vvColorColors))}function Ss(t,e){xs(t,e),e.vvOpacityEnabled&&(t.setUniform1fv("vvOpacityValues",e.vvOpacityValues),t.setUniform1fv("vvOpacityOpacities",e.vvOpacityOpacities))}function ws(t,e){xs(t,e),e.vvSizeEnabled&&(t.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),t.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix))}const bs=.1,ys=.001;function Ms(t,e){const s=t.fragment;switch(e.alphaDiscardMode){case 0:s.code.add(_t`
        #define discardOrAdjustAlpha(color) { if (color.a < ${_t.float(.001)}) { discard; } }
      `);break;case 1:s.code.add(_t`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:s.uniforms.add("textureAlphaCutoff","float"),s.code.add(_t`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:t.fragment.uniforms.add("textureAlphaCutoff","float"),t.fragment.code.add(_t`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function zs(t,e){const s=t.vertex.code;e.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),e.screenSizePerspectiveEnabled&&(t.include(us),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),s.add(_t`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===e.viewingMode?_t`vec3 worldNormal = normalize(worldPos + localOrigin);`:_t`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${e.screenSizePerspectiveEnabled?_t`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:_t`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):s.add(_t`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function Fs(t,e,s){if(!e.verticalOffset)return;const i=function(t,e,s,i=Ps){return i.screenLength=t.screenLength,i.perDistance=Math.tan(.5*e)/(.5*s),i.minWorldLength=t.minWorldLength,i.maxWorldLength=t.maxWorldLength,i}(e.verticalOffset,s.camera.fovY,s.camera.fullViewport[3]);t.setUniform4f("verticalOffset",i.screenLength*(s.camera.pixelRatio||1),i.perDistance,i.minWorldLength,i.maxWorldLength)}const Ps={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};function Ts(t,e){t.fragment.uniforms.add("terrainDepthTexture","sampler2D"),t.fragment.uniforms.add("cameraNearFar","vec2"),t.fragment.uniforms.add("inverseViewport","vec2"),t.fragment.code.add(_t`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function As(t,e){e.multipassTerrainEnabled&&e.terrainLinearDepthTexture&&t.bindTexture(e.terrainLinearDepthTexture,"terrainDepthTexture")}const _s={func:513},Cs={func:519},Ds={mask:255},Os={mask:0},Hs=t=>({function:{func:517,ref:t,mask:t},operation:{fail:7680,zFail:7680,zPass:7680}}),Is=t=>({function:{func:519,ref:t,mask:t},operation:{fail:7680,zFail:7680,zPass:7681}}),Ns={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Ls={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}},Rs={function:{func:514,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}},Vs={function:{func:517,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}};function Gs(t,e){t.fragment.include(Ct),3===e.output?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(_t`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===e.output&&t.fragment.code.add(_t`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}function $s(t){t.fragment.include(Ct),t.fragment.uniforms.add("uShadowMapTex","sampler2D"),t.fragment.uniforms.add("uShadowMapNum","int"),t.fragment.uniforms.add("uShadowMapDistance","vec4"),t.fragment.uniforms.add("uShadowMapMatrix","mat4",4),t.fragment.uniforms.add("uDepthHalfPixelSz","float"),t.fragment.code.add(_t`int chooseCascade(float _linearDepth, out mat4 mat) {
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
}`)}function Bs(t,e){e.shadowMappingEnabled&&(e.shadowMap.bind(t),e.shadowMap.bindView(t,e.origin))}function ks(t,e,s){e.shadowMappingEnabled&&e.shadowMap.bindView(t,s)}function Es(t,e){e.shadowMappingEnabled&&e.shadowMap.bindView(t,e.origin)}function js(t,e){0===e.output&&e.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(_t`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===e.output||3===e.output?(t.varyings.add("linearDepth","float"),t.vertex.uniforms.add("cameraNearFar","vec2"),t.vertex.code.add(_t`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):t.vertex.code.add(_t`void forwardLinearDepth() {}`)}function Us(t){const e=t.fragment.code;e.add(_t`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(_t`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(_t`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function qs(t,e){const s=t.fragment.code;t.include(ie),3===e.pbrMode||4===e.pbrMode?(s.add(_t`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),s.add(_t`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),s.add(_t`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),s.add(_t`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),s.add(_t`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
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
}`)):1!==e.pbrMode&&2!==e.pbrMode||(t.include(Us),s.add(_t`struct PBRShadingInfo
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
};`),s.add(_t`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),s.add(_t`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),s.add(_t`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),s.add(_t`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),s.add(_t`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Ws(t,e){e.attributeColor?(t.attributes.add("color","vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(_t`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(_t`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(_t`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}let Ks,Xs=null,Zs=null;async function Ys(){return r(Zs)&&(Zs=function(){if(r(Ks)){const t=t=>o(`esri/libs/basisu/${t}`);Ks=import("./p-f224bea9.js").then((t=>t.b)).then((({default:e})=>e({locateFile:t}).then((t=>(t.initializeBasis(),delete t.then,t)))))}return Ks}(),Xs=await Zs),Zs}function Js(t,e,s,i,r){const a=et(e?37496:37492);return Math.ceil(s*i*a*(r&&t>1?(4**t-1)/(3*4**(t-1)):1))}function Qs(t){return t.getNumImages()>=1&&!t.isUASTC()}function ti(t){return t.getFaces()>=1&&t.isETC1S()}function ei(t,e,s,i,r,a,o,n){const{compressedTextureETC:c,compressedTextureS3TC:l}=t.capabilities,[h,u]=c?i?[1,37496]:[0,37492]:l?i?[3,33779]:[2,33776]:[13,6408],f=e.hasMipmap?s:Math.min(1,s),d=[];for(let t=0;t<f;t++)d.push(new Uint8Array(o(t,h))),n(t,h,d[t]);const p=d.length>1,v=p?9987:9729,m={...e,samplingMode:v,hasMipmap:p,internalFormat:u,width:r,height:a};return new Z(t,m,{type:"compressed",levels:d})}const si=e.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function ii(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}const ri=ii("DXT1"),ai=ii("DXT3"),oi=ii("DXT5");function ni(t,e){const s=new Int32Array(t,0,31);if(542327876!==s[0])return si.error("Invalid magic number in DDS header"),null;if(!(4&s[20]))return si.error("Unsupported format, must contain a FourCC code"),null;const i=s[21];let r,a;switch(i){case ri:r=8,a=33776;break;case ai:r=16,a=33778;break;case oi:r=16,a=33779;break;default:return si.error("Unsupported FourCC code:",function(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}(i)),null}let o=1,n=s[4],c=s[3];0==(3&n)&&0==(3&c)||(si.warn("Rounding up compressed texture size to nearest multiple of 4."),n=n+3&-4,c=c+3&-4);const l=n,h=c;let u,f;131072&s[2]&&!1!==e&&(o=Math.max(1,s[7])),1===o||G(n)&&G(c)||(si.warn("Ignoring mipmaps of non power of two sized compressed texture."),o=1);let d=s[1]+4;const p=[];for(let e=0;e<o;++e)f=(n+3>>2)*(c+3>>2)*r,u=new Uint8Array(t,d,f),p.push(u),d+=f,n=Math.max(1,n>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:p},internalFormat:a,width:l,height:h}}class ci extends ot{constructor(t,e){super(),this.data=t,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new n,this.params=e||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=ci.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const t=this.data;r(t)||(t instanceof HTMLVideoElement?this.startPreloadVideoElement(t):t instanceof HTMLImageElement&&this.startPreloadImageElement(t))}startPreloadVideoElement(t){c(t.src)||"auto"===t.preload&&t.crossOrigin||(t.preload="auto",t.crossOrigin="anonymous",t.src=t.src)}startPreloadImageElement(t){l(t.src)||c(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src)}static getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static estimateTexMemRequired(t,e){if(r(t))return 0;if(h(t)||u(t))return e.encoding===ci.KTX2_ENCODING?function(t,e){if(r(Xs))return t.byteLength;const s=new Xs.KTX2File(new Uint8Array(t)),i=ti(s)?Js(s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),e):0;return s.close(),s.delete(),i}(t,e.mipmap):e.encoding===ci.BASIS_ENCODING?function(t,e){if(r(Xs))return t.byteLength;const s=new Xs.BasisFile(new Uint8Array(t)),i=Qs(s)?Js(s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),e):0;return s.close(),s.delete(),i}(t,e.mipmap):t.byteLength;const{width:s,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?ci.getDataDimensions(t):e;return(e.mipmap?4/3:1)*s*i*(e.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(t){var e;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(e=this.params.maxAnisotropy)?e:this.params.mipmap?t.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,s){if(t(this._glTexture))return this._glTexture;if(t(this._loadingPromise))return this._loadingPromise;const i=this.data;return r(i)?(this._glTexture=new Z(e,this.createDescriptor(e),null),this._glTexture):"string"==typeof i?this.loadFromURL(e,s,i):i instanceof Image?this.loadFromImageElement(e,s,i):i instanceof HTMLVideoElement?this.loadFromVideoElement(e,s,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this.loadFromImage(e,i,s):(h(i)||u(i))&&this.params.encoding===ci.DDS_ENCODING?this.loadFromDDSData(e,i):(h(i)||u(i))&&this.params.encoding===ci.KTX2_ENCODING?this.loadFromKTX2(e,i):(h(i)||u(i))&&this.params.encoding===ci.BASIS_ENCODING?this.loadFromBasis(e,i):u(i)?this.loadFromPixelData(e,i):h(i)?this.loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,s,i){if(!(this.data instanceof HTMLVideoElement)||r(this._glTexture))return i;if(this.data.readyState<2||i===this.data.currentTime)return i;if(t(this._powerOfTwoStretchInfo)){const{framebuffer:t,vao:i,sourceTexture:r}=this._powerOfTwoStretchInfo;r.setData(this.data),this.drawStretchedTexture(e,s,t,i,r,this._glTexture)}else{const{width:t,height:e}=this.data,{width:s,height:i}=this._glTexture.descriptor;t!==s||e!==i?this._glTexture.updateData(0,0,0,Math.min(t,s),Math.min(e,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(t,e){return this._glTexture=function(t,e,s){const{textureData:i,internalFormat:r,width:a,height:o}=ni(s,e.hasMipmap);return e.samplingMode=i.levels.length>1?9987:9729,e.hasMipmap=i.levels.length>1,e.internalFormat=r,e.width=a,e.height=o,new Z(t,e,i)}(t,this.createDescriptor(t),e),this._glTexture}loadFromKTX2(t,e){return this.loadAsync((()=>async function(t,e,s){r(Xs)&&(Xs=await Ys());const i=new Xs.KTX2File(new Uint8Array(s));if(!ti(i))return null;i.startTranscoding();const a=ei(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((t,e)=>i.getImageTranscodedSizeInBytes(t,0,0,e)),((t,e,s)=>i.transcodeImage(s,t,0,0,e,0,-1,-1)));return i.close(),i.delete(),a}(t,this.createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}loadFromBasis(t,e){return this.loadAsync((()=>async function(t,e,s){r(Xs)&&(Xs=await Ys());const i=new Xs.BasisFile(new Uint8Array(s));if(!Qs(i))return null;i.startTranscoding();const a=ei(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((t,e)=>i.getImageTranscodedSizeInBytes(0,t,e)),((t,e,s)=>i.transcodeImage(s,0,t,e,0,0)));return i.close(),i.delete(),a}(t,this.createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}loadFromPixelData(t,e){at(this.params.width>0&&this.params.height>0);const s=this.createDescriptor(t);return s.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,s.width=this.params.width,s.height=this.params.height,this._glTexture=new Z(t,s,e),this._glTexture}loadFromURL(t,e,s){return this.loadAsync((async i=>{const r=await xt(s,{signal:i});return this.loadFromImage(t,r,e)}))}loadFromImageElement(t,e,s){return s.complete?this.loadFromImage(t,s,e):this.loadAsync((async i=>{const r=await f(s,s.src,!1,i);return this.loadFromImage(t,r,e)}))}loadFromVideoElement(t,e,s){return s.readyState>=2?this.loadFromImage(t,s,e):this.loadFromVideoElementAsync(t,e,s)}loadFromVideoElementAsync(t,e,s){return this.loadAsync((i=>new Promise(((r,a)=>{const o=()=>{s.removeEventListener("loadeddata",n),s.removeEventListener("error",c),m(l)},n=()=>{s.readyState>=2&&(o(),r(this.loadFromImage(t,s,e)))},c=t=>{o(),a(t||new v("Failed to load video"))};s.addEventListener("loadeddata",n),s.addEventListener("error",c);const l=d(i,(()=>c(p())))}))))}loadFromImage(t,e,s){const i=ci.getDataDimensions(e);this.params.width=i.width,this.params.height=i.height;const r=this.createDescriptor(t);return r.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(t,r)||G(i.width)&&G(i.height)?(r.width=i.width,r.height=i.height,this._glTexture=new Z(t,r,e),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(t,e,i,r,s),this._glTexture)}loadAsync(t){const e=new AbortController;this._loadingController=e;const s=t(e.signal);this._loadingPromise=s;const i=()=>{this._loadingController===e&&(this._loadingController=null),this._loadingPromise===s&&(this._loadingPromise=null)};return s.then(i,i),s}requiresPowerOfTwo(t,e){const s=33071,i="number"==typeof e.wrapMode?e.wrapMode===s:e.wrapMode.s===s&&e.wrapMode.t===s;return!Y(t.gl)&&(e.hasMipmap||!i)}makePowerOfTwoTexture(t,e,s,i,r){const{width:a,height:o}=s,n=$(a),c=$(o);let l;switch(i.width=n,i.height=c,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[a/n,o/c],l=new Z(t,i),l.updateData(0,0,0,a,o,e);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(t,e,i,r())}return i.hasMipmap&&l.generateMipmap(),l}stretchToPowerOfTwo(t,e,s,i){const r=new Z(t,s),a=new st(t,{colorTarget:0,depthStencilTarget:0},r),o=new Z(t,{target:3553,pixelFormat:s.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!s.flipped,maxAnisotropy:8,preMultiplyAlpha:s.preMultiplyAlpha},e),n=Jt(t),c=t.getBoundFramebufferObject();return this.drawStretchedTexture(t,i,a,n,o,r),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),a.dispose()),t.bindFramebuffer(c),r}drawStretchedTexture(t,e,s,i,r,a){t.bindFramebuffer(s);const o=t.getViewport();t.setViewport(0,0,a.descriptor.width,a.descriptor.height);const n=e.program;t.useProgram(n),n.setUniform4f("color",1,1,1,1),n.bindTexture(r,"tex"),t.bindVAO(i),e.bindPipelineState(t),t.drawArrays(5,0,it(i,"geometry")),t.bindFramebuffer(null),t.setViewport(o.x,o.y,o.width,o.height)}unload(){if(t(this._powerOfTwoStretchInfo)){const{framebuffer:t,vao:e,sourceTexture:s}=this._powerOfTwoStretchInfo;e.dispose(!0),s.dispose(),t.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(t(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),t(this._loadingController)){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort()}this.events.emit("unloaded")}}ci.DDS_ENCODING="image/vnd-ms.dds",ci.KTX2_ENCODING="image/ktx2",ci.BASIS_ENCODING="image/x.basis";export{yt as $,Pt as A,je as B,ls as C,$e as D,Be as E,Ws as F,js as G,Ms as H,ys as I,Ts as J,$s as K,ke as L,Le as M,ms as N,Tt as O,Ds as P,Is as Q,Ns as R,bs as S,Ge as T,Zt as U,ps as V,Qt as W,As as X,de as Y,se as Z,St as _,Dt as a,ve as a0,us as a1,gs as a2,Fs as a3,fs as a4,ue as a5,xs as a6,he as a7,oe as a8,cs as a9,zs as aA,ws as aB,le as aC,ks as aD,Ue as aE,qe as aF,zt as aG,Ys as aH,Ye as aa,ye as ab,Ce as ac,Je as ad,ss as ae,is as af,as as ag,es as ah,Ee as ai,be as aj,Ss as ak,Ls as al,Cs as am,Vs as an,Os as ao,Rs as ap,_s as aq,_e as ar,qs as as,Bs as at,os as au,Oe as av,We as aw,Xe as ax,ce as ay,Es as az,qt as b,Ut as c,Xt as d,Wt as e,jt as f,ie as g,re as h,Jt as i,Ct as j,ne as k,Me as l,ci as m,It as n,Kt as o,ge as p,xe as q,ae as r,Yt as s,_t as t,ee as u,te as v,ns as w,Gs as x,vs as y,Hs as z}