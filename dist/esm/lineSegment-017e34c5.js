import { jI as r$2, jJ as u$1, jK as u$2, fN as t$4, cf as n$1, ch as d, ca as e$1, fm as u$3, fr as z, fv as c$2, jB as p } from './MapView-a31458ed.js';
import { t as t$1, b as t$3 } from './quatf64-1c6e894b.js';
import { t as t$2 } from './mat4f64-f8b93042.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$1{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this.grow();}get(){return 0===this._itemsPtr&&r$2((()=>this.reset())),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i$1);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0;}grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i$1));t++)this._items.push(this.allocator());}}const i$1=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return [0,0,0,0]}function t(n){return [n[0],n[1],n[2],n[3]]}function r$1(n,t,r,e){return [n,t,r,e]}function e(t){const r=n(),e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a$1(){return n()}function o(){return r$1(1,1,1,1)}function s(){return r$1(1,0,0,0)}function c$1(){return r$1(0,1,0,0)}function i(){return r$1(0,0,1,0)}function f$1(){return r$1(0,0,0,1)}const _=a$1(),l=o(),N=s(),U=c$1(),I=i(),O=f$1();Object.freeze({__proto__:null,create:n,clone:t,fromValues:r$1,fromArray:e,createView:u,zeros:a$1,ones:o,unitX:s,unitY:c$1,unitZ:i,unitW:f$1,ZEROS:_,ONES:l,UNIT_X:N,UNIT_Y:U,UNIT_Z:I,UNIT_W:O});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m{constructor(t,e,s){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize);}get(){0===this._itemsPtr&&r$2((()=>this.reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t);}return this._items[this._itemsPtr++]}reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0;}static createVec2f64(t=a){return new m(16,u$1,t)}static createVec3f64(t=a){return new m(24,u$2,t)}static createVec4f64(t=a){return new m(32,u,t)}static createMat3f64(t=a){return new m(72,t$1,t)}static createMat4f64(t=a){return new m(128,t$2,t)}static createQuatf64(t=a){return new m(32,t$3,t)}get test(){return {size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const a=4096;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
m.createVec2f64();const c=m.createVec3f64(),r=m.createVec4f64();m.createMat3f64();const f=m.createMat4f64();m.createQuatf64();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function v(t){return t?{origin:t$4(t.origin),vector:t$4(t.vector)}:{origin:n$1(),vector:n$1()}}function b(r,n){const c$1=c$2(c.get(),n,r.origin),u=z(r.vector,c$1),s=z(r.vector,r.vector),a=e$1(u/s,0,1),g=c$2(c.get(),d(c.get(),r.vector,a),c$1);return z(g,g)}function A(r,n,s,a,g){const{vector:v,origin:p$1}=r,h=c$2(c.get(),n,p$1),m=z(v,h)/p(v);return d(g,v,e$1(m,s,a)),u$3(g,g,r.origin)}new s$1((()=>({origin:null,vector:null})));

export { A, r$1 as a, b, c, f, n, r, s$1 as s, v };
