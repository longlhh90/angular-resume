(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{RKyK:function(t,e,c){"use strict";c.r(e),c.d(e,"HealthModule",function(){return y});var n=c("tyNb"),a=c("hbEq"),i=c("fXoL"),s=c("1kSV"),l=c("ofXK"),b=c("YHTv"),o=c("sYmb");function h(t,e){if(1&t&&(i.Qb(0,"h4",8),i.Ac(1),i.dc(2,"translate"),i.Pb()),2&t){const t=i.cc();i.zb(1),i.Cc("\n    ",i.ec(2,1,"health.indicator."+t.health.key),"\n  ")}}function r(t,e){if(1&t&&(i.Qb(0,"tr"),i.Ac(1,"\n            "),i.Qb(2,"td",15),i.Ac(3),i.Pb(),i.Ac(4,"\n            "),i.Qb(5,"td",15),i.Ac(6),i.Pb(),i.Ac(7,"\n          "),i.Pb()),2&t){const t=e.$implicit,c=i.cc(2);i.zb(3),i.Bc(t.key),i.zb(3),i.Bc(c.readableValue(t.value))}}function d(t,e){if(1&t&&(i.Qb(0,"div"),i.Ac(1,"\n    "),i.Qb(2,"h5",9),i.Ac(3,"Properties"),i.Pb(),i.Ac(4,"\n\n    "),i.Qb(5,"div",10),i.Ac(6,"\n      "),i.Qb(7,"table",11),i.Ac(8,"\n        "),i.Qb(9,"thead"),i.Ac(10,"\n          "),i.Qb(11,"tr"),i.Ac(12,"\n            "),i.Qb(13,"th",12),i.Ac(14,"Name"),i.Pb(),i.Ac(15,"\n            "),i.Qb(16,"th",13),i.Ac(17,"Value"),i.Pb(),i.Ac(18,"\n          "),i.Pb(),i.Ac(19,"\n        "),i.Pb(),i.Ac(20,"\n        "),i.Qb(21,"tbody"),i.Ac(22,"\n          "),i.yc(23,r,8,2,"tr",14),i.dc(24,"keyvalue"),i.Ac(25,"\n        "),i.Pb(),i.Ac(26,"\n      "),i.Pb(),i.Ac(27,"\n    "),i.Pb(),i.Ac(28,"\n  "),i.Pb()),2&t){const t=i.cc();i.zb(23),i.jc("ngForOf",i.ec(24,1,t.health.value.details))}}let A=(()=>{class t{constructor(t){this.activeModal=t}readableValue(t){var e;if("diskSpace"===(null===(e=this.health)||void 0===e?void 0:e.key)){const e=t/1073741824;return e>1?e.toFixed(2)+" GB":(t/1048576).toFixed(2)+" MB"}return"object"==typeof t?JSON.stringify(t):String(t)}dismiss(){this.activeModal.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(s.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["jhi-health-modal"]],decls:22,vars:2,consts:[[1,"modal-header"],["class","modal-title","id","showHealthLabel",4,"ngIf"],["aria-label","Close","data-dismiss","modal","type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body","pad"],[4,"ngIf"],[1,"modal-footer"],["data-dismiss","modal","type","button",1,"btn","btn-secondary","float-left",3,"click"],["id","showHealthLabel",1,"modal-title"],["jhiTranslate","health.details.properties"],[1,"table-responsive"],["aria-describedby","showHealthLabel",1,"table","table-striped"],["scope","col","jhiTranslate","health.details.name",1,"text-left"],["scope","col","jhiTranslate","health.details.value",1,"text-left"],[4,"ngFor","ngForOf"],[1,"text-left"]],template:function(t,e){1&t&&(i.Qb(0,"div",0),i.Ac(1,"\n  "),i.yc(2,h,3,3,"h4",1),i.Ac(3,"\n\n  "),i.Qb(4,"button",2),i.ac("click",function(){return e.dismiss()}),i.Ac(5,"\n    "),i.Qb(6,"span",3),i.Ac(7,"\xd7"),i.Pb(),i.Ac(8,"\n  "),i.Pb(),i.Ac(9,"\n"),i.Pb(),i.Ac(10,"\n\n"),i.Qb(11,"div",4),i.Ac(12,"\n  "),i.yc(13,d,29,3,"div",5),i.Ac(14,"\n"),i.Pb(),i.Ac(15,"\n\n"),i.Qb(16,"div",6),i.Ac(17,"\n  "),i.Qb(18,"button",7),i.ac("click",function(){return e.dismiss()}),i.Ac(19,"Done"),i.Pb(),i.Ac(20,"\n"),i.Pb(),i.Ac(21,"\n")),2&t&&(i.zb(2),i.jc("ngIf",e.health),i.zb(11),i.jc("ngIf",e.health))},directives:[l.p,b.a,l.o],pipes:[o.d,l.j],encapsulation:2}),t})();var u=c("tk/3"),f=c("PxL+");let p=(()=>{class t{constructor(t,e){this.http=t,this.applicationConfigService=e}checkHealth(){return this.http.get(this.applicationConfigService.getEndpointFor("management/health"))}}return t.\u0275fac=function(e){return new(e||t)(i.Xb(u.b),i.Xb(f.a))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=c("6NWb");function P(t,e){if(1&t){const t=i.Rb();i.Qb(0,"a",14),i.ac("click",function(){i.sc(t);const e=i.cc().$implicit;return i.cc(2).showHealth({key:e.key,value:e.value})}),i.Ac(1,"\n              "),i.Mb(2,"fa-icon",15),i.Ac(3,"\n            "),i.Pb()}}function g(t,e){if(1&t&&(i.Qb(0,"tr"),i.Ac(1,"\n          "),i.Qb(2,"td"),i.Ac(3),i.dc(4,"translate"),i.Pb(),i.Ac(5,"\n          "),i.Qb(6,"td",11),i.Ac(7,"\n            "),i.Qb(8,"span",12),i.Ac(9),i.Pb(),i.Ac(10,"\n          "),i.Pb(),i.Ac(11,"\n          "),i.Qb(12,"td",11),i.Ac(13,"\n            "),i.yc(14,P,4,0,"a",13),i.Ac(15,"\n          "),i.Pb(),i.Ac(16,"\n        "),i.Pb()),2&t){const t=e.$implicit,c=i.cc(2);i.zb(3),i.Cc("\n            ",i.ec(4,5,"health.indicator."+t.key),"\n          "),i.zb(5),i.kc("jhiTranslate","health.status."+t.value.status),i.jc("ngClass",c.getBadgeClass(t.value.status)),i.zb(1),i.Cc("\n              ",t.value.status,"\n            "),i.zb(5),i.jc("ngIf",t.value.details)}}function Q(t,e){if(1&t&&(i.Qb(0,"tbody"),i.Ac(1,"\n        "),i.yc(2,g,17,7,"tr",10),i.dc(3,"keyvalue"),i.Ac(4,"\n      "),i.Pb()),2&t){const t=i.cc();i.zb(2),i.jc("ngForOf",i.ec(3,1,t.health.components))}}const m={path:"",component:(()=>{class t{constructor(t,e){this.modalService=t,this.healthService=e}ngOnInit(){this.refresh()}getBadgeClass(t){return"UP"===t?"badge-success":"badge-danger"}refresh(){this.healthService.checkHealth().subscribe(t=>this.health=t,t=>{503===t.status&&(this.health=t.error)})}showHealth(t){this.modalService.open(A).componentInstance.health=t}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(s.i),i.Lb(p))},t.\u0275cmp=i.Fb({type:t,selectors:[["jhi-health"]],decls:40,vars:1,consts:[["id","health-page-heading","jhiTranslate","health.title","data-cy","healthPageHeading"],[1,"btn","btn-primary","float-right",3,"click"],["icon","sync"],["jhiTranslate","health.refresh.button"],[1,"table-responsive"],["id","healthCheck","aria-describedby","health-page-heading",1,"table","table-striped"],["scope","col","jhiTranslate","health.table.service"],["scope","col","jhiTranslate","health.table.status",1,"text-center"],["scope","col","jhiTranslate","health.details.details",1,"text-center"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"text-center"],[1,"badge",3,"ngClass","jhiTranslate"],["class","hand",3,"click",4,"ngIf"],[1,"hand",3,"click"],["icon","eye"]],template:function(t,e){1&t&&(i.Qb(0,"div"),i.Ac(1,"\n  "),i.Qb(2,"h2"),i.Ac(3,"\n    "),i.Qb(4,"span",0),i.Ac(5,"Health Checks"),i.Pb(),i.Ac(6,"\n\n    "),i.Qb(7,"button",1),i.ac("click",function(){return e.refresh()}),i.Ac(8,"\n      "),i.Mb(9,"fa-icon",2),i.Ac(10," "),i.Qb(11,"span",3),i.Ac(12,"Refresh"),i.Pb(),i.Ac(13,"\n    "),i.Pb(),i.Ac(14,"\n  "),i.Pb(),i.Ac(15,"\n\n  "),i.Qb(16,"div",4),i.Ac(17,"\n    "),i.Qb(18,"table",5),i.Ac(19,"\n      "),i.Qb(20,"thead"),i.Ac(21,"\n        "),i.Qb(22,"tr"),i.Ac(23,"\n          "),i.Qb(24,"th",6),i.Ac(25,"Service Name"),i.Pb(),i.Ac(26,"\n          "),i.Qb(27,"th",7),i.Ac(28,"Status"),i.Pb(),i.Ac(29,"\n          "),i.Qb(30,"th",8),i.Ac(31,"Details"),i.Pb(),i.Ac(32,"\n        "),i.Pb(),i.Ac(33,"\n      "),i.Pb(),i.Ac(34,"\n      "),i.yc(35,Q,5,3,"tbody",9),i.Ac(36,"\n    "),i.Pb(),i.Ac(37,"\n  "),i.Pb(),i.Ac(38,"\n"),i.Pb(),i.Ac(39,"\n")),2&t&&(i.zb(35),i.jc("ngIf",e.health))},directives:[b.a,v.a,l.p,l.o,l.n],pipes:[l.j,o.d],encapsulation:2}),t})(),data:{pageTitle:"health.title"}};let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({imports:[[a.a,n.h.forChild([m])]]}),t})()}}]);