'use strict';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){return "function"==typeof t}function e(e,r,n,a){return t(e)?e(r,n,a):e}function r(t){return [t.r,t.g,t.b,t.a]}function n(t,e,r){const n=" /-,\n",i=t=>{let e=t.length;for(;e--;)if(-1===n.indexOf(t.charAt(e)))return !1;return !0},l=[];let o=0,c=-1;do{if(c=e.indexOf("[",o),c>=o){if(c>o){const t=e.substr(o,c-o);l.push([t,null,i(t)]);}if(o=c+1,c=e.indexOf("]",o),c>=o){if(c>o){const r=t[e.substr(o,c-o)];r&&l.push([null,r,!1]);}o=c+1;}}}while(-1!==c);if(o<e.length-1){const t=e.substr(o);l.push([t,null,i(t)]);}return t=>{let e="",n=null;for(const r of l){const[a,i,l]=r;if(a)l?n=a:(n&&(e+=n,n=null),e+=a);else {const r=t.attributes[i];r&&(n&&(e+=n,n=null),e+=r);}}return a(e,r)}}function a(t,e){switch("string"!=typeof t&&(t=String(t)),e){case"LowerCase":return t.toLowerCase();case"Allcaps":return t.toUpperCase();default:return t}}function i(t,e,r,n,a,i,l=!0){const o=e/a,c=r/i,u=Math.ceil(o/2),M=Math.ceil(c/2);for(let s=0;s<i;s++)for(let r=0;r<a;r++){const f=4*(r+(l?i-s-1:s)*a);let p=0,C=0,y=0,I=0,h=0,k=0,d=0;const P=(s+.5)*c;for(let n=Math.floor(s*c);n<(s+1)*c;n++){const a=Math.abs(P-(n+.5))/M,i=(r+.5)*o,l=a*a;for(let c=Math.floor(r*o);c<(r+1)*o;c++){let r=Math.abs(i-(c+.5))/u;const a=Math.sqrt(l+r*r);a>=-1&&a<=1&&(p=2*a*a*a-3*a*a+1,p>0&&(r=4*(c+n*e),d+=p*t[r+3],y+=p,t[r+3]<255&&(p=p*t[r+3]/250),I+=p*t[r],h+=p*t[r+1],k+=p*t[r+2],C+=p));}}n[f]=I/C,n[f+1]=h/C,n[f+2]=k/C,n[f+3]=d/y;}}function l(t){return t?{r:t[0],g:t[1],b:t[2],a:t[3]/255}:{r:0,g:0,b:0,a:0}}function o(t){var e;return null==(e=t.data)?void 0:e.symbol}function c(t){return "CIMVectorMarker"===t.type||"CIMPictureMarker"===t.type||"CIMBarChartMarker"===t.type||"CIMCharacterMarker"===t.type||"CIMPieChartMarker"===t.type||"CIMStackedBarChartMarker"===t.type}function u(t){return "CIMGradientStroke"===t.type||"CIMPictureStroke"===t.type||"CIMSolidStroke"===t.type}function M(t){return "CIMGradientFill"===t.type||"CIMHatchFill"===t.type||"CIMPictureFill"===t.type||"CIMSolidFill"===t.type||"CIMWaterFill"===t.type}function s(t){return "CIMMarkerPlacementAlongLineRandomSize"===t.type||"CIMMarkerPlacementAlongLineSameSize"===t.type||"CIMMarkerPlacementAlongLineVariableSize"===t.type||"CIMMarkerPlacementAtExtremities"===t.type||"CIMMarkerPlacementAtMeasuredUnits"===t.type||"CIMMarkerPlacementAtRatioPositions"===t.type||"CIMMarkerPlacementOnLine"===t.type||"CIMMarkerPlacementOnVertices"===t.type}

exports.M = M;
exports.a = a;
exports.c = c;
exports.e = e;
exports.i = i;
exports.l = l;
exports.n = n;
exports.o = o;
exports.r = r;
exports.s = s;
exports.u = u;
