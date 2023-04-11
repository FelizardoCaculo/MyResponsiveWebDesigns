const staticEventOrganizerWebsite = "event-organizer-website";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/about-img.jpg",
    "/images/g-1.jpg",
    "/images/g-2.jpg",
    "/images/g-3.jpg",
    "/images/g-4.jpg",
    "/images/g-5.jpg",
    "/images/g-6.jpg",
    "/images/g-7.jpg",
    "/images/g-8.jpg",
    "/images/g-9.jpg",
    "/images/perfil.jpg",
    "/images/pic-1.png",
    "/images/pic-2.png",
    "/images/pic-3.png",
    "/images/pic-4.png",
    "/images/slide-1.jpg",
    "/images/slide-2.jpg",
    "/images/slide-3.jpg",
    "/images/slide-4.jpg",
    "/images/slide-5.jpg",
    "/images/slide-6.jpg",
    "/images/icons/icon-72x72.png",
    "/images/icons/icon-96x96.png",
    "/images/icons/icon-128x128.png",
    "/images/icons/icon-144x144.png",
    "/images/icons/icon-152x152.png",
    "/images/icons/icon-192x192.png",
    "/images/icons/icon-384x384.png",
    "/images/icons/icon-512x512.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticEventOrganizerWebsite).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})