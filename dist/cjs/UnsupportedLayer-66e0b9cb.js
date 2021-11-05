'use strict';

const request = require('./MapView-1195e7f1.js');
require('./index-b630e408.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends(request.w$5(request.l$3(request.b$9))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{request.v$12((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unsupported layer type";r&&(s+=" "+r),o(new request.s$3("layer:unsupported-layer-type",s,{layerType:r}));}));})));}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e);}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};request.e([request.d({readOnly:!0})],c.prototype,"resourceInfo",void 0),request.e([request.d({type:["show","hide"]})],c.prototype,"listMode",void 0),request.e([request.d({json:{read:!1},readOnly:!0,value:"unsupported"})],c.prototype,"type",void 0),c=request.e([request.i("esri.layers.UnsupportedLayer")],c);const u=c;

exports.default = u;
