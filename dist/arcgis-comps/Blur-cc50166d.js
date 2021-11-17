import { l } from './VertexArrayObject-b1cec3ed.js';
import './jsxFactory-ef3e403e.js';
import './Texture-02338d74.js';
import { r as r$1 } from './WGLContainer-bc4e3a84.js';
import './index-5b4f4de1.js';
import './unitUtils-8a2b838a.js';
import './JSONSupport-a5eb98e7.js';
import './MapView-324b0776.js';
import './CollectionFlattener-70fb34fc.js';
import './HandleOwner-ebad91ab.js';
import './reactiveUtils-2b52b231.js';
import './workers-f3905e14.js';
import './executeQueryJSON-26bfb9ee.js';
import './utils-33abd62d.js';
import './query-c4cbba7e.js';
import './normalizeUtils-9f7b714c.js';
import './pbfQueryUtils-8cea6afc.js';
import './pbf-4154bf24.js';
import './OptimizedFeature-20e2f9bb.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-69ba1f2b.js';
import './zscale-5759f488.js';
import './Query-fd5e1b7b.js';
import './TimeExtent-fb7ed3e3.js';
import './Field-c395cfbd.js';
import './fieldType-d6b0953a.js';
import './FeatureSet-2b04e61f.js';
import './TopFeaturesQuery-10871c16.js';
import './Heading-88f80afd.js';
import './utils-51d0d46b.js';
import './asyncUtils-968a02e9.js';
import './ItemCache-3713f352.js';
import './MemCache-bf2be364.js';
import './utils-f8425723.js';
import './widget-e93f25c6.js';
import './vmEvent-bdc3bebc.js';
import './QueryTask-f49291d6.js';
import './compilerUtils-be3a2322.js';
import './featureConversionUtils-a454d4b2.js';
import './Task-b0dd0710.js';
import './FeatureLayer-0ee96f86.js';
import './UniqueValueRenderer-1e1c8bf1.js';
import './VisualVariablesMixin-0776df0b.js';
import './colorRamps-a6280e46.js';
import './ColorStop-d3744592.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-5b3d6d65.js';
import './lengthUtils-26f6142e.js';
import './diffUtils-1f52a3dd.js';
import './jsonUtils-9c0d7442.js';
import './styleUtils-f18fb225.js';
import './DictionaryRenderer-b0e19146.js';
import './LRUCache-59f5b25d.js';
import './jsonUtils-595f52d3.js';
import './Layer-5a380094.js';
import './HeightModelInfo-2bd39a29.js';
import './APIKeyMixin-a3a0d40c.js';
import './ArcGISService-30368d07.js';
import './arcgisLayerUrl-06668ce7.js';
import './BlendLayer-81c24642.js';
import './jsonUtils-7ed7a510.js';
import './mat4-fe6f4784.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-ca53bbdf.js';
import './labelingInfo-1b49455f.js';
import './commonProperties-e22a7011.js';
import './LabelClass-5f15d30f.js';
import './labelUtils-ad1dc3a0.js';
import './defaultsJSON-53258912.js';
import './OperationalLayer-63ec0fa5.js';
import './OrderedLayer-d40ec16a.js';
import './PortalLayer-2d4eca15.js';
import './PortalItem-496c46b9.js';
import './RefreshableLayer-079cea19.js';
import './ScaleRangeLayer-cb457ce8.js';
import './TemporalLayer-64ff2afe.js';
import './TimeInfo-e0d5d311.js';
import './FeatureType-6da2d9f8.js';
import './fieldProperties-cc8fc820.js';
import './FieldsIndex-d76382ca.js';
import './LayerFloorInfo-c765d601.js';
import './styleUtils-305b69b7.js';
import './popupUtils-5accf1e0.js';
import './TileStore-a3382c75.js';
import './TileKey-56deb206.js';
import './quickselect-ccfd8cff.js';
import './layerViewUtils-881ca26c.js';
import './GoTo-c7503168.js';
import './mathUtils-16c0d833.js';
import './TileInfo-8df7de31.js';
import './Basemap-5d7d3914.js';
import './loadAll-5f59a7da.js';
import './writeUtils-86a1a968.js';
import './TablesMixin-f3bfd686.js';
import './GraphicsCollection-93be4d65.js';
import './Scheduler-bf4dcdbd.js';
import './unitBezier-0f2e6a45.js';
import './mat2d-9870c32e.js';
import './vec2-c76b9984.js';
import './vec2f64-503345b4.js';
import './projection-0d4d5278.js';
import './mat3-37a7c443.js';
import './vec2f32-7c7b1123.js';
import './TileStrategy-2047ff7a.js';
import './screenshotUtils-779cdb1c.js';
import './capabilities-07025a00.js';
import './definitions-a1bd4630.js';
import './Utils-8509bfb9.js';
import './number-888f4898.js';
import './ShaderCompiler-1ba0e7b6.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-7a78d364.js';
import './pixelUtils-14370fa4.js';
import './Container-b4c3ae6f.js';
import './EffectList-1cdcf1eb.js';
import './earcut-05cd758b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=[1,0],s=[0,1];class i{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}};}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null);}draw(e,r,s){const{context:i}=e,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(e),this._quad||(this._quad=new r$1(i,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(e,r,n):this._radialBlur(e,r),o.unbind();}_gaussianBlur(e,t,i){const{context:a,state:n,painter:o,pixelRatio:u}=e,{size:l}=n,{materialManager:d}=o,b=this._programDesc,p=this._quad,c=[Math.round(u*l[0]),Math.round(u*l[1])],h=this._blurFBO,g=d.getProgram(e,b.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);a.useProgram(g),a.setBlendingEnabled(!1),a.bindFramebuffer(h),a.bindTexture(t.colorTexture,4),g.setUniform1i("u_colorTexture",4),g.setUniform2fv("u_texSize",c),g.setUniform2fv("u_direction",r),g.setUniform1f("u_sigma",i),p.draw(),a.bindFramebuffer(t),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.bindTexture(h.colorTexture,5),g.setUniform1i("u_colorTexture",5),g.setUniform2fv("u_direction",s),p.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0);}_radialBlur(e,t){const{context:r,painter:s}=e,{materialManager:i}=s,a=this._programDesc,n=this._quad,o=this._blurFBO;r.bindFramebuffer(o);const u=i.getProgram(e,a.radialBlur);r.useProgram(u),r.setBlendingEnabled(!1),r.bindTexture(t.colorTexture,4),u.setUniform1i("u_colorTexture",4),n.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);const l=i.getProgram(e,a.blit);r.useProgram(l),r.bindTexture(o.colorTexture,5),l.setUniform1i("u_texture",5),r.setBlendFunction(1,771),n.draw();}_createOrResizeResources(t){const{context:r,state:s,pixelRatio:i}=t,{size:a}=s,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new l(r,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}));}}

export { i as Blur };