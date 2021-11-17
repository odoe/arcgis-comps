'use strict';

const index = require('./index-57f2cfbb.js');

/*
 Stencil Client Patch Browser v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('arcgis-comps.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["arcgis-feature-table_2.cjs",[[0,"arcgis-feature-table",{"itemId":[1,"item-id"],"layer":[8],"position":[1],"url":[1],"view":[16],"widget":[8]}],[0,"arcgis-webmap",{"apiKey":[1,"api-key"],"itemId":[1,"item-id"],"zoom":[2],"center":[1]}]]],["arcgis-expand.cjs",[[0,"arcgis-expand",{"position":[1],"view":[16]}]]],["arcgis-legend.cjs",[[0,"arcgis-legend",{"position":[1],"view":[16],"widget":[8]}]]],["arcgis-map.cjs",[[0,"arcgis-map",{"apiKey":[1,"api-key"],"basemap":[1],"zoom":[2],"center":[1]}]]],["arcgis-search.cjs",[[0,"arcgis-search",{"position":[1],"view":[16],"widget":[8]}]]]], options);
});
