 let cacheData = "NewsAppCache";
//to cache files
this.addEventListener("install", (event) => {
    event.waitUntil(
        //the files I wanne cache
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/media/IRANSans.bab5e043.ttf',
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/static/css/main.chunk.css',
                '/manifest.json',
                '/index.html',
                '/desktop',
                '/mobile',
                '/'
            ])
        })
    )
})
//to use caches
this.addEventListener("fetch", (event) => {
    // console.warn("url",event.request.url)
    // //simple notification
    // this.registration.showNotification("Internet", {
    //     body: "internet not working",
    // })

    if (!navigator.onLine) {
	    //notification: frontend notication
	    //to show notification once : we write this if statement
        if (event.request.url === 'http://localhost:3000/static/js/bundle.js') {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working ...",
                })
            )
        }
        //to use cached files
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
}) 