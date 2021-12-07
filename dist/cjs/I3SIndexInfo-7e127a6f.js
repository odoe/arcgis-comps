'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(n,t,s,a,i,d){let l=null;if(request.r(s)){const o=`${n}/nodepages/`,t=o+Math.floor(s.rootIndex/s.nodesPerPage);try{return {type:"page",rootPage:(await request.E(t,{query:{f:"json",token:a},responseType:"json",signal:d})).data,rootIndex:s.rootIndex,pageSize:s.nodesPerPage,lodMetric:s.lodSelectionMetricType,urlPrefix:o}}catch(f){request.r(i)&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",t,f),l=f;}}if(!t)return null;const p=`${n}/nodes/`,c=p+(t&&t.split("/").pop());try{return {type:"node",rootNode:(await request.E(c,{query:{f:"json",token:a},responseType:"json",signal:d})).data,urlPrefix:p}}catch(f){throw new request.s("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:f,url:c})}}

exports.n = n;
