if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const d=e=>a(e,n),o={module:{uri:n},exports:i,require:d};s[n]=Promise.all(c.map((e=>o[e]||d(e)))).then((e=>(r(...e),i)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PzqAGBKgInNfDqEzT5BBG/_buildManifest.js",revision:"a775f6b232e33ada28ac1c11eb93ca5d"},{url:"/_next/static/PzqAGBKgInNfDqEzT5BBG/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/PzqAGBKgInNfDqEzT5BBG/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/869-805f508ab622e5fa.js",revision:"805f508ab622e5fa"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-bcfc71f2a46dd008.js",revision:"bcfc71f2a46dd008"},{url:"/_next/static/chunks/pages/_app-ca6aae25bc99a05f.js",revision:"ca6aae25bc99a05f"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/index-8fff1c32bc4d4c29.js",revision:"8fff1c32bc4d4c29"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/230145a5c251db96.css",revision:"230145a5c251db96"},{url:"/_next/static/css/23466a4abaefcc31.css",revision:"23466a4abaefcc31"},{url:"/app.webmanifest",revision:"c41f1820f2c229466e2200d774609af1"},{url:"/decors/airport.png",revision:"76601b102eb2038dc6515542877a1e6b"},{url:"/decors/art-gallery.png",revision:"44bac71f37a0cc0c64a2aa22fd5ed82c"},{url:"/decors/bakery.png",revision:"ea2c824c3c3a06831ff5e73915c25e7c"},{url:"/decors/beach.png",revision:"dae3758bba9924c95b4e486da3d9f402"},{url:"/decors/bridge.png",revision:"d431756a4d04624a83df4688dd885a9e"},{url:"/decors/bus-stop.png",revision:"c39d4bb1e08fc3a6e0165f1d034875ca"},{url:"/decors/cafe.png",revision:"e452289741908cf32fad80d1e403a2e9"},{url:"/decors/clothing-store.png",revision:"5b4e87a37d290c5c0eb0ac114083c297"},{url:"/decors/forest-1.png",revision:"cfe8981c5926fd506e5804ec2db91495"},{url:"/decors/forest-2.png",revision:"1dc9b2f8a4c90358b1c185827a2555af"},{url:"/decors/hair-salon.png",revision:"0b4797aa95b7ba7b2ddfa896114a994c"},{url:"/decors/hamburger-shop.png",revision:"565ce96bfdaaeb392ddf50439c7d73d8"},{url:"/decors/hotel.png",revision:"2a56a7980e148c7c1ebb3a5a9176d6c0"},{url:"/decors/italian-restaurant.png",revision:"a491319a74993f6d337170d0306620b1"},{url:"/decors/library.png",revision:"761043ae1b81deda6ef9c6ce3f1bed30"},{url:"/decors/mini-mart-2.png",revision:"4d677a307bffee0d1b9a1d81621d10a3"},{url:"/decors/mini-mart.png",revision:"c7b26b4325f97d74b98737df4a7dc922"},{url:"/decors/mountain.png",revision:"d1680fbbdae4cb7a4adf0f83122e4a54"},{url:"/decors/movie-theater.png",revision:"45828b6faa8adcde7b9f9b85be860de5"},{url:"/decors/park-four-leaf-clover.png",revision:"d5b98bf520842204bf38499a0e2df71c"},{url:"/decors/park.png",revision:"4ff18290df8c29badd6793b6409fb1f3"},{url:"/decors/pharmacy.png",revision:"36224c62a6708994d415559f96f819a0"},{url:"/decors/post-office.png",revision:"31fea2790e4a341788ad2a5ba075b61b"},{url:"/decors/ramen-restaurant.png",revision:"e2b516d1ab32ed8fec84f1e9baacfae5"},{url:"/decors/restaurant-shiny.png",revision:"ef41f732aad93e26aca4de16f740755c"},{url:"/decors/restaurant.png",revision:"111022645e196f972b7609592343fae2"},{url:"/decors/roadside.png",revision:"56d40dfd409eae3659bbca017f74bd09"},{url:"/decors/special-2023-glasses.png",revision:"1e34b7c1b8b737afbca961e5a4673c5e"},{url:"/decors/special-anniversary-snack.png",revision:"d8a273c2a9866169739845c9cc920ef1"},{url:"/decors/special-chess.png",revision:"e37ea6a8ed20bc5b0f3aef946f2f4fa4"},{url:"/decors/special-easter-egg.png",revision:"c210757823378861a86f392f6014c378"},{url:"/decors/special-fingerboard.png",revision:"f0a0be0e114d705cd23065134fe61ae9"},{url:"/decors/special-flower-card.png",revision:"b2e0089e0f2a324d8c9abd7584967486"},{url:"/decors/special-halloween.png",revision:"cc4173e4ba9f5e07f446bb5cd7fd909c"},{url:"/decors/special-holiday-stickers.png",revision:"f4b46a3df9e366580d2e0569bf596fe4"},{url:"/decors/special-lunar-new-year-2023.png",revision:"aaaa9f6d0876aebecb8a66f3476fbed3"},{url:"/decors/special-lunar-new-year.png",revision:"1b1916e7d6014e51ddcbf589692dfe68"},{url:"/decors/special-mario.png",revision:"ddd2d0509fb77dd345b44814b35cdf9a"},{url:"/decors/special-mitten.png",revision:"588fdff6b64e30344e411334bea265aa"},{url:"/decors/special-present-sticker.png",revision:"dafb49561cdb216bc476b6c05a223c94"},{url:"/decors/special-roadside-coin.png",revision:"045115f0a8ffc9b7dcdc6c373901b0c4"},{url:"/decors/special-sneakers.png",revision:"05a5dfab25f11bc73a96e23571efc052"},{url:"/decors/special-space-suit.png",revision:"4ab32e26b510dd94a0b58af3996c4c90"},{url:"/decors/special-spaceship.png",revision:"50fba74b78227421d548cc5c11189fbd"},{url:"/decors/stadium.png",revision:"c3bb052299c319f2434befbb54ba3914"},{url:"/decors/station-2.png",revision:"79b63c7d8a029c78e876fd4c99448feb"},{url:"/decors/station.png",revision:"ca83605465c63d5880089af7aee5cbd4"},{url:"/decors/supermarket-1.png",revision:"4c5c7fb1324917aeb8091d65d122f58b"},{url:"/decors/supermarket-2.png",revision:"0442407123bebdf3606e305ede4bc26c"},{url:"/decors/supermarket.png",revision:"856211987710fe76d4cbceeadce1f7bf"},{url:"/decors/sushi.png",revision:"0e6856b43f603d621368831d9dceffc5"},{url:"/decors/sweetshop-2.png",revision:"1e6b71e78742408c9920d8162e7bafce"},{url:"/decors/sweetshop.png",revision:"4596329a9ac882799f2afa5728c64368"},{url:"/decors/themepark-1.png",revision:"c2a656ebf64f9b3bb7e2424682eb8000"},{url:"/decors/themepark-2.png",revision:"c2a656ebf64f9b3bb7e2424682eb8000"},{url:"/decors/waterside.png",revision:"1c91ed526e87b4333c928341cdb4544a"},{url:"/decors/weather-1.png",revision:"20f791abc077e43bdc07dd8bb5d51a7e"},{url:"/decors/weather-2.png",revision:"20f791abc077e43bdc07dd8bb5d51a7e"},{url:"/decors/weather-3.png",revision:"20f791abc077e43bdc07dd8bb5d51a7e"},{url:"/decors/zoo.png",revision:"3858e07559aaea975c559925e7dc0dad"},{url:"/favicon.png",revision:"6b316104cdcd71e6ca112c060dbbf3af"},{url:"/icons/android-chrome-192x192.png",revision:"64df286d40e6da57774158dc50ce327b"},{url:"/icons/android-chrome-512x512.png",revision:"8b4ff50a8a3b95038a6fec714c82991a"},{url:"/icons/apple-touch-icon.png",revision:"37b95a3ad31878eeec2bfd1e60083f7b"},{url:"/icons/browserconfig.xml",revision:"d2c3ec839559c9b7c7638c378d45bca5"},{url:"/icons/favicon-16x16.png",revision:"b1a97b094c041743cd604bd10ca623d0"},{url:"/icons/favicon-32x32.png",revision:"0e4893eb9f6d6906aecc7dfd331154d9"},{url:"/icons/favicon.ico",revision:"7cd3588d2948d02e427abd11e0e01145"},{url:"/icons/icon.png",revision:"996a56812cfff4f5ca0bfb5a9aa6020a"},{url:"/icons/icon.xcf",revision:"368fcbacde20d8940a6e8ed903aa57f2"},{url:"/icons/maskable_icon_x192.png",revision:"b65b7f0f56cec47d70ac5371333ab2be"},{url:"/icons/maskable_icon_x512.png",revision:"b60af9052b61d3bc618b5dc90748c72c"},{url:"/icons/mstile-150x150.png",revision:"44510810de7f7d0dc5f99a1c738243e8"},{url:"/icons/safari-pinned-tab.svg",revision:"3a03329701f0b03e5073906351b22911"},{url:"/icons/screenshot_320x640.png",revision:"db0fbb90ebcbb11bfc8b11a82355b094"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
