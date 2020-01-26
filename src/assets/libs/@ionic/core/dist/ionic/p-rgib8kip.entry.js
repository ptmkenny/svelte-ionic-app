import{r as t,c as i,w as s,f as n,d as e,h,e as o,H as r}from"./p-4c3fdda3.js";import{b as c}from"./p-9825fcb7.js";import{s as a}from"./p-ed5df1e2.js";const l=class{constructor(s){t(this,s),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=()=>{const t=this.scrollEl;if(!t||!this.canStart())return 1;const i=this.el.offsetHeight;if(0===i)return 2;const s=t.scrollTop,n=t.offsetHeight,e=0!==this.thrPc?n*this.thrPc:this.thrPx;if(("bottom"===this.position?t.scrollHeight-i-s-e-n:s-i-e)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},this.ionInfinite=i(this,"ionInfinite",7)}thresholdChanged(){const t=this.threshold;t.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(t)/100):(this.thrPx=parseFloat(t),this.thrPc=0)}disabledChanged(){const t=this.disabled;t&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!t)}async connectedCallback(){const t=this.el.closest("ion-content");t?(this.scrollEl=await t.getScrollElement(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&s(()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)})):console.error("<ion-infinite-scroll> must be used inside an <ion-content>")}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}async complete(){const t=this.scrollEl;if(this.isLoading&&t&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;const i=t.scrollHeight-t.scrollTop;requestAnimationFrame(()=>{n(()=>{const n=t.scrollHeight-i;requestAnimationFrame(()=>{s(()=>{t.scrollTop=n,this.isBusy=!1})})})})}}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(t){this.scrollEl&&(t?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const t=e(this);return h(r,{class:{[t]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}})}get el(){return o(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}static get style(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"}},d=class{constructor(i){t(this,i)}componentDidLoad(){if(void 0===this.loadingSpinner){const t=e(this);this.loadingSpinner=c.get("infiniteLoadingSpinner",c.get("spinner","ios"===t?"lines":"crescent"))}}render(){const t=e(this);return h(r,{class:{[t]:!0,[`infinite-scroll-content-${t}`]:!0}},h("div",{class:"infinite-loading"},this.loadingSpinner&&h("div",{class:"infinite-loading-spinner"},h("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&h("div",{class:"infinite-loading-text",innerHTML:a(this.loadingText)})))}static get style(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"}};export{l as ion_infinite_scroll,d as ion_infinite_scroll_content};