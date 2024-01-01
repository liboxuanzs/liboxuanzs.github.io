/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/29/母亲/index.html","02a682c2327310bd6ab44ca9e8e45355"],["/2023/08/29/秋/index.html","aa87c05bd84d49fb63dec484a028dd59"],["/2023/08/30/端午/index.html","886a7e573d24bd7137dfce959e4f9c9e"],["/2023/09/16/月光下的故乡/index.html","1f18f45209c2e6806f65b06ee9696622"],["/2023/10/05/这一次，我全力以赴/index.html","e82eaf224015ce4de5404a284e2bfb2b"],["/2023/10/14/近朱者不赤，近墨者不黑/index.html","d64900ca71126af36c381f4b99a64bcd"],["/2023/10/21/刘姥姥进大观园/index.html","d1de8da8da881a026f01d1174d615dcb"],["/2023/11/04/小鸟/index.html","376a41e817f5869bee79377870bf1e5e"],["/2023/11/04/油纸伞/index.html","01f4fd881959b5b1564ca02ebeddef54"],["/404.html","3e097b0763ca56b875cb0fc574c14d06"],["/about/index.html","90f8487238d756c7ad0db657ae974b5d"],["/archives/2023/08/index.html","b2ebfbf25bd759d46777d54ef02aa9f5"],["/archives/2023/09/index.html","52d924c6644b1ff52a535246124ce098"],["/archives/2023/10/index.html","387029455ad1031d975fa158acbb4592"],["/archives/2023/11/index.html","fdf0214b6a3a52eda1fdec77eb3de5a8"],["/archives/2023/index.html","fc47f3d0b6f7f74f158c7226ac075236"],["/archives/index.html","e00a6c39fb34142009b54ca0eb4d3d21"],["/assets/placeholder/social/08a41b181ce68.svg","ad426740cec22b2e74d8009f3e65666f"],["/assets/placeholder/social/3616429.svg","6ff11cebf95254db5cd14a169b913ed4"],["/assets/placeholder/social/3845874.svg","cc8085e0c2d6776a1dfc598f7c5d8fe6"],["/assets/placeholder/social/942ebbf1a4b91.svg","6845e36834fd015664a2148f218d2d46"],["/assets/wiki/English notes/icon.svg","9f23bf41704c8694fc9684f3cf947031"],["/assets/wiki/math/icon.svg","694f1655de3006b2046d064bcfafe0da"],["/categories/index.html","465bbda24947fde02a172e32a2dc0b01"],["/categories/作文/index.html","518f5c1a367aa30ce49d32533250d1e9"],["/css/main.css","2f3a049a06e554fc743d1b5c64680010"],["/index.html","9b79694f13dc237cea193231888da315"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/sw-register.js","2693bbbb820a5159d2265e979dbb5bc4"],["/tags/index.html","49dd1921775a7198653e9009dd70b6b5"],["/tags/传统文化/index.html","d4eea3828fe18b6a79a16dfa61b70fbb"],["/tags/作文/index.html","4dd46d2d0cab4d23b0533e0048b83750"],["/tags/奋斗/index.html","0947b306fd27f4c5786a5d6513fa3198"],["/tags/改写/index.html","5f4f7566ef8b45771f6dfae2a51fd147"],["/tags/故乡/index.html","d71fb45684e32ec8e5508a3912d24d49"],["/tags/母爱/index.html","e691e4c4456fc3ae0f652e031cc7862b"],["/tags/秋天/index.html","631db83a909e5606a068895b95cb6c9d"],["/tags/端午节/index.html","eae221dc03eb6bd69aa91e830b9ace3b"],["/tags/节日/index.html","e3b57a7f0821f3969fc449627949fa1e"],["/tags/议论/index.html","4054a4db15889bdfcae492b99bf601f2"],["/wiki/English notes/九上U2T1SA.html","a0488b16b653c6d1685159c45b287e24"],["/wiki/English notes/九上U2T1SB.html","f81945ab5a7ea6cfe81eee920d8a808e"],["/wiki/English notes/九上U2T1SC.html","9b97fae208ac2f1c30bd27ddf47b136e"],["/wiki/index.html","e184d835a841031c3afc59674b9da6b2"],["/wiki/math/index.html","ba00049aea72a978b7814d2ff845a3c5"],["/wiki/tags/学习/index.html","65668640db8aec302bab843497d02e22"]];
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
