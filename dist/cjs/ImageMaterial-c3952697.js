'use strict';

const ColorMaterial = require('./ColorMaterial-61b9182b.js');
const Texture = require('./Texture-16b1a373.js');
const OrderIndependentTransparency = require('./OrderIndependentTransparency-866eb67c.js');
const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(s){const n=new Texture.n;return n.include(Texture.r,{linearDepth:!1}),n.vertex.uniforms.add("proj","mat4").add("view","mat4"),n.attributes.add("position","vec3"),n.attributes.add("uv0","vec2"),n.varyings.add("vpos","vec3"),s.multipassTerrainEnabled&&n.varyings.add("depth","float"),n.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),n.vertex.code.add(Texture.t`
    void main(void) {
      vpos = position;
      ${s.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),n.include(Texture.c,s),s.multipassTerrainEnabled&&(n.fragment.include(Texture.a),n.include(Texture.r$6,s)),n.fragment.uniforms.add("tex","sampler2D"),n.fragment.uniforms.add("opacity","float"),n.varyings.add("vTexCoord","vec2"),7===s.output?n.fragment.code.add(Texture.t`
    void main() {
      discardBySlice(vpos);
      ${s.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${Texture.t.float(Texture.d$1)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(n.fragment.include(Texture.e$1),n.fragment.code.add(Texture.t`
    void main() {
      discardBySlice(vpos);
      ${s.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${Texture.t.float(Texture.d$1)}) {
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
class E extends Texture.t$2{initializeProgram(e){const t=E.shader.get(),r=this.configuration,i=t.build({output:r.output,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,OITEnabled:0===r.transparencyPassType,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new Texture.n$1(e.rctx,i,Texture.o)}bindPass(e,t){Texture.t$5(this.program,t.camera.projectionMatrix),this.program.setUniform1f("opacity",e.opacity),t.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),Texture.t$7(this.program,t));}bindDraw(e){Texture.a$4(this.program,e),Texture.l$2(this.program,this.configuration,e),this.program.rebindTextures();}setPipelineState(e,t){const r=this.configuration,i=3===e,s=2===e;return OrderIndependentTransparency.g({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?w:OrderIndependentTransparency.c(e),culling:OrderIndependentTransparency.s(r.cullFace),depthTest:{func:OrderIndependentTransparency.a(e)},depthWrite:i?r.writeDepth&&OrderIndependentTransparency.l:OrderIndependentTransparency.l$1(e),colorWrite:OrderIndependentTransparency.r,stencilWrite:r.sceneHasOcludees?Texture.f$2:null,stencilTest:r.sceneHasOcludees?t?Texture.t$8:Texture.c$1:null,polygonOffset:i||s?null:OrderIndependentTransparency.s$1(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}E.shader=new Texture.t$3(n,(()=>Promise.resolve().then(function () { return require('./ImageMaterial.glsl-e0eaf017.js'); })));const w=OrderIndependentTransparency.t(1,771);class O extends Texture.t$1{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1;}}request.e([Texture.e({count:8})],O.prototype,"output",void 0),request.e([Texture.e({count:3})],O.prototype,"cullFace",void 0),request.e([Texture.e()],O.prototype,"slicePlaneEnabled",void 0),request.e([Texture.e()],O.prototype,"transparent",void 0),request.e([Texture.e()],O.prototype,"enableOffset",void 0),request.e([Texture.e()],O.prototype,"writeDepth",void 0),request.e([Texture.e()],O.prototype,"sceneHasOcludees",void 0),request.e([Texture.e({count:4})],O.prototype,"transparencyPassType",void 0),request.e([Texture.e()],O.prototype,"multipassTerrainEnabled",void 0),request.e([Texture.e()],O.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h extends Texture.a$5{constructor(e){super(e,o),this.supportsEdges=!0,this.techniqueConfig=new O;}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<OrderIndependentTransparency.f,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}intersect(e,t,r,a,s,i,n){Texture.h(e,t,a,s,i,void 0,n);}requiresSlot(t,r){if(20===t)return !0;if(4===ColorMaterial.t$4(r))return 2===t;return t===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)}createGLMaterial(e){return 0===e.output||7===e.output||4===e.output?new p(e):void 0}createBufferWriter(){return new ColorMaterial.f$2(ColorMaterial.o$5)}}class p extends Texture.r$8{constructor(e){super({...e,...e.material.parameters});}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(E,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&(this._material.setParameters({sceneHasOcludees:e.hasOccludees}),this.updateParameters(e));}beginSlot(e){return 0!==this._output&&7!==this._output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){this.bindTextures(t.program),this.bindTextureScale(t.program),t.bindPass(this._material.parameters,e);}}const o={transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,opacity:1,textureId:null,initTextureTransparent:!0,...Texture.n$2};

exports.h = h;
exports.s = s;
