import { o, e, d, i, d2 as l, dy as Q, dz as Z, dA as G, dB as X } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=new o({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let u=class extends l{constructor(...t){super(...t),this._gpMetadata=null,this.updateDelay=1e3;}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?n.fromJSON(this._gpMetadata.executionType):"sync"}execute(t,e){return t&&(t.updateDelay=this.updateDelay),Q(this.url,t,{...this.requestOptions,...e})}async _getGpPrintParams(t){const e=Z(this.url),r=G.get(e);return X(t,r)}};e([d()],u.prototype,"_gpMetadata",void 0),e([d({readOnly:!0})],u.prototype,"mode",null),e([d()],u.prototype,"updateDelay",void 0),u=e([i("esri.tasks.PrintTask")],u);const y=u;

export default y;
