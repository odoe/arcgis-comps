'use strict';

const Utils = require('./Utils-e5a61fef.js');
const BaseGraphicContainer = require('./BaseGraphicContainer-4a839d2a.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends BaseGraphicContainer.t{renderChildren(r){this.attributeView.bindTextures(r.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===Utils.I.MAP&&this._renderChildren(r),this.hasHighlight()&&r.drawPhase===Utils.I.HIGHLIGHT&&this._renderHighlight(r),this._boundsRenderer&&this._boundsRenderer.doRender(r));}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind();}}

exports.i = i;