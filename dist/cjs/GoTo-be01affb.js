'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=e=>{let t=class extends e{constructor(...o){super(...o),this.goToOverride=null,this.view=null;}callGoTo(o){const{view:r}=this;return this.goToOverride?this.goToOverride(r,o):r.goTo(o.target,o.options)}};return request.e([request.d()],t.prototype,"goToOverride",void 0),request.e([request.d()],t.prototype,"view",void 0),t=request.e([request.i("esri.widgets.support.GoTo")],t),t};

exports.e = e;
