function o(n,f){for(const t of n.children)if(t.localName in f){const n=f[t.localName];if("function"==typeof n){const f=n(t);f&&o(t,f)}else o(t,n)}}function*n(o,f){for(const t of o.children)if(t.localName in f){const o=f[t.localName];"function"==typeof o?yield o(t):yield*n(t,o)}}export{n,o}