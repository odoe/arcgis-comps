import{gt as t,eW as n,gu as e,gv as i,gw as r,dg as s}from"./p-7b6f6c18.js";class o{constructor(){this.code=null,this.description=null}}class l{constructor(t){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function u(t){return new l(t)}class a{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function c(t){return new a(t)}const f=new Set;function h(t,n,e,s=!1,o){f.clear();for(const l in e){const a=t.get(l);if(!a)continue;const c=e[l],h=g(a,c);if(h!==c&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:c,sanitizedValue:h}}),f.add(a.name),a&&(s||a.editable)){const t=i(a,h);if(t)return u(r(t,a,h));n[a.name]=h}}for(const n of t.requiredFields)if(!f.has(n.name))return u(`missing required field "${n.name}"`);return null}function g(i,r){let s=r;return"string"==typeof r&&t(i)?s=parseFloat(r):null!=r&&n(i)&&"string"!=typeof r&&(s=String(r)),e(s)}let p;function y(t,n){if(!t||!s(n))return t;if("rings"in t||"paths"in t){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(n,t)}return t}async function d(t,n){!s(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await async function(){return p||(p=await import("./p-ce933f99.js"),p)}()}export{c,h as d,y as h,u,d as y}