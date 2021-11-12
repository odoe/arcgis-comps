import { aw as v, h as s, e, a as d, i } from './jsxFactory-a3b6abde.js';
import { l, b } from './MultiOriginJSONSupport-22dd2d29.js';
import { w } from './PortalLayer-8e73039a.js';
import './index-8dec7690.js';
import './Graphic-08cda9ca.js';
import './JSONSupport-4f0a3248.js';
import './asyncUtils-9a49e799.js';
import './PortalItem-4dd070a8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends(w(l(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{v((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unknown layer type";r&&(s$1+=" "+r),e(new s("layer:unknown-layer-type",s$1,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(){return null}};e([d({readOnly:!0})],a.prototype,"resourceInfo",void 0),e([d({type:["show","hide"]})],a.prototype,"listMode",void 0),e([d({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=e([i("esri.layers.UnknownLayer")],a);const c=a;

export default c;
