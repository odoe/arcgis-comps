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
let c=class extends(PortalLayer.w(MultiOriginJSONSupport.l(Layer.b))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{request.v$2((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unsupported layer type";r&&(s+=" "+r),o(new request.s("layer:unsupported-layer-type",s,{layerType:r}));}));})));}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e);}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};request.e([request.d({readOnly:!0})],c.prototype,"resourceInfo",void 0),request.e([request.d({type:["show","hide"]})],c.prototype,"listMode",void 0),request.e([request.d({json:{read:!1},readOnly:!0,value:"unsupported"})],c.prototype,"type",void 0),c=request.e([request.i("esri.layers.UnsupportedLayer")],c);const u=c;

exports.default = u;
