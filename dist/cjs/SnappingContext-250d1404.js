'use strict';

const request = require('./messageBundle-8be88d04.js');
const arcgisEditor_entry = require('./arcgis-editor-90a28e34.js');
const PointSnappingHint = require('./PointSnappingHint-f5c433ac.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{draw(r,a){const p=this.getUniqueHints(r),h=[];for(const i of p)i instanceof arcgisEditor_entry.i&&h.push(this.visualizeIntersectionPoint(i,a)),i instanceof arcgisEditor_entry.s&&h.push(this.visualizeLine(i,a)),i instanceof arcgisEditor_entry.e&&h.push(this.visualizeParallelSign(i,a)),i instanceof arcgisEditor_entry.i$1&&h.push(this.visualizeRightAngleQuad(i,a)),i instanceof PointSnappingHint.s&&h.push(this.visualizePoint(i,a));return request.r$7(h)}getUniqueHints(i){const n=[];for(const t of i){let i=!0;for(const s of n)if(t.equals(s)){i=!1;break}i&&n.push(t);}return n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(e){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.editGeometryOperations=e.editGeometryOperations,this.elevationInfo=e.elevationInfo,this.pointer=e.pointer,this.vertexHandle=e.vertexHandle,this.excludeFeature=e.excludeFeature,this.visualizer=e.visualizer;}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}}

exports.e = e;
exports.r = r;
