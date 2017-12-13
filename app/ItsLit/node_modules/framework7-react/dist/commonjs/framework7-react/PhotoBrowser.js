"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.PhotoBrowser = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePhotoBrowser,
    name: 'PhotoBrowser',
    tag: 'f7-photo-browser',
    events: [
        'open',
        'close',
        'swipeToClose',
        'slideChangeStart',
        'slideChangeEnd',
        'transitionStart',
        'transitionEnd',
        'click',
        'tap',
        'doubleTap',
        'lazyImageLoad',
        'lazyImageReady'
    ]
});

//# sourceMappingURL=PhotoBrowser.js.map
