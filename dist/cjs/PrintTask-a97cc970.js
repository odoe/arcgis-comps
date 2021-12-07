'use strict';

const request = require('./messageBundle-8be88d04.js');
const print = require('./print-8c55a8bc.js');
const Task = require('./Task-95a3fa39.js');
require('./index-fde8502c.js');
require('./screenUtils-d911ae62.js');
require('./geometry-ef17530a.js');
require('./visualVariableUtils-1740874b.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./Graphic-0aff6059.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./jsonUtils-b6068079.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./sizeVariableUtils-9012516e.js');
require('./normalizeUtils-a793b472.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./utils-8a0a0870.js');
require('./FeatureSet-8efc5965.js');
require('./GPMessage-d3ae977e.js');
require('./floorFilterUtils-a9b30733.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=new request.o$1({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let u=class extends Task.l{constructor(...t){super(...t),this._gpMetadata=null,this.updateDelay=1e3;}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?n.fromJSON(this._gpMetadata.executionType):"sync"}execute(t,e){return t&&(t.updateDelay=this.updateDelay),print.Q(this.url,t,{...this.requestOptions,...e})}async _getGpPrintParams(t){const e=print.Z(this.url),r=print.G.get(e);return print.X(t,r)}};request.e([request.d()],u.prototype,"_gpMetadata",void 0),request.e([request.d({readOnly:!0})],u.prototype,"mode",null),request.e([request.d()],u.prototype,"updateDelay",void 0),u=request.e([request.i("esri.tasks.PrintTask")],u);const y=u;

exports.default = y;
