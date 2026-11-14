// Edge Ledger service worker: lets the site install as an app. It caches nothing,
// so you always get the newest published data straight from the network.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => { e.respondWith(fetch(e.request)); });
