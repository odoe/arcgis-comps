'use strict';

const request = require('./MapView-1195e7f1.js');
const kmlUtils = require('./kmlUtils-87c0ed9c.js');
const Bitmap = require('./Bitmap-0ce1bf83.js');
const BitmapContainer = require('./BitmapContainer-0b6021ad.js');
const LayerView = require('./LayerView-870ab467.js');
const GraphicContainer = require('./GraphicContainer-7b84d423.js');
const BaseGraphicContainer = require('./BaseGraphicContainer-a6a0e9b3.js');
require('./index-b630e408.js');
require('./Container-7c02556c.js');
require('./EffectList-c2e3d9b4.js');
require('./Texture-51894e1f.js');
require('./WGLContainer-d1dbdedc.js');
require('./definitions-b4888cc6.js');
require('./VertexArrayObject-02afb047.js');
require('./Utils-cf62b8df.js');
require('./ShaderCompiler-7b6d74e7.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-a9d25bbc.js');
require('./pixelUtils-dcef9151.js');
require('./earcut-d5562923.js');
require('./CIMSymbolHelper-5119d47d.js');
require('./Rect-8ca00bae.js');
require('./GeometryUtils-062a82b8.js');
require('./projectionSupport-64f67848.js');
require('./json-2c41fbe0.js');
require('./FeatureContainer-cf8e056d.js');
require('./TileContainer-023b8a90.js');
require('./visualVariablesUtils-4c476b9b.js');
require('./visualVariablesUtils-35b3c097.js');
require('./Matcher-9692f12e.js');
require('./ComputedAttributeStorage-b5e92741.js');
require('./FeatureSetReader-1f650286.js');
require('./centroid-7cf9ad55.js');
require('./tileUtils-d0e4ff63.js');
require('./TileClipper-7ecbeeef.js');
require('./cimAnalyzer-a0ed6247.js');
require('./quantizationUtils-6e32af1f.js');
require('./cimSymbolUtils-34c12ff0.js');
require('./devEnvironmentUtils-2fe58900.js');
require('./schemaUtils-60fb47fc.js');
require('./MD5-e5fc0526.js');
require('./vec3f32-7c156128.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class C{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let j=class extends(LayerView.l(LayerView.u)){constructor(){super(...arguments),this._handles=new request.u,this._bitmapIndex=new Map,this._mapImageContainer=new BitmapContainer.t,this._kmlVisualData=new C,this.allVisiblePoints=new request.c$20,this.allVisiblePolylines=new request.c$20,this.allVisiblePolygons=new request.c$20,this.allVisibleMapImages=new request.S$2;}hitTest(e,i){if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return Promise.resolve(null);const t=[this._pointsView.hitTest(e,i),this._polylinesView.hitTest(e,i),this._polygonsView.hitTest(e,i)];return Promise.all(t).then((e=>e.filter((e=>(e&&(e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._handles.add([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new BaseGraphicContainer.rt({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer.i(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new BaseGraphicContainer.rt({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer.i(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new BaseGraphicContainer.rt({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer.i(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();})),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating");}));}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&request.E(e.href,{responseType:"image"}).then((({data:i})=>{let t=request.M.fromJSON(e.extent);request.g$4(t,this.view.spatialReference)&&(t=request.M$4(t,this.view.spatialReference));const s=new Bitmap.g(i,"standard");s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/i.naturalWidth,s.rotation=e.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(e,s);}));}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:a,httpQuery:h}=e;if(request.r(s)){if(request.t$2(t))throw new Error("Loading this network link requires a view state.");let p;if(await request.J(),request.r(a)&&1!==a){const e=new request.M(t.extent);e.expand(a),p=e;}else p=t.extent;p=request.O$3(p,request.k.WGS84);const w=request.O$3(p,request.k.WebMercator),g=p.xmin,u=p.xmax,_=p.ymin,V=p.ymax,f=t.size[0]*t.pixelRatio,v=t.size[1]*t.pixelRatio,S=Math.max(w.width,w.height),I={"[bboxWest]":g.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":V.toString(),"[lookatLon]":p.center.x.toString(),"[lookatLat]":p.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":p.center.x.toString(),"[lookatTerrainLat]":p.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":p.center.x.toString(),"[cameraLat]":p.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":f.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":request.a$4,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},P=e=>{for(const i in e)for(const t in I)e[i]=e[i].replace(t,I[t]);},x=request.b$11(s);P(x);let k={};request.r(h)&&(k=request.b$11(h),P(k));const C=request.e$5(e.href);C.query={...C.query,...x,...k};return `${C.path}?${request.C$1(x)}`}return e.href}async _fetchService(){const e=new C;await this._loadVisualData(this.layer.url,e),this._kmlVisualData=e,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i){return this._fetchParsedKML(e).then((async e=>{for(const t of e.sublayers){i.allSublayers.set(t.id,t);const e=t.points?await kmlUtils.b(t.points):[],s=t.polylines?await kmlUtils.b(t.polylines):[],a=t.polygons?await kmlUtils.b(t.polygons):[],o=t.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:t.id})))),i.allPolylines.push(...s.map((e=>({item:e,sublayerId:t.id})))),i.allPolygons.push(...a.map((e=>({item:e,sublayerId:t.id})))),i.allMapImages.push(...o.map((e=>({item:e,sublayerId:t.id})))),t.networkLink){const e=await this._getViewDependentUrl(t.networkLink,this.view.state);await this._loadVisualData(e,i);}}}))}_fetchParsedKML(e){return kmlUtils.g(e,this.view.spatialReference,this.layer.refreshInterval).then((e=>kmlUtils.d(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};request.e([request.d()],j.prototype,"_pointsView",void 0),request.e([request.d()],j.prototype,"_polylinesView",void 0),request.e([request.d()],j.prototype,"_polygonsView",void 0),request.e([request.d()],j.prototype,"_fetchingPromise",void 0),request.e([request.d()],j.prototype,"updating",void 0),j=request.e([request.i("esri.views.2d.layers.KMLLayerView2D")],j);const M=j;

exports.default = M;
