import { bN as r$1 } from './messageBundle-f75b4090.js';
import { i, s, e as e$1, a as i$1 } from './arcgis-editor-c0835cea.js';
import { s as s$1 } from './PointSnappingHint-bb0669ef.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{draw(r,a){const p=this.getUniqueHints(r),h=[];for(const i$2 of p)i$2 instanceof i&&h.push(this.visualizeIntersectionPoint(i$2,a)),i$2 instanceof s&&h.push(this.visualizeLine(i$2,a)),i$2 instanceof e$1&&h.push(this.visualizeParallelSign(i$2,a)),i$2 instanceof i$1&&h.push(this.visualizeRightAngleQuad(i$2,a)),i$2 instanceof s$1&&h.push(this.visualizePoint(i$2,a));return r$1(h)}getUniqueHints(i){const n=[];for(const t of i){let i=!0;for(const s of n)if(t.equals(s)){i=!1;break}i&&n.push(t);}return n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(e){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.editGeometryOperations=e.editGeometryOperations,this.elevationInfo=e.elevationInfo,this.pointer=e.pointer,this.vertexHandle=e.vertexHandle,this.excludeFeature=e.excludeFeature,this.visualizer=e.visualizer;}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}}

export { e, r };
