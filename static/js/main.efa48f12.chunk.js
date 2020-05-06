(this.webpackJsonpcovid_mano=this.webpackJsonpcovid_mano||[]).push([[0],{100:function(e,t,a){e.exports=a(219)},12:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq","MuiCardContent-root":"Cards_MuiCardContent-root__2u6Qq","width-300":"Cards_width-300__1T_LM",class1:"Cards_class1__HxjdV",class2:"Cards_class2__3xuUV",class3:"Cards_class3__3QEek"}},14:function(e,t,a){e.exports={container:"IndiaByState_container__3gYJP",customers:"IndiaByState_customers__rdqWe",class1:"IndiaByState_class1__3Q5gh",class3:"IndiaByState_class3__2gSmu",formControl:"IndiaByState_formControl__3XmAD"}},219:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(86),o=a.n(c),l=a(4),s=a.n(l),u=a(7),i=a(87),d=a(88),m=a(97),p=a(98),f=a(17),v=a(24),E=a(28),h=a.n(E),b="https://covid19.mathdro.id/api",w=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,r,c,o,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b,t&&(a="".concat(b,"/countries/").concat(t)),e.prev=2,e.next=5,h.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:u});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(b,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(b,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat("https://api.covid19india.org/data.json"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.statewise.map((function(e){return{confirmed:e.confirmed,deaths:e.deaths,recovered:e.recovered,states:e.state}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=a(90),x=a.n(C),j=function e(t){var a=t.data,c=a.confirmed,o=a.recovered,l=a.deaths,i=t.country;console.log("Chart",e);var d=Object(n.useState)({}),m=Object(f.a)(d,2),p=m[0],E=m[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,E(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=c?r.a.createElement(v.c,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"No of People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[c.value,o.value,l.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(i)}}}):null,b=p[0]?r.a.createElement(v.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:x.a.container},i?h:b)},O=a(240),N=a(239),k=a(91),S=a.n(k),D=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(f.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(O.a,{className:S.a.formControl},r.a.createElement(N.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},I=a(236),A=a(241),B=a(237),M=a(238),V=a(44),R=a.n(V),P=a(34),Q=a.n(P),U=a(12),F=a.n(U),q=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:F.a.container},r.a.createElement(I.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(I.a,{item:!0,xs:12,md:3,component:A.a,className:Q()(F.a.card,F.a.infected)},r.a.createElement(B.a,null,r.a.createElement(M.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(M.a,{variant:"h5",component:"h2"},r.a.createElement(R.a,{start:0,end:a.value,duration:1,separator:","})),r.a.createElement(M.a,{variant:"body2",component:"p"},"No of active cases"))),r.a.createElement(I.a,{item:!0,xs:12,md:3,component:A.a,className:Q()(F.a.card,F.a.recovered)},r.a.createElement(B.a,null,r.a.createElement(M.a,{color:"textSecondary",gutterBottom:!0},"Recovered : ",r.a.createElement("span",{className:Number(n.value/a.value*100).toFixed(0)>25?F.a.class3:F.a.class1},Number(n.value/a.value*100).toFixed(0),"%")),r.a.createElement(M.a,{variant:"h5",component:"h2"},r.a.createElement(R.a,{start:0,end:n.value,duration:1,separator:","})),r.a.createElement(M.a,null),r.a.createElement(M.a,null),r.a.createElement(M.a,{variant:"body2",component:"p"},"No.of recoveries made"))),r.a.createElement(I.a,{item:!0,xs:12,md:3,component:A.a,className:Q()(F.a.card,F.a.deaths)},r.a.createElement(B.a,null,r.a.createElement(M.a,{color:"textSecondary",gutterBottom:!0},"Deaths : ",r.a.createElement("span",{className:Number(c.value/a.value*100).toFixed(0)>5?F.a.class1:F.a.class2},Number(c.value/a.value*100).toFixed(0),"%")),r.a.createElement(M.a,{variant:"h5",component:"h2"},r.a.createElement(R.a,{start:0,end:c.value,duration:1,separator:","})),r.a.createElement(M.a,{variant:"body2",component:"p"},"Number of deaths COVID19."),r.a.createElement(M.a,null))),r.a.createElement(I.a,{item:!0,xs:12,md:3,component:A.a,className:Q()(F.a.card)},r.a.createElement(B.a,null,r.a.createElement(M.a,{color:"textSecondary"},new Date(o).toDateString()))))):"Loading..."},J=a(56),L=a.n(J),z=function(e){var t=e.data,a=t.confirmed,c=(t.deaths,t.recovered,t.states,Object(n.useState)([])),o=Object(f.a)(c,2),l=o[0],i=o[1];console.log("data CasesByRate",l),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,y();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d={datasets:[{label:"Confirmed",data:l.map((function(e){return e.confirmed})),backgroundColor:["rgba(0, 0, 255, 0.5)"]},{label:"Deaths",data:l.map((function(e){return e.deaths})),backgroundColor:["rgba(0, 255, 0, 0.5)"]},{label:"Recovered",data:l.map((function(e){return e.recovered})),backgroundColor:["rgba(255, 0, 0, 0.5)"]}],labels:["India"]};a&&v.a;return r.a.createElement("div",{className:L.a.container},r.a.createElement("table",{className:L.a.customers},r.a.createElement("caption",null,"All States Data"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"States"),r.a.createElement("th",null,"Confirmed"),r.a.createElement("th",null,"Deaths"),r.a.createElement("th",null,"Recovered"))),r.a.createElement("tbody",null,l.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.states),r.a.createElement("td",null,e.confirmed),r.a.createElement("td",null,e.deaths),r.a.createElement("td",null,e.recovered))})))))},G=a(14),W=a.n(G),X=function(e){e.data;var t=r.a.useState(null),a=Object(f.a)(t,2),n=a[0],c=a[1],o=r.a.useState(null),l=Object(f.a)(o,2),s=l[0],u=l[1],i=r.a.useState(null),d=Object(f.a)(i,2),m=d[0],p=d[1];return r.a.useEffect((function(){fetch("https://api.covid19india.org/state_district_wise.json").then((function(e){return e.json()})).then((function(e){console.log("data",e),window.data=e;window.result={},console.log("widnow Data",window.data);var t=Object.keys(window.data);console.log("widnow allSt",t),p(t),function(e){for(var t in window.data)e.indexOf(t)>-1&&(window.result[t]=window.data[t]);console.log("result",window.result)}(["Assam"]),console.log("window.result",window.result);var a=Object.values(window.result);console.log("window.result['key'].districtData",a);var n=a[0].districtData;console.log("test1",n),Object.keys(n);var r=Object.keys(n),o=Object.entries(n);console.log("test2",r),console.log("test3",o),c(o),u(r)}))}),[]),r.a.createElement("div",{className:W.a.container},n&&s&&m?r.a.createElement("div",null,r.a.createElement(O.a,{className:W.a.formControl},r.a.createElement(N.a,{defaultValue:"",onChange:function(e){return function(e){for(var t in console.log("inside handleCountryChange",e),window.result={},window.data)e.indexOf(t)>-1&&(window.result[t]=window.data[t]);console.log("widnow Data",window.data);var a=Object.keys(window.data);console.log("widnow allSt",a),p(a),console.log("window.result",window.result);var n=Object.values(window.result);console.log("window.result['key'].districtData",n);var r=n[0].districtData;console.log("test1",r),Object.keys(r);var o=Object.keys(r),l=Object.entries(r);console.log("test2",o),console.log("test3",l),c(l),u(o)}(e.target.value)}},m.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("table",{className:W.a.customers},r.a.createElement("caption",null,"All States Data"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"District"),r.a.createElement("th",null,"Confirmed"),r.a.createElement("th",null,"Active"),r.a.createElement("th",null,"Deaths"),r.a.createElement("th",null,"Recovered"))),r.a.createElement("tbody",null,n.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e[0]),r.a.createElement("td",{className:e[1].confirmed>25?W.a.class3:W.a.class1},e[1].confirmed),r.a.createElement("td",{className:e[1].active>25?W.a.class3:W.a.class1},e[1].active),r.a.createElement("td",{className:e[1].deceased>25?W.a.class3:W.a.class1},e[1].deceased),r.a.createElement("td",{className:e[1].recovered>25?W.a.class3:W.a.class1},e[1].recovered))}))))," "):"Loading...")},Y=a(22),H=a.n(Y),K=a(95),T=a.n(K),Z=a(35),$=a(21),ee=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement(Z.a,{basename:"/"},r.a.createElement("div",{className:H.a.container},r.a.createElement("img",{className:H.a.image,src:T.a,alt:"COVID-19"}),r.a.createElement("nav",{className:H.a.navcenter,role:"navigation"},r.a.createElement("div",{className:H.a.navwrapper},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(Z.b,{to:"/"},"Indian State Data")),r.a.createElement("li",null,r.a.createElement(Z.b,{to:"/world"},"World Statistics")),r.a.createElement("li",null,r.a.createElement(Z.b,{to:"/india"},"India All State"))))),r.a.createElement($.c,null,r.a.createElement($.a,{exact:!0,path:"/"},r.a.createElement("div",{className:H.a.container},r.a.createElement(X,null))),r.a.createElement($.a,{exact:!0,path:"/world"},r.a.createElement("div",{className:H.a.container},r.a.createElement(D,{handleCountryChange:this.handleCountryChange}),r.a.createElement(j,{data:t,country:a}),r.a.createElement(q,{data:t}))),r.a.createElement($.a,{exact:!0,path:"/india"},r.a.createElement("div",{className:H.a.container},r.a.createElement(z,{data:t}))))))}}]),a}(r.a.Component);o.a.render(r.a.createElement(ee,null),document.getElementById("root"))},22:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1","MuiCardContent-root":"App_MuiCardContent-root__VrPBm",navcenter:"App_navcenter__bgi5A"}},56:function(e,t,a){e.exports={container:"Cases_container__Dk1Kb",customers:"Cases_customers__vXvDs"}},90:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},91:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},95:function(e,t,a){e.exports=a.p+"static/media/image.2ce01c11.jpg"}},[[100,1,2]]]);
//# sourceMappingURL=main.efa48f12.chunk.js.map