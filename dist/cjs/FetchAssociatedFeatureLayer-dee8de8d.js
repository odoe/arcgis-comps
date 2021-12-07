'use strict';

const request = require('./messageBundle-8be88d04.js');
const FeatureLayer = require('./FeatureLayer-68e51b64.js');
const Portal = require('./Portal-8d16604d.js');
const PortalItem = require('./PortalItem-8bcd02f8.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class l{constructor(t,r,e,a){this.parsedUrl=t,this.portalItem=r,this.apiKey=e,this.signal=a,this.rootDocument=null;const i=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);i&&(this.urlParts={root:i[1],layerId:parseInt(i[2],10)});}async fetch(){var t;if(!this.urlParts)return null;const r=null!=(t=this.portalItem)?t:await this.portalItemFromServiceItemId();if(request.t$1(r))return this.loadFromUrl();const a=await this.findAndLoadRelatedPortalItem(r);return request.t$1(a)?null:this.loadFeatureLayerFromPortalItem(a)}async fetchPortalItem(){var t;if(!this.urlParts)return null;const r=null!=(t=this.portalItem)?t:await this.portalItemFromServiceItemId();return request.t$1(r)?null:this.findAndLoadRelatedPortalItem(r)}async fetchRootDocument(){if(request.r(this.rootDocument))return this.rootDocument;if(request.t$1(this.urlParts))return this.rootDocument={},{};const t={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},i=`${this.urlParts.root}/SceneServer`;try{const e=await request.E(i,t);this.rootDocument=e.data;}catch{this.rootDocument={};}return this.rootDocument}async fetchServiceOwningPortalUrl(){var e;const a=null==(e=request.n$4)?void 0:e.findServerInfo(this.parsedUrl.path);if(null!=a&&a.owningSystemUrl)return a.owningSystemUrl;const s=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await request.E(s,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(n){request.b$1(n);}return null}async findAndLoadRelatedPortalItem(t){try{return (await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(r){return request.b$1(r),null}}async loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const r=await this.findMatchingAssociatedSublayerUrl(t.url);return new FeatureLayer.Ge({url:r,portalItem:t}).load({signal:this.signal})}async loadFromUrl(){const t=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new FeatureLayer.Ge({url:t}).load({signal:this.signal})}async findMatchingAssociatedSublayerUrl(t){const e=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),a={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},i=this.urlParts.layerId,s=this.fetchRootDocument(),n=request.E(e,a),[o,l]=await Promise.all([n,s]),c=l&&l.layers,h=o.data&&o.data.layers;if(!Array.isArray(h))throw new Error("expected layers array");if(Array.isArray(c))for(let r=0;r<Math.min(c.length,h.length);r++){if(c[r].id===i)return `${e}/${h[r].id}`}else if(i<h.length)return `${e}/${h[i].id}`;throw new Error("could not find matching associated sublayer")}async portalItemFromServiceItemId(){const t=(await this.fetchRootDocument()).serviceItemId;if(!t)return null;const r=new PortalItem['default']({id:t,apiKey:this.apiKey}),e=await this.fetchServiceOwningPortalUrl();request.r(e)&&(r.portal=new Portal.B({url:e}));try{return r.load({signal:this.signal})}catch(s){return request.b$1(s),null}}}

exports.l = l;
