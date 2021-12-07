import { r as registerInstance, c as createEvent, g as getElement } from './index-b157fcf2.js';
import { e, d as d$1, f as c$1, i, r as n$1, a as i$1, o as o$1, j as e$1, z, l as n$2 } from './messageBundle-f75b4090.js';
import { o } from './compilerUtils-848c8917.js';
import { s } from './Basemap-409fdf8e.js';
import { y, f, m } from './basemapUtils-d3dee4db.js';
import { t as t$1 } from './accessibleHandler-feb312a0.js';
import { t } from './vmEvent-6b909beb.js';
import './Portal-c5cfa317.js';
import './loadAll-9b2a160e.js';
import './asyncUtils-fe35d349.js';
import './PortalItem-155284f3.js';
import './writeUtils-04a97640.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends n$1.EventedAccessor{constructor(t){super(t),this._basemapCache={},this.nextBasemap=y("hybrid",this._basemapCache),this.view=null,this.toggle=this.toggle.bind(this);}initialize(){i$1(this,"nextBasemap",(t=>{t&&!t.loaded&&t.load().catch((()=>{}));}));}destroy(){this.view=null,f(this._basemapCache),this._basemapCache=null;}get activeBasemap(){return y(this.get("view.map.basemap")||"topo",this._basemapCache)}castNextBasemap(t){return y(t,this._basemapCache)}get state(){return this.get("view.ready")?"ready":"disabled"}toggle(){if("disabled"===this.state)return;const t=this.activeBasemap,e=this.nextBasemap;this.view.map.basemap=e,this.nextBasemap=t,this.emit("toggle",{previous:t,current:e});}static getThumbnailUrl(t){if(!t)return null;const{thumbnailUrl:s$1}=t;if(s$1)return s$1;const a=m(t);if(a)return s[a].thumbnailUrl;const r=t.baseLayers.find((t=>!!o(t)().get("portalItem.thumbnailUrl")));return r?o(r)().get("portalItem.thumbnailUrl"):null}};e([d$1({readOnly:!0})],n.prototype,"activeBasemap",null),e([d$1()],n.prototype,"nextBasemap",void 0),e([c$1("nextBasemap")],n.prototype,"castNextBasemap",null),e([d$1({readOnly:!0})],n.prototype,"state",null),e([d$1()],n.prototype,"view",void 0),e([d$1()],n.prototype,"toggle",null),n=e([i("esri.widgets.BasemapToggle.BasemapToggleViewModel")],n);const h=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const g={base:"esri-basemap-toggle esri-widget",secondaryBasemapImage:"esri-basemap-toggle__image--secondary",container:"esri-basemap-thumbnail esri-basemap-toggle__container",image:"esri-basemap-thumbnail__image esri-basemap-toggle__image",imageLoading:"esri-basemap-toggle__image--loading",overlay:"esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",title:"esri-basemap-thumbnail__title esri-basemap-toggle__title",disabled:"esri-disabled",loaderAnimation:"esri-widget__loader-animation"};function d(e){const s=h.getThumbnailUrl(e);return s?{backgroundImage:"url("+s+")"}:{backgroundImage:""}}const c={title:!1};let b=class extends z{constructor(e,s){super(e,s),this.activeBasemap=null,this.label=void 0,this.messages=null,this.nextBasemap=null,this.view=null,this.viewModel=new h,this.visibleElements={...c};}castVisibleElements(e){return {...c,...e}}toggle(){}render(){const e=this.viewModel,s="disabled"===e.state?null:e.activeBasemap,t="disabled"===e.state?null:e.nextBasemap,a=t?t.title:"",o=t&&"loaded"!==t.loadStatus;let i;return this.visibleElements.title&&a&&(i=n$2("div",{class:g.overlay,key:"esri-basemap-toggle__overlay"},n$2("span",{class:g.title,title:a},a))),n$2("div",{class:g.base,role:"button","data-basemap-id":t?t.id:"",bind:this,onclick:this._toggle,onkeydown:this._toggle,tabIndex:0,title:this.label},n$2("div",{class:this.classes(g.container,g.secondaryBasemapImage)},n$2("div",{class:g.image,styles:d(s)})),n$2("div",{class:g.container},n$2("div",{class:this.classes(g.image,o?g.imageLoading:null),styles:d(t)},o?n$2("span",{"aria-hidden":"true",role:"presentation",class:g.loaderAnimation}):null),i))}_toggle(){this.toggle();}};e([o$1("viewModel.activeBasemap")],b.prototype,"activeBasemap",void 0),e([d$1({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0),e([d$1(),e$1("esri/widgets/BasemapToggle/t9n/BasemapToggle")],b.prototype,"messages",void 0),e([o$1("viewModel.nextBasemap")],b.prototype,"nextBasemap",void 0),e([o$1("viewModel.view")],b.prototype,"view",void 0),e([t("toggle"),d$1({type:h})],b.prototype,"viewModel",void 0),e([d$1()],b.prototype,"visibleElements",void 0),e([c$1("visibleElements")],b.prototype,"castVisibleElements",null),e([o$1("viewModel.toggle")],b.prototype,"toggle",null),e([t$1()],b.prototype,"_toggle",null),b=e([i("esri.widgets.BasemapToggle")],b);const u=b;

const arcgisBasemapToggleCss = "@import url('https://js.arcgis.com/next/esri/themes/light/main.css');";

let ArcGISBasemapToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loaded = createEvent(this, "loaded", 7);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "view": ["validateView"],
    "nextBasemap": ["validateNextBasemap"]
  }; }
};
ArcGISBasemapToggle.style = arcgisBasemapToggleCss;

export { ArcGISBasemapToggle as arcgis_basemap_toggle };
