import { M as l, e, a as d, i, aj as b } from './jsxFactory-c96bb45c.js';
import { a as a$1 } from './JSONSupport-5a9f556a.js';
import { f as r } from './Graphic-6c72131a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a;let p=a=class extends a$1{constructor(t){super(t),this.attachmentTypes=null,this.attachmentsWhere=null,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null;}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10;}clone(){return new a(l({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};e([d({type:[String],json:{write:!0}})],p.prototype,"attachmentTypes",void 0),e([d({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],p.prototype,"attachmentsWhere",void 0),e([d({type:[String],json:{write:!0}})],p.prototype,"keywords",void 0),e([d({type:[Number],json:{write:!0}})],p.prototype,"globalIds",void 0),e([d({json:{write:!0}})],p.prototype,"name",void 0),e([d({type:Number,json:{read:{source:"resultRecordCount"}}})],p.prototype,"num",void 0),e([d({type:[Number],json:{write:!0}})],p.prototype,"objectIds",void 0),e([d({type:Boolean,json:{default:!1,write:!0}})],p.prototype,"returnMetadata",void 0),e([d({type:[Number],json:{write:!0}})],p.prototype,"size",void 0),e([d({type:Number,json:{read:{source:"resultOffset"}}})],p.prototype,"start",void 0),e([r("start"),r("num")],p.prototype,"writeStart",null),e([d({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],p.prototype,"where",void 0),p=a=e([i("esri.rest.support.AttachmentQuery")],p),p.from=b(p);const u=p;

export { u };
