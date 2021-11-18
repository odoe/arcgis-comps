'use strict';

const request = require('./messageBundle-312ceb47.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(t,n){return t?n?4:3:n?3:2}function e(e,o,u,l,N){if(request.t(o)||!o.lengths.length)return null;const s="upperLeft"===(null==N?void 0:N.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const c=e.coords,f=[],i=u?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:T,coords:h}=o,g=n(u,l);let E=0;for(const t of T){const n=r(i,h,E,t,u,l,s);n&&f.push(n),E+=t*g;}if(f.sort(((t,n)=>{let e=s*t[2]-s*n[2];return 0===e&&u&&(e=t[4]-n[4]),e})),f.length){let t=6*f[0][2];c[0]=f[0][0]/t,c[1]=f[0][1]/t,u&&(t=6*f[0][4],c[2]=0!==t?f[0][3]/t:0),(c[0]<i[0]||c[0]>i[1]||c[1]<i[2]||c[1]>i[3]||u&&(c[2]<i[4]||c[2]>i[5]))&&(c.length=0);}if(!c.length){const t=o.lengths[0]?I(h,0,T[0],u,l):null;if(!t)return null;c[0]=t[0],c[1]=t[1],u&&t.length>2&&(c[2]=t[2]);}return e}function r(t,e,r,I,o,u,l=1){const N=n(o,u);let s=r,c=r+N,f=0,i=0,T=0,h=0,g=0;for(let n=0,m=I-1;n<m;n++,s+=N,c+=N){const n=e[s],r=e[s+1],I=e[s+2],u=e[c],l=e[c+1],N=e[c+2];let E=n*l-u*r;h+=E,f+=(n+u)*E,i+=(r+l)*E,o&&(E=n*N-u*I,T+=(I+N)*E,g+=E),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),r<t[2]&&(t[2]=r),r>t[3]&&(t[3]=r),o&&(I<t[4]&&(t[4]=I),I>t[5]&&(t[5]=I));}if(h*l>0&&(h*=-1),g*l>0&&(g*=-1),!h)return null;const E=[f,i,.5*h];return o&&(E[3]=T,E[4]=.5*g),E}function I(t,e,r,I,s){const c=n(I,s);let f=e,i=e+c,T=0,h=0,g=0,E=0;for(let n=0,m=r-1;n<m;n++,f+=c,i+=c){const n=t[f],e=t[f+1],r=t[f+2],s=t[i],c=t[i+1],m=t[i+2],b=I?u(n,e,r,s,c,m):o(n,e,s,c);if(b)if(T+=b,I){const t=N(n,e,r,s,c,m);h+=b*t[0],g+=b*t[1],E+=b*t[2];}else {const t=l(n,e,s,c);h+=b*t[0],g+=b*t[1];}}return T>0?I?[h/T,g/T,E/T]:[h/T,g/T]:r>0?I?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function o(t,n,e,r){const I=e-t,o=r-n;return Math.sqrt(I*I+o*o)}function u(t,n,e,r,I,o){const u=r-t,l=I-n,N=o-e;return Math.sqrt(u*u+l*l+N*N)}function l(t,n,e,r){return [t+.5*(e-t),n+.5*(r-n)]}function N(t,n,e,r,I,o){return [t+.5*(r-t),n+.5*(I-n),e+.5*(o-e)]}

exports.e = e;
