function n(n){return n&&"getAtOrigin"in n&&"originOf"in n}function i(i){i&&i.writtenProperties&&i.writtenProperties.forEach((i=>{const t=i.target;i.newOrigin&&i.oldOrigin!==i.newOrigin&&n(t)&&t.updateOrigin(i.propName,i.newOrigin)}))}export{n as i,i as r}