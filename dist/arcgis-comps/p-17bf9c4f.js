import{e,d as t,i as o}from"./p-9ae46e68.js";import{a as s}from"./p-fe01b82b.js";import{f as r}from"./p-566b0715.js";let i=class extends s{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};e([t({type:Number})],i.prototype,"nodesPerPage",void 0),e([t({type:Number})],i.prototype,"rootIndex",void 0),e([t({type:String})],i.prototype,"lodSelectionMetricType",void 0),i=e([o("esri.layer.support.I3SNodePageDefinition")],i);let n=class extends s{constructor(){super(...arguments),this.factor=1}};e([t({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],n.prototype,"id",void 0),e([t({type:Number})],n.prototype,"factor",void 0),n=e([o("esri.layer.support.I3SMaterialTexture")],n);let l=class extends s{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};e([t({type:[Number]})],l.prototype,"baseColorFactor",void 0),e([t({type:n})],l.prototype,"baseColorTexture",void 0),e([t({type:n})],l.prototype,"metallicRoughnessTexture",void 0),e([t({type:Number})],l.prototype,"metallicFactor",void 0),e([t({type:Number})],l.prototype,"roughnessFactor",void 0),l=e([o("esri.layer.support.I3SMaterialPBRMetallicRoughness")],l);let a=class extends s{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};e([r({opaque:"opaque",mask:"mask",blend:"blend"})],a.prototype,"alphaMode",void 0),e([t({type:Number})],a.prototype,"alphaCutoff",void 0),e([t({type:Boolean})],a.prototype,"doubleSided",void 0),e([r({none:"none",back:"back",front:"front"})],a.prototype,"cullFace",void 0),e([t({type:n})],a.prototype,"normalTexture",void 0),e([t({type:n})],a.prototype,"occlusionTexture",void 0),e([t({type:n})],a.prototype,"emissiveTexture",void 0),e([t({type:[Number]})],a.prototype,"emissiveFactor",void 0),e([t({type:l})],a.prototype,"pbrMetallicRoughness",void 0),a=e([o("esri.layer.support.I3SMaterialDefinition")],a);let p=class extends s{};e([t({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],p.prototype,"name",void 0),e([r({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],p.prototype,"format",void 0),p=e([o("esri.layer.support.I3STextureFormat")],p);let d=class extends s{constructor(){super(...arguments),this.atlas=!1}};e([t({type:[p]})],d.prototype,"formats",void 0),e([t({type:Boolean})],d.prototype,"atlas",void 0),d=e([o("esri.layer.support.I3STextureSetDefinition")],d);let u=class extends s{};e([r({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],u.prototype,"type",void 0),e([t({type:Number})],u.prototype,"component",void 0),u=e([o("esri.layer.support.I3SGeometryAttribute")],u);let c=class extends s{};e([r({draco:"draco"})],c.prototype,"encoding",void 0),e([t({type:[String]})],c.prototype,"attributes",void 0),c=e([o("esri.layer.support.I3SGeometryCompressedAttributes")],c);let y=class extends s{constructor(){super(...arguments),this.offset=0}};e([t({type:Number})],y.prototype,"offset",void 0),e([t({type:u})],y.prototype,"position",void 0),e([t({type:u})],y.prototype,"normal",void 0),e([t({type:u})],y.prototype,"uv0",void 0),e([t({type:u})],y.prototype,"color",void 0),e([t({type:u})],y.prototype,"uvRegion",void 0),e([t({type:u})],y.prototype,"featureId",void 0),e([t({type:u})],y.prototype,"faceRange",void 0),e([t({type:c})],y.prototype,"compressedAttributes",void 0),y=e([o("esri.layer.support.I3SGeometryBuffer")],y);let v=class extends s{};e([r({triangle:"triangle"})],v.prototype,"topology",void 0),e([t()],v.prototype,"geometryBuffers",void 0),v=e([o("esri.layer.support.I3SGeometryDefinition")],v);export{a as l,v as m,i as s,d as u}