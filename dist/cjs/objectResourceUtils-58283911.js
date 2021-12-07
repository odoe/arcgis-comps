'use strict';

const devEnvironmentUtils = require('./devEnvironmentUtils-aafb5541.js');
const request = require('./messageBundle-8be88d04.js');
const mat3 = require('./mat3-1d3e0d51.js');
const quatf64 = require('./quatf64-e7a7f39e.js');
const mat4 = require('./mat4-f68486bc.js');
const mat4f64 = require('./mat4f64-fc3339e5.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const common = require('./common-41a349f2.js');
const aaBoundingBox = require('./aaBoundingBox-c372701a.js');
const BufferView = require('./BufferView-b78db189.js');
const vec33 = require('./vec33-1fc512be.js');
const DefaultMaterial_COLOR_GAMMA = require('./DefaultMaterial_COLOR_GAMMA-1f86519d.js');
const asyncUtils = require('./asyncUtils-cd78b718.js');
const Version = require('./Version-55b8a4e7.js');
const OrderIndependentTransparency = require('./OrderIndependentTransparency-866eb67c.js');
const Texture = require('./Texture-16b1a373.js');
const InterleavedLayout = require('./InterleavedLayout-4132788d.js');
const doublePrecisionUtils = require('./doublePrecisionUtils-26ddcbaf.js');
const vec3f32 = require('./vec3f32-5485293e.js');
const Texture$1 = require('./Texture-95d9d662.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$3(t,d){1===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(Texture.t`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(Texture.t`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===d.attributeTextureCoordinates&&t.vertex.code.add(Texture.t`void forwardTextureCoordinates() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$2(n,t){const e=n.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(e.uniforms.add("lightingAmbientSH0","vec3"),e.code.add(Texture.t`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(e.uniforms.add("lightingAmbientSH_R","vec4"),e.uniforms.add("lightingAmbientSH_G","vec4"),e.uniforms.add("lightingAmbientSH_B","vec4"),e.code.add(Texture.t`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===a&&(e.uniforms.add("lightingAmbientSH0","vec3"),e.uniforms.add("lightingAmbientSH_R1","vec4"),e.uniforms.add("lightingAmbientSH_G1","vec4"),e.uniforms.add("lightingAmbientSH_B1","vec4"),e.uniforms.add("lightingAmbientSH_R2","vec4"),e.uniforms.add("lightingAmbientSH_G2","vec4"),e.uniforms.add("lightingAmbientSH_B2","vec4"),e.code.add(Texture.t`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),1!==t.pbrMode&&2!==t.pbrMode||e.code.add(Texture.t`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$1(n){const t=n.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(Texture.t`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i$1({code:e},i){i.doublePrecisionRequiresObfuscation?e.add(Texture.t`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(Texture.t`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);}function r$3(c){return !!request.s$3("force-double-precision-obfuscation")||c.driverTest.doublePrecisionRequiresObfuscation}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$4(e,n){n.instanced&&n.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),n.instancedDoublePrecision&&(e.vertex.include(i$1,n),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[Texture.t`
    vec3 calculateVPos() {
      ${n.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,Texture.t`
    vec3 subtractOrigin(vec3 _pos) {
      ${n.instancedDoublePrecision?Texture.t`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,Texture.t`
    vec3 dpNormal(vec4 _normal) {
      ${n.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,Texture.t`
    vec3 dpNormalView(vec4 _normal) {
      ${n.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,n.vertexTangents?Texture.t`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${n.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:Texture.t``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===n.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4]);}!function(e){class i{}function r(e,i){doublePrecisionUtils.r(i,t$2,a$2,3),e.setUniform3fv("viewOriginHi",t$2),e.setUniform3fv("viewOriginLo",a$2);}e.Uniforms=i,e.bindCustomOrigin=r;}(o$4||(o$4={}));const t$2=common.n(),a$2=common.n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$1(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(Texture.t`#ifndef GL_EXT_shader_texture_lod
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
function u$2(u,a){u.include(t$3,a),u.fragment.code.add(Texture.t`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===a.attributeTextureCoordinates&&u.fragment.code.add(Texture.t`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===a.attributeTextureCoordinates&&(u.include(t$1),u.fragment.code.add(Texture.t`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=vec3f32.t(0,.6,.2);function r$2(e,t){const r=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(u$2,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(Texture.t`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(Texture.t`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(Texture.t`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(Texture.t`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(Texture.t`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(Texture.t`float getBakedOcclusion() { return 1.0; }`),r.code.add(Texture.t`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(Texture.t`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);}function a$1(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add(Texture.t`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
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
function o$3(o){const d=Texture.t`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.fragment.code.add(d),o.vertex.code.add(d);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$2(o,d){0===d.normalType&&(o.attributes.add("normal","vec3"),o.vertex.code.add(Texture.t`vec3 normalModel() {
return normal;
}`)),1===d.normalType&&(o.include(o$3),o.attributes.add("normalCompressed","vec2"),o.vertex.code.add(Texture.t`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===d.normalType&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(Texture.t`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$1(o){o.attributes.add("position","vec3"),o.vertex.code.add(Texture.t`vec3 positionModel() { return position; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$2(l){l.vertex.code.add(Texture.t`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${Texture.t.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${Texture.t.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${Texture.t.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${Texture.t.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$1(r,l){l.symbolColor?(r.include(l$2),r.attributes.add("symbolColor","vec4"),r.varyings.add("colorMixMode","mediump float")):r.fragment.uniforms.add("colorMixMode","int"),l.symbolColor?r.vertex.code.add(Texture.t`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):r.vertex.code.add(Texture.t`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(o,r){o.include(o$1),o.vertex.include(i$1,r),o.varyings.add("vPositionWorldCameraRelative","vec3"),o.varyings.add("vPosition_view","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),o.vertex.uniforms.add("uTransform_ProjFromView","mat4"),o.vertex.code.add(Texture.t`vec3 positionWorldCameraRelative() {
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
}`),o.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.fragment.code.add(Texture.t`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`);}!function(i){class m{constructor(){this.worldFromModel_RS=quatf64.e(),this.worldFromModel_TH=common.n(),this.worldFromModel_TL=common.n();}}i.ModelTransform=m;class a{constructor(){this.worldFromView_TH=common.n(),this.worldFromView_TL=common.n(),this.viewFromCameraRelative_RS=quatf64.e(),this.projFromView=mat4f64.e();}}function d(o,r){o.setUniformMatrix3fv("uTransform_WorldFromModel_RS",r.worldFromModel_RS),o.setUniform3fv("uTransform_WorldFromModel_TH",r.worldFromModel_TH),o.setUniform3fv("uTransform_WorldFromModel_TL",r.worldFromModel_TL);}function s(o,r){o.setUniform3fv("uTransform_WorldFromView_TH",r.worldFromView_TH),o.setUniform3fv("uTransform_WorldFromView_TL",r.worldFromView_TL),o.setUniformMatrix4fv("uTransform_ProjFromView",r.projFromView),o.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",r.viewFromCameraRelative_RS);}i.ViewProjectionTransform=a,i.bindModelTransform=d,i.bindViewProjTransform=s;}(d||(d={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$1(l,e){0===e.normalType||1===e.normalType?(l.include(o$2,e),l.varyings.add("vNormalWorld","vec3"),l.varyings.add("vNormalView","vec3"),l.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),l.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),l.vertex.code.add(Texture.t`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===e.normalType?(l.include(d,e),l.varyings.add("vNormalWorld","vec3"),l.vertex.code.add(Texture.t`
    void forwardNormal() {
      vNormalWorld = ${1===e.viewingMode?Texture.t`normalize(vPositionWorldCameraRelative);`:Texture.t`vec3(0.0, 0.0, 1.0);`}
    }
    `)):l.vertex.code.add(Texture.t`void forwardNormal() {}`);}!function(o){function r(o,r){o.setUniformMatrix4fv("viewNormal",r);}o.bindUniforms=r;}(l$1||(l$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u$1(u,c){const p=u.vertex.code,v=u.fragment.code;1!==c.output&&3!==c.output||(u.include(Texture.r,{linearDepth:!0}),u.include(t$3,c),u.include(Texture.e$3,c),u.include(Texture.e$2,c),u.include(Texture.c,c),u.vertex.uniforms.add("cameraNearFar","vec2"),u.varyings.add("depth","float"),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(Texture.t`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),u.include(Texture.r$5,c),v.add(Texture.t`
      void main(void) {
        discardBySlice(vpos);
        ${c.hasColorTexture?Texture.t`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===c.output&&(u.include(Texture.r,{linearDepth:!1}),u.include(o$2,c),u.include(l$1,c),u.include(t$3,c),u.include(Texture.e$3,c),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),u.vertex.uniforms.add("viewNormal","mat4"),u.varyings.add("vPositionView","vec3"),p.add(Texture.t`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===c.normalType?Texture.t`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),u.include(Texture.c,c),u.include(Texture.r$5,c),v.add(Texture.t`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?Texture.t`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===c.normalType?Texture.t`
            vec3 normal = screenDerivativeNormal(vPositionView);`:Texture.t`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===c.output&&(u.include(Texture.r,{linearDepth:!1}),u.include(t$3,c),u.include(Texture.e$3,c),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(Texture.t`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),u.include(Texture.c,c),u.include(Texture.r$5,c),u.include(Texture.r$2),v.add(Texture.t`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?Texture.t`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,a){const r=n.fragment;a.vertexTangents?(n.attributes.add("tangent","vec4"),n.varyings.add("vTangent","vec4"),2===a.doubleSidedMode?r.code.add(Texture.t`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(Texture.t`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(n.extensions.add("GL_OES_standard_derivatives"),r.code.add(Texture.t`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),0!==a.attributeTextureCoordinates&&(n.include(u$2,a),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(Texture.t`
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
function o(o,t){const r=o.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(Texture.t`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(Texture.t`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(l,d){const c=l.fragment;l.include(n$1),l.include(o,d),0!==d.pbrMode&&l.include(Texture.a$8,d),l.include(n$2,d),d.receiveShadows&&l.include(Texture.t$6,d),c.uniforms.add("lightingGlobalFactor","float"),c.uniforms.add("ambientBoostFactor","float"),l.include(Texture.t$4),c.code.add(Texture.t`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===d.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),c.code.add(Texture.t`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===d.viewingMode?Texture.t`normalize(vPosWorld)`:Texture.t`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),c.code.add(Texture.t`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===d.pbrMode||4===d.pbrMode?c.code.add(Texture.t`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==d.pbrMode&&2!==d.pbrMode||(c.code.add(Texture.t`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),c.code.add(Texture.t`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),c.code.add(Texture.t`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),c.code.add(Texture.t`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),c.code.add(Texture.t`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===d.pbrMode?Texture.t`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:Texture.t`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,e){const m=r.fragment;m.code.add(Texture.t`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===e.doubleSidedMode?m.code.add(Texture.t`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===e.doubleSidedMode?m.code.add(Texture.t`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):m.code.add(Texture.t`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(u,o){const r=Texture.t`
  /*
  *  ${o.name}
  *  ${0===o.output?"RenderOutput: Color":1===o.output?"RenderOutput: Depth":3===o.output?"RenderOutput: Shadow":2===o.output?"RenderOutput: Normal":4===o.output?"RenderOutput: Highlight":""}
  */
  `;Texture$1.c()&&(u.fragment.code.add(r),u.vertex.code.add(r));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(i){i.include(Texture.e$1),i.code.add(Texture.t`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${Texture.t.int(1)}) {
        return allMixed;
      }
      else if (mode == ${Texture.t.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${Texture.t.int(3)}) {
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

      if (mode == ${Texture.t.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${Texture.t.int(3)}) {
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
function P$1(P){const _=new Texture.n,S=_.vertex.code,$=_.fragment.code;return _.include(u,{name:"Default Material Shader",output:P.output}),_.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),_.include(o$1),_.varyings.add("vpos","vec3"),_.include(Texture.e$3,P),_.include(o$4,P),_.include(Texture.t$9,P),0!==P.output&&7!==P.output||(_.include(o$2,P),_.include(Texture.r,{linearDepth:!1}),0===P.normalType&&P.offsetBackfaces&&_.include(e),_.include(n,P),_.include(l$1,P),P.instancedColor&&_.attributes.add("instanceColor","vec4"),_.varyings.add("localvpos","vec3"),_.include(t$3,P),_.include(Texture.a$2,P),_.include(r$1,P),_.include(Texture.r$4,P),_.vertex.uniforms.add("externalColor","vec4"),_.varyings.add("vcolorExt","vec4"),P.multipassTerrainEnabled&&_.varyings.add("depth","float"),S.add(Texture.t`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${P.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Texture.t.float(Texture.o$1)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===P.normalType?Texture.t`
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
    `)),7===P.output&&(_.include(Texture.c,P),_.include(Texture.r$5,P),P.multipassTerrainEnabled&&(_.fragment.include(Texture.a),_.include(Texture.r$6,P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.fragment.include(i),$.add(Texture.t`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?Texture.t`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Texture.t`vec4 texColor = vec4(1.0);`}
        ${P.attributeColor?Texture.t`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Texture.t`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===P.output&&(_.include(Texture.c,P),_.include(l,P),_.include(o,P),_.include(Texture.r$5,P),P.receiveShadows&&_.include(Texture.t$6,P),P.multipassTerrainEnabled&&(_.fragment.include(Texture.a),_.include(Texture.r$6,P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.include(r$2,P),_.include(Texture.a$8,P),_.fragment.include(i),_.include(r,P),$.add(Texture.t`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?Texture.t`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Texture.t`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===P.normalType?Texture.t`
        vec3 normal = screenDerivativeNormal(localvpos);`:Texture.t`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===P.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${P.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===P.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${P.attributeColor?Texture.t`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Texture.t`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${P.hasNormalTexture?Texture.t`
              mat3 tangentSpace = ${P.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===P.pbrMode||2===P.pbrMode?1===P.viewingMode?Texture.t`vec3 normalGround = normalize(vpos + localOrigin);`:Texture.t`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Texture.t``}
        ${1===P.pbrMode||2===P.pbrMode?Texture.t`
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
class R extends Texture.t$2{initializeProgram(e){const t=R.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:r$3(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new Texture.n$1(e.rctx,i,Texture.o)}bindPass(e,t){var r,i;Texture.t$5(this.program,t.camera.projectionMatrix);const l=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===l)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Texture.t$7(this.program,t)),7===l&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Texture.P[e.colorMixMode])),0===l?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Texture.P[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&a$1(this.program,e,this.configuration.isSchematic)):4===l&&Texture.g(this.program,t),Texture.t$10(this.program,e),Texture.l$1(this.program,e,t),Texture.B(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera);}bindDraw(e){const o=this.configuration.instancedDoublePrecision?common.r(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Texture.f$3(this.program,o,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Texture.o$5(this.program,o,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&o$4.bindCustomOrigin(this.program,o),Texture.r$3(this.program,this.configuration,e.slicePlane,o),0===this.configuration.output&&Texture.i$4(this.program,e,o);}setPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return OrderIndependentTransparency.g({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?OrderIndependentTransparency.u:OrderIndependentTransparency.c(e),culling:L$1(r)&&OrderIndependentTransparency.s(r.cullFace),depthTest:{func:OrderIndependentTransparency.a(e)},depthWrite:i||o?r.writeDepth&&OrderIndependentTransparency.l:null,colorWrite:OrderIndependentTransparency.r,stencilWrite:r.sceneHasOcludees?Texture.f$2:null,stencilTest:r.sceneHasOcludees?t?Texture.t$8:Texture.c$1:null,polygonOffset:i||o?null:OrderIndependentTransparency.s$1(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function L$1(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&(!e.transparent&&!e.doubleSidedMode)}R.shader=new Texture.t$3(_,(()=>Promise.resolve().then(function () { return require('./DefaultMaterial.glsl-6dc23d1f.js'); })));class H$1 extends Texture.t$1{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1;}}request.e([Texture.e({count:8})],H$1.prototype,"output",void 0),request.e([Texture.e({count:4})],H$1.prototype,"alphaDiscardMode",void 0),request.e([Texture.e({count:3})],H$1.prototype,"doubleSidedMode",void 0),request.e([Texture.e()],H$1.prototype,"isSchematic",void 0),request.e([Texture.e()],H$1.prototype,"vertexColors",void 0),request.e([Texture.e()],H$1.prototype,"offsetBackfaces",void 0),request.e([Texture.e()],H$1.prototype,"symbolColors",void 0),request.e([Texture.e()],H$1.prototype,"vvSize",void 0),request.e([Texture.e()],H$1.prototype,"vvColor",void 0),request.e([Texture.e()],H$1.prototype,"verticalOffset",void 0),request.e([Texture.e()],H$1.prototype,"receiveShadows",void 0),request.e([Texture.e()],H$1.prototype,"slicePlaneEnabled",void 0),request.e([Texture.e()],H$1.prototype,"sliceHighlightDisabled",void 0),request.e([Texture.e()],H$1.prototype,"receiveAmbientOcclusion",void 0),request.e([Texture.e()],H$1.prototype,"screenSizePerspective",void 0),request.e([Texture.e()],H$1.prototype,"textureAlphaPremultiplied",void 0),request.e([Texture.e()],H$1.prototype,"hasColorTexture",void 0),request.e([Texture.e()],H$1.prototype,"usePBR",void 0),request.e([Texture.e()],H$1.prototype,"hasMetalnessAndRoughnessTexture",void 0),request.e([Texture.e()],H$1.prototype,"hasEmissionTexture",void 0),request.e([Texture.e()],H$1.prototype,"hasOcclusionTexture",void 0),request.e([Texture.e()],H$1.prototype,"hasNormalTexture",void 0),request.e([Texture.e()],H$1.prototype,"instanced",void 0),request.e([Texture.e()],H$1.prototype,"instancedColor",void 0),request.e([Texture.e()],H$1.prototype,"instancedDoublePrecision",void 0),request.e([Texture.e()],H$1.prototype,"vertexTangents",void 0),request.e([Texture.e()],H$1.prototype,"normalsTypeDerivate",void 0),request.e([Texture.e()],H$1.prototype,"writeDepth",void 0),request.e([Texture.e()],H$1.prototype,"sceneHasOcludees",void 0),request.e([Texture.e()],H$1.prototype,"transparent",void 0),request.e([Texture.e()],H$1.prototype,"enableOffset",void 0),request.e([Texture.e({count:3})],H$1.prototype,"cullFace",void 0),request.e([Texture.e({count:4})],H$1.prototype,"transparencyPassType",void 0),request.e([Texture.e()],H$1.prototype,"multipassTerrainEnabled",void 0),request.e([Texture.e()],H$1.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function j$2(j){const E=new Texture.n,O=E.vertex.code,_=E.fragment.code;return E.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),E.include(o$1),E.varyings.add("vpos","vec3"),E.include(Texture.e$3,j),E.include(o$4,j),E.include(Texture.t$9,j),0!==j.output&&7!==j.output||(E.include(o$2,j),E.include(Texture.r,{linearDepth:!1}),j.offsetBackfaces&&E.include(e),j.instancedColor&&E.attributes.add("instanceColor","vec4"),E.varyings.add("vNormalWorld","vec3"),E.varyings.add("localvpos","vec3"),j.multipassTerrainEnabled&&E.varyings.add("depth","float"),E.include(t$3,j),E.include(Texture.a$2,j),E.include(r$1,j),E.include(Texture.r$4,j),E.vertex.uniforms.add("externalColor","vec4"),E.varyings.add("vcolorExt","vec4"),O.add(Texture.t`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${j.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Texture.t.float(Texture.o$1)}) {
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
          ${j.multipassTerrainEnabled?Texture.t`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===j.output&&(E.include(Texture.c,j),E.include(Texture.r$5,j),j.multipassTerrainEnabled&&(E.fragment.include(Texture.a),E.include(Texture.r$6,j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.fragment.include(i),_.add(Texture.t`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?Texture.t`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?Texture.t`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Texture.t`vec4 texColor = vec4(1.0);`}
        ${j.attributeColor?Texture.t`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Texture.t`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===j.output&&(E.include(Texture.c,j),E.include(l,j),E.include(o,j),E.include(Texture.r$5,j),j.receiveShadows&&E.include(Texture.t$6,j),j.multipassTerrainEnabled&&(E.fragment.include(Texture.a),E.include(Texture.r$6,j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.include(r$2,j),E.include(Texture.a$8,j),E.fragment.include(i),_.add(Texture.t`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?Texture.t`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?Texture.t`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Texture.t`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===j.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${j.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===j.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${j.attributeColor?Texture.t`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Texture.t`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${Texture.t`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===j.pbrMode||2===j.pbrMode?1===j.viewingMode?Texture.t`vec3 normalGround = normalize(vpos + localOrigin);`:Texture.t`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Texture.t``}
        ${1===j.pbrMode||2===j.pbrMode?Texture.t`
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
class a extends R{initializeProgram(e){const s=a.shader.get(),t=this.configuration,l=s.build({OITEnabled:0===t.transparencyPassType,output:t.output,viewingMode:e.viewingMode,receiveShadows:t.receiveShadows,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:t.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:t.symbolColors,vvSize:t.vvSize,vvColor:t.vvColor,vvInstancingEnabled:!0,instanced:t.instanced,instancedColor:t.instancedColor,instancedDoublePrecision:t.instancedDoublePrecision,pbrMode:t.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:t.hasColorTexture,receiveAmbientOcclusion:t.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:t.hasColorTexture?1:0,textureAlphaPremultiplied:t.textureAlphaPremultiplied,attributeColor:t.vertexColors,screenSizePerspectiveEnabled:t.screenSizePerspective,verticalOffsetEnabled:t.verticalOffset,offsetBackfaces:t.offsetBackfaces,doublePrecisionRequiresObfuscation:r$3(e.rctx),alphaDiscardMode:t.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:t.multipassTerrainEnabled,cullAboveGround:t.cullAboveGround});return new Texture.n$1(e.rctx,l,Texture.o)}}a.shader=new Texture.t$3(E$1,(()=>Promise.resolve().then(function () { return require('./RealisticTree.glsl-7601a57d.js'); })));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class y$1 extends Texture.a$5{constructor(e){super(e,P),this.supportsEdges=!0,this.techniqueConfig=new H$1,this.vertexBufferLayout=w$1(this.parameters),this.instanceBufferLayout=e.instanced?E(this.parameters):null;}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return !1;const t=e.instanced,i=e.vertexColors,s=e.symbolColors,r=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,o=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(r||a||s)?!!n||o:i?n?l:o:r||a||s?!!n||o:n?l:o}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<OrderIndependentTransparency.f),this.techniqueConfig}intersect(e,c,u,h,d,p,m){if(null!==this.parameters.verticalOffset){const e=h.camera;mathUtils.o(j$1,u[12],u[13],u[14]);let c=null;switch(h.viewingMode){case 1:c=mathUtils.j$1(D,j$1);break;case 2:c=mathUtils.r(D,A$1);}let m=0;if(null!==this.parameters.verticalOffset){const t=mathUtils.c(L,j$1,e.eye),i=mathUtils.s(t),s=mathUtils.d(t,t,1/i);let l=null;this.parameters.screenSizePerspective&&(l=mathUtils.z(c,s)),m+=Texture.V(e,i,this.parameters.verticalOffset,l,this.parameters.screenSizePerspective);}mathUtils.d(c,c,m),mathUtils.L(z,c,h.transform.inverseRotation),d=mathUtils.c(I$1,d,z),p=mathUtils.c(B,p,z);}Texture.h(e,c,h,d,p,Texture._(h.verticalOffset),m);}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new O(e):null}createBufferWriter(){return new M$1(this.vertexBufferLayout,this.instanceBufferLayout)}}class O extends Texture.r$8{constructor(e){super({...e,...e.material.parameters});}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?a:R,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled});}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees});}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program);}}const P={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:quatf64.e(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:Texture.d$1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...Texture.n$2};class M$1{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t;}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,i,s){Texture.g$2(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,s);}}function w$1(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=InterleavedLayout.A().vec3f("position").vec3f("normal");return e.vertexTangents&&i.vec4f("tangent"),t&&i.vec2f("uv0"),e.vertexColors&&i.vec4u8("color"),e.symbolColors&&i.vec4u8("symbolColor"),i}function E(e){let t=InterleavedLayout.A();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}const I$1=common.n(),B=common.n(),A$1=common.r(0,0,1),D=common.n(),z=common.n(),j$1=common.n(),L=common.n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=request.s$1.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function x(e,t){const r=await g(e,t);return {resource:r,textures:await A(r.textureDefinitions,t)}}async function g(r,n){const i=request.r(n)&&n.streamDataRequester;if(i)return h(r,i,n);const u=await asyncUtils.a(request.E(r,request.e$2(n)));if(!0===u.ok)return u.value.data;request.b$1(u.error),w(u.error);}async function h(e,r,n){const a=await asyncUtils.a(r.request(e,"json",n));if(!0===a.ok)return a.value;request.b$1(a.error),w(a.error.details.url);}function w(e){throw new request.s("",`Request for object resource failed: ${e}`)}function v(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(y.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(y.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(y.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(y.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1);}}else y.warn("Indexed geometries must specify faces"),n=!1;break}default:y.warn(`Unsupported topology '${r}'`),n=!1;}e.params.material||(y.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const s in a){a[s].values||(y.warn("Geometries with externally defined attributes are not yet supported"),n=!1);}return n}function b(e,t){const r=[],n=[],s=[],o=[],l=e.resource,c=Version.r.parse(l.version||"1.0","wosr");I.validate(c);const p=l.model.name,y=l.model.geometries,x=l.materialDefinitions,g=e.textures;let h=0;const w=new Map;for(let i=0;i<y.length;i++){const e=y[i];if(!v(e))continue;const l=M(e),c=e.params.vertexAttributes,p=[];for(const t in c){const e=c[t],r=e.values;p.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}]);}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)]);}const j=g&&g[l.texture];if(j&&!w.has(l.texture)){const{image:e,params:t}=j,r=new Texture.b(e,t);o.push(r),w.set(l.texture,r);}const A=w.get(l.texture),I=A?A.id:void 0;let P=s[l.material]?s[l.material][l.texture]:null;if(!P){const e=x[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=j&&j.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=j?U(j.alphaChannelUsage):void 0,i={ambient:common.e(e.diffuse),diffuse:common.e(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:I,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!j&&!!j.params.preMultiplyAlpha};request.r(t)&&t.materialParamsMixin&&Object.assign(i,t.materialParamsMixin),P=new y$1(i),s[l.material]||(s[l.material]={}),s[l.material][l.texture]=P;}n.push(P);const T=new Texture.u$1(p,b);h+=b.position?b.position.length:0,r.push(T);}return {name:p,stageResources:{textures:o,materials:n,geometries:r},pivotOffset:l.model.pivotOffset,boundingBox:j(r),numberOfVertices:h,lodThreshold:null}}function j(e){const t=aaBoundingBox.B();return e.forEach((e=>{const r=e.boundingInfo;request.r(r)&&(aaBoundingBox.h(t,r.getBBMin()),aaBoundingBox.h(t,r.getBBMax()));})),t}async function A(e,t){const r=[];for(const o in e){const n=e[o],s=n.images[0].data;if(!s){y.warn("Externally referenced texture data is not yet supported");continue}const i=n.encoding+";base64,"+s,u="/textureDefinitions/"+o,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==U(l)},m=request.r(t)&&t.disableTextures?Promise.resolve(null):OrderIndependentTransparency.t$1(i,t);r.push(m.then((e=>({refId:u,image:e,params:c,alphaChannelUsage:l}))));}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function U(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function M(e){const t=e.params;return {id:1,material:t.material,texture:t.texture,region:t.texture}}const I=new Version.r(1,2,"wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function $(s,o){const i=q(devEnvironmentUtils.t(s));if("wosr"===i.fileType){const e=await(o.cache?o.cache.loadWOSR(i.url,o):x(i.url,o)),t=b(e,o);return {lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(o.cache?o.cache.loadGLTF(i.url,o,o.usePBR):DefaultMaterial_COLOR_GAMMA.l(new DefaultMaterial_COLOR_GAMMA.n(o.streamDataRequester),i.url,o,o.usePBR)),u=request.m$4(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&request.r(u)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&J(a,u);const n=a.meta.isEsriSymbolResource?{usePBR:o.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:o.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},l={...o.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=K(a,n,l,i.specifiedLodIndex);let t=e[0].boundingBox;if(0!==i.specifiedLodIndex){t=K(a,n,l,0)[0].boundingBox;}return {lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const c=K(a,n,l);return {lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function q(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return {fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function K(e,t,s,a){const u=e.model,n=quatf64.e(),l=new Array,c=new Map,m=new Map;return u.lods.forEach(((e,i)=>{if(void 0!==a&&i!==a)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:request.r(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:aaBoundingBox.B()};l.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=u.materials.get(e.material),l=request.r(e.attributes.texCoord0),f=request.r(e.attributes.normal),p=Q(a.alphaMode);if(!c.has(i)){if(l){if(request.r(a.textureColor)&&!m.has(a.textureColor)){const e=u.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:1!==p};m.set(a.textureColor,new Texture.b(e.data,t));}if(request.r(a.textureNormal)&&!m.has(a.textureNormal)){const e=u.textures.get(a.textureNormal);m.set(a.textureNormal,new Texture.b(e.data,e.parameters));}if(request.r(a.textureOcclusion)&&!m.has(a.textureOcclusion)){const e=u.textures.get(a.textureOcclusion);m.set(a.textureOcclusion,new Texture.b(e.data,e.parameters));}if(request.r(a.textureEmissive)&&!m.has(a.textureEmissive)){const e=u.textures.get(a.textureEmissive);m.set(a.textureEmissive,new Texture.b(e.data,e.parameters));}if(request.r(a.textureMetallicRoughness)&&!m.has(a.textureMetallicRoughness)){const e=u.textures.get(a.textureMetallicRoughness);m.set(a.textureMetallicRoughness,new Texture.b(e.data,e.parameters));}}const o=a.color[0]**(1/DefaultMaterial_COLOR_GAMMA.o),n=a.color[1]**(1/DefaultMaterial_COLOR_GAMMA.o),d=a.color[2]**(1/DefaultMaterial_COLOR_GAMMA.o),x=a.emissiveFactor[0]**(1/DefaultMaterial_COLOR_GAMMA.o),g=a.emissiveFactor[1]**(1/DefaultMaterial_COLOR_GAMMA.o),h=a.emissiveFactor[2]**(1/DefaultMaterial_COLOR_GAMMA.o),b=request.r(a.textureColor)&&l?m.get(a.textureColor):null;c.set(i,new y$1({...t,transparent:0===p,textureAlphaMode:p,textureAlphaCutoff:a.alphaCutoff,diffuse:[o,n,d],ambient:[o,n,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:f?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:request.r(b)?b.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:request.r(a.textureNormal)&&l?m.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:request.r(b)&&!!b.params.preMultiplyAlpha,occlusionTextureId:request.r(a.textureOcclusion)&&l?m.get(a.textureOcclusion).id:void 0,emissiveTextureId:request.r(a.textureEmissive)&&l?m.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:request.r(a.textureMetallicRoughness)&&l?m.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[x,g,h],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...s}));}const x=H(e.indices||e.attributes.position.count,e.primitiveType),O=e.attributes.position.count,F=DefaultMaterial_COLOR_GAMMA.r(BufferView.i,O);vec33.e$1(F,e.attributes.position,e.transform);const A=[["position",{data:F.typedBuffer,size:F.elementCount,exclusive:!0}]],I=[["position",x]];if(request.r(e.attributes.normal)){const t=DefaultMaterial_COLOR_GAMMA.r(BufferView.i,O);mat3.j(n,e.transform),vec33.f(t,e.attributes.normal,n),A.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["normal",x]);}if(request.r(e.attributes.tangent)){const t=DefaultMaterial_COLOR_GAMMA.r(BufferView.c,O);mat3.j(n,e.transform),DefaultMaterial_COLOR_GAMMA.r$1(t,e.attributes.tangent,n),A.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["tangent",x]);}if(request.r(e.attributes.texCoord0)){const t=DefaultMaterial_COLOR_GAMMA.r(BufferView.u,O);DefaultMaterial_COLOR_GAMMA.r$2(t,e.attributes.texCoord0),A.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["uv0",x]);}if(request.r(e.attributes.color)){const t=DefaultMaterial_COLOR_GAMMA.r(BufferView.x,O);if(4===e.attributes.color.elementCount)e.attributes.color instanceof BufferView.c?DefaultMaterial_COLOR_GAMMA.f(t,e.attributes.color,255):e.attributes.color instanceof BufferView.x?DefaultMaterial_COLOR_GAMMA.e(t,e.attributes.color):e.attributes.color instanceof BufferView.L&&DefaultMaterial_COLOR_GAMMA.f(t,e.attributes.color,1/256);else {DefaultMaterial_COLOR_GAMMA.t(t,255,255,255,255);const r=new BufferView.O(t.buffer,0,4);e.attributes.color instanceof BufferView.i?vec33.r(r,e.attributes.color,255):e.attributes.color instanceof BufferView.O?vec33.e(r,e.attributes.color):e.attributes.color instanceof BufferView.E&&vec33.r(r,e.attributes.color,1/256);}A.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["color",x]);}const k=new Texture.u$1(A,I);d.stageResources.geometries.push(k),d.stageResources.materials.push(c.get(i)),l&&(request.r(a.textureColor)&&d.stageResources.textures.push(m.get(a.textureColor)),request.r(a.textureNormal)&&d.stageResources.textures.push(m.get(a.textureNormal)),request.r(a.textureOcclusion)&&d.stageResources.textures.push(m.get(a.textureOcclusion)),request.r(a.textureEmissive)&&d.stageResources.textures.push(m.get(a.textureEmissive)),request.r(a.textureMetallicRoughness)&&d.stageResources.textures.push(m.get(a.textureMetallicRoughness))),d.numberOfVertices+=O;const L=k.boundingInfo;request.r(L)&&(aaBoundingBox.h(d.boundingBox,L.getBBMin()),aaBoundingBox.h(d.boundingBox,L.getBBMax()));}));})),l}function Q(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}function H(e,t){switch(t){case 4:return DefaultMaterial_COLOR_GAMMA.n$1(e);case 5:return DefaultMaterial_COLOR_GAMMA.o$1(e);case 6:return DefaultMaterial_COLOR_GAMMA.i(e)}}function J(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if(request.t$1(o))return;const x=i.attributes.position,g=x.count,b=common.n(),v=common.n(),y=common.n(),B=DefaultMaterial_COLOR_GAMMA.r(BufferView.x,g),M=DefaultMaterial_COLOR_GAMMA.r(BufferView.i,g),w=mat4.h(mat4f64.e(),i.transform);for(let s=0;s<g;s++){x.getVec(s,v),o.getVec(s,b),mathUtils.I(v,v,i.transform),mathUtils.c(y,v,t.center),mathUtils.i(y,y,t.radius);const a=y[2],u=mathUtils.s(y),p=Math.min(.45+.55*u*u,1);mathUtils.i(y,y,t.radius),mathUtils.I(y,y,w),mathUtils.j$1(y,y),r+1!==e.model.lods.length&&e.model.lods.length>1&&mathUtils.y(y,y,b,a>-1?.2:Math.min(-4*a-3.8,1)),M.setVec(s,y),B.set(s,0,255*p),B.set(s,1,255*p),B.set(s,2,255*p),B.set(s,3,255);}i.attributes.normal=M,i.attributes.color=B;}}}

const objectResourceUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    fetch: $,
    gltfToEngineResources: K,
    parseUrl: q
});

exports.$ = $;
exports.E = E;
exports.P = P$1;
exports.a = a$1;
exports.d = d;
exports.i = i;
exports.i$1 = i$1;
exports.j = j$2;
exports.l = l;
exports.l$1 = l$2;
exports.l$2 = l$1;
exports.n = n$1;
exports.n$1 = n$2;
exports.n$2 = n;
exports.o = o$1;
exports.o$1 = o;
exports.objectResourceUtils = objectResourceUtils;
exports.r = r$2;
exports.r$1 = r$3;
exports.r$2 = r;
exports.t = t$3;
exports.t$1 = t$1;
exports.t$2 = t;
exports.u = u;
exports.u$1 = u$2;
exports.x = x;
exports.y = y$1;
