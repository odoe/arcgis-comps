'use strict';

const arcgisEditor_entry = require('./arcgis-editor-90a28e34.js');
const PointSnappingHint = require('./PointSnappingHint-f5c433ac.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends arcgisEditor_entry.e$3{constructor(n){super({...n,constraint:new arcgisEditor_entry.m$1(n.coordinateHelper,n.targetPoint)});}get hints(){return [new PointSnappingHint.s(this.targetPoint)]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o,r){switch(o.type){case"edge":return new arcgisEditor_entry.e$4({coordinateHelper:r,edgeStart:r.pointToVector(o.start),edgeEnd:r.pointToVector(o.end),targetPoint:r.pointToVector(o.target),objectId:o.objectId});case"vertex":return new i({coordinateHelper:r,targetPoint:r.pointToVector(o.target),objectId:o.objectId})}}

exports.o = o;
