// Service Worker — always fetch fresh HTML, never serve from cache
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  if (event.request.url.includes('production_system_v1_6.html')) {
    event.respondWith(fetch(event.request, { cache: 'no-store' }));
  }
});
