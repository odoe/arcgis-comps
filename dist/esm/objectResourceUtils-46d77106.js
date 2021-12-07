import { t as t$h } from './devEnvironmentUtils-9331429c.js';
import { K as s, e as e$6, c as s$4, Q as E$2, V as e$8, aj as b$1, s as s$5, A as r$f, bv as m, af as t$j } from './messageBundle-f75b4090.js';
import { j as j$4 } from './mat3-6a23d9ad.js';
import { e as e$1 } from './quatf64-b9feea68.js';
import { h as h$3 } from './mat4-f34c6460.js';
import { e as e$2 } from './mat4f64-677a419d.js';
import { o as o$8, r as r$d, a as j$3, c as c$4, d as d$1, L as L$2, s as s$3, z as z$1, I as I$2, a0 as i$5, y as y$2 } from './mathUtils-e16f9389.js';
import { n as n$3, r as r$c, e as e$9 } from './common-d5b993de.js';
import { h as h$2, B as B$2 } from './aaBoundingBox-876621e6.js';
import { i as i$3, c as c$5, u as u$5, x as x$1, L as L$3, O as O$1, E as E$3 } from './BufferView-35ef10d7.js';
import { a as e$a, f as f$3, r as r$k, e as e$c } from './vec33-df10f43c.js';
import { l as l$5, n as n$7, r as r$h, a as r$i, b as r$j, f as f$4, e as e$b, t as t$i, o as o$9, i as i$4, c as o$a, d as n$8 } from './DefaultMaterial_COLOR_GAMMA-f230b01e.js';
import { a as a$8 } from './asyncUtils-fe35d349.js';
import { r as r$g } from './Version-9295fea2.js';
import { g as g$2, u as u$3, c as c$2, s as s$1, b as a$6, l as l$4, r as r$b, h as s$2, j as f$2, a as t$g } from './OrderIndependentTransparency-3e6c26be.js';
import { t as t$4, r as r$5, a2 as e$3, x as e$4, w as c, H as r$6, y as r$7, as as a$3, K as t$6, g as t$7, h as e$5, n as n$4, aA as t$8, G as a$4, F as r$8, I as o$5, a as a$5, J as r$9, e as e$7, b as t$9, c as t$a, d as n$5, o as o$6, k as t$b, X as t$c, ax as P$2, N as g$1, aB as t$d, a3 as l$3, B as B$1, aC as f, a8 as o$7, C as r$a, aD as i$2, P as f$1, al as t$e, R as c$3, f as t$f, aa as a$7, ai as V, av as h$1, $ as _$1, ac as r$e, S as d$2, ad as n$6, au as g$3, m as b$2, a0 as u$4 } from './Texture-1e5e4be2.js';
import { A as A$2 } from './InterleavedLayout-4358b016.js';
import { r as r$4 } from './doublePrecisionUtils-68dc07e3.js';
import { t as t$5 } from './vec3f32-109cf143.js';
import { c as c$1 } from './Texture-f0375c04.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$3(t,d){1===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(t$4`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(t$4`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===d.attributeTextureCoordinates&&t.vertex.code.add(t$4`void forwardTextureCoordinates() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$2(n,t){const e=n.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(e.uniforms.add("lightingAmbientSH0","vec3"),e.code.add(t$4`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(e.uniforms.add("lightingAmbientSH_R","vec4"),e.uniforms.add("lightingAmbientSH_G","vec4"),e.uniforms.add("lightingAmbientSH_B","vec4"),e.code.add(t$4`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(e.uniforms.add("lightingAmbientSH0","vec3"),e.uniforms.add("lightingAmbientSH_R1","vec4"),e.uniforms.add("lightingAmbientSH_G1","vec4"),e.uniforms.add("lightingAmbientSH_B1","vec4"),e.uniforms.add("lightingAmbientSH_R2","vec4"),e.uniforms.add("lightingAmbientSH_G2","vec4"),e.uniforms.add("lightingAmbientSH_B2","vec4"),e.code.add(t$4`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||e.code.add(t$4`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$1(n){const t=n.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(t$4`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i$1({code:e},i){i.doublePrecisionRequiresObfuscation?e.add(t$4`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(t$4`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);}function r$3(c){return !!s("force-double-precision-obfuscation")||c.driverTest.doublePrecisionRequiresObfuscation}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$4(e,n){n.instanced&&n.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),n.instancedDoublePrecision&&(e.vertex.include(i$1,n),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[t$4`
    vec3 calculateVPos() {
      ${n.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,t$4`
    vec3 subtractOrigin(vec3 _pos) {
      ${n.instancedDoublePrecision?t$4`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,t$4`
    vec3 dpNormal(vec4 _normal) {
      ${n.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,t$4`
    vec3 dpNormalView(vec4 _normal) {
      ${n.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,n.vertexTangents?t$4`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${n.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:t$4``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===n.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4]);}!function(e){class i{}function r(e,i){r$4(i,t$2,a$2,3),e.setUniform3fv("viewOriginHi",t$2),e.setUniform3fv("viewOriginLo",a$2);}e.Uniforms=i,e.bindCustomOrigin=r;}(o$4||(o$4={}));const t$2=n$3(),a$2=n$3();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$1(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(t$4`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u$2(u,a){u.include(t$3,a),u.fragment.code.add(t$4`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===a.attributeTextureCoordinates&&u.fragment.code.add(t$4`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===a.attributeTextureCoordinates&&(u.include(t$1),u.fragment.code.add(t$4`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=t$5(0,.6,.2);function r$2(e,t){const r=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(u$2,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(t$4`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(t$4`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(t$4`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(t$4`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(t$4`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(t$4`float getBakedOcclusion() { return 1.0; }`),r.code.add(t$4`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(t$4`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);}function a$1(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add(t$4`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$3(o){const d=t$4`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.fragment.code.add(d),o.vertex.code.add(d);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$2(o,d){0===d.normalType&&(o.attributes.add("normal","vec3"),o.vertex.code.add(t$4`vec3 normalModel() {
return normal;
}`)),1===d.normalType&&(o.include(o$3),o.attributes.add("normalCompressed","vec2"),o.vertex.code.add(t$4`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===d.normalType&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(t$4`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$1(o){o.attributes.add("position","vec3"),o.vertex.code.add(t$4`vec3 positionModel() { return position; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$2(l){l.vertex.code.add(t$4`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${t$4.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${t$4.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${t$4.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${t$4.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$1(r,l){l.symbolColor?(r.include(l$2),r.attributes.add("symbolColor","vec4"),r.varyings.add("colorMixMode","mediump float")):r.fragment.uniforms.add("colorMixMode","int"),l.symbolColor?r.vertex.code.add(t$4`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):r.vertex.code.add(t$4`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(o,r){o.include(o$1),o.vertex.include(i$1,r),o.varyings.add("vPositionWorldCameraRelative","vec3"),o.varyings.add("vPosition_view","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),o.vertex.uniforms.add("uTransform_ProjFromView","mat4"),o.vertex.code.add(t$4`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),o.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.fragment.code.add(t$4`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`);}!function(i){class m{constructor(){this.worldFromModel_RS=e$1(),this.worldFromModel_TH=n$3(),this.worldFromModel_TL=n$3();}}i.ModelTransform=m;class a{constructor(){this.worldFromView_TH=n$3(),this.worldFromView_TL=n$3(),this.viewFromCameraRelative_RS=e$1(),this.projFromView=e$2();}}function d(o,r){o.setUniformMatrix3fv("uTransform_WorldFromModel_RS",r.worldFromModel_RS),o.setUniform3fv("uTransform_WorldFromModel_TH",r.worldFromModel_TH),o.setUniform3fv("uTransform_WorldFromModel_TL",r.worldFromModel_TL);}function s(o,r){o.setUniform3fv("uTransform_WorldFromView_TH",r.worldFromView_TH),o.setUniform3fv("uTransform_WorldFromView_TL",r.worldFromView_TL),o.setUniformMatrix4fv("uTransform_ProjFromView",r.projFromView),o.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",r.viewFromCameraRelative_RS);}i.ViewProjectionTransform=a,i.bindModelTransform=d,i.bindViewProjTransform=s;}(d||(d={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$1(l,e){0===e.normalType||1===e.normalType?(l.include(o$2,e),l.varyings.add("vNormalWorld","vec3"),l.varyings.add("vNormalView","vec3"),l.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),l.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),l.vertex.code.add(t$4`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===e.normalType?(l.include(d,e),l.varyings.add("vNormalWorld","vec3"),l.vertex.code.add(t$4`
    void forwardNormal() {
      vNormalWorld = ${1===e.viewingMode?t$4`normalize(vPositionWorldCameraRelative);`:t$4`vec3(0.0, 0.0, 1.0);`}
    }
    `)):l.vertex.code.add(t$4`void forwardNormal() {}`);}!function(o){function r(o,r){o.setUniformMatrix4fv("viewNormal",r);}o.bindUniforms=r;}(l$1||(l$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u$1(u,c$1){const p=u.vertex.code,v=u.fragment.code;1!==c$1.output&&3!==c$1.output||(u.include(r$5,{linearDepth:!0}),u.include(t$3,c$1),u.include(e$3,c$1),u.include(e$4,c$1),u.include(c,c$1),u.vertex.uniforms.add("cameraNearFar","vec2"),u.varyings.add("depth","float"),c$1.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(t$4`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),u.include(r$6,c$1),v.add(t$4`
      void main(void) {
        discardBySlice(vpos);
        ${c$1.hasColorTexture?t$4`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===c$1.output&&(u.include(r$5,{linearDepth:!1}),u.include(o$2,c$1),u.include(l$1,c$1),u.include(t$3,c$1),u.include(e$3,c$1),c$1.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),u.vertex.uniforms.add("viewNormal","mat4"),u.varyings.add("vPositionView","vec3"),p.add(t$4`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===c$1.normalType?t$4`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),u.include(c,c$1),u.include(r$6,c$1),v.add(t$4`
      void main() {
        discardBySlice(vpos);
        ${c$1.hasColorTexture?t$4`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===c$1.normalType?t$4`
            vec3 normal = screenDerivativeNormal(vPositionView);`:t$4`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===c$1.output&&(u.include(r$5,{linearDepth:!1}),u.include(t$3,c$1),u.include(e$3,c$1),c$1.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(t$4`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),u.include(c,c$1),u.include(r$6,c$1),u.include(r$7),v.add(t$4`
      void main() {
        discardBySlice(vpos);
        ${c$1.hasColorTexture?t$4`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,a){const r=n.fragment;a.vertexTangents?(n.attributes.add("tangent","vec4"),n.varyings.add("vTangent","vec4"),2===a.doubleSidedMode?r.code.add(t$4`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(t$4`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(n.extensions.add("GL_OES_standard_derivatives"),r.code.add(t$4`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==a.attributeTextureCoordinates&&(n.include(u$2,a),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(t$4`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${a.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o,t){const r=o.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(t$4`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(t$4`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(l,d){const c=l.fragment;l.include(n$1),l.include(o,d),0!==d.pbrMode&&l.include(a$3,d),l.include(n$2,d),d.receiveShadows&&l.include(t$6,d),c.uniforms.add("lightingGlobalFactor","float"),c.uniforms.add("ambientBoostFactor","float"),l.include(t$7),c.code.add(t$4`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===d.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),c.code.add(t$4`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===d.viewingMode?t$4`normalize(vPosWorld)`:t$4`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),c.code.add(t$4`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===d.pbrMode||4===d.pbrMode?c.code.add(t$4`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==d.pbrMode&&2!==d.pbrMode||(c.code.add(t$4`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),c.code.add(t$4`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),c.code.add(t$4`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),c.code.add(t$4`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),c.code.add(t$4`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===d.pbrMode?t$4`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:t$4`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,e){const m=r.fragment;m.code.add(t$4`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===e.doubleSidedMode?m.code.add(t$4`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===e.doubleSidedMode?m.code.add(t$4`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):m.code.add(t$4`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(u,o){const r=t$4`
  /*
  *  ${o.name}
  *  ${0===o.output?"RenderOutput: Color":1===o.output?"RenderOutput: Depth":3===o.output?"RenderOutput: Shadow":2===o.output?"RenderOutput: Normal":4===o.output?"RenderOutput: Highlight":""}
  */
  `;c$1()&&(u.fragment.code.add(r),u.vertex.code.add(r));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(i){i.include(e$5),i.code.add(t$4`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${t$4.int(1)}) {
        return allMixed;
      }
      else if (mode == ${t$4.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${t$4.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${t$4.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${t$4.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function P$1(P){const _=new n$4,S=_.vertex.code,$=_.fragment.code;return _.include(u,{name:"Default Material Shader",output:P.output}),_.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),_.include(o$1),_.varyings.add("vpos","vec3"),_.include(e$3,P),_.include(o$4,P),_.include(t$8,P),0!==P.output&&7!==P.output||(_.include(o$2,P),_.include(r$5,{linearDepth:!1}),0===P.normalType&&P.offsetBackfaces&&_.include(e),_.include(n,P),_.include(l$1,P),P.instancedColor&&_.attributes.add("instanceColor","vec4"),_.varyings.add("localvpos","vec3"),_.include(t$3,P),_.include(a$4,P),_.include(r$1,P),_.include(r$8,P),_.vertex.uniforms.add("externalColor","vec4"),_.varyings.add("vcolorExt","vec4"),P.multipassTerrainEnabled&&_.varyings.add("depth","float"),S.add(t$4`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${P.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${t$4.float(o$5)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===P.normalType?t$4`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${P.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===P.normalType&&P.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${P.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===P.output&&(_.include(c,P),_.include(r$6,P),P.multipassTerrainEnabled&&(_.fragment.include(a$5),_.include(r$9,P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.fragment.include(i),$.add(t$4`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?t$4`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$4`vec4 texColor = vec4(1.0);`}
        ${P.attributeColor?t$4`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$4`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===P.output&&(_.include(c,P),_.include(l,P),_.include(o,P),_.include(r$6,P),P.receiveShadows&&_.include(t$6,P),P.multipassTerrainEnabled&&(_.fragment.include(a$5),_.include(r$9,P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.include(r$2,P),_.include(a$3,P),_.fragment.include(i),_.include(r,P),$.add(t$4`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?t$4`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$4`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===P.normalType?t$4`
        vec3 normal = screenDerivativeNormal(localvpos);`:t$4`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===P.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${P.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===P.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${P.attributeColor?t$4`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$4`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${P.hasNormalTexture?t$4`
              mat3 tangentSpace = ${P.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===P.pbrMode||2===P.pbrMode?1===P.viewingMode?t$4`vec3 normalGround = normalize(vpos + localOrigin);`:t$4`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:t$4``}
        ${1===P.pbrMode||2===P.pbrMode?t$4`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${P.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),_.include(u$1,P),_}const _=Object.freeze({__proto__:null,build:P$1});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class R extends t$a{initializeProgram(e){const t=R.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:r$3(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new n$5(e.rctx,i,o$6)}bindPass(e,t){var r,i;t$b(this.program,t.camera.projectionMatrix);const l=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===l)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),t$c(this.program,t)),7===l&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",P$2[e.colorMixMode])),0===l?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",P$2[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&a$1(this.program,e,this.configuration.isSchematic)):4===l&&g$1(this.program,t),t$d(this.program,e),l$3(this.program,e,t),B$1(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera);}bindDraw(e){const o=this.configuration.instancedDoublePrecision?r$c(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;f(this.program,o,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&o$7(this.program,o,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&o$4.bindCustomOrigin(this.program,o),r$a(this.program,this.configuration,e.slicePlane,o),0===this.configuration.output&&i$2(this.program,e,o);}setPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return g$2({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?u$3:c$2(e),culling:L$1(r)&&s$1(r.cullFace),depthTest:{func:a$6(e)},depthWrite:i||o?r.writeDepth&&l$4:null,colorWrite:r$b,stencilWrite:r.sceneHasOcludees?f$1:null,stencilTest:r.sceneHasOcludees?t?t$e:c$3:null,polygonOffset:i||o?null:s$2(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function L$1(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&(!e.transparent&&!e.doubleSidedMode)}R.shader=new t$f(_,(()=>import('./DefaultMaterial.glsl-0b359971.js')));class H$1 extends t$9{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1;}}e$6([e$7({count:8})],H$1.prototype,"output",void 0),e$6([e$7({count:4})],H$1.prototype,"alphaDiscardMode",void 0),e$6([e$7({count:3})],H$1.prototype,"doubleSidedMode",void 0),e$6([e$7()],H$1.prototype,"isSchematic",void 0),e$6([e$7()],H$1.prototype,"vertexColors",void 0),e$6([e$7()],H$1.prototype,"offsetBackfaces",void 0),e$6([e$7()],H$1.prototype,"symbolColors",void 0),e$6([e$7()],H$1.prototype,"vvSize",void 0),e$6([e$7()],H$1.prototype,"vvColor",void 0),e$6([e$7()],H$1.prototype,"verticalOffset",void 0),e$6([e$7()],H$1.prototype,"receiveShadows",void 0),e$6([e$7()],H$1.prototype,"slicePlaneEnabled",void 0),e$6([e$7()],H$1.prototype,"sliceHighlightDisabled",void 0),e$6([e$7()],H$1.prototype,"receiveAmbientOcclusion",void 0),e$6([e$7()],H$1.prototype,"screenSizePerspective",void 0),e$6([e$7()],H$1.prototype,"textureAlphaPremultiplied",void 0),e$6([e$7()],H$1.prototype,"hasColorTexture",void 0),e$6([e$7()],H$1.prototype,"usePBR",void 0),e$6([e$7()],H$1.prototype,"hasMetalnessAndRoughnessTexture",void 0),e$6([e$7()],H$1.prototype,"hasEmissionTexture",void 0),e$6([e$7()],H$1.prototype,"hasOcclusionTexture",void 0),e$6([e$7()],H$1.prototype,"hasNormalTexture",void 0),e$6([e$7()],H$1.prototype,"instanced",void 0),e$6([e$7()],H$1.prototype,"instancedColor",void 0),e$6([e$7()],H$1.prototype,"instancedDoublePrecision",void 0),e$6([e$7()],H$1.prototype,"vertexTangents",void 0),e$6([e$7()],H$1.prototype,"normalsTypeDerivate",void 0),e$6([e$7()],H$1.prototype,"writeDepth",void 0),e$6([e$7()],H$1.prototype,"sceneHasOcludees",void 0),e$6([e$7()],H$1.prototype,"transparent",void 0),e$6([e$7()],H$1.prototype,"enableOffset",void 0),e$6([e$7({count:3})],H$1.prototype,"cullFace",void 0),e$6([e$7({count:4})],H$1.prototype,"transparencyPassType",void 0),e$6([e$7()],H$1.prototype,"multipassTerrainEnabled",void 0),e$6([e$7()],H$1.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function j$2(j){const E=new n$4,O=E.vertex.code,_=E.fragment.code;return E.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),E.include(o$1),E.varyings.add("vpos","vec3"),E.include(e$3,j),E.include(o$4,j),E.include(t$8,j),0!==j.output&&7!==j.output||(E.include(o$2,j),E.include(r$5,{linearDepth:!1}),j.offsetBackfaces&&E.include(e),j.instancedColor&&E.attributes.add("instanceColor","vec4"),E.varyings.add("vNormalWorld","vec3"),E.varyings.add("localvpos","vec3"),j.multipassTerrainEnabled&&E.varyings.add("depth","float"),E.include(t$3,j),E.include(a$4,j),E.include(r$1,j),E.include(r$8,j),E.vertex.uniforms.add("externalColor","vec4"),E.varyings.add("vcolorExt","vec4"),O.add(t$4`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${j.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${t$4.float(o$5)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${j.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${j.multipassTerrainEnabled?t$4`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===j.output&&(E.include(c,j),E.include(r$6,j),j.multipassTerrainEnabled&&(E.fragment.include(a$5),E.include(r$9,j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.fragment.include(i),_.add(t$4`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?t$4`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?t$4`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$4`vec4 texColor = vec4(1.0);`}
        ${j.attributeColor?t$4`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$4`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===j.output&&(E.include(c,j),E.include(l,j),E.include(o,j),E.include(r$6,j),j.receiveShadows&&E.include(t$6,j),j.multipassTerrainEnabled&&(E.fragment.include(a$5),E.include(r$9,j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.include(r$2,j),E.include(a$3,j),E.fragment.include(i),_.add(t$4`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?t$4`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?t$4`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$4`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===j.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${j.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===j.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${j.attributeColor?t$4`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$4`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t$4`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===j.pbrMode||2===j.pbrMode?1===j.viewingMode?t$4`vec3 normalGround = normalize(vpos + localOrigin);`:t$4`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:t$4``}
        ${1===j.pbrMode||2===j.pbrMode?t$4`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${j.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),E.include(u$1,j),E}const E$1=Object.freeze({__proto__:null,build:j$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a extends R{initializeProgram(e){const s=a.shader.get(),t=this.configuration,l=s.build({OITEnabled:0===t.transparencyPassType,output:t.output,viewingMode:e.viewingMode,receiveShadows:t.receiveShadows,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:t.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:t.symbolColors,vvSize:t.vvSize,vvColor:t.vvColor,vvInstancingEnabled:!0,instanced:t.instanced,instancedColor:t.instancedColor,instancedDoublePrecision:t.instancedDoublePrecision,pbrMode:t.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:t.hasColorTexture,receiveAmbientOcclusion:t.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:t.hasColorTexture?1:0,textureAlphaPremultiplied:t.textureAlphaPremultiplied,attributeColor:t.vertexColors,screenSizePerspectiveEnabled:t.screenSizePerspective,verticalOffsetEnabled:t.verticalOffset,offsetBackfaces:t.offsetBackfaces,doublePrecisionRequiresObfuscation:r$3(e.rctx),alphaDiscardMode:t.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:t.multipassTerrainEnabled,cullAboveGround:t.cullAboveGround});return new n$5(e.rctx,l,o$6)}}a.shader=new t$f(E$1,(()=>import('./RealisticTree.glsl-c2760f4c.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class y$1 extends a$7{constructor(e){super(e,P),this.supportsEdges=!0,this.techniqueConfig=new H$1,this.vertexBufferLayout=w$1(this.parameters),this.instanceBufferLayout=e.instanced?E(this.parameters):null;}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return !1;const t=e.instanced,i=e.vertexColors,s=e.symbolColors,r=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,o=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(r||a||s)?!!n||o:i?n?l:o:r||a||s?!!n||o:n?l:o}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<f$2),this.techniqueConfig}intersect(e,c,u,h,d,p,m){if(null!==this.parameters.verticalOffset){const e=h.camera;o$8(j$1,u[12],u[13],u[14]);let c=null;switch(h.viewingMode){case 1:c=j$3(D,j$1);break;case 2:c=r$d(D,A$1);}let m=0;if(null!==this.parameters.verticalOffset){const t=c$4(L,j$1,e.eye),i=s$3(t),s=d$1(t,t,1/i);let l=null;this.parameters.screenSizePerspective&&(l=z$1(c,s)),m+=V(e,i,this.parameters.verticalOffset,l,this.parameters.screenSizePerspective);}d$1(c,c,m),L$2(z,c,h.transform.inverseRotation),d=c$4(I$1,d,z),p=c$4(B,p,z);}h$1(e,c,h,d,p,_$1(h.verticalOffset),m);}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new O(e):null}createBufferWriter(){return new M$1(this.vertexBufferLayout,this.instanceBufferLayout)}}class O extends r$e{constructor(e){super({...e,...e.material.parameters});}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?a:R,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled});}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees});}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program);}}const P={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:e$1(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:d$2,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...n$6};class M$1{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t;}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,i,s){g$3(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,s);}}function w$1(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=A$2().vec3f("position").vec3f("normal");return e.vertexTangents&&i.vec4f("tangent"),t&&i.vec2f("uv0"),e.vertexColors&&i.vec4u8("color"),e.symbolColors&&i.vec4u8("symbolColor"),i}function E(e){let t=A$2();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}const I$1=n$3(),B=n$3(),A$1=r$c(0,0,1),D=n$3(),z=n$3(),j$1=n$3(),L=n$3();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=s$4.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function x(e,t){const r=await g(e,t);return {resource:r,textures:await A(r.textureDefinitions,t)}}async function g(r,n){const i=r$f(n)&&n.streamDataRequester;if(i)return h(r,i,n);const u=await a$8(E$2(r,e$8(n)));if(!0===u.ok)return u.value.data;b$1(u.error),w(u.error);}async function h(e,r,n){const a=await a$8(r.request(e,"json",n));if(!0===a.ok)return a.value;b$1(a.error),w(a.error.details.url);}function w(e){throw new s$5("",`Request for object resource failed: ${e}`)}function v(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(y.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(y.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(y.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(y.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1);}}else y.warn("Indexed geometries must specify faces"),n=!1;break}default:y.warn(`Unsupported topology '${r}'`),n=!1;}e.params.material||(y.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const s in a){a[s].values||(y.warn("Geometries with externally defined attributes are not yet supported"),n=!1);}return n}function b(e,t){const r=[],n=[],s=[],o=[],l=e.resource,c=r$g.parse(l.version||"1.0","wosr");I.validate(c);const p=l.model.name,y=l.model.geometries,x=l.materialDefinitions,g=e.textures;let h=0;const w=new Map;for(let i=0;i<y.length;i++){const e=y[i];if(!v(e))continue;const l=M(e),c=e.params.vertexAttributes,p=[];for(const t in c){const e=c[t],r=e.values;p.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}]);}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)]);}const j=g&&g[l.texture];if(j&&!w.has(l.texture)){const{image:e,params:t}=j,r=new b$2(e,t);o.push(r),w.set(l.texture,r);}const A=w.get(l.texture),I=A?A.id:void 0;let P=s[l.material]?s[l.material][l.texture]:null;if(!P){const e=x[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=j&&j.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=j?U(j.alphaChannelUsage):void 0,i={ambient:e$9(e.diffuse),diffuse:e$9(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:I,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!j&&!!j.params.preMultiplyAlpha};r$f(t)&&t.materialParamsMixin&&Object.assign(i,t.materialParamsMixin),P=new y$1(i),s[l.material]||(s[l.material]={}),s[l.material][l.texture]=P;}n.push(P);const T=new u$4(p,b);h+=b.position?b.position.length:0,r.push(T);}return {name:p,stageResources:{textures:o,materials:n,geometries:r},pivotOffset:l.model.pivotOffset,boundingBox:j(r),numberOfVertices:h,lodThreshold:null}}function j(e){const t=B$2();return e.forEach((e=>{const r=e.boundingInfo;r$f(r)&&(h$2(t,r.getBBMin()),h$2(t,r.getBBMax()));})),t}async function A(e,t){const r=[];for(const o in e){const n=e[o],s=n.images[0].data;if(!s){y.warn("Externally referenced texture data is not yet supported");continue}const i=n.encoding+";base64,"+s,u="/textureDefinitions/"+o,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==U(l)},m=r$f(t)&&t.disableTextures?Promise.resolve(null):t$g(i,t);r.push(m.then((e=>({refId:u,image:e,params:c,alphaChannelUsage:l}))));}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function U(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function M(e){const t=e.params;return {id:1,material:t.material,texture:t.texture,region:t.texture}}const I=new r$g(1,2,"wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function $(s,o){const i=q(t$h(s));if("wosr"===i.fileType){const e=await(o.cache?o.cache.loadWOSR(i.url,o):x(i.url,o)),t=b(e,o);return {lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(o.cache?o.cache.loadGLTF(i.url,o,o.usePBR):l$5(new n$7(o.streamDataRequester),i.url,o,o.usePBR)),u=m(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&r$f(u)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&J(a,u);const n=a.meta.isEsriSymbolResource?{usePBR:o.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:o.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},l={...o.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=K(a,n,l,i.specifiedLodIndex);let t=e[0].boundingBox;if(0!==i.specifiedLodIndex){t=K(a,n,l,0)[0].boundingBox;}return {lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const c=K(a,n,l);return {lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function q(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return {fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function K(e,t,s,a){const u=e.model,n=e$1(),l=new Array,c=new Map,m=new Map;return u.lods.forEach(((e,i)=>{if(void 0!==a&&i!==a)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:r$f(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:B$2()};l.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=u.materials.get(e.material),l=r$f(e.attributes.texCoord0),f=r$f(e.attributes.normal),p=Q(a.alphaMode);if(!c.has(i)){if(l){if(r$f(a.textureColor)&&!m.has(a.textureColor)){const e=u.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:1!==p};m.set(a.textureColor,new b$2(e.data,t));}if(r$f(a.textureNormal)&&!m.has(a.textureNormal)){const e=u.textures.get(a.textureNormal);m.set(a.textureNormal,new b$2(e.data,e.parameters));}if(r$f(a.textureOcclusion)&&!m.has(a.textureOcclusion)){const e=u.textures.get(a.textureOcclusion);m.set(a.textureOcclusion,new b$2(e.data,e.parameters));}if(r$f(a.textureEmissive)&&!m.has(a.textureEmissive)){const e=u.textures.get(a.textureEmissive);m.set(a.textureEmissive,new b$2(e.data,e.parameters));}if(r$f(a.textureMetallicRoughness)&&!m.has(a.textureMetallicRoughness)){const e=u.textures.get(a.textureMetallicRoughness);m.set(a.textureMetallicRoughness,new b$2(e.data,e.parameters));}}const o=a.color[0]**(1/o$9),n=a.color[1]**(1/o$9),d=a.color[2]**(1/o$9),x=a.emissiveFactor[0]**(1/o$9),g=a.emissiveFactor[1]**(1/o$9),h=a.emissiveFactor[2]**(1/o$9),b=r$f(a.textureColor)&&l?m.get(a.textureColor):null;c.set(i,new y$1({...t,transparent:0===p,textureAlphaMode:p,textureAlphaCutoff:a.alphaCutoff,diffuse:[o,n,d],ambient:[o,n,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:f?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:r$f(b)?b.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:r$f(a.textureNormal)&&l?m.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:r$f(b)&&!!b.params.preMultiplyAlpha,occlusionTextureId:r$f(a.textureOcclusion)&&l?m.get(a.textureOcclusion).id:void 0,emissiveTextureId:r$f(a.textureEmissive)&&l?m.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:r$f(a.textureMetallicRoughness)&&l?m.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[x,g,h],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...s}));}const x=H(e.indices||e.attributes.position.count,e.primitiveType),O=e.attributes.position.count,F=r$h(i$3,O);e$a(F,e.attributes.position,e.transform);const A=[["position",{data:F.typedBuffer,size:F.elementCount,exclusive:!0}]],I=[["position",x]];if(r$f(e.attributes.normal)){const t=r$h(i$3,O);j$4(n,e.transform),f$3(t,e.attributes.normal,n),A.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["normal",x]);}if(r$f(e.attributes.tangent)){const t=r$h(c$5,O);j$4(n,e.transform),r$i(t,e.attributes.tangent,n),A.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["tangent",x]);}if(r$f(e.attributes.texCoord0)){const t=r$h(u$5,O);r$j(t,e.attributes.texCoord0),A.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["uv0",x]);}if(r$f(e.attributes.color)){const t=r$h(x$1,O);if(4===e.attributes.color.elementCount)e.attributes.color instanceof c$5?f$4(t,e.attributes.color,255):e.attributes.color instanceof x$1?e$b(t,e.attributes.color):e.attributes.color instanceof L$3&&f$4(t,e.attributes.color,1/256);else {t$i(t,255,255,255,255);const r=new O$1(t.buffer,0,4);e.attributes.color instanceof i$3?r$k(r,e.attributes.color,255):e.attributes.color instanceof O$1?e$c(r,e.attributes.color):e.attributes.color instanceof E$3&&r$k(r,e.attributes.color,1/256);}A.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["color",x]);}const k=new u$4(A,I);d.stageResources.geometries.push(k),d.stageResources.materials.push(c.get(i)),l&&(r$f(a.textureColor)&&d.stageResources.textures.push(m.get(a.textureColor)),r$f(a.textureNormal)&&d.stageResources.textures.push(m.get(a.textureNormal)),r$f(a.textureOcclusion)&&d.stageResources.textures.push(m.get(a.textureOcclusion)),r$f(a.textureEmissive)&&d.stageResources.textures.push(m.get(a.textureEmissive)),r$f(a.textureMetallicRoughness)&&d.stageResources.textures.push(m.get(a.textureMetallicRoughness))),d.numberOfVertices+=O;const L=k.boundingInfo;r$f(L)&&(h$2(d.boundingBox,L.getBBMin()),h$2(d.boundingBox,L.getBBMax()));}));})),l}function Q(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}function H(e,t){switch(t){case 4:return n$8(e);case 5:return o$a(e);case 6:return i$4(e)}}function J(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if(t$j(o))return;const x=i.attributes.position,g=x.count,b=n$3(),v=n$3(),y=n$3(),B=r$h(x$1,g),M=r$h(i$3,g),w=h$3(e$2(),i.transform);for(let s=0;s<g;s++){x.getVec(s,v),o.getVec(s,b),I$2(v,v,i.transform),c$4(y,v,t.center),i$5(y,y,t.radius);const a=y[2],u=s$3(y),p=Math.min(.45+.55*u*u,1);i$5(y,y,t.radius),I$2(y,y,w),j$3(y,y),r+1!==e.model.lods.length&&e.model.lods.length>1&&y$2(y,y,b,a>-1?.2:Math.min(-4*a-3.8,1)),M.setVec(s,y),B.set(s,0,255*p),B.set(s,1,255*p),B.set(s,2,255*p),B.set(s,3,255);}i.attributes.normal=M,i.attributes.color=B;}}}

const objectResourceUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    fetch: $,
    gltfToEngineResources: K,
    parseUrl: q
});

export { $, E, P$1 as P, n$2 as a, l$2 as b, l$1 as c, d, u$2 as e, t$1 as f, n as g, a$1 as h, i, r$3 as j, i$1 as k, l, o as m, n$1 as n, o$1 as o, r as p, t as q, r$2 as r, j$2 as s, t$3 as t, u, objectResourceUtils as v, x, y$1 as y };
