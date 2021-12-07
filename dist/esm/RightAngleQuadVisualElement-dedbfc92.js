import { u, A as r$3 } from './messageBundle-f75b4090.js';
import { r as r$2, c as c$3, i } from './mat4-f34c6460.js';
import { e } from './mat4f64-677a419d.js';
import { B as a, q, a as j, c as c$1, r as r$1, u as u$1 } from './mathUtils-e16f9389.js';
import { n } from './common-d5b993de.js';
import { r } from './vec4f32-d544d091.js';
import { c as c$2 } from './vectorStacks-9205ea46.js';
import { c } from './LineVisualElement-7e3bfc5b.js';
import { a0 as u$2 } from './Texture-1e5e4be2.js';
import { aI as h, au as W, P } from './ColorMaterial-cf44e08d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class y extends c{constructor(t){super(t),this._handles=new u,this._quadMaterial=null,this._outlineMaterial=null,this._maxSize=0,this._position=n(),this._up=n(),this._right=n(),this._renderOccluded=4,this._color=r(1,0,0,1),this._outlineColor=r(0,0,0,1),this._outlineSize=0,this._size=32,this._outlineRenderOccluded=16,this.applyProps(t);}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial());}get color(){return this._color}set color(e){a(this._color,e),this._updateQuadMaterial();}get outlineColor(){return this._outlineColor}set outlineColor(e){a(this._outlineColor,e),this._updateOutlineMaterial();}get outlineSize(){return this._outlineSize}set outlineSize(e){const t=0===this._outlineSize!=(0===e);this._outlineSize=e,t?this.recreateGeometry():this._updateOutlineMaterial();}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateTransform());}get outlineRenderOccluded(){return this._outlineRenderOccluded}set outlineRenderOccluded(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial();}set geometry({previous:e,center:t,next:i}){this._maxSize=Math.min(q(t,e),q(t,i))/3,j(this._up,c$1(this._up,e,t)),j(this._right,c$1(this._right,i,t)),r$1(this._position,t),this.recreateGeometry();}createExternalResources(){this._quadMaterial=new h(this.quadMaterialParameters),this._outlineMaterial=new W(this.outlineMaterialParameters),this._handles.add(this.view.state.watch("camera",(()=>this._updateTransform())));}destroyExternalResources(){this._quadMaterial=null,this._outlineMaterial=null,this._handles.removeAll();}forEachExternalMaterial(e){e(this._quadMaterial),e(this._outlineMaterial);}createGeometries(e){this._createQuadGeometry(e),this._createOutlineGeometry(e),this._updateTransform(e);}_createQuadGeometry(e){const t=this._quadGeometryData(this._up,this._right);e.addGeometry(t,this._quadMaterial);}_createOutlineGeometry(e){if(0===this._outlineSize)return;const t=u$1(c$2.get(),this._up,this._right),i=P.createPolylineGeometry([this._up,t,this._right]);e.addGeometry(i,this._outlineMaterial);}_updateTransform(e=this.object){const a=this.view.state.camera,o=this._size*a.computeScreenPixelSizeAt(this._position),l=Math.min(this._maxSize,o);r$2(z),c$3(z,z,this._position),i(z,z,[l,l,l]),r$3(e)&&(e.transformation=z);}_quadGeometryData(e,t){const i=u$1(c$2.get(),e,t);return new u$2([["position",{size:3,data:[0,0,0,...t,...e,...i],exclusive:!0}]],[["position",new Uint16Array([0,1,2,1,2,3])]])}get quadMaterialParameters(){return {color:this._color,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded}}_updateQuadMaterial(){this._quadMaterial&&this._quadMaterial.setParameters(this.quadMaterialParameters);}get outlineMaterialParameters(){return {color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded}}_updateOutlineMaterial(){this._outlineMaterial&&this._outlineMaterial.setParameters(this.outlineMaterialParameters);}}const z=e();

export { y };
