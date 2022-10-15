'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4fd1813cd726ca88c862cad39c208d81",
"index.html": "02613505be55d53016f846ccea431be1",
"/": "02613505be55d53016f846ccea431be1",
"main.dart.js": "ed610b28f3935846e0d1e461aba06cb6",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6f8e5a4fd0f78fe83ef27cd977d04d99",
"assets/AssetManifest.json": "d5c9612361a754f36eb51bbd20e4fa2c",
"assets/NOTICES": "08efb53f388bb3e644702327c26ce0fb",
"assets/FontManifest.json": "ff6198f674846a34ba253c3c30ee7574",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "9229a152864fdef567066974e45143e7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/logo-white.png": "450bb30fc140ccc5cbfb61bb9b4b747b",
"assets/assets/images/logo.png": "f93c671ff7bef8c1107c7388ea0feb5b",
"assets/assets/images/header-bg.png": "ef22be24fdfa3a22d31b2c8318583046",
"assets/assets/mock/product_15.png": "46db7332feb38aa02dc7c60450bfb3d2",
"assets/assets/mock/product_1.png": "46db7332feb38aa02dc7c60450bfb3d2",
"assets/assets/mock/product_14.png": "6b17c5ad2c58c03a11c123cc65629fab",
"assets/assets/mock/product_16.png": "feeca955bf81a2eeb505f066370ee1ba",
"assets/assets/mock/product_2.png": "bed851fd0e6d4da08a627bfffd3e0047",
"assets/assets/mock/product_3.png": "32f434c6d2ef63fb8ead23cc4297b614",
"assets/assets/mock/product_17.png": "f610f3ad2a718a0d3287e1d7bc061789",
"assets/assets/mock/product_13.png": "b024ad7fb4787c0fa38f08aef229abf3",
"assets/assets/mock/product_7.png": "91df683c27c551f43ddd48f0cef8c36a",
"assets/assets/mock/product_6.png": "a250c4180b7d8a8c6ba5491b15394d8b",
"assets/assets/mock/product_12.png": "ddf182833997c1fd63cc0222ac6546d6",
"assets/assets/mock/product_10.png": "46cf1541bf98ffcd7a89210d49e7b862",
"assets/assets/mock/product_4.png": "82c144ae9ea33d4b0c78ec39ceae4f8c",
"assets/assets/mock/product_5.png": "4d56d5d299fd71e9e6bd5ff2e491262b",
"assets/assets/mock/product_11.png": "4e736bbdde16cb91dffdf16af5f04812",
"assets/assets/mock/product_8.png": "122df1aef578e550753ba5f0405016e9",
"assets/assets/mock/certificates.png": "f7aed9dcf5cfab6ae9e51c27513d8703",
"assets/assets/mock/product_9.png": "d294ec7e71ca702fa067aaadfa8614a0",
"assets/assets/mock/certificate_1.jpg": "9d0e95d9234e0e5c46d1022918c83162",
"assets/assets/mock/promo_5.png": "e0d700ca41383a8d6bab000a297034dc",
"assets/assets/mock/promo_4.png": "0b307eec1503bbcb6d545c4969ec0607",
"assets/assets/mock/promo_3.png": "0ca1334537cb56ef7c88c91a5b2a925c",
"assets/assets/mock/promo_2.png": "40a564e8c57d5f3075e8dee7e6af4370",
"assets/assets/mock/promo_1.png": "ee893a0088cbacca9a6782921d8a97db",
"assets/assets/languages/pl.json": "0824ebaea5b1c8ebf6bdfa39ea29e017",
"assets/assets/languages/en.json": "2594feb492f37863be434afc9258d60f",
"assets/assets/icons/ic_arrow_right.png": "370848f800f76e146cd06b1ec1ec8e2e",
"assets/assets/icons/ic_flag_ua.png": "66861f90619de0595cd2c17d840143e2",
"assets/assets/icons/ic_arrow_left.png": "487e4188925cc410c0dc51e1d1654324",
"assets/assets/icons/ic_close.png": "95e7b22adc28296d8924488902bda666",
"assets/assets/icons/ic_flag_eng.png": "e7784bf5220c798d7f2af286e00f4d66",
"assets/assets/icons/ic_flag_pl.png": "6b77dbf4e4440eec3cc8d14da4088fc4",
"assets/assets/icons/ic_error.png": "1473e8c0b96cef4321a44c7b0acbc69c",
"assets/assets/icons/ic_arrow_left_hovered.png": "ad823eaffeb0cacc6da353161365a309",
"assets/assets/icons/ic_arrow_right_hovered.png": "3b82d622b04e353503a2029d9699f169",
"assets/assets/fonts/titillium-web-regular.ttf": "57e937e4eef39e324bd4f26745053687",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
