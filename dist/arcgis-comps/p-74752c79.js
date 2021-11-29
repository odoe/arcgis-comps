import{k9 as t,ka as s,kb as i,gz as r,I as h,N as e,dB as n,L as a,O as c,K as o,k2 as u}from"./p-5420851c.js";import{t as f,b as w}from"./p-2794293b.js";import{t as M}from"./p-01158f1c.js";import{u as g}from"./p-078c732e.js";class p{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this.grow()}get(){return 0===this._itemsPtr&&t((()=>this.reset())),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*l);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,l));t++)this._items.push(this.allocator())}}const l=1024;class m{constructor(t,s,i){this.itemByteSize=t,this.itemCreate=s,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(i/this.itemByteSize)}get(){0===this._itemsPtr&&t((()=>this.reset()));const s=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=s;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let s=0;s<this._itemsPerBuffer;++s)this._items.push(this.itemCreate(t,s*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=j){return new m(16,s,t)}static createVec3f64(t=j){return new m(24,i,t)}static createVec4f64(t=j){return new m(32,g,t)}static createMat3f64(t=j){return new m(72,f,t)}static createMat4f64(t=j){return new m(128,M,t)}static createQuatf64(t=j){return new m(32,w,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const j=4096;m.createVec2f64();const k=m.createVec3f64(),v=m.createVec4f64();m.createMat3f64();const b=m.createMat4f64();function y(t){return t?{origin:r(t.origin),vector:r(t.vector)}:{origin:h(),vector:h()}}function A(t,s){const i=o(k.get(),s,t.origin),r=c(t.vector,i),h=c(t.vector,t.vector),a=n(r/h,0,1),u=o(k.get(),e(k.get(),t.vector,a),i);return c(u,u)}function V(t,s,i,r,h){const{vector:f,origin:w}=t,M=o(k.get(),s,w),g=c(f,M)/u(f);return e(h,f,n(g,i,r)),a(h,h,t.origin)}m.createQuatf64(),new p((()=>({origin:null,vector:null})));export{V as A,A as b,k as c,b as f,v as r,p as s,y as v}