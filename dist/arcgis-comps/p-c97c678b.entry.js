import{r as t,c as s,h as i,g as e}from"./p-53bb6ab4.js";import{bu as r,c3 as a,c4 as o}from"./p-5420851c.js";let c=class{constructor(i){t(this,i),this.loaded=s(this,"loaded",7)}validateApiKey(t){r.apiKey=t}componentWillLoad(){this.apiKey&&(r.apiKey=this.apiKey);const t=new a({basemap:this.basemap||"streets-vector"}),s={};this.zoom&&(s.zoom=this.zoom),this.center&&(s.center="string"==typeof this.center?this.center.split(",").map((t=>Number(t))):this.center);const i=new o(Object.assign({container:this.el,map:t},s));this.view=i,i.when((()=>this.loaded.emit(!0)))}componentDidRender(){const t=this.el.querySelector(".esri-view-user-storage");if(t){const s=Array.from(t.children);for(let t of s)t.tagName.toLowerCase().includes("arcgis-")&&(t.view=this.view)}}render(){return i("div",{class:"map-view"})}get el(){return e(this)}static get watchers(){return{apiKey:["validateApiKey"]}}};c.style="@import url('https://js.arcgis.com/next/esri/themes/light/main.css');.map-view{padding:0;margin:0}";export{c as arcgis_map}