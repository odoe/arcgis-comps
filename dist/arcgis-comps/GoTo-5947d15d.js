import { g as t$1, e as e$2, a as d, i } from './jsxFactory-a3b6abde.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$1(n){return n&&"function"==typeof n.highlight}function t(n){return n&&"function"==typeof n.maskOccludee}function c(e,t,c){return t$1(e)||e>c&&(0===t||e<t)}function o(n){let{minScale:e,maxScale:t}=n;return e=e||0,t=t||0,{minScale:e,maxScale:t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=e=>{let t=class extends e{constructor(...o){super(...o),this.goToOverride=null,this.view=null;}callGoTo(o){const{view:r}=this;return this.goToOverride?this.goToOverride(r,o):r.goTo(o.target,o.options)}};return e$2([d()],t.prototype,"goToOverride",void 0),e$2([d()],t.prototype,"view",void 0),t=e$2([i("esri.widgets.support.GoTo")],t),t};

export { e$1 as a, e };
