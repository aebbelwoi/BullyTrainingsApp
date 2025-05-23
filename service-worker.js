self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('bullie-trainer-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'service-worker.js',
        'referee-whistle-blow-gymnasium-6320.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
