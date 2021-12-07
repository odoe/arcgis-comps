import { Q as E } from './messageBundle-f75b4090.js';
import { e, r } from './utils-ab350511.js';
import { _ } from './units-635b158f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t$1(t,i,e$1){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.strings=JSON.stringify(i.strings);const f=i.conversionType||"mgrs";c.conversionType=_.toJSON(f),c.conversionMode=i.conversionMode;const m=e(t),p={...m.query,f:"json",...c},u=r(p,e$1);return E(m.path+"/fromGeoCoordinateString",u).then((({data:o})=>o.coordinates))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,i,e$1){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.coordinates=JSON.stringify(i.coordinates);const d=i.conversionType||"mgrs";c.conversionType=_.toJSON(d),c.conversionMode=i.conversionMode,c.numOfDigits=i.numOfDigits,c.rounding=i.rounding,c.addSpaces=i.addSpaces;const a=e(t),u={...a.query,f:"json",...c},f=r(u,e$1);return E(a.path+"/toGeoCoordinateString",f).then((({data:o})=>o.strings))}

export { t as a, t$1 as t };
