(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"9T42":function(n,e,t){"use strict";t.r(e),t.d(e,"LogsModule",function(){return P});var c=t("tyNb"),i=t("hbEq");class r{constructor(n,e){this.name=n,this.level=e}}var s=t("fXoL"),o=t("tk/3"),l=t("PxL+");let a=(()=>{class n{constructor(n,e){this.http=n,this.applicationConfigService=e}changeLevel(n,e){return this.http.post(this.applicationConfigService.getEndpointFor("management/loggers/"+n),{configuredLevel:e})}findAll(){return this.http.get(this.applicationConfigService.getEndpointFor("management/loggers"))}}return n.\u0275fac=function(e){return new(e||n)(s.Xb(o.b),s.Xb(l.a))},n.\u0275prov=s.Hb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var b=t("ofXK"),g=t("YHTv"),d=t("3Pt+"),h=t("ON7I"),p=t("WUPo"),f=t("6NWb");function u(n,e){if(1&n){const n=s.Rb();s.Qb(0,"tr"),s.Ac(1,"\n      "),s.Qb(2,"td"),s.Ac(3,"\n        "),s.Qb(4,"small"),s.Ac(5),s.dc(6,"slice"),s.Pb(),s.Ac(7,"\n      "),s.Pb(),s.Ac(8,"\n      "),s.Qb(9,"td"),s.Ac(10,"\n        "),s.Qb(11,"button",14),s.ac("click",function(){s.sc(n);const t=e.$implicit;return s.cc(2).changeLevel(t.name,"TRACE")}),s.Ac(12,"\n          TRACE\n        "),s.Pb(),s.Ac(13,"\n\n        "),s.Qb(14,"button",14),s.ac("click",function(){s.sc(n);const t=e.$implicit;return s.cc(2).changeLevel(t.name,"DEBUG")}),s.Ac(15,"\n          DEBUG\n        "),s.Pb(),s.Ac(16,"\n\n        "),s.Qb(17,"button",14),s.ac("click",function(){s.sc(n);const t=e.$implicit;return s.cc(2).changeLevel(t.name,"INFO")}),s.Ac(18,"\n          INFO\n        "),s.Pb(),s.Ac(19,"\n\n        "),s.Qb(20,"button",14),s.ac("click",function(){s.sc(n);const t=e.$implicit;return s.cc(2).changeLevel(t.name,"WARN")}),s.Ac(21,"\n          WARN\n        "),s.Pb(),s.Ac(22,"\n\n        "),s.Qb(23,"button",14),s.ac("click",function(){s.sc(n);const t=e.$implicit;return s.cc(2).changeLevel(t.name,"ERROR")}),s.Ac(24,"\n          ERROR\n        "),s.Pb(),s.Ac(25,"\n\n        "),s.Qb(26,"button",14),s.ac("click",function(){s.sc(n);const t=e.$implicit;return s.cc(2).changeLevel(t.name,"OFF")}),s.Ac(27,"\n          OFF\n        "),s.Pb(),s.Ac(28,"\n      "),s.Pb(),s.Ac(29,"\n    "),s.Pb()}if(2&n){const n=e.$implicit;s.zb(5),s.Bc(s.gc(6,7,n.name,0,140)),s.zb(6),s.jc("ngClass","TRACE"===n.level?"btn-primary":"btn-light"),s.zb(3),s.jc("ngClass","DEBUG"===n.level?"btn-success":"btn-light"),s.zb(3),s.jc("ngClass","INFO"===n.level?"btn-info":"btn-light"),s.zb(3),s.jc("ngClass","WARN"===n.level?"btn-warning":"btn-light"),s.zb(3),s.jc("ngClass","ERROR"===n.level?"btn-danger":"btn-light"),s.zb(3),s.jc("ngClass","OFF"===n.level?"btn-secondary":"btn-light")}}const A=function(n){return{total:n}};function v(n,e){if(1&n){const n=s.Rb();s.Qb(0,"div",1),s.Ac(1,"\n  "),s.Qb(2,"h2",2),s.Ac(3,"Logs"),s.Pb(),s.Ac(4,"\n\n  "),s.Qb(5,"p",3),s.Ac(6),s.Pb(),s.Ac(7,"\n\n  "),s.Qb(8,"span",4),s.Ac(9,"Filter"),s.Pb(),s.Ac(10,"\n  "),s.Qb(11,"input",5),s.ac("ngModelChange",function(e){return s.sc(n),s.cc().filter=e})("ngModelChange",function(){return s.sc(n),s.cc().filterAndSort()}),s.Pb(),s.Ac(12,"\n\n  "),s.Qb(13,"table",6),s.Ac(14,"\n    "),s.Qb(15,"thead"),s.Ac(16,"\n      "),s.Qb(17,"tr",7),s.ac("predicateChange",function(e){return s.sc(n),s.cc().orderProp=e})("ascendingChange",function(e){return s.sc(n),s.cc().ascending=e}),s.Ac(18,"\n        "),s.Qb(19,"th",8),s.Qb(20,"span",9),s.Ac(21,"Name"),s.Pb(),s.Ac(22," "),s.Mb(23,"fa-icon",10),s.Pb(),s.Ac(24,"\n        "),s.Qb(25,"th",11),s.Qb(26,"span",12),s.Ac(27,"Level"),s.Pb(),s.Ac(28," "),s.Mb(29,"fa-icon",10),s.Pb(),s.Ac(30,"\n      "),s.Pb(),s.Ac(31,"\n    "),s.Pb(),s.Ac(32,"\n\n    "),s.yc(33,u,30,11,"tr",13),s.Ac(34,"\n  "),s.Pb(),s.Ac(35,"\n"),s.Pb()}if(2&n){const n=s.cc();s.zb(5),s.jc("translateValues",s.nc(7,A,n.loggers.length)),s.zb(1),s.Cc("There are ",n.loggers.length," loggers."),s.zb(5),s.jc("ngModel",n.filter),s.zb(6),s.jc("predicate",n.orderProp)("ascending",n.ascending)("callback",n.filterAndSort.bind(n)),s.zb(16),s.jc("ngForOf",n.filteredAndOrderedLoggers)}}const m={path:"",component:(()=>{class n{constructor(n){this.logsService=n,this.filter="",this.orderProp="name",this.ascending=!0}ngOnInit(){this.findAndExtractLoggers()}changeLevel(n,e){this.logsService.changeLevel(n,e).subscribe(()=>this.findAndExtractLoggers())}filterAndSort(){this.filteredAndOrderedLoggers=this.loggers.filter(n=>!this.filter||n.name.toLowerCase().includes(this.filter.toLowerCase())).sort((n,e)=>n[this.orderProp]<e[this.orderProp]?this.ascending?-1:1:n[this.orderProp]>e[this.orderProp]?this.ascending?1:-1:"level"===this.orderProp?n.name<e.name?-1:1:0)}findAndExtractLoggers(){this.logsService.findAll().subscribe(n=>{this.loggers=Object.entries(n.loggers).map(([n,e])=>new r(n,e.effectiveLevel)),this.filterAndSort()})}}return n.\u0275fac=function(e){return new(e||n)(s.Lb(a))},n.\u0275cmp=s.Fb({type:n,selectors:[["jhi-logs"]],decls:2,vars:1,consts:[["class","table-responsive",4,"ngIf"],[1,"table-responsive"],["id","logs-page-heading","jhiTranslate","logs.title","data-cy","logsPageHeading"],["jhiTranslate","logs.nbloggers",3,"translateValues"],["jhiTranslate","logs.filter"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["aria-describedby","logs-page-heading",1,"table","table-sm","table-striped","table-bordered"],["jhiSort","",3,"predicate","ascending","callback","predicateChange","ascendingChange"],["jhiSortBy","name","scope","col"],["jhiTranslate","logs.table.name"],["icon","sort"],["jhiSortBy","level","scope","col"],["jhiTranslate","logs.table.level"],[4,"ngFor","ngForOf"],[1,"btn","btn-sm",3,"ngClass","click"]],template:function(n,e){1&n&&(s.yc(0,v,36,9,"div",0),s.Ac(1,"\n")),2&n&&s.jc("ngIf",e.loggers)},directives:[b.p,g.a,d.b,d.i,d.l,h.a,p.a,f.a,b.o,b.n],pipes:[b.w],encapsulation:2}),n})(),data:{pageTitle:"logs.title"}};let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.Jb({type:n}),n.\u0275inj=s.Ib({imports:[[i.a,c.h.forChild([m])]]}),n})()}}]);