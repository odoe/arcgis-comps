import { e as e$1, d, i, a1 as a$2, aT as S, D as l } from './messageBundle-f75b4090.js';
import { h } from './Color-d1b9b54f.js';
import { r } from './enumeration-d3301938.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends a$2{constructor(r){super(r),this.type=null;}};e$1([d({readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=e$1([i("esri.rest.support.ColorRamp")],e);const p$1=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m$2;let c$1=m$2=class extends p$1{constructor(o){super(o),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic";}clone(){return new m$2({fromColor:l(this.fromColor),toColor:l(this.toColor),algorithm:this.algorithm})}};e$1([r({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],c$1.prototype,"algorithm",void 0),e$1([d({type:h,json:{type:[S],write:!0}})],c$1.prototype,"fromColor",void 0),e$1([d({type:h,json:{type:[S],write:!0}})],c$1.prototype,"toColor",void 0),e$1([d({type:["algorithmic"]})],c$1.prototype,"type",void 0),c$1=m$2=e$1([i("esri.rest.support.AlgorithmicColorRamp")],c$1);const a$1=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c;let m$1=c=class extends p$1{constructor(o){super(o),this.colorRamps=null,this.type="multipart";}clone(){return new c({colorRamps:l(this.colorRamps)})}};e$1([d({type:[a$1],json:{write:!0}})],m$1.prototype,"colorRamps",void 0),e$1([d({type:["multipart"]})],m$1.prototype,"type",void 0),m$1=c=e$1([i("esri.rest.support.MultipartColorRamp")],m$1);const a=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={key:"type",base:p$1,typeMap:{algorithmic:a$1,multipart:a}};function p(o){return o&&o.type?"algorithmic"===o.type?a$1.fromJSON(o):"multipart"===o.type?a.fromJSON(o):null:null}

export { a, m, p };
