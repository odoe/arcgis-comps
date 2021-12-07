import { c as s, af as t, s as s$1, A as r } from './messageBundle-f75b4090.js';
import { l, c, y as y$1, f } from './jsonUtils-13b1f6fd.js';
import { t as t$1, s as s$2 } from './OptimizedFeature-44d5df5b.js';
import { e } from './OptimizedFeatureSet-27736f1f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function h(t,e){return t?e?4:3:e?3:2}const a=s.getLogger("esri.tasks.support.optimizedFeatureSet"),g={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},d=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s;},m=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+2];},y=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+3];},p=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+2],t[n+3]=e[o+3];};function I(t,e,n,o){if(t){if(n)return e&&o?p:m;if(e&&o)return y}else if(e&&o)return m;return d}function b({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function M({scale:t,translate:e},n){return Math.round((e[1]-n)/t[1])}function w({scale:t,translate:e},n){return n*t[0]+e[0]}function N({scale:t,translate:e},n){return e[1]-n*t[1]}function G(t,e,n){return t?e?n?k(t):P(t):n?Z(t):T(t):null}function T(t){const e=t.coords;return {x:e[0],y:e[1]}}function F(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t}function P(t){const e=t.coords;return {x:e[0],y:e[1],z:e[2]}}function x(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t}function Z(t){const e=t.coords;return {x:e[0],y:e[1],m:e[2]}}function j(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.m,t}function k(t){const e=t.coords;return {x:e[0],y:e[1],z:e[2],m:e[3]}}function E(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t.coords[3]=e.m,t}function z(t,e,n,r$1){let s=T;n&&r$1?s=k:n?s=P:r$1&&(s=Z);for(const c of e){const{geometry:e,attributes:n}=c,r$1=r(e)?s(e):null;t.push({attributes:n,geometry:r$1});}return t}function S(t,e){return t&&e?E:t?x:e?j:F}function v(t,e,n,o,r){const s=S(n,o);for(const c of e){const{geometry:e,attributes:n}=c;let o;e&&(o=s(new t$1,e)),t.push(new s$2(o,n,null,n[r]));}return t}function Y(t,e,n,o){for(const r of e){const{geometry:e,attributes:s}=r;let c;e&&(c=_(e,n,o)),t.push({attributes:s,geometry:c});}return t}function _(t$1,e,o){if(t(t$1))return null;const r=h(e,o),s=[];for(let n=0;n<t$1.coords.length;n+=r){const e=[];for(let o=0;o<r;o++)e.push(t$1.coords[n+o]);s.push(e);}return e?o?{points:s,hasZ:e,hasM:o}:{points:s,hasZ:e}:o?{points:s,hasM:o}:{points:s}}function O(t,e,n,o,r){const s=h(n,o);for(const c of e){const e=c.geometry,n=c.attributes;let o;e&&(o=A(new t$1,e,s)),t.push(new s$2(o,n,null,n[r]));}return t}function A(t,e,n=h(e.hasZ,e.hasM)){t.lengths[0]=e.points.length;const o=t.coords;let r=0;for(const s of e.points)for(let t=0;t<n;t++)o[r++]=s[t];return t}function L(t,e,n,r$1){for(const s of e){const{geometry:e,attributes:c}=s;let l;r(e)&&(l=U(e,n,r$1)),t.push({attributes:c,geometry:l});}return t}function U(t,e,n){if(!t)return null;const o=h(e,n),{coords:r,lengths:s}=t,c=[];let l=0;for(const u of s){const t=[];for(let e=0;e<u;e++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e);}c.push(t);}return e?n?{paths:c,hasZ:e,hasM:n}:{paths:c,hasZ:e}:n?{paths:c,hasM:n}:{paths:c}}function q(t,e,n,o,r){const s=h(n,o);for(const c of e){const e=c.geometry,n=c.attributes;let o;e&&(o=$(new t$1,e,s)),t.push(new s$2(o,n,null,n[r]));}return t}function $(t,e,n=h(e.hasZ,e.hasM)){const{lengths:o,coords:r}=t;let s=0;for(const c of e.paths){for(const t of c)for(let e=0;e<n;e++)r[s++]=t[e];o.push(c.length);}return t}function R(t,e,n,r$1){for(const s of e){const{geometry:e,attributes:c,centroid:l}=s;let u;if(r(e)&&(u=C(e,n,r$1)),l){const e=T(l);t.push({attributes:c,centroid:e,geometry:u});}else t.push({attributes:c,geometry:u});}return t}function C(t,e,n){if(!t)return null;const o=h(e,n),{coords:r,lengths:s}=t,c=[];let l=0;for(const u of s){const t=[];for(let e=0;e<u;e++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e);}c.push(t);}return e?n?{rings:c,hasZ:e,hasM:n}:{rings:c,hasZ:e}:n?{rings:c,hasM:n}:{rings:c}}function B(t,e,n,r$1,s){for(const c of e){const e=c.geometry,l=c.centroid,i=c.attributes;let h;e&&(h=D(new t$1,e,n,r$1)),r(l)?t.push(new s$2(h,i,F(new t$1,l),i[s])):t.push(new s$2(h,i,null,i[s]));}return t}function D(t,e,n=e.hasZ,o=e.hasM){return H(t,e.rings,n,o),t}function H(t,e,n,o){const r=h(n,o),{lengths:s,coords:c}=t;let l=0;s.length=c.length=0;for(const u of e){for(const t of u)for(let e=0;e<r;e++)c[l++]=t[e];s.push(u.length);}return t}const J=[],K=[];function Q(t,e,n,o,r){J[0]=t;const[s]=W(K,J,e,n,o,r);return J.length=K.length=0,s}function W(e,n,o,r,s,c){if(e.length=0,!o){for(const t of n){const n=t.attributes[c];e.push(new s$2(null,t.attributes,null,n));}return e}switch(o){case"esriGeometryPoint":return v(e,n,r,s,c);case"esriGeometryMultipoint":return O(e,n,r,s,c);case"esriGeometryPolyline":return q(e,n,r,s,c);case"esriGeometryPolygon":return B(e,n,r,s,c);default:a.error("convertToFeatureSet:unknown-geometry",new s$1(`Unable to parse unknown geometry type '${o}'`)),e.length=0;}return e}function X(e,n,o,r,s,c){const l=e.length;switch(o){case"esriGeometryPoint":v(e,n,r,s,c);break;case"esriGeometryMultipoint":O(e,n,r,s,c);break;case"esriGeometryPolyline":q(e,n,r,s,c);break;case"esriGeometryPolygon":B(e,n,r,s,c);break;default:a.error("convertToFeatureSet:unknown-geometry",new s$1(`Unable to parse unknown geometry type '${o}'`));}for(let t=0;t<n.length;t++)e[t+l].geometryType=o,e[t+l].insertAfter=n[t].insertAfter,e[t+l].groupId=n[t].groupId;return e}function tt(t,e,n,o){K[0]=t,rt(J,K,e,n,o);const r=J[0];return J.length=K.length=0,r}function et(e,o,u){if(t(e))return null;const i=new t$1;if("hasZ"in e&&null==o&&(o=e.hasZ),"hasM"in e&&null==u&&(u=e.hasM),l(e)){return S(null!=o?o:null!=e.z,null!=u?u:null!=e.m)(i,e)}return c(e)?D(i,e,o,u):y$1(e)?$(i,e,h(o,u)):f(e)?A(i,e,h(o,u)):void a.error("convertFromGeometry:unknown-geometry",new s$1(`Unable to parse unknown geometry type '${e}'`))}function nt(e,o,r,s){const c=e&&("coords"in e?e:e.geometry);if(t(c))return null;switch(o){case"esriGeometryPoint":{let t=T;return r&&s?t=k:r?t=P:s&&(t=Z),t(c)}case"esriGeometryMultipoint":return _(c,r,s);case"esriGeometryPolyline":return U(c,r,s);case"esriGeometryPolygon":return C(c,r,s);default:return void a.error("convertToGeometry:unknown-geometry",new s$1(`Unable to parse unknown geometry type '${o}'`))}}function ot(t,e){for(const n of e)t.push({attributes:n.attributes});return t}function rt(e,o,r,s,c){if(e.length=0,t(r))return ot(e,o);switch(r){case"esriGeometryPoint":return z(e,o,s,c);case"esriGeometryMultipoint":return Y(e,o,s,c);case"esriGeometryPolyline":return L(e,o,s,c);case"esriGeometryPolygon":return R(e,o,s,c);default:a.error("convertToFeatureSet:unknown-geometry",new s$1(`Unable to parse unknown geometry type '${r}'`));}return e}function st(t){const{objectIdFieldName:e,spatialReference:n,transform:o,fields:r,hasM:s,hasZ:c,features:l,geometryType:u,exceededTransferLimit:i,uniqueIdField:f,queryGeometry:h,queryGeometryType:a}=t,g={features:rt([],l,u,c,s),fields:r,geometryType:u,objectIdFieldName:e,spatialReference:n,uniqueIdField:f,queryGeometry:nt(h,a,!1,!1)};return o&&(g.transform=o),i&&(g.exceededTransferLimit=i),s&&(g.hasM=s),c&&(g.hasZ=c),g}function ct(e$1,n){const o=new e,{hasM:r,hasZ:s,features:c,objectIdFieldName:l,spatialReference:u,geometryType:f,exceededTransferLimit:h,transform:g,fields:d}=e$1;return d&&(o.fields=d),o.geometryType=f,o.objectIdFieldName=l||n,o.spatialReference=u,o.objectIdFieldName?(c&&W(o.features,c,f,s,r,o.objectIdFieldName),h&&(o.exceededTransferLimit=h),r&&(o.hasM=r),s&&(o.hasZ=s),g&&(o.transform=g),o):(a.error(new s$1("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),o)}function lt(t){const{transform:e,features:n,hasM:r$1,hasZ:s}=t;if(!e)return t;for(const c of n)r(c.geometry)&&mt(c.geometry,c.geometry,r$1,s,e),c.centroid&&mt(c.centroid,c.centroid,r$1,s,e);return t.transform=null,t}function ut(t,e){const{geometryType:n,features:o,hasM:r,hasZ:s}=e;if(!t)return e;for(let c=0;c<o.length;c++){const e=o[c],l=e.weakClone();l.geometry=new t$1,it(l.geometry,e.geometry,r,s,n,t),e.centroid&&(l.centroid=new t$1,it(l.centroid,e.centroid,r,s,"esriGeometryPoint",t)),o[c]=l;}return e.transform=t,e}function it(t$1,e,o,r,s,c,l=o,u=r){if(t$1.lengths.length&&(t$1.lengths.length=0),t$1.coords.length&&(t$1.coords.length=0),t(e)||!e.coords.length)return null;const i=g[s],{coords:f,lengths:a}=e,d=h(o,r),m=h(o&&l,r&&u),y=I(o,r,l,u);if(!a.length)return y(t$1.coords,f,0,0,b(c,f[0]),M(c,f[1])),t$1.lengths.length&&(t$1.lengths.length=0),t$1.coords.length=d,t$1;let p,w,N,G,T=0,F=0,P=F;for(const n of a){if(n<i)continue;let e=0;F=P,N=p=b(c,f[T]),G=w=M(c,f[T+1]),y(t$1.coords,f,F,T,N,G),e++,T+=d,F+=m;for(let o=1;o<n;o++,T+=d)N=b(c,f[T]),G=M(c,f[T+1]),N===p&&G===w||(y(t$1.coords,f,F,T,N-p,G-w),F+=m,e++,p=N,w=G);e>=i&&(t$1.lengths.push(e),P=F);}return t$1.coords.length=P,t$1.coords.length?t$1:null}function ft(t,e,n,o,r,s,c=n,l=o){if(t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0),!e||!e.coords.length)return null;const u=g[r],{coords:i,lengths:f}=e,a=h(n,o),d=h(n&&c,o&&l),m=I(n,o,c,l);if(!f.length)return m(t.coords,i,0,0,i[0],i[1]),t.lengths.length&&(t.lengths.length=0),t.coords.length=a,t;let y=0;const p=s*s;for(const h of f){if(h<u){y+=h*a;continue}const e=t.coords.length/d,n=y,o=y+(h-1)*a;m(t.coords,i,t.coords.length,n,i[n],i[n+1]),at(t.coords,i,a,p,m,n,o),m(t.coords,i,t.coords.length,o,i[o],i[o+1]);const r=t.coords.length/d-e;r>=u?t.lengths.push(r):t.coords.length=e*d,y+=h*a;}return t.coords.length?t:null}function ht(t,e,n,o){const r=t[e],s=t[e+1],c=t[n],l=t[n+1],u=t[o],i=t[o+1];let f=c,h=l,a=u-f,g=i-h;if(0!==a||0!==g){const t=((r-f)*a+(s-h)*g)/(a*a+g*g);t>1?(f=u,h=i):t>0&&(f+=a*t,h+=g*t);}return a=r-f,g=s-h,a*a+g*g}function at(t,e,n,o,r,s,c){let l,u=o,i=0;for(let f=s+n;f<c;f+=n)l=ht(e,f,s,c),l>u&&(i=f,u=l);u>o&&(i-s>n&&at(t,e,n,o,r,s,i),r(t,e,t.length,i,e[i],e[i+1]),c-i>n&&at(t,e,n,o,r,i,c));}function gt(t$1,e,o,r){if(t(e)||!e.coords||!e.coords.length)return null;const s=h(o,r);let c=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(e&&e.coords){const t=e.coords;for(let e=0;e<t.length;e+=s){const n=t[e],o=t[e+1];c=Math.min(c,n),u=Math.max(u,n),l=Math.min(l,o),i=Math.max(i,o);}}return t$1[0]=c,t$1[1]=l,t$1[2]=u,t$1[3]=i,t$1}function mt(t,e,n,o,r){const{coords:s,lengths:c}=e,l=n?o?p:m:o?m:d,u=h(n,o);if(!s.length)return t!==e&&(t.lengths.length=0,t.coords.length=0),t;if(!c.length)return l(t.coords,s,0,0,w(r,s[0]),N(r,s[1])),t!==e&&(t.lengths.length=0,t.coords.length=u),t;const[i,f]=r.scale;let a=0;for(let h=0;h<c.length;h++){const e=c[h];t.lengths[h]=e;let n=w(r,s[a]),o=N(r,s[a+1]);l(t.coords,s,a,a,n,o),a+=u;for(let r=1;r<e;r++,a+=u)n+=s[a]*i,o-=s[a+1]*f,l(t.coords,s,a,a,n,o);}return t!==e&&(t.lengths.length=c.length,t.coords.length=s.length),t}function yt(t,e,n,o,r,s){const c=h(n,o),l=I(n,o,r,s),u=e.coords;t.coords.length=0,t.lengths.length=0,t.lengths.push(...e.lengths);for(let i=0;i<u.length;i+=c)l(t.coords,u,t.coords.length,i,u[i],u[i+1]);return t}function It(t,e,n,o){let r=0,s=t[o*e],c=t[o*(e+1)];for(let l=1;l<n;l++){const n=s+t[o*(e+l)],u=c+t[o*(e+l)+1],i=(n-s)*(u+c);s=n,c=u,r+=i;}return .5*r}function bt(t,e){const{coords:n,lengths:o}=t;let r=0,s=0;for(let c=0;c<o.length;c++){s+=It(n,r,o[c],e),r+=c;}return Math.abs(s)}function wt(t$1,e){if(t(t$1))return null;const o=t$1.clone(),r=t$1.coords,s=t$1.lengths;let c=0;for(let n=0;n<s.length;n++){const t=s[n];let l=r[e*c],u=r[e*c+1];for(let n=1;n<t;n++){const t=l+r[e*(c+n)],s=u+r[e*(c+n)+1];o.coords[e*(c+n)]=t,o.coords[e*(c+n)+1]=s,l=t,u=s;}c+=t;}return o}

export { $, C, D, G, H, M, Q, U, W, X, _, b as a, bt as b, ct as c, et as e, ft as f, gt as g, it as i, lt as l, mt as m, nt as n, st as s, tt as t, ut as u, wt as w, yt as y };
