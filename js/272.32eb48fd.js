"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[272],{81272:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var a=function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v("this is Login1")]),t("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSaveModal.apply(null,arguments)}}},[t("div",{staticClass:"text-right"},[e._l(e.sel,(function(s,a){return t("div",{key:a,staticClass:"form-group row"},[a==e.pri?[t("label",{staticClass:"col-sm-4 col-form-label"},[e._v("Id")]),t("div",{staticClass:"col-sm-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.sel[a],expression:"sel[k]"}],class:{"form-control":!0,"ko-hop-le":e.errors.has(a)},attrs:{readonly:!0,name:a,type:"text"},domProps:{value:e.sel[a]},on:{input:function(t){t.target.composing||e.$set(e.sel,a,t.target.value)}}})])]:e._e(),"name"==a?[t("label",{staticClass:"col-sm-4 col-form-label"},[e._v("Name")]),t("div",{staticClass:"col-sm-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.sel[a],expression:"sel[k]"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"ko-hop-le":e.errors.has(a)},attrs:{name:a,autocomplete:"off",type:"text"},domProps:{value:e.sel[a]},on:{input:function(t){t.target.composing||e.$set(e.sel,a,t.target.value)}}})])]:e._e(),"Username"==a?[t("label",{staticClass:"col-sm-4 col-form-label"},[e._v("User name")]),t("div",{staticClass:"col-sm-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.sel[a],expression:"sel[k]"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"ko-hop-le":e.errors.has(a)},attrs:{name:a,autocomplete:"off",type:"text"},domProps:{value:e.sel[a]},on:{input:function(t){t.target.composing||e.$set(e.sel,a,t.target.value)}}})])]:e._e(),"Password"==a?[t("label",{staticClass:"col-sm-4 col-form-label"},[e._v("Pass")]),t("div",{staticClass:"col-sm-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.sel[a],expression:"sel[k]"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"ko-hop-le":e.errors.has(a)},attrs:{name:a,autocomplete:"off",type:"text"},domProps:{value:e.sel[a]},on:{input:function(t){t.target.composing||e.$set(e.sel,a,t.target.value)}}})])]:e._e()],2)})),t("button",{staticClass:"btn mr-1",attrs:{type:"submit"}},[e._v("Login")]),t("button",{staticClass:"btn",attrs:{type:"button"}},[e._v("Cancel")])],2)]),t("hr"),t("button",{attrs:{disabled:""==e.token},on:{click:e.onLogout}},[e._v("Logout")]),t("br"),t("button",{on:{click:e.onGetAll}},[e._v("GetAll")])])},l=[],o=(s(57658),s(12954)),r=s(20144),n=(s(30381),s(19938)),i=s.n(n),u=s(20700);r["default"].use(o.ZP,{classes:!0,fieldsBagName:"veeFields"}),r["default"].component("v-select",i());var c={components:{},data(){return{sel:{Username:"test",Password:"test"},pri:"id",title:"Hi modal",token:""}},mounted(){let e=localStorage.getItem("token")?localStorage.getItem("token"):"";this.token=e},methods:{onLogout(){localStorage.removeItem("token"),location.reload()},onGetAll(){this.GetAll()},onSaveModal(){this.$validator.validateAll().then((e=>{if(!e)return void this.toast("Không hợp lệ");let t=JSON.parse(JSON.stringify(this.sel));this.Login(t)}))},async Login(e){return await u.Z.post("/Users/authenticate",e).then((e=>{alert(JSON.stringify(e));let t=e.data.token;localStorage.setItem("token",t),location.reload()})).catch((e=>{alert(JSON.stringify(e.response))}))},async GetAll(){return await u.Z.get("/Users/getall").then((e=>{alert(JSON.stringify(e))})).catch((e=>{e.response?401==e.response.status?alert("Chưa đăng nhập hoặc token hết hạn"):403==e.response.status&&alert("Bạn ko có quyền"):e.request?alert(JSON.stringify(e.request)):e.message&&alert(JSON.stringify(e.message))}))},toast(e,t=null){this.$bvToast.toast(e,{title:"Information",variant:t,solid:!0})}}},m=c,d=s(1001),v=(0,d.Z)(m,a,l,!1,null,null,null),p=v.exports}}]);
//# sourceMappingURL=272.32eb48fd.js.map