(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"04b7":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"flex flex-center q-pa-md"},[e.showFeatured?i("piece-slider",{staticClass:"piece-shadow",attrs:{pieces:e.featured},on:{slideClicked:e.openPiece}}):e._e(),e.showFeatured?i("q-separator",{staticClass:"q-mt-md q-mb-xs"}):e._e(),i("div",{staticClass:"row width-100 text-center"},e._l(e.pieces,(function(t,s){return i("div",{key:""+t.releaseDate+s,staticClass:"col-12 col-sm-6 col-md-3"},[i("div",{staticClass:"q-ma-sm",on:{click:function(i){return e.openPiece(t.id)}}},[i("piece-card",{staticClass:"width-100 piece-shadow",attrs:{piece:t}})],1)])})),0),e.viewMoreBtnVisibility?i("q-btn",{staticClass:"q-mt-md",staticStyle:{width:"150px"},attrs:{unelevated:"",rounded:"",color:"secondary",label:"View more"},on:{click:function(t){return e.viewMoreCards()}}}):e._e(),e.pieces&&0!=e.pieces.length?e._e():i("div",{staticStyle:{display:"contents"}},[i("h3",[e._v("\n      No results to show...\n    ")])]),i("q-separator",{staticClass:"q-my-md"}),i("daily-video")],1)},a=[],o=(i("fb6a"),i("4e82"),i("498a"),i("5a50")),n=i("ad9e"),r={name:"Home",mixins:[n["a"]],props:["searchExpression"],data:()=>({viewMoreBtnVisibility:!0,cardQuantity:0,featured:[]}),created(){this.cardQuantity=this.isBreakpointNotMd?6:8},computed:{pieces(){let e=this.getPieces(o["b"],o["m"].SERIES),t=this.getPieces(o["h"],o["m"].MOVIES),i=this.getPieces(o["n"],o["m"].SERIES),s=[].concat(e,t,i);s=s.filter((e=>this.isSearchVisible(e,this.searchExpression))),s.sort(((e,t)=>new Date(this.getPieceDate(e))-new Date(this.getPieceDate(t)))),0==this.featured.length&&(this.featured=JSON.parse(JSON.stringify(s.filter((e=>e.feature)))));let a=s.length;return s=s.slice(0,this.cardQuantity),s.length==a&&(this.viewMoreBtnVisibility=!1),s},showFeatured(){return!this.searchExpression||!this.searchExpression.trim()}},methods:{openPiece(e){this.$router.push(`/${e}`)},getPieces(e,t){let i=[];if(t==o["m"].SERIES){let t=this;return e.forEach((function(e){i=i.concat(t.getSeriesPieces(e))})),i}if(t==o["m"].MOVIES)return this.getMoviesPieces(e)},getSeriesPieces(e){if(e.homeIgnore)return[];let t=[];for(let i=0;i<e.episodes.length;i++){let s=e.episodes[i];const a=this.getElapsedDays(this.getPieceDate(s));if(s.name=e.name,s.videoLink=e.videoLink,s.featuredImage=e.featuredImage,s.cardImage=e.cardImage,s.logo=e.logo,s.id=e.id,1==s.number&&a<=o["c"].FEATURED_AFTER_PREMIERE&&a>=-o["c"].FEATURED_BEFORE_PREMIERE&&!this.isPieceDateApproximate(s)){if(s.feature=!0,t.push(s),a<0)return t}else if(this.isEpLastOfSeason(e,s))a<=o["c"].FEATURED_AFTER_FINALE&&a>=-o["c"].FEATURED_BEFORE_FINALE&&!this.isPieceDateApproximate(s)?(s.feature=!0,t.push(s)):a<=o["c"].CARD_AFTER_FINALE&&t.push(s);else if(a<=o["c"].CARD_AFTER_RELEASE&&(t.push(s),a<0))return t}return t},getMoviesPieces(e){let t=[];for(let i=0;i<e.length;i++){let s=e[i];if(s.homeIgnore)continue;const a=this.getElapsedDays(this.getPieceDate(s));a<=o["i"].FEATURED_AFTER_RELEASE&&a>=-o["i"].FEATURED_BEFORE_RELEASE&&!this.isPieceDateApproximate(s)?(s.feature=!0,t.push(s)):a<=o["i"].CARD_AFTER_RELEASE&&t.push(s)}return t},getElapsedDays(e){const t=864e5;let i=new Date(e);return(new Date-i)/t},viewMoreCards(){this.cardQuantity+=4},isEpLastOfSeason(e,t){const i=e.episodes.filter((e=>e.season===t.season)).length;return t.number==i}},components:{"piece-slider":i("c4d8").default,"piece-card":i("0787").default,"daily-video":i("73e9").default}},c=r,l=i("2877"),d=i("9989"),u=i("eb85"),h=i("9c40"),p=i("eebe"),m=i.n(p),f=Object(l["a"])(c,s,a,!1,null,null,null);t["default"]=f.exports;m()(f,"components",{QPage:d["a"],QSeparator:u["a"],QBtn:h["a"]})},1936:function(e,t,i){"use strict";i("9b4d")},"57f4":function(e,t,i){"use strict";i("93d2")},"73e9":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"text-center"},[i("h5",{staticClass:"q-mt-none q-mb-sm text-uppercase"},[e._v("Video of the day")]),i("iframe",{key:"dailyIframe"+e.componentsKey,staticClass:"rounded-borders",class:{"iframe-dimensions":!e.isBreakpointNotMd},attrs:{src:e.videoSource}}),i("p",{staticClass:"q-mt-sm"},[e._v("\n    Tomorrow's video will be available in\n    "),i("timer",{key:"dailyTimer"+e.componentsKey,attrs:{endDate:e.nextMidnight},on:{completed:function(t){e.componentsKey++}}})],1)])},a=[],o=i("5a50"),n=i("ad9e"),r={name:"DailyVideo",mixins:[n["a"]],data:()=>({componentsKey:0,nextMidnight:"",videoSource:""}),watch:{componentsKey:{immediate:!0,handler(){this.nextMidnight=this.getNextMidnight(),this.videoSource=this.getVideoSource()}}},methods:{getNextMidnight(){let e=new Date;return e.setHours(24,0,0,0),e.toISOString().substring(0,10)},getVideoSource(){let e=(new Date).toISOString().substring(0,10),t=o["a"][e]||o["a"].default;return`https://www.youtube.com/embed/${t}`}},components:{timer:i("fcbb").default}},c=r,l=(i("57f4"),i("2877")),d=Object(l["a"])(c,s,a,!1,null,"2fb29176",null);t["default"]=d.exports},"93d2":function(e,t,i){},"9b4d":function(e,t,i){},c4d8:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"width-100 piece-carousel no-text-select"},[i("q-carousel",{staticClass:"piece-carousel carousel-navigation-right",attrs:{animated:"",navigation:"",infinite:"","keep-alive":"",autoplay:e.autoplay,"transition-prev":e.isMobile?"slide-down":"slide-right","transition-next":e.isMobile?"slide-up":"slide-left","navigation-position":e.isMobile?"right":"bottom"},on:{mouseenter:function(t){return e.setAutoplay(!1)},mouseleave:function(t){return e.setAutoplay(e.delay)},touchstart:function(t){return e.setAutoplay(!1)},touchend:function(t){return e.setAutoplay(e.delay)}},scopedSlots:e._u([{key:"navigation-icon",fn:function(t){var s=t.active,a=t.btnProps,o=t.onClick;return[i("q-btn",{attrs:{size:"xs",icon:a.icon,color:s?"white":"grey-7",flat:"",round:"",dense:""},on:{click:function(t){o(),e.onNavigationClick()}}})]}}]),model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},e._l(e.pieces,(function(t,s){return i("q-carousel-slide",{key:s,staticClass:"q-pa-none overflow-hidden cursor-pointer",attrs:{name:s,"img-src":t.featuredImage},on:{click:function(i){return e.onSlideClicked(t)}},scopedSlots:e._u([{key:"default",fn:function(){return[i("div",{staticClass:"relative-position"},[i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showVideo,expression:"showVideo"}]},[i("div",{staticClass:"video-filter"}),e.loadVideo?i("iframe",{attrs:{src:t.videoLink}}):e._e()])])],1),i("transition",{attrs:{name:"fade"}},[t.tag?i("div",{directives:[{name:"show",rawName:"v-show",value:!e.showVideo,expression:"!showVideo"}],staticClass:"piece-tag",style:"background:"+t.tag.COLOR},[i("h5",{staticClass:"q-ma-none"},[e._v(e._s(t.tag.TEXT))])]):e._e()]),t.logo?i("img",{staticClass:"piece-logo",class:{"piece-logo-mobile":e.isBreakpointNotMd},attrs:{src:t.logo}}):e._e(),e.isBreakpointNotMd?i("mobile-timer",{staticClass:"timer",staticStyle:{width:"200px"},attrs:{endDate:t.releaseDate}}):i("timer",{staticClass:"timer",attrs:{endDate:t.releaseDate}})]},proxy:!0}],null,!0)})})),1)],1)},a=[],o=i("5a50"),n=i("ad9e"),r={name:"PieceSlider",mixins:[n["a"]],props:{pieces:{type:Array,required:!0}},data:()=>({slide:0,autoplay:!0,delay:o["d"].SLIDER.DELAY_TIME,showVideo:!1,loadVideo:!1,videoLoadTimer:null,videoReproducingTimer:null}),created(){this.autoplay=this.delay},watch:{pieces(e){e.forEach((e=>{const t=new Image;t.src=e.featuredImage;const i=new Image;i.src=e.logo}))},autoplay(e){this.checkVideoLoad(!Boolean(e))},showVideo(e){if(e){let e=this;this.videoReproducingTimer=setTimeout((function(){e.showVideo=!1}),o["d"].SLIDER.VIDEO_REPRODUCTION_TIME)}else clearInterval(this.videoReproducingTimer)}},components:{timer:i("e9ba").default,"mobile-timer":i("f452").default},methods:{onNavigationClick(){this.isMobile?this.setAutoplay(this.delay):(clearInterval(this.videoReproducingTimer),this.checkVideoLoad(!1),this.checkVideoLoad(!0))},checkVideoLoad(e){if(e&&!this.isMobile&&this.pieces[this.slide].videoLink){this.loadVideo=!0;let e=this;this.videoLoadTimer=setTimeout((function(){e.showVideo=!0}),o["d"].SLIDER.VIDEO_LOAD_TIME)}else clearInterval(this.videoLoadTimer),this.showVideo=!1,this.loadVideo=!1},onSlideClicked(e){this.$emit("slideClicked",e.id)},setAutoplay(e){this.autoplay=e}}},c=r,l=(i("1936"),i("2877")),d=i("880c"),u=i("9c40"),h=i("62cd"),p=i("eebe"),m=i.n(p),f=Object(l["a"])(c,s,a,!1,null,"3ef25872",null);t["default"]=f.exports;m()(f,"components",{QCarousel:d["a"],QBtn:u["a"],QCarouselSlide:h["a"]})},f452:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.loaded?e._e():i("div",{staticClass:"text-center"},[i("spinner",{attrs:{width:"40"}})],1),e.completed?i("h4",{staticClass:"q-my-sm"},[e._v(e._s(e.completedLabel))]):e._e(),e.loaded&&!e.completed?i("div",{staticClass:"text-center",staticStyle:{width:"200px"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("h5",{staticClass:"q-ma-none"},[e._v(e._s(e.displayDays))])]),i("div",{staticClass:"col"},[i("h5",{staticClass:"q-ma-none"},[e._v(e._s(e.displayHours))])]),i("div",{staticClass:"col"},[i("h5",{staticClass:"q-ma-none"},[e._v(e._s(e.displayMinutes))])]),i("div",{staticClass:"col"},[i("h5",{staticClass:"q-ma-none"},[e._v(e._s(e.displaySeconds))])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("p",{staticClass:"q-ma-none"},[e._v(e._s(e.daysLabel))])]),i("div",{staticClass:"col"},[i("p",{staticClass:"q-ma-none"},[e._v(e._s(e.hoursLabel))])]),i("div",{staticClass:"col"},[i("p",{staticClass:"q-ma-none"},[e._v(e._s(e.minutesLabel))])]),i("div",{staticClass:"col"},[i("p",{staticClass:"q-ma-none"},[e._v(e._s(e.secondsLabel))])])])]):e._e()])},a=[],o=i("9466"),n={name:"SliderMobileTimer",mixins:[o["a"]]},r=n,c=i("2877"),l=Object(c["a"])(r,s,a,!1,null,null,null);t["default"]=l.exports}}]);