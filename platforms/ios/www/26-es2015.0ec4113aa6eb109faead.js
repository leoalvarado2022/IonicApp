(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{v0NQ:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J"),e=t("ocFP"),i=t("AjED"),o=t("sTnX"),b=t("Gvy4"),r=t("vf+8");class a{constructor(l,n,t,u,e,i,o){this.storeService=l,this.ticketsService=n,this.activatedRoute=t,this.loaderService=u,this.httpService=e,this.networkService=i,this.router=o,this.details=[],this.ticket=null,this.isOnline=!1,this.loadTicket=()=>{this.loaderService.startLoader();const l=this.storeService.getActiveCompany();this.ticketsService.getTicket(this.id,{user:l.user}).subscribe(l=>{const{ticket:n,details:t,states:u,workers:e,priorities:i}=l.data;this.ticket=n,this.details=[...t],this.storeService.setActiveTicket(this.ticket),this.storeService.setTicketStates(u),this.storeService.setTicketUsers(e),this.storeService.setTicketPriorities(i),this.loaderService.stopLoader()},l=>{this.loaderService.stopLoader(),this.httpService.errorHandler(l)})},this.reSync=l=>{this.loadTicket(),l.target.complete()},this.openForm=()=>{this.router.navigate(["home-page/ticket-form"])}}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.network$=this.networkService.getNetworkStatus().subscribe(l=>this.isOnline=l)}ngOnDestroy(){this.network$.unsubscribe()}ionViewWillEnter(){this.loadTicket()}}class c{}var s=t("FhNQ"),p=t("pMnS"),d=t("oBZk"),h=t("ZZ/e"),m=t("SVse"),g=t("o3E9");class f{constructor(){this.buildLink=l=>l.link&&"undefined"!==l.link?`https://drive.google.com/file/d/${l.link}/view?usp=sharing`:"#"}ngOnInit(){}}var C=u.Ab({encapsulation:0,styles:[[".ticket-detail-item[_ngcontent-%COMP%]{margin:5px;width:100%}.id[_ngcontent-%COMP%]{text-align:left;font-size:10px;color:var(--ion-color-medium-shade);padding:0}.name[_ngcontent-%COMP%]{text-align:right;font-size:10px;color:var(--ion-color-medium-shade);padding:0}.date[_ngcontent-%COMP%]{text-align:right;font-size:10px;color:var(--ion-color-medium-shade);padding:0;margin-top:15px}.totales[_ngcontent-%COMP%]{vertical-align:top;top:5px;position:relative}.title[_ngcontent-%COMP%]{font-size:14px;text-align:center}.value[_ngcontent-%COMP%]{font-size:14px;text-align:center;font-weight:bolder;color:#000}.icon[_ngcontent-%COMP%]{font-size:40px}.old[_ngcontent-%COMP%]{--background:var(--color-box-light)!important}ion-label[_ngcontent-%COMP%]{margin:0;padding-bottom:5px}ion-item-sliding[_ngcontent-%COMP%]{border-radius:10px!important}"]],data:{}});function k(l){return u.Xb(0,[(l()(),u.Cb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),u.Cb(1,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),u.Vb(2,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.buildLink(n.context.$implicit)),l(n,2,0,n.context.$implicit.name)}))}function v(l){return u.Xb(0,[(l()(),u.Cb(0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),u.Vb(-1,null,[" Adjuntos: "])),(l()(),u.rb(16777216,null,null,1,null,k)),u.Bb(3,278528,null,0,m.k,[u.X,u.T,u.x],{ngForOf:[0,"ngForOf"]},null),(l()(),u.rb(0,null,null,0))],(function(l,n){l(n,3,0,n.component.detail.attached)}),null)}function L(l){return u.Xb(0,[u.Pb(0,g.a,[u.z]),(l()(),u.Cb(1,0,null,null,21,"ion-card",[["class","ticket-detail-item"]],null,null,null,d.fb,d.g)),u.Bb(2,49152,null,0,h.n,[u.j,u.p,u.F],null,null),(l()(),u.Cb(3,0,null,0,6,"ion-item",[],null,null,null,d.ub,d.w)),u.Bb(4,49152,null,0,h.I,[u.j,u.p,u.F],null,null),(l()(),u.Cb(5,0,null,0,2,"ion-label",[],null,null,null,d.vb,d.A)),u.Bb(6,49152,null,0,h.O,[u.j,u.p,u.F],null,null),(l()(),u.Vb(7,0,["",""])),(l()(),u.Cb(8,0,null,0,1,"ion-icon",[["color","primary"],["name","document"],["slot","end"]],null,null,null,d.ob,d.t)),u.Bb(9,49152,null,0,h.D,[u.j,u.p,u.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.Cb(10,0,null,0,12,"ion-card-content",[],null,null,null,d.bb,d.h)),u.Bb(11,49152,null,0,h.o,[u.j,u.p,u.F],null,null),(l()(),u.Cb(12,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),u.Vb(13,null,["Fecha Compromiso: ",""])),u.Rb(14,1),(l()(),u.Cb(15,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),u.Vb(16,null,["Fecha Compromiso Interna: ",""])),u.Rb(17,1),(l()(),u.Cb(18,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(19,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Vb(20,null,["",""])),(l()(),u.rb(16777216,null,0,1,null,v)),u.Bb(22,16384,null,0,m.l,[u.X,u.T],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,9,0,"primary","document"),l(n,22,0,t.detail.attached)}),(function(l,n){var t=n.component;l(n,7,0,t.detail.assignedName);var e=u.Wb(n,13,0,l(n,14,0,u.Nb(n,0),t.detail.commitmentAt));l(n,13,0,e);var i=u.Wb(n,16,0,l(n,17,0,u.Nb(n,0),t.detail.commitmentInternAt));l(n,16,0,i),l(n,20,0,t.detail.observations||"Sin Observacion")}))}var F=t("KcSc"),x=t("X2tk"),B=t("iInd"),w=u.Ab({encapsulation:0,styles:[["ion-menu-button[_ngcontent-%COMP%]{--color:white}ion-title[_ngcontent-%COMP%]{color:#fff}ion-tab-button[_ngcontent-%COMP%]{font-size:16px;color:#fff;--color:white}.tab-selected[_ngcontent-%COMP%]{border-bottom:1px solid #fff!important}ion-tab-bar[_ngcontent-%COMP%]{height:45px;--background:var(--color-home-header-menu);--color:white}.text-white[_ngcontent-%COMP%]{color:#fff!important}"]],data:{}});function S(l){return u.Xb(0,[(l()(),u.Cb(0,0,null,null,31,null,null,null,null,null,null,null)),(l()(),u.Cb(1,0,null,null,30,"div",[["class","header-content background-color--header"]],null,null,null,null,null)),(l()(),u.Cb(2,0,null,null,7,"ion-row",[["class","text-white"]],null,null,null,d.Eb,d.J)),u.Bb(3,49152,null,0,h.kb,[u.j,u.p,u.F],null,null),(l()(),u.Cb(4,0,null,0,2,"ion-col",[],null,null,null,d.hb,d.m)),u.Bb(5,49152,null,0,h.u,[u.j,u.p,u.F],null,null),(l()(),u.Vb(6,0,["ID: ",""])),(l()(),u.Cb(7,0,null,0,2,"ion-col",[],null,null,null,d.hb,d.m)),u.Bb(8,49152,null,0,h.u,[u.j,u.p,u.F],null,null),(l()(),u.Vb(9,0,["Cliente: ",""])),(l()(),u.Cb(10,0,null,null,7,"ion-row",[["class","text-white"]],null,null,null,d.Eb,d.J)),u.Bb(11,49152,null,0,h.kb,[u.j,u.p,u.F],null,null),(l()(),u.Cb(12,0,null,0,2,"ion-col",[],null,null,null,d.hb,d.m)),u.Bb(13,49152,null,0,h.u,[u.j,u.p,u.F],null,null),(l()(),u.Vb(14,0,["Tipo: ",""])),(l()(),u.Cb(15,0,null,0,2,"ion-col",[],null,null,null,d.hb,d.m)),u.Bb(16,49152,null,0,h.u,[u.j,u.p,u.F],null,null),(l()(),u.Vb(17,0,["Producto: ",""])),(l()(),u.Cb(18,0,null,null,8,"ion-row",[["class","text-white"]],null,null,null,d.Eb,d.J)),u.Bb(19,49152,null,0,h.kb,[u.j,u.p,u.F],null,null),(l()(),u.Cb(20,0,null,0,3,"ion-col",[],null,null,null,d.hb,d.m)),u.Bb(21,49152,null,0,h.u,[u.j,u.p,u.F],null,null),(l()(),u.Vb(22,0,["Fecha Maxima: ",""])),u.Rb(23,1),(l()(),u.Cb(24,0,null,0,2,"ion-col",[],null,null,null,d.hb,d.m)),u.Bb(25,49152,null,0,h.u,[u.j,u.p,u.F],null,null),(l()(),u.Vb(26,0,["Estado: ",""])),(l()(),u.Cb(27,0,null,null,4,"ion-row",[["class","text-white"]],null,null,null,d.Eb,d.J)),u.Bb(28,49152,null,0,h.kb,[u.j,u.p,u.F],null,null),(l()(),u.Cb(29,0,null,0,2,"ion-col",[],null,null,null,d.hb,d.m)),u.Bb(30,49152,null,0,h.u,[u.j,u.p,u.F],null,null),(l()(),u.Vb(31,0,["Referencia: ",""]))],null,(function(l,n){var t=n.component;l(n,6,0,t.ticket.id),l(n,9,0,t.ticket.client),l(n,14,0,t.ticket.type),l(n,17,0,"pendiente");var e=u.Wb(n,22,0,l(n,23,0,u.Nb(n.parent,0),t.ticket.maxResolution));l(n,22,0,e),l(n,26,0,t.ticket.state),l(n,31,0,t.ticket.reference)}))}function j(l){return u.Xb(0,[(l()(),u.Cb(0,0,null,null,1,"app-ticket-detail-card",[],null,null,null,L,C)),u.Bb(1,114688,null,0,f,[],{detail:[0,"detail"]},null)],(function(l,n){l(n,1,0,n.context.$implicit)}),null)}function O(l){return u.Xb(0,[(l()(),u.Cb(0,0,null,null,7,null,null,null,null,null,null,null)),(l()(),u.Cb(1,0,null,null,6,"ion-virtual-scroll",[],null,null,null,d.Pb,d.U)),u.Bb(2,835584,null,3,h.Eb,[u.F,u.x,u.p],{items:[0,"items"]},null),u.Tb(335544320,1,{itmTmp:0}),u.Tb(335544320,2,{hdrTmp:0}),u.Tb(335544320,3,{ftrTmp:0}),(l()(),u.rb(16777216,null,0,1,null,j)),u.Bb(7,16384,[[1,4]],0,h.Sb,[u.T,u.X],null,null)],(function(l,n){l(n,2,0,n.component.details)}),null)}function T(l){return u.Xb(0,[u.Pb(0,g.a,[u.z]),(l()(),u.Cb(1,0,null,null,16,"ion-header",[],null,null,null,d.nb,d.s)),u.Bb(2,49152,null,0,h.C,[u.j,u.p,u.F],null,null),(l()(),u.Cb(3,0,null,0,14,"ion-toolbar",[["class","background-color-header"]],null,null,null,d.Ob,d.T)),u.Bb(4,49152,null,0,h.Db,[u.j,u.p,u.F],null,null),(l()(),u.Cb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,d.ab,d.f)),u.Bb(6,49152,null,0,h.m,[u.j,u.p,u.F],null,null),(l()(),u.Cb(7,0,null,0,2,"ion-back-button",[["class","header-back-button"],["text",""]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Nb(l,9).onClick(t)&&e),e}),d.X,d.c)),u.Bb(8,49152,null,0,h.h,[u.j,u.p,u.F],{text:[0,"text"]},null),u.Bb(9,16384,null,0,h.i,[[2,h.jb],h.Jb],null,null),(l()(),u.Cb(10,0,null,0,3,"ion-title",[],null,null,null,d.Nb,d.S)),u.Bb(11,49152,null,0,h.Bb,[u.j,u.p,u.F],null,null),(l()(),u.Cb(12,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Listado Detalles"])),(l()(),u.Cb(14,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,d.ab,d.f)),u.Bb(15,49152,null,0,h.m,[u.j,u.p,u.F],null,null),(l()(),u.Cb(16,0,null,0,1,"app-notifications",[],null,null,null,F.b,F.a)),u.Bb(17,114688,null,0,x.a,[],null,null),(l()(),u.rb(16777216,null,null,1,null,S)),u.Bb(19,16384,null,0,m.l,[u.X,u.T],{ngIf:[0,"ngIf"]},null),(l()(),u.Cb(20,0,null,null,13,"ion-content",[],null,null,null,d.ib,d.n)),u.Bb(21,49152,null,0,h.v,[u.j,u.p,u.F],null,null),(l()(),u.Cb(22,0,null,0,3,"ion-refresher",[["class","refresher"],["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,t){var u=!0;return"ionRefresh"===n&&(u=!1!==l.component.reSync(t)&&u),u}),d.Db,d.H)),u.Bb(23,49152,null,0,h.eb,[u.j,u.p,u.F],null,null),(l()(),u.Cb(24,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Pull to refresh"],["refreshingSpinner","circles"],["refreshingText","Sincronizando..."]],null,null,null,d.Cb,d.I)),u.Bb(25,49152,null,0,h.fb,[u.j,u.p,u.F],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(l()(),u.rb(16777216,null,0,1,null,O)),u.Bb(27,16384,null,0,m.l,[u.X,u.T],{ngIf:[0,"ngIf"]},null),(l()(),u.Cb(28,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,d.lb,d.p)),u.Bb(29,49152,null,0,h.x,[u.j,u.p,u.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.Cb(30,0,null,0,3,"ion-fab-button",[["color","primary"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.openForm()&&u),u}),d.kb,d.q)),u.Bb(31,49152,null,0,h.y,[u.j,u.p,u.F],{color:[0,"color"],disabled:[1,"disabled"]},null),(l()(),u.Cb(32,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,d.ob,d.t)),u.Bb(33,49152,null,0,h.D,[u.j,u.p,u.F],{name:[0,"name"]},null)],(function(l,n){var t=n.component;l(n,8,0,""),l(n,17,0),l(n,19,0,t.ticket),l(n,25,0,"arrow-dropdown","Pull to refresh","circles","Sincronizando..."),l(n,27,0,t.details.length>0),l(n,29,0,"end","bottom"),l(n,31,0,"primary",!t.isOnline),l(n,33,0,"add")}),null)}function P(l){return u.Xb(0,[(l()(),u.Cb(0,0,null,null,1,"app-ticket-details-list",[],null,null,null,T,w)),u.Bb(1,245760,null,0,a,[e.a,i.a,B.a,o.a,b.a,r.a,B.n],null,null)],(function(l,n){l(n,1,0)}),null)}var M=u.yb("app-ticket-details-list",a,P,{},{},[]),I=t("s7LF"),X=t("IheW"),z=t("aVMi"),_=t("1dSU"),V=t("xgBC"),y=t("biaL"),R=t("QURO"),N=t("ElRG"),E=t("v2G1"),D=t("t8sF"),A=t("s3Gz"),J=t("ZWll"),W=t("Pn9U"),$=t("niFY"),G=t("imvL"),U=t("wMzM"),q=t("Q1xG"),K=t("PCNd");t.d(n,"TicketDetailsListPageModuleNgFactory",(function(){return Q}));var Q=u.zb(c,[],(function(l){return u.Kb([u.Lb(512,u.m,u.kb,[[8,[s.a,p.a,M]],[3,u.m],u.D]),u.Lb(4608,m.n,m.m,[u.z,[2,m.y]]),u.Lb(4608,I.o,I.o,[]),u.Lb(4608,h.c,h.c,[u.F,u.g]),u.Lb(4608,h.Ib,h.Ib,[h.c,u.m,u.w]),u.Lb(4608,h.Mb,h.Mb,[h.c,u.m,u.w]),u.Lb(4608,X.j,X.p,[m.c,u.I,X.n]),u.Lb(4608,X.q,X.q,[X.j,X.o]),u.Lb(5120,X.a,(function(l){return[l]}),[X.q]),u.Lb(4608,X.m,X.m,[]),u.Lb(6144,X.k,null,[X.m]),u.Lb(4608,X.i,X.i,[X.k]),u.Lb(6144,X.b,null,[X.i]),u.Lb(4608,X.g,X.l,[X.b,u.w]),u.Lb(4608,X.c,X.c,[X.g]),u.Lb(4608,I.c,I.c,[]),u.Lb(4608,z.a,z.a,[h.Rb]),u.Lb(4608,b.a,b.a,[B.n,e.a,z.a]),u.Lb(4608,_.a,_.a,[V.b]),u.Lb(4608,y.a,y.a,[X.c,b.a,_.a]),u.Lb(4608,R.a,R.a,[N.a,h.Lb]),u.Lb(4608,E.a,E.a,[h.b]),u.Lb(4608,D.a,D.a,[]),u.Lb(4608,A.a,A.a,[]),u.Lb(4608,J.a,J.a,[W.a,z.a,o.a]),u.Lb(4608,$.a,$.a,[G.a,X.c,_.a,b.a]),u.Lb(4608,U.a,U.a,[]),u.Lb(4608,i.a,i.a,[b.a,X.c]),u.Lb(1073742336,m.b,m.b,[]),u.Lb(1073742336,I.n,I.n,[]),u.Lb(1073742336,I.g,I.g,[]),u.Lb(1073742336,h.Fb,h.Fb,[]),u.Lb(1073742336,X.e,X.e,[]),u.Lb(1073742336,X.d,X.d,[]),u.Lb(1073742336,I.l,I.l,[]),u.Lb(1073742336,q.a,q.a,[]),u.Lb(1073742336,K.a,K.a,[]),u.Lb(1073742336,B.p,B.p,[[2,B.u],[2,B.n]]),u.Lb(1073742336,c,c,[]),u.Lb(256,X.n,"XSRF-TOKEN",[]),u.Lb(256,X.o,"X-XSRF-TOKEN",[]),u.Lb(1024,B.l,(function(){return[[{path:":id",component:a}]]}),[])])}))}}]);