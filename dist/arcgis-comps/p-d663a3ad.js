import{Q as o}from"./p-e58503d5.js";import{e as t,r as n}from"./p-7ca40eac.js";import{_ as r}from"./p-181bf7a5.js";async function s(s,a,e){const c={};c.sr=null!=a.sr&&"object"==typeof a.sr?a.sr.wkid||JSON.stringify(a.sr):a.sr,c.strings=JSON.stringify(a.strings),c.conversionType=r.toJSON(a.conversionType||"mgrs"),c.conversionMode=a.conversionMode;const f=t(s),i={...f.query,f:"json",...c},m=n(i,e);return o(f.path+"/fromGeoCoordinateString",m).then((({data:o})=>o.coordinates))}async function a(s,a,e){const c={};c.sr=null!=a.sr&&"object"==typeof a.sr?a.sr.wkid||JSON.stringify(a.sr):a.sr,c.coordinates=JSON.stringify(a.coordinates),c.conversionType=r.toJSON(a.conversionType||"mgrs"),c.conversionMode=a.conversionMode,c.numOfDigits=a.numOfDigits,c.rounding=a.rounding,c.addSpaces=a.addSpaces;const f=t(s),i={...f.query,f:"json",...c},m=n(i,e);return o(f.path+"/toGeoCoordinateString",m).then((({data:o})=>o.strings))}export{a,s as t}