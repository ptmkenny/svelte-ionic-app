import{p as t}from"./p-0af5fad6.js";const n=new WeakMap,o=(t,o,r,c=0)=>{n.has(t)!==r&&(r?e(t,o,c):i(t,o))},r=t=>t===t.getRootNode().activeElement,e=(t,o,r)=>{const e=o.parentNode,i=o.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,e.appendChild(i),n.set(t,i);const c="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",o.style.transform=`translate3d(${c}px,${r}px,0) scale(0)`},i=(t,o)=>{const r=n.get(t);r&&(n.delete(t),r.remove()),t.style.pointerEvents="",o.style.transform=""},c="input, textarea, [no-blur]",u=(t,n,r,e)=>{const i=((t,n,o)=>{return((t,n,o,r)=>{const e=t.top,i=t.bottom,c=n.top,u=c+15,s=.5*Math.min(n.bottom,r-o)-i,a=u-e,l=Math.round(s<0?-s:a>0?-a:0),f=Math.min(l,e-c),d=Math.abs(f);return{scrollAmount:f,scrollDuration:Math.min(400,Math.max(150,d/.3)),scrollPadding:o,inputSafeY:4-(e-u)}})((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),n.getBoundingClientRect(),o,t.ownerDocument.defaultView.innerHeight)})(t,r,e);Math.abs(i.scrollAmount)<4?n.focus():(o(t,n,!0,i.inputSafeY),n.focus(),r.scrollByPoint(0,i.scrollAmount,i.scrollDuration).then(()=>{o(t,n,!1,i.inputSafeY),n.focus()}))},s=(t,n)=>{if("INPUT"!==t.tagName)return;if(t.parentElement&&"ION-INPUT"===t.parentElement.tagName)return;if(t.parentElement&&t.parentElement.parentElement&&"ION-SEARCHBAR"===t.parentElement.parentElement.tagName)return;const o=t.closest("ion-content");if(null===o)return;const r=o.$ionPaddingTimer;r&&clearTimeout(r),n>0?o.style.setProperty("--keyboard-offset",`${n}px`):o.$ionPaddingTimer=setTimeout(()=>{o.style.setProperty("--keyboard-offset","0px")},120)},a=n=>{const e=document,i=n.getNumber("keyboardHeight",290),a=n.getBoolean("scrollAssist",!0),l=n.getBoolean("hideCaretOnScroll",!0),f=n.getBoolean("inputBlurring",!0),d=n.getBoolean("scrollPadding",!0),p=Array.from(e.querySelectorAll("ion-input, ion-textarea")),h=new WeakMap,m=new WeakMap,S=n=>{const e=(n.shadowRoot||n).querySelector("input")||(n.shadowRoot||n).querySelector("textarea"),c=n.closest("ion-content");if(e){if(c&&l&&!h.has(n)){const t=((t,n,e)=>{if(!e||!n)return()=>{};const i=e=>{r(n)&&o(t,n,e)},c=()=>o(t,n,!1),u=()=>i(!0),s=()=>i(!1);return e.addEventListener("ionScrollStart",u),e.addEventListener("ionScrollEnd",s),n.addEventListener("blur",c),()=>{e.removeEventListener("ionScrollStart",u),e.removeEventListener("ionScrollEnd",s),n.addEventListener("ionBlur",c)}})(n,e,c);h.set(n,t)}if(c&&a&&!m.has(n)){const o=((n,o,e,i)=>{let c;const s=n=>{c=t(n)},a=s=>{if(!c)return;const a=t(s);((t,n,o)=>{if(n&&o){const r=n.x-o.x,e=n.y-o.y;return r*r+e*e>t*t}return!1})(6,c,a)||r(o)||(s.preventDefault(),s.stopPropagation(),u(n,o,e,i))};return n.addEventListener("touchstart",s,!0),n.addEventListener("touchend",a,!0),()=>{n.removeEventListener("touchstart",s,!0),n.removeEventListener("touchend",a,!0)}})(n,e,c,i);m.set(n,o)}}};f&&(()=>{let t=!0,n=!1;const o=document;o.addEventListener("ionScrollStart",()=>{n=!0}),o.addEventListener("focusin",()=>{t=!0},!0),o.addEventListener("touchend",r=>{if(n)return void(n=!1);const e=o.activeElement;if(!e)return;if(e.matches(c))return;const i=r.target;i!==e&&(i.matches(c)||i.closest(c)||(t=!1,setTimeout(()=>{t||e.blur()},50)))},!1)})(),d&&(t=>{const n=document;n.addEventListener("focusin",n=>{s(n.target,t)}),n.addEventListener("focusout",t=>{s(t.target,0)})})(i);for(const t of p)S(t);e.addEventListener("ionInputDidLoad",t=>{S(t.detail)}),e.addEventListener("ionInputDidUnload",t=>{(t=>{if(l){const n=h.get(t);n&&n(),h.delete(t)}if(a){const n=m.get(t);n&&n(),m.delete(t)}})(t.detail)})};export{a as startInputShims};