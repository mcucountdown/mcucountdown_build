(function(e){function t(t){for(var r,o,i=t[0],u=t[1],l=t[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={2:0},a={2:0},c=[];function i(e){return u.p+"js/"+({1:"chunk-common"}[e]||e)+"."+{1:"7d376f24",3:"fe088859",4:"57f7a344",5:"b1cb98c5",6:"19f30cc6",7:"3dc3ab24",8:"16ab0f39",9:"617bc27b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={1:1,3:1,4:1,5:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({1:"chunk-common"}[e]||e)+"."+{1:"fa27ef0d",3:"3a8fc1b6",4:"7c486a9d",5:"44964fb4",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;c.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("5b0d");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),c=n("b05d");r["a"].use(c["a"],{config:{},lang:o["a"],iconSet:a["a"]});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},u=[],l={name:"App"},s=l,f=n("2877"),p=Object(f["a"])(s,i,u,!1,null,null,null),d=p.exports,h=n("2f62");r["a"].use(h["a"]);var m=function(){const e=new h["a"].Store({modules:{},strict:!1});return e},b=n("8c4f");const v=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"8e31")),children:[{path:"",name:"home",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"04b7"))},{path:"/movies",name:"movies",component:()=>Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"b3af"))},{path:"/disneyplus",name:"disneyplus",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"e680"))},{path:"/contact",name:"contact",component:()=>Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,"40fa"))},{path:"/:pieceId",name:"piece",component:()=>Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,"5931")),props:!0}]},{path:"*",name:"404",component:()=>Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,"e086"))}];var y=v;r["a"].use(b["a"]);var g=function(){const e=new b["a"]({scrollBehavior:()=>({x:0,y:0}),routes:y,mode:"hash",base:""});return e},w=async function(){const e="function"===typeof m?await m({Vue:r["a"]}):m,t="function"===typeof g?await g({Vue:r["a"],store:e}):g;e.$router=t;const n={router:t,store:e,render:e=>e(d),el:"#q-app"};return{app:n,store:e,router:t}},P=n("a925"),O={failed:"Action failed",success:"Action was successful"},j={"en-us":O};r["a"].use(P["a"]);const x=new P["a"]({locale:"en-us",fallbackLocale:"en-us",messages:j});var S=({app:e})=>{e.i18n=x},_=n("bc3a"),k=n.n(_);r["a"].prototype.$axios=k.a;const E="";async function A(){const{app:e,store:t,router:n}=await w();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},c=window.location.href.replace(window.location.origin,""),i=[S,void 0];for(let l=0;!1===o&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:c,publicPath:E})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==o&&new r["a"](e)}A()},"5b0d":function(e,t,n){}});