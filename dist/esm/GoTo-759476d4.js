import { e as e$2, d, i } from './messageBundle-8a146a9b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$1(n){return n&&"function"==typeof n.highlight}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return n.split(",").map((n=>n.trim()))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){return a=>{a.hasOwnProperty("_delegatedEventNames")||(a._delegatedEventNames=a._delegatedEventNames?a._delegatedEventNames.slice():[]);const r=a._delegatedEventNames,s=Array.isArray(t)?t:n(t);r.push(...s);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=e=>{let t=class extends e{constructor(...o){super(...o),this.goToOverride=null,this.view=null;}callGoTo(o){const{view:r}=this;return this.goToOverride?this.goToOverride(r,o):r.goTo(o.target,o.options)}};return e$2([d()],t.prototype,"goToOverride",void 0),e$2([d()],t.prototype,"view",void 0),t=e$2([i("esri.widgets.support.GoTo")],t),t};

export { e as a, e$1 as e, t };
