(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{xz6d:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),i=e("mrSG"),r=e("s7LF"),t=e("sTnX"),o=e("imvL"),a=e("iInd"),s=e("aVMi"),b=e("biaL"),c=e("niFY"),d=e("Gvy4"),g=e("ocFP");class m{constructor(l,n,e,u,r,t,o,a,s){this.formBuilder=l,this.loaderService=n,this.authService=e,this.router=u,this.toastService=r,this.syncService=t,this.userService=o,this.httpService=a,this.storeService=s,this.onSubmit=()=>i.__awaiter(this,void 0,void 0,(function*(){const l=Object.assign({},this.loginForm.value);l.username=l.username.toLowerCase();const n=yield this.login(l);l.remember?(this.storeService.setRemember(!0),this.storeService.setRememberData(l)):(this.storeService.setRemember(!1),this.storeService.removeRememberData()),n&&1===n.code?this.addPin(n):null!==n&&(this.storeService.setUser(n.user),this.storeService.setUserConnections(n.connections),this.storeService.setToken(n.token),this.storeService.setLoginStatus(!0),this.makeLogin())})),this.addPin=l=>{this.toastService.warningToast(l.message),this.loginForm.reset(),this.storeService.setToken(l.token),this.router.navigate(["auth/pin"])},this.makeLogin=()=>{this.loginForm.reset(),this.router.navigate(["/home-page"])},this.filterKeys=l=>!!l.key&&"0123456789.-kK".includes(l.key),this.checkRemember=()=>{if(this.storeService.getRemember()){const l=this.storeService.getRememberData();l&&(this.loginForm.patchValue({username:l.username,password:l.password,remember:[!0]}),this.loginForm.updateValueAndValidity())}},this.login=l=>(this.loaderService.startLoader("Iniciando sesion..."),new Promise(n=>{this.authService.login(l).subscribe(l=>{this.loaderService.stopLoader(),n(l)},e=>{this.loaderService.stopLoader(),"ConnectionsNotFound"===e.error.name?n({code:1,token:e.error.data.token,user:l,message:e.error.message}):(this.httpService.errorHandler(e),n(null))})}))}ngOnInit(){this.router$=this.router.events.subscribe(l=>{l instanceof a.d&&this.checkRemember()}),this.store$=this.storeService.stateChanged.subscribe(l=>{this.checkRemember()}),this.loginForm=this.formBuilder.group({username:["",[r.m.required]],password:["",r.m.required],remember:[!1]}),this.innerWidth=window.innerWidth,this.innerHeight=window.innerHeight}ngOnDestroy(){this.router$.unsubscribe(),this.store$.unsubscribe()}}class h{}var p=e("FhNQ"),C=e("pMnS"),v=e("oBZk"),f=e("ZZ/e"),L=e("SVse"),N=u.Ab({encapsulation:0,styles:[[".recordarme[_ngcontent-%COMP%]{position:absolute;padding:11px 5px}.recordarme[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:10px;position:relative;top:-5px}.bottom[_ngcontent-%COMP%]{position:absolute;width:90%;bottom:0}"]],data:{}});function B(l){return u.Xb(0,[(l()(),u.Cb(0,0,null,null,1,"div",[["style","color: red"]],null,null,null,null,null)),(l()(),u.Vb(-1,null,[" El Usuario o correo es requerido. "]))],null,null)}function S(l){return u.Xb(0,[(l()(),u.Cb(0,0,null,null,23,null,null,null,null,null,null,null)),(l()(),u.Cb(1,0,null,null,22,"ion-row",[],null,null,null,v.Eb,v.J)),u.Bb(2,49152,null,0,f.kb,[u.j,u.p,u.F],null,null),(l()(),u.Cb(3,0,null,0,13,"ion-col",[],null,null,null,v.hb,v.m)),u.Bb(4,49152,null,0,f.u,[u.j,u.p,u.F],null,null),(l()(),u.Cb(5,0,null,0,11,"ion-item",[["lines","none"]],null,null,null,v.ub,v.w)),u.Bb(6,49152,null,0,f.I,[u.j,u.p,u.F],{lines:[0,"lines"]},null),(l()(),u.Cb(7,0,null,0,6,"ion-checkbox",[["formControlName","remember"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var i=!0;return"ionBlur"===n&&(i=!1!==u.Nb(l,8)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==u.Nb(l,8)._handleIonChange(e.target)&&i),i}),v.gb,v.l)),u.Bb(8,16384,null,0,f.d,[u.p],null,null),u.Sb(1024,null,r.h,(function(l){return[l]}),[f.d]),u.Bb(10,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.h],[2,r.p]],{name:[0,"name"]},null),u.Sb(2048,null,r.i,null,[r.d]),u.Bb(12,16384,null,0,r.j,[[4,r.i]],null,null),u.Bb(13,49152,null,0,f.s,[u.j,u.p,u.F],{checked:[0,"checked"]},null),(l()(),u.Cb(14,0,null,0,2,"ion-label",[],null,null,null,v.vb,v.A)),u.Bb(15,49152,null,0,f.O,[u.j,u.p,u.F],null,null),(l()(),u.Vb(-1,0,["Recordarme"])),(l()(),u.Cb(17,0,null,0,6,"ion-col",[],null,null,null,v.hb,v.m)),u.Bb(18,49152,null,0,f.u,[u.j,u.p,u.F],null,null),(l()(),u.Cb(19,0,null,0,4,"ion-item",[["lines","none"]],null,null,null,v.ub,v.w)),u.Bb(20,49152,null,0,f.I,[u.j,u.p,u.F],{lines:[0,"lines"]},null),(l()(),u.Cb(21,0,null,0,2,"ion-label",[["class","ion-text-center"],["color","danger"]],null,null,null,v.vb,v.A)),u.Bb(22,49152,null,0,f.O,[u.j,u.p,u.F],{color:[0,"color"]},null),(l()(),u.Vb(-1,0,["Olvide mi contrase\xf1a"]))],(function(l,n){var e=n.component;l(n,6,0,"none"),l(n,10,0,"remember"),l(n,13,0,e.loginForm.get("remember").value),l(n,20,0,"none"),l(n,22,0,"danger")}),(function(l,n){l(n,7,0,u.Nb(n,12).ngClassUntouched,u.Nb(n,12).ngClassTouched,u.Nb(n,12).ngClassPristine,u.Nb(n,12).ngClassDirty,u.Nb(n,12).ngClassValid,u.Nb(n,12).ngClassInvalid,u.Nb(n,12).ngClassPending)}))}function F(l){return u.Xb(0,[(l()(),u.Cb(0,0,null,null,16,null,null,null,null,null,null,null)),(l()(),u.Cb(1,0,null,null,9,"div",[["class","ion-text-left recordarme"]],null,null,null,null,null)),(l()(),u.Cb(2,0,null,null,6,"ion-checkbox",[["color","primary"],["formControlName","remember"],["id","remember"],["name","remember"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var i=!0;return"ionBlur"===n&&(i=!1!==u.Nb(l,3)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==u.Nb(l,3)._handleIonChange(e.target)&&i),i}),v.gb,v.l)),u.Bb(3,16384,null,0,f.d,[u.p],null,null),u.Sb(1024,null,r.h,(function(l){return[l]}),[f.d]),u.Bb(5,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.h],[2,r.p]],{name:[0,"name"]},null),u.Sb(2048,null,r.i,null,[r.d]),u.Bb(7,16384,null,0,r.j,[[4,r.i]],null,null),u.Bb(8,49152,null,0,f.s,[u.j,u.p,u.F],{checked:[0,"checked"],color:[1,"color"],name:[2,"name"]},null),(l()(),u.Cb(9,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Recordarme"])),(l()(),u.Cb(11,0,null,null,5,"div",[["class","ion-text-right"]],null,null,null,null,null)),(l()(),u.Cb(12,0,null,null,4,"ion-button",[["color","danger"],["fill","clear"],["routerDirection","forward"],["routerLink","/auth/password-recovery"]],null,[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==u.Nb(l,14).onClick()&&i),"click"===n&&(i=!1!==u.Nb(l,15).onClick(e)&&i),i}),v.Z,v.e)),u.Bb(13,49152,null,0,f.l,[u.j,u.p,u.F],{color:[0,"color"],fill:[1,"fill"],routerDirection:[2,"routerDirection"]},null),u.Bb(14,16384,null,0,a.o,[a.n,a.a,[8,null],u.L,u.p],{routerLink:[0,"routerLink"]},null),u.Bb(15,737280,null,0,f.Ob,[L.i,f.Jb,u.p,a.n,[2,a.o]],{routerDirection:[0,"routerDirection"]},null),(l()(),u.Vb(-1,0,["Olvide mi contrase\xf1a "]))],(function(l,n){l(n,5,0,"remember"),l(n,8,0,!1,"primary","remember"),l(n,13,0,"danger","clear","forward"),l(n,14,0,"/auth/password-recovery"),l(n,15,0,"forward")}),(function(l,n){l(n,2,0,u.Nb(n,7).ngClassUntouched,u.Nb(n,7).ngClassTouched,u.Nb(n,7).ngClassPristine,u.Nb(n,7).ngClassDirty,u.Nb(n,7).ngClassValid,u.Nb(n,7).ngClassInvalid,u.Nb(n,7).ngClassPending)}))}function k(l){return u.Xb(0,[(l()(),u.Cb(0,0,null,null,42,"ion-content",[],null,null,null,v.ib,v.n)),u.Bb(1,49152,null,0,f.v,[u.j,u.p,u.F],null,null),(l()(),u.Cb(2,0,null,0,40,"div",[["class","pd-default"]],null,null,null,null,null)),(l()(),u.Cb(3,0,null,null,39,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,e){var i=!0,r=l.component;return"submit"===n&&(i=!1!==u.Nb(l,5).onSubmit(e)&&i),"reset"===n&&(i=!1!==u.Nb(l,5).onReset()&&i),"ngSubmit"===n&&(i=!1!==r.onSubmit()&&i),i}),null,null)),u.Bb(4,16384,null,0,r.q,[],null,null),u.Bb(5,540672,null,0,r.e,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.Sb(2048,null,r.a,null,[r.e]),u.Bb(7,16384,null,0,r.k,[[4,r.a]],null,null),(l()(),u.Cb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(9,0,null,null,13,"ion-item",[],null,null,null,v.ub,v.w)),u.Bb(10,49152,null,0,f.I,[u.j,u.p,u.F],null,null),(l()(),u.Cb(11,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,v.vb,v.A)),u.Bb(12,49152,null,0,f.O,[u.j,u.p,u.F],{position:[0,"position"]},null),(l()(),u.Vb(-1,0,["Usuario o correo"])),(l()(),u.Cb(14,0,null,0,6,"ion-input",[["formControlName","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var i=!0;return"ionBlur"===n&&(i=!1!==u.Nb(l,15)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==u.Nb(l,15)._handleInputEvent(e.target)&&i),i}),v.qb,v.v)),u.Bb(15,16384,null,0,f.Qb,[u.p],null,null),u.Sb(1024,null,r.h,(function(l){return[l]}),[f.Qb]),u.Bb(17,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.h],[2,r.p]],{name:[0,"name"]},null),u.Sb(2048,null,r.i,null,[r.d]),u.Bb(19,16384,null,0,r.j,[[4,r.i]],null,null),u.Bb(20,49152,null,0,f.H,[u.j,u.p,u.F],{type:[0,"type"]},null),(l()(),u.rb(16777216,null,0,1,null,B)),u.Bb(22,16384,null,0,L.l,[u.X,u.T],{ngIf:[0,"ngIf"]},null),(l()(),u.Cb(23,0,null,null,11,"ion-item",[],null,null,null,v.ub,v.w)),u.Bb(24,49152,null,0,f.I,[u.j,u.p,u.F],null,null),(l()(),u.Cb(25,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,v.vb,v.A)),u.Bb(26,49152,null,0,f.O,[u.j,u.p,u.F],{position:[0,"position"]},null),(l()(),u.Vb(-1,0,["Contrase\xf1a"])),(l()(),u.Cb(28,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var i=!0;return"ionBlur"===n&&(i=!1!==u.Nb(l,29)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==u.Nb(l,29)._handleInputEvent(e.target)&&i),i}),v.qb,v.v)),u.Bb(29,16384,null,0,f.Qb,[u.p],null,null),u.Sb(1024,null,r.h,(function(l){return[l]}),[f.Qb]),u.Bb(31,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.h],[2,r.p]],{name:[0,"name"]},null),u.Sb(2048,null,r.i,null,[r.d]),u.Bb(33,16384,null,0,r.j,[[4,r.i]],null,null),u.Bb(34,49152,null,0,f.H,[u.j,u.p,u.F],{type:[0,"type"]},null),(l()(),u.Cb(35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(36,0,null,null,2,"ion-button",[["color","danger"],["expand","block"],["type","submit"]],null,null,null,v.Z,v.e)),u.Bb(37,49152,null,0,f.l,[u.j,u.p,u.F],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(l()(),u.Vb(-1,0,[" Iniciar Sesi\xf3n "])),(l()(),u.rb(16777216,null,null,1,null,S)),u.Bb(40,16384,null,0,L.l,[u.X,u.T],{ngIf:[0,"ngIf"]},null),(l()(),u.rb(16777216,null,null,1,null,F)),u.Bb(42,16384,null,0,L.l,[u.X,u.T],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,5,0,e.loginForm),l(n,12,0,"floating"),l(n,17,0,"username"),l(n,20,0,"text"),l(n,22,0,e.loginForm.controls.username.dirty&&e.loginForm.hasError("required","username")),l(n,26,0,"floating"),l(n,31,0,"password"),l(n,34,0,"password"),l(n,37,0,"danger",e.loginForm.invalid,"block","submit"),l(n,40,0,e.innerWidth<575),l(n,42,0,e.innerWidth>575)}),(function(l,n){l(n,3,0,u.Nb(n,7).ngClassUntouched,u.Nb(n,7).ngClassTouched,u.Nb(n,7).ngClassPristine,u.Nb(n,7).ngClassDirty,u.Nb(n,7).ngClassValid,u.Nb(n,7).ngClassInvalid,u.Nb(n,7).ngClassPending),l(n,14,0,u.Nb(n,19).ngClassUntouched,u.Nb(n,19).ngClassTouched,u.Nb(n,19).ngClassPristine,u.Nb(n,19).ngClassDirty,u.Nb(n,19).ngClassValid,u.Nb(n,19).ngClassInvalid,u.Nb(n,19).ngClassPending),l(n,28,0,u.Nb(n,33).ngClassUntouched,u.Nb(n,33).ngClassTouched,u.Nb(n,33).ngClassPristine,u.Nb(n,33).ngClassDirty,u.Nb(n,33).ngClassValid,u.Nb(n,33).ngClassInvalid,u.Nb(n,33).ngClassPending)}))}function y(l){return u.Xb(0,[(l()(),u.Cb(0,0,null,null,1,"app-login",[],null,null,null,k,N)),u.Bb(1,245760,null,0,m,[r.c,t.a,o.a,a.n,s.a,c.a,b.a,d.a,g.a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=u.yb("app-login",m,y,{},{},[]),I=e("IheW"),j=e("1dSU"),P=e("xgBC"),V=e("QURO"),x=e("ElRG"),O=e("v2G1"),R=e("t8sF"),D=e("s3Gz"),T=e("ZWll"),_=e("Pn9U"),E=e("wMzM"),U=e("AjED"),X=e("Q1xG"),M=e("PCNd");e.d(n,"LoginPageModuleNgFactory",(function(){return q}));var q=u.zb(h,[],(function(l){return u.Kb([u.Lb(512,u.m,u.kb,[[8,[p.a,C.a,w]],[3,u.m],u.D]),u.Lb(4608,L.n,L.m,[u.z,[2,L.y]]),u.Lb(4608,r.o,r.o,[]),u.Lb(4608,f.c,f.c,[u.F,u.g]),u.Lb(4608,f.Ib,f.Ib,[f.c,u.m,u.w]),u.Lb(4608,f.Mb,f.Mb,[f.c,u.m,u.w]),u.Lb(4608,I.j,I.p,[L.c,u.I,I.n]),u.Lb(4608,I.q,I.q,[I.j,I.o]),u.Lb(5120,I.a,(function(l){return[l]}),[I.q]),u.Lb(4608,I.m,I.m,[]),u.Lb(6144,I.k,null,[I.m]),u.Lb(4608,I.i,I.i,[I.k]),u.Lb(6144,I.b,null,[I.i]),u.Lb(4608,I.g,I.l,[I.b,u.w]),u.Lb(4608,I.c,I.c,[I.g]),u.Lb(4608,r.c,r.c,[]),u.Lb(4608,s.a,s.a,[f.Rb]),u.Lb(4608,d.a,d.a,[a.n,g.a,s.a]),u.Lb(4608,j.a,j.a,[P.b]),u.Lb(4608,b.a,b.a,[I.c,d.a,j.a]),u.Lb(4608,V.a,V.a,[x.a,f.Lb]),u.Lb(4608,O.a,O.a,[f.b]),u.Lb(4608,R.a,R.a,[]),u.Lb(4608,D.a,D.a,[]),u.Lb(4608,T.a,T.a,[_.a,s.a,t.a]),u.Lb(4608,c.a,c.a,[o.a,I.c,j.a,d.a]),u.Lb(4608,E.a,E.a,[]),u.Lb(4608,U.a,U.a,[d.a,I.c]),u.Lb(1073742336,L.b,L.b,[]),u.Lb(1073742336,r.n,r.n,[]),u.Lb(1073742336,r.g,r.g,[]),u.Lb(1073742336,f.Fb,f.Fb,[]),u.Lb(1073742336,I.e,I.e,[]),u.Lb(1073742336,I.d,I.d,[]),u.Lb(1073742336,r.l,r.l,[]),u.Lb(1073742336,X.a,X.a,[]),u.Lb(1073742336,M.a,M.a,[]),u.Lb(1073742336,a.p,a.p,[[2,a.u],[2,a.n]]),u.Lb(1073742336,h,h,[]),u.Lb(256,I.n,"XSRF-TOKEN",[]),u.Lb(256,I.o,"X-XSRF-TOKEN",[]),u.Lb(1024,a.l,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);