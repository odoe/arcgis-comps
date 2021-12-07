import { aG as t$8, aH as f$2, aW as o$2 } from './ColorMaterial-cf44e08d.js';
import { n as n$1, r, t, w as c, a, J as r$1, S as d, h as e, e as e$2, b as t$1, c as t$2, d as n$2, o as o$1, k as t$3, X as t$4, a7 as a$1, a9 as l, P as f, al as t$5, R as c$2, f as t$6, aa as a$3, av as h$1, ac as r$3, ad as n$3 } from './Texture-1e5e4be2.js';
import { g, c as c$1, s as s$1, b as a$2, l as l$1, f as l$2, r as r$2, h as s$2, t as t$7, j as f$1 } from './OrderIndependentTransparency-3e6c26be.js';
import { e as e$1 } from './messageBundle-f75b4090.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(s){const n=new n$1;return n.include(r,{linearDepth:!1}),n.vertex.uniforms.add("proj","mat4").add("view","mat4"),n.attributes.add("position","vec3"),n.attributes.add("uv0","vec2"),n.varyings.add("vpos","vec3"),s.multipassTerrainEnabled&&n.varyings.add("depth","float"),n.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),n.vertex.code.add(t`
    void main(void) {
      vpos = position;
      ${s.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),n.include(c,s),s.multipassTerrainEnabled&&(n.fragment.include(a),n.include(r$1,s)),n.fragment.uniforms.add("tex","sampler2D"),n.fragment.uniforms.add("opacity","float"),n.varyings.add("vTexCoord","vec2"),7===s.output?n.fragment.code.add(t`
    void main() {
      discardBySlice(vpos);
      ${s.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${t.float(d)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(n.fragment.include(e),n.fragment.code.add(t`
    void main() {
      discardBySlice(vpos);
      ${s.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${t.float(d)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${s.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),n}const n=Object.freeze({__proto__:null,build:s});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E extends t$2{initializeProgram(e){const t=E.shader.get(),r=this.configuration,i=t.build({output:r.output,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,OITEnabled:0===r.transparencyPassType,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new n$2(e.rctx,i,o$1)}bindPass(e,t){t$3(this.program,t.camera.projectionMatrix),this.program.setUniform1f("opacity",e.opacity),t.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),t$4(this.program,t));}bindDraw(e){a$1(this.program,e),l(this.program,this.configuration,e),this.program.rebindTextures();}setPipelineState(e,t){const r=this.configuration,i=3===e,s=2===e;return g({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?w:c$1(e),culling:s$1(r.cullFace),depthTest:{func:a$2(e)},depthWrite:i?r.writeDepth&&l$1:l$2(e),colorWrite:r$2,stencilWrite:r.sceneHasOcludees?f:null,stencilTest:r.sceneHasOcludees?t?t$5:c$2:null,polygonOffset:i||s?null:s$2(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}E.shader=new t$6(n,(()=>import('./ImageMaterial.glsl-80a7ac5a.js')));const w=t$7(1,771);class O extends t$1{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1;}}e$1([e$2({count:8})],O.prototype,"output",void 0),e$1([e$2({count:3})],O.prototype,"cullFace",void 0),e$1([e$2()],O.prototype,"slicePlaneEnabled",void 0),e$1([e$2()],O.prototype,"transparent",void 0),e$1([e$2()],O.prototype,"enableOffset",void 0),e$1([e$2()],O.prototype,"writeDepth",void 0),e$1([e$2()],O.prototype,"sceneHasOcludees",void 0),e$1([e$2({count:4})],O.prototype,"transparencyPassType",void 0),e$1([e$2()],O.prototype,"multipassTerrainEnabled",void 0),e$1([e$2()],O.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h extends a$3{constructor(e){super(e,o),this.supportsEdges=!0,this.techniqueConfig=new O;}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<f$1,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}intersect(e,t,r,a,s,i,n){h$1(e,t,a,s,i,void 0,n);}requiresSlot(t,r){if(20===t)return !0;if(4===t$8(r))return 2===t;return t===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)}createGLMaterial(e){return 0===e.output||7===e.output||4===e.output?new p(e):void 0}createBufferWriter(){return new f$2(o$2)}}class p extends r$3{constructor(e){super({...e,...e.material.parameters});}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(E,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&(this._material.setParameters({sceneHasOcludees:e.hasOccludees}),this.updateParameters(e));}beginSlot(e){return 0!==this._output&&7!==this._output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){this.bindTextures(t.program),this.bindTextureScale(t.program),t.bindPass(this._material.parameters,e);}}const o={transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,opacity:1,textureId:null,initTextureTransparent:!0,...n$3};

export { h, s };
