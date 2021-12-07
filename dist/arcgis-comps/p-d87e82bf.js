import{t as e}from"./p-b05e75b2.js";import{K as o,e as t,c as i,Q as a,V as r,aj as n,s,A as l,bv as c,af as d}from"./p-e58503d5.js";import{j as m}from"./p-b9aa4901.js";import{e as v}from"./p-8f986f60.js";import{h as u}from"./p-ccdb8e80.js";import{e as p}from"./p-2c84c65f.js";import{o as h,r as g,a as f,c as x,d as b,L as y,s as C,z as w,I as _,a0 as M,y as A}from"./p-2f398ed1.js";import{n as T,r as S,e as O}from"./p-d3105731.js";import{h as L,B as P}from"./p-f94762ac.js";import{i as F,c as R,u as z,x as D,L as N,O as E,E as V}from"./p-f06611ed.js";import{a as I,f as $,r as B,e as G}from"./p-2f5c7e83.js";import{l as W,n as H,r as j,a as k,b as U,f as q,e as X,t as Q,o as K,i as J,c as Y,d as Z}from"./p-58c16730.js";import{a as ee}from"./p-e654504b.js";import{r as oe}from"./p-a4587ab0.js";import{g as te,u as ie,c as ae,s as re,b as ne,l as se,r as le,h as ce,j as de,a as me}from"./p-bdf9e611.js";import{t as ve,r as ue,a2 as pe,x as he,w as ge,H as fe,y as xe,as as be,K as ye,g as Ce,h as we,n as _e,aA as Me,G as Ae,F as Te,I as Se,a as Oe,J as Le,e as Pe,b as Fe,c as Re,d as ze,o as De,k as Ne,X as Ee,ax as Ve,N as Ie,aB as $e,a3 as Be,B as Ge,aC as We,a8 as He,C as je,aD as ke,P as Ue,al as qe,R as Xe,f as Qe,aa as Ke,ai as Je,av as Ye,$ as Ze,ac as eo,S as oo,ad as to,au as io,m as ao,a0 as ro}from"./p-eb48bb01.js";import{A as no}from"./p-a72732f2.js";import{r as so}from"./p-5763113b.js";import{t as lo}from"./p-c2152437.js";import{c as co}from"./p-0bb84768.js";function mo(e,o){1===o.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(ve`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===o.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(ve`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===o.attributeTextureCoordinates&&e.vertex.code.add(ve`void forwardTextureCoordinates() {}`)}function vo(e,o){const t=e.fragment,i=void 0!==o.lightingSphericalHarmonicsOrder?o.lightingSphericalHarmonicsOrder:2;0===i?(t.uniforms.add("lightingAmbientSH0","vec3"),t.code.add(ve`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(t.uniforms.add("lightingAmbientSH_R","vec4"),t.uniforms.add("lightingAmbientSH_G","vec4"),t.uniforms.add("lightingAmbientSH_B","vec4"),t.code.add(ve`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===i&&(t.uniforms.add("lightingAmbientSH0","vec3"),t.uniforms.add("lightingAmbientSH_R1","vec4"),t.uniforms.add("lightingAmbientSH_G1","vec4"),t.uniforms.add("lightingAmbientSH_B1","vec4"),t.uniforms.add("lightingAmbientSH_R2","vec4"),t.uniforms.add("lightingAmbientSH_G2","vec4"),t.uniforms.add("lightingAmbientSH_B2","vec4"),t.code.add(ve`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),1!==o.pbrMode&&2!==o.pbrMode||t.code.add(ve`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function uo(e){const o=e.fragment;o.uniforms.add("lightingMainDirection","vec3"),o.uniforms.add("lightingMainIntensity","vec3"),o.uniforms.add("lightingFixedFactor","float"),o.code.add(ve`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function po({code:e},o){e.add(o.doublePrecisionRequiresObfuscation?ve`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`:ve`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function ho(e){return!!o("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}function go(e,o){o.instanced&&o.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),o.instancedDoublePrecision&&(e.vertex.include(po,o),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const t=[ve`
    vec3 calculateVPos() {
      ${o.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,ve`
    vec3 subtractOrigin(vec3 _pos) {
      ${o.instancedDoublePrecision?ve`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,ve`
    vec3 dpNormal(vec4 _normal) {
      ${o.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,ve`
    vec3 dpNormalView(vec4 _normal) {
      ${o.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,o.vertexTangents?ve`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:ve``];e.vertex.code.add(t[0]),e.vertex.code.add(t[1]),e.vertex.code.add(t[2]),2===o.output&&e.vertex.code.add(t[3]),e.vertex.code.add(t[4])}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,o){so(o,fo,xo,3),e.setUniform3fv("viewOriginHi",fo),e.setUniform3fv("viewOriginLo",xo)}}(go||(go={}));const fo=T(),xo=T();function bo(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(ve`#ifndef GL_EXT_shader_texture_lod
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
}`)}function yo(e,o){e.include(mo,o),e.fragment.code.add(ve`
  struct TextureLookupParameter {
    vec2 uv;
    ${o.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===o.attributeTextureCoordinates&&e.fragment.code.add(ve`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===o.attributeTextureCoordinates&&(e.include(bo),e.fragment.code.add(ve`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}const Co=lo(0,.6,.2);function wo(e,o){const t=e.fragment,i=o.hasMetalnessAndRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture;1===o.pbrMode&&i&&e.include(yo,o),2!==o.pbrMode?(0===o.pbrMode&&t.code.add(ve`float getBakedOcclusion() { return 1.0; }`),1===o.pbrMode&&(t.uniforms.add("emissionFactor","vec3"),t.uniforms.add("mrrFactors","vec3"),t.code.add(ve`vec3 mrr;
vec3 emission;
float occlusion;`),o.hasMetalnessAndRoughnessTexture&&(t.uniforms.add("texMetallicRoughness","sampler2D"),o.supportsTextureAtlas&&t.uniforms.add("texMetallicRoughnessSize","vec2"),t.code.add(ve`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),o.hasEmissionTexture&&(t.uniforms.add("texEmission","sampler2D"),o.supportsTextureAtlas&&t.uniforms.add("texEmissionSize","vec2"),t.code.add(ve`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),o.hasOcclusionTexture?(t.uniforms.add("texOcclusion","sampler2D"),o.supportsTextureAtlas&&t.uniforms.add("texOcclusionSize","vec2"),t.code.add(ve`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):t.code.add(ve`float getBakedOcclusion() { return 1.0; }`),t.code.add(ve`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${o.hasMetalnessAndRoughnessTexture?o.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${o.hasEmissionTexture?o.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${o.hasOcclusionTexture?o.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):t.code.add(ve`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function _o(e,o,t=!1){t||(e.setUniform3fv("mrrFactors",o.mrrFactors),e.setUniform3fv("emissionFactor",o.emissiveFactor))}function Mo(e){e.vertex.code.add(ve`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ao(e){const o=ve`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(o),e.vertex.code.add(o)}function To(e,o){0===o.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(ve`vec3 normalModel() {
return normal;
}`)),1===o.normalType&&(e.include(Ao),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(ve`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===o.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(ve`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}function So(e){e.attributes.add("position","vec3"),e.vertex.code.add(ve`vec3 positionModel() { return position; }`)}function Oo(e){e.vertex.code.add(ve`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${ve.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${ve.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${ve.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${ve.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Lo(e,o){o.symbolColor?(e.include(Oo),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),e.vertex.code.add(o.symbolColor?ve`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`:ve`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function Po(e,o){e.include(So),e.vertex.include(po,o),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(ve`vec3 positionWorldCameraRelative() {
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
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(ve`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function Fo(e,o){0===o.normalType||1===o.normalType?(e.include(To,o),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(ve`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===o.normalType?(e.include(Po,o),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(ve`
    void forwardNormal() {
      vNormalWorld = ${1===o.viewingMode?ve`normalize(vPositionWorldCameraRelative);`:ve`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(ve`void forwardNormal() {}`)}function Ro(e,o){const t=e.vertex.code,i=e.fragment.code;1!==o.output&&3!==o.output||(e.include(ue,{linearDepth:!0}),e.include(mo,o),e.include(pe,o),e.include(he,o),e.include(ge,o),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),o.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),t.add(ve`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(fe,o),i.add(ve`
      void main(void) {
        discardBySlice(vpos);
        ${o.hasColorTexture?ve`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===o.output&&(e.include(ue,{linearDepth:!1}),e.include(To,o),e.include(Fo,o),e.include(mo,o),e.include(pe,o),o.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),t.add(ve`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===o.normalType?ve`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(ge,o),e.include(fe,o),i.add(ve`
      void main() {
        discardBySlice(vpos);
        ${o.hasColorTexture?ve`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===o.normalType?ve`
            vec3 normal = screenDerivativeNormal(vPositionView);`:ve`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===o.output&&(e.include(ue,{linearDepth:!1}),e.include(mo,o),e.include(pe,o),o.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),t.add(ve`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(ge,o),e.include(fe,o),e.include(xe),i.add(ve`
      void main() {
        discardBySlice(vpos);
        ${o.hasColorTexture?ve`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function zo(e,o){const t=e.fragment;o.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),t.code.add(2===o.doubleSidedMode?ve`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:ve`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),t.code.add(ve`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),0!==o.attributeTextureCoordinates&&(e.include(yo,o),t.uniforms.add("normalTexture","sampler2D"),t.uniforms.add("normalTextureSize","vec2"),t.code.add(ve`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${o.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function Do(e,o){const t=e.fragment;o.receiveAmbientOcclusion?(t.uniforms.add("ssaoTex","sampler2D"),t.uniforms.add("viewportPixelSz","vec4"),t.code.add(ve`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):t.code.add(ve`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function No(e,o){const t=e.fragment;e.include(uo),e.include(Do,o),0!==o.pbrMode&&e.include(be,o),e.include(vo,o),o.receiveShadows&&e.include(ye,o),t.uniforms.add("lightingGlobalFactor","float"),t.uniforms.add("ambientBoostFactor","float"),e.include(Ce),t.code.add(ve`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===o.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.code.add(ve`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===o.viewingMode?ve`normalize(vPosWorld)`:ve`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),t.code.add(ve`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===o.pbrMode||4===o.pbrMode?t.code.add(ve`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==o.pbrMode&&2!==o.pbrMode||(t.code.add(ve`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),t.code.add(ve`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.code.add(ve`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),t.code.add(ve`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),t.code.add(ve`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===o.pbrMode?ve`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:ve`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function Eo(e,o){const t=e.fragment;t.code.add(ve`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.code.add(1===o.doubleSidedMode?ve`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`:2===o.doubleSidedMode?ve`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`:ve`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}function Vo(e,o){const t=ve`
  /*
  *  ${o.name}
  *  ${0===o.output?"RenderOutput: Color":1===o.output?"RenderOutput: Depth":3===o.output?"RenderOutput: Shadow":2===o.output?"RenderOutput: Normal":4===o.output?"RenderOutput: Highlight":""}
  */
  `;co()&&(e.fragment.code.add(t),e.vertex.code.add(t))}function Io(e){e.include(we),e.code.add(ve`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${ve.int(1)}) {
        return allMixed;
      }
      else if (mode == ${ve.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${ve.int(3)}) {
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

      if (mode == ${ve.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${ve.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}function $o(e){const o=new _e,t=o.vertex.code,i=o.fragment.code;return o.include(Vo,{name:"Default Material Shader",output:e.output}),o.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),o.include(So),o.varyings.add("vpos","vec3"),o.include(pe,e),o.include(go,e),o.include(Me,e),0!==e.output&&7!==e.output||(o.include(To,e),o.include(ue,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&o.include(Mo),o.include(zo,e),o.include(Fo,e),e.instancedColor&&o.attributes.add("instanceColor","vec4"),o.varyings.add("localvpos","vec3"),o.include(mo,e),o.include(Ae,e),o.include(Lo,e),o.include(Te,e),o.vertex.uniforms.add("externalColor","vec4"),o.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&o.varyings.add("depth","float"),t.add(ve`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${ve.float(Se)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?ve`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(o.include(ge,e),o.include(fe,e),e.multipassTerrainEnabled&&(o.fragment.include(Oe),o.include(Le,e)),o.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&o.fragment.uniforms.add("tex","sampler2D"),o.fragment.include(Io),i.add(ve`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?ve`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:ve`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?ve`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ve`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(o.include(ge,e),o.include(No,e),o.include(Do,e),o.include(fe,e),e.receiveShadows&&o.include(ye,e),e.multipassTerrainEnabled&&(o.fragment.include(Oe),o.include(Le,e)),o.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&o.fragment.uniforms.add("tex","sampler2D"),o.include(wo,e),o.include(be,e),o.fragment.include(Io),o.include(Eo,e),i.add(ve`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?ve`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:ve`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?ve`
        vec3 normal = screenDerivativeNormal(localvpos);`:ve`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?ve`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ve`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?ve`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?ve`vec3 normalGround = normalize(vpos + localOrigin);`:ve`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:ve``}
        ${1===e.pbrMode||2===e.pbrMode?ve`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),o.include(Ro,e),o}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=v(),this.worldFromModel_TH=T(),this.worldFromModel_TL=T()}},e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=T(),this.worldFromView_TL=T(),this.viewFromCameraRelative_RS=v(),this.projFromView=p()}},e.bindModelTransform=function(e,o){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",o.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",o.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",o.worldFromModel_TL)},e.bindViewProjTransform=function(e,o){e.setUniform3fv("uTransform_WorldFromView_TH",o.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",o.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",o.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",o.viewFromCameraRelative_RS)}}(Po||(Po={})),(Fo||(Fo={})).bindUniforms=function(e,o){e.setUniformMatrix4fv("viewNormal",o)};const Bo=Object.freeze({__proto__:null,build:$o});class Go extends Re{initializeProgram(e){const o=Go.shader.get(),t=this.configuration,i=o.build({OITEnabled:0===t.transparencyPassType,output:t.output,viewingMode:e.viewingMode,receiveShadows:t.receiveShadows,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:t.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:t.symbolColors,vvSize:t.vvSize,vvColor:t.vvColor,vvInstancingEnabled:!0,instanced:t.instanced,instancedColor:t.instancedColor,instancedDoublePrecision:t.instancedDoublePrecision,pbrMode:t.usePBR?t.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:t.hasMetalnessAndRoughnessTexture,hasEmissionTexture:t.hasEmissionTexture,hasOcclusionTexture:t.hasOcclusionTexture,hasNormalTexture:t.hasNormalTexture,hasColorTexture:t.hasColorTexture,receiveAmbientOcclusion:t.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:t.normalsTypeDerivate?3:0,doubleSidedMode:t.doubleSidedMode,vertexTangents:t.vertexTangents,attributeTextureCoordinates:t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture||t.hasColorTexture?1:0,textureAlphaPremultiplied:t.textureAlphaPremultiplied,attributeColor:t.vertexColors,screenSizePerspectiveEnabled:t.screenSizePerspective,verticalOffsetEnabled:t.verticalOffset,offsetBackfaces:t.offsetBackfaces,doublePrecisionRequiresObfuscation:ho(e.rctx),alphaDiscardMode:t.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:t.multipassTerrainEnabled,cullAboveGround:t.cullAboveGround});return new ze(e.rctx,i,De)}bindPass(e,o){var t,i;Ne(this.program,o.camera.projectionMatrix);const a=this.configuration.output;(1===this.configuration.output||o.multipassTerrainEnabled||3===a)&&this.program.setUniform2fv("cameraNearFar",o.camera.nearFar),o.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",o.inverseViewport),Ee(this.program,o)),7===a&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Ve[e.colorMixMode])),0===a?(o.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Ve[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&_o(this.program,e,this.configuration.isSchematic)):4===a&&Ie(this.program,o),$e(this.program,e),Be(this.program,e,o),Ge(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(t=o.shadowMap)||t.bind(this.program),null==(i=o.ssaoHelper)||i.bind(this.program,o.camera)}bindDraw(e){const o=this.configuration.instancedDoublePrecision?S(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;We(this.program,o,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&He(this.program,o,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&go.bindCustomOrigin(this.program,o),je(this.program,this.configuration,e.slicePlane,o),0===this.configuration.output&&ke(this.program,e,o)}setPipeline(e,o){const t=this.configuration,i=3===e,a=2===e;return te({blending:0!==t.output&&7!==t.output||!t.transparent?null:i?ie:ae(e),culling:Wo(t)&&re(t.cullFace),depthTest:{func:ne(e)},depthWrite:i||a?t.writeDepth&&se:null,colorWrite:le,stencilWrite:t.sceneHasOcludees?Ue:null,stencilTest:t.sceneHasOcludees?o?qe:Xe:null,polygonOffset:i||a?null:ce(t.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,o){return o?this._occludeePipelineState:super.getPipelineState(e,o)}}function Wo(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}Go.shader=new Qe(Bo,(()=>import("./p-9cfa8a04.js")));class Ho extends Fe{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}function jo(e){const o=new _e,t=o.vertex.code,i=o.fragment.code;return o.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),o.include(So),o.varyings.add("vpos","vec3"),o.include(pe,e),o.include(go,e),o.include(Me,e),0!==e.output&&7!==e.output||(o.include(To,e),o.include(ue,{linearDepth:!1}),e.offsetBackfaces&&o.include(Mo),e.instancedColor&&o.attributes.add("instanceColor","vec4"),o.varyings.add("vNormalWorld","vec3"),o.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&o.varyings.add("depth","float"),o.include(mo,e),o.include(Ae,e),o.include(Lo,e),o.include(Te,e),o.vertex.uniforms.add("externalColor","vec4"),o.varyings.add("vcolorExt","vec4"),t.add(ve`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${ve.float(Se)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?ve`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(o.include(ge,e),o.include(fe,e),e.multipassTerrainEnabled&&(o.fragment.include(Oe),o.include(Le,e)),o.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),o.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&o.fragment.uniforms.add("tex","sampler2D"),o.fragment.include(Io),i.add(ve`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?ve`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?ve`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:ve`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?ve`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ve`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(o.include(ge,e),o.include(No,e),o.include(Do,e),o.include(fe,e),e.receiveShadows&&o.include(ye,e),e.multipassTerrainEnabled&&(o.fragment.include(Oe),o.include(Le,e)),o.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),o.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&o.fragment.uniforms.add("tex","sampler2D"),o.include(wo,e),o.include(be,e),o.fragment.include(Io),i.add(ve`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?ve`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?ve`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:ve`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?ve`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ve`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${ve`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?ve`vec3 normalGround = normalize(vpos + localOrigin);`:ve`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:ve``}
        ${1===e.pbrMode||2===e.pbrMode?ve`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),o.include(Ro,e),o}t([Pe({count:8})],Ho.prototype,"output",void 0),t([Pe({count:4})],Ho.prototype,"alphaDiscardMode",void 0),t([Pe({count:3})],Ho.prototype,"doubleSidedMode",void 0),t([Pe()],Ho.prototype,"isSchematic",void 0),t([Pe()],Ho.prototype,"vertexColors",void 0),t([Pe()],Ho.prototype,"offsetBackfaces",void 0),t([Pe()],Ho.prototype,"symbolColors",void 0),t([Pe()],Ho.prototype,"vvSize",void 0),t([Pe()],Ho.prototype,"vvColor",void 0),t([Pe()],Ho.prototype,"verticalOffset",void 0),t([Pe()],Ho.prototype,"receiveShadows",void 0),t([Pe()],Ho.prototype,"slicePlaneEnabled",void 0),t([Pe()],Ho.prototype,"sliceHighlightDisabled",void 0),t([Pe()],Ho.prototype,"receiveAmbientOcclusion",void 0),t([Pe()],Ho.prototype,"screenSizePerspective",void 0),t([Pe()],Ho.prototype,"textureAlphaPremultiplied",void 0),t([Pe()],Ho.prototype,"hasColorTexture",void 0),t([Pe()],Ho.prototype,"usePBR",void 0),t([Pe()],Ho.prototype,"hasMetalnessAndRoughnessTexture",void 0),t([Pe()],Ho.prototype,"hasEmissionTexture",void 0),t([Pe()],Ho.prototype,"hasOcclusionTexture",void 0),t([Pe()],Ho.prototype,"hasNormalTexture",void 0),t([Pe()],Ho.prototype,"instanced",void 0),t([Pe()],Ho.prototype,"instancedColor",void 0),t([Pe()],Ho.prototype,"instancedDoublePrecision",void 0),t([Pe()],Ho.prototype,"vertexTangents",void 0),t([Pe()],Ho.prototype,"normalsTypeDerivate",void 0),t([Pe()],Ho.prototype,"writeDepth",void 0),t([Pe()],Ho.prototype,"sceneHasOcludees",void 0),t([Pe()],Ho.prototype,"transparent",void 0),t([Pe()],Ho.prototype,"enableOffset",void 0),t([Pe({count:3})],Ho.prototype,"cullFace",void 0),t([Pe({count:4})],Ho.prototype,"transparencyPassType",void 0),t([Pe()],Ho.prototype,"multipassTerrainEnabled",void 0),t([Pe()],Ho.prototype,"cullAboveGround",void 0);const ko=Object.freeze({__proto__:null,build:jo});class Uo extends Go{initializeProgram(e){const o=Uo.shader.get(),t=this.configuration,i=o.build({OITEnabled:0===t.transparencyPassType,output:t.output,viewingMode:e.viewingMode,receiveShadows:t.receiveShadows,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:t.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:t.symbolColors,vvSize:t.vvSize,vvColor:t.vvColor,vvInstancingEnabled:!0,instanced:t.instanced,instancedColor:t.instancedColor,instancedDoublePrecision:t.instancedDoublePrecision,pbrMode:t.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:t.hasColorTexture,receiveAmbientOcclusion:t.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:t.hasColorTexture?1:0,textureAlphaPremultiplied:t.textureAlphaPremultiplied,attributeColor:t.vertexColors,screenSizePerspectiveEnabled:t.screenSizePerspective,verticalOffsetEnabled:t.verticalOffset,offsetBackfaces:t.offsetBackfaces,doublePrecisionRequiresObfuscation:ho(e.rctx),alphaDiscardMode:t.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:t.multipassTerrainEnabled,cullAboveGround:t.cullAboveGround});return new ze(e.rctx,i,De)}}Uo.shader=new Qe(ko,(()=>import("./p-96ac388a.js")));class qo extends Ke{constructor(e){super(e,Qo),this.supportsEdges=!0,this.techniqueConfig=new Ho,this.vertexBufferLayout=function(e){const o=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,t=no().vec3f("position").vec3f("normal");return e.vertexTangents&&t.vec4f("tangent"),o&&t.vec2f("uv0"),e.vertexColors&&t.vec4u8("color"),e.symbolColors&&t.vec4u8("symbolColor"),t}(this.parameters),this.instanceBufferLayout=e.instanced?Jo(this.parameters):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const o=e.instanced,t=e.vertexColors,i=e.symbolColors,a=!!o&&o.indexOf("color")>-1,r=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return t&&(a||r||i)?!!n||s:t?n?l:s:a||r||i?!!n||s:n?l:s}getTechniqueConfig(e,o){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=o.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=o.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.techniqueConfig.doubleSidedMode=this.parameters.treeRendering?2:this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!o.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=o.transparencyPassType,this.techniqueConfig.enableOffset=o.camera.relativeElevation<de),this.techniqueConfig}intersect(e,o,t,i,a,r,n){if(null!==this.parameters.verticalOffset){const e=i.camera;h(it,t[12],t[13],t[14]);let o=null;switch(i.viewingMode){case 1:o=f(ot,it);break;case 2:o=g(ot,et)}let n=0;if(null!==this.parameters.verticalOffset){const t=x(at,it,e.eye),i=C(t),a=b(t,t,1/i);let r=null;this.parameters.screenSizePerspective&&(r=w(o,a)),n+=Je(e,i,this.parameters.verticalOffset,r,this.parameters.screenSizePerspective)}b(o,o,n),y(tt,o,i.transform.inverseRotation),a=x(Yo,a,tt),r=x(Zo,r,tt)}Ye(e,o,i,a,r,Ze(i.verticalOffset),n)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new Xo(e):null}createBufferWriter(){return new Ko(this.vertexBufferLayout,this.instanceBufferLayout)}}class Xo extends eo{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const o=this._material.parameters;return this.updateTexture(o.textureId),this.ensureTechnique(o.treeRendering?Uo:Go,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,o){o.bindPass(this._material.parameters,e),this.bindTextures(o.program)}}const Qo={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:v(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:oo,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...to};class Ko{constructor(e,o){this.vertexBufferLayout=e,this.instanceBufferLayout=o}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,o,t,i){io(o,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,t,i)}}function Jo(e){let o=no();return o=e.instancedDoublePrecision?o.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):o.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(o=o.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(o=o.vec4f("instanceFeatureAttribute")),o}const Yo=T(),Zo=T(),et=S(0,0,1),ot=T(),tt=T(),it=T(),at=T(),rt=i.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function nt(e,o){const t=await async function(e,o){const t=l(o)&&o.streamDataRequester;if(t)return async function(e,o,t){const i=await ee(o.request(e,"json",t));if(!0===i.ok)return i.value;n(i.error),st(i.error.details.url)}(e,t,o);const i=await ee(a(e,r(o)));if(!0===i.ok)return i.value.data;n(i.error),st(i.error)}(e,o);return{resource:t,textures:await dt(t.textureDefinitions,o)}}function st(e){throw new s("",`Request for object resource failed: ${e}`)}function lt(e){const o=e.params,t=o.topology;let i=!0;switch(o.vertexAttributes||(rt.warn("Geometry must specify vertex attributes"),i=!1),o.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=o.faces;if(e){if(o.vertexAttributes)for(const t in o.vertexAttributes){const o=e[t];o&&o.values?(null!=o.valueType&&"UInt32"!==o.valueType&&(rt.warn(`Unsupported indexed geometry indices type '${o.valueType}', only UInt32 is currently supported`),i=!1),null!=o.valuesPerElement&&1!==o.valuesPerElement&&(rt.warn(`Unsupported indexed geometry values per element '${o.valuesPerElement}', only 1 is currently supported`),i=!1)):(rt.warn(`Indexed geometry does not specify face indices for '${t}' attribute`),i=!1)}}else rt.warn("Indexed geometries must specify faces"),i=!1;break}default:rt.warn(`Unsupported topology '${t}'`),i=!1}e.params.material||(rt.warn("Geometry requires material"),i=!1);const a=e.params.vertexAttributes;for(const e in a)a[e].values||(rt.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function ct(e){const o=P();return e.forEach((e=>{const t=e.boundingInfo;l(t)&&(L(o,t.getBBMin()),L(o,t.getBBMax()))})),o}async function dt(e,o){const t=[];for(const i in e){const a=e[i],r=a.images[0].data;if(!r){rt.warn("Externally referenced texture data is not yet supported");continue}const n=a.encoding+";base64,"+r,s="/textureDefinitions/"+i,c="rgba"===a.channels?a.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==mt(c)},m=l(o)&&o.disableTextures?Promise.resolve(null):me(n,o);t.push(m.then((e=>({refId:s,image:e,params:d,alphaChannelUsage:c}))))}const i=await Promise.all(t),a={};for(const e of i)a[e.refId]=e;return a}function mt(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function vt(e){const o=e.params;return{id:1,material:o.material,texture:o.texture,region:o.texture}}const ut=new oe(1,2,"wosr");async function pt(o,t){const i=ht(e(o));if("wosr"===i.fileType){const e=await(t.cache?t.cache.loadWOSR(i.url,t):nt(i.url,t)),o=function(e,o){const t=[],i=[],a=[],r=[],n=e.resource,s=oe.parse(n.version||"1.0","wosr");ut.validate(s);const c=n.model.name,d=n.model.geometries,m=n.materialDefinitions,v=e.textures;let u=0;const p=new Map;for(let e=0;e<d.length;e++){const n=d[e];if(!lt(n))continue;const s=vt(n),c=n.params.vertexAttributes,h=[];for(const e in c){const o=c[e];h.push([e,{data:o.values,size:o.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==n.params.topology){const e=n.params.faces;for(const o in e)g.push([o,new Uint32Array(e[o].values)])}const f=v&&v[s.texture];if(f&&!p.has(s.texture)){const{image:e,params:o}=f,t=new ao(e,o);r.push(t),p.set(s.texture,t)}const x=p.get(s.texture),b=x?x.id:void 0;let y=a[s.material]?a[s.material][s.texture]:null;if(!y){const e=m[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const t=f&&f.alphaChannelUsage,i=e.transparency>0||"transparency"===t||"maskAndTransparency"===t,r=f?mt(f.alphaChannelUsage):void 0,n={ambient:O(e.diffuse),diffuse:O(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:r,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!f&&!!f.params.preMultiplyAlpha};l(o)&&o.materialParamsMixin&&Object.assign(n,o.materialParamsMixin),y=new qo(n),a[s.material]||(a[s.material]={}),a[s.material][s.texture]=y}i.push(y);const C=new ro(h,g);u+=g.position?g.position.length:0,t.push(C)}return{name:c,stageResources:{textures:r,materials:i,geometries:t},pivotOffset:n.model.pivotOffset,boundingBox:ct(t),numberOfVertices:u,lodThreshold:null}}(e,t);return{lods:[o],referenceBoundingBox:o.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(t.cache?t.cache.loadGLTF(i.url,t,t.usePBR):W(new H(t.streamDataRequester),i.url,t,t.usePBR)),r=c(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&l(r)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&function(e,o){for(let t=0;t<e.model.lods.length;++t){const i=e.model.lods[t];e.customMeta.esriTreeRendering=!0;for(const a of i.parts){const i=a.attributes.normal;if(d(i))return;const r=a.attributes.position,n=r.count,s=T(),l=T(),c=T(),m=j(D,n),v=j(F,n),h=u(p(),a.transform);for(let d=0;d<n;d++){r.getVec(d,l),i.getVec(d,s),_(l,l,a.transform),x(c,l,o.center),M(c,c,o.radius);const n=c[2],u=C(c),p=Math.min(.45+.55*u*u,1);M(c,c,o.radius),_(c,c,h),f(c,c),t+1!==e.model.lods.length&&e.model.lods.length>1&&A(c,c,s,n>-1?.2:Math.min(-4*n-3.8,1)),v.setVec(d,c),m.set(d,0,255*p),m.set(d,1,255*p),m.set(d,2,255*p),m.set(d,3,255)}a.attributes.normal=v,a.attributes.color=m}}}(a,r);const n=a.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},s={...t.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=gt(a,n,s,i.specifiedLodIndex);let o=e[0].boundingBox;return 0!==i.specifiedLodIndex&&(o=gt(a,n,s,0)[0].boundingBox),{lods:e,referenceBoundingBox:o,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const m=gt(a,n,s);return{lods:m,referenceBoundingBox:m[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function ht(e){const o=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return o?{fileType:"gltf",url:o[1],specifiedLodIndex:null!=o[4]?Number(o[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function gt(e,o,t,i){const a=e.model,r=v(),n=new Array,s=new Map,c=new Map;return a.lods.forEach(((e,d)=>{if(void 0!==i&&d!==i)return;const v={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:l(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:P()};n.push(v),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=a.materials.get(e.material),d=l(e.attributes.texCoord0),u=l(e.attributes.normal),p=function(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(n.alphaMode);if(!s.has(i)){if(d){if(l(n.textureColor)&&!c.has(n.textureColor)){const e=a.textures.get(n.textureColor),o={...e.parameters,preMultiplyAlpha:1!==p};c.set(n.textureColor,new ao(e.data,o))}if(l(n.textureNormal)&&!c.has(n.textureNormal)){const e=a.textures.get(n.textureNormal);c.set(n.textureNormal,new ao(e.data,e.parameters))}if(l(n.textureOcclusion)&&!c.has(n.textureOcclusion)){const e=a.textures.get(n.textureOcclusion);c.set(n.textureOcclusion,new ao(e.data,e.parameters))}if(l(n.textureEmissive)&&!c.has(n.textureEmissive)){const e=a.textures.get(n.textureEmissive);c.set(n.textureEmissive,new ao(e.data,e.parameters))}if(l(n.textureMetallicRoughness)&&!c.has(n.textureMetallicRoughness)){const e=a.textures.get(n.textureMetallicRoughness);c.set(n.textureMetallicRoughness,new ao(e.data,e.parameters))}}const r=n.color[0]**(1/K),m=n.color[1]**(1/K),v=n.color[2]**(1/K),h=n.emissiveFactor[0]**(1/K),g=n.emissiveFactor[1]**(1/K),f=n.emissiveFactor[2]**(1/K),x=l(n.textureColor)&&d?c.get(n.textureColor):null;s.set(i,new qo({...o,transparent:0===p,textureAlphaMode:p,textureAlphaCutoff:n.alphaCutoff,diffuse:[r,m,v],ambient:[r,m,v],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:u?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:l(x)?x.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:l(n.textureNormal)&&d?c.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:l(x)&&!!x.params.preMultiplyAlpha,occlusionTextureId:l(n.textureOcclusion)&&d?c.get(n.textureOcclusion).id:void 0,emissiveTextureId:l(n.textureEmissive)&&d?c.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:l(n.textureMetallicRoughness)&&d?c.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[h,g,f],mrrFactors:[n.metallicFactor,n.roughnessFactor,o.mrrFactors[2]],isSchematic:!1,...t}))}const h=function(e,o){switch(o){case 4:return Z(e);case 5:return Y(e);case 6:return J(e)}}(e.indices||e.attributes.position.count,e.primitiveType),g=e.attributes.position.count,f=j(F,g);I(f,e.attributes.position,e.transform);const x=[["position",{data:f.typedBuffer,size:f.elementCount,exclusive:!0}]],b=[["position",h]];if(l(e.attributes.normal)){const o=j(F,g);m(r,e.transform),$(o,e.attributes.normal,r),x.push(["normal",{data:o.typedBuffer,size:o.elementCount,exclusive:!0}]),b.push(["normal",h])}if(l(e.attributes.tangent)){const o=j(R,g);m(r,e.transform),k(o,e.attributes.tangent,r),x.push(["tangent",{data:o.typedBuffer,size:o.elementCount,exclusive:!0}]),b.push(["tangent",h])}if(l(e.attributes.texCoord0)){const o=j(z,g);U(o,e.attributes.texCoord0),x.push(["uv0",{data:o.typedBuffer,size:o.elementCount,exclusive:!0}]),b.push(["uv0",h])}if(l(e.attributes.color)){const o=j(D,g);if(4===e.attributes.color.elementCount)e.attributes.color instanceof R?q(o,e.attributes.color,255):e.attributes.color instanceof D?X(o,e.attributes.color):e.attributes.color instanceof N&&q(o,e.attributes.color,1/256);else{Q(o,255,255,255,255);const t=new E(o.buffer,0,4);e.attributes.color instanceof F?B(t,e.attributes.color,255):e.attributes.color instanceof E?G(t,e.attributes.color):e.attributes.color instanceof V&&B(t,e.attributes.color,1/256)}x.push(["color",{data:o.typedBuffer,size:o.elementCount,exclusive:!0}]),b.push(["color",h])}const y=new ro(x,b);v.stageResources.geometries.push(y),v.stageResources.materials.push(s.get(i)),d&&(l(n.textureColor)&&v.stageResources.textures.push(c.get(n.textureColor)),l(n.textureNormal)&&v.stageResources.textures.push(c.get(n.textureNormal)),l(n.textureOcclusion)&&v.stageResources.textures.push(c.get(n.textureOcclusion)),l(n.textureEmissive)&&v.stageResources.textures.push(c.get(n.textureEmissive)),l(n.textureMetallicRoughness)&&v.stageResources.textures.push(c.get(n.textureMetallicRoughness))),v.numberOfVertices+=g;const C=y.boundingInfo;l(C)&&(L(v.boundingBox,C.getBBMin()),L(v.boundingBox,C.getBBMax()))}))})),n}const ft=Object.freeze({__proto__:null,fetch:pt,gltfToEngineResources:gt,parseUrl:ht});export{pt as $,Jo as E,$o as P,vo as a,Oo as b,Fo as c,Po as d,yo as e,bo as f,zo as g,_o as h,Io as i,ho as j,po as k,No as l,Do as m,uo as n,So as o,Eo as p,Co as q,wo as r,jo as s,mo as t,Vo as u,ft as v,nt as x,qo as y}