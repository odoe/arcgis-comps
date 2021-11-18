import { E as b$9, a8 as p$5, M as M$7, v as v$6, b2 as m$5, b3 as m$6, bJ as f$7, I as d$6, bK as z$6, a7 as H$4, k as k$6 } from './unitUtils-c707ba3c.js';
import { t as t$4, l as i$7, cf as f$8, cg as C$6, bE as k$5, r as r$8, _ as e$9, Y as a$5, ao as s$a, aI as O$6, a7 as s$b, H as l$7 } from './messageBundle-8a146a9b.js';
import { c as createCommonjsModule } from './_commonjsHelpers-80e09147.js';
import { p as p$4, o as o$7 } from './number-b04b0f0e.js';
import { y as y$8 } from './Field-fbfaf20d.js';
import { n as nt$1 } from './featureConversionUtils-e2de20bf.js';
import { A as A$5 } from './FeatureSetReader-a29f2645.js';
import { n as n$4 } from './sizeVariableUtils-4d3662df.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$3{constructor(t=[]){this._elements=t;}length(){return this._elements.length}get(t){return this._elements[t]}toArray(){const t=[];for(let e=0;e<this.length();e++)t.push(this.get(e));return t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$2{constructor(t,i){this.definition=null,this.context=null,this.definition=t,this.context=i;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i$6 extends t$3{constructor(t,s,i,e,h,a){super(t),this._lazyPt=[],this._hasZ=!1,this._hasM=!1,this._spRef=s,this._hasZ=i,this._hasM=e,this._cacheId=h,this._partId=a;}get(t){if(void 0===this._lazyPt[t]){const i=this._elements[t];if(void 0===i)return;const e=this._hasZ,h=this._hasM;let a=null;a=e&&!h?new b$9(i[0],i[1],i[2],void 0,this._spRef):h&&!e?new b$9(i[0],i[1],void 0,i[2],this._spRef):e&&h?new b$9(i[0],i[1],i[2],i[3],this._spRef):new b$9(i[0],i[1],this._spRef),a.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+t.toString(),this._lazyPt[t]=a;}return this._lazyPt[t]}equalityTest(t){return t===this||null!==t&&(t instanceof i$6!=!1&&t.getUniqueHash()===this.getUniqueHash())}getUniqueHash(){return this._cacheId.toString()+"-"+this._partId.toString()}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h$a extends t$3{constructor(t,s,h,i,e){super(t),this._lazyPath=[],this._hasZ=!1,this._hasM=!1,this._hasZ=h,this._hasM=i,this._spRef=s,this._cacheId=e;}get(t){if(void 0===this._lazyPath[t]){const h=this._elements[t];if(void 0===h)return;this._lazyPath[t]=new i$6(h,this._spRef,this._hasZ,this._hasM,this._cacheId,t);}return this._lazyPath[t]}equalityTest(t){return t===this||null!==t&&(t instanceof h$a!=!1&&t.getUniqueHash()===this.getUniqueHash())}getUniqueHash(){return this._cacheId.toString()}}

var luxon = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */

var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */

var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */

var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */

var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @private
 */
var n = "numeric",
    s = "short",
    l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23"
};
var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23"
};
var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s
};
var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l
};
var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  var minus = input < 0 ? "-" : "";
  var target = minus ? input * -1 : input;
  var result;

  if (target.toString().length < n) {
    result = ("0".repeat(n) + target).slice(-n);
  } else {
    result = target.toString();
  }

  return "" + minus + result;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)

function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = _extends({
    timeZoneName: offsetFormat
  }, intlOpts);

  var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
    return m.type.toLowerCase() === "timezonename";
  });
  return parsed ? parsed.value : null;
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(Math.abs(offset / 60)),
      minutes = Math.trunc(Math.abs(offset % 60)),
      sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");

    case "techie":
      return "" + sign + padStart(hours, 2) + padStart(minutes, 2);

    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [].concat(monthsNarrow);

    case "short":
      return [].concat(monthsShort);

    case "long":
      return [].concat(monthsLong);

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [].concat(weekdaysNarrow);

    case "short":
      return [].concat(weekdaysShort);

    case "long":
      return [].concat(weekdaysLong);

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [].concat(erasNarrow);

    case "short":
      return [].concat(erasShort);

    case "long":
      return [].concat(erasLong);

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];

    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      singular = fmtValue === 1,
      lilUnits = units[unit],
      fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;) {
    var token = _step.value;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter = /*#__PURE__*/function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = _extends({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
        string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hourCycle: "h12"
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var formatOpts = Formatter.macroTokenToFormatOpts(token);

      if (formatOpts) {
        return _this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: _this.opts.allowZ
          });

        case "ZZZZ":
          // like EST
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(Math.floor(dt.ts / 1000));

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref) {
      var literal = _ref.literal,
          val = _ref.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();

/**
 * @interface
 */

var Zone = /*#__PURE__*/function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  ;

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  ;

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  ;

  _createClass(Zone, [{
    key: "type",
    get:
    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "isUniversal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton$1 = null;
/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */

var SystemZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(SystemZone, _Zone);

  function SystemZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = SystemZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "system";
  }
  /** @override **/
  ;

  _createClass(SystemZone, [{
    key: "type",
    get:
    /** @override **/
    function get() {
      return "system";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    /** @override **/

  }, {
    key: "isUniversal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",
    get:
    /**
     * Get a singleton instance of the local zone
     * @return {SystemZone}
     */
    function get() {
      if (singleton$1 === null) {
        singleton$1 = new SystemZone();
      }

      return singleton$1;
    }
  }]);

  return SystemZone;
}(Zone);

var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  ;

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  } // Etc/GMT+8 -> -480

  /** @ignore */
  ;

  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);

      if (match) {
        return -60 * parseInt(match[1]);
      }
    }

    return null;
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/


  var _proto = IANAZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    var date = new Date(ts);
    if (isNaN(date)) return NaN;

    var dtf = makeDTF(this.name),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        year = _ref2[0],
        month = _ref2[1],
        day = _ref2[2],
        hour = _ref2[3],
        minute = _ref2[4],
        second = _ref2[5];

    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  ;

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "isUniversal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  ;

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/


  var _proto = FixedOffsetZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  ;

  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  ;

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "isUniversal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "utcInstance",
    get:
    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    function get() {
      if (singleton === null) {
        singleton = new FixedOffsetZone(0);
      }

      return singleton;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */

var InvalidZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/


  var _proto = InvalidZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset() {
    return "";
  }
  /** @override **/
  ;

  _proto.offset = function offset() {
    return NaN;
  }
  /** @override **/
  ;

  _proto.equals = function equals() {
    return false;
  }
  /** @override **/
  ;

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "isUniversal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local" || lowered === "system") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = "system",
    defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings = /*#__PURE__*/function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",
    get:
    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * Use the value "system" to reset this value to the system's time zone.
     * @type {string}
     */

  }, {
    key: "defaultZone",
    get:
    /**
     * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     * @type {Zone}
     */
    function get() {
      return normalizeZone(defaultZone, SystemZone.instance);
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(zone) {
      defaultZone = zone;
    }
  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

var _excluded = ["base"];
var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts;
      var cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, _excluded); // exclude `base` from the options


  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += "-u";

    if (outputCalendar) {
      localeStr += "-ca-" + outputCalendar;
    }

    if (numberingSystem) {
      localeStr += "-nu-" + numberingSystem;
    }

    return localeStr;
  } else {
    return localeStr;
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    if (!forceSimple) {
      var intlOpts = {
        useGrouping: false
      };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    var z;

    if (dt.zone.isUniversal) {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      var gmtOffset = -1 * (dt.offset / 60);
      var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
      var isOffsetZoneSupported = IANAZone.isValidZone(offsetZ);

      if (dt.offset !== 0 && isOffsetZoneSupported) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
        // So we have to make do. Two cases:
        // 1. The format options tell us to show the zone. We can't do that, so the best
        // we can do is format the date in UTC.
        // 2. The format options don't tell us to show the zone. Then we can adjust them
        // the time and tell the formatter to show it to us in UTC, so that the time is right
        // and the bad zone doesn't show up.
        z = "UTC";

        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    var intlOpts = _extends({}, this.opts);

    if (z) {
      intlOpts.timeZone = z;
    }

    this.dtf = getCachedDTF(intl, intlOpts);
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    return this.dtf.format(this.dt.toJSDate());
  };

  _proto2.formatToParts = function formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    return this.dtf.resolvedOptions();
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = _extends({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale = /*#__PURE__*/function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale; // the system locale is useful for human readable strings but annoying for parsing/formatting known formats

    var localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    var numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    var outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode(defaultOK) {

    var isActuallyEn = this.isEnglish();
    var hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(_extends({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(_extends({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hourCycle: "h12"
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [_extends({}, mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO time parsing


var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$"); // ISO duration parsing

var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var s = match[0],
      yearStr = match[1],
      monthStr = match[2],
      weekStr = match[3],
      dayStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";
  var negativeSeconds = secondStr && secondStr[0] === "-";

  var maybeNegate = function maybeNegate(num, force) {
    if (force === void 0) {
      force = false;
    }

    return num !== undefined && (force || num && hasNegativePrefix) ? -num : num;
  };

  return [{
    years: maybeNegate(parseInteger(yearStr)),
    months: maybeNegate(parseInteger(monthStr)),
    weeks: maybeNegate(parseInteger(weekStr)),
    days: maybeNegate(parseInteger(dayStr)),
    hours: maybeNegate(parseInteger(hourStr)),
    minutes: maybeNegate(parseInteger(minuteStr)),
    seconds: maybeNegate(parseInteger(secondStr), secondStr === "-0"),
    milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID$2 = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = _extends({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = _extends({
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size


var orderedUnits$1 = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits$1.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone$1(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : _extends({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration.months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject({
      milliseconds: count
    }, opts);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  Duration.fromObject = function fromObject(obj, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy
    });
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  ;

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  ;

  Duration.fromISOTime = function fromISOTime(text, opts) {
    var _parseISOTimeOnly = parseISOTimeOnly(text),
        parsed = _parseISOTimeOnly[0];

    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  ;

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }
  /**
   * @private
   */
  ;

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  ;

  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = _extends({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });

    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject() {
    if (!this.isValid) return {};
    return _extends({}, this.values);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return null;
    var millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;
    opts = _extends({
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended"
    }, opts);
    var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";

    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";

      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }

    var str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = "T" + str;
    }

    return str;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.as("milliseconds");
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration),
        result = {};

    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;) {
      var k = _step.value;

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone$1(this, {
      values: result
    }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  ;

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone$1(this, {
      values: result
    }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  ;

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;

    var mixed = _extends({}, this.values, normalizeObject(values, Duration.normalizeUnit));

    return clone$1(this, {
      values: mixed
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone$1(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  ;

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  ;

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(this, {
      values: vals
    }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  ;

  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;

    for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits$1), _step2; !(_step2 = _iterator2()).done;) {
      var k = _step2.value;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
        // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty


    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone$1(this, {
      values: built
    }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  ;

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
      var k = _Object$keys2[_i2];
      negated[k] = -this.values[k];
    }

    return clone$1(this, {
      values: negated
    }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  ;

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits$1), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;

      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();
function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (typeof durationish === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval#merge}, {@link Interval#xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */


var Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  ;

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  ;

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start, startIsValid;

      try {
        start = DateTime.fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      var end, endIsValid;

      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  ;

  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  ;

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  ;

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  ;

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  ;

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
      return _this.contains(d);
    }).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  ;

  _proto.splitBy = function splitBy(duration) {
    var dur = friendlyDuration(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        idx = 1,
        next;
    var results = [];

    while (s < this.e) {
      var added = this.start.plus(dur.mapUnits(function (x) {
        return x * idx;
      }));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }

    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  ;

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  ;

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  ;

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
      var i = _step.value;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  ;

  _proto.difference = function difference() {
    var _this2 = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
        _ref3$separator = _ref3.separator,
        separator = _ref3$separator === void 0 ? " – " : _ref3$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  ;

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  ;

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info = /*#__PURE__*/function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.now().setZone(zone).set({
      month: 12
    });
    return !zone.isUniversal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  ;

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  ;

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  ;

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$locObj = _ref.locObj,
        locObj = _ref$locObj === void 0 ? null : _ref$locObj,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  ;

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$locObj = _ref2.locObj,
        locObj = _ref2$locObj === void 0 ? null : _ref2$locObj,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  ;

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem,
        _ref3$locObj = _ref3.locObj,
        locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;

    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  ;

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem,
        _ref4$locObj = _ref4.locObj,
        locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;

    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  ;

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  ;

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */
  ;

  Info.features = function features() {
    return {
      relative: hasRelative()
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["quarters", function (a, b) {
    return b.quarter - a.quarter;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(results, opts);

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
};
var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
              min = _numberingSystemsUTF[0],
              max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}

var NBSP = String.fromCharCode(160);
var spaceOrNBSP = "( |" + NBSP + ")";
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s.replace(/\./g, "") // ignore dots that were made optional
  .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
  .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
      two = digitRegex(loc, "{2}"),
      three = digitRegex(loc, "{3}"),
      four = digitRegex(loc, "{4}"),
      six = digitRegex(loc, "{6}"),
      oneOrTwo = digitRegex(loc, "{1,2}"),
      oneToThree = digitRegex(loc, "{1,3}"),
      oneToSix = digitRegex(loc, "{1,6}"),
      oneToNine = digitRegex(loc, "{1,9}"),
      twoToFour = digitRegex(loc, "{2,4}"),
      fourToSix = digitRegex(loc, "{4,6}"),
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(oneToSix);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(fourToSix);

      case "yyyyyy":
        return intUnit(six);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", true, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", false, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "q":
        return intUnit(oneOrTwo);

      case "qq":
        return intUnit(two);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(oneToNine);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

      case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
      value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return _extends({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return _extends({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day;
  var ordinal = computeOrdinal(year, month, day);
  return _extends({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal;

  var _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return _extends({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
      validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
      validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
      validMonth = integerBetween(obj.month, 1, 12),
      validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = integerBetween(minute, 0, 59),
      validSecond = integerBetween(second, 0, 59),
      validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(_extends({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var oPre = inst.o,
      year = inst.c.year + Math.trunc(dur.years),
      month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
      c = _extends({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }),
      millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(parsed, _extends({}, opts, {
      zone: interpretationZone
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }

  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
      includeOffset = _ref.includeOffset,
      _ref$includePrefix = _ref.includePrefix,
      includePrefix = _ref$includePrefix === void 0 ? false : _ref$includePrefix,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "extended" : _ref$format;
  var fmt = format === "basic" ? "HHmm" : "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += format === "basic" ? "ss" : ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += format === "basic" ? "ZZZ" : "ZZ";
  }

  var str = toTechFormat(dt, fmt);

  if (includePrefix) {
    str = "T" + str;
  }

  return str;
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, opts) {
  var zone = normalizeZone(opts.zone, Settings.defaultZone),
      loc = Locale.fromObject(opts),
      tsNow = Settings.now();
  var ts, o; // assume we have the higher-order units

  if (!isUndefined(obj.year)) {
    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;) {
      var u = _step.value;

      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }

    var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

    if (invalid) {
      return DateTime.invalid(invalid);
    }

    var offsetProvis = zone.offset(tsNow);

    var _objToTS = objToTS(obj, offsetProvis, zone);

    ts = _objToTS[0];
    o = _objToTS[1];
  } else {
    ts = tsNow;
  }

  return new DateTime({
    ts: ts,
    zone: zone,
    loc: loc,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;) {
    var unit = _step2.value;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}

function lastOpts(argList) {
  var opts = {},
      args;

  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }

  return [opts, args];
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref2 = [config.old.c, config.old.o];
        c = _ref2[0];
        o = _ref2[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */


  DateTime.now = function now() {
    return new DateTime({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  ;

  DateTime.local = function local() {
    var _lastOpts = lastOpts(arguments),
        opts = _lastOpts[0],
        args = _lastOpts[1],
        year = args[0],
        month = args[1],
        day = args[2],
        hour = args[3],
        minute = args[4],
        second = args[5],
        millisecond = args[6];

    return quickDT({
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond
    }, opts);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  ;

  DateTime.utc = function utc() {
    var _lastOpts2 = lastOpts(arguments),
        opts = _lastOpts2[0],
        args = _lastOpts2[1],
        year = args[0],
        month = args[1],
        day = args[2],
        hour = args[3],
        minute = args[4],
        second = args[5],
        millisecond = args[6];

    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond
    }, opts);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  ;

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  ;

  DateTime.fromObject = function fromObject(obj, opts) {
    if (opts === void 0) {
      opts = {};
    }

    obj = obj || {};
    var zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(opts); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  ;

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  ;

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  ;

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalid = _parseFromTokens[2];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  ;

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  ;

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  ;

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  } // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  ;

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  ;

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOptions = function resolvedLocaleOptions(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  } // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime.setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  ;

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  ;

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime.plus}. You may wish to use {@link DateTime.toLocal} and {@link DateTime.toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime.Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  ;

  _proto.setZone = function setZone(zone, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$keepLocalTime = _ref3.keepLocalTime,
        keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime,
        _ref3$keepCalendarTim = _ref3.keepCalendarTime,
        keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone(this, {
        ts: newTS,
        zone: zone
      });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref4.locale,
        numberingSystem = _ref4.numberingSystem,
        outputCalendar = _ref4.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone(this, {
      loc: loc
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  ;

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime.reconfigure} and {@link DateTime.setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber;

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(_extends({}, gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(_extends({}, gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = _extends({}, this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS4[0],
        o = _objToTS4[1];

    return clone(this, {
      ts: ts,
      o: o
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime.plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  ;

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  ;

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  } // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime.toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  ;

  _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
    if (formatOpts === void 0) {
      formatOpts = DATE_SHORT;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  ;

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toISODate(opts) + "T" + this.toISOTime(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate(_temp3) {
    var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$format = _ref5.format,
        format = _ref5$format === void 0 ? "extended" : _ref5$format;

    var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";

    if (this.year > 9999) {
      fmt = "+" + fmt;
    }

    return toTechFormat(this, fmt);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  ;

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(_temp4) {
    var _ref6 = _temp4 === void 0 ? {} : _temp4,
        _ref6$suppressMillise = _ref6.suppressMilliseconds,
        suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
        _ref6$suppressSeconds = _ref6.suppressSeconds,
        suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
        _ref6$includePrefix = _ref6.includePrefix,
        includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix,
        _ref6$format = _ref6.format,
        format = _ref6$format === void 0 ? "extended" : _ref6$format;

    return toTechTimeFormat(this, {
      suppressSeconds: suppressSeconds,
      suppressMilliseconds: suppressMilliseconds,
      includeOffset: includeOffset,
      includePrefix: includePrefix,
      format: format
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  ;

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  ;

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  ;

  _proto.toSQLDate = function toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQLTime = function toSQLTime(_temp5) {
    var _ref7 = _temp5 === void 0 ? {} : _temp5,
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
        _ref7$includeZone = _ref7.includeZone,
        includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;

    return toTechTimeFormat(this, {
      includeOffset: includeOffset,
      includeZone: includeZone,
      spaceZone: true
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime.toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};

    var base = _extends({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  } // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  ;

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }

    var durOpts = _extends({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime.diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.now(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  ;

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime.setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;
    var inputMs = otherDateTime.valueOf();
    var otherZoneDateTime = this.setZone(otherDateTime.zone, {
      keepLocalTime: true
    });
    return otherZoneDateTime.startOf(unit) <= inputMs && inputMs <= otherZoneDateTime.endOf(unit);
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  ;

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({}, {
      zone: this.zone
    }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    var units = ["years", "months", "days", "hours", "minutes", "seconds"];
    var unit = options.unit;

    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }

    return diffRelative(base, this.plus(padding), _extends({}, options, {
      numeric: "always",
      units: units,
      unit: unit
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  ;

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({}, {
      zone: this.zone
    }), this, _extends({}, options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  ;

  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  ;

  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  } // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  ;

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  ;

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  } // FORMAT PRESETS

  /**
   * {@link DateTime.toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  ;

  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.isUniversal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link DateTime.toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link DateTime.toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function get() {
      return DATE_MED_WITH_WEEKDAY;
    }
    /**
     * {@link DateTime.toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link DateTime.toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link DateTime.toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link DateTime.toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link DateTime.toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link DateTime.toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link DateTime.toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link DateTime.toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link DateTime.toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link DateTime.toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link DateTime.toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link DateTime.toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link DateTime.toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link DateTime.toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link DateTime.toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link DateTime.toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link DateTime.toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link DateTime.toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link DateTime.toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

var VERSION = "2.0.2";

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.Settings = Settings;
exports.SystemZone = SystemZone;
exports.VERSION = VERSION;
exports.Zone = Zone;
//# sourceMappingURL=luxon.js.map
});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class y$7{constructor(e){this.value=e;}}class x$6{constructor(e){this.value=e;}}class S$5{constructor(e){this.fn=e;}}class b$8{constructor(e){this.fn=e;}}const T$4=S$5,N$7=x$6,M$6=y$7,k$4=b$8,R$3={type:"VOID"},j$4={type:"BREAK"},D$8={type:"CONTINUE"};function _$2(e,t,n){return ""===t||null==t||t===n||t===n?e:e=e.split(t).join(n)}function C$5(t){return t instanceof S$5||t instanceof t$2||t instanceof b$8}function w$4(e){return !!Z$4(e)||(!!Y$2(e)||(!!E$6(e)||(!!v$5(e)||(null===e||(e===R$3||"number"==typeof e)))))}function O$5(e,t){return void 0===e?t:e}function Z$4(e){return "string"==typeof e||e instanceof String}function v$5(e){return "boolean"==typeof e}function Y$2(e){return "number"==typeof e}function F$5(e){return "number"==typeof e&&isFinite(e)&&Math.floor(e)===e}function I$7(e){return e instanceof Array}function A$4(e){return !0===(e&&e.declaredRootClass&&"esri.arcade.featureset.support.FeatureSet"===e.declaredRootClass)}function L$4(e){return !0===(e&&e.declaredRootClass&&"esri.arcade.featureSetCollection"===e.declaredRootClass)}function J$3(e){return e instanceof t$3}function E$6(e){return e instanceof Date}function z$5(e,t,n){if(e.length<t||e.length>n)throw new Error("Function called with wrong number of Parameters")}function P$7(e){return e<0?-Math.round(-e):Math.round(e)}function G$5(){let e=(new Date).getTime();return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){const n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))}function V$3(e,t){return !1===isNaN(e)?null==t||""===t?e.toString():(t=_$2(t,"‰",""),t=_$2(t,"¤",""),o$7(e,{pattern:t})):e.toString()}function H$3(e,t){const n=luxon.DateTime.fromJSDate(e);return null==t||""===t?n.toISO({suppressMilliseconds:!0}):n.toFormat(U$3(t),{locale:i$7(),numberingSystem:"latn"})}function U$3(e){e=e.replace(/LTS|LT|LL?L?L?|l{1,4}/g,"[$&]");let t="";const n=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const r of e.match(n))switch(r){case"D":t+="d";break;case"DD":t+="dd";break;case"DDD":t+="o";break;case"d":t+="c";break;case"ddd":t+="ccc";break;case"dddd":t+="cccc";break;case"M":t+="L";break;case"MM":t+="LL";break;case"MMM":t+="LLL";break;case"MMMM":t+="LLLL";break;case"YY":t+="yy";break;case"Y":case"YYYY":t+="yyyy";break;case"Q":t+="q";break;case"Z":t+="ZZ";break;case"ZZ":t+="ZZZ";break;case"S":t+="'S'";break;case"SS":t+="'SS'";break;case"SSS":t+="u";break;case"A":case"a":t+="a";break;case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":case"X":case"x":t+=r;break;default:r.length>=2&&"["===r.slice(0,1)&&"]"===r.slice(-1)?t+=`'${r.slice(1,-1)}'`:t+=`'${r}'`;}return t}function q$4(e,t,n){switch(n){case">":return e>t;case"<":return e<t;case">=":return e>=t;case"<=":return e<=t}return !1}function B$4(e,t,n){if(null===e){if(null===t||t===R$3)return q$4(null,null,n);if(Y$2(t))return q$4(0,t,n);if(Z$4(t))return q$4(0,ee$2(t),n);if(v$5(t))return q$4(0,ee$2(t),n);if(E$6(t))return q$4(0,t.getTime(),n)}if(e===R$3){if(null===t||t===R$3)return q$4(null,null,n);if(Y$2(t))return q$4(0,t,n);if(Z$4(t))return q$4(0,ee$2(t),n);if(v$5(t))return q$4(0,ee$2(t),n);if(E$6(t))return q$4(0,t.getTime(),n)}else if(Y$2(e)){if(Y$2(t))return q$4(e,t,n);if(v$5(t))return q$4(e,ee$2(t),n);if(null===t||t===R$3)return q$4(e,0,n);if(Z$4(t))return q$4(e,ee$2(t),n);if(E$6(t))return q$4(e,t.getTime(),n)}else if(Z$4(e)){if(Z$4(t))return q$4($$4(e),$$4(t),n);if(E$6(t))return q$4(ee$2(e),t.getTime(),n);if(Y$2(t))return q$4(ee$2(e),t,n);if(null===t||t===R$3)return q$4(ee$2(e),0,n);if(v$5(t))return q$4(ee$2(e),ee$2(t),n)}else if(E$6(e)){if(E$6(t))return q$4(e,t,n);if(null===t||t===R$3)return q$4(e.getTime(),0,n);if(Y$2(t))return q$4(e.getTime(),t,n);if(v$5(t))return q$4(e.getTime(),ee$2(t),n);if(Z$4(t))return q$4(e.getTime(),ee$2(t),n)}else if(v$5(e)){if(v$5(t))return q$4(e,t,n);if(Y$2(t))return q$4(ee$2(e),ee$2(t),n);if(E$6(t))return q$4(ee$2(e),t.getTime(),n);if(null===t||t===R$3)return q$4(ee$2(e),0,n);if(Z$4(t))return q$4(ee$2(e),ee$2(t),n)}return !!W$2(e,t)&&("<="===n||">="===n)}function W$2(e,t){if(e===t)return !0;if(null===e&&t===R$3||null===t&&e===R$3)return !0;if(E$6(e)&&E$6(t))return e.getTime()===t.getTime();if(e instanceof h$a)return e.equalityTest(t);if(e instanceof i$6)return e.equalityTest(t);if(e instanceof b$9&&t instanceof b$9){const n=e.cache._arcadeCacheId,r=t.cache._arcadeCacheId;if(null!=n)return n===r}if(void 0!==e&&void 0!==t&&null!==e&&null!==t&&"object"==typeof e&&"object"==typeof t){if(e._arcadeCacheId===t._arcadeCacheId&&void 0!==e._arcadeCacheId&&null!==e._arcadeCacheId)return !0;if(e._underlyingGraphic===t._underlyingGraphic&&void 0!==e._underlyingGraphic&&null!==e._underlyingGraphic)return !0}return !1}function $$4(e,n){if(Z$4(e))return e;if(null===e)return "";if(Y$2(e))return V$3(e,n);if(v$5(e))return e.toString();if(E$6(e))return H$3(e,n);if(e instanceof p$5)return JSON.stringify(e.toJSON());if(I$7(e)){const t=[];for(let n=0;n<e.length;n++)t[n]=K$2(e[n]);return "["+t.join(",")+"]"}if(e instanceof t$3){const t=[];for(let n=0;n<e.length();n++)t[n]=K$2(e.get(n));return "["+t.join(",")+"]"}return null!==e&&"object"==typeof e&&void 0!==e.castToText?e.castToText():C$5(e)?"object, Function":""}function Q$3(e){const n=[];if(!1===I$7(e))return null;if(e instanceof t$3){for(let t=0;t<e.length();t++)n[t]=ee$2(e.get(t));return n}for(let t=0;t<e.length;t++)n[t]=ee$2(e[t]);return n}function X$2(e,n){if(Z$4(e))return e;if(null===e)return "";if(Y$2(e))return V$3(e,n);if(v$5(e))return e.toString();if(E$6(e))return H$3(e,n);if(e instanceof p$5)return e instanceof M$7?'{"xmin":'+e.xmin.toString()+',"ymin":'+e.ymin.toString()+","+(e.hasZ?'"zmin":'+e.zmin.toString()+",":"")+(e.hasM?'"mmin":'+e.mmin.toString()+",":"")+'"xmax":'+e.xmax.toString()+',"ymax":'+e.ymax.toString()+","+(e.hasZ?'"zmax":'+e.zmax.toString()+",":"")+(e.hasM?'"mmax":'+e.mmax.toString()+",":"")+'"spatialReference":'+ce$3(e.spatialReference)+"}":ce$3(e.toJSON(),((e,t)=>e.key===t.key?0:"spatialReference"===e.key?1:"spatialReference"===t.key||e.key<t.key?-1:e.key>t.key?1:0));if(I$7(e)){const t=[];for(let n=0;n<e.length;n++)t[n]=K$2(e[n]);return "["+t.join(",")+"]"}if(e instanceof t$3){const t=[];for(let n=0;n<e.length();n++)t[n]=K$2(e.get(n));return "["+t.join(",")+"]"}return null!==e&&"object"==typeof e&&void 0!==e.castToText?e.castToText():C$5(e)?"object, Function":""}function K$2(e){if(null===e)return "null";if(v$5(e)||Y$2(e)||Z$4(e))return JSON.stringify(e);if(e instanceof p$5)return X$2(e);if(e instanceof t$3)return X$2(e);if(e instanceof Array)return X$2(e);if(e instanceof Date)return JSON.stringify(H$3(e,""));if(null!==e&&"object"==typeof e){if(void 0!==e.castToText)return e.castToText()}else if(e===R$3)return "null";return "null"}function ee$2(e,t){return Y$2(e)?e:null===e||""===e?0:E$6(e)?NaN:v$5(e)?e?1:0:I$7(e)||""===e||void 0===e?NaN:void 0!==t&&Z$4(e)?(t=_$2(t,"‰",""),t=_$2(t,"¤",""),p$4(e,{pattern:t})):e===R$3?0:Number(e)}function te$2(e){if(E$6(e))return e;if(Z$4(e)){const t=re$2(e);if(t)return t.toJSDate()}return null}function ne$2(e){return E$6(e)?luxon.DateTime.fromJSDate(e):Z$4(e)?re$2(e):null}function re$2(e){const t=/ (\d\d)/;let n=luxon.DateTime.fromISO(e);return n.isValid||t.test(e)&&(e=e.replace(t,"T$1"),n=luxon.DateTime.fromISO(e),n.isValid)?n:null}function ie$3(e){return v$5(e)?e:Z$4(e)?"true"===(e=e.toLowerCase()):!!Y$2(e)&&(0!==e&&!isNaN(e))}function ae$3(e,t){return t$4(e)?null:(null!==e.spatialReference&&void 0!==e.spatialReference||(e.spatialReference=t),e)}function oe$2(e){if(null===e)return null;if(e instanceof b$9)return "NaN"===e.x||null===e.x||isNaN(e.x)?null:e;if(e instanceof v$6){if(0===e.rings.length)return null;for(const t of e.rings)if(t.length>0)return e;return null}if(e instanceof m$5){if(0===e.paths.length)return null;for(const t of e.paths)if(t.length>0)return e;return null}return e instanceof m$6?0===e.points.length?null:e:e instanceof M$7?"NaN"===e.xmin||null===e.xmin||isNaN(e.xmin)?null:e:null}function se$3(e,t){if(!e)return t;if(!e.domain)return t;let n=null;if("string"===e.field.type||"esriFieldTypeString"===e.field.type)t=$$4(t);else {if(null==t)return null;if(""===t)return t;t=ee$2(t);}for(let r=0;r<e.domain.codedValues.length;r++){const i=e.domain.codedValues[r];i.code===t&&(n=i);}return null===n?t:n.name}function ue$2(e,t){if(!e)return t;if(!e.domain)return t;let n=null;t=$$4(t);for(let r=0;r<e.domain.codedValues.length;r++){const i=e.domain.codedValues[r];i.name===t&&(n=i);}return null===n?t:n.code}function le$2(e,t,n=null,r){if(!t)return null;if(!t.fields)return null;let i,a,o=null;for(let s=0;s<t.fields.length;s++){const n=t.fields[s];n.name.toLowerCase()===e.toString().toLowerCase()&&(o=n);}if(null===o)throw new Error("Field not found");return r||(r=n&&t.typeIdField&&n._field(t.typeIdField)),null!=r&&t.types.some((function(e){return e.id===r&&(i=e.domains&&e.domains[o.name],i&&"inherited"===i.type&&(i=fe$2(o.name,t),a=!0),!0)})),a||i||(i=fe$2(e,t)),{field:o,domain:i}}function fe$2(e,t){let n;return t.fields.some((function(t){return t.name.toLowerCase()===e.toLowerCase()&&(n=t.domain),!!n})),n}function ce$3(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t});const n="boolean"==typeof t.cycles&&t.cycles,r=t.cmp&&(i=t.cmp,function(e){return function(t,n){const r={key:t,value:e[t]},a={key:n,value:e[n]};return i(r,a)}});var i;const a=[];return function e(t){if(t&&t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),void 0===t)return;if("number"==typeof t)return isFinite(t)?""+t:"null";if("object"!=typeof t)return JSON.stringify(t);let i,o;if(Array.isArray(t)){for(o="[",i=0;i<t.length;i++)i&&(o+=","),o+=e(t[i])||"null";return o+"]"}if(null===t)return "null";if(-1!==a.indexOf(t)){if(n)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const s=a.push(t)-1,u=Object.keys(t).sort(r&&r(t));for(o="",i=0;i<u.length;i++){const n=u[i],r=e(t[n]);r&&(o&&(o+=","),o+=JSON.stringify(n)+":"+r);}return a.splice(s,1),"{"+o+"}"}(e)}function me$2(e){if(null===e)return null;const t=[];for(const n of e)n&&(n.declaredClass&&"esri.arcade.Feature"===n.declaredClass||"FeatureSetReader"===n.type)?t.push(n.geometry()):t.push(n);return t}function ge$2(e,t){if(!(t instanceof b$9))throw new Error("Invalid Argument");e.push(t.hasZ?t.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y]);}function de$2(e,t){if(I$7(e)||J$3(e)){let n=!1,i=!1,a=[],o=t;if(I$7(e)){for(const t of e)ge$2(a,t);a.length>0&&(o=e[0].spatialReference,n=e[0].hasZ,i=e[0].hasM);}else if(e instanceof i$6)a=e._elements,a.length>0&&(n=e._hasZ,i=e._hasM,o=e.get(0).spatialReference);else {if(!J$3(e))throw new Error("Invalid Argument");for(const t of e.toArray())ge$2(a,t);a.length>0&&(o=e.get(0).spatialReference,n=!0===e.get(0).hasZ,i=!0===e.get(0).hasM);}if(0===a.length)return null;return !1===f$7(a,i,n)&&(a=a.slice(0).reverse()),new v$6({rings:[a],spatialReference:o,hasZ:n,hasM:i})}return e}function he$2(e,t){if(I$7(e)||J$3(e)){let n=!1,i=!1,a=[],o=t;if(I$7(e)){for(const t of e)ge$2(a,t);a.length>0&&(o=e[0].spatialReference,n=!0===e[0].hasZ,i=!0===e[0].hasM);}else if(e instanceof i$6)a=e._elements,a.length>0&&(n=e._hasZ,i=e._hasM,o=e.get(0).spatialReference);else if(J$3(e)){for(const t of e.toArray())ge$2(a,t);a.length>0&&(o=e.get(0).spatialReference,n=!0===e.get(0).hasZ,i=!0===e.get(0).hasM);}return 0===a.length?null:new m$5({paths:[a],spatialReference:o,hasZ:n,hasM:i})}return e}function pe$2(e,t){if(I$7(e)||J$3(e)){let n=!1,i=!1,a=[],o=t;if(I$7(e)){for(const t of e)ge$2(a,t);a.length>0&&(o=e[0].spatialReference,n=!0===e[0].hasZ,i=!0===e[0].hasM);}else if(e instanceof i$6)a=e._elements,a.length>0&&(n=e._hasZ,i=e._hasM,o=e.get(0).spatialReference);else if(J$3(e)){for(const t of e.toArray())ge$2(a,t);a.length>0&&(o=e.get(0).spatialReference,n=!0===e.get(0).hasZ,i=!0===e.get(0).hasM);}return 0===a.length?null:new m$6({points:a,spatialReference:o,hasZ:n,hasM:i})}return e}function ye$2(e,n=!1){const r=[];if(null===e)return r;if(!0===I$7(e)){for(let t=0;t<e.length;t++){const i=$$4(e[t]);""===i&&!0!==n||r.push(i);}return r}if(e instanceof t$3){for(let t=0;t<e.length();t++){const i=$$4(e.get(t));""===i&&!0!==n||r.push(i);}return r}if(w$4(e)){const t=$$4(e);return ""===t&&!0!==n||r.push(t),r}return []}let xe$2=0;function Se$2(e){return xe$2++,xe$2%100==0?(xe$2=0,f$8((t=>{setTimeout((()=>{t(e);}),0);}))):e}function be$2(e,t,n){switch(n){case"&":return e&t;case"|":return e|t;case"^":return e^t;case"<<":return e<<t;case">>":return e>>t;case">>>":return e>>>t}}const Te$2=Object.freeze({__proto__:null,ReturnResultE:y$7,ImplicitResultE:x$6,NativeFunctionE:S$5,SizzleFunctionE:b$8,NativeFunction:T$4,ImplicitResult:N$7,ReturnResult:M$6,SizzleFunction:k$4,voidOperation:R$3,breakResult:j$4,continueResult:D$8,multiReplace:_$2,isFunctionParameter:C$5,isSimpleType:w$4,defaultUndefined:O$5,isString:Z$4,isBoolean:v$5,isNumber:Y$2,isInteger:F$5,isArray:I$7,isFeatureSet:A$4,isFeatureSetCollection:L$4,isImmutableArray:J$3,isDate:E$6,pcCheck:z$5,absRound:P$7,generateUUID:G$5,formatNumber:V$3,formatDate:H$3,standardiseDateFormat:U$3,greaterThanLessThan:B$4,equalityTest:W$2,toString:$$4,toNumberArray:Q$3,toStringExplicit:X$2,toNumber:ee$2,toDate:te$2,toDateTime:ne$2,toBoolean:ie$3,fixSpatialReference:ae$3,fixNullGeometry:oe$2,getDomainValue:se$3,getDomainCode:ue$2,getDomain:le$2,stableStringify:ce$3,autoCastFeatureToGeometry:me$2,autoCastArrayOfPointsToPolygon:de$2,autoCastArrayOfPointsToPolyline:he$2,autoCastArrayOfPointsToMultiPoint:pe$2,toStringArray:ye$2,tick:Se$2,binaryOperator:be$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function b$7(t,e=!1){if(null==t)return null;if(Y$2(t))return ee$2(t);if(v$5(t))return ie$3(t);if(Z$4(t))return $$4(t);if(E$6(t))return te$2(t);if(I$7(t)){const i=[];for(const s of t)i.push(b$7(s,e));return i}const l=new h$9;l.immutable=!1;for(const i of Object.keys(t)){const s=t[i];void 0!==s&&l.setField(i,b$7(s,e));}return l.immutable=e,l}class h$9{constructor(t){this.declaredClass="esri.arcade.Dictionary",this.attributes=null,this.plain=!1,this.immutable=!0,this.attributes=t instanceof h$9?t.attributes:null==t?{}:t;}field(t){const i=t.toLowerCase(),s=this.attributes[t];if(void 0!==s)return s;for(const r in this.attributes)if(r.toLowerCase()===i)return this.attributes[r];throw new Error("Field not Found : "+t)}setField(t,i){if(this.immutable)throw new Error("Dictionary is Immutable");const s=t.toLowerCase();if(void 0===this.attributes[t]){for(const t in this.attributes)if(t.toLowerCase()===s)return void(this.attributes[t]=i);this.attributes[t]=i;}else this.attributes[t]=i;}hasField(t){const i=t.toLowerCase();if(void 0!==this.attributes[t])return !0;for(const s in this.attributes)if(s.toLowerCase()===i)return !0;return !1}keys(){let t=[];for(const i in this.attributes)t.push(i);return t=t.sort(),t}castToText(){let n="";for(const o in this.attributes){""!==n&&(n+=",");const a=this.attributes[o];null==a?n+=JSON.stringify(o)+":null":v$5(a)||Y$2(a)||Z$4(a)?n+=JSON.stringify(o)+":"+JSON.stringify(a):a instanceof p$5||a instanceof t$3||a instanceof Array?n+=JSON.stringify(o)+":"+X$2(a):a instanceof Date?n+=JSON.stringify(o)+":"+JSON.stringify(a):null!==a&&"object"==typeof a&&void 0!==a.castToText&&(n+=JSON.stringify(o)+":"+a.castToText());}return "{"+n+"}"}static convertObjectToArcadeDictionary(t,i=!0){const s=new h$9;s.immutable=!1;for(const r in t){const i=t[r];void 0!==i&&s.setField(r.toString(),b$7(i));}return s.immutable=i,s}static convertJsonToArcade(t,i=!1){return b$7(t,i)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$9 extends h$9{constructor(t){super(),this.immutable=!1,this.setField("url",t),this.immutable=!0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e$8 extends h$9{constructor(t,e,i,s,l,a){super(),this.attachmentUrl=l,this.immutable=!1,this.setField("id",t),this.setField("name",e),this.setField("contenttype",i),this.setField("size",s),this.setField("exifinfo",a),this.immutable=!0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var o$6,l$6;function s$8(e){return y$8.fromJSON(e.toJSON())}function y$6(e){return e.toJSON()}function u$5(e){return "string"==typeof e||e instanceof String}function c$5(e){return "number"==typeof e}function m$4(e){return e instanceof Date}function f$6(e,r){return e===r||!(!m$4(e)||!m$4(r))&&e.getTime()===r.getTime()}function g$7(e){if(void 0===e)return null;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":return 109404;case"miles":case"mile":return 109413;case"kilometers":case"kilometer":case"km":return 109414}return null}function F$4(e){if(null===e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new M$7({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function G$4(e){if(void 0===e)return null;if("number"==typeof e)return e;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":return 9001;case"miles":case"mile":return 9035;case"kilometers":case"kilometer":case"km":return 9036}return null}!function(e){e[e.Standardised=0]="Standardised",e[e.StandardisedNoInterval=1]="StandardisedNoInterval",e[e.SqlServer=2]="SqlServer",e[e.Oracle=3]="Oracle",e[e.Postgres=4]="Postgres",e[e.PGDB=5]="PGDB",e[e.FILEGDB=6]="FILEGDB",e[e.NotEvaluated=7]="NotEvaluated";}(o$6||(o$6={})),function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown";}(l$6||(l$6={}));const S$4=1e3;const I$6={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"},b$6={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},D$7={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"eesriFieldTypeXML",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"eesriFieldTypeXML"};function O$4(i,n){return f$8(((e,o)=>{const l=k$5(!0);i.reduce(((e,r,i,o)=>e.then((e=>{try{return n(e,r,i,o)}catch(l){return C$6(l)}}),(e=>C$6(e)))),l).then(e,o);}))}function N$6(e){return void 0===e?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]}function E$5(e,r){r||(r={}),"function"==typeof r&&(r={cmp:r});const t="boolean"==typeof r.cycles&&r.cycles,i=r.cmp&&(n=r.cmp,function(e){return function(r,t){const i={key:r,value:e[r]},o={key:t,value:e[t]};return n(i,o)}});var n;const o=[];return function e(r){if(r&&r.toJSON&&"function"==typeof r.toJSON&&(r=r.toJSON()),void 0===r)return;if("number"==typeof r)return isFinite(r)?""+r:"null";if("object"!=typeof r)return JSON.stringify(r);let n,l;if(Array.isArray(r)){for(l="[",n=0;n<r.length;n++)n&&(l+=","),l+=e(r[n])||"null";return l+"]"}if(null===r)return "null";if(-1!==o.indexOf(r)){if(t)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const s=o.push(r)-1,y=Object.keys(r).sort(i&&i(r));for(l="",n=0;n<y.length;n++){const t=y[n],i=e(r[t]);i&&(l&&(l+=","),l+=JSON.stringify(t)+":"+i);}return o.splice(s,1),"{"+l+"}"}(e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class b$5{constructor(){this.declaredClass="esri.arcade.Feature",this._optimizedGeomDefinition=null,this._geometry=null,this.attributes=null,this._layer=null,this._datesfixed=!0,this.immutable=!0,this._datefields=null,this.immutable=!0;}static createFromGraphic(t){const e=new b$5;return e._geometry=r$8(t.geometry)?t.geometry:null,void 0===t.attributes||null===t.attributes?e.attributes={}:e.attributes=t.attributes,t._sourceLayer?(e._layer=t._sourceLayer,e._datesfixed=!1):t._layer?(e._layer=t._layer,e._datesfixed=!1):t.layer&&"fields"in t.layer?(e._layer=t.layer,e._datesfixed=!1):t.sourceLayer&&"fields"in t.sourceLayer&&(e._layer=t.sourceLayer,e._datesfixed=!1),e}static createFromArcadeFeature(t){const e=new b$5;return e._datesfixed=t._datesfixed,e.attributes=t.attributes,e._geometry=t._geometry,e._optimizedGeomDefinition=t._optimizedGeomDefinition,t._layer&&(e._layer=t._layer),e}static createFromOptimisedFeature(t,e,i){const r=new b$5;return r._geometry=t.geometry?{geometry:t.geometry}:null,r._optimizedGeomDefinition=i,r.attributes=t.attributes||{},r._layer=e,r._datesfixed=!1,r}static createFromArcadeDictionary(e){const i=new b$5;return i.attributes=e.field("attributes"),null!==i.attributes&&i.attributes instanceof h$9?(i.attributes=i.attributes.attributes,null===i.attributes&&(i.attributes={})):i.attributes={},i._geometry=e.field("geometry"),null!==i._geometry&&(i._geometry instanceof h$9?i._geometry=b$5.parseGeometryFromDictionary(i._geometry):i._geometry instanceof p$5||(i._geometry=null)),i}static createFromGraphicLikeObject(t,e,i=null){const r=new b$5;return null===e&&(e={}),r.attributes=e,r._geometry=r$8(t)?t:null,r._layer=i,r._layer&&(r._datesfixed=!1),r._adapter=null,r}repurposeFromGraphicLikeObject(t,e,i=null){null===e&&(e={}),this.attributes=e,this._geometry=t||null,this._layer=i,this._layer?this._datesfixed=!1:this._datesfixed=!0;}repurposeFromAdapter(t,e=null){this._adapter=t,this._layer=e;}castToText(){if(this._adapter)return this._adapter.castToText();let t="";!1===this._datesfixed&&this._fixDates();for(const o in this.attributes){""!==t&&(t+=",");const n=this.attributes[o];null==n?t+=JSON.stringify(o)+":null":v$5(n)||Y$2(n)||Z$4(n)?t+=JSON.stringify(o)+":"+JSON.stringify(n):n instanceof p$5||n instanceof t$3||n instanceof Array?t+=JSON.stringify(o)+":"+X$2(n):n instanceof Date?t+=JSON.stringify(o)+":"+JSON.stringify(n):null!==n&&"object"==typeof n&&void 0!==n.castToText&&(t+=JSON.stringify(o)+":"+n.castToText());}return '{"geometry":'+(null===this.geometry()?"null":X$2(this.geometry()))+',"attributes":{'+t+"}}"}_fixDates(){if(null!==this._datefields)return this._datefields.length>0&&this._fixDateFields(this._datefields),void(this._datesfixed=!0);const t=[];for(let e=0;e<this._layer.fields.length;e++){const i=this._layer.fields[e];"date"!==i.type&&"esriFieldTypeDate"!==i.type||t.push(i.name);}this._datefields=t,t.length>0&&this._fixDateFields(t),this._datesfixed=!0;}_fixDateFields(t){this.attributes={...this.attributes};for(let e=0;e<t.length;e++){let i=this.attributes[t[e]];if(null===i);else if(void 0===i){for(const r in this.attributes)if(r.toLowerCase()===t[e].toLowerCase()){i=this.attributes[r],null!==i&&(i instanceof Date||(this.attributes[r]=new Date(i)));break}}else i instanceof Date||(this.attributes[t[e]]=new Date(i));}}geometry(){return this._adapter?this._adapter.geometry():(null===this._geometry||this._geometry instanceof p$5||(this._optimizedGeomDefinition?(this._geometry=e$9(d$6(nt$1(this._geometry,this._optimizedGeomDefinition.geometryType,this._optimizedGeomDefinition.hasZ,this._optimizedGeomDefinition.hasM))),this._geometry.spatialReference=this._optimizedGeomDefinition.spatialReference):this._geometry=e$9(d$6(this._geometry))),this._geometry)}field(t){if(this._adapter)return this._adapter.field(t);!1===this._datesfixed&&this._fixDates();const e=this.attributes[t];if(void 0!==e)return e;const i=t.toLowerCase();for(const r in this.attributes)if(r.toLowerCase()===i)return this.attributes[r];if(this._hasFieldDefinition(i))return null;throw new Error("Field not Found : "+t)}_hasFieldDefinition(t){if(null===this._layer)return !1;for(let e=0;e<this._layer.fields.length;e++){if(this._layer.fields[e].name.toLowerCase()===t)return !0}return !1}_field(t){var e;if(this._adapter)return null!=(e=this._adapter.field(t))?e:null;!1===this._datesfixed&&this._fixDates();const i=t.toLowerCase(),r=this.attributes[t];if(void 0!==r)return r;for(const s in this.attributes)if(s.toLowerCase()===i)return this.attributes[s];return null}setField(t,e){if(this.immutable)throw new Error("Feature is Immutable");if(!1===w$4(e))throw new Error("Illegal Value Assignment to Feature");if(this._adapter)return void this._adapter.setField(t,e);const i=t.toLowerCase();if(void 0===this.attributes[t]){for(const t in this.attributes)if(t.toLowerCase()===i)return void(this.attributes[t]=e);this.attributes[t]=e;}else this.attributes[t]=e;}hasField(t){if(this._adapter)return this._adapter.hasField(t);const e=t.toLowerCase();if(void 0!==this.attributes[t])return !0;for(const i in this.attributes)if(i.toLowerCase()===e)return !0;return !!this._hasFieldDefinition(e)}keys(){if(this._adapter)return this._adapter.keys();let t=[];const e={};for(const i in this.attributes)t.push(i),e[i.toLowerCase()]=1;if(null!==this._layer)for(let i=0;i<this._layer.fields.length;i++){const r=this._layer.fields[i];1!==e[r.name.toLowerCase()]&&t.push(r.name);}return t=t.sort(),t}static parseGeometryFromDictionary(t){const e=b$5.convertDictionaryToJson(t,!0);return void 0!==e.hasm&&(e.hasM=e.hasm,delete e.hasm),void 0!==e.hasz&&(e.hasZ=e.hasz,delete e.hasz),void 0!==e.spatialreference&&(e.spatialReference=e.spatialreference,delete e.spatialreference),void 0!==e.rings&&(e.rings=this.fixPathArrays(e.rings,!0===e.hasZ,!0===e.hasZ)),void 0!==e.paths&&(e.paths=this.fixPathArrays(e.paths,!0===e.hasZ,!0===e.hasM)),void 0!==e.points&&(e.points=this.fixPointArrays(e.points,!0===e.hasZ,!0===e.hasM)),d$6(e)}static fixPathArrays(t,i,r){const s=[];if(t instanceof Array)for(let e=0;e<t.length;e++)s.push(this.fixPointArrays(t[e],i,r));else if(t instanceof t$3)for(let e=0;e<t.length();e++)s.push(this.fixPointArrays(t.get(e),i,r));return s}static fixPointArrays(t,i,r){const s=[];if(t instanceof Array)for(let a=0;a<t.length;a++){const o=t[a];o instanceof b$9?i&&r?s.push([o.x,o.y,o.z,o.m]):i?s.push([o.x,o.y,o.z]):r?s.push([o.x,o.y,o.m]):s.push([o.x,o.y]):o instanceof t$3?s.push(o.toArray()):s.push(o);}else if(t instanceof t$3)for(let a=0;a<t.length();a++){const o=t.get(a);o instanceof b$9?i&&r?s.push([o.x,o.y,o.z,o.m]):i?s.push([o.x,o.y,o.z]):r?s.push([o.x,o.y,o.m]):s.push([o.x,o.y]):o instanceof t$3?s.push(o.toArray()):s.push(o);}return s}static convertDictionaryToJson(e,i=!1){const r={};for(const s in e.attributes){let a=e.attributes[s];a instanceof h$9&&(a=b$5.convertDictionaryToJson(a)),i?r[s.toLowerCase()]=a:r[s]=a;}return r}static parseAttributesFromDictionary(t){const e={};for(const i in t.attributes){const r=t.attributes[i];if(!w$4(r))throw new Error("Illegal Argument");e[i]=r;}return e}static fromJson(t){let e=null;null!==t.geometry&&void 0!==t.geometry&&(e=d$6(t.geometry));const a={};if(null!==t.attributes&&void 0!==t.attributes)for(const o in t.attributes){const e=t.attributes[o];if(null===e)a[o]=e;else {if(!(Z$4(e)||Y$2(e)||v$5(e)||E$6(e)))throw new Error("Illegal Argument");a[o]=e;}}return b$5.createFromGraphicLikeObject(e,a,null)}fullDomain(t,e){if(null===this._layer)return null;if(!this._layer.fields)return null;return le$2(t,this._layer,this,e)}subtypes(){return null===this._layer?null:this._layer.fields&&this._layer.typeIdField?{subtypeField:this._layer.typeIdField,subtypes:this._layer.types?this._layer.types.map((t=>({name:t.name,code:t.id}))):[]}:null}domainValueLookup(t,e,i){if(null===this._layer)return null;if(!this._layer.fields)return null;const r=le$2(t,this._layer,this,i);if(void 0===e)try{e=this.field(t);}catch(s){return null}return se$3(r,e)}gdbVersion(){if(null===this._layer)return "";const t=this._layer.gdbVersion;return void 0===t?"":""===t&&this._layer.capabilities&&this._layer.capabilities.isVersioned?"SDE.DEFAULT":t}domainCodeLookup(t,e,i){if(null===this._layer)return null;if(!this._layer.fields)return null;if(void 0===e){try{e=this.field(t);}catch(s){return null}return e}const r=le$2(t,this._layer,this,i);return ue$2(r,e)}schema(){if(null===this._layer)return null;if(!this._layer.fields)return null;const t=[];for(const e of this._layer.fields)t.push(y$6(e));return {objectIdField:this._layer.objectIdField,globalIdField:this._layer.globalIdField,geometryType:void 0===b$6[this._layer.geometryType]?"":b$6[this._layer.geometryType],fields:t}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$7={concatenate:{min:"0",max:"*"},expects:{min:"1",max:"*"},getfeatureset:{min:"1",max:"2"},week:{min:"1",max:"2"},fromjson:{min:"1",max:"1"},length3d:{min:"1",max:"2"},tohex:{min:"1",max:"1"},hash:{min:"1",max:"1"},isoweek:{min:"1",max:"1"},isoweekday:{min:"1",max:"1"},isomonth:{min:"1",max:"1"},isoyear:{min:"1",max:"1"},resize:{min:"2",max:"3"},slice:{min:"0",max:"*"},splice:{min:"0",max:"*"},push:{min:"2",max:"2"},pop:{min:"1",max:"1"},includes:{min:"2",max:"2"},array:{min:"1",max:"2"},front:{min:"1",max:"1"},back:{min:"1",max:"1"},insert:{min:"3",max:"3"},erase:{min:"2",max:"2"},split:{min:"2",max:"4"},guid:{min:"0",max:"1"},today:{min:"0",max:"0"},angle:{min:"2",max:"3"},bearing:{min:"2",max:"3"},urlencode:{min:"1",max:"1"},now:{min:"0",max:"0"},timestamp:{min:"0",max:"0"},day:{min:"1",max:"1"},month:{min:"1",max:"1"},year:{min:"1",max:"1"},hour:{min:"1",max:"1"},second:{min:"1",max:"1"},millisecond:{min:"1",max:"1"},minute:{min:"1",max:"1"},weekday:{min:"1",max:"1"},toutc:{min:"1",max:"1"},tolocal:{min:"1",max:"1"},date:{min:"0",max:"7"},datediff:{min:"2",max:"3"},dateadd:{min:"2",max:"3"},trim:{min:"1",max:"1"},text:{min:"1",max:"2"},left:{min:"2",max:"2"},right:{min:"2",max:"2"},mid:{min:"2",max:"3"},upper:{min:"1",max:"1"},proper:{min:"1",max:"2"},lower:{min:"1",max:"1"},find:{min:"2",max:"3"},iif:{min:"3",max:"3"},decode:{min:"2",max:"*"},when:{min:"2",max:"*"},defaultvalue:{min:"2",max:"2"},isempty:{min:"1",max:"1"},domaincode:{min:"2",max:"4"},domainname:{min:"2",max:"4"},polygon:{min:"1",max:"1"},point:{min:"1",max:"1"},polyline:{min:"1",max:"1"},extent:{min:"1",max:"1"},multipoint:{min:"1",max:"1"},ringisclockwise:{min:"1",max:"1"},geometry:{min:"1",max:"1"},count:{min:"0",max:"*"},number:{min:"1",max:"2"},acos:{min:"1",max:"1"},asin:{min:"1",max:"1"},atan:{min:"1",max:"1"},atan2:{min:"2",max:"2"},ceil:{min:"1",max:"2"},floor:{min:"1",max:"2"},round:{min:"1",max:"2"},cos:{min:"1",max:"1"},exp:{min:"1",max:"1"},log:{min:"1",max:"1"},min:{min:"0",max:"*"},constrain:{min:"3",max:"3"},console:{min:"0",max:"*"},max:{min:"0",max:"*"},pow:{min:"2",max:"2"},random:{min:"0",max:"0"},sqrt:{min:"1",max:"1"},sin:{min:"1",max:"1"},tan:{min:"1",max:"1"},abs:{min:"1",max:"1"},isnan:{min:"1",max:"1"},stdev:{min:"0",max:"*"},average:{min:"0",max:"*"},mean:{min:"0",max:"*"},sum:{min:"0",max:"*"},variance:{min:"0",max:"*"},distinct:{min:"0",max:"*"},first:{min:"1",max:"1"},top:{min:"2",max:"2"},boolean:{min:"1",max:"1"},dictionary:{min:"0",max:"*"},typeof:{min:"1",max:"1"},reverse:{min:"1",max:"1"},replace:{min:"3",max:"4"},sort:{min:"1",max:"2"},feature:{min:"1",max:"*"},haskey:{min:"2",max:"2"},indexof:{min:"2",max:"2"},disjoint:{min:"2",max:"2"},intersects:{min:"2",max:"2"},touches:{min:"2",max:"2"},crosses:{min:"2",max:"2"},within:{min:"2",max:"2"},contains:{min:"2",max:"2"},overlaps:{min:"2",max:"2"},equals:{min:"2",max:"2"},relate:{min:"3",max:"3"},intersection:{min:"2",max:"2"},union:{min:"1",max:"2"},difference:{min:"2",max:"2"},symmetricdifference:{min:"2",max:"2"},clip:{min:"2",max:"2"},cut:{min:"2",max:"2"},area:{min:"1",max:"2"},areageodetic:{min:"1",max:"2"},length:{min:"1",max:"2"},lengthgeodetic:{min:"1",max:"2"},distancegeodetic:{min:"2",max:"3"},distance:{min:"2",max:"3"},densify:{min:"2",max:"3"},densifygeodetic:{min:"2",max:"3"},generalize:{min:"2",max:"4"},buffer:{min:"2",max:"3"},buffergeodetic:{min:"2",max:"3"},offset:{min:"2",max:"6"},rotate:{min:"2",max:"3"},issimple:{min:"1",max:"1"},simplify:{min:"1",max:"1"},centroid:{min:"1",max:"1"},isselfintersecting:{min:"1",max:"1"},multiparttosinglepart:{min:"1",max:"1"},setgeometry:{min:"2",max:"2"},portal:{min:"1",max:"1"},getuser:{min:"1",max:"2"},subtypes:{min:"1",max:"1"},subtypecode:{min:"1",max:"1"},subtypename:{min:"1",max:"1"},domain:{min:"2",max:"3"},convertdirection:{min:"3",max:"3"},schema:{min:"1",max:"1"}};for(const R in e$7)e$7[R].fmin=e$7[R].min,e$7[R].fmax=e$7[R].max;const t$1=["featureset","getuser","featuresetbyid","featuresetbyname","featuresetbyassociation","featuresetbyrelationshipname","featuresetbyurl","getfeatureset","attachments","featuresetbyportalitem"],n$3=["disjoint","intersects","touches","crosses","within","contains","overlaps","equals","relate","intersection","union","difference","symmetricdifference","clip","cut","area","areageodetic","length","length3d","lengthgeodetic","distance","distancegeodetic","densify","densifygeodetic","generalize","buffer","buffergeodetic","offset","rotate","issimple","simplify","multiparttosinglepart"];function a$4(e){return "string"==typeof e||e instanceof String}function r$7(t,n){const a=e$7[t.name.toLowerCase()];void 0===a?e$7[t.name.toLowerCase()]="sync"===n?{min:t.min,max:t.max}:{fmin:t.min,fmax:t.max}:"sync"===n?(a.min=t.min,a.max=t.max):(a.fmin=t.min,a.fmax=t.max);}function i$5(e,t){return "0"!==e.min&&t.length<Number(e.min)||"*"!==e.max&&t.length>Number(e.max)?-2:1}function s$7(e,t,n){if(null!==n.localScope&&void 0!==n.localScope[e.toLowerCase()]){const a=n.localScope[e.toLowerCase()];if("FormulaFunction"===a.type)return void 0===a.signature&&(a.signature={min:"0",max:"*"}),i$5(a.signature,t);if("any"===a.type)return void 0===a.signature&&(a.signature={min:"0",max:"*"}),i$5(a.signature,t)}if(void 0!==n.globalScope[e.toLowerCase()]){const a=n.globalScope[e.toLowerCase()];if("FormulaFunction"===a.type)return void 0===a.signature&&(a.signature={min:"0",max:"*"}),i$5(a.signature,t);if("any"===a.type)return void 0===a.signature&&(a.signature={min:"0",max:"*"}),i$5(a.signature,t)}return -1}function o$5(e,t){if(e)for(const n of e)l$5(n,t);}function l$5(e,t){if(e&&!1!==t(e))switch(e.type){case"ArrayExpression":o$5(e.elements,t);break;case"AssignmentExpression":case"BinaryExpression":case"LogicalExpression":l$5(e.left,t),l$5(e.right,t);break;case"BlockStatement":case"Program":o$5(e.body,t);break;case"BreakStatement":case"ContinueStatement":case"EmptyStatement":case"Identifier":case"Literal":break;case"CallExpression":l$5(e.callee,t),o$5(e.arguments,t);break;case"ExpressionStatement":l$5(e.expression,t);break;case"ForInStatement":l$5(e.left,t),l$5(e.right,t),l$5(e.body,t);break;case"ForStatement":l$5(e.init,t),l$5(e.test,t),l$5(e.update,t),l$5(e.body,t);break;case"FunctionDeclaration":l$5(e.id,t),o$5(e.params,t),l$5(e.body,t);break;case"IfStatement":l$5(e.test,t),l$5(e.consequent,t),l$5(e.alternate,t);break;case"MemberExpression":l$5(e.object,t),l$5(e.property,t);break;case"ObjectExpression":o$5(e.properties,t);break;case"Property":l$5(e.key,t),l$5(e.value,t);break;case"ReturnStatement":case"UnaryExpression":case"UpdateExpression":l$5(e.argument,t);break;case"VariableDeclaration":o$5(e.declarations,t);break;case"VariableDeclarator":l$5(e.id,t),l$5(e.init,t);break;case"TemplateLiteral":o$5(e.expressions,t),o$5(e.quasis,t);}}function m$3(e,t=!0){let n=b$4(e,"SYNTAX","UNREOGNISED");try{switch(e.type){case"VariableDeclarator":return "Identifier"!==e.id.type?b$4(e,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER"):null!==e.init?m$3(e.init,!1):"";case"VariableDeclaration":for(let a=0;a<e.declarations.length;a++)if(n=m$3(e.declarations[a],t),""!==n)return n;return "";case"ForInStatement":if(n=m$3(e.left,t),""!==n)return n;if("VariableDeclaration"===e.left.type){if(e.left.declarations.length>1)return b$4(e,"SYNTAX","ONLY1VAR");if(null!==e.left.declarations[0].init)return b$4(e,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==e.left.type)return b$4(e,"SYNTAX","LEFTNOTVAR");return n=m$3(e.right,t),""!==n?n:(n=m$3(e.body,t),""!==n?n:"");case"ForStatement":return null!==e.test&&(n=m$3(e.test,t),""!==n)||(null!==e.init&&(n=m$3(e.init,t),""!==n)||null!==e.update&&(n=m$3(e.update,t),""!==n)||null!==e.body&&(n=m$3(e.body,t),""!==n))?n:"";case"ContinueStatement":case"EmptyStatement":case"BreakStatement":case"Literal":case"TemplateElement":return "";case"IfStatement":return n=m$3(e.test,t),""!==n||null!==e.consequent&&(n=m$3(e.consequent,!1),""!==n)||null!==e.alternate&&(n=m$3(e.alternate,!1),""!==n)?n:"";case"BlockStatement":{const a=[];for(let t=0;t<e.body.length;t++)"EmptyStatement"!==e.body[t].type&&a.push(e.body[t]);e.body=a;for(let r=0;r<e.body.length;r++)if(n=m$3(e.body[r],t),""!==n)return n;return ""}case"FunctionDeclaration":return !1===t?b$4(e,"SYNTAX","GLOBALFUNCTIONSONLY"):"Identifier"!==e.id.type?b$4(e,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER"):m$3(e.body,!1);case"ReturnStatement":return null!==e.argument?m$3(e.argument,t):"";case"UpdateExpression":return "Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type?b$4(e,"SYNTAX","ASSIGNMENTTOVARSONLY"):m$3(e.argument,t);case"AssignmentExpression":if("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type)return b$4(e,"SYNTAX","ASSIGNMENTTOVARSONLY");if(n=m$3(e.left,t),""!==n)return n;switch(e.operator){case"=":case"/=":case"*=":case"%=":case"+=":case"-=":break;default:return b$4(e,"SYNTAX","OPERATORNOTRECOGNISED")}return m$3(e.right,!1);case"ExpressionStatement":return m$3(e.expression,!1);case"Identifier":n="";break;case"MemberExpression":return n=m$3(e.object,t),""!==n?n:!0===e.computed?m$3(e.property,t):"";case"CallExpression":if("Identifier"!==e.callee.type)return b$4(e,"SYNTAX","ONLYNODESSUPPORTED");n="";for(let a=0;a<e.arguments.length;a++)if(n=m$3(e.arguments[a],t),""!==n)return n;return "";case"UnaryExpression":n=m$3(e.argument,t);break;case"BinaryExpression":if(n=m$3(e.left,t),""!==n)return n;if(n=m$3(e.right,t),""!==n)return n;switch(e.operator){case"|":case"&":case">>":case"<<":case">>":case">>>":case"^":case"==":case"!=":case"<":case"<=":case">":case">=":case"+":case"-":case"*":case"/":case"%":break;default:return b$4(e,"SYNTAX","OPERATORNOTRECOGNISED")}return "";case"LogicalExpression":if(n=m$3(e.left,t),""!==n)return n;if(n=m$3(e.right),""!==n)return n;switch(e.operator){case"&&":case"||":break;default:return b$4(e,"SYNTAX","OPERATORNOTRECOGNISED")}return "";case"ArrayExpression":n="";for(let a=0;a<e.elements.length;a++)if(n=m$3(e.elements[a],t),""!==n)return n;return n;case"TemplateLiteral":n="";for(let a=0;a<e.quasis.length;a++)if(n=m$3(e.quasis[a],t),""!==n)return n;for(let a=0;a<e.expressions.length;a++)if(n=m$3(e.expressions[a],t),""!==n)return n;return n;case"ObjectExpression":n="";for(let a=0;a<e.properties.length;a++){if(n="",null!==e.properties[a].key&&("Literal"!==e.properties[a].key.type&&"Identifier"!==e.properties[a].key.type&&(n=b$4(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===e.properties[a].key.type)){const t=e.properties[a].key,r="value"in t?t.value:null;"string"==typeof r||r instanceof String||(n=b$4(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"));}if(""===n&&(n=m$3(e.properties[a],t)),""!==n)return n}return n;case"Property":return "Literal"!==e.key.type&&"Identifier"!==e.key.type?b$4(e,"SYNTAX","ONLYLITERAL"):("Identifier"!==e.key.type&&(n=m$3(e.key,t),""!==n)||(n=m$3(e.value,t)),n);default:return n}return n}catch(a){throw a}}function c$4(e,t){let n=b$4(e,"SYNTAX","UNREOGNISED"),a=null,r="";try{switch(e.type){case"VariableDeclarator":{const n=null===e.init?"":c$4(e.init,t);return ""!==n?n:("Identifier"===e.id.type&&(null===t.localScope?t.globalScope[e.id.name.toLowerCase()]={type:"any"}:t.localScope[e.id.name.toLowerCase()]={type:"any"}),"")}case"FunctionDeclaration":return a=d$5(e.id.name.toLowerCase(),e),r=x$5(e,t),""!==r?r:null!==t.localScope?b$4(e,"SYNTAX","GLOBALFUNCTIONSONLY"):(a.isnative=!1,t.globalScope[e.id.name.toLowerCase()]={type:"FormulaFunction",signature:[a]},"");case"VariableDeclaration":n="";for(let a=0;a<e.declarations.length;a++)if(n=c$4(e.declarations[a],t),""!==n)return n;return n;case"IfStatement":return n=c$4(e.test,t),""!==n?n:"AssignmentExpression"===e.test.type||"UpdateExpression"===e.test.type?b$4(e.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):null!==e.consequent&&(n=c$4(e.consequent,t),""!==n)||null!==e.alternate&&(n=c$4(e.alternate,t),""!==n)?n:"";case"EmptyStatement":case"BreakStatement":case"ContinueStatement":case"Literal":case"TemplateElement":return "";case"BlockStatement":for(let a=0;a<e.body.length;a++)if(n=c$4(e.body[a],t),""!==n)return n;return "";case"ReturnStatement":return null!==e.argument?c$4(e.argument,t):"";case"ForInStatement":if("VariableDeclaration"===e.left.type){if(e.left.declarations.length>1)return b$4(e,"SYNTAX","ONLY1VAR");if(null!==e.left.declarations[0].init)return b$4(e,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==e.left.type)return b$4(e,"SYNTAX","LEFTNOTVAR");return n=c$4(e.left,t),""!==n?n:(n=c$4(e.right,t),""!==n?n:(n=c$4(e.body,t),""!==n?n:""));case"ForStatement":return null!==e.init&&(n=c$4(e.init,t),""!==n)||(null!==e.test&&(n=c$4(e.test,t),""!==n)||null!==e.body&&(n=c$4(e.body,t),""!==n)||null!==e.update&&(n=c$4(e.update,t),""!==n))?n:"";case"UpdateExpression":{if("Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type)return b$4(e,"SYNTAX","ASSIGNMENTTOVARSONLY");let n=!1;return "MemberExpression"===e.argument.type?c$4(e.argument,t):(null!==t.localScope&&void 0!==t.localScope[e.argument.name.toLowerCase()]&&(n=!0),void 0!==t.globalScope[e.argument.name.toLowerCase()]&&(n=!0),!1===n?"Identifier "+e.argument.name+" has not been declared.":"")}case"AssignmentExpression":{if("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type)return b$4(e,"SYNTAX","ASSIGNMENTTOVARSONLY");let n=c$4(e.right,t);if(""!==n)return n;let a=!1;return "MemberExpression"===e.left.type?(n=c$4(e.left,t),""!==n?n:""):(null!==t.localScope&&void 0!==t.localScope[e.left.name.toLowerCase()]&&(a=!0),void 0!==t.globalScope[e.left.name.toLowerCase()]&&(a=!0),!1===a?"Identifier "+e.left.name+" has not been declared.":"")}case"ExpressionStatement":return c$4(e.expression,t);case"Identifier":{const a=e.name.toLowerCase();if(null!==t.localScope&&void 0!==t.localScope[a])return "";n=void 0!==t.globalScope[a]?"":b$4(e,"SYNTAX","VARIABLENOTFOUND");break}case"MemberExpression":return n=c$4(e.object,t),""!==n?n:!0===e.computed?c$4(e.property,t):"";case"CallExpression":{if("Identifier"!==e.callee.type)return b$4(e,"SYNTAX","ONLYNODESSUPPORTED");n="";for(let r=0;r<e.arguments.length;r++)if(n=c$4(e.arguments[r],t),""!==n)return n;const a=s$7(e.callee.name,e.arguments,t);-1===a&&(n=b$4(e,"SYNTAX","NOTFOUND")),-2===a&&(n=b$4(e,"SYNTAX","WRONGSIGNATURE"));break}case"UnaryExpression":n=c$4(e.argument,t);break;case"BinaryExpression":return n=c$4(e.left,t),""!==n?n:(n=c$4(e.right,t),""!==n?n:"");case"LogicalExpression":return n=c$4(e.left,t),""!==n?n:"AssignmentExpression"===e.left.type||"UpdateExpression"===e.left.type?b$4(e.left,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):(n=c$4(e.right,t),""!==n?n:"AssignmentExpression"===e.right.type||"UpdateExpression"===e.right.type?b$4(e.right,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):"");case"ArrayExpression":n="";for(let a=0;a<e.elements.length;a++)if(n=c$4(e.elements[a],t),""!==n)return n;return n;case"TemplateLiteral":n="";for(let a=0;a<e.quasis.length;a++)if(n=c$4(e.quasis[a],t),""!==n)return n;for(let a=0;a<e.expressions.length;a++)if(n=c$4(e.expressions[a],t),""!==n)return n;return n;case"ObjectExpression":n="";for(let a=0;a<e.properties.length;a++){if(n="",null!==e.properties[a].key&&("Literal"!==e.properties[a].key.type&&"Identifier"!==e.properties[a].key.type&&(n=b$4(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===e.properties[a].key.type)){const t=e.properties[a].key,r="value"in t?t.value:null;"string"==typeof r||r instanceof String||(n=b$4(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"));}if(""===n&&(n=c$4(e.properties[a],t)),""!==n)return n}return n;case"Property":return "Literal"!==e.key.type&&"Identifier"!==e.key.type?b$4(e,"SYNTAX","ONLYLITERAL"):("Identifier"!==e.key.type&&(n=c$4(e.key,t),""!==n)||(n=c$4(e.value,t)),n);case"Program":case"TemplateElement":return n;default:return n}return n}catch(i){throw i}}function p$3(e,t){let n=!1;const a=t.toLowerCase();return l$5(e,(e=>!n&&("Identifier"===e.type&&e.name&&e.name.toLowerCase()===a&&(n=!0),!0))),n}function u$4(e,t){let n=!1;const a=t.toLowerCase();return l$5(e,(e=>!n&&("CallExpression"!==e.type||"Identifier"!==e.callee.type||!e.callee.name||e.callee.name.toLowerCase()!==a||(n=!0,!1)))),n}function f$5(e){const t=[];return l$5(e,(e=>"MemberExpression"!==e.type||"Identifier"!==e.object.type||(!1===e.computed&&e.object&&e.object.name&&e.property&&"Identifier"===e.property.type&&e.property.name?t.push(e.object.name.toLowerCase()+"."+e.property.name.toLowerCase()):e.object&&e.object.name&&e.property&&"Literal"===e.property.type&&"string"==typeof e.property.value&&t.push(e.object.name.toLowerCase()+"."+e.property.value.toString().toLowerCase()),!1))),t}function y$5(e){const t=[];return l$5(e,(e=>{if("CallExpression"===e.type&&"Identifier"===e.callee.type&&"expects"===e.callee.name.toLowerCase()){let n="";for(let r=0;r<(e.arguments||[]).length;r++)0===r?"Identifier"===e.arguments[r].type&&(n=e.arguments[r].name.toLowerCase()):n&&"Literal"===e.arguments[r].type&&a$4(e.arguments[r].value)&&t.push(n+"."+e.arguments[r].value.toLowerCase());return !1}return "MemberExpression"!==e.type||"Identifier"!==e.object.type||(!1===e.computed&&e.object&&e.object.name&&e.property&&"Identifier"===e.property.type&&e.property.name?t.push(e.object.name.toLowerCase()+"."+e.property.name.toLowerCase()):e.object&&e.object.name&&e.property&&"Literal"===e.property.type&&"string"==typeof e.property.value&&t.push(e.object.name.toLowerCase()+"."+e.property.value.toString().toLowerCase()),!1)})),t}function d$5(e,t){const n=[];if(void 0!==t.params&&null!==t.params)for(let a=0;a<t.params.length;a++)n.push("any");return {name:e,return:"any",params:n}}function x$5(e,t){const n={globalScope:t.globalScope,localScope:{}};for(let a=0;a<e.params.length;a++){const t=e.params[a].name;n.localScope[t.toLowerCase()]={type:"any"};}return c$4(e.body,n)}function N$5(e,t,n,a){const r={};null==e&&(e={}),null==n&&(n={}),r.infinity={type:"any"},r.textformatting={type:"any"},r.pi={type:"any"};for(const i in t)"sync"===a&&void 0!==t[i].min?r[i]={type:"FormulaFunction",signature:{min:t[i].min,max:t[i].max}}:"sync"!==a&&void 0!==t[i].fmin&&(r[i]={type:"FormulaFunction",signature:{min:t[i].fmin,max:t[i].fmax}});for(let i=0;i<n.length;i++){const e=n[i];r[e.name]={type:"FormulaFunction",signature:e};}for(const i in e)r[i]=e[i],r[i].type="any";return r}function S$3(t,n,a="async",r=e$7){const i={globalScope:N$5(n.vars,r,n.customFunctions,a),localScope:null};return c$4(t.body[0].body,i)}function E$4(e){return "BlockStatement"!==e.body[0].body.type?"Invalid formula content.":m$3(e.body[0].body)}function b$4(e,t,n){let a="";if("RUNTIME"===t)a="Runtime Error: ";else a="Syntax Error: ";try{switch(e.type){case"IfStatement":switch(n){case"CANNOT_USE_ASSIGNMENT_IN_CONDITION":a+=" Assignments not be made in logical tests";break;case"CANNOT_USE_NONBOOLEAN_IN_CONDITION":a+=" Non Boolean used as Condition";}break;case"UpdateExpression":case"AssignmentExpression":switch(n){case"CANNOT_USE_ASSIGNMENT_IN_CONDITION":a+=" Assignments not be made in logical tests";break;case"ASSIGNMENTTOVARSONLY":a+=" Assignments can only be made to identifiers";}break;case"ExpressionStatement":a+=" Assignments can only be made to identifiers";break;case"FunctionDeclaration":switch(n){case"GLOBALFUNCTIONSONLY":a+=" Functions cannot be declared as variables";break;case"FUNCTIONMUSTHAVEIDENTIFIER":a+=" Function Definition must have an identifier";}break;case"VariableDeclaration":a+=" Only 1 variable can be declared at a time";break;case"VariableDeclarator":switch(n){case"FUNCTIONVARIABLEDECLARATOR":a+=" Functions cannot be declared as variables";break;case"VARIABLEMUSTHAVEIDENTIFIER":a+=" Variable Definition must have an identifier";}break;case"Identifier":a+=" Identifier Not Found. ",a+=e.name;break;case"ObjectExpression":if("OBJECTPROPERTYMUSTBESTRING"===n)a+=" Property name must be a string";break;case"ForStatement":if("CANNOT_USE_NONBOOLEAN_IN_CONDITION"===n)a+=" Non Boolean used as Condition";break;case"ForInStatement":switch(n){case"ONLY1VAR":a+=" Can only declare 1 var for use with IN";break;case"CANNOTDECLAREVAL":a+=" Can only declare value for use with IN";break;case"LEFTNOVAR":a+="Must provide a variable to iterate with.";break;case"VARIABLENOTDECLARED":a+="Variable must be declared before it is used..";break;case"CANNOTITERATETHISTYPE":a+="This type cannot be used in an IN loop";}break;case"MemberExpression":switch(n){case"PROPERTYNOTFOUND":a+="Cannot find member property. ",a+=!1===e.computed&&"Identifier"===e.property.type?e.property.name:"";break;case"OUTOFBOUNDS":a+="Out of Bounds. ",a+=!1===e.computed&&"Identifier"===e.property.type?e.property.name:"";break;case"NOTFOUND":a+="Cannot call member method on null. ",a+=!1===e.computed&&"Identifier"===e.property.type?e.property.name:"";break;case"INVALIDTYPE":a+="Cannot call member property on object of this type. ",a+=!1===e.computed&&"Identifier"===e.property.type?e.property.name:"";}break;case"Property":if("ONLYLITERAL"===n)a+="Property names must be literals or identifiers";break;case"Literal":break;case"CallExpression":switch(n){case"WRONGSIGNATURE":a+="Function signature does not match: ",a+="Identifier"===e.callee.type?e.callee.name:"";break;case"ONLYNODESUPPORTED":a+="Functions must be declared.",a+="Identifier"===e.callee.type?e.callee.name:"";break;case"NOTAFUNCTION":a+="Not a Function: ",a+="Identifier"===e.callee.type?e.callee.name:"";break;case"NOTFOUND":a+="Function Not Found: "+("Identifier"===e.callee.type?e.callee.name:"");}break;case"UnaryExpression":switch(n){case"NOTSUPPORTEDUNARYOPERATOR":a+="Operator "+e.operator+" not allowed in this context. Only ! can be used with boolean, and - with a number";break;case"NOTSUPPORTEDTYPE":a+="Unary operator "+e.operator+" cannot be used with this argument.";}case"BinaryExpression":if("OPERATORNOTRECOGNISED"===n)a+="Binary Operator not recognised "+e.operator;break;case"LogicalExpression":switch(n){case"ONLYBOOLEAN":a+="Operator "+e.operator+" cannot be used. Only || or && are allowed values";break;case"ONLYORORAND":a+="Logical Expression "+e.operator+" being applied to parameters that are not boolean.";}break;case"ArrayExpression":if("FUNCTIONCONTEXTILLEGAL"===n)a+=" Cannot Put Function inside Array.";break;default:a+="Expression contains unrecognised code structures.";}}catch(r){throw r}return a}function g$6(e,t,n){return {line:e.loc.start.line,character:e.loc.start.column,reason:b$4(e,t,n)}}function T$3(e,t,n,a){const r={globalScope:t.globalScope,localScope:{}};for(let i=0;i<e.params.length;i++){const t=e.params[i].name;r.localScope[t.toLowerCase()]={type:"any"};}O$3(e.body,r,n,a,!1);}function O$3(e,t,n,a,r=!0){if(null===e)throw new Error("Unnexpexted Expression Syntax");let i=null;try{switch(e.type){case"VariableDeclarator":return "Identifier"!==e.id.type?a.push(g$6(e,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER")):(null!==t.localScope?t.localScope[e.id.name.toLowerCase()]:t.globalScope[e.id.name.toLowerCase()],null===t.localScope?t.globalScope[e.id.name.toLowerCase()]={type:"any"}:t.localScope[e.id.name.toLowerCase()]={type:"any"}),void(null!==e.init&&O$3(e.init,t,n,a,r));case"FunctionDeclaration":return !1===r&&a.push(g$6(e,"SYNTAX","GLOBALFUNCTIONSONLY")),"Identifier"!==e.id.type&&a.push(g$6(e,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER")),i=d$5("",e),T$3(e,t,n,a),null!==t.localScope&&a.push(g$6(e,"SYNTAX","GLOBALFUNCTIONSONLY")),i.isnative=!1,void("Identifier"===e.id.type&&(t.globalScope[e.id.name.toLowerCase()]={type:"FormulaFunction",signature:[i]}));case"VariableDeclaration":for(let i=0;i<e.declarations.length;i++)O$3(e.declarations[i],t,n,a,r);return;case"IfStatement":return null!==e.test&&(O$3(e.test,t,n,a,r),"AssignmentExpression"!==e.test.type&&"UpdateExpression"!==e.test.type||a.push(g$6(e.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))),null!==e.consequent&&O$3(e.consequent,t,n,a,r),void(null!==e.alternate&&O$3(e.alternate,t,n,a,r));case"EmptyStatement":case"BreakStatement":case"ContinueStatement":case"Literal":case"TemplateElement":return;case"BlockStatement":if(null!==e.body)for(let i=0;i<e.body.length;i++)O$3(e.body[i],t,n,a,r);return;case"ReturnStatement":return void(null!==e.argument&&O$3(e.argument,t,n,a,r));case"ForInStatement":return "VariableDeclaration"===e.left.type?(e.left.declarations.length>1&&a.push(g$6(e,"SYNTAX","ONLY1VAR")),null!==e.left.declarations[0].init&&a.push(g$6(e,"SYNTAX","CANNOTDECLAREVAL"))):"Identifier"!==e.left.type&&a.push(g$6(e,"SYNTAX","LEFTNOTVAR")),O$3(e.left,t,n,a,r),O$3(e.right,t,n,a,r),void O$3(e.body,t,n,a,r);case"ForStatement":return null!==e.init&&O$3(e.init,t,n,a,r),null!==e.test&&O$3(e.test,t,n,a,r),null!==e.body&&O$3(e.body,t,n,a,r),void(null!==e.update&&O$3(e.update,t,n,a,r));case"UpdateExpression":if("Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type)a.push(g$6(e,"SYNTAX","ASSIGNMENTTOVARSONLY"));else {if("Identifier"===e.argument.type){let r=!1;!1===n&&(null!==t.localScope&&void 0!==t.localScope[e.argument.name.toLowerCase()]&&(r=!0),void 0!==t.globalScope[e.argument.name.toLowerCase()]&&(r=!0),!1===r&&a.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Identifier "+e.argument.name+" has not been declared."}));}"MemberExpression"===e.argument.type&&O$3(e.argument,t,n,a,r);}return;case"AssignmentExpression":{switch("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type&&a.push(g$6(e,"SYNTAX","ASSIGNMENTTOVARSONLY")),e.operator){case"=":case"/=":case"*=":case"%=":case"+=":case"-=":break;default:a.push(g$6(e,"SYNTAX","OPERATORNOTRECOGNISED"));}O$3(e.right,t,n,a,r);let i=!1;return "Identifier"===e.left.type&&(null!==t.localScope&&void 0!==t.localScope[e.left.name.toLowerCase()]&&(i=!0),void 0!==t.globalScope[e.left.name.toLowerCase()]&&(i=!0),!1===n&&!1===i&&a.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Identifier "+e.left.name+" has not been declared."})),void("MemberExpression"===e.left.type&&O$3(e.left,t,n,a,r))}case"ExpressionStatement":return void O$3(e.expression,t,n,a,r);case"Identifier":{const r=e.name.toLowerCase();if(null!==t.localScope&&void 0!==t.localScope[r])return;if(void 0!==t.globalScope[r])return;!1===n&&a.push(g$6(e,"SYNTAX","VARIABLENOTFOUND"));break}case"MemberExpression":return O$3(e.object,t,n,a,r),void(!0===e.computed&&O$3(e.property,t,n,a,r));case"CallExpression":"Identifier"!==e.callee.type&&a.push(g$6(e,"SYNTAX","ONLYNODESSUPPORTED"));for(let i=0;i<e.arguments.length;i++)O$3(e.arguments[i],t,n,a,r);if("Identifier"===e.callee.type){const r=s$7(e.callee.name,e.arguments,t);!1===n&&-1===r&&a.push(g$6(e,"SYNTAX","NOTFOUND")),-2===r&&a.push(g$6(e,"SYNTAX","WRONGSIGNATURE"));}return;case"UnaryExpression":return void O$3(e.argument,t,n,a,r);case"BinaryExpression":switch(O$3(e.left,t,n,a,r),O$3(e.right,t,n,a,r),e.operator){case"==":case"!=":case"<":case"<=":case">":case">=":case"+":case"-":case"*":case"/":case"%":case"&":case"|":case"^":case"<<":case">>":case">>>":break;default:a.push(g$6(e,"SYNTAX","OPERATORNOTRECOGNISED"));}return;case"LogicalExpression":switch(e.operator){case"&&":case"||":break;default:a.push(g$6(e,"SYNTAX","OPERATORNOTRECOGNISED"));}return O$3(e.left,t,n,a,r),"AssignmentExpression"!==e.left.type&&"UpdateExpression"!==e.left.type||a.push(g$6(e,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")),O$3(e.right,t,n,a,r),void("AssignmentExpression"!==e.right.type&&"UpdateExpression"!==e.right.type||a.push(g$6(e,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));case"ArrayExpression":for(let i=0;i<e.elements.length;i++)O$3(e.elements[i],t,n,a,r);return;case"TemplateLiteral":for(let i=0;i<e.quasis.length;i++)O$3(e.quasis[i],t,n,a,r);for(let i=0;i<e.expressions.length;i++)O$3(e.expressions[i],t,n,a,r);return;case"ObjectExpression":for(let i=0;i<e.properties.length;i++)O$3(e.properties[i],t,n,a,r);return;case"Property":return "Literal"!==e.key.type&&"Identifier"!==e.key.type&&a.push(g$6(e,"SYNTAX","ONLYLITERAL")),"Literal"===e.key.type&&O$3(e.key,t,n,a,r),void O$3(e.value,t,n,a,r);default:a.push(g$6(e,"SYNTAX","UNRECOGNISED"));}return}catch(o){a.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Unnexpected Syntax"});}}function A$3(t,n,a,r="async",i=e$7){const s=[];if("BlockStatement"!==t.body[0].body.type)return [{line:0,character:0,reason:"Invalid Body"}];null==n&&(n={vars:{},customFunctions:[]});const o={globalScope:N$5(n.vars,i,n.customFunctions,r),localScope:null};try{O$3(t.body[0].body,o,a,s);}catch(l){}return s}function I$5(e){const t=[];return l$5(e,(e=>("CallExpression"===e.type&&"Identifier"===e.callee.type&&t.push(e.callee.name.toLowerCase()),!0))),t}function h$8(e,a=[]){let r=null;if(void 0===e.usesFeatureSet){null===r&&(r=I$5(e)),e.usesFeatureSet=!1;for(let n=0;n<r.length;n++)t$1.indexOf(r[n])>-1&&(e.usesFeatureSet=!0,e.isAsync=!0);if(!1===e.usesFeatureSet&&a&&a.length>0)for(const t of a)if(p$3(e,t)){e.usesFeatureSet=!0,e.isAsync=!0;break}}if(void 0===e.usesGeometry){e.usesGeometry=!1,null===r&&(r=I$5(e));for(let t=0;t<r.length;t++)n$3.indexOf(r[t])>-1&&(e.usesGeometry=!0);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function h$7(h,l){h.array=function(i,o){return l(i,o,(function(i,o,a){z$5(a,1,2);const f=ee$2(a[0]);if(isNaN(f)||!1===F$5(f))throw new Error("Invalid Parameter");const h=O$5(a[1],null),l=new Array(f);return l.fill(h),l}))},h.front=function(n,t){return l(n,t,(function(n,t,e){if(z$5(e,1,1),J$3(e[0])){if(e[0].length()<=0)throw new Error("Array is empty");return e[0].get(0)}if(I$7(e[0])){if(e[0].length<=0)throw new Error("Array is empty");return e[0][0]}throw new Error("Invalid Parameter")}))},h.back=function(n,t){return l(n,t,(function(n,t,e){if(z$5(e,1,1),J$3(e[0])){if(e[0].length()<=0)throw new Error("Array is empty");return e[0].get(e[0].length()-1)}if(I$7(e[0])){if(e[0].length<=0)throw new Error("Array is empty");return e[0][e[0].length-1]}throw new Error("Invalid Parameter")}))},h.push=function(n,t){return l(n,t,(function(n,t,e){if(z$5(e,1,2),I$7(e[0]))return e[0][e[0].length]=e[1],e[0].length;throw new Error("Invalid Parameter")}))},h.pop=function(n,t){return l(n,t,(function(n,t,e){if(z$5(e,1,1),I$7(e[0])){if(e[0].length<=0)throw new Error("Array is empty");const r=e[0][e[0].length-1];return e[0].length=e[0].length-1,r}throw new Error("Invalid Parameter")}))},h.erase=function(e,i){return l(e,i,(function(e,i,f){if(z$5(f,2,2),I$7(f[0])){let r=ee$2(f[1]);if(isNaN(r)||!1===F$5(r))throw new Error("Invalid Parameter");const e=f[0];if(e.length<=0)throw new Error("Array is empty");if(r<0&&(r=e.length+r),r<0)throw new Error("Element not found");if(r>=e.length)throw new Error("Index is greater than array");return e.splice(r,1),R$3}throw new Error("Invalid Parameter")}))},h.insert=function(e,i){return l(e,i,(function(e,i,f){if(z$5(f,3,3),I$7(f[0])){const r=ee$2(f[1]);if(isNaN(r)||!1===F$5(r))throw new Error("Invalid Parameter");const e=f[2],i=f[0];if(r>i.length)throw new Error("Index is greater than array");if(r<0&&r<-1*i.length)throw new Error("Index is greater than array");return r===i.length?(i[r]=e,R$3):(i.splice(r,0,e),R$3)}throw new Error("Invalid Parameter")}))},h.resize=function(i,f){return l(i,f,(function(i,f,h){if(z$5(h,2,3),I$7(h[0])){const r=ee$2(h[1]);if(isNaN(r)||!1===F$5(r))throw new Error("Invalid Parameter");if(r<0)throw new Error("Size cannot be negative");const i=O$5(h[2],null),o=h[0];if(o.length>=r)return o.length=r,R$3;const f=o.length;o.length=r;for(let n=f;n<o.length;n++)o[n]=i;return R$3}throw new Error("Invalid Parameter")}))},h.includes=function(n,t){return l(n,t,(function(n,t,e){if(z$5(e,2,2),I$7(e[0])){const r=e[1];return e[0].findIndex((n=>W$2(n,r)))>-1}if(J$3(e[0])){const r=e[1];return e[0].toArray().findIndex((n=>W$2(n,r)))>-1}throw new Error("Invalid Parameter")}))},h.slice=function(a,f){return l(a,f,(function(a,f,h){if(z$5(h,1,3),I$7(h[0])){const r=ee$2(O$5(h[1],0)),i=ee$2(O$5(h[2],h[0].length));if(isNaN(r)||!1===F$5(r))throw new Error("Invalid Parameter");if(isNaN(i)||!1===F$5(i))throw new Error("Invalid Parameter");return h[0].slice(r,i)}if(J$3(h[0])){const r=h[0],i=ee$2(O$5(h[1],0)),o=ee$2(O$5(h[2],r.length()));if(isNaN(i)||!1===F$5(i))throw new Error("Invalid Parameter");if(isNaN(o)||!1===F$5(o))throw new Error("Invalid Parameter");return r.toArray().slice(i,o)}throw new Error("Invalid Parameter")}))},h.splice=function(r,n){return l(r,n,(function(r,n,t){const e=[];for(let a=0;a<t.length;a++)I$7(t[a])?e.push(...t[a]):J$3(t[a])?e.push(...t[a].toArray()):e.push(t[a]);return e}))};}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f$4(e){const n=new Date(e.getTime()),t=n.getFullYear(),r=new Date(0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const u=g$5(r),s=new Date(0);s.setFullYear(t,0,4),s.setHours(0,0,0,0);const o=g$5(s);return n.getTime()>=u.getTime()?t+1:n.getTime()>=o.getTime()?t:t-1}function g$5(e){const n=1,t=new Date(e.getTime()),r=t.getDay(),u=(r<n?7:0)+r-n;return t.setDate(t.getDate()-u),t.setHours(0,0,0,0),t}function d$4(e){const n=f$4(e),t=new Date(0);t.setFullYear(n,0,4),t.setHours(0,0,0,0);return g$5(t)}function m$2(e,n,t){return e+(h$6(t)?D$6:N$4)[n]}function h$6(e){return e%4==0&&(e%100!=0||e%400==0)}const N$4=[0,31,59,90,120,151,181,212,243,273,304,334],D$6=[0,31,60,91,121,152,182,213,244,274,305,335];function w$3(e){return null===e?e:isNaN(e.getTime())?null:e}function y$4(h,N){h.today=function(n,t){return N(n,t,(function(n,t,r){z$5(r,0,0);const u=new Date;return u.setHours(0,0,0,0),u}))},h.now=function(n,t){return N(n,t,(function(n,t,r){z$5(r,0,0);return new Date}))},h.timestamp=function(n,t){return N(n,t,(function(n,t,r){z$5(r,0,0);let u=new Date;return u=new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()),u}))},h.toutc=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);return null===s?null:new Date(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate(),s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds())}))},h.tolocal=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);return null===s?null:luxon.DateTime.utc(s.getFullYear(),s.getMonth()+1,s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds(),s.getMilliseconds()).toJSDate()}))},h.day=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);return null===s?NaN:s.getDate()}))},h.month=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);return null===s?NaN:s.getMonth()}))},h.year=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);return null===s?NaN:s.getFullYear()}))},h.hour=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);return null===s?NaN:s.getHours()}))},h.second=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);return null===s?NaN:s.getSeconds()}))},h.millisecond=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);return null===s?NaN:s.getMilliseconds()}))},h.minute=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);return null===s?NaN:s.getMinutes()}))},h.week=function(u,s){return N(u,s,(function(u,s,o){z$5(o,1,2);const a=te$2(o[0]);if(null===a)return NaN;const c=ee$2(O$5(o[1],0));if(c<0||c>6)throw new Error("Invalid Parameter");const i=a.getDate(),l=a.getMonth(),f=a.getFullYear(),g=a.getDay(),d=m$2(i,l,f)-1,h=Math.floor(d/7);return g-c+(g-c<0?7:0)<d-7*h?h+1:h}))},h.weekday=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);return null===s?NaN:s.getDay()}))},h.isoweekday=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);if(null===s)return NaN;let o=s.getDay();return 0===o&&(o=7),o}))},h.isomonth=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);return null===s?NaN:s.getMonth()+1}))},h.isoweek=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);if(null===s)return NaN;const o=g$5(s).getTime()-d$4(s).getTime();return Math.round(o/6048e5)+1}))},h.isoyear=function(t,r){return N(t,r,(function(t,r,u){z$5(u,1,1);const s=te$2(u[0]);return null===s?NaN:f$4(s)}))},h.date=function(r,a){return N(r,a,(function(r,a,c){if(z$5(c,0,7),3===c.length)return w$3(new Date(ee$2(c[0]),ee$2(c[1]),ee$2(c[2]),0,0,0,0));if(4===c.length)return w$3(new Date(ee$2(c[0]),ee$2(c[1]),ee$2(c[2]),ee$2(c[3]),0,0,0));if(5===c.length)return w$3(new Date(ee$2(c[0]),ee$2(c[1]),ee$2(c[2]),ee$2(c[3]),ee$2(c[4]),0,0));if(6===c.length)return w$3(new Date(ee$2(c[0]),ee$2(c[1]),ee$2(c[2]),ee$2(c[3]),ee$2(c[4]),ee$2(c[5]),0));if(7===c.length)return w$3(new Date(ee$2(c[0]),ee$2(c[1]),ee$2(c[2]),ee$2(c[3]),ee$2(c[4]),ee$2(c[5]),ee$2(c[6])));if(2===c.length){let e,n=$$4(c[1]);return ""===n?null:(n=U$3(n),e="X"===n?luxon.DateTime.fromSeconds(ee$2(c[0])):"x"===n?luxon.DateTime.fromMillis(ee$2(c[0])):luxon.DateTime.fromFormat($$4(c[0]),n,{locale:i$7(),numberingSystem:"latn"}),e.isValid?e.toJSDate():null)}if(1===c.length){if(Z$4(c[0])){if(""===c[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))return null;if(!0===/^[0-9][0-9][0-9][0-9]$/.test(c[0]))return te$2(c[0]+"-01-01")}const e=ee$2(c[0]);if(!1===isNaN(e))return w$3(new Date(e));return te$2(c[0])}return 0===c.length?new Date:void 0}))},h.datediff=function(n,t){return N(n,t,(function(n,t,r){z$5(r,2,3);const s=ne$2(r[0]),o=ne$2(r[1]);if(null===s||null===o)return NaN;switch($$4(r[2]).toLowerCase()){case"days":case"day":case"d":return s.diff(o,"days").days;case"months":case"month":return s.diff(o,"months").months;case"minutes":case"minute":case"m":return "M"===r[2]?s.diff(o,"months").months:s.diff(o,"minutes").minutes;case"seconds":case"second":case"s":return s.diff(o,"seconds").seconds;default:return s.diff(o).milliseconds;case"hours":case"hour":case"h":return s.diff(o,"hours").hours;case"years":case"year":case"y":return s.diff(o,"years").years}}))},h.dateadd=function(n,r){return N(n,r,(function(n,r,s){z$5(s,2,3);const o=ne$2(s[0]);if(null===o)return null;let i=ee$2(s[1]);if(isNaN(i))return o.toJSDate();let l="milliseconds";switch($$4(s[2]).toLowerCase()){case"days":case"day":case"d":l="days",i=P$7(i);break;case"months":case"month":l="months",i=P$7(i);break;case"minutes":case"minute":case"m":l="M"===s[2]?"months":"minutes";break;case"seconds":case"second":case"s":l="seconds";break;case"milliseconds":case"millisecond":case"ms":l="milliseconds";break;case"hours":case"hour":case"h":l="hours";break;case"years":case"year":case"y":l="years";}return o.plus({[l]:i}).toJSDate()}))};}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$6(t,n,e){return Math.sqrt((t[0]-n[0])**2+(t[1]-n[1])**2+(void 0!==t[2]&&void 0!==n[2]?(t[2]*e-n[2]*e)**2:0))}const r$6=[];for(const v of [[9002,56146130,6131,6132,8050,8051,8228],[9003,5702,6358,6359,6360,8052,8053],[9095,5754]]){const t=v[0];for(let n=1;n<v.length;n++)r$6[v[n]]=t;}const o$4=[];function s$6(t){return t.vcsWkid&&void 0!==r$6[t.vcsWkid]?o$4[r$6[t.vcsWkid]]:t.latestVcsWkid&&void 0!==r$6[t.latestVcsWkid]?o$4[r$6[t.latestVcsWkid]]:1}function c$3(t,n,e){const r={x:0,y:0};n&&(r.z=0),e&&(r.m=0);let o=0,s=t[0];for(let c=0;c<t.length;c++){const a=t[c];if(!1===f$3(a,s)){const t=h$5(s,a,n),c=i$4(s,a,n,e);c.x*=t,c.y*=t,r.x+=c.x,r.y+=c.y,n&&(c.z*=t,r.z+=c.z),e&&(c.m*=t,r.m+=c.m),o+=t,s=a;}}return o>0?(r.x/=o,r.y/=o,n&&(r.z/=o),e&&(r.m/=o)):(r.x=t[0][0],r.y=t[0][1],n&&(r.z=t[0][2]),e&&n?r.m=t[0][3]:e&&(r.m=t[0][2])),r}function i$4(t,n,e,r){const o={x:(t[0]+n[0])/2,y:(t[1]+n[1])/2};return e&&(o.z=(t[2]+n[2])/2),e&&r?o.m=(t[3]+n[3])/2:r&&(o.m=(t[2]+n[2])/2),o}function a$3(t,n){if(t.length<=1)return 0;let e=0;for(let r=1;r<t.length;r++)e+=h$5(t[r-1],t[r],n);return e}function h$5(t,n,e){const r=n[0]-t[0],o=n[1]-t[1];if(e){const t=n[2]-n[2];return Math.sqrt(r*r+o*o+t*t)}return Math.sqrt(r*r+o*o)}function f$3(t,n){if(t.length!==n.length)return !1;for(let e=0;e<t.length;e++)if(t[e]!==n[e])return !1;return !0}function l$4(n){const e={x:0,y:0,spatialReference:n.spatialReference.toJSON()},r={x:0,y:0,spatialReference:n.spatialReference.toJSON()};let o=0,s=0;for(let t=0;t<n.paths.length;t++){if(0===n.paths[t].length)continue;const i=a$3(n.paths[t],!0===n.hasZ);if(0===i){const r=c$3(n.paths[t],!0===n.hasZ,!0===n.hasM);e.x+=r.x,e.y+=r.y,!0===n.hasZ&&(e.z+=r.z),!0===n.hasM&&(e.m+=r.m),++o;}else {const e=c$3(n.paths[t],!0===n.hasZ,!0===n.hasM);r.x+=e.x*i,r.y+=e.y*i,!0===n.hasZ&&(r.z+=e.z*i),!0===n.hasM&&(r.m+=e.m*i),s+=i;}}return s>0?(r.x/=s,r.y/=s,!0===n.hasZ&&(r.z/=s),!0===n.hasM&&(r.m/=s),new b$9(r)):o>0?(e.x/=o,e.y/=o,!0===n.hasZ&&(r.z/=o),!0===n.hasM&&(e.m/=o),new b$9(e)):null}function u$3(n){if(0===n.points.length)return null;let e=0,r=0,o=0,s=0;for(let t=0;t<n.points.length;t++){const c=n.getPoint(t);!0===c.hasZ&&(o+=c.z),!0===c.hasM&&(s+=c.m),e+=c.x,r+=c.y,s+=c.m;}const c={x:e/n.points.length,y:r/n.points.length,spatialReference:null};return c.spatialReference=n.spatialReference.toJSON(),!0===n.hasZ&&(c.z=o/n.points.length),!0===n.hasM&&(c.m=s/n.points.length),new b$9(c)}function y$3(t,n){return t.x*n.x+t.y*n.y}function x$4(t,n){return t.x*n.y-n.x*t.y}function m$1(t,n,e=0){for(;t<e;)t+=n;const r=e+n;for(;t>=r;)t-=n;return t}function g$4(t,n){return Math.atan2(n.y-t.y,n.x-t.x)}function p$2(t,n){return m$1(g$4(t,n),2*Math.PI)*(180/Math.PI)}function M$5(t,n){return m$1(Math.PI/2-g$4(t,n),2*Math.PI)*(180/Math.PI)}function z$4(t,n,e){const r={x:t.x-n.x,y:t.y-n.y},o={x:e.x-n.x,y:e.y-n.y};return Math.atan2(x$4(r,o),y$3(r,o))}function P$6(t,n,e){return m$1(z$4(t,n,e),2*Math.PI)*(180/Math.PI)}function d$3(t,n,e){return m$1(-1*z$4(t,n,e),2*Math.PI)*(180/Math.PI)}o$4[9002]=.3048,o$4[9003]=.3048006096012192,o$4[9095]=.3048007491;const I$4=[0,0];function Z$3(t){for(let e=0;e<t.length;e++){const r=t[e];for(let s=0;s<r.length-1;s++){const o=r[s],c=r[s+1];for(let r=e+1;r<t.length;r++)for(let e=0;e<t[r].length-1;e++){const s=t[r][e],i=t[r][e+1];if(z$6(o,c,s,i,I$4)&&!(I$4[0]===o[0]&&I$4[1]===o[1]||I$4[0]===s[0]&&I$4[1]===s[1]||I$4[0]===c[0]&&I$4[1]===c[1]||I$4[0]===i[0]&&I$4[1]===i[1]))return !0}}const o=r.length;if(!(o<3))for(let t=0;t<=o-2;t++){const e=r[t],s=r[t+1];for(let c=t+2;c<=o-2;c++){const t=r[c],o=r[c+1];if(z$6(e,s,t,o,I$4)&&!(I$4[0]===e[0]&&I$4[1]===e[1]||I$4[0]===t[0]&&I$4[1]===t[1]||I$4[0]===s[0]&&I$4[1]===s[1]||I$4[0]===o[0]&&I$4[1]===o[1]))return !0}}}return !1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function D$5(e){return e instanceof b$5||"object"==typeof e&&"FeatureSetReader"===e.type}function P$5(P,M){P.ringisclockwise=function(e,r){return M(e,r,(function(e,r,a){z$5(a,1,1);let l=[],s=!1,f=!1;if(null===a[0])return !1;if(I$7(a[0])){for(const e of a[0]){if(!(e instanceof b$9))throw new Error("Invalid Argument");l.push(e.hasZ?e.hasM?[e.x,e.y,e.z,e.m]:[e.x,e.y,e.z]:[e.x,e.y]);}l.length>0&&(s=a[0][0].hasZ,f=a[0][0].hasM);}else if(a[0]instanceof i$6)l=a[0]._elements,l.length>0&&(s=a[0]._hasZ,f=a[0]._hasM);else {if(!J$3(a[0]))throw new Error("Invalid Argument");for(const e of a[0].toArray()){if(!(e instanceof b$9))throw new Error("Invalid Argument");l.push(e.hasZ?e.hasM?[e.x,e.y,e.z,e.m]:[e.x,e.y,e.z]:[e.x,e.y]);}l.length>0&&(s=a[0].get(0).hasZ,f=a[0].get(0).hasM);}return !(l.length<3)&&f$7(l,f,s)}))},P.polygon=function(n,i){return M(n,i,(function(i,o,s){z$5(s,1,1);let f=null;if(s[0]instanceof h$9){if(f=ae$3(b$5.parseGeometryFromDictionary(s[0]),n.spatialReference),f instanceof v$6==!1)throw new Error("Illegal Parameter")}else f=s[0]instanceof v$6?d$6(s[0].toJSON()):ae$3(new v$6(JSON.parse(s[0])),n.spatialReference);if(null!==f&&!1===f.spatialReference.equals(n.spatialReference))throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return oe$2(f)}))},P.polyline=function(n,i){return M(n,i,(function(i,o,s){z$5(s,1,1);let f=null;if(s[0]instanceof h$9){if(f=ae$3(b$5.parseGeometryFromDictionary(s[0]),n.spatialReference),f instanceof m$5==!1)throw new Error("Illegal Parameter")}else f=s[0]instanceof m$5?d$6(s[0].toJSON()):ae$3(new m$5(JSON.parse(s[0])),n.spatialReference);if(null!==f&&!1===f.spatialReference.equals(n.spatialReference))throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return oe$2(f)}))},P.point=function(n,i){return M(n,i,(function(i,o,s){z$5(s,1,1);let f=null;if(s[0]instanceof h$9){if(f=ae$3(b$5.parseGeometryFromDictionary(s[0]),n.spatialReference),f instanceof b$9==!1)throw new Error("Illegal Parameter")}else f=s[0]instanceof b$9?d$6(s[0].toJSON()):ae$3(new b$9(JSON.parse(s[0])),n.spatialReference);if(null!==f&&!1===f.spatialReference.equals(n.spatialReference))throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return oe$2(f)}))},P.multipoint=function(n,i){return M(n,i,(function(i,o,s){z$5(s,1,1);let f=null;if(s[0]instanceof h$9){if(f=ae$3(b$5.parseGeometryFromDictionary(s[0]),n.spatialReference),f instanceof m$6==!1)throw new Error("Illegal Parameter")}else f=s[0]instanceof m$6?d$6(s[0].toJSON()):ae$3(new m$6(JSON.parse(s[0])),n.spatialReference);if(null!==f&&!1===f.spatialReference.equals(n.spatialReference))throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return oe$2(f)}))},P.extent=function(n,i){return M(n,i,(function(i,o,f){f=me$2(f),z$5(f,1,1);let c=null;if(f[0]instanceof h$9)c=ae$3(b$5.parseGeometryFromDictionary(f[0]),n.spatialReference);else if(f[0]instanceof b$9){const e={xmin:f[0].x,ymin:f[0].y,xmax:f[0].x,ymax:f[0].y,spatialReference:f[0].spatialReference.toJSON()},r=f[0];r.hasZ?(e.zmin=r.z,e.zmax=r.z):r.hasM&&(e.mmin=r.m,e.mmax=r.m),c=d$6(e);}else c=f[0]instanceof v$6||f[0]instanceof m$5||f[0]instanceof m$6?d$6(f[0].extent.toJSON()):f[0]instanceof M$7?d$6(f[0].toJSON()):ae$3(new M$7(JSON.parse(f[0])),n.spatialReference);if(null!==c&&!1===c.spatialReference.equals(n.spatialReference))throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return oe$2(c)}))},P.geometry=function(n,i){return M(n,i,(function(i,o,s){z$5(s,1,1);let f=null;if(f=D$5(s[0])?ae$3(s[0].geometry(),n.spatialReference):s[0]instanceof h$9?ae$3(b$5.parseGeometryFromDictionary(s[0]),n.spatialReference):ae$3(d$6(JSON.parse(s[0])),n.spatialReference),null!==f&&!1===f.spatialReference.equals(n.spatialReference))throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return oe$2(f)}))},P.setgeometry=function(e,r){return M(e,r,(function(e,r,n){if(z$5(n,2,2),!D$5(n[0]))throw new Error("Illegal Argument");if(!0===n[0].immutable)throw new Error("Feature is Immutable");if(!(n[1]instanceof p$5||null===n[1]))throw new Error("Illegal Argument");return n[0]._geometry=n[1],R$3}))},P.feature=function(n,t){return M(n,t,(function(t,i,o){if(0===o.length)throw new Error("Missing Parameters");let l=null;if(1===o.length)if(Z$4(o[0]))l=b$5.fromJson(JSON.parse(o[0]));else if(D$5(o[0]))l=b$5.createFromArcadeFeature(o[0]);else if(o[0]instanceof p$5)l=b$5.createFromGraphicLikeObject(o[0],null,null);else {if(!(o[0]instanceof h$9))throw new Error("Illegal Argument");{let n=o[0].hasField("geometry")?o[0].field("geometry"):null,t=o[0].hasField("attributes")?o[0].field("attributes"):null;null!==n&&n instanceof h$9&&(n=b$5.parseGeometryFromDictionary(n)),null!==t&&(t=b$5.parseAttributesFromDictionary(t)),l=b$5.createFromGraphicLikeObject(n,t,null);}}else if(2===o.length){let n=null,t=null;if(null!==o[0])if(o[0]instanceof p$5)n=o[0];else {if(!(n instanceof h$9))throw new Error("Illegal Argument");n=b$5.parseGeometryFromDictionary(o[0]);}if(null!==o[1]){if(!(o[1]instanceof h$9))throw new Error("Illegal Argument");t=b$5.parseAttributesFromDictionary(o[1]);}l=b$5.createFromGraphicLikeObject(n,t,null);}else {let n=null;const t={};if(null!==o[0])if(o[0]instanceof p$5)n=o[0];else {if(!(n instanceof h$9))throw new Error("Illegal Argument");n=b$5.parseGeometryFromDictionary(o[0]);}for(let e=1;e<o.length;e+=2){const r=$$4(o[e]),n=o[e+1];if(!(null==n||Z$4(n)||isNaN(n)||E$6(n)||Y$2(n)||v$5(n)))throw new Error("Illegal Argument");if(C$5(n)||!1===w$4(n))throw new Error("Illegal Argument");t[r]=n===R$3?null:n;}l=b$5.createFromGraphicLikeObject(n,t,null);}return l._geometry=ae$3(l.geometry(),n.spatialReference),l.immutable=!1,l}))},P.dictionary=function(r,n){return M(r,n,(function(r,n,t){if(0===t.length){const r=new h$9;return r.immutable=!1,r}if(1===t.length&&Z$4(t[0]))try{const r=JSON.parse(t[0]),n=h$9.convertObjectToArcadeDictionary(r,!1);return n.immutable=!1,n}catch(s){throw new Error("Missing Parameters or Illegal Json")}if(t.length%2!=0)throw new Error("Missing Parameters");const a={};for(let e=0;e<t.length;e+=2){const r=$$4(t[e]),n=t[e+1];if(!(null==n||Z$4(n)||isNaN(n)||E$6(n)||Y$2(n)||v$5(n)||I$7(n)||J$3(n)))throw new Error("Illegal Argument");if(C$5(n))throw new Error("Illegal Argument");a[r]=n===R$3?null:n;}const l=new h$9(a);return l.immutable=!1,l}))},P.haskey=function(r,n){return M(r,n,(function(r,n,i){z$5(i,2,2);const o=$$4(i[1]);if(D$5(i[0]))return i[0].hasField(o);if(i[0]instanceof h$9)return i[0].hasField(o);throw new Error("Illegal Argument")}))},P.indexof=function(e,r){return M(e,r,(function(e,r,n){z$5(n,2,2);const a=n[1];if(I$7(n[0])){for(let e=0;e<n[0].length;e++)if(W$2(a,n[0][e]))return e;return -1}if(J$3(n[0])){const e=n[0].length();for(let r=0;r<e;r++)if(W$2(a,n[0].get(r)))return r;return -1}throw new Error("Illegal Argument")}))},P.angle=function(e,r){return M(e,r,(function(e,r,n){if(n=me$2(n),z$5(n,2,3),!(n[0]instanceof b$9))throw new Error("Illegal Argument");if(!(n[1]instanceof b$9))throw new Error("Illegal Argument");if(n.length>2&&!(n[2]instanceof b$9))throw new Error("Illegal Argument");return 2===n.length?p$2(n[0],n[1]):P$6(n[0],n[1],n[2])}))},P.bearing=function(e,r){return M(e,r,(function(e,r,n){if(n=me$2(n),z$5(n,2,3),!(n[0]instanceof b$9))throw new Error("Illegal Argument");if(!(n[1]instanceof b$9))throw new Error("Illegal Argument");if(n.length>2&&!(n[2]instanceof b$9))throw new Error("Illegal Argument");return 2===n.length?M$5(n[0],n[1]):d$3(n[0],n[1],n[2])}))},P.isselfintersecting=function(e,r){return M(e,r,(function(r,n,a){a=me$2(a),z$5(a,1,1);let l=a[0];if(l instanceof v$6)return l.isSelfIntersecting;if(l instanceof m$5)return l=l.paths,Z$3(l);if(l instanceof m$6){const e=l.points;for(let r=0;r<e.length;r++)for(let n=0;n<e.length;n++)if(n!==r){let t=!0;for(let i=0;i<e[r].length;i++)if(e[r][i]!==e[n][i]){t=!1;break}if(!0===t)return !0}}return !(!I$7(l)&&!J$3(l))&&(l=he$2(l,e.spatialReference),null!==l&&(l=l.paths),Z$3(l))}))};}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$5(e){if(void 0===e)return null;if("number"==typeof e)return e;let r=e.toLowerCase();switch(r=r.replace(/\s/g,""),r=r.replace(/-/g,""),r){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":return 109413;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 109405;case"nm":case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 109409}return null}function s$5(r){if(null===r)return null;switch(r.type){case"polygon":case"multipoint":case"polyline":return r.extent;case"point":return new M$7({xmin:r.x,ymin:r.y,xmax:r.x,ymax:r.y,spatialReference:r.spatialReference});case"extent":return r}return null}function a$2(e){if(void 0===e)return null;if("number"==typeof e)return e;let r=e.toLowerCase();switch(r=r.replace(/\s/g,""),r=r.replace(/-/g,""),r){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":return 9035;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 9002;case"nm":case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 9030}return null}function c$2(e){if(null===e)return null;const r=e.clone();return void 0!==e.cache._geVersion&&(r.cache._geVersion=e.cache._geVersion),r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let M$4=null;function P$4(e){return 0===a$5.indexOf("4.")?v$6.fromExtent(e):new v$6({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}function Z$2(n){M$4=n;}function v$4(n,e){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let r=1;if(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid){r=s$6(n.spatialReference)/H$4(n.spatialReference);}let t=0;if("polyline"===n.type)for(const i of n.paths)for(let n=1;n<i.length;n++)t+=e$6(i[n],i[n-1],r);else if("polygon"===n.type)for(const i of n.rings){for(let n=1;n<i.length;n++)t+=e$6(i[n],i[n-1],r);(i[0][0]!==i[i.length-1][0]||i[0][1]!==i[i.length-1][1]||void 0!==i[0][2]&&i[0][2]!==i[i.length-1][2])&&(t+=e$6(i[0],i[i.length-1],r));}else "extent"===n.type&&(t+=2*e$6([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],r),t+=2*e$6([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],r),t*=2,t+=4*Math.abs(O$5(n.zmax,0)*r-O$5(n.zmin,0)*r));const l=new m$5({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,t]]});return M$4.planarLength(l,e)}function z$3(n,I){function y(n){if(z$5(n,2,2),n[0]instanceof p$5&&n[1]instanceof p$5);else if(n[0]instanceof p$5&&null===n[1]);else if(n[1]instanceof p$5&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}n.disjoint=function(n,e){return I(n,e,(function(n,e,r){return y(r=me$2(r)),null===r[0]||null===r[1]||M$4.disjoint(r[0],r[1])}))},n.intersects=function(n,e){return I(n,e,(function(n,e,r){return y(r=me$2(r)),null!==r[0]&&null!==r[1]&&M$4.intersects(r[0],r[1])}))},n.touches=function(n,e){return I(n,e,(function(n,e,r){return y(r=me$2(r)),null!==r[0]&&null!==r[1]&&M$4.touches(r[0],r[1])}))},n.crosses=function(n,e){return I(n,e,(function(n,e,r){return y(r=me$2(r)),null!==r[0]&&null!==r[1]&&M$4.crosses(r[0],r[1])}))},n.within=function(n,e){return I(n,e,(function(n,e,r){return y(r=me$2(r)),null!==r[0]&&null!==r[1]&&M$4.within(r[0],r[1])}))},n.contains=function(n,e){return I(n,e,(function(n,e,r){return y(r=me$2(r)),null!==r[0]&&null!==r[1]&&M$4.contains(r[0],r[1])}))},n.overlaps=function(n,e){return I(n,e,(function(n,e,r){return y(r=me$2(r)),null!==r[0]&&null!==r[1]&&M$4.overlaps(r[0],r[1])}))},n.equals=function(n,e){return I(n,e,(function(n,e,r){return z$5(r,2,2),r[0]===r[1]||(r[0]instanceof p$5&&r[1]instanceof p$5?M$4.equals(r[0],r[1]):!(!E$6(r[0])||!E$6(r[1]))&&r[0].getTime()===r[1].getTime())}))},n.relate=function(n,e){return I(n,e,(function(n,e,r){if(r=me$2(r),z$5(r,3,3),r[0]instanceof p$5&&r[1]instanceof p$5)return M$4.relate(r[0],r[1],$$4(r[2]));if(r[0]instanceof p$5&&null===r[1])return !1;if(r[1]instanceof p$5&&null===r[0])return !1;if(null===r[0]&&null===r[1])return !1;throw new Error("Illegal Argument")}))},n.intersection=function(n,e){return I(n,e,(function(n,e,r){return y(r=me$2(r)),null===r[0]||null===r[1]?null:M$4.intersect(r[0],r[1])}))},n.union=function(n,r){return I(n,r,(function(r,t,i){const o=[];if(0===(i=me$2(i)).length)throw new Error("Function called with wrong number of Parameters");if(1===i.length)if(I$7(i[0])){const n=me$2(i[0]);for(let e=0;e<n.length;e++)if(null!==n[e]){if(!(n[e]instanceof p$5))throw new Error("Illegal Argument");o.push(n[e]);}}else {if(!J$3(i[0])){if(i[0]instanceof p$5)return ae$3(c$2(i[0]),n.spatialReference);if(null===i[0])return null;throw new Error("Illegal Argument")}{const n=me$2(i[0].toArray());for(let e=0;e<n.length;e++)if(null!==n[e]){if(!(n[e]instanceof p$5))throw new Error("Illegal Argument");o.push(n[e]);}}}else for(let n=0;n<i.length;n++)if(null!==i[n]){if(!(i[n]instanceof p$5))throw new Error("Illegal Argument");o.push(i[n]);}return 0===o.length?null:M$4.union(o)}))},n.difference=function(n,r){return I(n,r,(function(n,r,t){return y(t=me$2(t)),null!==t[0]&&null===t[1]?c$2(t[0]):null===t[0]?null:M$4.difference(t[0],t[1])}))},n.symmetricdifference=function(n,r){return I(n,r,(function(n,r,t){return y(t=me$2(t)),null===t[0]&&null===t[1]?null:null===t[0]?c$2(t[1]):null===t[1]?c$2(t[0]):M$4.symmetricDifference(t[0],t[1])}))},n.clip=function(n,e){return I(n,e,(function(n,e,r){if(r=me$2(r),z$5(r,2,2),!(r[1]instanceof M$7)&&null!==r[1])throw new Error("Illegal Argument");if(null===r[0])return null;if(!(r[0]instanceof p$5))throw new Error("Illegal Argument");return null===r[1]?null:M$4.clip(r[0],r[1])}))},n.cut=function(n,r){return I(n,r,(function(n,r,t){if(t=me$2(t),z$5(t,2,2),!(t[1]instanceof m$5)&&null!==t[1])throw new Error("Illegal Argument");if(null===t[0])return [];if(!(t[0]instanceof p$5))throw new Error("Illegal Argument");return null===t[1]?[c$2(t[0])]:M$4.cut(t[0],t[1])}))},n.area=function(n,e){return I(n,e,(function(e,t,o){if(z$5(o,1,2),null===(o=me$2(o))[0])return 0;if(I$7(o[0])||J$3(o[0])){const e=de$2(o[0],n.spatialReference);return null===e?0:M$4.planarArea(e,r$5(O$5(o[1],-1)))}if(!(o[0]instanceof p$5))throw new Error("Illegal Argument");return M$4.planarArea(o[0],r$5(O$5(o[1],-1)))}))},n.areageodetic=function(n,e){return I(n,e,(function(e,t,o){if(z$5(o,1,2),null===(o=me$2(o))[0])return 0;if(I$7(o[0])||J$3(o[0])){const e=de$2(o[0],n.spatialReference);return null===e?0:M$4.geodesicArea(e,r$5(O$5(o[1],-1)))}if(!(o[0]instanceof p$5))throw new Error("Illegal Argument");return M$4.geodesicArea(o[0],r$5(O$5(o[1],-1)))}))},n.length=function(n,e){return I(n,e,(function(e,r,o){if(z$5(o,1,2),null===(o=me$2(o))[0])return 0;if(I$7(o[0])||J$3(o[0])){const e=he$2(o[0],n.spatialReference);return null===e?0:M$4.planarLength(e,a$2(O$5(o[1],-1)))}if(!(o[0]instanceof p$5))throw new Error("Illegal Argument");return M$4.planarLength(o[0],a$2(O$5(o[1],-1)))}))},n.length3d=function(n,e){return I(n,e,(function(e,r,o){if(z$5(o,1,2),null===(o=me$2(o))[0])return 0;if(I$7(o[0])||J$3(o[0])){const e=he$2(o[0],n.spatialReference);return null===e?0:!0===e.hasZ?v$4(e,a$2(O$5(o[1],-1))):M$4.planarLength(e,a$2(O$5(o[1],-1)))}if(!(o[0]instanceof p$5))throw new Error("Illegal Argument");return !0===o[0].hasZ?v$4(o[0],a$2(O$5(o[1],-1))):M$4.planarLength(o[0],a$2(O$5(o[1],-1)))}))},n.lengthgeodetic=function(n,e){return I(n,e,(function(e,r,o){if(z$5(o,1,2),null===(o=me$2(o))[0])return 0;if(I$7(o[0])||J$3(o[0])){const e=he$2(o[0],n.spatialReference);return null===e?0:M$4.geodesicLength(e,a$2(O$5(o[1],-1)))}if(!(o[0]instanceof p$5))throw new Error("Illegal Argument");return M$4.geodesicLength(o[0],a$2(O$5(o[1],-1)))}))},n.distance=function(n,e){return I(n,e,(function(e,r,o){o=me$2(o),z$5(o,2,3);let u=o[0];(I$7(o[0])||J$3(o[0]))&&(u=pe$2(o[0],n.spatialReference));let s=o[1];if((I$7(o[1])||J$3(o[1]))&&(s=pe$2(o[1],n.spatialReference)),!(u instanceof p$5))throw new Error("Illegal Argument");if(!(s instanceof p$5))throw new Error("Illegal Argument");return M$4.distance(u,s,a$2(O$5(o[2],-1)))}))},n.distancegeodetic=function(n,e){return I(n,e,(function(n,e,r){r=me$2(r),z$5(r,2,3);const o=r[0],u=r[1];if(!(o instanceof b$9))throw new Error("Illegal Argument");if(!(u instanceof b$9))throw new Error("Illegal Argument");const f=new m$5({paths:[],spatialReference:o.spatialReference});return f.addPath([o,u]),M$4.geodesicLength(f,a$2(O$5(r[2],-1)))}))},n.densify=function(n,e){return I(n,e,(function(n,e,r){if(r=me$2(r),z$5(r,2,3),null===r[0])return null;if(!(r[0]instanceof p$5))throw new Error("Illegal Argument");const o=ee$2(r[1]);if(isNaN(o))throw new Error("Illegal Argument");if(o<=0)throw new Error("Illegal Argument");return r[0]instanceof v$6||r[0]instanceof m$5?M$4.densify(r[0],o,a$2(O$5(r[2],-1))):r[0]instanceof M$7?M$4.densify(P$4(r[0]),o,a$2(O$5(r[2],-1))):r[0]}))},n.densifygeodetic=function(n,e){return I(n,e,(function(n,e,r){if(r=me$2(r),z$5(r,2,3),null===r[0])return null;if(!(r[0]instanceof p$5))throw new Error("Illegal Argument");const o=ee$2(r[1]);if(isNaN(o))throw new Error("Illegal Argument");if(o<=0)throw new Error("Illegal Argument");return r[0]instanceof v$6||r[0]instanceof m$5?M$4.geodesicDensify(r[0],o,a$2(O$5(r[2],-1))):r[0]instanceof M$7?M$4.geodesicDensify(P$4(r[0]),o,a$2(O$5(r[2],-1))):r[0]}))},n.generalize=function(n,e){return I(n,e,(function(n,e,r){if(r=me$2(r),z$5(r,2,4),null===r[0])return null;if(!(r[0]instanceof p$5))throw new Error("Illegal Argument");const o=ee$2(r[1]);if(isNaN(o))throw new Error("Illegal Argument");return M$4.generalize(r[0],o,ie$3(O$5(r[2],!0)),a$2(O$5(r[3],-1)))}))},n.buffer=function(n,r){return I(n,r,(function(n,r,o){if(o=me$2(o),z$5(o,2,3),null===o[0])return null;if(!(o[0]instanceof p$5))throw new Error("Illegal Argument");const u=ee$2(o[1]);if(isNaN(u))throw new Error("Illegal Argument");return 0===u?c$2(o[0]):M$4.buffer(o[0],u,a$2(O$5(o[2],-1)))}))},n.buffergeodetic=function(n,r){return I(n,r,(function(n,r,o){if(o=me$2(o),z$5(o,2,3),null===o[0])return null;if(!(o[0]instanceof p$5))throw new Error("Illegal Argument");const u=ee$2(o[1]);if(isNaN(u))throw new Error("Illegal Argument");return 0===u?c$2(o[0]):M$4.geodesicBuffer(o[0],u,a$2(O$5(o[2],-1)))}))},n.offset=function(n,e){return I(n,e,(function(n,e,r){if(r=me$2(r),z$5(r,2,6),null===r[0])return null;if(!(r[0]instanceof v$6||r[0]instanceof m$5))throw new Error("Illegal Argument");const o=ee$2(r[1]);if(isNaN(o))throw new Error("Illegal Argument");const f=ee$2(O$5(r[4],10));if(isNaN(f))throw new Error("Illegal Argument");const a=ee$2(O$5(r[5],0));if(isNaN(a))throw new Error("Illegal Argument");return M$4.offset(r[0],o,a$2(O$5(r[2],-1)),$$4(O$5(r[3],"round")).toLowerCase(),f,a)}))},n.rotate=function(n,e){return I(n,e,(function(n,e,r){r=me$2(r),z$5(r,2,3);let t=r[0];if(null===t)return null;if(!(t instanceof p$5))throw new Error("Illegal Argument");t instanceof M$7&&(t=v$6.fromExtent(t));const o=ee$2(r[1]);if(isNaN(o))throw new Error("Illegal Argument");const u=O$5(r[2],null);if(null===u)return M$4.rotate(t,o);if(u instanceof b$9)return M$4.rotate(t,o,u);throw new Error("Illegal Argument")}))},n.centroid=function(n,r){return I(n,r,(function(r,t,o){if(o=me$2(o),z$5(o,1,1),null===o[0])return null;let u=o[0];if((I$7(o[0])||J$3(o[0]))&&(u=pe$2(o[0],n.spatialReference)),null===u)return null;if(!(u instanceof p$5))throw new Error("Illegal Argument");return u instanceof b$9?ae$3(c$2(o[0]),n.spatialReference):u instanceof v$6?u.centroid:u instanceof m$5?l$4(u):u instanceof m$6?u$3(u):u instanceof M$7?u.center:null}))},n.multiparttosinglepart=function(n,r){return I(n,r,(function(r,t,o){o=me$2(o),z$5(o,1,1);const u=[];if(null===o[0])return null;if(!(o[0]instanceof p$5))throw new Error("Illegal Argument");if(o[0]instanceof b$9)return [ae$3(c$2(o[0]),n.spatialReference)];if(o[0]instanceof M$7)return [ae$3(c$2(o[0]),n.spatialReference)];const f=M$4.simplify(o[0]);if(f instanceof v$6){const n=[],e=[];for(let r=0;r<f.rings.length;r++)if(f.isClockwise(f.rings[r])){const e=d$6({rings:[f.rings[r]],hasZ:!0===f.hasZ,hasM:!0===f.hasM,spatialReference:f.spatialReference.toJSON()});n.push(e);}else e.push({ring:f.rings[r],pt:f.getPoint(r,0)});for(let r=0;r<e.length;r++)for(let t=0;t<n.length;t++)if(n[t].contains(e[r].pt)){n[t].addRing(e[r].ring);break}return n}if(f instanceof m$5){const n=[];for(let e=0;e<f.paths.length;e++){const r=d$6({paths:[f.paths[e]],hasZ:!0===f.hasZ,hasM:!0===f.hasM,spatialReference:f.spatialReference.toJSON()});n.push(r);}return n}if(o[0]instanceof m$6){const r=ae$3(c$2(o[0]),n.spatialReference);for(let n=0;n<r.points.length;n++)u.push(r.getPoint(n));return u}return null}))},n.issimple=function(n,e){return I(n,e,(function(n,e,r){if(r=me$2(r),z$5(r,1,1),null===r[0])return !0;if(!(r[0]instanceof p$5))throw new Error("Illegal Argument");return M$4.isSimple(r[0])}))},n.simplify=function(n,e){return I(n,e,(function(n,e,r){if(r=me$2(r),z$5(r,1,1),null===r[0])return null;if(!(r[0]instanceof p$5))throw new Error("Illegal Argument");return M$4.simplify(r[0])}))};}

const geomsync = /*#__PURE__*/Object.freeze({
  __proto__: null,
  registerFunctions: z$3,
  setGeometryEngine: Z$2
});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$3(n,t,r){return void 0===r||0==+r?Math[n](t):(t=+t,r=+r,isNaN(t)||"number"!=typeof r||r%1!=0?NaN:(t=t.toString().split("e"),+((t=(t=Math[n](+(t[0]+"e"+(t[1]?+t[1]-r:-r)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+r:r))))}function N$3(N,h){function m(n,t,r){const u=ee$2(n);return isNaN(u)?u:isNaN(t)||isNaN(r)||t>r?NaN:u<t?t:u>r?r:u}N.number=function(f,a){return h(f,a,(function(f,a,c){z$5(c,1,2);const l=c[0];if(Y$2(l))return l;if(null===l)return 0;if(E$6(l))return Number(l);if(v$5(l))return Number(l);if(I$7(l))return NaN;if(""===l)return Number(l);if(void 0===l)return Number(l);if(Z$4(l)){if(void 0!==c[1]){let n=_$2(c[1],"‰","");return n=_$2(n,"¤",""),p$4(l,{pattern:n})}return Number(l.trim())}return Number(l)}))},N.abs=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,1,1),Math.abs(ee$2(u[0]))}))},N.acos=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,1,1),Math.acos(ee$2(u[0]))}))},N.asin=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,1,1),Math.asin(ee$2(u[0]))}))},N.atan=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,1,1),Math.atan(ee$2(u[0]))}))},N.atan2=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,2,2),Math.atan2(ee$2(u[0]),ee$2(u[1]))}))},N.ceil=function(t,r){return h(t,r,(function(t,r,u){if(z$5(u,1,2),2===u.length){let n=ee$2(u[1]);return isNaN(n)&&(n=0),l$3("ceil",ee$2(u[0]),-1*n)}return Math.ceil(ee$2(u[0]))}))},N.round=function(t,r){return h(t,r,(function(t,r,u){if(z$5(u,1,2),2===u.length){let n=ee$2(u[1]);return isNaN(n)&&(n=0),l$3("round",ee$2(u[0]),-1*n)}return Math.round(ee$2(u[0]))}))},N.floor=function(t,r){return h(t,r,(function(t,r,u){if(z$5(u,1,2),2===u.length){let n=ee$2(u[1]);return isNaN(n)&&(n=0),l$3("floor",ee$2(u[0]),-1*n)}return Math.floor(ee$2(u[0]))}))},N.cos=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,1,1),Math.cos(ee$2(u[0]))}))},N.isnan=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,1,1),"number"==typeof u[0]&&isNaN(u[0])}))},N.exp=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,1,1),Math.exp(ee$2(u[0]))}))},N.log=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,1,1),Math.log(ee$2(u[0]))}))},N.pow=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,2,2),ee$2(u[0])**ee$2(u[1])}))},N.random=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,0,0),Math.random()}))},N.sin=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,1,1),Math.sin(ee$2(u[0]))}))},N.sqrt=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,1,1),Math.sqrt(ee$2(u[0]))}))},N.tan=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,1,1),Math.tan(ee$2(u[0]))}))},N.defaultvalue=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,2,2),null===u[0]||""===u[0]||void 0===u[0]?u[1]:u[0]}))},N.isempty=function(t,r){return h(t,r,(function(t,r,u){return z$5(u,1,1),null===u[0]||(""===u[0]||void 0===u[0])}))},N.boolean=function(t,r){return h(t,r,(function(t,r,u){z$5(u,1,1);const e=u[0];return ie$3(e)}))},N.constrain=function(t,r){return h(t,r,(function(t,r,u){z$5(u,3,3);const i=ee$2(u[1]),o=ee$2(u[2]);if(I$7(u[0])){const n=[];for(const t of u[0])n.push(m(t,i,o));return n}if(J$3(u[0])){const n=[];for(let t=0;t<u[0].length();t++)n.push(m(u[0].get(t),i,o));return n}return m(u[0],i,o)}))};}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s$4(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}function c$1(e){const t=s$4(e);let n=0;for(let r=0;r<e.length;r++)n+=(t-e[r])**2;return n/e.length}function u$2(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function i$3(e,s){const c=[],u={},i=[];for(let o=0;o<e.length;o++){if(void 0!==e[o]&&null!==e[o]&&e[o]!==R$3){const t=e[o];if(Y$2(t)||Z$4(t))void 0===u[t]&&(c.push(t),u[t]=1);else {let e=!1;for(let n=0;n<i.length;n++)!0===W$2(i[n],t)&&(e=!0);!1===e&&(i.push(t),c.push(t));}}if(c.length>=s&&-1!==s)return c}return c}function l$2(t,n,r=1e3){switch(t.toLowerCase()){case"distinct":return i$3(n,r);case"avg":case"mean":return s$4(Q$3(n));case"min":return Math.min.apply(Math,Q$3(n));case"sum":return u$2(Q$3(n));case"max":return Math.max.apply(Math,Q$3(n));case"stdev":case"stddev":return Math.sqrt(c$1(Q$3(n)));case"var":case"variance":return c$1(Q$3(n));case"count":return n.length}return 0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i$2(n,r,i,o){if(1===o.length){if(I$7(o[0]))return l$2(n,o[0],-1);if(J$3(o[0]))return l$2(n,o[0].toArray(),-1)}return l$2(n,o,-1)}function o$3(e,o){e.stdev=function(n,t){return o(n,t,(function(n,t,r){return i$2("stdev",n,t,r)}))},e.variance=function(n,t){return o(n,t,(function(n,t,r){return i$2("variance",n,t,r)}))},e.average=function(n,t){return o(n,t,(function(n,t,r){return i$2("mean",n,t,r)}))},e.mean=function(n,t){return o(n,t,(function(n,t,r){return i$2("mean",n,t,r)}))},e.sum=function(n,t){return o(n,t,(function(n,t,r){return i$2("sum",n,t,r)}))},e.min=function(n,t){return o(n,t,(function(n,t,r){return i$2("min",n,t,r)}))},e.max=function(n,t){return o(n,t,(function(n,t,r){return i$2("max",n,t,r)}))},e.distinct=function(n,t){return o(n,t,(function(n,t,r){return i$2("distinct",n,t,r)}))},e.count=function(e,i){return o(e,i,(function(e,i,o){if(z$5(o,1,1),I$7(o[0])||Z$4(o[0]))return o[0].length;if(J$3(o[0]))return o[0].length();throw new Error("Invalid Parameters for Count")}))};}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=e=>(t,r,n)=>(n=n||14,+e(t,r).toFixed(n)),o$2=(e,t)=>e+t,d$2=(e,t)=>e*t,l$1=(e,t)=>e/t,h$4=(e,t,r)=>c(o$2)(e,t,r),_$1=(e,t,r)=>c(d$2)(e,t,r),f$2=(e,t,r)=>c(l$1)(e,t,r),g$3=360,w$2=400,E$3=2*Math.PI,D$4=3600,A$2=3240,p$1=60,S$2=60,R$2=180*D$4/Math.PI,T$2=g$3*p$1*S$2,M$3=90*D$4,v$3=180*D$4,F$3=270*D$4,I$3=String.fromCharCode(7501),U$2="°";function x$3(e){if(!1===Z$4(e))throw new Error("Invalid Parameter");return e}function O$2(e,t){const r=10**t;return Math.round(e*r)/r}function G$3(e,t){return e%t}function N$2(e){const t=parseFloat(e.toString().replace(Math.trunc(e).toString(),"0"))*Math.sign(e);if(e<0){return {fraction:t,integer:Math.ceil(e)}}return {fraction:t,integer:Math.floor(e)}}function b$3(e,t){switch(e){case 0:return "SHORT"===t?"N":"North";case 1:return "SHORT"===t?"E":"East";case 2:return "SHORT"===t?"S":"South";case 3:return "SHORT"===t?"W":"West"}}function H$2(e,t,r){for(;e.length<r;)e=t+e;return e}function C$4(e,t){return e-Math.floor(e/t)*t}function y$2(e){switch(e){case 6:case 1:return g$3;case 4:return E$3;case 5:return w$2;case 2:return T$2;case 7:return p$1;case 8:return S$2;default:throw new Error("Unnexpected evaluations")}}function P$3(e){switch(e.toUpperCase().trim()){case"NORTH":case"NORTHAZIMUTH":case"NORTH AZIMUTH":return 1;case"POLAR":return 2;case"QUADRANT":return 3;case"SOUTH":case"SOUTHAZIMUTH":case"SOUTH AZIMUTH":return 4}throw new Error("Unsupported direction type")}function k$3(e){switch(e.toUpperCase().trim()){case"D":case"DD":case"DECIMALDEGREE":case"DECIMAL DEGREE":case"DEGREE":case"DECIMALDEGREES":case"DECIMAL DEGREES":case"DEGREES":return 1;case"DMS":case"DEGREESMINUTESSECONDS":case"DEGREES MINUTES SECONDS":return 3;case"R":case"RAD":case"RADS":case"RADIAN":case"RADIANS":return 4;case"G":case"GON":case"GONS":case"GRAD":case"GRADS":case"GRADIAN":case"GRADIANS":return 5}throw new Error("Unsupported units")}class L$3{constructor(e,t,r){this.m_degrees=e,this.m_minutes=t,this.m_seconds=r;}get_field(e){switch(e){case 1:case 6:return this.m_degrees;case 7:return this.m_minutes;case 2:case 8:return this.m_seconds;default:throw new Error("Unnexpected evaluation")}}static seconds_to_DMS(e){const t=N$2(e).fraction;let r=N$2(e).integer;const n=Math.floor(r/D$4);r-=n*D$4;const s=Math.floor(r/S$2);return r-=s*S$2,new L$3(n,s,r+t)}static number_to_dms(e){const t=N$2(e).fraction,r=N$2(e).integer,n=_$1(N$2(100*t).fraction,100),s=N$2(100*t).integer;return new L$3(r,s,n)}format(e,t){let r=O$2(this.m_seconds,t),n=this.m_minutes,s=this.m_degrees;if(2===e||8===e)S$2<=r&&(r-=S$2,++n),p$1<=n&&(n=0,++s),g$3<=s&&(s=0);else if(7===e)r=0,n=30<=this.m_seconds?this.m_minutes+1:this.m_minutes,s=this.m_degrees,p$1<=n&&(n=0,++s),g$3<=s&&(s=0);else if(1===e||6===e){const e=f$2(this.m_seconds,D$4),t=f$2(this.m_minutes,p$1);s=Math.round(this.m_degrees+t+e),n=0,r=0;}return new L$3(s,n,r)}static DMS_to_seconds(e,t,r){return e*D$4+t*S$2+r}}class z$2{constructor(e,t,r){this.meridian=e,this.angle=t,this.direction=r;}fetch_azimuth(e){return 0===e?this.meridian:this.direction}}class q$3{constructor(e){this.m_angle=e;}static createFromAngleAndDirection(e,t){return new q$3(new Z$1(q$3.convertDirectionFormat(e.extract_angular_units(2),t,1)))}getAngle(e){const t=this.m_angle.extract_angular_units(2);switch(e){case 1:case 4:case 2:return new Z$1(q$3.convertDirectionFormat(t,1,e));case 3:{const e=q$3.seconds_north_azimuth_to_quadrant(t);return new Z$1(e.angle)}}}getMeridian(e){const t=this.m_angle.extract_angular_units(2);switch(e){case 1:return 0;case 4:return 2;case 2:return 1;case 3:return q$3.seconds_north_azimuth_to_quadrant(t).meridian}}getDirection(e){const t=this.m_angle.extract_angular_units(2);switch(e){case 1:return 1;case 4:return 3;case 2:return 0;case 3:return q$3.seconds_north_azimuth_to_quadrant(t).direction}}static seconds_north_azimuth_to_quadrant(e){const t=e<=M$3||e>=F$3?0:2,r=0===t?Math.min(T$2-e,e):Math.abs(e-v$3);return new z$2(t,r,e>v$3?3:1)}static createFromAngleMeridianAndDirection(e,t,r){return new q$3(new Z$1(q$3.secondsQuadrantToNorthAzimuth(e.extract_angular_units(2),t,r)))}static secondsQuadrantToNorthAzimuth(e,t,r){return 0===t?1===r?e:T$2-e:1===r?v$3-e:v$3+e}static convertDirectionFormat(e,t,r){let n=0;switch(t){case 1:n=e;break;case 2:n=M$3-e;break;case 3:throw new Error("Unnexpected evaluation");case 4:n=e+v$3;}let s=0;switch(r){case 1:s=n;break;case 2:s=M$3-n;break;case 3:throw new Error("Unnexpected evaluation");case 4:s=n-v$3;}return s=G$3(s,T$2),s<0?T$2+s:s}}function W$1(e,t,r){let n=null;switch(t){case 1:n=_$1(e,D$4);break;case 2:n=e;break;case 5:n=_$1(e,A$2);break;case 4:n=_$1(e,R$2);break;default:throw new Error("Unnexpected evaluation")}switch(r){case 1:return f$2(n,D$4);case 2:return n;case 5:return f$2(n,A$2);case 4:return n/R$2;default:throw new Error("Unnexpected evaluation")}}class Z$1{constructor(e){this.m_seconds=e;}static createFromAngleAndUnits(e,t){return new Z$1(W$1(e,t,2))}extract_angular_units(e){return W$1(this.m_seconds,2,j$3(e))}static createFromDegreesMinutesSeconds(e,t,r){return new Z$1(h$4(h$4(_$1(e,D$4),_$1(t,S$2)),r))}}function j$3(e){switch(e){case 1:case 6:case 3:return 1;case 5:return 5;case 7:return 7;case 4:return 4;case 2:case 8:return 2}}class B$3{constructor(e,t,r,n){this.m_view=e,this.m_angle=t,this.m_merdian=r,this.m_direction=n,this.m_dms=null,this.m_formatted_dms=null;}static createFromStringAndBearing(e,t,r){return new B$3(e,t.getAngle(r),t.getMeridian(r),t.getDirection(r))}fetch_angle(){return this.m_angle}fetch_meridian(){return this.m_merdian}fetch_direction(){return this.m_direction}fetch_m_view(){return this.m_view}fetch_dms(){return null===this.m_dms&&this.calculate_dms(),this.m_dms}fetch_formatted_dms(){return null===this.m_formatted_dms&&this.calculate_dms(),this.m_formatted_dms}calculate_dms(){let e=null,t=6,r=0;for(let n=0;n<this.m_view.length;n++){const s=this.m_view[n];switch(s){case"m":e=se$2(this.m_view,n,s),t=6===t?7:t,n=e.newpos;continue;case"s":e=se$2(this.m_view,n,s),t=8,r=r<e.rounding?e.rounding:r,n=e.newpos;continue;default:continue}}this.m_dms=L$3.seconds_to_DMS(this.m_angle.extract_angular_units(2)),this.m_formatted_dms=L$3.seconds_to_DMS(this.m_angle.extract_angular_units(2)).format(t,r);}}function Q$2(e,t,r,n,s){let i=null;switch(t){case 1:case 4:case 5:return i=C$4(O$2(e.extract_angular_units(t),n),y$2(t)),H$2(i.toFixed(n),"0",r+n+(n>0?1:0));case 6:case 7:return i=C$4(s.fetch_formatted_dms().get_field(t),y$2(t)),H$2(i.toFixed(n),"0",r+n+(n>0?1:0));case 8:return i=C$4(O$2(s.fetch_dms().get_field(t),n),y$2(t)),H$2(i.toFixed(n),"0",r+n+(n>0?1:0));default:throw new Error("Unnexepected evaluation")}}function X$1(e,t,r){if(3===r)throw new Error("Conversion error");if(3===t){const t=L$3.number_to_dms(e);return q$3.createFromAngleAndDirection(Z$1.createFromDegreesMinutesSeconds(t.m_degrees,t.m_minutes,t.m_seconds),r)}return q$3.createFromAngleAndDirection(Z$1.createFromAngleAndUnits(e,j$3(t)),r)}function V$2(e){switch(ee$2(e)){case 1:return {first:0,second:1};case 2:return {first:2,second:1};case 3:return {first:2,second:3};case 4:return {first:0,second:3}}return null}function J$2(e){switch(e.toUpperCase().trim()){case"N":case"NORTH":return 0;case"E":case"EAST":return 1;case"S":case"SOUTH":return 2;case"W":case"WEST":return 3}return null}function K$1(e){const t=parseFloat(e);if(Y$2(t)){if(isNaN(t))throw new Error("Invalid conversion");return t}throw new Error("Invalid conversion")}function Y$1(e,r,n){const s=3===n;let i=null,a=null,c=0,o=0,u=0;if(s){if(e.length<2)throw new Error("Conversion Error");u=1;const r=V$2($$4(e[e.length-1]));if(r?(i=r.first,a=r.second):(c=1,i=J$2($$4(e[0])),a=J$2($$4(e[e.length-1]))),null===i||null===a)throw new Error("Invalid Conversion")}switch(r){case 1:case 4:case 5:if(0===e.length)throw new Error("Invalid Conversion");return s?q$3.createFromAngleMeridianAndDirection(Z$1.createFromAngleAndUnits(K$1(e[c]),j$3(r)),i,a):q$3.createFromAngleAndDirection(Z$1.createFromAngleAndUnits(K$1(e[c]),j$3(r)),n);case 3:if(o=e.length-u-c,3===o){const t=Z$1.createFromDegreesMinutesSeconds(K$1(e[c]),K$1(e[c+1]),K$1(e[c+2]));return s?q$3.createFromAngleMeridianAndDirection(t,i,a):q$3.createFromAngleAndDirection(t,n)}if(1===o){const t=K$1(e[c]),r=L$3.number_to_dms(t),o=Z$1.createFromDegreesMinutesSeconds(r.m_degrees,r.m_minutes,r.m_seconds);return s?q$3.createFromAngleMeridianAndDirection(o,i,a):q$3.createFromAngleAndDirection(o,n)}}throw new Error("Conversion Error")}function $$3(e){const t=[" ","-","/","'",'"',"\\","^",U$2,I$3,"\t","\r","\n","*"];let r="";for(let n=0;n<e.length;n++){const s=e.charAt(n);-1!==t.indexOf(s)?r+="RRSPLITRRSPLITRR":r+=s;}return r.split("RRSPLITRRSPLITRR").filter((e=>""!==e))}function ee$1(e,t,c){if(Y$2(e))return X$1(ee$2(e),t,c);if(Z$4(e))return Y$1($$3(e),t,c);if(I$7(e))return Y$1(e,t,c);if(J$3(e))return Y$1(e.toArray(),t,c);throw new Error("Conversion Error")}function te$1(e,t,r){const n=j$3(r);if(n&&3!==r){return e.getAngle(t).extract_angular_units(n)}throw new Error("Conversion Error")}function re$1(e,t,r){const n=e.getAngle(t);if(3===t&&3===r){const r=L$3.seconds_to_DMS(n.extract_angular_units(2));return [b$3(e.getMeridian(t),"SHORT"),r.m_degrees,r.m_minutes,r.m_seconds,b$3(e.getDirection(t),"SHORT")]}if(3===r){const e=L$3.seconds_to_DMS(n.extract_angular_units(2));return [e.m_degrees,e.m_minutes,e.m_seconds]}return 3===t?[b$3(e.getMeridian(t),"SHORT"),n.extract_angular_units(r),b$3(e.getDirection(t),"SHORT")]:[n.extract_angular_units(r)]}function ne$1(e,t){let r="";switch(e){case 1:r=3===t?"DD.DD"+U$2:"DDD.DD"+U$2;break;case 3:r=3===t?"dd"+U$2+" mm' ss\"":"ddd"+U$2+" mm' ss.ss\"";break;case 4:r="R.RR";break;case 5:r="GGG.GG"+I$3;break;default:throw new Error("Conversion error")}return 3===t&&(r="p "+r+" b"),r}function se$2(e,t,r){const n={padding:0,rounding:0,newpos:t};let s=!1;for(;t<e.length;){const i=e[t];if(i===r)s?n.rounding++:n.padding++,t++;else {if("."!==i)break;s=!0,t++;}}return n.newpos=t-1,n}function ie$2(e,t,r){const n={escaped:"",newpos:t};for(t++;t<e.length;){const r=e[t];if(t++,"]"===r)break;n.escaped+=r;}return n.newpos=t-1,n}function ae$2(e,t,r){let n="",s=null,i=null;const a=B$3.createFromStringAndBearing(t,e,r),c={D:1,d:6,m:7,s:8,R:4,G:5};for(let o=0;o<t.length;o++){const u=t[o];switch(u){case"[":s=ie$2(t,o),n+=s.escaped,o=s.newpos;continue;case"D":case"d":case"m":case"s":case"R":case"G":s=se$2(t,o,u),i=e.getAngle(r),n+=Q$2(i,c[u],s.padding,s.rounding,a),o=s.newpos;continue;case"P":case"p":n+=b$3(a.fetch_meridian(),"p"===u?"SHORT":"LONG");continue;case"B":case"b":n+=b$3(a.fetch_direction(),"b"===u?"SHORT":"LONG");continue;default:n+=u;}}return n}function ce$2(r,n,s){if(!(n instanceof h$9))throw new Error("Invalid Parameter");if(!1===n.hasField("directionType"))throw new Error("Invalid Parameter - Missing directionType");if(!1===n.hasField("angleType"))throw new Error("Invalid Parameter - Missing directionType");const i=P$3(x$3(n.field("directiontype"))),a=ee$1(r,k$3(x$3(n.field("angletype"))),i);if(!(s instanceof h$9))throw new Error("Invalid Parameter");if(!1===s.hasField("directionType"))throw new Error("Invalid Parameter - Missing directionType");if(!1===s.hasField("outputType"))throw new Error("Invalid Parameter - Missing directionType");const c=P$3(x$3(s.field("directiontype"))),o=s.hasField("angleType")?k$3(x$3(s.field("angletype"))):null,u=x$3(s.field("outputType")).toUpperCase().trim();if(!c||!u)throw new Error("Conversion error");if(!(o||"TEXT"===u&&s.hasField("format")))throw new Error("Invalid unit");switch(u){case"VALUE":return 3===c||3===o?re$1(a,c,o):te$1(a,c,o);case"TEXT":{let e="";return s.hasField("format")&&(e=$$4(s.field("format"))),null!==e&&""!==e||(e=ne$1(o,c)),ae$2(a,e,c)}default:throw new Error("Invalid Parameter")}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=2654435761,s$3=2246822519,n$2=3266489917,e$5=668265263,r$4=374761393;function h$3(t){const s=[];for(let n=0,e=t.length;n<e;n++){let e=t.charCodeAt(n);e<128?s.push(e):e<2048?s.push(192|e>>6,128|63&e):e<55296||e>=57344?s.push(224|e>>12,128|e>>6&63,128|63&e):(n++,e=65536+((1023&e)<<10|1023&t.charCodeAt(n)),s.push(240|e>>18,128|e>>12&63,128|e>>6&63,128|63&e));}return new Uint8Array(s)}class i$1{constructor(t){this.seed=t,this.totallen=0,this.bufs=[],this.init();}init(){return this.bufs=[],this.totallen=0,this}updateFloatArray(t){const s=[];for(const n of t)isNaN(n)?s.push("NaN"):n===1/0?s.push("Infinity"):n===-1/0?s.push("-Infinity"):0===n?s.push("0"):s.push(n.toString(16));this.update(h$3(s.join("")));}updateIntArray(t){const s=Int32Array.from(t);this.update(new Uint8Array(s.buffer));}updateUint8Array(t){this.update(Uint8Array.from(t));}updateWithString(t){return this.update(h$3(t))}update(t){return this.bufs.push(t),this.totallen+=t.length,this}digest(){const t=new Uint8Array(this.totallen);let s=0;for(const n of this.bufs)t.set(n,s),s+=n.length;return this.init(),this.xxHash32(t,this.seed)}xxHash32(h,i=0){const o=h;let u=i+r$4&4294967295,a=0;if(o.length>=16){const n=[i+t+s$3&4294967295,i+s$3&4294967295,i+0&4294967295,i-t&4294967295],e=h,r=e.length-16;let o=0;for(a=0;(4294967280&a)<=r;a+=4){const r=a,h=e[r+0]+(e[r+1]<<8),i=e[r+2]+(e[r+3]<<8),u=h*s$3+(i*s$3<<16);let l=n[o]+u&4294967295;l=l<<13|l>>>19;const f=65535&l,p=l>>>16;n[o]=f*t+(p*t<<16)&4294967295,o=o+1&3;}u=(n[0]<<1|n[0]>>>31)+(n[1]<<7|n[1]>>>25)+(n[2]<<12|n[2]>>>20)+(n[3]<<18|n[3]>>>14)&4294967295;}u=u+h.length&4294967295;const l=h.length-4;for(;a<=l;a+=4){const t=a,s=o[t+0]+(o[t+1]<<8),r=o[t+2]+(o[t+3]<<8);u=u+(s*n$2+(r*n$2<<16))&4294967295,u=u<<17|u>>>15,u=(65535&u)*e$5+((u>>>16)*e$5<<16)&4294967295;}for(;a<o.length;++a){u+=o[a]*r$4,u=u<<11|u>>>21,u=(65535&u)*t+((u>>>16)*t<<16)&4294967295;}return u^=u>>>15,u=((65535&u)*s$3&4294967295)+((u>>>16)*s$3<<16),u^=u>>>13,u=((65535&u)*n$2&4294967295)+((u>>>16)*n$2<<16),u^=u>>>16,u<0?u+4294967296:u}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function N$1(t,r){if(t.x===r.x&&t.y===r.y){if(t.hasZ){if(t.z!==r.z)return !1}else if(r.hasZ)return !1;if(t.hasM){if(t.m!==r.m)return !1}else if(r.hasM)return !1;return !0}return !1}function C$3(o,a,i){if(null!==o)if(I$7(o)){if(a.updateUint8Array([61]),i.map.has(o)){const t=i.map.get(o);a.updateIntArray([61237541^t]);}else {i.map.set(o,i.currentLength++);for(const t of o)C$3(t,a,i);i.map.delete(o),i.currentLength--;}a.updateUint8Array([199]);}else if(J$3(o)){if(a.updateUint8Array([61]),i.map.has(o)){const t=i.map.get(o);a.updateIntArray([61237541^t]);}else {i.map.set(o,i.currentLength++);for(const t of o.toArray())C$3(t,a,i);i.map.delete(o),i.currentLength--;}a.updateUint8Array([199]);}else {if(E$6(o))return a.updateIntArray([o.getTime()]),void a.updateUint8Array([241]);if(Z$4(o))return a.updateIntArray([o.length]),a.updateWithString(o),void a.updateUint8Array([41]);if(v$5(o))a.updateUint8Array([!0===o?1:0,113]);else {if(Y$2(o))return a.updateFloatArray([o]),void a.updateUint8Array([173]);if(o instanceof e$8)throw new Error("Type not supported in Hash");if(o instanceof s$9)throw new Error("Type not supported in Hash");if(!(o instanceof h$9)){if(o instanceof b$5)throw new Error("Type not supported in Hash");if(o instanceof b$9)return a.updateIntArray([3833836621]),a.updateIntArray([0]),a.updateFloatArray([o.x]),a.updateIntArray([1]),a.updateFloatArray([o.y]),o.hasZ&&(a.updateIntArray([2]),a.updateFloatArray([o.z])),o.hasM&&(a.updateIntArray([3]),a.updateFloatArray([o.m])),a.updateIntArray([3765347959]),void C$3(o.spatialReference.wkid,a,i);if(o instanceof v$6){a.updateIntArray([1266616829]);for(let t=0;t<o.rings.length;t++){const r=o.rings[t],e=[];let n=null,u=null;for(let a=0;a<r.length;a++){const i=o.getPoint(t,a);if(0===a)n=i;else if(N$1(u,i))continue;u=i,a===r.length-1&&N$1(n,i)||e.push(i);}a.updateIntArray([1397116793,e.length]);for(let t=0;t<e.length;t++){const r=e[t];a.updateIntArray([3962308117,t]),C$3(r,a,i),a.updateIntArray([2716288009]);}a.updateIntArray([2278822459]);}return a.updateIntArray([3878477243]),void C$3(o.spatialReference.wkid,a,i)}if(o instanceof m$5){a.updateIntArray([4106883559]);for(let t=0;t<o.paths.length;t++){const r=o.paths[t];a.updateIntArray([1397116793,r.length]);for(let e=0;e<r.length;e++)a.updateIntArray([3962308117,e]),C$3(o.getPoint(t,e),a,i),a.updateIntArray([2716288009]);a.updateIntArray([2278822459]);}return a.updateIntArray([2568784753]),void C$3(o.spatialReference.wkid,a,i)}if(o instanceof m$6){a.updateIntArray([588535921,o.points.length]);for(let t=0;t<o.points.length;t++){const r=o.getPoint(t);a.updateIntArray([t]),C$3(r,a,i);}return a.updateIntArray([1700171621]),void C$3(o.spatialReference.wkid,a,i)}if(o instanceof M$7)return a.updateIntArray([3483648373]),a.updateIntArray([0]),a.updateFloatArray([o.xmax]),a.updateIntArray([1]),a.updateFloatArray([o.xmin]),a.updateIntArray([2]),a.updateFloatArray([o.ymax]),a.updateIntArray([3]),a.updateFloatArray([o.ymin]),o.hasZ&&(a.updateIntArray([4]),a.updateFloatArray([o.zmax]),a.updateIntArray([5]),a.updateFloatArray([o.zmin])),o.hasM&&(a.updateIntArray([6]),a.updateFloatArray([o.mmax]),a.updateIntArray([7]),a.updateFloatArray([o.mmin])),a.updateIntArray([3622027469]),void C$3(o.spatialReference.wkid,a,i);if(o instanceof k$6)return a.updateIntArray([14]),void 0!==o.wkid&&null!==o.wkid&&a.updateIntArray([o.wkid]),void(o.wkt&&a.updateWithString(o.wkt));if(C$5(o))throw new Error("Type not supported in Hash");if(A$4(o))throw new Error("Type not supported in Hash");if(L$4(o))throw new Error("Type not supported in Hash");if(o===R$3)throw new Error("Type not supported in Hash");throw new Error("Type not supported in Hash")}if(a.updateUint8Array([223]),i.map.has(o)){const t=i.map.get(o);a.updateIntArray([61237541^t]);}else {i.map.set(o,i.currentLength++);for(const t of o.keys()){a.updateIntArray([t.length]),a.updateWithString(t),a.updateUint8Array([251]);C$3(o.field(t),a,i),a.updateUint8Array([239]);}i.map.delete(o),i.currentLength--;}a.updateUint8Array([73]);}}else a.updateUint8Array([0,139]);}function L$2(r,h){r.portal=function(r,e){return h(r,e,(function(r,e,n){return z$5(n,1,1),new s$9($$4(n[0]))}))},r.trim=function(t,r){return h(t,r,(function(t,r,e){return z$5(e,1,1),$$4(e[0]).trim()}))},r.tohex=function(t,r){return h(t,r,(function(t,r,e){z$5(e,1,1);const n=ee$2(e[0]);return isNaN(n)?n:n.toString(16)}))},r.upper=function(t,r){return h(t,r,(function(t,r,e){return z$5(e,1,1),$$4(e[0]).toUpperCase()}))},r.proper=function(t,r){return h(t,r,(function(t,r,e){z$5(e,1,2);let n=1;2===e.length&&"firstword"===$$4(e[1]).toLowerCase()&&(n=2);const i=/\s/,u=$$4(e[0]);let s="",f=!0;for(let o=0;o<u.length;o++){let t=u[o];if(i.test(t))1===n&&(f=!0);else {t.toUpperCase()!==t.toLowerCase()&&(f?(t=t.toUpperCase(),f=!1):t=t.toLowerCase());}s+=t;}return s}))},r.lower=function(t,r){return h(t,r,(function(t,r,e){return z$5(e,1,1),$$4(e[0]).toLowerCase()}))},r.guid=function(t,r){return h(t,r,(function(t,r,e){if(z$5(e,0,1),e.length>0)switch($$4(e[0]).toLowerCase()){case"digits":return G$5().replace("-","").replace("-","").replace("-","").replace("-","");case"digits-hyphen":return G$5();case"digits-hyphen-braces":return "{"+G$5()+"}";case"digits-hyphen-parentheses":return "("+G$5()+")"}return "{"+G$5()+"}"}))},r.console=function(t,r){return h(t,r,(function(r,e,n){return 0===n.length||(1===n.length?t.console($$4(n[0])):t.console($$4(n))),R$3}))},r.mid=function(t,r){return h(t,r,(function(t,r,e){z$5(e,2,3);let n=ee$2(e[1]);if(isNaN(n))return "";if(n<0&&(n=0),2===e.length)return $$4(e[0]).substr(n);let u=ee$2(e[2]);return isNaN(u)?"":(u<0&&(u=0),$$4(e[0]).substr(n,u))}))},r.find=function(t,r){return h(t,r,(function(t,r,e){z$5(e,2,3);let n=0;if(e.length>2){if(n=ee$2(O$5(e[2],0)),isNaN(n))return -1;n<0&&(n=0);}return $$4(e[1]).indexOf($$4(e[0]),n)}))},r.left=function(t,r){return h(t,r,(function(t,r,e){z$5(e,2,2);let n=ee$2(e[1]);return isNaN(n)?"":(n<0&&(n=0),$$4(e[0]).substr(0,n))}))},r.right=function(t,r){return h(t,r,(function(t,r,e){z$5(e,2,2);let n=ee$2(e[1]);return isNaN(n)?"":(n<0&&(n=0),$$4(e[0]).substr(-1*n,n))}))},r.split=function(t,r){return h(t,r,(function(t,r,e){let n;z$5(e,2,4);let u=ee$2(O$5(e[2],-1));const s=ie$3(O$5(e[3],!1));if(-1===u||null===u||!0===s?n=$$4(e[0]).split($$4(e[1])):(isNaN(u)&&(u=-1),u<-1&&(u=-1),n=$$4(e[0]).split($$4(e[1]),u)),!1===s)return n;const p=[];for(let o=0;o<n.length&&!(-1!==u&&p.length>=u);o++)""!==n[o]&&void 0!==n[o]&&p.push(n[o]);return p}))},r.text=function(t,r){return h(t,r,(function(t,r,e){return z$5(e,1,2),X$2(e[0],e[1])}))},r.concatenate=function(t,r){return h(t,r,(function(t,r,e){const n=[];if(e.length<1)return "";if(I$7(e[0])){const t=O$5(e[2],"");for(let r=0;r<e[0].length;r++)n[r]=X$2(e[0][r],t);return e.length>1?n.join(e[1]):n.join("")}if(J$3(e[0])){const t=O$5(e[2],"");for(let r=0;r<e[0].length();r++)n[r]=X$2(e[0].get(r),t);return e.length>1?n.join(e[1]):n.join("")}for(let o=0;o<e.length;o++)n[o]=X$2(e[o]);return n.join("")}))},r.reverse=function(t,r){return h(t,r,(function(t,r,e){if(z$5(e,1,1),I$7(e[0])){const t=e[0].slice(0);return t.reverse(),t}if(J$3(e[0])){const t=e[0].toArray().slice(0);return t.reverse(),t}throw new Error("Invalid Parameter")}))},r.replace=function(t,r){return h(t,r,(function(t,r,e){z$5(e,3,4);const n=$$4(e[0]),i=$$4(e[1]),u=$$4(e[2]);return 4!==e.length||ie$3(e[3])?_$2(n,i,u):n.replace(i,u)}))},r.schema=function(t,r){return h(t,r,(function(t,r,o){if(o[0]instanceof b$5){const t=o[0].schema();return t?h$9.convertObjectToArcadeDictionary(t):null}throw new Error("Invalid Parameter")}))},r.subtypes=function(t,r){return h(t,r,(function(t,r,a){if(z$5(a,1,1),a[0]instanceof b$5){const t=a[0].subtypes();return t?h$9.convertObjectToArcadeDictionary(t):null}throw new Error("Invalid Parameter")}))},r.subtypecode=function(t,r){return h(t,r,(function(t,r,e){if(z$5(e,1,1),e[0]instanceof b$5){const t=e[0].subtypes();if(!t)return null;if(t.subtypeField&&e[0].hasField(t.subtypeField)){const r=e[0].field(t.subtypeField);for(const e of t.subtypes)if(e.code===r)return e.code;return null}return null}throw new Error("Invalid Parameter")}))},r.subtypename=function(t,r){return h(t,r,(function(t,r,e){if(z$5(e,1,1),e[0]instanceof b$5){const t=e[0].subtypes();if(!t)return "";if(t.subtypeField&&e[0].hasField(t.subtypeField)){const r=e[0].field(t.subtypeField);for(const e of t.subtypes)if(e.code===r)return e.name;return ""}return ""}throw new Error("Invalid Parameter")}))},r.gdbversion=function(t,r){return h(t,r,(function(t,r,e){if(z$5(e,1,1),e[0]instanceof b$5)return e[0].gdbVersion();throw new Error("Invalid Parameter")}))},r.domain=function(t,r){return h(t,r,(function(t,r,u){if(z$5(u,2,3),u[0]instanceof b$5){const t=u[0].fullDomain($$4(u[1]),void 0===u[2]?void 0:ee$2(u[2]));return t&&t.domain?"coded-value"===t.domain.type||"codedValue"===t.domain.type?h$9.convertObjectToArcadeDictionary({type:"codedValue",name:t.domain.name,dataType:D$7[t.field.type],codedValues:t.domain.codedValues.map((t=>({name:t.name,code:t.code})))}):h$9.convertObjectToArcadeDictionary({type:"range",name:t.domain.name,dataType:D$7[t.field.type],min:t.domain.min,max:t.domain.max}):null}throw new Error("Invalid Parameter")}))},r.domainname=function(t,r){return h(t,r,(function(t,r,e){if(z$5(e,2,4),e[0]instanceof b$5)return e[0].domainValueLookup($$4(e[1]),e[2],void 0===e[3]?void 0:ee$2(e[3]));throw new Error("Invalid Parameter")}))},r.domaincode=function(t,r){return h(t,r,(function(t,r,e){if(z$5(e,2,4),e[0]instanceof b$5)return e[0].domainCodeLookup($$4(e[1]),e[2],void 0===e[3]?void 0:ee$2(e[3]));throw new Error("Invalid Parameter")}))},r.urlencode=function(t,r){return h(t,r,(function(t,r,n){if(z$5(n,1,1),null===n[0])return "";if(n[0]instanceof h$9){let t="";for(const r of n[0].keys()){const e=n[0].field(r);""!==t&&(t+="&"),t+=null===e?encodeURIComponent(r)+"=":encodeURIComponent(r)+"="+encodeURIComponent(e);}return t}return encodeURIComponent($$4(n[0]))}))},r.hash=function(t,r){return h(t,r,(function(t,r,e){z$5(e,1,1);const n=new i$1(0);return C$3(e[0],n,{map:new Map,currentLength:0}),n.digest()}))},r.convertdirection=function(t,r){return h(t,r,(function(t,r,e){return z$5(e,3,3),ce$2(e[0],e[1],e[2])}))},r.fromjson=function(t,r){return h(t,r,(function(t,r,n){if(z$5(n,1,1),!1===Z$4(n[0]))throw new Error("Invalid Parameter");return h$9.convertJsonToArcade(JSON.parse($$4(n[0])))}))},r.expects=function(t,r){return h(t,r,(function(t,r,e){if(e.length<1)throw new Error("Function called with wrong number of Parameters");return R$3}))};}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function oe$1(e,t,n){try{return n(e,null,t)}catch(r){throw r}}function ae$1(e){return e instanceof Error?C$6(e):C$6(new Error(e))}function le$1(e,t){try{switch(t.type){case"EmptyStatement":return "lc.voidOperation";case"VariableDeclarator":return Ee$1(e,t);case"VariableDeclaration":return we$1(e,t);case"BlockStatement":return ye$1(e,t);case"FunctionDeclaration":return Se$1(e,t);case"ReturnStatement":return de$1(e,t);case"IfStatement":return ge$1(e,t);case"ExpressionStatement":return me$1(e,t);case"AssignmentExpression":return fe$1(e,t);case"UpdateExpression":return pe$1(e,t);case"BreakStatement":return "break";case"ContinueStatement":return "continue";case"TemplateLiteral":return Oe$1(e,t);case"TemplateElement":return JSON.stringify(t.value?t.value.cooked:"");case"ForStatement":return ue$1(e,t);case"ForInStatement":return ce$1(e,t);case"Identifier":return Re$1(e,t);case"MemberExpression":return Ne$1(e,t);case"Literal":return null===t.value||void 0===t.value?"null":JSON.stringify(t.value);case"ThisExpression":case"ConditionalExpression":case"Array":throw new Error(b$4(t,"RUNTIME","NOTSUPPORTED"));case"CallExpression":return _e$1(e,t);case"UnaryExpression":return Me$1(e,t);case"BinaryExpression":return xe$1(e,t);case"LogicalExpression":return Te$1(e,t);case"ArrayExpression":return Ie$1(e,t);case"ObjectExpression":return se$1(e,t);case"Property":return ie$1();default:throw new Error(b$4(t,"RUNTIME","UNREOGNISED"))}}catch(n){throw n}}function se$1(e,t){let n="lang.dictionary([";for(let r=0;r<t.properties.length;r++){const o=t.properties[r];r>0&&(n+=","),n+="lang.strCheck("+("Identifier"===o.key.type?"'"+o.key.name+"'":le$1(e,o.key))+",'ObjectExpression'),lang.aCheck("+le$1(e,o.value)+", 'ObjectExpression')";}return n+="])",n}function ie$1(e,t){throw new Error("Should not get here")}function ce$1(e,t){const n=Be(e),r=Be(e),o=Be(e);let a="var "+n+" = "+le$1(e,t.right)+";\n";"VariableDeclaration"===t.left.type&&(a+=le$1(e,t.left));let l="VariableDeclaration"===t.left.type?t.left.declarations[0].id.name:t.left.name;l=l.toLowerCase();let s="";return null!==e.localScope&&(void 0!==e.localScope[l]?s="lscope['"+l+"']":void 0!==e.localScope._SymbolsMap[l]&&(s="lscope['"+e.localScope._SymbolsMap[l]+"']")),""===s&&(void 0!==e.globalScope[l]?s="gscope['"+l+"']":void 0!==e.globalScope._SymbolsMap[l]&&(s="gscope['"+e.globalScope._SymbolsMap[l]+"']")),a+="if ("+n+"===null) {  lastStatement = lc.voidOperation; }\n ",a+="else if (lc.isArray("+n+") || lc.isString("+n+")) {",a+="var "+r+"="+n+".length; \n",a+="for(var "+o+"=0; "+o+"<"+r+"; "+o+"++) {\n",a+=s+"="+o+";\n",a+=le$1(e,t.body),a+="\n}\n",a+=" lastStatement = lc.voidOperation; \n",a+=" \n}\n",a+="else if (lc.isImmutableArray("+n+")) {",a+="var "+r+"="+n+".length(); \n",a+="for(var "+o+"=0; "+o+"<"+r+"; "+o+"++) {\n",a+=s+"="+o+";\n",a+=le$1(e,t.body),a+="\n}\n",a+=" lastStatement = lc.voidOperation; \n",a+=" \n}\n",a+="else if (( "+n+" instanceof lang.Dictionary) || ( "+n+" instanceof lang.Feature)) {",a+="var "+r+"="+n+".keys(); \n",a+="for(var "+o+"=0; "+o+"<"+r+".length; "+o+"++) {\n",a+=s+"="+r+"["+o+"];\n",a+=le$1(e,t.body),a+="\n}\n",a+=" lastStatement = lc.voidOperation; \n",a+=" \n}\n",e.isAsync&&(a+="else if (lc.isFeatureSet("+n+")) {",a+="var "+r+"="+n+".iterator(runtimeCtx.abortSignal); \n",a+="for(var "+o+"=lang. graphicToFeature( yield "+r+".next(),"+n+"); "+o+"!=null; "+o+"=lang. graphicToFeature( yield "+r+".next(),"+n+")) {\n",a+=s+"="+o+";\n",a+=le$1(e,t.body),a+="\n}\n",a+=" lastStatement = lc.voidOperation; \n",a+=" \n}\n"),a+="else { lastStatement = lc.voidOperation; } \n",a}function ue$1(e,t){let n="lastStatement = lc.voidOperation; \n";null!==t.init&&(n+=le$1(e,t.init)+"; ");const r=Be(e),o=Be(e);return n+="var "+r+" = true; ",n+="\n do { ",null!==t.update&&(n+=" if ("+r+"===false) {\n "+le$1(e,t.update)+"  \n}\n "+r+"=false; \n"),null!==t.test&&(n+="var "+o+" = "+le$1(e,t.test)+"; ",n+="if ("+o+"===false) { break; } else if ("+o+"!==true) { lang.error({type: '"+t.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION');   }\n"),n+=le$1(e,t.body),null!==t.update&&(n+="\n "+le$1(e,t.update)),n+="\n"+r+" = true; \n} while(true);  lastStatement = lc.voidOperation; ",n}function pe$1(e,t){let n=null,r="";if("MemberExpression"===t.argument.type)return n=le$1(e,t.argument.object),r=!0===t.argument.computed?le$1(e,t.argument.property):"'"+t.argument.property.name+"'","lang.memberupdate("+n+","+r+",'"+t.operator+"',"+t.prefix+")";if(n=t.argument.name.toLowerCase(),null!==e.localScope){if(void 0!==e.localScope[n])return "lang.update(lscope, '"+n+"','"+t.operator+"',"+t.prefix+")";if(void 0!==e.localScope._SymbolsMap[n])return "lang.update(lscope, '"+e.localScope._SymbolsMap[n]+"','"+t.operator+"',"+t.prefix+")"}if(void 0!==e.globalScope[n])return "lang.update(gscope, '"+n+"','"+t.operator+"',"+t.prefix+")";if(void 0!==e.globalScope._SymbolsMap[n])return "lang.update(gscope, '"+e.globalScope._SymbolsMap[n]+"','"+t.operator+"',"+t.prefix+")";throw new Error("Variable not recognised")}function fe$1(e,t){const n=le$1(e,t.right);let r=null,o="";if("MemberExpression"===t.left.type)return r=le$1(e,t.left.object),o=!0===t.left.computed?le$1(e,t.left.property):"'"+t.left.property.name+"'","lang.assignmember("+r+","+o+",'"+t.operator+"',"+n+")";if(r=t.left.name.toLowerCase(),null!==e.localScope){if(void 0!==e.localScope[r])return "lscope['"+r+"']=lang.assign("+n+",'"+t.operator+"', lscope['"+r+"'])";if(void 0!==e.localScope._SymbolsMap[r])return "lscope['"+e.localScope._SymbolsMap[r]+"']=lang.assign("+n+",'"+t.operator+"', lscope['"+e.localScope._SymbolsMap[r]+"'])"}if(void 0!==e.globalScope[r])return "gscope['"+r+"']=lang.assign("+n+",'"+t.operator+"', gscope['"+r+"'])";if(void 0!==e.globalScope._SymbolsMap[r])return "gscope['"+e.globalScope._SymbolsMap[r]+"']=lang.assign("+n+",'"+t.operator+"', gscope['"+e.globalScope._SymbolsMap[r]+"'])";throw new Error("Variable not recognised")}function me$1(e,t){return "AssignmentExpression"===t.expression.type?"lastStatement = lc.voidOperation; "+le$1(e,t.expression)+"; \n ":("lastStatement = "+le$1(e,t.expression)+"; ")}function he$1(e,t){return "BlockStatement"===t.type?le$1(e,t):"ReturnStatement"===t.type||"BreakStatement"===t.type||"ContinueStatement"===t.type?le$1(e,t)+"; ":"UpdateExpression"===t.type?"lastStatement = "+le$1(e,t)+"; ":"ExpressionStatement"===t.type?le$1(e,t):"ObjectExpression"===t.type?"lastStatement = "+le$1(e,t)+"; ":le$1(e,t)+"; "}function ge$1(e,t){if("AssignmentExpression"===t.test.type||"UpdateExpression"===t.test.type)throw new Error(b$4(t.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));const n=le$1(e,t.test),r=Be(e);let o="var "+r+" = "+n+";\n if ("+r+" === true) {\n"+he$1(e,t.consequent)+"\n }\n";return null!==t.alternate?o+="else if ("+r+"===false)   { \n"+he$1(e,t.alternate)+"}\n":o+="else if ("+r+"===false) { \n lastStatement = lc.voidOperation;\n }\n",o+="else { lang.error({type: '"+t.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION'); \n}\n",o}function ye$1(e,t){let n="";for(let r=0;r<t.body.length;r++)"ReturnStatement"===t.body[r].type||"BreakStatement"===t.body[r].type||"ContinueStatement"===t.body[r].type?n+=le$1(e,t.body[r])+"; \n":"UpdateExpression"===t.body[r].type||"ObjectExpression"===t.body[r].type?n+="lastStatement = "+le$1(e,t.body[r])+"; \n":n+=le$1(e,t.body[r])+" \n";return n}function de$1(e,t){if(null===t.argument)return "return lc.voidOperation";return "return "+le$1(e,t.argument)}function Se$1(e,t){const n=t.id.name.toLowerCase(),r={isAsync:e.isAsync,spatialReference:e.spatialReference,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,services:e.services,symbols:e.symbols,mangleMap:e.mangleMap,localScope:{_SymbolsMap:{}},depthCounter:e.depthCounter+1,globalScope:e.globalScope};if(r.depthCounter>64)throw new Error("Exceeded maximum function depth");let o="new lc.SizzleFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; \n   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";for(let a=0;a<t.params.length;a++){const n=t.params[a].name.toLowerCase(),l=Le$1(e);r.localScope._SymbolsMap[n]=l,r.mangleMap[n]=l,o+="lscope['"+l+"']=arguments["+a.toString()+"];\n";}if(!0===e.isAsync?(o+="return lang.__awaiter(this, void 0, void 0, function* () {\n",o+=ye$1(r,t.body)+"\n return lastStatement; ",o+="});  }",o+=", runtimeCtx))",o+="\n lastStatement = lc.voidOperation; \n"):(o+=ye$1(r,t.body)+"\n return lastStatement; }, runtimeCtx))",o+="\n lastStatement = lc.voidOperation; \n"),void 0!==e.globalScope[n])return "gscope['"+n+"']="+o;if(void 0!==e.globalScope._SymbolsMap[n])return "gscope['"+e.globalScope._SymbolsMap[n]+"']="+o;{const t=Le$1(e);return e.globalScope._SymbolsMap[n]=t,e.mangleMap[n]=t,"gscope['"+t+"']="+o}}function we$1(e,t){const n=[];for(let r=0;r<t.declarations.length;r++)n.push(le$1(e,t.declarations[r]));return n.join("\n")+" \n lastStatement=  lc.voidOperation; \n"}function Ee$1(e,t){let n=null===t.init?null:le$1(e,t.init);n===R$3&&(n=null);const r=t.id.name.toLowerCase();if(null!==e.localScope){if(void 0!==e.localScope[r])return "lscope['"+r+"']="+n+"; ";if(void 0!==e.localScope._SymbolsMap[r])return "lscope['"+e.localScope._SymbolsMap[r]+"']="+n+"; ";{const t=Le$1(e);return e.localScope._SymbolsMap[r]=t,e.mangleMap[r]=t,"lscope['"+t+"']="+n+"; "}}if(void 0!==e.globalScope[r])return "gscope['"+r+"']="+n+"; ";if(void 0!==e.globalScope._SymbolsMap[r])return "gscope['"+e.globalScope._SymbolsMap[r]+"']="+n+"; ";{const t=Le$1(e);return e.globalScope._SymbolsMap[r]=t,e.mangleMap[r]=t,"gscope['"+t+"']="+n+"; "}}let be$1=0;function ve$1(e,t,r){let l;switch(t=t.toLowerCase()){case"hasz":{const t=e.hasZ;return void 0!==t&&t}case"hasm":{const t=e.hasM;return void 0!==t&&t}case"spatialreference":{let t=e.spatialReference._arcadeCacheId;if(void 0===t){let n=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(n=!1),n&&(be$1++,e.spatialReference._arcadeCacheId=be$1,t=be$1);}const r=new h$9({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==t&&(r._arcadeCacheId="SPREF"+t.toString()),r}}switch(e.type){case"extent":switch(t){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const n=e[t];return void 0!==n?n:null}case"type":return "Extent"}break;case"polygon":switch(t){case"rings":l=e.cache._arcadeCacheId,void 0===l&&(be$1++,l=be$1,e.cache._arcadeCacheId=l);return new h$a(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,l);case"type":return "Polygon"}break;case"point":switch(t){case"x":case"y":case"z":case"m":return void 0!==e[t]?e[t]:null;case"type":return "Point"}break;case"polyline":switch(t){case"paths":l=e.cache._arcadeCacheId,void 0===l&&(be$1++,l=be$1,e.cache._arcadeCacheId=l);return new h$a(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,l);case"type":return "Polyline"}break;case"multipoint":switch(t){case"points":l=e.cache._arcadeCacheId,void 0===l&&(be$1++,l=be$1,e.cache._arcadeCacheId=l);return new i$6(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,l,1);case"type":return "Multipoint"}}throw new Error(b$4(r,"RUNTIME","PROPERTYNOTFOUND"))}function Ne$1(e,t){try{let n;return n=!0===t.computed?le$1(e,t.property):"'"+t.property.name+"'","lang.member("+le$1(e,t.object)+","+n+")"}catch(n){throw n}}function Me$1(e,t){try{return "lang.unary("+le$1(e,t.argument)+",'"+t.operator+"')"}catch(n){throw n}}function Ie$1(e,t){try{const n=[];for(let r=0;r<t.elements.length;r++)"Literal"===t.elements[r].type?n.push(le$1(e,t.elements[r])):n.push("lang.aCheck("+le$1(e,t.elements[r])+",'ArrayExpression')");return "["+n.join(",")+"]"}catch(n){throw n}}function Oe$1(e,t){try{const n=[];let r=0;for(const o of t.quasis)n.push(o.value?JSON.stringify(o.value.cooked):JSON.stringify("")),!1===o.tail&&(n.push(t.expressions[r]?"lang.castString(lang.aCheck("+le$1(e,t.expressions[r])+", 'TemplateLiteral'))":""),r++);return "(["+n.join(",")+"]).join('')"}catch(n){throw n}}function xe$1(e,t){try{return "lang.binary("+le$1(e,t.left)+","+le$1(e,t.right)+",'"+t.operator+"')"}catch(n){throw n}}function Te$1(e,t){try{if("AssignmentExpression"===t.left.type||"UpdateExpression"===t.left.type)throw new Error(b$4(t.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===t.right.type||"UpdateExpression"===t.right.type)throw new Error(b$4(t.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("&&"===t.operator||"||"===t.operator)return "(lang.logicalCheck("+le$1(e,t.left)+") "+t.operator+" lang.logicalCheck("+le$1(e,t.right)+"))";throw new Error(b$4(t,"RUNTIME","ONLYORORAND"))}catch(n){throw n}}function Re$1(e,t){try{const n=t.name.toLowerCase();if(null!==e.localScope){if(void 0!==e.localScope[n])return "lscope['"+n+"']";if(void 0!==e.localScope._SymbolsMap[n])return "lscope['"+e.localScope._SymbolsMap[n]+"']"}if(void 0!==e.globalScope[n])return "gscope['"+n+"']";if(void 0!==e.globalScope._SymbolsMap[n])return "gscope['"+e.globalScope._SymbolsMap[n]+"']";throw new Error(b$4(t,"RUNTIME","VARIABLENOTFOUND"))}catch(n){throw n}}function _e$1(e,t){try{if("Identifier"!==t.callee.type)throw new Error(b$4(t,"RUNTIME","ONLYNODESSUPPORTED"));const n=t.callee.name.toLowerCase();let r="";if(null!==e.localScope&&(void 0!==e.localScope[n]?r="lscope['"+n+"']":void 0!==e.localScope._SymbolsMap[n]&&(r="lscope['"+e.localScope._SymbolsMap[n]+"']")),""===r&&(void 0!==e.globalScope[n]?r="gscope['"+n+"']":void 0!==e.globalScope._SymbolsMap[n]&&(r="gscope['"+e.globalScope._SymbolsMap[n]+"']")),""!==r){let n="[";for(let r=0;r<t.arguments.length;r++)r>0&&(n+=", "),n+=le$1(e,t.arguments[r]);return n+="]",e.isAsync?"(yield lang.callfunc("+r+","+n+",runtimeCtx) )":"lang.callfunc("+r+","+n+",runtimeCtx)"}throw new Error(b$4(t,"RUNTIME","NOTFOUND"))}catch(n){throw n}}const Ce$1={};function Ae$1(o){return null===o?"":I$7(o)||J$3(o)?"Array":E$6(o)?"Date":Z$4(o)?"String":v$5(o)?"Boolean":Y$2(o)?"Number":o instanceof e$8?"Attachment":o instanceof s$9?"Portal":o instanceof h$9?"Dictionary":o instanceof b$5?"Feature":o instanceof b$9?"Point":o instanceof v$6?"Polygon":o instanceof m$5?"Polyline":o instanceof m$6?"Multipoint":o instanceof M$7?"Extent":C$5(o)?"Function":A$4(o)?"FeatureSet":L$4(o)?"FeatureSetCollection":o===R$3?"":"number"==typeof o&&isNaN(o)?"Number":"Unrecognised Type"}function Ue$1(e,t,n,r){try{const o=t[n];if(W$2(o,r))return t[n+1];{const o=t.length-n;return 1===o?t[n]:2===o?null:3===o?t[n+2]:Ue$1(e,t,n+2,r)}}catch(o){throw o}}function Fe$1(e,t,n,r){try{if(!0===r)return t[n+1];if(3===t.length-n)return t[n+2];{const r=t[n+2];if(!1===v$5(r))throw new Error("WHEN needs boolean test conditions");return Fe$1(e,t,n+2,r)}}catch(o){throw o}}function Pe$1(e,t){const n=e.length,r=Math.floor(n/2);return 0===n?[]:1===n?[e[0]]:ke$1(Pe$1(e.slice(0,r),t),Pe$1(e.slice(r,n),t),t)}function ke$1(e,t,n){const r=[];for(;e.length>0||t.length>0;)if(e.length>0&&t.length>0){let o=n(e[0],t[0]);isNaN(o)&&(o=0),o<=0?(r.push(e[0]),e=e.slice(1)):(r.push(t[0]),t=t.slice(1));}else e.length>0?(r.push(e[0]),e=e.slice(1)):t.length>0&&(r.push(t[0]),t=t.slice(1));return r}function je(e,t){try{const n=e.length,r=Math.floor(n/2);if(0===n)return k$5([]);if(1===n)return k$5([e[0]]);const o=[je(e.slice(0,r),t),je(e.slice(r,n),t)];return s$a(o).then((e=>De$1(e[0],e[1],t,[])))}catch(n){return C$6(n)}}function De$1(e,t,n,r){return f$8(((o,a)=>{const l=r;e.length>0||t.length>0?e.length>0&&t.length>0?n(e[0],t[0]).then((s=>{try{isNaN(s)&&(s=1),s<=0?(l.push(e[0]),e=e.slice(1)):(l.push(t[0]),t=t.slice(1)),De$1(e,t,n,r).then((e=>{o(e);}),a);}catch(i){a(i);}}),a):e.length>0?(l.push(e[0]),De$1(e=e.slice(1),t,n,r).then((e=>{o(e);}),a)):t.length>0&&(l.push(t[0]),t=t.slice(1),De$1(e,t,n,r).then((e=>{o(e);}),a)):o(r);}))}function Le$1(e){return e.symbols.symbolCounter++,"_T"+e.symbols.symbolCounter.toString()}function Be(e){return e.symbols.symbolCounter++,"_Tvar"+e.symbols.symbolCounter.toString()}h$7(Ce$1,oe$1),y$4(Ce$1,oe$1),L$2(Ce$1,oe$1),N$3(Ce$1,oe$1),P$5(Ce$1,oe$1),o$3(Ce$1,oe$1),Ce$1.typeof=function(e,t){return oe$1(e,t,(function(e,t,n){z$5(n,1,1);const r=Ae$1(n[0]);if("Unrecognised Type"===r)throw new Error("Unrecognised Type");return r}))},Ce$1.iif=function(e,t){try{return oe$1(e,t,(function(e,t,n){if(z$5(n,3,3),!1===v$5(n[0]))throw new Error("IF Function must have a boolean test condition");return n[0]?n[1]:n[2]}))}catch(n){throw n}},Ce$1.decode=function(e,t){try{return oe$1(e,t,(function(t,n,r){if(r.length<2)throw new Error("Missing Parameters");if(2===r.length)return r[1];{if((r.length-1)%2==0)throw new Error("Must have a default value result.");const t=r[0];return Ue$1(e,r,1,t)}}))}catch(n){throw n}},Ce$1.when=function(e,t){try{return oe$1(e,t,(function(t,n,r){if(r.length<3)throw new Error("Missing Parameters");if(r.length%2==0)throw new Error("Must have a default value result.");const o=r[0];if(!1===v$5(o))throw new Error("WHEN needs boolean test conditions");return Fe$1(e,r,0,o)}))}catch(n){throw n}},Ce$1.top=function(e,t){return oe$1(e,t,(function(e,t,n){if(z$5(n,2,2),I$7(n[0]))return ee$2(n[1])>=n[0].length?n[0].slice(0):n[0].slice(0,ee$2(n[1]));if(J$3(n[0]))return ee$2(n[1])>=n[0].length()?n[0].slice(0):n[0].slice(0,ee$2(n[1]));throw new Error("Top cannot accept this parameter type")}))},Ce$1.first=function(e,t){return oe$1(e,t,(function(e,t,n){return z$5(n,1,1),I$7(n[0])?0===n[0].length?null:n[0][0]:J$3(n[0])?0===n[0].length()?null:n[0].get(0):null}))},Ce$1.sort=function(e,t){return oe$1(e,t,(function(t,n,r){z$5(r,1,2);let o=r[0];if(J$3(o)&&(o=o.toArray()),!1===I$7(o))throw new Error("Illegal Argument");if(r.length>1){if(!1===C$5(r[1]))throw new Error("Illegal Argument");let n=o;const a=function(e,n){return nt.callfunc(r[1],[e,n],t)};return e.isAsync?je(n,a):(n=Pe$1(n,(function(e,t){return a(e,t)})),n)}{let e=o;if(0===e.length)return [];const t={};for(let o=0;o<e.length;o++){const n=Ae$1(e[o]);""!==n&&(t[n]=!0);}if(!0===t.Array||!0===t.Dictionary||!0===t.Feature||!0===t.Point||!0===t.Polygon||!0===t.Polyline||!0===t.Multipoint||!0===t.Extent||!0===t.Function)return e.slice(0);let n=0,r="";for(const o in t)n++,r=o;return e=n>1||"String"===r?Pe$1(e,(function(e,t){if(null==e||e===R$3)return null==t||t===R$3?0:1;if(null==t||t===R$3)return -1;const n=$$4(e),r=$$4(t);return n<r?-1:n===r?0:1})):"Number"===r?Pe$1(e,(function(e,t){return e-t})):"Boolean"===r?Pe$1(e,(function(e,t){return e===t?0:t?-1:1})):"Date"===r?Pe$1(e,(function(e,t){return t-e})):e.slice(0),e}}))};const Ye={};for(const lt in Ce$1)Ye[lt]=new T$4(Ce$1[lt]);z$3(Ce$1,oe$1);for(const lt in Ce$1)Ce$1[lt]=new T$4(Ce$1[lt]);const Ve$1=function(){};Ve$1.prototype=Ce$1;const Ge=function(){};function ze$1(e,t,n){const r={};e||(e={}),n||(n={}),r._SymbolsMap={},r.textformatting=1,r.infinity=1,r.pi=1;for(const o in t)r[o]=1;for(const o in n)r[o]=1;for(const o in e)r[o]=1;return r}function qe$1(e,t,o){const a=o?new Ge:new Ve$1;e||(e={}),t||(t={});const l=new h$9({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});l.immutable=!1,a._SymbolsMap={textformatting:1,infinity:1,pi:1},a.textformatting=l,a.infinity=Number.POSITIVE_INFINITY,a.pi=Math.PI;for(const n in t)a[n]=t[n],a._SymbolsMap[n]=1;for(const n in e)a._SymbolsMap[n]=1,e[n]&&"esri.Graphic"===e[n].declaredClass?a[n]=b$5.createFromGraphic(e[n]):a[n]=e[n];return a}Ge.prototype=Ye;function Ze(e,t){const n={mode:t,compiled:!0,functions:{},signatures:[],failDefferred:ae$1,standardFunction:oe$1,standardFunctionAsync:oe$1,evaluateIdentifier:et};for(let r=0;r<e.length;r++)e[r].registerFunctions(n);if("sync"===t){for(const e in n.functions)Ce$1[e]=new T$4(n.functions[e]),Ve$1.prototype[e]=Ce$1[e];for(let e=0;e<n.signatures.length;e++)r$7(n.signatures[e],"sync");}else {for(const e in n.functions)Ye[e]=new T$4(n.functions[e]),Ge.prototype[e]=Ye[e];for(let e=0;e<n.signatures.length;e++)r$7(n.signatures[e],"async");}}function et(e,t){const n=t.name;if("_SymbolsMap"===n)throw "Illegal";if(e.localStack.length>0){if("_t"!==n.substr(0,2).toLowerCase()&&void 0!==e.localStack[e.localStack.length-1][n])return e.localStack[e.localStack.length-1][n];const t=e.mangleMap[n];if(void 0!==t&&void 0!==e.localStack[e.localStack.length-1][t])return e.localStack[e.localStack.length-1][t]}if("_t"!==n.substr(0,2).toLowerCase()&&void 0!==e.globalScope[n])return e.globalScope[n];if(1===e.globalScope._SymbolsMap[n])return e.globalScope[n];const r=e.mangleMap[n];return void 0!==r?e.globalScope[r]:void 0}let tt=0;const nt={error(e,t,n){throw new Error(b$4(e,t,n))},__awaiter:(e,t,n,r)=>f$8(((n,o)=>{function a(e){try{s(r.next(e));}catch(t){o(t);}}function l(e){try{s(r.throw(e));}catch(t){o(t);}}function s(e){e.done?n(e.value):e.value&&e.value.then?e.value.then(a,l):(tt++,tt%100==0?setTimeout((()=>{tt=0,a(e.value);}),0):a(e.value));}s((r=r.apply(e,t||[])).next());})),functionDepthchecker:(e,t)=>function(){if(t.depthCounter++,t.localStack.push([]),t.depthCounter>64)throw new Error("Exceeded maximum function depth");const n=e.apply(this,arguments);return O$6(n)?n.then((e=>(t.depthCounter--,t.localStack.length=t.localStack.length-1,e))):(t.depthCounter--,t.localStack.length=t.localStack.length-1,n)},castString:e=>$$4(e),aCheck(e,t){if(C$5(e))throw new Error(b$4({type:t},"RUNTIME","FUNCTIONCONTEXTILLEGAL"));return e===R$3?null:e},Dictionary:h$9,Feature:b$5,dictionary(e){const t={};for(let n=0;n<e.length;n+=2){if(C$5(e[n+1]))throw new Error("Illegal Argument");if(!1===Z$4(e[n]))throw new Error("Illegal Argument");e[n+1]===R$3?t[e[n].toString()]=null:t[e[n].toString()]=e[n+1];}const r=new h$9(t);return r.immutable=!1,r},strCheck(e){if(!1===Z$4(e))throw new Error("Illegal Argument");return e},unary(e,t){if(v$5(e)){if("!"===t)return !e;if("-"===t)return -1*ee$2(e);if("+"===t)return 1*ee$2(e);if("~"===t)return ~ee$2(e);throw new Error(b$4({type:"UnaryExpression",operator:t,prefix:null,argument:null},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))}if("-"===t)return -1*ee$2(e);if("+"===t)return 1*ee$2(e);if("~"===t)return ~ee$2(e);throw new Error(b$4({type:"UnaryExpression",operator:t,prefix:null,argument:null},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))},logicalCheck(e){if(!1===v$5(e)){throw new Error(b$4({type:"LogicalExpression",operator:null,left:null,right:null},"RUNTIME","ONLYORORAND"))}return e},logical(e,t,n){if(v$5(e)&&v$5(t))switch(n){case"||":return e||t;case"&&":return e&&t;default:throw new Error(b$4({type:"LogicalExpression",operator:null,left:null,right:null},"RUNTIME","ONLYORORAND"))}throw new Error(b$4({type:"LogicalExpression",operator:null,left:null,right:null},"RUNTIME","ONLYORORAND"))},binary(e,t,n){switch(n){case"|":case"<<":case">>":case">>>":case"^":case"&":return be$2(ee$2(e),ee$2(t),n);case"==":case"=":return W$2(e,t);case"!=":return !W$2(e,t);case"<":case">":case"<=":case">=":return B$4(e,t,n);case"+":return Z$4(e)||Z$4(t)?$$4(e)+$$4(t):ee$2(e)+ee$2(t);case"-":return ee$2(e)-ee$2(t);case"*":return ee$2(e)*ee$2(t);case"/":return ee$2(e)/ee$2(t);case"%":return ee$2(e)%ee$2(t);default:throw new Error(b$4({type:"BinaryExpression",operator:n,left:e,right:t},"RUNTIME","OPERATORNOTRECOGNISED"))}},assign(e,t,n){switch(t){case"=":return e===R$3?null:e;case"/=":return ee$2(n)/ee$2(e);case"*=":return ee$2(n)*ee$2(e);case"-=":return ee$2(n)-ee$2(e);case"+=":return Z$4(n)||Z$4(e)?$$4(n)+$$4(e):ee$2(n)+ee$2(e);case"%=":return ee$2(n)%ee$2(e);default:throw new Error(b$4({type:"AssignmentExpression",operator:t,left:null,right:null},"RUNTIME","OPERATORNOTRECOGNISED"))}},update(e,t,n,r){const o=ee$2(e[t]);return e[t]="++"===n?o+1:o-1,!1===r?o:"++"===n?o+1:o-1},graphicToFeature:(e,t)=>null===e?null:b$5.createFromGraphicLikeObject(e.geometry,e.attributes,t),memberupdate(e,t,o,a){let l;if(I$7(e)){if(!Y$2(t))throw new Error("Invalid Parameter");if(t<0&&(t=e.length+t),t<0||t>=e.length)throw new Error("Assignment outside of array bounds");l=ee$2(e[t]),e[t]="++"===o?l+1:l-1;}else if(e instanceof h$9){if(!1===Z$4(t))throw new Error("Dictionary accessor must be a string");if(!0!==e.hasField(t))throw new Error("Invalid Parameter");l=ee$2(e.field(t)),e.setField(t,"++"===o?l+1:l-1);}else {if(!(e instanceof b$5))throw J$3(e)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Z$4(t))throw new Error("Feature accessor must be a string");if(!0!==e.hasField(t))throw new Error("Invalid Parameter");l=ee$2(e.field(t)),e.setField(t,"++"===o?l+1:l-1);}return !1===a?l:"++"===o?l+1:l-1},assignmember(e,t,o,a){if(I$7(e)){if(!Y$2(t))throw new Error("Invalid Parameter");if(t<0&&(t=e.length+t),t<0||t>e.length)throw new Error("Assignment outside of array bounds");if(t===e.length){if("="!==o)throw new Error("Invalid Parameter");e[t]=this.assign(a,o,e[t]);}else e[t]=this.assign(a,o,e[t]);}else if(e instanceof h$9){if(!1===Z$4(t))throw new Error("Dictionary accessor must be a string");if(!0===e.hasField(t))e.setField(t,this.assign(a,o,e.field(t)));else {if("="!==o)throw new Error("Invalid Parameter");e.setField(t,this.assign(a,o,null));}}else {if(!(e instanceof b$5))throw J$3(e)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Z$4(t))throw new Error("Feature accessor must be a string");if(!0===e.hasField(t))e.setField(t,this.assign(a,o,e.field(t)));else {if("="!==o)throw new Error("Invalid Parameter");e.setField(t,this.assign(a,o,null));}}},member(e,t){if(null===e){throw new Error(b$4({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","NOTFOUND"))}if(e instanceof A$5){if(Z$4(t))return e.field(t);throw new Error(b$4({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"))}if(e instanceof h$9||e instanceof b$5){if(Z$4(t))return e.field(t);throw new Error(b$4({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"))}if(e instanceof p$5){if(Z$4(t))return ve$1(e,t,"MemberExpression");throw new Error(b$4({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"))}if(I$7(e)){if(Y$2(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=e.length+t),t>=e.length||t<0){throw new Error(b$4({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","OUTOFBOUNDS"))}return e[t]}throw new Error(b$4({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"))}if(Z$4(e)){if(Y$2(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=e.length+t),t>=e.length||t<0){throw new Error(b$4({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","OUTOFBOUNDS"))}return e[t]}throw new Error(b$4({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"))}if(J$3(e)){if(Y$2(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=e.length()+t),t>=e.length()||t<0){throw new Error(b$4({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","OUTOFBOUNDS"))}return e.get(t)}throw new Error(b$4({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"))}throw new Error(b$4({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"))},callfunc(e,t,n){return e instanceof T$4?e.fn(n,t):e instanceof k$4?e.fn.apply(this,t):e.apply(this,t)}};function rt(e){console.log(e);}function ot(e,t=null,n=!1){null===t&&(t={vars:{},customfunctions:{}});const r={isAsync:n,globalScope:ze$1(t.vars,n?Ye:Ce$1,t.customfunctions),localScope:null,mangleMap:{},console:rt,lrucache:t.lrucache,interceptor:t.interceptor,services:t.services,symbols:{symbolCounter:0}};let o=le$1(r,e.body[0].body);""===o&&(o="lc.voidOperation; ");let a="";a=n?"var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n"+o+"\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); ":"var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n "+o+"\n return lastStatement; } \n return this.postProcess(mainBody()); ";const l={lc:Te$2,lang:nt,mangles:r.mangleMap,postProcess(e){if(e instanceof M$6&&(e=e.value),e instanceof N$7&&(e=e.value),e===R$3&&(e=null),e===j$4)throw new Error("Cannot return BREAK");if(e===D$8)throw new Error("Cannot return CONTINUE");if(C$5(e))throw new Error("Cannot return FUNCTION");return e},prepare(e,t){let n=e.spatialReference;null==n&&(n=new k$6({wkid:102100}));const r=qe$1(e.vars,e.customfunctions,t);return {localStack:[],isAsync:t,mangleMap:this.mangles,spatialReference:n,globalScope:r,abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,localScope:null,services:e.services,console:e.console?e.console:rt,lrucache:e.lrucache,interceptor:e.interceptor,symbols:{symbolCounter:0},depthCounter:1}}};return new Function("context","spatialReference",a).bind(l)}function at(){return import('./geomasync-a327391e.js').then((e=>(Ze([e],"async"),!0)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function J$1(e,r){const t=[];for(let n=0;n<r.arguments.length;n++)t.push($$2(e,r.arguments[n]));return t}function Q$1(e,r,t){try{return t(e,r,J$1(e,r))}catch(n){throw n}}function $$2(e,r){try{switch(r.type){case"EmptyStatement":return R$3;case"VariableDeclarator":return we(e,r);case"VariableDeclaration":return he(e,r);case"BlockStatement":return ue(e,r);case"FunctionDeclaration":return pe(e,r);case"ReturnStatement":return fe(e,r);case"IfStatement":return ce(e,r);case"ExpressionStatement":return le(e,r);case"AssignmentExpression":return se(e,r);case"UpdateExpression":return ae(e,r);case"BreakStatement":return j$4;case"ContinueStatement":return D$8;case"TemplateElement":return ve(e,r);case"TemplateLiteral":return Te(e,r);case"ForStatement":return ne(e,r);case"ForInStatement":return te(e,r);case"Identifier":return Re(e,r);case"MemberExpression":return de(e,r);case"Literal":return r.value;case"CallExpression":return Oe(e,r);case"UnaryExpression":return ge(e,r);case"BinaryExpression":return Ie(e,r);case"LogicalExpression":return ye(e,r);case"ArrayExpression":return Ne(e,r);case"ObjectExpression":return ee(e,r);case"Property":return re(e,r);default:throw new Error(b$4(r,"RUNTIME","UNREOGNISED"))}}catch(t){throw t}}function ee(e,r){const n={};for(let t=0;t<r.properties.length;t++){const o=$$2(e,r.properties[t]);if(C$5(o.value))throw new Error("Illegal Argument");if(!1===Z$4(o.key))throw new Error("Illegal Argument");o.value===R$3?n[o.key.toString()]=null:n[o.key.toString()]=o.value;}const o=new h$9(n);return o.immutable=!1,o}function re(e,r){return {key:"Identifier"===r.key.type?r.key.name:$$2(e,r.key),value:$$2(e,r.value)}}function te(e,r){const o=$$2(e,r.right);"VariableDeclaration"===r.left.type&&$$2(e,r.left);let a=null,i="";if("VariableDeclaration"===r.left.type){const e=r.left.declarations[0].id;"Identifier"===e.type&&(i=e.name);}else "Identifier"===r.left.type&&(i=r.left.name);if(!i)throw new Error(b$4(r,"RUNTIME","INVALIDVARIABLE"));if(i=i.toLowerCase(),null!==e.localScope&&void 0!==e.localScope[i]&&(a=e.localScope[i]),null===a&&void 0!==e.globalScope[i]&&(a=e.globalScope[i]),null===a)throw new Error(b$4(r,"RUNTIME","VARIABLENOTDECLARED"));if(I$7(o)||Z$4(o)){const t=o.length;for(let n=0;n<t;n++){a.value=n;const t=$$2(e,r.body);if(t===j$4)break;if(t instanceof M$6)return t}return R$3}if(J$3(o)){for(let t=0;t<o.length();t++){a.value=t;const n=$$2(e,r.body);if(n===j$4)break;if(n instanceof M$6)return n}return R$3}if(!(o instanceof h$9||o instanceof b$5))return R$3;{const t=o.keys();for(let n=0;n<t.length;n++){a.value=t[n];const o=$$2(e,r.body);if(o===j$4)break;if(o instanceof M$6)return o}}}function ne(e,r){null!==r.init&&$$2(e,r.init);const t={testResult:!0,lastAction:R$3};do{oe(e,r,t);}while(!0===t.testResult);return t.lastAction instanceof M$6?t.lastAction:R$3}function oe(e,r,t){if(null!==r.test){if(t.testResult=$$2(e,r.test),!1===t.testResult)return;if(!0!==t.testResult)throw new Error(b$4(r,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))}t.lastAction=$$2(e,r.body),t.lastAction!==j$4?t.lastAction instanceof M$6?t.testResult=!1:null!==r.update&&$$2(e,r.update):t.testResult=!1;}function ae(e,r){let o,a=null,i="";if("MemberExpression"===r.argument.type){if(a=$$2(e,r.argument.object),!0===r.argument.computed?i=$$2(e,r.argument.property):"Identifier"===r.argument.property.type&&(i=r.argument.property.name),I$7(a)){if(!Y$2(i))throw new Error("Invalid Parameter");if(i<0&&(i=a.length+i),i<0||i>=a.length)throw new Error("Assignment outside of array bounds");o=ee$2(a[i]),a[i]="++"===r.operator?o+1:o-1;}else if(a instanceof h$9){if(!1===Z$4(i))throw new Error("Dictionary accessor must be a string");if(!0!==a.hasField(i))throw new Error("Invalid Parameter");o=ee$2(a.field(i)),a.setField(i,"++"===r.operator?o+1:o-1);}else {if(!(a instanceof b$5))throw J$3(a)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Z$4(i))throw new Error("Feature accessor must be a string");if(!0!==a.hasField(i))throw new Error("Invalid Parameter");o=ee$2(a.field(i)),a.setField(i,"++"===r.operator?o+1:o-1);}return !1===r.prefix?o:"++"===r.operator?o+1:o-1}if(a="Identifier"===r.argument.type?r.argument.name.toLowerCase():"",!a)throw new Error("Invalid identifier");if(null!==e.localScope&&void 0!==e.localScope[a])return o=ee$2(e.localScope[a].value),e.localScope[a]={value:"++"===r.operator?o+1:o-1,valueset:!0,node:r},!1===r.prefix?o:"++"===r.operator?o+1:o-1;if(void 0!==e.globalScope[a])return o=ee$2(e.globalScope[a].value),e.globalScope[a]={value:"++"===r.operator?o+1:o-1,valueset:!0,node:r},!1===r.prefix?o:"++"===r.operator?o+1:o-1;throw new Error("Variable not recognised")}function ie(e,r,t,n){switch(r){case"=":return e===R$3?null:e;case"/=":return ee$2(t)/ee$2(e);case"*=":return ee$2(t)*ee$2(e);case"-=":return ee$2(t)-ee$2(e);case"+=":return Z$4(t)||Z$4(e)?$$4(t)+$$4(e):ee$2(t)+ee$2(e);case"%=":return ee$2(t)%ee$2(e);default:throw new Error(b$4(n,"RUNTIME","OPERATORNOTRECOGNISED"))}}function se(e,r){const o=$$2(e,r.right);let a=null,i="";if("MemberExpression"===r.left.type){if(a=$$2(e,r.left.object),!0===r.left.computed?i=$$2(e,r.left.property):"Identifier"===r.left.property.type&&(i=r.left.property.name),I$7(a)){if(!Y$2(i))throw new Error("Invalid Parameter");if(i<0&&(i=a.length+i),i<0||i>a.length)throw new Error("Assignment outside of array bounds");if(i===a.length){if("="!==r.operator)throw new Error("Invalid Parameter");a[i]=ie(o,r.operator,a[i],r);}else a[i]=ie(o,r.operator,a[i],r);}else if(a instanceof h$9){if(!1===Z$4(i))throw new Error("Dictionary accessor must be a string");if(!0===a.hasField(i))a.setField(i,ie(o,r.operator,a.field(i),r));else {if("="!==r.operator)throw new Error("Invalid Parameter");a.setField(i,ie(o,r.operator,null,r));}}else {if(!(a instanceof b$5))throw J$3(a)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Z$4(i))throw new Error("Feature accessor must be a string");if(!0===a.hasField(i))a.setField(i,ie(o,r.operator,a.field(i),r));else {if("="!==r.operator)throw new Error("Invalid Parameter");a.setField(i,ie(o,r.operator,null,r));}}return R$3}if(a=r.left.name.toLowerCase(),null!==e.localScope&&void 0!==e.localScope[a])return e.localScope[a]={value:ie(o,r.operator,e.localScope[a].value,r),valueset:!0,node:r.right},R$3;if(void 0!==e.globalScope[a])return e.globalScope[a]={value:ie(o,r.operator,e.globalScope[a].value,r),valueset:!0,node:r.right},R$3;throw new Error("Variable not recognised")}function le(e,r){if("AssignmentExpression"===r.expression.type||"UpdateExpression"===r.expression.type)return $$2(e,r.expression);if("CallExpression"===r.expression.type){const t=$$2(e,r.expression);return t===R$3?R$3:new N$7(t)}{const t=$$2(e,r.expression);return t===R$3?R$3:new N$7(t)}}function ce(e,r){if("AssignmentExpression"===r.test.type||"UpdateExpression"===r.test.type)throw new Error(b$4(r.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));const t=$$2(e,r.test);if(!0===t)return $$2(e,r.consequent);if(!1===t)return null!==r.alternate?$$2(e,r.alternate):R$3;throw new Error(b$4(r,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))}function ue(e,r){let t=R$3;for(let n=0;n<r.body.length;n++)if(t=$$2(e,r.body[n]),t instanceof M$6||t===j$4||t===D$8)return t;return t}function fe(e,r){if(null===r.argument)return new M$6(R$3);const t=$$2(e,r.argument);return new M$6(t)}function pe(e,r){const t=r.id.name.toLowerCase();return e.globalScope[t]={valueset:!0,node:null,value:new t$2(r,e)},R$3}function he(e,r){for(let t=0;t<r.declarations.length;t++)$$2(e,r.declarations[t]);return R$3}function we(e,r){let t=null===r.init?null:$$2(e,r.init);if(t===R$3&&(t=null),"Identifier"!==r.id.type)throw new Error("Can only assign a regular variable");const n=r.id.name.toLowerCase();return null!==e.localScope?e.localScope[n]={value:t,valueset:!0,node:r.init}:e.globalScope[n]={value:t,valueset:!0,node:r.init},R$3}let me=0;function Ee(e,r,n){let o;switch(r=r.toLowerCase()){case"hasz":{const r=e.hasZ;return void 0!==r&&r}case"hasm":{const r=e.hasM;return void 0!==r&&r}case"spatialreference":{let r=e.spatialReference._arcadeCacheId;if(void 0===r){let t=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(t=!1),t&&(me++,e.spatialReference._arcadeCacheId=me,r=me);}const n=new h$9({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==r&&(n._arcadeCacheId="SPREF"+r.toString()),n}}switch(e.type){case"extent":switch(r){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const t=e[r];return void 0!==t?t:null}case"type":return "Extent"}break;case"polygon":switch(r){case"rings":o=e.cache._arcadeCacheId,void 0===o&&(me++,o=me,e.cache._arcadeCacheId=o);return new h$a(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,o);case"type":return "Polygon"}break;case"point":switch(r){case"x":case"y":case"z":case"m":return void 0!==e[r]?e[r]:null;case"type":return "Point"}break;case"polyline":switch(r){case"paths":o=e.cache._arcadeCacheId,void 0===o&&(me++,o=me,e.cache._arcadeCacheId=o);return new h$a(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,o);case"type":return "Polyline"}break;case"multipoint":switch(r){case"points":o=e.cache._arcadeCacheId,void 0===o&&(me++,o=me,e.cache._arcadeCacheId=o);return new i$6(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,o,1);case"type":return "Multipoint"}}throw new Error(b$4(n,"RUNTIME","PROPERTYNOTFOUND"))}function de(e,r){try{const o=$$2(e,r.object);if(null===o)throw new Error(b$4(r,"RUNTIME","NOTFOUND"));if(!1===r.computed){if("Identifier"===r.property.type){if(o instanceof h$9||o instanceof b$5)return o.field(r.property.name);if(o instanceof p$5)return Ee(o,r.property.name,r)}throw new Error(b$4(r,"RUNTIME","INVALIDTYPE"))}{let a=$$2(e,r.property);if(o instanceof h$9||o instanceof b$5){if(Z$4(a))return o.field(a);throw new Error(b$4(r,"RUNTIME","INVALIDTYPE"))}if(o instanceof p$5){if(Z$4(a))return Ee(o,a,r);throw new Error(b$4(r,"RUNTIME","INVALIDTYPE"))}if(I$7(o)){if(Y$2(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=o.length+a),a>=o.length||a<0)throw new Error(b$4(r,"RUNTIME","OUTOFBOUNDS"));return o[a]}throw new Error(b$4(r,"RUNTIME","INVALIDTYPE"))}if(Z$4(o)){if(Y$2(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=o.length+a),a>=o.length||a<0)throw new Error(b$4(r,"RUNTIME","OUTOFBOUNDS"));return o[a]}throw new Error(b$4(r,"RUNTIME","INVALIDTYPE"))}if(J$3(o)){if(Y$2(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=o.length()+a),a>=o.length()||a<0)throw new Error(b$4(r,"RUNTIME","OUTOFBOUNDS"));return o.get(a)}throw new Error(b$4(r,"RUNTIME","INVALIDTYPE"))}throw new Error(b$4(r,"RUNTIME","INVALIDTYPE"))}}catch(o){throw o}}function ge(e,r){try{const t=$$2(e,r.argument);if(v$5(t)){if("!"===r.operator)return !t;if("-"===r.operator)return -1*ee$2(t);if("+"===r.operator)return 1*ee$2(t);if("~"===r.operator)return ~ee$2(t);throw new Error(b$4(r,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))}if("~"===r.operator)return ~ee$2(t);if("-"===r.operator)return -1*ee$2(t);if("+"===r.operator)return 1*ee$2(t);throw new Error(b$4(r,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))}catch(t){throw t}}function Ne(e,r){try{const t=[];for(let n=0;n<r.elements.length;n++){const o=$$2(e,r.elements[n]);if(C$5(o))throw new Error(b$4(r,"RUNTIME","FUNCTIONCONTEXTILLEGAL"));o===R$3?t.push(null):t.push(o);}return t}catch(t){throw t}}function Ie(e,r){try{const t=[$$2(e,r.left),$$2(e,r.right)],n=t[0],o=t[1];switch(r.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return be$2(ee$2(n),ee$2(o),r.operator);case"==":return W$2(n,o);case"!=":return !W$2(n,o);case"<":case">":case"<=":case">=":return B$4(n,o,r.operator);case"+":return Z$4(n)||Z$4(o)?$$4(n)+$$4(o):ee$2(n)+ee$2(o);case"-":return ee$2(n)-ee$2(o);case"*":return ee$2(n)*ee$2(o);case"/":return ee$2(n)/ee$2(o);case"%":return ee$2(n)%ee$2(o);default:throw new Error(b$4(r,"RUNTIME","OPERATORNOTRECOGNISED"))}}catch(t){throw t}}function ye(e,r){try{if("AssignmentExpression"===r.left.type||"UpdateExpression"===r.left.type)throw new Error(b$4(r.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===r.right.type||"UpdateExpression"===r.right.type)throw new Error(b$4(r.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));const t=$$2(e,r.left);if(v$5(t))switch(r.operator){case"||":if(!0===t)return t;{const t=$$2(e,r.right);if(v$5(t))return t;throw new Error(b$4(r,"RUNTIME","ONLYORORAND"))}case"&&":if(!1===t)return t;{const t=$$2(e,r.right);if(v$5(t))return t;throw new Error(b$4(r,"RUNTIME","ONLYORORAND"))}default:throw new Error(b$4(r,"RUNTIME","ONLYORORAND"))}throw new Error(b$4(r,"RUNTIME","ONLYBOOLEAN"))}catch(t){throw t}}function ve(e,r){return r.value?r.value.cooked:""}function Te(e,r){let t="",n=0;for(const o of r.quasis)if(t+=o.value?o.value.cooked:"",!1===o.tail){t+=r.expressions[n]?$$4($$2(e,r.expressions[n])):"",n++;}return t}function Re(e,r){let t;try{const n=r.name.toLowerCase();if(null!==e.localScope&&void 0!==e.localScope[n])return t=e.localScope[n],!0===t.valueset||(t.value=$$2(e,t.node),t.valueset=!0),t.value;if(void 0!==e.globalScope[n])return t=e.globalScope[n],!0===t.valueset||(t.value=$$2(e,t.node),t.valueset=!0),t.value;throw new Error(b$4(r,"RUNTIME","VARIABLENOTFOUND"))}catch(n){throw n}}function Oe(e,r){try{if("Identifier"!==r.callee.type)throw new Error(b$4(r,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[r.callee.name.toLowerCase()]){const t=e.localScope[r.callee.name.toLowerCase()];if(t.value instanceof T$4)return t.value.fn(e,r);if(t.value instanceof t$2)return xe(e,r,t.value.definition);throw new Error(b$4(r,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[r.callee.name.toLowerCase()]){const t=e.globalScope[r.callee.name.toLowerCase()];if(t.value instanceof T$4)return t.value.fn(e,r);if(t.value instanceof t$2)return xe(e,r,t.value.definition);throw new Error(b$4(r,"RUNTIME","NOTAFUNCTION"))}throw new Error(b$4(r,"RUNTIME","NOTFOUND"))}catch(t){throw t}}const Se={};function be(o){return null==o?"":I$7(o)||J$3(o)?"Array":E$6(o)?"Date":Z$4(o)?"String":v$5(o)?"Boolean":Y$2(o)?"Number":o instanceof e$8?"Attachment":o instanceof s$9?"Portal":o instanceof h$9?"Dictionary":o instanceof b$5?"Feature":o instanceof b$9?"Point":o instanceof v$6?"Polygon":o instanceof m$5?"Polyline":o instanceof m$6?"Multipoint":o instanceof M$7?"Extent":C$5(o)?"Function":A$4(o)?"FeatureSet":L$4(o)?"FeatureSetCollection":o===R$3?"":"number"==typeof o&&isNaN(o)?"Number":"Unrecognised Type"}function Ue(e,r,t,n){try{const o=$$2(e,r.arguments[t]);if(W$2(o,n))return $$2(e,r.arguments[t+1]);{const o=r.arguments.length-t;return 1===o?$$2(e,r.arguments[t]):2===o?null:3===o?$$2(e,r.arguments[t+2]):Ue(e,r,t+2,n)}}catch(o){throw o}}function Ae(e,r,t,n){try{if(!0===n)return $$2(e,r.arguments[t+1]);if(3===r.arguments.length-t)return $$2(e,r.arguments[t+2]);{const n=$$2(e,r.arguments[t+2]);if(!1===v$5(n))throw new Error("WHEN needs boolean test conditions");return Ae(e,r,t+2,n)}}catch(o){throw o}}function Ce(e,r){const t=e.length,n=Math.floor(t/2);return 0===t?[]:1===t?[e[0]]:Fe(Ce(e.slice(0,n),r),Ce(e.slice(n,t),r),r)}function Fe(e,r,t){const n=[];for(;e.length>0||r.length>0;)if(e.length>0&&r.length>0){let o=t(e[0],r[0]);isNaN(o)&&(o=0),o<=0?(n.push(e[0]),e=e.slice(1)):(n.push(r[0]),r=r.slice(1));}else e.length>0?(n.push(e[0]),e=e.slice(1)):r.length>0&&(n.push(r[0]),r=r.slice(1));return n}function Me(e,r,t){try{const n=e.body;if(t.length!==e.params.length)throw new Error("Invalid Parameter calls to function.");for(let a=0;a<t.length;a++)r.localScope[e.params[a].name.toLowerCase()]={value:t[a],valueset:!0,node:null};const o=$$2(r,n);if(o instanceof M$6)return o.value;if(o===j$4)throw new Error("Cannot Break from a Function");if(o===D$8)throw new Error("Cannot Continue from a Function");return o instanceof N$7?o.value:o}catch(n){throw n}}function xe(e,r,t){return Q$1(e,r,(function(r,n,o){const a={spatialReference:e.spatialReference,globalScope:e.globalScope,depthCounter:e.depthCounter+1,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{}};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return Me(t,a,o)}))}function Pe(e){const r=function(){const r={spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,interceptor:e.context.interceptor,localScope:{},depthCounter:e.context.depthCounter+1,globalScope:e.context.globalScope};if(r.depthCounter>64)throw new Error("Exceeded maximum function depth");return Me(e.definition,r,arguments)};return r}h$7(Se,Q$1),y$4(Se,Q$1),L$2(Se,Q$1),N$3(Se,Q$1),P$5(Se,Q$1),o$3(Se,Q$1),z$3(Se,Q$1),Se.typeof=function(e,r){return Q$1(e,r,(function(e,r,t){z$5(t,1,1);const n=be(t[0]);if("Unrecognised Type"===n)throw new Error("Unrecognised Type");return n}))},Se.iif=function(e,r){try{z$5(null===r.arguments?[]:r.arguments,3,3);const t=$$2(e,r.arguments[0]);if(!1===v$5(t))throw new Error("IF Function must have a boolean test condition");const n=$$2(e,r.arguments[1]),o=$$2(e,r.arguments[2]);return !0===t?n:o}catch(t){throw t}},Se.decode=function(e,r){try{if(r.arguments.length<2)throw new Error("Missing Parameters");if(2===r.arguments.length)return $$2(e,r.arguments[1]);{if((r.arguments.length-1)%2==0)throw new Error("Must have a default value result.");const t=$$2(e,r.arguments[0]);return Ue(e,r,1,t)}}catch(t){throw t}},Se.when=function(e,r){try{if(r.arguments.length<3)throw new Error("Missing Parameters");if(r.arguments.length%2==0)throw new Error("Must have a default value result.");const t=$$2(e,r.arguments[0]);if(!1===v$5(t))throw new Error("WHEN needs boolean test conditions");return Ae(e,r,0,t)}catch(t){throw t}},Se.top=function(e,r){return Q$1(e,r,(function(e,r,t){if(z$5(t,2,2),I$7(t[0]))return ee$2(t[1])>=t[0].length?t[0].slice(0):t[0].slice(0,ee$2(t[1]));if(J$3(t[0]))return ee$2(t[1])>=t[0].length()?t[0].slice(0):t[0].slice(0,ee$2(t[1]));throw new Error("Top cannot accept this parameter type")}))},Se.first=function(e,r){return Q$1(e,r,(function(e,r,t){return z$5(t,1,1),I$7(t[0])?0===t[0].length?null:t[0][0]:J$3(t[0])?0===t[0].length()?null:t[0].get(0):null}))},Se.sort=function(e,r){return Q$1(e,r,(function(e,r,t){z$5(t,1,2);let n=t[0];if(J$3(n)&&(n=n.toArray()),!1===I$7(n))throw new Error("Illegal Argument");if(t.length>1){if(!1===C$5(t[1]))throw new Error("Illegal Argument");let e=n;const r=Pe(t[1]);return e=Ce(e,(function(e,t){return r(e,t)})),e}{let e=n;if(0===e.length)return [];const r={};for(let n=0;n<e.length;n++){const t=be(e[n]);""!==t&&(r[t]=!0);}if(!0===r.Array||!0===r.Dictionary||!0===r.Feature||!0===r.Point||!0===r.Polygon||!0===r.Polyline||!0===r.Multipoint||!0===r.Extent||!0===r.Function)return e.slice(0);let t=0,o="";for(const n in r)t++,o=n;return e=t>1||"String"===o?Ce(e,(function(e,r){if(null==e||e===R$3)return null==r||r===R$3?0:1;if(null==r||r===R$3)return -1;const t=$$4(e),n=$$4(r);return t<n?-1:t===n?0:1})):"Number"===o?Ce(e,(function(e,r){return e-r})):"Boolean"===o?Ce(e,(function(e,r){return e===r?0:r?-1:1})):"Date"===o?Ce(e,(function(e,r){return r-e})):e.slice(0),e}}))};for(const He in Se)Se[He]={value:new T$4(Se[He]),valueset:!0,node:null};const De=function(){};function Le(e,r){const o=new De;e||(e={}),r||(r={});const a=new h$9({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});a.immutable=!1,o.textformatting={value:a,valueset:!0,node:null};for(const t in r)o[t]={value:new T$4(r[t]),native:!0,valueset:!0,node:null};for(const t in e)e[t]&&"esri.Graphic"===e[t].declaredClass?o[t]={value:b$5.createFromGraphic(e[t]),valueset:!0,node:null}:o[t]={value:e[t],valueset:!0,node:null};return o}De.prototype=Se,De.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},De.prototype.pi={value:Math.PI,valueset:!0,node:null};function _e(e){console.log(e);}function ke(e){const r={mode:"sync",compiled:!1,functions:{},signatures:[],standardFunction:Q$1,evaluateIdentifier:Re,arcadeCustomFunctionHandler:Pe};for(let t=0;t<e.length;t++)e[t].registerFunctions(r);for(const t in r.functions)Se[t]={value:new T$4(r.functions[t]),valueset:!0,node:null},De.prototype[t]=Se[t];for(let t=0;t<r.signatures.length;t++)r$7(r.signatures[t],"async");}function Ve(e,r){let t=r.spatialReference;null==t&&(t=new k$6({wkid:102100}));let n=$$2({spatialReference:t,globalScope:Le(r.vars,r.customfunctions),localScope:null,console:r.console?r.console:_e,lrucache:r.lrucache,interceptor:r.interceptor,depthCounter:1},e.body[0].body);if(n instanceof M$6&&(n=n.value),n instanceof N$7&&(n=n.value),n===R$3&&(n=null),n===j$4)throw new Error("Cannot return BREAK");if(n===D$8)throw new Error("Cannot return CONTINUE");if(n instanceof t$2)throw new Error("Cannot return FUNCTION");if(n instanceof T$4)throw new Error("Cannot return FUNCTION");return n}function ze(e,r){return p$3(e,r)}function qe(e,r){return u$4(e,r)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$4={AssignmentExpression:"AssignmentExpression",ArrayExpression:"ArrayExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",ContinueStatement:"ContinueStatement",EmptyStatement:"EmptyStatement",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",Literal:"Literal",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",ObjectExpression:"ObjectExpression",Program:"Program",Property:"Property",ReturnStatement:"ReturnStatement",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e$3{constructor(){this.attach=!1,this.comments=[],this.stack=[],this.leading=[],this.trailing=[];}insertInnerComments(e,n){if(e.type===e$4.BlockStatement&&0===e.body.length){const t=[];for(let e=this.leading.length-1;e>=0;--e){const s=this.leading[e];n.end.offset>=s.start&&(t.unshift(s.comment),this.leading.splice(e,1),this.trailing.splice(e,1));}t.length&&(e.innerComments=t);}}findTrailingComments(t){let e=[];if(this.trailing.length>0){for(let n=this.trailing.length-1;n>=0;--n){const s=this.trailing[n];s.start>=t.end.offset&&e.unshift(s.comment);}return this.trailing.length=0,e}const n=this.stack[this.stack.length-1];if(n&&n.node.trailingComments){const s=n.node.trailingComments[0];s&&s.range[0]>=t.end.offset&&(e=n.node.trailingComments,delete n.node.trailingComments);}return e}findLeadingComments(t){const e=[];let n;for(;this.stack.length>0;){const e=this.stack[this.stack.length-1];if(!(e&&e.start>=t.start.offset))break;n=e.node,this.stack.pop();}if(n){for(let s=(n.leadingComments?n.leadingComments.length:0)-1;s>=0;--s){const i=n.leadingComments[s];i.range[1]<=t.start.offset&&(e.unshift(i),n.leadingComments.splice(s,1));}return n.leadingComments&&0===n.leadingComments.length&&delete n.leadingComments,e}for(let s=this.leading.length-1;s>=0;--s){const n=this.leading[s];n.start<=t.start.offset&&(e.unshift(n.comment),this.leading.splice(s,1));}return e}visitNode(e,n){if(e.type===e$4.Program&&e.body.length>0)return;this.insertInnerComments(e,n);const s=this.findTrailingComments(n),i=this.findLeadingComments(n);i.length>0&&(e.leadingComments=i),s.length>0&&(e.trailingComments=s),this.stack.push({node:e,start:n.start.offset});}visitComment(t,e){if(this.comments.push(t),this.attach){const n={comment:{type:t.type,value:t.value,range:[e.start.offset,e.end.offset]},start:e.start.offset};t.loc&&(n.comment.loc=t.loc),this.leading.push(n),this.trailing.push(n);}}visit(t,e){"Line"===t.type||"Block"===t.type?this.visitComment(t,e):this.attach&&this.visitNode(t,e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$3(r,o){if(!r)throw new Error("ASSERT: "+o)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r$2{constructor(){this.errors=[],this.tolerant=!1;}recordError(r){this.errors.push(r);}tolerate(r){if(!this.tolerant)throw r;this.recordError(r);}constructError(r,t){let e=new Error(r);try{throw e}catch(o){Object.create&&Object.defineProperty&&(e=Object.create(o),Object.defineProperty(e,"column",{value:t}));}return e}createError(r,t,e,o){const c="Line "+t+": "+o,s=this.constructError(c,e);return s.index=r,s.lineNumber=t,s.description=o,s}throwError(r,t,e,o){throw this.createError(r,t,e,o)}tolerateError(r,t,e,o){const c=this.createError(r,t,e,o);if(!this.tolerant)throw c;this.recordError(c);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$2={ForInOfLoopInitializer:"%0 loop variable declaration may not have an initializer",GeneratorInLegacyContext:"Generator declarations are not allowed in legacy contexts",IllegalBreak:"Illegal break statement",IllegalContinue:"Illegal continue statement",IllegalExportDeclaration:"Unexpected token",IllegalImportDeclaration:"Unexpected token",IllegalReturn:"Illegal return statement",InvalidEscapedReservedWord:"Keyword must not contain escaped characters",InvalidHexEscapeSequence:"Invalid hexadecimal escape sequence",InvalidLHSInAssignment:"Invalid left-hand side in assignment",InvalidLHSInForIn:"Invalid left-hand side in for-in",InvalidRegExp:"Invalid regular expression",Redeclaration:"%0 '%1' has already been declared",StaticPrototype:"Classes may not have static property named prototype",StrictParamDupe:"Strict mode function may not have duplicate parameter names",TemplateOctalLiteral:"Octal literals are not allowed in template strings.",UnexpectedEOS:"Unexpected end of input",UnexpectedIdentifier:"Unexpected identifier",UnexpectedNumber:"Unexpected number",UnexpectedString:"Unexpected string",UnexpectedTemplate:"Unexpected quasi %0",UnexpectedToken:"Unexpected token %0",UnexpectedTokenIllegal:"Unexpected token ILLEGAL",UnterminatedRegExp:"Invalid regular expression: missing /",IdentiferExpected:"Identifier expected"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$2{}class e$1 extends s$2{constructor(t,s){super(),this.type=t,this.value=s;}}class r$1 extends s$2{constructor(s){super(),this.elements=s,this.type=e$4.ArrayExpression;}}const i=["=","/=","*=","%=","+=","-="];class n$1 extends s$2{constructor(s,e,r){super(),this.operator=s,this.left=e,this.right=r,this.type=e$4.AssignmentExpression;}}const o$1=["||","&&"];class h$2 extends s$2{constructor(s,e,r){super(),this.operator=s,this.left=e,this.right=r,this.type=o$1.includes(s)?e$4.LogicalExpression:e$4.BinaryExpression;}}class p extends s$2{constructor(s){super(),this.body=s,this.type=e$4.BlockStatement;}}class a$1 extends s$2{constructor(){super(...arguments),this.type=e$4.BreakStatement;}}class u$1 extends s$2{constructor(s,e){super(),this.callee=s,this.args=e,this.type=e$4.CallExpression,this.arguments=e;}}class l extends s$2{constructor(s,e){super(),this.object=s,this.property=e,this.type=e$4.MemberExpression,this.computed=!0;}}class d$1 extends s$2{constructor(s,e){super(),this.object=s,this.property=e,this.type=e$4.MemberExpression,this.computed=!1;}}class x$2 extends s$2{constructor(){super(...arguments),this.type=e$4.ContinueStatement;}}class y$1 extends s$2{constructor(){super(...arguments),this.type=e$4.EmptyStatement;}}class m extends s$2{constructor(s){super(),this.expression=s,this.type=e$4.ExpressionStatement;}}class E$2 extends s$2{constructor(s,e,r){super(),this.left=s,this.right=e,this.body=r,this.type=e$4.ForInStatement,this.each=!1;}}class b$2 extends s$2{constructor(s,e,r,i){super(),this.init=s,this.test=e,this.update=r,this.body=i,this.type=e$4.ForStatement;}}class g$2 extends s$2{constructor(s,e,r){super(),this.id=s,this.params=e,this.body=r,this.type=e$4.FunctionDeclaration,this.generator=!1,this.expression=!1,this.async=!1;}}class S$1 extends s$2{constructor(s){super(),this.name=s,this.type=e$4.Identifier;}}class f$1 extends s$2{constructor(s,e,r){super(),this.test=s,this.consequent=e,this.alternate=r,this.type=e$4.IfStatement;}}class k$2 extends s$2{constructor(s,e){super(),this.value=s,this.raw=e,this.type=e$4.Literal;}}class j$2 extends s$2{constructor(s){super(),this.properties=s,this.type=e$4.ObjectExpression;}}class v$2 extends s$2{constructor(s,e,r,i,n,o){super(),this.kind=s,this.key=e,this.computed=r,this.value=i,this.method=n,this.shorthand=o,this.type=e$4.Property;}}class B$2 extends s$2{constructor(s){super(),this.argument=s,this.type=e$4.ReturnStatement;}}class D$3 extends s$2{constructor(s){super(),this.body=s,this.type=e$4.Program;}}class F$2 extends s$2{constructor(s,e){super(),this.value=s,this.tail=e,this.type=e$4.TemplateElement;}}class I$2 extends s$2{constructor(s,e){super(),this.quasis=s,this.expressions=e,this.type=e$4.TemplateLiteral;}}class q$2 extends s$2{constructor(s,e){super(),this.operator=s,this.argument=e,this.type=e$4.UnaryExpression,this.prefix=!0;}}class C$2 extends s$2{constructor(s,e,r){super(),this.operator=s,this.argument=e,this.prefix=r,this.type=e$4.UpdateExpression;}}class M$2 extends s$2{constructor(s,e){super(),this.declarations=s,this.kind=e,this.type=e$4.VariableDeclaration;}}class P$2 extends s$2{constructor(s,e){super(),this.id=s,this.init=e,this.type=e$4.VariableDeclarator;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},D$2={fromCodePoint:u=>u<65536?String.fromCharCode(u):String.fromCharCode(55296+(u-65536>>10))+String.fromCharCode(56320+(u-65536&1023)),isWhiteSpace:u=>32===u||9===u||11===u||12===u||160===u||u>=5760&&[5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(u)>=0,isLineTerminator:u=>10===u||13===u||8232===u||8233===u,isIdentifierStart:F=>36===F||95===F||F>=65&&F<=90||F>=97&&F<=122||92===F||F>=128&&u.NonAsciiIdentifierStart.test(D$2.fromCodePoint(F)),isIdentifierPart:F=>36===F||95===F||F>=65&&F<=90||F>=97&&F<=122||F>=48&&F<=57||92===F||F>=128&&u.NonAsciiIdentifierPart.test(D$2.fromCodePoint(F)),isDecimalDigit:u=>u>=48&&u<=57,isHexDigit:u=>u>=48&&u<=57||u>=65&&u<=70||u>=97&&u<=102,isOctalDigit:u=>u>=48&&u<=55};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s$1(e){return "0123456789abcdef".indexOf(e.toLowerCase())}function n(e){return "01234567".indexOf(e)}class r{constructor(e,t){this.source=e,this.errorHandler=t,this.trackComment=!1,this.isModule=!1,this.length=e.length,this.index=0,this.lineNumber=e.length>0?1:0,this.lineStart=0,this.curlyStack=[];}saveState(){return {index:this.index,lineNumber:this.lineNumber,lineStart:this.lineStart,curlyStack:this.curlyStack.slice()}}restoreState(e){this.index=e.index,this.lineNumber=e.lineNumber,this.lineStart=e.lineStart,this.curlyStack=e.curlyStack;}eof(){return this.index>=this.length}throwUnexpectedToken(e=e$2.UnexpectedTokenIllegal){return this.errorHandler.throwError(this.index,this.lineNumber,this.index-this.lineStart+1,e)}tolerateUnexpectedToken(e=e$2.UnexpectedTokenIllegal){this.errorHandler.tolerateError(this.index,this.lineNumber,this.index-this.lineStart+1,e);}skipSingleLineComment(e){let i=[],s=0,n=null;for(this.trackComment&&(i=[],s=this.index-e,n={start:{line:this.lineNumber,column:this.index-this.lineStart-e},end:{line:0,column:0}});!this.eof();){const r=this.source.charCodeAt(this.index);if(++this.index,D$2.isLineTerminator(r)){if(n){n.end={line:this.lineNumber,column:this.index-this.lineStart-1};const t={multiLine:!1,slice:[s+e,this.index-1],range:[s,this.index-1],loc:n};i.push(t);}return 13===r&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,i}}if(n){n.end={line:this.lineNumber,column:this.index-this.lineStart};const t={multiLine:!1,slice:[s+e,this.index],range:[s,this.index],loc:n};i.push(t);}return i}skipMultiLineComment(){const e=[];let i=0,s=null;for(this.trackComment&&(i=this.index-2,s={start:{line:this.lineNumber,column:this.index-this.lineStart-2},end:{line:0,column:0}});!this.eof();){const n=this.source.charCodeAt(this.index);if(D$2.isLineTerminator(n))13===n&&10===this.source.charCodeAt(this.index+1)&&++this.index,++this.lineNumber,++this.index,this.lineStart=this.index;else if(42===n){if(47===this.source.charCodeAt(this.index+1)){if(this.index+=2,s){s.end={line:this.lineNumber,column:this.index-this.lineStart};const t={multiLine:!0,slice:[i+2,this.index-2],range:[i,this.index],loc:s};e.push(t);}return e}++this.index;}else ++this.index;}if(s){s.end={line:this.lineNumber,column:this.index-this.lineStart};const t={multiLine:!0,slice:[i+2,this.index],range:[i,this.index],loc:s};e.push(t);}return this.tolerateUnexpectedToken(),e}scanComments(){let e=null;this.trackComment&&(e=[]);let i=0===this.index;for(;!this.eof();){let s=this.source.charCodeAt(this.index);if(D$2.isWhiteSpace(s))++this.index;else if(D$2.isLineTerminator(s))++this.index,13===s&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,i=!0;else if(47===s)if(s=this.source.charCodeAt(this.index+1),47===s){this.index+=2;const t=this.skipSingleLineComment(2);e&&(e=e.concat(t)),i=!0;}else {if(42!==s)break;{this.index+=2;const t=this.skipMultiLineComment();e&&(e=e.concat(t));}}else if(i&&45===s){if(45!==this.source.charCodeAt(this.index+1)||62!==this.source.charCodeAt(this.index+2))break;{this.index+=3;const t=this.skipSingleLineComment(3);e&&(e=e.concat(t));}}else {if(60!==s||this.isModule)break;if("!--"!==this.source.slice(this.index+1,this.index+4))break;{this.index+=4;const t=this.skipSingleLineComment(4);e&&(e=e.concat(t));}}}return e}isKeyword(e){switch((e=e.toLowerCase()).length){case 2:return "if"===e||"in"===e;case 3:return "var"===e||"for"===e;case 4:return "else"===e;case 5:return "break"===e;case 6:return "return"===e;case 8:return "function"===e||"continue"===e;default:return !1}}codePointAt(e){let t=this.source.charCodeAt(e);if(t>=55296&&t<=56319){const i=this.source.charCodeAt(e+1);if(i>=56320&&i<=57343){t=1024*(t-55296)+i-56320+65536;}}return t}scanHexEscape(e){const i="u"===e?4:2;let n=0;for(let r=0;r<i;++r){if(this.eof()||!D$2.isHexDigit(this.source.charCodeAt(this.index)))return null;n=16*n+s$1(this.source[this.index++]);}return String.fromCharCode(n)}scanUnicodeCodePointEscape(){let e=this.source[this.index],i=0;for("}"===e&&this.throwUnexpectedToken();!this.eof()&&(e=this.source[this.index++],D$2.isHexDigit(e.charCodeAt(0)));)i=16*i+s$1(e);return (i>1114111||"}"!==e)&&this.throwUnexpectedToken(),D$2.fromCodePoint(i)}getIdentifier(){const e=this.index++;for(;!this.eof();){const i=this.source.charCodeAt(this.index);if(92===i)return this.index=e,this.getComplexIdentifier();if(i>=55296&&i<57343)return this.index=e,this.getComplexIdentifier();if(!D$2.isIdentifierPart(i))break;++this.index;}return this.source.slice(e,this.index)}getComplexIdentifier(){let e,i=this.codePointAt(this.index),s=D$2.fromCodePoint(i);for(this.index+=s.length,92===i&&(117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this.scanUnicodeCodePointEscape()):(e=this.scanHexEscape("u"),null!==e&&"\\"!==e&&D$2.isIdentifierStart(e.charCodeAt(0))||this.throwUnexpectedToken()),s=e);!this.eof()&&(i=this.codePointAt(this.index),D$2.isIdentifierPart(i));)e=D$2.fromCodePoint(i),s+=e,this.index+=e.length,92===i&&(s=s.substr(0,s.length-1),117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this.scanUnicodeCodePointEscape()):(e=this.scanHexEscape("u"),null!==e&&"\\"!==e&&D$2.isIdentifierPart(e.charCodeAt(0))||this.throwUnexpectedToken()),s+=e);return s}octalToDecimal(e){let i="0"!==e,s=n(e);return !this.eof()&&D$2.isOctalDigit(this.source.charCodeAt(this.index))&&(i=!0,s=8*s+n(this.source[this.index++]),"0123".indexOf(e)>=0&&!this.eof()&&D$2.isOctalDigit(this.source.charCodeAt(this.index))&&(s=8*s+n(this.source[this.index++]))),{code:s,octal:i}}scanIdentifier(){let e;const t=this.index,s=92===this.source.charCodeAt(t)?this.getComplexIdentifier():this.getIdentifier();if(e=1===s.length?3:this.isKeyword(s)?4:"null"===s.toLowerCase()?5:"true"===s.toLowerCase()||"false"===s.toLowerCase()?1:3,3!==e&&t+s.length!==this.index){const e=this.index;this.index=t,this.tolerateUnexpectedToken(e$2.InvalidEscapedReservedWord),this.index=e;}return {type:e,value:s,lineNumber:this.lineNumber,lineStart:this.lineStart,start:t,end:this.index}}scanPunctuator(){const e=this.index;let t=this.source[this.index];switch(t){case"(":case"{":"{"===t&&this.curlyStack.push("{"),++this.index;break;case".":case")":case";":case",":case"[":case"]":case":":case"?":case"~":++this.index;break;case"}":++this.index,this.curlyStack.pop();break;default:t=this.source.substr(this.index,4),">>>="===t?this.index+=4:(t=t.substr(0,3),"==="===t||"!=="===t||">>>"===t||"<<="===t||">>="===t||"**="===t?this.index+=3:(t=t.substr(0,2),"&&"===t||"||"===t||"=="===t||"!="===t||"+="===t||"-="===t||"*="===t||"/="===t||"++"===t||"--"===t||"<<"===t||">>"===t||"&="===t||"|="===t||"^="===t||"%="===t||"<="===t||">="===t||"=>"===t||"**"===t?this.index+=2:(t=this.source[this.index],"<>=!+-*%&|^/".indexOf(t)>=0&&++this.index)));}return this.index===e&&this.throwUnexpectedToken(),{type:7,value:t,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}}scanHexLiteral(e){let i="";for(;!this.eof()&&D$2.isHexDigit(this.source.charCodeAt(this.index));)i+=this.source[this.index++];return 0===i.length&&this.throwUnexpectedToken(),D$2.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseInt("0x"+i,16),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}}scanBinaryLiteral(e){let i="";for(;!this.eof();){const e=this.source[this.index];if("0"!==e&&"1"!==e)break;i+=this.source[this.index++];}if(0===i.length&&this.throwUnexpectedToken(),!this.eof()){const e=this.source.charCodeAt(this.index);(D$2.isIdentifierStart(e)||D$2.isDecimalDigit(e))&&this.throwUnexpectedToken();}return {type:6,value:parseInt(i,2),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}}scanOctalLiteral(e,i){let s="",n=!1;for(D$2.isOctalDigit(e.charCodeAt(0))?(n=!0,s="0"+this.source[this.index++]):++this.index;!this.eof()&&D$2.isOctalDigit(this.source.charCodeAt(this.index));)s+=this.source[this.index++];return n||0!==s.length||this.throwUnexpectedToken(),(D$2.isIdentifierStart(this.source.charCodeAt(this.index))||D$2.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken(),{type:6,value:parseInt(s,8),octal:n,lineNumber:this.lineNumber,lineStart:this.lineStart,start:i,end:this.index}}scanNumericLiteral(){const i=this.index;let s=this.source[i];r$3(D$2.isDecimalDigit(s.charCodeAt(0))||"."===s,"Numeric literal must start with a decimal digit or a decimal point");let n="";if("."!==s){if(n=this.source[this.index++],s=this.source[this.index],"0"===n){if("x"===s||"X"===s)return ++this.index,this.scanHexLiteral(i);if("b"===s||"B"===s)return ++this.index,this.scanBinaryLiteral(i);if("o"===s||"O"===s)return this.scanOctalLiteral(s,i)}for(;D$2.isDecimalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++];s=this.source[this.index];}if("."===s){for(n+=this.source[this.index++];D$2.isDecimalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++];s=this.source[this.index];}if("e"===s||"E"===s)if(n+=this.source[this.index++],s=this.source[this.index],"+"!==s&&"-"!==s||(n+=this.source[this.index++]),D$2.isDecimalDigit(this.source.charCodeAt(this.index)))for(;D$2.isDecimalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++];else this.throwUnexpectedToken();return D$2.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseFloat(n),lineNumber:this.lineNumber,lineStart:this.lineStart,start:i,end:this.index}}scanStringLiteral(){const s=this.index;let n=this.source[s];r$3("'"===n||'"'===n,"String literal must starts with a quote"),++this.index;let r=!1,h="";for(;!this.eof();){let e=this.source[this.index++];if(e===n){n="";break}if("\\"===e)if(e=this.source[this.index++],e&&D$2.isLineTerminator(e.charCodeAt(0)))++this.lineNumber,"\r"===e&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(e){case"u":if("{"===this.source[this.index])++this.index,h+=this.scanUnicodeCodePointEscape();else {const t=this.scanHexEscape(e);null===t&&this.throwUnexpectedToken(),h+=t;}break;case"x":{const t=this.scanHexEscape(e);null===t&&this.throwUnexpectedToken(e$2.InvalidHexEscapeSequence),h+=t;break}case"n":h+="\n";break;case"r":h+="\r";break;case"t":h+="\t";break;case"b":h+="\b";break;case"f":h+="\f";break;case"v":h+="\v";break;case"8":case"9":h+=e,this.tolerateUnexpectedToken();break;default:if(e&&D$2.isOctalDigit(e.charCodeAt(0))){const t=this.octalToDecimal(e);r=t.octal||r,h+=String.fromCharCode(t.code);}else h+=e;}else {if(D$2.isLineTerminator(e.charCodeAt(0)))break;h+=e;}}return ""!==n&&(this.index=s,this.throwUnexpectedToken()),{type:8,value:h,octal:r,lineNumber:this.lineNumber,lineStart:this.lineStart,start:s,end:this.index}}scanTemplate(){let e="",s=!1;const n=this.index,r="`"===this.source[n];let h=!1,c=2;for(++this.index;!this.eof();){let n=this.source[this.index++];if("`"===n){c=1,h=!0,s=!0;break}if("$"===n){if("{"===this.source[this.index]){this.curlyStack.push("${"),++this.index,s=!0;break}e+=n;}else if("\\"===n)if(n=this.source[this.index++],D$2.isLineTerminator(n.charCodeAt(0)))++this.lineNumber,"\r"===n&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(n){case"n":e+="\n";break;case"r":e+="\r";break;case"t":e+="\t";break;case"u":if("{"===this.source[this.index])++this.index,e+=this.scanUnicodeCodePointEscape();else {const t=this.index,i=this.scanHexEscape(n);null!==i?e+=i:(this.index=t,e+=n);}break;case"x":{const t=this.scanHexEscape(n);null===t&&this.throwUnexpectedToken(e$2.InvalidHexEscapeSequence),e+=t;break}case"b":e+="\b";break;case"f":e+="\f";break;case"v":e+="\v";break;default:"0"===n?(D$2.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(e$2.TemplateOctalLiteral),e+="\0"):D$2.isOctalDigit(n.charCodeAt(0))?this.throwUnexpectedToken(e$2.TemplateOctalLiteral):e+=n;}else D$2.isLineTerminator(n.charCodeAt(0))?(++this.lineNumber,"\r"===n&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index,e+="\n"):e+=n;}return s||this.throwUnexpectedToken(),r||this.curlyStack.pop(),{type:10,value:this.source.slice(n+1,this.index-c),cooked:e,head:r,tail:h,lineNumber:this.lineNumber,lineStart:this.lineStart,start:n,end:this.index}}testRegExp(e,t){const s="￿";let n=e;t.indexOf("u")>=0&&(n=n.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,((e,t,n)=>{const r=parseInt(t||n,16);return r>1114111&&this.throwUnexpectedToken(e$2.InvalidRegExp),r<=65535?String.fromCharCode(r):s})).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,s));try{return new RegExp(e,t)}catch(h){return null}}scanRegExpBody(){let s=this.source[this.index];r$3("/"===s,"Regular expression literal must start with a slash");let n=this.source[this.index++],r=!1,h=!1;for(;!this.eof();)if(s=this.source[this.index++],n+=s,"\\"===s)s=this.source[this.index++],D$2.isLineTerminator(s.charCodeAt(0))&&this.throwUnexpectedToken(e$2.UnterminatedRegExp),n+=s;else if(D$2.isLineTerminator(s.charCodeAt(0)))this.throwUnexpectedToken(e$2.UnterminatedRegExp);else if(r)"]"===s&&(r=!1);else {if("/"===s){h=!0;break}"["===s&&(r=!0);}return h||this.throwUnexpectedToken(e$2.UnterminatedRegExp),n.substr(1,n.length-2)}scanRegExpFlags(){let e="",i="";for(;!this.eof();){let s=this.source[this.index];if(!D$2.isIdentifierPart(s.charCodeAt(0)))break;if(++this.index,"\\"!==s||this.eof())i+=s,e+=s;else if(s=this.source[this.index],"u"===s){++this.index;let t=this.index;const s=this.scanHexEscape("u");if(null!==s)for(i+=s,e+="\\u";t<this.index;++t)e+=this.source[t];else this.index=t,i+="u",e+="\\u";this.tolerateUnexpectedToken();}else e+="\\",this.tolerateUnexpectedToken();}return i}scanRegExp(){const e=this.index,t=this.scanRegExpBody(),i=this.scanRegExpFlags();return {type:9,value:"",pattern:t,flags:i,regex:this.testRegExp(t,i),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}}lex(){if(this.eof())return {type:2,value:"",lineNumber:this.lineNumber,lineStart:this.lineStart,start:this.index,end:this.index};const e=this.source.charCodeAt(this.index);return D$2.isIdentifierStart(e)?this.scanIdentifier():40===e||41===e||59===e?this.scanPunctuator():39===e||34===e?this.scanStringLiteral():46===e?D$2.isDecimalDigit(this.source.charCodeAt(this.index+1))?this.scanNumericLiteral():this.scanPunctuator():D$2.isDecimalDigit(e)?this.scanNumericLiteral():96===e||125===e&&"${"===this.curlyStack[this.curlyStack.length-1]?this.scanTemplate():e>=55296&&e<57343&&D$2.isIdentifierStart(this.codePointAt(this.index))?this.scanIdentifier():this.scanPunctuator()}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e={1:"Boolean",2:"<end>",3:"Identifier",4:"Keyword",5:"Null",6:"Numeric",7:"Punctuator",8:"String",9:"RegularExpression",10:"Template"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class G$2{constructor(e,s={},i){this.config={range:"boolean"==typeof s.range&&s.range,loc:"boolean"==typeof s.loc&&s.loc,source:null,tokens:"boolean"==typeof s.tokens&&s.tokens,comment:"boolean"==typeof s.comment&&s.comment,tolerant:"boolean"==typeof s.tolerant&&s.tolerant,globalReturn:!!s.globalReturn},this.config.loc&&s.source&&null!==s.source&&(this.config.source=String(s.source)),this.delegate=i,this.errorHandler=new r$2,this.errorHandler.tolerant=this.config.tolerant,this.scanner=new r(e,this.errorHandler),this.scanner.trackComment=this.config.comment,this.operatorPrecedence={")":0,";":0,",":0,"=":0,"]":0,"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":11,"/":11,"%":11},this.lookahead={type:2,value:"",lineNumber:this.scanner.lineNumber,lineStart:0,start:0,end:0},this.hasLineTerminator=!1,this.context={allowIn:!0,firstCoverInitializedNameError:null,isAssignmentTarget:!1,isBindingElement:!1,inFunctionBody:!1,inIteration:!1,curlyParsing:"asObject"},this.tokens=[],this.startMarker={index:0,line:this.scanner.lineNumber,column:0},this.lastMarker={index:0,line:this.scanner.lineNumber,column:0},this.nextToken(),this.lastMarker={index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart};}tolerateError(t,...s){const i=s.slice(),n=t.replace(/%(\d)/g,((t,s)=>(r$3(s<i.length,"Message reference must be in range"),i[s]))),r=this.lastMarker.index,a=this.scanner.lineNumber,o=this.lastMarker.column+1;this.errorHandler.tolerateError(r,a,o,n);}unexpectedTokenError(e,t){let i,n=t||e$2.UnexpectedToken;if(e?(t||(n=2===e.type?e$2.UnexpectedEOS:3===e.type?e$2.UnexpectedIdentifier:6===e.type?e$2.UnexpectedNumber:8===e.type?e$2.UnexpectedString:10===e.type?e$2.UnexpectedTemplate:e$2.UnexpectedToken),i=e.value.toString()):i="ILLEGAL",n=n.replace("%0",i),e&&"number"==typeof e.lineNumber){const t=e.start,s=e.lineNumber,i=this.lastMarker.index-this.lastMarker.column,r=e.start-i+1;return this.errorHandler.createError(t,s,r,n)}const r=this.lastMarker.index,a=this.lastMarker.line,o=this.lastMarker.column+1;return this.errorHandler.createError(r,a,o,n)}throwUnexpectedToken(e,t){throw this.unexpectedTokenError(e,t)}tolerateUnexpectedToken(e,t){this.errorHandler.tolerate(this.unexpectedTokenError(e,t));}collectComments(){if(this.config.comment){const e=this.scanner.scanComments();if(e&&e.length>0&&this.delegate)for(let t=0;t<e.length;++t){const s=e[t],n=new e$1(s.multiLine?"Block":"Line",this.scanner.source.slice(s.slice[0],s.slice[1]));this.config.range&&(n.range=s.range),this.config.loc&&(n.loc=s.loc);const r={start:{line:s.loc.start.line,column:s.loc.start.column,offset:s.range[0]},end:{line:s.loc.end.line,column:s.loc.end.column,offset:s.range[1]}};this.delegate(n,r);}}else this.scanner.scanComments();}peekAhead(e){const t=()=>(this.scanner.scanComments(),this.scanner.lex()),s=this.scanner.saveState();e.call(this,t),this.scanner.restoreState(s);}getTokenRaw(e){return this.scanner.source.slice(e.start,e.end)}convertToken(e$1){const t={type:e[e$1.type],value:this.getTokenRaw(e$1)};if(this.config.range&&(t.range=[e$1.start,e$1.end]),this.config.loc&&(t.loc={start:{line:this.startMarker.line,column:this.startMarker.column},end:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}),9===e$1.type){const s=e$1.pattern,i=e$1.flags;t.regex={pattern:s,flags:i};}return t}nextToken(){const e=this.lookahead;this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.collectComments(),this.scanner.index!==this.startMarker.index&&(this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart);const t=this.scanner.lex();return this.hasLineTerminator=e.lineNumber!==t.lineNumber,this.lookahead=t,this.config.tokens&&2!==t.type&&this.tokens.push(this.convertToken(t)),e}createNode(){return {index:this.startMarker.index,line:this.startMarker.line,column:this.startMarker.column}}startNode(e,t=0){let s=e.start-e.lineStart,i=e.lineNumber;return s<0&&(s+=t,i--),{index:e.start,line:i,column:s}}finalize(e,t){if(this.config.range&&(t.range=[e.index,this.lastMarker.index]),this.config.loc&&(t.loc={start:{line:e.line,column:e.column},end:{line:this.lastMarker.line,column:this.lastMarker.column}},this.config.source&&(t.loc.source=this.config.source)),this.delegate){const s={start:{line:e.line,column:e.column,offset:e.index},end:{line:this.lastMarker.line,column:this.lastMarker.column,offset:this.lastMarker.index}};this.delegate(t,s);}return t}expect(e){const t=this.nextToken();7===t.type&&t.value===e||this.throwUnexpectedToken(t);}expectCommaSeparator(){if(this.config.tolerant){const e=this.lookahead;7===e.type&&","===e.value?this.nextToken():7===e.type&&";"===e.value?(this.nextToken(),this.tolerateUnexpectedToken(e)):this.tolerateUnexpectedToken(e,e$2.UnexpectedToken);}else this.expect(",");}expectKeyword(e){const t=this.nextToken();4===t.type&&t.value.toString().toLowerCase()===e.toLowerCase()||this.throwUnexpectedToken(t);}match(e){return 7===this.lookahead.type&&this.lookahead.value===e}matchKeyword(e){return 4===this.lookahead.type&&this.lookahead.value.toLowerCase()===e.toLowerCase()}matchContextualKeyword(e){return 3===this.lookahead.type&&this.lookahead.value===e}matchAssign(){if(7!==this.lookahead.type)return !1;const e=this.lookahead.value;return i.includes(e)}isolateCoverGrammar(e){const t=this.context.isBindingElement,s=this.context.isAssignmentTarget,i=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0,this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null;const n=e.call(this);return null!==this.context.firstCoverInitializedNameError&&this.throwUnexpectedToken(this.context.firstCoverInitializedNameError),this.context.isBindingElement=t,this.context.isAssignmentTarget=s,this.context.firstCoverInitializedNameError=i,n}inheritCoverGrammar(e){const t=this.context.isBindingElement,s=this.context.isAssignmentTarget,i=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0,this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null;const n=e.call(this);return this.context.isBindingElement=this.context.isBindingElement&&t,this.context.isAssignmentTarget=this.context.isAssignmentTarget&&s,this.context.firstCoverInitializedNameError=i||this.context.firstCoverInitializedNameError,n}consumeSemicolon(){this.match(";")?this.nextToken():this.hasLineTerminator||(2===this.lookahead.type||this.match("}")||this.throwUnexpectedToken(this.lookahead),this.lastMarker.index=this.startMarker.index,this.lastMarker.line=this.startMarker.line,this.lastMarker.column=this.startMarker.column);}parsePrimaryExpression(){const e=this.createNode();let t,s,i;switch(this.lookahead.type){case 3:t=this.finalize(e,new S$1(this.nextToken().value));break;case 6:case 8:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,s=this.nextToken(),i=this.getTokenRaw(s),t=this.finalize(e,new k$2(s.value,i));break;case 1:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,s=this.nextToken(),i=this.getTokenRaw(s),t=this.finalize(e,new k$2("true"===s.value.toString().toLowerCase(),i));break;case 5:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,s=this.nextToken(),i=this.getTokenRaw(s),t=this.finalize(e,new k$2(null,i));break;case 10:t=this.parseTemplateLiteral();break;case 7:switch(this.lookahead.value){case"(":this.context.isBindingElement=!1,t=this.inheritCoverGrammar(this.parseGroupExpression);break;case"[":t=this.inheritCoverGrammar(this.parseArrayInitializer);break;case"{":t=this.inheritCoverGrammar(this.parseObjectInitializer);break;default:t=this.throwUnexpectedToken(this.nextToken());}break;case 4:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,t=this.throwUnexpectedToken(this.nextToken());break;default:t=this.throwUnexpectedToken(this.nextToken());}return t}parseArrayInitializer(){const e=this.createNode(),t=[];for(this.expect("[");!this.match("]");)this.match(",")?(this.nextToken(),t.push(null)):(t.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),this.match("]")||this.expect(","));return this.expect("]"),this.finalize(e,new r$1(t))}parseObjectPropertyKey(){const e=this.createNode(),t=this.nextToken();let s;switch(t.type){case 8:case 6:s=this.finalize(e,new k$2(t.value,this.getTokenRaw(t)));break;case 3:case 1:case 5:case 4:s=this.finalize(e,new S$1(t.value));break;default:s=this.throwUnexpectedToken(t);}return s}parseObjectProperty(){const e=this.createNode(),t=this.lookahead;let s=!1;const i=!1;let n=!1,r=null;if(3===t.type){const i=t.value;this.nextToken(),s=this.match("["),r=this.finalize(e,new S$1(i));}else this.match("*")?this.nextToken():(s=this.match("["),r=this.parseObjectPropertyKey());r||this.throwUnexpectedToken(this.lookahead);let o=null;const c="init";if(this.match(":"))this.nextToken(),o=this.inheritCoverGrammar(this.parseAssignmentExpression);else if(3===t.type){n=!0,o=this.finalize(e,new S$1(t.value));}else this.throwUnexpectedToken(this.nextToken());return this.finalize(e,new v$2(c,r,s,o,i,n))}parseObjectInitializer(){const e=this.createNode();this.expect("{");const t=[];for(;!this.match("}");)t.push(this.parseObjectProperty()),this.match("}")||this.expectCommaSeparator();return this.expect("}"),this.finalize(e,new j$2(t))}parseTemplateHead(){r$3(this.lookahead.head,"Template literal must start with a template head");const t=this.createNode(),s=this.nextToken(),i=s.value,n=s.cooked;return this.finalize(t,new F$2({raw:i,cooked:n},s.tail))}parseTemplateElement(){10!==this.lookahead.type&&this.throwUnexpectedToken();const e=this.createNode(),t=this.nextToken(),s=t.value,i=t.cooked;return this.finalize(e,new F$2({raw:s,cooked:i},t.tail))}parseTemplateLiteral(){const e=this.createNode(),t=[],s=[];let i=this.parseTemplateHead();for(s.push(i);!i.tail;)t.push(this.parseExpression()),i=this.parseTemplateElement(),s.push(i);return this.finalize(e,new I$2(s,t))}parseGroupExpression(){this.expect("("),this.context.isBindingElement=!0;const e=this.inheritCoverGrammar(this.parseAssignmentExpression);return this.expect(")"),this.context.isBindingElement=!1,e}parseArguments(){this.expect("(");const e=[];if(!this.match(")"))for(;;){const t=this.isolateCoverGrammar(this.parseAssignmentExpression);if(e.push(t),this.match(")"))break;if(this.expectCommaSeparator(),this.match(")"))break}return this.expect(")"),e}isIdentifierName(e){return 3===e.type||4===e.type||1===e.type||5===e.type}parseIdentifierName(){const e=this.createNode(),t=this.nextToken();return this.isIdentifierName(t)||this.throwUnexpectedToken(t),this.finalize(e,new S$1(t.value))}parseLeftHandSideExpressionAllowCall(){const e=this.lookahead,t=this.context.allowIn;this.context.allowIn=!0;let s=this.inheritCoverGrammar(this.parsePrimaryExpression);for(;;)if(this.match("(")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!1;const t=this.parseArguments();s=this.finalize(this.startNode(e),new u$1(s,t));}else if(this.match("[")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("[");const t=this.isolateCoverGrammar(this.parseExpression);this.expect("]"),s=this.finalize(this.startNode(e),new l(s,t));}else {if(!this.match("."))break;{this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect(".");const t=this.parseIdentifierName();s=this.finalize(this.startNode(e),new d$1(s,t));}}return this.context.allowIn=t,s}parseLeftHandSideExpression(){r$3(this.context.allowIn,"callee of new expression always allow in keyword.");const t=this.startNode(this.lookahead);let s=this.inheritCoverGrammar(this.parsePrimaryExpression);for(;;)if(this.match("[")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("[");const e=this.isolateCoverGrammar(this.parseExpression);this.expect("]"),s=this.finalize(t,new l(s,e));}else {if(!this.match("."))break;{this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect(".");const e=this.parseIdentifierName();s=this.finalize(t,new d$1(s,e));}}return s}parseUpdateExpression(){let e;const t=this.lookahead;if(this.match("++")||this.match("--")){const i=this.startNode(t),n=this.nextToken();e=this.inheritCoverGrammar(this.parseUnaryExpression),this.context.isAssignmentTarget||this.tolerateError(e$2.InvalidLHSInAssignment);const r=!0;e=this.finalize(i,new C$2(n.value,e,r)),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;}else if(e=this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall),!this.hasLineTerminator&&7===this.lookahead.type&&(this.match("++")||this.match("--"))){this.context.isAssignmentTarget||this.tolerateError(e$2.InvalidLHSInAssignment),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;const i=this.nextToken().value,n=!1;e=this.finalize(this.startNode(t),new C$2(i,e,n));}return e}parseUnaryExpression(){let e;if(this.match("+")||this.match("-")||this.match("~")||this.match("!")){const t=this.startNode(this.lookahead),s=this.nextToken();e=this.inheritCoverGrammar(this.parseUnaryExpression),e=this.finalize(t,new q$2(s.value,e)),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;}else e=this.parseUpdateExpression();return e}binaryPrecedence(e){const t=e.value;let s;return s=7===e.type?this.operatorPrecedence[t]||0:4===e.type&&this.context.allowIn&&"in"===t?12:0,s}parseBinaryExpression(){const e=this.lookahead;let t=this.inheritCoverGrammar(this.parseUnaryExpression);const s=this.lookahead;let i=this.binaryPrecedence(s);if(i>0){this.nextToken(),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;const n=[e,this.lookahead];let r=t,a=this.inheritCoverGrammar(this.parseUnaryExpression);const o=[r,s.value,a],h=[i];for(;i=this.binaryPrecedence(this.lookahead),!(i<=0);){for(;o.length>2&&i<=h[h.length-1];){a=o.pop();const e=o.pop();h.pop(),r=o.pop(),n.pop();const t=n[n.length-1],s=this.startNode(t,t.lineStart);o.push(this.finalize(s,new h$2(e,r,a)));}o.push(this.nextToken().value),h.push(i),n.push(this.lookahead),o.push(this.inheritCoverGrammar(this.parseUnaryExpression));}let c=o.length-1;t=o[c];let l=n.pop();for(;c>1;){const e=n.pop();if(!e)break;const s=l&&l.lineStart,i=this.startNode(e,s),r=o[c-1];t=this.finalize(i,new h$2(r,o[c-2],t)),c-=2,l=e;}}return t}parseAssignmentExpression(){const e=this.lookahead;let t=e,i=this.inheritCoverGrammar(this.parseBinaryExpression);if(this.matchAssign()){this.context.isAssignmentTarget||this.tolerateError(e$2.InvalidLHSInAssignment),this.match("=")||(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1),t=this.nextToken();const n=t.value,r=this.isolateCoverGrammar(this.parseAssignmentExpression);i=this.finalize(this.startNode(e),new n$1(n,i,r)),this.context.firstCoverInitializedNameError=null;}return i}parseExpression(){return this.isolateCoverGrammar(this.parseAssignmentExpression)}parseStatementListItem(){let e;if(this.context.isAssignmentTarget=!0,this.context.isBindingElement=!0,4===this.lookahead.type)if("function"===this.lookahead.value)e=this.parseFunctionDeclaration();else e=this.parseStatement();else e=this.parseStatement();return e}parseBlock(){const e=this.createNode();this.expect("{");const t=[];for(;!this.match("}");)t.push(this.parseStatementListItem());return this.expect("}"),this.finalize(e,new p(t))}parseObjectStatement(){const e=this.createNode(),t=this.parseObjectInitializer();return this.finalize(e,new m(t))}parseBlockOrObjectStatement(){let e="asObject"===this.context.curlyParsing;return "asObjectOrBlock"===this.context.curlyParsing&&this.peekAhead((t=>{let s=t();3!==s.type&&8!==s.type||(s=t(),7===s.type&&":"===s.value&&(e=!0));})),e?this.parseObjectStatement():this.parseBlock()}parseVariableIdentifier(){const e=this.createNode(),t=this.nextToken();return 3!==t.type&&this.throwUnexpectedToken(t,e$2.IdentiferExpected),this.finalize(e,new S$1(t.value))}parseVariableDeclaration(e){const t=this.createNode(),s=this.parseVariableIdentifier();let i=null;return this.match("=")?(this.nextToken(),i=this.isolateCoverGrammar(this.parseAssignmentExpression)):s.type===e$4.Identifier||e.inFor||this.expect("="),this.finalize(t,new P$2(s,i))}parseVariableDeclarationList(e){const t=[this.parseVariableDeclaration(e)];for(;this.match(",");)this.nextToken(),t.push(this.parseVariableDeclaration(e));return t}parseVariableStatement(){const e=this.createNode();this.expectKeyword("var");const t=this.parseVariableDeclarationList({inFor:!1});return this.consumeSemicolon(),this.finalize(e,new M$2(t,"var"))}parseEmptyStatement(){const e=this.createNode();return this.expect(";"),this.finalize(e,new y$1)}parseExpressionStatement(){const e=this.createNode(),t=this.parseExpression();return this.consumeSemicolon(),this.finalize(e,new m(t))}parseIfClause(){const e=this.context.curlyParsing;this.context.curlyParsing="asObjectOrBlock";const t=this.parseStatement();return this.context.curlyParsing=e,t}parseIfStatement(){const e=this.createNode();let t,s=null;this.expectKeyword("if"),this.expect("(");const i=this.parseExpression();return !this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),t=this.finalize(this.createNode(),new y$1)):(this.expect(")"),t=this.parseIfClause(),this.matchKeyword("else")&&(this.nextToken(),s=this.parseIfClause())),this.finalize(e,new f$1(i,t,s))}parseForStatement(){let e=null,t=null,i=null,n=null,r=null;const a=this.createNode();if(this.expectKeyword("for"),this.expect("("),this.match(";"))this.nextToken();else if(this.matchKeyword("var")){const t=this.createNode();this.nextToken();const i=this.context.allowIn;this.context.allowIn=!1;const a=this.parseVariableDeclarationList({inFor:!0});if(this.context.allowIn=i,1===a.length&&this.matchKeyword("in")){a[0].init&&this.tolerateError(e$2.ForInOfLoopInitializer,"for-in"),n=this.finalize(t,new M$2(a,"var")),this.nextToken(),r=this.parseExpression();}else e=this.finalize(t,new M$2(a,"var")),this.expect(";");}else {const t=this.context.isBindingElement,i=this.context.isAssignmentTarget,a=this.context.firstCoverInitializedNameError,o=this.context.allowIn;this.context.allowIn=!1,e=this.inheritCoverGrammar(this.parseAssignmentExpression),this.context.allowIn=o,this.matchKeyword("in")?(this.context.isAssignmentTarget&&e.type!==e$4.AssignmentExpression||this.tolerateError(e$2.InvalidLHSInForIn),this.nextToken(),n=e,r=this.parseExpression(),e=null):(this.context.isBindingElement=t,this.context.isAssignmentTarget=i,this.context.firstCoverInitializedNameError=a,this.expect(";"));}let o;if(n||(this.match(";")||(t=this.isolateCoverGrammar(this.parseExpression)),this.expect(";"),this.match(")")||(i=this.isolateCoverGrammar(this.parseExpression))),!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),o=this.finalize(this.createNode(),new y$1);else {this.expect(")");const e=this.context.inIteration,t=this.context.curlyParsing;this.context.inIteration=!0,this.context.curlyParsing="asObjectOrBlock",o=this.isolateCoverGrammar(this.parseStatement),this.context.curlyParsing=t,this.context.inIteration=e;}return n&&r?this.finalize(a,new E$2(n,r,o)):this.finalize(a,new b$2(e,t,i,o))}parseContinueStatement(){const e=this.createNode();return this.expectKeyword("continue"),this.consumeSemicolon(),this.finalize(e,new x$2)}parseBreakStatement(){const e=this.createNode();return this.expectKeyword("break"),this.consumeSemicolon(),this.finalize(e,new a$1)}parseReturnStatement(){this.config.globalReturn||this.context.inFunctionBody||this.tolerateError(e$2.IllegalReturn);const e=this.createNode();this.expectKeyword("return");const t=!this.match(";")&&!this.match("}")&&!this.hasLineTerminator&&2!==this.lookahead.type||8===this.lookahead.type||10===this.lookahead.type?this.parseExpression():null;return this.consumeSemicolon(),this.finalize(e,new B$2(t))}parseStatement(){let e;switch(this.lookahead.type){case 1:case 5:case 6:case 8:case 10:case 3:e=this.parseExpressionStatement();break;case 7:{const t=this.lookahead.value;e="{"===t?this.parseBlockOrObjectStatement():"("===t?this.parseExpressionStatement():";"===t?this.parseEmptyStatement():this.parseExpressionStatement();break}case 4:switch(this.lookahead.value.toLowerCase()){case"break":e=this.parseBreakStatement();break;case"continue":e=this.parseContinueStatement();break;case"for":e=this.parseForStatement();break;case"function":e=this.parseFunctionDeclaration();break;case"if":e=this.parseIfStatement();break;case"return":e=this.parseReturnStatement();break;case"var":e=this.parseVariableStatement();break;default:e=this.parseExpressionStatement();}break;default:e=this.throwUnexpectedToken(this.lookahead);}return e}parseFunctionSourceElements(){const e=this.createNode();this.expect("{");const t=this.context.inIteration,s=this.context.inFunctionBody;this.context.inIteration=!1,this.context.inFunctionBody=!0;const i=[];for(;2!==this.lookahead.type&&!this.match("}");)i.push(this.parseStatementListItem());return this.expect("}"),this.context.inIteration=t,this.context.inFunctionBody=s,this.finalize(e,new p(i))}parseFormalParameters(){const e=[];if(this.expect("("),!this.match(")"))for(;2!==this.lookahead.type&&(e.push(this.parseVariableIdentifier()),!this.match(")"))&&(this.expect(","),!this.match(")")););return this.expect(")"),e}parseFunctionDeclaration(){const e=this.createNode();this.expectKeyword("function");const t=this.parseVariableIdentifier(),s=this.parseFormalParameters(),i=this.parseFunctionSourceElements();return this.finalize(e,new g$2(t,s,i))}parseScript(){const e=this.createNode(),t=[];for(;2!==this.lookahead.type;)t.push(this.parseStatementListItem());return this.finalize(e,new D$3(t))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(r,o,n){let a=null;const s=(e,t)=>{n&&n(e,t),a&&a.visit(e,t);};let m="function"==typeof n?s:void 0,i=!1;if(o){i="boolean"==typeof o.comment&&o.comment;const t="boolean"==typeof o.attachComment&&o.attachComment;(i||t)&&(a=new e$3,a.attach=t,o.comment=!0,m=s);}const p=new G$2(r,o,m),c=p.parseScript();return i&&a&&(c.comments=a.comments),p.config.tokens&&(c.tokens=p.tokens),p.config.tolerant&&(c.errors=p.errorHandler.errors),c}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(r,t=[]){const o$1=o("function _() { "+r+"\n}");if(null===o$1.body||void 0===o$1.body)throw new Error("No formula provided.");if(0===o$1.body.length)throw new Error("No formula provided.");if(0===o$1.body.length)throw new Error("No formula provided.");if("BlockStatement"!==o$1.body[0].body.type)throw new Error("Invalid formula content.");const i=E$4(o$1);if(""!==i)throw new Error(i);return h$8(o$1,t),o$1}function s(n,e,t,o$1,i){const c=[],l="function _() { \n".length-1,a="function _() { \n"+n+"\n}";try{const n=o(a,{tolerant:!0,loc:!0,range:!0}),s=n.errors;if(s.length>0)for(let e=0;e<s.length;e++)c.push({line:s[e].lineNumber-2,character:s[e].column,reason:s[e].description});const f=A$3(n,e,t,o$1,i);for(let e=0;e<f.length;e++)f[e].line=f[e].line-2,f[e].range&&(f[e].range=[f[e][0]-l,f[e][1]-l]),f[e].loc&&(f[e].loc.start.line=f[e].loc.start.line-2,f[e].loc.end.line=f[e].loc.end.line-2),c.push(f[e]);}catch(s){try{if("Unexpected token }"===s.description){const n=a.split("\n").length;s.lineNumber===n?(s.index=a.length-1,c.push({line:s.lineNumber-4,character:s.column,reason:"Unexpected end of script"})):(s.index=a.length-1,c.push({line:s.lineNumber-2,character:s.column,reason:"Unexpected end of script"}));}else c.push({line:s.lineNumber-2,character:s.column,reason:s.description});}catch(f){}}return c}function f(n,e){return f$5(n)}function d(n,e,r){return S$3(n,e,r)}function h$1(n){return y$5(n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=["feature","angle","bearing","centroid","envelopeintersects","extent","geometry","isselfintersecting","ringisclockwise"];function x$1(){return !0}const b$1=x$1();let A$1=!1,g$1=!1,j$1=null,E$1=[];function F$1(t,r){if(!0===r.useAsync||!0===t.isAsync)return v$1(t,r);if(s$b("esri-csp-restrictions")){return function(e){return Ve(t,e)}}return ot(t,r)}function v$1(t,r){if(null===j$1)throw new Error("Async Arcade must be enabled for this script");if(s$b("esri-csp-restrictions")||!1===b$1){return function(e){return j$1.executeScript(t,e)}}return ot(t,r,!0)}function G$1(e){ke(e),Ze(e,"sync"),null===j$1?E$1.push(e):(Ze(e,"async"),j$1.extend(e));}function w$1(e,t=[]){return a(e,t)}function k$1(e,t,r=""){return d(e,t,r)}function U$1(e,t,r,n=""){return s(e,t,r,n)}function L$1(e,t,r=[]){return _(a(e,r),t)}function _(e,t){if(!0===t.useAsync||!0===e.isAsync){if(null===j$1)throw new Error("Async Arcade must be enabled for this script");return j$1.executeScript(e,t)}return Ve(e,t)}function C$1(e,t){return ze(e,t)}function M$1(e,t){return qe(e,t)}function O$1(e,t=!1){return f(e)}function R$1(e){return h$1(e)}function q$1(e,t=[]){return void 0===e.usesGeometry&&h$8(e,t),!0===e.usesGeometry}let z$1=null;function D$1(){return z$1||(z$1=s$a([import('./geometryEngine-8643d879.js'),Promise.resolve().then(function () { return geomsync; })]).then((([e,t])=>(g$1=!0,t.setGeometryEngine(e),!0))),z$1)}let I$1=null;function T$1(){return null!==I$1||(I$1=at().then((()=>import('./arcadeAsyncRuntime-209a35b2.js'))).then((e=>{j$1=e;for(const r of E$1)j$1.extend(r),Ze(r,"async");return E$1=null,!0}))),I$1}function B$1(){return A$1}function H$1(){return !!j$1}function J(){return g$1}let K=null;function N(){return K||(K=T$1().then((()=>s$a([import('./featureSetUtils-e596a5ce.js').then(function (n) { return n.f; }),import('./featuresetbase-608d077b.js'),import('./featuresetgeom-d16aad7b.js'),import('./featuresetstats-935cc25f.js'),import('./featuresetstring-07aaba08.js')]).then((([e,r,n,s,i])=>(Y=e,j$1.extend([r,n,s,i]),Ze([r,n,s,i],"async"),A$1=!0,!0))))),K)}function P$1(e,t=[]){return void 0===e.usesFeatureSet&&h$8(e,t),!0===e.usesFeatureSet}function Q(e,t=[]){return void 0===e.isAsync&&h$8(e,t),!0===e.isAsync}function V$1(e,t){if(t){for(const r of t)if(C$1(e,r))return !0;return !1}return !1}function W(e,t,r=[],n=!1){return f$8(((s,i)=>{const c="string"==typeof e?w$1(e):e,u=[];c&&(!1===J()&&(q$1(c)||n)&&u.push(D$1()),!1===H$1()&&(!0===c.isAsync||t)&&u.push(T$1()),!1===B$1()&&(P$1(c)||V$1(c,r))&&u.push(N())),u.length?s$a(u).then((()=>{s(!0);}),i):s(!0);}))}function X(e){if(q$1(e))return !0;const t=I$5(e);let r=!1;for(let n=0;n<t.length;n++)if(h.indexOf(t[n])>-1){r=!0;break}return r}let Y=null;function Z(){return Y}const $$1=Object.freeze({__proto__:null,compileScript:F$1,extend:G$1,parseScript:w$1,validateScript:k$1,scriptCheck:U$1,parseAndExecuteScript:L$1,executeScript:_,referencesMember:C$1,referencesFunction:M$1,extractFieldLiterals:O$1,extractExpectedFieldLiterals:R$1,scriptUsesGeometryEngine:q$1,enableGeometrySupport:D$1,enableAsyncSupport:T$1,isFeatureSetSupportEnabled:B$1,isAsyncEnabled:H$1,isGeometryEnabled:J,enableFeatureSetSupport:N,scriptUsesFeatureSet:P$1,scriptIsAsync:Q,loadScriptDependencies:W,scriptTouchesGeometry:X,featureSetUtils:Z});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=/^\$(feature|aggregatedFeatures)\./i,v={vars:{$feature:"any",$view:"any"},spatialReference:null};function x(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")}function g(r){if(!r)return null;try{return w$1(r)}catch(n){}return null}function w(e,n){const t="string"==typeof e?g(e):e;if(!t)return null;try{return n=n||l$7(v),F$1(t,n)}catch(u){}return null}function E(e,r){return {vars:{$feature:null==e?new b$5:b$5.createFromGraphic(e),$view:r&&r.view},spatialReference:r&&r.sr}}function F(e,r,n){return b$5.createFromGraphicLikeObject(r,e,n)}function $(e,r){e.vars.$feature=r;}function b(e,r){let t;try{t=_(e,r);}catch(u){t=null;}return t}function j(e,r){let n;try{n=e?e(r):null;}catch(t){n=null;}return n}function S(e,r){try{return e?e(r):Promise.resolve(null)}catch(n){return Promise.resolve(null)}}function R(e,r){if(!e)return [];const n="string"==typeof e?g(e):e;if(!n)return [];const u=R$1(n);let i=new Array;u.forEach((e=>{y.test(e)&&(e=e.replace(y,""),i.push(e));}));const a=i.filter((e=>e.includes("*")));return i=i.filter((e=>!a.includes(e))),r&&a.forEach((e=>{const n=new RegExp(`^${e.split(/\*+/).map(x).join(".*")}$`,"i");r.forEach((e=>n.test(e)?i.push(e):null));})),[...new Set(i.sort())]}function z(e){return C$1(e,"$view")}function C(e,r){return !!e&&C$1(e,r)}function M(e){if(!e||null==e.spatialReference&&(null==e.scale||null==e.viewingMode))return;return {view:e.viewingMode&&null!=e.scale?new h$9({viewingMode:e.viewingMode,scale:e.scale}):null,sr:e.spatialReference}}function k({url:e,spatialReference:r,lrucache:n,interceptor:t}){const u=Z();return u?u.createFeatureSetCollectionFromService(e,r,n,t):null}function I({layer:e,spatialReference:r,outFields:n,returnGeometry:t,lrucache:u,interceptor:i}){if(null===e)return null;const a=Z();return a?a.constructFeatureSet(e,r,n,null==t||t,u,i):null}function D(e){if(null===(null==e?void 0:e.map))return null;const r=Z();return r?r.createFeatureSetCollectionFromMap(e.map,e.spatialReference,e.lrucache,e.interceptor):null}function G(e,r,n=[]){return W(e,r,n)}function P(){return D$1()}function V(){return N()}function L(e){return "simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type||"dot-density"===e.type||"dictionary"===e.type}function q(e){return "esri.layers.support.LabelClass"===e.declaredClass}function A(e){return "esri.PopupTemplate"===e.declaredClass}function O(e,r){if(!e)return !1;if("string"==typeof e)return r(e);const n=e;if(L(n)){if("dot-density"===n.type){const e=n.attributes.some((e=>r(e.valueExpression)));if(e)return e}const e=n.visualVariables,t=!!e&&e.some((e=>{let n=r(e.valueExpression);return "size"===e.type&&(n$4(e.minSize)&&(n=n||r(e.minSize.valueExpression)),n$4(e.maxSize)&&(n=n||r(e.maxSize.valueExpression))),n}));return !(!("valueExpression"in n)||!r(n.valueExpression))||t}if(q(n)){const e=n.labelExpressionInfo&&n.labelExpressionInfo.expression;return !(!e||!r(e))||!1}return !!A(n)&&(!!n.expressionInfos&&n.expressionInfos.some((e=>r(e.expression))))}function T(e){const r=g(e);return !!r&&X(r)}function U(e){return O(e,T)}function B(e){const r=g(e);return !!r&&q$1(r)}function H(e){return O(e,B)}

const arcadeUtils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  convertFeatureLayerToFeatureSet: I,
  convertMapToFeatureSetCollection: D,
  convertServiceUrlToWorkspace: k,
  createExecContext: E,
  createFeature: F,
  createFunction: w,
  createSyntaxTree: g,
  dependsOnView: z,
  enableFeatureSetOperations: V,
  enableGeometryOperations: P,
  evalSyntaxTree: b,
  executeAsyncFunction: S,
  executeFunction: j,
  extractFieldNames: R,
  getViewInfo: M,
  hasGeometryFunctions: U,
  hasGeometryOperations: H,
  hasVariable: C,
  loadScriptDependencies: G,
  updateExecContext: $,
  arcade: $$1,
  Dictionary: h$9,
  arcadeFeature: b$5
});

export { $$4 as $, A$4 as A, B$4 as B, C$5 as C, D$8 as D, E$6 as E, r$5 as F, de$2 as G, a$2 as H, I$5 as I, J$3 as J, he$2 as K, L$2 as L, M$6 as M, N$3 as N, O$4 as O, P$5 as P, pe$2 as Q, R$3 as R, S$3 as S, T$4 as T, ie$3 as U, O$5 as V, W$2 as W, l$4 as X, Y$2 as Y, Z$4 as Z, u$3 as _, I$7 as a, s$6 as a0, e$6 as a1, I$6 as a2, l$6 as a3, s$8 as a4, o$6 as a5, Se$2 as a6, S$4 as a7, E$5 as a8, N$6 as a9, luxon as aa, c$5 as ab, u$5 as ac, f$6 as ad, g$7 as ae, G$4 as af, y$6 as ag, b$6 as ah, F$4 as ai, ye$2 as aj, _$2 as ak, l$2 as al, s$5 as am, D$7 as an, le$2 as ao, se$3 as ap, ue$2 as aq, X$2 as ar, arcadeUtils as as, b$4 as b, h$9 as c, b$5 as d, ee$2 as e, f$5 as f, N$7 as g, h$7 as h, be$2 as i, j$4 as j, ae$3 as k, i$6 as l, h$a as m, e$8 as n, o$3 as o, p$3 as p, L$4 as q, r$7 as r, s$9 as s, t$2 as t, u$4 as u, v$5 as v, me$2 as w, c$2 as x, y$4 as y, z$5 as z };
