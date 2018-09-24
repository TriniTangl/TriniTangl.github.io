'use strict';

importScripts('sw-toolbox.js');

toolbox.precache([
    "../index.html",
    "../css/style.css",
    "../css/mui.min.css",
    "../js/jquery-3.3.1.min.js",
    "../js/mui.min.js",
    "../js/script.js"
]);
toolbox.router.get('../img/*', toolbox.cacheFirst);
toolbox.router.get('../*', toolbox.networkFirst, {
    networkTimeoutSeconds: 5
});