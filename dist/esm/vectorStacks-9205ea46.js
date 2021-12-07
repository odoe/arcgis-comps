import { cX as r$1 } from './messageBundle-f75b4090.js';
import { t as t$1, b as t$3 } from './quatf64-b9feea68.js';
import { t as t$2 } from './mat4f64-677a419d.js';
import { u } from './vec2f64-35868783.js';
import { u as u$1 } from './common-d5b993de.js';
import { u as u$2 } from './vec4f64-2ec4ac08.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this.grow();}get(){return 0===this._itemsPtr&&r$1((()=>this.reset())),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0;}grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this.allocator());}}const i=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m{constructor(t,e,s){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize);}get(){0===this._itemsPtr&&r$1((()=>this.reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t);}return this._items[this._itemsPtr++]}reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0;}static createVec2f64(t=a){return new m(16,u,t)}static createVec3f64(t=a){return new m(24,u$1,t)}static createVec4f64(t=a){return new m(32,u$2,t)}static createMat3f64(t=a){return new m(72,t$1,t)}static createMat4f64(t=a){return new m(128,t$2,t)}static createQuatf64(t=a){return new m(32,t$3,t)}get test(){return {size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const a=4096;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=m.createVec2f64(),c=m.createVec3f64(),r=m.createVec4f64();m.createMat3f64();const f=m.createMat4f64(),o=m.createQuatf64();

export { c, f, o, r, s, t };
