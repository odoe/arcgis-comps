'use strict';

const unitUtils = require('./unitUtils-61d611e2.js');
const request = require('./messageBundle-312ceb47.js');
const quatf64 = require('./quatf64-755c8047.js');
const mat4f64 = require('./mat4f64-f8b0b0f1.js');
const vec2f64 = require('./vec2f64-c36614be.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return [0,0,0,0]}function t(n){return [n[0],n[1],n[2],n[3]]}function r$1(n,t,r,e){return [n,t,r,e]}function e(t){const r=n(),e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a$1(){return n()}function o(){return r$1(1,1,1,1)}function s$1(){return r$1(1,0,0,0)}function c$1(){return r$1(0,1,0,0)}function i$1(){return r$1(0,0,1,0)}function f$1(){return r$1(0,0,0,1)}const _=a$1(),l=o(),N=s$1(),U=c$1(),I=i$1(),O=f$1();Object.freeze({__proto__:null,create:n,clone:t,fromValues:r$1,fromArray:e,createView:u,zeros:a$1,ones:o,unitX:s$1,unitY:c$1,unitZ:i$1,unitW:f$1,ZEROS:_,ONES:l,UNIT_X:N,UNIT_Y:U,UNIT_Z:I,UNIT_W:O});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this.grow();}get(){return 0===this._itemsPtr&&request.r$8((()=>this.reset())),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0;}grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this.allocator());}}const i=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m{constructor(t,e,s){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize);}get(){0===this._itemsPtr&&request.r$8((()=>this.reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t);}return this._items[this._itemsPtr++]}reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0;}static createVec2f64(t=a){return new m(16,vec2f64.u,t)}static createVec3f64(t=a){return new m(24,unitUtils.u$5,t)}static createVec4f64(t=a){return new m(32,u,t)}static createMat3f64(t=a){return new m(72,quatf64.t,t)}static createMat4f64(t=a){return new m(128,mat4f64.t,t)}static createQuatf64(t=a){return new m(32,quatf64.t$1,t)}get test(){return {size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const a=4096;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
m.createVec2f64();const c=m.createVec3f64(),r=m.createVec4f64();m.createMat3f64();const f=m.createMat4f64();m.createQuatf64();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function v(t){return t?{origin:unitUtils.t$4(t.origin),vector:unitUtils.t$4(t.vector)}:{origin:unitUtils.n$4(),vector:unitUtils.n$4()}}function b(r,n){const c$1=unitUtils.c$16(c.get(),n,r.origin),u=unitUtils.z$2(r.vector,c$1),s=unitUtils.z$2(r.vector,r.vector),a=unitUtils.e$1(u/s,0,1),g=unitUtils.c$16(c.get(),unitUtils.d$2(c.get(),r.vector,a),c$1);return unitUtils.z$2(g,g)}function A(r,n,s,a,g){const{vector:v,origin:p}=r,h=unitUtils.c$16(c.get(),n,p),m=unitUtils.z$2(v,h)/unitUtils.p$5(v);return unitUtils.d$2(g,v,unitUtils.e$1(m,s,a)),unitUtils.u$3(g,g,r.origin)}new s((()=>({origin:null,vector:null})));

exports.A = A;
exports.b = b;
exports.c = c;
exports.f = f;
exports.n = n;
exports.r = r;
exports.r$1 = r$1;
exports.s = s;
exports.v = v;
