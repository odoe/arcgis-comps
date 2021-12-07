import { e } from './mathUtils-e16f9389.js';
import { l as n, X as l } from './messageBundle-f75b4090.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={heading:"esri-widget__heading"};function s(s,i){const c=`h${e(Math.ceil(s.level),1,6)}`;return delete s.level,n(c,{...s,class:l(r.heading,s.class)},i)}

export { s };
