import{bu as n,_ as r,aE as t,a5 as e,c8 as l}from"./p-e58503d5.js";import{w as u,z as o,E as i,$ as f,a,J as c,k as s,x as w,A as g,F as m,G as h,H as p,K as E,Q as A,e as I,U as b,V as j,X as d,_ as N,a0 as y,a1 as M}from"./p-1ce5adcc.js";import{S as R,g as x,A as O,w as F,x as Z,p as k,O as v,d as z,h as _,j as G,k as H,R as J,E as K,l as P,y as Q,W as U,K as V,F as X,M as q,m as B,P as C,U as D,G as L,V as S,b as T,I as W,q as Y,J as $,v as nn}from"./p-e392251d.js";import{m as rn,v as tn,b as en}from"./p-b79fcce3.js";import{d as ln}from"./p-c048b814.js";import{H as un}from"./p-01e5a461.js";import"./p-53bb6ab4.js";import"./p-6f4b0bc8.js";import"./p-a184d75f.js";import"./p-5a4bf917.js";import"./p-a131049b.js";import"./p-a9a30646.js";import"./p-a2324023.js";import"./p-5032dfbd.js";import"./p-182bb5be.js";import"./p-db87794e.js";import"./p-c0f84cd3.js";import"./p-8925cd73.js";import"./p-dfc6337f.js";import"./p-480e5606.js";function on(n){return 0===e.indexOf("4.")?tn.fromExtent(n):new tn({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function fn(r){if(o(r,2,2),r[0]instanceof n&&r[1]instanceof n);else if(r[0]instanceof n&&null===r[1]);else if(r[1]instanceof n&&null===r[0]);else if(null!==r[0]||null!==r[1])throw new Error("Illegal Argument")}function an(n,r){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return l(0);let t=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(t=y(n.spatialReference)/un(n.spatialReference));let e=0;if("polyline"===n.type)for(const r of n.paths)for(let n=1;n<r.length;n++)e+=M(r[n],r[n-1],t);else if("polygon"===n.type)for(const r of n.rings){for(let n=1;n<r.length;n++)e+=M(r[n],r[n-1],t);(r[0][0]!==r[r.length-1][0]||r[0][1]!==r[r.length-1][1]||void 0!==r[0][2]&&r[0][2]!==r[r.length-1][2])&&(e+=M(r[0],r[r.length-1],t))}else"extent"===n.type&&(e+=2*M([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],t),e+=2*M([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],t),e*=2,e+=4*Math.abs(j(n.zmax,0)*t-j(n.zmin,0)*t));const u=new rn({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,e]]});return X(u,r)}function cn(e){"async"===e.mode&&(e.functions.disjoint=function(n,r){return e.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=u(t)),null===t[0]||null===t[1]||R(t[0],t[1])}))},e.functions.intersects=function(n,r){return e.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=u(t)),null!==t[0]&&null!==t[1]&&x(t[0],t[1])}))},e.functions.touches=function(n,r){return e.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=u(t)),null!==t[0]&&null!==t[1]&&O(t[0],t[1])}))},e.functions.crosses=function(n,r){return e.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=u(t)),null!==t[0]&&null!==t[1]&&F(t[0],t[1])}))},e.functions.within=function(n,r){return e.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=u(t)),null!==t[0]&&null!==t[1]&&Z(t[0],t[1])}))},e.functions.contains=function(n,r){return e.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=u(t)),null!==t[0]&&null!==t[1]&&k(t[0],t[1])}))},e.functions.overlaps=function(n,r){return e.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=u(t)),null!==t[0]&&null!==t[1]&&v(t[0],t[1])}))},e.functions.equals=function(r,t){return e.standardFunctionAsync(r,t,(function(r,t,e){return o(e,2,2),e[0]===e[1]||(e[0]instanceof n&&e[1]instanceof n?z(e[0],e[1]):!(!i(e[0])||!i(e[1]))&&e[0].getTime()===e[1].getTime())}))},e.functions.relate=function(r,t){return e.standardFunctionAsync(r,t,(function(r,t,e){if(e=u(e),o(e,3,3),e[0]instanceof n&&e[1]instanceof n)return _(e[0],e[1],f(e[2]));if(e[0]instanceof n&&null===e[1])return!1;if(e[1]instanceof n&&null===e[0])return!1;if(null===e[0]&&null===e[1])return!1;throw new Error("Illegal Argument")}))},e.functions.intersection=function(n,r){return e.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=u(t)),null===t[0]||null===t[1]?null:G(t[0],t[1])}))},e.functions.union=function(r,t){return e.standardFunctionAsync(r,t,(function(t,e,l){const o=[];if(0===(l=u(l)).length)throw new Error("Function called with wrong number of Parameters");if(1===l.length)if(a(l[0])){const r=u(l[0]);for(let t=0;t<r.length;t++)if(null!==r[t]){if(!(r[t]instanceof n))throw new Error("Illegal Argument");o.push(r[t])}}else{if(!c(l[0])){if(l[0]instanceof n)return s(w(l[0]),r.spatialReference);if(null===l[0])return null;throw new Error("Illegal Argument")}{const r=u(l[0].toArray());for(let t=0;t<r.length;t++)if(null!==r[t]){if(!(r[t]instanceof n))throw new Error("Illegal Argument");o.push(r[t])}}}else for(let r=0;r<l.length;r++)if(null!==l[r]){if(!(l[r]instanceof n))throw new Error("Illegal Argument");o.push(l[r])}return 0===o.length?null:H(o)}))},e.functions.difference=function(n,r){return e.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=u(t)),null!==t[0]&&null===t[1]?w(t[0]):null===t[0]?null:J(t[0],t[1])}))},e.functions.symmetricdifference=function(n,r){return e.standardFunctionAsync(n,r,(function(n,r,t){return fn(t=u(t)),null===t[0]&&null===t[1]?null:null===t[0]?w(t[1]):null===t[1]?w(t[0]):K(t[0],t[1])}))},e.functions.clip=function(t,l){return e.standardFunctionAsync(t,l,(function(t,e,l){if(l=u(l),o(l,2,2),!(l[1]instanceof r)&&null!==l[1])throw new Error("Illegal Argument");if(null===l[0])return null;if(!(l[0]instanceof n))throw new Error("Illegal Argument");return null===l[1]?null:P(l[0],l[1])}))},e.functions.cut=function(r,t){return e.standardFunctionAsync(r,t,(function(r,t,e){if(e=u(e),o(e,2,2),!(e[1]instanceof rn)&&null!==e[1])throw new Error("Illegal Argument");if(null===e[0])return[];if(!(e[0]instanceof n))throw new Error("Illegal Argument");return null===e[1]?[w(e[0])]:Q(e[0],e[1])}))},e.functions.area=function(r,t){return e.standardFunctionAsync(r,t,(function(t,e,l){if(o(l,1,2),null===(l=u(l))[0])return 0;if(g(l[0]))return l[0].sumArea(m(j(l[1],-1)),!1,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(a(l[0])||c(l[0])){const n=h(l[0],r.spatialReference);return null===n?0:U(n,m(j(l[1],-1)))}if(!(l[0]instanceof n))throw new Error("Illegal Argument");return U(l[0],m(j(l[1],-1)))}))},e.functions.areageodetic=function(r,t){return e.standardFunctionAsync(r,t,(function(t,e,l){if(o(l,1,2),null===(l=u(l))[0])return 0;if(g(l[0]))return l[0].sumArea(m(j(l[1],-1)),!0,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(a(l[0])||c(l[0])){const n=h(l[0],r.spatialReference);return null===n?0:V(n,m(j(l[1],-1)))}if(!(l[0]instanceof n))throw new Error("Illegal Argument");return V(l[0],m(j(l[1],-1)))}))},e.functions.length=function(r,t){return e.standardFunctionAsync(r,t,(function(t,e,l){if(o(l,1,2),null===(l=u(l))[0])return 0;if(g(l[0]))return l[0].sumLength(p(j(l[1],-1)),!1,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(a(l[0])||c(l[0])){const n=E(l[0],r.spatialReference);return null===n?0:X(n,p(j(l[1],-1)))}if(!(l[0]instanceof n))throw new Error("Illegal Argument");return X(l[0],p(j(l[1],-1)))}))},e.functions.length3d=function(r,t){return e.standardFunctionAsync(r,t,(function(t,e,l){if(o(l,1,2),null===(l=u(l))[0])return 0;if(a(l[0])||c(l[0])){const n=E(l[0],r.spatialReference);return null===n?0:!0===n.hasZ?an(n,p(j(l[1],-1))):X(n,p(j(l[1],-1)))}if(!(l[0]instanceof n))throw new Error("Illegal Argument");return!0===l[0].hasZ?an(l[0],p(j(l[1],-1))):X(l[0],p(j(l[1],-1)))}))},e.functions.lengthgeodetic=function(r,t){return e.standardFunctionAsync(r,t,(function(t,e,l){if(o(l,1,2),null===(l=u(l))[0])return 0;if(g(l[0]))return l[0].sumLength(p(j(l[1],-1)),!0,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(a(l[0])||c(l[0])){const n=E(l[0],r.spatialReference);return null===n?0:q(n,p(j(l[1],-1)))}if(!(l[0]instanceof n))throw new Error("Illegal Argument");return q(l[0],p(j(l[1],-1)))}))},e.functions.distance=function(r,t){return e.standardFunctionAsync(r,t,(function(t,e,l){l=u(l),o(l,2,3);let i=l[0];(a(l[0])||c(l[0]))&&(i=A(l[0],r.spatialReference));let f=l[1];if((a(l[1])||c(l[1]))&&(f=A(l[1],r.spatialReference)),!(i instanceof n))throw new Error("Illegal Argument");if(!(f instanceof n))throw new Error("Illegal Argument");return B(i,f,p(j(l[2],-1)))}))},e.functions.distancegeodetic=function(n,r){return e.standardFunctionAsync(n,r,(function(n,r,e){e=u(e),o(e,2,3);const l=e[0],i=e[1];if(!(l instanceof t))throw new Error("Illegal Argument");if(!(i instanceof t))throw new Error("Illegal Argument");const f=new rn({paths:[],spatialReference:l.spatialReference});return f.addPath([l,i]),q(f,p(j(e[2],-1)))}))},e.functions.densify=function(t,l){return e.standardFunctionAsync(t,l,(function(t,e,l){if(l=u(l),o(l,2,3),null===l[0])return null;if(!(l[0]instanceof n))throw new Error("Illegal Argument");const i=I(l[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return l[0]instanceof tn||l[0]instanceof rn?C(l[0],i,p(j(l[2],-1))):l[0]instanceof r?C(on(l[0]),i,p(j(l[2],-1))):l[0]}))},e.functions.densifygeodetic=function(t,l){return e.standardFunctionAsync(t,l,(function(t,e,l){if(l=u(l),o(l,2,3),null===l[0])return null;if(!(l[0]instanceof n))throw new Error("Illegal Argument");const i=I(l[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return l[0]instanceof tn||l[0]instanceof rn?D(l[0],i,p(j(l[2],-1))):l[0]instanceof r?D(on(l[0]),i,p(j(l[2],-1))):l[0]}))},e.functions.generalize=function(r,t){return e.standardFunctionAsync(r,t,(function(r,t,e){if(e=u(e),o(e,2,4),null===e[0])return null;if(!(e[0]instanceof n))throw new Error("Illegal Argument");const l=I(e[1]);if(isNaN(l))throw new Error("Illegal Argument");return L(e[0],l,b(j(e[2],!0)),p(j(e[3],-1)))}))},e.functions.buffer=function(r,t){return e.standardFunctionAsync(r,t,(function(r,t,e){if(e=u(e),o(e,2,3),null===e[0])return null;if(!(e[0]instanceof n))throw new Error("Illegal Argument");const l=I(e[1]);if(isNaN(l))throw new Error("Illegal Argument");return 0===l?w(e[0]):S(e[0],l,p(j(e[2],-1)))}))},e.functions.buffergeodetic=function(r,t){return e.standardFunctionAsync(r,t,(function(r,t,e){if(e=u(e),o(e,2,3),null===e[0])return null;if(!(e[0]instanceof n))throw new Error("Illegal Argument");const l=I(e[1]);if(isNaN(l))throw new Error("Illegal Argument");return 0===l?w(e[0]):T(e[0],l,p(j(e[2],-1)))}))},e.functions.offset=function(n,r){return e.standardFunctionAsync(n,r,(function(n,r,t){if(t=u(t),o(t,2,6),null===t[0])return null;if(!(t[0]instanceof tn||t[0]instanceof rn))throw new Error("Illegal Argument");const e=I(t[1]);if(isNaN(e))throw new Error("Illegal Argument");const l=I(j(t[4],10));if(isNaN(l))throw new Error("Illegal Argument");const i=I(j(t[5],0));if(isNaN(i))throw new Error("Illegal Argument");return W(t[0],e,p(j(t[2],-1)),f(j(t[3],"round")).toLowerCase(),l,i)}))},e.functions.rotate=function(l,i){return e.standardFunctionAsync(l,i,(function(e,l,i){i=u(i),o(i,2,3);let f=i[0];if(null===f)return null;if(!(f instanceof n))throw new Error("Illegal Argument");f instanceof r&&(f=tn.fromExtent(f));const a=I(i[1]);if(isNaN(a))throw new Error("Illegal Argument");const c=j(i[2],null);if(null===c)return Y(f,a);if(c instanceof t)return Y(f,a,c);throw new Error("Illegal Argument")}))},e.functions.centroid=function(l,i){return e.standardFunctionAsync(l,i,(function(e,i,f){if(f=u(f),o(f,1,1),null===f[0])return null;let g=f[0];if((a(f[0])||c(f[0]))&&(g=A(f[0],l.spatialReference)),null===g)return null;if(!(g instanceof n))throw new Error("Illegal Argument");return g instanceof t?s(w(f[0]),l.spatialReference):g instanceof tn?g.centroid:g instanceof rn?d(g):g instanceof en?N(g):g instanceof r?g.center:null}))},e.functions.multiparttosinglepart=function(l,i){return e.standardFunctionAsync(l,i,(function(e,i,f){f=u(f),o(f,1,1);const a=[];if(null===f[0])return null;if(!(f[0]instanceof n))throw new Error("Illegal Argument");return f[0]instanceof t||f[0]instanceof r?[s(w(f[0]),l.spatialReference)]:$(f[0]).then((n=>{if(n instanceof tn){const r=[],t=[];for(let e=0;e<n.rings.length;e++)if(n.isClockwise(n.rings[e])){const t=ln({rings:[n.rings[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});r.push(t)}else t.push({ring:n.rings[e],pt:n.getPoint(e,0)});for(let n=0;n<t.length;n++)for(let e=0;e<r.length;e++)if(r[e].contains(t[n].pt)){r[e].addRing(t[n].ring);break}return r}if(n instanceof rn){const r=[];for(let t=0;t<n.paths.length;t++){const e=ln({paths:[n.paths[t]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});r.push(e)}return r}if(f[0]instanceof en){const n=s(w(f[0]),l.spatialReference);for(let r=0;r<n.points.length;r++)a.push(n.getPoint(r));return a}return null}))}))},e.functions.issimple=function(r,t){return e.standardFunctionAsync(r,t,(function(r,t,e){if(e=u(e),o(e,1,1),null===e[0])return!0;if(!(e[0]instanceof n))throw new Error("Illegal Argument");return nn(e[0])}))},e.functions.simplify=function(r,t){return e.standardFunctionAsync(r,t,(function(r,t,e){if(e=u(e),o(e,1,1),null===e[0])return null;if(!(e[0]instanceof n))throw new Error("Illegal Argument");return $(e[0])}))})}export{cn as registerFunctions}