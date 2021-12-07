'use strict';

const request = require('./messageBundle-8be88d04.js');
const enumeration = require('./enumeration-f235fe07.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
exports.s=class extends request.a$2{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null;}};request.e([request.d({type:Number})],exports.s.prototype,"nodesPerPage",void 0),request.e([request.d({type:Number})],exports.s.prototype,"rootIndex",void 0),request.e([request.d({type:String})],exports.s.prototype,"lodSelectionMetricType",void 0),exports.s=request.e([request.i("esri.layer.support.I3SNodePageDefinition")],exports.s);let i=class extends request.a$2{constructor(){super(...arguments),this.factor=1;}};request.e([request.d({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],i.prototype,"id",void 0),request.e([request.d({type:Number})],i.prototype,"factor",void 0),i=request.e([request.i("esri.layer.support.I3SMaterialTexture")],i);let a=class extends request.a$2{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1;}};request.e([request.d({type:[Number]})],a.prototype,"baseColorFactor",void 0),request.e([request.d({type:i})],a.prototype,"baseColorTexture",void 0),request.e([request.d({type:i})],a.prototype,"metallicRoughnessTexture",void 0),request.e([request.d({type:Number})],a.prototype,"metallicFactor",void 0),request.e([request.d({type:Number})],a.prototype,"roughnessFactor",void 0),a=request.e([request.i("esri.layer.support.I3SMaterialPBRMetallicRoughness")],a);exports.l=class extends request.a$2{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null;}};request.e([enumeration.r({opaque:"opaque",mask:"mask",blend:"blend"})],exports.l.prototype,"alphaMode",void 0),request.e([request.d({type:Number})],exports.l.prototype,"alphaCutoff",void 0),request.e([request.d({type:Boolean})],exports.l.prototype,"doubleSided",void 0),request.e([enumeration.r({none:"none",back:"back",front:"front"})],exports.l.prototype,"cullFace",void 0),request.e([request.d({type:i})],exports.l.prototype,"normalTexture",void 0),request.e([request.d({type:i})],exports.l.prototype,"occlusionTexture",void 0),request.e([request.d({type:i})],exports.l.prototype,"emissiveTexture",void 0),request.e([request.d({type:[Number]})],exports.l.prototype,"emissiveFactor",void 0),request.e([request.d({type:a})],exports.l.prototype,"pbrMetallicRoughness",void 0),exports.l=request.e([request.i("esri.layer.support.I3SMaterialDefinition")],exports.l);let n=class extends request.a$2{};request.e([request.d({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],n.prototype,"name",void 0),request.e([enumeration.r({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],n.prototype,"format",void 0),n=request.e([request.i("esri.layer.support.I3STextureFormat")],n);exports.u=class extends request.a$2{constructor(){super(...arguments),this.atlas=!1;}};request.e([request.d({type:[n]})],exports.u.prototype,"formats",void 0),request.e([request.d({type:Boolean})],exports.u.prototype,"atlas",void 0),exports.u=request.e([request.i("esri.layer.support.I3STextureSetDefinition")],exports.u);let y=class extends request.a$2{};request.e([enumeration.r({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),request.e([request.d({type:Number})],y.prototype,"component",void 0),y=request.e([request.i("esri.layer.support.I3SGeometryAttribute")],y);let d=class extends request.a$2{};request.e([enumeration.r({draco:"draco"})],d.prototype,"encoding",void 0),request.e([request.d({type:[String]})],d.prototype,"attributes",void 0),d=request.e([request.i("esri.layer.support.I3SGeometryCompressedAttributes")],d);let c=class extends request.a$2{constructor(){super(...arguments),this.offset=0;}};request.e([request.d({type:Number})],c.prototype,"offset",void 0),request.e([request.d({type:y})],c.prototype,"position",void 0),request.e([request.d({type:y})],c.prototype,"normal",void 0),request.e([request.d({type:y})],c.prototype,"uv0",void 0),request.e([request.d({type:y})],c.prototype,"color",void 0),request.e([request.d({type:y})],c.prototype,"uvRegion",void 0),request.e([request.d({type:y})],c.prototype,"featureId",void 0),request.e([request.d({type:y})],c.prototype,"faceRange",void 0),request.e([request.d({type:d})],c.prototype,"compressedAttributes",void 0),c=request.e([request.i("esri.layer.support.I3SGeometryBuffer")],c);exports.m=class extends request.a$2{};request.e([enumeration.r({triangle:"triangle"})],exports.m.prototype,"topology",void 0),request.e([request.d()],exports.m.prototype,"geometryBuffers",void 0),exports.m=request.e([request.i("esri.layer.support.I3SGeometryDefinition")],exports.m);
