'use strict';

const request = require('./messageBundle-312ceb47.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const utils = require('./utils-f7ec83ae.js');
const query = require('./query-89593027.js');
const Query = require('./Query-35be2e91.js');
const FeatureSet = require('./FeatureSet-2e9b97a5.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$1(n){const{exifInfo:e,exifName:a,tagName:u}=n;if(!e||!a||!u)return null;const f=e.find((n=>n.name===a));return f?t({tagName:u,tags:f.tags}):null}function t(n){const{tagName:t,tags:e}=n;if(!e||!t)return null;const a=e.find((n=>n.name===t));return a&&a.value||null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var s$2;const p={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let a$1=s$2=class extends JSONSupport.a{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null;}get orientationInfo(){const{exifInfo:t}=this,o=n$1({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return p[o]||null}clone(){return new s$2({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};request.e([request.d({type:String})],a$1.prototype,"contentType",void 0),request.e([request.d()],a$1.prototype,"exifInfo",void 0),request.e([request.d({readOnly:!0})],a$1.prototype,"orientationInfo",null),request.e([request.d({type:request.S$2})],a$1.prototype,"id",void 0),request.e([request.d({type:String})],a$1.prototype,"globalId",void 0),request.e([request.d({type:String})],a$1.prototype,"keywords",void 0),request.e([request.d({type:String})],a$1.prototype,"name",void 0),request.e([request.d({json:{read:!1}})],a$1.prototype,"parentGlobalId",void 0),request.e([request.d({json:{read:!1}})],a$1.prototype,"parentObjectId",void 0),request.e([request.d({type:request.S$2})],a$1.prototype,"size",void 0),request.e([request.d({json:{read:!1}})],a$1.prototype,"url",void 0),a$1=s$2=request.e([request.i("esri.layers.support.AttachmentInfo")],a$1);const l=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(n,s,m){const p=utils.e(n);return query.p(p,Query.b.from(s),{...m}).then((o=>o.data.count))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s$1(s,e,m){const n=utils.e(s);return query.f(n,Query.b.from(e),{...m}).then((o=>o.data.objectIds))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s(r,t,e){const s=await a(r,t,e);return FeatureSet['default'].fromJSON(s)}async function a(o,s,a){const n=utils.e(o),i={...a},p=Query.b.from(s),{data:u}=await query.y(n,p,p.sourceSpatialReference,i);return u}

exports.a = a;
exports.l = l;
exports.n = n;
exports.s = s$1;
exports.s$1 = s;
