"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[301],{23301:function(t,e,i){i.r(e),i.d(e,{default:function(){return j}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("raw-loader",{attrs:{mytxt:i(80173).Z}}),e("h1",{staticClass:"border-bottom"},[t._v("ViduBaiViet2")]),e("b-row",t._l(t.ds,(function(i,n){return e("b-col",{key:n,attrs:{lg:"3"}},[e("div",{class:["border","p-1","mb-1",n%2==0?"bg-light":""]},[e("h4",{staticClass:"border-bottom"},[t._v(t._s(i.tieude))]),e("div",{staticClass:"d-flex bd-highlight"},[e("div",{staticClass:"p-2 bd-highlight"},[e("img",{staticClass:"float-left",attrs:{src:0!=t.getListSrc(i.nd).length?t.getListSrc(i.nd)[0]:"/images2/734032c1-d157-43ba-a4d7-38e9c031c305_shark.jpg",height:"40px",width:"60px"}})]),e("div",{staticClass:"p-2 flex-grow-1 bd-highlight text-justify"},[t._v(" "+t._s(t.getText(t.getStringFromHtml(i.nd),80))+" ")])]),e("div",{staticClass:"text-right"},[e("button",{on:{click:function(e){return t.onView(i)}}},[t._v("View")]),e("button",{on:{click:function(e){return t.onEdit(i)}}},[t._v("Edit")])])])])})),1),e("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSaveModal.apply(null,arguments)}}},[e("b-modal",{ref:"my-modal1",attrs:{size:"md","no-close-on-backdrop":!0,"hide-footer":"",title:"Bài viết"}},[e("div",{staticClass:"d-block"},[e("div",{},[t._v(" Tieu de : "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.sel.tieude,expression:"sel.tieude"}],staticClass:"mb-1 full-width",domProps:{value:t.sel.tieude},on:{input:function(e){e.target.composing||t.$set(t.sel,"tieude",e.target.value)}}}),e("CkeditorCom",{ref:"ckeditor",attrs:{height:"200px"},model:{value:t.sel.nd,callback:function(e){t.$set(t.sel,"nd",e)},expression:"sel.nd"}})],1),e("div",{staticClass:"border-top pt-1"},[e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn border mr-1",attrs:{type:"button"},on:{click:t.onSaveModal}},[t._v("Save")]),e("button",{staticClass:"btn border",attrs:{type:"button"},on:{click:function(e){return t.hideModal()}}},[t._v("Cancel")])])])])])],1),e("b-modal",{ref:"mymodalview",attrs:{size:"md","no-close-on-backdrop":!0,"hide-footer":"",title:"Bài viết"}},[e("div",{staticClass:"d-block"},[e("h4",[t._v(t._s(t.rec.tieude))]),e("div",{staticClass:"border-bottom mb-1 text-right"},[t._v(t._s(t.rec.id))]),e("div",{domProps:{innerHTML:t._s(t.rec.nd)}})])])],1)},r=[],a=(i(57658),function(){var t=this,e=t._self._c;return e("div",[e("textarea",{attrs:{id:t.id,name:t.name},domProps:{value:t.value}}),e("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSaveModal.apply(null,arguments)}}},[e("b-modal",{ref:"my-modal",attrs:{size:"lg","no-close-on-backdrop":!0,"hide-footer":"",title:"List images"}},[e("div",{staticClass:"d-block"},[e("div",{},[e("b-row",[e("b-col",{attrs:{lg:"3"}},[e("b-tabs",{attrs:{"content-class":"mt-3"}},[e("b-tab",{attrs:{title:"Images"}},[e("TreeNutCom",{attrs:{items:t.fonders},on:{change:t.fonderChange}})],1),e("b-tab",{attrs:{title:"Upload"}},[e("UploadImageCom",{attrs:{path:t.fonder.path},on:{upload_done:t.onUploadDone}})],1)],1)],1),e("b-col",{attrs:{lg:"9"}},[e("h4",{staticClass:"border-bottom"},[t._v(t._s(t.fonder.path))]),e("div",{staticClass:"mt-1"},t._l(t.imgs,(function(i,n){return e("div",{key:n,staticClass:"position-relative divwidth float-left mr-1 mb-1"},[e("a",{staticClass:"border position-absolute",staticStyle:{right:"0",bottom:"0"},attrs:{href:"#"},on:{click:function(e){return t.onDelImg(i)}}},[t._v("del")]),e("img",{class:{"rounded-circle":t.act==i.Name||t.actSelect.Name==i.Name},attrs:{src:i.FullName.replaceAll("\\","/"),width:"60px",height:"40px"},on:{click:function(e){t.actSelect=i},mouseover:function(e){t.act=i.Name},mouseleave:function(e){t.act=""}}})])})),0)])],1)],1),e("div",{staticClass:"border-top pt-1"},[e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn border mr-1",attrs:{type:"button"},on:{click:t.onSaveModal}},[t._v("Save")]),e("button",{staticClass:"btn border",attrs:{type:"button"},on:{click:function(e){return t.hideModal()}}},[t._v("Cancel")])])])])])],1)])}),s=[],o=i(20700),l={getListTree(t){let e=this.listRootId(t),i=[];return e.forEach((e=>{let n=this.walkTree(t,e);i.push(this.getById(n,e))})),JSON.parse(JSON.stringify(i))},listRootId(t){let e=[];return t.forEach((t=>{0==t.pid&&e.push(t.id)})),e},getById(t,e){let i=-1,n=t.findIndex((t=>t.id==e));return n>-1&&(i=t[n]),i},hasChild(t,e){let i=0;this.getById(t,e);for(var n=0;n<t.length;n++)if(t[n].id!=e&&t[n].pid==e){i=1;break}return i},walkTree(t,e){let i=[],n=[];this.getById(t,e);i.push(e),n.push(e);while(0!=i.length){let e=i.pop();0;let r=this.getById(t,e);1==this.hasChild(t,e)&&(r.children=[]),t.forEach((t=>{t.pid==e&&0==n.includes(t.id)&&(i.push(t.id),n.push(t.id),r.children.push(t))}))}return t}},c=function(){var t=this,e=t._self._c;return e("div",[e("ul",{staticClass:"border pt-1 pb-1"},t._l(t.items,(function(i,n){return e("TreeNut",{key:n,attrs:{item:i,current:t.sel},on:{select:t.onSelect}})})),1)])},d=[],h=function(){var t=this,e=t._self._c;return e("li",[e("div",{class:{bold:t.isFolder,chon:t.isActiveItem,item:!0},on:{click:t.onSelect}},[t._v(" "+t._s(t.item.name)+" "),t.isFolder?e("span",{on:{click:t.toggle}},[t._v("["+t._s(t.isOpen?"-":"+")+"]")]):t._e()]),t.isFolder?e("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}]},t._l(t.item.children,(function(i,n){return e("TreeNut",{key:n,staticClass:"item",attrs:{item:i,current:t.current},on:{select:t.select}})})),1):t._e()])},u=[],g={name:"TreeNut",components:{},props:{item:Object,current:Object},data:function(){return{isOpen:!0}},computed:{isFolder:function(){return this.item.children&&this.item.children.length},isActiveItem:function(){return null!=this.current&&this.current.id==this.item.id}},mounted(){},methods:{toggle:function(){this.isFolder&&(this.isOpen=!this.isOpen)},onSelect:function(){this.select(this.item)},select:function(t){this.$emit("select",t)}}},m=g,p=i(1001),v=(0,p.Z)(m,h,u,!1,null,null,null),f=v.exports,b={props:{items:{type:Array,default:()=>[{id:1,name:"Tu Nhien",path:"sfsfsf",children:[{id:2,name:"Toan",path:"sfsfsf"},{id:3,name:"Ly",path:"sfsfsf"}]},{id:4,name:"Xa hoi",path:"sfsfsf",children:[{id:5,name:"Lich su",path:"sfsfsf",children:[{id:7,name:"Lich su Vn",path:"sfsfsf"}]}]},{id:6,name:"Ton Giao",path:"sfsfsf"}]}},components:{TreeNut:f},mounted(){this.sel=this.items[0],this.$emit("change",this.sel)},data(){return{sel:null}},methods:{onSelect:function(t){this.sel=t,this.$emit("change",t)}}},y=b,k=(0,p.Z)(y,c,d,!1,null,"7ccb3c6b",null),w=k.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("h3",{staticClass:"border-bottom"},[t._v("Upload file")]),e("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onUpload.apply(null,arguments)}}},[e("img",{ref:"output",staticClass:"ml-1 mb-1",attrs:{id:"output",width:"90",height:"110"}}),e("input",{ref:"file",staticClass:"m-1",attrs:{type:"file",id:"file"},on:{change:t.onFileChange}}),e("br"),null!=t.files&&t.files.length>0?e("div",[e("button",{staticClass:"mr-1",attrs:{type:"submit"}},[t._v("Upload")]),e("button",{staticClass:"mr-1",on:{click:t.onRemove}},[t._v("Remove")])]):t._e()])])},x=[],I=i(9669),S=i.n(I),_={props:{path:{type:String,default:""}},components:{},data(){return{files:null,listInfo:[],ds:[],src:""}},mounted(){this.getListImg().then((t=>{this.ds=t.data}))},methods:{getListInfo(t){let e=[];for(var i=0;i<t.length;i++){let n={name:t[i].name,lastModified:t[i].lastModified,size:t[i].size,type:t[i].type};e.push(n)}return e},onFileChange(){var t=["image/jpg","image/gif","image/png","image/jpeg"];let e=this.$refs.file.files,i=t.findIndex((t=>t==e[0].type));i>=0?alert("file hợp lệ"):alert("file khong hop le"),this.files=this.$refs.file.files,this.listInfo=this.getListInfo(this.$refs.file.files),this.getReadAsDataURL(this.files[0]).then((t=>{$(this.$refs.output).attr("src",t)}))},onDel(t){this.Del(t).then((t=>{this.loadListImg()}))},onView(t){this.ReadImage(t).then((t=>{this.src=`data:image/jpg;base64,${t.data}`}))},getReadAsDataURL(t){return new Promise(((e,i)=>{let n=new FileReader;n.onload=()=>{e(n.result)},n.onerror=i,n.readAsDataURL(t)}))},onRemove(t){t.preventDefault(),$(this.$refs.file).val(""),this.files=null,$(this.$refs.output).attr("src","")},onUpload(){if(void 0!==window.FormData){var t=$("#file").get(0),e=t.files;if(0==e.length)return void alert("thieu file");var i=new FormData;console.log(e[0]),i.append(e[0].name,e[0]),i.append("test","thuc 101"),i.append("path",this.path);let n=this;$.ajax({url:"/api/Cke/UploadFile",type:"POST",contentType:!1,processData:!1,data:i,success:function(t){n.$emit("upload_done",t),n.files=null,$("#output").attr("src","")},error:function(t){alert(t.statusText)}})}else alert("FormData is not supported.")},loadListImg(){this.getListImg().then((t=>{this.ds=t.data}))},async getListImg(){return await S().get("/api/FileUpload/GetListFile").catch((t=>{console.log(t)}))},async ReadImage(t){return await S().get(`/api/FileUpload/ReadImage/${t}`).catch((t=>{console.log(t)}))},async GetImage(t){return await S().get(`/api/FileUpload/GetImage/${t}`).catch((t=>{console.log(t)}))},async ReadImage(t){return await S().get(`/api/FileUpload/ReadImage/${t}`).catch((t=>{console.log(t)}))},async Del(t){return await S().get(`/api/FileUpload/Del/${t}`).catch((t=>{console.log(t)}))}}},T=_,B=(0,p.Z)(T,C,x,!1,null,null,null),D=B.exports;function L(t,e){return new Promise((function(i,n){var r=document.createElement("script");r.onload=i,r.onerror=n,r.src=e,r.type="text/javascript",r.setAttribute("id",t),document.getElementsByTagName("head")[0].appendChild(r)}))}let N=(new Date).getTime();var M={components:{TreeNutCom:w,UploadImageCom:D},data(){return{fonders:[],fonder:"",imgs:[],act:"",actSelect:""}},props:{value:{type:String},id:{type:String,default:()=>`editor-${N}`},name:{type:String,default:()=>"editor-"+ ++N},height:{type:String,default:"90px"},toolbar:{type:Array,default:()=>[{name:"clipboard",groups:["clipboard","undo"]},{name:"document",groups:["mode","document","doctools"]},{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi","paragraph"]},{name:"insert",groups:["insert"]},{name:"styles",groups:["styles"]},{name:"others",groups:["others"]}]},language:{type:String,default:"en"},extraplugins:{type:String,default:""}},beforeUpdate(){},mounted(){let t=this,e="/js/ckeditor_4.21.0_full/ckeditor/ckeditor.js";function i(t){const e=t.id,i={extraPlugins:"image2,uploadimage",removePlugins:"image,exportpdf",toolbarGroups:t.toolbar,language:t.language,height:t.height};var n=CKEDITOR.replace(e,i);n.addCommand("mySimpleCommand",{exec:function(e){t.showModal()}}),n.ui.addButton("SuperButton",{label:"Click me",command:"mySimpleCommand",toolbar:"insert",icon:"/fileupload.png"}),CKEDITOR.addCss(".cke_editable{cursor:text; font-size: 11px; font-family: tahoma , Arial, sans-serif;}"),CKEDITOR.instances[e].on("change",(()=>{let i=CKEDITOR.instances[e].getData();i!==t.value&&t.$emit("input",i)})),t.value!==CKEDITOR.instances[e].getData()&&CKEDITOR.instances[e].setData(t.value),t.getListImgs()}document.getElementById("myscirpt_full_enhand1")?i(t):L("myscirpt_full_enhand1",e).then((()=>{i(t)}))},destroy(){},beforeDestroy(){const t=this.id;CKEDITOR.instances[t]&&CKEDITOR.instances&&setTimeout((()=>{let e=CKEDITOR.instances[t];e.destroy()}))},methods:{onUploadDone(t){this.GetFileByDir(this.fonder.path)},onDelImg(t){this.DelImage(t.FullName)},onImgClick(t){this.InsertHtml(`<img src=${t} width="50px" height="40px" />`),this.hideModal()},fonderChange(t){this.fonder=t,this.GetFileByDir(t.path)},onSaveModal(){if(""==this.actSelect)return;let t=this.actSelect.FullName;t=t.replaceAll("\\","/"),this.InsertHtml(`<img src=${t} width="50px" height="40px" />`),this.hideModal(),this.actSelect=""},InsertHtml(t){CKEDITOR.instances[this.id].insertHtml(t)},onEmpty(){CKEDITOR.instances[this.id].setData("")},onTest(){let t="/images/bao.png";this.InsertHtml(`<img src=${t} />`)},showModal(){this.$refs["my-modal"].show()},hideModal(){this.$refs["my-modal"].hide()},async getListImgs(t){return await o.Z.get(`/api/Cke/GetFileByDir?dir=${t}`)},async getListImgs(){return await o.Z.get("/api/Cke/GetFiles2").then((t=>{let e=t.data,i=[];e.forEach((t=>{i.push({id:t.Id,name:t.Name,path:t.Path,pid:t.Pid})}));let n=l.getListTree(i);this.fonders=n})).catch((t=>{console.log(t)}))},async GetFileByDir(t){return await o.Z.get(`/api/Cke/GetFileByDir?dir=${t}`).then((t=>{this.imgs=t.data}))},async DelImage(t){return await o.Z.get(`/api/Cke/DelImage?path=${t}`).then((t=>{this.GetFileByDir(this.fonder.path)}))}}},O=M,F=(0,p.Z)(O,a,s,!1,null,"58f11b44",null),E=F.exports,R=i(19755),q=i.n(R),A={components:{CkeditorCom:E},data(){return{ds:[{id:1,tieude:"Bài viết 1",nd:'\n                    <p>Tương tự, &ocirc;ng H&ograve;a, gi&aacute;m đốc một s&agrave;n địa ốc l&agrave; đại l&yacute; chuy&ecirc;n b&aacute;n h&agrave;ng cho chủ đầu tư bất động sản nằm trong top 3 ở TP HCM, cho biết song song với việc cắt giảm 60% nh&acirc;n sự trong qu&yacute; cuối năm ngo&aacute;i, đến qu&yacute; đầu năm 2023, c&ocirc;ng ty bước v&agrave;o giai đoạn cắt giảm mặt bằng, thu hẹp diện t&iacute;ch văn ph&ograve;ng, đ&oacute;ng cửa 2 chi nh&aacute;nh. &quot;T&ocirc;i đ&oacute;ng bớt văn ph&ograve;ng để tiết kiệm chi ph&iacute;, khi n&agrave;o kinh tế khởi sắc mới t&iacute;nh chuyện thu&ecirc; lại&quot;, &ocirc;ng H&ograve;a n&oacute;i.</p>\n\n<div class="fig-picture" style="padding-bottom:0; position:relative">\n<p style="text-align:center"><img alt="Thị trường văn phóng cho thuê khu trung tâm quận 1, TP HCM. Ảnh: Quỳnh Trần" height="80" src="https://i1-kinhdoanh.vnecdn.net/2023/04/25/DJI-0727-5682-1682425204.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=6FbfOAa2w_EyTnbnYlljvQ" width="121" /></p>\n</div>\n\n<p>Thị trường văn ph&oacute;ng cho thu&ecirc; khu trung t&acirc;m quận 1, TP HCM. Ảnh: <em>Quỳnh Trần</em></p>\n\n<p>Diễn biến n&agrave;y cũng tương đồng với b&aacute;o c&aacute;o của nhiều c&ocirc;ng ty. Savills Việt Nam cho biết qu&yacute; đầu năm, c&ocirc;ng suất thu&ecirc; văn ph&ograve;ng đang đi xuống. Đơn vị n&agrave;y x&aacute;c nhận nh&oacute;m kh&aacute;ch thu&ecirc; ng&agrave;nh bất động sản như Novaland v&agrave; FLC thu hẹp quy m&ocirc; đ&atilde; dẫn đến lượng ti&ecirc;u thụ văn ph&ograve;ng sụt giảm, bị &acirc;m 9.000 m2 s&agrave;n.</p>\n\n<p>C&ograve;n theo CBRE Việt Nam, diện t&iacute;ch văn ph&ograve;ng thu&ecirc; mới trong qu&yacute; I rất hạn chế, trong khi đ&oacute; diện t&iacute;ch kh&aacute;ch trả mặt bằng v&agrave; thu hẹp tăng nhiều, dẫn đến diện t&iacute;ch trống của hạng A tăng 3.500 m2 v&agrave; diện t&iacute;ch cho thu&ecirc; mới của hạng B cũng chỉ hơn 2.200 m2 (trong đ&oacute; đ&atilde; bao gồm gần 3.800 m2 của dự &aacute;n mới đi v&agrave;o hoạt động).</p>\n                    '},{id:2,tieude:"Bài viết 2",nd:'\n                <div>\n<h2>What is Lorem Ipsum? <img alt="" height="89" src="/images2/734032c1-d157-43ba-a4d7-38e9c031c305_shark.jpg" style="float:right" width="111" /></h2>\n\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n                '},{id:3,tieude:"Bài viết 3",nd:"Bài viết 3"},{id:4,tieude:"Bài viết 4",nd:"Bài viết 4"},{id:5,tieude:"Bài viết 5",nd:"Bài viết 5"},{id:6,tieude:"Bài viết 6",nd:"Bài viết 6"}],sel:{},rec:{}}},methods:{getImgs(t){t=`<div>${t}</div>`;for(var e=t.getElementsByTagName("img"),i=0;i<e.length;i++)(function(t){e[t].addEventListener("click",(function(){alert(this.getAttribute("src"))}))})(i)},getStringFromHtml(t){let e=q()(`<div>${t}</div>`),i=e.text();return i=i.replace(/\s+/g," "),i},getListSrc(t){let e=[],i=q()(`<div>${t}</div>`),n=i.find("img");for(var r=0;r<n.length;r++)e.push(n[r].src);return e},getText(t,e){return t.length>e&&(t=t.substring(0,e)+"..."),t},onView(t){this.rec=JSON.parse(JSON.stringify(t)),this.$refs.mymodalview.show()},showModal(){this.$refs["my-modal1"].show()},hideModal(){this.$refs["my-modal1"].hide()},showModalView(){this.$refs.mymodalview.show()},hideModalView(){this.$refs.mymodalview.hide()},onSaveModal(){let t=JSON.parse(JSON.stringify(this.sel)),e=this.ds.findIndex((e=>e.id==t.id));this.ds[e]=t,this.sel={},this.hideModal()},onEdit(t){this.sel=JSON.parse(JSON.stringify(t)),this.showModal()}}},V=A,P=(0,p.Z)(V,n,r,!1,null,"2fb24f81",null),j=P.exports},80173:function(t,e){e["Z"]='<template>\r\n    <div class="home">\r\n        <raw-loader :mytxt="require(\'!raw-loader!./ViduBaiViet2.vue\').default"></raw-loader>\r\n        <h1 class="border-bottom">ViduBaiViet2</h1>\r\n        <b-row>\r\n            <b-col lg="3" v-for="(x, k) in ds" :key="k">\r\n\r\n                <div :class="[\'border\', \'p-1\', \'mb-1\', (k % 2 == 0) ? \'bg-light\' : \'\']">\r\n                    <h4 class="border-bottom">{{ x.tieude }}</h4>\r\n                    <div class="d-flex bd-highlight">\r\n                        <div class="p-2 bd-highlight ">\r\n                            <img :src="(getListSrc(x.nd).length != 0) ? getListSrc(x.nd)[0] : \'/images2/734032c1-d157-43ba-a4d7-38e9c031c305_shark.jpg\'"\r\n                                height="40px" width="60px" class="float-left" />\r\n                        </div>\r\n                        <div class="p-2 flex-grow-1 bd-highlight text-justify">\r\n                            {{ getText(getStringFromHtml(x.nd), 80) }}\r\n                        </div>\r\n                    </div>\r\n                    <div class="text-right">\r\n                        <button @click="onView(x)">View</button>\r\n                        <button @click="onEdit(x)">Edit</button>\r\n                    </div>\r\n                </div>\r\n            </b-col>\r\n        </b-row>\r\n        <form @submit.stop.prevent="onSaveModal">\r\n            <b-modal ref="my-modal1" size="md" :no-close-on-backdrop="true" hide-footer :title="\'Bài viết\'">\r\n                <div class="d-block">\r\n                    <div class="">\r\n                        Tieu de : <input v-model="sel.tieude" class="mb-1 full-width" />\r\n                        <CkeditorCom ref="ckeditor" v-model="sel.nd" :height="\'200px\'"></CkeditorCom>\r\n                    </div>\r\n                    <div class="border-top pt-1">\r\n                        <div class="text-right">\r\n                            <button type="button" @click="onSaveModal" class="btn border mr-1">Save</button>\r\n                            <button type="button" class="btn border" @click="hideModal()">Cancel</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </b-modal>\r\n        </form>\r\n\r\n        <b-modal ref="mymodalview" size="md" :no-close-on-backdrop="true" hide-footer :title="\'Bài viết\'">\r\n            <div class="d-block">\r\n                \x3c!-- {{rec}}\r\n                { "id": 1, "tieude": "Bài viết 1", "nd": "                 --\x3e\r\n                <h4>{{ rec.tieude }}</h4>\r\n                <div class="border-bottom mb-1 text-right">{{ rec.id }}</div>\r\n                <div v-html="rec.nd"></div>\r\n            </div>\r\n        </b-modal>\r\n\r\n\r\n    </div>\r\n</template>\r\n<script>\r\nimport CkeditorCom from "@/views/Cke/CkeditorCom1.vue"\r\nimport $ from "jquery"\r\nexport default {\r\n    components: {\r\n        CkeditorCom\r\n    },\r\n    data() {\r\n        return {\r\n            ds: [\r\n                {\r\n                    id: 1, tieude: \'Bài viết 1\', nd:\r\n                        `\r\n                    <p>Tương tự, &ocirc;ng H&ograve;a, gi&aacute;m đốc một s&agrave;n địa ốc l&agrave; đại l&yacute; chuy&ecirc;n b&aacute;n h&agrave;ng cho chủ đầu tư bất động sản nằm trong top 3 ở TP HCM, cho biết song song với việc cắt giảm 60% nh&acirc;n sự trong qu&yacute; cuối năm ngo&aacute;i, đến qu&yacute; đầu năm 2023, c&ocirc;ng ty bước v&agrave;o giai đoạn cắt giảm mặt bằng, thu hẹp diện t&iacute;ch văn ph&ograve;ng, đ&oacute;ng cửa 2 chi nh&aacute;nh. &quot;T&ocirc;i đ&oacute;ng bớt văn ph&ograve;ng để tiết kiệm chi ph&iacute;, khi n&agrave;o kinh tế khởi sắc mới t&iacute;nh chuyện thu&ecirc; lại&quot;, &ocirc;ng H&ograve;a n&oacute;i.</p>\r\n\r\n<div class="fig-picture" style="padding-bottom:0; position:relative">\r\n<p style="text-align:center"><img alt="Thị trường văn phóng cho thuê khu trung tâm quận 1, TP HCM. Ảnh: Quỳnh Trần" height="80" src="https://i1-kinhdoanh.vnecdn.net/2023/04/25/DJI-0727-5682-1682425204.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=6FbfOAa2w_EyTnbnYlljvQ" width="121" /></p>\r\n</div>\r\n\r\n<p>Thị trường văn ph&oacute;ng cho thu&ecirc; khu trung t&acirc;m quận 1, TP HCM. Ảnh: <em>Quỳnh Trần</em></p>\r\n\r\n<p>Diễn biến n&agrave;y cũng tương đồng với b&aacute;o c&aacute;o của nhiều c&ocirc;ng ty. Savills Việt Nam cho biết qu&yacute; đầu năm, c&ocirc;ng suất thu&ecirc; văn ph&ograve;ng đang đi xuống. Đơn vị n&agrave;y x&aacute;c nhận nh&oacute;m kh&aacute;ch thu&ecirc; ng&agrave;nh bất động sản như Novaland v&agrave; FLC thu hẹp quy m&ocirc; đ&atilde; dẫn đến lượng ti&ecirc;u thụ văn ph&ograve;ng sụt giảm, bị &acirc;m 9.000 m2 s&agrave;n.</p>\r\n\r\n<p>C&ograve;n theo CBRE Việt Nam, diện t&iacute;ch văn ph&ograve;ng thu&ecirc; mới trong qu&yacute; I rất hạn chế, trong khi đ&oacute; diện t&iacute;ch kh&aacute;ch trả mặt bằng v&agrave; thu hẹp tăng nhiều, dẫn đến diện t&iacute;ch trống của hạng A tăng 3.500 m2 v&agrave; diện t&iacute;ch cho thu&ecirc; mới của hạng B cũng chỉ hơn 2.200 m2 (trong đ&oacute; đ&atilde; bao gồm gần 3.800 m2 của dự &aacute;n mới đi v&agrave;o hoạt động).</p>\r\n                    `\r\n                },\r\n                {\r\n                    id: 2, tieude: \'Bài viết 2\', nd:\r\n                        `\r\n                <div>\r\n<h2>What is Lorem Ipsum? <img alt="" height="89" src="/images2/734032c1-d157-43ba-a4d7-38e9c031c305_shark.jpg" style="float:right" width="111" /></h2>\r\n\r\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n</div>\r\n                `\r\n                },\r\n                { id: 3, tieude: \'Bài viết 3\', nd: \'Bài viết 3\' },\r\n                { id: 4, tieude: \'Bài viết 4\', nd: \'Bài viết 4\' },\r\n                { id: 5, tieude: \'Bài viết 5\', nd: \'Bài viết 5\' },\r\n                { id: 6, tieude: \'Bài viết 6\', nd: \'Bài viết 6\' },\r\n            ],\r\n            sel: {},\r\n            rec:{}\r\n        }\r\n    },\r\n    methods: {\r\n\r\n        getImgs(html) {\r\n            html = `<div>${html}</div>`;\r\n            var getAllImages = html.getElementsByTagName(\'img\');\r\n            for (var i = 0; i < getAllImages.length; i++) {\r\n                (function (x) {  // closure starts here\r\n                    getAllImages[x].addEventListener(\'click\', function () {\r\n                        alert(this.getAttribute(\'src\'))\r\n                    })\r\n                }(i))\r\n            }\r\n        },\r\n        getStringFromHtml(html) {\r\n            let $text = $(`<div>${html}</div>`);\r\n            let str = $text.text();\r\n            str = str.replace(/\\s+/g, \' \');\r\n            return str;\r\n        },\r\n        getListSrc(html) {\r\n            let kq = [];\r\n            let $text = $(`<div>${html}</div>`);\r\n            let ar = $text.find(\'img\');\r\n            for (var i = 0; i < ar.length; i++) {\r\n                kq.push(ar[i].src);\r\n            }\r\n            return kq;\r\n        },\r\n        getText(text, n) {\r\n            if (text.length > n) {\r\n                text = text.substring(0, n) + \'...\';\r\n            }\r\n            return text;\r\n        },\r\n        onView(x) {\r\n            //alert(JSON.stringify(this.getListSrc(x.nd)));\r\n            this.rec=JSON.parse(JSON.stringify(x));\r\n            this.$refs.mymodalview.show();\r\n        },\r\n\r\n        showModal() {\r\n            this.$refs["my-modal1"].show();\r\n        },\r\n        hideModal() {\r\n            this.$refs["my-modal1"].hide();\r\n        },\r\n        showModalView() {\r\n            this.$refs.mymodalview.show();//.$refs.my//$refs["my-modal1"].show();\r\n        },\r\n        hideModalView() {\r\n            this.$refs.mymodalview.hide();//.$refs["my-modal1"].hide();\r\n        },\r\n        onSaveModal() {\r\n            let r = JSON.parse(JSON.stringify(this.sel));\r\n            let index = this.ds.findIndex(x => x.id == r.id);\r\n            this.ds[index] = r;\r\n            this.sel = {};\r\n            this.hideModal();\r\n        },\r\n        onEdit(x) {\r\n            this.sel = JSON.parse(JSON.stringify(x));\r\n            this.showModal();\r\n        }\r\n    }\r\n\r\n}\r\n<\/script>\r\n<style scoped>\r\n.full-width {\r\n    width: 100%;\r\n}\r\n</style>\r\n  '}}]);
//# sourceMappingURL=301.340b4dec.js.map