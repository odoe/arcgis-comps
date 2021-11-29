import { r as registerInstance, e as createEvent, g as getElement } from './index-6f774db5.js';
import { p as p$1, e, b as d$1, i } from './cast-e5ea2533.js';
import { o } from './aliasOf-e543e228.js';
import { z, n, e as e$2, t as t$1 } from './messageBundle-335e3604.js';
import { u as u$1 } from './Handles-24a27aa9.js';
import { $, d, O } from './watchUtils-08cf9d08.js';
import { e as e$1, t } from './widget-7c3356d9.js';
import './intl-0d87e9f4.js';
import './number-2da43364.js';
import './messages-1d31e380.js';
import './assets-1ab0ccbe.js';
import './Collection-ac20f1a1.js';
import './uuid-d0cd90dd.js';
import './vmEvent-bdc3bebc.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends p$1{constructor(e){super(e),this._viewpointHandle=null,this._handles=new u$1,this.group=null;}initialize(){this._handles.add($(this,"view.ui","expand",(e=>{const{target:t}=e;t&&t!==this&&t.expanded&&t.group&&t.group===this.group&&this._collapse();})));}destroy(){this._viewpointHandle=null,this.view=null,this._handles.destroy(),this._handles=null;}set autoCollapse(e){this._set("autoCollapse",e),this._watchViewpoint();}set expanded(e){const t=!!e;this._set("expanded",t);const s=this.get("view.ui");s&&s.emit("expand",{target:this}),this._viewpointHandleChange(t);}get state(){return this.get("view.ready")?"ready":"disabled"}set view(e){this._get("view")!==e&&(this._set("view",e),e&&d(e,"ready",(()=>{this.view===e&&this._watchViewpoint();})));}_viewpointHandleChange(e){this._viewpointHandle&&(e?d(this.view,"stationary",(()=>this._viewpointHandle.resume())):this._viewpointHandle.pause());}_watchViewpoint(){const e="viewpoint";this._handles.remove(e),this._viewpointHandle=null;const{autoCollapse:t,view:s}=this;if(s&&t){const t="3d"===s.type?"camera":"viewpoint",i=O(s,t,(()=>this._collapse()));this._handles.add(i,e),this._viewpointHandle=i;}}_collapse(){this.expanded=!1;}};e([d$1({value:!1})],p.prototype,"autoCollapse",null),e([d$1({value:!1})],p.prototype,"expanded",null),e([d$1()],p.prototype,"group",void 0),e([d$1({readOnly:!0})],p.prototype,"state",null),e([d$1({value:null})],p.prototype,"view",null),p=e([i("esri.widgets.Expand.ExpandViewModel")],p);const l=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={base:"esri-expand esri-widget",modeAuto:"esri-expand--auto",modeDrawer:"esri-expand--drawer",modeFloating:"esri-expand--floating",container:"esri-expand__container",containerExpanded:"esri-expand__container--expanded",panel:"esri-expand__panel",button:"esri-widget--button",text:"esri-icon-font-fallback-text",icon:"esri-collapse__icon",iconExpanded:"esri-expand__icon--expanded",iconNumber:"esri-expand__icon-number",iconNumberExpanded:"esri-expand__icon-number--expanded",expandIcon:"esri-icon-expand",collapseIcon:"esri-icon-collapse",content:"esri-expand__content",contentExpanded:"esri-expand__content--expanded",expandMask:"esri-expand__mask",expandMaskExpanded:"esri-expand__mask--expanded"};let u=class extends z{constructor(e,o){super(e,o),this.autoCollapse=null,this.closeOnEsc=!0,this.collapseTooltip="",this.content="",this.expanded=null,this.expandTooltip="",this.group=null,this.iconNumber=0,this.label=void 0,this.messages=null,this.messagesCommon=null,this.mode="auto",this.view=null,this.viewModel=new l,this._handleKeyDown=e=>{const{closeOnEsc:o,_toggleButtonEl:t,expanded:n}=this;if(!n||!o||e.target===t||"Escape"!==e.key)return;("function"==typeof o?o(e):o)&&(this.expanded=!1,null==t||t.focus());};}get contentId(){return `${this.id}_controls_content`}get expandTitle(){const{expanded:e,messagesCommon:o,collapseTooltip:t,expandTooltip:n}=this;return e?t||o.collapse:n||o.expand}get collapseIconClass(){return c.collapseIcon}set collapseIconClass(e){e?this._override("collapseIconClass",e):this._clearOverride("collapseIconClass");}get expandIconClass(){return e$1(this.content)?this.content.iconClass:c.expandIcon}set expandIconClass(e){e?this._override("expandIconClass",e):this._clearOverride("expandIconClass");}expand(){this.viewModel.expanded=!0;}collapse(){this.viewModel.expanded=!1;}toggle(){this.viewModel.expanded=!this.viewModel.expanded;}render(){const{mode:e}=this,o={[c.modeAuto]:"auto"===e,[c.modeDrawer]:"drawer"===e,[c.modeFloating]:"floating"===e};return n("div",{class:this.classes(c.base,o),onkeydown:this._handleKeyDown},this.renderMask(),this.renderContainer())}renderContainer(){const{expanded:e}=this,o={[c.containerExpanded]:e};return n("div",{class:this.classes(c.container,o)},this.renderPanel(),this.renderContent())}renderMask(){const{expanded:e}=this,o={[c.expandMaskExpanded]:e};return n("div",{bind:this,onclick:this._toggle,class:this.classes(c.expandMask,o)})}renderBadgeNumber(){const{expanded:e,iconNumber:o}=this;return o&&!e?n("span",{key:"expand__icon-number",class:c.iconNumber},o):null}renderPanelNumber(){const{iconNumber:e,expanded:o}=this;return e&&o?n("span",{key:"expand__expand-icon-number",class:this.classes(c.iconNumber,c.iconNumberExpanded)},e):null}renderIcon(){const{collapseIconClass:e,expandIconClass:o,expanded:t}=this,n$1={[c.iconExpanded]:t,[e]:t,[o]:!t};return e===o&&(n$1[e]=!0),n("span",{"aria-hidden":"true",class:this.classes(c.icon,n$1)})}renderTitle(){return n("span",{class:c.text},this.expandTitle)}renderExpandButton(){const{expanded:e,expandTitle:o,contentId:t}=this;return n("div",{afterCreate:this._storeToggleButtonEl,"aria-controls":t,"aria-expanded":e?"true":"false",bind:this,class:c.button,onclick:this._toggle,onkeydown:this._toggle,role:"button",tabindex:"0",title:o},this.renderBadgeNumber(),this.renderIcon(),this.renderTitle())}renderPanel(){return n("div",{class:c.panel},this.renderExpandButton(),this.renderPanelNumber())}renderContent(){const{expanded:e,contentId:o}=this,t={[c.contentExpanded]:e};return n("div",{id:o,role:"region",class:this.classes(c.content,t)},this.renderContentContainer())}renderContentContainer(){const e=this.content;return "string"==typeof e?n("div",{innerHTML:e}):e$1(e)?e.render():e instanceof HTMLElement?n("div",{bind:e,afterCreate:this._attachToNode}):t(e)?n("div",{bind:e.domNode,afterCreate:this._attachToNode}):null}_toggle(){this.toggle();}_attachToNode(e){const o=this;e.appendChild(o);}_storeToggleButtonEl(e){this._toggleButtonEl=e;}};e([d$1({readOnly:!0})],u.prototype,"contentId",null),e([d$1({readOnly:!0})],u.prototype,"expandTitle",null),e([o("viewModel.autoCollapse")],u.prototype,"autoCollapse",void 0),e([d$1()],u.prototype,"closeOnEsc",void 0),e([d$1()],u.prototype,"collapseIconClass",null),e([d$1()],u.prototype,"collapseTooltip",void 0),e([d$1()],u.prototype,"content",void 0),e([o("viewModel.expanded")],u.prototype,"expanded",void 0),e([d$1()],u.prototype,"expandIconClass",null),e([d$1()],u.prototype,"expandTooltip",void 0),e([o("viewModel.group")],u.prototype,"group",void 0),e([d$1()],u.prototype,"iconNumber",void 0),e([d$1({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],u.prototype,"label",void 0),e([d$1(),e$2("esri/widgets/Expand/t9n/Expand")],u.prototype,"messages",void 0),e([d$1(),e$2("esri/t9n/common")],u.prototype,"messagesCommon",void 0),e([d$1()],u.prototype,"mode",void 0),e([o("viewModel.view")],u.prototype,"view",void 0),e([d$1({type:l})],u.prototype,"viewModel",void 0),e([t$1()],u.prototype,"_toggle",null),u=e([i("esri.widgets.Expand")],u);const x=u;

const arcgisExpandCss = "@import url('https://js.arcgis.com/next/esri/themes/light/main.css');.esri-expand__content--expanded{max-height:240px!important;min-height:32px!important;min-width:240px!important;overflow-y:auto!important;background-color:#fff}";

let ArcGISSearch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loaded = createEvent(this, "loaded", 7);
  }
  validateView(value) {
    if (value) {
      this.widget.view = value;
      this.widget.view.ui.add(this.el, this.position);
    }
  }
  componentWillLoad() {
    const expand = new x({
      container: this.el
    });
    this.widget = expand;
    this.loaded.emit(true);
  }
  componentDidRender() {
    const elems = Array.from(this.el.children);
    for (let e of elems) {
      if (e.tagName.toLowerCase().includes('arcgis-')) {
        e.view = this.view;
        this.widget.content = e;
        this.widget.expandIconClass = e.widget.iconClass;
      }
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "view": ["validateView"]
  }; }
};
ArcGISSearch.style = arcgisExpandCss;

export { ArcGISSearch as arcgis_expand };
