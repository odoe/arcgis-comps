import { f as s, p, r, a8 as Q, l as t, C as s$1, aW as m, a7 as W, e as e$1, a as d, g as c$1, i, bD as v$1, aV as a, M as l, ab as G, a6 as T, bE as y$1 } from './jsxFactory-c96bb45c.js';
import { i as i$1 } from './JSONSupport-5a9f556a.js';
import { am as m$1, M, a4 as B, v as o } from './Graphic-6c72131a.js';
import './index-921bd636.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=s.getLogger("esri.portal.PortalItemResource");let n=class extends p{constructor(t){super(t),this.portalItem=null;}normalizeCtorArgs(t){return t&&t.portalItem&&t.path?{...t,path:this.normalizePath(t.path,t.portalItem)}:t}set path(t){r(t)&&Q(t)?h.error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",t);}_castPath(t){return this.normalizePath(t,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(t$1="json",r){const o=this.url;if(t(o))throw new s$1("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal._request(o,{responseType:t$1,query:{token:this.portalItem.apiKey},signal:m(r,"signal")})}async update(t,r){return (await import('./resourceUtils-f7281394.js')).addOrUpdateResource(this,"update",t,r)}hasPath(){return r(this.path)}normalizePath(t$1,r$1){return t(t$1)?t$1:(t$1=t$1.replace(/^\/+/,""),r(r$1)&&Q(t$1)&&(t$1=W(t$1,r$1.itemUrl)),t$1.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}};e$1([d()],n.prototype,"portalItem",void 0),e$1([d({type:String,value:null})],n.prototype,"path",null),e$1([c$1("path")],n.prototype,"_castPath",null),e$1([d({type:String,readOnly:!0})],n.prototype,"url",null),e$1([d({type:String,readOnly:!0})],n.prototype,"itemRelativeUrl",null),n=e$1([i("esri.portal.PortalItemResource")],n);const y=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends p{constructor(r){super(r),this.created=null,this.rating=null;}};e$1([d()],e.prototype,"created",void 0),e$1([d()],e.prototype,"rating",void 0),e=e$1([i("esri.portal.PortalRating")],e);const c=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var v;let w=v=class extends(i$1(m$1)){constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null;}static from(e){return v$1(v,e)}destroy(){this.portal=null;}get displayName(){const e=this.type,t=this.typeKeywords||[];let i=e;return "Feature Service"===e||"Feature Collection"===e?i=t.indexOf("Table")>-1?"Table":t.indexOf("Route Layer")>-1?"Route Layer":t.indexOf("Markup")>-1?"Markup":"Feature Layer":"Image Service"===e?i=t.indexOf("Elevation 3D Layer")>-1?"Elevation Layer":t.indexOf("Tiled Imagery")>-1?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?i="Scene Layer":"Scene Package"===e?i="Scene Layer Package":"Stream Service"===e?i="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?i=t.indexOf("Web Tool")>-1?"Tool":"Geoprocessing Service":"Geocoding Service"===e?i="Locator":"Geoenrichment Service"===e?i="GeoEnrichment Service":"Microsoft Powerpoint"===e?i="Microsoft PowerPoint":"GeoJson"===e?i="GeoJSON":"Globe Service"===e?i="Globe Layer":"Vector Tile Service"===e?i="Tile Layer":"netCDF"===e?i="NetCDF":"Map Service"===e?i=-1===t.indexOf("Spatiotemporal")&&(t.indexOf("Hosted Service")>-1||t.indexOf("Tiled")>-1)&&-1===t.indexOf("Relational")?"Tile Layer":"Map Image Layer":e&&e.toLowerCase().indexOf("add in")>-1?i=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?i="Big Data File Share":"Compact Tile Package"===e?i="Tile Package (tpkx)":"OGCFeatureServer"===e&&(i="OGC Feature Layer"),i}readExtent(e){return e&&e.length?new M(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",i=this.typeKeywords||[],r="esri/images/portal/",o="16";let a$1,s=!1,n=!1,l=!1,p=!1,c=!1,d=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(s=i.indexOf("Hosted Service")>-1,"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(n=i.indexOf("Table")>-1,l=i.indexOf("Route Layer")>-1,p=i.indexOf("Markup")>-1,c=-1!==i.indexOf("Spatiotemporal"),d=-1!==i.indexOf("UtilityNetwork"),a$1=c&&n?"spatiotemporaltable":n?"table":l?"routelayer":p?"markup":c?"spatiotemporal":s?"featureshosted":d?"utilitynetwork":"features"):a$1="map service"===e||"wms"===e||"wmts"===e?s||i.indexOf("Tiled")>-1||"wmts"===e?"maptiles":"mapimages":"scene service"===e?i.indexOf("Line")>-1?"sceneweblayerline":i.indexOf("3DObject")>-1?"sceneweblayermultipatch":i.indexOf("Point")>-1?"sceneweblayerpoint":i.indexOf("IntegratedMesh")>-1?"sceneweblayermesh":i.indexOf("PointCloud")>-1?"sceneweblayerpointcloud":i.indexOf("Polygon")>-1?"sceneweblayerpolygon":i.indexOf("Building")>-1?"sceneweblayerbuilding":i.indexOf("Voxel")>-1?"sceneweblayervoxel":"sceneweblayer":"image service"===e?i.indexOf("Elevation 3D Layer")>-1?"elevationlayer":i.indexOf("Tiled Imagery")>-1?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e&&i.indexOf("Web Tool")>-1&&this.portal&&this.portal.isPortal?"tool":"layers"):a$1="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?i.indexOf("ViewingMode-Local")>-1?"webscenelocal":"websceneglobal":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&i.indexOf("ArcGIS Pro")>-1||"explorer map"===e&&i.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&i.indexOf("Explorer Mapping Application")>-1||i.indexOf("Document")>-1?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"knowledge graph"===e?"knowledgegraph":"native application"===e?"nativeapp":"native application installer"===e?"nativeappinstaller":"link chart"===e?"linkchart":"investigation"===e?"investigation":"ogcfeatureserver"===e?"features":"pro project"===e?"proproject":"insights workbook package"===e?"insightsworkbookpackage":"apache parquet"===e?"apacheparquet":"maps",a$1?a(r+a$1+o+".png"):null}get isLayer(){return ["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","WMTS","WMS"].indexOf(this.type)>-1}get itemUrl(){const e=this.get("portal.restUrl");return e?e+"/content/items/"+this.id:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userItemUrl(){const e=this.get("portal.restUrl");if(!e)return null;const t=this.owner||this.get("portal.user.username");if(!t)return null;return `${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`}load(e){this.portal||(this.portal=B.getDefault());const t=this.portal.load(e).then((()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?this.portal._request(this.itemUrl,{signal:r(e)?e.signal:null,query:{token:this.apiKey}}):{})).then((e=>{this.sourceJSON=e,this.read(e);}));return this.addResolvingPromise(t),Promise.resolve(this)}addRating(e){const t={method:"post",query:{}};return e instanceof c&&(e=e.rating),isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal._request(this.itemUrl+"/addRating",t).then((()=>new c({rating:e,created:new Date})))}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:l(this.applicationProxies),avgRating:this.avgRating,categories:l(this.categories),created:l(this.created),culture:this.culture,description:this.description,extent:l(this.extent),groupCategories:l(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:l(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:l(this.screenshots),size:this.size,snippet:this.snippet,tags:l(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:l(this.typeKeywords),url:this.url};return this.loaded&&(e.loadStatus="loaded"),new v({sourceJSON:this.sourceJSON}).set(e)}createPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}deleteRating(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then((()=>{}))}fetchData(e="json",t){return this.portal._request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}fetchRating(e){return this.portal._request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e}).then((e=>null!=e.rating?(e.created=new Date(e.created),new c(e)):null))}fetchRelatedItems(e,t){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},v)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return this.portal._request(this.itemUrl,{cacheBust:!0,query:{token:this.apiKey}}).then((e=>(this.sourceJSON=e,this.read(e),this)))}update(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e&&e.data,i={method:"post"};i.query=this.createPostQuery();for(const e in i.query)null===i.query[e]&&(i.query[e]="");return i.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?i.query.text=t:"object"==typeof t&&(i.query.text=JSON.stringify(t))),this.portal._request(`${this.userItemUrl}/update`,i).then((()=>this.reload()))})):Promise.reject(new s$1("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}updateThumbnail(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e.thumbnail,i=e.filename,r$1={method:"post"};if("string"==typeof t)G(t)?r$1.query={data:t}:r$1.query={url:T(t)},r(i)&&(r$1.query.filename=i);else {const e=new FormData;r(i)?e.append("file",t,i):e.append("file",t),r$1.body=e;}return this.portal._request(`${this.userItemUrl}/updateThumbnail`,r$1).then((()=>this.reload()))})):Promise.reject(new s$1("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return (await import('./resourceUtils-f7281394.js')).fetchResources(this,e,t)}async addResource(e,t,i){const r=await import('./resourceUtils-f7281394.js');return e.portalItem=this,r.addOrUpdateResource(e,"add",t,i)}async removeResource(e,t){const r=await import('./resourceUtils-f7281394.js');if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new s$1("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return r.removeResource(this,e,t)}async removeAllResources(e){return (await import('./resourceUtils-f7281394.js')).removeAllResources(this,e)}resourceFromPath(e){return new y({portalItem:this,path:e})}toJSON(){const e=this.extent,t={created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,tags:this.tags,thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:this.typeKeywords,url:this.url};return y$1(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new v({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};e$1([d({type:["private","shared","org","public"]})],w.prototype,"access",void 0),e$1([d()],w.prototype,"accessInformation",void 0),e$1([d({type:String})],w.prototype,"apiKey",void 0),e$1([d({json:{read:{source:"appProxies"}}})],w.prototype,"applicationProxies",void 0),e$1([d()],w.prototype,"avgRating",void 0),e$1([d()],w.prototype,"categories",void 0),e$1([d({type:Date})],w.prototype,"created",void 0),e$1([d()],w.prototype,"culture",void 0),e$1([d()],w.prototype,"description",void 0),e$1([d({readOnly:!0})],w.prototype,"displayName",null),e$1([d({type:M})],w.prototype,"extent",void 0),e$1([o("extent")],w.prototype,"readExtent",null),e$1([d()],w.prototype,"groupCategories",void 0),e$1([d({readOnly:!0})],w.prototype,"iconUrl",null),e$1([d()],w.prototype,"id",void 0),e$1([d({readOnly:!0})],w.prototype,"isLayer",null),e$1([d()],w.prototype,"itemControl",void 0),e$1([d({readOnly:!0})],w.prototype,"itemUrl",null),e$1([d()],w.prototype,"licenseInfo",void 0),e$1([d({type:Date})],w.prototype,"modified",void 0),e$1([d()],w.prototype,"name",void 0),e$1([d()],w.prototype,"numComments",void 0),e$1([d()],w.prototype,"numRatings",void 0),e$1([d()],w.prototype,"numViews",void 0),e$1([d()],w.prototype,"owner",void 0),e$1([d()],w.prototype,"ownerFolder",void 0),e$1([d({type:B})],w.prototype,"portal",void 0),e$1([d()],w.prototype,"screenshots",void 0),e$1([d()],w.prototype,"size",void 0),e$1([d()],w.prototype,"snippet",void 0),e$1([d()],w.prototype,"sourceJSON",void 0),e$1([d()],w.prototype,"tags",void 0),e$1([d()],w.prototype,"thumbnail",void 0),e$1([d({readOnly:!0})],w.prototype,"thumbnailUrl",null),e$1([d()],w.prototype,"title",void 0),e$1([d()],w.prototype,"type",void 0),e$1([d()],w.prototype,"typeKeywords",void 0),e$1([d()],w.prototype,"url",void 0),e$1([d({readOnly:!0})],w.prototype,"userItemUrl",null),w=v=e$1([i("esri.portal.PortalItem")],w);const b=w;

export default b;
