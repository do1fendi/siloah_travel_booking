(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4],{281:function(e,t,o){var content=o(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(56).default)("35ed3d7f",content,!0,{sourceMap:!1})},285:function(e,t,o){"use strict";o(281)},286:function(e,t,o){var r=o(55)(!1);r.push([e.i,".top[data-v-31a2d670]{padding:0;font-weight:600}.avSeat[data-v-31a2d670]{text-align:right}.avFontSize[data-v-31a2d670]{font-weight:700}",""]),e.exports=r},289:function(e,t,o){"use strict";o.r(t);var r={name:"Top",props:["tourPackage"],data:function(){return{available_seat:"0"}},computed:{variant:function(){switch(this.available_seat=this.tourPackage.seat_available?this.tourPackage.seat_available:"0",!0){case this.available_seat>10:return"primary";case this.available_seat<10&&this.available_seat>0:return"warning";default:return"danger"}}}},n=(o(285),o(39)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"top"},[o("b-alert",{attrs:{show:"",variant:"success"}},[o("b-row",[o("b-col",{attrs:{cols:"8"}},[o("p",[e._v("團名: "+e._s(e.tourPackage.tourSubject))]),e._v(" "),o("p",[e._v("出發日期: "+e._s(e.tourPackage.departureDate))])]),e._v(" "),o("b-col",{staticClass:"avSeat",attrs:{cols:"4"}},[o("p",[e._v("\n          Available Seats:\n          "),o("span",[o("b-avatar",{staticClass:"avFontSize",attrs:{variant:e.variant,text:String(e.available_seat)}})],1)])])],1)],1)],1)}),[],!1,null,"31a2d670",null);t.default=component.exports},294:function(e,t,o){var content=o(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(56).default)("1b7833da",content,!0,{sourceMap:!1})},300:function(e,t,o){o(301)},301:function(e,t,o){"use strict";var r=o(10),n=o(36),_=o(100),l=o(101),C=o(199),c=o(17),E=o(46),A=c("replace"),R=RegExp.prototype,S=Math.max,P=function(e,t,o){return o>e.length?-1:""===t?o:e.indexOf(t,o)};r({target:"String",proto:!0},{replaceAll:function(e,t){var o,r,c,d,m,f,O,T,v=n(this),h=0,G=0,I="";if(null!=e){if((o=_(e))&&!~String(n("flags"in R?e.flags:l.call(e))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=e[A]))return r.call(e,v,t);if(E&&o)return String(v).replace(e,t)}for(c=String(v),d=String(e),(m="function"==typeof t)||(t=String(t)),f=d.length,O=S(1,f),h=P(c,d,0);-1!==h;)T=m?String(t(d,h,c)):C(d,c,h,[],void 0,t),I+=c.slice(G,h)+T,G=h+f,h=P(c,d,h+O);return G<c.length&&(I+=c.slice(G)),I}})},306:function(e,t,o){"use strict";o(294)},307:function(e,t,o){var r=o(55)(!1);r.push([e.i,".container{padding:0;color:#434852;font-weight:500;margin-bottom:70px}",""]),e.exports=r},311:function(e,t,o){"use strict";o.r(t);o(4),o(3),o(1),o(5),o(2),o(6);var r=o(25),n=o(0),_=(o(67),o(31),o(11),o(300),o(66)),l=o(289),C=o(296);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function E(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var A={components:{Information:l.default,Register:C.default},head:function(){return{title:"Siloah Booking",meta:[{name:"Siloah",content:"Siloah Travel Booking System"}]}},data:function(){return{country:[],tourPackageData:""}},computed:E(E(E(E({},Object(_.b)("country",["GET_COUNTRY"])),Object(_.b)(["GET_TOKEN","GET_USERNAME","GET_PASSWORD"])),Object(_.b)("roomtype",["GET_PACKAGE_PRICE"])),Object(_.c)("roomtype",["SET_PACKAGE_PRICE"])),mounted:function(){var e=this;this.getToken(),setInterval((function(){e.getToken()}),9e5),this.country=this.GET_COUNTRY},methods:{getToken:function(){var e=this,t={method:"POST",url:"https://ofc.taiwanviptravel.com/fmi/data/v1/databases/TVT/sessions",headers:{Authorization:"Basic "+btoa("".concat(this.GET_USERNAME,":").concat(this.GET_PASSWORD)),"Content-Type":"application/json"},data:{}};(function(){var o=Object(r.a)(regeneratorRuntime.mark((function o(){var r,data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.$axios(t);case 2:return r=o.sent,o.next=5,r.data.response;case 5:data=o.sent,e.$store.commit("SET_TOKEN",data.token),e.getTourPackage();case 8:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}})()()},getTourPackage:function(){var e=this,t=JSON.stringify({query:[{groupNumber:this.$route.query.selectedGroupNumber}]}),o={method:"POST",url:"https://ofc.taiwanviptravel.com/fmi/data/v1/databases/TVT/layouts/DATA_API_TOURPACKAGE/_find",headers:{Authorization:"Bearer ".concat(this.GET_TOKEN),"Content-Type":"application/json"},data:t};(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){var r,data,n,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios(o);case 2:return r=t.sent,t.next=5,r.data.response.data[0].fieldData;case 5:data=t.sent,e.tourPackageData=data,n=(n=(n=JSON.stringify(data).replaceAll("::","_")).replaceAll("(","_")).replaceAll(")","_"),n=JSON.parse(n),_={Inside_room:{singleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass1_1_,doubleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass1_2_,tripleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass1_3_,quadRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass1_4_,kidRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass1_5_},Porthole_Room:{singleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass2_1_,doubleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass2_2_,tripleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass2_3_,quadRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass2_4_,kidRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass2_5_},Sea_view_room:{singleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass3_1_,doubleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass3_2_,tripleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass3_3_,quadRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass3_4_,kidRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass3_5_},Terrace_Room:{singleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass4_1_,doubleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass4_2_,tripleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass4_3_,quadRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass4_4_,kidRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass4_5_},Palace_Suite:{singleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass5_1_,doubleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass5_2_,tripleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass5_3_,quadRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass5_4_,kidRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass5_5_},Palace_Deluxe_Suite:{singleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass6_1_,doubleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass6_2_,tripleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass6_3_,quadRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass6_4_,kidRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass6_5_},Palace_Executive_Suite:{singleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass7_1_,doubleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass7_2_,tripleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass7_3_,quadRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass7_4_,kidRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass7_5_},Palace_Courtyard_Villa:{singleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass8_1_,doubleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass8_2_,tripleRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass8_3_,quadRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass8_4_,kidRoom:n.TOURPACKAGE_SALSEPRICE_CruiseClass8_5_}},e.$store.commit("roomtype/SET_PACKAGE_PRICE",_),console.log(JSON.stringify(e.GET_PACKAGE_PRICE));case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}}},R=(o(306),o(39)),component=Object(R.a)(A,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("Information",{attrs:{tourPackage:this.tourPackageData}}),e._v(" "),o("Register")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Information:o(289).default,Register:o(296).default})}}]);