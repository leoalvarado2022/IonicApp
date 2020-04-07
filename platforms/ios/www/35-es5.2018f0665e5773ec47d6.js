function _toConsumableArray(n){return _arrayWithoutHoles(n)||_iterableToArray(n)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function _arrayWithoutHoles(n){if(Array.isArray(n)){for(var l=0,e=new Array(n.length);l<n.length;l++)e[l]=n[l];return e}}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{zDxz:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),u=e("imvL"),a=e("sTnX"),o=e("ocFP"),i=function(){function n(l,e,t,u){var a=this;_classCallCheck(this,n),this.authService=l,this.loaderService=e,this.router=t,this.storeService=u,this.companies=[],this.selectedCompany=null,this.selectCompany=function(n){n.id!==a.selectedCompany.id&&(a.storeService.setActiveCompany(n),a.loadCompanies(),a.router.navigate(["home-page"]))},this.loadCompanies=function(){a.loaderService.startLoader("Cargando empresas...");var n=a.storeService.getCompanies(),l=a.storeService.getActiveCompany();a.companies=_toConsumableArray(n),a.selectedCompany=l,a.loaderService.stopLoader()}}return _createClass(n,[{key:"ngOnInit",value:function(){this.loadCompanies()}}]),n}(),r=function n(){_classCallCheck(this,n)},c=e("FhNQ"),b=e("pMnS"),s=e("oBZk"),p=e("SVse"),m=e("ZZ/e"),f=e("KcSc"),C=e("X2tk"),d=e("iInd"),L=t.Ab({encapsulation:0,styles:[["ion-menu-button[_ngcontent-%COMP%]{--color:white}ion-title[_ngcontent-%COMP%]{color:#fff}.title-menu[_ngcontent-%COMP%]{margin-top:0}.company-active[_ngcontent-%COMP%]{--color:black}.company-inactive[_ngcontent-%COMP%]{--color:gray}"]],data:{}});function g(n){return t.Xb(0,[(n()(),t.Cb(0,0,null,null,9,"ion-item",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectCompany(n.context.$implicit)&&t),t}),s.ub,s.w)),t.Sb(512,null,p.v,p.w,[t.x,t.y,t.p,t.L]),t.Bb(2,278528,null,0,p.j,[p.v],{ngClass:[0,"ngClass"]},null),t.Qb(3,{"company-active":0,"company-inactive":1}),t.Bb(4,49152,null,0,m.I,[t.j,t.p,t.F],null,null),(n()(),t.Cb(5,0,null,0,1,"ion-icon",[["name","switch"],["slot","start"]],null,null,null,s.ob,s.t)),t.Bb(6,49152,null,0,m.D,[t.j,t.p,t.F],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.Cb(7,0,null,0,2,"ion-label",[],null,null,null,s.vb,s.A)),t.Bb(8,49152,null,0,m.O,[t.j,t.p,t.F],null,null),(n()(),t.Vb(9,0,["",""]))],(function(n,l){var e=l.component,t=n(l,3,0,l.context.$implicit.id===e.selectedCompany.id,l.context.$implicit.id!==e.selectedCompany.id);n(l,2,0,t),n(l,6,0,l.context.$implicit.id===e.selectedCompany.id?"success":"danger","switch")}),(function(n,l){n(l,9,0,l.context.$implicit.name)}))}function y(n){return t.Xb(0,[(n()(),t.Cb(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),t.Cb(1,0,null,null,3,"ion-list",[],null,null,null,s.xb,s.B)),t.Bb(2,49152,null,0,m.P,[t.j,t.p,t.F],null,null),(n()(),t.rb(16777216,null,0,1,null,g)),t.Bb(4,278528,null,0,p.k,[t.X,t.T,t.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,4,0,l.component.companies)}),null)}function h(n){return t.Xb(0,[(n()(),t.Cb(0,0,null,null,16,"ion-header",[],null,null,null,s.nb,s.s)),t.Bb(1,49152,null,0,m.C,[t.j,t.p,t.F],null,null),(n()(),t.Cb(2,0,null,0,14,"ion-toolbar",[["class","background-color-header"]],null,null,null,s.Ob,s.T)),t.Bb(3,49152,null,0,m.Db,[t.j,t.p,t.F],null,null),(n()(),t.Cb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.ab,s.f)),t.Bb(5,49152,null,0,m.m,[t.j,t.p,t.F],null,null),(n()(),t.Cb(6,0,null,0,2,"ion-back-button",[["class","header-back-button"],["defaultHref","home-page"],["text",""]],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Nb(n,8).onClick(e)&&u),u}),s.X,s.c)),t.Bb(7,49152,null,0,m.h,[t.j,t.p,t.F],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),t.Bb(8,16384,null,0,m.i,[[2,m.jb],m.Jb],{defaultHref:[0,"defaultHref"]},null),(n()(),t.Cb(9,0,null,0,3,"ion-title",[["class","ion-text-center"]],null,null,null,s.Nb,s.S)),t.Bb(10,49152,null,0,m.Bb,[t.j,t.p,t.F],null,null),(n()(),t.Cb(11,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),t.Vb(-1,null,["Empresas"])),(n()(),t.Cb(13,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,s.ab,s.f)),t.Bb(14,49152,null,0,m.m,[t.j,t.p,t.F],null,null),(n()(),t.Cb(15,0,null,0,1,"app-notifications",[],null,null,null,f.b,f.a)),t.Bb(16,114688,null,0,C.a,[],null,null),(n()(),t.Cb(17,0,null,null,3,"ion-content",[],null,null,null,s.ib,s.n)),t.Bb(18,49152,null,0,m.v,[t.j,t.p,t.F],null,null),(n()(),t.rb(16777216,null,0,1,null,y)),t.Bb(20,16384,null,0,p.l,[t.X,t.T],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,7,0,"home-page",""),n(l,8,0,"home-page"),n(l,16,0),n(l,20,0,e.companies)}),null)}var v=t.yb("app-companies",i,(function(n){return t.Xb(0,[(n()(),t.Cb(0,0,null,null,1,"app-companies",[],null,null,null,h,L)),t.Bb(1,114688,null,0,i,[u.a,a.a,d.n,o.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),F=e("s7LF"),k=e("IheW"),w=e("aVMi"),B=e("Gvy4"),_=e("1dSU"),j=e("xgBC"),S=e("biaL"),O=e("QURO"),x=e("ElRG"),A=e("v2G1"),P=e("t8sF"),I=e("s3Gz"),M=e("ZWll"),X=e("Pn9U"),T=e("niFY"),E=e("wMzM"),H=e("AjED"),N=e("Q1xG"),z=e("PCNd");e.d(l,"CompaniesPageModuleNgFactory",(function(){return D}));var D=t.zb(r,[],(function(n){return t.Kb([t.Lb(512,t.m,t.kb,[[8,[c.a,b.a,v]],[3,t.m],t.D]),t.Lb(4608,p.n,p.m,[t.z,[2,p.y]]),t.Lb(4608,F.o,F.o,[]),t.Lb(4608,m.c,m.c,[t.F,t.g]),t.Lb(4608,m.Ib,m.Ib,[m.c,t.m,t.w]),t.Lb(4608,m.Mb,m.Mb,[m.c,t.m,t.w]),t.Lb(4608,k.j,k.p,[p.c,t.I,k.n]),t.Lb(4608,k.q,k.q,[k.j,k.o]),t.Lb(5120,k.a,(function(n){return[n]}),[k.q]),t.Lb(4608,k.m,k.m,[]),t.Lb(6144,k.k,null,[k.m]),t.Lb(4608,k.i,k.i,[k.k]),t.Lb(6144,k.b,null,[k.i]),t.Lb(4608,k.g,k.l,[k.b,t.w]),t.Lb(4608,k.c,k.c,[k.g]),t.Lb(4608,F.c,F.c,[]),t.Lb(4608,w.a,w.a,[m.Rb]),t.Lb(4608,B.a,B.a,[d.n,o.a,w.a]),t.Lb(4608,_.a,_.a,[j.b]),t.Lb(4608,S.a,S.a,[k.c,B.a,_.a]),t.Lb(4608,O.a,O.a,[x.a,m.Lb]),t.Lb(4608,A.a,A.a,[m.b]),t.Lb(4608,P.a,P.a,[]),t.Lb(4608,I.a,I.a,[]),t.Lb(4608,M.a,M.a,[X.a,w.a,a.a]),t.Lb(4608,T.a,T.a,[u.a,k.c,_.a,B.a]),t.Lb(4608,E.a,E.a,[]),t.Lb(4608,H.a,H.a,[B.a,k.c]),t.Lb(1073742336,p.b,p.b,[]),t.Lb(1073742336,F.n,F.n,[]),t.Lb(1073742336,F.g,F.g,[]),t.Lb(1073742336,m.Fb,m.Fb,[]),t.Lb(1073742336,k.e,k.e,[]),t.Lb(1073742336,k.d,k.d,[]),t.Lb(1073742336,F.l,F.l,[]),t.Lb(1073742336,N.a,N.a,[]),t.Lb(1073742336,z.a,z.a,[]),t.Lb(1073742336,d.p,d.p,[[2,d.u],[2,d.n]]),t.Lb(1073742336,r,r,[]),t.Lb(256,k.n,"XSRF-TOKEN",[]),t.Lb(256,k.o,"X-XSRF-TOKEN",[]),t.Lb(1024,d.l,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);