import"./p-e58503d5.js";import"./p-2f398ed1.js";import"./p-5e833dfc.js";import"./p-77b9a0fc.js";function p(p,t,o,r){const e=p.clone(),i=1<<e.level,s=e.col+t,c=e.row+o;return r&&s<0?(e.col=s+i,e.world-=1):s>=i?(e.col=s-i,e.world+=1):e.col=s,e.row=c,e}export{p as l}