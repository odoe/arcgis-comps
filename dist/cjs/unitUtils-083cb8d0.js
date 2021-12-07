'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function T(e){return new request.k({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const G$1=T(request.s$9),I$1=T(request.t$8),E$1=T(request.e$8),R$1=new request.k({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${request.s$9.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function A$1(n){return n&&n===request.t$8?I$1:n&&n===request.e$8?E$1:G$1}function O$1(n){return n&&(request.G$1(n)||n===I$1)?I$1:n&&(request.C$1(n)||n===E$1)?E$1:G$1}function p$1(n){return n&&(request.G$1(n)||n===I$1)?request.t$8:n&&(request.C$1(n)||n===E$1)?request.e$8:request.s$9}function u(n){return request.w$2(n)?request.t$8:request.P$2(n)?request.e$8:request.s$9}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m=39.37,f=request.s$9.radius*Math.PI/200,d=/UNIT\[([^\]]+)\]\]$/i,U=request.r$10,q=/UNIT\[([^\]]+)\]/i,B=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),p=request.s$5()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),h=e=>e*e,k=e=>e*e*e,y={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:h(.001)},"square-centimeters":{inBaseUnits:h(.01)},"square-decimeters":{inBaseUnits:h(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:h(1e3)},"square-inches":{inBaseUnits:h(.0254)},"square-feet":{inBaseUnits:h(.3048)},"square-yards":{inBaseUnits:h(.9144)},"square-miles":{inBaseUnits:h(1609.344)},"square-us-feet":{inBaseUnits:h(1200/3937)},acres:{inBaseUnits:.0015625*h(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*k(.001)},"cubic-centimeters":{inBaseUnits:1e3*k(.01)},"cubic-decimeters":{inBaseUnits:1e3*k(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*k(1e3)},"cubic-inches":{inBaseUnits:1e3*k(.0254)},"cubic-feet":{inBaseUnits:1e3*k(.3048)},"cubic-yards":{inBaseUnits:1e3*k(.9144)},"cubic-miles":{inBaseUnits:1e3*k(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},b=function(){const e={};for(const s in y)for(const r in y[s].units)e[r]=s;return e}();function _(e,s,r){return e*y[r].units[s].inBaseUnits}function g(e,s,r){return e/y[r].units[s].inBaseUnits}function M(e){const s=b[e];if(s)return s;throw new Error("unknown measure")}function I(e){return y[e].baseUnit}function P(e){return I(M(e))}function C(e,s=null){return s=s||M(e),y[s].baseUnit===e}function D(e,s,r){if(s===r)return e;const t=M(s);if(t!==M(r))throw new Error("incompatible units");const i=C(s,t)?e:_(e,s,t);return C(r,t)?i:g(i,r,t)}function E(e,s){return D(e,s,"meters")<3e3?"meters":"kilometers"}function N(e,s){return D(e,s,"meters")<1e5?"meters":"kilometers"}function O(e,s){return D(e,s,"feet")<1e3?"feet":"miles"}function F(e,s){return D(e,s,"feet")<1e5?"feet":"miles"}function J(e,s){return D(e,s,"square-meters")<3e6?"square-meters":"square-kilometers"}function K(e,s){return D(e,s,"square-feet")<1e6?"square-feet":"square-miles"}function R(e,s,r){return D(e,s,"meters")/(r*Math.PI/180)}function A(e){return p.fromJSON(e.toLowerCase())||null}function Y(e){if(e&&"object"==typeof e&&!request.o$8(e))return 1;const s=H(e);return s>1e5?1:s}function G(e){return H(e)>=(e instanceof request.k?p$1(e).metersPerDegree:1e5)?"meters":z(e)}function H(e,s=request.s$9.metersPerDegree){return L(e,!0)||s}function L(e,s=!1){let r,t,i=null;if(null!=e&&("object"==typeof e?(r=e.wkid,t=e.wkt):"number"==typeof e?r=e:"string"==typeof e&&(t=e)),r){if(request.w$2(r))return request.t$8.metersPerDegree;if(request.P$2(r))return request.e$8.metersPerDegree;i=U.values[U[r]],!i&&s&&B.has(r)&&(i=f);}else t&&(V(t)?i=W(d.exec(t),i):Q(t)&&(i=W(q.exec(t),i)));return i}function W(e,s){return e&&e[1]?$(e[1]):s}function $(e){return parseFloat(e.split(",")[1])}function z(e){let r,t,i=null;if(null!=e&&("object"==typeof e?(r=e.wkid,t=e.wkt):"number"==typeof e?r=e:"string"==typeof e&&(t=e)),r)i=U.units[U[r]];else if(t){const e=V(t)?d:Q(t)?q:null;if(e){const s=e.exec(t);s&&s[1]&&(i=Z(s[1]));}}return request.r(i)?A(i):null}function Q(e){return /^GEOCCS/i.test(e)}function V(e){return /^PROJCS/i.test(e)}const X=1e-7;function Z(e){const s=/[\\"\\']{1}([^\\"\\']+)/.exec(e);let r=s&&s[1];if(!r||-1===U.units.indexOf(r)){const s=$(e);r=null;const t=U.values;for(let e=0;e<t.length;++e)if(Math.abs(s-t[e])<X){r=U.units[e];break}}return r}function ee(e){if(!e)return null;switch(z(e)){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return "imperial";case"50-kilometers":case"150-kilometers":case"meters":return "metric";case null:case void 0:return null}return null}const se={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},re={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},te=request.s$5()(se),ie=request.s$5()(re);request.s$5()({...se,...re});

exports.A = A;
exports.A$1 = A$1;
exports.C = C;
exports.D = D;
exports.E = E;
exports.E$1 = E$1;
exports.F = F;
exports.G = G;
exports.G$1 = G$1;
exports.H = H;
exports.I = I$1;
exports.J = J;
exports.K = K;
exports.L = L;
exports.M = M;
exports.N = N;
exports.O = O;
exports.O$1 = O$1;
exports.P = P;
exports.R = R$1;
exports.R$1 = R;
exports.Y = Y;
exports.ee = ee;
exports.ie = ie;
exports.m = m;
exports.p = p$1;
exports.te = te;
exports.u = u;
exports.z = z;
