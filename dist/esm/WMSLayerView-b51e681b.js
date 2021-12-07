import { e, d, i, s } from './messageBundle-f75b4090.js';
import { g } from './OperationalLayer-d609e521.js';
import { l } from './ExportWMSImageParameters-698a8905.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=a=>{let i$1=class extends a{initialize(){this.exportImageParameters=new l({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s$1=this.createFetchPopupFeaturesQuery(e);if(!s$1)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s$1;if(!(p&&a&&i))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});const u=t.fetchFeatureInfo(p,a,i,m,n);return Promise.resolve(u?[u]:[])}};return e([d()],i$1.prototype,"exportImageParameters",void 0),e([d({readOnly:!0})],i$1.prototype,"exportImageVersion",null),e([d()],i$1.prototype,"layer",void 0),e([d(g)],i$1.prototype,"timeExtent",void 0),i$1=e([i("esri.layers.mixins.WMSLayerView")],i$1),i$1};

export { a };
