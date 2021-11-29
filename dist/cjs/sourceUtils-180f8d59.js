'use strict';

const request = require('./MapView-1726f571.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{constructor(){this.code=null,this.description=null;}}class l{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e;}}function u(e){return new l(e)}class a{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e;}}function c(e){return new a(e)}const f=new Set;function d(e,t,r,s=!1,o){f.clear();for(const l in r){const a=e.get(l);if(!a)continue;const c=r[l],d=m(a,c);if(d!==c&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:c,sanitizedValue:d}}),f.add(a.name),a&&(s||a.editable)){const e=request.ie(a,d);if(e)return u(request.de(e,a,d));t[a.name]=d;}}for(const n of e.requiredFields)if(!f.has(n.name))return u(`missing required field "${n.name}"`);return null}function m(e,n){let i=n;return "string"==typeof n&&request.B$2(e)?i=parseFloat(n):null!=n&&request.H$1(e)&&"string"!=typeof n&&(i=String(n)),request.ne(i)}let p;function h(t,n){if(!t||!request.I$1(n))return t;if("rings"in t||"paths"in t){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(n,t)}return t}async function g(){return p||(p=await Promise.resolve().then(function () { return require('./geometryEngineJSON-9696d850.js'); }),p)}async function y(t,n){!request.I$1(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await g();}

exports.c = c;
exports.d = d;
exports.h = h;
exports.u = u;
exports.y = y;
