self.addEventListener('install', function (e) {
  console.log('Service Worker Install new');
  e.waitUntil(
    caches.open('custom-cache-1').then(function (cache) {
      return cache.addAll(['/', 'index.html', 'main.js']);
    })
  );
});

self.addEventListener('fetch', function (e) {
  console.log('A fetch was catch for', e.request.url);

  e.respondWith(
    caches
      .match(e.request)
      .then(function (cache) {
        if (cache) {
          console.log('match success', cache);
          return cache;
        } else {
          return fetch(e.request);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  );
});

self.addEventListener('activate', function (e) {
  console.log('Service Worker Activate new');

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

  return self.clients.claim();
});
