'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let i=l=class extends request.a$2{constructor(o){super(o),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new request.S;}clone(){return new l({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};request.e([request.d({type:String,json:{write:!0}})],i.prototype,"floorField",void 0),request.e([request.d({json:{read:!1,write:!1}})],i.prototype,"viewAllMode",void 0),request.e([request.d({json:{read:!1,write:!1}})],i.prototype,"viewAllLevelIds",void 0),i=l=request.e([request.i("esri.layers.support.LayerFloorInfo")],i);const p=i;

exports.p = p;
