'use strict';

const request = require('./messageBundle-312ceb47.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const colorRamps = require('./colorRamps-c066f1f7.js');
const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=new request.o$1({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let l$1=class extends JSONSupport.a{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null;}};request.e([request.d({type:unitUtils.a$4,json:{write:!0}})],l$1.prototype,"baseSymbol",void 0),request.e([request.d({types:colorRamps.m,json:{read:{reader:colorRamps.p},write:!0}})],l$1.prototype,"colorRamp",void 0),request.e([request.d({json:{read:c.read,write:c.write}})],l$1.prototype,"type",void 0),l$1=request.e([request.i("esri.rest.support.ClassificationDefinition")],l$1);const m=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new request.o$1({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),a=new request.o$1({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let n=class extends m{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition";}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e);}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e);}};request.e([request.d({json:{write:!0}})],n.prototype,"breakCount",void 0),request.e([request.d({json:{write:!0}})],n.prototype,"classificationField",void 0),request.e([request.d({type:String,json:{read:o.read,write:o.write}})],n.prototype,"classificationMethod",void 0),request.e([request.d({json:{write:!0}})],n.prototype,"normalizationField",void 0),request.e([request.d({json:{read:a.read,write:a.write}})],n.prototype,"normalizationType",void 0),request.e([request.d({value:null,json:{write:!0}})],n.prototype,"standardDeviationInterval",null),request.e([request.d({value:null,json:{write:!0}})],n.prototype,"definedInterval",null),request.e([request.d()],n.prototype,"type",void 0),n=request.e([request.i("esri.rest.support.ClassBreaksDefinition")],n);const l=n;

exports.l = l;
