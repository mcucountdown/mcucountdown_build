(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0e6e":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-card",{directives:[{name:"touch-hold",rawName:"v-touch-hold:100",value:e.setHoveredTouched,expression:"setHoveredTouched",arg:"100"}],staticClass:"suggestion-card width-100 cursor-pointer img-zoom hovered-touched-origin",on:{mouseenter:function(t){return e.setHoveredTouched(t)},mouseleave:function(t){return e.setHoveredTouched(t)}}},[e.piece.logo?s("img",{staticClass:"piece-logo",attrs:{src:e.piece.logo}}):e._e(),s("div",{staticClass:"over-layer"}),s("q-img",{staticClass:"height-100",attrs:{src:e.piece.suggestionImage}})],1)},a=[],n=s("ad9e"),r={name:"Suggestion",mixins:[n["a"]],props:{piece:{type:Object,required:!0}}},o=r,c=(s("3b8c"),s("2877")),l=s("f09f"),d=s("068f"),p=s("f449"),u=s("eebe"),h=s.n(u),m=Object(c["a"])(o,i,a,!1,null,"2a14e15d",null);t["default"]=m.exports;h()(m,"components",{QCard:l["a"],QImg:d["a"]}),h()(m,"directives",{TouchHold:p["a"]})},"10be":function(e,t,s){},"248a":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.loaded?e._e():s("div",{staticClass:"text-center"},[s("spinner",{staticClass:"q-mb-md",attrs:{width:"50"}})],1),e.completed?s("h1",{staticClass:"q-my-md q-mx-xl "},[e._v(e._s(e.completedLabel))]):e._e(),e.loaded&&!e.completed?s("div",{staticClass:"text-center width-100"},[s("div",{staticClass:"row text-weight-medium"},[s("div",{staticClass:"col"},[s("h1",{staticClass:"q-ma-none"},[e._v(e._s(e.displayDays))])]),s("div",{staticClass:"col"},[s("h1",{staticClass:"q-ma-none"},[e._v(e._s(e.displayHours))])]),s("div",{staticClass:"col"},[s("h1",{staticClass:"q-ma-none"},[e._v(e._s(e.displayMinutes))])]),s("div",{staticClass:"col"},[s("h1",{staticClass:"q-ma-none"},[e._v(e._s(e.displaySeconds))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h4",{staticClass:"q-ma-none"},[e._v(e._s(e.daysLabel))])]),s("div",{staticClass:"col"},[s("h4",{staticClass:"q-ma-none"},[e._v(e._s(e.hoursLabel))])]),s("div",{staticClass:"col"},[s("h4",{staticClass:"q-ma-none"},[e._v(e._s(e.minutesLabel))])]),s("div",{staticClass:"col"},[s("h4",{staticClass:"q-ma-none"},[e._v(e._s(e.secondsLabel))])])])]):e._e()])},a=[],n=s("9466"),r={name:"FullscreenTimer",mixins:[n["a"]]},o=r,c=s("2877"),l=Object(c["a"])(o,i,a,!1,null,null,null);t["default"]=l.exports},"3b8c":function(e,t,s){"use strict";s("6310")},"4b4e":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-list",{attrs:{bordered:""}},e._l(e.phasesQuantity,(function(t){return s("q-expansion-item",{key:"phase"+t,staticClass:"bg-dark",attrs:{label:"Phase "+t+" ("+e.getPhaseYears(t)+")",group:"movies","default-opened":t==e.pickedMovie.phase,"expand-separator":"",dense:""}},[s("q-card",[s("q-card-section",{staticClass:"bg-primary"},[s("q-scroll-area",{ref:"scrollarea"+t,refInFor:!0,staticStyle:{height:"27vh"}},e._l(e.movies,(function(i,a){return i.phase==t?s("div",{key:i.name},[e.showSeparator(i,a)?s("q-separator"):e._e(),s("div",{staticClass:"row q-py-xs cursor-pointer",class:{"bg-accent":i.id==e.pickedMovie.id},on:{click:function(t){return e.$router.push("/"+i.id)}}},[s("div",{staticClass:"col-7"},[e._v("\n                "+e._s(i.name)+"\n              ")]),s("div",{staticClass:"col self-center"},[s("list-timer",{attrs:{endDate:i.releaseDate}})],1)])],1):e._e()})),0)],1)],1)],1)})),1)},a=[],n=(s("c975"),s("13d5"),s("ddb0"),s("5a50")),r=s("ad9e"),o={name:"PieceMovies",mixins:[r["a"]],props:{pickedMovie:{type:Object,required:!0}},data:()=>({movies:n["h"]}),mounted(){this.scrollToSelectedMovie()},computed:{phasesQuantity(){return n["h"].reduce(((e,t)=>e.phase>t.phase?e:t)).phase}},methods:{getPhaseYears(e){let t=[],s=this;return n["h"].forEach((function(i){if(i.phase==e){let e=new Date(s.getPieceDate(i)).getFullYear();t.push(e)}})),t=Array.from(new Set(t)),1==t.length?t[0]:(t=[t[0],t[t.length-1]],`${t[0]} - ${t[1]}`)},showSeparator(e,t){return 0!=t&&!(n["h"][t-1].phase<n["h"][t].phase)},scrollToSelectedMovie(){const e=n["h"].filter((e=>e.phase==this.pickedMovie.phase)),t=e.map((e=>e.id)).indexOf(this.pickedMovie.id);this.$refs[`scrollarea${this.pickedMovie.phase}`][0].setScrollPosition(17*t)}},components:{"list-timer":s("fcbb").default}},c=o,l=s("2877"),d=s("1c1c"),p=s("3b73"),u=s("f09f"),h=s("a370"),m=s("4983"),f=s("eb85"),g=s("eebe"),v=s.n(g),C=Object(l["a"])(c,i,a,!1,null,null,null);t["default"]=C.exports;v()(C,"components",{QList:d["a"],QExpansionItem:p["a"],QCard:u["a"],QCardSection:h["a"],QScrollArea:m["a"],QSeparator:f["a"]})},"4cfd":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"width-100 text-center z-top"},[s("q-btn",{staticClass:"fullscreen-active-btn",attrs:{round:"",size:"md",icon:"fas fa-compress",color:"primary"},on:{click:function(t){return e.$q.fullscreen.exit()}}}),s("img",{staticClass:"logo",attrs:{src:e.piece.logo}}),e.piece.labelCard?s("h6",{staticClass:"q-my-none"},[e._v(e._s(e.piece.labelCard))]):e._e(),s("div",{staticClass:"row justify-center q-my-md"},[s("span",{staticClass:"line q-mt-md"}),s("h5",{staticClass:"q-my-none q-mx-md"},[e._v(e._s(e.prettyReleaseDate))]),s("span",{staticClass:"line q-mt-md"})]),s("timer",{staticClass:"q-mx-auto",staticStyle:{width:"600px"},attrs:{endDate:e.piece.releaseDate}})],1)},a=[],n=s("ad9e"),r=s("5a50"),o={name:"PieceFullscreen",mixins:[n["a"]],props:{piece:{type:Object,required:!0}},computed:{prettyReleaseDate(){if(this.isPieceDateApproximate(this.piece))return this.piece.releaseDate;let e=new Date(this.piece.releaseDate);const t=e.getDate(),s=function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},i=r["g"][e.getMonth()];let a=e.getHours(),n=e.getMinutes(),o=a>=12?"PM":"AM";return a%=12,a=a||12,n=n<10?"0"+n:n,`${t}${s(t)} ${i} ${e.getFullYear()} ${a}:${n}${o}`}},components:{timer:s("248a").default},mounted(){let e=document.getElementsByClassName("q-header")[0],t=document.getElementsByClassName("q-drawer-container")[0],s=document.getElementsByClassName("q-page-container")[0],i=document.getElementsByClassName("q-footer")[0];e.classList.add("hidden"),t.classList.add("hidden"),s.classList.add("pl-none-imp"),i.classList.add("left-0")},destroyed(){let e=document.getElementsByClassName("q-header")[0],t=document.getElementsByClassName("q-drawer-container")[0],s=document.getElementsByClassName("q-page-container")[0],i=document.getElementsByClassName("q-footer")[0];e.classList.remove("hidden"),t.classList.remove("hidden"),s.classList.remove("pl-none-imp"),i.classList.remove("left-0")}},c=o,l=(s("824e"),s("2877")),d=s("9c40"),p=s("e359"),u=s("9404"),h=s("09e3"),m=s("7ff0"),f=s("eebe"),g=s.n(f),v=Object(l["a"])(c,i,a,!1,null,"62f39cf5",null);t["default"]=v.exports;g()(v,"components",{QBtn:d["a"],QHeader:p["a"],QDrawer:u["a"],QPageContainer:h["a"],QFooter:m["a"]})},5931:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"flex flex-center q-pa-md"},[s("div",{staticClass:"bottom-shadow"},[s("img",{staticClass:"wallpaper-background",class:{"wallpaper-mobile":e.isBreakpointNotMd},attrs:{src:e.piece.wallpaper}})]),e.$q.fullscreen.isActive?s("piece-fullscreen",{attrs:{piece:e.pieceFullScreen}}):s("div",{staticClass:"q-mx-auto q-pa-md page-max-width width-100 height-100 absolute",class:{" overflow-auto":e.isBreakpointNotMd}},[s("div",{class:{"text-center":e.isBreakpointNotMd}},[s("img",{staticClass:"logo q-mb-md",attrs:{src:e.piece.logo}})]),!e.isMobile&&e.pieceFullScreen?s("q-btn",{staticClass:"fullscreen-btn",attrs:{round:"",size:"md",icon:"fullscreen",color:"primary"},on:{click:function(t){return e.$q.fullscreen.request()}}}):e._e(),e.pieceType==e.pieceTypes.SERIES?s("piece-series",{class:{"piece-table-width":!e.isBreakpointNotMd},attrs:{series:e.piece}}):e.pieceType==e.pieceTypes.MOVIES?s("piece-movies",{class:{"piece-table-width":!e.isBreakpointNotMd},attrs:{pickedMovie:e.piece}}):e._e(),s("div",{staticClass:"row width-100",class:e.isBreakpointNotMd?"q-my-md":"description"},[s("p",{staticClass:"q-ma-none"},[e._v("\n        "+e._s(e.piece.description)+"\n        "),s("span",{staticClass:"text-weight-medium cursor-pointer",on:{click:function(t){return e.$router.push(e.piece.descriptionLink)}}},[e._v(e._s(e.piece.description1))]),e._v(e._s(e.piece.description2)+"\n      ")])]),e.isBreakpointNotMd?e._e():s("div",{staticClass:"row suggestions-bar"},e._l(e.suggestions,(function(t,i){return s("div",{key:t.id,staticClass:"col-6 col-md-3"},[s("div",{staticClass:"q-ma-sm",on:{click:function(s){return e.openPiece(t.id)}}},[s("suggestion",{staticClass:"width-100 piece-shadow",attrs:{piece:t}})],1)])})),0)],1)],1)},a=[],n=(s("fb6a"),s("4e82"),s("5a50")),r=s("ad9e"),o={name:"Piece",mixins:[r["a"]],props:["pieceId"],data:()=>({pieceType:null,piece:null,pieceTypes:n["m"],suggestions:[]}),computed:{pieceFullScreen(){if(!this.isPieceDateApproximate(this.piece)&&new Date<new Date(this.piece.releaseDate))return this.piece;{var e;let t=null===(e=this.piece.episodes)||void 0===e?void 0:e.find((e=>!this.isPieceDateApproximate(e)&&new Date<new Date(e.releaseDate)));return t?(this.setLabelForMultipleEpisodesOnSameDate(this.piece,t),t.logo=this.piece.logo,t):void 0}}},watch:{pieceId:{immediate:!0,handler(e,t){this.checkPieceType(),this.isBreakpointNotMd||this.generateSuggestions()}},isBreakpointNotMd(e){!e&&this.suggestions.length>2?this.suggestions=this.suggestions.slice(0,2):e&&this.suggestions.length<=2&&this.generateSuggestions()}},methods:{checkPieceType(){let e=n["h"].find((e=>e.id==this.pieceId));if(e)return this.piece=e,void(this.pieceType=n["m"].MOVIES);let t=[].concat(n["b"],n["n"]).find((e=>e.id==this.pieceId));if(t)return this.piece=t,void(this.pieceType=n["m"].SERIES);this.$router.push({name:"404"})},generateSuggestions(){let e=[].concat(n["b"],n["n"]);e=e.filter((e=>e.id!=this.pieceId));const t=e.sort((()=>.5-Math.random())),s=this.isBreakpointNotMd?2:4;this.suggestions=t.slice(0,s)},openPiece(e){this.$router.push(`/${e}`)}},components:{"piece-series":s("a307").default,"piece-movies":s("4b4e").default,"piece-fullscreen":s("4cfd").default,suggestion:s("0e6e").default}},c=o,l=(s("8782"),s("2877")),d=s("9989"),p=s("9c40"),u=s("eebe"),h=s.n(u),m=Object(l["a"])(c,i,a,!1,null,"135a765d",null);t["default"]=m.exports;h()(m,"components",{QPage:d["a"],QBtn:p["a"]})},6310:function(e,t,s){},"824e":function(e,t,s){"use strict";s("10be")},8782:function(e,t,s){"use strict";s("edce")},a307:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-list",{attrs:{bordered:""}},e._l(e.seriesSeasonsQtty,(function(t){return s("q-expansion-item",{key:e.series.name+"season"+t,staticClass:"bg-dark",class:{"hide-expansion-toggle":1==e.seriesSeasonsQtty},attrs:{label:e.getExpansionItemLabel(t),group:e.series.name,"default-opened":e.isDefaultOpened(t),"expand-icon-toggle":1==e.seriesSeasonsQtty,"expand-separator":"",dense:""}},[s("q-card",[s("q-card-section",{staticClass:"bg-primary"},[s("q-scroll-area",{ref:"scrollarea"+t,refInFor:!0,style:1==e.seriesSeasonsQtty?"height:35vh":"height:27vh"},e._l(e.series.episodes,(function(i,a){return i.season==t?s("div",{key:a},[1!=i.number?s("q-separator"):e._e(),s("div",{staticClass:"row q-py-xs"},[s("div",{staticClass:"col-6"},[s("span",[e._v(e._s(i.number)+". "+e._s(i.labelList)+"\n                  "),e.isTagVisible(i.tag)?s("span",{staticClass:"text-caption text-weight-thin"},[e._v("("+e._s(i.tag.TEXT)+")")]):e._e()])]),s("div",{staticClass:"col-4 self-center"},[s("list-timer",{attrs:{endDate:i.releaseDate}})],1),s("div",{staticClass:"col text-right self-center"},[i.disneyPlusLink?s("q-btn",{staticClass:"q-mr-md",attrs:{round:"",dense:"",color:"primary",size:"xs",icon:"fas fa-external-link-alt"},on:{click:function(t){return e.openLink(i.disneyPlusLink)}}},[s("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle",delay:700}},[e._v("\n                    Watch on Disney+\n                  ")])],1):e._e()],1)])],1):e._e()})),0)],1)],1)],1)})),1)},a=[],n=(s("ddb0"),s("5a50")),r=s("ad9e"),o={name:"PieceSeries",mixins:[r["a"]],props:{series:{type:Object,required:!0}},mounted(){this.scrollToMostRecentEpisode()},watch:{"series.id"(){this.scrollToMostRecentEpisode()}},computed:{seriesSeasonsQtty(){let e=[];return this.series.episodes.forEach((t=>e.push(t.season))),e=Array.from(new Set(e)),e.length}},methods:{getSeriesYears(e,t){let s=[],i=this;return e.episodes.forEach((function(e){if(e.season==t){let t=new Date(i.getPieceDate(e)).getFullYear();s.push(t)}})),s=s.filter((e=>!isNaN(e))),s=Array.from(new Set(s)),1==s.length?s[0]:(s=[s[0],s[s.length-1]],`${s[0]} - ${s[1]}`)},isDefaultOpened(e){var t;let s=null===(t=this.series.episodes.find((e=>new Date(this.getPieceDate(e))>new Date)))||void 0===t?void 0:t.season;return s?e==s:e==this.seriesSeasonsQtty},scrollToMostRecentEpisode(){const e=this.series.episodes.filter((e=>e.season==this.seriesSeasonsQtty));let t=e.findIndex((e=>new Date(this.getPieceDate(e))>new Date));t=t||0,this.$refs[`scrollarea${this.seriesSeasonsQtty}`][0].setScrollPosition(17*t)},isTagVisible(e){return(null===e||void 0===e?void 0:e.TEXT)==n["o"].UNCONFIRMED.TEXT},getExpansionItemLabel(e){var t;let s="";return s+=`Season ${e} (${this.getSeriesYears(this.series,e)})`,(null===(t=this.series.phases)||void 0===t?void 0:t.length)>0&&(s+=` - Phase ${this.series.phases[e]}`),s},openLink(e){window.open(e,"_blank")}},components:{"list-timer":s("fcbb").default}},c=o,l=s("2877"),d=s("1c1c"),p=s("3b73"),u=s("f09f"),h=s("a370"),m=s("4983"),f=s("eb85"),g=s("9c40"),v=s("05c0"),C=s("eebe"),b=s.n(C),y=Object(l["a"])(c,i,a,!1,null,null,null);t["default"]=y.exports;b()(y,"components",{QList:d["a"],QExpansionItem:p["a"],QCard:u["a"],QCardSection:h["a"],QScrollArea:m["a"],QSeparator:f["a"],QBtn:g["a"],QTooltip:v["a"]})},edce:function(e,t,s){}}]);