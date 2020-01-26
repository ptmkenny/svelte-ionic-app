var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{a(i.next(t))}catch(e){o(e)}}function l(t){try{a(i["throw"](t))}catch(e){o(e)}}function a(t){t.done?n(t.value):r(t.value).then(s,l)}a((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(t){return function(e){return a([t,e])}}function a(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;r=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(l){s=[6,l];r=0}finally{i=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-f740a4ee.system.js","./p-950f5a68.system.js","./p-7b9d6119.system.js"],(function(t){"use strict";var e,n,i,r,o,s,l,a,c,u;return{setters:[function(t){e=t.r;n=t.c;i=t.w;r=t.f;o=t.d;s=t.h;l=t.e;a=t.H},function(t){c=t.b},function(t){u=t.s}],execute:function(){var f=t("ion_infinite_scroll",function(){function t(t){var i=this;e(this,t);this.thrPx=0;this.thrPc=0;this.didFire=false;this.isBusy=false;this.isLoading=false;this.threshold="15%";this.disabled=false;this.position="bottom";this.onScroll=function(){var t=i.scrollEl;if(!t||!i.canStart()){return 1}var e=i.el.offsetHeight;if(e===0){return 2}var n=t.scrollTop;var r=t.scrollHeight;var o=t.offsetHeight;var s=i.thrPc!==0?o*i.thrPc:i.thrPx;var l=i.position==="bottom"?r-e-n-s-o:n-e-s;if(l<0){if(!i.didFire){i.isLoading=true;i.didFire=true;i.ionInfinite.emit();return 3}}else{i.didFire=false}return 4};this.ionInfinite=n(this,"ionInfinite",7)}t.prototype.thresholdChanged=function(){var t=this.threshold;if(t.lastIndexOf("%")>-1){this.thrPx=0;this.thrPc=parseFloat(t)/100}else{this.thrPx=parseFloat(t);this.thrPc=0}};t.prototype.disabledChanged=function(){var t=this.disabled;if(t){this.isLoading=false;this.isBusy=false}this.enableScrollEvents(!t)};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;var n=this;return __generator(this,(function(r){switch(r.label){case 0:t=this.el.closest("ion-content");if(!t){console.error("<ion-infinite-scroll> must be used inside an <ion-content>");return[2]}e=this;return[4,t.getScrollElement()];case 1:e.scrollEl=r.sent();this.thresholdChanged();this.disabledChanged();if(this.position==="top"){i((function(){if(n.scrollEl){n.scrollEl.scrollTop=n.scrollEl.scrollHeight-n.scrollEl.clientHeight}}))}return[2]}}))}))};t.prototype.disconnectedCallback=function(){this.enableScrollEvents(false);this.scrollEl=undefined};t.prototype.complete=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;var n=this;return __generator(this,(function(o){t=this.scrollEl;if(!this.isLoading||!t){return[2]}this.isLoading=false;if(this.position==="top"){this.isBusy=true;e=t.scrollHeight-t.scrollTop;requestAnimationFrame((function(){r((function(){var r=t.scrollHeight;var o=r-e;requestAnimationFrame((function(){i((function(){t.scrollTop=o;n.isBusy=false}))}))}))}))}return[2]}))}))};t.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading};t.prototype.enableScrollEvents=function(t){if(this.scrollEl){if(t){this.scrollEl.addEventListener("scroll",this.onScroll)}else{this.scrollEl.removeEventListener("scroll",this.onScroll)}}};t.prototype.render=function(){var t;var e=o(this);var n=this.disabled;return s(a,{class:(t={},t[e]=true,t["infinite-scroll-loading"]=this.isLoading,t["infinite-scroll-enabled"]=!n,t)})};Object.defineProperty(t.prototype,"el",{get:function(){return l(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:true,configurable:true});return t}());var h=t("ion_infinite_scroll_content",function(){function t(t){e(this,t)}t.prototype.componentDidLoad=function(){if(this.loadingSpinner===undefined){var t=o(this);this.loadingSpinner=c.get("infiniteLoadingSpinner",c.get("spinner",t==="ios"?"lines":"crescent"))}};t.prototype.render=function(){var t;var e=o(this);return s(a,{class:(t={},t[e]=true,t["infinite-scroll-content-"+e]=true,t)},s("div",{class:"infinite-loading"},this.loadingSpinner&&s("div",{class:"infinite-loading-spinner"},s("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&s("div",{class:"infinite-loading-text",innerHTML:u(this.loadingText)})))};Object.defineProperty(t,"style",{get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"},enumerable:true,configurable:true});return t}())}}}));