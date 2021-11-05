'use strict';

const request = require('./MapView-1195e7f1.js');
const Utils = require('./Utils-cf62b8df.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=request.s.getLogger("esri.views.2d.engine.webgl");function o(s){return Utils.N(s.minDataValue)&&Utils.N(s.maxDataValue)&&null!=s.minSize&&null!=s.maxSize?Utils.A.SIZE_MINMAX_VALUE:(s.expression&&"view.scale"===s.expression||s.valueExpression&&"$view.scale"===s.valueExpression)&&Array.isArray(s.stops)?Utils.A.SIZE_SCALE_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&(Array.isArray(s.stops)||"levels"in s&&s.levels)?Utils.A.SIZE_FIELD_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&null!=s.valueUnit?Utils.A.SIZE_UNIT_VALUE:(l.error(new request.s$3("mapview-bad-type","Found invalid size VisualVariable",s)),Utils.A.NONE)}

exports.o = o;
