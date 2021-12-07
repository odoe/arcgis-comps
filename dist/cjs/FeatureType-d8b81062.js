'use strict';

const request = require('./messageBundle-8be88d04.js');
const Field = require('./Field-b92c6f4a.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=new request.o$1({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let l=class extends request.a$2{constructor(o){super(o),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null;}};request.e([request.d({json:{write:!0}})],l.prototype,"name",void 0),request.e([request.d({json:{write:!0}})],l.prototype,"description",void 0),request.e([request.d({json:{read:s.read,write:s.write}})],l.prototype,"drawingTool",void 0),request.e([request.d({json:{write:!0}})],l.prototype,"prototype",void 0),request.e([request.d({json:{write:!0}})],l.prototype,"thumbnail",void 0),l=request.e([request.i("esri.layers.support.FeatureTemplate")],l);const a=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends request.a$2{constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null;}readDomains(o){const r={};for(const s of Object.keys(o))r[s]=Field.t(o[s]);return r}writeDomains(o,r){const s={};for(const e of Object.keys(o)){var t;if(o[e])s[e]=null==(t=o[e])?void 0:t.toJSON();}r.domains=s;}};request.e([request.d({json:{write:!0}})],c.prototype,"id",void 0),request.e([request.d({json:{write:!0}})],c.prototype,"name",void 0),request.e([request.d({json:{write:!0}})],c.prototype,"domains",void 0),request.e([request.o$2("domains")],c.prototype,"readDomains",null),request.e([request.r$2("domains")],c.prototype,"writeDomains",null),request.e([request.d({type:[a],json:{write:!0}})],c.prototype,"templates",void 0),c=request.e([request.i("esri.layers.support.FeatureType")],c);const m=c;

exports.a = a;
exports.m = m;
