import { bK as A, aB as s$1 } from './messageBundle-8a146a9b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(n,t,o={}){return c(n,t,o,l)}function u(n,t,o={}){return c(n,t,o,s)}function c(n,t,o={},i){let u=null;const c=o.once?(n,o)=>{i(n)&&(s$1(u),t(n,o));}:(n,o)=>{i(n)&&t(n,o);};if(u=A(n,c,o.sync,o.equals),o.initial){const t=n();c(t,t);}return u}function l(n){return !0}function s(n){return !!n}const m={sync:!0};

export { i, m, u };
