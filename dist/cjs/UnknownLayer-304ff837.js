'use strict';

const request = require('./MapView-922b9f1e.js');
require('./index-57f2cfbb.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends(request.w$5(request.l$3(request.b$9))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{request.v$12((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unknown layer type";r&&(s+=" "+r),e(new request.s$3("layer:unknown-layer-type",s,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(){return null}};request.e([request.d({readOnly:!0})],a.prototype,"resourceInfo",void 0),request.e([request.d({type:["show","hide"]})],a.prototype,"listMode",void 0),request.e([request.d({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=request.e([request.i("esri.layers.UnknownLayer")],a);const c=a;

exports.default = c;
