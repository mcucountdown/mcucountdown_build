(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"214f":function(t,e,a){"use strict";a("9928")},"5b6e":function(t,e,a){"use strict";a("f283")},"6e99":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{staticClass:"link-item",attrs:{to:t.link.to,exact:"",clickable:"","no-hover":""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.link.icon}})],1),a("q-item-section",[t._v("\n    "+t._s(t.link.title)+"\n  ")])],1)},i=[],n={name:"DrawerLink",props:{link:{type:Object,required:!0}}},o=n,s=(a("214f"),a("2877")),c=a("66e5"),l=a("4074"),u=a("0016"),d=a("eebe"),f=a.n(d),p=Object(s["a"])(o,r,i,!1,null,"76698744",null);e["default"]=p.exports;f()(p,"components",{QItem:c["a"],QItemSection:l["a"],QIcon:u["a"]})},"7b11":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-bar",{class:{"big-footer":t.isBigFooter}},[t.isBigFooter?a("kofi-btn",{attrs:{large:""}}):t.showKofi?a("kofi-btn"):t._e(),a("q-space"),a("div",[t.isBigFooter?a("span",{staticClass:"text-body2 float-right",staticStyle:{"text-align":"right"}},[t._v(t._s(t.contactInvite)),a("u",{staticClass:"cursor-pointer",on:{click:function(e){return t.goToContact()}}},[t._v("here")])]):t._e(),t.isBigFooter?a("br"):t._e(),a("span",{staticClass:"text-caption float-right"},[t._v(t._s((new Date).getFullYear())+" MCU Countdown\n    ")]),a("spinner",{staticClass:"float-right q-mr-xs",attrs:{width:"20"}})],1)],1)},i=[],n=a("5a50"),o=a("ad9e"),s={name:"DynamicFooter",mixins:[o["a"]],props:{routeName:{type:String,required:!0}},data:()=>({pagesWithBigFooter:n["l"]}),computed:{isBigFooter(){return n["l"].includes(this.routeName)},showKofi(){return!n["j"].includes(this.routeName)},contactInvite(){return this.isBreakpointNotMd?"Want to send a message? Go ":"Do you see something wrong, have a suggestion or just want to say hi? Click "}},methods:{goToContact(){this.$router.push("/contact")}},components:{"kofi-btn":a("a676").default,spinner:a("2375").default}},c=s,l=(a("b8db"),a("2877")),u=a("d847"),d=a("2c91"),f=a("eebe"),p=a.n(f),m=Object(l["a"])(c,r,i,!1,null,"64b2f536",null);e["default"]=m.exports;p()(m,"components",{QBar:u["a"],QSpace:d["a"]})},"8e31":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-layout",{staticClass:"text-white bg-primary",attrs:{view:"hHh Lpr lff"}},[r("q-header",{staticClass:"bg-secondary text-white",attrs:{elevated:""}},[r("q-toolbar",[t.isBreakpointNotMd?r("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(e){t.drawer=!t.drawer}}}):t._e(),r("q-toolbar-title",[t.isBreakpointNotMd?t._e():r("a",{attrs:{href:"/"}},[r("img",{staticClass:"cursor-pointer main-logo",attrs:{src:a("ab0d")}})])]),t.isBreakpointNotMd?r("a",{attrs:{href:"/"}},[r("img",{staticClass:"cursor-pointer main-logo-mobile",attrs:{src:a("ab0d")}})]):t._e(),"home"!=this.$router.currentRoute.name||t.isMobile||t.isBreakpointNotMd?t._e():r("search-input",{staticClass:"search-input",model:{value:t.searchExpression,callback:function(e){t.searchExpression=e},expression:"searchExpression"}})],1)],1),r("q-drawer",{attrs:{"show-if-above":"",mini:t.miniState,"mini-to-overlay":"",width:200,breakpoint:500,bordered:"","content-class":"bg-grey-3"},on:{mouseover:function(e){t.miniState=!1},mouseout:function(e){t.miniState=!0}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("div",{staticClass:"fit bg-dark"},[r("q-list",{staticClass:"center-vertical text-grey-6",attrs:{padding:""}},[t._l(t.drawerLinks,(function(t){return r("drawer-link",{key:t.title,attrs:{link:t}})})),r("q-separator"),r("drawer-link",{attrs:{link:t.setupDrawerLink}})],2)],1)]),r("q-page-container",[r("div",{class:{"q-mx-auto page-max-width":!t.pagesWithoutMargins.includes(t.$router.currentRoute.name)}},[r("router-view",{attrs:{searchExpression:t.searchExpression}})],1)]),r("q-footer",{staticClass:"bg-primary text-white",attrs:{elevated:""}},[r("dynamic-footer",{attrs:{"route-name":t.$router.currentRoute.name}})],1)],1)},i=[],n=a("5a50"),o=a("ad9e"),s={name:"MainLayout",mixins:[o["a"]],data(){return{searchExpression:"",miniState:!0,drawer:!1,pagesWithoutMargins:n["k"],drawerLinks:[{title:"Home",icon:"fas fa-home",to:"/"},{title:"Calendar",icon:"far fa-calendar-alt",to:"/calendar"},{title:"Movies",icon:"fas fa-film",to:"/movies"},{title:"Series",icon:"fas fa-tv",to:"/series"}],setupDrawerLink:{title:"Send a message",icon:"fas fa-paper-plane",to:"/contact"}}},components:{"drawer-link":a("6e99").default,"kofi-btn":a("a676").default,"dynamic-footer":a("7b11").default,"search-input":a("0781").default}},c=s,l=(a("5b6e"),a("2877")),u=a("4d5a"),d=a("e359"),f=a("65c6"),p=a("9c40"),m=a("6ac5"),b=a("9404"),h=a("1c1c"),g=a("eb85"),w=a("09e3"),k=a("7ff0"),v=a("eebe"),x=a.n(v),_=Object(l["a"])(c,r,i,!1,null,"e9dd7010",null);e["default"]=_.exports;x()(_,"components",{QLayout:u["a"],QHeader:d["a"],QToolbar:f["a"],QBtn:p["a"],QToolbarTitle:m["a"],QDrawer:b["a"],QList:h["a"],QSeparator:g["a"],QPageContainer:w["a"],QFooter:k["a"]})},9928:function(t,e,a){},a8cd:function(t,e,a){},ab0d:function(t,e,a){t.exports=a.p+"img/logo.683a3423.png"},b8db:function(t,e,a){"use strict";a("a8cd")},f283:function(t,e,a){}}]);