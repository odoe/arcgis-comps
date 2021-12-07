import{e,s as t,t as n}from"./p-4a1f951c.js";import"./p-772b5f4f.js";const i={title:"Webscene",type:"object",description:"The web scene data lists the basemap, operational layers, and presentation slides to be used in the web scene. It also contains information about pop-up windows and layer styling overrides to be used in the web scene. A version property allows you to supply the version of the web scene JSON format being used.",properties:{applicationProperties:{type:"object",$ref:"#/definitions/applicationProperties_schema.json"},authoringApp:{type:"string",description:"String value indicating the application which authored the webmap"},authoringAppVersion:{type:"string",description:"String value indicating the authoring App's version number."},baseMap:{type:"object",description:"Basemaps give the web scene a geographic context.",$ref:"#/definitions/baseMap_schema.json"},clippingArea:{type:"object",$ref:"#/definitions/clippingArea_schema.json"},ground:{type:"object",$ref:"#/definitions/ground_schema.json"},heightModelInfo:{type:"object",$ref:"#/definitions/heightModelInfo_schema.json"},initialState:{type:"object",$ref:"#/definitions/initialState_schema.json"},mapFloorInfo:{type:"object",$ref:"#/definitions/mapFloorInfo_schema.json"},mapRangeInfo:{type:"object",description:"Map Range Information",$ref:"#/definitions/mapRangeInfo_schema.json"},operationalLayers:{type:"array",description:"Operational layers contain business data which are used to make thematic scenes.",items:{type:"object",$ref:"#/definitions/operationalLayers_schema.json"},uniqueItems:!0},presentation:{type:"object",$ref:"#/definitions/presentation_schema.json"},spatialReference:{type:"object",description:"An object used to specify the spatial reference of the given geometry.",$ref:"#/definitions/spatialReference_schema.json"},tables:{type:"array",description:"An array of table objects.",items:{type:"object",$ref:"#/definitions/table_schema.json"}},transportationNetworks:{type:"array",description:"Used to specify the transportation networks of the scene.",items:{type:"object",$ref:"#/definitions/transportationNetwork_schema.json"}},version:{type:"string",$ref:"#/definitions/version_schema.json"},viewingMode:{type:"string",enum:["global","local"]},widgets:{type:"object",description:"the widgets object contains widgets that should be exposed to the user.",$ref:"#/definitions/widgets_schema.json"}},required:["ground","operationalLayers","spatialReference","version","viewingMode"],additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:e},o=new t({allErrors:!0,extendRefs:!0});function s(e,t){return function(e){const t=a(e);if(!o.getSchema(t)){const n=function(e){const t=i.definitions[a(e)];if(!t)throw new Error(`invalid schema name to validate against '${e}'`);const n={};for(const e in t)n[e]=t[e];return n.definitions=i.definitions,n}(e);o.addSchema(n,t)}}(t),o.validate(a(t),e)?[]:n(o.errors)}function a(e){return e?`${e}_schema.json`:"webScene_schema.json"}o.addSchema(i,a());export{s as validate}