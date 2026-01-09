self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("book-diary-cache").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "style.css",
        "script.js",
        "manifest.json",
        "ChatGPT Image 2026년 1월 9일 오후 05_55_33.png",
        "ChatGPT Image 2026년 1월 9일 오후 05_55_35.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
