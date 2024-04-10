/*!
 * Dynamsoft JavaScript Library
 * @product Dynamsoft License JS Edition
 * @website https://www.dynamsoft.com
 * @copyright Copyright 2024, Dynamsoft Corporation
 * @author Dynamsoft
 * @version 3.2.10
 * @fileoverview Dynamsoft JavaScript Library for Core
 * More info DL JS: https://www.dynamsoft.com/capture-vision/docs/web/programming/javascript/api-reference/license/license-module.html
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("dynamsoft-core")):"function"==typeof define&&define.amd?define(["exports","dynamsoft-core"],t):t(((e="undefined"!=typeof globalThis?globalThis:e||self).Dynamsoft=e.Dynamsoft||{},e.Dynamsoft.License={}),e.Dynamsoft.Core)}(this,(function(e,t){"use strict";const s="undefined"==typeof self,r=s?{}:self,n=(()=>{if(!s&&document.currentScript){let e=document.currentScript.src,t=e.indexOf("?");if(-1!=t)e=e.substring(0,t);else{let t=e.indexOf("#");-1!=t&&(e=e.substring(0,t))}return e.substring(0,e.lastIndexOf("/")+1)}return"./"})(),i=e=>{if(null==e&&(e="./"),s);else{let t=document.createElement("a");t.href=e,e=t.href}return e.endsWith("/")||(e+="/"),e},o=e=>e&&"object"==typeof e&&"function"==typeof e.then;class a extends Promise{constructor(e){let t,s;super(((e,r)=>{t=e,s=r})),this._s="pending",this.resolve=e=>{this.isPending&&(o(e)?this.task=e:(this._s="fulfilled",t(e)))},this.reject=e=>{this.isPending&&(this._s="rejected",s(e))},this.task=e}get status(){return this._s}get isPending(){return"pending"===this._s}get isFulfilled(){return"fulfilled"===this._s}get isRejected(){return"rejected"===this._s}get task(){return this._task}set task(e){let t;this._task=e,o(e)?t=e:"function"==typeof e&&(t=new Promise(e)),t&&(async()=>{try{const s=await t;e===this._task&&this.resolve(s)}catch(t){e===this._task&&this.reject(t)}})()}get isEmpty(){return null==this._task}}const c=" is not allowed to change after `createInstance` or `loadWasm` is called.",l=!s&&document.currentScript&&(document.currentScript.getAttribute("data-license")||document.currentScript.getAttribute("data-productKeys")||document.currentScript.getAttribute("data-licenseKey")||document.currentScript.getAttribute("data-handshakeCode")||document.currentScript.getAttribute("data-organizationID"))||"",d=(e,t)=>{const s=e;if(!s._pLoad.isEmpty)throw new Error("`license`"+c);s._license=t};!s&&document.currentScript&&document.currentScript.getAttribute("data-sessionPassword");const u=e=>{if(null==e)e=[];else{e=e instanceof Array?[...e]:[e];for(let t=0;t<e.length;++t){if(!s){let s=document.createElement("a");s.href=e[t],e[t]=s.href}e[t].endsWith("/")||(e[t]+="/")}}return e},f=(e,t)=>{const s=e;if(!s._pLoad.isEmpty)throw new Error("`licenseServer`"+c);s._licenseServer=u(t)},h=(e,t)=>{const s=e;if(!s._pLoad.isEmpty)throw new Error("`deviceFriendlyName`"+c);s._deviceFriendlyName=t||""};let g,m,p,y,w;"undefined"!=typeof navigator&&(g=navigator,m=g.userAgent,p=g.platform,y=g.mediaDevices),function(){if(!s){const e={Edge:{search:"Edg",verSearch:"Edg"},OPR:null,Chrome:null,Safari:{str:g.vendor,search:"Apple",verSearch:["Version","iPhone OS","CPU OS"]},Firefox:null,Explorer:{search:"MSIE",verSearch:"MSIE"}},t={HarmonyOS:null,Android:null,iPhone:null,iPad:null,Windows:{str:p,search:"Win"},Mac:{str:p},Linux:{str:p}};let s="unknownBrowser",r=0,n="unknownOS";for(let t in e){const n=e[t]||{};let i=n.str||m,o=n.search||t,a=n.verStr||m,c=n.verSearch||t;if(c instanceof Array||(c=[c]),-1!=i.indexOf(o)){s=t;for(let e of c){let t=a.indexOf(e);if(-1!=t){r=parseFloat(a.substring(t+e.length+1));break}}break}}for(let e in t){const s=t[e]||{};let r=s.str||m,i=s.search||e;if(-1!=r.indexOf(i)){n=e;break}}"Linux"==n&&-1!=m.indexOf("Windows NT")&&(n="HarmonyOS"),w={browser:s,version:r,OS:n}}s&&(w={browser:"ssr",version:0,OS:"ssr"})}(),"undefined"!=typeof WebAssembly&&m&&(!/Safari/.test(m)||/Chrome/.test(m)||/\(.+\s11_2_([2-6]).*\)/.test(m)),y&&y.getUserMedia,"Chrome"===w.browser&&w.version>66||"Safari"===w.browser&&w.version>13||"OPR"===w.browser&&w.version>43||"Edge"===w.browser&&w.version;const k=async()=>(t.loadWasm("license"),t.doOrWaitAsyncDependency("dynamsoft_inited",(async()=>{let{lt:e,l:s,ls:n,sp:o,rmk:l,cv:d}=((e,t=!1)=>{const s=e;if(s._pLoad.isEmpty){let e,n,i,o=s._license||"",a=JSON.parse(JSON.stringify(s._licenseServer)),c=s._sessionPassword,l=0;if(o.startsWith("t")||o.startsWith("f"))l=0;else if(0===o.length||o.startsWith("P")||o.startsWith("L")||o.startsWith("Y")||o.startsWith("A"))l=1;else{l=2;const t=o.indexOf(":");-1!=t&&(o=o.substring(t+1));const s=o.indexOf("?");if(-1!=s&&(n=o.substring(s+1),o=o.substring(0,s)),o.startsWith("DLC2"))l=0;else{if(o.startsWith("DLS2")){let t;try{let e=o.substring(4);e=atob(e),t=JSON.parse(e)}catch(e){throw new Error("Format Error: The license string you specified is invalid, please check to make sure it is correct.")}if(o=t.handshakeCode?t.handshakeCode:t.organizationID?t.organizationID:"","number"==typeof o&&(o=JSON.stringify(o)),0===a.length){let e=[];t.mainServerURL&&(e[0]=t.mainServerURL),t.standbyServerURL&&(e[1]=t.standbyServerURL),a=u(e)}!c&&t.sessionPassword&&(c=t.sessionPassword),e=t.remark}o&&"200001"!==o&&!o.startsWith("200001-")||(l=1)}}if(l&&(t||(r.crypto||(i="Please upgrade your browser to support online key."),r.crypto.subtle||(i="Require https to use online key in this browser."))),i){if(1!==l)throw new Error(i);l=0,console.warn(i),s._lastErrorCode=-1,s._lastErrorString=i}return 1===l&&(o="",console.warn("Applying for a public trial license ...")),{lt:l,l:o,ls:a,sp:c,rmk:e,cv:n}}throw new Error("Can't preprocess license again"+c)})(b),f=new a;b._pLoad.task=f,(async()=>{try{await b._pLoad}catch(e){}})();let h=t.getNextTaskID();t.mapTaskCallBack[h]=s=>{if(s.message&&b._onAuthMessage){let e=b._onAuthMessage(s.message);null!=e&&(s.message=e)}let r,n=!1;if(1===e&&(n=!0),s.success?(t.onLog&&t.onLog("init license success"),s.message&&console.warn(s.message),t.CoreModule._bSupportIRTModule=s.bSupportIRTModule,t.CoreModule._bSupportDce4Module=s.bSupportDce4Module,b.bPassValidation=!0):(r=Error(s.message),s.stack&&(r.stack=s.stack),s.ltsErrorCode&&(r.ltsErrorCode=s.ltsErrorCode),n||111==s.ltsErrorCode&&-1!=s.message.toLowerCase().indexOf("trial license")&&(n=!0)),n){let e=t.engineResourcePaths.license;t.engineResourcePaths.rootDirectory&&(e=t.engineResourcePaths.rootDirectory+"/"+e),e=i(e),(async(e,t,s)=>{if(!e._bNeverShowDialog)try{let r=await fetch(e.engineResourcePath+"dls.license.dialog.html");if(!r.ok)throw Error("Get license dialog fail. Network Error: "+r.statusText);let n=await r.text();if(!n.trim().startsWith("<"))throw Error("Get license dialog fail. Can't get valid HTMLElement.");let i=document.createElement("div");i.innerHTML=n;let o=[];for(let e=0;e<i.childElementCount;++e){let t=i.children[e];t instanceof HTMLStyleElement&&(o.push(t),document.head.append(t))}let a=1==i.childElementCount?i.children[0]:i;a.remove();let c,l,d,u,f,h=[a],g=a.children;for(let e of g)h.push(e);for(let e=0;e<h.length;++e)for(let t of h[e].children)h.push(t);for(let e of h)if(!c&&e.classList.contains("dls-license-mask"))c=e,e.addEventListener("click",(t=>{if(e==t.target){a.remove();for(let e of o)e.remove()}}));else if(!l&&e.classList.contains("dls-license-icon-close"))l=e,e.addEventListener("click",(()=>{a.remove();for(let e of o)e.remove()}));else if(!d&&e.classList.contains("dls-license-icon-error"))d=e,"error"!=t&&e.remove();else if(!u&&e.classList.contains("dls-license-icon-warn"))u=e,"warn"!=t&&e.remove();else if(!f&&e.classList.contains("dls-license-msg-content")){f=e;let t=s;for(;t;){let s=t.indexOf("["),r=t.indexOf("]",s),n=t.indexOf("(",r),i=t.indexOf(")",n);if(-1==s||-1==r||-1==n||-1==i){e.appendChild(new Text(t));break}s>0&&e.appendChild(new Text(t.substring(0,s)));let o=document.createElement("a"),a=t.substring(s+1,r);o.innerText=a;let c=t.substring(n+1,i);o.setAttribute("href",c),o.setAttribute("target","_blank"),e.appendChild(o),t=t.substring(i+1)}}document.body.appendChild(a)}catch(t){e._onLog&&e._onLog(t.message||t)}})({_bNeverShowDialog:b._bNeverShowDialog,engineResourcePath:e,_onLog:t.onLog},s.success?"warn":"error",s.message)}s.success?f.resolve(void 0):f.reject(r)},await t.waitAsyncDependency("worker"),t.worker.postMessage({type:"dynamsoft",body:{v:"3.2.10",brtk:!!e,bptk:1===e,l:s,os:w,fn:b.deviceFriendlyName,ls:n,sp:o,rmk:l,cv:d},id:h}),b.bCallInitLicense=!0,await f})));let v;t.mapPackageRegister.license={},t.mapPackageRegister.license.dynamsoft=k,t.mapPackageRegister.license.getAR=async()=>{{let e=t.mapAsyncDependency.dynamsoft_inited;e&&e.isRejected&&await e}return t.worker?new Promise(((e,s)=>{let r=t.getNextTaskID();t.mapTaskCallBack[r]=async t=>{if(t.success){delete t.success;{let e=b.license;e&&(e.startsWith("t")||e.startsWith("f"))&&(t.pk=e)}if(Object.keys(t).length){if(t.lem){let e=Error(t.lem);e.ltsErrorCode=t.lec,delete t.lem,delete t.lec,t.ae=e}e(t)}else e(null)}else{let e=Error(t.message);t.stack&&(e.stack=t.stack),s(e)}},t.worker.postMessage({type:"getAR",id:r})})):null};class b{static setLicenseServer(e){f(b,e)}static get license(){return this._license}static set license(e){d(b,e)}static get licenseServer(){return this._licenseServer}static set licenseServer(e){f(b,e)}static get deviceFriendlyName(){return this._deviceFriendlyName}static set deviceFriendlyName(e){h(b,e)}static initLicense(e,t){if(d(b,e),b.bCallInitLicense=!0,t)return k()}static setDeviceFriendlyName(e){h(b,e)}static getDeviceFriendlyName(){return b._deviceFriendlyName}static getDeviceUUID(){return(async()=>(await t.doOrWaitAsyncDependency("dynamsoft_uuid",(async()=>{await t.loadWasm();let e=new a,s=t.getNextTaskID();t.mapTaskCallBack[s]=t=>{if(t.success)e.resolve(t.uuid);else{const s=Error(t.message);t.stack&&(s.stack=t.stack),e.reject(s)}},t.worker.postMessage({type:"getDeviceUUID",id:s}),v=await e})),v))()}}b._pLoad=new a,b.bPassValidation=!1,b.bCallInitLicense=!1,b._license=l,b._licenseServer=[],b._deviceFriendlyName="",null==t.engineResourcePaths.license&&(t.engineResourcePaths.license=n),t.workerAutoResources.license={wasm:!0},t.mapPackageRegister.license.LicenseManager=b;const S="1.2.0";"string"!=typeof t.engineResourcePaths.std&&t.compareVersion(t.engineResourcePaths.std.version,S)<0&&(t.engineResourcePaths.std={version:S,path:i(n+`../../dynamsoft-capture-vision-std@${S}/dist/`)});e.LicenseManager=b,e.LicenseModule=class{static getVersion(){return`3.2.10(Worker: ${t.innerVersions.license&&t.innerVersions.license.worker||"Not Loaded"}, Wasm: ${t.innerVersions.license&&t.innerVersions.license.wasm||"Not Loaded"})`}},Object.defineProperty(e,"__esModule",{value:!0})}));
