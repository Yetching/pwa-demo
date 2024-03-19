self.addEventListener('install', function (e) {
  console.log('Service Worker Install');
  e.waitUntil(
    caches.open('custom-cache-1').then(function (cache) {
      return cache.addAll(['index.html']);
    })
  );
});

self.addEventListener('fetch', function (e) {
  console.log('A fetch was ctach by service worker');

  e.repospondWith(
    caches.match(e.request).then(function (cache) {
      if (cache) return cache;
      return fetch(e.request);
    })
  );
});

self.addEventListener('activate', function (e) {
  console.log('Service Worker Activate');

  e.waitUntil(
    caches.keys().then(function (keys) {
      console.log(keys);
      return Promise.all(
        keys.map((key) => {
          if (key !== 'custom-cache-1') {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
