import { e, d, i as i$1, p, ax as m, ck as q, aw as p$1, c as s, cl as e$1, cg as n, a as i$2, aW as c, af as t, bx as n$1, u, A as r, cm as U$1 } from './messageBundle-f75b4090.js';
import { u as u$1 } from './reactiveUtils-8f9c3a3d.js';
import { p as p$2 } from './debugFlags-e9d86cce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends p{constructor(){super(...arguments),this._tasks=new Array,this.running=!1;}get length(){return this._tasks.length}destroy(){this.cancelAll();}runTask(s){for(;!s.done&&this._process(s);)s.madeProgress();}push(s,r,t){return this.running=!0,new Promise(((e,o)=>this._tasks.push(new a(e,o,s,r,t))))}unshift(s,r,t){return this.running=!0,new Promise(((e,o)=>this._tasks.unshift(new a(e,o,s,r,t))))}_process(s){if(0===this._tasks.length)return !1;const r=this._tasks.shift();try{const c=p$1(r.signal);if(c&&!r.abortCallback)r.reject(m());else {const t=c?r.abortCallback(m()):r.callback(s);q(t)?t.then(r.resolve,r.reject):r.resolve(t);}}catch(c){r.reject(c);}return this.running=this._tasks.length>0,!0}cancelAll(){const s=m();for(const r of this._tasks)if(r.abortCallback){const t=r.abortCallback(s);r.resolve(t);}else r.reject(s);this._tasks.length=0,this.running=!1;}};e([d()],i.prototype,"running",void 0),i=e([i$1("esri.layers.support.PromiseQueue")],i);class a{constructor(s,r,t,e,o){this.resolve=s,this.reject=r,this.callback=t,this.signal=e,this.abortCallback=o;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I=s.getLogger("esri.views.support.Scheduler");function R(e){return new F.Scheduler({nowFunc:e})}var f;!function(e){e.RESOURCE_CONTROLLER="schedule",e.SLIDE="slide",e.STREAM_DATA_LOADER="stream loader",e.ELEVATION_QUERY="elevation query",e.TERRAIN_SURFACE="terrain",e.SURFACE_GEOMETRY_UPDATES="surface geometry updates",e.GRAPHICS_CORE="Graphics3D",e.I3S_CONTROLLER="I3S",e.POINT_CLOUD_LAYER="point cloud",e.FEATURE_TILE_FETCHER="feature fetcher",e.OVERLAY="overlay",e.STAGE="stage",e.GRAPHICS_DECONFLICTOR="graphics deconflictor",e.FILTER_VISIBILITY="Graphics3D filter visibility",e.SCALE_VISIBILITY="Graphics3D scale visibility",e.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",e.POINT_OF_INTEREST_FREQUENT="POI frequent",e.POINT_OF_INTEREST_INFREQUENT="POI infrequent",e.LABELER="labeler",e.FEATURE_QUERY_ENGINE="feature query",e.FEATURE_TILE_TREE="feature tile tree",e.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",e.ELEVATION_ALIGNMENT="elevation alignment",e.TEXT_TEXTURE_ATLAS="text texture atlas",e.TEXTURE_UNLOAD="texture unload",e.LINE_OF_SIGHT_TOOL="line of sight tool",e.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",e.ELEVATION_PROFILE="elevation profile",e.SNAPPING="snapping",e.SHADOW_ACCUMULATOR="shadow accumulator",e.CLOUDS_GENERATOR="cloud generator",e[e.TEST_PRIO=1]="TEST_PRIO";}(f||(f={}));const A=0,S=new Map([[f.RESOURCE_CONTROLLER,A],[f.SLIDE,A],[f.STREAM_DATA_LOADER,A],[f.ELEVATION_QUERY,A],[f.TERRAIN_SURFACE,1],[f.SURFACE_GEOMETRY_UPDATES,1],[f.GRAPHICS_CORE,2],[f.I3S_CONTROLLER,2],[f.POINT_CLOUD_LAYER,2],[f.FEATURE_TILE_FETCHER,2],[f.OVERLAY,4],[f.STAGE,4],[f.GRAPHICS_DECONFLICTOR,4],[f.FILTER_VISIBILITY,4],[f.SCALE_VISIBILITY,4],[f.FRUSTUM_VISIBILITY,4],[f.POINT_OF_INTEREST_FREQUENT,6],[f.POINT_OF_INTEREST_INFREQUENT,30],[f.LABELER,8],[f.FEATURE_QUERY_ENGINE,8],[f.FEATURE_TILE_TREE,16],[f.FEATURE_TILE_TREE_ACTIVE,A],[f.ELEVATION_ALIGNMENT,12],[f.TEXT_TEXTURE_ATLAS,12],[f.CLOUDS_GENERATOR,12],[f.TEXTURE_UNLOAD,12],[f.LINE_OF_SIGHT_TOOL,16],[f.LINE_OF_SIGHT_TOOL_INTERACTIVE,A],[f.SNAPPING,A],[f.SHADOW_ACCUMULATOR,30]]);function b(e){return S.has(e)?S.get(e):"number"==typeof e?e:1}const L=n$1(6.5),k=n$1(1),O=n$1(30),U=n$1(1e3/30),N=n$1(100),P=.9;var F,y;!function(r$1){let h=class extends p{constructor(e){super(e),this.updating=!0,this._microTaskQueued=!1,this.performanceInfo={total:new e$1("total"),tasks:new Map},this._frameTaskTimes=new Map,this._budget=null,this._state=1,this._tasks=new n,this._runQueue=new n,this._load=0,this._idleStateCallbacks=new n,this._idleUpdatesStartFired=!1,this._maxReschedule=v,this._forceTask=!1,this._debug=!1,this._debugHandle=i$2(p$2,"SCHEDULER_LOG_SLOW_TASKS",(e=>this._debug=e)),this._budget=new d$1(e.nowFunc);for(const r of Object.keys(f))this.performanceInfo.tasks.set(f[r],new e$1(f[r]));let t;const s=this;this._test={get state(){return c(t,s._state)},set state(e){t=e;},FRAME_SAFETY_BUDGET:L,INTERACTING_BUDGET:U,IDLE_BUDGET:N,get budget(){return s._budget.budget},usedBudget:0,setBudget:e=>s._budget=e,updateTask:e=>this._updateTask(e),getState:e=>this._getState(e),getRuntime:e=>this._getRuntime(e),resetRuntimes:()=>this._resetRuntimes(),getRunning:()=>this._getRunning()};}destroy(){this._debugHandle&&this._debugHandle.remove(),this._microTaskQueued=!1;}activate(){this._budget.done||this._microTaskQueued||(this._microTaskQueued=!0,queueMicrotask((()=>{this._microTaskQueued&&(this._microTaskQueued=!1,this._budget.done||(this._maxReschedule=v,this._schedule(),this.frame()));})));}registerTask(e,t){const s=b(e),r=new _(this,e,t,s);return this._tasks.push(r),this.performanceInfo.tasks.has(e)||this.performanceInfo.tasks.set(e,new e$1(e)),r}registerIdleStateCallbacks(e,t){const s={idleBegin:e,idleEnd:t};this._idleStateCallbacks.push(s),2===this.state&&this._idleUpdatesStartFired&&s.idleBegin();const r=this;return {remove:()=>this._removeIdleStateCallbacks(s),set idleBegin(e){r._idleUpdatesStartFired&&(s.idleEnd(),2===r._state&&e()),s.idleBegin=e;},set idleEnd(e){s.idleEnd=e;}}}get now(){return this.nowFunc()}get load(){return this._load}set state(e){this._state!==e&&(this._state=e,2!==this.state&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll((e=>e.idleEnd()))));}get state(){return t(this._test.state)?this._state:this._test.state}updateBudget(e){this._test.usedBudget=0;let t=L,s=e.frameDuration,r=k;switch(this.state){case 2:t=n$1(0),s=n$1(Math.max(N,e.frameDuration)),r=O;break;case 1:s=n$1(Math.max(U,e.frameDuration));}return s=n$1(s-e.elapsedFrameTime-t),2!==this.state&&s<k&&!this._forceTask?(this._forceTask=!0,!1):(s=n$1(Math.max(s,r)),this._budget.reset(s,this.state),this._maxReschedule=v,this._updateLoad(),this._schedule())}frame(){switch(this._forceTask=!1,this._microTaskQueued=!1,this.state){case 2:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll((e=>e.idleBegin()))),this._runIdle();break;case 1:this._runInteracting();break;default:this._runAnimating();}this._test.usedBudget=this._budget.elapsed;}stopFrame(){this._budget.reset(n$1(0),this._state),this._budget.madeProgress();}_removeIdleStateCallbacks(e){this._idleUpdatesStartFired&&e.idleEnd(),this._idleStateCallbacks.removeUnordered(e);}removeTask(e){this._tasks.removeUnordered(e),this._runQueue.removeUnordered(e);}_updateTask(e){this._tasks.forAll((t=>{t.name===e&&t.setPriority(e);}));}_getState(e){if(this._runQueue.some((t=>t.name===e)))return y.SCHEDULED;let t=y.IDLE;return this._tasks.forAll((s=>{s.name===e&&s.needsUpdate&&(s.schedulePriority<=1?t=y.READY:t!==y.READY&&(t=y.WAITING));})),t}_getRuntime(e){let t=0;return this._tasks.forAll((s=>{s.name===e&&(t+=s.runtime);})),t}_resetRuntimes(){this._tasks.forAll((e=>e.runtime=0));}_getRunning(){const e=new Map;if(this._tasks.forAll((t=>{t.needsUpdate&&e.set(t.name,(e.get(t.name)||0)+1);})),0===e.size)return null;let t="";return e.forEach(((e,s)=>{t+=e>1?` ${e}x ${s}`:` ${s}`;})),t}_runIdle(){this._run();}_runInteracting(){this._run();}_runAnimating(){this._run();}_updateLoad(){const e=this._tasks.reduce(((e,t)=>t.needsUpdate?++e:e),0);this._load=this._load*P+e*(1-P);}_schedule(){if(this._maxReschedule<=0)return !1;for(this._runQueue.filterInPlace((e=>!!e.needsUpdate||(e.schedulePriority=e.basePriority,!1))),this._tasks.forAll((e=>{e.basePriority===A&&e.needsUpdate&&!this._runQueue.some((t=>t===e))&&this._runQueue.unshift(e);}));0===this._runQueue.length;){let e=!1,t=0;if(this._tasks.forAll((s=>{if(s.needsUpdate&&0!==s.schedulePriority&&s.basePriority!==A)if(e=!0,t=Math.max(t,s.basePriority),1===s.schedulePriority)s.schedulePriority=0,this._runQueue.push(s);else --s.schedulePriority;})),!e)return this.updating=!1,!1;this._maxReschedule===v&&(this._maxReschedule=t),--this._maxReschedule;}return this.updating=!0,!0}_run(){const e=this._budget.now();this._startFrameTaskTimes();do{for(;this._runQueue.length>0;){const s=this._budget.now(),r=this._runQueue.pop();this._budget.resetProgress();try{r.task.runTask(this._budget);}catch(t){I.error(`Exception in task "${r.name}"`,t);}r.schedulePriority=r.basePriority;const i=this._budget.now()-s;if(r.runtime+=i,this._frameTaskTimes.set(r.priority,this._frameTaskTimes.get(r.priority)+i),this._debug&&this._budget.elapsed>2*this._budget.budget&&console.log("Task",r.name,"used",this._budget.elapsed,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return void this._recordFrameTaskTimes(this._budget.now()-e)}}while(this._schedule());this._recordFrameTaskTimes(this._budget.now()-e);}_startFrameTaskTimes(){for(const e of Object.keys(f))this._frameTaskTimes.set(f[e],0);}_recordFrameTaskTimes(e){this._frameTaskTimes.forEach(((e,t)=>this.performanceInfo.tasks.get(t).record(e))),this.performanceInfo.total.record(e);}get test(){return this._test}};e([d()],h.prototype,"updating",void 0),e([d()],h.prototype,"nowFunc",void 0),h=e([i$1("esri.views.support.Scheduler")],h),r$1.Scheduler=h;let _=class extends p{constructor(e,t,r$1,i$1){super({}),this._scheduler=e,this.name=t,this._basePriority=i$1,this.runtime=0,this._queue=new i,this._handles=new u,this.schedulePriority=this._basePriority,this.task=r(r$1)?r$1:this._queue,this._handles.add(u$1((()=>this.task.running),(()=>e.activate())));}get updating(){return this._queue.running}normalizeCtorArgs(){return {}}remove(){this.processQueue(C),this._scheduler.removeTask(this),this.schedule=D.schedule,this.reschedule=D.reschedule,this._handles.destroy();}get basePriority(){return this._basePriority}setPriority(e){this.name=e;const t=b(e);this._basePriority!==A&&0===this.schedulePriority||(this.schedulePriority=t),this._basePriority=t;}get priority(){return this.name}set priority(e){this.setPriority(e);}get needsUpdate(){return this.updating||this.task.running}schedule(e,t,s){return this._queue.push(e,t,s)}reschedule(e,t,s){return this._queue.unshift(e,t,s)}processQueue(e){this._queue.runTask(e);}};e([d({constructOnly:!0})],_.prototype,"task",void 0),e([d({readOnly:!0})],_.prototype,"updating",null),_=e([i$1("esri.views.support.SchedulerTask")],_);class d$1{constructor(e){this.now=e,this._begin=0,this._budget=0,this._state=2,this._didWork=!1,this._enabled=!0;}run(e){return !this.done&&(!0===e()&&(this._didWork=!0),!0)}get done(){return this._didWork&&this.elapsed>=this._budget&&this._enabled}get budget(){return this._budget}madeProgress(){this._didWork=!0;}get state(){return this._state}get enabled(){return this._enabled}set enabled(e){this._enabled=e;}reset(e,t){this._begin=this.now(),this._budget=e,this._state=t,this._didWork=!1;}get remaining(){return Math.max(this._budget-this.elapsed,0)}get elapsed(){return this.now()-this._begin}resetProgress(){this._didWork=!1;}get hasProgressed(){return this._didWork}}r$1.Budget=d$1;}(F||(F={})),function(e){e.SCHEDULED="s",e.READY="r",e.WAITING="w",e.IDLE="i";}(y||(y={}));const C=(()=>{const e=new F.Budget((()=>performance.now()));return e.enabled=!1,e})();class w{remove(){}processQueue(){}schedule(e,t,s){try{if(p$1(t)){const e=m();return s?Promise.resolve(s(e)):Promise.reject(e)}return U$1(e(C))}catch(r){return Promise.reject(r)}}reschedule(e,t,s){return this.schedule(e,t,s)}}const D=new w,v=Number.MAX_SAFE_INTEGER;

export { C, D, R, f, i };
