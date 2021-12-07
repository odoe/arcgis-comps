'use strict';

const request = require('./messageBundle-8be88d04.js');
const geometry = require('./geometry-ef17530a.js');
const persistable = require('./persistable-288135cc.js');
const projection = require('./projection-b19710fa.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let y=m=class extends request.a$2{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!projection.tn(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new request.t$2("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new geometry.v;projection.hn(e,p,s.layer.spatialReference),r[o]=p.toJSON(s);}else r[o]=e.toJSON(s);delete r[o].spatialReference;}clone(){return new m({geometry:request.l$1(this.geometry),type:this.type})}};request.e([request.d({type:geometry.v}),persistable.g()],y.prototype,"geometry",void 0),request.e([request.r$2(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),request.e([request.d({type:["clip","mask","replace"],nonNullable:!0}),persistable.g()],y.prototype,"type",void 0),y=m=request.e([request.i("esri.layers.support.SceneModification")],y);const f=y;

exports.f = f;
