import { p as promiseResolve, b as bootstrapLazy } from './index-b157fcf2.js';

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["arcgis-basemap-gallery_8",[[0,"arcgis-basemap-gallery",{"position":[1],"view":[16],"widget":[1032]}],[0,"arcgis-expand",{"position":[1],"view":[16],"widget":[1032]}],[0,"arcgis-feature-table",{"itemId":[1,"item-id"],"layer":[1032],"position":[1],"url":[1],"view":[16],"widget":[1032],"fieldConfigs":[8,"field-configs"]}],[0,"arcgis-layer-list",{"position":[1],"view":[16],"widget":[1032]}],[0,"arcgis-legend",{"position":[1],"view":[16],"widget":[1032]}],[0,"arcgis-portal",{"portal":[1032],"url":[1]}],[0,"arcgis-search",{"position":[1],"view":[16],"widget":[1032]}],[0,"arcgis-webmap",{"apiKey":[1,"api-key"],"itemId":[1,"item-id"],"zoom":[2],"center":[1],"view":[1040]}]]],["arcgis-basemap-toggle",[[0,"arcgis-basemap-toggle",{"nextBasemap":[1,"next-basemap"],"position":[1],"view":[16],"widget":[1032]}]]],["arcgis-bookmarks",[[0,"arcgis-bookmarks",{"position":[1],"view":[16],"widget":[1032]}]]],["arcgis-coordinate-conversion",[[0,"arcgis-coordinate-conversion",{"position":[1],"view":[16],"widget":[1032]}]]],["arcgis-directions",[[0,"arcgis-directions",{"apiKey":[1,"api-key"],"position":[1],"view":[16],"widget":[1032]}]]],["arcgis-editor",[[0,"arcgis-editor",{"allowedWorkflows":[1,"allowed-workflows"],"position":[1],"view":[16],"widget":[1032]}]]],["arcgis-map",[[0,"arcgis-map",{"apiKey":[1,"api-key"],"basemap":[1],"zoom":[2],"center":[1],"view":[1040]}]]],["arcgis-print",[[0,"arcgis-print",{"allowedFormats":[1,"allowed-formats"],"allowedLayouts":[1,"allowed-layouts"],"position":[1],"view":[16],"widget":[1032]}]]],["arcgis-webscene",[[0,"arcgis-webscene",{"apiKey":[1,"api-key"],"itemId":[1,"item-id"],"zoom":[2],"center":[1],"view":[1040]}]]]], options);
  });
};

export { defineCustomElements };
