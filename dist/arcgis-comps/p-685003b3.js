import{r as n,t}from"./p-9ae46e68.js";import{bm as r,bn as u,aC as e,bo as o,bz as c}from"./p-566b0715.js";const l=(n,t,r)=>[t,r],f=(n,t,r)=>[t,r,n[2]],i=(n,t,r)=>[t,r,n[2],n[3]];function s(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:n(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function a({scale:n,translate:t},r){return Math.round((r-t[0])/n[0])}function p({scale:n,translate:t},r){return Math.round((t[1]-r)/n[1])}function b(n,t,r){const u=[];let e,o,c,l;for(let f=0;f<r.length;f++){const i=r[f];f>0?(c=a(n,i[0]),l=p(n,i[1]),c===e&&l===o||(u.push(t(i,c-e,l-o)),e=c,o=l)):(e=a(n,i[0]),o=p(n,i[1]),u.push(t(i,e,o)))}return u.length>0?u:null}function m({scale:n,translate:t},r){return r*n[0]+t[0]}function w({scale:n,translate:t},r){return t[1]-r*n[1]}function h(n,t,r){const u=new Array(r.length);if(!r.length)return u;const[e,o]=n.scale;let c=m(n,r[0][0]),l=w(n,r[0][1]);u[0]=t(r[0],c,l);for(let n=1;n<r.length;n++){const f=r[n];c+=f[0]*e,l-=f[1]*o,u[n]=t(f,c,l)}return u}function j(n,t,r){const u=new Array(r.length);for(let e=0;e<r.length;e++)u[e]=h(n,t,r[e]);return u}function y(n,t,r,u,e){return t.x=a(n,r.x),t.y=p(n,r.y),t!==r&&(u&&(t.z=r.z),e&&(t.m=r.m)),t}function A(n,t){return n&&t?r(t)?y(n,{},t,!1,!1):u(t)?function(n,t,r,u,e){const o=function(n,t,r,u){const e=[],o=r?u?i:f:u?f:l;for(let r=0;r<t.length;r++){const u=b(n,o,t[r]);u&&u.length>=2&&e.push(u)}return e.length?e:null}(n,r.paths,u,e);return o?(t.paths=o,t):null}(n,{},t,!1,!1):e(t)?function(n,t,r,u,e){const o=function(n,t,r,u){const e=[],o=r?u?i:f:u?f:l;for(let r=0;r<t.length;r++){const u=b(n,o,t[r]);u&&u.length>=3&&e.push(u)}return e.length?e:null}(n,r.rings,u,e);return o?(t.rings=o,t):null}(n,{},t,!1,!1):o(t)?function(n,t,r,u,e){return t.points=function(n,t,r,u){return b(n,r?u?i:f:u?f:l,t)}(n,r.points,u,e),t}(n,{},t,!1,!1):c(t)?function(n,t,r){return t.xmin=a(n,r.xmin),t.ymin=p(n,r.ymin),t.xmax=a(n,r.xmax),t.ymax=p(n,r.ymax),t}(n,{},t):null:null}function L(t,r,u,e,o){return n(u)&&(r.points=function(n,t,r,u){return h(n,r?u?i:f:u?f:l,t)}(t,u.points,e,o)),r}function M(n,r,u,e,o){return t(u)||(r.x=m(n,u.x),r.y=w(n,u.y),r!==u&&(e&&(r.z=u.z),o&&(r.m=u.m))),r}function g(t,r,u,e,o){return n(u)&&(r.rings=function(n,t,r,u){return j(n,r?u?i:f:u?f:l,t)}(t,u.rings,e,o)),r}function x(t,r,u,e,o){return n(u)&&(r.paths=function(n,t,r,u){return j(n,r?u?i:f:u?f:l,t)}(t,u.paths,e,o)),r}export{g as B,x as C,y as O,A as U,L as q,s,M as v}