'use strict';

const request = require('./messageBundle-312ceb47.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const unitUtils = require('./unitUtils-61d611e2.js');
require('./index-57f2cfbb.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=request.s$2.getLogger("esri.portal.PortalItemResource");let n=class extends request.p{constructor(t){super(t),this.portalItem=null;}normalizeCtorArgs(t){return t&&t.portalItem&&t.path?{...t,path:this.normalizePath(t.path,t.portalItem)}:t}set path(t){request.r(t)&&request.Q(t)?h.error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",t);}_castPath(t){return this.normalizePath(t,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(t="json",r){const o=this.url;if(request.t(o))throw new request.s$1("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal._request(o,{responseType:t,query:{token:this.portalItem.apiKey},signal:request.m$2(r,"signal")})}async update(t,r){return (await Promise.resolve().then(function () { return require('./resourceUtils-07f4c6c8.js'); })).addOrUpdateResource(this,"update",t,r)}hasPath(){return request.r(this.path)}normalizePath(t,r){return request.t(t)?t:(t=t.replace(/^\/+/,""),request.r(r)&&request.Q(t)&&(t=request.W(t,r.itemUrl)),t.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}};request.e([request.d()],n.prototype,"portalItem",void 0),request.e([request.d({type:String,value:null})],n.prototype,"path",null),request.e([request.c("path")],n.prototype,"_castPath",null),request.e([request.d({type:String,readOnly:!0})],n.prototype,"url",null),request.e([request.d({type:String,readOnly:!0})],n.prototype,"itemRelativeUrl",null),n=request.e([request.i("esri.portal.PortalItemResource")],n);const y=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends request.p{constructor(r){super(r),this.created=null,this.rating=null;}};request.e([request.d()],e.prototype,"created",void 0),request.e([request.d()],e.prototype,"rating",void 0),e=request.e([request.i("esri.portal.PortalRating")],e);const c=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var v;let w=v=class extends(JSONSupport.i(unitUtils.m)){constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null;}static from(e){return request.v$4(v,e)}destroy(){this.portal=null;}get displayName(){const e=this.type,t=this.typeKeywords||[];let i=e;return "Feature Service"===e||"Feature Collection"===e?i=t.indexOf("Table")>-1?"Table":t.indexOf("Route Layer")>-1?"Route Layer":t.indexOf("Markup")>-1?"Markup":"Feature Layer":"Image Service"===e?i=t.indexOf("Elevation 3D Layer")>-1?"Elevation Layer":t.indexOf("Tiled Imagery")>-1?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?i="Scene Layer":"Scene Package"===e?i="Scene Layer Package":"Stream Service"===e?i="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?i=t.indexOf("Web Tool")>-1?"Tool":"Geoprocessing Service":"Geocoding Service"===e?i="Locator":"Geoenrichment Service"===e?i="GeoEnrichment Service":"Microsoft Powerpoint"===e?i="Microsoft PowerPoint":"GeoJson"===e?i="GeoJSON":"Globe Service"===e?i="Globe Layer":"Vector Tile Service"===e?i="Tile Layer":"netCDF"===e?i="NetCDF":"Map Service"===e?i=-1===t.indexOf("Spatiotemporal")&&(t.indexOf("Hosted Service")>-1||t.indexOf("Tiled")>-1)&&-1===t.indexOf("Relational")?"Tile Layer":"Map Image Layer":e&&e.toLowerCase().indexOf("add in")>-1?i=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?i="Big Data File Share":"Compact Tile Package"===e?i="Tile Package (tpkx)":"OGCFeatureServer"===e&&(i="OGC Feature Layer"),i}readExtent(e){return e&&e.length?new unitUtils.M(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",i=this.typeKeywords||[],r="esri/images/portal/",o="16";let a,s=!1,n=!1,l=!1,p=!1,c=!1,d=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(s=i.indexOf("Hosted Service")>-1,"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(n=i.indexOf("Table")>-1,l=i.indexOf("Route Layer")>-1,p=i.indexOf("Markup")>-1,c=-1!==i.indexOf("Spatiotemporal"),d=-1!==i.indexOf("UtilityNetwork"),a=c&&n?"spatiotemporaltable":n?"table":l?"routelayer":p?"markup":c?"spatiotemporal":s?"featureshosted":d?"utilitynetwork":"features"):a="map service"===e||"wms"===e||"wmts"===e?s||i.indexOf("Tiled")>-1||"wmts"===e?"maptiles":"mapimages":"scene service"===e?i.indexOf("Line")>-1?"sceneweblayerline":i.indexOf("3DObject")>-1?"sceneweblayermultipatch":i.indexOf("Point")>-1?"sceneweblayerpoint":i.indexOf("IntegratedMesh")>-1?"sceneweblayermesh":i.indexOf("PointCloud")>-1?"sceneweblayerpointcloud":i.indexOf("Polygon")>-1?"sceneweblayerpolygon":i.indexOf("Building")>-1?"sceneweblayerbuilding":i.indexOf("Voxel")>-1?"sceneweblayervoxel":"sceneweblayer":"image service"===e?i.indexOf("Elevation 3D Layer")>-1?"elevationlayer":i.indexOf("Tiled Imagery")>-1?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e&&i.indexOf("Web Tool")>-1&&this.portal&&this.portal.isPortal?"tool":"layers"):a="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?i.indexOf("ViewingMode-Local")>-1?"webscenelocal":"websceneglobal":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&i.indexOf("ArcGIS Pro")>-1||"explorer map"===e&&i.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&i.indexOf("Explorer Mapping Application")>-1||i.indexOf("Document")>-1?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"knowledge graph"===e?"knowledgegraph":"native application"===e?"nativeapp":"native application installer"===e?"nativeappinstaller":"link chart"===e?"linkchart":"investigation"===e?"investigation":"ogcfeatureserver"===e?"features":"pro project"===e?"proproject":"insights workbook package"===e?"insightsworkbookpackage":"apache parquet"===e?"apacheparquet":"maps",a?request.a$2(r+a+o+".png"):null}get isLayer(){return ["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","WMTS","WMS"].indexOf(this.type)>-1}get itemUrl(){const e=this.get("portal.restUrl");return e?e+"/content/items/"+this.id:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userItemUrl(){const e=this.get("portal.restUrl");if(!e)return null;const t=this.owner||this.get("portal.user.username");if(!t)return null;return `${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`}load(e){this.portal||(this.portal=unitUtils.B$1.getDefault());const t=this.portal.load(e).then((()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?this.portal._request(this.itemUrl,{signal:request.r(e)?e.signal:null,query:{token:this.apiKey}}):{})).then((e=>{this.sourceJSON=e,this.read(e);}));return this.addResolvingPromise(t),Promise.resolve(this)}addRating(e){const t={method:"post",query:{}};return e instanceof c&&(e=e.rating),isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal._request(this.itemUrl+"/addRating",t).then((()=>new c({rating:e,created:new Date})))}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:request.l$1(this.applicationProxies),avgRating:this.avgRating,categories:request.l$1(this.categories),created:request.l$1(this.created),culture:this.culture,description:this.description,extent:request.l$1(this.extent),groupCategories:request.l$1(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:request.l$1(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:request.l$1(this.screenshots),size:this.size,snippet:this.snippet,tags:request.l$1(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:request.l$1(this.typeKeywords),url:this.url};return this.loaded&&(e.loadStatus="loaded"),new v({sourceJSON:this.sourceJSON}).set(e)}createPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}deleteRating(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then((()=>{}))}fetchData(e="json",t){return this.portal._request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}fetchRating(e){return this.portal._request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e}).then((e=>null!=e.rating?(e.created=new Date(e.created),new c(e)):null))}fetchRelatedItems(e,t){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},v)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return this.portal._request(this.itemUrl,{cacheBust:!0,query:{token:this.apiKey}}).then((e=>(this.sourceJSON=e,this.read(e),this)))}update(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e&&e.data,i={method:"post"};i.query=this.createPostQuery();for(const e in i.query)null===i.query[e]&&(i.query[e]="");return i.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?i.query.text=t:"object"==typeof t&&(i.query.text=JSON.stringify(t))),this.portal._request(`${this.userItemUrl}/update`,i).then((()=>this.reload()))})):Promise.reject(new request.s$1("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}updateThumbnail(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e.thumbnail,i=e.filename,r={method:"post"};if("string"==typeof t)request.G(t)?r.query={data:t}:r.query={url:request.T$2(t)},request.r(i)&&(r.query.filename=i);else {const e=new FormData;request.r(i)?e.append("file",t,i):e.append("file",t),r.body=e;}return this.portal._request(`${this.userItemUrl}/updateThumbnail`,r).then((()=>this.reload()))})):Promise.reject(new request.s$1("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return (await Promise.resolve().then(function () { return require('./resourceUtils-07f4c6c8.js'); })).fetchResources(this,e,t)}async addResource(e,t,i){const r=await Promise.resolve().then(function () { return require('./resourceUtils-07f4c6c8.js'); });return e.portalItem=this,r.addOrUpdateResource(e,"add",t,i)}async removeResource(e,t){const r=await Promise.resolve().then(function () { return require('./resourceUtils-07f4c6c8.js'); });if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new request.s$1("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return r.removeResource(this,e,t)}async removeAllResources(e){return (await Promise.resolve().then(function () { return require('./resourceUtils-07f4c6c8.js'); })).removeAllResources(this,e)}resourceFromPath(e){return new y({portalItem:this,path:e})}toJSON(){const e=this.extent,t={created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,tags:this.tags,thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:this.typeKeywords,url:this.url};return request.y$2(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new v({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};request.e([request.d({type:["private","shared","org","public"]})],w.prototype,"access",void 0),request.e([request.d()],w.prototype,"accessInformation",void 0),request.e([request.d({type:String})],w.prototype,"apiKey",void 0),request.e([request.d({json:{read:{source:"appProxies"}}})],w.prototype,"applicationProxies",void 0),request.e([request.d()],w.prototype,"avgRating",void 0),request.e([request.d()],w.prototype,"categories",void 0),request.e([request.d({type:Date})],w.prototype,"created",void 0),request.e([request.d()],w.prototype,"culture",void 0),request.e([request.d()],w.prototype,"description",void 0),request.e([request.d({readOnly:!0})],w.prototype,"displayName",null),request.e([request.d({type:unitUtils.M})],w.prototype,"extent",void 0),request.e([unitUtils.o("extent")],w.prototype,"readExtent",null),request.e([request.d()],w.prototype,"groupCategories",void 0),request.e([request.d({readOnly:!0})],w.prototype,"iconUrl",null),request.e([request.d()],w.prototype,"id",void 0),request.e([request.d({readOnly:!0})],w.prototype,"isLayer",null),request.e([request.d()],w.prototype,"itemControl",void 0),request.e([request.d({readOnly:!0})],w.prototype,"itemUrl",null),request.e([request.d()],w.prototype,"licenseInfo",void 0),request.e([request.d({type:Date})],w.prototype,"modified",void 0),request.e([request.d()],w.prototype,"name",void 0),request.e([request.d()],w.prototype,"numComments",void 0),request.e([request.d()],w.prototype,"numRatings",void 0),request.e([request.d()],w.prototype,"numViews",void 0),request.e([request.d()],w.prototype,"owner",void 0),request.e([request.d()],w.prototype,"ownerFolder",void 0),request.e([request.d({type:unitUtils.B$1})],w.prototype,"portal",void 0),request.e([request.d()],w.prototype,"screenshots",void 0),request.e([request.d()],w.prototype,"size",void 0),request.e([request.d()],w.prototype,"snippet",void 0),request.e([request.d()],w.prototype,"sourceJSON",void 0),request.e([request.d()],w.prototype,"tags",void 0),request.e([request.d()],w.prototype,"thumbnail",void 0),request.e([request.d({readOnly:!0})],w.prototype,"thumbnailUrl",null),request.e([request.d()],w.prototype,"title",void 0),request.e([request.d()],w.prototype,"type",void 0),request.e([request.d()],w.prototype,"typeKeywords",void 0),request.e([request.d()],w.prototype,"url",void 0),request.e([request.d({readOnly:!0})],w.prototype,"userItemUrl",null),w=v=request.e([request.i("esri.portal.PortalItem")],w);const b=w;

exports.default = b;