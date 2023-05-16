"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[501],{23501:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=function(){var e=this,r=e._self._c;return r("div",[r("raw-loader",{attrs:{mytxt:t(94438).Z}}),r("h1",{staticClass:"border-bottom"},[e._v("KonvaTpl2")]),e._v(" "+e._s(e.msg)),r("br"),e._v(" "+e._s(e.selId)),r("br"),r("b-row",[r("b-col",{attrs:{lg:"4"}},[r("button",{staticClass:"mb-1",on:{click:e.onClearSelect}},[e._v("Clear Select")]),r("div",{attrs:{id:"stage-parent"}},[r("div",{staticClass:"border",attrs:{id:"container"}},[r("v-stage",{ref:"stage",attrs:{config:e.configKonva},on:{click:e.onStageClick,mousemove:e.onStageMouseMove,mouseenter:e.onStageMouseenter,mouseleave:e.onStageMouseleave}},[r("v-layer",{ref:"layer"},[e._l(e.items,(function(t,n){return r("v-rect",{key:n,attrs:{config:t},on:{dragstart:e.handleDragstart,dragend:e.handleDragend}})})),r("v-circle",{ref:"circle"}),r("v-rect",{ref:"rect"}),r("v-transformer",{ref:"transformer"})],2)],1)],1)]),r("button",{staticClass:"mt-1",on:{click:e.onSave}},[e._v("Save")])]),r("b-col",{attrs:{lg:"8"}},[r("div",{staticClass:"d-flex align-content-start flex-wrap"},e._l(e.ds,(function(e,t){return r("div",{key:t,staticClass:"p-2 bd-highlight"},[r("img",{staticClass:"border",attrs:{src:e,width:"120",height:"90"}})])})),0),e._v(" right ")])],1)],1)},a=[],s=(t(57658),1500),i=1e3,l=null;var o={data(){return{configKonva:{width:s,height:i},items:[],msg:"",count:0,selId:-1,ds:[]}},mounted(){this.$nextTick((function(){this.$refs.layer.getNode(),l=this.$refs.stage.getNode(),window.addEventListener("resize",this.fitStageIntoParentContainer),this.fitStageIntoParentContainer()}))},watch:{selId:function(e,r){let t=this.getById(this.selId).fill();this.getById(this.selId).setAttr(t),this.getById(this.selId).fill("yellow"),this.clearTransformer(),this.addTransformer(this.getById(this.selId)),-1==r||this.getById(r).fill(this.getById(r).getAttr("ofill"))}},methods:{clearTransformer(){let e=this.$refs.stage.getNode(),r=e.find(".rectTransformer");r.forEach((e=>{e.destroy()}))},addTransformer(e){this.$refs.stage.getNode();const r=this.$refs.transformer.getNode().clone();r.name("rectTransformer");let t=this.$refs.layer.getNode();t.add(r),r.nodes([e])},onClearSelect(){this.clearTransformer()},onSave(){let e=this.$refs.stage.getNode();var r=e.toDataURL({pixelRatio:.5});this.ds.push(r)},handleDragstart(e){e.target.moveToTop()},handleDragend(e){e.target.fill("yellow")},onStageClick(e){let r=this.myGetMouse(),t=this.$refs.layer.getNode();if(""==e.target.id()){let e=this.makeRect(this.getCount(),r.x,r.y,100,100);t.add(e)}else e.target.setAttr("ofill",e.target.fill()),this.selId=e.target.id()},onStageMouseMove(e){this.myGetMouse()},onStageMouseenter(e){},onStageMouseleave(e){},getCount(){let e=this.count;return this.count++,e},makeCircle(e,r,t,n){let a=this.$refs.circle.getNode().clone();return a.id(e.toString()),a.x(r),a.y(t),a.radius(n),a.draggable(!0),a.fill(Konva.Util.getRandomColor()),a.stroke("blue"),a},makeRect(e,r,t,n,a){let s=this.$refs.rect.getNode().clone();return s.id(e.toString()),s.x(r),s.y(t),s.width(n),s.height(a),s.draggable(!0),s.fill(Konva.Util.getRandomColor()),s},myGetMouse(){let e=l.scale().x;var r=l.getPointerPosition(),t=r.x,n=r.y,a=Math.round(t/e),s=Math.round(n/e);return{x:a,y:s}},fitStageIntoParentContainer(){var e=document.querySelector("#stage-parent"),r=e.offsetWidth,t=r/s;l.width(s*t),l.height(i*t),l.scale({x:t,y:t}),this.configKonva.width=s*t,this.configKonva.height=i*t},getById(e){let r=this.$refs.layer.getNode();return r.find(`#${e}`)[0]}}},d=o,c=t(1001),g=(0,c.Z)(d,n,a,!1,null,null,null),h=g.exports},94438:function(e,r){r["Z"]='<template>\r\n    <div>\r\n        <raw-loader :mytxt="require(\'!raw-loader!./Tpl2Save.vue\').default"></raw-loader>\r\n        <h1 class="border-bottom">KonvaTpl2</h1>\r\n        {{ msg }}<br>\r\n        {{ selId }}<br>\r\n        <b-row>\r\n            <b-col lg="4">\r\n                <button class="mb-1" @click="onClearSelect">Clear Select</button>\r\n                <div id="stage-parent">\r\n                    <div id="container" class="border">\r\n                        <v-stage ref="stage" @click="onStageClick" @mousemove="onStageMouseMove"\r\n                            @mouseenter="onStageMouseenter" @mouseleave="onStageMouseleave" :config="configKonva">\r\n                            <v-layer ref="layer">\r\n                                <v-rect v-for="(x, k) in items" :key="k" :config="x" @dragstart="handleDragstart"\r\n                                    @dragend="handleDragend" />\r\n                                <v-circle ref="circle"></v-circle> \r\n                                <v-rect ref="rect"></v-rect>\r\n                                <v-transformer ref="transformer" />\r\n                            </v-layer>\r\n                        </v-stage>\r\n                    </div>\r\n                </div>\r\n                <button class="mt-1" @click="onSave">Save</button>\r\n            </b-col>\r\n            <b-col lg="8">\r\n\r\n                <div class="d-flex align-content-start flex-wrap">\r\n                    <div class="p-2 bd-highlight " v-for="(x, k) in ds" :key="k">\r\n                        <img :src="x" width="120" height="90" class="border" />\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                right\r\n            </b-col>\r\n        </b-row>\r\n    </div>\r\n</template>\r\n<script>\r\nvar sceneWidth = 1500;\r\nvar sceneHeight = 1000;\r\nvar stage = null;\r\nvar layer = null;\r\nfunction generateItems() {\r\n    let w=200;\r\n    let h=200;\r\n    let width = sceneWidth - w;\r\n    let height = sceneHeight - h;\r\n    const items = [];\r\n    for (let i = 0; i < 10; i++) {\r\n        items.push({\r\n            x: Math.random() * width,\r\n            y: Math.random() * height,\r\n            radius: 50,\r\n            id: "node-" + i,\r\n            width: w,\r\n            height: h,\r\n            fill: Konva.Util.getRandomColor(),\r\n            stroke: \'black\', //Konva.Util.getRandomColor(),\r\n            draggable: true,\r\n            strokeWidth: 4,\r\n        });\r\n    }\r\n    return items;\r\n}\r\nexport default {\r\n    data() {\r\n        return {\r\n            configKonva: {\r\n                width: sceneWidth,\r\n                height: sceneHeight\r\n            },\r\n            items: [],\r\n            msg: \'\',\r\n            count:0,\r\n            selId:-1,\r\n            ds:[],\r\n\r\n        }\r\n    },\r\n    mounted() {\r\n        //this.items = generateItems();\r\n        this.$nextTick(function () {\r\n            layer = this.$refs.layer.getNode();\r\n            stage = this.$refs.stage.getNode();\r\n            window.addEventListener("resize", this.fitStageIntoParentContainer);\r\n            this.fitStageIntoParentContainer();\r\n        })\r\n        //this.transformerNode = this.$refs.transformer.getNode();\r\n    },\r\n    watch: {\r\n        selId: function(newValue,oldValue) {\r\n            let ofill=this.getById(this.selId).fill();\r\n            this.getById(this.selId).setAttr(ofill);\r\n            this.getById(this.selId).fill("yellow");\r\n            this.clearTransformer();\r\n            this.addTransformer(this.getById(this.selId));\r\n            if(oldValue==-1){\r\n            }else{\r\n                this.getById(oldValue).fill(this.getById(oldValue).getAttr(\'ofill\'));\r\n            }\r\n        }\r\n    },\r\n    methods: {\r\n        clearTransformer(){\r\n            let stage = this.$refs.stage.getNode();\r\n            let trs=stage.find(\'.rectTransformer\');\r\n            trs.forEach(x=>{\r\n                x.destroy();\r\n            })\r\n        },\r\n        addTransformer(shape){\r\n            let stage = this.$refs.stage.getNode();\r\n            const transformerNode = this.$refs.transformer.getNode().clone();\r\n            transformerNode.name(\'rectTransformer\');\r\n            let layer=this.$refs.layer.getNode();\r\n            layer.add(transformerNode);\r\n            transformerNode.nodes([shape]);\r\n        },\r\n        onClearSelect(){\r\n            this.clearTransformer();\r\n        },        \r\n        onSave() {\r\n            let stage = this.$refs.stage.getNode();\r\n            var dataURL = stage.toDataURL({ pixelRatio: 0.5 });\r\n            //alert(dataURL);\r\n            this.ds.push(dataURL);\r\n        },\r\n        handleDragstart(e) {\r\n            e.target.moveToTop();\r\n        },\r\n        handleDragend(e) {\r\n            e.target.fill(\'yellow\');\r\n        },\r\n        onStageClick(e) {\r\n            let p = this.myGetMouse();\r\n            let layer=this.$refs.layer.getNode();\r\n\r\n            if(e.target.id()==\'\'){\r\n                //let circle=this.makeCircle(this.getCount(),p.x,p.y,70);\r\n                let circle=this.makeRect(this.getCount(),p.x,p.y,100,100);\r\n                layer.add(circle);\r\n            }else{\r\n                e.target.setAttr(\'ofill\',e.target.fill());\r\n                this.selId=e.target.id();\r\n            }\r\n        },\r\n        onStageMouseMove(e) {\r\n            let p = this.myGetMouse();\r\n        },\r\n        onStageMouseenter(e) {\r\n        },\r\n        onStageMouseleave(e) {\r\n        },\r\n        getCount(){\r\n            let kq=this.count;\r\n            this.count++;\r\n            return kq;\r\n        },\r\n        makeCircle(id,x,y,radius){\r\n            let circle=this.$refs.circle.getNode().clone();\r\n            circle.id(id.toString());\r\n            circle.x(x);\r\n            circle.y(y);\r\n            circle.radius(radius);\r\n            circle.draggable(true);\r\n            circle.fill(Konva.Util.getRandomColor());\r\n            circle.stroke(\'blue\');\r\n            return circle;\r\n        },\r\n        makeRect(id,x,y,w,h){\r\n            let circle=this.$refs.rect.getNode().clone();\r\n            circle.id(id.toString());\r\n            circle.x(x);\r\n            circle.y(y);\r\n            circle.width(w);\r\n            circle.height(h);\r\n            circle.draggable(true);\r\n            circle.fill(Konva.Util.getRandomColor());\r\n            //circle.stroke(\'blue\');\r\n            return circle;\r\n        },\r\n        myGetMouse() {\r\n            let scale = stage.scale().x;\r\n            var mousePos = stage.getPointerPosition();\r\n            var x = mousePos.x;\r\n            var y = mousePos.y;\r\n            var xx = Math.round(x / scale);\r\n            var yy = Math.round(y / scale);\r\n            return { x: xx, y: yy };\r\n        },\r\n        fitStageIntoParentContainer() {\r\n            var container = document.querySelector(\'#stage-parent\');\r\n            var containerWidth = container.offsetWidth;\r\n            var scale = containerWidth / sceneWidth;\r\n            stage.width(sceneWidth * scale);\r\n            stage.height(sceneHeight * scale);\r\n            stage.scale({ x: scale, y: scale });\r\n            this.configKonva.width = sceneWidth * scale;\r\n            this.configKonva.height = sceneHeight * scale;\r\n        },\r\n        getById(id){\r\n            let layer=this.$refs.layer.getNode(); \r\n            return layer.find(`#${id}`)[0] \r\n        },\r\n    }\r\n}\r\n<\/script>\r\n  '}}]);
//# sourceMappingURL=501.8fa34731.js.map