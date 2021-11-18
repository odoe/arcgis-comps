import{t,r as s,O as r,b8 as e,aa as o}from"./p-9ae46e68.js";import i from"./p-7e9d2371.js";import{j as p}from"./p-566b0715.js";import a from"./p-725fd184.js";const n={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,tileMaxRecordCount:0}};class u{constructor(t,s,r,e){this.parsedUrl=t,this.portalItem=s,this.apiKey=r,this.signal=e,this.rootDocument=null;const o=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);o&&(this.urlParts={root:o[1],layerId:parseInt(o[2],10)})}async fetch(){var s;if(!this.urlParts)return null;const r=null!=(s=this.portalItem)?s:await this.portalItemFromServiceItemId();if(t(r))return this.loadFromUrl();const e=await this.findAndLoadRelatedPortalItem(r);return t(e)?null:this.loadFeatureLayerFromPortalItem(e)}async fetchPortalItem(){var s;if(!this.urlParts)return null;const r=null!=(s=this.portalItem)?s:await this.portalItemFromServiceItemId();return t(r)?null:this.findAndLoadRelatedPortalItem(r)}async fetchRootDocument(){if(s(this.rootDocument))return this.rootDocument;if(t(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},o=`${this.urlParts.root}/SceneServer`;try{const t=await r(o,e);this.rootDocument=t.data}catch{this.rootDocument={}}return this.rootDocument}async fetchServiceOwningPortalUrl(){var t;const s=null==(t=e)?void 0:t.findServerInfo(this.parsedUrl.path);if(null!=s&&s.owningSystemUrl)return s.owningSystemUrl;const i=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await r(i,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(t){o(t)}return null}async findAndLoadRelatedPortalItem(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(t){return o(t),null}}async loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const s=await this.findMatchingAssociatedSublayerUrl(t.url);return new i({url:s,portalItem:t}).load({signal:this.signal})}async loadFromUrl(){const t=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new i({url:t}).load({signal:this.signal})}async findMatchingAssociatedSublayerUrl(t){const s=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),e={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},o=this.urlParts.layerId,i=this.fetchRootDocument(),p=r(s,e),[a,n]=await Promise.all([p,i]),u=n&&n.layers,l=a.data&&a.data.layers;if(!Array.isArray(l))throw new Error("expected layers array");if(Array.isArray(u)){for(let t=0;t<Math.min(u.length,l.length);t++)if(u[t].id===o)return`${s}/${l[t].id}`}else if(o<l.length)return`${s}/${l[o].id}`;throw new Error("could not find matching associated sublayer")}async portalItemFromServiceItemId(){const t=(await this.fetchRootDocument()).serviceItemId;if(!t)return null;const r=new a({id:t,apiKey:this.apiKey}),e=await this.fetchServiceOwningPortalUrl();s(e)&&(r.portal=new p({url:e}));try{return r.load({signal:this.signal})}catch(t){return o(t),null}}}export{u as l,n as s}