if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let l={};const o=e=>i(e,a),c={module:{uri:a},exports:l,require:o};s[a]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"4d1c2bd8e02e536b20460f3663416055"},{url:"android-chrome-512x512.png",revision:"3688724b220d9f9763c77b2050567be4"},{url:"apple-touch-icon.png",revision:"695d9e998ee0920b9a1a4dcb86c2610d"},{url:"assets/HomeView-5aed3746.js",revision:null},{url:"assets/HomeView-a57020da.css",revision:null},{url:"assets/index-466a4672.css",revision:null},{url:"assets/index-b8f014dd.js",revision:null},{url:"assets/list-38d4eba0.js",revision:null},{url:"assets/ListView-36d6dd92.js",revision:null},{url:"assets/ListView-cfd9a9c8.css",revision:null},{url:"assets/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont-861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"assets/settings-bb312967.js",revision:null},{url:"assets/SettingsView-3d925db6.css",revision:null},{url:"assets/SettingsView-e4e6a5c1.js",revision:null},{url:"assets/tomato_leaf-b8967b6e.svg",revision:null},{url:"assets/tomato-9be2b45c.png",revision:null},{url:"assets/VInput-aa362dea.js",revision:null},{url:"assets/VInput-fe8650e4.css",revision:null},{url:"assets/VRow-b16cfa8b.js",revision:null},{url:"favicon-16x16.png",revision:"4ff639f62c73302633f0a65ac6b914b1"},{url:"favicon-32x32.png",revision:"9fc6e5663882e9182f7ae072313aae62"},{url:"favicon.ico",revision:"26ad0d525e72c1850c5be0785000509a"},{url:"index.html",revision:"5b423d5bb3f61620334414a0186e7892"},{url:"mstile-150x150.png",revision:"753c4ccffe0a2cb461b57dd206674c91"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"b4d994525c99e9c712a087d87d3dfba1"},{url:"splashscreens/ipad_splash.png",revision:"76667c48d81b9fd0fc671ff9b6ead09d"},{url:"splashscreens/ipadpro1_splash.png",revision:"ce4e5bfdb6fcfe78f1845ba995635b85"},{url:"splashscreens/ipadpro2_splash.png",revision:"25e548ae53d0ef486fd3595f325eddc2"},{url:"splashscreens/ipadpro3_splash.png",revision:"c976865145be104591e3bb42e3739d3f"},{url:"splashscreens/iphone5_splash.png",revision:"fb536cc8fcc398eb725749dbea39d552"},{url:"splashscreens/iphone6_splash.png",revision:"c7293ab96abf7b8cc8830d695e9ec59a"},{url:"splashscreens/iphoneplus_splash.png",revision:"40e308c1bd8c543acabed4db33dacf2b"},{url:"splashscreens/iphonex_splash.png",revision:"24831c1f8ac20285eabd089e7a922c49"},{url:"splashscreens/iphonexr_splash.png",revision:"24aa31a9ae7f1e4cd8d46e6e89461160"},{url:"splashscreens/iphonexsmax_splash.png",revision:"8acf6b7b3f654eab06ba2221ccd5368e"},{url:"./android-chrome-192x192.png",revision:"4d1c2bd8e02e536b20460f3663416055"},{url:"./android-chrome-512x512.png",revision:"3688724b220d9f9763c77b2050567be4"},{url:"manifest.webmanifest",revision:"20d3fedf5d424126bcf77a45e95cf2a8"}],{ignoreURLParametersMatching:[/.*/]}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));