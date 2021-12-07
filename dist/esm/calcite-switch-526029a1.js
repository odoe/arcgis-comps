import { dv as attachShadow, dA as createEvent, dw as h, dx as Host, dy as proxyCustomElement } from './messageBundle-f75b4090.js';
import { q as queryElementRoots, c as closestElementCrossShadowBoundary, g as getElementDir, C as CSS_UTILITY } from './dom-aa4a7cd1.js';
import './index-b157fcf2.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function gen(counts) {
  return counts
    .map((count) => {
    let out = "";
    for (let i = 0; i < count; i++) {
      out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return out;
  })
    .join("-");
}
const guid = () => gen([2, 1, 1, 1, 3]);

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const hiddenInputStyle = `
  bottom: 0 !important;
  left: 0 !important;
  margin: 0 !important;
  opacity: 0 !important;
  outline: none !important;
  padding: 0 !important;
  position: absolute !important;
  right: 0 !important;
  top: 0 !important;
  transform: none !important;
  -webkit-appearance: none !important;
  z-index: -1 !important;
`;

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
/**
 * Standardize key property of keyboard event (mostly for ie11)
 */
function getKey(key, dir) {
  const lookup = {
    Up: "ArrowUp",
    Down: "ArrowDown",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Spacebar: " ",
    Esc: "Escape"
  };
  const adjustedKey = lookup[key] || key;
  const isRTL = dir === "rtl";
  if (isRTL && adjustedKey === "ArrowLeft") {
    return "ArrowRight";
  }
  if (isRTL && adjustedKey === "ArrowRight") {
    return "ArrowLeft";
  }
  return adjustedKey;
}

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */

const labelTagName = "calcite-label";
const labelClickEvent = "calciteInternalLabelClick";
const onLabelClickMap = new WeakMap();
const findLabelForComponent = (componentEl) => {
  const id = componentEl.id;
  return ((id && queryElementRoots(componentEl, `${labelTagName}[for="${id}"]`)) ||
    closestElementCrossShadowBoundary(componentEl, labelTagName));
};
/**
 * Helper to set up label interactions on connectedCallback.
 */
function connectLabel(component) {
  const labelEl = findLabelForComponent(component.el);
  if (!labelEl || onLabelClickMap.has(labelEl)) {
    return;
  }
  component.labelEl = labelEl;
  const boundOnLabelClick = onLabelClick.bind(component);
  onLabelClickMap.set(component.labelEl, boundOnLabelClick);
  component.labelEl.addEventListener(labelClickEvent, boundOnLabelClick);
}
/**
 * Helper to tear down label interactions on disconnectedCallback.
 */
function disconnectLabel(component) {
  if (!component.labelEl) {
    return;
  }
  const boundOnLabelClick = onLabelClickMap.get(component.labelEl);
  component.labelEl.removeEventListener(labelClickEvent, boundOnLabelClick);
  onLabelClickMap.delete(component.labelEl);
}
/**
 * Helper to get the label text from a component.
 */
function getLabelText(component) {
  var _a, _b;
  return component.label || ((_b = (_a = component.labelEl) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "";
}
function onLabelClick(event) {
  const containedLabelableChildClicked = this.el.contains(event.detail.sourceEvent.target);
  if (containedLabelableChildClicked) {
    return;
  }
  this.onLabelClick(event);
}

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */

const calciteSwitchCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]) .container{height:0.75rem}:host([scale=s]) .track{width:1.5rem;height:0.75rem}:host([scale=s]) .handle{width:0.5rem;height:0.5rem}:host([scale=m]) .container{height:1rem}:host([scale=m]) .track{width:2rem;height:1rem}:host([scale=m]) .handle{width:0.75rem;height:0.75rem}:host([scale=l]) .container{height:1.5rem}:host([scale=l]) .track{width:3rem;height:1.5rem}:host([scale=l]) .handle{width:1.25rem;height:1.25rem}:host{display:inline-block;position:relative;width:auto;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none;cursor:default}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;width:auto}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.track{position:relative;display:inline-block;vertical-align:top;background-color:var(--calcite-ui-foreground-2);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:9999px}.handle{position:absolute;display:block;right:auto;background-color:var(--calcite-ui-foreground-1);border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:9999px;pointer-events:none;top:-1px;left:-1px}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand-hover)}:host([checked]) .handle{left:auto;border-color:var(--calcite-ui-brand);right:-1px}:host([checked]:hover) .track{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand-hover)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}.calcite--rtl .handle{left:auto;right:-1px}:host([checked]) .calcite--rtl .handle{right:auto;left:-1px}:host([checked]:active) .calcite--rtl .handle{right:auto;left:-1px}:host([checked]:focus) .calcite--rtl .handle{right:auto;left:-1px}";

let CalciteSwitch$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.calciteSwitchChange = createEvent(this, "calciteSwitchChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** True if the switch is disabled */
    this.disabled = false;
    /** The scale of the switch */
    this.scale = "m";
    /** True if the switch is initially on
     * @deprecated use 'checked' instead.
     */
    this.switched = false;
    /** True if the switch is initially on */
    this.checked = false;
    this.inputEl = document.createElement("input");
    this.clickHandler = () => {
      this.toggle();
    };
  }
  disabledWatcher(newDisabled) {
    this.inputEl.disabled = newDisabled;
    this.tabindex = newDisabled ? -1 : 0;
  }
  nameChanged(newName) {
    this.inputEl.name = newName;
  }
  switchedWatcher(switched) {
    this.checked = switched;
  }
  checkedWatcher(checked) {
    this.inputEl.checked = checked;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    if (!this.disabled) {
      this.toggle();
      this.setFocus();
    }
  }
  setupInput() {
    this.checked && this.inputEl.setAttribute("checked", "");
    this.inputEl.disabled = this.disabled;
    this.inputEl.id = `${this.guid}-input`;
    this.inputEl.name = this.name;
    this.inputEl.style.cssText = hiddenInputStyle;
    this.inputEl.type = "checkbox";
    if (this.value) {
      this.inputEl.value = this.value != null ? this.value.toString() : "";
    }
    this.el.appendChild(this.inputEl);
  }
  toggle() {
    this.checked = !this.checked;
    this.calciteSwitchChange.emit({
      // todo: We should remove emmitting redudant props in event payload.
      // https://github.com/Esri/calcite-components/issues/3163
      switched: this.checked
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(e) {
    const key = getKey(e.key);
    if (!this.disabled && (key === " " || key === "Enter")) {
      this.toggle();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectLabel(this);
  }
  disconnectedCallback() {
    disconnectLabel(this);
  }
  componentWillLoad() {
    this.guid = this.el.id || `calcite-switch-${guid()}`;
    this.tabindex = this.el.getAttribute("tabindex") || this.disabled ? -1 : 0;
    this.setupInput();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = getElementDir(this.el);
    return (h(Host, { "aria-checked": this.checked.toString(), "aria-label": getLabelText(this), onClick: this.clickHandler, role: "switch", tabindex: this.tabindex }, h("div", { class: { container: true, [CSS_UTILITY.rtl]: dir === "rtl" } }, h("div", { class: "track" }, h("div", { class: "handle" })))));
  }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "name": ["nameChanged"],
    "switched": ["switchedWatcher"],
    "checked": ["checkedWatcher"]
  }; }
  static get style() { return calciteSwitchCss; }
};
CalciteSwitch$1 = /*@__PURE__*/ proxyCustomElement(CalciteSwitch$1, [1, "calcite-switch", {
    "disabled": [516],
    "label": [1],
    "name": [513],
    "scale": [513],
    "switched": [4],
    "checked": [1540],
    "value": [520],
    "guid": [32],
    "tabindex": [32],
    "setFocus": [64]
  }, [[0, "keydown", "keyDownHandler"]]]);
function defineCustomElement$1() {
  const components = ["calcite-switch"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-switch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteSwitch$1);
      }
      break;
  } });
}
defineCustomElement$1();

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */

const CalciteSwitch = CalciteSwitch$1;
const defineCustomElement = defineCustomElement$1;

export { CalciteSwitch, defineCustomElement };
