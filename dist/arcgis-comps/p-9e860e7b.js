function t(t,e,r,n){return"function"==typeof t?t(e,r,n):t}function e(t){return[t.r,t.g,t.b,t.a]}function r(t,e,r){const a=t=>{let e=t.length;for(;e--;)if(-1===" /-,\n".indexOf(t.charAt(e)))return!1;return!0},i=[];let l=0,o=-1;do{if(o=e.indexOf("[",l),o>=l){if(o>l){const t=e.substr(l,o-l);i.push([t,null,a(t)])}if(l=o+1,o=e.indexOf("]",l),o>=l){if(o>l){const r=t[e.substr(l,o-l)];r&&i.push([null,r,!1])}l=o+1}}}while(-1!==o);if(l<e.length-1){const t=e.substr(l);i.push([t,null,a(t)])}return t=>{let e="",a=null;for(const r of i){const[n,i,l]=r;if(n)l?a=n:(a&&(e+=a,a=null),e+=n);else{const r=t.attributes[i];r&&(a&&(e+=a,a=null),e+=r)}}return n(e,r)}}function n(t,e){switch("string"!=typeof t&&(t=String(t)),e){case"LowerCase":return t.toLowerCase();case"Allcaps":return t.toUpperCase();default:return t}}function a(t,e,r,n,a,i,l=!0){const o=e/a,c=r/i,M=Math.ceil(o/2),u=Math.ceil(c/2);for(let r=0;r<i;r++)for(let f=0;f<a;f++){const C=4*(f+(l?i-r-1:r)*a);let s=0,I=0,k=0,h=0,P=0,m=0,S=0;const d=(r+.5)*c;for(let n=Math.floor(r*c);n<(r+1)*c;n++){const r=Math.abs(d-(n+.5))/u,a=(f+.5)*o,i=r*r;for(let r=Math.floor(f*o);r<(f+1)*o;r++){let l=Math.abs(a-(r+.5))/M;const o=Math.sqrt(i+l*l);o>=-1&&o<=1&&(s=2*o*o*o-3*o*o+1,s>0&&(l=4*(r+n*e),S+=s*t[l+3],k+=s,t[l+3]<255&&(s=s*t[l+3]/250),h+=s*t[l],P+=s*t[l+1],m+=s*t[l+2],I+=s))}}n[C]=h/I,n[C+1]=P/I,n[C+2]=m/I,n[C+3]=S/k}}function i(t){return t?{r:t[0],g:t[1],b:t[2],a:t[3]/255}:{r:0,g:0,b:0,a:0}}function l(t){var e;return null==(e=t.data)?void 0:e.symbol}function o(t){return"CIMVectorMarker"===t.type||"CIMPictureMarker"===t.type||"CIMBarChartMarker"===t.type||"CIMCharacterMarker"===t.type||"CIMPieChartMarker"===t.type||"CIMStackedBarChartMarker"===t.type}function c(t){return"CIMGradientStroke"===t.type||"CIMPictureStroke"===t.type||"CIMSolidStroke"===t.type}function M(t){return"CIMGradientFill"===t.type||"CIMHatchFill"===t.type||"CIMPictureFill"===t.type||"CIMSolidFill"===t.type||"CIMWaterFill"===t.type}function u(t){return"CIMMarkerPlacementAlongLineRandomSize"===t.type||"CIMMarkerPlacementAlongLineSameSize"===t.type||"CIMMarkerPlacementAlongLineVariableSize"===t.type||"CIMMarkerPlacementAtExtremities"===t.type||"CIMMarkerPlacementAtMeasuredUnits"===t.type||"CIMMarkerPlacementAtRatioPositions"===t.type||"CIMMarkerPlacementOnLine"===t.type||"CIMMarkerPlacementOnVertices"===t.type}export{M,n as a,o as c,t as e,a as i,i as l,r as n,l as o,e as r,u as s,c as u}