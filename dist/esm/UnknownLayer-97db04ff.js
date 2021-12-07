import { aR as v, e, d, i, s } from './messageBundle-f75b4090.js';
import { l } from './MultiOriginJSONSupport-cb4804f4.js';
import { b } from './Layer-b50ea610.js';
import { w } from './PortalLayer-290979fa.js';
import './index-b157fcf2.js';
import './geometry-7e07b1ba.js';
import './Identifiable-da047c47.js';
import './Portal-c5cfa317.js';
import './asyncUtils-fe35d349.js';
import './PortalItem-155284f3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends(w(l(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{v((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unknown layer type";r&&(s$1+=" "+r),e(new s("layer:unknown-layer-type",s$1,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(){return null}};e([d({readOnly:!0})],a.prototype,"resourceInfo",void 0),e([d({type:["show","hide"]})],a.prototype,"listMode",void 0),e([d({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=e([i("esri.layers.UnknownLayer")],a);const c=a;

export default c;
