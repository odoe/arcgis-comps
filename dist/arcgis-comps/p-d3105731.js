function n(){return[0,0,0]}function t(n){return[n[0],n[1],n[2]]}function r(n,t,r){return[n,t,r]}function e(n){const t=[0,0,0],r=Math.min(3,n.length);for(let e=0;e<r;++e)t[e]=n[e];return t}function u(n,t){return new Float64Array(n,t,3)}function o(){return r(1,1,1)}function a(){return r(1,0,0)}function c(){return r(0,1,0)}function i(){return r(0,0,1)}const f=[0,0,0],s=o(),_=a(),l=c(),M=i();Object.freeze({__proto__:null,create:n,clone:t,fromValues:r,fromArray:e,createView:u,zeros:function(){return[0,0,0]},ones:o,unitX:a,unitY:c,unitZ:i,ZEROS:f,ONES:s,UNIT_X:_,UNIT_Y:l,UNIT_Z:M});const h=1e-6,N=Math.random,O=Math.PI/180,I=180/Math.PI;function b(n){return n*O}function p(n){return n*I}Object.freeze({__proto__:null,EPSILON:h,RANDOM:N,toRadian:b,toDegree:p,equals:function(n,t){return Math.abs(n-t)<=h*Math.max(1,Math.abs(n),Math.abs(t))}});export{h as a,t as b,e,f,i,s as l,n,p as o,r,b as s,N as t,u}