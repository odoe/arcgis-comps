'use strict';

const request = require('./messageBundle-8be88d04.js');
const Color = require('./Color-7d915caa.js');
const enumeration = require('./enumeration-f235fe07.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends request.a$2{constructor(r){super(r),this.type=null;}};request.e([request.d({readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=request.e([request.i("esri.rest.support.ColorRamp")],e);const p$1=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m$2;let c$1=m$2=class extends p$1{constructor(o){super(o),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic";}clone(){return new m$2({fromColor:request.l$1(this.fromColor),toColor:request.l$1(this.toColor),algorithm:this.algorithm})}};request.e([enumeration.r({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],c$1.prototype,"algorithm",void 0),request.e([request.d({type:Color.h,json:{type:[request.S$2],write:!0}})],c$1.prototype,"fromColor",void 0),request.e([request.d({type:Color.h,json:{type:[request.S$2],write:!0}})],c$1.prototype,"toColor",void 0),request.e([request.d({type:["algorithmic"]})],c$1.prototype,"type",void 0),c$1=m$2=request.e([request.i("esri.rest.support.AlgorithmicColorRamp")],c$1);const a$1=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c;let m$1=c=class extends p$1{constructor(o){super(o),this.colorRamps=null,this.type="multipart";}clone(){return new c({colorRamps:request.l$1(this.colorRamps)})}};request.e([request.d({type:[a$1],json:{write:!0}})],m$1.prototype,"colorRamps",void 0),request.e([request.d({type:["multipart"]})],m$1.prototype,"type",void 0),m$1=c=request.e([request.i("esri.rest.support.MultipartColorRamp")],m$1);const a=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={key:"type",base:p$1,typeMap:{algorithmic:a$1,multipart:a}};function p(o){return o&&o.type?"algorithmic"===o.type?a$1.fromJSON(o):"multipart"===o.type?a.fromJSON(o):null:null}

exports.a = a;
exports.m = m;
exports.p = p;
