import { N as o, e, d, i } from './messageBundle-f75b4090.js';
import { Q, Z, G, X } from './print-d46e03e1.js';
import { l } from './Task-21abc82a.js';
import './index-b157fcf2.js';
import './screenUtils-9bb7e30c.js';
import './geometry-7e07b1ba.js';
import './visualVariableUtils-26c41ea6.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './Graphic-3961df6c.js';
import './PopupTemplate-6e5ecad2.js';
import './opacityUtils-5e864561.js';
import './enumeration-d3301938.js';
import './Identifiable-da047c47.js';
import './symbols-b414aa72.js';
import './Symbol-cad56b52.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './persistableUrlUtils-40bbec67.js';
import './Portal-c5cfa317.js';
import './jsonUtils-13b1f6fd.js';
import './lengthUtils-f033d4fe.js';
import './unitUtils-38774114.js';
import './sizeVariableUtils-4d3662df.js';
import './normalizeUtils-25a1ce55.js';
import './Field-bfaa8af9.js';
import './fieldType-66a19d8a.js';
import './utils-ab350511.js';
import './FeatureSet-58481609.js';
import './GPMessage-4cf6ee45.js';
import './floorFilterUtils-a09da11b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=new o({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let u=class extends l{constructor(...t){super(...t),this._gpMetadata=null,this.updateDelay=1e3;}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?n.fromJSON(this._gpMetadata.executionType):"sync"}execute(t,e){return t&&(t.updateDelay=this.updateDelay),Q(this.url,t,{...this.requestOptions,...e})}async _getGpPrintParams(t){const e=Z(this.url),r=G.get(e);return X(t,r)}};e([d()],u.prototype,"_gpMetadata",void 0),e([d({readOnly:!0})],u.prototype,"mode",null),e([d()],u.prototype,"updateDelay",void 0),u=e([i("esri.tasks.PrintTask")],u);const y=u;

export default y;
