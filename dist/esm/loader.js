import { p as promiseResolve, b as bootstrapLazy } from './index-41925fe8.js';

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["arcgis-feature-table_2",[[0,"arcgis-feature-table",{"itemId":[1,"item-id"],"layer":[8],"position":[1],"view":[16],"widget":[8]}],[0,"arcgis-webmap",{"apiKey":[1,"api-key"],"itemId":[1,"item-id"],"zoom":[2],"center":[1]}]]],["arcgis-expand",[[0,"arcgis-expand",{"position":[1],"view":[16]}]]],["arcgis-legend",[[0,"arcgis-legend",{"position":[1],"view":[16],"widget":[8]}]]],["arcgis-map",[[0,"arcgis-map",{"apiKey":[1,"api-key"],"basemap":[1],"zoom":[2],"center":[1]}]]],["arcgis-search",[[0,"arcgis-search",{"position":[1],"view":[16],"widget":[8]}]]]], options);
  });
};

export { defineCustomElements };
