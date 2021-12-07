'use strict';

const request = require('./messageBundle-8be88d04.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const ExportWMSImageParameters = require('./ExportWMSImageParameters-29772b20.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=a=>{let i=class extends a{initialize(){this.exportImageParameters=new ExportWMSImageParameters.l({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new request.s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new request.s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s=this.createFetchPopupFeaturesQuery(e);if(!s)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s;if(!(p&&a&&i))throw new request.s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});const u=t.fetchFeatureInfo(p,a,i,m,n);return Promise.resolve(u?[u]:[])}};return request.e([request.d()],i.prototype,"exportImageParameters",void 0),request.e([request.d({readOnly:!0})],i.prototype,"exportImageVersion",null),request.e([request.d()],i.prototype,"layer",void 0),request.e([request.d(OperationalLayer.g)],i.prototype,"timeExtent",void 0),i=request.e([request.i("esri.layers.mixins.WMSLayerView")],i),i};

exports.a = a;
