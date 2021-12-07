import { c as c$1, s as s$2, _, o, u as u$1, d as d$1, S } from './mathUtils-e16f9389.js';
import { n } from './common-d5b993de.js';
import { s as s$1 } from './vectorStacks-9205ea46.js';
import { d } from './vec2-5672471e.js';
import { v } from './lineSegment-4881dbd9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function b(t,r,e){const p=d(t,r),o=d(r,e),s=d(e,t),c=(p+o+s)/2,u=c*(c-p)*(c-o)*(c-s);return u<=0?0:Math.sqrt(u)}function M(t,n,r){return c$1(O,n,t),c$1(V,r,t),s$2(_(O,O,V))/2}new s$1(v);new s$1((()=>({p0:null,p1:null,p2:null})));const O=n(),V=n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=(()=>{const t=new Uint32Array(131072);for(let n=0;n<t.length;++n)t[n]=n;return t})();const f=new Uint16Array([0]),c=(()=>{const t=new Uint16Array(65536);for(let n=0;n<t.length;++n)t[n]=n;return t})();function l(t){if(1===t)return f;if(t<c.length)return new Uint16Array(c.buffer,0,t);if(t>s.length){const n=Math.max(2*s.length,t);s=new Uint32Array(n);for(let t=0;t<s.length;t++)s[t]=t;}return new Uint32Array(s.buffer,0,t)}function a(t){if(1===t)return new Uint16Array(f);if(t<c.length)return new Uint16Array(c.slice(0,t));if(t>s.length){const n=new Uint32Array(t);for(let t=0;t<n.length;t++)n[t]=t;return n}return new Uint32Array(s.slice(0,t))}function u(e,o$1,s){if(!e)return !1;const{size:f,data:c}=e;o(s,0,0,0),o(U,0,0,0);let l=0,a=0;for(let u=0;u<o$1.length-2;u+=3){const e=o$1[u+0]*f,h=o$1[u+1]*f,g=o$1[u+2]*f;o(y,c[e+0],c[e+1],c[e+2]),o(w,c[h+0],c[h+1],c[h+2]),o(A,c[g+0],c[g+1],c[g+2]);const m=M(y,w,A);m?(u$1(y,y,w),u$1(y,y,A),d$1(y,y,1/3*m),u$1(s,s,y),l+=m):(u$1(U,U,y),u$1(U,U,w),u$1(U,U,A),a+=3);}return (0!==a||0!==l)&&(0!==l?(d$1(s,s,1/l),!0):0!==a&&(d$1(s,U,1/a),!0))}function h(n,e,o$1){if(!n||!e)return !1;const{size:i,data:s}=n;o(o$1,0,0,0);let f=-1,c=0;for(let t=0;t<e.length;t++){const n=e[t]*i;f!==n&&(o$1[0]+=s[n+0],o$1[1]+=s[n+1],o$1[2]+=s[n+2],c++),f=n;}return c>1&&d$1(o$1,o$1,1/c),c>0}function g(o$1,i,s,f){if(!o$1)return !1;const{size:c,data:l}=o$1;o(f,0,0,0),o(U,0,0,0);let a=0,u=0;const h=i?i.length-1:l.length/c-1,g=h+(s?2:0);for(let t=0;t<g;t+=2){const o=t<h?t:h,s=t<h?t+1:0,g=(i?i[o]:o)*c,A=(i?i[s]:s)*c;y[0]=l[g+0],y[1]=l[g+1],y[2]=l[g+2],w[0]=l[A+0],w[1]=l[A+1],w[2]=l[A+2],d$1(y,u$1(y,y,w),.5);const m=S(y,w);m>0?(u$1(f,f,d$1(y,y,m)),a+=m):(u$1(U,U,y),u++);}return 0!==a?(d$1(f,f,1/a),!0):0!==u&&(d$1(f,U,1/u),!0)}const y=n(),w=n(),A=n(),U=n();

export { a, b, g, h, l, u };
