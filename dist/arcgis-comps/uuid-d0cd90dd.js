import { W as e } from './cast-e5ea2533.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(){const t=n.getRandomValues(new Uint16Array(8));t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;const o=o=>t[o].toString(16);return o(0)+o(1)+"-"+o(2)+"-"+o(3)+"-"+o(4)+"-"+o(5)+o(6)+o(7)}const n=e.crypto||e.msCrypto;

export { o };
