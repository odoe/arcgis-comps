import{fr as n,o as r,ck as t,bl as e,bk as l,bS as u,fs as o,cj as i,fw as f,H as a}from"./p-5420851c.js";import{w as c,z as s,E as w,$ as g,a as h,J as m,k as E,x as A,A as I,F as p,G as N,H as b,K as d,Q as j,e as y,U as M,V as R,X as k,_ as x,a0 as O,a1 as F}from"./p-082c34d3.js";import{S as Z,g as v,A as z,w as G,x as H,p as J,O as K,d as P,h as Q,j as S,k as U,R as V,E as X,l as _,y as q,W as B,K as C,F as D,M as L,m as T,P as W,U as Y,G as $,V as nn,b as rn,I as tn,q as en,J as ln,v as un}from"./p-18b587e8.js";import"./p-53bb6ab4.js";import"./p-a184d75f.js";import"./p-a96c61aa.js";import"./p-dcac8868.js";import"./p-c3fd4463.js";function on(n){return 0===u.indexOf("4.")?l.fromExtent(n):new l({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function fn(r){if(s(r,2,2),r[0]instanceof n&&r[1]instanceof n);else if(r[0]instanceof n&&null===r[1]);else if(r[1]instanceof n&&null===r[0]);else if(null!==r[0]||null!==r[1])throw new Error("Illegal Argument")}function an(n,r){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return f(0);let e=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(e=O(n.spatialReference)/a(n.spatialReference));let l=0;if("polyline"===n.type)for(const r of n.paths)for(let n=1;n<r.length;n++)l+=F(r[n],r[n-1],e);else if("polygon"===n.type)for(const r of n.rings){for(let n=1;n<r.length;n++)l+=F(r[n],r[n-1],e);(r[0][0]!==r[r.length-1][0]||r[0][1]!==r[r.length-1][1]||void 0!==r[0][2]&&r[0][2]!==r[r.length-1][2])&&(l+=F(r[0],r[r.length-1],e))}else"extent"===n.type&&(l+=2*F([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],e),l+=2*F([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],e),l*=2,l+=4*Math.abs(R(n.zmax,0)*e-R(n.zmin,0)*e));const u=new t({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,l]]});return D(u,r)}function cn(u){"async"===u.mode&&(u.functions.disjoint=function(n,r){return u.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=c(t)),null===t[0]||null===t[1]||Z(t[0],t[1])}))},u.functions.intersects=function(n,r){return u.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=c(t)),null!==t[0]&&null!==t[1]&&v(t[0],t[1])}))},u.functions.touches=function(n,r){return u.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=c(t)),null!==t[0]&&null!==t[1]&&z(t[0],t[1])}))},u.functions.crosses=function(n,r){return u.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=c(t)),null!==t[0]&&null!==t[1]&&G(t[0],t[1])}))},u.functions.within=function(n,r){return u.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=c(t)),null!==t[0]&&null!==t[1]&&H(t[0],t[1])}))},u.functions.contains=function(n,r){return u.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=c(t)),null!==t[0]&&null!==t[1]&&J(t[0],t[1])}))},u.functions.overlaps=function(n,r){return u.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=c(t)),null!==t[0]&&null!==t[1]&&K(t[0],t[1])}))},u.functions.equals=function(r,t){return u.standardFunctionAsync(r,t,(function(r,t,e){return s(e,2,2),e[0]===e[1]||(e[0]instanceof n&&e[1]instanceof n?P(e[0],e[1]):!(!w(e[0])||!w(e[1]))&&e[0].getTime()===e[1].getTime())}))},u.functions.relate=function(r,t){return u.standardFunctionAsync(r,t,(function(r,t,e){if(e=c(e),s(e,3,3),e[0]instanceof n&&e[1]instanceof n)return Q(e[0],e[1],g(e[2]));if(e[0]instanceof n&&null===e[1])return!1;if(e[1]instanceof n&&null===e[0])return!1;if(null===e[0]&&null===e[1])return!1;throw new Error("Illegal Argument")}))},u.functions.intersection=function(n,r){return u.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=c(t)),null===t[0]||null===t[1]?null:S(t[0],t[1])}))},u.functions.union=function(r,t){return u.standardFunctionAsync(r,t,(function(t,e,l){const u=[];if(0===(l=c(l)).length)throw new Error("Function called with wrong number of Parameters");if(1===l.length)if(h(l[0])){const r=c(l[0]);for(let t=0;t<r.length;t++)if(null!==r[t]){if(!(r[t]instanceof n))throw new Error("Illegal Argument");u.push(r[t])}}else{if(!m(l[0])){if(l[0]instanceof n)return E(A(l[0]),r.spatialReference);if(null===l[0])return null;throw new Error("Illegal Argument")}{const r=c(l[0].toArray());for(let t=0;t<r.length;t++)if(null!==r[t]){if(!(r[t]instanceof n))throw new Error("Illegal Argument");u.push(r[t])}}}else for(let r=0;r<l.length;r++)if(null!==l[r]){if(!(l[r]instanceof n))throw new Error("Illegal Argument");u.push(l[r])}return 0===u.length?null:U(u)}))},u.functions.difference=function(n,r){return u.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=c(t)),null!==t[0]&&null===t[1]?A(t[0]):null===t[0]?null:V(t[0],t[1])}))},u.functions.symmetricdifference=function(n,r){return u.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=c(t)),null===t[0]&&null===t[1]?null:null===t[0]?A(t[1]):null===t[1]?A(t[0]):X(t[0],t[1])}))},u.functions.clip=function(t,e){return u.standardFunctionAsync(t,e,(function(t,e,l){if(l=c(l),s(l,2,2),!(l[1]instanceof r)&&null!==l[1])throw new Error("Illegal Argument");if(null===l[0])return null;if(!(l[0]instanceof n))throw new Error("Illegal Argument");return null===l[1]?null:_(l[0],l[1])}))},u.functions.cut=function(r,e){return u.standardFunctionAsync(r,e,(function(r,e,l){if(l=c(l),s(l,2,2),!(l[1]instanceof t)&&null!==l[1])throw new Error("Illegal Argument");if(null===l[0])return[];if(!(l[0]instanceof n))throw new Error("Illegal Argument");return null===l[1]?[A(l[0])]:q(l[0],l[1])}))},u.functions.area=function(r,t){return u.standardFunctionAsync(r,t,(function(t,e,l){if(s(l,1,2),null===(l=c(l))[0])return 0;if(I(l[0]))return l[0].sumArea(p(R(l[1],-1)),!1,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(h(l[0])||m(l[0])){const n=N(l[0],r.spatialReference);return null===n?0:B(n,p(R(l[1],-1)))}if(!(l[0]instanceof n))throw new Error("Illegal Argument");return B(l[0],p(R(l[1],-1)))}))},u.functions.areageodetic=function(r,t){return u.standardFunctionAsync(r,t,(function(t,e,l){if(s(l,1,2),null===(l=c(l))[0])return 0;if(I(l[0]))return l[0].sumArea(p(R(l[1],-1)),!0,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(h(l[0])||m(l[0])){const n=N(l[0],r.spatialReference);return null===n?0:C(n,p(R(l[1],-1)))}if(!(l[0]instanceof n))throw new Error("Illegal Argument");return C(l[0],p(R(l[1],-1)))}))},u.functions.length=function(r,t){return u.standardFunctionAsync(r,t,(function(t,e,l){if(s(l,1,2),null===(l=c(l))[0])return 0;if(I(l[0]))return l[0].sumLength(b(R(l[1],-1)),!1,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(h(l[0])||m(l[0])){const n=d(l[0],r.spatialReference);return null===n?0:D(n,b(R(l[1],-1)))}if(!(l[0]instanceof n))throw new Error("Illegal Argument");return D(l[0],b(R(l[1],-1)))}))},u.functions.length3d=function(r,t){return u.standardFunctionAsync(r,t,(function(t,e,l){if(s(l,1,2),null===(l=c(l))[0])return 0;if(h(l[0])||m(l[0])){const n=d(l[0],r.spatialReference);return null===n?0:!0===n.hasZ?an(n,b(R(l[1],-1))):D(n,b(R(l[1],-1)))}if(!(l[0]instanceof n))throw new Error("Illegal Argument");return!0===l[0].hasZ?an(l[0],b(R(l[1],-1))):D(l[0],b(R(l[1],-1)))}))},u.functions.lengthgeodetic=function(r,t){return u.standardFunctionAsync(r,t,(function(t,e,l){if(s(l,1,2),null===(l=c(l))[0])return 0;if(I(l[0]))return l[0].sumLength(b(R(l[1],-1)),!0,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(h(l[0])||m(l[0])){const n=d(l[0],r.spatialReference);return null===n?0:L(n,b(R(l[1],-1)))}if(!(l[0]instanceof n))throw new Error("Illegal Argument");return L(l[0],b(R(l[1],-1)))}))},u.functions.distance=function(r,t){return u.standardFunctionAsync(r,t,(function(t,e,l){l=c(l),s(l,2,3);let u=l[0];(h(l[0])||m(l[0]))&&(u=j(l[0],r.spatialReference));let o=l[1];if((h(l[1])||m(l[1]))&&(o=j(l[1],r.spatialReference)),!(u instanceof n))throw new Error("Illegal Argument");if(!(o instanceof n))throw new Error("Illegal Argument");return T(u,o,b(R(l[2],-1)))}))},u.functions.distancegeodetic=function(n,r){return u.standardFunctionAsync(n,r,(function(n,r,l){l=c(l),s(l,2,3);const u=l[0],o=l[1];if(!(u instanceof e))throw new Error("Illegal Argument");if(!(o instanceof e))throw new Error("Illegal Argument");const i=new t({paths:[],spatialReference:u.spatialReference});return i.addPath([u,o]),L(i,b(R(l[2],-1)))}))},u.functions.densify=function(e,o){return u.standardFunctionAsync(e,o,(function(e,u,o){if(o=c(o),s(o,2,3),null===o[0])return null;if(!(o[0]instanceof n))throw new Error("Illegal Argument");const i=y(o[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return o[0]instanceof l||o[0]instanceof t?W(o[0],i,b(R(o[2],-1))):o[0]instanceof r?W(on(o[0]),i,b(R(o[2],-1))):o[0]}))},u.functions.densifygeodetic=function(e,o){return u.standardFunctionAsync(e,o,(function(e,u,o){if(o=c(o),s(o,2,3),null===o[0])return null;if(!(o[0]instanceof n))throw new Error("Illegal Argument");const i=y(o[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return o[0]instanceof l||o[0]instanceof t?Y(o[0],i,b(R(o[2],-1))):o[0]instanceof r?Y(on(o[0]),i,b(R(o[2],-1))):o[0]}))},u.functions.generalize=function(r,t){return u.standardFunctionAsync(r,t,(function(r,t,e){if(e=c(e),s(e,2,4),null===e[0])return null;if(!(e[0]instanceof n))throw new Error("Illegal Argument");const l=y(e[1]);if(isNaN(l))throw new Error("Illegal Argument");return $(e[0],l,M(R(e[2],!0)),b(R(e[3],-1)))}))},u.functions.buffer=function(r,t){return u.standardFunctionAsync(r,t,(function(r,t,e){if(e=c(e),s(e,2,3),null===e[0])return null;if(!(e[0]instanceof n))throw new Error("Illegal Argument");const l=y(e[1]);if(isNaN(l))throw new Error("Illegal Argument");return 0===l?A(e[0]):nn(e[0],l,b(R(e[2],-1)))}))},u.functions.buffergeodetic=function(r,t){return u.standardFunctionAsync(r,t,(function(r,t,e){if(e=c(e),s(e,2,3),null===e[0])return null;if(!(e[0]instanceof n))throw new Error("Illegal Argument");const l=y(e[1]);if(isNaN(l))throw new Error("Illegal Argument");return 0===l?A(e[0]):rn(e[0],l,b(R(e[2],-1)))}))},u.functions.offset=function(n,r){return u.standardFunctionAsync(n,r,(function(n,r,e){if(e=c(e),s(e,2,6),null===e[0])return null;if(!(e[0]instanceof l||e[0]instanceof t))throw new Error("Illegal Argument");const u=y(e[1]);if(isNaN(u))throw new Error("Illegal Argument");const o=y(R(e[4],10));if(isNaN(o))throw new Error("Illegal Argument");const i=y(R(e[5],0));if(isNaN(i))throw new Error("Illegal Argument");return tn(e[0],u,b(R(e[2],-1)),g(R(e[3],"round")).toLowerCase(),o,i)}))},u.functions.rotate=function(t,o){return u.standardFunctionAsync(t,o,(function(t,u,o){o=c(o),s(o,2,3);let i=o[0];if(null===i)return null;if(!(i instanceof n))throw new Error("Illegal Argument");i instanceof r&&(i=l.fromExtent(i));const f=y(o[1]);if(isNaN(f))throw new Error("Illegal Argument");const a=R(o[2],null);if(null===a)return en(i,f);if(a instanceof e)return en(i,f,a);throw new Error("Illegal Argument")}))},u.functions.centroid=function(i,f){return u.standardFunctionAsync(i,f,(function(u,f,a){if(a=c(a),s(a,1,1),null===a[0])return null;let w=a[0];if((h(a[0])||m(a[0]))&&(w=j(a[0],i.spatialReference)),null===w)return null;if(!(w instanceof n))throw new Error("Illegal Argument");return w instanceof e?E(A(a[0]),i.spatialReference):w instanceof l?w.centroid:w instanceof t?k(w):w instanceof o?x(w):w instanceof r?w.center:null}))},u.functions.multiparttosinglepart=function(f,a){return u.standardFunctionAsync(f,a,(function(u,a,w){w=c(w),s(w,1,1);const g=[];if(null===w[0])return null;if(!(w[0]instanceof n))throw new Error("Illegal Argument");return w[0]instanceof e||w[0]instanceof r?[E(A(w[0]),f.spatialReference)]:ln(w[0]).then((n=>{if(n instanceof l){const r=[],t=[];for(let e=0;e<n.rings.length;e++)if(n.isClockwise(n.rings[e])){const t=i({rings:[n.rings[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});r.push(t)}else t.push({ring:n.rings[e],pt:n.getPoint(e,0)});for(let n=0;n<t.length;n++)for(let e=0;e<r.length;e++)if(r[e].contains(t[n].pt)){r[e].addRing(t[n].ring);break}return r}if(n instanceof t){const r=[];for(let t=0;t<n.paths.length;t++){const e=i({paths:[n.paths[t]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});r.push(e)}return r}if(w[0]instanceof o){const n=E(A(w[0]),f.spatialReference);for(let r=0;r<n.points.length;r++)g.push(n.getPoint(r));return g}return null}))}))},u.functions.issimple=function(r,t){return u.standardFunctionAsync(r,t,(function(r,t,e){if(e=c(e),s(e,1,1),null===e[0])return!0;if(!(e[0]instanceof n))throw new Error("Illegal Argument");return un(e[0])}))},u.functions.simplify=function(r,t){return u.standardFunctionAsync(r,t,(function(r,t,e){if(e=c(e),s(e,1,1),null===e[0])return null;if(!(e[0]instanceof n))throw new Error("Illegal Argument");return ln(e[0])}))})}export{cn as registerFunctions}