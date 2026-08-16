// Service worker mínimo — solo existe para que el navegador
// considere la app "instalable" (criterio de Chrome/Android).
// No cachea nada de forma agresiva: siempre intenta ir a la red primero,
// así los pedidos y datos de Firebase siempre están frescos.
const CACHE = 'lemonclub-pedidos-shell-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Passthrough — no interceptamos ni cacheamos datos de Firebase.
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
