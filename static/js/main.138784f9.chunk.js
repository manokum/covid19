(this.webpackJsonpcovid_mano=this.webpackJsonpcovid_mano||[]).push([[0],{10:function(e,a,t){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq",customers:"Cards_customers__Kb_Bn","MuiCardContent-root":"Cards_MuiCardContent-root__2u6Qq","width-300":"Cards_width-300__1T_LM",class1:"Cards_class1__HxjdV",class2:"Cards_class2__3xuUV",class3:"Cards_class3__3QEek",formControl:"Cards_formControl__2oNdk",flashColor:"Cards_flashColor__2Q0I5",font8:"Cards_font8__2kfL7",font11:"Cards_font11__2NcGR",fontWeight:"Cards_fontWeight__2xj-i",colorRed1:"Cards_colorRed1__2yc1_",colorGreen1:"Cards_colorGreen1__2iriq",testPadding:"Cards_testPadding__2kBvI",testPadding1:"Cards_testPadding1__lLpyK",colorRed:"Cards_colorRed__1Gk9Q",colorGreen:"Cards_colorGreen__15wp3"}},102:function(e,a){},107:function(e,a,t){e.exports={container:"Chart_container__1PIOn"}},108:function(e,a,t){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},11:function(e,a,t){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1",image1:"App_image1__2PO85","MuiCardContent-root":"App_MuiCardContent-root__VrPBm",navcenter:"App_navcenter__bgi5A",navbar:"App_navbar__3gDlA",navbar__link:"App_navbar__link__2gPI6",navbar__link__active:"App_navbar__link__active__F5ujP",removeborder:"App_removeborder__3eSW8"}},112:function(e,a,t){e.exports=t.p+"static/media/image.2ce01c11.jpg"},116:function(e,a,t){e.exports=t(237)},237:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(103),s=t.n(c),l=t(4),o=t(5),i=t.n(o),d=t(13),m=t(104),u=t(105),_=t(113),f=t(114),v=t(54),p=t(19),b=t(29),E=t(27),h=t.n(E),g="https://covid19.mathdro.id/api",N=function(){var e=Object(d.a)(i.a.mark((function e(a){var t,n,r,c,s,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g,a&&(t="".concat(g,"/countries/").concat(a)),e.prev=2,e.next=5,h.a.get(t);case 5:return n=e.sent,r=n.data,c=r.confirmed,s=r.recovered,l=r.deaths,o=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:s,deaths:l,lastUpdate:o});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(a){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(g,"/daily"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t.map((function(e){var a=e.confirmed,t=e.deaths,n=e.reportDate;return{confirmed:a.total,deaths:t.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(g,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat("https://api.covid19india.org/zones.json"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t.zones.map((function(e){return{district:e.district,state:e.state,zone:e.zone,statecode:e.lastupdated}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat("https://api.covid19india.org/data.json"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t.statewise.map((function(e){var a=e.confirmed,t=e.active,n=e.deltaconfirmed,r=e.deaths,c=e.recovered,s=e.state,l=e.lastupdatedtime,o=e.deltadeaths;return{deltarecovered:e.deltarecovered,deltadeaths:o,deltaconfirmed:n,confirmed:a,active:t,deaths:r,recovered:c,states:s,lastupdatedtime:l}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=t(107),x=t.n(y),k=function e(a){var t=a.data,c=t.confirmed,s=t.recovered,l=t.deaths,o=a.country;console.log("Chart",e);var m=Object(n.useState)({}),u=Object(p.a)(m,2),_=u[0],f=u[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:a=e.sent,f(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var E=c?r.a.createElement(b.b,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"No of People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[c.value,s.value,l.value]}]},options:{legend:{display:!1}}}):null,h=_[0]?r.a.createElement(b.a,{data:{labels:[Object(v.a)(_).pop().date],datasets:[{label:"Confirmed",backgroundColor:"rgba(0, 0, 255, 0.5)",borderColor:"rgba(0, 0, 255, 0.5)",borderWidth:2,data:[Object(v.a)(_).pop().confirmed]},{label:"Deaths",backgroundColor:"rgba(0, 255, 0, 0.5)",borderColor:"rgba(0, 255, 0, 0.5)",borderWidth:2,data:[Object(v.a)(_).pop().deaths]}]},options:{title:{display:!1,text:"World Data",fontSize:10},legend:{display:!0,position:"bottom"},maintainAspectRatio:!1,scales:{yAxes:[{display:!1}]}}}):null;return r.a.createElement("div",{className:x.a.container},o?E:h)},I=t(260),D=t(259),P=t(108),W=t.n(P),R=function(e){var a=e.handleCountryChange,t=Object(n.useState)([]),c=Object(p.a)(t,2),s=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,C();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(I.a,{className:W.a.formControl},r.a.createElement(D.a,{defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"World"),s.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))))},S=(t(232),t(235),t(254)),A=t(258),G=t(257),B=t(252),z=t(255),F=t(256),L=t(253),M=t(10),Q=t.n(M),U=function(e){var a,t,n=e.data,c=n.confirmed,s=n.recovered,o=n.deaths,i=n.lastUpdate;return c?r.a.createElement("div",{className:Q.a.container},r.a.createElement("caption",{className:Q.a.flashColor},"Last Updated : ",new Date(i).toDateString()," ",new Date(i).toLocaleTimeString()," "),r.a.createElement(B.a,{component:L.a},r.a.createElement(S.a,{className:Q.a.customers,"aria-label":"simple table"},r.a.createElement(z.a,{className:Q.a.fontWeight},r.a.createElement(F.a,null,r.a.createElement(G.a,{className:Q.a.fontWeight},"Confirmed"),r.a.createElement(G.a,(a={className:Q.a.fontWeight},Object(l.a)(a,"className",Q.a.testPadding),Object(l.a)(a,"className",Q.a.colorRed1),a),"Recovered"),r.a.createElement(G.a,(t={className:Q.a.fontWeight},Object(l.a)(t,"className",Q.a.testPadding),Object(l.a)(t,"className",Q.a.colorGreen1),t),"R Rate."),r.a.createElement(G.a,Object(l.a)({className:Q.a.fontWeight},"className",Q.a.testPadding1),"Deaths"),r.a.createElement(G.a,Object(l.a)({className:Q.a.fontWeight},"className",Q.a.testPadding1),"D Rate."))),r.a.createElement(A.a,null,r.a.createElement(F.a,null,r.a.createElement(G.a,Object(l.a)({component:"th",scope:"row",className:Q.a.fontWeight},"className",Q.a.testPadding1),c.value),r.a.createElement(G.a,Object(l.a)({className:Q.a.colorRed},"className",Q.a.colorRed),s.value),r.a.createElement(G.a,Object(l.a)({className:Q.a.colorGreen},"className",Q.a.colorGreen),Number(s.value/c.value*100).toFixed(0),"%"),r.a.createElement(G.a,{className:Q.a.testPadding},o.value),r.a.createElement(G.a,{className:Q.a.font8},Number(o.value/c.value*100).toFixed(0),"%")))))):"Loading..."},q=t(15),K=t.n(q),V=t(6),J=t.n(V),T=function(e){var a,t,c=e.data,s=(c.confirmed,c.active,c.deltaconfirmed,c.deaths,c.recovered,c.states,c.lastupdatedtime,c.deltadeaths,c.deltarecovered,Object(n.useState)([])),o=Object(p.a)(s,2),m=o[0],u=o[1];return console.log("data CasesByRate",m),Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:J.a.container},r.a.createElement(B.a,{component:L.a},r.a.createElement(S.a,{className:J.a.customers,"aria-label":"simple table"},r.a.createElement(z.a,{className:J.a.fontWeight},r.a.createElement(F.a,null,r.a.createElement(G.a,{className:J.a.fontWeight},"States"),r.a.createElement(G.a,(a={className:J.a.fontWeight},Object(l.a)(a,"className",J.a.testPadding),Object(l.a)(a,"className",J.a.colorRed1),a),"Confirmed"),r.a.createElement(G.a,Object(l.a)({className:J.a.fontWeight},"className",J.a.testPadding1),"Active"),r.a.createElement(G.a,(t={className:J.a.fontWeight},Object(l.a)(t,"className",J.a.testPadding),Object(l.a)(t,"className",J.a.colorGreen1),t),"Recovered"),r.a.createElement(G.a,Object(l.a)({className:J.a.fontWeight},"className",J.a.testPadding1),"Deaths"),r.a.createElement(G.a,Object(l.a)({className:J.a.fontWeight},"className",J.a.testPadding1),"Last Updated"))),r.a.createElement(A.a,null,m.map((function(e,a){return r.a.createElement(F.a,{key:a},r.a.createElement(G.a,Object(l.a)({component:"th",scope:"row",className:J.a.fontWeight},"className",J.a.testPadding1),e.states),r.a.createElement(G.a,Object(l.a)({className:J.a.colorRed},"className",J.a.colorRed),r.a.createElement("div",null,e.confirmed),r.a.createElement("div",{className:J.a.visiblehide},"gg"),r.a.createElement("div",null,e.deltaconfirmed,r.a.createElement("span",{className:J.a.arrowCss},K.a.arrowN))),r.a.createElement(G.a,Object(l.a)({className:J.a.colorRed},"className",J.a.colorRed),r.a.createElement("div",null,e.active),r.a.createElement("div",null,Number(e.active/e.confirmed*100).toFixed(0),"%"),r.a.createElement("div",{className:J.a.visiblehide},"gg")),r.a.createElement(G.a,Object(l.a)({className:J.a.colorGreen},"className",J.a.colorGreen),r.a.createElement("div",null,e.recovered),r.a.createElement("div",null,Number(e.recovered/e.confirmed*100).toFixed(0),"%"),r.a.createElement("div",null,e.deltarecovered,r.a.createElement("span",{className:J.a.arrowCss},K.a.arrowN))),r.a.createElement(G.a,{className:J.a.testPadding},r.a.createElement("div",null,e.deaths," "),r.a.createElement("div",null,Number(e.deaths/e.confirmed*100).toFixed(0),"%"),r.a.createElement("div",null,e.deltadeaths,r.a.createElement("span",{className:J.a.arrowCss},K.a.arrowN))),r.a.createElement(G.a,{className:J.a.font8},e.lastupdatedtime))}))))))},Y=t(7),Z=t.n(Y),H=function(e){e.data;var a,t,n=r.a.useState(null),c=Object(p.a)(n,2),s=c[0],o=c[1],i=r.a.useState(null),d=Object(p.a)(i,2),m=d[0],u=d[1],_=r.a.useState(null),f=Object(p.a)(_,2),v=f[0],b=f[1];return r.a.useEffect((function(){fetch("https://api.covid19india.org/state_district_wise.json").then((function(e){return e.json()})).then((function(e){console.log("data",e),window.data=e;window.result={},console.log("widnow Data",window.data);var a=Object.keys(window.data);console.log("widnow allSt",a),b(a),function(e){for(var a in window.data)e.indexOf(a)>-1&&(window.result[a]=window.data[a]);console.log("result",window.result)}(["Andaman and Nicobar Islands"]),console.log("window.result",window.result);var t=Object.values(window.result);console.log("window.result['key'].districtData",t);var n=t[0].districtData;console.log("test1",n),Object.keys(n);var r=Object.keys(n),c=Object.entries(n);console.log("test2",r),console.log("test3",c),o(c),u(r)}))}),[]),r.a.createElement("div",{className:Z.a.container},s&&m&&v?r.a.createElement("div",null,r.a.createElement(I.a,{className:Z.a.formControl},r.a.createElement(D.a,{defaultValue:"",onChange:function(e){return function(e){for(var a in console.log("inside handleCountryChange",e),window.result={},window.data)e.indexOf(a)>-1&&(window.result[a]=window.data[a]);console.log("widnow Data",window.data);var t=Object.keys(window.data);console.log("widnow allSt",t),b(t),console.log("window.result",window.result);var n=Object.values(window.result);console.log("window.result['key'].districtData",n);var r=n[0].districtData;console.log("test1",r),Object.keys(r);var c=Object.keys(r),s=Object.entries(r);console.log("test2",c),console.log("test3",s),o(s),u(c)}(e.target.value)}},v.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)})))),r.a.createElement(B.a,{component:L.a},r.a.createElement(S.a,{className:Z.a.customers,"aria-label":"simple table"},r.a.createElement(z.a,{className:Z.a.fontWeight},r.a.createElement(F.a,null,r.a.createElement(G.a,{className:Z.a.fontWeight},r.a.createElement("div",null,"District"),r.a.createElement("div",null,"Total"),"Rate",r.a.createElement("div",null)),r.a.createElement(G.a,(a={className:Z.a.fontWeight},Object(l.a)(a,"className",Z.a.testPadding),Object(l.a)(a,"className",Z.a.colorRed1),a),r.a.createElement("div",null,"Confirmed"),r.a.createElement("div",null,s.reduce((function(e,a){return e+a[1].confirmed}),0)),r.a.createElement("div",{className:Z.a.visibilityhidden},"-")),r.a.createElement(G.a,(t={className:Z.a.fontWeight},Object(l.a)(t,"className",Z.a.testPadding),Object(l.a)(t,"className",Z.a.colorGreen1),t),r.a.createElement("div",null,"Active"),r.a.createElement("div",null,s.reduce((function(e,a){return e+a[1].active}),0)),r.a.createElement("div",null,Number(s.reduce((function(e,a){return e+a[1].active}),0)/s.reduce((function(e,a){return e+a[1].confirmed}),0)*100).toFixed(0),"%")),r.a.createElement(G.a,Object(l.a)({className:Z.a.fontWeight},"className",Z.a.testPadding1),r.a.createElement("div",null,"Deaths"),r.a.createElement("div",null,s.reduce((function(e,a){return e+a[1].deceased}),0)),r.a.createElement("div",null,Number(s.reduce((function(e,a){return e+a[1].deceased}),0)/s.reduce((function(e,a){return e+a[1].confirmed}),0)*100).toFixed(0),"%")),r.a.createElement(G.a,Object(l.a)({className:Z.a.fontWeight},"className",Z.a.testPadding1),r.a.createElement("div",null,"Recovered"),r.a.createElement("div",null,s.reduce((function(e,a){return e+a[1].recovered}),0)),r.a.createElement("div",null,Number(s.reduce((function(e,a){return e+a[1].recovered}),0)/s.reduce((function(e,a){return e+a[1].confirmed}),0)*100).toFixed(0),"%")))),r.a.createElement(A.a,null,s.map((function(e,a){return r.a.createElement(F.a,{key:a},r.a.createElement(G.a,Object(l.a)({component:"th",scope:"row",className:Z.a.fontWeight},"className",Z.a.testPadding1),e[0]),r.a.createElement(G.a,Object(l.a)({className:Z.a.colorRed},"className",Z.a.colorRed),r.a.createElement("div",null,e[1].confirmed,"  "),r.a.createElement("div",null,e[1].delta.confirmed,r.a.createElement("span",{className:Z.a.arrowCss},K.a.arrowN))),r.a.createElement(G.a,Object(l.a)({className:Z.a.colorGreen},"className",Z.a.colorGreen),e[1].active),r.a.createElement(G.a,{className:Z.a.testPadding},r.a.createElement("div",null,e[1].deceased)," ",r.a.createElement("div",null,e[1].delta.deceased,r.a.createElement("span",{className:Z.a.arrowCss},K.a.arrowN))),r.a.createElement(G.a,{className:Z.a.font8},r.a.createElement("div",null,e[1].recovered),r.a.createElement("div",null,e[1].delta.recovered,r.a.createElement("span",{className:Z.a.arrowCss},K.a.arrowN))))})))))):"Loading...")},X=t(36),$=t.n(X),ee=function(e){e.data,e.state,e.zone;var a=Object(n.useState)([]),t=Object(p.a)(a,2),c=t[0],s=t[1];return console.log("data dailyData : ddistrict",c),Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:a=e.sent,s(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:$.a.container},c[0]?r.a.createElement("div",null,r.a.createElement(B.a,{component:L.a},r.a.createElement(S.a,{"aria-label":"simple table"},r.a.createElement(z.a,{className:$.a.fontWeight},r.a.createElement(F.a,null,r.a.createElement(G.a,{className:$.a.fontWeight},"State"),r.a.createElement(G.a,{className:$.a.fontWeight},"District"),r.a.createElement(G.a,{className:$.a.fontWeight},"Zone"))),r.a.createElement(A.a,null,c.map((function(e,a){return r.a.createElement(F.a,{key:a},r.a.createElement(G.a,{component:"th",scope:"row"},e.state),r.a.createElement(G.a,null,e.district),r.a.createElement(G.a,null,r.a.createElement("span",null,e.zone)))})))))):"Loading")},ae=(t(102),t(11)),te=t.n(ae),ne=t(32),re=t(112),ce=t.n(re),se=t(12),le=function(e){Object(f.a)(t,e);var a=Object(_.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var a=Object(d.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,N(t);case 2:n=a.sent,e.setState({data:n,country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:a=e.sent,this.setState({data:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.country;return r.a.createElement(ne.a,{basename:"/"},r.a.createElement("div",{className:te.a.container},r.a.createElement("img",{className:te.a.image,src:ce.a,alt:"COVID-19"}),r.a.createElement("nav",Object(l.a)({className:te.a.navcenter,role:"navigation"},"className",te.a.navbar),r.a.createElement("div",{className:te.a.navwrapper},r.a.createElement(ne.b,{exact:!0,activeClassName:te.a.navbar__link__active,className:te.a.navbar__link,to:"/"},r.a.createElement("span",{className:te.a.removeborder},K.a.globe),"World"),r.a.createElement(ne.b,{activeClassName:te.a.navbar__link__active,className:te.a.navbar__link,to:"/indiaall"},"  ",r.a.createElement("span",{className:te.a.removeborder},K.a.castle),"India"),r.a.createElement(ne.b,{activeClassName:te.a.navbar__link__active,className:te.a.navbar__link,to:"/india"},r.a.createElement("span",{className:te.a.removeborder},K.a.map),"State"),r.a.createElement(ne.b,{activeClassName:te.a.navbar__link__active,className:te.a.navbar__link,to:"/zonedata"},r.a.createElement("span",{className:te.a.removeborder},K.a.homes),"Zone"))),r.a.createElement(se.c,null,r.a.createElement(se.a,{exact:!0,path:"/"},r.a.createElement("div",{className:te.a.container},r.a.createElement("div",{className:te.a.container},r.a.createElement(R,{handleCountryChange:this.handleCountryChange}),r.a.createElement(k,{data:a,country:t}),r.a.createElement(U,{data:a})))),r.a.createElement(se.a,{exact:!0,path:"/indiaall"},r.a.createElement("div",{className:te.a.container},r.a.createElement(T,{data:a}))),r.a.createElement(se.a,{exact:!0,path:"/india"},r.a.createElement(H,null)),r.a.createElement(se.a,{exact:!0,path:"/zonedata"},r.a.createElement("div",{className:te.a.container},r.a.createElement(ee,null))))))}}]),t}(r.a.Component);s.a.render(r.a.createElement(le,null),document.getElementById("root"))},36:function(e,a,t){e.exports={container:"IndiaAllDistrict_container__2_Fgs",customers:"IndiaAllDistrict_customers__3lRIm",class1:"IndiaAllDistrict_class1__Brph_",class3:"IndiaAllDistrict_class3__2x5_h",formControl:"IndiaAllDistrict_formControl__1UMJQ",arrowCss:"IndiaAllDistrict_arrowCss__2NBpI",font8:"IndiaAllDistrict_font8__3N7Cl",font11:"IndiaAllDistrict_font11__3Y3_j",fontWeight:"IndiaAllDistrict_fontWeight__w1gh-",colorRed1:"IndiaAllDistrict_colorRed1__1UKua",colorGreen1:"IndiaAllDistrict_colorGreen1__78DxU",testPadding:"IndiaAllDistrict_testPadding__qN4_9",testPadding1:"IndiaAllDistrict_testPadding1__38e4W",colorRed:"IndiaAllDistrict_colorRed__3irA9",colorGreen:"IndiaAllDistrict_colorGreen__1xOfz",hidden:"IndiaAllDistrict_hidden__2NYwb",visibilityhidden:"IndiaAllDistrict_visibilityhidden__MefhK"}},6:function(e,a,t){e.exports={container:"Cases_container__Dk1Kb",customers:"Cases_customers__vXvDs",testPadding:"Cases_testPadding__isG9K",colorRed:"Cases_colorRed__17TAq",colorGreen:"Cases_colorGreen__2Cs8B",font8:"Cases_font8__2PdIx",font11:"Cases_font11__14_SL",fontWeight:"Cases_fontWeight__2N_VM",colorRed1:"Cases_colorRed1__3iYfG",colorGreen1:"Cases_colorGreen1__UawZi",testPadding1:"Cases_testPadding1__3oeC4",arrowCss:"Cases_arrowCss__3bxoR",visiblehide:"Cases_visiblehide__2ZQRq"}},7:function(e,a,t){e.exports={container:"IndiaByState_container__3gYJP",customers:"IndiaByState_customers__rdqWe",class1:"IndiaByState_class1__3Q5gh",class3:"IndiaByState_class3__2gSmu",formControl:"IndiaByState_formControl__3XmAD",arrowCss:"IndiaByState_arrowCss__DbDFq",font8:"IndiaByState_font8__3S-QS",font11:"IndiaByState_font11__1Q9aM",fontWeight:"IndiaByState_fontWeight__2ClJ1",colorRed1:"IndiaByState_colorRed1__1OpWu",colorGreen1:"IndiaByState_colorGreen1__1a3NH",testPadding:"IndiaByState_testPadding__3We9N",testPadding1:"IndiaByState_testPadding1__8CIfK",colorRed:"IndiaByState_colorRed__1fACL",colorGreen:"IndiaByState_colorGreen__26Gu_",hidden:"IndiaByState_hidden__3sT0O",visibilityhidden:"IndiaByState_visibilityhidden__3F0vn"}}},[[116,1,2]]]);
//# sourceMappingURL=main.138784f9.chunk.js.map