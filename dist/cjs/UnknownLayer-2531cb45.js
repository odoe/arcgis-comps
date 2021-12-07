'use strict';

const request = require('./messageBundle-8be88d04.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const Layer = require('./Layer-31cde361.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
require('./index-fde8502c.js');
require('./geometry-ef17530a.js');
require('./Identifiable-a4f50f85.js');
require('./Portal-8d16604d.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends(PortalLayer.w(MultiOriginJSONSupport.l(Layer.b))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{request.v$2((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unknown layer type";r&&(s+=" "+r),e(new request.s("layer:unknown-layer-type",s,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(){return null}};request.e([request.d({readOnly:!0})],a.prototype,"resourceInfo",void 0),request.e([request.d({type:["show","hide"]})],a.prototype,"listMode",void 0),request.e([request.d({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=request.e([request.i("esri.layers.UnknownLayer")],a);const c=a;

exports.default = c;
