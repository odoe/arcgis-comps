'use strict';

const request = require('./messageBundle-312ceb47.js');
const Layer = require('./Layer-849337e0.js');
const PortalLayer = require('./PortalLayer-19d79370.js');
require('./index-57f2cfbb.js');
require('./JSONSupport-53c01d03.js');
require('./unitUtils-61d611e2.js');
require('./asyncUtils-9f974032.js');
require('./PortalItem-42e06deb.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends(PortalLayer.w(Layer.l(Layer.b))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{request.v((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unknown layer type";r&&(s+=" "+r),e(new request.s$1("layer:unknown-layer-type",s,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(){return null}};request.e([request.d({readOnly:!0})],a.prototype,"resourceInfo",void 0),request.e([request.d({type:["show","hide"]})],a.prototype,"listMode",void 0),request.e([request.d({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=request.e([request.i("esri.layers.UnknownLayer")],a);const c=a;

exports.default = c;
