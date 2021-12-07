import { e, d, i as i$1 } from './messageBundle-f75b4090.js';
import { c, a } from './GraphicsCollection-58a35288.js';
import { b } from './Layer-b50ea610.js';
import { i } from './BlendLayer-38b8abf7.js';
import { s } from './ScaleRangeLayer-584ce37b.js';
import { x } from './ElevationInfo-be94499b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends(i(s(b))){constructor(r){super(r),this.elevationInfo=null,this.graphics=new c,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1;}destroy(){this.removeAll(),this.graphics.destroy();}add(r){return this.graphics.add(r),this}addMany(r){return this.graphics.addMany(r),this}removeAll(){return this.graphics.removeAll(),this}remove(r){this.graphics.remove(r);}removeMany(r){this.graphics.removeMany(r);}on(r,e){return super.on(r,e)}graphicChanged(r){this.emit("graphic-update",r);}};e([d({type:x})],n.prototype,"elevationInfo",void 0),e([d(a(c,"graphics"))],n.prototype,"graphics",void 0),e([d({type:["show","hide"]})],n.prototype,"listMode",void 0),e([d()],n.prototype,"screenSizePerspectiveEnabled",void 0),e([d({readOnly:!0})],n.prototype,"type",void 0),e([d({constructOnly:!0})],n.prototype,"internal",void 0),n=e([i$1("esri.layers.GraphicsLayer")],n);const h=n;

export { h };
