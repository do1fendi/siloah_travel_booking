(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{277:function(e,t,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("08d0af14",content,!0,{sourceMap:!1})},278:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),n=r(66);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={data:function(){var e=new Date;return{formTraveler:[],form:{lastTName:"",firstTName:"",birthday:""},index:null,disableFutureDate:new Date(e.getFullYear(),e.getMonth(),e.getDate())}},computed:c(c(c({},Object(n.b)("form",["GET_TRAVELER","GET_TRAVELERNUMBER","GET_FORM"])),Object(n.c)("form",["SET_TRAVELER"])),{},{travelerCount:function(){return this.GET_TRAVELERNUMBER}}),created:function(){this.formTraveler=this.GET_TRAVELER,this.travelerNumber=this.GET_TRAVELERNUMBER},methods:{showTravelerForm:function(e){void 0===e?(this.form={},this.index=null):(this.form={},this.form.lastTName=this.GET_TRAVELER[e].lastTName,this.form.firstTName=this.GET_TRAVELER[e].firstTName,this.form.birthday=this.GET_TRAVELER[e].birthday,this.index=e),this.$bvModal.show("travelerForm")},handleForm:function(e){if(void 0===this.form.lastTName||""==this.form.lastTName)e.preventDefault(),alert("cannot empty");else{var t={index:this.index,form:this.form};this.$store.commit("form/SET_TRAVELER",t)}},copyData:function(){this.form={},this.form.lastTName=this.GET_FORM.regLastname,this.form.firstTName=this.GET_FORM.regFirstname}}},m=(r(279),r(39)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"traveler-form"},[r("b-modal",{attrs:{id:"travelerForm","no-close-on-backdrop":"","hide-header-close":"",size:"lg"},on:{ok:e.handleForm},scopedSlots:e._u([{key:"modal-header",fn:function(){return[r("div",{staticClass:"modalHeader w-100 text-center"},[r("span",{staticClass:"text-capitalize modalTitle"},[e._v("traveler")]),e._v(" "),e.travelerCount?e._e():r("b-button",{attrs:{size:"sm",variant:"outline-secondary"},on:{click:e.copyData}},[e._v("與訂購人相同")])],1)]},proxy:!0}])},[e._v(" "),r("b-form",[r("b-form-row",{staticClass:"mb-2"},[r("b-col",[r("b-form-input",{attrs:{placeholder:"Enter Last Name / 姓氏"},model:{value:e.form.lastTName,callback:function(t){e.$set(e.form,"lastTName",t)},expression:"form.lastTName"}})],1),e._v(" "),r("b-col",[r("b-form-input",{attrs:{placeholder:"Enter First Name / 名字"},model:{value:e.form.firstTName,callback:function(t){e.$set(e.form,"firstTName",t)},expression:"form.firstTName"}})],1),e._v(" "),r("b-col",{attrs:{md:"auto"}},[r("b-form-datepicker",{attrs:{id:"datepicker-placeholder",placeholder:"Birthday",locale:"en",max:e.disableFutureDate},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}})],1)],1)],1)],1)],1)}),[],!1,null,"05a80cd8",null);t.default=component.exports},279:function(e,t,r){"use strict";r(277)},280:function(e,t,r){var o=r(55)(!1);o.push([e.i,".modalTitle[data-v-05a80cd8]{font-size:1.2rem;font-weight:600}",""]),e.exports=o},281:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),n=r(66);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{Travelerform:r(278).default},data:function(){return{traveler:[],travelerNumber:0,maxTravelerNumber:7,fields:[{key:"lastTName",label:"First Name"},{key:"firstTName",label:"Last Name"},"birthday",{key:"actions"}]}},computed:c(c(c(c({},Object(n.b)("form",["GET_TRAVELER"])),Object(n.b)("form",["GET_TRAVELERNUMBER"])),Object(n.c)("form",["DELETE_TRAVELER"])),{},{travelerCount:function(){return this.GET_TRAVELERNUMBER},disabled:function(){return this.travelerCount>=this.maxTravelerNumber}}),methods:{showTravelerFormModal:function(){this.$refs.childTravelform.showTravelerForm()},editTraveler:function(data){this.$refs.childTravelform.showTravelerForm(data.index)},delTraveler:function(data){this.$store.commit("form/DELETE_TRAVELER",data.index)}},created:function(){this.traveler=this.GET_TRAVELER}},m=r(39),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-5"},[r("h3",[e._v("Travelers "),r("b-badge",[e._v(e._s(e.travelerCount)+" / "+e._s(e.maxTravelerNumber))]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"primary",disabled:e.disabled},on:{click:e.showTravelerFormModal}},[e._v("Add Traveler")])],1),e._v(" "),r("div",[r("b-table",{attrs:{striped:"",hover:"",items:e.traveler,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(data){return[r("b-button",{attrs:{size:"sm",variant:"info"},on:{click:function(t){return e.editTraveler(data)}}},[e._v("Edit")]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){return e.delTraveler(data)}}},[e._v("Delete")])]}}])})],1),e._v(" "),r("Travelerform",{ref:"childTravelform"})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Travelerform:r(278).default})}}]);