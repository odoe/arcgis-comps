import { l } from './VertexArrayObject-1f343ba6.js';
import './jsxFactory-c96bb45c.js';
import './Texture-167b44f1.js';
import { r as r$1 } from './WGLContainer-39960109.js';
import './index-921bd636.js';
import './Graphic-6c72131a.js';
import './JSONSupport-5a9f556a.js';
import './MapView-e30b3dee.js';
import './CollectionFlattener-567ea124.js';
import './HandleOwner-6fdf8ee8.js';
import './reactiveUtils-4ba1fb4b.js';
import './workers-5ad649f9.js';
import './unitUtils-b25ae8cb.js';
import './executeQueryJSON-165e5051.js';
import './utils-8991f658.js';
import './query-0da4fa5c.js';
import './normalizeUtils-1fd7c0f1.js';
import './pbfQueryUtils-e36554ac.js';
import './pbf-1b9dc626.js';
import './OptimizedFeature-6034ce0f.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-0ff40b9b.js';
import './zscale-cec9b507.js';
import './Query-792b142d.js';
import './TimeExtent-1bc95591.js';
import './Field-2b6029f8.js';
import './RangeDomain-de3132b0.js';
import './fieldType-b9f9365f.js';
import './FeatureSet-22102ca4.js';
import './AttachmentQuery-42d07544.js';
import './Heading-7763ec3e.js';
import './utils-ce0d30fb.js';
import './asyncUtils-dc4bd819.js';
import './ItemCache-2d2e76a8.js';
import './MemCache-e219bcfb.js';
import './utils-f8425723.js';
import './widget-13824d6e.js';
import './vmEvent-bdc3bebc.js';
import './TopFeaturesQuery-31a64765.js';
import './QueryTask-f5ad3db8.js';
import './compilerUtils-128fda14.js';
import './featureConversionUtils-0aaeda4b.js';
import './Task-87780f0a.js';
import './FeatureLayer-9672bbd9.js';
import './UniqueValueRenderer-f2af8ece.js';
import './VisualVariablesMixin-bafacb39.js';
import './colorRamps-693d6433.js';
import './ColorStop-fb26d745.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-506efb2b.js';
import './lengthUtils-7a485aa7.js';
import './diffUtils-491d81df.js';
import './jsonUtils-a31b4632.js';
import './styleUtils-8fedca21.js';
import './DictionaryRenderer-78308a28.js';
import './LRUCache-81490262.js';
import './jsonUtils-580ae154.js';
import './MultiOriginJSONSupport-f6506b2f.js';
import './HeightModelInfo-a87824be.js';
import './APIKeyMixin-4866fda4.js';
import './ArcGISService-4cc51fbf.js';
import './arcgisLayerUrl-2aeded02.js';
import './BlendLayer-70766503.js';
import './jsonUtils-352e8eb7.js';
import './mat4-ef633c62.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-89544c0d.js';
import './labelingInfo-683f3119.js';
import './commonProperties-fa43a2ed.js';
import './LabelClass-65776e47.js';
import './labelUtils-45e9126f.js';
import './defaultsJSON-53258912.js';
import './OperationalLayer-b04e38aa.js';
import './OrderedLayer-8b694b55.js';
import './PortalLayer-df690c5a.js';
import './PortalItem-209a51a1.js';
import './RefreshableLayer-702beb88.js';
import './ScaleRangeLayer-99043c54.js';
import './TemporalLayer-b41e8e6e.js';
import './TimeInfo-9a5e9434.js';
import './FeatureType-8cae0f8f.js';
import './fieldProperties-b0c243c7.js';
import './FieldsIndex-56cf15de.js';
import './LayerFloorInfo-2c65601c.js';
import './styleUtils-e2196c57.js';
import './popupUtils-4957d444.js';
import './TileStore-39bbbf67.js';
import './TileKey-c678a190.js';
import './quickselect-ccfd8cff.js';
import './layerViewUtils-9cf85499.js';
import './GoTo-7624d206.js';
import './mathUtils-91a58478.js';
import './TileInfo-1fc37c81.js';
import './Basemap-37cadf63.js';
import './loadAll-85b9593d.js';
import './writeUtils-4d88cd58.js';
import './TablesMixin-93b17242.js';
import './GraphicsCollection-f199ec2b.js';
import './Scheduler-fb8ceb54.js';
import './unitBezier-0f2e6a45.js';
import './mat2d-b05e5a52.js';
import './vec2-f635f36f.js';
import './vec2f64-503345b4.js';
import './projection-32646abc.js';
import './mat3-351ead7a.js';
import './vec2f32-7c7b1123.js';
import './TileStrategy-8fcd9a8c.js';
import './screenshotUtils-6f247196.js';
import './capabilities-eb3cc9c1.js';
import './definitions-a1bd4630.js';
import './Utils-0dd7fa3e.js';
import './number-888f4898.js';
import './ShaderCompiler-08617240.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-b9f33132.js';
import './pixelUtils-1d6f5ad9.js';
import './Container-aead67d5.js';
import './EffectList-21c65dc8.js';
import './earcut-05cd758b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=5,s=[1,0],r=[0,1],o=[1,.8,.6,.4,.2],n=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];class a{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(i),this._nMips=i,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}};}dispose(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(let t=0;t<this._nMips;t++)this._mipsFBOs[t]&&(this._mipsFBOs[t].horizontal.dispose(),this._mipsFBOs[t].vertical.dispose());this._mipsFBOs=null;}}draw(t,a,l){const{width:h,height:u}=a,{context:p,painter:m}=t,{materialManager:c}=m,d=p.gl,_=this._programDesc,{strength:g,radius:f,threshold:b}=l;this._quad||(this._quad=new r$1(p,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(t,h,u),p.setStencilTestEnabled(!1),p.setBlendingEnabled(!0),p.setBlendFunction(1,771),p.setStencilWriteMask(0);const F=this._quad;F.bind(),p.bindFramebuffer(this._intensityFBO);const B=c.getProgram(t,_.luminosityHighPass);p.useProgram(B),p.bindTexture(a.colorTexture,0),B.setUniform1i("u_texture",0),B.setUniform3fv("u_defaultColor",[0,0,0]),B.setUniform1f("u_defaultOpacity",0),B.setUniform1f("u_luminosityThreshold",b),B.setUniform1f("u_smoothWidth",.01);const O=[Math.round(h/2),Math.round(u/2)];p.setViewport(0,0,O[0],O[1]),p.setClearColor(0,0,0,0),p.clear(d.COLOR_BUFFER_BIT),F.draw(),p.setBlendingEnabled(!1);let T=this._intensityFBO.colorTexture;for(let e=0;e<this._nMips;e++){const i=c.getProgram(t,_.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[e]}]);p.useProgram(i),p.bindTexture(T,e+1),i.setUniform1i("u_colorTexture",e+1),i.setUniform2fv("u_texSize",O),i.setUniform2fv("u_direction",s),p.setViewport(0,0,O[0],O[1]);const o=this._mipsFBOs[e];p.bindFramebuffer(o.horizontal),F.draw(),T=o.horizontal.colorTexture,p.bindFramebuffer(o.vertical),p.bindTexture(T,e+1),i.setUniform2fv("u_direction",r),F.draw(),T=o.vertical.colorTexture,O[0]=Math.round(O[0]/2),O[1]=Math.round(O[1]/2);}p.setViewport(0,0,h,u);const x=c.getProgram(t,_.composite,[{name:"nummips",value:i}]);p.bindFramebuffer(this._compositeFBO),p.useProgram(x),x.setUniform1f("u_bloomStrength",g),x.setUniform1f("u_bloomRadius",f),x.setUniform1fv("u_bloomFactors",o),x.setUniform3fv("u_bloomTintColors",n),p.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),x.setUniform1i("u_blurTexture1",1),p.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),x.setUniform1i("u_blurTexture2",2),p.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),x.setUniform1i("u_blurTexture3",3),p.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),x.setUniform1i("u_blurTexture4",4),p.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),x.setUniform1i("u_blurTexture5",5),F.draw(),p.bindFramebuffer(a),p.setBlendingEnabled(!0);const w=c.getProgram(t,_.blit);p.useProgram(w),p.bindTexture(this._compositeFBO.colorTexture,6),w.setUniform1i("u_texture",6),p.setBlendFunction(1,1),F.draw(),F.unbind(),p.setBlendFunction(1,771),p.setStencilTestEnabled(!0);}_createOrResizeResources(e,i,s){const{context:r}=e;if(this._compositeFBO&&this._size[0]===i&&this._size[1]===s)return;this._size[0]=i,this._size[1]=s;const o=[Math.round(i/2),Math.round(s/2)];this._compositeFBO?this._compositeFBO.resize(i,s):this._compositeFBO=new l(r,{colorTarget:0,depthStencilTarget:0,width:i,height:s}),this._intensityFBO?this._intensityFBO.resize(o[0],o[1]):this._intensityFBO=new l(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]});for(let n=0;n<this._nMips;n++)this._mipsFBOs[n]?(this._mipsFBOs[n].horizontal.resize(o[0],o[1]),this._mipsFBOs[n].vertical.resize(o[0],o[1])):this._mipsFBOs[n]={horizontal:new l(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),vertical:new l(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]})},o[0]=Math.round(o[0]/2),o[1]=Math.round(o[1]/2);}}

export { a as Bloom };
