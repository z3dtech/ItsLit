"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var Pages_1 = require("./Pages");
var Navbar_1 = require("./Navbar");
exports.View = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueView,
    name: 'View',
    tag: 'f7-view',
    events: [
        'swipeback:move',
        'swipeback:beforechange',
        'swipeback:afterchange',
        'swipeback:beforereset',
        'swipeback:afterreset',
        'tab:show',
        'tab:hide'
    ],
    instantiatedComponents: [
        Pages_1.Pages,
        Navbar_1.Navbar
    ]
});

//# sourceMappingURL=View.js.map
