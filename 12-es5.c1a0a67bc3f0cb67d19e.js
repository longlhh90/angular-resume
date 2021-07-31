!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function n(e,n,c){return n&&t(e.prototype,n),c&&t(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{RKyK:function(t,c,a){"use strict";a.r(c),a.d(c,"HealthModule",function(){return z});var i=a("tyNb"),l=a("hbEq"),r=a("fXoL"),s=a("1kSV"),b=a("ofXK"),o=a("YHTv"),h=a("sYmb");function u(e,t){if(1&e&&(r.Qb(0,"h4",8),r.Ac(1),r.dc(2,"translate"),r.Pb()),2&e){var n=r.cc();r.zb(1),r.Cc("\n    ",r.ec(2,1,"health.indicator."+n.health.key),"\n  ")}}function d(e,t){if(1&e&&(r.Qb(0,"tr"),r.Ac(1,"\n            "),r.Qb(2,"td",15),r.Ac(3),r.Pb(),r.Ac(4,"\n            "),r.Qb(5,"td",15),r.Ac(6),r.Pb(),r.Ac(7,"\n          "),r.Pb()),2&e){var n=t.$implicit,c=r.cc(2);r.zb(3),r.Bc(n.key),r.zb(3),r.Bc(c.readableValue(n.value))}}function f(e,t){if(1&e&&(r.Qb(0,"div"),r.Ac(1,"\n    "),r.Qb(2,"h5",9),r.Ac(3,"Properties"),r.Pb(),r.Ac(4,"\n\n    "),r.Qb(5,"div",10),r.Ac(6,"\n      "),r.Qb(7,"table",11),r.Ac(8,"\n        "),r.Qb(9,"thead"),r.Ac(10,"\n          "),r.Qb(11,"tr"),r.Ac(12,"\n            "),r.Qb(13,"th",12),r.Ac(14,"Name"),r.Pb(),r.Ac(15,"\n            "),r.Qb(16,"th",13),r.Ac(17,"Value"),r.Pb(),r.Ac(18,"\n          "),r.Pb(),r.Ac(19,"\n        "),r.Pb(),r.Ac(20,"\n        "),r.Qb(21,"tbody"),r.Ac(22,"\n          "),r.yc(23,d,8,2,"tr",14),r.dc(24,"keyvalue"),r.Ac(25,"\n        "),r.Pb(),r.Ac(26,"\n      "),r.Pb(),r.Ac(27,"\n    "),r.Pb(),r.Ac(28,"\n  "),r.Pb()),2&e){var n=r.cc();r.zb(23),r.jc("ngForOf",r.ec(24,1,n.health.value.details))}}var A,p,v=((A=function(){function t(n){e(this,t),this.activeModal=n}return n(t,[{key:"readableValue",value:function(e){var t;if("diskSpace"===(null===(t=this.health)||void 0===t?void 0:t.key)){var n=e/1073741824;return n>1?n.toFixed(2)+" GB":(e/1048576).toFixed(2)+" MB"}return"object"==typeof e?JSON.stringify(e):String(e)}},{key:"dismiss",value:function(){this.activeModal.dismiss()}}]),t}()).\u0275fac=function(e){return new(e||A)(r.Lb(s.a))},A.\u0275cmp=r.Fb({type:A,selectors:[["jhi-health-modal"]],decls:22,vars:2,consts:[[1,"modal-header"],["class","modal-title","id","showHealthLabel",4,"ngIf"],["aria-label","Close","data-dismiss","modal","type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body","pad"],[4,"ngIf"],[1,"modal-footer"],["data-dismiss","modal","type","button",1,"btn","btn-secondary","float-left",3,"click"],["id","showHealthLabel",1,"modal-title"],["jhiTranslate","health.details.properties"],[1,"table-responsive"],["aria-describedby","showHealthLabel",1,"table","table-striped"],["scope","col","jhiTranslate","health.details.name",1,"text-left"],["scope","col","jhiTranslate","health.details.value",1,"text-left"],[4,"ngFor","ngForOf"],[1,"text-left"]],template:function(e,t){1&e&&(r.Qb(0,"div",0),r.Ac(1,"\n  "),r.yc(2,u,3,3,"h4",1),r.Ac(3,"\n\n  "),r.Qb(4,"button",2),r.ac("click",function(){return t.dismiss()}),r.Ac(5,"\n    "),r.Qb(6,"span",3),r.Ac(7,"\xd7"),r.Pb(),r.Ac(8,"\n  "),r.Pb(),r.Ac(9,"\n"),r.Pb(),r.Ac(10,"\n\n"),r.Qb(11,"div",4),r.Ac(12,"\n  "),r.yc(13,f,29,3,"div",5),r.Ac(14,"\n"),r.Pb(),r.Ac(15,"\n\n"),r.Qb(16,"div",6),r.Ac(17,"\n  "),r.Qb(18,"button",7),r.ac("click",function(){return t.dismiss()}),r.Ac(19,"Done"),r.Pb(),r.Ac(20,"\n"),r.Pb(),r.Ac(21,"\n")),2&e&&(r.zb(2),r.jc("ngIf",t.health),r.zb(11),r.jc("ngIf",t.health))},directives:[b.p,o.a,b.o],pipes:[h.d,b.j],encapsulation:2}),A),y=a("tk/3"),P=a("PxL+"),g=((p=function(){function t(n,c){e(this,t),this.http=n,this.applicationConfigService=c}return n(t,[{key:"checkHealth",value:function(){return this.http.get(this.applicationConfigService.getEndpointFor("management/health"))}}]),t}()).\u0275fac=function(e){return new(e||p)(r.Xb(y.b),r.Xb(P.a))},p.\u0275prov=r.Hb({token:p,factory:p.\u0275fac,providedIn:"root"}),p),Q=a("6NWb");function m(e,t){if(1&e){var n=r.Rb();r.Qb(0,"a",14),r.ac("click",function(){r.sc(n);var e=r.cc().$implicit;return r.cc(2).showHealth({key:e.key,value:e.value})}),r.Ac(1,"\n              "),r.Mb(2,"fa-icon",15),r.Ac(3,"\n            "),r.Pb()}}function k(e,t){if(1&e&&(r.Qb(0,"tr"),r.Ac(1,"\n          "),r.Qb(2,"td"),r.Ac(3),r.dc(4,"translate"),r.Pb(),r.Ac(5,"\n          "),r.Qb(6,"td",11),r.Ac(7,"\n            "),r.Qb(8,"span",12),r.Ac(9),r.Pb(),r.Ac(10,"\n          "),r.Pb(),r.Ac(11,"\n          "),r.Qb(12,"td",11),r.Ac(13,"\n            "),r.yc(14,m,4,0,"a",13),r.Ac(15,"\n          "),r.Pb(),r.Ac(16,"\n        "),r.Pb()),2&e){var n=t.$implicit,c=r.cc(2);r.zb(3),r.Cc("\n            ",r.ec(4,5,"health.indicator."+n.key),"\n          "),r.zb(5),r.kc("jhiTranslate","health.status."+n.value.status),r.jc("ngClass",c.getBadgeClass(n.value.status)),r.zb(1),r.Cc("\n              ",n.value.status,"\n            "),r.zb(5),r.jc("ngIf",n.value.details)}}function j(e,t){if(1&e&&(r.Qb(0,"tbody"),r.Ac(1,"\n        "),r.yc(2,k,17,7,"tr",10),r.dc(3,"keyvalue"),r.Ac(4,"\n      "),r.Pb()),2&e){var n=r.cc();r.zb(2),r.jc("ngForOf",r.ec(3,1,n.health.components))}}var w,C,T={path:"",component:(w=function(){function t(n,c){e(this,t),this.modalService=n,this.healthService=c}return n(t,[{key:"ngOnInit",value:function(){this.refresh()}},{key:"getBadgeClass",value:function(e){return"UP"===e?"badge-success":"badge-danger"}},{key:"refresh",value:function(){var e=this;this.healthService.checkHealth().subscribe(function(t){return e.health=t},function(t){503===t.status&&(e.health=t.error)})}},{key:"showHealth",value:function(e){this.modalService.open(v).componentInstance.health=e}}]),t}(),w.\u0275fac=function(e){return new(e||w)(r.Lb(s.i),r.Lb(g))},w.\u0275cmp=r.Fb({type:w,selectors:[["jhi-health"]],decls:40,vars:1,consts:[["id","health-page-heading","jhiTranslate","health.title","data-cy","healthPageHeading"],[1,"btn","btn-primary","float-right",3,"click"],["icon","sync"],["jhiTranslate","health.refresh.button"],[1,"table-responsive"],["id","healthCheck","aria-describedby","health-page-heading",1,"table","table-striped"],["scope","col","jhiTranslate","health.table.service"],["scope","col","jhiTranslate","health.table.status",1,"text-center"],["scope","col","jhiTranslate","health.details.details",1,"text-center"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"text-center"],[1,"badge",3,"ngClass","jhiTranslate"],["class","hand",3,"click",4,"ngIf"],[1,"hand",3,"click"],["icon","eye"]],template:function(e,t){1&e&&(r.Qb(0,"div"),r.Ac(1,"\n  "),r.Qb(2,"h2"),r.Ac(3,"\n    "),r.Qb(4,"span",0),r.Ac(5,"Health Checks"),r.Pb(),r.Ac(6,"\n\n    "),r.Qb(7,"button",1),r.ac("click",function(){return t.refresh()}),r.Ac(8,"\n      "),r.Mb(9,"fa-icon",2),r.Ac(10," "),r.Qb(11,"span",3),r.Ac(12,"Refresh"),r.Pb(),r.Ac(13,"\n    "),r.Pb(),r.Ac(14,"\n  "),r.Pb(),r.Ac(15,"\n\n  "),r.Qb(16,"div",4),r.Ac(17,"\n    "),r.Qb(18,"table",5),r.Ac(19,"\n      "),r.Qb(20,"thead"),r.Ac(21,"\n        "),r.Qb(22,"tr"),r.Ac(23,"\n          "),r.Qb(24,"th",6),r.Ac(25,"Service Name"),r.Pb(),r.Ac(26,"\n          "),r.Qb(27,"th",7),r.Ac(28,"Status"),r.Pb(),r.Ac(29,"\n          "),r.Qb(30,"th",8),r.Ac(31,"Details"),r.Pb(),r.Ac(32,"\n        "),r.Pb(),r.Ac(33,"\n      "),r.Pb(),r.Ac(34,"\n      "),r.yc(35,j,5,3,"tbody",9),r.Ac(36,"\n    "),r.Pb(),r.Ac(37,"\n  "),r.Pb(),r.Ac(38,"\n"),r.Pb(),r.Ac(39,"\n")),2&e&&(r.zb(35),r.jc("ngIf",t.health))},directives:[o.a,Q.a,b.p,b.o,b.n],pipes:[b.j,h.d],encapsulation:2}),w),data:{pageTitle:"health.title"}},z=((C=function t(){e(this,t)}).\u0275fac=function(e){return new(e||C)},C.\u0275mod=r.Jb({type:C}),C.\u0275inj=r.Ib({imports:[[l.a,i.h.forChild([T])]]}),C)}}])}();