'use strict';

const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],i=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],o=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,i,o))}class P{constructor(t,n){this.min=t,this.max=n,this.range=n-t;}ndiff(t,n=0){return Math.ceil((t-n)/this.range)*this.range+n}_normalize(t,n,i,o=0,s=!1){return (i-=o)<t?i+=this.ndiff(t-i):i>n&&(i-=this.ndiff(i-n)),s&&i===n&&(i=t),i+o}normalize(t,n=0,i=!1){return this._normalize(this.min,this.max,t,n,i)}clamp(t,i=0){return unitUtils.e$1(t-i,this.min,this.max)+i}monotonic(t,n,i){return t<n?n:n+this.ndiff(t-n,i)}minimalMonotonic(t,n,i){return this._normalize(t,t+this.range,n,i)}center(t,n,i){return n=this.monotonic(t,n,i),this.normalize((t+n)/2,i)}diff(t,n,i){return this.monotonic(t,n,i)-t}shortestSignedDiff(t,n){t=this.normalize(t);const i=(n=this.normalize(n))-t,o=n<t?this.minimalMonotonic(t,n)-t:n-this.minimalMonotonic(n,t);return Math.abs(i)<Math.abs(o)?i:o}contains(t,n,i){return n=this.minimalMonotonic(t,n),(i=this.minimalMonotonic(t,i))>t&&i<n}}function D(t){for(const n in t){const i=t[n];i instanceof Function&&(t[n]=i.bind(t));}return t}D(new P(0,2*Math.PI));D(new P(-Math.PI,Math.PI));const U=D(new P(0,360));

exports.U = U;
exports.d = d;
