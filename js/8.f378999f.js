(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{e086:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fullscreen bg-primary text-white text-center q-pa-md flex flex-center"},[n("div",[n("h6",{staticClass:"q-my-none"},[e._v("404")]),n("h6",{staticClass:"q-my-sm",staticStyle:{opacity:".4"}},[e._v("\n      Oops. Nothing here...\n    ")]),n("h6",{staticClass:"q-mt-none q-mb-sm"},[e._v("\n      We couldn't find the page you were looking for.\n    ")]),n("img",{style:"max-height:"+(e.isBreakpointNotMd?"100px":"190px"),attrs:{src:e.imgSrc}}),n("h6",{staticClass:"q-my-md"},[e._v("\n      You can click the button below or you will be redirected in\n    ")]),e.isBreakpointNotMd?n("mobile-timer",{attrs:{endDate:e.endDate}}):n("timer",{attrs:{endDate:e.endDate}}),n("q-btn",{staticClass:"q-mt-lg",attrs:{color:"white","text-color":"primary",unelevated:"",to:"/",label:"Homepage","no-caps":"",size:"lg"}})],1)])},o=[],a=n("5a50"),i=n("ad9e"),r={name:"Error404",mixins:[i["a"]],data:()=>({imgSrc:a["e"],secondsBeforeRedirect:10}),computed:{endDate(){let e=new Date;return e.setSeconds(e.getSeconds()+this.secondsBeforeRedirect),e.toISOString()}},mounted(){let e=this;setTimeout((function(){e.$router.push("/")}),1e3*this.secondsBeforeRedirect)},components:{timer:n("e9ba").default,"mobile-timer":n("e343").default}},c=r,l=n("2877"),d=n("9c40"),m=n("eebe"),u=n.n(m),p=Object(l["a"])(c,s,o,!1,null,null,null);t["default"]=p.exports;u()(p,"components",{QBtn:d["a"]})}}]);