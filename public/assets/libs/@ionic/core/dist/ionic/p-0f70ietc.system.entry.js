var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):i(e.value).then(s,a)}u((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return u([e,t])}}function u(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(a){s=[6,a];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-f740a4ee.system.js","./p-950f5a68.system.js","./p-43ab7c15.system.js","./p-2fa93388.system.js","./p-4ad78df7.system.js","./p-4b2e2785.system.js","./p-fb86ece8.system.js"],(function(e,t){"use strict";var n,r,i,o,s,a,u,c,f,p,h,l,v,d,m,g,y;return{setters:[function(e){n=e.r;r=e.c;i=e.d;o=e.h;s=e.e;a=e.H},function(e){u=e.b},function(e){c=e.b},function(e){f=e.d;p=e.b;h=e.c},function(e){l=e.a},function(e){v=e.l;d=e.t;m=e.s},function(e){g=e.g;y=e.P}],execute:function(){var w=1;var b=2;var S=3;var C=function(){function e(e,t){this.component=e;this.params=t;this.state=w}e.prototype.init=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;return __generator(this,(function(r){switch(r.label){case 0:this.state=b;if(!!this.element)return[3,2];t=this.component;n=this;return[4,l(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)];case 1:n.element=r.sent();r.label=2;case 2:return[2]}}))}))};e.prototype._destroy=function(){c(this.state!==S,"view state must be ATTACHED");var e=this.element;if(e){if(this.delegate){this.delegate.removeViewFromDom(e.parentElement,e)}else{e.remove()}}this.nav=undefined;this.state=S};return e}();var _=function(e,t,n){if(!e){return false}if(e.component!==t){return false}var r=e.params;if(r===n){return true}if(!r&&!n){return true}if(!r||!n){return false}var i=Object.keys(r);var o=Object.keys(n);if(i.length!==o.length){return false}for(var s=0,a=i;s<a.length;s++){var u=a[s];if(r[u]!==n[u]){return false}}return true};var k=function(e,t){if(!e){return null}if(e instanceof C){return e}return new C(e,t)};var T=function(e){return e.map((function(e){if(e instanceof C){return e}if("page"in e){return k(e.page,e.params)}return k(e,undefined)})).filter((function(e){return e!==null}))};var E=e("ion_nav",function(){function e(e){n(this,e);this.transInstr=[];this.animationEnabled=true;this.useRouter=false;this.isTransitioning=false;this.destroyed=false;this.views=[];this.animated=true;this.ionNavWillLoad=r(this,"ionNavWillLoad",7);this.ionNavWillChange=r(this,"ionNavWillChange",3);this.ionNavDidChange=r(this,"ionNavDidChange",3)}e.prototype.swipeGestureChanged=function(){if(this.gesture){this.gesture.setDisabled(this.swipeGesture!==true)}};e.prototype.rootChanged=function(){if(this.root!==undefined){if(!this.useRouter){this.setRoot(this.root,this.rootParams)}}};e.prototype.componentWillLoad=function(){this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]");if(this.swipeGesture===undefined){var e=i(this);this.swipeGesture=u.getBoolean("swipeBackEnabled",e==="ios")}this.ionNavWillLoad.emit()};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(n){switch(n.label){case 0:this.rootChanged();e=this;return[4,t.import("./p-cd1de45c.system.js")];case 1:e.gesture=n.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this));this.swipeGestureChanged();return[2]}}))}))};e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];v(n.element,f);n._destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.transInstr.length=this.views.length=0;this.destroyed=true};e.prototype.push=function(e,t,n,r){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},r)};e.prototype.insert=function(e,t,n,r,i){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:r},i)};e.prototype.insertPages=function(e,t,n,r){return this.queueTrns({insertStart:e,insertViews:t,opts:n},r)};e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)};e.prototype.popTo=function(e,t,n){var r={removeStart:-1,removeCount:-1,opts:t};if(typeof e==="object"&&e.component){r.removeView=e;r.removeStart=1}else if(typeof e==="number"){r.removeStart=e+1}return this.queueTrns(r,n)};e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)};e.prototype.removeIndex=function(e,t,n,r){if(t===void 0){t=1}return this.queueTrns({removeStart:e,removeCount:t,opts:n},r)};e.prototype.setRoot=function(e,t,n,r){return this.setPages([{page:e,params:t}],n,r)};e.prototype.setPages=function(e,t,n){if(t==null){t={}}if(t.animated!==true){t.animated=false}return this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)};e.prototype.setRouteId=function(e,t,n){var r=this;var i=this.getActiveSync();if(_(i,e,t)){return Promise.resolve({changed:false,element:i.element})}var o;var s=new Promise((function(e){return o=e}));var a;var u={updateURL:false,viewIsReady:function(e){var t;var n=new Promise((function(e){return t=e}));o({changed:true,element:e,markVisible:function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:t();return[4,a];case 1:e.sent();return[2]}}))}))}});return n}};if(n==="root"){a=this.setRoot(e,t,u)}else{var c=this.views.find((function(n){return _(n,e,t)}));if(c){a=this.popTo(c,Object.assign(Object.assign({},u),{direction:"back"}))}else if(n==="forward"){a=this.push(e,t,u)}else if(n==="back"){a=this.setRoot(e,t,Object.assign(Object.assign({},u),{direction:"back",animated:true}))}}return s};e.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e=this.getActiveSync();return[2,e?{id:e.element.tagName,params:e.params,element:e.element}:undefined]}))}))};e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())};e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])};e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))};e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))};e.prototype.getLength=function(){return this.views.length};e.prototype.getActiveSync=function(){return this.views[this.views.length-1]};e.prototype.canGoBackSync=function(e){if(e===void 0){e=this.getActiveSync()}return!!(e&&this.getPreviousSync(e))};e.prototype.getPreviousSync=function(e){if(e===void 0){e=this.getActiveSync()}if(!e){return undefined}var t=this.views;var n=t.indexOf(e);return n>0?t[n-1]:undefined};e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&e.opts!=null&&e.opts.skipIfBusy){return Promise.resolve(false)}var n=new Promise((function(t,n){e.resolve=t;e.reject=n}));e.done=t;if(e.insertViews&&e.insertViews.length===0){e.insertViews=undefined}this.transInstr.push(e);this.nextTrns();return n};e.prototype.success=function(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}if(t.done){t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction)}t.resolve(e.hasCompleted);if(t.opts.updateURL!==false&&this.useRouter){var n=document.querySelector("ion-router");if(n){var r=e.direction==="back"?"back":"forward";n.navChanged(r)}}};e.prototype.failed=function(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}this.transInstr.length=0;this.fireError(e,t)};e.prototype.fireError=function(e,t){if(t.done){t.done(false,false,e)}if(t.reject&&!this.destroyed){t.reject(e)}else{t.resolve(false)}};e.prototype.nextTrns=function(){if(this.isTransitioning){return false}var e=this.transInstr.shift();if(!e){return false}this.runTransition(e);return true};e.prototype.runTransition=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,r,i,o,s;return __generator(this,(function(a){switch(a.label){case 0:a.trys.push([0,6,,7]);this.ionNavWillChange.emit();this.isTransitioning=true;this.prepareTI(e);t=this.getActiveSync();n=this.getEnteringView(e,t);if(!t&&!n){throw new Error("no views in the stack to be removed")}if(!(n&&n.state===w))return[3,2];return[4,n.init(this.el)];case 1:a.sent();a.label=2;case 2:this.postViewInit(n,t,e);r=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t;if(!r)return[3,4];return[4,this.transition(n,t,e)];case 3:o=a.sent();return[3,5];case 4:o={hasCompleted:true,requiresTransition:false};a.label=5;case 5:i=o;this.success(i,e);this.ionNavDidChange.emit();return[3,7];case 6:s=a.sent();this.failed(s,e);return[3,7];case 7:this.isTransitioning=false;this.nextTrns();return[2]}}))}))};e.prototype.prepareTI=function(e){var t=this.views.length;e.opts=e.opts||{};if(e.opts.delegate===undefined){e.opts.delegate=this.delegate}if(e.removeView!==undefined){c(e.removeStart!==undefined,"removeView needs removeStart");c(e.removeCount!==undefined,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0){throw new Error("removeView was not found")}e.removeStart+=n}if(e.removeStart!==undefined){if(e.removeStart<0){e.removeStart=t-1}if(e.removeCount<0){e.removeCount=t-e.removeStart}e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t}if(e.insertViews){if(e.insertStart<0||e.insertStart>t){e.insertStart=t}e.enteringRequiresTransition=e.insertStart===t}var r=e.insertViews;if(!r){return}c(r.length>0,"length can not be zero");var i=T(r);if(i.length===0){throw new Error("invalid views to insert")}for(var o=0,s=i;o<s.length;o++){var a=s[o];a.delegate=e.opts.delegate;var u=a.nav;if(u&&u!==this){throw new Error("inserted view was already inserted")}if(a.state===S){throw new Error("inserted view was already destroyed")}}e.insertViews=i};e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(n!==undefined){return n[n.length-1]}var r=e.removeStart;if(r!==undefined){var i=this.views;var o=r+e.removeCount;for(var s=i.length-1;s>=0;s--){var a=i[s];if((s<r||s>=o)&&a!==t){return a}}}return undefined};e.prototype.postViewInit=function(e,t,n){c(t||e,"Both leavingView and enteringView are null");c(n.resolve,"resolve must be valid");c(n.reject,"reject must be valid");var r=n.opts;var i=n.insertViews;var o=n.removeStart;var s=n.removeCount;var a;if(o!==undefined&&s!==undefined){c(o>=0,"removeStart can not be negative");c(s>=0,"removeCount can not be negative");a=[];for(var u=0;u<s;u++){var l=this.views[u+o];if(l&&l!==e&&l!==t){a.push(l)}}r.direction=r.direction||"back"}var d=this.views.length+(i!==undefined?i.length:0)-(s!==undefined?s:0);c(d>=0,"final balance can not be negative");if(d===0){console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el);throw new Error("navigation stack needs at least one root page")}if(i){var m=n.insertStart;for(var g=0,y=i;g<y.length;g++){var l=y[g];this.insertViewAt(l,m);m++}if(n.enteringRequiresTransition){r.direction=r.direction||"forward"}}if(a&&a.length>0){for(var w=0,b=a;w<b.length;w++){var l=b[w];v(l.element,p);v(l.element,h);v(l.element,f)}for(var S=0,C=a;S<C.length;S++){var l=C[S];this.destroyView(l)}}};e.prototype.transition=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var r,o,s,a,c,f,p;var h=this;return __generator(this,(function(l){switch(l.label){case 0:r=n.opts;o=r.progressAnimation?function(e){return h.sbAni=e}:undefined;s=i(this);a=e.element;c=t&&t.element;f=Object.assign({mode:s,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||r.animationBuilder||u.get("navAnimation"),progressCallback:o,animated:this.animated&&u.getBoolean("animated",true),enteringEl:a,leavingEl:c},r);return[4,d(f)];case 1:p=l.sent().hasCompleted;return[2,this.transitionFinish(p,e,t,r)]}}))}))};e.prototype.transitionFinish=function(e,t,n,r){var i=e?t:n;if(i){this.cleanup(i)}return{hasCompleted:e,requiresTransition:true,enteringView:t,leavingView:n,direction:r.direction}};e.prototype.insertViewAt=function(e,t){var n=this.views;var r=n.indexOf(e);if(r>-1){c(e.nav===this,"view is not part of the nav");n.splice(t,0,n.splice(r,1)[0])}else{c(!e.nav,"nav is used");e.nav=this;n.splice(t,0,e)}};e.prototype.removeView=function(e){c(e.state===b||e.state===S,"view state should be loaded or destroyed");var t=this.views;var n=t.indexOf(e);c(n>-1,"view must be part of the stack");if(n>=0){t.splice(n,1)}};e.prototype.destroyView=function(e){e._destroy();this.removeView(e)};e.prototype.cleanup=function(e){if(this.destroyed){return}var t=this.views;var n=t.indexOf(e);for(var r=t.length-1;r>=0;r--){var i=t[r];var o=i.element;if(r>n){v(o,f);this.destroyView(i)}else if(r<n){m(o,true)}}};e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&this.transInstr.length===0&&this.animationEnabled&&this.canGoBackSync()};e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:true}},undefined)};e.prototype.onMove=function(e){if(this.sbAni){this.sbAni.progressStep(e)}};e.prototype.onEnd=function(e,t,n){var r=this;if(this.sbAni){this.animationEnabled=false;this.sbAni.onFinish((function(){r.animationEnabled=true}),{oneTimeCallback:true});var i=e?-.001:.001;if(!e){this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");i+=g(new y(0,0),new y(1,0),new y(.68,.28),new y(1,1),t)}else{i+=g(new y(0,0),new y(.32,.72),new y(0,1),new y(1,1),t)}this.sbAni.progressEnd(e?1:0,i,n)}};e.prototype.render=function(){return o("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:true,configurable:true});return e}());var V=function(e,t,n,r){var i=e.closest("ion-nav");if(i){if(t==="forward"){if(n!==undefined){return i.push(n,r,{skipIfBusy:true})}}else if(t==="root"){if(n!==undefined){return i.setRoot(n,r,{skipIfBusy:true})}}else if(t==="back"){return i.pop({skipIfBusy:true})}}return Promise.resolve(false)};var P=e("ion_nav_link",function(){function e(e){var t=this;n(this,e);this.routerDirection="forward";this.onClick=function(){return V(t.el,t.routerDirection,t.component,t.componentProps)}}e.prototype.render=function(){return o(a,{onClick:this.onClick})};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});return e}());var j=e("ion_nav_pop",function(){function e(e){var t=this;n(this,e);this.pop=function(){return V(t.el,"back")}}e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.')};e.prototype.render=function(){return o(a,{onClick:this.pop})};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});return e}());var A=e("ion_nav_push",function(){function e(e){var t=this;n(this,e);this.push=function(){return V(t.el,"forward",t.component,t.componentProps)}}e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.')};e.prototype.render=function(){return o(a,{onClick:this.push})};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});return e}());var R=e("ion_nav_set_root",function(){function e(e){var t=this;n(this,e);this.setRoot=function(){return V(t.el,"root",t.component,t.componentProps)}}e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.')};e.prototype.render=function(){return o(a,{onClick:this.setRoot})};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});return e}())}}}));