'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const utils = require('./utils-f7ec83ae.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t){return {geometryType:unitUtils.v$1(t[0]),geometries:t.map((e=>e.toJSON()))}}function o(e,r,o){const n=unitUtils.a$5(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i$1=class extends JSONSupport.a{constructor(r){super(r),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null;}toJSON(){const r=this.geometries.map((function(r){return r.toJSON()})),t=this.geometries[0],o={};return o.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),o.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),o.geometries=JSON.stringify({geometryType:unitUtils.v$1(t),geometries:r}),this.transformation&&(o.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(o.transformForward=this.transformForward),o}};request.e([request.d()],i$1.prototype,"geometries",void 0),request.e([request.d({json:{read:{source:"outSR"}}})],i$1.prototype,"outSpatialReference",void 0),request.e([request.d()],i$1.prototype,"transformation",void 0),request.e([request.d()],i$1.prototype,"transformForward",void 0),i$1=request.e([request.i("esri.rest.support.ProjectParameters")],i$1);const a=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=request.b(a);async function n(o$1,m,n){m=i(m);const u=utils.e(o$1),c={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=unitUtils.v$1(m.geometries[0]),f=utils.r(c,n);return request.E(u.path+"/project",f).then((({data:{geometries:r}})=>o(r,a,j)))}

exports.a = a;
exports.n = n;
exports.o = o;
exports.r = r;
