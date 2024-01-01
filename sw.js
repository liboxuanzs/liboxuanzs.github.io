/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/29/母亲/index.html","1d74f03eb315e303f4f2648bc4876b58"],["/2023/08/29/秋/index.html","958d69d2f15922320e6367486868329a"],["/2023/08/30/端午/index.html","8b8633b93eaa85b61930f6f3944f7cf5"],["/2023/09/16/月光下的故乡/index.html","a86ccfd584e22f856d50085d3518b668"],["/2023/10/05/这一次，我全力以赴/index.html","bdb59c58d2050ddfbb1aac92defa2070"],["/2023/10/14/近朱者不赤，近墨者不黑/index.html","2a096be8a0ba61273db11e4dd3710838"],["/2023/10/21/刘姥姥进大观园/index.html","3c995c9f8f2564f2e27067819e23ab14"],["/2023/11/04/小鸟/index.html","c10d5844798c0e57a75432dd6ed78c7d"],["/2024/01/01/油纸伞/index.html","dfac56bc470167ccc191f1e36f641e7f"],["/404.html","55a58ada6d4f5316500cc7ee60d459ff"],["/about/index.html","f3b09c2de0a4040b881febaa57541293"],["/archives/2023/08/index.html","bd4aa471b3569b204035bbeb2fd8ec71"],["/archives/2023/09/index.html","022f8081db35dc7bffe0d5fd5a135e79"],["/archives/2023/10/index.html","eea7f90d36671f46b5c60bef0d4b8e55"],["/archives/2023/11/index.html","444899acfb5ee2a0fd2e5229eb761f4d"],["/archives/2023/index.html","f2df8237bd8a6797e1e5f769c8b2cd3c"],["/archives/2024/01/index.html","9e5fbbdfa5bee54c50a9e55c870bf578"],["/archives/2024/index.html","6ce0889e437d072fa2a1b84e95d88357"],["/archives/index.html","f24ebb0a50d7c769587eed638779b64b"],["/assets/placeholder/social/08a41b181ce68.svg","ad426740cec22b2e74d8009f3e65666f"],["/assets/placeholder/social/3616429.svg","6ff11cebf95254db5cd14a169b913ed4"],["/assets/placeholder/social/3845874.svg","cc8085e0c2d6776a1dfc598f7c5d8fe6"],["/assets/placeholder/social/942ebbf1a4b91.svg","6845e36834fd015664a2148f218d2d46"],["/assets/wiki/English notes/icon.svg","9f23bf41704c8694fc9684f3cf947031"],["/assets/wiki/math/icon.svg","694f1655de3006b2046d064bcfafe0da"],["/categories/index.html","efc4317bb14d5798f20ae87132b2d2fc"],["/categories/作文/index.html","90b10d5b39bd865ae1d22ab2cbbccb5d"],["/css/main.css","5c9a975a5a2a36a7154e5df64005b391"],["/index.html","74cffe40fd1f1ce00eb14dde54396d0e"],["/js/main.js","c77d92a73c8831513255f19c88107d31"],["/js/plugins/copycode.js","c0ce8a2131f51fa7d6c24090baa77795"],["/js/plugins/fcircle.js","73eec9594c9399beed171ca90254c8f3"],["/js/plugins/friends.js","b46dcd90773fe1e0d5ab7e22363b2000"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","ce7d6454b1a7e54b1e446d6ffab3bce5"],["/js/plugins/memos.js","9370637326abc57a3acd6f07ab4ed2fc"],["/js/plugins/sites.js","7a0686a648bef33fc9354f6d1e418057"],["/js/plugins/timeline.js","83f9ee3a02411f9d876caac891472448"],["/js/plugins/weibo.js","10cc953f176c2b5543ab05e2a2950e45"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/sw-register.js","9331674fb4f0eb78d8c4c20ceff21c96"],["/tags/index.html","f4e2dca18d4522f5ee94dc193420ed0c"],["/tags/传统文化/index.html","94a9949907fb3e24c951658d52991c50"],["/tags/作文/index.html","e54d0dcabbed980bf6c0798eaba204b1"],["/tags/奋斗/index.html","3365c05234ccfb13c99fd6f60ec10054"],["/tags/改写/index.html","0addecd66456f61bb1173eede64ea7d3"],["/tags/故乡/index.html","346c48834a7faeb0b4f9197fca1266fd"],["/tags/母爱/index.html","507e0f38bda237432e9b513528d758ef"],["/tags/秋天/index.html","6f94e44a78c759a0eaea6c4138bfc416"],["/tags/端午节/index.html","f8b2508748af182fd33090a50cc1170c"],["/tags/节日/index.html","b0d1546f63e4d2baa340134e9f8a01a9"],["/tags/议论/index.html","0305f58ac5d841e3778ef674b86e8ae3"],["/wiki/English notes/九上U2T1SA.html","d41d8cd98f00b204e9800998ecf8427e"],["/wiki/English notes/九上U2T1SB.html","d41d8cd98f00b204e9800998ecf8427e"],["/wiki/English notes/九上U2T1SC.html","d41d8cd98f00b204e9800998ecf8427e"],["/wiki/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/wiki/math/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
