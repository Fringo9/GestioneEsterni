(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{MCT3:function(e,t,n){"use strict";n.r(t),n.d(t,"AppointmentsPageModule",function(){return x});var o=n("ofXK"),r=n("3Pt+"),i=n("TEn/"),a=n("tyNb"),d=n("fXoL"),l=n("Ol7V"),m=n("zpKS");function c(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ion-row",21),d["\u0275\u0275element"](1,"ion-col",22),d["\u0275\u0275elementStart"](2,"ion-col",23),d["\u0275\u0275elementStart"](3,"ion-label"),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"ion-col",22),d["\u0275\u0275elementStart"](6,"ion-label"),d["\u0275\u0275text"](7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate"](e.patientName),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](e.physioName)}}function p(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ion-row",17),d["\u0275\u0275elementStart"](1,"ion-grid",7),d["\u0275\u0275elementStart"](2,"ion-row"),d["\u0275\u0275elementStart"](3,"ion-col",18),d["\u0275\u0275elementStart"](4,"ion-label"),d["\u0275\u0275text"](5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"ion-col",19),d["\u0275\u0275template"](7,c,8,2,"ion-row",20),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](e.roomName),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",e.appointments)}}function s(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ion-col",5),d["\u0275\u0275elementStart"](1,"ion-card",6),d["\u0275\u0275elementStart"](2,"ion-grid",7),d["\u0275\u0275elementStart"](3,"ion-row",8),d["\u0275\u0275elementStart"](4,"ion-col",9),d["\u0275\u0275elementStart"](5,"p",10),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"ion-card",11),d["\u0275\u0275elementStart"](8,"ion-row",12),d["\u0275\u0275elementStart"](9,"ion-col",13),d["\u0275\u0275text"](10," Ora "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"ion-col",14),d["\u0275\u0275text"](12," Nome del Paziente "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"ion-col",15),d["\u0275\u0275text"](14," Nome del Fisioterapista "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](15,p,8,2,"ion-row",16),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](6),d["\u0275\u0275textInterpolate1"](" ",n.homeService.getDayRightFormat(e.rooms[0].appointments[0].day,e.rooms[0].appointments[0].startTime,"weekDay")+" "+e.date," "),d["\u0275\u0275advance"](9),d["\u0275\u0275property"]("ngForOf",e.rooms)}}function g(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ion-row"),d["\u0275\u0275template"](1,s,16,2,"ion-col",4),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.dayRoomOrdered)}}function f(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"ion-row"),d["\u0275\u0275elementStart"](1,"ion-col"),d["\u0275\u0275elementStart"](2,"h1"),d["\u0275\u0275text"](3,"Nessun appuntamento presente"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]())}const u=[{path:"",component:(()=>{class e{constructor(e,t){this.homeService=e,this.home=t,this.dayRoomOrdered=[]}ngOnInit(){this.homeService.readDayRoomOrdered().then(()=>{this.dayRoomOrdered=this.homeService.getDayRoomOrdered(),console.log(this.dayRoomOrdered)})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](l.a),d["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-appointments"]],decls:7,vars:2,consts:[[2,"padding","0%","padding-top","0.3%"],["size","0.5",2,"padding","0%"],[2,"--border-radius","10px"],[4,"ngIf"],["style","padding: 0%;","size","12",4,"ngFor","ngForOf"],["size","12",2,"padding","0%"],[1,"card-rooms"],[2,"padding","0%"],[2,"padding-bottom","1%"],[2,"padding-top","1.5%"],[1,"dayName"],[1,"dayCard"],[2,"margin-top","1%"],["size","3","offset","2",2,"padding","1.2% 0% 0.5% 0%"],["size","4",2,"padding","1.2% 0% 0.5% 0%"],["size","3",2,"padding","1.2% 0% 0.5% 0%"],["style","align-items: center;",4,"ngFor","ngForOf"],[2,"align-items","center"],["size","2",1,"col-room-view"],["size","10",2,"padding","0%","padding-bottom","1%"],["class","row-room-view",4,"ngFor","ngForOf"],[1,"row-room-view"],["size","3.65"],["size","4.65"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"ion-content"),d["\u0275\u0275elementStart"](1,"ion-grid",0),d["\u0275\u0275elementStart"](2,"ion-row"),d["\u0275\u0275elementStart"](3,"ion-col",1),d["\u0275\u0275element"](4,"ion-menu-button",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](5,g,2,1,"ion-row",3),d["\u0275\u0275template"](6,f,4,0,"ion-row",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngIf",t.dayRoomOrdered.length>0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",0===t.dayRoomOrdered.length))},directives:[i.IonContent,i.IonGrid,i.IonRow,i.IonCol,i.IonMenuButton,o.NgIf,o.NgForOf,i.IonCard,i.IonLabel],styles:["ion-content[_ngcontent-%COMP%]{--background:linear-gradient(360deg,#5490d9 27%,#4ea7df 95%)}ion-col[_ngcontent-%COMP%]{text-align:center;height:100%;display:block;vertical-align:middle}.card-rooms[_ngcontent-%COMP%]{margin-left:5%;margin-right:5%;margin-top:0;border-radius:10px;background-color:transparent;box-shadow:none}.dayCard[_ngcontent-%COMP%]{background-color:#f6f5f5;border-radius:10px;margin:0}.dayName[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#000;margin:0}p[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}.col-room-view[_ngcontent-%COMP%]{padding:0;height:inherit;display:flex;align-items:center;justify-content:center}.row-room-view[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border-radius:10px 0 0 10px;border:2px solid #fff;margin-bottom:5px;margin-top:5px;box-shadow:0 3px 3px -3px rgba(0,0,0,.2)}.row-room-view[_ngcontent-%COMP%]:hover{border-top:2px solid #4ea7df;border-bottom:2px solid #4ea7df;border-left:2px solid #4ea7df}"]}),e})()}];let w=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.i.forChild(u)],a.i]}),e})(),x=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[m.a],imports:[[o.CommonModule,r.FormsModule,i.IonicModule,w]]}),e})()}}]);