import{e7 as e,aG as n,jx as s,e as r,d as t,i as o,ec as a,a7 as i}from"./p-7b6f6c18.js";import"./p-227a5838.js";let l=class extends(e(n(a))){constructor(e){super(e),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((e,n)=>{s((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unknown layer type";e&&(s+=" "+e),n(new i("layer:unknown-layer-type",s,{layerType:e}))}))})))}read(e,n){super.read({resourceInfo:e},n)}write(){return null}};r([t({readOnly:!0})],l.prototype,"resourceInfo",void 0),r([t({type:["show","hide"]})],l.prototype,"listMode",void 0),r([t({json:{read:!1},readOnly:!0,value:"unknown"})],l.prototype,"type",void 0),l=r([o("esri.layers.UnknownLayer")],l);const u=l;export default u;