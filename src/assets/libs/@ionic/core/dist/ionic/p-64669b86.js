import{w as a}from"./p-4c3fdda3.js";import{b as i,L as n,a as s,c as t}from"./p-e4d75972.js";const o=i=>new Promise((n,s)=>{a(()=>{e(i),c(i).then(a=>{a.animation&&a.animation.destroy(),r(i),n(a)},a=>{r(i),s(a)})})}),e=a=>{const i=a.enteringEl,n=a.leavingEl;g(i,n,a.direction),a.showGoBack?i.classList.add("can-go-back"):i.classList.remove("can-go-back"),h(i,!1),n&&h(n,!1)},c=async a=>{const i=await d(a);return i?p(i,a):m(a)},r=a=>{const i=a.leavingEl;a.enteringEl.classList.remove("ion-page-invisible"),void 0!==i&&i.classList.remove("ion-page-invisible")},d=async a=>{if(a.leavingEl&&a.animated&&0!==a.duration)return a.animationBuilder?a.animationBuilder:"ios"===a.mode?(await(()=>__sc_import_ionic("./p-4af8e0f7.js"))()).iosTransitionAnimation:(await(()=>__sc_import_ionic("./p-800aee87.js"))()).mdTransitionAnimation},p=async(a,i)=>{let n;await w(i,!0);try{const s=await __sc_import_ionic("./p-20de6840.js");n=await s.create(a,i.baseEl,i)}catch(t){n=a(i.baseEl,i)}_(i.enteringEl,i.leavingEl);const s=await u(n,i);return i.progressCallback&&i.progressCallback(void 0),s&&b(i.enteringEl,i.leavingEl),{hasCompleted:s,animation:n}},m=async a=>{const i=a.enteringEl,n=a.leavingEl;return await w(a,!1),_(i,n),b(i,n),{hasCompleted:!0}},w=async(a,i)=>{const n=(void 0!==a.deepWait?a.deepWait:i)?[v(a.enteringEl),v(a.leavingEl)]:[y(a.enteringEl),y(a.leavingEl)];await Promise.all(n),await l(a.viewIsReady,a.enteringEl)},l=async(a,i)=>{a&&await a(i)},u=(a,i)=>{const n=i.progressCallback,s=new Promise(i=>{a.onFinish(n=>{"number"==typeof n?i(1===n):void 0!==a.hasCompleted&&i(a.hasCompleted)})});return n?(a.progressStart(!0),n(a)):a.play(),s},_=(a,s)=>{f(s,i),f(a,n)},b=(a,i)=>{f(a,s),f(i,t)},f=(a,i)=>{if(a){const n=new CustomEvent(i,{bubbles:!1,cancelable:!1});a.dispatchEvent(n)}},y=a=>a&&a.componentOnReady?a.componentOnReady():Promise.resolve(),v=async a=>{const i=a;if(i){if(null!=i.componentOnReady&&null!=await i.componentOnReady())return;await Promise.all(Array.from(i.children).map(v))}},h=(a,i)=>{i?(a.setAttribute("aria-hidden","true"),a.classList.add("ion-page-hidden")):(a.hidden=!1,a.removeAttribute("aria-hidden"),a.classList.remove("ion-page-hidden"))},g=(a,i,n)=>{void 0!==a&&(a.style.zIndex="back"===n?"99":"101"),void 0!==i&&(i.style.zIndex="100")};export{v as d,f as l,h as s,o as t};