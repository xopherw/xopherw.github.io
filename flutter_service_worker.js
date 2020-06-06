'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "94d8f5f3687b41af164a3c77dd42b372",
"/": "94d8f5f3687b41af164a3c77dd42b372",
"main.dart.js": "0e50cc0bb9c36ef916c6731f12e49ea4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7129a99e34798c72db7e6a6761f1c0f8",
"documents/Resume.pdf": "9b9fd7c5968eab6034c44671f8fc2470",
".git/config": "8f2d27274582783499062cf17e9ccd58",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/0c/d0ca15a4141fa5c39b323fd5aca88ac4121219": "eccee3874164ed2f08df386a2324cc3f",
".git/objects/66/318106b6e316d0f4d067cbb490d13e9d059225": "71d3cd0a0c118a70cdd50ab4dec21c1a",
".git/objects/3e/e196ba641556fb4353e9741589e055fa0a6f6d": "bd9059b04aa712b9f68379ac4aa105f5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/34/f0583ba8ec4fe099510cf37e28137bede31696": "9caa09f9effe6dcd5598ac0edfa9a767",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/9c/306e81b2699f85a6106636ac9d7e535f0b763d": "c37ce7facfb369740afc8aa9a380bd7f",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/b4/ac8cff7220886d35c19ebdee13b5aa5d8cda1c": "ef7090e1c4df47aba57fe11ae5bcba3c",
".git/objects/eb/76cf1f5390ca4f053ad5f5a2a83bd9b5f09763": "fd8f4aab1ae04d37e93b3f76a1909676",
".git/objects/c9/071792e7c9e8f0979ed0cb8d9c2720337e1461": "09ec66c767b1088962639e804ef2c811",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/c1/4b7b39519cb91b11764a3466935769faf55814": "a617533a09f27782f5b77538f316c18e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/89/b1f33dcf54fb50fbcd08a4c74156c64e3a7c66": "79cffa1a238a2ac40293ff89a97b209a",
".git/objects/45/d68b1ab44d641d988ff007b0075f0ce669fb69": "61be52607016ff371842fedc19ac0631",
".git/objects/74/6c2423833c7d2dbcb7bd41a678a6bf585c5a38": "f507d59002a65010d339632cde80fafc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/7e/8888f75466368dafc7380a8b135b2dd8e329f5": "75b9ef9e780067bbd2b055db100f9626",
".git/objects/26/dd8e71066358b599192ae6aa5406c493815fc7": "5a455cefed5cc3ef9a442c596cc902a5",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/2a05366b4cc43c2ef66ca536e8aa898c6e239b": "1ea06479a2d1cbc42c0693cae6265770",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/5c/8fabaf4d1118e4db9d0e3125453e46f1b494dc": "a32d5555f07394ff41bcce36ea6bdba4",
".git/objects/62/d830797dbcb4a19ba25bd3d807635f9c437a76": "0e3be770066756d1474b0242ca0f1290",
".git/objects/53/d430372790d9d4501d7b59ad94bf8e425fb947": "62ef42e1f1255395f97767582da278ce",
".git/objects/37/ed4229740af41cbdb1adbf48e44f0806c713b2": "7c512e3a6b86c6419a4d3321d63c2add",
".git/objects/06/5197faa7128e7f89b369f43c35a40d9c6e9543": "84e0add54f782eec32a3c7a65052d727",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/d3/6f13a21ce201b04f480bc86714b2042c7b4948": "2fd1cd101c5825b931b43d1acc195503",
".git/objects/dd/5e261e755595ad24d45b396c832f71694138e5": "6ca159f8367f7a3c18cb7ccd3c405dda",
".git/objects/dd/0d63f3a18da8a02317fae6870c44903fef3e38": "d514ffa21ceca2cc62cc1596aeda435f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a1/0234ab0cf6e4c391fef10c85ec864c4c677900": "308dc86523c9ef5a2a9b66496fa19e4f",
".git/objects/ce/73534703ff227d6194b5a49d1ab3e9608ffbfc": "b4f564af5dae61a0571f5d863970db78",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/15/70452c55a9a4cd42f20e024dee0ba60285ce49": "7e879cb7ccff343508e400063eb73e2e",
".git/objects/15/f85041484a0e83cd113c32300aea1d2210407f": "0a4eb99d86e97fdf98e4a066e301fb69",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/82/75094c21ff28be4d153b33e3e5cf37cd1a04d3": "bd96fc0a4d561f06786be0bd6f319550",
".git/objects/14/cf8992059e16b54f05793d8280fc9e27242aec": "509ad6436fd6344d4823351188ce265a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "65873b28549c233c7f15cb2c4939c9f0",
".git/logs/refs/heads/master": "65873b28549c233c7f15cb2c4939c9f0",
".git/logs/refs/remotes/origin/master": "51f60ddfaf7235e4690d8c0a06d72e6d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "3545cb8ebaedac783a3204e5635cbd4e",
".git/refs/remotes/origin/master": "3545cb8ebaedac783a3204e5635cbd4e",
".git/index": "7949287fed79da8261bc7405a1f406a4",
".git/COMMIT_EDITMSG": "28a1a0de2463e046424ab87bf18da8de",
"assets/images/me.jpeg": "d91b3145e9c04ef4d416b7ec6927a3ab",
"assets/images/icons/email.png": "6acc6d677d0929152d16b722d0fa0a2c",
"assets/images/icons/github.png": "00201bc0e35d8c2d62afb4b0503c46ba",
"assets/images/icons/project.png": "855d88183200a1d85340b7790c3a2d99",
"assets/images/icons/linkedin.png": "34c68c57b8cedbf66c2ea14becfc3ff8",
"assets/images/icons/curriculum.png": "9eab7ebc348598b2eaa3d3e009263518",
"assets/images/icons/phone.png": "d0080ea67279f7f61117fdb7e5e072cc",
"assets/AssetManifest.json": "198514154d1f2323b873e74d9770c68b",
"assets/NOTICES": "7bd23fdbcfe274bc95a430f09ba3f77c",
"assets/FontManifest.json": "1a205e5da1e69e9b3abcbdb4decda275",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/fonts/WorkSans-VariableFont_wght.ttf": "b24396917a138794160b24ff04a71d80",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
