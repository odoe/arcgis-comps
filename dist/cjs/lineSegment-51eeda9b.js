'use strict';

const request = require('./MapView-1726f571.js');
const quatf64 = require('./quatf64-755c8047.js');
const mat4f64 = require('./mat4f64-f8b0b0f1.js');
const vec4f64 = require('./vec4f64-ccf8d057.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this.grow();}get(){return 0===this._itemsPtr&&request.r$24((()=>this.reset())),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0;}grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this.allocator());}}const i=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m{constructor(t,e,s){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize);}get(){0===this._itemsPtr&&request.r$24((()=>this.reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t);}return this._items[this._itemsPtr++]}reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0;}static createVec2f64(t=a){return new m(16,request.u$19,t)}static createVec3f64(t=a){return new m(24,request.u$20,t)}static createVec4f64(t=a){return new m(32,vec4f64.u,t)}static createMat3f64(t=a){return new m(72,quatf64.t,t)}static createMat4f64(t=a){return new m(128,mat4f64.t,t)}static createQuatf64(t=a){return new m(32,quatf64.t$1,t)}get test(){return {size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const a=4096;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
m.createVec2f64();const c=m.createVec3f64(),r=m.createVec4f64();m.createMat3f64();const f=m.createMat4f64();m.createQuatf64();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function v(t){return t?{origin:request.t$13(t.origin),vector:request.t$13(t.vector)}:{origin:request.n(),vector:request.n()}}function b(r,n){const c$1=request.c$2(c.get(),n,r.origin),u=request.z(r.vector,c$1),s=request.z(r.vector,r.vector),a=request.e$16(u/s,0,1),g=request.c$2(c.get(),request.d$2(c.get(),r.vector,a),c$1);return request.z(g,g)}function A(r,n,s,a,g){const{vector:v,origin:p}=r,h=request.c$2(c.get(),n,p),m=request.z(v,h)/request.p$25(v);return request.d$2(g,v,request.e$16(m,s,a)),request.u$1(g,g,r.origin)}new s((()=>({origin:null,vector:null})));

exports.A = A;
exports.b = b;
exports.c = c;
exports.f = f;
exports.r = r;
exports.s = s;
exports.v = v;
