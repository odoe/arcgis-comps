import{t as r,bE as o,a0 as n,aa as e}from"./p-9ae46e68.js";function t(r,o,e){return n(r.map(((r,n)=>o.apply(e,[r,n]))))}function u(r,o,e){return n(r.map(((r,n)=>o.apply(e,[r,n])))).then((r=>r.map((r=>r.value))))}function a(n){return r(n)?o():n.then((r=>({ok:!0,value:r}))).catch((r=>({ok:!1,error:r})))}function f(r){return r.then((r=>({ok:!0,value:r}))).catch((r=>(e(r),{ok:!1,error:r})))}export{a,t as n,f as p,u}