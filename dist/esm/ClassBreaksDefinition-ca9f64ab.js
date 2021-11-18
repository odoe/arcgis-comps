import { P as o$1, e, d, i } from './messageBundle-8a146a9b.js';
import { a as a$2 } from './JSONSupport-4e29e63d.js';
import { m as m$1, p } from './colorRamps-b0e37c54.js';
import { af as a$1 } from './unitUtils-c707ba3c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=new o$1({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let l$1=class extends a$2{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null;}};e([d({type:a$1,json:{write:!0}})],l$1.prototype,"baseSymbol",void 0),e([d({types:m$1,json:{read:{reader:p},write:!0}})],l$1.prototype,"colorRamp",void 0),e([d({json:{read:c.read,write:c.write}})],l$1.prototype,"type",void 0),l$1=e([i("esri.rest.support.ClassificationDefinition")],l$1);const m=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new o$1({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),a=new o$1({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let n=class extends m{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition";}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e);}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e);}};e([d({json:{write:!0}})],n.prototype,"breakCount",void 0),e([d({json:{write:!0}})],n.prototype,"classificationField",void 0),e([d({type:String,json:{read:o.read,write:o.write}})],n.prototype,"classificationMethod",void 0),e([d({json:{write:!0}})],n.prototype,"normalizationField",void 0),e([d({json:{read:a.read,write:a.write}})],n.prototype,"normalizationType",void 0),e([d({value:null,json:{write:!0}})],n.prototype,"standardDeviationInterval",null),e([d({value:null,json:{write:!0}})],n.prototype,"definedInterval",null),e([d()],n.prototype,"type",void 0),n=e([i("esri.rest.support.ClassBreaksDefinition")],n);const l=n;

export { l };
