import{r as s,c as t,d as i,h as a,H as o}from"./p-4c3fdda3.js";import"./p-9825fcb7.js";import{n as c}from"./p-0af5fad6.js";import{GESTURE_CONTROLLER as r}from"./p-d598ac70.js";const h=class{constructor(i){s(this,i),this.lastClick=-1e4,this.blocker=r.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=t(this,"ionBackdropTap",7)}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onTouchStart(s){this.lastClick=c(s),this.emitTap(s)}onMouseDown(s){this.lastClick<c(s)-2500&&this.emitTap(s)}emitTap(s){this.stopPropagation&&(s.preventDefault(),s.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const s=i(this);return a(o,{tabindex:"-1",class:{[s]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}static get style(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"}};export{h as ion_backdrop};