'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-57f2cfbb.js');

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["arcgis-expand_4.cjs",[[0,"arcgis-expand",{"position":[1],"view":[16]}],[0,"arcgis-legend",{"position":[1],"view":[16],"widget":[8]}],[0,"arcgis-search",{"position":[1],"view":[16],"widget":[8]}],[0,"arcgis-webmap",{"apiKey":[1,"api-key"],"itemId":[1,"item-id"],"zoom":[2],"center":[1]}]]],["arcgis-map.cjs",[[0,"arcgis-map",{"apiKey":[1,"api-key"],"basemap":[1],"zoom":[2],"center":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
