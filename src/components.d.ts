/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ArcgisExpand {
        "position": string;
        "view": __esri.MapView | __esri.SceneView;
    }
    interface ArcgisFeatureTable {
        "itemId": string;
        "layer": any;
        "position": string;
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
        "arcgis-expand": HTMLArcgisExpandElement;
        "arcgis-feature-table": HTMLArcgisFeatureTableElement;
        "arcgis-legend": HTMLArcgisLegendElement;
        "arcgis-map": HTMLArcgisMapElement;
        "arcgis-search": HTMLArcgisSearchElement;
        "arcgis-webmap": HTMLArcgisWebmapElement;
    }
}
declare namespace LocalJSX {
    interface ArcgisExpand {
        "position"?: string;
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface ArcgisFeatureTable {
        "itemId"?: string;
        "layer"?: any;
        "onRowSelectionChange"?: (event: CustomEvent<__esri.FeatureTableSelectionChangeEvent>) => void;
        "position"?: string;
        "view"?: __esri.MapView | __esri.SceneView;
        "widget"?: any;
    }
    interface ArcgisLegend {
        "position"?: string;
        "view"?: __esri.MapView | __esri.SceneView;
        "widget"?: any;
    }
    interface ArcgisMap {
        "apiKey"?: string;
        "basemap"?: string;
        "center"?: number[] | string;
        "zoom"?: number;
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
        "zoom"?: number;
    }
    interface IntrinsicElements {
        "arcgis-expand": ArcgisExpand;
        "arcgis-feature-table": ArcgisFeatureTable;
        "arcgis-legend": ArcgisLegend;
        "arcgis-map": ArcgisMap;
        "arcgis-search": ArcgisSearch;
        "arcgis-webmap": ArcgisWebmap;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "arcgis-expand": LocalJSX.ArcgisExpand & JSXBase.HTMLAttributes<HTMLArcgisExpandElement>;
            "arcgis-feature-table": LocalJSX.ArcgisFeatureTable & JSXBase.HTMLAttributes<HTMLArcgisFeatureTableElement>;
            "arcgis-legend": LocalJSX.ArcgisLegend & JSXBase.HTMLAttributes<HTMLArcgisLegendElement>;
            "arcgis-map": LocalJSX.ArcgisMap & JSXBase.HTMLAttributes<HTMLArcgisMapElement>;
            "arcgis-search": LocalJSX.ArcgisSearch & JSXBase.HTMLAttributes<HTMLArcgisSearchElement>;
            "arcgis-webmap": LocalJSX.ArcgisWebmap & JSXBase.HTMLAttributes<HTMLArcgisWebmapElement>;
        }
    }
}
