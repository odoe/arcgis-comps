'use strict';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(n,o,t){for(let r=0;r<t;++r)o[2*r]=n[r],o[2*r+1]=n[r]-o[2*r];}function r(n,t,r,c){for(let l=0;l<c;++l)f[0]=n[l],o(f,e,1),t[l]=e[0],r[l]=e[1];}const f=new Float64Array(1),e=new Float32Array(2);

exports.o = o;
exports.r = r;
