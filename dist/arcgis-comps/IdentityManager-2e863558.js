import { z, n, G as s$4, aX as g, e, a as d$2, b as e$1, i as i$2, aR as n$1, aU as $, aV as n$2, aT as e$3, aL as U, bx as y, bR as B, a7 as j, h as s$5, ah as p$3, a3 as E, E as E$1, bS as b$1, aQ as r$1, ab as t$1, a1 as z$1, bT as A, V as t$2, Y as T, bU as C$1, ae as n$3, bV as o } from './jsxFactory-a3b6abde.js';
import { e as e$2 } from './widget-7d4c291e.js';
import { a as a$1 } from './JSONSupport-4f0a3248.js';
import './index-8dec7690.js';
import './vmEvent-bdc3bebc.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={base:"esri-identity-form",group:"esri-identity-form__group",label:"esri-identity-form__label",footer:"esri-identity-form__footer",esriInput:"esri-input",esriButton:"esri-button",esriButtonSecondary:"esri-button--secondary"},l$1="ArcGIS Online";let p$2=class extends z{constructor(s,e){super(s,e),this._usernameInputNode=null,this._passwordInputNode=null,this.messages=null,this.signingIn=!1,this.server=null,this.resource=null,this.error=null,this.oAuthPrompt=!1;}render(){const{error:s,server:e,resource:t,signingIn:o,oAuthPrompt:n$1,messages:p}=this,d=n("div",{class:a.group},s$4(n$1?p.oAuthInfo:p.info,{server:/\.arcgis\.com/i.test(e)?l$1:e,resource:`(${t||p.lblItem})`})),c=n$1?null:n("div",{class:a.group,key:"username"},n("label",{class:a.label},p.lblUser,n("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:g,"data-node-ref":"_usernameInputNode",class:a.esriInput}))),m=n$1?null:n("div",{class:a.group,key:"password"},n("label",{class:a.label},p.lblPwd,n("input",{value:"",required:!0,type:"password",bind:this,afterCreate:g,"data-node-ref":"_passwordInputNode",class:a.esriInput}))),h=n("div",{class:this.classes(a.group,a.footer)},n("input",{type:"submit",disabled:!!o,value:o?p.lblSigning:p.lblOk,class:a.esriButton}),n("input",{type:"button",value:p.lblCancel,bind:this,onclick:this._cancel,class:this.classes(a.esriButton,a.esriButtonSecondary)})),g$1=s?n("div",null,s.details&&s.details.httpStatus?p.invalidUser:p.noAuthService):null;return n("form",{class:a.base,bind:this,onsubmit:this._submit},d,g$1,c,m,h)}_cancel(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel");}_submit(s){s.preventDefault(),this._set("signingIn",!0);const e=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",e);}};e([d$2(),e$1("esri/identity/t9n/identity")],p$2.prototype,"messages",void 0),e([d$2()],p$2.prototype,"signingIn",void 0),e([d$2()],p$2.prototype,"server",void 0),e([d$2()],p$2.prototype,"resource",void 0),e([d$2()],p$2.prototype,"error",void 0),e([d$2()],p$2.prototype,"oAuthPrompt",void 0),p$2=e([i$2("esri.identity.IdentityForm")],p$2);const d$1=p$2;

/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

var getCandidates = function getCandidates(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }

  candidates = candidates.filter(filter);
  return candidates;
};

var isContentEditable = function isContentEditable(node) {
  return node.contentEditable === 'true';
};

var getTabindex = function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.


  if (isContentEditable(node)) {
    return 0;
  } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
};

var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};

var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};

var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};

var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};

var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};

var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }

  var radioScope = node.form || node.ownerDocument;

  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };

  var radioSet;

  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }

  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};

var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};

var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

var isHidden = function isHidden(node, displayCheck) {
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }

  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }

  if (!displayCheck || displayCheck === 'full') {
    while (node) {
      if (getComputedStyle(node).display === 'none') {
        return true;
      }

      node = node.parentElement;
    }
  } else if (displayCheck === 'non-zero-area') {
    var _node$getBoundingClie = node.getBoundingClientRect(),
        width = _node$getBoundingClie.width,
        height = _node$getBoundingClie.height;

    return width === 0 && height === 0;
  }

  return false;
}; // form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset


var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (isInput(node) || node.tagName === 'SELECT' || node.tagName === 'TEXTAREA' || node.tagName === 'BUTTON') {
    var parentNode = node.parentElement;

    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> as an immediate child of the disabled
        //  <fieldset>: if the node is in that legend, it'll be enabled even
        //  though the fieldset is disabled; otherwise, the node is in a
        //  secondary/subsequent legend, or somewhere else within the fieldset
        //  (however deep nested) and it'll be disabled
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);

          if (child.tagName === 'LEGEND') {
            if (child.contains(node)) {
              return false;
            } // the node isn't in the first legend (in doc order), so no matter
            //  where it is now, it'll be disabled


            return true;
          }
        } // the node isn't in a legend, so no matter where it is now, it'll be disabled


        return true;
      }

      parentNode = parentNode.parentElement;
    }
  } // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state


  return false;
};

var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }

  return true;
};

var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (!isNodeMatchingSelectorFocusable(options, node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
};

var tabbable = function tabbable(el, options) {
  options = options || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  candidates.forEach(function (candidate, i) {
    var candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  });
  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
};

var focusable = function focusable(el, options) {
  options = options || {};
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  return candidates;
};

var isTabbable = function isTabbable(node, options) {
  options = options || {};

  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, candidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorTabbable(options, node);
};

var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

var isFocusable = function isFocusable(node, options) {
  options = options || {};

  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorFocusable(options, node);
};

/*!
* focus-trap 6.7.1
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};

var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};

var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

var delay = function delay(fn) {
  return setTimeout(fn, 0);
}; // Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs


var findIndex = function findIndex(arr, fn) {
  var idx = -1;
  arr.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }

    return true; // next
  });
  return idx;
};
/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */


var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return typeof value === 'function' ? value.apply(void 0, params) : value;
};

var getActualTarget = function getActualTarget(event) {
  // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
  //  shadow host. However, event.target.composedPath() will be an array of
  //  nodes "clicked" from inner-most (the actual element inside the shadow) to
  //  outer-most (the host HTML document). If we have access to composedPath(),
  //  then use its first element; otherwise, fall back to event.target (and
  //  this only works for an _open_ shadow DOM; otherwise,
  //  composedPath()[0] === event.target always).
  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};

var createFocusTrap = function createFocusTrap(elements, userOptions) {
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);

  var state = {
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying the first and last tabbable nodes in all containers/groups in
    //  the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{ container: HTMLElement, firstTabbableNode: HTMLElement|null, lastTabbableNode: HTMLElement|null }>}
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: undefined
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  var containersContain = function containersContain(element) {
    return !!(element && state.containers.some(function (container) {
      return container.contains(element);
    }));
  };
  /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @returns {undefined | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `false` if the option
   *  resolved to `false` (node explicitly not given); otherwise, the resolved
   *  DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node.
   */


  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];

    if (typeof optionValue === 'function') {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }

      optionValue = optionValue.apply(void 0, params);
    }

    if (!optionValue) {
      if (optionValue === undefined || optionValue === false) {
        return optionValue;
      } // else, empty string (invalid), null (invalid), 0 (invalid)


      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }

    var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue); // resolve to node, or null if fails

      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }

    return node;
  };

  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getNodeForOption('initialFocus'); // false explicitly indicates we want no initialFocus at all

    if (node === false) {
      return false;
    }

    if (node === undefined) {
      // option not specified: use fallback options
      if (containersContain(doc.activeElement)) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode; // NOTE: `fallbackFocus` option function cannot return `false` (not supported)

        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }
    }

    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }

    return node;
  };

  var updateTabbableNodes = function updateTabbableNodes() {
    state.tabbableGroups = state.containers.map(function (container) {
      var tabbableNodes = tabbable(container);

      if (tabbableNodes.length > 0) {
        return {
          container: container,
          firstTabbableNode: tabbableNodes[0],
          lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
        };
      }

      return undefined;
    }).filter(function (group) {
      return !!group;
    }); // remove groups with no tabbable nodes
    // throw if no groups have tabbable nodes and we don't have a fallback focus node either

    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
    ) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }
  };

  var tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }

    if (node === doc.activeElement) {
      return;
    }

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  };

  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus', previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  }; // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  var checkPointerDown = function checkPointerDown(e) {
    var target = getActualTarget(e);

    if (containersContain(target)) {
      // allow the click since it ocurred inside the trap
      return;
    }

    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // if, on deactivation, we should return focus to the node originally-focused
        //  when the trap was activated (or the configured `setReturnFocus` node),
        //  then assume it's also OK to return focus to the outside node that was
        //  just clicked, causing deactivation, as long as that node is focusable;
        //  if it isn't focusable, then return focus to the original node focused
        //  on activation (or the configured `setReturnFocus` node)
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked, whether it's focusable or not; by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node)
        returnFocus: config.returnFocusOnDeactivate && !isFocusable(target)
      });
      return;
    } // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    } // otherwise, prevent the click


    e.preventDefault();
  }; // In case focus escapes the trap for some strange reason, pull it back in.


  var checkFocusIn = function checkFocusIn(e) {
    var target = getActualTarget(e);
    var targetContained = containersContain(target); // In Firefox when you Tab out of an iframe the Document is briefly focused.

    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      // escaped! pull it back in to where it just left
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  }; // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  var checkTab = function checkTab(e) {
    var target = getActualTarget(e);
    updateTabbableNodes();
    var destinationNode = null;

    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's tabbable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findIndex(state.tabbableGroups, function (_ref) {
        var container = _ref.container;
        return container.contains(target);
      });

      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back in to...
        if (e.shiftKey) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (e.shiftKey) {
        // REVERSE
        // is the target the first tabbable node in a group?
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return target === firstTabbableNode;
        });

        if (startOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === target) {
          // an exception case where the target is the container itself, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }

        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        // FORWARD
        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return target === lastTabbableNode;
        });

        if (lastOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === target) {
          // an exception case where the target is the container itself, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }

        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }
    } else {
      // NOTE: the fallbackFocus option does not support returning false to opt-out
      destinationNode = getNodeForOption('fallbackFocus');
    }

    if (destinationNode) {
      e.preventDefault();
      tryFocus(destinationNode);
    } // else, let the browser take care of [shift+]tab and move the focus

  };

  var checkKey = function checkKey(e) {
    if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates, e) !== false) {
      e.preventDefault();
      trap.deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  };

  var checkClick = function checkClick(e) {
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }

    var target = getActualTarget(e);

    if (containersContain(target)) {
      return;
    }

    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }; //
  // EVENT LISTENERS
  //


  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    } // There can be only one listening focus trap at a time


    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };

  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }; //
  // TRAP DEFINITION
  //


  trap = {
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }

      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');

      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }

      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;

      if (onActivate) {
        onActivate();
      }

      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }

        addListeners();

        if (onPostActivate) {
          onPostActivate();
        }
      };

      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }

      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }

      clearTimeout(state.delayInitialFocusTimer); // noop if undefined

      state.delayInitialFocusTimer = undefined;
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = getOption(deactivateOptions, 'onDeactivate');
      var onPostDeactivate = getOption(deactivateOptions, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(deactivateOptions, 'checkCanReturnFocus');

      if (onDeactivate) {
        onDeactivate();
      }

      var returnFocus = getOption(deactivateOptions, 'returnFocus', 'returnFocusOnDeactivate');

      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }

          if (onPostDeactivate) {
            onPostDeactivate();
          }
        });
      };

      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }

      finishDeactivation();
      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }

      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }

      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });

      if (state.active) {
        updateTabbableNodes();
      }

      return this;
    }
  }; // initialize container elements

  trap.updateContainerElements(elements);
  return trap;
};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l={base:"esri-identity-modal",open:"esri-identity-modal--open",closed:"esri-identity-modal--closed",title:"esri-identity-modal__title",dialog:"esri-identity-modal__dialog",content:"esri-identity-modal__content",closeButton:"esri-identity-modal__close-button",iconClose:"esri-icon-close"};let d=class extends z{constructor(t,e){super(t,e),this.container=document.createElement("div"),this.content=null,this.open=!1,this._close=()=>{this.open=!1;},document.body.appendChild(this.container),this.own(this.watch("open",(()=>this._toggleFocusTrap())));}destroy(){this._destroyFocusTrap();}render(){const t=this.id,{open:e,content:o,title:s,messages:i}=this,r=e&&!!o,n$1={[l.open]:r,[l.closed]:!r},a=n("button",{class:l.closeButton,"aria-label":i.close,title:i.close,bind:this,onclick:this._close},n("span",{"aria-hidden":"true",class:l.iconClose})),d=`${t}_title`,p=`${t}_content`,u=s?n("h1",{id:d,class:l.title},s):null,m=r?n("div",{bind:this,class:l.dialog,role:"dialog","aria-labelledby":d,"aria-describedby":p,afterCreate:this._createFocusTrap},a,u,this._renderContent(p)):null;return n("div",{tabIndex:-1,class:this.classes(l.base,n$1)},m)}_destroyFocusTrap(){var t;null==(t=this._focusTrap)||t.deactivate({onDeactivate:null}),this._focusTrap=null;}_toggleFocusTrap(){const{_focusTrap:t,open:e}=this;t&&(e?t.activate():t.deactivate());}_createFocusTrap(t){this._destroyFocusTrap();const o=requestAnimationFrame((()=>{this._focusTrap=createFocusTrap(t,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap();}));this.own(n$1((()=>cancelAnimationFrame(o))));}_renderContent(t){const e=this.content;return "string"==typeof e?n("div",{class:l.content,id:t,innerHTML:e}):e$2(e)?n("div",{class:l.content,id:t},e.render()):e instanceof HTMLElement?n("div",{class:l.content,id:t,bind:e,afterCreate:this._attachToNode}):null}_attachToNode(t){const e=this;t.appendChild(e);}};e([d$2({readOnly:!0})],d.prototype,"container",void 0),e([d$2()],d.prototype,"content",void 0),e([d$2()],d.prototype,"open",void 0),e([d$2(),e$1("esri/t9n/common")],d.prototype,"messages",void 0),e([d$2({aliasOf:"messages.auth.signIn"})],d.prototype,"title",void 0),d=e([i$2("esri.identity.IdentityModal")],d);const p$1=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t="esriJSAPIOAuth";class s$3{constructor(t,s){this.oAuthInfo=null,this.storage=null,this.appId=null,this.expires=null,this.ssl=null,this.token=null,this.userId=null,this.oAuthInfo=t,this.storage=s,this._init();}isValid(){let t=!1;if(this.oAuthInfo&&this.token&&this.userId){const s=Date.now();if(this.expires>s){(this.expires-s)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0);}}return t}save(){if(!this.storage)return;const s=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){let o=s[e.authNamespace];o||(o=s[e.authNamespace]={}),o[e.portalUrl]={appId:this.appId=e.appId,expires:this.expires,ssl:this.ssl,token:this.token,userId:this.userId};try{this.storage.setItem(t,JSON.stringify(s));}catch(i){console.log(i);}}}destroy(){const s=this._load(),e=this.oAuthInfo;if(e&&e.appId&&e.portalUrl&&this.token&&this.expires>Date.now()){const t=e.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",s=new FormData;if(s.append("f","json"),s.append("auth_token",this.token),s.append("client_id",e.appId),s.append("token_type_hint","access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(t,s);else {const e=new XMLHttpRequest;e.open("POST",t),e.send(s);}}if(e&&e.authNamespace&&e.portalUrl&&this.storage){const o=s[e.authNamespace];if(o){delete o[e.portalUrl];try{this.storage.setItem(t,JSON.stringify(s));}catch(i){console.log(i);}}}e&&(e._oAuthCred=null,this.oAuthInfo=null);}_init(){const t=this._load(),s=this.oAuthInfo;if(s&&s.authNamespace&&s.portalUrl){let e=t[s.authNamespace];e&&(e=e[s.portalUrl],e&&(this.appId=e.appId,this.expires=e.expires,this.ssl=e.ssl,this.token=e.token,this.userId=e.userId));}}_load(){let s={};if(this.storage){const i=this.storage.getItem(t);if(i)try{s=JSON.parse(i);}catch(e){console.log(e);}}return s}}s$3.prototype.declaredClass="esri.identity.OAuthCredential";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var s$2;let p=s$2=class extends a$1{constructor(o){super(o),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null;}clone(){return s$2.fromJSON(this.toJSON())}};e([d$2({json:{write:!0}})],p.prototype,"appId",void 0),e([d$2({json:{write:!0}})],p.prototype,"authNamespace",void 0),e([d$2({json:{write:!0}})],p.prototype,"expiration",void 0),e([d$2({json:{write:!0}})],p.prototype,"forceLogin",void 0),e([d$2({json:{write:!0}})],p.prototype,"forceUserId",void 0),e([d$2({json:{write:!0}})],p.prototype,"locale",void 0),e([d$2({json:{write:!0}})],p.prototype,"minTimeUntilExpiration",void 0),e([d$2({json:{write:!0}})],p.prototype,"popup",void 0),e([d$2({json:{write:!0}})],p.prototype,"popupCallbackUrl",void 0),e([d$2({json:{write:!0}})],p.prototype,"popupWindowFeatures",void 0),e([d$2({json:{write:!0}})],p.prototype,"portalUrl",void 0),e([d$2({json:{write:!0}})],p.prototype,"preserveUrlHash",void 0),e([d$2({json:{write:!0}})],p.prototype,"userId",void 0),p=s$2=e([i$2("esri.identity.OAuthInfo")],p);const i$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$1=class extends a$1{constructor(o){super(o),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null;}};e([d$2({json:{write:!0}})],s$1.prototype,"adminTokenServiceUrl",void 0),e([d$2({json:{write:!0}})],s$1.prototype,"currentVersion",void 0),e([d$2({json:{write:!0}})],s$1.prototype,"hasPortal",void 0),e([d$2({json:{write:!0}})],s$1.prototype,"hasServer",void 0),e([d$2({json:{write:!0}})],s$1.prototype,"owningSystemUrl",void 0),e([d$2({json:{write:!0}})],s$1.prototype,"owningTenant",void 0),e([d$2({json:{write:!0}})],s$1.prototype,"server",void 0),e([d$2({json:{write:!0}})],s$1.prototype,"shortLivedTokenValidity",void 0),e([d$2({json:{write:!0}})],s$1.prototype,"tokenServiceUrl",void 0),e([d$2({json:{write:!0}})],s$1.prototype,"webTierAuth",void 0),s$1=e([i$2("esri.identity.ServerInfo")],s$1);const i=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const O={},R=e=>{const t=new $(e.owningSystemUrl).host,s=new $(e.server).host,r=/.+\.arcgis\.com$/i;return r.test(t)&&r.test(s)},b=(e,t)=>!!(R(e)&&t&&t.some((t=>t.test(e.server))));let P=null,C=null;try{P=window.localStorage,C=window.sessionStorage;}catch{}class D extends n$2{constructor(){super(),this._portalConfig=e$3.esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this.defaultOAuthInfo=null,this.defaultTokenValidity=60,this.dialog=null,this.formConstructor=d$1,this.tokenValidity=null,this.normalizeWebTierAuth=!1,this._appOrigin="null"!==window.origin?window.origin:window.location.origin,this._appUrlObj=U(window.location.href),this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthHash=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi,this._gwUser=/http.+\/users\/([^\/]+)\/?.*/i,this._gwItem=/http.+\/items\/([^\/]+)\/?.*/i,this._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getOAuthHash(),window.addEventListener("pageshow",(e=>{this._pageShowHandler(e);}));}registerServers(e){const t=this.serverInfos;t?(e=e.filter((e=>!this.findServerInfo(e.server))),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach((e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server);}));}registerOAuthInfos(e){const t=this.oAuthInfos;if(t){for(const s of e){const e=this.findOAuthInfo(s.portalUrl);e&&t.splice(t.indexOf(e),1);}this.oAuthInfos=t.concat(e);}else this.oAuthInfos=e;}registerToken(e){e={...e};const t=this._sanitizeUrl(e.server),s=this._isServerRsrc(t);let r,i$1=this.findServerInfo(t),n=!0;i$1||(i$1=new i,i$1.server=this._getServerInstanceRoot(t),s?i$1.hasServer=!0:(i$1.tokenServiceUrl=this._getTokenSvcUrl(t),i$1.hasPortal=!0),this.registerServers([i$1])),r=this._findCredential(t),r?(delete e.server,Object.assign(r,e),n=!1):(r=new q({userId:e.userId,server:i$1.server,token:e.token,expires:e.expires,ssl:e.ssl,scope:s?"server":"portal"}),r.resources=[t],this.credentials.push(r)),r.emitTokenChange(!1),n||r.refreshServerTokens();}toJSON(){return y({serverInfos:this.serverInfos.map((e=>e.toJSON())),oAuthInfos:this.oAuthInfos.map((e=>e.toJSON())),credentials:this.credentials.map((e=>e.toJSON()))})}initialize(e){if(!e)return;"string"==typeof e&&(e=JSON.parse(e));const t=e.serverInfos,s=e.oAuthInfos,r=e.credentials;if(t){const e=[];t.forEach((t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new i(t));})),e.length&&this.registerServers(e);}if(s){const e=[];s.forEach((t=>{t.appId&&e.push(t.declaredClass?t:new i$1(t));})),e.length&&this.registerOAuthInfos(e);}r&&r.forEach((e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new q(e)).emitTokenChange(),this.credentials.push(e));}));}findServerInfo(e){let t;e=this._sanitizeUrl(e);for(const s of this.serverInfos)if(this._hasSameServerInstance(s.server,e)){t=s;break}return t}findOAuthInfo(e){let t;e=this._sanitizeUrl(e);for(const s of this.oAuthInfos)if(this._hasSameServerInstance(s.portalUrl,e)){t=s;break}return t}findCredential(e,t){let s;e=this._sanitizeUrl(e);const r=this._isServerRsrc(e)?"server":"portal";if(t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===r){s=i;break}}else for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&-1!==this._getIdenticalSvcIdx(e,i)&&i.scope===r){s=i;break}return s}getCredential(e,t){let s,r,n=!0;t&&(s=!!t.token,r=t.error,n=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e);const o=new AbortController,a=B();if(t.signal&&j(t.signal,(()=>{o.abort();})),j(o,(()=>{a.reject(new s$5("identity-manager:user-aborted","ABORTED"));})),p$3(o))return a.promise;t.signal=o.signal;const h=this._isAdminResource(e),l=s?this.findCredential(e):null;let p;if(l&&r&&r.details&&498===r.details.httpStatus)l.destroy();else if(l)return p=new s$5("identity-manager:not-authorized","You are currently signed in as: '"+l.userId+"'. You do not have access to this resource: "+e,{error:r}),a.reject(p),a.promise;const _=this._findCredential(e,t);if(_)return a.resolve(_),a.promise;let g=this.findServerInfo(e);if(g)!g.hasServer&&this._isServerRsrc(e)&&(g._restInfoPms=this._getTokenSvcUrl(e),g.hasServer=!0);else {const t=this._getTokenSvcUrl(e);if(!t)return p=new s$5("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),a.reject(p),a.promise;g=new i,g.server=this._getServerInstanceRoot(e),"string"==typeof t?(g.tokenServiceUrl=t,g.hasPortal=!0):(g._restInfoPms=t,g.hasServer=!0),this.registerServers([g]);}return g.hasPortal&&void 0===g._selfReq&&(n||E(g.tokenServiceUrl,this._appOrigin)||this._gwDomains.some((e=>e.tokenServiceUrl===g.tokenServiceUrl)))&&(g._selfReq={owningTenant:t&&t.owningTenant,selfDfd:this._getPortalSelf(g.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,g,t,a,h)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,s){const n=this._rePortalTokenSvc.test(e.tokenServiceUrl),o=new $(this._appOrigin),a=e.shortLivedTokenValidity;let h,l,c,d,u,_,g,m;t&&(m=this.tokenValidity||a||this.defaultTokenValidity,m>a&&a>0&&(m=a)),s&&(h=s.isAdmin,l=s.serverUrl,c=s.token,_=s.signal,g=s.ssl,e.customParameters=s.customParameters),h?d=e.adminTokenServiceUrl:(d=e.tokenServiceUrl,u=new $(d.toLowerCase()),e.webTierAuth&&null!=s&&s.serverUrl&&!g&&"http"===o.scheme&&(E(o.uri,d,!0)||"https"===u.scheme&&o.host===u.host&&"7080"===o.port&&"7443"===u.port)&&(d=d.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));const v={query:{request:"getToken",username:null==t?void 0:t.username,password:null==t?void 0:t.password,serverUrl:l,token:c,expiration:m,referer:h||n?this._appOrigin:null,client:h?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,s),signal:_,...null==s?void 0:s.ioArgs};n||(v.withCredentials=!1);return E$1(d,v).then((s=>{const r=s.data;if(!r||!r.token)return new s$5("identity-manager:authentication-failed","Unable to generate token");const n=e.server;return O[n]||(O[n]={}),t&&(O[n][t.username]=t.password),r.validity=m,r}))}isBusy(){return !!this._busy}checkSignInStatus(e){return this.checkAppAccess(e,"").then((e=>e.credential))}checkAppAccess(e,t,s){let n=!1;return this.getCredential(e,{prompt:!1}).then((o=>{let a;const h={f:"json"};if("portal"===o.scope)if(t&&(this._doPortalSignIn(e)||s&&s.force))a=o.server+"/sharing/rest/oauth2/validateAppAccess",h.client_id=t;else {if(!o.token)return {credential:o};a=o.server+"/sharing/rest";}else {if(!o.token)return {credential:o};a=o.server+"/rest/services";}return o.token&&(h.token=o.token),E$1(a,{query:h,authMode:"anonymous"}).then((e=>{if(!1===e.data.valid)throw new s$5("identity-manager:not-authorized",`You are currently signed in as: '${o.userId}'.`,e.data);return n=!!e.data.viewOnlyUserTypeApp,{credential:o}})).catch((e=>{if("identity-manager:not-authorized"===e.name)throw e;const t=e.details&&e.details.httpStatus;if(498===t)throw o.destroy(),new s$5("identity-manager:not-authenticated","User is not signed in.");if(400===t)throw new s$5("identity-manager:invalid-request");return {credential:o}}))})).then((e=>({credential:e.credential,viewOnly:n})))}setOAuthResponseHash(e){var t;const s=this._oAuthDfd;if(this._oAuthDfd=null,!s||!e)return;clearInterval(this._oAuthIntervalId),null==(t=this._oAuthOnHashHandle)||t.remove(),"#"===e.charAt(0)&&(e=e.substring(1));const r=b$1(e);if(r.error){const e="access_denied"===r.error,t=new s$5(e?"identity-manager:user-aborted":"identity-manager:authentication-failed",e?"ABORTED":"OAuth: "+r.error+" - "+r.error_description);s.reject(t);}else {const e=s.sinfo_,t=s.oinfo_,i=t._oAuthCred,n=new q({userId:r.username,server:e.server,token:r.access_token,expires:Date.now()+1e3*Number(r.expires_in),ssl:"true"===r.ssl,_oAuthCred:i});t.userId=n.userId,i.storage=r.persist?P:C,i.token=n.token,i.expires=n.expires,i.userId=n.userId,i.ssl=n.ssl,i.save(),s.resolve(n);}}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e;}setProtocolErrorHandler(e){this._protocolFunc=e;}signIn(e,t,s={}){const r=B(),n=()=>{var e,t,s,r,i;null==(e=h)||e.remove(),null==(t=l)||t.remove(),null==(s=u)||s.remove(),null==(r=a)||r.destroy(),null==(i=this.dialog)||i.destroy(),this.dialog=a=h=l=u=null;},o=()=>{n(),this._oAuthDfd=null,r.reject(new s$5("identity-manager:user-aborted","ABORTED"));};s.signal&&j(s.signal,(()=>{o();}));let a=new this.formConstructor;a.resource=this.getResourceName(e),a.server=t.server,this.dialog=new p$1,this.dialog.content=a,this.dialog.open=!0,this.emit("dialog-create");let h=a.on("cancel",o),l=this.dialog.watch("open",o),u=a.on("submit",(e=>{this.generateToken(t,e,{isAdmin:s.isAdmin,signal:s.signal}).then((i=>{n();const o=new q({userId:e.username,server:t.server,token:i.token,expires:null!=i.expires?Number(i.expires):null,ssl:!!i.ssl,isAdmin:s.isAdmin,validity:i.validity});r.resolve(o);})).catch((e=>{a.error=e,a.signingIn=!1;}));}));return r.promise}oAuthSignIn(e,t,s,r){this._oAuthDfd=B();const n=this._oAuthDfd;null!=r&&r.signal&&j(r.signal,(()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;e&&!e.closed?e.close():this.dialog&&h();})),n.resUrl_=e,n.sinfo_=t,n.oinfo_=s;const o=!r||!1!==r.oAuthPopupConfirmation;if(!s.popup||!o)return this._doOAuthSignIn(e,t,s),n.promise;const a=new this.formConstructor;a.oAuthPrompt=!0,a.server=t.server,this.dialog=new p$1,this.dialog.content=a,this.dialog.open=!0,this.emit("dialog-create");const h=()=>{_(),this._oAuthDfd=null,n.reject(new s$5("identity-manager:user-aborted","ABORTED"));},l=a.on("cancel",h),u=this.dialog.watch("open",h),p=a.on("submit",(()=>{_(),this._doOAuthSignIn(e,t,s);})),_=()=>{l.remove(),u.remove(),p.remove(),a.destroy(),this.dialog.destroy(),this.dialog=null;};return n.promise}destroyCredentials(){if(this.credentials){this.credentials.slice().forEach((e=>{e.destroy();}));}this.emit("credentials-destroy");}enablePostMessageAuth(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=r$1(window,"message",(t=>{var s;if((t.origin===this._appOrigin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===(null==(s=t.data)?void 0:s.type)){const s=t.source;this.getCredential(e).then((e=>{s.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin);})).catch((e=>{s.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin);}));}}));}disablePostMessageAuth(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null);}_getOAuthHash(){let e=window.location.hash;if(e){"#"===e.charAt(0)&&(e=e.substring(1));const t=b$1(e);let s=!1;if(t.access_token&&t.expires_in&&t.state&&t.hasOwnProperty("username"))try{t.state=JSON.parse(t.state),"object"==typeof t.state&&t.state.portalUrl&&(this._oAuthHash=t,s=!0);}catch{}else t.error&&t.error_description&&(console.log("IdentityManager OAuth Error: ",t.error," - ",t.error_description),"access_denied"===t.error&&(s=!0));s&&(window.location.hash="object"==typeof t.state&&t.state.hash||"");}}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new s$5("identity-manager:user-aborted","ABORTED");this._errbackFunc(e);}}_findCredential(e,t){let s,r,i,n,o=-1;const a=t&&t.token,h=t&&t.resource,l=this._isServerRsrc(e)?"server":"portal",c=this.credentials.filter((t=>this._hasSameServerInstance(t.server,e)&&t.scope===l));if(e=h||e,c.length)if(1===c.length){if(s=c[0],n=this.findServerInfo(s.server),r=n&&n.owningSystemUrl,i=r&&this.findCredential(r,s.userId),o=this._getIdenticalSvcIdx(e,s),!a)return -1===o&&s.resources.push(e),this._addResource(e,i),s;-1!==o&&(s.resources.splice(o,1),this._removeResource(e,i));}else {let t,s;if(c.some((a=>(s=this._getIdenticalSvcIdx(e,a),-1!==s&&(t=a,n=this.findServerInfo(t.server),r=n&&n.owningSystemUrl,i=r&&this.findCredential(r,t.userId),o=s,!0)))),a)t&&(t.resources.splice(o,1),this._removeResource(e,i));else if(t)return this._addResource(e,i),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e);if(!t)for(const s of this.oAuthInfos)if(this._isIdProvider(s.portalUrl,e)){t=s;break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e);}_removeResource(e,t){let s=-1;t&&(s=this._getIdenticalSvcIdx(e,t),s>-1&&t.resources.splice(s,1));}_useProxy(e,t){return t&&t.isAdmin&&!E(e.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!E(e.tokenServiceUrl,this._appOrigin)}_getOrigin(e){const t=new $(e);return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase();let s=t.indexOf(this._agsRest);return -1===s&&this._isAdminResource(e)&&(s=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1===s&&(s=t.indexOf("/sharing")),-1===s&&"/"===t.substr(-1)&&(s=t.length-1),s>-1?e.substring(0,s):e}_hasSameServerInstance(e,t){return "/"===e.substr(-1)&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=this._normalizeAGOLorgDomain(e),t=this._normalizeAGOLorgDomain(t),(e=e.substr(e.indexOf(":")))===(t=t.substr(t.indexOf(":")))}_normalizeAGOLorgDomain(e){const t=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,s=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,r=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;return t.test(e)?e=e.replace(t,"https://www.arcgis.com"):s.test(e)?e=e.replace(s,"https://devext.arcgis.com"):r.test(e)&&(e=e.replace(r,"https://qaext.arcgis.com")),e}_sanitizeUrl(e){const s=(t$1.request.proxyUrl||"").toLowerCase(),r=s?e.toLowerCase().indexOf(s+"?"):-1;return -1!==r&&(e=e.substring(r+s.length+1)),e=z$1(e),U(e).path}_isRESTService(e){return e.indexOf(this._agsRest)>-1}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let s;if(this._isRESTService(e)&&this._isRESTService(t)){const r=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase();if(s=r===i,!s){const e=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;s=r.replace(e,"$1")===i.replace(e,"$1");}}else this._isAdminResource(e)&&this._isAdminResource(t)?s=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(s=!0);return s}_isPortalDomain(e){const s=new $(e.toLowerCase()),r=this._portalConfig;let i=this._gwDomains.some((e=>e.regex.test(s.uri)));return !i&&r&&(i=this._hasSameServerInstance(this._getServerInstanceRoot(r.restBaseUrl),s.uri)),i||t$1.portalUrl&&(i=E(s,t$1.portalUrl,!0)),i||(i=this._portals.some((e=>this._hasSameServerInstance(e,s.uri)))),i=i||this._agsPortal.test(s.path),i}_isIdProvider(e,t){let s=-1,r=-1;this._gwDomains.forEach(((i,n)=>{-1===s&&i.regex.test(e)&&(s=n),-1===r&&i.regex.test(t)&&(r=n);}));let i=!1;if(s>-1&&r>-1&&(0===s||4===s?0!==r&&4!==r||(i=!0):1===s?1!==r&&2!==r||(i=!0):2===s?2===r&&(i=!0):3===s&&3===r&&(i=!0)),!i){const s=this.findServerInfo(t),r=s&&s.owningSystemUrl;r&&R(s)&&this._isPortalDomain(r)&&this._isIdProvider(e,r)&&(i=!0);}return i}_getIdenticalSvcIdx(e,t){let s=-1;for(let r=0;r<t.resources.length;r++){const i=t.resources[r];if(this._isIdenticalService(e,i)){s=r;break}}return s}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,s,i;if(this._isRESTService(e)||this._isAdminResource(e)){const i=this._getServerInstanceRoot(e);return t=i+"/admin/generateToken",s=E$1(e=i+"/rest/info",{query:{f:"json"}}).then((e=>e.data)),{adminUrl:t,promise:s}}if(this._isPortalDomain(e)){let t="";if(this._gwDomains.some((s=>(s.regex.test(e)&&(t=s.tokenServiceUrl),!!t))),t||this._portals.some((s=>(this._hasSameServerInstance(s,e)&&(t=s+this._gwTokenUrl),!!t))),t||(i=e.toLowerCase().indexOf("/sharing"),-1!==i&&(t=e.substring(0,i)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const s=new $(e).port;/^http:\/\//i.test(e)&&"7080"===s&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:");}return t}if(-1!==e.toLowerCase().indexOf("premium.arcgisonline.com"))return "https://premium.arcgisonline.com/server/tokens"}_exchangeToken(e,t,s){return E$1(`${e}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:s}}).then((e=>e.data.token))}_getPlatformSelf(e,t){return e=e.replace(/^http:/i,"https:"),E$1(`${e}/sharing/rest/oauth2/platformSelf`,{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json"},withCredentials:!0}).then((e=>e.data))}_getPortalSelf(e,t){let s;if(this._gwDomains.some((t=>(t.regex.test(e)&&(s=t.customBaseUrl),!!s))),s)return Promise.resolve({allSSL:!0,currentVersion:"4.4",customBaseUrl:s,portalMode:"multitenant",supportsOAuth:!0});this._appOrigin.startsWith("https:")?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return E$1(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then((e=>e.data))}_doPortalSignIn(e){const t=this._portalConfig,s=window.location.href,r=this.findServerInfo(e);return !(!t&&!this._isPortalDomain(s)||!(r?r.hasPortal||r.owningSystemUrl&&this._isPortalDomain(r.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(s,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||E(s,e,!0)))}_checkProtocol(e,t,s,r){let n=!0;const o=r?t.adminTokenServiceUrl:t.tokenServiceUrl;if(o.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&A(o)&&(n=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!n)){s(new s$5("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."));}return n}_enqueue(e,t,s,r,i,n){return r||(r=B()),r.resUrl_=e,r.sinfo_=t,r.options_=s,r.admin_=i,r.refresh_=n,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(r)):this._xoReqs.push(r):this._doSignIn(r),r.promise}_doSignIn(e){this._busy=e,this._rejectOnPersistedPageShow=!1;const t=t=>{const s=e.options_&&e.options_.resource,r=e.resUrl_,i=e.refresh_;let n=!1;-1===this.credentials.indexOf(t)&&(i&&-1!==this.credentials.indexOf(i)?(i.userId=t.userId,i.token=t.token,i.expires=t.expires,i.validity=t.validity,i.ssl=t.ssl,i.creationTime=t.creationTime,n=!0,t=i):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.push(s||r),t.scope=this._isServerRsrc(r)?"server":"portal",t.emitTokenChange();const o=this._soReqs,a={};this._soReqs=[],o.forEach((e=>{if(!this._isIdenticalService(r,e.resUrl_)){const s=this._getSuffix(e.resUrl_);a[s]||(a[s]=!0,t.resources.push(e.resUrl_));}})),e.resolve(t),o.forEach((e=>{this._hasSameServerInstance(this._getServerInstanceRoot(r),e.resUrl_)?e.resolve(t):this._soReqs.push(e);})),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,n||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift());},s=t=>{e.reject(t),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift());},r=(r,n,a,h)=>{var l,c;const u=e.sinfo_,p=!e.options_||!1!==e.options_.prompt,_=u.hasPortal&&this._findOAuthInfo(e.resUrl_);let g,m;if(r)t(new q({userId:r,server:u.server,token:a||null,expires:null!=h?Number(h):null,ssl:!!n}));else if(window!==window.parent&&null!=(l=this._appUrlObj.query)&&l["arcgis-auth-origin"]&&null!=(c=this._appUrlObj.query)&&c["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),e.resUrl_)){var v;window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"]);const r=r$1(window,"message",(e=>{e.source===window.parent&&e.data&&("arcgis:auth:credential"===e.data.type?(r.remove(),e.data.credential.expires<Date.now()?s(new s$5("identity-manager:credential-request-failed","Parent application's token has expired.")):t(new q(e.data.credential))):"arcgis:auth:error"===e.data.type&&(r.remove(),"tokenExpiredError"===e.data.error.name?s(new s$5("identity-manager:credential-request-failed","Parent application's token has expired.")):s(s$5.fromJSON(e.data.error))));}));j(null==(v=e.options_)?void 0:v.signal,(()=>{r.remove();}));}else if(_){let r=_._oAuthCred;if(!r){const e=new s$3(_,P),t=new s$3(_,C);e.isValid()&&t.isValid()?e.expires>t.expires?(r=e,t.destroy()):(r=t,e.destroy()):r=e.isValid()?e:t,_._oAuthCred=r;}if(r.isValid())g=new q({userId:r.userId,server:u.server,token:r.token,expires:r.expires,ssl:r.ssl,_oAuthCred:r}),_.appId!==r.appId&&this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._exchangeToken(g.server,_.appId,g.token).then((e=>{g.token=e,r.token=e,r.save(),t(g);})).catch((()=>{t(g);})):t(g);else if(this._oAuthHash&&this._hasSameServerInstance(_.portalUrl,this._oAuthHash.state.portalUrl)){const e=this._oAuthHash;g=new q({userId:e.username,server:u.server,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:r}),_.userId=g.userId,r.storage=e.persist?P:C,r.token=g.token,r.expires=g.expires,r.userId=g.userId,r.ssl=g.ssl,r.save(),this._oAuthHash=null,t(g);}else {const r=()=>{p?e._pendingDfd=this.oAuthSignIn(e.resUrl_,u,_,e.options_).then(t,s):(m=new s$5("identity-manager:not-authenticated","User is not signed in."),s(m));};this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._getPlatformSelf(u.server,_.appId).then((({portalUrl:e,token:s,username:i})=>{!e||E(e,this._appOrigin,!0)?(g=new q({server:u.server,userId:i,token:s}),t(g)):r();})).catch(r):r();}}else if(p){if(this._checkProtocol(e.resUrl_,u,s,e.admin_)){let r=e.options_;e.admin_&&(r=r||{},r.isAdmin=!0),e._pendingDfd=this.signIn(e.resUrl_,u,r).then(t,s);}}else m=new s$5("identity-manager:not-authenticated","User is not signed in."),s(m);},n=()=>{const r=e.sinfo_,i=r.owningSystemUrl,n=e.options_;let o,a,h,l;if(n&&(o=n.token,a=n.error,h=n.prompt),l=this._findCredential(i,{token:o,resource:e.resUrl_}),!l)for(const e of this.credentials)if(this._isIdProvider(i,e.server)){l=e;break}if(l){const i=this.findCredential(e.resUrl_,l.userId);if(i)t(i);else if(b(r,this._legacyFed)){const e=l.toJSON();e.server=r.server,e.resources=null,t(new q(e));}else {(e._pendingDfd=this.generateToken(this.findServerInfo(l.server),null,{serverUrl:e.resUrl_,token:l.token,signal:e.options_.signal,ssl:l.ssl})).then((s=>{t(new q({userId:l.userId,server:r.server,token:s.token,expires:null!=s.expires?Number(s.expires):null,ssl:!!s.ssl,isAdmin:e.admin_,validity:s.validity}));}),s);}}else {this._busy=null,o&&(e.options_.token=null);(e._pendingDfd=this.getCredential(i.replace(/\/?$/,"/sharing"),{resource:e.resUrl_,owningTenant:r.owningTenant,signal:e.options_.signal,token:o,error:a,prompt:h})).then((()=>{this._enqueue(e.resUrl_,e.sinfo_,e.options_,e,e.admin_);}),(t=>{e.resUrl_=e.sinfo_=e.refresh_=null,e.reject(t);}));}};this._errbackFunc=s;const a=e.sinfo_.owningSystemUrl,h=this._isServerRsrc(e.resUrl_),c=e.sinfo_._restInfoPms;c?c.promise.then((t=>{const s=e.sinfo_;if(s._restInfoPms){s.adminTokenServiceUrl=s._restInfoPms.adminUrl,s._restInfoPms=null,s.tokenServiceUrl=t$2("authInfo.tokenServicesUrl",t)||t$2("authInfo.tokenServiceUrl",t)||t$2("tokenServiceUrl",t),s.shortLivedTokenValidity=t$2("authInfo.shortLivedTokenValidity",t),s.currentVersion=t.currentVersion,s.owningTenant=t.owningTenant;const e=s.owningSystemUrl=t.owningSystemUrl;e&&this._portals.push(e);}h&&s.owningSystemUrl?n():r();}),(()=>{e.sinfo_._restInfoPms=null;const t=new s$5("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");s(t);})):h&&a?n():e.sinfo_._selfReq?e.sinfo_._selfReq.selfDfd.then((t=>{const s={};let r,i,n,o;return t&&(r=t.user&&t.user.username,s.username=r,s.allSSL=t.allSSL,i=t.supportsOAuth,n=t.currentVersion,"multitenant"===t.portalMode&&(o=t.customBaseUrl)),e.sinfo_.webTierAuth=!!r,r&&this.normalizeWebTierAuth?this.generateToken(e.sinfo_,null,{ssl:s.allSSL}).catch((()=>null)).then((e=>(s.portalToken=e&&e.token,s.tokenExpiration=e&&e.expires,s))):!r&&i&&parseFloat(n)>=4.4&&!this._findOAuthInfo(e.resUrl_)?this._generateOAuthInfo({portalUrl:e.sinfo_.server,customBaseUrl:o,owningTenant:e.sinfo_._selfReq.owningTenant}).catch((()=>null)).then((()=>s)):s})).catch((()=>null)).then((t=>{e.sinfo_._selfReq=null,t?r(t.username,t.allSSL,t.portalToken,t.tokenExpiration):r();})):r();}_generateOAuthInfo(e){let t,s,i=e.portalUrl;const n=e.customBaseUrl,o=e.owningTenant,a=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal;if(a){s=window.location.href;let e=s.indexOf("?");e>-1&&(s=s.slice(0,e)),e=s.search(/\/(apps|home)\//),s=e>-1?s.slice(0,e):null;}return a&&s?(this._hasTestedIfAppIsOnPortal=!0,t=E$1(s+"/sharing/rest",{query:{f:"json"}}).then((()=>{this.defaultOAuthInfo=new i$1({appId:"arcgisonline",popupCallbackUrl:s+"/home/oauth-callback.html"});}))):t=Promise.resolve(),t.then((()=>{if(this.defaultOAuthInfo)return i=i.replace(/^http:/i,"https:"),E$1(i+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:o,client_id:this.defaultOAuthInfo.appId,redirect_uri:T(this.defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then((e=>{if(e.data.valid){const t=this.defaultOAuthInfo.clone();e.data.urlKey&&n?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+n:t.portalUrl=i,t.popup=window!==window.top||!(E(i,this._appOrigin)||this._gwDomains.some((e=>e.regex.test(i)&&e.regex.test(this._appOrigin)))),this.oAuthInfos.push(t);}}))}))}_doOAuthSignIn(e,t,s){const r={portalUrl:s.portalUrl};!s.popup&&s.preserveUrlHash&&window.location.hash&&(r.hash=window.location.hash);const n={client_id:s.appId,response_type:"token",state:JSON.stringify(r),expiration:s.expiration,locale:s.locale,redirect_uri:s.popup?T(s.popupCallbackUrl):window.location.href.replace(/#.*$/,"")};s.forceLogin&&(n.force_login=!0),s.forceUserId&&s.userId&&(n.prepopulatedusername=s.userId),!s.popup&&this._doPortalSignIn(e)&&(n.redirectToUserOrgUrl=!0);const h=s.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",l=h+"?"+C$1(n);if(s.popup){const e=window.open(l,"esriJSAPIOAuth",s.popupWindowFeatures);if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval((()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnHashHandle.remove();const e=this._oAuthDfd;if(e){const t=new s$5("identity-manager:user-aborted","ABORTED");e.reject(t);}}}),500),this._oAuthOnHashHandle=r$1(e$3,"arcgis:auth:hash",(e=>{this.setOAuthResponseHash(e.detail);}));else {const e=new s$5("identity-manager:popup-blocked","ABORTED");this._oAuthDfd.reject(e);}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:n,authorizeUrl:h,resourceUrl:e,serverInfo:t,oAuthInfo:s}):window.location.href=l;}}D.prototype.declaredClass="esri.identity.IdentityManagerBase";let q=class extends n$2.EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e&&e._oAuthCred&&(this._oAuthCred=e._oAuthCred);}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now());}refreshToken(){const e=n$3.findServerInfo(this.server),t=e&&e.owningSystemUrl,r=!!t&&"server"===this.scope,i=r&&b(e,n$3._legacyFed),n=e.webTierAuth,o=n&&n$3.normalizeWebTierAuth,a=O[this.server],h=a&&a[this.userId];let l,c=this.resources&&this.resources[0],d=r&&n$3.findServerInfo(t),u={username:this.userId,password:h};if(n&&!o)return;r&&!d&&n$3.serverInfos.some((e=>(n$3._isIdProvider(t,e.server)&&(d=e),!!d)));const p=d&&n$3.findCredential(d.server,this.userId);if(!r||p){if(!i){if(r)l={serverUrl:c,token:p&&p.token,ssl:p&&p.ssl};else if(o)u=null,l={ssl:this.ssl};else {if(!h){let t;return c&&(c=n$3._sanitizeUrl(c),this._enqueued=1,t=n$3._enqueue(c,e,null,null,this.isAdmin,this),t.then((()=>{this._enqueued=0,this.refreshServerTokens();})).catch((()=>{this._enqueued=0;}))),t}this.isAdmin&&(l={isAdmin:!0});}return n$3.generateToken(r?d:e,r?null:u,l).then((e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens();})).catch((()=>{}))}p.refreshToken();}}refreshServerTokens(){"portal"===this.scope&&n$3.credentials.forEach((e=>{const t=n$3.findServerInfo(e.server),r=t&&t.owningSystemUrl;e!==this&&e.userId===this.userId&&r&&"server"===e.scope&&(n$3._hasSameServerInstance(this.server,r)||n$3._isIdProvider(r,this.server))&&(b(t,n$3._legacyFed)?(e.token=this.token,e.expires=this.expires,e.creationTime=this.creationTime,e.validity=this.validity,e.emitTokenChange()):e.refreshToken());}));}emitTokenChange(e){clearTimeout(this._refreshTimer);const t=this.server&&n$3.findServerInfo(this.server),r=t&&t.owningSystemUrl,i=r&&n$3.findServerInfo(r);!1===e||r&&"portal"!==this.scope&&(!i||!i.webTierAuth||n$3.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change");}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const e=n$3.credentials.indexOf(this);e>-1&&n$3.credentials.splice(e,1),this.emitTokenChange(),this.emit("destroy");}toJSON(){const e=y({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources;return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer);const e=6e4*this.tokenRefreshBuffer,t=2**31-1;let s=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now();s<0?s=0:s>t&&(s=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),s>e?s-e:s);}};e([d$2()],q.prototype,"creationTime",void 0),e([d$2()],q.prototype,"expires",void 0),e([d$2()],q.prototype,"isAdmin",void 0),e([d$2()],q.prototype,"oAuthState",void 0),e([d$2()],q.prototype,"resources",void 0),e([d$2()],q.prototype,"scope",void 0),e([d$2()],q.prototype,"server",void 0),e([d$2()],q.prototype,"ssl",void 0),e([d$2()],q.prototype,"token",void 0),e([d$2()],q.prototype,"tokenRefreshBuffer",void 0),e([d$2()],q.prototype,"userId",void 0),e([d$2()],q.prototype,"validity",void 0),q=e([i$2("esri.identity.Credential")],q);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends D{}r.prototype.declaredClass="esri.identity.IdentityManager";const s=new r;o(s);

export default s;
