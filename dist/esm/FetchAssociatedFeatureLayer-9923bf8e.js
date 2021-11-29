import { t, r, E, cd as n, cT as b, aR as Ge, b$ as b$1, W as B } from './MapView-ac75aae8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,tileMaxRecordCount:0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class l{constructor(t,r,e,a){this.parsedUrl=t,this.portalItem=r,this.apiKey=e,this.signal=a,this.rootDocument=null;const i=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);i&&(this.urlParts={root:i[1],layerId:parseInt(i[2],10)});}async fetch(){var t$1;if(!this.urlParts)return null;const r=null!=(t$1=this.portalItem)?t$1:await this.portalItemFromServiceItemId();if(t(r))return this.loadFromUrl();const a=await this.findAndLoadRelatedPortalItem(r);return t(a)?null:this.loadFeatureLayerFromPortalItem(a)}async fetchPortalItem(){var t$1;if(!this.urlParts)return null;const r=null!=(t$1=this.portalItem)?t$1:await this.portalItemFromServiceItemId();return t(r)?null:this.findAndLoadRelatedPortalItem(r)}async fetchRootDocument(){if(r(this.rootDocument))return this.rootDocument;if(t(this.urlParts))return this.rootDocument={},{};const t$1={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},i=`${this.urlParts.root}/SceneServer`;try{const e=await E(i,t$1);this.rootDocument=e.data;}catch{this.rootDocument={};}return this.rootDocument}async fetchServiceOwningPortalUrl(){var e;const a=null==(e=n)?void 0:e.findServerInfo(this.parsedUrl.path);if(null!=a&&a.owningSystemUrl)return a.owningSystemUrl;const s=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await E(s,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(n){b(n);}return null}async findAndLoadRelatedPortalItem(t){try{return (await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(r){return b(r),null}}async loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const r=await this.findMatchingAssociatedSublayerUrl(t.url);return new Ge({url:r,portalItem:t}).load({signal:this.signal})}async loadFromUrl(){const t=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new Ge({url:t}).load({signal:this.signal})}async findMatchingAssociatedSublayerUrl(t){const e=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),a={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},i=this.urlParts.layerId,s=this.fetchRootDocument(),n=E(e,a),[o,l]=await Promise.all([n,s]),c=l&&l.layers,h=o.data&&o.data.layers;if(!Array.isArray(h))throw new Error("expected layers array");if(Array.isArray(c))for(let r=0;r<Math.min(c.length,h.length);r++){if(c[r].id===i)return `${e}/${h[r].id}`}else if(i<h.length)return `${e}/${h[i].id}`;throw new Error("could not find matching associated sublayer")}async portalItemFromServiceItemId(){const t=(await this.fetchRootDocument()).serviceItemId;if(!t)return null;const r$1=new b$1({id:t,apiKey:this.apiKey}),e=await this.fetchServiceOwningPortalUrl();r(e)&&(r$1.portal=new B({url:e}));try{return r$1.load({signal:this.signal})}catch(s){return b(s),null}}}

export { l, s };
