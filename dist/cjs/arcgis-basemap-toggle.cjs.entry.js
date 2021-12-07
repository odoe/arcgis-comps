'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-fde8502c.js');
const request = require('./messageBundle-8be88d04.js');
const compilerUtils = require('./compilerUtils-56e51ed2.js');
const Basemap = require('./Basemap-81280554.js');
const basemapUtils = require('./basemapUtils-dc86a6ad.js');
const accessibleHandler = require('./accessibleHandler-652e5d90.js');
const vmEvent = require('./vmEvent-9b257013.js');
require('./Portal-8d16604d.js');
require('./loadAll-e25ec3d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./writeUtils-7bdc195a.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends request.n$2.EventedAccessor{constructor(t){super(t),this._basemapCache={},this.nextBasemap=basemapUtils.y("hybrid",this._basemapCache),this.view=null,this.toggle=this.toggle.bind(this);}initialize(){request.i$1(this,"nextBasemap",(t=>{t&&!t.loaded&&t.load().catch((()=>{}));}));}destroy(){this.view=null,basemapUtils.f(this._basemapCache),this._basemapCache=null;}get activeBasemap(){return basemapUtils.y(this.get("view.map.basemap")||"topo",this._basemapCache)}castNextBasemap(t){return basemapUtils.y(t,this._basemapCache)}get state(){return this.get("view.ready")?"ready":"disabled"}toggle(){if("disabled"===this.state)return;const t=this.activeBasemap,e=this.nextBasemap;this.view.map.basemap=e,this.nextBasemap=t,this.emit("toggle",{previous:t,current:e});}static getThumbnailUrl(t){if(!t)return null;const{thumbnailUrl:s}=t;if(s)return s;const a=basemapUtils.m(t);if(a)return Basemap.s[a].thumbnailUrl;const r=t.baseLayers.find((t=>!!compilerUtils.o(t)().get("portalItem.thumbnailUrl")));return r?compilerUtils.o(r)().get("portalItem.thumbnailUrl"):null}};request.e([request.d({readOnly:!0})],n.prototype,"activeBasemap",null),request.e([request.d()],n.prototype,"nextBasemap",void 0),request.e([request.c("nextBasemap")],n.prototype,"castNextBasemap",null),request.e([request.d({readOnly:!0})],n.prototype,"state",null),request.e([request.d()],n.prototype,"view",void 0),request.e([request.d()],n.prototype,"toggle",null),n=request.e([request.i("esri.widgets.BasemapToggle.BasemapToggleViewModel")],n);const h=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const g={base:"esri-basemap-toggle esri-widget",secondaryBasemapImage:"esri-basemap-toggle__image--secondary",container:"esri-basemap-thumbnail esri-basemap-toggle__container",image:"esri-basemap-thumbnail__image esri-basemap-toggle__image",imageLoading:"esri-basemap-toggle__image--loading",overlay:"esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",title:"esri-basemap-thumbnail__title esri-basemap-toggle__title",disabled:"esri-disabled",loaderAnimation:"esri-widget__loader-animation"};function d(e){const s=h.getThumbnailUrl(e);return s?{backgroundImage:"url("+s+")"}:{backgroundImage:""}}const c={title:!1};let b=class extends request.z{constructor(e,s){super(e,s),this.activeBasemap=null,this.label=void 0,this.messages=null,this.nextBasemap=null,this.view=null,this.viewModel=new h,this.visibleElements={...c};}castVisibleElements(e){return {...c,...e}}toggle(){}render(){const e=this.viewModel,s="disabled"===e.state?null:e.activeBasemap,t="disabled"===e.state?null:e.nextBasemap,a=t?t.title:"",o=t&&"loaded"!==t.loadStatus;let i;return this.visibleElements.title&&a&&(i=request.n$1("div",{class:g.overlay,key:"esri-basemap-toggle__overlay"},request.n$1("span",{class:g.title,title:a},a))),request.n$1("div",{class:g.base,role:"button","data-basemap-id":t?t.id:"",bind:this,onclick:this._toggle,onkeydown:this._toggle,tabIndex:0,title:this.label},request.n$1("div",{class:this.classes(g.container,g.secondaryBasemapImage)},request.n$1("div",{class:g.image,styles:d(s)})),request.n$1("div",{class:g.container},request.n$1("div",{class:this.classes(g.image,o?g.imageLoading:null),styles:d(t)},o?request.n$1("span",{"aria-hidden":"true",role:"presentation",class:g.loaderAnimation}):null),i))}_toggle(){this.toggle();}};request.e([request.o("viewModel.activeBasemap")],b.prototype,"activeBasemap",void 0),request.e([request.d({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0),request.e([request.d(),request.e$1("esri/widgets/BasemapToggle/t9n/BasemapToggle")],b.prototype,"messages",void 0),request.e([request.o("viewModel.nextBasemap")],b.prototype,"nextBasemap",void 0),request.e([request.o("viewModel.view")],b.prototype,"view",void 0),request.e([vmEvent.t("toggle"),request.d({type:h})],b.prototype,"viewModel",void 0),request.e([request.d()],b.prototype,"visibleElements",void 0),request.e([request.c("visibleElements")],b.prototype,"castVisibleElements",null),request.e([request.o("viewModel.toggle")],b.prototype,"toggle",null),request.e([accessibleHandler.t()],b.prototype,"_toggle",null),b=request.e([request.i("esri.widgets.BasemapToggle")],b);const u=b;

const arcgisBasemapToggleCss = "@import url('https://js.arcgis.com/next/esri/themes/light/main.css');";

let ArcGISBasemapToggle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.loaded = index.createEvent(this, "loaded", 7);
    this.position = 'bottom-left';
  }
  validateView(value) {
    if (value) {
      this.widget.view = value;
      if (this.el.parentElement.tagName.toLowerCase() !== 'arcgis-expand') {
        this.widget.view.ui.add(this.widget, this.position);
      }
    }
  }
  validateNextBasemap(value) {
    if (value && this.widget) {
      this.widget.nextBasemap = value;
    }
  }
  componentWillLoad() {
    const params = {
      container: this.el
    };
    if (this.nextBasemap) {
      params.nextBasemap = this.nextBasemap;
    }
    if (this.view) {
      params.view = this.view;
    }
    const widget = new u(params);
    this.widget = widget;
    this.loaded.emit(true);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "view": ["validateView"],
    "nextBasemap": ["validateNextBasemap"]
  }; }
};
ArcGISBasemapToggle.style = arcgisBasemapToggleCss;

exports.arcgis_basemap_toggle = ArcGISBasemapToggle;
