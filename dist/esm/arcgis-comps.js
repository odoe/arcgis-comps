import { p as promiseResolve, b as bootstrapLazy } from './index-41925fe8.js';

/*
 Stencil Client Patch Browser v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["arcgis-expand_4",[[0,"arcgis-expand",{"position":[1],"view":[16]}],[0,"arcgis-legend",{"position":[1],"view":[16],"widget":[8]}],[0,"arcgis-search",{"position":[1],"view":[16],"widget":[8]}],[0,"arcgis-webmap",{"apiKey":[1,"api-key"],"itemId":[1,"item-id"],"zoom":[2],"center":[1]}]]],["arcgis-map",[[0,"arcgis-map",{"apiKey":[1,"api-key"],"basemap":[1],"zoom":[2],"center":[1]}]]]], options);
});
