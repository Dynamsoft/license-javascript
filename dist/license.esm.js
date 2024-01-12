/*!
 * Dynamsoft JavaScript Library
 * @product Dynamsoft License JS Edition
 * @website https://www.dynamsoft.com
 * @copyright Copyright 2024, Dynamsoft Corporation
 * @author Dynamsoft
 * @version 3.0.20
 * @fileoverview Dynamsoft JavaScript Library for Core
 * More info DL JS: https://www.dynamsoft.com/capture-vision/docs/web/programming/javascript/api-reference/license/license-module.html
 */
import{mapPackageRegister as e,loadWasm as t,newAsyncDependency as s,getNextTaskID as r,mapTaskCallBack as i,onLog as n,CoreModule as o,engineResourcePaths as a,worker as c,workerAutoResources as l,compareVersion as d,innerVersions as u}from"dynamsoft-core";const f="undefined"==typeof self,h=f?{}:self,g=(()=>{if(!f&&document.currentScript){let e=document.currentScript.src,t=e.indexOf("?");if(-1!=t)e=e.substring(0,t);else{let t=e.indexOf("#");-1!=t&&(e=e.substring(0,t))}return e.substring(0,e.lastIndexOf("/")+1)}return"./"})(),m=e=>e&&"object"==typeof e&&"function"==typeof e.then;const p=" is not allowed to change after `createInstance` or `loadWasm` is called.",v=!f&&document.currentScript&&(document.currentScript.getAttribute("data-license")||document.currentScript.getAttribute("data-productKeys")||document.currentScript.getAttribute("data-licenseKey")||document.currentScript.getAttribute("data-handshakeCode")||document.currentScript.getAttribute("data-organizationID"))||"",y=(e,t)=>{const s=e;if(!s._pLoad.isEmpty)throw new Error("`license`"+p);s._license=t};!f&&document.currentScript&&document.currentScript.getAttribute("data-sessionPassword");const b=e=>{if(null==e)e=[];else{e=e instanceof Array?[...e]:[e];for(let t=0;t<e.length;++t){if(!f){let s=document.createElement("a");s.href=e[t],e[t]=s.href}e[t].endsWith("/")||(e[t]+="/")}}return e},w=(e,t)=>{const s=e;if(!s._pLoad.isEmpty)throw new Error("`licenseServer`"+p);s._licenseServer=b(t)},S=(e,t)=>{const s=e;if(!s._pLoad.isEmpty)throw new Error("`deviceFriendlyName`"+p);s._deviceFriendlyName=t||""};let k,_,E,L,O,x,C;"undefined"!=typeof navigator&&(k=navigator,_=k.userAgent,E=k.platform,L=k.mediaDevices),function(){if(!f){const e={Edge:{search:"Edg",verSearch:"Edg"},OPR:null,Chrome:null,Safari:{str:k.vendor,search:"Apple",verSearch:["Version","iPhone OS","CPU OS"]},Firefox:null,Explorer:{search:"MSIE",verSearch:"MSIE"}},t={HarmonyOS:null,Android:null,iPhone:null,iPad:null,Windows:{str:E,search:"Win"},Mac:{str:E},Linux:{str:E}};let s="unknownBrowser",r=0,i="unknownOS";for(let t in e){const i=e[t]||{};let n=i.str||_,o=i.search||t,a=i.verStr||_,c=i.verSearch||t;if(c instanceof Array||(c=[c]),-1!=n.indexOf(o)){s=t;for(let e of c){let t=a.indexOf(e);if(-1!=t){r=parseFloat(a.substring(t+e.length+1));break}}break}}for(let e in t){const s=t[e]||{};let r=s.str||_,n=s.search||e;if(-1!=r.indexOf(n)){i=e;break}}"Linux"==i&&-1!=_.indexOf("Windows NT")&&(i="HarmonyOS"),O={browser:s,version:r,OS:i}}f&&(O={browser:"ssr",version:0,OS:"ssr"})}(),"undefined"!=typeof WebAssembly&&_&&(!/Safari/.test(_)||/Chrome/.test(_)||/\(.+\s11_2_([2-6]).*\)/.test(_)),L&&L.getUserMedia,"Chrome"===O.browser&&O.version>66||"Safari"===O.browser&&O.version>13||"OPR"===O.browser&&O.version>43||"Edge"===O.browser&&O.version;const W=async()=>{await t("license");const{p:e,justWait:l}=s("dynamsoft_inited");if(l)return e;try{let{lt:t,l:s,ls:l,sp:d,rmk:u,cv:g}=((e,t=!1)=>{const s=e;if(s._pLoad.isEmpty){let e,r,i,n=s._license||"",o=JSON.parse(JSON.stringify(s._licenseServer)),a=s._sessionPassword,c=0;if(n.startsWith("t")||n.startsWith("f"))c=0;else if(0===n.length||n.startsWith("P")||n.startsWith("L")||n.startsWith("Y")||n.startsWith("A"))c=1;else{c=2;const t=n.indexOf(":");-1!=t&&(n=n.substring(t+1));const s=n.indexOf("?");if(-1!=s&&(r=n.substring(s+1),n=n.substring(0,s)),n.startsWith("DLC2"))c=0;else{if(n.startsWith("DLS2")){let t;try{let e=n.substring(4);e=atob(e),t=JSON.parse(e)}catch(e){throw new Error("Format Error: The license string you specified is invalid, please check to make sure it is correct.")}if(n=t.handshakeCode?t.handshakeCode:t.organizationID?t.organizationID:"","number"==typeof n&&(n=JSON.stringify(n)),0===o.length){let e=[];t.mainServerURL&&(e[0]=t.mainServerURL),t.standbyServerURL&&(e[1]=t.standbyServerURL),o=b(e)}!a&&t.sessionPassword&&(a=t.sessionPassword),e=t.remark}("200001"===n||n.startsWith("200001-"))&&(o&&o.length||(n="")),n||(c=1)}}if(c&&(t||(h.crypto||(i="Please upgrade your browser to support online key."),h.crypto.subtle||(i="Require https to use online key in this browser."))),i){if(1!==c)throw new Error(i);c=0,console.warn(i),s._lastErrorCode=-1,s._lastErrorString=i}return 1===c&&(n="",console.warn("Applying for a public trial license ...")),{lt:c,l:n,ls:o,sp:a,rmk:e,cv:r}}throw new Error("Can't preprocess license again"+p)})(P);P._pLoad.task=e;let m=r();return i[m]=s=>{if(s.message&&P._onAuthMessage){let e=P._onAuthMessage(s.message);null!=e&&(s.message=e)}let r=!1;if(1===t&&(r=!0),s.success?(n&&n("init license success"),s.message&&console.warn(s.message),o._bSupportIRTModule=s.bSupportIRTModule,o._bSupportDce4Module=s.bSupportDce4Module,P.bPassValidation=!0):(C=Error(s.message),s.stack&&(C.stack=s.stack),r||111==s.ltsErrorCode&&-1!=s.message.toLowerCase().indexOf("trial license")&&(r=!0)),r){let e=a.license;a.rootDirectory&&(e=a.rootDirectory+"/"+e),e=(e=>{if(null==e&&(e="./"),f);else{let t=document.createElement("a");t.href=e,e=t.href}return e.endsWith("/")||(e+="/"),e})(e),(async(e,t,s)=>{if(!e._bNeverShowDialog)try{let r=await fetch(e.engineResourcePath+"dls.license.dialog.html");if(!r.ok)throw Error("Get license dialog fail. Network Error: "+r.statusText);let i=await r.text();if(!i.trim().startsWith("<"))throw Error("Get license dialog fail. Can't get valid HTMLElement.");let n=document.createElement("div");n.innerHTML=i;let o=[];for(let e=0;e<n.childElementCount;++e){let t=n.children[e];t instanceof HTMLStyleElement&&(o.push(t),document.head.append(t))}let a=1==n.childElementCount?n.children[0]:n;a.remove();let c,l,d,u,f,h=[a],g=a.children;for(let e of g)h.push(e);for(let e=0;e<h.length;++e)for(let t of h[e].children)h.push(t);for(let e of h)if(!c&&e.classList.contains("dls-license-mask"))c=e,e.addEventListener("click",(t=>{if(e==t.target){a.remove();for(let e of o)e.remove()}}));else if(!l&&e.classList.contains("dls-license-icon-close"))l=e,e.addEventListener("click",(()=>{a.remove();for(let e of o)e.remove()}));else if(!d&&e.classList.contains("dls-license-icon-error"))d=e,"error"!=t&&e.remove();else if(!u&&e.classList.contains("dls-license-icon-warn"))u=e,"warn"!=t&&e.remove();else if(!f&&e.classList.contains("dls-license-msg-content")){f=e;let t=s;for(;t;){let s=t.indexOf("["),r=t.indexOf("]",s),i=t.indexOf("(",r),n=t.indexOf(")",i);if(-1==s||-1==r||-1==i||-1==n){e.appendChild(new Text(t));break}s>0&&e.appendChild(new Text(t.substring(0,s)));let o=document.createElement("a"),a=t.substring(s+1,r);o.innerText=a;let c=t.substring(i+1,n);o.setAttribute("href",c),o.setAttribute("target","_blank"),e.appendChild(o),t=t.substring(n+1)}}document.body.appendChild(a)}catch(t){e._onLog&&e._onLog(t.message||t)}})({_bNeverShowDialog:P._bNeverShowDialog,engineResourcePath:e,_onLog:n},s.success?"warn":"error",s.message)}s.success?e.resolve(void 0):e.reject(C)},s&&(s.startsWith("t")||s.startsWith("f"))&&(x=s),c.postMessage({type:"dynamsoft",body:{v:"3.0.20",brtk:!!t,bptk:1===t,l:s,os:O,fn:P.deviceFriendlyName,ls:l,sp:d,rmk:u,cv:g},id:m}),P.bCallInitLicense=!0,e}catch(t){throw C=t,e.reject(t),t}};e.license={},e.license.dynamsoft=W,e.license.getAR=async()=>{if(C)throw C;return c?new Promise(((e,t)=>{let s=r();i[s]=async s=>{if(s.success)if(delete s.success,x&&(s.pk=x),Object.keys(s).length){if(s.lem){let e=Error(s.lem);e.ltsErrorCode=s.lec,delete s.lem,delete s.lec,s.ae=e}e(s)}else e(null);else{let e=Error(s.message);s.stack&&(e.stack=s.stack),t(e)}},c.postMessage({type:"getAR",id:s})})):null};class P{static setLicenseServer(e){w(P,e)}static get license(){return this._license}static set license(e){y(P,e)}static get licenseServer(){return this._licenseServer}static set licenseServer(e){w(P,e)}static get deviceFriendlyName(){return this._deviceFriendlyName}static set deviceFriendlyName(e){S(P,e)}static initLicense(e,t){if(y(P,e),P.bCallInitLicense=!0,t)return(async()=>{try{await W()}catch(e){return{isSuccess:!1,error:e.message||e}}return{isSuccess:!0,error:"Successful."}})()}static setDeviceFriendlyName(e){S(P,e)}static getDeviceFriendlyName(){return P._deviceFriendlyName}static getDeviceUUID(){return(async()=>{const{p:e,justWait:n}=s("license_uuid");if(n)return e;await t();let o=r();return i[o]=t=>{if(t.success)e.resolve(t.uuid);else{const s=Error(t.message);t.stack&&(s.stack=t.stack),e.reject(s)}},c.postMessage({type:"getDeviceUUID",id:o}),e})()}}if(P._pLoad=new class extends Promise{constructor(e){let t,s;super(((e,r)=>{t=e,s=r})),this._s="pending",this.resolve=e=>{this.isPending&&(m(e)?this.task=e:(this._s="fulfilled",t(e)))},this.reject=e=>{this.isPending&&(this._s="rejected",s(e))},this.task=e}get status(){return this._s}get isPending(){return"pending"===this._s}get isFulfilled(){return"fulfilled"===this._s}get isRejected(){return"rejected"===this._s}get task(){return this._task}set task(e){let t;this._task=e,m(e)?t=e:"function"==typeof e&&(t=new Promise(e)),t&&(async()=>{try{const s=await t;e===this._task&&this.resolve(s)}catch(t){e===this._task&&this.reject(t)}})()}get isEmpty(){return null==this._task}},P.bPassValidation=!1,P.bCallInitLicense=!1,P._license=v,P._licenseServer=[],P._deviceFriendlyName="",null==a.license&&(a.license=g),l.license={wasm:!0},e.license.LicenseManager=P,a.std.version&&d(a.std.version,"1.0.0")<0){const e="1.0.0";a.std.version=e,a.std.path=g+`../../dynamsoft-capture-vision-std@${e}/dist/`}class N{static getVersion(){const e=u.license&&u.license.worker,t=u.license&&u.license.wasm;return`3.0.20(Worker: ${e||"Not Loaded"}, Wasm: ${t||"Not Loaded"})`}}export{P as LicenseManager,N as LicenseModule};
