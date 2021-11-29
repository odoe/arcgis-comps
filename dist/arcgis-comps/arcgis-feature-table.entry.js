import { r as registerInstance, e as createEvent, g as getElement } from './index-6f774db5.js';
import { p as p$4, e as e$3, b as d$4, k as c$4, i as i$4, r as r$1, t as t$3, aE as i$7, X as i$8, a as s$2, g as s$3, aF as n$5, x as r$3, al as l$1, l as l$2, aG as C$2, L as g$4 } from './cast-e5ea2533.js';
import { s as s$1 } from './intl-0d87e9f4.js';
import { n as n$4, S as S$2 } from './Collection-ac20f1a1.js';
import { a as a$4 } from './HandleOwner-0793ecee.js';
import { i as i$5, f as f$6, $ as $$1 } from './watchUtils-08cf9d08.js';
import { o as o$1 } from './aliasOf-e543e228.js';
import { z as z$1, i as i$6, n as n$3, u as u$3, a as e$4, d as d$5, y as y$4, L as L$1, g as g$3, e as e$6, t as t$4 } from './messageBundle-335e3604.js';
import { h as h$1 } from './Graphic-79de2095.js';
import { u as u$7 } from './Handles-24a27aa9.js';
import { e as e$7 } from './layerViewUtils-7bf4230b.js';
import { T as T$1, L as L$3, S as S$1, u as u$5, m as m$5 } from './number-2da43364.js';
import { u as u$4 } from './Field-67832b5b.js';
import { B as B$1, H as H$1, K as K$1, a as a$5, e as ee$1, i as ie$1, O as O$2, L as L$2, b as e$5, Z as Z$1, r as r$2, c as re$1 } from './opacityUtils-5755cb64.js';
import { i as i$9, m as m$4 } from './reactiveUtils-ab0efcb1.js';
import { u as u$6 } from './TopFeaturesQuery-25265c27.js';
import { u as u$8 } from './messages-1d31e380.js';
import Ge$1 from './FeatureLayer-1e313d3a.js';
import './assets-1ab0ccbe.js';
import './uuid-d0cd90dd.js';
import './geometry-160ffbb5.js';
import './Portal-f1457cb4.js';
import './JSONSupport-8dda8bae.js';
import './Polyline-56152656.js';
import './PopupTemplate-87ca9924.js';
import './enumeration-da141e85.js';
import './Identifiable-0fb3fc58.js';
import './symbols-dc010d3b.js';
import './Symbol-ac21e497.js';
import './Color-ed0bfbe9.js';
import './colorUtils-37750ea3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './screenUtils-9ed89fa7.js';
import './aaBoundingBox-e0a84875.js';
import './aaBoundingRect-2a187de3.js';
import './persistableUrlUtils-a9da326c.js';
import './collectionUtils-b35b097b.js';
import './fieldType-7f6b02ef.js';
import './Query-b8b0a5e8.js';
import './TimeExtent-ecf7e6f2.js';
import './UniqueValueRenderer-b8a9ac2d.js';
import './VisualVariablesMixin-a8b13e1b.js';
import './colorRamps-fcb1175a.js';
import './ColorStop-0035d362.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-ed2b64ac.js';
import './compilerUtils-2d7ddb00.js';
import './lengthUtils-2084b777.js';
import './unitUtils-5dcccb3c.js';
import './diffUtils-4072cef0.js';
import './jsonUtils-528e9eda.js';
import './styleUtils-5c87d3a9.js';
import './DictionaryRenderer-09505309.js';
import './LRUCache-65fcdebd.js';
import './MemCache-d4727626.js';
import './jsonUtils-efd42703.js';
import './Layer-663fafaf.js';
import './HeightModelInfo-5cd6d5f2.js';
import './workers-a7d3d5f6.js';
import './queryZScale-f05f6be9.js';
import './zscale-8c9c7156.js';
import './FeatureSet-c6e91f97.js';
import './APIKeyMixin-5ecbc947.js';
import './ArcGISService-00a30f8e.js';
import './arcgisLayerUrl-4273e4b3.js';
import './BlendLayer-34bd1b5b.js';
import './jsonUtils-687db5e9.js';
import './mat4-0196b8fc.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-171b3366.js';
import './labelingInfo-4e582940.js';
import './commonProperties-4c10a963.js';
import './LabelClass-a646d1d3.js';
import './labelUtils-a20584ac.js';
import './defaultsJSON-53258912.js';
import './OperationalLayer-0f16c161.js';
import './OrderedLayer-5c55613e.js';
import './PortalLayer-0ef8a2d2.js';
import './asyncUtils-847ae6e6.js';
import './PortalItem-85b3bb14.js';
import './RefreshableLayer-0c4b9daf.js';
import './ScaleRangeLayer-f5a96945.js';
import './TemporalLayer-b9cacecc.js';
import './TimeInfo-5f646e9b.js';
import './FeatureType-1c489c5b.js';
import './fieldProperties-dc649a5f.js';
import './FieldsIndex-e09edd96.js';
import './LayerFloorInfo-8df7be66.js';
import './styleUtils-545def82.js';
import './popupUtils-71e7198e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i$3;let p$3=i$3=class extends p$4{constructor(o){super(o),this.autoCloseMenu=!1,this.iconClass=null,this.items=null,this.label=null,this.open=!1,this.selected=!1,this.selectionEnabled=!1,this.clickFunction=null;}castItems(o){return o?o.map((o=>o instanceof i$3?o:new i$3(o))):null}};e$3([d$4()],p$3.prototype,"autoCloseMenu",void 0),e$3([d$4()],p$3.prototype,"iconClass",void 0),e$3([d$4()],p$3.prototype,"items",void 0),e$3([c$4("items")],p$3.prototype,"castItems",null),e$3([d$4()],p$3.prototype,"label",void 0),e$3([d$4()],p$3.prototype,"open",void 0),e$3([d$4()],p$3.prototype,"selected",void 0),e$3([d$4()],p$3.prototype,"selectionEnabled",void 0),e$3([d$4()],p$3.prototype,"clickFunction",void 0),p$3=i$3=e$3([i$4("esri.widgets.FeatureTable.Grid.support.ButtonMenuItem")],p$3);const c$3=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c$2=class extends p$4{constructor(o){super(o),this.items=null,this.open=!1;}castItems(o){return o?o.map((o=>o instanceof c$3?o:new c$3(o))):null}};e$3([d$4()],c$2.prototype,"items",void 0),e$3([c$4("items")],c$2.prototype,"castItems",null),e$3([d$4()],c$2.prototype,"open",void 0),c$2=e$3([i$4("esri.widgets.FeatureTable.Grid.support.ButtonMenuViewModel")],c$2);const i$2=c$2;

// import { isHTMLElement } from './instanceOf';
function getBoundingClientRect(element, // eslint-disable-next-line unused-imports/no-unused-vars
includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1; // FIXME:
  // `offsetWidth` returns an integer while `getBoundingClientRect`
  // returns a float. This results in `scaleX` or `scaleY` being
  // non-1 when it should be for elements that aren't a full pixel in
  // width or height.
  // if (isHTMLElement(element) && includeScale) {
  //   const offsetHeight = element.offsetHeight;
  //   const offsetWidth = element.offsetWidth;
  //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
  //   // Fallback to 1 in case both values are `0`
  //   if (offsetWidth > 0) {
  //     scaleX = rect.width / offsetWidth || 1;
  //   }
  //   if (offsetHeight > 0) {
  //     scaleY = rect.height / offsetHeight || 1;
  //   }
  // }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle$1(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper$2 = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect$2(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


const eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$2,
  data: {}
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (false) {
    var transitionProperty = getComputedStyle$1(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


const applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$1,
  requires: ['computeStyles']
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (false) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


const flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


const arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


const hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper$1 = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers$1
}); // eslint-disable-next-line import/no-unused-modules

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d$3=["bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end","top","top-start","top-end"],m$3={base:"esri-popover",open:"esri-popover--open"},u$2={position:"fixed","z-index":"1000"};let _$5=class extends z$1{constructor(t,e){super(t,e),this._popper=null,this._contentNode=null,this._renderAttached=!1,this._rootNode=null,this.anchorElement=null,this.offset=[0,0],this.open=!1,this.renderContentFunction=null,this._afterRootCreate=t=>{this._rootNode=t;},this._afterContentCreate=t=>{this._contentNode=t;},this._updatePosition=()=>{r$1(this._popper)&&this._popper.update();};}initialize(){this.when((()=>{this._projector.append(document.body,this.render),this._renderAttached=!0;})),this.own(i$5(this,["open","anchorElement"],(()=>this._buildPopper())),i$5(this,["placement","offset"],(()=>this._setPopperOptions())));}destroy(){this.owner=null,this.anchorElement=null,this.renderContentFunction=null,this._renderAttached&&(this._projector.detach(this.render),this._renderAttached=!1),r$1(this._rootNode)&&(i$6(this._rootNode),this._rootNode=null),this._contentNode=null,r$1(this._popper)&&(this._popper.destroy(),this._popper=null);}set container(t){}set owner(t){this._set("owner",t);}get placement(){return "top"}set placement(t){-1!==d$3.indexOf(t)?this._override("placement",t):this._clearOverride("placement");}render(){var t;const{open:e,owner:o,renderContentFunction:r}=this;return n$3("div",{afterCreate:this._afterRootCreate,class:this.classes(m$3.base,e?m$3.open:null),styles:u$2},n$3("div",{dir:u$3(null==(t=this.owner)?void 0:t.container),afterCreate:this._afterContentCreate,afterUpdate:this._updatePosition},e&&(null==r?void 0:r.call(o))))}_buildPopper(){r$1(this._popper)&&(this._popper.destroy(),this._popper=null);const t=this._contentNode;if(t$3(t))return;if(!this.open||!this.renderContentFunction)return;const o=this._getAnchor();o&&(this._popper=createPopper(o,t),this._setPopperOptions());}_setPopperOptions(){const{placement:t,offset:e,_popper:o}=this;t$3(o)||(o.setOptions({placement:t,modifiers:[{name:"offset",options:{offset:e}}]}),o.forceUpdate());}_getAnchor(){const{anchorElement:t}=this;return e$4("function"==typeof t?t():t)}};e$3([d$4()],_$5.prototype,"anchorElement",void 0),e$3([d$4()],_$5.prototype,"container",null),e$3([d$4()],_$5.prototype,"offset",void 0),e$3([d$4()],_$5.prototype,"open",void 0),e$3([d$4()],_$5.prototype,"owner",null),e$3([d$4()],_$5.prototype,"placement",null),e$3([d$4()],_$5.prototype,"renderContentFunction",void 0),_$5=e$3([i$4("esri.widgets.support.Popover")],_$5);const f$5=_$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h={base:"esri-button-menu",content:"esri-button-menu__content",contentWrapper:"esri-button-menu__content-wrapper",itemWrapper:"esri-button-menu__item-wrapper",label:"esri-button-menu__label",icon:"esri-button-menu__icon",item:"esri-button-menu__item",itemLabel:"esri-button-menu__item-label",itemLabelContent:"esri-button-menu__item-label-content",selectableMenuItem:"esri-button-menu__item--selectable",selectedMenuItem:"esri-button-menu__item--selected",checkbox:"esri-button-menu__checkbox",embeddedContentWrapper:"esri-button-menu__embedded-content-wrapper",button:"esri-button-menu__button",buttonSelected:"esri-button-menu__button--selected",defaultIconClass:"esri-icon-menu",widget:"esri-widget"};let b$5=class extends(a$4(z$1)){constructor(e,t){super(e,t),this._menuContentNode=null,this._popover=null,this._rootNode=null,this.iconClass=null,this.items=null,this.label=null,this.open=!1,this.viewModel=new i$2,this._handleOutsideClick=this._handleOutsideClick.bind(this);}postInitialize(){this._popover=new f$5({owner:this,open:!!this.open,placement:d$5(this.container)?"bottom-start":"bottom-end",renderContentFunction:this.renderMenuContent,anchorElement:this._rootNode}),this.handles.add([f$6(this,"open",(e=>this._popover.set("open",e)))]),document.addEventListener("click",this._handleOutsideClick);}destroy(){var e;null==(e=this._popover)||e.destroy(),this._popover=null,document.removeEventListener("click",this._handleOutsideClick);}_handleOutsideClick(e){var t,n;if(!this.open||!this._rootNode||!this._menuContentNode)return;const o=e.target;null!=(t=this._menuContentNode)&&t.contains(o)||null!=(n=this._rootNode)&&n.contains(o)||(this.open=!1);}render(){return n$3("div",{afterCreate:this._afterRootNodeCreate,bind:this,"data-node-ref":"_rootNode",class:this.classes(h.base,h.widget),key:"menu"},this.renderMenuButton())}renderMenuButton(){const{iconClass:e,id:t,label:n,open:o}=this,s=this.classes([h.button,e||h.defaultIconClass,o?h.buttonSelected:null]);return n$3("button",{"aria-pressed":o.toString(),"aria-controls":`${t}-menu`,"aria-expanded":o.toString(),"aria-haspopup":"true","aria-label":n,bind:this,class:s,id:`${t}-button`,title:n,selected:o,onclick:this._toggleOpen,tabindex:"0",type:"button"})}renderMenuContent(){var e;const{id:t,open:n}=this;return n$3("div",{afterCreate:this._afterMenuContentNodeCreate,bind:this,class:h.content,"data-node-ref":"_menuContentNode",key:"esri-button-menu-content",hidden:!n},n$3("ul",{"aria-labelledby":`${t}-button`,bind:this,class:h.itemWrapper,id:`${t}-menu`,role:"menu"},(null==(e=this.items)?void 0:e.length)&&this.renderItems()))}renderItems(){var e;return null==(e=this.items)?void 0:e.map(((e,t)=>this.renderItem(e,t)))}renderItem(e,t,n){var s;const i=r$1(n)?`${this.id}-menu-item-${t}-${n}`:`${this.id}-menu-item-${t}`,r=`${i}-label`,a=this.classes(h.item,e.selectionEnabled?h.selectableMenuItem:null,e.selectionEnabled&&e.selected?h.selectedMenuItem:null);return n$3("li",{afterCreate:this._afterMenuItemCreate,bind:this,class:a,"data-item-index":t,"data-item-subIndex":n,for:i,key:i,onkeydown:t=>this._handleMenuItemKeydown(t,e),onclick:t=>this._handleMenuItemInteraction(t,e),role:"menuitem",tabindex:"0"},n$3("input",{disabled:!0,checked:e.selected,class:h.checkbox,id:i,name:i,tabindex:"-1",type:"checkbox"}),n$3("label",{bind:this,class:this.classes(h.button,h.itemLabel),for:i,id:r},n$3("span",{class:this.classes(h.icon,e.iconClass),"aria-hidden":"true"}),n$3("span",{class:h.itemLabelContent},e.label)),n$3("ul",{"aria-labelledby":r,class:h.embeddedContentWrapper,id:`${this.id}-submenu`,role:"menu"},null==e||null==(s=e.items)?void 0:s.map(((e,n)=>this.renderItem(e,t,n)))))}_afterRootNodeCreate(e){var t;this._rootNode=e,null==(t=this._popover)||t.set("anchorElement",(()=>e));}_handleMenuItemInteraction(e,t){t.selected=!t.selected,t.open=!(!t.selected||!t.items),t.autoCloseMenu&&this.set("open",!1),t.clickFunction&&t.clickFunction({event:e,item:t}),e.stopPropagation();}_handleMenuItemKeydown(e,n){const o=i$7(e);y$4(o)&&this._handleMenuItemInteraction(e,n),"Escape"===o&&(this.open=!1,e.preventDefault(),e.stopPropagation());}_afterMenuContentNodeCreate(e){this._menuContentNode=e,e.focus();}_toggleOpen(){this.open=!this.open;}_afterMenuItemCreate(e){0===e["data-item-index"]&&e.focus();}};e$3([d$4()],b$5.prototype,"iconClass",void 0),e$3([o$1("viewModel.items")],b$5.prototype,"items",void 0),e$3([d$4()],b$5.prototype,"label",void 0),e$3([o$1("viewModel.open")],b$5.prototype,"open",void 0),e$3([d$4()],b$5.prototype,"viewModel",void 0),b$5=e$3([i$4("esri.widgets.FeatureTable.Grid.support.ButtonMenu")],b$5);const _$4=b$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d$2={sortAscIcon:"esri-icon-arrow-up",sortDescIcon:"esri-icon-arrow-down",menuContainer:"esri-column__menu-container",menuIcon:"esri-icon-handle-horizontal",sorter:"esri-column__sorter"},a$3={keyboardSort1:"Enter",keyboardSort2:"Spacebar"};let u$1=class extends(a$4(n$4.EventedAccessor)){constructor(t){super(t),this._menuContainer=null,this.activeRowIndex=null,this.autoWidth=!1,this.cellValueFormatFunction=({value:t})=>L$1.sanitize(t),this.flexGrow=1,this.footerRenderFunction=null,this.frozen=!1,this.grid=null,this.header=null,this.headerRenderFunction=t=>{const{root:e}=t,{header:o,headerMenuEnabled:n,path:i,sortable:r}=this;if(this.removeCellContent(e),r)return this.headerSorterRenderFunction(t),void(n&&this.headerMenuRenderFunction(t));n&&this.headerMenuRenderFunction(t);const s=o||i;e.innerHTML!==s&&(e.innerHTML=s);},this.headerMenuRenderFunction=({root:t})=>{var e,o;(null==(e=this.menu)||null==(o=e.items)?void 0:o.length)&&t.appendChild(this._menuContainer);},this.headerSorterRenderFunction=({root:t})=>{var e;const{header:o,path:n,sortElement:i}=this,r=o||n;if(!i)return void(t.innerHTML=r);i.innerHTML!==r&&i.setAttribute("innerHTML",r),t.appendChild(i);const s=null==(e=this.grid)?void 0:e.getSlotElementByName(t.slot),l=null==s?void 0:s.parentElement;l&&!l.onkeydown&&(l.onkeydown=({key:t})=>{t!==a$3.keyboardSort1&&t!==a$3.keyboardSort2||i.click();});},this.hidden=!1,this.headerMenuEnabled=!0,this.menu=null,this.menuConfig=null,this.messages=null,this.messagesCommon=null,this.renderFunction=({root:t,column:e,rowData:o})=>{const n=this.getCellValue(e,o),i=this.cellValueFormatFunction({column:e,rowData:o,value:n});t.innerHTML!==i&&(t.innerHTML=i);},this.resizable=!0,this.sortable=!0,this.sortElement=null,this.textAlign="start",this.width=200;}initialize(){const{messages:t,path:e}=this;this._set("sortElement",this.createSortElement()),this.sortElement.setAttribute("path",e),this._menuContainer=document.createElement("div"),this._menuContainer.classList.add(d$2.menuContainer),this.menu=new _$4({label:null==t?void 0:t.options,iconClass:d$2.menuIcon,...this.menuConfig}),this.menu.container=this._menuContainer,this.menu.set("items",this.getMenuItems()),this.handles.add([f$6(this,"hidden",(()=>{var t;return null==(t=this.menu)?void 0:t.set("open",!1)}))]);}destroy(){var t;null==(t=this.menu)||t.destroy();}set direction(t){this.sortable&&(this.sortElement&&(t?this.sortElement.direction!==t&&this.sortElement.setAttribute("direction",t):this.sortElement.removeAttribute("direction")),this._set("direction",t));}get direction(){return this._get("direction")||null}set path(t){this.sortElement&&this.sortElement.path!==t&&this.sortElement.setAttribute("path",t),this._set("path",t);}getMenuItems(){const{menuConfig:t,sortable:e}=this,o=null==t?void 0:t.items,n=this.getSortMenuItems(),i=[];return e&&i.push(...n),(null==o?void 0:o.length)&&i.push(...o),i.length?i:null}getSortMenuItems(){const{messages:t}=this;return [{selected:"asc"===this.direction,iconClass:d$2.sortAscIcon,label:null==t?void 0:t.sortAsc,autoCloseMenu:!0,clickFunction:()=>this.set("direction","asc"!==this.direction?"asc":null)},{selected:"desc"===this.direction,iconClass:d$2.sortDescIcon,label:null==t?void 0:t.sortDesc,autoCloseMenu:!0,clickFunction:()=>this.set("direction","desc"!==this.direction?"desc":null)}]}getCellValue(t,e){var o;return null!=(o=null==e?void 0:e.item[null==t?void 0:t.path])?o:""}createSortElement(){const{direction:t,header:e,path:o}=this,n=e||o,i=document.createElement("vaadin-grid-sorter");return i.classList.add(d$2.sorter),i.setAttribute("path",o),i.setAttribute("title",n),i.innerHTML=n,t&&i.setAttribute("direction",t),i.addEventListener("direction-changed",(()=>{this.direction!==i.direction&&this._set("direction",i.direction);})),i}removeCellContent(t){if(t)for(;t.firstChild;)try{t.removeChild(t.firstChild);}catch(e){}}};e$3([d$4()],u$1.prototype,"activeRowIndex",void 0),e$3([d$4()],u$1.prototype,"autoWidth",void 0),e$3([d$4()],u$1.prototype,"cellValueFormatFunction",void 0),e$3([d$4()],u$1.prototype,"direction",null),e$3([d$4()],u$1.prototype,"flexGrow",void 0),e$3([d$4()],u$1.prototype,"footerRenderFunction",void 0),e$3([d$4()],u$1.prototype,"frozen",void 0),e$3([d$4()],u$1.prototype,"grid",void 0),e$3([d$4()],u$1.prototype,"header",void 0),e$3([d$4()],u$1.prototype,"headerRenderFunction",void 0),e$3([d$4()],u$1.prototype,"headerMenuRenderFunction",void 0),e$3([d$4()],u$1.prototype,"headerSorterRenderFunction",void 0),e$3([d$4()],u$1.prototype,"hidden",void 0),e$3([d$4()],u$1.prototype,"headerMenuEnabled",void 0),e$3([d$4()],u$1.prototype,"menu",void 0),e$3([d$4()],u$1.prototype,"menuConfig",void 0),e$3([d$4()],u$1.prototype,"messages",void 0),e$3([d$4()],u$1.prototype,"messagesCommon",void 0),e$3([d$4()],u$1.prototype,"path",null),e$3([d$4()],u$1.prototype,"renderFunction",void 0),e$3([d$4()],u$1.prototype,"resizable",void 0),e$3([d$4()],u$1.prototype,"sortable",void 0),e$3([d$4({readOnly:!0})],u$1.prototype,"sortElement",void 0),e$3([d$4()],u$1.prototype,"textAlign",void 0),e$3([d$4()],u$1.prototype,"width",void 0),u$1=e$3([i$4("esri.widgets.FeatureTable.Grid.Column")],u$1);const c$1=u$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s={attachmentsColumn:"esri-feature-table__column--attachments"};let a$2=class extends c$1{constructor(t){super(t),this.header="",this.path="EsriFeatureTableAttachmentsColumn",this.renderFunction=({root:t,rowData:e})=>{const r=this._countFromItem(e.item).toString();t.innerHTML=`<div class="${s.attachmentsColumn}">${r}</div>`;},this.sortable=!1,this.textAlign="center";}_countFromItem(t){return t.attachments&&t.attachments.length||0}};e$3([d$4({constructOnly:!0})],a$2.prototype,"header",void 0),e$3([d$4({readOnly:!0})],a$2.prototype,"path",void 0),e$3([d$4()],a$2.prototype,"renderFunction",void 0),e$3([d$4({readOnly:!0})],a$2.prototype,"sortable",void 0),e$3([d$4({readOnly:!0})],a$2.prototype,"textAlign",void 0),a$2=e$3([i$4("esri.widgets.FeatureTable.AttachmentsColumn")],a$2);const n$2=a$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const g$2={type:"number"},b$4={type:"number",intlOptions:{notation:"scientific"}},_$3={type:"date",intlOptions:{day:"2-digit",month:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}};let F$2=class extends p$4{constructor(e){super(e),this.arcade=null,this.config=null,this.feature=null,this.field=null,this.initialFeature=null,this.layer=null,this.description=null,this.editorType=null,this.error=null,this.format=null,this.group=null,this.hint=null,this.messages=null,this.name=null;}get compiledFunc(){var e;const{arcade:t}=this;return t&&t.arcadeUtils.createFunction(null==(e=this.config)?void 0:e.visibilityExpression)}get compiledRequiredFunc(){var e;const{arcade:t}=this;return t&&t.arcadeUtils.createFunction(null==(e=this.config)?void 0:e.requiredExpression)}get evaluatedRequirement(){const e=this.compiledRequiredFunc;if(!e)return null;const{arcade:t}=this;return t.arcadeUtils.executeFunction(e,t.arcadeUtils.createExecContext(this.feature))}get evaluatedVisibility(){const e=this.compiledFunc;if(!e)return null;const{arcade:t}=this;return t.arcadeUtils.executeFunction(e,t.arcadeUtils.createExecContext(this.feature))}get domain(){var e,t;const{typeIdField:i}=this.layer,r=i===this.name,n=null==(e=this.field)?void 0:e.domain;if(r&&!n)return new u$4({name:"__internal-type-based-coded-value-domain__",codedValues:this.layer.types.map((({id:e,name:t})=>({code:e,name:t})))});const{feature:l}=this,s=i&&this.layer.getFieldDomain(this.name,{feature:l})||n,a=null==(t=this.config)?void 0:t.domain;return this._isDomainCompatible(a)?a:s}get editable(){var e;return this.layer.capabilities.operations.supportsEditing&&this.field.editable&&!1!==(null==(e=this.config)?void 0:e.editable)}get errorMessage(){return this._toErrorMessage()}get includeTime(){var e;const t=null==(e=this.config)?void 0:e.includeTime;return void 0===t||t}get label(){var e;return (null==(e=this.config)?void 0:e.label)||this.field.alias||this.field.name}get maxLength(){var e,t;const i=-1;if("date"===this.type)return i;const r=null==(e=this.field)?void 0:e.length,o=null==(t=this.config)?void 0:t.maxLength;return !isNaN(o)&&o>=i&&(r===i||o<=r)?o:r}get minLength(){var e,t;const i=-1;if("date"===this.type)return i;const r=null==(e=this.field)?void 0:e.length,o=null==(t=this.config)?void 0:t.minLength;return !isNaN(o)&&o>=i&&(r===i||o<=r)?o:i}get required(){var e,t;if(!this.editable)return !1;if(!(null==(e=this.field)?void 0:e.nullable))return !0;if("boolean"==typeof this.evaluatedRequirement)return this.evaluatedRequirement;return !0===(null==(t=this.config)?void 0:t.required)}get type(){const{field:e}=this;return B$1(e)?"number":H$1(e)?"text":K$1(e)?"date":"unsupported"}get valid(){const e=this.editable?this._validate():null;return this._set("error",e),null===e}get value(){return this._get("value")}set value(e){this.notifyChange("evaluatedVisibility"),this._set("value",e);}get visible(){if(this._isEditorField())return !1;return "boolean"==typeof this.evaluatedVisibility?this.evaluatedVisibility:!!this.config||this._shownByDefault()}_isDomainCompatible(e){const{field:t}=this;if("coded-value"===(null==e?void 0:e.type)){const i=typeof e.codedValues[0].code;if("string"===i&&H$1(t)||"number"===i&&B$1(t))return !0}return !!("range"===(null==e?void 0:e.type)&&B$1(t)||K$1(t))}_validate(){const{domain:e,field:t,initialFeature:i,minLength:r,required:o,type:l,valid:s,value:a}=this,u=o&&null===a,d=void 0!==s;return !u&&i.getAttribute(t.name)===a&&d?null:"text"===l&&r>-1&&"string"==typeof a&&a.length<r?"length-validation-error::too-short":e?null!==a||o?a$5(e,a):null:u?ee$1.INVALID_TYPE:ie$1(t,a)}_shownByDefault(){var e;const t=null==(e=this.field)?void 0:e.type;return "oid"!==t&&"global-id"!==t&&!this._isGeometryField()}_isEditorField(){return O$2(this.layer).indexOf(this.name)>-1}_isGeometryField(){return L$2(this.layer).indexOf(this.name)>-1}_toErrorMessage(){const{domain:e,field:t,messages:i,minLength:r,value:o,required:n,type:a}=this,u=this.error;if(n&&null===o)return i.validationErrors.cannotBeNull;if(u===e$5.VALUE_OUT_OF_RANGE||u===Z$1.OUT_OF_RANGE){const r=r$2(e)||re$1(t);return s$1(i.validationErrors.outsideRange,r,{format:{max:"date"===a?_$3:r.isInteger?g$2:b$4,min:"date"===a?_$3:r.isInteger?g$2:b$4}})}return u===e$5.INVALID_CODED_VALUE?i.validationErrors.invalidCodedValue:u===ee$1.INVALID_TYPE?i.validationErrors.invalidType:"length-validation-error::too-short"===u?s$1(i.validationErrors.tooShort,{min:r}):null}};e$3([d$4()],F$2.prototype,"arcade",void 0),e$3([d$4()],F$2.prototype,"compiledFunc",null),e$3([d$4()],F$2.prototype,"compiledRequiredFunc",null),e$3([d$4()],F$2.prototype,"config",void 0),e$3([d$4()],F$2.prototype,"evaluatedRequirement",null),e$3([d$4()],F$2.prototype,"evaluatedVisibility",null),e$3([d$4()],F$2.prototype,"feature",void 0),e$3([d$4()],F$2.prototype,"field",void 0),e$3([d$4()],F$2.prototype,"initialFeature",void 0),e$3([d$4()],F$2.prototype,"layer",void 0),e$3([d$4({aliasOf:"config.description"})],F$2.prototype,"description",void 0),e$3([d$4()],F$2.prototype,"domain",null),e$3([d$4()],F$2.prototype,"editable",null),e$3([d$4({aliasOf:"config.editorType"})],F$2.prototype,"editorType",void 0),e$3([d$4({readOnly:!0})],F$2.prototype,"error",void 0),e$3([d$4({dependsOn:["error","messages","value"]})],F$2.prototype,"errorMessage",null),e$3([d$4({aliasOf:"config.format"})],F$2.prototype,"format",void 0),e$3([d$4()],F$2.prototype,"group",void 0),e$3([d$4({aliasOf:"config.hint"})],F$2.prototype,"hint",void 0),e$3([d$4()],F$2.prototype,"includeTime",null),e$3([d$4()],F$2.prototype,"label",null),e$3([d$4()],F$2.prototype,"maxLength",null),e$3([d$4()],F$2.prototype,"minLength",null),e$3([d$4()],F$2.prototype,"messages",void 0),e$3([d$4({aliasOf:"field.name"})],F$2.prototype,"name",void 0),e$3([d$4()],F$2.prototype,"required",null),e$3([d$4()],F$2.prototype,"type",null),e$3([d$4()],F$2.prototype,"valid",null),e$3([d$4({value:null})],F$2.prototype,"value",null),e$3([d$4()],F$2.prototype,"visible",null),F$2=e$3([i$4("esri.widgets.FeatureForm.InputField")],F$2);const E$1=F$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$1={input:"esri-editor-column__cell-input",inputContainer:"esri-editor-column__cell-input--container"},a$1={showInput:"Enter",hideInput:"Escape"};let u=class extends c$1{constructor(t){super(t),this.activeEditInfo=null,this.cellValueValidatorFunction=({oldValue:t,value:e})=>t!==e,this.editable=!1,this.inputRenderFunction=({root:t,column:e,rowData:n})=>{var o,i;if(null!=(o=this.activeEditInfo)&&o.updating)return;if(!this.editable)return;const a=this.getCellValue(e,n),u=this.createInputElement({root:t,column:e,rowData:n,value:a});this._set("activeEditInfo",{column:e,input:u,root:t,rowData:n,updating:!0,oldValue:a});const r=this.createInputContainer();r.appendChild(u),this.removeCellContent(t),t.appendChild(r),u.focus(),u instanceof HTMLInputElement&&u.select(),null==(i=this.grid)||i.notifyResize();},this.loadingMessage="",this.inputType="text",this.maxLength=null,this.parseInputValueFunction=({input:t})=>t.value,this.renderFunction=t=>{var e;const{root:n,column:o,rowData:i}=t,{activeEditInfo:u}=this;if(u&&u.updating)return;const r=this.getCellValue(o,i),l=this.cellValueFormatFunction({column:o,rowData:i,value:r});n.onclick=()=>n.focus(),n.ondblclick=()=>this.inputRenderFunction(t),n.ontouchend=()=>this.inputRenderFunction(t);const s=null==(e=this.grid)?void 0:e.getSlotElementByName(n.slot),c=null==s?void 0:s.parentElement;c&&!c.onkeydown&&(c.onkeydown=e=>{e.key!==a$1.showInput||this.activeEditInfo||this.inputRenderFunction(t),e.key===a$1.hideInput&&this.activeEditInfo&&this.cancel();}),(null==l?void 0:l.toString())!==n.innerHTML&&(n.innerHTML=l);},this.required=!1,this.store=null,this.updateRowItemFunction=({rowData:t,column:e,value:n})=>{t.item[e.path]=n;},this.updateStoreItemFunction=({rowData:t,column:e,value:n})=>{var o;return null==(o=this.store)?void 0:o.updateItem({index:t.index,name:e.path,value:n})};}cancel(){var t;const{activeEditInfo:e}=this;if(!e)return;const{column:n,root:o,rowData:i,oldValue:a}=e;this._set("activeEditInfo",null);const u=this.cellValueFormatFunction({column:n,rowData:i,value:a});o.innerHTML=u,null==(t=this.grid)||t.notifyResize();}createInputContainer(){const t=document.createElement("div");return t.classList.add(i$1.inputContainer),t}createInputElement({value:t}){const e=document.createElement("input");return e.classList.add(i$1.input),e.maxLength=this.maxLength,e.type=this.inputType,e.value=t,e.onblur=()=>{e.onblur=null,this.submit();},e}async submit(){var t;const{activeEditInfo:e}=this;if(!e)return;const{column:n,input:o,root:i,rowData:a,oldValue:u}=e,r=this.parseInputValueFunction({input:o,column:n,rowData:a});if(!this.cellValueValidatorFunction({value:r,oldValue:u,column:n,rowData:a}))this.cancel();else {i.innerHTML=this.loadingMessage,null==(t=this.grid)||t.notifyResize();try{var l;await this.updateStoreItemFunction({rowData:a,column:n,value:r}),this.updateRowItemFunction({rowData:a,column:n,value:r});const t=this.getCellValue(n,a),e=this.cellValueFormatFunction({column:n,rowData:a,value:t});i.innerHTML=e,this.emit("value-change",{column:n,rowData:a,value:t}),this._set("activeEditInfo",null),null==(l=this.grid)||l.notifyResize();}catch(s){this.cancel();}}}};e$3([d$4({readOnly:!0})],u.prototype,"activeEditInfo",void 0),e$3([d$4()],u.prototype,"cellValueValidatorFunction",void 0),e$3([d$4()],u.prototype,"editable",void 0),e$3([d$4()],u.prototype,"inputRenderFunction",void 0),e$3([d$4({constructOnly:!0})],u.prototype,"loadingMessage",void 0),e$3([d$4()],u.prototype,"inputType",void 0),e$3([d$4()],u.prototype,"maxLength",void 0),e$3([d$4()],u.prototype,"parseInputValueFunction",void 0),e$3([d$4()],u.prototype,"renderFunction",void 0),e$3([d$4()],u.prototype,"required",void 0),e$3([d$4()],u.prototype,"store",void 0),e$3([d$4()],u.prototype,"updateRowItemFunction",void 0),e$3([d$4()],u.prototype,"updateStoreItemFunction",void 0),u=e$3([i$4("esri.widgets.FeatureTable.EditorColumn")],u);const r=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m$2=new Map([["ar",()=>import('./ar-224bfdcd.js').then(function (n) { return n.a; })],["ar-dz",()=>import('./ar-dz-c8d06610.js').then(function (n) { return n.a; })],["ar-kw",()=>import('./ar-kw-f81cf2ea.js').then(function (n) { return n.a; })],["ar-ly",()=>import('./ar-ly-f983c143.js').then(function (n) { return n.a; })],["ar-ma",()=>import('./ar-ma-b977d98f.js').then(function (n) { return n.a; })],["ar-sa",()=>import('./ar-sa-6ae3ec65.js').then(function (n) { return n.a; })],["ar-tn",()=>import('./ar-tn-b1e55ede.js').then(function (n) { return n.a; })],["bg",()=>import('./bg-7de0dbc1.js').then(function (n) { return n.b; })],["bs",()=>import('./bs-d545940b.js').then(function (n) { return n.b; })],["ca",()=>import('./ca-d105e30f.js').then(function (n) { return n.c; })],["cs",()=>import('./cs-5fcaacd8.js').then(function (n) { return n.c; })],["da",()=>import('./da-0cd0bfa6.js').then(function (n) { return n.d; })],["de",()=>import('./de-3cd631fe.js').then(function (n) { return n.d; })],["de-at",()=>import('./de-at-676349a9.js').then(function (n) { return n.d; })],["de-ch",()=>import('./de-ch-3a4104b4.js').then(function (n) { return n.d; })],["el",()=>import('./el-06bb4599.js').then(function (n) { return n.e; })],["en-au",()=>import('./en-au-6eb8fbcf.js').then(function (n) { return n.e; })],["en-ca",()=>import('./en-ca-23d256fb.js').then(function (n) { return n.e; })],["en-gb",()=>import('./en-gb-31b4fb3d.js').then(function (n) { return n.e; })],["en-ie",()=>import('./en-ie-2e2fd215.js').then(function (n) { return n.e; })],["en-il",()=>import('./en-il-49d955d7.js').then(function (n) { return n.e; })],["en-in",()=>import('./en-in-eb3f1d41.js').then(function (n) { return n.e; })],["en-nz",()=>import('./en-nz-298d6d9e.js').then(function (n) { return n.e; })],["en-sg",()=>import('./en-sg-90856fa8.js').then(function (n) { return n.e; })],["es",()=>import('./es-23ef341b.js').then(function (n) { return n.e; })],["es-do",()=>import('./es-do-1493db9b.js').then(function (n) { return n.e; })],["es-mx",()=>import('./es-mx-db3ea837.js').then(function (n) { return n.e; })],["es-us",()=>import('./es-us-3e5aec12.js').then(function (n) { return n.e; })],["et",()=>import('./et-6600dba5.js').then(function (n) { return n.e; })],["fi",()=>import('./fi-437e5024.js').then(function (n) { return n.f; })],["fr",()=>import('./fr-56ddcdeb.js').then(function (n) { return n.f; })],["fr-ca",()=>import('./fr-ca-f95a3ec4.js').then(function (n) { return n.f; })],["fr-ch",()=>import('./fr-ch-c360bfa8.js').then(function (n) { return n.f; })],["he",()=>import('./he-e6f01841.js').then(function (n) { return n.h; })],["hr",()=>import('./hr-01f379b3.js').then(function (n) { return n.h; })],["hu",()=>import('./hu-8d1d28dd.js').then(function (n) { return n.h; })],["id",()=>import('./id-43fe8e89.js').then(function (n) { return n.i; })],["it",()=>import('./it-77b3b3b3.js').then(function (n) { return n.i; })],["it-ch",()=>import('./it-ch-c62d3744.js').then(function (n) { return n.i; })],["ja",()=>import('./ja-9eae36f4.js').then(function (n) { return n.j; })],["ko",()=>import('./ko-fd1b428a.js').then(function (n) { return n.k; })],["lt",()=>import('./lt-10c89284.js').then(function (n) { return n.l; })],["lv",()=>import('./lv-481beda8.js').then(function (n) { return n.l; })],["nb",()=>import('./nb-ad1dac71.js').then(function (n) { return n.n; })],["nl",()=>import('./nl-d0e15851.js').then(function (n) { return n.n; })],["nl-be",()=>import('./nl-be-6cc64495.js').then(function (n) { return n.n; })],["pl",()=>import('./pl-3eb386ce.js').then(function (n) { return n.p; })],["pt",()=>import('./pt-6e069aeb.js').then(function (n) { return n.p; })],["pt-br",()=>import('./pt-br-cfec028e.js').then(function (n) { return n.p; })],["ro",()=>import('./ro-f4324030.js').then(function (n) { return n.r; })],["ru",()=>import('./ru-bd54d6e9.js').then(function (n) { return n.r; })],["sk",()=>import('./sk-afed9391.js').then(function (n) { return n.s; })],["sl",()=>import('./sl-5b570621.js').then(function (n) { return n.s; })],["sr",()=>import('./sr-9343b521.js').then(function (n) { return n.s; })],["sr-cyrl",()=>import('./sr-cyrl-5bb5c5da.js').then(function (n) { return n.s; })],["sv",()=>import('./sv-7ffcc41f.js').then(function (n) { return n.s; })],["th",()=>import('./th-2d9119ef.js').then(function (n) { return n.t; })],["tr",()=>import('./tr-8418ff30.js').then(function (n) { return n.t; })],["uk",()=>import('./uk-3363dbb0.js').then(function (n) { return n.u; })],["vi",()=>import('./vi-b6780f1e.js').then(function (n) { return n.v; })],["zh-cn",()=>import('./zh-cn-4346fe42.js').then(function (n) { return n.z; })],["zh-hk",()=>import('./zh-hk-e4946354.js').then(function (n) { return n.z; })],["zh-mo",()=>import('./zh-mo-3b570d4d.js').then(function (n) { return n.z; })],["zh-tw",()=>import('./zh-tw-510be4c6.js').then(function (n) { return n.z; })]]);async function e$2(e=i$8()){const t=(await import('./moment-76c7e8c4.js').then(function (n) { return n.m; })).default;e=e.toLowerCase();let l=m$2.has(e);if(!l){const o=e.split("-");o.length>1&&m$2.has(o[0])&&(e=o[0],l=!0);}return l?await m$2.get(e)():e="en",e!==t.locale()&&t.locale(e),t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(t,e){const o=T$1(e),i=Date.now(),l=o.formatToParts(i),c=new Set;l.filter((({type:t})=>"literal"===t)).forEach((({value:t})=>c.add(t)));let f=0;const s={};for(;l.length>0;){const{type:r,value:e}=l.shift();for(let o=0;o<e.length;o++,f++){const e=t.charAt(f);if(c.has(e)){f++;break}if("literal"===r)break;s[r]||(s[r]=[]),s[r].push(e);}}const g={};try{g.day=n$1(s.day.join("")),g.month=n$1(s.month.join(""))-1,g.year=n$1((s.year||s.relatedYear).join(""));}catch(h){throw a(e)}if(isNaN(g.day)||isNaN(g.month)||isNaN(g.year))throw a(e);return g}function n$1(t){const r=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g];for(let e=0;e<10;e++)t=t.replace(r[e],e.toString());return Number(t)}function a(r){return new s$2(`could not parse date input, expecting the following format: ${L$3(Date.now(),r)}`)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$2=class extends p$4{constructor(){super(...arguments),this.state="ready",this.value=new Date;}};e$3([d$4()],t$2.prototype,"state",void 0),e$3([d$4()],t$2.prototype,"value",void 0),t$2=e$3([i$4("esri.widgets.support.MomentElementViewModel")],t$2);const p$2=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e$1=class extends p$2{constructor(r){super(r);}};e$1=e$3([i$4("esri.widgets.support.DatePickerViewModel")],e$1);const t$1=e$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const b$3={base:"esri-date-picker",datePicker:"esri-date-picker__calendar",monthPicker:"esri-date-picker__month-picker",dayPicker:"esri-date-picker__day-picker",week:"esri-date-picker__week-item",nearbyMonth:"esri-date-picker__day-item--nearby-month",activeDay:"esri-date-picker__day-item--active",today:"esri-date-picker__day-item--today",selectedDay:"esri-date-picker__day-item--selected",day:"esri-date-picker__day-item",dayHeader:"esri-date-picker__day-item--header",yearPicker:"esri-date-picker__year-picker",selectedYear:"esri-date-picker__year-picker-item--selected",year:"esri-date-picker__year-picker-item",monthDropdown:"esri-date-picker__month-dropdown",date:"esri-date-picker__date",datePickerToggle:"esri-date-picker__calendar-toggle",dateInput:"esri-date-picker__input",dateTextInput:"esri-date-picker__text-input",leadingIcon:"esri-date-picker__icon--leading",previousIcon:"esri-icon-left",nextIcon:"esri-icon-right",calendarIcon:"esri-icon-calendar",widget:"esri-widget",button:"esri-widget--button",input:"esri-input",select:"esri-select"},f$4={year:"numeric",month:"2-digit",day:"2-digit"},M$2=[" ","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","End","Enter","Home","PageDown","PageUp"],P$1="esri.widgets.support.DatePicker",O$1=s$3.getLogger(P$1);let I$1=class extends z$1{constructor(e,t){super(e,t),this._activeDate=null,this._calendarNode=null,this._calendarPopover=new f$5({owner:this,placement:"bottom-start",anchorElement:()=>this._rootNode,renderContentFunction:this._renderCalendar}),this._inputOrButtonNode=null,this._isOpen=!1,this._requestDayPickerFocusOnCreate=!1,this._rootNode=null,this.dateInputEnabled=!1,this.label=void 0,this.messages=null,this.value=null,this.commitOnMonthChange=!1,this.viewModel=new t$1,this._toggle=this._toggle.bind(this);}initialize(){this.own(i$9((()=>{var e;return {viewModel:this.viewModel,value:null==(e=this.viewModel)?void 0:e.value}}),(({viewModel:e,value:t})=>{this.destroyed||!e||t$3(this.onChange)||this.onChange(t);}),m$4));}async loadLocale(){this._moment=await e$2(),this._isOpen&&(this._activeDate=this._moment(this._activeDate.toDate()));}destroy(){this._calendarPopover.destroy();}render(){return n$3("div",{afterCreate:g$3,bind:this,class:this.classes(b$3.base,b$3.widget),"data-node-ref":"_rootNode"},this.dateInputEnabled?this.renderInputAndButtonMode():this.renderButtonOnlyMode())}renderButtonOnlyMode(){const e=L$3(this.viewModel.value,f$4),{_isOpen:t,messages:a}=this;return n$3("div",{afterCreate:g$3,"aria-controls":t?this._getCalendarId():null,"aria-expanded":t.toString(),"aria-haspopup":"true","aria-label":a.setDate,"aria-pressed":t.toString(),bind:this,class:this.classes(b$3.button,b$3.select,b$3.datePickerToggle),"data-node-ref":"_inputOrButtonNode",onclick:this._toggle,onkeydown:this._handleDateButtonKeyDown,role:"button",tabIndex:0},n$3("span",{class:b$3.date},e))}renderInputAndButtonMode(){const e=L$3(this.viewModel.value,f$4),{_isOpen:t,messages:a}=this;return n$3("div",{class:this.classes(b$3.dateInput)},n$3("input",{afterCreate:g$3,"data-node-ref":"_inputOrButtonNode","aria-controls":t?this._getCalendarId():null,"aria-haspopup":"true","aria-label":a.setDate,bind:this,class:this.classes(b$3.dateTextInput,b$3.input),key:"date-input",onblur:this._handleDateInputBlur,onclick:this._handleDateInputClick,onkeydown:this._handleDateInputKeyDown,type:"text",value:e}),n$3("span",{"aria-hidden":"true",class:this.classes(b$3.leadingIcon,b$3.calendarIcon)}))}_handleDateInputClick(){this._open(this.viewModel.value,!1);}_handleDateInputKeyDown(e){const{key:t}=e;this._isOpen?"Enter"===t?this._handleDateText(e):"Escape"===t&&this._close():"ArrowDown"===t&&(this._open(this.viewModel.value),e.preventDefault());}_handleDateButtonKeyDown(e){const{key:t,shiftKey:a}=e;this._isOpen&&"Tab"===t&&a?this._close():y$4(t)&&this._toggle();}_handleDateInputBlur(e){this._isOpen||this._handleDateText(e);}_handleDateText(e){const t=e.currentTarget;let a;try{a=o(t.value,f$4);}catch(s){return O$1.warn(s),void(t.value=L$3(this.viewModel.value,f$4))}const i=this._moment(a);i.isValid()?(this.viewModel.value=i.toDate(),this._activeDate=i):t.value=L$3(this.viewModel.value,f$4);}_handleDatePickerKeydown(e){"Escape"===i$7(e)&&(this._close(),e.preventDefault(),e.stopPropagation());}_renderCalendar(){const e=this._activeDate,t=this._moment(this.viewModel.value);return n$3("div",{afterCreate:g$3,bind:this,class:this.classes(b$3.datePicker,b$3.widget),"data-node-ref":"_calendarNode",id:this._getCalendarId(),key:"esri-date-picker__calendar",onkeydown:this._handleDatePickerKeydown},this._renderMonthPicker(e),this._renderDayPicker(e,t),this._renderYearPicker(e))}_getCalendarId(){return `date-picker__calendar--${this.id}`}_renderMonthPicker(e){const t=d$5(this.container),a=t?b$3.nextIcon:b$3.previousIcon,i=t?b$3.previousIcon:b$3.nextIcon,s=this._moment.months().map(((t,a)=>{const i=e.month()===a;return n$3("option",{selected:i},t)})),{messages:r}=this;return n$3("div",{class:b$3.monthPicker},n$3("div",{"aria-label":r.goToPreviousMonth,bind:this,class:b$3.button,onclick:this._setPreviousMonth,onkeydown:this._handlePreviousMonthKeyDown,role:"button",tabIndex:0,title:r.goToPreviousMonth},n$3("span",{"aria-hidden":"true",class:a})),n$3("select",{"aria-live":"assertive","aria-label":r.selectMonth,bind:this,class:this.classes(b$3.monthDropdown,b$3.select),id:`${this.id}__month-picker`,onchange:this._setMonth,onkeydown:this._setMonth,title:r.selectMonth},s),n$3("div",{"aria-label":r.goToNextMonth,bind:this,class:b$3.button,onclick:this._setNextMonth,onkeydown:this._setNextMonth,role:"button",tabIndex:0,title:r.goToNextMonth},n$3("span",{"aria-hidden":"true",class:i})))}_renderDayPicker(e,t){const a=e.clone().day(this._moment.localeData().firstDayOfWeek()),i=this._getWeekLabels(a),s=this._getDayId(e),r=this._renderMonth(e,t);return n$3("div",{afterCreate:this._handleDayPickerCreate,"aria-activedescendant":s,"aria-labelledby":`${this.id}__month-picker ${this.id}__selected-year`,bind:this,class:b$3.dayPicker,id:`${this.id}__day-picker`,onkeydown:this._handleDayPickerKeydown,role:"grid",tabIndex:0},n$3("div",{class:b$3.week,role:"row"},i.map((e=>n$3("div",{"aria-label":e.name,class:this.classes(b$3.day,b$3.dayHeader),role:"columnheader",title:e.name},e.abbr)))),r)}_getDayId(e){return `${this.id}__${L$3(e.valueOf(),f$4)}`}_handleDayPickerCreate(e){this._requestDayPickerFocusOnCreate&&(this._requestDayPickerFocusOnCreate=!1,e.focus());}_getWeekLabels(e){const t=[],a={weekday:"long"},i={weekday:"narrow"};for(let s=0;s<7;s++)t.push({name:L$3(e.valueOf(),a),abbr:L$3(e.valueOf(),i)}),e.add(1,"day");return t}_handleDayPickerKeydown(e){const{ctrlKey:a,shiftKey:i}=e,s=i$7(e),r=this._activeDate;if(-1!==M$2.indexOf(s)){if("ArrowLeft"===s)r.subtract(1,"day");else if("ArrowRight"===s)r.add(1,"day");else if("ArrowUp"===s)r.subtract(1,"week");else if("ArrowDown"===s)r.add(1,"week");else if("PageUp"===s){const e=i?"year":"month";r.subtract(1,e);}else if("PageDown"===s){const e=i?"year":"month";r.add(1,e);}else if("Home"===s){const e=a?"year":"month";r.startOf(e);}else if("End"===s){const e=a?"year":"month";r.endOf(e);}else y$4(s)&&(this.viewModel.value=r.toDate(),this._close());e.preventDefault(),e.stopPropagation();}}_renderMonth(e,t){const a=this._moment(),i=e.clone().startOf("month"),s=e.clone().endOf("month"),r=6,o=7,n=i.clone().subtract(i.weekday(),"day"),d=[];for(let l=0;l<r;l++){const r=[];for(let d=0;d<o;d++){const o=n.date(),d=n.isSame(e,"day"),l=n.isSame(t,"day"),c=this._getDayId(n),h={[b$3.nearbyMonth]:!n.isBetween(i,s,null,"[]"),[b$3.today]:n.isSame(a,"day"),[b$3.activeDay]:d,[b$3.selectedDay]:l};r.push(n$3("div",{"aria-label":o.toString(),"aria-selected":d.toString(),bind:this,class:this.classes(b$3.day,h),"data-iso-date":n.toISOString(),id:c,onclick:this._handleSelectedDate,onkeydown:this._handleSelectedDate,role:"gridcell"},o)),n.add(1,"day");}d.push(n$3("div",{class:b$3.week,role:"row"},r));}return d}_renderYearPicker(e){const t={year:"numeric"},a=e.clone(),i=L$3(a.valueOf(),t),s=L$3(a.add(1,"year").valueOf(),t),r=L$3(a.subtract(2,"year").valueOf(),t),{messages:o}=this;return n$3("div",{class:b$3.yearPicker},n$3("div",{"aria-label":o.goToPreviousYear,bind:this,class:b$3.year,onclick:this._setPreviousYear,onkeydown:this._setPreviousYear,tabIndex:0,title:o.goToPreviousYear},r),n$3("div",{class:this.classes(b$3.year,b$3.selectedYear),id:`${this.id}__selected-year`},i),n$3("div",{"aria-label":o.goToNextYear,bind:this,class:b$3.year,onclick:this._setNextYear,onkeydown:this._handleNextYearKeyDown,tabIndex:0,title:o.goToNextYear},s))}_toggle(){this._isOpen?this._close():this._open(this.viewModel.value);}_setMonth(e){const t=e.target.value;this._activeDate.month(t),this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toDate());}_close(e=!0){this._activeDate=null,this._isOpen=!1,this._calendarPopover.open=!1,this.pageClickHandler.pause(),e&&this._inputOrButtonNode.focus();}_open(e,t=!0){this._activeDate=this._moment(e),this._isOpen=!0,this._calendarPopover.open=!0,this._requestDayPickerFocusOnCreate=t,this.pageClickHandler||(this.pageClickHandler=n$5(document,"click",(({target:e})=>{var t,a;(null==(t=this._calendarNode)?void 0:t.contains(e))||(null==(a=this._rootNode)?void 0:a.contains(e))||this._close();})),this.own(this.pageClickHandler)),this.pageClickHandler.resume();}_setPreviousMonth(){this._activeDate.subtract(1,"month"),this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toDate());}_handlePreviousMonthKeyDown(e){if("Tab"===e.key&&e.shiftKey)return e.preventDefault(),void this._close();y$4(e.key)&&this._setPreviousMonth();}_setNextMonth(){this._activeDate.add(1,"month"),this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toDate());}_setPreviousYear(){this._activeDate.subtract(1,"year");}_setNextYear(){this._activeDate.add(1,"year");}_handleNextYearKeyDown(e){if("Tab"===e.key&&!e.shiftKey)return e.preventDefault(),void this._close();y$4(e.key)&&this._setNextYear();}_handleSelectedDate(e){const t=e.target;this.viewModel.value=this._moment(t.getAttribute("data-iso-date")).toDate(),this._close();}};e$3([d$4()],I$1.prototype,"dateInputEnabled",void 0),e$3([d$4({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],I$1.prototype,"label",void 0),e$3([d$4(),e$6("esri/widgets/support/t9n/DatePicker")],I$1.prototype,"messages",void 0),e$3([o$1("viewModel.value")],I$1.prototype,"value",void 0),e$3([d$4()],I$1.prototype,"commitOnMonthChange",void 0),e$3([d$4({type:t$1})],I$1.prototype,"viewModel",void 0),e$3([d$4()],I$1.prototype,"onChange",void 0),e$3([t$4()],I$1.prototype,"_setNextMonth",null),e$3([t$4()],I$1.prototype,"_setPreviousYear",null),e$3([t$4()],I$1.prototype,"_handleSelectedDate",null),I$1=e$3([i$4(P$1)],I$1);const x$1=I$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends p$2{constructor(r){super(r);}};e=e$3([i$4("esri.widgets.support.TimePickerViewModel")],e);const t=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l={base:"esri-time-picker esri-widget",timePicker:"esri-time-picker__date-picker",timePickerInput:"esri-time-picker__input",input:"esri-input",button:"esri-widget--button"},m$1={hour:"numeric",minute:"numeric"},p$1="LT",d$1=["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","Tab"];function _$2(t){return L$3(t.valueOf(),m$1).indexOf(" ")>-1}let v$3=class extends z$1{constructor(t$1,e){super(t$1,e),this._activeTime=null,this.label=void 0,this.messages=null,this.value=null,this.viewModel=new t;}async loadLocale(){this._moment=await e$2();}render(){const t=this._activeTime||this.viewModel.value;return n$3("div",{class:l.base},n$3("input",{afterUpdate:this._handleInputUpdate,"aria-label":this.messages.inputTitle,bind:this,class:this.classes(l.timePickerInput,l.input),onblur:this._handleInputBlur,onfocus:this._handleInputFocus,onkeydown:this._handleInputKeydown,oninput:this._handleInputKeydown,onclick:this._handleInputClick,onpaste:this._handleInputPaste,onwheel:this._handleInputWheel,value:L$3(t.valueOf(),m$1)}))}_handleInputBlur(){this._activeTime.isValid()&&(this.viewModel.value=this._activeTime.toDate()),this._activeTime=null,this._activePart=null;}_handleInputUpdate(t){this._selectPart(t,this._activePart);}_selectPart(t,e){const i=this._activeTime;if(!i)return;const s=L$3(i.valueOf(),m$1),r=0,a=s.indexOf(":");if("hours"===e)return void t.setSelectionRange(r,a);const o=a+1,n=o+2;if("minutes"===e)return void t.setSelectionRange(o,n);const u=n+1,h=s.length;"meridiem"!==e||t.setSelectionRange(u,h);}_handleInputFocus(t){this._activePart="hours",this._activeTime=this._moment(this.viewModel.value).startOf("minute"),this._selectPart(t.target,"hours");}_caretIndexToPartName(t){const e=this._activeTime.format(p$1),i=e.indexOf(":"),s=e.indexOf(" ");return t<=i?"hours":t>i&&t<=s?"minutes":"meridiem"}_handleInputKeydown(t){const{ctrlKey:i,metaKey:s,shiftKey:r}=t,a=i$7(t),o=this._activeTime,n=this._activePart,u=/\d/.test(a),h=/^a|p$/i.test(a),c=s||i;if(d$1.indexOf(a)>-1||u||"meridiem"===n&&h&&!c){if("ArrowLeft"===a)this._activePart=this._prevPart();else if("ArrowRight"===a)this._activePart=this._nextPart();else if("Tab"===a){const t=r?this._prevPart():this._nextPart();if(t===this._activePart)return;this._activePart=t;}else if("ArrowUp"===a)this._shift("up",o,n);else if("ArrowDown"===a)this._shift("down",o,n);else if(u)this._setTime(o,n,Number(a));else if(h){const t=a.toLowerCase(),e=o.hour();("a"===t&&e>=12||"p"===t&&e<12)&&this._shift("up",o,n);}t.preventDefault(),t.stopImmediatePropagation();}else c||(t.preventDefault(),t.stopImmediatePropagation());}_handleInputClick(t){const e=t.target;this._activePart=null,this.renderNow(),this._activePart=this._caretIndexToPartName(e.selectionStart);}_getOrderedParts(){return _$2(this._activeTime)?["hours","minutes","meridiem"]:["hours","minutes"]}_prevPart(){const t=this._getOrderedParts(),e=t.indexOf(this._activePart)-1;return t[Math.max(e,0)]}_nextPart(){const t=this._getOrderedParts(),e=t.indexOf(this._activePart)+1;return t[Math.min(e,t.length-1)]}_setTime(t,e,i){if("hours"===e){const e=_$2(t)?12:24,s=""+t.hour()%e,r=i,a=Number(`${s}${i}`);2===s.length||a>e?t.hour(r):a<=e&&t.hour(a);}else if("minutes"===e){const e=59,s=`${t.minute()}`,r=i,a=Number(`${s}${i}`);2===s.length||a>e?t.minute(r):a<e&&t.minute(a);}}_handleInputPaste(t){const e=t.clipboardData.getData("text/plain"),i=this._moment(e);i.isValid()&&(this._activeTime=i),t.preventDefault(),t.stopImmediatePropagation();}_handleInputWheel(t){const e=t.deltaY<0?"up":"down";this._shift(e,this._activeTime,this._activePart);}_shift(t,e,i){if(!t||!e||!i)return;const s="meridiem"===i?12:1,r="hours"===i?"hour":"minutes"===i?"minute":"hours";e["up"===t?"add":"subtract"](s,r);}};e$3([d$4({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],v$3.prototype,"label",void 0),e$3([d$4(),e$6("esri/widgets/support/t9n/TimePicker")],v$3.prototype,"messages",void 0),e$3([o$1("viewModel.value")],v$3.prototype,"value",void 0),e$3([d$4({type:t})],v$3.prototype,"viewModel",void 0),v$3=e$3([i$4("esri.widgets.support.TimePicker")],v$3);const f$3=v$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f$2={cancelEdit:"Escape"},v$2={headerContent:"esri-field-column__header-content",input:"esri-field-column__cell-input",inputContainer:"esri-field-column__cell__input-container",dateInputContainer:"esri-field-column__cell__date-input-container",dateInputWrapper:"esri-field-column__cell__date-input-wrapper",button:"esri-field-column__button",saveIcon:"esri-icon-save",trashIcon:"esri-icon-trash",locked:"esri-icon-locked"},g$1=S$1("short-date-short-time"),y$3=S$1("short-date"),b$2=u$5({digitSeparator:!0,places:null});function _$1(e){return "feature"===(null==e?void 0:e.type)}let F$1=class extends r{constructor(e){super(e),this._inputField=null,this.alias=null,this.cellValueFormatFunction=({rowData:e,value:t})=>{if(this.formatFunction){const{config:e,field:n}=this;return this.formatFunction({config:e,field:n,value:L$1.sanitize(t)})}if(null===t)return "&nbsp;";const{config:n,field:r,type:s}=this,{item:{feature:d}}=e,c=this._getDomainForFeature(d);if(c)return this._getComputedDomain(t,c);if("date"===s){var p;const e=null!=n&&null!=(p=n.format)&&p.dateFormat?S$1(n.format.dateFormat):!1===(null==n?void 0:n.includeTime)?y$3:g$1,o=_$1(this.layer)&&this.layer.datesInUnknownTimezone?{timeZone:"UTC"}:null;return t?L$3(t,{...e,...o}):null}if(B$1(r)){const e=null!=n&&n.format?u$5(n.format):b$2;return m$5(parseFloat(t),e)}return L$1.sanitize(t)},this.cellValueValidatorFunction=({oldValue:e,value:t})=>e!==t,this.config=null,this.defaultValue=null,this.description=null,this.editingEnabled=!1,this.field=null,this.formatFunction=null,this.headerRenderFunction=e=>{const{root:t}=e,{editable:n,editingEnabled:i,headerMenuEnabled:l,sortable:o}=this;if(this.removeCellContent(t),t.classList.add(v$2.headerContent),i&&!n&&t.appendChild(this.createLockedElement()),o)this.headerSorterRenderFunction(e);else {const{header:e,path:n}=this,i=document.createElement("div");i.innerHTML=e||n,t.appendChild(i);}l&&this.headerMenuRenderFunction(e);},this.inputRenderFunction=({root:e,column:t,rowData:n})=>{var i,l;if(null!=(i=this.activeEditInfo)&&i.updating)return;if(!this.editable)return;const o=this.getCellValue(t,n),a=this.createInputElement({root:e,column:t,rowData:n,value:o});if(this._set("activeEditInfo",{column:t,input:a,root:e,rowData:n,updating:!0,oldValue:o}),"date"===this.type)return void this._renderDateEditors(o,e,a);const r=this.createInputContainer();r.appendChild(a),this.removeCellContent(e),e.appendChild(r),a.focus(),a instanceof HTMLInputElement&&a.select(),null==(l=this.grid)||l.notifyResize();},this.layer=null,this.menuConfig=null,this.name=null,this.nullable=!0,this.parseInputValueFunction=({input:e})=>{const t=this._inputField,n=e.value,{required:i,type:l}=t;return i||""!==n?"number"===l||"date"===l?parseFloat(n):n:null},this.type=null,this.updateRowItemFunction=({rowData:e,column:t,value:n})=>{e.item.feature.attributes[t.path]=n;};}get editable(){var e,t,n;return this.editingEnabled?this.config?!1!==this.config.editable&&(null==(t=this.field)?void 0:t.editable):null==(n=this.field)?void 0:n.editable:!!this.config&&(!0===this.config.editable&&(null==(e=this.field)?void 0:e.editable))}get header(){var e;return (null==(e=this.config)?void 0:e.label)||this.alias||this.path||null}get hidden(){const{config:e}=this;return !1===(null==e?void 0:e.visible)||this._get("hidden")||!1}set hidden(e){this._set("hidden",e);}get loadingMessage(){var e;return (null==(e=this.messages)?void 0:e.loading)||"..."}get maxLength(){var e,t;const n=null==(e=this.field)?void 0:e.length,i=null==(t=this.config)?void 0:t.maxLength;return !isNaN(i)&&i>=-1&&(-1===n||i<=n)?i:n}get path(){var e;return (null==(e=this.field)?void 0:e.name)||null}get required(){const e=this.get("field.nullable"),t=this.get("config.required");return this.editable&&(!e||!0===t)}get sortable(){var e;return !1!==(null==(e=this.config)?void 0:e.sortable)}createInputElement({rowData:e,value:t}){const{item:n}=e;if(!n||!n.feature)return null;this._inputField=this._setUpInputField(n.feature,t);const{field:i,maxLength:l,required:o}=this,{domain:a}=this._inputField;let r=null;"coded-value"===(null==a?void 0:a.type)?(r=this._createSelectElement(t,a.codedValues.map((({code:e,name:t})=>({value:e,name:t}))),this._inputField),r.onchange=()=>{r.onblur=null,d();}):(r=document.createElement("input"),r.type=B$1(i)?"number":"text",l>-1&&(r.maxLength=l)),r.classList.add(v$2.input),r.value=t,r.required=o;let s=!1;r.onkeydown=e=>{s=e.key===f$2.cancelEdit;},r.onblur=()=>{r.onblur=null,d();};const d=()=>{s?this.cancel():this.submit(),this._inputField=null;};return r}createInputContainer(){const e=document.createElement("div");return e.classList.add(v$2.inputContainer),e}createLockedElement(){const e=document.createElement("div");return e.classList.add(v$2.locked),e}getCellValue({path:e},{item:t}){var n,i,l;return null!=(n=null==t||null==(i=t.feature)||null==(l=i.attributes)?void 0:l[e])?n:null}_renderDateEditors(e,t,n){var i;const{config:l,messagesCommon:o}=this,a=e?new Date(e):new Date(Date.now()),r=new x$1({dateInputEnabled:!0,value:a}),u=new f$3({value:a});n.value=a.getTime().toString();let s=!e;const d=()=>{s=!0;const e=this._getCombinedDateTime(r.value,u.value);n.value=e.getTime().toString();},c=()=>{s?this.submit():this.cancel();},h=()=>{n.value=null,this.submit();};r.watch("value",(()=>d())),u.watch("value",(()=>d()));const f=document.createElement("div"),g=document.createElement("div");r.container=f,u.container=g;const y=document.createElement("button");y.classList.add(v$2.button,v$2.saveIcon),y.onclick=()=>c(),y.title=null==o?void 0:o.save;const b=document.createElement("button");b.classList.add(v$2.button,v$2.trashIcon),b.onclick=()=>h(),b.title=null==o?void 0:o.clear;const _=document.createElement("div");_.classList.add(v$2.dateInputWrapper),_.appendChild(f),!1!==l.includeTime&&_.appendChild(g);const F=document.createElement("div");F.classList.add(v$2.dateInputContainer),F.appendChild(_),F.appendChild(y),F.appendChild(b),r.when((()=>{var e;return null==(e=this.grid)?void 0:e.notifyResize()})),u.when((()=>{var e;return null==(e=this.grid)?void 0:e.notifyResize()})),this.removeCellContent(t),t.appendChild(F),null==(i=this.grid)||i.notifyResize();}_createSelectElement(e,t,n){let i=!1;const l=t.map((t=>{t.value===e&&(i=!0);const n=document.createElement("option");return n.text=t.name,n.value=t.value,n}));if(null!=e&&""!==e&&!i){const t=document.createElement("option");t.text=e,t.value=e,l.unshift(t);}if(!n.required&&null==n.value){const e=document.createElement("option");e.value="",l.unshift(e);}const o=document.createElement("select");return l.forEach((e=>o.add(e))),o.value=e,o}_setUpInputField(e,t){const{config:n,field:i,layer:l}=this,o=new E$1({config:n,feature:e,field:i,layer:l,group:null,messages:null});return o.set("value",t),o}_isDomainCompatible(e){const{field:t}=this;if(e&&"coded-value"===e.type){const n=typeof e.codedValues[0].code;if("string"===n&&H$1(t)||"number"===n&&B$1(t))return !0}return !(!e||"range"!==e.type||!B$1(t))}_getDomainForFeature(e){const{layer:t,name:n}=this;if("wfs"===t.type||"geojson"===t.type)return null;const{typeIdField:i}=t,l=i===n,o=this.get("field.domain");if(l&&!o)return new u$4({name:"__internal-type-based-coded-value-domain__",codedValues:t.types.map((({id:e,name:t})=>({code:e,name:t})))});const a=i&&t.getFieldDomain(n,{feature:e})||o,u=this.get("config.domain");return this._isDomainCompatible(u)?u:a}_getComputedDomain(e,t){if(!t)return null;if("range"===t.type)return e;if("coded-value"===t.type){const n=t.codedValues.filter((t=>t.hasOwnProperty("code")&&t.code===e));return n&&n.length?n[0].name:e}return null}_getCombinedDateTime(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes(),t.getSeconds())}};e$3([d$4({readOnly:!0,aliasOf:"field.alias"})],F$1.prototype,"alias",void 0),e$3([d$4()],F$1.prototype,"cellValueFormatFunction",void 0),e$3([d$4()],F$1.prototype,"cellValueValidatorFunction",void 0),e$3([d$4()],F$1.prototype,"config",void 0),e$3([d$4({readOnly:!0,aliasOf:"field.defaultValue"})],F$1.prototype,"defaultValue",void 0),e$3([d$4({readOnly:!0,aliasOf:"field.description"})],F$1.prototype,"description",void 0),e$3([d$4({readOnly:!0})],F$1.prototype,"editable",null),e$3([d$4()],F$1.prototype,"editingEnabled",void 0),e$3([d$4()],F$1.prototype,"field",void 0),e$3([d$4()],F$1.prototype,"formatFunction",void 0),e$3([d$4({readOnly:!0})],F$1.prototype,"header",null),e$3([d$4()],F$1.prototype,"hidden",null),e$3([d$4()],F$1.prototype,"headerRenderFunction",void 0),e$3([d$4()],F$1.prototype,"inputRenderFunction",void 0),e$3([d$4()],F$1.prototype,"layer",void 0),e$3([d$4({readOnly:!0})],F$1.prototype,"loadingMessage",null),e$3([d$4()],F$1.prototype,"maxLength",null),e$3([d$4({readOnly:!0,aliasOf:"config.menuConfig"})],F$1.prototype,"menuConfig",void 0),e$3([d$4({readOnly:!0,aliasOf:"field.name"})],F$1.prototype,"name",void 0),e$3([d$4({readOnly:!0,aliasOf:"field.nullable"})],F$1.prototype,"nullable",void 0),e$3([d$4()],F$1.prototype,"parseInputValueFunction",void 0),e$3([d$4({readOnly:!0})],F$1.prototype,"path",null),e$3([d$4({readOnly:!0})],F$1.prototype,"required",null),e$3([d$4()],F$1.prototype,"sortable",null),e$3([d$4({readOnly:!0,aliasOf:"field.type"})],F$1.prototype,"type",void 0),e$3([d$4()],F$1.prototype,"updateRowItemFunction",void 0),F$1=e$3([i$4("esri.widgets.FeatureTable.FieldColumn")],F$1);const C$1=F$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends p$4{constructor(e){super(e),this.cellClassNameGenerator=null,this.columnReorderingEnabled=!0,this.columns=new S$2,this.dataProvider=async({page:e,pageSize:o},t)=>{const{store:s}=this;t&&(s?t(await s.fetchItems({page:e,pageSize:o})):t&&t([]));},this.pageSize=50,this.rowDetailsRenderer=null,this.store=null;}get size(){return this.store&&this.store.count||0}get state(){const{store:e}=this;return e&&"disabled"!==e.state?"loading"===e.state?"loading":"ready":"disabled"}closeColumnMenus(){var e;null==(e=this.columns)||e.forEach((e=>{e.menu&&e.menu.open&&e.menu.set("open",!1);}));}sortColumn(e,o){const t=this.findColumn(e);t&&(t.direction=o);}hideColumn(e){const o=this.findColumn(e);o&&!1===o.hidden&&(o.hidden=!0);}showColumn(e){const o=this.findColumn(e);o&&o.hidden&&(o.hidden=!1);}showAllColumns(){var e;null==(e=this.columns)||e.forEach((e=>{e.hidden&&(e.hidden=!1);}));}findColumn(e){return this.columns.find((o=>o.path===e))}getRowItemAt(e){return this.store&&this.store.getLocalItemAt(e)}refresh(){this.store&&(this.store.reset(),this.store.load());}};e$3([d$4()],i.prototype,"cellClassNameGenerator",void 0),e$3([d$4()],i.prototype,"columnReorderingEnabled",void 0),e$3([d$4()],i.prototype,"columns",void 0),e$3([d$4()],i.prototype,"dataProvider",void 0),e$3([d$4()],i.prototype,"pageSize",void 0),e$3([d$4()],i.prototype,"rowDetailsRenderer",void 0),e$3([d$4({readOnly:!0})],i.prototype,"size",null),e$3([d$4()],i.prototype,"store",void 0),e$3([d$4({readOnly:!0})],i.prototype,"state",null),i=e$3([i$4("esri.widgets.FeatureTable.Grid.GridViewModel")],i);const n=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class f$1 extends HTMLElement{static get version(){return "1.6.1"}}customElements.define("vaadin-lumo-styles",f$1);let g,y$2=null,b$1=window.HTMLImports&&window.HTMLImports.whenReady||null;function v$1(e){requestAnimationFrame((function(){b$1?b$1(e):(y$2||(y$2=new Promise((e=>{g=e;})),"complete"===document.readyState?g():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&g();}))),y$2.then((function(){e&&e();})));}));}const w="__seenByShadyCSS",A="__shadyCSSCachedStyle";let C=null,S=null;class x{constructor(){this.customStyles=[],this.enqueued=!1,v$1((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles();}));}enqueueDocumentValidation(){!this.enqueued&&S&&(this.enqueued=!0,v$1(S));}addCustomStyle(e){e[w]||(e[w]=!0,this.customStyles.push(e),this.enqueueDocumentValidation());}getStyleForCustomStyle(e){if(e[A])return e[A];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[A])continue;const s=this.getStyleForCustomStyle(i);if(s){const e=s.__appliedElement||s;C&&C(e),i[A]=e;}}return e}}x.prototype.addCustomStyle=x.prototype.addCustomStyle,x.prototype.getStyleForCustomStyle=x.prototype.getStyleForCustomStyle,x.prototype.processStyles=x.prototype.processStyles,Object.defineProperties(x.prototype,{transformCallback:{get:()=>C,set(e){C=e;}},validateCallback:{get:()=>S,set(e){let t=!1;S||(t=!0),S=e,t&&this.enqueueDocumentValidation();}}});const P=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,E=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,T=/@media\s(.*)/;function I(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i]);}function O(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}function z(e){const t=E.test(e)||P.test(e);return E.lastIndex=0,P.lastIndex=0,t}const R=!(window.ShadyDOM&&window.ShadyDOM.inUse);let N,k;function D(e){N=(!e||!e.shimcssproperties)&&(R||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")));}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(k=window.ShadyCSS.cssBuild);const L=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?N=window.ShadyCSS.nativeCss:window.ShadyCSS?(D(window.ShadyCSS),window.ShadyCSS=void 0):D(window.WebComponents&&window.WebComponents.flags);const M$1=N,F=new x;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){F.processStyles(),I(e,t);},styleElement(e){F.processStyles();},styleDocument(e){F.processStyles(),I(document.body,e);},getComputedStyleValue:(e,t)=>O(e,t),flushCustomStyles(){},nativeCss:M$1,nativeShadow:R,cssBuild:k,disableRuntime:L}),window.ShadyCSS.CustomStyleInterface=F,window.JSCompiler_renameProperty=function(e,t){return e};let H,B,$=/(url\()([^)]*)(\))/g,V=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function G(e,t){if(e&&V.test(e))return e;if("//"===e)return e;if(void 0===H){H=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",H="http://a/c%20d"===e.href;}catch(i){}}if(t||(t=document.baseURI||window.location.href),H)try{return new URL(e,t).href}catch(i){return e}return B||(B=document.implementation.createHTMLDocument("temp"),B.base=B.createElement("base"),B.head.appendChild(B.base),B.anchor=B.createElement("a"),B.body.appendChild(B.anchor)),B.base.href=t,B.anchor.href=e,B.anchor.href||e}function j(e,t){return e.replace($,(function(e,i,s,r){return i+"'"+G(s.replace(/["']/g,""),t)+"'"+r}))}function W(e){return e.substring(0,e.lastIndexOf("/")+1)}const U=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const Y=U&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return !1}})();let q=window.Polymer&&window.Polymer.rootPath||W(document.baseURI||window.location.href),J=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,X=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Z=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,K=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Q=window.Polymer&&window.Polymer.legacyOptimizations||!1,ee=window.Polymer&&window.Polymer.legacyWarnings||!1,te=window.Polymer&&window.Polymer.syncInitialRender||!1,ie=window.Polymer&&window.Polymer.legacyUndefined||!1,se=window.Polymer&&window.Polymer.orderedComputed||!1,re=window.Polymer&&window.Polymer.removeNestedTemplates||!1,ne=window.Polymer&&window.Polymer.fastDomIf||!1,oe=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,ae=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,le=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,de={},he={};function ce(e,t){de[e]=he[e.toLowerCase()]=t;}function ue(e){return de[e]||he[e.toLowerCase()]}function pe(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id);}class _e extends HTMLElement{static get observedAttributes(){return ["id"]}static import(e,t){if(e){let i=ue(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,s){t!==i&&this.register();}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=G(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=W(t);}return this.__assetpath}register(e){if(e=e||this.id){if(Z&&void 0!==ue(e))throw ce(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,ce(e,this),pe(this);}}}_e.prototype.modules=de,customElements.define("dom-module",_e);const me="link[rel=import][type~=css]",fe="include",ge="shady-unscoped";function ye(e){return _e.import(e)}function be(e){const t=j((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function ve(e){const t=e.trim().split(/\s+/),i=[];for(let s=0;s<t.length;s++)i.push(...we(t[s]));return i}function we(e){const t=ye(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...Se(t));const i=t.querySelector("template");i&&e.push(...Ae(i,t.assetpath)),t._styles=e;}return t._styles}function Ae(e,t){if(!e._styles){const i=[],s=e.content.querySelectorAll("style");for(let e=0;e<s.length;e++){let r=s[e],n=r.getAttribute(fe);n&&i.push(...ve(n).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(r.textContent=j(r.textContent,t)),i.push(r);}e._styles=i;}return e._styles}function Ce(e){let t=ye(e);return t?Se(t):[]}function Se(e){const t=[],i=e.querySelectorAll(me);for(let s=0;s<i.length;s++){let e=i[s];if(e.import){const i=e.import,s=e.hasAttribute(ge);if(s&&!i._unscopedStyle){const e=be(i);e.setAttribute(ge,""),i._unscopedStyle=e;}else i._style||(i._style=be(i));t.push(s?i._unscopedStyle:i._style);}}return t}function xe(e){let t=e.trim().split(/\s+/),i="";for(let s=0;s<t.length;s++)i+=Pe(t[s]);return i}function Pe(e){let t=ye(e);if(t&&void 0===t._cssText){let e=Te(t),i=t.querySelector("template");i&&(e+=Ee(i,t.assetpath)),t._cssText=e||null;}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function Ee(e,t){let i="";const s=Ae(e,t);for(let r=0;r<s.length;r++){let e=s[r];e.parentNode&&e.parentNode.removeChild(e),i+=e.textContent;}return i}function Te(e){let t="",i=Se(e);for(let s=0;s<i.length;s++)t+=i[s].textContent;return t}const Ie="include",Oe=window.ShadyCSS.CustomStyleInterface;class ze extends HTMLElement{constructor(){super(),this._style=null,Oe.addCustomStyle(this);}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(Ie);return t&&(e.removeAttribute(Ie),e.textContent=xe(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",ze);const Re=document.createElement("template");Re.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Re.content);const Ne=document.createElement("template");Ne.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEcAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMAAAADZa/6SsaGhlYQAADhQAAAAdAAAAJAbpA35obXR4AAAONAAAABAAAACspBAAAGxvY2EAAA5EAAAAWAAAAFh55IAsbWF4cAAADpwAAAAfAAAAIAFKAXBuYW1lAAAOvAAAATEAAAIuUUJZCHBvc3QAAA/wAAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAA4pmJ6QHx/DZfGbiZXwBFGGpUNzQi6P+vmacy3QJyORiYQKIANoULVXicY2BkYGAO+p8FJF8wAAHzVAZGBlSgDQBW9gNvAAAAeJxjYGBgYH4xNDAAzwQmjwAAAAAATgCaAOgBCgEsAU4BcAGaAcQB7gIaApwC6ASaBLwE1gTyBQ4FKgV6BdAF/gZEBmYGtgcYB5AIGAhSCGoI/glGCb4J2goECjwKggq4CvALUAuWC7x4nGNgZGBg0GZMYRBlAAEmIOYCQgaG/2A+AwAYlAG8AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjtlugzAQRbkJUEJIuu/7vqR8lGNPAcWx0YAb5e/LklR96EgenSufGY038PqKvf9rhgGG8BEgxA4ijBBjjAQTTLGLPezjAIc4wjFOcIoznOMCl7jCNW5wizvc4wGPeMIzXvCKN7zjAzN8eonQRWZSSaYmjvug6ase98hFltexMJmmVNmV2WBvdNgZUc+ujAWzXW3UDnu1w43asStHc8GpzAXX/py0jqTQZJTgkcxJLpaCF0lD32xNt+43tAsn29Dft02uDKS2cjGUNgsk26qK2lFthYoU27INPqmiDqg5goe0pqR5qSoqMdek/CUZFywL46rEsiImleqiqoMyt4baXlu/1GLdNFf5zbcNmdr1YUWCZe47o+zUmb/DoStbw3cVsef9ALjjiPQA) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(Ne.content);const ke=document.createElement("template");ke.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(ke.content);const De=document.createElement("template");De.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(De.content);const Le=document.createElement("template");Le.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(Le.content);const Me=document.createElement("template");Me.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Me.content),String(Math.random()).slice(2),window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e});let Fe=!1;(()=>{try{const e={get capture(){return Fe=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e);}catch(e){}})(),"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.0"),void 0===window.ShadyCSS||void 0===window.ShadyCSS.prepareTemplateDom&&console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),window.JSCompiler_renameProperty=(e,t)=>e;const He=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol();class $e{constructor(e,t){if(t!==Be)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e;}get styleSheet(){return void 0===this._styleSheet&&(He?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Ve=e=>{if(e instanceof $e)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)},Ge=(e,...t)=>{const i=t.reduce(((t,i,s)=>t+Ve(i)+e[s+1]),e[0]);return new $e(i,Be)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.0");let je=0;const We={},Ue=(e,t,i)=>{const s=i&&i.moduleId||"custom-style-module-"+je++;Array.isArray(t)||(t=t?[t]:[]),t.forEach((e=>{if(!(e instanceof $e))throw new Error("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");if(!We[e]){const t=document.createElement("dom-module");t.innerHTML=`\n        <template>\n          <style>${e.toString()}</style>\n        </template>\n      `;const i="custom-style-module-"+je++;t.register(i),We[e]=i;}}));const r=document.createElement("dom-module");if(e){const t=window.customElements&&window.customElements.get(e);t&&t.hasOwnProperty("__finalized")&&console.warn(`The custom element definition for "${e}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`),r.setAttribute("theme-for",e);}const n=i&&i.include||[];r.innerHTML=`\n    <template>\n      ${n.map((e=>`<style include=${e}></style>`))}\n      ${t.map((e=>`<style include=${We[e]}></style>`))}\n    </template>\n  `,r.register(s);};Ue("vaadin-checkbox",Ge`
    :host {
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    [part='label']:not([empty]) {
      margin: 0.1875em 0.875em 0.1875em 0.375em;
    }

    [part='checkbox'] {
      width: calc(1em + 2px);
      height: calc(1em + 2px);
      margin: 0.1875em;
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      pointer-events: none;
      line-height: 1.2;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 0 solid var(--lumo-primary-contrast-color);
      border-width: 0.1875em 0 0 0.1875em;
      box-sizing: border-box;
      transform-origin: 0 0;
      position: absolute;
      top: 0.8125em;
      left: 0.5em;
      transform: scale(0.55) rotate(-135deg);
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
      width: 0.625em;
      height: 1.0625em;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      transform: none;
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
      transition: opacity 0.25s;
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) [part='label'] ::slotted(*) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part='label']:not([empty]) {
      margin: 0.1875em 0.375em 0.1875em 0.875em;
    }

    /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
    :host(:hover) [part='checkbox']::after {
      transition: width 0.1s, height 0.25s;
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});let Ye=0;const qe=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=Ye++;function s(s){let r=s.__mixinSet;if(r&&r[i])return s;let n=t,o=n.get(s);if(!o){o=e(s),n.set(s,o);let t=Object.create(o.__mixinSet||r||null);t[i]=!0,o.__mixinSet=t;}return o}return s},Je=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function Xe(e){return e.indexOf(".")>=0}function Ze(e){let t=e.indexOf(".");return -1===t?e:e.slice(0,t)}function Ke(e,t){return 0===e.indexOf(t+".")}function Qe(e,t){return 0===t.indexOf(e+".")}function et(e,t,i){return t+i.slice(e.length)}function tt(e,t){return e===t||Ke(e,t)||Qe(e,t)}function it(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let s=e[i].toString().split(".");for(let e=0;e<s.length;e++)t.push(s[e]);}return t.join(".")}return e}function st(e){return Array.isArray(e)?it(e).split("."):e.toString().split(".")}function rt(e,t,i){let s=e,r=st(t);for(let n=0;n<r.length;n++){if(!s)return;s=s[r[n]];}return i&&(i.path=r.join(".")),s}function nt(e,t,i){let s=e,r=st(t),n=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++){if(s=s[r[e]],!s)return}s[n]=i;}else s[t]=i;return r.join(".")}const ot={},at=/-[a-z]/g,lt=/([A-Z])/g;function dt(e){return ot[e]||(ot[e]=e.indexOf("-")<0?e:e.replace(at,(e=>e[1].toUpperCase())))}function ht(e){return ot[e]||(ot[e]=e.replace(lt,"-$1").toLowerCase())}let ct=0,ut=0,pt=[],_t=0,mt=!1,ft=document.createTextNode("");function gt(){mt=!1;const e=pt.length;for(let i=0;i<e;i++){let e=pt[i];if(e)try{e();}catch(t){setTimeout((()=>{throw t}));}}pt.splice(0,e),ut+=e;}new window.MutationObserver(gt).observe(ft,{characterData:!0});const yt={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e);}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e);}},bt={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e);}},vt={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e);}},wt={run:e=>(mt||(mt=!0,ft.textContent=_t++),pt.push(e),ct++),cancel(e){const t=e-ut;if(t>=0){if(!pt[t])throw new Error("invalid async handle: "+e);pt[t]=null;}}},At=wt,Ct=qe((e=>{class t extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i);}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t));}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties();}});}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties();}ready(){this.__dataReady=!0,this._flushProperties();}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e]);}_initializeInstanceProperties(e){Object.assign(this,e);}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties();}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let s=this.__data[e],r=this._shouldPropertyChange(e,t,s);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=s),this.__data[e]=t,this.__dataPending[e]=t),r}_isPropertyPending(e){return !(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,At.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties());})));}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready());}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i)),this.__dataCounter--;}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,s){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,s);}_attributeToProperty(e,t,i){if(!this.__serializing){const s=this.__dataAttributes,r=s&&s[e]||e;this[r]=this._deserializeValue(t,i||this.constructor.typeForProperty(r));}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1;}_valueToNodeAttribute(e,t,i){const s=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=Je(e)),void 0===s?e.removeAttribute(i):e.setAttribute(i,s);}_serializeValue(e){return "boolean"==typeof e?e?"":void 0:null!=e?e.toString():void 0}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}return t})),St={};let xt=HTMLElement.prototype;for(;xt;){let e=Object.getOwnPropertyNames(xt);for(let t=0;t<e.length;t++)St[e[t]]=!0;xt=Object.getPrototypeOf(xt);}function Pt(e,t){if(!St[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i));}}const Et=qe((e=>{const t=Ct(e);class i extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(dt(e[t]));}static attributeNameForProperty(e){return ht(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties();}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t]);}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e);}_serializeValue(e){if("object"==typeof e){if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(t){return ""}}return super._serializeValue(e)}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e);}catch(s){i=e;}break;case Array:try{i=JSON.parse(e);}catch(s){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`);}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t);}return i}_definePropertyAccessor(e,t){Pt(this,e),super._definePropertyAccessor(e,t);}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}return i})),Tt={"dom-if":!0,"dom-repeat":!0};let It=!1,Ot=!1;function zt(){if(!It){It=!0;const e=document.createElement("textarea");e.placeholder="a",Ot=e.placeholder===e.textContent;}return Ot}function Rt(e){zt()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null);}function Nt(e){let t=e.getAttribute("is");if(t&&Tt[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name);}return e}function kt(e,t){let i=t.parentInfo&&kt(e,t.parentInfo);if(!i)return e;for(let s=i.firstChild,r=0;s;s=s.nextSibling)if(t.parentIndex===r++)return s}function Dt(e,t,i,s){s.id&&(t[s.id]=i);}function Lt(e,t,i){if(i.events&&i.events.length)for(let s,r=0,n=i.events;r<n.length&&(s=n[r]);r++)e._addMethodEventListenerToNode(t,s.name,s.value,e);}function Mt(e,t,i,s){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=s);}function Ft(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined");}}const Ht=qe((e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(t),i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null});}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let s=!1,r=e;return "template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):s=this._parseTemplateNestedTemplate(r,t,i)||s,Rt(r),r.firstChild&&this._parseTemplateChildNodes(r,t,i),r.hasAttributes&&r.hasAttributes()&&(s=this._parseTemplateNodeAttributes(r,t,i)||s),s||i.noted}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let s,r=e.firstChild,n=0;r;r=s){if("template"==r.localName&&(r=Nt(r)),s=r.nextSibling,r.nodeType===Node.TEXT_NODE){let i=s;for(;i&&i.nodeType===Node.TEXT_NODE;)r.textContent+=i.textContent,s=i.nextSibling,e.removeChild(i),i=s;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:n,parentInfo:i};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&n++;}}static _parseTemplateNestedTemplate(e,t,i){let s=e,r=this._parseTemplate(s,t);return (r.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),i.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,i){let s=!1,r=Array.from(e.attributes);for(let n,o=r.length-1;n=r[o];o--)s=this._parseTemplateNodeAttribute(e,t,i,n.name,n.value)||s;return s}static _parseTemplateNodeAttribute(e,t,i,s,r){return "on-"===s.slice(0,3)?(e.removeAttribute(s),i.events=i.events||[],i.events.push({name:s.slice(3),value:r}),!0):"id"===s&&(i.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let i=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,s=t.content||e.content,r=document.importNode(s,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let n=r.nodeList=new Array(i.length);r.$={};for(let o,a=0,l=i.length;a<l&&(o=i[a]);a++){let e=n[a]=kt(r,o);Dt(this,r.$,e,o),Mt(this,e,o,t),Lt(this,e,o);}return r=r,r}_addMethodEventListenerToNode(e,t,i,s){let r=Ft(s=s||e,t,i);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,i){e.addEventListener(t,i);}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i);}}return t}));let Bt=0;const $t=[],Vt={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Gt="__computeInfo",jt=/[A-Z]/;function Wt(e,t,i){let s=e[t];if(s){if(!e.hasOwnProperty(t)&&(s=e[t]=Object.create(e[t]),i))for(let r in s){let e=s[r],t=s[r]=Array(e.length);for(let i=0;i<e.length;i++)t[i]=e[i];}}else s=e[t]={};return s}function Ut(e,t,i,s,r,n){if(t){let o=!1;const a=Bt++;for(let l in i){let d=t[r?Ze(l):l];if(d)for(let t,h=0,c=d.length;h<c&&(t=d[h]);h++)t.info&&t.info.lastRun===a||r&&!qt(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,i,s,t.info,r,n),o=!0);}return o}return !1}function Yt(e,t,i,s,r,n,o,a){let l=!1,d=t[o?Ze(s):s];if(d)for(let h,c=0,u=d.length;c<u&&(h=d[c]);c++)h.info&&h.info.lastRun===i||o&&!qt(s,h.trigger)||(h.info&&(h.info.lastRun=i),h.fn(e,s,r,n,h.info,o,a),l=!0);return l}function qt(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!Ke(i,e))||!(!t.wildcard||!Qe(i,e))}return !0}function Jt(e,t,i,s,r){let n="string"==typeof r.method?e[r.method]:r.method,o=r.property;n?n.call(e,e.__data[o],s[o]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined");}function Xt(e,t,i,s,r){let n,o,a=e[Vt.NOTIFY],l=Bt++;for(let d in t)t[d]&&(a&&Yt(e,a,l,d,i,s,r)||r&&Zt(e,d,i))&&(n=!0);n&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties();}function Zt(e,t,i){let s=Ze(t);if(s!==t){return Kt(e,ht(s)+"-changed",i[t],t),!0}return !1}function Kt(e,t,i,s){let r={value:i,queueProperty:!0};s&&(r.path=s),Je(e).dispatchEvent(new CustomEvent(t,{detail:r}));}function Qt(e,t,i,s,r,n){let o=(n?Ze(t):t)!=t?t:null,a=o?rt(e,o):e.__data[t];o&&void 0===a&&(a=i[t]),Kt(e,r.eventName,a,o);}function ei(e,t,i,s,r){let n,o=e.detail,a=o&&o.path;a?(s=et(i,s,a),n=o&&o.value):n=e.currentTarget[i],n=r?!n:n,t[Vt.READ_ONLY]&&t[Vt.READ_ONLY][s]||!t._setPendingPropertyOrPath(s,n,!0,Boolean(a))||o&&o.queueProperty||t._invalidateProperties();}function ti(e,t,i,s,r){let n=e.__data[t];J&&(n=J(n,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,n);}function ii(e,t,i,s){let r=e[Vt.COMPUTE];if(r)if(se){Bt++;const n=ni(e),o=[];for(let e in t)ri(e,r,o,n,s);let a;for(;a=o.shift();)ai(e,"",t,i,a)&&ri(a.methodInfo,r,o,n,s);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null;}else {let n=t;for(;Ut(e,r,n,i,s);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),n=e.__dataPending,e.__dataPending=null;}}const si=(e,t,i)=>{let s=0,r=t.length-1,n=-1;for(;s<=r;){const o=s+r>>1,a=i.get(t[o].methodInfo)-i.get(e.methodInfo);if(a<0)s=o+1;else {if(!(a>0)){n=o;break}r=o-1;}}n<0&&(n=r+1),t.splice(n,0,e);},ri=(e,t,i,s,r)=>{const n=t[r?Ze(e):e];if(n)for(let o=0;o<n.length;o++){const t=n[o];t.info.lastRun===Bt||r&&!qt(e,t.trigger)||(t.info.lastRun=Bt,si(t.info,i,s));}};function ni(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[Vt.COMPUTE];let s,{counts:r,ready:n,total:o}=oi(e);for(;s=n.shift();){t.set(s,t.size);const e=i[s];e&&e.forEach((e=>{const t=e.info.methodInfo;--o,0==--r[t]&&n.push(t);}));}if(0!==o){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`);}e.constructor.__orderedComputedDeps=t;}return t}function oi(e){const t=e[Gt],i={},s=e[Vt.COMPUTE],r=[];let n=0;for(let o in t){const e=t[o];n+=i[o]=e.args.filter((e=>!e.literal)).length+(e.dynamicFn?1:0);}for(let o in s)t[o]||r.push(o);return {counts:i,ready:r,total:n}}function ai(e,t,i,s,r){let n=bi(e,t,i,s,r);if(n===$t)return !1;let o=r.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,n,!0):(e[o]=n,!1)}function li(e,t,i){let s=e.__dataLinkedPaths;if(s){let r;for(let n in s){let o=s[n];Qe(n,t)?(r=et(n,o,t),e._setPendingPropertyOrPath(r,i,!0,!0)):Qe(o,t)&&(r=et(o,n,t),e._setPendingPropertyOrPath(r,i,!0,!0));}}}function di(e,t,i,s,r,n,o){i.bindings=i.bindings||[];let a={kind:s,target:r,parts:n,literal:o,isCompound:1!==n.length};if(i.bindings.push(a),_i(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||ht(r)+"-changed",a.listenerNegate=t;}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let i=a.parts[d];i.compoundIndex=d,hi(e,t,a,i,l);}}function hi(e,t,i,s,r){if(!s.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else {let n=s.dependencies,o={index:r,binding:i,part:s,evaluator:e};for(let i=0;i<n.length;i++){let s=n[i];"string"==typeof s&&(s=Ei(s),s.wildcard=!0),e._addTemplatePropertyEffect(t,s.rootProperty,{fn:ci,info:o,trigger:s});}}}function ci(e,t,i,s,r,n,o){let a=o[r.index],l=r.binding,d=r.part;if(n&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let s=i[t];t=et(d.source,l.target,t),a._setPendingPropertyOrPath(t,s,!1,!0)&&e._enqueueClient(a);}else {let o=r.evaluator._evaluateBinding(e,d,t,i,s,n);o!==$t&&ui(e,a,l,d,o);}}function ui(e,t,i,s,r){if(r=pi(t,r,i,s),J&&(r=J(r,i.target,i.kind,t)),"attribute"==i.kind)e._valueToNodeAttribute(t,r,i.target);else {let s=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?t[Vt.READ_ONLY]&&t[Vt.READ_ONLY][s]||t._setPendingProperty(s,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,s,r);}}function pi(e,t,i,s){if(i.isCompound){let r=e.__dataCompoundStorage[i.target];r[s.compoundIndex]=t,t=r.join("");}return "attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t)),t}function _i(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}function mi(e,t){let{nodeList:i,nodeInfoList:s}=t;if(s.length)for(let r=0;r<s.length;r++){let t=s[r],n=i[r],o=t.bindings;if(o)for(let i=0;i<o.length;i++){let t=o[i];fi(n,t),gi(n,e,t);}n.__dataHost=e;}}function fi(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),s=t.parts,r=new Array(s.length);for(let e=0;e<s.length;e++)r[e]=s[e].literal;let n=t.target;i[n]=r,t.literal&&"property"==t.kind&&("className"===n&&(e=Je(e)),e[n]=t.literal);}}function gi(e,t,i){if(i.listenerEvent){let s=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){ei(e,t,i.target,s.source,s.negate);}));}}function yi(e,t,i,s,r,n){n=t.static||n&&("object"!=typeof n||n[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:n};for(let a,l=0;l<t.args.length&&(a=t.args[l]);l++)a.literal||e._addPropertyEffect(a.rootProperty,i,{fn:s,info:o,trigger:a});return n&&e._addPropertyEffect(t.methodName,i,{fn:s,info:o}),o}function bi(e,t,i,s,r){let n=e._methodHost||e,o=n[r.methodName];if(o){let s=e._marshalArgs(r.args,t,i);return s===$t?$t:o.apply(n,s)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined");}const vi=[],wi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Ai="(?:("+wi+"|"+"(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)"+"|"+("(?:"+"(?:'(?:[^'\\\\]|\\\\.)*')"+"|"+'(?:"(?:[^"\\\\]|\\\\.)*")'+")")+")\\s*)",Ci=new RegExp("(\\[\\[|{{)\\s*"+"(?:(!)\\s*)?"+("("+wi+"\\s*"+("(?:\\(\\s*(?:"+("(?:"+Ai+"(?:,\\s*"+Ai+")*)")+"?)\\)\\s*)")+"?)")+"(?:]]|}})","g");function Si(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||"";}return t}function xi(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:vi};if(t[2].trim()){return Pi(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function Pi(e,t){return t.args=e.map((function(e){let i=Ei(e);return i.literal||(t.static=!1),i}),this),t}function Ei(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},s=t[0];switch("-"===s&&(s=t[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0;}return i.literal||(i.rootProperty=Ze(t),i.structured=Xe(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function Ti(e,t,i){let s=rt(e,i);return void 0===s&&(s=t[i]),s}function Ii(e,t,i,s){const r={indexSplices:s};ie&&!e._overrideLegacyUndefined&&(t.splices=r),e.notifyPath(i+".splices",r),e.notifyPath(i+".length",t.length),ie&&!e._overrideLegacyUndefined&&(r.indexSplices=[]);}function Oi(e,t,i,s,r,n){Ii(e,t,i,[{index:s,addedCount:r,removed:n,object:t,type:"splice"}]);}function zi(e){return e[0].toUpperCase()+e.substring(1)}const Ri=qe((e=>{const t=Ht(Et(e));class i extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined;}get PROPERTY_EFFECT_TYPES(){return Vt}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1;}_registerHost(){if(Ni.length){let e=Ni[Ni.length-1];e._enqueueClient(this),this.__dataHost=e;}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={};}_initializeInstanceProperties(e){let t=this[Vt.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i]);}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==Vt.READ_ONLY);let s=Wt(this,t,!0)[e];s||(s=this[t][e]=[]),s.push(i);}_removePropertyEffect(e,t,i){let s=Wt(this,t,!0)[e],r=s.indexOf(i);r>=0&&s.splice(r,1);}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Vt.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Vt.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Vt.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Vt.COMPUTE)}_setPendingPropertyOrPath(e,t,i,s){if(s||Ze(Array.isArray(e)?e[0]:e)!==e){if(!s){let i=rt(this,e);if(!(e=nt(this,e,t))||!super._shouldPropertyChange(e,t,i))return !1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return li(this,e,t),!0}else {if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t;}return !1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=Je(e)),e[t]=i);}_setPendingProperty(e,t,i){let s=this.__dataHasPaths&&Xe(e),r=s?this.__dataTemp:this.__data;return !!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),s?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(s||this[Vt.NOTIFY]&&this[Vt.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties();}_invalidateProperties(){this.__dataReady&&this._flushProperties();}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e);}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0);}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties();}}}_readyClients(){this.__enableOrFlushClients();}setProperties(e,t){for(let i in e)!t&&this[Vt.READ_ONLY]&&this[Vt.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties();}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties();}_propertiesChanged(e,t,i){let s,r=this.__dataHasPaths;this.__dataHasPaths=!1,ii(this,t,i,r),s=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,i,r),this._flushClients(),Ut(this,this[Vt.REFLECT],t,i,r),Ut(this,this[Vt.OBSERVE],t,i,r),s&&Xt(this,s,t,i,r),1==this.__dataCounter&&(this.__dataTemp={});}_propagatePropertyChanges(e,t,i){this[Vt.PROPAGATE]&&Ut(this,this[Vt.PROPAGATE],e,t,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,i);}_runEffectsForTemplate(e,t,i,s){const r=(t,s)=>{Ut(this,e.propertyEffects,t,i,s,e.nodeList);for(let r=e.firstChild;r;r=r.nextSibling)this._runEffectsForTemplate(r,t,i,s);};e.runEffects?e.runEffects(r,t,s):r(t,s);}linkPaths(e,t){e=it(e),t=it(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t;}unlinkPaths(e){e=it(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e];}notifySplices(e,t){let i={path:""};Ii(this,rt(this,e,i),i.path,t);}get(e,t){return rt(t||this,e)}set(e,t,i){i?nt(i,e,t):this[Vt.READ_ONLY]&&this[Vt.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties();}push(e,...t){let i={path:""},s=rt(this,e,i),r=s.length,n=s.push(...t);return t.length&&Oi(this,s,i.path,r,t.length,[]),n}pop(e){let t={path:""},i=rt(this,e,t),s=Boolean(i.length),r=i.pop();return s&&Oi(this,i,t.path,i.length,0,[r]),r}splice(e,t,i,...s){let r,n={path:""},o=rt(this,e,n);return t<0?t=o.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?o.splice(t):o.splice(t,i,...s),(s.length||r.length)&&Oi(this,o,n.path,t,s.length,r),r}shift(e){let t={path:""},i=rt(this,e,t),s=Boolean(i.length),r=i.shift();return s&&Oi(this,i,t.path,0,0,[r]),r}unshift(e,...t){let i={path:""},s=rt(this,e,i),r=s.unshift(...t);return t.length&&Oi(this,s,i.path,0,t.length,[]),r}notifyPath(e,t){let i;if(1==arguments.length){let s={path:""};t=rt(this,e,s),i=s.path;}else i=Array.isArray(e)?it(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties();}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,Vt.READ_ONLY),t&&(this["_set"+zi(e)]=function(t){this._setProperty(e,t);});}_createPropertyObserver(e,t,i){let s={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,Vt.OBSERVE,{fn:Jt,info:s,trigger:{name:e}}),i&&this._addPropertyEffect(t,Vt.OBSERVE,{fn:Jt,info:s,trigger:{name:t}});}_createMethodObserver(e,t){let i=xi(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");yi(this,i,Vt.OBSERVE,bi,null,t);}_createNotifyingProperty(e){this._addPropertyEffect(e,Vt.NOTIFY,{fn:Qt,info:{eventName:ht(e)+"-changed",property:e}});}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,Vt.REFLECT,{fn:ti,info:{attrName:t}});}_createComputedProperty(e,t,i){let s=xi(t);if(!s)throw new Error("Malformed computed expression '"+t+"'");const r=yi(this,s,Vt.COMPUTE,ai,e,i);Wt(this,Gt)[e]=r;}_marshalArgs(e,t,i){const s=this.__data,r=[];for(let n=0,o=e.length;n<o;n++){let{name:o,structured:a,wildcard:l,value:d,literal:h}=e[n];if(!h)if(l){const e=Qe(o,t),r=Ti(s,i,e?t:o);d={path:e?t:o,value:r,base:e?rt(s,o):r};}else d=a?Ti(s,i,o):s[o];if(ie&&!this._overrideLegacyUndefined&&void 0===d&&e.length>1)return $t;r[n]=d;}return r}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i);}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i);}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t);}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e);}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t);}static createReflectedProperty(e){this.prototype._createReflectedProperty(e);}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i);}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),s=this.__preBoundTemplateInfo==i;if(!s)for(let r in i.propertyEffects)this._createPropertyAccessor(r);if(t)if(i=Object.create(i),i.wasPreBound=s,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,s=t.lastChild;i.parent=t,t.lastChild=i,i.previousSibling=s,s?s.nextSibling=i:t.firstChild=i;}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let s=e.propertyEffects=e.propertyEffects||{};(s[t]=s[t]||[]).push(i);}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),Ni.push(this);let i=super._stampTemplate(e,t);if(Ni.pop(),t.nodeList=i.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=i.firstChild;t;t=t.nextSibling)e.push(t);}return i.templateInfo=t,mi(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:i,nextSibling:s,parent:r}=t;i?i.nextSibling=s:r&&(r.firstChild=s),s?s.previousSibling=i:r&&(r.lastChild=i),t.nextSibling=t.previousSibling=null;let n=t.childNodes;for(let o=0;o<n.length;o++){let e=n[o];Je(Je(e).parentNode).removeChild(e);}}static _parseTemplateNode(e,i,s){let r=t._parseTemplateNode.call(this,e,i,s);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=Si(t)||" ",di(this,i,s,"text","textContent",t),r=!0);}return r}static _parseTemplateNodeAttribute(e,i,s,r,n){let o=this._parseBindings(n,i);if(o){let t=r,n="property";jt.test(r)?n="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),n="attribute");let a=Si(o);return a&&"attribute"==n&&("class"==r&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(r)),e.setAttribute(r,a)),"attribute"==n&&"disable-upgrade$"==t&&e.setAttribute(r,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===n&&(r=dt(r)),di(this,i,s,n,r,o,a),!0}return t._parseTemplateNodeAttribute.call(this,e,i,s,r,n)}static _parseTemplateNestedTemplate(e,i,s){let r=t._parseTemplateNestedTemplate.call(this,e,i,s);const n=e.parentNode,o=s.templateInfo,a="dom-if"===n.localName,l="dom-repeat"===n.localName;re&&(a||l)&&(n.removeChild(e),(s=s.parentInfo).templateInfo=o,s.noted=!0,r=!1);let d=o.hostProps;if(ne&&a)d&&(i.hostProps=Object.assign(i.hostProps||{},d),re||(s.parentInfo.noted=!0));else {let e="{";for(let t in d){di(this,i,s,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}]);}}return r}static _parseBindings(e,t){let i,s=[],r=0;for(;null!==(i=Ci.exec(e));){i.index>r&&s.push({literal:e.slice(r,i.index)});let n=i[1][0],o=Boolean(i[2]),a=i[3].trim(),l=!1,d="",h=-1;"{"==n&&(h=a.indexOf("::"))>0&&(d=a.substring(h+2),a=a.substring(0,h),l=!0);let c=xi(a),u=[];if(c){let{args:e,methodName:i}=c;for(let t=0;t<e.length;t++){let i=e[t];i.literal||u.push(i);}let s=t.dynamicFns;(s&&s[i]||c.static)&&(u.push(i),c.dynamicFn=!0);}else u.push(a);s.push({source:a,mode:n,negate:o,customEvent:l,signature:c,dependencies:u,event:d}),r=Ci.lastIndex;}if(r&&r<e.length){let t=e.substring(r);t&&s.push({literal:t});}return s.length?s:null}static _evaluateBinding(e,t,i,s,r,n){let o;return o=t.signature?bi(e,i,s,r,t.signature):i!=t.source?rt(e,t.source):n&&Xe(i)?rt(e,i):e.__data[i],t.negate&&(o=!o),o}}return i})),Ni=[];function ki(e){}function Di(e){const t={};for(let i in e){const s=e[i];t[i]="function"==typeof s?{type:s}:s;}return t}const Li=qe((e=>{const t=Ct(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function s(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=Di(i));}e.__ownProperties=t;}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){ki(this.prototype);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[];}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass();}}static _finalizeClass(){const e=s(this);e&&this.createProperties(e);}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,s(this));}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties();}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties();}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback();}}return r})),Mi="3.4.1",Fi=window.ShadyCSS&&window.ShadyCSS.cssBuild,Hi=qe((e=>{const t=Li(Ri(e));function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let s=t[i];"value"in s&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=s);}}return e.__propertyDefaults}function s(e){return e.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty("observers",e))?e.observers:null),e.__ownObservers}function r(e,t,i,s){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,s)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,s[i.observer]),e._addPropertyToAttributeMap(t);}function n(e,t,i,s){if(!Fi){const r=t.content.querySelectorAll("style"),n=Ae(t),o=Ce(i),a=t.content.firstElementChild;for(let i=0;i<o.length;i++){let r=o[i];r.textContent=e._processStyleText(r.textContent,s),t.content.insertBefore(r,a);}let l=0;for(let t=0;t<n.length;t++){let i=n[t],o=r[l];o!==i?(i=i.cloneNode(!0),o.parentNode.insertBefore(i,o)):l++,i.textContent=e._processStyleText(i.textContent,s);}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i),le&&Fi&&Y){const i=t.content.querySelectorAll("style");if(i){let t="";Array.from(i).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e);})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t);}}}function o(e){let t=null;if(e&&(!Z||K)&&(t=_e.import(e,"template"),Z&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class a extends t{static get polymerElementVersion(){return Mi}static _finalizeClass(){t._finalizeClass.call(this);const e=s(this);e&&this.createObservers(e,this._properties),this._prepareTemplate();}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):Q||(e=e.cloneNode(!0))),this.prototype._template=e;}static createProperties(e){for(let t in e)r(this.prototype,t,e[t],e);}static createObservers(e,t){const i=this.prototype;for(let s=0;s<e.length;s++)i._createMethodObserver(e[s],t);}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template;}return this._template}static set template(e){this._template=e;}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=W(e.url);else {const e=_e.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath;}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$;}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=q,this.importPath=this.constructor.importPath;let e=i(this.constructor);if(e)for(let t in e){let i=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e;}}}_canApplyPropertyDefault(e){return !this.hasOwnProperty(e)}static _processStyleText(e,t){return j(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;n(this,t,e,i?G(i):""),this.prototype._bindTemplate(t);}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback();}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready();}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients();}_attachDom(e){const t=Je(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),te&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e);}resolveUrl(e,t){return !t&&this.importPath&&(t=G(this.importPath)),G(e,t)}static _parseTemplateContent(e,i,s){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,s)}static _addTemplatePropertyEffect(e,i,s){return !ee||i in this._properties||s.info.part.signature&&s.info.part.signature.static||s.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,i,s)}}return a}));class Bi{constructor(e){this.value=e.toString();}toString(){return this.value}}function $i(e){if(e instanceof Bi)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function Vi(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Bi)return $i(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const Gi=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce(((t,i,s)=>t+Vi(i)+e[s+1]),e[0]),i},ji=Hi(HTMLElement);class Wi{constructor(){this._asyncModule=null,this._callback=null,this._timer=null;}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,Ui.delete(this),this._callback();}));}cancel(){this.isActive()&&(this._cancelAsync(),Ui.delete(this));}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null);}flush(){this.isActive()&&(this.cancel(),this._callback());}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof Wi?e._cancelAsync():e=new Wi,e.setConfig(t,i),e}}let Ui=new Set;const Yi=function(e){Ui.add(e);},qi=function(){const e=Boolean(Ui.size);return Ui.forEach((e=>{try{e.flush();}catch(t){setTimeout((()=>{throw t}));}})),e};let Ji="string"==typeof document.head.style.touchAction,Xi="__polymerGestures",Zi="__polymerGesturesHandled",Ki="__polymerGesturesTouchAction",Qi=25,es=5,ts=2,is=2500,ss=["mousedown","mousemove","mouseup","click"],rs=[0,1,4,2],ns=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return !1}}();function os(e){return ss.indexOf(e)>-1}let as=!1;function ls(e){if(!os(e)&&"touchend"!==e)return Ji&&as&&X?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){as=!0;}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e);}catch(e){}}();let ds=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const hs=[],cs={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},us={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function ps(e){return cs[e.localName]||!1}function _s(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let s=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<s.length;e++)t.push(s[e]);}}return t}let ms=function(e){let t=e.sourceCapabilities;if((!t||t.firesTouchEvents)&&(e[Zi]={skip:!0},"click"===e.type)){let t=!1,i=Ss(e);for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)hs.push(i[e]);else if(ps(i[e])){let s=_s(i[e]);for(let e=0;e<s.length;e++)t=t||hs.indexOf(s[e])>-1;}if(i[e]===vs.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation();}};function fs(e){let t=ds?["click"]:ss;for(let i,s=0;s<t.length;s++)i=t[s],e?(hs.length=0,document.addEventListener(i,ms,!0)):document.removeEventListener(i,ms,!0);}function gs(e){vs.mouse.mouseIgnoreJob||fs(!0);let t=function(){fs(),vs.mouse.target=null,vs.mouse.mouseIgnoreJob=null;};vs.mouse.target=Ss(e)[0],vs.mouse.mouseIgnoreJob=Wi.debounce(vs.mouse.mouseIgnoreJob,yt.after(is),t);}function ys(e){let t=e.type;if(!os(t))return !1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!ns&&(t=rs[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}function bs(e){if("click"===e.type){if(0===e.detail)return !0;let t=Ts(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return !0;let i=t.getBoundingClientRect(),s=e.pageX,r=e.pageY;return !(s>=i.left&&s<=i.right&&r>=i.top&&r<=i.bottom)}return !1}let vs={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ws(e){let t="auto",i=Ss(e);for(let s,r=0;r<i.length;r++)if(s=i[r],s[Ki]){t=s[Ki];break}return t}function As(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i);}function Cs(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null;}document.addEventListener("touchend",gs,!!as&&{passive:!0});const Ss=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],xs={},Ps=[];function Es(e,t){let i=document.elementFromPoint(e,t),s=i;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let r=s;if(s=s.shadowRoot.elementFromPoint(e,t),r===s)break;s&&(i=s);}return i}function Ts(e){const t=Ss(e);return t.length>0?t[0]:e.target}function Is(e){let t,i=e.type,s=e.currentTarget[Xi];if(!s)return;let r=s[i];if(r){if(!e[Zi]&&(e[Zi]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(vs.touch.id=t.identifier),vs.touch.id!==t.identifier)return;Ji||"touchstart"!==i&&"touchmove"!==i||Os(e);}if(t=e[Zi],!t.skip){for(let i,s=0;s<Ps.length;s++)i=Ps[s],r[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let s,n=0;n<Ps.length;n++)s=Ps[n],r[s.name]&&!t[s.name]&&(t[s.name]=!0,s[i](e));}}}function Os(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)vs.touch.x=t.clientX,vs.touch.y=t.clientY,vs.touch.scrollDecided=!1;else if("touchmove"===i){if(vs.touch.scrollDecided)return;vs.touch.scrollDecided=!0;let i=ws(e),s=!1,r=Math.abs(vs.touch.x-t.clientX),n=Math.abs(vs.touch.y-t.clientY);e.cancelable&&("none"===i?s=!0:"pan-x"===i?s=n>r:"pan-y"===i&&(s=r>n)),s?e.preventDefault():Hs("track");}}function zs(e,t,i){return !!xs[t]&&(Ns(e,t,i),!0)}function Rs(e,t,i){return !!xs[t]&&(ks(e,t,i),!0)}function Ns(e,t,i){let s=xs[t],r=s.deps,n=s.name,o=e[Xi];o||(e[Xi]=o={});for(let a,l,d=0;d<r.length;d++)a=r[d],ds&&os(a)&&"click"!==a||(l=o[a],l||(o[a]=l={_count:0}),0===l._count&&e.addEventListener(a,Is,ls(a)),l[n]=(l[n]||0)+1,l._count=(l._count||0)+1);e.addEventListener(t,i),s.touchAction&&Ms(e,s.touchAction);}function ks(e,t,i){let s=xs[t],r=s.deps,n=s.name,o=e[Xi];if(o)for(let a,l,d=0;d<r.length;d++)a=r[d],l=o[a],l&&l[n]&&(l[n]=(l[n]||1)-1,l._count=(l._count||1)-1,0===l._count&&e.removeEventListener(a,Is,ls(a)));e.removeEventListener(t,i);}function Ds(e){Ps.push(e);for(let t=0;t<e.emits.length;t++)xs[e.emits[t]]=e;}function Ls(e){for(let t,i=0;i<Ps.length;i++){t=Ps[i];for(let i,s=0;s<t.emits.length;s++)if(i=t.emits[s],i===e)return t}return null}function Ms(e,t){Ji&&e instanceof HTMLElement&&wt.run((()=>{e.style.touchAction=t;})),e[Ki]=t;}function Fs(e,t,i){let s=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=i,Je(e).dispatchEvent(s),s.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault();}}function Hs(e){let t=Ls(e);t.info&&(t.info.prevent=!0);}function Bs(e,t,i,s){t&&Fs(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:s,prevent:function(e){return Hs(e)}});}function $s(e,t,i){if(e.prevent)return !1;if(e.started)return !0;let s=Math.abs(e.x-t),r=Math.abs(e.y-i);return s>=es||r>=es}function Vs(e,t,i){if(!t)return;let s,r=e.moves[e.moves.length-2],n=e.moves[e.moves.length-1],o=n.x-e.x,a=n.y-e.y,l=0;r&&(s=n.x-r.x,l=n.y-r.y),Fs(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:o,dy:a,ddx:s,ddy:l,sourceEvent:i,hover:function(){return Es(i.clientX,i.clientY)}});}function Gs(e,t,i){let s=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),n=Ts(i||t);!n||us[n.localName]&&n.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=Qi&&r<=Qi||bs(t))&&(e.prevent||Fs(n,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}));}Ds({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Cs(this.info);},mousedown:function(e){if(!ys(e))return;let t=Ts(e),i=this,s=function(e){ys(e)||(Bs("up",t,e),Cs(i.info));},r=function(e){ys(e)&&Bs("up",t,e),Cs(i.info);};As(this.info,s,r),Bs("down",t,e);},touchstart:function(e){Bs("down",Ts(e),e.changedTouches[0],e);},touchend:function(e){Bs("up",Ts(e),e.changedTouches[0],e);}}),Ds({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>ts&&this.moves.shift(),this.moves.push(e);},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Cs(this.info);},mousedown:function(e){if(!ys(e))return;let t=Ts(e),i=this,s=function(e){let s=e.clientX,r=e.clientY;$s(i.info,s,r)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&Hs("tap"),i.info.addMove({x:s,y:r}),ys(e)||(i.info.state="end",Cs(i.info)),t&&Vs(i.info,t,e),i.info.started=!0);},r=function(e){i.info.started&&s(e),Cs(i.info);};As(this.info,s,r),this.info.x=e.clientX,this.info.y=e.clientY;},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY;},touchmove:function(e){let t=Ts(e),i=e.changedTouches[0],s=i.clientX,r=i.clientY;$s(this.info,s,r)&&("start"===this.info.state&&Hs("tap"),this.info.addMove({x:s,y:r}),Vs(this.info,t,i),this.info.state="track",this.info.started=!0);},touchend:function(e){let t=Ts(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Vs(this.info,t,i));}}),Ds({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1;},mousedown:function(e){ys(e)&&(this.info.x=e.clientX,this.info.y=e.clientY);},click:function(e){ys(e)&&Gs(this.info,e);},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY;},touchend:function(e){Gs(this.info,e.changedTouches[0],e);}});const js=qe((e=>{class t extends e{_addEventListenerToNode(e,t,i){zs(e,t,i)||super._addEventListenerToNode(e,t,i);}_removeEventListenerFromNode(e,t,i){Rs(e,t,i)||super._removeEventListenerFromNode(e,t,i);}}return t})),Ws=e=>class extends e{static get properties(){return {theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"theme"===e&&this._setTheme(i);}},Us=e=>class extends(Ws(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,i=Object.getPrototypeOf(this.prototype)._template;i&&!t&&Array.from(i.content.querySelectorAll("style[include]")).forEach((t=>{this._includeStyle(t.getAttribute("include"),e);})),this._includeMatchingThemes(e);}static _includeMatchingThemes(e){const t=_e.prototype.modules;let i=!1;const s=this.is+"-default-theme";Object.keys(t).sort(((e,t)=>{const i=0===e.indexOf("vaadin-"),s=0===t.indexOf("vaadin-"),r=["lumo-","material-"],n=r.filter((t=>0===e.indexOf(t))).length>0,o=r.filter((e=>0===t.indexOf(e))).length>0;return i!==s?i?-1:1:n!==o?n?-1:1:0})).forEach((r=>{if(r!==s){const s=t[r].getAttribute("theme-for");s&&s.split(" ").forEach((t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(i=!0,this._includeStyle(r,e));}));}})),!i&&t[s]&&this._includeStyle(s,e);}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const i=document.createElement("style");i.setAttribute("include",e),t.content.appendChild(i);}}};let Ys=!1;window.addEventListener("keydown",(()=>{Ys=!0;}),{capture:!0}),window.addEventListener("mousedown",(()=>{Ys=!1;}),{capture:!0});const qs=e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}},Js=e=>class extends(qs(e)){static get properties(){return {autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",(e=>{e.composedPath()[0]===this?this.contains(e.relatedTarget)||this._focus():-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0);})),this.addEventListener("focusout",(e=>this._setFocused(!1))),super.ready();const e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}));};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",(e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout((()=>this._isShiftTabbing=!1),0);else {const e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){const e=document.createElement("input");e.style.position="absolute",e.style.opacity="0",e.tabIndex=this.tabIndex,this.parentNode.insertBefore(e,this.nextSibling),e.focus(),e.addEventListener("focusout",(()=>this.parentNode.removeChild(e)));}}})),this.autofocus&&!this.disabled&&window.requestAnimationFrame((()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","");}));}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1);}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&Ys?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring");}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0));}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0));}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1));}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"));}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e});}click(){this.disabled||super.click();}},Xs=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=qi();}while(e||t)};class Zs{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,i){const{scrollLeft:s}=i;if("rtl"!==t||!e)return s;switch(e){case"negative":return i.scrollWidth-i.clientWidth+s;case"reverse":return i.scrollWidth-i.clientWidth-s}return s}static setNormalizedScrollLeft(e,t,i,s){if("rtl"===t&&e)switch(e){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+s;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-s;break;default:i.scrollLeft=s;}else i.scrollLeft=s;}}const Ks=[],Qs=function(){const e=ir();Ks.forEach((t=>{tr(t,e);}));};let er;new MutationObserver(Qs).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const tr=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir");},ir=function(){return document.documentElement.getAttribute("dir")},sr=e=>class extends e{static get properties(){return {dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),er||(er=Zs.detectScrollType());}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),tr(this,ir()));}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"dir"!==e)return;const s=i===ir()&&-1===Ks.indexOf(this),r=!i&&t&&-1===Ks.indexOf(this),n=i!==ir()&&t===ir();s||r?(this.__subscribe(),tr(this,ir())):n&&this.__subscribe(!1);}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir");}__subscribe(e=!0){e?-1===Ks.indexOf(this)&&Ks.push(this):Ks.indexOf(this)>-1&&Ks.splice(Ks.indexOf(this),1);}__getNormalizedScrollLeft(e){return Zs.getNormalizedScrollLeft(er,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return Zs.setNormalizedScrollLeft(er,this.getAttribute("dir")||"ltr",e,t)}},rr=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,nr=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function or(){function e(){return !0}return cr(e)}function ar(){try{return !!lr()||!!dr()&&(nr?!hr():!or())}catch(e){return !1}}function lr(){return localStorage.getItem("vaadin.developmentmode.force")}function dr(){return ["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function hr(){if(nr){if(Object.keys(nr).map((e=>nr[e])).filter((e=>e.productionMode)).length>0)return !0}return !1}function cr(e,t){if("function"!=typeof e)return;const i=rr.exec(e.toString());if(i)try{e=new Function(i[1]);}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s);}return e(t)}window.Vaadin=window.Vaadin||{};const ur=function(e,t){if(window.Vaadin.developmentMode)return cr(e,t)};function pr(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=ar());const _r=function(){if("function"==typeof ur)return ur(pr)};let mr;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){_r&&_r();};const fr=new Set,gr=e=>class extends(sr(e)){static finalize(){super.finalize();const{is:e}=this;e&&!fr.has(e)&&(window.Vaadin.registrations.push(this),fr.add(e),window.Vaadin.developmentModeCallback&&(mr=Wi.debounce(mr,vt,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]();})),Yi(mr)));}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.');}};class yr extends(gr(Js(Us(js(ji))))){static get template(){return Gi`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        label {
          display: inline-flex;
          align-items: baseline;
          outline: none;
        }

        [part='checkbox'] {
          position: relative;
          display: inline-block;
          flex: none;
        }

        input[type='checkbox'] {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }
      </style>

      <label>
        <span part="checkbox">
          <input
            type="checkbox"
            checked="{{checked::change}}"
            disabled$="[[disabled]]"
            indeterminate="{{indeterminate::change}}"
            role="presentation"
            tabindex="-1"
          />
        </span>

        <span part="label">
          <slot></slot>
        </span>
      </label>
    `}static get is(){return "vaadin-checkbox"}static get version(){return "3.0.0"}static get properties(){return {checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name;}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e;}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute();}_updateLabelAttribute(){const e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty");}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",Boolean(e));}_indeterminateChanged(e){e?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked);}_addActiveListeners(){this._addEventListenerToNode(this,"down",(e=>{this.__interactionsAllowed(e)&&this.setAttribute("active","");})),this._addEventListenerToNode(this,"up",(()=>this.removeAttribute("active"))),this.addEventListener("keydown",(e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this.setAttribute("active",""));})),this.addEventListener("keyup",(e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1));}));}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){return !this.disabled&&"a"!==e.target.localName}_handleClick(e){this.__interactionsAllowed(e)&&(this.indeterminate?(this.indeterminate=!1,e.preventDefault(),this._toggleChecked()):e.composedPath()[0]!==this._nativeCheckbox&&(e.preventDefault(),this._toggleChecked()));}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}));}}customElements.define(yr.is,yr),Ue("vaadin-grid",Ge`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
    }

    [part~='row'][dragstart] {
      /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
      border-bottom: 100px solid transparent;
      z-index: 100 !important;
      opacity: 0.9;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    [ios] [part~='row'][dragstart] [part~='cell'] {
      background: var(--lumo-primary-color-50pct);
    }

    #scroller:not([ios]) [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='left']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='right']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"}),Ue("vaadin-checkbox",Ge`
    :host(.vaadin-grid-select-all-checkbox) {
      font-size: var(--lumo-font-size-m);
    }
  `,{moduleId:"vaadin-grid-select-all-checkbox-lumo"});let br=!1,vr=[],wr=[];function Ar(){br=!0,requestAnimationFrame((function(){br=!1,Cr(vr),setTimeout((function(){Sr(wr);}));}));}function Cr(e){for(;e.length;)xr(e.shift());}function Sr(e){for(let t=0,i=e.length;t<i;t++)xr(e.shift());}function xr(e){const t=e[0],i=e[1],s=e[2];try{i.apply(t,s);}catch(r){setTimeout((()=>{throw r}));}}function Pr(e,t,i){br||Ar(),vr.push([e,t,i]);}function Er(e,t,i){br||Ar(),wr.push([e,t,i]);}class Tr{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector="";}}function Ir(e){return Rr(zr(e=Or(e)),e)}function Or(e){return e.replace(Vr.comments,"").replace(Vr.port,"")}function zr(e){let t=new Tr;t.start=0,t.end=e.length;let i=t;for(let s=0,r=e.length;s<r;s++)if(e[s]===Br){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;i=new Tr,i.start=s+1,i.parent=e,i.previous=t,e.rules.push(i);}else e[s]===$r&&(i.end=s+1,i=i.parent||t);return t}function Rr(e,t){let i=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let s=e.previous?e.previous.end:e.parent.start;i=t.substring(s,e.start-1),i=Nr(i),i=i.replace(Vr.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=i.trim();e.atRule=0===r.indexOf(Wr),e.atRule?0===r.indexOf(jr)?e.type=Hr.MEDIA_RULE:r.match(Vr.keyframesRule)&&(e.type=Hr.KEYFRAMES_RULE,e.keyframesName=e.selector.split(Vr.multipleSpaces).pop()):0===r.indexOf(Gr)?e.type=Hr.MIXIN_RULE:e.type=Hr.STYLE_RULE;}let s=e.rules;if(s)for(let r,n=0,o=s.length;n<o&&(r=s[n]);n++)Rr(r,t);return e}function Nr(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return "\\"+e}))}function kr(e,t,i=""){let s="";if(e.cssText||e.rules){let i=e.rules;if(i&&!Dr(i))for(let e,r=0,n=i.length;r<n&&(e=i[r]);r++)s=kr(e,t,s);else s=t?e.cssText:Lr(e.cssText),s=s.trim(),s&&(s="  "+s+"\n");}return s&&(e.selector&&(i+=e.selector+" "+Br+"\n"),i+=s,e.selector&&(i+=$r+"\n\n")),i}function Dr(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(Gr)}function Lr(e){return Fr(e=Mr(e))}function Mr(e){return e.replace(Vr.customProp,"").replace(Vr.mixinProp,"")}function Fr(e){return e.replace(Vr.mixinApply,"").replace(Vr.varApply,"")}const Hr={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Br="{",$r="}",Vr={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Gr="--",jr="@media",Wr="@",Ur=new Set,Yr="shady-unscoped";function qr(e){const t=e.textContent;if(!Ur.has(t)){Ur.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e);}}function Jr(e){return e.hasAttribute(Yr)}function Xr(e,t){return e?("string"==typeof e&&(e=Ir(e)),t&&Kr(e,t),kr(e,M$1)):""}function Zr(e){return !e.__cssRules&&e.textContent&&(e.__cssRules=Ir(e.textContent)),e.__cssRules||null}function Kr(e,t,i,s){if(!e)return;let r=!1,n=e.type;if(s&&n===Hr.MEDIA_RULE){let t=e.selector.match(T);t&&(window.matchMedia(t[1]).matches||(r=!0));}n===Hr.STYLE_RULE?t(e):i&&n===Hr.KEYFRAMES_RULE?i(e):n===Hr.MIXIN_RULE&&(r=!0);let o=e.rules;if(o&&!r)for(let a,l=0,d=o.length;l<d&&(a=o[l]);l++)Kr(a,t,i,s);}function Qr(e,t){let i=0;for(let s=t,r=e.length;s<r;s++)if("("===e[s])i++;else if(")"===e[s]&&0==--i)return s;return -1}function en(e,t){let i=e.indexOf("var(");if(-1===i)return t(e,"","","");let s=Qr(e,i+3),r=e.substring(i+4,s),n=e.substring(0,i),o=en(e.substring(s+1),t),a=r.indexOf(",");return -1===a?t(n,r.trim(),"",o):t(n,r.substring(0,a).trim(),r.substring(a+1).trim(),o)}function tn(e){let t=e.localName,i="",s="";return t?t.indexOf("-")>-1?i=t:(s=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,s=e.extends),{is:i,typeExtension:s}}function sn(e){const t=[],i=e.querySelectorAll("style");for(let s=0;s<i.length;s++){const e=i[s];Jr(e)?R||(qr(e),e.parentNode.removeChild(e)):(t.push(e.textContent),e.parentNode.removeChild(e));}return t.join("").trim()}window.ShadyDOM&&window.ShadyDOM.wrap;const rn="css-build";function nn(e){if(void 0!==k)return k;if(void 0===e.__cssBuild){const t=e.getAttribute(rn);if(t)e.__cssBuild=t;else {const t=an(e);""!==t&&ln(e),e.__cssBuild=t;}}return e.__cssBuild||""}function on(e){return ""!==nn(e)}function an(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===rn)return e[1]}return ""}function ln(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t);}const dn=/;\s*/m,hn=/^\s*(initial)|(inherit)\s*$/,cn=/\s*!important/,un="_-_";class pn{constructor(){this._map={};}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}};}get(e){return e=e.trim(),this._map[e]||null}}let _n=null;class mn{constructor(){this._currentElement=null,this._measureElement=null,this._map=new pn;}detectMixin(e){return z(e)}gatherStyles(e){const t=sn(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=Zr(e);return this.transformRules(i,t),e.textContent=Xr(i),i}transformCustomStyle(e){let t=Zr(e);return Kr(t,(e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e);})),e.textContent=Xr(t),t}transformRules(e,t){this._currentElement=t,Kr(e,(e=>{this.transformRule(e);})),this._currentElement=null;}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *");}transformCssText(e,t){return e=e.replace(P,((e,i,s,r)=>this._produceCssProperties(e,i,s,r,t))),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let s=!1;return Kr(t,(t=>{s=s||t===e,s||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText));})),i}_consumeCssProperties(e,t){let i=null;for(;i=E.exec(e);){let s=i[0],r=i[1],n=i.index,o=n+s.indexOf("@apply"),a=n+s.length,l=e.slice(0,o),d=e.slice(a),h=t?this._fallbacksFromPreviousRules(t):{};Object.assign(h,this._cssTextToMap(l));let c=this._atApplyToCssProperties(r,h);e=`${l}${c}${d}`,E.lastIndex=n+c.length;}return e}_atApplyToCssProperties(e,t){e=e.replace(dn,"");let i=[],s=this._map.get(e);if(s||(this._map.set(e,{}),s=this._map.get(e)),s){let r,n,o;this._currentElement&&(s.dependants[this._currentElement]=!0);const a=s.properties;for(r in a)o=t&&t[r],n=[r,": var(",e,un,r],o&&n.push(",",o.replace(cn,"")),n.push(")"),cn.test(a[r])&&n.push(" !important"),i.push(n.join(""));}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=hn.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,s,r=e.split(";"),n={};for(let o,a,l=0;l<r.length;l++)o=r[l],o&&(a=o.split(":"),a.length>1&&(i=a[0].trim(),s=a.slice(1).join(":"),t&&(s=this._replaceInitialOrInherit(i,s)),n[i]=s));return n}_invalidateMixinEntry(e){if(_n)for(let t in e.dependants)t!==this._currentElement&&_n(t);}_produceCssProperties(e,t,i,s,r){if(i&&en(i,((e,t)=>{t&&this._map.get(t)&&(s=`@apply ${t};`);})),!s)return e;let n=this._consumeCssProperties(""+s,r),o=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(n,!0),l=a,d=this._map.get(t),h=d&&d.properties;h?l=Object.assign(Object.create(h),a):this._map.set(t,l);let c,u,p=[],_=!1;for(c in l)u=a[c],void 0===u&&(u="initial"),h&&!(c in h)&&(_=!0),p.push(`${t}${un}${c}: ${u}`);return _&&this._invalidateMixinEntry(d),d&&(d.properties=l),i&&(o=`${e};${o}`),`${o}${p.join("; ")};`}}mn.prototype.detectMixin=mn.prototype.detectMixin,mn.prototype.transformStyle=mn.prototype.transformStyle,mn.prototype.transformCustomStyle=mn.prototype.transformCustomStyle,mn.prototype.transformRules=mn.prototype.transformRules,mn.prototype.transformRule=mn.prototype.transformRule,mn.prototype.transformTemplate=mn.prototype.transformTemplate,mn.prototype._separator=un,Object.defineProperty(mn.prototype,"invalidCallback",{get:()=>_n,set(e){_n=e;}});const fn={},gn="_applyShimCurrentVersion",yn="_applyShimNextVersion",bn="_applyShimValidatingVersion",vn=Promise.resolve();function wn(e){let t=fn[e];t&&An(t);}function An(e){e[gn]=e[gn]||0,e[bn]=e[bn]||0,e[yn]=(e[yn]||0)+1;}function Cn(e){return e[gn]===e[yn]}function Sn(e){return !Cn(e)&&e[bn]===e[yn]}function xn(e){e[bn]=e[yn],e._validating||(e._validating=!0,vn.then((function(){e[gn]=e[yn],e._validating=!1;})));}const Pn=new mn;class En{constructor(){this.customStyleInterface=null,Pn.invalidCallback=wn;}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Pn.transformCustomStyle(e);},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame((()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles();}));});}prepareTemplate(e,t){if(this.ensure(),on(e))return;fn[t]=e;let i=Pn.transformTemplate(e,t);e._styleAst=i;}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],s=this.customStyleInterface.getStyleForCustomStyle(i);s&&Pn.transformCustomStyle(s);}this.customStyleInterface.enqueued=!1;}}styleSubtree(e,t){if(this.ensure(),t&&I(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e]);}else {let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e]);}}styleElement(e){this.ensure();let{is:t}=tn(e),i=fn[t];if((!i||!on(i))&&i&&!Cn(i)){Sn(i)||(this.prepareTemplate(i,t),xn(i));let s=e.shadowRoot;if(s){let e=s.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=Xr(i._styleAst));}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e);}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new En;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,s){e.flushCustomStyles(),e.prepareTemplate(t,i);},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i);},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i);},styleElement(t){e.flushCustomStyles(),e.styleElement(t);},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t);},getComputedStyleValue:(e,t)=>O(e,t),flushCustomStyles(){e.flushCustomStyles();},nativeCss:M$1,nativeShadow:R,cssBuild:k,disableRuntime:L},t&&(window.ShadyCSS.CustomStyleInterface=t);}window.ShadyCSS.ApplyShim=Pn;const Tn=/:host\(:dir\((ltr|rtl)\)\)/g,In=':host([dir="$1"])',On=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,zn=':host([dir="$2"]) $1',Rn=/:dir\((?:ltr|rtl)\)/,Nn=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),kn=[];let Dn=null,Ln="";function Mn(){Ln=document.documentElement.getAttribute("dir");}function Fn(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Ln);}}function Hn(){Mn(),Ln=document.documentElement.getAttribute("dir");for(let e=0;e<kn.length;e++)Fn(kn[e]);}function Bn(){Dn&&Dn.takeRecords().length&&Hn();}const $n=qe((e=>{Nn||Dn||(Mn(),Dn=new MutationObserver(Hn),Dn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Et(e);class i extends t{static _processStyleText(e,i){return e=t._processStyleText.call(this,e,i),!Nn&&Rn.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(Tn,In),t=t.replace(On,zn),t}constructor(){super(),this.__autoDirOptOut=!1;}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir");}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Bn(),kn.push(this),Fn(this));}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=kn.indexOf(this);e>-1&&kn.splice(e,1);}}}return i.__activateDir=!1,i}));function Vn(){document.body.removeAttribute("unresolved");}function Gn(e,t,i){return {index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?Vn():window.addEventListener("DOMContentLoaded",Vn);const jn=0,Wn=1,Un=2,Yn=3;function qn(e,t,i,s,r,n){let o=n-r+1,a=i-t+1,l=new Array(o);for(let d=0;d<o;d++)l[d]=new Array(a),l[d][0]=d;for(let d=0;d<a;d++)l[0][d]=d;for(let d=1;d<o;d++)for(let i=1;i<a;i++)if(eo(e[t+i-1],s[r+d-1]))l[d][i]=l[d-1][i-1];else {let e=l[d-1][i]+1,t=l[d][i-1]+1;l[d][i]=e<t?e:t;}return l}function Jn(e){let t=e.length-1,i=e[0].length-1,s=e[t][i],r=[];for(;t>0||i>0;){if(0==t){r.push(Un),i--;continue}if(0==i){r.push(Yn),t--;continue}let n,o=e[t-1][i-1],a=e[t-1][i],l=e[t][i-1];n=a<l?a<o?a:o:l<o?l:o,n==o?(o==s?r.push(jn):(r.push(Wn),s=o),t--,i--):n==a?(r.push(Yn),t--,s=a):(r.push(Un),i--,s=l);}return r.reverse(),r}function Xn(e,t,i,s,r,n){let o,a=0,l=0,d=Math.min(i-t,n-r);if(0==t&&0==r&&(a=Zn(e,s,d)),i==e.length&&n==s.length&&(l=Kn(e,s,d-a)),r+=a,n-=l,(i-=l)-(t+=a)==0&&n-r==0)return [];if(t==i){for(o=Gn(t,[],0);r<n;)o.removed.push(s[r++]);return [o]}if(r==n)return [Gn(t,[],i-t)];let h=Jn(qn(e,t,i,s,r,n));o=void 0;let c=[],u=t,p=r;for(let _=0;_<h.length;_++)switch(h[_]){case jn:o&&(c.push(o),o=void 0),u++,p++;break;case Wn:o||(o=Gn(u,[],0)),o.addedCount++,u++,o.removed.push(s[p]),p++;break;case Un:o||(o=Gn(u,[],0)),o.addedCount++,u++;break;case Yn:o||(o=Gn(u,[],0)),o.removed.push(s[p]),p++;}return o&&c.push(o),c}function Zn(e,t,i){for(let s=0;s<i;s++)if(!eo(e[s],t[s]))return s;return i}function Kn(e,t,i){let s=e.length,r=t.length,n=0;for(;n<i&&eo(e[--s],t[--r]);)n++;return n}function Qn(e,t){return Xn(e,0,e.length,t,0,t.length)}function eo(e,t){return e===t}function to(e){return "slot"===e.localName}let io=class{static getFlattenedNodes(e){const t=Je(e);return to(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map((e=>to(e)?Je(e=e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule();},this.connect(),this._schedule();}connect(){to(this._target)?this._listenSlots([this._target]):Je(this._target).children&&(this._listenSlots(Je(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e);})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e);})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0;}disconnect(){to(this._target)?this._unlistenSlots([this._target]):Je(this._target).children&&(this._unlistenSlots(Je(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1;}_schedule(){this._scheduled||(this._scheduled=!0,wt.run((()=>this.flush())));}_processMutations(e){this._processSlotMutations(e),this.flush();}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes);}}flush(){if(!this._connected)return !1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=Qn(t,this._effectiveNodes);for(let r,n=0;n<i.length&&(r=i[n]);n++)for(let t,i=0;i<r.removed.length&&(t=r.removed[i]);i++)e.removedNodes.push(t);for(let r,n=0;n<i.length&&(r=i[n]);n++)for(let i=r.index;i<r.index+r.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let s=!1;return (e.addedNodes.length||e.removedNodes.length)&&(s=!0,this.callback.call(this._target,e)),s}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];to(i)&&i.addEventListener("slotchange",this._boundSchedule);}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];to(i)&&i.removeEventListener("slotchange",this._boundSchedule);}}};const so=Element.prototype,ro=so.matches||so.matchesSelector||so.mozMatchesSelector||so.msMatchesSelector||so.oMatchesSelector||so.webkitMatchesSelector,no=function(e,t){return ro.call(e,t)};class oo{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e;}observeNodes(e){return new io(this.node,e)}unobserveNodes(e){e.disconnect();}notifyObserver(){}deepContains(e){if(Je(this.node).contains(e))return !0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=Je(t).parentNode||Je(t).host;return t===this.node}getOwnerRoot(){return Je(this.node).getRootNode()}getDistributedNodes(){return "slot"===this.node.localName?Je(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=Je(this.node).assignedSlot;for(;t;)e.push(t),t=Je(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return Je(i).importNode(e,t)}getEffectiveChildNodes(){return io.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let s,r=0,n=t.length;r<n&&(s=t[r]);r++)s.nodeType===Node.ELEMENT_NODE&&no(s,e)&&i.push(s);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function ao(e,t){for(let i=0;i<t.length;i++){let s=t[i];e[s]=function(){return this.node[s].apply(this.node,arguments)};}}function lo(e,t){for(let i=0;i<t.length;i++){let s=t[i];Object.defineProperty(e,s,{get:function(){return this.node[s]},configurable:!0});}}function ho(e,t){for(let i=0;i<t.length;i++){let s=t[i];Object.defineProperty(e,s,{get:function(){return this.node[s]},set:function(e){this.node[s]=e;},configurable:!0});}}class co{constructor(e){this.event=e;}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}let uo=oo;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(oo.prototype).forEach((t=>{"activeElement"!=t&&(e.prototype[t]=oo.prototype[t]);})),lo(e.prototype,["classList"]),uo=e,Object.defineProperties(co.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&po(e).getOwnerRoot(),i=this.path;for(let s=0;s<i.length;s++){const e=i[s];if(po(e).getOwnerRoot()===t)return e}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}});}else ao(oo.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),lo(oo.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),ho(oo.prototype,["textContent","innerHTML","className"]);const po=function(e){if((e=e||document)instanceof uo)return e;if(e instanceof co)return e;let t=e.__domApi;return t||(t=e instanceof Event?new co(e):new uo(e),e.__domApi=t),t},_o=window.ShadyDOM,mo=window.ShadyCSS;function fo(e,t){return Je(e).getRootNode()===t}function go(e,t=!1){if(!_o||!mo)return null;if(!_o.handlesDynamicScoping)return null;const i=mo.ScopingShim;if(!i)return null;const s=i.scopeForNode(e),r=Je(e).getRootNode(),n=e=>{if(!fo(e,r))return;const t=Array.from(_o.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let n=0;n<t.length;n++){const e=t[n];if(!fo(e,r))continue;const o=i.currentScopeForNode(e);o!==s&&(""!==o&&i.unscopeNode(e,o),i.scopeNode(e,s));}};if(n(e),t){const t=new MutationObserver((e=>{for(let t=0;t<e.length;t++){const i=e[t];for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&n(t);}}}));return t.observe(e,{childList:!0,subtree:!0}),t}return null}const yo="disable-upgrade",bo=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor;}return ()=>[]};qe((e=>{const t=Hi(e);let i=bo(t);class s extends t{constructor(){super(),this.__isUpgradeDisabled;}static get observedAttributes(){return i.call(this).concat(yo)}_initializeProperties(){this.hasAttribute(yo)?this.__isUpgradeDisabled=!0:super._initializeProperties();}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties();}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,i,s){e==yo?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,Je(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,i,s);}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback();}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback();}}return s}));const vo="disable-upgrade";let wo=window.ShadyCSS;const Ao=qe((e=>{const t=js(Hi(e)),i=Fi?t:$n(t),s=bo(i),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes;}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,i){(this.__dataAttributes&&this.__dataAttributes[e]||e===vo)&&this.attributeChangedCallback(e,t,i,null);}setAttribute(e,t){if(ae&&!this._legacyForceObservedAttributes){const i=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,i,String(t));}else super.setAttribute(e,t);}removeAttribute(e){if(ae&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null);}else super.removeAttribute(e);}static get observedAttributes(){return ae&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],ki(this.prototype)),this.__observedAttributes):s.call(this).concat(vo)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties();}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached());}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached());}detached(){}attributeChangedCallback(e,t,i,s){t!==i&&(e==vo?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,Je(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,i,s),this.attributeChanged(e,t,i)));}attributeChanged(e,t,i){}_initializeProperties(){if(Q&&this.hasAttribute(vo))this.__isUpgradeDisabled=!0;else {let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),ae&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners();}}_takeAttributes(){const e=this.attributes;for(let t=0,i=e.length;t<i;t++){const i=e[t];this.__attributeReaction(i.name,null,i.value);}}_registered(){}ready(){this._ensureAttributes(),super.ready();}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i);}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t);}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let s,r=0;r<i.length&&(s=i[r]);r++){let i=Object.getOwnPropertyDescriptor(t,s);i&&Object.defineProperty(e,s,i);}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let s=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});s.detail=t;let r=i.node||this;return Je(r).dispatchEvent(s),s}listen(e,t,i){e=e||this;let s=this.__boundListeners||(this.__boundListeners=new WeakMap),r=s.get(e);r||(r={},s.set(e,r));let n=t+i;r[n]||(r[n]=this._addMethodEventListenerToNode(e,t,i,this));}unlisten(e,t,i){e=e||this;let s=this.__boundListeners&&this.__boundListeners.get(e),r=t+i,n=s&&s[r];n&&(this._removeEventListenerFromNode(e,t,n),s[r]=null);}setScrollDirection(e,t){Ms(t||this,r[e]||"auto");}$$(e){return this.root.querySelector(e)}get domHost(){let e=Je(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=po(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush();}getEffectiveChildNodes(){return po(this).getEffectiveChildNodes()}queryDistributedElements(e){return po(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,s=0;i=e[s];s++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?po(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){const t=this;return t!==e&&Je(t).contains(e)&&Je(t).getRootNode()===Je(e).getRootNode()}isLocalDescendant(e){return this.root===Je(e).getRootNode()}scopeSubtree(e,t=!1){return go(e,t)}getComputedStyleValue(e){return wo.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=Wi.debounce(this._debouncers[e],i>0?yt.after(i):wt,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return !(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush();}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel();}async(e,t){return t>0?yt.run(e.bind(this),t):~wt.run(e.bind(this))}cancelAsync(e){e<0?wt.cancel(~e):yt.cancel(e);}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let s in t)i[s]=t[s];return i}elementMatches(e,t){return no(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(Je(i).setAttribute(e,""),!0):(Je(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e);}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e;}translate3d(e,t,i,s){s=s||this,this.transform("translate3d("+e+","+t+","+i+")",s);}arrayDelete(e,t){let i;if(Array.isArray(e)){if(i=e.indexOf(t),i>=0)return e.splice(i,1)}else {if(i=rt(this,e).indexOf(t),i>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t);}}_log(...e){this._logger("log",e);}_warn(...e){this._logger("warn",e);}_error(...e){this._logger("error",e);}_logf(e,...t){return ["[%s::%s]",this.is,e,...t]}}return n.prototype.is="",n})),Co={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},So={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},xo=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},So);function Po(e,t,i){const s=e._noAccessors,r=Object.getOwnPropertyNames(e);for(let n=0;n<r.length;n++){let o=r[n];if(!(o in i))if(s)t[o]=e[o];else {let i=Object.getOwnPropertyDescriptor(e,o);i&&(i.configurable=!0,Object.defineProperty(t,o,i));}}}function Eo(e,t,i){for(let s=0;s<t.length;s++)To(e,t[s],i,xo);}function To(e,t,i,s){Po(t,e,s);for(let r in Co)t[r]&&(i[r]=i[r]||[],i[r].push(t[r]));}function Io(e,t,i){t=t||[];for(let s=e.length-1;s>=0;s--){let r=e[s];r?Array.isArray(r)?Io(r,t):t.indexOf(r)<0&&(!i||i.indexOf(r)<0)&&t.unshift(r):console.warn("behavior is null, check for missing or 404 import");}return t}function Oo(e,t){for(const i in t){const s=e[i],r=t[i];e[i]=!("value"in r)&&s&&"value"in s?Object.assign({value:s.value},r):r;}}const zo=Ao(HTMLElement);function Ro(e,t,i){let s;const r={};class n extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(s)for(let e,t=0;t<s.length;t++)e=s[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate();}else t._finalizeClass.call(this);}static get properties(){const t={};if(s)for(let e=0;e<s.length;e++)Oo(t,s[e].properties);return Oo(t,e.properties),t}static get observers(){let t=[];if(s)for(let e,i=0;i<s.length;i++)e=s[i],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=r.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this);}_registered(){const e=n.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),Q&&o(e);const t=Object.getPrototypeOf(this);let i=r.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=r.registered,i)for(let e=0;e<i.length;e++)i[e].call(t);}}_applyListeners(){super._applyListeners();const e=r.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e]);}}_ensureAttributes(){const e=r.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e]);}super._ensureAttributes();}ready(){super.ready();let e=r.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this);}attached(){super.attached();let e=r.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this);}detached(){super.detached();let e=r.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this);}attributeChanged(e,t,i){super.attributeChanged();let s=r.attributeChanged;if(s)for(let r=0;r<s.length;r++)s[r].call(this,e,t,i);}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;s=Io(i,null,e),n.prototype.behaviors=e?e.concat(i):s;}const o=t=>{s&&Eo(t,s,r),To(t,e,r,So);};return Q||o(n.prototype),n.generatedFrom=e,n}const No=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(zo):zo;return i=Ro(e,i,e.behaviors),i.is=i.prototype.is=e.is,i};function ko(e,t,i,s,r){let n;r&&(n="object"==typeof i&&null!==i,n&&(s=e.__dataTemp[t]));let o=s!==i&&(s==s||i==i);return n&&o&&(e.__dataTemp[t]=i),o}const Do=qe((e=>{class t extends e{_shouldPropertyChange(e,t,i){return ko(this,e,t,i,!0)}}return t})),Lo=qe((e=>{class t extends e{static get properties(){return {mutableData:Boolean}}_shouldPropertyChange(e,t,i){return ko(this,e,t,i,this.mutableData)}}return t}));Do._mutablePropertyChange=ko;let Mo=null;function Fo(){return Mo}Fo.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Fo,writable:!0}});const Ho=Ri(Fo),Bo=Do(Ho);function $o(e,t){Mo=e,Object.setPrototypeOf(e,t.prototype),new t,Mo=null;}const Vo=Ri(class{});function Go(e,t){for(let i=0;i<t.length;i++){let s=t[i];if(Boolean(e)!=Boolean(s.__hideTemplateChildren__))if(s.nodeType===Node.TEXT_NODE)e?(s.__polymerTextContent__=s.textContent,s.textContent=""):s.textContent=s.__polymerTextContent__;else if("slot"===s.localName)if(e)s.__polymerReplaced__=document.createComment("hidden-slot"),Je(Je(s).parentNode).replaceChild(s.__polymerReplaced__,s);else {const e=s.__polymerReplaced__;e&&Je(Je(e).parentNode).replaceChild(s,e);}else s.style&&(e?(s.__polymerDisplay__=s.style.display,s.style.display="none"):s.style.display=s.__polymerDisplay__);s.__hideTemplateChildren__=e,s._showHideChildren&&s._showHideChildren(e);}}class jo extends Vo{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let s=this.root.firstChild;s;s=s.nextSibling)t.push(s),s.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties();}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let t in e)this._setPendingProperty(t,e[t]);}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this);}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,(e=>{e.model=this,i(e);}));else {let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(e,t,i);}}_showHideChildren(e){Go(e,this.children);}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i);}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost;}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e;}return e}dispatchEvent(e){return !0}}const Wo=Do(jo);function Uo(e){let t=e.__dataHost;return t&&t._methodHost||t}function Yo(e,t,i){let s=i.mutableData?Wo:jo;Qo.mixin&&(s=Qo.mixin(s));let r=class extends s{};return r.prototype.__templatizeOptions=i,r.prototype._bindTemplate(e),Xo(r,e,t,i),r}function qo(e,t,i,s){let r=i.forwardHostProp;if(r&&t.hasHostProps){const n="template"==e.localName;let o=t.templatizeTemplateClass;if(!o){if(n){let e=i.mutableData?Bo:Ho;class s extends e{}o=t.templatizeTemplateClass=s;}else {const i=e.constructor;class s extends i{}o=t.templatizeTemplateClass=s;}let a=t.hostProps;for(let e in a)o.prototype._addPropertyEffect("_host_"+e,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Jo(e,r)}),o.prototype._createNotifyingProperty("_host_"+e);ee&&s&&ea(t,i,s);}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),n)$o(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else {Object.setPrototypeOf(e,o.prototype);const i=t.hostProps;for(let t in i)if(t="_host_"+t,t in e){const i=e[t];delete e[t],e.__data[t]=i;}}}}function Jo(e,t){return function(e,i,s){t.call(e.__templatizeOwner,i.substring("_host_".length),s[i]);}}function Xo(e,t,i,s){let r=i.hostProps||{};for(let n in s.instanceProps){delete r[n];let t=s.notifyInstanceProp;t&&e.prototype._addPropertyEffect(n,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Zo(n,t)});}if(s.forwardHostProp&&t.__dataHost)for(let n in r)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(n,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Ko()});}function Zo(e,t){return function(e,i,s){t.call(e.__templatizeOwner,e,i,s[i]);}}function Ko(){return function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0);}}function Qo(e,t,i){if(Z&&!Uo(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let s=(t?t.constructor:jo)._parseTemplate(e),r=s.templatizeInstanceClass;r||(r=Yo(e,s,i),s.templatizeInstanceClass=r);const n=Uo(e);qo(e,s,i,n);let o=class extends r{};return o.prototype._methodHost=n,o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=s.hostProps,o=o,o}function ea(e,t,i){const s=i.constructor._properties,{propertyEffects:r}=e,{instanceProps:n}=t;for(let o in r)if(!(s[o]||n&&n[o])){const e=r[o];for(let t=0;t<e.length;t++){const{part:i}=e[t].info;if(!i.signature||!i.signature.static){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function ta(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost;}else t=Je(t).parentNode;return null}let ia=!1;function sa(){if(Q&&!U){if(!ia){ia=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e);}return !0}return !1}const ra=js(Lo(Ri(HTMLElement)));class na extends ra{static get observedAttributes(){return ["mutable-data"]}constructor(){if(super(),Z)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null;}attributeChangedCallback(e,t,i,s){this.mutableData=!0;}connectedCallback(){sa()||(this.style.display="none"),this.render();}disconnectedCallback(){this.__removeChildren();}__insertChildren(){Je(Je(this).parentNode).insertBefore(this.root,this);}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e]);}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver((()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render();}));return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties();}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));}}customElements.define("dom-bind",na);const oa=Lo(ji);class aa extends oa{static get is(){return "dom-repeat"}static get template(){return null}static get properties(){return {items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!oe,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return ["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo;}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);}connectedCallback(){if(super.connectedCallback(),sa()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=Je(Je(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e);}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render();}));return e.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Qo(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(e,t){let i=this.__instances;for(let s,r=0;r<i.length&&(s=i[r]);r++)s.forwardHostProp(e,t);},notifyInstanceProp:function(e,t,i){if(tt(this.as,t)){let s=e[this.itemsIndexAs];t==this.as&&(this.items[s]=i);let r=et(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,t);this.notifyPath(r,i);}}});}return !0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render);}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render);}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ");}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay);}}else this.__debounceRender(this.__render,this.delay);}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render));}__debounceRender(e,t=0){this.__renderDebouncer=Wi.debounce(this.__renderDebouncer,t>0?yt.after(t):wt,e.bind(this)),Yi(this.__renderDebouncer);}render(){this.__debounceRender(this.__render),Xs();}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),i=this.__calculateLimit(t.length);this.__updateInstances(e,i,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame((()=>this.__continueChunking()))),this._setRenderedItemCount(this.__instances.length),oe&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));}__sortAndFilterItems(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return this.__filterFn&&(t=t.filter(((t,i,s)=>this.__filterFn(e[t],i,s)))),this.__sortFn&&t.sort(((t,i)=>this.__sortFn(e[t],e[i]))),t}__calculateLimit(e){let t=e;const i=this.__instances.length;if(this.initialCount){let s;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),s=Math.max(t-i,0),this.__chunkCount=s||1):(s=Math.min(Math.max(e-i,0),this.__chunkCount),t=Math.min(i+s,e)),this.__shouldMeasureChunk=s===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now();}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1;}this.__shouldContinueChunking&&this.__debounceRender(this.__render);}__updateInstances(e,t,i){const s=this.__itemsIdxToInstIdx={};let r;for(r=0;r<t;r++){let t=this.__instances[r],n=i[r],o=e[n];s[n]=r,t?(t._setPendingProperty(this.as,o),t._setPendingProperty(this.indexAs,r),t._setPendingProperty(this.itemsIndexAs,n),t._flushProperties()):this.__insertInstance(o,r,n);}for(let n=this.__instances.length-1;n>=r;n--)this.__detachAndRemoveInstance(n);}__detachInstance(e){let t=this.__instances[e];const i=Je(t.root);for(let s=0;s<t.children.length;s++){let e=t.children[s];i.appendChild(e);}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this);}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1);}__stampInstance(e,t,i){let s={};return s[this.as]=e,s[this.indexAs]=t,s[this.itemsIndexAs]=i,new this.__ctor(s)}__insertInstance(e,t,i){const s=this.__stampInstance(e,t,i);let r=this.__instances[t+1],n=r?r.children[0]:this;return Je(Je(this).parentNode).insertBefore(s.root,n),this.__instances[t]=s,s}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e);}__handleItemPath(e,t){let i=e.slice(6),s=i.indexOf("."),r=s<0?i:i.substring(0,s);if(r==parseInt(r,10)){let e=s<0?"":i.substring(s+1);this.__handleObservedPaths(e);let n=this.__itemsIdxToInstIdx[r],o=this.__instances[n];if(o){let i=this.as+(e?"."+e:"");o._setPendingPropertyOrPath(i,t,!1,!0),o._flushProperties();}return !0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return ta(this.template,e)}}customElements.define(aa.is,aa);class la extends ji{static get is(){return "dom-if"}static get template(){return null}static get properties(){return {if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo;}__debounceRender(){this.__renderDebouncer=Wi.debounce(this.__renderDebouncer,wt,(()=>this.__render())),Yi(this.__renderDebouncer);}disconnectedCallback(){super.disconnectedCallback();const e=Je(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Je(e).host)||this.__teardownInstance();}connectedCallback(){super.connectedCallback(),sa()||(this.style.display="none"),this.if&&this.__debounceRender();}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:Je(e).querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!Je(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render();}));return e.observe(this,{childList:!0}),!1}this.__template=t;}return !0}__ensureInstance(){let e=Je(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(Je(this).previousSibling!==t[t.length-1])for(let i,s=0;s<t.length&&(i=t[s]);s++)Je(e).insertBefore(i,this);}}else {if(!e)return !1;if(!this.__ensureTemplate())return !1;this.__createAndInsertInstance(e);}return !0}render(){Xs();}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),oe&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if);}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}class da extends la{constructor(){super(),this.__instance=null,this.__syncInfo=null;}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(Z&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=t._bindTemplate(this.__template,!0);i.runEffects=(e,t,i)=>{let s=this.__syncInfo;if(this.if)s&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(s.changedProps,t)),e(t,i);else if(this.__instance)if(s||(s=this.__syncInfo={runEffects:e,changedProps:{}}),i)for(const r in t){const e=Ze(r);s.changedProps[e]=this.__dataHost[e];}else Object.assign(s.changedProps,t);},this.__instance=t._stampTemplate(this.__template,i),Je(e).insertBefore(this.__instance,this);}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1));}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null);}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,Go(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties();}}class ha extends la{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null;}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Qo(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Ze(e)]=!0));}})),this.__instance=new this.__ctor,Je(e).insertBefore(this.__instance.root,this);}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=Je(e[0]).parentNode;if(t){t=Je(t);for(let i,s=0;s<e.length&&(i=e[s]);s++)t.removeChild(i);}}this.__invalidProps=null,this.__instance=null;}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties();}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties();}}const ca=ne?da:ha;customElements.define(ca.is,ca);let ua=qe((e=>{let t=Hi(e);class i extends t{static get properties(){return {items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return ["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null;}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],s=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),s){let e=Qn(i,s);this.__applySplices(e);}this.__lastItems=i,this.__lastMulti=e;}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else {let e=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t);}}__applySplices(e){let t=this.__selectedMap;for(let s=0;s<e.length;s++){let i=e[s];t.forEach(((e,s)=>{e<i.index||(e>=i.index+i.removed.length?t.set(s,e+i.addedCount-i.removed.length):t.set(s,-1));}));for(let e=0;e<i.addedCount;e++){let s=i.index+e;t.has(this.items[s])&&t.set(this.items[s],s);}}this.__updateLinks();let i=0;t.forEach(((e,s)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(s)):i++;}));}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`);}));}else this.__selectedMap.forEach((e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`);}));}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null;}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach(((i,s)=>{t==e++&&this.deselect(s);}));}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null;}}deselectIndex(e){this.deselect(this.items[e]);}select(e){this.selectIndex(this.items.indexOf(e));}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t);}}return i}))(ji);class pa extends ua{static get is(){return "array-selector"}static get template(){return null}}customElements.define(pa.is,pa);const _a=Ao(HTMLElement).prototype;var ma=new Set;const fa={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this);},attached:function(){this._requestResizeNotifications();},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(ma.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null;},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e);}),this),this._fireResize());},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this));},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e));},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize);},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize);},resizerShouldNotify:function(e){return !0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():U||this._fireResize();},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1});},_onIronRequestResizeNotifications:function(e){var t=po(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation());},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize);},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1);},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e();}));}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent();}),this):(ma.forEach((function(e){e!==this&&e._findParent();}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize());},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?ma.delete(this):ma.add(this);}},ga={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[e]:po(this.ownerDocument).querySelector("#"+e);}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e));},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e);},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e);},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t);},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null);},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget);}},ya=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),ba=ya&&ya[1]>=8,va=3,wa=No({behaviors:[fa,ga],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedVirtualIndex:-1,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){return Math.max(0,this._virtualCount-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this._virtualStartVal=e;},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this._physicalStartVal=e;},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return (this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e;},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let e=this._firstVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,i){if(t+=this._physicalSizes[e],t>this._scrollPosition)return i}))||0,this._firstVisibleIndexVal=e;}return e},get lastVisibleIndex(){let e=this._lastVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,s){t<this._scrollBottom&&(e=s),t+=this._physicalSizes[i];})),this._lastVisibleIndexVal=e;}return e},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,bt),this.listen(this,"iron-resize","_resizeHandler");},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler");},updateViewportBoundaries:function(){const e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight;},_scrollHandler:function(){const e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=e-this._scrollPosition;const i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const e=Math.round(t/this._physicalAverage);this._virtualStart=this._virtualStart+e,this._physicalStart=this._physicalStart+e,this._physicalTop=Math.floor(this._virtualStart)*this._physicalAverage,this._update();}else if(this._physicalCount>0){const{physicalTop:e,indexes:t}=this._getReusables(i);i?(this._physicalTop=e,this._virtualStart=this._virtualStart+t.length,this._physicalStart=this._physicalStart+t.length):(this._virtualStart=this._virtualStart-t.length,this._physicalStart=this._physicalStart-t.length),this._update(t,i?null:t),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),wt);}},_getReusables:function(e){let t,i,s;const r=[],n=this._hiddenContentSize*this._ratio,o=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const h=this._physicalBottom+this._scrollOffset,c=this._scrollTop,u=this._scrollBottom;for(e?(t=this._physicalStart,i=c-d):(t=this._physicalEnd,i=h-u);s=this._physicalSizes[t],i-=s,!(r.length>=l||i<=n);)if(e){if(a+r.length+1>=this._virtualCount)break;if(d+s>=c-this._scrollOffset)break;r.push(t),d+=s,t=(t+1)%l;}else {if(o-r.length<=0)break;if(d+this._physicalSize-s<=u)break;r.push(t),d-=s,t=0===t?l-1:t-1;}return {indexes:r,physicalTop:d-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._physicalSizes[e];}this._positionItems(),this._updateScrollerSize();}},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){const t=this._clamp(this._physicalCount+e,va,this._virtualCount-this._virtualStart)-this._physicalCount;let i=Math.round(.5*this._physicalCount);if(!(t<0)){if(t>0){const e=window.performance.now();[].push.apply(this._physicalItems,this._createPool(t));for(let i=0;i<t;i++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+t,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+t),this._update(),this._templateCost=(window.performance.now()-e)/t,i=Math.round(.5*this._physicalCount);}this._virtualEnd>=this._virtualCount-1||0===i||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),vt):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),wt));}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const{physicalTop:e,indexes:t}=this._getReusables(!0);this._physicalTop=e,this._virtualStart=this._virtualStart+t.length,this._physicalStart=this._physicalStart+t.length,this._update(t),this._update(),this._increasePoolIfNeeded(0);}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(va));},_itemsChanged:function(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,bt));},_iterateItems:function(e,t){let i,s,r,n;if(2===arguments.length&&t){for(n=0;n<t.length;n++)if(i=t[n],s=this._computeVidx(i),null!=(r=e.call(this,i,s)))return r}else {for(i=this._physicalStart,s=this._virtualStart;i<this._physicalCount;i++,s++)if(null!=(r=e.call(this,i,s)))return r;for(i=0;i<this._physicalStart;i++,s++)if(null!=(r=e.call(this,i,s)))return r}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_updateMetrics:function(e){Xs();let t=0,i=0;const s=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems((function(e){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0;}),e),this._physicalSize=this._physicalSize+t-i,this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((r*s+t)/this._physicalAverageCount));},_positionItems:function(){this._adjustScrollPosition();let e=this._physicalTop;this._iterateItems((function(t){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t];}));},_adjustScrollPosition:function(){const e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;const t=this._scrollTop;!ba&&t>0&&this._resetScrollPosition(t-e);}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop);},_updateScrollerSize:function(e){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight);},scrollToIndex:function(e){if("number"!=typeof e||e<0||e>this.items.length-1)return;if(Xs(),0===this._physicalCount)return;e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=e-1),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart)*this._physicalAverage;let t=this._physicalStart,i=this._virtualStart,s=0;const r=this._hiddenContentSize;for(;i<e&&s<=r;)s+=this._physicalSizes[t],t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+s),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null;},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0;},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this.updateViewportBoundaries(),this._isVisible?(this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1);}),bt);},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex:function(e){return (this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){this._debouncers=this._debouncers||{},this._debouncers[e]=Wi.debounce(this._debouncers[e],i,t.bind(this)),Yi(this._debouncers[e]);}});class Aa extends wa{static get properties(){return {size:{type:Number,notify:!0},_vidxOffset:{type:Number,value:0}}}static get observers(){return ["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback(),this._scrollHandler();}_updateScrollerItem(){}_afterScroll(){}_getRowTarget(){}_createScrollerRows(){}_canPopulate(){}scrollToIndex(e){this._warnPrivateAPIAccess("scrollToIndex"),this._scrollingToIndex=!0,e=Math.min(Math.max(e,0),this._effectiveSize-1),this.$.table.scrollTop=e/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight),this._scrollHandler(),this._accessIronListAPI((()=>this._maxScrollTop))&&this._virtualCount<this._effectiveSize&&this._adjustVirtualIndexOffset(1e6),this._accessIronListAPI((()=>super.scrollToIndex(e-this._vidxOffset))),this._scrollHandler();const t=Array.from(this.$.items.children).filter((t=>t.index===e))[0];if(t){const e=t.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;Math.abs(e)>1&&(this.$.table.scrollTop+=e,this._scrollHandler());}this._scrollingToIndex=!1;}_effectiveSizeChanged(e){let t,i=0;if(this._iterateItems(((e,s)=>{if(s===this._firstVisibleIndex){const s=this._physicalItems[e];t=s.index,i=s.getBoundingClientRect().top;}})),this.items&&e<this.items.length&&(this._scrollTop=0),!Array.isArray(this.items)){const t=1e5;this.items={length:Math.min(e,t)};}this._accessIronListAPI((()=>super._itemsChanged({path:"items"}))),this._virtualCount=Math.min(this.items.length,e)||0,0===this._scrollTop&&(this._accessIronListAPI((()=>this._scrollToIndex(Math.min(e-1,t)))),this._iterateItems((e=>{const s=this._physicalItems[e];if(s.index===t&&(this.$.table.scrollTop+=Math.round(s.getBoundingClientRect().top-i)),s.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){const e=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);s.children[e].focus();}}))),this._assignModels(),requestAnimationFrame((()=>this._update())),this.__updateFooterPositioning();}_positionItems(){let e;this._adjustScrollPosition(),isNaN(this._physicalTop)&&(e=!0,this._physicalTop=0);let t=this._physicalTop;this._iterateItems((e=>{this._physicalItems[e].style.transform=`translateY(${t}px)`,t+=this._physicalSizes[e];})),e&&this._scrollToIndex(0);}_increasePoolIfNeeded(e){0===e&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize||(this._initialPoolCreated?this._optPhysicalSize!==1/0&&(this._debounceIncreasePool=Wi.debounce(this._debounceIncreasePool,bt,(()=>{this._updateMetrics();const e=this._optPhysicalSize-this._physicalSize;let t=Math.ceil(e/this._physicalAverage);this._physicalCount+t>this._effectiveSize&&(t=Math.max(0,this._effectiveSize-this._physicalCount)),this._physicalSize&&t>0&&this._optPhysicalSize!==1/0&&(super._increasePoolIfNeeded(t),this.__reorderChildNodes());}))):(this._initialPoolCreated=!0,super._increasePoolIfNeeded(25)));}__reorderChildNodes(){const e=Array.from(this.$.items.childNodes);!!e.reduce(((e,t,i,s)=>{if(0===i||s[i-1].index===t.index-1)return e}),!0)||e.sort(((e,t)=>e.index-t.index)).forEach((e=>this.$.items.appendChild(e)));}_createPool(e){const t=document.createDocumentFragment(),i=this._createScrollerRows(e);i.forEach((e=>t.appendChild(e))),this._getRowTarget().appendChild(t);const s=this.querySelector("[slot]");if(s){const e=s.getAttribute("slot");s.setAttribute("slot","foo-bar"),s.setAttribute("slot",e);}return Er(this,(()=>this.notifyResize())),i}_assignModels(e){this._iterateItems(((e,t)=>{const i=this._physicalItems[e];this._toggleAttribute("hidden",t>=this._effectiveSize,i),this._updateScrollerItem(i,t+(this._vidxOffset||0));}),e);}_scrollHandler(){const e=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);const t=this._vidxOffset;this._accessIronListAPI((()=>this._maxScrollTop))&&this._virtualCount<this._effectiveSize?this._adjustVirtualIndexOffset(e):this._vidxOffset=0,this._vidxOffset!==t&&this._update(),this._afterScroll();}_adjustVirtualIndexOffset(e){if(Math.abs(e)>1e4){if(this._noScale)return void(this._noScale=!1);const e=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),t=e*this._effectiveSize;this._vidxOffset=Math.round(t-e*this._virtualCount);}else {const e=this._vidxOffset||0,t=1e3,i=100;0===this._scrollTop?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<t&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,i),e!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)),this._noScale=!0);const s=this._effectiveSize-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=s,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount)):this.firstVisibleIndex>this._virtualCount-t&&this._vidxOffset<s&&(this._vidxOffset+=Math.min(s-this._vidxOffset,i),e!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)),this._noScale=!0);}}_accessIronListAPI(e){this._warnPrivateAPIAccessAsyncEnabled=!1;const t=e.apply(this);return this._debouncerWarnPrivateAPIAccess=Wi.debounce(this._debouncerWarnPrivateAPIAccess,bt,(()=>this._warnPrivateAPIAccessAsyncEnabled=!0)),t}_debounceRender(e,t){super._debounceRender((()=>this._accessIronListAPI(e)),t);}_warnPrivateAPIAccess(e){this._warnPrivateAPIAccessAsyncEnabled&&console.warn(`Accessing private API (${e})!`);}_render(){this._accessIronListAPI(super._render);}_itemsChanged(){}get _firstVisibleIndex(){return this._accessIronListAPI((()=>super.firstVisibleIndex))}get _lastVisibleIndex(){return this._accessIronListAPI((()=>super.lastVisibleIndex))}_scrollToIndex(e){this._accessIronListAPI((()=>this.scrollToIndex(e)));}get firstVisibleIndex(){return this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex}set firstVisibleIndex(e){this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex=e;}get lastVisibleIndex(){return this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex}set lastVisibleIndex(e){this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex=e;}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries"),super.updateViewportBoundaries.apply(this,arguments);}_resizeHandler(){super._resizeHandler(),Xs();}}const Ca=e=>class extends e{static get observers(){return ["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter((e=>e.some((e=>e._headerTemplate||e.headerRenderer||e.path||e.header)))).length}_a11yGetFooterRowCount(e){return e.filter((e=>e.some((e=>e._headerTemplate||e.headerRenderer)))).length}_a11yUpdateGridSize(e,t){if(void 0===e||void 0===t)return;const i=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",i&&i.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows();}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach(((e,t)=>e.setAttribute("aria-rowindex",t+1)));}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach(((e,t)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)));}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1);}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",Boolean(t)),Array.from(e.children).forEach((e=>e.setAttribute("aria-selected",Boolean(t))));}_a11yUpdateRowLevel(e,t){e.setAttribute("aria-level",t+1);}_a11yUpdateRowDetailsOpened(e,t){Array.from(e.children).forEach((e=>{"boolean"==typeof t?e.setAttribute("aria-expanded",t):e.hasAttribute("aria-expanded")&&e.removeAttribute("aria-expanded");}));}_a11ySetRowDetailsCell(e,t){Array.from(e.children).forEach((e=>{e!==t&&e.setAttribute("aria-controls",t.id);}));}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t));}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach((e=>{let t=e.parentNode;for(;t&&"vaadin-grid-cell-content"!==t.localName;)t=t.parentNode;if(t&&t.assignedSlot){t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none");}}));}},Sa=e=>class extends e{static get properties(){return {activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this));}_activateItem(e){const t=e.detail.model,i=t?t.item:null;i&&(this.activeItem=this._itemsEqual(this.activeItem,i)?null:i);}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),i=t[t.indexOf(this.$.table)-3];if(!i||i.getAttribute("part").indexOf("details-cell")>-1)return;const s=i._content,r=this.getRootNode().activeElement;s.contains(r)||this._isFocusable(e.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(i.parentElement)}}));}_isFocusable(e){return xa(e)}},xa=e=>{if(!e.parentNode)return !1;const t=-1!==Array.from(e.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter((e=>"cell body-cell"!==e.getAttribute("part"))).indexOf(e);return !e.disabled&&t},Pa=e=>class extends e{static get properties(){return {items:Array}}static get observers(){return ["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(e,t,i){if(i){if(!Array.isArray(e))return null==e&&(this.size=0),void(this.dataProvider===this._arrayDataProvider&&(this.dataProvider=void 0));this.size=e.length,this.dataProvider=this.dataProvider||this._arrayDataProvider,this.clearCache(),this._ensureFirstPageLoaded();}}_arrayDataProvider(e,t){let i=(Array.isArray(this.items)?this.items:[]).slice(0);this._filters&&this._checkPaths(this._filters,"filtering",i)&&(i=this._filter(i)),this.size=i.length,e.sortOrders.length&&this._checkPaths(this._sorters,"sorting",i)&&(i=i.sort(this._multiSort.bind(this)));const s=e.page*e.pageSize,r=s+e.pageSize;t(i.slice(s,r),i.length);}_checkPaths(e,t,i){if(!i.length)return !1;let s=!0;for(let r in e){const n=e[r].path;if(!n||-1===n.indexOf("."))continue;const o=n.replace(/\.[^.]*$/,"");void 0===_a.get(o,i[0])&&(console.warn(`Path "${n}" used for ${t} does not exist in all of the items, ${t} is disabled.`),s=!1);}return s}_multiSort(e,t){return this._sorters.map((i=>"asc"===i.direction?this._compare(_a.get(i.path,e),_a.get(i.path,t)):"desc"===i.direction?this._compare(_a.get(i.path,t),_a.get(i.path,e)):0)).reduce(((e,t)=>e||t),0)}_normalizeEmptyValue(e){return [void 0,null].indexOf(e)>=0?"":isNaN(e)?e.toString():e}_compare(e,t){return (e=this._normalizeEmptyValue(e))<(t=this._normalizeEmptyValue(t))?-1:e>t?1:0}_filter(e){return e.filter((e=>0===this._filters.filter((t=>{const i=this._normalizeEmptyValue(_a.get(t.path,e)),s=this._normalizeEmptyValue(t.value).toString().toLowerCase();return -1===i.toString().toLowerCase().indexOf(s)})).length))}},Ea=e=>class extends(js(e)){ready(){super.ready();const e=this.$.scroller;zs(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",(t=>e.hasAttribute("column-resizing")&&t.preventDefault())),e.addEventListener("contextmenu",(e=>"resize-handle"==e.target.getAttribute("part")&&e.preventDefault())),e.addEventListener("mousedown",(e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault()));}_onHeaderTrack(e){const t=e.target;if("resize-handle"===t.getAttribute("part")){let i=t.parentElement._column;for(this._toggleAttribute("column-resizing",!0,this.$.scroller);"vaadin-grid-column-group"===i.localName;)i=Array.prototype.slice.call(i._childColumns,0).sort((function(e,t){return e._order-t._order})).filter((function(e){return !e.hidden})).pop();const s=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),r=s.filter((e=>e._column===i))[0];if(r.offsetWidth){const t=window.getComputedStyle(r),s=10+parseInt(t.paddingLeft)+parseInt(t.paddingRight)+parseInt(t.borderLeftWidth)+parseInt(t.borderRightWidth)+parseInt(t.marginLeft)+parseInt(t.marginRight),n=r.offsetWidth+(this.__isRTL?r.getBoundingClientRect().left-e.detail.x:e.detail.x-r.getBoundingClientRect().right);i.width=Math.max(s,n)+"px",i.flexGrow=0;}s.sort((function(e,t){return e._column._order-t._column._order})).forEach((function(e,t,i){t<i.indexOf(r)&&(e._column.width=e.offsetWidth+"px",e._column.flexGrow=0);})),"end"===e.detail.state&&(this._toggleAttribute("column-resizing",!1,this.$.scroller),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:i}}))),this._resizeHandler();}}},Ta=class e{constructor(e,t,i){this.grid=e,this.parentCache=t,this.parentItem=i,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={};}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter((e=>this.itemCaches[e].isLoading()))[0])}getItemForIndex(e){const{cache:t,scaledIndex:i}=this.getCacheAndIndex(e);return t.items[i]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce(((e,t)=>{const i=this.itemCaches[t];return i.updateSize(),e+i.effectiveSize}),0):0;}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){const i=new e(this.grid,this,this.items[t]);this.itemCaches[t]=i,this.grid._loadPage(0,i);}}getCacheAndIndex(e){let t=e;const i=Object.keys(this.itemCaches);for(let s=0;s<i.length;s++){const e=Number(i[s]),r=this.itemCaches[e];if(t<=e)return {cache:this,scaledIndex:t};if(t<=e+r.effectiveSize)return r.getCacheAndIndex(t-e-1);t-=r.effectiveSize;}return {cache:this,scaledIndex:t}}},Ia=e=>class extends e{static get properties(){return {pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new Ta(this)}},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return ["_sizeChanged(size)","_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const t=e-this._cache.size;this._cache.size+=t,this._cache.effectiveSize+=t,this._effectiveSize=this._cache.effectiveSize,this._increasePoolIfNeeded(0),this._debounceIncreasePool&&this._debounceIncreasePool.flush();}_getItem(e,t){if(e>=this._effectiveSize)return;t.index=e;const{cache:i,scaledIndex:s}=this._cache.getCacheAndIndex(e),r=i.items[s];r?(this._toggleAttribute("loading",!1,t),this._updateItem(t,r),this._isExpanded(r)&&i.ensureSubCacheForScaledIndex(s)):(this._toggleAttribute("loading",!0,t),this._loadPage(this._getPageForIndex(s),i));}_expandedInstanceChangedCallback(e,t){void 0!==e.item&&(t?this.expandItem(e.item):this.collapseItem(e.item));}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this.__cacheExpandedKeys(),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._assignModels();}_itemIdPathChanged(){this.__cacheExpandedKeys();}__cacheExpandedKeys(){this.expandedItems&&(this.__expandedKeys=new Set,this.expandedItems.forEach((e=>{this.__expandedKeys.add(this.getItemId(e));})));}expandItem(e){this._isExpanded(e)||this.push("expandedItems",e);}collapseItem(e){this._isExpanded(e)&&this.splice("expandedItems",this._getItemIndexInArray(e,this.expandedItems),1);}_getIndexLevel(e){let{cache:t}=this._cache.getCacheAndIndex(e),i=0;for(;t.parentCache;)t=t.parentCache,i++;return i}_canPopulate(){return Boolean(this._hasData&&this._columnTree)}_loadPage(e,t){if(!t.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),t.pendingRequests[e]=!0;const i={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:t.parentItem};this._debounceIncreasePool&&this._debounceIncreasePool.flush(),this.dataProvider(i,((s,r)=>{void 0!==r?t.size=r:i.parentItem&&(t.size=s.length);const n=Array.from(this.$.items.children).map((e=>e._item));s.forEach(((i,s)=>{const r=e*this.pageSize+s;t.items[r]=i,this._isExpanded(i)&&n.indexOf(i)>-1&&t.ensureSubCacheForScaledIndex(r);})),this._hasData=!0,delete t.pendingRequests[e],this._debouncerApplyCachedData=Wi.debounce(this._debouncerApplyCachedData,yt.after(0),(()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>{this._cache.getItemForIndex(e.index)&&this._getItem(e.index,e);})),this._increasePoolIfNeeded(0),this.__scrollToPendingIndex();})),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived();}));}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new Ta(this),Array.from(this.$.items.children).forEach((e=>{Array.from(e.children).forEach((e=>{e._instance&&e._instance._setPendingProperty("item",{},!1);}));})),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this._assignModels(),this._effectiveSize&&this._initialPoolCreated||this._loadPage(0,this._cache);}_pageSizeChanged(e,t){void 0!==t&&e!==t&&this.clearCache();}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.");}_dataProviderChanged(e,t){void 0!==t&&this.clearCache(),e&&this.items&&this.items.length&&this._scrollToIndex(this._firstVisibleIndex),this._ensureFirstPageLoaded(),this._debouncerCheckSize=Wi.debounce(this._debouncerCheckSize,yt.after(2e3),this._checkSize.bind(this)),this._scrollHandler();}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache);}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let i=-1;return t.forEach(((t,s)=>{this._itemsEqual(t,e)&&(i=s);})),i}scrollToIndex(e){super.scrollToIndex(e),isNaN(e)||!this._cache.isLoading()&&this.clientHeight||(this.__pendingScrollToIndex=e);}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this._debounceIncreasePool&&this._debounceIncreasePool.flush(),this.scrollToIndex(e);}}},Oa=e=>class extends e{ready(){super.ready(),this._addNodeObserver();}_hasColumnGroups(e){for(let t=0;t<e.length;t++)if("vaadin-grid-column-group"===e[t].localName)return !0;return !1}_getChildColumns(e){return io.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map((e=>"vaadin-grid-column-group"===e.localName?this._getChildColumns(e):[e])).reduce(((e,t)=>e.concat(t)),[])}_getColumnTree(){const e=[];for(let t=io.getFlattenedNodes(this).filter(this._isColumnElement);e.push(t),this._hasColumnGroups(t);)t=this._flattenColumnGroups(t);return e}_updateColumnTree(){const e=this._getColumnTree();this._arrayEquals(e,this._columnTree)||(this._columnTree=e);}_addNodeObserver(){this._observer=new io(this,(e=>{const t=e.addedNodes.filter((e=>"template"===e.localName&&e.classList.contains("row-details")))[0];t&&this._rowDetailsTemplate!==t&&(this._rowDetailsTemplate=t);const i=e=>e.filter(this._isColumnElement).length>0;if(i(e.addedNodes)||i(e.removedNodes)){const t=e.removedNodes.flatMap((e=>e._allCells)),i=e=>t.filter((t=>t._content.contains(e))).length;this.__removeSorters(this._sorters.filter(i)),this.__removeFilters(this._filters.filter(i)),this._updateColumnTree();}this._debouncerCheckImports=Wi.debounce(this._debouncerCheckImports,yt.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded();}));}_arrayEquals(e,t){if(!e||!t||e.length!=t.length)return !1;for(let i=0,s=e.length;i<s;i++)if(e[i]instanceof Array&&t[i]instanceof Array){if(!this._arrayEquals(e[i],t[i]))return !1}else if(e[i]!=t[i])return !1;return !0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach((e=>{const t=this.querySelector(e);!t||t instanceof ji||console.warn(`Make sure you have imported the required module for <${e}> element.`);}));}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach((e=>this._updateFirstAndLastColumnForRow(e)));}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort(((e,t)=>e._column._order-t._column._order)).forEach(((e,t,i)=>{this._toggleAttribute("first-column",0===t,e),this._toggleAttribute("last-column",t===i.length-1,e);}));}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}},za=e=>class extends e{getEventContext(e){const t={},i=e.composedPath(),s=i[i.indexOf(this.$.table)-3];return s?(t.section=["body","header","footer","details"].filter((e=>s.getAttribute("part").indexOf(e)>-1))[0],s._column&&(t.column=s._column),"body"!==t.section&&"details"!==t.section||Object.assign(t,this.__getRowModel(s.parentElement)),t):t}},Ra=e=>class extends e{static get properties(){return {_filters:{type:Array,value:function(){return []}}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this));}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters();}__removeFilters(e){0!=e.length&&(this._filters=this._filters.filter((t=>e.indexOf(t)<0)),this.__applyFilters());}__addFilter(e){-1===this._filters.indexOf(e)&&this._filters.push(e);}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache();}_mapFilters(){return this._filters.map((e=>({path:e.path,value:e.value})))}};class Na extends ji{static get is(){return "vaadin-grid-templatizer"}static get properties(){return {dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return []}},_parentPathValues:{value:function(){return {}}},_grid:Object}}static get observers(){return ["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super(),this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0};}createInstance(){this._ensureTemplatized();const e=new this._TemplateClass({});return this.addInstance(e),e}addInstance(e){-1===this._templateInstances.indexOf(e)&&(this._templateInstances.push(e),requestAnimationFrame((()=>this.notifyPath("_templateInstances.*",this._templateInstances))));}removeInstance(e){const t=this._templateInstances.indexOf(e);this.splice("_templateInstances",t,1);}_ensureTemplatized(){this._TemplateClass||(this._TemplateClass=Qo(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(e,t){this._forwardParentProp(e,t),this._templateInstances&&this._templateInstances.forEach((i=>i.notifyPath(e,t)));},notifyInstanceProp:function(e,t,i){if("index"===t||"item"===t)return;const s=`__${t}__`;if(e[s]===i)return;e[s]=i;const r=Array.from(this._grid.$.items.children).filter((t=>this._grid._itemsEqual(t._item,e.item)))[0];r&&Array.from(r.children).forEach((e=>{e._instance&&(e._instance[s]=i,e._instance.notifyPath(t,i));}));const n="item.";if(Array.isArray(this._grid.items)&&0===t.indexOf(n)){const s=this._grid.items.indexOf(e.item),r=t.slice(n.length);this._grid.notifyPath(`items.${s}.${r}`,i);}const o=`_${t}InstanceChangedCallback`;this._grid&&this._grid[o]&&this._grid[o](e,i);}}));}_forwardParentProp(e,t){this._parentPathValues[e]=t,this._templateInstances.forEach((i=>i.notifyPath(e,t)));}_templateInstancesChanged(e){let t,i;if("_templateInstances"===e.path)t=0,i=this._templateInstances.length;else {if("_templateInstances.splices"!==e.path)return;t=e.value.index,i=e.value.addedCount;}Object.keys(this._parentPathValues||{}).forEach((e=>{for(let s=t;s<t+i;s++)this._templateInstances[s].set(e,this._parentPathValues[e]);}));}}customElements.define(Na.is,Na);const ka=e=>class extends e{static get properties(){return {detailsOpenedItems:{type:Array,value:function(){return []}},_rowDetailsTemplate:Object,rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return ["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(e,t){if(e&&t)throw new Error("You should only use either a renderer or a template for row details");if(e||t){if(e&&!e.templatizer){const t=new Na;t._grid=this,t.dataHost=this.dataHost,t.template=e,e.templatizer=t;}this._columnTree&&Array.from(this.$.items.children).forEach((e=>{e.querySelector("[part~=details-cell]")||(this._updateRow(e,this._columnTree[this._columnTree.length-1]),this._a11yUpdateRowDetailsOpened(e,!1)),delete e.querySelector("[part~=details-cell]")._instance;})),this.detailsOpenedItems.length&&(Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this),this._update());}}_detailsOpenedItemsChanged(e){"detailsOpenedItems.length"!==e.path&&e.value&&Array.from(this.$.items.children).forEach((e=>{this._toggleDetailsCell(e,e._item),this._a11yUpdateRowDetailsOpened(e,this._isDetailsOpened(e._item)),this._toggleAttribute("details-opened",this._isDetailsOpened(e._item),e);}));}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),this._toggleAttribute("frozen",!0,e);}_toggleDetailsCell(e,t){const i=e.querySelector('[part~="details-cell"]');if(!i)return;const s=!this._isDetailsOpened(t),r=!!i.hidden!==s;(i._instance||i._renderer)&&i.hidden===s||(i.hidden=s,s?e.style.removeProperty("padding-bottom"):(this.rowDetailsRenderer?(i._renderer=this.rowDetailsRenderer,i._renderer.call(this,i._content,this,{index:e.index,item:t})):this._rowDetailsTemplate&&!i._instance&&(i._instance=this._rowDetailsTemplate.templatizer.createInstance(),i._content.innerHTML="",i._content.appendChild(i._instance.root),this._updateItem(e,t)),Xs(),e.style.setProperty("padding-bottom",`${i.offsetHeight}px`),requestAnimationFrame((()=>this.notifyResize())))),r&&(this._updateMetrics(),this._positionItems());}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach((e=>{e.parentElement.style.setProperty("padding-bottom",`${e.offsetHeight}px`);}));}_isDetailsOpened(e){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(e,this.detailsOpenedItems)}openItemDetails(e){this._isDetailsOpened(e)||this.push("detailsOpenedItems",e);}closeItemDetails(e){this._isDetailsOpened(e)&&this.splice("detailsOpenedItems",this._getItemIndexInArray(e,this.detailsOpenedItems),1);}_detailsOpenedInstanceChangedCallback(e,t){t?this.openItemDetails(e.item):this.closeItemDetails(e.item);}},Da={SCROLLING:500,IGNORE_WHEEL:500},La=e=>class extends e{static get properties(){return {_frozenCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0},_useSticky:{type:Boolean,value:window.CSS&&window.CSS.supports&&(window.CSS.supports("position","sticky")||window.CSS.supports("position","-webkit-sticky"))}}}static get observers(){return ["_scrollViewportHeightUpdated(_viewportHeight)"]}set _scrollTop(e){this.$.table.scrollTop=e;}get _scrollTop(){return this.$.table.scrollTop}constructor(){super(),this._scrollLineHeight=this._getScrollLineHeight();}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}_scrollViewportHeightUpdated(e){this._scrollPageHeight=e-this.$.header.clientHeight-this.$.footer.clientHeight-this._scrollLineHeight;}ready(){super.ready(),this.$.outerscroller=document.createElement("div"),this.scrollTarget=this.$.table,this.addEventListener("wheel",this._onWheel),this.$.items.addEventListener("focusin",(e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1];})),this.$.items.addEventListener("focusout",(()=>this._rowWithFocusedElement=void 0)),this.scrollTarget.addEventListener("mousedown",(()=>this.__mouseDown=!0)),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&(this.__pendingReorder=!1,setTimeout((()=>this._reorderRows()),Da.SCROLLING));}));}scrollToIndex(e){this._accessIronListAPI((()=>super.scrollToIndex(e)));}_onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;const t=this.$.table;let i=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?i*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(i*=this._scrollPageHeight),this._wheelAnimationFrame)return this._deltaYAcc+=i,void e.preventDefault();i+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this._debouncerWheelAnimationFrame=Wi.debounce(this._debouncerWheelAnimationFrame,bt,(()=>this._wheelAnimationFrame=!1));const s=Math.abs(e.deltaX)+Math.abs(i);this._canScroll(t,e.deltaX,i)?(e.preventDefault(),t.scrollTop+=i,t.scrollLeft+=e.deltaX,this._scrollHandler(),this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=Wi.debounce(this._debouncerIgnoreNewWheel,yt.after(Da.IGNORE_WHEEL),(()=>this._ignoreNewWheel=!1))):this._hasResidualMomentum&&s<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():s>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=s;}_hasScrolledAncestor(e,t,i){return "vaadin-grid-cell-content"!==e.localName&&(!(!this._canScroll(e,t,i)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,i):void 0))}_canScroll(e,t,i){return i>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||i<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame((()=>this._toggleAttribute("scrolling",!0,this.$.scroller)))),this._debounceScrolling=Wi.debounce(this._debounceScrolling,yt.after(Da.SCROLLING),(()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this._toggleAttribute("scrolling",!1,this.$.scroller),this._reorderRows();}));}_afterScroll(){this._translateStationaryElements(),this.hasAttribute("reordering")||this._scheduleScrolling(),this._updateOverflow();}_updateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top"),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left"),this._debounceOverflow=Wi.debounce(this._debounceOverflow,bt,(()=>{const t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):0==t.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow");}));}_reorderRows(){if(this.__mouseDown)return void(this.__pendingReorder=!0);const e=this.$.items,t=e.querySelectorAll("tr");if(!t.length)return;const i=this._virtualStart+this._vidxOffset,s=this._rowWithFocusedElement||Array.from(t).filter((e=>!e.hidden))[0];if(!s)return;const r=s.index-i,n=Array.from(t).indexOf(s)-r;if(n>0)for(let o=0;o<n;o++)e.appendChild(t[o]);else if(n<0)for(let o=t.length+n;o<t.length;o++)e.insertBefore(t[o],t[0]);if(this._safari){const{transform:e}=this.$.header.style;this.$.header.style.transform="",setTimeout((()=>this.$.header.style.transform=e));}}_frozenCellsChanged(){this._debouncerCacheElements=Wi.debounce(this._debouncerCacheElements,wt,(()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((function(e){e.style.transform="";})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._updateScrollerMeasurements(),this._translateStationaryElements();})),this._updateLastFrozen();}_updateScrollerMeasurements(){this._frozenCells.length>0&&this.__isRTL&&(this.__scrollerMetrics={scrollWidth:this.$.table.scrollWidth,clientWidth:this.$.table.clientWidth});}_updateLastFrozen(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort(((e,t)=>e._order-t._order));const t=e.reduce(((e,t,i)=>(t._lastFrozen=!1,t.frozen&&!t.hidden?i:e)),void 0);void 0!==t&&(e[t]._lastFrozen=!0);}_translateStationaryElements(){const e=Math.max(0,this._scrollLeft),t=Math.max(0,this._scrollTop);let i=0,s=0,r=0;if(this._useSticky||(i=e,s=t,r=this.$.table.clientHeight-this.$.footer.offsetHeight-this.$.footer.offsetTop),this.$.header.style.transform=this._getTranslate(-e+i,s),this.$.footer.style.transform=this._getTranslate(-e+i,s+r),this.$.items.style.transform=this._getTranslate(-e+i,0),this._frozenCells.length>0){const e=this.__isRTL?this.__getNormalizedScrollLeft(this.$.table)+this.__scrollerMetrics.clientWidth-this.__scrollerMetrics.scrollWidth:this._scrollLeft,t=this._getTranslate(e,0);for(let i=0;i<this._frozenCells.length;i++)this._frozenCells[i].style.transform=t;}}_getTranslate(e,t){return `translate(${e}px, ${t}px)`}},Ma=e=>class extends e{static get properties(){return {selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return ["_selectedItemsChanged(selectedItems.*)"]}_isSelected(e){return this.selectedItems&&this._getItemIndexInArray(e,this.selectedItems)>-1}selectItem(e){this._isSelected(e)||this.push("selectedItems",e);}deselectItem(e){const t=this._getItemIndexInArray(e,this.selectedItems);t>-1&&this.splice("selectedItems",t,1);}_toggleItem(e){-1===this._getItemIndexInArray(e,this.selectedItems)?this.selectItem(e):this.deselectItem(e);}_selectedItemsChanged(e){!this.$.items.children.length||"selectedItems"!==e.path&&"selectedItems.splices"!==e.path||Array.from(this.$.items.children).forEach((e=>{this._updateItem(e,e._item);}));}_selectedInstanceChangedCallback(e,t){t?this.selectItem(e.item):this.deselectItem(e.item);}},Fa=e=>class extends e{static get properties(){return {multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return []}},_previousSorters:{type:Array,value:function(){return []}}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged);}_onSorterChanged(e){const t=e.target;e.stopPropagation(),this.__updateSorter(t),this.__applySorters();}__removeSorters(e){0!=e.length&&(this._sorters=this._sorters.filter((t=>e.indexOf(t)<0)),this.multiSort&&this.__updateSortOrders(),this.__applySorters());}__updateSortOrders(){this._sorters.forEach(((e,t)=>e._order=this._sorters.length>1?t:null),this);}__updateSorter(e){if(e.direction||-1!==this._sorters.indexOf(e))if(e._order=null,this.multiSort)this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders();else if(e.direction){const t=this._sorters.filter((t=>t!=e));this._sorters=[e],t.forEach((e=>{e._order=null,e.direction=null;}));}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters();}_mapSorters(){return this._sorters.map((e=>({path:e.path,direction:e.direction})))}_removeArrayItem(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1);}},Ha=e=>class extends e{static get properties(){return {cellClassNameGenerator:Function}}static get observers(){return ["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames();}generateCellClassNames(){Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>this._generateCellClassNames(e,this.__getRowModel(e))));}_generateCellClassNames(e,t){Array.from(e.children).forEach((e=>{if(e.__generatedClasses&&e.__generatedClasses.forEach((t=>e.classList.remove(t))),this.cellClassNameGenerator){const i=this.cellClassNameGenerator(e._column,t);e.__generatedClasses=i&&i.split(" ").filter((e=>e.length>0)),e.__generatedClasses&&e.__generatedClasses.forEach((t=>e.classList.add(t)));}}));}},Ba={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},$a={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},Va=e=>class extends e{static get properties(){return {dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return ["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",(e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation());}));}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if("vaadin-grid-cell-content"===t.localName&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this._toggleAttribute("dragging-rows",!0,this),this._safari){const e=t.style.transform;t.style.top=/translateY\((.*)\)/.exec(e)[1],t.style.transform="none",requestAnimationFrame((()=>{t.style.top="",t.style.transform=e;}));}const i=t.getBoundingClientRect();this._ios?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-i.left,e.clientY-i.top);let s=[t];this._isSelected(t._item)&&(s=this.__getViewportRows().filter((e=>this._isSelected(e._item))).filter((e=>!this.dragFilter||this.dragFilter(this.__getRowModel(e))))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(s)),t.setAttribute("dragstart",s.length>1?s.length:""),this.updateStyles({"--_grid-drag-start-x":e.clientX-i.left+20+"px","--_grid-drag-start-y":e.clientY-i.top+10+"px"}),requestAnimationFrame((()=>{t.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""});}));const r=new CustomEvent("grid-dragstart",{detail:{draggedItems:s.map((e=>e._item)),setDragData:(t,i)=>e.dataTransfer.setData(t,i),setDraggedItemsCount:e=>t.setAttribute("dragstart",e)}});r.originalEvent=e,this.dispatchEvent(r);}}_onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t);}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles();}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY))return void this._clearDragStyles();let t=e.composedPath().filter((e=>"tr"===e.localName))[0];if(this._effectiveSize&&this.dropMode!==Ba.ON_GRID)if(t&&t.parentNode===this.$.items){const i=t.getBoundingClientRect();if(this._dropLocation=$a.ON_TOP,this.dropMode===Ba.BETWEEN){const t=e.clientY-i.top<i.bottom-e.clientY;this._dropLocation=t?$a.ABOVE:$a.BELOW;}else this.dropMode===Ba.ON_TOP_OR_BETWEEN&&(e.clientY-i.top<i.height/3?this._dropLocation=$a.ABOVE:e.clientY-i.top>i.height/3*2&&(this._dropLocation=$a.BELOW));}else {if(t)return;if(this.dropMode!==Ba.BETWEEN&&this.dropMode!==Ba.ON_TOP_OR_BETWEEN)return;t=Array.from(this.$.items.children).filter((e=>!e.hidden)).pop(),this._dropLocation=$a.BELOW;}else this._dropLocation=$a.EMPTY;if(t&&t.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);e.stopPropagation(),e.preventDefault(),this._dropLocation===$a.EMPTY?this._toggleAttribute("dragover",!0,this):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&t.setAttribute("dragover",this._dropLocation)):this._clearDragStyles();}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return !0;const t=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top,s=t-e+this.__dndAutoScrollThreshold,r=e-i+this.__dndAutoScrollThreshold;let n=0;if(r>0?n=2*r:s>0&&(n=2*-s),n){const e=this.$.table.scrollTop;this.$.table.scrollTop+=n;if(e!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout((()=>this.__dndAutoScrolling=!1),20),this._scrollHandler(),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter((i=>{const s=i.getBoundingClientRect();return s.bottom>e&&s.top<t}))}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach((e=>e.removeAttribute("dragover")));}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map((t=>({type:t,data:e.dataTransfer.getData(t)})));this._clearDragStyles();const i=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});i.originalEvent=e,this.dispatchEvent(i);}}__formatDefaultTransferData(e){return e.map((e=>Array.from(e.children).filter((e=>!e.hidden&&-1===e.getAttribute("part").indexOf("details-cell"))).sort(((e,t)=>e._column._order>t._column._order?1:-1)).map((e=>e._content.textContent.trim())).filter((e=>e)).join("\t"))).join("\n")}_dragDropAccessChanged(){this.filterDragAndDrop();}filterDragAndDrop(){Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>{this._filterDragAndDrop(e,this.__getRowModel(e));}));}_filterDragAndDrop(e,t){const i=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(t),s=!this.dropMode||this.dropFilter&&!this.dropFilter(t);Array.from(e.children).map((e=>e._content)).forEach((e=>{i?e.removeAttribute("draggable"):e.setAttribute("draggable",!0);})),this._toggleAttribute("drag-disabled",i,e),this._toggleAttribute("drop-disabled",s,e);}},Ga=e=>class extends e{static get properties(){return {_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number}}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this)),this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this)),this.addEventListener("mousedown",(()=>{this._toggleAttribute("navigating",!1,this),this._isMousedown=!0;})),this.addEventListener("mouseup",(()=>this._isMousedown=!1)));}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&e.setAttribute("tabindex","0");}_onKeyDown(e){const t=e.key;let i;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":i="Navigation";break;case"Enter":case"Escape":case"F2":i="Interaction";break;case"Tab":i="Tab";break;case" ":i="Space";}this._detectInteracting(e),this.hasAttribute("interacting")&&"Interaction"!==i&&(i=void 0),i&&this[`_on${i}KeyDown`](e,t);}_ensureScrolledToIndex(e){Array.from(this.$.items.children).filter((t=>t.index===e))[0]||this._scrollToIndex(e);}_onNavigationKeyDown(e,t){function i(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}this._scrollHandler(),e.preventDefault();const s=this._lastVisibleIndex-this._firstVisibleIndex-1;let r=0,n=0;switch(t){case"ArrowRight":r=this.__isRTL?-1:1;break;case"ArrowLeft":r=this.__isRTL?1:-1;break;case"Home":r=-1/0,e.ctrlKey&&(n=-1/0);break;case"End":r=1/0,e.ctrlKey&&(n=1/0);break;case"ArrowDown":n=1;break;case"ArrowUp":n=-1;break;case"PageDown":n=s;break;case"PageUp":n=-s;}const o=e.composedPath()[0],a=i(o),l=this._elementMatches(o,'[part~="details-cell"]'),d=o.parentNode,h=d.parentNode,c=(h===this.$.items?this._effectiveSize:h.children.length)-1,u=h===this.$.items?void 0!==this._focusedItemIndex?this._focusedItemIndex:d.index:i(d);let p=Math.max(0,Math.min(u+n,c)),_=!1;if(h===this.$.items){const e=d._item,t=this._cache.getItemForIndex(p);_=l?0===n:1===n&&this._isDetailsOpened(e)||-1===n&&p!==u&&this._isDetailsOpened(t),_!==l&&(1===n&&_||-1===n&&!_)&&(p=u);}if(h!==this.$.items)if(p>u)for(;p<c&&h.children[p].hidden;)p++;else if(p<u)for(;p>0&&h.children[p].hidden;)p--;void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=l?0:this._getColumns(h,u).filter((e=>!e.hidden))[a]._order);const m=this._getColumns(h,p).filter((e=>!e.hidden)),f=m.map((e=>e._order)).sort(((e,t)=>e-t)),g=f.length-1,y=f.indexOf(f.slice(0).sort(((e,t)=>Math.abs(e-this._focusedColumnOrder)-Math.abs(t-this._focusedColumnOrder)))[0]),b=0===n&&l?y:Math.max(0,Math.min(y+r,g));b!==y&&(this._focusedColumnOrder=void 0),h===this.$.items&&this._ensureScrolledToIndex(p),this._toggleAttribute("navigating",!0,this);const v=m.reduce(((e,t,i)=>(e[t._order]=i,e)),{})[f[b]],w=h===this.$.items?Array.from(h.children).filter((e=>e.index===p))[0]:h.children[p];if(!w)return;const A=_?Array.from(w.children).filter((e=>this._elementMatches(e,'[part~="details-cell"]')))[0]:w.children[v];if(this._scrollHorizontallyToCell(A),h===this.$.items&&(this._focusedItemIndex=p),h===this.$.items){const e=A.getBoundingClientRect(),t=this.$.footer.getBoundingClientRect().top,i=this.$.header.getBoundingClientRect().bottom;e.bottom>t?(this.$.table.scrollTop+=e.bottom-t,this._scrollHandler()):e.top<i&&(this.$.table.scrollTop-=i-e.top,this._scrollHandler());}A.focus();}_parseEventPath(e){const t=e.indexOf(this.$.table);return {rowGroup:e[t-1],row:e[t-2],cell:e[t-3]}}_onInteractionKeyDown(e,t){const i=e.composedPath()[0],s="input"===i.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(i.type);let r;switch(t){case"Enter":r=!this.hasAttribute("interacting")||!s;break;case"Escape":r=!1;break;case"F2":r=!this.hasAttribute("interacting");}const{cell:n}=this._parseEventPath(e.composedPath());if(this.hasAttribute("interacting")!==r)if(r){const t=n._content.querySelector("[focus-target]")||n._content.firstElementChild;t&&(e.preventDefault(),t.focus(),this._toggleAttribute("interacting",!0,this),this._toggleAttribute("navigating",!1,this));}else e.preventDefault(),this._focusedColumnOrder=void 0,n.focus(),this._toggleAttribute("interacting",!1,this),this._toggleAttribute("navigating",!0,this);}_predictFocusStepTarget(e,t){const i=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let s=i.indexOf(e);for(s+=t;s>=0&&s<=i.length-1&&(!i[s]||i[s].parentNode.hidden);)s+=t;return i[s]}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let i=t;const s=this._itemsFocusable.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),s.index!==this._focusedItemIndex){const e=Array.from(s.children).indexOf(this._itemsFocusable),t=Array.from(this.$.items.children).filter((e=>e.index===this._focusedItemIndex))[0];t&&(i=t.children[e]);}e.preventDefault(),i.focus();}else e.preventDefault(),t.focus();this._toggleAttribute("navigating",!0,this);}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0];t._content&&t._content.firstElementChild||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}));}_onKeyUp(e){if(!/^( |SpaceBar)$/.test(e.key))return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const e=this.hasAttribute("navigating");t._content.firstElementChild.click(),this._toggleAttribute("navigating",e,this);}}_onFocusIn(e){this._isMousedown||this._toggleAttribute("navigating",!0,this);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._toggleAttribute("interacting",!1,this)):this._detectInteracting(e);}_onFocusOut(e){this._toggleAttribute("navigating",!1,this),this._detectInteracting(e);}_onCellFocusIn(e){if(this._detectInteracting(e),3===e.composedPath().indexOf(this.$.table)){const t=e.composedPath()[0];this._activeRowGroup=t.parentNode.parentNode,this._activeRowGroup===this.$.header?this._headerFocusable=t:this._activeRowGroup===this.$.items?this._itemsFocusable=t:this._activeRowGroup===this.$.footer&&(this._footerFocusable=t),t._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}));}this._detectFocusedItemIndex(e);}_onCellFocusOut(e){if(3===e.composedPath().indexOf(this.$.table)){e.composedPath()[0]._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}));}}_detectInteracting(e){this._toggleAttribute("interacting",e.composedPath().some((e=>"vaadin-grid-cell-content"===e.localName)),this);}_detectFocusedItemIndex(e){const{rowGroup:t,row:i}=this._parseEventPath(e.composedPath());t===this.$.items&&(this._focusedItemIndex=i.index);}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this._toggleAttribute("navigating",!1,this)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this._toggleAttribute("navigating",!0,this));}_getColumns(e,t){let i=this._columnTree.length-1;return e===this.$.header?i=t:e===this.$.footer&&(i=this._columnTree.length-1-t),this._columnTree[i]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild&&(this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter((e=>!e.hidden))[0]),this.$.items.firstElementChild){const e=this._iterateItems(((e,t)=>{if(this._firstVisibleIndex===t)return this.$.items.children[e]}));e&&(this._itemsFocusable=Array.from(e.children).filter((e=>!e.hidden))[0]);}this.$.footer.firstElementChild&&(this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter((e=>!e.hidden))[0]);}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||this._elementMatches(e,'[part~="details-cell"]'))return;const t=e.getBoundingClientRect(),i=e.parentNode,s=Array.from(i.children).indexOf(e),r=this.$.table.getBoundingClientRect();let n=r.left,o=r.right;for(let a=s-1;a>=0;a--){const e=i.children[a];if(!e.hasAttribute("hidden")&&!this._elementMatches(e,'[part~="details-cell"]')&&e.hasAttribute("frozen")){n=e.getBoundingClientRect().right;break}}for(let a=s+1;a<i.children.length;a++){const e=i.children[a];if(!e.hasAttribute("hidden")&&!this._elementMatches(e,'[part~="details-cell"]')&&e.hasAttribute("frozen")){o=e.getBoundingClientRect().left;break}}t.left<n&&(this.$.table.scrollLeft+=Math.round(t.left-n)),t.right>o&&(this.$.table.scrollLeft+=Math.round(t.right-o));}_elementMatches(e,t){return e.matches?e.matches(t):-1!==Array.from(e.parentNode.querySelectorAll(t)).indexOf(e)}},ja=e=>class extends(js(e)){static get properties(){return {columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return ["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),zs(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this));}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault();}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout((()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}});}),100);}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout);}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd();}_onTrackEvent(e){if("start"===e.detail.state){const t=e.composedPath(),i=t[t.indexOf(this.$.header)-2];if(!i||!i._content)return;if(i._content.contains(this.getRootNode().activeElement))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e);}else "track"===e.detail.state?this._onTrack(e):"end"===e.detail.state&&this._onTrackEnd(e);}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.filter((e=>e.hasAttribute&&e.hasAttribute("draggable")))[0])return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(i&&-1!==i.getAttribute("part").indexOf("header-cell")){for(this._toggleAttribute("reordering",!0,this),this._draggedColumn=i._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(i),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller();}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const i=this._getTargetColumn(t,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,i)&&this._isSwappableByPosition(i,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,i),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x;}_onTrackEnd(){this._draggedColumn&&(this._toggleAttribute("reordering",!1,this),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})));}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter((e=>!e.hidden)).sort(((e,t)=>e._order-t._order))}_cellFromPoint(e,t){e=e||0,t=t||0,this._draggedColumn||this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller);const i=this.shadowRoot.elementFromPoint(e,t);if(this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller),i&&i._column)return i}_updateGhostPosition(e,t){const i=this._reorderGhost.getBoundingClientRect(),s=e-i.width/2,r=t-i.height/2,n=parseInt(this._reorderGhost._left||0),o=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=n-(i.left-s),this._reorderGhost._top=o-(i.top-r),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`;}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const i=window.getComputedStyle(e);return ["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach((e=>t.style[e]=i[e])),t}_updateOrders(e,t){void 0!==e&&void 0!==t&&(e[0].forEach((e=>e._order=0)),e[0].forEach(((e,t)=>e._order=(t+1)*this._orderBaseScope)));}_setSiblingsReorderStatus(e,t){Array.from(e.parentNode.children).filter((t=>/column/.test(t.localName)&&this._isSwapAllowed(t,e))).forEach((e=>e._reorderStatus=t));}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10),this._scrollHandler();}this._draggedColumn&&this.async(this._autoScroller,10);}_isSwapAllowed(e,t){if(e&&t){const i=e!==t,s=e.parentElement===t.parentElement,r=e.frozen===t.frozen;return i&&s&&r}}_isSwappableByPosition(e,t){const i=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter((t=>e.contains(t._column)))[0],s=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),r=i.getBoundingClientRect();return r.left>s.left?t>r.right-s.width:t<r.left+s.width}_swapColumnOrders(e,t){const i=e._order;e._order=t._order,t._order=i,this._updateLastFrozen(),this._updateFirstAndLastColumn();}_getTargetColumn(e,t){if(e&&t){let i=e._column;for(;i.parentElement!==t.parentElement&&i!==this;)i=i.parentElement;return i.parentElement===t.parentElement?i:e._column}}},Wa=e=>class extends e{static get properties(){return {resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"===this.localName)return;const e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return ["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid),this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid),this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid),this._templateObserver.flush(),this._bodyTemplate||this._templateObserver.callback(),requestAnimationFrame((()=>{this._allCells.forEach((e=>{e._content.parentNode||this._grid&&this._grid.appendChild(e._content);}));}));}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame((()=>{this._findHostGrid()||this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content);}));})),this._gridValue=void 0;}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return [].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter((e=>e))}constructor(){super(),this._templateObserver=new io(this,(()=>{this._headerTemplate=this._prepareHeaderTemplate(),this._footerTemplate=this._prepareFooterTemplate(),this._bodyTemplate=this._prepareBodyTemplate();}));}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(e,t){if(e&&!e.templatizer){const i=new Na;i._grid=this._grid,i.dataHost=this.dataHost,i._instanceProps=t||i._instanceProps,i.template=e,e.templatizer=i;}return e}_renderHeaderAndFooter(){this.headerRenderer&&this._headerCell&&this.__runRenderer(this.headerRenderer,this._headerCell),this.footerRenderer&&this._footerCell&&this.__runRenderer(this.footerRenderer,this._footerCell);}__runRenderer(e,t,i){const s=[t._content,this];i&&i.item&&s.push(i),e.apply(this,s);}__setColumnTemplateOrRenderer(e,t,i){if(!this.hidden){if(e&&t)throw new Error("You should only use either a renderer or a template");i.forEach((i=>{const s=this._grid.__getRowModel(i.parentElement);if(t)i._renderer=t,(s.item||t===this.headerRenderer||t===this.footerRenderer)&&this.__runRenderer(t,i,s);else if(i._template!==e){i._template=e,i._content.innerHTML="",e.templatizer._grid=e.templatizer._grid||this._grid;const t=e.templatizer.createInstance();i._content.appendChild(t.root),i._instance=t,s.item&&i._instance.setProperties(s);}}));}}_setBodyTemplateOrRenderer(e,t,i){(e||t)&&i&&this.__setColumnTemplateOrRenderer(e,t,i);}_setHeaderTemplateOrRenderer(e,t,i){(e||t)&&i&&this.__setColumnTemplateOrRenderer(e,t,[i]);}_setFooterTemplateOrRenderer(e,t,i){(e||t)&&i&&(this.__setColumnTemplateOrRenderer(e,t,[i]),this._grid.__updateHeaderFooterRowVisibility(i.parentElement));}_selectFirstTemplate(e=!1,t=!1){return io.getFlattenedNodes(this).filter((i=>"template"===i.localName&&i.classList.contains("header")===e&&i.classList.contains("footer")===t))[0]}_findTemplate(e,t){const i=this._selectFirstTemplate(e,t);return i&&this.dataHost&&(i._rootDataHost=this.dataHost._rootDataHost||this.dataHost),i}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach((t=>t.style.flexGrow=e));}_orderChanged(e){this._allCells.forEach((t=>t.style.order=e));}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach((t=>t.style.width=e)),this._grid&&this._grid.__forceReflow&&this._grid.__forceReflow();}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach((t=>this._toggleAttribute("frozen",e,t))),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged();}_lastFrozenChanged(e){this._allCells.forEach((t=>this._toggleAttribute("last-frozen",e,t))),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e);}_pathOrHeaderChanged(e,t,i,s,r,n,o,a,l){const d=void 0!==t;if(!o&&!l&&d&&i&&this.__setTextContent(i._content,t),e&&r.value){if(!n&&!a){const t=(t,i,{item:s})=>this.__setTextContent(t,this.get(e,s));this.__setColumnTemplateOrRenderer(void 0,t,r.value);}o||l||d||!i||null===t||this.__setTextContent(i._content,this._generateHeader(e));}i&&this._grid.__updateHeaderFooterRowVisibility(i.parentElement);}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t);}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,(e=>e.toUpperCase()))}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e));}_reorderStatusChanged(e){this._allCells.forEach((t=>t.setAttribute("reorder-status",e)));}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach((t=>{if(t){const i=t.querySelector('[part~="resize-handle"]');if(i&&t.removeChild(i),e){const e=document.createElement("div");e.setAttribute("part","resize-handle"),t.appendChild(e);}}}));}_textAlignChanged(e){if(void 0===e)return;if(-1===["start","end","center"].indexOf(e))return void console.warn('textAlign can only be set as "start", "end" or "center"');let t;"ltr"===getComputedStyle(this._grid).direction?"start"===e?t="left":"end"===e&&(t="right"):"start"===e?t="right":"end"===e&&(t="left"),this._allCells.forEach((i=>{i._content.style.textAlign=e,getComputedStyle(i._content).textAlign!==e&&(i._content.style.textAlign=t);}));}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(!0===e&&this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content);})),this._grid._debouncerHiddenChanged=Wi.debounce(this._grid._debouncerHiddenChanged,bt,(()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree);})),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid.notifyResize&&this._grid.notifyResize(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e;}};class Ua extends(Wa(sr(ji))){static get is(){return "vaadin-grid-column"}static get properties(){return {width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}customElements.define(Ua.is,Ua),Ue("vaadin-grid",Ge`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 1em;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }
  `,{moduleId:"vaadin-grid-styles"});const Ya=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return !1}})();class qa extends(gr(Us(Ia(Pa(Oa(Sa(La(Ma(Fa(ka(Ga(Ca(Ra(ja(Ea(za(Va(Ha(Aa))))))))))))))))))){static get template(){return Gi`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return "vaadin-grid"}static get version(){return "6.0.2"}static get observers(){return ["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return {_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},_firefox:{type:Boolean,value:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:Ya},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd);}connectedCallback(){super.connectedCallback(),this.recalculateColumnWidths();}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"dir"===e&&(this.__isRTL="rtl"===i,this._updateScrollerMeasurements());}__hasRowsWithClientHeight(){return !!Array.from(this.$.items.children).filter((e=>e.clientHeight)).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths());}_recalculateColumnWidths(e){e.forEach((e=>{e.width="auto",e._origFlexGrow=e.flexGrow,e.flexGrow=0;})),e.forEach((e=>{e._currentWidth=0,e._allCells.forEach((t=>{const i=t.offsetWidth+1;e._currentWidth=Math.max(e._currentWidth,i);}));})),e.forEach((e=>{e.width=`${e._currentWidth}px`,e.flexGrow=e._origFlexGrow,e._currentWidth=void 0,e._origFlexGrow=void 0;}));}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else {const e=this._getColumns().filter((e=>!e.hidden&&e.autoWidth));this._recalculateColumnWidths(e);}}_createScrollerRows(e){const t=[];for(let i=0;i<e;i++){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this._columnTree&&this._updateRow(e,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(e);}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach((e=>e.isConnected&&e.notifyPath&&e.notifyPath("_cells.*",e._cells))),Pr(this,(()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation();})),t}_getRowTarget(){return this.$.items}_createCell(e){const t="vaadin-grid-cell-content-"+(this._contentIndex=this._contentIndex+1||0),i=document.createElement("vaadin-grid-cell-content");i.setAttribute("slot",t);const s=document.createElement(e);s.id=t.replace("-content-","-"),s.setAttribute("tabindex","-1"),s.setAttribute("role","td"===e?"gridcell":"columnheader");const r=document.createElement("slot");return r.setAttribute("name",t),s.appendChild(r),s._content=i,i.addEventListener("mousedown",(()=>{if(window.chrome){const e=()=>{i.contains(this.getRootNode().activeElement)||s.focus(),document.removeEventListener("mouseup",e,!0);};document.addEventListener("mouseup",e,!0);}else setTimeout((()=>{i.contains(this.getRootNode().activeElement)||s.focus();}));})),s}_updateRow(e,t,i,s,r){i=i||"body";const n=document.createDocumentFragment();Array.from(e.children).forEach((e=>e._vacant=!0)),e.innerHTML="","sizer"!==e.id&&(e.hidden=!0),t.filter((e=>!e.hidden)).forEach(((t,o,a)=>{let l;if("body"===i){if(t._cells=t._cells||[],l=t._cells.filter((e=>e._vacant))[0],l||(l=this._createCell("td"),t._cells.push(l)),l.setAttribute("part","cell body-cell"),e.appendChild(l),o===a.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){this._detailsCells=this._detailsCells||[];const t=this._detailsCells.filter((e=>e._vacant))[0]||this._createCell("td");-1===this._detailsCells.indexOf(t)&&this._detailsCells.push(t),t._content.parentElement||n.appendChild(t._content),this._configureDetailsCell(t),e.appendChild(t),this._a11ySetRowDetailsCell(e,t),t._vacant=!1;}t.notifyPath&&!r&&t.notifyPath("_cells.*",t._cells);}else {const r="header"===i?"th":"td";s||"vaadin-grid-column-group"===t.localName?(l=t[`_${i}Cell`]||this._createCell(r),l._column=t,e.appendChild(l),t[`_${i}Cell`]=l):(t._emptyCells=t._emptyCells||[],l=t._emptyCells.filter((e=>e._vacant))[0]||this._createCell(r),l._column=t,e.appendChild(l),-1===t._emptyCells.indexOf(l)&&t._emptyCells.push(l)),l.setAttribute("part",`cell ${i}-cell`),this.__updateHeaderFooterRowVisibility(e);}l._content.parentElement||n.appendChild(l._content),l._vacant=!1,l._column=t;})),this.appendChild(n),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e);}__updateHeaderFooterRowVisibility(e){if(!e)return;const t=Array.from(e.children).filter((t=>{const i=t._column;if(i._emptyCells&&i._emptyCells.indexOf(t)>-1)return !1;if(e.parentElement===this.$.header){if(i.headerRenderer||i._headerTemplate)return !0;if(null===i.header)return !1;if(i.path||void 0!==i.header)return !0}else if(i.footerRenderer||i._footerTemplate)return !0}));e.hidden!==!t.length&&(e.hidden=!t.length,this.notifyResize());}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(this._toggleAttribute("first",0===t,e),this._toggleAttribute("odd",t%2,e),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e));}_columnTreeChanged(e){this._renderColumnTree(e),this.recalculateColumnWidths();}_renderColumnTree(e){for(Array.from(this.$.items.children).forEach((t=>this._updateRow(t,e[e.length-1],null,!1,!0)));this.$.header.children.length<e.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),this.$.footer.appendChild(t);}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach(((t,i)=>this._updateRow(t,e[i],"header",i===e.length-1))),Array.from(this.$.footer.children).forEach(((t,i)=>this._updateRow(t,e[e.length-1-i],"footer",0===i))),this._updateRow(this.$.sizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning();}__updateFooterPositioning(){if(this._firefox&&(this.$.items.style.paddingBottom=0,this.heightByRows||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`)),this._ios){!window.CSS.supports("position","sticky")&&(this.$.table.style.height="",this.$.table.style.minHeight="100%",this.$.table.style.maxHeight="100%",setTimeout((()=>this.$.table.style.height=`${this.$.scroller.offsetHeight}px`)));}}_updateItem(e,t){e._item=t;const i=this.__getRowModel(e);this._toggleAttribute("selected",i.selected,e),this._a11yUpdateRowSelected(e,i.selected),this._a11yUpdateRowLevel(e,i.level),this._toggleAttribute("expanded",i.expanded,e),this._toggleAttribute("details-opened",this._isDetailsOpened(t),e),(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._toggleDetailsCell(e,t),this._generateCellClassNames(e,i),this._filterDragAndDrop(e,i),Array.from(e.children).forEach((e=>{if(e._renderer){const t=e._column||this;e._renderer.call(t,e._content,t,i);}else e._instance&&(e._instance.__detailsOpened__=i.detailsOpened,e._instance.__selected__=i.selected,e._instance.__level__=i.level,e._instance.__expanded__=i.expanded,e._instance.setProperties(i));})),this._debouncerUpdateHeights=Wi.debounce(this._debouncerUpdateHeights,yt.after(1),(()=>{this._updateMetrics(),this._positionItems(),this._updateScrollerSize();}));}_resizeHandler(){this._updateDetailsCellHeights(),this._accessIronListAPI(super._resizeHandler,!0),this._updateScrollerMeasurements(),this.__updateFooterPositioning();}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(this._render(),e.stopPropagation(),this.notifyResize(),this.__itemsReceived(),requestAnimationFrame((()=>{this.__scrollToPendingIndex(),this.$.table.style.webkitOverflowScrolling="touch";})));}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e));}__getRowModel(e){return {index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!(!this._rowDetailsTemplate&&!this.rowDetailsRenderer)&&this._isDetailsOpened(e._item)}}render(){this._columnTree&&(this._columnTree.forEach((e=>{e.forEach((e=>e._renderHeaderAndFooter()));})),this._update());}notifyResize(){super.notifyResize();}_heightByRowsChanged(e,t){(e||t)&&this.notifyResize();}__forceReflow(){this._debouncerForceReflow=Wi.debounce(this._debouncerForceReflow,bt,(()=>{this.$.scroller.style.overflow="hidden",setTimeout((()=>this.$.scroller.style.overflow=""));}));}}customElements.define(qa.is,qa);class Ja extends Ua{static get template(){return Gi`
      <template class="header" id="defaultHeaderTemplate">
        <vaadin-checkbox
          class="vaadin-grid-select-all-checkbox"
          aria-label="Select All"
          hidden$="[[_selectAllHidden]]"
          on-checked-changed="_onSelectAllCheckedChanged"
          checked="[[_isChecked(selectAll, _indeterminate)]]"
          indeterminate="[[_indeterminate]]"
        ></vaadin-checkbox>
      </template>
      <template id="defaultBodyTemplate">
        <vaadin-checkbox aria-label="Select Row" checked="{{selected}}"></vaadin-checkbox>
      </template>
    `}static get is(){return "vaadin-grid-selection-column"}static get properties(){return {width:{type:String,value:"58px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},autoSelect:{type:Boolean,value:!1},_indeterminate:Boolean,_previousActiveItem:Object,_selectAllHidden:Boolean}}static get observers(){return ["_onSelectAllChanged(selectAll)"]}_pathOrHeaderChanged(e,t,i,s,r,n,o,a,l){!r.value||void 0===e&&void 0===n||(this._bodyTemplate=a=void 0,this.__cleanCellsOfTemplateProperties(r.value)),!i||void 0===t&&void 0===o||(this._headerTemplate=l=void 0,this.__cleanCellsOfTemplateProperties([i])),super._pathOrHeaderChanged(e,t,i,s,r,n,o,a,l);}__cleanCellsOfTemplateProperties(e){e.forEach((e=>{e._content.innerHTML="",delete e._instance,delete e._template;}));}_prepareHeaderTemplate(){const e=this._prepareTemplatizer(this._findTemplate(!0)||this.$.defaultHeaderTemplate);return e.templatizer.dataHost=e===this.$.defaultHeaderTemplate?this:this.dataHost,e}_prepareBodyTemplate(){const e=this._prepareTemplatizer(this._findTemplate()||this.$.defaultBodyTemplate);return e.templatizer.dataHost=e===this.$.defaultBodyTemplate?this:this.dataHost,e}constructor(){super(),this._boundOnActiveItemChanged=this._onActiveItemChanged.bind(this),this._boundOnDataProviderChanged=this._onDataProviderChanged.bind(this),this._boundOnSelectedItemsChanged=this._onSelectedItemsChanged.bind(this);}disconnectedCallback(){this._grid.removeEventListener("active-item-changed",this._boundOnActiveItemChanged),this._grid.removeEventListener("data-provider-changed",this._boundOnDataProviderChanged),this._grid.removeEventListener("filter-changed",this._boundOnSelectedItemsChanged),this._grid.removeEventListener("selected-items-changed",this._boundOnSelectedItemsChanged),super.disconnectedCallback();}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("active-item-changed",this._boundOnActiveItemChanged),this._grid.addEventListener("data-provider-changed",this._boundOnDataProviderChanged),this._grid.addEventListener("filter-changed",this._boundOnSelectedItemsChanged),this._grid.addEventListener("selected-items-changed",this._boundOnSelectedItemsChanged));}_onSelectAllChanged(e){void 0!==e&&this._grid&&(this._selectAllChangeLock||(this._grid.selectedItems=e&&Array.isArray(this._grid.items)?this._grid._filter(this._grid.items):[]));}_arrayContains(e,t){for(var i=0;e&&t&&t[i]&&e.indexOf(t[i])>=0;i++);return i==t.length}_onSelectAllCheckedChanged(e){this.selectAll=this._indeterminate||e.target.checked;}_isChecked(e,t){return t||e}_onActiveItemChanged(e){const t=e.detail.value;if(this.autoSelect){const e=t||this._previousActiveItem;e&&this._grid._toggleItem(e);}this._previousActiveItem=t;}_onSelectedItemsChanged(){this._selectAllChangeLock=!0,Array.isArray(this._grid.items)&&(this._grid.selectedItems.length?this._arrayContains(this._grid.selectedItems,this._grid._filter(this._grid.items))?(this.selectAll=!0,this._indeterminate=!1):(this.selectAll=!1,this._indeterminate=!0):(this.selectAll=!1,this._indeterminate=!1)),this._selectAllChangeLock=!1;}_onDataProviderChanged(){this._selectAllHidden=!Array.isArray(this._grid.items);}}customElements.define(Ja.is,Ja),Ue("vaadin-grid-sorter",Ge`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    :host(:not([direction])) [part='indicators']::before {
      opacity: 0.2;
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});const Xa=document.createElement("template");Xa.innerHTML="\n  <style>\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild(Xa.content);class Za extends(Us(sr(ji))){static get template(){return Gi`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return "vaadin-grid-sorter"}static get properties(){return {path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return ["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this));}connectedCallback(){super.connectedCallback(),this._isConnected=!0;}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1;}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible();}__isConnectedChanged(e,t){!1!==t&&this.__dispatchSorterChangedEvenIfPossible();}__dispatchSorterChangedEvenIfPossible(){void 0!==this.path&&void 0!==this.direction&&this._isConnected&&this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}));}_getDisplayOrder(e){return null===e?"":e+1}_onClick(e){const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),"asc"===this.direction?this.direction="desc":"desc"===this.direction?this.direction=null:this.direction="asc");}}customElements.define(Za.is,Za);class Ka extends Ua{static get template(){return Gi`
      <template class="header" id="headerTemplate">
        <vaadin-grid-sorter path="[[path]]" direction="{{direction}}">[[_getHeader(header, path)]]</vaadin-grid-sorter>
      </template>
    `}static get is(){return "vaadin-grid-sort-column"}static get properties(){return {path:String,direction:{type:String,notify:!0}}}_prepareHeaderTemplate(){const e=this._prepareTemplatizer(this.$.headerTemplate);return e.templatizer.dataHost=this,e}_getHeader(e,t){return e||this._generateHeader(t)}}customElements.define(Ka.is,Ka);const Qa={selectionColumn:!0},el={base:"esri-grid",content:"esri-grid__content",grid:"esri-grid__grid",widget:"esri-widget"};let tl=class extends(a$4(z$1)){constructor(e,i){super(e,i),this._grid=null,this._headerStyles="display: flex; font-weight: 400;",this._hostStyles='font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 1em; background-color: inherit; color: inherit;',this._rowHoverStyles="background-color: var(--lumo-row-background-hover);",this._columnElements=[],this.cellClassNameGenerator=null,this.columnReorderingEnabled=!0,this.dataProvider=null,this.itemIdPath=null,this.label=void 0,this.messages=null,this.pageSize=50,this.selectedItems=new S$2,this.size=null,this.rowDetailsRenderer=null,this.store=null,this.viewModel=new n,this.visibleElements={...Qa};}initialize(){this.handles.add([this.columns.on("change",(()=>this._syncColumnRenderers())),f$6(this,"viewModel.size",(()=>this._updateGridSize())),f$6(this,"store.state",((e,t)=>{"ready"!==e||"loaded"!==t&&"error"!==t||this.refreshCache();})),$$1(this,"_grid.$.table","scroll",(()=>{var e;null==(e=this.viewModel)||e.closeColumnMenus();}))]);}destroy(){var e;this.handles.removeAll(),this.resetColumns(),null==(e=this.columns)||e.destroy();}resetColumns(){this.columns.items.forEach((e=>e.destroy())),this.columns.removeAll();}castVisibleElements(e){return {...Qa,...e}}render(){return n$3("div",{bind:this,class:this.classes(el.base,el.widget)},n$3("div",{bind:this,class:el.content},this.renderGrid()))}renderGrid(){return n$3("vaadin-grid",{...this.getGridProps()},this.renderAllColumns())}renderAllColumns(){if("disabled"!==this.viewModel.state&&this.columns&&this.columns.length)return [this.renderSelectionColumn(),this.renderColumns()]}renderSelectionColumn(){return n$3("vaadin-grid-selection-column",{_selectAllHidden:!0,selectAll:!1,bind:this,hidden:!this.visibleElements.selectionColumn,sortable:!1,frozen:!d$5(this.container)})}renderColumns(){return this.columns.items.map(((e,t)=>n$3("vaadin-grid-column",{...this.getColumnProps(e,t)})))}getGridProps(){const{columnReorderingEnabled:e,id:t,pageSize:i,size:s}=this;return {_safari:!1,class:el.grid,id:`${t}_grid`,theme:"compact column-borders",ref:"grid",bind:this,afterCreate:this._afterGridCreate,afterUpdate:this._afterGridUpdate,columnReorderingAllowed:e,pageSize:i,size:s}}getColumnProps(e,t){const{id:i}=this,{autoWidth:s,direction:n,flexGrow:o,frozen:a,header:l,hidden:d,path:h,resizable:c,textAlign:u,width:p}=e;return {autoWidth:s,direction:n,flexGrow:o,frozen:a,header:l,hidden:d,key:`${i}_${l}_${r$1(t)?t:h}`,path:h,resizable:c,"text-align":u,width:"number"==typeof p?`${p}px`:p,bind:this,afterCreate:this._afterColumnCreate,afterRemoved:this._afterColumnRemoved}}clearSelection(){this._clearSelection(),this.scheduleRender();}clearSort(){let e=!1;if(this._grid&&this._grid._sorters&&this._grid._sorters.length&&(this._grid._sorters=[],e=!0),this.columns&&this.columns.length){!!this.columns.find((e=>!!e.direction))&&(this.columns.forEach((e=>e.direction=null)),e=!0);}e&&this.scheduleRender();}deselectItem(e){this._deselectRowByItem(e);}deselectRow(e){const t=this.viewModel.getRowItemAt(e);t&&this._deselectRowByItem(t);}findColumn(){}generateCellClassNames(){var e;null==(e=this._grid)||e.generateCellClassNames();}getSlotElementByName(e){var t,i;return null==(t=this._grid)||null==(i=t.shadowRoot)?void 0:i.querySelector(`slot[name='${e}']`)}hideColumn(e){var t;null==(t=this.viewModel)||t.hideColumn(e),this.scheduleRender();}notifyResize(){var e;null==(e=this._grid)||e.notifyResize();}recalculateColumnWidths(){var e;null==(e=this._grid)||e.recalculateColumnWidths();}async refresh(){var e;this._clearSelection(),await(null==(e=this.store)?void 0:e.reset()),this.scrollToTop();}refreshCache(){var e;null==(e=this._grid)||e.clearCache();}selectRows(e){const t=this._grid.selectedItems.slice();e.forEach((e=>{t.findIndex((t=>t.objectId===e.objectId))<0&&this._grid.selectedItems.push(e);})),this._updateSelectionProps(),this._grid.render();}deselectRows(e){const t=this._grid.selectedItems.slice();e.forEach((e=>{const i=t.findIndex((t=>t.objectId===e.objectId));i>-1&&t.splice(i,1);})),this._grid.selectedItems=t,this._updateSelectionProps(),this._grid.render();}selectItem(e){this._selectRowByItem(e);}selectRow(e){const t=this.viewModel.getRowItemAt(e);t&&this._selectRowByItem(t);}showColumn(e){var t;null==(t=this.viewModel)||t.showColumn(e),this.scheduleRender();}sort({path:e,direction:t}){var i;null==(i=this.viewModel)||i.sortColumn(e,t);}scrollToIndex(e){var t;null==(t=this._grid)||t.scrollToIndex(e);}scrollToTop(){var e;null==(e=this._grid)||e.scrollToIndex(0);}_afterGridCreate(e){const{cellClassNameGenerator:t,dataProvider:i,itemIdPath:s,rowDetailsRenderer:r}=this;e.cellClassNameGenerator=t,e.dataProvider=i,e.rowDetailsRenderer=r,e.itemIdPath=s,this._grid=e,customElements.whenDefined("vaadin-grid").then((()=>{this._appendStyles(),this._addGridEventListeners();}));}_afterGridUpdate(e){this._grid||(this._grid=e);}_afterColumnCreate(e){this._applyRenderersToColumnElement(e),this._columnElements.push(e);}_afterColumnRemoved(e){const t=this._columnElements.indexOf(e,0);t>-1&&this._columnElements.splice(t,1);}_syncColumnRenderers(){this._columnElements.forEach((e=>this._applyRenderersToColumnElement(e)));}_appendStyles(){var e;const t=null==(e=this._grid)?void 0:e.shadowRoot,i=document.createElement("style");i.textContent=`\n      :host { ${this._hostStyles} }\n      [part~="header-cell"] ::slotted(vaadin-grid-cell-content) { ${this._headerStyles} }\n      [part~="row"]:hover [part~="body-cell"] { ${this._rowHoverStyles} }\n    `,null==t||t.appendChild(i);}_updateGridSize(){this._grid&&(this._grid.size=this.size||0,this.scheduleRender());}_addGridEventListeners(){const{_grid:e}=this;this.handles.add([r$3(e,"click",(e=>this._onRowClick(e))),r$3(e,"selected-items-changed",(e=>this._onSelectionChange(e)))]);}_onRowClick(e){const{_grid:t}=this,i=t.getEventContext(e),{item:s,section:r}=i;s&&r&&"details"!==r&&"header"!==r&&this.emit("row-click",{context:i,native:e});}_selectRowByItem(e){var t;null==(t=this._grid)||t.selectItem(e);}_deselectRowByItem(e){var t;null==(t=this._grid)||t.deselectItem(e);}_clearSelection(){var e,t;null!=(e=this._grid)&&null!=(t=e.selectedItems)&&t.length&&(this._grid.selectedItems=[],this._updateSelectionProps(),this._grid.render());}_onSelectionChange(e){const t=e;if("selectedItems.splices"===t.detail.path){const{removed:e,index:i,object:s}=t.detail.value.indexSplices[0];this._updateSelectionProps(),this.emit("selection-change",{index:i,added:s,removed:e});}}_updateSelectionProps(){this.selectedItems.length&&this.selectedItems.removeAll(),this._grid&&this.selectedItems.addMany(this._grid.selectedItems);}_applyRenderersToColumnElement(e){const t=e.getAttribute("path"),i=this.viewModel.findColumn(t);if(i)try{i.renderFunction&&(e.renderer=(e,t,s)=>i.renderFunction({root:e,column:t,rowData:s})),i.footerRenderFunction&&(e.footerRenderer=(e,t)=>i.footerRenderFunction({root:e,column:t})),i.headerRenderFunction&&(e.headerRenderer=(e,t)=>i.headerRenderFunction({root:e,column:t}));}catch(s){}}};e$3([d$4()],tl.prototype,"_grid",void 0),e$3([o$1("viewModel.cellClassNameGenerator")],tl.prototype,"cellClassNameGenerator",void 0),e$3([o$1("viewModel.columns")],tl.prototype,"columns",void 0),e$3([o$1("viewModel.columnReorderingEnabled")],tl.prototype,"columnReorderingEnabled",void 0),e$3([o$1("viewModel.dataProvider")],tl.prototype,"dataProvider",void 0),e$3([d$4()],tl.prototype,"itemIdPath",void 0),e$3([d$4({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],tl.prototype,"label",void 0),e$3([d$4(),e$6("esri/widgets/FeatureTable/t9n/FeatureTable")],tl.prototype,"messages",void 0),e$3([o$1("viewModel.pageSize")],tl.prototype,"pageSize",void 0),e$3([d$4({readOnly:!0})],tl.prototype,"selectedItems",void 0),e$3([o$1("viewModel.size")],tl.prototype,"size",void 0),e$3([o$1("viewModel.rowDetailsRenderer")],tl.prototype,"rowDetailsRenderer",void 0),e$3([o$1("viewModel.store")],tl.prototype,"store",void 0),e$3([d$4()],tl.prototype,"viewModel",void 0),e$3([d$4()],tl.prototype,"visibleElements",void 0),e$3([c$4("visibleElements")],tl.prototype,"castVisibleElements",null),e$3([o$1("viewModel.findColumn")],tl.prototype,"findColumn",null),tl=e$3([i$4("esri.widgets.FeatureTable.Grid.Grid")],tl);const il=tl;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d="esri.widgets.FeatureTable.support.FeatureStore",c=s$3.getLogger(d);function p(e,t,r){c.error(new s$2(e,t,r));}let m=class extends p$4{constructor(e){super(e),this._loaded=!1,this._loadError=!1,this._loading=!1,this._editOperationQueue=[],this._queryOperationQueue=[],this._objectIds=new S$2,this._hasStaleCache=!1,this.count=0,this.failures=new S$2,this.itemCache=new S$2,this.relatedRecordsEnabled=!1;}destroy(){this.layer=null,this.itemCache&&this.itemCache.destroy(),this.failures&&this.failures.destroy(),this._set("itemCache",null);}set attachmentsEnabled(e){this._reset(),this._set("attachmentsEnabled",e),this.notifyChange("state");}set filterGeometry(e){this._reset(),this._set("filterGeometry",e),this.notifyChange("state");}set layer(e){this._reset(),this._set("layer",e),this.notifyChange("state");}get orderByFields(){return this._get("orderByFields")||[]}set orderByFields(e){const t=this.orderByFields;l$1(e,t)||(this.itemCache.removeAll(),this._hasStaleCache=!0,this._set("orderByFields",e));}get querying(){return this._queryOperationQueue.length>0}set returnGeometry(e){this._reset(),this._set("returnGeometry",e),this.notifyChange("state");}get state(){const{layer:e,_loaded:t,_loadError:r,_loading:s}=this;return r?"error":!e||this.get("layer.loadError")?"disabled":s?"loading":"loaded"===this.get("layer.loadStatus")&&t?"loaded":"ready"}get syncing(){return this._editOperationQueue.length>0}get where(){return this._get("where")||null}set where(e){this._reset(),this._set("where",e),this.notifyChange("state");}async load(){this._reset();const{layer:e}=this;if(!e)return Promise.resolve();this._loading=!0,this.notifyChange("state");try{await e.when(),await this._syncLayerInfo(),this._loading=!1,this._loaded=!0,this.notifyChange("state");}catch(t){throw this._reset(),this._loadError=!0,this.notifyChange("state"),p("store:load-error","An error ocurred.",{error:t}),t}}async addItems(e){}async fetchItems(e){const{page:t,pageSize:r}=e,s=t*r,i=s+r,{layer:a,state:o}=this;if(!a||"loaded"!==o)return Promise.resolve([]);this.notifyChange("querying");const n=await this._query({start:s,num:i,page:t,pageSize:r});return this.notifyChange("state"),n}async query(e){const{layer:t,state:r}=this;if(!t||"loaded"!==r)return [];this.notifyChange("querying");const s=await this._query(e);return this.notifyChange("state"),s}async removeItemAt(e){}async reset(){this._reset();}async updateItem(e){return this._update(e)}getItemByObjectId(e){const{itemCache:t,layer:{objectIdField:r}}=this;return t.find((t=>t.feature.attributes[r]===e))}getLocalItemAt(e){return this.itemCache.getItemAt(e)}getItemAt(e){return Promise.resolve(this.itemCache.getItemAt(e))}getObjectIdIndex(e){const{itemCache:t,layer:{objectIdField:r}}=this;return t.findIndex((t=>t.feature.attributes[r]===e))}_reset(){this.itemCache.removeAll(),this.failures.removeAll(),this._editOperationQueue=[],this._queryOperationQueue=[],this._hasStaleCache=!1,this._loading=!1,this._loaded=!1,this._loadError=!1,this._set("count",0),this._objectIds.removeAll(),this.notifyChange("querying"),this.notifyChange("syncing"),this.notifyChange("state");}_getIdsFromFeatures(e){return e.map((e=>e.attributes[this.layer.objectIdField]))}_toFeatureData(e,t){const{layer:{objectIdField:r}}=this;return e.map((e=>{const{attributes:s}=e,i=s[r];return {objectId:i,feature:e,attachments:t?t[i]:null,relatedRecords:null}}))}async _update(e){const{layer:r}=this,{operations:s}=r.capabilities;if(!s.supportsUpdate||"wfs"===r.type||"imagery"===r.type)throw new s$2("store:update-error","Update is not supported.");const{index:i,name:a,value:u}=e,h=await this.getItemAt(i);if(!h||!h.feature)throw new s$2("store:update-error","Feature with provided 'objectId' not found.");const{feature:y}=h,l=l$2(y.attributes);l[a]=u;const d=new h$1({attributes:l}),c=r.applyEdits({updateFeatures:[d]}).then((e=>{const{updateFeatureResults:t}=e,r=t.find((e=>!!e.error));if(r)throw r.error;return this._editOperationQueue.indexOf((()=>c))>-1&&t&&t.length&&(y.attributes=l),e}));return this._queueEditOperation((()=>c))}async _query(e){const{refresh:t}=e;return !0===t?(this.itemCache.removeAll(),this._syncLayerInfo().then((()=>this._queryFeatureData(e)))):(this._hasStaleCache&&(await this._updateIds(),this._hasStaleCache=!1),this._queryFeatureData(e))}async _queryFeatureData(e){return this._queueQueryOperation((async()=>{const{features:t}=await this._queryFeatures(e),r=this._getIdsFromFeatures(t),s=await this._queryAttachments(r);return this._toFeatureData(t,s)||[]}))}async _syncLayerInfo(){await this._updateCount(),await this._updateIds();}async _updateCount(){await this._queryCount().then((e=>this._set("count",e)));}async _updateIds(){var e,t,r;null!=(e=this.layer)&&null!=(t=e.capabilities)&&null!=(r=t.query)&&r.supportsPagination||(this._objectIds.removeAll(),await this._queryObjectIds().then((e=>this._objectIds.addMany(e))));}_queryCount(){const{filterGeometry:e,layer:t,returnGeometry:r}=this,s=t.createQuery();return s.geometry=e,s.returnGeometry=r,s.where=this._getWhere(),t.queryFeatureCount(s)}_queryObjectIds(){const{filterGeometry:e,layer:t,orderByFields:r,returnGeometry:s}=this,{capabilities:{query:{supportsCacheHint:i,supportsOrderBy:a}}}=t;if("geojson"===t.type||"wfs"===t.type||"imagery"===t.type)return Promise.resolve([]);const o=t.createQuery();return o.geometry=e,o.outFields=[t.objectIdField],o.returnGeometry=s,o.where=this._getWhere(),a&&(o.orderByFields=r),i&&(o.cacheHint=!0),t.queryObjectIds(o)}async _queryFeatures(e){const{layer:t}=this;if(!t.capabilities.operations.supportsQuery)return Promise.reject(new s$2("store:query-error","Layer does not support query operation."));const{filterGeometry:r,layer:{capabilities:{query:{supportsCacheHint:s,supportsOrderBy:i,supportsPagination:a}}},orderByFields:n,returnGeometry:u}=this,{start:h,pageSize:y}=e,l=t.createQuery();return l.returnGeometry=u,a?(l.start=h,l.num=y,l.where=this._getWhere()):l.objectIds=this._getObjectIdsForPage(h,y),i&&(l.orderByFields=n),r&&(l.geometry=r),s&&(l.cacheHint=!0),t.queryFeatures(l)}_getObjectIdsForPage(e,t){const r=this._objectIds.toArray();return r.length>=e+t?r.slice(e,e+t):r.slice(e)}_queryAttachments(e){const{attachmentsEnabled:t,layer:r}=this,{capabilities:{data:{supportsAttachment:s},operations:{supportsQueryAttachments:i}}}=r;return t&&s&&i&&"geojson"!==r.type&&"wfs"!==r.type&&"imagery"!==r.type?r.queryAttachments(new u$6({objectIds:e,where:this._getWhere()})):Promise.resolve(null)}_queueQueryOperation(e){return this._queryOperationQueue.push(e),this.notifyChange("querying"),e().then((t=>this._queryOperationQueue.indexOf(e)>-1?(this.itemCache.addMany(t),t):[])).catch((t=>{p("store:query-error","An error ocurred.",{error:t});const r={error:t,retry:()=>{this.failures.remove(r),this._queueQueryOperation(e);},cancel:()=>this.failures.remove(r)};return this.failures.add(r),[]})).then((t=>(C$2(this._queryOperationQueue,e),this.notifyChange("querying"),t)))}_queueEditOperation(e){return this._editOperationQueue.push(e),this.notifyChange("syncing"),e().then((()=>{C$2(this._editOperationQueue,e),this.notifyChange("syncing");})).catch((t=>{p("store:edit-error","An error ocurred.",{error:t});const r={error:t,retry:()=>{this.failures.remove(r),this._queueEditOperation(e);},cancel:()=>this.failures.remove(r)};throw this.failures.add(r),C$2(this._editOperationQueue,e),this.notifyChange("syncing"),t}))}_getWhere(){return this.where||this.layer.definitionExpression||"1=1"}};e$3([d$4()],m.prototype,"attachmentsEnabled",null),e$3([d$4({readOnly:!0})],m.prototype,"count",void 0),e$3([d$4({readOnly:!0})],m.prototype,"failures",void 0),e$3([d$4()],m.prototype,"filterGeometry",null),e$3([d$4({readOnly:!0})],m.prototype,"itemCache",void 0),e$3([d$4({value:null})],m.prototype,"layer",null),e$3([d$4()],m.prototype,"orderByFields",null),e$3([d$4({readOnly:!0})],m.prototype,"querying",null),e$3([d$4()],m.prototype,"relatedRecordsEnabled",void 0),e$3([d$4({value:!1})],m.prototype,"returnGeometry",null),e$3([d$4({readOnly:!0})],m.prototype,"state",null),e$3([d$4({readOnly:!0})],m.prototype,"syncing",null),e$3([d$4()],m.prototype,"where",null),m=e$3([i$4(d)],m);const _=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let y$1=class extends(a$4(n)){constructor(e){super(e),this._defaultHiddenFields=["CreationDate","Creator","EditDate","Editor","GlobalID"],this._highlights=new u$7,this.cellClassNameGenerator=(e,t)=>e.path||null,this.dataProvider=async(e,t)=>{const{store:s}=this,{page:i,pageSize:r,sortOrders:o}=e,l=this._sortOrdersToLayerOrderByFields(o);t&&(s?(await s.set({orderByFields:l}),"loaded"!==s.state&&"loading"!==s.state&&await s.load(),t&&t(await s.fetchItems({page:i,pageSize:r}))):t&&t([]));},this.editingEnabled=!1,this.grid=null,this.hiddenFields=new S$2,this.highlightOnRowSelectEnabled=!0,this.itemIdPath="objectId",this.messagesCommon=null,this.relatedRecordsEnabled=!1,this.store=null,this.view=null;const{hiddenFields:t,itemIdPath:i}=this;t.addMany(this._defaultHiddenFields),this._set("store",new _),this._set("grid",new il({itemIdPath:i,viewModel:this}));}initialize(){const e=async()=>{this.messages=await u$8("esri/widgets/FeatureTable/t9n/FeatureTable"),this.messagesCommon=await u$8("esri/t9n/common");};e(),this.handles.add([g$4(e),$$1(this,"grid.selectedItems","change",(e=>this._onSelectionChange(e))),f$6(this,"relatedRecordsEnabled",(e=>this.store.relatedRecordsEnabled=e)),f$6(this,["layer.loaded"],(()=>{var e;null!=(e=this.layer)&&e.loaded&&this._onLayerLoad();})),f$6(this.store,"state",(e=>{var t;"loaded"===e&&(null==(t=this.grid)||t.scrollToTop());})),f$6(this,["editingEnabled","messages"],(()=>{var e;return (null==(e=this.layer)?void 0:e.loaded)&&this._generateColumns()})),f$6(this,"layer.definitionExpression",((e,t)=>(e||t)&&"loaded"===this.store.state&&this.refresh()))]);}destroy(){var e,t;this._resetColumns(),this.handles.removeAll(),this._highlights.removeAll(),this._highlights.destroy(),null==(e=this.grid)||e.destroy(),null==(t=this.columns)||t.destroy(),this.layer=null,this.view=null;}set attachmentsEnabled(e){this.attachmentsEnabled!==e&&(this._set("attachmentsEnabled",e),this._generateColumns(),this.store.attachmentsEnabled=e);}set fieldConfigs(e){var t;this._set("fieldConfigs",e),(null==(t=this.layer)?void 0:t.loaded)&&this._generateColumns();}set filterGeometry(e){(this.filterGeometry||e)&&(this.clearSelection(),this._set("filterGeometry",e),this.store.filterGeometry=e);}set layer(e){var t;this._set("layer",e),null==(t=this.grid)||t.clearSort(),this._resetColumns(),this.store.layer=e,e&&(e.loaded?this._onLayerLoad():e.load()),this.notifyChange("state");}set messages(e){var t;null==(t=this.grid)||t.set("messages",e),this._set("messages",e);}clearHighlights(){this._highlights.removeAll();}clearSelection(){var e;null==(e=this.grid)||e.clearSelection();}deselectRows(e){const t=this._getStoreItemsFromSelectionParams(e);this.grid.deselectRows(t);}getObjectIdIndex(e){var t;return null==(t=this.store)?void 0:t.getObjectIdIndex(e)}getValue(e,t){var s;const i=this.store.getItemByObjectId(e);return null==i||null==(s=i.feature)?void 0:s.attributes[t]}refresh(){var e;null==(e=this.grid)||e.refresh();}selectRows(e){const t=this._getStoreItemsFromSelectionParams(e);this.grid.selectRows(t);}scrollToIndex(e){var t;null==(t=this.grid)||t.scrollToIndex(e);}_onLayerLoad(){const e=this.layer.capabilities.query.maxRecordCount;e&&e<this.pageSize&&this.grid&&(this.grid.pageSize=e),this._generateColumns();}_generateColumns(){this._resetColumns(),this.columns.addMany([...this._createFieldColumns()]),this.attachmentsEnabled&&this.columns.push(this._createAttachmentsColumn());}_createFieldColumns(){return this.fieldConfigs&&this.fieldConfigs.length?this._createColumnsFromConfigs():this._createColumnsFromFields()}_createColumnsFromConfigs(){var e,t;const{editingEnabled:s,fieldConfigs:i,grid:r,hiddenFields:o,layer:l,messages:a,messagesCommon:n,store:d}=this,h=null!=(e=null==(t=this.layer)?void 0:t.fields)?e:[];return i.filter((e=>(h||[]).find((t=>e.name===t.name)))).map((e=>{const t=e.direction||null,i=e.formatFunction||null,c=(h||[]).find((t=>e.name===t.name)),g=!1===e.visible||!0!==e.visible&&o.indexOf(c.name)>-1;return new C$1({config:e,direction:t,editingEnabled:s,field:c,formatFunction:i,grid:r,hidden:g,layer:l,store:d,messages:a,messagesCommon:n})}))}_createColumnsFromFields(){var e,t;const{editingEnabled:s,grid:i,hiddenFields:r,layer:o,messages:l,messagesCommon:a,store:n}=this;return (null!=(e=null==(t=this.layer)?void 0:t.fields)?e:[]).map((e=>{const t=r.indexOf(e.name)>-1;return new C$1({editingEnabled:s,field:e,grid:i,hidden:t,layer:o,store:n,messages:l,messagesCommon:a})}))}_createAttachmentsColumn(){var e;return new n$2({header:null==(e=this.messages)?void 0:e.attachments})}_sortOrdersToLayerOrderByFields(e){return e&&e.length?e.filter(((e,t,s)=>s.map((e=>e.path)).indexOf(e.path)===t)).map((({direction:e,path:t})=>e?t+" "+e.toUpperCase():"")):[]}_highlight(e){const{view:t}=this,s=t&&e&&t.allLayerViews.items.find((({layer:t})=>t===e.layer));e$7(s)&&this._highlights.add(s.highlight(e),`feature-${e.getObjectId()}`);}_unhighlight(e){e&&this._highlights.remove(`feature-${e.getObjectId()}`);}_getStoreItemsFromSelectionParams(e){const s=[];return (e=e instanceof Array?e:[e]).forEach((e=>{let i=e instanceof h$1?e:null;const r=i?i.getObjectId():e;if("number"==typeof r||"string"==typeof r){if(!i){const e=this.store.getItemByObjectId(r);e&&(i=e.feature);}s.push({objectId:r,feature:i});}})),s}_onSelectionChange(e){const{highlightOnRowSelectEnabled:t}=this,{added:s,removed:i}=e;t&&s.forEach((e=>this._highlight(e.feature))),t&&i.forEach((e=>this._unhighlight(e.feature)));}_resetColumns(){this.columns.items.forEach((e=>e.destroy())),this.columns.removeAll();}};e$3([d$4()],y$1.prototype,"attachmentsEnabled",null),e$3([d$4()],y$1.prototype,"cellClassNameGenerator",void 0),e$3([d$4()],y$1.prototype,"dataProvider",void 0),e$3([d$4()],y$1.prototype,"editingEnabled",void 0),e$3([d$4()],y$1.prototype,"fieldConfigs",null),e$3([d$4()],y$1.prototype,"filterGeometry",null),e$3([d$4({readOnly:!0})],y$1.prototype,"grid",void 0),e$3([d$4()],y$1.prototype,"hiddenFields",void 0),e$3([d$4()],y$1.prototype,"highlightOnRowSelectEnabled",void 0),e$3([d$4({readOnly:!0})],y$1.prototype,"itemIdPath",void 0),e$3([d$4()],y$1.prototype,"layer",null),e$3([d$4()],y$1.prototype,"messages",null),e$3([d$4()],y$1.prototype,"messagesCommon",void 0),e$3([d$4()],y$1.prototype,"relatedRecordsEnabled",void 0),e$3([d$4({readOnly:!0,type:_})],y$1.prototype,"store",void 0),e$3([d$4()],y$1.prototype,"view",void 0),y$1=e$3([i$4("esri.widgets.FeatureTable.FeatureTableViewModel")],y$1);const v=y$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const b={header:!0,menu:!0,menuItems:{clearSelection:!0,refreshData:!0,toggleColumns:!0},selectionColumn:!0},f={base:"esri-feature-table",header:"esri-feature-table__header",title:"esri-feature-table__title",content:"esri-feature-table__content",loader:"esri-feature-table__loader",loaderContainer:"esri-feature-table__loader-container",menuContainer:"esri-feature-table__menu",menuIcon:"esri-icon-handle-horizontal",menuItemGroupOpenedIcon:"esri-icon-down",menuItemGroupClosedIcon:"esri-icon-right",checkmarkIcon:"esri-icon-check-mark",widget:"esri-widget"};let M=class extends(a$4(z$1)){constructor(e,l){super(e,l),this.attachmentsEnabled=null,this.columns=new S$2,this.editingEnabled=null,this.fieldConfigs=null,this.filterGeometry=null,this.grid=null,this.highlightOnRowSelectEnabled=!0,this.label=void 0,this.layer=null,this.messages=null,this.menu=null,this.menuConfig=null,this.pageSize=50,this.view=null,this.viewModel=new v,this.visibleElements={...b};}initialize(){var e,t,l;const i=async()=>this.messages=await u$8("esri/widgets/FeatureTable/t9n/FeatureTable");i(),this.handles.add([g$4(i),$$1(this,"grid.selectedItems","change",(e=>this._onSelectionChange(e))),f$6(this,["viewModel.store.querying","viewModel.store.syncing","grid.size"],(()=>this.scheduleRender())),$$1(this,"viewModel.columns","change",(()=>this._updateMenuItems())),f$6(this,"menuConfig",(()=>this._syncMenuConfig())),f$6(this,"messages",(()=>{var e;this.menu.label=null==(e=this.messages)?void 0:e.options,this._updateMenuItems();}))]),this._set("menu",new _$4({label:null==(e=this.messages)?void 0:e.options,iconClass:f.menuIcon,...this.menuConfig}));const{attachmentsEnabled:n,relatedRecordsEnabled:r}=this;null==(t=this.viewModel)||null==(l=t.store)||l.set({attachmentsEnabled:n,relatedRecordsEnabled:r});}destroy(){var e;this.clearSelection(),this.handles.removeAll(),null==(e=this.menu)||e.destroy();}castVisibleElements(e){var t;const l={...b,...e};return null==(t=this.grid)||t.set("visibleElements",{...this.grid.visibleElements,selectionColumn:l.selectionColumn}),l}clearHighlights(){}clearSelection(){}deselectRows(){}hideColumn(e){var t;null==(t=this.grid)||t.hideColumn(e),this._updateMenuItems();}refresh(){}showColumn(e){var t;null==(t=this.grid)||t.showColumn(e),this._updateMenuItems();}sortColumn(){}selectRows(){}scrollToIndex(){}render(){var e;return n$3("div",{bind:this,class:this.classes(f.base,f.widget)},this.visibleElements.header?this._renderHeader():null,n$3("div",{class:f.content},"disabled"!==this.state&&(null==(e=this.grid)?void 0:e.render())))}_renderHeader(){return n$3("div",{key:"header",class:f.header},this._renderLoader(),this._renderTitle(),this.visibleElements.menu?this._renderMenu():null)}_renderTitle(){return n$3("div",{class:f.title,key:"title"},this._getTitle())}_getTitle(){const{grid:e,layer:{title:t},messages:l,viewModel:{size:o}}=this;return e?s$1(l.header,{title:t,count:o,selected:e.selectedItems.length||0}):""}_renderLoader(){const{state:e,store:t}=this.viewModel,l="loading"===e||t.syncing||t.querying;return n$3("div",{class:f.loaderContainer},l?n$3("div",{class:f.loader,key:"loader"}):null)}_renderMenu(){return n$3("div",{class:f.menuContainer},this.menu.render())}_onSelectionChange(e){const{added:t,removed:l}=e;this.emit("selection-change",{added:[...t],removed:[...l]});}_syncMenuConfig(){var e;null==(e=this.menu)||e.set({...this.menuConfig,items:this._getMenuItems()});}_updateMenuItems(){var e;null==(e=this.menu)||e.set("items",this._getMenuItems());}_getMenuItems(){var e;const t=null==(e=this.menuConfig)?void 0:e.items,l=this._getDefaultMenuItems(),o=[];return (null==l?void 0:l.length)&&o.push(...l),(null==t?void 0:t.length)&&o.push(...t),o}_getDefaultMenuItems(){var e;const{messages:t,viewModel:l,visibleElements:o}=this,{menuItems:s}=o,i=[];return (null==s?void 0:s.clearSelection)&&i.push(new c$3({selectionEnabled:!1,label:null==t?void 0:t.clearSelection,clickFunction:()=>this.clearSelection()})),(null==s?void 0:s.refreshData)&&i.push(new c$3({selectionEnabled:!1,label:null==t?void 0:t.refreshData,clickFunction:()=>this.refresh()})),(null==s?void 0:s.toggleColumns)&&i.push(new c$3({iconClass:f.menuItemGroupClosedIcon,label:null==t?void 0:t.toggleColumns,clickFunction:this._toggleMenuItemSelectedIcon,items:null==l||null==(e=l.columns)?void 0:e.items.map((({header:e,hidden:t,path:l})=>new c$3({label:e||l,selected:!t,selectionEnabled:!0,iconClass:f.checkmarkIcon,clickFunction:()=>this._toggleColumnFromMenuItem(l)})))})),i.length?i:null}_toggleMenuItemSelectedIcon({item:e}){null==e||e.set("iconClass",null!=e&&e.selected?f.menuItemGroupOpenedIcon:f.menuItemGroupClosedIcon);}_toggleColumnFromMenuItem(e){const{grid:t,viewModel:l}=this,o=l.findColumn(e);null!=o&&o.hidden?t.showColumn(e):t.hideColumn(e);}};e$3([o$1("viewModel.attachmentsEnabled")],M.prototype,"attachmentsEnabled",void 0),e$3([o$1("viewModel.columns")],M.prototype,"columns",void 0),e$3([o$1("viewModel.editingEnabled")],M.prototype,"editingEnabled",void 0),e$3([o$1("viewModel.fieldConfigs")],M.prototype,"fieldConfigs",void 0),e$3([o$1("viewModel.filterGeometry")],M.prototype,"filterGeometry",void 0),e$3([o$1("viewModel.grid")],M.prototype,"grid",void 0),e$3([o$1("viewModel.highlightOnRowSelectEnabled")],M.prototype,"highlightOnRowSelectEnabled",void 0),e$3([d$4({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],M.prototype,"label",void 0),e$3([o$1("viewModel.layer")],M.prototype,"layer",void 0),e$3([d$4(),e$6("esri/widgets/FeatureTable/t9n/FeatureTable")],M.prototype,"messages",void 0),e$3([d$4({readOnly:!0})],M.prototype,"menu",void 0),e$3([d$4()],M.prototype,"menuConfig",void 0),e$3([o$1("viewModel.pageSize")],M.prototype,"pageSize",void 0),e$3([o$1("viewModel.relatedRecordsEnabled")],M.prototype,"relatedRecordsEnabled",void 0),e$3([o$1("viewModel.state")],M.prototype,"state",void 0),e$3([o$1("viewModel.view")],M.prototype,"view",void 0),e$3([d$4()],M.prototype,"viewModel",void 0),e$3([d$4()],M.prototype,"visibleElements",void 0),e$3([c$4("visibleElements")],M.prototype,"castVisibleElements",null),e$3([o$1("viewModel.clearHighlights")],M.prototype,"clearHighlights",null),e$3([o$1("viewModel.clearSelection")],M.prototype,"clearSelection",null),e$3([o$1("viewModel.deselectRows")],M.prototype,"deselectRows",null),e$3([o$1("viewModel.refresh")],M.prototype,"refresh",null),e$3([o$1("viewModel.sortColumn")],M.prototype,"sortColumn",null),e$3([o$1("viewModel.selectRows")],M.prototype,"selectRows",null),e$3([o$1("viewModel.scrollToIndex")],M.prototype,"scrollToIndex",null),M=e$3([i$4("esri.widgets.FeatureTable")],M);const y=M;

const arcgisFeatureTableCss = "@import url('https://js.arcgis.com/next/esri/themes/light/main.css');";

let ArcGISFeatureTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loaded = createEvent(this, "loaded", 7);
    this.rowSelectionChange = createEvent(this, "rowSelectionChange", 7);
    this.layer = null;
    this.position = 'bottom-left';
  }
  fieldConfigsWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._fieldConfigs = JSON.parse(newValue);
    }
    else {
      this._fieldConfigs = newValue;
    }
    if (this.widget) {
      this.widget.fieldConfigs = this._fieldConfigs;
    }
  }
  validateItemId(value, old) {
    if (value && value !== old) {
      const layer = new Ge$1({
        portalItem: {
          id: value
        }
      });
      this.layer = layer;
    }
  }
  validateLayer(value) {
    if (value && this.widget) {
      this.widget.layer = value;
    }
  }
  validateUrl(value, old) {
    if (value && value !== old) {
      const layer = new Ge$1({ url: value });
      this.layer = layer;
    }
  }
  validateView(value) {
    if (value) {
      this.widget.view = value;
      if (this.el.parentElement.tagName.toLowerCase() !== 'arcgis-expand') {
        this.widget.view.ui.add(this.widget, this.position);
      }
    }
  }
  componentWillLoad() {
    if (this.fieldConfigs) {
      this.fieldConfigsWatcher(this.fieldConfigs);
    }
    const table = new y({
      container: this.el,
    });
    this.widget = table;
    // proxy events
    table.on('selection-change', (e) => this.rowSelectionChange.emit(e));
    if (this.view) {
      table.view = this.view;
    }
    if (this.layer) {
      table.layer = this.layer;
    }
    else if (this.itemId) {
      const layer = new Ge$1({
        portalItem: {
          id: this.itemId
        }
      });
      this.layer = layer;
    }
    else if (this.url) {
      const layer = new Ge$1({ url: this.url });
      this.layer = layer;
    }
    this.loaded.emit(true);
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "fieldConfigs": ["fieldConfigsWatcher"],
    "itemId": ["validateItemId"],
    "layer": ["validateLayer"],
    "url": ["validateUrl"],
    "view": ["validateView"]
  }; }
};
ArcGISFeatureTable.style = arcgisFeatureTableCss;

export { ArcGISFeatureTable as arcgis_feature_table };
