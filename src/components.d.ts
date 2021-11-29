/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ArcgisBasemapGallery {
        "position": string;
        "view": __esri.MapView | __esri.SceneView;
        "widget": any;
    }
    interface ArcgisExpand {
        "position": string;
        "view": __esri.MapView | __esri.SceneView;
    }
    interface ArcgisFeatureTable {
        "fieldConfigs": any | string;
        "itemId": string;
        "layer": any;
        "position": string;
        "url": string;
        "view": __esri.MapView | __esri.SceneView;
        "widget": any;
    }
    interface ArcgisLegend {
        "position": string;
        "view": __esri.MapView | __esri.SceneView;
        "widget": any;
    }
    interface ArcgisMap {
        "apiKey": string;
        "basemap": string;
        "center": number[] | string;
        "zoom": number;
    }
    interface ArcgisPortal {
        "portal": any;
        "url": string;
    }
    interface ArcgisSearch {
        "position": string;
        "view": __esri.MapView | __esri.SceneView;
        "widget": any;
    }
    interface ArcgisWebmap {
        "apiKey": string;
        "center": number[] | string;
        "itemId": string;
        "zoom": number;
    }
}
declare global {
    interface HTMLArcgisBasemapGalleryElement extends Components.ArcgisBasemapGallery, HTMLStencilElement {
    }
    var HTMLArcgisBasemapGalleryElement: {
        prototype: HTMLArcgisBasemapGalleryElement;
        new (): HTMLArcgisBasemapGalleryElement;
    };
    interface HTMLArcgisExpandElement extends Components.ArcgisExpand, HTMLStencilElement {
    }
    var HTMLArcgisExpandElement: {
        prototype: HTMLArcgisExpandElement;
        new (): HTMLArcgisExpandElement;
    };
    interface HTMLArcgisFeatureTableElement extends Components.ArcgisFeatureTable, HTMLStencilElement {
    }
    var HTMLArcgisFeatureTableElement: {
        prototype: HTMLArcgisFeatureTableElement;
        new (): HTMLArcgisFeatureTableElement;
    };
    interface HTMLArcgisLegendElement extends Components.ArcgisLegend, HTMLStencilElement {
    }
    var HTMLArcgisLegendElement: {
        prototype: HTMLArcgisLegendElement;
        new (): HTMLArcgisLegendElement;
    };
    interface HTMLArcgisMapElement extends Components.ArcgisMap, HTMLStencilElement {
    }
    var HTMLArcgisMapElement: {
        prototype: HTMLArcgisMapElement;
        new (): HTMLArcgisMapElement;
    };
    interface HTMLArcgisPortalElement extends Components.ArcgisPortal, HTMLStencilElement {
    }
    var HTMLArcgisPortalElement: {
        prototype: HTMLArcgisPortalElement;
        new (): HTMLArcgisPortalElement;
    };
    interface HTMLArcgisSearchElement extends Components.ArcgisSearch, HTMLStencilElement {
    }
    var HTMLArcgisSearchElement: {
        prototype: HTMLArcgisSearchElement;
        new (): HTMLArcgisSearchElement;
    };
    interface HTMLArcgisWebmapElement extends Components.ArcgisWebmap, HTMLStencilElement {
    }
    var HTMLArcgisWebmapElement: {
        prototype: HTMLArcgisWebmapElement;
        new (): HTMLArcgisWebmapElement;
    };
    interface HTMLElementTagNameMap {
        "arcgis-basemap-gallery": HTMLArcgisBasemapGalleryElement;
        "arcgis-expand": HTMLArcgisExpandElement;
        "arcgis-feature-table": HTMLArcgisFeatureTableElement;
        "arcgis-legend": HTMLArcgisLegendElement;
        "arcgis-map": HTMLArcgisMapElement;
        "arcgis-portal": HTMLArcgisPortalElement;
        "arcgis-search": HTMLArcgisSearchElement;
        "arcgis-webmap": HTMLArcgisWebmapElement;
    }
}
declare namespace LocalJSX {
    interface ArcgisBasemapGallery {
        "onLoaded"?: (event: CustomEvent<boolean>) => void;
        "position"?: string;
        "view"?: __esri.MapView | __esri.SceneView;
        "widget"?: any;
    }
    interface ArcgisExpand {
        "onLoaded"?: (event: CustomEvent<boolean>) => void;
        "position"?: string;
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface ArcgisFeatureTable {
        "fieldConfigs"?: any | string;
        "itemId"?: string;
        "layer"?: any;
        "onLoaded"?: (event: CustomEvent<boolean>) => void;
        "onRowSelectionChange"?: (event: CustomEvent<__esri.FeatureTableSelectionChangeEvent>) => void;
        "position"?: string;
        "url"?: string;
        "view"?: __esri.MapView | __esri.SceneView;
        "widget"?: any;
    }
    interface ArcgisLegend {
        "onLoaded"?: (event: CustomEvent<boolean>) => void;
        "position"?: string;
        "view"?: __esri.MapView | __esri.SceneView;
        "widget"?: any;
    }
    interface ArcgisMap {
        "apiKey"?: string;
        "basemap"?: string;
        "center"?: number[] | string;
        "onLoaded"?: (event: CustomEvent<boolean>) => void;
        "zoom"?: number;
    }
    interface ArcgisPortal {
        "onLoaded"?: (event: CustomEvent<boolean>) => void;
        "portal"?: any;
        "url"?: string;
    }
    interface ArcgisSearch {
        "onSearchBlur"?: (event: CustomEvent<__esri.SearchSearchBlurEvent>) => void;
        "onSearchClear"?: (event: CustomEvent<__esri.SearchSearchClearEvent>) => void;
        "onSearchComplete"?: (event: CustomEvent<__esri.SearchSearchCompleteEvent>) => void;
        "onSearchFocus"?: (event: CustomEvent<__esri.SearchSearchFocusEvent>) => void;
        "onSearchStart"?: (event: CustomEvent<__esri.SearchSearchStartEvent>) => void;
        "onSelectResult"?: (event: CustomEvent<__esri.SearchSelectResultEvent>) => void;
        "onSuggestComplete"?: (event: CustomEvent<__esri.SearchSuggestCompleteEvent>) => void;
        "onSuggestStart"?: (event: CustomEvent<__esri.SearchSuggestStartEvent>) => void;
        "position"?: string;
        "view"?: __esri.MapView | __esri.SceneView;
        "widget"?: any;
    }
    interface ArcgisWebmap {
        "apiKey"?: string;
        "center"?: number[] | string;
        "itemId"?: string;
        "onLoaded"?: (event: CustomEvent<boolean>) => void;
        "zoom"?: number;
    }
    interface IntrinsicElements {
        "arcgis-basemap-gallery": ArcgisBasemapGallery;
        "arcgis-expand": ArcgisExpand;
        "arcgis-feature-table": ArcgisFeatureTable;
        "arcgis-legend": ArcgisLegend;
        "arcgis-map": ArcgisMap;
        "arcgis-portal": ArcgisPortal;
        "arcgis-search": ArcgisSearch;
        "arcgis-webmap": ArcgisWebmap;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "arcgis-basemap-gallery": LocalJSX.ArcgisBasemapGallery & JSXBase.HTMLAttributes<HTMLArcgisBasemapGalleryElement>;
            "arcgis-expand": LocalJSX.ArcgisExpand & JSXBase.HTMLAttributes<HTMLArcgisExpandElement>;
            "arcgis-feature-table": LocalJSX.ArcgisFeatureTable & JSXBase.HTMLAttributes<HTMLArcgisFeatureTableElement>;
            "arcgis-legend": LocalJSX.ArcgisLegend & JSXBase.HTMLAttributes<HTMLArcgisLegendElement>;
            "arcgis-map": LocalJSX.ArcgisMap & JSXBase.HTMLAttributes<HTMLArcgisMapElement>;
            "arcgis-portal": LocalJSX.ArcgisPortal & JSXBase.HTMLAttributes<HTMLArcgisPortalElement>;
            "arcgis-search": LocalJSX.ArcgisSearch & JSXBase.HTMLAttributes<HTMLArcgisSearchElement>;
            "arcgis-webmap": LocalJSX.ArcgisWebmap & JSXBase.HTMLAttributes<HTMLArcgisWebmapElement>;
        }
    }
}
