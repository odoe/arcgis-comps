import { Q as v, a as s, e, b as d, i } from './cast-e5ea2533.js';
import { l, b } from './Layer-663fafaf.js';
import { w } from './PortalLayer-0ef8a2d2.js';
import './JSONSupport-8dda8bae.js';
import './geometry-160ffbb5.js';
import './Portal-f1457cb4.js';
import './Polyline-56152656.js';
import './Collection-ac20f1a1.js';
import './Identifiable-0fb3fc58.js';
import './asyncUtils-847ae6e6.js';
import './PortalItem-85b3bb14.js';
import './assets-1ab0ccbe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends(w(l(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{v((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unsupported layer type";r&&(s$1+=" "+r),o(new s("layer:unsupported-layer-type",s$1,{layerType:r}));}));})));}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e);}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};e([d({readOnly:!0})],c.prototype,"resourceInfo",void 0),e([d({type:["show","hide"]})],c.prototype,"listMode",void 0),e([d({json:{read:!1},readOnly:!0,value:"unsupported"})],c.prototype,"type",void 0),c=e([i("esri.layers.UnsupportedLayer")],c);const u=c;

export default u;
