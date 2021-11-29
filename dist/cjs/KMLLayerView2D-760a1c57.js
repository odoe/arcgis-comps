'use strict';

const request = require('./MapView-1726f571.js');
const kmlUtils = require('./kmlUtils-f6781dd2.js');
const Bitmap = require('./Bitmap-30fbdf88.js');
const BitmapContainer = require('./BitmapContainer-54c3cd83.js');
const LayerView = require('./LayerView-ab44860f.js');
const GraphicContainer = require('./GraphicContainer-91220c11.js');
const BaseGraphicContainer = require('./BaseGraphicContainer-4a839d2a.js');
require('./index-fde8502c.js');
require('./Container-16ae77e1.js');
require('./EffectList-c8b0929b.js');
require('./Texture-81e2ece6.js');
require('./WGLContainer-5f61b6fe.js');
require('./definitions-b4888cc6.js');
require('./VertexArrayObject-79d493bc.js');
require('./Utils-e5a61fef.js');
require('./ShaderCompiler-c2546df1.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-7ad63f3d.js');
require('./pixelUtils-d4b82358.js');
require('./earcut-d5562923.js');
require('./CIMSymbolHelper-11b13154.js');
require('./BidiEngine-e033e7c0.js');
require('./GeometryUtils-062a82b8.js');
require('./projectionSupport-34535cf1.js');
require('./json-2c41fbe0.js');
require('./FeatureContainer-814e6d5b.js');
require('./TileContainer-16404663.js');
require('./visualVariablesUtils-cec97964.js');
require('./visualVariablesUtils-567175e3.js');
require('./Matcher-fbcfa0ff.js');
require('./ComputedAttributeStorage-a776fa0f.js');
require('./FeatureSetReader-69300d2f.js');
require('./centroid-07923388.js');
require('./tileUtils-4f5520e1.js');
require('./TileClipper-7623926c.js');
require('./cimAnalyzer-f3efd46b.js');
require('./quantizationUtils-67099620.js');
require('./cimSymbolUtils-a5d3a92a.js');
require('./devEnvironmentUtils-a59d6ef8.js');
require('./schemaUtils-9bd21a56.js');
require('./MD5-e5fc0526.js');
require('./vec3f32-7c156128.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class C{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let j=class extends(LayerView.l(LayerView.u)){constructor(){super(...arguments),this._handles=new request.u$2,this._bitmapIndex=new Map,this._mapImageContainer=new BitmapContainer.t,this._kmlVisualData=new C,this.allVisiblePoints=new request.c$20,this.allVisiblePolylines=new request.c$20,this.allVisiblePolygons=new request.c$20,this.allVisibleMapImages=new request.S;}hitTest(e,i){if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return Promise.resolve(null);const t=[this._pointsView.hitTest(e,i),this._polylinesView.hitTest(e,i),this._polygonsView.hitTest(e,i)];return Promise.all(t).then((e=>e.filter((e=>(e&&(e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._handles.add([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new BaseGraphicContainer.rt({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer.i(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new BaseGraphicContainer.rt({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer.i(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new BaseGraphicContainer.rt({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer.i(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();})),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating");}));}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&request.E(e.href,{responseType:"image"}).then((({data:i})=>{let t=request.M$1.fromJSON(e.extent);request.g$7(t,this.view.spatialReference)&&(t=request.M$5(t,this.view.spatialReference));const s=new Bitmap.g(i,"standard");s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/i.naturalWidth,s.rotation=e.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(e,s);}));}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:a,httpQuery:h}=e;if(request.r(s)){if(request.t(t))throw new Error("Loading this network link requires a view state.");let p;if(await request.J(),request.r(a)&&1!==a){const e=new request.M$1(t.extent);e.expand(a),p=e;}else p=t.extent;p=request.O$5(p,request.k.WGS84);const w=request.O$5(p,request.k.WebMercator),g=p.xmin,u=p.xmax,_=p.ymin,V=p.ymax,f=t.size[0]*t.pixelRatio,v=t.size[1]*t.pixelRatio,S=Math.max(w.width,w.height),I={"[bboxWest]":g.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":V.toString(),"[lookatLon]":p.center.x.toString(),"[lookatLat]":p.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":p.center.x.toString(),"[lookatTerrainLat]":p.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":p.center.x.toString(),"[cameraLat]":p.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":f.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":request.a$6,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},P=e=>{for(const i in e)for(const t in I)e[i]=e[i].replace(t,I[t]);},x=request.b$13(s);P(x);let k={};request.r(h)&&(k=request.b$13(h),P(k));const C=request.e$8(e.href);C.query={...C.query,...x,...k};return `${C.path}?${request.C$2(x)}`}return e.href}async _fetchService(){const e=new C;await this._loadVisualData(this.layer.url,e),this._kmlVisualData=e,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i){return this._fetchParsedKML(e).then((async e=>{for(const t of e.sublayers){i.allSublayers.set(t.id,t);const e=t.points?await kmlUtils.b(t.points):[],s=t.polylines?await kmlUtils.b(t.polylines):[],a=t.polygons?await kmlUtils.b(t.polygons):[],o=t.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:t.id})))),i.allPolylines.push(...s.map((e=>({item:e,sublayerId:t.id})))),i.allPolygons.push(...a.map((e=>({item:e,sublayerId:t.id})))),i.allMapImages.push(...o.map((e=>({item:e,sublayerId:t.id})))),t.networkLink){const e=await this._getViewDependentUrl(t.networkLink,this.view.state);await this._loadVisualData(e,i);}}}))}_fetchParsedKML(e){return kmlUtils.g(e,this.view.spatialReference,this.layer.refreshInterval).then((e=>kmlUtils.d(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};request.e([request.d()],j.prototype,"_pointsView",void 0),request.e([request.d()],j.prototype,"_polylinesView",void 0),request.e([request.d()],j.prototype,"_polygonsView",void 0),request.e([request.d()],j.prototype,"_fetchingPromise",void 0),request.e([request.d()],j.prototype,"updating",void 0),j=request.e([request.i("esri.views.2d.layers.KMLLayerView2D")],j);const M=j;

exports.default = M;
