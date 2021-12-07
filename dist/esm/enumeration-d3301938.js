import { d, N as o } from './messageBundle-f75b4090.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,o$1={}){var l;const a=r instanceof o?r:new o(r,o$1),t={type:null==(l=null==o$1?void 0:o$1.ignoreUnknown)||l?a.apiValues:String,readOnly:null==o$1?void 0:o$1.readOnly,json:{type:a.jsonValues,read:(null==o$1||!o$1.readOnly)&&{reader:a.read},write:{writer:a.write}}};return void 0!==(null==o$1?void 0:o$1.default)&&(t.json.default=o$1.default),void 0!==(null==o$1?void 0:o$1.name)&&(t.json.name=o$1.name),d(t)}

export { r };
