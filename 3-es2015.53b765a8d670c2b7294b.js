(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{zpKS:function(e,t,n){"use strict";n.d(t,"a",function(){return F});var o=n("mrSG"),i=n("wd/R"),r=n("t2g/"),a=n("sWYD"),l=n("YBtx"),s=n("fXoL"),m=n("Ol7V"),d=n("TEn/");let c=(()=>{class e{constructor(e){this.loadingCtrl=e}create(){return Object(o.a)(this,void 0,void 0,function*(){const e=yield this.loadingCtrl.create({message:'<div class="loader">',cssClass:"spinner",spinner:null,duration:1e4});return e.present(),e})}awaitableTimeout(e){return new Promise(t=>setTimeout(t,e))}dismiss(){return Object(o.a)(this,void 0,void 0,function*(){try{for(;void 0!==(yield this.loadingCtrl.getTop());)yield this.awaitableTimeout(200),yield this.loadingCtrl.dismiss()}catch(e){console.log("multiple spinner dismiss")}})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](d.LoadingController))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=n("ofXK"),h=n("3Pt+");let g=(()=>{class e{constructor(){this.fakeAppointment=[{day:null,endTime:null,patientName:null,physioName:null,roomId:null,startTime:null,stringDate:null}],this.fakeArray=[this.fakeAppointment]}transform(e,t,n,o){if("home"===o){const o=[];for(let n=0;n<e.length;n++)e[n].physioName===t.name&&o.push(e[n]);if(n){const e=[];for(let t=0;t<o.length;t++)(o[t].patientName.toLowerCase().includes(n.toLowerCase())||this.getWeekday(o[t].day,o[t].startTime).toLowerCase().includes(n.toLowerCase())||this.getDayNumber(o[t].day,o[t].startTime).toLowerCase()===n.toLowerCase())&&e.push(o[t]);return e.length>0?e:this.fakeAppointment}return o.length>0?o:this.fakeAppointment}if("physioDay"===o){const o=[];for(let n=0;n<e.length;n++){const i=e[n].filter(e=>e.physioName===t.name);i.length>0&&o.push(i)}if(n){const e=[];for(let t=0;t<o.length;t++)for(let i=0;i<o[t].length;i++)o[t][i].patientName.toLowerCase().includes(n.toLowerCase())&&e.push([o[t][i]]);return e.length>0?e:this.fakeArray}return o.length>0?(console.log(o),o):this.fakeArray}}getWeekday(e,t){return Object(a.a)(new Date(e+" "+t),"EEEE",{locale:l.a})}getDayNumber(e,t){return Object(a.a)(new Date(e+" "+t),"d",{locale:l.a})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=s["\u0275\u0275definePipe"]({name:"physioFilter",type:e,pure:!0}),e})();function u(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ion-select-option",15),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275property"]("value",e),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"]("",e.name," ")}}function f(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-chip",10),s["\u0275\u0275elementStart"](1,"ion-avatar",11),s["\u0275\u0275element"](2,"img",12),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"ion-select",13),s["\u0275\u0275listener"]("ngModelChange",function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().selectedPhysio=t}),s["\u0275\u0275template"](4,u,2,2,"ion-select-option",14),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("src",e.selectedPhysio.image,s["\u0275\u0275sanitizeUrl"]),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngModel",e.selectedPhysio)("selectedText",e.selectedPhysio.name)("value",e.selectedPhysio)("interfaceOptions",e.customPopoverOptions),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.physio)}}function y(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-fab",16),s["\u0275\u0275elementStart"](1,"ion-fab-button",17),s["\u0275\u0275listener"]("click",function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().presentAlertAddPhysio()}),s["\u0275\u0275element"](2,"ion-icon",18),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}}function v(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-row"),s["\u0275\u0275elementStart"](1,"ion-col",19),s["\u0275\u0275elementStart"](2,"ion-searchbar",20),s["\u0275\u0275listener"]("ngModelChange",function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().filterString=t}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"ion-col",21),s["\u0275\u0275elementStart"](4,"ion-button",22),s["\u0275\u0275listener"]("click",function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().toggleWeekView()}),s["\u0275\u0275element"](5,"ion-icon",23),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",e.filterString)}}function x(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-row",32),s["\u0275\u0275elementStart"](1,"ion-col",33),s["\u0275\u0275elementStart"](2,"ion-label"),s["\u0275\u0275text"](3),s["\u0275\u0275element"](4,"br"),s["\u0275\u0275text"](5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"ion-col",33),s["\u0275\u0275elementStart"](7,"ion-label"),s["\u0275\u0275text"](8),s["\u0275\u0275element"](9,"br"),s["\u0275\u0275text"](10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"ion-col",33),s["\u0275\u0275elementStart"](12,"ion-label"),s["\u0275\u0275text"](13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"ion-col",34),s["\u0275\u0275elementStart"](15,"ion-label"),s["\u0275\u0275text"](16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"ion-col",35),s["\u0275\u0275elementStart"](18,"ion-button",36),s["\u0275\u0275listener"]("click",function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](4).removeAppointment(n.appointmentId)}),s["\u0275\u0275element"](19,"ion-icon",37),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](20,"hr",38),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=s["\u0275\u0275nextContext"](4);s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("",n.homeService.getDayRightFormat(e.day,e.startTime,"weekDay")," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",n.homeService.getDayRightFormat(e.day,e.startTime)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("",n.homeService.getHourRightFormat(e.day,e.startTime)," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",n.homeService.getHourRightFormat(e.day,e.endTime)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](n.getRoomFromId(e.roomId)),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](e.patientName)}}function S(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275elementStart"](1,"ion-card",26),s["\u0275\u0275elementStart"](2,"ion-grid",25),s["\u0275\u0275elementStart"](3,"ion-row",27),s["\u0275\u0275elementStart"](4,"ion-col",28),s["\u0275\u0275text"](5," Data "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"ion-col",28),s["\u0275\u0275text"](7," Ora "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"ion-col",28),s["\u0275\u0275text"](9," Lettino "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"ion-col",29),s["\u0275\u0275text"](11," Nome del paziente "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](12,"ion-col",30),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](13,x,21,6,"ion-row",31),s["\u0275\u0275pipe"](14,"physioFilter"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](3);s["\u0275\u0275advance"](13),s["\u0275\u0275property"]("ngForOf",s["\u0275\u0275pipeBind4"](14,1,e.appointments,e.selectedPhysio,e.filterString,"home"))}}function C(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275elementStart"](1,"p",39),s["\u0275\u0275text"](2,"Nessun appuntamento presente"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]())}function w(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ion-col",25),s["\u0275\u0275template"](1,S,15,6,"div",7),s["\u0275\u0275template"](2,C,3,0,"div",7),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null!==e.day),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null===e.day)}}function I(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ion-row"),s["\u0275\u0275template"](1,w,3,2,"ion-col",24),s["\u0275\u0275pipe"](2,"slice"),s["\u0275\u0275pipe"](3,"physioFilter"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",s["\u0275\u0275pipeBind3"](2,1,s["\u0275\u0275pipeBind4"](3,5,e.appointments,e.selectedPhysio,e.filterString,"home"),0,1))}}function E(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-row",32),s["\u0275\u0275elementStart"](1,"ion-col",44),s["\u0275\u0275elementStart"](2,"ion-label"),s["\u0275\u0275text"](3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-col",33),s["\u0275\u0275elementStart"](5,"ion-label"),s["\u0275\u0275text"](6),s["\u0275\u0275element"](7,"br"),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"ion-col",44),s["\u0275\u0275elementStart"](10,"ion-label"),s["\u0275\u0275text"](11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"ion-col",35),s["\u0275\u0275elementStart"](13,"ion-button",36),s["\u0275\u0275listener"]("click",function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](4).removeAppointment(n.appointmentId)}),s["\u0275\u0275element"](14,"ion-icon",37),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](15,"hr",38),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=s["\u0275\u0275nextContext"](4);s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](e.patientName),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("",n.homeService.getHourRightFormat(e.day,e.startTime)," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",n.homeService.getHourRightFormat(e.day,e.endTime)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](n.getRoomFromId(e.roomId))}}function b(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275elementStart"](1,"p",42),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"ion-card",26),s["\u0275\u0275elementStart"](4,"ion-grid",25),s["\u0275\u0275elementStart"](5,"ion-row",27),s["\u0275\u0275elementStart"](6,"ion-col",43),s["\u0275\u0275text"](7," Nome del paziente "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"ion-col",28),s["\u0275\u0275text"](9," Ora "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"ion-col",43),s["\u0275\u0275text"](11," Lettino "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](12,"ion-col",30),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](13,E,16,4,"ion-row",31),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit,t=s["\u0275\u0275nextContext"](2);s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate2"]("",t.homeService.getDayRightFormat(e[0].day,e[0].startTime,"weekDay")," ",t.homeService.getDayRightFormat(e[0].day,e[0].startTime),""),s["\u0275\u0275advance"](11),s["\u0275\u0275property"]("ngForOf",e)}}function O(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275elementStart"](1,"p",45),s["\u0275\u0275text"](2,"Nessun appuntamento presente"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]())}function P(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ion-col",41),s["\u0275\u0275template"](1,b,14,3,"div",7),s["\u0275\u0275template"](2,O,3,0,"div",7),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null!==e[0].day),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null===e[0].day)}}function k(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ion-row"),s["\u0275\u0275template"](1,P,3,2,"ion-col",40),s["\u0275\u0275pipe"](2,"physioFilter"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",s["\u0275\u0275pipeBind4"](2,1,e.physioRooms,e.selectedPhysio,e.filterString,"physioDay"))}}function M(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-chip",46),s["\u0275\u0275listener"]("click",function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().presentAddBookingModal()}),s["\u0275\u0275elementStart"](1,"ion-label",47),s["\u0275\u0275text"](2,"Nuovo Appuntamento"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}}let F=(()=>{class e{constructor(e,t,n,o,r){this.homeService=e,this.modalController=t,this.toastController=n,this.alertController=o,this.spinner=r,this.appointments=[],this.physioRooms=[],this.dayRoomOrdered=[],this.weekView=!1,this.customPopoverOptions={cssClass:"custom-popover"},i.locale("it-IT")}presentAddBookingModal(){return Object(o.a)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:r.a,cssClass:"add-booking",componentProps:{appointments:this.appointments,physio:this.physio,selectedPhysio:this.selectedPhysio,rooms:this.rooms}});return e.onDidDismiss().then(e=>{console.log("Modale Prenotazione dismessa"),e.data.id!==this.selectedPhysio.id&&(this.selectedPhysio=e.data),this.getAppointmentsData()}),yield e.present()})}presentAlertAddPhysio(){return Object(o.a)(this,void 0,void 0,function*(){const e=yield this.alertController.create({cssClass:"custom-alert",header:"Aggiungi Fisioterapista",message:"Inserisci il nome",inputs:[{name:"name",type:"text",placeholder:"Nome Fisioterapista"}],buttons:[{text:"Annulla",role:"cancel"},{text:"Salva",handler:e=>{e.name&&this.addPhysio(e.name)}}]});yield e.present()})}presentToast(e){return Object(o.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,duration:2e3})).present()})}ngOnInit(){this.getAppointmentsData(),this.rooms=this.homeService.getRooms()}getAppointmentsData(){this.spinner.create(),this.homeService.getPhysio().then(e=>{this.physio=e,this.physio.sort((e,t)=>e.name.localeCompare(t.name)),this.selectedPhysio||(this.selectedPhysio=this.physio[0]),this.homeService.getAppointments().then(e=>{this.appointments=[];const t=Object(a.a)(new Date,"M/dd/y HH:mm",{locale:l.a});for(let n=0;n<e.length;n++)Object(a.a)(new Date(e[n].day+" "+e[n].startTime),"M/dd/y HH:mm",{locale:l.a})>t&&this.appointments.push(e[n]);this.appointments.sort((e,t)=>new Date(e.day+" "+e.startTime).getTime()-new Date(t.day+" "+t.startTime).getTime()),this.physioRooms=this.homeService.getPhysioDate(this.appointments),this.getDayRoomOrdered(this.appointments),this.spinner.dismiss()})})}removeAppointment(e){this.homeService.removeAppointment(e).then(()=>{this.getAppointmentsData(),this.presentToast("Appuntamento cancellato")}).catch(()=>{this.presentToast("Errore nella cancellazione dell'appuntamento")})}addPhysio(e){this.homeService.addPhysio(e).then(()=>{this.presentToast("Fisioterapista "+e+" aggiunto"),this.getAppointmentsData()}).catch(()=>{this.presentToast("Errore nell'aggiunta del Fisioterapista")})}getRoomFromId(e){for(let t=0;t<this.rooms.length;t++)if(e===this.rooms[t].roomId)return this.rooms[t].roomName}getDayRoomOrdered(e){return Object(o.a)(this,void 0,void 0,function*(){this.dayRoomOrdered=[];for(let t=0;t<e.length;t++){const n={date:this.homeService.getDayRightFormat(e[t].day,e[t].startTime),rooms:[{roomId:e[t].roomId,roomName:this.getRoomFromId(e[t].roomId),appointments:[{appointmentId:e[t].appointmentId,patientName:e[t].patientName,physioName:e[t].physioName,startTime:e[t].startTime,endTime:e[t].endTime,day:e[t].day}]}]};if(0===this.dayRoomOrdered.length)this.dayRoomOrdered.push(n);else if(this.dayRoomOrdered.find(n=>n.date===this.homeService.getDayRightFormat(e[t].day,e[t].startTime))){const o=this.dayRoomOrdered.findIndex(n=>n.date===this.homeService.getDayRightFormat(e[t].day,e[t].startTime));if(this.dayRoomOrdered[o].rooms.find(n=>n.roomId===e[t].roomId)){const i=this.dayRoomOrdered[o].rooms.findIndex(n=>n.roomId===e[t].roomId);this.dayRoomOrdered[o].rooms[i].appointments.push(n.rooms[0].appointments[0])}else this.dayRoomOrdered[o].rooms.push(n.rooms[0])}else this.dayRoomOrdered.push(n)}this.homeService.setDayRoomOrdered(this.dayRoomOrdered)})}toggleWeekView(){this.weekView=!this.weekView}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](m.a),s["\u0275\u0275directiveInject"](d.ModalController),s["\u0275\u0275directiveInject"](d.ToastController),s["\u0275\u0275directiveInject"](d.AlertController),s["\u0275\u0275directiveInject"](c))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-home"]],decls:17,vars:6,consts:[[2,"padding","0%","padding-top","0.3%"],["size","0.5",2,"padding","0%"],[2,"--border-radius","10px"],[1,"ion-text-center",2,"padding","0%"],["class","chip-custom",4,"ngIf"],["style","margin-top: 20px;",4,"ngIf"],[2,"padding","0%","margin-top","2%"],[4,"ngIf"],[1,"ion-text-center"],[3,"click",4,"ngIf"],[1,"chip-custom"],[1,"avatar-chip"],[3,"src"],["interface","popover",1,"chip-select",3,"ngModel","selectedText","value","interfaceOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[2,"margin-top","20px"],["size","small",3,"click"],["name","add"],["size","4",2,"padding","0%","margin-left","5%"],["animated","","placeholder","Cerca Paziente o Data",2,"--border-radius","10px","padding","0%",3,"ngModel","ngModelChange"],[2,"padding","0%","text-align","end","margin-right","5%"],["size","small",1,"button-week-view",3,"click"],["slot","icon-only","name","calendar-outline",2,"color","black"],["style"," padding: 0%;",4,"ngFor","ngForOf"],[2,"padding","0%"],[1,"card"],[2,"background-color","#f6f5f5","padding-bottom","1%","margin-bottom","1%"],["size","3",2,"padding-top","1.5%"],["size","2",2,"padding-top","1.5%"],["size","1",2,"padding-top","1.5%"],["style","align-items: center;",4,"ngFor","ngForOf"],[2,"align-items","center"],["size","3"],["size","2"],["size","1"],["fill","clear","color","danger",3,"click"],["name","trash-outline"],[1,"hr"],[1,"dayName",2,"margin-top","4%","margin-bottom","2%"],["style","padding: 0%; margin-top: 2%;","size","12",4,"ngFor","ngForOf"],["size","12",2,"padding","0%","margin-top","2%"],[1,"dayName"],["size","4",2,"padding-top","1.5%"],["size","4"],[1,"dayName",2,"margin-top","2%","margin-bottom","2%"],[3,"click"],[1,"label-button"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"ion-content"),s["\u0275\u0275elementStart"](1,"ion-grid",0),s["\u0275\u0275elementStart"](2,"ion-row"),s["\u0275\u0275elementStart"](3,"ion-col",1),s["\u0275\u0275element"](4,"ion-menu-button",2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"ion-row"),s["\u0275\u0275elementStart"](6,"ion-col",3),s["\u0275\u0275template"](7,f,5,6,"ion-chip",4),s["\u0275\u0275template"](8,y,3,0,"ion-fab",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"ion-grid",6),s["\u0275\u0275template"](10,v,6,1,"ion-row",7),s["\u0275\u0275template"](11,I,4,10,"ion-row",7),s["\u0275\u0275template"](12,k,3,6,"ion-row",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"ion-grid"),s["\u0275\u0275elementStart"](14,"ion-row"),s["\u0275\u0275elementStart"](15,"ion-col",8),s["\u0275\u0275template"](16,M,3,0,"ion-chip",9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("ngIf",t.physio),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.physio),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",t.appointments.length>0&&t.selectedPhysio),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!t.weekView&&t.appointments.length>0&&t.selectedPhysio),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.weekView&&t.physioRooms.length>0),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngIf",t.physio))},directives:[d.IonContent,d.IonGrid,d.IonRow,d.IonCol,d.IonMenuButton,p.NgIf,d.IonChip,d.IonAvatar,d.IonSelect,d.SelectValueAccessor,h.NgControlStatus,h.NgModel,p.NgForOf,d.IonSelectOption,d.IonFab,d.IonFabButton,d.IonIcon,d.IonSearchbar,d.TextValueAccessor,d.IonButton,d.IonCard,d.IonLabel],pipes:[p.SlicePipe,g],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]{--background:linear-gradient(360deg,#5490d9 27%,#4ea7df 95%)}ion-toggle[_ngcontent-%COMP%]{--background-checked:#8cb5e6;--handle-background-checked:#70a3df}ion-col[_ngcontent-%COMP%]{text-align:center;height:100%;display:block;vertical-align:middle}ion-fab-button[_ngcontent-%COMP%]{--background:rgba(0,0,0,0.12);--box-shadow:none;--color:#000}.button-week-view[_ngcontent-%COMP%]{--border-radius:10%;--background:#f6f5f5;height:35px}.hr[_ngcontent-%COMP%]{border-top:3px solid #f6f5f5;width:100%}.card[_ngcontent-%COMP%], .card-left[_ngcontent-%COMP%]{margin-left:5%;margin-right:5%}.card[_ngcontent-%COMP%], .card-center[_ngcontent-%COMP%], .card-left[_ngcontent-%COMP%], .card-right[_ngcontent-%COMP%]{border-radius:10px}.card-right[_ngcontent-%COMP%]{margin-right:5%}.label-button[_ngcontent-%COMP%]{font-weight:100;font-size:20px}.chip-custom[_ngcontent-%COMP%]{height:60px;width:200px;margin-top:18px}.avatar-chip[_ngcontent-%COMP%]{width:50px;height:50px}.chip-select[_ngcontent-%COMP%], .dayName[_ngcontent-%COMP%]{font-size:20px}.dayName[_ngcontent-%COMP%]{font-weight:700;color:#000;margin:0}p[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}"]}),e})()}}]);