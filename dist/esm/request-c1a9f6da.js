import { bH as e, a7 as s$1, N as e$1 } from './MapView-2c43b6d4.js';
import './index-41925fe8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s;function a(a,n){let o=n.responseType;o?"array-buffer"!==o&&"blob"!==o&&"json"!==o&&"native"!==o&&"native-request-init"!==o&&"text"!==o&&(o="text"):o="json",n.responseType=o;const i=e$1(n.signal);return delete n.signal,e.invokeStaticMessage("request",{url:a,options:n},{signal:i}).then((async t=>{let r,l,u,c,f;if(t.data)if(t.data instanceof ArrayBuffer){if(!("json"!==o&&"text"!==o&&"blob"!==o||(r=new Blob([t.data]),"json"!==o&&"text"!==o||(s||(s=new FileReaderSync),c=s.readAsText(r),"json"!==o)))){try{l=JSON.parse(c||null);}catch(b){const t={...b,url:a,requestOptions:n};throw new s$1("request:server",b.message,t)}if(l.error){const t={...l.error,url:a,requestOptions:n};throw new s$1("request:server",l.error.message,t)}}}else "native"===o&&(t.data.signal=i,u=await fetch(t.data.url,t.data));switch(o){case"blob":f=r;break;case"json":f=l;break;case"native":f=u;break;case"text":f=c;break;default:f=t.data;}return {data:f,requestOptions:n,ssl:t.ssl,url:a}}))}

export { a as execute };
