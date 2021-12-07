'use strict';

const mathUtils = require('./mathUtils-af6066f0.js');
const quat = require('./quat-17613ceb.js');
const quatf64 = require('./quatf64-e7a7f39e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(n=U){return [n[0],n[1],n[2],n[3]]}function k(n,r,t=a()){return mathUtils.r(l(t),n),t[3]=r,t}function q(r,c,s=a()){return quat.I(b,l(r),x(r)),quat.I(d,l(c),x(c)),quat.v(b,d,b),y(s,mathUtils.m(quat.P(l(s),b)))}function l(n){return n}function v(n){return n[3]}function x(n){return mathUtils.M(n[3])}function y(n,r){return n[3]=r,n}const U=[0,0,1,0],b=quatf64.e$1(),d=quatf64.e$1();

exports.a = a;
exports.k = k;
exports.l = l;
exports.q = q;
exports.v = v;
exports.x = x;
