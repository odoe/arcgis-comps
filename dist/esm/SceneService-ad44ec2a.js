import { r, E as E$1, b as s, iX as o, b4 as T$1, h, fF as a$1, T as s$1, e, d, iD as j, k, bH as o$1, o as M, cV as v, cW as f, bK as r$1, i, b5 as z, i_ as h$1, bG as d$1, i$ as w$1, j0 as O$1, j1 as C, bF as U$1, b$ as b, W as B } from './MapView-ac75aae8.js';
import { r as r$2 } from './originUtils-7b0bbc60.js';
import { getSiblingOfSameTypeI as w } from './resourceUtils-ed9796ff.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n$1(n,t,s$1,a,i,d){let l=null;if(r(s$1)){const o=`${n}/nodepages/`,t=o+Math.floor(s$1.rootIndex/s$1.nodesPerPage);try{return {type:"page",rootPage:(await E$1(t,{query:{f:"json",token:a},responseType:"json",signal:d})).data,rootIndex:s$1.rootIndex,pageSize:s$1.nodesPerPage,lodMetric:s$1.lodSelectionMetricType,urlPrefix:o}}catch(f){r(i)&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",t,f),l=f;}}if(!t)return null;const p=`${n}/nodes/`,c=p+(t&&t.split("/").pop());try{return {type:"node",rootNode:(await E$1(c,{query:{f:"json",token:a},responseType:"json",signal:d})).data,urlPrefix:p}}catch(f){throw new s("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:f,url:c})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function a(r,a,u){if(!a||!a.resources)return;const h$1=a.portalItem===r.portalItem?new Set(r.paths):new Set;r.paths.length=0,r.portalItem=a.portalItem;const i=new Set(a.resources.toKeep.map((r=>r.resource.path))),f=new Set,m=[];i.forEach((e=>{h$1.delete(e),r.paths.push(e);}));for(const e of a.resources.toUpdate)if(h$1.delete(e.resource.path),i.has(e.resource.path)||f.has(e.resource.path)){const{resource:o$1,content:t,finish:a,error:p}=e,h=w(o$1,o());r.paths.push(h.path),m.push(n({resource:h,content:t,finish:a,error:p},u));}else r.paths.push(e.resource.path),m.push(p(e,u)),f.add(e.resource.path);for(const e of a.resources.toAdd)m.push(n(e,u)),r.paths.push(e.resource.path);if(h$1.forEach((r=>{const e=a.portalItem.resourceFromPath(r);m.push(e.portalItem.removeResource(e).catch((()=>{})));})),0===m.length)return;const l=await T$1(m);h(u);const d=l.filter((r=>"error"in r)).map((r=>r.error));if(d.length>0)throw new s("save:resources","Failed to save one or more resources",{errors:d})}async function n(e,o){const t=await a$1(e.resource.portalItem.addResource(e.resource,e.content,o));if(!0!==t.ok)throw e.error&&e.error(t.error),t.error;e.finish&&e.finish(e.resource);}async function p(e,o){const t=await a$1(e.resource.update(e.content,o));if(!0!==t.ok)throw e.error(t.error),t.error;e.finish(e.resource);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const R=s$1.getLogger("esri.layers.mixins.SceneService"),N=i$1=>{let N=class extends i$1{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=z((async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}}));}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return k.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,i=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=i?new k(i):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const i=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return M.fromJSON(i,r)}const i=t.store,o=this._readSpatialReference(t);return null==o||null==i||null==i.extent||!Array.isArray(i.extent)||i.extent.some((e=>e<U))?null:new M({xmin:i.extent[0],ymin:i.extent[1],xmax:i.extent[2],ymax:i.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,i=null!=r.version?r.version.toString():"";return this.parseVersionString(i)}readTitlePortalItem(e){return "item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r$1=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return h$1(this.url,t.name);let i=t.name;if(!i&&this.url){const e=d$1(this.url);r(e)&&(i=e.title);}return "item-title-and-service-name"===this.sublayerTitleMode&&r$1&&(i=r$1+" - "+i),w$1(i)}set url(e){const t=O$1({layer:this,url:e,nonStandardUrlAllowed:!1,logger:R});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId);}writeUrl(e,t,r,i){C(this,e,"layers",t,i);}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=U$1(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=n$1(this.parsedUrl.path,this.rootNode,e,this.apiKey,R,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo);}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,i;const o=e.rootIndex%e.pageSize,s$1=null==(t=e.rootPage)||null==(i=t.nodes)?void 0:i[o];if(null==s$1||null==s$1.obb||null==s$1.obb.center||null==s$1.obb.halfSize)throw new s("sceneservice:invalid-node-page","Invalid node page.");if(s$1.obb.center[0]<U||null==this.fullExtent||this.fullExtent.hasZ)return;const a=s$1.obb.halfSize,n=s$1.obb.center[2],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);this.fullExtent.zmin=n-l,this.fullExtent.zmax=n+l;}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<U)return;const r=t[2],i=t[3];this.fullExtent.zmin=r-i,this.fullExtent.zmax=r+i;}}async _fetchService(e){if(null==this.url)throw new s("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t);}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await E$1(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await E$1(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});r.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(i=!0),i)return this.read(r.data,{origin:"service",url:this.parsedUrl}),this._fetchVoxelServiceLayer();const o=r.data;this.read(o,{origin:"service",url:this.parsedUrl}),this.validateLayer(o);}async _fetchVoxelServiceLayer(e){const r=(await E$1(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r);}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave();}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const i=t.getTypeKeywords();for(const o of i)e.typeKeywords.push(o);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),1===r&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))));}async _saveAs(e,t){const i={...E,...t};let o=b.from(e);o||(R.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new s("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const s$1=o.portal||B.getDefault();await this._ensureLoadBeforeSave(),o.type=O,o.portal=s$1;const a$1={origin:"portal-item",url:null,messages:[],portal:s$1,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},a$1)]};return await Promise.all(a$1.resources.pendingOperations),await this._validateAgainstJSONSchema(n,a$1,i),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,i,1),await s$1._signIn(),await s$1.user.addItem({item:o,folder:i&&i.folder,data:n}),await a(this.resourceReferences,a$1,null),this.portalItem=o,r$2(a$1),a$1.portalItem=o,o}async _save(e){const t={...E,...e};this.portalItem||(R.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new s("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==O&&(R.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+O),await Promise.reject(new s("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${O}"`))),await this._ensureLoadBeforeSave();const i={origin:"portal-item",url:this.portalItem.itemUrl&&U$1(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||B.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations),await this._validateAgainstJSONSchema(o,i,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await a(this.resourceReferences,i,null),r$2(i),this.portalItem}async _validateAgainstJSONSchema(e,t,i){let o=t.messages.filter((e=>"error"===e.type)).map((e=>new s(e.name,e.message,e.details)));if(i&&i.validationOptions.ignoreUnsupported&&(o=o.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),i.validationOptions.enabled||T){const t=(await import('./schemaValidator-326f13ae.js')).validate(e,i.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(R.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===i.validationOptions.failPolicy){const e=t.map((e=>new s("sceneservice:schema-validation",e))).concat(o);throw new s("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(o.length>0)throw new s("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}};return e([d(j)],N.prototype,"id",void 0),e([d({type:k})],N.prototype,"spatialReference",void 0),e([o$1("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],N.prototype,"readSpatialReference",null),e([d({type:M})],N.prototype,"fullExtent",void 0),e([o$1("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],N.prototype,"readFullExtent",null),e([d({readOnly:!0,type:v})],N.prototype,"heightModelInfo",void 0),e([d({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],N.prototype,"minScale",void 0),e([d({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],N.prototype,"maxScale",void 0),e([d({readOnly:!0})],N.prototype,"version",void 0),e([o$1("version",["store.version"])],N.prototype,"readVersion",null),e([d({type:String,json:{read:{source:"copyrightText"}}})],N.prototype,"copyright",void 0),e([d({type:String,json:{read:!1}})],N.prototype,"sublayerTitleMode",void 0),e([d({type:String})],N.prototype,"title",void 0),e([o$1("portal-item","title")],N.prototype,"readTitlePortalItem",null),e([o$1("service","title",["name"])],N.prototype,"readTitleService",null),e([d({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],N.prototype,"layerId",void 0),e([d(f)],N.prototype,"url",null),e([r$1("url")],N.prototype,"writeUrl",null),e([d()],N.prototype,"parsedUrl",null),e([d({readOnly:!0})],N.prototype,"store",void 0),e([d({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],N.prototype,"rootNode",void 0),N=e([i("esri.layers.mixins.SceneService")],N),N},U=-1e38,T=!1,O="Scene Service",E={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};

export { N, n$1 as n };
