!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"ct+p":function(t,o,i){"use strict";i.r(o),i.d(o,"HomePageModule",function(){return P});var r,a=i("fXoL"),l=i("ofXK"),c=i("TEn/"),s=i("3Pt+"),m=i("zTSL"),p=i("tyNb"),d=i("mrSG"),u=i("wd/R"),g=i("t2g/"),h=i("sWYD"),f=i("YBtx"),v=i("Ol7V"),y=((r=function(){function t(){e(this,t)}return n(t,[{key:"transform",value:function(e,t){for(var n=[],o=0;o<e.length;o++)e[o].physioName===t.name&&n.push(e[o]);return n}}]),t}()).\u0275fac=function(e){return new(e||r)},r.\u0275pipe=a["\u0275\u0275definePipe"]({name:"physioFilter",type:r,pure:!0}),r);function x(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"ion-select-option",12),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;a["\u0275\u0275property"]("value",n),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"]("",n.name," ")}}function C(e,t){if(1&e){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"ion-chip",7),a["\u0275\u0275elementStart"](1,"ion-avatar",8),a["\u0275\u0275element"](2,"img",9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"ion-select",10),a["\u0275\u0275listener"]("ngModelChange",function(e){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().selectedPhysio=e}),a["\u0275\u0275template"](4,x,2,2,"ion-select-option",11),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){var o=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("src",o.selectedPhysio.image,a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngModel",o.selectedPhysio)("value",o.selectedPhysio)("interfaceOptions",o.customPopoverOptions),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",o.physio)}}function S(e,t){if(1&e){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"ion-row",19),a["\u0275\u0275elementStart"](1,"ion-col",20),a["\u0275\u0275elementStart"](2,"ion-label"),a["\u0275\u0275text"](3),a["\u0275\u0275element"](4,"br"),a["\u0275\u0275text"](5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"ion-col",20),a["\u0275\u0275elementStart"](7,"ion-label"),a["\u0275\u0275text"](8),a["\u0275\u0275element"](9,"br"),a["\u0275\u0275text"](10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-col",20),a["\u0275\u0275elementStart"](12,"ion-label"),a["\u0275\u0275text"](13),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"ion-col",21),a["\u0275\u0275elementStart"](15,"ion-label"),a["\u0275\u0275text"](16),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](17,"ion-col",22),a["\u0275\u0275elementStart"](18,"ion-button",23),a["\u0275\u0275listener"]("click",function(){a["\u0275\u0275restoreView"](n);var e=t.$implicit;return a["\u0275\u0275nextContext"](2).removeAppointment(e.appointmentId)}),a["\u0275\u0275element"](19,"ion-icon",24),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](20,"hr",25),a["\u0275\u0275elementEnd"]()}if(2&e){var o=t.$implicit,i=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate1"]("",i.getDayRightFormat(o.day,o.startTime,"weekDay")," "),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"](" ",i.getDayRightFormat(o.day,o.startTime)," "),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate1"]("",i.getHourRightFormat(o.day,o.startTime)," "),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"](" ",i.getHourRightFormat(o.day,o.endTime)," "),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](i.getRoomFromId(o.roomId)),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](o.patientName)}}function I(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"ion-card",13),a["\u0275\u0275elementStart"](1,"ion-grid",0),a["\u0275\u0275elementStart"](2,"ion-row",14),a["\u0275\u0275elementStart"](3,"ion-col",15),a["\u0275\u0275text"](4," Data "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"ion-col",15),a["\u0275\u0275text"](6," Ora "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"ion-col",15),a["\u0275\u0275text"](8," Lettino "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"ion-col",16),a["\u0275\u0275text"](10," Nome del paziente "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](11,"ion-col",17),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](12,S,21,6,"ion-row",18),a["\u0275\u0275pipe"](13,"physioFilter"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](12),a["\u0275\u0275property"]("ngForOf",a["\u0275\u0275pipeBind2"](13,1,n.appointments,n.selectedPhysio))}}var w,E,b,M=[{path:"",component:(w=function(){function t(n,o,i){e(this,t),this.homeService=n,this.modalController=o,this.toastController=i,this.customPopoverOptions={cssClass:"custom-popover"},u.locale("it-IT")}return n(t,[{key:"presentAddBookingModal",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:g.a,cssClass:"modal-style",componentProps:{appointments:this.appointments,physio:this.physio,selectedPhysio:this.selectedPhysio,rooms:this.rooms}});case 2:return(t=e.sent).onDidDismiss().then(function(){console.log("Modale dismessa"),n.getAppointments()}),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}))}},{key:"presentToast",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toastController.create({message:e,duration:2e3});case 2:t.sent.present();case 3:case"end":return t.stop()}},t,this)}))}},{key:"ngOnInit",value:function(){this.getPhysio(),this.getAppointments(),this.rooms=this.homeService.getRooms()}},{key:"getAppointments",value:function(){var e=this;this.homeService.getAppointments().then(function(t){e.appointments=t,e.appointments.sort(function(e,t){return new Date(e.day).getTime()-new Date(t.day).getTime()}),console.log(e.appointments)})}},{key:"getPhysio",value:function(){var e=this;this.homeService.getPhysio().then(function(t){e.physio=t,e.physio.sort(function(e,t){return e.id-t.id}),e.selectedPhysio=e.physio[0]})}},{key:"removeAppointment",value:function(e){var t=this;this.homeService.removeAppointment(e).then(function(){t.getAppointments(),t.presentToast("Appuntamento cancellato")}).catch(function(){t.presentToast("Errore nella cancellazione dell'appuntamento")})}},{key:"getRoomFromId",value:function(e){for(var t=0;t<this.rooms.length;t++)if(e===this.rooms[t].roomId)return this.rooms[t].roomName}},{key:"getDayRightFormat",value:function(e,t,n){return"weekDay"===n?Object(h.a)(new Date(e+" "+t),"EEEE",{locale:f.a}):Object(h.a)(new Date(e+" "+t),"d MMMM",{locale:f.a})}},{key:"getHourRightFormat",value:function(e,t){return Object(h.a)(new Date(e+" "+t),"k:mm")}}]),t}(),w.\u0275fac=function(e){return new(e||w)(a["\u0275\u0275directiveInject"](v.a),a["\u0275\u0275directiveInject"](c.ModalController),a["\u0275\u0275directiveInject"](c.ToastController))},w.\u0275cmp=a["\u0275\u0275defineComponent"]({type:w,selectors:[["app-home"]],decls:12,vars:2,consts:[[2,"padding","0%"],[1,"ion-text-center",2,"padding","0%"],["class","chip-custom",4,"ngIf"],["class","card",4,"ngIf"],[1,"ion-text-center"],[3,"click"],[1,"label-button"],[1,"chip-custom"],[1,"avatar-chip"],[3,"src"],["interface","popover",1,"chip-select",3,"ngModel","value","interfaceOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"card"],[2,"background-color","#f6f5f5","padding-bottom","1%","margin-bottom","1%"],["size","3",2,"padding-top","1.5%"],["size","2",2,"padding-top","1.5%"],["size","1",2,"padding-top","1.5%"],["style","align-items: center;",4,"ngFor","ngForOf"],[2,"align-items","center"],["size","3"],["size","2"],["size","1"],["fill","clear","color","danger",3,"click"],["name","trash-outline"],[1,"hr"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"ion-content"),a["\u0275\u0275elementStart"](1,"ion-grid",0),a["\u0275\u0275elementStart"](2,"ion-row"),a["\u0275\u0275elementStart"](3,"ion-col",1),a["\u0275\u0275template"](4,C,5,5,"ion-chip",2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](5,I,14,4,"ion-card",3),a["\u0275\u0275elementStart"](6,"ion-grid"),a["\u0275\u0275elementStart"](7,"ion-row"),a["\u0275\u0275elementStart"](8,"ion-col",4),a["\u0275\u0275elementStart"](9,"ion-chip",5),a["\u0275\u0275listener"]("click",function(){return t.presentAddBookingModal()}),a["\u0275\u0275elementStart"](10,"ion-label",6),a["\u0275\u0275text"](11,"Nuovo Appuntamento"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngIf",t.physio),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.appointments&&t.selectedPhysio))},directives:[c.IonContent,c.IonGrid,c.IonRow,c.IonCol,l.NgIf,c.IonChip,c.IonLabel,c.IonAvatar,c.IonSelect,c.SelectValueAccessor,s.NgControlStatus,s.NgModel,l.NgForOf,c.IonSelectOption,c.IonCard,c.IonButton,c.IonIcon],pipes:[y],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]{--background:linear-gradient(360deg,#5490d9 27%,#4ea7df 95%)}ion-toggle[_ngcontent-%COMP%]{--background-checked:#8cb5e6;--handle-background-checked:#70a3df}ion-col[_ngcontent-%COMP%]{text-align:center;height:100%;display:block;vertical-align:middle}.hr[_ngcontent-%COMP%]{border-top:3px solid #f6f5f5;width:100%}.card[_ngcontent-%COMP%]{margin-left:5%;margin-right:5%;border-radius:10px}.label-button[_ngcontent-%COMP%]{font-weight:100;font-size:20px}.chip-custom[_ngcontent-%COMP%]{height:60px;width:200px;margin-top:18px}.avatar-chip[_ngcontent-%COMP%]{width:50px;height:50px}.chip-select[_ngcontent-%COMP%]{font-size:20px}"]}),w)}],O=((b=function t(){e(this,t)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},imports:[[p.i.forChild(M)],p.i]}),b),P=((E=function t(){e(this,t)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},providers:[{provide:a.LOCALE_ID,useValue:"it-IT"}],imports:[[l.CommonModule,s.FormsModule,c.IonicModule,O,m.CalendarModule]]}),E)}}])}();