import { az as i$1, bD as o$1 } from './MapView-ac75aae8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function r(e){e||(e=i$1());let r=e in t;if(!r){const n=e.split("-");n.length>1&&n[0]in t&&(e=n[0],r=!0),r||(e="en");}const[o,i,s="#,##0.###"]=t[e];return {decimal:o,group:i,pattern:s}}function o(e,n){const t=r((n={...n}).locale);n.customs=t;const o=n.pattern||t.pattern;return isNaN(e)||Math.abs(e)===1/0?null:s(e,o,n)}const i=/[#0,]*[#0](?:\.0*#*)?/;function s(e,n,t){const r=(t=t||{}).customs.group,o=t.customs.decimal,s=n.split(";"),c=s[0];if(-1!==(n=s[e<0?1:0]||"-"+c).indexOf("%"))e*=100;else if(-1!==n.indexOf("‰"))e*=1e3;else {if(-1!==n.indexOf("¤"))throw new Error("currency notation not supported");if(-1!==n.indexOf("E"))throw new Error("exponential notation not supported")}const a=i,p=c.match(a);if(!p)throw new Error("unable to find a number expression in pattern: "+n);return !1===t.fractional&&(t.places=0),n.replace(a,l(e,p[0],{decimal:o,group:r,places:t.places,round:t.round}))}function l(e,n,t){!0===(t=t||{}).places&&(t.places=0),t.places===1/0&&(t.places=6);const r=n.split("."),o="string"==typeof t.places&&t.places.indexOf(",");let i=t.places;o?i=t.places.substring(o+1):i>=0||(i=(r[1]||[]).length),t.round<0||(e=Number(e.toFixed(Number(i))));const s=String(Math.abs(e)).split("."),l=s[1]||"";if(r[1]||t.places){o&&(t.places=t.places.substring(0,o));const e=void 0!==t.places?t.places:r[1]&&r[1].lastIndexOf("0")+1;e>l.length&&(s[1]=l.padEnd(Number(e),"0")),i<l.length&&(s[1]=l.substr(0,Number(i)));}else s[1]&&s.pop();const c=r[0].replace(",","");let a=c.indexOf("0");-1!==a&&(a=c.length-a,a>s[0].length&&(s[0]=s[0].padStart(a,"0")),-1===c.indexOf("#")&&(s[0]=s[0].substr(s[0].length-a)));let p,u,f=r[0].lastIndexOf(",");if(-1!==f){p=r[0].length-f-1;const e=r[0].substr(0,f);f=e.lastIndexOf(","),-1!==f&&(u=e.length-f-1);}const d=[];for(let g=s[0];g;){const e=g.length-p;d.push(e>0?g.substr(e):g),g=e>0?g.slice(0,e):"",u&&(p=u,u=void 0);}return s[0]=d.reverse().join(t.group||","),s.join(t.decimal||".")}function a(n){const t=r((n=n||{}).locale),o=n.pattern||t.pattern,s=t.group,l=t.decimal;let c=1;if(-1!==o.indexOf("%"))c/=100;else if(-1!==o.indexOf("‰"))c/=1e3;else if(-1!==o.indexOf("¤"))throw new Error("currency notation not supported");const a=o.split(";");1===a.length&&a.push("-"+a[0]);const p=d(a,(function(t){return (t="(?:"+o$1(t,".")+")").replace(i,(function(e){const t={signed:!1,separator:n.strict?s:[s,""],fractional:n.fractional,decimal:l,exponent:!1},r=e.split(".");let o=n.places;1===r.length&&1!==c&&(r[1]="###"),1===r.length||0===o?t.fractional=!1:(void 0===o&&(o=n.pattern?r[1].lastIndexOf("0")+1:1/0),o&&null==n.fractional&&(t.fractional=!0),!n.places&&o<r[1].length&&(o+=","+r[1].length),t.places=o);const i=r[0].split(",");return i.length>1&&(t.groupSize=i.pop().length,i.length>1&&(t.groupSize2=i.pop().length)),"("+u(t)+")"}))}),!0);return {regexp:p.replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:s,decimal:l,factor:c}}function p(e,n){const t=a(n),r=new RegExp("^"+t.regexp+"$").exec(e);if(!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],t.factor*=-1;}return o=o.replace(new RegExp("["+t.group+"\\s\\xa0]","g"),"").replace(t.decimal,"."),Number(o)*t.factor}function u(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const n=f(e),t=d(e.fractional,(function(n){let t="";return n&&0!==e.places&&(t="\\"+e.decimal,e.places===1/0?t="(?:"+t+"\\d+)?":t+="\\d{"+e.places+"}"),t}),!0);let r=n+t;return t&&(r="(?:(?:"+r+")|(?:"+t+"))"),r+d(e.exponent,(function(n){return n?"([eE]"+f({signed:e.eSigned})+")":""}))}function f(n){"signed"in(n=n||{})||(n.signed=[!0,!1]),"separator"in n?"groupSize"in n||(n.groupSize=3):n.separator="";return d(n.signed,(function(e){return e?"[-+]":""}),!0)+d(n.separator,(function(t){if(!t)return "(?:\\d+)";" "===(t=o$1(t))?t="\\s":" "===t&&(t="\\s\\xa0");const r=n.groupSize,o=n.groupSize2;if(o){const e="(?:0|[1-9]\\d{0,"+(o-1)+"}(?:["+t+"]\\d{"+o+"})*["+t+"]\\d{"+r+"})";return r-o>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(r-1)+"}))":e}return "(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*)"}),!0)}const d=function(e,n,t){if(!(e instanceof Array))return n(e);const r=[];for(let o=0;o<e.length;o++)r.push(n(e[o]));return g(r.join("|"),t)},g=function(e,n){return "("+(n?"?:":"")+e+")"};

export { a, o, p };
