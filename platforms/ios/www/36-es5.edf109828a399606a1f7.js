function _toConsumableArray(l){return _arrayWithoutHoles(l)||_iterableToArray(l)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(l){if(Symbol.iterator in Object(l)||"[object Arguments]"===Object.prototype.toString.call(l))return Array.from(l)}function _arrayWithoutHoles(l){if(Array.isArray(l)){for(var n=0,t=new Array(l.length);n<l.length;n++)t[n]=l[n];return t}}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,t){return n&&_defineProperties(l.prototype,n),t&&_defineProperties(l,t),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{Ow8i:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),u=t("mrSG"),o=t("y2UQ"),a=t("niFY"),i=t("Gvy4"),r=t("sTnX"),c=t("WFa4"),s=t("biaL"),b=t("aVMi"),d=t("v2G1"),p=t("ocFP"),C=function(){function l(n,t,e,o,a,i,r,c,s,b,d){var p=this;_classCallCheck(this,l),this.route=n,this.contractDetailService=t,this.syncService=e,this.httpService=o,this.router=a,this.loaderService=i,this.geolocationService=r,this.userService=c,this.toastService=s,this.alertService=b,this.storeService=d,this.openSelected=!1,this.geolocationClass=!1,this.costCenterListItem=null,this.costCenter=null,this.productionContracts=[],this.harvestEstimate=[],this.qualityEstimate=[],this.notes=[],this.units=[],this.getTotal=function(){return p.productionContracts.reduce((function(l,n){return l+n.totalQuantity}),0)},this.showUnitName=function(){if(p.costCenter){var l=p.units.find((function(l){return l.id===p.costCenter.controlUnit}));return l?l.code:"N/A"}return"N/A"},this.getItemDetails=function(l){return l?p.qualityEstimateDetail.filter((function(n){return n.qualityEstimate===l.id})):[]},this.noteListPage=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];p.router.navigate(["/home-page/notes"])},this.harvestPage=function(l){p.router.navigate(["/home-page/harvest-estimate"])},this.qualityPage=function(l){p.router.navigate(["/home-page/quality-estimate"])},this.myGeolocation=function(){return u.__awaiter(p,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.alertService.confirmAlert("Desea actualizar la ubicacion del CC de costo con su ubicacion actual?");case 2:if(l.sent){l.next=4;break}return l.abrupt("return");case 4:n=this.storeService.getUser(),this.updateGeolocation({lat:this.lat,lng:this.lng,id_user:n.id,id_cost_center:this.costCenter.id});case 6:case"end":return l.stop()}}),l,this)})))},this.updateGeolocation=function(l){p.geolocationClass=!0,p.loaderService.startLoader("Actualizando posicion"),p.contractDetailService.updateGeolocationCostCenter(l).subscribe((function(){p.geolocationClass=!1,p.syncData(),p.loaderService.stopLoader(),p.toastService.successToast("posicion actualizada.")}),(function(l){p.geolocationClass=!1,p.loaderService.stopLoader(),p.toastService.errorToast("No se ha cambiado la localizaci\xf3n"),p.httpService.errorHandler(l)}))},this.loadUnits=function(){p.units=p.storeService.getUnits()},this.loadContractDetail=function(l){p.loaderService.startLoader(),p.contractDetailService.getCostCenterDetail(l).subscribe((function(l){p.storeService.setContractData(l.data),p.loaderService.stopLoader()}),(function(l){p.loaderService.stopLoader()}))},this.syncData=function(){var l=p.storeService.getUser(),n=p.storeService.getActiveConnection();p.syncService.syncData(l.username,n.superuser?1:0).subscribe((function(l){p.storeService.setSyncedData(l.data)}),(function(l){p.httpService.errorHandler(l)}))}}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.loadUnits(),this.costCenterListItem=this.storeService.getActiveCostCenter();var n=this.route.snapshot.paramMap.get("id");n&&this.loadContractDetail(n),this.geolocationService$=this.geolocationService.getCurrentPosition().subscribe((function(n){l.lat=n.lat,l.lng=n.lng})),this.store$=this.storeService.stateChanged.subscribe((function(n){var t=n.contract;l.costCenter=t.costCenter,l.productionContracts=_toConsumableArray(t.productionContracts),l.harvestEstimate=_toConsumableArray(t.harvestEstimate),l.qualityEstimate=_toConsumableArray(t.qualityEstimate),l.qualityEstimateDetail=_toConsumableArray(t.qualityEstimateDetail),l.notes=_toConsumableArray(t.notes)}))}},{key:"ngOnDestroy",value:function(){this.geolocationService$.unsubscribe(),this.store$.unsubscribe()}}]),l}(),g=function l(){_classCallCheck(this,l)},m=t("FhNQ"),h=t("pMnS"),f=t("oBZk"),v=t("ZZ/e"),x=t("SVse"),P=t("WLIL"),_=t("sY2G"),O=t("yXaf"),y=t("cbxp"),S=t("TcBx"),L=t("1PVH"),M=t("t8sF"),w=t("s3Gz"),B=t("ElRG"),I=t("wMzM"),k=t("o3E9"),F=t("KcSc"),j=t("X2tk"),z=t("iInd"),E=e.Ab({encapsulation:0,styles:[["ion-back-button[_ngcontent-%COMP%]{--color:white}ion-title[_ngcontent-%COMP%]{color:#fff}ion-content[_ngcontent-%COMP%]{--background:var(--color-background-tabs);background:var(--color-background-tabs)}.white[_ngcontent-%COMP%]{color:#fff;padding-left:1em;padding-right:1em}.card[_ngcontent-%COMP%]{display:table;width:100%;padding:0 25px}.card[_ngcontent-%COMP%]   .card-text-one[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-text-two[_ngcontent-%COMP%]{width:50%;display:table-cell;color:#fff}.card[_ngcontent-%COMP%]   .card-text-two[_ngcontent-%COMP%]{text-align:right}.card-text[_ngcontent-%COMP%]{display:table;width:100%;padding:0 25px;position:relative}.card-text[_ngcontent-%COMP%]   .card-text-one[_ngcontent-%COMP%], .card-text[_ngcontent-%COMP%]   .card-text-two[_ngcontent-%COMP%]{width:100%;display:table-cell;color:#fff}.card-text[_ngcontent-%COMP%]   .card-text-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1), .card-text[_ngcontent-%COMP%]   .card-text-two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1){position:absolute;top:0;right:0;margin-top:15px!important;margin-right:15px;padding:10px;background:var(--color-light-card-hard);border-radius:20px}.card-text[_ngcontent-%COMP%]   .card-text-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1){margin-top:0}.card-text[_ngcontent-%COMP%]   .card-text-two[_ngcontent-%COMP%]{text-align:right}.card-text[_ngcontent-%COMP%]   .card-text-two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1){margin-top:0}.card-contrato[_ngcontent-%COMP%]{font-size:20px;font-weight:700;text-decoration:underline;margin-bottom:-1px}.scroll-card[_ngcontent-%COMP%]{max-height:0;-webkit-transition:max-height .15s ease-out;transition:max-height .15s ease-out;overflow:hidden}.scroll-card-custom[_ngcontent-%COMP%]{padding:3px 5px}.scroll-card-custom[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{background-color:var(--color-searchbar-menu);border-radius:10px;border:none!important}.scroll-card-custom[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .card-text-one[_ngcontent-%COMP%]{padding:12px 0}.scroll-card-custom[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.header-content.selected[_ngcontent-%COMP%]   .scroll-card[_ngcontent-%COMP%]{max-height:500px;-webkit-transition:max-height .25s ease-in;transition:max-height .25s ease-in}.estimates-card[_ngcontent-%COMP%]{display:table;width:100%;text-align:center;background:#fff;padding:10px 0;margin-bottom:5px;border-radius:0 0 12px 12px}.estimates-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:table-cell}.estimates-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}.estimates-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){border-right:1px solid var(--ion-color-light-shade)}.font-10[_ngcontent-%COMP%]{font-size:10px}#container[_ngcontent-%COMP%]{max-height:0;-webkit-transition:max-height .15s ease-out;transition:max-height .15s ease-out;overflow:hidden;display:block}.graphics.selected[_ngcontent-%COMP%]   #container[_ngcontent-%COMP%]{max-height:500px;-webkit-transition:max-height .25s ease-in;transition:max-height .25s ease-in}.item-list[_ngcontent-%COMP%]{margin:0 5px 5px;border-radius:10px;padding-bottom:5px}ion-list-header[_ngcontent-%COMP%]{min-height:25px}.geolocation[_ngcontent-%COMP%]{color:#2fff2f!important}.no-geolocation[_ngcontent-%COMP%]{color:var(--ion-color-danger)!important}"]],data:{}});function N(l){return e.Xb(0,[(l()(),e.Cb(0,0,null,null,7,null,null,null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,6,"ion-button",[["fill","clear"],["size","small"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.myGeolocation()&&e),e}),f.Z,f.e)),e.Bb(2,49152,null,0,v.l,[e.j,e.p,e.F],{fill:[0,"fill"],size:[1,"size"]},null),(l()(),e.Cb(3,0,null,0,4,"ion-icon",[["name","globe"],["slot","icon-only"],["style","color:white;"]],null,null,null,f.ob,f.t)),e.Sb(512,null,x.v,x.w,[e.x,e.y,e.p,e.L]),e.Bb(5,278528,null,0,x.j,[x.v],{ngClass:[0,"ngClass"]},null),e.Qb(6,{geolocation:0,"no-geolocation":1}),e.Bb(7,49152,null,0,v.D,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){var t=n.component;l(n,2,0,"clear","small");var e=l(n,6,0,t.costCenter.latitude&&t.costCenter.longitude,!t.costCenter.latitude||!t.costCenter.longitude);l(n,5,0,e),l(n,7,0,"globe")}),null)}function D(l){return e.Xb(0,[(l()(),e.Cb(0,0,null,null,3,"ion-col",[["size","12"]],null,null,null,f.hb,f.m)),e.Bb(1,49152,null,0,v.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Cb(2,0,null,0,1,"div",[["class","white"]],null,null,null,null,null)),(l()(),e.Vb(3,null,["Numero de Contratos: ",""]))],(function(l,n){l(n,1,0,"12")}),(function(l,n){l(n,3,0,n.component.costCenterListItem.contractsNumber)}))}function A(l){return e.Xb(0,[(l()(),e.Cb(0,0,null,null,31,null,null,null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,9,"ion-row",[],null,null,null,f.Eb,f.J)),e.Bb(2,49152,null,0,v.kb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(3,0,null,0,3,"ion-col",[["size","10"]],null,null,null,f.hb,f.m)),e.Bb(4,49152,null,0,v.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Cb(5,0,null,0,1,"div",[["class","white"]],null,null,null,null,null)),(l()(),e.Vb(6,null,["",""])),(l()(),e.Cb(7,0,null,0,3,"ion-col",[["size","2"]],null,null,null,f.hb,f.m)),e.Bb(8,49152,null,0,v.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.rb(16777216,null,0,1,null,N)),e.Bb(10,16384,null,0,x.l,[e.X,e.T],{ngIf:[0,"ngIf"]},null),(l()(),e.Cb(11,0,null,null,20,"ion-row",[["class","row"]],null,null,null,f.Eb,f.J)),e.Bb(12,49152,null,0,v.kb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(13,0,null,0,3,"ion-col",[["size","12"],["style","padding-bottom: 0;"]],null,null,null,f.hb,f.m)),e.Bb(14,49152,null,0,v.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Cb(15,0,null,0,1,"div",[["class","white"],["style","font-weight: bold;font-size: 20px;padding-left: 1rem;"]],null,null,null,null,null)),(l()(),e.Vb(16,null,["",""])),(l()(),e.Cb(17,0,null,0,3,"ion-col",[["size","12"],["style","padding-top: 0;"]],null,null,null,f.hb,f.m)),e.Bb(18,49152,null,0,v.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Cb(19,0,null,0,1,"div",[["class","white"],["style","font-size: 14px;padding-left: 1rem;"]],null,null,null,null,null)),(l()(),e.Vb(20,null,["",""])),(l()(),e.Cb(21,0,null,0,3,"ion-col",[["size","12"]],null,null,null,f.hb,f.m)),e.Bb(22,49152,null,0,v.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Cb(23,0,null,0,1,"div",[["class","white"]],null,null,null,null,null)),(l()(),e.Vb(24,null,[""," / ",""])),(l()(),e.Cb(25,0,null,0,4,"ion-col",[["size","12"]],null,null,null,f.hb,f.m)),e.Bb(26,49152,null,0,v.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Cb(27,0,null,0,2,"div",[["class","white"]],null,null,null,null,null)),(l()(),e.Vb(28,null,["Fecha Cosecha: ",""])),e.Rb(29,1),(l()(),e.rb(16777216,null,0,1,null,D)),e.Bb(31,16384,null,0,x.l,[e.X,e.T],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,4,0,"10"),l(n,8,0,"2"),l(n,10,0,t.costCenter),l(n,14,0,"12"),l(n,18,0,"12"),l(n,22,0,"12"),l(n,26,0,"12"),l(n,31,0,t.costCenterListItem.contractResponsible)}),(function(l,n){var t=n.component;l(n,6,0,t.costCenterListItem.code),l(n,16,0,t.costCenterListItem.name),l(n,20,0,t.costCenterListItem.producerName),l(n,24,0,t.costCenterListItem.speciesName,t.costCenterListItem.varietyName);var u=e.Wb(n,28,0,l(n,29,0,e.Nb(n.parent,0),t.costCenterListItem.harvestDate));l(n,28,0,u)}))}function X(l){return e.Xb(0,[(l()(),e.Cb(0,0,null,null,14,null,null,null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,13,"div",[["class","scroll-card"]],[[2,"scroll-card-custom",null]],null,null,null,null)),(l()(),e.Cb(2,0,null,null,12,null,null,null,null,null,null,null)),(l()(),e.Cb(3,0,null,null,11,"div",[["class","card-text"]],null,null,null,null,null)),(l()(),e.Cb(4,0,null,null,10,"div",[["class","card-text-one"]],null,null,null,null,null)),(l()(),e.Cb(5,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.Vb(6,null,[""," ",""])),e.Rb(7,1),(l()(),e.Cb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Vb(9,null,["# ",""])),(l()(),e.Cb(10,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.Vb(11,null,["",""])),e.Rb(12,1),(l()(),e.Cb(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Vb(14,null,["",""]))],null,(function(l,n){var t=n.component;l(n,1,0,t.openSelected);var u=n.context.$implicit.totalQuantity,o=e.Wb(n,6,1,l(n,7,0,e.Nb(n.parent,1),t.showUnitName()));l(n,6,0,u,o),l(n,9,0,n.context.$implicit.documentNumber);var a=e.Wb(n,11,0,l(n,12,0,e.Nb(n.parent,0),n.context.$implicit.date));l(n,11,0,a),l(n,14,0,n.context.$implicit.responsibleName)}))}function T(l){return e.Xb(0,[(l()(),e.Cb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,1,"app-harvest-estimate-item",[],null,[[null,"harvestSelected"]],(function(l,n,t){var e=!0;return"harvestSelected"===n&&(e=!1!==l.component.harvestPage(t)&&e),e}),P.b,P.a)),e.Bb(2,114688,null,0,_.a,[],{item:[0,"item"],units:[1,"units"]},{harvestSelected:"harvestSelected"})],(function(l,n){var t=n.component;l(n,2,0,t.harvestEstimate[0],t.units)}),null)}function V(l){return e.Xb(0,[(l()(),e.Cb(0,0,null,null,1,"app-harvest-estimate-item",[],null,[[null,"harvestSelected"]],(function(l,n,t){var e=!0;return"harvestSelected"===n&&(e=!1!==l.component.harvestPage(t)&&e),e}),P.b,P.a)),e.Bb(1,114688,null,0,_.a,[],null,{harvestSelected:"harvestSelected"})],(function(l,n){l(n,1,0)}),null)}function q(l){return e.Xb(0,[(l()(),e.Cb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,1,"app-quality-estimate-item",[],null,[[null,"itemSelected"]],(function(l,n,t){var e=!0;return"itemSelected"===n&&(e=!1!==l.component.qualityPage(t)&&e),e}),O.b,O.a)),e.Bb(2,114688,null,0,y.a,[p.a],{costCenter:[0,"costCenter"],item:[1,"item"],details:[2,"details"]},{itemSelected:"itemSelected"})],(function(l,n){var t=n.component;l(n,2,0,t.costCenter,t.qualityEstimate[0],t.getItemDetails(t.qualityEstimate[0]))}),null)}function R(l){return e.Xb(0,[(l()(),e.Cb(0,0,null,null,1,"app-quality-estimate-item",[],null,[[null,"itemSelected"]],(function(l,n,t){var e=!0;return"itemSelected"===n&&(e=!1!==l.component.qualityPage(t)&&e),e}),O.b,O.a)),e.Bb(1,114688,null,0,y.a,[p.a],null,{itemSelected:"itemSelected"})],(function(l,n){l(n,1,0)}),null)}function U(l){return e.Xb(0,[(l()(),e.Cb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,1,"app-note-item",[],null,[[null,"noteClicked"]],(function(l,n,t){var e=!0;return"noteClicked"===n&&(e=!1!==l.component.noteListPage(t)&&e),e}),S.b,S.a)),e.Bb(2,114688,null,0,L.a,[v.Ib,M.a,w.a,B.a,v.Lb,I.a,o.a],{item:[0,"item"]},{noteClicked:"noteClicked"})],(function(l,n){l(n,2,0,n.component.notes[0])}),null)}function G(l){return e.Xb(0,[(l()(),e.Cb(0,0,null,null,1,"app-note-item",[],null,[[null,"noteClicked"]],(function(l,n,t){var e=!0;return"noteClicked"===n&&(e=!1!==l.component.noteListPage(t)&&e),e}),S.b,S.a)),e.Bb(1,114688,null,0,L.a,[v.Ib,M.a,w.a,B.a,v.Lb,I.a,o.a],null,{noteClicked:"noteClicked"})],(function(l,n){l(n,1,0)}),null)}function W(l){return e.Xb(0,[e.Pb(0,k.a,[e.z]),e.Pb(0,x.r,[]),e.Pb(0,x.e,[e.z]),(l()(),e.Cb(3,0,null,null,16,"ion-header",[],null,null,null,f.nb,f.s)),e.Bb(4,49152,null,0,v.C,[e.j,e.p,e.F],null,null),(l()(),e.Cb(5,0,null,0,14,"ion-toolbar",[["class","background-color-header"]],null,null,null,f.Ob,f.T)),e.Bb(6,49152,null,0,v.Db,[e.j,e.p,e.F],null,null),(l()(),e.Cb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,f.ab,f.f)),e.Bb(8,49152,null,0,v.m,[e.j,e.p,e.F],null,null),(l()(),e.Cb(9,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Nb(l,11).onClick(t)&&u),u}),f.X,f.c)),e.Bb(10,49152,null,0,v.h,[e.j,e.p,e.F],{text:[0,"text"]},null),e.Bb(11,16384,null,0,v.i,[[2,v.jb],v.Jb],null,null),(l()(),e.Cb(12,0,null,0,3,"ion-title",[],null,null,null,f.Nb,f.S)),e.Bb(13,49152,null,0,v.Bb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(14,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),e.Vb(-1,null,["Detalle Centro de Costo"])),(l()(),e.Cb(16,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,f.ab,f.f)),e.Bb(17,49152,null,0,v.m,[e.j,e.p,e.F],null,null),(l()(),e.Cb(18,0,null,0,1,"app-notifications",[],null,null,null,F.b,F.a)),e.Bb(19,114688,null,0,j.a,[],null,null),(l()(),e.Cb(20,0,null,null,4,"div",[["class","header-content background-color--header"]],[[2,"selected",null]],[[null,"click"]],(function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=0!=(u.openSelected=!u.openSelected)&&e),e}),null,null)),(l()(),e.rb(16777216,null,null,1,null,A)),e.Bb(22,16384,null,0,x.l,[e.X,e.T],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,null,1,null,X)),e.Bb(24,278528,null,0,x.k,[e.X,e.T,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Cb(25,0,null,null,53,"ion-content",[],null,null,null,f.ib,f.n)),e.Bb(26,49152,null,0,v.v,[e.j,e.p,e.F],null,null),(l()(),e.Cb(27,0,null,0,21,"div",[["class","estimates-card"]],null,null,null,null,null)),(l()(),e.Cb(28,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),e.Cb(29,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.Vb(30,null,[""," CONTRATADOS"])),e.Rb(31,1),(l()(),e.Cb(32,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e.Cb(33,0,null,null,1,"ion-icon",[["color","danger"],["name","arrow-round-up"]],null,null,null,f.ob,f.t)),e.Bb(34,49152,null,0,v.D,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.Vb(-1,null,["\xa0 "])),(l()(),e.Cb(36,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e.Vb(37,null,["",""])),e.Rb(38,3),(l()(),e.Cb(39,0,null,null,9,"div",[],null,null,null,null,null)),(l()(),e.Cb(40,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.Vb(41,null,[""," RECIBIDOS"])),e.Rb(42,1),(l()(),e.Cb(43,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e.Cb(44,0,null,null,1,"ion-icon",[["color","primary"],["name","arrow-round-down"]],null,null,null,f.ob,f.t)),e.Bb(45,49152,null,0,v.D,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.Vb(-1,null,["\xa0"])),(l()(),e.Cb(47,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Vb(-1,null,["3.200"])),(l()(),e.Cb(49,0,null,0,9,"ion-list",[["class","item-list"]],null,null,null,f.xb,f.B)),e.Bb(50,49152,null,0,v.P,[e.j,e.p,e.F],null,null),(l()(),e.Cb(51,0,null,0,4,"ion-list-header",[],null,null,null,f.wb,f.C)),e.Bb(52,49152,null,0,v.Q,[e.j,e.p,e.F],null,null),(l()(),e.Cb(53,0,null,0,2,"ion-label",[],null,null,null,f.vb,f.A)),e.Bb(54,49152,null,0,v.O,[e.j,e.p,e.F],null,null),(l()(),e.Vb(-1,0,["ESTIMACION DE COSECHA"])),(l()(),e.rb(16777216,null,0,1,null,T)),e.Bb(57,16384,null,0,x.l,[e.X,e.T],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.rb(0,[["emptyHarvest",2]],0,0,null,V)),(l()(),e.Cb(59,0,null,0,9,"ion-list",[["class","item-list"]],null,null,null,f.xb,f.B)),e.Bb(60,49152,null,0,v.P,[e.j,e.p,e.F],null,null),(l()(),e.Cb(61,0,null,0,4,"ion-list-header",[],null,null,null,f.wb,f.C)),e.Bb(62,49152,null,0,v.Q,[e.j,e.p,e.F],null,null),(l()(),e.Cb(63,0,null,0,2,"ion-label",[],null,null,null,f.vb,f.A)),e.Bb(64,49152,null,0,v.O,[e.j,e.p,e.F],null,null),(l()(),e.Vb(-1,0,["ESTIMACION DE CALIDAD"])),(l()(),e.rb(16777216,null,0,1,null,q)),e.Bb(67,16384,null,0,x.l,[e.X,e.T],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.rb(0,[["emptyQuality",2]],0,0,null,R)),(l()(),e.Cb(69,0,null,0,9,"ion-list",[["class","item-list"]],null,null,null,f.xb,f.B)),e.Bb(70,49152,null,0,v.P,[e.j,e.p,e.F],null,null),(l()(),e.Cb(71,0,null,0,4,"ion-list-header",[],null,null,null,f.wb,f.C)),e.Bb(72,49152,null,0,v.Q,[e.j,e.p,e.F],null,null),(l()(),e.Cb(73,0,null,0,2,"ion-label",[],null,null,null,f.vb,f.A)),e.Bb(74,49152,null,0,v.O,[e.j,e.p,e.F],null,null),(l()(),e.Vb(-1,0,["NOTA"])),(l()(),e.rb(16777216,null,0,1,null,U)),e.Bb(77,16384,null,0,x.l,[e.X,e.T],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.rb(0,[["emptyNote",2]],0,0,null,G))],(function(l,n){var t=n.component;l(n,10,0,""),l(n,19,0),l(n,22,0,t.costCenterListItem),l(n,24,0,t.productionContracts),l(n,34,0,"danger","arrow-round-up"),l(n,45,0,"primary","arrow-round-down"),l(n,57,0,t.harvestEstimate,e.Nb(n,58)),l(n,67,0,t.qualityEstimate,e.Nb(n,68)),l(n,77,0,t.notes,e.Nb(n,78))}),(function(l,n){var t=n.component;l(n,20,0,t.openSelected);var u=e.Wb(n,30,0,l(n,31,0,e.Nb(n,1),t.showUnitName()));l(n,30,0,u);var o=e.Wb(n,37,0,l(n,38,0,e.Nb(n,2),t.getTotal(),"1.0-0","es-CL"));l(n,37,0,o);var a=e.Wb(n,41,0,l(n,42,0,e.Nb(n,1),t.showUnitName()));l(n,41,0,a)}))}var Q=e.yb("app-contract-detail",C,(function(l){return e.Xb(0,[(l()(),e.Cb(0,0,null,null,1,"app-contract-detail",[],null,null,null,W,E)),e.Bb(1,245760,null,0,C,[z.a,o.a,a.a,i.a,z.n,r.a,c.a,s.a,b.a,d.a,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),$=t("s7LF"),H=t("IheW"),J=t("1dSU"),Z=t("xgBC"),K=t("QURO"),Y=t("ZWll"),ll=t("Pn9U"),nl=t("imvL"),tl=t("AjED"),el=t("Q1xG"),ul=t("PCNd");t.d(n,"ContractDetailPageModuleNgFactory",(function(){return ol}));var ol=e.zb(g,[],(function(l){return e.Kb([e.Lb(512,e.m,e.kb,[[8,[m.a,h.a,Q]],[3,e.m],e.D]),e.Lb(4608,x.n,x.m,[e.z,[2,x.y]]),e.Lb(4608,$.o,$.o,[]),e.Lb(4608,v.c,v.c,[e.F,e.g]),e.Lb(4608,v.Ib,v.Ib,[v.c,e.m,e.w]),e.Lb(4608,v.Mb,v.Mb,[v.c,e.m,e.w]),e.Lb(4608,H.j,H.p,[x.c,e.I,H.n]),e.Lb(4608,H.q,H.q,[H.j,H.o]),e.Lb(5120,H.a,(function(l){return[l]}),[H.q]),e.Lb(4608,H.m,H.m,[]),e.Lb(6144,H.k,null,[H.m]),e.Lb(4608,H.i,H.i,[H.k]),e.Lb(6144,H.b,null,[H.i]),e.Lb(4608,H.g,H.l,[H.b,e.w]),e.Lb(4608,H.c,H.c,[H.g]),e.Lb(4608,$.c,$.c,[]),e.Lb(4608,b.a,b.a,[v.Rb]),e.Lb(4608,i.a,i.a,[z.n,p.a,b.a]),e.Lb(4608,J.a,J.a,[Z.b]),e.Lb(4608,s.a,s.a,[H.c,i.a,J.a]),e.Lb(4608,K.a,K.a,[B.a,v.Lb]),e.Lb(4608,d.a,d.a,[v.b]),e.Lb(4608,M.a,M.a,[]),e.Lb(4608,w.a,w.a,[]),e.Lb(4608,Y.a,Y.a,[ll.a,b.a,r.a]),e.Lb(4608,a.a,a.a,[nl.a,H.c,J.a,i.a]),e.Lb(4608,I.a,I.a,[]),e.Lb(4608,tl.a,tl.a,[i.a,H.c]),e.Lb(1073742336,x.b,x.b,[]),e.Lb(1073742336,$.n,$.n,[]),e.Lb(1073742336,$.g,$.g,[]),e.Lb(1073742336,v.Fb,v.Fb,[]),e.Lb(1073742336,H.e,H.e,[]),e.Lb(1073742336,H.d,H.d,[]),e.Lb(1073742336,$.l,$.l,[]),e.Lb(1073742336,el.a,el.a,[]),e.Lb(1073742336,ul.a,ul.a,[]),e.Lb(1073742336,z.p,z.p,[[2,z.u],[2,z.n]]),e.Lb(1073742336,g,g,[]),e.Lb(256,H.n,"XSRF-TOKEN",[]),e.Lb(256,H.o,"X-XSRF-TOKEN",[]),e.Lb(1024,z.l,(function(){return[[{path:":id",component:C}]]}),[])])}))}}]);