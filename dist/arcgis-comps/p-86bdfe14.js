import{aG as t,aH as e,aW as s}from"./p-340cd100.js";import{n as i,r as a,t as r,w as o,a as n,J as l,S as h,h as c,e as d,b as p,c as u,d as v,o as g,k as b,X as f,a7 as m,a9 as x,P as C,al as F,R as T,f as _,aa as w,av as P,ac as y,ad as S}from"./p-eb48bb01.js";import{g as D,c as j,s as O,b as E,l as $,f as H,r as W,h as G,t as z,j as A}from"./p-bdf9e611.js";import{e as B}from"./p-e58503d5.js";function q(t){const e=new i;return e.include(a,{linearDepth:!1}),e.vertex.uniforms.add("proj","mat4").add("view","mat4"),e.attributes.add("position","vec3"),e.attributes.add("uv0","vec2"),e.varyings.add("vpos","vec3"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),e.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),e.vertex.code.add(r`
    void main(void) {
      vpos = position;
      ${t.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(o,t),t.multipassTerrainEnabled&&(e.fragment.include(n),e.include(l,t)),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("opacity","float"),e.varyings.add("vTexCoord","vec2"),7===t.output?e.fragment.code.add(r`
    void main() {
      discardBySlice(vpos);
      ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${r.float(h)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(e.fragment.include(c),e.fragment.code.add(r`
    void main() {
      discardBySlice(vpos);
      ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${r.float(h)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${t.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),e}const I=Object.freeze({__proto__:null,build:q});class V extends u{initializeProgram(t){const e=V.shader.get(),s=this.configuration,i=e.build({output:s.output,slicePlaneEnabled:s.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,OITEnabled:0===s.transparencyPassType,multipassTerrainEnabled:s.multipassTerrainEnabled,cullAboveGround:s.cullAboveGround});return new v(t.rctx,i,g)}bindPass(t,e){b(this.program,e.camera.projectionMatrix),this.program.setUniform1f("opacity",t.opacity),e.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",e.camera.nearFar),this.program.setUniform2fv("inverseViewport",e.inverseViewport),f(this.program,e))}bindDraw(t){m(this.program,t),x(this.program,this.configuration,t),this.program.rebindTextures()}setPipelineState(t,e){const s=this.configuration,i=3===t,a=2===t;return D({blending:0!==s.output&&7!==s.output||!s.transparent?null:i?k:j(t),culling:O(s.cullFace),depthTest:{func:E(t)},depthWrite:i?s.writeDepth&&$:H(t),colorWrite:W,stencilWrite:s.sceneHasOcludees?C:null,stencilTest:s.sceneHasOcludees?e?F:T:null,polygonOffset:i||a?null:G(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(t,e){return e?this._occludeePipelineState:super.getPipelineState(t,e)}}V.shader=new _(I,(()=>import("./p-438f3117.js")));const k=z(1,771);class J extends p{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}B([d({count:8})],J.prototype,"output",void 0),B([d({count:3})],J.prototype,"cullFace",void 0),B([d()],J.prototype,"slicePlaneEnabled",void 0),B([d()],J.prototype,"transparent",void 0),B([d()],J.prototype,"enableOffset",void 0),B([d()],J.prototype,"writeDepth",void 0),B([d()],J.prototype,"sceneHasOcludees",void 0),B([d({count:4})],J.prototype,"transparencyPassType",void 0),B([d()],J.prototype,"multipassTerrainEnabled",void 0),B([d()],J.prototype,"cullAboveGround",void 0);class L extends w{constructor(t){super(t,N),this.supportsEdges=!0,this.techniqueConfig=new J}getTechniqueConfig(t,e){return this.techniqueConfig.output=t,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.transparencyPassType=e.transparencyPassType,this.techniqueConfig.enableOffset=e.camera.relativeElevation<A,this.techniqueConfig.multipassTerrainEnabled=e.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=e.cullAboveGround,this.techniqueConfig}intersect(t,e,s,i,a,r,o){P(t,e,i,a,r,void 0,o)}requiresSlot(e,s){return 20===e||(4===t(s)?2===e:e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2))}createGLMaterial(t){return 0===t.output||7===t.output||4===t.output?new M(t):void 0}createBufferWriter(){return new e(s)}}class M extends y{constructor(t){super({...t,...t.material.parameters})}updateParameters(t){return this.updateTexture(this._material.parameters.textureId),this.ensureTechnique(V,t)}_updateOccludeeState(t){t.hasOccludees!==this._material.parameters.sceneHasOcludees&&(this._material.setParameters({sceneHasOcludees:t.hasOccludees}),this.updateParameters(t))}beginSlot(t){return 0!==this._output&&7!==this._output||this._updateOccludeeState(t),this.updateParameters(t)}bind(t,e){this.bindTextures(e.program),this.bindTextureScale(e.program),e.bindPass(this._material.parameters,t)}}const N={transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,opacity:1,textureId:null,initTextureTransparent:!0,...S};export{L as h,q as s}