import{r as p,h as t,g as s}from"./p-84bf99cb.js";import{a5 as i}from"./p-9ae46e68.js";import{j as r,G as o}from"./p-7a648ea5.js";import"./p-566b0715.js";import"./p-fe01b82b.js";import"./p-b2a0fae5.js";import"./p-6ebb24ba.js";import"./p-4fd6e394.js";import"./p-4681e856.js";import"./p-a0e42f29.js";import"./p-41655335.js";import"./p-3ffd0931.js";import"./p-8031c809.js";import"./p-3048cc18.js";import"./p-c7a0a732.js";import"./p-b2d0e2de.js";import"./p-db87794e.js";import"./p-22c8d854.js";import"./p-3d1b25b6.js";import"./p-f42060e0.js";import"./p-79553c8d.js";import"./p-8e03c038.js";import"./p-32462343.js";import"./p-98a14d68.js";import"./p-32824614.js";import"./p-40d3b500.js";import"./p-c8f716a9.js";import"./p-57ae469d.js";import"./p-27ef204b.js";import"./p-3a2e88bf.js";import"./p-9e860e7b.js";import"./p-ada83011.js";import"./p-98ce0cca.js";import"./p-4003c7ae.js";import"./p-a7080451.js";import"./p-7e9d2371.js";import"./p-94f8dc11.js";import"./p-bb07d873.js";import"./p-8ac97b63.js";import"./p-a0a931f0.js";import"./p-dfc6337f.js";import"./p-77e6a663.js";import"./p-c5b7f7c3.js";import"./p-30ddb3a0.js";import"./p-74fc1b7f.js";import"./p-b3024dec.js";import"./p-4fcbc3c5.js";import"./p-4b3ae2cf.js";import"./p-6443bfb4.js";import"./p-8e6daf54.js";import"./p-c0757461.js";import"./p-93d9099f.js";import"./p-d3898fd7.js";import"./p-844dad6c.js";import"./p-c59d0a4d.js";import"./p-3a5fe179.js";import"./p-138c2b2c.js";import"./p-ae0b06e3.js";import"./p-a293872e.js";import"./p-f271906a.js";import"./p-cf2267f9.js";import"./p-d2e19070.js";import"./p-e5429b9e.js";import"./p-cf8dc9be.js";import"./p-f17028ec.js";import"./p-5c89c68e.js";import"./p-725fd184.js";import"./p-0c91ebaf.js";import"./p-72355290.js";import"./p-d68829c1.js";import"./p-81102839.js";import"./p-2f7c985e.js";import"./p-00b9ea57.js";import"./p-5a0fe1d0.js";import"./p-7818def0.js";import"./p-da143060.js";import"./p-15bb2887.js";import"./p-1f10277d.js";import"./p-2b250922.js";import"./p-285c6a34.js";import"./p-81e5b36e.js";import"./p-1d6f3ddb.js";import"./p-789e71c1.js";import"./p-523f37cd.js";import"./p-a198d6d0.js";import"./p-15515b8a.js";import"./p-264c75ac.js";import"./p-c431b12a.js";import"./p-b0f556d6.js";import"./p-8b767e6c.js";import"./p-8d03d70f.js";import"./p-9658240e.js";import"./p-d6725707.js";import"./p-d925341f.js";import"./p-c3efb223.js";import"./p-bae36c84.js";import"./p-39da60a5.js";import"./p-56ed1c7a.js";import"./p-d18723b0.js";import"./p-b62a8a4f.js";import"./p-f614dce4.js";let m=class{constructor(t){p(this,t)}validateApiKey(p){i.apiKey=p}componentWillLoad(){this.apiKey&&(i.apiKey=this.apiKey);const p=new r({basemap:this.basemap||"streets-vector"}),t={};this.zoom&&(t.zoom=this.zoom),this.center&&(t.center="string"==typeof this.center?this.center.split(",").map((p=>Number(p))):this.center);const s=new o(Object.assign({container:this.el,map:p},t));this.view=s,s.when((()=>console.log("view ready")))}componentDidRender(){const p=this.el.querySelector(".esri-view-user-storage");if(p){const t=Array.from(p.children);for(let p of t)p.tagName.toLowerCase().includes("arcgis-")&&(p.view=this.view)}}render(){return t("div",{class:"map-view"})}get el(){return s(this)}static get watchers(){return{apiKey:["validateApiKey"]}}};m.style="@import url('https://js.arcgis.com/next/esri/themes/light/main.css');.map-view{padding:0;margin:0}";export{m as arcgis_map}