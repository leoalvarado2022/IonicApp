(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{BnaM:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=e("mrSG"),i=e("iInd"),a=e("y2UQ"),r=e("ZZ/e"),s=e("s7LF"),o=e("imvL"),b=e("niFY"),c=e("aVMi"),d=e("Gvy4"),h=e("sTnX"),m=e("ocFP");class p{constructor(l,n,e,t,u,i,a,r,o){this.modalController=l,this.formBuilder=n,this.authService=e,this.contractDetailService=t,this.syncService=u,this.toastService=i,this.httpService=a,this.loaderService=r,this.storeService=o,this.customActionSheetOptions={header:"Calidades",keyboardClose:!1,backdropDismiss:!1},this.isSaving=!1,this.closeModal=(l=!1)=>{this.qualityForm.reset(),this.modalController.dismiss(l)},this.submit=()=>{if(this.qualityForm.valid&&!this.isSaving){this.isSaving=!0,delete this.costCenter.active;const l=Object.assign({},this.qualityForm.value,{costCenter:this.costCenter});l.calibers=l.calibers.map(l=>Object.assign({},l,{percentage:""===l.percentage?0:l.percentage})).filter(l=>l.percentage>0),this.storeQuality(l)}else this.isSaving=!1},this.getCaliberName=l=>{const n=this.calibers.find(n=>n.id===l.get("caliber").value);return n?n.name:"NOMBRE CALIBRE"},this.validateCalibers=l=>{const n=l.get("calibers");let e=0;for(const t of n.controls){const l=t.get("percentage").value?t.get("percentage").value:0;l&&(e+=l)}return e<100||e>100?{wrongPercentage:!0}:null},this.getTotal=()=>{const l=this.qualityForm.get("calibers");let n=0;for(const e of l.controls){const l=e.get("percentage").value?e.get("percentage").value:0;l&&l>0&&(n+=l)}return n},this.getSelectedQuality=()=>{if(this.qualities){const l=this.qualityForm.get("quality.quality").value,n=this.qualities.find(n=>n.id===l);return n?n.name:""}return""},this.loadCalibers=()=>{this.calibers=this.storeService.getCalibers(),this.qualities=this.storeService.getQualities(),this.filteredCalibers=this.calibers.filter(l=>l.species===this.costCenter.species);const l=this.qualityForm.get("calibers");for(const n of this.filteredCalibers){let e=null;this.qualityEstimateDetail&&(e=this.qualityEstimateDetail.find(l=>l.caliber===n.id));const t=this.formBuilder.group({id:[e?e.id:0,s.m.required],quality:[e?e.qualityEstimate:0,s.m.required],caliber:[n.id,s.m.required],percentage:[{value:e?e.value:"",disabled:this.isView},[s.m.max(100),s.m.min(0)]],temp:[1]});l.push(t)}}}ngOnInit(){this.userCompany=this.storeService.getActiveCompany(),this.qualityForm=this.formBuilder.group(this.isView?{quality:this.formBuilder.group({id:[this.qualityEstimate.id,s.m.required],costCenter:[this.costCenter.id,s.m.required],user:[this.userCompany.user,s.m.required],quality:[{value:this.qualityEstimate.quality,disabled:!0},s.m.required],exportPercentage:[{value:this.qualityEstimate.exportPercentage,disabled:!0},[s.m.required,s.m.max(100),s.m.min(0)]],temp:[1]}),calibers:this.formBuilder.array([])}:{quality:this.formBuilder.group({id:[0,s.m.required],costCenter:[this.costCenter.id,s.m.required],user:[this.userCompany.user,s.m.required],quality:[this.previous?this.previous.quality:"",s.m.required],exportPercentage:[this.previous?this.previous.exportPercentage:"",[s.m.required,s.m.max(100),s.m.min(0)]],temp:[1]}),calibers:this.formBuilder.array([])},{validator:this.validateCalibers}),this.loadCalibers()}storeQuality(l){this.loaderService.startLoader("Guardando estimacion..."),this.contractDetailService.storeQuality(l).subscribe(l=>{this.isSaving=!1,this.loaderService.stopLoader(),this.closeModal(!0)},l=>{this.isSaving=!1,this.loaderService.stopLoader(),this.httpService.errorHandler(l)})}}var g=e("v2G1"),C=e("vf+8");class v{constructor(l,n,e,t,i,a,r,s){this.router=l,this.contractDetailService=n,this.modalController=e,this.alertService=t,this.httpService=i,this.loaderService=a,this.networkService=r,this.storeService=s,this.checkButton=()=>"/home-page/quality-estimate"===this.currentUrl,this.openForm=(l=null)=>u.__awaiter(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:p,componentProps:{costCenter:this.costCenter,qualityEstimate:l,qualityEstimateDetail:l?this.qualityEstimateDetail.filter(n=>n.qualityEstimate===l.id):[],isView:null!==l,previous:this.qualityEstimate.length>0?this.qualityEstimate[0]:null},backdropDismiss:!1,keyboardClose:!1,cssClass:"full-screen-modal"});return n.onDidDismiss().then(l=>{l.data&&this.reloadList()}),yield n.present()})),this.searchQuality=l=>{this.filteredQualityEstimate=l?this.qualityEstimate.filter(n=>n.userName.toLowerCase().includes(l.toLowerCase())||n.qualityName.toLowerCase().includes(l.toLowerCase())||n.exportPercentage===parseInt(l,10)):this.qualityEstimate},this.cancelSearch=()=>{this.filteredQualityEstimate=this.qualityEstimate},this.viewQuality=l=>u.__awaiter(this,void 0,void 0,(function*(){yield this.openForm(l)})),this.deleteQuality=l=>u.__awaiter(this,void 0,void 0,(function*(){if(yield this.alertService.confirmAlert("Desea borrar esta estimacion de calidad?")){const n=Object.assign({},l,{id:-l.id});delete this.costCenter.active,this.storeQuality({costCenter:this.costCenter,quality:n})}})),this.reloadList=()=>{this.loaderService.startLoader("Cargando estimaciones de calidad"),this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString()).subscribe(l=>{this.storeService.setContractData(l.data),this.loaderService.stopLoader()},l=>{this.loaderService.stopLoader()})},this.getItemDetails=l=>this.qualityEstimateDetail.filter(n=>n.qualityEstimate===l),this.storeQuality=l=>{this.loaderService.startLoader("Borrando estimacion de calidad"),this.contractDetailService.storeQuality(l).subscribe(l=>{this.reloadList(),this.loaderService.stopLoader()},l=>{this.loaderService.stopLoader(),this.httpService.errorHandler(l)})},this.isOnline$=this.networkService.getNetworkStatus().subscribe(l=>{this.isOnline=l})}ngOnInit(){this.router$=this.router.events.subscribe(l=>{l instanceof i.d&&(this.currentUrl=l.url)}),this.store$=this.storeService.stateChanged.subscribe(l=>{this.costCenter=this.storeService.getCostCenter(),this.qualityEstimate=this.storeService.getQualityEstimate(),this.filteredQualityEstimate=this.storeService.getQualityEstimate(),this.qualityEstimateDetail=this.storeService.getQualityEstimateDetail()})}ngOnDestroy(){this.isOnline$.unsubscribe(),this.router$.unsubscribe(),this.store$.unsubscribe()}}class f{}var y=e("FhNQ"),B=e("pMnS"),q=e("yXaf"),S=e("cbxp"),F=e("oBZk"),L=e("KcSc"),x=e("X2tk"),E=e("SVse"),N=t.Ab({encapsulation:0,styles:[[""]],data:{}});function I(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t.Cb(1,0,null,null,3,"div",[["class","card-sli"]],null,null,null,null,null)),(l()(),t.Cb(2,0,null,null,2,"div",[["class","card-sli-back"]],null,null,null,null,null)),(l()(),t.Cb(3,0,null,null,1,"app-quality-estimate-item",[],null,[[null,"itemDelete"],[null,"itemSelected"]],(function(l,n,e){var t=!0,u=l.component;return"itemDelete"===n&&(t=!1!==u.deleteQuality(l.context.$implicit)&&t),"itemSelected"===n&&(t=!1!==u.viewQuality(l.context.$implicit)&&t),t}),q.b,q.a)),t.Bb(4,114688,null,0,S.a,[m.a],{costCenter:[0,"costCenter"],item:[1,"item"],details:[2,"details"],isOld:[3,"isOld"],slideDisabled:[4,"slideDisabled"]},{itemSelected:"itemSelected",itemDelete:"itemDelete"})],(function(l,n){var e=n.component;l(n,4,0,e.costCenter,n.context.$implicit,e.getItemDetails(n.context.$implicit.id),n.context.index>0,!1)}),null)}function j(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,6,null,null,null,null,null,null,null)),(l()(),t.Cb(1,0,null,null,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,F.lb,F.p)),t.Bb(2,49152,null,0,r.x,[t.j,t.p,t.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.Cb(3,0,null,0,3,"ion-fab-button",[["color","success"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.openForm()&&t),t}),F.kb,F.q)),t.Bb(4,49152,null,0,r.y,[t.j,t.p,t.F],{color:[0,"color"],disabled:[1,"disabled"]},null),(l()(),t.Cb(5,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,F.ob,F.t)),t.Bb(6,49152,null,0,r.D,[t.j,t.p,t.F],{name:[0,"name"]},null)],(function(l,n){var e=n.component;l(n,2,0,"end","bottom"),l(n,4,0,"success",!e.costCenter||!e.isOnline),l(n,6,0,"add")}),null)}function w(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,16,"ion-header",[],null,null,null,F.nb,F.s)),t.Bb(1,49152,null,0,r.C,[t.j,t.p,t.F],null,null),(l()(),t.Cb(2,0,null,0,14,"ion-toolbar",[["class","background-color-header"]],null,null,null,F.Ob,F.T)),t.Bb(3,49152,null,0,r.Db,[t.j,t.p,t.F],null,null),(l()(),t.Cb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,F.ab,F.f)),t.Bb(5,49152,null,0,r.m,[t.j,t.p,t.F],null,null),(l()(),t.Cb(6,0,null,0,2,"ion-back-button",[["class","white"],["text",""]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Nb(l,8).onClick(e)&&u),u}),F.X,F.c)),t.Bb(7,49152,null,0,r.h,[t.j,t.p,t.F],{text:[0,"text"]},null),t.Bb(8,16384,null,0,r.i,[[2,r.jb],r.Jb],null,null),(l()(),t.Cb(9,0,null,0,3,"ion-title",[["class","white"]],null,null,null,F.Nb,F.S)),t.Bb(10,49152,null,0,r.Bb,[t.j,t.p,t.F],null,null),(l()(),t.Cb(11,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Estimaci\xf3n de Calidad"])),(l()(),t.Cb(13,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,F.ab,F.f)),t.Bb(14,49152,null,0,r.m,[t.j,t.p,t.F],null,null),(l()(),t.Cb(15,0,null,0,1,"app-notifications",[],null,null,null,L.b,L.a)),t.Bb(16,114688,null,0,x.a,[],null,null),(l()(),t.Cb(17,0,null,null,3,"ion-searchbar",[["animated",""],["class","production"],["placeholder","Buscar..."],["showCancelButton","never"]],null,[[null,"ionChange"],[null,"ionClear"],[null,"ionBlur"]],(function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.Nb(l,20)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Nb(l,20)._handleInputEvent(e.target)&&u),"ionChange"===n&&(u=!1!==i.searchQuality(e.target.value)&&u),"ionClear"===n&&(u=!1!==i.cancelSearch()&&u),u}),F.Fb,F.K)),t.Sb(5120,null,s.h,(function(l){return[l]}),[r.Qb]),t.Bb(19,49152,null,0,r.lb,[t.j,t.p,t.F],{animated:[0,"animated"],placeholder:[1,"placeholder"],showCancelButton:[2,"showCancelButton"]},null),t.Bb(20,16384,null,0,r.Qb,[t.p],null,null),(l()(),t.Cb(21,0,null,null,5,"ion-content",[["class","content"]],null,null,null,F.ib,F.n)),t.Bb(22,49152,null,0,r.v,[t.j,t.p,t.F],null,null),(l()(),t.rb(16777216,null,0,1,null,I)),t.Bb(24,278528,null,0,E.k,[t.X,t.T,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(16777216,null,0,1,null,j)),t.Bb(26,16384,null,0,E.l,[t.X,t.T],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,7,0,""),l(n,16,0),l(n,19,0,"","Buscar...","never"),l(n,24,0,e.filteredQualityEstimate),l(n,26,0,e.checkButton())}),null)}function D(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,1,"app-quality-estimate",[],null,null,null,w,N)),t.Bb(1,245760,null,0,v,[i.n,a.a,r.Ib,g.a,d.a,h.a,C.a,m.a],null,null)],(function(l,n){l(n,1,0)}),null)}var O=t.yb("app-quality-estimate",v,D,{},{},[]),k=t.Ab({encapsulation:0,styles:[[".errorMsg[_ngcontent-%COMP%]{color:red;padding-left:15px}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{min-width:50%}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{text-align:right}.total-padding[_ngcontent-%COMP%]{--padding-end:37px}"]],data:{}});function P(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,2,"ion-select-option",[],null,null,null,F.Gb,F.M)),t.Bb(1,49152,null,0,r.pb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Vb(2,0,[" "," "]))],(function(l,n){l(n,1,0,n.context.$implicit.id)}),(function(l,n){l(n,2,0,n.context.$implicit.name)}))}function X(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Cb(1,0,null,null,1,"span",[["class","errorMsg"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Seleccione la Calidad"]))],null,null)}function Q(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Cb(1,0,null,null,1,"span",[["class","errorMsg"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["El porcentaje maximo es 100"]))],null,null)}function V(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Cb(1,0,null,null,1,"span",[["class","errorMsg"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["El porcentaje minimo es 0"]))],null,null)}function T(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Cb(1,0,null,null,1,"span",[["class","errorMsg"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["El porcentaje maximo es 100"]))],null,null)}function M(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Cb(1,0,null,null,1,"span",[["class","errorMsg"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["El porcentaje minimo es 0"]))],null,null)}function _(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,19,null,null,null,null,null,null,null)),t.Bb(1,212992,null,0,s.f,[[3,s.a],[8,null],[8,null]],{name:[0,"name"]},null),t.Sb(2048,null,s.a,null,[s.f]),t.Bb(3,16384,null,0,s.k,[[4,s.a]],null,null),(l()(),t.Cb(4,0,null,null,11,"ion-item",[],null,null,null,F.ub,F.w)),t.Bb(5,49152,null,0,r.I,[t.j,t.p,t.F],null,null),(l()(),t.Cb(6,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,F.vb,F.A)),t.Bb(7,49152,null,0,r.O,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Vb(8,0,["",""])),(l()(),t.Cb(9,0,null,0,6,"ion-input",[["clearInput",""],["formControlName","percentage"],["placeholder","Ingrese el %"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0;return"ionBlur"===n&&(u=!1!==t.Nb(l,10)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Nb(l,10)._handleIonChange(e.target)&&u),u}),F.qb,F.v)),t.Bb(10,16384,null,0,r.Kb,[t.p],null,null),t.Sb(1024,null,s.h,(function(l){return[l]}),[r.Kb]),t.Bb(12,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.p]],{name:[0,"name"]},null),t.Sb(2048,null,s.i,null,[s.d]),t.Bb(14,16384,null,0,s.j,[[4,s.i]],null,null),t.Bb(15,49152,null,0,r.H,[t.j,t.p,t.F],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(l()(),t.rb(16777216,null,null,1,null,T)),t.Bb(17,16384,null,0,E.l,[t.X,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(16777216,null,null,1,null,M)),t.Bb(19,16384,null,0,E.l,[t.X,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(0,null,null,0))],(function(l,n){var e=n.context.index.toString();l(n,1,0,e),l(n,7,0,"fixed"),l(n,12,0,"percentage"),l(n,15,0,"","Ingrese el %","number");var t=n.context.$implicit.get("percentage").hasError("max");l(n,17,0,t);var u=n.context.$implicit.get("percentage").hasError("min");l(n,19,0,u)}),(function(l,n){l(n,8,0,n.component.getCaliberName(n.context.$implicit)),l(n,9,0,t.Nb(n,14).ngClassUntouched,t.Nb(n,14).ngClassTouched,t.Nb(n,14).ngClassPristine,t.Nb(n,14).ngClassDirty,t.Nb(n,14).ngClassValid,t.Nb(n,14).ngClassInvalid,t.Nb(n,14).ngClassPending)}))}function $(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Cb(1,0,null,null,1,"span",[["class","errorMsg"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["El porcentaje total debe sumar 100%"]))],null,null)}function A(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),t.Cb(1,0,null,null,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.submit()&&t),t}),F.Z,F.e)),t.Bb(2,49152,null,0,r.l,[t.j,t.p,t.F],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),t.Vb(-1,0,[" Guardar "]))],(function(l,n){var e=n.component;l(n,2,0,"primary",e.qualityForm.invalid||e.isSaving,"block")}),null)}function K(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,12,"ion-header",[],null,null,null,F.nb,F.s)),t.Bb(1,49152,null,0,r.C,[t.j,t.p,t.F],null,null),(l()(),t.Cb(2,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,F.Ob,F.T)),t.Bb(3,49152,null,0,r.Db,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Cb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,F.ab,F.f)),t.Bb(5,49152,null,0,r.m,[t.j,t.p,t.F],null,null),(l()(),t.Cb(6,0,null,0,3,"ion-button",[["color","secondary"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.closeModal()&&t),t}),F.Z,F.e)),t.Bb(7,49152,null,0,r.l,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Cb(8,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"],["style","color:white;"]],null,null,null,F.ob,F.t)),t.Bb(9,49152,null,0,r.D,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Cb(10,0,null,0,2,"ion-title",[],null,null,null,F.Nb,F.S)),t.Bb(11,49152,null,0,r.Bb,[t.j,t.p,t.F],null,null),(l()(),t.Vb(12,0,[""," Calidad"])),(l()(),t.Cb(13,0,null,null,74,"ion-content",[],null,null,null,F.ib,F.n)),t.Bb(14,49152,null,0,r.v,[t.j,t.p,t.F],null,null),(l()(),t.Cb(15,0,null,0,72,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var u=!0;return"submit"===n&&(u=!1!==t.Nb(l,17).onSubmit(e)&&u),"reset"===n&&(u=!1!==t.Nb(l,17).onReset()&&u),u}),null,null)),t.Bb(16,16384,null,0,s.q,[],null,null),t.Bb(17,540672,null,0,s.e,[[8,null],[8,null]],{form:[0,"form"]},null),t.Sb(2048,null,s.a,null,[s.e]),t.Bb(19,16384,null,0,s.k,[[4,s.a]],null,null),(l()(),t.Cb(20,0,null,null,38,null,null,null,null,null,null,null)),t.Bb(21,212992,null,0,s.f,[[3,s.a],[8,null],[8,null]],{name:[0,"name"]},null),t.Sb(2048,null,s.a,null,[s.f]),t.Bb(23,16384,null,0,s.k,[[4,s.a]],null,null),(l()(),t.Cb(24,0,null,null,13,"ion-item",[],null,null,null,F.ub,F.w)),t.Bb(25,49152,null,0,r.I,[t.j,t.p,t.F],null,null),(l()(),t.Cb(26,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,F.vb,F.A)),t.Bb(27,49152,null,0,r.O,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Vb(-1,0,["Calidad"])),(l()(),t.Cb(29,0,null,0,8,"ion-select",[["cancelText","Cancelar"],["formControlName","quality"],["interface","action-sheet"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0;return"ionBlur"===n&&(u=!1!==t.Nb(l,30)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Nb(l,30)._handleChangeEvent(e.target)&&u),u}),F.Hb,F.L)),t.Bb(30,16384,null,0,r.Pb,[t.p],null,null),t.Sb(1024,null,s.h,(function(l){return[l]}),[r.Pb]),t.Bb(32,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.p]],{name:[0,"name"]},null),t.Sb(2048,null,s.i,null,[s.d]),t.Bb(34,16384,null,0,s.j,[[4,s.i]],null,null),t.Bb(35,49152,null,0,r.ob,[t.j,t.p,t.F],{cancelText:[0,"cancelText"],interface:[1,"interface"],interfaceOptions:[2,"interfaceOptions"],selectedText:[3,"selectedText"]},null),(l()(),t.rb(16777216,null,0,1,null,P)),t.Bb(37,278528,null,0,E.k,[t.X,t.T,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(16777216,null,null,2,null,X)),t.Bb(39,16384,null,0,E.l,[t.X,t.T],{ngIf:[0,"ngIf"]},null),t.Ob(40,2),(l()(),t.Cb(41,0,null,null,11,"ion-item",[],null,null,null,F.ub,F.w)),t.Bb(42,49152,null,0,r.I,[t.j,t.p,t.F],null,null),(l()(),t.Cb(43,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,F.vb,F.A)),t.Bb(44,49152,null,0,r.O,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Vb(-1,0,["% de Exportaci\xf3n"])),(l()(),t.Cb(46,0,null,0,6,"ion-input",[["clearInput",""],["formControlName","exportPercentage"],["placeholder","Ingrese el %"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0;return"ionBlur"===n&&(u=!1!==t.Nb(l,47)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Nb(l,47)._handleIonChange(e.target)&&u),u}),F.qb,F.v)),t.Bb(47,16384,null,0,r.Kb,[t.p],null,null),t.Sb(1024,null,s.h,(function(l){return[l]}),[r.Kb]),t.Bb(49,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.p]],{name:[0,"name"]},null),t.Sb(2048,null,s.i,null,[s.d]),t.Bb(51,16384,null,0,s.j,[[4,s.i]],null,null),t.Bb(52,49152,null,0,r.H,[t.j,t.p,t.F],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(l()(),t.rb(16777216,null,null,2,null,Q)),t.Bb(54,16384,null,0,E.l,[t.X,t.T],{ngIf:[0,"ngIf"]},null),t.Ob(55,2),(l()(),t.rb(16777216,null,null,2,null,V)),t.Bb(57,16384,null,0,E.l,[t.X,t.T],{ngIf:[0,"ngIf"]},null),t.Ob(58,2),(l()(),t.Cb(59,0,null,null,24,null,null,null,null,null,null,null)),t.Bb(60,212992,null,0,s.b,[[3,s.a],[8,null],[8,null]],{name:[0,"name"]},null),t.Sb(2048,null,s.a,null,[s.b]),t.Bb(62,16384,null,0,s.k,[[4,s.a]],null,null),(l()(),t.Cb(63,0,null,null,20,"ion-list",[],null,null,null,F.xb,F.B)),t.Bb(64,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Cb(65,0,null,0,2,"ion-list-header",[],null,null,null,F.wb,F.C)),t.Bb(66,49152,null,0,r.Q,[t.j,t.p,t.F],null,null),(l()(),t.Vb(-1,0,[" Datos Calibres "])),(l()(),t.rb(16777216,null,0,1,null,_)),t.Bb(69,278528,null,0,E.k,[t.X,t.T,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Cb(70,0,null,0,11,"ion-item",[],null,null,null,F.ub,F.w)),t.Bb(71,49152,null,0,r.I,[t.j,t.p,t.F],null,null),(l()(),t.Cb(72,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,F.vb,F.A)),t.Bb(73,49152,null,0,r.O,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Vb(-1,0,["Total"])),(l()(),t.Cb(75,0,null,0,6,"ion-input",[["clearInput",""],["readonly","true"],["type","number"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0;return"ionBlur"===n&&(u=!1!==t.Nb(l,81)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Nb(l,81)._handleIonChange(e.target)&&u),u}),F.qb,F.v)),t.Sb(5120,null,s.h,(function(l){return[l]}),[r.Kb]),t.Sb(512,null,E.v,E.w,[t.x,t.y,t.p,t.L]),t.Bb(78,278528,null,0,E.j,[E.v],{ngClass:[0,"ngClass"]},null),t.Qb(79,{"total-padding":0}),t.Bb(80,49152,null,0,r.H,[t.j,t.p,t.F],{clearInput:[0,"clearInput"],disabled:[1,"disabled"],readonly:[2,"readonly"],type:[3,"type"],value:[4,"value"]},null),t.Bb(81,16384,null,0,r.Kb,[t.p],null,null),(l()(),t.rb(16777216,null,0,1,null,$)),t.Bb(83,16384,null,0,E.l,[t.X,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.Cb(84,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(85,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(16777216,null,null,1,null,A)),t.Bb(87,16384,null,0,E.l,[t.X,t.T],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"primary"),l(n,7,0,"secondary"),l(n,9,0,"arrow-back"),l(n,17,0,e.qualityForm),l(n,21,0,"quality"),l(n,27,0,"fixed"),l(n,32,0,"quality"),l(n,35,0,"Cancelar","action-sheet",e.customActionSheetOptions,e.getSelectedQuality()),l(n,37,0,e.qualities);var t=e.qualityForm.get(l(n,40,0,"quality","quality")).hasError("required");l(n,39,0,t),l(n,44,0,"fixed"),l(n,49,0,"exportPercentage"),l(n,52,0,"","Ingrese el %","number");var u=e.qualityForm.get(l(n,55,0,"quality","exportPercentage")).hasError("max");l(n,54,0,u);var i=e.qualityForm.get(l(n,58,0,"quality","exportPercentage")).hasError("min");l(n,57,0,i),l(n,60,0,"calibers"),l(n,69,0,e.qualityForm.get("calibers").controls),l(n,73,0,"fixed");var a=l(n,79,0,!e.isView);l(n,78,0,a),l(n,80,0,"",e.isView,"true","number",e.getTotal()),l(n,83,0,!e.isView&&e.qualityForm.hasError("wrongPercentage")),l(n,87,0,!e.qualityEstimate)}),(function(l,n){l(n,12,0,n.component.qualityEstimate?"Ver":"Registrar"),l(n,15,0,t.Nb(n,19).ngClassUntouched,t.Nb(n,19).ngClassTouched,t.Nb(n,19).ngClassPristine,t.Nb(n,19).ngClassDirty,t.Nb(n,19).ngClassValid,t.Nb(n,19).ngClassInvalid,t.Nb(n,19).ngClassPending),l(n,29,0,t.Nb(n,34).ngClassUntouched,t.Nb(n,34).ngClassTouched,t.Nb(n,34).ngClassPristine,t.Nb(n,34).ngClassDirty,t.Nb(n,34).ngClassValid,t.Nb(n,34).ngClassInvalid,t.Nb(n,34).ngClassPending),l(n,46,0,t.Nb(n,51).ngClassUntouched,t.Nb(n,51).ngClassTouched,t.Nb(n,51).ngClassPristine,t.Nb(n,51).ngClassDirty,t.Nb(n,51).ngClassValid,t.Nb(n,51).ngClassInvalid,t.Nb(n,51).ngClassPending)}))}function U(l){return t.Xb(0,[(l()(),t.Cb(0,0,null,null,1,"app-quality-estimate-form",[],null,null,null,K,k)),t.Bb(1,114688,null,0,p,[r.Ib,s.c,o.a,a.a,b.a,c.a,d.a,h.a,m.a],null,null)],(function(l,n){l(n,1,0)}),null)}var G=t.yb("app-quality-estimate-form",p,U,{costCenter:"costCenter",qualityEstimate:"qualityEstimate",qualityEstimateDetail:"qualityEstimateDetail",isView:"isView",previous:"previous"},{},[]),R=e("IheW"),z=e("1dSU"),H=e("xgBC"),Z=e("biaL"),J=e("QURO"),W=e("ElRG"),Y=e("t8sF"),ll=e("s3Gz"),nl=e("ZWll"),el=e("Pn9U"),tl=e("wMzM"),ul=e("AjED"),il=e("Q1xG"),al=e("PCNd");e.d(n,"QualityEstimatePageModuleNgFactory",(function(){return rl}));var rl=t.zb(f,[],(function(l){return t.Kb([t.Lb(512,t.m,t.kb,[[8,[y.a,B.a,O,G]],[3,t.m],t.D]),t.Lb(4608,E.n,E.m,[t.z,[2,E.y]]),t.Lb(4608,s.o,s.o,[]),t.Lb(4608,r.c,r.c,[t.F,t.g]),t.Lb(4608,r.Ib,r.Ib,[r.c,t.m,t.w]),t.Lb(4608,r.Mb,r.Mb,[r.c,t.m,t.w]),t.Lb(4608,R.j,R.p,[E.c,t.I,R.n]),t.Lb(4608,R.q,R.q,[R.j,R.o]),t.Lb(5120,R.a,(function(l){return[l]}),[R.q]),t.Lb(4608,R.m,R.m,[]),t.Lb(6144,R.k,null,[R.m]),t.Lb(4608,R.i,R.i,[R.k]),t.Lb(6144,R.b,null,[R.i]),t.Lb(4608,R.g,R.l,[R.b,t.w]),t.Lb(4608,R.c,R.c,[R.g]),t.Lb(4608,s.c,s.c,[]),t.Lb(4608,c.a,c.a,[r.Rb]),t.Lb(4608,d.a,d.a,[i.n,m.a,c.a]),t.Lb(4608,z.a,z.a,[H.b]),t.Lb(4608,Z.a,Z.a,[R.c,d.a,z.a]),t.Lb(4608,J.a,J.a,[W.a,r.Lb]),t.Lb(4608,g.a,g.a,[r.b]),t.Lb(4608,Y.a,Y.a,[]),t.Lb(4608,ll.a,ll.a,[]),t.Lb(4608,nl.a,nl.a,[el.a,c.a,h.a]),t.Lb(4608,b.a,b.a,[o.a,R.c,z.a,d.a]),t.Lb(4608,tl.a,tl.a,[]),t.Lb(4608,ul.a,ul.a,[d.a,R.c]),t.Lb(1073742336,E.b,E.b,[]),t.Lb(1073742336,s.n,s.n,[]),t.Lb(1073742336,s.g,s.g,[]),t.Lb(1073742336,r.Fb,r.Fb,[]),t.Lb(1073742336,R.e,R.e,[]),t.Lb(1073742336,R.d,R.d,[]),t.Lb(1073742336,s.l,s.l,[]),t.Lb(1073742336,il.a,il.a,[]),t.Lb(1073742336,al.a,al.a,[]),t.Lb(1073742336,i.p,i.p,[[2,i.u],[2,i.n]]),t.Lb(1073742336,f,f,[]),t.Lb(256,R.n,"XSRF-TOKEN",[]),t.Lb(256,R.o,"X-XSRF-TOKEN",[]),t.Lb(1024,i.l,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);