(this.webpackJsonpcovid_mano=this.webpackJsonpcovid_mano||[]).push([[0],{10:function(e,a,t){e.exports={container:"Cards_container__1tzBs",card:"Cards_card__3zxBd",infected:"Cards_infected__3c_hc",recovered:"Cards_recovered__20rvG",deaths:"Cards_deaths__2w-uT",customers:"Cards_customers__2pUE0","MuiCardContent-root":"Cards_MuiCardContent-root__3nXK5","width-300":"Cards_width-300__297CG",class1:"Cards_class1__3aeDl",class2:"Cards_class2__10-GJ",class3:"Cards_class3__2Fb_t",formControl:"Cards_formControl__2EdyZ",flashColor:"Cards_flashColor__1-aK6",font8:"Cards_font8__Km3Gt",font11:"Cards_font11__1kAwo",fontWeight:"Cards_fontWeight__2UMKJ",colorRed1:"Cards_colorRed1__3iP20",colorGreen1:"Cards_colorGreen1__KwgGy",testPadding:"Cards_testPadding__3ik4H",testPadding1:"Cards_testPadding1__1FQ8R",colorRed:"Cards_colorRed__3JZ83",colorGreen:"Cards_colorGreen__3Lnz9"}},105:function(e,a){},108:function(e,a,t){e.exports={container:"Chart_container__1MxSr"}},109:function(e,a,t){e.exports={formControl:"CountryPicker_formControl__2Sy7q"}},11:function(e,a,t){e.exports={container:"App_container__EJRI6",image:"App_image__3zfrv",image1:"App_image1__1WZ8t","MuiCardContent-root":"App_MuiCardContent-root__1-jIS",navcenter:"App_navcenter__3h0h6",navbar:"App_navbar__1TF81",navbar__link:"App_navbar__link__2L-_F",navbar__link__active:"App_navbar__link__active__2H9dY",removeborder:"App_removeborder__2Ws3R"}},113:function(e,a,t){e.exports=t.p+"static/media/image.2ce01c11.jpg"},116:function(e,a,t){e.exports=t(239)},239:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(106),l=t.n(c),o=t(4),s=t(7),i=t.n(s),d=t(13),m=t(50),u=t(51),_=t(56),v=t(57),f=t(26),p=t(12),h=t(33),b=t(27),g=t.n(b),E="https://covid19.mathdro.id/api",N=function(){var e=Object(d.a)(i.a.mark((function e(a){var t,n,r,c,l,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E,a&&(t="".concat(E,"/countries/").concat(a)),e.prev=2,e.next=5,g.a.get(t);case 5:return n=e.sent,r=n.data,c=r.confirmed,l=r.recovered,o=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:l,deaths:o,lastUpdate:s});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(a){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(E,"/daily"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t.map((function(e){var a=e.confirmed,t=e.deaths,n=e.reportDate;return{confirmed:a.total,deaths:t.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(E,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat("https://api.covid19india.org/data.json"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t.statewise.map((function(e){var a=e.confirmed,t=e.active,n=e.deltaconfirmed,r=e.deaths,c=e.recovered,l=e.state,o=e.lastupdatedtime,s=e.deltadeaths;return{deltarecovered:e.deltarecovered,deltadeaths:s,deltaconfirmed:n,confirmed:a,active:t,deaths:r,recovered:c,states:l,lastupdatedtime:o}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=t(108),j=t.n(y),k=function e(a){var t=a.data,c=t.confirmed,l=t.recovered,o=t.deaths,s=a.country;console.log("Chart",e);var m=Object(n.useState)({}),u=Object(p.a)(m,2),_=u[0],v=u[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:a=e.sent,v(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=c?r.a.createElement(h.b,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"No of People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[c.value,l.value,o.value]}]},options:{legend:{display:!1}}}):null,g=_[0]?r.a.createElement(h.a,{data:{labels:[Object(f.a)(_).pop().date],datasets:[{label:"Confirmed",backgroundColor:"rgba(0, 0, 255, 0.5)",borderColor:"rgba(0, 0, 255, 0.5)",borderWidth:2,data:[Object(f.a)(_).pop().confirmed]},{label:"Deaths",backgroundColor:"rgba(0, 255, 0, 0.5)",borderColor:"rgba(0, 255, 0, 0.5)",borderWidth:2,data:[Object(f.a)(_).pop().deaths]}]},options:{title:{display:!1,text:"World Data",fontSize:10},legend:{display:!0,position:"bottom"},maintainAspectRatio:!1,scales:{yAxes:[{display:!1}]}}}):null;return r.a.createElement("div",{className:j.a.container},s?b:g)},x=t(262),P=t(261),W=t(109),A=t.n(W),S=function(e){var a=e.handleCountryChange,t=Object(n.useState)([]),c=Object(p.a)(t,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,w();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(x.a,{className:A.a.formControl},r.a.createElement(P.a,{defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"World"),l.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))))},I=(t(232),t(235),t(256)),R=t(260),D=t(259),G=t(254),B=t(257),J=t(258),F=t(255),U=t(10),Z=t.n(U),L=function(e){var a,t,n=e.data,c=n.confirmed,l=n.recovered,s=n.deaths,i=n.lastUpdate;return c?r.a.createElement("div",{className:Z.a.container},r.a.createElement("caption",{className:Z.a.flashColor},"Last Updated : ",new Date(i).toDateString()," ",new Date(i).toLocaleTimeString()," "),r.a.createElement(G.a,{component:F.a},r.a.createElement(I.a,{className:Z.a.customers,"aria-label":"simple table"},r.a.createElement(B.a,{className:Z.a.fontWeight},r.a.createElement(J.a,null,r.a.createElement(D.a,{className:Z.a.fontWeight},"Confirmed"),r.a.createElement(D.a,(a={className:Z.a.fontWeight},Object(o.a)(a,"className",Z.a.testPadding),Object(o.a)(a,"className",Z.a.colorRed1),a),"Recovered"),r.a.createElement(D.a,(t={className:Z.a.fontWeight},Object(o.a)(t,"className",Z.a.testPadding),Object(o.a)(t,"className",Z.a.colorGreen1),t),"R Rate."),r.a.createElement(D.a,Object(o.a)({className:Z.a.fontWeight},"className",Z.a.testPadding1),"Deaths"),r.a.createElement(D.a,Object(o.a)({className:Z.a.fontWeight},"className",Z.a.testPadding1),"D Rate."))),r.a.createElement(R.a,null,r.a.createElement(J.a,null,r.a.createElement(D.a,Object(o.a)({component:"th",scope:"row",className:Z.a.fontWeight},"className",Z.a.testPadding1),c.value),r.a.createElement(D.a,Object(o.a)({className:Z.a.colorRed},"className",Z.a.colorRed),l.value),r.a.createElement(D.a,Object(o.a)({className:Z.a.colorGreen},"className",Z.a.colorGreen),Number(l.value/c.value*100).toFixed(0),"%"),r.a.createElement(D.a,{className:Z.a.testPadding},s.value),r.a.createElement(D.a,{className:Z.a.font8},Number(s.value/c.value*100).toFixed(0),"%")))))):"Loading..."},T=t(17),z=t.n(T),K=t(5),M=t.n(K),Q=function(e){var a,t,c=e.data,l=(c.confirmed,c.active,c.deltaconfirmed,c.deaths,c.recovered,c.states,c.lastupdatedtime,c.deltadeaths,c.deltarecovered,Object(n.useState)([])),s=Object(p.a)(l,2),m=s[0],u=s[1];return console.log("data CasesByRate",m),Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:M.a.container},r.a.createElement(G.a,{component:F.a},r.a.createElement(I.a,{className:M.a.customers,"aria-label":"simple table"},r.a.createElement(B.a,{className:M.a.fontWeight},r.a.createElement(J.a,null,r.a.createElement(D.a,{className:M.a.fontWeight},"States"),r.a.createElement(D.a,(a={className:M.a.fontWeight},Object(o.a)(a,"className",M.a.testPadding),Object(o.a)(a,"className",M.a.colorRed1),a),"Confirmed"),r.a.createElement(D.a,Object(o.a)({className:M.a.fontWeight},"className",M.a.testPadding1),"Active"),r.a.createElement(D.a,(t={className:M.a.fontWeight},Object(o.a)(t,"className",M.a.testPadding),Object(o.a)(t,"className",M.a.colorGreen1),t),"Recovered"),r.a.createElement(D.a,Object(o.a)({className:M.a.fontWeight},"className",M.a.testPadding1),"Deaths"),r.a.createElement(D.a,Object(o.a)({className:M.a.fontWeight},"className",M.a.testPadding1),"Last Updated"))),r.a.createElement(R.a,null,m.map((function(e,a){return r.a.createElement(J.a,{key:a},r.a.createElement(D.a,Object(o.a)({component:"th",scope:"row",className:M.a.fontWeight},"className",M.a.testPadding1),e.states),r.a.createElement(D.a,Object(o.a)({className:M.a.colorRed},"className",M.a.colorRed),r.a.createElement("div",null,e.confirmed),r.a.createElement("div",{className:M.a.visiblehide},"gg"),r.a.createElement("div",null,e.deltaconfirmed,r.a.createElement("span",{className:M.a.arrowCss},z.a.arrowN))),r.a.createElement(D.a,Object(o.a)({className:M.a.colorRed},"className",M.a.colorRed),r.a.createElement("div",null,e.active),r.a.createElement("div",null,Number(e.active/e.confirmed*100).toFixed(0),"%"),r.a.createElement("div",{className:M.a.visiblehide},"gg")),r.a.createElement(D.a,Object(o.a)({className:M.a.colorGreen},"className",M.a.colorGreen),r.a.createElement("div",null,e.recovered),r.a.createElement("div",null,Number(e.recovered/e.confirmed*100).toFixed(0),"%"),r.a.createElement("div",null,e.deltarecovered,r.a.createElement("span",{className:M.a.arrowCss},z.a.arrowN))),r.a.createElement(D.a,{className:M.a.testPadding},r.a.createElement("div",null,e.deaths," "),r.a.createElement("div",null,Number(e.deaths/e.confirmed*100).toFixed(0),"%"),r.a.createElement("div",null,e.deltadeaths,r.a.createElement("span",{className:M.a.arrowCss},z.a.arrowN))),r.a.createElement(D.a,{className:M.a.font8},e.lastupdatedtime))}))))))},H=t(6),V=t.n(H),Y=function(e){e.data;var a,t,n=r.a.useState(null),c=Object(p.a)(n,2),l=c[0],s=c[1],i=r.a.useState(null),d=Object(p.a)(i,2),m=d[0],u=d[1],_=r.a.useState(null),v=Object(p.a)(_,2),f=v[0],h=v[1];return r.a.useEffect((function(){fetch("https://api.covid19india.org/state_district_wise.json").then((function(e){return e.json()})).then((function(e){console.log("data",e),window.data=e;window.result={},console.log("widnow Data",window.data);var a=Object.keys(window.data);console.log("widnow allSt",a),h(a),function(e){for(var a in window.data)e.indexOf(a)>-1&&(window.result[a]=window.data[a]);console.log("result",window.result)}(["Andaman and Nicobar Islands"]),console.log("window.result",window.result);var t=Object.values(window.result);console.log("window.result['key'].districtData",t);var n=t[0].districtData;console.log("test1",n),Object.keys(n);var r=Object.keys(n),c=Object.entries(n);console.log("test2",r),console.log("test3",c),s(c),u(r)}))}),[]),r.a.createElement("div",{className:V.a.container},l&&m&&f?r.a.createElement("div",null,r.a.createElement(x.a,{className:V.a.formControl},r.a.createElement(P.a,{defaultValue:"",onChange:function(e){return function(e){for(var a in console.log("inside handleCountryChange",e),window.result={},window.data)e.indexOf(a)>-1&&(window.result[a]=window.data[a]);console.log("widnow Data",window.data);var t=Object.keys(window.data);console.log("widnow allSt",t),h(t),console.log("window.result",window.result);var n=Object.values(window.result);console.log("window.result['key'].districtData",n);var r=n[0].districtData;console.log("test1",r),Object.keys(r);var c=Object.keys(r),l=Object.entries(r);console.log("test2",c),console.log("test3",l),s(l),u(c)}(e.target.value)}},f.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)})))),r.a.createElement(G.a,{component:F.a},r.a.createElement(I.a,{className:V.a.customers,"aria-label":"simple table"},r.a.createElement(B.a,{className:V.a.fontWeight},r.a.createElement(J.a,null,r.a.createElement(D.a,{className:V.a.fontWeight},r.a.createElement("div",null,"District"),r.a.createElement("div",null,"Total"),"Rate",r.a.createElement("div",null)),r.a.createElement(D.a,(a={className:V.a.fontWeight},Object(o.a)(a,"className",V.a.testPadding),Object(o.a)(a,"className",V.a.colorRed1),a),r.a.createElement("div",null,"Confirmed"),r.a.createElement("div",null,l.reduce((function(e,a){return e+a[1].confirmed}),0)),r.a.createElement("div",{className:V.a.visibilityhidden},"-")),r.a.createElement(D.a,(t={className:V.a.fontWeight},Object(o.a)(t,"className",V.a.testPadding),Object(o.a)(t,"className",V.a.colorGreen1),t),r.a.createElement("div",null,"Active"),r.a.createElement("div",null,l.reduce((function(e,a){return e+a[1].active}),0)),r.a.createElement("div",null,Number(l.reduce((function(e,a){return e+a[1].active}),0)/l.reduce((function(e,a){return e+a[1].confirmed}),0)*100).toFixed(0),"%")),r.a.createElement(D.a,Object(o.a)({className:V.a.fontWeight},"className",V.a.testPadding1),r.a.createElement("div",null,"Deaths"),r.a.createElement("div",null,l.reduce((function(e,a){return e+a[1].deceased}),0)),r.a.createElement("div",null,Number(l.reduce((function(e,a){return e+a[1].deceased}),0)/l.reduce((function(e,a){return e+a[1].confirmed}),0)*100).toFixed(0),"%")),r.a.createElement(D.a,Object(o.a)({className:V.a.fontWeight},"className",V.a.testPadding1),r.a.createElement("div",null,"Recovered"),r.a.createElement("div",null,l.reduce((function(e,a){return e+a[1].recovered}),0)),r.a.createElement("div",null,Number(l.reduce((function(e,a){return e+a[1].recovered}),0)/l.reduce((function(e,a){return e+a[1].confirmed}),0)*100).toFixed(0),"%")))),r.a.createElement(R.a,null,l.map((function(e,a){return r.a.createElement(J.a,{key:a},r.a.createElement(D.a,Object(o.a)({component:"th",scope:"row",className:V.a.fontWeight},"className",V.a.testPadding1),e[0]),r.a.createElement(D.a,Object(o.a)({className:V.a.colorRed},"className",V.a.colorRed),r.a.createElement("div",null,e[1].confirmed,"  "),r.a.createElement("div",null,e[1].delta.confirmed,r.a.createElement("span",{className:V.a.arrowCss},z.a.arrowN))),r.a.createElement(D.a,Object(o.a)({className:V.a.colorGreen},"className",V.a.colorGreen),e[1].active),r.a.createElement(D.a,{className:V.a.testPadding},r.a.createElement("div",null,e[1].deceased)," ",r.a.createElement("div",null,e[1].delta.deceased,r.a.createElement("span",{className:V.a.arrowCss},z.a.arrowN))),r.a.createElement(D.a,{className:V.a.font8},r.a.createElement("div",null,e[1].recovered),r.a.createElement("div",null,e[1].delta.recovered,r.a.createElement("span",{className:V.a.arrowCss},z.a.arrowN))))})))))):"Loading...")},X=(t(238),t(36)),q=t.n(X),$=function(e){Object(v.a)(t,e);var a=Object(_.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={datato:[],testlatlong:[]},e.handleChange=function(a){console.log("event",a),e.handleSubmit(a)},e.handleSubmit=function(a){console.log("value of t",a);var t=JSON.parse("[["+a+"]]");JSON.stringify(a).replace(/"/g,""),console.log("inside submit string",t);var n={latlngs:t,key:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYWlsSWRlbnRpdHkiOiJtYW5vcmFuamFua3VtQGdtYWlsLmNvbSJ9.65QsDiBeKvnUnswtFjmfTEUrUt6tiaPZ92_1jvQMsCo"};g.a.post("https://data.geoiq.io/dataapis/v1.0/covid/locationcheck",n).then((function(a){console.log(a),console.log(a.data),e.setState({datato:a.data})})),console.log("this.state.datato",e.state.datato)},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x.a,{className:q.a.formControl},r.a.createElement(P.a,{defaultValue:"",onChange:function(a){return e.handleChange(a.target.value)}},r.a.createElement("option",{value:""},"Select State/District"),[{name:"Bangalore",value:[[12.959743999999999,77.6470528]]},{name:"Mumbai",value:[[19.076,72.8777]]},{name:"Dhanbad",value:[[23.80039349,86.41998572]]},{name:"Jamshedpur",value:[[22.78753542,86.19751868]]},{name:"Ranchi",value:[[23.37000633,85.33002641]]},{name:"Bokaro",value:[[23.6693,86.1511]]},{name:"Pune",value:[[18.5204,73.8567]]},{name:" Andaman And Nicobar",value:[[11.66702557,92.73598262]]},{name:"Andhra Pradesh",value:[[14.7504291,78.57002559]]},{name:"Arunachal Pradesh",value:[[27.10039878,93.61660071]]},{name:"Assam",value:[[26.7499809,94.21666744]]},{name:"Bihar",value:[[25.78541445,87.4799727]]},{name:"Delhi",value:[[28.6699929,77.23000403]]},{name:"Kerala",value:[[8.900372741,76.56999263]]},{name:"Bokaro",value:[[23.6693,86.1511]]},{name:"Pune",value:[[18.5204,73.8567]]},{name:" Andaman And Nicobar",value:[[11.66702557,92.73598262]]},{name:"Andhra Pradesh",value:[[14.7504291,78.57002559]]}].map((function(e,a){return r.a.createElement("option",{key:a,value:e.value},e.name)})))),0!=this.state.datato.length?r.a.createElement("table",{className:q.a.customers},r.a.createElement("caption",null,"Zone Data"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Zone "),r.a.createElement("th",null,"Zone Type"))),r.a.createElement("tbody",null,this.state.datato.data.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,e.district),r.a.createElement("td",{className:8===e.districtZoneType.length?q.a.red:10===e.districtZoneType.length?q.a.green:q.a.orange},e.districtZoneType))})))):r.a.createElement("p",null,"Please enter state name to see data"))}}]),t}(r.a.Component),ee=(t(105),t(11)),ae=t.n(ee),te=t(32),ne=t(113),re=t.n(ne),ce=t(29),le=function(e){Object(v.a)(t,e);var a=Object(_.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var a=Object(d.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,N(t);case 2:n=a.sent,e.setState({data:n,country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:a=e.sent,this.setState({data:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.country;return r.a.createElement(te.a,{basename:"/"},r.a.createElement("div",{className:ae.a.container},r.a.createElement("img",{className:ae.a.image,src:re.a,alt:"COVID-19"}),r.a.createElement("nav",Object(o.a)({className:ae.a.navcenter,role:"navigation"},"className",ae.a.navbar),r.a.createElement("div",{className:ae.a.navwrapper},r.a.createElement(te.b,{exact:!0,activeClassName:ae.a.navbar__link__active,className:ae.a.navbar__link,to:"/"},r.a.createElement("span",{className:ae.a.removeborder},z.a.globe),"World"),r.a.createElement(te.b,{activeClassName:ae.a.navbar__link__active,className:ae.a.navbar__link,to:"/indiaall"},"  ",r.a.createElement("span",{className:ae.a.removeborder},z.a.castle),"India"),r.a.createElement(te.b,{activeClassName:ae.a.navbar__link__active,className:ae.a.navbar__link,to:"/india"},r.a.createElement("span",{className:ae.a.removeborder},z.a.map),"State"),r.a.createElement(te.b,{activeClassName:ae.a.navbar__link__active,className:ae.a.navbar__link,to:"/zonedata"},r.a.createElement("span",{className:ae.a.removeborder},z.a.homes),"Zone"))),r.a.createElement(ce.c,null,r.a.createElement(ce.a,{exact:!0,path:"/"},r.a.createElement("div",{className:ae.a.container},r.a.createElement("div",{className:ae.a.container},r.a.createElement(S,{handleCountryChange:this.handleCountryChange}),r.a.createElement(k,{data:a,country:t}),r.a.createElement(L,{data:a})))),r.a.createElement(ce.a,{exact:!0,path:"/indiaall"},r.a.createElement("div",{className:ae.a.container},r.a.createElement(Q,{data:a}))),r.a.createElement(ce.a,{exact:!0,path:"/india"},r.a.createElement(Y,null)),r.a.createElement(ce.a,{exact:!0,path:"/zonedata"},r.a.createElement("div",{className:ae.a.container},r.a.createElement($,null))))))}}]),t}(r.a.Component);l.a.render(r.a.createElement(le,null),document.getElementById("root"))},36:function(e,a,t){e.exports={container:"IndiaAllDistrict_container__3dGOf",customers:"IndiaAllDistrict_customers__1Cb_g",class1:"IndiaAllDistrict_class1__1LSvj",class3:"IndiaAllDistrict_class3__3OFyp",formControl:"IndiaAllDistrict_formControl__1U3bQ",green:"IndiaAllDistrict_green__3vp6k",red:"IndiaAllDistrict_red__3JiEG",orange:"IndiaAllDistrict_orange__3_J07",font8:"IndiaAllDistrict_font8__3XO8o",font11:"IndiaAllDistrict_font11__3HUhI",fontWeight:"IndiaAllDistrict_fontWeight__37aCK",colorRed1:"IndiaAllDistrict_colorRed1__3bOfv",colorGreen1:"IndiaAllDistrict_colorGreen1__2z_NU",testPadding:"IndiaAllDistrict_testPadding__3r2o6",testPadding1:"IndiaAllDistrict_testPadding1__3hVns"}},5:function(e,a,t){e.exports={container:"Cases_container__3FIIu",customers:"Cases_customers__33NBi",testPadding:"Cases_testPadding__36lg8",colorRed:"Cases_colorRed__2e3dW",colorGreen:"Cases_colorGreen__JOhYe",font8:"Cases_font8__1MT49",font11:"Cases_font11__1cHOd",fontWeight:"Cases_fontWeight__3WHiL",colorRed1:"Cases_colorRed1__3ATAm",colorGreen1:"Cases_colorGreen1__2eath",testPadding1:"Cases_testPadding1__IAdc3",arrowCss:"Cases_arrowCss__nQGar",visiblehide:"Cases_visiblehide__9flUm"}},6:function(e,a,t){e.exports={container:"IndiaByState_container__6EXxe",customers:"IndiaByState_customers__2ZGOE",class1:"IndiaByState_class1__1UW0a",class3:"IndiaByState_class3__2OH9b",formControl:"IndiaByState_formControl__2pWqR",arrowCss:"IndiaByState_arrowCss__27i9U",font8:"IndiaByState_font8__2YkYx",font11:"IndiaByState_font11__3-AAW",fontWeight:"IndiaByState_fontWeight__3y8xU",colorRed1:"IndiaByState_colorRed1__17FPK",colorGreen1:"IndiaByState_colorGreen1__1LJWd",testPadding:"IndiaByState_testPadding__3JBg_",testPadding1:"IndiaByState_testPadding1__3Bl0d",colorRed:"IndiaByState_colorRed__2lThZ",colorGreen:"IndiaByState_colorGreen__dP2jO",hidden:"IndiaByState_hidden__3zS2Q",visibilityhidden:"IndiaByState_visibilityhidden__3lG_k"}}},[[116,1,2]]]);
//# sourceMappingURL=main.aa3e03e2.chunk.js.map