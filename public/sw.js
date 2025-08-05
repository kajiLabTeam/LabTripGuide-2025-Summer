// Service Worker for LabTripGuide
const CACHE_NAME = 'lab-trip-guide-v1';
const urlsToCache = [
  '/',
  '/accommodation',
  '/styles/global.css',
  '/favicon.svg'
];

// キャッシュしないリクエスト
const skipCacheUrls = [
  '/sw.js',
  '/register-sw.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  
  // chrome-extensionスキームは無視
  if (requestUrl.protocol === 'chrome-extension:') {
    return;
  }
  
  // Service Workerファイル自体はキャッシュしない
  if (skipCacheUrls.some(url => requestUrl.pathname.includes(url))) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // キャッシュに存在する場合はキャッシュを返す
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // キャッシュにない場合はネットワークから取得
        return fetch(event.request, {
          redirect: 'follow', // リダイレクトを明示的に許可
          mode: 'cors' // CORSモードを明示的に設定
        })
          .then((response) => {
            // 有効なレスポンスでない場合はそのまま返す
            if (!response || response.status !== 200) {
              return response;
            }
            
            // レスポンスをクローンしてキャッシュに保存
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              })
              .catch((cacheError) => {
                console.error('Cache error:', cacheError);
              });
            
            return response;
          })
          .catch((error) => {
            console.error('Fetch error:', error);
            // エラーの場合はキャッシュから取得を試行
            return caches.match(event.request);
          });
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 