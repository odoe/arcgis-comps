'use strict';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,n){if(!t(e,n)){const t=e.typeKeywords;t?t.push(n):e.typeKeywords=[n];}}function t(e,t){return !!e.typeKeywords&&e.typeKeywords.indexOf(t)>-1}function n(e,t){const n=e.typeKeywords;if(n){const e=n.indexOf(t);e>-1&&n.splice(e,1);}}

exports.e = e;
exports.n = n;
exports.t = t;
