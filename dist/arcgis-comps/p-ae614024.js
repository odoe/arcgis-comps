import{e,d as t,i as r,s,A as o,aE as a}from"./p-e58503d5.js";import{g as p}from"./p-1ab449fc.js";import{b as i}from"./p-5e833dfc.js";import{d as n}from"./p-e285e8f3.js";const u=u=>{let l=class extends u{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:r}=this;if(!e)throw new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:p}=r,u=n(r,t);if(!p||!o(u))throw new s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:u});const l=await u.getRequiredFields(),c=new i;c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=l,c.outSpatialReference=e.spatialReference;const h=this.view.resolution,m="2d"===this.view.type?new a(h,h,this.view.spatialReference):new a(.5*h,.5*h,this.view.spatialReference),{returnTopmostRaster:d,showNoDataRecords:w}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:d,pixelSize:m,showNoDataRecords:w,signal:o(t)?t.signal:null};return r.queryVisibleRasters(c,f).then((e=>e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}};return e([t()],l.prototype,"layer",void 0),e([t()],l.prototype,"suspended",void 0),e([t(p)],l.prototype,"timeExtent",void 0),e([t()],l.prototype,"view",void 0),l=e([r("esri.views.layers.ImageryLayerView")],l),l};export{u}