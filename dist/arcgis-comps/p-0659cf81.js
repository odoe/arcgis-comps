import{P as e,e as i,d as s,i as t}from"./p-9ae46e68.js";import{a}from"./p-fe01b82b.js";import{m as n,p as r}from"./p-8ac97b63.js";import{af as l}from"./p-566b0715.js";const o=new e({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let d=class extends a{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};i([s({type:l,json:{write:!0}})],d.prototype,"baseSymbol",void 0),i([s({types:n,json:{read:{reader:r},write:!0}})],d.prototype,"colorRamp",void 0),i([s({json:{read:o.read,write:o.write}})],d.prototype,"type",void 0),d=i([t("esri.rest.support.ClassificationDefinition")],d);const u=d,f=new e({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),v=new e({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let p=class extends u{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};i([s({json:{write:!0}})],p.prototype,"breakCount",void 0),i([s({json:{write:!0}})],p.prototype,"classificationField",void 0),i([s({type:String,json:{read:f.read,write:f.write}})],p.prototype,"classificationMethod",void 0),i([s({json:{write:!0}})],p.prototype,"normalizationField",void 0),i([s({json:{read:v.read,write:v.write}})],p.prototype,"normalizationType",void 0),i([s({value:null,json:{write:!0}})],p.prototype,"standardDeviationInterval",null),i([s({value:null,json:{write:!0}})],p.prototype,"definedInterval",null),i([s()],p.prototype,"type",void 0),p=i([t("esri.rest.support.ClassBreaksDefinition")],p);const c=p;export{c as l}