import { r as r$2, c as c$1, z, e, d as d$1, u as u$3, N as p$1, R as x$1 } from './mathUtils-cc1689ad.js';
import { bX as r$1 } from './cast-e5ea2533.js';
import { u as u$1, b as t$4, n } from './common-e2a70efa.js';
import { t as t$1, b as t$3 } from './quatf64-f945f11e.js';
import { t as t$2 } from './mat4f64-f06bdb4b.js';
import { u } from './vec2f64-503345b4.js';
import { u as u$2 } from './vec4f64-42a71444.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this.grow();}get(){return 0===this._itemsPtr&&r$1((()=>this.reset())),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0;}grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this.allocator());}}const i=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m$1{constructor(t,e,s){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize);}get(){0===this._itemsPtr&&r$1((()=>this.reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t);}return this._items[this._itemsPtr++]}reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0;}static createVec2f64(t=a$1){return new m$1(16,u,t)}static createVec3f64(t=a$1){return new m$1(24,u$1,t)}static createVec4f64(t=a$1){return new m$1(32,u$2,t)}static createMat3f64(t=a$1){return new m$1(72,t$1,t)}static createMat4f64(t=a$1){return new m$1(128,t$2,t)}static createQuatf64(t=a$1){return new m$1(32,t$3,t)}get test(){return {size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const a$1=4096;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=m$1.createVec2f64(),c=m$1.createVec3f64(),r=m$1.createVec4f64(),a=m$1.createMat3f64(),f=m$1.createMat4f64(),o=m$1.createQuatf64();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function v(t){return t?{origin:t$4(t.origin),vector:t$4(t.vector)}:{origin:n(),vector:n()}}function p(t,r){const n=x.get();return n.origin=t,n.vector=r,n}function h(t,r=v()){return m(t.origin,t.vector,r)}function m(t,r,o=v()){return r$2(o.origin,t),r$2(o.vector,r),o}function l(t,r,i=v()){return r$2(i.origin,t),c$1(i.vector,r,t),i}function b(r,n){const c$2=c$1(c.get(),n,r.origin),u=z(r.vector,c$2),s=z(r.vector,r.vector),a=e(u/s,0,1),g=c$1(c.get(),d$1(c.get(),r.vector,a),c$2);return z(g,g)}function M(t,r){return Math.sqrt(b(t,r))}function d(t,r,n){return A(t,r,0,1,n)}function j(t,r,n){return u$3(n,t.origin,d$1(n,t.vector,r))}function A(r,n,s,a,g){const{vector:v,origin:p}=r,h=c$1(c.get(),n,p),m=z(v,h)/p$1(v);return d$1(g,v,e(m,s,a)),u$3(g,g,r.origin)}function B(t,r){if(q(t,p(r.origin,r.direction),!1,w)){const{tA:r,pB:n,distance2:o}=w;if(r>=0&&r<=1)return o;if(r<0)return x$1(t.origin,n);if(r>1)return x$1(u$3(c.get(),t.origin,t.vector),n)}return null}function k(t,r,o){return !!q(t,r,!0,w)&&(r$2(o,w.pA),!0)}function S(t,r){return q(t,r,!0,w)?w.distance2:null}function q(r,n,o,i){const e$1=1e-6,u=r.origin,a=u$3(c.get(),u,r.vector),g=n.origin,v=u$3(c.get(),g,n.vector),p=c.get(),h=c.get();if(p[0]=u[0]-g[0],p[1]=u[1]-g[1],p[2]=u[2]-g[2],h[0]=v[0]-g[0],h[1]=v[1]-g[1],h[2]=v[2]-g[2],Math.abs(h[0])<e$1&&Math.abs(h[1])<e$1&&Math.abs(h[2])<e$1)return !1;const m=c.get();if(m[0]=a[0]-u[0],m[1]=a[1]-u[1],m[2]=a[2]-u[2],Math.abs(m[0])<e$1&&Math.abs(m[1])<e$1&&Math.abs(m[2])<e$1)return !1;const l=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],b=h[0]*m[0]+h[1]*m[1]+h[2]*m[2],M=p[0]*m[0]+p[1]*m[1]+p[2]*m[2],d=h[0]*h[0]+h[1]*h[1]+h[2]*h[2],j=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*d-b*b;if(Math.abs(j)<e$1)return !1;let A=(l*b-M*d)/j,B=(l+b*A)/d;o&&(A=e(A,0,1),B=e(B,0,1));const k=c.get(),S=c.get();return k[0]=u[0]+A*m[0],k[1]=u[1]+A*m[1],k[2]=u[2]+A*m[2],S[0]=g[0]+B*h[0],S[1]=g[1]+B*h[1],S[2]=g[2]+B*h[2],i.tA=A,i.tB=B,i.pA=k,i.pB=S,i.distance2=x$1(k,S),!0}const w={tA:0,tB:0,pA:n(),pB:n(),distance2:0},x=new s((()=>({origin:null,vector:null})));

export { A, b, c, f, m, r, s, v };
