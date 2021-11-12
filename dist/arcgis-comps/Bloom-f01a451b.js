import { l } from './VertexArrayObject-c9bc61ab.js';
import './jsxFactory-a3b6abde.js';
import './Texture-87b2db4d.js';
import { r as r$1 } from './WGLContainer-f22a8645.js';
import './index-8dec7690.js';
import './Graphic-08cda9ca.js';
import './JSONSupport-4f0a3248.js';
import './MapView-fd6af8ef.js';
import './CollectionFlattener-6fc74400.js';
import './HandleOwner-a0b41b75.js';
import './reactiveUtils-aa11596b.js';
import './workers-82dadb41.js';
import './executeQueryJSON-21f02626.js';
import './utils-6b47d93a.js';
import './query-0985d8b5.js';
import './normalizeUtils-359d2c6f.js';
import './pbfQueryUtils-8da18556.js';
import './pbf-a77a8e4c.js';
import './OptimizedFeature-3d0408e5.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-407bfc75.js';
import './zscale-6af4ef9a.js';
import './Query-a20a7572.js';
import './TimeExtent-a92e5996.js';
import './Field-416cada2.js';
import './fieldType-7f2a820b.js';
import './FeatureSet-d7537daf.js';
import './TopFeaturesQuery-4aea53d6.js';
import './Heading-312c4ffe.js';
import './utils-01c563d8.js';
import './asyncUtils-9a49e799.js';
import './ItemCache-f80eba0b.js';
import './MemCache-dfacc658.js';
import './utils-f8425723.js';
import './widget-7d4c291e.js';
import './vmEvent-bdc3bebc.js';
import './QueryTask-74d4023b.js';
import './compilerUtils-a5ae094d.js';
import './featureConversionUtils-ef2563e9.js';
import './Task-5476576b.js';
import './FeatureLayer-6179c233.js';
import './UniqueValueRenderer-8dbcac2c.js';
import './VisualVariablesMixin-b52a2c87.js';
import './colorRamps-270af342.js';
import './ColorStop-e7cb8b17.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-21378141.js';
import './lengthUtils-e1fe9a45.js';
import './diffUtils-a2ab1186.js';
import './jsonUtils-43243fe0.js';
import './styleUtils-91b1203b.js';
import './DictionaryRenderer-80042e03.js';
import './LRUCache-d4f192fd.js';
import './jsonUtils-66ddb072.js';
import './MultiOriginJSONSupport-22dd2d29.js';
import './HeightModelInfo-5a7b6583.js';
import './APIKeyMixin-d87deecc.js';
import './ArcGISService-88c76264.js';
import './arcgisLayerUrl-a1acfaeb.js';
import './BlendLayer-1d9f1c9a.js';
import './jsonUtils-efaaa503.js';
import './mat4-3acd3594.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-92abdfc3.js';
import './labelingInfo-af47848f.js';
import './commonProperties-ad8badbd.js';
import './LabelClass-a0793742.js';
import './labelUtils-434b8348.js';
import './defaultsJSON-53258912.js';
import './OperationalLayer-26aa2ff7.js';
import './OrderedLayer-2f7497c3.js';
import './PortalLayer-8e73039a.js';
import './PortalItem-4dd070a8.js';
import './RefreshableLayer-5b977e98.js';
import './ScaleRangeLayer-2f975321.js';
import './TemporalLayer-f3b14395.js';
import './TimeInfo-8ecf4da2.js';
import './FeatureType-ba8f07c3.js';
import './fieldProperties-f216bcfb.js';
import './FieldsIndex-87a4d86b.js';
import './LayerFloorInfo-a2a78182.js';
import './styleUtils-22872348.js';
import './popupUtils-9dc503ca.js';
import './TileStore-f74dddba.js';
import './TileKey-6190320d.js';
import './quickselect-ccfd8cff.js';
import './GoTo-5947d15d.js';
import './mathUtils-6ae1ce0d.js';
import './TileInfo-11d4e5af.js';
import './Basemap-726ae687.js';
import './loadAll-b50c1134.js';
import './writeUtils-043189c3.js';
import './TablesMixin-92eb787e.js';
import './GraphicsCollection-bd1f8010.js';
import './Scheduler-1618ba8f.js';
import './unitBezier-0f2e6a45.js';
import './mat2d-c1b9a27f.js';
import './vec2-42a7347f.js';
import './vec2f64-503345b4.js';
import './projection-0b5fc15a.js';
import './mat3-1b3794e5.js';
import './vec2f32-7c7b1123.js';
import './TileStrategy-813150bb.js';
import './screenshotUtils-f5f99bb9.js';
import './capabilities-2d1bcd77.js';
import './definitions-a1bd4630.js';
import './Utils-44b2954a.js';
import './number-888f4898.js';
import './ShaderCompiler-ec0c1f66.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-3186eef7.js';
import './pixelUtils-c05dd2ad.js';
import './Container-ce32194d.js';
import './EffectList-a40f7f6a.js';
import './earcut-05cd758b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=5,s=[1,0],r=[0,1],o=[1,.8,.6,.4,.2],n=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];class a{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(i),this._nMips=i,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}};}dispose(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(let t=0;t<this._nMips;t++)this._mipsFBOs[t]&&(this._mipsFBOs[t].horizontal.dispose(),this._mipsFBOs[t].vertical.dispose());this._mipsFBOs=null;}}draw(t,a,l){const{width:h,height:u}=a,{context:p,painter:m}=t,{materialManager:c}=m,d=p.gl,_=this._programDesc,{strength:g,radius:f,threshold:b}=l;this._quad||(this._quad=new r$1(p,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(t,h,u),p.setStencilTestEnabled(!1),p.setBlendingEnabled(!0),p.setBlendFunction(1,771),p.setStencilWriteMask(0);const F=this._quad;F.bind(),p.bindFramebuffer(this._intensityFBO);const B=c.getProgram(t,_.luminosityHighPass);p.useProgram(B),p.bindTexture(a.colorTexture,0),B.setUniform1i("u_texture",0),B.setUniform3fv("u_defaultColor",[0,0,0]),B.setUniform1f("u_defaultOpacity",0),B.setUniform1f("u_luminosityThreshold",b),B.setUniform1f("u_smoothWidth",.01);const O=[Math.round(h/2),Math.round(u/2)];p.setViewport(0,0,O[0],O[1]),p.setClearColor(0,0,0,0),p.clear(d.COLOR_BUFFER_BIT),F.draw(),p.setBlendingEnabled(!1);let T=this._intensityFBO.colorTexture;for(let e=0;e<this._nMips;e++){const i=c.getProgram(t,_.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[e]}]);p.useProgram(i),p.bindTexture(T,e+1),i.setUniform1i("u_colorTexture",e+1),i.setUniform2fv("u_texSize",O),i.setUniform2fv("u_direction",s),p.setViewport(0,0,O[0],O[1]);const o=this._mipsFBOs[e];p.bindFramebuffer(o.horizontal),F.draw(),T=o.horizontal.colorTexture,p.bindFramebuffer(o.vertical),p.bindTexture(T,e+1),i.setUniform2fv("u_direction",r),F.draw(),T=o.vertical.colorTexture,O[0]=Math.round(O[0]/2),O[1]=Math.round(O[1]/2);}p.setViewport(0,0,h,u);const x=c.getProgram(t,_.composite,[{name:"nummips",value:i}]);p.bindFramebuffer(this._compositeFBO),p.useProgram(x),x.setUniform1f("u_bloomStrength",g),x.setUniform1f("u_bloomRadius",f),x.setUniform1fv("u_bloomFactors",o),x.setUniform3fv("u_bloomTintColors",n),p.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),x.setUniform1i("u_blurTexture1",1),p.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),x.setUniform1i("u_blurTexture2",2),p.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),x.setUniform1i("u_blurTexture3",3),p.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),x.setUniform1i("u_blurTexture4",4),p.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),x.setUniform1i("u_blurTexture5",5),F.draw(),p.bindFramebuffer(a),p.setBlendingEnabled(!0);const w=c.getProgram(t,_.blit);p.useProgram(w),p.bindTexture(this._compositeFBO.colorTexture,6),w.setUniform1i("u_texture",6),p.setBlendFunction(1,1),F.draw(),F.unbind(),p.setBlendFunction(1,771),p.setStencilTestEnabled(!0);}_createOrResizeResources(e,i,s){const{context:r}=e;if(this._compositeFBO&&this._size[0]===i&&this._size[1]===s)return;this._size[0]=i,this._size[1]=s;const o=[Math.round(i/2),Math.round(s/2)];this._compositeFBO?this._compositeFBO.resize(i,s):this._compositeFBO=new l(r,{colorTarget:0,depthStencilTarget:0,width:i,height:s}),this._intensityFBO?this._intensityFBO.resize(o[0],o[1]):this._intensityFBO=new l(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]});for(let n=0;n<this._nMips;n++)this._mipsFBOs[n]?(this._mipsFBOs[n].horizontal.resize(o[0],o[1]),this._mipsFBOs[n].vertical.resize(o[0],o[1])):this._mipsFBOs[n]={horizontal:new l(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),vertical:new l(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]})},o[0]=Math.round(o[0]/2),o[1]=Math.round(o[1]/2);}}

export { a as Bloom };
