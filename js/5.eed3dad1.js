(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"214f":function(t,e,a){"use strict";a("2cb6")},"2cb6":function(t,e,a){},"489b":function(t,e,a){},6874:function(t,e,a){"use strict";a("7eba")},"6e99":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{staticClass:"link-item",attrs:{to:t.link.to,exact:"",clickable:"","no-hover":""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.link.icon}})],1),a("q-item-section",[t._v("\n    "+t._s(t.link.title)+"\n  ")])],1)},i=[],r={name:"DrawerLink",props:{link:{type:Object,required:!0}}},n=r,s=(a("214f"),a("2877")),c=a("66e5"),l=a("4074"),u=a("0016"),d=a("eebe"),p=a.n(d),f=Object(s["a"])(n,o,i,!1,null,"76698744",null);e["default"]=f.exports;p()(f,"components",{QItem:c["a"],QItemSection:l["a"],QIcon:u["a"]})},"7b11":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-bar",{class:{"big-footer":t.isBigFooter}},[t.isBigFooter?a("kofi-btn",{attrs:{large:""}}):t.showKofi?a("kofi-btn"):t._e(),a("q-space"),a("div",[t.isBigFooter?a("span",{staticClass:"text-body2 float-right",staticStyle:{"text-align":"right"}},[t._v(t._s(t.contactInvite)),a("u",{staticClass:"cursor-pointer",on:{click:function(e){return t.goToContact()}}},[t._v("here")])]):t._e(),t.isBigFooter?a("br"):t._e(),a("span",{staticClass:"text-caption float-right"},[t._v(t._s((new Date).getFullYear())+" MCU Countdown\n    ")]),a("spinner",{staticClass:"float-right q-mr-xs",attrs:{width:"20"}})],1)],1)},i=[],r=a("5a50"),n=a("ad9e"),s={name:"DynamicFooter",mixins:[n["a"]],props:{routeName:{type:String,required:!0}},data:()=>({pagesWithBigFooter:r["k"]}),computed:{isBigFooter(){return r["k"].includes(this.routeName)},showKofi(){return!r["i"].includes(this.routeName)},contactInvite(){return this.isBreakpointNotMd?"Want to send a message? Go ":"Do you see something wrong, have a suggestion or just want to say hi? Click "}},methods:{goToContact(){this.$router.push("/contact")}},components:{"kofi-btn":a("a676").default,spinner:a("2375").default}},c=s,l=(a("b8db"),a("2877")),u=a("d847"),d=a("2c91"),p=a("eebe"),f=a.n(p),m=Object(l["a"])(c,o,i,!1,null,"64b2f536",null);e["default"]=m.exports;f()(m,"components",{QBar:u["a"],QSpace:d["a"]})},"7eba":function(t,e,a){},"8e31":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{staticClass:"text-white bg-primary",attrs:{view:"hHh Lpr lff"}},[o("q-header",{staticClass:"bg-secondary text-white",attrs:{elevated:""}},[o("q-toolbar",[t.isBreakpointNotMd?o("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(e){t.drawer=!t.drawer}}}):t._e(),o("q-toolbar-title",[t.isBreakpointNotMd?t._e():o("img",{staticClass:"cursor-pointer main-logo",attrs:{src:a("ab0d")},on:{click:function(e){return t.goToHome()}}})]),t.isBreakpointNotMd?o("img",{staticClass:"cursor-pointer main-logo-mobile",attrs:{src:a("ab0d")},on:{click:function(e){return t.goToHome()}}}):t._e(),"home"!=this.$router.currentRoute.name||t.isMobile||t.isBreakpointNotMd?t._e():o("search-input",{staticClass:"search-input",model:{value:t.searchExpression,callback:function(e){t.searchExpression=e},expression:"searchExpression"}})],1)],1),o("q-drawer",{attrs:{"show-if-above":"",mini:t.miniState,"mini-to-overlay":"",width:200,breakpoint:500,bordered:"","content-class":"bg-grey-3"},on:{mouseover:function(e){t.miniState=!1},mouseout:function(e){t.miniState=!0}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("div",{staticClass:"fit bg-dark"},[o("q-list",{staticClass:"center-vertical text-grey-6",attrs:{padding:""}},[t._l(t.drawerLinks,(function(t){return o("drawer-link",{key:t.title,attrs:{link:t}})})),o("q-separator"),o("drawer-link",{attrs:{link:t.setupDrawerLink}})],2)],1)]),o("q-page-container",[o("div",{class:{"q-mx-auto page-max-width":!t.pagesWithoutMargins.includes(t.$router.currentRoute.name)}},[o("router-view",{attrs:{searchExpression:t.searchExpression}})],1)]),o("q-footer",{staticClass:"bg-primary text-white",attrs:{elevated:""}},[o("dynamic-footer",{attrs:{"route-name":t.$router.currentRoute.name}})],1)],1)},i=[],r=a("5a50"),n=a("ad9e"),s={name:"MainLayout",mixins:[n["a"]],data(){return{searchExpression:"",miniState:!0,drawer:!1,pagesWithoutMargins:r["j"],drawerLinks:[{title:"Home",icon:"fas fa-home",to:"/"},{title:"Movies",icon:"fas fa-film",to:"/movies"},{title:"Series",icon:"fas fa-tv",to:"/series"}],setupDrawerLink:{title:"Send a message",icon:"fas fa-paper-plane",to:"/contact"}}},methods:{goToHome(){this.$router.push("/")}},components:{"drawer-link":a("6e99").default,"kofi-btn":a("a676").default,"dynamic-footer":a("7b11").default,"search-input":a("0781").default}},c=s,l=(a("6874"),a("2877")),u=a("4d5a"),d=a("e359"),p=a("65c6"),f=a("9c40"),m=a("6ac5"),b=a("9404"),g=a("1c1c"),h=a("eb85"),k=a("09e3"),w=a("7ff0"),v=a("eebe"),x=a.n(v),_=Object(l["a"])(c,o,i,!1,null,"6a164c92",null);e["default"]=_.exports;x()(_,"components",{QLayout:u["a"],QHeader:d["a"],QToolbar:p["a"],QBtn:f["a"],QToolbarTitle:m["a"],QDrawer:b["a"],QList:g["a"],QSeparator:h["a"],QPageContainer:k["a"],QFooter:w["a"]})},ab0d:function(t,e,a){t.exports=a.p+"img/logo.683a3423.png"},b8db:function(t,e,a){"use strict";a("489b")}}]);