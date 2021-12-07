'use strict';

const request = require('./messageBundle-8be88d04.js');
const mathUtils$1 = require('./mathUtils-af6066f0.js');
const mathUtils = require('./mathUtils-87b1f941.js');
const geometry = require('./geometry-ef17530a.js');
const jsonUtils = require('./jsonUtils-b6068079.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u$1;let m$1=u$1=class extends request.a$2{constructor(...o){super(...o),this.position=new request.b$2([0,0,0]),this.heading=0,this.tilt=0,this.fov=55;}normalizeCtorArgs(o,t,r,e){if(o&&"object"==typeof o&&("x"in o||Array.isArray(o))){const i={position:o};return null!=t&&(i.heading=t),null!=r&&(i.tilt=r),null!=e&&(i.fov=e),i}return o}writePosition(o,t,r,e){const i=o.clone();i.x=request.a$4(o.x||0),i.y=request.a$4(o.y||0),i.z=o.hasZ?request.a$4(o.z||0):o.z,t[r]=i.write({},e);}readPosition(o,t){const r=new request.b$2;return r.read(o,t),r.x=request.a$4(r.x||0),r.y=request.a$4(r.y||0),r.z=r.hasZ?request.a$4(r.z||0):r.z,r}equals(o){return !!o&&(this.tilt===o.tilt&&this.heading===o.heading&&this.fov===o.fov&&this.position.equals(o.position))}clone(){return new u$1({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})}};request.e([request.d({type:request.b$2,json:{write:{isRequired:!0}}})],m$1.prototype,"position",void 0),request.e([request.r$2("position")],m$1.prototype,"writePosition",null),request.e([request.o$2("position")],m$1.prototype,"readPosition",null),request.e([request.d({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),request.c((o=>mathUtils.U.normalize(request.a$4(o))))],m$1.prototype,"heading",void 0),request.e([request.d({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),request.c((o=>mathUtils$1.e(request.a$4(o),-180,180)))],m$1.prototype,"tilt",void 0),request.e([request.d({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],m$1.prototype,"fov",void 0),m$1=u$1=request.e([request.i("esri.Camera")],m$1);const d=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let n=m=class extends request.a$2{constructor(r){super(r),this.rotation=0,this.scale=0,this.targetGeometry=null,this.camera=null;}castRotation(r){return (r%=360)<0&&(r+=360),r}clone(){return new m({rotation:this.rotation,scale:this.scale,targetGeometry:request.r(this.targetGeometry)?this.targetGeometry.clone():null,camera:request.r(this.camera)?this.camera.clone():null})}};function l(){return {enabled:!this.camera}}request.e([request.d({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:l}}}}})],n.prototype,"rotation",void 0),request.e([request.c("rotation")],n.prototype,"castRotation",null),request.e([request.d({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:l}}}}})],n.prototype,"scale",void 0),request.e([request.d({types:geometry.i,json:{read:jsonUtils.d,write:!0,origins:{"web-scene":{read:jsonUtils.d,write:{overridePolicy:l}}}}})],n.prototype,"targetGeometry",void 0),request.e([request.d({type:d,json:{write:!0}})],n.prototype,"camera",void 0),n=m=request.e([request.i("esri.Viewpoint")],n);const u=n;

exports.d = d;
exports.u = u;
