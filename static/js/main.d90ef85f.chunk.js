(this.webpackJsonpcovid_mano=this.webpackJsonpcovid_mano||[]).push([[0],{115:function(e,a,t){e.exports={container:"Chart_container__1MxSr"}},116:function(e,a,t){e.exports={formControl:"CountryPicker_formControl__2Sy7q"}},118:function(e,a,t){e.exports=t.p+"static/media/image.2ce01c11.jpg"},125:function(e,a,t){e.exports=t(248)},14:function(e,a,t){e.exports={container:"Cases_container__3FIIu",customers:"Cases_customers__33NBi",colorRed:"Cases_colorRed__2e3dW",colorGreen:"Cases_colorGreen__JOhYe",font8:"Cases_font8__1MT49",font11:"Cases_font11__1cHOd",fontWeight:"Cases_fontWeight__3WHiL",colorRed1:"Cases_colorRed1__3ATAm",colorGreen1:"Cases_colorGreen1__2eath"}},22:function(e,a,t){e.exports={container:"IndiaByState_container__6EXxe",customers:"IndiaByState_customers__2ZGOE",class1:"IndiaByState_class1__1UW0a",class3:"IndiaByState_class3__2OH9b",formControl:"IndiaByState_formControl__2pWqR",arrowCss:"IndiaByState_arrowCss__27i9U"}},248:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),o=t(45),s=t(6),i=t.n(s),u=t(10),d=t(57),m=t(58),_=t(67),v=t(68),f=t(7),p=t(31),h=t(20),b=t.n(h),E="https://covid19.mathdro.id/api",g=function(){var e=Object(u.a)(i.a.mark((function e(a){var t,n,r,l,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E,a&&(t="".concat(E,"/countries/").concat(a)),e.prev=2,e.next=5,b.a.get(t);case 5:return n=e.sent,r=n.data,l=r.confirmed,c=r.recovered,o=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:l,recovered:c,deaths:o,lastUpdate:s});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(a){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/daily"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t.map((function(e){var a=e.confirmed,t=e.deaths,n=e.reportDate;return{confirmed:a.total,deaths:t.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat("https://api.covid19india.org/data.json"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t.statewise.map((function(e){return{confirmed:e.confirmed,deaths:e.deaths,recovered:e.recovered,states:e.state,lastupdatedtime:e.lastupdatedtime}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=t(115),O=t.n(y),k=function e(a){var t=a.data,l=t.confirmed,c=t.recovered,o=t.deaths,s=a.country;console.log("Chart",e);var d=Object(n.useState)({}),m=Object(f.a)(d,2),_=m[0],v=m[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:a=e.sent,v(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=l?r.a.createElement(p.c,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"No of People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[l.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null,b=_[0]?r.a.createElement(p.b,{data:{labels:_.map((function(e){return e.date})),datasets:[{data:_.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:_.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:O.a.container},s?h:b)},j=t(289),x=t(286),A=t(116),S=t.n(A),D=function(e){var a=e.handleCountryChange,t=Object(n.useState)([]),l=Object(f.a)(t,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,C();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(j.a,{className:S.a.formControl},r.a.createElement(x.a,{defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"Global"),c.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))))},I=(t(110),t(243),t(29)),W=t.n(I),R=function(e){var a=e.data,t=a.confirmed,n=a.recovered,l=a.deaths,c=a.lastUpdate;return t?r.a.createElement("div",{className:W.a.container},r.a.createElement("table",{className:W.a.customers},r.a.createElement("caption",{className:W.a.flashColor},"Last Updated : ",new Date(c).toDateString()," ",new Date(c).toLocaleTimeString()," "),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Confirmed"),r.a.createElement("th",null,"Recovered"),r.a.createElement("th",null,"Recovered Rate"),r.a.createElement("th",null,"Deaths"),r.a.createElement("th",null,"Deaths Rate"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,t.value),r.a.createElement("td",null,n.value),r.a.createElement("td",null,r.a.createElement("span",{className:Number(n.value/t.value*100).toFixed(0)>25?W.a.class3:W.a.class1},Number(n.value/t.value*100).toFixed(0),"%")),r.a.createElement("td",null,l.value),r.a.createElement("td",null,r.a.createElement("span",{className:Number(l.value/t.value*100).toFixed(0)>5?W.a.class1:W.a.class2},Number(l.value/t.value*100).toFixed(0),"%")))))):"Loading..."},B=t(278),J=t(282),F=t(281),G=t(276),U=t(279),T=t(280),L=t(277),Z=t(14),M=t.n(Z),P=function(e){var a=e.data,t=a.confirmed,l=(a.deaths,a.recovered,a.states,a.lastupdatedtime,Object(n.useState)([])),c=Object(f.a)(l,2),s=c[0],d=c[1];console.log("data CasesByRate",s),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m={datasets:[{label:"Confirmed",data:s.map((function(e){return e.confirmed})),backgroundColor:["rgba(0, 0, 255, 0.5)"]},{label:"Deaths",data:s.map((function(e){return e.deaths})),backgroundColor:["rgba(0, 255, 0, 0.5)"]},{label:"Recovered",data:s.map((function(e){return e.recovered})),backgroundColor:["rgba(255, 0, 0, 0.5)"]}],labels:["India"]};t&&p.a;return r.a.createElement("div",{className:M.a.container},r.a.createElement(G.a,{component:L.a},r.a.createElement(B.a,{className:M.a.customers,"aria-label":"simple table"},r.a.createElement(U.a,{className:M.a.fontWeight},r.a.createElement(T.a,null,r.a.createElement(F.a,{className:M.a.fontWeight},"States"),r.a.createElement(F.a,Object(o.a)({align:"right",className:M.a.fontWeight},"className",M.a.colorRed1),"Confirmed"),r.a.createElement(F.a,Object(o.a)({align:"right",className:M.a.fontWeight},"className",M.a.colorGreen1),"Recovered"),r.a.createElement(F.a,{align:"right",className:M.a.fontWeight},"Deaths"),r.a.createElement(F.a,{align:"right",className:M.a.fontWeight},"Last Updated"))),r.a.createElement(J.a,null,s.map((function(e,a){return r.a.createElement(T.a,{key:a},r.a.createElement(F.a,{component:"th",scope:"row",className:M.a.fontWeight},e.states),r.a.createElement(F.a,{align:"right",className:M.a.colorRed},e.confirmed),r.a.createElement(F.a,{align:"right",className:M.a.colorGreen},r.a.createElement("div",null,e.recovered),r.a.createElement("div",null,Number(e.recovered/e.confirmed*100).toFixed(0),"%")),r.a.createElement(F.a,{align:"right"},r.a.createElement("div",null,e.deaths," "),r.a.createElement("div",null,Number(e.deaths/e.confirmed*100).toFixed(0),"%")),r.a.createElement(F.a,{align:"right",className:M.a.font8},e.lastupdatedtime))}))))))},z=t(26),K=t.n(z),Q=t(22),V=t.n(Q),Y=function(e){e.data;var a=r.a.useState(null),t=Object(f.a)(a,2),n=t[0],l=t[1],c=r.a.useState(null),o=Object(f.a)(c,2),s=o[0],i=o[1],u=r.a.useState(null),d=Object(f.a)(u,2),m=d[0],_=d[1];return r.a.useEffect((function(){fetch("https://api.covid19india.org/state_district_wise.json").then((function(e){return e.json()})).then((function(e){console.log("data",e),window.data=e;window.result={},console.log("widnow Data",window.data);var a=Object.keys(window.data);console.log("widnow allSt",a),_(a),function(e){for(var a in window.data)e.indexOf(a)>-1&&(window.result[a]=window.data[a]);console.log("result",window.result)}(["Andaman and Nicobar Islands"]),console.log("window.result",window.result);var t=Object.values(window.result);console.log("window.result['key'].districtData",t);var n=t[0].districtData;console.log("test1",n),Object.keys(n);var r=Object.keys(n),c=Object.entries(n);console.log("test2",r),console.log("test3",c),l(c),i(r)}))}),[]),r.a.createElement("div",{className:V.a.container},n&&s&&m?r.a.createElement("div",null,r.a.createElement(j.a,{className:V.a.formControl},r.a.createElement(x.a,{defaultValue:"",onChange:function(e){return function(e){for(var a in console.log("inside handleCountryChange",e),window.result={},window.data)e.indexOf(a)>-1&&(window.result[a]=window.data[a]);console.log("widnow Data",window.data);var t=Object.keys(window.data);console.log("widnow allSt",t),_(t),console.log("window.result",window.result);var n=Object.values(window.result);console.log("window.result['key'].districtData",n);var r=n[0].districtData;console.log("test1",r),Object.keys(r);var c=Object.keys(r),o=Object.entries(r);console.log("test2",c),console.log("test3",o),l(o),i(c)}(e.target.value)}},m.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)})))),r.a.createElement("table",{className:V.a.customers},r.a.createElement("caption",null,"All States Data"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"District"),r.a.createElement("th",null,"Confirmed"),r.a.createElement("th",null,"Active"),r.a.createElement("th",null,"Deaths"),r.a.createElement("th",null,"Recovered"))),r.a.createElement("tbody",null,n.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:V.a.tdBreak},e[0]),r.a.createElement("td",{className:e[1].confirmed>25?V.a.class3:V.a.class1},r.a.createElement("div",null,e[1].confirmed,"  "),r.a.createElement("div",null,e[1].delta.confirmed,r.a.createElement("span",{className:V.a.arrowCss},K.a.arrowN))),r.a.createElement("td",null,e[1].active),r.a.createElement("td",null,r.a.createElement("div",null,e[1].deceased)," ",r.a.createElement("div",null,e[1].delta.deceased,r.a.createElement("span",{className:V.a.arrowCss},K.a.arrowN))),r.a.createElement("td",null,r.a.createElement("div",null,e[1].recovered),r.a.createElement("div",null,e[1].delta.recovered,r.a.createElement("span",{className:V.a.arrowCss},K.a.arrowN))))}))))," "):"Loading...")},H=(t(113),t(40)),X=t.n(H),q=function(e){Object(v.a)(t,e);var a=Object(_.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={datato:[],testlatlong:[]},e.handleChange=function(a){console.log("event",a),e.handleSubmit(a)},e.handleSubmit=function(a){console.log("value of t",a);var t=JSON.parse("[["+a+"]]");JSON.stringify(a).replace(/"/g,""),console.log("inside submit string",t);var n={latlngs:t,key:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYWlsSWRlbnRpdHkiOiJtYW5vcmFuamFua3VtQGdtYWlsLmNvbSJ9.65QsDiBeKvnUnswtFjmfTEUrUt6tiaPZ92_1jvQMsCo"};b.a.post("https://data.geoiq.io/dataapis/v1.0/covid/locationcheck",n).then((function(a){console.log(a),console.log(a.data),e.setState({datato:a.data})})),console.log("this.state.datato",e.state.datato)},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(j.a,{className:X.a.formControl},r.a.createElement(x.a,{defaultValue:"",onChange:function(a){return e.handleChange(a.target.value)}},r.a.createElement("option",{value:""},"Select State/District"),[{name:"Bangalore",value:[[12.959743999999999,77.6470528]]},{name:"Mumbai",value:[[19.076,72.8777]]},{name:"Dhanbad",value:[[23.80039349,86.41998572]]},{name:"Jamshedpur",value:[[22.78753542,86.19751868]]},{name:"Ranchi",value:[[23.37000633,85.33002641]]},{name:"Bokaro",value:[[23.6693,86.1511]]},{name:"Pune",value:[[18.5204,73.8567]]},{name:" Andaman And Nicobar",value:[[11.66702557,92.73598262]]},{name:"Andhra Pradesh",value:[[14.7504291,78.57002559]]},{name:"Arunachal Pradesh",value:[[27.10039878,93.61660071]]},{name:"Assam",value:[[26.7499809,94.21666744]]},{name:"Bihar",value:[[25.78541445,87.4799727]]},{name:"Delhi",value:[[28.6699929,77.23000403]]},{name:"Kerala",value:[[8.900372741,76.56999263]]},{name:"Bokaro",value:[[23.6693,86.1511]]},{name:"Pune",value:[[18.5204,73.8567]]},{name:" Andaman And Nicobar",value:[[11.66702557,92.73598262]]},{name:"Andhra Pradesh",value:[[14.7504291,78.57002559]]}].map((function(e,a){return r.a.createElement("option",{key:a,value:e.value},e.name)})))),0!=this.state.datato.length?r.a.createElement("table",{className:X.a.customers},r.a.createElement("caption",null,"Zone Data"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Zone "),r.a.createElement("th",null,"Zone Type"))),r.a.createElement("tbody",null,this.state.datato.data.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,e.district),r.a.createElement("td",{className:8===e.districtZoneType.length?X.a.red:10===e.districtZoneType.length?X.a.green:X.a.orange},e.districtZoneType))})))):r.a.createElement("p",null,"Please enter state name to see data"))}}]),t}(r.a.Component),$=(t(50),t(283)),ee=(t(288),t(287),t(285),t(284),t(117),Object($.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}})),t(8)),ae=t.n(ee),te=t(33),ne=t(118),re=t.n(ne),le=t(28),ce=function(e){Object(v.a)(t,e);var a=Object(_.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var a=Object(u.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g(t);case 2:n=a.sent,e.setState({data:n,country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:a=e.sent,this.setState({data:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.country;return r.a.createElement(te.a,{basename:"/"},r.a.createElement("div",{className:ae.a.container},r.a.createElement("img",{className:ae.a.image,src:re.a,alt:"COVID-19"}),r.a.createElement("nav",Object(o.a)({className:ae.a.navcenter,role:"navigation"},"className",ae.a.navbar),r.a.createElement("div",{className:ae.a.navwrapper},r.a.createElement(te.b,{exact:!0,activeClassName:ae.a.navbar__link__active,className:ae.a.navbar__link,to:"/"},r.a.createElement("span",{className:ae.a.removeborder},K.a.globe),"World"),r.a.createElement(te.b,{activeClassName:ae.a.navbar__link__active,className:ae.a.navbar__link,to:"/indiaall"},"  ",r.a.createElement("span",{className:ae.a.removeborder},K.a.castle),"India"),r.a.createElement(te.b,{activeClassName:ae.a.navbar__link__active,className:ae.a.navbar__link,to:"/india"},r.a.createElement("span",{className:ae.a.removeborder},K.a.map),"State"),r.a.createElement(te.b,{activeClassName:ae.a.navbar__link__active,className:ae.a.navbar__link,to:"/zonedata"},r.a.createElement("span",{className:ae.a.removeborder},K.a.homes),"Zone"))),r.a.createElement(le.c,null,r.a.createElement(le.a,{exact:!0,path:"/"},r.a.createElement("div",{className:ae.a.container},r.a.createElement("div",{className:ae.a.container},r.a.createElement(D,{handleCountryChange:this.handleCountryChange}),r.a.createElement(k,{data:a,country:t}),r.a.createElement(R,{data:a})))),r.a.createElement(le.a,{exact:!0,path:"/indiaall"},r.a.createElement("div",{className:ae.a.container},r.a.createElement(P,{data:a}))),r.a.createElement(le.a,{exact:!0,path:"/india"},r.a.createElement(Y,null)),r.a.createElement(le.a,{exact:!0,path:"/zonedata"},r.a.createElement("div",{className:ae.a.container},r.a.createElement(q,null))))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(ce,null),document.getElementById("root"))},29:function(e,a,t){e.exports={container:"Cards_container__1tzBs",card:"Cards_card__3zxBd",infected:"Cards_infected__3c_hc",recovered:"Cards_recovered__20rvG",deaths:"Cards_deaths__2w-uT",customers:"Cards_customers__2pUE0","MuiCardContent-root":"Cards_MuiCardContent-root__3nXK5","width-300":"Cards_width-300__297CG",class1:"Cards_class1__3aeDl",class2:"Cards_class2__10-GJ",class3:"Cards_class3__2Fb_t",formControl:"Cards_formControl__2EdyZ",flashColor:"Cards_flashColor__1-aK6"}},40:function(e,a,t){e.exports={container:"IndiaAllDistrict_container__3dGOf",customers:"IndiaAllDistrict_customers__1Cb_g",class1:"IndiaAllDistrict_class1__1LSvj",class3:"IndiaAllDistrict_class3__3OFyp",formControl:"IndiaAllDistrict_formControl__1U3bQ",green:"IndiaAllDistrict_green__3vp6k",red:"IndiaAllDistrict_red__3JiEG",orange:"IndiaAllDistrict_orange__3_J07"}},50:function(e,a,t){e.exports={container:"AllNews_container__1WvDP",customers:"AllNews_customers__2Nfio",class1:"AllNews_class1__1Avis",class3:"AllNews_class3__2TbkB",formControl:"AllNews_formControl__2fItE",green:"AllNews_green__uKWIM",red:"AllNews_red__2jaNE",orange:"AllNews_orange__2AEYL",lightblue:"AllNews_lightblue__3QgXr",fontFamilySize:"AllNews_fontFamilySize__1NUUA"}},8:function(e,a,t){e.exports={container:"App_container__EJRI6",image:"App_image__3zfrv",image1:"App_image1__1WZ8t","MuiCardContent-root":"App_MuiCardContent-root__1-jIS",navcenter:"App_navcenter__3h0h6",navbar:"App_navbar__1TF81",navbar__link:"App_navbar__link__2L-_F",navbar__link__active:"App_navbar__link__active__2H9dY",removeborder:"App_removeborder__2Ws3R"}}},[[125,1,2]]]);
//# sourceMappingURL=main.d90ef85f.chunk.js.map