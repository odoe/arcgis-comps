import{bm as e,p as s,e as r,d as l,i as a}from"./p-7b6f6c18.js";const t={visible:"visibleSublayers"};let i=class extends(e(s)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(t[e.propertyName])))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:s}=this,r=null==e?void 0:e.sublayers,l=[],a=e=>{const{minScale:r,maxScale:t,sublayers:i,visible:n}=e;n&&(0===s||(0===r||s<=r)&&(0===t||s>=t))&&(i?i.forEach(a):l.unshift(e))};return null==r||r.forEach(a),l}toJSON(){const{layer:e,layers:s}=this,{imageFormat:r,imageTransparency:l,version:a}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:l,version:a,layers:s}}};r([l()],i.prototype,"layer",null),r([l({readOnly:!0})],i.prototype,"layers",null),r([l({type:Number})],i.prototype,"scale",void 0),r([l({readOnly:!0})],i.prototype,"version",null),r([l({readOnly:!0})],i.prototype,"visibleSublayers",null),i=r([a("esri.layers.support.ExportWMSImageParameters")],i);export{i as l}