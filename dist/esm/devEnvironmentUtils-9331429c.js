import { bO as e$1 } from './messageBundle-f75b4090.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(a){return a=a||e$1.location.hostname,e.some((c=>{var t;return null!=(null==(t=a)?void 0:t.match(c))}))}function t(a,t){return a&&(t=t||e$1.location.hostname)?null!=t.match(r)||null!=t.match(m)?a.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(s)?a.replace("static.arcgis.com","staticqa.arcgis.com"):a:a}const r=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,m=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,e=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,r,n,/^jsapps.esri.com$/,m,s];

export { a, t };
