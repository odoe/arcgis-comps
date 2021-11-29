import{e as n}from"./p-772b5f4f.js";var t,r,e={exports:{}};t="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(t=t||__filename),r=function(r){var e,i,o=void 0!==(r=r||{})?r:{};o.ready=new Promise((function(n,t){e=n,i=t}));var u,a,f,c,s,l={};for(u in o)o.hasOwnProperty(u)&&(l[u]=o[u]);a="object"==typeof window,f="function"==typeof importScripts,c="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,s=!a&&!c&&!f;var v,d,p,h,y="";c?(y=f?require("path").dirname(y)+"/":__dirname+"/",v=function(n,t){return p||(p=require("fs")),h||(h=require("path")),n=h.normalize(n),p.readFileSync(n,t?null:"utf8")},d=function(n){var t=v(n,!0);return t.buffer||(t=new Uint8Array(t)),$(t.buffer),t},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(n){if(!(n instanceof Pt))throw n})),process.on("unhandledRejection",tn),o.inspect=function(){return"[Emscripten Module object]"}):s?("undefined"!=typeof read&&(v=function(n){return read(n)}),d=function(n){var t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(n)):($("object"==typeof(t=read(n,"binary"))),t)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(a||f)&&(f?y=self.location.href:document.currentScript&&(y=document.currentScript.src),t&&(y=t),y=0!==y.indexOf("blob:")?y.substr(0,y.lastIndexOf("/")+1):"",v=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},f&&(d=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}));var m,b,w=o.print||console.log.bind(console),g=o.printErr||console.warn.bind(console);for(u in l)l.hasOwnProperty(u)&&(o[u]=l[u]);l=null,o.wasmBinary&&(m=o.wasmBinary),"object"!=typeof WebAssembly&&tn("no native wasm support detected");var A=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),T=!1;function $(n,t){n||tn("Assertion failed: "+t)}var j="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function P(n,t,r){for(var e=t+r,i=t;n[i]&&!(i>=e);)++i;if(i-t>16&&n.subarray&&j)return j.decode(n.subarray(t,i));for(var o="";t<i;){var u=n[t++];if(128&u){var a=63&n[t++];if(192!=(224&u)){var f=63&n[t++];if((u=224==(240&u)?(15&u)<<12|a<<6|f:(7&u)<<18|a<<12|f<<6|63&n[t++])<65536)o+=String.fromCharCode(u);else{var c=u-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&u)<<6|a)}else o+=String.fromCharCode(u)}return o}function k(n,t){return n?P(W,n,t):""}var C,E,W,F,_,U,S,x,O,M="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function I(n,t){for(var r=n,e=r>>1,i=e+t/2;!(e>=i)&&_[e];)++e;if((r=e<<1)-n>32&&M)return M.decode(W.subarray(n,r));for(var o=0,u="";;){var a=F[n+2*o>>1];if(0==a||o==t/2)return u;++o,u+=String.fromCharCode(a)}}function V(n,t,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var e=t,i=(r-=2)<2*n.length?r/2:n.length,o=0;o<i;++o){var u=n.charCodeAt(o);F[t>>1]=u,t+=2}return F[t>>1]=0,t-e}function q(n){return 2*n.length}function D(n,t){for(var r=0,e="";!(r>=t/4);){var i=U[n+4*r>>2];if(0==i)break;if(++r,i>=65536){var o=i-65536;e+=String.fromCharCode(55296|o>>10,56320|1023&o)}else e+=String.fromCharCode(i)}return e}function R(n,t,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var e=t,i=e+r-4,o=0;o<n.length;++o){var u=n.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++o)),U[t>>2]=u,(t+=4)+4>i)break}return U[t>>2]=0,t-e}function z(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e>=55296&&e<=57343&&++r,t+=4}return t}function B(n,t){return n%t>0&&(n+=t-n%t),n}function G(n){C=n,o.HEAP8=E=new Int8Array(n),o.HEAP16=F=new Int16Array(n),o.HEAP32=U=new Int32Array(n),o.HEAPU8=W=new Uint8Array(n),o.HEAPU16=_=new Uint16Array(n),o.HEAPU32=S=new Uint32Array(n),o.HEAPF32=x=new Float32Array(n),o.HEAPF64=O=new Float64Array(n)}var H=o.INITIAL_MEMORY||16777216;function J(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var r=t.func;"number"==typeof r?void 0===t.arg?o.dynCall_v(r):o.dynCall_vi(r,t.arg):r(void 0===t.arg?null:t.arg)}else t(o)}}(b=o.wasmMemory?o.wasmMemory:new WebAssembly.Memory({initial:H/65536,maximum:32768}))&&(C=b.buffer),H=C.byteLength,G(C),U[80624]=5565536;var L=[],N=[],X=[],K=[],Z=Math.ceil,Q=Math.floor,Y=0,nn=null;function tn(n){o.onAbort&&o.onAbort(n),g(n+=""),T=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.";var t=new WebAssembly.RuntimeError(n);throw i(t),t}function rn(n,t){return String.prototype.startsWith?n.startsWith(t):0===n.indexOf(t)}function en(n){return rn(n,"data:application/octet-stream;base64,")}function on(n){return rn(n,"file://")}o.preloadedImages={},o.preloadedAudios={};var un,an="basis_transcoder.wasm";function fn(){try{if(m)return new Uint8Array(m);if(d)return d(an);throw"both async and sync fetching of the wasm failed"}catch(n){tn(n)}}en(an)||(un=an,an=o.locateFile?o.locateFile(un,y):y+un),N.push({func:function(){At()}});var cn={};function sn(n){for(;n.length;){var t=n.pop();n.pop()(t)}}function ln(n){return this.fromWireType(S[n>>2])}var vn={},dn={},pn={};function hn(n){if(void 0===n)return"_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=48&&t<=57?"_"+n:n}function yn(n,t){return n=hn(n),function(){return t.apply(this,arguments)}}function mn(n,t){var r=yn(t,(function(n){this.name=t,this.message=n;var r=new Error(n).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var bn=void 0;function wn(n){throw new bn(n)}function gn(n,t,r){function e(t){var e=r(t);e.length!==n.length&&wn("Mismatched type converter count");for(var i=0;i<n.length;++i)kn(n[i],e[i])}n.forEach((function(n){pn[n]=t}));var i=new Array(t.length),o=[],u=0;t.forEach((function(n,t){dn.hasOwnProperty(n)?i[t]=dn[n]:(o.push(n),vn.hasOwnProperty(n)||(vn[n]=[]),vn[n].push((function(){i[t]=dn[n],++u===o.length&&e(i)})))})),0===o.length&&e(i)}function An(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var Tn=void 0;function $n(n){for(var t="",r=n;W[r];)t+=Tn[W[r++]];return t}var jn=void 0;function Pn(n){throw new jn(n)}function kn(n,t,r){if(r=r||{},!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=t.name;if(n||Pn('type "'+e+'" must have a positive integer typeid pointer'),dn.hasOwnProperty(n)){if(r.ignoreDuplicateRegistrations)return;Pn("Cannot register type '"+e+"' twice")}if(dn[n]=t,delete pn[n],vn.hasOwnProperty(n)){var i=vn[n];delete vn[n],i.forEach((function(n){n()}))}}function Cn(n){return{count:n.count,deleteScheduled:n.deleteScheduled,preservePointerOnDelete:n.preservePointerOnDelete,ptr:n.ptr,ptrType:n.ptrType,smartPtr:n.smartPtr,smartPtrType:n.smartPtrType}}function En(n){Pn(function(n){return n.$$.ptrType.registeredClass.name}(n)+" instance already deleted")}var Wn=!1;function Fn(){}function _n(n){n.count.value-=1,0===n.count.value&&function(n){n.smartPtr?n.smartPtrType.rawDestructor(n.smartPtr):n.ptrType.registeredClass.rawDestructor(n.ptr)}(n)}function Un(n){return"undefined"==typeof FinalizationGroup?(Un=function(n){return n},n):(Wn=new FinalizationGroup((function(n){for(var t=n.next();!t.done;t=n.next()){var r=t.value;r.ptr?_n(r):console.warn("object already deleted: "+r.ptr)}})),Fn=function(n){Wn.unregister(n.$$)},(Un=function(n){return Wn.register(n,n.$$,n.$$),n})(n))}var Sn=void 0,xn=[];function On(){for(;xn.length;){var n=xn.pop();n.$$.deleteScheduled=!1,n.delete()}}function Mn(){}var In={};function Vn(n,t,r){if(void 0===n[t].overloadTable){var e=n[t];n[t]=function(){return n[t].overloadTable.hasOwnProperty(arguments.length)||Pn("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].overloadTable+")!"),n[t].overloadTable[arguments.length].apply(this,arguments)},n[t].overloadTable=[],n[t].overloadTable[e.argCount]=e}}function qn(n,t,r){o.hasOwnProperty(n)?((void 0===r||void 0!==o[n].overloadTable&&void 0!==o[n].overloadTable[r])&&Pn("Cannot register public name '"+n+"' twice"),Vn(o,n,n),o.hasOwnProperty(r)&&Pn("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),o[n].overloadTable[r]=t):(o[n]=t,void 0!==r&&(o[n].numArguments=r))}function Dn(n,t,r,e,i,o,u,a){this.name=n,this.constructor=t,this.instancePrototype=r,this.rawDestructor=e,this.baseClass=i,this.getActualType=o,this.upcast=u,this.downcast=a,this.pureVirtualFunctions=[]}function Rn(n,t,r){for(;t!==r;)t.upcast||Pn("Expected null or instance of "+r.name+", got an instance of "+t.name),n=t.upcast(n),t=t.baseClass;return n}function zn(n,t){return null===t?(this.isReference&&Pn("null is not a valid "+this.name),0):(t.$$||Pn('Cannot pass "'+ft(t)+'" as a '+this.name),t.$$.ptr||Pn("Cannot pass deleted object as a pointer of type "+this.name),Rn(t.$$.ptr,t.$$.ptrType.registeredClass,this.registeredClass))}function Bn(n,t){var r;if(null===t)return this.isReference&&Pn("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==n&&n.push(this.rawDestructor,r),r):0;if(t.$$||Pn('Cannot pass "'+ft(t)+'" as a '+this.name),t.$$.ptr||Pn("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&t.$$.ptrType.isConst&&Pn("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name),r=Rn(t.$$.ptr,t.$$.ptrType.registeredClass,this.registeredClass),this.isSmartPointer)switch(void 0===t.$$.smartPtr&&Pn("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:t.$$.smartPtrType===this?r=t.$$.smartPtr:Pn("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)r=t.$$.smartPtr;else{var e=t.clone();r=this.rawShare(r,ot((function(){e.delete()}))),null!==n&&n.push(this.rawDestructor,r)}break;default:Pn("Unsupporting sharing policy")}return r}function Gn(n,t){return null===t?(this.isReference&&Pn("null is not a valid "+this.name),0):(t.$$||Pn('Cannot pass "'+ft(t)+'" as a '+this.name),t.$$.ptr||Pn("Cannot pass deleted object as a pointer of type "+this.name),t.$$.ptrType.isConst&&Pn("Cannot convert argument of type "+t.$$.ptrType.name+" to parameter type "+this.name),Rn(t.$$.ptr,t.$$.ptrType.registeredClass,this.registeredClass))}function Hn(n,t,r){if(t===r)return n;if(void 0===r.baseClass)return null;var e=Hn(n,t,r.baseClass);return null===e?null:r.downcast(e)}var Jn={};function Ln(n,t){return t.ptrType&&t.ptr||wn("makeClassHandle requires ptr and ptrType"),!!t.smartPtrType!=!!t.smartPtr&&wn("Both smartPtrType and smartPtr must be specified"),t.count={value:1},Un(Object.create(n,{$$:{value:t}}))}function Nn(n,t,r,e,i,o,u,a,f,c,s){this.name=n,this.registeredClass=t,this.isReference=r,this.isConst=e,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=u,this.rawGetPointee=a,this.rawConstructor=f,this.rawShare=c,this.rawDestructor=s,i||void 0!==t.baseClass?this.toWireType=Bn:e?(this.toWireType=zn,this.destructorFunction=null):(this.toWireType=Gn,this.destructorFunction=null)}function Xn(n,t,r){o.hasOwnProperty(n)||wn("Replacing nonexistant public symbol"),void 0!==o[n].overloadTable&&void 0!==r?o[n].overloadTable[r]=t:(o[n]=t,o[n].argCount=r)}function Kn(n,t){n=$n(n);var r=function(n){var r=[t];return function(){r.length=arguments.length+1;for(var t=0;t<arguments.length;t++)r[t+1]=arguments[t];return n.apply(null,r)}}(o["dynCall_"+n]);return"function"!=typeof r&&Pn("unknown function pointer with signature "+n+": "+t),r}var Zn=void 0;function Qn(n){var t=jt(n),r=$n(t);return $t(t),r}function Yn(n,t){var r=[],e={};throw t.forEach((function n(t){e[t]||dn[t]||(pn[t]?pn[t].forEach(n):(r.push(t),e[t]=!0))})),new Zn(n+": "+r.map(Qn).join([", "]))}function nt(n,t){for(var r=[],e=0;e<n;e++)r.push(U[(t>>2)+e]);return r}function tt(n,t,r,e,i){var o=t.length;o<2&&Pn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=null!==t[1]&&null!==r,a=!1,f=1;f<t.length;++f)if(null!==t[f]&&void 0===t[f].destructorFunction){a=!0;break}var c="void"!==t[0].name,s=o-2,l=new Array(s),v=[],d=[];return function(){var r;arguments.length!==s&&Pn("function "+n+" called with "+arguments.length+" arguments, expected "+s+" args!"),d.length=0,v.length=u?2:1,v[0]=i,u&&(r=t[1].toWireType(d,this),v[1]=r);for(var o=0;o<s;++o)l[o]=t[o+2].toWireType(d,arguments[o]),v.push(l[o]);var f=e.apply(null,v);if(a)sn(d);else for(o=u?1:2;o<t.length;o++){var p=1===o?r:l[o-2];null!==t[o].destructorFunction&&t[o].destructorFunction(p)}if(c)return t[0].fromWireType(f)}}var rt=[],et=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function it(n){n>4&&0==--et[n].refcount&&(et[n]=void 0,rt.push(n))}function ot(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=rt.length?rt.pop():et.length;return et[t]={refcount:1,value:n},t}}function ut(n,t,r){switch(t){case 0:return function(n){return this.fromWireType((r?E:W)[n])};case 1:return function(n){return this.fromWireType((r?F:_)[n>>1])};case 2:return function(n){return this.fromWireType((r?U:S)[n>>2])};default:throw new TypeError("Unknown integer type: "+n)}}function at(n,t){var r=dn[n];return void 0===r&&Pn(t+" has unknown type "+Qn(n)),r}function ft(n){if(null===n)return"null";var t=typeof n;return"object"===t||"array"===t||"function"===t?n.toString():""+n}function ct(n,t){switch(t){case 2:return function(n){return this.fromWireType(x[n>>2])};case 3:return function(n){return this.fromWireType(O[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function st(n,t,r){switch(t){case 0:return r?function(n){return E[n]}:function(n){return W[n]};case 1:return r?function(n){return F[n>>1]}:function(n){return _[n>>1]};case 2:return r?function(n){return U[n>>2]}:function(n){return S[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function lt(n){return n||Pn("Cannot use deleted val. handle = "+n),et[n].value}var vt={};function dt(n){var t=vt[n];return void 0===t?$n(n):t}var pt=[];function ht(){if("object"==typeof globalThis)return globalThis;function t(n){n.nn=n;var t="object"==typeof $$$embind_global$$$&&n.nn===n;return t||delete n.nn,t}if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof n&&t(n)?$$$embind_global$$$=n:"object"==typeof self&&t(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}var yt={};function mt(n){try{return b.grow(n-C.byteLength+65535>>>16),G(b.buffer),1}catch(n){}}var bt={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var r=bt.buffers[n];0===t||10===t?((1===n?w:g)(P(r,0)),r.length=0):r.push(t)},varargs:void 0,get:function(){return bt.varargs+=4,U[bt.varargs-4>>2]},getStr:function(n){return k(n)},get64:function(n){return n}};bn=o.InternalError=mn(Error,"InternalError"),function(){for(var n=new Array(256),t=0;t<256;++t)n[t]=String.fromCharCode(t);Tn=n}(),jn=o.BindingError=mn(Error,"BindingError"),Mn.prototype.isAliasOf=function(n){if(!(this instanceof Mn))return!1;if(!(n instanceof Mn))return!1;for(var t=this.$$.ptrType.registeredClass,r=this.$$.ptr,e=n.$$.ptrType.registeredClass,i=n.$$.ptr;t.baseClass;)r=t.upcast(r),t=t.baseClass;for(;e.baseClass;)i=e.upcast(i),e=e.baseClass;return t===e&&r===i},Mn.prototype.clone=function(){if(this.$$.ptr||En(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var n=Un(Object.create(Object.getPrototypeOf(this),{$$:{value:Cn(this.$$)}}));return n.$$.count.value+=1,n.$$.deleteScheduled=!1,n},Mn.prototype.delete=function(){this.$$.ptr||En(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Pn("Object already scheduled for deletion"),Fn(this),_n(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},Mn.prototype.isDeleted=function(){return!this.$$.ptr},Mn.prototype.deleteLater=function(){return this.$$.ptr||En(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Pn("Object already scheduled for deletion"),xn.push(this),1===xn.length&&Sn&&Sn(On),this.$$.deleteScheduled=!0,this},Nn.prototype.getPointee=function(n){return this.rawGetPointee&&(n=this.rawGetPointee(n)),n},Nn.prototype.destructor=function(n){this.rawDestructor&&this.rawDestructor(n)},Nn.prototype.argPackAdvance=8,Nn.prototype.readValueFromPointer=ln,Nn.prototype.deleteObject=function(n){null!==n&&n.delete()},Nn.prototype.fromWireType=function(n){var t=this.getPointee(n);if(!t)return this.destructor(n),null;var r=function(n,t){return t=function(n,t){for(void 0===t&&Pn("ptr should not be undefined");n.baseClass;)t=n.upcast(t),n=n.baseClass;return t}(n,t),Jn[t]}(this.registeredClass,t);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=t,r.$$.smartPtr=n,r.clone();var e=r.clone();return this.destructor(n),e}function i(){return Ln(this.registeredClass.instancePrototype,this.isSmartPointer?{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:n}:{ptrType:this,ptr:n})}var o,u=this.registeredClass.getActualType(t),a=In[u];if(!a)return i.call(this);var f=Hn(t,this.registeredClass,(o=this.isConst?a.constPointerType:a.pointerType).registeredClass);return null===f?i.call(this):Ln(o.registeredClass.instancePrototype,this.isSmartPointer?{ptrType:o,ptr:f,smartPtrType:this,smartPtr:n}:{ptrType:o,ptr:f})},o.getInheritedInstanceCount=function(){return Object.keys(Jn).length},o.getLiveInheritedInstances=function(){var n=[];for(var t in Jn)Jn.hasOwnProperty(t)&&n.push(Jn[t]);return n},o.flushPendingDeletes=On,o.setDelayFunction=function(n){Sn=n,xn.length&&Sn&&Sn(On)},Zn=o.UnboundTypeError=mn(Error,"UnboundTypeError"),o.count_emval_handles=function(){for(var n=0,t=5;t<et.length;++t)void 0!==et[t]&&++n;return n},o.get_first_emval=function(){for(var n=5;n<et.length;++n)if(void 0!==et[n])return et[n];return null};var wt={u:function(n){var t=cn[n];delete cn[n];var r=t.rawConstructor,e=t.rawDestructor,i=t.fields;gn([n],i.map((function(n){return n.getterReturnType})).concat(i.map((function(n){return n.setterArgumentType}))),(function(n){var o={};return i.forEach((function(t,r){var e=n[r],u=t.getter,a=t.getterContext,f=n[r+i.length],c=t.setter,s=t.setterContext;o[t.fieldName]={read:function(n){return e.fromWireType(u(a,n))},write:function(n,t){var r=[];c(s,n,f.toWireType(r,t)),sn(r)}}})),[{name:t.name,fromWireType:function(n){var t={};for(var r in o)t[r]=o[r].read(n);return e(n),t},toWireType:function(n,t){for(var i in o)if(!(i in t))throw new TypeError('Missing field:  "'+i+'"');var u=r();for(i in o)o[i].write(u,t[i]);return null!==n&&n.push(e,u),u},argPackAdvance:8,readValueFromPointer:ln,destructorFunction:e}]}))},J:function(n,t,r,e,i){var o=An(r);kn(n,{name:t=$n(t),fromWireType:function(n){return!!n},toWireType:function(n,t){return t?e:i},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===r)e=E;else if(2===r)e=F;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+t);e=U}return this.fromWireType(e[n>>o])},destructorFunction:null})},y:function(n,t,r,e,i,o,u,a,f,c,s,l,v){s=$n(s),o=Kn(i,o),a&&(a=Kn(u,a)),c&&(c=Kn(f,c)),v=Kn(l,v);var d=hn(s);qn(d,(function(){Yn("Cannot construct "+s+" due to unbound types",[e])})),gn([n,t,r],e?[e]:[],(function(t){var r,i;t=t[0],i=e?(r=t.registeredClass).instancePrototype:Mn.prototype;var u=yn(d,(function(){if(Object.getPrototypeOf(this)!==f)throw new jn("Use 'new' to construct "+s);if(void 0===l.constructor_body)throw new jn(s+" has no accessible constructor");var n=l.constructor_body[arguments.length];if(void 0===n)throw new jn("Tried to invoke ctor of "+s+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(l.constructor_body).toString()+") parameters instead!");return n.apply(this,arguments)})),f=Object.create(i,{constructor:{value:u}});u.prototype=f;var l=new Dn(s,u,f,v,r,o,a,c),p=new Nn(s,l,!0,!1,!1),h=new Nn(s+"*",l,!1,!1,!1),y=new Nn(s+" const*",l,!1,!0,!1);return In[n]={pointerType:h,constPointerType:y},Xn(d,u),[p,h,y]}))},x:function(n,t,r,e,i,o){$(t>0);var u=nt(t,r);i=Kn(e,i);var a=[o],f=[];gn([],[n],(function(n){var r="constructor "+(n=n[0]).name;if(void 0===n.registeredClass.constructor_body&&(n.registeredClass.constructor_body=[]),void 0!==n.registeredClass.constructor_body[t-1])throw new jn("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.registeredClass.constructor_body[t-1]=function(){Yn("Cannot construct "+n.name+" due to unbound types",u)},gn([],u,(function(e){return n.registeredClass.constructor_body[t-1]=function(){arguments.length!==t-1&&Pn(r+" called with "+arguments.length+" arguments, expected "+(t-1)),f.length=0,a.length=t;for(var n=1;n<t;++n)a[n]=e[n].toWireType(f,arguments[n-1]);var o=i.apply(null,a);return sn(f),e[0].fromWireType(o)},[]})),[]}))},d:function(n,t,r,e,i,o,u,a){var f=nt(r,e);t=$n(t),o=Kn(i,o),gn([],[n],(function(n){var e=(n=n[0]).name+"."+t;function i(){Yn("Cannot call "+e+" due to unbound types",f)}a&&n.registeredClass.pureVirtualFunctions.push(t);var c=n.registeredClass.instancePrototype,s=c[t];return void 0===s||void 0===s.overloadTable&&s.className!==n.name&&s.argCount===r-2?(i.argCount=r-2,i.className=n.name,c[t]=i):(Vn(c,t,e),c[t].overloadTable[r-2]=i),gn([],f,(function(i){var a=tt(e,i,n,o,u);return void 0===c[t].overloadTable?(a.argCount=r-2,c[t]=a):c[t].overloadTable[r-2]=a,[]})),[]}))},k:function(n,t,r){n=$n(n),gn([],[t],(function(t){return o[n]=(t=t[0]).fromWireType(r),[]}))},I:function(n,t){kn(n,{name:t=$n(t),fromWireType:function(n){var t=et[n].value;return it(n),t},toWireType:function(n,t){return ot(t)},argPackAdvance:8,readValueFromPointer:ln,destructorFunction:null})},n:function(n,t,r,e){var i=An(r);function o(){}t=$n(t),o.values={},kn(n,{name:t,constructor:o,fromWireType:function(n){return this.constructor.values[n]},toWireType:function(n,t){return t.value},argPackAdvance:8,readValueFromPointer:ut(t,i,e),destructorFunction:null}),qn(t,o)},a:function(n,t,r){var e=at(n,"enum");t=$n(t);var i=e.constructor,o=Object.create(e.constructor.prototype,{value:{value:r},constructor:{value:yn(e.name+"_"+t,(function(){}))}});i.values[r]=o,i[t]=o},B:function(n,t,r){var e=An(r);kn(n,{name:t=$n(t),fromWireType:function(n){return n},toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+ft(t)+'" to '+this.name);return t},argPackAdvance:8,readValueFromPointer:ct(t,e),destructorFunction:null})},i:function(n,t,r,e,i,o){var u=nt(t,r);n=$n(n),i=Kn(e,i),qn(n,(function(){Yn("Cannot call "+n+" due to unbound types",u)}),t-1),gn([],u,(function(r){var e=[r[0],null].concat(r.slice(1));return Xn(n,tt(n,e,null,i,o),t-1),[]}))},j:function(n,t,r,e,i){t=$n(t),-1===i&&(i=4294967295);var o=An(r),u=function(n){return n};if(0===e){var a=32-8*r;u=function(n){return n<<a>>>a}}var f=-1!=t.indexOf("unsigned");kn(n,{name:t,fromWireType:u,toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+ft(r)+'" to '+this.name);if(r<e||r>i)throw new TypeError('Passing a number "'+ft(r)+'" from JS side to C/C++ side to an argument of type "'+t+'", which is outside the valid range ['+e+", "+i+"]!");return f?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:st(t,o,0!==e),destructorFunction:null})},h:function(n,t,r){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function i(n){var t=S[n>>=2];return new e(C,S[n+1],t)}kn(n,{name:r=$n(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},C:function(n,t){var r="std::string"===(t=$n(t));kn(n,{name:t,fromWireType:function(n){var t,e=S[n>>2];if(r)for(var i=n+4,o=0;o<=e;++o){var u=n+4+o;if(o==e||0==W[u]){var a=k(i,u-i);void 0===t?t=a:(t+=String.fromCharCode(0),t+=a),i=u+1}}else{var f=new Array(e);for(o=0;o<e;++o)f[o]=String.fromCharCode(W[n+4+o]);t=f.join("")}return $t(n),t},toWireType:function(n,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var e="string"==typeof t;e||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||Pn("Cannot pass non-string to std::string");var i=(r&&e?function(){return function(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++r)),e<=127?++t:t+=e<=2047?2:e<=65535?3:4}return t}(t)}:function(){return t.length})(),o=Tt(4+i+1);if(S[o>>2]=i,r&&e)!function(n,t,r){!function(n,t,r,e){if(!(e>0))return 0;for(var i=r+e-1,o=0;o<n.length;++o){var u=n.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++o)),u<=127){if(r>=i)break;t[r++]=u}else if(u<=2047){if(r+1>=i)break;t[r++]=192|u>>6,t[r++]=128|63&u}else if(u<=65535){if(r+2>=i)break;t[r++]=224|u>>12,t[r++]=128|u>>6&63,t[r++]=128|63&u}else{if(r+3>=i)break;t[r++]=240|u>>18,t[r++]=128|u>>12&63,t[r++]=128|u>>6&63,t[r++]=128|63&u}}t[r]=0}(n,W,t,r)}(t,o+4,i+1);else if(e)for(var u=0;u<i;++u){var a=t.charCodeAt(u);a>255&&($t(o),Pn("String has UTF-16 code units that do not fit in 8 bits")),W[o+4+u]=a}else for(u=0;u<i;++u)W[o+4+u]=t[u];return null!==n&&n.push($t,o),o},argPackAdvance:8,readValueFromPointer:ln,destructorFunction:function(n){$t(n)}})},w:function(n,t,r){var e,i,o,u,a;r=$n(r),2===t?(e=I,i=V,u=q,o=function(){return _},a=1):4===t&&(e=D,i=R,u=z,o=function(){return S},a=2),kn(n,{name:r,fromWireType:function(n){for(var r,i=S[n>>2],u=o(),f=n+4,c=0;c<=i;++c){var s=n+4+c*t;if(c==i||0==u[s>>a]){var l=e(f,s-f);void 0===r?r=l:(r+=String.fromCharCode(0),r+=l),f=s+t}}return $t(n),r},toWireType:function(n,e){"string"!=typeof e&&Pn("Cannot pass non-string to C++ string type "+r);var o=u(e),f=Tt(4+o+t);return S[f>>2]=o>>a,i(e,f+4,o+t),null!==n&&n.push($t,f),f},argPackAdvance:8,readValueFromPointer:ln,destructorFunction:function(n){$t(n)}})},v:function(n,t,r,e,i,o){cn[n]={name:$n(t),rawConstructor:Kn(r,e),rawDestructor:Kn(i,o),fields:[]}},c:function(n,t,r,e,i,o,u,a,f,c){cn[n].fields.push({fieldName:$n(t),getterReturnType:r,getter:Kn(e,i),getterContext:o,setterArgumentType:u,setter:Kn(a,f),setterContext:c})},K:function(n,t){kn(n,{isVoid:!0,name:t=$n(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},m:function(n,t,r){n=lt(n),t=at(t,"emval::as");var e=[],i=ot(e);return U[r>>2]=i,t.toWireType(e,n)},s:function(n,t,r,e){(n=pt[n])(t=lt(t),r=dt(r),null,e)},b:it,z:function(n){return 0===n?ot(ht()):(n=dt(n),ot(ht()[n]))},t:function(n,t){var r=function(n,t){for(var r=new Array(n),e=0;e<n;++e)r[e]=at(U[(t>>2)+e],"parameter "+e);return r}(n,t),e=r[0],i=new Array(n-1);return function(n){var t=pt.length;return pt.push(n),t}((function(t,o,u,a){for(var f=0,c=0;c<n-1;++c)i[c]=r[c+1].readValueFromPointer(a+f),f+=r[c+1].argPackAdvance;var s=t[o].apply(t,i);for(c=0;c<n-1;++c)r[c+1].deleteObject&&r[c+1].deleteObject(i[c]);if(!e.isVoid)return e.toWireType(u,s)}))},r:function(n){return n=dt(n),ot(o[n])},e:function(n,t){return ot((n=lt(n))[t=lt(t)])},g:function(n){n>4&&(et[n].refcount+=1)},q:function(n,t,r,e){n=lt(n);var i=yt[t];return i||(i=function(n){var t=new Array(n+1);return function(r,e,i){t[0]=r;for(var o=0;o<n;++o){var u=at(U[(e>>2)+o],"parameter "+o);t[o+1]=u.readValueFromPointer(i),i+=u.argPackAdvance}return ot(new(r.bind.apply(r,t)))}}(t),yt[t]=i),i(n,r,e)},f:function(n){return ot(dt(n))},l:function(n){sn(et[n].value),it(n)},p:function(){tn()},F:function(n,t,r){W.copyWithin(n,t,t+r)},G:function(n){var t=W.length,r=2147483648;if((n>>>=0)>r)return!1;for(var e=1;e<=4;e*=2){var i=t*(1+.2/e);if(i=Math.min(i,n+100663296),mt(Math.min(r,B(Math.max(16777216,n,i),65536))))return!0}return!1},H:function(){return 0},D:function(){},A:function(n,t,r,e){for(var i=0,o=0;o<r;o++){for(var u=U[t+8*o>>2],a=U[t+(8*o+4)>>2],f=0;f<a;f++)bt.printChar(n,W[u+f]);i+=a}return U[e>>2]=i,0},memory:b,o:function(n){return(n=+n)>=0?+Q(n+.5):+Z(n-.5)},E:function(){},table:A};!function(){var n={a:wt};function t(n){o.asm=n.exports,function(){if(Y--,o.monitorRunDependencies&&o.monitorRunDependencies(Y),0==Y&&nn){var n=nn;nn=null,n()}}()}function r(n){t(n.instance)}function e(t){return(m||!a&&!f||"function"!=typeof fetch||on(an)?new Promise((function(n){n(fn())})):fetch(an,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+an+"'";return n.arrayBuffer()})).catch((function(){return fn()}))).then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){g("failed to asynchronously prepare wasm: "+n),tn(n)}))}if(Y++,o.monitorRunDependencies&&o.monitorRunDependencies(Y),o.instantiateWasm)try{return o.instantiateWasm(n,t)}catch(n){return g("Module.instantiateWasm callback failed with error: "+n),!1}!function(){if(m||"function"!=typeof WebAssembly.instantiateStreaming||en(an)||on(an)||"function"!=typeof fetch)return e(r);fetch(an,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(r,(function(n){return g("wasm streaming compile failed: "+n),g("falling back to ArrayBuffer instantiation"),e(r)}))}))}()}();var gt,At=o.___wasm_call_ctors=function(){return(At=o.___wasm_call_ctors=o.asm.L).apply(null,arguments)},Tt=o._malloc=function(){return(Tt=o._malloc=o.asm.M).apply(null,arguments)},$t=o._free=function(){return($t=o._free=o.asm.N).apply(null,arguments)},jt=o.___getTypeName=function(){return(jt=o.___getTypeName=o.asm.O).apply(null,arguments)};function Pt(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function kt(){function n(){gt||(gt=!0,o.calledRun=!0,T||(J(N),J(X),e(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)n=o.postRun.shift(),K.unshift(n);var n;J(K)}()))}Y>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)n=o.preRun.shift(),L.unshift(n);var n;J(L)}(),Y>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),n()}),1)):n()))}if(o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.P).apply(null,arguments)},o.dynCall_viii=function(){return(o.dynCall_viii=o.asm.Q).apply(null,arguments)},o.dynCall_vi=function(){return(o.dynCall_vi=o.asm.R).apply(null,arguments)},o.dynCall_v=function(){return(o.dynCall_v=o.asm.S).apply(null,arguments)},o.dynCall_i=function(){return(o.dynCall_i=o.asm.T).apply(null,arguments)},o.dynCall_iii=function(){return(o.dynCall_iii=o.asm.U).apply(null,arguments)},o.dynCall_ii=function(){return(o.dynCall_ii=o.asm.V).apply(null,arguments)},o.dynCall_vii=function(){return(o.dynCall_vii=o.asm.W).apply(null,arguments)},o.dynCall_iiii=function(){return(o.dynCall_iiii=o.asm.X).apply(null,arguments)},o.dynCall_iiiii=function(){return(o.dynCall_iiiii=o.asm.Y).apply(null,arguments)},o.dynCall_iiiiii=function(){return(o.dynCall_iiiiii=o.asm.Z).apply(null,arguments)},o.dynCall_iiiiiiii=function(){return(o.dynCall_iiiiiiii=o.asm._).apply(null,arguments)},o.dynCall_iiiiiiiii=function(){return(o.dynCall_iiiiiiiii=o.asm.$).apply(null,arguments)},o.dynCall_viiii=function(){return(o.dynCall_viiii=o.asm.aa).apply(null,arguments)},o.dynCall_iiiiiii=function(){return(o.dynCall_iiiiiii=o.asm.ba).apply(null,arguments)},o.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(o.dynCall_iiiiiiiiiiiiiiiiiiii=o.asm.ca).apply(null,arguments)},o.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(o.dynCall_iiiiiiiiiiiiiiiiiiiii=o.asm.da).apply(null,arguments)},o.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(o.dynCall_iiiiiiiiiiiiiiiiiii=o.asm.ea).apply(null,arguments)},o.dynCall_viiiii=function(){return(o.dynCall_viiiii=o.asm.fa).apply(null,arguments)},o.dynCall_iiiiiiiiii=function(){return(o.dynCall_iiiiiiiiii=o.asm.ga).apply(null,arguments)},o.dynCall_iiiiiiiiiii=function(){return(o.dynCall_iiiiiiiiiii=o.asm.ha).apply(null,arguments)},o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.ia).apply(null,arguments)},o.dynCall_viiiiii=function(){return(o.dynCall_viiiiii=o.asm.ja).apply(null,arguments)},nn=function n(){gt||kt(),gt||(nn=n)},o.run=kt,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return kt(),r.ready},e.exports=r;const i=Object.freeze(function(n,t){for(var r=0;r<t.length;r++){const e=t[r];if("string"!=typeof e&&!Array.isArray(e))for(const t in e)if("default"!==t&&!(t in n)){const r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return Object.freeze(n)}({__proto__:null,default:e.exports},[e.exports]));export{i as b}