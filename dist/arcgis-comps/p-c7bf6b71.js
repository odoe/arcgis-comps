import{p as e,e as s,d as r,i as l}from"./p-e58503d5.js";import{a}from"./p-7731c620.js";const t={visible:"visibleSublayers"};let i=class extends(a(e)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(t[e.propertyName])))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:s}=this,r=null==e?void 0:e.sublayers,l=[],a=e=>{const{minScale:r,maxScale:t,sublayers:i,visible:n}=e;n&&(0===s||(0===r||s<=r)&&(0===t||s>=t))&&(i?i.forEach(a):l.unshift(e))};return null==r||r.forEach(a),l}toJSON(){const{layer:e,layers:s}=this,{imageFormat:r,imageTransparency:l,version:a}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:l,version:a,layers:s}}};s([r()],i.prototype,"layer",null),s([r({readOnly:!0})],i.prototype,"layers",null),s([r({type:Number})],i.prototype,"scale",void 0),s([r({readOnly:!0})],i.prototype,"version",null),s([r({readOnly:!0})],i.prototype,"visibleSublayers",null),i=s([l("esri.layers.support.ExportWMSImageParameters")],i);export{i as l}