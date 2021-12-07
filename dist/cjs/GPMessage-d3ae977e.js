'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=new request.o$1({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let i=class extends request.a$2{constructor(e){super(e),this.description=null,this.type=null;}};request.e([request.d({type:String,json:{write:!0}})],i.prototype,"description",void 0),request.e([request.d({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=request.e([request.i("esri.rest.support.GPMessage")],i);const a=i;

exports.a = a;
