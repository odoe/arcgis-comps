'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends request.p{constructor(...r){super(...r),this.requestOptions=null,this.url=null;}normalizeCtorArgs(r,s){return "string"!=typeof r?r:{url:r,...s}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(r){return r?request.U(r):null}_encode(r,s,t){const o={};for(const e in r){if("declaredClass"===e)continue;const i=r[e];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){o[e]=[];for(let r=0;r<i.length;r++)o[e][r]=this._encode(i[r]);}else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(t&&t[e]);o[e]=s?r:JSON.stringify(r);}else o[e]=s?i:JSON.stringify(i);else o[e]=i;}return o}};request.e([request.d({readOnly:!0})],i.prototype,"parsedUrl",null),request.e([request.d()],i.prototype,"requestOptions",void 0),request.e([request.d({type:String})],i.prototype,"url",void 0),i=request.e([request.i("esri.tasks.Task")],i);const l=i;

exports.l = l;
