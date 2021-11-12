import { e, a as d, X as S, i } from './jsxFactory-c96bb45c.js';
import { a as a$2 } from './JSONSupport-5a9f556a.js';
import { e as e$1 } from './utils-8991f658.js';
import { p as p$1, f, y } from './query-0da4fa5c.js';
import { b } from './Query-792b142d.js';
import g from './FeatureSet-22102ca4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$1(n){const{exifInfo:e,exifName:a,tagName:u}=n;if(!e||!a||!u)return null;const f=e.find((n=>n.name===a));return f?t({tagName:u,tags:f.tags}):null}function t(n){const{tagName:t,tags:e}=n;if(!e||!t)return null;const a=e.find((n=>n.name===t));return a&&a.value||null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var s$2;const p={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let a$1=s$2=class extends a$2{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null;}get orientationInfo(){const{exifInfo:t}=this,o=n$1({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return p[o]||null}clone(){return new s$2({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};e([d({type:String})],a$1.prototype,"contentType",void 0),e([d()],a$1.prototype,"exifInfo",void 0),e([d({readOnly:!0})],a$1.prototype,"orientationInfo",null),e([d({type:S})],a$1.prototype,"id",void 0),e([d({type:String})],a$1.prototype,"globalId",void 0),e([d({type:String})],a$1.prototype,"keywords",void 0),e([d({type:String})],a$1.prototype,"name",void 0),e([d({json:{read:!1}})],a$1.prototype,"parentGlobalId",void 0),e([d({json:{read:!1}})],a$1.prototype,"parentObjectId",void 0),e([d({type:S})],a$1.prototype,"size",void 0),e([d({json:{read:!1}})],a$1.prototype,"url",void 0),a$1=s$2=e([i("esri.layers.support.AttachmentInfo")],a$1);const l=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(n,s,m){const p=e$1(n);return p$1(p,b.from(s),{...m}).then((o=>o.data.count))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s$1(s,e,m){const n=e$1(s);return f(n,b.from(e),{...m}).then((o=>o.data.objectIds))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s(r,t,e){const s=await a(r,t,e);return g.fromJSON(s)}async function a(o,s,a){const n=e$1(o),i={...a},p=b.from(s),{data:u}=await y(n,p,p.sourceSpatialReference,i);return u}

export { a, s as b, l, n, s$1 as s };
