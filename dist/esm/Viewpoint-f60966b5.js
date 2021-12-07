import { e, d as d$1, aE as b, a3 as r, a2 as o, f as c, i, a1 as a, aX as a$1, A as r$1 } from './messageBundle-f75b4090.js';
import { e as e$1 } from './mathUtils-e16f9389.js';
import { U } from './mathUtils-8e5ad7fe.js';
import { i as i$1 } from './geometry-7e07b1ba.js';
import { d as d$2 } from './jsonUtils-13b1f6fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u$1;let m$1=u$1=class extends a{constructor(...o){super(...o),this.position=new b([0,0,0]),this.heading=0,this.tilt=0,this.fov=55;}normalizeCtorArgs(o,t,r,e){if(o&&"object"==typeof o&&("x"in o||Array.isArray(o))){const i={position:o};return null!=t&&(i.heading=t),null!=r&&(i.tilt=r),null!=e&&(i.fov=e),i}return o}writePosition(o,t,r,e){const i=o.clone();i.x=a$1(o.x||0),i.y=a$1(o.y||0),i.z=o.hasZ?a$1(o.z||0):o.z,t[r]=i.write({},e);}readPosition(o,t){const r=new b;return r.read(o,t),r.x=a$1(r.x||0),r.y=a$1(r.y||0),r.z=r.hasZ?a$1(r.z||0):r.z,r}equals(o){return !!o&&(this.tilt===o.tilt&&this.heading===o.heading&&this.fov===o.fov&&this.position.equals(o.position))}clone(){return new u$1({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})}};e([d$1({type:b,json:{write:{isRequired:!0}}})],m$1.prototype,"position",void 0),e([r("position")],m$1.prototype,"writePosition",null),e([o("position")],m$1.prototype,"readPosition",null),e([d$1({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),c((o=>U.normalize(a$1(o))))],m$1.prototype,"heading",void 0),e([d$1({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),c((o=>e$1(a$1(o),-180,180)))],m$1.prototype,"tilt",void 0),e([d$1({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],m$1.prototype,"fov",void 0),m$1=u$1=e([i("esri.Camera")],m$1);const d=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let n=m=class extends a{constructor(r){super(r),this.rotation=0,this.scale=0,this.targetGeometry=null,this.camera=null;}castRotation(r){return (r%=360)<0&&(r+=360),r}clone(){return new m({rotation:this.rotation,scale:this.scale,targetGeometry:r$1(this.targetGeometry)?this.targetGeometry.clone():null,camera:r$1(this.camera)?this.camera.clone():null})}};function l(){return {enabled:!this.camera}}e([d$1({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:l}}}}})],n.prototype,"rotation",void 0),e([c("rotation")],n.prototype,"castRotation",null),e([d$1({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:l}}}}})],n.prototype,"scale",void 0),e([d$1({types:i$1,json:{read:d$2,write:!0,origins:{"web-scene":{read:d$2,write:{overridePolicy:l}}}}})],n.prototype,"targetGeometry",void 0),e([d$1({type:d,json:{write:!0}})],n.prototype,"camera",void 0),n=m=e([i("esri.Viewpoint")],n);const u=n;

export { d, u };
