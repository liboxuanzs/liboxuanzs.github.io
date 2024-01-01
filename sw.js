/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/29/母亲/index.html","1648200991f565cb418f9af98f72d3ce"],["/2023/08/29/秋/index.html","c5c54d54a65bb933124bdc536dcbdb13"],["/2023/08/30/端午/index.html","42a7a1c96a405821dcc17446d8c4845b"],["/2023/09/16/月光下的故乡/index.html","70eaf25e1680f622443d69fea9fc505f"],["/2023/10/05/这一次，我全力以赴/index.html","4e36d716b4698f6ba7efc5d1bb2a998b"],["/2023/10/14/近朱者不赤，近墨者不黑/index.html","0881f695986637bdd45cd10820af2823"],["/2023/10/21/刘姥姥进大观园/index.html","da6a2ef23f7081f27ed5b18a7e5fce2e"],["/2023/11/04/小鸟/index.html","40ab4f2d6df5057335a046d6ebdb3b78"],["/2024/01/01/油纸伞/index.html","76723c4e2a9be511e0103328136830bd"],["/404.html","3e097b0763ca56b875cb0fc574c14d06"],["/about/index.html","90f8487238d756c7ad0db657ae974b5d"],["/archives/2023/08/index.html","a3f803cccc2dc14b4683ec7aa5e31995"],["/archives/2023/09/index.html","fd24bd7813f45174d3b3a02862657e54"],["/archives/2023/10/index.html","ee4a099845fdb7a29161971cda4a995a"],["/archives/2023/11/index.html","3b9c6d3b62494a5764073a4ba8fcdcf7"],["/archives/2023/index.html","6834f7661f9763e727a011c398d9c482"],["/archives/2024/01/index.html","3598523dca5c818c77ce4e12bd9e9caf"],["/archives/2024/index.html","64bbfb71161e8ca83537e9a6c7dcb38f"],["/archives/index.html","cf6747bc983d951750f83b5f4fbf4a86"],["/assets/placeholder/social/08a41b181ce68.svg","ad426740cec22b2e74d8009f3e65666f"],["/assets/placeholder/social/3616429.svg","6ff11cebf95254db5cd14a169b913ed4"],["/assets/placeholder/social/3845874.svg","cc8085e0c2d6776a1dfc598f7c5d8fe6"],["/assets/placeholder/social/942ebbf1a4b91.svg","6845e36834fd015664a2148f218d2d46"],["/assets/wiki/English notes/icon.svg","9f23bf41704c8694fc9684f3cf947031"],["/assets/wiki/math/icon.svg","694f1655de3006b2046d064bcfafe0da"],["/categories/index.html","ffedcd730d93ec03928d05ece169367f"],["/categories/作文/index.html","f4dc004683be4db0840858d4d083676b"],["/css/main.css","2f3a049a06e554fc743d1b5c64680010"],["/index.html","35ad1699d835261606a416fe4e8a9784"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/sw-register.js","bb243f210e63eaccb60c332860ac313f"],["/tags/index.html","76bd3232786e8d0ecd65e36efdbc7c3c"],["/tags/传统文化/index.html","df666937bf5ff73df216c183dec6eca8"],["/tags/作文/index.html","101c9c454c648853ba2ade5a0a381ce2"],["/tags/奋斗/index.html","841bd0d87f8f67b44c701d1aea4490ef"],["/tags/改写/index.html","a3c23c8ca3d82a6dc70b76a4c4e47fd3"],["/tags/故乡/index.html","797d6d30ba821890a23c671390f2c39e"],["/tags/母爱/index.html","015811935813056b8aa445de5fc77442"],["/tags/秋天/index.html","ecaf4446e338f902e52a7d8ec746116f"],["/tags/端午节/index.html","c3bc6cdb93fafd1388c8f723fdce25e4"],["/tags/节日/index.html","b38a3d59e95ae891990aca6c0b2905e7"],["/tags/议论/index.html","57908a7ffd0a6d2312120e2455f8f26b"],["/wiki/English notes/九上U2T1SA.html","a0488b16b653c6d1685159c45b287e24"],["/wiki/English notes/九上U2T1SB.html","f81945ab5a7ea6cfe81eee920d8a808e"],["/wiki/English notes/九上U2T1SC.html","9b97fae208ac2f1c30bd27ddf47b136e"],["/wiki/index.html","e184d835a841031c3afc59674b9da6b2"],["/wiki/math/index.html","ba00049aea72a978b7814d2ff845a3c5"],["/wiki/tags/学习/index.html","65668640db8aec302bab843497d02e22"]];
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
