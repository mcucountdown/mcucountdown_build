(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0547":function(e,t,a){"use strict";a("c63b")},3034:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"attr-card",attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"q-pa-none"},[a("q-img",{attrs:{src:e.attr.customData.menuImage}}),a("div",{staticClass:"text-center"},[a("p",{staticClass:"text-body2",class:[e.attr.customData.subTitle?"q-mb-none":"q-my-xs"]},[e._v("\n        "+e._s(e.attr.customData.title)+"\n      ")]),a("p",{staticClass:"q-mb-xs"},[e._v(e._s(e.attr.customData.subTitle))]),a("q-btn",{attrs:{flat:"",round:"",size:"xs",color:"white",icon:"fas fa-list"},on:{click:e.openPiecePage}}),a("timer",{staticClass:"q-my-xs",staticStyle:{height:"20px"},attrs:{endDate:e.attr.customData.releaseDate}})],1)],1)],1)},i=[],r={name:"ShortAttrPreviewCalendar",props:{attr:{type:Object,required:!0}},mounted(){const e=new Image;e.src=this.attr.customData.menuImage},methods:{openPiecePage(){this.$router.push(`/${this.attr.customData.id}`)}},components:{timer:a("fcbb").default}},n=r,c=(a("b621"),a("2877")),o=a("f09f"),l=a("a370"),d=a("068f"),u=a("9c40"),m=a("b498"),f=a("eebe"),p=a.n(f),h=Object(c["a"])(n,s,i,!1,null,"2c6fa91a",null);t["default"]=h.exports;p()(h,"components",{QCard:o["a"],QCardSection:l["a"],QImg:d["a"],QBtn:u["a"],QColor:m["a"]})},"3a50":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-select",{style:"width:"+(e.isBreakpointNotMd?100:200)+"px",attrs:{id:"search-input-calendar",options:e.filteredOptions,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"400",color:"white",spellcheck:"false",dark:"",clearable:""},on:{filter:e.filterFn,input:e.handleInput},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"search",color:"white"}})]},proxy:!0},{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey"},[e._v("\n        No results\n      ")])],1)]},proxy:!0}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},i=[],r=(a("4e82"),a("ad9e")),n={name:"SearchInputSuggestions",mixins:[r["a"]],props:["value","options"],data:()=>({selected:null,filteredOptions:[]}),methods:{handleInput(){this.$emit("input",this.selected),this.selected&&setTimeout((()=>{document.getElementById("search-input-calendar").getElementsByTagName("input")[0].blur()}),100)},filterFn(e,t,a){e.length<2?a():t((()=>{const t=e.toLowerCase();let a=[];this.options.forEach((e=>{this.isSearchVisible(e,t)&&a.push(e)})),a.sort((function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())})),this.filteredOptions=a}))}}},c=n,o=(a("0547"),a("2877")),l=a("ddd8"),d=a("0016"),u=a("66e5"),m=a("4074"),f=a("8572"),p=a("eebe"),h=a.n(p),b=Object(o["a"])(c,s,i,!1,null,"9d81cbfa",null);t["default"]=b.exports;h()(b,"components",{QSelect:l["a"],QIcon:d["a"],QItem:u["a"],QItemSection:m["a"],QField:f["a"]})},"4e51":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-calendar",{ref:"calendar",staticClass:"wide-calendar",attrs:{masks:e.masks,locale:"en",color:"red",attributes:e.calendarAttributes,"disable-page-swipe":"","is-expanded":"","is-dark":""},scopedSlots:e._u([{key:"day-content",fn:function(t){var s=t.day,i=t.attributes;return[a("div",{staticClass:"width-100 height-100"},[a("span",{staticClass:"day-label z-top absolute",class:{hidden:i&&i.length>0}},[e._v("\n          "+e._s(s.day)+"\n        ")]),a("div",{staticClass:"row height-100"},e._l(i,(function(t){return a("div",{staticClass:"img-col col overflow-hidden cursor-pointer height-100"},[a("q-img",{staticClass:"img-zoom-plus hovered-touched-origin",attrs:{src:t.customData.calendarImage},on:{mouseenter:function(t){return e.setHoveredTouched(t)},mouseleave:function(t){return e.setHoveredTouched(t)}}}),a("attr-preview",{attrs:{attr:t}})],1)})),0)])]}}])})],1)},i=[],r=a("ebbf"),n=a("ad9e"),c={name:"WideCalendar",mixins:[r["a"],n["a"]],data:()=>({masks:{weekdays:"WWW"}}),methods:{getAttr(e){let t={title:e.title,subTitle:e.subTitle,calendarImage:e.featuredImage||e.wallpaper,menuImage:e.cardImage||e.wallpaper,releaseDate:e.releaseDate,id:e.id},a={key:e.key,dates:new Date(e.releaseDate),highlight:{color:e.color,fillMode:"solid"},customData:t};return a}},components:{"attr-preview":a("f419").default}},o=c,l=a("2877"),d=a("068f"),u=a("eebe"),m=a.n(u),f=Object(l["a"])(o,s,i,!1,null,null,null);t["default"]=f.exports;m()(f,"components",{QImg:d["a"]})},"6cd5":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-mb-sm width-100 justify-between",staticStyle:{display:"flex",height:"56px"}},[a("h3",{staticClass:"q-mt-none q-mb-md cursor-pointer",on:{click:function(t){return e.moveCalendarToDate()}}},[e._v("\n      Calendar\n    ")]),a("search-input",{attrs:{options:e.confirmedDatePieceOptions},model:{value:e.searchSelection,callback:function(t){e.searchSelection=t},expression:"searchSelection"}})],1),e.isBreakpointNotMd&&e.isMobile?a("short-calendar",{ref:"calendarComp",on:{unconfirmedPiecesRetrieved:e.setUnconfirmedPieces}}):a("wide-calendar",{ref:"calendarComp",on:{unconfirmedPiecesRetrieved:e.setUnconfirmedPieces}}),a("h5",{staticClass:"q-mt-lg q-mb-none"},[e._v("\n    Unconfirmed dates\n  ")]),a("div",{staticClass:"row width-100 text-center"},e._l(e.unconfirmedDatePieces,(function(t,s){return a("div",{key:"calendar-unconfirmed-"+t.id,staticClass:"col-12 col-sm-6 col-md-3"},[a("div",{staticClass:"q-ma-sm",on:{click:function(a){return e.openPiecePage(t.id)}}},[a("piece-card",{staticClass:"width-100 piece-shadow",attrs:{piece:t}})],1)])})),0)],1)},i=[],r=(a("e6cf"),a("ad9e")),n=a("5a50"),c={name:"Calendar",mixins:[r["a"]],data:()=>({unconfirmedDatePieces:[],searchSelection:null}),computed:{confirmedDatePieceOptions(){let e=[].concat(n["i"],n["b"]);return e=e.filter((e=>!this.isPieceDateApproximate(e))),e.forEach((e=>{e.value=e.id,e.label=e.name})),e}},watch:{searchSelection(e){if(!e)return;if(!e.episodes)return void this.moveCalendarToDate(e.releaseDate);let t=e.episodes.find((e=>new Date(e.releaseDate)>new Date)).releaseDate;t?this.moveCalendarToDate(t):this.moveCalendarToDate(e.releaseDate)}},methods:{async moveCalendarToDate(e){let t;t=e?new Date(e):new Date;const a=this.$refs.calendarComp.$refs.calendar;await a.move(t)},setUnconfirmedPieces(e){this.unconfirmedDatePieces=e},openPiecePage(e){this.$router.push(`/${e}`)}},components:{"short-calendar":a("8ed4").default,"wide-calendar":a("4e51").default,"piece-card":a("0787").default,"search-input":a("3a50").default}},o=c,l=a("2877"),d=a("9989"),u=a("eebe"),m=a.n(u),f=Object(l["a"])(o,s,i,!1,null,null,null);t["default"]=f.exports;m()(f,"components",{QPage:d["a"]})},"6f06":function(e,t,a){},"8ed4":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-calendar",{ref:"calendar",staticClass:"short-calendar",attrs:{locale:"en",color:"red",attributes:e.calendarAttributes,"disable-page-swipe":"","is-expanded":"","is-dark":""},scopedSlots:e._u([{key:"day-popover",fn:function(t){var s=t.attributes;return e._l(s,(function(e){return a("attr-preview",{key:e.key,attrs:{attr:e}})}))}}])})},i=[],r=a("ebbf"),n={name:"ShortCalendar",mixins:[r["a"]],methods:{getAttr(e){let t={title:e.title,subTitle:e.subTitle,menuImage:e.cardImage||e.wallpaper,releaseDate:e.releaseDate,id:e.id},a={key:e.key,dates:new Date(e.releaseDate),highlight:{color:e.color,fillMode:"solid"},popover:!0,customData:t};return a}},components:{"attr-preview":a("3034").default}},c=n,o=a("2877"),l=Object(o["a"])(c,s,i,!1,null,null,null);t["default"]=l.exports},b621:function(e,t,a){"use strict";a("6f06")},b780:function(e,t,a){},c63b:function(e,t,a){},ebbf:function(e,t,a){"use strict";a("fb6a"),a("4e82");var s=a("86e3"),i=a.n(s),r=a("5a50"),n=a("ad9e");t["a"]={mixins:[n["a"]],data:()=>({calendarAttributes:[],unconfirmedDatePieces:[]}),created(){this.getCalendarAttributes(),this.getUnconfirmedDatePieces()},methods:{getCalendarAttributes(){this.getAttrs(r["i"],r["n"].MOVIES),this.getAttrs(r["b"],r["n"].SERIES)},getAttrs(e,t){t==r["n"].SERIES&&e.forEach((e=>{this.getSeriesAttrs(e)})),t==r["n"].MOVIES&&this.getMoviesAttrs(e)},getSeriesAttrs(e){e.episodes.forEach((t=>{if(this.isPieceDateApproximate(t))this.unconfirmedDatePieces.some((t=>t.id==e.id))||this.unconfirmedDatePieces.push(e);else{const a=this.calendarAttributes.some((a=>a.customData.releaseDate==t.releaseDate&&a.customData.id==e.id));if(!a){t.key=`${e.id}_${t.season}_${t.number}`,t.id=e.id,t.wallpaper=e.wallpaper,t.featuredImage=e.featuredImage,t.cardImage=e.cardImage,t.color=e.color,t.title=e.name,t.subTitle=this.getSeriesSubTitle(e,t);let a=this.getAttr(t);this.calendarAttributes.push(a)}}}))},getMoviesAttrs(e){e.forEach((e=>{if(this.isPieceDateApproximate(e))this.unconfirmedDatePieces.push(e);else{e.key=e.id,e.title=e.name;let t=this.getAttr(e);this.calendarAttributes.push(t)}}))},getSeriesSubTitle(e,t){let a;if(e.episodes.some((e=>e.releaseDate==t.releaseDate&&e.key!=t.key))){let s=e.episodes.filter((e=>e.releaseDate==t.releaseDate));a="Ep. ",s.forEach((e=>a+=`${e.number}, `)),a=a.slice(0,-2)}return a||t.labelCard},getUnconfirmedDatePieces(){this.unconfirmedDatePieces.sort(((e,t)=>new Date(this.getPieceDate(e))-new Date(this.getPieceDate(t)))),this.$emit("unconfirmedPiecesRetrieved",this.unconfirmedDatePieces)}},components:{"v-calendar":i.a}}},efd6:function(e,t,a){"use strict";a("b780")},f419:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-menu",{attrs:{anchor:"center end",self:"center start","transition-show":"jump-up","transition-hide":"jump-down"}},[a("q-card",{staticClass:"attr-card",attrs:{flat:"",bordered:""}},[a("q-card-section",{attrs:{horizontal:""}},[a("q-img",{staticClass:"col",attrs:{src:e.attr.customData.menuImage}}),a("div",{staticClass:"absolute-bottom text-center img-overlay"},[a("p",{class:[e.attr.customData.title.length<30?"text-body1":"text-body2",e.attr.customData.subTitle?"q-mb-none":"q-mt-sm"]},[e._v("\n          "+e._s(e.attr.customData.title)+"\n        ")]),a("p",{staticClass:"q-mb-xs",class:{"text-small":e.attr.customData.subTitle.length>45}},[e._v("\n          "+e._s(e.attr.customData.subTitle)+"\n        ")])]),a("q-card-actions",{staticClass:"justify-around q-px-md",attrs:{vertical:""}},[a("q-btn",{attrs:{flat:"",round:"",color:"white",icon:"fas fa-list"},on:{click:e.openPiecePage}}),a("timer",{staticClass:"q-mt-lg",staticStyle:{width:"60px"},attrs:{endDate:e.attr.customData.releaseDate}})],1)],1)],1)],1)},i=[],r={name:"WideAttrPreviewCalendar",props:{attr:{type:Object,required:!0}},mounted(){const e=new Image;e.src=this.attr.customData.menuImage},methods:{openPiecePage(){this.$router.push(`/${this.attr.customData.id}`)}},components:{timer:a("fcbb").default}},n=r,c=(a("efd6"),a("2877")),o=a("4e73"),l=a("f09f"),d=a("a370"),u=a("068f"),m=a("4b7e"),f=a("9c40"),p=a("b498"),h=a("eebe"),b=a.n(h),g=Object(c["a"])(n,s,i,!1,null,"0bc8bb88",null);t["default"]=g.exports;b()(g,"components",{QMenu:o["a"],QCard:l["a"],QCardSection:d["a"],QImg:u["a"],QCardActions:m["a"],QBtn:f["a"],QColor:p["a"]})}}]);