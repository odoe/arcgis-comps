import{aR as e,e as r,d as o,i as s,s as t}from"./p-e58503d5.js";import{l as n}from"./p-d208934e.js";import{b as i}from"./p-3e39c093.js";import{w as p}from"./p-e44bd0a6.js";import"./p-53bb6ab4.js";import"./p-b79fcce3.js";import"./p-8747982c.js";import"./p-efbca0ca.js";import"./p-e654504b.js";import"./p-0eb619a6.js";let a=class extends(p(n(i))){constructor(e){super(e),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{e((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unknown layer type";e&&(r+=" "+e),o(new t("layer:unknown-layer-type",r,{layerType:e}))}))})))}read(e,r){super.read({resourceInfo:e},r)}write(){return null}};r([o({readOnly:!0})],a.prototype,"resourceInfo",void 0),r([o({type:["show","hide"]})],a.prototype,"listMode",void 0),r([o({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=r([s("esri.layers.UnknownLayer")],a);const l=a;export default l;