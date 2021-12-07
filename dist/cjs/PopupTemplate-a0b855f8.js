'use strict';

const request = require('./messageBundle-8be88d04.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const enumeration = require('./enumeration-f235fe07.js');
const Identifiable = require('./Identifiable-a4f50f85.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e$4=class extends request.a$2{constructor(r){super(r),this.type=null;}};request.e([request.d({type:["attachments","custom","fields","media","text"],readOnly:!0,json:{read:!1,write:!0}})],e$4.prototype,"type",void 0),e$4=request.e([request.i("esri.popup.content.Content")],e$4);const p$h=e$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var o$1;let i$6=o$1=class extends p$h{constructor(t){super(t),this.description=null,this.displayType=null,this.title=null,this.type="attachments";}clone(){return new o$1({description:this.description,displayType:this.displayType,title:this.title})}};request.e([request.d({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],i$6.prototype,"description",void 0),request.e([request.d({type:["auto","preview","list"],json:{write:!0}})],i$6.prototype,"displayType",void 0),request.e([request.d({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],i$6.prototype,"title",void 0),request.e([request.d({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],i$6.prototype,"type",void 0),i$6=o$1=request.e([request.i("esri.popup.content.AttachmentsContent")],i$6);const p$g=i$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$f;let c$a=p$f=class extends p$h{constructor(o){super(o),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom";}clone(){return new p$f({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?request.l$1(this.outFields):null})}};request.e([request.d()],c$a.prototype,"creator",void 0),request.e([request.d()],c$a.prototype,"destroyer",void 0),request.e([request.d()],c$a.prototype,"outFields",void 0),request.e([request.d({type:["custom"],readOnly:!0})],c$a.prototype,"type",void 0),c$a=p$f=request.e([request.i("esri.popup.content.CustomContent")],c$a);const i$5=c$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$a=request.s$5()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});a$a.toJSON.bind(a$a);const r$4=a$a.fromJSON.bind(a$a);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n$3;let l$4=n$3=class extends request.a$2{constructor(t){super(t),this.dateFormat=null,this.dateTimeFormatOptions=null,this.digitSeparator=!1,this.places=null;}clone(){return new n$3({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(t){return this.dateFormat?request.L$1(t,{...request.S$1(this.dateFormat),...this.dateTimeFormatOptions}):request.m(t,request.u$1(this))}};request.e([enumeration.r(a$a)],l$4.prototype,"dateFormat",void 0),request.e([request.d({type:Object,json:{read:!1}})],l$4.prototype,"dateTimeFormatOptions",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],l$4.prototype,"digitSeparator",void 0),request.e([request.d({type:request.S$2,json:{write:!0}})],l$4.prototype,"places",void 0),l$4=n$3=request.e([request.i("esri.popup.support.FieldInfoFormat")],l$4);const u$1=l$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$9;let n$2=a$9=class extends request.a$2{constructor(t){super(t),this.fieldName=null,this.format=null,this.isEditable=!1,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0;}clone(){return new a$9({fieldName:this.fieldName,format:this.format?request.l$1(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};request.e([request.d({type:String,json:{write:!0}})],n$2.prototype,"fieldName",void 0),request.e([request.d({type:u$1,json:{write:!0}})],n$2.prototype,"format",void 0),request.e([request.d({type:Boolean,json:{write:!0,default:!1}})],n$2.prototype,"isEditable",void 0),request.e([request.d({type:String,json:{write:!0}})],n$2.prototype,"label",void 0),request.e([enumeration.r(new request.o$1({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],n$2.prototype,"stringFieldOption",void 0),request.e([request.d({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],n$2.prototype,"statisticType",void 0),request.e([request.d({type:String,json:{write:!0}})],n$2.prototype,"tooltip",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],n$2.prototype,"visible",void 0),n$2=a$9=request.e([request.i("esri.popup.FieldInfo")],n$2);const c$9=n$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n$1;let l$3=n$1=class extends p$h{constructor(e){super(e),this.description=null,this.fieldInfos=null,this.title=null,this.type="fields";}writeFieldInfos(e,o){o.fieldInfos=e&&e.map((e=>e.toJSON()));}clone(){return new n$1({description:this.description,fieldInfos:Array.isArray(this.fieldInfos)?request.l$1(this.fieldInfos):null,title:this.title})}};request.e([request.d({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],l$3.prototype,"description",void 0),request.e([request.d({type:[c$9]})],l$3.prototype,"fieldInfos",void 0),request.e([request.r$2("fieldInfos")],l$3.prototype,"writeFieldInfos",null),request.e([request.d({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],l$3.prototype,"title",void 0),request.e([request.d({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],l$3.prototype,"type",void 0),l$3=n$1=request.e([request.i("esri.popup.content.FieldsContent")],l$3);const c$8=l$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$2=class extends request.a$2{constructor(t){super(t),this.altText=null,this.caption="",this.title="",this.type=null;}};request.e([request.d({type:String,json:{write:!0}})],s$2.prototype,"altText",void 0),request.e([request.d({type:String,json:{write:!0}})],s$2.prototype,"caption",void 0),request.e([request.d({type:String,json:{write:!0}})],s$2.prototype,"title",void 0),request.e([request.d({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],s$2.prototype,"type",void 0),s$2=request.e([request.i("esri.popup.content.mixins.MediaInfo")],s$2);const p$e=s$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e$3;let p$d=e$3=class extends request.p{constructor(o){super(o),this.tooltip=null,this.value=null;}clone(){return new e$3({tooltip:this.tooltip,value:this.value})}};request.e([request.d()],p$d.prototype,"tooltip",void 0),request.e([request.d()],p$d.prototype,"value",void 0),p$d=e$3=request.e([request.i("esri.popup.content.support.ChartMediaInfoValueSeries")],p$d);const c$7=p$d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$c;let l$2=p$c=class extends request.a$2{constructor(o){super(o),this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null;}clone(){return new p$c({fields:request.l$1(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})}};request.e([request.d({type:[String],json:{write:!0}})],l$2.prototype,"fields",void 0),request.e([request.d({type:String,json:{write:!0}})],l$2.prototype,"normalizeField",void 0),request.e([request.d({type:[c$7],json:{read:!1}})],l$2.prototype,"series",void 0),request.e([request.d({type:String,json:{write:!0}})],l$2.prototype,"tooltipField",void 0),l$2=p$c=request.e([request.i("esri.popup.content.support.ChartMediaInfoValue")],l$2);const n=l$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p$b=class extends p$e{constructor(r){super(r),this.type=null,this.value=null;}};request.e([request.d({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],p$b.prototype,"type",void 0),request.e([request.d({type:n,json:{write:!0}})],p$b.prototype,"value",void 0),p$b=request.e([request.i("esri.popup.content.mixins.ChartMediaInfo")],p$b);const a$8=p$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c$6=request.s$5()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$7;let p$a=a$7=class extends a$8{constructor(t){super(t),this.type="bar-chart";}clone(){return new a$7({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};request.e([request.d({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:c$6.write}})],p$a.prototype,"type",void 0),p$a=a$7=request.e([request.i("esri.popup.content.BarChartMediaInfo")],p$a);const i$4=p$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$6;let p$9=a$6=class extends a$8{constructor(t){super(t),this.type="column-chart";}clone(){return new a$6({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};request.e([request.d({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:c$6.write}})],p$9.prototype,"type",void 0),p$9=a$6=request.e([request.i("esri.popup.content.ColumnChartMediaInfo")],p$9);const c$5=p$9;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e$2;let p$8=e$2=class extends request.a$2{constructor(r){super(r),this.linkURL=null,this.sourceURL=null;}clone(){return new e$2({linkURL:this.linkURL,sourceURL:this.sourceURL})}};request.e([request.d({type:String,json:{write:!0}})],p$8.prototype,"linkURL",void 0),request.e([request.d({type:String,json:{write:!0}})],p$8.prototype,"sourceURL",void 0),p$8=e$2=request.e([request.i("esri.popup.content.support.ImageMediaInfoValue")],p$8);const c$4=p$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$5;let i$3=a$5=class extends p$e{constructor(e){super(e),this.refreshInterval=null,this.type="image",this.value=null;}clone(){return new a$5({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}};request.e([request.d({type:Number,json:{write:!0}})],i$3.prototype,"refreshInterval",void 0),request.e([request.d({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],i$3.prototype,"type",void 0),request.e([request.d({type:c$4,json:{write:!0}})],i$3.prototype,"value",void 0),i$3=a$5=request.e([request.i("esri.popup.content.ImageMediaInfo")],i$3);const p$7=i$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i$2;let a$4=i$2=class extends a$8{constructor(t){super(t),this.type="line-chart";}clone(){return new i$2({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};request.e([request.d({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:c$6.write}})],a$4.prototype,"type",void 0),a$4=i$2=request.e([request.i("esri.popup.content.LineChartMediaInfo")],a$4);const p$6=a$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$5;let i$1=p$5=class extends a$8{constructor(t){super(t),this.type="pie-chart";}clone(){return new p$5({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};request.e([request.d({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:c$6.write}})],i$1.prototype,"type",void 0),i$1=p$5=request.e([request.i("esri.popup.content.PieChartMediaInfo")],i$1);const a$3=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={base:p$e,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":i$4,"column-chart":c$5,"line-chart":p$6,"pie-chart":a$3,image:p$7}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l$1;let I=l$1=class extends p$h{constructor(o){super(o),this.activeMediaInfoIndex=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media";}readMediaInfos(o){return o&&o.map((o=>"image"===o.type?p$7.fromJSON(o):"barchart"===o.type?i$4.fromJSON(o):"columnchart"===o.type?c$5.fromJSON(o):"linechart"===o.type?p$6.fromJSON(o):"piechart"===o.type?a$3.fromJSON(o):void 0)).filter(Boolean)}writeMediaInfos(o,e){e.mediaInfos=o&&o.map((o=>o.toJSON()));}clone(){return new l$1({activeMediaInfoIndex:this.activeMediaInfoIndex,description:this.description,mediaInfos:this.mediaInfos?request.l$1(this.mediaInfos):null,title:this.title})}};request.e([request.d()],I.prototype,"activeMediaInfoIndex",void 0),request.e([request.d({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],I.prototype,"description",void 0),request.e([request.d({types:[m]})],I.prototype,"mediaInfos",void 0),request.e([request.o$2("mediaInfos")],I.prototype,"readMediaInfos",null),request.e([request.r$2("mediaInfos")],I.prototype,"writeMediaInfos",null),request.e([request.d({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],I.prototype,"title",void 0),request.e([request.d({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],I.prototype,"type",void 0),I=l$1=request.e([request.i("esri.popup.content.MediaContent")],I);const u=I;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var s$1;let p$4=s$1=class extends p$h{constructor(t){super(t),this.text=null,this.type="text";}clone(){return new s$1({text:this.text})}};request.e([request.d({type:String,json:{write:!0}})],p$4.prototype,"text",void 0),request.e([request.d({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],p$4.prototype,"type",void 0),p$4=s$1=request.e([request.i("esri.popup.content.TextContent")],p$4);const c$3=p$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$3={base:null,key:"type",typeMap:{attachment:p$g,media:u,text:c$3,field:c$8}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var s;let p$3=s=class extends request.a$2{constructor(r){super(r),this.name=null,this.title=null,this.expression=null,this.returnType=null;}clone(){return new s({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};request.e([request.d({type:String,json:{write:!0}})],p$3.prototype,"name",void 0),request.e([request.d({type:String,json:{write:!0}})],p$3.prototype,"title",void 0),request.e([request.d({type:String,json:{write:!0}})],p$3.prototype,"expression",void 0),request.e([request.d({type:["string","number"],json:{write:!0}})],p$3.prototype,"returnType",void 0),p$3=s=request.e([request.i("esri.popup.ExpressionInfo")],p$3);const i=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e$1;let p$2=e$1=class extends request.a$2{constructor(o){super(o),this.returnTopmostRaster=null,this.showNoDataRecords=null;}clone(){return new e$1({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};request.e([request.d({type:Boolean,json:{write:!0}})],p$2.prototype,"returnTopmostRaster",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],p$2.prototype,"showNoDataRecords",void 0),p$2=e$1=request.e([request.i("esri.popup.LayerOptions")],p$2);const a$2=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let p$1=t=class extends request.a$2{constructor(r){super(r),this.field=null,this.order=null;}clone(){return new t({field:this.field,order:this.order})}};request.e([request.d({type:String,json:{write:!0}})],p$1.prototype,"field",void 0),request.e([request.d({type:["asc","desc"],json:{write:!0}})],p$1.prototype,"order",void 0),p$1=t=request.e([request.i("esri.popup.support.RelatedRecordsInfoFieldOrder")],p$1);const c$2=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;let c$1=d=class extends request.a$2{constructor(o){super(o),this.showRelatedRecords=null,this.orderByFields=null;}clone(){return new d({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?request.l$1(this.orderByFields):null})}};request.e([request.d({type:Boolean,json:{write:!0}})],c$1.prototype,"showRelatedRecords",void 0),request.e([request.d({type:[c$2],json:{write:!0}})],c$1.prototype,"orderByFields",void 0),c$1=d=request.e([request.i("esri.popup.RelatedRecordsInfo")],c$1);const l=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var r$2;let p=r$2=class extends(Identifiable.r(request.p)){constructor(t){super(t),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0;}clone(){return new r$2({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};request.e([request.d()],p.prototype,"active",void 0),request.e([request.d()],p.prototype,"className",void 0),request.e([request.d()],p.prototype,"disabled",void 0),request.e([request.d()],p.prototype,"id",void 0),request.e([request.d()],p.prototype,"indicator",void 0),request.e([request.d()],p.prototype,"title",void 0),request.e([request.d()],p.prototype,"type",void 0),request.e([request.d()],p.prototype,"visible",void 0),p=r$2=request.e([request.i("esri.support.actions.ActionBase")],p);const c=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var r$1;let e=r$1=class extends c{constructor(s){super(s),this.image=null,this.type="button";}clone(){return new r$1({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};request.e([request.d()],e.prototype,"image",void 0),e=r$1=request.e([request.i("esri.support.Action.ActionButton")],e);const a$1=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var o;let r=o=class extends c{constructor(s){super(s),this.image=null,this.type="toggle",this.value=!1;}clone(){return new o({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};request.e([request.d()],r.prototype,"image",void 0),request.e([request.d()],r.prototype,"value",void 0),r=o=request.e([request.i("esri.support.Action.ActionToggle")],r);const a=r;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var O;const S=request.S.ofType({key:"type",defaultKeyValue:"button",base:c,typeMap:{button:a$1,toggle:a}}),T={base:p$h,key:"type",typeMap:{media:u,custom:i$5,text:c$3,attachments:p$g,fields:c$8}},b="esri.PopupTemplate",R=request.s$1.getLogger(b),L=["attachments","fields","media","text"];let J=O=class extends request.a$2{constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title="",this.relatedRecordsInfo=null;}castContent(t){return Array.isArray(t)?t.map((t=>request.N(T,t))):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||request.O$1(t)?t:(R.error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:o}=e;return Array.isArray(o)&&o.length>0?this._readPopupInfoElements(e):this._readPopupInfo(e)}writeContent(t,e,o,s){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter((t=>-1!==L.indexOf(t.type))).map((t=>t&&t.toJSON(s))),e.popupElements.forEach((t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type&&this._writeTextContent(t,e);}))):e.description=t;}writeFieldInfos(t,e,o,s){const{content:i}=this,r=Array.isArray(i)?i:null;if(t){const o=r?r.filter((t=>"fields"===t.type)):[],i=o.length&&o.every((t=>{var e;return null==(e=t.fieldInfos)?void 0:e.length}));e.fieldInfos=t.filter(Boolean).map((t=>{const e=t.toJSON(s);return i&&(e.visible=!1),e}));}if(r)for(const n of r)"fields"===n.type&&this._writeFieldsContent(n,e);}writeLayerOptions(t,e,o,s){e[o]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(s);}writeTitle(t,e){e.title=t||"";}clone(){const{actions:t}=this,e=t?request.l$1(t.toArray()):[];return new O({actions:e,content:Array.isArray(this.content)?request.l$1(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?request.l$1(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?request.l$1(this.fieldInfos):null,layerOptions:this.layerOptions?request.l$1(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?request.l$1(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?request.l$1(this.relatedRecordsInfo):null})}async collectRequiredFields(t,e){await this._collectExpressionInfoFields(t,e,this.expressionInfos),opacityUtils.g(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)]);}async getRequiredFields(t){const e=new Set;return await this.collectRequiredFields(e,t),[...e].sort()}_writeFieldsContent(t,e){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const o=request.l$1(t.fieldInfos);Array.isArray(e.fieldInfos)?o.forEach((t=>{const o=e.fieldInfos.find((e=>e.fieldName.toLowerCase()===t.fieldName.toLowerCase()));o?o.visible=!0:e.fieldInfos.push(t);})):e.fieldInfos=o;}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0);}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text);}_writeMediaContent(t,e){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const o=request.l$1(t.mediaInfos);Array.isArray(e.mediaInfos)?e.mediaInfos=[...e.mediaInfos,...o]:e.mediaInfos=o;}_readPopupInfoElements({description:t,mediaInfos:e,popupElements:o}){const s={description:!1,mediaInfos:!1};return o.map((o=>"media"===o.type?(o.mediaInfos||!e||s.mediaInfos||(o.mediaInfos=e,s.mediaInfos=!0),u.fromJSON(o)):"text"===o.type?(o.text||!t||s.description||(o.text=t,s.description=!0),c$3.fromJSON(o)):"attachments"===o.type?p$g.fromJSON(o):"fields"===o.type?c$8.fromJSON(o):void 0)).filter(Boolean)}_readPopupInfo({description:t,mediaInfos:e,showAttachments:o}){const s=[];return t?s.push(new c$3({text:t})):s.push(new c$8),Array.isArray(e)&&e.length&&s.push(u.fromJSON({mediaInfos:e})),o&&s.push(p$g.fromJSON({displayType:"auto"})),s.length?s:t}_getContentElementFields(t){if(!t||"attachments"===t.type)return [];if("custom"===t.type)return t.outFields||[];if("fields"===t.type)return this._getFieldInfoFields(t.fieldInfos||this.fieldInfos);if("media"===t.type){return (t.mediaInfos||[]).reduce(((t,e)=>[...t,...this._getMediaInfoFields(e)]),[])}return "text"===t.type?this._extractFieldNames(t.text):void 0}_getMediaInfoFields(t){const{caption:e,title:o,value:s}=t,i=s||{},{fields:r=[],normalizeField:n,tooltipField:p,sourceURL:l,linkURL:a}=i,d=[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(l),...this._extractFieldNames(a),...r];return n&&d.push(n),p&&d.push(p),d}_getContentFields(t){return "string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce(((t,e)=>[...t,...this._getContentElementFields(e)]),[]):[]}async _collectExpressionInfoFields(t,e,o){o&&await Promise.all(o.map((o=>opacityUtils.b(t,e,o.expression))));}_getFieldInfoFields(t){return t?t.filter((t=>void 0===t.visible||!!t.visible)).map((t=>t.fieldName)).filter((t=>-1===t.indexOf("relationships/")&&-1===t.indexOf("expression/"))):[]}_getActionsFields(t){return t?t.toArray().reduce(((t,e)=>[...t,...this._getActionFields(e)]),[]):[]}_getActionFields(t){const{className:e,title:o,type:s}=t,i="button"===s||"toggle"===s?t.image:"";return [...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(i)]}_getTitleFields(t){return "string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||"string"!=typeof t)return [];const e=/{[^}]*}/g,o=t.match(e);if(!o)return [];const s=/\{(\w+):.+\}/,i=o.filter((t=>!(0===t.indexOf("{relationships/")||0===t.indexOf("{expression/")))).map((t=>t.replace(s,"{$1}")));return i?i.map((t=>t.slice(1,-1))):[]}};request.e([request.d({type:S})],J.prototype,"actions",void 0),request.e([request.d()],J.prototype,"content",void 0),request.e([request.c("content")],J.prototype,"castContent",null),request.e([request.o$2("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments"])],J.prototype,"readContent",null),request.e([request.r$2("content",{popupElements:{type:request.S.ofType(r$3)},showAttachments:{type:Boolean},mediaInfos:{type:request.S.ofType(m)},description:{type:String}})],J.prototype,"writeContent",null),request.e([request.d({type:[i],json:{write:!0}})],J.prototype,"expressionInfos",void 0),request.e([request.d({type:[c$9]})],J.prototype,"fieldInfos",void 0),request.e([request.r$2("fieldInfos")],J.prototype,"writeFieldInfos",null),request.e([request.d({type:a$2})],J.prototype,"layerOptions",void 0),request.e([request.r$2("layerOptions")],J.prototype,"writeLayerOptions",null),request.e([request.d({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],J.prototype,"lastEditInfoEnabled",void 0),request.e([request.d()],J.prototype,"outFields",void 0),request.e([request.d()],J.prototype,"overwriteActions",void 0),request.e([request.d()],J.prototype,"returnGeometry",void 0),request.e([request.d({json:{type:String}})],J.prototype,"title",void 0),request.e([request.r$2("title")],J.prototype,"writeTitle",null),request.e([request.d({type:l,json:{write:!0}})],J.prototype,"relatedRecordsInfo",void 0),J=O=request.e([request.i(b)],J);const M=J;

exports.M = M;
exports.a = a$1;
exports.a$1 = a;
exports.c = c;
exports.c$1 = c$2;
exports.c$2 = c$9;
exports.c$3 = c$8;
exports.c$4 = c$7;
exports.c$5 = c$3;
exports.i = i;
exports.p = p$g;
exports.r = r$4;
exports.u = u$1;
