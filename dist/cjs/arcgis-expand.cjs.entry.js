'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-57f2cfbb.js');
const request = require('./messageBundle-312ceb47.js');
const widget = require('./widget-41a1462e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends request.p{constructor(e){super(e),this._viewpointHandle=null,this._handles=new request.u$2,this.group=null;}initialize(){this._handles.add(request.$(this,"view.ui","expand",(e=>{const{target:t}=e;t&&t!==this&&t.expanded&&t.group&&t.group===this.group&&this._collapse();})));}destroy(){this._viewpointHandle=null,this.view=null,this._handles.destroy(),this._handles=null;}set autoCollapse(e){this._set("autoCollapse",e),this._watchViewpoint();}set expanded(e){const t=!!e;this._set("expanded",t);const s=this.get("view.ui");s&&s.emit("expand",{target:this}),this._viewpointHandleChange(t);}get state(){return this.get("view.ready")?"ready":"disabled"}set view(e){this._get("view")!==e&&(this._set("view",e),e&&request.d$3(e,"ready",(()=>{this.view===e&&this._watchViewpoint();})));}_viewpointHandleChange(e){this._viewpointHandle&&(e?request.d$3(this.view,"stationary",(()=>this._viewpointHandle.resume())):this._viewpointHandle.pause());}_watchViewpoint(){const e="viewpoint";this._handles.remove(e),this._viewpointHandle=null;const{autoCollapse:t,view:s}=this;if(s&&t){const t="3d"===s.type?"camera":"viewpoint",i=request.O(s,t,(()=>this._collapse()));this._handles.add(i,e),this._viewpointHandle=i;}}_collapse(){this.expanded=!1;}};request.e([request.d({value:!1})],p.prototype,"autoCollapse",null),request.e([request.d({value:!1})],p.prototype,"expanded",null),request.e([request.d()],p.prototype,"group",void 0),request.e([request.d({readOnly:!0})],p.prototype,"state",null),request.e([request.d({value:null})],p.prototype,"view",null),p=request.e([request.i("esri.widgets.Expand.ExpandViewModel")],p);const l=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={base:"esri-expand esri-widget",modeAuto:"esri-expand--auto",modeDrawer:"esri-expand--drawer",modeFloating:"esri-expand--floating",container:"esri-expand__container",containerExpanded:"esri-expand__container--expanded",panel:"esri-expand__panel",button:"esri-widget--button",text:"esri-icon-font-fallback-text",icon:"esri-collapse__icon",iconExpanded:"esri-expand__icon--expanded",iconNumber:"esri-expand__icon-number",iconNumberExpanded:"esri-expand__icon-number--expanded",expandIcon:"esri-icon-expand",collapseIcon:"esri-icon-collapse",content:"esri-expand__content",contentExpanded:"esri-expand__content--expanded",expandMask:"esri-expand__mask",expandMaskExpanded:"esri-expand__mask--expanded"};let u=class extends request.z{constructor(e,o){super(e,o),this.autoCollapse=null,this.closeOnEsc=!0,this.collapseTooltip="",this.content="",this.expanded=null,this.expandTooltip="",this.group=null,this.iconNumber=0,this.label=void 0,this.messages=null,this.messagesCommon=null,this.mode="auto",this.view=null,this.viewModel=new l,this._handleKeyDown=e=>{const{closeOnEsc:o,_toggleButtonEl:t,expanded:n}=this;if(!n||!o||e.target===t||"Escape"!==e.key)return;("function"==typeof o?o(e):o)&&(this.expanded=!1,null==t||t.focus());};}get contentId(){return `${this.id}_controls_content`}get expandTitle(){const{expanded:e,messagesCommon:o,collapseTooltip:t,expandTooltip:n}=this;return e?t||o.collapse:n||o.expand}get collapseIconClass(){return c.collapseIcon}set collapseIconClass(e){e?this._override("collapseIconClass",e):this._clearOverride("collapseIconClass");}get expandIconClass(){return widget.e(this.content)?this.content.iconClass:c.expandIcon}set expandIconClass(e){e?this._override("expandIconClass",e):this._clearOverride("expandIconClass");}expand(){this.viewModel.expanded=!0;}collapse(){this.viewModel.expanded=!1;}toggle(){this.viewModel.expanded=!this.viewModel.expanded;}render(){const{mode:e}=this,o={[c.modeAuto]:"auto"===e,[c.modeDrawer]:"drawer"===e,[c.modeFloating]:"floating"===e};return request.n("div",{class:this.classes(c.base,o),onkeydown:this._handleKeyDown},this.renderMask(),this.renderContainer())}renderContainer(){const{expanded:e}=this,o={[c.containerExpanded]:e};return request.n("div",{class:this.classes(c.container,o)},this.renderPanel(),this.renderContent())}renderMask(){const{expanded:e}=this,o={[c.expandMaskExpanded]:e};return request.n("div",{bind:this,onclick:this._toggle,class:this.classes(c.expandMask,o)})}renderBadgeNumber(){const{expanded:e,iconNumber:o}=this;return o&&!e?request.n("span",{key:"expand__icon-number",class:c.iconNumber},o):null}renderPanelNumber(){const{iconNumber:e,expanded:o}=this;return e&&o?request.n("span",{key:"expand__expand-icon-number",class:this.classes(c.iconNumber,c.iconNumberExpanded)},e):null}renderIcon(){const{collapseIconClass:e,expandIconClass:o,expanded:t}=this,n={[c.iconExpanded]:t,[e]:t,[o]:!t};return e===o&&(n[e]=!0),request.n("span",{"aria-hidden":"true",class:this.classes(c.icon,n)})}renderTitle(){return request.n("span",{class:c.text},this.expandTitle)}renderExpandButton(){const{expanded:e,expandTitle:o,contentId:t}=this;return request.n("div",{afterCreate:this._storeToggleButtonEl,"aria-controls":t,"aria-expanded":e?"true":"false",bind:this,class:c.button,onclick:this._toggle,onkeydown:this._toggle,role:"button",tabindex:"0",title:o},this.renderBadgeNumber(),this.renderIcon(),this.renderTitle())}renderPanel(){return request.n("div",{class:c.panel},this.renderExpandButton(),this.renderPanelNumber())}renderContent(){const{expanded:e,contentId:o}=this,t={[c.contentExpanded]:e};return request.n("div",{id:o,role:"region",class:this.classes(c.content,t)},this.renderContentContainer())}renderContentContainer(){const e=this.content;return "string"==typeof e?request.n("div",{innerHTML:e}):widget.e(e)?e.render():e instanceof HTMLElement?request.n("div",{bind:e,afterCreate:this._attachToNode}):widget.t(e)?request.n("div",{bind:e.domNode,afterCreate:this._attachToNode}):null}_toggle(){this.toggle();}_attachToNode(e){const o=this;e.appendChild(o);}_storeToggleButtonEl(e){this._toggleButtonEl=e;}};request.e([request.d({readOnly:!0})],u.prototype,"contentId",null),request.e([request.d({readOnly:!0})],u.prototype,"expandTitle",null),request.e([request.o("viewModel.autoCollapse")],u.prototype,"autoCollapse",void 0),request.e([request.d()],u.prototype,"closeOnEsc",void 0),request.e([request.d()],u.prototype,"collapseIconClass",null),request.e([request.d()],u.prototype,"collapseTooltip",void 0),request.e([request.d()],u.prototype,"content",void 0),request.e([request.o("viewModel.expanded")],u.prototype,"expanded",void 0),request.e([request.d()],u.prototype,"expandIconClass",null),request.e([request.d()],u.prototype,"expandTooltip",void 0),request.e([request.o("viewModel.group")],u.prototype,"group",void 0),request.e([request.d()],u.prototype,"iconNumber",void 0),request.e([request.d({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],u.prototype,"label",void 0),request.e([request.d(),request.e$2("esri/widgets/Expand/t9n/Expand")],u.prototype,"messages",void 0),request.e([request.d(),request.e$2("esri/t9n/common")],u.prototype,"messagesCommon",void 0),request.e([request.d()],u.prototype,"mode",void 0),request.e([request.o("viewModel.view")],u.prototype,"view",void 0),request.e([request.d({type:l})],u.prototype,"viewModel",void 0),request.e([request.t$1()],u.prototype,"_toggle",null),u=request.e([request.i("esri.widgets.Expand")],u);const x=u;

const arcgisExpandCss = "@import url('https://js.arcgis.com/next/esri/themes/light/main.css');";

let ArcGISSearch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  validateView(value) {
    if (value) {
      this.widget.view = value;
      this.widget.view.ui.add(this.widget, this.position);
    }
  }
  componentWillLoad() {
    const expand = new x({
      container: this.el
    });
    this.widget = expand;
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
  render() {
    return (index.h("div", { class: "expand-container" }));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "view": ["validateView"]
  }; }
};
ArcGISSearch.style = arcgisExpandCss;

exports.arcgis_expand = ArcGISSearch;
