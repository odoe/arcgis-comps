import { u, hq as c, B as S, H as E, a8 as M$1, di as g, ev as M$2, W as r, g as t$1, gZ as J, ew as O, ad as k, aX as a, eF as b, af as e, e9 as C$1, e as e$1, d as d$1, i as i$1 } from './MapView-a31458ed.js';
import { b as b$1, g as g$2, d } from './kmlUtils-5ccbb2a7.js';
import { g as g$1 } from './Bitmap-86f313fd.js';
import { t } from './BitmapContainer-d9540b04.js';
import { l, u as u$1 } from './LayerView-4f2ac95c.js';
import { i } from './GraphicContainer-9f25b41c.js';
import { r as rt } from './BaseGraphicContainer-1b8815a3.js';
import './index-3067d8ff.js';
import './Container-b142640e.js';
import './EffectList-edbd1525.js';
import './Texture-a7a0b3dd.js';
import './WGLContainer-5366718c.js';
import './definitions-6a5ca2d9.js';
import './VertexArrayObject-f53fdf9c.js';
import './Utils-f78b5dcf.js';
import './ShaderCompiler-9d72a5ed.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-860012b2.js';
import './pixelUtils-6a5b76e5.js';
import './earcut-05cd758b.js';
import './CIMSymbolHelper-6a493992.js';
import './Rect-988189d5.js';
import './GeometryUtils-d5113f23.js';
import './projectionSupport-232446bc.js';
import './json-cfa039ad.js';
import './FeatureContainer-a7e045ec.js';
import './TileContainer-20c09af5.js';
import './visualVariablesUtils-51cc57d5.js';
import './visualVariablesUtils-0abb8484.js';
import './Matcher-b4b89a0a.js';
import './ComputedAttributeStorage-30f59bfa.js';
import './FeatureSetReader-60cc3946.js';
import './centroid-f69dc2c5.js';
import './tileUtils-056973f6.js';
import './TileClipper-7e0687d5.js';
import './cimAnalyzer-f1fe5194.js';
import './quantizationUtils-76be0161.js';
import './cimSymbolUtils-3a328c8b.js';
import './devEnvironmentUtils-6390a260.js';
import './schemaUtils-151a2403.js';
import './MD5-6027098a.js';
import './vec3f32-f584608e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class C{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let j=class extends(l(u$1)){constructor(){super(...arguments),this._handles=new u,this._bitmapIndex=new Map,this._mapImageContainer=new t,this._kmlVisualData=new C,this.allVisiblePoints=new c,this.allVisiblePolylines=new c,this.allVisiblePolygons=new c,this.allVisibleMapImages=new S;}hitTest(e,i){if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return Promise.resolve(null);const t=[this._pointsView.hitTest(e,i),this._polylinesView.hitTest(e,i),this._polygonsView.hitTest(e,i)];return Promise.all(t).then((e=>e.filter((e=>(e&&(e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._handles.add([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new rt({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new rt({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new rt({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();})),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating");}));}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&E(e.href,{responseType:"image"}).then((({data:i})=>{let t=M$1.fromJSON(e.extent);g(t,this.view.spatialReference)&&(t=M$2(t,this.view.spatialReference));const s=new g$1(i,"standard");s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/i.naturalWidth,s.rotation=e.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(e,s);}));}async _getViewDependentUrl(e$1,t){const{viewFormat:s,viewBoundScale:a$1,httpQuery:h}=e$1;if(r(s)){if(t$1(t))throw new Error("Loading this network link requires a view state.");let p;if(await J(),r(a$1)&&1!==a$1){const e=new M$1(t.extent);e.expand(a$1),p=e;}else p=t.extent;p=O(p,k.WGS84);const w=O(p,k.WebMercator),g=p.xmin,u=p.xmax,_=p.ymin,V=p.ymax,f=t.size[0]*t.pixelRatio,v=t.size[1]*t.pixelRatio,S=Math.max(w.width,w.height),I={"[bboxWest]":g.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":V.toString(),"[lookatLon]":p.center.x.toString(),"[lookatLat]":p.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":p.center.x.toString(),"[lookatTerrainLat]":p.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":p.center.x.toString(),"[cameraLat]":p.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":f.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":a,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},P=e=>{for(const i in e)for(const t in I)e[i]=e[i].replace(t,I[t]);},x=b(s);P(x);let k$1={};r(h)&&(k$1=b(h),P(k$1));const C=e(e$1.href);C.query={...C.query,...x,...k$1};return `${C.path}?${C$1(x)}`}return e$1.href}async _fetchService(){const e=new C;await this._loadVisualData(this.layer.url,e),this._kmlVisualData=e,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i){return this._fetchParsedKML(e).then((async e=>{for(const t of e.sublayers){i.allSublayers.set(t.id,t);const e=t.points?await b$1(t.points):[],s=t.polylines?await b$1(t.polylines):[],a=t.polygons?await b$1(t.polygons):[],o=t.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:t.id})))),i.allPolylines.push(...s.map((e=>({item:e,sublayerId:t.id})))),i.allPolygons.push(...a.map((e=>({item:e,sublayerId:t.id})))),i.allMapImages.push(...o.map((e=>({item:e,sublayerId:t.id})))),t.networkLink){const e=await this._getViewDependentUrl(t.networkLink,this.view.state);await this._loadVisualData(e,i);}}}))}_fetchParsedKML(e){return g$2(e,this.view.spatialReference,this.layer.refreshInterval).then((e=>d(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};e$1([d$1()],j.prototype,"_pointsView",void 0),e$1([d$1()],j.prototype,"_polylinesView",void 0),e$1([d$1()],j.prototype,"_polygonsView",void 0),e$1([d$1()],j.prototype,"_fetchingPromise",void 0),e$1([d$1()],j.prototype,"updating",void 0),j=e$1([i$1("esri.views.2d.layers.KMLLayerView2D")],j);const M=j;

export default M;
