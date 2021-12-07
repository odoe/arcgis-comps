import{dv as t,dA as i,dw as e,dx as a,dy as n}from"./p-e58503d5.js";import{q as o,c as r,g as s,C as c}from"./p-8843b28f.js";import"./p-53bb6ab4.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const l=new WeakMap;
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */function h(t){this.el.contains(t.detail.sourceEvent.target)||this.onLabelClick(t)}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */let d=class extends HTMLElement{constructor(){super(),this.__registerHost(),t(this),this.calciteSwitchChange=i(this,"calciteSwitchChange",7),this.disabled=!1,this.scale="m",this.switched=!1,this.checked=!1,this.inputEl=document.createElement("input"),this.clickHandler=()=>{this.toggle()}}disabledWatcher(t){this.inputEl.disabled=t,this.tabindex=t?-1:0}nameChanged(t){this.inputEl.name=t}switchedWatcher(t){this.checked=t}checkedWatcher(t){this.inputEl.checked=t}async setFocus(){this.el.focus()}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}setupInput(){this.checked&&this.inputEl.setAttribute("checked",""),this.inputEl.disabled=this.disabled,this.inputEl.id=`${this.guid}-input`,this.inputEl.name=this.name,this.inputEl.style.cssText="\n  bottom: 0 !important;\n  left: 0 !important;\n  margin: 0 !important;\n  opacity: 0 !important;\n  outline: none !important;\n  padding: 0 !important;\n  position: absolute !important;\n  right: 0 !important;\n  top: 0 !important;\n  transform: none !important;\n  -webkit-appearance: none !important;\n  z-index: -1 !important;\n",this.inputEl.type="checkbox",this.value&&(this.inputEl.value=null!=this.value?this.value.toString():""),this.el.appendChild(this.inputEl)}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit({switched:this.checked})}keyDownHandler(t){const i=
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function(t){const i={Up:"ArrowUp",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Spacebar:" ",Esc:"Escape"}[t]||t;return i}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */(t.key);this.disabled||" "!==i&&"Enter"!==i||this.toggle()}connectedCallback(){!function(t){const i=(t=>{const i=t.id;return i&&o(t,`calcite-label[for="${i}"]`)||r(t,"calcite-label")})(t.el);if(!i||l.has(i))return;t.labelEl=i;const e=h.bind(t);l.set(t.labelEl,e),t.labelEl.addEventListener("calciteInternalLabelClick",e)}(this)}disconnectedCallback(){!function(t){if(!t.labelEl)return;const i=l.get(t.labelEl);t.labelEl.removeEventListener("calciteInternalLabelClick",i),l.delete(t.labelEl)}(this)}componentWillLoad(){this.guid=this.el.id||`calcite-switch-${[2,1,1,1,3].map((t=>{let i="";for(let e=0;e<t;e++)i+=(65536*(1+Math.random())|0).toString(16).substring(1);return i})).join("-")}`,this.tabindex=this.el.getAttribute("tabindex")||this.disabled?-1:0,this.setupInput()}render(){const t=s(this.el);return e(a,{"aria-checked":this.checked.toString(),"aria-label":(this,this.label||(null===(n=null===(i=this.labelEl)||void 0===i?void 0:i.textContent)||void 0===n?void 0:n.trim())||""),onClick:this.clickHandler,role:"switch",tabindex:this.tabindex},e("div",{class:{container:!0,[c.rtl]:"rtl"===t}},e("div",{class:"track"},e("div",{class:"handle"}))));var i,n}get el(){return this}static get watchers(){return{disabled:["disabledWatcher"],name:["nameChanged"],switched:["switchedWatcher"],checked:["checkedWatcher"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]) .container{height:0.75rem}:host([scale=s]) .track{width:1.5rem;height:0.75rem}:host([scale=s]) .handle{width:0.5rem;height:0.5rem}:host([scale=m]) .container{height:1rem}:host([scale=m]) .track{width:2rem;height:1rem}:host([scale=m]) .handle{width:0.75rem;height:0.75rem}:host([scale=l]) .container{height:1.5rem}:host([scale=l]) .track{width:3rem;height:1.5rem}:host([scale=l]) .handle{width:1.25rem;height:1.25rem}:host{display:inline-block;position:relative;width:auto;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none;cursor:default}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;width:auto}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.track{position:relative;display:inline-block;vertical-align:top;background-color:var(--calcite-ui-foreground-2);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:9999px}.handle{position:absolute;display:block;right:auto;background-color:var(--calcite-ui-foreground-1);border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:9999px;pointer-events:none;top:-1px;left:-1px}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand-hover)}:host([checked]) .handle{left:auto;border-color:var(--calcite-ui-brand);right:-1px}:host([checked]:hover) .track{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand-hover)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}.calcite--rtl .handle{left:auto;right:-1px}:host([checked]) .calcite--rtl .handle{right:auto;left:-1px}:host([checked]:active) .calcite--rtl .handle{right:auto;left:-1px}:host([checked]:focus) .calcite--rtl .handle{right:auto;left:-1px}"}};function m(){["calcite-switch"].forEach((t=>{switch(t){case"calcite-switch":customElements.get(t)||customElements.define(t,d)}}))}d=n(d,[1,"calcite-switch",{disabled:[516],label:[1],name:[513],scale:[513],switched:[4],checked:[1540],value:[520],guid:[32],tabindex:[32],setFocus:[64]},[[0,"keydown","keyDownHandler"]]]),m();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const b=d,p=m;export{b as CalciteSwitch,p as defineCustomElement}