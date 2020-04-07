function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"0olu":function(n,e,t){"use strict";t.r(e);var l=t("8Y7J"),o=t("mrSG"),r=t("1dSU"),a=t("aVMi"),u=t("ZZ/e"),i=t("AytR"),c=t("ElRG"),s=t("ha6n"),b=function(){function n(e,t,l,r,a){var u=this;_classCallCheck(this,n),this.storage=e,this.alertController=t,this.toastService=l,this.device=r,this.platform=a,this.showCordovaFeatures=!1,this.isIos=!1,this.getVersion=function(){return i.a.appVersion},this.confirmClean=function(){return o.__awaiter(u,void 0,void 0,regeneratorRuntime.mark((function n(){var e,t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({message:"Desea borrar la base de datos del telefono ?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(n){console.log("Confirm Cancel: blah")}},{text:"Si",handler:function(){return o.__awaiter(t,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.cleanCache();case 2:case"end":return n.stop()}}),n,this)})))}}]});case 2:return e=n.sent,n.next=5,e.present();case 5:case"end":return n.stop()}}),n,this)})))},this.cleanCache=function(){return o.__awaiter(u,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("true"!==localStorage.getItem("remember")){n.next=12;break}return n.next=3,this.storage.getRow("userRemember");case 3:return e=n.sent,localStorage.clear(),n.next=7,this.storage.clearAllRow();case 7:return n.next=9,this.storage.setRow("userRemember",e);case 9:localStorage.setItem("remember","true"),n.next=15;break;case 12:return localStorage.clear(),n.next=15,this.storage.clearAllRow();case 15:this.toastService.successToast("Datos eliminados");case 16:case"end":return n.stop()}}),n,this)})))},this.getUUIDLast8=function(){return u.device.uuid?u.device.uuid.substring(u.device.uuid.length-8):""},this.showFullUUID=function(){return o.__awaiter(u,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.device.uuid){n.next=6;break}return n.next=3,this.alertController.create({header:"NC",message:this.device.uuid,buttons:["OK"]});case 3:return e=n.sent,n.next=6,e.present();case 6:case"end":return n.stop()}}),n,this)})))},this.showDeviceData=function(){return o.__awaiter(u,void 0,void 0,regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.isIos?s.a[this.device.model]:this.device.model,n.next=3,this.alertController.create({header:"Device",message:"\n        <p>Manufacturer: ".concat(this.device.manufacturer,"</p>\n        <p>Model: ").concat(e,"</p>\n        <p>Platform: ").concat(this.device.platform,"</p>\n        <p>Version: ").concat(this.device.version,"</p>\n        <p>Cordova: ").concat(this.device.cordova,"</p>\n      "),buttons:["OK"]});case 3:return t=n.sent,n.next=6,t.present();case 6:case"end":return n.stop()}}),n,this)})))},this.platform.ready().then((function(){u.showCordovaFeatures=u.platform.is("cordova"),u.isIos=u.platform.is("ios")}))}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),d=function(){return t.e(5).then(t.bind(null,"xz6d")).then((function(n){return n.LoginPageModuleNgFactory}))},h=function(){return t.e(5).then(t.bind(null,"xz6d")).then((function(n){return n.LoginPageModuleNgFactory}))},g=function(){return Promise.all([t.e(4),t.e(0),t.e(23)]).then(t.bind(null,"EEK8")).then((function(n){return n.RegisterPageModuleNgFactory}))},f=function n(){_classCallCheck(this,n)},p=t("FhNQ"),m=t("pMnS"),C=t("oBZk"),v=t("SVse"),L=l.Ab({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{--background:var(--color-login-header)}.button-text-color[_ngcontent-%COMP%]{color:#fff}ion-header[_ngcontent-%COMP%]{--background:var(--color-login-header);background:var(--color-login-header);--color:white;color:#fff}ion-header[_ngcontent-%COMP%]   .title-header[_ngcontent-%COMP%]{margin-top:5px;background:var(--color-login-header);text-align:center!important}ion-header[_ngcontent-%COMP%]   .title-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px;margin-top:10px}ion-header[_ngcontent-%COMP%]   .title-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center!important}@media (min-width:360px){ion-header[_ngcontent-%COMP%]   .title-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding-bottom:10px}}ion-tab-button[_ngcontent-%COMP%]{color:#fff;--color:white}ion-tab-bar[_ngcontent-%COMP%]{--background:var(--color-login-header)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{-webkit-box-align:center;align-items:center;max-width:130px;font-size:14px;--background:var(--color-login-header)}@media (max-width:360px){ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{max-width:120px}}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]:nth-child(1){position:relative;left:-15%}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]:nth-child(2){position:relative;left:-10%}.tab-selected[_ngcontent-%COMP%]{border-bottom:2px solid #fff!important}"]],data:{}});function w(n){return l.Xb(0,[(n()(),l.Cb(0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),l.Cb(1,0,null,null,4,"ion-buttons",[["slot","start"]],null,null,null,C.ab,C.f)),l.Bb(2,49152,null,0,u.m,[l.j,l.p,l.F],null,null),(n()(),l.Cb(3,0,null,0,2,"ion-button",[["class","button-text-color"],["fill","clear"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.showDeviceData()&&l),l}),C.Z,C.e)),l.Bb(4,49152,null,0,u.l,[l.j,l.p,l.F],{fill:[0,"fill"]},null),(n()(),l.Vb(5,0,["",""]))],(function(n,e){n(e,4,0,"clear")}),(function(n,e){n(e,5,0,e.component.getVersion())}))}function x(n){return l.Xb(0,[(n()(),l.Cb(0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),l.Cb(1,0,null,null,2,"ion-button",[["class","button-text-color"],["fill","clear"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.showFullUUID()&&l),l}),C.Z,C.e)),l.Bb(2,49152,null,0,u.l,[l.j,l.p,l.F],{fill:[0,"fill"]},null),(n()(),l.Vb(3,0,[" NC: "," "]))],(function(n,e){n(e,2,0,"clear")}),(function(n,e){n(e,3,0,e.component.getUUIDLast8())}))}function _(n){return l.Xb(0,[(n()(),l.Cb(0,0,null,null,16,"ion-header",[],null,null,null,C.nb,C.s)),l.Bb(1,49152,null,0,u.C,[l.j,l.p,l.F],null,null),(n()(),l.Cb(2,0,null,0,10,"ion-toolbar",[],null,null,null,C.Ob,C.T)),l.Bb(3,49152,null,0,u.Db,[l.j,l.p,l.F],null,null),(n()(),l.rb(16777216,null,0,1,null,w)),l.Bb(5,16384,null,0,v.l,[l.X,l.T],{ngIf:[0,"ngIf"]},null),(n()(),l.Cb(6,0,null,0,2,"ion-title",[],null,null,null,C.Nb,C.S)),l.Bb(7,49152,null,0,u.Bb,[l.j,l.p,l.F],null,null),(n()(),l.Vb(-1,0,["\xa0"])),(n()(),l.Cb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,C.ab,C.f)),l.Bb(10,49152,null,0,u.m,[l.j,l.p,l.F],null,null),(n()(),l.rb(16777216,null,0,1,null,x)),l.Bb(12,16384,null,0,v.l,[l.X,l.T],{ngIf:[0,"ngIf"]},null),(n()(),l.Cb(13,0,null,0,3,"div",[["class","title-header"]],null,null,null,null,null)),(n()(),l.Cb(14,0,null,null,0,"img",[["alt","Primetec"],["src","assets/imgs/logo.png"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.confirmClean()&&l),l}),null,null)),(n()(),l.Cb(15,0,null,null,1,"h3",[["class","ion-text-left"],["style","margin-bottom: 0;"]],null,null,null,null,null)),(n()(),l.Vb(-1,null,["Bienvenido a FX360"])),(n()(),l.Cb(17,0,null,null,12,"ion-content",[["scrollX","false"],["scrollY","false"]],null,null,null,C.ib,C.n)),l.Bb(18,49152,null,0,u.v,[l.j,l.p,l.F],{scrollX:[0,"scrollX"],scrollY:[1,"scrollY"]},null),(n()(),l.Cb(19,0,null,0,10,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],(function(n,e,t){var o=!0;return"ionTabButtonClick"===e&&(o=!1!==l.Nb(n,20).select(t.detail.tab)&&o),o}),C.Kb,C.P)),l.Bb(20,49152,null,1,u.xb,[u.Jb],null,null),l.Tb(335544320,1,{tabBar:0}),(n()(),l.Cb(22,0,null,0,7,"ion-tab-bar",[["slot","top"]],null,null,null,C.Ib,C.N)),l.Bb(23,49152,[[1,4]],0,u.vb,[l.j,l.p,l.F],null,null),(n()(),l.Cb(24,0,null,0,2,"ion-tab-button",[["selected","true"],["tab","login"]],null,null,null,C.Jb,C.O)),l.Bb(25,49152,null,0,u.wb,[l.j,l.p,l.F],{selected:[0,"selected"],tab:[1,"tab"]},null),(n()(),l.Vb(-1,0,[" Iniciar sesi\xf3n "])),(n()(),l.Cb(27,0,null,0,2,"ion-tab-button",[["tab","register"]],null,null,null,C.Jb,C.O)),l.Bb(28,49152,null,0,u.wb,[l.j,l.p,l.F],{tab:[0,"tab"]},null),(n()(),l.Vb(-1,0,[" Registrarse "]))],(function(n,e){var t=e.component;n(e,5,0,t.showCordovaFeatures),n(e,12,0,t.device.uuid),n(e,18,0,"false","false"),n(e,25,0,"true","login"),n(e,28,0,"register")}),null)}var P=l.yb("app-welcome",b,(function(n){return l.Xb(0,[(n()(),l.Cb(0,0,null,null,1,"app-welcome",[],null,null,null,_,L)),l.Bb(1,114688,null,0,b,[r.a,u.b,a.a,c.a,u.Lb],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),M=t("s7LF"),O=t("IheW"),k=t("Gvy4"),F=t("iInd"),R=t("ocFP"),B=t("xgBC"),I=t("biaL"),y=t("QURO"),j=t("v2G1"),D=t("t8sF"),S=t("s3Gz"),X=t("ZWll"),N=t("Pn9U"),V=t("sTnX"),T=t("niFY"),U=t("imvL"),z=t("wMzM"),E=t("AjED"),K=t("Q1xG"),G=t("PCNd");t.d(e,"WelcomePageModuleNgFactory",(function(){return J}));var J=l.zb(f,[],(function(n){return l.Kb([l.Lb(512,l.m,l.kb,[[8,[p.a,m.a,P]],[3,l.m],l.D]),l.Lb(4608,v.n,v.m,[l.z,[2,v.y]]),l.Lb(4608,M.o,M.o,[]),l.Lb(4608,u.c,u.c,[l.F,l.g]),l.Lb(4608,u.Ib,u.Ib,[u.c,l.m,l.w]),l.Lb(4608,u.Mb,u.Mb,[u.c,l.m,l.w]),l.Lb(4608,O.j,O.p,[v.c,l.I,O.n]),l.Lb(4608,O.q,O.q,[O.j,O.o]),l.Lb(5120,O.a,(function(n){return[n]}),[O.q]),l.Lb(4608,O.m,O.m,[]),l.Lb(6144,O.k,null,[O.m]),l.Lb(4608,O.i,O.i,[O.k]),l.Lb(6144,O.b,null,[O.i]),l.Lb(4608,O.g,O.l,[O.b,l.w]),l.Lb(4608,O.c,O.c,[O.g]),l.Lb(4608,M.c,M.c,[]),l.Lb(4608,a.a,a.a,[u.Rb]),l.Lb(4608,k.a,k.a,[F.n,R.a,a.a]),l.Lb(4608,r.a,r.a,[B.b]),l.Lb(4608,I.a,I.a,[O.c,k.a,r.a]),l.Lb(4608,y.a,y.a,[c.a,u.Lb]),l.Lb(4608,j.a,j.a,[u.b]),l.Lb(4608,D.a,D.a,[]),l.Lb(4608,S.a,S.a,[]),l.Lb(4608,X.a,X.a,[N.a,a.a,V.a]),l.Lb(4608,T.a,T.a,[U.a,O.c,r.a,k.a]),l.Lb(4608,z.a,z.a,[]),l.Lb(4608,E.a,E.a,[k.a,O.c]),l.Lb(1073742336,v.b,v.b,[]),l.Lb(1073742336,M.n,M.n,[]),l.Lb(1073742336,M.g,M.g,[]),l.Lb(1073742336,u.Fb,u.Fb,[]),l.Lb(1073742336,O.e,O.e,[]),l.Lb(1073742336,O.d,O.d,[]),l.Lb(1073742336,M.l,M.l,[]),l.Lb(1073742336,K.a,K.a,[]),l.Lb(1073742336,G.a,G.a,[]),l.Lb(1073742336,F.p,F.p,[[2,F.u],[2,F.n]]),l.Lb(1073742336,f,f,[]),l.Lb(256,O.n,"XSRF-TOKEN",[]),l.Lb(256,O.o,"X-XSRF-TOKEN",[]),l.Lb(1024,F.l,(function(){return[[{path:"",component:b,children:[{path:"",loadChildren:d},{path:"login",loadChildren:h},{path:"register",loadChildren:g}]}]]}),[])])}))}}]);