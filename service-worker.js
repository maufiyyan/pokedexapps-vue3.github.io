if(!self.define){let n,i={};const e=(e,s)=>(e=new URL(e+".js",s).href,i[e]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=i,document.head.appendChild(n)}else n=e,importScripts(e),i()})).then((()=>{let n=i[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(s,l)=>{const o=n||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const f=n=>e(n,o),c={module:{uri:o},exports:r,require:f};i[o]=Promise.all(s.map((n=>c[n]||f(n)))).then((n=>(l(...n),r)))}}define(["./workbox-ca2b596c"],(function(n){"use strict";n.setCacheNameDetails({prefix:"pokedex-app"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"css/484.02a2f6fb.css",revision:null},{url:"css/8.3d7de719.css",revision:null},{url:"css/807.7199551c.css",revision:null},{url:"css/922.cef23272.css",revision:null},{url:"css/app.cf89b4c4.css",revision:null},{url:"css/vendor.fd50d657.css",revision:null},{url:"favicon.ico",revision:"beb38612802ca23281c8170a74a8458a"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/fa-brands-400.a914b121.woff2",revision:null},{url:"fonts/fa-brands-400.aff1938a.ttf",revision:null},{url:"fonts/fa-regular-400.47074dec.woff2",revision:null},{url:"fonts/fa-regular-400.625dca12.ttf",revision:null},{url:"fonts/fa-solid-900.422cfe28.ttf",revision:null},{url:"fonts/fa-solid-900.64d495f5.woff2",revision:null},{url:"fonts/fa-v4compatibility.ea853511.ttf",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.99f5f787.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c08197a9.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"img/logo.d89fa19b.png",revision:null},{url:"img/placeholder.a835fb9b.png",revision:null},{url:"img/pokeball.e45a6ab4.png",revision:null},{url:"index.html",revision:"e11e28587f547ef1951430f760877862"},{url:"js/484.5f44bba4.js",revision:null},{url:"js/8.e91529e3.js",revision:null},{url:"js/807.1f2d5c5f.js",revision:null},{url:"js/862.ea66ca19.js",revision:null},{url:"js/922.85075f90.js",revision:null},{url:"js/app.6e8b29a0.js",revision:null},{url:"js/vendor.ed1c36df.js",revision:null},{url:"manifest.json",revision:"344031c2555d8efc9b8ef1f491540c91"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
