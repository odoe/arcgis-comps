import './geometry-7e07b1ba.js';
import { a0 as k, s } from './messageBundle-f75b4090.js';
import { D } from './unitUtils-38774114.js';
import { i, t, d } from './geodesicConstants-54cb88d4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(e){if(!e)return null;if(e.isGeographic&&e.wkid){const t=d[e.wkid];if(t)return t}if(e.wkt){const t=h(e.wkt);if(t)return t}return null}function h(e){const t$1=t.exec(e);if(!t$1||2!==t$1.length)return null;const n=t$1[1].split(",");if(!n||n.length<3)return null;const i=parseFloat(n[1]),a=parseFloat(n[2]);if(isNaN(i)||isNaN(a))return null;return {a:i,f:0===a?0:1/a}}function f(e){const t=l(e||k.WGS84);if(p(t))return t;const n=t.a*(1-t.f);return Object.assign(t,{b:n,eSq:1-(n/t.a)**2,radius:(2*t.a+n)/3,densificationRatio:1e4/((2*t.a+n)/3)})}function p(e){return "b"in e&&"eSq"in e&&"radius"in e}function m(e){return null!==l(e)}function M(n,i="meters"){if(!n)throw new s("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(n.some((e=>!m(e.spatialReference))))throw new s("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const s$1=[];for(let e=0;e<n.length;e++){const a=n[e],{spatialReference:r}=a,o="polyline"===a.type?a.paths:a.rings;let c=0;for(let e=0;e<o.length;e++){const t=o[e];let n=0;for(let e=1;e<t.length;e++){const i=t[e-1][0],s=t[e][0],a=t[e-1][1],o=t[e][1];if(a!==o||i!==s){const e={distance:null};R(e,[i,a],[s,o],r),n+=e.distance;}}c+=n;}c=D(c,"meters",i),s$1.push(c);}return s$1}function y(e,t,i$1,s,a){const r=t[0],o=t[1],c=r*i,l=o*i,h=i$1*i,{a:p,b:u,f:d}=f(a),m=Math.sin(h),g=Math.cos(h),M=(1-d)*Math.tan(l),w=1/Math.sqrt(1+M*M),y=M*w,R=Math.atan2(M,g),v=w*m,z=v*v,b=1-z,q=b*(p*p-u*u)/(u*u),j=1+q/16384*(4096+q*(q*(320-175*q)-768)),x=q/1024*(256+q*(q*(74-47*q)-128));let A,N,S,k,P=s/(u*j),F=2*Math.PI;for(;Math.abs(P-F)>1e-12;)S=Math.cos(2*R+P),A=Math.sin(P),N=Math.cos(P),k=x*A*(S+x/4*(N*(2*S*S-1)-x/6*S*(4*A*A-3)*(4*S*S-3))),F=P,P=s/(u*j)+k;const G=y*A-w*N*g,C=Math.atan2(y*N+w*A*g,(1-d)*Math.sqrt(z+G*G)),E=Math.atan2(A*m,w*N-y*A*g),I=d/16*b*(4+d*(4-3*b)),O=C/i,U=(c+(E-(1-I)*d*v*(P+I*A*(S+I*N*(2*S*S-1)))))/i;return e[0]=U,e[1]=O,e}function R(e,t,i$1,s){const a=t[0]*i,r=t[1]*i,o=i$1[0]*i,c=i$1[1]*i,{a:l,b:h,f:p,radius:u}=f(s),d=o-a,m=Math.atan((1-p)*Math.tan(r)),g=Math.atan((1-p)*Math.tan(c)),M=Math.sin(m),w=Math.cos(m),y=Math.sin(g),R=Math.cos(g);let v,z,b,q,j,x,A,N,S,k,P=1e3,F=d;do{if(A=Math.sin(F),N=Math.cos(F),b=Math.sqrt(R*A*(R*A)+(w*y-M*R*N)*(w*y-M*R*N)),0===b)return e.distance=0,e.azimuth=void 0,e.reverseAzimuth=void 0,e;j=M*y+w*R*N,x=Math.atan2(b,j),S=w*R*A/b,z=1-S*S,q=j-2*M*y/z,isNaN(q)&&(q=0),k=p/16*z*(4+p*(4-3*z)),v=F,F=d+(1-k)*p*S*(x+k*b*(q+k*j*(2*q*q-1)));}while(Math.abs(F-v)>1e-12&&--P>0);if(0===P){const t=u,i$1=Math.acos(Math.sin(r)*Math.sin(c)+Math.cos(r)*Math.cos(c)*Math.cos(o-a))*t,s=o-a,l=Math.sin(s)*Math.cos(c),h=Math.cos(r)*Math.sin(c)-Math.sin(r)*Math.cos(c)*Math.cos(s),f=Math.atan2(l,h);return e.azimuth=f/i,e.distance=i$1,e.reverseAzimuth=void 0,e}const G=z*(l*l-h*h)/(h*h),C=G/1024*(256+G*(G*(74-47*G)-128)),E=h*(1+G/16384*(4096+G*(G*(320-175*G)-768)))*(x-C*b*(q+C/4*(j*(2*q*q-1)-C/6*q*(4*b*b-3)*(4*q*q-3)))),I=Math.atan2(R*Math.sin(F),w*y-M*R*Math.cos(F)),O=Math.atan2(w*Math.sin(F),w*y*Math.cos(F)-M*R);return e.azimuth=I/i,e.distance=E,e.reverseAzimuth=O/i,e}

export { M, R, m, y };
