(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"04b7":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"flex flex-center q-pa-md"},[e.showFeatured?i("piece-slider",{staticClass:"piece-shadow gt-sm",attrs:{pieces:e.featured},on:{slideClicked:e.openPiece}}):e._e(),e.showFeatured?i("q-separator",{staticClass:"q-mt-md q-mb-xs gt-sm"}):e._e(),i("div",{staticClass:"row width-100 text-center"},e._l(e.pieces,(function(t,s){return i("div",{key:""+t.releaseDate+s,staticClass:"col-12 col-sm-6 col-md-3"},[i("div",{staticClass:"q-ma-sm",on:{click:function(s){return e.openPiece(t.id)}}},[i("piece-card",{staticClass:"width-100 piece-shadow",attrs:{piece:t}})],1)])})),0),e.viewMoreBtnVisibility?i("q-btn",{staticClass:"q-mt-md",staticStyle:{width:"150px"},attrs:{unelevated:"",rounded:"",color:"secondary",label:"View more"},on:{click:function(t){return e.viewMoreCards()}}}):e._e(),e.pieces&&0!=e.pieces.length?e._e():i("div",{staticStyle:{display:"contents"}},[i("h3",[e._v("\n      No results to show...\n    ")])]),i("q-separator",{staticClass:"q-my-md"}),i("div",{staticClass:"text-center cursor-pointer",on:{click:function(t){return e.$router.push("/calendar")}}},[i("h5",{staticClass:"q-mt-none q-mb-sm"},[e._v("\n      Check all MCU release dates 📅\n    ")]),i("img",{staticClass:"q-my-sm rounded-borders",style:"max-width:"+(e.isBreakpointNotMd?"350":"500")+"px",attrs:{src:s("4979")}})])],1)},a=[],o=(s("fb6a"),s("4e82"),s("498a"),s("5a50")),n=s("ad9e"),r={name:"Home",mixins:[n["a"]],props:["searchExpression"],data:()=>({viewMoreBtnVisibility:!0,cardQuantity:0,featured:[]}),created(){this.cardQuantity=this.isBreakpointNotMd?6:8},computed:{pieces(){let e=this.getPieces(o["f"],o["r"].SERIES),t=this.getPieces(o["m"],o["r"].MOVIES),s=this.getPieces(o["a"],o["r"].COMICS),i=[].concat(e,t,s);i=i.filter((e=>this.isSearchVisible(e,this.searchExpression))),i.sort(((e,t)=>new Date(this.getPieceDate(e))-new Date(this.getPieceDate(t)))),0==this.featured.length&&(this.featured=JSON.parse(JSON.stringify(i.filter((e=>e.feature))))),i.forEach((e=>{const t=new Image;t.src=e.cardImage}));const a=i.length;return i=i.slice(0,this.cardQuantity),this.viewMoreBtnVisibility=i.length!=a,i},showFeatured(){return!this.searchExpression||!this.searchExpression.trim()}},methods:{openPiece(e){this.$router.push(`/${e}`)},getPieces(e,t){let s=[];if(t==o["r"].SERIES){let t=this;return e.forEach((function(e){s=s.concat(t.getSeriesPieces(e))})),s}return t==o["r"].MOVIES?this.getMoviesPieces(e):t==o["r"].COMICS?(e.forEach((e=>{s=s.concat(this.getComicsPieces(e))})),s):void 0},getSeriesPieces(e){let t=[];for(let s=0;s<e.episodes.length;s++){let i=e.episodes[s];this.setLabelForMultipleEpisodesOnSameDate(e,i);let a=t.some((e=>this.getPieceDate(e)==this.getPieceDate(i)));if(a)continue;const n=this.getElapsedDays(this.getPieceDate(i));if(i.name=e.name,i.videoLink=e.videoLink,i.featuredImage=e.featuredImage,i.cardImage=e.cardImage,i.logo=e.logo,i.id=e.id,1==i.number&&n<=o["g"].FEATURED_AFTER_PREMIERE&&n>=-o["g"].FEATURED_BEFORE_PREMIERE&&!this.isPieceDateApproximate(i)){if(i.feature=!0,t.push(i),n<0)return t}else if(this.isEpLastOfSeason(e,i))n<=o["g"].FEATURED_AFTER_FINALE&&n>=-o["g"].FEATURED_BEFORE_FINALE&&!this.isPieceDateApproximate(i)?(i.feature=!0,t.push(i)):n<=o["g"].CARD_AFTER_FINALE&&t.push(i);else if(n<=o["g"].CARD_AFTER_RELEASE&&(t.push(i),n<0))return t}return t},getMoviesPieces(e){let t=[];for(let s=0;s<e.length;s++){let i=e[s];const a=this.getElapsedDays(this.getPieceDate(i));a<=o["n"].FEATURED_AFTER_RELEASE&&a>=-o["n"].FEATURED_BEFORE_RELEASE&&!this.isPieceDateApproximate(i)?(i.feature=!0,t.push(i)):a<=o["n"].CARD_AFTER_RELEASE&&t.push(i)}return t},getComicsPieces(e){let t=[];for(let s=0;s<e.issues.length;s++){let i=e.issues[s];const a=this.getElapsedDays(this.getPieceDate(i));if(a<=o["d"].CARD_AFTER_RELEASE)return i.name=e.name,i.cardImage=o["c"].cardImage,i.id=o["c"].id,t.push(i),t}return t},getElapsedDays(e){const t=864e5;let s=new Date(e);return(new Date-s)/t},viewMoreCards(){this.cardQuantity+=4},isEpLastOfSeason(e,t){const s=e.episodes.filter((e=>e.season===t.season)).length;return t.number==s}},components:{"piece-slider":s("c4d8").default,"piece-card":s("0787").default,"daily-video":s("73e9").default}},c=r,l=s("2877"),d=s("9989"),u=s("eb85"),h=s("9c40"),m=s("eebe"),p=s.n(m),f=Object(l["a"])(c,i,a,!1,null,null,null);t["default"]=f.exports;p()(f,"components",{QPage:d["a"],QSeparator:u["a"],QBtn:h["a"]})},"26e7":function(e,t,s){"use strict";s("31ec")},"31ec":function(e,t,s){},4979:function(e,t,s){e.exports=s.p+"img/calendar.ab732578.jpg"},"57f4":function(e,t,s){"use strict";s("93d2")},"73e9":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center"},[s("h5",{staticClass:"q-mt-none q-mb-sm text-uppercase"},[e._v("Video of the day")]),s("iframe",{key:"dailyIframe"+e.componentsKey,staticClass:"rounded-borders",class:{"iframe-dimensions":!e.isBreakpointNotMd},attrs:{src:e.videoSource}}),s("p",{staticClass:"q-mt-sm"},[e._v("\n    Tomorrow's video will be available in\n    "),s("timer",{key:"dailyTimer"+e.componentsKey,attrs:{endDate:e.nextMidnight},on:{completed:function(t){e.componentsKey++}}})],1)])},a=[],o=s("5a50"),n=s("ad9e"),r={name:"DailyVideo",mixins:[n["a"]],data:()=>({componentsKey:0,nextMidnight:"",videoSource:""}),watch:{componentsKey:{immediate:!0,handler(){this.nextMidnight=this.getNextMidnight(),this.videoSource=this.getVideoSource()}}},methods:{getNextMidnight(){let e=new Date;return e.setHours(24,0,0,0),e.toISOString().substring(0,10)},getVideoSource(){let e=(new Date).toISOString().substring(0,10),t=o["e"][e]||o["e"].default;return`https://www.youtube.com/embed/${t}`}},components:{timer:s("fcbb").default}},c=r,l=(s("57f4"),s("2877")),d=Object(l["a"])(c,i,a,!1,null,"2fb29176",null);t["default"]=d.exports},"93d2":function(e,t,s){},c4d8:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"width-100 piece-carousel no-text-select"},[s("q-carousel",{staticClass:"piece-carousel carousel-navigation-right",attrs:{animated:"",navigation:"",infinite:"","keep-alive":"",autoplay:e.autoplay,"transition-prev":e.isMobile?"slide-down":"slide-right","transition-next":e.isMobile?"slide-up":"slide-left","navigation-position":e.isMobile?"right":"bottom"},on:{mouseenter:function(t){return e.setAutoplay(!1)},mouseleave:function(t){return e.setAutoplay(e.delay)},touchstart:function(t){return e.setAutoplay(!1)},touchend:function(t){return e.setAutoplay(e.delay)}},scopedSlots:e._u([{key:"navigation-icon",fn:function(t){var i=t.active,a=t.btnProps,o=t.onClick;return[s("q-btn",{attrs:{size:"xs",icon:a.icon,color:i?"white":"grey-7",flat:"",round:"",dense:""},on:{click:function(t){o(),e.onNavigationClick()}}})]}}]),model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},e._l(e.pieces,(function(t,i){return s("q-carousel-slide",{key:i,staticClass:"q-pa-none overflow-hidden cursor-pointer",attrs:{name:i,"img-src":t.featuredImage},on:{click:function(s){return e.onSlideClicked(t)}},scopedSlots:e._u([{key:"default",fn:function(){return[s("div",{staticClass:"relative-position"},[s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showVideo,expression:"showVideo"}]},[s("div",{staticClass:"video-filter"}),e.loadVideo?s("iframe",{attrs:{src:t.videoLink}}):e._e()])])],1),s("transition",{attrs:{name:"fade"}},[t.tag?s("div",{directives:[{name:"show",rawName:"v-show",value:!e.showVideo,expression:"!showVideo"}],staticClass:"piece-tag",style:"background:"+t.tag.COLOR},[s("h5",{staticClass:"q-ma-none"},[e._v(e._s(t.tag.TEXT))])]):e._e()]),t.logo?s("img",{staticClass:"piece-logo",class:{"piece-logo-mobile":e.isBreakpointNotMd},attrs:{src:t.logo}}):e._e(),s("mobile-timer",{staticClass:"timer lt-md",staticStyle:{width:"200px"},attrs:{endDate:t.releaseDate}}),s("timer",{staticClass:"timer gt-sm",attrs:{endDate:t.releaseDate}})]},proxy:!0}],null,!0)})})),1)],1)},a=[],o=s("5a50"),n=s("ad9e"),r={name:"PieceSlider",mixins:[n["a"]],props:{pieces:{type:Array,required:!0}},data:()=>({slide:0,autoplay:!0,delay:o["h"].SLIDER.DELAY_TIME,showVideo:!1,loadVideo:!1,videoLoadTimer:null,videoReproducingTimer:null}),created(){this.autoplay=this.delay},watch:{pieces(e){e.forEach((e=>{const t=new Image;t.src=e.featuredImage;const s=new Image;s.src=e.logo}))},autoplay(e){this.checkVideoLoad(!Boolean(e))},showVideo(e){if(e){let e=this;this.videoReproducingTimer=setTimeout((function(){e.showVideo=!1}),o["h"].SLIDER.VIDEO_REPRODUCTION_TIME)}else clearInterval(this.videoReproducingTimer)}},methods:{onNavigationClick(){this.isMobile?this.setAutoplay(this.delay):(clearInterval(this.videoReproducingTimer),this.checkVideoLoad(!1),this.checkVideoLoad(!0))},checkVideoLoad(e){if(e&&!this.isMobile&&this.pieces[this.slide].videoLink){this.loadVideo=!0;let e=this;this.videoLoadTimer=setTimeout((function(){e.showVideo=!0}),o["h"].SLIDER.VIDEO_LOAD_TIME)}else clearInterval(this.videoLoadTimer),this.showVideo=!1,this.loadVideo=!1},onSlideClicked(e){this.$emit("slideClicked",e.id)},setAutoplay(e){this.autoplay=e}},components:{timer:s("e9ba").default,"mobile-timer":s("f452").default}},c=r,l=(s("26e7"),s("2877")),d=s("880c"),u=s("9c40"),h=s("62cd"),m=s("eebe"),p=s.n(m),f=Object(l["a"])(c,i,a,!1,null,"1d1192b6",null);t["default"]=f.exports;p()(f,"components",{QCarousel:d["a"],QBtn:u["a"],QCarouselSlide:h["a"]})},f452:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.loaded?e._e():s("div",{staticClass:"text-center"},[s("spinner",{attrs:{width:"40"}})],1),e.completed?s("div",[s("h4",{staticClass:"q-my-sm q-ml-lg"},[e._v(e._s(e.completedLabel))])]):e._e(),e.loaded&&!e.completed?s("div",{staticClass:"text-center",staticStyle:{width:"200px"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h5",{staticClass:"q-ma-none"},[e._v(e._s(e.displayDays))])]),s("div",{staticClass:"col"},[s("h5",{staticClass:"q-ma-none"},[e._v(e._s(e.displayHours))])]),s("div",{staticClass:"col"},[s("h5",{staticClass:"q-ma-none"},[e._v(e._s(e.displayMinutes))])]),s("div",{staticClass:"col"},[s("h5",{staticClass:"q-ma-none"},[e._v(e._s(e.displaySeconds))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("p",{staticClass:"q-ma-none"},[e._v(e._s(e.daysLabel))])]),s("div",{staticClass:"col"},[s("p",{staticClass:"q-ma-none"},[e._v(e._s(e.hoursLabel))])]),s("div",{staticClass:"col"},[s("p",{staticClass:"q-ma-none"},[e._v(e._s(e.minutesLabel))])]),s("div",{staticClass:"col"},[s("p",{staticClass:"q-ma-none"},[e._v(e._s(e.secondsLabel))])])])]):e._e()])},a=[],o=s("9466"),n={name:"SliderMobileTimer",mixins:[o["a"]]},r=n,c=s("2877"),l=Object(c["a"])(r,i,a,!1,null,null,null);t["default"]=l.exports}}]);