'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(){return function(n,t){if(!n[t])throw new TypeError(`Cannot auto bind undefined function '${t}'`);return {value:o(n[t])}}}function e(n){const{type:t}=n;return n instanceof KeyboardEvent||"keyup"===t||"keydown"===t||"keypress"===t}function o(t){return function(o,...r){e(o)?request.y(o.key)&&(o.preventDefault(),o.stopPropagation(),o.target.click()):t.call(this,o,...r);}}

exports.t = t;
