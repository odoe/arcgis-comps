'use strict';

const request = require('./messageBundle-8be88d04.js');
const loadAll = require('./loadAll-e25ec3d0.js');
const BuildingComponentSublayer = require('./BuildingComponentSublayer-0ed854cd.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a;const p={type:request.S,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:l}}},read:!1}};function l(r,o,t){if(r&&Array.isArray(r))return new request.S(r.map((r=>{const e=y(r);if(e){const o=new e;return o.read(r,t),o}t&&t.messages&&r&&t.messages.push(new request.t$2("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:t}));})))}let c=a=class extends BuildingComponentSublayer.n{constructor(r){super(r),this.type="building-group",this.listMode="show",this.sublayers=null;}loadAll(){return loadAll.i(this,(r=>a.forEachSublayer(this.sublayers,(e=>{"building-group"!==e.type&&r(e);}))))}};function y(r){return "group"===r.layerType?c:BuildingComponentSublayer.U}request.e([request.d({type:["hide","show","hide-children"],json:{write:!0}})],c.prototype,"listMode",void 0),request.e([request.d(p)],c.prototype,"sublayers",void 0),c=a=request.e([request.i("esri.layers.buildingSublayers.BuildingGroupSublayer")],c),function(r){function e(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&e(r.sublayers,o);}));}r.sublayersProperty=p,r.readSublayers=l,r.forEachSublayer=e;}(c||(c={}));const d=c;

exports.d = d;
