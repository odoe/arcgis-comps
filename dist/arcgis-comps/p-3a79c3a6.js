import{bt as n,a7 as t}from"./p-566b0715.js";function r(r,o){const u=o||r.extent,c=r.width,s=t(u&&u.spatialReference);return u&&c?u.width/c*s*n*96:0}function o(r,o){const u=r.extent,c=r.width,s=function(r,o){return r/(t(o)*n*96)}(o,u.spatialReference);return u.clone().expand(s*c/u.width)}export{o as c,r}