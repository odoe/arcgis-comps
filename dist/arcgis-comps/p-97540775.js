import"./p-5420851c.js";function t(t,n,o,r){const c=t.clone(),p=1<<c.level,e=c.col+n,i=c.row+o;return r&&e<0?(c.col=e+p,c.world-=1):e>=p?(c.col=e-p,c.world+=1):c.col=e,c.row=i,c}export{t as l}