!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{MCT3:function(t,o,r){"use strict";r.r(o),r.d(o,"AppointmentsPageModule",function(){return b});var i=r("ofXK"),a=r("3Pt+"),d=r("TEn/"),l=r("tyNb"),m=r("fXoL"),c=r("Ol7V"),p=r("zpKS");function s(e,n){if(1&e&&(m["\u0275\u0275elementStart"](0,"ion-row",21),m["\u0275\u0275element"](1,"ion-col",22),m["\u0275\u0275elementStart"](2,"ion-col",23),m["\u0275\u0275elementStart"](3,"ion-label"),m["\u0275\u0275text"](4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"ion-col",22),m["\u0275\u0275elementStart"](6,"ion-label"),m["\u0275\u0275text"](7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var t=n.$implicit;m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate"](t.patientName),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate"](t.physioName)}}function g(e,n){if(1&e&&(m["\u0275\u0275elementStart"](0,"ion-row",17),m["\u0275\u0275elementStart"](1,"ion-grid",7),m["\u0275\u0275elementStart"](2,"ion-row"),m["\u0275\u0275elementStart"](3,"ion-col",18),m["\u0275\u0275elementStart"](4,"ion-label"),m["\u0275\u0275text"](5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"ion-col",19),m["\u0275\u0275template"](7,s,8,2,"ion-row",20),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var t=n.$implicit;m["\u0275\u0275advance"](5),m["\u0275\u0275textInterpolate"](t.roomName),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngForOf",t.appointments)}}function f(e,n){if(1&e&&(m["\u0275\u0275elementStart"](0,"ion-col",5),m["\u0275\u0275elementStart"](1,"ion-card",6),m["\u0275\u0275elementStart"](2,"ion-grid",7),m["\u0275\u0275elementStart"](3,"ion-row",8),m["\u0275\u0275elementStart"](4,"ion-col",9),m["\u0275\u0275elementStart"](5,"p",10),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"ion-card",11),m["\u0275\u0275elementStart"](8,"ion-row",12),m["\u0275\u0275elementStart"](9,"ion-col",13),m["\u0275\u0275text"](10," Ora "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"ion-col",14),m["\u0275\u0275text"](12," Nome del Paziente "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"ion-col",15),m["\u0275\u0275text"](14," Nome del Fisioterapista "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](15,g,8,2,"ion-row",16),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var t=n.$implicit,o=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](6),m["\u0275\u0275textInterpolate1"](" ",o.homeService.getDayRightFormat(t.rooms[0].appointments[0].day,t.rooms[0].appointments[0].startTime,"weekDay")+" "+t.date," "),m["\u0275\u0275advance"](9),m["\u0275\u0275property"]("ngForOf",t.rooms)}}function u(e,n){if(1&e&&(m["\u0275\u0275elementStart"](0,"ion-row"),m["\u0275\u0275template"](1,f,16,2,"ion-col",4),m["\u0275\u0275elementEnd"]()),2&e){var t=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.dayRoomOrdered)}}function w(e,n){1&e&&(m["\u0275\u0275elementStart"](0,"ion-row"),m["\u0275\u0275elementStart"](1,"ion-col"),m["\u0275\u0275elementStart"](2,"h1"),m["\u0275\u0275text"](3,"Nessun appuntamento presente"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())}var v,y,x,S=[{path:"",component:(v=function(){function t(n,o){e(this,t),this.homeService=n,this.home=o,this.dayRoomOrdered=[]}var o,r,i;return o=t,(r=[{key:"ngOnInit",value:function(){var e=this;this.homeService.readDayRoomOrdered().then(function(){e.dayRoomOrdered=e.homeService.getDayRoomOrdered(),console.log(e.dayRoomOrdered)})}}])&&n(o.prototype,r),i&&n(o,i),t}(),v.\u0275fac=function(e){return new(e||v)(m["\u0275\u0275directiveInject"](c.a),m["\u0275\u0275directiveInject"](p.a))},v.\u0275cmp=m["\u0275\u0275defineComponent"]({type:v,selectors:[["app-appointments"]],decls:7,vars:2,consts:[[2,"padding","0%","padding-top","0.3%"],["size","0.5",2,"padding","0%"],[2,"--border-radius","10px"],[4,"ngIf"],["style","padding: 0%;","size","12",4,"ngFor","ngForOf"],["size","12",2,"padding","0%"],[1,"card-rooms"],[2,"padding","0%"],[2,"padding-bottom","1%"],[2,"padding-top","1.5%"],[1,"dayName"],[1,"dayCard"],[2,"margin-top","1%"],["size","3","offset","2",2,"padding","1.2% 0% 0.5% 0%"],["size","4",2,"padding","1.2% 0% 0.5% 0%"],["size","3",2,"padding","1.2% 0% 0.5% 0%"],["style","align-items: center;",4,"ngFor","ngForOf"],[2,"align-items","center"],["size","2",1,"col-room-view"],["size","10",2,"padding","0%","padding-bottom","1%"],["class","row-room-view",4,"ngFor","ngForOf"],[1,"row-room-view"],["size","3.65"],["size","4.65"]],template:function(e,n){1&e&&(m["\u0275\u0275elementStart"](0,"ion-content"),m["\u0275\u0275elementStart"](1,"ion-grid",0),m["\u0275\u0275elementStart"](2,"ion-row"),m["\u0275\u0275elementStart"](3,"ion-col",1),m["\u0275\u0275element"](4,"ion-menu-button",2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](5,u,2,1,"ion-row",3),m["\u0275\u0275template"](6,w,4,0,"ion-row",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngIf",n.dayRoomOrdered.length>0),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",0===n.dayRoomOrdered.length))},directives:[d.IonContent,d.IonGrid,d.IonRow,d.IonCol,d.IonMenuButton,i.NgIf,i.NgForOf,d.IonCard,d.IonLabel],styles:["ion-content[_ngcontent-%COMP%]{--background:linear-gradient(360deg,#5490d9 27%,#4ea7df 95%)}ion-col[_ngcontent-%COMP%]{text-align:center;height:100%;display:block;vertical-align:middle}.card-rooms[_ngcontent-%COMP%]{margin-left:5%;margin-right:5%;margin-top:0;border-radius:10px;background-color:transparent;box-shadow:none}.dayCard[_ngcontent-%COMP%]{background-color:#f6f5f5;border-radius:10px;margin:0}.dayName[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#000;margin:0}p[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}.col-room-view[_ngcontent-%COMP%]{padding:0;height:inherit;display:flex;align-items:center;justify-content:center}.row-room-view[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border-radius:10px 0 0 10px;border:2px solid #fff;margin-bottom:5px;margin-top:5px;box-shadow:0 3px 3px -3px rgba(0,0,0,.2)}.row-room-view[_ngcontent-%COMP%]:hover{border-top:2px solid #4ea7df;border-bottom:2px solid #4ea7df;border-left:2px solid #4ea7df}"]}),v)}],h=((x=function n(){e(this,n)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||x)},imports:[[l.i.forChild(S)],l.i]}),x),b=((y=function n(){e(this,n)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},providers:[p.a],imports:[[i.CommonModule,a.FormsModule,d.IonicModule,h]]}),y)}}])}();