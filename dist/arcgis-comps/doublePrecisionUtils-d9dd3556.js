/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,o){e[0]=n,e[1]=n-e[0],o[0]=e[0],o[1]=e[1];}function o(n,o,t){for(let r=0;r<t;++r)o[2*r]=n[r],o[2*r+1]=n[r]-o[2*r];}function t(n,o,t){for(let r=0;r<t;++r)o[r]=n[2*r]+n[2*r+1];}function r(n,t,r,c){for(let l=0;l<c;++l)f[0]=n[l],o(f,e,1),t[l]=e[0],r[l]=e[1];}const f=new Float64Array(1),e=new Float32Array(2);

export { o, r };